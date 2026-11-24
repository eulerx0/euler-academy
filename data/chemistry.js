/**
 * Euler Academy — 2BAC PC Chimie (10 Lessons Registry)
 * Axis contentHtml modules live in ./modules/chemistry/<lessonId>/<axisId>.js
 */
window.EulerAcademy.registerSubject({
  "id": "chemistry",
  "titleAr": "الكيمياء",
  "titleFr": "Chimie",
  "badge": "2BAC PC • المعامل 7",
  "color": "emerald",
  "description": "المنهاج الرسمي الكامل للكيمياء خاص حصرياً بمسلك العلوم الفيزيائية (2BAC PC — 10 دروس رسمية موزعة على الأجزاء الأربعة للمقرر).",
  "lessons": [
    {
      "id": "chem-01",
      "num": "01",
      "unit": "الجزء 1: التحولات السريعة والبطيئة",
      "status": "active",
      "progressText": "جميع المحاور الـ 2 مكتملة + المعجم (20) + المختبر (4 أنماط) + الفرض المحروس N°1 (100%)",
      "titleAr": "التحولات السريعة والتحولات البطيئة",
      "titleFr": "Transformations rapides et transformations lentes",
      "summary": "تفاعلات الأكسدة-اختزال، المزدوجات المؤكسد/مختزل، التمييز بين التحولات السريعة والبطيئة، والعوامل الحركية (درجة الحرارة والتركيز البدئي).",
      "hasLexique": true,
      "hasExam": true,
      "examNavLabel": "📝 الفرض المحروس N°1 (20/20)",
      "simulator": {
        "navLabel": "🧪 المختبر البصري للتفاعلات (4 أنماط)",
        "script": "./simulators/chem-01.js"
      },
      "axes": [
        {
          "id": "c01-ax1",
          "num": "المحور 01",
          "titleAr": "تفاعلات الأكسدة-اختزال وكتابة أنصاف المعادلات الإلكترونية والمعادلة الحصيلة",
          "titleFr": "Réactions d’oxydo-réduction",
          "status": "completed",
          "requirements": [
            "تعريف المؤكسد $\\text{Ox}$ والمختزل $\\text{Réd}$ وتفاعلي الأكسدة والاختزال والمزدوجة $\\text{Ox}/\\text{Réd}$.",
            "كتابة وموازنة أنصاف المعادلات الإلكترونية بالترتيب الصارم (الذرات، الأوكسجين بـ $\\text{H}_2\\text{O}$، الهيدروجين بـ $\\text{H}^+$ أو $\\text{H}_3\\text{O}^+$، والشحنة بـ $e^-$).",
            "استنتاج المعادلة الحصيلة لتفاعل الأكسدة-اختزال بعد توحيد عدد الإلكترونات واختزال الأنواع المشتركة.",
            "ربط المعادلة الحصيلة بجدول التقدم لتحديد المتفاعل المحد والتقدم الأقصى $x_{\\max}$."
          ]
        },
        {
          "id": "c01-ax2",
          "num": "المحور 02",
          "titleAr": "التحولات السريعة والبطيئة ودور العوامل الحركية في تسريع أو توقيف التفاعل (السقي الكيميائي)",
          "titleFr": "Facteurs cinétiques et trempe chimique",
          "status": "completed",
          "requirements": [
            "التمييز تجريبياً بين التحولات السريعة (الآنية) والتحولات البطيئة (الممتدة من ثوانٍ إلى ساعات).",
            "معرفة وتفسير تأثير العاملين الحركيين: درجة الحرارة والتركيز البدئي للمتفاعلات على سرعة التطور.",
            "استثمار ظاهرة السقي الكيميائي (التبريد المفاجئ والتخفيف) في المعايرة الحركية وتثبيت الحالة الكيميائية."
          ]
        }
      ]
    },
    {
      "id": "chem-02",
      "num": "02",
      "unit": "الجزء 1: التحولات السريعة والبطيئة",
      "status": "active",
      "progressText": "جميع المحاور الـ 2 مكتملة (100% من المحاور)",
      "titleAr": "التتبع الزمني لتحول كيميائي — سرعة التفاعل",
      "titleFr": "Suivi temporel d’une transformation chimique — Vitesse de réaction",
      "summary": "طرق التتبع الزمني (المعايرة، الموصلية $\\sigma$، ضغط أو حجم غاز)، السرعة الحجمية $v(t) = \\frac{1}{V_S}\\frac{dx}{dt}$، وزمن نصف التفاعل $t_{1/2}$.",
      "axes": [
        {
          "id": "c02-ax1",
          "num": "المحور 01",
          "titleAr": "طرق التتبع الزمني واستغلال جدول التقدم لإيجاد تعبير $x(t)$ بدلالة المقدار الفيزيائي المقاس ($\\sigma, G, P, V$)",
          "titleFr": "Méthodes de suivi temporel et avancement x(t)",
          "status": "completed",
          "requirements": [
            "التمييز بين الطريقة الكيميائية المتلفة (المعايرة بعد السقي الكيميائي) والطرق الفيزيائية المستمرة (الموصلية، الضغط، الحجم).",
            "استغلال جدول التقدم وقانون كولروش $\\sigma = \\sum \\lambda_i [X_i]$ وقانون الغازات الكاملة $PV = nRT$ لإيجاد $x(t)$ بدقة الوحدات الدولية.",
            "إثبات وتطبيق علاقات النسبة التآلفية $x(t) = x_{\\max}\\frac{Y(t)-Y_0}{Y_f-Y_0}$ واستثمار عامل التخفيف $\\frac{V_S}{V_p}$ في المعايرة."
          ]
        },
        {
          "id": "c02-ax2",
          "num": "المحور 02",
          "titleAr": "تعريف وحساب السرعة الحجمية للتفاعل مبيانياً $v(t) = \\frac{1}{V_S}\\frac{dx}{dt}$ وتحديد زمن نصف التفاعل $t_{1/2}$",
          "titleFr": "Vitesse volumique de réaction et temps de demi-réaction",
          "status": "completed",
          "requirements": [
            "تعريف السرعة الحجمية $v(t) = \\frac{1}{V_S}\\frac{dx}{dt}$ وحسابها مبيانياً برسم المماس، وكذا استخراجها من منحنيات $[X](t)$ أو $P(t)$ أو $\\sigma(t)$.",
            "تفسير تناقص السرعة الحجمية مع الزمن مجهرياً بانخفاض تراكيز المتفاعلات وتواتر التصادمات الفعالة.",
            "تعريف زمن نصف التفاعل $t_{1/2}$ ($x(t_{1/2}) = \\frac{x_f}{2}$) وتحديده مبيانياً بما في ذلك حالة $Y_0 \\neq 0$ ($Y(t_{1/2}) = \\frac{Y_0 + Y_f}{2}$)."
          ]
        }
      ]
    },
    {
      "id": "chem-03",
      "num": "03",
      "unit": "الجزء 2: التحولات غير الكلية",
      "status": "upcoming",
      "titleAr": "التحولات الكيميائية التي تحدث في منحيين",
      "titleFr": "Transformations chimiques s’effectuant dans les deux sens",
      "summary": "الأحماض والقواعد حسب برونشتد، $pH$ محلول مائي، نسبة التقدم النهائي $\\tau = x_f / x_{max}$، والتمييز بين التحول الكلي ($\\tau = 1$) وغير الكلي ($\\tau < 1$).",
      "axes": [
        {
          "id": "c03-ax1",
          "num": "المحور 01",
          "titleAr": "تعريف الحمض والقاعدة حسب برونشتد وقياس $pH = -\\log[H_3O^+]$",
          "titleFr": "Acides et bases selon Brönsted et pH d’une solution"
        },
        {
          "id": "c03-ax2",
          "num": "المحور 02",
          "titleAr": "نسبة التقدم النهائي $\\tau = \\frac{x_f}{x_{max}}$ ومفهوم التوازن الكيميائي الديناميكي",
          "titleFr": "Taux d’avancement final et équilibre chimique"
        }
      ]
    },
    {
      "id": "chem-04",
      "num": "04",
      "unit": "الجزء 2: التحولات غير الكلية",
      "status": "upcoming",
      "titleAr": "حالة توازن مجموعة كيميائية",
      "titleFr": "État d’équilibre d’un système chimique",
      "summary": "خارج التفاعل $Q_r$، ثابتة التوازن $K = Q_{r,éq}$، استغلال الموصلية $\\sigma$، وتأثير الحالة البدئية على نسبة التقدم النهائي $\\tau$.",
      "axes": [
        {
          "id": "c04-ax1",
          "num": "المحور 01",
          "titleAr": "تعبير خارج التفاعل $Q_r$ وثابتة التوازن $K$ التي تتعلق فقط بدرجة الحرارة",
          "titleFr": "Quotient de réaction Q_r et constante d’équilibre K"
        },
        {
          "id": "c04-ax2",
          "num": "المحور 02",
          "titleAr": "تحديد $Q_{r,éq}$ بواسطة الموصلية $\\sigma$ وتأثير التركيز البدئي وثابتة التوازن $K$ على نسبة التقدم النهائي $\\tau$",
          "titleFr": "Conductimétrie et influence de l’état initial sur τ"
        }
      ]
    },
    {
      "id": "chem-05",
      "num": "05",
      "unit": "الجزء 2: التحولات غير الكلية",
      "status": "upcoming",
      "titleAr": "التحولات المقرونة بالتفاعلات حمض-قاعدة في محلول مائي",
      "titleFr": "Transformations liées à des réactions acide-base",
      "summary": "الجداء الأيوني للماء $K_e$، ثابتة الحمضية $K_A$ و $pK_A$، مخطط هيمنة الأنواع الحمضية والقاعدية، والمعايرة الحمضية-القاعدية.",
      "axes": [
        {
          "id": "c05-ax1",
          "num": "المحور 01",
          "titleAr": "التحلل البروتوني الذاتي للماء، الجداء الأيوني $K_e = [H_3O^+][HO^-]$، ثابتة الحمضية $K_A$ و $pK_A$، ومخطط الهيمنة",
          "titleFr": "Produit ionique de l’eau, K_A, pK_A et diagramme de prédominance"
        },
        {
          "id": "c05-ax2",
          "num": "المحور 02",
          "titleAr": "المعايرة pH-مترية، تحديد نقطة التكافؤ $E(V_E, pH_E)$، علاقة التكافؤ، وتحديد $pK_A$ عند نصف التكافؤ والكاشف الملون الملائم",
          "titleFr": "Dosage acido-basique, repérage de l’équivalence et choix de l’indicateur"
        }
      ]
    },
    {
      "id": "chem-06",
      "num": "06",
      "unit": "الجزء 3: منحى تطور مجموعة كيميائية",
      "status": "upcoming",
      "titleAr": "التطور التلقائي لمجموعة كيميائية",
      "titleFr": "Évolution spontanée d’un système chimique",
      "summary": "معيار التطور التلقائي لمجموعة كيميائية عن طريق مقارنة خارج التفاعل في الحالة البدئية $Q_{r,i}$ مع ثابتة التوازن $K$.",
      "axes": [
        {
          "id": "c06-ax1",
          "num": "المحور 01",
          "titleAr": "معيار التطور التلقائي ($Q_{r,i} < K$ في المنحى المباشر، $Q_{r,i} > K$ في المنحى المعاكس، و $Q_{r,i} = K$ حالة توازن)",
          "titleFr": "Critère d’évolution spontanée d’un système chimique"
        }
      ]
    },
    {
      "id": "chem-07",
      "num": "07",
      "unit": "الجزء 3: منحى تطور مجموعة كيميائية",
      "status": "upcoming",
      "titleAr": "التحولات التلقائية في الأعمدة وتحصيل الطاقة",
      "titleFr": "Transformations spontanées dans les piles et production d’énergie",
      "summary": "بنية واشتغال العمود الكهروكيميائي، تحديد القطبية ومنحى التيار، التبيانة الاصطلاحية للعمود، وكمية الكهرباء $Q = I \\cdot \\Delta t = n(e^-) \\cdot F$.",
      "axes": [
        {
          "id": "c07-ax1",
          "num": "المحور 01",
          "titleAr": "بنية العمود الكهروكيميائي، القنطرة الملحية، تحديد الأنود (أكسدة) والكاثود (اختزال)، والتبيانة الاصطلاحية",
          "titleFr": "Constitution d’une pile, polarité et schéma conventionnel"
        },
        {
          "id": "c07-ax2",
          "num": "المحور 02",
          "titleAr": "الدراسة الكمية للعمود والحصيلة المادية باستغلال العلاقة $Q = I \\cdot \\Delta t = n(e^-) \\cdot F$",
          "titleFr": "Étude quantitative d’une pile et quantité d’électricité"
        }
      ]
    },
    {
      "id": "chem-08",
      "num": "08",
      "unit": "الجزء 3: منحى تطور مجموعة كيميائية",
      "status": "upcoming",
      "titleAr": "التحولات القسرية (التحليل الكهربائي)",
      "titleFr": "Transformations forcées — Électrolyse",
      "summary": "مبدأ التحول القسري، تحديد الأنود والكاثود في التحليل الكهربائي، التفاعلات المحتملة عند الإلكترودين، والحصيلة الكمية وتطبيقاته الصناعية.",
      "axes": [
        {
          "id": "c08-ax1",
          "num": "المحور 01",
          "titleAr": "مبدأ التحول القسري وتحديد تفاعل الأكسدة بجوار الأنود (المرتبط بالقطب الموجب للمولد) وتفاعل الاختزال بجوار الكاثود",
          "titleFr": "Principe de l’électrolyse et réactions aux électrodes"
        },
        {
          "id": "c08-ax2",
          "num": "المحور 02",
          "titleAr": "الدراسة الكمية للتحليل الكهربائي وتطبيقاته (طلاء الفلزات وشحن المركمات)",
          "titleFr": "Bilan quantitatif et applications de l’électrolyse"
        }
      ]
    },
    {
      "id": "chem-09",
      "num": "09",
      "unit": "الجزء 4: التحكم في تطور المجموعات الكيميائية",
      "status": "upcoming",
      "titleAr": "تفاعلات الأسترة والحلمأة",
      "titleFr": "Réactions d’estérification et d’hydrolyse",
      "summary": "تسمية الكحولات والأحماض الكربوكسيلية والإسترات، مميزات تفاعلي الأسترة والحلمأة (بطيئان، محدودان، لا حراريان)، والتوازن أسترة-حلمأة.",
      "axes": [
        {
          "id": "c09-ax1",
          "num": "المحور 01",
          "titleAr": "المجموعات المميزة والتسمية النظامية للكحولات والأحماض الكربوكسيلية والإسترات",
          "titleFr": "Groupes caractéristiques et nomenclature des composés oxygénés"
        },
        {
          "id": "c09-ax2",
          "num": "المحور 02",
          "titleAr": "معادلتا الأسترة والحلمأة، مميزاتهما التجريبية، وثابتة التوازن والسرعة الحجمية",
          "titleFr": "Étude expérimentale et équilibre d’estérification-hydrolyse"
        }
      ]
    },
    {
      "id": "chem-10",
      "num": "10",
      "unit": "الجزء 4: التحكم في تطور المجموعات الكيميائية",
      "status": "upcoming",
      "titleAr": "التحكم في تطور المجموعات الكيميائية",
      "titleFr": "Contrôle de l’évolution des systèmes chimiques",
      "summary": "مردود التحول $r = n_{exp}/n_{th}$، تحسين مردود تصنيع إستر باستعمال أندريد الحمض أو إزالة أحد النواتج، الحفز، وتفاعل التصبن (حلمأة إستر في وسط قاعدي).",
      "axes": [
        {
          "id": "c10-ax1",
          "num": "المحور 01",
          "titleAr": "حساب المردود $r$ والتحكم في السرعة (درجة الحرارة والحفاز) وفي الحالة النهائية (تصنيع الإستر انطلاقاً من أندريد الحمض)",
          "titleFr": "Rendement d’une synthèse et réactivité d’un anhydride d’acide"
        },
        {
          "id": "c10-ax2",
          "num": "المحور 02",
          "titleAr": "حلمأة الإسترات في وسط قاعدي: تفاعل التصبن (Saponification) وخصائص الصابون",
          "titleFr": "Hydrolyse basique des esters : Saponification"
        }
      ]
    }
  ]
});
