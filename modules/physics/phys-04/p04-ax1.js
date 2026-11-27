window.EulerAcademy.registerAxis('phys-04', 'p04-ax1', `

              <div class="space-y-6">
                <!-- 1. Nucleus Composition, Isotopes, Segrè Chart & Soddy's Decay Laws -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">1. تركيب النواة، مخطط سيغري $(N, Z)$، وقوانين صودي للتفتتات $\\alpha, \\beta^-, \\beta^+, \\gamma$</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">⚛️ أ) تركيب النواة، النظائر، وخصائص النشاط الإشعاعي:</b>
                      • تتكون النواة التي يرمز لها بـ $ {}_{Z}^{A}\\text{X}$ من $Z$ <b>بروتوناً</b> (العدد الذري أو عدد الشحنة) و $N = A - Z$ <b>نوتروناً</b>، حيث يمثل $A$ مجموعهما ويسمى <b>عدد النويات</b> (أو العدد الكتلي).<br/>
                      • <b>النظائر (Isotopes):</b> نويدات تنتمي لنفس العنصر الكيميائي؛ لها <b>نفس العدد الذري $Z$</b> وتختلف في عدد النوترونات $N$ وبالتالي في عدد النويات $A$ (مثل $ {}_{6}^{12}\\text{C}$ و $ {}_{6}^{14}\\text{C}$).<br/>
                      • <b>النشاط الإشعاعي (Radioactivité):</b> تفتت نواة غير مستقرة إلى نواة متولدة أكثر استقراراً مع بعث دقيقة أو إشعاع، ويتميز بأربع خصائص إلزامية:<br/>
                      <span class="text-emerald-300 font-semibold">تلقائي (Spontané) • عشوائي (Aléatoire) • حتمي (Inéluctable) • مستقل عن الضغط ودرجة الحرارة والروابط الكيميائية!</span>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 text-sm block mb-1.5">⚖️ ب) قانونا صودي للانحفاظ (Lois de Soddy):</b>
                      خلال كل تحول نووي تلقائي $ {}_{Z}^{A}\\text{X} \\longrightarrow {}_{Z_1}^{A_1}\\text{Y} + {}_{Z_2}^{A_2}\\text{p}$، يتحقق:<br/>
                      1) <b>انحفاظ عدد النويات (العدد الكتلي $A$):</b>
                      $$A = A_1 + A_2$$
                      2) <b>انحفاظ عدد الشحنة ($Z$):</b>
                      $$Z = Z_1 + Z_2$$
                      • <b>قاعدة التفسير المجهري داخل النواة:</b> في الإشعاع $\\beta^-$ يتحول نوترون إلى بروتون وفق $ {}_{0}^{1}n \\to {}_{1}^{1}p + {}_{-1}^{0}e$؛ وفي الإشعاع $\\beta^+$ يتحول بروتون إلى نوترون وفق $ {}_{1}^{1}p \\to {}_{0}^{1}n + {}_{+1}^{0}e$.
                    </div>
                  </div>

                  <!-- 4 Decay Modes Table -->
                  <div class="overflow-x-auto mb-4">
                    <table class="w-full text-xs text-right border-collapse border border-slate-800 rounded-xl overflow-hidden">
                      <thead class="bg-slate-950 text-amber-300">
                        <tr>
                          <th class="p-2.5 border border-slate-800">الطراز</th>
                          <th class="p-2.5 border border-slate-800">الدقيقة المنبعثة</th>
                          <th class="p-2.5 border border-slate-800">المعادلة الحصيلة بصودي</th>
                          <th class="p-2.5 border border-slate-800">موقع النواة الأب في مخطط سيغري $(N, Z)$</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-800/80 text-slate-200">
                        <tr>
                          <td class="p-2.5 border border-slate-800 font-bold text-rose-300" dir="ltr">$\\alpha$</td>
                          <td class="p-2.5 border border-slate-800">نواة الهيليوم $ {}_{2}^{4}\\text{He}$</td>
                          <td class="p-2.5 border border-slate-800" dir="ltr">$ {}_{Z}^{A}\\text{X} \\longrightarrow {}_{Z-2}^{A-4}\\text{Y} + {}_{2}^{4}\\text{He}$</td>
                          <td class="p-2.5 border border-slate-800">نوى ثقيلة ($A \\gt 200$) — تنخفض $(Z, N)$ بـ $(-2, -2)$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 border border-slate-800 font-bold text-cyan-300" dir="ltr">$\\beta^-$</td>
                          <td class="p-2.5 border border-slate-800">إلكترون $ {}_{-1}^{0}e$</td>
                          <td class="p-2.5 border border-slate-800" dir="ltr">$ {}_{Z}^{A}\\text{X} \\longrightarrow {}_{Z+1}^{A}\\text{Y} + {}_{-1}^{0}e$</td>
                          <td class="p-2.5 border border-slate-800">فوق منطقة الاستقرار (فائض نوترونات): $(Z+1,\\; N-1)$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 border border-slate-800 font-bold text-emerald-300" dir="ltr">$\\beta^+$</td>
                          <td class="p-2.5 border border-slate-800">بوزيترون $ {}_{+1}^{0}e$ (نوى اصطناعية)</td>
                          <td class="p-2.5 border border-slate-800" dir="ltr">$ {}_{Z}^{A}\\text{X} \\longrightarrow {}_{Z-1}^{A}\\text{Y} + {}_{+1}^{0}e$</td>
                          <td class="p-2.5 border border-slate-800">تحت منطقة الاستقرار (فائض بروتونات): $(Z-1,\\; N+1)$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 border border-slate-800 font-bold text-purple-300" dir="ltr">$\\gamma$</td>
                          <td class="p-2.5 border border-slate-800">فوتون كهرمغنطيسي ($\\gamma$)</td>
                          <td class="p-2.5 border border-slate-800" dir="ltr">$ {}_{Z}^{A}\\text{Y}^* \\longrightarrow {}_{Z}^{A}\\text{Y} + \\gamma$</td>
                          <td class="p-2.5 border border-slate-800">فقدان الإثارة النووية بعد تفتت $\\alpha$ أو $\\beta$ دون تغيّر $(Z, A)$</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <!-- Vector SVG Diagram: Segrè Chart (N vs Z) & Decay Vectors -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardSegreDiagram">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>🗺️ مخطط سيغري $(N, Z)$: منطقة الاستقرار، مسار $N = Z$، ومتجهات الانتقال لكل نشاط إشعاعي</span>
                      <span class="text-[11px] font-mono text-amber-400">alpha: (-2,-2) | beta-: (+1,-1) | beta+: (-1,+1)</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 265" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <marker id="arrP4Seg" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                          <marker id="arrP4Cya" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#22d3ee"/>
                          </marker>
                          <marker id="arrP4Eme" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
                          </marker>
                          <marker id="arrP4Ros" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e"/>
                          </marker>
                        </defs>

                        <!-- Grid -->
                        <g stroke="#0f172a" stroke-width="1">
                          <line x1="70" y1="50" x2="430" y2="50"/>
                          <line x1="70" y1="100" x2="430" y2="100"/>
                          <line x1="70" y1="150" x2="430" y2="150"/>
                          <line x1="70" y1="200" x2="430" y2="200"/>
                          <line x1="150" y1="25" x2="150" y2="230"/>
                          <line x1="230" y1="25" x2="230" y2="230"/>
                          <line x1="310" y1="25" x2="310" y2="230"/>
                          <line x1="390" y1="25" x2="390" y2="230"/>
                        </g>

                        <!-- Axes -->
                        <line x1="56" y1="230" x2="434" y2="230" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrP4Seg)"/>
                        <line x1="70" y1="244" x2="70" y2="18" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrP4Seg)"/>
                        <text x="436" y="248" fill="#cbd5e1" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="end">Z (protons)</text>
                        <text x="58" y="20" fill="#cbd5e1" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="end">N</text>
                        <text x="58" y="244" fill="#64748b" font-size="10" font-family="monospace" text-anchor="end">0</text>

                        <!-- Z = 20 marker -->
                        <line x1="150" y1="168" x2="150" y2="230" stroke="#475569" stroke-width="1" stroke-dasharray="3,3"/>
                        <text x="150" y="246" fill="#94a3b8" font-size="9.5" font-family="monospace" text-anchor="middle">Z=20</text>

                        <!-- Bisector N = Z -->
                        <line x1="70" y1="230" x2="315" y2="55" stroke="#64748b" stroke-width="1.4" stroke-dasharray="5,4"/>
                        <text x="320" y="60" fill="#94a3b8" font-size="10" font-family="monospace">N = Z</text>

                        <!-- Stability Valley Ribbon (curved upward past Z=20) -->
                        <path d="M 70 230 Q 150 172 240 105 Q 315 50 382 28" fill="none" stroke="rgba(251,191,36,0.28)" stroke-width="18" stroke-linecap="round"/>
                        <path d="M 70 230 Q 150 172 240 105 Q 315 50 382 28" fill="none" stroke="#fbbf24" stroke-width="2.4"/>
                        <text x="225" y="136" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" transform="rotate(-31 225 136)">Vallee de stabilite</text>

                        <!-- beta- zone (above valley: N surplus) -->
                        <circle cx="176" cy="94" r="5" fill="#22d3ee"/>
                        <line x1="176" y1="94" x2="210" y2="118" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrP4Cya)"/>
                        <text x="160" y="84" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">beta- (exces n)</text>

                        <!-- beta+ zone (below valley: Z surplus) -->
                        <circle cx="288" cy="142" r="5" fill="#34d399"/>
                        <line x1="288" y1="142" x2="254" y2="116" stroke="#34d399" stroke-width="2" marker-end="url(#arrP4Eme)"/>
                        <text x="294" y="158" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace">beta+ (exces p)</text>

                        <!-- alpha zone (heavy nuclei top right A > 200) -->
                        <circle cx="404" cy="36" r="5.5" fill="#f43f5e"/>
                        <line x1="404" y1="36" x2="368" y2="62" stroke="#f43f5e" stroke-width="2.2" marker-end="url(#arrP4Ros)"/>
                        <text x="434" y="76" fill="#fda4af" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">alpha (A&gt;200)</text>

                        <!-- Right Legend / Vector Box -->
                        <rect x="462" y="22" width="204" height="218" rx="10" fill="rgba(15,23,42,0.86)" stroke="#334155" stroke-width="1.3"/>
                        <text x="564" y="46" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Deplacements (Z, N)</text>
                        <line x1="476" y1="58" x2="652" y2="58" stroke="#334155" stroke-width="1"/>
                        <text x="564" y="84" fill="#fda4af" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">alpha : Z-2, N-2</text>
                        <text x="564" y="102" fill="#cbd5e1" font-size="9.5" font-family="monospace" text-anchor="middle">(noyaux lourds A &gt; 200)</text>
                        <text x="564" y="132" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">beta- : Z+1, N-1</text>
                        <text x="564" y="150" fill="#cbd5e1" font-size="9.5" font-family="monospace" text-anchor="middle">(1 n -&gt; 1 p + electron)</text>
                        <text x="564" y="180" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">beta+ : Z-1, N+1</text>
                        <text x="564" y="198" fill="#cbd5e1" font-size="9.5" font-family="monospace" text-anchor="middle">(1 p -&gt; 1 n + positon)</text>
                        <text x="564" y="224" fill="#d8b4fe" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">gamma : Z, N inchanges</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">دقة رموز الدقائق والمحاور</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «تسمية ورمز $ {}_{-1}^{0}e$ مقابل $ {}_{+1}^{0}e$»</b>
                      في $\\beta^-$ تنبعث دقيقة $ {}_{-1}^{0}e$ وهي <b>إلكترون</b> (فيرتفع $Z$ بمقدار $+1$)؛ أما في $\\beta^+$ فتنبعث دقيقة $ {}_{+1}^{0}e$ وهي <b>بوزيترون</b> (إلكترون موجب، فينخفض $Z$ بمقدار $-1$) ولا تكون إلا لنوى اصطناعية!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «محاور مخطط سيغري $(N, Z)$ مقابل $(Z, N)$!»</b>
                      تنبه في الامتحانات الوطنية: أحياناً يُوضع $N$ على محور الأراتيب و $Z$ على الأفاصيل (كما في الشكل أعلاه)، وأحياناً <b>يُعكسان</b>! اقرأ تسمية المحورين أولاً ثم حدّد أين يوجد فائض النوترونات ($N \\gt Z$) لتعرف منطقة $\\beta^-$ دون حفظ أعمى!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «النواة الابنة المثارة $^*$ عند الإشعاع $\\gamma$»</b>
                      إذا أُشير في المعطيات أن الإشعاع $\\beta^-$ أو $\\alpha$ يؤدي إلى نواة مثارة يتبعه إشعاع $\\gamma$، اكتب نجمة الإثارة في المعادلة الأولى ($ {}_{Z'}^{A'}\\text{Y}^*$) ثم اكتب معادلة فقدان الإثارة ($ {}_{Z'}^{A'}\\text{Y}^* \\to {}_{Z'}^{A'}\\text{Y} + \\gamma$) منفصلة دون تغيير $A'$ أو $Z'$.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «البحث عن $x$ و $y$ في فصيلة مشعة متتالية!»</b>
                      في معادلة حصيلة من الشكل $\\text{U} \\to \\text{Pb} + x\\,{}_{2}^{4}\\text{He} + y\\,{}_{-1}^{0}e$، احسب دائماً <b>$x$ أولاً من انحفاظ $A$</b> (لأن $A=0$ للإلكترون)، ثم عوّض $x$ في معادلة <b>انحفاظ $Z$</b> لإيجاد $y$!
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1 (كلاسيكي وطني): الفصيلة الإشعاعية الأورانيوم-الرصاص واستغلال قوانين صودي</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      يتحول الأورانيوم المشع $ {}_{92}^{238}\\text{U}$ تلقائياً عبر سلسلة من التفتتات المتتالية من النوعين $\\alpha$ و $\\beta^-$ إلى نواة الرصاص المستقرة $ {}_{82}^{206}\\text{Pb}$.<br/>
                      <b>1.</b> أعطِ تركيب نواة الأورانيوم $ {}_{92}^{238}\\text{U}$، ثم اذكر أربع خصائص للنشاط الإشعاعي. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> اكتب المعادلة الحصيلة لهذا التحول محدداً عدد تفتتات $\\alpha$ ($x$) وعدد تفتتات $\\beta^-$ ($y$). <span class="text-emerald-400 font-mono">(1.00 ن)</span><br/>
                      <b>3.</b> التفتت الأول في السلسلة هو تفتت $\\alpha$ يعطي نواة الثوريوم $\\text{Th}$، ويليه تفتت $\\beta^-$ للثوريوم يعطي نواة البروتكتينيوم $ {}_{Z_2}^{A_2}\\text{Pa}$ في حالة مثارة متبوعاً بانبعاث $\\gamma$. اكتب هذه المعادلات الثلاث مع التبرير المجهري لـ $\\beta^-$. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. تركيب النواة والخصائص (0.50 ن):</b> تحتوي نواة $ {}_{92}^{238}\\text{U}$ على $Z = 92$ بروتوناً و $N = 238 - 92 = 146$ نوتروناً ($238$ نوية). التفتت الإشعاعي ظاهرة <b>تلقائية، عشوائية، حتمية، ومستقلة عن العوامل الفيزيوكيميائية</b>.</p>
                      <p><b>2. تحديد $x$ و $y$ بقانوني صودي (1.00 ن):</b> المعادلة الحصيلة:
                      $$ {}_{92}^{238}\\text{U} \\longrightarrow {}_{82}^{206}\\text{Pb} + x\\,{}_{2}^{4}\\text{He} + y\\,{}_{-1}^{0}e$$
                      • انحفاظ عدد النويات $A$: $238 = 206 + 4x + 0 \\implies 4x = 32 \\implies x = 8$ دقائق $\\alpha$.<br/>
                      • انحفاظ عدد الشحنة $Z$: $92 = 82 + 2x - y \\implies 92 = 82 + 16 - y \\implies y = 6$ دقائق $\\beta^-$.<br/>
                      إذن يتطلب التحول <b>$8$ تفتتات $\\alpha$ و $6$ تفتتات $\\beta^-$</b>.</p>
                      <p><b>3. المعادلات المتتالية وتفسير $\\beta^-$ (0.50 ن):</b><br/>
                      • التفتت الأول ($\\alpha$): $ {}_{92}^{238}\\text{U} \\longrightarrow {}_{90}^{234}\\text{Th} + {}_{2}^{4}\\text{He}$.<br/>
                      • التفتت الثاني ($\\beta^-$): $ {}_{90}^{234}\\text{Th} \\longrightarrow {}_{91}^{234}\\text{Pa}^* + {}_{-1}^{0}e$ (ينشأ الإلكترون من تحول نوترون إلى بروتون: $ {}_{0}^{1}n \\to {}_{1}^{1}p + {}_{-1}^{0}e$).<br/>
                      • فقدان الإثارة ($\\gamma$): $ {}_{91}^{234}\\text{Pa}^* \\longrightarrow {}_{91}^{234}\\text{Pa} + \\gamma$.</p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: التعرف على النويدة المتولدة ونمط الإشعاع في الطب النووي ($\\beta^+$ و $\\beta^-$)</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      يُستعمل نظير الفلور $ {}_{9}^{18}\\text{F}$ في التصوير المقطعي بالإصدار البوزيتروني (PET)، كما يُستعمل الكوبالت $ {}_{27}^{60}\\text{Co}$ في العلاج الإشعاعي. (نعطي من الجدول الدوري: $ {}_{8}\\text{O}$، $ {}_{10}\\text{Ne}$، $ {}_{26}\\text{Fe}$، $ {}_{28}\\text{Ni}$).<br/>
                      <b>1.</b> يتفتت الفلور $18$ باعثاً دقيقة $ {}_{+1}^{0}e$. اكتب معادلة التفتت النووي محدداً اسم الطراز والنواة المتولدة. أين يقع $ {}_{9}^{18}\\text{F}$ مقارنة بمنطقة الاستقرار في مخطط $(N, Z)$؟ <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> يتحول الكوبالت $60$ إلى نواة النيكل $ {}_{28}^{60}\\text{Ni}^*$ مثارة، ثم تفقد إثارتها. اكتب المعادلتين وحدّد طراز التفتت الأول ومصدر الدقيقة المنبعثة. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. تفتت الفلور $18$ (0.75 ن):</b> نكتب $ {}_{9}^{18}\\text{F} \\longrightarrow {}_{Z}^{A}\\text{Y} + {}_{+1}^{0}e$. بتطبيق قانوني صودي: $A = 18$ و $Z = 9 - 1 = 8$، إذن النواة المتولدة هي الأوكسجين $ {}_{8}^{18}\\text{O}$. الطراز هو <b>$\\beta^+$</b>، ويقع $ {}_{9}^{18}\\text{F}$ ($N=9, Z=9$) <b>تحت منطقة الاستقرار</b> لأن نسبة $N/Z = 1$ أدنى من منطقة الاستقرار لنفس $A=18$ (التي ينتمي إليها $ {}_{8}^{18}\\text{O}$ المستقر حيث $N=10 \\gt Z=8$)، أي له فائض نسبي في البروتونات.</p>
                      <p><b>2. تفتت الكوبالت $60$ وفقدان الإثارة (0.75 ن):</b><br/>
                      • $ {}_{27}^{60}\\text{Co} \\longrightarrow {}_{28}^{60}\\text{Ni}^* + {}_{Z'}^{A'}\\text{p}$: صودي تعطي $A' = 0$ و $Z' = 27 - 28 = -1$، فالدقيقة هي إلكترون $ {}_{-1}^{0}e$ والطراز <b>$\\beta^-$</b> (تحول نوترون إلى بروتون وإلكترون).<br/>
                      • معادلة فقدان الإثارة: $ {}_{28}^{60}\\text{Ni}^* \\longrightarrow {}_{28}^{60}\\text{Ni} + \\gamma$.</p>
                    </div>
                  </div>
                </div>

                <!-- 4. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">قراءة الإزاحة العكسية في مخطط سيغري</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    تخضع نواة البزموت $ {}_{83}^{212}\\text{Bi}$ إلى تفتت من نوع $\\alpha$ يعطي نواة $Y_1$، ثم تخضع $Y_1$ إلى تفتت من نوع $\\beta^-$ لتعطي نواة الرصاص $Y_2$.<br/>
                    1) حدّد إحداثيي $(Z_1, N_1)$ للنواة $Y_1$ وإحداثيي $(Z_2, N_2)$ للنواة $Y_2$.<br/>
                    2) احسب الإزاحة الكلية $(\\Delta Z, \\Delta N)$ للانتقال من $ {}_{83}^{212}\\text{Bi}$ إلى $Y_2$ في مخطط $(N, Z)$، ثم اكتب معادلة التفتت الثاني علماً أن $Y_1$ هي عنصر الثاليوم ($\\text{Tl}$).
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. تتبع النواتين $Y_1$ و $Y_2$:</b><br/>
                      • التفتت $\\alpha$ ينقص $Z$ بـ $2$ و $A$ بـ $4$ (ومنه $N$ بـ $2$): $A_1 = 212 - 4 = 208$، $Z_1 = 83 - 2 = 81$، و $N_1 = 208 - 81 = 127$؛ إذن $Y_1$ هي $ {}_{81}^{208}\\text{Tl}$.<br/>
                      • التفتت $\\beta^-$ يزيد $Z$ بـ $1$ ويُبقي $A$ ثابتاً (فينقص $N$ بـ $1$): $A_2 = 208$، $Z_2 = 81 + 1 = 82$، و $N_2 = 208 - 82 = 126$؛ إذن $Y_2$ هي $ {}_{82}^{208}\\text{Pb}$.</p>
                      <p><b>2. الإزاحة الكلية والمعادلة:</b><br/>
                      • في البداية كان لبزموت $Z_0 = 83$ و $N_0 = 212 - 83 = 129$؛ إذن $\\Delta Z = 82 - 83 = -1$ و $\\Delta N = 126 - 129 = -3$.<br/>
                      • معادلة التفتت الثاني: $ {}_{81}^{208}\\text{Tl} \\longrightarrow {}_{82}^{208}\\text{Pb} + {}_{-1}^{0}e$.</p>
                    </div>
                  </details>
                </div>
              </div>

`);
