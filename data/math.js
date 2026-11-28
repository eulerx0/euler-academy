/**
 * Euler Academy — 2BAC PC Mathématiques (12 Lessons Registry)
 * Axis contentHtml modules live in ./modules/math/<lessonId>/<axisId>.js
 */
window.EulerAcademy.registerSubject({
  "id": "math",
  "titleAr": "الرياضيات",
  "titleFr": "Mathématiques",
  "badge": "2BAC PC • المعامل 7",
  "color": "cyan",
  "description": "المنهاج الرسمي الكامل لمادة الرياضيات خاص حصرياً بمسلك العلوم الفيزيائية (2BAC PC) وفق الإطار المرجعي للامتحان الوطني الموحد (12 درساً رسمياً).",
  "lessons": [
    {
      "id": "math-01",
      "num": "01",
      "semester": 1,
      "status": "active",
      "progressText": "جميع المحاور الـ 5 مكتملة بالبرهان الصارم والتمارين التوليفية (100%)",
      "titleAr": "الاتصال ونهايات دالة عددية",
      "titleFr": "Continuité et limites d’une fonction numérique",
      "summary": "الاتصال في نقطة وعلى اليمين واليسار، الاتصال على مجال، صورة مجال، مبرهنة القيم الوسيطية (TVI)، الدالة العكسية، ودالة الجذر من الرتبة n.",
      "hasLexique": true,
      "hasExam": true,
      "examNavLabel": "📝 الفرض المحروس N°1 (20/20)",
      "simulator": {
        "navLabel": "🧪 المختبر البصري (6 أنماط)",
        "script": "./simulators/math-01.js"
      },
      "axes": [
        {
          "id": "m01-ax1",
          "num": "المحور 01",
          "titleAr": "حساب النهايات، الاتصال في نقطة، والاتصال على اليمين وعلى اليسار",
          "titleFr": "Calcul de limites, continuité en un point, à droite et à gauche",
          "status": "completed",
          "requirements": [
            "حساب نهايات الدوال الحدودية، الجذرية، اللاجذرية، والمثلثية وإزالة أشكال عدم التعيين ($\\frac{0}{0}, \\frac{\\infty}{\\infty}, +\\infty - \\infty, 0 \\times \\infty$) بالتعميل أو المرافق أو العدد المشتق.",
            "دراسة اتصال دالة عددية في نقطة $x_0 \\in D_f$ باستعمال التعريف الرسمي $\\lim_{x \\to x_0} f(x) = f(x_0)$.",
            "دراسة الاتصال على اليمين والاتصال على اليسار في نقطة مفصلية $x_0$ (خصوصاً للدوال المعرفة بأجزاء) واستنتاج الاتصال في $x_0$."
          ]
        },
        {
          "id": "m01-ax2",
          "num": "المحور 02",
          "titleAr": "الاتصال على مجال، العمليات على الدوال المتصلة، وتركيب دالتين",
          "titleFr": "Continuité sur un intervalle, opérations et composée de deux fonctions",
          "status": "completed",
          "requirements": [
            "تعريف الاتصال على مجال مفتوح $]a,b[$ وعلى مجال مغلق $[a,b]$ (الاتصال على $]a,b[$ + الاتصال على يمين $a$ وعلى يسار $b$).",
            "توظيف اتصال الدوال الاعتيادية (الحدوديات، الجذرية، المثلثية $\\cos x, \\sin x, \\tan x$، ودالة الجذر المربع $\\sqrt{x}$) والعمليات عليها لتعليل اتصال دالة على مجال.",
            "مبرهنة اتصال مركب دالتين $g \\circ f$ على مجال $I$ مع التحقق الصريح من شرط التضمن $f(I) \\subset J$."
          ]
        },
        {
          "id": "m01-ax3",
          "num": "المحور 03",
          "titleAr": "صورة مجال بدالة متصلة ومبرهنة القيم الوسيطية (TVI) والتفرع الثنائي",
          "titleFr": "Image d’un intervalle, Théorème des Valeurs Intermédiaires et Dichotomie",
          "status": "completed",
          "requirements": [
            "تحديد صورة قطعة أو مجال بدالة متصلة ورتيبة قطعاً حسب جدول التغيرات والنهايات عند المحدات.",
            "تطبيق مبرهنة القيم الوسيطية لإثبات وجود حل على الأقل (أو حل وحيد $\\alpha$ في حالة الرتابة القطعية) للمعادلة $f(x) = 0$ على مجال.",
            "تأطير الحل الوحيد $\\alpha$ باستعمال طريقة التفرع الثنائي (Dichotomie) واستنتاج إشارة $f(x)$ على المجال."
          ]
        },
        {
          "id": "m01-ax4",
          "num": "المحور 04",
          "titleAr": "الدالة العكسية لدالة متصلة ورتيبة قطعاً على مجال",
          "titleFr": "Fonction réciproque d’une fonction continue et strictement monotone",
          "status": "completed",
          "requirements": [
            "إثبات أن الدالة $f$ تقبل دالة عكسية $f^{-1}$ معرفة على مجال $J = f(I)$ يتم تحديده بدقة.",
            "معرفة خصائص $f^{-1}$: متصلة على $J$، لها نفس منحى تغيرات $f$، ومنحناها $(C_{f^{-1}})$ مماثل لـ $(C_f)$ بالنسبة للمنصف الأول $y = x$ في معلم متعامد ممنظم.",
            "تحديد الصيغة الصريحة لـ $f^{-1}(x)$ لكل $x \\in J$ بحل المعادلة $f(y)=x$ ذات المجهول $y \\in I$."
          ]
        },
        {
          "id": "m01-ax5",
          "num": "المحور 05",
          "titleAr": "دالة الجذر من الرتبة $n$ والقوى الجذرية $x^r$",
          "titleFr": "Fonction racine n-ième et puissances rationnelles",
          "status": "completed",
          "requirements": [
            "تعريف دالة الجذر من الرتبة $n$ ($x \\mapsto \\sqrt[n]{x}$) كدالة عكسية للدالة $x \\mapsto x^n$ على $\\mathbb{R}^+$، وضبط خاصيات العمليات الجبرية عليها.",
            "حل المعادلات والمتراجحات اللاجذرية من الرتبة $n$، وتحديد القوى الجذرية $x^r = x^{p/q} = \\sqrt[q]{x^p}$ لعدد حقيقي موجب قطعاً.",
            "دراسة اتصال ونهايات الدوال من نوع $\\sqrt[n]{u(x)}$ وإزالة أشكال عدم التعيين في الجذور النونية (المرافق التكعيبي والتعميل)."
          ]
        }
      ]
    },
    {
      "id": "math-02",
      "num": "02",
      "semester": 1,
      "status": "active",
      "progressText": "جميع المحاور الـ 4 مكتملة + المعجم (20) + المختبر (4 أنماط) + الفرض المحروس N°2 (100%)",
      "titleAr": "الاشتقاق ودراسة الدوال العددية",
      "titleFr": "Dérivation et étude des fonctions numériques",
      "summary": "قابلية الاشتقاق في نقطة، التأويل الهندسي (المماس ونصف المماس)، اشتقاق المركب والدالة العكسية ودالة جذر الرتبة n، الرتابة والتقعر، والفروع اللانهائية.",
      "hasLexique": true,
      "hasExam": true,
      "examNavLabel": "📝 الفرض المحروس N°2 (20/20)",
      "simulator": {
        "navLabel": "🧪 المختبر البصري للاشتقاق (4 أنماط)",
        "script": "./simulators/math-02.js"
      },
      "axes": [
        {
          "id": "m02-ax1",
          "num": "المحور 01",
          "titleAr": "الاشتقاق في نقطة وعلى اليمين واليسار والتأويلات الهندسية (معادلة المماس ونصف المماس العمودي/الأفقي/المائل)",
          "titleFr": "Dérivabilité en un point et interprétations géométriques",
          "status": "completed",
          "requirements": [
            "تعريف العدد المشتق $f'(x_0)$ والاشتقاق على اليمين واليسار وربط قابلية الاشتقاق بالاتصال.",
            "تحديد التأويلات الهندسية بدقة: المماس المائل والأفقي، النقطة المزواة، وقانون إشارة نصف المماس العمودي $\\uparrow / \\downarrow$.",
            "توظيف العدد المشتق في إزالة عدم التعيين وإيجاد معادلة المماس والتقريب التآلفي."
          ]
        },
        {
          "id": "m02-ax2",
          "num": "المحور 02",
          "titleAr": "العمليات على الدوال المشتقة، اشتقاق المركب $g \\circ f$، اشتقاق $\\sqrt[n]{u(x)}$، وحساب $(f^{-1})'(y_0) = \\frac{1}{f'(x_0)}$",
          "titleFr": "Dérivée de la composée, de la racine n-ième et de la réciproque",
          "status": "completed",
          "requirements": [
            "ضبط شروط ومشتقات العمليات الاعتيادية والجدول المرجعي للدوال المشتقة على مجال مفتوح/مغلق.",
            "اشتقاق $\\sqrt{u(x)}$ و $\\sqrt[n]{u(x)}$ و $u^r$ مع تعليل الإيجاب القطعي $u(x) &gt; 0$ واشتقاق المركب $g \\circ f$.",
            "تطبيق مبرهنة مشتقة الدالة العكسية $(f^{-1})'(y_0) = \\frac{1}{f'(x_0)}$ عند $f'(x_0) \\neq 0$ وتفسير حالة $f'(x_0) = 0$."
          ]
        },
        {
          "id": "m02-ax3",
          "num": "المحور 03",
          "titleAr": "رتابة دالة ومطارفها من إشارة $f'(x)$، وتقعر المنحنى ونقط الانعطاف من إشارة $f''(x)$",
          "titleFr": "Monotonie, extremums, concavité et points d’inflexion",
          "status": "completed",
          "requirements": [
            "ربط رتابة دالة بإشارة $f'(x)$ واستنتاج إشارة $f(x)$ انطلاقاً من القيم الدنيا أو القصوى في جدول التغيرات.",
            "تمييز المطارف المحلية بشرط الانعدام مع تغيير الإشارة، وتفادي فخ $f'(x_0)=0$ دون مطراف.",
            "دراسة تقعر $(C_f)$ والوضع النسبي مع المماسات وتحديد نقط الانعطاف من إشارة $f''(x)$ أو عدم تغير إشارة $f'$."
          ]
        },
        {
          "id": "m02-ax4",
          "num": "المحور 04",
          "titleAr": "الفروع اللانهائية (المقاربات الأفقية والعمودية والمائلة والفروع الشلجمية) وعناصر تماثل المنحنى (محور/مركز تماثل)",
          "titleFr": "Branches infinies, asymptotes et éléments de symétrie",
          "status": "completed",
          "requirements": [
            "ضبط المخطط التقريري للفروع اللانهائية (المقاربات الأفقية والعمودية والمائلة والفروع الشلجمية اتجاه $Ox$ و $Oy$ و $y=ax$).",
            "إثبات المقارب المائل $(D): y = ax+b$ ودراسة الوضع النسبي لـ $(C_f)$ و $(D)$ بدراسة إشارة $f(x)-(ax+b)$.",
            "إثبات محور التماثل $x=a$ ومركز التماثل $\\Omega(a,b)$ بالشرطين الإلزاميين (تماثل حيز التعريف $2a-x \\in D_f$ ثم المعادلة)."
          ]
        }
      ]
    },
    {
      "id": "math-03",
      "num": "03",
      "semester": 1,
      "status": "active",
      "progressText": "مكتمل (100% — المعجم والمختبر البصري والفرض 20/20)",
      "titleAr": "المتتاليات العددية",
      "titleFr": "Suites numériques",
      "summary": "الاستدلال بالترجع، المتتاليات المكبورة والمصغورة، رتابة متتالية، نهاية متتالية، مصاديق التقارب، والمتتاليات الترجعية من نوع $u_{n+1} = f(u_n)$.",
      "hasLexique": true,
      "hasExam": true,
      "examNavLabel": "📝 الفرض المحروس N°3 (20/20)",
      "simulator": {
        "navLabel": "🧪 المختبر البصري للمتتاليات (4 أنماط)",
        "script": "./simulators/math-03.js"
      },
      "axes": [
        {
          "id": "m03-ax1",
          "num": "المحور 01",
          "titleAr": "البرهان بالترجع، المتتاليات المكبورة والمصغورة والمحدودة، ودراسة رتابة متتالية",
          "titleFr": "Raisonnement par récurrence, suites bornées et monotonie",
          "status": "completed",
          "requirements": [
            "صياغة مراحل البرهان بالترجع الثلاث بصرامة لإثبات تفاوتات أو مكبورية ومصغورية متتالية ($u_n \\le M$, $u_n \\ge m$).",
            "دراسة رتابة متتالية باستعمال إشارة الفرق $u_{n+1} - u_n$ أو $f(x) - x$ أو النسبة $u_{n+1}/u_n$ عند الإيجاب القطعي.",
            "استثمار المتتاليات المساعدة (الهندسية والحسابية) لحساب $u_n$ بدلالة $n$ للمتتاليات التآلفية والمتخاطة $u_{n+1} = \\frac{au_n+b}{cu_n+d}$."
          ]
        },
        {
          "id": "m03-ax2",
          "num": "المحور 02",
          "titleAr": "نهاية متتالية، النهايات المرجعية ($n^p$ و $q^n$)، ومصاديق التقارب (التقارب الرتيب ومصداق الدرك)",
          "titleFr": "Limite d’une suite et critères de convergence",
          "status": "completed",
          "requirements": [
            "ضبط النهايات المرجعية ($n^p, \\sqrt{n}, 1/n^p$) ونهاية المتتالية الهندسية $(q^n)$ لكل حالات $q \\in \\mathbb{R}^*$.",
            "تطبيق مبرهنة التقارب الرتيب (تزايدية ومكبورة أو تناقصية ومصغورة) والتمييز بين المكبر والنهاية.",
            "توظيف مصداق الدركيين، متفاوتة القيمة المطلقة، والبرهان بالترجع على $|u_n - \\ell| \\le k^n |u_0 - \\ell|$ ($0 &lt; k &lt; 1$) لاستنتاج النهاية."
          ]
        },
        {
          "id": "m03-ax3",
          "num": "المحور 03",
          "titleAr": "المتتاليات الترجعية من نوع $u_{n+1} = f(u_n)$ وتحديد نهايتها بحل المعادلة $f(\\ell) = \\ell$",
          "titleFr": "Suites récurrentes du type u_{n+1} = f(u_n)",
          "status": "completed",
          "requirements": [
            "حساب نهاية متتالية من الشكل $v_n = f(u_n)$ عبر اتصال الدالة $f$ عند $\\ell = \\lim u_n$.",
            "التحقق من الشروط الأربعة لتحديد نهاية $u_{n+1}=f(u_n)$ ($f$ متصلة على $I$، $f(I) \\subset I$، $u_0 \\in I$، وتقارب $(u_n)$).",
            "حل المعادلة $f(\\ell) = \\ell$ وتصفية الحلول الدخيلة بالاعتماد على تأطير $(u_n)$ ورتابتها."
          ]
        }
      ]
    },
    {
      "id": "math-04",
      "num": "04",
      "semester": 1,
      "status": "active",
      "progressText": "مكتمل (100% — المعجم والمختبر البصري والفرض 20/20)",
      "titleAr": "الدوال الأصلية",
      "titleFr": "Fonctions primitives",
      "summary": "تعريف الدالة الأصلية لدالة متصلة على مجال، تحديد الدالة الأصلية التي تأخذ قيمة معلومة في نقطة، وجدول الدوال الأصلية الاعتيادية والعمليات عليها.",
      "hasLexique": true,
      "hasExam": true,
      "examNavLabel": "📝 الفرض المحروس N°4 (20/20)",
      "simulator": {
        "navLabel": "🧪 المختبر البصري للدوال الأصلية (4 أنماط)",
        "script": "./simulators/math-04.js"
      },
      "axes": [
        {
          "id": "m04-ax1",
          "num": "المحور 01",
          "titleAr": "تعريف الدالة الأصلية وشرط الاتصال لوجودها، وتحديد الدالة الأصلية الوحيدة التي تحقق $F(x_0)=y_0$",
          "titleFr": "Définition et existence des primitives sur un intervalle",
          "status": "completed",
          "requirements": [
            "التحقق من أن $F$ دالة أصلية لـ $f$ على مجال $I$ بإثبات قابلية الاشتقاق أولاً ثم المساواة $F'(x)=f(x)$، وحل مسائل البارامترات.",
            "معرفة مبرهنة وجود الدوال الأصلية (الاتصال على مجال) وبنية المجموعة $F(x) + k$ على مجال وليس على اتحاد مجالات.",
            "تعيين الدالة الأصلية الوحيدة التي تحقق الشرط البدئي $F(x_0) = y_0$ وقراءة تغيرات وتقعر $F$ انطلاقاً من $f$ و $f'$."
          ]
        },
        {
          "id": "m04-ax2",
          "num": "المحور 02",
          "titleAr": "الدوال الأصلية الاعتيادية والصيغ من نوع $u' u^r$ ($r \\in \\mathbb{Q}\\setminus\\{-1\\}$) و $u'/\\sqrt{u}$",
          "titleFr": "Primitives des fonctions usuelles et opérations",
          "status": "completed",
          "requirements": [
            "إتقان جدول الدوال الأصلية الاعتيادية بقراءة عكسية لجدول المشتقات (القوى النسبية $r \\neq -1$ والجذور والدوال المثلثية و $1+\\tan^2 x$).",
            "إبراز واستعمال الصيغ المركبة $u'u^r$، $u'/u^n$، $u'/\\sqrt{u}$، $u'\\cos(u)$، و $u'\\sin(u)$ مع التحقق من شروط الإشارة والاتصال.",
            "توظيف التحويلات الجبرية المسبقة (تعديل الثابت، تفكيك الكسور إلى $(x-a)^{-k}$، والإخطاط المثلثي لـ $\\cos^2, \\sin^3, \\tan^n$)."
          ]
        }
      ]
    },
    {
      "id": "math-05",
      "num": "05",
      "semester": 1,
      "status": "active",
      "progressText": "2 من 3 محاور مكتملة (67% من المحاور)",
      "titleAr": "الدوال اللوغاريتمية",
      "titleFr": "Fonctions logarithmiques",
      "summary": "دالة اللوغاريتم النيبيري $\\ln$، خصائصها الجبرية، النهايات الأساسية، مشتقة ودوال أصلية لـ $u'/u$، ودالة اللوغاريتم للأساس $a$ واللوغاريتم العشري $\\log$.",
      "axes": [
        {
          "id": "m05-ax1",
          "num": "المحور 01",
          "titleAr": "تعريف دالة اللوغاريتم النيبيري $\\ln$، خصائصها الجبرية، وحل المعادلات والمتراجحات اللوغاريتمية",
          "titleFr": "Définition de la fonction ln et propriétés algébriques",
          "status": "completed",
          "requirements": [
            "تعريف دالة $\\ln$ كأصلية لـ $x \\mapsto \\frac{1}{x}$ على $]0, +\\infty[$ تنعدم في $1$، وإتقان رتابتها وإشارتها والعدد النيبيري $\\ln(e) = 1$.",
            "تطبيق القواعد الجبرية للوغاريتم ($\\ln(ab), \\ln(a/b), \\ln(a^r), \\ln(u^2) = 2\\ln|u|$) بعد التحقق الصارم من مجموعة التعريف.",
            "حل المعادلات والمتراجحات والنظمات اللوغاريتمية باستعمال التكافؤات وتغيير المتغير $X = \\ln x$ وتقاطع الحلول مع حيز التعريف."
          ]
        },
        {
          "id": "m05-ax2",
          "num": "المحور 02",
          "titleAr": "النهايات الاعتيادية الأساسية لدالة $\\ln$ ($\\lim_{x\\to+\\infty}\\frac{\\ln x}{x^n}=0$, $\\lim_{x\\to 0^+}x^n\\ln x=0$, $\\lim_{x\\to 1}\\frac{\\ln x}{x-1}=1$)",
          "titleFr": "Limites fondamentales et branches infinies de ln",
          "status": "completed",
          "requirements": [
            "ضبط النهايات المرجعية الست لدالة $\\ln$ عند $0^+$ و$+\\infty$ وعند $1$ و$0$، واستنتاج المقارب العمودي والفرع الشلجمي $(Ox)$.",
            "تبرير نهايات التزايد المقارن لقوى جذرية $r \\in \\mathbb{Q}_+^*$ (مثل $\\frac{\\ln x}{\\sqrt{x}}$ و$(\\ln x)^2/x$) بتغيير المتغير $t = \\sqrt{x}$.",
            "كسر الأشكال غير المحددة في الدوال المركبة بتعميل الحدوديات داخل $\\ln$ وتوظيف النهايات المشتقة ودراسة الفروع اللانهائية والوضع النسبي."
          ]
        },
        {
          "id": "m05-ax3",
          "num": "المحور 03",
          "titleAr": "مشتقة $\\ln(|u(x)|)$ والدوال الأصلية لـ $\\frac{u'(x)}{u(x)}$، ودالة اللوغاريتم للأساس $a$ واللوغاريتم العشري $\\log(x)$",
          "titleFr": "Dérivée logarithmique, primitives de u’/u et logarithme décimal"
        }
      ]
    },
    {
      "id": "math-06",
      "num": "06",
      "semester": 1,
      "status": "upcoming",
      "titleAr": "الأعداد العقدية (الجزء الأول)",
      "titleFr": "Nombres complexes — Partie 1",
      "summary": "الكتابة الجبرية، المرافق، المعيار، التمثيل الهندسي (اللحق والمسافة)، الشكل المثلثي، العمدة، والتأويل الهندسي للاستقامية والزوايا الموجهة.",
      "axes": [
        {
          "id": "m06-ax1",
          "num": "المحور 01",
          "titleAr": "الكتابة الجبرية $z = a + ib$، العمليات في $\\mathbb{C}$، المرافق $\\bar{z}$، والمعيار $|z| = \\sqrt{z\\bar{z}}$",
          "titleFr": "Forme algébrique, conjugué et module"
        },
        {
          "id": "m06-ax2",
          "num": "المحور 02",
          "titleAr": "التمثيل الهندسي لعدد عقدي، لحق نقطة ولحق متجهة، المسافة $AB = |z_B - z_A|$، استقامية ثلاث نقط، وتداور أربع نقط (Cocyclicité)",
          "titleFr": "Représentation géométrique, affixe, distance et alignement"
        },
        {
          "id": "m06-ax3",
          "num": "المحور 03",
          "titleAr": "عمدة عدد عقدي غير منعدم $\\arg(z)$، الشكل المثلثي $[r, \\theta]$، وقياس الزاوية الموجهة $(\\overrightarrow{AB}, \\overrightarrow{AC}) \\equiv \\arg\\left(\\frac{z_C-z_A}{z_B-z_A}\\right) [2\\pi]$",
          "titleFr": "Argument, forme trigonométrique et mesure d’angles orientés"
        }
      ]
    },
    {
      "id": "math-07",
      "num": "07",
      "semester": 2,
      "status": "upcoming",
      "titleAr": "الدوال الأسية",
      "titleFr": "Fonctions exponentielles",
      "summary": "الدالة الأسية النيبيرية $\\exp(x) = e^x$، خصائصها الجبرية، النهايات الاعتيادية الأساسية، مشتقة ودوال أصلية لـ $u' e^u$، والدالة الأسية للأساس $a$.",
      "axes": [
        {
          "id": "m07-ax1",
          "num": "المحور 01",
          "titleAr": "تعريف الدالة الأسية النيبيرية كدالة عكسية لـ $\\ln$، خصائصها الجبرية، وحل المعادلات والمتراجحات الأسية",
          "titleFr": "Définition de exp, propriétés algébriques et équations"
        },
        {
          "id": "m07-ax2",
          "num": "المحور 02",
          "titleAr": "النهايات الأساسية ($\\lim_{+\\infty}\\frac{e^x}{x^n}=+\\infty$, $\\lim_{-\\infty}x^n e^x=0$, $\\lim_{0}\\frac{e^x-1}{x}=1$)، اشتقاق وأصلية $u'(x)e^{u(x)}$، والدالة الأسية للأساس $a$ ($a^x = e^{x\\ln a}$)",
          "titleFr": "Limites fondamentales, dérivée et primitives de u’e^u"
        }
      ]
    },
    {
      "id": "math-08",
      "num": "08",
      "semester": 2,
      "status": "upcoming",
      "titleAr": "الأعداد العقدية (الجزء الثاني)",
      "titleFr": "Nombres complexes — Partie 2",
      "summary": "الترميز الأسي $r e^{i\\theta}$، صيغتا موافر وأويلر (الإخطاط)، حل معادلات الدرجة الثانية في $\\mathbb{C}$ بمعاملات حقيقية، والتحويلات الاعتيادية (الإزاحة، التحاكي، الدوران).",
      "axes": [
        {
          "id": "m08-ax1",
          "num": "المحور 01",
          "titleAr": "الترميز الأسي $z = r e^{i\\theta}$، صيغة موافر، وصيغتا أويلر لإخطاط $\\cos^n x$ و $\\sin^n x$",
          "titleFr": "Notation exponentielle, formules de Moivre et d’Euler (linéarisation)"
        },
        {
          "id": "m08-ax2",
          "num": "المحور 02",
          "titleAr": "حل المعادلة $az^2 + bz + c = 0$ ($a,b,c \\in \\mathbb{R}, a \\neq 0$) في المجموعة $\\mathbb{C}$",
          "titleFr": "Équations du second degré à coefficients réels dans C"
        },
        {
          "id": "m08-ax3",
          "num": "المحور 03",
          "titleAr": "الكتابة العقدية للتحويلات النقطية في المستوى: الإزاحة $T_{\\vec{u}}$، التحاكي $h(\\Omega, k)$، والدوران $R(\\Omega, \\theta)$",
          "titleFr": "Écriture complexe de la translation, de l’homothétie et de la rotation"
        }
      ]
    },
    {
      "id": "math-09",
      "num": "09",
      "semester": 2,
      "status": "upcoming",
      "titleAr": "المعادلات التفاضلية",
      "titleFr": "Équations différentielles",
      "summary": "حل المعادلات التفاضلية الخطية من الرتبة الأولى $y' = ay + b$ ومن الرتبة الثانية $y'' + ay' + by = 0$ وتحديد الحل الخاص بشروط بدئية.",
      "axes": [
        {
          "id": "m09-ax1",
          "num": "المحور 01",
          "titleAr": "حل المعادلة التفاضلية $y' = ay + b$ وتحديد الحل الخاص الذي يحقق شرطاً بدئياً",
          "titleFr": "Équation différentielle y’ = ay + b"
        },
        {
          "id": "m09-ax2",
          "num": "المحور 02",
          "titleAr": "حل المعادلة التفاضلية $y'' + ay' + by = 0$ باستعمال المعادلة المميزة $r^2 + ar + b = 0$ في الحالات الثلاث لـ $\\Delta$، والمعادلات التفاضلية التي تؤول إلى الصيغتين",
          "titleFr": "Équation différentielle y’’ + ay’ + by = 0"
        }
      ]
    },
    {
      "id": "math-10",
      "num": "10",
      "semester": 2,
      "status": "upcoming",
      "titleAr": "الحساب التكاملي",
      "titleFr": "Calcul intégral",
      "summary": "تكامل دالة متصلة على قطعة، خاصيات التكامل (الخطانية، علاقة شال، الترتيب، القيمة المتوسطة)، المكاملة بالأجزاء، وحساب المساحات والحجوم.",
      "axes": [
        {
          "id": "m10-ax1",
          "num": "المحور 01",
          "titleAr": "حساب تكامل دالة متصلة باستعمال الدوال الأصلية، علاقة شال، الخطانية، والتكامل والترتيب",
          "titleFr": "Définition de l’intégrale et propriétés fondamentales"
        },
        {
          "id": "m10-ax2",
          "num": "المحور 02",
          "titleAr": "تقنية المكاملة بالأجزاء (Intégration par parties)",
          "titleFr": "Technique d’intégration par parties"
        },
        {
          "id": "m10-ax3",
          "num": "المحور 03",
          "titleAr": "حساب مساحة حيز مستوٍ محصور بين منحنيين وحجم مجسم مولد بدوران منحنى حول محور الأفاصيل",
          "titleFr": "Calcul d’aires et de volumes par intégrale"
        }
      ]
    },
    {
      "id": "math-11",
      "num": "11",
      "semester": 2,
      "status": "upcoming",
      "titleAr": "الهندسة الفضائية (الجداء السلمي والفلكة والجداء المتجهي)",
      "titleFr": "Géométrie dans l’espace (Produit scalaire, Sphère et Produit vectoriel)",
      "summary": "الجداء السلمي في الفضاء، المعادلة الديكارتية لمستوى، مسافة نقطة عن مستوى، الدراسة التحليلية للفلكة، والجداء المتجهي وتطبيقاته.",
      "axes": [
        {
          "id": "m11-ax1",
          "num": "المحور 01",
          "titleAr": "الجداء السلمي في الفضاء، المعادلة الديكارتية لمستوى معرف بنقطة ومتجهة منظمية، ومسافة نقطة عن مستوى $d(\\Omega, (P))$",
          "titleFr": "Produit scalaire, équation d’un plan et distance point-plan"
        },
        {
          "id": "m11-ax2",
          "num": "المحور 02",
          "titleAr": "معادلة الفلكة $(S)$ والتمثيل البارامتري لفلكة، المستوى المماس لفلكة، والأوضاع النسبية لفلكة ومستوى ولفلكة ومستقيم (في أمثلة عددية)",
          "titleFr": "Étude analytique de la sphère et positions relatives"
        },
        {
          "id": "m11-ax3",
          "num": "المحور 03",
          "titleAr": "الجداء المتجهي $\\vec{u} \\wedge \\vec{v}$، استقامية متجهتين، مساحة مثلث $S = \\frac{1}{2}\\|\\overrightarrow{AB}\\wedge\\overrightarrow{AC}\\|$، ومسافة نقطة عن مستقيم",
          "titleFr": "Produit vectoriel, aire d’un triangle et distance point-droite"
        }
      ]
    },
    {
      "id": "math-12",
      "num": "12",
      "semester": 2,
      "status": "upcoming",
      "titleAr": "حساب الاحتمالات",
      "titleFr": "Calcul des probabilités",
      "summary": "التعداد، احتمال حدث، فرضية تساوي الاحتمالات، الاحتمال الشرطي، استقلالية الأحداث، المتغير العشوائي، والأمل الرياضي والمغايرة والحدانية.",
      "axes": [
        {
          "id": "m12-ax1",
          "num": "المحور 01",
          "titleAr": "التعداد (السحب بالتتابع وبإحلال $n^p$، بالتتابع وبدون إحلال $A_n^p$، وفي آن واحد $C_n^p$) وحساب احتمال حدث",
          "titleFr": "Dénombrement et calcul de probabilités"
        },
        {
          "id": "m12-ax2",
          "num": "المحور 02",
          "titleAr": "الاحتمال الشرطي $P_A(B) = \\frac{P(A \\cap B)}{P(A)}$، شجرة الاحتمالات، واستقلالية حدثين",
          "titleFr": "Probabilité conditionnelle et indépendance"
        },
        {
          "id": "m12-ax3",
          "num": "المحور 03",
          "titleAr": "المتغير العشوائي $X$، قانون الاحتمال، الأمل الرياضي $E(X)$، المغايرة $V(X)$، والانحراف الطرازي، والتوزيع الحداني $B(n,p)$",
          "titleFr": "Variable aléatoire, espérance, variance et loi binomiale"
        }
      ]
    }
  ]
});
