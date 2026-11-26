window.EulerAcademy.registerAxis('chem-03', 'c03-ax2', `

              <div class="space-y-6">
                <!-- 1. Final Extent, tau Ratio, and Dynamic Chemical Equilibrium -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">1. التقدم النهائي $x_f$، نسبة التقدم النهائي $\\tau = \\frac{x_f}{x_{\\max}}$، والتوازن الكيميائي الديناميكي</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">📊 أ) التمييز بين $x_f$ (التجريبي) و $x_{\\max}$ (المفترض كلياً):</b>
                      لتفاعل تحول كيميائي مثل تفاعل حمض $\\text{HA}$ (تركيزه $C$ وحجمه $V$) مع الماء المذيب الوفير:
                      $$\\text{HA}(\\text{aq}) + \\text{H}_2\\text{O}(\\ell) \\rightleftharpoons \\text{A}^-(\\text{aq}) + \\text{H}_3\\text{O}^+(\\text{aq})$$
                      • <b>التقدم الأقصى $x_{\\max}$:</b> يُحسب بافتراض التحول كلياً باستهلاك المتفاعل المحد ($\\text{HA}$ لأن الماء وفير): $x_{\\max} = C \\cdot V$.<br/>
                      • <b>التقدم النهائي $x_f$ (أو $x_{\\text{éq}}$):</b> يُحدد <b>تجريبياً</b> بقياس $pH$ أو $\\sigma$ عند توقف التطور الكيميائي:
                      $$x_f = [\\text{H}_3\\text{O}^+]_f \\cdot V = 10^{-pH} \\cdot V$$
                      • <b>نسبة التقدم النهائي $\\tau$ (مقدار بدون وحدة، $0 \\le \\tau \\le 1$):</b>
                      $$\\tau = \\frac{x_f}{x_{\\max}} = \\frac{10^{-pH}}{C}$$
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 text-sm block mb-1.5">⚖️ ب) تصنيف التحول الكيميائي والتفسير المجهري للتوازن:</b>
                      • <b>إذا كان $\\tau = 1$ ($x_f = x_{\\max}$):</b> فالتحول <b>كلي (Totale)</b> ويختفي المتفاعل المحد بالكامل (نستعمل سهماً واحداً $\\longrightarrow$).<br/>
                      • <b>إذا كان $\\tau \\lt 1$ ($x_f \\lt x_{\\max}$):</b> فالتحول <b>غير كلي / محدود (Non totale / Limitée)</b>؛ تؤول المجموعة إلى <b>حالة توازن كيميائي</b> تتعايش فيها جميع المتفاعلات والنواتج معاً (سهمان $\\rightleftharpoons$).<br/>
                      • <b>التفسير المجهري (توازن ديناميكي):</b> عند التوازن لا تتوقف التصادمات التفاعلية! بل تستمر التفاعلات في المنحى المباشر والمنحى المعاكس <b>بالسرعة نفسها</b> (تساوي وتيرة التصادمات الفعالة في المنحيين خلال نفس المدة الزمنية)، فتبقى كميات المادة وتراكيز الأنواع الكيميائية ثابتة ماكروسكوبياً.
                    </div>
                  </div>

                  <!-- SVG Diagram: Total vs Equilibrium Kinetics Curve + Micro Dynamic Box -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardTauEquilibrium">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📈 مقارنة منحنى تطور التقدم لـ تحول كلي ($\\tau = 1$) وتحول غير كلي ($\\tau \\lt 1$) والتوازن الديناميكي</span>
                      <span class="text-[11px] font-mono text-amber-400">tau = x_f / x_max</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 235" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <marker id="arrEqAx" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                        </defs>

                        <!-- Axes -->
                        <line x1="68" y1="194" x2="432" y2="194" stroke="#475569" stroke-width="1.6" marker-end="url(#arrEqAx)"/>
                        <line x1="68" y1="204" x2="68" y2="24" stroke="#475569" stroke-width="1.6" marker-end="url(#arrEqAx)"/>
                        <text x="438" y="198" fill="#cbd5e1" font-size="11" font-weight="bold" font-family="monospace" text-anchor="start">t</text>
                        <text x="58" y="24" fill="#cbd5e1" font-size="11" font-weight="bold" font-family="monospace" text-anchor="end">x(t)</text>

                        <!-- Asymptotes x_max and x_f -->
                        <line x1="68" y1="54" x2="418" y2="54" stroke="#22d3ee" stroke-width="1.3" stroke-dasharray="5,4"/>
                        <text x="56" y="58" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">x_max</text>

                        <line x1="68" y1="136" x2="418" y2="136" stroke="#fbbf24" stroke-width="1.3" stroke-dasharray="5,4"/>
                        <text x="56" y="140" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">x_f</text>

                        <!-- Total Reaction Curve (tau = 1) -->
                        <path d="M 68 194 C 102 82, 165 56, 268 54 L 418 54" fill="none" stroke="#22d3ee" stroke-width="2.8"/>
                        <text x="330" y="42" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Total : tau = 1</text>

                        <!-- Limited Equilibrium Curve (tau < 1) -->
                        <path d="M 68 194 C 115 150, 175 137, 260 136 L 418 136" fill="none" stroke="#fbbf24" stroke-width="2.8"/>
                        <text x="322" y="124" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Limite : tau &lt; 1</text>

                        <!-- Equilibrium zone highlight -->
                        <line x1="260" y1="136" x2="260" y2="194" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3"/>
                        <text x="260" y="212" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">t_eq</text>

                        <!-- Right Panel: Dynamic Microscopic Equilibrium -->
                        <rect x="462" y="24" width="202" height="186" rx="10" fill="rgba(15,23,42,0.85)" stroke="#334155" stroke-width="1.4"/>
                        <text x="563" y="48" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Equilibre Dynamique</text>
                        <line x1="478" y1="62" x2="648" y2="62" stroke="#334155" stroke-width="1"/>
                        <text x="563" y="88" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">v(1) = v(2)</text>
                        <text x="563" y="114" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">Chocs efficaces egaux</text>
                        <text x="563" y="136" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">dans les 2 sens</text>
                        <line x1="478" y1="154" x2="648" y2="154" stroke="#334155" stroke-width="1"/>
                        <text x="563" y="178" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Quantites n_eq ctes</text>
                        <text x="563" y="198" fill="#94a3b8" font-size="9.5" font-family="monospace" text-anchor="middle">Coexistence A &amp; B</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">احذر تطبيق القواعد الجاهزة خطأً!</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «تطبيق الصيغة المختصرة $\\tau = \\frac{10^{-pH}}{C}$ على قاعدة!»</b>
                      في تفاعل <b>قاعدة</b> $\\text{B}$ مع الماء ($\\text{B} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{BH}^+ + \\text{HO}^-$) تكون الأيونات الناتجة هي <b>$\\text{HO}^-$</b> وليس $\\text{H}_3\\text{O}^+$! إذن $x_f = [\\text{HO}^-]_f \\cdot V = \\frac{K_e}{10^{-pH}} V = 10^{pH - 14} V$ (عند $25^\\circ\\text{C}$)، فتصبح $\\tau = \\frac{10^{pH - 14}}{C}$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «إهمال إثبات أن التحول غير كلي من جدول التقدم قبل $\\tau$»</b>
                      في التصحيح الوطني الرسمي، لا تكتب مباشرة $\\tau = 10^{-pH}/C$ من الذاكرة دون كتابة معادلة التفاعل وإنشاء جدول التقدم وإبراز $x_{\\max} = C\\,V$ و $x_f = [\\text{H}_3\\text{O}^+]_f V$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «تعليل الحالة النهائية بتوقف التفاعل!»</b>
                      كتابة «توقف التفاعل عند بلوغ $x_f$» تعتبر خطأً مفاهيمياً! الصيغة الدقيقة المطلوبة هي: <b>«توازن كيميائي ديناميكي يحدث فيه التفاعلان المباشر والمعاكس بالسرعة نفسها»</b>.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «حدود القيمة العددية لـ $\\tau$»</b>
                      بما أن $x_f \\le x_{\\max}$ دائماً، فإن $0 \\lt \\tau \\le 1$ (أو بين $0\\%$ و $100\\%$). إذا وجدت $\\tau \\gt 1$ فراجع فوراً حساب $x_{\\max}$ أو وحدات الحجم والتركيز أو نوع التفاعل (حمض أم قاعدة)!
                    </div>
                  </div>
                </div>

                <!-- 3. Worked National-Grade Applications -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">2. تطبيقان نموذجيان محرران بسلم التنقيط (معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400 font-mono">المنهجية الكاملة 20/20</span>
                  </div>

                  <!-- Application 1 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800 mb-5">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: دراسة تفاعل حمض الإيثانويك مع الماء وأثر التخفيف على نسبة التقدم النهائي $\\tau$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نحضّر عند $25^\\circ\\text{C}$ محلولاً مائياً $(S_1)$ لحمض الإيثانويك $\\text{CH}_3\\text{COOH}$ حجمه $V = 100\\text{ mL}$ وتركيزه المولي $C_1 = 1.0 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$، فنقيس قيمة $pH_1 = 3.40$.<br/>
                      <b>1.</b> اكتب معادلة التفاعل مع الماء وأنشئ جدول التقدم الوصفي. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> احسب التقدم الأقصى $x_{\\max}$ والتقدم النهائي $x_f$ ثم استنتج نسبة التقدم النهائي $\\tau_1$. هل التحول كلي أم محدود؟ <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>3.</b> نخفّف المحلول $(S_1)$ بـ 10 مرات لنحصل على محلول $(S_2)$ تركيزه $C_2 = 1.0 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}$، فنقيس $pH_2 = 3.90$. احسب $\\tau_2$ ثم استنتج أثر التخفيف على نسبة التقدم النهائي. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. المعادلة وجدول التقدم (0.75 ن):</b><br/>
                      $$\\text{CH}_3\\text{COOH}(\\text{aq}) + \\text{H}_2\\text{O}(\\ell) \\rightleftharpoons \\text{CH}_3\\text{COO}^-(\\text{aq}) + \\text{H}_3\\text{O}^+(\\text{aq})$$
                      عند الحالة النهائية (الماء وفير): $n_f(\\text{CH}_3\\text{COOH}) = C_1 V - x_f$، و $n_f(\\text{CH}_3\\text{COO}^-) = n_f(\\text{H}_3\\text{O}^+) = x_f$.</p>
                      <p><b>2. حساب $x_{\\max}$ و $x_f$ و $\\tau_1$ (0.75 ن):</b><br/>
                      • المتفاعل المحد (بافتراض التحول كلياً) هو الحمض: $x_{\\max} = C_1 V = 1.0 \\times 10^{-2} \\times 0.100 = 1.0 \\times 10^{-3}\\text{ mol}$.<br/>
                      • من الـ $pH$: $x_f = [\\text{H}_3\\text{O}^+]_f V = 10^{-3.40} \\times 0.100 \\approx 3.98 \\times 10^{-5}\\text{ mol}$.<br/>
                      • نسبة التقدم النهائي: $\\tau_1 = \\frac{x_f}{x_{\\max}} = \\frac{3.98 \\times 10^{-5}}{1.0 \\times 10^{-3}} \\approx 3.98 \\times 10^{-2} = 3.98\\% \\lt 1$.<br/>
                      بما أن $\\tau_1 \\lt 1$ فإن التحول <b>غير كلي (محدود)</b> وتؤول المجموعة لتوازن كيميائي.</p>
                      <p><b>3. أثر التخفيف ($C_2 = 1.0 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}$, $pH_2 = 3.90$) (0.50 ن):</b><br/>
                      $$\\tau_2 = \\frac{10^{-pH_2}}{C_2} = \\frac{10^{-3.90}}{1.0 \\times 10^{-3}} = \\frac{1.26 \\times 10^{-4}}{1.0 \\times 10^{-3}} \\approx 12.6\\% \\gt \\tau_1$$
                      التخفيف يرفع نسبة التقدم النهائي $\\tau$ ويزيح التوازن في المنحى المباشر نحو تشرد أكبر للحمض!</p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2 (فخ د. الرياح): حساب نسبة التقدم النهائي $\\tau$ لتفاعل قاعدة $\\text{NH}_3$ مع الماء!</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نذيب غاز الأمونياك $\\text{NH}_3$ في الماء المقطر عند $25^\\circ\\text{C}$ لنحصل على محلول مائي $(S_B)$ حجمه $V = 500\\text{ mL}$ وتركيزه $C_B = 2.0 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$، فنقيس قيمة $pH = 10.75$. (نعطي الجداء الأيوني للماء عند $25^\\circ\\text{C}$: $K_e = [\\text{H}_3\\text{O}^+][\\text{HO}^-] = 10^{-14}$).<br/>
                      <b>1.</b> اكتب معادلة تفاعل $\\text{NH}_3$ مع الماء، وأنشئ جدول التقدم محدداً $x_{\\max}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> عبّر عن $x_f$ بدلالة $K_e$, $pH$, و $V$، ثم احسب نسبة التقدم النهائي $\\tau$ واستنتج. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. المعادلة وجدول التقدم و $x_{\\max}$ (0.75 ن):</b><br/>
                      $$\\text{NH}_3(\\text{aq}) + \\text{H}_2\\text{O}(\\ell) \\rightleftharpoons \\text{NH}_4^+(\\text{aq}) + \\text{HO}^-(\\text{aq})$$
                      المتفاعل المحد بافتراض التفاعل كلياً هو الأمونياك: $x_{\\max} = C_B \\cdot V = 2.0 \\times 10^{-2} \\times 0.500 = 1.0 \\times 10^{-2}\\text{ mol}$.</p>
                      <p><b>2. التقدم النهائي $x_f$ ونسبة التقدم $\\tau$ (انتبه لا تستعمل $\\frac{10^{-pH}}{C}$!) (0.75 ن):</b><br/>
                      من جدول التقدم، الأيون الناتج هو الهيدروكسيد: $x_f = [\\text{HO}^-]_f \\cdot V = \\frac{K_e}{[\\text{H}_3\\text{O}^+]_f} V = \\frac{10^{-14}}{10^{-pH}} V = 10^{pH - 14} V$:<br/>
                      $$\\tau = \\frac{x_f}{x_{\\max}} = \\frac{10^{pH - 14}}{C_B} = \\frac{10^{10.75 - 14}}{2.0 \\times 10^{-2}} = \\frac{10^{-3.25}}{2.0 \\times 10^{-2}} = \\frac{5.62 \\times 10^{-4}}{2.0 \\times 10^{-2}} \\approx 2.81\\% \\lt 1$$
                      التحول غير كلي (محدود) ويؤدي لحالة توازن كيميائي ديناميكي.</p>
                    </div>
                  </div>
                </div>

                <!-- 4. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">تحديد $\\tau$ و $pH$ انطلاقاً من قياس الموصلية $\\sigma_{\\text{éq}}$</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    نقيس عند $25^\\circ\\text{C}$ الموصلية الكهربائية عند التوازن لمحلول مائي لحمض الميثانويك $\\text{HCOOH}$ تركيزه $C = 5.00 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$ فنجد $\\sigma_{\\text{éq}} = 0.1618\\text{ S}\\cdot\\text{m}^{-1}$.<br/>
                    تُعطى: $\\lambda_{\\text{H}_3\\text{O}^+} = 35.0\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$ و $\\lambda_{\\text{HCOO}^-} = 5.46\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$.<br/>
                    1) استخرج من $\\sigma_{\\text{éq}}$ التركيز الفعلي $[\\text{H}_3\\text{O}^+]_{\\text{éq}}$ بالوحدة $\\text{mol}\\cdot\\text{m}^{-3}$ ثم بـ $\\text{mol}\\cdot\\text{L}^{-1}$.<br/>
                    2) احسب نسبة التقدم النهائي $\\tau$ لهذا التحول ثم استنتج قيمة الـ $pH$ المتوقعة للمحلول.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. استخراج $[\\text{H}_3\\text{O}^+]_{\\text{éq}}$:</b><br/>
                      من جدول تفاعل $\\text{HCOOH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HCOO}^- + \\text{H}_3\\text{O}^+$ يكون $[\\text{HCOO}^-]_{\\text{éq}} = [\\text{H}_3\\text{O}^+]_{\\text{éq}}$:<br/>
                      $$\\sigma_{\\text{éq}} = (\\lambda_{\\text{H}_3\\text{O}^+} + \\lambda_{\\text{HCOO}^-}) [\\text{H}_3\\text{O}^+]_{\\text{éq}} \\implies [\\text{H}_3\\text{O}^+]_{\\text{éq}} = \\frac{0.1618}{(35.0 + 5.46)\\times 10^{-3}} = \\frac{0.1618}{0.04046} \\approx 4.00\\text{ mol}\\cdot\\text{m}^{-3} = 4.00 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}$$
                      </p>
                      <p><b>2. حساب $\\tau$ واستنتاج $pH$:</b><br/>
                      • $\\tau = \\frac{[\\text{H}_3\\text{O}^+]_{\\text{éq}}}{C} = \\frac{4.00 \\times 10^{-3}}{5.00 \\times 10^{-2}} = 0.080 = 8.0\\% \\lt 1$ (تحول غير كلي).<br/>
                      • $pH = -\\log(4.00 \\times 10^{-3}) = 3 - \\log 4 \\approx 2.40$.</p>
                    </div>
                  </details>
                </div>
              </div>

`);
