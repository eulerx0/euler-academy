#!/usr/bin/env node
/**
 * Euler Academy — Offline Distribution Packager
 * Builds into ./dist/:
 *   1. Euler-Academy-Offline.zip        (clean multi-file offline package)
 *   2. Euler-Academy-SingleFile.html    (zero-dependency standalone HTML for mobile & desktop)
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const HUB_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(HUB_DIR, 'dist');

function walkFiles(dir, exts = null) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkFiles(full, exts));
    } else if (entry.isFile()) {
      if (!exts || exts.some((e) => entry.name.endsWith(e))) out.push(full);
    }
  }
  return out;
}

function inlineCssUrls(cssPath) {
  let css = fs.readFileSync(cssPath, 'utf8');
  const cssDir = path.dirname(cssPath);
  return css.replace(/url\((['"]?)([^)'"]+)\1\)/g, (full, _q, rel) => {
    if (rel.startsWith('data:') || rel.startsWith('http')) return full;
    const cleanRel = rel.split('?')[0].split('#')[0];
    const abs = path.resolve(cssDir, cleanRel);
    if (!fs.existsSync(abs)) return full;
    const b64 = fs.readFileSync(abs).toString('base64');
    const ext = path.extname(abs).toLowerCase();
    const mime = ext === '.woff2' ? 'font/woff2'
      : ext === '.woff' ? 'font/woff'
      : ext === '.ttf' ? 'font/ttf'
      : ext === '.svg' ? 'image/svg+xml'
      : 'application/octet-stream';
    return `url("data:${mime};base64,${b64}")`;
  });
}

function wrapInlineScript(code) {
  // Prevent accidental HTML parser termination if a literal </script> appears inside a string
  return code.replace(/<\/script/gi, '<\\/script');
}

function deduplicateFontFaces(cssText) {
  // Collapse identical src font blocks that only differ by font-weight (e.g. Google variable fonts)
  const blocks = cssText.split('@font-face');
  if (blocks.length <= 1) return cssText;
  const header = blocks[0];
  const bySrcRange = new Map();
  for (let i = 1; i < blocks.length; i++) {
    const raw = '@font-face' + blocks[i];
    const srcM = raw.match(/src:\s*url\([^)]+\)[^;]*;/);
    const rangeM = raw.match(/unicode-range:\s*[^;]+;/);
    const famM = raw.match(/font-family:\s*[^;]+;/);
    const wtM = raw.match(/font-weight:\s*(\d+)\s*;/);
    if (srcM && famM && wtM) {
      const key = `${famM[0]}|${srcM[0]}|${rangeM ? rangeM[0] : ''}`;
      const w = Number(wtM[1]);
      if (!bySrcRange.has(key)) {
        bySrcRange.set(key, { raw, minW: w, maxW: w });
      } else {
        const entry = bySrcRange.get(key);
        entry.minW = Math.min(entry.minW, w);
        entry.maxW = Math.max(entry.maxW, w);
      }
    } else {
      bySrcRange.set(`raw_${i}`, { raw, minW: null, maxW: null });
    }
  }
  const merged = [];
  for (const entry of bySrcRange.values()) {
    if (entry.minW !== null && entry.minW !== entry.maxW) {
      merged.push(entry.raw.replace(/font-weight:\s*\d+\s*;/, `font-weight: ${entry.minW} ${entry.maxW};`));
    } else {
      merged.push(entry.raw);
    }
  }
  return header + merged.join('\n');
}

function buildSingleFileHtml() {
  let html = fs.readFileSync(path.join(HUB_DIR, 'index.html'), 'utf8');

  const iconSvg = fs.readFileSync(path.join(HUB_DIR, 'icon.svg'), 'utf8');
  const iconDataUri = `data:image/svg+xml;base64,${Buffer.from(iconSvg, 'utf8').toString('base64')}`;

  const fontsCss = inlineCssUrls(path.join(HUB_DIR, 'vendor/fonts/fonts.css'));
  const dedupedFontsCss = deduplicateFontFaces(
    fs.readFileSync(path.join(HUB_DIR, 'vendor/fonts/fonts.css'), 'utf8')
  );
  // Compute deduplicated fonts CSS with base64 inlined only once per unique font file
  const tmpFontsCss = dedupedFontsCss.replace(/url\((['"]?)([^)'"]+)\1\)/g, (full, _q, rel) => {
    if (rel.startsWith('data:') || rel.startsWith('http')) return full;
    const abs = path.resolve(path.join(HUB_DIR, 'vendor/fonts'), rel.split('?')[0].split('#')[0]);
    if (!fs.existsSync(abs)) return full;
    return `url("data:font/woff2;base64,${fs.readFileSync(abs).toString('base64')}")`;
  });
  void fontsCss;

  const katexCss = inlineCssUrls(path.join(HUB_DIR, 'vendor/katex/katex.min.css'));
  const mainCss = fs.readFileSync(path.join(HUB_DIR, 'css/styles.css'), 'utf8');

  const twJs = wrapInlineScript(fs.readFileSync(path.join(HUB_DIR, 'vendor/tailwindcss.js'), 'utf8'));
  const katexJs = wrapInlineScript(fs.readFileSync(path.join(HUB_DIR, 'vendor/katex/katex.min.js'), 'utf8'));
  const katexAutoJs = wrapInlineScript(fs.readFileSync(path.join(HUB_DIR, 'vendor/katex/auto-render.min.js'), 'utf8'));

  const coreAndDataScripts = [
    'js/core.js',
    'js/canvasUtils.js',
    'data/math.js',
    'data/physics.js',
    'data/chemistry.js'
  ].map((p) => `<!-- ${p} -->\n<script>\n${wrapInlineScript(fs.readFileSync(path.join(HUB_DIR, p), 'utf8'))}\n</script>`);

  const moduleAndSimFiles = [
    ...walkFiles(path.join(HUB_DIR, 'modules'), ['.js']),
    ...walkFiles(path.join(HUB_DIR, 'simulators'), ['.js'])
  ];
  const preloadedModules = moduleAndSimFiles.map((abs) => {
    const rel = path.relative(HUB_DIR, abs);
    return `<!-- ${rel} -->\n<script>\n${wrapInlineScript(fs.readFileSync(abs, 'utf8'))}\n</script>`;
  });

  const viewAndRouterScripts = [
    'js/catalog.js',
    'js/lessonView.js',
    'js/router.js'
  ].map((p) => `<!-- ${p} -->\n<script>\n${wrapInlineScript(fs.readFileSync(path.join(HUB_DIR, p), 'utf8'))}\n</script>`);

  // CRITICAL: always use function replacers () => ... so $$, $&, $' in JS/LaTeX are never interpreted as replace tokens!
  html = html.replace(/<link rel="icon"[^>]*>/i, () => `<link rel="icon" type="image/svg+xml" href="${iconDataUri}" />`);
  html = html.replace(/<link rel="manifest"[^>]*>\s*/i, () => '');
  html = html.replace(/<link rel="stylesheet" href="\.\/vendor\/fonts\/fonts\.css"[^>]*>/i, () => `<style>\n${tmpFontsCss}\n</style>`);
  html = html.replace(/<link rel="stylesheet" href="\.\/vendor\/katex\/katex\.min\.css"[^>]*>/i, () => `<style>\n${katexCss}\n</style>`);
  html = html.replace(/<script src="\.\/vendor\/tailwindcss\.js"><\/script>/i, () => `<script>\n${twJs}\n</script>`);
  html = html.replace(/<script defer src="\.\/vendor\/katex\/katex\.min\.js"><\/script>/i, () => `<script>\n${katexJs}\n</script>`);
  html = html.replace(/<script defer src="\.\/vendor\/katex\/auto-render\.min\.js"><\/script>/i, () => `<script>\n${katexAutoJs}\n</script>`);
  html = html.replace(/<link rel="stylesheet" href="\.\/css\/styles\.css"[^>]*>/i, () => `<style>\n${mainCss}\n</style>`);

  const runtimeBundle = [
    ...coreAndDataScripts,
    ...preloadedModules,
    ...viewAndRouterScripts
  ].join('\n');

  html = html.replace(
    /<!-- Modular Core, Catalog Data, Views & Router -->[\s\S]*?<\/body>/i,
    () => `<!-- Standalone Offline Bundle (${moduleAndSimFiles.length} preloaded modules & simulators) -->\n${runtimeBundle}\n</body>`
  );

  const outPath = path.join(DIST_DIR, 'Euler-Academy-SingleFile.html');
  fs.writeFileSync(outPath, html, 'utf8');
  return { outPath, bytes: fs.statSync(outPath).size, preloadedCount: moduleAndSimFiles.length };
}

