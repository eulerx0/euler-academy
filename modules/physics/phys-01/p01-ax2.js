window.EulerAcademy.registerAxis('phys-01', 'p01-ax2', `

              <div class="space-y-6">
                <!-- 1. Official Formula & Definition of Célérité -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">1. المفهوم الرسمي لسرعة الانتشار والصيغة الأساسية (Célérité d’une onde)</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>
                  <p class="text-sm text-slate-200 leading-relaxed mb-3">
                    في وسط متجانس، تنتشر الموجة الميكانيكية بسرعة ثابتة تُدعى <b>سرعة الانتشار</b> (<i>la célérité $v$</i>)، وتُعرَّف بأنها خارج المسافة $d$ المقطوعة من طرف التشويه خلال المدة الزمنية $\\Delta t$:
                  </p>
                  <div class="bg-slate-950 border border-amber-500/30 rounded-xl p-4 text-center my-3">
                    $$v = \\frac{d}{\\Delta t} = \\frac{M_1 M_2}{t_2 - t_1}$$
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300 mt-4">
                    <div class="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">📏 المسافة المقطوعة $d$:</b>
                      يُعبَّر عنها في النظام العالمي للوحدات بالمتر ($\\text{m}$). <br/>($1\\text{ cm} = 10^{-2}\\text{ m}$).
                    </div>
                    <div class="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                      <b class="text-amber-400 block mb-1">⏱️ المدة الزمنية $\\Delta t$:</b>
                      يُعبَّر عنها بالثانية ($\\text{s}$). <br/>($1\\text{ ms} = 10^{-3}\\text{ s}$ و $1\\text{ }\\mu\\text{s} = 10^{-6}\\text{ s}$).
                    </div>
                    <div class="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                      <b class="text-emerald-400 block mb-1">⚡ سرعة الانتشار $v$:</b>
                      وحدتها العالمية هي $\\text{m}\\cdot\\text{s}^{-1}$ (أو $\\text{m/s}$). وهي سرعة انتقال الطاقة لا المادة.
                    </div>
                  </div>
                </div>

                <!-- 2. Experimental Measurement Techniques in Exams -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">2. تقنيات حساب وقياس $v$ في الامتحان الوطني (Méthodes de mesure)</span>
                    <span class="text-xs text-slate-400 font-mono">كاميرا • راسم التذبذب • السونار</span>
                  </div>

                  <div class="space-y-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">أ) من صورتين متتاليتين أو شريط فيديو (Chronophotographie / Vidéo):</b>
                      نقيس المسافة $d$ بين <b>نقطتين متماثلتين</b> من التشويه في لحظتين $t_1$ و $t_2$ (مثل جبهة الموجة $F_1 \\to F_2$). وإذا صُوّر الحدث بكاميرا ترددها $N$ صورة في الثانية ($\\text{images/s}$)، فإن المدة الفاصلة بين كل صورتين متتاليتين هي $\\Delta t_0 = \\frac{1}{N}$، وعند مرور $k$ مجالات بين اللقطتين يكون: $\\Delta t = k \\cdot \\Delta t_0 = \\frac{k}{N}$.
                    </div>

                    <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-4" id="svgCardSpeedSnapshots">
      <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
        <span>📸 قياس سرعة الانتشار $v$ من لقطتين متتاليتين ($t_1$ و $t_2$)</span>
        <span class="text-[11px] font-mono text-amber-400">d = x(F₂) − x(F₁)</span>
      </div>
      <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-3">
        <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
          <div class="flex flex-wrap items-center gap-4">
            <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-5 border-t-2 border-dashed border-cyan-400"></span> موضع الموجة عند t₁</span>
            <span class="flex items-center gap-1.5 text-emerald-300"><span class="inline-block w-5 h-0.5 bg-emerald-400"></span> موضع الموجة عند t₂</span>
          </div>
          <span class="text-amber-300 font-mono">v = d / (t₂ - t₁)</span>
        </div>
        <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 148" class="w-full h-auto">
          <defs>
            <marker id="arrAxisSp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
            </marker>
            <marker id="arrDistStart" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 10 1 L 0 5 L 10 9 z" fill="#fbbf24"/>
            </marker>
            <marker id="arrDistEnd" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24"/>
            </marker>
          </defs>

          <!-- Baseline -->
          <line x1="40" y1="108" x2="645" y2="108" stroke="#475569" stroke-width="2" marker-end="url(#arrAxisSp)"/>
          <text x="655" y="112" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">x(m)</text>

          <!-- Guides from F1 and F2 up to dimension line -->
          <line x1="181.0" y1="108" x2="181.0" y2="26" stroke="rgba(34,211,238,0.45)" stroke-width="1.5" stroke-dasharray="3,3"/>
          <line x1="521.0" y1="108" x2="521.0" y2="26" stroke="rgba(52,211,153,0.45)" stroke-width="1.5" stroke-dasharray="3,3"/>

          <!-- Distance dimension line -->
          <line x1="185.0" y1="32" x2="517.0" y2="32" stroke="#fbbf24" stroke-width="2.2" marker-start="url(#arrDistStart)" marker-end="url(#arrDistEnd)"/>
          <text x="351.0" y="21" fill="#fbbf24" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">d = 2.80 - 0.80 = 2.00 m</text>

          <!-- Wave snapshots -->
          <path d="M 45.0,108.0 L 48.4,108.0 L 51.8,108.0 L 55.2,108.0 L 58.6,108.0 L 62.0,108.0 L 65.4,108.0 L 68.8,108.0 L 72.2,108.0 L 75.6,108.0 L 79.0,108.0 L 82.4,108.0 L 85.8,108.0 L 89.2,108.0 L 92.6,108.0 L 96.0,108.0 L 99.4,107.3 L 102.8,105.2 L 106.2,101.8 L 109.6,97.3 L 113.0,92.1 L 116.4,86.4 L 119.8,80.7 L 123.2,75.2 L 126.6,70.3 L 130.0,66.4 L 133.4,63.6 L 136.8,62.2 L 140.2,62.2 L 143.6,63.6 L 147.0,66.4 L 150.4,70.3 L 153.8,75.2 L 157.2,80.7 L 160.6,86.4 L 164.0,92.1 L 167.4,97.3 L 170.8,101.8 L 174.2,105.2 L 177.6,107.3 L 181.0,108.0 L 184.4,108.0 L 187.8,108.0 L 191.2,108.0 L 194.6,108.0 L 198.0,108.0 L 201.4,108.0 L 204.8,108.0 L 208.2,108.0 L 211.6,108.0 L 215.0,108.0 L 218.4,108.0 L 221.8,108.0 L 225.2,108.0 L 228.6,108.0 L 232.0,108.0 L 235.4,108.0 L 238.8,108.0 L 242.2,108.0 L 245.6,108.0 L 249.0,108.0 L 252.4,108.0 L 255.8,108.0 L 259.2,108.0 L 262.6,108.0 L 266.0,108.0 L 269.4,108.0 L 272.8,108.0 L 276.2,108.0 L 279.6,108.0 L 283.0,108.0 L 286.4,108.0 L 289.8,108.0 L 293.2,108.0 L 296.6,108.0 L 300.0,108.0 L 303.4,108.0 L 306.8,108.0 L 310.2,108.0 L 313.6,108.0 L 317.0,108.0 L 320.4,108.0 L 323.8,108.0 L 327.2,108.0 L 330.6,108.0 L 334.0,108.0 L 337.4,108.0 L 340.8,108.0 L 344.2,108.0 L 347.6,108.0 L 351.0,108.0 L 354.4,108.0 L 357.8,108.0 L 361.2,108.0 L 364.6,108.0 L 368.0,108.0 L 371.4,108.0 L 374.8,108.0 L 378.2,108.0 L 381.6,108.0 L 385.0,108.0 L 388.4,108.0 L 391.8,108.0 L 395.2,108.0 L 398.6,108.0 L 402.0,108.0 L 405.4,108.0 L 408.8,108.0 L 412.2,108.0 L 415.6,108.0 L 419.0,108.0 L 422.4,108.0 L 425.8,108.0 L 429.2,108.0 L 432.6,108.0 L 436.0,108.0 L 439.4,108.0 L 442.8,108.0 L 446.2,108.0 L 449.6,108.0 L 453.0,108.0 L 456.4,108.0 L 459.8,108.0 L 463.2,108.0 L 466.6,108.0 L 470.0,108.0 L 473.4,108.0 L 476.8,108.0 L 480.2,108.0 L 483.6,108.0 L 487.0,108.0 L 490.4,108.0 L 493.8,108.0 L 497.2,108.0 L 500.6,108.0 L 504.0,108.0 L 507.4,108.0 L 510.8,108.0 L 514.2,108.0 L 517.6,108.0 L 521.0,108.0 L 524.4,108.0 L 527.8,108.0 L 531.2,108.0 L 534.6,108.0 L 538.0,108.0 L 541.4,108.0 L 544.8,108.0 L 548.2,108.0 L 551.6,108.0 L 555.0,108.0 L 558.4,108.0 L 561.8,108.0 L 565.2,108.0 L 568.6,108.0 L 572.0,108.0 L 575.4,108.0 L 578.8,108.0 L 582.2,108.0 L 585.6,108.0 L 589.0,108.0 L 592.4,108.0 L 595.8,108.0 L 599.2,108.0 L 602.6,108.0 L 606.0,108.0 L 609.4,108.0 L 612.8,108.0 L 616.2,108.0 L 619.6,108.0 L 623.0,108.0 L 626.4,108.0 L 629.8,108.0 L 633.2,108.0 L 636.6,108.0 L 640.0,108.0" fill="none" stroke="#22d3ee" stroke-width="2.6" stroke-dasharray="6,4"/>
          <path d="M 45.0,108.0 L 48.4,108.0 L 51.8,108.0 L 55.2,108.0 L 58.6,108.0 L 62.0,108.0 L 65.4,108.0 L 68.8,108.0 L 72.2,108.0 L 75.6,108.0 L 79.0,108.0 L 82.4,108.0 L 85.8,108.0 L 89.2,108.0 L 92.6,108.0 L 96.0,108.0 L 99.4,108.0 L 102.8,108.0 L 106.2,108.0 L 109.6,108.0 L 113.0,108.0 L 116.4,108.0 L 119.8,108.0 L 123.2,108.0 L 126.6,108.0 L 130.0,108.0 L 133.4,108.0 L 136.8,108.0 L 140.2,108.0 L 143.6,108.0 L 147.0,108.0 L 150.4,108.0 L 153.8,108.0 L 157.2,108.0 L 160.6,108.0 L 164.0,108.0 L 167.4,108.0 L 170.8,108.0 L 174.2,108.0 L 177.6,108.0 L 181.0,108.0 L 184.4,108.0 L 187.8,108.0 L 191.2,108.0 L 194.6,108.0 L 198.0,108.0 L 201.4,108.0 L 204.8,108.0 L 208.2,108.0 L 211.6,108.0 L 215.0,108.0 L 218.4,108.0 L 221.8,108.0 L 225.2,108.0 L 228.6,108.0 L 232.0,108.0 L 235.4,108.0 L 238.8,108.0 L 242.2,108.0 L 245.6,108.0 L 249.0,108.0 L 252.4,108.0 L 255.8,108.0 L 259.2,108.0 L 262.6,108.0 L 266.0,108.0 L 269.4,108.0 L 272.8,108.0 L 276.2,108.0 L 279.6,108.0 L 283.0,108.0 L 286.4,108.0 L 289.8,108.0 L 293.2,108.0 L 296.6,108.0 L 300.0,108.0 L 303.4,108.0 L 306.8,108.0 L 310.2,108.0 L 313.6,108.0 L 317.0,108.0 L 320.4,108.0 L 323.8,108.0 L 327.2,108.0 L 330.6,108.0 L 334.0,108.0 L 337.4,108.0 L 340.8,108.0 L 344.2,108.0 L 347.6,108.0 L 351.0,108.0 L 354.4,108.0 L 357.8,108.0 L 361.2,108.0 L 364.6,108.0 L 368.0,108.0 L 371.4,108.0 L 374.8,108.0 L 378.2,108.0 L 381.6,108.0 L 385.0,108.0 L 388.4,108.0 L 391.8,108.0 L 395.2,108.0 L 398.6,108.0 L 402.0,108.0 L 405.4,108.0 L 408.8,108.0 L 412.2,108.0 L 415.6,108.0 L 419.0,108.0 L 422.4,108.0 L 425.8,108.0 L 429.2,108.0 L 432.6,108.0 L 436.0,108.0 L 439.4,107.3 L 442.8,105.2 L 446.2,101.8 L 449.6,97.3 L 453.0,92.1 L 456.4,86.4 L 459.8,80.7 L 463.2,75.2 L 466.6,70.3 L 470.0,66.4 L 473.4,63.6 L 476.8,62.2 L 480.2,62.2 L 483.6,63.6 L 487.0,66.4 L 490.4,70.3 L 493.8,75.2 L 497.2,80.7 L 500.6,86.4 L 504.0,92.1 L 507.4,97.3 L 510.8,101.8 L 514.2,105.2 L 517.6,107.3 L 521.0,108.0 L 524.4,108.0 L 527.8,108.0 L 531.2,108.0 L 534.6,108.0 L 538.0,108.0 L 541.4,108.0 L 544.8,108.0 L 548.2,108.0 L 551.6,108.0 L 555.0,108.0 L 558.4,108.0 L 561.8,108.0 L 565.2,108.0 L 568.6,108.0 L 572.0,108.0 L 575.4,108.0 L 578.8,108.0 L 582.2,108.0 L 585.6,108.0 L 589.0,108.0 L 592.4,108.0 L 595.8,108.0 L 599.2,108.0 L 602.6,108.0 L 606.0,108.0 L 609.4,108.0 L 612.8,108.0 L 616.2,108.0 L 619.6,108.0 L 623.0,108.0 L 626.4,108.0 L 629.8,108.0 L 633.2,108.0 L 636.6,108.0 L 640.0,108.0" fill="none" stroke="#34d399" stroke-width="3.2"/>

          <!-- Dots & Ticks -->
          <circle cx="45" cy="108" r="3.5" fill="#e2e8f0"/>
          <text x="45" y="128" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">S(0)</text>

          <circle cx="181.0" cy="108" r="4.5" fill="#22d3ee"/>
          <text x="181.0" y="128" fill="#22d3ee" font-size="11" font-family="monospace" text-anchor="middle">F₁ (0.80)</text>

          <circle cx="521.0" cy="108" r="4.5" fill="#34d399"/>
          <text x="521.0" y="128" fill="#34d399" font-size="11" font-family="monospace" text-anchor="middle">F₂ (2.80)</text>
        </svg>
      </div>
    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-amber-400 block mb-1">ب) باستعمال راسم التذبذب (Oscilloscope) أو جهاز ExAO:</b>
                      عند وضع مستقبلين (ميكروفونين) $R_1$ و $R_2$ تفصلهما المسافة $d$، يلتقط كل منهما الموجة على مدخل مستقل، فتظهر على الشاشة إزاحة أفقية قدرها $n_{\\text{div}}$ تدريجة. باستعمال الحساسية الأفقية $S_h$ (بالزمن لكل تدريجة):
                      $$\\Delta t = n_{\\text{div}} \\times S_h \\implies v = \\frac{d}{n_{\\text{div}} \\times S_h}$$
                    </div>

                    <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-4" id="svgCardOscilloscope">
      <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
        <span>🖥️ قراءة التأخر على شاشة راسم التذبذب (موجة فوق صوتية بين $R_1$ و $R_2$)</span>
        <span class="text-[11px] font-mono text-cyan-400">Δt = n_div × S_h</span>
      </div>
      <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-3">
        <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
          <div class="flex flex-wrap items-center gap-4">
            <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-5 h-0.5 bg-cyan-400"></span> المدخل CH1 (المستقبل R₁)</span>
            <span class="flex items-center gap-1.5 text-amber-300"><span class="inline-block w-5 h-0.5 bg-amber-400"></span> المدخل CH2 (المستقبل R₂)</span>
          </div>
          <span class="text-emerald-300 font-mono">S_h = 0.5 ms/div</span>
        </div>
        <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 186" class="w-full h-auto">
          <defs>
            <marker id="arrOscL" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 10 1 L 0 5 L 10 9 z" fill="#34d399"/>
            </marker>
            <marker id="arrOscR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
            </marker>
          </defs>
          <rect x="80" y="20" width="520" height="140" fill="#070d18" stroke="#334155" stroke-width="1.5"/>
          <line x1="80.0" y1="20" x2="80.0" y2="160" stroke="#1e293b" stroke-width="1"/>
          <text x="80.0" y="177" fill="#64748b" font-size="10" font-family="monospace" text-anchor="middle">0</text>
          <line x1="145.0" y1="20" x2="145.0" y2="160" stroke="#1e293b" stroke-width="1"/>
          <text x="145.0" y="177" fill="#64748b" font-size="10" font-family="monospace" text-anchor="middle">1</text>
          <line x1="210.0" y1="20" x2="210.0" y2="160" stroke="#1e293b" stroke-width="1"/>
          <text x="210.0" y="177" fill="#64748b" font-size="10" font-family="monospace" text-anchor="middle">2</text>
          <line x1="275.0" y1="20" x2="275.0" y2="160" stroke="#1e293b" stroke-width="1"/>
          <text x="275.0" y="177" fill="#64748b" font-size="10" font-family="monospace" text-anchor="middle">3</text>
          <line x1="340.0" y1="20" x2="340.0" y2="160" stroke="#1e293b" stroke-width="1"/>
          <text x="340.0" y="177" fill="#64748b" font-size="10" font-family="monospace" text-anchor="middle">4</text>
          <line x1="405.0" y1="20" x2="405.0" y2="160" stroke="#1e293b" stroke-width="1"/>
          <text x="405.0" y="177" fill="#64748b" font-size="10" font-family="monospace" text-anchor="middle">5</text>
          <line x1="470.0" y1="20" x2="470.0" y2="160" stroke="#1e293b" stroke-width="1"/>
          <text x="470.0" y="177" fill="#64748b" font-size="10" font-family="monospace" text-anchor="middle">6</text>
          <line x1="535.0" y1="20" x2="535.0" y2="160" stroke="#1e293b" stroke-width="1"/>
          <text x="535.0" y="177" fill="#64748b" font-size="10" font-family="monospace" text-anchor="middle">7</text>
          <line x1="600.0" y1="20" x2="600.0" y2="160" stroke="#1e293b" stroke-width="1"/>
          <text x="600.0" y="177" fill="#64748b" font-size="10" font-family="monospace" text-anchor="middle">8</text>
          <line x1="80" y1="20.0" x2="600" y2="20.0" stroke="#1e293b" stroke-width="1"/>
          <line x1="80" y1="55.0" x2="600" y2="55.0" stroke="#1e293b" stroke-width="1"/>
          <line x1="80" y1="90.0" x2="600" y2="90.0" stroke="#1e293b" stroke-width="1"/>
          <line x1="80" y1="125.0" x2="600" y2="125.0" stroke="#1e293b" stroke-width="1"/>
          <line x1="80" y1="160.0" x2="600" y2="160.0" stroke="#1e293b" stroke-width="1"/>

          <!-- Channel traces -->
          <path d="M 80,56.0 L 82,56.0 L 84,56.0 L 86,56.0 L 88,56.0 L 90,56.0 L 92,56.0 L 94,56.0 L 96,56.0 L 98,56.0 L 100,56.0 L 102,56.0 L 104,56.0 L 106,56.0 L 108,56.0 L 110,56.0 L 112,56.0 L 114,56.0 L 116,56.0 L 118,56.0 L 120,56.0 L 122,56.0 L 124,56.0 L 126,56.0 L 128,56.0 L 130,56.0 L 132,56.0 L 134,56.0 L 136,56.0 L 138,56.0 L 140,56.0 L 142,56.0 L 144,56.0 L 146,49.5 L 148,39.7 L 150,36.1 L 152,39.0 L 154,46.6 L 156,56.0 L 158,64.2 L 160,68.8 L 162,68.9 L 164,65.2 L 166,59.2 L 168,53.0 L 170,48.6 L 172,46.9 L 174,48.3 L 176,51.7 L 178,56.0 L 180,59.7 L 182,61.8 L 184,61.9 L 186,60.2 L 188,57.5 L 190,54.6 L 192,52.6 L 194,51.9 L 196,52.5 L 198,54.0 L 200,56.0 L 202,57.7 L 204,58.7 L 206,58.7 L 208,57.9 L 210,56.7 L 212,55.4 L 214,54.5 L 216,54.1 L 218,54.4 L 220,55.1 L 222,56.0 L 224,56.8 L 226,57.2 L 228,57.2 L 230,56.9 L 232,56.3 L 234,55.7 L 236,55.3 L 238,55.1 L 240,55.3 L 242,56.0 L 244,56.0 L 246,56.0 L 248,56.0 L 250,56.0 L 252,56.0 L 254,56.0 L 256,56.0 L 258,56.0 L 260,56.0 L 262,56.0 L 264,56.0 L 266,56.0 L 268,56.0 L 270,56.0 L 272,56.0 L 274,56.0 L 276,56.0 L 278,56.0 L 280,56.0 L 282,56.0 L 284,56.0 L 286,56.0 L 288,56.0 L 290,56.0 L 292,56.0 L 294,56.0 L 296,56.0 L 298,56.0 L 300,56.0 L 302,56.0 L 304,56.0 L 306,56.0 L 308,56.0 L 310,56.0 L 312,56.0 L 314,56.0 L 316,56.0 L 318,56.0 L 320,56.0 L 322,56.0 L 324,56.0 L 326,56.0 L 328,56.0 L 330,56.0 L 332,56.0 L 334,56.0 L 336,56.0 L 338,56.0 L 340,56.0 L 342,56.0 L 344,56.0 L 346,56.0 L 348,56.0 L 350,56.0 L 352,56.0 L 354,56.0 L 356,56.0 L 358,56.0 L 360,56.0 L 362,56.0 L 364,56.0 L 366,56.0 L 368,56.0 L 370,56.0 L 372,56.0 L 374,56.0 L 376,56.0 L 378,56.0 L 380,56.0 L 382,56.0 L 384,56.0 L 386,56.0 L 388,56.0 L 390,56.0 L 392,56.0 L 394,56.0 L 396,56.0 L 398,56.0 L 400,56.0 L 402,56.0 L 404,56.0 L 406,56.0 L 408,56.0 L 410,56.0 L 412,56.0 L 414,56.0 L 416,56.0 L 418,56.0 L 420,56.0 L 422,56.0 L 424,56.0 L 426,56.0 L 428,56.0 L 430,56.0 L 432,56.0 L 434,56.0 L 436,56.0 L 438,56.0 L 440,56.0 L 442,56.0 L 444,56.0 L 446,56.0 L 448,56.0 L 450,56.0 L 452,56.0 L 454,56.0 L 456,56.0 L 458,56.0 L 460,56.0 L 462,56.0 L 464,56.0 L 466,56.0 L 468,56.0 L 470,56.0 L 472,56.0 L 474,56.0 L 476,56.0 L 478,56.0 L 480,56.0 L 482,56.0 L 484,56.0 L 486,56.0 L 488,56.0 L 490,56.0 L 492,56.0 L 494,56.0 L 496,56.0 L 498,56.0 L 500,56.0 L 502,56.0 L 504,56.0 L 506,56.0 L 508,56.0 L 510,56.0 L 512,56.0 L 514,56.0 L 516,56.0 L 518,56.0 L 520,56.0 L 522,56.0 L 524,56.0 L 526,56.0 L 528,56.0 L 530,56.0 L 532,56.0 L 534,56.0 L 536,56.0 L 538,56.0 L 540,56.0 L 542,56.0 L 544,56.0 L 546,56.0 L 548,56.0 L 550,56.0 L 552,56.0 L 554,56.0 L 556,56.0 L 558,56.0 L 560,56.0 L 562,56.0 L 564,56.0 L 566,56.0 L 568,56.0 L 570,56.0 L 572,56.0 L 574,56.0 L 576,56.0 L 578,56.0 L 580,56.0 L 582,56.0 L 584,56.0 L 586,56.0 L 588,56.0 L 590,56.0 L 592,56.0 L 594,56.0 L 596,56.0 L 598,56.0 L 600,56.0" fill="none" stroke="#22d3ee" stroke-width="2.6"/>
          <path d="M 80,126.0 L 82,126.0 L 84,126.0 L 86,126.0 L 88,126.0 L 90,126.0 L 92,126.0 L 94,126.0 L 96,126.0 L 98,126.0 L 100,126.0 L 102,126.0 L 104,126.0 L 106,126.0 L 108,126.0 L 110,126.0 L 112,126.0 L 114,126.0 L 116,126.0 L 118,126.0 L 120,126.0 L 122,126.0 L 124,126.0 L 126,126.0 L 128,126.0 L 130,126.0 L 132,126.0 L 134,126.0 L 136,126.0 L 138,126.0 L 140,126.0 L 142,126.0 L 144,126.0 L 146,126.0 L 148,126.0 L 150,126.0 L 152,126.0 L 154,126.0 L 156,126.0 L 158,126.0 L 160,126.0 L 162,126.0 L 164,126.0 L 166,126.0 L 168,126.0 L 170,126.0 L 172,126.0 L 174,126.0 L 176,126.0 L 178,126.0 L 180,126.0 L 182,126.0 L 184,126.0 L 186,126.0 L 188,126.0 L 190,126.0 L 192,126.0 L 194,126.0 L 196,126.0 L 198,126.0 L 200,126.0 L 202,126.0 L 204,126.0 L 206,126.0 L 208,126.0 L 210,126.0 L 212,126.0 L 214,126.0 L 216,126.0 L 218,126.0 L 220,126.0 L 222,126.0 L 224,126.0 L 226,126.0 L 228,126.0 L 230,126.0 L 232,126.0 L 234,126.0 L 236,126.0 L 238,126.0 L 240,126.0 L 242,126.0 L 244,126.0 L 246,126.0 L 248,126.0 L 250,126.0 L 252,126.0 L 254,126.0 L 256,126.0 L 258,126.0 L 260,126.0 L 262,126.0 L 264,126.0 L 266,126.0 L 268,126.0 L 270,126.0 L 272,126.0 L 274,126.0 L 276,126.0 L 278,126.0 L 280,126.0 L 282,126.0 L 284,126.0 L 286,126.0 L 288,126.0 L 290,126.0 L 292,126.0 L 294,126.0 L 296,126.0 L 298,126.0 L 300,126.0 L 302,126.0 L 304,126.0 L 306,126.0 L 308,126.0 L 310,126.0 L 312,126.0 L 314,126.0 L 316,126.0 L 318,126.0 L 320,126.0 L 322,126.0 L 324,126.0 L 326,126.0 L 328,126.0 L 330,126.0 L 332,126.0 L 334,126.0 L 336,126.0 L 338,126.0 L 340,126.0 L 342,126.0 L 344,126.0 L 346,126.0 L 348,126.0 L 350,126.0 L 352,126.0 L 354,126.0 L 356,126.0 L 358,126.0 L 360,126.0 L 362,126.0 L 364,126.0 L 366,126.0 L 368,126.0 L 370,126.0 L 372,126.0 L 374,126.0 L 376,126.0 L 378,126.0 L 380,126.0 L 382,126.0 L 384,126.0 L 386,126.0 L 388,126.0 L 390,126.0 L 392,126.0 L 394,126.0 L 396,126.0 L 398,126.0 L 400,126.0 L 402,126.0 L 404,126.0 L 406,119.5 L 408,109.7 L 410,106.1 L 412,109.0 L 414,116.6 L 416,126.0 L 418,134.2 L 420,138.8 L 422,138.9 L 424,135.2 L 426,129.2 L 428,123.0 L 430,118.6 L 432,116.9 L 434,118.3 L 436,121.7 L 438,126.0 L 440,129.7 L 442,131.8 L 444,131.9 L 446,130.2 L 448,127.5 L 450,124.6 L 452,122.6 L 454,121.9 L 456,122.5 L 458,124.0 L 460,126.0 L 462,127.7 L 464,128.7 L 466,128.7 L 468,127.9 L 470,126.7 L 472,125.4 L 474,124.5 L 476,124.1 L 478,124.4 L 480,125.1 L 482,126.0 L 484,126.8 L 486,127.2 L 488,127.2 L 490,126.9 L 492,126.3 L 494,125.7 L 496,125.3 L 498,125.1 L 500,125.3 L 502,126.0 L 504,126.0 L 506,126.0 L 508,126.0 L 510,126.0 L 512,126.0 L 514,126.0 L 516,126.0 L 518,126.0 L 520,126.0 L 522,126.0 L 524,126.0 L 526,126.0 L 528,126.0 L 530,126.0 L 532,126.0 L 534,126.0 L 536,126.0 L 538,126.0 L 540,126.0 L 542,126.0 L 544,126.0 L 546,126.0 L 548,126.0 L 550,126.0 L 552,126.0 L 554,126.0 L 556,126.0 L 558,126.0 L 560,126.0 L 562,126.0 L 564,126.0 L 566,126.0 L 568,126.0 L 570,126.0 L 572,126.0 L 574,126.0 L 576,126.0 L 578,126.0 L 580,126.0 L 582,126.0 L 584,126.0 L 586,126.0 L 588,126.0 L 590,126.0 L 592,126.0 L 594,126.0 L 596,126.0 L 598,126.0 L 600,126.0" fill="none" stroke="#fbbf24" stroke-width="2.6"/>

          <!-- Vertical markers at onset -->
          <line x1="145" y1="22" x2="145" y2="158" stroke="rgba(34,211,238,0.5)" stroke-dasharray="3,3"/>
          <line x1="405" y1="22" x2="405" y2="158" stroke="rgba(251,191,36,0.5)" stroke-dasharray="3,3"/>

          <!-- Delay arrow -->
          <line x1="149" y1="90" x2="401" y2="90" stroke="#34d399" stroke-width="2.2" marker-start="url(#arrOscL)" marker-end="url(#arrOscR)"/>
          <rect x="215" y="71" width="120" height="18" rx="4" fill="#050811"/>
          <text x="275" y="84" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Δt = 4 div = 2.0 ms</text>

          <!-- Channel labels left -->
          <text x="45" y="60" fill="#22d3ee" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">CH1</text>
          <text x="45" y="130" fill="#fbbf24" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">CH2</text>
          <text x="638" y="177" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">div</text>
        </svg>
      </div>
    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 block mb-1">ج) تقنية الصدى والاستكشاف بالموجات فوق الصوتية (Écho / Sonar / Échographie):</b>
                      عند إرسال حزمة فوق صوتية من مجسّ لتصطدم بحاجز يبعد بمسافة $D$ وتنعكس عائدةً إلى المجسّ نفسه خلال المدة $\\Delta t$، فإن الموجة تقطع المسافة $D$ <b>ذهاباً وإياباً</b> ($d = 2D$):
                      $$v = \\frac{2D}{\\Delta t} \\iff D = \\frac{v \\cdot \\Delta t}{2}$$
                    </div>
                  </div>
                </div>

                <!-- 3. Physical Factors Affecting Celerity -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">3. العوامل المؤثرة في سرعة الانتشار (قصور ومرونة الوسط)</span>
                    <span class="text-xs text-slate-400 font-mono">Inertie et Élasticité du milieu</span>
                  </div>
                  <div class="space-y-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 border border-cyan-500/30 rounded-xl p-4">
                      <b class="text-cyan-300 block mb-1">📌 قاعدة ذهبية — استقلالية السرعة عن شكل التشويه:</b>
                      في وسط مادي متجانس وغير مبدد، <b>تتعلق سرعة الانتشار $v$ فقط بطبيعة الوسط وخواصه الفيزيائية</b>، ولا تتعلق أبداً لا بوسع التشويه ($A$) ولا بمدته الزمنية أو طاقة المنبع!
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <b class="text-emerald-400 block mb-1">1) مرونة / صلابة الوسط (Élasticité et rigidité):</b>
                        كلما كان الوسط أشد صلابة ومرونة (قوة الارتداد أقوى)، <b>ارتفعت</b> سرعة الانتشار $v$.<br/>
                        <span class="text-slate-400 block mt-1">• مثال الصوت: $v_{\\text{acier}} \\approx 5000\\text{ m/s} > v_{\\text{eau}} \\approx 1500\\text{ m/s} > v_{\\text{air}} \\approx 340\\text{ m/s}$.</span>
                      </div>
                      <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <b class="text-rose-400 block mb-1">2) قصور الوسط (Inertie — الكثافة أو الكتلة الطولية):</b>
                        كلما زاد قصور الوسط (كتلته الحجمية $\\rho$ أو كتلته الطولية $\\mu$)، زادت مقاومته للحركة وبالتالي <b>انخفضت</b> سرعة الانتشار $v$.
                      </div>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 block mb-1">🎸 الحالة الخاصة للحبل المشدود والتحليل البعدي:</b>
                      تُعطى سرعة انتشار موجة ميكانيكية على طول حبل متوتر شدته $F$ ($\\text{N}$) وكتلته الطولية $\\mu = \\frac{m}{L}$ ($\\text{kg}\\cdot\\text{m}^{-1}$) بالعلاقة المرجعية:
                      $$v = \\sqrt{\\frac{F}{\\mu}} = \\sqrt{\\frac{F \\cdot L}{m}}$$
                      • <b>التحليل البعدي (Analyse dimensionnelle):</b> بما أن $[F] = M \\cdot L \\cdot T^{-2}$ و $[\\mu] = M \\cdot L^{-1}$، فإن:
                      $$\\left[\\frac{F}{\\mu}\\right] = \\frac{M \\cdot L \\cdot T^{-2}}{M \\cdot L^{-1}} = L^2 \\cdot T^{-2} \\implies \\left[\\sqrt{\\frac{F}{\\mu}}\\right] = L \\cdot T^{-1} = [v]$$
                      • <b>خلاصة عملية:</b> تزداد $v$ بزيادة توتر الحبل $F$ (شده أكثر)، وتنخفض عند استعمال حبل أغلظ/أثقل ($\\mu$ أكبر). كما ترتفع سرعة الصوت في الغازات كلما ارتفعت <b>درجة الحرارة</b> ($v_{\\text{air}}(0^\\circ\\text{C}) \\approx 331\\text{ m/s}$ و $v_{\\text{air}}(20^\\circ\\text{C}) \\approx 340\\text{ m/s}$).
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-purple-500/30">
                      <b class="text-purple-400 block mb-1">📊 الاستغلال المبياني في الامتحان الوطني (Exploitation graphique — $x_F(t)$ و $v^2(F)$):</b>
                      ترد كثيراً في البكالوريا مبيانات خطية تطلب تحديد $v$ أو $\\mu$ انطلاقاً من المعامل الموجه $k$ (<i>coefficient directeur</i>):<br/>
                      • <b>منحنى تقدم الجبهة $x_F = f(t)$:</b> دالة خطية معادلتها $x_F = v \\cdot t$، ومعاملها الموجه يساوي مباشرة سرعة الانتشار: $v = \\frac{\\Delta x_F}{\\Delta t}$.<br/>
                      • <b>منحنى مربع السرعة بدلالة التوتر $v^2 = f(F)$:</b> من العلاقة $v = \\sqrt{\\frac{F}{\\mu}} \\iff v^2 = \\left(\\frac{1}{\\mu}\\right) F$، تكون الدالة خطية معاملها الموجه $k = \\frac{\\Delta(v^2)}{\\Delta F} = \\frac{1}{\\mu} \\implies \\mu = \\frac{1}{k}$.
                    </div>
                  </div>
                </div>

                <!-- 4. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الامتحان الوطني (Pièges Classiques)</span>
                    <span class="text-xs text-rose-400 font-mono">معيار الصفر ضياع للنقط</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">1. فخ قياس $d$ بين نقطتين غير متماثلتين:</b>
                      حذارِ من حساب $d$ بين مقدمة الموجة في $t_1$ ومؤخرة الموجة في $t_2$!
                      <br/>✓ <b>الصواب:</b> تُقاس $d$ دائماً بين نقطتين متماثلتين ($F_1 \\to F_2$ أو قمة $M_1 \\to M_2$ أو $Q_1 \\to Q_2$).
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">2. فخ الذهاب والإياب في الصدى ($2D$):</b>
                      تطبيق $D = v \\cdot \\Delta t$ مباشرة في السونار أو التصوير بالصدى يضاعف السمك خطأً!
                      <br/>✓ <b>الصواب:</b> إذا التُقط الصدى عند نفس المسبار فالمسافة المقطوعة هي $2D \\implies D = \\frac{v \\cdot \\Delta t}{2}$.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">3. فخ «تضاعف السرعة بتضاعف الوسع»:</b>
                      إذا ضاعفنا وسع التشويه عند المنبع $S$ في نفس الحبل دون تغيير توتره $F$، تبقى $v$ <b>ثابتة تماماً</b> لأنها لا تتعلق بالمنبع.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">4. فخ وحدات الكتلة الطولية $\\mu$:</b>
                      غالباً تُعطى كتلة الحبل $m$ بالغرام ($\\text{g}$)؛ يجب تحويلها أولاً إلى الكيلوغرام ($\\times 10^{-3}\\text{ kg}$) قبل حساب $\\mu = \\frac{m}{L}$ واستعمال $v = \\sqrt{F/\\mu}$.
                    </div>
                  </div>
                </div>

                <!-- 5. Worked Exam Applications -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">📝 تطبيقات نموذجية محررة بصياغة الامتحان الوطني وسلالم التنقيط</span>
                    <span class="text-xs text-slate-400 font-mono">2BAC PC</span>
                  </div>

                  <!-- Application 1 -->
                  <div class="bg-slate-950 p-5 rounded-2xl border border-slate-800 mb-5">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: التصوير المتتالي على حبل، التوتر $F$، والتحليل البعدي</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نمدد حبلاً مرناً طوله $L = 4.0\\text{ m}$ وكتلته $m = 80\\text{ g}$ أفقياً تحت توتر $F$. نحدث تشويهاً عند طرفه $S$ ونلتقط انتشاره بكاميرا ترددها $N = 25\\text{ images/s}$. تمثل اللقطتان في الشكل الأول أعلاه موضع الموجة عند لحظتين تفصلهما $5$ فترات زمنية متتالية ($x_{F_1} = 0.80\\text{ m}$ و $x_{F_2} = 2.80\\text{ m}$).
                      <br/><b>1.</b> احسب المدة الزمنية $\\Delta t$ الفاصلة بين اللقطتين. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>2.</b> استنتج سرعة انتشار الموجة $v$ على طول الحبل. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>3.</b> نعلم أن العلاقة المعبرة عن السرعة هي $v = \\sqrt{\\frac{F}{\\mu}}$ حيث $\\mu$ الكتلة الطولية للحبل. تحقق من تجانس هذه العلاقة باستعمال معادلة الأبعاد، ثم احسب قيمة التوتر $F$. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                      <br/><b>4.</b> ما قيمة السرعة الجديدة $v'$ إذا ضاعفنا التوتر أربع مرات ($F' = 4F$)؟ وماذا يحدث لـ $v$ لو ضاعفنا وسع التشويه عند $S$ مع إبقاء التوتر $F$ ثابتاً؟ <span class="text-emerald-400 font-mono">(0.25 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. حساب $\\Delta t$:</b> المدة بين صورتين متتاليتين هي $\\Delta t_0 = \\frac{1}{N} = \\frac{1}{25} = 0.04\\text{ s}$. <br/>وبعد مرور $5$ فترات زمنية: $\\Delta t = 5 \\times \\Delta t_0 = 5 \\times 0.04 = 0.20\\text{ s}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2. حساب سرعة الانتشار $v$:</b> المسافة المقطوعة بين الجبهتين هي $d = x_{F_2} - x_{F_1} = 2.80 - 0.80 = 2.00\\text{ m}$.<br/>
                      $$v = \\frac{d}{\\Delta t} = \\frac{2.00}{0.20} = 10\\text{ m}\\cdot\\text{s}^{-1}$$
                      <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>3. التحليل البعدي وحساب $F$:</b><br/>
                      • لدينا $[F] = M \\cdot L \\cdot T^{-2}$ و $[\\mu] = \\left[\\frac{m}{L}\\right] = M \\cdot L^{-1}$، ومنه $\\left[\\sqrt{\\frac{F}{\\mu}}\\right] = \\sqrt{L^2 T^{-2}} = L \\cdot T^{-1} = [v]$؛ العلاقة متجانسة. <span class="text-emerald-400 font-mono">(0.25 ن)</span><br/>
                      • الكتلة الطولية: $\\mu = \\frac{m}{L} = \\frac{80 \\times 10^{-3}}{4.0} = 0.02\\text{ kg}\\cdot\\text{m}^{-1}$.<br/>
                      • من العلاقة $v = \\sqrt{\\frac{F}{\\mu}} \\implies F = \\mu \\cdot v^2 = 0.02 \\times 10^2 = 2.0\\text{ N}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>4. تغير التوتر والوسع:</b><br/>
                      • عند $F' = 4F$: $v' = \\sqrt{\\frac{4F}{\\mu}} = 2\\sqrt{\\frac{F}{\\mu}} = 2v = 20\\text{ m}\\cdot\\text{s}^{-1}$.<br/>
                      • عند مضاعفة الوسع فقط مع ثبات $F$ و $\\mu$: <b>تبقى السرعة $v$ ثابتة</b> ($10\\text{ m}\\cdot\\text{s}^{-1}$) لأنها خاصية للوسط لا للشكل. <span class="text-emerald-400 font-mono">(0.25 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: راسم التذبذب للموجات فوق الصوتية والتصوير بالصدى الطبي (Échographie)</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.75 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      <b>الجزء أ:</b> يُوضع مستقبلان فوق صوتيان $R_1$ و $R_2$ على نفس المحور في الهواء تفصلهما مسافة $d = 68\\text{ cm}$ (انظر شاشة راسم التذبذب أعلاه). تُعطى الحساسية الأفقية $S_h = 0.5\\text{ ms/div}$. احسب سرعة انتشار الموجات فوق الصوتية في الهواء $v_{\\text{air}}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>الجزء ب:</b> نُرسل عبر مسبار طبي موجة فوق صوتية داخل جسم مريض حيث سرعتها $v_{\\text{tissu}} = 1540\\text{ m}\\cdot\\text{s}^{-1}$ لقياس سُمك عضو $e$. يلتقط المسبارُ الصدى المنعكس عن الوجه الأمامي للعضو عند اللحظة $t_1 = 20\\text{ }\\mu\\text{s}$، والصدى المنعكس عن الوجه الخلفي للعضو عند اللحظة $t_2 = 85\\text{ }\\mu\\text{s}$. احسب سمك العضو $e$. <span class="text-emerald-400 font-mono">(1.00 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>الجزء أ:</b> من الرسم التذبذبي نقرأ الفرق بالمسح الأفقي $n_{\\text{div}} = 4\\text{ div}$، إذن:<br/>
                      $\\Delta t = n_{\\text{div}} \\times S_h = 4 \\times 0.5\\text{ ms} = 2.0\\text{ ms} = 2.0 \\times 10^{-3}\\text{ s}$.<br/>
                      وبتحويل $d = 68\\text{ cm} = 0.68\\text{ m}$ نحصل على:<br/>
                      $$v_{\\text{air}} = \\frac{d}{\\Delta t} = \\frac{0.68}{2.0 \\times 10^{-3}} = 340\\text{ m}\\cdot\\text{s}^{-1}$$
                      <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>الجزء ب:</b> المدة الزمنية الإضافية التي استغرقتها الموجة لقطع السمك $e$ <b>ذهاباً وإياباً</b> داخل العضو هي:<br/>
                      $\\Delta t_{\\text{écho}} = t_2 - t_1 = 85 - 20 = 65\\text{ }\\mu\\text{s} = 65 \\times 10^{-6}\\text{ s}$.<br/>
                      وبما أن المسافة المقطوعة بين الإشارتين هي $2e$:
                      $$e = \\frac{v_{\\text{tissu}} \\cdot \\Delta t_{\\text{écho}}}{2} = \\frac{1540 \\times 65 \\times 10^{-6}}{2} = 5.005 \\times 10^{-2}\\text{ m} \\approx 5.0\\text{ cm}$$
                      <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 6. Interactive Auto-Test -->
                <div class="bg-amber-950/20 border border-amber-500/30 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">مسألة موجتي الزلازل $P$ و $S$</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    عند حدوث هزة أرضية في البؤرة $F$ على مسافة $D$ من محطة الرصد $M$، تنطلق في اللحظة نفسها $t_0 = 0$ الموجات الزلزالية الطولية $P$ بسرعة $v_P = 6.0\\text{ km}\\cdot\\text{s}^{-1}$ والموجات المستعرضة $S$ بسرعة $v_S = 3.5\\text{ km}\\cdot\\text{s}^{-1}$.
                    تسجل محطة الرصد $M$ وصول الموجات $P$ قبل الموجات $S$ بفارق زمني قدره $\\Delta t = t_S - t_P = 10\\text{ s}$.
                    <br/>• عبّر عن المسافة $D$ بدلالة $v_P$ و $v_S$ و $\\Delta t$، ثم احسب قيمة $D$ بالكيلومتر ($\\text{km}$).
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني النموذجي</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. التعبير الحرفي للمسافة $D$:</b><br/>
                      تصل الموجة $P$ عند اللحظة $t_P = \\frac{D}{v_P}$، وتصل الموجة $S$ عند اللحظة $t_S = \\frac{D}{v_S}$.<br/>
                      وبالتالي فإن الفارق الزمني المرصود في المحطة $M$ يحقق:
                      $$\\Delta t = t_S - t_P = \\frac{D}{v_S} - \\frac{D}{v_P} = D \\left(\\frac{1}{v_S} - \\frac{1}{v_P}\\right) = D \\cdot \\frac{v_P - v_S}{v_P \\cdot v_S}$$
                      ومنه نستخرج التعبير الحرفي لـ $D$:
                      $$D = \\frac{v_P \\cdot v_S \\cdot \\Delta t}{v_P - v_S}$$</p>
                      <p><b>2. التطبيق العددي:</b><br/>
                      $$D = \\frac{6.0 \\times 3.5 \\times 10}{6.0 - 3.5} = \\frac{210}{2.5} = 84\\text{ km}$$
                      <span class="text-emerald-400 font-bold">✓ تقع بؤرة الزلزال على بُعد $84\\text{ km}$ من محطة الرصد $M$!</span></p>
                    </div>
                  </details>
                </div>
              </div>

`);
