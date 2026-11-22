window.EulerAcademy.registerAxis('chem-01', 'c01-ax2', `

              <div class="space-y-6">
                <!-- 1. Fast vs Slow Transformations -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">1. التمييز التجريبي بين التحولات السريعة والتحولات البطيئة</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <p class="text-xs text-slate-300 leading-relaxed mb-4">
                    يعتمد تصنيف التحولات الكيميائية في الحركية الكيميائية على <b>قابلية تتبع تطور المجموعة زمنياً</b> انطلاقاً من لحظة الخلط $t = 0$ إلى غاية بلوغ الحالة النهائية (عند اللحظة $t_f$) بواسطة العين المجردة أو أجهزة القياس المخبرية المعتادة (جهاز قياس المواصلة، مقياس $pH$، مانومتر، قياس الطيف الضوئي، أو المعايرة).
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">⚡ أ) التحول السريع (Transformation rapide):</b>
                      • <b>التعريف الرسمي:</b> تحول كيميائي يبلغ حالته النهائية خلال مدة زمنية جد وجيزة ($\\Delta t_f \\ll 1\\text{ s}$) بحيث <b>يستحيل تتبع تطوره</b> بالعين المجردة أو بأجهزة القياس الاعتيادية؛ فيبدو للملاحظ وكأنه <b>آني</b>.<br/>
                      <span class="text-cyan-300/90 block mt-2">• مثال مرجعي:</span> تفاعلات المعايرة حمض-قاعدة وتفاعلات الترسيب.
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 text-sm block mb-1.5">⏳ ب) التحول البطيء (Transformation lente):</b>
                      • <b>التعريف الرسمي:</b> تحول كيميائي يستغرق بلوغه للحالة النهائية مدة قابلة للقياس تتراوح <b>من بضع ثوانٍ إلى عدة دقائق أو ساعات</b>، مما يسمح بـ<b>تتبع تطوره زمنياً</b> عينياً أو قياسياً.<br/>
                      <span class="text-amber-300/90 block mt-2">• مثال مرجعي:</span> أكسدة $\\text{I}^-$ بـ $\\text{S}_2\\text{O}_8^{2-}$ وتفاعل $\\text{MnO}_4^-$ مع $\\text{H}_2\\text{C}_2\\text{O}_4$.
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/30">
                      <b class="text-rose-400 text-sm block mb-1.5">🧊 ج) التحول البطيء جداً (Infiniment lent):</b>
                      • <b>التعريف:</b> تحول يدوم أياماً أو أشهراً أو سنوات بحيث يبدو التطور معدوماً على السلم الزمني للمختبر. توصف المجموعة حينها بأنها <b>موقوفة حركياً (Cinétiquement inerte)</b>.<br/>
                      <span class="text-rose-300/90 block mt-2">• مثال مرجعي:</span> التفكك الذاتي للماء الأوكسيجيني $\\text{H}_2\\text{O}_2$ في غياب الحفاز والضوء، أو تكون الصدأ.
                    </div>
                  </div>

                  <!-- Critical Table of Curriculum Examples -->
                  <div class="mt-5 overflow-x-auto">
                    <div class="text-xs font-bold text-slate-300 mb-2">📋 جدول مرجعي لأشهر التفاعلات المصنفة في مقرّر 2BAC PC ومعايير تتبعها:</div>
                    <table class="w-full text-xs text-right border-collapse border border-slate-800 rounded-xl overflow-hidden">
                      <thead class="bg-slate-950 text-slate-300">
                        <tr>
                          <th class="p-2.5 border border-slate-800">التصنيف الحركي</th>
                          <th class="p-2.5 border border-slate-800">المعادلة الحصيلة للتفاعل</th>
                          <th class="p-2.5 border border-slate-800">المؤشر التجريبي الملاحظ</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-800/80 text-slate-200">
                        <tr>
                          <td class="p-2.5 font-bold text-cyan-300 border border-slate-800">سريع (ترسيب)</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{Ag}^+(\\text{aq}) + \\text{Cl}^-(\\text{aq}) \\longrightarrow \\text{AgCl}(\\text{s})$</td>
                          <td class="p-2.5 border border-slate-800">تكون راسب أبيض فوري لحظة التماس</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-bold text-cyan-300 border border-slate-800">سريع (حمض-قاعدة)</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{H}_3\\text{O}^+(\\text{aq}) + \\text{HO}^-(\\text{aq}) \\longrightarrow 2\\,\\text{H}_2\\text{O}(\\ell)$</td>
                          <td class="p-2.5 border border-slate-800">تغيّر لحظي للون الكاشف الملون أو قفزة $pH$ (معايرة)</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-bold text-cyan-300 border border-slate-800">سريع (أكسدة-اختزال)</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{I}_2(\\text{aq}) + 2\\,\\text{S}_2\\text{O}_3^{2-}(\\text{aq}) \\longrightarrow 2\\,\\text{I}^-(\\text{aq}) + \\text{S}_4\\text{O}_6^{2-}(\\text{aq})$</td>
                          <td class="p-2.5 border border-slate-800">زوال فوري للون البني لثنائي اليود (معايرة حركية)</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-bold text-cyan-300 border border-slate-800">سريع (أكسدة-اختزال)</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{MnO}_4^- + 5\\,\\text{Fe}^{2+} + 8\\,\\text{H}^+ \\longrightarrow \\text{Mn}^{2+} + 5\\,\\text{Fe}^{3+} + 4\\,\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 border border-slate-800">اختفاء فوري للون البنفسجي لأيونات $\\text{MnO}_4^-$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-bold text-amber-300 border border-slate-800">بطيء (مقرر بامتياز)</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{S}_2\\text{O}_8^{2-}(\\text{aq}) + 2\\,\\text{I}^-(\\text{aq}) \\longrightarrow 2\\,\\text{SO}_4^{2-}(\\text{aq}) + \\text{I}_2(\\text{aq})$</td>
                          <td class="p-2.5 border border-slate-800">تلوّن أصفر ثم بني يشتد تدريجياً مع الزمن لتكوّن $\\text{I}_2$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-bold text-amber-300 border border-slate-800">بطيء (تحفيز ذاتي)</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$2\\,\\text{MnO}_4^- + 5\\,\\text{H}_2\\text{C}_2\\text{O}_4 + 6\\,\\text{H}_3\\text{O}^+ \\longrightarrow 2\\,\\text{Mn}^{2+} + 10\\,\\text{CO}_2 + 14\\,\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 border border-slate-800">اختفاء تدريجي للبنفسجي يتسارع بفعل $\\text{Mn}^{2+}$ المتكون + فقاعات $\\text{CO}_2$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-bold text-amber-300 border border-slate-800">بطيء (تفكك ذاتي)</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{S}_2\\text{O}_3^{2-}(\\text{aq}) + 2\\,\\text{H}_3\\text{O}^+(\\text{aq}) \\longrightarrow \\text{S}(\\text{s}) + \\text{SO}_2(\\text{g}) + 3\\,\\text{H}_2\\text{O}(\\ell)$</td>
                          <td class="p-2.5 border border-slate-800">ظهور عكورة صفراء تدريجية بسبب ترسب الكبريت الصلب $\\text{S}$</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="mt-4 bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-3.5 text-xs text-emerald-100 leading-relaxed">
                    <b class="text-emerald-300">⚖️ مبدأ فصْل الحركية عن الحصيلة الستوكيومترية:</b> كوْن التحول بطيئاً <b>لا يعني أنه غير كلي</b>! فتفاعل $\\text{S}_2\\text{O}_8^{2-}$ مع $\\text{I}^-$ تحول <b>بطيء وكلي</b> يبلغ في نهايته التقدم الأقصى $x_f = x_{\\max}$. الفرق بين السريع والبطيء يكمن في <b>الزمن المستغرق $t_f$</b> لبلوغ النهاية، لا في قيمة $x_{\\max}$.
                  </div>
                </div>

                <!-- 2. Kinetic Factors & Microscopic Interpretation -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">2. العوامل الحركية والتفسير المجهري (Facteurs cinétiques &amp; Chocs efficaces)</span>
                    <span class="text-xs text-amber-400 font-mono">الحرارة + التركيز البدئي</span>
                  </div>

                  <p class="text-xs text-slate-300 leading-relaxed mb-4">
                    <b>العامل الحركي (Facteur cinétique)</b> هو كل مقدار فيزيائي أو كيميائي يُعدّل سرعة تطور المجموعة الكيميائية (تسريعاً أو إبطاءً). يقتصر الإطار المرجعي لـ 2BAC PC على عاملين أساسيين مع تفسيرهما المجهري عبر <b>التصادمات الفعالة (Chocs efficaces)</b> بين الدقائق المتفاعلة، إضافة إلى دور الحفاز:
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/30">
                      <b class="text-rose-400 text-sm block mb-1.5">🌡️ أ) تأثير درجة الحرارة ($T$ أو $\\theta$):</b>
                      • <b>القاعدة التجريبية:</b> كلما <b>ارتفعت درجة الحرارة $T$</b> لوسط التفاعل، <b>ازدادت سرعة التطور</b> وتقلصت المدة الزمنية اللازمة لبلوغ الحالة النهائية ($t_f$)؛ والعكس بالتبريد.<br/>
                      • <b>التفسير المجهري:</b> يؤدي رفع $T$ إلى زيادة <b>التهيّج الحراري</b> (السرعة والطاقة الحركية المتوسطة للجزيئات والأيونات)، فترتفع <b>وتيرة التصادمات</b> وترتفع نسبة <b>التصادمات الفعالة</b> القادرة على كسر الروابط القديمة وتكوين الروابط الجديدة.
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">🧪 ب) تأثير التركيز البدئي للمتفاعلات ($[\\text{X}]_0$):</b>
                      • <b>القاعدة التجريبية:</b> كلما <b>ارتفع التركيز البدئي</b> لأحد المتفاعلات (أو جميعها)، <b>ازدادت سرعة التطور</b>. وبالمقابل، فإن <b>التخفيف</b> (بإضافة الماء المقطر عند $t=0$) يُبطئ التفاعل.<br/>
                      • <b>التفسير المجهري:</b> يعني ارتفاع التركيز المولي تزايد <b>عدد دقائق المتفاعلات في وحدة الحجم</b>، مما يرفع مباشرةً <b>احتمال وتواتر التصادمات الفعالة</b> بين المتفاعلات خلال وحدة الزمن.
                    </div>
                  </div>

                  <!-- Catalyst + Crucial Limiting vs Excess Reactant Distinction -->
                  <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-purple-500/30">
                      <b class="text-purple-400 block mb-1">⚗️ إشارة تكميلية — الحفاز (Catalyseur) ومساحة التماس:</b>
                      • <b>الحفاز:</b> نوع كيميائي يُسرّع التفاعل دون أن يظهر في المعادلة الحصيلة ودون استهلاكه في النهاية (مثل أيونات $\\text{Fe}^{3+}$ لتسريع تفكك $\\text{H}_2\\text{O}_2$).<br/>
                      • <b>تحفيز ذاتي (Autocatalyse):</b> أحد نواتج التفاعل يلعب دور حفاز للتفاعل نفسه (مثل $\\text{Mn}^{2+}$ مع حمض الأوكساليك).<br/>
                      • <b>مساحة التماس:</b> في تفاعل صلب مع سائل (مثل $\\text{Al}$ مع $\\text{H}_3\\text{O}^+$)، سحق الصلب إلى مسحوق يرفع السرعة دون تغيير $x_{\\max}$.
                    </div>

                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 block mb-1">🎯 التمييز الدقيق بين السرعة والتقدم الأقصى $x_{\\max}$:</b>
                      • تغيير درجة الحرارة $T$ أو إضافة حفاز: يغيّر <b>السرعة والمدة $t_f$ فقط</b>، و<b>لا يغيّر $x_{\\max}$ أبداً</b>.<br/>
                      • تغيير تركيز متفاعل <b>موجود بوفرة</b> (بحيث يبقى المتفاعل الآخر هو المحد): يغيّر <b>السرعة والمدة $t_f$ فقط</b>، و<b>لا يغيّر $x_{\\max}$</b>!<br/>
                      • <b>متى يتغير $x_{\\max}$؟</b> فقط إذا تغيرت <b>كمية المادة البدئية $n_0$ للمتفاعل المحد</b> (أو تحوّل متفاعل آخر إلى محد).
                    </div>
                  </div>

                  <!-- SVG Diagram 1: Kinetic Factors x(t) Curves Converging to same x_max -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardKineticFactors">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📈 مقارنة منحنيات التقدم $x(t)$ تحت تأثير العوامل الحركية (عند ثبات $x_{\\max}$)</span>
                      <span class="text-[11px] font-mono text-emerald-400">Same x_max &bull; Different t_f</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
                        <div class="flex flex-wrap items-center gap-4">
                          <span class="flex items-center gap-1.5 text-rose-300"><span class="inline-block w-3 h-3 rounded-full bg-rose-500/40 border border-rose-400"></span> التجربة (1): $T_1 &gt; T_0$ أو تركيز مرتفع (سريعة)</span>
                          <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-3 h-3 rounded-full bg-cyan-500/40 border border-cyan-400"></span> التجربة (2): مرجعية $(T_0, C_0)$</span>
                          <span class="flex items-center gap-1.5 text-violet-300"><span class="inline-block w-3 h-3 rounded-full bg-violet-500/40 border border-violet-400"></span> التجربة (3): $T_3 &lt; T_0$ أو تخفيف بالماء (بطيئة)</span>
                        </div>
                        <span class="text-emerald-300 font-mono">x_f(1) = x_f(2) = x_f(3) = x_max</span>
                      </div>
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 280" class="w-full h-auto">
                        <defs>
                          <marker id="arrKinAxis" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                        </defs>

                        <!-- Subtle grid lines -->
                        <line x1="95" y1="185" x2="625" y2="185" stroke="#1e293b" stroke-width="1"/>
                        <line x1="95" y1="145" x2="625" y2="145" stroke="#1e293b" stroke-width="1"/>
                        <line x1="95" y1="105" x2="625" y2="105" stroke="#1e293b" stroke-width="1"/>

                        <!-- Axes -->
                        <line x1="95" y1="228" x2="95" y2="28" stroke="#94a3b8" stroke-width="1.8" marker-end="url(#arrKinAxis)"/>
                        <line x1="95" y1="228" x2="642" y2="228" stroke="#94a3b8" stroke-width="1.8" marker-end="url(#arrKinAxis)"/>
                        <text x="95" y="18" fill="#cbd5e1" font-size="13" font-weight="bold" font-family="monospace" text-anchor="middle">x (mmol)</text>
                        <text x="652" y="232" fill="#cbd5e1" font-size="13" font-weight="bold" font-family="monospace" text-anchor="middle">t</text>
                        <text x="82" y="242" fill="#64748b" font-size="11" font-family="monospace" text-anchor="end">0</text>

                        <!-- Asymptote line x_max -->
                        <line x1="95" y1="68" x2="625" y2="68" stroke="#34d399" stroke-width="1.6" stroke-dasharray="6,4"/>
                        <text x="85" y="72" fill="#34d399" font-size="13" font-weight="bold" font-family="monospace" text-anchor="end">x_max</text>

                        <!-- Curve 3 (Slowest: Low T or Diluted) -->
                        <path d="M 95 228 C 215 198, 375 102, 545 68 L 625 68" fill="none" stroke="#a78bfa" stroke-width="2.6" stroke-linecap="round"/>

                        <!-- Curve 2 (Baseline) -->
                        <path d="M 95 228 C 165 162, 245 78, 365 68 L 625 68" fill="none" stroke="#22d3ee" stroke-width="2.6" stroke-linecap="round"/>

                        <!-- Curve 1 (Fastest: High T or High [X]0) -->
                        <path d="M 95 228 C 122 108, 158 70, 215 68 L 625 68" fill="none" stroke="#fb7185" stroke-width="2.8" stroke-linecap="round"/>

                        <!-- Drop markers for tf1, tf2, tf3 -->
                        <line x1="215" y1="68" x2="215" y2="228" stroke="#fb7185" stroke-width="1.3" stroke-dasharray="3,4"/>
                        <circle cx="215" cy="68" r="4" fill="#fb7185"/>
                        <text x="215" y="246" fill="#fda4af" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">t_f1</text>

                        <line x1="365" y1="68" x2="365" y2="228" stroke="#22d3ee" stroke-width="1.3" stroke-dasharray="3,4"/>
                        <circle cx="365" cy="68" r="4" fill="#22d3ee"/>
                        <text x="365" y="246" fill="#67e8f9" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">t_f2</text>

                        <line x1="545" y1="68" x2="545" y2="228" stroke="#a78bfa" stroke-width="1.3" stroke-dasharray="3,4"/>
                        <circle cx="545" cy="68" r="4" fill="#a78bfa"/>
                        <text x="545" y="246" fill="#c4b5fd" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">t_f3</text>

                        <!-- Curve Tag Badges inside safe whitespace -->
                        <rect x="130" y="34" width="128" height="22" rx="6" fill="rgba(251,113,133,0.14)" stroke="#fb7185" stroke-width="1"/>
                        <text x="194" y="49" fill="#fda4af" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">(1) T1 &gt; T0 / C_max</text>

                        <rect x="278" y="34" width="126" height="22" rx="6" fill="rgba(34,211,238,0.14)" stroke="#22d3ee" stroke-width="1"/>
                        <text x="341" y="49" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">(2) Ref (T0, C0)</text>

                        <rect x="442" y="34" width="150" height="22" rx="6" fill="rgba(167,139,250,0.14)" stroke="#a78bfa" stroke-width="1"/>
                        <text x="517" y="49" fill="#c4b5fd" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">(3) T3 &lt; T0 / Diluted</text>

                        <!-- Bottom inequality note -->
                        <text x="380" y="268" fill="#34d399" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">t_f1 &lt; t_f2 &lt; t_f3   |   x_max invariant (if limiting n_0 fixed)</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 3. Chemical Quenching (La trempe chimique) -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-sky-500/15 text-sky-300 text-xs font-bold">3. السقي الكيميائي واستثماره في المعايرة الحركية (La trempe chimique)</span>
                    <span class="text-xs text-sky-400 font-mono">تبريد مفاجئ + تخفيف آني</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-sky-500/30">
                      <b class="text-sky-400 text-sm block mb-1.5">❄️ لماذا السقي الكيميائي وكيف نُنجزه؟</b>
                      عند تتبع تفاعل بطيء عبر <b>المعايرة الحجمية</b>، نأخذ في لحظات محددة $t_i$ عينات متماثلة حجمها $V_p$ من الخليط التفاعلي.<br/>
                      بما أن المعايرة تستغرق وقتاً، فسيستمر التفاعل داخل العينة أثناء سكب المحلول المعايِر وتتغير الكمية المقاسة! لتفادي ذلك نُخضع كل عينة لحظة سحبها لعملية <b>السقي الكيميائي</b> بصبّها فوراً في حجم وافر من <b>الماء المثلج ($0^\\circ\\text{C}$)</b>، مما يوقف التفاعل البطيء عملياً عبر تضافر كابحين حركيين:
                      <div class="mt-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                        <div>1️⃣ <b>انخفاض حاد في درجة الحرارة ($T \\searrow$):</b> يُضعف التهيّج الحراري ويُعدم تقريباً التصادمات الفعالة.</div>
                        <div>2️⃣ <b>تخفيف فوري بالماء ($[R] \\searrow$):</b> يخفض تراكيز المتفاعلات في العينة ويباعد بينها.</div>
                      </div>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">🎯 قاعدة الحفاظ الذهبية في المعايرة بعد السقي:</b>
                      • إضافة الماء المثلج تغيّر <b>الحجم الكلي للعينة</b> وتخفض <b>التراكيز</b>، لكنها <b>لا تغيّر أبداً كمية مادة $n(\\text{espèce})_{t_i}$</b> الموجودة داخل العينة المسحوبة $V_p$ (لأن الماء لا يشارك في المعايرة ولا في تفاعل النوع المعايَر).<br/>
                      • بالتالي، <b>حجم التكافؤ $V_E$ لا يتغير</b> سواء أضفنا $30\\text{ mL}$ أو $80\\text{ mL}$ من الماء المثلج!<br/>
                      • <b>الربط الكمي مع الخليط الكلي $V_{\\text{tot}}$:</b>
                      $$n_{\\text{tot}}(\\text{espèce})_{t_i} = n_p(\\text{espèce})_{t_i} \\times \\frac{V_{\\text{tot}}}{V_p}$$
                      <span class="text-rose-300 font-bold block mt-1">⚠️ تنبيه: لا تُقحم أبداً حجم الماء المثلج في هذا الكسر أو في علاقة التكافؤ!</span>
                    </div>
                  </div>

                  <!-- SVG Diagram 2: 3-Step Trempe Chimique Protocol -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardTrempeProtocol">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>🧊 البروتوكول التجريبي للمعايرة الحركية بعد السقي الكيميائي</span>
                      <span class="text-[11px] font-mono text-sky-400">Sampling V_p &rarr; Iced Water (0&deg;C) &rarr; Fast Titration</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
                        <div class="flex flex-wrap items-center gap-4">
                          <span class="flex items-center gap-1.5 text-amber-300"><span class="inline-block w-3 h-3 rounded-full bg-amber-500/40 border border-amber-400"></span> 1. سحب العينة $V_p$ عند $t_i$</span>
                          <span class="flex items-center gap-1.5 text-sky-300"><span class="inline-block w-3 h-3 rounded-full bg-sky-500/40 border border-sky-400"></span> 2. السقي في الماء المثلج (تثبيت $n_p$)</span>
                          <span class="flex items-center gap-1.5 text-emerald-300"><span class="inline-block w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-400"></span> 3. معايرة سريعة لتحديد $V_E$</span>
                        </div>
                        <span class="text-slate-400 font-mono">x(t_i) via n_tot = n_p * (V_tot / V_p)</span>
                      </div>
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 205" class="w-full h-auto">
                        <defs>
                          <marker id="arrTrempe1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
                          </marker>
                          <marker id="arrTrempe2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
                          </marker>
                        </defs>

                        <!-- Stage 1 Box: Slow Reaction Flask -->
                        <rect x="20" y="25" width="175" height="150" rx="12" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1.5"/>
                        <text x="107" y="46" fill="#fde68a" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">1. Reacteur (V_tot)</text>
                        <!-- Beaker graphic -->
                        <path d="M 70 68 L 70 128 L 144 128 L 144 68" fill="none" stroke="#94a3b8" stroke-width="2"/>
                        <rect x="72" y="92" width="70" height="34" fill="rgba(245,158,11,0.35)"/>
                        <!-- Pipette -->
                        <line x1="107" y1="54" x2="107" y2="108" stroke="#f8fafc" stroke-width="2.5"/>
                        <text x="107" y="148" fill="#fbbf24" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Reaction lente en cours</text>
                        <text x="107" y="165" fill="#94a3b8" font-size="11" font-family="monospace" text-anchor="middle">Prelevement V_p a t_i</text>

                        <!-- Arrow 1 -->
                        <line x1="202" y1="98" x2="245" y2="98" stroke="#38bdf8" stroke-width="2.2" marker-end="url(#arrTrempe1)"/>
                        <text x="223" y="88" fill="#7dd3fc" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">V_p</text>

                        <!-- Stage 2 Box: Quenching Bath -->
                        <rect x="252" y="25" width="178" height="150" rx="12" fill="rgba(56,189,248,0.08)" stroke="#38bdf8" stroke-width="1.5"/>
                        <text x="341" y="46" fill="#7dd3fc" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">2. Trempe Chimique</text>
                        <!-- Iced beaker + ice cubes -->
                        <path d="M 304 68 L 304 128 L 378 128 L 378 68" fill="none" stroke="#94a3b8" stroke-width="2"/>
                        <rect x="306" y="82" width="70" height="44" fill="rgba(56,189,248,0.28)"/>
                        <rect x="315" y="86" width="14" height="14" rx="2" fill="rgba(224,242,254,0.85)"/>
                        <rect x="352" y="90" width="13" height="13" rx="2" fill="rgba(224,242,254,0.85)"/>
                        <text x="341" y="148" fill="#38bdf8" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">T -&gt; 0 C  &amp;  [R] -&gt; 0</text>
                        <text x="341" y="165" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">n_p(t_i) bloque fixe !</text>

                        <!-- Arrow 2 -->
                        <line x1="437" y1="98" x2="480" y2="98" stroke="#34d399" stroke-width="2.2" marker-end="url(#arrTrempe2)"/>
                        <text x="458" y="88" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Stop</text>

                        <!-- Stage 3 Box: Fast Titration -->
                        <rect x="487" y="25" width="173" height="150" rx="12" fill="rgba(52,211,153,0.07)" stroke="#34d399" stroke-width="1.5"/>
                        <text x="573" y="46" fill="#6ee7b7" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">3. Dosage Rapide</text>
                        <!-- Burette + Beaker -->
                        <rect x="568" y="54" width="10" height="32" fill="rgba(52,211,153,0.35)" stroke="#cbd5e1" stroke-width="1.2"/>
                        <line x1="573" y1="86" x2="573" y2="98" stroke="#34d399" stroke-width="1.8" stroke-dasharray="2,2"/>
                        <path d="M 540 94 L 540 128 L 606 128 L 606 94" fill="none" stroke="#94a3b8" stroke-width="2"/>
                        <rect x="542" y="106" width="62" height="20" fill="rgba(52,211,153,0.22)"/>
                        <text x="573" y="148" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Lecture directe V_E</text>
                        <text x="573" y="165" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">V_E independant de V_glace</text>

                        <!-- Footer note -->
                        <text x="340" y="195" fill="#94a3b8" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">n_tot(t_i) = n_p(t_i) x (V_tot / V_p)   [Reaction de dosage doit etre rapide et totale]</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 4. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الامتحان الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">احذر ضياع النقط المضمونة</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «الحرارة والحفاز يرفعان $x_{\\max}$»:</b>
                      يظن التلميذ أن تسخين الوسط أو إضافة حفاز يزيد من كمية الناتج النهائي! <b>خطأ فادح:</b> التسخين والحفاز وزيادة تركيز المتفاعل الموجود بوفرة لا تُنتج أي مول إضافي؛ بل تجعل المجموعة تبلغ <b>نفس $x_{\\max}$</b> في زمن $t_f$ أقصر فقط.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «حجم الماء المثلج يدخل في علاقة التكافؤ أو التخفيف»:</b>
                      إياك أن تدرج حجم الماء المثلج المضاف في إناء السقي ضمن أي حساب لتحديد $n_p(\\text{X})$ أو $x(t)$! السقي الكيميائي <b>لا يغيّر كمية المادة</b> داخل العينة $V_p$؛ نستعمل فقط نسبة $V_{\\text{tot}} / V_p$ عند الانتقال من العينة إلى المزيج الكلي.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «التفاعل المعايِر يجب أن يكون سريعاً وكلياً، والماء المثلج لا يؤخر المعايرة»:</b>
                      في المعايرة الحركية بعد السقي، يُبطئ الماء المثلج <b>التفاعل البطيء المدروس</b> (بين $\\text{S}_2\\text{O}_8^{2-}$ و $\\text{I}^-$ مثلاً)، بينما يظل <b>تفاعل المعايرة</b> (مثل $\\text{I}_2 + 2\\,\\text{S}_2\\text{O}_3^{2-}$) <b>سريعاً وكلياً</b> حتى عند $0^\\circ\\text{C}$، وهذه هي شروط نجاح المعايرة!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «مقارنة حجمين مختلفين لنفس التركيز البدئي»:</b>
                      انتبه جيداً: إذا خلطنا $10\\text{ mL}$ مع $10\\text{ mL}$ (المجموع $20\\text{ mL}$) ثم كررنا التجربة بـ $20\\text{ mL}$ مع $20\\text{ mL}$ (المجموع $40\\text{ mL}$) بنفس التراكيز الأصلية للمحلولين، فإن <b>التراكيز البدئية في المزيج لا تتغير</b> (تبقى السرعة متماثلة في البداية)، لكن <b>$x_{\\max}$ يتضاعف</b>! بينما إضافة <b>الماء المقطر</b> تُقلّص التراكيز البدئية وتُبطئ التفاعل مع ثبات $x_{\\max}$.
                    </div>
                  </div>
                </div>

                <!-- 5. Two Model National-Grade Worked Applications -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">5. تطبيقان نموذجيان محرران بسلم التنقيط (معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400 font-mono">المنهجية الكاملة 20/20</span>
                  </div>

                  <!-- Application 1 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800 mb-5">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: الدراسة المقارنة للعوامل الحركية في ثلاثة كؤوس (تحليل السرعة وثبات الحالة النهائية)</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      ندرس حركية التفاعل البطيء والكلي بين أيونات البيروكسوديكبريتات $\\text{S}_2\\text{O}_8^{2-}$ وأيونات اليودور $\\text{I}^-$ وفق المعادلة:
                      $$\\text{S}_2\\text{O}_8^{2-}(\\text{aq}) + 2\\,\\text{I}^-(\\text{aq}) \\longrightarrow 2\\,\\text{SO}_4^{2-}(\\text{aq}) + \\text{I}_2(\\text{aq})$$
                      نحضر عند اللحظة $t=0$ ثلاثة خلائط في ثلاثة كؤوس $B_1$ و $B_2$ و $B_3$ انطلاقاً من محلول يودور البوتاسيوم $(\\text{K}^+ + \\text{I}^-)$ تركيزه $C_1 = 0.20\\text{ mol}\\cdot\\text{L}^{-1}$، ومحلول بيروكسوديكبريتات البوتاسيوم $(2\\text{K}^+ + \\text{S}_2\\text{O}_8^{2-})$ تركيزه $C_2 = 0.050\\text{ mol}\\cdot\\text{L}^{-1}$، مع إضافة الماء المقطر بحجم $V_e$ كما في الجدول التالي:
                    </p>
                    <div class="overflow-x-auto mb-3">
                      <table class="w-full text-xs text-center border-collapse border border-slate-800">
                        <thead class="bg-slate-900 text-slate-300">
                          <tr>
                            <th class="p-2 border border-slate-800">الكأس</th>
                            <th class="p-2 border border-slate-800">$T\\;(^\\circ\\text{C})$</th>
                            <th class="p-2 border border-slate-800">$V_1(\\text{I}^-)\\;(\\text{mL})$</th>
                            <th class="p-2 border border-slate-800">$V_2(\\text{S}_2\\text{O}_8^{2-})\\;(\\text{mL})$</th>
                            <th class="p-2 border border-slate-800">$V_e(\\text{eau})\\;(\\text{mL})$</th>
                          </tr>
                        </thead>
                        <tbody class="text-slate-200 font-mono" dir="ltr">
                          <tr>
                            <td class="p-2 border border-slate-800 font-bold text-cyan-300">B₁</td>
                            <td class="p-2 border border-slate-800">20</td>
                            <td class="p-2 border border-slate-800">20</td>
                            <td class="p-2 border border-slate-800">20</td>
                            <td class="p-2 border border-slate-800">10</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800 font-bold text-amber-300">B₂</td>
                            <td class="p-2 border border-slate-800">40</td>
                            <td class="p-2 border border-slate-800">20</td>
                            <td class="p-2 border border-slate-800">20</td>
                            <td class="p-2 border border-slate-800">10</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800 font-bold text-rose-300">B₃</td>
                            <td class="p-2 border border-slate-800">40</td>
                            <td class="p-2 border border-slate-800">30</td>
                            <td class="p-2 border border-slate-800">20</td>
                            <td class="p-2 border border-slate-800">0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      <b>1.</b> احسب الحجم الكلي $V_{\\text{tot}}$ في كل كأس، ثم حدّد التراكيز المولية البدئية $[\\text{I}^-]_0$ و $[\\text{S}_2\\text{O}_8^{2-}]_0$ في الخلائط الثلاثة لحظة المزج. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> استنتج الترتيب الزمني لظهور اللون البني الداكن (ترتيب السرعات الحركية للكؤوس $B_1, B_2, B_3$) مع التعليل بالعاملين الحركيين. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>3.</b> قارن بين التركيز النهائي لثنائي اليود $[\\text{I}_2]_f$ (أي شدة اللون النهائي) في الكؤوس الثلاثة بعد انتهاء التفاعلات. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. الحجم الكلي والتراكيز البدئية في كل مزيج:</b><br/>
                      • في الكؤوس الثلاثة: $V_{\\text{tot}} = V_1 + V_2 + V_e = 50\\text{ mL} = 5.0 \\times 10^{-2}\\text{ L}$ (تم تعويض الزيادة في $V_1$ في $B_3$ بإنقاص $V_e$ للحفاظ على نفس الحجم الكلي!).<br/>
                      • كمية مادة البيروكسوديكبريتات نفسها في الجميع: $n_0(\\text{S}_2\\text{O}_8^{2-}) = C_2 V_2 = 0.050 \\times 20 \\times 10^{-3} = 1.0\\text{ mmol}$، ومنه في جميع الكؤوس:
                      $$[\\text{S}_2\\text{O}_8^{2-}]_0 = \\frac{1.0 \\times 10^{-3}}{5.0 \\times 10^{-2}} = 2.0 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$$
                      • بالنسبة لأيونات اليودور $\\text{I}^-$:<br/>
                      &nbsp;&nbsp;- في $B_1$ و $B_2$: $n_0(\\text{I}^-) = 0.20 \\times 20 \\times 10^{-3} = 4.0\\text{ mmol} \\implies [\\text{I}^-]_0 = \\frac{4.0 \\times 10^{-3}}{5.0 \\times 10^{-2}} = 0.080\\text{ mol}\\cdot\\text{L}^{-1}$.<br/>
                      &nbsp;&nbsp;- في $B_3$: $n_0(\\text{I}^-) = 0.20 \\times 30 \\times 10^{-3} = 6.0\\text{ mmol} \\implies [\\text{I}^-]_0 = \\frac{6.0 \\times 10^{-3}}{5.0 \\times 10^{-2}} = 0.12\\text{ mol}\\cdot\\text{L}^{-1}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>2. الترتيب الحركي والتعليل:</b><br/>
                      • مقارنة $B_1$ و $B_2$: لهما نفس التراكيز البدئية تماماً، لكن $T(B_2) = 40^\\circ\\text{C} &gt; T(B_1) = 20^\\circ\\text{C}$. ارتفاع درجة الحرارة يُسرّع التفاعل (زيادة التصادمات الفعالة)، إذن $B_2$ أسرع من $B_1$.<br/>
                      • مقارنة $B_2$ و $B_3$: لهما نفس درجة الحرارة $40^\\circ\\text{C}$، لكن $[\\text{I}^-]_0(B_3) = 0.12\\text{ mol}\\cdot\\text{L}^{-1} &gt; [\\text{I}^-]_0(B_2) = 0.080\\text{ mol}\\cdot\\text{L}^{-1}$. ارتفاع التركيز البدئي يرفع تواتر التصادمات الفعالة، إذن $B_3$ أسرع من $B_2$.<br/>
                      • الترتيب من الأسرع إلى الأبطأ: <b>$B_3$ ثم $B_2$ ثم $B_1$</b> ($t_f(B_3) &lt; t_f(B_2) &lt; t_f(B_1)$). <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>3. مقارنة الحالة النهائية $[\\text{I}_2]_f$:</b><br/>
                      في الكؤوس الثلاثة، النسبة الستوكيومترية لـ $\\text{S}_2\\text{O}_8^{2-}$ هي $1.0\\text{ mmol}$ وهي أصغر من $\\frac{n_0(\\text{I}^-)}{2}$ ($\\ge 2.0\\text{ mmol}$ في $B_1,B_2$ و $3.0\\text{ mmol}$ في $B_3$). إذن <b>أيونات $\\text{S}_2\\text{O}_8^{2-}$ هي المتفاعل المحد</b> في الكؤوس الثلاثة بنفس التقدم الأقصى $x_{\\max} = 1.0\\text{ mmol}$ وفي نفس الحجم الكلي $V_{\\text{tot}} = 50\\text{ mL}$. ومنه يكون التركيز النهائي لثنائي اليود متطابقاً تماماً في الكؤوس الثلاثة:
                      $$[\\text{I}_2]_f = \\frac{x_{\\max}}{V_{\\text{tot}}} = \\frac{1.0 \\times 10^{-3}}{5.0 \\times 10^{-2}} = 2.0 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$$
                      <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: توظيف السقي الكيميائي في المعايرة الحركية لثنائي اليود</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      في تجربة أخرى على نفس التفاعل البطيء في مزيج حجمه الكلي $V_{\\text{tot}} = 100\\text{ mL}$، نسحب عند اللحظة $t = 5.0\\text{ min}$ عينة حجمها $V_p = 10.0\\text{ mL}$ ونفرغها فوراً في كأس تحتوي على $40\\text{ mL}$ من <b>الماء المثلج ($0^\\circ\\text{C}$)</b> مع بضع قطرات من صمغ النشاء (Empois d'amidon). نعاير بسرعة ثنائي اليود $\\text{I}_2$ الموجود في العينة بمحلول ثيوكبريتات الصوديوم $(2\\text{Na}^+ + \\text{S}_2\\text{O}_3^{2-})$ تركيزه $C' = 2.0 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$، فنحصل على التكافؤ عند الحجم $V_E = 6.0\\text{ mL}$. تُعطى المزدوجتان $\\text{I}_2 / \\text{I}^-$ و $\\text{S}_4\\text{O}_6^{2-} / \\text{S}_2\\text{O}_3^{2-}$.<br/>
                      <b>1.</b> اذكر الهدف من صبّ العينة في الماء المثلج مع تحديد العاملين الحركيين المتدخلين، ثم علل لماذا لا يؤثر حجم الماء المثلج ($40\\text{ mL}$) على قيمة $V_E$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> اكتب معادلة تفاعل المعايرة، ثم استنتج كمية مادة ثنائي اليود $n_p(\\text{I}_2)$ في العينة، وأخيراً قيمة التقدم $x$ للتفاعل البطيء في المزيج الكلي عند اللحظة $t = 5.0\\text{ min}$. <span class="text-emerald-400 font-mono">(1.00 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. دور السقي الكيميائي وعدم تأثير حجم الماء المثلج على $V_E$:</b><br/>
                      • <b>الهدف:</b> إنجاز عملية <b>السقي الكيميائي</b> لتوقيف تطور التفاعل البطيء عند اللحظة $t = 5.0\\text{ min}$ وتثبيت كمية $\\text{I}_2$ طوال مدة المعايرة، عبر تضافر عاملين حركيين مثبطين: <b>خفض درجة الحرارة</b> (بالتبريد إلى $0^\\circ\\text{C}$) و<b>تخفيض تراكيز المتفاعلات</b> (بالتخفيف بالماء).<br/>
                      • <b>التعليل حول $V_E$:</b> إضافة $40\\text{ mL}$ من الماء المثلج ترفع حجم الخليط في إناء المعايرة فقط دون أن تغيّر <b>كمية مادة ثنائي اليود $n_p(\\text{I}_2)$</b> المسحوبة في $V_p$؛ وبما أن $V_E$ يتناسب طرداً مع كمية المادة المعايَرة ($V_E = \\frac{2\\,n_p(\\text{I}_2)}{C'}$)، فإن قيمة $V_E$ تظل محفوظة كلياً. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2. معادلة المعايرة وحساب التقدم $x(5.0\\text{ min})$:</b><br/>
                      • معادلة تفاعل المعايرة (السريع والكلي):
                      $$\\text{I}_2(\\text{aq}) + 2\\,\\text{S}_2\\text{O}_3^{2-}(\\text{aq}) \\longrightarrow 2\\,\\text{I}^-(\\text{aq}) + \\text{S}_4\\text{O}_6^{2-}(\\text{aq})$$
                      • عند التكافؤ، تكون المتفاعلات في نسب ستوكيومترية:
                      $$\\frac{n_p(\\text{I}_2)}{1} = \\frac{n_{\\text{versé}}(\\text{S}_2\\text{O}_3^{2-})}{2} = \\frac{C' \\cdot V_E}{2}$$
                      $$n_p(\\text{I}_2) = \\frac{2.0 \\times 10^{-2} \\times 6.0 \\times 10^{-3}}{2} = 6.0 \\times 10^{-5}\\text{ mol} = 0.060\\text{ mmol}$$
                      • وبما أن العينة $V_p = 10.0\\text{ mL}$ تمثل عُشر المزيج المتجانس ذي الحجم الكلي $V_{\\text{tot}} = 100\\text{ mL}$، ومن جدول تقدم التفاعل البطيء $n_{\\text{tot}}(\\text{I}_2) = x(t)$:
                      $$x(5.0\\text{ min}) = n_{\\text{tot}}(\\text{I}_2) = n_p(\\text{I}_2) \\times \\frac{V_{\\text{tot}}}{V_p} = 6.0 \\times 10^{-5} \\times \\frac{100}{10.0} = 6.0 \\times 10^{-4}\\text{ mol} = 0.60\\text{ mmol}$$
                      <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 6. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">فصل التخفيف الحجمي عن تغيّر $n_0$</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    في مخبر الكيمياء، أنجز تلميذ التجربة المرجعية $(A)$ عند $25^\\circ\\text{C}$ بمزج $n_0 = 2.0\\text{ mmol}$ من $\\text{S}_2\\text{O}_8^{2-}$ مع $10.0\\text{ mmol}$ من $\\text{I}^-$ في حجم كلي $V_A = 50\\text{ mL}$ فلاحظ انتهاء التفاعل بعد مدة $t_{f,A}$. أعاد التلميذ التجربة $(B)$ عند نفس درجة الحرارة $25^\\circ\\text{C}$ وبنفس كميتي المادة البدئيتين ($2.0\\text{ mmol}$ من $\\text{S}_2\\text{O}_8^{2-}$ و $10.0\\text{ mmol}$ من $\\text{I}^-$)، لكنه أضاف الماء المقطر ليصبح الحجم الكلي للمزيج $V_B = 100\\text{ mL}$.<br/>
                    1) قارن مع التعليل الدقيق بين مدتي التفاعل $t_{f,B}$ و $t_{f,A}$.<br/>
                    2) قارن مع التعليل بين التقدمين الأقصيين $x_{\\max,B}$ و $x_{\\max,A}$، ثم بين التركيزين النهائيين $[\\text{I}_2]_{f,B}$ و $[\\text{I}_2]_{f,A}$.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. مقارنة مدتي التفاعل ($t_{f,B}$ مقابل $t_{f,A}$):</b><br/>
                      رغم ثبات كميتي المادة ودرجة الحرارة، فإن الحجم الكلي في التجربة $(B)$ تضاعف ($V_B = 2\\,V_A$)، مما يعني أن التراكيز المولية البدئية للمتفاعلين انخفضت إلى النصف ($[\\text{S}_2\\text{O}_8^{2-}]_{0,B} = \\frac{1}{2}[\\text{S}_2\\text{O}_8^{2-}]_{0,A}$ و $[\\text{I}^-]_{0,B} = \\frac{1}{2}[\\text{I}^-]_{0,A}$). وبما أن التركيز عامل حركي، ينخفض تواتر التصادمات الفعالة في $(B)$ فيصبح التفاعل <b>أبطأ</b>، وبالتالي <b>$t_{f,B} &gt; t_{f,A}$</b>.</p>
                      <p><b>2. مقارنة $x_{\\max}$ ومقارنة $[\\text{I}_2]_f$ (الفخ الذكي!):</b><br/>
                      • <b>بالنسبة للتقدم الأقصى:</b> لا تتعلق قيمة $x_{\\max}$ بالماء المضاف بل بكميتي المادة البدئيتين؛ وفي الحالتين $\\text{S}_2\\text{O}_8^{2-}$ هو المحد لأن $2.0\\text{ mmol} &lt; \\frac{10.0}{2} = 5.0\\text{ mmol}$. إذن <b>$x_{\\max,B} = x_{\\max,A} = 2.0\\text{ mmol}$</b> (تتساوى كمية مادة $\\text{I}_2$ النهائية في الكأسين).<br/>
                      • <b>بالنسبة للتركيز النهائي $[\\text{I}_2]_f$:</b> انتبه! رغم تساوي $x_{\\max}$، فإن الحجم النهائي مختلف ($V_B = 2\\,V_A$)، ومنه:<br/>
                      $[\\text{I}_2]_{f,A} = \\frac{2.0\\text{ mmol}}{50\\text{ mL}} = 0.040\\text{ mol}\\cdot\\text{L}^{-1}$، بينما $[\\text{I}_2]_{f,B} = \\frac{2.0\\text{ mmol}}{100\\text{ mL}} = 0.020\\text{ mol}\\cdot\\text{L}^{-1}$. إذن <b>$[\\text{I}_2]_{f,B} = \\frac{1}{2}[\\text{I}_2]_{f,A} &lt; [\\text{I}_2]_{f,A}$</b> (سيكون اللون النهائي في $B$ أفتح من $A$ بسبب كبر الحجم الكلي، لا بسبب تغير $x_{\\max}$!).</p>
                    </div>
                  </details>
                </div>
              </div>

`);
