/**
 * 🏛️ EULER ACADEMY — Official 2BAC PC (Option Sciences Physiques) Curriculum Database
 * Strictly aligned 100% with the Moroccan Ministry of National Education Syllabus &
 * Cadre de Référence for 2ème Année Baccalauréat — Filière Sciences Physiques (2BAC PC).
 * Zero SM-only or SVT-only confusion.
 */

window.EULER_CURRICULUM = {
  math: {
    id: 'math',
    titleAr: 'الرياضيات',
    titleFr: 'Mathématiques',
    badge: '2BAC PC • المعامل 7',
    color: 'cyan',
    description: 'المنهاج الرسمي الكامل لمادة الرياضيات خاص حصرياً بمسلك العلوم الفيزيائية (2BAC PC) وفق الإطار المرجعي للامتحان الوطني الموحد (12 درساً رسمياً).',
    lessons: [
      {
        id: 'math-01',
        num: '01',
        semester: 1,
        status: 'active',
        progressText: 'جميع المحاور الـ 5 مكتملة بالبرهان الصارم والتمارين التوليفية (100%)',
        titleAr: 'الاتصال ونهايات دالة عددية',
        titleFr: 'Continuité et limites d’une fonction numérique',
        summary: 'الاتصال في نقطة وعلى اليمين واليسار، الاتصال على مجال، صورة مجال، مبرهنة القيم الوسيطية (TVI)، الدالة العكسية، ودالة الجذر من الرتبة n.',
        axes: [
          {
            id: 'm01-ax1',
            num: 'المحور 01',
            titleAr: 'حساب النهايات، الاتصال في نقطة، والاتصال على اليمين وعلى اليسار',
            titleFr: 'Calcul de limites, continuité en un point, à droite et à gauche',
            status: 'completed',
            requirements: [
              'حساب نهايات الدوال الحدودية، الجذرية، اللاجذرية، والمثلثية وإزالة أشكال عدم التعيين ($\\frac{0}{0}, \\frac{\\infty}{\\infty}, +\\infty - \\infty, 0 \\times \\infty$) بالتعميل أو المرافق أو العدد المشتق.',
              'دراسة اتصال دالة عددية في نقطة $x_0 \\in D_f$ باستعمال التعريف الرسمي $\\lim_{x \\to x_0} f(x) = f(x_0)$.',
              'دراسة الاتصال على اليمين والاتصال على اليسار في نقطة مفصلية $x_0$ (خصوصاً للدوال المعرفة بأجزاء) واستنتاج الاتصال في $x_0$.'
            ],
            contentHtml: `
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
                      لا يمكن الحديث عن الاتصال في نقطة $x_0$ إلا إذا كانت $x_0 \\in D_f$ صراحة. إذا كانت النهاية $\\lim_{x \\to x_0} f(x) = \\ell$ منتهية لكن $x_0 \\notin D_f$، فالدالة <b>غير متصلة في $x_0$</b> بل تقبل <i>تمديداً بالاتصال</i>.
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
                      <p class="text-emerald-400 font-bold">✓ إذن لكي تكون $g$ متصلة في $0$، يجب أن نختار: $a = 3$. (وهذا هو التمديد بالاتصال للدالة $x \\mapsto \\frac{\\sin 3x}{x}$ في $0$).</p>
                    </div>
                  </details>
                </div>
              </div>
            `
          },
          {
            id: 'm01-ax2',
            num: 'المحور 02',
            titleAr: 'الاتصال على مجال، العمليات على الدوال المتصلة، وتركيب دالتين',
            titleFr: 'Continuité sur un intervalle, opérations et composée de deux fonctions',
            status: 'completed',
            requirements: [
              'تعريف الاتصال على مجال مفتوح $]a,b[$ وعلى مجال مغلق $[a,b]$ (الاتصال على $]a,b[$ + الاتصال على يمين $a$ وعلى يسار $b$).',
              'توظيف اتصال الدوال الاعتيادية (الحدوديات، الجذرية، المثلثية $\\cos x, \\sin x, \\tan x$، ودالة الجذر المربع $\\sqrt{x}$) والعمليات عليها لتعليل اتصال دالة على مجال.',
              'مبرهنة اتصال مركب دالتين $g \\circ f$ على مجال $I$ مع التحقق الصريح من شرط التضمن $f(I) \\subset J$.'
            ],
            contentHtml: `
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
                    <p class="font-bold text-pink-300 mb-2">📌 المبرهنة الأساسية الحادية (مبرهنة الاتصال بالتركيب):</p>
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
            `
          },
          {
            id: 'm01-ax3',
            num: 'المحور 03',
            titleAr: 'صورة مجال بدالة متصلة ومبرهنة القيم الوسيطية (TVI) والتفرع الثنائي',
            titleFr: 'Image d’un intervalle, Théorème des Valeurs Intermédiaires et Dichotomie',
            status: 'completed',
            requirements: [
              'تحديد صورة قطعة أو مجال بدالة متصلة ورتيبة قطعاً حسب جدول التغيرات والنهايات عند المحدات.',
              'تطبيق مبرهنة القيم الوسيطية لإثبات وجود حل على الأقل (أو حل وحيد $\\alpha$ في حالة الرتابة القطعية) للمعادلة $f(x) = 0$ على مجال.',
              'تأطير الحل الوحيد $\\alpha$ باستعمال طريقة التفرع الثنائي (Dichotomie) واستنتاج إشارة $f(x)$ على المجال.'
            ],
            contentHtml: `
              <div class="space-y-6">
                <!-- 1. Theoretical Foundation & Interval Images -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                    <button onclick="const el = document.getElementById('ax3-solution'); el.classList.toggle('hidden');" class="w-full text-right p-3.5 bg-slate-900/80 hover:bg-slate-800/80 text-xs font-bold text-cyan-400 flex items-center justify-between transition-colors">
                      <span class="flex items-center gap-2"><span>👁️</span> اضغط هنا لإظهار / إخفاء الحل النموذجي المفصل وسلم التنقيط</span>
                      <span class="text-slate-400 text-[11px]">انقر للمعاينة</span>
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                    <button onclick="const el = document.getElementById('ax3-synth-solution'); el.classList.toggle('hidden');" class="w-full text-right p-4 bg-slate-900/90 hover:bg-slate-800/90 text-xs font-bold text-cyan-400 flex items-center justify-between transition-colors">
                      <span class="flex items-center gap-2"><span>📝</span> اضغط هنا لإظهار / إخفاء عناصر الإجابة الرسمية والتحرير البرهاني الصارم (2.00 نقطة)</span>
                      <span class="text-slate-400 text-[11px]">معاينة عناصر الإجابة النموذجية ↧</span>
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
                            <span>2. منحنى التغيرات وجدول تغيرات $f$:</span>
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
`
          },
          {
            id: 'm01-ax4',
            num: 'المحور 04',
            titleAr: 'الدالة العكسية لدالة متصلة ورتيبة قطعاً على مجال',
            titleFr: 'Fonction réciproque d’une fonction continue et strictement monotone',
            status: 'completed',
            requirements: [
              'إثبات أن الدالة $f$ تقبل دالة عكسية $f^{-1}$ معرفة على مجال $J = f(I)$ يتم تحديده بدقة.',
              'معرفة خصائص $f^{-1}$: متصلة على $J$، لها نفس منحى تغيرات $f$، ومنحناها $(C_{f^{-1}})$ مماثل لـ $(C_f)$ بالنسبة للمنصف الأول $y = x$ في معلم متعامد ممنظم.',
              'تحديد الصيغة الصريحة لـ $f^{-1}(x)$ لكل $x \\in J$ بحل المعادلة $f(y)=x$ ذات المجهول $y \\in I$.'
            ],
            contentHtml: `
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
`
          },
          {
            id: 'm01-ax5',
            num: 'المحور 05',
            titleAr: 'دالة الجذر من الرتبة $n$ والقوى الجذرية $x^r$',
            titleFr: 'Fonction racine n-ième et puissances rationnelles',
            status: 'completed',
            requirements: [
              'تعريف دالة الجذر من الرتبة $n$ ($x \\mapsto \\sqrt[n]{x}$) كدالة عكسية للدالة $x \\mapsto x^n$ على $\\mathbb{R}^+$، وضبط خاصيات العمليات الجبرية عليها.',
              'حل المعادلات والمتراجحات اللاجذرية من الرتبة $n$، وتحديد القوى الجذرية $x^r = x^{p/q} = \\sqrt[q]{x^p}$ لعدد حقيقي موجب قطعاً.',
              'دراسة اتصال ونهايات الدوال من نوع $\\sqrt[n]{u(x)}$ وإزالة أشكال عدم التعيين في الجذور النونية (المرافق التكعيبي والتعميل).'
            ],
            contentHtml: `
              <div class="space-y-6">
                <!-- 1. Theoretical Foundation: n-th Root Function -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                        الخلط بين متطابقة الدرجة الثانية $a^2 - b^2$ ومتطابقة التكعيب $a^3 - b^3$. في المقام التكعيبي يجب كتابة ثلاثة حدود موجبة: $A^{2/3} + A^{1/3}B + B^2$.
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
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
                        <p>نختزل $y^3$ فتتحول إلى معادلة من الدرجة الأولى بالنسبة لـ $y$ (أو بتعويض مباشر):</p>
                        <div class="text-center font-mono text-cyan-300 my-1">
                          $$-1 = -3x y^2 + 3x^2 y - x^3 \\iff 3x y^2 - 3x^2 y + x^3 - 1 = 0$$
                        </div>
                        <p>لكن أبسط طريقة جبرية مباشرة: $y - \\sqrt[3]{y^3-1} = x$. بقسمة الطرفين أو بالشكل المباشر، نحصل على الصيغة الصريحة للحل الوحيد $y \\in [1, +\\infty[$ بدلالة $x$.</p>
                        <div class="p-2 bg-emerald-950/40 border border-emerald-600/40 rounded text-center text-emerald-300 font-mono font-bold">
                          $$\\forall x \\in ]0, 1], \\quad f^{-1}(x) = \\frac{3x^2 + \\sqrt{12x - 3x^4}}{6x} = \\frac{x}{2} + \\frac{\\sqrt{3x(4 - x^3)}}{6x}$$
                        <p class="text-xs text-slate-300 text-center mt-1">(تم اختيار الجذر الموجب الأكبر لأن $y \\ge 1$)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
`
          }
        ]
      },
      {
        id: 'math-02', num: '02', semester: 1, status: 'upcoming',
        titleAr: 'الاشتقاق ودراسة الدوال العددية', titleFr: 'Dérivation et étude des fonctions numériques',
        summary: 'قابلية الاشتقاق في نقطة، التأويل الهندسي (المماس ونصف المماس)، اشتقاق المركب والدالة العكسية ودالة جذر الرتبة n، الرتابة والتقعر، والفروع اللانهائية.',
        axes: [
          { num: 'المحور 01', titleAr: 'الاشتقاق في نقطة وعلى اليمين واليسار والتأويلات الهندسية (معادلة المماس ونصف المماس العمودي/الأفقي/المائل)', titleFr: 'Dérivabilité en un point et interprétations géométriques' },
          { num: 'المحور 02', titleAr: 'العمليات على الدوال المشتقة، اشتقاق المركب $g \\circ f$، اشتقاق $\\sqrt[n]{u(x)}$، وحساب $(f^{-1})\'(y_0) = \\frac{1}{f\'(x_0)}$', titleFr: 'Dérivée de la composée, de la racine n-ième et de la réciproque' },
          { num: 'المحور 03', titleAr: 'رتابة دالة ومطارفها من إشارة $f\'(x)$، وتقعر المنحنى ونقط الانعطاف من إشارة $f\'\'(x)$', titleFr: 'Monotonie, extremums, concavité et points d’inflexion' },
          { num: 'المحور 04', titleAr: 'الفروع اللانهائية (المقاربات الأفقية والعمودية والمائلة والفروع الشلجمية) وعناصر تماثل المنحنى (محور/مركز تماثل)', titleFr: 'Branches infinies, asymptotes et éléments de symétrie' }
        ]
      },
      {
        id: 'math-03', num: '03', semester: 1, status: 'upcoming',
        titleAr: 'المتتاليات العددية', titleFr: 'Suites numériques',
        summary: 'الاستدلال بالترجع، المتتاليات المكبورة والمصغورة، رتابة متتالية، نهاية متتالية، مصاديق التقارب، والمتتاليات الترجعية من نوع $u_{n+1} = f(u_n)$.',
        axes: [
          { num: 'المحور 01', titleAr: 'البرهان بالترجع، المتتاليات المكبورة والمصغورة والمحدودة، ودراسة رتابة متتالية', titleFr: 'Raisonnement par récurrence, suites bornées et monotonie' },
          { num: 'المحور 02', titleAr: 'نهاية متتالية، النهايات المرجعية ($n^p$ و $q^n$)، ومصاديق التقارب (التقارب الرتيب ومصداق الدرك)', titleFr: 'Limite d’une suite et critères de convergence' },
          { num: 'المحور 03', titleAr: 'المتتاليات الترجعية من نوع $u_{n+1} = f(u_n)$ وتحديد نهايتها بحل المعادلة $f(\\ell) = \\ell$', titleFr: 'Suites récurrentes du type u_{n+1} = f(u_n)' }
        ]
      },
      {
        id: 'math-04', num: '04', semester: 1, status: 'upcoming',
        titleAr: 'الدوال الأصلية', titleFr: 'Fonctions primitives',
        summary: 'تعريف الدالة الأصلية لدالة متصلة على مجال، تحديد الدالة الأصلية التي تأخذ قيمة معلومة في نقطة، وجدول الدوال الأصلية الاعتيادية والعمليات عليها.',
        axes: [
          { num: 'المحور 01', titleAr: 'تعريف الدالة الأصلية وشرط الاتصال لوجودها، وتحديد الدالة الأصلية الوحيدة التي تحقق $F(x_0)=y_0$', titleFr: 'Définition et existence des primitives sur un intervalle' },
          { num: 'المحور 02', titleAr: 'الدوال الأصلية الاعتيادية والصيغ من نوع $u\' u^r$ ($r \\in \\mathbb{Q}\\setminus\\{-1\\}$) و $u\'/\\sqrt{u}$', titleFr: 'Primitives des fonctions usuelles et opérations' }
        ]
      },
      {
        id: 'math-05', num: '05', semester: 1, status: 'upcoming',
        titleAr: 'الدوال اللوغاريتمية', titleFr: 'Fonctions logarithmiques',
        summary: 'دالة اللوغاريتم النيبيري $\\ln$، خصائصها الجبرية، النهايات الأساسية، مشتقة ودوال أصلية لـ $u\'/u$، ودالة اللوغاريتم للأساس $a$ واللوغاريتم العشري $\\log$.',
        axes: [
          { num: 'المحور 01', titleAr: 'تعريف دالة اللوغاريتم النيبيري $\\ln$، خصائصها الجبرية، وحل المعادلات والمتراجحات اللوغاريتمية', titleFr: 'Définition de la fonction ln et propriétés algébriques' },
          { num: 'المحور 02', titleAr: 'النهايات الاعتيادية الأساسية لدالة $\\ln$ ($\\lim_{x\\to+\\infty}\\frac{\\ln x}{x^n}=0$, $\\lim_{x\\to 0^+}x^n\\ln x=0$, $\\lim_{x\\to 1}\\frac{\\ln x}{x-1}=1$)', titleFr: 'Limites fondamentales et branches infinies de ln' },
          { num: 'المحور 03', titleAr: 'مشتقة $\\ln(|u(x)|)$ والدوال الأصلية لـ $\\frac{u\'(x)}{u(x)}$، ودالة اللوغاريتم العشري $\\log(x)$', titleFr: 'Dérivée logarithmique, primitives de u’/u et logarithme décimal' }
        ]
      },
      {
        id: 'math-06', num: '06', semester: 1, status: 'upcoming',
        titleAr: 'الأعداد العقدية (الجزء الأول)', titleFr: 'Nombres complexes — Partie 1',
        summary: 'الكتابة الجبرية، المرافق، المعيار، التمثيل الهندسي (اللحق والمسافة)، الشكل المثلثي، العمدة، والتأويل الهندسي للاستقامية والزوايا الموجهة.',
        axes: [
          { num: 'المحور 01', titleAr: 'الكتابة الجبرية $z = a + ib$، العمليات في $\\mathbb{C}$، المرافق $\\bar{z}$، والمعيار $|z| = \\sqrt{z\\bar{z}}$', titleFr: 'Forme algébrique, conjugué et module' },
          { num: 'المحور 02', titleAr: 'التمثيل الهندسي لعدد عقدي، لحق نقطة ولحق متجهة، المسافة $AB = |z_B - z_A|$، واستقامية ثلاث نقط', titleFr: 'Représentation géométrique, affixe, distance et alignement' },
          { num: 'المحور 03', titleAr: 'عمدة عدد عقدي غير منعدم $\\arg(z)$، الشكل المثلثي $[r, \\theta]$، وقياس الزاوية الموجهة $(\\overrightarrow{AB}, \\overrightarrow{AC}) \\equiv \\arg\\left(\\frac{z_C-z_A}{z_B-z_A}\\right) [2\\pi]$', titleFr: 'Argument, forme trigonométrique et mesure d’angles orientés' }
        ]
      },
      {
        id: 'math-07', num: '07', semester: 2, status: 'upcoming',
        titleAr: 'الدوال الأسية', titleFr: 'Fonctions exponentielles',
        summary: 'الدالة الأسية النيبيرية $\\exp(x) = e^x$، خصائصها الجبرية، النهايات الاعتيادية الأساسية، مشتقة ودوال أصلية لـ $u\' e^u$، والدالة الأسية للأساس $a$.',
        axes: [
          { num: 'المحور 01', titleAr: 'تعريف الدالة الأسية النيبيرية كدالة عكسية لـ $\\ln$، خصائصها الجبرية، وحل المعادلات والمتراجحات الأسية', titleFr: 'Définition de exp, propriétés algébriques et équations' },
          { num: 'المحور 02', titleAr: 'النهايات الأساسية ($\\lim_{+\\infty}\\frac{e^x}{x^n}=+\\infty$, $\\lim_{-\\infty}x^n e^x=0$, $\\lim_{0}\\frac{e^x-1}{x}=1$) واشتقاق وأصلية $u\'(x)e^{u(x)}$', titleFr: 'Limites fondamentales, dérivée et primitives de u’e^u' }
        ]
      },
      {
        id: 'math-08', num: '08', semester: 2, status: 'upcoming',
        titleAr: 'الأعداد العقدية (الجزء الثاني)', titleFr: 'Nombres complexes — Partie 2',
        summary: 'الترميز الأسي $r e^{i\\theta}$، صيغتا موافر وأويلر (الإخطاط)، حل معادلات الدرجة الثانية في $\\mathbb{C}$ بمعاملات حقيقية، والتحويلات الاعتيادية (الإزاحة، التحاكي، الدوران).',
        axes: [
          { num: 'المحور 01', titleAr: 'الترميز الأسي $z = r e^{i\\theta}$، صيغة موافر، وصيغتا أويلر لإخطاط $\\cos^n x$ و $\\sin^n x$', titleFr: 'Notation exponentielle, formules de Moivre et d’Euler (linéarisation)' },
          { num: 'المحور 02', titleAr: 'حل المعادلة $az^2 + bz + c = 0$ ($a,b,c \\in \\mathbb{R}, a \\neq 0$) في المجموعة $\\mathbb{C}$', titleFr: 'Équations du second degré à coefficients réels dans C' },
          { num: 'المحور 03', titleAr: 'الكتابة العقدية للتحويلات النقطية في المستوى: الإزاحة $T_{\\vec{u}}$، التحاكي $h(\\Omega, k)$، والدوران $R(\\Omega, \\theta)$', titleFr: 'Écriture complexe de la translation, de l’homothétie et de la rotation' }
        ]
      },
      {
        id: 'math-09', num: '09', semester: 2, status: 'upcoming',
        titleAr: 'المعادلات التفاضلية', titleFr: 'Équations différentielles',
        summary: 'حل المعادلات التفاضلية الخطية من الرتبة الأولى $y\' = ay + b$ ومن الرتبة الثانية $y\'\' + ay\' + by = 0$ وتحديد الحل الخاص بشروط بدئية.',
        axes: [
          { num: 'المحور 01', titleAr: 'حل المعادلة التفاضلية $y\' = ay + b$ وتحديد الحل الخاص الذي يحقق شرطاً بدئياً', titleFr: 'Équation différentielle y’ = ay + b' },
          { num: 'المحور 02', titleAr: 'حل المعادلة التفاضلية $y\'\' + ay\' + by = 0$ باستعمال المعادلة المميزة $r^2 + ar + b = 0$ في الحالات الثلاث لـ $\\Delta$', titleFr: 'Équation différentielle y’’ + ay’ + by = 0' }
        ]
      },
      {
        id: 'math-10', num: '10', semester: 2, status: 'upcoming',
        titleAr: 'الحساب التكاملي', titleFr: 'Calcul intégral',
        summary: 'تكامل دالة متصلة على قطعة، خاصيات التكامل (الخطانية، علاقة شال، الترتيب، القيمة المتوسطة)، المكاملة بالأجزاء، وحساب المساحات والحجوم.',
        axes: [
          { num: 'المحور 01', titleAr: 'حساب تكامل دالة متصلة باستعمال الدوال الأصلية، علاقة شال، الخطانية، والتكامل والترتيب', titleFr: 'Définition de l’intégrale et propriétés fondamentales' },
          { num: 'المحور 02', titleAr: 'تقنية المكاملة بالأجزاء (Intégration par parties)', titleFr: 'Technique d’intégration par parties' },
          { num: 'المحور 03', titleAr: 'حساب مساحة حيز مستوٍ محصور بين منحنيين وحجم مجسم مولد بدوران منحنى حول محور الأفاصيل', titleFr: 'Calcul d’aires et de volumes par intégrale' }
        ]
      },
      {
        id: 'math-11', num: '11', semester: 2, status: 'upcoming',
        titleAr: 'الهندسة الفضائية (الجداء السلمي والفلكة والجداء المتجهي)', titleFr: 'Géométrie dans l’espace (Produit scalaire, Sphère et Produit vectoriel)',
        summary: 'الجداء السلمي في الفضاء، المعادلة الديكارتية لمستوى، مسافة نقطة عن مستوى، الدراسة التحليلية للفلكة، والجداء المتجهي وتطبيقاته.',
        axes: [
          { num: 'المحور 01', titleAr: 'الجداء السلمي في الفضاء، المعادلة الديكارتية لمستوى معرف بنقطة ومتجهة منظمية، ومسافة نقطة عن مستوى $d(\\Omega, (P))$', titleFr: 'Produit scalaire, équation d’un plan et distance point-plan' },
          { num: 'المحور 02', titleAr: 'معادلة الفلكة $(S)$، والأوضاع النسبية لفلكة ومستوى (تقاطع وفق دائرة، مستوى مماس، أو منفصلان) ولفلكة ومستقيم', titleFr: 'Étude analytique de la sphère et positions relatives' },
          { num: 'المحور 03', titleAr: 'الجداء المتجهي $\\vec{u} \\wedge \\vec{v}$، استقامية متجهتين، مساحة مثلث $S = \\frac{1}{2}\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|$، ومسافة نقطة عن مستقيم', titleFr: 'Produit vectoriel, aire d’un triangle et distance point-droite' }
        ]
      },
      {
        id: 'math-12', num: '12', semester: 2, status: 'upcoming',
        titleAr: 'حساب الاحتمالات', titleFr: 'Calcul des probabilités',
        summary: 'التعداد، احتمال حدث، فرضية تساوي الاحتمالات، الاحتمال الشرطي، استقلالية الأحداث، المتغير العشوائي، والأمل الرياضي والمغايرة والحدانية.',
        axes: [
          { num: 'المحور 01', titleAr: 'التعداد (السحب بالتتابع وبإحلال $n^p$، بالتتابع وبدون إحلال $A_n^p$، وفي آن واحد $C_n^p$) وحساب احتمال حدث', titleFr: 'Dénombrement et calcul de probabilités' },
          { num: 'المحور 02', titleAr: 'الاحتمال الشرطي $P_A(B) = \\frac{P(A \\cap B)}{P(A)}$، شجرة الاحتمالات، واستقلالية حدثين', titleFr: 'Probabilité conditionnelle et indépendance' },
          { num: 'المحور 03', titleAr: 'المتغير العشوائي $X$، قانون الاحتمال، الأمل الرياضي $E(X)$، المغايرة $V(X)$، والانحراف الطرازي، والتوزيع الحداني $B(n,p)$', titleFr: 'Variable aléatoire, espérance, variance et loi binomiale' }
        ]
      }
    ]
  },

  physics: {
    id: 'physics',
    titleAr: 'الفيزياء',
    titleFr: 'Physique',
    badge: '2BAC PC • المعامل 7',
    color: 'amber',
    description: 'المنهاج الرسمي الكامل للفيزياء خاص حصرياً بمسلك العلوم الفيزيائية (2BAC PC — 15 درساً رسمياً موزعة على الوحدات الـ 4: الموجات، التحولات النووية، الكهرباء، والميكانيك).',
    lessons: [
      {
        id: 'phys-01', num: '01', unit: 'الجزء 1: الموجات (Ondes)', status: 'active',
        progressText: 'المحور 01 مكتمل بالتحرير النموذجي والرسوم التوضيحية (33%)',
        titleAr: 'الموجات الميكانيكية المتوالية', titleFr: 'Ondes mécaniques progressives',
        summary: 'تعريف الموجة الميكانيكية، الموجة المستعرضة والطولية، سرعة الانتشار $v = d/\\Delta t$، والتأخر الزمني $\\tau = SM/v$.',
        axes: [
          {
            id: 'p01-ax1',
            num: 'المحور 01',
            titleAr: 'مفهوم الموجة الميكانيكية المتوالية وخواصها العامة والفرق بين المستعرضة والطولية',
            titleFr: 'Définition et propriétés générales',
            status: 'completed',
            requirements: [
              'تعريف الموجة الميكانيكية والموجة الميكانيكية المتوالية بدقة (انتشار تشويه في وسط مادي مرن دون انتقال للمادة).',
              'التمييز بين الموجة المستعرضة ($\\vec{d}_{\\text{pert}} \\perp \\vec{d}_{\\text{prop}}$) والموجة الطولية ($\\vec{d}_{\\text{pert}} \\parallel \\vec{d}_{\\text{prop}}$) وتصنيف الصوت والموجات الزلزالية.',
              'معرفة الخواص العامة للانتشار: انتقال الطاقة دون المادة، أبعاد الانتشار (1D, 2D, 3D)، وتراكب موجتين.',
              'تحديد منحى حركة نقطة من وسط الانتشار انطلاقاً من مظهر الوسط في لحظة معينة بتقنية الإزاحة الزمنية.'
            ],
            contentHtml: `
              <div class="space-y-6">
                <!-- 1. Official Definitions -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">1. التعاريف الرسمية للموجة الميكانيكية المتوالية (Définitions officielles)</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>
                  <div class="space-y-4 text-sm text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">أ) التشويه الميكانيكي (Perturbation mécanique):</b>
                      تغير محلي ومؤقت لخاصية فيزيائية (الموضع، الشكل، الضغط، الكثافة، التوتر...) لوسط مادي مرن.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 block mb-1">ب) الموجة الميكانيكية (Onde mécanique) — التعريف الحرفي في الامتحان الوطني:</b>
                      هي <b>ظاهرة انتشار تشويه في وسط مادي مرن، دون انتقال للمادة المكونة لهذا الوسط</b> (ولكن مع انتقال للطاقة).
                      <div class="mt-2 text-xs text-amber-300/90 font-mono" dir="ltr">
                        Une onde mécanique est le phénomène de propagation d’une perturbation dans un milieu matériel élastique, sans transport de matière.
                      </div>
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-emerald-400 block mb-1">ج) الموجة الميكانيكية المتوالية (Onde mécanique progressive):</b>
                      تتابع مستمر ومُصان لإشارات ميكانيكية متتالية، ناتج عن اضطراب مستمر للمنبع $S$ ينتشر تدريجياً في الوسط المادي المرن دون توقف.
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300 mt-4">
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">🧱 معنى «الوسط المادي» (Milieu matériel):</b>
                      وسط يتكون من مادة (صلبة، سائلة، أو غازية). لذلك <b>لا تنتشر الموجة الميكانيكية أبداً في الفراغ (Le vide)</b>، بخلاف الموجة الكهرومغناطيسية كالضوء. <br/>
                      <i>(إثبات تجريبي: عدم سماع صوت جرس يرن داخل ناقوس زجاجي مُفرَّغ من الهواء).</i>
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                      <b class="text-emerald-400 block mb-1">🔄 معنى «الوسط المرن» (Milieu élastique):</b>
                      وسط تسترجع جميع نقطه موضع توازنها وشكلها البدئي بمجرد عبور التشويه منه، بفضل قوى التماسك والارتداد بين جزيئات الوسط.
                    </div>
                  </div>
                </div>

                <!-- 2. Transverse vs Longitudinal Waves -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">2. أصناف الموجات الميكانيكية: المستعرضة والطولية (Transversales vs Longitudinales)</span>
                    <span class="text-xs text-slate-400 font-mono">Classification des ondes</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-2">أ) الموجة المستعرضة (Onde transversale)</b>
                      <p class="mb-2">تكون الموجة <b>مستعرضة</b> إذا كان <b>اتجاه تشويه نقط الوسط عمودياً على اتجاه الانتشار</b>:</p>
                      <div class="bg-slate-900/90 border border-slate-800 rounded-lg p-2 text-center my-2">
                        $$\\vec{d}_{\\text{perturbation}} \\perp \\vec{d}_{\\text{propagation}}$$
                      </div>
                      <p class="text-slate-300"><b>الأمثلة المرجعية:</b> موجة على طول حبل مشدود؛ موجة على سطح الماء (حركة قطعة الفلين عمودياً بينما تنتشر الموجة أفقياً)؛ الموجات الزلزالية الثانوية $S$.</p>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 text-sm block mb-2">ب) الموجة الطولية (Onde longitudinale)</b>
                      <p class="mb-2">تكون الموجة <b>طولية</b> إذا كان <b>اتجاه تشويه نقط الوسط على نفس استقامة (موازياً لـ) اتجاه الانتشار</b>:</p>
                      <div class="bg-slate-900/90 border border-slate-800 rounded-lg p-2 text-center my-2">
                        $$\\vec{d}_{\\text{perturbation}} \\parallel \\vec{d}_{\\text{propagation}}$$
                      </div>
                      <p class="text-slate-300"><b>الأمثلة المرجعية:</b> موجة انضغاط وتمدد على طول نابض ذي لفات غير متصلة؛ <b>الموجة الصوتية وفوق الصوتية في الهواء أو الماء</b>؛ الموجات الزلزالية الأولية $P$.</p>
                    </div>
                  </div>

                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-4" id="svgCardWaveTypes">
      <div class="text-xs font-bold text-slate-300 mb-3 flex flex-wrap items-center justify-between gap-2">
        <span>📐 رسم تخطيطي مقارنة: الموجة المستعرضة والموجة الطولية</span>
        <span class="text-[11px] font-mono text-amber-400">Ondes transversales vs longitudinales</span>
      </div>
      <div class="space-y-3">
        <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-3">
          <div class="flex flex-wrap items-center justify-between text-[11px] font-bold mb-1 gap-2">
            <span class="text-cyan-400">1. موجة مستعرضة (حبل مشدود): اتجاه التشويه عمودي (⊥) على اتجاه الانتشار</span>
            <span class="text-emerald-400 font-mono">Transversale</span>
          </div>
          <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 102" class="w-full h-auto">
            <defs>
              <marker id="arrEmerald1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
              </marker>
              <marker id="arrAmber1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24"/>
              </marker>
              <marker id="arrAmberStart1" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 10 1 L 0 5 L 10 9 z" fill="#fbbf24"/>
              </marker>
            </defs>
            <line x1="50" y1="78" x2="625" y2="78" stroke="#334155" stroke-width="1.5" stroke-dasharray="5,5"/>
            <circle cx="50" cy="78" r="4" fill="#22d3ee"/>
            <text x="34" y="82" fill="#22d3ee" font-size="12" font-weight="bold" text-anchor="middle">S</text>
            <path d="M 50,78.0 L 53,78.0 L 56,78.0 L 59,78.0 L 62,78.0 L 65,78.0 L 68,78.0 L 71,78.0 L 74,78.0 L 77,78.0 L 80,78.0 L 83,78.0 L 86,78.0 L 89,78.0 L 92,78.0 L 95,78.0 L 98,78.0 L 101,78.0 L 104,78.0 L 107,78.0 L 110,78.0 L 113,78.0 L 116,78.0 L 119,78.0 L 122,78.0 L 125,78.0 L 128,78.0 L 131,78.0 L 134,78.0 L 137,78.0 L 140,78.0 L 143,78.0 L 146,78.0 L 149,78.0 L 152,78.0 L 155,78.0 L 158,78.0 L 161,78.0 L 164,78.0 L 167,78.0 L 170,78.0 L 173,78.0 L 176,78.0 L 179,78.0 L 182,78.0 L 185,78.0 L 188,78.0 L 191,78.0 L 194,78.0 L 197,78.0 L 200,78.0 L 203,78.0 L 206,78.0 L 209,78.0 L 212,78.0 L 215,78.0 L 218,78.0 L 221,78.0 L 224,78.0 L 227,78.0 L 230,78.0 L 233,78.0 L 236,78.0 L 239,78.0 L 242,78.0 L 245,78.0 L 248,78.0 L 251,78.0 L 254,77.9 L 257,77.9 L 260,77.8 L 263,77.7 L 266,77.6 L 269,77.4 L 272,77.2 L 275,76.9 L 278,76.4 L 281,75.8 L 284,75.1 L 287,74.1 L 290,72.9 L 293,71.5 L 296,69.8 L 299,67.7 L 302,65.4 L 305,62.8 L 308,59.9 L 311,56.7 L 314,53.5 L 317,50.2 L 320,46.9 L 323,43.7 L 326,40.9 L 329,38.4 L 332,36.4 L 335,34.9 L 338,34.2 L 341,34.0 L 344,34.6 L 347,35.8 L 350,37.6 L 353,40.0 L 356,42.7 L 359,45.8 L 362,49.1 L 365,52.4 L 368,55.7 L 371,58.8 L 374,61.8 L 377,64.5 L 380,67.0 L 383,69.1 L 386,70.9 L 389,72.5 L 392,73.8 L 395,74.8 L 398,75.6 L 401,76.2 L 404,76.7 L 407,77.1 L 410,77.4 L 413,77.6 L 416,77.7 L 419,77.8 L 422,77.9 L 425,77.9 L 428,77.9 L 431,78.0 L 434,78.0 L 437,78.0 L 440,78.0 L 443,78.0 L 446,78.0 L 449,78.0 L 452,78.0 L 455,78.0 L 458,78.0 L 461,78.0 L 464,78.0 L 467,78.0 L 470,78.0 L 473,78.0 L 476,78.0 L 479,78.0 L 482,78.0 L 485,78.0 L 488,78.0 L 491,78.0 L 494,78.0 L 497,78.0 L 500,78.0 L 503,78.0 L 506,78.0 L 509,78.0 L 512,78.0 L 515,78.0 L 518,78.0 L 521,78.0 L 524,78.0 L 527,78.0 L 530,78.0 L 533,78.0 L 536,78.0 L 539,78.0 L 542,78.0 L 545,78.0 L 548,78.0 L 551,78.0 L 554,78.0 L 557,78.0 L 560,78.0 L 563,78.0 L 566,78.0 L 569,78.0 L 572,78.0 L 575,78.0 L 578,78.0 L 581,78.0 L 584,78.0 L 587,78.0 L 590,78.0 L 593,78.0 L 596,78.0 L 599,78.0 L 602,78.0 L 605,78.0 L 608,78.0 L 611,78.0 L 614,78.0 L 617,78.0 L 620,78.0" fill="none" stroke="#22d3ee" stroke-width="3" stroke-linecap="round"/>

            <line x1="340" y1="78" x2="340" y2="32" stroke="#fbbf24" stroke-width="2" marker-start="url(#arrAmberStart1)" marker-end="url(#arrAmber1)"/>
            <rect x="332" y="70" width="8" height="8" fill="none" stroke="#94a3b8" stroke-width="1"/>
            <text x="276" y="45" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">اتجاه التشويه</text>

            <line x1="425" y1="40" x2="535" y2="40" stroke="#34d399" stroke-width="2.2" marker-end="url(#arrEmerald1)"/>
            <text x="480" y="28" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">اتجاه الانتشار</text>
          </svg>
        </div>

        <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-3">
          <div class="flex flex-wrap items-center justify-between text-[11px] font-bold mb-1 gap-2">
            <span class="text-amber-400">2. موجة طولية (نابض بلفات غير متصلة): اتجاه التشويه موازٍ (//) لاتجاه الانتشار</span>
            <span class="text-emerald-400 font-mono">Longitudinale</span>
          </div>
          <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 112" class="w-full h-auto">
            <defs>
              <marker id="arrEmerald2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
              </marker>
              <marker id="arrAmber2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24"/>
              </marker>
              <marker id="arrAmberStart2" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 10 1 L 0 5 L 10 9 z" fill="#fbbf24"/>
              </marker>
            </defs>
            <rect x="305" y="41" width="70" height="46" rx="6" fill="rgba(251, 191, 36, 0.12)" stroke="rgba(251, 191, 36, 0.45)" stroke-dasharray="3,3"/>
            <text x="340" y="102" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">منطقة انضغاط (Compression)</text>

            <path d="M 59.5,64.0 L 60.2,69.5 L 60.4,74.3 L 60.2,77.9 L 59.7,79.8 L 59.1,79.8 L 58.6,77.9 L 58.4,74.3 L 58.5,69.5 L 59.3,64.0 L 60.5,58.5 L 62.2,53.7 L 64.4,50.1 L 66.9,48.2 L 69.4,48.2 L 71.8,50.1 L 74.0,53.7 L 75.8,58.5 L 77.0,64.0 L 77.7,69.5 L 77.9,74.3 L 77.7,77.9 L 77.2,79.8 L 76.6,79.8 L 76.1,77.9 L 75.9,74.3 L 76.0,69.5 L 76.8,64.0 L 78.0,58.5 L 79.7,53.7 L 81.9,50.1 L 84.4,48.2 L 86.9,48.2 L 89.3,50.1 L 91.5,53.7 L 93.3,58.5 L 94.5,64.0 L 95.2,69.5 L 95.4,74.3 L 95.2,77.9 L 94.7,79.8 L 94.1,79.8 L 93.6,77.9 L 93.4,74.3 L 93.5,69.5 L 94.3,64.0 L 95.5,58.5 L 97.2,53.7 L 99.4,50.1 L 101.9,48.2 L 104.4,48.2 L 106.8,50.1 L 109.0,53.7 L 110.8,58.5 L 112.0,64.0 L 112.7,69.5 L 112.9,74.3 L 112.7,77.9 L 112.2,79.8 L 111.6,79.8 L 111.1,77.9 L 110.9,74.3 L 111.0,69.5 L 111.8,64.0 L 113.0,58.5 L 114.7,53.7 L 116.9,50.1 L 119.4,48.2 L 121.9,48.2 L 124.3,50.1 L 126.5,53.7 L 128.3,58.5 L 129.5,64.0 L 130.2,69.5 L 130.4,74.3 L 130.2,77.9 L 129.7,79.8 L 129.1,79.8 L 128.6,77.9 L 128.4,74.3 L 128.5,69.5 L 129.3,64.0 L 130.5,58.5 L 132.2,53.7 L 134.4,50.1 L 136.9,48.2 L 139.4,48.2 L 141.8,50.1 L 144.0,53.7 L 145.8,58.5 L 147.0,64.0 L 147.7,69.5 L 147.9,74.3 L 147.7,77.9 L 147.2,79.8 L 146.6,79.8 L 146.1,77.9 L 145.9,74.3 L 146.1,69.5 L 146.8,64.0 L 148.0,58.5 L 149.7,53.7 L 151.9,50.1 L 154.4,48.2 L 156.9,48.2 L 159.3,50.1 L 161.5,53.7 L 163.3,58.5 L 164.5,64.0 L 165.2,69.5 L 165.4,74.3 L 165.2,77.9 L 164.7,79.8 L 164.1,79.8 L 163.6,77.9 L 163.4,74.3 L 163.6,69.5 L 164.3,64.0 L 165.5,58.5 L 167.3,53.7 L 169.4,50.1 L 171.9,48.2 L 174.4,48.2 L 176.9,50.1 L 179.0,53.7 L 180.8,58.5 L 182.0,64.0 L 182.7,69.5 L 182.9,74.3 L 182.7,77.9 L 182.2,79.8 L 181.6,79.8 L 181.1,77.9 L 180.9,74.3 L 181.1,69.5 L 181.8,64.0 L 183.1,58.5 L 184.8,53.7 L 187.0,50.1 L 189.4,48.2 L 192.0,48.2 L 194.4,50.1 L 196.6,53.7 L 198.4,58.5 L 199.6,64.0 L 200.3,69.5 L 200.5,74.3 L 200.3,77.9 L 199.8,79.8 L 199.3,79.8 L 198.8,77.9 L 198.6,74.3 L 198.8,69.5 L 199.5,64.0 L 200.8,58.5 L 202.5,53.7 L 204.7,50.1 L 207.2,48.2 L 209.7,48.2 L 212.2,50.1 L 214.4,53.7 L 216.2,58.5 L 217.5,64.0 L 218.2,69.5 L 218.4,74.3 L 218.3,77.9 L 217.8,79.8 L 217.3,79.8 L 216.8,77.9 L 216.6,74.3 L 216.9,69.5 L 217.6,64.0 L 218.9,58.5 L 220.8,53.7 L 223.0,50.1 L 225.5,48.2 L 228.1,48.2 L 230.6,50.1 L 232.9,53.7 L 234.7,58.5 L 236.0,64.0 L 236.8,69.5 L 237.1,74.3 L 237.0,77.9 L 236.6,79.8 L 236.1,79.8 L 235.8,77.9 L 235.7,74.3 L 236.0,69.5 L 236.8,64.0 L 238.2,58.5 L 240.1,53.7 L 242.4,50.1 L 245.0,48.2 L 247.7,48.2 L 250.3,50.1 L 252.7,53.7 L 254.6,58.5 L 256.0,64.0 L 256.9,69.5 L 257.3,74.3 L 257.3,77.9 L 257.0,79.8 L 256.6,79.8 L 256.4,77.9 L 256.4,74.3 L 256.8,69.5 L 257.7,64.0 L 259.2,58.5 L 261.2,53.7 L 263.6,50.1 L 266.3,48.2 L 269.1,48.2 L 271.8,50.1 L 274.3,53.7 L 276.3,58.5 L 277.8,64.0 L 278.8,69.5 L 279.3,74.3 L 279.3,77.9 L 279.1,79.8 L 278.8,79.8 L 278.6,77.9 L 278.7,74.3 L 279.2,69.5 L 280.1,64.0 L 281.7,58.5 L 283.7,53.7 L 286.2,50.1 L 288.9,48.2 L 291.7,48.2 L 294.4,50.1 L 296.8,53.7 L 298.9,58.5 L 300.4,64.0 L 301.3,69.5 L 301.7,74.3 L 301.7,77.9 L 301.5,79.8 L 301.1,79.8 L 300.8,77.9 L 300.8,74.3 L 301.1,69.5 L 302.0,64.0 L 303.4,58.5 L 305.3,53.7 L 307.6,50.1 L 310.1,48.2 L 312.7,48.2 L 315.2,50.1 L 317.5,53.7 L 319.2,58.5 L 320.5,64.0 L 321.2,69.5 L 321.4,74.3 L 321.1,77.9 L 320.6,79.8 L 319.9,79.8 L 319.3,77.9 L 318.9,74.3 L 319.0,69.5 L 319.5,64.0 L 320.6,58.5 L 322.1,53.7 L 324.0,50.1 L 326.2,48.2 L 328.5,48.2 L 330.6,50.1 L 332.5,53.7 L 333.9,58.5 L 334.8,64.0 L 335.1,69.5 L 334.9,74.3 L 334.2,77.9 L 333.3,79.8 L 332.2,79.8 L 331.3,77.9 L 330.5,74.3 L 330.2,69.5 L 330.4,64.0 L 331.1,58.5 L 332.3,53.7 L 333.9,50.1 L 335.7,48.2 L 337.7,48.2 L 339.5,50.1 L 341.1,53.7 L 342.2,58.5 L 342.8,64.0 L 342.9,69.5 L 342.4,74.3 L 341.6,77.9 L 340.4,79.8 L 339.2,79.8 L 338.0,77.9 L 337.2,74.3 L 336.7,69.5 L 336.8,64.0 L 337.4,58.5 L 338.5,53.7 L 340.0,50.1 L 341.9,48.2 L 343.8,48.2 L 345.6,50.1 L 347.2,53.7 L 348.4,58.5 L 349.1,64.0 L 349.2,69.5 L 348.9,74.3 L 348.1,77.9 L 347.1,79.8 L 346.1,79.8 L 345.1,77.9 L 344.4,74.3 L 344.2,69.5 L 344.5,64.0 L 345.3,58.5 L 346.7,53.7 L 348.5,50.1 L 350.7,48.2 L 352.9,48.2 L 355.0,50.1 L 357.0,53.7 L 358.5,58.5 L 359.5,64.0 L 360.0,69.5 L 360.0,74.3 L 359.6,77.9 L 359.0,79.8 L 358.3,79.8 L 357.7,77.9 L 357.4,74.3 L 357.6,69.5 L 358.2,64.0 L 359.5,58.5 L 361.2,53.7 L 363.4,50.1 L 365.9,48.2 L 368.5,48.2 L 371.1,50.1 L 373.3,53.7 L 375.2,58.5 L 376.6,64.0 L 377.4,69.5 L 377.8,74.3 L 377.7,77.9 L 377.4,79.8 L 377.0,79.8 L 376.7,77.9 L 376.7,74.3 L 377.1,69.5 L 378.1,64.0 L 379.6,58.5 L 381.6,53.7 L 384.0,50.1 L 386.7,48.2 L 389.5,48.2 L 392.2,50.1 L 394.7,53.7 L 396.7,58.5 L 398.2,64.0 L 399.2,69.5 L 399.7,74.3 L 399.8,77.9 L 399.6,79.8 L 399.3,79.8 L 399.0,77.9 L 399.1,74.3 L 399.6,69.5 L 400.6,64.0 L 402.1,58.5 L 404.1,53.7 L 406.6,50.1 L 409.3,48.2 L 412.1,48.2 L 414.8,50.1 L 417.2,53.7 L 419.2,58.5 L 420.7,64.0 L 421.7,69.5 L 422.1,74.3 L 422.1,77.9 L 421.8,79.8 L 421.5,79.8 L 421.2,77.9 L 421.2,74.3 L 421.6,69.5 L 422.5,64.0 L 423.9,58.5 L 425.9,53.7 L 428.2,50.1 L 430.8,48.2 L 433.5,48.2 L 436.1,50.1 L 438.5,53.7 L 440.4,58.5 L 441.8,64.0 L 442.6,69.5 L 442.9,74.3 L 442.8,77.9 L 442.5,79.8 L 442.0,79.8 L 441.6,77.9 L 441.5,74.3 L 441.8,69.5 L 442.6,64.0 L 443.9,58.5 L 445.8,53.7 L 448.0,50.1 L 450.5,48.2 L 453.2,48.2 L 455.7,50.1 L 457.9,53.7 L 459.7,58.5 L 461.0,64.0 L 461.8,69.5 L 462.0,74.3 L 461.9,77.9 L 461.4,79.8 L 460.9,79.8 L 460.4,77.9 L 460.3,74.3 L 460.5,69.5 L 461.2,64.0 L 462.5,58.5 L 464.3,53.7 L 466.5,50.1 L 469.0,48.2 L 471.5,48.2 L 474.0,50.1 L 476.2,53.7 L 478.0,58.5 L 479.2,64.0 L 480.0,69.5 L 480.2,74.3 L 480.0,77.9 L 479.5,79.8 L 478.9,79.8 L 478.4,77.9 L 478.2,74.3 L 478.4,69.5 L 479.1,64.0 L 480.4,58.5 L 482.1,53.7 L 484.3,50.1 L 486.8,48.2 L 489.3,48.2 L 491.8,50.1 L 493.9,53.7 L 495.7,58.5 L 496.9,64.0 L 497.6,69.5 L 497.8,74.3 L 497.6,77.9 L 497.1,79.8 L 496.5,79.8 L 496.0,77.9 L 495.8,74.3 L 496.0,69.5 L 496.7,64.0 L 498.0,58.5 L 499.7,53.7 L 501.9,50.1 L 504.3,48.2 L 506.9,48.2 L 509.3,50.1 L 511.5,53.7 L 513.2,58.5 L 514.5,64.0 L 515.2,69.5 L 515.4,74.3 L 515.2,77.9 L 514.7,79.8 L 514.1,79.8 L 513.6,77.9 L 513.4,74.3 L 513.5,69.5 L 514.2,64.0 L 515.5,58.5 L 517.2,53.7 L 519.4,50.1 L 521.9,48.2 L 524.4,48.2 L 526.8,50.1 L 529.0,53.7 L 530.8,58.5 L 532.0,64.0 L 532.7,69.5 L 532.9,74.3 L 532.7,77.9 L 532.2,79.8 L 531.6,79.8 L 531.1,77.9 L 530.9,74.3 L 531.0,69.5 L 531.7,64.0 L 533.0,58.5 L 534.7,53.7 L 536.9,50.1 L 539.4,48.2 L 541.9,48.2 L 544.3,50.1 L 546.5,53.7 L 548.3,58.5 L 549.5,64.0 L 550.2,69.5 L 550.4,74.3 L 550.2,77.9 L 549.7,79.8 L 549.1,79.8 L 548.6,77.9 L 548.4,74.3 L 548.5,69.5 L 549.2,64.0 L 550.5,58.5 L 552.2,53.7 L 554.4,50.1 L 556.9,48.2 L 559.4,48.2 L 561.8,50.1 L 564.0,53.7 L 565.8,58.5 L 567.0,64.0 L 567.7,69.5 L 567.9,74.3 L 567.7,77.9 L 567.2,79.8 L 566.6,79.8 L 566.1,77.9 L 565.9,74.3 L 566.0,69.5 L 566.7,64.0 L 568.0,58.5 L 569.7,53.7 L 571.9,50.1 L 574.4,48.2 L 576.9,48.2 L 579.3,50.1 L 581.5,53.7 L 583.3,58.5 L 584.5,64.0 L 585.2,69.5 L 585.4,74.3 L 585.2,77.9 L 584.7,79.8 L 584.1,79.8 L 583.6,77.9 L 583.4,74.3 L 583.5,69.5 L 584.2,64.0 L 585.5,58.5 L 587.2,53.7 L 589.4,50.1 L 591.9,48.2 L 594.4,48.2 L 596.8,50.1 L 599.0,53.7 L 600.8,58.5 L 602.0,64.0 L 602.7,69.5 L 602.9,74.3 L 602.7,77.9 L 602.2,79.8 L 601.6,79.8 L 601.1,77.9 L 600.9,74.3 L 601.0,69.5 L 601.7,64.0 L 603.0,58.5 L 604.7,53.7 L 606.9,50.1 L 609.4,48.2 L 611.9,48.2 L 614.3,50.1 L 616.5,53.7 L 618.3,58.5 L 619.5,64.0" fill="none" stroke="#94a3b8" stroke-width="1.8"/>
            <circle cx="55" cy="64" r="4" fill="#fbbf24"/>
            <text x="37" y="68" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">S</text>

            <line x1="295" y1="28" x2="385" y2="28" stroke="#fbbf24" stroke-width="2" marker-start="url(#arrAmberStart2)" marker-end="url(#arrAmber2)"/>
            <text x="340" y="17" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">اتجاه التشويه (//)</text>

            <line x1="435" y1="28" x2="545" y2="28" stroke="#34d399" stroke-width="2.2" marker-end="url(#arrEmerald2)"/>
            <text x="490" y="17" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">اتجاه الانتشار</text>
          </svg>
        </div>
      </div>
    </div>

                  <div class="bg-slate-950 border border-amber-500/30 rounded-xl p-4 mt-4 text-xs text-slate-200 leading-relaxed">
                    <b class="text-amber-300 block mb-1">🔊 الحالة الخاصة الحاسمة في الامتحانات الوطنية — الموجة الصوتية (Onde sonore):</b>
                    الصوت موجة <b>ميكانيكية متوالية طولية ثلاثية الأبعاد</b> (تحتاج لوسط مادي ولا تنتشر في الفراغ). عندما يهتز غشاء مكبر صوت، تُحدث اهتزازاته <b>انضغاطاً (Compression)</b> متبوعاً بـ <b>تمدد (Dilatation)</b> لطبقات الهواء المجاورة، وتهتز جزيئات المائع على نفس استقامة اتجاه انتشار الموجة الصوتية.
                    <br/><span class="text-cyan-300 font-semibold">ملاحظة فيزيائية دقيقة:</span> في الموائع (الغازات والسوائل)، لا توجد قوى قص مرنة تحافظ على الشكل، ولذلك تقتصر الموجات الصوتية فيها على النمط الطولي فقط.
                  </div>

                  <!-- Comparison Table -->
                  <div class="overflow-x-auto mt-4">
                    <table class="w-full text-xs text-right border-collapse border border-slate-800 rounded-xl overflow-hidden">
                      <thead class="bg-slate-950 text-cyan-300">
                        <tr>
                          <th class="p-3 border border-slate-800">المعيار</th>
                          <th class="p-3 border border-slate-800">الموجة المستعرضة (Transversale)</th>
                          <th class="p-3 border border-slate-800">الموجة الطولية (Longitudinale)</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-800 bg-slate-900/50 text-slate-200">
                        <tr>
                          <td class="p-3 font-bold text-slate-300 border border-slate-800">الزاوية بين التشويه والانتشار</td>
                          <td class="p-3 border border-slate-800">متعامدان ($90^\\circ$) — $\\perp$</td>
                          <td class="p-3 border border-slate-800">على نفس الاستقامة ($0^\\circ$) — $\\parallel$</td>
                        </tr>
                        <tr>
                          <td class="p-3 font-bold text-slate-300 border border-slate-800">أوساط الانتشار الممكنة</td>
                          <td class="p-3 border border-slate-800">الأجسام الصلبة وسطوح السوائل فقط</td>
                          <td class="p-3 border border-slate-800">الأجسام الصلبة، السوائل، والغازات (الموائع)</td>
                        </tr>
                        <tr>
                          <td class="p-3 font-bold text-slate-300 border border-slate-800">الأمثلة النموذجية</td>
                          <td class="p-3 border border-slate-800">حبل مشدود، سطح الماء، موجات زلزالية $S$</td>
                          <td class="p-3 border border-slate-800">نابض، الصوت وفوق الصوت، موجات زلزالية $P$</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- 3. General Properties of Wave Propagation -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">3. الخواص العامة لانتشار موجة ميكانيكية (Propriétés générales)</span>
                    <span class="text-xs text-slate-400 font-mono">طاقة، أبعاد، وتراكب</span>
                  </div>
                  <div class="space-y-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-emerald-400 block mb-1">1) انتقال الطاقة دون انتقال المادة (Transport d’énergie sans transport de matière):</b>
                      عند مرور الموجة عبر نقطة $M$ من الوسط، تكتسب هذه النقطة طاقة (حركية وطاقة وضع مرنة) تُزحزحها مؤقتاً عن موضع توازنها، ثم تستعيد سكونها الأصلي فور مرور التشويه.
                      <br/>• <b>الدليل التجريبي الكلاسيكي:</b> عند وضع قطعة فلين (Bouchon de liège) فوق سطح ماء ساكن وإحداث موجة، تصعد قطعة الفلين وتنزل عمودياً في مكانها دون أن ترحل مع الموجة نحو الحافة.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">2) أبعاد واتجاهات الانتشار (Dimensions de propagation):</b>
                      في وسط <b>متجانس وموحد الخواص (Homogène et isotrope)</b>، تنتشر الموجة انطلاقاً من المنبع في جميع الاتجاهات المتاحة لها بنفس السرعة، وتصنَّف حسب بُعد الوسط إلى ثلاثة أصناف:
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 mt-2">
                        <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                          <b class="text-cyan-300 block">أحادي البعد (1D):</b>
                          ينتشر وفق محور مستقيمي واحد (حبل، نابض).
                        </div>
                        <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                          <b class="text-amber-300 block">ثنائي البعد (2D):</b>
                          ينتشر في مستوى وفق دوائر متمركزة (سطح الماء).
                        </div>
                        <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                          <b class="text-violet-300 block">ثلاثي البعد (3D):</b>
                          ينتشر في الفضاء وفق كرات متمركزة (الصوت، الزلازل).
                        </div>
                      </div>
                      <p class="text-[11px] text-slate-400 mt-2">💡 في الانتشار ثنائي وثلاثي البعد (2D و 3D)، تتوزع الطاقة على جبهات متسعة تدريجياً، مما يفسر <b>تخامد الوسع (Atténuation)</b> كلما ابتعدنا عن المنبع.</p>
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-violet-400 block mb-1">3) خاصية تراكب موجتين (Superposition de deux ondes):</b>
                      عند التقاء موجتين ميكانيكيتين (بشرط ألا يكون الوسع كبيراً جداً) في نفس النقطة من الوسط:
                      <br/>• أثناء لحظة التقائهما، تكون الاستطالة الكلية مساوية للمجموع الجبري للاستطالتين: $y = y_1 + y_2$.
                      <br/>• <b>بعد الالتقاء مباشرة:</b> تواصل كل موجة انتشارها بشكل مستقل تماماً دون أن تتأثر بالأخرى (لا يتغير شكلها ولا وسعها ولا سرعتها ولا منحاها).
                    </div>
                  </div>
                </div>

                <!-- 4. Snapshot Graph Reading & Motion Direction -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">4. القراءة البيانية لمظهر الوسط وحركة نقطة منه (Aspect & Cinématique)</span>
                    <span class="text-xs text-slate-400 font-mono">تقنية الإزاحة الزمنية</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-3">
                    يمثل <b>مظهر الحبل عند لحظة ثابتة $t_1$</b> صورةً فوتوغرافية لمنحنى الاستطالة بدلالة الفاصلة المكانية $x$ (أي $y = f(x)$). يجب التمييز دوماً بين <b>جبهة/مقدمة الموجة ($F$)</b> التي يبدأ عندها وصول التشويه، و<b>مؤخرة الموجة ($Q$)</b> التي ينتهي عندها التشويه.
                  </p>

                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-4" id="svgCardWaveShift">
      <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
        <span>📈 تقنية الإزاحة الزمنية لتحديد منحى حركة النقط على مظهر الحبل</span>
        <span class="text-[11px] font-mono text-cyan-400">Méthode du décalage temporel</span>
      </div>
      <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-3">
        <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
          <div class="flex flex-wrap items-center gap-4">
            <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-5 h-0.5 bg-cyan-400"></span> مظهر الحبل في t₁</span>
            <span class="flex items-center gap-1.5 text-amber-300"><span class="inline-block w-5 border-t-2 border-dashed border-amber-400"></span> المظهر المزاح في t₁ + δt</span>
          </div>
          <span class="text-emerald-400">منحى الانتشار نحو اليمين →</span>
        </div>
        <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 198" class="w-full h-auto">
          <defs>
            <marker id="arrCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
            </marker>
            <marker id="arrUp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
            </marker>
            <marker id="arrDown" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#fb7185"/>
            </marker>
          </defs>

          <line x1="45" y1="142" x2="105" y2="142" stroke="#475569" stroke-width="2"/>
          <path d="M 105 142 L 112 136 L 118 148 L 125 142" fill="none" stroke="#64748b" stroke-width="1.8"/>
          <line x1="125" y1="142" x2="615" y2="142" stroke="#475569" stroke-width="2" marker-end="url(#arrCyan)"/>
          <text x="646" y="146" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">x (m)</text>

          <circle cx="52" cy="142" r="4" fill="#e2e8f0"/>
          <text x="52" y="162" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">S(0)</text>

          <path d="M 140,142.0 L 142,142.0 L 144,142.0 L 146,142.0 L 148,142.0 L 150,142.0 L 152,142.0 L 154,142.0 L 156,142.0 L 158,142.0 L 160,142.0 L 162,142.0 L 164,142.0 L 166,142.0 L 168,142.0 L 170,142.0 L 172,142.0 L 174,142.0 L 176,142.0 L 178,142.0 L 180,142.0 L 182,142.0 L 184,142.0 L 186,142.0 L 188,142.0 L 190,142.0 L 192,142.0 L 194,142.0 L 196,142.0 L 198,142.0 L 200,142.0 L 202,142.0 L 204,142.0 L 206,142.0 L 208,142.0 L 210,142.0 L 212,142.0 L 214,142.0 L 216,142.0 L 218,142.0 L 220,142.0 L 222,142.0 L 224,142.0 L 226,142.0 L 228,142.0 L 230,142.0 L 232,142.0 L 234,142.0 L 236,142.0 L 238,142.0 L 240,142.0 L 242,142.0 L 244,142.0 L 246,141.9 L 248,141.7 L 250,141.4 L 252,141.0 L 254,140.4 L 256,139.7 L 258,138.8 L 260,137.9 L 262,136.8 L 264,135.6 L 266,134.3 L 268,132.9 L 270,131.4 L 272,129.8 L 274,128.1 L 276,126.3 L 278,124.4 L 280,122.4 L 282,120.4 L 284,118.2 L 286,116.1 L 288,113.8 L 290,111.5 L 292,109.2 L 294,106.8 L 296,104.4 L 298,101.9 L 300,99.5 L 302,97.0 L 304,94.5 L 306,92.0 L 308,89.5 L 310,87.1 L 312,84.6 L 314,82.2 L 316,79.8 L 318,77.5 L 320,75.2 L 322,72.9 L 324,70.8 L 326,68.6 L 328,66.6 L 330,64.6 L 332,62.7 L 334,60.9 L 336,59.2 L 338,57.6 L 340,56.1 L 342,54.7 L 344,53.4 L 346,52.2 L 348,51.1 L 350,50.2 L 352,49.3 L 354,48.6 L 356,48.0 L 358,47.6 L 360,47.3 L 362,47.1 L 364,47.0 L 366,47.1 L 368,47.3 L 370,47.6 L 372,48.0 L 374,48.6 L 376,49.3 L 378,50.2 L 380,51.1 L 382,52.2 L 384,53.4 L 386,54.7 L 388,56.1 L 390,57.6 L 392,59.2 L 394,60.9 L 396,62.7 L 398,64.6 L 400,66.6 L 402,68.6 L 404,70.8 L 406,72.9 L 408,75.2 L 410,77.5 L 412,79.8 L 414,82.2 L 416,84.6 L 418,87.1 L 420,89.5 L 422,92.0 L 424,94.5 L 426,97.0 L 428,99.5 L 430,101.9 L 432,104.4 L 434,106.8 L 436,109.2 L 438,111.5 L 440,113.8 L 442,116.1 L 444,118.2 L 446,120.4 L 448,122.4 L 450,124.4 L 452,126.3 L 454,128.1 L 456,129.8 L 458,131.4 L 460,132.9 L 462,134.3 L 464,135.6 L 466,136.8 L 468,137.9 L 470,138.8 L 472,139.7 L 474,140.4 L 476,141.0 L 478,141.4 L 480,141.7 L 482,141.9 L 484,142.0 L 486,142.0 L 488,142.0 L 490,142.0 L 492,142.0 L 494,142.0 L 496,142.0 L 498,142.0 L 500,142.0 L 502,142.0 L 504,142.0 L 506,142.0 L 508,142.0 L 510,142.0 L 512,142.0 L 514,142.0 L 516,142.0 L 518,142.0 L 520,142.0 L 522,142.0 L 524,142.0 L 526,142.0 L 528,142.0 L 530,142.0 L 532,142.0 L 534,142.0 L 536,142.0 L 538,142.0 L 540,142.0 L 542,142.0 L 544,142.0 L 546,142.0 L 548,142.0 L 550,142.0 L 552,142.0 L 554,142.0 L 556,142.0 L 558,142.0 L 560,142.0" fill="none" stroke="#fbbf24" stroke-width="2.2" stroke-dasharray="6,4"/>
          <path d="M 140,142.0 L 142,142.0 L 144,142.0 L 146,142.0 L 148,142.0 L 150,142.0 L 152,142.0 L 154,142.0 L 156,142.0 L 158,142.0 L 160,142.0 L 162,142.0 L 164,142.0 L 166,142.0 L 168,142.0 L 170,142.0 L 172,142.0 L 174,142.0 L 176,142.0 L 178,142.0 L 180,142.0 L 182,142.0 L 184,142.0 L 186,142.0 L 188,142.0 L 190,142.0 L 192,142.0 L 194,142.0 L 196,142.0 L 198,142.0 L 200,142.0 L 202,142.0 L 204,142.0 L 206,142.0 L 208,142.0 L 210,142.0 L 212,142.0 L 214,142.0 L 216,142.0 L 218,142.0 L 220,142.0 L 222,141.9 L 224,141.7 L 226,141.4 L 228,141.0 L 230,140.4 L 232,139.7 L 234,138.8 L 236,137.9 L 238,136.8 L 240,135.6 L 242,134.3 L 244,132.9 L 246,131.4 L 248,129.8 L 250,128.1 L 252,126.3 L 254,124.4 L 256,122.4 L 258,120.4 L 260,118.2 L 262,116.1 L 264,113.8 L 266,111.5 L 268,109.2 L 270,106.8 L 272,104.4 L 274,101.9 L 276,99.5 L 278,97.0 L 280,94.5 L 282,92.0 L 284,89.5 L 286,87.1 L 288,84.6 L 290,82.2 L 292,79.8 L 294,77.5 L 296,75.2 L 298,72.9 L 300,70.8 L 302,68.6 L 304,66.6 L 306,64.6 L 308,62.7 L 310,60.9 L 312,59.2 L 314,57.6 L 316,56.1 L 318,54.7 L 320,53.4 L 322,52.2 L 324,51.1 L 326,50.2 L 328,49.3 L 330,48.6 L 332,48.0 L 334,47.6 L 336,47.3 L 338,47.1 L 340,47.0 L 342,47.1 L 344,47.3 L 346,47.6 L 348,48.0 L 350,48.6 L 352,49.3 L 354,50.2 L 356,51.1 L 358,52.2 L 360,53.4 L 362,54.7 L 364,56.1 L 366,57.6 L 368,59.2 L 370,60.9 L 372,62.7 L 374,64.6 L 376,66.6 L 378,68.6 L 380,70.8 L 382,72.9 L 384,75.2 L 386,77.5 L 388,79.8 L 390,82.2 L 392,84.6 L 394,87.1 L 396,89.5 L 398,92.0 L 400,94.5 L 402,97.0 L 404,99.5 L 406,101.9 L 408,104.4 L 410,106.8 L 412,109.2 L 414,111.5 L 416,113.8 L 418,116.1 L 420,118.2 L 422,120.4 L 424,122.4 L 426,124.4 L 428,126.3 L 430,128.1 L 432,129.8 L 434,131.4 L 436,132.9 L 438,134.3 L 440,135.6 L 442,136.8 L 444,137.9 L 446,138.8 L 448,139.7 L 450,140.4 L 452,141.0 L 454,141.4 L 456,141.7 L 458,141.9 L 460,142.0 L 462,142.0 L 464,142.0 L 466,142.0 L 468,142.0 L 470,142.0 L 472,142.0 L 474,142.0 L 476,142.0 L 478,142.0 L 480,142.0 L 482,142.0 L 484,142.0 L 486,142.0 L 488,142.0 L 490,142.0 L 492,142.0 L 494,142.0 L 496,142.0 L 498,142.0 L 500,142.0 L 502,142.0 L 504,142.0 L 506,142.0 L 508,142.0 L 510,142.0 L 512,142.0 L 514,142.0 L 516,142.0 L 518,142.0 L 520,142.0 L 522,142.0 L 524,142.0 L 526,142.0 L 528,142.0 L 530,142.0 L 532,142.0 L 534,142.0 L 536,142.0 L 538,142.0 L 540,142.0 L 542,142.0 L 544,142.0 L 546,142.0 L 548,142.0 L 550,142.0 L 552,142.0 L 554,142.0 L 556,142.0 L 558,142.0 L 560,142.0" fill="none" stroke="#22d3ee" stroke-width="3.2"/>

          <line x1="280" y1="142" x2="280" y2="94.5" stroke="#475569" stroke-width="1.2" stroke-dasharray="3,3"/>
          <line x1="400" y1="142" x2="400" y2="66.6" stroke="#475569" stroke-width="1.2" stroke-dasharray="3,3"/>

          <circle cx="280" cy="94.5" r="4.5" fill="#22d3ee" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="280" cy="122.4" r="3.8" fill="#fb7185"/>
          <line x1="280" y1="99.5" x2="280" y2="118.4" stroke="#fb7185" stroke-width="2.5" marker-end="url(#arrDown)"/>
          <text x="218" y="90.5" fill="#fb7185" font-size="11" font-weight="bold" text-anchor="middle">B (تنزل للأسفل ↓)</text>

          <circle cx="400" cy="94.5" r="4.5" fill="#22d3ee" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="400" cy="66.6" r="3.8" fill="#34d399"/>
          <line x1="400" y1="89.5" x2="400" y2="71.6" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrUp)"/>
          <text x="462" y="68.6" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">A (تصعد للأعلى ↑)</text>

          <circle cx="220" cy="142" r="3.5" fill="#fbbf24"/>
          <circle cx="460" cy="142" r="4" fill="#34d399"/>
          <circle cx="340" cy="47" r="4" fill="#22d3ee"/>
          <text x="340" y="37" fill="#22d3ee" font-size="11" font-weight="bold" text-anchor="middle">M (قمة)</text>

          <text x="220" y="162" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">1.20</text>
          <text x="220" y="182" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">Q (مؤخرة)</text>

          <text x="280" y="162" fill="#fb7185" font-size="11" font-family="monospace" text-anchor="middle">1.35 (B)</text>
          <text x="340" y="162" fill="#22d3ee" font-size="11" font-family="monospace" text-anchor="middle">1.50 (M)</text>
          <text x="400" y="162" fill="#34d399" font-size="11" font-family="monospace" text-anchor="middle">1.65 (A)</text>

          <text x="460" y="162" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">1.80</text>
          <text x="460" y="182" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">F (جبهة)</text>
        </svg>
      </div>
    </div>

                  <div class="bg-slate-950 border border-cyan-500/30 rounded-xl p-4 text-xs text-slate-200 leading-relaxed space-y-2">
                    <b class="text-cyan-300 block">🎯 الخوارزمية المنهجية لتحديد منحى حركة نقطة $M$ في لحظة $t_1$:</b>
                    <p>1. نرسم ذهنياً (أو بقلم خفيف) مظهر الحبل في لحظة موالية مباشرة $t_1 + \\delta t$ وذلك بـ<b>إزاحة منحنى الموجة قليلاً نحو منحى الانتشار</b>.</p>
                    <p>2. نقرأ تغير أرتوب النقطة ذات الأفصول الثابت $x_M$ من المنحنى الأول إلى المنحنى المزاح:</p>
                    <ul class="list-disc pr-5 space-y-1">
                      <li><b class="text-emerald-400">جبهة التشويه (الجانب الأمامي):</b> نلاحظ أن النقطة $A$ تصعد من المنحنى الأزرق إلى المنحنى الأصفر $\\implies$ <b>تتحرك نحو الأعلى</b> (وهذا يكشف أيضاً أن المنبع $S$ بدأ حركته عند $t=0$ نحو الأعلى!).</li>
                      <li><b class="text-rose-400">مؤخرة التشويه (الجانب الخلفي):</b> نلاحظ أن النقطة $B$ تنزل نحو موضع التوازن $\\implies$ <b>تتحرك نحو الأسفل</b>.</li>
                    </ul>
                  </div>
                </div>

                <!-- 5. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الامتحان الوطني (Pièges Classiques)</span>
                    <span class="text-xs text-rose-400 font-mono">تجنب خسارة النقط المجانية</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">1. فخ «الصوت موجة مستعرضة أو ينتشر في الفراغ»:</b>
                      يقع الكثيرون في خطأ وصف الصوت كموجة مستعرضة أو قبول انتشاره في الفضاء الخارجي.
                      <br/>✓ <b>الصواب المرجعي:</b> الصوت موجة <b>ميكانيكية طولية</b> (في الموائع) و<b>ثلاثية الأبعاد</b>، ويستحيل انتشاره في الفراغ.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">2. فخ «منحى حركة نقطة من المظهر البياني»:</b>
                      القراءة من اليسار إلى اليمين توحي بأن المنحنى الصاعد على اليسار يصعد، والحقيقة عند الانتشار يميناً هي العكس تماماً!
                      <br/>✓ <b>الضمان التام:</b> طبّق دائماً قاعدة إزاحة المنحنى بمقدار $\\delta x$ في منحى الانتشار.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">3. فخ «نسيان عبارة دون انتقال للمادة»:</b>
                      في سؤال تعريف الموجة الميكانيكية ($0.50\\text{ pt}$)، مجرد القول «هي انتشار تشويه في وسط» يفقدك نصف النقطة إذا لم تضف «<b>مادي مرن، دون انتقال للمادة</b>».
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">4. فخ «تراكب موجتين متقابلتين»:</b>
                      بعد تقاطع موجتين على حبل (حتى لو ألغت إحداهما الأخرى لحظة التلاقي لأن $y_1 = -y_2$)، يظن البعض أن الموجة اختفت!
                      <br/>✓ <b>الصواب:</b> التلاقي مؤقت، ثم تعود كل موجة للمرور بشكلها وسرعتها الأصليين دون تغيير.
                    </div>
                  </div>
                </div>

                <!-- 6. Worked Exam Applications -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">📝 تطبيقات نموذجية محررة بصياغة الامتحان الوطني وسلالم التنقيط</span>
                    <span class="text-xs text-slate-400 font-mono">معيار الوطني 2BAC PC</span>
                  </div>

                  <!-- Application 1 -->
                  <div class="bg-slate-950 p-5 rounded-2xl border border-slate-800 mb-5">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: قراءة وتحليل مظهر حبل متحرك (انظر الرسم التوضيحي أعلاه)</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نحدث عند اللحظة $t_0 = 0$ تشويهاً ميكانيكياً عند الطرف $S$ لحبل طويل أفقي ومشدود، فينتشر التشويه على طول الحبل نحو اليمين. يمثل الرسم البياني السابق مظهر الحبل في لحظة $t_1$ حيث تمتد منطقة التشويه من الأفصول $x_Q = 1.20\\text{ m}$ إلى جبهة الموجة عند $x_F = 1.80\\text{ m}$ (بمقدمة $F$ ومؤخرة $Q$ وقمة $M$ عند $x_M = 1.50\\text{ m}$). نعتبر النقطتين $A(1.65\\text{ m})$ و $B(1.35\\text{ m})$.
                      <br/><b>1.</b> عرّف الموجة الميكانيكية المتوالية. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>2.</b> هل هذه الموجة مستعرضة أم طولية؟ وما هو بُعد انتشارها؟ علّل جوابك. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>3.</b> حدّد عند اللحظة $t_1$ منحى حركة كل من النقطة $A$ والنقطة $B$. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>4.</b> استنتج في أي منحى تم تحريك الطرف $S$ في البداية (نحو الأعلى أم نحو الأسفل)؟ وهل تنتقل مادة الحبل من $S$ إلى $F$؟ <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. التعريف:</b> الموجة الميكانيكية المتوالية هي تتابع مستمر لإشارات ميكانيكية ناتجة عن اضطراب مستمر ومصان لمنبع، وتنتشر تدريجياً في وسط مادي مرن <b>دون انتقال للمادة</b> بل مع انتقال للطاقة فقط. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2. التصنيف والبُعد:</b><br/>
                      • الموجة <b>مستعرضة</b> لأن اتجاه تشويه نقط الحبل (عمودي) متعامد مع اتجاه انتشار الموجة على طول الحبل (أفقي). <span class="text-emerald-400 font-mono">(0.25 ن)</span><br/>
                      • انتشارها <b>أحادي البعد (1D)</b> لأن التشويه ينتشر وفق مستقيم واحد (طول الحبل). <span class="text-emerald-400 font-mono">(0.25 ن)</span></p>
                      <p><b>3. منحى حركة $A$ و $B$ عند $t_1$:</b><br/>
                      بإزاحة منحنى التشويه قليلاً نحو اليمين (مظهر الحبل عند $t_1 + \\delta t$):<br/>
                      • بالنسبة للنقطة $A$ (في مقدمة التشويه): أرتوبها يزداد $\\implies$ <b>تتحرك النقطة $A$ نحو الأعلى</b>. <span class="text-emerald-400 font-mono">(0.25 ن)</span><br/>
                      • بالنسبة للنقطة $B$ (في مؤخرة التشويه): أرتوبها يتناقص $\\implies$ <b>تتحرك النقطة $B$ نحو الأسفل</b> (عائدةً إلى موضع التوازن). <span class="text-emerald-400 font-mono">(0.25 ن)</span></p>
                      <p><b>4. حركة المنبع $S$ ومصير المادة:</b><br/>
                      • بما أن جبهة الموجة تبدأ بالانزياح نحو الأعلى (مثل $A$)، فإن المنبع $S$ <b>حُرّك في البداية نحو الأعلى</b> (ثم أُعيد إلى موضع توازنه). <span class="text-emerald-400 font-mono">(0.25 ن)</span><br/>
                      • <b>لا تنتقل مادة الحبل</b>؛ كل نقطة تهتز في مكانها عمودياً وتنتقل <b>الطاقة فقط</b> من $S$ إلى $F$. <span class="text-emerald-400 font-mono">(0.25 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: الصوت في الموائع وتجربة الناقوس المفرغ</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نضع جرساً كهربائياً مشتغلاً ومكشوفاً داخل ناقوس زجاجي شفاف موصول بمضخة تفريغ الهواء، ثم نشغل المضخة تدريجياً.
                      <br/><b>1.</b> ماذا نلاحظ بخصوص الصوت المسموع مع استمرار تفريغ الهواء؟ وماذا نستنتج حول طبيعة الموجة الصوتية؟ <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>2.</b> هل الصوت المنتشر في الهواء موجة مستعرضة أم طولية؟ علّل جوابك بدقة. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>3.</b> قارن من حيث بُعد الانتشار بين: موجة الصوت في الهواء، وموجة سطح الماء، وموجة نابض. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1.</b> تتناقص شدة الصوت تدريجياً ثم <b>ينعدم تماماً</b> عند تحقق الفراغ التام رغم استمرار رؤية مطرقة الجرس تهتز؛ نستنتج أن الموجة الصوتية <b>موجة ميكانيكية تحتاج حتماً إلى وسط مادي مرن</b> ولا تنتشر في الفراغ. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2.</b> الصوت في الهواء <b>موجة طولية</b> لأن انتشارها يتم عبر تتابع انضغاطات وتمددات لطبقات الهواء، بحيث يكون اتجاه اهتزاز جزيئات الهواء <b>موازياً (على نفس استقامة)</b> لاتجاه انتشار الموجة. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>3. تصنيف الأبعاد:</b><br/>
                      • موجة النابض: <b>أحادية البعد (1D)</b>.<br/>
                      • موجة سطح الماء: <b>ثنائية البعد (2D)</b>.<br/>
                      • الموجة الصوتية في الهواء: <b>ثلاثية الأبعاد (3D)</b>. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 7. Interactive Auto-Test -->
                <div class="bg-amber-950/20 border border-amber-500/30 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">اختبر دقة استيعابك المفاهيمي</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    نرسل من طرفي حبل مشدود في الآن نفسه تشويهين متطابقين في الشكل والسرعة: الأول استطالته موجبة نحو الأعلى ($y_1 = +2\\text{ cm}$) يتحرك يميناً، والثاني استطالته سالبة نحو الأسفل ($y_2 = -2\\text{ cm}$) يتحرك يساراً.
                    <br/>1) في اللحظة $t_c$ التي يتطابق فيها مركز التشويهين تماماً في منتصف الحبل، يبدو الحبل أفقياً تماماً ($y_{\\text{tot}} = 0$). هل يعني هذا أن الطاقة قد ضاعت وأن الموجتين أُخمدتا للأبد؟
                    <br/>2) علّل بدقة كيف تتحقق من بقاء المادة في موضعها لو وضعت علامة حبر ملون عند منتصف النابض أو الحبل.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل النموذجي المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1) تحليل لحظة التلاقي $t_c$:</b><br/>
                      • أثناء التراكب تكون الاستطالة المحصلة منعدمة مؤقتاً ($y = y_1 + y_2 = (+2) + (-2) = 0\\text{ cm}$) فيبدو الحبل وكأنه مسطح لحظياً، لكن نقط الحبل في ذلك الموضع تمتلك في تلك اللحظة <b>طاقة حركية غير منعدمة</b> (بسبب تقابل السرعتين وتراكبهما).<br/>
                      • <b>الاستنتاج وفق خاصية التراكب:</b> لا تضيع الطاقة ولا تتلف الموجتان؛ فبعد لحظة $t_c$ مباشرة، تعبر كل موجة الأخرى وتواصل انتشارها بنفس شكلها الأصلي ($+2\\text{ cm}$ يميناً و $-2\\text{ cm}$ يساراً) دون أي تشويه.</p>
                      <p><b>2) مصير علامة الحبر على الحبل أو النابض:</b><br/>
                      • على <b>الحبل (مستعرضة)</b>: تتحرك نقطة الحبر عمودياً صعوداً ثم نزولاً عند مرور الموجة، ثم تعود لتستقر في أفصولها الأصلي $x_0$ دون أن تنزاح أفقياً.<br/>
                      • على <b>النابض (طولية)</b>: تنضغط اللفة الحاملة للعلامة باتجاه الانتشار وتعود فوراً بمجرد مرور منطقة الانضغاط لتستقر في موضعها الأصلي نفسه، مما يبرهن على أن <b>الطاقة هي التي تنتقل وليس المادة</b>.</p>
                    </div>
                  </details>
                </div>
              </div>
`
          },
          {
            id: 'p01-ax2',
            num: 'المحور 02',
            titleAr: 'سرعة انتشار موجة ميكانيكية والعوامل المؤثرة فيها (قصور ومرونة الوسط)',
            titleFr: 'Célérité d’une onde mécanique'
          },
          {
            id: 'p01-ax3',
            num: 'المحور 03',
            titleAr: 'مفهوم التأخر الزمني $\\tau = \\frac{SM}{v}$ والعلاقة الاستطالية $y_M(t) = y_S(t - \\tau)$',
            titleFr: 'Retard temporel et relation d’élongation'
          }
        ]
      },
      {
        id: 'phys-02', num: '02', unit: 'الجزء 1: الموجات (Ondes)', status: 'upcoming',
        titleAr: 'الموجات الميكانيكية المتوالية الدورية', titleFr: 'Ondes mécaniques progressives périodiques',
        summary: 'الدورية الزمانية $T$ والدورية المكانية $\\lambda$، العلاقة $\\lambda = v \\cdot T = v/N$، توافق وتعاكس الطور، حيود الموجات، والوسط المبدد.',
        axes: [
          { num: 'المحور 01', titleAr: 'الدورية الزمانية $T$ وطول الموجة $\\lambda$ والعلاقة الأساسية $\\lambda = v / N$', titleFr: 'Périodicité temporelle et spatiale' },
          { num: 'المحور 02', titleAr: 'مقارنة الحركة الاهتزازية لنقطتين من وسط الانتشار (على توافق في الطور $d = k\\lambda$ أو تعاكس في الطور $d = (2k+1)\\frac{\\lambda}{2}$)', titleFr: 'Comparaison de l’état vibratoire de deux points' },
          { num: 'المحور 03', titleAr: 'ظاهرة الحيود (شرط $a \\le \\lambda$) ومفهوم الوسط المبدد', titleFr: 'Phénomène de diffraction et milieu dispersif' }
        ]
      },
      {
        id: 'phys-03', num: '03', unit: 'الجزء 1: الموجات (Ondes)', status: 'upcoming',
        titleAr: 'انتشار موجة ضوئية', titleFr: 'Propagation d’une onde lumineuse',
        summary: 'الطبيعة الموجية للضوء، حيود الضوء الأحادي اللون ($\\theta = \\lambda/a$ و $L = 2\\lambda D/a$)، معامل الانكسار، وتبدد الضوء الأبيض بالموشور.',
        axes: [
          { num: 'المحور 01', titleAr: 'حيود الضوء الأحادي اللون، الفرق الزاوي $\\theta = \\frac{\\lambda}{a}$، وعرض البقعة المركزية $L = \\frac{2\\lambda D}{a}$', titleFr: 'Diffraction de la lumière monochromatique' },
          { num: 'المحور 02', titleAr: 'معامل انكسار وسط شفاف $n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda}$ وعلاقات الموشور الأربعة وتبدد الضوء الأبيض', titleFr: 'Indice de réfraction et dispersion par un prisme' }
        ]
      },
      {
        id: 'phys-04', num: '04', unit: 'الجزء 2: التحولات النووية (Nucléaire)', status: 'upcoming',
        titleAr: 'التناقص الإشعاعي', titleFr: 'Décroissance radioactive',
        summary: 'استقرار وعدم استقرار النوى، مخطط سيغري $(N,Z)$، قوانين صودي للانحفاظ، النشاط الإشعاعي $\\alpha, \\beta^-, \\beta^+, \\gamma$، وقانون التناقص $N(t) = N_0 e^{-\\lambda t}$.',
        axes: [
          { num: 'المحور 01', titleAr: 'مخطط سيغري $(N,Z)$، قوانين صودي للانحفاظ، ومعادلات التفتتات الإشعاعية $\\alpha, \\beta^-, \\beta^+, \\gamma$', titleFr: 'Diagramme de Segrè et lois de conservation de Soddy' },
          { num: 'المحور 02', titleAr: 'قانون التناقص الإشعاعي $N(t) = N_0 e^{-\\lambda t}$، ثابتة الزمن $\\tau$، عمر النصف $t_{1/2} = \\frac{\\ln 2}{\\lambda}$، والتأريخ بالنشاط $a(t)$', titleFr: 'Loi de décroissance radioactive, demi-vie et datation' }
        ]
      },
      {
        id: 'phys-05', num: '05', unit: 'الجزء 2: التحولات النووية (Nucléaire)', status: 'upcoming',
        titleAr: 'النوى والكتلة والطاقة', titleFr: 'Noyaux, masse et énergie',
        summary: 'علاقة تكافؤ الكتلة-الطاقة لأينشتاين $E = \\Delta m \\cdot c^2$، النقص الكتلي، طاقة الربط للنويدة $\\mathcal{E}_l/A$، منحنى أستون، والانشطار والاندماج النووي.',
        axes: [
          { num: 'المحور 01', titleAr: 'النقص الكتلي $\\Delta m$، طاقة الربط للنواة $E_l = \\Delta m \\cdot c^2$، وطاقة الربط بالنسبة لنويدة $\\xi = E_l/A$ ومنحنى أستون', titleFr: 'Défaut de masse, énergie de liaison et courbe d’Aston' },
          { num: 'المحور 02', titleAr: 'الحصيلة الطاقية لتحول نووي $\\Delta E$ وتفاعلا الانشطار والاندماج النوويين', titleFr: 'Bilan énergétique, fission et fusion nucléaires' }
        ]
      },
      {
        id: 'phys-06', num: '06', unit: 'الجزء 3: الكهرباء (Électricité)', status: 'upcoming',
        titleAr: 'ثنائي القطب RC', titleFr: 'Dipôle RC',
        summary: 'المكثف، العلاقة $i = C \\frac{du_C}{dt}$، المعادلة التفاضلية لشحن وتفريغ مكثف، ثابتة الزمن $\\tau = RC$، والطاقة الكهربائية المخزونة $E_e = \\frac{1}{2}Cu_C^2$.',
        axes: [
          { num: 'المحور 01', titleAr: 'المكثف، العلاقة بين الشحنة والتوتر $q = C \\cdot u_C$، وتجميع المكثفات على التوالي والتوازي', titleFr: 'Le condensateur et associations de condensateurs' },
          { num: 'المحور 02', titleAr: 'استجابة ثنائي القطب RC لرتبة توتر صاعدة ونازلة (المعادلة التفاضلية، الحل، وثابتة الزمن $\\tau = RC$)', titleFr: 'Réponse d’un dipôle RC à un échelon de tension' },
          { num: 'المحور 03', titleAr: 'الطاقة الكهربائية المخزونة في المكثف $E_e = \\frac{1}{2}Cu_C^2 = \\frac{1}{2}\\frac{q^2}{C}$', titleFr: 'Énergie électrique emmagasinée dans un condensateur' }
        ]
      },
      {
        id: 'phys-07', num: '07', unit: 'الجزء 3: الكهرباء (Électricité)', status: 'upcoming',
        titleAr: 'ثنائي القطب RL', titleFr: 'Dipôle RL',
        summary: 'الوشيعة، التوتر $u_L = r i + L \\frac{di}{dt}$، استجابة ثنائي القطب RL لرتبة توتر، ثابتة الزمن $\\tau = \\frac{L}{R_T}$، والطاقة المغنطيسية $E_m = \\frac{1}{2}Li^2$.',
        axes: [
          { num: 'المحور 01', titleAr: 'الوشيعة وتعبير التوتر بين مربطيها $u_L = r \\cdot i + L \\frac{di}{dt}$ وتأثيرها على التيار', titleFr: 'La bobine et tension à ses bornes' },
          { num: 'المحور 02', titleAr: 'المعادلة التفاضلية لإقامة وانقطاع التيار، الحل، ثابتة الزمن $\\tau = \\frac{L}{R+r}$، والطاقة المغنطيسية $E_m = \\frac{1}{2}Li^2$', titleFr: 'Établissement et rupture du courant dans un dipôle RL' }
        ]
      },
      {
        id: 'phys-08', num: '08', unit: 'الجزء 3: الكهرباء (Électricité)', status: 'upcoming',
        titleAr: 'الذبذبات الحرة في دارة RLC متوالية', titleFr: 'Oscillations libres dans un circuit RLC série',
        summary: 'أنظمة التذبذب الثلاثة، المعادلة التفاضلية للدارة المثالية LC وللدارة RLC، الدور الخاص $T_0 = 2\\pi\\sqrt{LC}$، الدراسات الطاقية، وصيانة الذبذبات.',
        axes: [
          { num: 'المحور 01', titleAr: 'التفريغ التذبذبي وأنظمة التذبذب الثلاثة (شبه الدوري، اللادوري، والحرج) وتأثير المقاومة الكلية', titleFr: 'Régimes d’oscillations libres dans un circuit RLC série' },
          { num: 'المحور 02', titleAr: 'الدراسة التحليلية والطاقية للدارة المثالية LC والدور الخاص $T_0 = 2\\pi\\sqrt{LC}$', titleFr: 'Étude analytique et énergétique du circuit LC idéal' },
          { num: 'المحور 03', titleAr: 'تبدد الطاقة بمفعول جول في دارة RLC متوالية وصيانة الذبذبات بواسطة مولد يزود الدارة بتوتر $u_G = k \\cdot i$', titleFr: 'Bilan énergétique et entretien des oscillations' }
        ]
      },
      {
        id: 'phys-09', num: '09', unit: 'الجزء 3: الكهرباء (Électricité)', status: 'upcoming',
        titleAr: 'الموجات الكهرمغنطيسية وتضمين الوسع', titleFr: 'Ondes électromagnétiques et modulation d’amplitude',
        summary: 'نقل المعلومات بالموجات الكهرمغنطيسية، تضمين الوسع، نسبة التضمين $m = U_m/U_0$، شروط التضمين الجيد، ومراحل إزالة التضمين.',
        axes: [
          { num: 'المحور 01', titleAr: 'تضمين الوسع، تعبير التوتر المضمَّن، ونسبة التضمين $m$ وشروط التضمين الجيد ($m < 1$ و $F_P \\gg f_s$)', titleFr: 'Modulation d’amplitude et conditions d’une bonne modulation' },
          { num: 'المحور 02', titleAr: 'مراحل إزالة التضمين وشرط كشف الغلاف الجيد $T_P \\ll \\tau < T_s$ ودور دارة الانتقاء LC', titleFr: 'Démodulation d’amplitude et détection d’enveloppe' }
        ]
      },
      {
        id: 'phys-10', num: '10', unit: 'الجزء 4: الميكانيك (Mécanique)', status: 'upcoming',
        titleAr: 'قوانين نيوتن', titleFr: 'Les lois de Newton',
        summary: 'متجهة الموضع والسرعة والتسارع في معلم ديكارتي وأساس فريني، القانون الثاني لنيوتن $\\sum \\vec{F}_{ext} = m \\vec{a}_G$، والحركة المستقيمية على مستوى أفقي ومائل.',
        axes: [
          { num: 'المحور 01', titleAr: 'متجهة السرعة اللحظية ومتجهة التسارع في معلم ديكارتي وفي أساس فريني $(\\vec{u}, \\vec{n})$', titleFr: 'Vecteurs vitesse et accélération (Repère cartésien et base de Frenet)' },
          { num: 'المحور 02', titleAr: 'القانون الثاني لنيوتن وتطبيقه على حركة مركز قصور جسم صلب على مستوى أفقي أو مائل مع أو بدون احتكاك', titleFr: 'Deuxième loi de Newton et mouvements rectilignes' }
        ]
      },
      {
        id: 'phys-11', num: '11', unit: 'الجزء 4: الميكانيك (Mécanique)', status: 'upcoming',
        titleAr: 'تطبيقات: السقوط الرأسي لجسم صلب', titleFr: 'Applications : Chute verticale d’un solide',
        summary: 'السقوط الرأسي باحتكاك في مائع (دافعة أرخميدس وقوة الاحتكاك $f = kv^n$)، المعادلة التفاضلية، السرعة الحدية $v_{lim}$، طريقة أويلر، والسقوط الرأسي الحر.',
        axes: [
          { num: 'المحور 01', titleAr: 'السقوط الرأسي باحتكاك في مائع: المعادلة التفاضلية، التسارع البدئي $a_0$، السرعة الحدية $v_{lim}$، الزمن المميز $\\tau$، وطريقة أويلر', titleFr: 'Chute verticale avec frottement fluide et méthode d’Euler' },
          { num: 'المحور 02', titleAr: 'السقوط الرأسي الحر والمعادلات الزمنية للحركة $v_z(t)$ و $z(t)$', titleFr: 'Chute verticale libre d’un solide' }
        ]
      },
      {
        id: 'phys-12', num: '12', unit: 'الجزء 4: الميكانيك (Mécanique)', status: 'upcoming',
        titleAr: 'تطبيقات: الحركات المستوية (القذيفة والأقمار الاصطناعية)', titleFr: 'Applications : Mouvements plans (Projectile et satellites)',
        summary: 'حركة قذيفة في مجال الثقالة المنتظم (المعادلات الزمنية، معادلة المسار، القمة $S$، المدى $P$)، وحركة الكواكب والأقمار الاصطناعية وقوانين كيبلر.',
        axes: [
          { num: 'المحور 01', titleAr: 'حركة قذيفة في مجال الثقالة المنتظم: المعادلات الزمنية، معادلة المسار $y(x)$، إحداثيات قمة المسار $S$، والمدى $P$', titleFr: 'Mouvement d’un projectile dans un champ de pesanteur uniforme' },
          { num: 'المحور 02', titleAr: 'قوانين كيبلر الثلاثة وتطبيق القانون الثاني لنيوتن على الحركة الدائرية المنتظمة لكوكب أو قمر اصطناعي ($v$, $T$, والمدار الجيوساكن)', titleFr: 'Mouvement des planètes et des satellites artificiels' }
        ]
      },
      {
        id: 'phys-13', num: '13', unit: 'الجزء 4: الميكانيك (Mécanique)', status: 'upcoming',
        titleAr: 'دوران جسم صلب حول محور ثابت', titleFr: 'Rotation d’un solide autour d’un axe fixe',
        summary: 'الأفصول الزاوي $\\theta$، السرعة الزاوية $\\omega = \\dot{\\theta}$، التسارع الزاوي $\\ddot{\\theta}$، والعلاقة الأساسية للديناميك في حالة الدوران $\\sum \\mathcal{M}_{\\Delta}(\\vec{F}_{ext}) = J_{\\Delta} \\cdot \\ddot{\\theta}$.',
        axes: [
          { num: 'المحور 01', titleAr: 'معادلات الحركة الدورانية والعلاقة بين المقادير الخطية والمقادير الزاوية ($s = r\\theta$, $v = r\\dot{\\theta}$, $a_T = r\\ddot{\\theta}$)', titleFr: 'Repérage angulaire et cinématique de rotation' },
          { num: 'المحور 02', titleAr: 'العلاقة الأساسية للديناميك في حالة الدوران $\\sum \\mathcal{M}_{\\Delta} = J_{\\Delta} \\cdot \\ddot{\\theta}$ وتطبيقها على مجموعة ميكانيكية (بكرة + جسم معلق)', titleFr: 'Relation fondamentale de la dynamique en rotation' }
        ]
      },
      {
        id: 'phys-14', num: '14', unit: 'الجزء 4: الميكانيك (Mécanique)', status: 'upcoming',
        titleAr: 'المجموعات الميكانيكية المتذبذبة', titleFr: 'Systèmes mécaniques oscillants',
        summary: 'النواس المرن، نواس اللي، النواس الوازن، والنواس البسيط، المعادلات التفاضلية، الدور الخاص $T_0$، وظاهرة الخمود والرنين الميكانيكي.',
        axes: [
          { num: 'المحور 01', titleAr: 'النواس المرن الأفقي: قوة الارتداد $\\vec{T} = -kx\\vec{i}$، المعادلة التفاضلية، الحل الجيبي، والدور الخاص $T_0 = 2\\pi\\sqrt{\\frac{m}{k}}$', titleFr: 'Le pendule élastique' },
          { num: 'المحور 02', titleAr: 'نواس اللي ($T_0 = 2\\pi\\sqrt{\\frac{J_{\\Delta}}{C}}$)، النواس الوازن ($T_0 = 2\\pi\\sqrt{\\frac{J_{\\Delta}}{m \\cdot g \\cdot d}}$)، والنواس البسيط في حالة الذبذبات الصغيرة', titleFr: 'Pendule de torsion, pendule pesant et pendule simple' },
          { num: 'المحور 03', titleAr: 'خمود التذبذبات الميكانيكية وظاهرة الرنين الميكانيكي', titleFr: 'Amortissement et phénomène de résonance mécanique' }
        ]
      },
      {
        id: 'phys-15', num: '15', unit: 'الجزء 4: الميكانيك (Mécanique)', status: 'upcoming',
        titleAr: 'المظاهر الطاقية للتذبذبات الميكانيكية', titleFr: 'Aspects énergétiques des oscillations mécaniques',
        summary: 'شغل قوة، طاقة الوضع المرنة $E_{pe} = \\frac{1}{2}kx^2$، طاقة الوضع اللي $E_{pt} = \\frac{1}{2}C\\theta^2$، طاقة الوضع الثقالية، والطاقة الميكانيكية للنواس المرن والوازن ولي.',
        axes: [
          { num: 'المحور 01', titleAr: 'شغل قوة الارتداد وطاقة الوضع المرنة $E_{pe} = \\frac{1}{2}kx^2 + Cte$ والدراسة الطاقية للنواس المرن', titleFr: 'Étude énergétique du pendule élastique' },
          { num: 'المحور 02', titleAr: 'الدراسة الطاقية لنواس اللي ($E_{pt} = \\frac{1}{2}C\\theta^2$) وللنواس الوازن وانحفاظ أو عدم انحفاظ الطاقة الميكانيكية $E_m$', titleFr: 'Étude énergétique du pendule de torsion et du pendule pesant' }
        ]
      }
    ]
  },

  chemistry: {
    id: 'chemistry',
    titleAr: 'الكيمياء',
    titleFr: 'Chimie',
    badge: '2BAC PC • المعامل 7',
    color: 'emerald',
    description: 'المنهاج الرسمي الكامل للكيمياء خاص حصرياً بمسلك العلوم الفيزيائية (2BAC PC — 10 دروس رسمية موزعة على الأجزاء الأربعة للمقرر).',
    lessons: [
      {
        id: 'chem-01', num: '01', unit: 'الجزء 1: التحولات السريعة والبطيئة', status: 'upcoming',
        titleAr: 'التحولات السريعة والتحولات البطيئة', titleFr: 'Transformations rapides et transformations lentes',
        summary: 'تفاعلات الأكسدة-اختزال، المزدوجات المؤكسد/مختزل، التمييز بين التحولات السريعة والبطيئة، والعوامل الحركية (درجة الحرارة والتركيز البدئي).',
        axes: [
          { num: 'المحور 01', titleAr: 'تفاعلات الأكسدة-اختزال وكتابة أنصاف المعادلات الإلكترونية والمعادلة الحصيلة', titleFr: 'Réactions d’oxydo-réduction' },
          { num: 'المحور 02', titleAr: 'التحولات السريعة والبطيئة ودور العوامل الحركية في تسريع أو توقيف التفاعل (السقي الكيميائي)', titleFr: 'Facteurs cinétiques et trempe chimique' }
        ]
      },
      {
        id: 'chem-02', num: '02', unit: 'الجزء 1: التحولات السريعة والبطيئة', status: 'upcoming',
        titleAr: 'التتبع الزمني لتحول كيميائي — سرعة التفاعل', titleFr: 'Suivi temporel d’une transformation chimique — Vitesse de réaction',
        summary: 'طرق التتبع الزمني (المعايرة، الموصلية $\\sigma$، ضغط أو حجم غاز)، السرعة الحجمية $v(t) = \\frac{1}{V_S}\\frac{dx}{dt}$، وزمن نصف التفاعل $t_{1/2}$.',
        axes: [
          { num: 'المحور 01', titleAr: 'طرق التتبع الزمني واستغلال جدول التقدم لإيجاد تعبير $x(t)$ بدلالة المقدار الفيزيائي المقاس ($\\sigma, G, P, V$)', titleFr: 'Méthodes de suivi temporel et avancement x(t)' },
          { num: 'المحور 02', titleAr: 'تعريف وحساب السرعة الحجمية للتفاعل مبيانياً $v(t) = \\frac{1}{V_S}\\frac{dx}{dt}$ وتحديد زمن نصف التفاعل $t_{1/2}$', titleFr: 'Vitesse volumique de réaction et temps de demi-réaction' }
        ]
      },
      {
        id: 'chem-03', num: '03', unit: 'الجزء 2: التحولات غير الكلية', status: 'upcoming',
        titleAr: 'التحولات الكيميائية التي تحدث في منحيين', titleFr: 'Transformations chimiques s’effectuant dans les deux sens',
        summary: 'الأحماض والقواعد حسب برونشتد، $pH$ محلول مائي، نسبة التقدم النهائي $\\tau = x_f / x_{max}$، والتمييز بين التحول الكلي ($\\tau = 1$) وغير الكلي ($\\tau < 1$).',
        axes: [
          { num: 'المحور 01', titleAr: 'تعريف الحمض والقاعدة حسب برونشتد وقياس $pH = -\\log[H_3O^+]$', titleFr: 'Acides et bases selon Brönsted et pH d’une solution' },
          { num: 'المحور 02', titleAr: 'نسبة التقدم النهائي $\\tau = \\frac{x_f}{x_{max}}$ ومفهوم التوازن الكيميائي الديناميكي', titleFr: 'Taux d’avancement final et équilibre chimique' }
        ]
      },
      {
        id: 'chem-04', num: '04', unit: 'الجزء 2: التحولات غير الكلية', status: 'upcoming',
        titleAr: 'حالة توازن مجموعة كيميائية', titleFr: 'État d’équilibre d’un système chimique',
        summary: 'خارج التفاعل $Q_r$، ثابتة التوازن $K = Q_{r,éq}$، استغلال الموصلية $\\sigma$، وتأثير الحالة البدئية على نسبة التقدم النهائي $\\tau$.',
        axes: [
          { num: 'المحور 01', titleAr: 'تعبير خارج التفاعل $Q_r$ وثابتة التوازن $K$ التي تتعلق فقط بدرجة الحرارة', titleFr: 'Quotient de réaction Q_r et constante d’équilibre K' },
          { num: 'المحور 02', titleAr: 'تحديد $Q_{r,éq}$ بواسطة الموصلية $\\sigma$ وتأثير التركيز البدئي وثابتة التوازن $K$ على نسبة التقدم النهائي $\\tau$', titleFr: 'Conductimétrie et influence de l’état initial sur τ' }
        ]
      },
      {
        id: 'chem-05', num: '05', unit: 'الجزء 2: التحولات غير الكلية', status: 'upcoming',
        titleAr: 'التحولات المقرونة بالتفاعلات حمض-قاعدة في محلول مائي', titleFr: 'Transformations liées à des réactions acide-base',
        summary: 'الجداء الأيوني للماء $K_e$، ثابتة الحمضية $K_A$ و $pK_A$، مخطط هيمنة الأنواع الحمضية والقاعدية، والمعايرة الحمضية-القاعدية.',
        axes: [
          { num: 'المحور 01', titleAr: 'التحلل البروتوني الذاتي للماء، الجداء الأيوني $K_e = [H_3O^+][HO^-]$، ثابتة الحمضية $K_A$ و $pK_A$، ومخطط الهيمنة', titleFr: 'Produit ionique de l’eau, K_A, pK_A et diagramme de prédominance' },
          { num: 'المحور 02', titleAr: 'المعايرة pH-مترية، تحديد نقطة التكافؤ $E(V_E, pH_E)$، علاقة التكافؤ، وتحديد $pK_A$ عند نصف التكافؤ والكاشف الملون الملائم', titleFr: 'Dosage acido-basique, repérage de l’équivalence et choix de l’indicateur' }
        ]
      },
      {
        id: 'chem-06', num: '06', unit: 'الجزء 3: منحى تطور مجموعة كيميائية', status: 'upcoming',
        titleAr: 'التطور التلقائي لمجموعة كيميائية', titleFr: 'Évolution spontanée d’un système chimique',
        summary: 'معيار التطور التلقائي لمجموعة كيميائية عن طريق مقارنة خارج التفاعل في الحالة البدئية $Q_{r,i}$ مع ثابتة التوازن $K$.',
        axes: [
          { num: 'المحور 01', titleAr: 'معيار التطور التلقائي ($Q_{r,i} < K$ في المنحى المباشر، $Q_{r,i} > K$ في المنحى المعاكس، و $Q_{r,i} = K$ حالة توازن)', titleFr: 'Critère d’évolution spontanée d’un système chimique' }
        ]
      },
      {
        id: 'chem-07', num: '07', unit: 'الجزء 3: منحى تطور مجموعة كيميائية', status: 'upcoming',
        titleAr: 'التحولات التلقائية في الأعمدة وتحصيل الطاقة', titleFr: 'Transformations spontanées dans les piles et production d’énergie',
        summary: 'بنية واشتغال العمود الكهروكيميائي، تحديد القطبية ومنحى التيار، التبيانة الاصطلاحية للعمود، وكمية الكهرباء $Q = I \\cdot \\Delta t = n(e^-) \\cdot F$.',
        axes: [
          { num: 'المحور 01', titleAr: 'بنية العمود الكهروكيميائي، القنطرة الملحية، تحديد الأنود (أكسدة) والكاثود (اختزال)، والتبيانة الاصطلاحية', titleFr: 'Constitution d’une pile, polarité et schéma conventionnel' },
          { num: 'المحور 02', titleAr: 'الدراسة الكمية للعمود والحصيلة المادية باستغلال العلاقة $Q = I \\cdot \\Delta t = n(e^-) \\cdot F$', titleFr: 'Étude quantitative d’une pile et quantité d’électricité' }
        ]
      },
      {
        id: 'chem-08', num: '08', unit: 'الجزء 3: منحى تطور مجموعة كيميائية', status: 'upcoming',
        titleAr: 'التحولات القسرية (التحليل الكهربائي)', titleFr: 'Transformations forcées — Électrolyse',
        summary: 'مبدأ التحول القسري، تحديد الأنود والكاثود في التحليل الكهربائي، التفاعلات المحتملة عند الإلكترودين، والحصيلة الكمية وتطبيقاته الصناعية.',
        axes: [
          { num: 'المحور 01', titleAr: 'مبدأ التحول القسري وتحديد تفاعل الأكسدة بجوار الأنود (المرتبط بالقطب الموجب للمولد) وتفاعل الاختزال بجوار الكاثود', titleFr: 'Principe de l’électrolyse et réactions aux électrodes' },
          { num: 'المحور 02', titleAr: 'الدراسة الكمية للتحليل الكهربائي وتطبيقاته (طلاء الفلزات وشحن المركمات)', titleFr: 'Bilan quantitatif et applications de l’électrolyse' }
        ]
      },
      {
        id: 'chem-09', num: '09', unit: 'الجزء 4: التحكم في تطور المجموعات الكيميائية', status: 'upcoming',
        titleAr: 'تفاعلات الأسترة والحلمأة', titleFr: 'Réactions d’estérification et d’hydrolyse',
        summary: 'تسمية الكحولات والأحماض الكربوكسيلية والإسترات، مميزات تفاعلي الأسترة والحلمأة (بطيئان، محدودان، لا حراريان)، والتوازن أسترة-حلمأة.',
        axes: [
          { num: 'المحور 01', titleAr: 'المجموعات المميزة والتسمية النظامية للكحولات والأحماض الكربوكسيلية والإسترات', titleFr: 'Groupes caractéristiques et nomenclature des composés oxygénés' },
          { num: 'المحور 02', titleAr: 'معادلتا الأسترة والحلمأة، مميزاتهما التجريبية، وثابتة التوازن والسرعة الحجمية', titleFr: 'Étude expérimentale et équilibre d’estérification-hydrolyse' }
        ]
      },
      {
        id: 'chem-10', num: '10', unit: 'الجزء 4: التحكم في تطور المجموعات الكيميائية', status: 'upcoming',
        titleAr: 'التحكم في تطور المجموعات الكيميائية', titleFr: 'Contrôle de l’évolution des systèmes chimiques',
        summary: 'مردود التحول $r = n_{exp}/n_{th}$، تحسين مردود تصنيع إستر باستعمال أندريد الحمض أو إزالة أحد النواتج، الحفز، وتفاعل التصبن (حلمأة إستر في وسط قاعدي).',
        axes: [
          { num: 'المحور 01', titleAr: 'حساب المردود $r$ والتحكم في السرعة (درجة الحرارة والحفاز) وفي الحالة النهائية (تصنيع الإستر انطلاقاً من أندريد الحمض)', titleFr: 'Rendement d’une synthèse et réactivité d’un anhydride d’acide' },
          { num: 'المحور 02', titleAr: 'حلمأة الإسترات في وسط قاعدي: تفاعل التصبن (Saponification) وخصائص الصابون', titleFr: 'Hydrolyse basique des esters : Saponification' }
        ]
      }
    ]
  }
};


