window.EulerAcademy.registerAxis('chem-04', 'c04-ax2', `

              <div class="space-y-6">
                <!-- 1. Conductometry at Equilibrium & Influence of C and K on tau -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">1. تحديد $Q_{r,\\text{éq}}$ بواسطة الموصلية $\\sigma$ وتأثير $C$ و $K$ على نسبة التقدم النهائي $\\tau$</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">⚡ أ) المواصلة $G$ والموصلية $\\sigma$ عند التوازن (قانون كولروش):</b>
                      • ترتبط مواصلة جزء من محلول بين صفيحتين مساحة كل منهما $S$ والمسافة بينهما $L$ بالموصلية $\\sigma$ وفق:
                      $$G = k \\cdot \\sigma = \\frac{S}{L}\\,\\sigma$$
                      <div class="text-[11px] text-slate-400 text-center -mt-1 mb-1">($G$ بالـ $\\text{S}$، $\\sigma$ بالـ $\\text{S}\\cdot\\text{m}^{-1}$، و $k$ بالـ $\\text{m}$)</div>
                      • عند التوازن لتفاعل حمض ضعيف $\\text{HA} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{A}^- + \\text{H}_3\\text{O}^+$ (بإهمال $\\text{HO}^-$):
                      $$\\sigma_{\\text{éq}} = \\left(\\lambda_{\\text{H}_3\\text{O}^+} + \\lambda_{\\text{A}^-}\\right)\\cdot\\left[\\text{H}_3\\text{O}^+\\right]_{\\text{éq}}$$
                      • <b>المسار التحويلي الصارم للتركيز:</b>
                      <div class="text-center my-1 font-mono text-amber-300" dir="ltr">$\\left[\\text{H}_3\\text{O}^+\\right]_{\\text{éq}(\\text{mol}\\cdot\\text{m}^{-3})} = \\frac{\\sigma_{\\text{éq}}}{\\lambda_{\\text{H}_3\\text{O}^+} + \\lambda_{\\text{A}^-}} \\xrightarrow{\\times 10^{-3}} \\text{mol}\\cdot\\text{L}^{-1}$</div>
                      ثم نستخدم القيمة بـ $\\text{mol}\\cdot\\text{L}^{-1}$ لحساب $\\tau = \\frac{[\\text{H}_3\\text{O}^+]_{\\text{éq}}}{C}$ و $K = \\frac{C\\,\\tau^2}{1-\\tau}$.
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">📈 ب) كيف تتأثر نسبة التقدم النهائي $\\tau$ بـ $K$ وبـ التركيز البدئي $C$؟</b>
                      انطلاقاً من العلاقة التي أثبتناها لتفاعل حمض ضعيف مع الماء:
                      $$\\frac{\\tau^2}{1 - \\tau} = \\frac{K}{C}$$
                      وبما أن الدالة $g(\\tau) = \\frac{\\tau^2}{1 - \\tau}$ تزايدية قطعا على $]0, 1[$، نستنتج قانونين جوهريين:<br/>
                      1) <b>تأثير ثابتة التوازن $K$ (عند نفس $C$):</b> كلما كانت <b>$K$ أكبر</b>، كانت نسبة التقدم النهائي <b>$\\tau$ أكبر</b> (تفاعل أكثر تقدماً نحو النواتج).<br/>
                      2) <b>تأثير التركيز البدئي $C$ (عند نفس $K$ أي نفس الحمض ونفس $T$):</b> كلما <b>نقص التركيز البدئي $C$</b> (عند التخفيف)، كبر الخارج $\\frac{K}{C}$ وبالتالي <b>ازدادت نسبة التقدم النهائي $\\tau$</b>!
                    </div>
                  </div>

                  <!-- SVG Diagram: tau vs concentration curves for K1 > K2 + Conductometry conversion pipeline -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardConductometryEquilibrium">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📊 تغيّر $\\tau$ بدلالة التركيز البدئي $C$ لقيمتين $K_1 \\gt K_2$ وسلسلة تحويل الوحدات في قياس الموصلية</span>
                      <span class="text-[11px] font-mono text-amber-400">tau^2/(1-tau) = K / C</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <marker id="arrC4Cond" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                        </defs>

                        <!-- Left Panel: tau vs C for K1 > K2 -->
                        <rect x="12" y="14" width="388" height="212" rx="10" fill="rgba(15,23,42,0.72)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="206" y="34" fill="#6ee7b7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Influence de K et C sur tau</text>

                        <line x1="56" y1="196" x2="380" y2="196" stroke="#475569" stroke-width="1.6" marker-end="url(#arrC4Cond)"/>
                        <line x1="66" y1="208" x2="66" y2="50" stroke="#475569" stroke-width="1.6" marker-end="url(#arrC4Cond)"/>
                        <text x="382" y="212" fill="#94a3b8" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">C (mol/L)</text>
                        <text x="58" y="56" fill="#cbd5e1" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">tau</text>

                        <!-- tau = 1 dashed asymptote -->
                        <line x1="66" y1="68" x2="368" y2="68" stroke="#475569" stroke-width="1" stroke-dasharray="4,3"/>
                        <text x="58" y="72" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="end">1</text>

                        <!-- Curve K1 (larger K -> higher tau) -->
                        <path d="M 76 74 Q 130 108 210 132 T 366 154" fill="none" stroke="#22d3ee" stroke-width="2.8"/>
                        <text x="275" y="128" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace">Acide 1 (K1 grand)</text>

                        <!-- Curve K2 (smaller K -> lower tau) -->
                        <path d="M 76 108 Q 135 152 225 170 T 366 182" fill="none" stroke="#fbbf24" stroke-width="2.6" stroke-dasharray="5,3"/>
                        <text x="255" y="166" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace">Acide 2 (K2 petit)</text>

                        <!-- Vertical slice at same C0 -->
                        <line x1="168" y1="68" x2="168" y2="196" stroke="#34d399" stroke-width="1.2" stroke-dasharray="3,3"/>
                        <circle cx="168" cy="120" r="4" fill="#22d3ee"/>
                        <circle cx="168" cy="158" r="4" fill="#fbbf24"/>
                        <text x="168" y="212" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">C0 identique</text>

                        <!-- Right Panel: Conductometry Pipeline -->
                        <rect x="414" y="14" width="254" height="212" rx="10" fill="rgba(15,23,42,0.85)" stroke="#334155" stroke-width="1.3"/>
                        <text x="541" y="38" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Pipeline Conductimetrie</text>
                        <line x1="428" y1="50" x2="654" y2="50" stroke="#334155" stroke-width="1"/>

                        <rect x="434" y="60" width="214" height="26" rx="6" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" stroke-width="1"/>
                        <text x="541" y="77" fill="#bae6fd" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">1. G = k * sigma =&gt; sigma (S/m)</text>

                        <rect x="434" y="96" width="214" height="26" rx="6" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" stroke-width="1"/>
                        <text x="541" y="113" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">2. [X] = sigma / sum(lambda_i) mol/m3</text>

                        <rect x="434" y="132" width="214" height="26" rx="6" fill="rgba(244,63,94,0.14)" stroke="#f43f5e" stroke-width="1.2"/>
                        <text x="541" y="149" fill="#fecdd3" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">3. Convertir x 10^-3 =&gt; mol/L !</text>

                        <rect x="434" y="168" width="214" height="26" rx="6" fill="rgba(52,211,153,0.12)" stroke="#34d399" stroke-width="1"/>
                        <text x="541" y="185" fill="#bbf7d0" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">4. Calculer tau puis K = Qr,eq</text>

                        <text x="541" y="216" fill="#94a3b8" font-size="9.5" font-family="monospace" text-anchor="middle">1 mS.m^2/mol = 10^-3 S.m^2/mol</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">فخاخ الموصلية وخلط العوامل</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «وحدات $\\sigma$ و $\\lambda_i$ ($\\text{mS}\\cdot\\text{cm}^{-1}$ و $\\text{mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$)!»</b>
                      انتبه لتحويلات الوحدات قبل القسمة:<br/>
                      • $1\\text{ mS}\\cdot\\text{m}^{-1} = 10^{-3}\\text{ S}\\cdot\\text{m}^{-1}$، أما <b>$1\\text{ mS}\\cdot\\text{cm}^{-1} = 10^{-1}\\text{ S}\\cdot\\text{m}^{-1}$</b> (أي $0.1\\text{ S}\\cdot\\text{m}^{-1}$)!<br/>
                      • $1\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1} = 10^{-3}\\text{ S}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «ثابتة الخلية $k = \\frac{S}{L}$ ($\\text{m}$) مقابل $K_{\\text{cell}} = \\frac{L}{S}$ ($\\text{m}^{-1}$)!»</b>
                      تأكد من وحدة ثابتة الخلية في نص التمرين: إذا كانت بـ $\\text{m}$ أو $\\text{cm}$ فالعلاقة هي $G = k\\cdot\\sigma \\implies \\sigma = \\frac{G}{k}$؛ وإذا كانت بـ $\\text{m}^{-1}$ أو $\\text{cm}^{-1}$ فالعلاقة هي $\\sigma = K_{\\text{cell}}\\cdot G$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «الأيونات المتفرجة وأثرها على الموصلية الكلية $\\sigma$»</b>
                      إذا أُنتج التفاعل من محلول مملح أو عند وجود أيونات خاملة (مثل $\\text{Na}^+$ أو $\\text{Cl}^-$ في حالة معايرة أو مزج)، لا تحسب إلا الأيونات الناتجة عند كتابة $\\sigma_{\\text{éq}}$ إذا حُذف المتفرج من الحالة البدئية؛ لكن في محلول مخفف لـ $\\text{HA}$ في الماء الخالص لا توجد سوى أيونات $\\text{H}_3\\text{O}^+$ و $\\text{A}^-$.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «التخفيف يرفع $\\tau$ ويبقي $K$ ثابتة بينما تنخفض $[\\text{H}_3\\text{O}^+]_{\\text{éq}}$ (يرتفع $pH$)!»</b>
                      لا تخلط بين $\\tau$ (نسبة التقدم التي <b>تزداد</b> عند التخفيف) و التركيز $[\\text{H}_3\\text{O}^+]_{\\text{éq}}$ (الذي <b>ينقص</b> عند التخفيف فيرتفع $pH$ نحو $7$)!
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1 (كلاسيكي وطني): تحديد $\\tau$ و $K = Q_{r,\\text{éq}}$ لحمض البروبانويك عبر قياس المواصلة $G$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نغمر عند $25^\\circ\\text{C}$ خلية قياس المواصلة ثابتتها $k = \\frac{S}{L} = 1.00 \\times 10^{-2}\\text{ m}$ في محلول مائي لحمض البروبانويك $\\text{C}_2\\text{H}_5\\text{COOH}$ تركيزه المولي $C = 1.00 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$، فتستقر المواصلة عند التوازن في القيمة $G_{\\text{éq}} = 1.39 \\times 10^{-4}\\text{ S}$.<br/>
                      تُعطى عند $25^\\circ\\text{C}$: $\\lambda_{\\text{H}_3\\text{O}^+} = 35.0\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$ و $\\lambda_{\\text{C}_2\\text{H}_5\\text{COO}^-} = 3.58\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$.<br/>
                      <b>1.</b> اكتب معادلة تفاعل حمض البروبانويك مع الماء وأثبت تعبير الموصلية $\\sigma_{\\text{éq}}$ بدلالة $[\\text{H}_3\\text{O}^+]_{\\text{éq}}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> استنتج قيمة التركيز المولي $[\\text{H}_3\\text{O}^+]_{\\text{éq}}$ بوحدة $\\text{mol}\\cdot\\text{m}^{-3}$ ثم بوحدة $\\text{mol}\\cdot\\text{L}^{-1}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>3.</b> احسب نسبة التقدم النهائي $\\tau$ ثم استنتج قيمة ثابتة التوازن $K = Q_{r,\\text{éq}}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. المعادلة وتعبير $\\sigma_{\\text{éq}}$ (0.50 ن):</b>
                      $$\\text{C}_2\\text{H}_5\\text{COOH}(\\text{aq}) + \\text{H}_2\\text{O}(\\ell) \\rightleftharpoons \\text{C}_2\\text{H}_5\\text{COO}^-(\\text{aq}) + \\text{H}_3\\text{O}^+(\\text{aq})$$
                      من جدول التقدم (وبإهمال $\\text{HO}^-$): $[\\text{C}_2\\text{H}_5\\text{COO}^-]_{\\text{éq}} = [\\text{H}_3\\text{O}^+]_{\\text{éq}}$، ومنه:
                      $$\\sigma_{\\text{éq}} = \\left(\\lambda_{\\text{H}_3\\text{O}^+} + \\lambda_{\\text{C}_2\\text{H}_5\\text{COO}^-}\\right)\\left[\\text{H}_3\\text{O}^+\\right]_{\\text{éq}}$$
                      </p>
                      <p><b>2. حساب الموصلية ثم التركيزين (0.75 ن):</b><br/>
                      • $\\sigma_{\\text{éq}} = \\frac{G_{\\text{éq}}}{k} = \\frac{1.39 \\times 10^{-4}}{1.00 \\times 10^{-2}} = 1.39 \\times 10^{-2}\\text{ S}\\cdot\\text{m}^{-1}$.<br/>
                      • جمع $\\lambda$: $\\lambda_1 + \\lambda_2 = (35.0 + 3.58) \\times 10^{-3} = 3.858 \\times 10^{-2}\\text{ S}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$.<br/>
                      • التركيز بالنظام العالمي: $[\\text{H}_3\\text{O}^+]_{\\text{éq}} = \\frac{1.39 \\times 10^{-2}}{3.858 \\times 10^{-2}} \\approx 0.360\\text{ mol}\\cdot\\text{m}^{-3} = 3.60 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}$!</p>
                      <p><b>3. حساب $\\tau$ و $K$ (0.75 ن):</b><br/>
                      • $\\tau = \\frac{[\\text{H}_3\\text{O}^+]_{\\text{éq}}}{C} = \\frac{3.60 \\times 10^{-4}}{1.00 \\times 10^{-2}} = 3.60\\% \\lt 1$.<br/>
                      • $K = \\frac{C\\,\\tau^2}{1 - \\tau} = \\frac{1.00 \\times 10^{-2} \\times (0.0360)^2}{1 - 0.0360} \\approx 1.34 \\times 10^{-5}$.</p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: مقارنة حمضين لهما نفس التركيز البدئي $C$ عبر $K$ و $\\tau$ والـ $pH$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نحضّر عند $25^\\circ\\text{C}$ وبنفس التركيز $C = 1.00 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$ محلولاً لحمض الميثانويك $\\text{HCOOH}$ (ثابتة توازنه مع الماء $K_1 = 1.8 \\times 10^{-4}$) ومحلولاً لحمض الإيثانويك $\\text{CH}_3\\text{COOH}$ ($K_2 = 1.8 \\times 10^{-5}$).<br/>
                      <b>1.</b> بدون حساب عددي، أي الحمضين يحقق نسبة تقدم نهائي $\\tau$ أكبر وأي المحلولين له $pH$ أصغر؟ علّل. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> تحقّق حسابياً بإيجاد $\\tau_1, pH_1$ و $\\tau_2, pH_2$. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. المقارنة النظرية (0.75 ن):</b> عند نفس التركيز $C$، لدينا $\\frac{\\tau^2}{1 - \\tau} = \\frac{K}{C}$؛ وبما أن $K_1 \\gt K_2$ والدالة $\\tau \\mapsto \\frac{\\tau^2}{1-\\tau}$ تزايدية قطعا على $]0,1[$، فإن <b>$\\tau_1 \\gt \\tau_2$</b>. ومنه $[\\text{H}_3\\text{O}^+]_1 = C\\,\\tau_1 \\gt C\\,\\tau_2 = [\\text{H}_3\\text{O}^+]_2$ أي <b>$pH_1 \\lt pH_2$</b> (حمض الميثانويك أكثر تفككاً وأشد حمضية).</p>
                      <p><b>2. التحقق العددي (حل المعادلة $C\\tau^2 + K\\tau - K = 0$) (0.75 ن):</b><br/>
                      • لحمض الميثانويك: $\\tau_1 = 12.6\\% \\implies [\\text{H}_3\\text{O}^+]_1 = 1.26 \\times 10^{-3}\\text{ mol/L} \\implies pH_1 = 2.90$.<br/>
                      • لحمض الإيثانويك: $\\tau_2 = 4.15\\% \\implies [\\text{H}_3\\text{O}^+]_2 = 4.15 \\times 10^{-4}\\text{ mol/L} \\implies pH_2 = 3.38$. (تأكيد تام: $\\tau_1 \\gt \\tau_2$ و $pH_1 \\lt pH_2$!).</p>
                    </div>
                  </div>
                </div>

                <!-- 4. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">موصلية محلول قاعدة في الماء ($\\text{NH}_3$) واستنتاج $\\tau$ و $K$</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    نقيس عند $25^\\circ\\text{C}$ الموصلية الكهربائية لمحلول مائي للأمونياك $\\text{NH}_3$ تركيزه $C = 1.00 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$ فنجد $\\sigma_{\\text{éq}} = 11.44\\text{ mS}\\cdot\\text{m}^{-1}$.<br/>
                    تُعطى: $\\lambda_{\\text{NH}_4^+} = 7.34\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$ و $\\lambda_{\\text{HO}^-} = 19.9\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$.<br/>
                    1) اكتب معادلة تفاعل $\\text{NH}_3$ مع الماء واستخرج $[\\text{HO}^-]_{\\text{éq}}$ بوحدة $\\text{mol}\\cdot\\text{L}^{-1}$ (انتبه للوحدات!).<br/>
                    2) احسب نسبة التقدم النهائي $\\tau$ وثابتة التوازن $K$ المقرونة بمعادلة التفاعل.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. استخراج $[\\text{HO}^-]_{\\text{éq}}$:</b><br/>
                      $$\\text{NH}_3(\\text{aq}) + \\text{H}_2\\text{O}(\\ell) \\rightleftharpoons \\text{NH}_4^+(\\text{aq}) + \\text{HO}^-(\\text{aq})$$
                      عند التوازن (وبإهمال $\\text{H}_3\\text{O}^+$): $[\\text{NH}_4^+]_{\\text{éq}} = [\\text{HO}^-]_{\\text{éq}}$:<br/>
                      $$[\\text{HO}^-]_{\\text{éq}} = \\frac{\\sigma_{\\text{éq}}}{\\lambda_{\\text{NH}_4^+} + \\lambda_{\\text{HO}^-}} = \\frac{11.44 \\times 10^{-3}}{(7.34 + 19.9)\\times 10^{-3}} = \\frac{11.44}{27.24} \\approx 0.420\\text{ mol}\\cdot\\text{m}^{-3} = 4.20 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}$$
                      </p>
                      <p><b>2. حساب $\\tau$ و $K$:</b><br/>
                      • $\\tau = \\frac{[\\text{HO}^-]_{\\text{éq}}}{C} = \\frac{4.20 \\times 10^{-4}}{1.00 \\times 10^{-2}} = 4.20\\%$؛<br/>
                      • $K = \\frac{[\\text{NH}_4^+]_{\\text{éq}}[\\text{HO}^-]_{\\text{éq}}}{[\\text{NH}_3]_{\\text{éq}}} = \\frac{C\\,\\tau^2}{1 - \\tau} = \\frac{1.00 \\times 10^{-2} \\times (0.0420)^2}{1 - 0.0420} \\approx 1.84 \\times 10^{-5}$.</p>
                    </div>
                  </details>
                </div>
              </div>

`);
