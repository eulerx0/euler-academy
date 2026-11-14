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
        progressText: 'المحاور 1 و 2 و 3 مكتملة بالبرهان الصارم + إطار المحورين 4 و 5',
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
                        $$f([a, b]) = [m, M] = [\min_{x \in [a, b]} f(x), \max_{x \in [a, b]} f(x)]$$
                      </div>
                    </div>
                    <div class="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                      <div class="text-emerald-400 font-bold text-sm mb-1">خاصية المجال (Propriété de l'Intervalle)</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        صورة أي مجال $I$ (مفتوح، نصف مفتوح، أو غير محدود) بدالة متصلة $f$ هي حتماً مجال $J = f(I)$ (ليس بالضرورة من نفس صنف $I$).
                      </p>
                      <div class="my-2 text-center text-emerald-300 text-sm">
                        $$f \text{ continue sur l'intervalle } I \implies f(I) \text{ est un intervalle}$$
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
                          <td class="p-2 text-cyan-300 font-mono">$[f(a), \lim_{x \to b^-} f(x)[$</td>
                          <td class="p-2 text-rose-300 font-mono">$]\lim_{x \to b^-} f(x), f(a)]$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2 font-mono text-amber-300">$]a, b]$</td>
                          <td class="p-2 text-cyan-300 font-mono">$]\lim_{x \to a^+} f(x), f(b)]$</td>
                          <td class="p-2 text-rose-300 font-mono">$[f(b), \lim_{x \to a^+} f(x)[$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2 font-mono text-amber-300">$]a, b[$</td>
                          <td class="p-2 text-cyan-300 font-mono">$]\lim_{x \to a^+} f(x), \lim_{x \to b^-} f(x)[$</td>
                          <td class="p-2 text-rose-300 font-mono">$]\lim_{x \to b^-} f(x), \lim_{x \to a^+} f(x)[$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2 font-mono text-amber-300">$[a, +\infty[$</td>
                          <td class="p-2 text-cyan-300 font-mono">$[f(a), \lim_{x \to +\infty} f(x)[$</td>
                          <td class="p-2 text-rose-300 font-mono">$]\lim_{x \to +\infty} f(x), f(a)]$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2 font-mono text-amber-300">$]-\infty, b]$</td>
                          <td class="p-2 text-cyan-300 font-mono">$]\lim_{x \to -\infty} f(x), f(b)]$</td>
                          <td class="p-2 text-rose-300 font-mono">$[f(b), \lim_{x \to -\infty} f(x)[$</td>
                        </tr>
                        <tr class="hover:bg-slate-900/30">
                          <td class="p-2 font-mono text-amber-300">$]-\infty, +\infty[$</td>
                          <td class="p-2 text-cyan-300 font-mono">$]\lim_{x \to -\infty} f(x), \lim_{x \to +\infty} f(x)[$</td>
                          <td class="p-2 text-rose-300 font-mono">$]\lim_{x \to +\infty} f(x), \lim_{x \to -\infty} f(x)[$</td>
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
                        إذا كانت $f$ دالة متصلة على قطعة $[a, b]$، فلكل عدد حقيقي $\beta$ محصور بين $f(a)$ و $f(b)$، يوجد على الأقل عنصر $c \in [a, b]$ بحيث:
                      </p>
                      <div class="text-center text-cyan-300 text-sm font-mono my-2">
                        $$f(c) = \beta$$
                      </div>
                      <div class="mt-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                        <strong>الحالة الخاصة بالامتحان الوطني ($\beta = 0$):</strong><br>
                        إذا كانت $f$ متصلة على $[a, b]$ وكان $f(a) \times f(b) < 0$، فإن المعادلة $f(x) = 0$ تقبل حلاً على الأقل في المجال المفتوح $]a, b[$.
                      </div>
                    </div>

                    <!-- Unique Solution TVI (Unicity) -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-emerald-800/40">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-emerald-400 font-bold text-sm">مبرهنة الوحدانية (Unicité)</span>
                        <span class="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-bold">حل وحيد $\alpha$</span>
                      </div>
                      <p class="text-xs text-slate-300 leading-relaxed mb-2">
                        إذا تحقق الشرطان الصارمان معاً:
                      </p>
                      <ul class="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                        <li>$f$ <strong>متصلة</strong> على مجال $I$ (أو قطعة $[a, b]$).</li>
                        <li>$f$ <strong>رتيبة قطعاً</strong> على هذا المجال (تزايدية قطعاً أو تناقصية قطعاً).</li>
                        <li>$0 \in f(I)$ (أو $f(a) \times f(b) < 0$ في حالة القطعة).</li>
                      </ul>
                      <p class="text-xs text-slate-200 mt-2 font-semibold">
                        فإن المعادلة $f(x) = 0$ تقبل <strong>حلاً وحيداً</strong> $\alpha \in I$:
                      </p>
                      <div class="text-center text-emerald-300 text-sm font-mono my-2">
                        $$\exists ! \, \alpha \in I, \quad f(\alpha) = 0$$
                      </div>
                    </div>
                  </div>

                  <!-- Geometric Interpretation Card -->
                  <div class="bg-slate-950/50 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                    <div class="text-purple-400 text-lg font-bold">📐</div>
                    <div>
                      <div class="text-purple-300 font-bold text-xs mb-1">التأويل الهندسي البياني (Interprétation Géométrique)</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        هندسياً، القول بأن المعادلة $f(x) = 0$ تقبل حلاً وحيداً $\alpha$ على $I$ يعني أن المنحنى الممثل للدالة $(C_f)$ يقطع محور الأفاصيل $(Ox)$ في <strong>نقطة وحيدة</strong> إحداثياتها $(\alpha, 0)$. إذا طُلب حل المعادلة $f(x) = x$، فالحل هو نقطة تقاطع $(C_f)$ مع المنصف الأول $(\Delta): y = x$.
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
                  <h4 class="text-lg font-bold text-white mb-2">طريقة التفرع الثنائي لتأطير الحل $\alpha$</h4>
                  <p class="text-sm text-slate-300 leading-relaxed mb-4">
                    التفرع الثنائي (Méthode de Dichotomie) هي خوارزمية تكرارية منهجية تمكننا من تأطير الجذر $\alpha$ بسعة مرغوبة $r > 0$ (مثل $0.25$ أو $10^{-2}$) عبر تنصيف المجال دورياً:
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    <div class="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                      <div class="text-amber-400 font-bold text-xs mb-1">المرحلة 1: مركز المجال</div>
                      <p class="text-xs text-slate-300">
                        ننطلق من $[a_0, b_0]$ حيث $f(a_0) \times f(b_0) < 0$. نحسب المركز:
                      </p>
                      <div class="text-center text-amber-300 font-mono my-1 text-xs">
                        $$m = \frac{a_0 + b_0}{2}$$
                      </div>
                    </div>
                    <div class="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                      <div class="text-amber-400 font-bold text-xs mb-1">المرحلة 2: اختبار الإشارة</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        نحسب صورة المركز $f(m)$:
                      </p>
                      <ul class="text-[11px] text-slate-300 space-y-1 mt-1">
                        <li>إذا $f(a_0) \times f(m) < 0 \implies \alpha \in ]a_0, m[$</li>
                        <li>إذا $f(m) \times f(b_0) < 0 \implies \alpha \in ]m, b_0[$</li>
                        <li>إذا $f(m) = 0 \implies \alpha = m$</li>
                      </ul>
                    </div>
                    <div class="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                      <div class="text-amber-400 font-bold text-xs mb-1">المرحلة 3: السعة بعد $n$ خطوة</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        في كل خطوة تتقلص السعة بالنصف، فتكون السعة بعد $n$ تكراراً هي:
                      </p>
                      <div class="text-center text-cyan-300 font-mono my-1 text-xs">
                        $$\text{Amplitude} = \frac{b_0 - a_0}{2^n}$$
                      </div>
                    </div>
                  </div>

                  <div class="p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-xs text-slate-300 flex items-center justify-between">
                    <span>صيغة تحديد عدد الخطوات $n$ الأدنى للوصول لسعة $r$:</span>
                    <span class="font-mono text-cyan-400 bg-cyan-950/50 px-2 py-1 rounded border border-cyan-800/40">
                      $$2^n \ge \frac{b-a}{r} \iff n \ge \frac{\ln(\frac{b-a}{r})}{\ln 2}$$
                    </span>
                  </div>
                </div>

                <!-- 4. Strategic Link: Sign of f(x) from alpha -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold">4. الربط المنهجي الحاسم</span>
                    <span class="text-xs text-slate-400">Signe de f(x) à partir du zéro alpha</span>
                  </div>
                  <h4 class="text-lg font-bold text-white mb-2">استنتاج إشارة دالة $f(x)$ على مجال انطلاقاً من جذرها الوحيد $\alpha$</h4>
                  <p class="text-sm text-slate-300 leading-relaxed mb-4">
                    هذا السؤال هو حجر الزاوية في دراسة إشارة المشتقة أو دراسة إشارة الدالة المساعدة $g(x)$ في الجزء الأول من تمرين دراسة الدوال بالامتحان الوطني:
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <!-- Case f is strictly increasing -->
                    <div class="bg-slate-950/80 p-4 rounded-xl border border-cyan-800/40">
                      <div class="text-cyan-400 font-bold text-xs mb-2 flex items-center gap-2">
                        <span>📈</span> الحالة الأولى: $f$ متصلة وتزايدية قطعاً على $I$ وتنعدم في $\alpha$
                      </div>
                      <div class="space-y-2 text-xs text-slate-300">
                        <div class="p-2 bg-slate-900/80 rounded border border-slate-800 font-mono">
                          $$\forall x \in I, \quad x \le \alpha \implies f(x) \le f(\alpha) = 0 \implies f(x) \le 0$$
                        </div>
                        <div class="p-2 bg-slate-900/80 rounded border border-slate-800 font-mono">
                          $$\forall x \in I, \quad x \ge \alpha \implies f(x) \ge f(\alpha) = 0 \implies f(x) \ge 0$$
                        </div>
                      </div>
                      <div class="mt-3">
                        <div class="text-[11px] text-slate-400 mb-1">جدول الإشارة:</div>
                        <div class="grid grid-cols-4 text-center font-mono text-xs border border-slate-700 rounded overflow-hidden">
                          <div class="bg-slate-800 text-slate-300 p-1">x</div>
                          <div class="bg-slate-900 text-slate-400 p-1">$a$</div>
                          <div class="bg-slate-900 text-amber-300 p-1">$\alpha$</div>
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
                        <span>📉</span> الحالة الثانية: $f$ متصلة وتناقصية قطعاً على $I$ وتنعدم في $\alpha$
                      </div>
                      <div class="space-y-2 text-xs text-slate-300">
                        <div class="p-2 bg-slate-900/80 rounded border border-slate-800 font-mono">
                          $$\forall x \in I, \quad x \le \alpha \implies f(x) \ge f(\alpha) = 0 \implies f(x) \ge 0$$
                        </div>
                        <div class="p-2 bg-slate-900/80 rounded border border-slate-800 font-mono">
                          $$\forall x \in I, \quad x \ge \alpha \implies f(x) \le f(\alpha) = 0 \implies f(x) \le 0$$
                        </div>
                      </div>
                      <div class="mt-3">
                        <div class="text-[11px] text-slate-400 mb-1">جدول الإشارة:</div>
                        <div class="grid grid-cols-4 text-center font-mono text-xs border border-slate-700 rounded overflow-hidden">
                          <div class="bg-slate-800 text-slate-300 p-1">x</div>
                          <div class="bg-slate-900 text-slate-400 p-1">$a$</div>
                          <div class="bg-slate-900 text-amber-300 p-1">$\alpha$</div>
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
                        إذا اكتفيت بشرط الاتصال و $f(a) \times f(b) < 0$، فأنت أثبت فقط وجود <strong>حل على الأقل</strong> وليس <strong>حلاً وحيداً</strong>! يخصم المصحح فوراً نصف النقطة المخصصة للفرع.
                      </p>
                    </div>

                    <div class="p-3 bg-rose-950/20 border border-rose-900/40 rounded-xl">
                      <div class="text-rose-400 font-bold text-xs mb-1">❌ الفخ 2: ضرب نهايتين $f(a) \times f(b) < 0$ في مجال مفتوح</div>
                      <p class="text-xs text-slate-300 leading-relaxed">
                        على مجال مفتوح $]a, b[$ حيث $a$ أو $b$ غير منتم لمجموعة التعريف (أو $\pm\infty$)، لا يصح كتابة $f(a) \times f(b) < 0$ لأن $f(a)$ غير معرف! الصواب هو حساب النهايات وإظهار أن:
                        $$0 \in f(]a, b[)$$
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
                    لتكن $f$ الدالة العددية المعرفة على $\mathbb{R}$ بما يلي: $f(x) = x^3 + 3x - 1$.
                  </p>

                  <div class="space-y-4">
                    <!-- Q1 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-amber-400 font-bold text-xs">السؤال 1: أثبت أن $f$ تزايدية قطعاً على $\mathbb{R}$.</span>
                        <span class="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">0.25 ن</span>
                      </div>
                      <div class="text-xs text-slate-300 leading-relaxed space-y-1">
                        <p class="text-emerald-400 font-semibold mb-1">صياغة التحرير النموذجية:</p>
                        <p>الدالة $f$ حدودية، إذن فهي قابلة للاشتقاق على $\mathbb{R}$، ولدينا لكل $x \in \mathbb{R}$:</p>
                        <div class="text-center text-cyan-300 font-mono my-1">
                          $$f'(x) = (x^3 + 3x - 1)' = 3x^2 + 3 = 3(x^2 + 1)$$
                        </div>
                        <p>بما أن $x^2 \ge 0$ لكل $x \in \mathbb{R}$، فإن $x^2 + 1 \ge 1 > 0$، ومنه $f'(x) > 0$ قطعا لكل $x \in \mathbb{R}$.</p>
                        <p class="text-emerald-300 font-semibold">إذن الدالة $f$ تزايدية قطعاً على $\mathbb{R}$.</p>
                      </div>
                    </div>

                    <!-- Q2 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-amber-400 font-bold text-xs">السؤال 2: بين أن المعادلة $f(x) = 0$ تقبل حلاً وحيداً $\alpha \in \mathbb{R}$، وأن $0 < \alpha < 1$.</span>
                        <span class="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">0.50 ن</span>
                      </div>
                      <div class="text-xs text-slate-300 leading-relaxed space-y-1">
                        <p class="text-emerald-400 font-semibold mb-1">صياغة التحرير النموذجية:</p>
                        <p>1. <strong>الاتصال والرتابة:</strong> الدالة $f$ متصلة وتزايدية قطعاً على $\mathbb{R}$ (دالة حدودية مشتقتها موجبة قطعا).</p>
                        <p>2. <strong>صورة المجال $\mathbb{R}$ الكامل:</strong></p>
                        <div class="text-center text-cyan-300 font-mono my-1">
                          $$f(\mathbb{R}) = f(]-\infty, +\infty[) = \left]\lim_{x \to -\infty} f(x), \lim_{x \to +\infty} f(x)\right[ = ]-\infty, +\infty[ = \mathbb{R}$$
                        </div>
                        <p>بما أن $0 \in \mathbb{R}$، فإن المعادلة $f(x) = 0$ تقبل حلاً وحيداً $\alpha \in \mathbb{R}$.</p>
                        <p>3. <strong>التحقق من أن $\alpha \in ]0, 1[$:</strong></p>
                        <ul class="list-disc list-inside space-y-0.5">
                          <li>الدالة $f$ متصلة على القطعة $[0, 1]$ (لأنها متصلة على $\mathbb{R}$).</li>
                          <li>$f(0) = 0^3 + 3(0) - 1 = -1 < 0$.</li>
                          <li>$f(1) = 1^3 + 3(1) - 1 = 3 > 0$.</li>
                        </ul>
                        <p>لدينا $f(0) \times f(1) = -1 \times 3 = -3 < 0$. وحسب مبرهنة القيم الوسيطية، فإن $\alpha \in ]0, 1[$.</p>
                      </div>
                    </div>

                    <!-- Q3 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-amber-400 font-bold text-xs">السؤال 3: باستعمال التفرع الثنائي، أعطِ تأطيراً للعدد $\alpha$ سعته $0.25$.</span>
                        <span class="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">0.50 ن</span>
                      </div>
                      <div class="text-xs text-slate-300 leading-relaxed space-y-1">
                        <p class="text-emerald-400 font-semibold mb-1">خطوات خوارزمية التفرع الثنائي:</p>
                        <p>• لدينا $\alpha \in ]0, 1[$ بسعة أولية $1 - 0 = 1$.</p>
                        <p>• <strong>المرحلة 1:</strong> نحسب مركز القطعة $[0, 1]$: $m_1 = \frac{0 + 1}{2} = 0.5$.</p>
                        <div class="font-mono text-cyan-300 p-1.5 bg-slate-900 rounded my-1 text-center">
                          $$f(0.5) = (0.5)^3 + 3(0.5) - 1 = 0.125 + 1.5 - 1 = 0.625 > 0$$
                        </div>
                        <p>بما أن $f(0) = -1 < 0$ و $f(0.5) > 0$، فإن $f(0) \times f(0.5) < 0$، وبالتالي:</p>
                        <div class="text-amber-300 font-mono text-center my-1">$$\alpha \in ]0, 0.5[$$ <span class="text-xs text-slate-300 font-sans">(بسعة $0.5 - 0 = 0.5$)</span></div>

                        <p>• <strong>المرحلة 2:</strong> نحسب مركز القطعة $[0, 0.5]$: $m_2 = \frac{0 + 0.5}{2} = 0.25$.</p>
                        <div class="font-mono text-cyan-300 p-1.5 bg-slate-900 rounded my-1 text-center">
                          $$f(0.25) = (0.25)^3 + 3(0.25) - 1 = 0.015625 + 0.75 - 1 = -0.234375 < 0$$
                        </div>
                        <p>بما أن $f(0.25) < 0$ و $f(0.5) > 0$، فإن $f(0.25) \times f(0.5) < 0$، وبالتالي:</p>
                        <div class="p-2 bg-emerald-950/40 border border-emerald-600/40 rounded text-center text-emerald-300 font-mono font-bold text-xs my-1">
                          $$0.25 < \alpha < 0.5$$<div class="text-xs text-emerald-300 font-sans mt-1">(بسعة $0.5 - 0.25 = 0.25$)</div>
                        </div>
                      </div>
                    </div>

                    <!-- Q4 -->
                    <div class="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-amber-400 font-bold text-xs">السؤال 4: حدد إشارة $f(x)$ على $\mathbb{R}$ حسب قيم $x$.</span>
                        <span class="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded">0.25 ن</span>
                      </div>
                      <div class="text-xs text-slate-300 leading-relaxed space-y-1">
                        <p>نعلم أن $f(\alpha) = 0$ وأن $f$ تزايدية قطعاً على $\mathbb{R}$:</p>
                        <ul class="list-disc list-inside space-y-0.5">
                          <li>لكل $x \in ]-\infty, \alpha]$: لدينا $x \le \alpha \implies f(x) \le f(\alpha) = 0$. إذن $f(x) \le 0$.</li>
                          <li>لكل $x \in [\alpha, +\infty[$: لدينا $x \ge \alpha \implies f(x) \ge f(\alpha) = 0$. إذن $f(x) \ge 0$.</li>
                        </ul>
                        <div class="mt-2 text-center">
                          <div class="inline-grid grid-cols-4 text-center font-mono text-xs border border-slate-700 rounded overflow-hidden">
                            <div class="bg-slate-800 text-slate-300 px-3 py-1">x</div>
                            <div class="bg-slate-900 text-slate-400 px-3 py-1">$-\infty$</div>
                            <div class="bg-slate-900 text-amber-300 px-3 py-1">$\alpha$</div>
                            <div class="bg-slate-900 text-slate-400 px-3 py-1">$+\infty$</div>
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
                        $$g(]0, 2]) = [g(2), \lim_{x \to 0^+} g(x)[ = [-1, 5[$$
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
                      <li>بين أن المعادلة $h(x) = 0$ تقبل حلاً وحيداً $\beta$ على القطعة $[-1, 1]$.</li>
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
                        <p class="leading-relaxed">$h'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$. لكل $x \in ]-1, 1[$ لدينا $x^2 < 1 \implies x^2 - 1 < 0 \implies h'(x) < 0$. إذن $h$ تناقصية قطعاً على $[-1, 1]$.</p>
                      </div>
                      <div>
                        <div class="font-bold text-emerald-400 mb-0.5">2. وجود ووحدانية الحل $\beta$:</div>
                        <p class="leading-relaxed">$h$ متصلة وتناقصية قطعاً على $[-1, 1]$ (دالة حدودية). ولدينا $h(-1) = (-1)^3 - 3(-1) + 1 = 3 > 0$ و $h(1) = 1^3 - 3(1) + 1 = -1 < 0$. بما أن $h(-1) \times h(1) = -3 < 0$، فحسب مبرهنة القيم الوسيطية يوجد حل وحيد $\beta \in ]-1, 1[$ بحيث $h(\beta) = 0$.</p>
                      </div>
                      <div>
                        <div class="font-bold text-emerald-400 mb-0.5">3. صورة القطعة $[-1, 1]$ (انتبه للدالة التناقصية!):</div>
                        <p class="leading-relaxed font-mono text-cyan-300">$$h([-1, 1]) = [h(1), h(-1)] = [-1, 3]$$</p>
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
            status: 'pending',
            requirements: [
              'إثبات أن الدالة $f$ تقبل دالة عكسية $f^{-1}$ معرفة على مجال $J = f(I)$ يتم تحديده بدقة.',
              'معرفة خصائص $f^{-1}$: متصلة على $J$، لها نفس منحى تغيرات $f$، ومنحناها $(C_{f^{-1}})$ مماثل لـ $(C_f)$ بالنسبة للمنصف الأول $y = x$ في معلم متعامد ممنظم.',
              'تحديد الصيغة الصريحة لـ $f^{-1}(x)$ لكل $x \\in J$ بحل المعادلة $f(y)=x$ ذات المجهول $y \\in I$.'
            ]
          },
          {
            id: 'm01-ax5',
            num: 'المحور 05',
            titleAr: 'دالة الجذر من الرتبة $n$ والقوى الجذرية $x^r$',
            titleFr: 'Fonction racine n-ième et puissances rationnelles',
            status: 'pending',
            requirements: [
              'تعريف دالة الجذر من الرتبة $n$ ($x \\mapsto \\sqrt[n]{x}$) كدالة عكسية للدالة $x \\mapsto x^n$ على $\\mathbb{R}^+$، وضبط خاصيات العمليات الجبرية عليها.',
              'حل المعادلات والمتراجحات اللاجذرية من الرتبة $n$، وتحديد القوى الجذرية $x^r = x^{p/q} = \\sqrt[q]{x^p}$ لعدد حقيقي موجب قطعاً.',
              'دراسة اتصال ونهايات الدوال من نوع $\\sqrt[n]{u(x)}$ وإزالة أشكال عدم التعيين في الجذور النونية (المرافق التكعيبي والتعميل).'
            ]
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
        id: 'phys-01', num: '01', unit: 'الجزء 1: الموجات (Ondes)', status: 'upcoming',
        titleAr: 'الموجات الميكانيكية المتوالية', titleFr: 'Ondes mécaniques progressives',
        summary: 'تعريف الموجة الميكانيكية، الموجة المستعرضة والطولية، سرعة الانتشار $v = d/\\Delta t$، والتأخر الزمني $\\tau = SM/v$.',
        axes: [
          { num: 'المحور 01', titleAr: 'مفهوم الموجة الميكانيكية المتوالية وخواصها العامة والفرق بين المستعرضة والطولية', titleFr: 'Définition et propriétés générales' },
          { num: 'المحور 02', titleAr: 'سرعة انتشار موجة ميكانيكية والعوامل المؤثرة فيها (قصور ومرونة الوسط)', titleFr: 'Célérité d’une onde mécanique' },
          { num: 'المحور 03', titleAr: 'مفهوم التأخر الزمني $\\tau = \\frac{SM}{v}$ والعلاقة الاستطالية $y_M(t) = y_S(t - \\tau)$', titleFr: 'Retard temporel et relation d’élongation' }
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
