window.EulerAcademy.registerAxis('math-04', 'm04-ax1', `

              <div class="space-y-6">
                <!-- 1. Definition, Continuity Existence Theorem, Family F+k & Initial Condition Uniqueness -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. تعريف الدالة الأصلية، شرط الاتصال، وبنية مجموعة الدوال الأصلية</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">📘 أ) التعريف الرسمي ومبرهنة الوجود (شرط الاتصال):</b>
                      لتكن $f$ دالة عددية معرفة على مجال $I$.<br/>
                      • نقول إن $F$ <b>دالة أصلية (Primitive)</b> لـ $f$ على المجال $I$ إذا وفقط إذا تحقّق الشرطان معاً:<br/>
                      &nbsp;&nbsp;1) $F$ <b>قابلة للاشتقاق</b> على المجال $I$.<br/>
                      &nbsp;&nbsp;2) $\\forall x \\in I,\\quad F'(x) = f(x)$.<br/>
                      • <b>مبرهنة الوجود (قانون الاتصال):</b><br/>
                      كل دالة <b>متصلة</b> على مجال $I$ تقبل دوال أصلية على هذا المجال $I$.
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">🎯 ب) مجموعة الدوال الأصلية والوحدانية بالشرط البدئي:</b>
                      • إذا كانت $F$ دالة أصلية لـ $f$ على <b>مجال $I$</b>، فإن مجموعة الدوال الأصلية لـ $f$ على $I$ هي جميع الدوال المعرفة على $I$ بالشكل:
                      $$G(x) = F(x) + k \\qquad (k \\in \\mathbb{R})$$
                      • <b>الوحدانية (Condition initiale):</b> ليكن $x_0 \\in I$ و $y_0 \\in \\mathbb{R}$. إذا كانت $f$ متصلة على المجال $I$، فإنه توجد <b>دالة أصلية وحيدة</b> $F_0$ لـ $f$ على $I$ تحقق الشرط $F_0(x_0) = y_0$.<br/>
                      • <b>الخطانية:</b> أصلية $\\alpha f + \\beta g$ هي $\\alpha F + \\beta G + k$.
                    </div>
                  </div>

                  <!-- SVG Diagram: Vertical Translation Family + Parallel Tangents + Selected Curve -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardPrimitiveFamily">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📐 التأويل الهندسي لعائلة الدوال الأصلية $F(x) + k$ وتعيين الدالة الوحيدة التي تمر من $A(x_0, y_0)$</span>
                      <span class="text-[11px] font-mono text-emerald-400">F'(x0) = G'(x0) = f(x0)</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 230" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <marker id="arrM4Ax" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                        </defs>

                        <!-- Axes -->
                        <line x1="65" y1="194" x2="386" y2="194" stroke="#475569" stroke-width="1.6" marker-end="url(#arrM4Ax)"/>
                        <line x1="75" y1="204" x2="75" y2="20" stroke="#475569" stroke-width="1.6" marker-end="url(#arrM4Ax)"/>
                        <text x="394" y="198" fill="#cbd5e1" font-size="11" font-weight="bold" font-family="monospace" text-anchor="start">x</text>
                        <text x="64" y="22" fill="#cbd5e1" font-size="11" font-weight="bold" font-family="monospace" text-anchor="end">y</text>

                        <!-- Vertical projection x0 -->
                        <line x1="215" y1="36" x2="215" y2="194" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>
                        <text x="215" y="212" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">x0</text>

                        <!-- Curve family: y = y_base(x) shifted by +42, 0, -42 -->
                        <!-- Top curve (k > 0) -->
                        <path d="M 95 92 Q 215 62 348 34" fill="none" stroke="#22d3ee" stroke-width="2" stroke-dasharray="5,4"/>
                        <line x1="175" y1="73" x2="255" y2="55" stroke="#c084fc" stroke-width="1.5"/>
                        <text x="355" y="38" fill="#67e8f9" font-size="10" font-weight="bold" font-family="monospace">k &gt; 0</text>

                        <!-- Selected Unique Curve F0 passing through A(x0, y0) -->
                        <path d="M 95 134 Q 215 104 348 76" fill="none" stroke="#34d399" stroke-width="3"/>
                        <line x1="175" y1="115" x2="255" y2="97" stroke="#fbbf24" stroke-width="2"/>
                        <circle cx="215" cy="106" r="5" fill="#fbbf24" stroke="#020617" stroke-width="1.5"/>
                        <line x1="75" y1="106" x2="215" y2="106" stroke="#fbbf24" stroke-width="1.1" stroke-dasharray="3,3"/>
                        <text x="64" y="110" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">y0</text>
                        <text x="225" y="96" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace">A(x0,y0)</text>
                        <text x="355" y="80" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace">F0(x)</text>

                        <!-- Bottom curve (k < 0) -->
                        <path d="M 95 176 Q 215 146 348 118" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,4"/>
                        <line x1="175" y1="157" x2="255" y2="139" stroke="#c084fc" stroke-width="1.5"/>
                        <text x="355" y="122" fill="#cbd5e1" font-size="10" font-weight="bold" font-family="monospace">k &lt; 0</text>

                        <!-- Right Summary Box -->
                        <rect x="444" y="20" width="222" height="186" rx="10" fill="rgba(15,23,42,0.85)" stroke="#334155" stroke-width="1.4"/>
                        <text x="555" y="44" fill="#6ee7b7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Famille F(x) + k</text>
                        <line x1="460" y1="58" x2="650" y2="58" stroke="#334155" stroke-width="1"/>
                        <text x="555" y="84" fill="#67e8f9" font-size="10.5" font-family="monospace" text-anchor="middle">Translation verticale k*j</text>
                        <text x="555" y="110" fill="#d8b4fe" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Tangentes paralleles</text>
                        <text x="555" y="132" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">Meme pente f(x0)</text>
                        <line x1="460" y1="152" x2="650" y2="152" stroke="#334155" stroke-width="1"/>
                        <text x="555" y="178" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Unicite par F0(x0)=y0</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">دقة قابلية الاشتقاق والمجال</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «حساب $F'(x) = f(x)$ دون إثبات قابلية اشتقاق $F$ على $I$!»</b>
                      لإثبات أن $F$ دالة أصلية لـ $f$ على $I$، ينبغي أولاً التصريح <b>لماذا $F$ قابلة للاشتقاق على $I$</b> (جذر تعبير موجب قطعا، مركب دالتين قابلتين للاشتقاق، أو جداء دوال قابلة للاشتقاق) ثم حساب $F'(x)$ ومقارنتها بـ $f(x)$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «عبارة "على مجال $I$" — خطأ الثابتة الواحدة على $\\mathbb{R}^*$!»</b>
                      المجموعة $\\mathbb{R}^* = ]-\\infty, 0[ \\cup ]0, +\\infty[$ ليست مجالاً! لذا الدوال الأصلية لـ $f(x) = \\frac{1}{x^2}$ على $\\mathbb{R}^*$ تقبل ثابتة $k_1$ على $]-\\infty, 0[$ وثابتة مستقلة $k_2$ على $]0, +\\infty[$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «توهم خطانية الجداء أو الكسر ($(F \\cdot G)' \\neq F' \\cdot G'$ و $(F/G)' \\neq F'/G'$)!»</b>
                      الخطانية صالحة للجمع والضرب في ثابت حقيقي فقط؛ أما أصلية الجداء أو الكسر فتستلزم تعديلاً جبرياً أو اشتقاقاً معكوساً ولا تساوي أبداً جداء الأصليتين!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «الشرط البدئي المقنع (التنعدم في نقطة أو مماس أفقي)!»</b>
                      عبارة «أصلية $f$ التي تنعدم في $1$» معناها $F(1) = 0$؛ أما «أصلية $f$ التي يمر منحناها من النقطة $B(2, -3)$» فمعناها $F(2) = -3$ لتحديد $k$.
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1 (كلاسيكي وطني): تعيين البارامترات $a, b, c$ لتكون $F$ أصلية لـ $f$ وتحديد الثابتة</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نعتبر الدالة $f$ المعرفة على المجال $I = ]-1, +\\infty[$ بما يلي: $f(x) = \\frac{5x^2 - 2x + 3}{2\\sqrt{x + 1}}$.<br/>
                      <b>1.</b> علّل لماذا تقبل $f$ دوال أصلية على المجال $I$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> نضع على $I$: $F(x) = (ax^2 + bx + c)\\sqrt{x + 1}$. علّل قابلية اشتقاق $F$ على $I$، وحدّد الأعداد الحقيقية $a, b, c$ لكي تكون $F$ دالة أصلية لـ $f$ على $I$. <span class="text-emerald-400 font-mono">(1.00 ن)</span><br/>
                      <b>3.</b> استنتج الدالة الأصلية الوحيدة $G$ لـ $f$ على $I$ التي تحقق $G(0) = 5$. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. تعليل وجود الدوال الأصلية (0.50 ن):</b><br/>
                      الدالة $x \\mapsto 5x^2 - 2x + 3$ حدودية متصلة على $I$، و $x \\mapsto \\sqrt{x+1}$ متصلة وموجبة قطعاً على $I = ]-1, +\\infty[$؛ إذن $f$ خارج دالتين متصلتين ومقامها غير منعدم، فهي <b>متصلة على المجال $I$</b> ومنه تقبل دوال أصلية على $I$.</p>
                      <p><b>2. قابلية اشتقاق $F$ وتحديد $a, b, c$ (1.00 ن):</b><br/>
                      • الدالة $x \\mapsto ax^2+bx+c$ حدودية قابلة للاشتقاق على $I$، و $x \\mapsto x+1$ قابلة للاشتقاق وموجبة قطعاً على $I = ]-1, +\\infty[$، إذن $x \\mapsto \\sqrt{x+1}$ و جداءهما $F$ قابلتان للاشتقاق على $I$.<br/>
                      • لكل $x \\in I$:
                      $$F'(x) = (2ax + b)\\sqrt{x + 1} + \\frac{ax^2 + bx + c}{2\\sqrt{x + 1}} = \\frac{2(2ax + b)(x + 1) + ax^2 + bx + c}{2\\sqrt{x + 1}} = \\frac{5ax^2 + (4a + 3b)x + (2b + c)}{2\\sqrt{x + 1}}$$
                      بالمطابقة مع بسط $f(x)$ على $I$: $5a = 5 \\implies a = 1$؛ و $4(1) + 3b = -2 \\implies b = -2$؛ و $2(-2) + c = 3 \\implies c = 7$.<br/>
                      إذن $F(x) = (x^2 - 2x + 7)\\sqrt{x + 1}$.</p>
                      <p><b>3. الدالة الأصلية الوحيدة $G$ بحيث $G(0) = 5$ (0.50 ن):</b><br/>
                      تكتب $G(x) = F(x) + k$ ($k \\in \\mathbb{R}$). لدينا $G(0) = (0 - 0 + 7)\\sqrt{1} + k = 7 + k = 5 \\implies k = -2$.<br/>
                      ومنه: $G(x) = (x^2 - 2x + 7)\\sqrt{x + 1} - 2$.</p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: إثبات قابلية اشتقاق مركب مثلثي-جذري والتحقق من الشرط البدئي $F(0)=1$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نعتبر الدالة $F(x) = \\frac{x + \\sin x \\cos x}{2}$ و $f(x) = \\cos^2 x$ على المجال $I = \\mathbb{R}$.<br/>
                      <b>1.</b> بيّن أن $F$ دالة أصلية لـ $f$ على $\\mathbb{R}$. <span class="text-emerald-400 font-mono">(0.90 ن)</span><br/>
                      <b>2.</b> استنتج جميع الدوال الأصلية لـ $f$ على $\\mathbb{R}$، ثم حدّد الدالة الأصلية $H$ التي يحقق منحناها المماس في الأصل مرور $H$ بالنقطة $M\\!\\left(\\frac{\\pi}{2}, 2\\right)$. <span class="text-emerald-400 font-mono">(0.60 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. إثبات أن $F$ أصلية لـ $f$ على $\\mathbb{R}$ (0.90 ن):</b><br/>
                      • الدوال $x$, $\\sin x$, و $\\cos x$ قابلة للاشتقاق على $\\mathbb{R}$، ومنه $F$ قابلة للاشتقاق على $\\mathbb{R}$ كمجموع وجداء.<br/>
                      • لكل $x \\in \\mathbb{R}$:
                      $$F'(x) = \\frac{1 + (\\cos x \\cdot \\cos x + \\sin x \\cdot (-\\sin x))}{2} = \\frac{1 + \\cos^2 x - \\sin^2 x}{2} = \\frac{(1 - \\sin^2 x) + \\cos^2 x}{2} = \\frac{2\\cos^2 x}{2} = \\cos^2 x = f(x)$$
                      إذن $F$ دالة أصلية لـ $f$ على $\\mathbb{R}$.</p>
                      <p><b>2. عائلة الأصلية وتعيين $H$ (0.60 ن):</b><br/>
                      جميع الدوال الأصلية هي $H(x) = \\frac{x + \\sin x \\cos x}{2} + k$. ومن الشرط $H\\!\\left(\\frac{\\pi}{2}\\right) = 2$:
                      $$\\frac{\\frac{\\pi}{2} + 1 \\cdot 0}{2} + k = 2 \\implies k = 2 - \\frac{\\pi}{4} \\implies H(x) = \\frac{x + \\sin x \\cos x}{2} + 2 - \\frac{\\pi}{4}$$
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 4. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">دراسة تغيرات وتقعر دالة أصلية $F$ دون تحديد صيغتها!</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    لتكن $F$ الدالة الأصلية الوحيدة للدالة $f(x) = \\frac{x - 2}{\\sqrt{x^2 + 5}}$ على $\\mathbb{R}$ والتي تحقق $F(2) = -1$.<br/>
                    1) دون حساب صيغة $F(x)$، حدّد رتابة $F$ وقيمتها الدنيا المطلقة وإشارتها (موجبة أم سالبة أم متغيرة؟).<br/>
                    2) احسب $F''(x)$ واستنتج نقطة انعطاف المنحنى $(C_F)$ ومجالات تقعره.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. رتابة $F$ ومطرافها وإشارة $(C_F)$:</b><br/>
                      • لدينا $\\forall x \\in \\mathbb{R},\\; F'(x) = f(x) = \\frac{x - 2}{\\sqrt{x^2 + 5}}$؛ إشارة $F'(x)$ هي إشارة $(x - 2)$:<br/>
                      – $F$ تناقصية على $]-\\infty, 2]$ وتزايدية على $[2, +\\infty[$، فتقبل قيمة دنيا مطلقة عند $x_0 = 2$ تساوي $F(2) = -1 \\lt 0$ (دون شرط تغيّر إشارتها العام فهي سالبة قرب $2$).<br/>
                      • تنبيه: تقع قيمة $F$ الدنيا السالبة عند $2$ وتعكس وجود جذور خارجها لو كان لها نهاية أكبر من صفر.</p>
                      <p><b>2. التقعر ونقطة الانعطاف عبر $F''(x) = f'(x)$:</b><br/>
                      $$F''(x) = f'(x) = \\frac{\\sqrt{x^2 + 5} - (x - 2)\\frac{x}{\\sqrt{x^2 + 5}}}{x^2 + 5} = \\frac{x^2 + 5 - x^2 + 2x}{(x^2 + 5)^{3/2}} = \\frac{2x + 5}{(x^2 + 5)^{3/2}}$$
                      تنعدم $F''(x)$ وتغيّر إشارتها عند $x = -\\frac{5}{2}$: مقعر نحو السالب ($\\cap$) على $]-\\infty, -\\frac{5}{2}]$ ونحو الموجب ($\\cup$) على $[-\\frac{5}{2}, +\\infty[$، وتوجد نقطة انعطاف وحيدة عند الأفصول $-\\frac{5}{2}$!</p>
                    </div>
                  </details>
                </div>
              </div>

`);
