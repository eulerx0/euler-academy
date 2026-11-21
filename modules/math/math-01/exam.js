window.EulerAcademy.registerExam('math-01', `

        <!-- Master Exam Bank: Devoir Surveillé Blanc N°1 (20/20) -->
        <div id="masterExam" class="scroll-mt-28 glass rounded-3xl p-6 sm:p-8 border border-amber-500/40 bg-slate-900/90 shadow-2xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div class="flex items-center gap-2 mb-1.5">
                <span class="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  الفرض المحروس التجريبي الشامل N°1 • معيار د. الرياح
                </span>
                <span class="text-xs text-slate-400 font-mono">Devoir Surveillé N°1 Blanc (20/20)</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white">
                امتحان توليفي شامل في دراسة الاتصال، مبرهنة TVI، الدالة العكسية، والجذور النونية
              </h3>
            </div>
            <div class="flex items-center gap-3">
              <span class="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400 font-bold">
                المدة: ساعتان (2h00)
              </span>
              <span class="px-3.5 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold">
                النقطة: 20 / 20
              </span>
            </div>
          </div>

          <p class="text-xs text-slate-300 leading-relaxed">
            هذا الفرض المحروس التجريبي مصمم وفق أعلى معايير الصرامة البيداغوجية لفروض التميز بثانوية الحسن الثاني التأهيلية ومطابق للإطار المرجعي للامتحان الوطني للباكالوريا مسلك العلوم الفيزيائية (2BAC PC). يهدف لاختبار الجاهزية الرياضية المطلقة والقدرة على التحرير البرهاني السليم بدون أي ضياع للنقط.
          </p>

          <!-- Exam Paper: 4 Exercises -->
          <div class="space-y-5">
            <!-- Exercice 1 -->
            <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-cyan-400">التمرين الأول (4.00 نقط): حساب النهايات المعقدة وإزالة عدم التعيين</span>
                <span class="font-mono text-xs text-slate-400">4.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300">احسب النهايات التالية مع تعليل كل خطوة:</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                  <span class="text-slate-400 block mb-1 font-sans">1. نهاية كسرية بجذر تكعيبي:</span>
                  <div class="text-center text-cyan-300">$$L_1 = \\lim_{x \\to 1} \\frac{\\sqrt[3]{x} - 1}{x^2 + x - 2}$$</div>
                </div>
                <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                  <span class="text-slate-400 block mb-1 font-sans">2. نهاية بالمرافق التكعيبي:</span>
                  <div class="text-center text-cyan-300">$$L_2 = \\lim_{x \\to +\\infty} (\\sqrt[3]{x^3 + 6x^2} - x)$$</div>
                </div>
                <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                  <span class="text-slate-400 block mb-1 font-sans">3. نهاية بالتعميل المباشر:</span>
                  <div class="text-center text-cyan-300">$$L_3 = \\lim_{x \\to +\\infty} (\\sqrt[3]{27x^3 + 2x} - 2x)$$</div>
                </div>
                <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                  <span class="text-slate-400 block mb-1 font-sans">4. تقنية الفصل وإضافة وطرح 1:</span>
                  <div class="text-center text-cyan-300">$$L_4 = \\lim_{x \\to 0} \\frac{\\sqrt{1+x} - \\sqrt[3]{1+x}}{x}$$</div>
                </div>
              </div>
            </div>

            <!-- Exercice 2 -->
            <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-purple-400">التمرين الثاني (4.50 نقط): الاتصال في نقطة ولدالة مجزأة على $\\mathbb{R}$</span>
                <span class="font-mono text-xs text-slate-400">4.50 نقط</span>
              </div>
              <p class="text-xs text-slate-300">لتكن $f$ الدالة المعرفة على $\\mathbb{R}$ بما يلي:</p>
              <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-center font-mono text-purple-300 text-xs">
                $$f(x) = \\begin{cases} \\frac{\\sqrt{x^2+3} - 2}{x - 1} & \\text{si } x > 1 \\\\ x^3 + ax + \\frac{1}{2} & \\text{si } x \\le 1 \\end{cases}$$
              </div>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>احسب النهاية على اليمين $\\lim_{x \\to 1^+} f(x)$ واستنتج $f(1)$ لكي تكون $f$ متصلة على اليمين في $1$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>حدد قيمة الثابت الحقيقي $a$ بحيث تكون الدالة $f$ متصلة في النقطة $x_0 = 1$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>نضع في ما يلي $a = -1$:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) بين أن $f$ متصلة على المجال $]1, +\\infty[$، ثم بين أنها متصلة على المجال $]-\\infty, 1]$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                    <p>ب) استنتج أن الدالة $f$ متصلة على $\\mathbb{R}$ كاملاً. <span class="font-mono text-cyan-400 text-[11px]">(0.50 ن)</span></p>
                    <p>ج) بين أن المعادلة $f(x) = 0$ تقبل حلاً على الأقل في المجال $]-2, -1[$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                  </div>
                </li>
              </ol>
            </div>

            <!-- Exercice 3 -->
            <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-amber-400">التمرين الثالث (4.50 نقط): مبرهنة القيم الوسيطية، التفرع الثنائي، وجدول الإشارة</span>
                <span class="font-mono text-xs text-slate-400">4.50 نقط</span>
              </div>
              <p class="text-xs text-slate-300">لتكن $g$ الدالة العددية المعرفة على $\\mathbb{R}$ بما يلي: $g(x) = 2x^3 + 3x - 2$.</p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>احسب المشتقة $g'(x)$ لكل $x \\in \\mathbb{R}$، وبين أن الدالة $g$ تزايدية قطعاً على $\\mathbb{R}$. <span class="font-mono text-cyan-400 text-[11px]">(0.75 ن)</span></li>
                <li>بين أن المعادلة $g(x) = 0$ تقبل حلاً وحيداً $\\alpha \\in \\mathbb{R}$، وتحقق أن $0.5 < \\alpha < 1$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>باستعمال خوارزمية التفرع الثنائي (Dichotomie)، حدد تأطيراً للجذر $\\alpha$ سعته $0.25$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>حدد إشارة $g(x)$ على $\\mathbb{R}$ حسب قيم $x$ وضع جدول إشارتها بدقة. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 4 (Problème de Synthèse) -->
            <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-emerald-400">المسألة التوليفية الكبرى (7.00 نقط): التقابل، الدالة العكسية $h^{-1}$، والاشتقاق</span>
                <span class="font-mono text-xs text-slate-400">7.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300">نعتبر الدالة $h$ المعرفة على المجال $I = [0, +\\infty[$ بـ: $h(x) = x + 2\\sqrt{x}$.</p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>بين أن الدالة $h$ متصلة وتزايدية قطعاً على $[0, +\\infty[$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>ادرس قابلية اشتقاق $h$ على يمين $0$، ثم أعطِ التأويل الهندسي للنتيجة في النقطة $O(0, 0)$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>بين أن $h$ تقبل دالة عكسية $h^{-1}$ معرفة على مجال $J$ يتم تحديده. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>حدد الصيغة الصريحة للدالة العكسية $h^{-1}(x)$ لكل $x \\in J$ باستعمال الشكل النموذجي. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>أثبت أن $h^{-1}$ قابلة للاشتقاق في النقطة $y_0 = 3$، واحسب $(h^{-1})'(3)$ بطريقتين مختلفتين. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>ضع جدول تغيرات $h^{-1}$ واستنتج التأويل الهندسي لنصف المماس لـ $(C_{h^{-1}})$ في النقطة $O(0, 0)$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
              </ol>
            </div>
          </div>

          <!-- Collapsible Master Solution & Marking Scheme -->
          <div class="border border-amber-500/30 rounded-2xl overflow-hidden bg-slate-950/90 mt-6">
            <button onclick="window.EulerAcademy.toggleCollapsible('ds1-master-solution', this);" class="w-full text-right p-4 sm:p-5 bg-gradient-to-r from-amber-500/20 via-slate-900 to-cyan-500/20 hover:from-amber-500/30 text-xs sm:text-sm font-bold text-amber-300 flex items-center justify-between transition">
              <span class="flex items-center gap-2">
                <span>🏆</span>
                <span>اضغط هنا لعرض عناصر الإجابة الرسمية والحل البرهاني الكامل وسلم التنقيط (20 / 20)</span>
              </span>
              <span class="text-xs text-slate-400">معاينة الحل الكامل ↧</span>
            </button>

            <div id="ds1-master-solution" class="hidden p-5 sm:p-6 border-t border-slate-800 space-y-6 text-xs text-slate-300 leading-relaxed">
              <!-- Solution Ex 1 -->
              <div class="space-y-3">
                <div class="text-cyan-400 font-bold text-sm border-b border-slate-800 pb-1">حل التمرين الأول: حساب النهايات (4.00 نقط)</div>
                <div class="space-y-2">
                  <p><strong>1. نهاية $L_1$:</strong> نعمل البسط بالمرافق التكعيبي والمقام بالتعميل: $x^2+x-2 = (x-1)(x+2)$.</p>
                  <div class="font-mono text-cyan-300 p-2 bg-slate-900 rounded">
                    $$L_1 = \\lim_{x \\to 1} \\frac{x - 1}{(\\sqrt[3]{x^2} + \\sqrt[3]{x} + 1)(x - 1)(x + 2)} = \\lim_{x \\to 1} \\frac{1}{(\\sqrt[3]{x^2} + \\sqrt[3]{x} + 1)(x + 2)} = \\frac{1}{(3)(3)} = \\frac{1}{9}$$
                  </div>
                  <p><strong>2. نهاية $L_2$:</strong> بما أن $\\sqrt[3]{1} = 1 = \\alpha$، نستعمل المرافق التكعيبي:</p>
                  <div class="font-mono text-cyan-300 p-2 bg-slate-900 rounded">
                    $$L_2 = \\lim_{x \\to +\\infty} \\frac{(x^3+6x^2) - x^3}{\\sqrt[3]{(x^3+6x^2)^2} + x\\sqrt[3]{x^3+6x^2} + x^2} = \\lim_{x \\to +\\infty} \\frac{6x^2}{x^2[\\sqrt[3]{(1+6/x)^2} + \\sqrt[3]{1+6/x} + 1]} = \\frac{6}{3} = 2$$
                  </div>
                  <p><strong>3. نهاية $L_3$:</strong> بما أن $\\sqrt[3]{27} = 3 \\neq 2 = \\alpha$، نعمّل مباشرة بـ $x$:</p>
                  <div class="font-mono text-cyan-300 p-2 bg-slate-900 rounded">
                    $$L_3 = \\lim_{x \\to +\\infty} x\\left(\\sqrt[3]{27 + \\frac{2}{x^2}} - 2\\right) = +\\infty \\times (3 - 2) = +\\infty$$
                  </div>
                  <p><strong>4. نهاية $L_4$:</strong> نفصل النهاية بإضافة وطرح $1$ في البسط، ونضع $u(x) = \\sqrt{1+x}$ و $v(x) = \\sqrt[3]{1+x}$ (قابلتين للاشتقاق عند $0$ مع $u(0)=v(0)=1$):</p>
                  <div class="font-mono text-cyan-300 p-2 bg-slate-900 rounded">
                    $$L_4 = \\lim_{x \\to 0} \\left[ \\frac{u(x) - u(0)}{x - 0} - \\frac{v(x) - v(0)}{x - 0} \\right] = u'(0) - v'(0) = \\frac{1}{2\\sqrt{1}} - \\frac{1}{3\\sqrt[3]{1}} = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$$
                  </div>
                </div>
              </div>

              <!-- Solution Ex 2 -->
              <div class="space-y-3 pt-3 border-t border-slate-800">
                <div class="text-purple-400 font-bold text-sm border-b border-slate-800 pb-1">حل التمرين الثاني: الاتصال في نقطة ولدالة مجزأة (4.50 نقط)</div>
                <div class="space-y-2">
                  <p><strong>1. حساب $\\lim_{x \\to 1^+} f(x)$ واستنتاج $f(1)$:</strong> نستعمل الضرب في المرافق:</p>
                  <div class="font-mono text-purple-300 p-2 bg-slate-900 rounded">
                    $$\\lim_{x \\to 1^+} \\frac{(x^2+3) - 4}{(x-1)(\\sqrt{x^2+3} + 2)} = \\lim_{x \\to 1^+} \\frac{(x-1)(x+1)}{(x-1)(\\sqrt{x^2+3} + 2)} = \\lim_{x \\to 1^+} \\frac{x+1}{\\sqrt{x^2+3} + 2} = \\frac{2}{4} = \\frac{1}{2}$$
                  </div>
                  <p>ولكي تكون $f$ متصلة على اليمين في $1$، يجب أن يتحقق: $f(1) = \\lim_{x \\to 1^+} f(x) = \\frac{1}{2}$.</p>
                  <p><strong>2. قيمة $a$ لضمان الاتصال في $1$:</strong> الدالة $f$ معرفة على $]-\\infty, 1]$ بالحدودية $x^3 + ax + \\frac{1}{2}$ المتصلة على $\\mathbb{R}$ وبالخصوص على يسار $1$، إذن $\\lim_{x \\to 1^-} f(x) = f(1) = 1^3 + a(1) + \\frac{1}{2} = a + \\frac{3}{2}$.</p>
                  <p>تكون $f$ متصلة في $1$ إذا وفقط إذا كان $\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^-} f(x) = f(1) \\iff \\frac{1}{2} = a + \\frac{3}{2} \\iff a = -1$.</p>
                  <p><strong>3. الاتصال على المجالات و TVI:</strong></p>
                  <p>• على $]1, +\\infty[$: الدالة $x \\mapsto \\sqrt{x^2+3} - 2$ متصلة لأن $x \\mapsto x^2 + 3$ حدودية متصلة وموجبة قطعاً على $]1, +\\infty[$ (بما أن $x^2 + 3 \\ge 3 > 0$)، والدالة $x \\mapsto x - 1$ متصلة ولا تنعدم على $]1, +\\infty[$، إذن $f$ متصلة كخارج دالتين متصلتين.</p>
                  <p>• على $]-\\infty, 1]$: الدالة $f(x) = x^3 - x + 1/2$ حدودية، إذن متصلة على $\\mathbb{R}$ وبالخصوص على $]-\\infty, 1]$.</p>
                  <p>• بما أن $f$ متصلة في $1$ ومتصلة على $]-\\infty, 1]$ وعلى $[1, +\\infty[$، فإنها متصلة على $\\mathbb{R}$ كاملاً.</p>
                  <p>• تطبيق مبرهنة القيم الوسيطية (TVI) على القطعة $[-2, -1]$: الدالة $f$ متصلة على $[-2, -1]$ لأنها حدودية على $]-\\infty, 1]$. ولدينا $f(-2) = (-2)^3 - (-2) + \\frac{1}{2} = -\\frac{11}{2} = -5.5 < 0$ و $f(-1) = (-1)^3 - (-1) + \\frac{1}{2} = \\frac{1}{2} > 0$. بما أن $f(-2) \\times f(-1) < 0$، فإن المعادلة $f(x) = 0$ تقبل حلاً على الأقل في المجال المفتوح $]-2, -1[$.</p>
                </div>
              </div>

              <!-- Solution Ex 3 -->
              <div class="space-y-3 pt-3 border-t border-slate-800">
                <div class="text-amber-400 font-bold text-sm border-b border-slate-800 pb-1">حل التمرين الثالث: TVI والتفرع الثنائي (4.50 نقط)</div>
                <div class="space-y-2">
                  <p><strong>1. الرتابة:</strong> $g'(x) = 6x^2 + 3 > 0$ قطعا، إذن $g$ متصلة وتزايدية قطعاً على $\\mathbb{R}$.</p>
                  <p><strong>2. وجود ووحدانية الحل $\\alpha$:</strong> بما أن $g$ متصلة وتزايدية قطعاً على $\\mathbb{R}$، و $g(\\mathbb{R}) = ]-\\infty, +\\infty[ = \\mathbb{R}$، وبما أن $0 \\in \\mathbb{R}$، فإن المعادلة تقبل حلاً وحيداً $\\alpha \\in \\mathbb{R}$.</p>
                  <p>لدينا: $g(0.5) = 2(0.125) + 3(0.5) - 2 = 0.25 + 1.5 - 2 = -0.25 < 0$ و $g(1) = 2 + 3 - 2 = 3 > 0$. بما أن $g(0.5) \\times g(1) < 0$، فإن $0.5 < \\alpha < 1$.</p>
                  <p><strong>3. التفرع الثنائي (سعة 0.25):</strong> مركز $[0.5, 1]$ هو $m_1 = 0.75$. نحسب $g(0.75) = 2(0.75)^3 + 3(0.75) - 2 = 0.84375 + 2.25 - 2 = 1.09375 > 0$.</p>
                  <p>بما أن $g(0.5) < 0$ و $g(0.75) > 0$، فإن: $0.5 < \\alpha < 0.75$ (بسعة $0.75 - 0.5 = 0.25$).</p>
                  <p><strong>4. جدول الإشارة:</strong> بما أن $g$ تزايدية قطعاً وتنعدم في $\\alpha$:</p>
                  <p>• لكل $x \\le \\alpha$: $g(x) \\le g(\\alpha) = 0 \\implies g(x) \\le 0$.</p>
                  <p>• لكل $x \\ge \\alpha$: $g(x) \\ge g(\\alpha) = 0 \\implies g(x) \\ge 0$.</p>
                </div>
              </div>

              <!-- Solution Ex 4 -->
              <div class="space-y-3 pt-3 border-t border-slate-800">
                <div class="text-emerald-400 font-bold text-sm border-b border-slate-800 pb-1">حل المسألة التوليفية الكبرى: التقابل والدالة العكسية (7.00 نقط)</div>
                <div class="space-y-2">
                  <p><strong>1. الاتصال والرتابة:</strong> الدالة $x \\mapsto x$ متصلة وتزايدية قطعاً، و $x \\mapsto 2\\sqrt{x}$ متصلة وتزايدية قطعاً على $[0, +\\infty[$، إذن $h$ متصلة وتزايدية قطعاً على $[0, +\\infty[$.</p>
                  <p><strong>2. الاشتقاق في 0 على اليمين:</strong> لدينا $h(0) = 0$. سندرس نسبة التغير:</p>
                  <div class="font-mono text-emerald-300 p-2 bg-slate-900 rounded">
                    $$\\lim_{x \\to 0^+} \\frac{h(x) - h(0)}{x - 0} = \\lim_{x \\to 0^+} \\frac{x + 2\\sqrt{x}}{x} = \\lim_{x \\to 0^+} \\left(1 + \\frac{2}{\\sqrt{x}}\\right) = 1 + (+\\infty) = +\\infty$$
                  </div>
                  <p>التأويل الهندسي: $h$ غير قابلة للاشتقاق على يمين $0$، ومنحناها $(C_h)$ يقبل نصف مماس عمودي موجه نحو الأعلى في النقطة $O(0, 0)$.</p>
                  <p><strong>3. التقابل وتحديد $J$:</strong> $J = h([0, +\\infty[) = [h(0), \\lim_{x \\to +\\infty} h(x)[ = [0, +\\infty[$.</p>
                  <p><strong>4. تحديد صيغة $h^{-1}(x)$:</strong> ليكن $x \\in [0, +\\infty[$، نبحث عن $y \\in [0, +\\infty[$ بحيث $h(y) = x$:</p>
                  <div class="font-mono text-emerald-300 p-2 bg-slate-900 rounded">
                    $$y + 2\\sqrt{y} = x \\iff (\\sqrt{y})^2 + 2\\sqrt{y} + 1 = x + 1 \\iff (\\sqrt{y} + 1)^2 = x + 1$$
                  </div>
                  <p>بما أن $x \\ge 0 \\implies x + 1 \\ge 1 > 0$ وبما أن $\\sqrt{y} + 1 > 0$، فإن:</p>
                  <div class="font-mono text-emerald-300 p-2 bg-slate-900 rounded font-bold">
                    $$\\sqrt{y} + 1 = \\sqrt{x + 1} \\iff \\sqrt{y} = \\sqrt{x + 1} - 1 \\iff y = (\\sqrt{x + 1} - 1)^2$$
                  </div>
                  <p>إذن لكل $x \\in [0, +\\infty[$: $h^{-1}(x) = (\\sqrt{x + 1} - 1)^2$.</p>
                  <p><strong>5. اشتقاق $h^{-1}$ في النقطة 3:</strong></p>
                  <p>• الطريقة 1 (مبرهنة اشتقاق الدالة العكسية): نلاحظ أن $h(1) = 1 + 2(1) = 3 \\implies h^{-1}(3) = 1$. وبما أن $h$ قابلة للاشتقاق على $]0, +\\infty[$ وبالخصوص في $1$، ومشتقتها $h'(x) = 1 + \\frac{1}{\\sqrt{x}}$ تحقق $h'(1) = 1 + 1 = 2 \\neq 0$، فإن $h^{-1}$ قابلة للاشتقاق في $3$ ولدينا: $(h^{-1})'(3) = \\frac{1}{h'(1)} = \\frac{1}{2}$.</p>
                  <p>• الطريقة 2 (بالحساب المباشر من الصيغة): $h^{-1}$ قابلة للاشتقاق على $[0, +\\infty[$ لأن $x+1 > 0$، ولدينا $(h^{-1})'(x) = 2(\\sqrt{x+1}-1) \\times \\frac{1}{2\\sqrt{x+1}} = 1 - \\frac{1}{\\sqrt{x+1}}$.</p>
                  <p>إذن $(h^{-1})'(3) = 1 - \\frac{1}{\\sqrt{4}} = 1 - \\frac{1}{2} = \\frac{1}{2}$. النتيجتان متطابقتان تماماً!</p>
                  <p><strong>6. جدول تغيرات $h^{-1}$ والتأويل الهندسي في النقطة $O(0, 0)$:</strong></p>
                  <p>بما أن $h$ متصلة وتزايدية قطعاً على $I = [0, +\\infty[$، فإن $h^{-1}$ تحفظ نفس منحى التغيرات (تزايدية قطعاً على $J = [0, +\\infty[$): تنطلق من $h^{-1}(0) = 0$ نحو $\\lim_{x \\to +\\infty} h^{-1}(x) = +\\infty$.</p>
                  <p>• <b>التأويل الهندسي:</b> بما أن $(C_h)$ يقبل نصف مماس عمودي موجه للأعلى في $O(0,0)$، فإن منحنى الدالة العكسية $(C_{h^{-1}})$ المماثل له بالنسبة للمستقيم $(\\Delta): y=x$ يقبل <b>نصف مماس أفقي موجه نحو اليمين</b> في $O(0, 0)$ (وهو ما تؤكده كذلك المشتقة $(h^{-1})'(0) = 1 - 1 = 0$).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
`);
