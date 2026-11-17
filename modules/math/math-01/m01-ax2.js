window.EulerAcademy.registerAxis('math-01', 'm01-ax2', `

              <div class="space-y-6">
                <!-- 1. Rigorous Definition: Continuity on an Interval -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. المفهوم الرسمي: الاتصال على مجال (Continuité sur un intervalle)</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>
                  <div class="space-y-4 text-sm text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 block mb-1">أ) الاتصال على مجال مفتوح $]a, b[$:</b>
                      نقول إن الدالة $f$ <b>متصلة على المجال المفتوح $]a, b[$</b> (أو $]-\\infty, b[$ أو $]a, +\\infty[$) إذا وفقط إذا كانت متصلة في كل نقطة $x_0$ من هذا المجال:
                      $$\\forall x_0 \\in ]a, b[, \\quad \\lim_{x \\to x_0} f(x) = f(x_0)$$
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 block mb-1">ب) الاتصال على مجال مغلق أو نصف مغلق $[a, b]$:</b>
                      تكون الدالة $f$ <b>متصلة على القطعة $[a, b]$</b> إذا وفقط إذا تحققت الشروط الثلاثة معاً:
                      <ul class="text-xs text-slate-300 space-y-1.5 list-disc pr-5 mt-2">
                        <li>الدالة $f$ متصلة على المجال المفتوح $]a, b[$.</li>
                        <li>الدالة $f$ متصلة على اليمين في $a$: $\\lim_{x \\to a^+} f(x) = f(a)$.</li>
                        <li>الدالة $f$ متصلة على اليسار في $b$: $\\lim_{x \\to b^-} f(x) = f(b)$.</li>
                      </ul>
                    </div>
                  </div>
                  <div class="mt-4 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300">
                    <b class="text-emerald-400">📐 التأويل الهندسي:</b> نقول إن $f$ متصلة على مجال $I$ إذا أمكن رسم منحناها $(C_f)$ فوق المجال $I$ بصفة مستمرة بخط واحد دون رفع القلم عن الورقة ودون حدوث أي قفزة أو انقطاع.
                  </div>
                </div>

                <!-- 2. Continuity of Standard Functions -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">2. اتصال الدوال الاعتيادية (Fonctions usuelles)</span>
                    <span class="text-xs text-slate-400 font-mono">خاصيات مرجعية تقبل بدون برهان</span>
                  </div>
                  <p class="text-xs text-slate-300 mb-4">في الامتحان الوطني، تُقبل الخاصيات التالية كقواعد مبرهنة مباشرة لتعليل الاتصال:</p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200">
                    <div class="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">• الدوال الحدودية:</b>
                      كل دالة حدودية $P(x) = a_n x^n + \\dots + a_0$ متصلة على $\\mathbb{R}$ كاملاً.
                    </div>
                    <div class="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">• الدوال الجذرية:</b>
                      كل دالة جذرية $x \\mapsto \\frac{P(x)}{Q(x)}$ (خارج حدوديتين) متصلة على كل مجال ضمن مجموعة تعريفها $D_f$.
                    </div>
                    <div class="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">• الدوال المثلثية:</b>
                      الدالتان $x \\mapsto \\cos x$ و $x \\mapsto \\sin x$ متصلتان على $\\mathbb{R}$. ودالة $x \\mapsto \\tan x$ متصلة على كل مجال ضمن $\\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + k\\pi \\mid k \\in \\mathbb{Z}\\}$.
                    </div>
                    <div class="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">• دالة الجذر والقيمة المطلقة:</b>
                      الدالة $x \\mapsto \\sqrt{x}$ متصلة على $[0, +\\infty[$، والدالة $x \\mapsto |x|$ متصلة على $\\mathbb{R}$.
                    </div>
                  </div>
                </div>

                <!-- 3. Operations on Continuous Functions -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-indigo-500/15 text-indigo-300 text-xs font-bold">3. العمليات الجبرية على الدوال المتصلة (Opérations algébriques)</span>
                    <span class="text-xs text-slate-400 font-mono">مبرهنات الحساب</span>
                  </div>
                  <p class="text-xs text-slate-300 mb-3">إذا كانت $f$ و $g$ دالتين متصلتين على مجال $I$، و $\\alpha \\in \\mathbb{R}$، فإن:</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-slate-200">
                    <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <b class="text-indigo-400 block mb-1">الجمع والجداء:</b>
                      الدوال $f + g$ و $\\alpha f$ و $f \\times g$ متصلة على $I$.
                    </div>
                    <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <b class="text-indigo-400 block mb-1">القوة والقيمة المطلقة:</b>
                      الدوال $f^n$ ($n \\in \\mathbb{N}^*$) و $|f|$ متصلة على $I$.
                    </div>
                    <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <b class="text-indigo-400 block mb-1">الخارج والجذر:</b>
                      إذا كان $g(x) \\neq 0$ على $I$ فإن $\\frac{f}{g}$ متصلة على $I$. وإذا كان $f(x) \\ge 0$ فإن $\\sqrt{f}$ متصلة على $I$.
                    </div>
                  </div>
                </div>

                <!-- 4. Composition of Functions: Theorem & Requirements -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-pink-500/15 text-pink-300 text-xs font-bold">4. اتصال مركب دالتين $g \\circ f$ ونهاية المركب</span>
                    <span class="text-xs text-slate-400 font-mono">Composée de deux fonctions</span>
                  </div>
                  <div class="bg-slate-950 border border-pink-500/30 rounded-xl p-4 my-3 text-xs text-slate-200 leading-relaxed">
                    <p class="font-bold text-pink-300 mb-2">📌 المبرهنة الأساسية الحاسمة (مبرهنة الاتصال بالتركيب):</p>
                    لتكن $f$ دالة معرفة على مجال $I$، و $g$ دالة معرفة على مجال $J$. إذا كانت:
                    <ol class="list-decimal pr-5 space-y-1.5 my-2 font-mono text-cyan-300">
                      <li>$f$ متصلة على المجال $I$</li>
                      <li>$f(I) \\subset J$ (أي: $\\forall x \\in I, \\quad f(x) \\in J$)</li>
                      <li>$g$ متصلة على المجال $J$</li>
                    </ol>
                    فإن الدالة المركبة $g \\circ f$ المعرفة على $I$ بـ $(g \\circ f)(x) = g(f(x))$ <b>متصلة على المجال $I$</b>.
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300 mt-3">
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                      <b class="text-pink-400 block mb-1">✨ نتائج مباشرة بالغة الأهمية:</b>
                      • إذا كانت $u$ متصلة وموجبة على $I$، فإن دالة الجذر $x \\mapsto \\sqrt{u(x)}$ متصلة على $I$.<br/>
                      • إذا كانت $u$ متصلة على $I$، فإن الدالتين $x \\mapsto \\cos(u(x))$ و $x \\mapsto \\sin(u(x))$ متصلتان على $I$.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                      <b class="text-pink-400 block mb-1">🔄 مبرهنة نهاية مركب دالتين:</b>
                      إذا كان $\\lim_{x \\to x_0} f(x) = L$ وكانت $g$ متصلة في النقطة $L$، فإن:
                      $$\\lim_{x \\to x_0} (g \\circ f)(x) = g(L)$$
                      وهي القاعدة المؤسسة لتقنية تغيير المتغير $Y = f(x)$.
                    </div>
                  </div>
                </div>

                <!-- 5. Classic National Exam Traps -->
                <div class="bg-amber-950/20 border border-amber-500/40 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold">⚠️ فخاخ كلاسيكية في الامتحان الوطني (Pièges Classiques)</span>
                    <span class="text-xs text-amber-400 font-mono">ضمان العلامة الكاملة</span>
                  </div>
                  <div class="space-y-3 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-amber-500/20">
                      <b class="text-amber-400 block mb-1">1. فخ نسيان التحقق الصريح من شرط التضمن $f(I) \\subset J$:</b>
                      كثير من التلاميذ يكتفون بكتابة: <i>«الدالة متصلة لأنها مركب دالتين متصلتين»</i>! هذا التعليل ناقص ويُسقط $0.25$ نقطة في التصحيح الرسمي. يجب كتابة الجملة النموذجية:
                      <i>«بما أن $u$ متصلة على $I$ وتأخذ قيمها في $J$ (أي $u(I) \\subset J$)، وبما أن الدالة الموالية متصلة على $J$، فإن المركب متصل على $I$»</i>.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-amber-500/20">
                      <b class="text-amber-400 block mb-1">2. فخ اتصال الدوال الجذرية خارج مجالات تعريفها:</b>
                      الدالة الجذرية $x \\mapsto \\frac{P(x)}{Q(x)}$ متصلة على <b>كل مجال ضمن مجموعة تعريفها</b> وليس بالضرورة على $D_f$ كعبارة عامة إذا كانت $D_f$ اتحاد مجالين منفصلين. عند التعليل، اذكر صراحة: <i>«متصلة على المجال $I$ لأنه ضمن مجموعة تعريفها $D_f$ (لأن $Q(x) \\neq 0$ لكل $x \\in I$)»</i>.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-amber-500/20">
                      <b class="text-amber-400 block mb-1">3. فخ شرط الإيجاب الصارم لدالة الجذر $\\sqrt{u(x)}$:</b>
                      لاتصال $\\sqrt{u(x)}$ على مجال مغلق $[a, b]$، يجب التحقق من أن $u(x) \\ge 0$ على كامل المجال $[a, b]$ متضمناً الأطراف $a$ و $b$.
                    </div>
                  </div>
                </div>

                <!-- 6. Rigorous Proof-Based Application Problems -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">📝 تطبيقات نموذجية محررة بالصياغة الرسمية للامتحان الوطني</span>
                    <span class="text-xs text-slate-400 font-mono">التعليل الكامل • سلم التنقيط</span>
                  </div>

                  <!-- Application 1 -->
                  <div class="bg-slate-950 p-5 rounded-2xl border border-slate-800 mb-5">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="text-xs font-bold text-cyan-400">تطبيق 1: تعليل اتصال دالة تتضمن مركباً وعمليات على قطعة $[0, \\pi]$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">0.75 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نعتبر الدالة $f$ المعرفة على المجال $I = [0, \\pi]$ بما يلي:
                      $$f(x) = \\sqrt{2 + \\cos x} + \\frac{x^2 + 1}{x + 2}$$
                      بين معللاً جوابك أن الدالة $f$ متصلة على المجال $[0, \\pi]$.
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-3 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 الحل النموذجي بالصياغة المعتمدة في الامتحان الوطني:</p>
                      <div>
                        <b>أ) دراسة اتصال الجزء الأول $u(x) = \\sqrt{2 + \\cos x}$:</b><br/>
                        • الدالة $x \\mapsto 2 + \\cos x$ متصلة على $[0, \\pi]$ لأنها مجموع دالة ثابتة والدالة الاعتيادية $x \\mapsto \\cos x$ المتصلة على $\\mathbb{R}$.<br/>
                        • ولدينا لكل $x \\in [0, \\pi]$: $-1 \\le \\cos x \\le 1 \\implies 1 \\le 2 + \\cos x \\le 3$. إذن $2 + \\cos x > 0$ على $[0, \\pi]$.<br/>
                        • وبما أن دالة الجذر المربع $t \\mapsto \\sqrt{t}$ متصلة على $[0, +\\infty[$، فإن الدالة $x \\mapsto \\sqrt{2 + \\cos x}$ <b>متصلة على $[0, \\pi]$ كمركب دالتين متصلتين</b>. <span class="text-emerald-400 font-mono">(0.25 ن)</span>
                      </div>
                      <div>
                        <b>ب) دراسة اتصال الجزء الثاني $v(x) = \\frac{x^2 + 1}{x + 2}$:</b><br/>
                        • الدالة $v$ دالة جذرية معرفة على $D_v = \\mathbb{R} \\setminus \\{-2\\}$.<br/>
                        • وبما أن $-2 \\notin [0, \\pi]$، فإن المجال $[0, \\pi] \\subset D_v$. إذن الدالة $v$ <b>متصلة على $[0, \\pi]$ كدالة جذرية معرفة عليه</b>. <span class="text-emerald-400 font-mono">(0.25 ن)</span>
                      </div>
                      <div>
                        <b>ج) الاستنتاج المنهجي:</b><br/>
                        بما أن $f = u + v$ هي مجموع دالتين متصلتين على المجال $[0, \\pi]$، فإن:
                        <b>الدالة $f$ متصلة على المجال $[0, \\pi]$</b>. <span class="text-emerald-400 font-mono">(0.25 ن)</span>
                      </div>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="text-xs font-bold text-cyan-400">تطبيق 2: اتصال دالة مجزأة على $\\mathbb{R}$ كاملاً (الربط بين الاتصال على مجال وفي نقطة)</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      لتكن الدالة $g$ المعرفة على $\\mathbb{R}$ بما يلي:
                      $$g(x) = \\begin{cases} \\dfrac{x^2 - 4x + 3}{x - 1} & \\text{si } x < 1 \\\\ -2 & \\text{si } x = 1 \\\\ \\sqrt{x^2 + 3} - 4 & \\text{si } x > 1 \\end{cases}$$
                      أثبت أن الدالة $g$ متصلة على $\\mathbb{R}$.
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-3 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 خطوات البرهان المتكامل:</p>
                      <div>
                        <b>1. الاتصال على المجال $]-\\infty, 1[$:</b><br/>
                        لكل $x \\in ]-\\infty, 1[$ لدينا $g(x) = \\frac{x^2-4x+3}{x-1}$. وهي دالة جذرية معرفة على $\\mathbb{R} \\setminus \\{1\\}$، وبما أن $]-\\infty, 1[ \\subset \\mathbb{R} \\setminus \\{1\\}$ فإن $g$ متصلة على $]-\\infty, 1[$. <span class="text-emerald-400 font-mono">(0.25 ن)</span>
                      </div>
                      <div>
                        <b>2. الاتصال على المجال $]1, +\\infty[$:</b><br/>
                        لكل $x \\in ]1, +\\infty[$ لدينا $g(x) = \\sqrt{x^2+3} - 4$. الدالة $x \\mapsto x^2+3$ حدودية متصلة وموجبة قطعا على $]1, +\\infty[$، إذن مركبها مع دالة الجذر متصل على $]1, +\\infty[$. ومجموعها مع الثابتة $-4$ متصل على $]1, +\\infty[$. <span class="text-emerald-400 font-mono">(0.25 ن)</span>
                      </div>
                      <div>
                        <b>3. دراسة الاتصال في النقطة المفصلية $x_0 = 1$:</b><br/>
                        • على اليسار: $\\lim_{x \\to 1^-} g(x) = \\lim_{x \\to 1^-} \\frac{(x-1)(x-3)}{x-1} = \\lim_{x \\to 1^-} (x-3) = 1 - 3 = -2 = g(1)$.<br/>
                        • على اليمين: $\\lim_{x \\to 1^+} g(x) = \\lim_{x \\to 1^+} (\\sqrt{x^2+3} - 4) = \\sqrt{1+3} - 4 = 2 - 4 = -2 = g(1)$.<br/>
                        بما أن $\\lim_{x \\to 1^-} g(x) = \\lim_{x \\to 1^+} g(x) = g(1)$، فإن $g$ متصلة في النقطة $1$. <span class="text-emerald-400 font-mono">(0.25 ن)</span>
                      </div>
                      <div>
                        <b>4. الاستنتاج العام:</b><br/>
                        بما أن $g$ متصلة على $]-\\infty, 1[$ وعلى $]1, +\\infty[$ وفي النقطة $1$، فإن <b>الدالة $g$ متصلة على $\\mathbb{R}$ كاملاً</b>. <span class="text-emerald-400 font-mono">(0.25 ن)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 7. Interactive Auto-Test -->
                <div class="bg-cyan-950/20 border border-cyan-500/30 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Test)</span>
                    <span class="text-xs text-slate-400">اختبر استيعابك للمحور 02</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    لتكن الدالة $f(x) = \\cos\\left(\\dfrac{\\pi x}{2x + 2}\\right)$ معرفة على $I = [0, 2]$. أثبت أن الدالة $f$ متصلة على القطعة $[0, 2]$ مستدلاً بمركب الدوال، ثم احسب $f(0)$ و $f(2)$.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center justify-between select-none">
                      <span>👁️ انقر هنا لمعاينة الحل المنهجي والتحقق من إجابتك</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2 border-t border-slate-800 text-xs text-slate-300 leading-relaxed space-y-2">
                      <p>• الدالة $u: x \\mapsto \\frac{\\pi x}{2x + 2}$ دالة جذرية معرفة على $\\mathbb{R} \\setminus \\{-1\\}$. وبما أن $-1 \\notin [0, 2]$، فإن $u$ متصلة على القطعة $[0, 2]$.</p>
                      <p>• الدالة $v: t \\mapsto \\cos(t)$ متصلة على $\\mathbb{R}$ كاملاً.</p>
                      <p>• بما أن $u([0, 2]) \\subset \\mathbb{R}$، فإن الدالة المركبة $f = v \\circ u$ متصلة على القطعة $[0, 2]$.</p>
                      <p class="text-emerald-400 font-bold">✓ الحساب: $f(0) = \\cos(0) = 1$ ، و $f(2) = \\cos\\left(\\frac{2\\pi}{6}\\right) = \\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$.</p>
                    </div>
                  </details>
                </div>

                <!-- 8. Comprehensive National Exam Synthesis Problem -->
                <div class="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-indigo-500/40 rounded-2xl p-6 shadow-xl">
                  <div class="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <div class="flex items-center gap-2">
                      <span class="px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 text-xs font-bold">🌟 مسألة توليفية شاملة (المحوران 01 و 02)</span>
                      <span class="text-xs text-slate-400 font-mono">Problème de Synthèse • Bac National</span>
                    </div>
                    <span class="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 text-xs font-mono font-bold">1.50 نقطة</span>
                  </div>
                  <p class="text-xs text-slate-300 mb-4 leading-relaxed">
                    نعتبر الدالة العددية $f$ المعرفة على $\\mathbb{R}$ بما يلي:
                    $$f(x) = \\begin{cases} \\sqrt{\\dfrac{x}{x + 1}} & \\text{si } x > 0 \\\\ 0 & \\text{si } x = 0 \\\\ \\dfrac{\\sin(2x)}{2x + x^2} & \\text{si } x < 0 \\text{ et } x \\neq -2 \\\\ 1 & \\text{si } x = -2 \\end{cases}$$
                    <b>1.</b> بين باستعمال مركب دالتين أن الدالة $f$ متصلة على المجال $]0, +\\infty[$.<br/>
                    <b>2.</b> أ) احسب $\\lim_{x \\to 0^+} f(x)$ واستنتج أن $f$ متصلة على اليمين في $0$.<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;ب) احسب $\\lim_{x \\to 0^-} f(x)$. هل الدالة $f$ متصلة في النقطة $0$؟ علل جوابك.<br/>
                    <b>3.</b> احسب نهاية الدالة $f$ عند $+\\infty$ واستنتج التأويل الهندسي للنتيجة.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center justify-between select-none">
                      <span>📘 انقر هنا لمعاينة عناصر الإجابة والتحرير المنهجي الكامل مع سلم التنقيط</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="px-5 pb-5 pt-3 border-t border-slate-800 text-xs text-slate-200 leading-relaxed space-y-4">
                      <div>
                        <b class="text-indigo-300 block mb-1">1. إثبات اتصال $f$ على $]0, +\\infty[$ بالمركب:</b>
                        • نعتبر الدالة $u: x \\mapsto \\frac{x}{x+1}$. الدالة $u$ جذرية معرفة على $\\mathbb{R} \\setminus \\{-1\\}$، وبما أن $-1 \\notin ]0, +\\infty[$، فإن $u$ متصلة على $]0, +\\infty[$.<br/>
                        • لكل $x > 0$: لدينا $x > 0$ و $x + 1 > 0$، إذن $u(x) > 0$. ومنه فإن $u(]0, +\\infty[) \\subset [0, +\\infty[$.<br/>
                        • وبما أن دالة الجذر $t \\mapsto \\sqrt{t}$ متصلة على $[0, +\\infty[$، فإن الدالة المركبة $f = \\sqrt{u}$ <b>متصلة على المجال $]0, +\\infty[$</b>. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      </div>
                      <div>
                        <b class="text-indigo-300 block mb-1">2. أ) دراسة الاتصال على اليمين في $0$:</b>
                        لدينا: $\\lim_{x \\to 0^+} \\frac{x}{x+1} = \\frac{0}{1} = 0$. وبما أن دالة الجذر متصلة في $0$، فإن:
                        $$\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^+} \\sqrt{\\frac{x}{x+1}} = \\sqrt{0} = 0$$
                        وبما أن $f(0) = 0$، فإن $\\lim_{x \\to 0^+} f(x) = f(0)$؛ ومنه فإن <b>الدالة $f$ متصلة على اليمين في النقطة $0$</b>. <span class="text-emerald-400 font-mono">(0.25 ن)</span>
                      </div>
                      <div>
                        <b class="text-indigo-300 block mb-1">2. ب) دراسة الاتصال على اليسار في $0$ والاستنتاج:</b>
                        لكل $x < 0$ (بجوار $0^-$): نكتب:
                        $$\\frac{\\sin(2x)}{2x + x^2} = \\frac{\\sin(2x)}{x(2 + x)} = \\frac{\\sin(2x)}{2x} \\times \\frac{2}{2 + x}$$
                        لدينا $\\lim_{x \\to 0^-} \\frac{\\sin(2x)}{2x} = 1$ (نهاية مثلثية اعتيادية) و $\\lim_{x \\to 0^-} \\frac{2}{2+x} = \\frac{2}{2} = 1$. إذن:
                        $$\\lim_{x \\to 0^-} f(x) = 1 \\times 1 = 1$$
                        بما أن $\\lim_{x \\to 0^-} f(x) = 1 \\neq f(0)$ (حيث $f(0)=0$)، فإن الدالة $f$ <b>غير متصلة على اليسار في $0$</b>.<br/>
                        <b>الاستنتاج:</b> بما أن $\\lim_{x \\to 0^+} f(x) \\neq \\lim_{x \\to 0^-} f(x)$، فإن <b>الدالة $f$ غير متصلة في النقطة $0$</b>. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      </div>
                      <div>
                        <b class="text-indigo-300 block mb-1">3. حساب النهاية عند $+\\infty$ والتأويل الهندسي:</b>
                        لدينا $\\lim_{x \\to +\\infty} \\frac{x}{x+1} = \\lim_{x \\to +\\infty} \\frac{x}{x} = 1$. وبما أن دالة الجذر المربع متصلة في $1$، فإن:
                        $$\\lim_{x \\to +\\infty} f(x) = \\sqrt{1} = 1$$
                        <b>التأويل الهندسي:</b> يقبل المنحنى $(C_f)$ مقارباً أفقياً (Asymptote horizontale) معادلته $y = 1$ بجوار $+\\infty$. <span class="text-emerald-400 font-mono">(0.25 ن)</span>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
`);
