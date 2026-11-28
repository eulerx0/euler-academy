window.EulerAcademy.registerAxis('math-05', 'm05-ax2', `

              <div class="space-y-6">
                <!-- 1. Standard Logarithmic Limits & Asymptotic Growth -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. النهايات الاعتيادية الأساسية لدالة $\\ln$، التزايد المقارن، والفروع اللانهائية</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">📘 أ) النهايات المرجعية الست في المقرر ($n \\in \\mathbb{N}^*$):</b>
                      • <b>نهايتا المحدات (المجال $]0, +\\infty[$):</b>
                      $$\\lim_{x \\to 0^+} \\ln x = -\\infty, \\qquad \\lim_{x \\to +\\infty} \\ln x = +\\infty$$
                      • <b>نهايات التزايد المقارن (تغلب القوة $x^n$ على $\\ln x$):</b>
                      $$\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0, \\qquad \\lim_{x \\to +\\infty} \\frac{\\ln x}{x^n} = 0 \\quad (n \\in \\mathbb{N}^*)$$
                      $$\\lim_{x \\to 0^+} x\\ln x = 0^-, \\qquad \\lim_{x \\to 0^+} x^n \\ln x = 0^- \\quad (n \\in \\mathbb{N}^*)$$
                      • <b>النهايتان المشتقتان (عند $1$ وعند $0$):</b>
                      $$\\lim_{x \\to 1} \\frac{\\ln x}{x - 1} = 1, \\qquad \\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$$
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">🛠️ ب) التأويلات المبيانية واستراتيجيات كسر الأشكال غير المحددة:</b>
                      • <b>فروع منحنى $\\ln$:</b><br/>
                      1) $\\lim_{x\\to 0^+} \\ln x = -\\infty \\implies$ محور الأراتيب $(x = 0)$ <b>مقارب عمودي</b>.<br/>
                      2) $\\lim_{x\\to+\\infty}\\frac{\\ln x}{x}=0 \\implies$ يقبل $(C_{\\ln})$ <b>فرعاً شلجمياً اتجاهه محور الأفاصيل</b> $(Ox)$ بجوار $+\\infty$.<br/>
                      • <b>تعميم القوى الجذرية ($r \\in \\mathbb{Q}_+^*$، مثل $\\sqrt{x}$):</b><br/>
                      لا تُكتب $\\lim_{x\\to+\\infty}\\frac{\\ln x}{\\sqrt{x}}=0$ مباشرة دون تبرير، بل بتغيير المتغير $t = \\sqrt{x} \\implies \\frac{\\ln x}{\\sqrt{x}} = \\frac{2\\ln t}{t} \\to 0$!<br/>
                      • <b>تفكيك الحدوديات داخل $\\ln$:</b> عند $+\\infty$: $\\ln(a x^k + b) = k\\ln x + \\ln\\left(a + \\frac{b}{x^k}\\right)$.
                    </div>
                  </div>

                  <!-- SVG Diagram: C_ln branches + Asymptote x=0 + Parabolic branch vs y=x and y=sqrt(x) -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardLnLimitsAndBranches">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📊 الفروع اللانهائية لـ $\\ln$ ومقارنة التزايد البطئ لـ $\\ln x$ أمام $x$ و $\\sqrt{x}$</span>
                      <span class="text-[11px] font-mono text-emerald-400">Asymptote x=0 | Branche parabolique (Ox)</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <marker id="arrM5Ax2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                        </defs>

                        <!-- Left Panel: Growth Comparison Graph -->
                        <rect x="12" y="12" width="388" height="216" rx="10" fill="rgba(15,23,42,0.72)" stroke="#1e293b" stroke-width="1.2"/>

                        <line x1="42" y1="168" x2="380" y2="168" stroke="#475569" stroke-width="1.5" marker-end="url(#arrM5Ax2)"/>
                        <line x1="68" y1="216" x2="68" y2="24" stroke="#475569" stroke-width="1.5" marker-end="url(#arrM5Ax2)"/>
                        <text x="384" y="172" fill="#94a3b8" font-size="10.5" font-weight="bold" font-family="monospace">x</text>
                        <text x="58" y="28" fill="#cbd5e1" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">y</text>

                        <!-- Vertical Asymptote x=0 Highlight -->
                        <line x1="72" y1="168" x2="72" y2="216" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4,3"/>
                        <text x="80" y="212" fill="#fda4af" font-size="9.5" font-weight="bold" font-family="monospace">x=0 (-inf)</text>

                        <!-- y = x reference line -->
                        <line x1="68" y1="168" x2="216" y2="26" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
                        <text x="220" y="34" fill="#cbd5e1" font-size="10" font-weight="bold" font-family="monospace">y = x</text>

                        <!-- y = sqrt(x) curve -->
                        <path d="M 68 168 Q 140 100 364 62" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4,2"/>
                        <text x="315" y="56" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace">sqrt(x)</text>

                        <!-- y = ln(x) curve: crosses x axis at (104, 168), parabolic along Ox -->
                        <path d="M 76 214 C 84 188, 92 175, 104 168 C 148 144, 232 124, 368 112" fill="none" stroke="#22d3ee" stroke-width="2.8"/>
                        <text x="325" y="106" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace">ln(x)</text>
                        <text x="255" y="142" fill="#6ee7b7" font-size="9.5" font-weight="bold" font-family="monospace">Branche (Ox)</text>

                        <!-- Point (1,0) -->
                        <circle cx="104" cy="168" r="4" fill="#fbbf24"/>
                        <text x="104" y="182" fill="#fde68a" font-size="9.5" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>

                        <!-- Right Panel: 6 Standard Limits Cheat Sheet -->
                        <rect x="414" y="12" width="254" height="216" rx="10" fill="rgba(15,23,42,0.85)" stroke="#334155" stroke-width="1.3"/>
                        <text x="541" y="36" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Limites Usuelles (ln)</text>
                        <line x1="428" y1="48" x2="654" y2="48" stroke="#334155" stroke-width="1"/>
                        <text x="541" y="72" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">x -&gt; +inf : ln(x)/x^n = 0</text>
                        <text x="541" y="96" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">x -&gt; 0+   : x^n ln(x) = 0-</text>
                        <line x1="428" y1="112" x2="654" y2="112" stroke="#334155" stroke-width="1"/>
                        <text x="541" y="136" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">x -&gt; 1    : ln(x)/(x-1) = 1</text>
                        <text x="541" y="160" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">h -&gt; 0    : ln(1+h)/h = 1</text>
                        <line x1="428" y1="176" x2="654" y2="176" stroke="#334155" stroke-width="1"/>
                        <text x="541" y="200" fill="#d8b4fe" font-size="9.5" font-weight="bold" font-family="monospace" text-anchor="middle">x -&gt; +inf : +inf | x-&gt;0+ : -inf</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">دقة تغيير المتغير والتزايد المقارن</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «تبرير $\\lim_{x\\to+\\infty}\\frac{\\ln x}{\\sqrt{x}} = 0$ (أو $x^r$ حيث $r \\in \\mathbb{Q}_+^* \\setminus \\mathbb{N}^*$)»</b>
                      النهايات المقبولة مباشرة في الإطار المرجعي هي للأس الصحيح <b>$n \\in \\mathbb{N}^*$ فقط</b>! إذا وردت $\\frac{\\ln x}{\\sqrt{x}}$ أو $\\frac{(\\ln x)^2}{x}$ وجب وضع <b>$t = \\sqrt{x}$</b> لإرجاعها إلى $2\\frac{\\ln t}{t}$ أو $4\\left(\\frac{\\ln t}{t}\\right)^2$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «الخلط بين نقطتي الاقتراب: $\\lim_{x\\to 1}\\frac{\\ln x}{x-1}$ مقابل $\\lim_{x\\to+\\infty}\\frac{\\ln x}{x-1}$!»</b>
                      • عند $x \\to 1$: هي نهاية العدد المشتق $\\ln'(1) = 1$.<br/>
                      • أما عند $x \\to +\\infty$ فتُكتب $\\frac{\\ln x}{x}\\cdot\\frac{x}{x-1} \\to 0 \\times 1 = 0$! راقب دائماً إلى ماذا يؤول $x$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «إساءة استعمال $\\lim_{h \\to 0}\\frac{\\ln(1+h)}{h} = 1$ عندما $x \\to +\\infty$!»</b>
                      في $\\lim_{x\\to+\\infty} \\frac{\\ln(1+x)}{x}$، المتغير $x$ لا يؤول إلى $0$! الحيلة الصحيحة هي تعميل $x$ داخل $\\ln$: $\\frac{\\ln x + \\ln(1 + 1/x)}{x} \\to 0$.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «فروع $\\ln(u(x))$ عند $+\\infty$ و $x=a$ في الدوال المركبة!»</b>
                      انتبه لإشارة $\\lim\\frac{f(x)}{x} = a$: في دالة مثل $x - 1 + \\frac{\\ln x}{x}$ قد يختفي الجزء الكسري وتبقى فقط المعادلة $y = x - 1$ كـ<b>مقارب مائل</b> وليس فرعاً شلجمياً!
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1 (كلاسيكي وطني): حساب أربع نهايات لوغاريتمية مركبة بجميع التقنيات المرجعية</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      احسب بدقة النهايات الأربع التالية مبرزاً كل خطوة وتغيير متغير (<span class="text-emerald-400 font-mono">0.50 ن</span> لكل نهاية):<br/>
                      $$L_1 = \\lim_{x \\to +\\infty} \\frac{\\ln(x^2 + 3x)}{x}, \\qquad L_2 = \\lim_{x \\to 0^+} \\left(\\frac{1}{x} + \\ln x\\right), \\qquad L_3 = \\lim_{x \\to +\\infty} \\left(x - (\\ln x)^2\\right), \\qquad L_4 = \\lim_{x \\to 1} \\frac{\\ln(2x - 1)}{x^2 - 1}$$
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>• حساب $L_1$ (تعميل $x^2$ داخل اللوغاريتم) (0.50 ن):</b> لكل $x \\gt 0$:
                      $$\\frac{\\ln(x^2 + 3x)}{x} = \\frac{\\ln\\left(x^2\\left(1 + \\frac{3}{x}\\right)\\right)}{x} = 2\\frac{\\ln x}{x} + \\frac{\\ln\\left(1 + \\frac{3}{x}\\right)}{x} \\xrightarrow[x\\to+\\infty]{} 2(0) + \\frac{\\ln 1}{+\\infty} = 0$$
                      </p>
                      <p><b>• حساب $L_2$ (توحيد المقام وإبراز $x\\ln x$) (0.50 ن):</b><br/>
                      $L_2 = \\lim_{x\\to 0^+} \\frac{1 + x\\ln x}{x} = +\\infty$ لأن $\\lim_{x\\to 0^+} x\\ln x = 0 \\implies 1 + x\\ln x \\to 1 \\gt 0$ والمقام $x \\to 0^+$!</p>
                      <p><b>• حساب $L_3$ (تعميل $x$ وتغيير المتغير $t = \\sqrt{x}$) (0.50 ن):</b><br/>
                      لكل $x \\gt 0$: $x - (\\ln x)^2 = x\\left(1 - \\frac{(\\ln x)^2}{x}\\right)$. وبوضع $t = \\sqrt{x} \\to +\\infty$ يكون $\\ln x = 2\\ln t$ ومنه:
                      $$\\frac{(\\ln x)^2}{x} = \\frac{4(\\ln t)^2}{t^2} = 4\\left(\\frac{\\ln t}{t}\\right)^2 \\xrightarrow[t\\to+\\infty]{} 0 \\implies L_3 = (+\\infty)\\times 1 = +\\infty$$
                      </p>
                      <p><b>• حساب $L_4$ (تغيير المتغير $h = 2(x - 1) \\to 0$) (0.50 ن):</b><br/>
                      نكتب $\\ln(2x - 1) = \\ln(1 + 2(x - 1))$، ومنه:
                      $$\\frac{\\ln(2x - 1)}{x^2 - 1} = \\frac{\\ln(1 + 2(x - 1))}{2(x - 1)} \\cdot \\frac{2}{x + 1} \\xrightarrow[x\\to 1]{} 1 \\times \\frac{2}{2} = 1$$
                      </p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2 (مبياني): الفروع اللانهائية، المقارب المائل، والوضع النسبي لـ $f(x) = x - 1 + \\frac{\\ln x}{x}$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نعتبر الدالة $f$ المعرفة على $]0, +\\infty[$ بـ: $f(x) = x - 1 + \\frac{\\ln x}{x}$.<br/>
                      <b>1.</b> احسب $\\lim_{x\\to 0^+} f(x)$ وأوّل النتيجة هندسياً. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> احسب $\\lim_{x\\to +\\infty} f(x)$ وبيّن أن المستقيم $(D): y = x - 1$ مقارب مائل لـ $(C_f)$ بجوار $+\\infty$، ثم ادرس الوضع النسبي بين $(C_f)$ و $(D)$. <span class="text-emerald-400 font-mono">(1.00 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. النهاية عند $0^+$ (0.50 ن):</b><br/>
                      $\\lim_{x\\to 0^+} (x - 1) = -1$، و $\\lim_{x\\to 0^+} \\frac{\\ln x}{x} = \\lim_{x\\to 0^+} \\left(\\frac{1}{x}\\cdot\\ln x\\right) = (+\\infty)(-\\infty) = -\\infty$. إذن $\\lim_{x\\to 0^+} f(x) = -\\infty$: <b>المستقيم ذو المعادلة $x = 0$ مقارب عمودي لـ $(C_f)$</b>.</p>
                      <p><b>2. المقارب المائل والوضع النسبي (1.00 ن):</b><br/>
                      • لأن $\\lim_{x\\to+\\infty}\\frac{\\ln x}{x} = 0$، فإن $\\lim_{x\\to+\\infty} f(x) = +\\infty$ و $\\lim_{x\\to+\\infty} [f(x) - (x - 1)] = \\lim_{x\\to+\\infty}\\frac{\\ln x}{x} = 0$: إذن <b>$(D): y = x - 1$ مقارب مائل لـ $(C_f)$ بجوار $+\\infty$</b>.<br/>
                      • إشارة الفرق $f(x) - (x - 1) = \\frac{\\ln x}{x}$ على $]0, +\\infty[$ هي إشارة $\\ln x$ (لأن $x \\gt 0$):<br/>
                      – على $]0, 1[$: $(C_f)$ يوجد <b>تحت</b> $(D)$؛<br/>
                      – يتقاطع $(C_f)$ و $(D)$ في النقطة $A(1, 0)$؛<br/>
                      – على $]1, +\\infty[$: $(C_f)$ يوجد <b>فوق</b> $(D)$.</p>
                    </div>
                  </div>
                </div>

                <!-- 4. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">نهايتان بأشكال غير محددة متخفية</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    احسب النهايتين التاليتين:<br/>
                    1) $M_1 = \\lim_{x \\to +\\infty} x\\,\\ln\\left(1 + \\frac{2}{x}\\right)$<br/>
                    2) $M_2 = \\lim_{x \\to 0^+} x\\,\\ln\\left(1 + \\frac{1}{x^2}\\right)$
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. حساب $M_1$:</b><br/>
                      نضع $h = \\frac{2}{x}$؛ عندما $x \\to +\\infty$ فإن $h \\to 0^+$، ولدينا $x = \\frac{2}{h}$:<br/>
                      $$M_1 = \\lim_{h \\to 0^+} 2\\cdot \\frac{\\ln(1 + h)}{h} = 2 \\times 1 = 2$$
                      </p>
                      <p><b>2. حساب $M_2$:</b><br/>
                      لكل $x \\gt 0$: $\\ln\\left(1 + \\frac{1}{x^2}\\right) = \\ln\\left(\\frac{x^2 + 1}{x^2}\\right) = \\ln(x^2 + 1) - 2\\ln x$.<br/>
                      بالضرب في $x$: $x\\ln\\left(1 + \\frac{1}{x^2}\\right) = x\\ln(x^2 + 1) - 2(x\\ln x) \\xrightarrow[x\\to 0^+]{} 0\\cdot \\ln 1 - 2(0) = 0$.</p>
                    </div>
                  </details>
                </div>
              </div>

`);
