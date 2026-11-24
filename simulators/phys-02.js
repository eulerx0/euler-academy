/**
 * Euler Academy — Interactive 4-Mode Periodic Wave Laboratory for Physics Lesson 02
 * (Double périodicité T & λ, Comparaison de phase En phase / Opposition, Stroboscopie, Diffraction & Dispersion)
 */
(function (global) {
  'use strict';

  const C = () => global.EulerCanvas;

  const MODES_META = [
    { id: 'double-period', label: '1. الدورية المزدوجة ($T$ و $\\lambda$)', activeCls: 'bg-cyan-500 text-slate-950 shadow' },
    { id: 'phase-compare', label: '2. توافق وتعاكس الطور', activeCls: 'bg-emerald-500 text-slate-950 shadow' },
    { id: 'stroboscope', label: '3. مختبر الوماض ($N_e$)', activeCls: 'bg-purple-500 text-slate-950 shadow' },
    { id: 'diffraction', label: '4. الحيود ($a \\le \\lambda$) والوسط المبدد', activeCls: 'bg-amber-500 text-slate-950 shadow' }
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
      mode: 'double-period',
      t: 0.12,
      freqN: 20,      // Hz (used in double-period, stroboscope fixed N=20, diffraction N)
      speedV: 4.0,    // m/s (for double-period / phase-compare)
      dLambdaRatio: 1.0, // d / lambda for phase-compare [0.25 .. 2.50]
      strobeNe: 20.0, // Hz for stroboscope [5 .. 40]
      slitAcm: 1.2,   // cm for diffraction [0.5 .. 4.0]
      dispersiveWater: true, // true = surface water (v grows with N), false = air/non-dispersive
      diffFreqN: 20,  // Hz for diffraction mode [10 .. 50]
      playing: false,
      lastTs: 0,
      rafId: null
    };

    hostEl.innerHTML = `
      <div class="glass rounded-3xl p-4 sm:p-8 border border-amber-500/30">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                المختبر البصري التفاعلي • الفيزياء الدرس 02
              </span>
              <span class="text-xs text-slate-400 font-mono">Simulateur d’Ondes Périodiques (4 Modes)</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">
              مختبر الموجات المتوالية الدورية ($T$ و $\\lambda$، مقارنة الطور، الوماض، والحيود والتبدد)
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800">
            ${MODES_META.map((m) => `
              <button type="button" data-phys2-mode="${m.id}" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Mode-specific Quick Presets -->
        <div id="p2PhasePresets" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80">
          <span class="text-xs text-slate-400 font-semibold px-2">اختبار حالات المسافة $d$:</span>
          <button type="button" data-p2-ratio="1.0" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 transition">توافق: $d = \\lambda$</button>
          <button type="button" data-p2-ratio="0.5" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">تعاكس: $d = \\lambda/2$</button>
          <button type="button" data-p2-ratio="1.5" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">تعاكس: $d = 3\\lambda/2$</button>
          <button type="button" data-p2-ratio="2.0" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">توافق: $d = 2\\lambda$</button>
        </div>

        <div id="p2StrobePresets" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80">
          <span class="text-xs text-slate-400 font-semibold px-2">ضبط تردد الوماض $N_e$ (تردد الموجة الثابت $N = 20\\text{ Hz}$):</span>
          <button type="button" data-p2-ne="20" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-500 text-slate-950 transition">$N_e = 20\\text{ Hz}$ (توقف $k=1$)</button>
          <button type="button" data-p2-ne="10" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">$N_e = 10\\text{ Hz}$ (توقف $k=2$)</button>
          <button type="button" data-p2-ne="19" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">$N_e = 19\\text{ Hz}$ (بطيء حقيقي)</button>
          <button type="button" data-p2-ne="21" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">$N_e = 21\\text{ Hz}$ (بطيء معاكس)</button>
          <button type="button" data-p2-ne="40" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">$N_e = 40\\text{ Hz}$ (مضاعفة)</button>
        </div>

        <div id="p2DiffSub" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80">
          <span class="text-xs text-slate-400 font-semibold px-2">نوع وسط الانتشار في الحوض:</span>
          <button type="button" data-p2-medium="dispersive" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 transition">وسط مبدد (سطح الماء: $v$ تتغير مع $N$)</button>
          <button type="button" data-p2-medium="nondispersive" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition">وسط غير مبدد ($v$ ثابتة رغم تغير $N$)</button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div class="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-3.5 sm:p-4">
            <div id="phys2SimLegend" class="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-3 gap-2"></div>
            <canvas id="phys2WaveCanvas" width="680" height="390" class="w-full h-auto rounded-xl bg-[#050811] border border-slate-800/90"></canvas>

            <div class="mt-4 bg-slate-900/90 p-3.5 sm:p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                <div class="flex items-center gap-2">
                  <button type="button" id="phys2PlayBtn" class="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition">
                    ▶ تشغيل الانتشار
                  </button>
                  <button type="button" id="phys2ResetBtn" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition">
                    ↺ إعادة
                  </button>
                </div>
                <span id="phys2ProbeLabel" class="text-[11px] text-slate-400 font-mono" dir="ltr">t = 0.12 s</span>
              </div>

              <!-- Controls Row 1: Double period / Phase -->
              <div id="p2ControlsWave" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">التردد $N$ ($T = 1/N$):</span>
                    <span id="p2FreqDisplay" class="font-mono text-cyan-300" dir="ltr">N = 20 Hz</span>
                  </div>
                  <input id="p2FreqSlider" type="range" min="10" max="50" step="5" value="20" class="w-full accent-cyan-400 cursor-pointer" />
                </div>
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">سرعة الانتشار $v$:</span>
                    <span id="p2SpeedDisplay" class="font-mono text-amber-300" dir="ltr">v = 4.0 m/s</span>
                  </div>
                  <input id="p2SpeedSlider" type="range" min="2.0" max="8.0" step="0.5" value="4.0" class="w-full accent-amber-400 cursor-pointer" />
                </div>
              </div>

              <!-- Controls Row 2: Phase distance d/lambda slider -->
              <div id="p2ControlsPhase" class="hidden pt-2 border-t border-slate-800/80">
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-slate-300">نسبة المسافة $d / \\lambda$ بين $M_1$ و $M_2$:</span>
                  <span id="p2RatioDisplay" class="font-mono text-emerald-300" dir="ltr">d = 1.00 λ</span>
                </div>
                <input id="p2RatioSlider" type="range" min="0.25" max="2.50" step="0.25" value="1.00" class="w-full accent-emerald-400 cursor-pointer" />
              </div>

              <!-- Controls Row 3: Strobe frequency Ne -->
              <div id="p2ControlsStrobe" class="hidden">
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span class="text-slate-300">تردد ومضات الوماض $N_e$ (تردد الموجة $N = 20\\text{ Hz}$):</span>
                  <span id="p2StrobeDisplay" class="font-mono text-purple-300" dir="ltr">N_e = 20.0 Hz</span>
                </div>
                <input id="p2StrobeSlider" type="range" min="5" max="42" step="0.5" value="20" class="w-full accent-purple-400 cursor-pointer" />
              </div>

              <!-- Controls Row 4: Diffraction slit a + frequency -->
              <div id="p2ControlsDiff" class="hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">عرض الفتحة $a$:</span>
                    <span id="p2SlitDisplay" class="font-mono text-amber-300" dir="ltr">a = 1.2 cm</span>
                  </div>
                  <input id="p2SlitSlider" type="range" min="0.5" max="4.0" step="0.1" value="1.2" class="w-full accent-amber-400 cursor-pointer" />
                </div>
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span class="text-slate-300">تردد الهزاز $N$:</span>
                    <span id="p2DiffFreqDisplay" class="font-mono text-cyan-300" dir="ltr">N = 20 Hz</span>
                  </div>
                  <input id="p2DiffFreqSlider" type="range" min="10" max="50" step="5" value="20" class="w-full accent-cyan-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-4">
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5">
              <h4 class="text-sm font-bold text-amber-400 mb-3">🔬 التحليل الفيزيائي والمخبري اللحظي</h4>
              <div id="phys2MetricsGrid" class="grid grid-cols-2 gap-3 text-xs mb-4"></div>
              <div id="phys2StatusBanner" class="mb-3"></div>
              <div id="phys2RuleBox" class="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    const canvas = hostEl.querySelector('#phys2WaveCanvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const phasePresets = hostEl.querySelector('#p2PhasePresets');
    const strobePresets = hostEl.querySelector('#p2StrobePresets');
    const diffSub = hostEl.querySelector('#p2DiffSub');
    const controlsWave = hostEl.querySelector('#p2ControlsWave');
    const controlsPhase = hostEl.querySelector('#p2ControlsPhase');
    const controlsStrobe = hostEl.querySelector('#p2ControlsStrobe');
    const controlsDiff = hostEl.querySelector('#p2ControlsDiff');

    const legend = hostEl.querySelector('#phys2SimLegend');
    const metricsGrid = hostEl.querySelector('#phys2MetricsGrid');
    const statusBanner = hostEl.querySelector('#phys2StatusBanner');
    const ruleBox = hostEl.querySelector('#phys2RuleBox');
    const probeLabel = hostEl.querySelector('#phys2ProbeLabel');

    const freqSlider = hostEl.querySelector('#p2FreqSlider');
    const speedSlider = hostEl.querySelector('#p2SpeedSlider');
    const ratioSlider = hostEl.querySelector('#p2RatioSlider');
    const strobeSlider = hostEl.querySelector('#p2StrobeSlider');
    const slitSlider = hostEl.querySelector('#p2SlitSlider');
    const diffFreqSlider = hostEl.querySelector('#p2DiffFreqSlider');

    const freqDisplay = hostEl.querySelector('#p2FreqDisplay');
    const speedDisplay = hostEl.querySelector('#p2SpeedDisplay');
    const ratioDisplay = hostEl.querySelector('#p2RatioDisplay');
    const strobeDisplay = hostEl.querySelector('#p2StrobeDisplay');
    const slitDisplay = hostEl.querySelector('#p2SlitDisplay');
    const diffFreqDisplay = hostEl.querySelector('#p2DiffFreqDisplay');
    const playBtn = hostEl.querySelector('#phys2PlayBtn');
    const resetBtn = hostEl.querySelector('#phys2ResetBtn');

    function getDiffSpeedCmS(freq, isDispersive) {
      // Surface ripple tank (dispersive) vs non-dispersive medium
      if (!isDispersive) return 40.0; // constant 40 cm/s = 0.40 m/s
      return 30.0 + 0.5 * freq; // e.g. at 20 Hz -> 40 cm/s; at 50 Hz -> 55 cm/s
    }

    function syncStaticChrome() {
      if (state.mode === 'double-period') {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-cyan-400 inline-block"></span> فوق: المظهر المكاني $y(x)$ ($\\lambda$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-amber-400 inline-block"></span> تحت: راسم التذبذب $y_M(t)$ ($T$)</span>
          </div>
          <span class="text-cyan-300 font-semibold">$\\lambda = v \\cdot T = v / N$</span>
        `;
        metricsGrid.innerHTML = [
          metricCard('التردد $N$ والدور $T$:', 'p2Val_TN', '20 Hz / 50 ms', 'text-cyan-300'),
          metricCard('سرعة الانتشار $v$:', 'p2Val_v', '4.0 m/s', 'text-amber-300'),
          metricCard('طول الموجة $\\lambda = v/N$:', 'p2Val_lam', '0.200 m', 'text-emerald-400'),
          metricCard('استطالة $M$ اللحظية:', 'p2Val_ym', '0.00 cm', 'text-rose-300')
        ].join('');
        statusBanner.innerHTML = `
          <div class="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-2">
            <span>〰️</span> <span>الدورية المكانية $\\lambda$ تقرأ على محور $x$ (فوق)، والدورية الزمانية $T$ على محور $t$ (تحت).</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>المقارنة المنهجية (الامتحان الوطني):</b><br/>
          • <b>المظهر المكاني $y(x)$:</b> صورة فورية للحبل؛ المسافة بين ذروتين متتاليتين تساوي <b>طول الموجة $\\lambda$</b>.<br/>
          • <b>المظهر الزمني $y_M(t)$:</b> شاشة راسم التذبذب للنقطة $M$؛ المدة بين ذروتين متتاليتين تساوي <b>الدور $T = 1/N$</b>.<br/>
          • جرّب مضاعفة التردد $N$ مع ثبات $v$: يتناقص كل من $T$ و $\\lambda$ إلى النصف!
        `;
      } else if (state.mode === 'phase-compare') {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block"></span> $M_1$ (مرجع)</span>
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span> $M_2$ ($d = M_1 M_2$)</span>
          </div>
          <span class="text-emerald-300 font-semibold">$d = k\\lambda$ مقابل $(2k+1)\\frac{\\lambda}{2}$</span>
        `;
        metricsGrid.innerHTML = [
          metricCard('المسافة $d$ / طول الموجة:', 'p2Val_d', '0.200 m', 'text-cyan-300'),
          metricCard('النسبة $d / \\lambda$:', 'p2Val_ratio', '1.00', 'text-emerald-400'),
          metricCard('التأخر النسبي $\\tau / T$:', 'p2Val_tauT', '1.00 T', 'text-amber-300'),
          metricCard('الحالة الاهتزازية:', 'p2Val_state', 'توافق في الطور', 'text-emerald-300')
        ].join('');
        statusBanner.innerHTML = `
          <div id="p2PhaseBannerInner" class="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2">
            <span>✅</span> <span>$d = \\lambda \\implies$ النقطتان تهتزان على توافق في الطور ($y_{M_2}(t) = y_{M_1}(t)$).</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>قانونا المقارنة الاهتزازية (بعد وصول الجبهة):</b><br/>
          • إذا كان $\\frac{d}{\\lambda} = k \\in \\mathbb{N}^*$ ($1, 2, 3, \\dots$): <b>توافق في الطور</b> — يصعدان ويهبطان معاً وفي اللحظة نفسها.<br/>
          • إذا كان $\\frac{d}{\\lambda} = k + \\frac{1}{2}$ ($0.5, 1.5, 2.5, \\dots$): <b>تعاكس في الطور</b> — عندما تبلغ $M_1$ ذروة $+A$ تكون $M_2$ في قعر $-A$ ($y_{M_2}=-y_{M_1}$).<br/>
          • تحذير 2D: في حوض الموجات نقيس <b>فرق المسير $|SM_2 - SM_1|$</b> وليس $M_1 M_2$!
        `;
      } else if (state.mode === 'stroboscope') {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-purple-400 inline-block"></span> المظهر تحت إضاءة الوماض ($N_e$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 border-t border-dashed border-slate-500 inline-block"></span> الموجة الحقيقية ($N=20\\text{ Hz}$)</span>
          </div>
          <span class="text-purple-300 font-semibold">$N = N_{e,\\max}$</span>
        `;
        metricsGrid.innerHTML = [
          metricCard('تردد الموجة الحقيقي $N$:', 'p2Val_strN', '20.0 Hz', 'text-cyan-300'),
          metricCard('تردد الوماض $N_e$:', 'p2Val_strNe', '20.0 Hz', 'text-purple-300'),
          metricCard('النسبة $N / N_e$:', 'p2Val_strK', '1.00', 'text-amber-300'),
          metricCard('الملاحظة الظاهرية:', 'p2Val_strObs', 'توقف ظاهري', 'text-emerald-400')
        ].join('');
        statusBanner.innerHTML = `
          <div id="p2StrobeBannerInner" class="p-3 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-2">
            <span>🔦</span> <span>توقف ظاهري مطابق للواقع لأن $N_e = N$!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>قاعدة الوماض الكهربائي في الامتحان:</b><br/>
          • يتحقق <b>التوقف الظاهري البسيط</b> كلما كان $T_e = k T \\iff N_e = \\frac{N}{k}$ ($20\\text{ Hz}, 10\\text{ Hz}, 6.67\\text{ Hz}, \\dots$).<br/>
          • التردد الحقيقي للموجة هو <b>أكبر تردد للوماض</b> يعطي توقفاً ظاهرياً بسيطاً ($N = N_{e,\\max}$).<br/>
          • إذا كان $N_e$ أصغر قليلاً من $N$ نرى حركة بطيئة <b>في المنحى الحقيقي</b>؛ وإذا كان أكبر قليلاً نراها <b>في المنحى المعاكس</b>! وعند $N_e = 2N$ يظهر شكل مزدوج.
        `;
      } else {
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-cyan-400 inline-block"></span> موجات واردة ($\\lambda$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-0.5 bg-emerald-400 inline-block"></span> موجات مجتازة ($\\lambda' = \\lambda$)</span>
          </div>
          <span class="text-amber-300 font-semibold">شرط الحيود: $a \\le \\lambda$</span>
        `;
        metricsGrid.innerHTML = [
          metricCard('سرعة الانتشار $v(N)$:', 'p2Val_dv', '40.0 cm/s', 'text-cyan-300'),
          metricCard('طول الموجة $\\lambda = v/N$:', 'p2Val_dlam', '2.00 cm', 'text-emerald-400'),
          metricCard('نسبة الفتحة $a / \\lambda$:', 'p2Val_drat', '0.60', 'text-amber-300'),
          metricCard('الموجة المحيدة ($\\lambda\', N\'$):', 'p2Val_dinv', 'λ\'=λ (مصونة)', 'text-emerald-300')
        ].join('');
        statusBanner.innerHTML = `
          <div id="p2DiffBannerInner" class="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2">
            <span>🌊</span> <span>الشرط $a \\le \\lambda$ محقق: حيود واضح وتحوّل الموجات المستقيمة إلى دائرية!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>قوانين الحيود والتبدد (2BAC PC):</b><br/>
          • <b>ثبات الخصائص بعد الشق:</b> لأن الوسط لم يتغير والمنبع هو نفسه، تظل $N'=N$ و $v'=v$ و $\\lambda'=\\lambda$ (يتناقص الوسع فقط).<br/>
          • <b>تجربة التبدد الحقيقية:</b> ارفع التردد $N$ من $20\\text{ Hz}$ إلى $50\\text{ Hz}$ في <b>الماء المبدد</b>: تلاحظ تغيّر $v(N)$ وتقلّص $\\lambda$، ما قد يزيل الحيود عبر الفتحة نفسها إذا صار $a &gt; \\lambda$!
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
      freqDisplay.textContent = `N = ${state.freqN} Hz`;
      speedDisplay.textContent = `v = ${state.speedV.toFixed(1)} m/s`;
      ratioDisplay.textContent = `d = ${state.dLambdaRatio.toFixed(2)} λ`;
      strobeDisplay.textContent = `N_e = ${state.strobeNe.toFixed(1)} Hz`;
      slitDisplay.textContent = `a = ${state.slitAcm.toFixed(1)} cm`;
      diffFreqDisplay.textContent = `N = ${state.diffFreqN} Hz`;

      if (state.mode === 'double-period') {
        const N = state.freqN;
        const T = 1.0 / N;
        const v = state.speedV;
        const lambda = v / N;
        const omega = 2 * Math.PI * N;
        const k = (2 * Math.PI) / lambda;
        const amp = 1.0;

        // Top subplot: y(x) spatial wave across x in [0, 0.80 m]
        const xSpan = Math.max(0.45, Math.min(1.0, lambda * 3.6));
        const spPlane = c.createPlane(W, H, { originX: 56, originY: 98, scaleX: (W - 96) / xSpan, scaleY: 54 });
        const tpPlane = c.createPlane(W, H, { originX: 56, originY: 294, scaleX: (W - 96) / 0.16, scaleY: 54 });

        // Top axes & grid
        c.drawGrid(ctx, spPlane, { xMin: 0, xMax: xSpan, xStep: xSpan / 8, yMin: -1.3, yMax: 1.3, yStep: 1.3 });
        c.drawLine(ctx, spPlane, 0, 0, xSpan, 0, { color: '#475569', lineWidth: 1.5 });
        c.drawLabel(ctx, `Aspect spatial y(x) [m]  |  lambda = ${lambda.toFixed(3)} m`, 56, 22, { color: '#67e8f9', font: 'bold 11.5px monospace' });

        const ySpatial = (x) => amp * Math.sin(omega * state.t - k * x);
        // Clip curve vertically around originY=98 by simply keeping scaleY=54 (<= +/-54px around y=98 => y in [44,152])
        c.plotCurve(ctx, spPlane, ySpatial, 0, xSpan, { color: '#22d3ee', lineWidth: 2.8, step: xSpan / 180 });

        // Wavelength bracket between two visible crests near middle
        const phaseOffset = omega * state.t;
        let crest1 = (phaseOffset - Math.PI / 2) / k;
        while (crest1 < 0.02 * xSpan) crest1 += lambda;
        while (crest1 > xSpan - 1.2 * lambda && crest1 - lambda > 0.02 * xSpan) crest1 -= lambda;
        const crest2 = crest1 + lambda;
        if (crest1 >= 0 && crest2 <= xSpan) {
          c.drawLine(ctx, spPlane, crest1, 1.05, crest1, 1.35, { color: '#34d399' });
          c.drawLine(ctx, spPlane, crest2, 1.05, crest2, 1.35, { color: '#34d399' });
          c.drawHalfTangentArrow(ctx, spPlane, crest1, 1.25, crest2, 1.25, '#34d399');
          c.drawLabel(ctx, `lambda=${lambda.toFixed(2)}m`, 0.5 * (spPlane.toPxX(crest1) + spPlane.toPxX(crest2)) - 34, spPlane.toPxY(1.38), { color: '#34d399', font: 'bold 10.5px monospace' });
        }

        // Probe M on top plot at xM = 0.25 * xSpan
        const xM = Math.min(0.20, 0.3 * xSpan);
        const ymVal = ySpatial(xM);
        c.drawPoint(ctx, spPlane, xM, ymVal, { fill: '#fb7185', radius: 5.5 });
        c.drawLabel(ctx, `M`, spPlane.toPxX(xM) - 5, spPlane.toPxY(ymVal) - 10, { color: '#fb7185', font: 'bold 11px monospace' });

        // Divider
        ctx.save();
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(16, 194);
        ctx.lineTo(W - 16, 194);
        ctx.stroke();
        ctx.restore();

        // Bottom subplot: Oscilloscope y_M(t) over t in [0, 0.16 s = 160 ms]
        c.drawLine(ctx, tpPlane, 0, 0, 0.16, 0, { color: '#475569', lineWidth: 1.5 });
        c.drawLabel(ctx, `Oscillogramme y_M(t) [ms]  |  T = ${(T * 1000).toFixed(1)} ms`, 56, 216, { color: '#fde68a', font: 'bold 11.5px monospace' });
        for (let ms = 0; ms <= 160; ms += 20) {
          const px = tpPlane.toPxX(ms / 1000);
          c.drawLine(ctx, tpPlane, ms / 1000, -1.2, ms / 1000, 1.2, { color: '#1e293b', lineWidth: 1 });
          c.drawLabel(ctx, `${ms}`, px - 8, tpPlane.originY + 68, { color: '#64748b', font: '10px monospace' });
        }
        const yTemp = (tt) => amp * Math.sin(omega * tt - k * xM);
        c.plotCurve(ctx, tpPlane, yTemp, 0, 0.16, { color: '#fbbf24', lineWidth: 2.6, step: 0.0008 });

        // Period T bracket on bottom subplot
        let tC1 = (k * xM + Math.PI / 2) / omega;
        while (tC1 < 0.01) tC1 += T;
        const tC2 = tC1 + T;
        if (tC2 <= 0.155) {
          c.drawLine(ctx, tpPlane, tC1, 1.05, tC1, 1.32, { color: '#fbbf24' });
          c.drawLine(ctx, tpPlane, tC2, 1.05, tC2, 1.32, { color: '#fbbf24' });
          c.drawHalfTangentArrow(ctx, tpPlane, tC1, 1.24, tC2, 1.24, '#fbbf24');
          c.drawLabel(ctx, `T=${(T * 1000).toFixed(0)}ms`, 0.5 * (tpPlane.toPxX(tC1) + tpPlane.toPxX(tC2)) - 22, tpPlane.toPxY(1.36), { color: '#fbbf24', font: 'bold 10.5px monospace' });
        }
        const tWrapped = state.t % 0.16;
        c.drawPoint(ctx, tpPlane, tWrapped, yTemp(tWrapped), { fill: '#fb7185', radius: 5.5 });

        probeLabel.textContent = `t = ${state.t.toFixed(2)} s`;
        const elTN = hostEl.querySelector('#p2Val_TN');
        const elV = hostEl.querySelector('#p2Val_v');
        const elLam = hostEl.querySelector('#p2Val_lam');
        const elYm = hostEl.querySelector('#p2Val_ym');
        if (elTN) elTN.textContent = `${N} Hz / ${(T * 1000).toFixed(1)} ms`;
        if (elV) elV.textContent = `${v.toFixed(1)} m/s`;
        if (elLam) elLam.textContent = `${lambda.toFixed(3)} m`;
        if (elYm) elYm.textContent = `${(ymVal >= 0 ? '+' : '') + (ymVal * 2.0).toFixed(2)} cm`;
      } else if (state.mode === 'phase-compare') {
        const N = state.freqN;
        const v = state.speedV;
        const lambda = v / N;
        const r = state.dLambdaRatio;
        const d = r * lambda;
        const x1 = 0.35 * lambda;
        const x2 = x1 + d;
        const xSpan = 3.2 * lambda;
        const omega = 2 * Math.PI * N;
        const k = (2 * Math.PI) / lambda;

        const isInPhase = Math.abs(r - Math.round(r)) < 0.03 && r > 0.1;
        const isOpposite = Math.abs(r - (Math.floor(r) + 0.5)) < 0.03;
        const m2Color = isInPhase ? '#34d399' : (isOpposite ? '#fb7185' : '#fbbf24');

        // Top: y(x)
        const spPlane = c.createPlane(W, H, { originX: 52, originY: 96, scaleX: (W - 92) / xSpan, scaleY: 50 });
        c.drawGrid(ctx, spPlane, { xMin: 0, xMax: xSpan, xStep: 0.5 * lambda, yMin: -1.2, yMax: 1.2, yStep: 1.2 });
        c.drawLine(ctx, spPlane, 0, 0, xSpan, 0, { color: '#475569' });
        c.drawLabel(ctx, `Sur la corde y(x)  |  d = ${r.toFixed(2)} * lambda`, 52, 22, { color: '#e2e8f0', font: 'bold 11.5px monospace' });

        const yFn = (x) => Math.sin(omega * state.t - k * x);
        c.plotCurve(ctx, spPlane, yFn, 0, xSpan, { color: '#64748b', lineWidth: 2.2, step: xSpan / 180 });

        const y1 = yFn(x1);
        const y2 = yFn(x2);
        c.drawLine(ctx, spPlane, x1, 0, x1, y1, { color: '#22d3ee', dash: [3, 3] });
        c.drawLine(ctx, spPlane, x2, 0, x2, y2, { color: m2Color, dash: [3, 3] });
        c.drawPoint(ctx, spPlane, x1, y1, { fill: '#22d3ee', radius: 6 });
        c.drawPoint(ctx, spPlane, x2, y2, { fill: m2Color, radius: 6 });
        c.drawLabel(ctx, 'M1', spPlane.toPxX(x1) - 8, spPlane.toPxY(y1) - 10, { color: '#22d3ee' });
        c.drawLabel(ctx, 'M2', spPlane.toPxX(x2) - 8, spPlane.toPxY(y2) - 10, { color: m2Color });

        // d bracket
        c.drawLine(ctx, spPlane, x1, -1.25, x2, -1.25, { color: m2Color, lineWidth: 2 });
        c.drawLabel(ctx, `d = ${r.toFixed(2)}*lambda`, 0.5 * (spPlane.toPxX(x1) + spPlane.toPxX(x2)) - 32, spPlane.toPxY(-1.55), { color: m2Color, font: 'bold 10.5px monospace' });

        // Bottom: Dual Oscilloscope traces over 2 periods
        const T = 1 / N;
        const tpPlane = c.createPlane(W, H, { originX: 52, originY: 292, scaleX: (W - 92) / (2.2 * T), scaleY: 50 });
        c.drawLine(ctx, tpPlane, 0, 0, 2.2 * T, 0, { color: '#475569' });
        c.drawLabel(ctx, 'Oscillogrammes y_M1(t) [cyan] vs y_M2(t) [pointilles]', 52, 214, { color: '#cbd5e1', font: 'bold 11.5px monospace' });
        c.plotCurve(ctx, tpPlane, (tt) => Math.sin(omega * tt - k * x1), 0, 2.2 * T, { color: '#22d3ee', lineWidth: 2.8, step: T / 70 });
        c.plotCurve(ctx, tpPlane, (tt) => Math.sin(omega * tt - k * x2), 0, 2.2 * T, { color: m2Color, lineWidth: 2.4, dash: [6, 5], step: T / 70 });

        probeLabel.textContent = `d = ${r.toFixed(2)} λ`;
        const elD = hostEl.querySelector('#p2Val_d');
        const elR = hostEl.querySelector('#p2Val_ratio');
        const elT = hostEl.querySelector('#p2Val_tauT');
        const elS = hostEl.querySelector('#p2Val_state');
        const banner = hostEl.querySelector('#p2PhaseBannerInner');
        if (elD) elD.textContent = `${d.toFixed(3)} m`;
        if (elR) elR.textContent = `${r.toFixed(2)}`;
        if (elT) elT.textContent = `${r.toFixed(2)} T`;
        if (elS) {
          elS.textContent = isInPhase ? 'توافق في الطور' : (isOpposite ? 'تعاكس في الطور' : 'حالة وسطى');
          elS.className = `font-mono font-bold text-xs ${isInPhase ? 'text-emerald-400' : (isOpposite ? 'text-rose-400' : 'text-amber-300')}`;
        }
        if (banner) {
          if (isInPhase) {
            banner.className = 'p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2';
            banner.textContent = `✅ d = ${Math.round(r)}·λ : توافق في الطور — المنحنيان متطابقان تماماً!`;
          } else if (isOpposite) {
            banner.className = 'p-3 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 font-bold text-xs flex items-center gap-2';
            banner.textContent = `🔁 d = ${r.toFixed(1)}·λ : تعاكس في الطور — القمة توافق القعر تماماً!`;
          } else {
            banner.className = 'p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-2';
            banner.textContent = `〰️ d = ${r.toFixed(2)}·λ : لا توافق ولا تعاكس (فرق الطور بين 0 و π).`;
          }
        }
      } else if (state.mode === 'stroboscope') {
        const trueN = 20.0;
        const Ne = state.strobeNe;
        const ratio = trueN / Ne;
        const kInt = Math.round(ratio);
        const isSubharmonicStop = Math.abs(ratio - kInt) < 0.025 && kInt >= 1;
        const isDoubled = Math.abs(Ne - 2 * trueN) < 0.6;
        // Apparent speed factor: v_app = N - round(N/Ne)*Ne (slow forward when Ne < N/k, slow backward when Ne > N/k)
        const nearestK = Math.max(1, Math.round(trueN / Ne));
        const freqApp = trueN - nearestK * Ne;

        const plane = c.createPlane(W, H, { originX: 52, originY: 205, scaleX: (W - 96) / 3.0, scaleY: 75 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 3.0, xStep: 0.5, yMin: -1.4, yMax: 1.4, yStep: 0.7 });
        c.drawAxes(ctx, plane);

        // Strobe flash lamp badge top right
        const pulseBeat = 0.5 + 0.5 * Math.cos(2 * Math.PI * (isSubharmonicStop ? 0 : Math.abs(freqApp)) * state.t);
        ctx.save();
        ctx.fillStyle = `rgba(192, 132, 252, ${0.25 + 0.55 * pulseBeat})`;
        ctx.strokeStyle = '#c084fc';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(W - 54, 40, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        c.drawLabel(ctx, `Flash Ne=${Ne.toFixed(1)}Hz`, W - 190, 44, { color: '#d8b4fe', font: 'bold 11px monospace' });
        c.drawLabel(ctx, `Onde reelle: N = 20.0 Hz  (v_reelle ->)`, 56, 36, { color: '#67e8f9', font: 'bold 11.5px monospace' });

        // True subtle ghost wave moving forward fast
        c.plotCurve(ctx, plane, (x) => Math.sin(2 * Math.PI * (trueN * state.t * 0.25 - x)), 0, 3.0, {
          color: 'rgba(100, 116, 139, 0.35)', lineWidth: 1.5, dash: [4, 4]
        });

        // Strobe apparent curve
        const phaseApp = 2 * Math.PI * (isSubharmonicStop ? 0.15 : (freqApp * state.t * 0.35 + 0.15));
        if (isDoubled) {
          c.plotCurve(ctx, plane, (x) => Math.sin(phaseApp - 2 * Math.PI * x), 0, 3.0, { color: '#c084fc', lineWidth: 2.8 });
          c.plotCurve(ctx, plane, (x) => -Math.sin(phaseApp - 2 * Math.PI * x), 0, 3.0, { color: '#f472b6', lineWidth: 2.4, dash: [5, 4] });
          c.drawLabel(ctx, 'DEDOUBLEMENT (Ne = 2N)', 220, 92, { color: '#f472b6', font: 'bold 12px monospace' });
        } else {
          c.plotCurve(ctx, plane, (x) => Math.sin(phaseApp - 2 * Math.PI * x), 0, 3.0, { color: '#c084fc', lineWidth: 3.4 });
          if (isSubharmonicStop) {
            c.drawLabel(ctx, kInt === 1 ? 'IMMOBILITE APPARENTE UNIQUE (N = Ne)' : `IMMOBILITE APPARENTE (k = ${kInt}, Ne = N/${kInt})`, 165, 92, { color: '#34d399', font: 'bold 12px monospace' });
          } else if (freqApp > 0) {
            c.drawHalfTangentArrow(ctx, plane, 0.8, 1.32, 1.9, 1.32, '#34d399');
            c.drawLabel(ctx, 'Mouvement lent DIRECT ->', plane.toPxX(0.85), plane.toPxY(1.48), { color: '#34d399', font: 'bold 11.5px monospace' });
          } else {
            c.drawHalfTangentArrow(ctx, plane, 1.9, 1.32, 0.8, 1.32, '#fb7185');
            c.drawLabel(ctx, '<- Mouvement lent INVERSE', plane.toPxX(0.82), plane.toPxY(1.48), { color: '#fb7185', font: 'bold 11.5px monospace' });
          }
        }

        probeLabel.textContent = `N = 20 Hz | N_e = ${Ne.toFixed(1)} Hz`;
        const elN = hostEl.querySelector('#p2Val_strN');
        const elNe = hostEl.querySelector('#p2Val_strNe');
        const elK = hostEl.querySelector('#p2Val_strK');
        const elObs = hostEl.querySelector('#p2Val_strObs');
        const banner = hostEl.querySelector('#p2StrobeBannerInner');
        if (elN) elN.textContent = '20.0 Hz';
        if (elNe) elNe.textContent = `${Ne.toFixed(1)} Hz`;
        if (elK) elK.textContent = `${ratio.toFixed(2)}`;
        let obsTxt = '';
        if (isDoubled) obsTxt = 'مضاعفة الشكل (Ne=2N)';
        else if (isSubharmonicStop && kInt === 1) obsTxt = 'توقف مطابق (k=1)';
        else if (isSubharmonicStop) obsTxt = `توقف ظاهري (k=${kInt})`;
        else if (freqApp > 0) obsTxt = 'بطيئة في المنحى الحقيقي →';
        else obsTxt = '← بطيئة في المنحى المعاكس';
        if (elObs) elObs.textContent = obsTxt;
        if (banner) banner.textContent = `🔦 ${obsTxt} (N/N_e = ${ratio.toFixed(2)})`;
      } else {
        // Mode 4: Diffraction + Dispersion ripple tank
        const N = state.diffFreqN;
        const vCm = getDiffSpeedCmS(N, state.dispersiveWater);
        const lamCm = vCm / N;
        const aCm = state.slitAcm;
        const ratio = aCm / lamCm;
        const hasDiff = ratio <= 1.15;

        // Draw ripple tank background
        ctx.save();
        ctx.fillStyle = state.dispersiveWater ? 'rgba(14, 116, 144, 0.14)' : 'rgba(51, 65, 85, 0.14)';
        ctx.fillRect(24, 34, W - 48, H - 64);
        ctx.strokeStyle = '#1e293b';
        ctx.strokeRect(24, 34, W - 48, H - 64);
        ctx.restore();

        // Scale: 1 cm = 28 px
        const pxPerCm = 28;
        const lamPx = Math.max(14, Math.min(72, lamCm * pxPerCm));
        const slitX = 280;
        const slitCenterY = H / 2 + 4;
        const slitHalfPx = Math.min(110, 0.5 * aCm * pxPerCm);
        const phaseShift = ((state.t * N * 0.18) % 1) * lamPx;

        // Incident vertical wavefronts in [34 .. slitX - 6]
        ctx.save();
        ctx.strokeStyle = '#22d3ee';
        ctx.lineWidth = 2.4;
        for (let x = 34 + phaseShift; x < slitX - 4; x += lamPx) {
          ctx.beginPath();
          ctx.moveTo(x, 42);
          ctx.lineTo(x, H - 38);
          ctx.stroke();
        }
        ctx.restore();

        // Obstacle barrier walls
        ctx.save();
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(slitX - 4, 36, 8, Math.max(8, slitCenterY - slitHalfPx - 36));
        ctx.fillRect(slitX - 4, slitCenterY + slitHalfPx, 8, Math.max(8, H - 32 - (slitCenterY + slitHalfPx)));
        ctx.restore();
        c.drawLabel(ctx, `a = ${aCm.toFixed(1)} cm`, slitX - 30, 24, { color: '#fde68a', font: 'bold 11.5px monospace' });
        c.drawLabel(ctx, `lambda = ${lamCm.toFixed(2)} cm`, 50, 24, { color: '#67e8f9', font: 'bold 11.5px monospace' });

        // Transmitted waves to the right of slitX
        ctx.save();
        ctx.beginPath();
        ctx.rect(slitX + 4, 36, W - 28 - slitX, H - 68);
        ctx.clip();

        if (hasDiff) {
          // Circular diffracted wavefronts with exact same lamPx!
          ctx.strokeStyle = '#34d399';
          ctx.lineWidth = 2.4;
          const maxR = 400;
          const spreadAngle = Math.max(0.55, Math.min(Math.PI * 0.46, (1.3 / Math.max(0.35, ratio)) * 0.72));
          for (let r = phaseShift; r < maxR; r += lamPx) {
            if (r < 6) continue;
            ctx.beginPath();
            ctx.arc(slitX + 4, slitCenterY, r, -spreadAngle, spreadAngle);
            ctx.stroke();
          }
          c.drawLabel(ctx, "Diffraction nette (lambda' = lambda)", slitX + 75, H - 46, { color: '#6ee7b7', font: 'bold 11.5px monospace' });
        } else {
          // Rectilinear propagation within geometric slit shadow
          ctx.strokeStyle = '#fbbf24';
          ctx.lineWidth = 2.4;
          for (let x = slitX + 4 + phaseShift; x < W - 30; x += lamPx) {
            ctx.beginPath();
            ctx.moveTo(x, Math.max(42, slitCenterY - slitHalfPx));
            ctx.lineTo(x, Math.min(H - 38, slitCenterY + slitHalfPx));
            ctx.stroke();
          }
          // Subtle geometric shadow dashed guides
          ctx.strokeStyle = 'rgba(251, 191, 36, 0.35)';
          ctx.setLineDash([4, 4]);
          ctx.beginPath();
          ctx.moveTo(slitX + 4, slitCenterY - slitHalfPx);
          ctx.lineTo(W - 30, slitCenterY - slitHalfPx);
          ctx.moveTo(slitX + 4, slitCenterY + slitHalfPx);
          ctx.lineTo(W - 30, slitCenterY + slitHalfPx);
          ctx.stroke();
          c.drawLabel(ctx, 'Propagation rectiligne (a > lambda)', slitX + 75, H - 46, { color: '#fde68a', font: 'bold 11.5px monospace' });
        }
        ctx.restore();

        probeLabel.textContent = `a/λ = ${ratio.toFixed(2)} | v = ${(vCm / 100).toFixed(2)} m/s`;
        const elDv = hostEl.querySelector('#p2Val_dv');
        const elDlam = hostEl.querySelector('#p2Val_dlam');
        const elDrat = hostEl.querySelector('#p2Val_drat');
        const elDinv = hostEl.querySelector('#p2Val_dinv');
        const banner = hostEl.querySelector('#p2DiffBannerInner');
        if (elDv) elDv.textContent = `${vCm.toFixed(1)} cm/s`;
        if (elDlam) elDlam.textContent = `${lamCm.toFixed(2)} cm`;
        if (elDrat) {
          elDrat.textContent = `${ratio.toFixed(2)}`;
          elDrat.className = `font-mono font-bold text-sm ${hasDiff ? 'text-emerald-400' : 'text-amber-300'}`;
        }
        if (elDinv) elDinv.textContent = `${lamCm.toFixed(2)} cm (λ'=λ)`;
        if (banner) {
          if (hasDiff) {
            banner.className = 'p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2';
            banner.textContent = `🌊 a/λ = ${ratio.toFixed(2)} ≤ 1 : حيود واضح وموجات دائرية (λ' = λ = ${lamCm.toFixed(2)} cm)!`;
          } else {
            banner.className = 'p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-2';
            banner.textContent = `➡️ a/λ = ${ratio.toFixed(2)} > 1 : لا يحدث حيود واضح — انتشار مستقيم!`;
          }
        }
      }
    }

    function stopAnim() {
      state.playing = false;
      if (state.rafId) {
        cancelAnimationFrame(state.rafId);
        state.rafId = null;
      }
      playBtn.textContent = '▶ تشغيل الانتشار';
    }

    function startAnim() {
      if (state.playing) return;
      state.playing = true;
      playBtn.textContent = '⏸ إيقاف مؤقت';
      state.lastTs = performance.now();
      const tick = (now) => {
        if (!state.playing) return;
        const dt = Math.min(0.05, (now - state.lastTs) / 1000);
        state.lastTs = now;
        state.t += dt * 0.25;
        drawFrame();
        state.rafId = requestAnimationFrame(tick);
      };
      state.rafId = requestAnimationFrame(tick);
    }

    function setMode(mode) {
      stopAnim();
      state.mode = mode;

      hostEl.querySelectorAll('[data-phys2-mode]').forEach((btn) => {
        const meta = MODES_META.find((m) => m.id === btn.dataset.phys2Mode);
        const active = btn.dataset.phys2Mode === mode;
        btn.className = active
          ? `px-3 py-2 rounded-xl text-xs font-bold transition ${meta.activeCls}`
          : 'px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition';
      });

      phasePresets.classList.toggle('hidden', mode !== 'phase-compare');
      controlsPhase.classList.toggle('hidden', mode !== 'phase-compare');
      strobePresets.classList.toggle('hidden', mode !== 'stroboscope');
      controlsStrobe.classList.toggle('hidden', mode !== 'stroboscope');
      diffSub.classList.toggle('hidden', mode !== 'diffraction');
      controlsDiff.classList.toggle('hidden', mode !== 'diffraction');
      controlsWave.classList.toggle('hidden', mode === 'stroboscope' || mode === 'diffraction');

      syncStaticChrome();
      drawFrame();
    }

    function setPhaseRatio(r) {
      state.dLambdaRatio = r;
      ratioSlider.value = r.toFixed(2);
      hostEl.querySelectorAll('[data-p2-ratio]').forEach((btn) => {
        const active = Math.abs(parseFloat(btn.dataset.p2Ratio) - r) < 0.05;
        btn.className = active
          ? 'px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 transition'
          : 'px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition';
      });
      drawFrame();
    }

    function setStrobeNe(ne) {
      state.strobeNe = ne;
      strobeSlider.value = ne.toFixed(1);
      hostEl.querySelectorAll('[data-p2-ne]').forEach((btn) => {
        const active = Math.abs(parseFloat(btn.dataset.p2Ne) - ne) < 0.25;
        btn.className = active
          ? 'px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-500 text-slate-950 transition'
          : 'px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition';
      });
      drawFrame();
    }

    function setMediumType(isDisp) {
      state.dispersiveWater = isDisp;
      hostEl.querySelectorAll('[data-p2-medium]').forEach((btn) => {
        const active = (btn.dataset.p2Medium === 'dispersive') === isDisp;
        btn.className = active
          ? 'px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 transition'
          : 'px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition';
      });
      drawFrame();
    }

    hostEl.addEventListener('click', (e) => {
      const mBtn = e.target.closest('[data-phys2-mode]');
      if (mBtn) return setMode(mBtn.dataset.phys2Mode);
      const rBtn = e.target.closest('[data-p2-ratio]');
      if (rBtn) return setPhaseRatio(parseFloat(rBtn.dataset.p2Ratio));
      const nBtn = e.target.closest('[data-p2-ne]');
      if (nBtn) return setStrobeNe(parseFloat(nBtn.dataset.p2Ne));
      const dBtn = e.target.closest('[data-p2-medium]');
      if (dBtn) return setMediumType(dBtn.dataset.p2Medium === 'dispersive');
    });

    playBtn.addEventListener('click', () => (state.playing ? stopAnim() : startAnim()));
    resetBtn.addEventListener('click', () => {
      stopAnim();
      state.t = 0.12;
      drawFrame();
    });

    freqSlider.addEventListener('input', () => {
      state.freqN = parseInt(freqSlider.value, 10);
      drawFrame();
    });
    speedSlider.addEventListener('input', () => {
      state.speedV = parseFloat(speedSlider.value);
      drawFrame();
    });
    ratioSlider.addEventListener('input', () => setPhaseRatio(parseFloat(ratioSlider.value)));
    strobeSlider.addEventListener('input', () => setStrobeNe(parseFloat(strobeSlider.value)));
    slitSlider.addEventListener('input', () => {
      state.slitAcm = parseFloat(slitSlider.value);
      drawFrame();
    });
    diffFreqSlider.addEventListener('input', () => {
      state.diffFreqN = parseInt(diffFreqSlider.value, 10);
      drawFrame();
    });

    api.renderMath(hostEl);
    setMode('double-period');
  }

  global.EulerAcademy.registerSimulator('phys-02', { mount });
})(window);
