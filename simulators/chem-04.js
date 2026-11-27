/**
 * Euler Academy — Interactive 4-Mode Equilibrium & Conductometry Laboratory for Chemistry Lesson 04
 * (1. Qr(t) Convergence to K(T) Invariant of C, 2. Conductimetry G = k*sigma -> [H3O+] -> tau & K,
 *  3. Parametric Influence of K and Initial Concentration C on tau, 4. Reaction Equation Rules for K)
 */
(function (global) {
  'use strict';

  const C = () => global.EulerCanvas;

  const MODES_META = [
    { id: 'quotient', label: '1. تقارب $Q_r(t) \\to K(T)$ وثباتها', activeCls: 'bg-cyan-500 text-slate-950 shadow' },
    { id: 'conductance', label: '2. مختبر الموصلية $G = k\\cdot\\sigma$', activeCls: 'bg-emerald-500 text-slate-950 shadow' },
    { id: 'influence', label: '3. تأثير $K$ و $C$ على $\\tau$', activeCls: 'bg-amber-500 text-slate-950 shadow' },
    { id: 'equation', label: '4. قواعد $Q_r$ وتحويل المعادلة', activeCls: 'bg-purple-500 text-slate-950 shadow' }
  ];

  const ACID_PRESETS = [
    { id: 'ethanoic', name: 'الإيثانويك ($\\text{CH}_3\\text{COOH}$)', labelFr: 'CH3COOH', K: 1.80e-5, lamH: 35.0, lamA: 4.09, col: '#22d3ee' },
    { id: 'methanoic', name: 'الميثانويك ($\\text{HCOOH}$)', labelFr: 'HCOOH', K: 1.80e-4, lamH: 35.0, lamA: 5.46, col: '#34d399' },
    { id: 'propanoic', name: 'البروبانويك ($\\text{C}_2\\text{H}_5\\text{COOH}$)', labelFr: 'C2H5COOH', K: 1.34e-5, lamH: 35.0, lamA: 3.58, col: '#fbbf24' }
  ];

  const TRANS_PRESETS = [
    { id: 'base', btnText: 'المعادلة الأصلية ($1 \\times$)', labelFr: 'a A + b B <=> c C + d D', formulaHtml: '$K = Q_{r,\\text{éq}}$', eqScale: 1, factor: (k0) => k0 },
    { id: 'reverse', btnText: 'عكس المعادلة ($-1$)', labelFr: 'c C + d D <=> a A + b B', formulaHtml: "$K' = 1 / K$", eqScale: -1, factor: (k0) => 1 / k0 },
    { id: 'double', btnText: 'ضرب المعاملات ($\\times 2$)', labelFr: '2a A + 2b B <=> 2c C + 2d D', formulaHtml: "$K'' = K^2$", eqScale: 2, factor: (k0) => k0 * k0 },
    { id: 'half', btnText: 'قسمة المعاملات ($\\div 2$)', labelFr: '(a/2) A + (b/2) B <=> (c/2) C + (d/2) D', formulaHtml: "$K''' = \\sqrt{K}$", eqScale: 0.5, factor: (k0) => Math.sqrt(k0) }
  ];

  // Solve [H3O+]^2 + K*[H3O+] - K*C = 0 for weak acid in water
  function solveEqConc(C0, K) {
    return (-K + Math.sqrt(K * K + 4 * K * C0)) / 2;
  }

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
      mode: 'quotient',
      tempCode: '25', // '25' -> K=1.80e-5, '60' -> K=3.20e-5 (endothermic sample)
      tSec: 65,
      acidIdx: 0,
      cellK: 0.010, // k = S/L in m (0.010 or 0.0125)
      concCond: 0.010,
      concInf: 0.010,
      transId: 'base',
      baseK0: 4.0,
      playing: false,
      lastTs: 0,
      rafId: null,
      phaseTime: 0
    };

    hostEl.innerHTML = `
      <div class="glass rounded-3xl p-4 sm:p-8 border border-emerald-500/30">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                المختبر التفاعلي لحالة التوازن • الكيمياء الدرس 04
              </span>
              <span class="text-xs text-slate-400 font-mono">Laboratoire de Qr, K(T) et Conductimétrie (4 Modes)</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">
              محاكي تقارب خارج التفاعل $Q_r \\to K(T)$، الموصلية $G = k\\cdot\\sigma$، وأثر $K$ و $C$ على $\\tau$
            </h3>
          </div>
          <div class="flex flex-wrap gap-2">
            ${MODES_META.map((m) => `
              <button type="button" data-c4-mode="${m.id}" class="px-3 py-2 rounded-xl text-xs font-bold bg-slate-900 text-slate-400 hover:text-white transition">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Contextual Sub-bar -->
        <div id="c4SubBar" class="mb-4 flex flex-wrap items-center gap-2 p-3 rounded-2xl bg-slate-950/75 border border-slate-800"></div>

        <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          <!-- Left: Interactive Canvas -->
          <div class="xl:col-span-7 bg-[#050811] rounded-2xl border border-slate-800 p-2 sm:p-4 flex flex-col">
            <div id="c4Legend" class="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 mb-3 px-1"></div>

            <div class="w-full overflow-x-auto pb-1">
              <canvas id="c4Canvas" width="680" height="390" class="w-full h-auto block mx-auto rounded-xl bg-slate-950/70 border border-slate-800/80"></canvas>
            </div>

            <!-- Controls Row -->
            <div class="mt-4 pt-4 border-t border-slate-800/80 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div class="flex flex-wrap items-center gap-2">
                  <button type="button" id="c4PlayBtn" class="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition">▶ تشغيل التطور</button>
                  <button type="button" id="c4ResetBtn" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition">↺ إعادة ضبط</button>
                </div>
                <span id="c4StatusEq" class="text-xs font-mono text-cyan-300" dir="ltr">K = 1.80e-5 | Qr,eq = K</span>
              </div>

              <div>
                <div class="flex items-center justify-between text-xs mb-1">
                  <span id="c4SliderLabel" class="text-slate-300 font-semibold"></span>
                  <span id="c4SliderVal" class="font-mono text-amber-300 font-bold" dir="ltr"></span>
                </div>
                <input type="range" id="c4Slider" min="0" max="100" step="1" value="65" class="w-full accent-emerald-400 cursor-pointer" dir="ltr" />
              </div>
            </div>
          </div>

          <!-- Right: Live Telemetry & Exam Rules -->
          <div class="xl:col-span-5 space-y-4">
            <div id="c4MetricsGrid" class="grid grid-cols-2 gap-3 text-xs"></div>
            <div id="c4Banner"></div>
            <div id="c4RuleBox" class="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed"></div>
          </div>
        </div>
      </div>
    `;

    const canvas = hostEl.querySelector('#c4Canvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const subBar = hostEl.querySelector('#c4SubBar');
    const legend = hostEl.querySelector('#c4Legend');
    const playBtn = hostEl.querySelector('#c4PlayBtn');
    const resetBtn = hostEl.querySelector('#c4ResetBtn');
    const statusEq = hostEl.querySelector('#c4StatusEq');
    const slider = hostEl.querySelector('#c4Slider');
    const sliderLabel = hostEl.querySelector('#c4SliderLabel');
    const sliderVal = hostEl.querySelector('#c4SliderVal');
    const metricsGrid = hostEl.querySelector('#c4MetricsGrid');
    const banner = hostEl.querySelector('#c4Banner');
    const ruleBox = hostEl.querySelector('#c4RuleBox');

    function stopAnim() {
      if (state.rafId) {
        global.cancelAnimationFrame(state.rafId);
        state.rafId = null;
      }
      state.playing = false;
      playBtn.textContent = '▶ تشغيل التطور';
      playBtn.className = 'px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition';
    }

    function stepAnim(ts) {
      if (!state.playing) return;
      const dt = state.lastTs ? Math.min(0.05, (ts - state.lastTs) / 1000) : 0.016;
      state.lastTs = ts;
      state.phaseTime += dt;

      if (state.mode === 'quotient') {
        state.tSec += dt * 16;
        if (state.tSec > 100) state.tSec = 0;
        slider.value = state.tSec.toFixed(0);
      } else if (state.mode === 'conductance') {
        state.concCond += dt * 0.008;
        if (state.concCond > 0.050) state.concCond = 0.002;
        slider.value = state.concCond.toFixed(3);
      } else if (state.mode === 'influence') {
        state.concInf += dt * 0.008;
        if (state.concInf > 0.050) state.concInf = 0.001;
        slider.value = state.concInf.toFixed(3);
      } else {
        state.baseK0 += dt * 1.4;
        if (state.baseK0 > 10.0) state.baseK0 = 0.5;
        slider.value = state.baseK0.toFixed(1);
      }

      drawFrame();
      state.rafId = global.requestAnimationFrame(stepAnim);
    }

    function syncModeButtons() {
      MODES_META.forEach((m) => {
        const b = hostEl.querySelector(`[data-c4-mode="${m.id}"]`);
        if (!b) return;
        b.className = m.id === state.mode
          ? `px-3 py-2 rounded-xl text-xs font-bold transition ${m.activeCls}`
          : 'px-3 py-2 rounded-xl text-xs font-bold transition bg-slate-900 text-slate-400 hover:text-white';
      });
    }

    function syncChrome() {
      if (state.mode === 'quotient') {
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-1">درجة حرارة التجربة $T$:</span>
          <button type="button" data-c4-temp="25" class="px-3 py-1.5 rounded-xl text-xs font-bold ${state.tempCode === '25' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">$T_1 = 25^\\circ\\text{C}$ ($K_1 = 1.80\\times 10^{-5}$)</button>
          <button type="button" data-c4-temp="60" class="px-3 py-1.5 rounded-xl text-xs font-bold ${state.tempCode === '60' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">$T_2 = 60^\\circ\\text{C}$ ($K_2 = 3.20\\times 10^{-5}$)</button>
        `;
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> $C_1 = 0.050\\text{ mol/L}$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> $C_2 = 0.010\\text{ mol/L}$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> $C_3 = 0.002\\text{ mol/L}$</span>
          </div>
          <span class="font-mono text-amber-300" dir="ltr">Qr,eq = K(T)</span>
        `;
        sliderLabel.innerHTML = 'الزمن التفاعلي $t$ ($\\text{s}$):';
        metricsGrid.innerHTML = [
          metricCard('ثابتة التوازن $K(T)$:', 'c4Val_K1', '1.80e-5', 'text-amber-300'),
          metricCard('$\\tau_1$ ($C_1 = 0.050$):', 'c4Val_tau1', '1.9%', 'text-cyan-300'),
          metricCard('$\\tau_2$ ($C_2 = 0.010$):', 'c4Val_tau2', '4.2%', 'text-emerald-300'),
          metricCard('$\\tau_3$ ($C_3 = 0.002$):', 'c4Val_tau3', '9.0%', 'text-rose-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-2">
            <span>⚖️</span> <span>رغم اختلاف التراكيز البدئية ($C_1 \\neq C_2 \\neq C_3$) وتباين نسب التقدم $\\tau$، تصطدم جميع المنحنيات في نفس السقف الأفقي $K(T)$!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>الخلاصة الذهبية (الإطار المرجعي):</b><br/>
          لا تتعلق ثابتة التوازن $K = Q_{r,\\text{éq}}$ بالتراكيز البدئية ولا بالتخفيف ولا بالحفاز، بل تتغير <b>فقط بتغيّر درجة الحرارة $T$</b> وبكتابة المعادلة.
        `;
      } else if (state.mode === 'conductance') {
        const ac = ACID_PRESETS[state.acidIdx];
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-1">الحمض المختار ($25^\\circ\\text{C}$):</span>
          ${ACID_PRESETS.map((a, i) => `
            <button type="button" data-c4-acid="${i}" class="px-2.5 py-1.5 rounded-xl text-xs font-bold ${i === state.acidIdx ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">${a.name}</button>
          `).join('')}
          <button type="button" data-c4-cell="toggle" class="px-2.5 py-1.5 rounded-xl text-xs font-bold bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:bg-slate-800 transition">الخلية $k = ${(state.cellK * 100).toFixed(2)}\\text{ cm}$</button>
        `;
        legend.innerHTML = `
          <span>مسار استنتاج $Q_{r,\\text{éq}}$ عبر قياس المواصلة $G = k\\cdot\\sigma$ وتحويل $\\text{mol}/\\text{m}^3 \\to \\text{mol}/\\text{L}$</span>
          <span class="font-mono text-emerald-300" dir="ltr">G = k * sigma</span>
        `;
        sliderLabel.innerHTML = 'التركيز البدئي للحمض $C$ ($\\text{mol}\\cdot\\text{L}^{-1}$):';
        metricsGrid.innerHTML = [
          metricCard('المواصلة المقاسة $G_{\\text{éq}}$:', 'c4Val_G', '2.03e-4 S', 'text-cyan-300'),
          metricCard('الموصلية $\\sigma_{\\text{éq}}$:', 'c4Val_sig', '16.2 mS/m', 'text-emerald-300'),
          metricCard('$[\\text{H}_3\\text{O}^+]_{\\text{éq}}$ ($\\text{mol}/\\text{m}^3$):', 'c4Val_hm3', '0.415', 'text-amber-300'),
          metricCard('نسبة التقدم $\\tau$ و $K$:', 'c4Val_tauK', '4.15%', 'text-purple-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 font-bold text-xs flex items-center gap-2">
            <span>🚨</span> <span>حذارِ من فخ التحويل! القيمة الناتجة من $\\frac{\\sigma}{\\lambda_1 + \\lambda_2}$ تكون بوحدة $\\text{mol}\\cdot\\text{m}^{-3}$؛ اضرب دائماً في $10^{-3}$ قبل حساب $\\tau$ و $K$!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>علاقة كولروش عند التوازن:</b><br/>
          $[\\text{H}_3\\text{O}^+]_{\\text{éq}} = [\\text{A}^-]_{\\text{éq}} \\implies \\sigma_{\\text{éq}} = (\\lambda_{\\text{H}_3\\text{O}^+} + \\lambda_{\\text{A}^-})[\\text{H}_3\\text{O}^+]_{\\text{éq}}$ لـ ${ac.name}.
        `;
      } else if (state.mode === 'influence') {
        subBar.classList.add('hidden');
        subBar.innerHTML = '';
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> حمض 1: $\\text{HCOOH}$ ($K_1 = 1.8\\times 10^{-4}$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> حمض 2: $\\text{CH}_3\\text{COOH}$ ($K_2 = 1.8\\times 10^{-5}$)</span>
          </div>
          <span class="font-mono text-amber-300" dir="ltr">tau^2 / (1 - tau) = K / C</span>
        `;
        sliderLabel.innerHTML = 'التركيز المولي البدئي المشترك $C$ ($\\text{mol}\\cdot\\text{L}^{-1}$):';
        metricsGrid.innerHTML = [
          metricCard('التركيز المشترك $C$:', 'c4Val_C3', '0.010 mol/L', 'text-slate-200'),
          metricCard('$\\tau_1$ ($\\text{HCOOH}$):', 'c4Val_tInf1', '12.6%', 'text-cyan-300'),
          metricCard('$\\tau_2$ ($\\text{CH}_3\\text{COOH}$):', 'c4Val_tInf2', '4.15%', 'text-amber-300'),
          metricCard('الفرق $pH_2 - pH_1$:', 'c4Val_dpH', '0.48', 'text-emerald-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-2">
            <span>📉</span> <span>حرّك المزلق يساراً (التخفيف $C \\downarrow$): ترتفع $\\tau_1$ و $\\tau_2$ معاً، ويبقى دائماً الحمض ذو $K$ الأكبر متفوقاً ($\\tau_1 \\gt \\tau_2$)!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>العاملان المؤثران على نسبة التقدم $\\tau$:</b><br/>
          تزداد نسبة التقدم النهائي $\\tau$ كلما <b>كبرت ثابتة التوازن $K$</b> (عند نفس $C$)، وكلما <b>نقص التركيز البدئي $C$</b> بالتخفيف (عند نفس $K$).
        `;
      } else {
        const pr = TRANS_PRESETS.find((x) => x.id === state.transId) || TRANS_PRESETS[0];
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-1">تحويل المعادلة الكيميائية:</span>
          ${TRANS_PRESETS.map((p) => `
            <button type="button" data-c4-trans="${p.id}" class="px-2.5 py-1.5 rounded-xl text-xs font-bold ${p.id === state.transId ? 'bg-purple-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">${p.btnText}</button>
          `).join('')}
        `;
        legend.innerHTML = `
          <span>أثر عكس المعادلة أو ضرب معاملاتها في $n$ على ثابتة التوازن $K$ وإقصاء $(s)$ و $\\text{H}_2\\text{O}$</span>
          <span class="font-mono text-purple-300" dir="ltr">${state.transId === 'base' ? 'K = K0' : state.transId === 'reverse' ? "K' = 1/K0" : state.transId === 'double' ? "K'' = K0^2" : "K''' = sqrt(K0)"}</span>
        `;
        sliderLabel.innerHTML = 'ثابتة التوازن للمعادلة الأصلية $K_0$:';
        metricsGrid.innerHTML = [
          metricCard('الثابتة الأصلية $K_0$:', 'c4Val_K0', '4.00', 'text-cyan-300'),
          metricCard('الثابتة المحوّلة:', 'c4Val_Kp', '4.00', 'text-purple-300'),
          metricCard('قيمة $\\log_{10} K_{\\text{new}}$:', 'c4Val_logK', '0.60', 'text-amber-300'),
          metricCard('حالة $(s)$ و $\\text{H}_2\\text{O}$:', 'c4Val_phase', 'تُعوض بـ 1', 'text-emerald-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-2">
            <span>🔄</span> <span>العلاقة الحالية: ${pr.formulaHtml} — تغيير كتابة نفس التحول يغيّر القيمة العددية للثابتة فوراً!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>قاعدة الطور والمعاملات (معيار د. الرياح):</b><br/>
          لا تدخل في $Q_r$ سوى الأنواع المذابة ($\\text{aq}$) بتراكيزها بوحدة $\\text{mol/L}$؛ وكل جسم صلب أو مذيب وفير يعوض بالعدد $1$.
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

      if (state.mode === 'quotient') {
        const K = state.tempCode === '25' ? 1.80e-5 : 3.20e-5;
        const Kscaled = K * 1e5; // 1.80 or 3.20 on a 0..4 axis
        const concs = [
          { C0: 0.050, col: '#22d3ee', rate: 0.095, tag: 'C1=0.050' },
          { C0: 0.010, col: '#34d399', rate: 0.065, tag: 'C2=0.010' },
          { C0: 0.002, col: '#fbbf24', rate: 0.042, tag: 'C3=0.002' }
        ];
        const t = state.tSec;
        const taus = concs.map((item) => solveEqConc(item.C0, K) / item.C0);

        sliderVal.textContent = `t = ${t.toFixed(0)} s`;
        statusEq.textContent = `T = ${state.tempCode} C  |  K = ${K.toExponential(2)}  (Invariant de C)`;

        const plane = c.createPlane(W, H, { originX: 74, originY: H - 50, scaleX: 5.5, scaleY: 74 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 105, xStep: 20, yMin: 0, yMax: 4.0, yStep: 1.0 });
        c.drawAxes(ctx, plane);

        // Plateau K(T)
        c.drawLine(ctx, plane, 0, Kscaled, 102, Kscaled, { color: '#f43f5e', lineWidth: 2.0, dash: [6, 4] });
        c.drawLabel(ctx, `Plafond K(${state.tempCode} C) = ${Kscaled.toFixed(2)} x 10^-5`, 86, plane.toPxY(Kscaled) - 8, { color: '#fda4af', font: 'bold 11px monospace' });

        concs.forEach((item) => {
          const fn = (x) => Kscaled * (1 - Math.exp(-item.rate * x));
          c.plotCurve(ctx, plane, fn, 0, 100, { color: item.col, lineWidth: 2.6 });
          c.drawPoint(ctx, plane, t, fn(t), { fill: item.col, radius: 5.0 });
        });

        c.drawLabel(ctx, 't (s)', W - 56, H - 16, { color: '#cbd5e1', font: 'bold 11px monospace' });
        c.drawLabel(ctx, 'Qr (x 10^-5)', 12, 24, { color: '#cbd5e1', font: 'bold 11px monospace' });

        // Top-right mini inset proving different tau values
        ctx.save();
        ctx.fillStyle = 'rgba(15,23,42,0.88)';
        ctx.fillRect(430, 18, 234, 82);
        ctx.strokeStyle = '#334155';
        ctx.strokeRect(430, 18, 234, 82);
        c.drawLabel(ctx, `tau1 (C1) = ${(taus[0] * 100).toFixed(2)}%`, 444, 42, { color: '#67e8f9', font: 'bold 11px monospace' });
        c.drawLabel(ctx, `tau2 (C2) = ${(taus[1] * 100).toFixed(2)}%`, 444, 63, { color: '#6ee7b7', font: 'bold 11px monospace' });
        c.drawLabel(ctx, `tau3 (C3) = ${(taus[2] * 100).toFixed(2)}%`, 444, 84, { color: '#fde68a', font: 'bold 11px monospace' });
        ctx.restore();

        const elK1 = hostEl.querySelector('#c4Val_K1');
        const elT1 = hostEl.querySelector('#c4Val_tau1');
        const elT2 = hostEl.querySelector('#c4Val_tau2');
        const elT3 = hostEl.querySelector('#c4Val_tau3');
        if (elK1) elK1.textContent = K.toExponential(2);
        if (elT1) elT1.textContent = `${(taus[0] * 100).toFixed(2)}%`;
        if (elT2) elT2.textContent = `${(taus[1] * 100).toFixed(2)}%`;
        if (elT3) elT3.textContent = `${(taus[2] * 100).toFixed(2)}%`;
      } else if (state.mode === 'conductance') {
        const ac = ACID_PRESETS[state.acidIdx];
        const C0 = state.concCond;
        const h3o_molL = solveEqConc(C0, ac.K);
        const h3o_molm3 = h3o_molL * 1000;
        const lamSum_mS = ac.lamH + ac.lamA; // mS.m^2/mol
        const sigma_mSm = lamSum_mS * h3o_molm3; // mS/m
        const sigma_Sm = sigma_mSm * 1e-3;
        const G_S = state.cellK * sigma_Sm;
        const tauPct = (h3o_molL / C0) * 100;

        sliderVal.textContent = `C = ${C0.toFixed(3)} mol/L`;
        statusEq.textContent = `G = ${G_S.toExponential(2)} S  |  tau = ${tauPct.toFixed(2)}%`;

        ctx.save();
        // Left Cell Visual + Digital Meter
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(22, 22, 275, 344);
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.6;
        ctx.strokeRect(22, 22, 275, 344);
        c.drawLabel(ctx, `Conductimetre (${ac.labelFr})`, 46, 48, { color: '#6ee7b7', font: 'bold 12px monospace' });

        // Beaker
        ctx.fillStyle = 'rgba(34,211,238,0.14)';
        ctx.fillRect(68, 125, 184, 175);
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.strokeRect(68, 125, 184, 175);

        // Two Pt electrodes separated by L
        ctx.fillStyle = '#64748b';
        ctx.fillRect(102, 102, 12, 140);
        ctx.fillRect(206, 102, 12, 140);
        c.drawLabel(ctx, `k = S/L = ${state.cellK.toFixed(4)} m`, 74, 92, { color: '#cbd5e1', font: 'bold 10.5px monospace' });

        // Digital conductance badge
        ctx.fillStyle = '#020617';
        ctx.fillRect(48, 314, 222, 38);
        ctx.strokeStyle = '#10b981';
        ctx.strokeRect(48, 314, 222, 38);
        c.drawLabel(ctx, `G = ${G_S.toExponential(2)} S`, 74, 338, { color: '#34d399', font: 'bold 13px monospace' });

        // Animated ion indicators in beaker (H3O+ and A-)
        const nPairs = Math.max(2, Math.min(8, Math.round(h3o_molm3 * 12)));
        for (let i = 0; i < nPairs; i++) {
          const jitterX = state.playing ? Math.sin(state.phaseTime * 4 + i * 1.7) * 5 : 0;
          const jitterY = state.playing ? Math.cos(state.phaseTime * 3.5 + i * 2.1) * 4 : 0;
          const px = 128 + ((i % 4) * 18) + jitterX;
          const py = 165 + Math.floor(i / 4) * 52 + jitterY;
          ctx.fillStyle = i % 2 === 0 ? '#22d3ee' : '#fbbf24';
          ctx.beginPath();
          ctx.arc(px, py, 6, 0, Math.PI * 2);
          ctx.fill();
        }
        c.drawLabel(ctx, 'Ions H3O+ & A-', 102, 286, { color: '#fde68a', font: 'bold 10.5px monospace' });

        // Right 4-Step Quantitative Conversion Pipeline
        const steps = [
          { t: `1. sigma = G / k = ${sigma_mSm.toFixed(2)} mS/m`, c: '#38bdf8', bg: 'rgba(56,189,248,0.12)' },
          { t: `2. [H3O+] = ${h3o_molm3.toFixed(3)} mol/m^3`, c: '#34d399', bg: 'rgba(52,211,153,0.12)' },
          { t: `3. Convertir x10^-3 => ${h3o_molL.toExponential(2)} mol/L`, c: '#f43f5e', bg: 'rgba(244,63,94,0.15)' },
          { t: `4. tau = ${tauPct.toFixed(2)}%  |  K = ${ac.K.toExponential(2)}`, c: '#fbbf24', bg: 'rgba(251,191,36,0.12)' }
        ];
        c.drawLabel(ctx, 'Pipeline de Calcul (2BAC PC)', 336, 44, { color: '#cbd5e1', font: 'bold 12px monospace' });
        steps.forEach((st, idx) => {
          const sy = 68 + idx * 76;
          ctx.fillStyle = st.bg;
          ctx.fillRect(322, sy, 336, 52);
          ctx.strokeStyle = st.c;
          ctx.lineWidth = 1.5;
          ctx.strokeRect(322, sy, 336, 52);
          c.drawLabel(ctx, st.t, 336, sy + 31, { color: st.c, font: 'bold 11.5px monospace' });
        });
        ctx.restore();

        const elG = hostEl.querySelector('#c4Val_G');
        const elSig = hostEl.querySelector('#c4Val_sig');
        const elHm3 = hostEl.querySelector('#c4Val_hm3');
        const elTK = hostEl.querySelector('#c4Val_tauK');
        if (elG) elG.textContent = `${G_S.toExponential(2)} S`;
        if (elSig) elSig.textContent = `${sigma_mSm.toFixed(2)} mS/m`;
        if (elHm3) elHm3.textContent = `${h3o_molm3.toFixed(3)}`;
        if (elTK) elTK.textContent = `${tauPct.toFixed(2)}% (K=${ac.K.toExponential(1)})`;
      } else if (state.mode === 'influence') {
        const Csel = state.concInf;
        const K1 = 1.80e-4;
        const K2 = 1.80e-5;
        const h1 = solveEqConc(Csel, K1);
        const h2 = solveEqConc(Csel, K2);
        const tau1Pct = (h1 / Csel) * 100;
        const tau2Pct = (h2 / Csel) * 100;
        const ph1 = -Math.log10(h1);
        const ph2 = -Math.log10(h2);

        sliderVal.textContent = `C = ${Csel.toFixed(3)} mol/L`;
        statusEq.textContent = `tau1 = ${tau1Pct.toFixed(1)}%  >  tau2 = ${tau2Pct.toFixed(1)}%`;

        const plane = c.createPlane(W, H, { originX: 74, originY: H - 50, scaleX: 10500, scaleY: 4.9 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 0.052, xStep: 0.01, yMin: 0, yMax: 58, yStep: 10 });
        c.drawAxes(ctx, plane);

        const fn1 = (cx) => (solveEqConc(Math.max(0.0008, cx), K1) / Math.max(0.0008, cx)) * 100;
        const fn2 = (cx) => (solveEqConc(Math.max(0.0008, cx), K2) / Math.max(0.0008, cx)) * 100;
        c.plotCurve(ctx, plane, fn1, 0.001, 0.050, { color: '#22d3ee', lineWidth: 2.8 });
        c.plotCurve(ctx, plane, fn2, 0.001, 0.050, { color: '#fbbf24', lineWidth: 2.8 });

        // Vertical cursor at Csel
        c.drawLine(ctx, plane, Csel, 0, Csel, 55, { color: '#34d399', lineWidth: 1.5, dash: [4, 4] });
        c.drawPoint(ctx, plane, Csel, tau1Pct, { fill: '#22d3ee', radius: 6 });
        c.drawPoint(ctx, plane, Csel, tau2Pct, { fill: '#fbbf24', radius: 6 });

        c.drawLabel(ctx, 'C (mol/L)', W - 76, H - 16, { color: '#cbd5e1', font: 'bold 11px monospace' });
        c.drawLabel(ctx, 'tau (%)', 16, 24, { color: '#cbd5e1', font: 'bold 11px monospace' });
        c.drawLabel(ctx, 'K1 = 1.8e-4 (HCOOH)', 380, 128, { color: '#67e8f9', font: 'bold 11px monospace' });
        c.drawLabel(ctx, 'K2 = 1.8e-5 (CH3COOH)', 380, 212, { color: '#fde68a', font: 'bold 11px monospace' });

        const elC3 = hostEl.querySelector('#c4Val_C3');
        const elT1 = hostEl.querySelector('#c4Val_tInf1');
        const elT2 = hostEl.querySelector('#c4Val_tInf2');
        const elDpH = hostEl.querySelector('#c4Val_dpH');
        if (elC3) elC3.textContent = `${Csel.toFixed(3)} mol/L`;
        if (elT1) elT1.textContent = `${tau1Pct.toFixed(1)}% (pH ${ph1.toFixed(2)})`;
        if (elT2) elT2.textContent = `${tau2Pct.toFixed(1)}% (pH ${ph2.toFixed(2)})`;
        if (elDpH) elDpH.textContent = (ph2 - ph1).toFixed(2);
      } else {
        const pr = TRANS_PRESETS.find((x) => x.id === state.transId) || TRANS_PRESETS[0];
        const k0 = state.baseK0;
        const kNew = pr.factor(k0);
        const logK = Math.log10(kNew);

        sliderVal.textContent = `K0 = ${k0.toFixed(2)}`;
        statusEq.textContent = `${pr.labelFr}  |  K_new = ${kNew.toFixed(2)}`;

        ctx.save();
        // Top Reaction Header Card
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(34, 24, 612, 74);
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 1.6;
        ctx.strokeRect(34, 24, 612, 74);
        c.drawLabel(ctx, `Equation : ${pr.labelFr}`, 54, 54, { color: '#e9d5ff', font: 'bold 13px monospace' });
        c.drawLabel(ctx, `Regle : (s), (l) et H2O(l) => 1  |  (aq) en mol/L`, 54, 82, { color: '#6ee7b7', font: 'bold 11px monospace' });

        // Logarithmic Bar Chart comparing log10(K0) vs log10(Knew) centered on log10=0
        const midX = 340;
        const scalePx = 92; // +-2 units fits comfortably inside 340 +/- 184
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(midX, 130);
        ctx.lineTo(midX, 326);
        ctx.stroke();
        c.drawLabel(ctx, 'K = 1 (log K = 0)', midX - 58, 348, { color: '#94a3b8', font: 'bold 10.5px monospace' });

        // Bar 1: K0
        const w0 = Math.max(-220, Math.min(220, Math.log10(k0) * scalePx));
        ctx.fillStyle = 'rgba(34,211,238,0.82)';
        ctx.fillRect(w0 >= 0 ? midX : midX + w0, 152, Math.abs(w0), 48);
        c.drawLabel(ctx, `Original K0 = ${k0.toFixed(2)}`, 44, 180, { color: '#67e8f9', font: 'bold 11.5px monospace' });

        // Bar 2: K_new
        const wNew = Math.max(-220, Math.min(220, logK * scalePx));
        ctx.fillStyle = 'rgba(168,85,247,0.85)';
        ctx.fillRect(wNew >= 0 ? midX : midX + wNew, 232, Math.abs(wNew), 48);
        c.drawLabel(ctx, `Transforme K' = ${kNew.toFixed(2)}`, 44, 260, { color: '#d8b4fe', font: 'bold 11.5px monospace' });
        ctx.restore();

        const elK0 = hostEl.querySelector('#c4Val_K0');
        const elKp = hostEl.querySelector('#c4Val_Kp');
        const elLog = hostEl.querySelector('#c4Val_logK');
        if (elK0) elK0.textContent = k0.toFixed(2);
        if (elKp) elKp.textContent = kNew.toFixed(2);
        if (elLog) elLog.textContent = logK.toFixed(2);
      }
    }

    function setMode(modeId) {
      stopAnim();
      state.mode = modeId;
      syncModeButtons();
      if (modeId === 'quotient') {
        slider.min = 0; slider.max = 100; slider.step = 1; slider.value = state.tSec.toFixed(0);
      } else if (modeId === 'conductance') {
        slider.min = 0.002; slider.max = 0.050; slider.step = 0.001; slider.value = state.concCond.toFixed(3);
      } else if (modeId === 'influence') {
        slider.min = 0.001; slider.max = 0.050; slider.step = 0.001; slider.value = state.concInf.toFixed(3);
      } else {
        slider.min = 0.5; slider.max = 10.0; slider.step = 0.1; slider.value = state.baseK0.toFixed(1);
      }
      syncChrome();
      drawFrame();
    }

    hostEl.addEventListener('click', (e) => {
      const mBtn = e.target.closest('[data-c4-mode]');
      if (mBtn) return setMode(mBtn.dataset.c4Mode);
      const tBtn = e.target.closest('[data-c4-temp]');
      if (tBtn) {
        state.tempCode = tBtn.dataset.c4Temp;
        syncChrome();
        return drawFrame();
      }
      const aBtn = e.target.closest('[data-c4-acid]');
      if (aBtn) {
        state.acidIdx = Number(aBtn.dataset.c4Acid);
        syncChrome();
        return drawFrame();
      }
      const cellBtn = e.target.closest('[data-c4-cell]');
      if (cellBtn) {
        state.cellK = state.cellK < 0.011 ? 0.0125 : 0.010;
        syncChrome();
        return drawFrame();
      }
      const trBtn = e.target.closest('[data-c4-trans]');
      if (trBtn) {
        state.transId = trBtn.dataset.c4Trans;
        syncChrome();
        return drawFrame();
      }
    });

    playBtn.addEventListener('click', () => {
      if (state.playing) return stopAnim();
      state.playing = true;
      state.lastTs = 0;
      playBtn.textContent = '⏸ إيقاف مؤقت';
      playBtn.className = 'px-3.5 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 text-xs font-extrabold transition';
      state.rafId = global.requestAnimationFrame(stepAnim);
    });

    resetBtn.addEventListener('click', () => {
      state.tempCode = '25';
      state.tSec = 65;
      state.acidIdx = 0;
      state.cellK = 0.010;
      state.concCond = 0.010;
      state.concInf = 0.010;
      state.transId = 'base';
      state.baseK0 = 4.0;
      setMode(state.mode);
    });

    slider.addEventListener('input', () => {
      stopAnim();
      const v = parseFloat(slider.value);
      if (state.mode === 'quotient') state.tSec = v;
      else if (state.mode === 'conductance') state.concCond = v;
      else if (state.mode === 'influence') state.concInf = v;
      else state.baseK0 = v;
      drawFrame();
    });

    hostEl._c4SimApi = { setMode, drawFrame };
    api.renderMath(hostEl);
    setMode('quotient');
  }

  global.EulerAcademy.registerSimulator('chem-04', { mount });
})(window);
