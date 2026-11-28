window.EulerAcademy.registerAxis('math-05', 'm05-ax3', `

              <div class="space-y-6">
                <!-- 1. Logarithmic Derivative, Primitives of u'/u, Base-a Log & Common Log -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. المشتقة اللوغاريتمية، الدوال الأصلية لـ $\\frac{u'}{u}$، واللوغاريتم للأساس $a$ والعشري $\\log$</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">📘 أ) مشتقة $\\ln|u(x)|$ والدوال الأصلية لـ $\\frac{u'(x)}{u(x)}$:</b>
                      • إذا كانت $u$ دالة قابلة للاشتقاق ولا تنعدم على مجال $I$ (سواء كانت موجبة قطعا أو سالبة قطعا على $I$)، فإن الدالة $x \\mapsto \\ln|u(x)|$ قابلة للاشتقاق على $I$ ومشتقتها:
                      $$\\forall x \\in I:\\quad \\left(\\ln|u(x)|\\right)' = \\frac{u'(x)}{u(x)}$$
                      • <b>النتيجة العكسية (الدوال الأصلية):</b> إذا كانت $u$ قابلة للاشتقاق ولا تنعدم على مجال $I$، فإن الدوال الأصلية لـ $f(x) = \\frac{u'(x)}{u(x)}$ على $I$ هي:
                      $$F(x) = \\ln|u(x)| + k \\qquad (k \\in \\mathbb{R})$$
                      • <b>صيغ مرجعية شائعة في الوطني:</b><br/>
                      1) $\\tan x = \\frac{\\sin x}{\\cos x} \\implies$ أصلية على $I$ هي $-\\ln|\\cos x| + k$.<br/>
                      2) $\\frac{1}{x\\ln x} = \\frac{1/x}{\\ln x} \\implies$ أصلية على $]0,1[$ أو $]1,+\\infty[$ هي $\\ln|\\ln x| + k$.<br/>
                      3) الكسور الجزئية: $\\frac{1}{x(x+1)} = \\frac{1}{x} - \\frac{1}{x+1} \\implies \\ln\\left|\\frac{x}{x+1}\\right| + k$.
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">⚖️ ب) اللوغاريتم للأساس $a$ ($\\log_a$) واللوغاريتم العشري ($\\log$):</b>
                      • لكل أساس $a \\in ]0, +\\infty[ \\setminus \\{1\\}$، تُعرّف $\\log_a$ على $]0, +\\infty[$ بـ:
                      $$\\log_a(x) = \\frac{\\ln x}{\\ln a}, \\qquad (\\log_a x)' = \\frac{1}{x \\ln a}$$
                      • <b>انقلاب الرتابة حسب الأساس $a$:</b><br/>
                      – إذا كان <b>$a \\gt 1$</b> ($\\ln a \\gt 0$): $\\log_a$ <b>تزايدية قطعا</b> على $]0,+\\infty[$ ($\\log_a u \\lt \\log_a v \\iff u \\lt v$).<br/>
                      – إذا كان <b>$0 \\lt a \\lt 1$</b> ($\\ln a \\lt 0$): $\\log_a$ <b>تناقصية قطعا</b> على $]0,+\\infty[$ (<b>تقلب المتراجحة!</b>).<br/>
                      • <b>اللوغاريتم العشري ($a = 10$):</b> $\\log(x) = \\frac{\\ln x}{\\ln 10}$، و $\\log(10^r) = r$ ($r \\in \\mathbb{Q}$).<br/>
                      • <b>حل معادلات $10^x = c$:</b> إذا كان $c \\gt 0$ فالحل الوحيد هو <b>$x = \\log c$</b>، وإذا كان $c \\le 0$ فلا حل في $\\mathbb{R}$.
                    </div>
                  </div>

                  <!-- SVG Diagram: y = log_a(x) for a=2, a=e, a=1/2 + u'/u Pipeline -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardLogBaseAndDerivative">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📈 مقارنة منحنيات $\\log_a(x)$ ($a \\gt 1$ مقابل $0 \\lt a \\lt 1$) ومسار $\\left(\\ln|u|\\right)' = \\frac{u'}{u}$</span>
                      <span class="text-[11px] font-mono text-amber-400">log_(1/a)(x) = -log_a(x)</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <marker id="arrM5Ax3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                        </defs>

                        <!-- Left Panel: log_a(x) Graph for a=2, e, 1/2 -->
                        <rect x="12" y="12" width="388" height="216" rx="10" fill="rgba(15,23,42,0.72)" stroke="#1e293b" stroke-width="1.2"/>

                        <!-- Axes: Ox at y=120, Oy at x=76 -->
                        <line x1="42" y1="120" x2="380" y2="120" stroke="#475569" stroke-width="1.5" marker-end="url(#arrM5Ax3)"/>
                        <line x1="76" y1="216" x2="76" y2="24" stroke="#475569" stroke-width="1.5" marker-end="url(#arrM5Ax3)"/>
                        <text x="384" y="124" fill="#94a3b8" font-size="10.5" font-weight="bold" font-family="monospace">x</text>
                        <text x="66" y="28" fill="#cbd5e1" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">y</text>

                        <!-- log_2(x) (a = 2 > 1, increasing cyan): passes through (1,0)->(126,120), (2,1)->(176,82), (4,2)->(276,44) -->
                        <path d="M 86 212 C 95 168, 108 136, 126 120 C 156 94, 210 64, 360 32" fill="none" stroke="#22d3ee" stroke-width="2.6"/>
                        <text x="278" y="34" fill="#67e8f9" font-size="10" font-weight="bold" font-family="monospace">log2(x) (a &gt; 1)</text>

                        <!-- ln(x) reference (dashed emerald): passes through (1,0)->(126,120), (2.72,1)->(212,82) -->
                        <path d="M 90 212 C 102 162, 114 134, 126 120 C 168 96, 232 76, 360 58" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="4,3"/>
                        <text x="312" y="76" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace">ln(x)</text>

                        <!-- log_{1/2}(x) (0 < a < 1, decreasing rose, reflection across y=0) -->
                        <path d="M 86 28 C 95 72, 108 104, 126 120 C 156 146, 210 176, 360 208" fill="none" stroke="#f43f5e" stroke-width="2.6"/>
                        <text x="260" y="212" fill="#fda4af" font-size="10" font-weight="bold" font-family="monospace">log_(1/2)(x) (0&lt;a&lt;1)</text>

                        <!-- Pivot Point (1,0) -->
                        <circle cx="126" cy="120" r="4.5" fill="#fbbf24"/>
                        <text x="126" y="136" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>

                        <!-- Right Panel: Rules & Primitives Cheat Sheet -->
                        <rect x="414" y="12" width="254" height="216" rx="10" fill="rgba(15,23,42,0.85)" stroke="#334155" stroke-width="1.3"/>
                        <text x="541" y="36" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Derivee &amp; Primitives</text>
                        <line x1="428" y1="48" x2="654" y2="48" stroke="#334155" stroke-width="1"/>
                        <text x="541" y="72" fill="#67e8f9" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">(ln|u|)' = u' / u (u != 0)</text>
                        <text x="541" y="96" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">Prim(u'/u) = ln|u| + k</text>
                        <line x1="428" y1="112" x2="654" y2="112" stroke="#334155" stroke-width="1"/>
                        <text x="541" y="136" fill="#d8b4fe" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">(log_a x)' = 1 / (x ln a)</text>
                        <text x="541" y="160" fill="#fda4af" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">a&lt;1 : ln a &lt; 0 =&gt; Decroit</text>
                        <line x1="428" y1="176" x2="654" y2="176" stroke="#334155" stroke-width="1"/>
                        <text x="541" y="200" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">10^x = c (c&gt;0) &lt;=&gt; x = log c</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">فخاخ القيمة المطلقة وأساس اللوغاريتم</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «حذف القيمة المطلقة في أصلية $\\frac{u'}{u}$ على مجال حيث $u(x) \\lt 0$!»</b>
                      في تعيين أصلية $f(x) = \\frac{2x}{x^2 - 9}$ على المجال <b>$]-3, 3[$</b>، المقام $x^2 - 9$ <b>سالب قطعا</b>! كتابة $\\ln(x^2 - 9) + k$ خطأ فادح لأنها غير معرفة؛ الصحيح هو <b>$\\ln|x^2 - 9| + k = \\ln(9 - x^2) + k$</b>!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «نسيان المعامل التعديلي أو إشارة الناقص في $\\tan x$ و $\\frac{1}{ax+b}$»</b>
                      • أصلية $\\frac{1}{2x + 5}$ ليست $\\ln|2x+5|$ بل <b>$\\frac{1}{2}\\ln|2x+5| + k$</b>.<br/>
                      • وأصلية $\\tan x = -\\frac{(\\cos x)'}{\\cos x}$ هي <b>$-\\ln|\\cos x| + k$</b>!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «عدم قلب المتراجحة في $\\log_a$ عندما $0 \\lt a \\lt 1$!»</b>
                      عندما $a = \\frac{1}{2}$ أو $\\frac{1}{3}$، يكون $\\ln a \\lt 0$ وتكون الدالة $\\log_a$ <b>تناقصية قطعا</b>: لذا $\\log_{1/2}(u) \\ge \\log_{1/2}(v) \\iff 0 \\lt u \\le v$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «الخلط بين مشتقة $\\log(x)$ ومشتقة $\\ln(x)$!»</b>
                      تذكّر دائماً أن $(\\log x)' = \\frac{1}{x \\ln 10}$ وليس $\\frac{1}{x}$! ولا تنسَ تقاطع الحلول مع $c \\gt 0$ عند حل المعادلات من الدرجة 2 لـ $10^x = c$.
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1 (كلاسيكي وطني): أصلية $u'/u$ على مجال سالب وتفكيك الكسور + $1/(x\\ln x)$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      <b>1.</b> حدّد الدالة الأصلية الوحيدة $F$ للدالة $f(x) = \\frac{2x - 1}{x^2 - x - 6}$ على المجال $I = ]-2, 3[$ بحيث $F(0) = 0$. <span class="text-emerald-400 font-mono">(1.00 ن)</span><br/>
                      <b>2.</b> عيّن جميع الدوال الأصلية $G$ للدالة $g(x) = \\frac{x + 2}{x^2 - 1} + \\frac{1}{x\\ln x}$ على المجال $J = ]1, +\\infty[$. <span class="text-emerald-400 font-mono">(1.00 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. تحديد $F$ على $I = ]-2, 3[$ (1.00 ن):</b><br/>
                      • نضع $u(x) = x^2 - x - 6 = (x - 3)(x + 2)$. على المجال $]-2, 3[$ لدينا $u(x) \\lt 0$ (فلا ينعدم!) و $u'(x) = 2x - 1$.<br/>
                      • لأن $f(x) = \\frac{u'(x)}{u(x)}$ متصلة على $I$، فإن دوالها الأصلية هي:
                      $$F(x) = \\ln|x^2 - x - 6| + k = \\ln(6 + x - x^2) + k$$
                      • الشرط $F(0) = 0 \\iff \\ln(6) + k = 0 \\iff k = -\\ln 6$. ومنه:
                      $$F(x) = \\ln(6 + x - x^2) - \\ln 6 = \\ln\\left(\\frac{6 + x - x^2}{6}\\right)$$
                      </p>
                      <p><b>2. تحديد $G$ على $J = ]1, +\\infty[$ (1.00 ن):</b><br/>
                      • بتفكيك الجزء الكسري: $\\frac{x + 2}{x^2 - 1} = \\frac{a}{x - 1} + \\frac{b}{x + 1} \\implies a + b = 1$ و $a - b = 2$، نجد $a = \\frac{3}{2}$ و $b = -\\frac{1}{2}$:<br/>
                      $$g(x) = \\frac{3}{2}\\cdot\\frac{1}{x - 1} - \\frac{1}{2}\\cdot\\frac{1}{x + 1} + \\frac{1/x}{\\ln x}$$
                      • على $J = ]1, +\\infty[$ نجد $x - 1 \\gt 0$، $x + 1 \\gt 0$، و $\\ln x \\gt 0$، ومنه الدوال الأصلية ($k \\in \\mathbb{R}$):
                      $$G(x) = \\frac{3}{2}\\ln(x - 1) - \\frac{1}{2}\\ln(x + 1) + \\ln(\\ln x) + k$$
                      </p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: متراجحة $\\log_a$ بأساس أصغر من $1$ ومعادلة عشري $10^x$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      حل في $\\mathbb{R}$ كلاً من المتراجحة والمعادلة التاليتين:<br/>
                      <b>1.</b> $(I):\\; \\log_{1/2}(x - 1) + \\log_{1/2}(x + 2) \\ge -2$ <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> $(E):\\; 10^{2x} - 10^x - 20 = 0$ <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. المتراجحة $(I)$ (0.75 ن):</b><br/>
                      • حيز التعريف: $x - 1 \\gt 0$ و $x + 2 \\gt 0 \\implies D_I = ]1, +\\infty[$.<br/>
                      • نلاحظ أن $-2 = \\log_{1/2}\\left((1/2)^{-2}\\right) = \\log_{1/2}(4)$، وتصبح المتراجحة: $\\log_{1/2}((x-1)(x+2)) \\ge \\log_{1/2}(4)$.<br/>
                      • لأن الأساس $\\frac{1}{2} \\in ]0, 1[$، فإن الدالة $\\log_{1/2}$ <b>تناقصية قطعا</b>، فنقلب المتراجحة:<br/>
                      $(x - 1)(x + 2) \\le 4 \\iff x^2 + x - 6 \\le 0 \\iff (x + 3)(x - 2) \\le 0 \\iff x \\in [-3, 2]$.<br/>
                      بالتقاطع مع $D_I = ]1, +\\infty[$ نحصل على: <b>$S_I = ]1, 2]$</b>.</p>
                      <p><b>2. المعادلة $(E)$ (0.75 ن):</b><br/>
                      • نضع $X = 10^x \\gt 0$: $X^2 - X - 20 = 0 \\iff (X - 5)(X + 4) = 0$.<br/>
                      • بما أن $10^x \\gt 0$، نرفض $X = -4$ ونحتفظ بـ $10^x = 5 \\iff x = \\log(5)$ ($\\approx 0.70$). إذن <b>$S_E = \\{\\log 5\\}$</b>.</p>
                    </div>
                  </div>
                </div>

                <!-- 4. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">مشتقة $\\log_2|u|$ وأصلية مثلثية كسرية</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    1) برهن أن الدالة $f(x) = \\log_2|x^2 - 4|$ قابلة للاشتقاق على $]0, 2[$ واحسب $f'(x)$ ثم استنتج رتابتها.<br/>
                    2) عيّن الدالة الأصلية الوحيدة $F$ للدالة $h(x) = \\frac{\\sin x}{\\cos x} + \\frac{2x}{x^2 + 1}$ على $]-\\frac{\\pi}{2}, \\frac{\\pi}{2}[$ بحيث $F(0) = 0$.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. اشتقاق ورتابة $f$ على $]0, 2[$:</b><br/>
                      على $]0, 2[$ لدينا $x^2 - 4 \\lt 0$ فلا تنعدم $x^2 - 4$، وبالتالي $f(x) = \\frac{\\ln|x^2 - 4|}{\\ln 2}$ قابلة للاشتقاق على $]0, 2[$:<br/>
                      $$f'(x) = \\frac{1}{\\ln 2}\\cdot \\frac{2x}{x^2 - 4} \\lt 0$$
                      بما أن $2x \\gt 0$ و $x^2 - 4 \\lt 0$ و $\\ln 2 \\gt 0$، فإن $f$ <b>تناقصية قطعا</b> على $]0, 2[$.</p>
                      <p><b>2. الدالة الأصلية $F$ على $]-\\frac{\\pi}{2}, \\frac{\\pi}{2}[$:</b><br/>
                      على هذا المجال $\\cos x \\gt 0$ و $x^2 + 1 \\gt 0$. نكتب $h(x) = -\\frac{(\\cos x)'}{\\cos x} + \\frac{(x^2 + 1)'}{x^2 + 1}$، ومنه:<br/>
                      $$F(x) = -\\ln(\\cos x) + \\ln(x^2 + 1) + k = \\ln\\left(\\frac{x^2 + 1}{\\cos x}\\right) + k$$
                      وبما أن $F(0) = \\ln(1) + k = 0 \\implies k = 0$، فإن <b>$F(x) = \\ln\\left(\\frac{x^2 + 1}{\\cos x}\\right)$</b>.</p>
                    </div>
                  </details>
                </div>
              </div>

`);
