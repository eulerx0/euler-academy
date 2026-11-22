window.EulerAcademy.registerAxis('math-01', 'm01-ax3', `

              <div class="space-y-6">
                <!-- 1. Theoretical Foundation & Interval Images -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold">1. الأساس النظري والمبرهنات</span>
                    <span class="text-xs text-slate-400">Fondement Théorique & Image d'Intervalle</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">صورة قطعة ومجال بدالة متصلة ورتيبة قطعاً</h4>
                  <p class="text-sm text-slate-300 leading-relaxed mb-4">
                    في تحليل الدوال العددية لمستوى الثانية باكالوريا، يُعتبر مفهوم حفظ طبيعة المجالات بالدوال المتصلة من أقوى الأدوات المنهجية:
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                      <div class="text-cyan-400 font-bold text-sm mb-1">مبرهنة القيمة القصوية (Weierstrass)</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        صورة قطعة $[a, b]$ بدالة متصلة $f$ هي قطعة $[m, M]$، حيث $m$ هي القيمة الدنوية المطلقة و $M$ هي القيمة القصوية المطلقة للدالة $f$ على $[a, b]$:
                      </p>
                      <div class="my-2 text-center text-cyan-300 text-sm">
                        $$f([a, b]) = [m, M] = [\\min_{x \\in [a, b]} f(x), \\max_{x \\in [a, b]} f(x)]$$
                      </div>
                    </div>
                    <div class="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                      <div class="text-emerald-400 font-bold text-sm mb-1">خاصية المجال (Propriété de l'Intervalle)</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        صورة أي مجال $I$ (مفتوح، نصف مفتوح، أو غير محدود) بدالة متصلة $f$ هي حتماً مجال $J = f(I)$ (ليس بالضرورة من نفس صنف $I$).
                      </p>
                      <div class="my-2 text-center text-emerald-300 text-sm">
                        $$f \\text{ continue sur l'intervalle } I \\implies f(I) \\text{ est un intervalle}$$
                      </div>
                    </div>
                  </div>

                  <!-- Comprehensive Reference Table of Interval Images -->
                  <div class="bg-slate-950/80 rounded-xl border border-slate-800 p-4 overflow-x-auto">
                    <div class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span>⚡</span> جدول المرجع الشامل: حساب $f(I)$ حسب رتابة الدالة
                    </div>
                    <table class="w-full text-xs text-right text-slate-300 border-collapse">
                      <thead>
                        <tr class="border-b border-slate-700 bg-slate-900/60 text-slate-200">
                          <th class="p-2.5 font-bold">المجال $I$</th>
                          <th class="p-2.5 font-bold text-cyan-400">إذا كانت $f$ تزايدية قطعاً على $I$</th>
                          <th class="p-2.5 font-bold text-rose-400">إذا كانت $f$ تناقصية قطعاً على $I$ (قلب الترتيب!)</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-800/80">
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2 font-mono text-amber-300">$[a, b]$</td>
                          <td class="p-2 text-cyan-300 font-mono">$[f(a), f(b)]$</td>
                          <td class="p-2 text-rose-300 font-mono">$[f(b), f(a)]$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2 font-mono text-amber-300">$[a, b[$</td>
                          <td class="p-2 text-cyan-300 font-mono">$[f(a), \\lim_{x \\to b^-} f(x)[$</td>
                          <td class="p-2 text-rose-300 font-mono">$]\\lim_{x \\to b^-} f(x), f(a)]$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2 font-mono text-amber-300">$]a, b]$</td>
                          <td class="p-2 text-cyan-300 font-mono">$]\\lim_{x \\to a^+} f(x), f(b)]$</td>
                          <td class="p-2 text-rose-300 font-mono">$[f(b), \\lim_{x \\to a^+} f(x)[$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2 font-mono text-amber-300">$]a, b[$</td>
                          <td class="p-2 text-cyan-300 font-mono">$]\\lim_{x \\to a^+} f(x), \\lim_{x \\to b^-} f(x)[$</td>
                          <td class="p-2 text-rose-300 font-mono">$]\\lim_{x \\to b^-} f(x), \\lim_{x \\to a^+} f(x)[$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2 font-mono text-amber-300">$[a, +\\infty[$</td>
                          <td class="p-2 text-cyan-300 font-mono">$[f(a), \\lim_{x \\to +\\infty} f(x)[$</td>
                          <td class="p-2 text-rose-300 font-mono">$]\\lim_{x \\to +\\infty} f(x), f(a)]$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2 font-mono text-amber-300">$]-\\infty, b]$</td>
                          <td class="p-2 text-cyan-300 font-mono">$]\\lim_{x \\to -\\infty} f(x), f(b)]$</td>
                          <td class="p-2 text-rose-300 font-mono">$[f(b), \\lim_{x \\to -\\infty} f(x)[$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2 font-mono text-amber-300">$]-\\infty, +\\infty[$</td>
                          <td class="p-2 text-cyan-300 font-mono">$]\\lim_{x \\to -\\infty} f(x), \\lim_{x \\to +\\infty} f(x)[$</td>
                          <td class="p-2 text-rose-300 font-mono">$]\\lim_{x \\to +\\infty} f(x), \\lim_{x \\to -\\infty} f(x)[$</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="mt-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200 leading-relaxed flex items-center gap-2">
                    <span class="text-base font-bold">💡</span>
                    <span><strong>قاعدة ذهبية للوطني:</strong> عند المحد المفتوح نحسب <strong>النهاية</strong>، وعند المحد المغلق نحسب <strong>الصورة المباشرة</strong>. وإذا كانت الدالة تناقصية قطعا، يُقلب ترتيب المحدات حتماً ليبقى الأصغر على اليسار والأكبر على اليمين!</span>
                  </div>
                </div>

                <!-- 2. TVI: Existence and Uniqueness -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">2. مبرهنة القيم الوسيطية (TVI)</span>
                    <span class="text-xs text-slate-400">Théorème des Valeurs Intermédiaires</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">شروط الوجود وشروط الوحدانية (Existence & Unicité)</h4>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <!-- Simple TVI (Existence) -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-cyan-400 font-bold text-sm">مبرهنة الوجود (Existence)</span>
                        <span class="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded">حل على الأقل</span>
                      </div>
                      <p class="text-xs text-slate-300 leading-relaxed mb-2">
                        إذا كانت $f$ دالة متصلة على قطعة $[a, b]$، فلكل عدد حقيقي $\\beta$ محصور بين $f(a)$ و $f(b)$، يوجد على الأقل عنصر $c \\in [a, b]$ بحيث:
                      </p>
                      <div class="text-center text-cyan-300 text-sm font-mono my-2">
                        $$f(c) = \\beta$$
                      </div>
                      <div class="mt-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                        <strong>الحالة الخاصة بالامتحان الوطني ($\\beta = 0$):</strong><br>
                        إذا كانت $f$ متصلة على $[a, b]$ وكان $f(a) \\times f(b) < 0$، فإن المعادلة $f(x) = 0$ تقبل حلاً على الأقل في المجال المفتوح $]a, b[$.
                      </div>
                    </div>

                    <!-- Unique Solution TVI (Unicity) -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-emerald-800/40">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-emerald-400 font-bold text-sm">مبرهنة الوحدانية (Unicité)</span>
                        <span class="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-bold">حل وحيد $\\alpha$</span>
                      </div>
                      <p class="text-xs text-slate-300 leading-relaxed mb-2">
                        إذا تحقق الشرطان الصارمان معاً:
                      </p>
                      <ul class="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                        <li>$f$ <strong>متصلة</strong> على مجال $I$ (أو قطعة $[a, b]$).</li>
                        <li>$f$ <strong>رتيبة قطعاً</strong> على هذا المجال (تزايدية قطعاً أو تناقصية قطعاً).</li>
                        <li>$0 \\in f(I)$ (أو $f(a) \\times f(b) < 0$ في حالة القطعة).</li>
                      </ul>
                      <p class="text-xs text-slate-200 mt-2 font-semibold">
                        فإن المعادلة $f(x) = 0$ تقبل <strong>حلاً وحيداً</strong> $\\alpha \\in I$:
                      </p>
                      <div class="text-center text-emerald-300 text-sm font-mono my-2">
                        $$\\exists ! \\, \\alpha \\in I, \\quad f(\\alpha) = 0$$
                      </div>
                    </div>
                  </div>

                  <!-- Geometric Interpretation Card -->
                  <div class="bg-slate-950/50 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                    <div class="text-purple-400 text-lg font-bold">📐</div>
                    <div>
                      <div class="text-purple-300 font-bold text-xs mb-1">التأويل الهندسي البياني (Interprétation Géométrique)</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        هندسياً، القول بأن المعادلة $f(x) = 0$ تقبل حلاً وحيداً $\\alpha$ على $I$ يعني أن المنحنى الممثل للدالة $(C_f)$ يقطع محور الأفاصيل $(Ox)$ في <strong>نقطة وحيدة</strong> إحداثياتها $(\\alpha, 0)$. إذا طُلب حل المعادلة $f(x) = x$، فالحل هو نقطة تقاطع $(C_f)$ مع المنصف الأول $(\\Delta): y = x$.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 3. Dichotomy Algorithm (Méthode de Dichotomie) -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold">3. الخوارزمية والحساب العددي</span>
                    <span class="text-xs text-slate-400">Algorithme de Dichotomie</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">طريقة التفرع الثنائي لتأطير الحل $\\alpha$</h4>
                  <p class="text-sm text-slate-300 leading-relaxed mb-4">
                    التفرع الثنائي (Méthode de Dichotomie) هي خوارزمية تكرارية منهجية تمكننا من تأطير الجذر $\\alpha$ بسعة مرغوبة $r > 0$ (مثل $0.25$ أو $10^{-2}$) عبر تنصيف المجال دورياً:
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    <div class="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                      <div class="text-amber-400 font-bold text-xs mb-1">المرحلة 1: مركز المجال</div>
                      <p class="text-xs text-slate-300">
                        ننطلق من $[a_0, b_0]$ حيث $f(a_0) \\times f(b_0) < 0$. نحسب المركز:
                      </p>
                      <div class="text-center text-amber-300 font-mono my-1 text-xs">
                        $$m = \\frac{a_0 + b_0}{2}$$
                      </div>
                    </div>
                    <div class="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                      <div class="text-amber-400 font-bold text-xs mb-1">المرحلة 2: اختبار الإشارة</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        نحسب صورة المركز $f(m)$:
                      </p>
                      <ul class="text-[11px] text-slate-300 space-y-1 mt-1">
                        <li>إذا $f(a_0) \\times f(m) < 0 \\implies \\alpha \\in ]a_0, m[$</li>
                        <li>إذا $f(m) \\times f(b_0) < 0 \\implies \\alpha \\in ]m, b_0[$</li>
                        <li>إذا $f(m) = 0 \\implies \\alpha = m$</li>
                      </ul>
                    </div>
                    <div class="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                      <div class="text-amber-400 font-bold text-xs mb-1">المرحلة 3: السعة بعد $n$ خطوة</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        في كل خطوة تتقلص السعة بالنصف، فتكون السعة بعد $n$ تكراراً هي:
                      </p>
                      <div class="text-center text-cyan-300 font-mono my-1 text-xs">
                        $$\\text{Amplitude} = \\frac{b_0 - a_0}{2^n}$$
                      </div>
                    </div>
                  </div>

                  <div class="p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-xs text-slate-300 flex items-center justify-between">
                    <span>صيغة تحديد عدد الخطوات $n$ الأدنى للوصول لسعة $r$:</span>
                    <span class="font-mono text-cyan-400 bg-cyan-950/50 px-2 py-1 rounded border border-cyan-800/40">
                      $$2^n \\ge \\frac{b-a}{r} \\iff n \\ge \\frac{\\ln(\\frac{b-a}{r})}{\\ln 2}$$
                    </span>
                  </div>
                </div>

                <!-- 4. Strategic Link: Sign of f(x) from alpha -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold">4. الربط المنهجي الحاسم</span>
                    <span class="text-xs text-slate-400">Signe de f(x) à partir du zéro alpha</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">استنتاج إشارة دالة $f(x)$ على مجال انطلاقاً من جذرها الوحيد $\\alpha$</h4>
                  <p class="text-sm text-slate-300 leading-relaxed mb-4">
                    هذا السؤال هو حجر الزاوية في دراسة إشارة المشتقة أو دراسة إشارة الدالة المساعدة $g(x)$ في الجزء الأول من تمرين دراسة الدوال بالامتحان الوطني:
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <!-- Case f is strictly increasing -->
                    <div class="bg-slate-950/80 p-4 rounded-xl border border-cyan-800/40">
                      <div class="text-cyan-400 font-bold text-xs mb-2 flex items-center gap-2">
                        <span>📈</span> الحالة الأولى: $f$ متصلة وتزايدية قطعاً على $I$ وتنعدم في $\\alpha$
                      </div>
                      <div class="space-y-2 text-xs text-slate-300">
                        <div class="p-2 bg-slate-900/80 rounded border border-slate-800 font-mono">
                          $$\\forall x \\in I, \\quad x \\le \\alpha \\implies f(x) \\le f(\\alpha) = 0 \\implies f(x) \\le 0$$
                        </div>
                        <div class="p-2 bg-slate-900/80 rounded border border-slate-800 font-mono">
                          $$\\forall x \\in I, \\quad x \\ge \\alpha \\implies f(x) \\ge f(\\alpha) = 0 \\implies f(x) \\ge 0$$
                        </div>
                      </div>
                      <div class="mt-3">
                        <div class="text-[11px] text-slate-400 mb-1">جدول الإشارة:</div>
                        <div class="grid grid-cols-4 text-center font-mono text-xs border border-slate-700 rounded overflow-hidden">
                          <div class="bg-slate-800 text-slate-300 p-1">x</div>
                          <div class="bg-slate-900 text-slate-400 p-1">$a$</div>
                          <div class="bg-slate-900 text-amber-300 p-1">$\\alpha$</div>
                          <div class="bg-slate-900 text-slate-400 p-1">$b$</div>
                          <div class="bg-slate-800 text-slate-300 p-1">f(x)</div>
                          <div class="bg-slate-950 text-rose-400 font-bold p-1">$-$</div>
                          <div class="bg-slate-950 text-emerald-400 font-bold p-1">$0$</div>
                          <div class="bg-slate-950 text-cyan-400 font-bold p-1">$+$</div>
                        </div>
                      </div>
                    </div>

                    <!-- Case f is strictly decreasing -->
                    <div class="bg-slate-950/80 p-4 rounded-xl border border-rose-800/40">
                      <div class="text-rose-400 font-bold text-xs mb-2 flex items-center gap-2">
                        <span>📉</span> الحالة الثانية: $f$ متصلة وتناقصية قطعاً على $I$ وتنعدم في $\\alpha$
                      </div>
                      <div class="space-y-2 text-xs text-slate-300">
                        <div class="p-2 bg-slate-900/80 rounded border border-slate-800 font-mono">
                          $$\\forall x \\in I, \\quad x \\le \\alpha \\implies f(x) \\ge f(\\alpha) = 0 \\implies f(x) \\ge 0$$
                        </div>
                        <div class="p-2 bg-slate-900/80 rounded border border-slate-800 font-mono">
                          $$\\forall x \\in I, \\quad x \\ge \\alpha \\implies f(x) \\le f(\\alpha) = 0 \\implies f(x) \\le 0$$
                        </div>
                      </div>
                      <div class="mt-3">
                        <div class="text-[11px] text-slate-400 mb-1">جدول الإشارة:</div>
                        <div class="grid grid-cols-4 text-center font-mono text-xs border border-slate-700 rounded overflow-hidden">
                          <div class="bg-slate-800 text-slate-300 p-1">x</div>
                          <div class="bg-slate-900 text-slate-400 p-1">$a$</div>
                          <div class="bg-slate-900 text-amber-300 p-1">$\\alpha$</div>
                          <div class="bg-slate-900 text-slate-400 p-1">$b$</div>
                          <div class="bg-slate-800 text-slate-300 p-1">f(x)</div>
                          <div class="bg-slate-950 text-cyan-400 font-bold p-1">$+$</div>
                          <div class="bg-slate-950 text-emerald-400 font-bold p-1">$0$</div>
                          <div class="bg-slate-950 text-rose-400 font-bold p-1">$-$</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 5. Classic National Exam Traps -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-bold">5. فخاخ كلاسيكية في الامتحان الوطني</span>
                    <span class="text-xs text-slate-400">Pièges Fréquents & Vigilance Examen</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-3">أخطاء تكلف نقطاً ثمينة وكيفية تجنبها بدقة</h4>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="p-3 bg-rose-950/20 border border-rose-900/40 rounded-xl">
                      <div class="text-rose-400 font-bold text-xs mb-1">❌ الفخ 1: نسيان شرط "الرتابة القطعية" عند طلب الحل الوحيد</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        إذا اكتفيت بشرط الاتصال و $f(a) \\times f(b) < 0$، فأنت أثبت فقط وجود <strong>حل على الأقل</strong> وليس <strong>حلاً وحيداً</strong>! يخصم المصحح فوراً نصف النقطة المخصصة للفرع.
                      </p>
                    </div>

                    <div class="p-3 bg-rose-950/20 border border-rose-900/40 rounded-xl">
                      <div class="text-rose-400 font-bold text-xs mb-1">❌ الفخ 2: ضرب نهايتين $f(a) \\times f(b) < 0$ في مجال مفتوح</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        على مجال مفتوح $]a, b[$ حيث $a$ أو $b$ غير منتم لمجموعة التعريف (أو $\\pm\\infty$)، لا يصح كتابة $f(a) \\times f(b) < 0$ لأن $f(a)$ غير معرف! الصواب هو حساب النهايات وإظهار أن:
                        $$0 \\in f(]a, b[)$$
                      </p>
                    </div>

                    <div class="p-3 bg-rose-950/20 border border-rose-900/40 rounded-xl">
                      <div class="text-rose-400 font-bold text-xs mb-1">❌ الفخ 3: عدم قلب أطراف المجال للدالة التناقصية</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        عندما تكون $f$ تناقصية قطعا على $[1, 3]$، كتابة $f([1, 3]) = [f(1), f(3)]$ خطأ فادح لأن $f(1) > f(3)$ فينتج مجال بحد أدنى أكبر من حده الأقصى!
                      </p>
                    </div>

                    <div class="p-3 bg-rose-950/20 border border-rose-900/40 rounded-xl">
                      <div class="text-rose-400 font-bold text-xs mb-1">❌ الفخ 4: نسيان ذكر مجال الاتصال بدقة</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        لا يكفي القول "$f$ متصلة"، بل يجب تحرير الجملة الرسمية: "بما أن $f$ متصلة على المجال $[a, b]$ (كدالة حدودية / جذرية / مجموع دوال متصلة)...".
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 6. Model Application 1: Complete National Exam Standard Problem -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">6. تمرين نموذجي مطابق لمعايير الامتحان الوطني</span>
                    <span class="text-xs text-slate-400">1.50 نقطة • سلم التنقيط الرسمي</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">المسألة المرجعية: دراسة جذر المعادلة $x^3 + 3x - 1 = 0$ والتفرع الثنائي</h4>
                  <p class="text-xs text-slate-300 mb-4">
                    لتكن $f$ الدالة العددية المعرفة على $\\mathbb{R}$ بما يلي: $f(x) = x^3 + 3x - 1$.
                  </p>

                  <div class="space-y-4">
                    <!-- Q1 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-amber-400 font-bold text-xs">السؤال 1: أثبت أن $f$ تزايدية قطعاً على $\\mathbb{R}$.</span>
                        <span class="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">0.25 ن</span>
                      </div>
                      <div class="text-xs text-slate-300 leading-relaxed space-y-1">
                        <p class="text-emerald-400 font-semibold mb-1">صياغة التحرير النموذجية:</p>
                        <p>الدالة $f$ حدودية، إذن فهي قابلة للاشتقاق على $\\mathbb{R}$، ولدينا لكل $x \\in \\mathbb{R}$:</p>
                        <div class="text-center text-cyan-300 font-mono my-1">
                          $$f'(x) = (x^3 + 3x - 1)' = 3x^2 + 3 = 3(x^2 + 1)$$
                        </div>
                        <p>بما أن $x^2 \\ge 0$ لكل $x \\in \\mathbb{R}$، فإن $x^2 + 1 \\ge 1 > 0$، ومنه $f'(x) > 0$ قطعا لكل $x \\in \\mathbb{R}$.</p>
                        <p class="text-emerald-300 font-semibold">إذن الدالة $f$ تزايدية قطعاً على $\\mathbb{R}$.</p>
                      </div>
                    </div>

                    <!-- Q2 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-amber-400 font-bold text-xs">السؤال 2: بين أن المعادلة $f(x) = 0$ تقبل حلاً وحيداً $\\alpha \\in \\mathbb{R}$، وأن $0 < \\alpha < 1$.</span>
                        <span class="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">0.50 ن</span>
                      </div>
                      <div class="text-xs text-slate-300 leading-relaxed space-y-1">
                        <p class="text-emerald-400 font-semibold mb-1">صياغة التحرير النموذجية:</p>
                        <p>1. <strong>الاتصال والرتابة:</strong> الدالة $f$ متصلة وتزايدية قطعاً على $\\mathbb{R}$ (دالة حدودية مشتقتها موجبة قطعا).</p>
                        <p>2. <strong>صورة المجال $\\mathbb{R}$ الكامل:</strong></p>
                        <div class="text-center text-cyan-300 font-mono my-1">
                          $$f(\\mathbb{R}) = f(]-\\infty, +\\infty[) = \\left]\\lim_{x \\to -\\infty} f(x), \\lim_{x \\to +\\infty} f(x)\\right[ = ]-\\infty, +\\infty[ = \\mathbb{R}$$
                        </div>
                        <p>بما أن $0 \\in \\mathbb{R}$، فإن المعادلة $f(x) = 0$ تقبل حلاً وحيداً $\\alpha \\in \\mathbb{R}$.</p>
                        <p>3. <strong>التحقق من أن $\\alpha \\in ]0, 1[$:</strong></p>
                        <ul class="list-disc list-inside space-y-0.5">
                          <li>الدالة $f$ متصلة على القطعة $[0, 1]$ (لأنها متصلة على $\\mathbb{R}$).</li>
                          <li>$f(0) = 0^3 + 3(0) - 1 = -1 < 0$.</li>
                          <li>$f(1) = 1^3 + 3(1) - 1 = 3 > 0$.</li>
                        </ul>
                        <p>لدينا $f(0) \\times f(1) = -1 \\times 3 = -3 < 0$. وحسب مبرهنة القيم الوسيطية، فإن $\\alpha \\in ]0, 1[$.</p>
                      </div>
                    </div>

                    <!-- Q3 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-amber-400 font-bold text-xs">السؤال 3: باستعمال التفرع الثنائي، أعطِ تأطيراً للعدد $\\alpha$ سعته $0.25$.</span>
                        <span class="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">0.50 ن</span>
                      </div>
                      <div class="text-xs text-slate-300 leading-relaxed space-y-1">
                        <p class="text-emerald-400 font-semibold mb-1">خطوات خوارزمية التفرع الثنائي:</p>
                        <p>• لدينا $\\alpha \\in ]0, 1[$ بسعة أولية $1 - 0 = 1$.</p>
                        <p>• <strong>المرحلة 1:</strong> نحسب مركز القطعة $[0, 1]$: $m_1 = \\frac{0 + 1}{2} = 0.5$.</p>
                        <div class="font-mono text-cyan-300 p-1.5 bg-slate-900 rounded my-1 text-center">
                          $$f(0.5) = (0.5)^3 + 3(0.5) - 1 = 0.125 + 1.5 - 1 = 0.625 > 0$$
                        </div>
                        <p>بما أن $f(0) = -1 < 0$ و $f(0.5) > 0$، فإن $f(0) \\times f(0.5) < 0$، وبالتالي:</p>
                        <div class="text-amber-300 font-mono text-center my-1">$$\\alpha \\in ]0, 0.5[$$ <span class="text-xs text-slate-300 font-sans">(بسعة $0.5 - 0 = 0.5$)</span></div>

                        <p>• <strong>المرحلة 2:</strong> نحسب مركز القطعة $[0, 0.5]$: $m_2 = \\frac{0 + 0.5}{2} = 0.25$.</p>
                        <div class="font-mono text-cyan-300 p-1.5 bg-slate-900 rounded my-1 text-center">
                          $$f(0.25) = (0.25)^3 + 3(0.25) - 1 = 0.015625 + 0.75 - 1 = -0.234375 < 0$$
                        </div>
                        <p>بما أن $f(0.25) < 0$ و $f(0.5) > 0$، فإن $f(0.25) \\times f(0.5) < 0$، وبالتالي:</p>
                        <div class="p-2 bg-emerald-950/40 border border-emerald-600/40 rounded text-center text-emerald-300 font-mono font-bold text-xs my-1">
                          $$0.25 < \\alpha < 0.5$$<div class="text-xs text-emerald-300 font-sans mt-1">(بسعة $0.5 - 0.25 = 0.25$)</div>
                        </div>
                      </div>
                    </div>

                    <!-- Q4 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-amber-400 font-bold text-xs">السؤال 4: حدد إشارة $f(x)$ على $\\mathbb{R}$ حسب قيم $x$.</span>
                        <span class="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">0.25 ن</span>
                      </div>
                      <div class="text-xs text-slate-300 leading-relaxed space-y-1">
                        <p>نعلم أن $f(\\alpha) = 0$ وأن $f$ تزايدية قطعاً على $\\mathbb{R}$:</p>
                        <ul class="list-disc list-inside space-y-0.5">
                          <li>لكل $x \\in ]-\\infty, \\alpha]$: لدينا $x \\le \\alpha \\implies f(x) \\le f(\\alpha) = 0$. إذن $f(x) \\le 0$.</li>
                          <li>لكل $x \\in [\\alpha, +\\infty[$: لدينا $x \\ge \\alpha \\implies f(x) \\ge f(\\alpha) = 0$. إذن $f(x) \\ge 0$.</li>
                        </ul>
                        <div class="mt-2 text-center">
                          <div class="inline-grid grid-cols-4 text-center font-mono text-xs border border-slate-700 rounded overflow-hidden">
                            <div class="bg-slate-800 text-slate-300 px-3 py-1">x</div>
                            <div class="bg-slate-900 text-slate-400 px-3 py-1">$-\\infty$</div>
                            <div class="bg-slate-900 text-amber-300 px-3 py-1">$\\alpha$</div>
                            <div class="bg-slate-900 text-slate-400 px-3 py-1">$+\\infty$</div>
                            <div class="bg-slate-800 text-slate-300 px-3 py-1">f(x)</div>
                            <div class="bg-slate-950 text-rose-400 font-bold px-3 py-1">$-$</div>
                            <div class="bg-slate-950 text-emerald-400 font-bold px-3 py-1">$0$</div>
                            <div class="bg-slate-950 text-cyan-400 font-bold px-3 py-1">$+$</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 7. Application 2: Non-Monotone Function & Variations Table -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold">7. تطبيق متقدم: قراءة جدول التغيرات</span>
                    <span class="text-xs text-slate-400">Image d'un intervalle par lecture du tableau de variations</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">تحديد صورة مجالات دالة غير رتيبة انطلاقاً من القيم القصوية والدنوية</h4>
                  <p class="text-sm text-slate-300 leading-relaxed mb-3">
                    إذا لم تكن الدالة $g$ رتيبة قطعاً على مجال $I$، <strong>لا يصح</strong> أخذ صور المحدات مباشرة! بل نقسم المجال إلى مجالات جزئية تكون فيها $g$ رتيبة، أو نستخرج القيمة الدنوية المطلقة $m$ والقيمة القصوية المطلقة $M$:
                  </p>

                  <div class="p-3 bg-slate-950/70 border border-slate-800 rounded-xl mb-3 text-xs text-slate-300">
                    <div class="font-bold text-amber-300 mb-1">مثال امتحاني:</div>
                    <p>دالة $g$ متصلة على $[-3, 4]$ وجدول تغيراتها يلخص كالتالي:</p>
                    <ul class="list-disc list-inside space-y-0.5 mt-1 text-slate-300 font-mono text-[11px]">
                      <li>تتزايد قطعاً من $g(-3) = -2$ إلى القيمة القصوية $g(0) = 5$.</li>
                      <li>تتناقص قطعاً من $g(0) = 5$ إلى القيمة الدنوية $g(2) = -1$.</li>
                      <li>تتزايد قطعاً من $g(2) = -1$ إلى $g(4) = 3$.</li>
                    </ul>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                      <div class="text-cyan-400 font-bold mb-1">حساب $g([-3, 4])$:</div>
                      <p class="text-slate-300 mb-1">أدنى قيمة يبلغها المنحنى هي $m = -2$ وأعلى قيمة هي $M = 5$.</p>
                      <div class="font-mono text-cyan-300 text-center bg-slate-900 p-1.5 rounded">
                        $$g([-3, 4]) = [-2, 5]$$
                      </div>
                    </div>
                    <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                      <div class="text-cyan-400 font-bold mb-1">حساب $g([0, 4])$:</div>
                      <p class="text-slate-300 mb-1">على $[0, 4]$، أدنى قيمة هي $g(2) = -1$ وأعلى قيمة هي $g(0) = 5$.</p>
                      <div class="font-mono text-cyan-300 text-center bg-slate-900 p-1.5 rounded">
                        $$g([0, 4]) = [-1, 5]$$
                      </div>
                    </div>
                    <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                      <div class="text-cyan-400 font-bold mb-1">حساب $g(]0, 2])$:</div>
                      <p class="text-slate-300 mb-1">الدالة تناقصية قطعاً على $]0, 2]$، إذن نقلب الترتيب والمحد عند $0$ مفتوح:</p>
                      <div class="font-mono text-cyan-300 text-center bg-slate-900 p-1.5 rounded">
                        $$g(]0, 2]) = [g(2), \\lim_{x \\to 0^+} g(x)[ = [-1, 5[$$
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 8. Interactive Auto-Evaluation Card -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold">8. تحدي الفهم الذاتي والتقويم الفوري</span>
                    <span class="text-xs text-slate-400">Auto-Évaluation & Défi Méthodologique</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">تمرين تطبيقي لاختبار الجاهزية</h4>
                  <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 mb-4">
                    <p class="text-xs text-slate-200 leading-relaxed font-semibold">
                      لتكن $h(x) = x^3 - 3x + 1$ معرفة على القطعة $I = [-1, 1]$.
                    </p>
                    <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 mt-2">
                      <li>احسب مشتقة الدالة $h'(x)$ وبين أن $h$ تناقصية قطعاً على $[-1, 1]$.</li>
                      <li>بين أن المعادلة $h(x) = 0$ تقبل حلاً وحيداً $\\beta$ على القطعة $[-1, 1]$.</li>
                      <li>حدد صورة المجال $[-1, 1]$ بالدالة $h$.</li>
                    </ol>
                  </div>

                  <!-- Collapsible Model Solution -->
                  <div class="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/40">
                    <button type="button" aria-expanded="false" onclick="window.EulerAcademy.toggleCollapsible('ax3-solution', this);" class="w-full text-right p-3.5 bg-slate-900/80 hover:bg-slate-800/80 text-xs font-bold text-cyan-400 flex items-center justify-between transition-colors">
                      <span class="flex items-center gap-2"><span>👁️</span> اضغط هنا لإظهار / إخفاء الحل النموذجي المفصل وسلم التنقيط</span>
                      <span class="text-slate-400 text-[11px] flex items-center gap-1.5"><span>انقر للمعاينة</span><span class="sol-chevron inline-block transition-transform">▼</span></span>
                    </button>
                    <div id="ax3-solution" class="hidden p-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                      <div>
                        <div class="font-bold text-emerald-400 mb-0.5">1. حساب المشتقة والرتابة:</div>
                        <p class="leading-relaxed">$h'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$. لكل $x \\in ]-1, 1[$ لدينا $x^2 < 1 \\implies x^2 - 1 < 0 \\implies h'(x) < 0$. إذن $h$ تناقصية قطعاً على $[-1, 1]$.</p>
                      </div>
                      <div>
                        <div class="font-bold text-emerald-400 mb-0.5">2. وجود ووحدانية الحل $\\beta$:</div>
                        <p class="leading-relaxed">$h$ متصلة وتناقصية قطعاً على $[-1, 1]$ (دالة حدودية). ولدينا $h(-1) = (-1)^3 - 3(-1) + 1 = 3 > 0$ و $h(1) = 1^3 - 3(1) + 1 = -1 < 0$. بما أن $h(-1) \\times h(1) = -3 < 0$، فحسب مبرهنة القيم الوسيطية يوجد حل وحيد $\\beta \\in ]-1, 1[$ بحيث $h(\\beta) = 0$.</p>
                      </div>
                      <div>
                        <div class="font-bold text-emerald-400 mb-0.5">3. صورة القطعة $[-1, 1]$ (انتبه للدالة التناقصية!):</div>
                        <p class="leading-relaxed font-mono text-cyan-300">$$h([-1, 1]) = [h(1), h(-1)] = [-1, 3]$$</p>
                      </div>
                    </div>
                  </div>
                </div>


                <!-- 9. Synthesis Exam Problem: Master Standard (2.00 pts) -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold">9. مسألة الامتحان الوطني التوليفية الكبرى</span>
                    <span class="text-xs text-slate-400">Problème de Synthèse • معيار د. الرياح (2.00 نقطة)</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">الدالة المساعدة $g(x)$، تأطير الجذر $\\alpha$ بالتفرع، وتقنية استنتاج صيغة $f(\\alpha)$</h4>
                  <p class="text-xs text-slate-300 leading-relaxed mb-4">
                    هذا النموذج التوليفي يجسد المسألة النموذجية الأكثر تكراراً في الامتحانات الوطنية بالمغرب لمسلك العلوم الفيزيائية: دراسة إشارة دالة مساعدة من الدرجة الثالثة عبر مبرهنة القيم الوسيطية، ثم ربطها بمشتقة الدالة الرئيسية $f'(x)$، وحساب القيمة القصوية/الدنوية $f(\\alpha)$ عبر التعويض الجبري.
                  </p>

                  <!-- Problem Statement Box -->
                  <div class="bg-slate-950/80 p-5 rounded-xl border border-cyan-500/30 mb-5 space-y-4">
                    <div>
                      <span class="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1.5">الجزء الأول (Partie 1): دراسة الدالة المساعدة $g$</span>
                      <p class="text-xs text-slate-300">
                        لتكن $g$ الدالة العددية المعرفة على المجال $I = [1, +\\infty[$ بما يلي: $g(x) = x^3 - 3x - 4$.
                      </p>
                      <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1 mt-2">
                        <li>احسب مشتقة الدالة $g'(x)$ لكل $x \\ge 1$، ثم بين أن $g$ تزايدية قطعاً على $[1, +\\infty[$. <span class="font-mono text-cyan-400 text-[11px]">(0.25 ن)</span></li>
                        <li>بين أن المعادلة $g(x) = 0$ تقبل حلاً وحيداً $\\alpha$ على $[1, +\\infty[$، وتحقق أن $2 < \\alpha < 3$. <span class="font-mono text-cyan-400 text-[11px]">(0.25 ن)</span></li>
                        <li>باستعمال خوارزمية التفرع الثنائي، أعطِ تأطيراً للعدد $\\alpha$ سعته $0.25$. <span class="font-mono text-cyan-400 text-[11px]">(0.50 ن)</span></li>
                        <li>استنتج إشارة $g(x)$ على المجال $[1, +\\infty[$ حسب قيم $x$. <span class="font-mono text-cyan-400 text-[11px]">(0.25 ن)</span></li>
                      </ol>
                    </div>

                    <div class="pt-3 border-t border-slate-800">
                      <span class="text-xs font-bold text-purple-400 uppercase tracking-wider block mb-1.5">الجزء الثاني (Partie 2): دراسة الدالة الرئيسية $f$ وتحديد $f(\\alpha)$</span>
                      <p class="text-xs text-slate-300">
                        نعتبر الدالة $f$ المعرفة على $]1, +\\infty[$ بما يلي: $f(x) = \\frac{x^3 + 2}{x^2 - 1}$.
                      </p>
                      <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1 mt-2">
                        <li>بين أن $f$ قابلة للاشتقاق على $]1, +\\infty[$ وأن: $f'(x) = \\frac{x \\cdot g(x)}{(x^2 - 1)^2}$ لكل $x > 1$. <span class="font-mono text-cyan-400 text-[11px]">(0.25 ن)</span></li>
                        <li>استنتج منحى تغيرات الدالة $f$ على $]1, +\\infty[$ وضع جدول تغيراتها. <span class="font-mono text-cyan-400 text-[11px]">(0.25 ن)</span></li>
                        <li><strong>سؤال التميز الوطني:</strong> بين أن $f(\\alpha) = \\frac{3(\\alpha + 2)}{\\alpha^2 - 1}$، واستنتج أن $f(\\alpha)$ هي القيمة الدنوية المطلقة لـ $f$ على $]1, +\\infty[$. <span class="font-mono text-cyan-400 text-[11px]">(0.25 ن)</span></li>
                      </ol>
                    </div>
                  </div>

                  <!-- Collapsible Full Model Solution with Marking Scheme -->
                  <div class="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/40">
                    <button type="button" aria-expanded="false" onclick="window.EulerAcademy.toggleCollapsible('ax3-synth-solution', this);" class="w-full text-right p-4 bg-slate-900/90 hover:bg-slate-800/90 text-xs font-bold text-cyan-400 flex items-center justify-between transition-colors">
                      <span class="flex items-center gap-2"><span>📝</span> اضغط هنا لإظهار / إخفاء عناصر الإجابة الرسمية والتحرير البرهاني الصارم (2.00 نقطة)</span>
                      <span class="text-slate-400 text-[11px] flex items-center gap-1.5"><span>معاينة عناصر الإجابة النموذجية</span><span class="sol-chevron inline-block transition-transform">▼</span></span>
                    </button>
                    
                    <div id="ax3-synth-solution" class="hidden p-5 border-t border-slate-800 space-y-5 text-xs text-slate-300">
                      <!-- Solution Partie 1 -->
                      <div class="space-y-3">
                        <div class="text-cyan-400 font-bold border-b border-slate-800 pb-1 text-sm">عناصر إجابة الجزء الأول (Partie 1):</div>
                        
                        <!-- 1.1 -->
                        <div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                          <div class="flex justify-between font-bold text-amber-300 mb-1">
                            <span>1. اشتقاق ورتابة $g$:</span>
                            <span class="font-mono text-cyan-400">0.25 ن</span>
                          </div>
                          <p class="leading-relaxed">
                            الدالة $g$ حدودية، إذن قابلة للاشتقاق على $\\mathbb{R}$ وبالخصوص على $[1, +\\infty[$. ولدينا لكل $x \\ge 1$:
                          </p>
                          <div class="text-center text-cyan-300 font-mono my-1">
                            $$g'(x) = (x^3 - 3x - 4)' = 3x^2 - 3 = 3(x^2 - 1) = 3(x - 1)(x + 1)$$
                          </div>
                          <p class="leading-relaxed">
                            لكل $x > 1$، لدينا $x^2 - 1 > 0$، ومنه $g'(x) > 0$. وبما أن $g'(1) = 0$، فإن الدالة $g$ تزايدية قطعاً على المجال $[1, +\\infty[$.
                          </p>
                        </div>

                        <!-- 1.2 -->
                        <div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                          <div class="flex justify-between font-bold text-amber-300 mb-1">
                            <span>2. وجود ووحدانية الحل $\\alpha$:</span>
                            <span class="font-mono text-cyan-400">0.25 ن</span>
                          </div>
                          <ul class="list-disc list-inside space-y-1">
                            <li>الدالة $g$ متصلة وتزايدية قطعاً على $[1, +\\infty[$.</li>
                            <li>$g([1, +\\infty[) = [g(1), \\lim_{x \\to +\\infty} g(x)[ = [-6, +\\infty[$، وبما أن $0 \\in [-6, +\\infty[$، فإن المعادلة $g(x) = 0$ تقبل حلاً وحيداً $\\alpha \\in [1, +\\infty[$.</li>
                            <li>لدينا: $g(2) = 2^3 - 3(2) - 4 = 8 - 6 - 4 = -2 < 0$.</li>
                            <li>لدينا: $g(3) = 3^3 - 3(3) - 4 = 27 - 9 - 4 = 14 > 0$.</li>
                          </ul>
                          <p class="mt-1 text-emerald-300 font-semibold">بما أن $g(2) \\times g(3) = -28 < 0$ و $g$ متصلة على $[2, 3]$، فحسب مبرهنة القيم الوسيطية: $2 < \\alpha < 3$.</p>
                        </div>

                        <!-- 1.3 -->
                        <div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                          <div class="flex justify-between font-bold text-amber-300 mb-1">
                            <span>3. خوارزمية التفرع الثنائي (سعة 0.25):</span>
                            <span class="font-mono text-cyan-400">0.50 ن</span>
                          </div>
                          <p>• لدينا $\\alpha \\in ]2, 3[$ بسعة أولية $3 - 2 = 1$.</p>
                          <p>• <strong>المرحلة 1:</strong> مركز القطعة $[2, 3]$ هو $m_1 = \\frac{2+3}{2} = 2.5$.</p>
                          <div class="text-center font-mono text-cyan-300 my-1">$$g(2.5) = (2.5)^3 - 3(2.5) - 4 = 15.625 - 7.5 - 4 = 4.125 > 0$$</div>
                          <p>بما أن $g(2) < 0$ و $g(2.5) > 0$، فإن $\\alpha \\in ]2, 2.5[$ بسعة $0.5$.</p>
                          <p>• <strong>المرحلة 2:</strong> مركز القطعة $[2, 2.5]$ هو $m_2 = \\frac{2+2.5}{2} = 2.25$.</p>
                          <div class="text-center font-mono text-cyan-300 my-1">$$g(2.25) = (2.25)^3 - 3(2.25) - 4 = 11.390625 - 6.75 - 4 = 0.640625 > 0$$</div>
                          <p>بما أن $g(2) < 0$ و $g(2.25) > 0$، فإن:</p>
                          <div class="p-2 bg-emerald-950/40 border border-emerald-600/40 rounded text-center text-emerald-300 font-mono font-bold my-1">
                            $$2 < \\alpha < 2.25$$ <span class="text-xs font-sans">(تأطير بسعة $2.25 - 2 = 0.25$)</span>
                          </div>
                        </div>

                        <!-- 1.4 -->
                        <div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                          <div class="flex justify-between font-bold text-amber-300 mb-1">
                            <span>4. إشارة $g(x)$ على $[1, +\\infty[$:</span>
                            <span class="font-mono text-cyan-400">0.25 ن</span>
                          </div>
                          <p>نعلم أن $g(\\alpha) = 0$ و $g$ تزايدية قطعاً على $[1, +\\infty[$:</p>
                          <ul class="list-disc list-inside space-y-0.5">
                            <li>لكل $x \\in [1, \\alpha]$: $x \\le \\alpha \\implies g(x) \\le g(\\alpha) = 0 \\implies g(x) \\le 0$.</li>
                            <li>لكل $x \\in [\\alpha, +\\infty[$: $x \\ge \\alpha \\implies g(x) \\ge g(\\alpha) = 0 \\implies g(x) \\ge 0$.</li>
                          </ul>
                          <div class="mt-2 text-center">
                            <div class="inline-grid grid-cols-4 text-center font-mono text-xs border border-slate-700 rounded overflow-hidden">
                              <div class="bg-slate-800 text-slate-300 px-3 py-1">x</div>
                              <div class="bg-slate-900 text-slate-400 px-3 py-1">1</div>
                              <div class="bg-slate-900 text-amber-300 px-3 py-1">$\\alpha$</div>
                              <div class="bg-slate-900 text-slate-400 px-3 py-1">$+\\infty$</div>
                              <div class="bg-slate-800 text-slate-300 px-3 py-1">g(x)</div>
                              <div class="bg-slate-950 text-rose-400 font-bold px-3 py-1">$-$</div>
                              <div class="bg-slate-950 text-emerald-400 font-bold px-3 py-1">$0$</div>
                              <div class="bg-slate-950 text-cyan-400 font-bold px-3 py-1">$+$</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Solution Partie 2 -->
                      <div class="space-y-3 pt-3 border-t border-slate-800">
                        <div class="text-purple-400 font-bold border-b border-slate-800 pb-1 text-sm">عناصر إجابة الجزء الثاني (Partie 2):</div>

                        <!-- 2.1 -->
                        <div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                          <div class="flex justify-between font-bold text-amber-300 mb-1">
                            <span>1. اشتقاق $f$ وحساب $f'(x)$:</span>
                            <span class="font-mono text-cyan-400">0.25 ن</span>
                          </div>
                          <p class="leading-relaxed">
                            الدالة $f$ جذرية معرفة على $\\mathbb{R} \\setminus \\{-1, 1\\}$، إذن قابلة للاشتقاق على $]1, +\\infty[$. ولدينا لكل $x > 1$:
                          </p>
                          <div class="text-center font-mono text-cyan-300 my-1">
                            $$f'(x) = \\frac{(x^3+2)'(x^2-1) - (x^3+2)(x^2-1)'}{(x^2-1)^2} = \\frac{3x^2(x^2-1) - (x^3+2)(2x)}{(x^2-1)^2}$$
                          </div>
                          <div class="text-center font-mono text-cyan-300 my-1">
                            $$f'(x) = \\frac{3x^4 - 3x^2 - 2x^4 - 4x}{(x^2-1)^2} = \\frac{x^4 - 3x^2 - 4x}{(x^2-1)^2} = \\frac{x(x^3 - 3x - 4)}{(x^2-1)^2} = \\frac{x \\cdot g(x)}{(x^2-1)^2}$$
                          </div>
                        </div>

                        <!-- 2.2 -->
                        <div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                          <div class="flex justify-between font-bold text-amber-300 mb-1">
                            <span>2. منحى التغيرات وجدول تغيرات $f$:</span>
                            <span class="font-mono text-cyan-400">0.25 ن</span>
                          </div>
                          <p class="leading-relaxed">
                            بما أن $x > 1$، فإن $x > 0$ والمقام $(x^2-1)^2 > 0$ قطعا. إذن إشارة $f'(x)$ هي <strong>نفس إشارة $g(x)$ تماماً</strong> على $]1, +\\infty[$:
                          </p>
                          <ul class="list-disc list-inside space-y-0.5">
                            <li>على المجال $]1, \\alpha]$: لدينا $f'(x) \\le 0$، إذن $f$ تناقصية قطعاً على $]1, \\alpha]$.</li>
                            <li>على المجال $[\\alpha, +\\infty[$: لدينا $f'(x) \\ge 0$، إذن $f$ تزايدية قطعاً على $[\\alpha, +\\infty[$.</li>
                          </ul>
                        </div>

                        <!-- 2.3 -->
                        <div class="bg-slate-900/60 p-3 rounded-lg border border-purple-800/50">
                          <div class="flex justify-between font-bold text-amber-300 mb-1">
                            <span>3. صيغة التميز الوطني لـ $f(\\alpha)$ والقيمة الدنوية:</span>
                            <span class="font-mono text-cyan-400">0.25 ن</span>
                          </div>
                          <p class="leading-relaxed">
                            نعلم أن $\\alpha$ جذر للمعادلة $g(x) = 0$، أي أن: $g(\\alpha) = 0 \\iff \\alpha^3 - 3\\alpha - 4 = 0 \\iff \\mathbf{\\alpha^3 = 3\\alpha + 4}$.
                          </p>
                          <p class="leading-relaxed mt-1">
                            نعوض $\\alpha^3$ في عبارة $f(\\alpha)$:
                          </p>
                          <div class="text-center font-mono text-purple-300 my-1 bg-slate-950 p-2 rounded border border-slate-800">
                            $$f(\\alpha) = \\frac{\\alpha^3 + 2}{\\alpha^2 - 1} = \\frac{(3\\alpha + 4) + 2}{\\alpha^2 - 1} = \\frac{3\\alpha + 6}{\\alpha^2 - 1} = \\frac{3(\\alpha + 2)}{\\alpha^2 - 1}$$
                          </div>
                          <p class="leading-relaxed mt-1">
                            بما أن $f$ تناقصية على $]1, \\alpha]$ وتزايدية على $[\\alpha, +\\infty[$، فإن $f(\\alpha)$ هي <strong>القيمة الدنوية المطلقة (Minimum absolu)</strong> للدالة $f$ على $]1, +\\infty[$، وبالتالي:
                          </p>
                          <div class="text-center font-mono text-emerald-300 my-1">
                            $$\\forall x \\in ]1, +\\infty[, \\quad f(x) \\ge f(\\alpha) = \\frac{3(\\alpha + 2)}{\\alpha^2 - 1}$$
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
`);
