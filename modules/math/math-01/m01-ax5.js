window.EulerAcademy.registerAxis('math-01', 'm01-ax5', `

              <div class="space-y-6">
                <!-- 1. Theoretical Foundation: n-th Root Function -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold">1. الأساس النظري لدالة الجذر النوني</span>
                    <span class="text-xs text-slate-400">Fonction Racine n-ième</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">تعريف دالة الجذر من الرتبة $n$ كدالة عكسية لـ $x^n$</h4>
                  <p class="text-sm text-slate-300 leading-relaxed mb-4">
                    ليكن $n \\in \\mathbb{N}^*$. الدالة $u: x \\mapsto x^n$ متصلة وتزايدية قطعاً على المجال $\\mathbb{R}^+ = [0, +\\infty[$، وتُحقق $u([0, +\\infty[) = [0, +\\infty[$:
                  </p>

                  <div class="p-4 bg-slate-950/80 rounded-xl border border-cyan-500/30 mb-4">
                    <div class="text-cyan-400 font-bold text-sm mb-2 flex items-center gap-2">
                      <span>📌</span> التعريف الرسمي لدالة الجذر من الرتبة $n$:
                    </div>
                    <p class="text-xs text-slate-300 leading-relaxed">
                      بما أن الدالة $x \\mapsto x^n$ تقابل من $[0, +\\infty[$ نحو $[0, +\\infty[$، فإن دالتها العكسية تسمى <strong>دالة الجذر من الرتبة $n$</strong>، ونرمز لها بـ $x \\mapsto \\sqrt[n]{x}$.
                    </p>
                    <div class="my-3 p-3 bg-slate-900 rounded-xl border border-slate-800 text-center font-mono text-cyan-300 text-sm">
                      $$\\forall (x, y) \\in ([0, +\\infty[)^2, \\quad \\sqrt[n]{x} = y \\iff x = y^n$$
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono text-slate-300 mt-2">
                      <div class="bg-slate-950 p-2 rounded border border-slate-800">$$\\sqrt[1]{x} = x$$</div>
                      <div class="bg-slate-950 p-2 rounded border border-slate-800">$$\\sqrt[2]{x} = \\sqrt{x}$$</div>
                      <div class="bg-slate-950 p-2 rounded border border-slate-800">$$(\\sqrt[n]{x})^n = x$$</div>
                      <div class="bg-slate-950 p-2 rounded border border-slate-800">$$\\sqrt[n]{x^n} = x$$</div>
                    </div>
                  </div>

                  <!-- Invariant Properties of nth Root -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div class="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                      <span class="text-emerald-400 font-bold block mb-1">الاتصال والرتابة:</span>
                      <p class="text-slate-300">الدالة $x \\mapsto \\sqrt[n]{x}$ متصلة وتزايدية قطعاً على $[0, +\\infty[$، مع $\\sqrt[n]{0} = 0$ و $\\sqrt[n]{1} = 1$.</p>
                    </div>
                    <div class="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                      <span class="text-cyan-400 font-bold block mb-1">النهاية اللانهائية:</span>
                      <p class="text-slate-300">تؤول الدالة إلى اللانهاية بتزايد مستمر:</p>
                      <div class="font-mono text-cyan-300 my-1 text-center">$$\\lim_{x \\to +\\infty} \\sqrt[n]{x} = +\\infty$$</div>
                    </div>
                    <div class="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                      <span class="text-amber-400 font-bold block mb-1">التأويل الهندسي عند $0$:</span>
                      <p class="text-slate-300">غير قابلة للاشتقاق على يمين $0$، وتقبل نصف مماس عمودي موجه نحو الأعلى في أصل المعلم.</p>
                    </div>
                  </div>
                </div>

                <!-- 2. Algebraic Rules and Reduction of Orders -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">2. القواعد والعمليات الجبرية</span>
                    <span class="text-xs text-slate-400">Règles de Calcul & Réduction des Ordres</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">قواعد الحساب واختزال وتوحيد رتب الجذور النونية</h4>
                  <p class="text-sm text-slate-300 leading-relaxed mb-4">
                    لكل $a, b \\in \\mathbb{R}^+$ ولكل $n, m, k \\in \\mathbb{N}^*$، تخضع الجذور النونية للقواعد الجبرية الصارمة التالية:
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                      <div class="flex items-center justify-between p-2 bg-slate-900/80 rounded border border-slate-800">
                        <span class="text-slate-300">جداء جذرين من نفس الرتبة:</span>
                        <span class="font-mono text-cyan-300">$$\\sqrt[n]{a} \\times \\sqrt[n]{b} = \\sqrt[n]{ab}$$</span>
                      </div>
                      <div class="flex items-center justify-between p-2 bg-slate-900/80 rounded border border-slate-800">
                        <span class="text-slate-300">خارج جذرين من نفس الرتبة ($b > 0$):</span>
                        <span class="font-mono text-cyan-300">$$\\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\frac{a}{b}}$$</span>
                      </div>
                      <div class="flex items-center justify-between p-2 bg-slate-900/80 rounded border border-slate-800">
                        <span class="text-slate-300">قوة جذر نوني:</span>
                        <span class="font-mono text-cyan-300">$$(\\sqrt[n]{a})^m = \\sqrt[n]{a^m}$$</span>
                      </div>
                    </div>

                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                      <div class="flex items-center justify-between p-2 bg-slate-900/80 rounded border border-slate-800">
                        <span class="text-slate-300">تركيب الجذور النونية:</span>
                        <span class="font-mono text-purple-300">$$\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}$$</span>
                      </div>
                      <div class="flex items-center justify-between p-2 bg-slate-900/80 rounded border border-slate-800">
                        <span class="text-slate-300">اختزال وتوسيع الرتبة:</span>
                        <span class="font-mono text-purple-300">$$\\sqrt[kn]{a^{km}} = \\sqrt[n]{a^m}$$</span>
                      </div>
                      <div class="flex items-center justify-between p-2 bg-slate-900/80 rounded border border-slate-800">
                        <span class="text-slate-300">المقارنة والرتابة:</span>
                        <span class="font-mono text-purple-300">$$a \\le b \\iff \\sqrt[n]{a} \\le \\sqrt[n]{b}$$</span>
                      </div>
                    </div>
                  </div>

                  <!-- Technique of Unifying Orders Box -->
                  <div class="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200 leading-relaxed">
                    <span class="font-bold text-amber-300 block mb-1">⚡ تقنية توحيد الرتب (Unification des Ordres):</span>
                    لضرب أو قسمة جذور من رتب مختلفة، نوحد رتبها باعتماد المضاعف المشترك الأصغر (PPCM) للرتبتين:<br>
                    مثال حاسم: لحساب الجداء $\\sqrt[3]{a} \\times \\sqrt{a}$ نلاحظ أن $\\text{PPCM}(3, 2) = 6$، فنكتب:
                    <div class="font-mono text-cyan-300 text-center my-1 bg-slate-950/60 p-2 rounded border border-slate-800">
                      $$\\sqrt[3]{a} \\times \\sqrt{a} = \\sqrt[3 \\times 2]{a^2} \\times \\sqrt[2 \\times 3]{a^3} = \\sqrt[6]{a^2} \\times \\sqrt[6]{a^3} = \\sqrt[6]{a^2 \\times a^3} = \\sqrt[6]{a^5}$$
                    </div>
                  </div>
                </div>

                <!-- 3. Rational Powers x^r (r in Q) -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold">3. القوى الجذرية</span>
                    <span class="text-xs text-slate-400">Puissances Rationnelles xʳ (r ∈ ℚ)</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">القوى ذات الأسس الجذرية لعدد حقيقي موجب قطعا</h4>
                  <p class="text-sm text-slate-300 leading-relaxed mb-4">
                    لكل عدد حقيقي $x > 0$ ولكل عدد جذري $r = \\frac{p}{q}$ (حيث $p \\in \\mathbb{Z}$ و $q \\in \\mathbb{N}^*$):
                  </p>

                  <div class="p-4 bg-slate-950/80 rounded-xl border border-purple-500/30 text-center font-mono text-purple-300 text-sm mb-4">
                    $$x^r = x^{\\frac{p}{q}} = \\sqrt[q]{x^p} = (\\sqrt[q]{x})^p$$
                  </div>

                  <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                    <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
                      <span class="text-slate-400 block mb-1">جداء قوتين:</span>
                      <span class="font-mono text-cyan-300">$$x^r \\times x^{r'} = x^{r + r'}$$</span>
                    </div>
                    <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
                      <span class="text-slate-400 block mb-1">خارج قوتين:</span>
                      <span class="font-mono text-cyan-300">$$\\frac{x^r}{x^{r'}} = x^{r - r'}$$</span>
                    </div>
                    <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
                      <span class="text-slate-400 block mb-1">قوة قوة:</span>
                      <span class="font-mono text-cyan-300">$$(x^r)^{r'} = x^{r \\times r'}$$</span>
                    </div>
                    <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
                      <span class="text-slate-400 block mb-1">قوة جداء:</span>
                      <span class="font-mono text-emerald-300">$$(xy)^r = x^r y^r$$</span>
                    </div>
                    <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
                      <span class="text-slate-400 block mb-1">قوة خارج:</span>
                      <span class="font-mono text-emerald-300">$$\\left(\\frac{x}{y}\\right)^r = \\frac{x^r}{y^r}$$</span>
                    </div>
                    <div class="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-center">
                      <span class="text-slate-400 block mb-1">الأس السالب:</span>
                      <span class="font-mono text-emerald-300">$$x^{-r} = \\frac{1}{x^r}$$</span>
                    </div>
                  </div>
                </div>

                <!-- 4. Continuity, Derivability & Limits of nth Root Composite -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold">4. الاتصال والاشتقاق لمركب جذر نوني</span>
                    <span class="text-xs text-slate-400">Continuité & Dérivation de ⁿ√u(x)</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">اتصال، اشتقاق، ونهايات الدوال من صنف $\\sqrt[n]{u(x)}$</h4>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <!-- Continuity & Limits -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-xs leading-relaxed space-y-2">
                      <div class="text-cyan-400 font-bold mb-1">مبرهنة الاتصال والنهايات:</div>
                      <p>• إذا كانت $u$ متصلة وموجبة على مجال $I$، فإن الدالة $x \\mapsto \\sqrt[n]{u(x)}$ <strong>متصلة</strong> على $I$.</p>
                      <p>• إذا كانت $\\lim_{x \\to x_0} u(x) = L$ مع $L \\ge 0$ فإن:</p>
                      <div class="text-center font-mono text-cyan-300 p-1.5 bg-slate-900 rounded border border-slate-800">
                        $$\\lim_{x \\to x_0} \\sqrt[n]{u(x)} = \\sqrt[n]{L}$$
                      </div>
                      <p>• إذا كانت $\\lim_{x \\to x_0} u(x) = +\\infty$ فإن $\\lim_{x \\to x_0} \\sqrt[n]{u(x)} = +\\infty$.</p>
                    </div>

                    <!-- Derivability -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-xs leading-relaxed space-y-2">
                      <div class="text-emerald-400 font-bold mb-1">مبرهنة الاشتقاق وصيغة المشتقة:</div>
                      <p>• إذا كانت $u$ قابلة للاشتقاق وموجبة قطعا على $I$ ($u(x) > 0$):</p>
                      <div class="text-center font-mono text-emerald-300 p-1.5 bg-slate-900 rounded border border-slate-800">
                        $$(\\sqrt[n]{u(x)})' = \\frac{u'(x)}{n \\sqrt[n]{(u(x))^{n-1}}} = \\frac{1}{n} u'(x) \\cdot (u(x))^{\\frac{1}{n} - 1}$$
                      </div>
                      <p class="text-[11px] text-slate-400">حالة خاصة اعتيادية ($u(x) = x$): لكل $x > 0$ لدينا $(\\sqrt[n]{x})' = \\frac{1}{n \\sqrt[n]{x^{n-1}}}$.</p>
                    </div>
                  </div>
                </div>

                <!-- 5. Advanced Techniques for Indeterminate Forms -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold">5. تقنيات إزالة عدم التعيين</span>
                    <span class="text-xs text-slate-400">Techniques de Levée d'Indétermination</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">المرافق التكعيبي والنوني والتعميل الحاسم في الامتحان الوطني</h4>

                  <!-- Cubic Conjugate Identity -->
                  <div class="bg-slate-950/80 p-4 rounded-xl border border-amber-500/30 mb-4 text-xs">
                    <div class="text-amber-400 font-bold mb-1 flex items-center gap-2">
                      <span>⚡</span> المتطابقة الهامة للمرافق التكعيبي (Ordre 3):
                    </div>
                    <p class="text-slate-300 leading-relaxed mb-2">
                      نعتمد المتطابقة: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$، ومنها صيغة المرافق التكعيبي لإزالة الجذور المكعبة:
                    </p>
                    <div class="text-center font-mono text-amber-300 p-2 bg-slate-900 rounded border border-slate-800 text-sm">
                      $$\\sqrt[3]{A} - \\sqrt[3]{B} = \\frac{A - B}{\\sqrt[3]{A^2} + \\sqrt[3]{AB} + \\sqrt[3]{B^2}}$$
                    </div>
                    <div class="text-center font-mono text-cyan-300 p-2 bg-slate-900 rounded border border-slate-800 text-sm mt-2">
                      $$\\sqrt[3]{A} - B = \\frac{A - B^3}{\\sqrt[3]{A^2} + B\\sqrt[3]{A} + B^2}$$
                    </div>
                  </div>

                  <!-- Decision Rule: Factorisation vs Conjugate -->
                  <div class="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-xs space-y-2">
                    <div class="text-cyan-400 font-bold mb-1">
                      🎯 قاعدة القرار الذهبية في الامتحان الوطني عند $+\\infty$: $\\lim_{x \\to +\\infty} (\\sqrt[3]{ax^3 + bx^2 + \\dots} - \\alpha x)$
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      <div class="p-3 bg-slate-900/90 rounded-lg border border-rose-500/30">
                        <span class="text-rose-400 font-bold block mb-1">إذا كان $\\sqrt[3]{a} = \\alpha$:</span>
                        <p class="text-slate-300 leading-relaxed">
                          التعميل المباشر يعطي شكلاً غير محدد $(0 \\times \\infty)$. <strong>يتعين استعمال المرافق التكعيبي حتماً!</strong>
                        </p>
                      </div>
                      <div class="p-3 bg-slate-900/90 rounded-lg border border-emerald-500/30">
                        <span class="text-emerald-400 font-bold block mb-1">إذا كان $\\sqrt[3]{a} \\neq \\alpha$:</span>
                        <p class="text-slate-300 leading-relaxed">
                          المرافق التكعيبي مضيعة هائلة للوقت! <strong>التعميل المباشر بـ $x$ يحل النهاية في سطرين فقط!</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 6. Classic National Exam Traps -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-bold">6. فخاخ كلاسيكية في الامتحان الوطني</span>
                    <span class="text-xs text-slate-400">Pièges & Erreurs Fréquentes</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-3">أخطاء مكلفة في حساب الجذور النونية وكيفية تجنبها بيقين</h4>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div class="p-3.5 bg-rose-950/20 border border-rose-900/40 rounded-xl">
                      <div class="text-rose-400 font-bold mb-1">❌ الفخ 1: تطبيق القوى الجذرية على أعداد سالبة</div>
                      <p class="text-slate-300 leading-relaxed">
                        الكتابة $(-8)^{1/3}$ غير معرفة في المقررات الرسمية للباكالوريا. القوى الجذرية $x^r$ (حيث $r \\in \\mathbb{Q}$) معرفة <strong>حصرياً للأعداد الموجبة قطعا $x > 0$</strong>. أما الجذور الفردية للأعداد السالبة فغير مقررة على مسلك PC.
                      </p>
                    </div>

                    <div class="p-3.5 bg-rose-950/20 border border-rose-900/40 rounded-xl">
                      <div class="text-rose-400 font-bold mb-1">❌ الفخ 2: نسيان مجموعة تعريف المعادلات اللاجذرية</div>
                      <p class="text-slate-300 leading-relaxed">
                        رفع طرفي المعادلة $\\sqrt[3]{u(x)} = v(x)$ إلى القوة $3$ يتطلب بداية تحديد مجموعة التعريف والتأكد من إشارة $v(x)$ إذا كانت الرتبة زوجية $\\sqrt[2k]{u(x)}$.
                      </p>
                    </div>

                    <div class="p-3.5 bg-rose-950/20 border border-rose-900/40 rounded-xl">
                      <div class="text-rose-400 font-bold mb-1">❌ الفخ 3: خطأ نشر المرافق التكعيبي $a^2 + ab + b^2$</div>
                      <p class="text-slate-300 leading-relaxed">
                        الخلط بين متطابقة الدرجة الثانية $a^2 - b^2$ ومتطابقة التكعيب $a^3 - b^3$. في المقام التكعيبي لـ $\\sqrt[3]{A} - \\sqrt[3]{B}$ يجب كتابة ثلاثة حدود موجبة: $\\sqrt[3]{A^2} + \\sqrt[3]{AB} + \\sqrt[3]{B^2}$ (أما لـ $\\sqrt[3]{A} - B$ فنكتب $\\sqrt[3]{A^2} + B\\sqrt[3]{A} + B^2$).
                      </p>
                    </div>

                    <div class="p-3.5 bg-rose-950/20 border border-rose-900/40 rounded-xl">
                      <div class="text-rose-400 font-bold mb-1">❌ الفخ 4: ادعاء قابلية اشتقاق $\\sqrt[n]{x}$ في $0$</div>
                      <p class="text-slate-300 leading-relaxed">
                        دالة الجذر من الرتبة $n$ <strong>غير قابلة للاشتقاق في $0$ على اليمين</strong> (لأن نسبة التغير تؤول إلى $+\\infty$)، وتقبل نصف مماس عمودي موجه للأعلى.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 7. Model Application 1: Irrational Equation with PPCM -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">7. تمرين نموذجي رسمي رقم 1</span>
                    <span class="text-xs text-slate-400">1.50 نقطة • حل المعادلات بتغيير المتغير</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">حل معادلة لاجذرية برتب مختلفة عبر توحيد الرتب وتغيير المتغير</h4>
                  <p class="text-xs text-slate-300 mb-4">
                    نعتبر في $\\mathbb{R}$ المعادلة التالية: $(E): \\sqrt[3]{x} + \\sqrt{x} = 2$.
                  </p>

                  <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-3 text-xs text-slate-300 leading-relaxed">
                    <div>
                      <div class="font-bold text-amber-400 mb-1">1. مجموعة تعريف المعادلة:</div>
                      <p>المعادلة معرفة إذا وفقط إذا كان $x \\ge 0$. إذن مجموعة التعريف هي: $D_E = [0, +\\infty[$.</p>
                    </div>

                    <div>
                      <div class="font-bold text-amber-400 mb-1">2. توحيد الرتب واعتماد تغيير المتغير:</div>
                      <p>نلاحظ أن رتبتي الجذرين هما $3$ و $2$، والمضاعف المشترك الأصغر لهما هو $\\text{PPCM}(3, 2) = 6$.</p>
                      <p>نضع: $X = \\sqrt[6]{x}$ (مع $X \\ge 0$). ومنه:</p>
                      <ul class="list-disc list-inside space-y-0.5 mt-1 font-mono">
                        <li>$\\sqrt[3]{x} = \\sqrt[6]{x^2} = (\\sqrt[6]{x})^2 = X^2$</li>
                        <li>$\\sqrt{x} = \\sqrt[6]{x^3} = (\\sqrt[6]{x})^3 = X^3$</li>
                      </ul>
                    </div>

                    <div>
                      <div class="font-bold text-amber-400 mb-1">3. حل المعادلة الحدودية المكافئة:</div>
                      <p>تصبح المعادلة: $X^3 + X^2 = 2 \\iff X^3 + X^2 - 2 = 0$.</p>
                      <p>نلاحظ أن $1$ جذر واضح للمعادلة ($1^3 + 1^2 - 2 = 0$). نعمل بـ $(X - 1)$ عبر القسمة الإقليدية:</p>
                      <div class="text-center font-mono text-cyan-300 my-1 bg-slate-900 p-2 rounded border border-slate-800">
                        $$X^3 + X^2 - 2 = (X - 1)(X^2 + 2X + 2) = 0$$
                      </div>
                      <p>لكل $X \\in \\mathbb{R}$ لدينا $X^2 + 2X + 2 = (X + 1)^2 + 1 > 0$ (مميزها $\\Delta = 4 - 8 = -4 < 0$).</p>
                      <p class="text-emerald-300 font-semibold">إذن الحل الحقيقي الوحيد هو: $X = 1$.</p>
                    </div>

                    <div>
                      <div class="font-bold text-amber-400 mb-1">4. الرجوع إلى المتغير الأصلي $x$:</div>
                      <div class="p-2 bg-emerald-950/40 border border-emerald-600/40 rounded text-center text-emerald-300 font-mono font-bold">
                        $$\\sqrt[6]{x} = 1 \\iff x = 1^6 = 1$$
                      </div>
                      <p class="text-emerald-300 font-semibold mt-1">بما أن $1 \\in D_E$، فإن مجموعة حلول المعادلة هي: $S = \\{1\\}$.</p>
                    </div>
                  </div>
                </div>

                <!-- 8. Model Application 2: Calculating Complex Limits -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">8. تمرين نموذجي رسمي رقم 2</span>
                    <span class="text-xs text-slate-400">1.50 نقطة • حساب النهايات غير المحددة</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">حساب نهايات الجذور النونية بالمرافق التكعيبي والتعميل</h4>

                  <div class="space-y-4 text-xs">
                    <!-- Limit 1 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800 leading-relaxed space-y-1.5">
                      <div class="flex justify-between font-bold text-amber-400">
                        <span>أ) حساب النهاية: $L_1 = \\lim_{x \\to +\\infty} (\\sqrt[3]{x^3 + 3x^2} - x)$</span>
                        <span class="font-mono text-cyan-400">0.75 ن</span>
                      </div>
                      <p>• نلاحظ أن $\\sqrt[3]{a} = \\sqrt[3]{1} = 1 = \\alpha$. إذن يجب استعمال المرافق التكعيبي حتماً:</p>
                      <div class="text-center font-mono text-cyan-300 p-2 bg-slate-900 rounded border border-slate-800">
                        $$L_1 = \\lim_{x \\to +\\infty} \\frac{(x^3 + 3x^2) - x^3}{\\sqrt[3]{(x^3+3x^2)^2} + x\\sqrt[3]{x^3+3x^2} + x^2} = \\lim_{x \\to +\\infty} \\frac{3x^2}{\\sqrt[3]{x^6(1 + 3/x)^2} + x\\sqrt[3]{x^3(1 + 3/x)} + x^2}$$
                      </div>
                      <p>• نعَمّل بـ $x^2$ في المقام ونختزل:</p>
                      <div class="text-center font-mono text-cyan-300 p-2 bg-slate-900 rounded border border-slate-800">
                        $$L_1 = \\lim_{x \\to +\\infty} \\frac{3x^2}{x^2 \\left[ \\sqrt[3]{(1 + 3/x)^2} + \\sqrt[3]{1 + 3/x} + 1 \\right]} = \\frac{3}{1 + 1 + 1} = \\frac{3}{3} = 1$$
                      </div>
                      <p class="text-purple-300 font-semibold">التأويل الهندسي: المستقيم $y = x + 1$ مقارب مائل للمنحنى بجوار $+\\infty$.</p>
                    </div>

                    <!-- Limit 2 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800 leading-relaxed space-y-1.5">
                      <div class="flex justify-between font-bold text-amber-400">
                        <span>ب) حساب النهاية: $L_2 = \\lim_{x \\to +\\infty} (\\sqrt[3]{8x^3 + x} - x)$</span>
                        <span class="font-mono text-cyan-400">0.75 ن</span>
                      </div>
                      <p>• نلاحظ أن $\\sqrt[3]{a} = \\sqrt[3]{8} = 2 \\neq 1 = \\alpha$. إذن <strong>التعميل المباشر بـ $x$</strong> كافٍ تماماً دون الحاجة للمرافق:</p>
                      <div class="text-center font-mono text-cyan-300 p-2 bg-slate-900 rounded border border-slate-800">
                        $$L_2 = \\lim_{x \\to +\\infty} \\left[ \\sqrt[3]{x^3 (8 + 1/x^2)} - x \\right] = \\lim_{x \\to +\\infty} x \\left( \\sqrt[3]{8 + \\frac{1}{x^2}} - 1 \\right)$$
                      </div>
                      <p>بما أن $\\lim_{x \\to +\\infty} x = +\\infty$ و $\\lim_{x \\to +\\infty} (\\sqrt[3]{8 + 1/x^2} - 1) = \\sqrt[3]{8} - 1 = 2 - 1 = 1 > 0$، فإن:</p>
                      <div class="p-2 bg-emerald-950/40 border border-emerald-600/40 rounded text-center text-emerald-300 font-mono font-bold">
                        $$L_2 = +\\infty$$
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 9. Interactive Auto-Evaluation Card -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold">9. تحدي الفهم الذاتي والتقويم الفوري</span>
                    <span class="text-xs text-slate-400">Auto-Évaluation • 1.50 نقطة</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">تمرين تطبيقي لاختبار المهارة في حساب النهايات عند نقطة</h4>
                  <div class="bg-slate-950/80 p-4 rounded-xl border border-slate-800 mb-4 text-xs text-slate-300 leading-relaxed space-y-2">
                    <p class="font-semibold text-white">احسب النهاية التالية بطريقتين مختلفتين:</p>
                    <div class="text-center font-mono text-cyan-300 text-sm">
                      $$L = \\lim_{x \\to 1} \\frac{\\sqrt[3]{x} - 1}{\\sqrt{x} - 1}$$
                    </div>
                    <p class="text-[11px] text-slate-400">الطريقة 1: تغيير المتغير $X = \\sqrt[6]{x}$. | الطريقة 2: استعمال تعريف العدد المشتق.</p>
                  </div>

                  <!-- Collapsible Model Solution -->
                  <div class="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/40">
                    <button onclick="const el = document.getElementById('ax5-solution'); el.classList.toggle('hidden');" class="w-full text-right p-3.5 bg-slate-900/80 hover:bg-slate-800/80 text-xs font-bold text-cyan-400 flex items-center justify-between transition-colors">
                      <span class="flex items-center gap-2"><span>👁️</span> اضغط هنا لإظهار / إخفاء الحل النموذجي المفصل بالطريقتين</span>
                      <span class="text-slate-400 text-[11px]">انقر للمعاينة</span>
                    </button>
                    <div id="ax5-solution" class="hidden p-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                      <div>
                        <div class="font-bold text-emerald-400 mb-0.5">الطريقة 1: تغيير المتغير $X = \\sqrt[6]{x}$:</div>
                        <p class="leading-relaxed">عندما $x \\to 1$ فإن $X \\to 1$. تصبح النهاية:</p>
                        <div class="font-mono text-cyan-300 text-center my-1">
                          $$L = \\lim_{X \\to 1} \\frac{X^2 - 1}{X^3 - 1} = \\lim_{X \\to 1} \\frac{(X - 1)(X + 1)}{(X - 1)(X^2 + X + 1)} = \\lim_{X \\to 1} \\frac{X + 1}{X^2 + X + 1} = \\frac{1 + 1}{1 + 1 + 1} = \\frac{2}{3}$$
                        </div>
                      </div>
                      <div>
                        <div class="font-bold text-emerald-400 mb-0.5">الطريقة 2: استعمال العدد المشتق (Taux d'accroissement):</div>
                        <p class="leading-relaxed">نكتب: $\\frac{\\sqrt[3]{x} - 1}{\\sqrt{x} - 1} = \\frac{\\frac{\\sqrt[3]{x} - 1}{x - 1}}{\\frac{\\sqrt{x} - 1}{x - 1}}$.</p>
                        <p class="leading-relaxed">مشتقة $f(x) = x^{1/3}$ في $1$ هي $f'(1) = \\frac{1}{3}(1)^{-2/3} = \\frac{1}{3}$. ومشتقة $g(x) = x^{1/2}$ في $1$ هي $g'(1) = \\frac{1}{2}(1)^{-1/2} = \\frac{1}{2}$.</p>
                        <div class="font-mono text-emerald-300 text-center my-1 font-bold">
                          $$L = \\frac{f'(1)}{g'(1)} = \\frac{1/3}{1/2} = \\frac{2}{3}$$
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 10. Master Synthesis Exam Problem (2.00 pts) -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold">10. مسألة الامتحان الوطني التوليفية الكبرى</span>
                    <span class="text-xs text-slate-400">Problème de Synthèse Master • معيار د. الرياح (2.00 نقطة)</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">الدراسة الكاملة لدالة لاجذرية تكعيبية وتقابلها العكسي</h4>
                  <p class="text-xs text-slate-300 leading-relaxed mb-4">
                    تعتبر هذه المسألة مسك ختام درس الاتصال، حيث تجمع بين الاتصال، نصف المماس العمودي بالاشتقاق، المقاربات بالمرافق التكعيبي، وحساب الدالة العكسية باختزال درجات الحدوديات.
                  </p>

                  <div class="bg-slate-950/80 p-5 rounded-xl border border-cyan-500/30 mb-5 space-y-3 text-xs text-slate-300 leading-relaxed">
                    <p class="font-semibold text-white">نعتبر الدالة العددية $f$ المعرفة على المجال $I = [1, +\\infty[$ بما يلي: $f(x) = x - \\sqrt[3]{x^3 - 1}$.</p>
                    <ol class="list-decimal list-inside space-y-1.5">
                      <li>بين أن $f$ متصلة على المجال $[1, +\\infty[$. <span class="font-mono text-cyan-400 text-[11px]">(0.25 ن)</span></li>
                      <li>ادرس قابلية اشتقاق $f$ على يمين $1$، ثم أعطِ التأويل الهندسي للنتيجة. <span class="font-mono text-cyan-400 text-[11px]">(0.50 ن)</span></li>
                      <li>احسب نهاية $f$ عند $+\\infty$، واستنتج أن $(C_f)$ يقبل مقارباً أفقياً بجوار $+\\infty$. <span class="font-mono text-cyan-400 text-[11px]">(0.50 ن)</span></li>
                      <li>احسب المشتقة $f'(x)$ لكل $x > 1$ وبين أن $f$ تناقصية قطعاً على $[1, +\\infty[$. <span class="font-mono text-cyan-400 text-[11px]">(0.25 ن)</span></li>
                      <li>بين أن $f$ تقبل دالة عكسية $f^{-1}$ معرفة على مجال $J$ يتم تحديده، ثم حدد صيغتها الصريحة $f^{-1}(x)$ لكل $x \\in J$. <span class="font-mono text-cyan-400 text-[11px]">(0.50 ن)</span></li>
                    </ol>
                  </div>

                  <!-- Collapsible Full Solution -->
                  <div class="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/40">
                    <button onclick="const el = document.getElementById('ax5-synth-solution'); el.classList.toggle('hidden');" class="w-full text-right p-4 bg-slate-900/90 hover:bg-slate-800/90 text-xs font-bold text-cyan-400 flex items-center justify-between transition-colors">
                      <span class="flex items-center gap-2"><span>📝</span> اضغط هنا لإظهار / إخفاء عناصر الإجابة الرسمية وسلم التنقيط الكامل (2.00 نقطة)</span>
                      <span class="text-slate-400 text-[11px]">معاينة عناصر الإجابة ↧</span>
                    </button>
                    
                    <div id="ax5-synth-solution" class="hidden p-5 border-t border-slate-800 space-y-4 text-xs text-slate-300">
                      <!-- 1. Continuity -->
                      <div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                        <div class="flex justify-between font-bold text-amber-300 mb-1">
                          <span>1. اتصال الدالة على $[1, +\\infty[$:</span>
                          <span class="font-mono text-cyan-400">0.25 ن</span>
                        </div>
                        <p>الدالة $x \\mapsto x$ متصلة على $[1, +\\infty[$، والدالة $u(x) = x^3 - 1$ متصلة وموجبة على $[1, +\\infty[$ إذن $\\sqrt[3]{u(x)}$ متصلة على $[1, +\\infty[$. ومنه $f$ متصلة على $[1, +\\infty[$ كفرق دالتين متصلتين.</p>
                      </div>

                      <!-- 2. Derivability at 1 -->
                      <div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                        <div class="flex justify-between font-bold text-amber-300 mb-1">
                          <span>2. الاشتقاق على يمين $1$ والتأويل الهندسي:</span>
                          <span class="font-mono text-cyan-400">0.50 ن</span>
                        </div>
                        <p>لدينا $f(1) = 1 - 0 = 1$. ندرس نسبة التغير:</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$\\lim_{x \\to 1^+} \\frac{f(x) - f(1)}{x - 1} = \\lim_{x \\to 1^+} \\frac{x - 1 - \\sqrt[3]{x^3-1}}{x - 1} = 1 - \\lim_{x \\to 1^+} \\frac{\\sqrt[3]{(x-1)(x^2+x+1)}}{x - 1}$$
                        </div>
                        <p>بما أن $x > 1 \\iff x - 1 > 0$ فإن $x - 1 = \\sqrt[3]{(x-1)^3}$:</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$= 1 - \\lim_{x \\to 1^+} \\sqrt[3]{\\frac{(x-1)(x^2+x+1)}{(x-1)^3}} = 1 - \\lim_{x \\to 1^+} \\sqrt[3]{\\frac{x^2+x+1}{(x-1)^2}} = 1 - \\sqrt[3]{\\frac{3}{0^+}} = 1 - (+\\infty) = -\\infty$$
                        </div>
                        <p class="text-purple-300 font-semibold">التأويل الهندسي: الدالة $f$ غير قابلة للاشتقاق على يمين $1$، ومنحناها $(C_f)$ يقبل نصف مماس عمودي موجه نحو الأسفل في النقطة $A(1, 1)$ (لأن $x \\to 1^+$ وإشارة النتيجة سالب $-\\infty$).</p>
                      </div>

                      <!-- 3. Limit at +infinity -->
                      <div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                        <div class="flex justify-between font-bold text-amber-300 mb-1">
                          <span>3. النهاية عند $+\\infty$ والمقارب الأفقي:</span>
                          <span class="font-mono text-cyan-400">0.50 ن</span>
                        </div>
                        <p>نستعمل المرافق التكعيبي:</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$\\lim_{x \\to +\\infty} f(x) = \\lim_{x \\to +\\infty} \\frac{x^3 - (x^3 - 1)}{x^2 + x\\sqrt[3]{x^3-1} + \\sqrt[3]{(x^3-1)^2}} = \\lim_{x \\to +\\infty} \\frac{1}{x^2 + x\\sqrt[3]{x^3-1} + \\sqrt[3]{(x^3-1)^2}} = 0$$
                        </div>
                        <p class="text-purple-300 font-semibold">التأويل الهندسي: المستقيم ذو المعادلة $y = 0$ (محور الأفاصيل) مقارب أفقي للمنحنى $(C_f)$ بجوار $+\\infty$.</p>
                      </div>

                      <!-- 4. Derivative and Monotonicity -->
                      <div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                        <div class="flex justify-between font-bold text-amber-300 mb-1">
                          <span>4. حساب المشتقة والرتابة القطعية:</span>
                          <span class="font-mono text-cyan-400">0.25 ن</span>
                        </div>
                        <p>لكل $x > 1$:</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$f'(x) = 1 - \\frac{(x^3-1)'}{3\\sqrt[3]{(x^3-1)^2}} = 1 - \\frac{3x^2}{3\\sqrt[3]{(x^3-1)^2}} = \\frac{\\sqrt[3]{(x^3-1)^2} - x^2}{\\sqrt[3]{(x^3-1)^2}}$$
                        </div>
                        <p>بما أن $x^3 - 1 < x^3 \\implies (x^3 - 1)^2 < (x^3)^2 = x^6 \\implies \\sqrt[3]{(x^3-1)^2} < \\sqrt[3]{x^6} = x^2$. إذن البسط سالب قطعا والمقام موجب قطعا، ومنه $f'(x) < 0$ قطعا على $]1, +\\infty[$.</p>
                        <p class="text-emerald-300 font-semibold">إذن الدالة $f$ تناقصية قطعاً على $[1, +\\infty[$.</p>
                      </div>

                      <!-- 5. Bijection and f^{-1}(x) -->
                      <div class="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                        <div class="flex justify-between font-bold text-amber-300 mb-1">
                          <span>5. مبرهنة التقابل والصيغة الصريحة لـ $f^{-1}(x)$:</span>
                          <span class="font-mono text-cyan-400">0.50 ن</span>
                        </div>
                        <p>بما أن $f$ متصلة وتناقصية قطعاً على $I = [1, +\\infty[$، فإنها تقابل من $I$ نحو $J = ]\\lim_{x \\to +\\infty} f(x), f(1)] = ]0, 1]$.</p>
                        <p>ليكن $x \\in ]0, 1]$، نبحث عن $y \\in [1, +\\infty[$ بحيث $f(y) = x$:</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$y - \\sqrt[3]{y^3 - 1} = x \\iff \\sqrt[3]{y^3 - 1} = y - x$$
                        </div>
                        <p>بما أن $y \\ge 1$ و $x \\le 1$ فإن $y - x \\ge 0$. نرفع الطرفين إلى التكعيب:</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$y^3 - 1 = (y - x)^3 = y^3 - 3x y^2 + 3x^2 y - x^3$$
                        </div>
                        <p>نختزل $y^3$ فتتحول إلى معادلة من الدرجة الثانية بالنسبة للمجهول $y$ (بما أن $x > 0$):</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$-1 = -3x y^2 + 3x^2 y - x^3 \\iff 3x y^2 - 3x^2 y + (x^3 - 1) = 0$$
                        </div>
                        <p>نحسب مميز المعادلة $\\Delta$ بدلالة $x \\in ]0, 1]$:</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$\\Delta = (-3x^2)^2 - 4(3x)(x^3 - 1) = 9x^4 - 12x^4 + 12x = 12x - 3x^4 = 3x(4 - x^3) > 0$$
                        </div>
                        <p>تقبل المعادلة حلين: $y_1 = \\frac{3x^2 + \\sqrt{3x(4 - x^3)}}{6x}$ و $y_2 = \\frac{3x^2 - \\sqrt{3x(4 - x^3)}}{6x}$. وبما أن $x \\le 1$، فإن $\\frac{3x^2}{6x} = \\frac{x}{2} \\le \\frac{1}{2} < 1$، ومنه $y_2 < \\frac{1}{2} < 1$ (يُرفض لأن $y \\in [1, +\\infty[$).</p>
                        <div class="p-2 bg-emerald-950/40 border border-emerald-600/40 rounded text-center text-emerald-300 font-mono font-bold">
                          $$\\forall x \\in ]0, 1], \\quad f^{-1}(x) = \\frac{3x^2 + \\sqrt{12x - 3x^4}}{6x} = \\frac{x}{2} + \\frac{\\sqrt{3x(4 - x^3)}}{6x}$$
                        <p class="text-xs text-slate-300 text-center mt-1">(الحل الوحيد المحقق للشرط $y \\ge 1$)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
`);
