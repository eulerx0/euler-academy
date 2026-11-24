window.EulerAcademy.registerExam('chem-02', `

        <!-- Master Exam Bank: Devoir Surveillé Blanc N°2 Chimie (20/20) -->
        <div id="masterExam" class="scroll-mt-28 glass rounded-3xl p-5 sm:p-8 border border-emerald-500/40 bg-slate-900/90 shadow-2xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div class="flex items-center gap-2 mb-1.5">
                <span class="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  الفرض المحروس التجريبي الشامل N°2 • الكيمياء 2BAC PC
                </span>
                <span class="text-xs text-slate-400 font-mono">Devoir Surveillé Blanc (20/20)</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white">
                امتحان توليفي شامل في التتبع الزمني للتفاعل ($G, \\sigma, P, V_E, A$)، السرعة الحجمية $v(t)$، و $t_{1/2}$
              </h3>
            </div>
            <div class="flex items-center gap-3">
              <span class="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400 font-bold">
                المدة: ساعتان (2h00)
              </span>
              <span class="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                النقطة: 20 / 20
              </span>
            </div>
          </div>

          <p class="text-xs text-slate-300 leading-relaxed">
            يغطي هذا الفرض التجريبي التوليفي جميع الكفايات المرجعية للدرس الثاني في الكيمياء (<b>التتبع الزمني لتحول كيميائي — سرعة التفاعل — 2BAC PC</b>) وفق معيار الامتحان الوطني وفروض دكتور الرياح: المواصلة $G(t)$، المعايرة بعد السقي، ضغط الغاز في المانومتر، الموصلية المتناقصة $\\sigma(t)$، والامتصاصية $A(t)$، مع بطاقة عناصر الإجابة وسلم التنقيط المفصل.
          </p>

          <!-- Exam Paper: 4 Exercises = 20.00 pts -->
          <div class="space-y-5">
            <!-- Exercice 1 (4.50 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-cyan-400">التمرين الأول (4.50 نقط): التتبع بالمواصلة $G(t)$ لحلمأة 2-كلورو-2-ميثيل بروبان</span>
                <span class="font-mono text-xs text-slate-400">4.50 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                لتحضير محلول مائي-أسيتوني حجمه الثابت $V_S = 100\\text{ mL}$ (عند $25^\\circ\\text{C}$)، نصبّ عند اللحظة $t = 0$ كتلة $m = 0.925\\text{ g}$ من 2-كلورو-2-ميثيل بروبان $(\\text{CH}_3)_3\\text{C}-\\text{Cl}(\\ell)$ (كتلته المولية $M = 92.5\\text{ g}\\cdot\\text{mol}^{-1}$) في الخليط المذيب حيث الماء موجود بوفرة كبيرة. نغمر في المحلول خلية جهاز قياس المواصلة ثابتتها $k = \\frac{S}{L} = 1.00\\text{ cm} = 1.00 \\times 10^{-2}\\text{ m}$، ونتتبع المواصلة $G(t)$ للتفاعل الكلي والبطيء:
                $$(\\text{CH}_3)_3\\text{C}-\\text{Cl}(\\ell) + 2\\,\\text{H}_2\\text{O}(\\ell) \\longrightarrow (\\text{CH}_3)_3\\text{C}-\\text{OH}(\\text{aq}) + \\text{H}_3\\text{O}^+(\\text{aq}) + \\text{Cl}^-(\\text{aq})$$
                تُعطى: $\\lambda_{\\text{H}_3\\text{O}^+} = 35.0\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$ و $\\lambda_{\\text{Cl}^-} = 7.5\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$.
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>أوجد كمية المادة البدئية $n_0$ للمركب العضوي، ثم حدّد قيمة التقدم الأقصى $x_{\\max}$. <span class="font-mono text-cyan-400 text-[11px]">(0.75 ن)</span></li>
                <li>أثبت تعبير الموصلية $\\sigma(t)$ بدلالة $x(t)$ ثم المواصلة $G(t) = k\\cdot\\sigma(t)$ بوحدة $\\text{mS}$، واستنتج قيمة المواصلة النهائية $G_f$ وقيمة $G(t_{1/2})$. <span class="font-mono text-cyan-400 text-[11px]">(1.75 ن)</span></li>
                <li>بيّن أن التقدم يكتب على الشكل $x(t) = x_{\\max}\\cdot\\frac{G(t)}{G_f}$، ثم أثبت أن السرعة الحجمية تُعطى بالعلاقة $v(t) = \\frac{x_{\\max}}{V_S \\cdot G_f}\\frac{dG}{dt}$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>عند اللحظة $t = 200\\text{ s}$، يمر المماس لمنحنى $G(t)$ بالنقطتين $(0\\text{ s} \\,;\\, 4.0\\text{ mS})$ و $(400\\text{ s} \\,;\\, 38.0\\text{ mS})$: احسب السرعة الحجمية $v(200\\text{ s})$ بوحدة $\\text{mmol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$. <span class="font-mono text-cyan-400 text-[11px]">(0.75 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 2 (5.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-emerald-400">التمرين الثاني (5.00 نقط): التتبع بالمعايرة المتقطعة بعد السقي ومقارنة منحنيات $x(t)$</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                عند $t = 0$ ودرجة حرارة $\\theta_1 = 25^\\circ\\text{C}$، نمزج في كأس حجماً $V_1 = 100\\text{ mL}$ من محلول يودور البوتاسيوم $(\\text{K}^+ + \\text{I}^-)$ تركيزه $C_1 = 0.40\\text{ mol}\\cdot\\text{L}^{-1}$ مع $V_2 = 100\\text{ mL}$ من محلول بيروكسوديكبريتات البوتاسيوم $(2\\text{K}^+ + \\text{S}_2\\text{O}_8^{2-})$ تركيزه $C_2 = 0.050\\text{ mol}\\cdot\\text{L}^{-1}$ (حجم المزيج الكلي $V_S = 200\\text{ mL}$)، فيحدث التفاعل البطيء والكلي:
                $$\\text{S}_2\\text{O}_8^{2-}(\\text{aq}) + 2\\,\\text{I}^-(\\text{aq}) \\longrightarrow 2\\,\\text{SO}_4^{2-}(\\text{aq}) + \\text{I}_2(\\text{aq})$$
                عند لحظات مختلفة، نسحب عينة حجمها $V_p = 20.0\\text{ mL}$ ونفرغها في $50\\text{ mL}$ من الماء المثلج ($0^\\circ\\text{C}$)، ثم نعاير $\\text{I}_2$ بمحلول ثيوكبريتات الصوديوم ($C' = 5.0 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$).
              </p>

              <div class="my-3 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardExamChem2Avancement">
                <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span>📊 الشكل (1): تغيّر التقدم $x(t)$ عند درجتي الحرارة $\\theta_1 = 25^\\circ\\text{C}$ و $\\theta_2 = 45^\\circ\\text{C}$</span>
                  <span class="text-[11px] font-mono text-emerald-400">x_max = 5.0 mmol</span>
                </div>
                <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                  <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 215" class="w-full h-auto">
                    <defs>
                      <marker id="arrChEx1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                      </marker>
                    </defs>
                    <line x1="72" y1="180" x2="625" y2="180" stroke="#475569" stroke-width="1.6" marker-end="url(#arrChEx1)"/>
                    <line x1="80" y1="190" x2="80" y2="24" stroke="#475569" stroke-width="1.6" marker-end="url(#arrChEx1)"/>
                    <text x="638" y="184" fill="#94a3b8" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="start">t(min)</text>
                    <text x="52" y="28" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">x(mmol)</text>

                    <!-- Asymptote x_max = 5.0 at y = 45 (scale: 27px per mmol -> 5 mmol = 135px; y=180-135=45) -->
                    <line x1="80" y1="45" x2="610" y2="45" stroke="#34d399" stroke-width="1.3" stroke-dasharray="5,4"/>
                    <text x="72" y="49" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">5.0</text>
                    <line x1="80" y1="112" x2="410" y2="112" stroke="#c084fc" stroke-width="1.2" stroke-dasharray="3,3"/>
                    <text x="72" y="116" fill="#d8b4fe" font-size="10.5" font-family="monospace" text-anchor="end">2.5</text>

                    <!-- Curve (2) faster (45 C): t_1/2 = 4.0 min (10 min = 180px -> 1 min = 18px; x=80 + 18*t) -->
                    <path d="M 80 180 C 120 112, 165 62, 235 48 C 330 45, 480 45, 600 45" fill="none" stroke="#fbbf24" stroke-width="2.6"/>
                    <text x="240" y="36" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Courbe (B)</text>

                    <!-- Curve (1) ref (25 C): tangent at t=0 passes (0,0) -> (12.5 min, 5.0 mmol) => x = 80 + 18*12.5 = 305 -->
                    <path d="M 80 180 C 155 130, 240 82, 340 58 C 430 48, 520 46, 600 45" fill="none" stroke="#22d3ee" stroke-width="2.6"/>
                    <line x1="80" y1="180" x2="305" y2="45" stroke="#fb7185" stroke-width="1.6" stroke-dasharray="5,4"/>
                    <circle cx="305" cy="45" r="3.5" fill="#fb7185"/>
                    <text x="360" y="84" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Courbe (A)</text>
                    <text x="305" y="198" fill="#fda4af" font-size="10" font-family="monospace" text-anchor="middle">12.5</text>
                    <line x1="305" y1="45" x2="305" y2="180" stroke="#475569" stroke-width="1" stroke-dasharray="2,3"/>
                  </svg>
                </div>
              </div>

              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>حدّد المتفاعل المحد والتقدم الأقصى $x_{\\max}$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>برّر عملية صبّ العينة في الماء المثلج ($0^\\circ\\text{C}$)، واكتب معادلة تفاعل المعايرة ($\\text{I}_2 + 2\\,\\text{S}_2\\text{O}_3^{2-} \\to 2\\,\\text{I}^- + \\text{S}_4\\text{O}_6^{2-}$) لإثبات العلاقة $x(t) = 0.25 \\cdot V_E(t)$ (حيث $x$ بـ $\\text{mmol}$ و $V_E$ بـ $\\text{mL}$). <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>احسب $x(t)$ عند $V_E = 12.0\\text{ mL}$ ثم استنتج حجم التكافؤ النهائي الأقصى $V_{E,\\max}$ عند انتهاء التفاعل. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>انسب كل منحنى ($A$ و $B$) لدرجة الحرارة المناسبة مع التعليل، ثم احسب السرعة الحجمية البدئية $v_0$ للمنحنى $(A)$ انطلاقاً من المماس المرسوم! <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 3 (5.50 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-purple-400">التمرين الثالث (5.50 نقط): التتبع الزمني بقياس الضغط $P(t)$، تحديد $v_0$، وفخ $P(t_{1/2})$</span>
                <span class="font-mono text-xs text-slate-400">5.50 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                في حوجلة محكمة الإغلاق حجمها الكلي $V_{\\text{flacon}} = 500\\text{ mL}$ ومزودة بمقياس الضغط، نضع عند $t = 0$ ودرجة حرارة ثابتة $T = 300\\text{ K}$ كتلة $m = 0.120\\text{ g}$ من شريط المغنيزيوم $\\text{Mg}(\\text{s})$ في حجم $V_S = 100\\text{ mL}$ من محلول حمض الكلوريدريك $(\\text{H}_3\\text{O}^+ + \\text{Cl}^-)$ تركيزه $C = 0.16\\text{ mol}\\cdot\\text{L}^{-1}$، فيسود قبل الغلق الضغط الجوي البدئي $P_0 = 1000\\text{ hPa}$. يحدث التحول الكلي:
                $$\\text{Mg}(\\text{s}) + 2\\,\\text{H}_3\\text{O}^+(\\text{aq}) \\longrightarrow \\text{Mg}^{2+}(\\text{aq}) + \\text{H}_2(\\text{g}) + 2\\,\\text{H}_2\\text{O}(\\ell)$$
                تُعطى: $M(\\text{Mg}) = 24.0\\text{ g}\\cdot\\text{mol}^{-1}$، $R = 8.31\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$، $1\\text{ hPa} = 10^2\\text{ Pa}$.
              </p>

              <div class="my-3 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardExamChem2Pressure">
                <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span>📈 الشكل (2): منحنى الضغط $P(t)$ داخل الحوجلة المغلقة ($P_0 = 1000\\text{ hPa}$)</span>
                  <span class="text-[11px] font-mono text-purple-300">P_max = 1312 hPa  •  Tangente en t = 0</span>
                </div>
                <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                  <svg direction="ltr" style="direction: ltr;" viewBox="0 0 600 185" class="w-full h-auto">
                    <defs>
                      <marker id="arrChEx2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                      </marker>
                    </defs>
                    <line x1="76" y1="154" x2="555" y2="154" stroke="#475569" stroke-width="1.6" marker-end="url(#arrChEx2)"/>
                    <line x1="84" y1="164" x2="84" y2="20" stroke="#475569" stroke-width="1.6" marker-end="url(#arrChEx2)"/>
                    <text x="562" y="158" fill="#94a3b8" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="start">t(min)</text>
                    <text x="52" y="24" fill="#d8b4fe" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">P(hPa)</text>

                    <!-- P0 = 1000 hPa at y = 148, P_max = 1312 hPa at y = 40 (span = 108px) -->
                    <text x="76" y="152" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="end">1000</text>
                    <line x1="84" y1="40" x2="540" y2="40" stroke="#34d399" stroke-width="1.3" stroke-dasharray="5,4"/>
                    <text x="76" y="44" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="end">1312</text>

                    <!-- Midpoint P(t_1/2) = 1156 at y = 94, hit at t_1/2 = 4.0 min -> x=84 + 4*28 = 196 -->
                    <line x1="84" y1="94" x2="196" y2="94" stroke="#22d3ee" stroke-width="1.3" stroke-dasharray="3,3"/>
                    <line x1="196" y1="94" x2="196" y2="154" stroke="#22d3ee" stroke-width="1.3" stroke-dasharray="3,3"/>
                    <circle cx="196" cy="94" r="4" fill="#22d3ee"/>
                    <text x="76" y="98" fill="#67e8f9" font-size="10" font-family="monospace" text-anchor="end">1156</text>
                    <text x="196" y="172" fill="#67e8f9" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">4.0</text>

                    <!-- Tangent at t=0 hitting 1312 hPa at t=5.0 min -> x = 84 + 5*28 = 224 -->
                    <line x1="84" y1="148" x2="224" y2="40" stroke="#fb7185" stroke-width="1.6" stroke-dasharray="5,4"/>
                    <line x1="224" y1="40" x2="224" y2="154" stroke="#475569" stroke-width="1" stroke-dasharray="2,3"/>
                    <text x="234" y="172" fill="#fda4af" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">5.0</text>

                    <!-- Curve starting from (84, 148) passing (196, 94) to asymptote (535, 40) -->
                    <path d="M 84 148 C 130 118, 165 102, 196 94 C 255 72, 340 46, 530 40" fill="none" stroke="#c084fc" stroke-width="2.8"/>
                  </svg>
                </div>
              </div>

              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>احسب $n_0(\\text{Mg})$ و $n_0(\\text{H}_3\\text{O}^+)$ وحدّد المتفاعل المحد وقيمة $x_{\\max}$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>أثبت تعبير التقدم $x(t) = \\frac{(P(t) - P_0)\\,V_{\\text{gaz}}}{R\\,T}$ موضحاً قيمة $V_{\\text{gaz}}$ بـ $\\text{m}^3$، ثم تحقق حسابياً أن الضغط الأقصى النهائي يساوي $P_{\\max} \\approx 1312\\text{ hPa}$. <span class="font-mono text-cyan-400 text-[11px]">(1.75 ن)</span></li>
                <li>أوجد قيمة الضغط $P(t_{1/2})$ عند زمن نصف التفاعل، واستنتج مبيانياً قيمة $t_{1/2}$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>أثبت أن $v(t) = \\frac{V_{\\text{gaz}}}{V_S \\cdot R T}\\frac{dP}{dt}$، ثم احسب السرعة الحجمية البدئية $v_0$ بوحدة $\\text{mmol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1}$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 4 (5.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-amber-400">المسألة التوليفية الرابعة (5.00 نقط): الموصلية المتناقصة $\\sigma(t)$ والقياس الطيفي الضوئي $A(t)$</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                <b>الجزء الأول (2.75 نقط — التصبن المتناقص الموصلية):</b> نمزج عند $t = 0$ كمية $n_0 = 2.0\\text{ mmol}$ من إيثانوات الإيثيل مع $n_0 = 2.0\\text{ mmol}$ من هيدروكسيد الصوديوم $(\\text{Na}^+ + \\text{HO}^-)$ في حجم كلي $V_S = 100\\text{ mL}$ (أي $C_0 = 20\\text{ mmol}\\cdot\\text{L}^{-1}$) وفق التفاعل الكلي:
                $$\\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{HO}^- \\longrightarrow \\text{CH}_3\\text{COO}^- + \\text{C}_2\\text{H}_5\\text{OH}$$
                تُعطى (بـ $\\text{mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$): $\\lambda_{\\text{Na}^+} = 5.0$، $\\lambda_{\\text{HO}^-} = 20.0$، $\\lambda_{\\text{CH}_3\\text{COO}^-} = 4.0$.
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>احسب $\\sigma_0$ و $\\sigma_f$، وأثبت أن $\\sigma(t) = 0.500 - 160\\,x(t)$ (حيث $\\sigma$ بـ $\\text{S}\\cdot\\text{m}^{-1}$ و $x$ بـ $\\text{mol}$). <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>استنتج قيمة الموصلية $\\sigma(t_{1/2})$ عند زمن نصف التفاعل، ثم أثبت أن $v(t) = -\\frac{1}{160\\,V_S}\\frac{d\\sigma}{dt}$ واحسب $v(10\\text{ min})$ علماً أن مماس $\\sigma(t)$ عند $10\\text{ min}$ يمر بـ $(0\\text{ min} \\,;\\, 0.420\\text{ S}\\cdot\\text{m}^{-1})$ و $(20\\text{ min} \\,;\\, 0.180\\text{ S}\\cdot\\text{m}^{-1})$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
              </ol>

              <p class="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800/60">
                <b>الجزء الثاني (2.25 نقط — القياس الطيفي الضوئي $A(t)$):</b> نتتبع بواسطة مطياف الضوء، عند طول موجة $\\lambda = 450\\text{ nm}$ لا يمتص عنده سوى ثنائي اليود $\\text{I}_2$، تفاعل أكسدة $\\text{I}^-$ (المضاف بوفرة) بالماء الأوكسيجيني ($n_0(\\text{H}_2\\text{O}_2) = 1.50\\text{ mmol}$) في محلول حمضي حجمه $V_S = 100\\text{ mL}$:
                $$\\text{H}_2\\text{O}_2(\\text{aq}) + 2\\,\\text{I}^-(\\text{aq}) + 2\\,\\text{H}_3\\text{O}^+(\\text{aq}) \\longrightarrow \\text{I}_2(\\text{aq}) + 4\\,\\text{H}_2\\text{O}(\\ell)$$
                يُعطي قانون بير-لامبير علاقة الامتصاصية $A(t) = k \\cdot [\\text{I}_2]_t$ وتبلغ الامتصاصية النهائية القيمة $A_f = 1.50$.
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed" start="3">
                <li>احسب الثابتة $k$ للخلية (بوحدة $\\text{L}\\cdot\\text{mol}^{-1}$)، وأثبت أن $v(t) = \\frac{1}{k}\\frac{dA}{dt}$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>ما قيمة الامتصاصية $A(t_{1/2})$ عند زمن نصف التفاعل، واحسب السرعة الحجمية عند اللحظة $t_1$ التي يكون فيها ميل المماس لمنحنى $A(t)$ مساوياً لـ $\\frac{dA}{dt} = 0.040\\text{ min}^{-1}$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
              </ol>
            </div>
          </div>

          <!-- Collapsible Master Solution & Marking Scheme -->
          <div class="border border-emerald-500/30 rounded-2xl overflow-hidden bg-slate-950/90 mt-6">
            <button type="button" aria-expanded="false" onclick="window.EulerAcademy.toggleCollapsible('chem2-master-solution', this);" class="w-full text-right p-4 sm:p-5 bg-gradient-to-r from-emerald-500/20 via-slate-900 to-cyan-500/20 hover:from-emerald-500/30 text-xs sm:text-sm font-bold text-emerald-300 flex items-center justify-between transition">
              <span class="flex items-center gap-2">
                <span>🏆</span>
                <span>إظهار / إخفاء عناصر الإجابة النموذجية وسلم التنقيط الرسمي المفصل (20 / 20 نقطة)</span>
              </span>
              <span class="font-mono text-xs px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center gap-1.5"><span>Corrigé Officiel</span><span class="sol-chevron inline-block transition-transform">▼</span></span>
            </button>

            <div id="chem2-master-solution" class="hidden p-4 sm:p-6 border-t border-slate-800 space-y-6 text-xs text-slate-300 leading-relaxed">
              <!-- Solution Ex 1 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-cyan-400">حل التمرين الأول (4.50 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. كمية المادة البدئية و $x_{\\max}$ (0.75 ن):</strong><br/>
                  $n_0 = \\frac{m}{M} = \\frac{0.925}{92.5} = 1.00 \\times 10^{-2}\\text{ mol} = 10.0\\text{ mmol}$. وبما أن الماء مذيب بوفرة كبيرة فالتحول الكلي يعطي <b>$x_{\\max} = 10.0\\text{ mmol}$</b>. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                  <p><strong class="text-white">2. تعبير $\\sigma(t)$ و $G(t)$ و $G_f$ و $G(t_{1/2})$ (1.75 ن):</strong><br/>
                  • عند $t$: $[\\text{H}_3\\text{O}^+] = [\\text{Cl}^-] = \\frac{x(t)}{V_S}$ (حيث $V_S = 100\\text{ mL} = 1.00 \\times 10^{-4}\\text{ m}^3$):
                  $$\\sigma(t) = (\\lambda_{\\text{H}_3\\text{O}^+} + \\lambda_{\\text{Cl}^-})\\frac{x(t)}{V_S} = \\frac{(35.0 + 7.5)\\times 10^{-3}}{1.00 \\times 10^{-4}}\\,x(t) = 425\\,x(t)\\;\\text{S}\\cdot\\text{m}^{-1}$$
                  • المواصلة: $G(t) = k\\,\\sigma(t) = 1.00 \\times 10^{-2} \\times 425\\,x(t) = 4.25\\,x(t)\\;\\text{S} = 4250\\,x(t)\\;\\text{mS}$ ($x$ بـ $\\text{mol}$).<br/>
                  • $G_f = 4250 \\times 1.00 \\times 10^{-2} = 42.5\\text{ mS}$، و $G(t_{1/2}) = \\frac{G_f}{2} = 21.25\\text{ mS}$. <span class="text-emerald-400 font-mono">(1.75 ن)</span></p>
                  <p><strong class="text-white">3. علاقات $x(t)$ و $v(t)$ بدلالة $G(t)$ (1.25 ن):</strong><br/>
                  بقسمة $G(t) = 4250\\,x(t)$ على $G_f = 4250\\,x_{\\max}$ نجد $x(t) = x_{\\max}\\frac{G(t)}{G_f}$. وبالاشتقاق ثم التعويض في $v(t) = \\frac{1}{V_S}\\frac{dx}{dt}$:
                  $$v(t) = \\frac{x_{\\max}}{V_S \\cdot G_f}\\frac{dG}{dt}$$
                  <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">4. حساب السرعة الحجمية $v(200\\text{ s})$ (0.75 ن):</strong><br/>
                  $$\\frac{dG}{dt} = \\frac{38.0 - 4.0}{400 - 0} = \\frac{34.0}{400} = 0.085\\text{ mS}\\cdot\\text{s}^{-1}$$
                  $$v(200\\text{ s}) = \\frac{10.0\\text{ mmol}}{0.100\\text{ L} \\times 42.5\\text{ mS}} \\times 0.085\\text{ mS}\\cdot\\text{s}^{-1} = 0.200\\text{ mmol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$$
                  <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 2 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-emerald-400">حل التمرين الثاني (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. المتفاعل المحد و $x_{\\max}$ (1.00 ن):</strong><br/>
                  $n_0(\\text{S}_2\\text{O}_8^{2-}) = 0.050 \\times 0.100 = 5.0\\text{ mmol}$ و $\\frac{n_0(\\text{I}^-)}{2} = \\frac{0.40 \\times 0.100}{2} = 20.0\\text{ mmol}$.<br/>
                  إذن <b>$\\text{S}_2\\text{O}_8^{2-}$ هي المتفاعل المحد</b> و $x_{\\max} = 5.0\\text{ mmol}$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">2. السقي وعلاقة المعايرة $x(t) = 0.25\\,V_E$ (1.50 ن):</strong><br/>
                  • صب العينة في الماء المثلج هو عملية <b>السقي الكيميائي</b> لتوقيف التفاعل لحظة السحب (خفض $T$ والتخفيف) دون تغيير كمية $\\text{I}_2$.<br/>
                  • معادلة المعايرة: $\\text{I}_2 + 2\\,\\text{S}_2\\text{O}_3^{2-} \\longrightarrow 2\\,\\text{I}^- + \\text{S}_4\\text{O}_6^{2-}$. عند التكافؤ: $n_p(\\text{I}_2) = \\frac{C' V_E}{2}$.<br/>
                  • في المزيج الكلي ($V_S / V_p = 200 / 20.0 = 10$): $x(t) = n_{\\text{tot}}(\\text{I}_2) = 10 \\times \\frac{5.0 \\times 10^{-2} \\cdot V_E(\\text{mL})}{2} = 0.25\\,V_E\\;(\\text{mmol})$. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><strong class="text-white">3. حساب $x$ عند $V_E = 12.0\\text{ mL}$ و $V_{E,\\max}$ (1.00 ن):</strong><br/>
                  • $x = 0.25 \\times 12.0 = 3.0\\text{ mmol}$. عند نهاية التفاعل: $5.0 = 0.25\\,V_{E,\\max} \\implies V_{E,\\max} = 20.0\\text{ mL}$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">4. نسبة المنحنيين وحساب $v_0$ للمنحنى $(A)$ (1.50 ن):</strong><br/>
                  • يبلغ المنحنى $(B)$ التقدم نفسه أسرع (أصغر $t_{1/2}$)، ولأن درجة الحرارة عامل حركي مسرّع فإن $(B)$ يوافق $45^\\circ\\text{C}$ و $(A)$ يوافق $25^\\circ\\text{C}$.<br/>
                  • يمر المماس عند $t=0$ للمنحنى $(A)$ بـ $(0,0)$ و $(12.5\\text{ min}, 5.0\\text{ mmol})$:
                  $$v_0(A) = \\frac{1}{V_S}\\left(\\frac{dx}{dt}\\right)_0 = \\frac{1}{0.200} \\times \\frac{5.0 - 0}{12.5 - 0} = 5.0 \\times 0.40 = 2.0\\text{ mmol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1}$$
                  <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 3 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-purple-400">حل التمرين الثالث (5.50 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. المتفاعل المحد و $x_{\\max}$ (1.25 ن):</strong><br/>
                  $n_0(\\text{Mg}) = \\frac{0.120}{24.0} = 5.0\\text{ mmol}$، و $n_0(\\text{H}_3\\text{O}^+) = 0.16 \\times 0.100 = 16.0\\text{ mmol} \\implies \\frac{n_0(\\text{H}_3\\text{O}^+)}{2} = 8.0\\text{ mmol} &gt; 5.0\\text{ mmol}$.<br/>
                  إذن <b>$\\text{Mg}$ هو المتفاعل المحد</b> و $x_{\\max} = 5.0\\text{ mmol}$. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">2. تعبير $x(t)$ وحساب $P_{\\max}$ (1.75 ن):</strong><br/>
                  • حجم الغاز فوق السائل: $V_{\\text{gaz}} = V_{\\text{flacon}} - V_S = 500 - 100 = 400\\text{ mL} = 4.00 \\times 10^{-4}\\text{ m}^3$.<br/>
                  • ضغط $\\text{H}_2$ المتكون هو $P(t) - P_0$: $(P(t)-P_0)V_{\\text{gaz}} = x(t)\\,R\\,T \\implies x(t) = \\frac{(P(t)-P_0)V_{\\text{gaz}}}{R\\,T}$.<br/>
                  • $\\Delta P_{\\max} = \\frac{5.0 \\times 10^{-3} \\times 8.31 \\times 300}{4.00 \\times 10^{-4}} = 31162.5\\text{ Pa} \\approx 312\\text{ hPa} \\implies P_{\\max} = 1000 + 312 = 1312\\text{ hPa}$. <span class="text-emerald-400 font-mono">(1.75 ن)</span></p>
                  <p><strong class="text-white">3. تحديد $P(t_{1/2})$ و $t_{1/2}$ (1.00 ن):</strong><br/>
                  $P(t_{1/2}) = \\frac{P_0 + P_{\\max}}{2} = \\frac{1000 + 1312}{2} = 1156\\text{ hPa}$؛ وبالإسقاط المبياني نجد <b>$t_{1/2} = 4.0\\text{ min}$</b>. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">4. برهنة $v(t)$ وحساب $v_0$ (1.50 ن):</strong><br/>
                  باشتقاق $x(t)$: $v(t) = \\frac{1}{V_S}\\frac{dx}{dt} = \\frac{V_{\\text{gaz}}}{V_S \\cdot R T}\\frac{dP}{dt}$.<br/>
                  يمر المماس عند $t=0$ بـ $(0, 1000\\text{ hPa})$ و $(5.0\\text{ min}, 1312\\text{ hPa})$، إذن $\\left(\\frac{dP}{dt}\\right)_0 = \\frac{312 \\times 10^2}{5.0} = 6240\\text{ Pa}\\cdot\\text{min}^{-1}$، ومنه:
                  $$v_0 = \\frac{4.00 \\times 10^{-4}}{0.100 \\times 8.31 \\times 300} \\times 6240 \\approx 1.00 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1} = 10.0\\text{ mmol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1}$$
                  <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 4 -->
              <div class="space-y-2">
                <h5 class="text-sm font-extrabold text-amber-400">حل المسألة التوليفية الرابعة (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-cyan-300">الجزء الأول — الموصلية المتناقصة (2.75 ن):</strong><br/>
                  <b>1.</b> $C_0 = 20\\text{ mol}\\cdot\\text{m}^{-3}$ و $V_S = 1.00 \\times 10^{-4}\\text{ m}^3$:<br/>
                  • $\\sigma_0 = (\\lambda_{\\text{Na}^+} + \\lambda_{\\text{HO}^-})\\,C_0 = (5.0 + 20.0)\\times 10^{-3} \\times 20 = 0.500\\text{ S}\\cdot\\text{m}^{-1}$.<br/>
                  • $\\sigma_f = (\\lambda_{\\text{Na}^+} + \\lambda_{\\text{CH}_3\\text{COO}^-})\\,C_0 = (5.0 + 4.0)\\times 10^{-3} \\times 20 = 0.180\\text{ S}\\cdot\\text{m}^{-1}$.<br/>
                  • $\\sigma(t) = \\sigma_0 + \\frac{(\\lambda_{\\text{CH}_3\\text{COO}^-} - \\lambda_{\\text{HO}^-})}{V_S}\\,x(t) = 0.500 - \\frac{16\\times 10^{-3}}{10^{-4}}\\,x(t) = 0.500 - 160\\,x(t)$. <span class="text-emerald-400 font-mono">(1.25 ن)</span><br/>
                  <b>2.</b> $\\sigma(t_{1/2}) = \\frac{0.500 + 0.180}{2} = 0.340\\text{ S}\\cdot\\text{m}^{-1}$.<br/>
                  • بالاشتقاق: $\\frac{d\\sigma}{dt} = -160\\frac{dx}{dt} \\implies v(t) = \\frac{1}{V_S}\\frac{dx}{dt} = -\\frac{1}{160\\,V_S}\\frac{d\\sigma}{dt}$.<br/>
                  $$v(10\\text{ min}) = -\\frac{1}{160 \\times 0.100}\\left(\\frac{0.180 - 0.420}{20 - 0}\\right) = -\\frac{-0.012}{16.0} = 7.5 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1} = 0.75\\text{ mmol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1}$$
                  <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>

                  <p class="pt-2"><strong class="text-amber-300">الجزء الثاني — القياس الطيفي الضوئي $A(t)$ (2.25 ن):</strong><br/>
                  <b>3.</b> لأن $\\text{I}^-$ و $\\text{H}_3\\text{O}^+$ بوفرة، فـ $\\text{H}_2\\text{O}_2$ محدّ و $x_{\\max} = 1.50\\text{ mmol} = 1.50 \\times 10^{-3}\\text{ mol}$. عند النهاية $[\\text{I}_2]_f = \\frac{1.50 \\times 10^{-3}}{0.100} = 1.50 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$، ومنه:
                  $$k = \\frac{A_f}{[\\text{I}_2]_f} = \\frac{1.50}{1.50 \\times 10^{-2}} = 100\\text{ L}\\cdot\\text{mol}^{-1}$$
                  • لدينا $[\\text{I}_2]_t = \\frac{x(t)}{V_S} \\implies A(t) = \\frac{k}{V_S}\\,x(t) \\implies v(t) = \\frac{1}{V_S}\\frac{dx}{dt} = \\frac{1}{k}\\frac{dA}{dt}$. <span class="text-emerald-400 font-mono">(1.25 ن)</span><br/>
                  <b>4.</b> $A(t_{1/2}) = \\frac{A_f}{2} = 0.75$. وعند $\\frac{dA}{dt} = 0.040\\text{ min}^{-1}$:
                  $$v(t_1) = \\frac{0.040}{100} = 4.0 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1} = 0.40\\text{ mmol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1}$$
                  <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
`);
