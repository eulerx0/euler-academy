#!/usr/bin/env node
/**
 * Euler Academy — Static Asset & OTA Manifest Generator
 * Generates ./manifest.json with per-file SHA-256 hashes and live curriculum stats
 * for zero-waste Over-The-Air (OTA) synchronization in the Euler Academy Android App.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const vm = require('vm');

const HUB_DIR = path.resolve(__dirname, '..');
const MANIFEST_OUT = path.join(HUB_DIR, 'manifest.json');

const RUNTIME_ROOT_FILES = [
  'index.html',
  'icon.svg',
  'manifest.webmanifest'
];

const RUNTIME_DIRS = [
  'css',
  'data',
  'js',
  'modules',
  'simulators',
  'vendor'
];

function walkFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkFiles(full));
    } else if (entry.isFile()) {
      out.push(full);
    }
  }
  return out;
}

function sha256File(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function computeStats() {
  const sandbox = {
    window: null,
    console,
    EulerAcademy: {
      curriculum: {},
      registerSubject(subj) {
        if (subj && subj.id) this.curriculum[subj.id] = subj;
      }
    }
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  for (const rel of ['data/math.js', 'data/physics.js', 'data/chemistry.js']) {
    const full = path.join(HUB_DIR, rel);
    if (fs.existsSync(full)) vm.runInContext(fs.readFileSync(full, 'utf8'), sandbox, { filename: rel });
  }
  let totalLessons = 0;
  let activeLessons = 0;
  let totalAxes = 0;
  let completedAxes = 0;
  let completedExams = 0;
  let completedSimulators = 0;
  for (const subj of Object.values(sandbox.EulerAcademy.curriculum)) {
    for (const lesson of subj.lessons || []) {
      totalLessons += 1;
      const axes = lesson.axes || [];
      const done = axes.filter((a) => a.status === 'completed').length;
      totalAxes += axes.length;
      completedAxes += done;
      if (lesson.status === 'active' || done > 0) activeLessons += 1;
      if (lesson.hasExam) completedExams += 1;
      if (lesson.simulator && lesson.simulator.script) completedSimulators += 1;
    }
  }
  return { totalLessons, activeLessons, totalAxes, completedAxes, completedExams, completedSimulators };
}

function main() {
  const files = {};
  for (const rel of RUNTIME_ROOT_FILES) {
    const full = path.join(HUB_DIR, rel);
    if (fs.existsSync(full)) files[rel] = sha256File(full);
  }
  for (const dirName of RUNTIME_DIRS) {
    for (const abs of walkFiles(path.join(HUB_DIR, dirName))) {
      const rel = path.relative(HUB_DIR, abs).replace(/\\/g, '/');
      files[rel] = sha256File(abs);
    }
  }

  const orderedEntries = Object.keys(files).sort().map((k) => `${k}:${files[k]}`).join('\n');
  const bundleHash = crypto.createHash('sha256').update(orderedEntries).digest('hex').slice(0, 16);
  const stats = computeStats();

  const manifest = {
    schema: 1,
    bundleHash,
    generatedAt: new Date().toISOString(),
    stats,
    fileCount: Object.keys(files).length,
    files
  };

  fs.writeFileSync(MANIFEST_OUT, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  console.log(`Generated manifest.json (${manifest.fileCount} files, bundleHash=${bundleHash}, ${stats.completedAxes}/${stats.totalAxes} axes)`);
}

main();
