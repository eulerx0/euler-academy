/**
 * Euler Academy — Interactive 2-Mode Chemical Reaction Laboratory for Chemistry Lesson 01
 * (1. Oxydo-réduction & Stœchiométrie en bécher, 2. Réaction Métal-Acide & Volume de H₂ dégagé)
 */
(function (global) {
  'use strict';

  const C = () => global.EulerCanvas;

  const MODES_META = [
    { id: 'redox-beaker', label: '1. مختبر الأكسدة-اختزال واللون ($x$ و $x_{\\max}$)', activeCls: 'bg-emerald-500 text-slate-950 shadow' },
    { id: 'metal-acid', label: '2. تفاعل الزنك مع الحمض ($\\text{H}_2$ المتصاعد)', activeCls: 'bg-cyan-500 text-slate-950 shadow' }
  ];

  function metricCard(labelHtml, valId, initVal, valueCls = 'text-emerald-300') {
    return `
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span class="text-slate-400 block mb-1">${labelHtml}</span>
        <span id="${valId}" class="font-mono font-bold ${valueCls} text-sm" dir="ltr">${initVal}</span>
      </div>
    `;
  }

  function lerpColor(c1, c2, ratio) {
    const t = Math.max(0, Math.min(1, ratio));
    const r = Math.round(c1[0] + (c2[0] - c1[0]) * t);
    const g = Math.round(c1[1] + (c2[1] - c1[1]) * t);
    const b = Math.round(c1[2] + (c2[2] - c1[2]) * t);
    const a = c1[3] + (c2[3] - c1[3]) * t;
    return `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`;
  }

  function drawBeaker(ctx, bx, by, bw, bh, liquidRatio, fillColor, rimColor) {
    ctx.save();
    // Liquid inside beaker
    const liqH = (bh - 18) * liquidRatio;
    const liqY = by + bh - liqH;
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.roundRect(bx + 3, liqY, bw - 6, liqH - 3, [0, 0, 10, 10]);
    ctx.fill();

    // Liquid top meniscus line
    ctx.strokeStyle = 'rgba(255,255,255,0.28)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(bx + 4, liqY);
    ctx.lineTo(bx + bw - 4, liqY);
    ctx.stroke();

    // Graduations on glass
    ctx.strokeStyle = 'rgba(148,163,184,0.45)';
    ctx.lineWidth = 1;
    for (let k = 1; k <= 4; k++) {
      const gy = by + bh - k * ((bh - 20) / 4.5);
      ctx.beginPath();
      ctx.moveTo(bx + bw - 18, gy);
      ctx.lineTo(bx + bw - 4, gy);
      ctx.stroke();
    }

    // Outer beaker glass outline
    ctx.strokeStyle = rimColor || '#94a3b8';
    ctx.lineWidth = 2.6;
    ctx.beginPath();
    ctx.moveTo(bx - 6, by);
    ctx.lineTo(bx, by + 10);
    ctx.lineTo(bx, by + bh - 12);
    ctx.quadraticCurveTo(bx, by + bh, bx + 12, by + bh);
    ctx.lineTo(bx + bw - 12, by + bh);
    ctx.quadraticCurveTo(bx + bw, by + bh, bx + bw, by + bh - 12);
    ctx.lineTo(bx + bw, by + 10);
    ctx.lineTo(bx + bw + 6, by);
    ctx.stroke();
    ctx.restore();
  }

  function mount(hostEl, api) {
    const state = {
      mode: 'redox-beaker',
      rxn: 'iodide', // 'iodide' | 'permanganate'
      progFrac: 0.55, // 0..1 of x_max
      n1: 10.0,       // mmol (I- or H2C2O4)
      n2: 6.0,        // mmol (S2O8^2- or MnO4-)
      mZn: 0.654,     // g -> 10.0 mmol
      nH3O: 16.0,     // mmol
      playing: false,
      lastFrameTs: 0,
      rafId: null
    };

    hostEl.innerHTML = `
      <div class="glass rounded-3xl p-5 sm:p-8 border border-emerald-500/30">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                المختبر البصري التفاعلي • الكيمياء الدرس 01
              </span>
              <span class="text-xs text-slate-400 font-mono">Simulateur d’Oxydo-réduction</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">
              محاكي تفاعلات الأكسدة-اختزال، جدول التقدم، وتطور كميات المادة ($n_i = f(x)$)
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800">
            ${MODES_META.map((m) => `
              <button type="button" data-chem-mode="${m.id}" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <div id="chemRxnSub" class="mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80">
          <span class="text-xs text-slate-400 font-semibold px-2">اختر التفاعل المدروس في الكأس:</span>
          <button type="button" data-chem-rxn="iodide" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 transition">
            1) $\\text{S}_2\\text{O}_8^{2-} + 2\\,\\text{I}^- \\longrightarrow 2\\,\\text{SO}_4^{2-} + \\text{I}_2$ (تكوّن البني)
          </button>
          <button type="button" data-chem-rxn="permanganate" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">
            2) $2\\,\\text{MnO}_4^- + 5\\,\\text{H}_2\\text{C}_2\\text{O}_4 + 6\\,\\text{H}^+ \\longrightarrow 2\\,\\text{Mn}^{2+} + 10\\,\\text{CO}_2\\uparrow + 8\\,\\text{H}_2\\text{O}$
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-4">
            <div id="chemSimLegend" class="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-3 gap-2"></div>
            <canvas id="chemLabCanvas" width="680" height="390" class="w-full h-auto rounded-xl bg-[#050811] border border-slate-800/90"></canvas>

            <div class="mt-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                <div class="flex items-center gap-2">
                  <button type="button" id="chemPlayBtn" class="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition">
                    ▶ تشغيل التفاعل
                  </button>
                  <button type="button" id="chemResetBtn" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition">
                    ↺ تصفير ($x = 0$)
                  </button>
                </div>
                <span id="chemEqLabel" class="text-[11px] text-emerald-300 font-mono" dir="ltr">x = 2.75 mmol / x_max = 5.00 mmol</span>
              </div>

              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-slate-300">التقدم التفاعلي النسبي $x / x_{\\max}$:</span>
                  <span id="chemProgDisplay" class="font-mono text-emerald-300" dir="ltr">55%</span>
                </div>
                <input id="chemProgSlider" type="range" min="0" max="1" step="0.01" value="0.55" class="w-full accent-emerald-400 cursor-pointer" />
              </div>

              <div id="chemRedoxSliders" class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span id="chemN1Label" class="text-slate-300">كمية المادة $n_0(\\text{I}^-)$:</span>
                    <span id="chemN1Display" class="font-mono text-cyan-300" dir="ltr">10.0 mmol</span>
                  </div>
                  <input id="chemN1Slider" type="range" min="4" max="20" step="1" value="10" class="w-full accent-cyan-400 cursor-pointer" />
                </div>
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span id="chemN2Label" class="text-slate-300">كمية المادة $n_0(\\text{S}_2\\text{O}_8^{2-})$:</span>
                    <span id="chemN2Display" class="font-mono text-amber-300" dir="ltr">6.0 mmol</span>
                  </div>
                  <input id="chemN2Slider" type="range" min="2" max="12" step="0.5" value="6" class="w-full accent-amber-400 cursor-pointer" />
                </div>
              </div>

              <div id="chemMetalSliders" class="hidden grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">كتلة الزنك البدئية $m_0(\\text{Zn})$:</span>
                    <span id="chemMznDisplay" class="font-mono text-slate-200" dir="ltr">0.65 g (10.0 mmol)</span>
                  </div>
                  <input id="chemMznSlider" type="range" min="0.20" max="1.00" step="0.05" value="0.65" class="w-full accent-slate-300 cursor-pointer" />
                </div>
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">كمية $\\text{H}_3\\text{O}^+$ البدئية:</span>
                    <span id="chemH3oDisplay" class="font-mono text-cyan-300" dir="ltr">16.0 mmol</span>
                  </div>
                  <input id="chemH3oSlider" type="range" min="6" max="28" step="1" value="16" class="w-full accent-cyan-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-4">
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
              <h4 class="text-sm font-bold text-emerald-400 mb-3">⚗️ حصيلة المادة والتحليل الستوكيومتري اللحظي</h4>
              <div id="chemMetricsGrid" class="grid grid-cols-2 gap-3 text-xs mb-4"></div>
              <div id="chemStatusBanner" class="mb-3"></div>
              <div id="chemRuleBox" class="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    const canvas = hostEl.querySelector('#chemLabCanvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const rxnSub = hostEl.querySelector('#chemRxnSub');
    const redoxSliders = hostEl.querySelector('#chemRedoxSliders');
    const metalSliders = hostEl.querySelector('#chemMetalSliders');
    const n1Label = hostEl.querySelector('#chemN1Label');
    const n2Label = hostEl.querySelector('#chemN2Label');
    const legend = hostEl.querySelector('#chemSimLegend');
    const metricsGrid = hostEl.querySelector('#chemMetricsGrid');
    const statusBanner = hostEl.querySelector('#chemStatusBanner');
    const ruleBox = hostEl.querySelector('#chemRuleBox');
    const eqLabel = hostEl.querySelector('#chemEqLabel');

    const progSlider = hostEl.querySelector('#chemProgSlider');
    const n1Slider = hostEl.querySelector('#chemN1Slider');
    const n2Slider = hostEl.querySelector('#chemN2Slider');
    const mZnSlider = hostEl.querySelector('#chemMznSlider');
    const h3oSlider = hostEl.querySelector('#chemH3oSlider');
    const progDisplay = hostEl.querySelector('#chemProgDisplay');
    const n1Display = hostEl.querySelector('#chemN1Display');
    const n2Display = hostEl.querySelector('#chemN2Display');
    const mZnDisplay = hostEl.querySelector('#chemMznDisplay');
    const h3oDisplay = hostEl.querySelector('#chemH3oDisplay');
    const playBtn = hostEl.querySelector('#chemPlayBtn');
    const resetBtn = hostEl.querySelector('#chemResetBtn');

    function syncStaticChrome() {
      if (state.mode === 'redox-beaker') {
        const isIodide = state.rxn === 'iodide';
        n1Label.innerHTML = isIodide
          ? 'كمية المادة $n_0(\\text{I}^-)$:'
          : 'كمية المادة $n_0(\\text{H}_2\\text{C}_2\\text{O}_4)$:';
        n2Label.innerHTML = isIodide
          ? 'كمية المادة $n_0(\\text{S}_2\\text{O}_8^{2-})$:'
          : 'كمية المادة $n_0(\\text{MnO}_4^-)$:';

        legend.innerHTML = isIodide
          ? `<div class="flex flex-wrap items-center gap-3">
               <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-amber-600/80 inline-block"></span> تشكل $\\text{I}_2$ البني</span>
               <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-cyan-400 inline-block"></span> استهلاك المتفاعلات</span>
             </div>
             <span class="text-amber-300 font-mono">S₂O₈²⁻ + 2 I⁻ → 2 SO₄²⁻ + I₂</span>`
          : `<div class="flex flex-wrap items-center gap-3">
               <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-purple-500 inline-block"></span> اختفاء $\\text{MnO}_4^-$ البنفسجي</span>
               <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-emerald-400 inline-block"></span> تصاعد فقاعات $\\text{CO}_2$</span>
             </div>
             <span class="text-purple-300 font-mono">2 MnO₄⁻ + 5 H₂C₂O₄ + 6 H⁺ → 2 Mn²⁺ + 10 CO₂ + 8 H₂O</span>`;

        metricsGrid.innerHTML = [
          metricCard('التقدم الأقصى $x_{\\max}$:', 'cVal_xmax', '5.00 mmol', 'text-emerald-400'),
          metricCard('التقدم اللحظي $x$:', 'cVal_x', '2.75 mmol', 'text-cyan-300'),
          metricCard('المتفاعل المحد:', 'cVal_lim', 'I⁻', 'text-rose-400'),
          metricCard(isIodide ? 'الناتج المتكون $n(\\text{I}_2)$:' : 'الناتج المتكون $n(\\text{Mn}^{2+})$:', 'cVal_prod', '2.75 mmol', 'text-amber-300')
        ].join('');

        statusBanner.innerHTML = isIodide
          ? `<div class="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-2">
               <span>🧪</span> <span>مع تزايد التقدم $x$، يتلون المزيج تدريجياً بالأصفر فالبني لتكون ثنائي اليود $\\text{I}_2$.</span>
             </div>`
          : `<div class="p-3 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-2">
               <span>🫧</span> <span>إذا كانت $\\text{MnO}_4^-$ هي المحد يزول البنفسجي كلياً عند $x=x_{\\max}$؛ وإن كانت في وفرة يبقى لون وردي باهت!</span>
             </div>`;

        ruleBox.innerHTML = `
          <b>اختبار الحالة الستوكيومترية:</b><br/>
          • حرّك المنزلقين حتى تتطابق النسبتان المتكافئتان (مثلاً في تفاعل اليودور: $n_0(\\text{I}^-) = 12\\text{ mmol}$ و $n_0(\\text{S}_2\\text{O}_8^{2-}) = 6.0\\text{ mmol}$ لأن $\\frac{12}{2} = \\frac{6}{1}$) ستلاحظ في المخطط اختفاء المتفاعلين معاً عند $x = x_{\\max}$!<br/>
          • الأيونات $\\text{K}^+$ و $\\text{SO}_4^{2-}$ (الناتجة عن التحميض) متفرجة ولا تدخل في الموازنة.
        `;
      } else {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-slate-300 inline-block"></span> فلز الزنك $\\text{Zn}(\\text{s})$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-cyan-400 inline-block"></span> غاز $\\text{H}_2(\\text{g})$ في المحقنة</span>
          </div>
          <span class="text-cyan-300 font-mono">Zn(s) + 2 H₃O⁺ → Zn²⁺ + H₂↑ + 2 H₂O</span>
        `;

        metricsGrid.innerHTML = [
          metricCard('التقدم الأقصى $x_{\\max}$:', 'cVal_xmax', '8.00 mmol', 'text-emerald-400'),
          metricCard('حجم غاز $\\text{H}_2$ المتجمع:', 'cVal_vh2', '105.6 mL', 'text-cyan-300'),
          metricCard('المتفاعل المحد:', 'cVal_lim', 'H₃O⁺', 'text-rose-400'),
          metricCard('الكتلة المتبقية $m(\\text{Zn})$:', 'cVal_mrem', '0.37 g', 'text-slate-200')
        ].join('');

        statusBanner.innerHTML = `
          <div class="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-2">
            <span>📏</span> <span>يتناسب حجم غاز الهيدروجين في المحقنة طردياً مع التقدم: $V(\\text{H}_2) = x \\cdot V_m$ ($V_m = 24\\text{ L/mol}$).</span>
          </div>
        `;

        ruleBox.innerHTML = `
          <b>منهجية الامتحان الوطني لتفاعلات فلز-حمض:</b><br/>
          • إذا كان فلز الزنك $\\text{Zn}$ في <b>وفرة</b> (مثلاً $m_0 = 0.80\\text{ g} \\approx 12.2\\text{ mmol}$ مع $n_0(\\text{H}_3\\text{O}^+) = 16\\text{ mmol}$)، يتوقف تصاعد الغاز رغم بقاء قطعة الزنك غير ذائبة جزئياً!<br/>
          • تذكر أن $\\text{Cl}^-$ في حمض الكلوريدريك $(\\text{H}_3\\text{O}^+ + \\text{Cl}^-)$ <b>أيون متفرج</b>.
        `;
      }

      api.renderMath(legend);
      api.renderMath(metricsGrid);
      api.renderMath(statusBanner);
      api.renderMath(ruleBox);
      api.renderMath(n1Label);
      api.renderMath(n2Label);
    }

    function drawFrame() {
      const c = C();
      ctx.clearRect(0, 0, W, H);

      const f = state.progFrac;
      progDisplay.textContent = `${Math.round(f * 100)}%`;

      if (state.mode === 'redox-beaker') {
        const isIodide = state.rxn === 'iodide';
        const aCoeff = isIodide ? 2 : 5;
        const bCoeff = isIodide ? 1 : 2;
        const n10 = state.n1;
        const n20 = state.n2;

        n1Display.textContent = `${n10.toFixed(1)} mmol`;
        n2Display.textContent = `${n20.toFixed(1)} mmol`;

        const r1 = n10 / aCoeff;
        const r2 = n20 / bCoeff;
        const xMax = Math.min(r1, r2);
        const x = f * xMax;

        const isStoich = Math.abs(r1 - r2) < 1e-6;
        const limText = isStoich
          ? 'مزيج ستوكيومتري'
          : (r1 < r2 ? (isIodide ? 'I⁻ (اليودور)' : 'H₂C₂O₄') : (isIodide ? 'S₂O₈²⁻' : 'MnO₄⁻'));

        const n1Rem = Math.max(0, n10 - aCoeff * x);
        const n2Rem = Math.max(0, n20 - bCoeff * x);
        const nProd1 = isIodide ? x : 2 * x;       // I2 or Mn2+
        const nProd2 = isIodide ? 2 * x : 10 * x;  // SO4^2- or CO2

        eqLabel.textContent = `x = ${x.toFixed(2)} mmol / x_max = ${xMax.toFixed(2)} mmol`;

        // Color interpolation for solution inside beaker
        let liqColor;
        if (isIodide) {
          const i2Intensity = Math.min(1, nProd1 / 7.5);
          liqColor = lerpColor([203, 213, 225, 0.14], [180, 83, 9, 0.85], i2Intensity);
        } else {
          const mno4Intensity = Math.min(1, n2Rem / 10.0);
          liqColor = lerpColor([203, 213, 225, 0.14], [168, 85, 247, 0.82], mno4Intensity);
        }

        // Draw beaker on the left side
        c.drawLabel(ctx, 'وسط التفاعل (Bécher)', 62, 34, { color: '#cbd5e1', font: 'bold 12px monospace' });
        drawBeaker(ctx, 56, 70, 170, 230, 0.72, liqColor, '#94a3b8');

        // Draw gas bubbles if permanganate reaction is progressing
        if (!isIodide && f > 0.02 && f < 0.995) {
          ctx.save();
          ctx.fillStyle = 'rgba(226,232,240,0.65)';
          for (let b = 0; b < 9; b++) {
            const bx = 76 + ((b * 23 + Math.round(f * 300)) % 130);
            const by = 285 - ((b * 31 + Math.round(f * 720)) % 145);
            ctx.beginPath();
            ctx.arc(bx, by, 3 + (b % 3), 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
          c.drawLabel(ctx, 'CO₂ ↑', 120, 56, { color: '#34d399', font: 'bold 11px monospace' });
        } else if (isIodide) {
          const lbl = f < 0.05 ? 'عديم اللون' : (f < 0.45 ? 'أصفر باهت (I₂)' : 'بني داكن (I₂)');
          c.drawLabel(ctx, lbl, 98, 326, { color: f < 0.05 ? '#94a3b8' : '#fbbf24', font: 'bold 11px Cairo, sans-serif' });
        } else {
          const lbl = n2Rem < 0.05 ? 'اختفاء البنفسجي (عديم اللون)' : 'لون بنفسجي (MnO₄⁻ متبقٍ)';
          c.drawLabel(ctx, lbl, 76, 326, { color: n2Rem < 0.05 ? '#34d399' : '#c084fc', font: 'bold 11px Cairo, sans-serif' });
        }

        // Draw live molar bar chart on the right side
        c.drawLabel(ctx, 'تطور كميات المادة n(t) [mmol]', 335, 34, { color: '#34d399', font: 'bold 12px monospace' });
        const chartX = 285;
        const chartY = 300;
        const chartW = 360;
        const chartH = 225;

        ctx.save();
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(chartX, chartY - chartH);
        ctx.lineTo(chartX, chartY);
        ctx.lineTo(chartX + chartW, chartY);
        ctx.stroke();

        const maxScale = Math.max(20, n10, n20, isIodide ? 2 * xMax : 10 * xMax);
        const bars = isIodide
          ? [
              { label: 'I⁻', val: n1Rem, color: '#22d3ee' },
              { label: 'S₂O₈²⁻', val: n2Rem, color: '#fbbf24' },
              { label: 'I₂', val: nProd1, color: '#d97706' },
              { label: 'SO₄²⁻', val: nProd2, color: '#34d399' }
            ]
          : [
              { label: 'H₂C₂O₄', val: n1Rem, color: '#22d3ee' },
              { label: 'MnO₄⁻', val: n2Rem, color: '#c084fc' },
              { label: 'Mn²⁺', val: nProd1, color: '#34d399' },
              { label: 'CO₂', val: nProd2, color: '#fbbf24' }
            ];

        const barW = 54;
        const gap = 28;
        bars.forEach((b, idx) => {
          const x0 = chartX + 26 + idx * (barW + gap);
          const hPx = Math.max(2, (b.val / maxScale) * (chartH - 25));
          ctx.fillStyle = b.color;
          ctx.beginPath();
          ctx.roundRect(x0, chartY - hPx, barW, hPx, [6, 6, 0, 0]);
          ctx.fill();

          c.drawLabel(ctx, `${b.val.toFixed(1)}`, x0 + 12, chartY - hPx - 8, { color: '#f8fafc', font: 'bold 11px monospace' });
          c.drawLabel(ctx, b.label, x0 + 6, chartY + 20, { color: b.color, font: 'bold 11px monospace' });
        });
        ctx.restore();

        // Update metrics DOM
        const elXmax = hostEl.querySelector('#cVal_xmax');
        const elX = hostEl.querySelector('#cVal_x');
        const elLim = hostEl.querySelector('#cVal_lim');
        const elProd = hostEl.querySelector('#cVal_prod');
        if (elXmax) elXmax.textContent = `${xMax.toFixed(2)} mmol`;
        if (elX) elX.textContent = `${x.toFixed(2)} mmol`;
        if (elLim) elLim.textContent = limText;
        if (elProd) elProd.textContent = `${nProd1.toFixed(2)} mmol`;
      } else {
        // Mode 2: Zn(s) + 2 H3O+ -> Zn2+ + H2(g) + 2 H2O
        const MZn = 65.4;
        const Vm = 24.0; // L/mol
        const nZn0 = (state.mZn / MZn) * 1000.0; // mmol
        const nH3O0 = state.nH3O; // mmol

        mZnDisplay.textContent = `${state.mZn.toFixed(2)} g (${nZn0.toFixed(1)} mmol)`;
        h3oDisplay.textContent = `${nH3O0.toFixed(1)} mmol`;

        const rZn = nZn0 / 1.0;
        const rH3O = nH3O0 / 2.0;
        const xMax = Math.min(rZn, rH3O);
        const x = f * xMax;
        const vh2Ml = x * Vm; // x (mmol) * Vm (L/mol) = mL
        const nZnRem = Math.max(0, nZn0 - x);
        const mZnRem = (nZnRem * MZn) / 1000.0;

        const isStoich = Math.abs(rZn - rH3O) < 0.05;
        const limText = isStoich ? 'مزيج ستوكيومتري' : (rZn < rH3O ? 'Zn (فلز الزنك)' : 'H₃O⁺ (الحمض)');

        eqLabel.textContent = `x = ${x.toFixed(2)} mmol | V(H₂) = ${vh2Ml.toFixed(1)} mL`;

        // Left: Erlenmeyer / Flask with corroding Zn strip and rising H2 bubbles
        c.drawLabel(ctx, 'حوجلة التفاعل (Erlenmeyer)', 55, 34, { color: '#cbd5e1', font: 'bold 12px monospace' });
        drawBeaker(ctx, 56, 95, 165, 205, 0.65, 'rgba(34,211,238,0.14)', '#94a3b8');

        // Zinc strip at bottom of beaker (shrinks proportionally with remaining Zn mass)
        const znFrac = Math.max(0, nZnRem / nZn0);
        if (znFrac > 0.02) {
          ctx.save();
          ctx.fillStyle = '#cbd5e1';
          const zw = 90 * Math.sqrt(znFrac);
          const zh = 18 * Math.sqrt(znFrac);
          ctx.fillRect(138 - zw / 2, 294 - zh, zw, zh);
          ctx.restore();
          c.drawLabel(ctx, 'Zn(s)', 122, 274, { color: '#e2e8f0', font: 'bold 11px monospace' });
        } else {
          c.drawLabel(ctx, 'اختفاء Zn كلياً', 94, 286, { color: '#fb7185', font: 'bold 11px Cairo, sans-serif' });
        }

        // H2 gas bubbles inside flask
        if (f > 0.02 && f < 0.995) {
          ctx.save();
          ctx.fillStyle = '#38bdf8';
          for (let b = 0; b < 8; b++) {
            const bx = 95 + ((b * 19 + Math.round(f * 260)) % 88);
            const by = 278 - ((b * 27 + Math.round(f * 680)) % 140);
            ctx.beginPath();
            ctx.arc(bx, by, 2.8, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }

        // Delivery tube from flask top (x=138, y=90) to gas syringe (x=310, y=135)
        ctx.save();
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(138, 95);
        ctx.lineTo(138, 62);
        ctx.lineTo(310, 62);
        ctx.lineTo(310, 145);
        ctx.stroke();

        // Graduated Gas Syringe on the right side (x=310..620, y=115..175)
        c.drawLabel(ctx, 'محقنة مدرجة لقياس حجم H₂ المنطلق (Seringue à gaz)', 315, 96, { color: '#22d3ee', font: 'bold 12px monospace' });
        const maxVolMl = 360;
        const barrelX = 310;
        const barrelY = 115;
        const barrelW = 290;
        const barrelH = 60;
        const pistonOffset = Math.min(barrelW - 35, (vh2Ml / maxVolMl) * (barrelW - 35));

        // Collected H2 gas glow inside syringe
        ctx.fillStyle = 'rgba(34, 211, 238, 0.22)';
        ctx.fillRect(barrelX + 2, barrelY + 2, pistonOffset, barrelH - 4);

        // Syringe cylinder outline
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2.4;
        ctx.strokeRect(barrelX, barrelY, barrelW, barrelH);

        // Graduations (0..360 mL)
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1.2;
        for (let m = 0; m <= 6; m++) {
          const gx = barrelX + (m / 6) * (barrelW - 35);
          ctx.beginPath();
          ctx.moveTo(gx, barrelY);
          ctx.lineTo(gx, barrelY + 12);
          ctx.stroke();
          c.drawLabel(ctx, `${m * 60}`, gx - 8, barrelY + barrelH + 18, { color: '#64748b', font: '10px monospace' });
        }
        c.drawLabel(ctx, 'mL', barrelX + barrelW - 22, barrelY + barrelH + 18, { color: '#94a3b8', font: '10px monospace' });

        // Moving piston head + rod
        const px = barrelX + pistonOffset;
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(px, barrelY + 3, 14, barrelH - 6);
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(px + 14, barrelY + barrelH / 2 - 4, barrelW - pistonOffset + 25, 8);
        ctx.restore();

        // Live Volume readout box below syringe
        ctx.save();
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.strokeStyle = 'rgba(34, 211, 238, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(310, 230, 310, 74, 12);
        ctx.fill();
        ctx.stroke();
        c.drawLabel(ctx, `V(H₂) = ${vh2Ml.toFixed(1)} mL`, 335, 260, { color: '#22d3ee', font: 'bold 16px monospace' });
        c.drawLabel(ctx, `n(H₂) = x = ${x.toFixed(2)} mmol  |  x_max = ${xMax.toFixed(2)} mmol`, 335, 286, { color: '#cbd5e1', font: '11px monospace' });
        ctx.restore();

        const elXmax = hostEl.querySelector('#cVal_xmax');
        const elVh2 = hostEl.querySelector('#cVal_vh2');
        const elLim = hostEl.querySelector('#cVal_lim');
        const elMrem = hostEl.querySelector('#cVal_mrem');
        if (elXmax) elXmax.textContent = `${xMax.toFixed(2)} mmol`;
        if (elVh2) elVh2.textContent = `${vh2Ml.toFixed(1)} mL`;
        if (elLim) elLim.textContent = limText;
        if (elMrem) elMrem.textContent = `${mZnRem.toFixed(2)} g`;
      }
    }

    function stopAnim() {
      state.playing = false;
      if (state.rafId != null) {
        global.cancelAnimationFrame(state.rafId);
        state.rafId = null;
      }
      playBtn.textContent = '▶ تشغيل التفاعل';
      playBtn.className = 'px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition';
    }

    function stepAnim(ts) {
      if (!state.playing || !canvas.isConnected) {
        stopAnim();
        return;
      }
      if (!state.lastFrameTs) state.lastFrameTs = ts;
      const dt = Math.min(0.05, (ts - state.lastFrameTs) / 1000);
      state.lastFrameTs = ts;

      state.progFrac += dt * 0.28;
      if (state.progFrac >= 1.0) {
        state.progFrac = 1.0;
        progSlider.value = '1.00';
        drawFrame();
        stopAnim();
        return;
      }
      progSlider.value = state.progFrac.toFixed(2);
      drawFrame();
      state.rafId = global.requestAnimationFrame(stepAnim);
    }

    function startAnim() {
      if (state.progFrac >= 0.99) state.progFrac = 0.0;
      state.playing = true;
      state.lastFrameTs = 0;
      playBtn.textContent = '⏸ إيقاف مؤقت';
      playBtn.className = 'px-3.5 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 text-xs font-extrabold transition';
      state.rafId = global.requestAnimationFrame(stepAnim);
    }

    function setChemMode(mode) {
      stopAnim();
      state.mode = mode;

      hostEl.querySelectorAll('[data-chem-mode]').forEach((btn) => {
        const meta = MODES_META.find((m) => m.id === btn.dataset.chemMode);
        btn.className = btn.dataset.chemMode === mode && meta
          ? `px-3 py-2 rounded-xl text-xs font-bold ${meta.activeCls} transition`
          : 'px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition';
      });

      if (mode === 'redox-beaker') {
        rxnSub.classList.remove('hidden');
        redoxSliders.classList.remove('hidden');
        metalSliders.classList.add('hidden');
      } else {
        rxnSub.classList.add('hidden');
        redoxSliders.classList.add('hidden');
        metalSliders.classList.remove('hidden');
      }

      syncStaticChrome();
      drawFrame();
    }

    function setRxn(rxnId) {
      stopAnim();
      state.rxn = rxnId;
      hostEl.querySelectorAll('[data-chem-rxn]').forEach((btn) => {
        const active = btn.dataset.chemRxn === rxnId;
        btn.className = active
          ? 'px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 transition'
          : 'px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition';
      });
      syncStaticChrome();
      drawFrame();
    }

    hostEl.addEventListener('click', (e) => {
      const mBtn = e.target.closest('[data-chem-mode]');
      if (mBtn) return setChemMode(mBtn.dataset.chemMode);
      const rBtn = e.target.closest('[data-chem-rxn]');
      if (rBtn) return setRxn(rBtn.dataset.chemRxn);
    });

    playBtn.addEventListener('click', () => {
      if (state.playing) stopAnim();
      else startAnim();
    });

    resetBtn.addEventListener('click', () => {
      stopAnim();
      state.progFrac = 0.0;
      progSlider.value = '0.00';
      drawFrame();
    });

    progSlider.addEventListener('input', () => {
      stopAnim();
      state.progFrac = parseFloat(progSlider.value);
      drawFrame();
    });

    n1Slider.addEventListener('input', () => {
      state.n1 = parseFloat(n1Slider.value);
      drawFrame();
    });

    n2Slider.addEventListener('input', () => {
      state.n2 = parseFloat(n2Slider.value);
      drawFrame();
    });

    mZnSlider.addEventListener('input', () => {
      state.mZn = parseFloat(mZnSlider.value);
      drawFrame();
    });

    h3oSlider.addEventListener('input', () => {
      state.nH3O = parseFloat(h3oSlider.value);
      drawFrame();
    });

    hostEl._chemSimApi = { setChemMode, setRxn, drawFrame };
    api.renderMath(hostEl);
    setChemMode('redox-beaker');
  }

  global.EulerAcademy.registerSimulator('chem-01', { mount });
})(window);
