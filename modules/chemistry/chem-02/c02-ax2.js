window.EulerAcademy.registerAxis('chem-02', 'c02-ax2', `

              <div class="space-y-6">
                <!-- 1. Volumetric Reaction Rate & Graphical Calculation -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. السرعة الحجمية للتفاعل وتفسير تناقصها الحركي</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">⚡ أ) التعريف الرسمي والحساب المبياني من $x(t)$:</b>
                      تُعرّف <b>السرعة الحجمية للتفاعل (Vitesse volumique)</b> في لحظة $t$ داخل محلول حجمه الثابت $V_S$ بالعلاقة:
                      $$v(t) = \\frac{1}{V_S} \\cdot \\frac{dx}{dt}$$
                      • تمثل $\\frac{dx}{dt}$ المشتقة الزمنية للتقدم، وتُحدَّد مبيانياً بحساب <b>المعامل الموجه للمماس</b> لمنحنى $x(t)$ عند اللحظة $t$ باختيار نقطتين واضحتين من المماس $A(t_1, x_1)$ و $B(t_2, x_2)$:<br/>
                      $$v(t) = \\frac{1}{V_S} \\cdot \\frac{x_2 - x_1}{t_2 - t_1}$$
                      <span class="text-slate-400">الوحدة: $\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1}$ أو $\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$.</span>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">🔄 ب) تعبير $v(t)$ بدلالة منحنيات أخرى ($[X], P, \\sigma$):</b>
                      إذا لم يُرسَم $x(t)$ مباشرة في الامتحان، <b>نشتق أولاً علاقة الربط قبل التعويض في $v(t)$</b>:<br/>
                      • تركيز ناتج $[P] = \\frac{a\\,x}{V_S} \\implies v(t) = \\frac{1}{a}\\frac{d[P]}{dt}$.<br/>
                      • تركيز متفاعل $[R] = [R]_0 - \\frac{b\\,x}{V_S} \\implies v(t) = -\\frac{1}{b}\\frac{d[R]}{dt}$ ($v &gt; 0$ لأن الميل سالب!).<br/>
                      • ضغط غاز $x(t) = \\frac{V_{\\text{gaz}}}{R T}(P - P_0) \\implies v(t) = \\frac{V_{\\text{gaz}}}{V_S R T}\\frac{dP}{dt}$.
                    </div>
                  </div>

                  <div class="bg-amber-950/25 border border-amber-500/30 rounded-xl p-3.5 text-xs text-amber-100 leading-relaxed">
                    <b class="text-amber-300">🔬 التعليل المجهري الرسمي لتناقص السرعة الحجمية (0.50 ن في الوطني):</b> تكون السرعة الحجمية <b>قصوية عند $t = 0$</b> ثم <b>تتناقص تدريجياً مع الزمن</b> لتنعدم في الحالة النهائية؛ ويرجع هذا التناقص إلى <b>استهلاك المتفاعلات وانخفاض تراكيزها المولية</b> في الوسط التفاعلي، مما يُقلص عدد <b>التصادمات الفعالة</b> في وحدة الزمن.
                  </div>
                </div>

                <!-- 2. Half-reaction Time t_1/2 & SVG Chart -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">2. زمن نصف التفاعل $t_{1/2}$ والقراءة المبيانية الصحيحة</span>
                    <span class="text-xs text-amber-400 font-mono">Temps de demi-réaction t₁/₂</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-purple-500/30">
                      <b class="text-purple-400 text-sm block mb-1.5">⏱️ أ) التعريف الرسمي وأهميته الحركية:</b>
                      • <b>زمن نصف التفاعل $t_{1/2}$:</b> المدة الزمنية اللازمة لكي يبلغ تقدم التفاعل <b>نصف قيمته النهائية</b>:
                      $$x(t_{1/2}) = \\frac{x_f}{2}$$
                      <span class="text-slate-300">(وفي تحول كلي: $x(t_{1/2}) = \\frac{x_{\\max}}{2}$)</span><br/>
                      • <b>الدلالة العملية:</b> يتيح $t_{1/2}$ تقدير المدة اللازمة لانتهاء التفاعل عملياً ($t_f \\approx 5\\,t_{1/2}$ إلى $10\\,t_{1/2}$) ومقارنة سرعات التحولات (التجربة الأسرع تملك <b>أصغر $t_{1/2}$</b>).
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/30">
                      <b class="text-rose-400 text-sm block mb-1.5">🎯 ب) قاعدة المنحنيات التي لا تنطلق من الصفر ($Y_0 \\neq 0$):</b>
                      لأي مقدار فيزيائي $Y(t)$ مرتبط خطياً بالتقدم $x(t)$ (مثل $P(t)$، $\\sigma(t)$، $G(t)$، أو $[R](t)$ غير المحد):<br/>
                      $$Y(t_{1/2}) = \\frac{Y_0 + Y_f}{2}$$
                      <span class="text-rose-300 font-semibold block mt-1.5">مثال تحذيري: إذا تطور الضغط من $P_0 = 1000\\text{ hPa}$ إلى $P_f = 1600\\text{ hPa}$ فإن $P(t_{1/2}) = \\frac{1000 + 1600}{2} = 1300\\text{ hPa}$ (وليس $800\\text{ hPa}$)!</span>
                    </div>
                  </div>

                  <!-- SVG Diagram: x(t) with Tangent at t=0, Tangent at t1, and t_1/2 -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardKineticTangents">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📈 استغلال منحنى التقدم $x(t)$: المماسان عند $t=0$ و $t_1$ وتحديد $t_{1/2}$</span>
                      <span class="text-[11px] font-mono text-cyan-400">v(t) = (1/V_S) * (dx/dt)  |  x(t_1/2) = x_max / 2</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
                        <div class="flex flex-wrap items-center gap-4">
                          <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-3 h-0.5 bg-cyan-400"></span> منحنى التقدم $x(t)$</span>
                          <span class="flex items-center gap-1.5 text-rose-300"><span class="inline-block w-3 border-t-2 border-dashed border-rose-400"></span> المماس عند $t=0$ (ميل أعظمي)</span>
                          <span class="flex items-center gap-1.5 text-amber-300"><span class="inline-block w-3 h-0.5 bg-amber-400"></span> المماس عند $t_1$ (ميل أصغر)</span>
                        </div>
                        <span class="text-emerald-300 font-mono">x_f = x_max</span>
                      </div>
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 235" class="w-full h-auto">
                        <defs>
                          <marker id="arrK2Ax" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                        </defs>
                        <!-- Axes: Origin (76, 195). t=max around 615, x_max at y=55 (amplitude=140px) -->
                        <line x1="66" y1="195" x2="630" y2="195" stroke="#475569" stroke-width="1.6" marker-end="url(#arrK2Ax)"/>
                        <line x1="76" y1="206" x2="76" y2="24" stroke="#475569" stroke-width="1.6" marker-end="url(#arrK2Ax)"/>
                        <text x="640" y="199" fill="#94a3b8" font-size="11" font-weight="bold" font-family="monospace" text-anchor="start">t</text>
                        <text x="52" y="28" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">x(t)</text>

                        <!-- Asymptote x_max (y=55) -->
                        <line x1="76" y1="55" x2="610" y2="55" stroke="#34d399" stroke-width="1.4" stroke-dasharray="5,4"/>
                        <text x="68" y="59" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">x_max</text>

                        <!-- Saturation curve x(t) = 140*(1 - exp(-(px-76)/135)) -->
                        <path d="M 76 195 C 125 140, 175 95, 250 74 C 340 58, 460 56, 605 55" fill="none" stroke="#22d3ee" stroke-width="3"/>

                        <!-- Tangent at t=0 passing (76,195) to asymptote (206,55) -->
                        <line x1="76" y1="195" x2="220" y2="40" stroke="#fb7185" stroke-width="1.8" stroke-dasharray="5,4"/>
                        <text x="230" y="38" fill="#fda4af" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="start">Tangente (t=0)</text>

                        <!-- Half-reaction x_max / 2 at y = 125, hits curve around x = 166 -->
                        <line x1="76" y1="125" x2="166" y2="125" stroke="#c084fc" stroke-width="1.5" stroke-dasharray="4,3"/>
                        <line x1="166" y1="125" x2="166" y2="195" stroke="#c084fc" stroke-width="1.5" stroke-dasharray="4,3"/>
                        <circle cx="166" cy="125" r="4.5" fill="#c084fc"/>
                        <text x="68" y="129" fill="#d8b4fe" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">x_max/2</text>
                        <text x="166" y="214" fill="#d8b4fe" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">t_1/2</text>

                        <!-- Tangent at t1 = 290 (y on curve ~ 69) with clear delta triangle -->
                        <line x1="185" y1="90" x2="435" y2="42" stroke="#fbbf24" stroke-width="2"/>
                        <circle cx="290" cy="70" r="4.5" fill="#fbbf24"/>
                        <line x1="290" y1="70" x2="290" y2="195" stroke="#475569" stroke-width="1" stroke-dasharray="3,3"/>
                        <text x="290" y="214" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">t_1</text>

                        <!-- Slope triangle on tangent at t1: (310, 66) to (410, 47) -->
                        <line x1="310" y1="66" x2="410" y2="66" stroke="#fde68a" stroke-width="1.2" stroke-dasharray="3,2"/>
                        <line x1="410" y1="66" x2="410" y2="47" stroke="#fde68a" stroke-width="1.2" stroke-dasharray="3,2"/>
                        <text x="360" y="80" fill="#fde68a" font-size="9.5" font-family="monospace" text-anchor="middle">dt</text>
                        <text x="424" y="61" fill="#fde68a" font-size="9.5" font-family="monospace" text-anchor="start">dx</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 3. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">دقة المماس والتأويل البياني</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «حساب $\\frac{x(t_1)}{t_1}$ بدل ميل المماس الحقيقي»:</b>
                      القيمة $\\frac{x(t_1)}{t_1}$ تساوي <b>السرعة المتوسطة</b> على $[0, t_1]$ وليس السرعة اللحظية عند $t_1$! يجب دائماً قراءة نقطتين $(t_A, x_A)$ و $(t_B, x_B)$ من <b>خط المماس المرسوم</b> وحساب $\\frac{1}{V_S}\\frac{x_B - x_A}{t_B - t_A}$.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «تحديد $t_{1/2}$ باعتبار $Y(t_{1/2}) = \\frac{Y_f}{2}$ رغم أن $Y_0 \\neq 0$»:</b>
                      إذا كان المنحنى لمتفاعل $[R](t)$ أو للضغط $P(t)$ أو للموصلية $\\sigma(t)$، تذكّر قاعدة المنتصف دائماً: $Y(t_{1/2}) = \\frac{Y_0 + Y_f}{2}$ وليس $\\frac{Y_f}{2}$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «نسيان المعامل الستوكيومتري أو إشارة الناقص في المتفاعل»:</b>
                      عند حساب $v(t)$ انطلاقاً من تركيز متفاعل $2\\,\\text{MnO}_4^-$ أو $2\\,\\text{I}^-$، لا تكتب $\\frac{d[\\text{I}^-]}{dt}$! الصحيح هو: $v(t) = -\\frac{1}{2}\\frac{d[\\text{I}^-]}{dt}$ لأن $[\\text{I}^-] = [\\text{I}^-]_0 - \\frac{2x}{V_S}$.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «الربط الخاطئ بين $V_S$ و $V_{\\text{gaz}}$ في $v(t)$»:</b>
                      عند المراقبة بقياس الضغط، المقام في $v(t)$ يحتوي على حجم <b>المحلول $V_S$</b> ($v = \\frac{1}{V_S}\\frac{dx}{dt}$) بينما البسط في علاقة $x(t)$ يحتوي على حجم <b>الغاز $V_{\\text{gaz}}$</b>: ومنه $v(t) = \\frac{V_{\\text{gaz}}}{V_S \\cdot R T}\\frac{dP}{dt}$! لا تختزل الحجمين خطأً!
                    </div>
                  </div>
                </div>

                <!-- 4. Worked National-Grade Applications -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">3. تطبيقان نموذجيان محرران بسلم التنقيط (معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400 font-mono">صرامة كاملة 20/20</span>
                  </div>

                  <!-- Application 1 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800 mb-5">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: استغلال منحنى $x(t)$ — السرعة البدئية $v_0$، $v(t_1)$، وزمن نصف التفاعل $t_{1/2}$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نمزج في كأس حجماً كلياً $V_S = 200\\text{ mL}$ لمتفاعلين في تفاعل تام، ثم نتتبع تطور التقدم $x(t)$ بـ $\\text{mmol}$ بدلالة الزمن $t$ بالـ $\\text{min}$ فنحصل على المعطيات المبيانية التالية:<br/>
                      • يقارب المنحنى $x(t)$ خطاً مقارباً أفقياً عند القيمة النهائية $x_{\\max} = 4.0\\text{ mmol}$، ويبلغ القيمة $2.0\\text{ mmol}$ عند اللحظة $t = 2.8\\text{ min}$.<br/>
                      • يمر المماس للمنحنى عند اللحظة $t = 0$ بالنقطتين $(0\\text{ min} \\,;\\, 0\\text{ mmol})$ و $(4.0\\text{ min} \\,;\\, 4.0\\text{ mmol})$.<br/>
                      • يمر المماس للمنحنى عند اللحظة $t_1 = 5.0\\text{ min}$ بالنقطتين $(1.0\\text{ min} \\,;\\, 1.2\\text{ mmol})$ و $(9.0\\text{ min} \\,;\\, 4.0\\text{ mmol})$.<br/>
                      <b>1.</b> احسب السرعة الحجمية $v_0$ عند $t = 0$ والسرعة الحجمية $v(t_1)$ عند $t_1 = 5.0\\text{ min}$ بوحدة $\\text{mmol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1}$ ثم بـ $\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$. <span class="text-emerald-400 font-mono">(1.25 ن)</span><br/>
                      <b>2.</b> فسّر مجهرياً تغيّر السرعة بين اللحظتين $0$ و $t_1$. <span class="text-emerald-400 font-mono">(0.35 ن)</span><br/>
                      <b>3.</b> حدّد قيمة زمن نصف التفاعل $t_{1/2}$ مع التعليل. <span class="text-emerald-400 font-mono">(0.40 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. حساب $v_0$ و $v(t_1)$ ($V_S = 0.200\\text{ L}$):</b><br/>
                      • عند $t = 0$:
                      $$v_0 = \\frac{1}{V_S} \\left(\\frac{dx}{dt}\\right)_0 = \\frac{1}{0.200} \\times \\frac{4.0 - 0}{4.0 - 0} = 5.0\\text{ mmol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1}$$
                      بالتحويل ($1\\text{ mmol} = 10^{-3}\\text{ mol}$ و $1\\text{ min} = 60\\text{ s}$):
                      $$v_0 = \\frac{5.0 \\times 10^{-3}}{60} \\approx 8.33 \\times 10^{-5}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$$
                      • عند $t_1 = 5.0\\text{ min}$:
                      $$v(t_1) = \\frac{1}{0.200} \\times \\frac{4.0 - 1.2}{9.0 - 1.0} = 5.0 \\times \\frac{2.8}{8.0} = 1.75\\text{ mmol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1} \\approx 2.92 \\times 10^{-5}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}$$
                      <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                      <p><b>2. التفسير المجهري للتناقص:</b><br/>
                      نلاحظ أن $v(t_1) &lt; v_0$؛ تتناقص السرعة الحجمية بمرور الزمن لأن تراكيز المتفاعلات تتناقص جراء استهلاكها، مما يؤدي إلى انخفاض عدد التصادمات الفعالة في وحدة الزمن. <span class="text-emerald-400 font-mono">(0.35 ن)</span></p>
                      <p><b>3. تحديد $t_{1/2}$:</b><br/>
                      بما أن التحول كلي، يوافق $t_{1/2}$ القيمة $x(t_{1/2}) = \\frac{x_{\\max}}{2} = \\frac{4.0}{2} = 2.0\\text{ mmol}$؛ وبالإسقاط المبياني نجد: <b>$t_{1/2} = 2.8\\text{ min}$</b>. <span class="text-emerald-400 font-mono">(0.40 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: السرعة الحجمية و $t_{1/2}$ من منحنى متناقص لمتفاعل بالوفرة $[\\text{MnO}_4^-](t)$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      في وسط حمضي حجمه $V_S = 100\\text{ mL}$، يتفاعل $\\text{MnO}_4^-$ (المضاف بوفرة بتركيز بدئي $[\\text{MnO}_4^-]_0 = 4.0\\text{ mmol}\\cdot\\text{L}^{-1}$) مع حمض الأوكساليك (المحد) وفق:
                      $$2\\,\\text{MnO}_4^- + 5\\,\\text{H}_2\\text{C}_2\\text{O}_4 + 6\\,\\text{H}_3\\text{O}^+ \\longrightarrow 2\\,\\text{Mn}^{2+} + 10\\,\\text{CO}_2 + 14\\,\\text{H}_2\\text{O}$$
                      نعاين مبيانياً تناقص $[\\text{MnO}_4^-](t)$ حتى يستقر نهائياً عند $[\\text{MnO}_4^-]_f = 1.0\\text{ mmol}\\cdot\\text{L}^{-1}$. عند اللحظة $t = 2.0\\text{ min}$، يمر المماس لمنحنى $[\\text{MnO}_4^-](t)$ بالنقطتين $(0\\text{ min} \\,;\\, 4.6\\text{ mmol}\\cdot\\text{L}^{-1})$ و $(6.0\\text{ min} \\,;\\, 1.0\\text{ mmol}\\cdot\\text{L}^{-1})$.<br/>
                      <b>1.</b> أثبت تعبير السرعة الحجمية $v(t)$ بدلالة $\\frac{d[\\text{MnO}_4^-]}{dt}$، ثم احسب قيمتها عند $t = 2.0\\text{ min}$. <span class="text-emerald-400 font-mono">(0.90 ن)</span><br/>
                      <b>2.</b> حدّد قيمة $[\\text{MnO}_4^-](t_{1/2})$ الموافقة لزمن نصف التفاعل $t_{1/2}$! <span class="text-emerald-400 font-mono">(0.60 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. برهنة $v(t)$ والحساب عند $t = 2.0\\text{ min}$:</b><br/>
                      • من جدول التقدم: $n(\\text{MnO}_4^-)_t = n_0 - 2\\,x(t) \\implies [\\text{MnO}_4^-]_t = [\\text{MnO}_4^-]_0 - \\frac{2\\,x(t)}{V_S} \\implies x(t) = \\frac{V_S}{2}\\big([\\text{MnO}_4^-]_0 - [\\text{MnO}_4^-]_t\\big)$.<br/>
                      • باشتقاق العلاقة بالنسبة للزمن ($V_S$ و $[\\text{MnO}_4^-]_0$ ثابتان):
                      $$v(t) = \\frac{1}{V_S}\\frac{dx}{dt} = -\\frac{1}{2} \\cdot \\frac{d[\\text{MnO}_4^-]}{dt}$$
                      • عند $t = 2.0\\text{ min}$:
                      $$v(2.0\\text{ min}) = -\\frac{1}{2} \\left(\\frac{1.0 - 4.6}{6.0 - 0}\\right) = -\\frac{1}{2}(-0.60) = 0.30\\text{ mmol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1}$$
                      <span class="text-emerald-400 font-mono">(0.90 ن)</span></p>
                      <p><b>2. تركيز البرمنغنات عند $t_{1/2}$ (تحطيم فخ $Y_0$ و $Y_f$!):</b><br/>
                      بما أن $x(t_{1/2}) = \\frac{x_{\\max}}{2}$، نعوّض في $[\\text{MnO}_4^-]_t$:
                      $$[\\text{MnO}_4^-](t_{1/2}) = [\\text{MnO}_4^-]_0 - \\frac{1}{2}\\big([\\text{MnO}_4^-]_0 - [\\text{MnO}_4^-]_f\\big) = \\frac{[\\text{MnO}_4^-]_0 + [\\text{MnO}_4^-]_f}{2} = \\frac{4.0 + 1.0}{2} = 2.5\\text{ mmol}\\cdot\\text{L}^{-1}$$
                      <span class="text-emerald-400 font-mono">(0.60 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 5. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">تأثير درجة الحرارة على $v_0$ و $t_{1/2}$ وعلاقة $v(t)$ بالضغط</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    يُنجز التفاعل السابق لتصاعد غاز $\\text{H}_2$ (حيث $P(t) - P_0 = \\frac{R T}{V_{\\text{gaz}}}\\,x(t)$) في تجربتين بنفس التراكيز والأحجام ($V_S, V_{\\text{gaz}}$)، عند درجتي حرارة مختلفتين $\\theta_1 = 20^\\circ\\text{C}$ ثم $\\theta_2 = 50^\\circ\\text{C}$.<br/>
                    1) برهن أن $v(t) = \\frac{V_{\\text{gaz}}}{V_S \\cdot R T}\\frac{dP}{dt}$ (انتبه لعدم اختزال $V_{\\text{gaz}}$ مع $V_S$!).<br/>
                    2) قارن بين $v_{0,2}$ و $v_{0,1}$، وبين $t_{1/2}^{(2)}$ و $t_{1/2}^{(1)}$، وبين $x_{\\max,2}$ و $x_{\\max,1}$!
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. إثبات علاقة السرعة الحجمية بدلالة الضغط:</b><br/>
                      لدينا $x(t) = \\frac{V_{\\text{gaz}}}{R T}(P(t) - P_0)$؛ وبما أن $V_{\\text{gaz}}$ و $R$ و $T$ و $P_0$ ثوابت خلال التجربة، فإن اشتقاق $x(t)$ يعطي $\\frac{dx}{dt} = \\frac{V_{\\text{gaz}}}{R T}\\frac{dP}{dt}$. بالتعويض في $v(t) = \\frac{1}{V_S}\\frac{dx}{dt}$ نجد مباشرة:
                      $$v(t) = \\frac{V_{\\text{gaz}}}{V_S \\cdot R T} \\cdot \\frac{dP}{dt}$$</p>
                      <p><b>2. مقارنة المقادير عند $\\theta_2 &gt; \\theta_1$:</b><br/>
                      • لأن درجة الحرارة عامل حركي مسرّع للتفاعل: ترتفع السرعة الحجمية البدئية (<b>$v_{0,2} &gt; v_{0,1}$</b>)، ويُبلَغ نصف التقدم في وقت أقصر (<b>$t_{1/2}^{(2)} &lt; t_{1/2}^{(1)}$</b>).<br/>
                      • أما <b>التقدم الأقصى فيبقى ثابتاً ($x_{\\max,2} = x_{\\max,1}$)</b> لأن كميات المادة البدئية لم تتغير (بينما يزداد $P_{\\max,2}$ طفيفاً مقارنة بـ $P_{\\max,1}$ بسبب ارتفاع $T_2 &gt; T_1$ في $PV = nRT$!).</p>
                    </div>
                  </details>
                </div>
              </div>

`);
