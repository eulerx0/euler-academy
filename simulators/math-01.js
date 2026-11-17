/**
 * Euler Academy — Interactive 6-Mode Visual Laboratory for Math Lesson 01
 * (Continuité, Discontinuité, Composée, TVI & Dichotomie, Réciproque, Racines n-ièmes)
 */
(function (global) {
  'use strict';

  const C = () => global.EulerCanvas;

  const ROOT_N_MODELS = [
    {
      id: 'sqrt',
      btnText: '$\\sqrt{x} = x^{1/2}$ (مربع)',
      shortLabel: 'الجذر المربع (رتبة 2)',
      power: 0.5,
      minX: 0.0, maxX: 4.5, defaultX: 1.5,
      f: (x) => Math.sqrt(Math.max(0, x)),
      df: (x) => (x > 0.001 ? 0.5 / Math.sqrt(x) : Infinity),
      formulaKatex: 'f(x) = \\sqrt{x} = x^{\\frac{1}{2}}',
      derivKatex: "f'(x) = \\frac{1}{2\\sqrt{x}} = \\frac{1}{2}x^{-\\frac{1}{2}}",
      desc: "<b>دالة الجذر المربع $f(x) = \\sqrt{x}$ على $[0, +\\infty[$:</b><br/>• متصلة وتزايدية قطعاً على $[0, +\\infty[$.<br/>• قابلة للاشتقاق على $]0, +\\infty[$ ومشتقتها $f'(x) = \\frac{1}{2\\sqrt{x}} > 0$.<br/>• <b>الاشتقاق عند $0^+$:</b> $\\lim_{x \\to 0^+} \\frac{\\sqrt{x}}{x} = \\lim_{x \\to 0^+} \\frac{1}{\\sqrt{x}} = +\\infty \\implies$ يقبل $(C_f)$ نصف مماس عمودي موجه نحو الأعلى في $O(0,0)$!"
    },
    {
      id: 'cbrt',
      btnText: '$\\sqrt[3]{x} = x^{1/3}$ (مكعب)',
      shortLabel: 'الجذر المكعب (رتبة 3)',
      power: 1 / 3,
      minX: 0.0, maxX: 4.5, defaultX: 2.0,
      f: (x) => Math.cbrt(Math.max(0, x)),
      df: (x) => (x > 0.001 ? 1 / (3 * Math.pow(x, 2 / 3)) : Infinity),
      formulaKatex: 'f(x) = \\sqrt[3]{x} = x^{\\frac{1}{3}}',
      derivKatex: "f'(x) = \\frac{1}{3\\sqrt[3]{x^2}} = \\frac{1}{3}x^{-\\frac{2}{3}}",
      desc: "<b>دالة الجذر المكعب $f(x) = \\sqrt[3]{x}$ على $[0, +\\infty[$:</b><br/>• الدالة العكسية لـ $x \\mapsto x^3$ على $\\mathbb{R}^+$. متصلة وتزايدية قطعاً.<br/>• قابلة للاشتقاق على $]0, +\\infty[$ ومشتقتها $f'(x) = \\frac{1}{3\\sqrt[3]{x^2}}$.<br/>• <b>التأويل الهندسي عند $0^+$:</b> تقبل نصف مماس عمودي موجه نحو الأعلى في $O(0,0)$ لأن $\\lim_{x \\to 0^+} \\frac{\\sqrt[3]{x}}{x} = +\\infty$."
    },
    {
      id: 'root4',
      btnText: '$\\sqrt[4]{x} = x^{1/4}$ (رتبة 4)',
      shortLabel: 'جذر من الرتبة 4',
      power: 0.25,
      minX: 0.0, maxX: 4.5, defaultX: 1.8,
      f: (x) => Math.pow(Math.max(0, x), 0.25),
      df: (x) => (x > 0.001 ? 0.25 / Math.pow(x, 0.75) : Infinity),
      formulaKatex: 'f(x) = \\sqrt[4]{x} = x^{\\frac{1}{4}}',
      derivKatex: "f'(x) = \\frac{1}{4\\sqrt[4]{x^3}} = \\frac{1}{4}x^{-\\frac{3}{4}}",
      desc: "<b>دالة الجذر من الرتبة 4 على $[0, +\\infty[$:</b><br/>• رتبة زوجية: معرفة حصراً على $\\mathbb{R}^+$.<br/>• <b>مقارنة الرتب:</b> على $]0, 1[$ المنحنى فوق $\\sqrt{x}$ لأن $\\sqrt[4]{x} > \\sqrt{x}$. وعلى $]1, +\\infty[$ يصبح تحته لأن $\\sqrt[4]{x} < \\sqrt{x}$. يلتقيان عند $(1,1)$ و $(0,0)$.<br/>• تقبل نصف مماس عمودي في $O(0,0)$."
    },
    {
      id: 'root5',
      btnText: '$\\sqrt[5]{x} = x^{1/5}$ (رتبة 5)',
      shortLabel: 'جذر من الرتبة 5',
      power: 0.2,
      minX: 0.0, maxX: 4.5, defaultX: 2.2,
      f: (x) => Math.pow(Math.max(0, x), 0.2),
      df: (x) => (x > 0.001 ? 0.2 / Math.pow(x, 0.8) : Infinity),
      formulaKatex: 'f(x) = \\sqrt[5]{x} = x^{\\frac{1}{5}}',
      derivKatex: "f'(x) = \\frac{1}{5\\sqrt[5]{x^4}} = \\frac{1}{5}x^{-\\frac{4}{5}}",
      desc: "<b>دالة الجذر من الرتبة 5 على $[0, +\\infty[$:</b><br/>• رتبة فردية ($n=5$): دالة عكسية لـ $x \\mapsto x^5$ على $\\mathbb{R}^+$، متصلة وتزايدية قطعاً على $[0, +\\infty[$.<br/>• مشتقتها على $]0, +\\infty[$: $f'(x) = \\frac{1}{5\\sqrt[5]{x^4}} > 0$.<br/>• تزايدها بطيء جداً لكل $x > 1$ وانحدارها عمودي حاد جداً بجوار $0^+$."
    },
    {
      id: 'pow23',
      btnText: '$x^{2/3} = \\sqrt[3]{x^2}$',
      shortLabel: 'قوة جذرية r = 2/3 < 1',
      power: 2 / 3,
      minX: 0.0, maxX: 4.5, defaultX: 1.5,
      f: (x) => Math.pow(Math.max(0, x), 2 / 3),
      df: (x) => (x > 0.001 ? (2 / 3) / Math.pow(x, 1 / 3) : Infinity),
      formulaKatex: 'f(x) = x^{\\frac{2}{3}} = \\sqrt[3]{x^2}',
      derivKatex: "f'(x) = \\frac{2}{3} x^{-\\frac{1}{3}} = \\frac{2}{3\\sqrt[3]{x}}",
      desc: "<b>القوة الجذرية $f(x) = x^{2/3}$ على $[0, +\\infty[$:</b><br/>• بما أن $r = \\frac{2}{3} < 1$: المنحنى مقعر نحو الأسفل $\\cap$.<br/>• مشتقتها تنعدم في اللانهاية وتقترب من $+\\infty$ عند $0^+$.<br/>• <b>الاشتقاق عند $0^+$:</b> $\\lim_{x \\to 0^+} \\frac{x^{2/3}}{x} = \\lim_{x \\to 0^+} \\frac{1}{x^{1/3}} = +\\infty \\implies$ نصف مماس عمودي موجه للأعلى في $O(0,0)$!"
    },
    {
      id: 'pow32',
      btnText: '$x^{3/2} = \\sqrt{x^3}$',
      shortLabel: 'قوة جذرية r = 3/2 > 1',
      power: 1.5,
      minX: 0.0, maxX: 3.5, defaultX: 1.6,
      f: (x) => Math.pow(Math.max(0, x), 1.5),
      df: (x) => 1.5 * Math.sqrt(Math.max(0, x)),
      formulaKatex: 'f(x) = x^{\\frac{3}{2}} = \\sqrt{x^3}',
      derivKatex: "f'(x) = \\frac{3}{2} x^{\\frac{1}{2}} = \\frac{3}{2}\\sqrt{x}",
      desc: "<b>القوة الجذرية $f(x) = x^{3/2}$ على $[0, +\\infty[$:</b><br/>• بما أن $r = \\frac{3}{2} > 1$: المنحنى محدب نحو الأعلى $\\cup$.<br/>• <b>الاشتقاق عند $0^+$:</b> $\\lim_{x \\to 0^+} \\frac{x^{3/2}}{x} = \\lim_{x \\to 0^+} \\sqrt{x} = 0 = f'_d(0)$!<br/>• <b>التأويل الهندسي:</b> يقبل المنحنى <b>نصف مماس أفقي</b> موجه نحو اليمين في النقطة $O(0,0)$ (ملاحظة بالغة الأهمية في الامتحانات الوطنية)!"
    }
  ];

  const RECIP_FUNCS = [
    {
      btnText: '$f_1(x) = x - 2\\sqrt{x} + 2$',
      minX: 1.0, maxX: 6.0, defaultX: 2.8,
      f: (x) => x - 2 * Math.sqrt(x) + 2,
      df: (x) => 1 - 1 / Math.sqrt(x),
      desc: "<b>الدالة $f_1(x) = x - 2\\sqrt{x} + 2$ على $I = [1, +\\infty[$:</b><br/>• متصلة ورتيبة قطعاً على $[1, +\\infty[$، وتقبل نصف مماس أفقي على يمين $A(1,1)$ لأن $f'_d(1) = 0$.<br/>• منحنى الدالة العكسية $(C_{f^{-1}})$ يقبل بالتالي نصف مماس عمودي موجه نحو الأعلى في النقطة $A'(1,1)$."
    },
    {
      btnText: '$f_2(x) = \\sqrt{x^2 - 2x}$',
      minX: 2.01, maxX: 6.0, defaultX: 3.2,
      f: (x) => Math.sqrt(Math.max(0, x * x - 2 * x)),
      df: (x) => (x - 1) / Math.sqrt(Math.max(0.0001, x * x - 2 * x)),
      desc: "<b>الدالة $f_2(x) = \\sqrt{x^2 - 2x}$ على $I = [2, +\\infty[$:</b><br/>• متصلة على $[2, +\\infty[$ وغير قابلة للاشتقاق على يمين $x_0 = 2$ (نصف مماس عمودي في $A(2,0)$).<br/>• منحنى $(C_{f^{-1}})$ يقبل نصف مماس أفقي في $A'(0,2)$."
    },
    {
      btnText: '$f_3(x) = \\frac{1}{4}x^3 + \\frac{1}{2}x$',
      minX: 0.0, maxX: 2.4, defaultX: 1.5,
      f: (x) => 0.25 * Math.pow(x, 3) + 0.5 * x,
      df: (x) => 0.75 * x * x + 0.5,
      desc: "<b>الدالة $f_3(x) = \\frac{1}{4}x^3 + \\frac{1}{2}x$:</b><br/>• متصلة وقابلة للاشتقاق على $\\mathbb{R}$، ومشتقتها $f'(x) > 0$ قطعاً.<br/>• تحقق دائماً خاصية التماثل والاشتقاق: $(f^{-1})'(y_0) = \\frac{1}{f'(x_0)}$."
    }
  ];

  const MODES_META = [
    { id: 'continuity', label: '1. الاتصال في نقطة', activeCls: 'bg-cyan-500 text-slate-950 shadow' },
    { id: 'piecewise', label: '2. الدالة المجزأة والقفزة', activeCls: 'bg-amber-500 text-slate-950 shadow' },
    { id: 'composite', label: '3. مركب دالتين والتضمن', activeCls: 'bg-purple-500 text-slate-950 shadow' },
    { id: 'tvi', label: '4. القيم الوسيطية والتفرع (TVI)', activeCls: 'bg-emerald-500 text-slate-950 shadow' },
    { id: 'reciprocal', label: '5. الدالة العكسية والتماثل', activeCls: 'bg-cyan-500 text-slate-950 shadow' },
    { id: 'rootn', label: '6. الجذور النونية والقوى ($x^r$)', activeCls: 'bg-cyan-500 text-slate-950 shadow' }
  ];

  function metricCard(label, valueHtml, valueCls = 'text-cyan-300') {
    return `
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span class="text-slate-400 block mb-1">${label}</span>
        <span class="font-mono font-bold ${valueCls} text-sm" dir="ltr">${valueHtml}</span>
      </div>
    `;
  }

  function renderContinuity(ctx, W, H, xVal) {
    const f = (x) => 0.35 * x * x - 0.7 * x + 1.5;
    const y0 = f(xVal);
    const plane = C().createPlane(W, H, { originX: 140, originY: 360, scale: 75 });

    C().drawGrid(ctx, plane, { xMin: -1, xMax: 6, yMin: -1, yMax: 5 });
    C().drawAxes(ctx, plane);
    C().plotCurve(ctx, plane, f, -1.0, 4.0, { color: '#22d3ee', lineWidth: 3.5 });
    C().drawProjections(ctx, plane, xVal, y0);
    C().drawPoint(ctx, plane, xVal, y0, { fill: '#34d399', radius: 7 });

    return {
      legend: `
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> $(C_f)$ دالة متصلة في $x_0$</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> النقطة $M(x_0, f(x_0))$</span>
        </div>
        <span class="text-cyan-300 font-semibold">حرك $x_0$ لمعاينة الاتصال السلس</span>
      `,
      metrics: [
        metricCard('الأفصول $x_0$:', xVal.toFixed(2), 'text-cyan-300'),
        metricCard('الصورة $f(x_0)$:', y0.toFixed(2), 'text-emerald-400'),
        metricCard('النهاية على اليمين $\\lim_{x \\to x_0^+}$:', y0.toFixed(2), 'text-cyan-300'),
        metricCard('النهاية على اليسار $\\lim_{x \\to x_0^-}$:', y0.toFixed(2), 'text-cyan-300')
      ].join(''),
      status: `
        <div class="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2">
          <span>✓</span> <span>الدالة متصلة في النقطة $x_0$: النهاية منتهية وتساوي الصورة $\\lim_{x \\to x_0} f(x) = f(x_0)$</span>
        </div>
      `,
      rule: `
        <b>التأويل الهندسي للاتصال:</b><br/>
        منحنى الدالة $(C_f)$ لا ينقطع أبداً عند النقطة $M(x_0, f(x_0))$. عندما يقترب $x$ من $x_0$ سواء من اليمين ($x > x_0$) أو من اليسار ($x < x_0$)، تقترب النقطة على المنحنى من $M(x_0, f(x_0))$ بدون أي فجوة أو قفزة مفاجئة.
      `
    };
  }

  function renderPiecewise(ctx, W, H, xVal) {
    const fL = (x) => -0.5 * x + 1.5;
    const fR = (x) => 0.5 * x + 1.0;
    const isRight = xVal >= 2.0;
    const currY = isRight ? fR(xVal) : fL(xVal);
    const plane = C().createPlane(W, H, { originX: 100, originY: 360, scale: 75 });

    C().drawGrid(ctx, plane, { xMin: -1, xMax: 6, yMin: -1, yMax: 5 });
    C().drawAxes(ctx, plane);
    C().plotCurve(ctx, plane, fL, 0.0, 1.99, { color: '#fbbf24', lineWidth: 3.5 });
    C().plotCurve(ctx, plane, fR, 2.0, 4.0, { color: '#34d399', lineWidth: 3.5 });
    C().drawLine(ctx, plane, 2.0, 0.5, 2.0, 2.0, { color: 'rgba(244, 63, 94, 0.7)', lineWidth: 2, dash: [4, 4] });
    C().drawPoint(ctx, plane, 2.0, 0.5, { fill: '#050811', stroke: '#fbbf24', strokeWidth: 2.5, radius: 6 });
    C().drawPoint(ctx, plane, 2.0, 2.0, { fill: '#34d399', stroke: false, radius: 6 });
    C().drawPoint(ctx, plane, xVal, currY, { fill: isRight ? '#34d399' : '#fbbf24', radius: 7 });

    return {
      legend: `
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> فرع اليسار ($x < 2$)</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> فرع اليمين ($x \\ge 2$)</span>
        </div>
        <span class="text-rose-400 font-semibold">قفزة انقطاع عند $x = 2$</span>
      `,
      metrics: [
        metricCard('الأفصول الحالي $x$:', xVal.toFixed(2), 'text-cyan-300'),
        metricCard('الصورة $f(2)$ في النقطة المفصلية:', '2.00', 'text-emerald-400'),
        metricCard('النهاية على اليمين $\\lim_{x \\to 2^+}$:', '2.00', 'text-emerald-400'),
        metricCard('النهاية على اليسار $\\lim_{x \\to 2^-}$:', '0.50', 'text-amber-400')
      ].join(''),
      status: `
        <div class="p-3 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 font-bold text-xs flex items-center gap-2">
          <span>⚠️</span> <span>الدالة غير متصلة في النقطة 2 (يوجد انقطاع/قفزة لأن $\\lim_{x \\to 2^+} f(x) \\neq \\lim_{x \\to 2^-} f(x)$)</span>
        </div>
      `,
      rule: `
        <b>تحليل الاتصال على اليمين واليسار:</b><br/>
        • لدينا $\\lim_{x \\to 2^+} f(x) = 2.00 = f(2) \\implies$ الدالة متصلة على اليمين في $2$.<br/>
        • لدينا $\\lim_{x \\to 2^-} f(x) = 0.50 \\neq f(2) \\implies$ الدالة <b>غير متصلة على اليسار في $2$</b>.<br/>
        • <b>الخلاصة:</b> تكون الدالة متصلة في النقطة إذا وفقط إذا كانت متصلة على اليمين وعلى اليسار معاً، وبالتالي فالدالة $f$ <b>غير متصلة في النقطة 2</b>.
      `
    };
  }

  function renderComposite(ctx, W, H, xVal) {
    const uVal = 0.5 * xVal * xVal - 1.0;
    const gVal = Math.sqrt(Math.max(0, uVal + 1.5));
    const fComp = (x) => Math.sqrt(Math.max(0, 0.5 * x * x + 0.5));
    const plane = C().createPlane(W, H, { originX: 120, originY: 360, scale: 75 });

    C().drawGrid(ctx, plane, { xMin: -1, xMax: 6, yMin: -1, yMax: 5 });
    C().drawAxes(ctx, plane);
    C().plotCurve(ctx, plane, fComp, 0.0, 2.5, { color: '#c084fc', lineWidth: 3.5 });
    C().drawProjections(ctx, plane, xVal, gVal, { color: 'rgba(192, 132, 252, 0.6)' });
    C().drawPoint(ctx, plane, xVal, gVal, { fill: '#22d3ee', radius: 7 });

    return {
      legend: `
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-purple-400 inline-block"></span> $(C_{g \\circ u})$ دالة مركبة</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> النقطة $M(x_0, (g \\circ u)(x_0))$</span>
        </div>
        <span class="text-purple-300 font-semibold">تحقق شرط التضمن $u(I) \\subset J$</span>
      `,
      metrics: [
        metricCard('المتغير الأولي $x_0 \\in I$:', xVal.toFixed(2), 'text-cyan-300'),
        metricCard('القيمة الوسيطة $u(x_0)$:', uVal.toFixed(2), 'text-amber-300'),
        metricCard('قيمة المركب $(g \\circ u)(x_0)$:', gVal.toFixed(2), 'text-purple-400'),
        metricCard('حالة شرط التضمن:', 'u(I) ⊂ J (محقق)', 'text-emerald-400')
      ].join(''),
      status: `
        <div class="p-3 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-2">
          <span>✨</span> <span>مبرهنة اتصال المركب: $u$ متصلة على $[0, 2.5]$ و $u(I) \\subset [-1.5, +\\infty[$ و $g$ متصلة على $J$ $\\implies$ الدالة $g \\circ u$ متصلة على $[0, 2.5]$.</span>
        </div>
      `,
      rule: `
        <b>مسار التركيب (Le Pipeline de la Composée):</b><br/>
        • خطوة 1: $x_0 = ${xVal.toFixed(2)} \\xrightarrow{\\quad u \\quad} u(x_0) = ${uVal.toFixed(2)}$ (دالة حدودية متصلة).<br/>
        • خطوة 2: بما أن $u(x_0) \\ge -1.0 > -1.5$، فإن القيمة تنتمي حتماً لمجال اتصال $g$ وهو $J = [-1.5, +\\infty[$.<br/>
        • خطوة 3: $u(x_0) \\xrightarrow{\\quad g \\quad} g(u(x_0)) = \\sqrt{${uVal.toFixed(2)} + 1.5} = ${gVal.toFixed(2)}$.<br/>
        • <b>خلاصة وطنية:</b> شرط التضمن $u(I) \\subset J$ هو الضمان الرياضي لعدم خروج القيمة الوسيطة خارج مجموعة تعريف الدالة الخارجية.
      `
    };
  }

  function renderTvi(ctx, W, H, stepRaw, state, syncTviButtons) {
    const step = Math.max(0, Math.min(5, Math.round(stepRaw)));
    state.tviStep = step;
    syncTviButtons(step);

    const f = (x) => x * x * x + 3 * x - 1;
    let a = 0.0;
    let b = 1.0;
    for (let k = 0; k < step; k++) {
      const mid = (a + b) / 2;
      if (f(a) * f(mid) <= 0) b = mid;
      else a = mid;
    }
    const m = (a + b) / 2;
    const fa = f(a);
    const fb = f(b);
    const fm = f(m);
    const amp = b - a;
    const rootApprox = 0.322185;

    const plane = C().createPlane(W, H, { originX: 180, originY: 280, scaleX: 320, scaleY: 70 });
    C().drawGrid(ctx, plane, { xMin: -0.5, xMax: 1.5, xStep: 0.25, yMin: -2, yMax: 4, yStep: 1 });
    C().drawAxes(ctx, plane);

    // Highlight active interval [a, b]
    const pxA = plane.toPxX(a);
    const pxB = plane.toPxX(b);
    ctx.save();
    ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
    ctx.fillRect(pxA, 0, pxB - pxA, H);
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(pxA, 0); ctx.lineTo(pxA, H);
    ctx.moveTo(pxB, 0); ctx.lineTo(pxB, H);
    ctx.stroke();

    const pxM = plane.toPxX(m);
    ctx.strokeStyle = '#c084fc';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(pxM, 0); ctx.lineTo(pxM, H);
    ctx.stroke();
    ctx.restore();

    C().plotCurve(ctx, plane, f, -0.4, 1.25, { step: 0.01, color: '#22d3ee', lineWidth: 3.5 });
    C().drawPoint(ctx, plane, a, fa, { fill: '#f43f5e', strokeWidth: 1.5 });
    C().drawPoint(ctx, plane, b, fb, { fill: '#10b981', strokeWidth: 1.5 });
    C().drawPoint(ctx, plane, m, fm, { fill: '#c084fc', strokeWidth: 1.5 });
    C().drawPoint(ctx, plane, rootApprox, 0, { fill: '#fbbf24', stroke: '#050811' });

    C().drawLabel(ctx, `A(${a.toFixed(2)}, ${fa.toFixed(2)})`, pxA + 6, plane.toPxY(fa) + 14, { color: '#f43f5e' });
    C().drawLabel(ctx, `B(${b.toFixed(2)}, ${fb.toFixed(2)})`, pxB - 75, plane.toPxY(fb) - 10, { color: '#10b981' });
    C().drawLabel(ctx, `M(${m.toFixed(3)}, ${fm.toFixed(2)})`, pxM + 6, plane.toPxY(fm) - 8, { color: '#c084fc' });
    C().drawLabel(ctx, 'α ≈ 0.322', plane.toPxX(rootApprox) - 25, plane.originY + 18, { color: '#fbbf24' });

    const nextHalf = fa * fm <= 0
      ? `النصف الأيسر $[a, m] = [${a.toFixed(3)}, ${m.toFixed(3)}]$`
      : `النصف الأيمن $[m, b] = [${m.toFixed(3)}, ${b.toFixed(3)}]$`;

    return {
      sliderText: `n = ${step} (سعة ${amp.toFixed(4)})`,
      legend: `
        <div class="flex items-center gap-3">
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> $(C_f): x^3+3x-1$</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-emerald-500/40 border border-emerald-400 inline-block"></span> المجال $[a_n, b_n]$</span>
          <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block"></span> المركز $m_n$</span>
          <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span> الجذر $\\alpha$</span>
        </div>
        <span class="text-emerald-300 font-semibold">تأطير متسلسل بالتفرع الثنائي</span>
      `,
      metrics: [
        metricCard(`المجال النشط $[a_${step}, b_${step}]$:`, `[${a.toFixed(4)}, ${b.toFixed(4)}]`, 'text-emerald-400'),
        metricCard('سعة التأطير $\\frac{1}{2^n}$:', amp.toFixed(4), 'text-cyan-300'),
        metricCard(`مركز القطعة $m_${step}$:`, m.toFixed(4), 'text-purple-300'),
        metricCard(`قيمة الدالة في المركز $f(m_${step})$:`, `${fm >= 0 ? '+' : ''}${fm.toFixed(4)}`, fm >= 0 ? 'text-cyan-300' : 'text-rose-400')
      ].join(''),
      status: `
        <div class="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2">
          <span>✓</span> <span>مبرهنة TVI: $f(a_${step}) \\times f(b_${step}) < 0$ $\\implies$ الحل الوحيد $\\alpha \\approx ${rootApprox.toFixed(4)}$ محصور حتماً بالسعة ${amp.toFixed(4)}</span>
        </div>
      `,
      rule: `
        <b>تحليل خوارزمية التفرع في الخطوة $n = ${step}$:</b><br/>
        • $f(a_${step}) = ${fa.toFixed(4)} < 0$ و $f(b_${step}) = ${fb.toFixed(4)} > 0$.<br/>
        • تم حساب صورة المركز: $f(m_${step}) = ${fm.toFixed(4)}$ (${fm >= 0 ? 'موجبة قطعا' : 'سالبة قطعا'}).<br/>
        • بما أن $f(a_${step}) \\times f(m_${step}) ${fa * fm <= 0 ? '\\le 0' : '> 0'}$، فإن الخطوة الموالية ستحتفظ بـ <b>${nextHalf}</b>.<br/>
        • السعة تقلصت من $1$ إلى $${amp.toFixed(4)}$ بنسبة اختزال بلغت $${Math.pow(2, step)}$ ضعفاً!
      `
    };
  }

  function renderReciprocal(ctx, W, H, xVal, state) {
    const fn = RECIP_FUNCS[state.funcIdx];
    const y0 = fn.f(xVal);
    const slope = fn.df(xVal);
    const invSlope = Math.abs(slope) > 1e-4 ? 1 / slope : Infinity;
    const plane = C().createPlane(W, H, { originX: 70, originY: H - 55, scale: 64 });

    C().drawGrid(ctx, plane, { xMin: -1, xMax: 8, yMin: -1, yMax: 7 });
    C().drawAxes(ctx, plane);
    C().drawLine(ctx, plane, -0.5, -0.5, 7, 7, { color: '#64748b', dash: [6, 6] });
    C().plotCurve(ctx, plane, fn.f, fn.minX, fn.maxX, { color: '#22d3ee', lineWidth: 3 });
    C().plotInverseCurve(ctx, plane, fn.f, fn.minX, fn.maxX, { color: '#fbbf24', lineWidth: 3 });
    C().drawLine(ctx, plane, xVal, y0, y0, xVal, { color: 'rgba(244, 114, 182, 0.5)', dash: [4, 4] });

    if (Number.isFinite(slope) && Math.abs(slope) < 40) {
      C().drawLine(ctx, plane, xVal - 1, y0 - slope, xVal + 1, y0 + slope, { color: 'rgba(34, 211, 238, 0.7)', lineWidth: 2, dash: [3, 3] });
    }
    if (Number.isFinite(invSlope) && Math.abs(invSlope) < 40) {
      C().drawLine(ctx, plane, y0 - 1, xVal - invSlope, y0 + 1, xVal + invSlope, { color: 'rgba(251, 191, 36, 0.7)', lineWidth: 2, dash: [3, 3] });
    } else if (Math.abs(slope) < 1e-3) {
      const pxY0 = plane.toPxX(y0);
      ctx.save();
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.85)';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(pxY0, 0); ctx.lineTo(pxY0, H);
      ctx.stroke();
      ctx.restore();
    }

    C().drawPoint(ctx, plane, xVal, y0, { fill: '#22d3ee', strokeWidth: 1.5 });
    C().drawPoint(ctx, plane, y0, xVal, { fill: '#fbbf24', strokeWidth: 1.5 });
    C().drawLabel(ctx, `M(${xVal.toFixed(2)}, ${y0.toFixed(2)})`, plane.toPxX(xVal) + 8, plane.toPxY(y0) - 8, { color: '#22d3ee' });
    C().drawLabel(ctx, `M'(${y0.toFixed(2)}, ${xVal.toFixed(2)})`, plane.toPxX(y0) + 8, plane.toPxY(xVal) + 16, { color: '#fbbf24' });

    return {
      legend: `
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> $(C_f)$</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> $(C_{f^{-1}})$</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-slate-400 inline-block"></span> المنصف الأول $y=x$</span>
        </div>
        <span class="text-cyan-300 font-semibold">تماثل محوري متعامد</span>
      `,
      metrics: [
        metricCard('النقطة $M \\in (C_f)$:', `M(${xVal.toFixed(2)}, ${y0.toFixed(2)})`, 'text-cyan-300'),
        metricCard("النقطة $M' \\in (C_{f^{-1}})$:", `M'(${y0.toFixed(2)}, ${xVal.toFixed(2)})`, 'text-amber-300'),
        metricCard("العدد المشتق $f'(x_0)$:", slope > 50 ? '+∞' : slope.toFixed(2), 'text-emerald-400'),
        metricCard("مشتقة العكسية $(f^{-1})'(y_0)$:", !Number.isFinite(invSlope) || invSlope > 50 ? '+∞' : invSlope.toFixed(2), 'text-pink-400')
      ].join(''),
      status: `
        <div class="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-2">
          <span>🔄</span> <span>تماثل محوري بالنسبة لـ $y=x$ وتحقق العلاقة $(f^{-1})'(y_0) = \\frac{1}{f'(x_0)}$</span>
        </div>
      `,
      rule: fn.desc
    };
  }

  function renderRootN(ctx, W, H, xVal, state) {
    const m = ROOT_N_MODELS[state.rootNIdx];
    const y0 = m.f(xVal);
    const slope = m.df(xVal);
    const plane = C().createPlane(W, H, { originX: 80, originY: H - 60, scale: 95 });

    C().drawGrid(ctx, plane, { xMin: 0, xMax: 6, yMin: 0, yMax: 5 });
    C().drawAxes(ctx, plane);
    C().drawLine(ctx, plane, 0, 0, 4.5, 4.5, { color: '#475569', dash: [5, 5] });
    C().drawPoint(ctx, plane, 1, 1, { fill: '#64748b', stroke: false, radius: 3.5 });
    C().drawLabel(ctx, '(1,1)', plane.toPxX(1) + 4, plane.toPxY(1) - 4, { color: '#64748b', font: '10px monospace' });

    C().plotCurve(ctx, plane, m.f, 0.0, m.maxX, { color: '#22d3ee', lineWidth: 3.5 });

    if (xVal > 0.03 && Number.isFinite(slope) && slope < 30) {
      const dx = 0.9;
      C().drawLine(ctx, plane, xVal - dx, y0 - slope * dx, xVal + dx, y0 + slope * dx, {
        color: 'rgba(244, 114, 182, 0.85)', lineWidth: 2, dash: [4, 4]
      });
    } else if (m.power < 1) {
      C().drawHalfTangentArrow(ctx, plane, 0, 0, 0, 1.8, 'rgba(244, 63, 94, 0.9)');
    } else {
      C().drawHalfTangentArrow(ctx, plane, 0, 0, 1.8, 0, 'rgba(34, 211, 238, 0.9)');
    }

    C().drawProjections(ctx, plane, xVal, y0);
    C().drawPoint(ctx, plane, xVal, y0, { fill: '#34d399', radius: 6.5 });
    C().drawLabel(ctx, `M(${xVal.toFixed(2)}, ${y0.toFixed(2)})`, plane.toPxX(xVal) + 8, plane.toPxY(y0) - 8, { color: '#34d399' });

    return {
      legend: `
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> منحنى الدالة $(C_f): ${m.formulaKatex}$</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> النقطة $M(x_0, f(x_0))$</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-pink-400 inline-block"></span> المماس عند $x_0$</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-slate-500 inline-block"></span> المنصف $y=x$</span>
        </div>
        <span class="text-cyan-300 font-semibold">${m.shortLabel}</span>
      `,
      metrics: [
        metricCard('الأفصول $x_0$:', xVal.toFixed(2), 'text-cyan-300'),
        metricCard('الصورة $f(x_0)$:', y0.toFixed(3), 'text-emerald-400'),
        metricCard("المشتقة $f'(x_0)$:", xVal < 0.02 || slope > 50 ? '+∞' : slope.toFixed(3), 'text-amber-400'),
        metricCard('طبيعة المماس عند الأصل $O(0,0)$:', m.power < 1 ? 'نصف مماس عمودي موجه للأعلى' : 'نصف مماس أفقي موجه لليمين', m.power < 1 ? 'text-pink-400 text-xs' : 'text-cyan-400 text-xs')
      ].join(''),
      status: `
        <div class="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-2">
          <span>🔍</span> <span>صيغة الاشتقاق: $(${m.formulaKatex})' = ${m.derivKatex}$</span>
        </div>
      `,
      rule: m.desc
    };
  }

  function buildTemplate() {
    const tviButtons = [
      'المجال الأولي $n=0$ ($[0, 1]$)',
      'الخطوة $1$ (سعة $0.5$)',
      'الخطوة $2$ (سعة $0.25$)',
      'الخطوة $3$ (سعة $0.125$)',
      'الخطوة $4$ (سعة $0.0625$)',
      'الخطوة $5$ (سعة $0.03125$)'
    ].map((txt, idx) => `<button type="button" data-tvi-step="${idx}" class="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">${txt}</button>`).join('');

    const recipButtons = RECIP_FUNCS.map((fn, idx) =>
      `<button type="button" data-func-idx="${idx}" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">${fn.btnText}</button>`
    ).join('');

    const rootnButtons = ROOT_N_MODELS.map((m, idx) =>
      `<button type="button" data-rootn-idx="${idx}" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">${m.btnText}</button>`
    ).join('');

    const modeTabs = MODES_META.map((m) =>
      `<button type="button" data-sim-mode="${m.id}" class="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition">${m.label}</button>`
    ).join('');

    return `
      <div id="math01SimulatorSection" class="scroll-mt-28 glass rounded-3xl p-6 sm:p-8 border border-cyan-500/30 no-print">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                المختبر البصري التفاعلي • الدرس 01
              </span>
              <span class="text-xs text-slate-400 font-mono">Laboratoire Visuel Interactif</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">
              محاكي الاتصال، الدوال المجزأة، مركب دالتين، مبرهنة القيم الوسيطية والتفرع الثنائي، والتماثل العكسي
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800">
            ${modeTabs}
          </div>
        </div>

        <div id="tviSubButtons" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80">
          <span class="text-xs text-slate-400 font-semibold px-2">خطوات التفرع الثنائي (Dichotomie):</span>
          ${tviButtons}
        </div>

        <div id="reciprocalSubButtons" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80">
          <span class="text-xs text-slate-400 font-semibold px-2">اختر الدالة العكسية لدراسة تماثلها:</span>
          ${recipButtons}
        </div>

        <div id="rootnSubButtons" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80">
          <span class="text-xs text-slate-400 font-semibold px-2">اختر رتبة الجذر أو القوة الجذرية:</span>
          ${rootnButtons}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-4">
            <div id="simLegend" class="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-3 gap-2"></div>
            <canvas id="mathCanvas" width="660" height="460" class="w-full h-auto rounded-xl bg-[#050811] border border-slate-800/90"></canvas>
            <div class="mt-4 bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
              <div class="flex justify-between text-xs font-bold mb-1.5">
                <span id="sliderLabel" class="text-slate-300">أفصول النقطة $x_0$:</span>
                <span id="xValDisplay" class="font-mono text-cyan-300">x₀ = 1.50</span>
              </div>
              <input id="xSlider" type="range" min="-0.5" max="3.5" step="0.02" value="1.5" class="w-full accent-cyan-400 cursor-pointer" />
            </div>
          </div>

          <div class="lg:col-span-5 space-y-4">
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
              <h4 class="text-sm font-bold text-cyan-400 mb-3">📐 التحليل الرياضي والتأويل الهندسي اللحظي</h4>
              <div id="simMetricsGrid" class="grid grid-cols-2 gap-3 text-xs mb-4"></div>
              <div id="simStatusBanner" class="mb-3"></div>
              <div id="funcRuleBox" class="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function mount(hostEl, api) {
    hostEl.innerHTML = buildTemplate();
    const state = { mode: 'continuity', funcIdx: 0, tviStep: 2, rootNIdx: 0 };

    const canvas = hostEl.querySelector('#mathCanvas');
    const slider = hostEl.querySelector('#xSlider');
    const sliderLabel = hostEl.querySelector('#sliderLabel');
    const xValDisplay = hostEl.querySelector('#xValDisplay');
    const legend = hostEl.querySelector('#simLegend');
    const metricsGrid = hostEl.querySelector('#simMetricsGrid');
    const statusBanner = hostEl.querySelector('#simStatusBanner');
    const ruleBox = hostEl.querySelector('#funcRuleBox');
    const tviSub = hostEl.querySelector('#tviSubButtons');
    const recipSub = hostEl.querySelector('#reciprocalSubButtons');
    const rootnSub = hostEl.querySelector('#rootnSubButtons');

    function syncButtonGroup(selector, activeIndex, activeClass, inactiveClass) {
      hostEl.querySelectorAll(selector).forEach((btn, idx) => {
        btn.className = idx === activeIndex ? activeClass : inactiveClass;
      });
    }

    function syncTviButtons(step) {
      syncButtonGroup(
        '[data-tvi-step]',
        step,
        'px-2.5 py-1 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 transition',
        'px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition'
      );
    }

    function updateSim() {
      if (!canvas || !slider) return;
      const ctx = canvas.getContext('2d');
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const xVal = parseFloat(slider.value);
      xValDisplay.innerText = `x₀ = ${xVal.toFixed(2)}`;

      let view = null;
      if (state.mode === 'continuity') view = renderContinuity(ctx, W, H, xVal);
      else if (state.mode === 'piecewise') view = renderPiecewise(ctx, W, H, xVal);
      else if (state.mode === 'composite') view = renderComposite(ctx, W, H, xVal);
      else if (state.mode === 'tvi') view = renderTvi(ctx, W, H, xVal, state, syncTviButtons);
      else if (state.mode === 'reciprocal') view = renderReciprocal(ctx, W, H, xVal, state);
      else if (state.mode === 'rootn') view = renderRootN(ctx, W, H, xVal, state);

      if (!view) return;
      if (view.sliderText) xValDisplay.innerText = view.sliderText;
      legend.innerHTML = view.legend;
      metricsGrid.innerHTML = view.metrics;
      statusBanner.innerHTML = view.status;
      ruleBox.innerHTML = view.rule;

      api.renderMath(legend);
      api.renderMath(metricsGrid);
      api.renderMath(statusBanner);
      api.renderMath(ruleBox);
    }

    function setFunc(idx) {
      state.funcIdx = Math.max(0, Math.min(RECIP_FUNCS.length - 1, idx));
      const fn = RECIP_FUNCS[state.funcIdx];
      slider.min = fn.minX;
      slider.max = fn.maxX;
      slider.step = 0.02;
      slider.value = fn.defaultX;
      syncButtonGroup(
        '[data-func-idx]',
        state.funcIdx,
        'px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 transition',
        'px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition'
      );
      updateSim();
    }

    function setRootN(idx) {
      state.rootNIdx = Math.max(0, Math.min(ROOT_N_MODELS.length - 1, idx));
      const m = ROOT_N_MODELS[state.rootNIdx];
      slider.min = m.minX;
      slider.max = m.maxX;
      slider.step = 0.02;
      slider.value = m.defaultX;
      syncButtonGroup(
        '[data-rootn-idx]',
        state.rootNIdx,
        'px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 transition',
        'px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition'
      );
      updateSim();
    }

    function setTviStep(step) {
      state.tviStep = Math.max(0, Math.min(5, step));
      if (state.mode === 'tvi') slider.value = state.tviStep;
      syncTviButtons(state.tviStep);
      updateSim();
    }

    function setSimMode(mode) {
      state.mode = mode;
      hostEl.querySelectorAll('[data-sim-mode]').forEach((btn) => {
        const meta = MODES_META.find((m) => m.id === btn.dataset.simMode);
        btn.className = btn.dataset.simMode === mode && meta
          ? `px-3.5 py-2 rounded-xl text-xs font-bold ${meta.activeCls} transition`
          : 'px-3.5 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition';
      });

      tviSub.classList.add('hidden');
      recipSub.classList.add('hidden');
      rootnSub.classList.add('hidden');

      if (mode === 'continuity') {
        slider.min = -0.5; slider.max = 3.5; slider.step = 0.02; slider.value = 1.5;
        sliderLabel.innerHTML = 'أفصول النقطة $x_0$:';
      } else if (mode === 'piecewise') {
        slider.min = 0.0; slider.max = 4.0; slider.step = 0.02; slider.value = 2.0;
        sliderLabel.innerHTML = 'أفصول النقطة $x$ (حرّك لاجتياز النقطة المفصلية $x_0=2$):';
      } else if (mode === 'composite') {
        slider.min = 0.0; slider.max = 2.5; slider.step = 0.02; slider.value = 1.6;
        sliderLabel.innerHTML = 'أفصول النقطة $x_0 \\in I = [0, 2.5]$:';
      } else if (mode === 'tvi') {
        tviSub.classList.remove('hidden');
        slider.min = 0; slider.max = 5; slider.step = 1; slider.value = state.tviStep;
        sliderLabel.innerHTML = 'خطوة التفرع الثنائي $n \\in \\{0, 1, 2, 3, 4, 5\\}$ (السعة $\\frac{1}{2^n}$):';
        api.renderMath(sliderLabel);
        setTviStep(state.tviStep);
        return;
      } else if (mode === 'reciprocal') {
        recipSub.classList.remove('hidden');
        sliderLabel.innerHTML = 'أفصول النقطة $x_0 \\in I$:';
        api.renderMath(sliderLabel);
        setFunc(state.funcIdx);
        return;
      } else if (mode === 'rootn') {
        rootnSub.classList.remove('hidden');
        sliderLabel.innerHTML = 'أفصول النقطة $x_0 \\ge 0$:';
        api.renderMath(sliderLabel);
        setRootN(state.rootNIdx);
        return;
      }

      api.renderMath(sliderLabel);
      updateSim();
    }

    hostEl.addEventListener('click', (e) => {
      const modeBtn = e.target.closest('[data-sim-mode]');
      if (modeBtn) return setSimMode(modeBtn.dataset.simMode);
      const tviBtn = e.target.closest('[data-tvi-step]');
      if (tviBtn) return setTviStep(Number(tviBtn.dataset.tviStep));
      const funcBtn = e.target.closest('[data-func-idx]');
      if (funcBtn) return setFunc(Number(funcBtn.dataset.funcIdx));
      const rootBtn = e.target.closest('[data-rootn-idx]');
      if (rootBtn) return setRootN(Number(rootBtn.dataset.rootnIdx));
    });

    slider.addEventListener('input', updateSim);

    // Expose controller on host element for direct programmatic testing if needed
    hostEl._simApi = { setSimMode, setFunc, setTviStep, setRootN, updateSim };
    api.renderMath(hostEl);
    setSimMode('continuity');
  }

  global.EulerAcademy.registerSimulator('math-01', { mount });
})(window);
