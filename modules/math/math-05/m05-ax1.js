window.EulerAcademy.registerAxis('math-05', 'm05-ax1', `

              <div class="space-y-6">
                <!-- 1. Definition, Domain, Monotonicity & Algebraic Identities -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. تعريف دالة اللوغاريتم النيبيري $\\ln$، خصائصها الجبرية، وحل المعادلات والمتراجحات</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">📘 أ) التعريف الرسمي، الرتابة، والإشارة والعدد $e$:</b>
                      • تُعرّف <b>دالة اللوغاريتم النيبيري $\\ln$</b> بأنها <b>الدالة الأصلية الوحيدة للدالة $x \\mapsto \\frac{1}{x}$ على المجال $]0, +\\infty[$ التي تنعدم في $1$</b>:<br/>
                      $$D_{\\ln} = ]0, +\\infty[, \\quad \\ln(1) = 0, \\quad \\forall x \\in ]0, +\\infty[:\\; (\\ln x)' = \\frac{1}{x} \\gt 0$$
                      • <b>النتائج المباشرة:</b><br/>
                      &nbsp;&nbsp;1) $\\ln$ متصلة وقابلة للاشتقاق و<b>تزايدية قطعا</b> على $]0, +\\infty[$ (وهي تقابل من $]0,+\\infty[$ نحو $\\mathbb{R}$).<br/>
                      &nbsp;&nbsp;2) <b>جدول الإشارة الإلزامي:</b> $\\ln x \\lt 0$ على $]0, 1[$، $\\ln 1 = 0$، و $\\ln x \\gt 0$ على $]1, +\\infty[$.<br/>
                      &nbsp;&nbsp;3) <b>العدد النيبيري $e$:</b> هو الحل الوحيد في $]0,+\\infty[$ للمعادلة $\\ln x = 1$، أي <b>$\\ln(e) = 1$</b> ($e \\approx 2.718$).
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">⚡ ب) الخصائص الجبرية وقواعد حل المعادلات والمتراجحات:</b>
                      لكل $a \\gt 0$ و $b \\gt 0$ ولكل عدد جذري $r \\in \\mathbb{Q}$:<br/>
                      • <b>تحويل العمليات:</b>
                      $$\\ln(a\\cdot b) = \\ln a + \\ln b, \\qquad \\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$$
                      $$\\ln\\left(\\frac{1}{b}\\right) = -\\ln b, \\qquad \\ln(a^r) = r\\ln a, \\qquad \\ln(\\sqrt{a}) = \\frac{1}{2}\\ln a$$
                      • <b>التعميم بالقيمة المطلقة:</b> لكل $u \\neq 0$: $\\ln(u^2) = 2\\ln|u|$؛ وإذا كان $x\\cdot y \\gt 0$ فإن $\\ln(x\\cdot y) = \\ln|x| + \\ln|y|$.<br/>
                      • <b>التكافؤات في مجموعة التعريف ($a \\gt 0$ و $b \\gt 0$):</b>
                      $$\\ln a = \\ln b \\iff a = b, \\qquad \\ln a \\lt \\ln b \\iff a \\lt b, \\qquad \\ln a = r \\iff a = e^r$$
                    </div>
                  </div>

                  <!-- SVG Diagram: Curve y = ln(x), Sign zones, Tangent at x=1 & Algebraic Box -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardLnPropertiesAndSign">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📈 منحنى $\\ln$ وتقعره ومجالا الإشارة ($]0,1[$ مقابل $]1,+\\infty[$) والمماس في $A(1,0)$</span>
                      <span class="text-[11px] font-mono text-cyan-400">ln(1)=0, ln(e)=1, ln(x) &lt;= x-1</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 235" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <marker id="arrM5Ax1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                        </defs>

                        <!-- Left Panel: Coordinate plane for y = ln(x) -->
                        <rect x="12" y="12" width="388" height="210" rx="10" fill="rgba(15,23,42,0.72)" stroke="#1e293b" stroke-width="1.2"/>

                        <!-- Axes -->
                        <line x1="40" y1="138" x2="380" y2="138" stroke="#475569" stroke-width="1.5" marker-end="url(#arrM5Ax1)"/>
                        <line x1="76" y1="212" x2="76" y2="24" stroke="#475569" stroke-width="1.5" marker-end="url(#arrM5Ax1)"/>
                        <text x="384" y="142" fill="#94a3b8" font-size="10.5" font-weight="bold" font-family="monospace">x</text>
                        <text x="66" y="28" fill="#cbd5e1" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">y</text>

                        <!-- Shaded Zone ]0, 1[: ln(x) < 0 -->
                        <rect x="76" y="138" width="60" height="68" fill="rgba(244,63,94,0.10)"/>
                        <text x="106" y="198" fill="#fda4af" font-size="9.5" font-weight="bold" font-family="monospace" text-anchor="middle">ln &lt; 0</text>

                        <!-- Shaded Zone ]1, +inf[: ln(x) > 0 -->
                        <rect x="136" y="42" width="234" height="96" fill="rgba(52,211,153,0.06)"/>
                        <text x="295" y="126" fill="#6ee7b7" font-size="9.5" font-weight="bold" font-family="monospace" text-anchor="middle">ln &gt; 0 sur ]1,+inf[</text>

                        <!-- Tangent line y = x - 1 passing through (1,0) at (136, 138) with slope = 1 (scale 60px per unit) -->
                        <line x1="88" y1="186" x2="232" y2="42" stroke="#c084fc" stroke-width="1.5" stroke-dasharray="4,3"/>
                        <text x="236" y="46" fill="#d8b4fe" font-size="9.5" font-weight="bold" font-family="monospace">(T): y = x - 1</text>

                        <!-- ln(x) curve (scale: x=0->76, 1 unit = 60px; y=0->138, 1 unit = 45px) -->
                        <!-- Points: (0.25, -1.39)->(91, 200), (0.37, -1)->(98, 183), (1, 0)->(136, 138), (2.72, 1)->(239, 93), (4.5, 1.50)->(346, 70) -->
                        <path d="M 88 205 C 94 176, 112 152, 136 138 C 172 118, 212 102, 239 93 C 282 79, 326 70, 368 65" fill="none" stroke="#22d3ee" stroke-width="2.8"/>

                        <!-- Key Points: (1,0) and (e, 1) -->
                        <circle cx="136" cy="138" r="4.5" fill="#fbbf24"/>
                        <text x="136" y="153" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>

                        <line x1="239" y1="93" x2="239" y2="138" stroke="#34d399" stroke-width="1.2" stroke-dasharray="3,3"/>
                        <line x1="76" y1="93" x2="239" y2="93" stroke="#34d399" stroke-width="1.2" stroke-dasharray="3,3"/>
                        <circle cx="239" cy="93" r="4.5" fill="#34d399"/>
                        <text x="239" y="153" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">e</text>
                        <text x="66" y="96" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="end">1</text>
                        <text x="252" y="90" fill="#67e8f9" font-size="10" font-weight="bold" font-family="monospace">C_ln</text>

                        <!-- Right Panel: Protocol for solving equations & inequations -->
                        <rect x="414" y="12" width="254" height="210" rx="10" fill="rgba(15,23,42,0.85)" stroke="#334155" stroke-width="1.3"/>
                        <text x="541" y="36" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Protocole Resolution</text>
                        <line x1="428" y1="48" x2="654" y2="48" stroke="#334155" stroke-width="1"/>
                        <text x="541" y="72" fill="#fda4af" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">1. Domaine DE AVANT tout !</text>
                        <text x="541" y="94" fill="#cbd5e1" font-size="9.5" font-family="monospace" text-anchor="middle">(Chaque arg dans ln(...) &gt; 0)</text>
                        <line x1="428" y1="108" x2="654" y2="108" stroke="#334155" stroke-width="1"/>
                        <text x="541" y="130" fill="#67e8f9" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">2. Reduire a ln(A) = ln(B)</text>
                        <text x="541" y="150" fill="#6ee7b7" font-size="9.5" font-family="monospace" text-anchor="middle">ou X = ln(x) (2nd degre)</text>
                        <line x1="428" y1="164" x2="654" y2="164" stroke="#334155" stroke-width="1"/>
                        <text x="541" y="186" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">3. S = Sol_algebriques inter DE</text>
                        <text x="541" y="206" fill="#94a3b8" font-size="9.5" font-family="monospace" text-anchor="middle">Jamais oublier l'intersection!</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">فخاخ مجموعة التعريف والخصائص الجبرية</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «نسيان تحديد $D_E$ قبل توحيد $\\ln(a) + \\ln(b) = \\ln(ab)$!»</b>
                      المعادلة $\\ln(x - 1) + \\ln(x - 3) = \\ln 3$ مجموعة تعريفها <b>$]3, +\\infty[$</b> بينما $\\ln((x-1)(x-3)) = \\ln 3$ معرفة على $]-\\infty, 1[ \\cup ]3, +\\infty[$! دمج اللوغاريتمين قبل تعيين $D_E$ يُدخل الحل الدخيل $x = 0$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «تجاهل القيمة المطلقة في $\\ln(u^2)$ والخلط بين $(\\ln x)^2$ و $\\ln(x^2)$!»</b>
                      • $\\ln(x^2) = 2\\ln|x|$ صالحة لكل $x \\in \\mathbb{R}^*$ وليس $2\\ln x$ فقط!<br/>
                      • أما <b>$(\\ln x)^2 = \\ln x \\times \\ln x$</b> فلا تساوي أبداً $2\\ln x$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «متراجحة ذات حد سالب دون الحفاظ على الشرط $\\gt 0$!»</b>
                      عند حل $\\ln(x - 2) \\le 0 = \\ln 1$، المتكافئ الصحيح هو <b>$0 \\lt x - 2 \\le 1 \\iff x \\in ]2, 3]$</b>، وليس $x - 2 \\le 1 \\iff x \\in ]-\\infty, 3]$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «قلب إشارة المتراجحة عند القسمة على $\\ln x$ أو $\\ln(1/2)$!»</b>
                      بما أن $\\ln(\\alpha) \\lt 0$ لكل $0 \\lt \\alpha \\lt 1$ (مثل $\\ln(0.5)$ أو $\\ln x$ على $]0, 1[$)، فإن الضرب أو القسمة على هذا المقدار <b>يقلب اتجاه المتفاوتة</b> فوراً!
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1 (كلاسيكي وطني): معادلة من الدرجة الثانية في $\\ln x$ ومتراجحة بفخ مجموعة التعريف</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      حل في $\\mathbb{R}$ كلاً من المعادلة $(E)$ والمتراجحة $(I)$ التاليتين بدقة صارمة:<br/>
                      <b>1.</b> $(E): \\quad 2(\\ln x)^2 - 3\\ln x - 2 = 0$. <span class="text-emerald-400 font-mono">(1.00 ن)</span><br/>
                      <b>2.</b> $(I): \\quad \\ln(x^2 - 1) - \\ln(x + 1) \\ge \\ln(2x - 5)$. <span class="text-emerald-400 font-mono">(1.00 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. حل المعادلة $(E)$ (1.00 ن):</b><br/>
                      • <b>مجموعة التعريف:</b> $D_E = ]0, +\\infty[$.<br/>
                      • <b>تغيير المتغير:</b> نضع $X = \\ln x$ فتصبح المعادلة: $2X^2 - 3X - 2 = 0$.<br/>
                      • $\\Delta = (-3)^2 - 4(2)(-2) = 25 \\gt 0 \\implies X_1 = \\frac{3 - 5}{4} = -\\frac{1}{2}$ و $X_2 = \\frac{3 + 5}{4} = 2$.<br/>
                      • العودة للمتغير $x$: لدينا $\\ln x = -\\frac{1}{2}\\ln e = \\ln(e^{-1/2}) \\implies x_1 = \\frac{1}{\\sqrt{e}} \\in D_E$، و $\\ln x = 2\\ln e = \\ln(e^2) \\implies x_2 = e^2 \\in D_E$.<br/>
                      إذن: <b>$S_E = \\left\\{\\frac{1}{\\sqrt{e}},\\; e^2\\right\\}$</b>.</p>
                      <p><b>2. حل المتراجحة $(I)$ (1.00 ن):</b><br/>
                      • <b>شرط التعريف $D_I$ أولاً:</b> يجب أن يكون $x^2 - 1 \\gt 0$ و $x + 1 \\gt 0$ و $2x - 5 \\gt 0$.<br/>
                      – $x^2 - 1 \\gt 0 \\iff x \\in ]-\\infty, -1[ \\cup ]1, +\\infty[$؛<br/>
                      – $x + 1 \\gt 0 \\iff x \\gt -1$؛<br/>
                      – $2x - 5 \\gt 0 \\iff x \\gt \\frac{5}{2}$.<br/>
                      التقاطع يعطي <b>$D_I = ]\\frac{5}{2}, +\\infty[$</b>.<br/>
                      • <b>الحل داخل $D_I$:</b> لأن $x + 1 \\neq 0$، نبسط $\\frac{x^2 - 1}{x + 1} = x - 1 \\gt 0$، فتكافئ $(I)$ على $D_I$:<br/>
                      $$\\ln(x - 1) \\ge \\ln(2x - 5) \\iff x - 1 \\ge 2x - 5 \\iff x \\le 4$$
                      • <b>التقاطع النهائي مع $D_I$:</b> <b>$S_I = \\left]\\frac{5}{2},\\; 4\\right]$</b>.</p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: نظمة لوغاريتمية في $\\mathbb{R}^2$ ومجموع-جداء ($S, P$)</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      حل في $\\mathbb{R}^2$ النظمات التالية:<br/>
                      <b>1.</b> $(S_1):\\; \\begin{cases} x + y = 7 \\\\ \\ln(x) + \\ln(y) = \\ln(10) \\end{cases}$ <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> $(S_2):\\; \\begin{cases} 2\\ln(x - 1) - \\ln(y) = 0 \\\\ \\ln(x - 1) + \\ln(y) = \\ln(8) \\end{cases}$ <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. النظمة $(S_1)$ (0.75 ن):</b><br/>
                      • شرطا التعريف: $x \\gt 0$ و $y \\gt 0$. على $]0,+\\infty[^2$: $\\ln(xy) = \\ln(10) \\iff xy = 10$.<br/>
                      • لدينا $x + y = 7$ و $xy = 10$: إذن $x$ و $y$ هما جذرا المعادلة $t^2 - 7t + 10 = 0 \\iff (t - 2)(t - 5) = 0$.<br/>
                      بما أن $2 \\gt 0$ و $5 \\gt 0$، فإن: <b>$S_1 = \\{(2, 5),\\; (5, 2)\\}$</b>.</p>
                      <p><b>2. النظمة $(S_2)$ (0.75 ن):</b><br/>
                      • حيز الصلاحية: $x - 1 \\gt 0 \\iff x \\gt 1$، و $y \\gt 0$.<br/>
                      • بجمع المعادلتين نحذف $\\ln(y)$: $3\\ln(x - 1) = \\ln(8) = \\ln(2^3) = 3\\ln(2) \\iff \\ln(x - 1) = \\ln 2 \\iff x - 1 = 2 \\iff x = 3 \\gt 1$.<br/>
                      • بالتعويض في المعادلة الأولى: $\\ln y = 2\\ln 2 = \\ln 4 \\iff y = 4 \\gt 0$. إذن <b>$S_2 = \\{(3, 4)\\}$</b>.</p>
                    </div>
                  </div>
                </div>

                <!-- 4. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">متراجحة بفخ المجال + متراجحة من الدرجة 2 في $\\ln x$</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    حل في $\\mathbb{R}$ كلاً من المتراجحتين التاليتين:<br/>
                    1) $(I_1): \\quad \\ln(x^2 - 4x + 3) \\le \\ln(x - 1) + \\ln 2$<br/>
                    2) $(I_2): \\quad 2(\\ln x)^2 - \\ln x - 1 \\le 0$
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. حل المتراجحة $(I_1)$:</b><br/>
                      • حيز التعريف: $x^2 - 4x + 3 \\gt 0 \\iff x \\in ]-\\infty, 1[ \\cup ]3, +\\infty[$، و $x - 1 \\gt 0 \\iff x \\gt 1$. إذن <b>$D = ]3, +\\infty[$</b>.<br/>
                      • على $D$: $\\ln(x^2 - 4x + 3) \\le \\ln(2x - 2) \\iff x^2 - 4x + 3 \\le 2x - 2 \\iff x^2 - 6x + 5 \\le 0 \\iff (x - 1)(x - 5) \\le 0 \\iff x \\in [1, 5]$.<br/>
                      • بالتقاطع مع $D = ]3, +\\infty[$ نجد: <b>$S_1 = ]3, 5]$</b>.</p>
                      <p><b>2. حل المتراجحة $(I_2)$:</b><br/>
                      • $D = ]0, +\\infty[$. بوضع $X = \\ln x$: $2X^2 - X - 1 \\le 0$ جذراها $-\\frac{1}{2}$ و $1$، ومنه $-\\frac{1}{2} \\le \\ln x \\le 1$.<br/>
                      • أي $\\ln(e^{-1/2}) \\le \\ln x \\le \\ln(e) \\iff \\frac{1}{\\sqrt{e}} \\le x \\le e$. إذن <b>$S_2 = \\left[\\frac{1}{\\sqrt{e}},\\; e\\right]$</b>.</p>
                    </div>
                  </details>
                </div>
              </div>

`);
