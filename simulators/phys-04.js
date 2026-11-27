/**
 * Euler Academy — Interactive 4-Mode Nuclear Decay Laboratory for Physics Lesson 04
 * (1. Segrè Chart & Soddy Decay Vectors, 2. Exponential Decay N(t)/Nd(t) & Tangent tau,
 *  3. Half-Life Isotope Selection Window for Dating, 4. C-14 Linearization & Rock Pb/U Dating)
 */
(function (global) {
  'use strict';

  const C = () => global.EulerCanvas;

  const MODES_META = [
    { id: 'segre', label: '1. مخطط سيغري وصودي ($\\alpha, \\beta^-, \\beta^+$)', activeCls: 'bg-amber-500 text-slate-950 shadow' },
    { id: 'decay', label: '2. التناقص الإشعاعي و $\\tau$ و $t_{1/2}$', activeCls: 'bg-cyan-500 text-slate-950 shadow' },
    { id: 'isotope', label: '3. مقارنة نظيرين وعتبة التأريخ', activeCls: 'bg-emerald-500 text-slate-950 shadow' },
    { id: 'dating', label: '4. مختبر التأريخ ($^{14}\\text{C}$ والصخور)', activeCls: 'bg-purple-500 text-slate-950 shadow' }
  ];

  const DECAY_PRESETS = [
    {
      id: 'u238',
      btnText: 'أورانيوم 238 ($\\alpha$)',
      Z0: 92, N0: 146, dZ: -2, dN: -2,
      eqTex: '$ {}_{92}^{238}\\text{U} \\longrightarrow {}_{90}^{234}\\text{Th} + {}_{2}^{4}\\text{He}$',
      noteHtml: '<b>نواة ثقيلة ($A \\gt 200$):</b> ينقص التفتت $\\alpha$ كلاً من $Z$ و $N$ بمقدار $2$ لتقريب النواة من منطقة الاستقرار.'
    },
    {
      id: 'c14',
      btnText: 'كربون 14 ($\\beta^-$)',
      Z0: 6, N0: 8, dZ: 1, dN: -1,
      eqTex: '$ {}_{6}^{14}\\text{C} \\longrightarrow {}_{7}^{14}\\text{N} + {}_{-1}^{0}e$',
      noteHtml: '<b>فوق منطقة الاستقرار (فائض نوترونات):</b> يتحول نوترون إلى بروتون وفق $ {}_{0}^{1}n \\to {}_{1}^{1}p + {}_{-1}^{0}e$ فيتجه السهم $(Z+1, N-1)$.'
    },
    {
      id: 'f18',
      btnText: 'فلور 18 ($\\beta^+$)',
      Z0: 9, N0: 9, dZ: -1, dN: 1,
      eqTex: '$ {}_{9}^{18}\\text{F} \\longrightarrow {}_{8}^{18}\\text{O} + {}_{+1}^{0}e$',
      noteHtml: '<b>تحت منطقة الاستقرار (نوى اصطناعية):</b> يتحول بروتون إلى نوترون وفق $ {}_{1}^{1}p \\to {}_{0}^{1}n + {}_{+1}^{0}e$ فيتجه السهم $(Z-1, N+1)$.'
    },
    {
      id: 'co60',
      btnText: 'كوبالت 60 ($\\beta^- + \\gamma$)',
      Z0: 27, N0: 33, dZ: 1, dN: -1,
      eqTex: '$ {}_{27}^{60}\\text{Co} \\longrightarrow {}_{28}^{60}\\text{Ni}^* + {}_{-1}^{0}e$',
      noteHtml: '<b>تفتت متبوع بفقدان الإثارة $\\gamma$:</b> تتخلص النواة المتولدة المثارة $ {}_{28}^{60}\\text{Ni}^*$ من فائض الطاقة بإصدار فوتون $\\gamma$ دون تغيير $(Z, N)$.'
    }
  ];

  const DATING_SAMPLES = [
    { id: 'papyrus', btnText: 'بردية فرعونية ($a/a_0=0.61$)', ratio: 0.61, rockRatio: 0.08 },
    { id: 'boat', btnText: 'خشب سفينة قديمة ($a/a_0=0.79$)', ratio: 0.79, rockRatio: 0.20 },
    { id: 'bone', btnText: 'أحفورة عظمية ($a/a_0=0.22$)', ratio: 0.22, rockRatio: 0.55 }
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
      mode: 'segre',
      segIdx: 0,
      segProgress: 1.0,
      tHalf: 5.0,
      tProbe: 5.0,
      tHalfFast: 2.0,
      sampleAge: 10.0,
      datingMode: 'c14', // 'c14' vs 'rock'
      actRatio: 0.61,
      rockRatio: 0.12,
      playing: false,
      lastTs: 0,
      rafId: null,
      animDir: 1
    };

    hostEl.innerHTML = `
      <div class="glass rounded-3xl p-4 sm:p-8 border border-amber-500/30">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                المختبر النووي التفاعلي • الفيزياء الدرس 04
              </span>
              <span class="text-xs text-slate-400 font-mono">Simulateur de Décroissance Radioactive (4 Modes)</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">
              محاكي مخطط سيغري وصودي، منحنى التناقص $N(t)$ والمماس $\\tau$، اختيار النظير، والتأريخ
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800">
            ${MODES_META.map((m) => `
              <button type="button" data-phys4-mode="${m.id}" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <div id="p4SubBar" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div class="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-3.5 sm:p-4">
            <div id="p4Legend" class="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-3 gap-2"></div>
            <canvas id="p4Canvas" width="680" height="390" class="w-full h-auto rounded-xl bg-[#050811] border border-slate-800/90"></canvas>

            <div class="mt-4 bg-slate-900/90 p-3.5 sm:p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                <div class="flex items-center gap-2">
                  <button type="button" id="p4PlayBtn" class="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-extrabold transition">
                    ▶ تحريك تلقائي
                  </button>
                  <button type="button" id="p4ResetBtn" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition">
                    ↺ ضبط افتراضي
                  </button>
                </div>
                <span id="p4StatusEq" class="text-[11px] text-amber-300 font-mono" dir="ltr">Z = 92, N = 146</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span id="p4S1Label" class="text-slate-300">نسبة انتقال التفتت:</span>
                    <span id="p4S1Val" class="font-mono text-cyan-300" dir="ltr">100%</span>
                  </div>
                  <input id="p4S1" type="range" min="0" max="1" step="0.02" value="1" class="w-full accent-cyan-400 cursor-pointer" />
                </div>
                <div id="p4S2Wrap">
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span id="p4S2Label" class="text-slate-300">لحظة المعاينة $t$:</span>
                    <span id="p4S2Val" class="font-mono text-amber-300" dir="ltr">5.0</span>
                  </div>
                  <input id="p4S2" type="range" min="0" max="24" step="0.2" value="5.0" class="w-full accent-amber-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-4">
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
              <h4 class="text-sm font-bold text-cyan-400 mb-3">⚛️ القراءات النووية الفورية والتحليل المنهجي</h4>
              <div id="p4MetricsGrid" class="grid grid-cols-2 gap-3 text-xs mb-4"></div>
              <div id="p4Banner" class="mb-3"></div>
              <div id="p4RuleBox" class="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    const canvas = hostEl.querySelector('#p4Canvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const subBar = hostEl.querySelector('#p4SubBar');
    const legend = hostEl.querySelector('#p4Legend');
    const s1Label = hostEl.querySelector('#p4S1Label');
    const s1Val = hostEl.querySelector('#p4S1Val');
    const s1 = hostEl.querySelector('#p4S1');
    const s2Wrap = hostEl.querySelector('#p4S2Wrap');
    const s2Label = hostEl.querySelector('#p4S2Label');
    const s2Val = hostEl.querySelector('#p4S2Val');
    const s2 = hostEl.querySelector('#p4S2');
    const metricsGrid = hostEl.querySelector('#p4MetricsGrid');
    const banner = hostEl.querySelector('#p4Banner');
    const ruleBox = hostEl.querySelector('#p4RuleBox');
    const statusEq = hostEl.querySelector('#p4StatusEq');
    const playBtn = hostEl.querySelector('#p4PlayBtn');
    const resetBtn = hostEl.querySelector('#p4ResetBtn');

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
      if (state.mode === 'segre') {
        const dp = DECAY_PRESETS[state.segIdx];
        s2Wrap.classList.add('hidden');
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-2">اختر التحول النووي على مخطط سيغري:</span>
          ${DECAY_PRESETS.map((p, i) => `
            <button type="button" data-p4-decay="${i}" class="px-3 py-1.5 rounded-xl text-xs font-bold ${i === state.segIdx ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">${p.btnText}</button>
          `).join('')}
        `;
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> منطقة الاستقرار ($N \\ge Z$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-rose-400 inline-block"></span> النواة الأب $X$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> النواة الابنة $Y$</span>
          </div>
          <span class="text-amber-300 font-bold">${dp.eqTex}</span>
        `;
        s1Label.innerHTML = 'تقدم الانتقال $(Z, N)$ على المخطط:';
        metricsGrid.innerHTML = [
          metricCard('الأب $(Z_0, N_0)$:', 'p4V1', `(${dp.Z0}, ${dp.N0})`, 'text-rose-300'),
          metricCard('الابنة $(Z_1, N_1)$:', 'p4V2', `(${dp.Z0 + dp.dZ}, ${dp.N0 + dp.dN})`, 'text-emerald-300'),
          metricCard('متجهة الإزاحة:', 'p4V3', `(${dp.dZ >= 0 ? '+' : ''}${dp.dZ}, ${dp.dN >= 0 ? '+' : ''}${dp.dN})`, 'text-cyan-300'),
          metricCard('انحفاظ النويات:', 'p4V4', `A=${dp.Z0 + dp.N0}`, 'text-amber-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-2">
            <span>🧭</span> <span>${dp.noteHtml}</span>
          </div>
        `;
        ruleBox.innerHTML = `<b>قانونا صودي:</b> $A_{\\text{père}} = A_{\\text{fils}} + A_{\\text{part}}$ و $Z_{\\text{père}} = Z_{\\text{fils}} + Z_{\\text{part}}$. تذكّر أن $\\gamma$ لا يغيّر $(Z, N)$ على المخطط!`;
      } else if (state.mode === 'decay') {
        s2Wrap.classList.remove('hidden');
        subBar.classList.add('hidden');
        subBar.innerHTML = '';
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> المتبقية $N(t)/N_0 = e^{-\\lambda t}$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-rose-400 inline-block"></span> المتفتتة $N_d(t)/N_0$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> مماس $t=0 \\to \\tau$</span>
          </div>
          <span class="text-cyan-300 font-bold">$t_{1/2} = \\tau\\ln 2$</span>
        `;
        s1Label.innerHTML = 'عمر النصف $t_{1/2}$ (وحدة زمنية):';
        s2Label.innerHTML = 'لحظة القياس $t$:';
        metricsGrid.innerHTML = [
          metricCard('ثابتة الزمن $\\tau = t_{1/2}/\\ln 2$:', 'p4V1', '7.21', 'text-amber-300'),
          metricCard('نسبة المتبقية $N/N_0$:', 'p4V2', '50.0%', 'text-cyan-300'),
          metricCard('نسبة المتفتتة $N_d/N_0$:', 'p4V3', '50.0%', 'text-rose-300'),
          metricCard('عدد أعمار النصف $t/t_{1/2}$:', 'p4V4', '1.00', 'text-emerald-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-2">
            <span>⏳</span> <span>يتقاطع $N(t)$ و $N_d(t)$ دائماً عند <b>$t = t_{1/2}$</b> حيث $50\\%$ بقيت و$50\\%$ تفتتت؛ ويقطع المماس محور الزمن في $\\tau = \\frac{1}{\\lambda}$!</span>
          </div>
        `;
        ruleBox.innerHTML = `<b>تثبيت مبياني حاسم:</b> عند $t = \\tau$ يتبقى $e^{-1} \\approx 36.8\\% \\approx 0.37\\,N_0$ من النوى، وبعد $k$ عمر نصف يتبقى $N_0 / 2^k$.`;
      } else if (state.mode === 'isotope') {
        s2Wrap.classList.remove('hidden');
        subBar.classList.add('hidden');
        subBar.innerHTML = '';
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-rose-400 inline-block"></span> نظير سريع التفتت ($t_{1/2, A}$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> نظير ملائم / بطيء ($t_{1/2, B} = 10$)</span>
          </div>
          <span class="text-emerald-300 font-bold">نطاق الدقة: $0.10 \\le a/a_0 \\le 0.90$</span>
        `;
        s1Label.innerHTML = 'عمر نصف النظير $A$ ($t_{1/2, A}$):';
        s2Label.innerHTML = 'العمر المفترض للعينة $t_{\\text{age}}$:';
        metricsGrid.innerHTML = [
          metricCard('نشاط $A$ ($a_A/a_0$):', 'p4V1', '3.1%', 'text-rose-300'),
          metricCard('نشاط $B$ ($a_B/a_0$):', 'p4V2', '50.0%', 'text-emerald-300'),
          metricCard('الأنسب للتأريخ:', 'p4V3', 'النظير B ✅', 'text-cyan-300'),
          metricCard('تشخيص النظير $A$:', 'p4V4', 'مقبول', 'text-amber-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2">
            <span>⚖️</span> <span>إذا كان $t_{1/2} \\ll t_{\\text{age}}$ ينعدم النشاط ($a \\approx 0$)، وإذا كان $t_{1/2} \\gg t_{\\text{age}}$ يظل $a \\approx a_0$؛ لذا نختار نظيراً عمر نصفه مقارب لـ $t_{\\text{age}}$!</span>
          </div>
        `;
        ruleBox.innerHTML = `<b>قاعدة الامتحان الوطني:</b> لا يصلح الكربون $14$ ($t_{1/2} = 5730\\text{ ans}$) لتأريخ الصخور المليارية، ولا اليود $131$ ($8\\text{ j}$) لتأريخ الآثار التاريخية!`;
      } else {
        const isRock = state.datingMode === 'rock';
        s2Wrap.classList.add('hidden');
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-2">نوع التأريخ:</span>
          <button type="button" data-p4-rock="c14" class="px-3 py-1.5 rounded-xl text-xs font-bold ${!isRock ? 'bg-purple-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">الكربون 14 ($\\ln(a_0/a)$)</button>
          <button type="button" data-p4-rock="rock" class="px-3 py-1.5 rounded-xl text-xs font-bold ${isRock ? 'bg-purple-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">صخور $ {}_{82}^{206}\\text{Pb} / {}_{92}^{238}\\text{U}$</button>
          ${DATING_SAMPLES.map((sp) => `
            <button type="button" data-p4-sample="${sp.id}" class="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">${sp.btnText}</button>
          `).join('')}
        `;
        legend.innerHTML = isRock ? `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-purple-400 inline-block"></span> منحنى $\\frac{N_{\\text{Pb}}}{N_{\\text{U}}} = e^{\\lambda t} - 1$</span>
          </div>
          <span class="text-purple-300 font-bold">$t_{1/2}(^{238}\\text{U}) = 4.47\\text{ Ga}$</span>
        ` : `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-purple-400 inline-block"></span> المستقيم الخطي $\\ln(a_0/a) = \\lambda t$</span>
          </div>
          <span class="text-purple-300 font-bold">$t_{1/2}(^{14}\\text{C}) = 5730\\text{ ans}$</span>
        `;
        s1Label.innerHTML = isRock ? 'النسبة المقاسة $N_{\\text{fils}} / N_{\\text{père}} \\in [0.02, 1.00]$:' : 'النسبة المقاسة للنشاط $a(t)/a_0 \\in [0.06, 0.96]$:';
        metricsGrid.innerHTML = [
          metricCard(isRock ? 'النسبة $\\frac{N_{\\text{Pb}}}{N_{\\text{U}}}$:' : 'النسبة $a/a_0$:', 'p4V1', isRock ? state.rockRatio.toFixed(2) : state.actRatio.toFixed(2), 'text-cyan-300'),
          metricCard('اللوغاريتم $\\ln(\\cdot)$:', 'p4V2', '0.49', 'text-amber-300'),
          metricCard('العمر المحسوب $t$:', 'p4V3', '4085 ans', 'text-purple-300'),
          metricCard('النسبة إلى $t_{1/2}$:', 'p4V4', '0.71', 'text-emerald-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-2">
            <span>🏺</span> <span>${isRock ? 'في تأريخ الصخور لا تنسَ إضافة $1$ داخل اللوغاريتم: $t = \\frac{t_{1/2}}{\\ln 2}\\ln\\left(1 + \\frac{N_{\\text{fils}}}{N_{\\text{père}}}\\right)$!' : 'يمكّن الرسم الخطي $\\ln(a_0/a) = \\lambda t$ من تحديد $\\lambda$ عبر الميل ثم إيجاد العمر $t$ مباشرة!'}</span>
          </div>
        `;
        ruleBox.innerHTML = isRock
          ? `<b>تبرير الجمع $N_0 = N_{\\text{U}}(t) + N_{\\text{Pb}}(t)$:</b> بفرض أن الصخرة كانت خالية من الرصاص عند $t=0$، فإن كل نواة رصاص ظهرت مصدرها نواة أورانيوم متفتتة.`
          : `<b>قاعدة إزالة الأس:</b> $a(t) = a_0 e^{-\\lambda t} \\iff \\ln\\frac{a_0}{a(t)} = \\lambda t \\iff t = \\frac{t_{1/2}}{\\ln 2}\\ln\\frac{a_0}{a(t)}$.`;
      }

      api.renderMath(subBar);
      api.renderMath(legend);
      api.renderMath(s1Label);
      api.renderMath(s2Label);
      api.renderMath(metricsGrid);
      api.renderMath(banner);
      api.renderMath(ruleBox);
    }

    function drawFrame() {
      const c = C();
      ctx.clearRect(0, 0, W, H);

      if (state.mode === 'segre') {
        const dp = DECAY_PRESETS[state.segIdx];
        const plane = c.createPlane(W, H, { originX: 62, originY: H - 46, scaleX: 5.8, scaleY: 2.0 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 100, xStep: 20, yMin: 0, yMax: 155, yStep: 30, color: '#0f172a' });
        c.drawAxes(ctx, plane, { color: '#475569' });

        // Bisector N = Z
        c.drawLine(ctx, plane, 0, 0, 96, 96, { color: '#64748b', lineWidth: 1.5, dash: [5, 4] });
        // Stability valley curve
        c.plotCurve(ctx, plane, (z) => z <= 20 ? z : z + 0.0082 * Math.pow(z - 20, 2), 1, 95, {
          color: 'rgba(251,191,36,0.28)',
          lineWidth: 16
        });
        c.plotCurve(ctx, plane, (z) => z <= 20 ? z : z + 0.0082 * Math.pow(z - 20, 2), 1, 95, {
          color: '#fbbf24',
          lineWidth: 2.2
        });

        // Draw animated parent -> daughter transition around magnified view OR true chart + inset zoom
        const curZ = dp.Z0 + dp.dZ * state.segProgress;
        const curN = dp.N0 + dp.dN * state.segProgress;
        c.drawPoint(ctx, plane, dp.Z0, dp.N0, { fill: '#f43f5e', radius: 6 });
        c.drawPoint(ctx, plane, dp.Z0 + dp.dZ, dp.N0 + dp.dN, { fill: '#34d399', radius: 5 });
        c.drawLine(ctx, plane, dp.Z0, dp.N0, curZ, curN, { color: '#22d3ee', lineWidth: 2.6 });
        if (state.segProgress > 0.05 && state.segProgress < 0.99) {
          c.drawPoint(ctx, plane, curZ, curN, { fill: '#22d3ee', radius: 5.5 });
        }

        // Magnified inset box showing discrete step (Z, N) -> (Z+dZ, N+dN) cleanly even for small deltas!
        const ix = W - 236, iy = 18, iw = 218, ih = 152;
        ctx.save();
        ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(ix, iy, iw, ih, 10);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        const cx = ix + iw * 0.5, cy = iy + ih * 0.56;
        const scZ = 34, scN = 24;
        const px0 = cx - dp.dZ * 0.5 * scZ;
        const py0 = cy + dp.dN * 0.5 * scN;
        const px1 = cx + dp.dZ * 0.5 * scZ;
        const py1 = cy - dp.dN * 0.5 * scN;
        const pxCur = px0 + (px1 - px0) * state.segProgress;
        const pyCur = py0 + (py1 - py0) * state.segProgress;

        c.drawLabel(ctx, 'Zoom Vecteur (Z, N)', ix + 16, iy + 22, { color: '#fde68a' });
        ctx.save();
        ctx.strokeStyle = '#22d3ee';
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        ctx.moveTo(px0, py0);
        ctx.lineTo(pxCur, pyCur);
        ctx.stroke();
        ctx.fillStyle = '#f43f5e';
        ctx.beginPath(); ctx.arc(px0, py0, 6, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#34d399';
        ctx.beginPath(); ctx.arc(px1, py1, 5.5, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        c.drawLabel(ctx, `X(${dp.Z0},${dp.N0})`, px0 - 30, py0 + 18, { color: '#fda4af' });
        c.drawLabel(ctx, `Y(${dp.Z0 + dp.dZ},${dp.N0 + dp.dN})`, px1 - 30, py1 - 12, { color: '#6ee7b7' });

        c.drawLabel(ctx, 'Z (protons)', W - 92, H - 18, { color: '#cbd5e1' });
        c.drawLabel(ctx, 'N (neutrons)', 14, 20, { color: '#cbd5e1' });
        c.drawLabel(ctx, 'N = Z', plane.toPxX(64), plane.toPxY(61), { color: '#94a3b8' });

        s1Val.textContent = `${Math.round(state.segProgress * 100)}%`;
        statusEq.textContent = `X(${dp.Z0},${dp.N0}) -> Y(${dp.Z0 + dp.dZ},${dp.N0 + dp.dN})`;
      } else if (state.mode === 'decay') {
        const tau = state.tHalf / Math.LN2;
        const lam = Math.LN2 / state.tHalf;
        const plane = c.createPlane(W, H, { originX: 66, originY: H - 48, scaleX: 22, scaleY: 270 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 26, xStep: 2, yMin: 0, yMax: 1.15, yStep: 0.25, color: '#0f172a' });
        c.drawAxes(ctx, plane, { color: '#475569' });

        // Curves N(t)/N0 and Nd(t)/N0
        c.plotCurve(ctx, plane, (t) => Math.exp(-lam * t), 0, 26, { color: '#22d3ee', lineWidth: 3 });
        c.plotCurve(ctx, plane, (t) => 1 - Math.exp(-lam * t), 0, 26, { color: '#f43f5e', lineWidth: 2.4, dash: [5, 4] });

        // Tangent at t=0 -> intersects at t = tau
        c.drawLine(ctx, plane, 0, 1.0, Math.min(26, tau), Math.max(0, 1 - Math.min(26, tau) / tau), { color: '#fbbf24', lineWidth: 2, dash: [4, 3] });
        if (tau <= 26) {
          c.drawProjections(ctx, plane, tau, Math.exp(-1), { color: '#f472b6' });
          c.drawPoint(ctx, plane, tau, 0, { fill: '#fbbf24', radius: 4.5 });
          c.drawPoint(ctx, plane, tau, Math.exp(-1), { fill: '#f472b6', radius: 4.5 });
          c.drawLabel(ctx, `tau=${tau.toFixed(1)}`, plane.toPxX(tau) - 18, plane.originY + 18, { color: '#fde68a' });
        }

        // Half-life crossover
        if (state.tHalf <= 26) {
          c.drawProjections(ctx, plane, state.tHalf, 0.5, { color: '#34d399' });
          c.drawPoint(ctx, plane, state.tHalf, 0.5, { fill: '#34d399', radius: 5 });
          c.drawLabel(ctx, `t1/2=${state.tHalf.toFixed(1)}`, plane.toPxX(state.tHalf) - 18, plane.originY + 32, { color: '#6ee7b7' });
        }

        // Probe line at tProbe
        const rem = Math.exp(-lam * state.tProbe);
        const dec = 1 - rem;
        c.drawLine(ctx, plane, state.tProbe, 0, state.tProbe, 1.08, { color: 'rgba(255,255,255,0.45)', lineWidth: 1.4, dash: [3, 3] });
        c.drawPoint(ctx, plane, state.tProbe, rem, { fill: '#22d3ee', radius: 5.5 });
        c.drawPoint(ctx, plane, state.tProbe, dec, { fill: '#f43f5e', radius: 5 });

        c.drawLabel(ctx, 'N0', 38, plane.toPxY(1.0) + 4, { color: '#fde68a' });
        c.drawLabel(ctx, 'N0/2', 26, plane.toPxY(0.5) + 4, { color: '#6ee7b7' });
        c.drawLabel(ctx, '0.37 N0', 12, plane.toPxY(0.368) + 4, { color: '#f9a8d4' });

        s1Val.textContent = state.tHalf.toFixed(1);
        s2Val.textContent = state.tProbe.toFixed(1);
        statusEq.textContent = `tau = ${tau.toFixed(2)} | N(${state.tProbe.toFixed(1)}) = ${(rem * 100).toFixed(1)}% N0`;
        const e1 = hostEl.querySelector('#p4V1');
        const e2 = hostEl.querySelector('#p4V2');
        const e3 = hostEl.querySelector('#p4V3');
        const e4 = hostEl.querySelector('#p4V4');
        if (e1) e1.textContent = tau.toFixed(2);
        if (e2) e2.textContent = `${(rem * 100).toFixed(1)}%`;
        if (e3) e3.textContent = `${(dec * 100).toFixed(1)}%`;
        if (e4) e4.textContent = (state.tProbe / state.tHalf).toFixed(2);
      } else if (state.mode === 'isotope') {
        const thA = state.tHalfFast;
        const thB = 10.0;
        const lamA = Math.LN2 / thA;
        const lamB = Math.LN2 / thB;
        const plane = c.createPlane(W, H, { originX: 66, originY: H - 48, scaleX: 22, scaleY: 270 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 26, xStep: 2, yMin: 0, yMax: 1.15, yStep: 0.25, color: '#0f172a' });

        // Highlight optimal dating band 0.10 <= a/a0 <= 0.90
        ctx.save();
        ctx.fillStyle = 'rgba(52, 211, 153, 0.10)';
        const yTop = plane.toPxY(0.90), yBot = plane.toPxY(0.10);
        ctx.fillRect(plane.originX, yTop, W - plane.originX - 20, yBot - yTop);
        ctx.restore();

        c.drawAxes(ctx, plane, { color: '#475569' });
        c.plotCurve(ctx, plane, (t) => Math.exp(-lamA * t), 0, 26, { color: '#f43f5e', lineWidth: 2.8 });
        c.plotCurve(ctx, plane, (t) => Math.exp(-lamB * t), 0, 26, { color: '#34d399', lineWidth: 2.8 });

        const aA = Math.exp(-lamA * state.sampleAge);
        const aB = Math.exp(-lamB * state.sampleAge);
        c.drawLine(ctx, plane, state.sampleAge, 0, state.sampleAge, 1.06, { color: '#fbbf24', lineWidth: 1.8, dash: [4, 3] });
        c.drawPoint(ctx, plane, state.sampleAge, aA, { fill: '#f43f5e', radius: 5.5 });
        c.drawPoint(ctx, plane, state.sampleAge, aB, { fill: '#34d399', radius: 5.5 });

        c.drawLabel(ctx, 'Zone de datation fiable (10% - 90%)', plane.originX + 18, yTop + 16, { color: '#6ee7b7' });
        c.drawLabel(ctx, `Age t=${state.sampleAge.toFixed(1)}`, Math.min(W - 95, plane.toPxX(state.sampleAge) + 6), 24, { color: '#fde68a' });

        const okA = aA >= 0.10 && aA <= 0.90;
        const okB = aB >= 0.10 && aB <= 0.90;
        const bestTxt = okB && !okA ? 'النظير B ✅' : okA && !okB ? 'النظير A ✅' : okA && okB ? 'كلاهما صالح' : 'غير موثوق ⚠️';
        const diagA = aA < 0.10 ? 'نفد النشاط (t >> t1/2)' : aA > 0.90 ? 'ثابت تقريباً (t << t1/2)' : 'ضمن النطاق الموثوق';

        s1Val.textContent = thA.toFixed(1);
        s2Val.textContent = state.sampleAge.toFixed(1);
        statusEq.textContent = `a_A = ${(aA * 100).toFixed(1)}% | a_B = ${(aB * 100).toFixed(1)}%`;
        const e1 = hostEl.querySelector('#p4V1');
        const e2 = hostEl.querySelector('#p4V2');
        const e3 = hostEl.querySelector('#p4V3');
        const e4 = hostEl.querySelector('#p4V4');
        if (e1) e1.textContent = `${(aA * 100).toFixed(1)}%`;
        if (e2) e2.textContent = `${(aB * 100).toFixed(1)}%`;
        if (e3) e3.textContent = bestTxt;
        if (e4) e4.textContent = diagA;
      } else {
        const isRock = state.datingMode === 'rock';
        if (!isRock) {
          // C-14 linearized plot ln(a0/a) vs t (0..24 * 10^3 ans)
          const tHalf = 5730;
          const lam = Math.LN2 / tHalf; // per year -> per 10^3 yr = lam*1000 = 0.12097
          const lamK = lam * 1000;
          const plane = c.createPlane(W, H, { originX: 70, originY: H - 48, scaleX: 23, scaleY: 96 });
          c.drawGrid(ctx, plane, { xMin: 0, xMax: 24, xStep: 4, yMin: 0, yMax: 3.1, yStep: 0.5, color: '#0f172a' });
          c.drawAxes(ctx, plane, { color: '#475569' });
          c.plotCurve(ctx, plane, (tk) => lamK * tk, 0, 24, { color: '#c084fc', lineWidth: 3 });

          const yVal = Math.log(1 / state.actRatio);
          const tAns = yVal / lam;
          const tk = tAns / 1000;
          c.drawProjections(ctx, plane, tk, yVal, { color: '#fbbf24' });
          c.drawPoint(ctx, plane, tk, yVal, { fill: '#fbbf24', radius: 6 });

          c.drawLabel(ctx, 'ln(a0/a)', 18, 22, { color: '#d8b4fe' });
          c.drawLabel(ctx, 't (10^3 ans)', W - 96, H - 18, { color: '#cbd5e1' });
          c.drawLabel(ctx, `t = ${Math.round(tAns)} ans`, Math.min(W - 130, plane.toPxX(tk) + 10), Math.max(30, plane.toPxY(yVal) - 8), { color: '#fde68a' });

          s1Val.textContent = state.actRatio.toFixed(2);
          statusEq.textContent = `ln(a0/a) = ${yVal.toFixed(3)} => t = ${Math.round(tAns)} ans`;
          const e1 = hostEl.querySelector('#p4V1');
          const e2 = hostEl.querySelector('#p4V2');
          const e3 = hostEl.querySelector('#p4V3');
          const e4 = hostEl.querySelector('#p4V4');
          if (e1) e1.textContent = state.actRatio.toFixed(2);
          if (e2) e2.textContent = yVal.toFixed(3);
          if (e3) e3.textContent = `${Math.round(tAns)} ans`;
          if (e4) e4.textContent = (tAns / tHalf).toFixed(2);
        } else {
          // Rock ratio Pb/U = exp(lam * t) - 1 vs t (0..5 Ga)
          const tHalfG = 4.47; // Ga
          const lamG = Math.LN2 / tHalfG;
          const plane = c.createPlane(W, H, { originX: 70, originY: H - 48, scaleX: 112, scaleY: 220 });
          c.drawGrid(ctx, plane, { xMin: 0, xMax: 5, xStep: 1, yMin: 0, yMax: 1.3, yStep: 0.25, color: '#0f172a' });
          c.drawAxes(ctx, plane, { color: '#475569' });
          c.plotCurve(ctx, plane, (tg) => Math.exp(lamG * tg) - 1, 0, 4.9, { color: '#c084fc', lineWidth: 3 });

          const yVal = Math.log(1 + state.rockRatio);
          const tG = yVal / lamG;
          c.drawProjections(ctx, plane, tG, state.rockRatio, { color: '#fbbf24' });
          c.drawPoint(ctx, plane, tG, state.rockRatio, { fill: '#fbbf24', radius: 6 });

          c.drawLabel(ctx, 'N(Pb)/N(U)', 12, 22, { color: '#d8b4fe' });
          c.drawLabel(ctx, 't (10^9 ans)', W - 98, H - 18, { color: '#cbd5e1' });
          c.drawLabel(ctx, `t = ${tG.toFixed(2)} Ga`, Math.min(W - 120, plane.toPxX(tG) + 10), Math.max(30, plane.toPxY(state.rockRatio) - 8), { color: '#fde68a' });

          s1Val.textContent = state.rockRatio.toFixed(2);
          statusEq.textContent = `N(Pb)/N(U) = ${state.rockRatio.toFixed(2)} => t = ${tG.toFixed(2)} Ga`;
          const e1 = hostEl.querySelector('#p4V1');
          const e2 = hostEl.querySelector('#p4V2');
          const e3 = hostEl.querySelector('#p4V3');
          const e4 = hostEl.querySelector('#p4V4');
          if (e1) e1.textContent = state.rockRatio.toFixed(2);
          if (e2) e2.textContent = yVal.toFixed(3);
          if (e3) e3.textContent = `${tG.toFixed(2)} Ga`;
          if (e4) e4.textContent = (tG / tHalfG).toFixed(2);
        }
      }
    }

    function stepAnim(ts) {
      if (!state.playing) return;
      if (!state.lastTs) state.lastTs = ts;
      const dt = Math.min(0.05, (ts - state.lastTs) / 1000);
      state.lastTs = ts;

      if (state.mode === 'segre') {
        state.segProgress += dt * 0.65;
        if (state.segProgress > 1.0) state.segProgress = 0.0;
        s1.value = state.segProgress;
      } else if (state.mode === 'decay') {
        state.tProbe += dt * 4.5;
        if (state.tProbe > 24) state.tProbe = 0;
        s2.value = state.tProbe;
      } else if (state.mode === 'isotope') {
        state.sampleAge += state.animDir * dt * 4.5;
        if (state.sampleAge >= 24) { state.sampleAge = 24; state.animDir = -1; }
        if (state.sampleAge <= 0.5) { state.sampleAge = 0.5; state.animDir = 1; }
        s2.value = state.sampleAge;
      } else if (state.datingMode === 'c14') {
        state.actRatio += state.animDir * dt * 0.25;
        if (state.actRatio >= 0.94) { state.actRatio = 0.94; state.animDir = -1; }
        if (state.actRatio <= 0.08) { state.actRatio = 0.08; state.animDir = 1; }
        s1.value = state.actRatio;
      } else {
        state.rockRatio += state.animDir * dt * 0.30;
        if (state.rockRatio >= 1.00) { state.rockRatio = 1.00; state.animDir = -1; }
        if (state.rockRatio <= 0.04) { state.rockRatio = 0.04; state.animDir = 1; }
        s1.value = state.rockRatio;
      }
      drawFrame();
      state.rafId = global.requestAnimationFrame(stepAnim);
    }

    function setSegIdx(idx) {
      stopAnim();
      state.segIdx = idx;
      state.segProgress = 1.0;
      s1.value = 1.0;
      syncChrome();
      drawFrame();
    }

    function setDatingKind(kind) {
      stopAnim();
      state.datingMode = kind;
      if (kind === 'c14') {
        s1.min = 0.06; s1.max = 0.96; s1.step = 0.01;
        s1.value = state.actRatio;
      } else {
        s1.min = 0.02; s1.max = 1.00; s1.step = 0.01;
        s1.value = state.rockRatio;
      }
      syncChrome();
      drawFrame();
    }

    function setMode(mode) {
      stopAnim();
      state.mode = mode;
      hostEl.querySelectorAll('[data-phys4-mode]').forEach((btn) => {
        const meta = MODES_META.find((m) => m.id === btn.dataset.phys4Mode);
        btn.className = btn.dataset.phys4Mode === mode && meta
          ? `px-3 py-2 rounded-xl text-xs font-bold ${meta.activeCls} transition`
          : 'px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition';
      });

      if (mode === 'segre') {
        s1.min = 0; s1.max = 1; s1.step = 0.02;
        s1.value = state.segProgress;
      } else if (mode === 'decay') {
        s1.min = 2.0; s1.max = 16.0; s1.step = 0.2;
        s1.value = state.tHalf;
        s2.min = 0; s2.max = 24.0; s2.step = 0.2;
        s2.value = state.tProbe;
      } else if (mode === 'isotope') {
        s1.min = 0.5; s1.max = 12.0; s1.step = 0.2;
        s1.value = state.tHalfFast;
        s2.min = 0.5; s2.max = 24.0; s2.step = 0.2;
        s2.value = state.sampleAge;
      } else {
        setDatingKind(state.datingMode);
        return;
      }
      syncChrome();
      drawFrame();
    }

    hostEl.addEventListener('click', (e) => {
      const mBtn = e.target.closest('[data-phys4-mode]');
      if (mBtn) return setMode(mBtn.dataset.phys4Mode);
      const dBtn = e.target.closest('[data-p4-decay]');
      if (dBtn) return setSegIdx(Number(dBtn.dataset.p4Decay));
      const rBtn = e.target.closest('[data-p4-rock]');
      if (rBtn) return setDatingKind(rBtn.dataset.p4Rock);
      const sBtn = e.target.closest('[data-p4-sample]');
      if (sBtn) {
        const sp = DATING_SAMPLES.find((x) => x.id === sBtn.dataset.p4Sample);
        if (sp) {
          stopAnim();
          if (state.datingMode === 'c14') {
            state.actRatio = sp.ratio;
            s1.value = sp.ratio;
          } else {
            state.rockRatio = sp.rockRatio;
            s1.value = sp.rockRatio;
          }
          drawFrame();
        }
      }
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
      state.segProgress = 1.0;
      state.tHalf = 5.0;
      state.tProbe = 5.0;
      state.tHalfFast = 2.0;
      state.sampleAge = 10.0;
      state.actRatio = 0.61;
      state.rockRatio = 0.12;
      setMode(state.mode);
    });

    s1.addEventListener('input', () => {
      stopAnim();
      const v = parseFloat(s1.value);
      if (state.mode === 'segre') state.segProgress = v;
      else if (state.mode === 'decay') state.tHalf = v;
      else if (state.mode === 'isotope') state.tHalfFast = v;
      else if (state.datingMode === 'c14') state.actRatio = v;
      else state.rockRatio = v;
      drawFrame();
    });

    s2.addEventListener('input', () => {
      stopAnim();
      const v = parseFloat(s2.value);
      if (state.mode === 'decay') state.tProbe = v;
      else if (state.mode === 'isotope') state.sampleAge = v;
      drawFrame();
    });

    hostEl._p4SimApi = { setMode, setSegIdx, setDatingKind, drawFrame };
    api.renderMath(hostEl);
    setMode('segre');
  }

  global.EulerAcademy.registerSimulator('phys-04', { mount });
})(window);
