#!/usr/bin/env node
/**
 * Euler Academy — Static & Browser Integrity Auditor
 * Usage:
 *   node tools/audit.js            # Fast static + sandbox validation
 *   node tools/audit.js --browser  # Full headless Chromium + KaTeX + layout verification
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const http = require('http');

const HUB_DIR = path.resolve(__dirname, '..');

const FORBIDDEN_INTERNAL_TERMS = [
  'طوبة فوق طوبة',
  'الوكيل المستقل',
  'الدورة القادمة',
  'hustle_engine',
  'AUTONOMOUS EVOLUTION',
  'Sprint Build',
  'Cycle #',
  'roadmap',
  'subagent'
];

function walkJsFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['.git', 'node_modules', 'tools', 'vendor', 'dist', '.github'].includes(entry.name)) continue;
      results.push(...walkJsFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      results.push(full);
    }
  }
  return results;
}

function checkTextIntegrity(label, text, errors) {
  if (typeof text !== 'string') return;

  // 1. Control chars (often from unescaped \f, \b, \v inside template literals)
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if ((code < 32 && code !== 9 && code !== 10 && code !== 13)) {
      errors.push(`${label}: ASCII control char 0x${code.toString(16)} near ${JSON.stringify(text.slice(Math.max(0, i - 20), i + 20))}`);
      break;
    }
  }

  // 2. Balanced $$ and $
  const doubleCount = (text.match(/\$\$/g) || []).length;
  const singleCount = (text.replace(/\$\$/g, '').match(/\$/g) || []).length;
  if (doubleCount % 2 !== 0) errors.push(`${label}: unbalanced $$ count (${doubleCount})`);
  if (singleCount % 2 !== 0) errors.push(`${label}: unbalanced $ count (${singleCount})`);

  // 3. Common unescaped LaTeX & zero Arabic chars inside math segments
  const mathSegments = [];
  let scanIdx = 0;
  const cleanedText = text.replace(/\\\$/g, '__ESC_DOLLAR__');
  while (scanIdx < cleanedText.length) {
    if (cleanedText.slice(scanIdx, scanIdx + 2) === '$$') {
      const end = cleanedText.indexOf('$$', scanIdx + 2);
      if (end !== -1) {
        mathSegments.push(cleanedText.slice(scanIdx, end + 2));
        scanIdx = end + 2;
        continue;
      }
    } else if (cleanedText[scanIdx] === '$' && cleanedText[scanIdx + 1] !== '{') {
      const end = cleanedText.indexOf('$', scanIdx + 1);
      if (end !== -1 && !cleanedText.slice(scanIdx, end).includes('\n')) {
        mathSegments.push(cleanedText.slice(scanIdx, end + 1));
        scanIdx = end + 1;
        continue;
      }
    }
    scanIdx += 1;
  }
  const missingSlashRe = /(^|[^\\a-zA-Z])(frac\{|sqrt[\[{]|infty\b|mathbb\{|forall\b|implies\b|iff\b|times\b|vec\{|text\{)/;
  for (const seg of mathSegments) {
    const m = seg.match(missingSlashRe);
    if (m) {
      errors.push(`${label}: suspect missing backslash "${m[2]}" in ${JSON.stringify(seg.slice(0, 80))}`);
    }
    if (/[\u0600-\u06FF]/.test(seg)) {
      errors.push(`${label}: Arabic character found inside math delimiters: ${JSON.stringify(seg.slice(0, 80))}`);
    }
  }

  // 4. Forbidden internal terms
  for (const term of FORBIDDEN_INTERNAL_TERMS) {
    if (text.includes(term)) {
      errors.push(`${label}: forbidden internal term "${term}" found in public content`);
    }
  }

  // 5. Standardized collapsible solutions (never raw classList.toggle)
  if (/classList\.toggle\(\s*['"]hidden['"]\s*\)/.test(text)) {
    errors.push(`${label}: raw classList.toggle('hidden') detected; use window.EulerAcademy.toggleCollapsible('<id>-solution', this) or <details>`);
  }
  const tcRegex = /toggleCollapsible\(\s*['"]([^'"]+)['"]/g;
  let tcMatch;
  while ((tcMatch = tcRegex.exec(text)) !== null) {
    const targetId = tcMatch[1];
    if (!/(?:-solution|-master-solution)$/.test(targetId) && !text.includes(`id="${targetId}" data-solution-panel`) && !text.includes(`id='${targetId}' data-solution-panel`)) {
      errors.push(`${label}: toggleCollapsible('${targetId}') target ID must end with '-solution' or '-master-solution' (or include data-solution-panel) so #btnToggleAllSolutions controls it`);
    }
  }
}

function runStaticAudit() {
  const errors = [];

  // Verify index.html & styles.css
  const indexHtml = fs.readFileSync(path.join(HUB_DIR, 'index.html'), 'utf8');
  const stylesCss = fs.readFileSync(path.join(HUB_DIR, 'css', 'styles.css'), 'utf8');
  for (const term of FORBIDDEN_INTERNAL_TERMS) {
    if (indexHtml.includes(term)) errors.push(`index.html: forbidden internal term "${term}"`);
    if (stylesCss.includes(term)) errors.push(`css/styles.css: forbidden internal term "${term}"`);
  }

  const jsFiles = walkJsFiles(HUB_DIR);
  for (const file of jsFiles) {
    const rel = path.relative(HUB_DIR, file);
    const code = fs.readFileSync(file, 'utf8');
    if (code.includes('$' + '${')) {
      errors.push(`${rel}: accidental adjacent dollar-template delimiters ($ + {) detected`);
    }
    for (const term of FORBIDDEN_INTERNAL_TERMS) {
      if (code.includes(term)) errors.push(`${rel}: forbidden internal term "${term}" detected`);
    }
    if (rel.startsWith('modules/') && !rel.endsWith('lexique.js') && !rel.endsWith('exam.js')) {
      if (/rounded-2xl p-[56]">/.test(code)) {
        errors.push(`${rel}: unresponsive outer card padding (use responsive p-3.5 sm:p-6 for mobile clarity)`);
      }
    }
    try {
      new vm.Script(code, { filename: rel });
    } catch (err) {
      errors.push(`Syntax error in ${rel}: ${err.message}`);
    }
  }

  // Load core + subject data in sandbox
  const sandbox = {
    window: null,
    document: { addEventListener: () => {} },
    console,
    setTimeout,
    clearTimeout,
    Math
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);

  const bootFiles = [
    'js/core.js',
    'js/canvasUtils.js',
    'data/math.js',
    'data/physics.js',
    'data/chemistry.js'
  ];
  for (const f of bootFiles) {
    const full = path.join(HUB_DIR, f);
    if (!fs.existsSync(full)) {
      errors.push(`Missing core/data file: ${f}`);
      continue;
    }
    vm.runInContext(fs.readFileSync(full, 'utf8'), sandbox, { filename: f });
  }

  const api = sandbox.EulerAcademy;
  const curriculum = api.curriculum;
  const expectedSubjects = ['math', 'physics', 'chemistry'];
  for (const s of expectedSubjects) {
    if (!curriculum[s]) errors.push(`Missing subject "${s}"`);
  }

  const seenLessonIds = new Set();
  const seenAxisIds = new Set();
  let totalLessons = 0;
  let completedAxes = 0;

  for (const [subjKey, subj] of Object.entries(curriculum)) {
    for (const lesson of subj.lessons || []) {
      totalLessons += 1;
      if (seenLessonIds.has(lesson.id)) errors.push(`Duplicate lesson ID: ${lesson.id}`);
      seenLessonIds.add(lesson.id);

      checkTextIntegrity(`data/${subjKey}.js:${lesson.id}`, JSON.stringify(lesson), errors);

      const baseDir = path.join(HUB_DIR, 'modules', subjKey, lesson.id);

      if (lesson.hasLexique) {
        const lexFile = path.join(baseDir, 'lexique.js');
        if (!fs.existsSync(lexFile)) {
          errors.push(`Missing lexique file for ${lesson.id}: ${path.relative(HUB_DIR, lexFile)}`);
        } else {
          vm.runInContext(fs.readFileSync(lexFile, 'utf8'), sandbox, { filename: lexFile });
          const lex = api.getLexique(lesson.id);
          if (!lex || lex.length === 0) errors.push(`Lexique not registered for ${lesson.id}`);
        }
      }

      if (lesson.hasExam) {
        const examFile = path.join(baseDir, 'exam.js');
        if (!fs.existsSync(examFile)) {
          errors.push(`Missing exam file for ${lesson.id}: ${path.relative(HUB_DIR, examFile)}`);
        } else {
          vm.runInContext(fs.readFileSync(examFile, 'utf8'), sandbox, { filename: examFile });
          const examHtml = api.getExamContent(lesson.id);
          if (!examHtml) errors.push(`Exam not registered for ${lesson.id}`);
          else checkTextIntegrity(`${lesson.id}/exam.js`, examHtml, errors);
        }
      }

      if (lesson.simulator && lesson.simulator.script) {
        const simPath = path.join(HUB_DIR, lesson.simulator.script);
        if (!fs.existsSync(simPath)) {
          errors.push(`Missing simulator script for ${lesson.id}: ${lesson.simulator.script}`);
        } else {
          const simSrc = fs.readFileSync(simPath, 'utf8');
          vm.runInContext(simSrc, sandbox, { filename: lesson.simulator.script });
          const simObj = api.getSimulator(lesson.id);
          if (!simObj || typeof simObj.mount !== 'function') {
            errors.push(`Simulator failed to register mount() for ${lesson.id}`);
          }
          for (const term of FORBIDDEN_INTERNAL_TERMS) {
            if (simSrc.includes(term)) errors.push(`${lesson.simulator.script}: forbidden internal term "${term}"`);
          }
        }
      }

      for (const ax of lesson.axes || []) {
        if (!ax.id) {
          errors.push(`Axis missing id in ${lesson.id}`);
          continue;
        }
        if (seenAxisIds.has(ax.id)) errors.push(`Duplicate axis ID: ${ax.id}`);
        seenAxisIds.add(ax.id);

        if (ax.status === 'completed') {
          completedAxes += 1;
          const axFile = ax.module
            ? path.join(HUB_DIR, ax.module)
            : path.join(baseDir, `${ax.id}.js`);
          if (!fs.existsSync(axFile)) {
            errors.push(`Completed axis ${ax.id} missing module file: ${path.relative(HUB_DIR, axFile)}`);
          } else {
            vm.runInContext(fs.readFileSync(axFile, 'utf8'), sandbox, { filename: axFile });
            const html = api.getAxisContent(lesson.id, ax.id);
            if (!html || !html.trim()) {
              errors.push(`Axis module did not register contentHtml for (${lesson.id}, ${ax.id})`);
            } else {
              checkTextIntegrity(`${lesson.id}/${ax.id}.js`, html, errors);
            }
          }
        }
      }
    }
  }

  return {
    totalLessons,
    totalAxes: seenAxisIds.size,
    completedAxes,
    jsFilesChecked: jsFiles.length,
    errors
  };
}

function startStaticServer(rootDir) {
  const mime = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png'
  };
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const reqPath = (req.url || '/').split('?')[0];
      const rel = reqPath === '/' ? 'index.html' : reqPath.replace(/^\/+/, '');
      const full = path.resolve(rootDir, rel);
      if (!full.startsWith(rootDir) || !fs.existsSync(full) || fs.statSync(full).isDirectory()) {
        res.statusCode = 404;
        res.end('Not found');
        return;
      }
      const ext = path.extname(full);
      res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
      fs.createReadStream(full).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address();
      resolve({ server, url: `http://127.0.0.1:${addr.port}/` });
    });
  });
}

async function runBrowserAudit() {
  const { chromium } = require('playwright');
  const { server, url } = await startStaticServer(HUB_DIR);
  const browser = await chromium.launch();
  const issues = [];

  try {
    const viewports = [
      { name: 'desktop', width: 1440, height: 900 },
      { name: 'mobile', width: 375, height: 812 }
    ];

    for (const vp of viewports) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      const consoleErrors = [];
      const pageErrors = [];
      const failedRequests = [];

      page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
      page.on('pageerror', (e) => pageErrors.push(e.message));
      page.on('request', (req) => {
        const u = req.url();
        if (!u.startsWith(url) && !u.startsWith('data:') && !u.startsWith('blob:')) {
          failedRequests.push(`external-network-dependency ${u}`);
        }
      });
      page.on('response', (res) => {
        if (res.status() >= 400 && res.url().startsWith(url)) {
          failedRequests.push(`${res.status()} ${res.url()}`);
        }
      });

      const inspectDom = async (label) => {
        const res = await page.evaluate(() => {
          const katexCount = document.querySelectorAll('.katex').length;
          const katexErrors = Array.from(document.querySelectorAll('.katex-error')).map((e) => e.textContent);
          const visibleText = document.body.innerText;
          const hasBadTokens = /\bundefined\b|\bNaN\b/.test(visibleText);

          // Check visible text nodes for unrendered $...$
          const unrendered = [];
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
          let node;
          while ((node = walker.nextNode())) {
            if (!node.textContent.includes('$')) continue;
            const el = node.parentElement;
            if (!el || el.closest('.katex') || el.closest('script') || el.closest('style')) continue;
            // Walk ancestors for display:none
            let cur = el;
            let hidden = false;
            while (cur) {
              if (window.getComputedStyle(cur).display === 'none') { hidden = true; break; }
              cur = cur.parentElement;
            }
            if (!hidden) unrendered.push(node.textContent.trim().slice(0, 80));
          }

          const overflow = document.documentElement.scrollWidth > window.innerWidth + 1;

          // Check rendered KaTeX nodes for leaked Arabic text (e.g., from broken $$ delimiters)
          const katexArabic = [];
          document.querySelectorAll('.katex-html').forEach((kh) => {
            if (/[\u0600-\u06FF]/.test(kh.textContent || '')) {
              katexArabic.push((kh.textContent || '').trim().slice(0, 60));
            }
          });

          // Check visible SVGs inside lessonView for text clipping or text-to-text overlaps
          const svgIssues = [];
          const lessonView = document.getElementById('lessonView');
          if (lessonView && !lessonView.classList.contains('hidden')) {
            lessonView.querySelectorAll('svg').forEach((svg, idx) => {
              const sr = svg.getBoundingClientRect();
              if (sr.width === 0 || sr.height === 0) return;
              const texts = Array.from(svg.querySelectorAll('text')).map((t) => {
                const r = t.getBoundingClientRect();
                const info = {
                  txt: t.textContent.trim(),
                  l: r.left - sr.left,
                  r: r.right - sr.left,
                  t: r.top - sr.top,
                  b: r.bottom - sr.top
                };
                if (info.l < -2 || info.r > sr.width + 2 || info.t < -2 || info.b > sr.height + 2) {
                  svgIssues.push(`svg[${idx}] clipped text ${JSON.stringify(info.txt)}`);
                }
                return info;
              });
              for (let i = 0; i < texts.length; i++) {
                for (let j = i + 1; j < texts.length; j++) {
                  const a = texts[i], b = texts[j];
                  const ix = Math.max(0, Math.min(a.r, b.r) - Math.max(a.l, b.l));
                  const iy = Math.max(0, Math.min(a.b, b.b) - Math.max(a.t, b.t));
                  if (ix > 2 && iy > 2) {
                    svgIssues.push(`svg[${idx}] overlap (${JSON.stringify(a.txt)} vs ${JSON.stringify(b.txt)})`);
                  }
                }
              }
            });
          }

          return { katexCount, katexErrors, katexArabic, hasBadTokens, unrendered, overflow, svgIssues };
        });

        if (res.katexErrors.length > 0) issues.push(`[${vp.name}] ${label}: KaTeX errors: ${JSON.stringify(res.katexErrors)}`);
        if (res.katexArabic.length > 0) issues.push(`[${vp.name}] ${label}: Arabic text leaked inside rendered KaTeX: ${JSON.stringify(res.katexArabic)}`);
        if (res.hasBadTokens) issues.push(`[${vp.name}] ${label}: found undefined/NaN in visible text`);
        if (res.unrendered.length > 0) issues.push(`[${vp.name}] ${label}: unrendered $ tokens: ${JSON.stringify(res.unrendered)}`);
        if (res.overflow) issues.push(`[${vp.name}] ${label}: horizontal overflow detected`);
        if (res.svgIssues.length > 0) issues.push(`[${vp.name}] ${label}: SVG layout issues: ${JSON.stringify(res.svgIssues)}`);
        return res;
      };

      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      await inspectDom('catalog-math');

      // Test search & filter
      await page.fill('#catalogSearchInput', 'الاتصال');
      await page.waitForTimeout(150);
      const matchedCards = await page.locator('[data-lesson-card]').count();
      if (matchedCards < 1) issues.push(`[${vp.name}] search filter for الاتصال returned 0 cards`);
      await page.fill('#catalogSearchInput', '');

      for (const subj of ['physics', 'chemistry', 'math']) {
        await page.click(`#tab-${subj}`);
        await page.waitForTimeout(300);
        await inspectDom(`catalog-${subj}`);
      }

      // Open active lessons via hash navigation
      await page.evaluate(() => { window.location.hash = '#/lesson/math-01'; });
      await page.waitForTimeout(800);
      const mathStats = await inspectDom('lesson-math-01');
      if (mathStats.katexCount < 1500) issues.push(`[${vp.name}] math-01 expected >1500 KaTeX nodes, got ${mathStats.katexCount}`);

      // Verify unified toggle-all & individual collapsible solutions in math-01
      const mathCollapseCheck = async (expectedOpen, phaseLabel) => {
        const state = await page.evaluate(() => {
          const btn = document.getElementById('btnToggleAllSolutions');
          const expectedIds = [
            'ax3-solution', 'ax3-synth-solution',
            'ax4-solution', 'ax4-synth-solution',
            'ax5-solution', 'ax5-synth-solution',
            'ds1-master-solution'
          ];
          const panels = expectedIds.map((id) => {
            const el = document.getElementById(id);
            const trig = document.querySelector(`[onclick*="'${id}'"], [onclick*='"${id}"']`);
            return {
              id,
              exists: Boolean(el),
              hidden: el ? el.classList.contains('hidden') : null,
              ariaExpanded: trig ? trig.getAttribute('aria-expanded') : null
            };
          });
          const axisDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details')).map((d) => d.open);
          const lexDetails = document.querySelector('#lessonLexiqueCard details');
          return {
            expandedDataset: btn ? btn.dataset.expanded : null,
            panels,
            axisDetails,
            lexiqueOpen: lexDetails ? lexDetails.open : null
          };
        });
        if (state.expandedDataset !== String(expectedOpen)) {
          issues.push(`[${vp.name}] math-01 ${phaseLabel}: #btnToggleAllSolutions dataset.expanded=${state.expandedDataset}, expected ${expectedOpen}`);
        }
        for (const p of state.panels) {
          if (!p.exists) issues.push(`[${vp.name}] math-01 ${phaseLabel}: missing solution panel #${p.id}`);
          else if (p.hidden !== !expectedOpen) {
            issues.push(`[${vp.name}] math-01 ${phaseLabel}: panel #${p.id} hidden=${p.hidden}, expected ${!expectedOpen}`);
          }
          if (p.ariaExpanded !== String(expectedOpen)) {
            issues.push(`[${vp.name}] math-01 ${phaseLabel}: trigger for #${p.id} aria-expanded=${p.ariaExpanded}, expected ${expectedOpen}`);
          }
        }
        if (state.axisDetails.length < 3 || state.axisDetails.some((o) => o !== expectedOpen)) {
          issues.push(`[${vp.name}] math-01 ${phaseLabel}: axis <details> states=${JSON.stringify(state.axisDetails)}, expected all ${expectedOpen}`);
        }
        if (state.lexiqueOpen !== false) {
          issues.push(`[${vp.name}] math-01 ${phaseLabel}: #lessonLexiqueCard <details> unexpectedly changed to open=${state.lexiqueOpen}`);
        }
      };

      await mathCollapseCheck(false, 'initial-collapsed');
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(300);
      await mathCollapseCheck(true, 'after-expand-all');
      await inspectDom('lesson-math-01-expanded');
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(150);
      await mathCollapseCheck(false, 'after-collapse-all');

      // Test individual collapsible solution trigger click & aria sync
      await page.click('[onclick*="ax3-solution"]');
      await page.waitForTimeout(100);
      const ax3Open = await page.evaluate(() => {
        const el = document.getElementById('ax3-solution');
        const tr = document.querySelector('[onclick*="ax3-solution"]');
        return Boolean(el && !el.classList.contains('hidden') && tr && tr.getAttribute('aria-expanded') === 'true');
      });
      if (!ax3Open) issues.push(`[${vp.name}] math-01: clicking individual toggle button for #ax3-solution failed`);
      await page.click('[onclick*="ax3-solution"]');
      await page.waitForTimeout(100);

      // Test all 6 simulator modes + sub-models
      for (const mode of ['continuity', 'piecewise', 'composite', 'tvi', 'reciprocal', 'rootn']) {
        await page.click(`[data-sim-mode="${mode}"]`);
        await page.waitForTimeout(150);
        await inspectDom(`sim-${mode}`);
        if (mode === 'reciprocal') {
          for (let i = 0; i < 3; i++) {
            await page.click(`[data-func-idx="${i}"]`);
            await page.waitForTimeout(100);
            await inspectDom(`sim-reciprocal-${i}`);
          }
        } else if (mode === 'rootn') {
          for (let i = 0; i < 6; i++) {
            await page.click(`[data-rootn-idx="${i}"]`);
            await page.waitForTimeout(100);
            await inspectDom(`sim-rootn-${i}`);
          }
        }
      }

      // Cold deep-link open phys-01 in a fresh navigation to verify router + subject state sync
      await page.goto('about:blank');
      await page.goto(`${url}#/lesson/phys-01`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(700);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(250);
      const physToggleOk = await page.evaluate(() => {
        const sol = document.getElementById('phys1-master-solution');
        const tr = document.querySelector('[onclick*="phys1-master-solution"]');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(
          sol && !sol.classList.contains('hidden')
          && tr && tr.getAttribute('aria-expanded') === 'true'
          && axDetails.length >= 3 && axDetails.every((d) => d.open)
        );
      });
      if (!physToggleOk) issues.push(`[${vp.name}] phys-01: #btnToggleAllSolutions did not expand #phys1-master-solution and all axis <details>`);
      const physStats = await inspectDom('lesson-phys-01');
      if (physStats.katexCount < 600) issues.push(`[${vp.name}] phys-01 expected >=600 KaTeX nodes, got ${physStats.katexCount}`);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(100);
      const physCollapsedOk = await page.evaluate(() => {
        const sol = document.getElementById('phys1-master-solution');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(sol && sol.classList.contains('hidden') && axDetails.every((d) => !d.open));
      });
      if (!physCollapsedOk) issues.push(`[${vp.name}] phys-01: #btnToggleAllSolutions did not collapse #phys1-master-solution and axis <details>`);

      // Test all 5 phys-01 simulator modes + animation + polarity, tension & delay controls
      for (const pMode of ['transverse', 'longitudinal', 'superposition', 'tension', 'delay']) {
        await page.click(`[data-phys-mode="${pMode}"]`);
        await page.waitForTimeout(150);
        await inspectDom(`phys-sim-${pMode}`);
        if (pMode === 'transverse') {
          await page.click('#physPlayBtn');
          await page.waitForTimeout(250);
          await page.click('#physPlayBtn');
          await inspectDom('phys-sim-transverse-animated');
        } else if (pMode === 'superposition') {
          await page.click('[data-super-polar="same"]');
          await page.waitForTimeout(100);
          await inspectDom('phys-sim-superposition-same');
          await page.click('[data-super-polar="opposite"]');
        } else if (pMode === 'tension') {
          await page.evaluate(() => {
            const fEl = document.getElementById('physTensionSlider');
            const mEl = document.getElementById('physMuSlider');
            fEl.value = '0.8';
            fEl.dispatchEvent(new Event('input'));
            mEl.value = '50';
            mEl.dispatchEvent(new Event('input'));
          });
          await page.waitForTimeout(100);
          const vTxt = await page.textContent('#mVal_v');
          if (!vTxt.includes('4.00 m/s')) {
            issues.push(`[${vp.name}] phys-sim-tension expected 4.00 m/s, got ${vTxt}`);
          }
          await inspectDom('phys-sim-tension-updated');
        } else if (pMode === 'delay') {
          await page.click('[data-delay-shape="sym"]');
          await page.waitForTimeout(100);
          await inspectDom('phys-sim-delay-sym');
          await page.click('[data-delay-shape="asym"]');
          await page.evaluate(() => {
            const xEl = document.getElementById('physXmSlider');
            xEl.value = '3.0';
            xEl.dispatchEvent(new Event('input'));
          });
          await page.waitForTimeout(100);
          const tauTxt = await page.textContent('#mVal_tau');
          if (!tauTxt.includes('1.50 s')) {
            issues.push(`[${vp.name}] phys-sim-delay expected 1.50 s, got ${tauTxt}`);
          }
          await inspectDom('phys-sim-delay-updated');
        }
      }

      // Verify back button returns to Physics catalog (not Math!)
      await page.click('#btnBackToCatalog');
      await page.waitForTimeout(250);
      const backBannerText = await page.textContent('#subjectBanner');
      if (!backBannerText.includes('الفيزياء')) {
        issues.push(`[${vp.name}] back button from deep-linked phys-01 did not return to physics catalog`);
      }

      // Cold deep-link open chem-01 to verify Chemistry modules, Lexique, Simulator & KaTeX
      await page.goto('about:blank');
      await page.goto(`${url}#/lesson/chem-01`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(700);
      await page.evaluate(() => {
        document.querySelectorAll('details').forEach((d) => { d.open = true; });
      });
      await page.waitForTimeout(200);
      const chemStats = await inspectDom('lesson-chem-01');
      if (chemStats.katexCount < 700) issues.push(`[${vp.name}] chem-01 expected >=700 KaTeX nodes, got ${chemStats.katexCount}`);

      // Test toggle-all-solutions expand + collapse (including #chem1-master-solution) & all 4 chem-01 simulator modes
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(150);
      const chemToggleOk = await page.evaluate(() => {
        const sol = document.getElementById('chem1-master-solution');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(sol && !sol.classList.contains('hidden') && axDetails.length >= 2 && axDetails.every((d) => d.open));
      });
      if (!chemToggleOk) issues.push(`[${vp.name}] chem-01: #btnToggleAllSolutions did not expand #chem1-master-solution and all axis <details>`);
      await inspectDom('lesson-chem-01-solutions-open');
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(100);
      const chemCollapsed = await page.evaluate(() => {
        const sol = document.getElementById('chem1-master-solution');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(sol && sol.classList.contains('hidden') && axDetails.every((d) => !d.open));
      });
      if (!chemCollapsed) issues.push(`[${vp.name}] chem-01: #btnToggleAllSolutions did not collapse #chem1-master-solution and axis <details>`);
      for (const cMode of ['redox-beaker', 'metal-acid', 'dosage-redox', 'kinetics-factors']) {
        await page.click(`[data-chem-mode="${cMode}"]`);
        await page.waitForTimeout(150);
        await inspectDom(`chem-sim-${cMode}`);
        if (cMode === 'redox-beaker') {
          await page.click('[data-chem-rxn="permanganate"]');
          await page.waitForTimeout(100);
          await inspectDom('chem-sim-permanganate');
          await page.click('#chemPlayBtn');
          await page.waitForTimeout(200);
          await page.click('#chemPlayBtn');
          await page.click('[data-chem-rxn="iodide"]');
        } else if (cMode === 'metal-acid') {
          await page.evaluate(() => {
            const p = document.getElementById('chemProgSlider');
            p.value = '1.00';
            p.dispatchEvent(new Event('input'));
          });
          await page.waitForTimeout(100);
          const vH2 = await page.textContent('#cVal_vh2');
          if (!vH2.includes('192.0 mL')) {
            issues.push(`[${vp.name}] chem-sim-metal-acid expected 192.0 mL at full progress, got ${vH2}`);
          }
          await inspectDom('chem-sim-metal-acid-updated');
        } else if (cMode === 'dosage-redox') {
          await page.evaluate(() => {
            const vEl = document.getElementById('chemDosageVSlider');
            vEl.value = '12.0';
            vEl.dispatchEvent(new Event('input'));
          });
          await page.waitForTimeout(100);
          const veTxt = await page.textContent('#cVal_ve');
          const eqTxt = await page.textContent('#cVal_eqstate');
          if (!veTxt.includes('12.0 mL') || !eqTxt.includes('V = V_E')) {
            issues.push(`[${vp.name}] chem-sim-dosage expected V_E = 12.0 mL at equivalence, got ${veTxt} / ${eqTxt}`);
          }
          await inspectDom('chem-sim-dosage-equivalence');
        } else if (cMode === 'kinetics-factors') {
          await page.evaluate(() => {
            const tEl = document.getElementById('chemTempSlider');
            tEl.value = '50';
            tEl.dispatchEvent(new Event('input'));
          });
          await page.click('#chemTrempeBtn');
          await page.waitForTimeout(100);
          const kStateTxt = await page.textContent('#cVal_kstate');
          if (!kStateTxt.includes('السقي')) {
            issues.push(`[${vp.name}] chem-sim-kinetics expected active Trempe state after clicking #chemTrempeBtn, got ${kStateTxt}`);
          }
          await inspectDom('chem-sim-kinetics-trempe');
        }
      }

      await page.click('#btnBackToCatalog');
      await page.waitForTimeout(250);
      const chemBackBanner = await page.textContent('#subjectBanner');
      if (!chemBackBanner.includes('الكيمياء')) {
        issues.push(`[${vp.name}] back button from deep-linked chem-01 did not return to chemistry catalog`);
      }

      // Cold deep-link open math-02 to verify m02-ax1..m02-ax4, Lexique, #math2-master-solution, 4 sim modes & SVGs
      await page.goto('about:blank');
      await page.goto(`${url}#/lesson/math-02`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(700);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(200);
      const math2Open = await page.evaluate(() => {
        const sol = document.getElementById('math2-master-solution');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(sol && !sol.classList.contains('hidden') && axDetails.length >= 4 && axDetails.every((d) => d.open));
      });
      if (!math2Open) issues.push(`[${vp.name}] math-02: #btnToggleAllSolutions did not expand #math2-master-solution and all 4 axis <details>`);
      const math2Stats = await inspectDom('lesson-math-02');
      if (math2Stats.katexCount < 800) issues.push(`[${vp.name}] math-02 expected >=800 KaTeX nodes, got ${math2Stats.katexCount}`);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(100);
      const math2Collapsed = await page.evaluate(() => {
        const sol = document.getElementById('math2-master-solution');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(sol && sol.classList.contains('hidden') && axDetails.every((d) => !d.open));
      });
      if (!math2Collapsed) issues.push(`[${vp.name}] math-02: #btnToggleAllSolutions did not collapse #math2-master-solution and axis <details>`);
      for (const m2Mode of ['secant-tangent', 'concavity-inflexion', 'branches-infinies', 'inverse-deriv']) {
        await page.click(`[data-m2-mode="${m2Mode}"]`);
        await page.waitForTimeout(150);
        await inspectDom(`math2-sim-${m2Mode}`);
        if (m2Mode === 'branches-infinies') {
          await page.click('[data-m2-branch="3"]');
          await page.waitForTimeout(100);
          await inspectDom('math2-sim-branch-diag');
        }
      }

      // Cold deep-link open phys-02 to verify p02-ax1..p02-ax3, Lexique, #phys2-master-solution, 4 sim modes, SVGs & KaTeX
      await page.goto('about:blank');
      await page.goto(`${url}#/lesson/phys-02`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(700);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(250);
      const phys2Open = await page.evaluate(() => {
        const sol = document.getElementById('phys2-master-solution');
        const tr = document.querySelector('[onclick*="phys2-master-solution"]');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(
          sol && !sol.classList.contains('hidden')
          && tr && tr.getAttribute('aria-expanded') === 'true'
          && axDetails.length >= 3 && axDetails.every((d) => d.open)
        );
      });
      if (!phys2Open) issues.push(`[${vp.name}] phys-02: #btnToggleAllSolutions did not expand #phys2-master-solution and all 3 axis <details>`);
      const phys2Stats = await inspectDom('lesson-phys-02');
      if (phys2Stats.katexCount < 600) issues.push(`[${vp.name}] phys-02 expected >=600 KaTeX nodes, got ${phys2Stats.katexCount}`);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(100);
      const phys2Collapsed = await page.evaluate(() => {
        const sol = document.getElementById('phys2-master-solution');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(sol && sol.classList.contains('hidden') && axDetails.every((d) => !d.open));
      });
      if (!phys2Collapsed) issues.push(`[${vp.name}] phys-02: #btnToggleAllSolutions did not collapse #phys2-master-solution and axis <details>`);
      for (const p2Mode of ['double-period', 'phase-compare', 'stroboscope', 'diffraction']) {
        await page.click(`[data-phys2-mode="${p2Mode}"]`);
        await page.waitForTimeout(150);
        await inspectDom(`phys2-sim-${p2Mode}`);
        if (p2Mode === 'phase-compare') {
          await page.click('[data-p2-ratio="0.5"]');
          await page.waitForTimeout(100);
          const oppState = await page.textContent('#p2Val_state');
          if (!oppState.includes('تعاكس')) issues.push(`[${vp.name}] phys2-sim-phase expected opposition state, got ${oppState}`);
          await inspectDom('phys2-sim-phase-opposition');
        } else if (p2Mode === 'stroboscope') {
          await page.click('[data-p2-ne="21"]');
          await page.waitForTimeout(100);
          await inspectDom('phys2-sim-stroboscope-inverse');
        } else if (p2Mode === 'diffraction') {
          await page.click('[data-p2-medium="nondispersive"]');
          await page.waitForTimeout(100);
          await inspectDom('phys2-sim-diffraction-nondispersive');
          await page.click('[data-p2-medium="dispersive"]');
        }
      }

      // Cold deep-link open chem-02 to verify c02-ax1..ax2, Lexique, #chem2-master-solution, 4 sim modes, SVGs & KaTeX
      await page.goto('about:blank');
      await page.goto(`${url}#/lesson/chem-02`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(700);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(250);
      const chem2Open = await page.evaluate(() => {
        const sol = document.getElementById('chem2-master-solution');
        const tr = document.querySelector('[onclick*="chem2-master-solution"]');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(
          sol && !sol.classList.contains('hidden')
          && tr && tr.getAttribute('aria-expanded') === 'true'
          && axDetails.length >= 2 && axDetails.every((d) => d.open)
        );
      });
      if (!chem2Open) issues.push(`[${vp.name}] chem-02: #btnToggleAllSolutions did not expand #chem2-master-solution and all 2 axis <details>`);
      const chem2Stats = await inspectDom('lesson-chem-02');
      if (chem2Stats.katexCount < 600) issues.push(`[${vp.name}] chem-02 expected >=600 KaTeX nodes, got ${chem2Stats.katexCount}`);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(100);
      const chem2Collapsed = await page.evaluate(() => {
        const sol = document.getElementById('chem2-master-solution');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(sol && sol.classList.contains('hidden') && axDetails.every((d) => !d.open));
      });
      if (!chem2Collapsed) issues.push(`[${vp.name}] chem-02: #btnToggleAllSolutions did not collapse #chem2-master-solution and axis <details>`);
      for (const c2Mode of ['manometry', 'conductimetry', 'tangent-speed', 'kinetic-compare']) {
        await page.click(`[data-c2-mode="${c2Mode}"]`);
        await page.waitForTimeout(150);
        await inspectDom(`chem2-sim-${c2Mode}`);
        if (c2Mode === 'conductimetry') {
          await page.click('[data-c2-cond="hydrolysis"]');
          await page.waitForTimeout(100);
          await inspectDom('chem2-sim-hydrolysis');
          await page.click('[data-c2-cond="saponification"]');
        } else if (c2Mode === 'kinetic-compare') {
          await page.click('[data-c2-dilute="yes"]');
          await page.waitForTimeout(100);
          await inspectDom('chem2-sim-diluted');
          await page.click('[data-c2-dilute="no"]');
        }
      }

      // Cold deep-link open math-03 to verify m03-ax1..m03-ax3, Lexique, #math3-master-solution, 4 sim modes, SVGs & KaTeX
      await page.goto('about:blank');
      await page.goto(`${url}#/lesson/math-03`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(700);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(250);
      const math3Open = await page.evaluate(() => {
        const sol = document.getElementById('math3-master-solution');
        const tr = document.querySelector('[onclick*="math3-master-solution"]');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(
          sol && !sol.classList.contains('hidden')
          && tr && tr.getAttribute('aria-expanded') === 'true'
          && axDetails.length >= 3 && axDetails.every((d) => d.open)
        );
      });
      if (!math3Open) issues.push(`[${vp.name}] math-03: #btnToggleAllSolutions did not expand #math3-master-solution and all 3 axis <details>`);
      const math3Stats = await inspectDom('lesson-math-03');
      if (math3Stats.katexCount < 750) issues.push(`[${vp.name}] math-03 expected >=750 KaTeX nodes, got ${math3Stats.katexCount}`);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(100);
      const math3Collapsed = await page.evaluate(() => {
        const sol = document.getElementById('math3-master-solution');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(sol && sol.classList.contains('hidden') && axDetails.every((d) => !d.open));
      });
      if (!math3Collapsed) issues.push(`[${vp.name}] math-03: #btnToggleAllSolutions did not collapse #math3-master-solution and axis <details>`);
      for (const m3Mode of ['cobweb', 'geometric', 'squeeze', 'contraction']) {
        await page.click(`[data-m3-mode="${m3Mode}"]`);
        await page.waitForTimeout(150);
        await inspectDom(`math3-sim-${m3Mode}`);
        if (m3Mode === 'cobweb') {
          await page.click('[data-m3-cob="1"]');
          await page.waitForTimeout(100);
          await inspectDom('math3-sim-cobweb-spiral');
          await page.click('[data-m3-cob="2"]');
          await page.waitForTimeout(100);
          await inspectDom('math3-sim-cobweb-basin');
          await page.click('[data-m3-cob="0"]');
        } else if (m3Mode === 'geometric') {
          await page.click('[data-m3-q="-1.12"]');
          await page.waitForTimeout(100);
          await inspectDom('math3-sim-geom-neg');
          await page.click('[data-m3-q="0.78"]');
        }
      }

      // Cold deep-link open phys-03 to verify p03-ax1..p03-ax2, Lexique, #phys3-master-solution, 4 sim modes, SVGs & KaTeX
      await page.goto('about:blank');
      await page.goto(`${url}#/lesson/phys-03`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(700);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(250);
      const phys3Open = await page.evaluate(() => {
        const sol = document.getElementById('phys3-master-solution');
        const tr = document.querySelector('[onclick*="phys3-master-solution"]');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(
          sol && !sol.classList.contains('hidden')
          && tr && tr.getAttribute('aria-expanded') === 'true'
          && axDetails.length >= 2 && axDetails.every((d) => d.open)
        );
      });
      if (!phys3Open) issues.push(`[${vp.name}] phys-03: #btnToggleAllSolutions did not expand #phys3-master-solution and all 2 axis <details>`);
      const phys3Stats = await inspectDom('lesson-phys-03');
      if (phys3Stats.katexCount < 400) issues.push(`[${vp.name}] phys-03 expected >=400 KaTeX nodes, got ${phys3Stats.katexCount}`);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(100);
      const phys3Collapsed = await page.evaluate(() => {
        const sol = document.getElementById('phys3-master-solution');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(sol && sol.classList.contains('hidden') && axDetails.every((d) => !d.open));
      });
      if (!phys3Collapsed) issues.push(`[${vp.name}] phys-03: #btnToggleAllSolutions did not collapse #phys3-master-solution and axis <details>`);
      for (const p3Mode of ['diffraction', 'calibration', 'refractive', 'dispersion']) {
        await page.click(`[data-phys3-mode="${p3Mode}"]`);
        await page.waitForTimeout(150);
        await inspectDom(`phys3-sim-${p3Mode}`);
        if (p3Mode === 'diffraction') {
          await page.click('[data-p3-orient="horizontal"]');
          await page.waitForTimeout(100);
          await inspectDom('phys3-sim-diff-horiz');
          await page.click('[data-p3-orient="vertical"]');
        } else if (p3Mode === 'refractive') {
          await page.click('[data-p3-med="2"]');
          await page.waitForTimeout(100);
          await inspectDom('phys3-sim-med-flint');
        } else if (p3Mode === 'dispersion') {
          await page.click('[data-p3-source="laser"]');
          await page.waitForTimeout(100);
          await inspectDom('phys3-sim-disp-laser');
          await page.click('[data-p3-source="white"]');
        }
      }

      // Cold deep-link open chem-03 to verify c03-ax1..c03-ax2, Lexique, #chem3-master-solution, 4 sim modes, SVGs & KaTeX
      await page.goto('about:blank');
      await page.goto(`${url}#/lesson/chem-03`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(700);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(250);
      const chem3Open = await page.evaluate(() => {
        const sol = document.getElementById('chem3-master-solution');
        const tr = document.querySelector('[onclick*="chem3-master-solution"]');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(
          sol && !sol.classList.contains('hidden')
          && tr && tr.getAttribute('aria-expanded') === 'true'
          && axDetails.length >= 2 && axDetails.every((d) => d.open)
        );
      });
      if (!chem3Open) issues.push(`[${vp.name}] chem-03: #btnToggleAllSolutions did not expand #chem3-master-solution and all 2 axis <details>`);
      const chem3Stats = await inspectDom('lesson-chem-03');
      if (chem3Stats.katexCount < 420) issues.push(`[${vp.name}] chem-03 expected >=420 KaTeX nodes, got ${chem3Stats.katexCount}`);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(100);
      const chem3Collapsed = await page.evaluate(() => {
        const sol = document.getElementById('chem3-master-solution');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(sol && sol.classList.contains('hidden') && axDetails.every((d) => !d.open));
      });
      if (!chem3Collapsed) issues.push(`[${vp.name}] chem-03: #btnToggleAllSolutions did not collapse #chem3-master-solution and axis <details>`);
      for (const c3Mode of ['ph-scale', 'tau-compare', 'equilibrium', 'dilution']) {
        await page.click(`[data-c3-mode="${c3Mode}"]`);
        await page.waitForTimeout(150);
        await inspectDom(`chem3-sim-${c3Mode}`);
        if (c3Mode === 'ph-scale') {
          await page.click('[data-c3-acid="strong"]');
          await page.waitForTimeout(100);
          await inspectDom('chem3-sim-ph-strong');
          await page.click('[data-c3-acid="weak"]');
        } else if (c3Mode === 'dilution') {
          await page.click('[data-c3-species="base"]');
          await page.waitForTimeout(100);
          await inspectDom('chem3-sim-dil-base');
          await page.click('[data-c3-species="acid"]');
        }
      }

      // Cold deep-link open math-04 to verify m04-ax1..m04-ax2, Lexique, #math4-master-solution, 4 sim modes, SVGs & KaTeX
      await page.goto('about:blank');
      await page.goto(`${url}#/lesson/math-04`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(700);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(250);
      const math4Open = await page.evaluate(() => {
        const sol = document.getElementById('math4-master-solution');
        const tr = document.querySelector('[onclick*="math4-master-solution"]');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(
          sol && !sol.classList.contains('hidden')
          && tr && tr.getAttribute('aria-expanded') === 'true'
          && axDetails.length >= 2 && axDetails.every((d) => d.open)
        );
      });
      if (!math4Open) issues.push(`[${vp.name}] math-04: #btnToggleAllSolutions did not expand #math4-master-solution and all 2 axis <details>`);
      const math4Stats = await inspectDom('lesson-math-04');
      if (math4Stats.katexCount < 500) issues.push(`[${vp.name}] math-04 expected >=500 KaTeX nodes, got ${math4Stats.katexCount}`);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(100);
      const math4Collapsed = await page.evaluate(() => {
        const sol = document.getElementById('math4-master-solution');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(sol && sol.classList.contains('hidden') && axDetails.every((d) => !d.open));
      });
      if (!math4Collapsed) issues.push(`[${vp.name}] math-04: #btnToggleAllSolutions did not collapse #math4-master-solution and axis <details>`);
      for (const m4Mode of ['family', 'geometry', 'domain', 'verify']) {
        await page.click(`[data-m4-mode="${m4Mode}"]`);
        await page.waitForTimeout(150);
        await inspectDom(`math4-sim-${m4Mode}`);
        if (m4Mode === 'geometry') {
          await page.click('[data-m4-geo="1"]');
          await page.waitForTimeout(100);
          await inspectDom('math4-sim-geo-rational');
          await page.click('[data-m4-geo="0"]');
        } else if (m4Mode === 'domain') {
          await page.click('[data-m4-dom="same"]');
          await page.waitForTimeout(100);
          await inspectDom('math4-sim-dom-same');
          await page.click('[data-m4-dom="jump"]');
        } else if (m4Mode === 'verify') {
          await page.click('[data-m4-up="2"]');
          await page.waitForTimeout(100);
          await inspectDom('math4-sim-verify-trig');
          await page.click('[data-m4-up="0"]');
        }
      }

      // Cold deep-link open phys-04 to verify p04-ax1..p04-ax2, Lexique, #phys4-master-solution, 4 sim modes, SVGs & KaTeX
      await page.goto('about:blank');
      await page.goto(`${url}#/lesson/phys-04`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(700);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(250);
      const phys4Open = await page.evaluate(() => {
        const sol = document.getElementById('phys4-master-solution');
        const tr = document.querySelector('[onclick*="phys4-master-solution"]');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(
          sol && !sol.classList.contains('hidden')
          && tr && tr.getAttribute('aria-expanded') === 'true'
          && axDetails.length >= 2 && axDetails.every((d) => d.open)
        );
      });
      if (!phys4Open) issues.push(`[${vp.name}] phys-04: #btnToggleAllSolutions did not expand #phys4-master-solution and all 2 axis <details>`);
      const phys4Stats = await inspectDom('lesson-phys-04');
      if (phys4Stats.katexCount < 500) issues.push(`[${vp.name}] phys-04 expected >=500 KaTeX nodes, got ${phys4Stats.katexCount}`);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(100);
      const phys4Collapsed = await page.evaluate(() => {
        const sol = document.getElementById('phys4-master-solution');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(sol && sol.classList.contains('hidden') && axDetails.every((d) => !d.open));
      });
      if (!phys4Collapsed) issues.push(`[${vp.name}] phys-04: #btnToggleAllSolutions did not collapse #phys4-master-solution and axis <details>`);
      for (const p4Mode of ['segre', 'decay', 'isotope', 'dating']) {
        await page.click(`[data-phys4-mode="${p4Mode}"]`);
        await page.waitForTimeout(150);
        await inspectDom(`phys4-sim-${p4Mode}`);
        if (p4Mode === 'segre') {
          await page.click('[data-p4-decay="2"]');
          await page.waitForTimeout(100);
          await inspectDom('phys4-sim-segre-betaplus');
          await page.click('[data-p4-decay="0"]');
        } else if (p4Mode === 'dating') {
          await page.click('[data-p4-rock="rock"]');
          await page.waitForTimeout(100);
          await inspectDom('phys4-sim-dating-rock');
          await page.click('[data-p4-rock="c14"]');
        }
      }

      // Cold deep-link open chem-04 to verify c04-ax1..c04-ax2, lexique, simulator, master exam, SVGs, KaTeX & toggleAll
      await page.goto('about:blank');
      await page.goto(`${url}#/lesson/chem-04`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(700);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(250);
      const chem4Open = await page.evaluate(() => {
        const sol = document.getElementById('chem4-master-solution');
        const tr = document.querySelector('[onclick*="chem4-master-solution"]');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(
          sol && !sol.classList.contains('hidden')
          && tr && tr.getAttribute('aria-expanded') === 'true'
          && axDetails.length >= 2 && axDetails.every((d) => d.open)
        );
      });
      if (!chem4Open) issues.push(`[${vp.name}] chem-04: #btnToggleAllSolutions did not expand #chem4-master-solution and all 2 axis <details>`);
      const chem4Stats = await inspectDom('lesson-chem-04');
      if (chem4Stats.katexCount < 500) issues.push(`[${vp.name}] chem-04 expected >=500 KaTeX nodes, got ${chem4Stats.katexCount}`);
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(100);
      const chem4Collapsed = await page.evaluate(() => {
        const sol = document.getElementById('chem4-master-solution');
        const axDetails = Array.from(document.querySelectorAll('#lessonAxesContainer details'));
        return Boolean(sol && sol.classList.contains('hidden') && axDetails.every((d) => !d.open));
      });
      if (!chem4Collapsed) issues.push(`[${vp.name}] chem-04: #btnToggleAllSolutions did not collapse #chem4-master-solution and axis <details>`);
      for (const c4Mode of ['quotient', 'conductance', 'influence', 'equation']) {
        await page.click(`[data-c4-mode="${c4Mode}"]`);
        await page.waitForTimeout(150);
        await inspectDom(`chem4-sim-${c4Mode}`);
        if (c4Mode === 'quotient') {
          await page.click('[data-c4-temp="60"]');
          await page.waitForTimeout(100);
          await inspectDom('chem4-sim-quotient-60');
          await page.click('[data-c4-temp="25"]');
        } else if (c4Mode === 'conductance') {
          await page.click('[data-c4-acid="1"]');
          await page.click('[data-c4-cell="toggle"]');
          await page.waitForTimeout(100);
          await inspectDom('chem4-sim-conductance-alt');
          await page.click('[data-c4-acid="0"]');
          await page.click('[data-c4-cell="toggle"]');
        } else if (c4Mode === 'equation') {
          await page.click('[data-c4-trans="reverse"]');
          await page.waitForTimeout(100);
          await inspectDom('chem4-sim-equation-rev');
          await page.click('[data-c4-trans="base"]');
        }
      }

      if (consoleErrors.length) issues.push(`[${vp.name}] console errors: ${JSON.stringify(consoleErrors)}`);
      if (pageErrors.length) issues.push(`[${vp.name}] page errors: ${JSON.stringify(pageErrors)}`);
      if (failedRequests.length) issues.push(`[${vp.name}] failed local requests: ${JSON.stringify(failedRequests)}`);

      await page.close();
    }

    // Strict Offline file:// verification (network disabled)
    const offlineCtx = await browser.newContext({ offline: true, viewport: { width: 1440, height: 900 } });
    const offlinePage = await offlineCtx.newPage();
    const offlineErrors = [];
    offlinePage.on('pageerror', (e) => offlineErrors.push(e.message));
    offlinePage.on('console', (m) => { if (m.type() === 'error') offlineErrors.push(m.text()); });
    offlinePage.on('requestfailed', (r) => offlineErrors.push(`${r.url()} -> ${r.failure()?.errorText || 'failed'}`));

    const fileUrl = `file://${path.join(HUB_DIR, 'index.html')}#/lesson/math-01`;
    await offlinePage.goto(fileUrl, { waitUntil: 'load' });
    await offlinePage.waitForTimeout(1000);
    const offlineRes = await offlinePage.evaluate(() => {
      const cat = document.getElementById('catalogView');
      return {
        katexCount: document.querySelectorAll('.katex').length,
        katexErrors: document.querySelectorAll('.katex-error').length,
        catalogHidden: cat ? window.getComputedStyle(cat).display === 'none' : false,
        hasCairoFont: (window.getComputedStyle(document.body).fontFamily || '').includes('Cairo')
      };
    });
    if (offlineRes.katexCount < 1500) issues.push(`[offline file://] math-01 expected >=1500 KaTeX nodes, got ${offlineRes.katexCount}`);
    if (offlineRes.katexErrors > 0) issues.push(`[offline file://] ${offlineRes.katexErrors} KaTeX errors`);
    if (!offlineRes.catalogHidden) issues.push(`[offline file://] #catalogView was not hidden (Tailwind offline failure)`);
    if (!offlineRes.hasCairoFont) issues.push(`[offline file://] Cairo font missing`);
    if (offlineErrors.length > 0) issues.push(`[offline file://] errors: ${JSON.stringify(offlineErrors)}`);
    await offlineCtx.close();
  } finally {
    await browser.close();
    if (typeof server.closeAllConnections === 'function') server.closeAllConnections();
    server.close();
  }

  return issues;
}

(async () => {
  const staticRes = runStaticAudit();
  console.log(`Static audit: ${staticRes.totalLessons} lessons, ${staticRes.totalAxes} axes (${staticRes.completedAxes} completed), ${staticRes.jsFilesChecked} JS files checked.`);
  if (staticRes.errors.length > 0) {
    console.error('STATIC AUDIT FAILED:');
    for (const e of staticRes.errors) console.error('  -', e);
    process.exit(1);
  }
  console.log('Static audit PASSED with 0 errors.');

  if (process.argv.includes('--browser')) {
    const browserIssues = await runBrowserAudit();
    if (browserIssues.length > 0) {
      console.error('BROWSER AUDIT FAILED:');
      for (const e of browserIssues) console.error('  -', e);
      process.exit(1);
    }
    console.log('Browser audit (desktop 1440px + mobile 375px) PASSED with 0 errors.');
  }
})();