function buildOfflineZip() {
  const outZip = path.join(DIST_DIR, 'Euler-Academy-Offline.zip');
  if (fs.existsSync(outZip)) fs.unlinkSync(outZip);

  const entries = [
    'index.html',
    'icon.svg',
    'manifest.webmanifest',
    'sw.js',
    'README.md',
    'css',
    'data',
    'js',
    'modules',
    'simulators',
    'vendor'
  ].filter((name) => fs.existsSync(path.join(HUB_DIR, name)));

  // Use python3 zipfile for deterministic cross-platform zip packaging without external zip binary dependency
  const py = `
import os, zipfile, sys
hub = sys.argv[1]
out_zip = sys.argv[2]
entries = sys.argv[3:]
with zipfile.ZipFile(out_zip, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
    for entry in entries:
        p = os.path.join(hub, entry)
        if os.path.isfile(p):
            zf.write(p, os.path.join('euler-academy-offline', entry))
        elif os.path.isdir(p):
            for root, dirs, files in os.walk(p):
                dirs.sort()
                for f in sorted(files):
                    fp = os.path.join(root, f)
                    rel = os.path.relpath(fp, hub)
                    zf.write(fp, os.path.join('euler-academy-offline', rel))
`;
  execFileSync('python3', ['-c', py, HUB_DIR, outZip, ...entries], { stdio: 'inherit' });
  return { outZip, bytes: fs.statSync(outZip).size };
}

function main() {
  fs.mkdirSync(DIST_DIR, { recursive: true });
  const single = buildSingleFileHtml();
  const zipRes = buildOfflineZip();
  console.log(`Built ${path.basename(single.outPath)}: ${(single.bytes / (1024 * 1024)).toFixed(2)} MB (${single.preloadedCount} preloaded modules/simulators)`);
  console.log(`Built ${path.basename(zipRes.outZip)}: ${(zipRes.bytes / (1024 * 1024)).toFixed(2)} MB`);
}

main();
