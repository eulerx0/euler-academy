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
  'AUTONOMOUS EVOLUTION'
];

function walkJsFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'tools') continue;
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
}

function runStaticAudit() {
  const errors = [];

  // Verify index.html & styles.css
  const indexHtml = fs.readFileSync(path.join(HUB_DIR, 'index.html'), 'utf8');
  for (const term of FORBIDDEN_INTERNAL_TERMS) {
    if (indexHtml.includes(term)) errors.push(`index.html: forbidden internal term "${term}"`);
  }

  const jsFiles = walkJsFiles(HUB_DIR);
  for (const file of jsFiles) {
    const rel = path.relative(HUB_DIR, file);
    const code = fs.readFileSync(file, 'utf8');
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

          return { katexCount, katexErrors, hasBadTokens, unrendered, overflow, svgIssues };
        });

        if (res.katexErrors.length > 0) issues.push(`[${vp.name}] ${label}: KaTeX errors: ${JSON.stringify(res.katexErrors)}`);
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

      // Open all collapsible panels & details in math-01
      await page.evaluate(() => {
        document.querySelectorAll('details').forEach((d) => { d.open = true; });
        document.querySelectorAll('[onclick*="classList.toggle"]').forEach((b) => b.click());
      });
      await page.waitForTimeout(300);
      await inspectDom('lesson-math-01-expanded');

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
      await page.evaluate(() => {
        document.querySelectorAll('details').forEach((d) => { d.open = true; });
        document.querySelectorAll('[onclick*="classList.toggle"]').forEach((b) => b.click());
      });
      await page.waitForTimeout(250);
      const physStats = await inspectDom('lesson-phys-01');
      if (physStats.katexCount < 600) issues.push(`[${vp.name}] phys-01 expected >=600 KaTeX nodes, got ${physStats.katexCount}`);

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
      if (chemStats.katexCount < 200) issues.push(`[${vp.name}] chem-01 expected >=200 KaTeX nodes, got ${chemStats.katexCount}`);

      // Test both toggle-all-solutions button & all 3 chem-01 simulator modes
      await page.click('#btnToggleAllSolutions');
      await page.waitForTimeout(150);
      await inspectDom('lesson-chem-01-solutions-open');
      for (const cMode of ['redox-beaker', 'metal-acid', 'dosage-redox']) {
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
        }
      }

      await page.click('#btnBackToCatalog');
      await page.waitForTimeout(250);
      const chemBackBanner = await page.textContent('#subjectBanner');
      if (!chemBackBanner.includes('الكيمياء')) {
        issues.push(`[${vp.name}] back button from deep-linked chem-01 did not return to chemistry catalog`);
      }

      if (consoleErrors.length) issues.push(`[${vp.name}] console errors: ${JSON.stringify(consoleErrors)}`);
      if (pageErrors.length) issues.push(`[${vp.name}] page errors: ${JSON.stringify(pageErrors)}`);
      if (failedRequests.length) issues.push(`[${vp.name}] failed local requests: ${JSON.stringify(failedRequests)}`);

      await page.close();
    }
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
