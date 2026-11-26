window.EulerAcademy.registerExam('chem-03', `

        <!-- Master Exam Bank: Devoir Surveillé Blanc N°3 Chimie (20/20) -->
        <div id="masterExam" class="scroll-mt-28 glass rounded-3xl p-5 sm:p-8 border border-emerald-500/40 bg-slate-900/90 shadow-2xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div class="flex items-center gap-2 mb-1.5">
                <span class="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  الفرض المحروس التجريبي الشامل N°3 • الكيمياء 2BAC PC
                </span>
                <span class="text-xs text-slate-400 font-mono">Devoir Surveillé N°3 Blanc (20/20)</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white">
                امتحان توليفي شامل في التحولات غير الكلية (برونشتد، الـ $pH$، نسبة التقدم $\\tau$، والتوازن الديناميكي)
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
            هذا الفرض التجريبي التوليفي مصمم لدرس <b>التحولات الكيميائية التي تحدث في منحيين (2BAC PC)</b> وفق صرامة التصحيح الوطني وفروض دكتور الرياح: برونشتد والأمفوليت، دقة $pH = -\\log[\\text{H}_3\\text{O}^+]$، التمييز الحاسم بين $\\tau$ لحمض وقاعدة، والربط بالموصلية $\\sigma$ والمواصلة $G$. (جميع التجارب عند $25^\\circ\\text{C}$ حيث $K_e = 10^{-14}$).
          </p>

          <!-- Exam Paper: 4 Exercises = 20.00 pts -->
          <div class="space-y-5">
            <!-- Exercice 1 (4.50 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-cyan-400">التمرين الأول (4.50 نقط): نظرية برونشتد، السلوك الأمفوليتي، وتخفيف الحمض مع الارتياب $\\Delta pH$</span>
                <span class="font-mono text-xs text-slate-400">4.50 نقط</span>
              </div>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>اكتب معادلة التفاعل حمض-قاعدة محدداً المزدوجتين المتدخلتين في كل حالة:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) تفاعل حمض الميثانويك $\\text{HCOOH}$ مع الماء. <span class="font-mono text-cyan-400 text-[11px]">(0.75 ن)</span></p>
                    <p>ب) بيّن بالمعادلات الدور الأمفوليتي لأيون هيدروجينوفوسفات $\\text{HPO}_4^{2-}$ عند تفاعله أولاً مع $\\text{H}_3\\text{O}^+$ وثانياً مع $\\text{HO}^-$ (المزدوجتان $\\text{H}_2\\text{PO}_4^-/\\text{HPO}_4^{2-}$ و $\\text{HPO}_4^{2-}/\\text{PO}_4^{3-}$). <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                  </div>
                </li>
                <li>نأخذ حجماً $V_1 = 25.0\\text{ mL}$ من محلول مخفف لحمض الكلوريدريك $(\\text{H}_3\\text{O}^+ + \\text{Cl}^-)$ قيمة $pH_1 = 2.00$، ونضيف إليه حجماً $V_e = 225.0\\text{ mL}$ من الماء المقطر. احسب التركيز الجديد $[\\text{H}_3\\text{O}^+]_2$ ثم قيمة $pH_2$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>إذا كانت دقة جهاز الـ $pH$-متر تعطي ارتياباً $\\Delta pH = \\pm 0.05$ حول القياس $pH_2 = 3.00$: حدّد المجال المحصور للتركيز الحقيقي $[\\text{H}_3\\text{O}^+]_2$ بـ ($\\text{mmol}\\cdot\\text{L}^{-1}$) وقدّر الارتياب النسبي التجريبي $\\frac{\\Delta C}{C}$ بالنسبة المئوية. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 2 (5.50 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-emerald-400">التمرين الثاني (5.50 نقط): تحول كلي مقابل محدود، نسبة التقدم $\\tau$، والتخفيف</span>
                <span class="font-mono text-xs text-slate-400">5.50 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                نحضّر حجمين متساويين $V = 200\\text{ mL}$ وبنفس التركيز المولي $C_1 = 2.00 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$، الأول لحمض الكلوريدريك $(\\text{H}_3\\text{O}^+ + \\text{Cl}^-)$ والثاني لحمض اللاكتيك $\\text{HA}$، فنحصل على منحنيي تطور التقدم $x(t)$ التاليين (الشكل 1)، كما نقيس لحمض اللاكتيك قيمة $pH_1 = 2.70$.
              </p>

              <div class="my-3 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardExamChem3Curves">
                <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span>📊 الشكل (1): مقارنة تطور التقدم $x(t)$ بين محلولي الحمضين بنفس التركيز $C_1$</span>
                  <span class="text-[11px] font-mono text-emerald-400">x_max = 4.00 mmol</span>
                </div>
                <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                  <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 205" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <marker id="arrCh3Ex" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                      </marker>
                    </defs>
                    <line x1="72" y1="175" x2="610" y2="175" stroke="#475569" stroke-width="1.6" marker-end="url(#arrCh3Ex)"/>
                    <line x1="80" y1="185" x2="80" y2="22" stroke="#475569" stroke-width="1.6" marker-end="url(#arrCh3Ex)"/>
                    <text x="620" y="179" fill="#94a3b8" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="start">t</text>
                    <text x="50" y="26" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">x(mmol)</text>

                    <line x1="80" y1="45" x2="590" y2="45" stroke="#22d3ee" stroke-width="1.3" stroke-dasharray="5,4"/>
                    <text x="72" y="49" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">4.00</text>
                    <line x1="80" y1="148" x2="590" y2="148" stroke="#fbbf24" stroke-width="1.3" stroke-dasharray="5,4"/>
                    <text x="72" y="152" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">0.40</text>

                    <path d="M 80 175 C 145 75, 225 47, 360 45 L 590 45" fill="none" stroke="#22d3ee" stroke-width="2.6"/>
                    <text x="455" y="34" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Courbe (1) : x_f = 4.00</text>

                    <path d="M 80 175 C 120 155, 190 149, 280 148 L 590 148" fill="none" stroke="#fbbf24" stroke-width="2.6"/>
                    <text x="455" y="136" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Courbe (2) : x_f = 0.40</text>
                  </svg>
                </div>
              </div>

              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>اكتب معادلة تفاعل حمض اللاكتيك $\\text{HA}$ مع الماء وأنشئ جدول التقدم الوصفي، محدداً قيمة التقدم الأقصى $x_{\\max}$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>احسب $[\\text{H}_3\\text{O}^+]_{f1}$ و $x_{f1}$ ثم نسبة التقدم النهائي $\\tau_1$ لمحلول حمض اللاكتيك، وانسب كل منحنى (1) و (2) للحمض الموافق. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>أعط التفسيراً الميكروسكوبياً الدقيقاً لثبات التقدم عند القيمة $x_{f1} = 0.40\\text{ mmol} \\lt x_{\\max}$ في المنحنى (2). <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>نخفّف محلول حمض اللاكتيك ليصبح تركيزه $C_2 = 2.00 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}$ فنقيس $pH_2 = 3.25$: احسب $\\tau_2$ ثم قارنها بـ $\\tau_1$ مبرزاً أثر التخفيف على حالة التوازن. <span class="font-mono text-cyan-400 text-[11px]">(1.75 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 3 (5.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-amber-400">التمرين الثالث (5.00 نقط): فخ د. الرياح — دراسة قاعدة الميثيل أمين بالـ $pH$ والربط بالموصلية $\\sigma$</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                نحضّر محلولاً مائياً لقاعدة الميثيل أمين $\\text{CH}_3\\text{NH}_2$ حجمه $V = 250\\text{ mL}$ وتركيزه المولي $C_B = 1.00 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$ عند $25^\\circ\\text{C}$، فنقيس قيمة $pH = 11.30$.<br/>
                تُعطى: $K_e = 10^{-14}$، $\\lambda_{\\text{CH}_3\\text{NH}_3^+} = 5.8\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$، $\\lambda_{\\text{HO}^-} = 20.0\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$.
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>اكتب معادلة تفاعل $\\text{CH}_3\\text{NH}_2$ مع الماء محدداً المزدوجتين المتدخلتين، وأنشئ جدول التقدم ثم احسب $x_{\\max}$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>احسب $[\\text{H}_3\\text{O}^+]_{\\text{éq}}$ واستنتج $[\\text{HO}^-]_{\\text{éq}}$، ثم حدّد $x_f$ ونسبة التقدم النهائي $\\tau$ مبيّناً هل التحول كلي أم محدود. <span class="font-mono text-cyan-400 text-[11px]">(2.00 ن)</span></li>
                <li>بإهمال أيونات $\\text{H}_3\\text{O}^+$ أمام $\\text{HO}^-$، احسب الموصلية الكهربائية المتوقعة $\\sigma_{\\text{éq}}$ للمحلول بوحدة $\\text{mS}\\cdot\\text{m}^{-1}$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 4 (5.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-emerald-500/30 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-purple-400">المسألة التوليفية الرابعة (5.00 نقط): مقارنة ثلاثة أحماض بنفس التركيز بالموصلية والـ $pH$</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                نتوفر على ثلاثة محاليل مائية $(S_1)$, $(S_2)$, $(S_3)$ محضّرة عند التركيز نفسه $C = 5.00 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}$ وبحجم $V_S = 100\\text{ mL}$ لكل منها:<br/>
                • $(S_1)$: محلول حمض البروبانويك $\\text{C}_2\\text{H}_5\\text{COOH}$ قيمة الـ $pH$ له هي $pH_1 = 3.60$.<br/>
                • $(S_2)$: محلول حمض البنزويك $\\text{C}_6\\text{H}_5\\text{COOH}$ نقيس مواصلته بخلية ثابتتها $k = 1.00 \\times 10^{-2}\\text{ m}$ فنجد $G_2 = 0.1912\\text{ mS}$ ($\\lambda_{\\text{H}_3\\text{O}^+} = 35.0$ و $\\lambda_{\\text{C}_6\\text{H}_5\\text{COO}^-} = 3.24\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$).<br/>
                • $(S_3)$: محلول حمض النيتريك $\\text{HNO}_3$ قيمة الـ $pH$ له هي $pH_3 = 2.30$.
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>احسب نسبة التقدم النهائي $\\tau_1$ لمحلول حمض البروبانويك $(S_1)$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>استخرج الموصلية $\\sigma_2$ ثم التركيز الفعلي $[\\text{H}_3\\text{O}^+]_{\\text{éq},2}$ لمحلول حمض البنزويك $(S_2)$ (انتبه للوحدات!)، واستنتج $\\tau_2$ وقيمة $pH_2$. <span class="font-mono text-cyan-400 text-[11px]">(2.25 ن)</span></li>
                <li>احسب $\\tau_3$ لحمض النيتريك، ثم أعط تراكيز جميع الأنواع المتعايشة عند التوازن في محلول حمض البنزويك $(S_2)$ (دون الماء). <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
              </ol>
            </div>
          </div>

          <!-- Collapsible Master Solution & Marking Scheme -->
          <div class="border border-emerald-500/30 rounded-2xl overflow-hidden bg-slate-950/90 mt-6">
            <button type="button" aria-expanded="false" onclick="window.EulerAcademy.toggleCollapsible('chem3-master-solution', this);" class="w-full text-right p-4 sm:p-5 bg-gradient-to-r from-emerald-500/20 via-slate-900 to-cyan-500/20 hover:from-emerald-500/30 text-xs sm:text-sm font-bold text-emerald-300 flex items-center justify-between transition">
              <span class="flex items-center gap-2">
                <span>🏆</span>
                <span>إظهار / إخفاء عناصر الإجابة النموذجية وسلم التنقيط الرسمي المفصل (20 / 20 نقطة)</span>
              </span>
              <span class="font-mono text-xs px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center gap-1.5"><span>Corrigé Officiel</span><span class="sol-chevron inline-block transition-transform">▼</span></span>
            </button>

            <div id="chem3-master-solution" class="hidden p-4 sm:p-6 border-t border-slate-800 space-y-6 text-xs text-slate-300 leading-relaxed">
              <!-- Solution Ex 1 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-cyan-400">حل التمرين الأول (4.50 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. أ) حمض الميثانويك مع الماء (0.75 ن):</strong><br/>
                  $\\text{HCOOH}(\\text{aq}) + \\text{H}_2\\text{O}(\\ell) \\rightleftharpoons \\text{HCOO}^-(\\text{aq}) + \\text{H}_3\\text{O}^+(\\text{aq})$ — المزدوجتان: $(\\text{HCOOH}/\\text{HCOO}^-)$ و $(\\text{H}_3\\text{O}^+/\\text{H}_2\\text{O})$. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                  <p><strong class="text-white">1. ب) السلوك الأمفوليتي لـ $\\text{HPO}_4^{2-}$ (1.00 ن):</strong><br/>
                  • كقاعدة مع $\\text{H}_3\\text{O}^+$: $\\text{HPO}_4^{2-}(\\text{aq}) + \\text{H}_3\\text{O}^+(\\text{aq}) \\rightleftharpoons \\text{H}_2\\text{PO}_4^-(\\text{aq}) + \\text{H}_2\\text{O}(\\ell)$.<br/>
                  • كحمض مع $\\text{HO}^-$: $\\text{HPO}_4^{2-}(\\text{aq}) + \\text{HO}^-(\\text{aq}) \\rightleftharpoons \\text{PO}_4^{3-}(\\text{aq}) + \\text{H}_2\\text{O}(\\ell)$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">2. تخفيف محلول حمض كلوريدريك (1.25 ن):</strong><br/>
                  الحجم الكلي $V_2 = 25.0 + 225.0 = 250.0\\text{ mL}$ (تخفيف $\\times 10$). بانحفاظ المادة:<br/>
                  $[\\text{H}_3\\text{O}^+]_2 = \\frac{10^{-2.00} \\times 25.0}{250.0} = 1.00 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1} \\implies pH_2 = -\\log(1.00 \\times 10^{-3}) = 3.00$. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">3. مجال التركيز والارتياب النسبي مع $\\Delta pH = \\pm 0.05$ (1.50 ن):</strong><br/>
                  • $2.95 \\le pH \\le 3.05 \\implies 10^{-3.05} \\le [\\text{H}_3\\text{O}^+] \\le 10^{-2.95}$؛ أي $0.891\\text{ mmol}\\cdot\\text{L}^{-1} \\le [\\text{H}_3\\text{O}^+] \\le 1.122\\text{ mmol}\\cdot\\text{L}^{-1}$.<br/>
                  • الارتياب النسبي: $\\frac{1.122 - 1.000}{1.000} \\approx 12\\%$ (أو بالصيغة $\\ln 10 \\cdot \\Delta pH = 2.303 \\times 0.05 \\approx 11.5\\%$). <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 2 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-emerald-400">حل التمرين الثاني (5.50 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. المعادلة وجدول التقدم و $x_{\\max}$ (1.25 ن):</strong><br/>
                  $\\text{HA}(\\text{aq}) + \\text{H}_2\\text{O}(\\ell) \\rightleftharpoons \\text{A}^-(\\text{aq}) + \\text{H}_3\\text{O}^+(\\text{aq})$.<br/>
                  باعتبار الماء مذيباً بوفرة: $x_{\\max} = C_1 \\cdot V = 2.00 \\times 10^{-2} \\times 0.200 = 4.00 \\times 10^{-3}\\text{ mol} = 4.00\\text{ mmol}$. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">2. حساب $x_{f1}$ و $\\tau_1$ وتحديد المنحنيات (1.50 ن):</strong><br/>
                  • $[\\text{H}_3\\text{O}^+]_{f1} = 10^{-2.70} \\approx 2.00 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1} \\implies x_{f1} = 2.00 \\times 10^{-3} \\times 0.200 = 0.40\\text{ mmol}$.<br/>
                  • $\\tau_1 = \\frac{x_{f1}}{x_{\\max}} = \\frac{0.40}{4.00} = 0.100 = 10.0\\% \\lt 1$.<br/>
                  • المنحنى $(1)$ ($x_f = 4.00\\text{ mmol}, \\tau = 1$) لحمض الكلوريدريك (تحول كلي)، والمنحنى $(2)$ ($x_f = 0.40\\text{ mmol}$) لحمض اللاكتيك (تحول محدود). <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><strong class="text-white">3. التفسير الميكروسكوبي (1.00 ن):</strong><br/>
                  تثبت القيمة $x_{f1}$ عند $0.40\\text{ mmol}$ لأن المجموعة تبلغ حالة <b>توازن كيميائي ديناميكي</b> تتساوى فيه سرعتا التفاعلين المباشر والمعاكس (نفس عدد التصادمات الفعالة في المنحيين خلال نفس المدة الزمنية). <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">4. التخفيف إلى $C_2 = 2.00 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}$ ($pH_2 = 3.25$) (1.75 ن):</strong><br/>
                  $$\\tau_2 = \\frac{10^{-pH_2}}{C_2} = \\frac{10^{-3.25}}{2.00 \\times 10^{-3}} = \\frac{5.62 \\times 10^{-4}}{2.00 \\times 10^{-3}} \\approx 28.1\\% \\gt \\tau_1$$
                  التخفيف يزيح حالة التوازن في المنحى المباشر فترتفع نسبة التقدم النهائي $\\tau$. <span class="text-emerald-400 font-mono">(1.75 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 3 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-amber-400">حل التمرين الثالث (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. المعادلة وجدول التقدم و $x_{\\max}$ (1.50 ن):</strong><br/>
                  $\\text{CH}_3\\text{NH}_2(\\text{aq}) + \\text{H}_2\\text{O}(\\ell) \\rightleftharpoons \\text{CH}_3\\text{NH}_3^+(\\text{aq}) + \\text{HO}^-(\\text{aq})$.<br/>
                  المزدوجتان: $(\\text{CH}_3\\text{NH}_3^+/\\text{CH}_3\\text{NH}_2)$ و $(\\text{H}_2\\text{O}/\\text{HO}^-)$. و $x_{\\max} = C_B V = 1.00 \\times 10^{-2} \\times 0.250 = 2.50\\text{ mmol}$. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><strong class="text-white">2. حساب $[\\text{HO}^-]_{\\text{éq}}$، $x_f$، و $\\tau$ للقاعدة (2.00 ن):</strong><br/>
                  • $[\\text{H}_3\\text{O}^+]_{\\text{éq}} = 10^{-11.30} \\approx 5.01 \\times 10^{-12}\\text{ mol}\\cdot\\text{L}^{-1}$.<br/>
                  • من $K_e = [\\text{H}_3\\text{O}^+][\\text{HO}^-]$: $[\\text{HO}^-]_{\\text{éq}} = \\frac{10^{-14}}{10^{-11.30}} = 10^{-2.70} \\approx 2.00 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}$.<br/>
                  • $x_f = [\\text{HO}^-]_{\\text{éq}} \\cdot V = 2.00 \\times 10^{-3} \\times 0.250 = 0.50\\text{ mmol}$.<br/>
                  • $\\tau = \\frac{x_f}{x_{\\max}} = \\frac{0.50}{2.50} = 0.200 = 20.0\\% \\lt 1 \\implies$ <b>التحول غير كلي (محدود)</b>. <span class="text-emerald-400 font-mono">(2.00 ن)</span></p>
                  <p><strong class="text-white">3. الموصلية الكهربائية $\\sigma_{\\text{éq}}$ (1.50 ن):</strong><br/>
                  من جدول التقدم $[\\text{CH}_3\\text{NH}_3^+]_{\\text{éq}} = [\\text{HO}^-]_{\\text{éq}} = 2.00 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1} = 2.00\\text{ mol}\\cdot\\text{m}^{-3}$:<br/>
                  $$\\sigma_{\\text{éq}} = (\\lambda_{\\text{CH}_3\\text{NH}_3^+} + \\lambda_{\\text{HO}^-})[\\text{HO}^-]_{\\text{éq}} = (5.8 + 20.0) \\times 2.00 = 51.6\\text{ mS}\\cdot\\text{m}^{-1} = 5.16 \\times 10^{-2}\\text{ S}\\cdot\\text{m}^{-1}$$
                  <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 4 -->
              <div class="space-y-2">
                <h5 class="text-sm font-extrabold text-purple-400">حل المسألة التوليفية الرابعة (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. حمض البروبانويك $(S_1)$ (1.25 ن):</strong><br/>
                  $[\\text{H}_3\\text{O}^+]_{\\text{éq},1} = 10^{-3.60} \\approx 2.51 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1} \\implies \\tau_1 = \\frac{2.51 \\times 10^{-4}}{5.00 \\times 10^{-3}} = 5.02\\% \\lt 1$. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">2. استغلال المواصلة $G_2$ لحمض البنزويك $(S_2)$ (2.25 ن):</strong><br/>
                  • $\\sigma_2 = \\frac{G_2}{k} = \\frac{0.1912\\text{ mS}}{1.00 \\times 10^{-2}\\text{ m}} = 19.12\\text{ mS}\\cdot\\text{m}^{-1}$.<br/>
                  • بما أن $\\sigma_2 = (\\lambda_{\\text{H}_3\\text{O}^+} + \\lambda_{\\text{C}_6\\text{H}_5\\text{COO}^-})[\\text{H}_3\\text{O}^+]_{\\text{éq},2}$:
                  $$[\\text{H}_3\\text{O}^+]_{\\text{éq},2} = \\frac{19.12}{35.0 + 3.24} = \\frac{19.12}{38.24} = 0.500\\text{ mol}\\cdot\\text{m}^{-3} = 5.00 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}$$
                  • $\\tau_2 = \\frac{5.00 \\times 10^{-4}}{5.00 \\times 10^{-3}} = 10.0\\% \\lt 1$، و $pH_2 = -\\log(5.00 \\times 10^{-4}) = 3.30$. <span class="text-emerald-400 font-mono">(2.25 ن)</span></p>
                  <p><strong class="text-white">3. حمض النيتريك وجرد التراكيز في $(S_2)$ (1.50 ن):</strong><br/>
                  • لحمض النيتريك: $[\\text{H}_3\\text{O}^+]_3 = 10^{-2.30} \\approx 5.01 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1} \\implies \\tau_3 = 1.00$ (تحول <b>كلي</b>!).<br/>
                  • في محلول حمض البنزويك $(S_2)$:<br/>
                  – $[\\text{H}_3\\text{O}^+]_{\\text{éq}} = [\\text{C}_6\\text{H}_5\\text{COO}^-]_{\\text{éq}} = 5.00 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}$.<br/>
                  – $[\\text{C}_6\\text{H}_5\\text{COOH}]_{\\text{éq}} = C - [\\text{H}_3\\text{O}^+]_{\\text{éq}} = 4.50 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}$.<br/>
                  – $[\\text{HO}^-]_{\\text{éq}} = \\frac{K_e}{[\\text{H}_3\\text{O}^+]_{\\text{éq}}} = \\frac{10^{-14}}{5.00 \\times 10^{-4}} = 2.00 \\times 10^{-11}\\text{ mol}\\cdot\\text{L}^{-1}$. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

`);
