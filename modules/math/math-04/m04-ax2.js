window.EulerAcademy.registerAxis('math-04', 'm04-ax2', `

              <div class="space-y-6">
                <!-- 1. Official Table of Elementary & Composite Primitives -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. جدول الدوال الأصلية الاعتيادية والمركبة ($u' u^r$ و $u'/\\sqrt{u}$ والدوال المثلثية)</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <p class="text-xs text-slate-300 leading-relaxed mb-4">
                    تُستخرج الدوال الأصلية الاعتيادية عبر <b>القراءة العكسية لجدول المشتقات</b>. (ملاحظة منهجية: الحالة الاستثنائية لـ $r = -1$ أي الدالة $\\frac{1}{x}$ تؤدي إلى تقديم دالة اللوغاريتم النيبيري $\\ln$ في الدرس الموالي مباشرة، بينما نغطي هنا كل الحالات $r \\in \\mathbb{Q}\\setminus\\{-1\\}$ والجذور والدوال المثلثية).
                  </p>

                  <!-- Dual Tables -->
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <div class="overflow-x-auto">
                      <table class="w-full text-xs text-right border-collapse border border-slate-800 rounded-xl overflow-hidden">
                        <thead class="bg-slate-950 text-cyan-300">
                          <tr>
                            <th class="p-2 border border-slate-800">الدالة الاعتيادية $f(x)$</th>
                            <th class="p-2 border border-slate-800">أصلية $F(x) + k$</th>
                            <th class="p-2 border border-slate-800">المجال $I$</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-800/80 text-slate-200">
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$a$ ($a\\in\\mathbb{R}$)</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$a\\,x + k$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\mathbb{R}$</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$x^n$ ($n\\in\\mathbb{N}$)</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\frac{x^{n+1}}{n+1} + k$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\mathbb{R}$</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\frac{1}{x^n}$ ($n\\ge 2$)</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$-\\frac{1}{(n-1)x^{n-1}} + k$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$]0,+\\infty[$ أو $]-\\infty,0[$</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$x^r$ ($r\\in\\mathbb{Q}\\setminus\\{-1\\}$)</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\frac{x^{r+1}}{r+1} + k$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$]0,+\\infty[$</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\frac{1}{\\sqrt{x}}$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$2\\sqrt{x} + k$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$]0,+\\infty[$</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\cos(ax+b)$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\frac{1}{a}\\sin(ax+b) + k$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\mathbb{R}$ ($a\\neq 0$)</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\sin(ax+b)$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$-\\frac{1}{a}\\cos(ax+b) + k$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\mathbb{R}$ ($a\\neq 0$)</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$1+\\tan^2 x = \\frac{1}{\\cos^2 x}$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\tan x + k$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$]-\\frac{\\pi}{2}+m\\pi, \\frac{\\pi}{2}+m\\pi[$</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div class="overflow-x-auto">
                      <table class="w-full text-xs text-right border-collapse border border-slate-800 rounded-xl overflow-hidden">
                        <thead class="bg-slate-950 text-amber-300">
                          <tr>
                            <th class="p-2 border border-slate-800">صيغة المركب $f(x)$</th>
                            <th class="p-2 border border-slate-800">أصلية $F(x) + k$</th>
                            <th class="p-2 border border-slate-800">الشرط على $u(x)$</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-800/80 text-slate-200">
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$u'(x)\\,[u(x)]^n$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\frac{[u(x)]^{n+1}}{n+1} + k$</td>
                            <td class="p-2 border border-slate-800">$u$ قابلة للاشتقاق</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\frac{u'(x)}{[u(x)]^n}$ ($n\\ge 2$)</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$-\\frac{1}{(n-1)[u(x)]^{n-1}} + k$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$u(x) \\neq 0$</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$u'(x)\\,[u(x)]^r$ ($r\\neq -1$)</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\frac{[u(x)]^{r+1}}{r+1} + k$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$u(x) \\gt 0$</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\frac{u'(x)}{\\sqrt{u(x)}}$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$2\\sqrt{u(x)} + k$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$u(x) \\gt 0$</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$u'(x)\\cos(u(x))$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\sin(u(x)) + k$</td>
                            <td class="p-2 border border-slate-800">$u$ قابلة للاشتقاق</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$u'(x)\\sin(u(x))$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$-\\cos(u(x)) + k$</td>
                            <td class="p-2 border border-slate-800">$u$ قابلة للاشتقاق</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$u'(x)(1+\\tan^2 u)$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\tan(u(x)) + k$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$\\cos(u(x)) \\neq 0$</td>
                          </tr>
                          <tr>
                            <td class="p-2 border border-slate-800" dir="ltr">$u'(x)\\cdot g'(u(x))$</td>
                            <td class="p-2 border border-slate-800" dir="ltr">$g(u(x)) + k$</td>
                            <td class="p-2 border border-slate-800">قاعدة المركب العامة</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <!-- SVG Pipeline: Algebraic Pre-Processing Tactics -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardPrimitiveMethodPipeline">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>🧭 استراتيجية التحويل الجبري قبل البحث عن الدالة الأصلية (4 مسارات ذهبية)</span>
                      <span class="text-[11px] font-mono text-purple-400">Adapter la forme -&gt; Primitive immediate</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <marker id="arrM4Pipe" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
                          </marker>
                        </defs>
                        <rect x="200" y="14" width="280" height="44" rx="10" fill="rgba(56,189,248,0.14)" stroke="#38bdf8" stroke-width="1.8"/>
                        <text x="340" y="34" fill="#7dd3fc" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">Diagnostic de f(x)</text>
                        <text x="340" y="50" fill="#cbd5e1" font-size="10.5" font-family="monospace" text-anchor="middle">Reperer u(x) et ajuster la cte alpha</text>

                        <path d="M 240 58 L 90 98" fill="none" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arrM4Pipe)"/>
                        <path d="M 300 58 L 256 98" fill="none" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arrM4Pipe)"/>
                        <path d="M 380 58 L 424 98" fill="none" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arrM4Pipe)"/>
                        <path d="M 440 58 L 590 98" fill="none" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arrM4Pipe)"/>

                        <rect x="14" y="102" width="154" height="104" rx="10" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" stroke-width="1.4"/>
                        <text x="91" y="124" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1) Forme u' * u^r</text>
                        <text x="91" y="146" fill="#e2e8f0" font-size="10" font-family="monospace" text-anchor="middle">Radicaux -&gt; u^(p/q)</text>
                        <text x="91" y="168" fill="#fbbf24" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">1/sqrt(u) -&gt; 2*sqrt(u)</text>
                        <text x="91" y="190" fill="#94a3b8" font-size="9.5" font-family="monospace" text-anchor="middle">r in Q \ {-1}</text>

                        <rect x="180" y="102" width="154" height="104" rx="10" fill="rgba(52,211,153,0.08)" stroke="#34d399" stroke-width="1.4"/>
                        <text x="257" y="124" fill="#6ee7b7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">2) Fraction (x-a)^n</text>
                        <text x="257" y="146" fill="#e2e8f0" font-size="10" font-family="monospace" text-anchor="middle">Poser x = (x-a) + a</text>
                        <text x="257" y="168" fill="#67e8f9" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">Decomposer somme</text>
                        <text x="257" y="190" fill="#94a3b8" font-size="9.5" font-family="monospace" text-anchor="middle">Puissances k &gt;= 2</text>

                        <rect x="346" y="102" width="154" height="104" rx="10" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.4"/>
                        <text x="423" y="124" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">3) Trigo Pair/Impair</text>
                        <text x="423" y="146" fill="#e2e8f0" font-size="10" font-family="monospace" text-anchor="middle">cos^2 = (1+cos 2x)/2</text>
                        <text x="423" y="168" fill="#fda4af" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">sin^3 = sin*(1-cos^2)</text>
                        <text x="423" y="190" fill="#94a3b8" font-size="9.5" font-family="monospace" text-anchor="middle">Faire sortir u'</text>

                        <rect x="512" y="102" width="154" height="104" rx="10" fill="rgba(192,132,252,0.08)" stroke="#c084fc" stroke-width="1.4"/>
                        <text x="589" y="124" fill="#d8b4fe" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">4) Tangente &amp; 1/cos^2</text>
                        <text x="589" y="146" fill="#e2e8f0" font-size="10" font-family="monospace" text-anchor="middle">tan' = 1 + tan^2</text>
                        <text x="589" y="168" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">Factoriser (1+tan^2)</text>
                        <text x="589" y="190" fill="#94a3b8" font-size="9.5" font-family="monospace" text-anchor="middle">Sur ]-pi/2, pi/2[</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">تحقق بالاشتقاق بعد كل خطوة!</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «المعامل $2$ في أصلية $\\frac{u'}{\\sqrt{u}}$ مقابل $\\frac{1}{2}$ في الاشتقاق»</b>
                      تذكّر: $(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$، وبالتالي عند الرجوع للأصلية تصعد $2$ إلى البسط: $\\frac{u'}{\\sqrt{u}} \\to 2\\sqrt{u}$! الخطأ في قلب المعامل $2 \\leftrightarrow \\frac{1}{2}$ أكثر أخطاء الباكالوريا شيوعاً!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «الإشارة السالبة بين أصلية $\\sin$ وأصلية $\\cos$!»</b>
                      مشتقة $\\cos x$ هي $-\\sin x$! إذن أصلية $\\sin(ax+b)$ هي <b>$-\\frac{1}{a}\\cos(ax+b)$</b> (تحتوي على ناقص)، بينما أصلية $\\cos(ax+b)$ موجبة: $+\\frac{1}{a}\\sin(ax+b)$.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «اعتبار $G(0) = k$ آلياً عندما تحوي الدالة $\\cos$ أو جذراً أو كسراً!»</b>
                      تنعدم الحدوديات في $0$، لكن $\\cos(0) = 1 \\neq 0$ و $\\sqrt{0+1} = 1 \\neq 0$ و $\\frac{-1}{0+2} = -\\frac{1}{2} \\neq 0$! احسب دائماً قيمة التعبير الأولية في $x_0$ بعناية قبل إيجاد الثابتة $k$.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «تجاهل شرط $u(x) &gt; 0$ قبل استعمال القوى الكسرية $u^r$»</b>
                      في تعابير مثل $\\frac{x}{\\sqrt[3]{(x^2+1)^2}}$ يجب التبرير صراحة أن $x^2+1 \\gt 0$ على $\\mathbb{R}$ قبل تحويل الجذر إلى $(x^2+1)^{-2/3}$.
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: ترسانة الدوال الأصلية (القوى الكسرية، تفكيك الكسر، والإخطاط المثلثي)</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      حدّد دالة أصلية $F_i$ لكل من الدوال التالية على المجال المحدد مع التعليل:<br/>
                      <b>1.</b> $f_1(x) = (2x - 1)\\sqrt{x^2 - x + 2}$ على $I_1 = \\mathbb{R}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> $f_2(x) = \\frac{3x + 2}{\\sqrt[3]{(3x^2 + 4x + 5)^2}}$ على $I_2 = \\mathbb{R}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>3.</b> $f_3(x) = \\frac{x^2 + 1}{(x - 1)^4}$ على $I_3 = ]1, +\\infty[$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>4.</b> $f_4(x) = \\sin^3 x + \\cos^2(2x)$ على $I_4 = \\mathbb{R}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. $f_1$ (0.50 ن):</b> المميز $\\Delta = (-1)^2 - 8 = -7 &lt; 0$، إذن $u(x) = x^2 - x + 2 &gt; 0$ على $\\mathbb{R}$ و $u'(x) = 2x - 1$:
                      $$f_1(x) = u'(x)\\,[u(x)]^{1/2} \\implies F_1(x) = \\frac{[u(x)]^{3/2}}{3/2} = \\frac{2}{3}(x^2 - x + 2)\\sqrt{x^2 - x + 2}$$</p>
                      <p><b>2. $f_2$ (0.50 ن):</b> المميز $\\Delta = 16 - 60 = -44 &lt; 0$، إذن $u(x) = 3x^2 + 4x + 5 &gt; 0$ على $\\mathbb{R}$ و $u'(x) = 6x + 4 = 2(3x + 2)$:
                      $$f_2(x) = \\frac{1}{2}\\,u'(x)\\,[u(x)]^{-2/3} \\implies F_2(x) = \\frac{1}{2} \\cdot \\frac{[u(x)]^{1/3}}{1/3} = \\frac{3}{2}\\sqrt[3]{3x^2 + 4x + 5}$$</p>
                      <p><b>3. $f_3$ بالتفكيك دون لوغاريتم (0.50 ن):</b> نضع $x = (x - 1) + 1 \\implies x^2 + 1 = (x - 1)^2 + 2(x - 1) + 2$:
                      $$f_3(x) = \\frac{1}{(x - 1)^2} + \\frac{2}{(x - 1)^3} + \\frac{2}{(x - 1)^4} \\implies F_3(x) = -\\frac{1}{x - 1} - \\frac{1}{(x - 1)^2} - \\frac{2}{3(x - 1)^3}$$</p>
                      <p><b>4. $f_4$ مثلثياً (0.50 ن):</b> نكتب $\\sin^3 x = \\sin x(1 - \\cos^2 x) = \\sin x + (-\\sin x)\\cos^2 x$ (حيث $-\\sin x = (\\cos x)'$)، ونُخطّط $\\cos^2(2x) = \\frac{1 + \\cos(4x)}{2}$:
                      $$F_4(x) = -\\cos x + \\frac{1}{3}\\cos^3 x + \\frac{1}{2}x + \\frac{1}{8}\\sin(4x)$$</p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: تحديد الدالة الأصلية الوحيدة لمركب كسري-مثلثي مع الشرط $G(0)=1$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      لتكن $g$ معرفة على $\\mathbb{R}$ بـ: $g(x) = \\frac{6x}{(3x^2 + 1)^2} + 4\\sin\\!\\left(2x - \\frac{\\pi}{3}\\right)$.<br/>
                      حدّد الدالة الأصلية الوحيدة $G$ للدالة $g$ على $\\mathbb{R}$ التي تحقق الشرط البدئي $G(0) = 1$. <span class="text-emerald-400 font-mono">(1.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p>• الدالة $g$ متصلة على $\\mathbb{R}$ لأن $3x^2 + 1 \\ge 1 &gt; 0$ فهي تقبل دوال أصلية على $\\mathbb{R}$.<br/>
                      • للجزء الأول: نضع $u(x) = 3x^2 + 1$ فنجد $u'(x) = 6x$؛ إذن $\\frac{u'}{u^2}$ تقبل أصلية هي $-\\frac{1}{u(x)} = -\\frac{1}{3x^2 + 1}$.<br/>
                      • للجزء الثاني: أصلية $4\\sin\\!\\left(2x - \\frac{\\pi}{3}\\right) = 2 \\cdot \\left[2\\sin\\!\\left(2x - \\frac{\\pi}{3}\\right)\\right]$ هي $-2\\cos\\!\\left(2x - \\frac{\\pi}{3}\\right)$.<br/>
                      • ومنه عائلة الدوال الأصلية: $G(x) = -\\frac{1}{3x^2 + 1} - 2\\cos\\!\\left(2x - \\frac{\\pi}{3}\\right) + k$.<br/>
                      • بتطبيق $G(0) = 1$ (انتبه: ليس $G(0)=k$!):
                      $$G(0) = -1 - 2\\cos\\!\\left(-\\frac{\\pi}{3}\\right) + k = -1 - 2\\left(\\frac{1}{2}\\right) + k = -2 + k = 1 \\implies k = 3$$
                      إذن: $G(x) = -\\frac{1}{3x^2 + 1} - 2\\cos\\!\\left(2x - \\frac{\\pi}{3}\\right) + 3$. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 4. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">تعميل ذكي لقوى الظل $\\tan^2 x + \\tan^4 x$</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    نعتبر الدالة $h$ المعرفة على $I = \\left]-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right[$ بما يلي: $h(x) = \\tan^2 x + \\tan^4 x$.<br/>
                    1) عمّل $h(x)$ لإبراز صيغة من النوع $u'(x)\\,[u(x)]^n$.<br/>
                    2) استنتج الدالة الأصلية الوحيدة $H$ للدالة $h$ على $I$ التي تنعدم عند $\\frac{\\pi}{4}$.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. التعميل وإبراز المشتقة:</b><br/>
                      $$h(x) = \\tan^2 x\\,(1 + \\tan^2 x)$$
                      نضع $u(x) = \\tan x$ القابلة للاشتقاق على $]-\\frac{\\pi}{2}, \\frac{\\pi}{2}[$ بمشتقة $u'(x) = 1 + \\tan^2 x$. إذن $h(x) = u'(x)\\,[u(x)]^2$.</p>
                      <p><b>2. الدالة الأصلية المنعدمة في $\\frac{\\pi}{4}$:</b><br/>
                      جميع الدوال الأصلية هي $H(x) = \\frac{1}{3}\\tan^3 x + k$. والشرط $H\\!\\left(\\frac{\\pi}{4}\\right) = 0$ يعطي $\\frac{1}{3}(1)^3 + k = 0 \\implies k = -\\frac{1}{3}$، ومنه:
                      $$H(x) = \\frac{\\tan^3 x - 1}{3}$$
                      </p>
                    </div>
                  </details>
                </div>
              </div>

`);
