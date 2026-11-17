window.EulerAcademy.registerAxis('math-01', 'm01-ax4', `

              <div class="space-y-6">
                <!-- 1. Theoretical Foundation: Bijection Theorem -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold">1. الأساس النظري ومبرهنة التقابل</span>
                    <span class="text-xs text-slate-400">Théorème de la Bijection & Fonction Réciproque</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">مبرهنة الدالة العكسية لدالة متصلة ورتيبة قطعاً</h4>
                  <p class="text-sm text-slate-300 leading-relaxed mb-4">
                    تعتبر الدالة العكسية $f^{-1}$ أداة رياضية جوهرية لفك المعادلات غير الخطية وتوسيع فضاء الدوال (كالجذور النونية واللوغاريتمات):
                  </p>

                  <div class="p-4 bg-slate-950/80 rounded-xl border border-cyan-500/30 mb-4">
                    <div class="text-cyan-400 font-bold text-sm mb-2 flex items-center gap-2">
                      <span>📌</span> نص المبرهنة الرسمية (Théorème Fondamental):
                    </div>
                    <p class="text-xs text-slate-300 leading-relaxed">
                      إذا كانت $f$ دالة عددية تحقق الشرطين الصارمين معاً:
                    </p>
                    <ul class="text-xs text-slate-200 space-y-1.5 my-2 list-disc list-inside">
                      <li>$f$ <strong>متصلة</strong> على المجال $I$.</li>
                      <li>$f$ <strong>رتيبة قطعاً</strong> على المجال $I$ (تزايدية قطعاً أو تناقصية قطعاً).</li>
                    </ul>
                    <p class="text-xs text-emerald-300 font-semibold leading-relaxed">
                      فإن $f$ تقابل من المجال $I$ نحو المجال $J = f(I)$، أي أنها تقبل دالة عكسية نرمز لها بـ $f^{-1}$ معرفة من $J$ نحو $I$.
                    </p>
                  </div>

                  <!-- Equivalence and Identity Formulations -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                      <div class="text-amber-400 font-bold text-xs mb-1">دستور التكافؤ الحاسم (Équivalence Fondamentale)</div>
                      <p class="text-xs text-slate-300 mb-2">لكل $x \\in I$ ولكل $y \\in J$:</p>
                      <div class="text-center font-mono text-cyan-300 text-sm p-2 bg-slate-900 rounded border border-slate-800">
                        $$\\begin{cases} f(x) = y \\\\ x \\in I \\end{cases} \\iff \\begin{cases} f^{-1}(y) = x \\\\ y \\in J \\end{cases}$$
                      </div>
                    </div>

                    <div class="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                      <div class="text-purple-400 font-bold text-xs mb-1">خاصية التركيب المحايد (Identités de Composition)</div>
                      <p class="text-xs text-slate-300 mb-2">تركيب الدالة مع عكسيتها يُلغي أثرهما تماماً:</p>
                      <div class="text-center font-mono text-purple-300 text-xs p-2 bg-slate-900 rounded border border-slate-800 space-y-1">
                        <div>$$\\forall x \\in I, \\quad (f^{-1} \\circ f)(x) = f^{-1}(f(x)) = x$$</div>
                        <div>$$\\forall y \\in J, \\quad (f \\circ f^{-1})(y) = f(f^{-1}(y)) = y$$</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 2. Core Properties of f^{-1} -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">2. خصائص الدالة العكسية</span>
                    <span class="text-xs text-slate-400">Propriétés de la Fonction Réciproque</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">الاتصال، الرتابة، وجدول التغيرات العكسي</h4>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    <div class="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                      <div class="text-emerald-400 font-bold text-xs mb-1">1. اتصال الدالة العكسية</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        الدالة $f^{-1}$ <strong>متصلة حتماً</strong> على المجال $J = f(I)$ دون الحاجة لأي شروط إضافية.
                      </p>
                    </div>

                    <div class="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                      <div class="text-cyan-400 font-bold text-xs mb-1">2. حفظ منحى التغيرات</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        للدالة العكسية $f^{-1}$ <strong>نفس منحى تغيرات الدالة $f$ تماماً</strong> على المجال $J$:
                      </p>
                      <ul class="text-[11px] text-slate-300 space-y-0.5 mt-1 list-disc list-inside">
                        <li>$f$ تزايدية قطعاً على $I \\implies f^{-1}$ تزايدية قطعاً على $J$.</li>
                        <li>$f$ تناقصية قطعاً على $I \\implies f^{-1}$ تناقصية قطعاً على $J$.</li>
                      </ul>
                    </div>

                    <div class="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                      <div class="text-amber-400 font-bold text-xs mb-1">3. مجال التعريف والانطلاق</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        مجموعة انطلاق $f^{-1}$ هي مجموعة وصول $f$ ($J = f(I)$)، ومجموعة وصول $f^{-1}$ هي مجموعة انطلاق $f$ ($I$).
                      </p>
                    </div>
                  </div>

                  <!-- Inversion of Variations Table -->
                  <div class="p-3.5 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-slate-300">
                    <div class="font-bold text-cyan-300 mb-1 flex items-center gap-2">
                      <span>🔄</span> منهجية إنشاء جدول تغيرات $f^{-1}$ انطلاقاً من جدول تغيرات $f$:
                    </div>
                    <p class="leading-relaxed">
                      لإنشاء جدول تغيرات الدالة $f^{-1}$، نحافظ على نفس اتجاه الأسهم (تزايدية تبقى تزايدية وتناقصية تبقى تناقصية)، ونعكس المحدات: السطر الأول لـ $x$ يأخذ عناصر المجال $J = f(I)$، والسطر الثاني لـ $f^{-1}(x)$ يأخذ عناصر المجال $I$.
                    </p>
                  </div>
                </div>

                <!-- 3. Geometry & Axial Symmetry y = x -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold">3. الهندسة والتمثيل المبياني</span>
                    <span class="text-xs text-slate-400">Symétrie Axiale par rapport à y = x</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">التماثل المحوري بالنسبة للمنصف الأول $(\\Delta): y = x$</h4>
                  <p class="text-sm text-slate-300 leading-relaxed mb-4">
                    في معلم متعامد ممنظم $(O, \\vec{i}, \\vec{j})$، المنحنى الممثل للدالة العكسية $(C_{f^{-1}})$ هو مماثل المنحنى $(C_f)$ بالنسبة للمنصف الأول ذي المعادلة $y = x$:
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="text-cyan-400 font-bold text-xs mb-2">تماثل النقط والإحداثيات</div>
                      <div class="font-mono text-cyan-300 text-xs p-2 bg-slate-900 rounded border border-slate-800 text-center">
                        $$M(a, b) \\in (C_f) \\iff M'(b, a) \\in (C_{f^{-1}})$$
                      </div>
                      <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                        أفصول نقطة من $(C_f)$ يصبح أرتوب نقطة مماثلة في $(C_{f^{-1}})$، وأرتوبها يصبح أفصولاً لها.
                      </p>
                    </div>

                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="text-purple-400 font-bold text-xs mb-2">نقاط التقاطع مع المنصف الأول</div>
                      <div class="font-mono text-purple-300 text-xs p-2 bg-slate-900 rounded border border-slate-800 text-center">
                        $$(C_f) \\cap (\\Delta) = (C_{f^{-1}}) \\cap (\\Delta)$$
                      </div>
                      <p class="text-xs text-slate-300 mt-2 leading-relaxed">
                        إذا تقاطع منحنى $f$ مع المستقيم $y = x$ في نقطة $(\\alpha, \\alpha)$، فإن منحنى $f^{-1}$ يمر حتماً من نفس النقطة: $f(\\alpha) = \\alpha \\iff f^{-1}(\\alpha) = \\alpha$.
                      </p>
                    </div>
                  </div>

                  <!-- Geometric Correspondences Table -->
                  <div class="bg-slate-950/80 rounded-xl border border-slate-800 p-4 overflow-x-auto">
                    <div class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span>📐</span> جدول التحويلات الهندسية الشاملة بين $(C_f)$ و $(C_{f^{-1}})$
                    </div>
                    <table class="w-full text-xs text-right text-slate-300 border-collapse">
                      <thead>
                        <tr class="border-b border-slate-700 bg-slate-900/60 text-slate-200">
                          <th class="p-2.5 font-bold">العنصر الهندسي في $(C_f)$</th>
                          <th class="p-2.5 font-bold text-cyan-400">العنصر الهندسي المماثل في $(C_{f^{-1}})$</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-800/80">
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2">نقطة خاصة $A(x_0, y_0)$</td>
                          <td class="p-2 text-cyan-300 font-mono">$A'(y_0, x_0)$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2">مقارب أفقي $y = L$ بجوار $+\\infty$</td>
                          <td class="p-2 text-cyan-300 font-mono">مقارب عمودي $x = L$ بجوار $+\\infty$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2">مقارب عمودي $x = x_0$</td>
                          <td class="p-2 text-cyan-300 font-mono">مقارب أفقي $y = x_0$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2">مماس أفقي في النقطة $(x_0, y_0)$</td>
                          <td class="p-2 text-cyan-300 font-mono">مماس عمودي في النقطة $(y_0, x_0)$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2">نصف مماس أفقي موجه نحو اليمين</td>
                          <td class="p-2 text-cyan-300 font-mono">نصف مماس عمودي موجه نحو الأعلى</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2">فرع شلجمي اتجاهه محور الأفاصيل $(Ox)$</td>
                          <td class="p-2 text-cyan-300 font-mono">فرع شلجمي اتجاهه محور الأراتيب $(Oy)$</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- 4. Explicit Algebraic Algorithm for f^{-1}(x) -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold">4. الخوارزمية الجبرية الصارمة</span>
                    <span class="text-xs text-slate-400">Algorithme de Détermination de f⁻¹(x)</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">منهجية تحديد الصيغة الصريحة لـ $f^{-1}(x)$ لكل $x \\in J$</h4>
                  <p class="text-sm text-slate-300 leading-relaxed mb-4">
                    لتحديد صيغة $f^{-1}(x)$ بدون أي خطأ في الإشارة أو المجالات، نتبع بدقة الخطوات المنهجية الأربع المعتمدة رسمياً في تصحيح الامتحان الوطني:
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4 text-xs">
                    <div class="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                      <div class="text-amber-400 font-bold mb-1">الخطوة 1: صياغة الانطلاق</div>
                      <p class="text-slate-300 leading-relaxed">
                        نكتب الجملة الرسمية:<br>
                        "ليكن $x \\in J$، نبحث عن $y \\in I$ بحيث:
                      </p>
                      <div class="font-mono text-cyan-300 text-center my-1">$$f(y) = x$$</div>
                    </div>

                    <div class="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                      <div class="text-amber-400 font-bold mb-1">الخطوة 2: التحويل الجبري</div>
                      <p class="text-slate-300 leading-relaxed">
                        نعوض $y$ في عبارة الدالة ونجعل المعادلة بمجهول وحيد $y$، باستعمال الشكل النموذجي أو تعميل مناسب.
                      </p>
                    </div>

                    <div class="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                      <div class="text-amber-400 font-bold mb-1">الخطوة 3: حسم الإشارة</div>
                      <p class="text-slate-300 leading-relaxed">
                        عند ظهور $\\pm\\sqrt{\\dots}$، نختار الإشارة المناسبة حصرياً بالرجوع لشرط انتمائه لمجال الانطلاق: $y \\in I$.
                      </p>
                    </div>

                    <div class="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                      <div class="text-amber-400 font-bold mb-1">الخطوة 4: الاستنتاج النهائي</div>
                      <p class="text-slate-300 leading-relaxed">
                        نكتب الخلاصة المصرح بها:<br>
                        "إذن لكل $x \\in J$:
                      </p>
                      <div class="font-mono text-emerald-400 text-center my-1">$$f^{-1}(x) = y(x)$$</div>
                    </div>
                  </div>
                </div>

                <!-- 5. Classic National Exam Traps -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-bold">5. فخاخ كلاسيكية في الامتحان الوطني</span>
                    <span class="text-xs text-slate-400">Pièges & Vigilance Examen</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-3">أخطاء كارثية يقع فيها التلاميذ وكيفية تجنبها بيقين مطلق</h4>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="p-3.5 bg-rose-950/20 border border-rose-900/40 rounded-xl">
                      <div class="text-rose-400 font-bold text-xs mb-1">❌ الفخ 1: فخ الإشارة واختيار الجذر المناسب في المعادلة التربيعية</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        عند الوصول إلى $(y - 2)^2 = x + 1 \\iff |y - 2| = \\sqrt{x + 1}$، يكتب التلميذ المتسرع دائماً $y = 2 + \\sqrt{x+1}$ حتى لو كان المجال $I = ]-\\infty, 2]$! إذا كان $y \\le 2$ فإن $y - 2 \\le 0$ وبالتالي $y = 2 - \\sqrt{x+1}$ حتماً.
                      </p>
                    </div>

                    <div class="p-3.5 bg-rose-950/20 border border-rose-900/40 rounded-xl">
                      <div class="text-rose-400 font-bold text-xs mb-1">❌ الفخ 2: الخلط القاتل بين الدالة العكسية والمقلوب</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        الخلط بين $f^{-1}(x)$ و $\\frac{1}{f(x)}$ يؤدي إلى صفر فوري في السؤال. $f^{-1}$ هي الدالة العكسية للتركيب ($f^{-1}(f(x)) = x$) بينما $\\frac{1}{f}$ هو المقلوب الجبري للجداء.
                      </p>
                    </div>

                    <div class="p-3.5 bg-rose-950/20 border border-rose-900/40 rounded-xl">
                      <div class="text-rose-400 font-bold text-xs mb-1">❌ الفخ 3: نسيان التصريح بمجال التعريف $J = f(I)$</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        كتابة صيغة $f^{-1}(x)$ بدون ذكر "لكل $x \\in J$" مع تحديد $J$ بدقة يخصم نصف نقطة السؤال في الامتحان الوطني. الدالة العكسية لا توجد بدون مجال تعريفها $J$.
                      </p>
                    </div>

                    <div class="p-3.5 bg-rose-950/20 border border-rose-900/40 rounded-xl">
                      <div class="text-rose-400 font-bold text-xs mb-1">❌ الفخ 4: نسيان شرط المعلم المتعامد الممنظم للتماثل</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        التماثل بالنسبة للمنصف الأول $y = x$ يكون تماثلاً محورياً متعامداً حصرياً إذا كان المعلم متعامداً وممنظماً (أي وحدة التدريج على الأفاصيل تساوي تماماً وحدة التدريج على الأراتيب).
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 6. Model Application 1: Radical Function & Canonical Form -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">6. تمرين نموذجي رسمي رقم 1</span>
                    <span class="text-xs text-slate-400">1.50 نقطة • معيار الامتحان الوطني</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">إثبات التقابل وتحديد الصيغة الصريحة لدالة لاجذرية بشكليها</h4>
                  <p class="text-xs text-slate-300 mb-4">
                    نعتبر الدالة $f$ المعرفة على المجال $I = [1, +\\infty[$ بما يلي: $f(x) = x - 2\\sqrt{x} + 2$.
                  </p>

                  <div class="space-y-4">
                    <!-- Q1 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-amber-400 font-bold text-xs">السؤال 1: أثبت أن $f$ تقبل دالة عكسية $f^{-1}$ معرفة على مجال $J$ يتم تحديده.</span>
                        <span class="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">0.50 ن</span>
                      </div>
                      <div class="text-xs text-slate-300 leading-relaxed space-y-1">
                        <p class="text-emerald-400 font-semibold mb-1">صياغة التحرير النموذجية:</p>
                        <p>1. <strong>الاتصال:</strong> الدالة $x \\mapsto x + 2$ متصلة على $[1, +\\infty[$، والدالة $x \\mapsto \\sqrt{x}$ متصلة على $[1, +\\infty[$. إذن $f$ متصلة على $I = [1, +\\infty[$ كمجموع دالتين متصلتين.</p>
                        <p>2. <strong>الرتابة:</strong> الدالة $f$ قابلة للاشتقاق على $]1, +\\infty[$ ولدينا لكل $x > 1$:</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$f'(x) = 1 - 2 \\left(\\frac{1}{2\\sqrt{x}}\\right) = 1 - \\frac{1}{\\sqrt{x}} = \\frac{\\sqrt{x} - 1}{\\sqrt{x}}$$
                        </div>
                        <p>بما أن $x > 1 \\implies \\sqrt{x} > 1 \\implies \\sqrt{x} - 1 > 0$، فإن $f'(x) > 0$ قطعا على $]1, +\\infty[$. إذن $f$ تزايدية قطعاً على $[1, +\\infty[$.</p>
                        <p>3. <strong>تحديد المجال $J = f(I)$:</strong> بما أن $f$ متصلة وتزايدية قطعاً على $[1, +\\infty[$:</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$J = f([1, +\\infty[) = \\left[f(1), \\lim_{x \\to +\\infty} f(x)\\right[ = [1, +\\infty[$$
                        </div>
                        <p class="text-emerald-300 font-semibold">بما أن $f$ متصلة وتزايدية قطعاً على $I$، فإنها تقبل دالة عكسية $f^{-1}$ معرفة من $J = [1, +\\infty[$ نحو $I = [1, +\\infty[$.</p>
                      </div>
                    </div>

                    <!-- Q2 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-amber-400 font-bold text-xs">السؤال 2: حدد الصيغة الصريحة لـ $f^{-1}(x)$ لكل $x \\in [1, +\\infty[$.</span>
                        <span class="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">0.75 ن</span>
                      </div>
                      <div class="text-xs text-slate-300 leading-relaxed space-y-1">
                        <p>ليكن $x \\in [1, +\\infty[$، نبحث عن $y \\in [1, +\\infty[$ بحيث $f(y) = x$:</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$y - 2\\sqrt{y} + 2 = x \\iff (\\sqrt{y})^2 - 2\\sqrt{y} + 1 + 1 = x \\iff (\\sqrt{y} - 1)^2 + 1 = x$$
                        </div>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$(\\sqrt{y} - 1)^2 = x - 1$$
                        </div>
                        <p>بما أن $x \\ge 1 \\implies x - 1 \\ge 0$، وبإدخال الجذر المربع:</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$|\\sqrt{y} - 1| = \\sqrt{x - 1}$$
                        </div>
                        <p>بما أن $y \\in [1, +\\infty[ \\implies y \\ge 1 \\implies \\sqrt{y} \\ge 1 \\implies \\sqrt{y} - 1 \\ge 0$. إذن:</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$\\sqrt{y} - 1 = \\sqrt{x - 1} \\iff \\sqrt{y} = 1 + \\sqrt{x - 1}$$
                        </div>
                        <div class="p-2 bg-emerald-950/40 border border-emerald-600/40 rounded text-center text-emerald-300 font-mono font-bold my-1">
                          $$y = \\left(1 + \\sqrt{x - 1}\\right)^2$$
                        </div>
                        <p class="text-emerald-300 font-semibold">خلاصة: لكل $x \\in [1, +\\infty[$ لدينا: $f^{-1}(x) = (1 + \\sqrt{x - 1})^2$.</p>
                      </div>
                    </div>

                    <!-- Q3 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-amber-400 font-bold text-xs">السؤال 3: تأويل مبياني: قارن نصفي مماسي $(C_f)$ و $(C_{f^{-1}})$ في النقطة $A(1, 1)$.</span>
                        <span class="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">0.25 ن</span>
                      </div>
                      <div class="text-xs text-slate-300 leading-relaxed">
                        <p>لدينا $\\lim_{x \\to 1^+} \\frac{f(x) - f(1)}{x - 1} = f'_d(1) = 0$. إذن المنحنى $(C_f)$ يقبل نصف مماس <strong>أفقي</strong> موجه نحو اليمين في النقطة $A(1, 1)$.</p>
                        <p class="text-purple-300 font-semibold mt-1">بالتماثل المحوري بالنسبة للمنصف الأول $y=x$، فإن المنحنى $(C_{f^{-1}})$ يقبل نصف مماس <strong>عمودي</strong> موجه نحو الأعلى في النقطة $A'(1, 1)$.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 7. Model Application 2: Negative Interval & Minus Sign Choice -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-bold">7. تمرين نموذجي رسمي رقم 2</span>
                    <span class="text-xs text-slate-400">فخ إشارة السالب • 1.50 نقطة</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">دالة تناقصية على مجال سالب واختيار إشارة السالب في الجذر</h4>
                  <p class="text-xs text-slate-300 mb-3">
                    لتكن $g$ الدالة المعرفة على المجال $I = ]-\\infty, 2]$ بما يلي: $g(x) = x^2 - 4x + 3$.
                  </p>

                  <div class="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-3 text-xs text-slate-300">
                    <div>
                      <div class="font-bold text-amber-400 mb-1">1. إثبات أن $g$ تقابل وتحديد $J$:</div>
                      <p>• $g$ دالة حدودية، إذن متصلة على $]-\\infty, 2]$.</p>
                      <p>• لكل $x < 2$ لدينا $g'(x) = 2x - 4 = 2(x - 2) < 0$. إذن $g$ تناقصية قطعاً على $]-\\infty, 2]$.</p>
                      <p>• بما أن $g$ تناقصية قطعاً، نقلب المحدات لحساب صورة المجال $J$:</p>
                      <div class="text-center font-mono text-cyan-300 my-1">
                        $$J = g(]-\\infty, 2]) = \\left[g(2), \\lim_{x \\to -\\infty} g(x)\\right[ = [-1, +\\infty[$$
                      </div>
                    </div>

                    <div>
                      <div class="font-bold text-amber-400 mb-1">2. حل المعادلة $g(y) = x$ وحسم الإشارة:</div>
                      <p>ليكن $x \\in [-1, +\\infty[$، نبحث عن $y \\in ]-\\infty, 2]$ بحيث $g(y) = x$:</p>
                      <div class="text-center font-mono text-cyan-300 my-1">
                        $$y^2 - 4y + 3 = x \\iff (y - 2)^2 - 1 = x \\iff (y - 2)^2 = x + 1$$
                      </div>
                      <p>بما أن $x \\ge -1 \\implies x + 1 \\ge 0$، فإن:</p>
                      <div class="text-center font-mono text-rose-300 my-1">
                        $$|y - 2| = \\sqrt{x + 1}$$
                      </div>
                      <p class="text-rose-400 font-bold">انتبه للفخ القاتل:</p>
                      <p>بما أن $y \\in ]-\\infty, 2] \\implies y \\le 2 \\implies \\mathbf{y - 2 \\le 0}$. إذن: $|y - 2| = -(y - 2) = 2 - y$.</p>
                      <div class="p-2 bg-emerald-950/40 border border-emerald-600/40 rounded text-center text-emerald-300 font-mono font-bold my-1">
                        $$2 - y = \\sqrt{x + 1} \\iff y = 2 - \\sqrt{x + 1}$$
                      </div>
                      <p class="text-emerald-300 font-semibold">خلاصة: لكل $x \\in [-1, +\\infty[$ لدينا: $g^{-1}(x) = 2 - \\sqrt{x + 1}$.</p>
                    </div>
                  </div>
                </div>

                <!-- 8. Interactive Auto-Evaluation Card -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold">8. تحدي الفهم الذاتي والتقويم الفوري</span>
                    <span class="text-xs text-slate-400">Auto-Évaluation • 1.50 نقطة</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">تمرين تطبيقي لاختبار الجاهزية في حساب الصيغة الصريحة</h4>
                  <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 mb-4">
                    <p class="text-xs text-slate-200 leading-relaxed font-semibold">
                      لتكن $k(x) = \\sqrt{x^2 - 2x}$ دالة معرفة على المجال $I = [2, +\\infty[$.
                    </p>
                    <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 mt-2">
                      <li>بين أن $k$ تقبل دالة عكسية $k^{-1}$ معرفة على مجال $J$ يتم تحديده بدقة.</li>
                      <li>حدد الصيغة الصريحة لـ $k^{-1}(x)$ لكل $x \\in J$.</li>
                      <li>حدد نقاط تقاطع المنحنى $(C_k)$ مع المنصف الأول $y = x$.</li>
                    </ol>
                  </div>

                  <!-- Collapsible Model Solution -->
                  <div class="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/40">
                    <button onclick="const el = document.getElementById('ax4-solution'); el.classList.toggle('hidden');" class="w-full text-right p-3.5 bg-slate-900/80 hover:bg-slate-800/80 text-xs font-bold text-cyan-400 flex items-center justify-between transition-colors">
                      <span class="flex items-center gap-2"><span>👁️</span> اضغط هنا لإظهار / إخفاء الحل النموذجي المفصل وسلالم التنقيط</span>
                      <span class="text-slate-400 text-[11px]">انقر للمعاينة</span>
                    </button>
                    <div id="ax4-solution" class="hidden p-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                      <div>
                        <div class="font-bold text-emerald-400 mb-0.5">1. إثبات التقابل وتحديد $J$:</div>
                        <p class="leading-relaxed">الدالة $u(x) = x^2 - 2x$ متصلة وموجبة على $[2, +\\infty[$، إذن $k = \\sqrt{u}$ متصلة على $[2, +\\infty[$. ومشتقتها $k'(x) = \\frac{2x - 2}{2\\sqrt{x^2-2x}} = \\frac{x-1}{\\sqrt{x^2-2x}} > 0$ قطعا لكل $x > 2$. إذن $k$ تزايدية قطعاً على $[2, +\\infty[$. ومنه $J = k([2, +\\infty[) = [k(2), \\lim_{x \\to +\\infty} k(x)[ = [0, +\\infty[$. إذن $k$ تقبل دالة عكسية $k^{-1}$ معرفة على $[0, +\\infty[$.</p>
                      </div>
                      <div>
                        <div class="font-bold text-emerald-400 mb-0.5">2. تحديد صيغة $k^{-1}(x)$:</div>
                        <p class="leading-relaxed">ليكن $x \\in [0, +\\infty[$، نبحث عن $y \\in [2, +\\infty[$ بحيث $k(y) = x$:</p>
                        <p class="font-mono text-cyan-300">$$\\sqrt{y^2 - 2y} = x \\iff y^2 - 2y = x^2 \\iff (y-1)^2 - 1 = x^2 \\iff (y-1)^2 = x^2 + 1$$</p>
                        <p class="leading-relaxed">بما أن $y \\ge 2 \\implies y - 1 \\ge 1 > 0$، فإن $y - 1 = \\sqrt{x^2 + 1} \\iff y = 1 + \\sqrt{x^2 + 1}$. إذن لكل $x \\in [0, +\\infty[$: $k^{-1}(x) = 1 + \\sqrt{x^2 + 1}$.</p>
                      </div>
                      <div>
                        <div class="font-bold text-emerald-400 mb-0.5">3. تقاطع $(C_k)$ مع المنصف الأول $y=x$:</div>
                        <p class="leading-relaxed">نحل المعادلة $k(x) = x$ على $[2, +\\infty[$: $\\sqrt{x^2 - 2x} = x \\iff x^2 - 2x = x^2 \\iff -2x = 0 \\iff x = 0$. لكن $0 \\notin [2, +\\infty[$! إذن المنحنى $(C_k)$ لا يتقاطع مع المنصف الأول على $[2, +\\infty[$.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 9. Synthesis Master Exam Problem (2.00 pts) -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold">9. مسألة الامتحان الوطني التوليفية الكبرى</span>
                    <span class="text-xs text-slate-400">Problème de Synthèse Master • معيار د. الرياح (2.00 نقطة)</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">الدالة الكسرية اللاجذرية على $\\mathbb{R}$، التقابل، وتحديد الدالة العكسية الصريحة</h4>
                  <p class="text-xs text-slate-300 leading-relaxed mb-4">
                    تعتبر هذه المسألة التوليفية من أرقى مسائل الفروض المحروسة والامتحانات الوطنية، حيث تختبر قدرة التلميذ على دراسة رتابة دالة غير خطية على $\\mathbb{R}$ كاملة، واستخراج دالتها العكسية بمهارة جبرية فائقة.
                  </p>

                  <!-- Problem Statement -->
                  <div class="bg-slate-950/80 p-5 rounded-xl border border-cyan-500/30 mb-5 space-y-3">
                    <p class="text-xs text-slate-300 font-semibold">
                      نعتبر الدالة العددية $f$ المعرفة على $\\mathbb{R}$ بما يلي: $f(x) = 1 + \\frac{x}{\\sqrt{x^2 + 1}}$.
                    </p>
                    <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5">
                      <li>احسب نهايتي $f$ عند $+\\infty$ وعند $-\\infty$، ثم أعطِ التأويل الهندسي للنتيجتين. <span class="font-mono text-cyan-400 text-[11px]">(0.50 ن)</span></li>
                      <li>احسب المشتقة $f'(x)$ لكل $x \\in \\mathbb{R}$، واستنتج أن $f$ تقابل من $\\mathbb{R}$ نحو مجال $J$ يتم تحديده. <span class="font-mono text-cyan-400 text-[11px]">(0.50 ن)</span></li>
                      <li>حدد الصيغة الصريحة للدالة العكسية $f^{-1}(x)$ لكل $x \\in J$. <span class="font-mono text-cyan-400 text-[11px]">(0.75 ن)</span></li>
                      <li>بين أن المعادلة $f(x) = x$ تقبل حلاً وحيداً $\\alpha$ في المجال $]1, 2[$. <span class="font-mono text-cyan-400 text-[11px]">(0.25 ن)</span></li>
                    </ol>
                  </div>

                  <!-- Collapsible Full Model Solution with Marking Scheme -->
                  <div class="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/40">
                    <button onclick="const el = document.getElementById('ax4-synth-solution'); el.classList.toggle('hidden');" class="w-full text-right p-4 bg-slate-900/90 hover:bg-slate-800/90 text-xs font-bold text-cyan-400 flex items-center justify-between transition-colors">
                      <span class="flex items-center gap-2"><span>📝</span> اضغط هنا لإظهار / إخفاء عناصر الإجابة الرسمية والتحرير البرهاني الصارم (2.00 نقطة)</span>
                      <span class="text-slate-400 text-[11px]">معاينة عناصر الإجابة النموذجية ↧</span>
                    </button>
                    
                    <div id="ax4-synth-solution" class="hidden p-5 border-t border-slate-800 space-y-4 text-xs text-slate-300">
                      <!-- 1. Limits and Asymptotes -->
                      <div class="bg-slate-900/60 p-3.5 rounded-lg border border-slate-800/80">
                        <div class="flex justify-between font-bold text-amber-300 mb-1">
                          <span>1. حساب النهايات والتأويل الهندسي:</span>
                          <span class="font-mono text-cyan-400">0.50 ن</span>
                        </div>
                        <p class="leading-relaxed">
                          • بجوار $+\\infty$: لدينا $\\lim_{x \\to +\\infty} \\frac{x}{\\sqrt{x^2+1}} = \\lim_{x \\to +\\infty} \\frac{x}{x\\sqrt{1 + 1/x^2}} = 1$.<br>
                          إذن: $\\lim_{x \\to +\\infty} f(x) = 1 + 1 = 2$.<br>
                          <strong>التأويل الهندسي:</strong> المستقيم ذو المعادلة $y = 2$ مقارب أفقي للمنحنى $(C_f)$ بجوار $+\\infty$.
                        </p>
                        <p class="leading-relaxed mt-2">
                          • بجوار $-\\infty$: بما أن $x < 0$ فإن $\\sqrt{x^2} = |x| = -x$.<br>
                          $\\lim_{x \\to -\\infty} \\frac{x}{\\sqrt{x^2+1}} = \\lim_{x \\to -\\infty} \\frac{x}{-x\\sqrt{1 + 1/x^2}} = -1$.<br>
                          إذن: $\\lim_{x \\to -\\infty} f(x) = 1 + (-1) = 0$.<br>
                          <strong>التأويل الهندسي:</strong> المستقيم ذو المعادلة $y = 0$ (محور الأفاصيل) مقارب أفقي للمنحنى $(C_f)$ بجوار $-\\infty$.
                        </p>
                      </div>

                      <!-- 2. Derivability, Strict Monotonicity & Bijection -->
                      <div class="bg-slate-900/60 p-3.5 rounded-lg border border-slate-800/80">
                        <div class="flex justify-between font-bold text-amber-300 mb-1">
                          <span>2. الاشتقاق، الرتابة، ومبرهنة التقابل:</span>
                          <span class="font-mono text-cyan-400">0.50 ن</span>
                        </div>
                        <p class="leading-relaxed">
                          الدالة $x \\mapsto x^2 + 1$ قابلة للاشتقاق وموجبة قطعا على $\\mathbb{R}$، إذن $x \\mapsto \\sqrt{x^2+1}$ قابلة للاشتقاق ولا تنعدم على $\\mathbb{R}$. وبالتالي فالدالة $f$ قابلة للاشتقاق على $\\mathbb{R}$، ولدينا لكل $x \\in \\mathbb{R}$:
                        </p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$f'(x) = \\left(1 + \\frac{x}{\\sqrt{x^2+1}}\\right)' = \\frac{(x)'\\sqrt{x^2+1} - x(\\sqrt{x^2+1})'}{x^2 + 1} = \\frac{\\sqrt{x^2+1} - x \\left(\\frac{2x}{2\\sqrt{x^2+1}}\\right)}{x^2 + 1}$$
                        </div>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$f'(x) = \\frac{\\frac{(x^2+1) - x^2}{\\sqrt{x^2+1}}}{x^2 + 1} = \\frac{1}{(x^2 + 1)\\sqrt{x^2 + 1}} = \\frac{1}{(x^2 + 1)^{3/2}} > 0$$
                        </div>
                        <p class="leading-relaxed">
                          بما أن $f'(x) > 0$ قطعا لكل $x \\in \\mathbb{R}$، فإن الدالة $f$ <strong>تزايدية قطعاً</strong> ومتصلة على $\\mathbb{R}$.<br>
                          وبالتالي فإن $f$ تقابل من $\\mathbb{R}$ نحو المجال:
                        </p>
                        <div class="text-center font-mono text-emerald-400 my-1">
                          $$J = f(\\mathbb{R}) = \\left]\\lim_{x \\to -\\infty} f(x), \\lim_{x \\to +\\infty} f(x)\\right[ = ]0, 2[$$
                        </div>
                      </div>

                      <!-- 3. Explicit Form of f^{-1}(x) -->
                      <div class="bg-slate-900/60 p-3.5 rounded-lg border border-slate-800/80">
                        <div class="flex justify-between font-bold text-amber-300 mb-1">
                          <span>3. الصيغة الصريحة للدالة العكسية $f^{-1}(x)$:</span>
                          <span class="font-mono text-cyan-400">0.75 ن</span>
                        </div>
                        <p class="leading-relaxed">ليكن $x \\in ]0, 2[$، نبحث عن $y \\in \\mathbb{R}$ بحيث $f(y) = x$:</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$1 + \\frac{y}{\\sqrt{y^2 + 1}} = x \\iff \\frac{y}{\\sqrt{y^2 + 1}} = x - 1$$
                        </div>
                        <p class="leading-relaxed">
                          بما أن $x \\in ]0, 2[$، فإن $-1 < x - 1 < 1$. نرفع الطرفين إلى المربع (مع ملاحظة أن إشارة $y$ مطابقة حتماً لإشارة $x - 1$):
                        </p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$\\frac{y^2}{y^2 + 1} = (x - 1)^2 \\iff y^2 = (x - 1)^2 (y^2 + 1) \\iff y^2 - (x - 1)^2 y^2 = (x - 1)^2$$
                        </div>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$y^2 [1 - (x - 1)^2] = (x - 1)^2 \\iff y^2 = \\frac{(x - 1)^2}{1 - (x - 1)^2}$$
                        </div>
                        <p class="leading-relaxed">
                          نبسط المقام: $1 - (x - 1)^2 = 1 - (x^2 - 2x + 1) = 2x - x^2$.<br>
                          بما أن إشارة $y$ هي نفس إشارة $x - 1$، فإن:
                        </p>
                        <div class="p-2 bg-emerald-950/40 border border-emerald-600/40 rounded text-center text-emerald-300 font-mono font-bold my-1">
                          $$y = \\frac{x - 1}{\\sqrt{2x - x^2}}$$
                        </div>
                        <p class="text-emerald-300 font-semibold">خلاصة: لكل $x \\in ]0, 2[$ لدينا: $f^{-1}(x) = \\frac{x - 1}{\\sqrt{2x - x^2}}$.</p>
                      </div>

                      <!-- 4. Solution of f(x) = x -->
                      <div class="bg-slate-900/60 p-3.5 rounded-lg border border-slate-800/80">
                        <div class="flex justify-between font-bold text-amber-300 mb-1">
                          <span>4. إثبات وجود ووحدانية حل المعادلة $f(x) = x$:</span>
                          <span class="font-mono text-cyan-400">0.25 ن</span>
                        </div>
                        <p class="leading-relaxed">
                          نضع الدالة المساعدة $\\varphi(x) = f(x) - x$ على المجال $[1, 2]$:<br>
                          • $\\varphi$ متصلة على $[1, 2]$.<br>
                          • $\\varphi'(x) = f'(x) - 1 = \\frac{1}{(x^2+1)^{3/2}} - 1$.<br>
                          لكل $x \\ge 1$ لدينا $x^2 + 1 \\ge 2 > 1 \\implies (x^2+1)^{3/2} > 1 \\implies \\frac{1}{(x^2+1)^{3/2}} < 1 \\implies \\varphi'(x) < 0$. إذن $\\varphi$ تناقصية قطعاً على $[1, 2]$.<br>
                          • $\\varphi(1) = f(1) - 1 = \\frac{1}{\\sqrt{2}} > 0$.<br>
                          • $\\varphi(2) = f(2) - 2 = 1 + \\frac{2}{\\sqrt{5}} - 2 = \\frac{2}{\\sqrt{5}} - 1 = \\frac{2 - \\sqrt{5}}{\\sqrt{5}} < 0$.<br>
                          بما أن $\\varphi(1) \\times \\varphi(2) < 0$ و $\\varphi$ متصلة وتناقصية قطعاً على $[1, 2]$، فإن المعادلة $\\varphi(x) = 0 \\iff f(x) = x$ تقبل حلاً وحيداً $\\alpha \\in ]1, 2[$.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <!-- 10. Derivability of the Inverse Function & Tangents -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">10. اشتقاق الدالة العكسية والتأويلات الهندسية</span>
                    <span class="text-xs text-slate-400">Dérivabilité de f⁻¹ & Demi-tangentes</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">مبرهنة قابلية اشتقاق الدالة العكسية والمماسات العمودية</h4>
                  <p class="text-sm text-slate-300 leading-relaxed mb-4">
                    تُعتبر مبرهنة اشتقاق الدالة العكسية من أكثر الأسئلة استراتيجية في الامتحان الوطني، حيث تُمكّن من حساب العدد المشتق $(f^{-1})'(y_0)$ <strong>دون الحاجة إطلاقاً لتحديد الصيغة الصريحة للدالة العكسية</strong>:
                  </p>

                  <!-- 1. The Core Derivability Theorems -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-cyan-500/30">
                      <div class="text-cyan-400 font-bold text-xs mb-1.5 flex items-center gap-2">
                        <span>⚡</span> قابلية الاشتقاق في نقطة (En un point)
                      </div>
                      <p class="text-xs text-slate-300 leading-relaxed mb-2">
                        لتكن $f$ متصلة ورتيبة قطعاً على مجال $I$، وليكن $x_0 \\in I$ و $y_0 = f(x_0)$. إذا تحقق الشرطان:
                      </p>
                      <ul class="text-xs text-slate-200 space-y-1 list-disc list-inside mb-2">
                        <li>$f$ قابلة للاشتقاق في النقطة $x_0$.</li>
                        <li><strong>$f'(x_0) \\neq 0$</strong> (العدد المشتق غير منعدم).</li>
                      </ul>
                      <p class="text-xs text-emerald-300 font-semibold mb-1">
                        فإن $f^{-1}$ قابلة للاشتقاق في النقطة $y_0 = f(x_0)$ ولدينا:
                      </p>
                      <div class="text-center font-mono text-cyan-300 p-2 bg-slate-900 rounded border border-slate-800 text-sm">
                        $$(f^{-1})'(y_0) = \\frac{1}{f'(x_0)} = \\frac{1}{f'(f^{-1}(y_0))}$$
                      </div>
                    </div>

                    <div class="bg-slate-950/70 p-4 rounded-xl border border-purple-500/30">
                      <div class="text-purple-400 font-bold text-xs mb-1.5 flex items-center gap-2">
                        <span>📈</span> قابلية الاشتقاق على مجال (Sur un intervalle)
                      </div>
                      <p class="text-xs text-slate-300 leading-relaxed mb-2">
                        إذا كانت الدالة $f$ قابلة للاشتقاق على مجال $I$ ومشتقتها <strong>لا تنعدم قطعا</strong> على هذا المجال ($\\forall x \\in I, f'(x) \\neq 0$):
                      </p>
                      <p class="text-xs text-emerald-300 font-semibold mb-1">
                        فإن الدالة العكسية $f^{-1}$ قابلة للاشتقاق على المجال $J = f(I)$ ودالتها المشتقة تعطى بـ:
                      </p>
                      <div class="text-center font-mono text-purple-300 p-2 bg-slate-900 rounded border border-slate-800 text-xs space-y-1">
                        <div>$$(f^{-1})' = \\frac{1}{f' \\circ f^{-1}}$$</div>
                        <div class="text-[11px] text-slate-400">$$\\forall y \\in J, \\quad (f^{-1})'(y) = \\frac{1}{f'(f^{-1}(y))}$$</div>
                      </div>
                    </div>
                  </div>

                  <!-- 2. Critical Case: f'(x_0) = 0 and Vertical Tangents -->
                  <div class="p-4 bg-slate-950/80 rounded-xl border border-rose-500/30 mb-4">
                    <div class="text-rose-400 font-bold text-xs mb-1.5 flex items-center gap-2">
                      <span>⚠️</span> الحالة الخاصة الكلاسيكية للامتحان الوطني (عندما $f'(x_0) = 0$):
                    </div>
                    <p class="text-xs text-slate-300 leading-relaxed mb-2">
                      إذا كانت $f$ قابلة للاشتقاق في $x_0$ وكان $f'(x_0) = 0$ (أي أن المنحنى $(C_f)$ يقبل مماساً أفقياً في النقطة $M(x_0, f(x_0))$):
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mt-2">
                      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                        <span class="text-amber-300 font-bold block mb-1">النتيجة الجبرية:</span>
                        <p class="leading-relaxed text-slate-300">
                          الدالة العكسية $f^{-1}$ <strong>غير قابلة للاشتقاق</strong> في النقطة $y_0 = f(x_0)$ لأن القسمة على صفر غير معرفة في $\\mathbb{R}$.
                        </p>
                      </div>
                      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                        <span class="text-cyan-300 font-bold block mb-1">التأويل الهندسي المبياني:</span>
                        <p class="leading-relaxed text-slate-300">
                          المنحنى $(C_{f^{-1}})$ يقبل <strong>مماساً عمودياً</strong> (أو نصف مماس عمودي) في النقطة $M'(y_0, x_0)$ معادلته الديكارتية: <span class="font-mono text-cyan-400 font-bold">x = y₀</span>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- 3. Worked Application Examples -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Example 1 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-amber-400 font-bold text-xs">تطبيق 1: حساب $(f^{-1})'(y_0)$ بدون صيغة صريحة</span>
                        <span class="text-[11px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded">0.75 ن</span>
                      </div>
                      <p class="text-xs text-slate-300 leading-relaxed mb-2">
                        لتكن $f(x) = x^3 + x - 1$ معرفة على $\\mathbb{R}$. بين أن $f^{-1}$ قابلة للاشتقاق في النقطة $y_0 = 1$ واحسب $(f^{-1})'(1)$.
                      </p>
                      <div class="text-xs text-slate-300 space-y-1.5 border-t border-slate-800 pt-2 leading-relaxed">
                        <p>1. نلاحظ أن: $f(1) = 1^3 + 1 - 1 = 1 \\implies f^{-1}(1) = 1$.</p>
                        <p>2. $f'(x) = 3x^2 + 1 > 0$ قطعا، ولدينا: $f'(1) = 3(1)^2 + 1 = 4$.</p>
                        <p>3. بما أن $f$ قابلة للاشتقاق في $1$ و $f'(1) = 4 \\neq 0$، فإن $f^{-1}$ قابلة للاشتقاق في $1$ ولدينا:</p>
                        <div class="p-1.5 bg-slate-900 rounded font-mono text-center text-emerald-300 font-bold">
                          $$(f^{-1})'(1) = \\frac{1}{f'(1)} = \\frac{1}{4}$$
                        </div>
                      </div>
                    </div>

                    <!-- Example 2 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-amber-400 font-bold text-xs">تطبيق 2: تقنية تغيير المتغير لنصف المماس العمودي</span>
                        <span class="text-[11px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded">0.75 ن</span>
                      </div>
                      <p class="text-xs text-slate-300 leading-relaxed mb-2">
                        لتكن $f$ متصلة وتزايدية على $[1, +\\infty[$ بحيث $f(1) = 0$ و $f'_d(1) = 0$. ادرس اشتقاق $f^{-1}$ على يمين $0$.
                      </p>
                      <div class="text-xs text-slate-300 space-y-1.5 border-t border-slate-800 pt-2 leading-relaxed">
                        <p>نضع $y = f(x) \\iff x = f^{-1}(y)$. عندما $y \\to 0^+$ فإن $x \\to 1^+$:</p>
                        <div class="text-center font-mono text-cyan-300 p-1.5 bg-slate-900 rounded">
                          $$\\lim_{y \\to 0^+} \\frac{f^{-1}(y) - f^{-1}(0)}{y - 0} = \\lim_{x \\to 1^+} \\frac{x - 1}{f(x) - f(1)} = \\lim_{x \\to 1^+} \\frac{1}{\\frac{f(x) - f(1)}{x - 1}} = \\frac{1}{0^+} = +\\infty$$
                        </div>
                        <p class="text-purple-300 font-semibold">
                          إذن $f^{-1}$ غير قابلة للاشتقاق على يمين $0$، و $(C_{f^{-1}})$ يقبل نصف مماس عمودي موجه نحو الأعلى في النقطة $(0, 1)$.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
`);
