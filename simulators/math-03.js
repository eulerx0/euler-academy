/**
 * Euler Academy — Interactive 4-Mode Visual Laboratory for Math Lesson 03
 * (1. Suite récurrente u_{n+1} = f(u_n) & Cobweb, 2. Suite géométrique q^n,
 *  3. Théorème des gendarmes / Squeeze, 4. Inégalité de contraction |u_{n+1}-ℓ| <= k|u_n-ℓ|)
 */
(function (global) {
  'use strict';

  const C = () => global.EulerCanvas;

  const MODES_META = [
    { id: 'cobweb', label: '1. سلم الترجعية $u_{n+1}=f(u_n)$', activeCls: 'bg-cyan-500 text-slate-950 shadow' },
    { id: 'geometric', label: '2. نهاية $(q^n)$ حسب $q$', activeCls: 'bg-amber-500 text-slate-950 shadow' },
    { id: 'squeeze', label: '3. مصداق الدركيين (الحصر)', activeCls: 'bg-emerald-500 text-slate-950 shadow' },
    { id: 'contraction', label: '4. متراجحة التقارب الأسي $k^n$', activeCls: 'bg-purple-500 text-slate-950 shadow' }
  ];

  const COBWEB_PRESETS = [
    {
      id: 'monotone-root',
      btnText: 'تقارب رتيب $\\sqrt{x+2}$',
      f: (x) => (x + 2 >= 0 ? Math.sqrt(x + 2) : NaN),
      xMin: -1.8,
      xMax: 4.6,
      defaultU0: 0.25,
      fixedPoint: 2,
      formulaTex: '$f(x) = \\sqrt{x + 2}$',
      ruleHtml: '<b>قراءة هندسية فورية:</b> بما أن $f$ تزايدية على $[-2, +\\infty[$ و $f([0, 2]) \\subset [0, 2]$، فإن $(u_n)$ محصورة وتزايدية نحو $\\ell = 2$ إذا كان $u_0 \\lt 2$، وتناقصية نحو $2$ إذا كان $u_0 \\gt 2$.'
    },
    {
      id: 'spiral-homo',
      btnText: 'تقارب متناوب $\\frac{6}{x+1}$',
      f: (x) => (x + 1 > 0.1 ? 6 / (x + 1) : NaN),
      xMin: 0.2,
      xMax: 4.5,
      defaultU0: 0.45,
      fixedPoint: 2,
      formulaTex: '$f(x) = \\frac{6}{x + 1}$',
      ruleHtml: '<b>انتبه للرتابة!</b> هنا $f$ <b>تناقصية</b> على $]0, +\\infty[$، لذا تنعكس خطوات الرسم بين يمين ويسار $\\ell = 2$ (حلزون متقارب) وليست المتتالية رتيبة!'
    },
    {
      id: 'stability-basin',
      btnText: 'شرط الاستقرار $\\frac{1}{2}(x^2+1)$',
      f: (x) => 0.5 * (x * x + 1),
      xMin: 0.0,
      xMax: 2.2,
      defaultU0: 0.25,
      fixedPoint: 1,
      formulaTex: '$f(x) = \\frac{1}{2}(x^2 + 1)$',
      ruleHtml: '<b>درس في استقرار المجال $f(I)\\subset I$:</b> لكل $u_0 \\in [0, 1]$ تقترب المتتالية إلى $\\ell = 1$، أما إذا تجاوزت $u_0 \\gt 1$ فإنها تهرب نحو $+\\infty$!'
    }
  ];

  const GEOM_PRESETS = [
    { q: 1.22, btnText: '$q = 1.22 \\gt 1$' },
    { q: 1.00, btnText: '$q = 1$' },
    { q: 0.78, btnText: '$|q| = 0.78 \\lt 1$' },
    { q: -0.78, btnText: '$q = -0.78$ (متناوبة)' },
    { q: -1.12, btnText: '$q = -1.12 \\le -1$' }
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
      mode: 'cobweb',
      cobIdx: 0,
      u0: 0.25,
      qVal: 0.78,
      squeezeN: 10,
      kVal: 0.62,
      playing: false,
      lastTs: 0,
      rafId: null
    };

    hostEl.innerHTML = `
      <div class="glass rounded-3xl p-5 sm:p-8 border border-cyan-500/30">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                المختبر البصري التفاعلي • الرياضيات الدرس 03
              </span>
              <span class="text-xs text-slate-400 font-mono">Simulateur des Suites Numériques (4 Modes)</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">
              محاكي سلم المتتالية الترجعية، سلوك $(q^n)$، مصداق الدركيين، والتقارب الهندسي
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800">
            ${MODES_META.map((m) => `
              <button type="button" data-m3-mode="${m.id}" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <div id="m3SubBar" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-4">
            <div id="m3Legend" class="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-3 gap-2"></div>
            <canvas id="m3Canvas" width="680" height="390" class="w-full h-auto rounded-xl bg-[#050811] border border-slate-800/90"></canvas>

            <div class="mt-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                <div class="flex items-center gap-2">
                  <button type="button" id="m3PlayBtn" class="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-extrabold transition">
                    ▶ تحريك تلقائي
                  </button>
                  <button type="button" id="m3ResetBtn" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition">
                    ↺ ضبط افتراضي
                  </button>
                </div>
                <span id="m3StatusEq" class="text-[11px] text-cyan-300 font-mono" dir="ltr">u0 = 0.25</span>
              </div>

              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span id="m3SliderLabel" class="text-slate-300">الحد البدئي $u_0$:</span>
                  <span id="m3SliderVal" class="font-mono text-cyan-300" dir="ltr">0.25</span>
                </div>
                <input id="m3MainSlider" type="range" min="-1.5" max="4.5" step="0.05" value="0.25" class="w-full accent-cyan-400 cursor-pointer" />
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-4">
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
              <h4 class="text-sm font-bold text-cyan-400 mb-3">📐 القراءات العددية والتحليل المنهجي المباشر</h4>
              <div id="m3MetricsGrid" class="grid grid-cols-2 gap-3 text-xs mb-4"></div>
              <div id="m3Banner" class="mb-3"></div>
              <div id="m3RuleBox" class="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    const canvas = hostEl.querySelector('#m3Canvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const subBar = hostEl.querySelector('#m3SubBar');
    const legend = hostEl.querySelector('#m3Legend');
    const sliderLabel = hostEl.querySelector('#m3SliderLabel');
    const sliderVal = hostEl.querySelector('#m3SliderVal');
    const slider = hostEl.querySelector('#m3MainSlider');
    const metricsGrid = hostEl.querySelector('#m3MetricsGrid');
    const banner = hostEl.querySelector('#m3Banner');
    const ruleBox = hostEl.querySelector('#m3RuleBox');
    const statusEq = hostEl.querySelector('#m3StatusEq');
    const playBtn = hostEl.querySelector('#m3PlayBtn');
    const resetBtn = hostEl.querySelector('#m3ResetBtn');

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
      if (state.mode === 'cobweb') {
        const cp = COBWEB_PRESETS[state.cobIdx];
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-2">اختر الدالة الترجعية $f$:</span>
          ${COBWEB_PRESETS.map((p, i) => `
            <button type="button" data-m3-cob="${i}" class="px-3 py-1.5 rounded-xl text-xs font-bold ${i === state.cobIdx ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">${p.btnText}</button>
          `).join('')}
        `;
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> منحنى $(C_f)$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> المنصف $(\\Delta): y = x$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> مسار $(u_n)$</span>
          </div>
          <span class="text-cyan-300 font-bold">${cp.formulaTex}</span>
        `;
        sliderLabel.innerHTML = 'الحد البدئي $u_0$:';
        metricsGrid.innerHTML = [
          metricCard('الحد الأول $u_1$:', 'm3Val_c1', '1.50', 'text-cyan-300'),
          metricCard('الحد السادس $u_6$:', 'm3Val_c6', '1.99', 'text-emerald-300'),
          metricCard('النقطة الصامدة $\\ell$:', 'm3Val_ell', String(cp.fixedPoint), 'text-amber-300'),
          metricCard('سلوك المتتالية:', 'm3Val_beh', 'متقاربة', 'text-purple-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-2">
            <span>🪜</span> <span>اسحب $u_0$ عبر النقطة الصامدة $\\ell = ${cp.fixedPoint}$ لمراقبة انعكاس الرتابة أو الهروب خارج $I$!</span>
          </div>
        `;
        ruleBox.innerHTML = cp.ruleHtml;
      } else if (state.mode === 'geometric') {
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-2">حالات المرجع لـ $(q^n)$:</span>
          ${GEOM_PRESETS.map((gp, i) => `
            <button type="button" data-m3-q="${gp.q}" class="px-3 py-1.5 rounded-xl text-xs font-bold ${Math.abs(state.qVal - gp.q) < 0.02 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">${gp.btnText}</button>
          `).join('')}
        `;
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> الحدود $u_n = q^n$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-slate-500 inline-block"></span> المستقيم $y = 1$</span>
          </div>
        `;
        sliderLabel.innerHTML = 'الأساس الهندسي $q \\in [-1.35, +1.35]$:';
        metricsGrid.innerHTML = [
          metricCard('الأساس $q$:', 'm3Val_q', state.qVal.toFixed(2), 'text-amber-300'),
          metricCard('الحد $q^{10}$:', 'm3Val_q10', '0.08', 'text-cyan-300'),
          metricCard('المجموع $S_{10} = \\sum_{k=0}^{10} q^k$:', 'm3Val_sum', '4.17', 'text-emerald-300'),
          metricCard('نهاية $(q^n)$:', 'm3Val_qlim', '$0$', 'text-purple-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-2">
            <span>⚡</span> <span>تذكّر الفخ القاتل: إذا كان $q \\le -1$ فالمتتالية تتأرجح وتزداد سعتها (أو تتناوب $\\pm 1$) فهي <b>متباعدة بلا نهاية</b>!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>المعيار الرسمي لنهاية $(q^n)$:</b><br/>
          • $q \\gt 1 \\implies \\lim q^n = +\\infty$ | $q = 1 \\implies \\lim q^n = 1$<br/>
          • $-1 \\lt q \\lt 1 \\implies \\lim q^n = 0$ | $q \\le -1 \\implies$ لا تقبل نهاية!
        `;
      } else if (state.mode === 'squeeze') {
        subBar.classList.add('hidden');
        subBar.innerHTML = '';
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> الحد الأعلى $w_n = 2 + \\frac{2.2}{n+1}$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-rose-400 inline-block"></span> الحد الأدنى $v_n = 2 - \\frac{2.2}{n+1}$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> $u_n = 2 + \\frac{2.2\\cos(1.1n)}{n+1}$</span>
          </div>
        `;
        sliderLabel.innerHTML = 'الرتبة المراقبة $N \\in [1, 24]$:';
        metricsGrid.innerHTML = [
          metricCard('الحد الأدنى $v_N$:', 'm3Val_vn', '1.80', 'text-rose-300'),
          metricCard('القيمة المؤطرة $u_N$:', 'm3Val_un', '2.01', 'text-emerald-300'),
          metricCard('الحد الأعلى $w_N$:', 'm3Val_wn', '2.20', 'text-amber-300'),
          metricCard('سعة الحصر $w_N - v_N$:', 'm3Val_gap', '0.40', 'text-cyan-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2">
            <span>🗜️</span> <span>رغم أن $\\cos(1.1n)$ لا نهاية لها، فإن السقف $w_n$ والأرضية $v_n$ يطبقان معاً على $\\ell = 2$!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>صيغة مصداق الدركيين:</b><br/>
          إذا كان $v_n \\le u_n \\le w_n$ ابتداءً من رتبة $n_0$ وكان $\\lim v_n = \\lim w_n = \\ell \\in \\mathbb{R}$، فإن $(u_n)$ متقاربة و $\\lim u_n = \\ell$.
        `;
      } else {
        subBar.classList.add('hidden');
        subBar.innerHTML = '';
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-purple-400 inline-block"></span> الحزام الأسي $\\ell \\pm k^n |u_0 - \\ell|$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> الحدود الفعلية $(u_n)$</span>
          </div>
        `;
        sliderLabel.innerHTML = 'معامل الانكماش $k \\in [0.20, 0.94]$ في $|u_{n+1}-3| \\le k|u_n-3|$:';
        metricsGrid.innerHTML = [
          metricCard('المعامل $k$:', 'm3Val_k', state.kVal.toFixed(2), 'text-purple-300'),
          metricCard('الخطأ عند $n=8$ ($k^8|u_0-3|$):', 'm3Val_err8', '0.06', 'text-cyan-300'),
          metricCard('الرتبة لدقة $10^{-2}$:', 'm3Val_nreq', '12', 'text-amber-300'),
          metricCard('النهاية المؤكدة:', 'm3Val_limk', '$\\ell = 3$', 'text-emerald-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-2">
            <span>🎯</span> <span>كلما صغر $k$ انهار الخطأ $k^n |u_0 - \\ell|$ بسرعة خارقة نحو الصفر، مما يغني أحياناً عن برهان الرتابة!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>برهان الترجع في الامتحان الوطني:</b><br/>
          من $|u_{n+1} - \\ell| \\le k |u_n - \\ell|$ نستنتج بالترجع $|u_n - \\ell| \\le k^n |u_0 - \\ell|$. وبما أن $0 \\lt k \\lt 1$ فإن $\\lim k^n = 0 \\implies \\lim u_n = \\ell$.
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

      if (state.mode === 'cobweb') {
        const cp = COBWEB_PRESETS[state.cobIdx];
        const xSpan = cp.xMax - cp.xMin;
        const scale = Math.min(540 / xSpan, 310 / (cp.xMax - Math.min(0, cp.xMin)));
        const originX = 75 - Math.min(0, cp.xMin) * scale;
        const originY = H - 55;
        const plane = c.createPlane(W, H, { originX, originY, scale });

        c.drawGrid(ctx, plane, { xMin: -2, xMax: 6, yMin: -1, yMax: 5 });
        c.drawAxes(ctx, plane);

        // Diagonal y = x
        c.drawLine(ctx, plane, Math.max(-0.5, cp.xMin), Math.max(-0.5, cp.xMin), cp.xMax, cp.xMax, {
          color: '#fbbf24',
          lineWidth: 2,
          dash: [6, 4]
        });

        // Curve f(x)
        c.plotCurve(ctx, plane, cp.f, cp.xMin, cp.xMax, { color: '#22d3ee', lineWidth: 3 });

        // Fixed point
        c.drawPoint(ctx, plane, cp.fixedPoint, cp.fixedPoint, { fill: '#fbbf24', radius: 5.5 });
        c.drawLabel(ctx, `L(${cp.fixedPoint}, ${cp.fixedPoint})`, plane.toPxX(cp.fixedPoint) + 8, plane.toPxY(cp.fixedPoint) - 10, { color: '#fde68a', font: 'bold 11px monospace' });

        // Cobweb trajectory
        const terms = [state.u0];
        let u = state.u0;
        let escaped = false;
        ctx.save();
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(plane.toPxX(u), plane.toPxY(0));
        for (let k = 0; k < 8; k += 1) {
          const nu = cp.f(u);
          if (!Number.isFinite(nu) || Math.abs(nu) > 12) {
            escaped = true;
            break;
          }
          ctx.lineTo(plane.toPxX(u), plane.toPxY(nu));
          ctx.lineTo(plane.toPxX(nu), plane.toPxY(nu));
          terms.push(nu);
          u = nu;
        }
        ctx.stroke();
        ctx.restore();

        // Mark u0, u1 on x-axis
        c.drawPoint(ctx, plane, state.u0, 0, { fill: '#22d3ee', radius: 5.5 });
        c.drawLabel(ctx, `u0=${state.u0.toFixed(2)}`, plane.toPxX(state.u0) - 20, plane.toPxY(0) + 18, { color: '#67e8f9', font: 'bold 11px monospace' });
        if (terms[1] != null && Math.abs(terms[1]) <= cp.xMax + 0.5) {
          c.drawPoint(ctx, plane, terms[1], 0, { fill: '#34d399', radius: 4.5 });
        }

        sliderVal.textContent = `u₀ = ${state.u0.toFixed(2)}`;
        statusEq.textContent = `u₀ = ${state.u0.toFixed(2)}  |  ℓ = ${cp.fixedPoint}`;

        const elC1 = hostEl.querySelector('#m3Val_c1');
        const elC6 = hostEl.querySelector('#m3Val_c6');
        const elBeh = hostEl.querySelector('#m3Val_beh');
        if (elC1) elC1.textContent = terms[1] != null ? terms[1].toFixed(3) : 'غير معرف';
        if (elC6) elC6.textContent = escaped ? '+∞' : (terms[6] != null ? terms[6].toFixed(4) : terms[terms.length - 1].toFixed(4));
        if (elBeh) {
          if (escaped || (state.cobIdx === 2 && state.u0 > 1.001)) {
            elBeh.textContent = 'متباعدة (+∞)';
            elBeh.className = 'font-mono font-bold text-rose-400 text-sm';
          } else if (state.cobIdx === 1) {
            elBeh.textContent = 'متقاربة متناوبة إلى 2';
            elBeh.className = 'font-mono font-bold text-amber-300 text-sm';
          } else {
            const mono = terms[1] != null && terms[1] >= state.u0 ? 'تزايدية' : 'تناقصية';
            elBeh.textContent = `متقاربة (${mono})`;
            elBeh.className = 'font-mono font-bold text-emerald-400 text-sm';
          }
        }
      } else if (state.mode === 'geometric') {
        const q = state.qVal;
        sliderVal.textContent = `q = ${q.toFixed(2)}`;
        statusEq.textContent = `q = ${q.toFixed(2)}  |  |q| ${Math.abs(q) < 1 ? '< 1' : '>= 1'}`;

        let yAbsMax = 1.6;
        const vals = [];
        for (let n = 0; n <= 12; n += 1) {
          const v = Math.pow(q, n);
          vals.push(v);
          if (Math.abs(v) > yAbsMax && Math.abs(v) < 8) yAbsMax = Math.abs(v) + 0.4;
        }
        const scaleY = 140 / Math.min(yAbsMax, 6);
        const plane = c.createPlane(W, H, { originX: 70, originY: Math.round(H / 2), scaleX: 46, scaleY });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 12, xStep: 2, yMin: -5, yMax: 5, yStep: 1 });
        c.drawAxes(ctx, plane);

        // Reference y = 1
        c.drawLine(ctx, plane, 0, 1, 12.2, 1, { color: '#475569', lineWidth: 1.4, dash: [4, 4] });
        c.drawLabel(ctx, 'y = 1', plane.toPxX(0) - 42, plane.toPxY(1) + 4, { color: '#94a3b8', font: '10px monospace' });

        // Exponential envelope if alternating or converging
        if (Math.abs(q) > 0.01 && Math.abs(q) < 1.3) {
          c.plotCurve(ctx, plane, (x) => Math.pow(Math.abs(q), x), 0, 12, { color: 'rgba(251, 191, 36, 0.25)', lineWidth: 1.5, dash: [4, 4] });
          if (q < 0) {
            c.plotCurve(ctx, plane, (x) => -Math.pow(Math.abs(q), x), 0, 12, { color: 'rgba(251, 191, 36, 0.25)', lineWidth: 1.5, dash: [4, 4] });
          }
        }

        // Stems & dots
        for (let n = 0; n <= 12; n += 1) {
          const clampedY = Math.max(-5.8, Math.min(5.8, vals[n]));
          c.drawLine(ctx, plane, n, 0, n, clampedY, { color: 'rgba(251, 191, 36, 0.45)', lineWidth: 2 });
          const dotColor = Math.abs(q) < 1 ? '#34d399' : (q === 1 ? '#38bdf8' : (q > 1 ? '#fbbf24' : '#fb7185'));
          c.drawPoint(ctx, plane, n, clampedY, { fill: dotColor, radius: 5 });
        }

        const q10 = Math.pow(q, 10);
        let sum10 = 11;
        if (Math.abs(q - 1) > 1e-6) {
          sum10 = (1 - Math.pow(q, 11)) / (1 - q);
        }
        const elQ = hostEl.querySelector('#m3Val_q');
        const elQ10 = hostEl.querySelector('#m3Val_q10');
        const elSum = hostEl.querySelector('#m3Val_sum');
        const elLim = hostEl.querySelector('#m3Val_qlim');
        if (elQ) elQ.textContent = q.toFixed(2);
        if (elQ10) elQ10.textContent = Math.abs(q10) > 999 ? q10.toExponential(2) : q10.toFixed(4);
        if (elSum) elSum.textContent = Math.abs(sum10) > 999 ? sum10.toExponential(2) : sum10.toFixed(3);
        if (elLim) {
          if (q > 1.001) {
            elLim.textContent = '+∞ (متباعدة)';
            elLim.className = 'font-mono font-bold text-rose-400 text-sm';
          } else if (Math.abs(q - 1) <= 0.001) {
            elLim.textContent = '1 (ثابتة)';
            elLim.className = 'font-mono font-bold text-cyan-300 text-sm';
          } else if (q > -1.001 + 0.002) {
            elLim.textContent = '0 (متقاربة)';
            elLim.className = 'font-mono font-bold text-emerald-400 text-sm';
          } else {
            elLim.textContent = 'بلا نهاية (متباعدة)';
            elLim.className = 'font-mono font-bold text-rose-400 text-sm';
          }
        }
      } else if (state.mode === 'squeeze') {
        const N = Math.round(state.squeezeN);
        sliderVal.textContent = `N = ${N}`;
        statusEq.textContent = `N = ${N}  |  ℓ = 2`;

        const plane = c.createPlane(W, H, { originX: 55, originY: H - 45, scaleX: 24, scaleY: 72 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 25, xStep: 5, yMin: 0, yMax: 4.5, yStep: 1 });
        c.drawAxes(ctx, plane);

        // Limit line y = 2
        c.drawLine(ctx, plane, 0, 2, 24.5, 2, { color: '#38bdf8', lineWidth: 1.8, dash: [6, 4] });
        c.drawLabel(ctx, 'y = 2', plane.toPxX(21.5), plane.toPxY(2) - 8, { color: '#7dd3fc', font: 'bold 11px monospace' });

        // Upper & lower envelope curves
        const wFn = (x) => 2 + 2.2 / (x + 1);
        const vFn = (x) => 2 - 2.2 / (x + 1);
        const uFn = (x) => 2 + (2.2 * Math.cos(1.1 * x)) / (x + 1);

        c.plotCurve(ctx, plane, wFn, 0, 24, { color: '#fbbf24', lineWidth: 2.2 });
        c.plotCurve(ctx, plane, vFn, 0, 24, { color: '#fb7185', lineWidth: 2.2 });

        // Highlight bracket at N
        const vN = vFn(N);
        const uN = uFn(N);
        const wN = wFn(N);
        c.drawLine(ctx, plane, N, vN, N, wN, { color: 'rgba(56, 189, 248, 0.7)', lineWidth: 3 });

        // Discrete points of u_n
        for (let n = 0; n <= 24; n += 1) {
          const active = n === N;
          c.drawPoint(ctx, plane, n, uFn(n), {
            fill: active ? '#ffffff' : '#34d399',
            radius: active ? 6.5 : 3.8
          });
        }
        c.drawPoint(ctx, plane, N, wN, { fill: '#fbbf24', radius: 4.5 });
        c.drawPoint(ctx, plane, N, vN, { fill: '#fb7185', radius: 4.5 });

        const elVn = hostEl.querySelector('#m3Val_vn');
        const elUn = hostEl.querySelector('#m3Val_un');
        const elWn = hostEl.querySelector('#m3Val_wn');
        const elGap = hostEl.querySelector('#m3Val_gap');
        if (elVn) elVn.textContent = vN.toFixed(4);
        if (elUn) elUn.textContent = uN.toFixed(4);
        if (elWn) elWn.textContent = wN.toFixed(4);
        if (elGap) elGap.textContent = (wN - vN).toFixed(4);
      } else {
        const k = state.kVal;
        sliderVal.textContent = `k = ${k.toFixed(2)}`;
        statusEq.textContent = `k = ${k.toFixed(2)}  |  ℓ = 3`;

        const plane = c.createPlane(W, H, { originX: 60, originY: H - 45, scaleX: 46, scaleY: 58 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 12, xStep: 2, yMin: 0, yMax: 5.5, yStep: 1 });
        c.drawAxes(ctx, plane);

        // Fixed point line y = 3
        c.drawLine(ctx, plane, 0, 3, 12.2, 3, { color: '#34d399', lineWidth: 2, dash: [6, 4] });
        c.drawLabel(ctx, 'L = 3', plane.toPxX(10.5), plane.toPxY(3) - 8, { color: '#6ee7b7', font: 'bold 11px monospace' });

        // Envelope curves 3 +- 2.2 * k^n
        const errAmp = 2.2;
        c.plotCurve(ctx, plane, (x) => 3 + errAmp * Math.pow(k, x), 0, 12, { color: '#c084fc', lineWidth: 2.2, dash: [5, 3] });
        c.plotCurve(ctx, plane, (x) => 3 - errAmp * Math.pow(k, x), 0, 12, { color: '#c084fc', lineWidth: 2.2, dash: [5, 3] });

        // Sequence u_n oscillating inside band with actual factor (0.85 * k)
        let u = 3 - errAmp;
        const stepFactor = -0.82 * k;
        for (let n = 0; n <= 12; n += 1) {
          c.drawPoint(ctx, plane, n, u, { fill: '#22d3ee', radius: 5 });
          u = 3 + stepFactor * (u - 3);
        }

        const err8 = errAmp * Math.pow(k, 8);
        const nReq = Math.ceil(Math.log(0.01 / errAmp) / Math.log(k));
        const elK = hostEl.querySelector('#m3Val_k');
        const elErr8 = hostEl.querySelector('#m3Val_err8');
        const elNreq = hostEl.querySelector('#m3Val_nreq');
        if (elK) elK.textContent = k.toFixed(2);
        if (elErr8) elErr8.textContent = err8.toFixed(4);
        if (elNreq) elNreq.textContent = `n >= ${Math.max(1, nReq)}`;
      }
    }

    function stepAnim(ts) {
      if (!state.playing) return;
      if (!state.lastTs) state.lastTs = ts;
      const dt = (ts - state.lastTs) / 1000;
      state.lastTs = ts;

      if (state.mode === 'cobweb') {
        const cp = COBWEB_PRESETS[state.cobIdx];
        state.u0 += dt * 0.75;
        if (state.u0 > cp.xMax - 0.1) state.u0 = Math.max(0.05, cp.xMin + 0.1);
        slider.value = state.u0.toFixed(2);
      } else if (state.mode === 'geometric') {
        state.qVal += dt * 0.35;
        if (state.qVal > 1.35) state.qVal = -1.35;
        slider.value = state.qVal.toFixed(2);
      } else if (state.mode === 'squeeze') {
        state.squeezeN += dt * 4.5;
        if (state.squeezeN > 24) state.squeezeN = 1;
        slider.value = Math.round(state.squeezeN).toString();
      } else {
        state.kVal -= dt * 0.16;
        if (state.kVal < 0.20) state.kVal = 0.94;
        slider.value = state.kVal.toFixed(2);
      }
      drawFrame();
      state.rafId = global.requestAnimationFrame(stepAnim);
    }

    function setCobIdx(idx) {
      stopAnim();
      state.cobIdx = idx;
      const cp = COBWEB_PRESETS[idx];
      slider.min = cp.xMin;
      slider.max = cp.xMax;
      slider.step = 0.05;
      state.u0 = cp.defaultU0;
      slider.value = cp.defaultU0;
      syncChrome();
      drawFrame();
    }

    function setQ(q) {
      stopAnim();
      state.qVal = q;
      slider.value = q;
      syncChrome();
      drawFrame();
    }

    function setMode(mode) {
      stopAnim();
      state.mode = mode;
      hostEl.querySelectorAll('[data-m3-mode]').forEach((btn) => {
        const meta = MODES_META.find((m) => m.id === btn.dataset.m3Mode);
        btn.className = btn.dataset.m3Mode === mode && meta
          ? `px-3 py-2 rounded-xl text-xs font-bold ${meta.activeCls} transition`
          : 'px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition';
      });

      if (mode === 'cobweb') {
        setCobIdx(state.cobIdx);
        return;
      } else if (mode === 'geometric') {
        slider.min = -1.35; slider.max = 1.35; slider.step = 0.01;
        slider.value = state.qVal;
      } else if (mode === 'squeeze') {
        slider.min = 1; slider.max = 24; slider.step = 1;
        slider.value = Math.round(state.squeezeN);
      } else {
        slider.min = 0.20; slider.max = 0.94; slider.step = 0.01;
        slider.value = state.kVal;
      }
      syncChrome();
      drawFrame();
    }

    hostEl.addEventListener('click', (e) => {
      const mBtn = e.target.closest('[data-m3-mode]');
      if (mBtn) return setMode(mBtn.dataset.m3Mode);
      const cBtn = e.target.closest('[data-m3-cob]');
      if (cBtn) return setCobIdx(Number(cBtn.dataset.m3Cob));
      const qBtn = e.target.closest('[data-m3-q]');
      if (qBtn) return setQ(parseFloat(qBtn.dataset.m3Q));
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
      if (state.mode === 'cobweb') state.u0 = COBWEB_PRESETS[state.cobIdx].defaultU0;
      else if (state.mode === 'geometric') state.qVal = 0.78;
      else if (state.mode === 'squeeze') state.squeezeN = 10;
      else state.kVal = 0.62;
      setMode(state.mode);
    });

    slider.addEventListener('input', () => {
      stopAnim();
      const v = parseFloat(slider.value);
      if (state.mode === 'cobweb') state.u0 = v;
      else if (state.mode === 'geometric') state.qVal = v;
      else if (state.mode === 'squeeze') state.squeezeN = v;
      else state.kVal = v;
      drawFrame();
    });

    hostEl._m3SimApi = { setMode, setCobIdx, setQ, drawFrame };
    api.renderMath(hostEl);
    setMode('cobweb');
  }

  global.EulerAcademy.registerSimulator('math-03', { mount });
})(window);
