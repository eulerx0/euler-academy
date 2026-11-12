/**
 * 🏛️ EULER ACADEMY — Official 2BAC (PC / SVT / SM) Structured Curriculum Database
 * Contains all 3 core subjects (Mathématiques, Physique, Chimie), all 34 official lessons,
 * their official National Exam Reference Framework axes (الإطار المرجعي),
 * and rigorous KaTeX content.
 */

window.EULER_CURRICULUM = {
  math: {
    id: 'math',
    titleAr: 'الرياضيات',
    titleFr: 'Mathématiques',
    badge: '2BAC PC • SVT • SM',
    color: 'cyan',
    description: 'المنهاج الرسمي الكامل لدروس الرياضيات للثانية باكالوريا وفق الإطار المرجعي للامتحان الوطني الموحد، بصياغة برهانية صارمة لا تقبل الشك.',
    lessons: [
      {
        id: 'math-01',
        num: '01',
        semester: 1,
        status: 'active',
        progressText: 'المحور 1 مكتمل + إطار المحاور 2–5',
        titleAr: 'اتصال دالة عددية',
        titleFr: 'Continuité d’une fonction numérique',
        summary: 'الاتصال في نقطة، الاتصال على مجال، صورة مجال، مبرهنة القيم الوسيطية (TVI)، الدالة العكسية، ودالة الجذر من الرتبة n.',
        axes: [
          {
            id: 'm01-ax1',
            num: 'المحور 01',
            titleAr: 'الاتصال في نقطة، الاتصال على اليمين واليسار، والتمديد بالاتصال',
            titleFr: 'Continuité en un point, à droite, à gauche et prolongement par continuité',
            status: 'completed',
            requirements: [
              'دراسة اتصال دالة عددية في نقطة $x_0$ باستعمال التعريف $\\lim_{x \\to x_0} f(x) = f(x_0)$.',
              'دراسة الاتصال على اليمين والاتصال على اليسار في نقطة $x_0$ للربط بينهما وبين الاتصال في $x_0$.',
              'تحديد التمديد بالاتصال (Prolongement par continuité) لدالة في نقطة لا تنتمي إلى حيز تعريفها ولكن النهاية فيها منتهية.'
            ],
            contentHtml: `
              <div class="space-y-6">
                <!-- 1. Rigorous Definition -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. التعريف الرياضي الدقيق (Définition formelle)</span>
                    <span class="text-xs text-slate-400 font-mono">Cadre de référence §1.1</span>
                  </div>
                  <p class="text-sm text-slate-200 leading-relaxed mb-4">
                    لتكن $f$ دالة عددية معرفة على مجال مفتوح مركزه $x_0$ (وعلى الخصوص $x_0 \\in D_f$). نقول إن الدالة $f$ <b>متصلة في النقطة $x_0$</b> (<i>continue en $x_0$</i>) إذا وفقط إذا كانت نهايتها عند $x_0$ تساوي صورتها $f(x_0)$:
                  </p>
                  <div class="bg-slate-950 border border-cyan-500/30 rounded-xl p-4 text-center my-3">
                    $$f \\text{ est continue en } x_0 \\iff \\lim_{x \\to x_0} f(x) = f(x_0)$$
                  </div>
                  <p class="text-xs text-slate-400 leading-relaxed">
                    ⚠️ <b>تنبيه منهجي صارم:</b> إذا كانت $x_0 \\notin D_f$، فلا معنى أبداً للسؤال عن «اتصال $f$ في $x_0$»، بل يُطرح حينها سؤال <b>التمديد بالاتصال</b>.
                  </p>
                </div>

                <!-- 2. Right and Left Continuity -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">2. الاتصال على اليمين وعلى اليسار (Continuité à droite et à gauche)</span>
                    <span class="text-xs text-slate-400 font-mono">Cadre de référence §1.2</span>
                  </div>
                  <ul class="text-sm text-slate-200 space-y-3 leading-relaxed">
                    <li>
                      • نقول إن $f$ <b>متصلة على اليمين في $x_0$</b> (حيث $f$ معرفة على مجال من نوع $[x_0, x_0 + \\alpha[$) إذا وفقط إذا كان:
                      $$\\lim_{\\substack{x \\to x_0 \\\\ x > x_0}} f(x) = \\lim_{x \\to x_0^+} f(x) = f(x_0)$$
                    </li>
                    <li>
                      • نقول إن $f$ <b>متصلة على اليسار في $x_0$</b> (حيث $f$ معرفة على مجال من نوع $]x_0 - \\alpha, x_0]$) إذا وفقط إذا كان:
                      $$\\lim_{\\substack{x \\to x_0 \\\\ x < x_0}} f(x) = \\lim_{x \\to x_0^-} f(x) = f(x_0)$$
                    </li>
                  </ul>
                  <div class="bg-slate-950 border border-amber-500/30 rounded-xl p-4 mt-4">
                    <p class="text-xs font-bold text-amber-300 mb-1">📌 الخاصية المميزة (تُستعمل في الدوال المعرفة بأجزاء):</p>
                    $$f \\text{ est continue en } x_0 \\iff \\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to x_0^-} f(x) = f(x_0)$$
                  </div>
                </div>

                <!-- 3. Prolongement par continuité -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">3. التمديد بالاتصال (Prolongement par continuité)</span>
                    <span class="text-xs text-slate-400 font-mono">Cadre de référence §1.3</span>
                  </div>
                  <p class="text-sm text-slate-200 leading-relaxed mb-3">
                    لتكن $f$ دالة عددية غير معرفة في $x_0$ (أي $x_0 \\notin D_f$)، ولكنها معرفة على مجال مفتوح محذوف منه $x_0$. إذا كانت:
                    $$\\lim_{x \\to x_0} f(x) = \\ell \\quad (\\ell \\in \\mathbb{R} \\text{ عدد حقيقي منتهٍ})$$
                    فإننا نقول إن $f$ <b>تقبل تمديداً بالاتصال في $x_0$</b>، وتمديدها بالاتصال هو الدالة $g$ المعرفة على $D_g = D_f \\cup \\{x_0\\}$ بما يلي:
                  </p>
                  <div class="bg-slate-950 border border-emerald-500/30 rounded-xl p-4 text-center">
                    $$\\begin{cases} g(x) = f(x) & \\text{si } x \\in D_f \\\\ g(x_0) = \\ell & \\end{cases}$$
                  </div>
                </div>

                <!-- 4. National Exam Redaction Standard -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-6">
                  <h5 class="text-sm font-bold text-rose-300 mb-2">🎯 صياغة التحرير الإلزامية في الامتحان الوطني (لضمان العلامة الكاملة)</h5>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    لا تكتب أبداً «$\\lim_{x \\to x_0} f(x) = f(x_0)$ إذن متصلة» بدون ذكر قيمة $f(x_0)$ صراحةً! الصياغة القياسية هي:<br/>
                    <i>«لدينا $\\lim_{x \\to x_0} f(x) = \\dots$، وبما أن $f(x_0) = \\dots$ فإن $\\lim_{x \\to x_0} f(x) = f(x_0)$، ومنه فالدالة $f$ متصلة في $x_0$.»</i>
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
              'استعمال اتصال الدوال الاعتيادية (الحدوديات، الجذرية، المثلثية $\\cos x, \\sin x, \\tan x$، ودالة الجذر المربع $\\sqrt{x}$) والعمليات الجبرية لتعليل اتصال دالة على مجال بدون إعادة حساب النهايات.',
              'مبرهنة اتصال مركب دالتين $g \\circ f$ مع التحقق الإلزامي من شرط التضمن $f(I) \\subset J$.'
            ]
          },
          {
            id: 'm01-ax3',
            num: 'المحور 03',
            titleAr: 'صورة مجال بدالة متصلة ومبرهنة القيم الوسيطية (TVI) والتفرع الثنائي',
            titleFr: 'Image d’un intervalle, Théorème des Valeurs Intermédiaires et Dichotomie',
            status: 'pending',
            requirements: [
              'تحديد صورة مجال (أو قطعة) بدالة متصلة ورتيبة قطعاً مع مراعاة تغير أو حفظ الترتيب.',
              'تطبيق مبرهنة القيم الوسيطية لإثبات وجود حل على الأقل (أو حل وحيد في حالة الرتابة القطعية) للمعادلة $f(x) = \\lambda$ أو $f(x) = 0$.',
              'تأطير الحل الوحيد $\\alpha$ باستعمال خوارزمية التفرع الثنائي (Méthode de dichotomie) بسعة معلومة $b - a$.'
            ]
          },
          {
            id: 'm01-ax4',
            num: 'المحور 04',
            titleAr: 'الدالة العكسية لدالة متصلة ورتيبة قطعاً على مجال',
            titleFr: 'Fonction réciproque d’une fonction continue et strictement monotone',
            status: 'completed_lab',
            requirements: [
              'إثبات أن الدالة $f$ تقبل دالة عكسية $f^{-1}$ معرفة على مجال $J = f(I)$ يتم تحديده بدقة.',
              'معرفة خصائص $f^{-1}$: الاتصال على $J$، نفس منحى تغيرات $f$ على $I$، وتماثل $(C_f)$ و $(C_{f^{-1}})$ بالنسبة للمنصف الأول $y = x$ في معلم متعامد ممنظم.',
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
              'تعريف دالة الجذر من الرتبة $n$ ($x \\mapsto \\sqrt[n]{x}$) كدالة عكسية للدالة $x \\mapsto x^n$ على $\\mathbb{R}^+$.',
              'التمكن من القواعد الجبرية للجذور النونية والترتيب، وحل المعادلات والمتراجحات اللاجذرية من الرتبة $n$.',
              'حساب نهايات الدوال المحتوية على جذور من الرتبة $n$ (باستعمال المرافق من الرتبة 3: $a^3 - b^3 = (a-b)(a^2+ab+b^2)$ أو التعميل) وتحديد القوى الجذرية $x^{p/q}$.'
            ]
          }
        ]
      },
      {
        id: 'math-02', num: '02', semester: 1, status: 'upcoming',
        titleAr: 'الاشتقاق ودراسة الدوال', titleFr: 'Dérivabilité et étude des fonctions',
        summary: 'قابلية الاشتقاق في نقطة، التأويلات الهندسية (المماس ونصف المماس)، اشتقاق الدالة العكسية والمركبة، مبرهنة التزايدات المنتهية، والفروع اللانهائية.',
        axes: [
          { num: 'المحور 01', titleAr: 'الاشتقاق في نقطة وعلى اليمين واليسار والتأويلات الهندسية (المماس ونصف المماس العمودي/المائل)', titleFr: 'Dérivabilité en un point et interprétations géométriques' },
          { num: 'المحور 02', titleAr: 'العمليات على الدوال القابلة للاشتقاق، اشتقاق المركب $g \\circ f$، واشتقاق الدالة العكسية $(f^{-1})\'(y_0)$', titleFr: 'Dérivée de la composée et de la fonction réciproque' },
          { num: 'المحور 03', titleAr: 'رتابة دالة وإشارة $f\'(x)$، المشتقة الثانية $f\'\'(x)$، تقعر المنحنى ونقط الانعطاف', titleFr: 'Monotonie, concavité et points d’inflexion' },
          { num: 'المحور 04', titleAr: 'الفروع اللانهائية والاتجاهات المقاربة ومماثلة محور أو مركز لمنحنى دالة', titleFr: 'Branches infinies et éléments de symétrie' }
        ]
      },
      {
        id: 'math-03', num: '03', semester: 1, status: 'upcoming',
        titleAr: 'المتتاليات العددية', titleFr: 'Suites numériques',
        summary: 'المتتاليات المكبورة والمصغورة، الرتابة، المتتاليات المتقاربة، مصاديق التقارب، والمتتاليات الترجعية من نوع $u_{n+1} = f(u_n)$.',
        axes: [
          { num: 'المحور 01', titleAr: 'الاستدلال بالترجع، المتتاليات المكبورة والمصغورة، ورتابة متتالية', titleFr: 'Raisonnement par récurrence, suites bornées et monotonie' },
          { num: 'المحور 02', titleAr: 'نهاية متتالية، المتتاليات المرجعية ($n^p, q^n$)، ومصاديق التقارب (الدرك والتقارب الرتيب)', titleFr: 'Limite d’une suite et critères de convergence' },
          { num: 'المحور 03', titleAr: 'المتتاليات الترجعية $u_{n+1} = f(u_n)$ مع $f$ متصلة وحل المعادلة $f(\\ell)=\\ell$', titleFr: 'Suites récurrentes du type u_{n+1} = f(u_n)' }
        ]
      },
      {
        id: 'math-04', num: '04', semester: 1, status: 'upcoming',
        titleAr: 'الدوال الأصلية', titleFr: 'Fonctions primitives',
        summary: 'مفهوم الدالة الأصلية على مجال، وجود الدوال الأصلية لدالة متصلة، وجدول الدوال الأصلية الاعتيادية والعمليات عليها.',
        axes: [
          { num: 'المحور 01', titleAr: 'تعريف الدالة الأصلية وشرط الاتصال لوجودها وتحديد الدالة الأصلية التي تحقق $F(x_0)=y_0$', titleFr: 'Définition et existence des primitives' },
          { num: 'المحور 02', titleAr: 'جدول الدوال الأصلية الاعتيادية والصيغ من نوع $u\' u^r$ و $u\'/\\sqrt{u}$', titleFr: 'Primitives des fonctions usuelles et opérations' }
        ]
      },
      {
        id: 'math-05', num: '05', semester: 1, status: 'upcoming',
        titleAr: 'الدوال اللوغاريتمية', titleFr: 'Fonctions logarithmiques',
        summary: 'دالة اللوغاريتم النيبيري $\\ln$، خصائصها الجبرية، النهايات الأساسية، مشتقة $\\ln(|u|)$، ودالة اللوغاريتم العشري $\\log$.',
        axes: [
          { num: 'المحور 01', titleAr: 'تعريف الدالة $\\ln$ والخصائص الجبرية وحل المعادلات والمتراجحات اللوغاريتمية', titleFr: 'Définition de ln et propriétés algébriques' },
          { num: 'المحور 02', titleAr: 'النهايات الاعتيادية الأساسية للوغاريتم النيبيري والفرع الشلجمي في $+\\infty$', titleFr: 'Limites fondamentales et étude de la fonction ln' },
          { num: 'المحور 03', titleAr: 'مشتقة ودوال أصلية لـ $u\'/u$ ودراسة دوال مركبة تتضمن $\\ln(u(x))$', titleFr: 'Dérivée logarithmique et étude de fonctions composées' }
        ]
      },
      {
        id: 'math-06', num: '06', semester: 1, status: 'upcoming',
        titleAr: 'الأعداد العقدية (الجزء الأول)', titleFr: 'Nombres complexes — Partie 1',
        summary: 'الشكل الجبري، المرافق، المعيار، العمدة، الشكل المثلثي، والتأويلات الهندسية للمسافة والزوايا الموجهة.',
        axes: [
          { num: 'المحور 01', titleAr: 'الشكل الجبري، تساوي عددين عقديين، المرافق $\\bar{z}$، والمعيار $|z|$', titleFr: 'Forme algébrique, conjugué et module' },
          { num: 'المحور 02', titleAr: 'التمثيل العقدي، لحق متجهة، استقامية النقط، والمسافة $AB = |z_B - z_A|$', titleFr: 'Représentation géométrique et affixes' },
          { num: 'المحور 03', titleAr: 'عمدة عدد عقدي غير منعدم، الشكل المثلثي، وقياس الزاوية $(\\overrightarrow{AB}, \\overrightarrow{AC}) \\equiv \\arg\\left(\\frac{z_C-z_A}{z_B-z_A}\\right) [2\\pi]$', titleFr: 'Argument, forme trigonométrique et angles orientés' }
        ]
      },
      {
        id: 'math-07', num: '07', semester: 2, status: 'upcoming',
        titleAr: 'الدوال الأسية', titleFr: 'Fonctions exponentielles',
        summary: 'الدالة الأسية النيبيرية $\\exp(x) = e^x$، خصائصها الجبرية، النهايات الاعتيادية، مشتقة ودوال أصلية لـ $u\' e^u$، والأسية للأساس $a$.',
        axes: [
          { num: 'المحور 01', titleAr: 'تعريف الدالة الأسية النيبيرية كدالة عكسية لـ $\\ln$ والخصائص الجبرية والمعادلات', titleFr: 'Définition et propriétés algébriques de exp' },
          { num: 'المحور 02', titleAr: 'النهايات الأساسية للدالة الأسية واشتقاق وتكامل $u\'(x) e^{u(x)}$', titleFr: 'Limites fondamentales et étude de fonctions exponentielles' }
        ]
      },
      {
        id: 'math-08', num: '08', semester: 2, status: 'upcoming',
        titleAr: 'الأعداد العقدية (الجزء الثاني)', titleFr: 'Nombres complexes — Partie 2',
        summary: 'الترميز الأسي $r e^{i\\theta}$، صيغتا موافر وأويلر، المعادلات من الدرجة الثانية في $\\mathbb{C}$، والتحويلات النقطية (الإزاحة، التحاكي، الدوران).',
        axes: [
          { num: 'المحور 01', titleAr: 'الترميز الأسي، صيغة موافر، وصيغة أويلر للإخطاط (Linéarisation)', titleFr: 'Notation exponentielle, formules de Moivre et d’Euler' },
          { num: 'المحور 02', titleAr: 'حل المعادلات من الدرجة الثانية $az^2+bz+c=0$ في $\\mathbb{C}$', titleFr: 'Équations du second degré dans C' },
          { num: 'المحور 03', titleAr: 'الكتابة العقدية للإزاحة، التحاكي، والدوران وتحديد طبيعة المثلثات والرباعيات', titleFr: 'Écriture complexe de la translation, homothétie et rotation' }
        ]
      },
      {
        id: 'math-09', num: '09', semester: 2, status: 'upcoming',
        titleAr: 'المعادلات التفاضلية', titleFr: 'Équations différentielles',
        summary: 'حل المعادلات التفاضلية من الرتبة الأولى $y\' = ay + b$ ومن الرتبة الثانية $y\'\' + ay\' + by = 0$.',
        axes: [
          { num: 'المحور 01', titleAr: 'المعادلة التفاضلية $y\' = ay + b$ وتحديد الحل الخاص بشروط بدئية', titleFr: 'Équation différentielle y’ = ay + b' },
          { num: 'المحور 02', titleAr: 'المعادلة التفاضلية $y\'\' + ay\' + by = 0$ والمعادلة المميزة $r^2 + ar + b = 0$', titleFr: 'Équation différentielle du second ordre' }
        ]
      },
      {
        id: 'math-10', num: '10', semester: 2, status: 'upcoming',
        titleAr: 'الحساب التكاملي', titleFr: 'Calcul intégral',
        summary: 'تكامل دالة متصلة، علاقة شال، الخطانية، المكاملة بالأجزاء، وحساب المساحات والحجوم الدورانية.',
        axes: [
          { num: 'المحور 01', titleAr: 'حساب التكامل باستعمال الدوال الأصلية وعلاقة شال والترتيب', titleFr: 'Définition et propriétés de l’intégrale' },
          { num: 'المحور 02', titleAr: 'تقنية المكاملة بالأجزاء (Intégration par parties)', titleFr: 'Intégration par parties' },
          { num: 'المحور 03', titleAr: 'حساب مساحة حيز مستوٍ وحجم مجسم مولد بدوران منحنى حول محور الأفاصيل', titleFr: 'Calcul d’aires et de volumes' }
        ]
      },
      {
        id: 'math-11', num: '11', semester: 2, status: 'upcoming',
        titleAr: 'الهندسة الفضائية', titleFr: 'Géométrie dans l’espace',
        summary: 'الجداء السلمي في الفضاء، معادلة مستوى، الفلكة (Sphère)، الجداء المتجهي، والأوضاع النسبية للمستقيمات والمستويات والفلكة.',
        axes: [
          { num: 'المحور 01', titleAr: 'الجداء السلمي، المعادلة الديكارتية لمستوى، ومسافة نقطة عن مستوى', titleFr: 'Produit scalaire, plan et distance' },
          { num: 'المحور 02', titleAr: 'الدراسة التحليلية للفلكة وتقاطع فلكة مع مستقيم أو مستوى (المستوى المماس)', titleFr: 'Étude analytique de la sphère' },
          { num: 'المحور 03', titleAr: 'الجداء المتجهي $\\vec{u} \\wedge \\vec{v}$، مساحة مثلث، ومسافة نقطة عن مستقيم', titleFr: 'Produit vectoriel et applications' }
        ]
      },
      {
        id: 'math-12', num: '12', semester: 2, status: 'upcoming',
        titleAr: 'حساب الاحتمالات', titleFr: 'Calcul des probabilités',
        summary: 'التعداد، احتمال حدث، الاحتمال الشرطي، الاستقلالية، المتغير العشوائي، قانون الحدانية، والأمل الرياضي والمغايرة.',
        axes: [
          { num: 'المحور 01', titleAr: 'التعداد (السحب بالتتابع وبإحلال، بدون إحلال، وفي آن واحد) وفرضية تساوي الاحتمالات', titleFr: 'Dénombrement et équiprobabilité' },
          { num: 'المحور 02', titleAr: 'الاحتمال الشرطي $P_A(B)$، استقلالية حدثين، وتكرار تجربة عشوائية', titleFr: 'Probabilité conditionnelle et indépendance' },
          { num: 'المحور 03', titleAr: 'المتغير العشوائي، قانون الاحتمال، الأمل الرياضي $E(X)$، المغايرة $V(X)$، والحدانية', titleFr: 'Variable aléatoire et loi binomiale' }
        ]
      }
    ]
  },

  physics: {
    id: 'physics',
    titleAr: 'الفيزياء',
    titleFr: 'Physique',
    badge: '2BAC PC • SM',
    color: 'amber',
    description: 'المنهاج الرسمي الكامل للفيزياء (الموجات، التحولات النووية، الكهرباء، والميكانيك) مع المحاكيات المختبرية والبرهنة على المعادلات التفاضلية.',
    lessons: [
      {
        id: 'phys-01', num: '01', unit: 'الموجات (Ondes)', status: 'upcoming',
        titleAr: 'الموجات الميكانيكية المتوالية', titleFr: 'Ondes mécaniques progressives',
        summary: 'تعريف الموجة الميكانيكية، الموجة المستعرضة والطولية، سرعة الانتشار $v = d/\\Delta t$، والتأخر الزمني $\\tau = SM/v$.',
        axes: [
          { num: 'المحور 01', titleAr: 'مفهوم الموجة الميكانيكية المتوالية وخواصها العامة والفرق بين المستعرضة والطولية', titleFr: 'Définition et propriétés générales' },
          { num: 'المحور 02', titleAr: 'سرعة انتشار موجة ميكانيكية والعوامل المؤثرة فيها (قصور ومرونة الوسط)', titleFr: 'Célérité d’une onde mécanique' },
          { num: 'المحور 03', titleAr: 'مفهوم التأخر الزمني $\\tau = \\frac{SM}{v}$ والعلاقة الاستطالية $y_M(t) = y_S(t - \\tau)$', titleFr: 'Retard temporel et élongation' }
        ]
      },
      {
        id: 'phys-02', num: '02', unit: 'الموجات (Ondes)', status: 'upcoming',
        titleAr: 'الموجات الميكانيكية المتوالية الدورية', titleFr: 'Ondes mécaniques progressives périodiques',
        summary: 'الدورية الزمانية $T$ والدورية المكانية $\\lambda$، العلاقة $\\lambda = v \\cdot T = v/N$، توافق وتعاكس الطور، حيود الموجات، والوسط المبدد.',
        axes: [
          { num: 'المحور 01', titleAr: 'الدورية الزمانية $T$ وطول الموجة $\\lambda$ والعلاقة الأساسية $\\lambda = v / N$', titleFr: 'Périodicité temporelle et spatiale' },
          { num: 'المحور 02', titleAr: 'مقارنة الحركة الاهتزازية لنقطتين من وسط الانتشار (على توافق أو تعاكس في الطور)', titleFr: 'Comparaison de l’état vibratoire de deux points' },
          { num: 'المحور 03', titleAr: 'ظاهرة الحيود (شرط $a \\le \\lambda$) وظاهرة التبدد والومضوم', titleFr: 'Diffraction, dispersion et stroboscopie' }
        ]
      },
      {
        id: 'phys-03', num: '03', unit: 'الموجات (Ondes)', status: 'upcoming',
        titleAr: 'انتشار موجة ضوئية', titleFr: 'Propagation d’une onde lumineuse',
        summary: 'الطبيعة الموجية للضوء، حيود الضوء الأحادي اللون ($\\theta = \\lambda/a$ و $L = 2\\lambda D/a$)، معامل الانكسار، وتبدد الضوء الأبيض بالموشور.',
        axes: [
          { num: 'المحور 01', titleAr: 'حيود الضوء الأحادي اللون والفرق الزاوي $\\theta = \\frac{\\lambda}{a}$ وعرض البقعة المركزية $L$', titleFr: 'Diffraction de la lumière monochromatique' },
          { num: 'المحور 02', titleAr: 'معامل انكسار وسط شفاف $n = c/v = \\lambda_0/\\lambda$ وعلاقات الموشور الأربعة وتبدد الضوء', titleFr: 'Indice de réfraction et dispersion par un prisme' }
        ]
      },
      {
        id: 'phys-04', num: '04', unit: 'التحولات النووية (Nucléaire)', status: 'upcoming',
        titleAr: 'التناقص الإشعاعي', titleFr: 'Décroissance radioactive',
        summary: 'استقرار وعدم استقرار النوى، مخطط سيغري $(N,Z)$، قوانين صودي للانحفاظ، النشاط الإشعاعي $\\alpha, \\beta^-, \\beta^+, \\gamma$، وقانون التناقص $N(t) = N_0 e^{-\\lambda t}$.',
        axes: [
          { num: 'المحور 01', titleAr: 'مخطط سيغري $(N,Z)$، قوانين صودي، ومعادلات التفتتات الإشعاعية $\\alpha, \\beta^-, \\beta^+, \\gamma$', titleFr: 'Diagramme de Segrè et lois de Soddy' },
          { num: 'المحور 02', titleAr: 'قانون التناقص الإشعاعي، ثابتة الزمن $\\tau$، عمر النصف $t_{1/2} = \\frac{\\ln 2}{\\lambda}$، والتأريخ بالنشاط $a(t)$', titleFr: 'Loi de décroissance radioactive et datation' }
        ]
      },
      {
        id: 'phys-05', num: '05', unit: 'التحولات النووية (Nucléaire)', status: 'upcoming',
        titleAr: 'النوى والكتلة والطاقة', titleFr: 'Noyaux, masse et énergie',
        summary: 'علاقة تكافؤ الكتلة-الطاقة لأينشتاين $E = \\Delta m \\cdot c^2$، النقص الكتلي، طاقة الربط للنويدة $\\mathcal{E}_l/A$، مخطط أستون، والانشطار والاندماج النووي.',
        axes: [
          { num: 'المحور 01', titleAr: 'النقص الكتلي $\\Delta m$، طاقة الربط للنواة $E_l$، وطاقة الربط بالنسبة لنويدة ومخطط أستون', titleFr: 'Défaut de masse, énergie de liaison et courbe d’Aston' },
          { num: 'المحور 02', titleAr: 'الحصيلة الطاقية لتحول نووي $\\Delta E$ وتفاعلات الانشطار والاندماج', titleFr: 'Bilan énergétique, fission et fusion' }
        ]
      },
      {
        id: 'phys-06', num: '06', unit: 'الكهرباء (Électricité)', status: 'upcoming',
        titleAr: 'ثنائي القطب RC', titleFr: 'Dipôle RC',
        summary: 'المكثف، العلاقة $i = C \\frac{du_C}{dt}$، المعادلة التفاضلية لشحن وتفريغ مكثف، ثابتة الزمن $\\tau = RC$، والطاقة الكهربائية المخزونة $E_e = \\frac{1}{2}Cu_C^2$.',
        axes: [
          { num: 'المحور 01', titleAr: 'المكثف، العلاقة بين الشحنة والتوتر، وتجميع المكثفات على التوالي والتوازي', titleFr: 'Le condensateur et associations' },
          { num: 'المحور 02', titleAr: 'استجابة ثنائي القطب RC لرتبة توتر صاعدة ونازلة (المعادلة التفاضلية، الحل، وثابتة الزمن $\\tau = RC$)', titleFr: 'Réponse d’un dipôle RC à un échelon de tension' },
          { num: 'المحور 03', titleAr: 'الطاقة الكهربائية المخزونة في مكثف $E_e = \\frac{1}{2}Cu_C^2 = \\frac{1}{2}\\frac{q^2}{C}$', titleFr: 'Énergie électrique emmagasinée' }
        ]
      },
      {
        id: 'phys-07', num: '07', unit: 'الكهرباء (Électricité)', status: 'upcoming',
        titleAr: 'ثنائي القطب RL', titleFr: 'Dipôle RL',
        summary: 'الوشيعة، التوتر $u_L = r i + L \\frac{di}{dt}$، استجابة ثنائي القطب RL لرتبة توتر، ثابتة الزمن $\\tau = \\frac{L}{R_T}$، والطاقة المغنطيسية $E_m = \\frac{1}{2}Li^2$.',
        axes: [
          { num: 'المحور 01', titleAr: 'الوشيعة وتعبير التوتر بين مربطيها $u_L = r \\cdot i + L \\frac{di}{dt}$ ودورها في الدارة', titleFr: 'La bobine et tension à ses bornes' },
          { num: 'المحور 02', titleAr: 'المعادلة التفاضلية لإقامة وانقطاع التيار، الحل، ثابتة الزمن $\\tau = L/(R+r)$، والطاقة المغنطيسية', titleFr: 'Établissement et rupture du courant dans un dipôle RL' }
        ]
      },
      {
        id: 'phys-08', num: '08', unit: 'الكهرباء (Électricité)', status: 'upcoming',
        titleAr: 'الذبذبات الحرة في دارة RLC متوالية', titleFr: 'Oscillations libres dans un circuit RLC série',
        summary: 'أنظمة التذبذب الثلاثة، المعادلة التفاضلية للدارة المثالية LC وللدارة RLC، الدور الخاص $T_0 = 2\\pi\\sqrt{LC}$، الدراسات الطاقية، وصيانة الذبذبات.',
        axes: [
          { num: 'المحور 01', titleAr: 'التفريغ التذبذبي وأنظمة التذبذب الثلاثة (شبه الدوري، اللادوري، والحرج) وتأثير المقاومة', titleFr: 'Régimes d’oscillations libres' },
          { num: 'المحور 02', titleAr: 'الدراسة التحليلية والطاقية للدارة المثالية LC والدور الخاص $T_0 = 2\\pi\\sqrt{LC}$', titleFr: 'Étude analytique et énergétique du circuit LC idéal' },
          { num: 'المحور 03', titleAr: 'انتقال الطاقة في دارة RLC متوالية وصيانة الذبذبات بمولد $u_G = k \\cdot i$', titleFr: 'Bilan énergétique et entretien des oscillations' }
        ]
      },
      {
        id: 'phys-09', num: '09', unit: 'الكهرباء (Électricité)', status: 'upcoming',
        titleAr: 'الموجات الكهرمغنطيسية وتضمين الوسع', titleFr: 'Ondes électromagnétiques et modulation d’amplitude',
        summary: 'مبدأ نقل المعلومات، تضمين الوسع، نسبة التضمين $m = U_{m}/U_0$، شروط التضمين الجيد، ومراحل إزالة التضمين (كاشف الغلاف والمرشح).',
        axes: [
          { num: 'المحور 01', titleAr: 'تضمين الوسع، تعبير التوتر المضمَّن، ونسبة التضمين $m$ وشروط الحصول على تضمين جيد ($m < 1$ و $F_P \\gg f_s$)', titleFr: 'Modulation d’amplitude et taux de modulation' },
          { num: 'المحور 02', titleAr: 'إزالة التضمين وشرط كشف الغلاف الجيد $T_P \\ll \\tau < T_s$ ودور دارة الانتقاء LC', titleFr: 'Démodulation d’amplitude et détection d’enveloppe' }
        ]
      },
      {
        id: 'phys-10', num: '10', unit: 'الميكانيك (Mécanique)', status: 'upcoming',
        titleAr: 'قوانين نيوتن', titleFr: 'Lois de Newton',
        summary: 'متجهة الموضع والسرعة والتسارع في معلم ديكارتي ومعلم فريني، القانون الثاني لنيوتن $\\sum \\vec{F}_{ext} = m \\vec{a}_G$، والحركة على مستوى أفقي ومائل.',
        axes: [
          { num: 'المحور 01', titleAr: 'متجهة السرعة اللحظية ومتجهة التسارع في معلم ديكارتي وفي أساس فريني $(\\vec{u}, \\vec{n})$', titleFr: 'Vecteurs vitesse et accélération (Cartésien et Frenet)' },
          { num: 'المحور 02', titleAr: 'القانون الثاني لنيوتن وتطبيقه على حركة مستقيمية متغيرة بانتظام على مستوى أفقي ومائل مع أو بدون احتكاك', titleFr: 'Deuxième loi de Newton et mouvements rectilignes' }
        ]
      },
      {
        id: 'phys-11', num: '11', unit: 'الميكانيك (Mécanique)', status: 'upcoming',
        titleAr: 'السقوط الرأسي لجسم صلب', titleFr: 'Chute verticale d’un solide',
        summary: 'السقوط الرأسي باحتكاك في مائع (دافعة أرخميدس وقوة الاحتكاك $f = kv^n$)، السرعة الحدية $v_{lim}$، طريقة أويلر، والسقوط الرأسي الحر.',
        axes: [
          { num: 'المحور 01', titleAr: 'السقوط الرأسي باحتكاك، المعادلة التفاضلية للسرعة، التسارع البدئي $a_0$، والسرعة الحدية $v_{lim}$ وطريقة أويلر', titleFr: 'Chute verticale avec frottement fluide et méthode d’Euler' },
          { num: 'المحور 02', titleAr: 'السقوط الرأسي الحر والمعادلات الزمنية للحركة', titleFr: 'Chute verticale libre' }
        ]
      },
      {
        id: 'phys-12', num: '12', unit: 'الميكانيك (Mécanique)', status: 'upcoming',
        titleAr: 'الحركات المستوية (القذيفة والأقمار الاصطناعية)', titleFr: 'Mouvements plans (Projectile & Satellites)',
        summary: 'حركة قذيفة في مجال الثقالة المنتظم (المعادلات الزمنية، معادلة المسار، القمة $S$، المدى $P$)، وحركة الأقمار الاصطناعية والكواكب وقوانين كيبلر.',
        axes: [
          { num: 'المحور 01', titleAr: 'حركة قذيفة في مجال الثقالة المنتظم: المعادلات الزمنية، معادلة المسار $y(x)$، قمة المسار، والمدى', titleFr: 'Mouvement d’un projectile dans le champ de pesanteur' },
          { num: 'المحور 02', titleAr: 'حركة الأقمار الاصطناعية والكواكب وقانون التجاذب الكوني وقانون كيبلر الثالث $\\frac{T^2}{r^3} = \\frac{4\\pi^2}{GM}$', titleFr: 'Satellites, planètes et lois de Kepler' }
        ]
      },
      {
        id: 'phys-13', num: '13', unit: 'الميكانيك (Mécanique)', status: 'upcoming',
        titleAr: 'المتذبذبات الميكانيكية والمظاهر الطاقية', titleFr: 'Systèmes mécaniques oscillants et aspects énergétiques',
        summary: 'النواس المرن، نواس اللي، النواس الوازن والنواس البسيط، المعادلات التفاضلية، الدور الخاص $T_0$، شغل قوة، والدراسة الطاقية ($E_c, E_{pe}, E_{pp}, E_m$).',
        axes: [
          { num: 'المحور 01', titleAr: 'الدراسة التحريكـية والطاقية للنواس المرن الأفقي ($T_0 = 2\\pi\\sqrt{m/k}$)', titleFr: 'Pendule élastique : étude dynamique et énergétique' },
          { num: 'المحور 02', titleAr: 'دوران جسم صلب حول محور ثابت والعلاقة الأساسية للتحريك $\\sum \\mathcal{M}_{\\Delta} = J_{\\Delta} \\cdot \\ddot{\\theta}$', titleFr: 'Rotation d’un solide autour d’un axe fixe' },
          { num: 'المحور 03', titleAr: 'نواس اللي، النواس الوازن، والنواس البسيط في حالة الذبذبات الصغيرة', titleFr: 'Pendules de torsion, pesant et simple' }
        ]
      }
    ]
  },

  chemistry: {
    id: 'chemistry',
    titleAr: 'الكيمياء',
    titleFr: 'Chimie',
    badge: '2BAC PC • SVT • SM',
    color: 'emerald',
    description: 'المنهاج الرسمي الكامل للكيمياء (الحركية الكيميائية، التوازنات، تفاعلات حمض-قاعدة والمعايرة، الأعمدة والتحليل الكهربائي، والكيمياء العضوية).',
    lessons: [
      {
        id: 'chem-01', num: '01', status: 'upcoming',
        titleAr: 'التحولات السريعة والتحولات البطيئة', titleFr: 'Transformations rapides et transformations lentes',
        summary: 'تفاعلات الأكسدة-اختزال، المزدوجات المؤكسد/مختزل، التمييز بين التحولات السريعة والبطيئة، والعوامل الحركية (درجة الحرارة والتركيز البدئي).',
        axes: [
          { num: 'المحور 01', titleAr: 'تفاعلات الأكسدة-اختزال وكتابة أنصاف المعادلات والمعادلة الحصيلة', titleFr: 'Réactions d’oxydo-réduction' },
          { num: 'المحور 02', titleAr: 'التحولات السريعة والبطيئة ودور العوامل الحركية في تسريع أو إيقاف التفاعل (السقي الكيميائي)', titleFr: 'Facteurs cinétiques et trempe chimique' }
        ]
      },
      {
        id: 'chem-02', num: '02', status: 'upcoming',
        titleAr: 'التتبع الزمني لتحول كيميائي — سرعة التفاعل', titleFr: 'Suivi temporel d’une transformation — Vitesse de réaction',
        summary: 'طرق التتبع الزمني (المعايرة، الموصلية $\\sigma$، ضغط أو حجم غاز)، السرعة الحجمية $v(t) = \\frac{1}{V_S}\\frac{dx}{dt}$، وزمن نصف التفاعل $t_{1/2}$.',
        axes: [
          { num: 'المحور 01', titleAr: 'طرق التتبع الزمني واستغلال جدول التقدم لإيجاد علاقة $x(t)$ بدلالة المقدار المقاس ($\\sigma, P, V, pH$)', titleFr: 'Méthodes de suivi temporel et avancement x(t)' },
          { num: 'المحور 02', titleAr: 'تعريف وحساب السرعة الحجمية للتفاعل مبيانياً وزمن نصف التفاعل $x(t_{1/2}) = x_{max}/2$', titleFr: 'Vitesse volumique de réaction et temps de demi-réaction' }
        ]
      },
      {
        id: 'chem-03', num: '03', status: 'upcoming',
        titleAr: 'التحولات الكيميائية التي تحدث في منحيين', titleFr: 'Transformations chimiques s’effectuant dans les deux sens',
        summary: 'الأحماض والقواعد حسب برونشتد، $pH$ محلول مائي، نسبة التقدم النهائي $\\tau = x_f / x_{max}$، والتمييز بين التحول الكلي ($\\tau = 1$) وغير الكلي ($\\tau < 1$).',
        axes: [
          { num: 'المحور 01', titleAr: 'تعريف الحمض والقاعدة حسب برونشتد وقياس $pH = -\\log[H_3O^+]$', titleFr: 'Acides et bases selon Brönsted et pH' },
          { num: 'المحور 02', titleAr: 'نسبة التقدم النهائي $\\tau = \\frac{x_f}{x_{max}}$ ومفهوم التوازن الكيميائي الديناميكي', titleFr: 'Taux d’avancement final et équilibre dynamique' }
        ]
      },
      {
        id: 'chem-04', num: '04', status: 'upcoming',
        titleAr: 'حالة توازن مجموعة كيميائية', titleFr: 'État d’équilibre d’un système chimique',
        summary: 'خارج التفاعل $Q_r$، ثابتة التوازن $K = Q_{r,éq}$، استغلال الموصلية $\\sigma$، وتأثير الحالة البدئية على نسبة التقدم النهائي $\\tau$.',
        axes: [
          { num: 'المحور 01', titleAr: 'تعبير خارج التفاعل $Q_r$ وثابتة التوازن $K$ التي تتعلق فقط بدرجة الحرارة', titleFr: 'Quotient de réaction Q_r et constante d’équilibre K' },
          { num: 'المحور 02', titleAr: 'العلاقة بين نسبة التقدم النهائي $\\tau$ وثابتة التوازن $K$ والتركيز البدئي $C$', titleFr: 'Influence de l’état initial et de K sur le taux d’avancement' }
        ]
      },
      {
        id: 'chem-05', num: '05', status: 'upcoming',
        titleAr: 'التحولات المقرونة بالتفاعلات حمض-قاعدة في محلول مائي', titleFr: 'Transformations liées à des réactions acide-base',
        summary: 'الجداء الأيوني للماء $K_e$، المحاليل الحمضية والقاعدية والمحايدة، ثابتة الحمضية $K_A$ و $pK_A$، ومخطط هيمنة وتوزيع الأنواع الحمضية والقاعدية.',
        axes: [
          { num: 'المحور 01', titleAr: 'التحلل البروتوني الذاتي للماء، الجداء الأيوني $K_e = [H_3O^+][HO^-]$، وسلم $pH$', titleFr: 'Autoprotolyse de l’eau et produit ionique K_e' },
          { num: 'المحور 02', titleAr: 'ثابتة الحمضية $K_A$ و $pK_A$ والعلاقة $pH = pK_A + \\log\\frac{[A^-]}{[AH]}$ ومخطط الهيمنة', titleFr: 'Constante d’acidité K_A, pK_A et diagramme de prédominance' }
        ]
      },
      {
        id: 'chem-06', num: '06', status: 'upcoming',
        titleAr: 'المعايرة الحمضية-القاعدية', titleFr: 'Dosage acido-basique',
        summary: 'مبدأ المعايرة وتفاعلها السريع والكلي والانتقائي، تحديد نقطة التكافؤ $E(V_E, pH_E)$، علاقة التكافؤ $C_A V_A = C_B V_{BE}$، واختيار الكاشف الملون الملائم.',
        axes: [
          { num: 'المحور 01', titleAr: 'مميزات تفاعل المعايرة، تحديد نقطة التكافؤ بطريقة المماسات المتوازية، واستغلال علاقة التكافؤ', titleFr: 'Réaction de dosage et repérage de l’équivalence' },
          { num: 'المحور 02', titleAr: 'تحديد $pK_A$ مبيانياً عند نصف التكافؤ ($V_B = V_{BE}/2 \\implies pH = pK_A$) واختيار الكاشف الملون', titleFr: 'Demi-équivalence et choix de l’indicateur coloré' }
        ]
      },
      {
        id: 'chem-07', num: '07', status: 'upcoming',
        titleAr: 'التطور التلقائي لمجموعة كيميائية وتحصيل الطاقة في الأعمدة', titleFr: 'Évolution spontanée et piles électrochimiques',
        summary: 'معيار التطور التلقائي (مقارنة $Q_{r,i}$ و $K$)، بنية واشتغال العمود الكهروكيميائي، تبيانة العمود، وكمية الكهرباء القصوى $Q = I \\cdot \\Delta t = n(e^-) \\cdot F$.',
        axes: [
          { num: 'المحور 01', titleAr: 'معيار التطور التلقائي لمجموعة كيميائية عن طريق مقارنة $Q_{r,i}$ مع ثابتة التوازن $K$', titleFr: 'Critère d’évolution spontanée' },
          { num: 'المحور 02', titleAr: 'العمود الكهروكيميائي: تحديد القطبية، منحى التيار والإلكترونات، والحصيلة الكمية $Q = I\\Delta t = n(e^-)F$', titleFr: 'Fonctionnement d’une pile et bilan de matière' }
        ]
      },
      {
        id: 'chem-08', num: '08', status: 'upcoming',
        titleAr: 'التحولات القسرية (التحليل الكهربائي)', titleFr: 'Transformations forcées — Électrolyse',
        summary: 'مبدأ التحول القسري، تحديد الأنود والكاثود في التحليل الكهربائي، التفاعلات المحتملة عند الإلكترودين، والحصيلة الكمية للتحليل الكهربائي.',
        axes: [
          { num: 'المحور 01', titleAr: 'التمييز بين التحول التلقائي والتحول القسري وتحديد تفاعلات الأكسدة عند الأنود والاختزال عند الكاثود', titleFr: 'Principe de l’électrolyse et réactions aux électrodes' },
          { num: 'المحور 02', titleAr: 'الحصيلة الكمية للتحليل الكهربائي وتطبيقاته الصناعية (الطلاء الفلزي وشحن المركمات)', titleFr: 'Bilan quantitatif et applications de l’électrolyse' }
        ]
      },
      {
        id: 'chem-09', num: '09', status: 'upcoming',
        titleAr: 'تفاعلات الأسترة والحلمأة والتحكم في تطور المجموعات الكيميائية', titleFr: 'Réactions d’estérification et d’hydrolyse',
        summary: 'تسمية الإسترات والأحماض الكربوكسيلية والكحولات وأندريدات الحمض، تفاعل الأسترة والحلمأة، المردود $r = n_{exp}/n_{th}$، والتصبن.',
        axes: [
          { num: 'المحور 01', titleAr: 'المجموعات المميزة، التسمية النظامية، وخصائص تفاعلي الأسترة والحلمأة (محدودان، بطيئان، لا حراريان)', titleFr: 'Nomenclature et caractéristiques de l’estérification-hydrolyse' },
          { num: 'المحور 02', titleAr: 'حساب مردود التحول $r$، تسريع التفاعل، وتحسين المردود باستعمال أندريد الحمض أو إزالة أحد النواتج، وتفاعل التصبن', titleFr: 'Rendement, contrôle de l’évolution et saponification' }
        ]
      }
    ]
  }
};
