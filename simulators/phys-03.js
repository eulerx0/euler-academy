/**
 * Euler Academy — Interactive 4-Mode Optical Wave Laboratory for Physics Lesson 03
 * (1. Diffraction laser θ=λ/a & L=2λD/a + orientation, 2. Courbe d'étalonnage θ=f(1/a),
 *  3. Indice de réfraction n=c/v=λ₀/λ avec ν invariante, 4. Spectre visible & dispersion par prisme)
 */
(function (global) {
  'use strict';

  const C = () => global.EulerCanvas;

  const MODES_META = [
    { id: 'diffraction', label: '1. مختبر حيود الليزر ($L=\\frac{2\\lambda D}{a}$)', activeCls: 'bg-cyan-500 text-slate-950 shadow' },
    { id: 'calibration', label: '2. منحنى المعايرة $\\theta=f(1/a)$', activeCls: 'bg-emerald-500 text-slate-950 shadow' },
    { id: 'refractive', label: '3. معامل الانكسار $n=\\frac{c}{v}=\\frac{\\lambda_0}{\\lambda}$', activeCls: 'bg-amber-500 text-slate-950 shadow' },
    { id: 'dispersion', label: '4. الطيف المرئي وتبدد الموشور', activeCls: 'bg-purple-500 text-slate-950 shadow' }
  ];

  const LASERS = [
    { nm: 405, color: '#a855f7', nameAr: 'بنفسجي ($405\\text{ nm}$)' },
    { nm: 532, color: '#22c55e', nameAr: 'أخضر ($532\\text{ nm}$)' },
    { nm: 650, color: '#fb7185', nameAr: 'أحمر ($650\\text{ nm}$)' }
  ];

  const MEDIA = [
    { id: 'water', n: 1.33, label: 'الماء ($n=1.33$)', tint: 'rgba(56, 189, 248, 0.14)' },
    { id: 'crown', n: 1.50, label: 'زجاج تاجي ($n=1.50$)', tint: 'rgba(167, 139, 250, 0.14)' },
    { id: 'flint', n: 1.65, label: 'زجاج فلينت ($n=1.65$)', tint: 'rgba(251, 191, 36, 0.14)' },
    { id: 'diamond', n: 2.42, label: 'الماس ($n=2.42$)', tint: 'rgba(52, 211, 153, 0.14)' }
  ];

  function metricCard(labelHtml, valId, initVal, valueCls = 'text-cyan-300') {
    return `
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span class="text-slate-400 block mb-1">${labelHtml}</span>
        <span id="${valId}" class="font-mono font-bold ${valueCls} text-sm" dir="ltr">${initVal}</span>
      </div>
    `;
  }

  function nmToColor(nm) {
    if (nm < 400) return '#7c3aed';
    if (nm < 450) return '#6366f1';
    if (nm < 495) return '#06b6d4';
    if (nm < 570) return '#22c55e';
    if (nm < 605) return '#eab308';
    if (nm < 640) return '#f97316';
    if (nm <= 800) return '#ef4444';
    return '#991b1b';
  }

  function mount(hostEl, api) {
    const state = {
      mode: 'diffraction',
      laserIdx: 2,          // 650 nm red default
      slitAmm: 0.08,        // 0.04 .. 0.25 mm
      distDm: 2.00,         // 1.00 .. 3.00 m
      orient: 'vertical',   // vertical slit -> horizontal pattern
      calibOneOverA: 12.5,  // 10^3 m^-1 (i.e. a = 0.08 mm)
      medIdx: 1,            // crown n=1.50
      phaseShift: 0,        // animated phase for refractive wave
      sourceWhite: true,    // white polychromatic vs single monochromatic
      probeNm: 550,         // spectral probe 340 .. 860 nm
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
                المختبر البصري التفاعلي • الفيزياء الدرس 03
              </span>
              <span class="text-xs text-slate-400 font-mono">Simulateur d’Ondes Lumineuses (4 Modes)</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">
              محاكي حيود الليزر، معايرة الشق، معامل الانكسار ($n = c/v$)، وتبدد الموشور
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800">
            ${MODES_META.map((m) => `
              <button type="button" data-phys3-mode="${m.id}" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <div id="p3SubBar" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div class="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-3.5 sm:p-4">
            <div id="p3Legend" class="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-3 gap-2"></div>
            <canvas id="p3Canvas" width="680" height="390" class="w-full h-auto rounded-xl bg-[#050811] border border-slate-800/90"></canvas>

            <div class="mt-4 bg-slate-900/90 p-3.5 sm:p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                <div class="flex items-center gap-2">
                  <button type="button" id="p3PlayBtn" class="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-extrabold transition">
                    ▶ تحريك تلقائي
                  </button>
                  <button type="button" id="p3ResetBtn" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition">
                    ↺ ضبط افتراضي
                  </button>
                </div>
                <span id="p3StatusEq" class="text-[11px] text-amber-300 font-mono" dir="ltr">a = 0.08 mm | D = 2.00 m</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span id="p3Slider1Label" class="text-slate-300">عرض الشق $a$ (mm):</span>
                    <span id="p3Slider1Val" class="font-mono text-cyan-300" dir="ltr">0.08 mm</span>
                  </div>
                  <input id="p3Slider1" type="range" min="0.04" max="0.25" step="0.01" value="0.08" class="w-full accent-cyan-400 cursor-pointer" />
                </div>
                <div id="p3Slider2Wrap">
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span id="p3Slider2Label" class="text-slate-300">المسافة شق–شاشة $D$ (m):</span>
                    <span id="p3Slider2Val" class="font-mono text-amber-300" dir="ltr">2.00 m</span>
                  </div>
                  <input id="p3Slider2" type="range" min="1.00" max="3.00" step="0.10" value="2.00" class="w-full accent-amber-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-4">
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
              <h4 class="text-sm font-bold text-cyan-400 mb-3">📐 القياسات الضوئية اللحظية والتأويل الفيزيائي</h4>
              <div id="p3MetricsGrid" class="grid grid-cols-2 gap-3 text-xs mb-4"></div>
              <div id="p3Banner" class="mb-3"></div>
              <div id="p3RuleBox" class="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    const canvas = hostEl.querySelector('#p3Canvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const subBar = hostEl.querySelector('#p3SubBar');
    const legend = hostEl.querySelector('#p3Legend');
    const s1Label = hostEl.querySelector('#p3Slider1Label');
    const s1Val = hostEl.querySelector('#p3Slider1Val');
    const s1 = hostEl.querySelector('#p3Slider1');
    const s2Wrap = hostEl.querySelector('#p3Slider2Wrap');
    const s2Label = hostEl.querySelector('#p3Slider2Label');
    const s2Val = hostEl.querySelector('#p3Slider2Val');
    const s2 = hostEl.querySelector('#p3Slider2');
    const metricsGrid = hostEl.querySelector('#p3MetricsGrid');
    const banner = hostEl.querySelector('#p3Banner');
    const ruleBox = hostEl.querySelector('#p3RuleBox');
    const statusEq = hostEl.querySelector('#p3StatusEq');
    const playBtn = hostEl.querySelector('#p3PlayBtn');
    const resetBtn = hostEl.querySelector('#p3ResetBtn');

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
      if (state.mode === 'diffraction') {
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-1">الليزر:</span>
          ${LASERS.map((lz, i) => `
            <button type="button" data-p3-laser="${i}" class="px-2.5 py-1 rounded-xl text-xs font-bold ${i === state.laserIdx ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">${lz.nameAr}</button>
          `).join('')}
          <span class="text-xs text-slate-400 font-semibold px-2 mr-2">وضع الشق:</span>
          <button type="button" data-p3-orient="vertical" class="px-2.5 py-1 rounded-xl text-xs font-bold ${state.orient === 'vertical' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">شق رأسي $|$</button>
          <button type="button" data-p3-orient="horizontal" class="px-2.5 py-1 rounded-xl text-xs font-bold ${state.orient === 'horizontal' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">شق أفقي —</button>
        `;
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span>التركيب التجريبي يساراً + صورة الشاشة المعاينة يميناً</span>
          </div>
          <span class="font-mono text-amber-300" dir="ltr">L = 2 λ D / a</span>
        `;
        s1Label.innerHTML = 'عرض الشق (أو قطر الخيط) $a$:';
        s2Wrap.classList.remove('hidden');
        s2Label.innerHTML = 'المسافة بين الشق والشاشة $D$:';
        metricsGrid.innerHTML = [
          metricCard('الفرق الزاوي $\\theta = \\frac{\\lambda}{a}$:', 'p3Val_theta', '8.13 mrad', 'text-cyan-300'),
          metricCard('عرض البقعة المركزية $L$:', 'p3Val_L', '32.5 mm', 'text-amber-300'),
          metricCard('عرض البقعة الثانوية ($L/2$):', 'p3Val_Lsec', '16.3 mm', 'text-emerald-300'),
          metricCard('اتجاه سلسلة البقع:', 'p3Val_dir', 'أفقي (متعامد)', 'text-purple-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-2">
            <span>🔦</span> <span>لاحظ أن البقعة المركزية يتضاعف عرضها عند تصغير $a$ وتنقلب بزاوية $90^\\circ$ بمجرد قلب الشق!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>علاقات الحيود المعتمدة (2BAC PC):</b><br/>
          • $\\theta = \\frac{\\lambda}{a}$ (بالراديان) و $\\tan\\theta \\approx \\theta = \\frac{L}{2D} \\implies L = \\frac{2\\lambda D}{a}$.<br/>
          • لإيجاد قطر شعرة $d$ نستعمل نفس العلاقة بتعويض $a$ بـ $d$.
        `;
      } else if (state.mode === 'calibration') {
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-1">منحنى الليزر المراد معايرته:</span>
          ${LASERS.map((lz, i) => `
            <button type="button" data-p3-laser="${i}" class="px-3 py-1 rounded-xl text-xs font-bold ${i === state.laserIdx ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">${lz.nameAr}</button>
          `).join('')}
        `;
        legend.innerHTML = `
          <span>منحنى التناسب الخطي $\\theta = \\lambda \\cdot \\frac{1}{a}$ (الميل $k = \\lambda$)</span>
          <span class="font-mono text-emerald-300" dir="ltr">theta = f(1/a)</span>
        `;
        s1Label.innerHTML = 'نقطة الاختبار $\\frac{1}{a}$ ($\\times 10^3\\text{ m}^{-1}$):';
        s2Wrap.classList.add('hidden');
        metricsGrid.innerHTML = [
          metricCard('المقدار $\\frac{1}{a}$:', 'p3Val_invA', '12.5 ×10³ m⁻¹', 'text-cyan-300'),
          metricCard('الفرق الزاوي $\\theta$:', 'p3Val_thCal', '8.13 mrad', 'text-emerald-300'),
          metricCard('القطر الموافق $d$:', 'p3Val_dCal', '80.0 μm', 'text-amber-300'),
          metricCard('معامل التوجيه ($k=\\lambda$):', 'p3Val_slope', '650 nm', 'text-purple-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2">
            <span>📈</span> <span>يمر المستقيم من الأصل؛ قسمة فرق الأراتيب $\\Delta\\theta$ (بـ $\\text{rad}$) على $\\Delta(1/a)$ (بـ $\\text{m}^{-1}$) تعطي $\\lambda$ مباشرة!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>منهجية قراءة مبيان الامتحان الوطني:</b><br/>
          احذر الوحدات: إذا أعطي المحور الأفقي بـ $\\text{mm}^{-1}$ فالضرب في $10^3$ يحوله لـ $\\text{m}^{-1}$، وإذا أعطي المحور العمودي بـ $\\text{mrad}$ فاضربه في $10^{-3}$ قبل قسمة الميل!
        `;
      } else if (state.mode === 'refractive') {
        const med = MEDIA[state.medIdx];
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-1">الوسط الشفاف الثاني:</span>
          ${MEDIA.map((m, i) => `
            <button type="button" data-p3-med="${i}" class="px-3 py-1 rounded-xl text-xs font-bold ${i === state.medIdx ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">${m.label}</button>
          `).join('')}
        `;
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> الفراغ/الهواء ($n=1, c, \\lambda_0$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> ${med.label} ($v=c/n, \\lambda=\\lambda_0/n$)</span>
          </div>
        `;
        s1Label.innerHTML = 'معامل انكسار الوسط $n$:';
        s2Wrap.classList.remove('hidden');
        s2Label.innerHTML = 'طول الموجة في الفراغ $\\lambda_0$:';
        metricsGrid.innerHTML = [
          metricCard('السرعة في الوسط $v = c/n$:', 'p3Val_v', '2.00×10⁸ m/s', 'text-amber-300'),
          metricCard('طول الموجة $\\lambda = \\lambda_0/n$:', 'p3Val_lamM', '433.3 nm', 'text-cyan-300'),
          metricCard('التردد الثابت $\\nu = c/\\lambda_0$:', 'p3Val_nu', '4.62×10¹⁴ Hz', 'text-emerald-300'),
          metricCard('قانون الصون عند العبور:', 'p3Val_color', 'اللون لا يتغير!', 'text-purple-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-2">
            <span>⚡</span> <span>راقب انكماش طول الموجة $\\lambda = \\lambda_0 / n$ وتباطؤ القمم في الوسط، مع بقاء التردد $\\nu$ ثابتاً تماماً!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>العلاقة الأساسية لمعامل الانكسار:</b><br/>
          $$n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda} \\ge 1$$
          بما أن $\\nu' = \\nu$ يفرضها المنبع، فمهما تغيرت $\\lambda$ داخل الزجاج أو الماء فإن لون الضوء يظل كما هو!
        `;
      } else {
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-1">نوع المنبع الضوئي الساقط على الموشور:</span>
          <button type="button" data-p3-source="white" class="px-3 py-1 rounded-xl text-xs font-bold ${state.sourceWhite ? 'bg-purple-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">ضوء أبيض (متعدد الألوان — يتبدد)</button>
          <button type="button" data-p3-source="laser" class="px-3 py-1 rounded-xl text-xs font-bold ${!state.sourceWhite ? 'bg-purple-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">ليزر أحادي اللون (ينحرف دون تبدد)</button>
        `;
        legend.innerHTML = `
          <span>حدود الطيف المرئي ($400\\text{ nm} \\le \\lambda_0 \\le 800\\text{ nm}$) وتبدد الموشور</span>
          <span class="font-mono text-purple-300" dir="ltr">Milieu dispersif</span>
        `;
        s1Label.innerHTML = 'طول موجة المجس الطيفي $\\lambda_0$:';
        s2Wrap.classList.add('hidden');
        metricsGrid.innerHTML = [
          metricCard('الطول الموجي في الفراغ $\\lambda_0$:', 'p3Val_pNm', '550 nm', 'text-cyan-300'),
          metricCard('النطاق الطيفي:', 'p3Val_band', 'مرئي (أخضر/أصفر)', 'text-emerald-300'),
          metricCard('معامل الفلينت $n(\\lambda_0)$:', 'p3Val_nF', '1.630', 'text-amber-300'),
          metricCard('السرعة داخل الموشور $v$:', 'p3Val_vF', '1.84×10⁸ m/s', 'text-purple-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-2">
            <span>🔺</span> <span>الإشعاع البنفسجي ($400\\text{ nm}$) له أكبر معامل انكسار $n$ وأبطأ سرعة $v$ داخل الزجاج لذا ينحرف أكثر من الأحمر!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>حدود الإطار المرجعي 2BAC PC:</b><br/>
          المطلوب هو التفسير النوعي لتبدد الضوء الأبيض بتعلق $n$ و $v$ بالتردد $\\nu$؛ أما علاقات زوايا الموشور الحسابية فخارج مقرر PC.
        `;
      }

      api.renderMath(subBar);
      api.renderMath(legend);
      api.renderMath(s1Label);
      api.renderMath(s2Label);
      api.renderMath(metricsGrid);
      api.renderMath(banner);
      api.renderMath(ruleBox);
    }

    function drawFrame() {
      const c = C();
      ctx.clearRect(0, 0, W, H);

      if (state.mode === 'diffraction') {
        const lz = LASERS[state.laserIdx];
        const lamNm = lz.nm;
        const lamM = lamNm * 1e-9;
        const aMm = state.slitAmm;
        const aM = aMm * 1e-3;
        const D = state.distDm;

        const thetaRad = lamM / aM;
        const Lmm = (2 * thetaRad * D) * 1e3;

        s1Val.textContent = `a = ${aMm.toFixed(2)} mm`;
        s2Val.textContent = `D = ${D.toFixed(2)} m`;
        statusEq.textContent = `λ = ${lamNm} nm | θ = ${(thetaRad * 1e3).toFixed(2)} mrad | L = ${Lmm.toFixed(1)} mm`;

        // Left side: Bench View (x=20..420)
        ctx.save();
        ctx.fillStyle = 'rgba(15,23,42,0.7)';
        ctx.fillRect(14, 14, 412, H - 28);
        ctx.strokeStyle = '#1e293b';
        ctx.strokeRect(14, 14, 412, H - 28);

        // Laser source box
        ctx.fillStyle = 'rgba(30,41,59,0.9)';
        ctx.fillRect(30, 170, 58, 42);
        ctx.strokeStyle = lz.color;
        ctx.lineWidth = 2;
        ctx.strokeRect(30, 170, 58, 42);
        c.drawLabel(ctx, 'LASER', 40, 195, { color: lz.color, font: 'bold 11px monospace' });

        // Beam to slit at x=140
        ctx.strokeStyle = lz.color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(88, 191);
        ctx.lineTo(140, 191);
        ctx.stroke();

        // Slit barrier at x=140 (gap proportional to a)
        const gapPx = Math.max(4, Math.min(28, aMm * 95));
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(138, 65, 5, 191 - gapPx / 2 - 65);
        ctx.fillRect(138, 191 + gapPx / 2, 5, 315 - (191 + gapPx / 2));
        c.drawLabel(ctx, `a=${aMm.toFixed(2)}mm`, 114, 54, { color: '#cbd5e1', font: 'bold 10px monospace' });

        // Screen position x=220 + D * 60 (scales smoothly 280..400)
        const scrX = 215 + (D - 1.0) * 85;
        const halfSpotPx = Math.max(10, Math.min(92, Lmm * 1.45));

        // Optical axis dashed
        ctx.strokeStyle = '#475569';
        ctx.setLineDash([4, 4]);
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(143, 191);
        ctx.lineTo(scrX, 191);
        ctx.stroke();
        ctx.setLineDash([]);

        // Diffraction cone
        ctx.strokeStyle = lz.color;
        ctx.lineWidth = 1.6;
        ctx.globalAlpha = 0.75;
        ctx.beginPath();
        ctx.moveTo(143, 191);
        ctx.lineTo(scrX, 191 - halfSpotPx);
        ctx.moveTo(143, 191);
        ctx.lineTo(scrX, 191 + halfSpotPx);
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Screen vertical plate
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(scrX, 60);
        ctx.lineTo(scrX, 322);
        ctx.stroke();

        // D arrow bottom
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(140, 340);
        ctx.lineTo(scrX, 340);
        ctx.stroke();
        c.drawLabel(ctx, `D = ${D.toFixed(2)} m`, (140 + scrX) / 2 - 34, 356, { color: '#fde68a', font: 'bold 11px monospace' });

        // Right side: Live Front View of Screen Spots (x=440..666)
        ctx.fillStyle = '#020617';
        ctx.fillRect(440, 14, 226, H - 28);
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(440, 14, 226, H - 28);
        c.drawLabel(ctx, 'Vue de face (Ecran)', 488, 36, { color: '#cbd5e1', font: 'bold 11px monospace' });

        const cxScr = 553;
        const cyScr = 191;
        const spotSpan = Math.max(24, Math.min(115, Lmm * 1.75));
        const secSpan = spotSpan * 0.5;

        // Draw fringes horizontally if vertical slit, or vertically if horizontal slit
        function drawFringe(dx, dy, lenPx, thickPx, alpha) {
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = lz.color;
          ctx.beginPath();
          if (state.orient === 'vertical') {
            ctx.ellipse(cxScr + dx, cyScr + dy, lenPx / 2, thickPx, 0, 0, Math.PI * 2);
          } else {
            ctx.ellipse(cxScr + dy, cyScr + dx, thickPx, lenPx / 2, 0, 0, Math.PI * 2);
          }
          ctx.fill();
          ctx.restore();
        }
        drawFringe(0, 0, spotSpan, 9, 0.95);
        drawFringe(spotSpan * 0.78, 0, secSpan, 7, 0.55);
        drawFringe(-spotSpan * 0.78, 0, secSpan, 7, 0.55);
        drawFringe(spotSpan * 1.32, 0, secSpan * 0.7, 5, 0.30);
        drawFringe(-spotSpan * 1.32, 0, secSpan * 0.7, 5, 0.30);

        c.drawLabel(
          ctx,
          state.orient === 'vertical' ? 'Bande horizontale (<->)' : 'Bande verticale (^v)',
          482,
          354,
          { color: '#fde68a', font: 'bold 11px monospace' }
        );
        ctx.restore();

        const elTh = hostEl.querySelector('#p3Val_theta');
        const elL = hostEl.querySelector('#p3Val_L');
        const elLs = hostEl.querySelector('#p3Val_Lsec');
        const elDir = hostEl.querySelector('#p3Val_dir');
        if (elTh) elTh.textContent = `${(thetaRad * 1e3).toFixed(2)} mrad`;
        if (elL) elL.textContent = `${Lmm.toFixed(1)} mm`;
        if (elLs) elLs.textContent = `${(Lmm / 2).toFixed(1)} mm`;
        if (elDir) elDir.textContent = state.orient === 'vertical' ? 'أفقي (شق رأسي)' : 'عمودي (شق أفقي)';
      } else if (state.mode === 'calibration') {
        const lz = LASERS[state.laserIdx];
        const lamNm = lz.nm;
        const slopeM = lamNm * 1e-9; // rad / (m^-1) = mrad / (10^3 m^-1)
        const invAk = state.calibOneOverA; // in 10^3 m^-1 [4 .. 25]
        const thetaMrad = invAk * (lamNm * 1e-3); // invA(10^3)*lam(10^-9) rad -> *10^3 = mrad! Exact!
        const dUm = 1000 / invAk; // a in m = 1/(invAk*1e3) -> in um = 1e6/(invAk*1e3) = 1000/invAk!

        s1Val.textContent = `1/a = ${invAk.toFixed(1)}×10³ m⁻¹`;
        statusEq.textContent = `θ = λ·(1/a) = ${thetaMrad.toFixed(2)} mrad  |  d = ${dUm.toFixed(1)} μm`;

        const plane = c.createPlane(W, H, { originX: 75, originY: H - 55, scaleX: 20, scaleY: 16 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 28, xStep: 5, yMin: 0, yMax: 18, yStep: 3 });
        c.drawAxes(ctx, plane);

        // Plot all 3 lasers faintly, active one brightly
        LASERS.forEach((l, idx) => {
          c.plotCurve(ctx, plane, (x) => x * (l.nm * 1e-3), 0, 26, {
            color: idx === state.laserIdx ? l.color : 'rgba(148,163,184,0.28)',
            lineWidth: idx === state.laserIdx ? 3 : 1.5
          });
        });

        c.drawProjections(ctx, plane, invAk, thetaMrad, { color: '#34d399', dash: [4, 4] });
        c.drawPoint(ctx, plane, invAk, thetaMrad, { fill: '#ffffff', radius: 6 });
        c.drawLabel(ctx, `(${invAk.toFixed(1)}, ${thetaMrad.toFixed(2)})`, plane.toPxX(invAk) + 10, plane.toPxY(thetaMrad) - 10, { color: '#6ee7b7', font: 'bold 11px monospace' });
        c.drawLabel(ctx, 'theta (mrad)', 18, 26, { color: '#cbd5e1', font: 'bold 11px monospace' });
        c.drawLabel(ctx, '1/a (10^3 m^-1)', W - 120, H - 16, { color: '#cbd5e1', font: 'bold 11px monospace' });

        const elInvA = hostEl.querySelector('#p3Val_invA');
        const elThC = hostEl.querySelector('#p3Val_thCal');
        const elDC = hostEl.querySelector('#p3Val_dCal');
        const elSl = hostEl.querySelector('#p3Val_slope');
        if (elInvA) elInvA.textContent = `${invAk.toFixed(1)}×10³ m⁻¹`;
        if (elThC) elThC.textContent = `${thetaMrad.toFixed(2)} mrad`;
        if (elDC) elDC.textContent = `${dUm.toFixed(1)} μm`;
        if (elSl) elSl.textContent = `${lamNm} nm`;
      } else if (state.mode === 'refractive') {
        const med = MEDIA[state.medIdx];
        const nVal = med.n;
        const lam0 = state.probeNm; // nm
        const lamMed = lam0 / nVal;
        const vMed = 3.00e8 / nVal;
        const nu = 3.00e8 / (lam0 * 1e-9);
        const waveCol = nmToColor(lam0);

        s1Val.textContent = `n = ${nVal.toFixed(2)}`;
        s2Val.textContent = `λ₀ = ${lam0.toFixed(0)} nm`;
        statusEq.textContent = `v = ${(vMed / 1e8).toFixed(2)}×10⁸ m/s  |  λ = ${lamMed.toFixed(1)} nm  |  ν = cte`;

        const splitX = Math.round(W / 2);
        ctx.save();
        // Right medium fill
        ctx.fillStyle = med.tint;
        ctx.fillRect(splitX, 20, W - splitX - 14, H - 40);
        // Boundary
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(splitX, 20);
        ctx.lineTo(splitX, H - 20);
        ctx.stroke();
        ctx.setLineDash([]);

        c.drawLabel(ctx, 'Air / Vide (n = 1.00)', 95, 42, { color: '#67e8f9', font: 'bold 12px monospace' });
        c.drawLabel(ctx, `Milieu (n = ${nVal.toFixed(2)})`, splitX + 75, 42, { color: '#fde68a', font: 'bold 12px monospace' });

        // Continuous sine wave oscillating with SAME frequency omega at x=splitX,
        // spatial wavenumber k_left = 2*pi / L0px, k_right = n * k_left!
        const cy = Math.round(H / 2);
        const amp = 78;
        const L0px = (lam0 / 600) * 85;
        const k0 = (2 * Math.PI) / L0px;
        ctx.strokeStyle = waveCol;
        ctx.lineWidth = 3.2;
        ctx.beginPath();
        for (let px = 28; px <= W - 28; px += 2) {
          const dx = px - splitX;
          const spatialPhase = dx <= 0 ? k0 * dx : k0 * nVal * dx;
          const y = cy - amp * Math.sin(state.phaseShift - spatialPhase);
          if (px === 28) ctx.moveTo(px, y);
          else ctx.lineTo(px, y);
        }
        ctx.stroke();

        // Axis line
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(28, cy);
        ctx.lineTo(W - 28, cy);
        ctx.stroke();

        // Wavelength brackets above crests
        c.drawLabel(ctx, `lambda_0 = ${lam0} nm`, 95, H - 36, { color: '#7dd3fc', font: 'bold 11px monospace' });
        c.drawLabel(ctx, `lambda = lambda_0/n = ${lamMed.toFixed(1)} nm`, splitX + 55, H - 36, { color: '#fde68a', font: 'bold 11px monospace' });
        ctx.restore();

        const elV = hostEl.querySelector('#p3Val_v');
        const elLm = hostEl.querySelector('#p3Val_lamM');
        const elNu = hostEl.querySelector('#p3Val_nu');
        const elCol = hostEl.querySelector('#p3Val_color');
        if (elV) elV.textContent = `${(vMed / 1e8).toFixed(2)}×10⁸ m/s`;
        if (elLm) elLm.textContent = `${lamMed.toFixed(1)} nm`;
        if (elNu) elNu.textContent = `${(nu / 1e14).toFixed(2)}×10¹⁴ Hz`;
        if (elCol) elCol.textContent = 'لا يتغير (ν ثابت)';
      } else {
        const lamNm = state.probeNm;
        const nVal = 1.50 + 0.012 / Math.pow(lamNm / 1000, 2);
        const vVal = 3.00e8 / nVal;
        const col = nmToColor(lamNm);

        s1Val.textContent = `λ₀ = ${lamNm.toFixed(0)} nm`;
        statusEq.textContent = `n(λ₀) = ${nVal.toFixed(3)}  |  v = ${(vVal / 1e8).toFixed(2)}×10⁸ m/s`;

        // Top bar: Visible spectrum scale (340..860 nm)
        const barX = 70;
        const barW = 540;
        const barY = 38;
        const barH = 38;
        ctx.save();
        const grad = ctx.createLinearGradient(barX + 62, 0, barX + barW - 62, 0);
        grad.addColorStop(0.0, '#7c3aed');
        grad.addColorStop(0.2, '#2563eb');
        grad.addColorStop(0.4, '#06b6d4');
        grad.addColorStop(0.55, '#22c55e');
        grad.addColorStop(0.75, '#eab308');
        grad.addColorStop(1.0, '#ef4444');
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(barX, barY, barW, barH);
        ctx.fillStyle = grad;
        ctx.fillRect(barX + 62, barY, barW - 124, barH);
        ctx.strokeStyle = '#64748b';
        ctx.strokeRect(barX, barY, barW, barH);

        c.drawLabel(ctx, 'UV (<400)', barX + 6, barY + 23, { color: '#a78bfa', font: 'bold 10px monospace' });
        c.drawLabel(ctx, 'IR (>800)', barX + barW - 58, barY + 23, { color: '#fca5a5', font: 'bold 10px monospace' });
        c.drawLabel(ctx, '400 nm', barX + 46, barY + 56, { color: '#c4b5fd', font: 'bold 10px monospace' });
        c.drawLabel(ctx, '800 nm', barX + barW - 84, barY + 56, { color: '#fca5a5', font: 'bold 10px monospace' });

        // Probe marker on spectrum
        const pxProbe = barX + ((lamNm - 340) / 520) * barW;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(pxProbe, barY - 6);
        ctx.lineTo(pxProbe, barY + barH + 6);
        ctx.stroke();

        // Bottom: Glass Prism Dispersion
        ctx.fillStyle = 'rgba(56, 189, 248, 0.14)';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(270, 145);
        ctx.lineTo(195, 325);
        ctx.lineTo(345, 325);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Screen at x=560
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(560, 165);
        ctx.lineTo(560, 345);
        ctx.stroke();

        if (state.sourceWhite) {
          // Incident white beam
          ctx.strokeStyle = '#f8fafc';
          ctx.lineWidth = 3.6;
          ctx.beginPath();
          ctx.moveTo(45, 268);
          ctx.lineTo(234, 232);
          ctx.stroke();
          c.drawLabel(ctx, 'Lumiere blanche', 68, 222, { color: '#f8fafc', font: 'bold 11px monospace' });

          const bands = [
            { col: '#ef4444', yExit: 226, yScr: 215, lbl: 'Rouge (n min)' },
            { col: '#eab308', yExit: 238, yScr: 245, lbl: '' },
            { col: '#22c55e', yExit: 250, yScr: 274, lbl: '' },
            { col: '#38bdf8', yExit: 262, yScr: 300, lbl: '' },
            { col: '#8b5cf6', yExit: 274, yScr: 326, lbl: 'Violet (n max)' }
          ];
          bands.forEach((b) => {
            ctx.strokeStyle = b.col;
            ctx.lineWidth = 2.4;
            ctx.beginPath();
            ctx.moveTo(234, 232);
            ctx.lineTo(306 + (b.yExit - 226) * 0.45, b.yExit);
            ctx.lineTo(558, b.yScr);
            ctx.stroke();
            if (b.lbl) c.drawLabel(ctx, b.lbl, 568, b.yScr + 4, { color: b.col, font: 'bold 10px monospace' });
          });
        } else {
          // Monochromatic probe beam deviates cleanly without dispersing
          const frac = Math.max(0, Math.min(1, (800 - lamNm) / 400));
          const yExit = 228 + frac * 44;
          const yScr = 216 + frac * 108;
          ctx.strokeStyle = col;
          ctx.lineWidth = 3.2;
          ctx.beginPath();
          ctx.moveTo(45, 268);
          ctx.lineTo(234, 232);
          ctx.lineTo(306 + frac * 22, yExit);
          ctx.lineTo(558, yScr);
          ctx.stroke();
          c.drawLabel(ctx, `Laser (${lamNm.toFixed(0)} nm)`, 65, 222, { color: col, font: 'bold 11px monospace' });
          c.drawLabel(ctx, 'Tache unique (Pas de dispersion)', 388, yScr - 14, { color: col, font: 'bold 10px monospace' });
        }
        ctx.restore();

        const elNm = hostEl.querySelector('#p3Val_pNm');
        const elBand = hostEl.querySelector('#p3Val_band');
        const elNF = hostEl.querySelector('#p3Val_nF');
        const elVF = hostEl.querySelector('#p3Val_vF');
        if (elNm) elNm.textContent = `${lamNm.toFixed(0)} nm`;
        if (elBand) {
          elBand.textContent = lamNm < 400 ? 'UV (غير مرئي)' : (lamNm > 800 ? 'IR (غير مرئي)' : 'الطيف المرئي');
          elBand.className = `font-mono font-bold text-sm ${lamNm >= 400 && lamNm <= 800 ? 'text-emerald-300' : 'text-rose-400'}`;
        }
        if (elNF) elNF.textContent = nVal.toFixed(3);
        if (elVF) elVF.textContent = `${(vVal / 1e8).toFixed(2)}×10⁸ m/s`;
      }
    }

    function stepAnim(ts) {
      if (!state.playing) return;
      if (!state.lastTs) state.lastTs = ts;
      const dt = (ts - state.lastTs) / 1000;
      state.lastTs = ts;

      if (state.mode === 'diffraction') {
        state.slitAmm -= dt * 0.04;
        if (state.slitAmm < 0.04) state.slitAmm = 0.24;
        s1.value = state.slitAmm.toFixed(2);
      } else if (state.mode === 'calibration') {
        state.calibOneOverA += dt * 4.5;
        if (state.calibOneOverA > 25) state.calibOneOverA = 4;
        s1.value = state.calibOneOverA.toFixed(1);
      } else if (state.mode === 'refractive') {
        state.phaseShift += dt * 5.0;
      } else {
        state.probeNm += dt * 110;
        if (state.probeNm > 860) state.probeNm = 340;
        s1.value = Math.round(state.probeNm).toString();
      }
      drawFrame();
      state.rafId = global.requestAnimationFrame(stepAnim);
    }

    function setMode(mode) {
      stopAnim();
      state.mode = mode;
      hostEl.querySelectorAll('[data-phys3-mode]').forEach((btn) => {
        const meta = MODES_META.find((m) => m.id === btn.dataset.phys3Mode);
        btn.className = btn.dataset.phys3Mode === mode && meta
          ? `px-3 py-2 rounded-xl text-xs font-bold ${meta.activeCls} transition`
          : 'px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition';
      });

      if (mode === 'diffraction') {
        s1.min = 0.04; s1.max = 0.25; s1.step = 0.01; s1.value = state.slitAmm.toFixed(2);
        s2.min = 1.00; s2.max = 3.00; s2.step = 0.10; s2.value = state.distDm.toFixed(2);
      } else if (mode === 'calibration') {
        s1.min = 4; s1.max = 25; s1.step = 0.5; s1.value = state.calibOneOverA.toFixed(1);
      } else if (mode === 'refractive') {
        s1.min = 1.10; s1.max = 2.50; s1.step = 0.01; s1.value = MEDIA[state.medIdx].n.toFixed(2);
        s2.min = 400; s2.max = 800; s2.step = 10; s2.value = state.probeNm.toFixed(0);
      } else {
        s1.min = 340; s1.max = 860; s1.step = 10; s1.value = state.probeNm.toFixed(0);
      }
      syncChrome();
      drawFrame();
    }

    function setLaserIdx(idx) {
      state.laserIdx = idx;
      if (state.mode === 'refractive') state.probeNm = LASERS[idx].nm;
      syncChrome();
      drawFrame();
    }

    function setOrient(orient) {
      state.orient = orient;
      syncChrome();
      drawFrame();
    }

    function setMedIdx(idx) {
      state.medIdx = idx;
      if (state.mode === 'refractive') s1.value = MEDIA[idx].n.toFixed(2);
      syncChrome();
      drawFrame();
    }

    function setSourceWhite(isWhite) {
      state.sourceWhite = isWhite;
      syncChrome();
      drawFrame();
    }

    hostEl.addEventListener('click', (e) => {
      const mBtn = e.target.closest('[data-phys3-mode]');
      if (mBtn) return setMode(mBtn.dataset.phys3Mode);
      const lBtn = e.target.closest('[data-p3-laser]');
      if (lBtn) return setLaserIdx(Number(lBtn.dataset.p3Laser));
      const oBtn = e.target.closest('[data-p3-orient]');
      if (oBtn) return setOrient(oBtn.dataset.p3Orient);
      const medBtn = e.target.closest('[data-p3-med]');
      if (medBtn) return setMedIdx(Number(medBtn.dataset.p3Med));
      const srcBtn = e.target.closest('[data-p3-source]');
      if (srcBtn) return setSourceWhite(srcBtn.dataset.p3Source === 'white');
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
      state.laserIdx = 2;
      state.slitAmm = 0.08;
      state.distDm = 2.00;
      state.orient = 'vertical';
      state.calibOneOverA = 12.5;
      state.medIdx = 1;
      state.probeNm = 550;
      state.sourceWhite = true;
      setMode(state.mode);
    });

    s1.addEventListener('input', () => {
      stopAnim();
      const v = parseFloat(s1.value);
      if (state.mode === 'diffraction') state.slitAmm = v;
      else if (state.mode === 'calibration') state.calibOneOverA = v;
      else if (state.mode === 'refractive') MEDIA[state.medIdx].n = v;
      else state.probeNm = v;
      drawFrame();
    });

    s2.addEventListener('input', () => {
      stopAnim();
      const v = parseFloat(s2.value);
      if (state.mode === 'diffraction') state.distDm = v;
      else if (state.mode === 'refractive') state.probeNm = v;
      drawFrame();
    });

    hostEl._p3SimApi = { setMode, setLaserIdx, setOrient, setMedIdx, setSourceWhite, drawFrame };
    api.renderMath(hostEl);
    setMode('diffraction');
  }

  global.EulerAcademy.registerSimulator('phys-03', { mount });
})(window);
