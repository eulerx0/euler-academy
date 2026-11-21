window.EulerAcademy.registerAxis('chem-01', 'c01-ax1', `

              <div class="space-y-6">
                <!-- 1. Official Definitions -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">1. التعاريف الرسمية للأكسدة والاختزال والمزدوجة $\\text{Ox}/\\text{Réd}$</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">أ) المؤكسد (Oxydant — $\\text{Ox}$) وتفاعل الاختزال:</b>
                      • <b>المؤكسد:</b> كل نوع كيميائي (ذرة، جزيئة، أو أيون) <b>قادر على اكتساب إلكترون واحد أو أكثر</b> خلال تحول كيميائي:
                      $$\\text{Ox} + n\\,e^- = \\text{Réd}$$
                      • <b>الاختزال (Réduction):</b> تحول كيميائي يتم خلاله <b>اكتساب إلكترونات</b> من طرف المؤكسد ($\\text{Ox} + n\\,e^- \\longrightarrow \\text{Réd}$).
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 text-sm block mb-1.5">ب) المختزل (Réducteur — $\\text{Réd}$) وتفاعل الأكسدة:</b>
                      • <b>المختزل:</b> كل نوع كيميائي <b>قادر على فقدان (تحرير) إلكترون واحد أو أكثر</b> خلال تحول كيميائي:
                      $$\\text{Réd} = \\text{Ox} + n\\,e^-$$
                      • <b>الأكسدة (Oxydation):</b> تحول كيميائي يتم خلاله <b>فقدان إلكترونات</b> من طرف المختزل ($\\text{Réd} \\longrightarrow \\text{Ox} + n\\,e^-$).
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 mt-4">
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 block mb-1">🔗 المزدوجة مؤكسد / مختزل ($\\text{Ox}/\\text{Réd}$):</b>
                      يترافق كل مؤكسد $\\text{Ox}$ مع مختزله المرافق $\\text{Réd}$ في مزدوجة تكتب اصطلاحاً <b>بوضع المؤكسد على اليسار والمختزل على اليمين</b>:
                      $$\\text{Ox} / \\text{Réd} \\qquad \\text{ex: } \\text{MnO}_4^- / \\text{Mn}^{2+} \\; , \\; \\text{I}_2 / \\text{I}^-$$
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-purple-500/30">
                      <b class="text-purple-400 block mb-1">⚡ تفاعل الأكسدة-اختزال (Oxydo-réduction):</b>
                      تحول كيميائي يحدث خلاله <b>انتقال مباشر لإلكترون واحد أو أكثر</b> من <b>مختزل</b> مزدوجة ($\\text{Réd}_2$) إلى <b>مؤكسد</b> مزدوجة أخرى ($\\text{Ox}_1$)؛ ولا تظهر الإلكترونات الحرة أبداً في المعادلة الحصيلة!
                    </div>
                  </div>

                  <!-- SVG Diagram 1: Electron Transfer Mechanism -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardRedoxTransfer">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>⚡ آلية انتقال الإلكترونات بين المزدوجتين $\\text{Ox}_1/\\text{Réd}_1$ و $\\text{Ox}_2/\\text{Réd}_2$</span>
                      <span class="text-[11px] font-mono text-emerald-400">Ox₁ + Réd₂ → Réd₁ + Ox₂</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
                        <div class="flex flex-wrap items-center gap-4">
                          <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-3 h-3 rounded-full bg-cyan-500/40 border border-cyan-400"></span> اختزال المؤكسد Ox₁ (اكتساب e⁻)</span>
                          <span class="flex items-center gap-1.5 text-amber-300"><span class="inline-block w-3 h-3 rounded-full bg-amber-500/40 border border-amber-400"></span> أكسدة المختزل Réd₂ (فقدان e⁻)</span>
                        </div>
                        <span class="text-emerald-300 font-mono">Conservation de charge</span>
                      </div>
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 172" class="w-full h-auto">
                        <defs>
                          <marker id="arrRedoxE" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
                          </marker>
                          <marker id="arrOxRed1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#22d3ee"/>
                          </marker>
                          <marker id="arrOxRed2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24"/>
                          </marker>
                        </defs>

                        <!-- Left box: Reactants (Ox1 and Réd2) -->
                        <rect x="35" y="28" width="130" height="44" rx="10" fill="rgba(34,211,238,0.12)" stroke="#22d3ee" stroke-width="1.8"/>
                        <text x="100" y="55" fill="#22d3ee" font-size="15" font-weight="bold" font-family="monospace" text-anchor="middle">Ox₁</text>

                        <rect x="35" y="102" width="130" height="44" rx="10" fill="rgba(251,191,36,0.12)" stroke="#fbbf24" stroke-width="1.8"/>
                        <text x="100" y="129" fill="#fbbf24" font-size="15" font-weight="bold" font-family="monospace" text-anchor="middle">Réd₂</text>

                        <!-- Right box: Products (Réd1 and Ox2) -->
                        <rect x="515" y="28" width="130" height="44" rx="10" fill="rgba(34,211,238,0.06)" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,3"/>
                        <text x="580" y="55" fill="#7dd3fc" font-size="15" font-weight="bold" font-family="monospace" text-anchor="middle">Réd₁</text>

                        <rect x="515" y="102" width="130" height="44" rx="10" fill="rgba(251,191,36,0.06)" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/>
                        <text x="580" y="129" fill="#fde68a" font-size="15" font-weight="bold" font-family="monospace" text-anchor="middle">Ox₂</text>

                        <!-- Top reaction arrow: Ox1 -> Réd1 (Réduction) -->
                        <line x1="172" y1="50" x2="505" y2="50" stroke="#22d3ee" stroke-width="2.2" marker-end="url(#arrOxRed1)"/>
                        <text x="340" y="40" fill="#22d3ee" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Réduction (+ n e⁻)</text>

                        <!-- Bottom reaction arrow: Réd2 -> Ox2 (Oxydation) -->
                        <line x1="172" y1="124" x2="505" y2="124" stroke="#fbbf24" stroke-width="2.2" marker-end="url(#arrOxRed2)"/>
                        <text x="340" y="143" fill="#fbbf24" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Oxydation (- n e⁻)</text>

                        <!-- Electron transfer curved arrow from Réd2 to Ox1 -->
                        <path d="M 185 112 C 255 96, 255 78, 185 62" fill="none" stroke="#34d399" stroke-width="2.6" marker-end="url(#arrRedoxE)"/>
                        <rect x="242" y="76" width="108" height="22" rx="6" fill="#050811" stroke="rgba(52,211,153,0.45)" stroke-width="1"/>
                        <text x="296" y="91" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Transfert n e⁻</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Strict 5-Step Balancing Protocol -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">2. المنهجية الصارمة لموازنة أنصاف المعادلات والمعادلة الحصيلة</span>
                    <span class="text-xs text-slate-400 font-mono">Équilibrage en milieu acide</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-3">
                    لضمان صحة أي نصف معادلة إلكترونية في وسط مائي حمضي (سواء بصيغة البروتونات $\\text{H}^+$ أو أيونات الأوكسونيوم $\\text{H}_3\\text{O}^+$) والحصول على العلامة الكاملة في الامتحان الوطني، يجب احترام الترتيب الصارم للخطوات الأربع التالية ثم جمع نصفي المعادلتين:
                  </p>

                  <!-- SVG Diagram 2: Balancing Order Workflow -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardRedoxChecklist">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>🧭 التسلسل الإجباري لموازنة نصف معادلة الأكسدة-اختزال</span>
                      <span class="text-[11px] font-mono text-cyan-400">1. Atomes → 2. O (H₂O) → 3. H (H⁺ / H₃O⁺) → 4. Charge (e⁻)</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 96" class="w-full h-auto">
                        <defs>
                          <marker id="arrStep" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
                          </marker>
                        </defs>
                        <!-- Step 1 -->
                        <rect x="12" y="16" width="144" height="62" rx="10" fill="rgba(34,211,238,0.10)" stroke="#22d3ee" stroke-width="1.5"/>
                        <text x="84" y="39" fill="#22d3ee" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1) Autres atomes</text>
                        <text x="84" y="61" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">Cr, Mn, C, S, I...</text>

                        <line x1="158" y1="47" x2="178" y2="47" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrStep)"/>

                        <!-- Step 2 -->
                        <rect x="182" y="16" width="144" height="62" rx="10" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="1.5"/>
                        <text x="254" y="39" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">2) Élément O</text>
                        <text x="254" y="61" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">+ k H₂O</text>

                        <line x1="328" y1="47" x2="348" y2="47" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrStep)"/>

                        <!-- Step 3 -->
                        <rect x="352" y="16" width="144" height="62" rx="10" fill="rgba(251,191,36,0.10)" stroke="#fbbf24" stroke-width="1.5"/>
                        <text x="424" y="39" fill="#fbbf24" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">3) Élément H</text>
                        <text x="424" y="61" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">+ m H⁺ (ou H₃O⁺)</text>

                        <line x1="498" y1="47" x2="518" y2="47" stroke="#64748b" stroke-width="1.8" marker-end="url(#arrStep)"/>

                        <!-- Step 4 -->
                        <rect x="522" y="16" width="146" height="62" rx="10" fill="rgba(192,132,252,0.10)" stroke="#c084fc" stroke-width="1.5"/>
                        <text x="595" y="39" fill="#c084fc" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">4) Charge</text>
                        <text x="595" y="61" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">+ n e⁻ (côté Ox)</text>
                      </svg>
                    </div>
                  </div>

                  <div class="space-y-3 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1.5">🔄 الانتقال الفوري من كتابة $\\text{H}^+$ إلى كتابة $\\text{H}_3\\text{O}^+$ (مطلوبة بكثرة في الوطني):</b>
                      أيون الهيدروجين $\\text{H}^+$ في المحلول المائي يكون مميّهاً على شكل أيون الأوكسونيوم $\\text{H}_3\\text{O}^+$ وفق العلاقة $\\text{H}^+ + \\text{H}_2\\text{O} = \\text{H}_3\\text{O}^+$.<br/>
                      • <b>القاعدة العملية المضمونة:</b> وازِن أولاً باستعمال $m\\,\\text{H}^+$ (لسهولة الحساب)، ثم استبدل كل $m\\,\\text{H}^+$ بـ $m\\,\\text{H}_3\\text{O}^+$ وأضِف <b>نفس العدد $m\\,\\text{H}_2\\text{O}$ إلى الطرف المقابل</b>!<br/>
                      <span class="text-emerald-300 font-mono block mt-1" dir="ltr">Exemple (MnO₄⁻ / Mn²⁺): MnO₄⁻ + 8 H⁺ + 5 e⁻ = Mn²⁺ + 4 H₂O ⟹ MnO₄⁻ + 8 H₃O⁺ + 5 e⁻ = Mn²⁺ + 12 H₂O</span>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 block mb-1.5">📐 مثال تطبيقي مرحلي (المزدوجة المرجعية $\\text{Cr}_2\\text{O}_7^{2-} / \\text{Cr}^{3+}$):</b>
                      <ul class="space-y-1 pr-2">
                        <li>• <b>الخطوة 1 (الكروم $\\text{Cr}$):</b> $\\text{Cr}_2\\text{O}_7^{2-} \\longleftrightarrow 2\\,\\text{Cr}^{3+}$</li>
                        <li>• <b>الخطوة 2 (الأوكسجين $\\text{O}$):</b> $\\text{Cr}_2\\text{O}_7^{2-} \\longleftrightarrow 2\\,\\text{Cr}^{3+} + 7\\,\\text{H}_2\\text{O}$</li>
                        <li>• <b>الخطوة 3 (الهيدروجين $\\text{H}$):</b> $\\text{Cr}_2\\text{O}_7^{2-} + 14\\,\\text{H}^+ \\longleftrightarrow 2\\,\\text{Cr}^{3+} + 7\\,\\text{H}_2\\text{O}$</li>
                        <li>• <b>الخطوة 4 (الشحنة بـ $e^-$):</b> يساراً $(-2) + (+14) = +12$، ويميناً $2(+3) = +6$؛ إذن نضيف $6\\,e^-$ يساراً:
                          $$\\text{Cr}_2\\text{O}_7^{2-}(\\text{aq}) + 14\\,\\text{H}^+(\\text{aq}) + 6\\,e^- = 2\\,\\text{Cr}^{3+}(\\text{aq}) + 7\\,\\text{H}_2\\text{O}(\\ell)$$
                          أو باستعمال $\\text{H}_3\\text{O}^+$:
                          $$\\text{Cr}_2\\text{O}_7^{2-}(\\text{aq}) + 14\\,\\text{H}_3\\text{O}^+(\\text{aq}) + 6\\,e^- = 2\\,\\text{Cr}^{3+}(\\text{aq}) + 21\\,\\text{H}_2\\text{O}(\\ell)$$
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- 3. Reference Table of Classic National Exam Redox Couples -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">3. البنك المرجعي للمزدوجات $\\text{Ox}/\\text{Réd}$ الأكثر وروداً في امتحانات 2BAC PC</span>
                    <span class="text-xs text-slate-400 font-mono">Couples de référence</span>
                  </div>

                  <div class="overflow-x-auto">
                    <table class="w-full text-xs text-right border-collapse border border-slate-800 rounded-xl overflow-hidden">
                      <thead class="bg-slate-950 text-cyan-300">
                        <tr>
                          <th class="p-2.5 border border-slate-800">المزدوجة $\\text{Ox}/\\text{Réd}$</th>
                          <th class="p-2.5 border border-slate-800">نصف المعادلة (بـ $\\text{H}^+$)</th>
                          <th class="p-2.5 border border-slate-800">نصف المعادلة (بـ $\\text{H}_3\\text{O}^+$)</th>
                          <th class="p-2.5 border border-slate-800">ملاحظة بصرية في المخبر</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-800 bg-slate-900/50 text-slate-200">
                        <tr>
                          <td class="p-2.5 font-mono text-purple-300 border border-slate-800" dir="ltr">$\\text{MnO}_4^- / \\text{Mn}^{2+}$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{MnO}_4^- + 8\\,\\text{H}^+ + 5\\,e^- = \\text{Mn}^{2+} + 4\\,\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{MnO}_4^- + 8\\,\\text{H}_3\\text{O}^+ + 5\\,e^- = \\text{Mn}^{2+} + 12\\,\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 border border-slate-800">بنفسجي ($\\text{MnO}_4^-$) $\\to$ عديم اللون ($\\text{Mn}^{2+}$)</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-amber-300 border border-slate-800" dir="ltr">$\\text{Cr}_2\\text{O}_7^{2-} / \\text{Cr}^{3+}$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{Cr}_2\\text{O}_7^{2-} + 14\\,\\text{H}^+ + 6\\,e^- = 2\\,\\text{Cr}^{3+} + 7\\,\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{Cr}_2\\text{O}_7^{2-} + 14\\,\\text{H}_3\\text{O}^+ + 6\\,e^- = 2\\,\\text{Cr}^{3+} + 21\\,\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 border border-slate-800">برتقالي ($\\text{Cr}_2\\text{O}_7^{2-}$) $\\to$ أخضر ($\\text{Cr}^{3+}$)</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-amber-400 border border-slate-800" dir="ltr">$\\text{I}_2 / \\text{I}^-$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{I}_2 + 2\\,e^- = 2\\,\\text{I}^-$</td>
                          <td class="p-2.5 font-mono text-slate-400 border border-slate-800" dir="ltr">لا تحتاج $\\text{H}^+$ أو $\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 border border-slate-800">بني مصفر ($\\text{I}_2$) $\\leftrightarrow$ عديم اللون ($\\text{I}^-$)</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-cyan-300 border border-slate-800" dir="ltr">$\\text{S}_2\\text{O}_8^{2-} / \\text{SO}_4^{2-}$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{S}_2\\text{O}_8^{2-} + 2\\,e^- = 2\\,\\text{SO}_4^{2-}$</td>
                          <td class="p-2.5 font-mono text-slate-400 border border-slate-800" dir="ltr">لا تحتاج $\\text{H}^+$ أو $\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 border border-slate-800">عديمة اللون (تُستعمل كثيراً مع $\\text{I}^-$)</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-cyan-300 border border-slate-800" dir="ltr">$\\text{S}_4\\text{O}_6^{2-} / \\text{S}_2\\text{O}_3^{2-}$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{S}_4\\text{O}_6^{2-} + 2\\,e^- = 2\\,\\text{S}_2\\text{O}_3^{2-}$</td>
                          <td class="p-2.5 font-mono text-slate-400 border border-slate-800" dir="ltr">أساسية في معايرة ثنائي اليود $\\text{I}_2$</td>
                          <td class="p-2.5 border border-slate-800">أيونات الثيوكبريتات $\\text{S}_2\\text{O}_3^{2-}$ عديمة اللون</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-emerald-300 border border-slate-800" dir="ltr">$\\text{CO}_2 / \\text{H}_2\\text{C}_2\\text{O}_4$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$2\\,\\text{CO}_2 + 2\\,\\text{H}^+ + 2\\,e^- = \\text{H}_2\\text{C}_2\\text{O}_4$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$2\\,\\text{CO}_2 + 2\\,\\text{H}_3\\text{O}^+ + 2\\,e^- = \\text{H}_2\\text{C}_2\\text{O}_4 + 2\\,\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 border border-slate-800">انطلاق فقاعات غاز $\\text{CO}_2$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-rose-300 border border-slate-800" dir="ltr">$\\text{O}_2 / \\text{H}_2\\text{O}_2$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{O}_2 + 2\\,\\text{H}^+ + 2\\,e^- = \\text{H}_2\\text{O}_2$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{O}_2 + 2\\,\\text{H}_3\\text{O}^+ + 2\\,e^- = \\text{H}_2\\text{O}_2 + 2\\,\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 border border-slate-800">الماء الأوكسيجيني كمختزل (تصاعد $\\text{O}_2$)</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-rose-300 border border-slate-800" dir="ltr">$\\text{H}_2\\text{O}_2 / \\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{H}_2\\text{O}_2 + 2\\,\\text{H}^+ + 2\\,e^- = 2\\,\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{H}_2\\text{O}_2 + 2\\,\\text{H}_3\\text{O}^+ + 2\\,e^- = 4\\,\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 border border-slate-800">الماء الأوكسيجيني كمؤكسد</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-cyan-300 border border-slate-800" dir="ltr">$\\text{H}_3\\text{O}^+ / \\text{H}_2$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$2\\,\\text{H}^+ + 2\\,e^- = \\text{H}_2$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$2\\,\\text{H}_3\\text{O}^+ + 2\\,e^- = \\text{H}_2 + 2\\,\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 border border-slate-800">تفاعل الأحماض مع الفلزات (تصاعد $\\text{H}_2$)</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-sky-300 border border-slate-800" dir="ltr">$\\text{Cu}^{2+} / \\text{Cu}$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{Cu}^{2+} + 2\\,e^- = \\text{Cu}$</td>
                          <td class="p-2.5 font-mono text-slate-400 border border-slate-800" dir="ltr">لا تحتاج $\\text{H}^+$ أو $\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 border border-slate-800">أزرق ($\\text{Cu}^{2+}$) / راسب أحمر آجوري ($\\text{Cu}$)</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-slate-300 border border-slate-800" dir="ltr">$\\text{Zn}^{2+} / \\text{Zn}$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{Zn}^{2+} + 2\\,e^- = \\text{Zn}$</td>
                          <td class="p-2.5 font-mono text-slate-400 border border-slate-800" dir="ltr">لا تحتاج $\\text{H}^+$ أو $\\text{H}_2\\text{O}$</td>
                          <td class="p-2.5 border border-slate-800">تآكل فلز الزنك الرمادي في الوسط الحمضي</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-slate-300 border border-slate-800" dir="ltr">$\\text{Al}^{3+} / \\text{Al}$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\text{Al}^{3+} + 3\\,e^- = \\text{Al}$</td>
                          <td class="p-2.5 font-mono text-slate-400 border border-slate-800" dir="ltr">يتبادل $3$ إلكترونات (انتبه عند التوحيد!)</td>
                          <td class="p-2.5 border border-slate-800">تآكل فلز الألمنيوم وتكون أيونات عديمة اللون</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <!-- Subsection 3.2: Tableau d'avancement & Ions spectateurs -->
                  <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 block mb-1.5">📊 استثمار جدول التقدم وحساب $x_{\\max}$ (مفتاح الدرسين 01 و 02):</b>
                      لتفاعل عام $a\\,\\text{Ox}_1 + b\\,\\text{Réd}_2 \\longrightarrow c\\,\\text{Réd}_1 + d\\,\\text{Ox}_2$ بكميتين بدئيتين $n_0(\\text{Ox}_1)$ و $n_0(\\text{Réd}_2)$:<br/>
                      • عند لحظة $t$ (التقدم $x$): $n(\\text{Ox}_1) = n_0(\\text{Ox}_1) - a\\,x$ و $n(\\text{Réd}_2) = n_0(\\text{Réd}_2) - b\\,x$.<br/>
                      • <b>المتفاعل المحد والتقدم الأقصى:</b>
                      $$x_{\\max} = \\min\\!\\left(\\frac{n_0(\\text{Ox}_1)}{a} \\;,\\; \\frac{n_0(\\text{Réd}_2)}{b}\\right)$$
                      • إذا تساوت النسبتان: المزيج <b>ستوكيومتري</b> ويختفي المتفاعلان معاً عند نهاية التحول.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 block mb-1.5">👁️ الأيونات المتفرجة (Ions spectateurs — تجنب الخلط القاتل):</b>
                      لا تُدرج أبداً في المعادلة الحصيلة لتفاعل الأكسدة-اختزال الأيوناتُ التي لا يتغير عدد تأكسدها ولا تشارك في تبادل الإلكترونات، ومن أشهرها:<br/>
                      • أيونات البوتاسيوم والصوديوم $\\text{K}^+, \\text{Na}^+$ (من $\\text{KMnO}_4, \\text{KI}, \\text{K}_2\\text{S}_2\\text{O}_8, \\text{K}_2\\text{Cr}_2\\text{O}_7$).<br/>
                      • أيونات الكلورور $\\text{Cl}^-$ (في حمض الكلوريدريك $\\text{H}_3\\text{O}^+ + \\text{Cl}^-$) وأيونات الكبريتات $\\text{SO}_4^{2-}$ (عند التحميض بحمض الكبريتيك $2\\,\\text{H}_3\\text{O}^+ + \\text{SO}_4^{2-}$)!
                    </div>
                  </div>

                  <!-- Subsection 3.3: Special Case: Dismutation of Hydrogen Peroxide -->
                  <div class="mt-4 bg-slate-950 p-4 rounded-xl border border-rose-500/30 text-xs text-slate-200 leading-relaxed">
                    <b class="text-rose-300 block mb-1.5">🔥 حالة خاصة متكررة في 2BAC PC — التفكك الذاتي للماء الأوكسيجيني (Dismutation de $\\text{H}_2\\text{O}_2$):</b>
                    يلعب الماء الأوكسيجيني $\\text{H}_2\\text{O}_2$ دور المؤكسد في المزدوجة $\\text{H}_2\\text{O}_2 / \\text{H}_2\\text{O}$ ودور المختزل في المزدوجة $\\text{O}_2 / \\text{H}_2\\text{O}_2$ في آنٍ واحد. ولذلك يتفكك ذاتياً (تفاعل بطيء يتسارع بوجود محفز مثل أيونات $\\text{Fe}^{3+}$) وفق نصفي المعادلتين:<br/>
                    • اختزال: $\\text{H}_2\\text{O}_2(\\text{aq}) + 2\\,\\text{H}^+(\\text{aq}) + 2\\,e^- = 2\\,\\text{H}_2\\text{O}(\\ell)$<br/>
                    • أكسدة: $\\text{H}_2\\text{O}_2(\\text{aq}) = \\text{O}_2(\\text{g}) + 2\\,\\text{H}^+(\\text{aq}) + 2\\,e^-$<br/>
                    ومنه نحصل بالجمع على المعادلة الحصيلة الشهيرة:
                    $$2\\,\\text{H}_2\\text{O}_2(\\text{aq}) \\longrightarrow 2\\,\\text{H}_2\\text{O}(\\ell) + \\text{O}_2(\\text{g})$$
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
                      <b class="text-rose-400 block mb-1">1. فخ نسيان المعامل التناسبي للعنصر الرئيسي:</b>
                      كتابة $\\text{I}_2 + e^- = \\text{I}^-$ أو $\\text{S}_4\\text{O}_6^{2-} + e^- = \\text{S}_2\\text{O}_3^{2-}$ خطأ فادح يُفسد المعادلة الحصيلة وجدول التقدم برمّته!<br/>
                      ✓ <b>القاعدة:</b> ابدأ دائماً بموازنة الذرات الأخرى ($2\\,\\text{I}^-$، $2\\,\\text{Cr}^{3+}$، $2\\,\\text{S}_2\\text{O}_3^{2-}$، $2\\,\\text{CO}_2$).
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">2. فخ جمع الإلكترونات أو بقاء $\\text{H}_2\\text{O}$ و $\\text{H}^+$ غير مختزلة:</b>
                      بعد ضرب نصفي المعادلتين وجمعهما، يجب <b>اختزال الإلكترونات كلياً</b> ثم تبسيط الأنواع المشتركة ($\\text{H}_2\\text{O}$ أو $\\text{H}^+$) التي تظهر في الطرفين.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">3. فخ التمييز بين «المؤكسد» و«النوع المؤكسَد»:</b>
                      • المتفاعل الذي يتعرّض للأكسدة (يفقد إلكترونات) هو <b>المختزل $\\text{Réd}$</b>.<br/>
                      • المتفاعل الذي يتعرّض للاختزال (يكتسب إلكترونات) هو <b>المؤكسد $\\text{Ox}$</b>.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">4. فخ التحقق العكسي بعد كتابة المعادلة الحصيلة:</b>
                      لا تنتقل أبداً لجدول التقدم قبل التحقق من <b>شرطين متلازمين</b> في المعادلة الحصيلة:<br/>
                      1) انحفاظ جميع الذرات (وخاصة $\\text{O}$ و $\\text{H}$).<br/>
                      2) تساوي الشحنة الكهربائية الكلية بين المتفاعلات والنواتج!
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: موازنة تفاعل أيونات ثنائي كرومات مع حمض الأوكساليك بصيغة $\\text{H}_3\\text{O}^+$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نمزج محلولاً مائياً لثنائي كرومات البوتاسيوم $(2\\text{K}^+ + \\text{Cr}_2\\text{O}_7^{2-})$ محمّضاً بحمض الكبريتيك (مصدر وافر لأيونات $\\text{H}_3\\text{O}^+$) مع محلول مائي لحمض الأوكساليك $\\text{H}_2\\text{C}_2\\text{O}_4(\\text{aq})$. تتدخل في هذا التحول المزدوجتان $\\text{Cr}_2\\text{O}_7^{2-}(\\text{aq}) / \\text{Cr}^{3+}(\\text{aq})$ و $\\text{CO}_2(\\text{g}) / \\text{H}_2\\text{C}_2\\text{O}_4(\\text{aq})$.
                      <br/><b>1.</b> اكتب نصف المعادلة الإلكترونية الموافقة لكل مزدوجة مع توضيح أيهما يخضع للأكسدة وأيهما للاختزال (بصيغة $\\text{H}_3\\text{O}^+$). <span class="text-emerald-400 font-mono">(1.00 ن)</span>
                      <br/><b>2.</b> استنتج المعادلة الحصيلة لتفاعل الأكسدة-اختزال مع الاختزال التام لجزيئات الماء الزائدة. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                      <br/><b>3.</b> تحقّق رقمياً من انحفاظ الذرات والشحنة في المعادلة الحصيلة المحصل عليها. <span class="text-emerald-400 font-mono">(0.25 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. كتابة نصفي المعادلتين الإلكترونيتين:</b><br/>
                      • <b>اختزال المؤكسد $\\text{Cr}_2\\text{O}_7^{2-}$:</b> (بموازنة $2\\,\\text{Cr}^{3+}$ ثم $7\\,\\text{H}_2\\text{O}$ ثم $14\\,\\text{H}^+$ والتحويل لـ $14\\,\\text{H}_3\\text{O}^+$ بإضافة $14\\,\\text{H}_2\\text{O}$ يميناً):
                      $$\\text{Cr}_2\\text{O}_7^{2-}(\\text{aq}) + 14\\,\\text{H}_3\\text{O}^+(\\text{aq}) + 6\\,e^- = 2\\,\\text{Cr}^{3+}(\\text{aq}) + 21\\,\\text{H}_2\\text{O}(\\ell) \\qquad (\\times 1)$$
                      <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      • <b>أكسدة المختزل $\\text{H}_2\\text{C}_2\\text{O}_4$:</b> (بموازنة $2\\,\\text{CO}_2$ ثم $2\\,\\text{H}^+$ والتحويل لـ $2\\,\\text{H}_3\\text{O}^+$ بإضافة $2\\,\\text{H}_2\\text{O}$ يساراً):
                      $$\\text{H}_2\\text{C}_2\\text{O}_4(\\text{aq}) + 2\\,\\text{H}_2\\text{O}(\\ell) = 2\\,\\text{CO}_2(\\text{g}) + 2\\,\\text{H}_3\\text{O}^+(\\text{aq}) + 2\\,e^- \\qquad (\\times 3)$$
                      <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2. المعادلة الحصيلة والاختزال:</b> نضرب المعادلة الثانية في $3$ لتساوي $6\\,e^-$ المتبادلة ثم نجمع:<br/>
                      • قبل الاختزال: $\\text{Cr}_2\\text{O}_7^{2-} + 3\\,\\text{H}_2\\text{C}_2\\text{O}_4 + 14\\,\\text{H}_3\\text{O}^+ + 6\\,\\text{H}_2\\text{O} \\longrightarrow 2\\,\\text{Cr}^{3+} + 6\\,\\text{CO}_2 + 6\\,\\text{H}_3\\text{O}^+ + 21\\,\\text{H}_2\\text{O}$.<br/>
                      • بعد اختزال $6\\,\\text{H}_3\\text{O}^+$ و $6\\,\\text{H}_2\\text{O}$ من الطرفين:
                      $$\\text{Cr}_2\\text{O}_7^{2-}(\\text{aq}) + 3\\,\\text{H}_2\\text{C}_2\\text{O}_4(\\text{aq}) + 8\\,\\text{H}_3\\text{O}^+(\\text{aq}) \\longrightarrow 2\\,\\text{Cr}^{3+}(\\text{aq}) + 6\\,\\text{CO}_2(\\text{g}) + 15\\,\\text{H}_2\\text{O}(\\ell)$$
                      <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>3. التحقق النهائي:</b><br/>
                      • الذرات: $\\text{Cr}$ ($2=2$)، $\\text{C}$ ($6=6$)، $\\text{H}$ ($6+24 = 30 = 15 \\times 2$)، $\\text{O}$ ($7+12+8 = 27 = 12+15$).<br/>
                      • الشحنة الكهربائية: يساراً $(-2) + 8(+1) = +6$، ويميناً $2(+3) = +6$ $\\implies$ متوازنة كلياً! <span class="text-emerald-400 font-mono">(0.25 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: تفاعل أيونات البيروكسوديكبريتات مع أيونات اليودور وجدول التقدم</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      في كأس، نمزج عند اللحظة $t=0$ حجماً $V_1 = 50\\text{ mL}$ من محلول يودور البوتاسيوم $(\\text{K}^+ + \\text{I}^-)$ تركيزه المولي $C_1 = 0.20\\text{ mol}\\cdot\\text{L}^{-1}$ مع حجم $V_2 = 50\\text{ mL}$ من محلول بيروكسوديكبريتات البوتاسيوم $(2\\text{K}^+ + \\text{S}_2\\text{O}_8^{2-})$ تركيزه $C_2 = 0.10\\text{ mol}\\cdot\\text{L}^{-1}$. تتدخل المزدوجتان $\\text{S}_2\\text{O}_8^{2-} / \\text{SO}_4^{2-}$ و $\\text{I}_2 / \\text{I}^-$.
                      <br/><b>1.</b> اكتب نصفي المعادلتين والمعادلة الحصيلة للتفاعل الحاصل (مبيّناً السبب الفيزيائي للتلون البني التدريجي للمزيج). <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                      <br/><b>2.</b> احسب كميتي المادة البدئيتين $n_0(\\text{I}^-)$ و $n_0(\\text{S}_2\\text{O}_8^{2-})$، أنجز جدول التقدم واستنتج قيمة التقدم الأقصى $x_{\\max}$، وهل الخليط ستوكيومتري؟ <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. المعادلات والتلون:</b><br/>
                      • الاختزال: $\\text{S}_2\\text{O}_8^{2-}(\\text{aq}) + 2\\,e^- = 2\\,\\text{SO}_4^{2-}(\\text{aq})$.<br/>
                      • الأكسدة: $2\\,\\text{I}^-(\\text{aq}) = \\text{I}_2(\\text{aq}) + 2\\,e^-$.<br/>
                      • المعادلة الحصيلة:
                      $$\\text{S}_2\\text{O}_8^{2-}(\\text{aq}) + 2\\,\\text{I}^-(\\text{aq}) \\longrightarrow 2\\,\\text{SO}_4^{2-}(\\text{aq}) + \\text{I}_2(\\text{aq})$$
                      يعود التلون البني التدريجي إلى تكوّن ثنائي اليود $\\text{I}_2(\\text{aq})$ الملوّن. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>2. كميتا المادة البدئيتان والتقدم الأقصى $x_{\\max}$:</b><br/>
                      • $n_0(\\text{I}^-) = C_1 \\cdot V_1 = 0.20 \\times 50 \\times 10^{-3} = 1.0 \\times 10^{-2}\\text{ mol} = 10\\text{ mmol}$.<br/>
                      • $n_0(\\text{S}_2\\text{O}_8^{2-}) = C_2 \\cdot V_2 = 0.10 \\times 50 \\times 10^{-3} = 5.0 \\times 10^{-3}\\text{ mol} = 5.0\\text{ mmol}$.<br/>
                      • بمقارنة النسبتين الستوكيومتريتين: $\\frac{n_0(\\text{I}^-)}{2} = \\frac{10}{2} = 5.0\\text{ mmol}$ و $\\frac{n_0(\\text{S}_2\\text{O}_8^{2-})}{1} = 5.0\\text{ mmol}$؛ النسبتان متساويتان!<br/>
                      إذن <b>المزيج البدئي في نسب ستوكيومترية</b> والتقدم الأقصى هو $x_{\\max} = 5.0 \\times 10^{-3}\\text{ mol} = 5.0\\text{ mmol}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 3 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800 mt-5">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 3: تفاعل فلز الألمنيوم مع محلول حمض الكلوريدريك وتكوّن غاز $\\text{H}_2$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نُدخل قطعة من فلز الألمنيوم $\\text{Al}(\\text{s})$ كتلتها $m = 0.54\\text{ g}$ في حوجلة تحتوي على حجم $V = 100\\text{ mL}$ من محلول حمض الكلوريدريك $(\\text{H}_3\\text{O}^+(\\text{aq}) + \\text{Cl}^-(\\text{aq}))$ تركيزه المولي $C = 0.30\\text{ mol}\\cdot\\text{L}^{-1}$. تُعطى المزدوجتان $\\text{Al}^{3+}/\\text{Al}$ و $\\text{H}_3\\text{O}^+/\\text{H}_2$، والكتلة المولية $M(\\text{Al}) = 27.0\\text{ g}\\cdot\\text{mol}^{-1}$ والحجم المولي في شروط التجربة $V_m = 24.0\\text{ L}\\cdot\\text{mol}^{-1}$.
                      <br/><b>1.</b> اكتب نصفي المعادلتين الإلكترونيين ثم المعادلة الحصيلة للتفاعل الحاصل، محدداً الأيون المتفرج. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                      <br/><b>2.</b> حدّد المتفاعل المحد وقيمة التقدم الأقصى $x_{\\max}$، ثم استنتج حجم غاز ثنائي الهيدروجين $\\text{H}_2$ المتكوّن عند نهاية التحول. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. المعادلات والأيون المتفرج:</b><br/>
                      • الأكسدة ($\\times 2$): $\\text{Al}(\\text{s}) = \\text{Al}^{3+}(\\text{aq}) + 3\\,e^-$.<br/>
                      • الاختزال ($\\times 3$): $2\\,\\text{H}_3\\text{O}^+(\\text{aq}) + 2\\,e^- = \\text{H}_2(\\text{g}) + 2\\,\\text{H}_2\\text{O}(\\ell)$.<br/>
                      • لتوحيد عدد الإلكترونات ($6\\,e^-$) نضرب الأولى في $2$ والثانية في $3$ ونجمع:
                      $$2\\,\\text{Al}(\\text{s}) + 6\\,\\text{H}_3\\text{O}^+(\\text{aq}) \\longrightarrow 2\\,\\text{Al}^{3+}(\\text{aq}) + 3\\,\\text{H}_2(\\text{g}) + 6\\,\\text{H}_2\\text{O}(\\ell)$$
                      • الأيون المتفرج الذي لا يتدخل في التفاعل هو <b>أيون الكلورور $\\text{Cl}^-(\\text{aq})$</b>. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>2. المتفاعل المحد، $x_{\\max}$، وحجم غاز $\\text{H}_2$:</b><br/>
                      • $n_0(\\text{Al}) = \\frac{m}{M(\\text{Al})} = \\frac{0.54}{27.0} = 2.0 \\times 10^{-2}\\text{ mol} = 20\\text{ mmol}$.<br/>
                      • $n_0(\\text{H}_3\\text{O}^+) = C \\cdot V = 0.30 \\times 0.100 = 3.0 \\times 10^{-2}\\text{ mol} = 30\\text{ mmol}$.<br/>
                      • اختبار النسبتين: $\\frac{n_0(\\text{Al})}{2} = 10\\text{ mmol}$ و $\\frac{n_0(\\text{H}_3\\text{O}^+)}{6} = \\frac{30}{6} = 5.0\\text{ mmol}$. بما أن $5.0 < 10$، فإن <b>أيونات $\\text{H}_3\\text{O}^+$ هي المتفاعل المحد</b> والتقدم الأقصى هو $x_{\\max} = 5.0\\text{ mmol} = 5.0 \\times 10^{-3}\\text{ mol}$.<br/>
                      • من المعادلة: $n_f(\\text{H}_2) = 3\\,x_{\\max} = 15\\text{ mmol} = 1.5 \\times 10^{-2}\\text{ mol}$، ومنه:
                      $$V(\\text{H}_2) = n_f(\\text{H}_2) \\cdot V_m = 1.5 \\times 10^{-2} \\times 24.0 = 0.36\\text{ L} = 360\\text{ mL}$$
                      <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 6. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">السلوك المزدوج للماء الأوكسيجيني $\\text{H}_2\\text{O}_2$</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    يتميز الماء الأوكسيجيني $\\text{H}_2\\text{O}_2(\\text{aq})$ بانتمائه لمزدوجتين مختلفتين: $\\text{O}_2(\\text{g}) / \\text{H}_2\\text{O}_2(\\text{aq})$ و $\\text{H}_2\\text{O}_2(\\text{aq}) / \\text{H}_2\\text{O}(\\ell)$. نضيف إلى حجم من محلول محمض لبرمنغنات البوتاسيوم $(\\text{K}^+ + \\text{MnO}_4^-)$ كميةً من الماء الأوكسيجيني فنلاحظ اختفاء اللون البنفسجي وتصاعد فقاعات غاز ثنائي الأوكسيجين $\\text{O}_2$.
                    <br/>1) أي المزدوجتين للماء الأوكسيجيني تتدخل في هذا التحول؟ وما الدور الذي يلعبه $\\text{H}_2\\text{O}_2$ هنا (مؤكسد أم مختزل)؟
                    <br/>2) اكتب نصفي المعادلتين والمعادلة الحصيلة لتفاعل الأكسدة-اختزال بصيغتي $\\text{H}^+$ و $\\text{H}_3\\text{O}^+$.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. تحديد المزدوجة المتدخلة ودور $\\text{H}_2\\text{O}_2$:</b><br/>
                      • بما أن $\\text{MnO}_4^-$ هو المؤكسد (من المزدوجة $\\text{MnO}_4^- / \\text{Mn}^{2+}$) وقد تحول إلى $\\text{Mn}^{2+}$ (اختفاء البنفسجي)، وبما أنه تصاعد غاز ثنائي الأوكسيجين $\\text{O}_2$، فإن $\\text{H}_2\\text{O}_2$ تحول إلى $\\text{O}_2$؛ إذن المزدوجة المتدخلة هي $\\text{O}_2(\\text{g}) / \\text{H}_2\\text{O}_2(\\text{aq})$، ويلعب $\\text{H}_2\\text{O}_2$ هنا دور <b>المختزل ($\\text{Réd}$)</b> الذي يتعرض للأكسدة.</p>
                      <p><b>2. نصفي المعادلتين والمعادلة الحصيلة:</b><br/>
                      • الاختزال ($\\times 2$): $\\text{MnO}_4^- + 8\\,\\text{H}^+ + 5\\,e^- = \\text{Mn}^{2+} + 4\\,\\text{H}_2\\text{O}$<br/>
                      • الأكسدة ($\\times 5$): $\\text{H}_2\\text{O}_2 = \\text{O}_2 + 2\\,\\text{H}^+ + 2\\,e^-$<br/>
                      بضرب الأولى في $2$ والثانية في $5$ واختزال $10\\,\\text{H}^+$ من $16\\,\\text{H}^+$:<br/>
                      • بصيغة $\\text{H}^+$:
                      $$2\\,\\text{MnO}_4^-(\\text{aq}) + 5\\,\\text{H}_2\\text{O}_2(\\text{aq}) + 6\\,\\text{H}^+(\\text{aq}) \\longrightarrow 2\\,\\text{Mn}^{2+}(\\text{aq}) + 5\\,\\text{O}_2(\\text{g}) + 8\\,\\text{H}_2\\text{O}(\\ell)$$
                      • وبإبدال $6\\,\\text{H}^+ + 6\\,\\text{H}_2\\text{O} \\to 6\\,\\text{H}_3\\text{O}^+$:
                      $$2\\,\\text{MnO}_4^-(\\text{aq}) + 5\\,\\text{H}_2\\text{O}_2(\\text{aq}) + 6\\,\\text{H}_3\\text{O}^+(\\text{aq}) \\longrightarrow 2\\,\\text{Mn}^{2+}(\\text{aq}) + 5\\,\\text{O}_2(\\text{g}) + 14\\,\\text{H}_2\\text{O}(\\ell)$$
                      <span class="text-emerald-400 font-bold">✓ تحقق الشحنة:</span> يساراً $(-2) + (+6) = +4$ ويميناً $2(+2) = +4$؛ وانحفاظ $\\text{O}$: $8+10+6 = 24 = 10+14$!</p>
                    </div>
                  </details>
                </div>
              </div>

`);
