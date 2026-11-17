/**
 * Euler Academy — Subject Catalog, Global Progress Dashboard, Filtering & Search
 */
(function (global) {
  'use strict';

  const state = {
    subjectKey: 'math',
    filterValue: 'all',
    searchQuery: ''
  };

  function getLessonStats(lesson) {
    const axes = lesson.axes || [];
    const totalAxes = axes.length;
    const completedAxes = axes.filter((ax) => ax.status === 'completed').length;
    const progressPct = totalAxes > 0 ? Math.round((completedAxes / totalAxes) * 100) : 0;
    return { totalAxes, completedAxes, progressPct };
  }

  function getGlobalStats() {
    const curriculum = global.EulerAcademy.curriculum;
    let totalLessons = 0;
    let activeLessons = 0;
    let totalAxes = 0;
    let completedAxes = 0;
    const activeShortcuts = [];

    for (const [subjKey, subj] of Object.entries(curriculum)) {
      for (const lesson of subj.lessons || []) {
        totalLessons += 1;
        const st = getLessonStats(lesson);
        totalAxes += st.totalAxes;
        completedAxes += st.completedAxes;
        if (lesson.status === 'active' || st.completedAxes > 0) {
          activeLessons += 1;
          activeShortcuts.push({ subjKey, subjTitle: subj.titleAr, lesson, ...st });
        }
      }
    }

    const overallPct = totalAxes > 0 ? Math.round((completedAxes / totalAxes) * 100) : 0;
    return { totalLessons, activeLessons, totalAxes, completedAxes, overallPct, activeShortcuts };
  }

  function renderOverallDashboard() {
    const host = document.getElementById('overallProgressBar');
    if (!host) return;
    const stats = getGlobalStats();
    const esc = global.EulerAcademy.escapeHtml;

    const shortcutsHtml = stats.activeShortcuts.map((item) => `
      <button type="button" data-open-lesson="${esc(item.lesson.id)}" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-cyan-500/30 text-xs font-bold text-slate-200 transition">
        <span class="text-emerald-400">●</span>
        <span>${esc(item.subjTitle)} — الدرس ${esc(item.lesson.num)}: ${esc(item.lesson.titleAr)}</span>
        <span class="px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 font-mono text-[11px]">${item.completedAxes}/${item.totalAxes}</span>
      </button>
    `).join('');

    host.innerHTML = `
      <div class="glass rounded-2xl p-4 sm:p-5 mb-6 border border-slate-800/90">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="flex flex-wrap items-center gap-3 text-xs">
            <span class="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold">
              📊 تقدم المنهاج الرسمي 2BAC PC
            </span>
            <span class="text-slate-300 font-semibold">
              <b class="text-cyan-400 font-mono">${stats.completedAxes}</b> من <b class="text-white font-mono">${stats.totalAxes}</b> محوراً مكتملة (${stats.overallPct}%) • <b class="text-emerald-300 font-mono">${stats.activeLessons}</b> من ${stats.totalLessons} دروس مفتوحة للدراسة
            </span>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-[11px] text-slate-400 font-semibold">الدروس النشطة حالياً:</span>
            ${shortcutsHtml}
          </div>
        </div>
      </div>
    `;

    host.querySelectorAll('[data-open-lesson]').forEach((btn) => {
      btn.addEventListener('click', () => {
        global.EulerRouter.goToLesson(btn.dataset.openLesson);
      });
    });
  }

  function getGroupOptions(subj) {
    const groups = new Set();
    for (const lesson of subj.lessons || []) {
      const label = lesson.unit ? lesson.unit : `الأسدوس ${lesson.semester || 1}`;
      groups.add(label);
    }
    return Array.from(groups);
  }

  function filterLessons(subj) {
    const q = state.searchQuery.trim().toLowerCase();
    return (subj.lessons || []).filter((lesson) => {
      const st = getLessonStats(lesson);
      const groupLabel = lesson.unit ? lesson.unit : `الأسدوس ${lesson.semester || 1}`;

      if (state.filterValue === 'active' && lesson.status !== 'active' && st.completedAxes === 0) {
        return false;
      }
      if (state.filterValue !== 'all' && state.filterValue !== 'active' && groupLabel !== state.filterValue) {
        return false;
      }

      if (!q) return true;
      const haystack = [
        lesson.num,
        lesson.titleAr,
        lesson.titleFr,
        lesson.summary,
        ...(lesson.axes || []).map((ax) => `${ax.titleAr} ${ax.titleFr}`)
      ].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }

  function renderControls(subj) {
    const controlsHost = document.getElementById('catalogControls');
    if (!controlsHost) return;
    const esc = global.EulerAcademy.escapeHtml;
    const groups = getGroupOptions(subj);

    const pills = [
      { id: 'all', label: `الكل (${subj.lessons.length})` },
      { id: 'active', label: '🟢 المتاح للدراسة' },
      ...groups.map((g) => ({ id: g, label: g }))
    ];

    controlsHost.innerHTML = `
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
        <div class="flex flex-wrap items-center gap-2">
          ${pills.map((p) => {
            const isSel = state.filterValue === p.id;
            return `<button type="button" data-filter-id="${esc(p.id)}" class="px-3 py-1.5 rounded-xl text-xs font-bold transition ${isSel ? 'bg-cyan-500 text-slate-950 shadow' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'}">${esc(p.label)}</button>`;
          }).join('')}
        </div>
        <div class="relative w-full md:w-72">
          <input id="catalogSearchInput" type="search" value="${esc(state.searchQuery)}" placeholder="ابحث عن درس أو محور (عربي / Fr)..." class="w-full px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition" />
        </div>
      </div>
    `;

    controlsHost.querySelectorAll('[data-filter-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.filterValue = btn.dataset.filterId;
        renderLessonsGrid(subj);
        renderControls(subj);
      });
    });

    const input = controlsHost.querySelector('#catalogSearchInput');
    if (input) {
      input.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderLessonsGrid(subj);
      });
    }
  }

  function renderLessonsGrid(subj) {
    const grid = document.getElementById('lessonsGrid');
    if (!grid) return;
    const filtered = filterLessons(subj);

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full glass rounded-2xl p-8 text-center text-sm text-slate-400 border border-slate-800">
          لم يتم العثور على دروس مطابقة لخيارات البحث الحالية.
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map((lesson) => {
      const stats = getLessonStats(lesson);
      const isActive = lesson.status === 'active';
      const statusBadge = isActive
        ? `<span class="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold">🟢 متاح للدراسة</span>`
        : `<span class="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-[11px] font-semibold">⏳ قيد الإعداد والتدقيق</span>`;

      const metaTag = lesson.unit ? lesson.unit : `الأسدوس ${lesson.semester || 1}`;

      const capabilityBadges = [
        lesson.simulator ? `<span class="px-2 py-0.5 rounded bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[10px] font-bold">🧪 مختبر بصري</span>` : '',
        lesson.hasExam ? `<span class="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-bold">📝 فرض محروس</span>` : ''
      ].filter(Boolean).join(' ');

      const progressBlock = stats.completedAxes > 0
        ? `
          <div class="mb-3">
            <div class="flex items-center justify-between text-[11px] mb-1">
              <span class="text-cyan-300 font-bold">${stats.completedAxes} من ${stats.totalAxes} محاور مكتملة</span>
              <span class="font-mono text-emerald-300 font-bold">${stats.progressPct}%</span>
            </div>
            <div class="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800">
              <div class="bg-gradient-to-r from-cyan-500 to-emerald-400 h-1.5 rounded-full" style="width: ${stats.progressPct}%"></div>
            </div>
          </div>
        `
        : '';

      return `
        <article data-lesson-card="${lesson.id}" tabindex="0" role="button" class="cursor-pointer rounded-2xl p-5 transition flex flex-col justify-between ${isActive ? 'bg-slate-900/95 border-2 border-cyan-500/60 hover:border-cyan-400 shadow-lg' : 'bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-900'}">
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-xs font-mono font-bold text-slate-400">الدرس ${lesson.num} • ${metaTag}</span>
              ${statusBadge}
            </div>
            <h3 class="text-lg font-extrabold text-white mb-1">${lesson.titleAr}</h3>
            <p class="text-xs font-mono text-cyan-400/90 mb-3" dir="ltr">${lesson.titleFr}</p>
            <p class="text-xs text-slate-400 leading-relaxed mb-4">${lesson.summary}</p>
          </div>
          <div>
            ${progressBlock}
            ${capabilityBadges ? `<div class="flex flex-wrap gap-1.5 mb-3">${capabilityBadges}</div>` : ''}
            <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span class="text-slate-400">${stats.totalAxes} محاور مرجعية</span>
              <span class="font-bold ${isActive ? 'text-cyan-400' : 'text-slate-300'}">
                ${isActive ? 'الدخول إلى الدرس والمحاور ←' : 'معاينة المحاور المطالب بها ←'}
              </span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    grid.querySelectorAll('[data-lesson-card]').forEach((card) => {
      const open = () => global.EulerRouter.goToLesson(card.dataset.lessonCard);
      card.addEventListener('click', open);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });
    });

    global.EulerAcademy.renderMath(grid);
  }

  function showSubjectCatalog(subjectKey) {
    const subj = global.EulerAcademy.curriculum[subjectKey];
    if (!subj) return;

    if (state.subjectKey !== subjectKey) {
      state.filterValue = 'all';
      state.searchQuery = '';
    }
    state.subjectKey = subjectKey;

    document.getElementById('catalogView').classList.remove('hidden');
    document.getElementById('lessonView').classList.add('hidden');

    ['math', 'physics', 'chemistry'].forEach((k) => {
      const btn = document.getElementById('tab-' + k);
      if (!btn) return;
      btn.className = k === subjectKey
        ? 'px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-cyan-500 text-slate-950 shadow transition'
        : 'px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-300 hover:bg-slate-800 transition';
    });

    renderOverallDashboard();

    let subjCompletedAxes = 0;
    let subjTotalAxes = 0;
    for (const lesson of subj.lessons) {
      const st = getLessonStats(lesson);
      subjCompletedAxes += st.completedAxes;
      subjTotalAxes += st.totalAxes;
    }
    const subjPct = subjTotalAxes > 0 ? Math.round((subjCompletedAxes / subjTotalAxes) * 100) : 0;

    const banner = document.getElementById('subjectBanner');
    banner.innerHTML = `
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="flex-1">
          <div class="flex items-center gap-2.5 mb-2">
            <span class="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold">${subj.badge}</span>
            <span class="text-xs text-slate-400 font-mono">${subj.titleFr}</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-white">مادة ${subj.titleAr} — الفهرس المنهجي الكامل (${subj.lessons.length} درساً)</h2>
          <p class="text-xs sm:text-sm text-slate-400 mt-2 max-w-3xl leading-relaxed">${subj.description}</p>
        </div>
        <div class="bg-slate-950/90 border border-slate-800 rounded-2xl px-5 py-4 text-center shrink-0 min-w-[160px]">
          <span class="block text-2xl font-black text-cyan-400">${subj.lessons.length}</span>
          <span class="text-[11px] text-slate-400 block mb-2">درساً رسمياً في المقرر</span>
          <div class="text-[11px] font-mono text-emerald-300 font-bold">${subjCompletedAxes}/${subjTotalAxes} محور (${subjPct}%)</div>
        </div>
      </div>
    `;

    renderControls(subj);
    renderLessonsGrid(subj);
    global.EulerAcademy.renderMath(document.getElementById('catalogView'));
  }

  global.EulerCatalog = {
    showSubjectCatalog,
    getCurrentSubject: () => state.subjectKey,
    setCurrentSubject: (subjKey) => {
      if (subjKey && state.subjectKey !== subjKey) {
        state.subjectKey = subjKey;
        state.filterValue = 'all';
        state.searchQuery = '';
      }
    }
  };
})(window);
