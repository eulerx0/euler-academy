/**
 * Euler Academy — Interactive 4-Mode Visual Laboratory for Math Lesson 02
 * (1. Sécante -> Tangente & Approximation affine, 2. Concavité f'' & Point d'inflexion,
 *  3. Branches infinies & Asymptote oblique, 4. Dérivée de f⁻¹ et tangente symétrique)
 */
(function (global) {
  'use strict';

  const C = () => global.EulerCanvas;

  const MODES_META = [
    { id: 'secant-tangent', label: '1. القاطع والمماس ($h \\to 0$)', activeCls: 'bg-cyan-500 text-slate-950 shadow' },
    { id: 'concavity-inflexion', label: '2. التقعر والانعطاف ($f\'\'$)', activeCls: 'bg-purple-500 text-slate-950 shadow' },
    { id: 'branches-infinies', label: '3. الفروع اللانهائية والمقارب', activeCls: 'bg-amber-500 text-slate-950 shadow' },
    { id: 'inverse-deriv', label: '4. مشتقة العكسية $(f^{-1})\'$', activeCls: 'bg-emerald-500 text-slate-950 shadow' }
  ];

  const BRANCH_PRESETS = [
    {
      id: 'oblique',
      btnText: 'مقارب مائل $y=x-1$',
      xMin: 0.4, xMax: 8.0, defaultX: 3.5,
      f: (x) => (Math.abs(x + 1) < 0.08 ? NaN : x - 1 + 2 / (x + 1)),
      refLine: (x) => x - 1,
      refLabel: 'y = x - 1',
      formulaLabel: 'f(x) = x - 1 + 2/(x+1)',
      limRatio: '1',
      limDiff: 'b = -1',
      nature: 'مقارب مائل (Asymptote oblique) معادلته $y = x - 1$، والمنحنى فوق المقارب على $]-1, +\\infty[$ لأن $\\frac{2}{x+1} > 0$.'
    },
    {
      id: 'bp-oy',
      btnText: 'فرع شلجمي $(Oy)$',
      xMin: 0.4, xMax: 6.0, defaultX: 3.0,
      f: (x) => 0.25 * x * x,
      refLine: null,
      refLabel: '',
      formulaLabel: 'f(x) = 0.25 x^2',
      limRatio: '+∞',
      limDiff: 'غير مطبق',
      nature: 'فرع شلجمي اتجاهه محور الأراتيب $(Oy)$ بجوار $+\\infty$ لأن $\\lim_{x\\to+\\infty} \\frac{f(x)}{x} = +\\infty$.'
    },
    {
      id: 'bp-ox',
      btnText: 'فرع شلجمي $(Ox)$',
      xMin: 0.2, xMax: 8.0, defaultX: 4.0,
      f: (x) => 1.6 * Math.sqrt(Math.max(0, x)),
      refLine: null,
      refLabel: '',
      formulaLabel: 'f(x) = 1.6 sqrt(x)',
      limRatio: '0',
      limDiff: 'غير مطبق',
      nature: 'فرع شلجمي اتجاهه محور الأفاصيل $(Ox)$ بجوار $+\\infty$ لأن $\\lim_{x\\to+\\infty} \\frac{f(x)}{x} = 0$.'
    },
    {
      id: 'bp-diag',
      btnText: 'فرع شلجمي $y=x$ (الفخ!)',
      xMin: 0.4, xMax: 8.0, defaultX: 4.0,
      f: (x) => x - Math.sqrt(Math.max(0, x)),
      refLine: (x) => x,
      refLabel: 'y = x',
      formulaLabel: 'f(x) = x - sqrt(x)',
      limRatio: 'a = 1',
      limDiff: '-∞',
      nature: 'فخ شهير: $\\lim_{x\\to+\\infty} \\frac{f(x)}{x} = 1$ لكن $\\lim_{x\\to+\\infty}(f(x)-x) = -\\infty$ $\\implies$ فرع شلجمي اتجاهه $y = x$ وليس مقارباً مائلاً!'
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
      mode: 'secant-tangent',
      hVal: 1.2,
      inflexX: -0.6,
      branchIdx: 0,
      branchX: 3.5,
      invX: 1.1,
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
                المختبر البصري التفاعلي • الرياضيات الدرس 02
              </span>
              <span class="text-xs text-slate-400 font-mono">Simulateur de Dérivation (4 Modes)</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">
              محاكي المماس، التقعر ونقط الانعطاف، الفروع اللانهائية، ومشتقة الدالة العكسية
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800">
            ${MODES_META.map((m) => `
              <button type="button" data-m2-mode="${m.id}" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <div id="m2BranchSub" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80">
          <span class="text-xs text-slate-400 font-semibold px-2">اختر نوع الفرع اللانهائي بجوار $+\\infty$:</span>
          ${BRANCH_PRESETS.map((bp, i) => `
            <button type="button" data-m2-branch="${i}" class="px-3 py-1.5 rounded-xl text-xs font-bold transition">${bp.btnText}</button>
          `).join('')}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-4">
            <div id="m2Legend" class="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-3 gap-2"></div>
            <canvas id="m2Canvas" width="680" height="390" class="w-full h-auto rounded-xl bg-[#050811] border border-slate-800/90"></canvas>

            <div class="mt-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                <div class="flex items-center gap-2">
                  <button type="button" id="m2PlayBtn" class="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-extrabold transition">
                    ▶ تحريك تلقائي
                  </button>
                  <button type="button" id="m2ResetBtn" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition">
                    ↺ ضبط افتراضي
                  </button>
                </div>
                <span id="m2StatusEq" class="text-[11px] text-cyan-300 font-mono" dir="ltr">h = 1.20</span>
              </div>

              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span id="m2SliderLabel" class="text-slate-300">المسافة الأفقية $h = x - x_0$:</span>
                  <span id="m2SliderVal" class="font-mono text-cyan-300" dir="ltr">1.20</span>
                </div>
                <input id="m2MainSlider" type="range" min="-1.6" max="1.6" step="0.02" value="1.2" class="w-full accent-cyan-400 cursor-pointer" />
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-4">
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
              <h4 class="text-sm font-bold text-cyan-400 mb-3">📐 القراءات التحليلية والتأويل الهندسي الفوري</h4>
              <div id="m2MetricsGrid" class="grid grid-cols-2 gap-3 text-xs mb-4"></div>
              <div id="m2Banner" class="mb-3"></div>
              <div id="m2RuleBox" class="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    const canvas = hostEl.querySelector('#m2Canvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const branchSub = hostEl.querySelector('#m2BranchSub');
    const legend = hostEl.querySelector('#m2Legend');
    const sliderLabel = hostEl.querySelector('#m2SliderLabel');
    const sliderVal = hostEl.querySelector('#m2SliderVal');
    const slider = hostEl.querySelector('#m2MainSlider');
    const metricsGrid = hostEl.querySelector('#m2MetricsGrid');
    const banner = hostEl.querySelector('#m2Banner');
    const ruleBox = hostEl.querySelector('#m2RuleBox');
    const statusEq = hostEl.querySelector('#m2StatusEq');
    const playBtn = hostEl.querySelector('#m2PlayBtn');
    const resetBtn = hostEl.querySelector('#m2ResetBtn');

    function syncChrome() {
      if (state.mode === 'secant-tangent') {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> منحنى $f(x) = \\frac{1}{4}x^3 - x + 2$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> القاطع $(AM)$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> المماس $(T)$ في $A(1, 1.25)$</span>
          </div>
        `;
        sliderLabel.innerHTML = 'المتغير $h = x - x_0$ (اقترب من $0$ لرؤية انطباق القاطع على المماس):';
        metricsGrid.innerHTML = [
          metricCard('ميل القاطع $\\frac{\\Delta y}{h}$:', 'm2Val_sec', '0.86', 'text-amber-300'),
          metricCard('العدد المشتق $f\'(1)$:', 'm2Val_tan', '-0.25', 'text-emerald-400'),
          metricCard('صورة $f(1+h)$:', 'm2Val_fx', '1.92', 'text-cyan-300'),
          metricCard('التقريب التآلفي:', 'm2Val_aff', '0.95', 'text-purple-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-2">
            <span>📐</span> <span>عندما يؤول $h \\to 0$، يدور القاطع $(AM)$ لينطبق تماماً على المماس $(T)$ ذي الميل $f'(1) = -0.25$.</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>العلاقة بين نسبة التغير والتقريب التآلفي:</b><br/>
          • نسبة التغير $\\frac{f(x_0+h)-f(x_0)}{h}$ هي المعامل الموجه للمستقيم القاطع $(AM)$.<br/>
          • نهايتها عند $h \\to 0$ هي $f'(x_0)$، ومنه $f(x_0+h) \\approx f(x_0) + f'(x_0)h$ على جوار $x_0 = 1$.
        `;
      } else if (state.mode === 'concavity-inflexion') {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-rose-400 inline-block"></span> $f\'\' &lt; 0$ (تحت المماس)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-purple-400 inline-block"></span> نقطة الانعطاف $I(0, 1)$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> $f\'\' &gt; 0$ (فوق المماس)</span>
          </div>
        `;
        sliderLabel.innerHTML = 'الأفصول المتحرك $x_0 \\in [-1.8, 1.8]$ للدالة $f(x) = x^3 - 3x + 1$:';
        metricsGrid.innerHTML = [
          metricCard('المشتقة الأولى $f\'(x_0)$:', 'm2Val_fp', '-1.92', 'text-cyan-300'),
          metricCard('المشتقة الثانية $f\'\'(x_0)$:', 'm2Val_fpp', '-3.60', 'text-rose-400'),
          metricCard('وضعية المماس $(T)$:', 'm2Val_pos', 'المنحنى تحت المماس', 'text-amber-300'),
          metricCard('تقعر $(C_f)$:', 'm2Val_conc', 'مقعر نحو السالب ∩', 'text-purple-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-2">
            <span>🔀</span> <span>مرّر $x_0$ عبر $0$ وشاهد كيف يخترق المماسُ المنحنى عند $I(0, 1)$ مع تغيّر إشارة $f\'\'(x)=6x$!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>إشارة المشتقة الثانية والتقعر:</b><br/>
          • $f''(x) = 6x$: سالبة على $]-\\infty, 0[$ ($C_f$ تحت مماساته) وموجبة على $]0, +\\infty[$ ($C_f$ فوق مماساته).<br/>
          • عند $x_0 = -1$ ($f'(-1)=0$, $f''(-1)=-6&lt;0$): قيمة قصوى محلية! وعند $x_0 = 1$ ($f''(1)=+6&gt;0$): قيمة دنيا محلية!
        `;
      } else if (state.mode === 'branches-infinies') {
        const bp = BRANCH_PRESETS[state.branchIdx];
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> منحنى $(C_f)$</span>
            ${bp.refLine ? `<span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> المستقيم المرجعي ${bp.refLabel}</span>` : ''}
          </div>
          <span class="font-mono text-amber-300" dir="ltr">${bp.formulaLabel}</span>
        `;
        sliderLabel.innerHTML = 'الأفصول $x$ المتزايد نحو $+\\infty$:';
        metricsGrid.innerHTML = [
          metricCard('نهاية $\\frac{f(x)}{x}$ عند $+\\infty$:', 'm2Val_limr', bp.limRatio, 'text-cyan-300'),
          metricCard('نهاية $(f(x)-ax)$:', 'm2Val_limd', bp.limDiff, 'text-emerald-300'),
          metricCard('النسبة اللحظية $\\frac{f(x)}{x}$:', 'm2Val_ratio', '1.00', 'text-amber-300'),
          metricCard('الفرق $|f(x) - y_{\\text{ref}}|$:', 'm2Val_gap', '0.44', 'text-purple-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-2">
            <span>🌳</span> <span>${bp.nature}</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>اختبار خطوة المراقبة اللانهائية:</b><br/>
          لاحظ الفرق الجوهري بين المثالين 1 و 4: كلاهما يملك $\\lim_{x\\to+\\infty}\\frac{f(x)}{x} = 1$، لكن في الحالة الأولى يؤول الفرق إلى $b=-1$ (تقارب حقيقي نحو $y=x-1$) بينما في الحالة الرابعة يتباعد الفرق إلى $-\\infty$ (فرع شلجمي اتجاهه $y=x$)!
        `;
      } else {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> $(C_f)$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> $(C_{f^{-1}})$</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> المنصف $y = x$</span>
          </div>
        `;
        sliderLabel.innerHTML = 'نقطة الاختبار $x_0$ على الدالة التقابلية $f(x) = \\frac{1}{4}x^3 + \\frac{1}{2}x + 0.5$:';
        metricsGrid.innerHTML = [
          metricCard('النقطة $A(x_0, y_0)$:', 'm2Val_ptA', '(1.10, 1.38)', 'text-cyan-300'),
          metricCard('النقطة المماثلة $A\'(y_0, x_0)$:', 'm2Val_ptAp', '(1.38, 1.10)', 'text-emerald-300'),
          metricCard('ميل المماس $f\'(x_0)$:', 'm2Val_mf', '1.41', 'text-amber-300'),
          metricCard('مقلوب الميل $(f^{-1})\'(y_0)$:', 'm2Val_minv', '0.71', 'text-purple-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2">
            <span>🔄</span> <span>تحقّق دائماً من الجداء: $f'(x_0) \\times (f^{-1})'(y_0) = 1$ بالتناظر حول المنصف $y = x$!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>صيغة مشتقة الدالة العكسية:</b><br/>
          بما أن $f'(x) = \\frac{3}{4}x^2 + \\frac{1}{2} \\ge 0.5 &gt; 0$ على $\\mathbb{R}$، فإن $f^{-1}$ قابلة للاشتقاق على $\\mathbb{R}$، ويتحول المستقيم المماس بميل $m$ إلى مماس عمودي إذا انعدم $m = f'(x_0)$!
        `;
      }

      api.renderMath(legend);
      api.renderMath(sliderLabel);
      api.renderMath(metricsGrid);
      api.renderMath(banner);
      api.renderMath(ruleBox);
    }

    function drawFrame() {
      const c = C();
      ctx.clearRect(0, 0, W, H);

      if (state.mode === 'secant-tangent') {
        const f = (x) => 0.25 * Math.pow(x, 3) - x + 2;
        const df = (x) => 0.75 * x * x - 1;
        const x0 = 1.0;
        const y0 = f(x0); // 1.25
        const mTan = df(x0); // -0.25
        let h = state.hVal;
        if (Math.abs(h) < 0.03) h = 0;

        sliderVal.textContent = `h = ${h.toFixed(2)}`;
        statusEq.textContent = `x₀ = 1.00  |  h = ${h.toFixed(2)}`;

        const plane = c.createPlane(W, H, { originX: 250, originY: 280, scale: 72 });
        c.drawGrid(ctx, plane, { xMin: -3, xMax: 5, yMin: -1, yMax: 4 });
        c.drawAxes(ctx, plane);
        c.plotCurve(ctx, plane, f, -2.5, 3.2, { color: '#22d3ee', lineWidth: 3 });

        // Exact tangent line at x0
        c.drawLine(ctx, plane, x0 - 2.2, y0 + mTan * (-2.2), x0 + 2.2, y0 + mTan * 2.2, {
          color: '#34d399',
          lineWidth: 2.2,
          dash: h === 0 ? null : [5, 4]
        });

        const xm = x0 + h;
        const ym = f(xm);
        const mSec = h !== 0 ? (ym - y0) / h : mTan;

        if (h !== 0) {
          c.drawLine(ctx, plane, -2.5, y0 + mSec * (-2.5 - x0), 3.2, y0 + mSec * (3.2 - x0), {
            color: '#fbbf24',
            lineWidth: 2.4
          });
          c.drawPoint(ctx, plane, xm, ym, { fill: '#fbbf24', radius: 6 });
          c.drawLabel(ctx, 'M(x₀+h)', plane.toPxX(xm) + 8, plane.toPxY(ym) - 10, { color: '#fde68a', font: 'bold 11px monospace' });
        }

        c.drawPoint(ctx, plane, x0, y0, { fill: '#34d399', radius: 6.5 });
        c.drawLabel(ctx, 'A(1, 1.25)', plane.toPxX(x0) - 72, plane.toPxY(y0) - 12, { color: '#6ee7b7', font: 'bold 11px monospace' });

        const affVal = y0 + mTan * h;
        const elSec = hostEl.querySelector('#m2Val_sec');
        const elTan = hostEl.querySelector('#m2Val_tan');
        const elFx = hostEl.querySelector('#m2Val_fx');
        const elAff = hostEl.querySelector('#m2Val_aff');
        if (elSec) elSec.textContent = mSec.toFixed(3);
        if (elTan) elTan.textContent = mTan.toFixed(3);
        if (elFx) elFx.textContent = ym.toFixed(3);
        if (elAff) elAff.textContent = affVal.toFixed(3);
      } else if (state.mode === 'concavity-inflexion') {
        const f = (x) => Math.pow(x, 3) - 3 * x + 1;
        const df = (x) => 3 * x * x - 3;
        const ddf = (x) => 6 * x;
        const x0 = state.inflexX;
        const y0 = f(x0);
        const fp = df(x0);
        const fpp = ddf(x0);

        sliderVal.textContent = `x₀ = ${x0.toFixed(2)}`;
        statusEq.textContent = `f'(x₀) = ${fp.toFixed(2)}  |  f''(x₀) = ${fpp.toFixed(2)}`;

        const plane = c.createPlane(W, H, { originX: 340, originY: 205, scaleX: 105, scaleY: 38 });
        c.drawGrid(ctx, plane, { xMin: -3, xMax: 3, yMin: -5, yMax: 6, yStep: 1 });
        c.drawAxes(ctx, plane);

        // Concave down part (x <= 0) vs Concave up part (x >= 0)
        c.plotCurve(ctx, plane, f, -2.2, 0.0, { color: '#fb7185', lineWidth: 3.2 });
        c.plotCurve(ctx, plane, f, 0.0, 2.2, { color: '#34d399', lineWidth: 3.2 });

        // Sliding tangent at x0
        const tCol = Math.abs(x0) < 0.08 ? '#c084fc' : (x0 < 0 ? '#fda4af' : '#6ee7b7');
        c.drawLine(ctx, plane, x0 - 1.1, y0 + fp * (-1.1), x0 + 1.1, y0 + fp * 1.1, { color: tCol, lineWidth: 2.5 });
        c.drawPoint(ctx, plane, 0, 1, { fill: '#c084fc', radius: 5.5 });
        c.drawLabel(ctx, 'I(0, 1)', plane.toPxX(0) + 10, plane.toPxY(1) - 8, { color: '#e9d5ff', font: 'bold 11px monospace' });
        c.drawPoint(ctx, plane, x0, y0, { fill: '#ffffff', radius: 6 });

        const elFp = hostEl.querySelector('#m2Val_fp');
        const elFpp = hostEl.querySelector('#m2Val_fpp');
        const elPos = hostEl.querySelector('#m2Val_pos');
        const elConc = hostEl.querySelector('#m2Val_conc');
        if (elFp) elFp.textContent = fp.toFixed(2);
        if (elFpp) {
          elFpp.textContent = fpp.toFixed(2);
          elFpp.className = `font-mono font-bold text-sm ${Math.abs(fpp) < 0.35 ? 'text-purple-300' : (fpp > 0 ? 'text-emerald-400' : 'text-rose-400')}`;
        }
        if (elPos) {
          elPos.textContent = Math.abs(x0) < 0.08 ? 'يخترق المماس عند I !' : (fpp > 0 ? 'المنحنى فوق المماس' : 'المنحنى تحت المماس');
        }
        if (elConc) {
          elConc.textContent = Math.abs(x0) < 0.08 ? 'نقطة انعطاف I(0, 1)' : (fpp > 0 ? 'مقعر نحو الموجب ∪' : 'مقعر نحو السالب ∩');
        }
      } else if (state.mode === 'branches-infinies') {
        const bp = BRANCH_PRESETS[state.branchIdx];
        const xVal = state.branchX;
        const fx = bp.f(xVal);
        const ratio = fx / xVal;
        const gap = bp.refLine ? Math.abs(fx - bp.refLine(xVal)) : Math.abs(fx);

        sliderVal.textContent = `x = ${xVal.toFixed(2)}`;
        statusEq.textContent = `f(x)/x = ${ratio.toFixed(2)}`;

        const plane = c.createPlane(W, H, { originX: 90, originY: 315, scaleX: 64, scaleY: 30 });
        c.drawGrid(ctx, plane, { xMin: -1, xMax: 9, yMin: -2, yMax: 10, yStep: 2 });
        c.drawAxes(ctx, plane);
        if (bp.refLine) {
          c.plotCurve(ctx, plane, bp.refLine, bp.xMin, bp.xMax, { color: '#34d399', lineWidth: 2, dash: [6, 4] });
          c.drawLabel(ctx, bp.refLabel, plane.toPxX(5.6), plane.toPxY(bp.refLine(5.6)) + 16, { color: '#6ee7b7', font: 'bold 11px monospace' });
        }
        c.plotCurve(ctx, plane, bp.f, bp.xMin, bp.xMax, { color: '#fbbf24', lineWidth: 3.2 });
        c.drawProjections(ctx, plane, xVal, fx);
        c.drawPoint(ctx, plane, xVal, fx, { fill: '#22d3ee', radius: 6 });

        const elR = hostEl.querySelector('#m2Val_ratio');
        const elG = hostEl.querySelector('#m2Val_gap');
        if (elR) elR.textContent = ratio.toFixed(3);
        if (elG) elG.textContent = gap.toFixed(3);
      } else {
        const f = (x) => 0.25 * Math.pow(x, 3) + 0.5 * x + 0.5;
        const df = (x) => 0.75 * x * x + 0.5;
        const x0 = state.invX;
        const y0 = f(x0);
        const mf = df(x0);
        const minv = 1 / mf;

        sliderVal.textContent = `x₀ = ${x0.toFixed(2)}`;
        statusEq.textContent = `f'(${x0.toFixed(1)}) = ${mf.toFixed(2)}  |  (f⁻¹)'(${y0.toFixed(1)}) = ${minv.toFixed(2)}`;

        const plane = c.createPlane(W, H, { originX: 250, originY: 265, scale: 62 });
        c.drawGrid(ctx, plane, { xMin: -4, xMax: 7, yMin: -3, yMax: 5 });
        c.drawAxes(ctx, plane);
        c.drawLine(ctx, plane, -2.5, -2.5, 4.5, 4.5, { color: 'rgba(251,191,36,0.6)', dash: [6, 4], lineWidth: 1.8 });
        c.drawLabel(ctx, 'y = x', plane.toPxX(3.7), plane.toPxY(4.0), { color: '#fbbf24', font: 'bold 11px monospace' });

        c.plotCurve(ctx, plane, f, -1.7, 1.9, { color: '#22d3ee', lineWidth: 3 });
        c.plotInverseCurve(ctx, plane, f, -1.7, 1.9, { color: '#34d399', lineWidth: 3 });

        c.drawLine(ctx, plane, x0, y0, y0, x0, { color: 'rgba(148,163,184,0.45)', dash: [3, 3] });
        c.drawLine(ctx, plane, x0 - 0.9, y0 - 0.9 * mf, x0 + 0.9, y0 + 0.9 * mf, { color: '#67e8f9', lineWidth: 2 });
        c.drawLine(ctx, plane, y0 - 0.9, x0 - 0.9 * minv, y0 + 0.9, x0 + 0.9 * minv, { color: '#6ee7b7', lineWidth: 2 });

        c.drawPoint(ctx, plane, x0, y0, { fill: '#22d3ee', radius: 6 });
        c.drawPoint(ctx, plane, y0, x0, { fill: '#34d399', radius: 6 });
        c.drawLabel(ctx, 'A', plane.toPxX(x0) - 16, plane.toPxY(y0) - 10, { color: '#67e8f9', font: 'bold 11px monospace' });
        c.drawLabel(ctx, "A'", plane.toPxX(y0) + 10, plane.toPxY(x0) + 14, { color: '#6ee7b7', font: 'bold 11px monospace' });

        const elA = hostEl.querySelector('#m2Val_ptA');
        const elAp = hostEl.querySelector('#m2Val_ptAp');
        const elMf = hostEl.querySelector('#m2Val_mf');
        const elMinv = hostEl.querySelector('#m2Val_minv');
        if (elA) elA.textContent = `(${x0.toFixed(2)}, ${y0.toFixed(2)})`;
        if (elAp) elAp.textContent = `(${y0.toFixed(2)}, ${x0.toFixed(2)})`;
        if (elMf) elMf.textContent = mf.toFixed(3);
        if (elMinv) elMinv.textContent = minv.toFixed(3);
      }
    }

    function stopAnim() {
      state.playing = false;
      if (state.rafId != null) {
        global.cancelAnimationFrame(state.rafId);
        state.rafId = null;
      }
      playBtn.textContent = '▶ تحريك تلقائي';
      playBtn.className = 'px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-extrabold transition';
    }

    function stepAnim(ts) {
      if (!state.playing || !canvas.isConnected) {
        stopAnim();
        return;
      }
      if (!state.lastTs) state.lastTs = ts;
      const dt = Math.min(0.05, (ts - state.lastTs) / 1000);
      state.lastTs = ts;

      if (state.mode === 'secant-tangent') {
        state.hVal -= dt * 0.55;
        if (state.hVal <= 0) {
          state.hVal = 0;
          slider.value = '0';
          drawFrame();
          stopAnim();
          return;
        }
        slider.value = state.hVal.toFixed(2);
      } else if (state.mode === 'concavity-inflexion') {
        state.inflexX += dt * 0.85;
        if (state.inflexX >= 1.8) {
          state.inflexX = 1.8;
          slider.value = '1.8';
          drawFrame();
          stopAnim();
          return;
        }
        slider.value = state.inflexX.toFixed(2);
      } else if (state.mode === 'branches-infinies') {
        const bp = BRANCH_PRESETS[state.branchIdx];
        state.branchX += dt * 1.4;
        if (state.branchX >= bp.xMax) {
          state.branchX = bp.xMax;
          slider.value = String(bp.xMax);
          drawFrame();
          stopAnim();
          return;
        }
        slider.value = state.branchX.toFixed(2);
      } else {
        state.invX += dt * 0.7;
        if (state.invX >= 1.8) {
          state.invX = 1.8;
          slider.value = '1.8';
          drawFrame();
          stopAnim();
          return;
        }
        slider.value = state.invX.toFixed(2);
      }
      drawFrame();
      state.rafId = global.requestAnimationFrame(stepAnim);
    }

    function setBranchIdx(idx) {
      stopAnim();
      state.branchIdx = idx;
      const bp = BRANCH_PRESETS[idx];
      slider.min = bp.xMin;
      slider.max = bp.xMax;
      slider.step = 0.05;
      state.branchX = bp.defaultX;
      slider.value = bp.defaultX;
      hostEl.querySelectorAll('[data-m2-branch]').forEach((btn) => {
        const active = Number(btn.dataset.m2Branch) === idx;
        btn.className = active
          ? 'px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 transition'
          : 'px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition';
      });
      syncChrome();
      drawFrame();
    }

    function setMode(mode) {
      stopAnim();
      state.mode = mode;
      hostEl.querySelectorAll('[data-m2-mode]').forEach((btn) => {
        const meta = MODES_META.find((m) => m.id === btn.dataset.m2Mode);
        btn.className = btn.dataset.m2Mode === mode && meta
          ? `px-3 py-2 rounded-xl text-xs font-bold ${meta.activeCls} transition`
          : 'px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition';
      });

      branchSub.classList.add('hidden');
      if (mode === 'secant-tangent') {
        slider.min = -1.6; slider.max = 1.6; slider.step = 0.02;
        state.hVal = 1.2; slider.value = '1.2';
      } else if (mode === 'concavity-inflexion') {
        slider.min = -1.8; slider.max = 1.8; slider.step = 0.02;
        state.inflexX = -0.6; slider.value = '-0.6';
      } else if (mode === 'branches-infinies') {
        branchSub.classList.remove('hidden');
        setBranchIdx(state.branchIdx);
        return;
      } else {
        slider.min = -1.5; slider.max = 1.8; slider.step = 0.02;
        state.invX = 1.1; slider.value = '1.1';
      }
      syncChrome();
      drawFrame();
    }

    hostEl.addEventListener('click', (e) => {
      const mBtn = e.target.closest('[data-m2-mode]');
      if (mBtn) return setMode(mBtn.dataset.m2Mode);
      const bBtn = e.target.closest('[data-m2-branch]');
      if (bBtn) return setBranchIdx(Number(bBtn.dataset.m2Branch));
    });

    playBtn.addEventListener('click', () => {
      if (state.playing) {
        stopAnim();
        return;
      }
      if (state.mode === 'secant-tangent' && state.hVal <= 0.05) state.hVal = 1.5;
      else if (state.mode === 'concavity-inflexion' && state.inflexX >= 1.75) state.inflexX = -1.8;
      else if (state.mode === 'branches-infinies' && state.branchX >= BRANCH_PRESETS[state.branchIdx].xMax - 0.1) {
        state.branchX = BRANCH_PRESETS[state.branchIdx].xMin;
      } else if (state.mode === 'inverse-deriv' && state.invX >= 1.75) state.invX = -1.5;

      state.playing = true;
      state.lastTs = 0;
      playBtn.textContent = '⏸ إيقاف مؤقت';
      playBtn.className = 'px-3.5 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 text-xs font-extrabold transition';
      state.rafId = global.requestAnimationFrame(stepAnim);
    });

    resetBtn.addEventListener('click', () => setMode(state.mode));

    slider.addEventListener('input', () => {
      stopAnim();
      const v = parseFloat(slider.value);
      if (state.mode === 'secant-tangent') state.hVal = v;
      else if (state.mode === 'concavity-inflexion') state.inflexX = v;
      else if (state.mode === 'branches-infinies') state.branchX = v;
      else state.invX = v;
      drawFrame();
    });

    hostEl._m2SimApi = { setMode, setBranchIdx, drawFrame };
    api.renderMath(hostEl);
    setMode('secant-tangent');
  }

  global.EulerAcademy.registerSimulator('math-02', { mount });
})(window);
