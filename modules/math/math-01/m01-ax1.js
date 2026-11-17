window.EulerAcademy.registerAxis('math-01', 'm01-ax1', `

              <div class="space-y-6">
                <!-- 1. Rigorous Definition & Theoretical Foundation -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. المفهوم الرسمي: الاتصال في نقطة $x_0$ (Continuité en un point)</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>
                  <p class="text-sm text-slate-200 leading-relaxed mb-4">
                    لتكن $f$ دالة عددية معرفة على مجال مفتوح $I$ يحتوي على $x_0$ (بحيث $x_0 \\in D_f$). نقول إن الدالة $f$ <b>متصلة في النقطة $x_0$</b> (<i>$f$ est continue en $x_0$</i>) إذا وفقط إذا كانت نهاية $f(x)$ عندما يؤول $x$ إلى $x_0$ تساوي صورتها $f(x_0)$:
                  </p>
                  <div class="bg-slate-950 border border-cyan-500/30 rounded-xl p-4 text-center my-3">
                    $$f \\text{ est continue en } x_0 \\iff \\lim_{x \\to x_0} f(x) = f(x_0)$$
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300 mt-4">
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80">
                      <b class="text-cyan-400 block mb-1">📐 التأويل الهندسي للاتصال:</b>
                      اتصال $f$ في $x_0$ يعني أن منحنى الدالة $(C_f)$ لا ينقطع عند النقطة $M_0(x_0, f(x_0))$، بحيث يمكن رسم المنحنى بجوار $x_0$ بسلاسة دون رفع القلم عن الورقة.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80">
                      <b class="text-amber-400 block mb-1">⚠️ شرط الانتماء الحاسم:</b>
                      لا يمكن الحديث عن الاتصال في نقطة $x_0$ إلا إذا كانت $x_0 \\in D_f$ صراحة. إذا كانت النهاية $\\lim_{x \\to x_0} f(x) = \\ell$ منتهية لكن $x_0 \\notin D_f$، فإن $f$ <b>غير معرفة وبالتالي غير متصلة في $x_0$</b> (إلا إذا أُضيف تعريف قيمة $f(x_0)$ بدالة مجزأة).
                    </div>
                  </div>
                </div>

                <!-- 2. Right and Left Continuity -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">2. الاتصال على اليمين وعلى اليسار في $x_0$ (Continuité à droite et à gauche)</span>
                    <span class="text-xs text-slate-400 font-mono">الدوال المجزأة والمعرفة بتعبيرين</span>
                  </div>
                  <ul class="text-sm text-slate-200 space-y-3 leading-relaxed">
                    <li>
                      • <b>الاتصال على اليمين:</b> لتكن $f$ دالة معرفة على مجال من نوع $[x_0, x_0 + \\alpha[$ مع $\\alpha > 0$. نقول إن $f$ <b>متصلة على اليمين في $x_0$</b> إذا وفقط إذا كان:
                      $$\\lim_{\\substack{x \\to x_0 \\\\ x > x_0}} f(x) = \\lim_{x \\to x_0^+} f(x) = f(x_0)$$
                    </li>
                    <li>
                      • <b>الاتصال على اليسار:</b> لتكن $f$ دالة معرفة على مجال من نوع $]x_0 - \\alpha, x_0]$ مع $\\alpha > 0$. نقول إن $f$ <b>متصلة على اليسار في $x_0$</b> إذا وفقط إذا كان:
                      $$\\lim_{\\substack{x \\to x_0 \\\\ x < x_0}} f(x) = \\lim_{x \\to x_0^-} f(x) = f(x_0)$$
                    </li>
                  </ul>
                  <div class="bg-slate-950 border border-amber-500/30 rounded-xl p-4 mt-4">
                    <p class="text-xs font-bold text-amber-300 mb-1">📌 المبرهنة الأساسية (حاسمة في الدوال المجزأة والدوال بالقيمة المطلقة):</p>
                    <p class="text-xs text-slate-300 mb-2">تكون الدالة $f$ متصلة في النقطة $x_0$ إذا وفقط إذا كانت متصلة على اليمين وعلى اليسار في $x_0$ في آنٍ واحد:</p>
                    $$f \\text{ continue en } x_0 \\iff \\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to x_0^-} f(x) = f(x_0)$$
                    <p class="text-[11px] text-slate-400 mt-2">
                      💡 إذا كانت $\\lim_{x \\to x_0^+} f(x) \\neq \\lim_{x \\to x_0^-} f(x)$، فإن الدالة تقبل قفزة (saut) وغير متصلة في $x_0$.
                    </p>
                  </div>
                </div>

                <!-- 3. Classic Indeterminate Forms & 4 Core Techniques -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">3. الترسانة الجبرية لإزالة أشكال عدم التعيين الأربعة (Techniques de Calcul)</span>
                    <span class="text-xs text-slate-400 font-mono">Formes indéterminées</span>
                  </div>
                  <div class="bg-slate-950 border border-slate-800 rounded-xl p-3 mb-4 text-center text-xs text-slate-300">
                    الأشكال الأربعة غير المحددة رسمياً: 
                    <span class="font-mono text-rose-400 font-bold mx-2">$\\left[\\frac{0}{0}\\right]$</span> •
                    <span class="font-mono text-rose-400 font-bold mx-2">$\\left[\\frac{\\infty}{\\infty}\\right]$</span> •
                    <span class="font-mono text-rose-400 font-bold mx-2">$[+\\infty - \\infty]$</span> •
                    <span class="font-mono text-rose-400 font-bold mx-2">$[0 \\times \\infty]$</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-emerald-400 block mb-1">أ) التعميل بـ $(x - x_0)$ (القسمة الأقليدية أو هورنر):</b>
                      إذا كانت $P(x_0) = 0$ و $Q(x_0) = 0$، نعمل بـ $(x - x_0)$ ثم نختزل:
                      $$\\lim_{x \\to x_0} \\frac{P(x)}{Q(x)} = \\lim_{x \\to x_0} \\frac{(x-x_0)P_1(x)}{(x-x_0)Q_1(x)} = \\frac{P_1(x_0)}{Q_1(x_0)}$$
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">ب) الضرب في المرافق (الرتبتان 2 و 3):</b>
                      عند وجود جذور مربعة أو مكعبة تعطي $\\left[\\frac{0}{0}\\right]$ أو $[+\\infty - \\infty]$:
                      $$(\\sqrt{A} - \\sqrt{B})(\\sqrt{A} + \\sqrt{B}) = A - B$$
                      $$(A - B)(A^2 + AB + B^2) = A^3 - B^3$$
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-violet-400 block mb-1">ج) تقنية العدد المشتق (Technique du nombre dérivé):</b>
                      لحساب نهايات من نوع $\\lim_{x \\to x_0} \\frac{u(x) - u(x_0)}{x - x_0}$ حيث $u$ قابلة للاشتقاق في $x_0$:
                      $$\\lim_{x \\to x_0} \\frac{u(x) - u(x_0)}{x - x_0} = u\x27(x_0)$$
                      مثال: $\\lim_{x \\to 0} \\frac{\\cos x - 1}{x} = \\cos\x27(0) = -\\sin(0) = 0$.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-pink-400 block mb-1">د) النهايات المثلثية الاعتيادية وتغيير المتغير:</b>
                      النهايات المرجعية عند $0$:
                      $$\\lim_{x \\to 0} \\frac{\\sin(ax)}{bx} = \\frac{a}{b} \\quad , \\quad \\lim_{x \\to 0} \\frac{\\tan(ax)}{bx} = \\frac{a}{b} \\quad , \\quad \\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$$
                      وعندما يؤول $x \\to x_0 \\neq 0$ نضع دائماً $X = x - x_0 \\implies X \\to 0$.
                    </div>
                  </div>
                </div>

                <!-- 4. Classic National Exam Traps -->
                <div class="bg-amber-950/20 border border-amber-500/40 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold">⚠️ فخاخ كلاسيكية في الامتحان الوطني (Pièges Classiques)</span>
                    <span class="text-xs text-amber-400 font-mono">احذر فقدان النقط</span>
                  </div>
                  <div class="space-y-3 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-amber-500/20">
                      <b class="text-amber-400 block mb-1">1. فخ القيمة المطلقة وإشارة $x$ عند إخراج $x$ من الجذر:</b>
                      تذكّر دائماً أن $\\sqrt{x^2} = |x|$.<br/>
                      • عندما $x \\to +\\infty$: لدينا $x > 0$ إذن $\\sqrt{x^2} = x$.<br/>
                      • عندما $x \\to -\\infty$: لدينا $x < 0$ إذن <b class="text-rose-400">$\\sqrt{x^2} = |x| = -x$</b>.<br/>
                      نسيان الإشارة السالبة عند $-\\infty$ هو الخطأ الأكثر شيوعاً في الامتحان الوطني!
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-amber-500/20">
                      <b class="text-amber-400 block mb-1">2. فخ الاختيار بين المرافق والتعميل المباشر عند $\\pm\\infty$:</b>
                      لحساب $\\lim_{x \\to +\\infty} \\left(\\sqrt{ax^2+bx+c} - \\alpha x\\right)$ حيث $a>0$ و $\\alpha>0$:<br/>
                      • قارن $\\sqrt{a}$ مع $\\alpha$:<br/>
                      &nbsp;&nbsp;— إذا كان $\\sqrt{a} = \\alpha$: التعميل المباشر يعطي $0 \\times \\infty$ (شكل غير محدد)، لذا <b>المرافق إلزامي حتماً</b>.<br/>
                      &nbsp;&nbsp;— إذا كان $\\sqrt{a} \\neq \\alpha$: <b>التعميل المباشر بـ $x$ كافٍ ومباشر</b>، واستعمال المرافق مضيعة للوقت ومصدر للأخطاء الحسابية.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-amber-500/20">
                      <b class="text-amber-400 block mb-1">3. فخ صياغة الاستنتاج (سلم تنقيط الامتحان الوطني):</b>
                      في تصحيح الامتحان الوطني، تخصص $0.25$ نقطة لكتابة الصياغة الصريحة:<br/>
                      <i>«بما أن $\\lim_{x \\to x_0} f(x) = f(x_0)$، فإن الدالة $f$ متصلة في $x_0$»</i>.<br/>
                      عدم كتابة المقارنة المباشرة مع $f(x_0)$ قد يحرم التلميذ من ربع النقطة حتى لو كانت نهايته صحيحة!
                    </div>
                  </div>
                </div>

                <!-- 5. Concrete Application Problems with Full National Exam Solutions -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">📝 تطبيقات نموذجية محررة بالصياغة الرسمية الكاملة</span>
                    <span class="text-xs text-slate-400 font-mono">معيار الوطني • وسلم التنقيط</span>
                  </div>

                  <!-- Application 1 -->
                  <div class="bg-slate-950 p-5 rounded-2xl border border-slate-800 mb-5">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="text-xs font-bold text-cyan-400">تطبيق 1: دراسة اتصال دالة مجزأة في نقطة مفصلية $x_0 = 1$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نعتبر الدالة العددية $f$ المعرفة على $\\mathbb{R}$ بما يلي:
                      $$f(x) = \\begin{cases} \\dfrac{\\sqrt{x+3} - 2}{x - 1} & \\text{si } x > 1 \\\\ \\dfrac{1}{4} & \\text{si } x = 1 \\\\ \\dfrac{x^2 + 2x - 3}{4(x^2 - 1)} & \\text{si } x < 1 \\end{cases}$$
                      1. ادرس اتصال $f$ على يمين $1$.<br/>
                      2. ادرس اتصال $f$ على يسار $1$.<br/>
                      3. هل الدالة $f$ متصلة في النقطة $1$؟ علل جوابك.
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-3 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 الحل النموذجي بالصياغة المعتمدة في الامتحان الوطني:</p>
                      <div>
                        <b>1. الاتصال على اليمين في $1$:</b><br/>
                        لدينا لكل $x > 1$: تعويض $x=1$ يعطي شكلاً غير محدد $\\left[\\frac{0}{0}\\right]$. نضرب في المرافق:
                        $$\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^+} \\frac{(\\sqrt{x+3}-2)(\\sqrt{x+3}+2)}{(x-1)(\\sqrt{x+3}+2)} = \\lim_{x \\to 1^+} \\frac{(x+3) - 4}{(x-1)(\\sqrt{x+3}+2)}$$
                        $$= \\lim_{x \\to 1^+} \\frac{x-1}{(x-1)(\\sqrt{x+3}+2)} = \\lim_{x \\to 1^+} \\frac{1}{\\sqrt{x+3}+2} = \\frac{1}{\\sqrt{4}+2} = \\frac{1}{4}$$
                        وبما أن $f(1) = \\frac{1}{4}$، فإن:
                        $$\\lim_{x \\to 1^+} f(x) = f(1)$$
                        ومنه فإن <b>الدالة $f$ متصلة على اليمين في النقطة $1$</b>. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      </div>
                      <div>
                        <b>2. الاتصال على اليسار في $1$:</b><br/>
                        لكل $x < 1$: تعويض $x=1$ يعطي $\\left[\\frac{0}{0}\\right]$. نعمل بالمتطابقات الهامة:
                        $$x^2 + 2x - 3 = (x-1)(x+3) \\quad \\text{et} \\quad x^2 - 1 = (x-1)(x+1)$$
                        إذن:
                        $$\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^-} \\frac{(x-1)(x+3)}{4(x-1)(x+1)} = \\lim_{x \\to 1^-} \\frac{x+3}{4(x+1)} = \\frac{1+3}{4(1+1)} = \\frac{4}{8} = \\frac{1}{2}$$
                        وبما أن $f(1) = \\frac{1}{4} \\neq \\frac{1}{2}$، فإن:
                        $$\\lim_{x \\to 1^-} f(x) \\neq f(1)$$
                        ومنه فإن <b>الدالة $f$ غير متصلة على اليسار في النقطة $1$</b>. <span class="text-emerald-400 font-mono">(0.25 ن)</span>
                      </div>
                      <div>
                        <b>3. الاستنتاج حول الاتصال في $1$:</b><br/>
                        بما أن الدالة $f$ غير متصلة على اليسار في النقطة $1$ (لأن $\\lim_{x \\to 1^-} f(x) \\neq \\lim_{x \\to 1^+} f(x)$)، فإن:
                        <b>الدالة $f$ غير متصلة في النقطة $1$</b>. <span class="text-emerald-400 font-mono">(0.25 ن)</span>
                      </div>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="text-xs font-bold text-cyan-400">تطبيق 2: حساب نهاية بجوار $-\\infty$ وضبط إشارة الجذر</h6>
                      <span class="text-[11px] text-slate-400 font-mono">0.75 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      احسب النهاية التالية معللاً جوابك:
                      $$\\lim_{x \\to -\\infty} \\left( \\sqrt{4x^2 - 2x + 1} + 3x \\right)$$
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-3 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 خطوات الحل المنهجي:</p>
                      <div>
                        <b>1. تحديد الاستراتيجية المناسبة:</b><br/>
                        لدينا بجوار $-\\infty$: معامل $x^2$ داخل الجذر هو $a = 4 \\implies \\sqrt{a} = 2$.<br/>
                        ومعامل $x$ في الخارج هو $+3$. بما أن $\\sqrt{4} \\neq |-3|$ (أي $2 \\neq 3$)، فإن <b>التعميل المباشر بـ $x$ كافٍ لإزالة عدم التعيين</b> دون الحاجة للمرافق!
                      </div>
                      <div>
                        <b>2. التعميل وضبط الإشارة:</b><br/>
                        لكل $x < 0$:
                        $$\\sqrt{4x^2 - 2x + 1} = \\sqrt{x^2 \\left(4 - \\frac{2}{x} + \\frac{1}{x^2}\\right)} = |x| \\sqrt{4 - \\frac{2}{x} + \\frac{1}{x^2}}$$
                        وبما أن $x < 0$ بجوار $-\\infty$، فإن $|x| = -x$. ومنه:
                        $$\\sqrt{4x^2 - 2x + 1} + 3x = -x \\sqrt{4 - \\frac{2}{x} + \\frac{1}{x^2}} + 3x = x \\left( 3 - \\sqrt{4 - \\frac{2}{x} + \\frac{1}{x^2}} \\right)$$
                      </div>
                      <div>
                        <b>3. حساب النهاية:</b><br/>
                        لدينا $\\lim_{x \\to -\\infty} \\frac{2}{x} = 0$ و $\\lim_{x \\to -\\infty} \\frac{1}{x^2} = 0$، إذن:
                        $$\\lim_{x \\to -\\infty} \\left( 3 - \\sqrt{4 - \\frac{2}{x} + \\frac{1}{x^2}} \\right) = 3 - \\sqrt{4} = 3 - 2 = 1 > 0$$
                        وبما أن $\\lim_{x \\to -\\infty} x = -\\infty$ وجداء $(-\\infty) \\times 1 = -\\infty$، فإن:
                        $$\\lim_{x \\to -\\infty} \\left( \\sqrt{4x^2 - 2x + 1} + 3x \\right) = -\\infty$$
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 6. Interactive Auto-Test (Collapsible) -->
                <div class="bg-cyan-950/20 border border-cyan-500/30 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Test)</span>
                    <span class="text-xs text-slate-400">اختبر استيعابك للمحور</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    لتكن الدالة $g$ المعرفة على $\\mathbb{R}^*$ بـ $g(x) = \\dfrac{\\sin(3x)}{x}$، ونضع $g(0) = a$. ما هي قيمة العدد الحقيقي $a$ لكي تكون الدالة $g$ متصلة في النقطة $0$؟
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center justify-between select-none">
                      <span>👁️ انقر هنا لمعاينة الحل المنهجي والتحقق من إجابتك</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="px-4 pb-4 pt-2 border-t border-slate-800 text-xs text-slate-300 leading-relaxed space-y-2">
                      <p>• تكون $g$ متصلة في $0$ إذا وفقط إذا كان: $\\lim_{x \\to 0} g(x) = g(0) = a$.</p>
                      <p>• نحسب النهاية: نكتب $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x} = \\lim_{x \\to 0} 3 \\times \\frac{\\sin(3x)}{3x}$.</p>
                      <p>• بوضع $X = 3x$، عندما $x \\to 0$ فإن $X \\to 0$. وبما أن $\\lim_{X \\to 0} \\frac{\\sin X}{X} = 1$، فإن $\\lim_{x \\to 0} g(x) = 3 \\times 1 = 3$.</p>
                      <p class="text-emerald-400 font-bold">✓ إذن لكي تكون $g$ متصلة في النقطة $0$، يجب أن نختار: $a = 3$ بحيث $\\lim_{x \\to 0} g(x) = g(0)$.</p>
                    </div>
                  </details>
                </div>
              </div>
`);
