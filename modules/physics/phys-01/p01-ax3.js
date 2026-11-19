window.EulerAcademy.registerAxis('phys-01', 'p01-ax3', `

              <div class="space-y-6">
                <!-- 1. Official Definition of Temporal Delay -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-purple-500/15 text-purple-300 text-xs font-bold">1. مفهوم التأخر الزمني وصيغته الرسمية (Le retard temporel $\\tau$)</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>
                  <p class="text-sm text-slate-200 leading-relaxed mb-3">
                    في وسط متجانس تنتشر فيه موجة ميكانيكية بسرعة ثابتة $v$، تستغرق الموجة مدة زمنية للانتقال من المنبع $S$ إلى نقطة $M$ تقع على مسافة $SM$ (أو من نقطة $M_1$ إلى نقطة $M_2$). تُسمى هذه المدة <b>التأخر الزمني $\\tau$</b> (<i>retard temporel</i>):
                  </p>
                  <div class="bg-slate-950 border border-purple-500/30 rounded-xl p-4 text-center my-3 space-y-2">
                    <div class="text-xs text-slate-400">بين المنبع $S$ والنقطة $M$:</div>
                    $$\\tau = \\frac{SM}{v}$$
                    <div class="text-xs text-slate-400 pt-1">أو بصفة عامة بين نقطتين $M_1$ و $M_2$:</div>
                    $$\\tau = \\frac{M_1 M_2}{v} = t_{M_2} - t_{M_1}$$
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300 mt-4">
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">🔄 التماثل الاهتزازي للنقط:</b>
                      في وسط أحادي البعد غير مبدد وغير مخمد، <b>تُعيد النقطة $M$ نفس حركة المنبع $S$ تماماً</b> بعد انقضاء المدة الزمنية $\\tau$.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                      <b class="text-amber-400 block mb-1">⏱️ مدة اهتزاز النقطة الواحدة $\\Delta t_{\\text{pert}}$:</b>
                      تبدأ $M$ حركتها عند اللحظة $t_{\\text{début}} = t_S + \\tau$ وتسكن بعد مرور مدة التشويه $\\Delta t_{\\text{pert}} = \\frac{L}{v}$ (حيث $L$ طول التشويه على الحبل)، وهي مدة <b>ثابتة لجميع النقط</b>.
                    </div>
                  </div>
                </div>

                <!-- 2. Elongation Relation y_M(t) = y_S(t - tau) -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">2. العلاقة الاستطالية الحاسمة $y_M(t) = y_S(t - \\tau)$</span>
                    <span class="text-xs text-slate-400 font-mono">Relation d’élongation</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-3">
                    بما أن النقطة $M$ تمرّ عند اللحظة $t$ بنفس الاستطالة التي كان عليها المنبع $S$ في اللحظة السابقة $t - \\tau$، فإننا نكتب العلاقتين المتكافئتين المعتمدتين في الامتحان الوطني:
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                    <div class="bg-slate-950 border border-cyan-500/30 rounded-xl p-4 text-center">
                      <span class="text-xs font-bold text-cyan-300 block mb-1">استطالة $M$ بدلالة $S$ (عند اللحظة $t$):</span>
                      $$y_M(t) = y_S(t - \\tau) = y_S\\!\\left(t - \\frac{SM}{v}\\right)$$
                    </div>
                    <div class="bg-slate-950 border border-emerald-500/30 rounded-xl p-4 text-center space-y-2">
                      <span class="text-xs font-bold text-emerald-300 block mb-1">استطالة $S$ بدلالة $M$ (أو بين $M_1$ و $M_2$):</span>
                      <div>$$y_S(t) = y_M(t + \\tau)$$</div>
                      <div class="text-[11px] text-slate-400">وبصفة عامة إذا سبقت $M_1$ النقطة $M_2$:</div>
                      <div>$$y_{M_2}(t) = y_{M_1}(t - \\tau)$$</div>
                    </div>
                  </div>

                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardSourceVsPoint">
      <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
        <span>⏱️ الإزاحة الزمنية بين حركة المنبع $y_S(t)$ وحركة النقطة $y_M(t) = y_S(t - \\tau)$</span>
        <span class="text-[11px] font-mono text-purple-300">τ = SM / v</span>
      </div>
      <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
        <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
          <div class="flex flex-wrap items-center gap-4">
            <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-5 h-0.5 bg-cyan-400"></span> المنبع y_S(t)</span>
            <span class="flex items-center gap-1.5 text-emerald-300"><span class="inline-block w-5 h-0.5 bg-emerald-400"></span> النقطة y_M(t) = y_S(t - τ)</span>
          </div>
          <span class="text-purple-300 font-mono">Δt_pert (S) = Δt_pert (M)</span>
        </div>
        <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 165" class="w-full h-auto">
          <defs>
            <marker id="arrTAx" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
            </marker>
            <marker id="arrTau" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#c084fc"/>
            </marker>
          </defs>
          <line x1="45" y1="126" x2="635" y2="126" stroke="#475569" stroke-width="1.8" marker-end="url(#arrTAx)"/>
          <line x1="55" y1="134" x2="55" y2="24" stroke="#475569" stroke-width="1.8" marker-end="url(#arrTAx)"/>
          <text x="652" y="130" fill="#94a3b8" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">t(s)</text>

          <path d="M 55.0,126.0 L 59.0,125.6 L 63.0,124.3 L 67.0,122.3 L 71.0,119.5 L 75.0,116.0 L 79.0,112.0 L 83.0,107.4 L 87.0,102.5 L 91.0,97.3 L 95.0,92.0 L 99.0,86.7 L 103.0,81.5 L 107.0,76.6 L 111.0,72.0 L 115.0,68.0 L 119.0,64.5 L 123.0,61.7 L 127.0,59.7 L 131.0,58.4 L 135.0,58.0 L 139.0,58.4 L 143.0,59.7 L 147.0,61.7 L 151.0,64.5 L 155.0,68.0 L 159.0,72.0 L 163.0,76.6 L 167.0,81.5 L 171.0,86.7 L 175.0,92.0 L 179.0,97.3 L 183.0,102.5 L 187.0,107.4 L 191.0,112.0 L 195.0,116.0 L 199.0,119.5 L 203.0,122.3 L 207.0,124.3 L 211.0,125.6 L 215.0,126.0 L 219.0,126.0 L 223.0,126.0 L 227.0,126.0 L 231.0,126.0 L 235.0,126.0 L 239.0,126.0 L 243.0,126.0 L 247.0,126.0 L 251.0,126.0 L 255.0,126.0 L 259.0,126.0 L 263.0,126.0 L 267.0,126.0 L 271.0,126.0 L 275.0,126.0 L 279.0,126.0 L 283.0,126.0 L 287.0,126.0 L 291.0,126.0 L 295.0,126.0 L 299.0,126.0 L 303.0,126.0 L 307.0,126.0 L 311.0,126.0 L 315.0,126.0 L 319.0,126.0 L 323.0,126.0 L 327.0,126.0 L 331.0,126.0 L 335.0,126.0 L 339.0,126.0 L 343.0,126.0 L 347.0,126.0 L 351.0,126.0 L 355.0,126.0 L 359.0,126.0 L 363.0,126.0 L 367.0,126.0 L 371.0,126.0 L 375.0,126.0 L 379.0,126.0 L 383.0,126.0 L 387.0,126.0 L 391.0,126.0 L 395.0,126.0 L 399.0,126.0 L 403.0,126.0 L 407.0,126.0 L 411.0,126.0 L 415.0,126.0 L 419.0,126.0 L 423.0,126.0 L 427.0,126.0 L 431.0,126.0 L 435.0,126.0 L 439.0,126.0 L 443.0,126.0 L 447.0,126.0 L 451.0,126.0 L 455.0,126.0 L 459.0,126.0 L 463.0,126.0 L 467.0,126.0 L 471.0,126.0 L 475.0,126.0 L 479.0,126.0 L 483.0,126.0 L 487.0,126.0 L 491.0,126.0 L 495.0,126.0 L 499.0,126.0 L 503.0,126.0 L 507.0,126.0 L 511.0,126.0 L 515.0,126.0 L 519.0,126.0 L 523.0,126.0 L 527.0,126.0 L 531.0,126.0 L 535.0,126.0 L 539.0,126.0 L 543.0,126.0 L 547.0,126.0 L 551.0,126.0 L 555.0,126.0 L 559.0,126.0 L 563.0,126.0 L 567.0,126.0 L 571.0,126.0 L 575.0,126.0 L 579.0,126.0 L 583.0,126.0 L 587.0,126.0 L 591.0,126.0 L 595.0,126.0 L 599.0,126.0 L 603.0,126.0 L 607.0,126.0 L 611.0,126.0 L 615.0,126.0" fill="none" stroke="#22d3ee" stroke-width="3"/>
          <path d="M 55.0,126.0 L 59.0,126.0 L 63.0,126.0 L 67.0,126.0 L 71.0,126.0 L 75.0,126.0 L 79.0,126.0 L 83.0,126.0 L 87.0,126.0 L 91.0,126.0 L 95.0,126.0 L 99.0,126.0 L 103.0,126.0 L 107.0,126.0 L 111.0,126.0 L 115.0,126.0 L 119.0,126.0 L 123.0,126.0 L 127.0,126.0 L 131.0,126.0 L 135.0,126.0 L 139.0,126.0 L 143.0,126.0 L 147.0,126.0 L 151.0,126.0 L 155.0,126.0 L 159.0,126.0 L 163.0,126.0 L 167.0,126.0 L 171.0,126.0 L 175.0,126.0 L 179.0,126.0 L 183.0,126.0 L 187.0,126.0 L 191.0,126.0 L 195.0,126.0 L 199.0,126.0 L 203.0,126.0 L 207.0,126.0 L 211.0,126.0 L 215.0,126.0 L 219.0,126.0 L 223.0,126.0 L 227.0,126.0 L 231.0,126.0 L 235.0,126.0 L 239.0,126.0 L 243.0,126.0 L 247.0,126.0 L 251.0,126.0 L 255.0,126.0 L 259.0,126.0 L 263.0,126.0 L 267.0,126.0 L 271.0,126.0 L 275.0,126.0 L 279.0,126.0 L 283.0,126.0 L 287.0,126.0 L 291.0,126.0 L 295.0,126.0 L 299.0,126.0 L 303.0,126.0 L 307.0,126.0 L 311.0,126.0 L 315.0,126.0 L 319.0,126.0 L 323.0,126.0 L 327.0,126.0 L 331.0,126.0 L 335.0,126.0 L 339.0,125.6 L 343.0,124.3 L 347.0,122.3 L 351.0,119.5 L 355.0,116.0 L 359.0,112.0 L 363.0,107.4 L 367.0,102.5 L 371.0,97.3 L 375.0,92.0 L 379.0,86.7 L 383.0,81.5 L 387.0,76.6 L 391.0,72.0 L 395.0,68.0 L 399.0,64.5 L 403.0,61.7 L 407.0,59.7 L 411.0,58.4 L 415.0,58.0 L 419.0,58.4 L 423.0,59.7 L 427.0,61.7 L 431.0,64.5 L 435.0,68.0 L 439.0,72.0 L 443.0,76.6 L 447.0,81.5 L 451.0,86.7 L 455.0,92.0 L 459.0,97.3 L 463.0,102.5 L 467.0,107.4 L 471.0,112.0 L 475.0,116.0 L 479.0,119.5 L 483.0,122.3 L 487.0,124.3 L 491.0,125.6 L 495.0,126.0 L 499.0,126.0 L 503.0,126.0 L 507.0,126.0 L 511.0,126.0 L 515.0,126.0 L 519.0,126.0 L 523.0,126.0 L 527.0,126.0 L 531.0,126.0 L 535.0,126.0 L 539.0,126.0 L 543.0,126.0 L 547.0,126.0 L 551.0,126.0 L 555.0,126.0 L 559.0,126.0 L 563.0,126.0 L 567.0,126.0 L 571.0,126.0 L 575.0,126.0 L 579.0,126.0 L 583.0,126.0 L 587.0,126.0 L 591.0,126.0 L 595.0,126.0 L 599.0,126.0 L 603.0,126.0 L 607.0,126.0 L 611.0,126.0 L 615.0,126.0" fill="none" stroke="#34d399" stroke-width="3"/>

          <!-- Delay arrow between peaks (135 -> 415 at y=48) and onsets (55 -> 335 at y=98) -->
          <line x1="138" y1="46" x2="412" y2="46" stroke="#c084fc" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#arrTau)"/>
          <text x="275" y="36" fill="#c084fc" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">+ τ</text>

          <!-- Guides & Ticks -->
          <line x1="135" y1="58" x2="135" y2="126" stroke="rgba(34,211,238,0.3)" stroke-dasharray="3,3"/>
          <line x1="415" y1="58" x2="415" y2="126" stroke="rgba(52,211,153,0.3)" stroke-dasharray="3,3"/>

          <text x="55" y="146" fill="#22d3ee" font-size="10" font-family="monospace" text-anchor="middle">0</text>
          <text x="215" y="146" fill="#22d3ee" font-size="10" font-family="monospace" text-anchor="middle">Δt_S</text>
          <text x="335" y="146" fill="#34d399" font-size="10" font-family="monospace" text-anchor="middle">τ</text>
          <text x="495" y="146" fill="#34d399" font-size="10" font-family="monospace" text-anchor="middle">τ + Δt_S</text>
        </svg>
      </div>
    </div>

                  <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 space-y-1.5">
                    <b class="text-amber-300 block">📌 تفصيل المجالات الزمنية لحركة النقطة $M$ (مع انطلاق $S$ في $t_0=0$ لمدة $\\Delta t_S$):</b>
                    <p>• <b>قبل وصول الموجة ($0 \\le t < \\tau$):</b> لم يبلغ التشويه النقطة $M$ بعد $\\implies$ <b>$y_M(t) = 0$</b>.</p>
                    <p>• <b>أثناء عبور الموجة ($\\tau \\le t \\le \\tau + \\Delta t_S$):</b> تهتز النقطة $M$ مطابقةً استطالة المنبع في $t - \\tau$: <b>$y_M(t) = y_S(t - \\tau)$</b>.</p>
                    <p>• <b>بعد مغادرة مؤخرة الموجة ($t > \\tau + \\Delta t_S$):</b> استعادت $M$ موضع توازنها نهائياً $\\implies$ <b>$y_M(t) = 0$</b>.</p>
                  </div>
                </div>

                <!-- 3. Critical Skill: Spatial Aspect y(x) vs Temporal Graph y_M(t) -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">3. التحويل المبياني الحاسم: مظهر الحبل $y(x)$ مقابل الاستطالة الزمنية $y_M(t)$</span>
                    <span class="text-xs text-slate-400 font-mono">Aspect spatial vs Graphique temporel</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-3">
                    عند انتقال موجة ذات شكل <b>غير متماثل</b> نحو اليمين: الجزء الأمامي عند <b>الجبهة $F$</b> هو الذي يلامس النقطة $M$ <b>أولاً</b> (عند اللحظة الصغرى $\\tau$)، بينما الجزء الخلفي عند <b>المؤخرة $Q$</b> هو الذي يمر بها <b>أخيراً</b> (عند اللحظة الكبرى $\\tau + \\Delta t_S$). ولذلك <b>ينعكس رسم الشكل أفقياً</b> في المنحنى الزمني $y_M(t)$ مقارنةً بمظهر الحبل $y(x)$!
                  </p>

                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardRetardCompare">
      <div class="text-xs font-bold text-slate-300 mb-3 flex flex-wrap items-center justify-between gap-2">
        <span>🔄 المقارنة الحاسمة: مظهر الحبل $y(x)$ في لحظة $t_1=0.30\\text{ s}$ مقابل المنحنى الزمني $y_M(t)$ لـ $x_M=2.50\\text{ m}$</span>
        <span class="text-[11px] font-mono text-amber-400">انعكاس الجبهة أفقياً!</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
          <div class="text-[11px] font-bold text-cyan-300 mb-1.5 flex items-center justify-between">
            <span>1) مظهر الحبل في $t_1 = 0.30\\text{ s}$ ($y$ بدلالة $x$)</span>
            <span class="font-mono text-slate-400">الواجهة الحادة يميناً</span>
          </div>
          <svg direction="ltr" style="direction: ltr;" viewBox="0 0 330 140" class="w-full h-auto">
      <defs>
        <marker id="arrAxL" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
        </marker>
        <marker id="arrPropL" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
        </marker>
      </defs>
      <!-- Axes -->
      <line x1="40" y1="100" x2="305" y2="100" stroke="#475569" stroke-width="1.8" marker-end="url(#arrAxL)"/>
      <line x1="45" y1="108" x2="45" y2="18" stroke="#475569" stroke-width="1.8" marker-end="url(#arrAxL)"/>
      <text x="315" y="104" fill="#94a3b8" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">x(m)</text>
      <text x="24" y="24" fill="#94a3b8" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">y(cm)</text>

      <!-- Pulse at t1 = 0.30s: flat [0, 0.90], slope [0.90 -> 1.50], vertical drop at 1.50, flat [1.50, 2.00] -->
      <path d="M 45,100 L 153,100 L 225,36 L 225,100 L 295,100" fill="none" stroke="#22d3ee" stroke-width="2.8" stroke-linejoin="round"/>
      <polygon points="153,100 225,36 225,100" fill="rgba(34,211,238,0.12)"/>

      <!-- Propagation arrow -->
      <line x1="235" y1="44" x2="285" y2="44" stroke="#34d399" stroke-width="2" marker-end="url(#arrPropL)"/>
      <text x="260" y="34" fill="#34d399" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">v →</text>

      <!-- Ticks & points -->
      <circle cx="45" cy="100" r="3" fill="#e2e8f0"/>
      <text x="45" y="118" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">S(0)</text>

      <circle cx="153" cy="100" r="3.5" fill="#fbbf24"/>
      <text x="153" y="118" fill="#fbbf24" font-size="10" font-family="monospace" text-anchor="middle">Q(0.90)</text>

      <circle cx="225" cy="100" r="3.5" fill="#34d399"/>
      <text x="225" y="118" fill="#34d399" font-size="10" font-family="monospace" text-anchor="middle">F(1.50)</text>
      <text x="225" y="25" fill="#22d3ee" font-size="10" font-family="monospace" text-anchor="middle">+2cm</text>
    </svg>
        </div>
        <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
          <div class="text-[11px] font-bold text-amber-300 mb-1.5 flex items-center justify-between">
            <span>2) استطالة النقطة $M$ بدلالة الزمن ($y_M$ بدلالة $t$)</span>
            <span class="font-mono text-slate-400">الواجهة الحادة أولاً (يساراً)</span>
          </div>
          <svg direction="ltr" style="direction: ltr;" viewBox="0 0 330 140" class="w-full h-auto">
      <defs>
        <marker id="arrAxR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
        </marker>
      </defs>
      <!-- Axes -->
      <line x1="40" y1="100" x2="305" y2="100" stroke="#475569" stroke-width="1.8" marker-end="url(#arrAxR)"/>
      <line x1="45" y1="108" x2="45" y2="18" stroke="#475569" stroke-width="1.8" marker-end="url(#arrAxR)"/>
      <text x="315" y="104" fill="#94a3b8" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">t(s)</text>
      <text x="24" y="24" fill="#94a3b8" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">y_M</text>

      <!-- y_M(t): flat 0 until 0.50s (201), sharp vertical jump to +2cm at 0.50s, linear fall to 0 at 0.62s (239), flat after -->
      <path d="M 45,100 L 201,100 L 201,36 L 239,100 L 295,100" fill="none" stroke="#fbbf24" stroke-width="2.8" stroke-linejoin="round"/>
      <polygon points="201,100 201,36 239,100" fill="rgba(251,191,36,0.14)"/>

      <!-- Delay bracket [0 .. 0.50] -->
      <line x1="47" y1="68" x2="198" y2="68" stroke="#a855f7" stroke-width="1.6" stroke-dasharray="3,3"/>
      <text x="122" y="61" fill="#c084fc" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">τ = 0.50 s</text>

      <!-- Ticks -->
      <text x="45" y="118" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">0</text>
      <circle cx="201" cy="100" r="3.5" fill="#34d399"/>
      <text x="195" y="118" fill="#34d399" font-size="10" font-family="monospace" text-anchor="middle">0.50</text>
      <circle cx="239" cy="100" r="3.5" fill="#fbbf24"/>
      <text x="245" y="118" fill="#fbbf24" font-size="10" font-family="monospace" text-anchor="middle">0.62</text>
      <text x="201" y="25" fill="#fbbf24" font-size="10" font-family="monospace" text-anchor="middle">+2cm</text>
    </svg>
        </div>
      </div>
    </div>

                  <div class="overflow-x-auto mt-3">
                    <table class="w-full text-xs text-right border-collapse border border-slate-800 rounded-xl overflow-hidden">
                      <thead class="bg-slate-950 text-cyan-300">
                        <tr>
                          <th class="p-2.5 border border-slate-800">وجه المقارنة</th>
                          <th class="p-2.5 border border-slate-800">مظهر الحبل $y = f(x)$</th>
                          <th class="p-2.5 border border-slate-800">استطالة نقطة $y_M = g(t)$</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-800 bg-slate-900/50 text-slate-200">
                        <tr>
                          <td class="p-2.5 font-bold text-slate-300 border border-slate-800">الثابت والمتغير</td>
                          <td class="p-2.5 border border-slate-800">الزمن $t_1$ ثابت والمكان $x$ متغير</td>
                          <td class="p-2.5 border border-slate-800">النقطة $M$ ثابتة والزمن $t$ متغير</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-bold text-slate-300 border border-slate-800">عرض التشويه المقروء</td>
                          <td class="p-2.5 border border-slate-800">طول التشويه $L = x_F - x_Q$ ($\\text{m}$)</td>
                          <td class="p-2.5 border border-slate-800">مدة التشويه $\\Delta t_{\\text{pert}} = \\frac{L}{v}$ ($\\text{s}$)</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-bold text-slate-300 border border-slate-800">الترتيب على المحور الأفقي</td>
                          <td class="p-2.5 border border-slate-800">المؤخرة $Q$ يساراً، الجبهة $F$ يميناً</td>
                          <td class="p-2.5 border border-slate-800">الجبهة $F$ تصل أولاً (يساراً عند $\\tau$)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- 4. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الامتحان الوطني (Pièges Classiques)</span>
                    <span class="text-xs text-rose-400 font-mono">تجنب خسارة النقط المجانية</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">1. فخ «نقل الشكل غير المتماثل بدون قلبه»:</b>
                      أشهر خطأ في المراقبة المستمرة والوطني!
                      <br/>✓ <b>القاعدة القاطعة:</b> الجزء الأقرب إلى جبهة الموجة $F$ على مظهر الحبل هو الجزء الأسبق زمنياً على منحنى $y_M(t)$!
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">2. فخ الإشارة بين $(t - \\tau)$ و $(t + \\tau)$:</b>
                      لا تعكس العلاقة! النقطة المتأخرة $M$ تسترجع ماضي المنبع، إذن: $y_M(t) = y_S(t - \\tau)$ (ناقص $\\tau$).
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">3. فخ الخلط بين $\\tau$ و $\\Delta t_{\\text{pert}}$:</b>
                      التأخر $\\tau = \\frac{SM}{v}$ يزداد بالابتعاد عن $S$، بينما مدة اهتزاز النقطة $\\Delta t_{\\text{pert}} = \\frac{L}{v}$ <b>ثابتة</b> لجميع النقط.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">4. فخ شرط البدء في $t_0 \\neq 0$:</b>
                      انتبه لمعطيات التمرين! إذا انطلق التشويه من $S$ عند لحظة $t_S \\neq 0$، فإن جبهة الموجة تصل إلى $M$ عند اللحظة $t_M = t_S + \\tau$ وليس $\\tau$!
                    </div>
                  </div>
                </div>

                <!-- 5. Worked Exam Applications -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">📝 تطبيقات نموذجية محررة بصياغة الامتحان الوطني وسلالم التنقيط</span>
                    <span class="text-xs text-slate-400 font-mono">2BAC PC</span>
                  </div>

                  <!-- Application 1 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800 mb-5">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: استثمار المظهر غير المتماثل لرسم منحنى $y_M(t)$ (انظر الرسم أعلاه)</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      ينطلق تشويه مثلثي غير متماثل من المنبع $S(x=0)$ على طول حبل مشدود عند اللحظة $t_0 = 0$. يُمثل الشكل (1) أعلاه مظهر الحبل عند اللحظة $t_1 = 0.30\\text{ s}$ حيث تبلغ جبهة الموجة $F$ الأفصول $x_F = 1.50\\text{ m}$ ومؤخرتها $Q$ في $x_Q = 0.90\\text{ m}$، بوسع $+2\\text{ cm}$.
                      <br/><b>1.</b> احسب سرعة انتشار الموجة $v$، وطول التشويه $L$، ومدة اهتزاز كل نقطة $\\Delta t_{\\text{pert}}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                      <br/><b>2.</b> نعتبر نقطة $M$ من الحبل أفصولها $x_M = 2.50\\text{ m}$. احسب التأخر الزمني $\\tau$ للنقطة $M$ بالنسبة لـ $S$، واستنتج لحظتي بداية ونهاية حركتها. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>3.</b> عبّر عن استطالة النقطة $M$ بدلالة استطالة $S$، ثم علّل الشكل المعكوس للمنحنى (2) الممثل لـ $y_M(t)$ أعلاه. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. السرعة والطول ومدة الحركة:</b><br/>
                      • $v = \\frac{SF}{t_1 - t_0} = \\frac{1.50}{0.30} = 5.0\\text{ m}\\cdot\\text{s}^{-1}$. <span class="text-emerald-400 font-mono">(0.25 ن)</span><br/>
                      • طول التشويه: $L = x_F - x_Q = 1.50 - 0.90 = 0.60\\text{ m}$. <span class="text-emerald-400 font-mono">(0.25 ن)</span><br/>
                      • مدة تشويه كل نقطة: $\\Delta t_{\\text{pert}} = \\frac{L}{v} = \\frac{0.60}{5.0} = 0.12\\text{ s}$. <span class="text-emerald-400 font-mono">(0.25 ن)</span></p>
                      <p><b>2. التأخر الزمني وبداية ونهاية حركة $M$:</b><br/>
                      • $\\tau = \\frac{SM}{v} = \\frac{2.50}{5.0} = 0.50\\text{ s}$. <span class="text-emerald-400 font-mono">(0.25 ن)</span><br/>
                      • بما أن $t_0 = 0$: تبدأ $M$ بالاهتزاز عند $t_{\\text{début}} = \\tau = 0.50\\text{ s}$، وتسكن عند $t_{\\text{fin}} = \\tau + \\Delta t_{\\text{pert}} = 0.50 + 0.12 = 0.62\\text{ s}$. <span class="text-emerald-400 font-mono">(0.25 ن)</span></p>
                      <p><b>3. العلاقة الاستطالية وتعليل الشكل (2):</b><br/>
                      • $y_M(t) = y_S(t - 0.50)$ لكل $t \\ge 0.50\\text{ s}$، و $y_M(t) = 0$ خارج المجال $[0.50, 0.62]$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      • <b>تعليل الشكل:</b> في مظهر الحبل (1)، الواجهة الحادة العمودية هي جبهة الموجة $F$ فتصل إلى $M$ أولاً عند $t = 0.50\\text{ s}$ فترتفع الاستطالة عمودياً إلى $+2\\text{ cm}$، ثم تعود تدريجياً نحو $0$ بمرور الجزء الخلفي المائل حتى $t = 0.62\\text{ s}$، كما يوضح المنحنى (2). <span class="text-emerald-400 font-mono">(0.25 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: حساب الاستطالات بين المنبع ونقطتين $M_1$ و $M_2$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      تنتشر موجة ميكانيكية على طول حبل بسرعة $v = 8.0\\text{ m}\\cdot\\text{s}^{-1}$ انطلاقاً من المنبع $S$ عند $t_0 = 0$. تبلغ استطالة المنبع: $y_S(0) = 0$، ثم تصل لذروتها $y_S(0.10\\text{ s}) = +3\\text{ cm}$، وتعود للصفر عند $t = 0.20\\text{ s}$ ثم تسكن. نعتبر نقطتين $M_1$ ($SM_1 = 2.0\\text{ m}$) و $M_2$ ($SM_2 = 5.2\\text{ m}$).
                      <br/><b>1.</b> احسب التأخر الزمني $\\tau_1$ للنقطة $M_1$ بالنسبة لـ $S$، والتأخر الزمني $\\tau_{2/1}$ للنقطة $M_2$ بالنسبة لـ $M_1$. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>2.</b> استنتج قيمة استطالة $M_1$ عند اللحظة $t = 0.35\\text{ s}$، واستطالة $M_2$ عند اللحظة $t = 0.75\\text{ s}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>3.</b> حدّد متى تسكن النقطة $M_1$ ومتى تسكن النقطة $M_2$. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. حساب التأخرين الزمنيين:</b><br/>
                      • $\\tau_1 = \\frac{SM_1}{v} = \\frac{2.0}{8.0} = 0.25\\text{ s}$.<br/>
                      • $\\tau_{2/1} = \\frac{M_1 M_2}{v} = \\frac{5.2 - 2.0}{8.0} = \\frac{3.2}{8.0} = 0.40\\text{ s}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2. حساب الاستطالتين:</b><br/>
                      • لـ $M_1$ عند $t = 0.35\\text{ s}$: $y_{M_1}(0.35) = y_S(0.35 - \\tau_1) = y_S(0.35 - 0.25) = y_S(0.10\\text{ s}) = +3\\text{ cm}$. <span class="text-emerald-400 font-mono">(0.25 ن)</span><br/>
                      • لـ $M_2$ عند $t = 0.75\\text{ s}$: نلاحظ أن $y_{M_2}(t) = y_{M_1}(t - \\tau_{2/1}) = y_{M_1}(0.75 - 0.40) = y_{M_1}(0.35\\text{ s}) = +3\\text{ cm}$ (أو مباشرة: $\\tau_2 = \\tau_1 + \\tau_{2/1} = 0.65\\text{ s} \\implies y_{M_2}(0.75) = y_S(0.75 - 0.65) = y_S(0.10\\text{ s}) = +3\\text{ cm}$). <span class="text-emerald-400 font-mono">(0.25 ن)</span></p>
                      <p><b>3. لحظتا السكون النهائي:</b> مدة حركة $S$ هي $\\Delta t_S = 0.20\\text{ s}$.<br/>
                      • تسكن $M_1$ عند $t_{\\text{fin},1} = \\tau_1 + \\Delta t_S = 0.25 + 0.20 = 0.45\\text{ s}$.<br/>
                      • تسكن $M_2$ عند $t_{\\text{fin},2} = \\tau_2 + \\Delta t_S = 0.65 + 0.20 = 0.85\\text{ s}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 6. Interactive Auto-Test -->
                <div class="bg-purple-950/20 border border-purple-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">استنتاج السرعة واللحظة من العلاقة الزمنية</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    تنطلق موجة ميكانيكية من منبع $S$ عند اللحظة $t_0 = 0$ ويبلغ المنبع ذروة تشويهه القصوى بعد مرور مدة $\\theta = 0.10\\text{ s}$ من انطلاقه.
                    نرصد في لحظة معينة $t_1$ أن النقطة $M_1$ الواقعة على مسافة $SM_1 = 2.4\\text{ m}$ توجد تماماً في ذروتها القصوى، بينما لا تبدأ النقطة $M_2$ الواقعة على مسافة $SM_2 = 4.2\\text{ m}$ في الحركة إلا بعد مرور $\\delta t = 0.35\\text{ s}$ من اللحظة $t_1$.
                    <br/>• أوجد سرعة انتشار الموجة $v$، واللحظة $t_1$، والتأخر الزمني $\\tau$ بين $M_2$ و $M_1$.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-purple-300 hover:text-purple-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. استغلال حالة $M_1$ وحالة $M_2$:</b><br/>
                      • بما أن $M_1$ تعيد حركة $S$ بعد تأخر $\\tau_1 = \\frac{SM_1}{v}$، فهي تبلغ ذروتها في اللحظة:
                      $$t_1 = \\tau_1 + \\theta = \\frac{2.4}{v} + 0.10 \\quad (1)$$
                      • وتصل جبهة الموجة إلى $M_2$ عند لحظة تأخرها $\\tau_2 = \\frac{SM_2}{v} = \\frac{4.2}{v}$، وتخبرنا المعطيات أن ذلك يحدث في اللحظة $t_1 + \\delta t$:
                      $$t_1 + 0.35 = \\frac{4.2}{v} \\quad (2)$$</p>
                      <p><b>2. حساب السرعة $v$:</b> نعوض $(1)$ في $(2)$:
                      $$\\left(\\frac{2.4}{v} + 0.10\\right) + 0.35 = \\frac{4.2}{v} \\implies 0.45 = \\frac{4.2 - 2.4}{v} = \\frac{1.8}{v}$$
                      $$v = \\frac{1.8}{0.45} = 4.0\\text{ m}\\cdot\\text{s}^{-1}$$</p>
                      <p><b>3. حساب $t_1$ و $\\tau$:</b><br/>
                      • اللحظة $t_1 = \\frac{2.4}{4.0} + 0.10 = 0.60 + 0.10 = 0.70\\text{ s}$.<br/>
                      • التأخر الزمني بين $M_2$ و $M_1$: $\\tau = \\frac{M_1 M_2}{v} = \\frac{4.2 - 2.4}{4.0} = \\frac{1.8}{4.0} = 0.45\\text{ s}$.<br/>
                      <span class="text-emerald-400 font-bold">✓ تحقق سريع:</span> تبدأ $M_2$ حركتها عند $\\frac{4.2}{4.0} = 1.05\\text{ s}$، وهو ما يوافق بالفعل $t_1 + 0.35 = 0.70 + 0.35 = 1.05\\text{ s}$!</p>
                    </div>
                  </details>
                </div>
              </div>

`);
