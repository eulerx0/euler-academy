/**
 * Euler Academy — Interactive 3-Mode Wave Laboratory for Physics Lesson 01
 * (Onde transversale, Onde longitudinale sur ressort, Superposition d'ondes)
 */
(function (global) {
  'use strict';

  const C = () => global.EulerCanvas;

  const MODES_META = [
    { id: 'transverse', label: '1. موجة مستعرضة (انتقال الطاقة)', activeCls: 'bg-cyan-500 text-slate-950 shadow' },
    { id: 'longitudinal', label: '2. موجة طولية (نابض وانضغاط)', activeCls: 'bg-amber-500 text-slate-950 shadow' },
    { id: 'superposition', label: '3. تراكب موجتين متقابلتين', activeCls: 'bg-purple-500 text-slate-950 shadow' }
  ];

  // Smooth compact-support pulse in [ -halfW, +halfW ]
  function pulseShape(u, halfW) {
    if (Math.abs(u) >= halfW) return 0;
    return 0.5 * (1 + Math.cos((Math.PI * u) / halfW));
  }

  function pulseDeriv(u, halfW) {
    if (Math.abs(u) >= halfW) return 0;
    return -0.5 * (Math.PI / halfW) * Math.sin((Math.PI * u) / halfW);
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
      mode: 'transverse',
      t: 1.65,
      v: 2.0,
      superOpposite: true,
      playing: false,
      lastFrameTs: 0,
      rafId: null
    };

    hostEl.innerHTML = `
      <div class="glass rounded-3xl p-6 sm:p-8 border border-amber-500/30">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                المختبر البصري التفاعلي • الفيزياء الدرس 01
              </span>
              <span class="text-xs text-slate-400 font-mono">Simulateur d’Ondes Mécaniques</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">
              محاكي انتشار الموجات الميكانيكية (المستعرضة، الطولية، وتراكب موجتين)
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800">
            ${MODES_META.map((m) => `
              <button type="button" data-phys-mode="${m.id}" class="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <div id="physSuperSub" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80">
          <span class="text-xs text-slate-400 font-semibold px-2">قطبية التشويهين المتقابلين:</span>
          <button type="button" data-super-polar="opposite" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-500 text-slate-950 transition">
            متعاكسان ($+2\\text{ cm}$ و $-2\\text{ cm}$ — إلغاء لحظي)
          </button>
          <button type="button" data-super-polar="same" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">
            بنفس الإشارة ($+2\\text{ cm}$ و $+2\\text{ cm}$ — تضاعف الوسع)
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-4">
            <div id="physSimLegend" class="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-3 gap-2"></div>
            <canvas id="physWaveCanvas" width="680" height="390" class="w-full h-auto rounded-xl bg-[#050811] border border-slate-800/90"></canvas>

            <div class="mt-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                <div class="flex items-center gap-2">
                  <button type="button" id="physPlayBtn" class="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition">
                    ▶ تشغيل الانتشار
                  </button>
                  <button type="button" id="physResetBtn" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition">
                    ↺ إعادة ($t = 0$)
                  </button>
                </div>
                <span class="text-[11px] text-slate-400">نقطة المراقبة الثابتة: <b class="text-emerald-300 font-mono" dir="ltr">x_M = 3.00 m</b></span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">اللحظة الزمنية $t$:</span>
                    <span id="physTimeDisplay" class="font-mono text-cyan-300" dir="ltr">t = 1.65 s</span>
                  </div>
                  <input id="physTimeSlider" type="range" min="0.0" max="3.0" step="0.01" value="1.65" class="w-full accent-cyan-400 cursor-pointer" />
                </div>
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">سرعة الانتشار $v$:</span>
                    <span id="physSpeedDisplay" class="font-mono text-amber-300" dir="ltr">v = 2.0 m/s</span>
                  </div>
                  <input id="physSpeedSlider" type="range" min="1.0" max="3.5" step="0.1" value="2.0" class="w-full accent-amber-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-4">
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
              <h4 class="text-sm font-bold text-amber-400 mb-3">🌊 التحليل الفيزيائي والحركي اللحظي</h4>
              <div id="physMetricsGrid" class="grid grid-cols-2 gap-3 text-xs mb-4"></div>
              <div id="physStatusBanner" class="mb-3"></div>
              <div id="physRuleBox" class="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    const canvas = hostEl.querySelector('#physWaveCanvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const superSub = hostEl.querySelector('#physSuperSub');
    const legend = hostEl.querySelector('#physSimLegend');
    const metricsGrid = hostEl.querySelector('#physMetricsGrid');
    const statusBanner = hostEl.querySelector('#physStatusBanner');
    const ruleBox = hostEl.querySelector('#physRuleBox');

    const timeSlider = hostEl.querySelector('#physTimeSlider');
    const speedSlider = hostEl.querySelector('#physSpeedSlider');
    const timeDisplay = hostEl.querySelector('#physTimeDisplay');
    const speedDisplay = hostEl.querySelector('#physSpeedDisplay');
    const playBtn = hostEl.querySelector('#physPlayBtn');
    const resetBtn = hostEl.querySelector('#physResetBtn');

    function syncStaticModeChrome() {
      if (state.mode === 'transverse') {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-cyan-400 inline-block"></span> الحبل المشدود</span>
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span> النقطة $M$ ($x_M=3\\text{ m}$)</span>
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span> الجبهة $F$</span>
          </div>
          <span class="text-cyan-300 font-semibold">تشويه عمودي $\\perp$ على الانتشار</span>
        `;

        metricsGrid.innerHTML = [
          metricCard('اللحظة $t$:', 'mVal_t', '1.65 s', 'text-cyan-300'),
          metricCard('جبهة الموجة $x_F = v \\cdot t$:', 'mVal_xf', '3.30 m', 'text-amber-300'),
          metricCard('استطالة النقطة $y_M(t)$:', 'mVal_ym', '+1.36 cm', 'text-emerald-400'),
          metricCard('حالة حركة $M$:', 'mVal_dir', 'صاعدة ↑', 'text-emerald-300')
        ].join('');

        statusBanner.innerHTML = `
          <div class="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-2">
            <span>⚡</span> <span>تتحرك النقطة $M$ عمودياً في أفصولها الثابت $x_M=3\\text{ m}$ فقط: انتقال للطاقة دون المادة.</span>
          </div>
        `;

        ruleBox.innerHTML = `
          <b>الملاحظة التجريبية الحاسمة (الامتحان الوطني):</b><br/>
          • قبل وصول الجبهة $F$ إلى $x_M = 3\\text{ m}$ (أي $t < \\tau = \\frac{3}{v}$)، تظل النقطة $M$ في سكون ($y_M = 0$).<br/>
          • عند مرور الجبهة على $M$، تصعد النقطة عمودياً نحو الأعلى ثم تعود نحو الأسفل لتستقر في موضعها الأصلي دون أي انزياح أفقي!<br/>
          • لاحظ كيف يتطابق سهم حركة $M$ في اللحظة المختارة مع <b>تقنية الإزاحة الزمنية</b> ($t \\to t + \\delta t$).
        `;
      } else if (state.mode === 'longitudinal') {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-amber-400 inline-block"></span> منطقة انضغاط</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-cyan-400 inline-block"></span> منطقة تمدد</span>
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block"></span> اللفة $M$</span>
          </div>
          <span class="text-amber-300 font-semibold">تشويه موازٍ $\\parallel$ للانتشار</span>
        `;

        metricsGrid.innerHTML = [
          metricCard('اللحظة $t$:', 'mVal_t', '1.65 s', 'text-amber-300'),
          metricCard('موضع الجبهة $x_F$:', 'mVal_xf', '3.30 m', 'text-cyan-300'),
          metricCard('انزياح اللفة $u_M(t)$:', 'mVal_ym', '+12.0 cm', 'text-emerald-400'),
          metricCard('منحى حركة اللفة $M$:', 'mVal_dir', 'ذهاباً →', 'text-amber-300')
        ].join('');

        statusBanner.innerHTML = `
          <div class="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-2">
            <span>〰️</span> <span>انضغاط (تجمع اللفات بالأصفر) وتمدد (تباعدها بالأزرق) وفق محور الانتشار نفسه.</span>
          </div>
        `;

        ruleBox.innerHTML = `
          <b>تحليل الموجة الطولية على النابض (أو الصوت في الهواء):</b><br/>
          • تهتز اللفة الحمراء $M$ (أو جزيئة الهواء) <b>ذهاباً وإياباً على نفس استقامة الانتشار</b>، ثم تعود لتستقر في موضع توازنها $x_M = 3.00\\text{ m}$.<br/>
          • يُظهر المنحنى السفلي دالة الانزياح الأفقي $u(x,t)$: حيث ينحدر المنحنى تتقارب اللفات (<b>انضغاط</b>)، وحيث يصعد تتباعد اللفات (<b>تمدد</b>).
        `;
      } else {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-cyan-400 inline-block"></span> الموجة 1 ($\\rightarrow$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-amber-400 inline-block"></span> الموجة 2 ($\\leftarrow$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-emerald-400 inline-block"></span> المحصلة $y = y_1 + y_2$</span>
          </div>
          <span class="text-purple-300 font-semibold">تراكب جبري ثم استقلالية تامة</span>
        `;

        metricsGrid.innerHTML = [
          metricCard('اللحظة $t$:', 'mVal_t', '1.20 s', 'text-purple-300'),
          metricCard('استطالة الأولى $y_1$:', 'mVal_y1', '0.00 cm', 'text-cyan-300'),
          metricCard('استطالة الثانية $y_2$:', 'mVal_y2', '0.00 cm', 'text-amber-300'),
          metricCard('المحصلة $y_1 + y_2$:', 'mVal_ytot', '0.00 cm', 'text-emerald-400')
        ].join('');

        statusBanner.innerHTML = `
          <div class="p-3 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-2">
            <span>✨</span> <span>أثناء التقاطع: $y(x,t) = y_1 + y_2$، وبعد التلاقي تعود كل موجة كما كانت دون أدنى تشوه!</span>
          </div>
        `;

        ruleBox.innerHTML = `
          <b>مبدأ التراكب والاستقلالية في الموجات الميكانيكية:</b><br/>
          • جرب وضع <b>التشويهين المتعاكسين</b> وأوقف المحاكي قرب لحظة التطابق التام $t_c = \\frac{2.4}{v}$: سيبدو الحبل لحظياً أفقياً تماماً ($y_{\\text{tot}} = 0$)، لكن نقط المنتصف تملك طاقة حركية غير منعدمة تجعل الموجتين تواصلان مسارهما بعد الالتقاء!<br/>
          • جرب وضع <b>بنفس الإشارة</b> لملاحظة تضاعف الوسع ($+4\\text{ cm}$) لحظة الالتقاء.
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

      const t = state.t;
      const v = state.v;
      timeDisplay.textContent = `t = ${t.toFixed(2)} s`;
      speedDisplay.textContent = `v = ${v.toFixed(1)} m/s`;

      if (state.mode === 'transverse') {
        const halfW = 0.65;
        const amp = 2.2;
        const xF = v * t;
        const xCenter = xF - halfW;
        const xQ = xCenter - halfW;
        const xM = 3.0;

        const plane = c.createPlane(W, H, { originX: 56, originY: 255, scaleX: 95, scaleY: 62 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 6, xStep: 0.5, yMin: -1, yMax: 3, yStep: 1 });
        c.drawAxes(ctx, plane);

        // X Axis ticks
        for (let i = 0; i <= 6; i++) {
          c.drawLabel(ctx, `${i}m`, plane.toPxX(i) - 8, plane.originY + 18, { color: '#64748b', font: '11px monospace' });
        }

        // Fixed equilibrium dashed guide for M
        c.drawLine(ctx, plane, xM, -0.8, xM, 2.6, { color: 'rgba(52, 211, 153, 0.35)', dash: [4, 4] });
        c.drawLabel(ctx, 'M_eq (3.0m)', plane.toPxX(xM) - 34, plane.toPxY(-0.95), { color: '#34d399', font: 'bold 11px monospace' });

        // Plot rope curve
        const fTrans = (x) => amp * pulseShape(x - xCenter, halfW);
        c.plotCurve(ctx, plane, fTrans, 0, 6.0, { color: '#22d3ee', lineWidth: 3.5 });

        // Front F and Queue Q markers
        if (xF >= 0 && xF <= 6.0) {
          c.drawPoint(ctx, plane, xF, 0, { fill: '#fbbf24', radius: 5 });
          c.drawLabel(ctx, `F(${xF.toFixed(2)}m)`, plane.toPxX(xF) + 6, plane.originY - 8, { color: '#fbbf24' });
        }
        if (xQ >= 0 && xQ <= 6.0) {
          c.drawPoint(ctx, plane, xQ, 0, { fill: '#94a3b8', radius: 4.5 });
          c.drawLabel(ctx, 'Q', plane.toPxX(xQ) - 14, plane.originY - 8, { color: '#94a3b8' });
        }

        // Particle M and vertical velocity arrow
        const yM = fTrans(xM);
        const slopeX = amp * pulseDeriv(xM - xCenter, halfW);
        const vySign = -v * slopeX; // dy_M / dt = -v * dy / dx

        if (Math.abs(vySign) > 0.15) {
          const arrowDir = vySign > 0 ? 0.65 : -0.65;
          const arrowCol = vySign > 0 ? '#34d399' : '#fb7185';
          c.drawHalfTangentArrow(ctx, plane, xM, yM, xM, yM + arrowDir, arrowCol);
        }
        c.drawPoint(ctx, plane, xM, yM, { fill: '#34d399', radius: 7 });
        c.drawLabel(ctx, `M(3.0, ${yM.toFixed(2)})`, plane.toPxX(xM) + 10, plane.toPxY(yM) - 8, { color: '#34d399' });

        // Propagation velocity vector at top
        c.drawHalfTangentArrow(ctx, plane, 4.3, 2.8, 5.5, 2.8, '#fbbf24');
        c.drawLabel(ctx, `v = ${v.toFixed(1)} m/s`, plane.toPxX(4.45), plane.toPxY(2.96), { color: '#fbbf24' });

        // Update telemetry text only
        const elT = hostEl.querySelector('#mVal_t');
        const elXf = hostEl.querySelector('#mVal_xf');
        const elYm = hostEl.querySelector('#mVal_ym');
        const elDir = hostEl.querySelector('#mVal_dir');
        if (elT) elT.textContent = `${t.toFixed(2)} s`;
        if (elXf) elXf.textContent = `${xF.toFixed(2)} m`;
        if (elYm) elYm.textContent = `+${yM.toFixed(2)} cm`;
        if (elDir) {
          if (vySign > 0.15) {
            elDir.textContent = 'صاعدة للأعلى ↑';
            elDir.className = 'font-mono font-bold text-emerald-400 text-sm';
          } else if (vySign < -0.15) {
            elDir.textContent = 'نازلة للأسفل ↓';
            elDir.className = 'font-mono font-bold text-rose-400 text-sm';
          } else {
            elDir.textContent = yM > 0.5 ? 'الذروة (سكون لحظي)' : 'في سكون (y=0)';
            elDir.className = 'font-mono font-bold text-slate-300 text-xs';
          }
        }
      } else if (state.mode === 'longitudinal') {
        const halfW = 0.72;
        const ampU = 0.18; // max horizontal displacement in meters
        const xF = v * t;
        const xCenter = xF - halfW;
        const xM = 3.0;

        // Top spring box & bottom u(x) graph box
        const springPlane = c.createPlane(W, H, { originX: 56, originY: 120, scaleX: 95, scaleY: 45 });
        const plotPlane = c.createPlane(W, H, { originX: 56, originY: 318, scaleX: 95, scaleY: 310 });

        c.drawGrid(ctx, plotPlane, { xMin: 0, xMax: 6, xStep: 0.5, yMin: -0.05, yMax: 0.25, yStep: 0.1 });
        c.drawAxes(ctx, plotPlane);
        for (let i = 0; i <= 6; i++) {
          c.drawLabel(ctx, `${i}m`, plotPlane.toPxX(i) - 8, plotPlane.originY + 18, { color: '#64748b', font: '11px monospace' });
        }

        // Fixed equilibrium reference line across both spring & plot
        c.drawLine(ctx, springPlane, xM, -1.8, xM, 5.0, { color: 'rgba(244, 63, 94, 0.35)', dash: [4, 4] });
        c.drawLabel(ctx, 'x_M = 3.0m', springPlane.toPxX(xM) - 30, 32, { color: '#fb7185', font: 'bold 11px monospace' });

        // Render slinky spring turns smoothly with Compression & Dilatation coloring
        const nTurns = 44;
        const stepsPerTurn = 16;
        const uFn = (x0) => ampU * pulseShape(x0 - xCenter, halfW);

        for (let k = 0; k < nTurns; k++) {
          const xStart = (k / nTurns) * 6.0;
          const xEnd = ((k + 1) / nTurns) * 6.0;
          const xMid = 0.5 * (xStart + xEnd);
          const duDx = ampU * pulseDeriv(xMid - xCenter, halfW);
          let coilColor = '#94a3b8';
          if (duDx < -0.06) coilColor = '#fbbf24'; // Compression
          else if (duDx > 0.06) coilColor = '#22d3ee'; // Dilatation

          ctx.save();
          ctx.strokeStyle = k === 22 ? '#fb7185' : coilColor;
          ctx.lineWidth = k === 22 ? 3.2 : 2.0;
          ctx.beginPath();
          for (let s = 0; s <= stepsPerTurn; s++) {
            const frac = (k + s / stepsPerTurn) / nTurns;
            const x0 = frac * 6.0;
            const xActual = x0 + uFn(x0);
            const theta = frac * nTurns * 2 * Math.PI;
            const px = springPlane.toPxX(xActual) + 5 * Math.cos(theta);
            const py = springPlane.originY + 26 * Math.sin(theta);
            if (s === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();
          ctx.restore();
        }

        // Target coil marker M (turn k=22 at x0 = 3.0m)
        const uM = uFn(xM);
        const xMActual = xM + uM;
        c.drawPoint(ctx, springPlane, xMActual, 0, { fill: '#fb7185', radius: 6 });

        // Plot longitudinal displacement curve u(x) at bottom
        c.drawLabel(ctx, 'u(x, t) [m]', plotPlane.originX + 8, plotPlane.originY - 115, { color: '#94a3b8' });
        c.plotCurve(ctx, plotPlane, uFn, 0, 6.0, { color: '#fbbf24', lineWidth: 3 });
        c.drawPoint(ctx, plotPlane, xM, uM, { fill: '#fb7185', radius: 5.5 });

        const vuSign = -v * ampU * pulseDeriv(xM - xCenter, halfW);
        const elT = hostEl.querySelector('#mVal_t');
        const elXf = hostEl.querySelector('#mVal_xf');
        const elYm = hostEl.querySelector('#mVal_ym');
        const elDir = hostEl.querySelector('#mVal_dir');
        if (elT) elT.textContent = `${t.toFixed(2)} s`;
        if (elXf) elXf.textContent = `${xF.toFixed(2)} m`;
        if (elYm) elYm.textContent = `+${(uM * 100).toFixed(1)} cm`;
        if (elDir) {
          if (vuSign > 0.03) {
            elDir.textContent = 'تنزاح يميناً →';
            elDir.className = 'font-mono font-bold text-amber-300 text-sm';
          } else if (vuSign < -0.03) {
            elDir.textContent = 'تعود يساراً ←';
            elDir.className = 'font-mono font-bold text-cyan-300 text-sm';
          } else {
            elDir.textContent = 'في موضعها الأصلي';
            elDir.className = 'font-mono font-bold text-slate-300 text-xs';
          }
        }
      } else {
        // Mode 3: Superposition of two opposing pulses
        const halfW = 0.60;
        const amp = 2.0;
        const x1c = 0.6 + v * t;
        const x2c = 5.4 - v * t;
        const sign2 = state.superOpposite ? -1 : 1;

        const y1Fn = (x) => amp * pulseShape(x - x1c, halfW);
        const y2Fn = (x) => sign2 * amp * pulseShape(x - x2c, halfW);
        const yTotFn = (x) => y1Fn(x) + y2Fn(x);

        const plane = c.createPlane(W, H, { originX: 56, originY: 225, scaleX: 95, scaleY: 38 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 6, xStep: 0.5, yMin: -3, yMax: 5, yStep: 1 });
        c.drawAxes(ctx, plane);
        for (let i = 0; i <= 6; i++) {
          c.drawLabel(ctx, `${i}m`, plane.toPxX(i) - 8, plane.originY + 18, { color: '#64748b', font: '11px monospace' });
        }

        // Ghost component waves
        c.plotCurve(ctx, plane, y1Fn, 0, 6.0, { color: 'rgba(34, 211, 238, 0.55)', lineWidth: 2, dash: [5, 4] });
        c.plotCurve(ctx, plane, y2Fn, 0, 6.0, { color: 'rgba(251, 191, 36, 0.55)', lineWidth: 2, dash: [5, 4] });

        // Solid net string
        c.plotCurve(ctx, plane, yTotFn, 0, 6.0, { color: '#34d399', lineWidth: 3.8 });

        // Direction arrows above centers if inside [0, 6]
        if (x1c >= 0.4 && x1c <= 5.6) {
          c.drawHalfTangentArrow(ctx, plane, x1c - 0.35, 2.35, x1c + 0.35, 2.35, '#22d3ee');
        }
        if (x2c >= 0.4 && x2c <= 5.6) {
          c.drawHalfTangentArrow(ctx, plane, x2c + 0.35, sign2 > 0 ? 2.85 : -2.35, x2c - 0.35, sign2 > 0 ? 2.85 : -2.35, '#fbbf24');
        }

        const y1M = y1Fn(3.0);
        const y2M = y2Fn(3.0);
        const yTotM = y1M + y2M;
        c.drawPoint(ctx, plane, 3.0, yTotM, { fill: '#34d399', radius: 6 });

        const elT = hostEl.querySelector('#mVal_t');
        const elY1 = hostEl.querySelector('#mVal_y1');
        const elY2 = hostEl.querySelector('#mVal_y2');
        const elTot = hostEl.querySelector('#mVal_ytot');
        if (elT) elT.textContent = `${t.toFixed(2)} s`;
        if (elY1) elY1.textContent = `${y1M >= 0 ? '+' : ''}${y1M.toFixed(2)} cm`;
        if (elY2) elY2.textContent = `${y2M >= 0 ? '+' : ''}${y2M.toFixed(2)} cm`;
        if (elTot) elTot.textContent = `${yTotM >= 0 ? '+' : ''}${yTotM.toFixed(2)} cm`;
      }
    }

    function stopAnim() {
      state.playing = false;
      if (state.rafId != null) {
        global.cancelAnimationFrame(state.rafId);
        state.rafId = null;
      }
      playBtn.textContent = '▶ تشغيل الانتشار';
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

      const maxT = parseFloat(timeSlider.max);
      state.t += dt * 0.75;
      if (state.t > maxT) state.t = 0;
      timeSlider.value = state.t.toFixed(2);
      drawFrame();
      state.rafId = global.requestAnimationFrame(stepAnim);
    }

    function startAnim() {
      state.playing = true;
      state.lastFrameTs = 0;
      playBtn.textContent = '⏸ إيقاف مؤقت';
      playBtn.className = 'px-3.5 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 text-xs font-extrabold transition';
      state.rafId = global.requestAnimationFrame(stepAnim);
    }

    function setPhysMode(mode) {
      stopAnim();
      state.mode = mode;

      hostEl.querySelectorAll('[data-phys-mode]').forEach((btn) => {
        const meta = MODES_META.find((m) => m.id === btn.dataset.physMode);
        btn.className = btn.dataset.physMode === mode && meta
          ? `px-3.5 py-2 rounded-xl text-xs font-bold ${meta.activeCls} transition`
          : 'px-3.5 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition';
      });

      if (mode === 'superposition') {
        superSub.classList.remove('hidden');
        timeSlider.max = '2.5';
        state.t = 1.20;
        timeSlider.value = '1.20';
      } else {
        superSub.classList.add('hidden');
        timeSlider.max = '3.2';
        state.t = 1.65;
        timeSlider.value = '1.65';
      }

      syncStaticModeChrome();
      drawFrame();
    }

    function setSuperPolarity(isOpposite) {
      state.superOpposite = isOpposite;
      hostEl.querySelectorAll('[data-super-polar]').forEach((btn) => {
        const active = (btn.dataset.superPolar === 'opposite') === isOpposite;
        btn.className = active
          ? 'px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-500 text-slate-950 transition'
          : 'px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition';
      });
      drawFrame();
    }

    hostEl.addEventListener('click', (e) => {
      const mBtn = e.target.closest('[data-phys-mode]');
      if (mBtn) return setPhysMode(mBtn.dataset.physMode);
      const sBtn = e.target.closest('[data-super-polar]');
      if (sBtn) return setSuperPolarity(sBtn.dataset.superPolar === 'opposite');
    });

    playBtn.addEventListener('click', () => {
      if (state.playing) stopAnim();
      else startAnim();
    });

    resetBtn.addEventListener('click', () => {
      stopAnim();
      state.t = 0;
      timeSlider.value = '0.00';
      drawFrame();
    });

    timeSlider.addEventListener('input', () => {
      stopAnim();
      state.t = parseFloat(timeSlider.value);
      drawFrame();
    });

    speedSlider.addEventListener('input', () => {
      state.v = parseFloat(speedSlider.value);
      drawFrame();
    });

    hostEl._physSimApi = { setPhysMode, setSuperPolarity, drawFrame };
    api.renderMath(hostEl);
    setPhysMode('transverse');
  }

  global.EulerAcademy.registerSimulator('phys-01', { mount });
})(window);
