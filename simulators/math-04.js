/**
 * Euler Academy — Interactive 4-Mode Visual Laboratory for Math Lesson 04 (Fonctions Primitives)
 * (1. Family F(x)+k & Parallel Tangents, 2. Variations & Concavity of F from f and f',
 *  3. Disjoint Interval Union Trap on R*, 4. Reverse-Differentiation Verifier for u'u^r & Trig)
 */
(function (global) {
  'use strict';

  const C = () => global.EulerCanvas;

  const MODES_META = [
    { id: 'family', label: '1. عائلة $F(x)+k$ والمماسات المتوازية', activeCls: 'bg-cyan-500 text-slate-950 shadow' },
    { id: 'geometry', label: '2. تغيرات وتقعر $F$ من $f$ فقط', activeCls: 'bg-emerald-500 text-slate-950 shadow' },
    { id: 'domain', label: '3. فخ اتحاد المجالات ($\\mathbb{R}^*$)', activeCls: 'bg-amber-500 text-slate-950 shadow' },
    { id: 'verify', label: '4. كاشف المعامل بالاشتقاق العكسي', activeCls: 'bg-purple-500 text-slate-950 shadow' }
  ];

  const FAMILY_ANCHORS = [
    { id: 'k0', btnText: '$k = 0$ (الأصلية المرجعية)', k: 0.0, ptText: 'A(0, 0)' },
    { id: 'a1', btnText: 'شرط $F_0(0) = 1.5$', k: 1.5, ptText: 'A(0, 1.5)' },
    { id: 'a2', btnText: 'شرط $F_0(2) = -0.5$', k: -1.0, ptText: 'B(2, -0.5)' },
    { id: 'a3', btnText: 'شرط $F_0(-1) = -1.5$', k: -2.0, ptText: 'C(-1, -1.5)' }
  ];

  const GEO_PRESETS = [
    {
      id: 'poly',
      btnText: 'كثير حدود $f(x)=\\frac{3}{4}(x^2-1)$',
      f: (x) => 0.75 * (x * x - 1),
      df: (x) => 1.5 * x,
      F: (x) => 0.25 * x * x * x - 0.75 * x,
      fTex: '$f(x) = \\frac{3}{4}(x^2 - 1)$',
      rootsText: 'تتغير إشارة $f$ في $x = -1$ (عظمى لـ $F$) و $x = +1$ (دنيا لـ $F$)؛ وتنعطف $F$ عند $x = 0$ حيث $f\'(0) = 0$.'
    },
    {
      id: 'rational',
      btnText: 'كسرية $f(x)=\\frac{2x}{(x^2+1)^2}$',
      f: (x) => (2 * x) / Math.pow(x * x + 1, 2),
      df: (x) => (2 * (1 - 3 * x * x)) / Math.pow(x * x + 1, 3),
      F: (x) => -1 / (x * x + 1),
      fTex: '$f(x) = \\frac{2x}{(x^2+1)^2}$',
      rootsText: 'تتغير إشارة $f$ في $x = 0$ فقط ($F(0) = -1$ قيمة دنيا مطلقة)، وتنعدم $f\'(x)=F\'\'(x)$ عند $\\pm\\frac{1}{\\sqrt{3}} \\approx \\pm 0.58$ (نقطتا انعطاف)!'
    }
  ];

  const DOMAIN_PRESETS = [
    { id: 'same', btnText: '$k_1 = k_2 = 0.5$ (نفس الثابتة)', k1: 0.5, k2: 0.5 },
    { id: 'jump', btnText: '$k_1 = -1.2 \\neq k_2 = 1.4$ (ثابتتان مستقلتان)', k1: -1.2, k2: 1.4 },
    { id: 'conds', btnText: '$F(-1)=2.2$ و $F(1)=-0.2$', k1: 1.2, k2: 0.8 }
  ];

  const VERIFY_PRESETS = [
    {
      id: 'sqrt',
      btnText: 'فخ الجذر $\\frac{2x}{\\sqrt{x^2+1}}$ ($2\\sqrt{u}$ مقابل $\\frac{1}{2}$)',
      f: (x) => (2 * x) / Math.sqrt(x * x + 1),
      dCand: (x, a) => (a * x) / Math.sqrt(x * x + 1),
      alphaTrue: 2.0,
      minA: 0.2,
      maxA: 3.0,
      stepA: 0.05,
      defaultA: 0.5,
      candTex: '$F_\\alpha(x) = \\alpha\\sqrt{x^2 + 1}$',
      trapMsg: 'لاحظ أنه عند $\\alpha = 0.5$ يكون $F\'_\\alpha(x) = \\frac{1}{4} f(x)$! القاعدة الصحيحة لـ $\\frac{u\'}{\\sqrt{u}}$ هي $2\\sqrt{u}$ أي $\\alpha = 2$!'
    },
    {
      id: 'pow',
      btnText: 'أصلية المركب $u\'u^2$: $(2x-1)(x^2-x+1)^2$',
      f: (x) => (2 * x - 1) * Math.pow(x * x - x + 1, 2) * 0.25,
      dCand: (x, a) => 3 * a * (2 * x - 1) * Math.pow(x * x - x + 1, 2) * 0.25,
      alphaTrue: 0.3333,
      minA: 0.10,
      maxA: 1.20,
      stepA: 0.01,
      defaultA: 1.00,
      candTex: '$F_\\alpha(x) = \\alpha (x^2 - x + 1)^3$',
      trapMsg: 'عند اشتقاق $(u)^3$ ينزل الأس $3$! لتعويض المعامل $3$ يجب الضرب في $\\alpha = \\frac{1}{3} \\approx 0.33$ (وليس $1$ أو $3$).'
    },
    {
      id: 'trig',
      btnText: 'فخ الإشارة: $f(x)=\\sin(2x)$',
      f: (x) => Math.sin(2 * x),
      dCand: (x, a) => -2 * a * Math.sin(2 * x),
      alphaTrue: -0.50,
      minA: -1.00,
      maxA: 1.00,
      stepA: 0.05,
      defaultA: 0.50,
      candTex: '$F_\\alpha(x) = \\alpha\\cos(2x)$',
      trapMsg: 'تطابق $\\alpha = +0.50$ يعطي $-\\sin(2x)$ (إشارة معاكسة)! أصلية $\\sin(2x)$ تستوجب $\\alpha = -0.50$ أي $-\\frac{1}{2}\\cos(2x)$!'
    }
  ];

  function metricCard(labelHtml, valId, initVal, valueCls = 'text-cyan-300') {
    return `
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span class="text-slate-400 block mb-1">${labelHtml}</span>
        <span id="${valId}" class="font-mono font-bold ${valueCls} text-sm" dir="ltr">${initVal}</span>
      </div>
    `;
  }

  function mount(hostEl, api) {
    const state = {
      mode: 'family',
      kVal: 0.8,
      geoIdx: 0,
      xProbe: -0.8,
      k1: -1.2,
      k2: 1.4,
      verIdx: 0,
      alphaVal: 0.5,
      playing: false,
      lastTs: 0,
      rafId: null,
      animDir: 1
    };

    hostEl.innerHTML = `
      <div class="glass rounded-3xl p-5 sm:p-8 border border-cyan-500/30">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                المختبر البصري التفاعلي • الرياضيات الدرس 04
              </span>
              <span class="text-xs text-slate-400 font-mono">Simulateur des Fonctions Primitives (4 Modes)</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">
              محاكي عائلة الدوال الأصلية، رتابة وتقعر $F$ من $f$، فخ $\\mathbb{R}^*$، والاشتقاق العكسي
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800">
            ${MODES_META.map((m) => `
              <button type="button" data-m4-mode="${m.id}" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <div id="m4SubBar" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-4">
            <div id="m4Legend" class="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-3 gap-2"></div>
            <canvas id="m4Canvas" width="680" height="390" class="w-full h-auto rounded-xl bg-[#050811] border border-slate-800/90"></canvas>

            <div class="mt-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                <div class="flex items-center gap-2">
                  <button type="button" id="m4PlayBtn" class="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-extrabold transition">
                    ▶ تحريك تلقائي
                  </button>
                  <button type="button" id="m4ResetBtn" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition">
                    ↺ ضبط افتراضي
                  </button>
                </div>
                <span id="m4StatusEq" class="text-[11px] text-cyan-300 font-mono" dir="ltr">k = +0.80</span>
              </div>

              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span id="m4SliderLabel" class="text-slate-300">الثابتة المحدِّدة $k \\in [-2.5, +2.5]$:</span>
                  <span id="m4SliderVal" class="font-mono text-cyan-300" dir="ltr">0.80</span>
                </div>
                <input id="m4MainSlider" type="range" min="-2.5" max="2.5" step="0.05" value="0.80" class="w-full accent-cyan-400 cursor-pointer" />
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-4">
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
              <h4 class="text-sm font-bold text-cyan-400 mb-3">📐 القراءات العددية والتحليل المنهجي المباشر</h4>
              <div id="m4MetricsGrid" class="grid grid-cols-2 gap-3 text-xs mb-4"></div>
              <div id="m4Banner" class="mb-3"></div>
              <div id="m4RuleBox" class="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    const canvas = hostEl.querySelector('#m4Canvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const subBar = hostEl.querySelector('#m4SubBar');
    const legend = hostEl.querySelector('#m4Legend');
    const sliderLabel = hostEl.querySelector('#m4SliderLabel');
    const sliderVal = hostEl.querySelector('#m4SliderVal');
    const slider = hostEl.querySelector('#m4MainSlider');
    const metricsGrid = hostEl.querySelector('#m4MetricsGrid');
    const banner = hostEl.querySelector('#m4Banner');
    const ruleBox = hostEl.querySelector('#m4RuleBox');
    const statusEq = hostEl.querySelector('#m4StatusEq');
    const playBtn = hostEl.querySelector('#m4PlayBtn');
    const resetBtn = hostEl.querySelector('#m4ResetBtn');

    function stopAnim() {
      state.playing = false;
      if (state.rafId) {
        global.cancelAnimationFrame(state.rafId);
        state.rafId = null;
      }
      playBtn.textContent = '▶ تحريك تلقائي';
      playBtn.className = 'px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-extrabold transition';
    }

    function syncChrome() {
      if (state.mode === 'family') {
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-2">ثبّت شرطاً بدئياً $F_0(x_0)=y_0$:</span>
          ${FAMILY_ANCHORS.map((a) => `
            <button type="button" data-m4-k="${a.k}" class="px-3 py-1.5 rounded-xl text-xs font-bold ${Math.abs(state.kVal - a.k) < 0.04 ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">${a.btnText}</button>
          `).join('')}
        `;
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> الأصلية المختارة $F_k(x)$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-slate-500 inline-block"></span> عائلة $F(x)+c$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> مماسات متوازية ($x_0=1.2$)</span>
          </div>
          <span class="text-cyan-300 font-bold" dir="ltr">$F_k(x) = \\frac{1}{4}x^3 - \\frac{3}{4}x + k$</span>
        `;
        sliderLabel.innerHTML = 'الثابتة المحدِّدة $k \\in [-2.5, +2.5]$:';
        metricsGrid.innerHTML = [
          metricCard('الثابتة $k$:', 'm4Val_k', state.kVal.toFixed(2), 'text-cyan-300'),
          metricCard('القيمة عند $x=0$:', 'm4Val_f0', state.kVal.toFixed(2), 'text-emerald-300'),
          metricCard('الميل عند $x_0=1.2$:', 'm4Val_slope', '0.33', 'text-amber-300'),
          metricCard('العلاقة بين المنحنيات:', 'm4Val_trans', 'إزاحة عمودية', 'text-purple-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-2">
            <span>📐</span> <span>تغيّر الثابتة $k$ يرفع المنحنى عمودياً فقط، بينما تبقى جميع المماسات عند نفس الأفصول متوازية بميل موحّد $f(x_0)$!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>وحدانية الأصلية بالشرط البدئي:</b><br/>
          إذا كانت $f$ متصلة على مجال $I$، فإن الدالة الأصلية $F_k(x) = F(x) + k$ تنفرد بمرور منحناها من نقطة معينة $A(x_0, y_0)$ حيث $k = y_0 - F(x_0)$.
        `;
      } else if (state.mode === 'geometry') {
        const gp = GEO_PRESETS[state.geoIdx];
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-2">اختر الدالة المشتقة $f(x) = F'(x)$:</span>
          ${GEO_PRESETS.map((p, i) => `
            <button type="button" data-m4-geo="${i}" class="px-3 py-1.5 rounded-xl text-xs font-bold ${i === state.geoIdx ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">${p.btnText}</button>
          `).join('')}
        `;
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> الأعلى: $F(x)$ (دون معرفة صيغتها)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> الأسفل: $f(x)=F'(x)$</span>
          </div>
          <span class="text-emerald-300 font-bold">${gp.fTex}</span>
        `;
        sliderLabel.innerHTML = 'نقطة الفحص $x_p \\in [-2.3, +2.3]$:';
        metricsGrid.innerHTML = [
          metricCard('الأفصول $x_p$:', 'm4Val_xp', state.xProbe.toFixed(2), 'text-slate-200'),
          metricCard('المشتقة الأولى $F\'=f$:', 'm4Val_fxp', '0.00', 'text-cyan-300'),
          metricCard('رتابة $F$ عند $x_p$:', 'm4Val_mono', 'تزايدية', 'text-emerald-300'),
          metricCard('تقعر $F$ ($F\'\'=f\'$):', 'm4Val_conc', 'مقعر', 'text-amber-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2">
            <span>🔎</span> <span>تذكّر قاعدة د. الرياح الذهبية: إشارة $f$ تعطي <b>رتابة $F$</b>، ورتابة $f$ (أي إشارة $f'$) تعطي <b>تقعر $(C_F)$</b>!</span>
          </div>
        `;
        ruleBox.innerHTML = gp.rootsText;
      } else if (state.mode === 'domain') {
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-2">اختر وضع الثابتتين على $\\mathbb{R}^*$ لـ $f(x)=\\frac{1}{x^2}$:</span>
          ${DOMAIN_PRESETS.map((dp) => `
            <button type="button" data-m4-dom="${dp.id}" class="px-3 py-1.5 rounded-xl text-xs font-bold ${Math.abs(state.k1 - dp.k1) < 0.05 && Math.abs(state.k2 - dp.k2) < 0.05 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">${dp.btnText}</button>
          `).join('')}
        `;
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> فرع $]-\\infty, 0[$ ($k_1$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> فرع $]0, +\\infty[$ ($k_2$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-rose-500 inline-block"></span> ثغرة $x = 0$ (ليست مجالاً!)</span>
          </div>
          <span class="text-amber-300 font-bold" dir="ltr">$f(x) = \\frac{1}{x^2}$</span>
        `;
        sliderLabel.innerHTML = 'تعديل ثابتة الفرع الأيمن $k_2 \\in [-2.5, +2.5]$ (مع إبقاء $k_1$ مستقلة):';
        metricsGrid.innerHTML = [
          metricCard('ثابتة اليسار $k_1$:', 'm4Val_k1', state.k1.toFixed(2), 'text-amber-300'),
          metricCard('ثابتة اليمين $k_2$:', 'm4Val_k2', state.k2.toFixed(2), 'text-cyan-300'),
          metricCard('فارق الثابتتين:', 'm4Val_kdiff', Math.abs(state.k2 - state.k1).toFixed(2), 'text-rose-300'),
          metricCard('المشتقة على $\\mathbb{R}^*$:','m4Val_domok', 'دوماً 1/x²', 'text-emerald-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-2">
            <span>⚠️</span> <span>لأن $\\mathbb{R}^* = ]-\\infty,0[ \\cup ]0,+\\infty[$ <b>اتحاد مجالين</b>، يمكن اختيار $k_1 \\neq k_2$ وتظل $F'(x) = \\frac{1}{x^2}$ صحيحة على كل $\\mathbb{R}^*$!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>القاعدة الصارمة للمجموعة غير المترابطة:</b><br/>
          عبارة $F(x) - G(x) = k$ صحيحة <b>على مجال $I$ واحد فقط</b>. على اتحاد مجالين منفصلين يجب تعريف ثابتة على كل مجال ما لم يفرض شرط بدئي على كل فرع.
        `;
      } else {
        const vp = VERIFY_PRESETS[state.verIdx];
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-2">اختبر حدسك بالاشتقاق العكسي:</span>
          ${VERIFY_PRESETS.map((p, i) => `
            <button type="button" data-m4-up="${i}" class="px-3 py-1.5 rounded-xl text-xs font-bold ${i === state.verIdx ? 'bg-purple-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">${p.btnText}</button>
          `).join('')}
        `;
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> الدالة المستهدفة $f(x)$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-purple-400 inline-block"></span> مشتقة صيغتك $F'_{\\alpha}(x)$</span>
          </div>
          <span class="text-purple-300 font-bold">${vp.candTex}</span>
        `;
        sliderLabel.innerHTML = `المعامل المقترح $\\alpha \\in [${vp.minA.toFixed(2)}, ${vp.maxA.toFixed(2)}]$:`;
        metricsGrid.innerHTML = [
          metricCard('معاملك $\\alpha$:', 'm4Val_al', state.alphaVal.toFixed(2), 'text-purple-300'),
          metricCard('المعامل الصحيح:', 'm4Val_altrue', vp.alphaTrue.toFixed(2), 'text-emerald-300'),
          metricCard('انحراف $F\'_\\alpha - f$:', 'm4Val_err', '0.00', 'text-rose-300'),
          metricCard('حكم التصحيح:', 'm4Val_verdict', 'تطابق!', 'text-cyan-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-2">
            <span>🧪</span> <span>${vp.trapMsg}</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>توجيه د. الرياح الفوري:</b><br/>
          بعد استنتاج أصلية $F(x)$ في فرض أو امتحان وطني، خصص 15 ثانية لاشتقاق $F(x)$ ذهنياً؛ إذا لم ينطبق منحنى $F'$ تماماً على $f$ فصحح المعامل أو الإشارة فوراً!
        `;
      }

      api.renderMath(subBar);
      api.renderMath(legend);
      api.renderMath(sliderLabel);
      api.renderMath(metricsGrid);
      api.renderMath(banner);
      api.renderMath(ruleBox);
    }

    function drawFrame() {
      const c = C();
      ctx.clearRect(0, 0, W, H);

      if (state.mode === 'family') {
        const plane = c.createPlane(W, H, { originX: W * 0.44, originY: H * 0.52, scaleX: 78, scaleY: 42 });
        c.drawGrid(ctx, plane, { xMin: -4, xMax: 5, yMin: -4, yMax: 4, color: '#0f172a' });
        c.drawAxes(ctx, plane, { color: '#475569' });

        const baseF = (x) => 0.25 * x * x * x - 0.75 * x;
        const slopeF = (x) => 0.75 * (x * x - 1);
        const x0 = 1.2;
        const m0 = slopeF(x0);

        for (const cShift of [-2, -1, 0, 1, 2]) {
          c.plotCurve(ctx, plane, (x) => baseF(x) + cShift, -3.2, 3.3, {
            color: 'rgba(100,116,139,0.45)',
            lineWidth: 1.5,
            dash: [4, 4]
          });
          const yMid = baseF(x0) + cShift;
          c.drawLine(ctx, plane, x0 - 0.75, yMid - 0.75 * m0, x0 + 0.75, yMid + 0.75 * m0, {
            color: 'rgba(192,132,252,0.42)',
            lineWidth: 1.5
          });
        }

        // Highlight active curve F_k
        c.plotCurve(ctx, plane, (x) => baseF(x) + state.kVal, -3.2, 3.3, { color: '#22d3ee', lineWidth: 3.2 });
        const y0 = baseF(x0) + state.kVal;
        c.drawLine(ctx, plane, x0, -4, x0, 4, { color: 'rgba(251,191,36,0.28)', lineWidth: 1.2, dash: [3, 3] });
        c.drawLine(ctx, plane, x0 - 0.85, y0 - 0.85 * m0, x0 + 0.85, y0 + 0.85 * m0, { color: '#fbbf24', lineWidth: 2.5 });
        c.drawPoint(ctx, plane, x0, y0, { fill: '#fbbf24', radius: 5.5 });
        c.drawPoint(ctx, plane, 0, state.kVal, { fill: '#34d399', radius: 5 });

        c.drawLabel(ctx, `F_k(0) = k = ${state.kVal.toFixed(2)}`, plane.toPxX(0.15), plane.toPxY(state.kVal) - 8, { color: '#6ee7b7' });
        c.drawLabel(ctx, `Pente = f(1.2) = ${m0.toFixed(2)}`, plane.toPxX(x0 + 0.25), plane.toPxY(y0) + 16, { color: '#fde68a' });

        sliderVal.textContent = state.kVal.toFixed(2);
        statusEq.textContent = `k = ${state.kVal >= 0 ? '+' : ''}${state.kVal.toFixed(2)} | F'_k(1.2) = ${m0.toFixed(2)}`;
        const elK = hostEl.querySelector('#m4Val_k');
        const elF0 = hostEl.querySelector('#m4Val_f0');
        const elSl = hostEl.querySelector('#m4Val_slope');
        if (elK) elK.textContent = state.kVal.toFixed(2);
        if (elF0) elF0.textContent = state.kVal.toFixed(2);
        if (elSl) elSl.textContent = m0.toFixed(2);
      } else if (state.mode === 'geometry') {
        const gp = GEO_PRESETS[state.geoIdx];
        const midY = H * 0.5;
        const planeTop = c.createPlane(W, midY, { originX: W * 0.5, originY: H * 0.27, scaleX: 115, scaleY: 36 });
        const planeBot = c.createPlane(W, H, { originX: W * 0.5, originY: H * 0.77, scaleX: 115, scaleY: 42 });

        // Divider between top (F) and bottom (f = F')
        ctx.save();
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(14, midY);
        ctx.lineTo(W - 14, midY);
        ctx.stroke();
        ctx.restore();

        // Shade f > 0 / f < 0 bands in bottom half
        for (let px = 20; px < W - 20; px += 4) {
          const x = (px - planeBot.originX) / planeBot.scaleX;
          const fv = gp.f(x);
          const py = planeBot.toPxY(fv);
          const clampedPy = Math.max(midY + 6, Math.min(H - 6, py));
          ctx.fillStyle = fv >= 0 ? 'rgba(52,211,153,0.14)' : 'rgba(244,63,94,0.14)';
          const yAxis = planeBot.originY;
          ctx.fillRect(px, Math.min(yAxis, clampedPy), 4, Math.abs(clampedPy - yAxis));
        }

        // Top plane curves (F) clipped cleanly to top half
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, W, midY - 2);
        ctx.clip();
        c.drawGrid(ctx, planeTop, { xMin: -3, xMax: 3, yMin: -2, yMax: 2, color: '#0f172a' });
        c.drawAxes(ctx, planeTop, { color: '#475569' });
        c.plotCurve(ctx, planeTop, gp.F, -2.5, 2.5, { color: '#34d399', lineWidth: 3 });
        ctx.restore();

        // Bottom plane curves (f = F') clipped cleanly to bottom half
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, midY + 2, W, H - midY - 2);
        ctx.clip();
        c.drawGrid(ctx, planeBot, { xMin: -3, xMax: 3, yMin: -2, yMax: 2, color: '#0f172a' });
        c.drawAxes(ctx, planeBot, { color: '#475569' });
        c.plotCurve(ctx, planeBot, gp.f, -2.5, 2.5, { color: '#22d3ee', lineWidth: 2.8 });
        ctx.restore();

        const xp = state.xProbe;
        const Fxp = gp.F(xp);
        const fxp = gp.f(xp);
        const dfxp = gp.df(xp);
        const probePx = planeTop.toPxX(xp);

        // Shared vertical probe across both stacked planes
        ctx.save();
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.6;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.moveTo(probePx, 8);
        ctx.lineTo(probePx, H - 8);
        ctx.stroke();
        ctx.restore();

        // Tangent segment on F at x_p using exact slope f(x_p)
        c.drawLine(ctx, planeTop, xp - 0.55, Fxp - 0.55 * fxp, xp + 0.55, Fxp + 0.55 * fxp, { color: '#fbbf24', lineWidth: 2.2 });
        c.drawPoint(ctx, planeTop, xp, Fxp, { fill: '#fbbf24', radius: 5 });
        c.drawPoint(ctx, planeBot, xp, fxp, { fill: fxp >= 0 ? '#34d399' : '#f43f5e', radius: 5 });

        c.drawLabel(ctx, 'Courbe (C_F) — Primitive', 16, 20, { color: '#6ee7b7' });
        c.drawLabel(ctx, "Courbe (C_f) = F'(x) (Signe & Variations)", 16, midY + 20, { color: '#67e8f9' });

        const monoTxt = Math.abs(fxp) < 0.06 ? 'منعطف / مطراف' : fxp > 0 ? 'تزايدية (f > 0)' : 'تناقصية (f < 0)';
        const concTxt = Math.abs(dfxp) < 0.08 ? 'نقطة انعطاف!' : dfxp > 0 ? 'محدب نحو الأعلى ∪ (f\'>0)' : 'مقعر نحو الأسفل ∩ (f\'<0)';

        sliderVal.textContent = xp.toFixed(2);
        statusEq.textContent = `x_p = ${xp.toFixed(2)} | f = ${fxp.toFixed(2)} | f' = ${dfxp.toFixed(2)}`;
        const elXp = hostEl.querySelector('#m4Val_xp');
        const elFxp = hostEl.querySelector('#m4Val_fxp');
        const elMono = hostEl.querySelector('#m4Val_mono');
        const elConc = hostEl.querySelector('#m4Val_conc');
        if (elXp) elXp.textContent = xp.toFixed(2);
        if (elFxp) elFxp.textContent = fxp.toFixed(2);
        if (elMono) elMono.textContent = monoTxt;
        if (elConc) elConc.textContent = concTxt;
      } else if (state.mode === 'domain') {
        const plane = c.createPlane(W, H, { originX: W * 0.5, originY: H * 0.52, scaleX: 82, scaleY: 36 });
        c.drawGrid(ctx, plane, { xMin: -4, xMax: 4, yMin: -5, yMax: 5, color: '#0f172a' });
        c.drawAxes(ctx, plane, { color: '#475569' });

        // Vertical asymptote / exclusion barrier at x = 0
        c.drawLine(ctx, plane, 0, -5.2, 0, 5.2, { color: '#f43f5e', lineWidth: 2, dash: [6, 4] });

        // Left branch (-inf, 0) with k1
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, W, H);
        ctx.clip();
        c.plotCurve(ctx, plane, (x) => -1 / x + state.k1, -3.9, -0.18, { color: '#fbbf24', lineWidth: 3 });
        c.plotCurve(ctx, plane, (x) => -1 / x + state.k2, 0.18, 3.9, { color: '#22d3ee', lineWidth: 3 });
        ctx.restore();

        // Horizontal asymptotes y = k1 (left) and y = k2 (right)
        c.drawLine(ctx, plane, -3.9, state.k1, 0, state.k1, { color: 'rgba(251,191,36,0.45)', lineWidth: 1.5, dash: [4, 4] });
        c.drawLine(ctx, plane, 0, state.k2, 3.9, state.k2, { color: 'rgba(34,211,238,0.45)', lineWidth: 1.5, dash: [4, 4] });

        // Sample points at -1 and +1
        c.drawPoint(ctx, plane, -1, 1 + state.k1, { fill: '#fbbf24', radius: 5 });
        c.drawPoint(ctx, plane, 1, -1 + state.k2, { fill: '#22d3ee', radius: 5 });

        c.drawLabel(ctx, `y = k1 = ${state.k1.toFixed(2)}`, 18, Math.max(20, Math.min(H - 20, plane.toPxY(state.k1) - 6)), { color: '#fde68a' });
        c.drawLabel(ctx, `y = k2 = ${state.k2.toFixed(2)}`, W - 150, Math.max(20, Math.min(H - 20, plane.toPxY(state.k2) - 6)), { color: '#67e8f9' });
        c.drawLabel(ctx, 'x = 0 Hors Domaine', plane.originX + 8, 22, { color: '#fda4af' });

        sliderVal.textContent = state.k2.toFixed(2);
        statusEq.textContent = `k1 = ${state.k1.toFixed(2)} | k2 = ${state.k2.toFixed(2)} | |k2-k1| = ${Math.abs(state.k2 - state.k1).toFixed(2)}`;
        const elK1 = hostEl.querySelector('#m4Val_k1');
        const elK2 = hostEl.querySelector('#m4Val_k2');
        const elDiff = hostEl.querySelector('#m4Val_kdiff');
        if (elK1) elK1.textContent = state.k1.toFixed(2);
        if (elK2) elK2.textContent = state.k2.toFixed(2);
        if (elDiff) elDiff.textContent = Math.abs(state.k2 - state.k1).toFixed(2);
      } else {
        const vp = VERIFY_PRESETS[state.verIdx];
        const plane = c.createPlane(W, H, { originX: W * 0.5, originY: H * 0.55, scaleX: 105, scaleY: 75 });
        c.drawGrid(ctx, plane, { xMin: -3, xMax: 3, yMin: -3, yMax: 3, color: '#0f172a' });
        c.drawAxes(ctx, plane, { color: '#475569' });

        c.plotCurve(ctx, plane, vp.f, -2.9, 2.9, { color: '#22d3ee', lineWidth: 3.2 });
        c.plotCurve(ctx, plane, (x) => vp.dCand(x, state.alphaVal), -2.9, 2.9, {
          color: Math.abs(state.alphaVal - vp.alphaTrue) < 0.03 ? '#34d399' : '#c084fc',
          lineWidth: 2.5,
          dash: Math.abs(state.alphaVal - vp.alphaTrue) < 0.03 ? null : [6, 4]
        });

        let errMax = 0;
        for (let x = -2.2; x <= 2.2; x += 0.2) {
          errMax = Math.max(errMax, Math.abs(vp.dCand(x, state.alphaVal) - vp.f(x)));
        }
        const matched = Math.abs(state.alphaVal - vp.alphaTrue) < 0.03;

        c.drawLabel(ctx, 'Cible: f(x)', 16, 22, { color: '#67e8f9' });
        c.drawLabel(ctx, matched ? "EXACT: F'_alpha(x) == f(x)" : "Ecart: F'_alpha(x) != f(x)", W - 210, 22, {
          color: matched ? '#6ee7b7' : '#d8b4fe'
        });

        sliderVal.textContent = state.alphaVal.toFixed(2);
        statusEq.textContent = `alpha = ${state.alphaVal.toFixed(2)} | alpha* = ${vp.alphaTrue.toFixed(2)}`;
        const elAl = hostEl.querySelector('#m4Val_al');
        const elTrue = hostEl.querySelector('#m4Val_altrue');
        const elErr = hostEl.querySelector('#m4Val_err');
        const elVerd = hostEl.querySelector('#m4Val_verdict');
        if (elAl) elAl.textContent = state.alphaVal.toFixed(2);
        if (elTrue) elTrue.textContent = vp.alphaTrue.toFixed(2);
        if (elErr) elErr.textContent = errMax.toFixed(2);
        if (elVerd) {
          elVerd.textContent = matched ? 'مطابقة تامة ✅' : 'معامل خاطئ ❌';
          elVerd.className = `font-mono font-bold text-sm ${matched ? 'text-emerald-300' : 'text-rose-300'}`;
        }
      }
    }

    function stepAnim(ts) {
      if (!state.playing) return;
      if (!state.lastTs) state.lastTs = ts;
      const dt = Math.min(0.05, (ts - state.lastTs) / 1000);
      state.lastTs = ts;

      if (state.mode === 'family') {
        state.kVal += state.animDir * dt * 1.4;
        if (state.kVal >= 2.4) { state.kVal = 2.4; state.animDir = -1; }
        if (state.kVal <= -2.4) { state.kVal = -2.4; state.animDir = 1; }
        slider.value = state.kVal;
      } else if (state.mode === 'geometry') {
        state.xProbe += state.animDir * dt * 1.1;
        if (state.xProbe >= 2.2) { state.xProbe = 2.2; state.animDir = -1; }
        if (state.xProbe <= -2.2) { state.xProbe = -2.2; state.animDir = 1; }
        slider.value = state.xProbe;
      } else if (state.mode === 'domain') {
        state.k2 += state.animDir * dt * 1.3;
        if (state.k2 >= 2.4) { state.k2 = 2.4; state.animDir = -1; }
        if (state.k2 <= -2.4) { state.k2 = -2.4; state.animDir = 1; }
        slider.value = state.k2;
      } else {
        const vp = VERIFY_PRESETS[state.verIdx];
        state.alphaVal += state.animDir * dt * 0.7;
        if (state.alphaVal >= vp.maxA) { state.alphaVal = vp.maxA; state.animDir = -1; }
        if (state.alphaVal <= vp.minA) { state.alphaVal = vp.minA; state.animDir = 1; }
        slider.value = state.alphaVal;
      }
      drawFrame();
      state.rafId = global.requestAnimationFrame(stepAnim);
    }

    function setGeoIdx(idx) {
      stopAnim();
      state.geoIdx = idx;
      syncChrome();
      drawFrame();
    }

    function setVerIdx(idx) {
      stopAnim();
      state.verIdx = idx;
      const vp = VERIFY_PRESETS[idx];
      slider.min = vp.minA;
      slider.max = vp.maxA;
      slider.step = vp.stepA;
      state.alphaVal = vp.defaultA;
      slider.value = vp.defaultA;
      syncChrome();
      drawFrame();
    }

    function setMode(mode) {
      stopAnim();
      state.mode = mode;
      hostEl.querySelectorAll('[data-m4-mode]').forEach((btn) => {
        const meta = MODES_META.find((m) => m.id === btn.dataset.m4Mode);
        btn.className = btn.dataset.m4Mode === mode && meta
          ? `px-3 py-2 rounded-xl text-xs font-bold ${meta.activeCls} transition`
          : 'px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition';
      });

      if (mode === 'family') {
        slider.min = -2.5; slider.max = 2.5; slider.step = 0.05;
        slider.value = state.kVal;
      } else if (mode === 'geometry') {
        slider.min = -2.3; slider.max = 2.3; slider.step = 0.05;
        slider.value = state.xProbe;
      } else if (mode === 'domain') {
        slider.min = -2.5; slider.max = 2.5; slider.step = 0.05;
        slider.value = state.k2;
      } else {
        setVerIdx(state.verIdx);
        return;
      }
      syncChrome();
      drawFrame();
    }

    hostEl.addEventListener('click', (e) => {
      const mBtn = e.target.closest('[data-m4-mode]');
      if (mBtn) return setMode(mBtn.dataset.m4Mode);
      const kBtn = e.target.closest('[data-m4-k]');
      if (kBtn) {
        stopAnim();
        state.kVal = parseFloat(kBtn.dataset.m4K);
        slider.value = state.kVal;
        syncChrome();
        drawFrame();
        return;
      }
      const gBtn = e.target.closest('[data-m4-geo]');
      if (gBtn) return setGeoIdx(Number(gBtn.dataset.m4Geo));
      const dBtn = e.target.closest('[data-m4-dom]');
      if (dBtn) {
        const preset = DOMAIN_PRESETS.find((d) => d.id === dBtn.dataset.m4Dom);
        if (preset) {
          stopAnim();
          state.k1 = preset.k1;
          state.k2 = preset.k2;
          slider.value = state.k2;
          syncChrome();
          drawFrame();
        }
        return;
      }
      const uBtn = e.target.closest('[data-m4-up]');
      if (uBtn) return setVerIdx(Number(uBtn.dataset.m4Up));
    });

    playBtn.addEventListener('click', () => {
      if (state.playing) {
        stopAnim();
        return;
      }
      state.playing = true;
      state.lastTs = 0;
      playBtn.textContent = '⏸ إيقاف مؤقت';
      playBtn.className = 'px-3.5 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 text-xs font-extrabold transition';
      state.rafId = global.requestAnimationFrame(stepAnim);
    });

    resetBtn.addEventListener('click', () => {
      if (state.mode === 'family') state.kVal = 0.8;
      else if (state.mode === 'geometry') state.xProbe = -0.8;
      else if (state.mode === 'domain') { state.k1 = -1.2; state.k2 = 1.4; }
      else state.alphaVal = VERIFY_PRESETS[state.verIdx].defaultA;
      setMode(state.mode);
    });

    slider.addEventListener('input', () => {
      stopAnim();
      const v = parseFloat(slider.value);
      if (state.mode === 'family') state.kVal = v;
      else if (state.mode === 'geometry') state.xProbe = v;
      else if (state.mode === 'domain') state.k2 = v;
      else state.alphaVal = v;
      drawFrame();
    });

    hostEl._m4SimApi = { setMode, setGeoIdx, setVerIdx, drawFrame };
    api.renderMath(hostEl);
    setMode('family');
  }

  global.EulerAcademy.registerSimulator('math-04', { mount });
})(window);
