/**
 * Euler Academy — Interactive 5-Mode Wave Laboratory for Physics Lesson 01
 * (Onde transversale, Onde longitudinale sur ressort, Superposition d'ondes, Célérité F & μ, Retard temporel τ & y_M(t))
 */
(function (global) {
  'use strict';

  const C = () => global.EulerCanvas;

  const MODES_META = [
    { id: 'transverse', label: '1. موجة مستعرضة (انتقال الطاقة)', activeCls: 'bg-cyan-500 text-slate-950 shadow' },
    { id: 'longitudinal', label: '2. موجة طولية (نابض وانضغاط)', activeCls: 'bg-amber-500 text-slate-950 shadow' },
    { id: 'superposition', label: '3. تراكب موجتين متقابلتين', activeCls: 'bg-purple-500 text-slate-950 shadow' },
    { id: 'tension', label: '4. السرعة وعوامل الحبل ($F$ و $\\mu$)', activeCls: 'bg-emerald-500 text-slate-950 shadow' },
    { id: 'delay', label: '5. التأخر الزمني $\\tau$ و $y_M(t)$', activeCls: 'bg-rose-500 text-slate-950 shadow' }
  ];

  function pulseShape(u, halfW) {
    if (Math.abs(u) >= halfW) return 0;
    return 0.5 * (1 + Math.cos((Math.PI * u) / halfW));
  }

  function pulseDeriv(u, halfW) {
    if (Math.abs(u) >= halfW) return 0;
    return -0.5 * (Math.PI / halfW) * Math.sin((Math.PI * u) / halfW);
  }

  // Source signal y_S(u) for Mode 5 (duration dtS = 0.60 s, amplitude = 2.0 cm)
  function sourceSignal(u, isAsym) {
    const dtS = 0.60;
    if (u <= 0 || u >= dtS) return 0;
    const amp = 2.0;
    if (!isAsym) {
      return amp * Math.sin((Math.PI * u) / dtS);
    }
    // Asymmetric pulse: steep leading front [0 .. 0.12s], gentle trailing ramp [0.12 .. 0.60s]
    const tPeak = 0.12;
    if (u <= tPeak) {
      return amp * (u / tPeak);
    }
    return amp * (1 - (u - tPeak) / (dtS - tPeak));
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
      tensionF: 2.0,
      muG: 80,
      xM: 2.5,
      delayAsym: true,
      superOpposite: true,
      playing: false,
      lastFrameTs: 0,
      rafId: null
    };

    hostEl.innerHTML = `
      <div class="glass rounded-3xl p-5 sm:p-8 border border-amber-500/30">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                المختبر البصري التفاعلي • الفيزياء الدرس 01
              </span>
              <span class="text-xs text-slate-400 font-mono">Simulateur d’Ondes Mécaniques (5 Modes)</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">
              محاكي انتشار الموجات الميكانيكية (المستعرضة، الطولية، التراكب، عوامل السرعة $v$، والتأخر الزمني $\\tau$)
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800">
            ${MODES_META.map((m) => `
              <button type="button" data-phys-mode="${m.id}" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition">
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

        <div id="physDelaySub" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80">
          <span class="text-xs text-slate-400 font-semibold px-2">شكل التشويه المنبعث من المنبع $S$:</span>
          <button type="button" data-delay-shape="asym" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-500 text-slate-950 transition">
            غير متماثل (واجهة أمامية حادة — انعكاس الجبهة أفقياً بين $y(x)$ و $y_M(t)$!)
          </button>
          <button type="button" data-delay-shape="sym" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">
            متماثل (نبضة جيبية متناظرة)
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
                    ↺ إعادة
                  </button>
                </div>
                <span id="physProbeLabel" class="text-[11px] text-slate-400">نقطة المراقبة الثابتة: <b class="text-emerald-300 font-mono" dir="ltr">x_M = 3.00 m</b></span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span id="physTimeTitle" class="text-slate-300">اللحظة الزمنية $t$:</span>
                    <span id="physTimeDisplay" class="font-mono text-cyan-300" dir="ltr">t = 1.65 s</span>
                  </div>
                  <input id="physTimeSlider" type="range" min="0.0" max="3.0" step="0.01" value="1.65" class="w-full accent-cyan-400 cursor-pointer" />
                </div>
                <div id="physSpeedWrap">
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">سرعة الانتشار $v$:</span>
                    <span id="physSpeedDisplay" class="font-mono text-amber-300" dir="ltr">v = 2.0 m/s</span>
                  </div>
                  <input id="physSpeedSlider" type="range" min="1.0" max="3.5" step="0.1" value="2.0" class="w-full accent-amber-400 cursor-pointer" />
                </div>
              </div>

              <div id="physXmWrap" class="hidden pt-2 border-t border-slate-800/80">
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-slate-300">أفصول النقطة المدروسة $x_M = SM$:</span>
                  <span id="physXmDisplay" class="font-mono text-emerald-300" dir="ltr">x_M = 2.50 m</span>
                </div>
                <input id="physXmSlider" type="range" min="1.5" max="4.5" step="0.25" value="2.5" class="w-full accent-emerald-400 cursor-pointer" />
              </div>

              <div id="physTensionWrap" class="hidden grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">توتر الحبل $F$ (مرونة الوسط):</span>
                    <span id="physTensionDisplay" class="font-mono text-amber-300" dir="ltr">F = 2.0 N</span>
                  </div>
                  <input id="physTensionSlider" type="range" min="0.4" max="3.6" step="0.2" value="2.0" class="w-full accent-amber-400 cursor-pointer" />
                </div>
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">الكتلة الطولية $\\mu$ (قصور الحبل):</span>
                    <span id="physMuDisplay" class="font-mono text-cyan-300" dir="ltr">μ = 80 g/m</span>
                  </div>
                  <input id="physMuSlider" type="range" min="40" max="100" step="5" value="80" class="w-full accent-cyan-400 cursor-pointer" />
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
    const delaySub = hostEl.querySelector('#physDelaySub');
    const speedWrap = hostEl.querySelector('#physSpeedWrap');
    const tensionWrap = hostEl.querySelector('#physTensionWrap');
    const xmWrap = hostEl.querySelector('#physXmWrap');
    const probeLabel = hostEl.querySelector('#physProbeLabel');
    const legend = hostEl.querySelector('#physSimLegend');
    const metricsGrid = hostEl.querySelector('#physMetricsGrid');
    const statusBanner = hostEl.querySelector('#physStatusBanner');
    const ruleBox = hostEl.querySelector('#physRuleBox');

    const timeSlider = hostEl.querySelector('#physTimeSlider');
    const speedSlider = hostEl.querySelector('#physSpeedSlider');
    const tensionSlider = hostEl.querySelector('#physTensionSlider');
    const muSlider = hostEl.querySelector('#physMuSlider');
    const xmSlider = hostEl.querySelector('#physXmSlider');
    const timeDisplay = hostEl.querySelector('#physTimeDisplay');
    const speedDisplay = hostEl.querySelector('#physSpeedDisplay');
    const tensionDisplay = hostEl.querySelector('#physTensionDisplay');
    const muDisplay = hostEl.querySelector('#physMuDisplay');
    const xmDisplay = hostEl.querySelector('#physXmDisplay');
    const playBtn = hostEl.querySelector('#physPlayBtn');
    const resetBtn = hostEl.querySelector('#physResetBtn');

    function syncStaticModeChrome() {
      if (state.mode === 'transverse') {
        probeLabel.innerHTML = 'نقطة المراقبة الثابتة: <b class="text-emerald-300 font-mono" dir="ltr">x_M = 3.00 m</b>';
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
        probeLabel.innerHTML = 'اللفة المرجعية: <b class="text-rose-300 font-mono" dir="ltr">x_M = 3.00 m</b>';
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
      } else if (state.mode === 'superposition') {
        probeLabel.innerHTML = 'مركز الالتقاء: <b class="text-purple-300 font-mono" dir="ltr">x_M = 3.00 m</b>';
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
      } else if (state.mode === 'tension') {
        probeLabel.innerHTML = 'لقطة المرجع: <b class="text-cyan-300 font-mono" dir="ltr">t_1 = 0.20 s</b>';
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-4 border-t-2 border-dashed border-cyan-400 inline-block"></span> اللقطة $t_1 = 0.20\\text{ s}$</span>
            <span class="flex items-center gap-1.5"><span class="w-4 h-0.5 bg-emerald-400 inline-block"></span> اللقطة $t_2$</span>
            <span class="flex items-center gap-1.5"><span class="w-4 h-0.5 bg-amber-400 inline-block"></span> المسافة $d$ والتوتر $F$</span>
          </div>
          <span class="text-emerald-300 font-semibold">$v = \\sqrt{F/\\mu} = d / \\Delta t$</span>
        `;

        metricsGrid.innerHTML = [
          metricCard('السرعة المحسوبة $v = \\sqrt{F/\\mu}$:', 'mVal_v', '5.00 m/s', 'text-emerald-400'),
          metricCard('الكتلة الطولية $\\mu$ (SI):', 'mVal_mu', '0.080 kg/m', 'text-cyan-300'),
          metricCard('المدة $\\Delta t = t_2 - t_1$:', 'mVal_dt', '0.50 s', 'text-amber-300'),
          metricCard('المسافة بين اللقطتين $d$:', 'mVal_d', '2.50 m', 'text-amber-300')
        ].join('');

        statusBanner.innerHTML = `
          <div class="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2">
            <span>🎸</span> <span>كلما زاد التوتر $F$ (شدّ الحبل) ارتفعت $v$، وكلما زادت الكتلة الطولية $\\mu$ (سُمك الحبل) انخفضت $v$.</span>
          </div>
        `;

        ruleBox.innerHTML = `
          <b>التحقق الفيزيائي من عوامل السرعة والتصوير المتتالي:</b><br/>
          • اضبط $F = 0.5\\text{ N}$ (أو $0.4\\text{ N}$) ولاحظ كيف تتباطأ الموجة وتقل المسافة $d$ لنفس المدة $\\Delta t$.<br/>
          • ضاعف التوتر <b>أربع مرات</b> (مثلاً من $0.8\\text{ N}$ إلى $3.2\\text{ N}$ مع ثبات $\\mu$): تتضاعف السرعة <b>مرتين</b> ($v' = 2v$) وتضاعف المسافة $d$!<br/>
          • راقب تغير <b>سُمك الحبل المرسوم</b> في اللوحة تلقائياً مع تغير $\\mu$ (القصور).
        `;
      } else {
        // Mode 5: Temporal Delay τ = SM/v & Spatial y(x) vs Temporal y_M(t)
        probeLabel.innerHTML = `النقطة المدروسة: <b class="text-emerald-300 font-mono" dir="ltr">x_M = ${state.xM.toFixed(2)} m</b>`;
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-4 h-0.5 bg-cyan-400 inline-block"></span> فوق: مظهر الحبل $y(x)$</span>
            <span class="flex items-center gap-1.5"><span class="w-4 border-t-2 border-dashed border-cyan-400 inline-block"></span> تحت: المنبع $y_S(t)$</span>
            <span class="flex items-center gap-1.5"><span class="w-4 h-0.5 bg-amber-400 inline-block"></span> تحت: $y_M(t) = y_S(t - \\tau)$</span>
          </div>
          <span class="text-rose-300 font-semibold">$\\tau = SM / v$</span>
        `;

        metricsGrid.innerHTML = [
          metricCard('التأخر الزمني $\\tau = x_M / v$:', 'mVal_tau', '1.25 s', 'text-rose-400'),
          metricCard('مجال حركة $M$ $[\\tau, \\tau + \\Delta t_S]$:', 'mVal_interval', '[1.25, 1.85] s', 'text-amber-300'),
          metricCard('اللحظة المقابلة في المنبع $t - \\tau$:', 'mVal_tminus', '+0.15 s', 'text-cyan-300'),
          metricCard('استطالة $y_M(t) = y_S(t - \\tau)$:', 'mVal_ym', '+1.88 cm', 'text-emerald-400')
        ].join('');

        statusBanner.innerHTML = `
          <div class="p-3 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 font-bold text-xs flex items-center gap-2">
            <span>⏱️</span> <span>تعيد النقطة $M$ نفس حركة المنبع $S$ بتأخر $\\tau = \\frac{x_M}{v}$، مع <b>انعكاس الجبهة أفقياً</b> بين $y(x)$ و $y_M(t)$!</span>
          </div>
        `;

        ruleBox.innerHTML = `
          <b>المقارنة البصرية الحاسمة في الامتحان الوطني ($y(x)$ مقابل $y_M(t)$):</b><br/>
          • <b>في الأعلى (مظهر الحبل $y(x)$):</b> في الشكل غير المتماثل، تقع الواجهة الحادة <b>يميناً</b> لأنها جبهة الموجة الأمامية $F$.<br/>
          • <b>في الأسفل (المنحنى الزمني $y_M(t)$):</b> لأن الجبهة $F$ هي التي تصل إلى $M$ <b>أولاً</b> عند اللحظة $t = \\tau$، تظهر الواجهة الحادة <b>يساراً</b> في بداية اهتزاز $M$، بينما تغادر المؤخرة المائلة $Q$ أخيراً عند $\\tau + \\Delta t_S$!
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
      if (tensionDisplay) tensionDisplay.textContent = `F = ${state.tensionF.toFixed(1)} N`;
      if (muDisplay) muDisplay.textContent = `μ = ${state.muG} g/m`;
      if (xmDisplay) xmDisplay.textContent = `x_M = ${state.xM.toFixed(2)} m`;

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

        for (let i = 0; i <= 6; i++) {
          c.drawLabel(ctx, `${i}m`, plane.toPxX(i) - 8, plane.originY + 18, { color: '#64748b', font: '11px monospace' });
        }

        c.drawLine(ctx, plane, xM, -0.8, xM, 2.6, { color: 'rgba(52, 211, 153, 0.35)', dash: [4, 4] });
        c.drawLabel(ctx, 'M_eq (3.0m)', plane.toPxX(xM) - 34, plane.toPxY(-0.95), { color: '#34d399', font: 'bold 11px monospace' });

        const fTrans = (x) => amp * pulseShape(x - xCenter, halfW);
        c.plotCurve(ctx, plane, fTrans, 0, 6.0, { color: '#22d3ee', lineWidth: 3.5 });

        if (xF >= 0 && xF <= 6.0) {
          c.drawPoint(ctx, plane, xF, 0, { fill: '#fbbf24', radius: 5 });
          c.drawLabel(ctx, `F(${xF.toFixed(2)}m)`, plane.toPxX(xF) + 6, plane.originY - 8, { color: '#fbbf24' });
        }
        if (xQ >= 0 && xQ <= 6.0) {
          c.drawPoint(ctx, plane, xQ, 0, { fill: '#94a3b8', radius: 4.5 });
          c.drawLabel(ctx, 'Q', plane.toPxX(xQ) - 14, plane.originY - 8, { color: '#94a3b8' });
        }

        const yM = fTrans(xM);
        const slopeX = amp * pulseDeriv(xM - xCenter, halfW);
        const vySign = -v * slopeX;

        if (Math.abs(vySign) > 0.15) {
          const arrowDir = vySign > 0 ? 0.65 : -0.65;
          const arrowCol = vySign > 0 ? '#34d399' : '#fb7185';
          c.drawHalfTangentArrow(ctx, plane, xM, yM, xM, yM + arrowDir, arrowCol);
        }
        c.drawPoint(ctx, plane, xM, yM, { fill: '#34d399', radius: 7 });
        c.drawLabel(ctx, `M(3.0, ${yM.toFixed(2)})`, plane.toPxX(xM) + 10, plane.toPxY(yM) - 8, { color: '#34d399' });

        c.drawHalfTangentArrow(ctx, plane, 4.3, 2.8, 5.5, 2.8, '#fbbf24');
        c.drawLabel(ctx, `v = ${v.toFixed(1)} m/s`, plane.toPxX(4.45), plane.toPxY(2.96), { color: '#fbbf24' });

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
        const ampU = 0.18;
        const xF = v * t;
        const xCenter = xF - halfW;
        const xM = 3.0;

        const springPlane = c.createPlane(W, H, { originX: 56, originY: 120, scaleX: 95, scaleY: 45 });
        const plotPlane = c.createPlane(W, H, { originX: 56, originY: 318, scaleX: 95, scaleY: 310 });

        c.drawGrid(ctx, plotPlane, { xMin: 0, xMax: 6, xStep: 0.5, yMin: -0.05, yMax: 0.25, yStep: 0.1 });
        c.drawAxes(ctx, plotPlane);
        for (let i = 0; i <= 6; i++) {
          c.drawLabel(ctx, `${i}m`, plotPlane.toPxX(i) - 8, plotPlane.originY + 18, { color: '#64748b', font: '11px monospace' });
        }

        c.drawLine(ctx, springPlane, xM, -1.8, xM, 5.0, { color: 'rgba(244, 63, 94, 0.35)', dash: [4, 4] });
        c.drawLabel(ctx, 'x_M = 3.0m', springPlane.toPxX(xM) - 30, 32, { color: '#fb7185', font: 'bold 11px monospace' });

        const nTurns = 44;
        const stepsPerTurn = 16;
        const uFn = (x0) => ampU * pulseShape(x0 - xCenter, halfW);

        for (let k = 0; k < nTurns; k++) {
          const xStart = (k / nTurns) * 6.0;
          const xEnd = ((k + 1) / nTurns) * 6.0;
          const xMid = 0.5 * (xStart + xEnd);
          const duDx = ampU * pulseDeriv(xMid - xCenter, halfW);
          let coilColor = '#94a3b8';
          if (duDx < -0.06) coilColor = '#fbbf24';
          else if (duDx > 0.06) coilColor = '#22d3ee';

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

        const uM = uFn(xM);
        c.drawPoint(ctx, springPlane, xM + uM, 0, { fill: '#fb7185', radius: 6 });

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
      } else if (state.mode === 'superposition') {
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

        c.plotCurve(ctx, plane, y1Fn, 0, 6.0, { color: 'rgba(34, 211, 238, 0.55)', lineWidth: 2, dash: [5, 4] });
        c.plotCurve(ctx, plane, y2Fn, 0, 6.0, { color: 'rgba(251, 191, 36, 0.55)', lineWidth: 2, dash: [5, 4] });
        c.plotCurve(ctx, plane, yTotFn, 0, 6.0, { color: '#34d399', lineWidth: 3.8 });

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
      } else if (state.mode === 'tension') {
        // Mode 4: String Tension F & Linear Mass Density μ -> v = sqrt(F/μ)
        const muKg = state.muG / 1000.0;
        const vCalc = Math.sqrt(state.tensionF / muKg);
        const t1 = 0.20;
        const dt = Math.max(0, t - t1);
        const xF1 = vCalc * t1;
        const xF2 = vCalc * t;
        const dDist = xF2 - xF1;
        const halfW = 0.45;
        const amp = 2.0;

        const plane = c.createPlane(W, H, { originX: 52, originY: 255, scaleX: 68, scaleY: 56 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 8, xStep: 1, yMin: -1, yMax: 3, yStep: 1 });
        c.drawAxes(ctx, plane);

        for (let i = 0; i <= 8; i++) {
          c.drawLabel(ctx, `${i}m`, plane.toPxX(i) - 8, plane.originY + 18, { color: '#64748b', font: '11px monospace' });
        }

        const fSnap1 = (x) => amp * pulseShape(x - (xF1 - halfW), halfW);
        const fSnap2 = (x) => amp * pulseShape(x - (xF2 - halfW), halfW);
        const ropeThick = 2.0 + state.muG / 30.0;

        // Reference snapshot at t1 = 0.20s
        c.plotCurve(ctx, plane, fSnap1, 0, 7.6, { color: 'rgba(34, 211, 238, 0.7)', lineWidth: 2.4, dash: [6, 4] });
        if (xF1 <= 7.6) {
          c.drawPoint(ctx, plane, xF1, 0, { fill: '#22d3ee', radius: 4.5 });
          c.drawLabel(ctx, `F₁(${xF1.toFixed(2)}m)`, plane.toPxX(xF1) - 18, plane.originY + 34, { color: '#22d3ee', font: 'bold 10px monospace' });
        }

        // Current rope wave at t2 = t (width scales dynamically with mu)
        c.plotCurve(ctx, plane, fSnap2, 0, 7.6, { color: '#34d399', lineWidth: ropeThick });
        if (xF2 <= 7.6) {
          c.drawPoint(ctx, plane, xF2, 0, { fill: '#34d399', radius: 5.5 });
          c.drawLabel(ctx, `F₂(${xF2.toFixed(2)}m)`, plane.toPxX(xF2) - 18, plane.originY - 10, { color: '#34d399', font: 'bold 10px monospace' });
        }

        // Distance bracket d = xF2 - xF1
        const visF1 = Math.min(xF1, 7.6);
        const visF2 = Math.min(xF2, 7.6);
        if (visF2 > visF1 + 0.15) {
          c.drawLine(ctx, plane, visF1, 0, visF1, 2.7, { color: 'rgba(34,211,238,0.45)', dash: [3, 3] });
          c.drawLine(ctx, plane, visF2, 0, visF2, 2.7, { color: 'rgba(52,211,153,0.45)', dash: [3, 3] });
          c.drawHalfTangentArrow(ctx, plane, visF1, 2.65, visF2, 2.65, '#fbbf24');
          const midPx = plane.toPxX(0.5 * (visF1 + visF2));
          c.drawLabel(ctx, `d = ${dDist.toFixed(2)} m`, midPx - 35, plane.toPxY(2.85), { color: '#fbbf24', font: 'bold 11px monospace' });
        }

        // Tension force arrow at right extremity of string
        const arrowLen = 0.4 + state.tensionF * 0.25;
        c.drawHalfTangentArrow(ctx, plane, 7.6, 0, 7.6 + arrowLen, 0, '#fbbf24');
        c.drawLabel(ctx, `F=${state.tensionF.toFixed(1)}N`, plane.toPxX(7.65), plane.originY - 12, { color: '#fbbf24', font: 'bold 10px monospace' });

        const elV = hostEl.querySelector('#mVal_v');
        const elMu = hostEl.querySelector('#mVal_mu');
        const elDt = hostEl.querySelector('#mVal_dt');
        const elD = hostEl.querySelector('#mVal_d');
        if (elV) elV.textContent = `${vCalc.toFixed(2)} m/s`;
        if (elMu) elMu.textContent = `${muKg.toFixed(3)} kg/m`;
        if (elDt) elDt.textContent = `${dt.toFixed(2)} s`;
        if (elD) elD.textContent = `${dDist.toFixed(2)} m`;
      } else {
        // Mode 5: Temporal Delay τ = x_M / v & Spatial y(x) vs Temporal y_M(t) = y_S(t - τ)
        const dtS = 0.60;
        const xM = state.xM;
        const tau = xM / v;
        const xF = v * t;
        const xQ = Math.max(0, v * (t - dtS));
        const isAsym = state.delayAsym;

        // Top plane: Spatial rope aspect y(x) at time t
        const topPlane = c.createPlane(W, H, { originX: 54, originY: 146, scaleX: 95, scaleY: 36 });
        c.drawGrid(ctx, topPlane, { xMin: 0, xMax: 6, xStep: 0.5, yMin: -0.5, yMax: 2.5, yStep: 1 });
        c.drawAxes(ctx, topPlane);
        for (let i = 0; i <= 6; i++) {
          c.drawLabel(ctx, `${i}m`, topPlane.toPxX(i) - 8, topPlane.originY + 16, { color: '#64748b', font: '10px monospace' });
        }
        c.drawLabel(ctx, '1) Aspect spatial de la corde y(x) à t', 62, 22, { color: '#22d3ee', font: 'bold 11px monospace' });

        const yRope = (x) => (x < 0 ? 0 : sourceSignal(t - x / v, isAsym));
        c.plotCurve(ctx, topPlane, yRope, 0, 6.0, { color: '#22d3ee', lineWidth: 3.2 });

        // Vertical guide at x_M & point M on rope
        c.drawLine(ctx, topPlane, xM, -0.4, xM, 2.3, { color: 'rgba(52, 211, 153, 0.45)', dash: [4, 3] });
        const yNow = sourceSignal(t - tau, isAsym);
        c.drawPoint(ctx, topPlane, xM, yNow, { fill: '#34d399', radius: 6 });
        c.drawLabel(ctx, `M(x_M=${xM.toFixed(2)}m)`, topPlane.toPxX(xM) - 36, topPlane.toPxY(2.35), { color: '#34d399', font: 'bold 10px monospace' });

        if (xF > 0 && xF <= 6.0) {
          c.drawPoint(ctx, topPlane, xF, 0, { fill: '#fbbf24', radius: 4.5 });
          c.drawLabel(ctx, 'F', topPlane.toPxX(xF) + 4, topPlane.originY - 6, { color: '#fbbf24', font: 'bold 10px monospace' });
        }
        if (t > dtS && xQ <= 6.0) {
          c.drawPoint(ctx, topPlane, xQ, 0, { fill: '#94a3b8', radius: 4 });
          c.drawLabel(ctx, 'Q', topPlane.toPxX(xQ) - 12, topPlane.originY - 6, { color: '#94a3b8', font: 'bold 10px monospace' });
        }

        // Divider between top and bottom plots
        ctx.save();
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(20, 188);
        ctx.lineTo(W - 20, 188);
        ctx.stroke();
        ctx.restore();

        // Bottom plane: Temporal graphs y_S(t) and y_M(t) = y_S(t - τ)
        const botPlane = c.createPlane(W, H, { originX: 54, originY: 342, scaleX: 162, scaleY: 36 });
        c.drawGrid(ctx, botPlane, { xMin: 0, xMax: 3.5, xStep: 0.5, yMin: -0.5, yMax: 2.5, yStep: 1 });
        c.drawAxes(ctx, botPlane);
        for (let k = 0; k <= 7; k++) {
          const tk = k * 0.5;
          c.drawLabel(ctx, `${tk.toFixed(1)}s`, botPlane.toPxX(tk) - 12, botPlane.originY + 16, { color: '#64748b', font: '10px monospace' });
        }
        c.drawLabel(ctx, '2) Élongations temporelles y_S(t) et y_M(t) = y_S(t - τ)', 62, 210, { color: '#fbbf24', font: 'bold 11px monospace' });

        // Source curve y_S(t')
        c.plotCurve(ctx, botPlane, (tp) => sourceSignal(tp, isAsym), 0, 3.5, { color: 'rgba(34, 211, 238, 0.75)', lineWidth: 2.3, dash: [5, 4] });
        c.drawLabel(ctx, 'y_S(t)', botPlane.toPxX(0.25) - 14, botPlane.toPxY(2.15), { color: '#22d3ee', font: 'bold 10px monospace' });

        // Delayed point M curve y_M(t') = y_S(t' - τ)
        c.plotCurve(ctx, botPlane, (tp) => sourceSignal(tp - tau, isAsym), 0, 3.5, { color: '#fbbf24', lineWidth: 3.2 });
        if (tau + 0.3 <= 3.45) {
          c.drawLabel(ctx, 'y_M(t)', botPlane.toPxX(tau + 0.25) - 14, botPlane.toPxY(2.15), { color: '#fbbf24', font: 'bold 10px monospace' });
        }

        // Delay arrow +τ from 0 to τ
        if (tau <= 3.4) {
          c.drawHalfTangentArrow(ctx, botPlane, 0.02, 1.35, tau - 0.02, 1.35, '#c084fc');
          const midT = 0.5 * tau;
          c.drawLabel(ctx, `+τ = ${tau.toFixed(2)}s`, botPlane.toPxX(midT) - 28, botPlane.toPxY(1.52), { color: '#c084fc', font: 'bold 10px monospace' });
        }

        // Live time cursor t on bottom temporal graph
        if (t <= 3.5) {
          c.drawLine(ctx, botPlane, t, -0.4, t, 2.3, { color: 'rgba(52, 211, 153, 0.55)', dash: [3, 3] });
          c.drawPoint(ctx, botPlane, t, yNow, { fill: '#34d399', radius: 6 });
        }

        const elTau = hostEl.querySelector('#mVal_tau');
        const elInt = hostEl.querySelector('#mVal_interval');
        const elTm = hostEl.querySelector('#mVal_tminus');
        const elYm = hostEl.querySelector('#mVal_ym');
        const tMinus = t - tau;
        if (elTau) elTau.textContent = `${tau.toFixed(2)} s`;
        if (elInt) elInt.textContent = `[${tau.toFixed(2)}, ${(tau + dtS).toFixed(2)}] s`;
        if (elTm) elTm.textContent = `${tMinus >= 0 ? '+' : ''}${tMinus.toFixed(2)} s`;
        if (elYm) elYm.textContent = `+${yNow.toFixed(2)} cm`;
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

      const minT = parseFloat(timeSlider.min);
      const maxT = parseFloat(timeSlider.max);
      state.t += dt * (state.mode === 'tension' ? 0.35 : 0.75);
      if (state.t > maxT) state.t = minT;
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
          ? `px-3 py-2 rounded-xl text-xs font-bold ${meta.activeCls} transition`
          : 'px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition';
      });

      superSub.classList.add('hidden');
      delaySub.classList.add('hidden');
      speedWrap.classList.remove('hidden');
      tensionWrap.classList.add('hidden');
      xmWrap.classList.add('hidden');

      if (mode === 'superposition') {
        superSub.classList.remove('hidden');
        timeSlider.min = '0.0';
        timeSlider.max = '2.5';
        state.t = 1.20;
        timeSlider.value = '1.20';
      } else if (mode === 'tension') {
        speedWrap.classList.add('hidden');
        tensionWrap.classList.remove('hidden');
        timeSlider.min = '0.20';
        timeSlider.max = '1.00';
        state.t = 0.70;
        timeSlider.value = '0.70';
      } else if (mode === 'delay') {
        delaySub.classList.remove('hidden');
        xmWrap.classList.remove('hidden');
        timeSlider.min = '0.0';
        timeSlider.max = '3.4';
        state.t = 1.40;
        timeSlider.value = '1.40';
      } else {
        timeSlider.min = '0.0';
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

    function setDelayShape(isAsym) {
      state.delayAsym = isAsym;
      hostEl.querySelectorAll('[data-delay-shape]').forEach((btn) => {
        const active = (btn.dataset.delayShape === 'asym') === isAsym;
        btn.className = active
          ? 'px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-500 text-slate-950 transition'
          : 'px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition';
      });
      drawFrame();
    }

    hostEl.addEventListener('click', (e) => {
      const mBtn = e.target.closest('[data-phys-mode]');
      if (mBtn) return setPhysMode(mBtn.dataset.physMode);
      const sBtn = e.target.closest('[data-super-polar]');
      if (sBtn) return setSuperPolarity(sBtn.dataset.superPolar === 'opposite');
      const dBtn = e.target.closest('[data-delay-shape]');
      if (dBtn) return setDelayShape(dBtn.dataset.delayShape === 'asym');
    });

    playBtn.addEventListener('click', () => {
      if (state.playing) stopAnim();
      else startAnim();
    });

    resetBtn.addEventListener('click', () => {
      stopAnim();
      const resetVal = parseFloat(timeSlider.min);
      state.t = resetVal;
      timeSlider.value = resetVal.toFixed(2);
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

    tensionSlider.addEventListener('input', () => {
      state.tensionF = parseFloat(tensionSlider.value);
      drawFrame();
    });

    muSlider.addEventListener('input', () => {
      state.muG = parseFloat(muSlider.value);
      drawFrame();
    });

    xmSlider.addEventListener('input', () => {
      state.xM = parseFloat(xmSlider.value);
      if (state.mode === 'delay') {
        probeLabel.innerHTML = `النقطة المدروسة: <b class="text-emerald-300 font-mono" dir="ltr">x_M = ${state.xM.toFixed(2)} m</b>`;
      }
      drawFrame();
    });

    hostEl._physSimApi = { setPhysMode, setSuperPolarity, setDelayShape, drawFrame };
    api.renderMath(hostEl);
    setPhysMode('transverse');
  }

  global.EulerAcademy.registerSimulator('phys-01', { mount });
})(window);
