/**
 * Euler Academy — Lesson Workspace & Asynchronous Module Loader
 */
(function (global) {
  'use strict';

  let activeLoadGeneration = 0;

  function renderLexiqueCard(items) {
    const card = document.getElementById('lessonLexiqueCard');
    if (!card) return;
    if (!items || items.length === 0) {
      card.innerHTML = '';
      return;
    }

    card.innerHTML = `
      <details class="group glass rounded-2xl border border-slate-800 mb-6 overflow-hidden">
        <summary class="cursor-pointer px-5 py-3.5 text-xs sm:text-sm font-bold text-cyan-300 hover:text-cyan-200 flex items-center justify-between select-none bg-slate-950/70">
          <div class="flex items-center gap-2">
            <span>📖 المعجم الأكاديمي الثنائي للمصطلحات الرسمية (Lexique Bilingue 2BAC PC)</span>
            <span class="text-[11px] px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-400 font-mono">${items.length} مصطلحات أساسية</span>
          </div>
          <span class="transform transition group-open:rotate-180">▼</span>
        </summary>
        <div class="p-5 border-t border-slate-800 bg-slate-950/40">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 text-xs">
            ${items.map((item) => `
              <div class="p-2.5 bg-slate-900/80 rounded-xl border border-slate-800">
                <b class="text-cyan-300 block mb-0.5">${item.ar}</b>
                <span class="font-mono text-slate-400" dir="ltr">${item.fr}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </details>
    `;
  }

  function renderLessonPager(subj, currentLesson) {
    const pager = document.getElementById('lessonPager');
    if (!pager) return;
    const lessons = subj.lessons || [];
    const idx = lessons.findIndex((l) => l.id === currentLesson.id);
    const prev = idx > 0 ? lessons[idx - 1] : null;
    const next = idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null;

    pager.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80 no-print">
        <div>
          ${prev ? `
            <button type="button" data-pager-lesson="${prev.id}" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 transition">
              <span>→</span>
              <span>الدرس السابق (${prev.num}): ${prev.titleAr}</span>
            </button>
          ` : ''}
        </div>
        <div>
          ${next ? `
            <button type="button" data-pager-lesson="${next.id}" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-cyan-300 transition">
              <span>الدرس الموالي (${next.num}): ${next.titleAr}</span>
              <span>←</span>
            </button>
          ` : ''}
        </div>
      </div>
    `;

    pager.querySelectorAll('[data-pager-lesson]').forEach((btn) => {
      btn.addEventListener('click', () => {
        global.EulerRouter.goToLesson(btn.dataset.pagerLesson);
      });
    });
  }

  function renderAxisShell(ax, contentHtml, isLoading) {
    const isCompleted = ax.status === 'completed';
    const reqListHtml = (ax.requirements || []).length > 0
      ? `<div class="mt-3 bg-slate-950/90 border border-slate-800/90 rounded-xl p-4">
           <p class="text-xs font-bold text-slate-300 mb-2">📌 المهارات والقدرات المطالب بها في الامتحان الوطني لهذا المحور:</p>
           <ul class="text-xs text-slate-300 space-y-2 list-disc pr-5 leading-relaxed">
             ${ax.requirements.map((r) => `<li>${r}</li>`).join('')}
           </ul>
         </div>`
      : '';

    let bodyHtml = '';
    if (contentHtml) {
      bodyHtml = `<div class="mt-6 pt-6 border-t border-slate-800">${contentHtml}</div>`;
    } else if (isCompleted && isLoading) {
      bodyHtml = `<div class="mt-6 pt-6 border-t border-slate-800"><div class="h-24 rounded-2xl euler-shimmer border border-slate-800"></div></div>`;
    }

    return `
      <div id="axis-${ax.id}" class="scroll-mt-28 rounded-2xl border ${isCompleted ? 'border-cyan-500/50 bg-slate-900/90' : 'border-slate-800 bg-slate-900/50'} p-5 sm:p-6">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span class="text-xs font-bold text-cyan-400">${ax.num}</span>
          ${isCompleted
            ? `<span class="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[11px] font-bold">✓ مكتمل بالبرهان الصارم</span>`
            : `<span class="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[11px]">محور مرجعي رسمي — قيد الإعداد التفصيلي</span>`
          }
        </div>
        <h4 class="text-base sm:text-lg font-extrabold text-white">${ax.titleAr}</h4>
        <p class="text-xs font-mono text-slate-400 mb-3" dir="ltr">${ax.titleFr}</p>
        ${reqListHtml}
        ${bodyHtml}
      </div>
    `;
  }

  async function openLesson(subjectKey, lessonId, targetSectionId) {
    const api = global.EulerAcademy;
    const subj = api.curriculum[subjectKey];
    if (!subj) return;
    const lesson = (subj.lessons || []).find((l) => l.id === lessonId);
    if (!lesson) return;

    const myGen = ++activeLoadGeneration;

    // Update header tabs highlight to match current lesson's subject
    ['math', 'physics', 'chemistry'].forEach((k) => {
      const btn = document.getElementById('tab-' + k);
      if (!btn) return;
      btn.className = k === subjectKey
        ? 'px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-cyan-500 text-slate-950 shadow transition'
        : 'px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-300 hover:bg-slate-800 transition';
    });

    document.getElementById('catalogView').classList.add('hidden');
    document.getElementById('lessonView').classList.remove('hidden');
    if (!targetSectionId) global.scrollTo({ top: 0, behavior: 'smooth' });

    document.getElementById('lessonBreadcrumb').innerText = `${subj.titleFr} / Leçon ${lesson.num} : ${lesson.titleFr}`;

    const isActive = lesson.status === 'active';
    const axes = lesson.axes || [];
    const totalAxes = axes.length;
    const completedAxes = axes.filter((a) => a.status === 'completed').length;
    const progressPct = totalAxes > 0 ? Math.round((completedAxes / totalAxes) * 100) : 0;

    document.getElementById('lessonHeaderCard').innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span class="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
          ${subj.titleAr} • الدرس ${lesson.num}
        </span>
        ${isActive
          ? `<span class="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-bold">🟢 مفتوح للدراسة (${completedAxes} من ${totalAxes} محاور جاهزة بالبرهان)</span>`
          : `<span class="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">⏳ قيد الصياغة والتدقيق العلمي</span>`
        }
      </div>
      <h2 class="text-2xl sm:text-4xl font-black text-white mb-1">${lesson.titleAr}</h2>
      <p class="text-sm font-mono text-cyan-400 mb-3" dir="ltr">${lesson.titleFr}</p>
      <p class="text-sm text-slate-300 leading-relaxed mb-4">${lesson.summary}</p>
      <div class="pt-4 border-t border-slate-800">
        <div class="flex items-center justify-between text-xs mb-1.5">
          <span class="text-slate-300 font-bold">نسبة إنجاز محاور الدرس:</span>
          <span class="font-mono text-cyan-400 font-bold">${completedAxes} من ${totalAxes} محاور مكتملة (${progressPct}%)</span>
        </div>
        <div class="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800">
          <div class="bg-gradient-to-r from-cyan-500 to-emerald-400 h-2.5 rounded-full transition-all duration-500" style="width: ${progressPct}%"></div>
        </div>
      </div>
    `;

    // Quick Nav Bar (driven declaratively from lesson metadata)
    const quickNav = document.getElementById('lessonQuickNavBar');
    quickNav.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-950/90 glass rounded-2xl border border-slate-800 mb-6">
        <div class="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-300">
          <span class="text-slate-400 ml-1">📌 انتقال سريع:</span>
          ${axes.map((ax) => `
            <button type="button" data-scroll-to="axis-${ax.id}" class="px-3 py-1.5 rounded-xl ${ax.status === 'completed' ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/25' : 'bg-slate-900 border border-slate-800 text-slate-400 hover:bg-slate-800'} transition">
              ${ax.num}${ax.status === 'completed' ? ' ✓' : ''}
            </button>
          `).join('')}
          ${lesson.simulator ? `
            <button type="button" data-scroll-to="lessonSimulatorHost" class="px-3 py-1.5 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-300 hover:bg-purple-500/25 transition">
              ${lesson.simulator.navLabel || '🧪 المختبر البصري'}
            </button>
          ` : ''}
          ${lesson.hasExam ? `
            <button type="button" data-scroll-to="masterExam" class="px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 hover:bg-amber-500/25 font-bold transition">
              ${lesson.examNavLabel || '📝 الفرض المحروس'}
            </button>
          ` : ''}
        </div>
        <div class="flex items-center gap-2">
          <button type="button" id="btnPrintLesson" class="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] font-bold text-slate-200 transition">
            🖨️ طباعة / PDF
          </button>
          <span class="text-[11px] text-slate-400 font-mono hidden sm:inline">2BAC PC</span>
        </div>
      </div>
    `;

    quickNav.querySelectorAll('[data-scroll-to]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.scrollTo);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    const printBtn = document.getElementById('btnPrintLesson');
    if (printBtn) printBtn.addEventListener('click', () => global.print());

    // Initial render (using cache if already loaded, shimmer if loading)
    const axesContainer = document.getElementById('lessonAxesContainer');
    const examContainer = document.getElementById('lessonExamContainer');
    const simHost = document.getElementById('lessonSimulatorHost');
    const lexiqueCard = document.getElementById('lessonLexiqueCard');

    axesContainer.innerHTML = axes.map((ax) => renderAxisShell(ax, api.getAxisContent(lessonId, ax.id), true)).join('');
    examContainer.innerHTML = '';
    lexiqueCard.innerHTML = '';
    simHost.innerHTML = '';
    simHost.classList.add('hidden');
    renderLessonPager(subj, lesson);
    api.renderMath(document.getElementById('lessonView'));

    // Build parallel async module load list
    const base = api.getLessonModuleBase(subjectKey, lessonId);
    const tasks = [];

    for (const ax of axes) {
      if (ax.status === 'completed' && !api.getAxisContent(lessonId, ax.id)) {
        const modUrl = ax.module || `${base}/${ax.id}.js`;
        tasks.push(api.loadScript(modUrl).catch((err) => ({ error: err, kind: 'axis', ax })));
      }
    }
    if (lesson.hasLexique && !api.getLexique(lessonId)) {
      tasks.push(api.loadScript(`${base}/lexique.js`).catch((err) => ({ error: err, kind: 'lexique' })));
    }
    if (lesson.hasExam && !api.getExamContent(lessonId)) {
      tasks.push(api.loadScript(`${base}/exam.js`).catch((err) => ({ error: err, kind: 'exam' })));
    }
    if (lesson.simulator && !api.getSimulator(lessonId)) {
      tasks.push(api.loadScript(lesson.simulator.script).catch((err) => ({ error: err, kind: 'simulator' })));
    }

    if (tasks.length > 0) {
      await Promise.all(tasks);
      if (myGen !== activeLoadGeneration) return;
    }

    // Re-render loaded content cleanly
    axesContainer.innerHTML = axes.map((ax) => {
      const content = api.getAxisContent(lessonId, ax.id);
      if (ax.status === 'completed' && !content) {
        return renderAxisShell(ax, `<div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">تعذر تحميل محتوى هذا المحور حالياً. يرجى تحديث الصفحة.</div>`, false);
      }
      return renderAxisShell(ax, content, false);
    }).join('');

    if (lesson.hasLexique) {
      renderLexiqueCard(api.getLexique(lessonId));
    }

    if (lesson.hasExam) {
      const examHtml = api.getExamContent(lessonId);
      if (examHtml) examContainer.innerHTML = examHtml;
    }

    if (lesson.simulator) {
      const sim = api.getSimulator(lessonId);
      if (sim && typeof sim.mount === 'function') {
        simHost.classList.remove('hidden');
        const freshRoot = document.createElement('div');
        simHost.innerHTML = '';
        simHost.appendChild(freshRoot);
        sim.mount(freshRoot, api);
      }
    }

    api.renderMath(document.getElementById('lessonView'));

    if (targetSectionId) {
      const el = document.getElementById(targetSectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  global.EulerLessonView = { openLesson };
})(window);
