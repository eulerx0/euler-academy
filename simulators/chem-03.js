/**
 * Euler Academy — Interactive 4-Mode Acid-Base & Dynamic Equilibrium Lab for Chemistry Lesson 03
 * (1. Échelle pH & dilution, 2. Courbes x(t) Total τ=1 vs Limité τ<1,
 *  3. Équilibre dynamique microscopique v₁=v₂, 4. Influence de C₀ et dilution sur τ acide vs base)
 */
(function (global) {
  'use strict';

  const C = () => global.EulerCanvas;

  const MODES_META = [
    { id: 'ph-scale', label: '1. سلم الـ $pH$ والتخفيف', activeCls: 'bg-emerald-500 text-slate-950 shadow' },
    { id: 'tau-compare', label: '2. كلي ($\\tau=1$) مقابل محدود ($\\tau\\lt 1$)', activeCls: 'bg-cyan-500 text-slate-950 shadow' },
    { id: 'equilibrium', label: '3. التوازن الديناميكي $v_1 = v_2$', activeCls: 'bg-amber-500 text-slate-950 shadow' },
    { id: 'dilution', label: '4. تطور $\\tau$ لحمض مقابل قاعدة', activeCls: 'bg-purple-500 text-slate-950 shadow' }
  ];

  const WEAK_ACIDS = [
    { id: 'ccl3', name: 'ثلاثي كلوروإيثانويك', pKa: 0.70, col: '#22d3ee' },
    { id: 'hcooh', name: 'الميثانويك $\\text{HCOOH}$', pKa: 3.75, col: '#fbbf24' },
    { id: 'ch3cooh', name: 'الإيثانويك $\\text{CH}_3\\text{COOH}$', pKa: 4.76, col: '#fb7185' }
  ];

  function metricCard(labelHtml, valId, initVal, valueCls = 'text-emerald-300') {
    return `
      <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span class="text-slate-400 block mb-1">${labelHtml}</span>
        <span id="${valId}" class="font-mono font-bold ${valueCls} text-sm" dir="ltr">${initVal}</span>
      </div>
    `;
  }

  function solveEquilibriumConc(C0, Ka) {
    // [H3O+]^2 + Ka * [H3O+] - Ka * C0 = 0
    return (-Ka + Math.sqrt(Ka * Ka + 4 * Ka * C0)) / 2;
  }

  function mount(hostEl, api) {
    // Deterministic particles for dynamic equilibrium simulation
    const particles = [];
    for (let i = 0; i < 36; i += 1) {
      particles.push({
        x: 36 + ((i * 73) % 340),
        y: 62 + ((i * 47) % 245),
        vx: (i % 2 === 0 ? 1 : -1) * (28 + (i % 5) * 9),
        vy: (i % 3 === 0 ? 1 : -1) * (24 + (i % 4) * 10),
        state: i < 12 ? 1 : 0 // 0 = HA, 1 = A- / H3O+
      });
    }

    const state = {
      mode: 'ph-scale',
      acidKind: 'weak',       // 'strong' vs 'weak'
      dilutionF: 1.0,         // 1 .. 100
      weakIdx: 1,             // HCOOH default
      tSec: 65,               // 0 .. 100 s for curves
      eqRatioTau: 0.42,       // target equilibrium tau in particle box
      species: 'acid',        // 'acid' vs 'base' for dilution mode
      concM: 0.020,           // 0.001 .. 0.100 mol/L
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
                المختبر البصري التفاعلي • الكيمياء الدرس 03
              </span>
              <span class="text-xs text-slate-400 font-mono">Simulateur pH &amp; Équilibre Chimique (4 Modes)</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">
              محاكي قياس الـ $pH$، التحولات غير الكلية ($\\tau = x_f/x_{\\max}$)، والتوازن الديناميكي المجهري
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 bg-slate-950/90 p-1.5 rounded-2xl border border-slate-800">
            ${MODES_META.map((m) => `
              <button type="button" data-c3-mode="${m.id}" class="px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <div id="c3SubBar" class="hidden mb-4 flex flex-wrap gap-2 items-center bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div class="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-3.5 sm:p-4">
            <div id="c3Legend" class="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-3 gap-2"></div>
            <canvas id="c3Canvas" width="680" height="390" class="w-full h-auto rounded-xl bg-[#050811] border border-slate-800/90"></canvas>

            <div class="mt-4 bg-slate-900/90 p-3.5 sm:p-4 rounded-xl border border-slate-800 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-800/80">
                <div class="flex items-center gap-2">
                  <button type="button" id="c3PlayBtn" class="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition">
                    ▶ تحريك تلقائي
                  </button>
                  <button type="button" id="c3ResetBtn" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition">
                    ↺ ضبط افتراضي
                  </button>
                </div>
                <span id="c3StatusEq" class="text-[11px] text-emerald-300 font-mono" dir="ltr">F = 1.0x | C = 0.010 mol/L</span>
              </div>

              <div>
                <div class="flex justify-between text-xs font-bold mb-1">
                  <span id="c3SliderLabel" class="text-slate-300">معامل التخفيف $F$:</span>
                  <span id="c3SliderVal" class="font-mono text-cyan-300" dir="ltr">1.0x</span>
                </div>
                <input id="c3MainSlider" type="range" min="1" max="100" step="1" value="1" class="w-full accent-emerald-400 cursor-pointer" />
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 space-y-4">
            <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
              <h4 class="text-sm font-bold text-emerald-400 mb-3">🧪 القياسات الفيزيائية-الكيميائية والتحليل الفوري</h4>
              <div id="c3MetricsGrid" class="grid grid-cols-2 gap-3 text-xs mb-4"></div>
              <div id="c3Banner" class="mb-3"></div>
              <div id="c3RuleBox" class="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    const canvas = hostEl.querySelector('#c3Canvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const subBar = hostEl.querySelector('#c3SubBar');
    const legend = hostEl.querySelector('#c3Legend');
    const sliderLabel = hostEl.querySelector('#c3SliderLabel');
    const sliderVal = hostEl.querySelector('#c3SliderVal');
    const slider = hostEl.querySelector('#c3MainSlider');
    const metricsGrid = hostEl.querySelector('#c3MetricsGrid');
    const banner = hostEl.querySelector('#c3Banner');
    const ruleBox = hostEl.querySelector('#c3RuleBox');
    const statusEq = hostEl.querySelector('#c3StatusEq');
    const playBtn = hostEl.querySelector('#c3PlayBtn');
    const resetBtn = hostEl.querySelector('#c3ResetBtn');

    function stopAnim() {
      state.playing = false;
      if (state.rafId) {
        global.cancelAnimationFrame(state.rafId);
        state.rafId = null;
      }
      playBtn.textContent = '▶ تحريك تلقائي';
      playBtn.className = 'px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition';
    }

    function syncChrome() {
      if (state.mode === 'ph-scale') {
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-1">نوع الحمض البدئي ($C_0 = 1.0\\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$):</span>
          <button type="button" data-c3-acid="weak" class="px-3 py-1.5 rounded-xl text-xs font-bold ${state.acidKind === 'weak' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">حمض الإيثانويك ($\\tau \\lt 1$)</button>
          <button type="button" data-c3-acid="strong" class="px-3 py-1.5 rounded-xl text-xs font-bold ${state.acidKind === 'strong' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">حمض كلوريدريك ($\\tau = 1$)</button>
        `;
        legend.innerHTML = `
          <span>قراءة جهاز الـ $pH$-متر وتطور $[\\text{H}_3\\text{O}^+]$ و $\\tau$ عند التخفيف</span>
          <span class="font-mono text-emerald-300" dir="ltr">pH = -log[H3O+]</span>
        `;
        sliderLabel.innerHTML = 'معامل التخفيف $F = V/V_0$:';
        metricsGrid.innerHTML = [
          metricCard('قيمة الـ $pH$:', 'c3Val_ph', '3.38', 'text-emerald-300'),
          metricCard('التركيز $[\\text{H}_3\\text{O}^+]$:', 'c3Val_h3o', '4.1e-4 mol/L', 'text-cyan-300'),
          metricCard('نسبة التقدم $\\tau$:', 'c3Val_tau1', '4.1%', 'text-amber-300'),
          metricCard('التركيز المخفف $C$:', 'c3Val_cDil', '0.010 mol/L', 'text-purple-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2">
            <span>🧪</span> <span>عند التخفيف $\\times 10$: يقفز $pH$ الحمض الكلي بمقدار $+1.00$ بالضبط، بينما يتصاعد $pH$ الحمض الضعيف بـ $+0.5$ وترتفع $\\tau$!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>علاقة التخفيف الحاسمة (2BAC PC):</b><br/>
          تخفيف حمض كلي يحافظ على $\\tau = 1$ ويخفض $[\\text{H}_3\\text{O}^+]$ بـ $F$؛ أما تخفيف حمض ضعيف فيرفع تفككه فتزداد $\\tau = \\frac{10^{-pH}}{C}$.
        `;
      } else if (state.mode === 'tau-compare') {
        const wa = WEAK_ACIDS[state.weakIdx];
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-1">قارن التحول الكلي ($\\text{HCl}$) مع الحمض غير الكلي:</span>
          ${WEAK_ACIDS.map((w, i) => `
            <button type="button" data-c3-weak="${i}" class="px-3 py-1.5 rounded-xl text-xs font-bold ${i === state.weakIdx ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">${w.name}</button>
          `).join('')}
        `;
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span> تفاعل كلي ($\\tau = 1$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> ${wa.name} ($\\tau \\lt 1$)</span>
          </div>
        `;
        sliderLabel.innerHTML = 'الزمن التفاعلي $t$:';
        metricsGrid.innerHTML = [
          metricCard('التقدم المفترض $x_{\\max}$:', 'c3Val_xmax', '1.00 mmol', 'text-emerald-300'),
          metricCard('التقدم التجريبي $x_f$:', 'c3Val_xf', '0.04 mmol', 'text-amber-300'),
          metricCard('نسبة التقدم $\\tau$:', 'c3Val_tau2', '4.1%', 'text-cyan-300'),
          metricCard('طبيعة التحول:', 'c3Val_nat', 'غير كلي (توازن)', 'text-rose-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center gap-2">
            <span>📈</span> <span>يستمر المتفاعل $\\text{HA}$ متعايشاً مع الناتجين $\\text{A}^-$ و $\\text{H}_3\\text{O}^+$ عندما يتوقف المنحنى دون $x_{\\max}$!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>المعيار البرهاني الرسمي:</b><br/>
          نحسب $x_{\\max} = C\\,V$ من فرضية الاستهلاك الكلي، ثم نقيس $x_f = 10^{-pH} V$؛ إن كان $x_f \\lt x_{\\max}$ فإن $\\tau \\lt 1$ والتحول محدود.
        `;
      } else if (state.mode === 'equilibrium') {
        subBar.classList.add('hidden');
        subBar.innerHTML = '';
        legend.innerHTML = `
          <div class="flex flex-wrap items-center gap-3">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span> متفاعلات ($\\text{HA}$)</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-400 inline-block"></span> نواتج ($\\text{A}^- + \\text{H}_3\\text{O}^+$)</span>
            <span class="text-emerald-300 font-mono" dir="ltr">v1 = v2 != 0</span>
          </div>
        `;
        sliderLabel.innerHTML = 'نسبة التوازن المجهري المستهدف $\\tau$:';
        metricsGrid.innerHTML = [
          metricCard('السرعة المباشرة $v_1$:', 'c3Val_v1', 'قيمة موجبة', 'text-cyan-300'),
          metricCard('السرعة المعاكسة $v_2$:', 'c3Val_v2', 'تساوي v₁', 'text-amber-300'),
          metricCard('التطور الماكروسكوبي:', 'c3Val_mac', 'تراكيز ثابتة', 'text-emerald-300'),
          metricCard('التصادمات الفعالة:', 'c3Val_mic', 'مستمرة في 2 منحيين', 'text-purple-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center gap-2">
            <span>⚛️</span> <span>شغّل المحاكاة وشاهد الجزيئات لا تتوقف عن التفاعل أبداً: ما يتكوّن في اتجاه يتفكك بنفس المعدل في الاتجاه المعاكس!</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>التعريف النموذجي في الوطني:</b><br/>
          حالة التوازن الكيميائي هي <b>توازن ديناميكي</b> تتساوى فيه سرعتا التفاعلين المباشر ($v_1$) والمعاكس ($v_2$) وتبقى فيه كميات المادة ثابتة.
        `;
      } else {
        subBar.classList.remove('hidden');
        subBar.innerHTML = `
          <span class="text-xs text-slate-400 font-semibold px-1">نوع المتفاعل المذاب في الماء:</span>
          <button type="button" data-c3-species="acid" class="px-3 py-1.5 rounded-xl text-xs font-bold ${state.species === 'acid' ? 'bg-purple-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">حمض $\\text{HA}$ ($\\tau = 10^{-pH}/C$)</button>
          <button type="button" data-c3-species="base" class="px-3 py-1.5 rounded-xl text-xs font-bold ${state.species === 'base' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'} transition">قاعدة $\\text{B}$ ($\\tau = 10^{pH-14}/C$)</button>
        `;
        legend.innerHTML = `
          <span>تغيّر نسبة التقدم النهائي $\\tau$ بدلالة التركيز البدئي $C$</span>
          <span class="font-mono text-purple-300" dir="ltr">${state.species === 'acid' ? 'tau = 10^-pH / C' : 'tau = 10^(pH-14) / C'}</span>
        `;
        sliderLabel.innerHTML = 'التركيز المولي البدئي $C$ ($\\text{mol}\\cdot\\text{L}^{-1}$):';
        metricsGrid.innerHTML = [
          metricCard('التركيز البدئي $C$:', 'c3Val_C', '0.020 mol/L', 'text-cyan-300'),
          metricCard('قيمة الـ $pH$:', 'c3Val_ph4', '2.75', 'text-purple-300'),
          metricCard(state.species === 'acid' ? 'تركيز $[\\text{H}_3\\text{O}^+]$:' : 'تركيز $[\\text{HO}^-]$:', 'c3Val_ion', '1.8e-3', 'text-amber-300'),
          metricCard('نسبة التقدم $\\tau$:', 'c3Val_tau4', '9.0%', 'text-emerald-300')
        ].join('');
        banner.innerHTML = `
          <div class="p-3 rounded-xl bg-purple-500/15 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-2">
            <span>🛡️</span> <span>${state.species === 'base' ? 'تنبيه القاعدة: نستعمل $[\\text{HO}^-]_f = 10^{pH-14}$ وليس $10^{-pH}$!' : 'كلما خفّفنا التركيز $C$ ارتفعت نسبة التقدم $\\tau$ واقترب المنحنى من $100\\%$!'}</span>
          </div>
        `;
        ruleBox.innerHTML = `
          <b>ملاحظة المنهج الرسمي (2BAC PC):</b><br/>
          تتعلق نسبة التقدم النهائي $\\tau$ بطبيعة المتفاعلات وبحالتها البدئية (التركيز البدئي $C$ والتخفيف).
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

      if (state.mode === 'ph-scale') {
        const C0 = 0.010;
        const cDil = C0 / state.dilutionF;
        let h3o = cDil;
        if (state.acidKind === 'weak') {
          h3o = solveEquilibriumConc(cDil, 1.75e-5);
        }
        const ph = -Math.log10(Math.max(1e-7, h3o));
        const tauPct = (h3o / cDil) * 100;

        sliderVal.textContent = `${state.dilutionF.toFixed(0)}x`;
        statusEq.textContent = `F = ${state.dilutionF.toFixed(0)}x  |  pH = ${ph.toFixed(2)}  |  τ = ${tauPct.toFixed(1)}%`;

        ctx.save();
        // Top pH Meter Display Box
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(36, 22, 608, 72);
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.6;
        ctx.strokeRect(36, 22, 608, 72);
        c.drawLabel(ctx, `pH-metre = ${ph.toFixed(2)}`, 58, 66, { color: '#34d399', font: 'bold 26px monospace' });
        c.drawLabel(ctx, state.acidKind === 'strong' ? 'Acide Fort (HCl) : tau = 100%' : `Acide Faible (CH3COOH) : tau = ${tauPct.toFixed(1)}%`, 335, 63, { color: '#fde68a', font: 'bold 12px monospace' });

        // Spectrum pH Bar (0..14)
        const bx = 46;
        const bw = 588;
        const by = 128;
        const bh = 34;
        const grad = ctx.createLinearGradient(bx, 0, bx + bw, 0);
        grad.addColorStop(0.0, '#ef4444');
        grad.addColorStop(0.35, '#f59e0b');
        grad.addColorStop(0.50, '#22c55e');
        grad.addColorStop(0.75, '#06b6d4');
        grad.addColorStop(1.0, '#6366f1');
        ctx.fillStyle = grad;
        ctx.fillRect(bx, by, bw, bh);
        ctx.strokeStyle = '#94a3b8';
        ctx.strokeRect(bx, by, bw, bh);

        const pxNeedle = bx + (ph / 14) * bw;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(pxNeedle - 2, by - 10, 4, bh + 20);
        c.drawLabel(ctx, '0', bx - 4, by + 54, { color: '#fca5a5', font: 'bold 11px monospace' });
        c.drawLabel(ctx, '7', bx + bw / 2 - 4, by + 54, { color: '#86efac', font: 'bold 11px monospace' });
        c.drawLabel(ctx, '14', bx + bw - 12, by + 54, { color: '#a5b4fc', font: 'bold 11px monospace' });

        // Bottom Bars: Species distribution HA vs A- / H3O+
        const barBaseY = 338;
        const maxBarH = 120;
        const fracIon = Math.min(1, h3o / cDil);
        const fracMol = Math.max(0, 1 - fracIon);

        ctx.fillStyle = 'rgba(34,211,238,0.75)';
        ctx.fillRect(150, barBaseY - fracMol * maxBarH, 120, fracMol * maxBarH);
        c.drawLabel(ctx, `[HA]_eq = ${(100 * fracMol).toFixed(1)}% C`, 140, 360, { color: '#67e8f9', font: 'bold 11px monospace' });

        ctx.fillStyle = 'rgba(251,191,36,0.85)';
        ctx.fillRect(410, barBaseY - fracIon * maxBarH, 120, fracIon * maxBarH);
        c.drawLabel(ctx, `[H3O+] = ${(100 * fracIon).toFixed(1)}% C`, 398, 360, { color: '#fde68a', font: 'bold 11px monospace' });
        ctx.restore();

        const elPh = hostEl.querySelector('#c3Val_ph');
        const elH = hostEl.querySelector('#c3Val_h3o');
        const elT = hostEl.querySelector('#c3Val_tau1');
        const elC = hostEl.querySelector('#c3Val_cDil');
        if (elPh) elPh.textContent = ph.toFixed(2);
        if (elH) elH.textContent = `${h3o.toExponential(2)} mol/L`;
        if (elT) elT.textContent = `${tauPct.toFixed(1)}%`;
        if (elC) elC.textContent = `${cDil.toExponential(2)} mol/L`;
      } else if (state.mode === 'tau-compare') {
        const wa = WEAK_ACIDS[state.weakIdx];
        const C0 = 0.010;
        const Ka = Math.pow(10, -wa.pKa);
        const h3o = solveEquilibriumConc(C0, Ka);
        const tauTarget = Math.min(0.99, h3o / C0); // e.g. 0.041..0.71
        const t = state.tSec;

        sliderVal.textContent = `t = ${t.toFixed(0)} s`;
        statusEq.textContent = `x_max = 1.00 mmol | τ = ${(tauTarget * 100).toFixed(1)}%`;

        const plane = c.createPlane(W, H, { originX: 72, originY: H - 52, scaleX: 5.4, scaleY: 260 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 105, xStep: 20, yMin: 0, yMax: 1.15, yStep: 0.25 });
        c.drawAxes(ctx, plane);

        // Ceilings
        c.drawLine(ctx, plane, 0, 1.0, 102, 1.0, { color: '#34d399', lineWidth: 1.5, dash: [5, 4] });
        c.drawLabel(ctx, 'x_max (Total)', 18, plane.toPxY(1.0) - 6, { color: '#6ee7b7', font: 'bold 10px monospace' });
        c.drawLine(ctx, plane, 0, tauTarget, 102, tauTarget, { color: wa.col, lineWidth: 1.4, dash: [4, 4] });

        // Plot total & limited curves
        const totalFn = (x) => 1.0 * (1 - Math.exp(-0.06 * x));
        const weakFn = (x) => tauTarget * (1 - Math.exp(-0.065 * x));
        c.plotCurve(ctx, plane, totalFn, 0, 100, { color: '#34d399', lineWidth: 2.8 });
        c.plotCurve(ctx, plane, weakFn, 0, 100, { color: wa.col, lineWidth: 3 });

        c.drawPoint(ctx, plane, t, totalFn(t), { fill: '#34d399', radius: 5.5 });
        c.drawPoint(ctx, plane, t, weakFn(t), { fill: wa.col, radius: 5.5 });
        c.drawLabel(ctx, 't (s)', W - 52, H - 18, { color: '#cbd5e1', font: 'bold 11px monospace' });
        c.drawLabel(ctx, 'x / x_max', 14, 24, { color: '#cbd5e1', font: 'bold 11px monospace' });

        const elXf = hostEl.querySelector('#c3Val_xf');
        const elT2 = hostEl.querySelector('#c3Val_tau2');
        const elNat = hostEl.querySelector('#c3Val_nat');
        if (elXf) elXf.textContent = `${tauTarget.toFixed(3)} mmol`;
        if (elT2) elT2.textContent = `${(tauTarget * 100).toFixed(1)}%`;
        if (elNat) elNat.textContent = tauTarget > 0.98 ? 'شبه كلي' : 'محدود (توازن)';
      } else if (state.mode === 'equilibrium') {
        const tauEq = state.eqRatioTau;
        sliderVal.textContent = `τ = ${(tauEq * 100).toFixed(0)}%`;
        statusEq.textContent = `Equilibre dynamique: v₁ = v₂  |  τ = ${(tauEq * 100).toFixed(0)}%`;

        ctx.save();
        // Left Vessel Box (x=24..395, y=46..345)
        ctx.fillStyle = 'rgba(15,23,42,0.85)';
        ctx.fillRect(24, 46, 370, 298);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.strokeRect(24, 46, 370, 298);
        c.drawLabel(ctx, 'Becher : HA + H2O <=> A- + H3O+', 72, 34, { color: '#fde68a', font: 'bold 11px monospace' });

        // Count ionized target & gently nudge random conversions to hold equilibrium!
        const targetIonCount = Math.round(tauEq * particles.length);
        const currentIon = particles.filter((p) => p.state === 1).length;
        particles.forEach((p, idx) => {
          const fillCol = p.state === 0 ? '#22d3ee' : '#fbbf24';
          ctx.fillStyle = fillCol;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
          ctx.fill();
          c.drawLabel(ctx, p.state === 0 ? 'HA' : 'A-', p.x - 7, p.y - 10, { color: fillCol, font: '9px monospace' });
          if (state.playing) {
            if (currentIon < targetIonCount && p.state === 0 && idx % 5 === 0) p.state = 1;
            else if (currentIon > targetIonCount && p.state === 1 && idx % 5 === 0) p.state = 0;
          } else {
            p.state = idx < targetIonCount ? 1 : 0;
          }
        });

        // Right Rates Box: v1(t) vs v2(t) meeting horizontally
        const plane = c.createPlane(W, H, { originX: 430, originY: 318, scaleX: 2.1, scaleY: 220 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 100, xStep: 25, yMin: 0, yMax: 1.0, yStep: 0.25 });
        c.drawAxes(ctx, plane);
        const vEq = 0.42;
        c.plotCurve(ctx, plane, (x) => vEq + (0.90 - vEq) * Math.exp(-0.07 * x), 0, 100, { color: '#22d3ee', lineWidth: 2.6 });
        c.plotCurve(ctx, plane, (x) => vEq * (1 - Math.exp(-0.07 * x)), 0, 100, { color: '#fbbf24', lineWidth: 2.6 });
        c.drawLabel(ctx, 'v1 (directe)', 468, 76, { color: '#67e8f9', font: 'bold 11px monospace' });
        c.drawLabel(ctx, 'v2 (inverse)', 468, 294, { color: '#fde68a', font: 'bold 11px monospace' });
        c.drawLabel(ctx, 'v1 = v2', 575, plane.toPxY(vEq) - 10, { color: '#34d399', font: 'bold 11px monospace' });
        ctx.restore();
      } else {
        const conc = state.concM;
        const isAcid = state.species === 'acid';
        const KaOrKb = isAcid ? 1.8e-4 : 4.4e-4; // Formic acid vs Methylamine
        const ionC = solveEquilibriumConc(conc, KaOrKb);
        const tau = ionC / conc;
        const ph = isAcid ? -Math.log10(ionC) : 14 + Math.log10(ionC);

        sliderVal.textContent = `C = ${(conc * 1e3).toFixed(1)} mmol/L`;
        statusEq.textContent = `C = ${conc.toFixed(3)} mol/L  |  pH = ${ph.toFixed(2)}  |  τ = ${(tau * 100).toFixed(1)}%`;

        const plane = c.createPlane(W, H, { originX: 74, originY: H - 54, scaleX: 5200, scaleY: 270 });
        c.drawGrid(ctx, plane, { xMin: 0, xMax: 0.11, xStep: 0.02, yMin: 0, yMax: 1.0, yStep: 0.2 });
        c.drawAxes(ctx, plane);

        const curveCol = isAcid ? '#c084fc' : '#fbbf24';
        c.plotCurve(ctx, plane, (cX) => (cX > 0.0005 ? solveEquilibriumConc(cX, KaOrKb) / cX : 1), 0.001, 0.10, {
          color: curveCol,
          lineWidth: 3
        });

        c.drawProjections(ctx, plane, conc, tau, { color: '#34d399', dash: [4, 4] });
        c.drawPoint(ctx, plane, conc, tau, { fill: '#ffffff', radius: 6 });
        c.drawLabel(ctx, `tau = ${(tau * 100).toFixed(1)}%`, plane.toPxX(conc) + 10, plane.toPxY(tau) - 10, { color: '#6ee7b7', font: 'bold 11px monospace' });
        c.drawLabel(ctx, 'C (mol/L)', W - 95, H - 18, { color: '#cbd5e1', font: 'bold 11px monospace' });
        c.drawLabel(ctx, 'tau', 28, 28, { color: '#cbd5e1', font: 'bold 11px monospace' });

        const elC = hostEl.querySelector('#c3Val_C');
        const elP4 = hostEl.querySelector('#c3Val_ph4');
        const elIon = hostEl.querySelector('#c3Val_ion');
        const elT4 = hostEl.querySelector('#c3Val_tau4');
        if (elC) elC.textContent = `${conc.toFixed(3)} mol/L`;
        if (elP4) elP4.textContent = ph.toFixed(2);
        if (elIon) elIon.textContent = `${ionC.toExponential(2)} mol/L`;
        if (elT4) elT4.textContent = `${(tau * 100).toFixed(1)}%`;
      }
    }

    function stepAnim(ts) {
      if (!state.playing) return;
      if (!state.lastTs) state.lastTs = ts;
      const dt = (ts - state.lastTs) / 1000;
      state.lastTs = ts;

      if (state.mode === 'ph-scale') {
        state.dilutionF += dt * 18;
        if (state.dilutionF > 100) state.dilutionF = 1;
        slider.value = Math.round(state.dilutionF).toString();
      } else if (state.mode === 'tau-compare') {
        state.tSec += dt * 22;
        if (state.tSec > 100) state.tSec = 0;
        slider.value = Math.round(state.tSec).toString();
      } else if (state.mode === 'equilibrium') {
        particles.forEach((p) => {
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          if (p.x < 34 || p.x > 384) p.vx *= -1;
          if (p.y < 60 || p.y > 332) p.vy *= -1;
        });
      } else {
        state.concM -= dt * 0.022;
        if (state.concM < 0.001) state.concM = 0.100;
        slider.value = state.concM.toFixed(3);
      }
      drawFrame();
      state.rafId = global.requestAnimationFrame(stepAnim);
    }

    function setMode(mode) {
      stopAnim();
      state.mode = mode;
      hostEl.querySelectorAll('[data-c3-mode]').forEach((btn) => {
        const meta = MODES_META.find((m) => m.id === btn.dataset.c3Mode);
        btn.className = btn.dataset.c3Mode === mode && meta
          ? `px-3 py-2 rounded-xl text-xs font-bold ${meta.activeCls} transition`
          : 'px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 transition';
      });

      if (mode === 'ph-scale') {
        slider.min = 1; slider.max = 100; slider.step = 1; slider.value = Math.round(state.dilutionF);
      } else if (mode === 'tau-compare') {
        slider.min = 0; slider.max = 100; slider.step = 1; slider.value = Math.round(state.tSec);
      } else if (mode === 'equilibrium') {
        slider.min = 0.10; slider.max = 0.90; slider.step = 0.05; slider.value = state.eqRatioTau.toFixed(2);
      } else {
        slider.min = 0.001; slider.max = 0.100; slider.step = 0.001; slider.value = state.concM.toFixed(3);
      }
      syncChrome();
      drawFrame();
    }

    function setAcidKind(kind) {
      state.acidKind = kind;
      syncChrome();
      drawFrame();
    }

    function setWeakIdx(idx) {
      state.weakIdx = idx;
      syncChrome();
      drawFrame();
    }

    function setSpecies(sp) {
      state.species = sp;
      syncChrome();
      drawFrame();
    }

    hostEl.addEventListener('click', (e) => {
      const mBtn = e.target.closest('[data-c3-mode]');
      if (mBtn) return setMode(mBtn.dataset.c3Mode);
      const aBtn = e.target.closest('[data-c3-acid]');
      if (aBtn) return setAcidKind(aBtn.dataset.c3Acid);
      const wBtn = e.target.closest('[data-c3-weak]');
      if (wBtn) return setWeakIdx(Number(wBtn.dataset.c3Weak));
      const sBtn = e.target.closest('[data-c3-species]');
      if (sBtn) return setSpecies(sBtn.dataset.c3Species);
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
      state.acidKind = 'weak';
      state.dilutionF = 1.0;
      state.weakIdx = 1;
      state.tSec = 65;
      state.eqRatioTau = 0.42;
      state.species = 'acid';
      state.concM = 0.020;
      setMode(state.mode);
    });

    slider.addEventListener('input', () => {
      stopAnim();
      const v = parseFloat(slider.value);
      if (state.mode === 'ph-scale') state.dilutionF = v;
      else if (state.mode === 'tau-compare') state.tSec = v;
      else if (state.mode === 'equilibrium') state.eqRatioTau = v;
      else state.concM = v;
      drawFrame();
    });

    hostEl._c3SimApi = { setMode, setAcidKind, setWeakIdx, setSpecies, drawFrame };
    api.renderMath(hostEl);
    setMode('ph-scale');
  }

  global.EulerAcademy.registerSimulator('chem-03', { mount });
})(window);
