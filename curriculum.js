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
        progressText: 'المحور 1 مكتمل + إطار المحاور 2–5',
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
                <!-- 1. Rigorous Definition -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. الاتصال في نقطة $x_0$ (Continuité en un point)</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>
                  <p class="text-sm text-slate-200 leading-relaxed mb-4">
                    لتكن $f$ دالة عددية معرفة على مجال مفتوح مركزه $x_0$ (بحيث $x_0 \\in D_f$). نقول إن الدالة $f$ <b>متصلة في النقطة $x_0$</b> (<i>$f$ est continue en $x_0$</i>) إذا وفقط إذا كانت نهايتها عندما يؤول $x$ إلى $x_0$ تساوي صورتها $f(x_0)$:
                  </p>
                  <div class="bg-slate-950 border border-cyan-500/30 rounded-xl p-4 text-center my-3">
                    $$f \\text{ est continue en } x_0 \\iff \\lim_{x \\to x_0} f(x) = f(x_0)$$
                  </div>
                  <p class="text-xs text-slate-400 leading-relaxed">
                    💡 إذا كان $\\lim_{x \\to x_0} f(x) \\neq f(x_0)$ أو كانت النهاية غير منتهية، نقول إن الدالة $f$ <b>غير متصلة في النقطة $x_0$</b>.
                  </p>
                </div>

                <!-- 2. Right and Left Continuity -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">2. الاتصال على اليمين والاتصال على اليسار في $x_0$</span>
                    <span class="text-xs text-slate-400 font-mono">Continuité à droite et à gauche</span>
                  </div>
                  <ul class="text-sm text-slate-200 space-y-3 leading-relaxed">
                    <li>
                      • <b>الاتصال على اليمين:</b> لتكن $f$ دالة معرفة على مجال من نوع $[x_0, x_0 + \\alpha[$ ($\\alpha > 0$). نقول إن $f$ <b>متصلة على اليمين في $x_0$</b> إذا وفقط إذا كان:
                      $$\\lim_{\\substack{x \\to x_0 \\\\ x > x_0}} f(x) = \\lim_{x \\to x_0^+} f(x) = f(x_0)$$
                    </li>
                    <li>
                      • <b>الاتصال على اليسار:</b> لتكن $f$ دالة معرفة على مجال من نوع $]x_0 - \\alpha, x_0]$ ($\\alpha > 0$). نقول إن $f$ <b>متصلة على اليسار في $x_0$</b> إذا وفقط إذا كان:
                      $$\\lim_{\\substack{x \\to x_0 \\\\ x < x_0}} f(x) = \\lim_{x \\to x_0^-} f(x) = f(x_0)$$
                    </li>
                  </ul>
                  <div class="bg-slate-950 border border-amber-500/30 rounded-xl p-4 mt-4">
                    <p class="text-xs font-bold text-amber-300 mb-1">📌 الخاصية المميزة (حاسمة في الدوال المعرفة بتعبيرين على يمين ويسار $x_0$):</p>
                    <p class="text-xs text-slate-300 mb-2">تكون الدالة $f$ متصلة في النقطة $x_0$ إذا وفقط إذا كانت متصلة على اليمين وعلى اليسار في $x_0$، أي:</p>
                    $$f \\text{ est continue en } x_0 \\iff \\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to x_0^-} f(x) = f(x_0)$$
                  </div>
                </div>

                <!-- 3. Classic Indeterminate Forms & Techniques for 2BAC PC -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">3. التقنيات المرجعية لإزالة أشكال عدم التعيين عند $x_0$</span>
                    <span class="text-xs text-slate-400 font-mono">Formes indéterminées 0/0</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-emerald-400 block mb-1">أ) التعميل بـ $(x - x_0)$ (القسمة الأقليدية أو هورنر):</b>
                      إذا كانت $P(x_0) = 0$ و $Q(x_0) = 0$، نعمل البسط والمقام بـ $(x - x_0)$ ثم نختزل قبل التعويض:
                      $$\\lim_{x \\to x_0} \\frac{P(x)}{Q(x)} = \\lim_{x \\to x_0} \\frac{(x-x_0)P_1(x)}{(x-x_0)Q_1(x)} = \\frac{P_1(x_0)}{Q_1(x_0)}$$
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">ب) الضرب في المرافق (Expression conjuguée):</b>
                      عند وجود جذر مربع $\\sqrt{u(x)} - \\sqrt{v(x)}$ يعطي $\\frac{0}{0}$، نضرب البسط والمقام في المرافق:
                      $$(\\sqrt{A} - \\sqrt{B})(\\sqrt{A} + \\sqrt{B}) = A - B$$
                    </div>
                  </div>
                </div>

                <!-- 4. National Exam Redaction Standard -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-6">
                  <h5 class="text-sm font-bold text-rose-300 mb-2">🎯 منهجية التحرير الرسمية في الامتحان الوطني (لضمان العلامة الكاملة)</h5>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    في تصحيح الامتحان الوطني لمسلك العلوم الفيزيائية، تُمنح $0.25$ نقطة على كتابة العلاقة $\\lim_{x \\to x_0} f(x) = f(x_0)$ صراحةً قبل الاستنتاج. الصياغة النموذجية الكاملة هي:<br/>
                    <i>«لدينا $\\lim_{x \\to x_0} f(x) = \\ell$، وبما أن $f(x_0) = \\ell$ فإن $\\lim_{x \\to x_0} f(x) = f(x_0)$؛ ومنه فالدالة $f$ متصلة في النقطة $x_0$.»</i>
                  </p>
                </div>
              </div>
            `
          },
          {
            id: 'm01-ax2',
            num: 'المحور 02',
            titleAr: 'الاتصال على مجال، العمليات على الدوال المتصلة، وتركيب دالتين',
            titleFr: 'Continuité sur un intervalle, opérations et composée de deux fonctions',
            status: 'pending',
            requirements: [
              'تعريف الاتصال على مجال مفتوح $]a,b[$ وعلى مجال مغلق $[a,b]$ (الاتصال على $]a,b[$ + الاتصال على يمين $a$ وعلى يسار $b$).',
              'توظيف اتصال الدوال الاعتيادية (الحدوديات، الجذرية، المثلثية $\\cos x, \\sin x, \\tan x$، ودالة الجذر المربع $\\sqrt{x}$) والعمليات عليها لتعليل اتصال دالة على مجال.',
              'مبرهنة اتصال مركب دالتين $g \\circ f$ على مجال $I$ مع التحقق الصريح من شرط التضمن $f(I) \\subset J$.'
            ]
          },
          {
            id: 'm01-ax3',
            num: 'المحور 03',
            titleAr: 'صورة مجال بدالة متصلة ومبرهنة القيم الوسيطية (TVI) والتفرع الثنائي',
            titleFr: 'Image d’un intervalle, Théorème des Valeurs Intermédiaires et Dichotomie',
            status: 'pending',
            requirements: [
              'تحديد صورة قطعة أو مجال بدالة متصلة ورتيبة قطعاً حسب جدول التغيرات والنهايات عند المحدات.',
              'تطبيق مبرهنة القيم الوسيطية لإثبات وجود حل على الأقل (أو حل وحيد $\\alpha$ في حالة الرتابة القطعية) للمعادلة $f(x) = 0$ على مجال.',
              'تأطير الحل الوحيد $\\alpha$ باستعمال طريقة التفرع الثنائي (Dichotomie) واستنتاج إشارة $f(x)$ على المجال.'
            ]
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
