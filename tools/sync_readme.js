#!/usr/bin/env node
/**
 * Euler Academy — Automatic README Live Progress & Lessons Table Synchronizer
 * Reads data/{math,physics,chemistry}.js and updates the live progress section in README.md.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const HUB_DIR = path.resolve(__dirname, '..');
const README_PATH = path.join(HUB_DIR, 'README.md');
const START_MARKER = '<!-- EULER_LIVE_PROGRESS_START -->';
const END_MARKER = '<!-- EULER_LIVE_PROGRESS_END -->';

function loadCurriculum() {
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

  for (const file of ['data/math.js', 'data/physics.js', 'data/chemistry.js']) {
    const full = path.join(HUB_DIR, file);
    if (fs.existsSync(full)) {
      vm.runInContext(fs.readFileSync(full, 'utf8'), sandbox, { filename: file });
    }
  }
  return sandbox.EulerAcademy.curriculum;
}

function buildLiveSection(curriculum) {
  const icons = { math: '📐 الرياضيات', physics: '⚛️ الفيزياء', chemistry: '🧪 الكيمياء' };
  let totalLessons = 0;
  let activeLessons = 0;
  let totalAxes = 0;
  let completedAxes = 0;
  let completedExams = 0;
  let completedSims = 0;
  const activeRows = [];

  for (const subjKey of ['math', 'physics', 'chemistry']) {
    const subj = curriculum[subjKey];
    if (!subj) continue;
    for (const lesson of subj.lessons || []) {
      totalLessons += 1;
      const axes = lesson.axes || [];
      const doneAxes = axes.filter((a) => a.status === 'completed').length;
      totalAxes += axes.length;
      completedAxes += doneAxes;
      if (lesson.hasExam) completedExams += 1;
      if (lesson.simulator && lesson.simulator.script) completedSims += 1;

      if (lesson.status === 'active' || doneAxes > 0) {
        activeLessons += 1;
        const lexCell = lesson.hasLexique ? '✅' : '⏳';
        const simCell = lesson.simulator && lesson.simulator.script ? '✅' : '⏳';
        const examCell = lesson.hasExam ? '✅' : '⏳';
        const axesBadge = doneAxes === axes.length ? `\`${doneAxes} / ${axes.length}\` ✅` : `\`${doneAxes} / ${axes.length}\` 🚧`;
        activeRows.push(
          `| ${icons[subjKey] || subjKey} | **${lesson.num}. ${lesson.titleAr}** | ${axesBadge} | ${lexCell} | ${simCell} | ${examCell} | [فتح الدرس](https://eulerx0.github.io/euler-academy/#/lesson/${lesson.id}) |`
        );
      }
    }
  }

  const pct = totalAxes > 0 ? Math.round((completedAxes / totalAxes) * 100) : 0;

  let out = `${START_MARKER}\n`;
  out += `### الدروس المفعّلة والمكتملة حالياً\n\n`;
  out += `> 📊 **التقدم المباشر:** \`${completedAxes} / ${totalAxes}\` محوراً مكتملة (**${pct}%**) • **${activeLessons} / ${totalLessons}** دروس مفتوحة • 🧪 **${completedSims}** مختبرات تفاعلية • 📝 **${completedExams}** فروض محروسة (20/20)\n\n`;
  out += `| المادة | الدرس | المحاور | المعجم | المختبر 60fps | الفرض 20/20 | رابط مباشر |\n`;
  out += `| :--- | :--- | :---: | :---: | :---: | :---: | :--- |\n`;
  out += activeRows.join('\n') + '\n';
  out += `${END_MARKER}`;
  return { out, totalLessons, totalAxes, completedAxes, pct };
}

function main() {
  if (!fs.existsSync(README_PATH)) {
    throw new Error(`README.md not found at ${README_PATH}`);
  }
  const readme = fs.readFileSync(README_PATH, 'utf8');
  const startIdx = readme.indexOf(START_MARKER);
  const endIdx = readme.indexOf(END_MARKER);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error('README.md is missing EULER_LIVE_PROGRESS markers.');
  }

  const curriculum = loadCurriculum();
  const { out, totalLessons, totalAxes, completedAxes, pct } = buildLiveSection(curriculum);
  const updated = readme.slice(0, startIdx) + out + readme.slice(endIdx + END_MARKER.length);
  fs.writeFileSync(README_PATH, updated, 'utf8');
  console.log(`Synced README.md: ${completedAxes}/${totalAxes} axes (${pct}%), ${totalLessons} total lessons.`);
}

main();
