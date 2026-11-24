window.EulerAcademy.registerAxis('chem-02', 'c02-ax1', `

              <div class="space-y-6">
                <!-- 1. Chemical vs Physical Monitoring Methods -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">1. طرق التتبع الزمني لتحول كيميائي بطيء (المعايرة مقابل الطرق الفيزيائية)</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <p class="text-xs text-slate-300 leading-relaxed mb-4">
                    لتحديد منحنى تطور التقدم $x(t)$ لتفاعل بطيء بدلالة الزمن، نقيس خلال فترات متعاقبة مقداراً مرتبطاً بأحد المتفاعلات أو النواتج عبر صنفين من الطرق التجريبية:
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 text-sm block mb-1.5">🧪 أ) الطريقة الكيميائية — المعايرة المتقطعة (Titrage):</b>
                      • <b>المبدأ:</b> نسحب في لحظات مختلفة عينات متساوية الحجم $V_p$ من المزيج الكلي ذي الحجم $V_S$، ونخضع كل عينة لعملية <b>السقي الكيميائي (Trempe)</b> بصبّها في ماء مثلج ($0^\\circ\\text{C}$) لتوقيف التفاعل البطيء لحظة السحب، ثم نعايرها بسرعة بتفاعل <b>سريع وكلي وانتقائي</b>.<br/>
                      • <b>الربط بالمزيج الكلي:</b> تُعد هذه الطريقة <b>متلفة</b> (تستهلك العينات)، وتُستخرج كمية المادة الكلية في المزيج بعامل التناسب:
                      $$n_{\\text{tot}}(t) = n_p(t) \\cdot \\frac{V_S}{V_p}$$
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">📡 ب) الطرق الفيزيائية المستمرة (Non destructives):</b>
                      تسمح بقياس مستمر وآني داخل وسط التفاعل نفسه <b>دون إتلاف المادة أو تغييره</b>، وتشمل حسب طبيعة المتدخلين:<br/>
                      • <b>قياس المواصلة $G(t)$ أو الموصلية $\\sigma(t)$:</b> إذا تضمن التفاعل تغيّراً في تراكيز الأيونات ($\\sigma = \\sum \\lambda_i [X_i]$، وترتبطان بثابتة الخلية $k = \\frac{S}{L}$ عبر $G = k \\cdot \\sigma$).<br/>
                      • <b>قياس ضغط $P(t)$ أو حجم غاز $V(t)$:</b> إذا نتج أو استُهلك غاز ($P V = n_{\\text{gaz}} R T$).<br/>
                      • <b>قياس الـ $pH$ أو الامتصاصية $A(t)$:</b> إذا تدخلت أيونات $\\text{H}_3\\text{O}^+$ أو نوع كيميائي ملون وحيد عند $\\lambda$.
                    </div>
                  </div>

                  <!-- Critical Conversion Formulas Box -->
                  <div class="bg-slate-950/90 border border-emerald-500/30 rounded-xl p-4 text-xs text-slate-200 space-y-2 leading-relaxed">
                    <b class="text-emerald-300 text-sm block">📐 دستور التحويل المباشر من المقدار المقاس إلى $x(t)$ (قانون الربط الذهبي):</b>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      <div class="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                        <span class="text-cyan-300 font-bold block mb-1">1) حالة قياس الموصلية $\\sigma(t)$ أو المواصلة $G(t)$:</span>
                        انطلاقاً من قانون كولروش $\\sigma(t) = \\sum \\lambda_i [X_i]_t$ مع جدول التقدم، نجد علاقة تآلفية من الشكل $\\sigma(t) = \\sigma_0 + \\alpha\\,x(t)$ (حيث $\\alpha$ موجب أو سالب).<br/>
                        وبالتعويض عند النهاية $x_f = x_{\\max}$ نبرهن دائماً في التحول الكلي على:
                        $$x(t) = x_{\\max} \\cdot \\frac{\\sigma(t) - \\sigma_0}{\\sigma_f - \\sigma_0} = x_{\\max} \\cdot \\frac{G(t) - G_0}{G_f - G_0}$$
                      </div>
                      <div class="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                        <span class="text-amber-300 font-bold block mb-1">2) حالة قياس ضغط غاز $P(t)$ في حوجلة مغلقة ($V_{\\text{gaz}}, T$ ثابتان):</span>
                        عند $t=0$ يسود الهواء داخل الحوجلة ضغطاً بدئياً $P_0 = P_{\\text{atm}}$. عند تكون $n_{\\text{gaz}}(t) = c \\cdot x(t)$ مول من الغاز:<br/>
                        $$P_{\\text{gaz}}(t) = P(t) - P_0 = \\frac{n_{\\text{gaz}}(t)\\,R\\,T}{V_{\\text{gaz}}} = \\frac{c\\,R\\,T}{V_{\\text{gaz}}}\\,x(t)$$
                        ومنه نستنتج مباشرة بدلالة الضغط البدئي والنهائي:
                        $$x(t) = \\frac{(P(t) - P_0)\\,V_{\\text{gaz}}}{c\\,R\\,T} = x_{\\max} \\cdot \\frac{P(t) - P_0}{P_{\\max} - P_0}$$
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 2. SVG Schematic Diagram of the 4 Monitoring Bridges -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">2. الخريطة الذهنية للربط بين جدول التقدم والمقدار الفيزيائي المقاس</span>
                    <span class="text-xs text-cyan-400 font-mono">Bridge x(t) ↔ (G, σ, P, V, V_E)</span>
                  </div>

                  <div class="my-3 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardMonitoringBridge">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>🧭 استراتيجية استخراج $x(t)$ بالوحدات الدولية الصارمة ($\\text{SI}$)</span>
                      <span class="text-[11px] font-mono text-emerald-400">Tableau d'avancement -&gt; x(t)</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 220" class="w-full h-auto">
                        <defs>
                          <marker id="arrCh2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
                          </marker>
                        </defs>

                        <!-- Center Top Node: Tableau d'avancement x(t) -->
                        <rect x="210" y="14" width="260" height="44" rx="10" fill="rgba(16,185,129,0.14)" stroke="#34d399" stroke-width="1.8"/>
                        <text x="340" y="34" fill="#6ee7b7" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">Tableau d'avancement : n_i(t)</text>
                        <text x="340" y="50" fill="#cbd5e1" font-size="10.5" font-family="monospace" text-anchor="middle">Pivot universel : x(t) [mol]</text>

                        <!-- Connector branches -->
                        <path d="M 240 58 L 90 98" fill="none" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrCh2)"/>
                        <path d="M 300 58 L 256 98" fill="none" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrCh2)"/>
                        <path d="M 380 58 L 424 98" fill="none" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrCh2)"/>
                        <path d="M 440 58 L 590 98" fill="none" stroke="#34d399" stroke-width="1.5" marker-end="url(#arrCh2)"/>

                        <!-- Card 1: Conductimetry -->
                        <rect x="14" y="102" width="154" height="104" rx="10" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" stroke-width="1.4"/>
                        <text x="91" y="124" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1) Conductimetrie</text>
                        <text x="91" y="146" fill="#e2e8f0" font-size="10" font-family="monospace" text-anchor="middle">sigma = sum lam_i [X_i]</text>
                        <text x="91" y="168" fill="#fbbf24" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">[X_i] en mol/m^3 !</text>
                        <text x="91" y="190" fill="#94a3b8" font-size="9.5" font-family="monospace" text-anchor="middle">1 L = 10^-3 m^3</text>

                        <!-- Card 2: Manometry (Pressure) -->
                        <rect x="180" y="102" width="154" height="104" rx="10" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.4"/>
                        <text x="257" y="124" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">2) Manometre P(t)</text>
                        <text x="257" y="146" fill="#e2e8f0" font-size="10" font-family="monospace" text-anchor="middle">DeltaP = P(t) - P0</text>
                        <text x="257" y="168" fill="#fb7185" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">V_gaz = V_tot - V_sol</text>
                        <text x="257" y="190" fill="#94a3b8" font-size="9.5" font-family="monospace" text-anchor="middle">P[Pa], V[m^3], T[K]</text>

                        <!-- Card 3: Gas Volume -->
                        <rect x="346" y="102" width="154" height="104" rx="10" fill="rgba(192,132,252,0.08)" stroke="#c084fc" stroke-width="1.4"/>
                        <text x="423" y="124" fill="#d8b4fe" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">3) Volume gaz V(t)</text>
                        <text x="423" y="146" fill="#e2e8f0" font-size="10" font-family="monospace" text-anchor="middle">n_gaz(t) = V(t) / V_m</text>
                        <text x="423" y="168" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">x(t) = V(t)/(c*V_m)</text>
                        <text x="423" y="190" fill="#94a3b8" font-size="9.5" font-family="monospace" text-anchor="middle">ou P_atm * V = n R T</text>

                        <!-- Card 4: Titration + Trempe -->
                        <rect x="512" y="102" width="154" height="104" rx="10" fill="rgba(251,113,133,0.08)" stroke="#fb7185" stroke-width="1.4"/>
                        <text x="589" y="124" fill="#fda4af" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">4) Titrage + Trempe</text>
                        <text x="589" y="146" fill="#e2e8f0" font-size="10" font-family="monospace" text-anchor="middle">n_p = f(C_E, V_E)</text>
                        <text x="589" y="168" fill="#67e8f9" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">n_tot = n_p * V_S/V_p</text>
                        <text x="589" y="190" fill="#94a3b8" font-size="9.5" font-family="monospace" text-anchor="middle">Eau glacee 0 C</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 3. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">وحدات مُميتة إن غفلت عنها</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «الوحدات في قانون كولروش $\\sigma = \\sum \\lambda_i [X_i]$»:</b>
                      تُعطى الموصلية المولية الأيونية $\\lambda_i$ غالباً بـ $\\text{mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$ ($1\\text{ mS} = 10^{-3}\\text{ S}$)، بينما يجب التعبير عن الحجم $V_S$ بالـ <b>$\\text{m}^3$</b> ($1\\text{ L} = 10^{-3}\\text{ m}^3$، و $100\\text{ mL} = 10^{-4}\\text{ m}^3$) لكي تخرج الموصلية $\\sigma$ بـ $\\text{S}\\cdot\\text{m}^{-1}$ أو $\\text{mS}\\cdot\\text{m}^{-1}$ بدون خطأ بعامل $10^3$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «إهمال الأيونات المتفرجة عند كتابة $\\sigma(t)$»:</b>
                      أيونات مثل $\\text{Na}^+$ أو $\\text{K}^+$ أو $\\text{NO}_3^-$ لا تتفاعل لكنها <b>تساهم بقوة في الموصلية $\\sigma(t)$ و $\\sigma_0$</b>! لا تحذفها أبداً من تعبير $\\sigma(t)$ (إنما يُلغى أثرها تلقائياً عند حساب الفرق $\\sigma(t) - \\sigma_0$ لأنها ثابتة!).
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «حجم الغاز $V_{\\text{gaz}}$ مقابل حجم المحلول $V_S$ في $PV = nRT$»:</b>
                      في حوجلة حجمها الكلي $V_{\\text{flacon}}$ تحتوي على محلول حجمه $V_S$، يشغل الغاز الحيز الفارغ فوق السائل فقط: <b>$V_{\\text{gaz}} = V_{\\text{flacon}} - V_S$</b>! واستعمل دائماً $\\Delta P = P(t) - P_0$، لا $P(t)$، لأن الهواء كان حاضراً منذ $t=0$ بضغط $P_0$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «السقي في المعايرة وعامل التناسب $\\frac{V_S}{V_p}$»:</b>
                      تنتج المعايرة مباشرة كمية المادة $n_p$ داخل العينة المسحوبة $V_p$ فقط؛ ولا تنسَ أن تضرب في النسبة $\\frac{V_S}{V_p}$ لإيجاد التقدم $x(t)$ في وسط التفاعل الكلي!
                    </div>
                  </div>
                </div>

                <!-- 4. Worked National-Grade Applications -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">3. تطبيقان نموذجيان محرران بسلم التنقيط (معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400 font-mono">المنهجية الكاملة 20/20</span>
                  </div>

                  <!-- Application 1 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800 mb-5">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: التتبع الزمني لتفاعل فلز الزنك مع حمض الكلوريدريك بقياس الضغط $P(t)$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      في حوجلة حجمها الكلي $V_{\\text{flacon}} = 300\\text{ mL}$ ومتصلة بمقياس الضغط، نصبّ عند $t=0$ حجماً $V_S = 50\\text{ mL}$ من محلول حمض الكلوريدريك $(\\text{H}_3\\text{O}^+ + \\text{Cl}^-)$ تركيزه $C = 0.20\\text{ mol}\\cdot\\text{L}^{-1}$ على كتلة $m = 0.654\\text{ g}$ من الزنك $\\text{Zn}(\\text{s})$. نحكم إغلاق الحوجلة عند درجة حرارة ثابتة $T = 300\\text{ K}$ وضغط جوي بدئي $P_0 = 1013\\text{ hPa}$. يُنمذج التحول الكلي بالمعادلة:
                      $$\\text{Zn}(\\text{s}) + 2\\,\\text{H}_3\\text{O}^+(\\text{aq}) \\longrightarrow \\text{Zn}^{2+}(\\text{aq}) + \\text{H}_2(\\text{g}) + 2\\,\\text{H}_2\\text{O}(\\ell)$$
                      تُعطى: $M(\\text{Zn}) = 65.4\\text{ g}\\cdot\\text{mol}^{-1}$، $R = 8.31\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$.<br/>
                      <b>1.</b> أنشئ جدول التقدم وحدّد المتفاعل المحد والتقدم الأقصى $x_{\\max}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> أوجد تعبير التقدم $x(t)$ بدلالة $P(t)$, $P_0$, $V_{\\text{gaz}}$, $R$, $T$، ثم احسب قيمة $x(t_1)$ في اللحظة التي يبلغ فيها الضغط $P(t_1) = 1263\\text{ hPa}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>3.</b> استنتج الضغط الأقصى $P_{\\max}$ داخل الحوجلة في نهاية التفاعل. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. جدول التقدم، المتفاعل المحد، و $x_{\\max}$:</b><br/>
                      • كميات المادة البدئية: $n_0(\\text{Zn}) = \\frac{m}{M} = \\frac{0.654}{65.4} = 1.0 \\times 10^{-2}\\text{ mol} = 10.0\\text{ mmol}$، و $n_0(\\text{H}_3\\text{O}^+) = C \\cdot V_S = 0.20 \\times 50 \\times 10^{-3} = 1.0 \\times 10^{-2}\\text{ mol} = 10.0\\text{ mmol}$.<br/>
                      • مقارنة النسب الستوكيومترية: $\\frac{n_0(\\text{H}_3\\text{O}^+)}{2} = 5.0\\text{ mmol} &lt; \\frac{n_0(\\text{Zn})}{1} = 10.0\\text{ mmol}$، إذن <b>أيونات $\\text{H}_3\\text{O}^+$ هي المتفاعل المحد</b> و $x_{\\max} = 5.0\\text{ mmol} = 5.0 \\times 10^{-3}\\text{ mol}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>2. تعبير $x(t)$ وحساب $x(t_1)$ (انتبه لـ $V_{\\text{gaz}}$!):</b><br/>
                      • يشغل الغاز فقط الحيز الفارغ فوق المحلول: $V_{\\text{gaz}} = V_{\\text{flacon}} - V_S = 300 - 50 = 250\\text{ mL} = 2.50 \\times 10^{-4}\\text{ m}^3$.<br/>
                      • حسب جدول التقدم: $n(\\text{H}_2)_t = x(t)$. وبما أن الهواء الابتدائي يولّد الضغط $P_0$ فإن الضغط الإضافي الناتج عن $\\text{H}_2$ هو $P_{\\text{H}_2}(t) = P(t) - P_0$:<br/>
                      $$(P(t) - P_0) V_{\\text{gaz}} = x(t)\\,R\\,T \\implies x(t) = \\frac{(P(t) - P_0)\\,V_{\\text{gaz}}}{R\\,T}$$
                      • عند $P(t_1) = 1263\\text{ hPa}$: لدينا $\\Delta P_1 = (1263 - 1013)\\text{ hPa} = 250\\text{ hPa} = 2.50 \\times 10^4\\text{ Pa}$:
                      $$x(t_1) = \\frac{2.50 \\times 10^4 \\times 2.50 \\times 10^{-4}}{8.31 \\times 300} = \\frac{6.25}{2493} \\approx 2.51 \\times 10^{-3}\\text{ mol} = 2.51\\text{ mmol}$$
                      <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>3. الضغط الأقصى $P_{\\max}$ عند نهاية التفاعل ($x_{\\max} = 5.0 \\times 10^{-3}\\text{ mol}$):</b><br/>
                      $$\\Delta P_{\\max} = \\frac{x_{\\max}\\,R\\,T}{V_{\\text{gaz}}} = \\frac{5.0 \\times 10^{-3} \\times 8.31 \\times 300}{2.50 \\times 10^{-4}} = 4.986 \\times 10^4\\text{ Pa} \\approx 499\\text{ hPa}$$
                      $$P_{\\max} = P_0 + \\Delta P_{\\max} = 1013 + 499 = 1512\\text{ hPa}$$
                      <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: التتبع الزمني لتفاعل تصبن إيثانوات الإيثيل بالموصلية المتناقصة $\\sigma(t)$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نمزج عند $t=0$ في كأس حجماً $V_S = 100\\text{ mL}$ يحتوي على كميتي مادة بدئيتين متساويتين $n_0 = 1.0\\text{ mmol}$ من إيثانوات الإيثيل $\\text{CH}_3\\text{COOC}_2\\text{H}_5$ وهيدروكسيد الصوديوم $(\\text{Na}^+ + \\text{HO}^-)$ (إذن $C_0 = \\frac{n_0}{V_S} = 10\\text{ mmol}\\cdot\\text{L}^{-1}$). يحدث التحول البطيء والكلي وفق المعادلة:
                      $$\\text{CH}_3\\text{COOC}_2\\text{H}_5(\\text{aq}) + \\text{HO}^-(\\text{aq}) \\longrightarrow \\text{CH}_3\\text{COO}^-(\\text{aq}) + \\text{C}_2\\text{H}_5\\text{OH}(\\text{aq})$$
                      تُعطى الموصليات المولية الأيونية بالوحدة $\\text{mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$: $\\lambda_{\\text{Na}^+} = 5.0$، $\\lambda_{\\text{HO}^-} = 20.0$، $\\lambda_{\\text{CH}_3\\text{COO}^-} = 4.0$.<br/>
                      <b>1.</b> أوجد تعبير الموصلية البدئية $\\sigma_0$ والموصلية النهائية $\\sigma_f$، وفسّر لماذا تتناقص $\\sigma(t)$ مع الزمن. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> أثبت أن $\\sigma(t) = 0.250 - 160\\,x(t)$ (حيث $\\sigma$ بـ $\\text{S}\\cdot\\text{m}^{-1}$ و $x$ بـ $\\text{mol}$)، ثم احسب $x(t_1)$ عندما تقاس $\\sigma(t_1) = 0.170\\text{ S}\\cdot\\text{m}^{-1}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. حساب $\\sigma_0$ و $\\sigma_f$ وتفسير التناقص:</b><br/>
                      • نحول التراكيز إلى $\\text{mol}\\cdot\\text{m}^{-3}$: $C_0 = 10\\text{ mmol}\\cdot\\text{L}^{-1} = 10\\text{ mol}\\cdot\\text{m}^{-3}$، و $V_S = 100\\text{ mL} = 1.0 \\times 10^{-4}\\text{ m}^3$.<br/>
                      • عند $t=0$ (تتواجد $\\text{Na}^+$ و $\\text{HO}^-$ بتركيز $C_0$):
                      $$\\sigma_0 = (\\lambda_{\\text{Na}^+} + \\lambda_{\\text{HO}^-})\\,C_0 = (5.0 + 20.0)\\times 10^{-3} \\times 10 = 0.250\\text{ S}\\cdot\\text{m}^{-1}$$
                      • عند نهاية التفاعل الكلي ($x_{\\max} = 1.0\\text{ mmol}$)، تختفي $\\text{HO}^-$ وتحل محلها $\\text{CH}_3\\text{COO}^-$ بتركيز $C_0$ مع ثبات $\\text{Na}^+$:
                      $$\\sigma_f = (\\lambda_{\\text{Na}^+} + \\lambda_{\\text{CH}_3\\text{COO}^-})\\,C_0 = (5.0 + 4.0)\\times 10^{-3} \\times 10 = 0.090\\text{ S}\\cdot\\text{m}^{-1}$$
                      تتناقص الموصلية لأن أيونات $\\text{HO}^-$ عالية التوصيل ($20.0$) تُستهلك تدريجياً وتُعوض بأيونات $\\text{CH}_3\\text{COO}^-$ الأضعف توصيلاً ($4.0$). <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>2. العلاقة التآلفية $\\sigma(t)$ وحساب $x(t_1)$:</b><br/>
                      في كل لحظة $t$: $[\\text{Na}^+] = C_0$، $[\\text{HO}^-] = C_0 - \\frac{x(t)}{V_S}$، و $[\\text{CH}_3\\text{COO}^-] = \\frac{x(t)}{V_S}$:
                      $$\\sigma(t) = (\\lambda_{\\text{Na}^+} + \\lambda_{\\text{HO}^-})C_0 + (\\lambda_{\\text{CH}_3\\text{COO}^-} - \\lambda_{\\text{HO}^-})\\frac{x(t)}{V_S}$$
                      $$\\sigma(t) = 0.250 + \\frac{(4.0 - 20.0)\\times 10^{-3}}{1.0 \\times 10^{-4}}\\,x(t) = 0.250 - 160\\,x(t)$$
                      • عند $\\sigma(t_1) = 0.170\\text{ S}\\cdot\\text{m}^{-1}$:
                      $$x(t_1) = \\frac{0.250 - 0.170}{160} = 5.0 \\times 10^{-4}\\text{ mol} = 0.50\\text{ mmol} \\;\\Big(= \\frac{x_{\\max}}{2}\\Big)$$
                      <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 5. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">معايرة عينة بعد السقي مقابل قياس حجم غاز</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    ندرس تفكك الماء الأوكسيجيني: $2\\,\\text{H}_2\\text{O}_2(\\text{aq}) \\longrightarrow 2\\,\\text{H}_2\\text{O}(\\ell) + \\text{O}_2(\\text{g})$ في محلول حجمه الكلي $V_S = 100\\text{ mL}$ (حجم مولي $V_m = 24.0\\text{ L}\\cdot\\text{mol}^{-1}$).<br/>
                    عند اللحظة $t_1$، نقيس حجم غاز $\\text{O}_2$ المنطلق فنجد $V(\\text{O}_2) = 48.0\\text{ mL}$. وفي تجربة موازية من أجل المحلول نفسه وعند اللحظة نفسها $t_1$، نسحب عينة $V_p = 10.0\\text{ mL}$ فنضيفها لماء مثلج محمض ونعاير $\\text{H}_2\\text{O}_2$ المتبقي بمحلول $\\text{MnO}_4^-$ تركيزه $C_2 = 2.0 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$ ($5\\,\\text{H}_2\\text{O}_2 + 2\\,\\text{MnO}_4^- + 6\\,\\text{H}_3\\text{O}^+ \\to 5\\,\\text{O}_2 + 2\\,\\text{Mn}^{2+} + 14\\,\\text{H}_2\\text{O}$) فنجد $V_E = 12.0\\text{ mL}$.<br/>
                    احسب التقدم $x(t_1)$ في المزيج الكلي، ثم استنتج التركيز البدئي $[\\text{H}_2\\text{O}_2]_0$ قبل بداية التفاعل!
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. حساب $x(t_1)$ انطلاقاً من حجم الغاز $V(\\text{O}_2)$:</b><br/>
                      من معادلة التفكك، معامل $\\text{O}_2$ هو $1$، إذن $n(\\text{O}_2)_{t_1} = x(t_1) = \\frac{V(\\text{O}_2)}{V_m} = \\frac{48.0 \\times 10^{-3}}{24.0} = 2.0 \\times 10^{-3}\\text{ mol} = 2.0\\text{ mmol}$.</p>
                      <p><b>2. استثمار المعايرة لإيجاد $\\text{H}_2\\text{O}_2$ المتبقي عند $t_1$ ثم $[\\text{H}_2\\text{O}_2]_0$:</b><br/>
                      • عند تكافؤ المعايرة: $\\frac{n_p(\\text{H}_2\\text{O}_2)_{\\text{restant}}}{5} = \\frac{C_2 V_E}{2} \\implies n_p = \\frac{5}{2} (2.0 \\times 10^{-2} \\times 12.0 \\times 10^{-3}) = 6.0 \\times 10^{-4}\\text{ mol} = 0.60\\text{ mmol}$ في العينة $V_p$.<br/>
                      • في المزيج الكلي ($V_S / V_p = 10$): $n_{\\text{tot}}(\\text{H}_2\\text{O}_2)_{t_1} = 10 \\times 0.60 = 6.0\\text{ mmol}$.<br/>
                      • ومن جدول تقدم التفكك $n_{\\text{tot}}(\\text{H}_2\\text{O}_2)_{t_1} = n_0(\\text{H}_2\\text{O}_2) - 2\\,x(t_1)$ (احذر المعامل $2$!):
                      $$n_0(\\text{H}_2\\text{O}_2) = 6.0 + 2(2.0) = 10.0\\text{ mmol} \\implies [\\text{H}_2\\text{O}_2]_0 = \\frac{10.0 \\times 10^{-3}}{0.100} = 0.10\\text{ mol}\\cdot\\text{L}^{-1}$$
                      </p>
                    </div>
                  </details>
                </div>
              </div>

`);