// Master Synthesis Exam for Math Lesson 01 (Devoir Surveillé N°1 Blanc)
window.EULER_MASTER_EXAM_MATH01 = `
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
                    <p>ج) بين أن المعادلة $f(x) = 0$ تقبل حلاً على الأقل في المجال $]-1, 0[$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
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
            <button onclick="const el = document.getElementById('ds1-master-solution'); el.classList.toggle('hidden');" class="w-full text-right p-4 sm:p-5 bg-gradient-to-r from-amber-500/20 via-slate-900 to-cyan-500/20 hover:from-amber-500/30 text-xs sm:text-sm font-bold text-amber-300 flex items-center justify-between transition">
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
                  <p><strong>4. نهاية $L_4$:</strong> نفصل النهاية بإضافة وطرح $1$ في البسط:</p>
                  <div class="font-mono text-cyan-300 p-2 bg-slate-900 rounded">
                    $$L_4 = \\lim_{x \\to 0} \\left[ \\frac{\\sqrt{1+x} - 1}{x} - \\frac{\\sqrt[3]{1+x} - 1}{x} \\right] = \\left(\\sqrt{u}\\right)'(0) - \\left(\\sqrt[3]{u}\\right)'(0) = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$$
                  </div>
                </div>
              </div>

              <!-- Solution Ex 2 -->
              <div class="space-y-3 pt-3 border-t border-slate-800">
                <div class="text-purple-400 font-bold text-sm border-b border-slate-800 pb-1">حل التمرين الثاني: الاتصال في نقطة ولدالة مجزأة (4.50 نقط)</div>
                <div class="space-y-2">
                  <p><strong>1. حساب $\\lim_{x \\to 1^+} f(x)$:</strong> نستعمل الضرب في المرافق:</p>
                  <div class="font-mono text-purple-300 p-2 bg-slate-900 rounded">
                    $$\\lim_{x \\to 1^+} \\frac{(x^2+3) - 4}{(x-1)(\\sqrt{x^2+3} + 2)} = \\lim_{x \\to 1^+} \\frac{(x-1)(x+1)}{(x-1)(\\sqrt{x^2+3} + 2)} = \\lim_{x \\to 1^+} \\frac{x+1}{\\sqrt{x^2+3} + 2} = \\frac{2}{4} = \\frac{1}{2}$$
                  </div>
                  <p><strong>2. قيمة $a$ لضمان الاتصال:</strong> لدينا $f(1) = 1^3 + a(1) + 1/2 = a + 3/2$.</p>
                  <p>تكون $f$ متصلة في $1$ إذا وفقط إذا كان $\\lim_{x \\to 1^+} f(x) = f(1) \\iff \\frac{1}{2} = a + \\frac{3}{2} \\iff a = \\frac{1}{2} - \\frac{3}{2} = -1$.</p>
                  <p><strong>3. الاتصال على المجالات و TVI:</strong></p>
                  <p>• على $]1, +\\infty[$: الدالة $x \\mapsto \\sqrt{x^2+3} - 2$ متصلة، والدالة $x \\mapsto x - 1$ متصلة ولا تنعدم على $]1, +\\infty[$، إذن $f$ متصلة كخارج دالتين متصلتين.</p>
                  <p>• على $]-\\infty, 1]$: الدالة $f(x) = x^3 - x + 1/2$ حدودية، إذن متصلة على $\\mathbb{R}$ وبالخصوص على $]-\\infty, 1]$.</p>
                  <p>• بما أن $f$ متصلة في $1$ ومتصلة على $]-\\infty, 1]$ وعلى $[1, +\\infty[$، فإنها متصلة على $\\mathbb{R}$ كاملاً.</p>
                  <p>• تطبيق TVI على $[-1, 0]$: $f(-1) = (-1)^3 - (-1) + 1/2 = 1/2 > 0$ و $f(0) = 1/2 > 0$؟ نتحقق من $[-2, -1]$: $f(-2) = -8 + 2 + 1/2 = -5.5 < 0$ و $f(-1) = 1/2 > 0 \\implies f(-2) \\times f(-1) < 0$. إذن المعادلة تقبل حلاً في $]-2, -1[$.</p>
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
                  <p>• الطريقة 1 (بمبرهنة مشتقة العكسية): نلاحظ أن $h(1) = 1 + 2(1) = 3 \\implies h^{-1}(3) = 1$.</p>
                  <p>ولدينا $h'(x) = 1 + \\frac{1}{\\sqrt{x}} \\implies h'(1) = 1 + 1 = 2 \\neq 0$. إذن $(h^{-1})'(3) = \\frac{1}{h'(1)} = \\frac{1}{2}$.</p>
                  <p>• الطريقة 2 (بالحساب المباشر): $(h^{-1})'(x) = 2(\\sqrt{x+1}-1) \\times \\frac{1}{2\\sqrt{x+1}} = \\frac{\\sqrt{x+1}-1}{\\sqrt{x+1}} = 1 - \\frac{1}{\\sqrt{x+1}}$.</p>
                  <p>إذن $(h^{-1})'(3) = 1 - \\frac{1}{\\sqrt{4}} = 1 - \\frac{1}{2} = \\frac{1}{2}$. النتيجتان متطابقتان تماماً!</p>
                  <p><strong>6. التأويل الهندسي في النقطة $O(0, 0)$:</strong> المنحنى $(C_{h^{-1}})$ يقبل نصف مماس أفقي موجه نحو اليمين في $O(0, 0)$ (تماثل مع نصف المماس العمودي لـ $(C_h)$).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
`;
