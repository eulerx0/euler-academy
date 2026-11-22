/**
 * Euler Academy — Interactive 4-Mode Chemical Reaction & Kinetics Laboratory for Chemistry Lesson 01
 * (1. Oxydo-réduction, 2. Métal-Acide & H₂, 3. Dosage MnO₄⁻/Fe²⁺, 4. Facteurs Cinétiques & Trempe Chimique)
 */
(function (global) {
  'use strict';

  const C = () => global.EulerCanvas;

  const MODES_META = [
    { id: 'redox-beaker', label: '1. الأكسدة-اختزال ($x_{\\max}$)', activeCls: 'bg-emerald-500 text-slate-950 shadow' },
    { id: 'metal-acid', label: '2. الزنك والحمض ($\\text{H}_2$)', activeCls: 'bg-cyan-500 text-slate-950 shadow' },
    { id: 'dosage-redox', label: '3. المعايرة اللونية ($V_E$)', activeCls: 'bg-purple-500 text-slate-950 shadow' },
    { id: 'kinetics-factors', label: '4. الحركية والسقي ($T, C_0$)', activeCls: 'bg-amber-500 text-slate-950 shadow' }
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
    const liqH = (bh - 18) * liquidRatio;
    const liqY = by + bh - liqH;
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.roundRect(bx + 3, liqY, bw - 6, liqH - 3, [0, 0, 10, 10]);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255,255,255,0.28)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(bx + 4, liqY);
    ctx.lineTo(bx + bw - 4, liqY);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(148,163,184,0.45)';
    ctx.lineWidth = 1;
    for (let k = 1; k <= 4; k++) {
      const gy = by + bh - k * ((bh - 20) / 4.5);
      ctx.beginPath();
      ctx.moveTo(bx + bw - 18, gy);
      ctx.lineTo(bx + bw - 4, gy);
      ctx.stroke();
    }

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
      rxn: 'iodide',
      progFrac: 0.55,
      n1: 10.0,
      n2: 6.0,
      mZn: 0.654,
      nH3O: 16.0,
      dosageV: 6.0,   // mL of MnO4- added [0..20]
      dosageC1: 0.12, // mol/L of Fe2+ [0.08..0.16]
      kinTemp: 25,    // °C [10..60]
      kinConc: 0.15,  // [I-]0 in mol/L [0.05..0.30]
      kinTime: 8.0,   // min [0..30]
      kinTrempeAt: null, // frozen time t_q when Trempe chimique triggered
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
              <span class="text-xs text-slate-400 font-mono">Simulateur d’Oxydo-réduction &amp; Cinétique (4 Modes)</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">
              محاكي تفاعلات الأكسدة-اختزال، العوامل الحركية ($T, C_0$)، والسقي الكيميائي
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

              <div id="chemProgWrap">
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

              <div id="chemDosageSliders" class="hidden grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">الحجم المضاف من البرمنغنات $V$:</span>
                    <span id="chemDosageVDisplay" class="font-mono text-purple-300" dir="ltr">V = 6.0 mL</span>
                  </div>
                  <input id="chemDosageVSlider" type="range" min="0" max="20" step="0.2" value="6.0" class="w-full accent-purple-400 cursor-pointer" />
                </div>
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">التركيز $C_1$ لمحلول الحديد II:</span>
                    <span id="chemDosageC1Display" class="font-mono text-emerald-300" dir="ltr">C₁ = 0.12 mol/L</span>
                  </div>
                  <input id="chemDosageC1Slider" type="range" min="0.08" max="0.16" step="0.01" value="0.12" class="w-full accent-emerald-400 cursor-pointer" />
                </div>
              </div>

              <div id="chemKinSliders" class="hidden space-y-3 pt-2 border-t border-slate-800/80">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <div class="flex justify-between text-xs font-bold mb-1">
                      <span class="text-slate-300">درجة الحرارة $T$:</span>
                      <span id="chemTempDisplay" class="font-mono text-rose-300" dir="ltr">25 °C</span>
                    </div>
                    <input id="chemTempSlider" type="range" min="10" max="60" step="5" value="25" class="w-full accent-rose-400 cursor-pointer" />
                  </div>
                  <div>
                    <div class="flex justify-between text-xs font-bold mb-1">
                      <span class="text-slate-300">التركيز $[\\text{I}^-]_0$ (بوفرة):</span>
                      <span id="chemConcDisplay" class="font-mono text-cyan-300" dir="ltr">0.15 mol/L</span>
                    </div>
                    <input id="chemConcSlider" type="range" min="0.05" max="0.30" step="0.05" value="0.15" class="w-full accent-cyan-400 cursor-pointer" />
                  </div>
                  <div>
                    <div class="flex justify-between text-xs font-bold mb-1">
                      <span class="text-slate-300">الزمن $t$ (دقيقة):</span>
                      <span id="chemTimeDisplay" class="font-mono text-amber-300" dir="ltr">t = 8.0 min</span>
                    </div>
                    <input id="chemTimeSlider" type="range" min="0" max="30" step="0.5" value="8.0" class="w-full accent-amber-400 cursor-pointer" />
                  </div>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <button type="button" id="chemTrempeBtn" class="px-3.5 py-1.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/50 text-sky-300 text-xs font-bold transition">
                    🧊 تطبيق السقي الكيميائي عند $t$ الحالي (ماء مثلج $0^\\circ\\text{C}$)
                  </button>
                  <span class="text-[11px] text-slate-400 font-mono">Limiting S₂O₈²⁻ fixed: x_max = 2.00 mmol</span>
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
    const progWrap = hostEl.querySelector('#chemProgWrap');
    const redoxSliders = hostEl.querySelector('#chemRedoxSliders');
    const metalSliders = hostEl.querySelector('#chemMetalSliders');
    const dosageSliders = hostEl.querySelector('#chemDosageSliders');
    const kinSliders = hostEl.querySelector('#chemKinSliders');
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
    const dosageVSlider = hostEl.querySelector('#chemDosageVSlider');
    const dosageC1Slider = hostEl.querySelector('#chemDosageC1Slider');
    const tempSlider = hostEl.querySelector('#chemTempSlider');
    const concSlider = hostEl.querySelector('#chemConcSlider');
    const timeSlider = hostEl.querySelector('#chemTimeSlider');
    const trempeBtn = hostEl.querySelector('#chemTrempeBtn');
    const progDisplay = hostEl.querySelector('#chemProgDisplay');
    const n1Display = hostEl.querySelector('#chemN1Display');
    const n2Display = hostEl.querySelector('#chemN2Display');
    const mZnDisplay = hostEl.querySelector('#chemMznDisplay');
    const h3oDisplay = hostEl.querySelector('#chemH3oDisplay');
    const dosageVDisplay = hostEl.querySelector('#chemDosageVDisplay');
    const dosageC1Display = hostEl.querySelector('#chemDosageC1Display');
    const tempDisplay = hostEl.querySelector('#chemTempDisplay');
    const concDisplay = hostEl.querySelector('#chemConcDisplay');
    const timeDisplay = hostEl.querySelector('#chemTimeDisplay');
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
      } else if (state.mode === 'metal-acid') {
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
      } else if (state.mode === 'dosage-redox') {
        // Mode 3: Volumetric Colorimetric Redox Titration MnO4- + 5 Fe2+ + 8 H+ -> Mn2+ + 5 Fe3+ + 4 H2O
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-purple-500 inline-block"></span> المحلول المعايِر $\\text{MnO}_4^-$ ($C_2 = 0.04\\text{ mol/L}$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-emerald-400 inline-block"></span> المعايَر $\\text{Fe}^{2+}$ ($V_1 = 20\\text{ mL}$)</span>
          </div>
          <span class="text-purple-300 font-mono">MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H₂O</span>
        `;

        metricsGrid.innerHTML = [
          metricCard('حجم التكافؤ $V_E = \\frac{C_1 V_1}{5 C_2}$:', 'cVal_ve', '12.0 mL', 'text-purple-300'),
          metricCard('حجم البرمنغنات المضاف $V$:', 'cVal_vadd', '6.0 mL', 'text-cyan-300'),
          metricCard('كمية $\\text{Fe}^{2+}$ المتبقية:', 'cVal_nfe', '1.20 mmol', 'text-emerald-300'),
          metricCard('حالة الكأس:', 'cVal_eqstate', 'قبل التكافؤ (V < V_E)', 'text-amber-300')
        ].join('');

        statusBanner.innerHTML = `
          <div id="cVal_bannerBox" class="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2">
            <span>💧</span> <span>تفاعل المعايرة <b>سريع وتام</b>: يزول لون $\\text{MnO}_4^-$ فوراً مادام $V < V_E$، ويثبت الوردي-البنفسجي لحظة بلوغ $V_E$!</span>
          </div>
        `;

        ruleBox.innerHTML = `
          <b>علاقة التكافؤ الحاسمة في معايرة $\\text{Fe}^{2+}$ بالبرمنغنات:</b><br/>
          $$\\frac{n_i(\\text{Fe}^{2+})}{5} = \\frac{n_E(\\text{MnO}_4^-)}{1} \\implies C_1 \\cdot V_1 = 5 \\cdot C_2 \\cdot V_E$$
          • <b>فخ شائع في البكالوريا:</b> نسيان المعامل الستوكيومتري $5$ في علاقة التكافؤ! لاحظ أن كل أيون $\\text{MnO}_4^-$ يلتهم $5$ أيونات $\\text{Fe}^{2+}$.
        `;
      } else {
        // Mode 4: Facteurs Cinétiques (T, [I-]0) & Trempe Chimique
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-amber-400 inline-block"></span> منحنى التجربة المختارة $x(t)$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-slate-500 inline-block"></span> المنحنى المرجعي ($25^\\circ\\text{C}, 0.15\\text{ mol/L}$)</span>
          </div>
          <span class="text-amber-300 font-mono">S₂O₈²⁻ (limitant) + 2 I⁻ (excès) → 2 SO₄²⁻ + I₂</span>
        `;

        metricsGrid.innerHTML = [
          metricCard('التقدم الأقصى الثابت $x_{\\max}$:', 'cVal_k_xmax', '2.00 mmol', 'text-emerald-400'),
          metricCard('التقدم اللحظي $x(t)$:', 'cVal_kx', '1.35 mmol', 'text-amber-300'),
          metricCard('المدة التقديرية $t_f$:', 'cVal_ktf', '21.4 min', 'text-cyan-300'),
          metricCard('الحالة الحركية:', 'cVal_kstate', 'التفاعل نشط (تحت تأثير T و C₀)', 'text-rose-300')
        ].join('');

        statusBanner.innerHTML = `
          <div class="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-2">
            <span>🌡️</span> <span>رفع $T$ أو $[\\text{I}^-]_0$ يضاعف <b>التصادمات الفعالة</b> فيُقلّص $t_f$، بينما يظل <b>$x_{\\max}$ ثابتاً</b> ($2.00\\text{ mmol}$)!</span>
          </div>
        `;

        ruleBox.innerHTML = `
          <b>المبدأ الذهبي للعوامل الحركية والسقي الكيميائي:</b><br/>
          • حرّك منزلق الحرارة $T$ أو التركيز $[\\text{I}^-]_0$ (الموجود بوفرة): يتغيّر الميل عند الأصل وزمن النهاية $t_f$ فقط، بينما تؤول كل المنحنيات لنفس السقف <b>$x_{\\max} = 2.00\\text{ mmol}$</b>!<br/>
          • اضغط <b>السقي الكيميائي</b> فتجمد العينة عند $0^\\circ\\text{C}$ مع التخفيف، فيتوقف التطور أفقياً لتسهيل المعايرة.
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
        const nProd1 = isIodide ? x : 2 * x;
        const nProd2 = isIodide ? 2 * x : 10 * x;

        eqLabel.textContent = `x = ${x.toFixed(2)} mmol / x_max = ${xMax.toFixed(2)} mmol`;

        let liqColor;
        if (isIodide) {
          const i2Intensity = Math.min(1, nProd1 / 7.5);
          liqColor = lerpColor([203, 213, 225, 0.14], [180, 83, 9, 0.85], i2Intensity);
        } else {
          const mno4Intensity = Math.min(1, n2Rem / 10.0);
          liqColor = lerpColor([203, 213, 225, 0.14], [168, 85, 247, 0.82], mno4Intensity);
        }

        c.drawLabel(ctx, 'وسط التفاعل (Bécher)', 62, 34, { color: '#cbd5e1', font: 'bold 12px monospace' });
        drawBeaker(ctx, 56, 70, 170, 230, 0.72, liqColor, '#94a3b8');

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

        const elXmax = hostEl.querySelector('#cVal_xmax');
        const elX = hostEl.querySelector('#cVal_x');
        const elLim = hostEl.querySelector('#cVal_lim');
        const elProd = hostEl.querySelector('#cVal_prod');
        if (elXmax) elXmax.textContent = `${xMax.toFixed(2)} mmol`;
        if (elX) elX.textContent = `${x.toFixed(2)} mmol`;
        if (elLim) elLim.textContent = limText;
        if (elProd) elProd.textContent = `${nProd1.toFixed(2)} mmol`;
      } else if (state.mode === 'metal-acid') {
        const MZn = 65.4;
        const Vm = 24.0;
        const nZn0 = (state.mZn / MZn) * 1000.0;
        const nH3O0 = state.nH3O;

        mZnDisplay.textContent = `${state.mZn.toFixed(2)} g (${nZn0.toFixed(1)} mmol)`;
        h3oDisplay.textContent = `${nH3O0.toFixed(1)} mmol`;

        const rZn = nZn0 / 1.0;
        const rH3O = nH3O0 / 2.0;
        const xMax = Math.min(rZn, rH3O);
        const x = f * xMax;
        const vh2Ml = x * Vm;
        const nZnRem = Math.max(0, nZn0 - x);
        const mZnRem = (nZnRem * MZn) / 1000.0;

        const isStoich = Math.abs(rZn - rH3O) < 0.05;
        const limText = isStoich ? 'مزيج ستوكيومتري' : (rZn < rH3O ? 'Zn (فلز الزنك)' : 'H₃O⁺ (الحمض)');

        eqLabel.textContent = `x = ${x.toFixed(2)} mmol | V(H₂) = ${vh2Ml.toFixed(1)} mL`;

        c.drawLabel(ctx, 'حوجلة التفاعل (Erlenmeyer)', 55, 34, { color: '#cbd5e1', font: 'bold 12px monospace' });
        drawBeaker(ctx, 56, 95, 165, 205, 0.65, 'rgba(34,211,238,0.14)', '#94a3b8');

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

        ctx.save();
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(138, 95);
        ctx.lineTo(138, 62);
        ctx.lineTo(310, 62);
        ctx.lineTo(310, 145);
        ctx.stroke();

        c.drawLabel(ctx, 'محقنة مدرجة لقياس حجم H₂ المنطلق (Seringue à gaz)', 315, 96, { color: '#22d3ee', font: 'bold 12px monospace' });
        const maxVolMl = 360;
        const barrelX = 310;
        const barrelY = 115;
        const barrelW = 290;
        const barrelH = 60;
        const pistonOffset = Math.min(barrelW - 35, (vh2Ml / maxVolMl) * (barrelW - 35));

        ctx.fillStyle = 'rgba(34, 211, 238, 0.22)';
        ctx.fillRect(barrelX + 2, barrelY + 2, pistonOffset, barrelH - 4);

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2.4;
        ctx.strokeRect(barrelX, barrelY, barrelW, barrelH);

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

        const px = barrelX + pistonOffset;
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(px, barrelY + 3, 14, barrelH - 6);
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(px + 14, barrelY + barrelH / 2 - 4, barrelW - pistonOffset + 25, 8);
        ctx.restore();

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
      } else if (state.mode === 'dosage-redox') {
        // Mode 3: Volumetric Colorimetric Redox Titration MnO4- (C2=0.04) into Fe2+ (V1=20 mL, C1)
        const C2 = 0.04;
        const V1 = 20.0; // mL
        const C1 = state.dosageC1;
        const V = state.dosageV;
        const Ve = (C1 * V1) / (5 * C2); // e.g. 0.12*20/(5*0.04) = 12.0 mL

        const nFe0 = C1 * V1; // mmol
        const nMnAdded = C2 * V; // mmol
        const nFeRem = Math.max(0, nFe0 - 5 * nMnAdded);
        const nMnExc = Math.max(0, nMnAdded - nFe0 / 5);
        const atOrPastEq = V >= Ve - 0.05;

        dosageVDisplay.textContent = `V = ${V.toFixed(1)} mL`;
        dosageC1Display.textContent = `C₁ = ${C1.toFixed(2)} mol/L`;
        eqLabel.textContent = `V = ${V.toFixed(1)} mL  |  V_E = ${Ve.toFixed(1)} mL`;

        // Left side: Burette + Beaker + Magnetic Stirrer
        c.drawLabel(ctx, 'سحاحة (MnO₄⁻)', 82, 24, { color: '#c084fc', font: 'bold 11px monospace' });
        const burX = 115;
        const burY = 38;
        const burW = 24;
        const burH = 148;
        const usedRatio = V / 20.0;
        const colTop = burY + usedRatio * (burH - 12);

        // Purple liquid inside burette
        ctx.save();
        ctx.fillStyle = 'rgba(168, 85, 247, 0.85)';
        ctx.fillRect(burX + 2, colTop, burW - 4, burY + burH - colTop);
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.strokeRect(burX, burY, burW, burH);
        // Burette graduations
        ctx.strokeStyle = 'rgba(226,232,240,0.4)';
        ctx.lineWidth = 1;
        for (let g = 0; g <= 4; g++) {
          const gy = burY + (g / 4) * (burH - 12);
          ctx.beginPath();
          ctx.moveTo(burX, gy);
          ctx.lineTo(burX + 8, gy);
          ctx.stroke();
          c.drawLabel(ctx, `${g * 5}`, burX - 20, gy + 4, { color: '#94a3b8', font: '9px monospace' });
        }
        // Burette tip + purple drop when V > 0
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(burX + 9, burY + burH, 6, 16);
        if (V > 0.1 && V < 19.9) {
          ctx.fillStyle = '#c084fc';
          ctx.beginPath();
          ctx.arc(burX + 12, burY + burH + 26, 3.8, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        // Beaker color: before V_E -> faint pale green/yellow (Fe2+ -> Fe3+); after V_E -> persistent purple-pink
        let beakerFill;
        if (!atOrPastEq) {
          const prog = V / Ve;
          beakerFill = lerpColor([16, 185, 129, 0.18], [234, 179, 8, 0.22], prog);
        } else {
          const exc = Math.min(1, (V - Ve) / 5.0);
          beakerFill = lerpColor([192, 132, 252, 0.38], [147, 51, 234, 0.85], exc);
        }

        drawBeaker(ctx, 56, 224, 146, 118, Math.min(0.92, 0.45 + 0.35 * (V / 20)), beakerFill, atOrPastEq ? '#c084fc' : '#94a3b8');

        // Magnetic stirrer plate + spinning pill
        ctx.save();
        ctx.fillStyle = '#1e293b';
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(44, 344, 170, 22, 6);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#e2e8f0';
        ctx.beginPath();
        ctx.roundRect(114, 333, 28, 6, 3);
        ctx.fill();
        ctx.restore();

        c.drawLabel(
          ctx,
          atOrPastEq ? 'ثبات اللون الوردي-البنفسجي (V ≥ V_E)' : 'زوال فوري للون (V < V_E)',
          48,
          382,
          { color: atOrPastEq ? '#c084fc' : '#34d399', font: 'bold 11px Cairo, sans-serif' }
        );

        // Right side: Quantitative curves n(Fe2+) and n(MnO4-) vs V(mL)
        const plot = c.createPlane(W, H, { originX: 295, originY: 318, scaleX: 16.5, scaleY: 58 });
        c.drawGrid(ctx, plot, { xMin: 0, xMax: 20, xStep: 2, yMin: 0, yMax: 3.5, yStep: 0.5 });
        c.drawAxes(ctx, plot);
        for (let vk = 0; vk <= 20; vk += 4) {
          c.drawLabel(ctx, `${vk}`, plot.toPxX(vk) - 6, plot.originY + 16, { color: '#64748b', font: '10px monospace' });
        }
        c.drawLabel(ctx, 'V [mL]', plot.toPxX(20.2), plot.originY + 16, { color: '#94a3b8', font: 'bold 10px monospace' });
        c.drawLabel(ctx, 'تطور كميات المادة خلال المعايرة [mmol]', 300, 34, { color: '#c084fc', font: 'bold 12px monospace' });

        // n(Fe2+) curve (drops linearly from nFe0 to 0 at Ve, then 0)
        c.plotCurve(ctx, plot, (vv) => Math.max(0, nFe0 - 5 * C2 * vv), 0, 20, { color: '#34d399', lineWidth: 3 });
        // n(MnO4-) remaining in beaker curve (0 until Ve, then climbs with slope C2)
        c.plotCurve(ctx, plot, (vv) => Math.max(0, C2 * vv - nFe0 / 5), 0, 20, { color: '#c084fc', lineWidth: 3 });

        // Equivalence vertical marker
        c.drawLine(ctx, plot, Ve, 0, Ve, 3.3, { color: 'rgba(192,132,252,0.55)', dash: [5, 4] });
        c.drawPoint(ctx, plot, Ve, 0, { fill: '#c084fc', radius: 5.5 });
        c.drawLabel(ctx, `V_E=${Ve.toFixed(1)}`, plot.toPxX(Ve) - 22, plot.toPxY(3.4), { color: '#c084fc', font: 'bold 11px monospace' });

        // Current volume cursor V
        c.drawLine(ctx, plot, V, 0, V, 3.0, { color: 'rgba(34,211,238,0.45)', dash: [3, 3] });
        c.drawPoint(ctx, plot, V, nFeRem, { fill: '#34d399', radius: 5 });
        c.drawPoint(ctx, plot, V, nMnExc, { fill: '#c084fc', radius: 5 });

        const elVe = hostEl.querySelector('#cVal_ve');
        const elVadd = hostEl.querySelector('#cVal_vadd');
        const elNfe = hostEl.querySelector('#cVal_nfe');
        const elState = hostEl.querySelector('#cVal_eqstate');
        if (elVe) elVe.textContent = `${Ve.toFixed(1)} mL`;
        if (elVadd) elVadd.textContent = `${V.toFixed(1)} mL`;
        if (elNfe) elNfe.textContent = `${nFeRem.toFixed(2)} mmol`;
        if (elState) {
          if (Math.abs(V - Ve) <= 0.15) {
            elState.textContent = 'نقطة التكافؤ بالضبط (V = V_E)';
            elState.className = 'font-mono font-bold text-purple-300 text-xs';
          } else if (V < Ve) {
            elState.textContent = 'قبل التكافؤ (Fe²⁺ متبقٍ)';
            elState.className = 'font-mono font-bold text-emerald-300 text-xs';
          } else {
            elState.textContent = 'بعد التكافؤ (MnO₄⁻ في وفرة)';
            elState.className = 'font-mono font-bold text-rose-400 text-xs';
          }
        }
      } else {
        // Mode 4: Kinetics Factors (T, [I-]0) & Trempe Chimique
        const xMaxKin = 2.00;
        const T = state.kinTemp;
        const C0 = state.kinConc;
        const tCur = state.kinTime;
        const tQuench = state.kinTrempeAt;
        const isQuenched = tQuench !== null;

        const kRef = 0.14;
        const kCur = kRef * Math.exp(0.055 * (T - 25)) * (C0 / 0.15);
        const xAtTime = (tt) => {
          if (isQuenched && tt > tQuench) {
            return xMaxKin * (1 - Math.exp(-kCur * tQuench));
          }
          return xMaxKin * (1 - Math.exp(-kCur * tt));
        };
        const xVal = xAtTime(tCur);
        const tfEst = 3.0 / kCur; // 95% completion time ~ 3/k

        tempDisplay.textContent = isQuenched ? '0 °C (مسقي!)' : `${T} °C`;
        concDisplay.textContent = `${C0.toFixed(2)} mol/L`;
        timeDisplay.textContent = `t = ${tCur.toFixed(1)} min`;
        eqLabel.textContent = `x(t) = ${xVal.toFixed(2)} mmol  |  x_max = ${xMaxKin.toFixed(2)} mmol`;
        trempeBtn.textContent = isQuenched
          ? '🔥 إلغاء السقي الكيميائي والعودة للتفاعل'
          : '🧊 تطبيق السقي الكيميائي عند t الحالي (ماء مثلج 0°C)';

        // Left side: Kinetic beaker + Thermometer + molecular collisions
        const dispTemp = isQuenched ? 0 : T;
        c.drawLabel(ctx, isQuenched ? 'السقي الكيميائي (0°C + تخفيف)' : `مفاعل حركي (${T}°C)`, 48, 30, {
          color: isQuenched ? '#38bdf8' : '#fbbf24',
          font: 'bold 12px monospace'
        });

        // Thermometer bar on far left
        ctx.save();
        ctx.fillStyle = '#0f172a';
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.roundRect(28, 64, 14, 175, 7);
        ctx.fill();
        ctx.stroke();
        const thFrac = dispTemp / 60;
        const thH = Math.max(8, 165 * thFrac);
        ctx.fillStyle = isQuenched ? '#38bdf8' : (T >= 45 ? '#fb7185' : '#fbbf24');
        ctx.fillRect(31, 234 - thH, 8, thH);
        ctx.beginPath();
        ctx.arc(35, 244, 10, 0, Math.PI * 2);
        ctx.fill();
        c.drawLabel(ctx, `${dispTemp}°`, 24, 272, { color: isQuenched ? '#38bdf8' : '#f8fafc', font: 'bold 11px monospace' });
        ctx.restore();

        const liqFill = isQuenched
          ? 'rgba(56, 189, 248, 0.25)'
          : lerpColor([203, 213, 225, 0.14], [180, 83, 9, 0.84], xVal / xMaxKin);
        drawBeaker(ctx, 64, 70, 152, 188, isQuenched ? 0.90 : 0.65, liqFill, isQuenched ? '#38bdf8' : '#94a3b8');

        // Animated particles visualizing thermal agitation & concentration density
        const pCount = Math.round(6 + (C0 / 0.30) * 14);
        const speedMult = isQuenched ? 0.05 : (0.5 + (T / 25) * 1.4);
        ctx.save();
        for (let i = 0; i < pCount; i++) {
          const px = 78 + ((i * 37 + Math.round(tCur * 18 * speedMult)) % 124);
          const py = 135 + ((i * 53 + Math.round(tCur * 27 * speedMult)) % 112);
          ctx.fillStyle = i % 3 === 0 ? '#fbbf24' : '#22d3ee';
          ctx.beginPath();
          ctx.arc(px, py, isQuenched ? 2.4 : 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        c.drawLabel(
          ctx,
          isQuenched ? '❄️ التفاعل متوقف عند n_p ثابت' : `شدة I₂: ${Math.round((xVal / xMaxKin) * 100)}%`,
          66,
          286,
          { color: isQuenched ? '#38bdf8' : '#fbbf24', font: 'bold 11px Cairo, sans-serif' }
        );

        // Right side: x(t) plot vs t [0..30 min]
        const plot = c.createPlane(W, H, { originX: 280, originY: 315, scaleX: 11.8, scaleY: 96 });
        c.drawGrid(ctx, plot, { xMin: 0, xMax: 30, xStep: 5, yMin: 0, yMax: 2.4, yStep: 0.5 });
        c.drawAxes(ctx, plot);
        for (let tk = 0; tk <= 30; tk += 5) {
          c.drawLabel(ctx, `${tk}`, plot.toPxX(tk) - 6, plot.originY + 16, { color: '#64748b', font: '10px monospace' });
        }
        c.drawLabel(ctx, 't [min]', plot.toPxX(27.0), plot.originY + 32, { color: '#94a3b8', font: 'bold 10px monospace' });
        c.drawLabel(ctx, 'تطور التقدم x(t) [mmol] عند تغيير العوامل الحركية', 284, 30, { color: '#34d399', font: 'bold 12px monospace' });

        // Asymptote x_max = 2.00 mmol
        c.drawLine(ctx, plot, 0, xMaxKin, 30, xMaxKin, { color: '#34d399', dash: [6, 4] });
        c.drawLabel(ctx, 'x_max=2.0', plot.toPxX(0.3), plot.toPxY(xMaxKin) - 8, { color: '#34d399', font: 'bold 10px monospace' });

        // Baseline Ref curve (25°C, 0.15 mol/L)
        c.plotCurve(ctx, plot, (tt) => xMaxKin * (1 - Math.exp(-kRef * tt)), 0, 30, { color: 'rgba(148,163,184,0.45)', lineWidth: 2, dash: [4, 4] });

        // Active Kinetic Curve
        const actColor = isQuenched ? '#38bdf8' : (T > 25 || C0 > 0.15 ? '#fb7185' : '#fbbf24');
        c.plotCurve(ctx, plot, xAtTime, 0, 30, { color: actColor, lineWidth: 3 });

        if (isQuenched) {
          const xq = xAtTime(tQuench);
          c.drawLine(ctx, plot, tQuench, 0, tQuench, 2.3, { color: 'rgba(56,189,248,0.55)', dash: [4, 3] });
          c.drawPoint(ctx, plot, tQuench, xq, { fill: '#38bdf8', radius: 5.5 });
          c.drawLabel(ctx, `Trempe t=${tQuench.toFixed(1)}`, plot.toPxX(Math.min(22, tQuench)) + 4, plot.toPxY(xq) - 10, { color: '#38bdf8', font: 'bold 10px monospace' });
        }

        // Time marker cursor
        c.drawLine(ctx, plot, tCur, 0, tCur, xVal, { color: 'rgba(251,191,36,0.45)', dash: [3, 3] });
        c.drawPoint(ctx, plot, tCur, xVal, { fill: '#f8fafc', radius: 5 });

        const elKxmax = hostEl.querySelector('#cVal_k_xmax');
        const elKx = hostEl.querySelector('#cVal_kx');
        const elKtf = hostEl.querySelector('#cVal_ktf');
        const elKstate = hostEl.querySelector('#cVal_kstate');
        if (elKxmax) elKxmax.textContent = `${xMaxKin.toFixed(2)} mmol`;
        if (elKx) elKx.textContent = `${xVal.toFixed(2)} mmol`;
        if (elKtf) elKtf.textContent = isQuenched ? 'موقوف ∞' : `${tfEst.toFixed(1)} min`;
        if (elKstate) {
          elKstate.textContent = isQuenched
            ? `السقي مفعّل عند t = ${tQuench.toFixed(1)} min`
            : (kCur > kRef * 1.15 ? 'متسارع مقارنة بالمرجع' : (kCur < kRef * 0.85 ? 'مُبطّأ مقارنة بالمرجع' : 'سرعة مرجعية'));
          elKstate.className = isQuenched ? 'font-mono font-bold text-sky-300 text-xs' : 'font-mono font-bold text-rose-300 text-xs';
        }
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

      if (state.mode === 'dosage-redox') {
        state.dosageV += dt * 4.5;
        if (state.dosageV >= 20.0) {
          state.dosageV = 20.0;
          dosageVSlider.value = '20.0';
          drawFrame();
          stopAnim();
          return;
        }
        dosageVSlider.value = state.dosageV.toFixed(1);
        drawFrame();
      } else if (state.mode === 'kinetics-factors') {
        state.kinTime += dt * 5.0;
        if (state.kinTime >= 30.0) {
          state.kinTime = 30.0;
          timeSlider.value = '30.0';
          drawFrame();
          stopAnim();
          return;
        }
        timeSlider.value = state.kinTime.toFixed(1);
        drawFrame();
      } else {
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
      }
      state.rafId = global.requestAnimationFrame(stepAnim);
    }

    function startAnim() {
      if (state.mode === 'dosage-redox' && state.dosageV >= 19.8) state.dosageV = 0.0;
      else if (state.mode === 'kinetics-factors' && state.kinTime >= 29.8) state.kinTime = 0.0;
      else if (state.mode !== 'dosage-redox' && state.mode !== 'kinetics-factors' && state.progFrac >= 0.99) state.progFrac = 0.0;
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

      rxnSub.classList.add('hidden');
      progWrap.classList.remove('hidden');
      redoxSliders.classList.add('hidden');
      metalSliders.classList.add('hidden');
      dosageSliders.classList.add('hidden');
      kinSliders.classList.add('hidden');

      if (mode === 'redox-beaker') {
        rxnSub.classList.remove('hidden');
        redoxSliders.classList.remove('hidden');
      } else if (mode === 'metal-acid') {
        metalSliders.classList.remove('hidden');
      } else if (mode === 'dosage-redox') {
        progWrap.classList.add('hidden');
        dosageSliders.classList.remove('hidden');
      } else {
        progWrap.classList.add('hidden');
        kinSliders.classList.remove('hidden');
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
      if (state.mode === 'dosage-redox') {
        state.dosageV = 0.0;
        dosageVSlider.value = '0.0';
      } else if (state.mode === 'kinetics-factors') {
        state.kinTime = 0.0;
        state.kinTrempeAt = null;
        timeSlider.value = '0.0';
      } else {
        state.progFrac = 0.0;
        progSlider.value = '0.00';
      }
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

    dosageVSlider.addEventListener('input', () => {
      stopAnim();
      state.dosageV = parseFloat(dosageVSlider.value);
      drawFrame();
    });

    dosageC1Slider.addEventListener('input', () => {
      state.dosageC1 = parseFloat(dosageC1Slider.value);
      drawFrame();
    });

    tempSlider.addEventListener('input', () => {
      state.kinTemp = parseFloat(tempSlider.value);
      drawFrame();
    });

    concSlider.addEventListener('input', () => {
      state.kinConc = parseFloat(concSlider.value);
      drawFrame();
    });

    timeSlider.addEventListener('input', () => {
      stopAnim();
      state.kinTime = parseFloat(timeSlider.value);
      drawFrame();
    });

    trempeBtn.addEventListener('click', () => {
      stopAnim();
      state.kinTrempeAt = state.kinTrempeAt === null ? state.kinTime : null;
      drawFrame();
    });

    hostEl._chemSimApi = { setChemMode, setRxn, drawFrame };
    api.renderMath(hostEl);
    setChemMode('redox-beaker');
  }

  global.EulerAcademy.registerSimulator('chem-01', { mount });
})(window);
