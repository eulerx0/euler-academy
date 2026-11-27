window.EulerAcademy.registerExam('chem-04', `

        <div id="masterExam" class="mt-16 pt-12 border-t border-slate-800/80">
          <div class="glass rounded-3xl p-4 sm:p-8 border border-amber-500/30 shadow-2xl">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">التقييم الختامي الشامل • معيار د. الرياح (04)</span>
                  <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC • المدة: 1 ساعة 30 دقيقة</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-white">الفرض المحروس N°4: حالة توازن مجموعة كيميائية ($Q_r, K, \\sigma, \\tau$) (20/20)</h2>
              </div>
              <div class="px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <span class="text-xs text-slate-400 block">السلم الكامل</span>
                <span class="text-2xl font-black text-amber-400">20.00 / 20</span>
              </div>
            </div>

            <!-- Exam Text -->
            <div class="space-y-8 text-sm text-slate-200">
              <!-- Ex 1 -->
              <div class="bg-slate-950/90 p-4 sm:p-6 rounded-2xl border border-slate-800">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h4 class="font-extrabold text-cyan-400 text-base">التمرين الأول: تعبير خارج التفاعل $Q_r$ وإثبات ثبات $K$ لحمض اللاكتيك (5.00 نقط)</h4>
                  <span class="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg">5.00 ن</span>
                </div>
                <p class="leading-relaxed mb-3">
                  ندرس عند $25^\\circ\\text{C}$ محلولين مائيين لحمض اللاكتيك $\\text{CH}_3\\text{CH}(\\text{OH})\\text{COOH}$ (نرمز له اختصاراً بـ $\\text{HA}$)، حيث يتفاعل مع الماء وفق المعادلة:<br/>
                  $$\\text{HA}(\\text{aq}) + \\text{H}_2\\text{O}(\\ell) \\rightleftharpoons \\text{A}^-(\\text{aq}) + \\text{H}_3\\text{O}^+(\\text{aq})$$
                  • المحلول $(S_1)$ تركيزه $C_1 = 2.00 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$ له $pH_1 = 2.80$.<br/>
                  • المحلول $(S_2)$ محضّر بتخفيف $(S_1)$ $10$ مرات، تركيزه $C_2 = 2.00 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}$ وله $pH_2 = 3.34$.
                </p>

                <!-- Inline SVG Card: Qr(t) convergence to same K(T) -->
                <div class="my-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardExamChem4QrCurve">
                  <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span>📈 تقارب $Q_r(t)$ للمحلولين $(S_1)$ و $(S_2)$ نحو نفس ثابتة التوازن $K$</span>
                    <span class="text-[11px] font-mono text-cyan-400">25 °C — Qr,eq(S1) = Qr,eq(S2) = K</span>
                  </div>
                  <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                    <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 205" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <marker id="arrExC4_1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                          <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                        </marker>
                      </defs>
                      <line x1="62" y1="170" x2="616" y2="170" stroke="#475569" stroke-width="1.6" marker-end="url(#arrExC4_1)"/>
                      <line x1="72" y1="180" x2="72" y2="24" stroke="#475569" stroke-width="1.6" marker-end="url(#arrExC4_1)"/>
                      <text x="668" y="174" fill="#94a3b8" font-size="11" font-weight="bold" font-family="monospace" text-anchor="end">t (s)</text>
                      <text x="62" y="28" fill="#cbd5e1" font-size="11" font-weight="bold" font-family="monospace" text-anchor="end">Qr</text>

                      <!-- Horizontal asymptote K -->
                      <line x1="72" y1="62" x2="600" y2="62" stroke="#fbbf24" stroke-width="2" stroke-dasharray="6,4"/>
                      <text x="62" y="66" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="end">K</text>
                      <text x="470" y="50" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace">Meme limite K(25 C)</text>

                      <!-- Curve S1 -->
                      <path d="M 72 170 C 130 92, 220 66, 350 62 L 600 62" fill="none" stroke="#22d3ee" stroke-width="2.8"/>
                      <text x="155" y="88" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace">Essai (S1) : C1 = 2.0e-2</text>

                      <!-- Curve S2 -->
                      <path d="M 72 170 C 165 136, 280 78, 430 62 L 600 62" fill="none" stroke="#34d399" stroke-width="2.5" stroke-dasharray="5,3"/>
                      <text x="275" y="136" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace">Essai (S2) : C2 = 2.0e-3</text>
                    </svg>
                  </div>
                </div>

                <ol class="list-decimal list-inside space-y-1.5 text-slate-300 leading-relaxed">
                  <li>اكتب تعبير خارج التفاعل $Q_r$ لهذه المجموعة، معلّلاً غياب $\\text{H}_2\\text{O}$ من التعبير. <span class="text-emerald-400 font-mono">(0.75 ن)</span></li>
                  <li>باستعمال جدول التقدم لحجم $V$ من محلول تركيزه $C$، برهن على العلاقة: $K = \\frac{C\\,\\tau^2}{1 - \\tau} = \\frac{10^{-2pH}}{C - 10^{-pH}}$. <span class="text-emerald-400 font-mono">(1.50 ن)</span></li>
                  <li>احسب $(\\tau_1, K_1)$ للمحلول $(S_1)$ و $(\\tau_2, K_2)$ للمحلول $(S_2)$؛ ماذا تستنتج بشأن كل من $K$ و $\\tau$ عند التخفيف؟ <span class="text-emerald-400 font-mono">(1.75 ن)</span></li>
                  <li>أضفنا إلى حجم من $(S_1)$ قطعة من الكربون الصلب لا تتفاعل، أو خفّفنا عند نفس $T$: هل تتغير $K$؟ علّل؛ وإذا سخّنا المجموعة إلى $50^\\circ\\text{C}$ فهل تبقى $K$ نفسها بالضرورة؟ <span class="text-emerald-400 font-mono">(1.00 ن)</span></li>
                </ol>
              </div>

              <!-- Ex 2 -->
              <div class="bg-slate-950/90 p-4 sm:p-6 rounded-2xl border border-slate-800">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h4 class="font-extrabold text-emerald-400 text-base">التمرين الثاني: تحديد $\\tau$ و $K$ لحمض الإيثانويك بقياس المواصلة $G$ (5.00 نقط)</h4>
                  <span class="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg">5.00 ن</span>
                </div>
                <p class="leading-relaxed mb-3">
                  نصبّ في كأس حجمه $V = 200\\text{ mL}$ محلولاً مائياً لحمض الإيثانويك $\\text{CH}_3\\text{COOH}$ تركيزه المولي $C = 1.00 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$ عند $25^\\circ\\text{C}$. نغمر فيه خلية قياس المواصلة ثابتتها $k = \\frac{S}{L} = 1.25 \\times 10^{-2}\\text{ m}$ فنجد عند التوازن: <b>$G_{\\text{éq}} = 2.03 \\times 10^{-4}\\text{ S}$</b>.<br/>
                  <b>معطيات عند $25^\\circ\\text{C}$:</b> $\\lambda_{\\text{H}_3\\text{O}^+} = 35.0\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$، و $\\lambda_{\\text{CH}_3\\text{COO}^-} = 4.09\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$.
                </p>
                <ol class="list-decimal list-inside space-y-1.5 text-slate-300 leading-relaxed">
                  <li>اكتب معادلة التفاعل وأثبت تعبير الموصلية $\\sigma_{\\text{éq}}$ عند التوازن بدلالة $[\\text{H}_3\\text{O}^+]_{\\text{éq}}$ (مع تبرير إهمال $\\text{HO}^-$). <span class="text-emerald-400 font-mono">(1.25 ن)</span></li>
                  <li>احسب $\\sigma_{\\text{éq}}$ بالوحدة العالمية $\\text{S}\\cdot\\text{m}^{-1}$، ثم استنتج $[\\text{H}_3\\text{O}^+]_{\\text{éq}}$ بوحدة $\\text{mol}\\cdot\\text{m}^{-3}$ ثم بوحدة $\\text{mol}\\cdot\\text{L}^{-1}$. <span class="text-emerald-400 font-mono">(2.00 ن)</span></li>
                  <li>احسب نسبة التقدم النهائي $\\tau$ وتقدّم التوازن $x_{\\text{éq}}$، ثم استنتج ثابتة التوازن $K = Q_{r,\\text{éq}}$. <span class="text-emerald-400 font-mono">(1.75 ن)</span></li>
                </ol>
              </div>

              <!-- Ex 3 -->
              <div class="bg-slate-950/90 p-4 sm:p-6 rounded-2xl border border-slate-800">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h4 class="font-extrabold text-amber-400 text-base">التمرين الثالث: فخ القاعدة الضعيفة ووحدة الموصلية ($\\text{NH}_3$ — معيار د. الرياح) (5.00 نقط)</h4>
                  <span class="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg">5.00 ن</span>
                </div>
                <p class="leading-relaxed mb-3">
                  نحضّر عند $25^\\circ\\text{C}$ محلولاً مائياً للأمونياك $\\text{NH}_3(\\text{aq})$ تركيزه المولي البدئي $C_B = 4.00 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}$. يقيس جهاز الموصلية عند التوازن القيمة: <b>$\\sigma_{\\text{éq}} = 7.07 \\times 10^{-2}\\text{ mS}\\cdot\\text{cm}^{-1}$</b>.<br/>
                  <b>معطيات:</b> $\\lambda_{\\text{NH}_4^+} = 7.34\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$ و $\\lambda_{\\text{HO}^-} = 19.9\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$.
                </p>
                <ol class="list-decimal list-inside space-y-1.5 text-slate-300 leading-relaxed">
                  <li>اكتب معادلة تفاعل الأمونياك مع الماء وأنشئ جدول التقدم على حجم $V$ لتحديد العلاقة بين $[\\text{NH}_4^+]_{\\text{éq}}$ و $[\\text{HO}^-]_{\\text{éq}}$. <span class="text-emerald-400 font-mono">(1.25 ن)</span></li>
                  <li>حوّل $\\sigma_{\\text{éq}}$ بدقة إلى $\\text{S}\\cdot\\text{m}^{-1}$، ثم استنتج $[\\text{HO}^-]_{\\text{éq}}$ بوحدة $\\text{mol}\\cdot\\text{m}^{-3}$ ثم بوحدة $\\text{mol}\\cdot\\text{L}^{-1}$. <span class="text-emerald-400 font-mono">(1.75 ن)</span></li>
                  <li>احسب نسبة التقدم النهائي $\\tau$ لهذا التحول وثابتة التوازن $K = \\frac{[\\text{NH}_4^+]_{\\text{éq}}[\\text{HO}^-]_{\\text{éq}}}{[\\text{NH}_3]_{\\text{éq}}}$ المقرونة بالمعادلة. <span class="text-emerald-400 font-mono">(2.00 ن)</span></li>
                </ol>
              </div>

              <!-- Ex 4 -->
              <div class="bg-slate-950/90 p-4 sm:p-6 rounded-2xl border border-slate-800">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h4 class="font-extrabold text-purple-400 text-base">التمرين الرابع (توليفة): مقارنة حمضين ($K, \\tau$) وتعديلات المعادلة غير المتجانسة (5.00 نقط)</h4>
                  <span class="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg">5.00 ن</span>
                </div>
                <p class="leading-relaxed mb-3">
                  <b>الجزء الأول — مقارنة حمضين بنفس التركيز والتخفيف الموجه:</b> نحضر عند $25^\\circ\\text{C}$ وبنفس التركيز $C = 1.00 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$ محلولاً لحمض البنزويك ($K_1 = 6.30 \\times 10^{-5}$) ومحلولاً لحمض الإيثانويك ($K_2 = 1.80 \\times 10^{-5}$).
                </p>

                <!-- Inline SVG Card: tau(C) Comparison -->
                <div class="my-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardExamChem4Compare">
                  <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span>📊 مقارنة تطور نسبة التقدم $\\tau(C)$ لحمض البنزويك ($K_1$) وحمض الإيثانويك ($K_2$)</span>
                    <span class="text-[11px] font-mono text-purple-400">K1 = 6.30e-5  &gt;  K2 = 1.80e-5</span>
                  </div>
                  <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                    <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 205" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <marker id="arrExC4_2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                          <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                        </marker>
                      </defs>
                      <line x1="62" y1="172" x2="598" y2="172" stroke="#475569" stroke-width="1.6" marker-end="url(#arrExC4_2)"/>
                      <line x1="72" y1="184" x2="72" y2="24" stroke="#475569" stroke-width="1.6" marker-end="url(#arrExC4_2)"/>
                      <text x="668" y="176" fill="#94a3b8" font-size="11" font-weight="bold" font-family="monospace" text-anchor="end">C (mol/L)</text>
                      <text x="62" y="28" fill="#cbd5e1" font-size="11" font-weight="bold" font-family="monospace" text-anchor="end">tau (%)</text>

                      <!-- Curve 1: Benzoic (higher tau) -->
                      <path d="M 92 40 Q 170 86 300 116 T 590 140" fill="none" stroke="#22d3ee" stroke-width="2.8"/>
                      <text x="380" y="102" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace">C6H5COOH (K1 = 6.3e-5)</text>

                      <!-- Curve 2: Ethanoic (lower tau) -->
                      <path d="M 92 84 Q 180 132 315 150 T 590 162" fill="none" stroke="#fbbf24" stroke-width="2.6" stroke-dasharray="5,3"/>
                      <text x="380" y="144" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace">CH3COOH (K2 = 1.8e-5)</text>

                      <!-- Reference slice C = 0.010 mol/L -->
                      <line x1="220" y1="36" x2="220" y2="172" stroke="#34d399" stroke-width="1.4" stroke-dasharray="4,3"/>
                      <circle cx="220" cy="96" r="4.5" fill="#22d3ee"/>
                      <circle cx="220" cy="136" r="4.5" fill="#fbbf24"/>
                      <text x="220" y="190" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">C = 1.00e-2 mol/L</text>
                    </svg>
                  </div>
                </div>

                <ol class="list-decimal list-inside space-y-1.5 text-slate-300 leading-relaxed">
                  <li>قارن نظرياً بدون حساب قيمتي $\\tau_1$ و $\\tau_2$ عند $C = 1.00\\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$، ثم احسب كلاً من $(\\tau_1, pH_1)$ و $(\\tau_2, pH_2)$. <span class="text-emerald-400 font-mono">(2.00 ن)</span></li>
                  <li>إلى أي تركيز $C'$ يجب تخفيف محلول حمض الإيثانويك عند $25^\\circ\\text{C}$ لترتفع نسبة تقدمه النهائي إلى $\\tau' = 20.0\\%$؟ <span class="text-emerald-400 font-mono">(1.25 ن)</span></li>
                  <li><b>الجزء الثاني:</b> نعتبر التفاعل غير المتجانس عند $25^\\circ\\text{C}$:
                  $$\\text{Cu}(\\text{s}) + 2\\,\\text{Ag}^+(\\text{aq}) \\rightleftharpoons \\text{Cu}^{2+}(\\text{aq}) + 2\\,\\text{Ag}(\\text{s}) \\qquad K_0 = 2.5 \\times 10^{15}$$
                  اكتب تعبير $Q_r$، ثم حدّد ثوابت التوازن $K'$ للمعادلة المعكوسة و $K''$ للمعادلة المقسومة على $2$. <span class="text-emerald-400 font-mono">(1.75 ن)</span></li>
                </ol>
              </div>
            </div>

            <!-- Master Solution Toggle Button -->
            <div class="mt-8 text-center">
              <button type="button" onclick="window.EulerAcademy.toggleCollapsible('chem4-master-solution', this);"
                      class="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 hover:opacity-95 transition">
                🔓 إظهار التصحيح النموذجي الكامل وسلم التنقيط (20.00 / 20)
              </button>
            </div>

            <!-- Collapsible Master Solution -->
            <div id="chem4-master-solution" class="hidden mt-8 pt-8 border-t border-slate-800 space-y-8 text-xs text-slate-200 leading-relaxed">
              <!-- Solution Ex 1 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-cyan-400">حل التمرين الأول (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. تعبير خارج التفاعل $Q_r$ (0.75 ن):</strong><br/>
                  لأن الماء مذيب وفير يعوض بالعدد $1$ وتدخل فقط الأنواع المذابة بتراكيزها بوحدة $\\text{mol}\\cdot\\text{L}^{-1}$:
                  $$Q_r = \\frac{[\\text{A}^-]\\,[\\text{H}_3\\text{O}^+]}{[\\text{HA}]}$$
                  <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                  <p><strong class="text-white">2. إثبات العلاقة بدلالة $C$ و $\\tau$ والـ $pH$ (1.50 ن):</strong><br/>
                  من جدول التقدم لحجم $V$: $x_{\\max} = C\\,V$ و $x_{\\text{éq}} = \\tau\\,C\\,V$. ومنه:<br/>
                  $[\\text{H}_3\\text{O}^+]_{\\text{éq}} = [\\text{A}^-]_{\\text{éq}} = \\frac{x_{\\text{éq}}}{V} = C\\,\\tau = 10^{-pH}$، و $[\\text{HA}]_{\\text{éq}} = C(1 - \\tau) = C - 10^{-pH}$.<br/>
                  بتعويض التراكيز عند التوازن في $K = Q_{r,\\text{éq}}$:
                  $$K = \\frac{(C\\,\\tau)^2}{C(1 - \\tau)} = \\frac{C\\,\\tau^2}{1 - \\tau} = \\frac{10^{-2pH}}{C - 10^{-pH}}$$
                  <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><strong class="text-white">3. الحسابات العددية والاستنتاج (1.75 ن):</strong><br/>
                  • للمحلول $(S_1)$: $[\\text{H}_3\\text{O}^+]_1 = 10^{-2.80} \\approx 1.585 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1} \\implies \\tau_1 = \\frac{1.585 \\times 10^{-3}}{2.00 \\times 10^{-2}} = 7.92\\%$.<br/>
                  $K_1 = \\frac{2.00 \\times 10^{-2} \\times (0.0792)^2}{1 - 0.0792} \\approx 1.36 \\times 10^{-4}$.<br/>
                  • للمحلول $(S_2)$: $[\\text{H}_3\\text{O}^+]_2 = 10^{-3.34} \\approx 4.571 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1} \\implies \\tau_2 = \\frac{4.571 \\times 10^{-4}}{2.00 \\times 10^{-3}} = 22.85\\%$.<br/>
                  $K_2 = \\frac{2.00 \\times 10^{-3} \\times (0.2285)^2}{1 - 0.2285} \\approx 1.35 \\times 10^{-4}$.<br/>
                  <b>الاستنتاج:</b> $K_1 \\approx K_2 \\approx 1.36 \\times 10^{-4}$ أي أن <b>ثابتة التوازن $K$ لا تتعلق بالتركيز البدئي ولا بالتخفيف</b>، بينما <b>تزداد نسبة التقدم النهائي $\\tau$ عند التخفيف</b> ($\\tau_2 \\gt \\tau_1$). <span class="text-emerald-400 font-mono">(1.75 ن)</span></p>
                  <p><strong class="text-white">4. أثر المادة الخاملة والحرارة (1.00 ن):</strong><br/>
                  إضافة الكربون الصلب أو التخفيف عند نفس $T$ لا يغيران $K$ لأن $K$ تتعلق فقط بمعادلة التفاعل وبدرجة الحرارة $T$. أما عند التسخين إلى $50^\\circ\\text{C}$ فتتغير قيمة $K$ لأنها دالة لدرجة الحرارة $T$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 2 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-emerald-400">حل التمرين الثاني (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. المعادلة وتعبير $\\sigma_{\\text{éq}}$ (1.25 ن):</strong><br/>
                  $\\text{CH}_3\\text{COOH}(\\text{aq}) + \\text{H}_2\\text{O}(\\ell) \\rightleftharpoons \\text{CH}_3\\text{COO}^-(\\text{aq}) + \\text{H}_3\\text{O}^+(\\text{aq})$.<br/>
                  من جدول التقدم، وبما أن الوسط حمضي نهمل أيونات $\\text{HO}^-$ المتأتية من التحلل البروتوني للماء أمام $\\text{H}_3\\text{O}^+$، لدينا $[\\text{CH}_3\\text{COO}^-]_{\\text{éq}} = [\\text{H}_3\\text{O}^+]_{\\text{éq}}$:<br/>
                  $$\\sigma_{\\text{éq}} = \\left(\\lambda_{\\text{H}_3\\text{O}^+} + \\lambda_{\\text{CH}_3\\text{COO}^-}\\right)\\left[\\text{H}_3\\text{O}^+\\right]_{\\text{éq}}$$
                  <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">2. حساب $\\sigma_{\\text{éq}}$ ثم التركيزين (2.00 ن):</strong><br/>
                  • $\\sigma_{\\text{éq}} = \\frac{G_{\\text{éq}}}{k} = \\frac{2.03 \\times 10^{-4}}{1.25 \\times 10^{-2}} = 1.624 \\times 10^{-2}\\text{ S}\\cdot\\text{m}^{-1} = 16.24\\text{ mS}\\cdot\\text{m}^{-1}$.<br/>
                  • $\\lambda_1 + \\lambda_2 = (35.0 + 4.09) \\times 10^{-3} = 3.909 \\times 10^{-2}\\text{ S}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$.<br/>
                  • بالنظام العالمي: $[\\text{H}_3\\text{O}^+]_{\\text{éq}} = \\frac{1.624 \\times 10^{-2}}{3.909 \\times 10^{-2}} = 0.415\\text{ mol}\\cdot\\text{m}^{-3} = 4.15 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}$. <span class="text-emerald-400 font-mono">(2.00 ن)</span></p>
                  <p><strong class="text-white">3. حساب $\\tau$ و $x_{\\text{éq}}$ و $K$ (1.75 ن):</strong><br/>
                  • $x_{\\text{éq}} = [\\text{H}_3\\text{O}^+]_{\\text{éq}} \\cdot V = 4.15 \\times 10^{-4} \\times 0.200 = 8.30 \\times 10^{-5}\\text{ mol}$.<br/>
                  • $\\tau = \\frac{[\\text{H}_3\\text{O}^+]_{\\text{éq}}}{C} = \\frac{4.15 \\times 10^{-4}}{1.00 \\times 10^{-2}} = 4.15\\% \\lt 1$.<br/>
                  • $K = \\frac{C\\,\\tau^2}{1 - \\tau} = \\frac{1.00 \\times 10^{-2} \\times (0.0415)^2}{1 - 0.0415} \\approx 1.80 \\times 10^{-5}$. <span class="text-emerald-400 font-mono">(1.75 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 3 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-amber-400">حل التمرين الثالث (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. المعادلة وجدول التقدم (1.25 ن):</strong><br/>
                  $$\\text{NH}_3(\\text{aq}) + \\text{H}_2\\text{O}(\\ell) \\rightleftharpoons \\text{NH}_4^+(\\text{aq}) + \\text{HO}^-(\\text{aq})$$
                  مع الماء بوفرة، ينتج عند التوازن $n_{\\text{éq}}(\\text{NH}_4^+) = n_{\\text{éq}}(\\text{HO}^-) = x_{\\text{éq}}$، وبإهمال $\\text{H}_3\\text{O}^+$ يكون $[\\text{NH}_4^+]_{\\text{éq}} = [\\text{HO}^-]_{\\text{éq}} = \\frac{x_{\\text{éq}}}{V}$. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">2. تحويل $\\sigma_{\\text{éq}}$ وحساب $[\\text{HO}^-]_{\\text{éq}}$ (1.75 ن):</strong><br/>
                  • التحويل الحاسم: $1\\text{ mS}\\cdot\\text{cm}^{-1} = \\frac{10^{-3}\\text{ S}}{10^{-2}\\text{ m}} = 0.1\\text{ S}\\cdot\\text{m}^{-1}$؛ ومنه:
                  $$\\sigma_{\\text{éq}} = 7.07 \\times 10^{-2} \\times 0.1 = 7.07 \\times 10^{-3}\\text{ S}\\cdot\\text{m}^{-1}$$
                  • تعبير الموصلية: $\\sigma_{\\text{éq}} = (\\lambda_{\\text{NH}_4^+} + \\lambda_{\\text{HO}^-})[\\text{HO}^-]_{\\text{éq}}$ مع $\\lambda_{\\text{NH}_4^+} + \\lambda_{\\text{HO}^-} = (7.34 + 19.9) \\times 10^{-3} = 2.724 \\times 10^{-2}\\text{ S}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$.<br/>
                  • $[\\text{HO}^-]_{\\text{éq}} = \\frac{7.07 \\times 10^{-3}}{2.724 \\times 10^{-2}} \\approx 0.260\\text{ mol}\\cdot\\text{m}^{-3} = 2.60 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}$. <span class="text-emerald-400 font-mono">(1.75 ن)</span></p>
                  <p><strong class="text-white">3. حساب $\\tau$ وثابتة التوازن $K$ للقاعدة (2.00 ن):</strong><br/>
                  • $\\tau = \\frac{[\\text{HO}^-]_{\\text{éq}}}{C_B} = \\frac{2.60 \\times 10^{-4}}{4.00 \\times 10^{-3}} = 6.50\\% \\lt 1$.<br/>
                  • $K = \\frac{[\\text{NH}_4^+]_{\\text{éq}}[\\text{HO}^-]_{\\text{éq}}}{[\\text{NH}_3]_{\\text{éq}}} = \\frac{C_B\\,\\tau^2}{1 - \\tau} = \\frac{4.00 \\times 10^{-3} \\times (0.0650)^2}{1 - 0.0650} \\approx 1.81 \\times 10^{-5}$. <span class="text-emerald-400 font-mono">(2.00 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 4 -->
              <div class="space-y-2">
                <h5 class="text-sm font-extrabold text-purple-400">حل التمرين الرابع (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. المقارنة النظرية والحسابية لحمض البنزويك والإيثانويك (2.00 ن):</strong><br/>
                  • نظرياً: عند نفس $C$، لدينا $\\frac{\\tau^2}{1 - \\tau} = \\frac{K}{C}$؛ لأن $K_1 \\gt K_2$ والدالة $\\tau \\mapsto \\frac{\\tau^2}{1-\\tau}$ تزايدية قطعا على $]0,1[$ فإن <b>$\\tau_1 \\gt \\tau_2$</b> وبالتالي $[\\text{H}_3\\text{O}^+]_1 \\gt [\\text{H}_3\\text{O}^+]_2$ أي <b>$pH_1 \\lt pH_2$</b>.<br/>
                  • حسابياً (حل $C\\tau^2 + K\\tau - K = 0$):<br/>
                  – حمض البنزويك: $\\tau_1 = 7.63\\% \\implies [\\text{H}_3\\text{O}^+]_1 = 7.63 \\times 10^{-4}\\text{ mol/L} \\implies pH_1 = 3.12$.<br/>
                  – حمض الإيثانويك: $\\tau_2 = 4.15\\% \\implies [\\text{H}_3\\text{O}^+]_2 = 4.15 \\times 10^{-4}\\text{ mol/L} \\implies pH_2 = 3.38$. <span class="text-emerald-400 font-mono">(2.00 ن)</span></p>
                  <p><strong class="text-white">2. التخفيف الموجّه لبلوغ $\\tau' = 20.0\\%$ لحمض الإيثانويك (1.25 ن):</strong><br/>
                  عند ثبات $T$ تبقى $K_2 = 1.80 \\times 10^{-5}$ ثابتة:
                  $$C' = \\frac{K_2(1 - \\tau')}{\\tau'^2} = \\frac{1.80 \\times 10^{-5} \\times (1 - 0.200)}{(0.200)^2} = \\frac{1.80 \\times 10^{-5} \\times 0.800}{0.0400} = 3.60 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}$$
                  <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">3. التفاعل غير المتجانس وتغييرات المعادلة (1.75 ن):</strong><br/>
                  • تُستثنى الفلزات الصلبة $\\text{Cu}(\\text{s})$ و $\\text{Ag}(\\text{s})$ ويُحتفظ بالأس التناسبي $2$ لأيونات $\\text{Ag}^+$:
                  $$Q_r = \\frac{[\\text{Cu}^{2+}]}{[\\text{Ag}^+]^2}$$
                  • المعادلة المعكوسة: $K' = \\frac{1}{K_0} = \\frac{1}{2.5 \\times 10^{15}} = 4.0 \\times 10^{-16}$.<br/>
                  • المعادلة المقسومة على $2$: $K'' = \\sqrt{K_0} = \\sqrt{25 \\times 10^{14}} = 5.0 \\times 10^7$. <span class="text-emerald-400 font-mono">(1.75 ن)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

`);
