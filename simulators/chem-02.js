/**
 * Euler Academy — Interactive 4-Mode Chemical Kinetics & Monitoring Laboratory for Chemistry Lesson 02
 * (1. Manométrie P(t), 2. Conductimétrie σ(t), 3. Vitesse volumique & Tangente mobile, 4. Facteurs cinétiques & t₁/₂)
 */
(function (global) {
  'use strict';

  const C = () => global.EulerCanvas;

  const MODES_META = [
    { id: 'manometry', label: '1. تتبع الضغط $P(t)$', activeCls: 'bg-amber-500 text-slate-950 shadow' },
    { id: 'conductimetry', label: '2. تتبع الموصلية $\\sigma(t)$', activeCls: 'bg-cyan-500 text-slate-950 shadow' },
    { id: 'tangent-speed', label: '3. السرعة الحجمية والمماس $v(t)$', activeCls: 'bg-emerald-500 text-slate-950 shadow' },
    { id: 'kinetic-compare', label: '4. مقارنة $t_{1/2}$ والعوامل الحركية', activeCls: 'bg-purple-500 text-slate-950 shadow' }
  ];

  function metricCard(labelHtml, valId, initVal, valueCls = 'text-emerald-300') {
    return `
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span class="text-slate-400 block mb-1">${labelHtml}</span>
        <span id="${valId}" class="font-mono font-bold ${valueCls} text-sm" dir="ltr">${initVal}</span>
      </div>
    `;
  }

  function mount(hostEl, api) {
    const state = {
      mode: 'manometry',
      t: 3.0,            // min [0 .. 12]
      tempK: 300,        // K [280 .. 340] for manometry
      acidC: 0.20,       // mol/L [0.10 .. 0.40] for manometry
      condKind: 'saponification', // 'saponification' (decreasing sigma) vs 'hydrolysis' (increasing)
      compareTempC: 45,  // °C [15 .. 65] for kinetic-compare
      dilutedMode: false,// true = diluted test curve vs ref
      playing: false,
      lastTs: 0,
      rafId: null
    };

    hostEl.innerHTML = `
      <div class="glass rounded-3xl p-4 sm:p-8 border border-emerald-500/30">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                المختبر البصري التفاعلي • الكيمياء الدرس 02
              </span>
              <span class="text-xs text-slate-400 font-mono">Simulateur de Suivi Temporel &amp; Vitesse (4 Modes)</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">
              مختبر التتبع الزمني للتفاعل ($P(t), \\sigma(t)$، المماس، السرعة الحجمية $v(t)$، و $t_{1/2}$)
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800">
            ${MODES_META.map((m) => `
              <button type="button" data-c2-mode="${m.id}" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Mode 2 Conductimetry Sub-buttons -->
        <div id="c2CondSub" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80">
          <span class="text-xs text-slate-400 font-semibold px-2">نوع التفاعل المتبع بالموصلية $\\sigma(t)$:</span>
          <button type="button" data-c2-cond="saponification" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 transition">
            1) التصبن: تناقص $\\sigma(t)$ ($\\lambda_{\\text{HO}^-} &gt; \\lambda_{\\text{CH}_3\\text{COO}^-}$)
          </button>
          <button type="button" data-c2-cond="hydrolysis" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">
            2) الحلمأة: تزايد $\\sigma(t)$ من $0$ (تكون $\\text{H}_3\\text{O}^+ + \\text{Cl}^-$)
          </button>
        </div>

        <!-- Mode 4 Kinetic Comparison Sub-buttons -->
        <div id="c2CompSub" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80">
          <span class="text-xs text-slate-400 font-semibold px-2">تأثير التخفيف بالماء المقطر:</span>
          <button type="button" data-c2-dilute="no" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-500 text-slate-950 transition">
            نفس التركيز ($V_S = 100\\text{ mL}$)
          </button>
          <button type="button" data-c2-dilute="yes" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">
            إضافة ماء مقطر ($V_S' = 200\\text{ mL}$ — تخفيف للنصف)
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div class="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-3.5 sm:p-4">
            <div id="chem2SimLegend" class="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-3 gap-2"></div>
            <canvas id="chem2LabCanvas" width="680" height="390" class="w-full h-auto rounded-xl bg-[#050811] border border-slate-800/90"></canvas>

            <div class="mt-4 bg-slate-900/90 p-3.5 sm:p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                <div class="flex items-center gap-2">
                  <button type="button" id="chem2PlayBtn" class="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition">
                    ▶ تشغيل الزمن $t$
                  </button>
                  <button type="button" id="chem2ResetBtn" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition">
                    ↺ إعادة ($t = 0$)
                  </button>
                </div>
                <span id="chem2ProbeLabel" class="text-[11px] text-slate-400 font-mono" dir="ltr">t = 3.00 min</span>
              </div>

              <!-- Shared Time Slider -->
              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-slate-300">اللحظة الزمنية $t$:</span>
                  <span id="c2TimeDisplay" class="font-mono text-emerald-300" dir="ltr">t = 3.00 min</span>
                </div>
                <input id="c2TimeSlider" type="range" min="0" max="12" step="0.1" value="3.0" class="w-full accent-emerald-400 cursor-pointer" />
              </div>

              <!-- Mode 1 Sliders: Temp K & Acid Conc -->
              <div id="c2ManoSliders" class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">درجة الحرارة المطلقة $T$:</span>
                    <span id="c2TempKDisplay" class="font-mono text-amber-300" dir="ltr">T = 300 K</span>
                  </div>
                  <input id="c2TempKSlider" type="range" min="280" max="340" step="5" value="300" class="w-full accent-amber-400 cursor-pointer" />
                </div>
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">تركيز الحمض $[\\text{H}_3\\text{O}^+]_0$:</span>
                    <span id="c2AcidDisplay" class="font-mono text-cyan-300" dir="ltr">C = 0.20 mol/L</span>
                  </div>
                  <input id="c2AcidSlider" type="range" min="0.10" max="0.40" step="0.05" value="0.20" class="w-full accent-cyan-400 cursor-pointer" />
                </div>
              </div>

              <!-- Mode 4 Slider: Compare Temperature °C -->
              <div id="c2CompSliders" class="hidden pt-2 border-t border-slate-800/80">
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-slate-300">درجة حرارة التجربة المختبرة $\\theta_2$ (المرجعية $20^\\circ\\text{C}$):</span>
                  <span id="c2TempCDisplay" class="font-mono text-purple-300" dir="ltr">θ₂ = 45 °C</span>
                </div>
                <input id="c2TempCSlider" type="range" min="15" max="65" step="5" value="45" class="w-full accent-purple-400 cursor-pointer" />
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-4">
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5">
              <h4 class="text-sm font-bold text-emerald-400 mb-3">🧪 التحليل الحركي والمبياني اللحظي</h4>
              <div id="chem2MetricsGrid" class="grid grid-cols-2 gap-3 text-xs mb-4"></div>
              <div id="chem2StatusBanner" class="mb-3"></div>
              <div id="chem2RuleBox" class="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    const canvas = hostEl.querySelector('#chem2LabCanvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const condSub = hostEl.querySelector('#c2CondSub');
    const compSub = hostEl.querySelector('#c2CompSub');
    const manoSliders = hostEl.querySelector('#c2ManoSliders');
    const compSliders = hostEl.querySelector('#c2CompSliders');

    const legend = hostEl.querySelector('#chem2SimLegend');
    const metricsGrid = hostEl.querySelector('#chem2MetricsGrid');
    const statusBanner = hostEl.querySelector('#chem2StatusBanner');
    const ruleBox = hostEl.querySelector('#chem2RuleBox');
    const probeLabel = hostEl.querySelector('#chem2ProbeLabel');

    const timeSlider = hostEl.querySelector('#c2TimeSlider');
    const tempKSlider = hostEl.querySelector('#c2TempKSlider');
    const acidSlider = hostEl.querySelector('#c2AcidSlider');
    const tempCSlider = hostEl.querySelector('#c2TempCSlider');

    const timeDisplay = hostEl.querySelector('#c2TimeDisplay');
    const tempKDisplay = hostEl.querySelector('#c2TempKDisplay');
    const acidDisplay = hostEl.querySelector('#c2AcidDisplay');
    const tempCDisplay = hostEl.querySelector('#c2TempCDisplay');
    const playBtn = hostEl.querySelector('#chem2PlayBtn');
    const resetBtn = hostEl.querySelector('#chem2ResetBtn');

    function syncStaticChrome() {
      if (state.mode === 'manometry') {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-amber-400 inline-block"></span> منحنى الضغط $P(t)$ [hPa]</span>
            <span class="flex items-center gap-1.5"><span class="w-3 border-t border-dashed border-purple-400 inline-block"></span> $P(t_{1/2}) = \\frac{P_0 + P_{\\max}}{2}$</span>
          </div>
          <span class="text-amber-300 font-semibold">$P(t) - P_0 = \\frac{n_{\\text{gaz}} R T}{V_{\\text{gaz}}}$</span>
        `;
        metricsGrid.innerHTML = [
          metricCard('الضغط المقاس $P(t)$:', 'c2Val_P', '1200 hPa', 'text-amber-300'),
          metricCard('فرْق الضغط $\\Delta P = P - P_0$:', 'c2Val_dP', '+187 hPa', 'text-cyan-300'),
          metricCard('التقدم $x(t)$ ($x_{\\max}=5\\text{ mmol}$):', 'c2Val_x', '2.50 mmol', 'text-emerald-400'),
          metricCard('السرعة الحجمية $v(t)$:', 'c2Val_v', '4.10 mmol/L/min', 'text-rose-300')
        ].join('');
        statusBanner.innerHTML = `
          <div id="c2BannerInner" class="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-2">
            <span>🌡️</span> <span>ينطلق $P(t)$ من الضغط الجوي $P_0 = 1013\\text{ hPa}$ لأن الحوجلة مملوءة بالهواء عند $t=0$.</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>ملاحظات التتبع بقياس الضغط (الامتحان الوطني):</b><br/>
          • $V_{\\text{gaz}} = V_{\\text{flacon}} - V_S = 250\\text{ mL}$ (حجم الهواء وفوق المحلول فقط).<br/>
          • لاحظ كيف يتسارع صعود $P(t)$ إذا رفعت $T$ أو تركيز الحمض $C$، وكيف يرتفع $P_{\\max}$ قليلاً عند زيادة $T$ وفق $PV = nRT$!<br/>
          • $P(t_{1/2}) = \\frac{P_0 + P_{\\max}}{2}$ دوماً، وليس $\\frac{P_{\\max}}{2}$.
        `;
      } else if (state.mode === 'conductimetry') {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-cyan-400 inline-block"></span> الموصلية $\\sigma(t)$ [mS/m]</span>
            <span class="flex items-center gap-1.5"><span class="w-3 border-t border-dashed border-purple-400 inline-block"></span> $\\sigma(t_{1/2}) = \\frac{\\sigma_0 + \\sigma_f}{2}$</span>
          </div>
          <span class="text-cyan-300 font-semibold">$\\sigma(t) = \\sum \\lambda_i [X_i]_t$</span>
        `;
        metricsGrid.innerHTML = [
          metricCard('الموصلية اللحظية $\\sigma(t)$:', 'c2Val_sig', '170 mS/m', 'text-cyan-300'),
          metricCard('الموصلية $\\sigma_0 \\to \\sigma_f$:', 'c2Val_s0sf', '250 → 90 mS/m', 'text-amber-300'),
          metricCard('التقدم المستخرج $x(t)$:', 'c2Val_cx', '0.50 mmol', 'text-emerald-400'),
          metricCard('زمن نصف التفاعل $t_{1/2}$:', 'c2Val_cthalf', '2.8 min', 'text-purple-300')
        ].join('');
        statusBanner.innerHTML = `
          <div id="c2CondBannerInner" class="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-2">
            <span>⚡</span> <span>في التصبن تتناقص $\\sigma(t)$ لأن $\\text{HO}^-$ ($\\lambda=20$) تُعوَّض بأيونات $\\text{CH}_3\\text{COO}^-$ ($\\lambda=4$) الأضعف توصيلاً.</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>قاعدة الوحدات وحذف الأيونات المتفرجة:</b><br/>
          • تدخل $\\text{Na}^+$ في $\\sigma_0$ و $\\sigma(t)$؛ ويختفي أثرها فقط في الفرق $\\sigma(t) - \\sigma_0$.<br/>
          • النسبة المئوية للتقدم صحيحة دائماً أكان المنحنى متزايداً أم متناقصاً: $x(t) = x_{\\max}\\frac{\\sigma(t) - \\sigma_0}{\\sigma_f - \\sigma_0}$.<br/>
          • بدّل إلى <b>الحلمأة</b> لملاحظة صعود $\\sigma(t)$ من الصفر عندما تنتقل من جزيئات متعادلة إلى أيونات $\\text{H}_3\\text{O}^+ + \\text{Cl}^-$!
        `;
      } else if (state.mode === 'tangent-speed') {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-emerald-400 inline-block"></span> فوق: التقدم $x(t)$ والمماس</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-rose-400 inline-block"></span> تحت: السرعة الحجمية $v(t)$</span>
          </div>
          <span class="text-emerald-300 font-semibold">$v(t) = \\frac{1}{V_S}\\frac{dx}{dt}$</span>
        `;
        metricsGrid.innerHTML = [
          metricCard('التقدم $x(t)$ ($x_{\\max}=4\\text{ mmol}$):', 'c2Val_tx', '2.11 mmol', 'text-cyan-300'),
          metricCard('ميل المماس $\\frac{dx}{dt}$:', 'c2Val_slope', '0.47 mmol/min', 'text-amber-300'),
          metricCard('السرعة الحجمية $v(t)$:', 'c2Val_tv', '2.36 mmol/L/min', 'text-emerald-400'),
          metricCard('السرعة البدئية القصوى $v_0$:', 'c2Val_tv0', '5.00 mmol/L/min', 'text-rose-300')
        ].join('');
        statusBanner.innerHTML = `
          <div class="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2">
            <span>📐</span> <span>حرّك الزمن $t$ وشاهد تناقص ميل المماس وبالتالي تناقص السرعة $v(t)$ نحو الصفر!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>لماذا تنخفض السرعة الحجمية $v(t)$ مع مرور الزمن؟</b><br/>
          • عند $t = 0$: تراكيز المتفاعلات أعظمية $\\implies$ تواتر التصادمات الفعالة أعظمي $\\implies$ $v(0) = v_{\\max}$.<br/>
          • أثناء التفاعل ($t &gt; 0$): يستهلك المتفاعلان فتقل تراكيزهما $\\implies$ يضعف ميل المماس $\\frac{dx}{dt}$ تدريجياً.<br/>
          • عند نهاية التفاعل ($t \\ge t_f$): يُستنفد المتفاعل المحد ويصبح المماس أفقياً ($v(t_f) = 0$).
        `;
      } else {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-cyan-400 inline-block"></span> المرجعية ($20^\\circ\\text{C}$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-purple-400 inline-block"></span> التجربة المعدّلة ($\\theta_2$)</span>
          </div>
          <span class="text-purple-300 font-semibold">ثبات $x_{\\max}$ مقابل تغيّر $t_{1/2}$ و $v_0$</span>
        `;
        metricsGrid.innerHTML = [
          metricCard('$v_{0,1}$ (المرجعية $20^\\circ\\text{C}$):', 'c2Val_cv1', '5.00 mmol/L/min', 'text-cyan-300'),
          metricCard('$v_{0,2}$ (المعدّلة):', 'c2Val_cv2', '10.6 mmol/L/min', 'text-purple-300'),
          metricCard('زمن نصف التفاعل $t_{1/2}^{(1)}$:', 'c2Val_ct1', '2.77 min', 'text-cyan-300'),
          metricCard('زمن نصف التفاعل $t_{1/2}^{(2)}$:', 'c2Val_ct2', '1.31 min', 'text-emerald-400')
        ].join('');
        statusBanner.innerHTML = `
          <div id="c2CompBannerInner" class="p-3 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-2">
            <span>⚡</span> <span>رفع درجة الحرارة يُسرّع الوصول إلى نفس $x_{\\max}$ (أصغر $t_{1/2}$ وأكبر $v_0$).</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>قاعدة المقارنة القياسية في فروض الكيمياء:</b><br/>
          • كلما كان التفاعل أسرع، كان المماس عند $t=0$ <b>أكثر انحداراً</b> ($v_0$ أكبر) وكان <b>$t_{1/2}$ أصغر</b>.<br/>
          • <b>انتبه عند التخفيف:</b> إضافة الماء المقطر إلى الخليط لا يغيّر كميات المادة $n_0$ بل يُنقص التراكيز $\\implies$ يزداد $t_{1/2}$ وتقل $v_0$ مع ثبات $x_{\\max}$!
        `;
      }

      api.renderMath(legend);
      api.renderMath(metricsGrid);
      api.renderMath(statusBanner);
      api.renderMath(ruleBox);
    }

    function drawFrame() {
      const c = C();
      ctx.clearRect(0, 0, W, H);
      timeDisplay.textContent = `t = ${state.t.toFixed(2)} min`;
      tempKDisplay.textContent = `T = ${state.tempK} K`;
      acidDisplay.textContent = `C = ${state.acidC.toFixed(2)} mol/L`;
      tempCDisplay.textContent = `θ₂ = ${state.compareTempC} °C`;
      probeLabel.textContent = `t = ${state.t.toFixed(2)} min`;

      if (state.mode === 'manometry') {
        const P0 = 1013; // hPa
        const xMax = 5.0; // mmol
        const VgazL = 0.250; // 250 mL in L -> kPa * L = mmol * R * T / 1e3 -> in hPa: dP(hPa) = (x_mmol * 8.31 * T) / (250 * 0.1)? Let's verify:
        // x [mol] * 8.31 * T / (2.5e-4 m^3) [Pa] = (x_mmol*1e-3 * 8.31 * T) / 2.5e-4 = 4 * x_mmol * 8.31 * T [Pa] = 0.04 * 8.31 * T * x_mmol [hPa]
        const factorHpaPerMmol = 0.04 * 8.31 * state.tempK; // At T=300K, xMax=5 -> dPmax = 0.04*8.31*300*5 = 498.6 hPa!
        const dPmax = factorHpaPerMmol * xMax;
        const Pmax = P0 + dPmax;
        const rateK = 0.35 * (state.acidC / 0.20) * Math.exp((state.tempK - 300) / 35);
        const xVal = xMax * (1 - Math.exp(-rateK * state.t));
        const dP = factorHpaPerMmol * xVal;
        const PVal = P0 + dP;
        const dxDt = xMax * rateK * Math.exp(-rateK * state.t); // mmol/min
        const vVal = dxDt / 0.050; // V_S = 50 mL = 0.050 L -> mmol/L/min

        // Left: closed flask + bubbles + manometer reading
        ctx.save();
        ctx.fillStyle = '#0f172a';
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(24, 150, 150, 175, 16);
        ctx.fill();
        ctx.stroke();

        // Liquid inside flask (50 mL)
        ctx.fillStyle = 'rgba(34, 211, 238, 0.18)';
        ctx.beginPath();
        ctx.roundRect(27, 250, 144, 72, [0, 0, 14, 14]);
        ctx.fill();

        // Gas tube + manometer dial at top left
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(99, 150);
        ctx.lineTo(99, 98);
        ctx.stroke();

        ctx.fillStyle = '#030712';
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.arc(99, 64, 34, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Needle proportional to dP
        const angle = -Math.PI * 0.8 + Math.min(1, dP / 620) * Math.PI * 1.4;
        ctx.strokeStyle = '#fb7185';
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(99, 64);
        ctx.lineTo(99 + 24 * Math.cos(angle), 64 + 24 * Math.sin(angle));
        ctx.stroke();
        c.drawLabel(ctx, `${Math.round(PVal)} hPa`, 65, 118, { color: '#fde68a', font: 'bold 11px monospace' });

        // Zn granule & rising H2 bubbles proportional to vVal
        const znRatio = Math.max(0.15, 1 - 0.5 * (xVal / xMax));
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(80, 308, Math.round(38 * znRatio), 8);
        const numBubbles = Math.min(12, Math.round(vVal * 0.4 + 1));
        ctx.fillStyle = 'rgba(251, 191, 36, 0.75)';
        for (let i = 0; i < numBubbles; i++) {
          const bx = 45 + ((i * 29 + Math.round(state.t * 30)) % 108);
          const by = 298 - ((i * 41 + Math.round(state.t * 85)) % 135);
          ctx.beginPath();
          ctx.arc(bx, by, 3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        // Right subplot: P(t) curve
        const plane = c.createPlane(W, H, { originX: 250, originY: 326, scaleX: 33, scaleY: 0.38 });
        // Shift y origin so P0=1013 is near y=296 and Pmax~1650 fits cleanly above!
        const pOriginY = 326 + 1013 * 0.36; //Wait: use custom transformed function P - 900!
        const pPlane = c.createPlane(W, H, { originX: 250, originY: 328, scaleX: 32, scaleY: 0.38 });
        // P - 950 in [0..700] -> pixel height 266px -> y in [62..328]!
        c.drawGrid(ctx, pPlane, { xMin: 0, xMax: 12, xStep: 2, yMin: 0, yMax: 700, yStep: 100 });
        c.drawAxes(ctx, pPlane);
        c.drawLabel(ctx, 'P(t) [hPa] (P0=1013)', 256, 36, { color: '#fde68a', font: 'bold 11.5px monospace' });
        c.drawLabel(ctx, 't (min)', W - 54, pPlane.originY + 18, { color: '#94a3b8', font: '10.5px monospace' });

        const pRelFn = (tt) => (P0 + dPmax * (1 - Math.exp(-rateK * tt))) - 950;
        const yP0 = P0 - 950;
        const yPmax = Pmax - 950;
        const yPhalf = 0.5 * (yP0 + yPmax);

        c.drawLine(ctx, pPlane, 0, yPmax, 12, yPmax, { color: '#34d399', dash: [4, 4] });
        c.drawLabel(ctx, `P_max=${Math.round(Pmax)}`, 196, pPlane.toPxY(yPmax) + 4, { color: '#6ee7b7', font: '10px monospace' });
        c.drawLine(ctx, pPlane, 0, yPhalf, 12, yPhalf, { color: '#c084fc', dash: [3, 3] });
        c.drawLabel(ctx, `P(t1/2)=${Math.round(0.5 * (P0 + Pmax))}`, 178, pPlane.toPxY(yPhalf) + 4, { color: '#d8b4fe', font: '10px monospace' });
        c.drawLabel(ctx, `P0=1013`, 196, pPlane.toPxY(yP0) + 4, { color: '#94a3b8', font: '10px monospace' });

        c.plotCurve(ctx, pPlane, pRelFn, 0, 12, { color: '#fbbf24', lineWidth: 3 });
        c.drawPoint(ctx, pPlane, state.t, PVal - 950, { fill: '#fb7185', radius: 6 });

        const elP = hostEl.querySelector('#c2Val_P');
        const elDP = hostEl.querySelector('#c2Val_dP');
        const elX = hostEl.querySelector('#c2Val_x');
        const elV = hostEl.querySelector('#c2Val_v');
        if (elP) elP.textContent = `${PVal.toFixed(0)} hPa`;
        if (elDP) elDP.textContent = `+${dP.toFixed(0)} hPa`;
        if (elX) elX.textContent = `${xVal.toFixed(2)} mmol`;
        if (elV) elV.textContent = `${vVal.toFixed(2)} mmol/L/min`;
      } else if (state.mode === 'conductimetry') {
        const isSapon = state.condKind === 'saponification';
        const sig0 = isSapon ? 250.0 : 0.0; // mS/m
        const sigF = isSapon ? 90.0 : 426.0;
        const xMax = isSapon ? 1.0 : 10.0; // mmol
        const rateK = isSapon ? 0.247 : 0.31; // t1/2 ~ 2.8 min or 2.2 min
        const tHalf = Math.log(2) / rateK;
        const sigFn = (tt) => sig0 + (sigF - sig0) * (1 - Math.exp(-rateK * tt));
        const sigNow = sigFn(state.t);
        const xNow = xMax * ((sigNow - sig0) / (sigF - sig0));
        const sigHalf = 0.5 * (sig0 + sigF);

        const plane = c.createPlane(W, H, { originX: 74, originY: 326, scaleX: 46, scaleY: 0.56 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 12, xStep: 2, yMin: 0, yMax: 450, yStep: 50 });
        c.drawAxes(ctx, plane);
        c.drawLabel(ctx, `sigma(t) [mS/m] (${isSapon ? 'Saponification decroissante' : 'Hydrolyse croissante'})`, 78, 28, { color: '#67e8f9', font: 'bold 11.5px monospace' });
        c.drawLabel(ctx, 't (min)', W - 56, plane.originY + 18, { color: '#94a3b8', font: '10.5px monospace' });

        // Horizontal references sig0, sigF, sigHalf
        c.drawLine(ctx, plane, 0, sigF, 12, sigF, { color: '#34d399', dash: [5, 4] });
        c.drawLabel(ctx, `sig_f=${sigF}`, 10, plane.toPxY(sigF) + 4, { color: '#6ee7b7', font: '10px monospace' });
        c.drawLine(ctx, plane, 0, sigHalf, tHalf, sigHalf, { color: '#c084fc', dash: [4, 3] });
        c.drawLine(ctx, plane, tHalf, sigHalf, tHalf, 0, { color: '#c084fc', dash: [4, 3] });
        c.drawLabel(ctx, `t1/2=${tHalf.toFixed(1)}`, plane.toPxX(tHalf) - 22, plane.originY + 18, { color: '#d8b4fe', font: 'bold 10.5px monospace' });
        c.drawLabel(ctx, `mid=${sigHalf}`, 10, plane.toPxY(sigHalf) + 4, { color: '#d8b4fe', font: '10px monospace' });

        c.plotCurve(ctx, plane, sigFn, 0, 12, { color: '#22d3ee', lineWidth: 3.2 });
        c.drawPoint(ctx, plane, state.t, sigNow, { fill: '#fb7185', radius: 6.5 });
        c.drawProjections(ctx, plane, state.t, sigNow, { color: '#fb7185' });

        const elSig = hostEl.querySelector('#c2Val_sig');
        const elS0 = hostEl.querySelector('#c2Val_s0sf');
        const elX = hostEl.querySelector('#c2Val_cx');
        const elTh = hostEl.querySelector('#c2Val_cthalf');
        const condBan = hostEl.querySelector('#c2CondBannerInner');
        if (elSig) elSig.textContent = `${sigNow.toFixed(1)} mS/m`;
        if (elS0) elS0.textContent = `${sig0} → ${sigF} mS/m`;
        if (elX) elX.textContent = `${xNow.toFixed(2)} mmol`;
        if (elTh) elTh.textContent = `${tHalf.toFixed(2)} min`;
        if (condBan) {
          condBan.textContent = isSapon
            ? '⚡ التصبن: σ تتناقص من 250 إلى 90 mS/m — عند t₁/₂ نقرأ منتصفهما (170 mS/m)!'
            : '⚡ الحلمأة: σ تتزايد من 0 إلى 426 mS/m بفضل ظهور أيونات H₃O⁺ + Cl⁻!';
        }
      } else if (state.mode === 'tangent-speed') {
        const xMax = 4.0; // mmol
        const VsL = 0.200; // L
        const tau = 4.0; // min -> x(t) = 4*(1 - exp(-t/4))
        const xFn = (tt) => xMax * (1 - Math.exp(-tt / tau));
        const dxDtFn = (tt) => (xMax / tau) * Math.exp(-tt / tau);
        const xNow = xFn(state.t);
        const slopeNow = dxDtFn(state.t);
        const vNow = slopeNow / VsL; // mmol/L/min
        const v0 = (xMax / tau) / VsL; // 5.00

        // Top subplot: x(t) + moving tangent
        const topPlane = c.createPlane(W, H, { originX: 70, originY: 186, scaleX: 46, scaleY: 36 });
        c.drawGrid(ctx, topPlane, { xMin: 0, xMax: 12, xStep: 2, yMin: 0, yMax: 4.5, yStep: 1 });
        c.drawAxes(ctx, topPlane);
        c.drawLabel(ctx, 'x(t) [mmol] & Tangente mobile', 74, 20, { color: '#34d399', font: 'bold 11.5px monospace' });
        c.drawLine(ctx, topPlane, 0, xMax, 12, xMax, { color: '#334155', dash: [4, 4] });
        c.drawLabel(ctx, 'x_max=4.0', 6, topPlane.toPxY(xMax) + 4, { color: '#94a3b8', font: '10px monospace' });

        c.plotCurve(ctx, topPlane, xFn, 0, 12, { color: '#34d399', lineWidth: 3 });

        // Moving tangent clamped safely inside [t-2.4, t+2.4] and clipped above originY
        const tLeft = Math.max(0, state.t - 2.4);
        const tRight = Math.min(12, state.t + 2.8);
        const xLeft = Math.max(0, Math.min(4.6, xNow + slopeNow * (tLeft - state.t)));
        const xRight = Math.max(0, Math.min(4.6, xNow + slopeNow * (tRight - state.t)));
        c.drawLine(ctx, topPlane, tLeft, xLeft, tRight, xRight, { color: '#fbbf24', lineWidth: 2.2 });
        c.drawPoint(ctx, topPlane, state.t, xNow, { fill: '#fb7185', radius: 6 });

        // Divider
        ctx.save();
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(16, 214);
        ctx.lineTo(W - 16, 214);
        ctx.stroke();
        ctx.restore();

        // Bottom subplot: v(t) decreasing curve [mmol/L/min]
        const botPlane = c.createPlane(W, H, { originX: 70, originY: 356, scaleX: 46, scaleY: 21 });
        c.drawLine(ctx, botPlane, 0, 0, 12, 0, { color: '#475569', lineWidth: 1.5 });
        c.drawLine(ctx, botPlane, 0, 0, 0, 5.5, { color: '#475569', lineWidth: 1.5 });
        c.drawLabel(ctx, 'v(t) = (1/V_S)(dx/dt) [mmol/L/min]', 74, 232, { color: '#fda4af', font: 'bold 11.5px monospace' });
        c.drawLabel(ctx, 't (min)', W - 56, botPlane.originY + 18, { color: '#94a3b8', font: '10.5px monospace' });
        c.plotCurve(ctx, botPlane, (tt) => dxDtFn(tt) / VsL, 0, 12, { color: '#fb7185', lineWidth: 2.8 });
        c.drawPoint(ctx, botPlane, state.t, vNow, { fill: '#fbbf24', radius: 5.5 });

        const elTx = hostEl.querySelector('#c2Val_tx');
        const elSl = hostEl.querySelector('#c2Val_slope');
        const elTv = hostEl.querySelector('#c2Val_tv');
        const elTv0 = hostEl.querySelector('#c2Val_tv0');
        if (elTx) elTx.textContent = `${xNow.toFixed(2)} mmol`;
        if (elSl) elSl.textContent = `${slopeNow.toFixed(2)} mmol/min`;
        if (elTv) elTv.textContent = `${vNow.toFixed(2)} mmol/L/min`;
        if (elTv0) elTv0.textContent = `${v0.toFixed(2)} mmol/L/min`;
      } else {
        // Mode 4: Kinetic Comparison (t_1/2 & v0)
        const xMax = 4.0;
        const Vs1 = 0.200; // L
        const k1 = 0.25; // t_1/2 = 2.77 min
        const tempFactor = Math.exp((state.compareTempC - 20) / 30);
        const dilFactor = state.dilutedMode ? 0.50 : 1.0;
        const k2 = k1 * tempFactor * dilFactor;
        const tHalf1 = Math.log(2) / k1;
        const tHalf2 = Math.log(2) / k2;
        const v01 = (xMax * k1) / Vs1; // 5.00
        const v02 = (xMax * k2) / Vs1;

        const plane = c.createPlane(W, H, { originX: 74, originY: 326, scaleX: 46, scaleY: 56 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 12, xStep: 2, yMin: 0, yMax: 4.5, yStep: 1 });
        c.drawAxes(ctx, plane);
        c.drawLabel(ctx, 'Comparaison x(t) : Exp (1) Ref vs Exp (2) Test', 78, 28, { color: '#d8b4fe', font: 'bold 11.5px monospace' });
        c.drawLabel(ctx, 't (min)', W - 56, plane.originY + 18, { color: '#94a3b8', font: '10.5px monospace' });

        c.drawLine(ctx, plane, 0, xMax, 12, xMax, { color: '#34d399', dash: [5, 4] });
        c.drawLabel(ctx, 'x_max=4.0', 10, plane.toPxY(xMax) + 4, { color: '#6ee7b7', font: '10px monospace' });
        c.drawLine(ctx, plane, 0, xMax / 2, Math.min(12, Math.max(tHalf1, tHalf2)), xMax / 2, { color: '#94a3b8', dash: [3, 3] });
        c.drawLabel(ctx, 'x_max/2', 10, plane.toPxY(xMax / 2) + 4, { color: '#cbd5e1', font: '10px monospace' });

        const fn1 = (tt) => xMax * (1 - Math.exp(-k1 * tt));
        const fn2 = (tt) => xMax * (1 - Math.exp(-k2 * tt));

        // Initial tangents up to asymptote xMax
        c.drawLine(ctx, plane, 0, 0, 1 / k1, xMax, { color: 'rgba(34, 211, 238, 0.45)', dash: [4, 4] });
        c.drawLine(ctx, plane, 0, 0, Math.min(12, 1 / k2), Math.min(4.4, Math.min(12, 1 / k2) * xMax * k2), { color: 'rgba(192, 132, 252, 0.55)', dash: [4, 4] });

        c.plotCurve(ctx, plane, fn1, 0, 12, { color: '#22d3ee', lineWidth: 2.8 });
        c.plotCurve(ctx, plane, fn2, 0, 12, { color: '#c084fc', lineWidth: 3.0 });

        if (tHalf1 <= 12) {
          c.drawLine(ctx, plane, tHalf1, xMax / 2, tHalf1, 0, { color: '#22d3ee', dash: [3, 3] });
          c.drawPoint(ctx, plane, tHalf1, xMax / 2, { fill: '#22d3ee', radius: 5 });
        }
        if (tHalf2 <= 12) {
          c.drawLine(ctx, plane, tHalf2, xMax / 2, tHalf2, 0, { color: '#c084fc', dash: [3, 3] });
          c.drawPoint(ctx, plane, tHalf2, xMax / 2, { fill: '#c084fc', radius: 5 });
        }
        c.drawPoint(ctx, plane, state.t, fn1(state.t), { fill: '#22d3ee', radius: 4.5 });
        c.drawPoint(ctx, plane, state.t, fn2(state.t), { fill: '#c084fc', radius: 4.5 });

        const elV1 = hostEl.querySelector('#c2Val_cv1');
        const elV2 = hostEl.querySelector('#c2Val_cv2');
        const elT1 = hostEl.querySelector('#c2Val_ct1');
        const elT2 = hostEl.querySelector('#c2Val_ct2');
        const compBan = hostEl.querySelector('#c2CompBannerInner');
        if (elV1) elV1.textContent = `${v01.toFixed(2)} mmol/L/min`;
        if (elV2) elV2.textContent = `${v02.toFixed(2)} mmol/L/min`;
        if (elT1) elT1.textContent = `${tHalf1.toFixed(2)} min`;
        if (elT2) elT2.textContent = `${tHalf2.toFixed(2)} min`;
        if (compBan) {
          compBan.textContent = v02 > v01 + 0.2
            ? `⚡ أسرع من المرجعية: t₁/₂ انخفض من ${tHalf1.toFixed(2)} إلى ${tHalf2.toFixed(2)} min مع بقاء x_max ثابتاً!`
            : (v02 < v01 - 0.2
              ? `⏳ أبطأ من المرجعية: t₁/₂ ارتفع إلى ${tHalf2.toFixed(2)} min مع بقاء x_max ثابتاً!`
              : '⚖️ السرعتان متطابقتان تقريباً عند هذه الإعدادات.');
        }
      }
    }

    function stopAnim() {
      state.playing = false;
      if (state.rafId) {
        cancelAnimationFrame(state.rafId);
        state.rafId = null;
      }
      playBtn.textContent = '▶ تشغيل الزمن';
    }

    function startAnim() {
      if (state.playing) return;
      if (state.t >= 11.8) state.t = 0.0;
      state.playing = true;
      playBtn.textContent = '⏸ إيقاف مؤقت';
      state.lastTs = performance.now();
      const tick = (now) => {
        if (!state.playing) return;
        const dt = Math.min(0.05, (now - state.lastTs) / 1000);
        state.lastTs = now;
        state.t += dt * 1.4;
        if (state.t >= 12.0) {
          state.t = 12.0;
          timeSlider.value = '12.0';
          drawFrame();
          stopAnim();
          return;
        }
        timeSlider.value = state.t.toFixed(1);
        drawFrame();
        state.rafId = requestAnimationFrame(tick);
      };
      state.rafId = requestAnimationFrame(tick);
    }

    function setMode(mode) {
      stopAnim();
      state.mode = mode;

      hostEl.querySelectorAll('[data-c2-mode]').forEach((btn) => {
        const meta = MODES_META.find((m) => m.id === btn.dataset.c2Mode);
        const active = btn.dataset.c2Mode === mode;
        btn.className = active
          ? `px-3 py-2 rounded-xl text-xs font-bold transition ${meta.activeCls}`
          : 'px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition';
      });

      condSub.classList.toggle('hidden', mode !== 'conductimetry');
      compSub.classList.toggle('hidden', mode !== 'kinetic-compare');
      manoSliders.classList.toggle('hidden', mode !== 'manometry');
      compSliders.classList.toggle('hidden', mode !== 'kinetic-compare');

      syncStaticChrome();
      drawFrame();
    }

    function setCondKind(kind) {
      state.condKind = kind;
      hostEl.querySelectorAll('[data-c2-cond]').forEach((btn) => {
        const active = btn.dataset.c2Cond === kind;
        btn.className = active
          ? 'px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 transition'
          : 'px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition';
      });
      drawFrame();
    }

    function setDilute(isDil) {
      state.dilutedMode = isDil;
      hostEl.querySelectorAll('[data-c2-dilute]').forEach((btn) => {
        const active = (btn.dataset.c2Dilute === 'yes') === isDil;
        btn.className = active
          ? 'px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-500 text-slate-950 transition'
          : 'px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition';
      });
      drawFrame();
    }

    hostEl.addEventListener('click', (e) => {
      const mBtn = e.target.closest('[data-c2-mode]');
      if (mBtn) return setMode(mBtn.dataset.c2Mode);
      const cBtn = e.target.closest('[data-c2-cond]');
      if (cBtn) return setCondKind(cBtn.dataset.c2Cond);
      const dBtn = e.target.closest('[data-c2-dilute]');
      if (dBtn) return setDilute(dBtn.dataset.c2Dilute === 'yes');
    });

    playBtn.addEventListener('click', () => (state.playing ? stopAnim() : startAnim()));
    resetBtn.addEventListener('click', () => {
      stopAnim();
      state.t = 0.0;
      timeSlider.value = '0.0';
      drawFrame();
    });

    timeSlider.addEventListener('input', () => {
      stopAnim();
      state.t = parseFloat(timeSlider.value);
      drawFrame();
    });
    tempKSlider.addEventListener('input', () => {
      state.tempK = parseInt(tempKSlider.value, 10);
      drawFrame();
    });
    acidSlider.addEventListener('input', () => {
      state.acidC = parseFloat(acidSlider.value);
      drawFrame();
    });
    tempCSlider.addEventListener('input', () => {
      state.compareTempC = parseInt(tempCSlider.value, 10);
      drawFrame();
    });

    api.renderMath(hostEl);
    setMode('manometry');
  }

  global.EulerAcademy.registerSimulator('chem-02', { mount });
})(window);
