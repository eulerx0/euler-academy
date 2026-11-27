/**
 * Euler Academy — 2BAC PC Physique (15 Lessons Registry)
 * Axis contentHtml modules live in ./modules/physics/<lessonId>/<axisId>.js
 */
window.EulerAcademy.registerSubject({
  "id": "physics",
  "titleAr": "الفيزياء",
  "titleFr": "Physique",
  "badge": "2BAC PC • المعامل 7",
  "color": "amber",
  "description": "المنهاج الرسمي الكامل للفيزياء خاص حصرياً بمسلك العلوم الفيزيائية (2BAC PC — 15 درساً رسمياً موزعة على الوحدات الـ 4: الموجات، التحولات النووية، الكهرباء، والميكانيك).",
  "lessons": [
    {
      "id": "phys-01",
      "num": "01",
      "unit": "الجزء 1: الموجات (Ondes)",
      "status": "active",
      "progressText": "جميع المحاور الـ 3 مكتملة + المختبر التفاعلي (5 أنماط) + الفرض المحروس الشامل N°1 (100%)",
      "titleAr": "الموجات الميكانيكية المتوالية",
      "titleFr": "Ondes mécaniques progressives",
      "summary": "تعريف الموجة الميكانيكية، الموجة المستعرضة والطولية، سرعة الانتشار $v = d/\\Delta t$، والتأخر الزمني $\\tau = SM/v$.",
      "hasLexique": true,
      "hasExam": true,
      "examNavLabel": "📝 الفرض المحروس N°1 (20/20)",
      "simulator": {
        "navLabel": "🌊 المختبر البصري للموجات (5 أنماط)",
        "script": "./simulators/phys-01.js"
      },
      "axes": [
        {
          "id": "p01-ax1",
          "num": "المحور 01",
          "titleAr": "مفهوم الموجة الميكانيكية المتوالية وخواصها العامة والفرق بين المستعرضة والطولية",
          "titleFr": "Définition et propriétés générales",
          "status": "completed",
          "requirements": [
            "تعريف الموجة الميكانيكية والموجة الميكانيكية المتوالية بدقة (انتشار تشويه في وسط مادي مرن دون انتقال للمادة).",
            "التمييز بين الموجة المستعرضة ($\\vec{d}_{\\text{pert}} \\perp \\vec{d}_{\\text{prop}}$) والموجة الطولية ($\\vec{d}_{\\text{pert}} \\parallel \\vec{d}_{\\text{prop}}$) وتصنيف الصوت والموجات الزلزالية.",
            "معرفة الخواص العامة للانتشار: انتقال الطاقة دون المادة، أبعاد الانتشار (1D, 2D, 3D)، وتراكب موجتين.",
            "تحديد منحى حركة نقطة من وسط الانتشار انطلاقاً من مظهر الوسط في لحظة معينة بتقنية الإزاحة الزمنية."
          ]
        },
        {
          "id": "p01-ax2",
          "num": "المحور 02",
          "titleAr": "سرعة انتشار موجة ميكانيكية والعوامل المؤثرة فيها (قصور ومرونة الوسط)",
          "titleFr": "Célérité d’une onde mécanique",
          "status": "completed",
          "requirements": [
            "تعريف سرعة انتشار موجة ميكانيكية $v = \\frac{d}{\\Delta t}$ واستعمال الوحدات الدولية والتحويلات الدقيقة.",
            "قياس $v$ تجريبياً من صورتين متتاليتين (التصوير المتتالي) أو راسم التذبذب ($\\Delta t = n_{\\text{div}} \\cdot S_h$) أو تقنية الصدى ($2D$).",
            "معرفة العوامل المؤثرة في سرعة الانتشار: مرونة وصلابة الوسط، قصوره ($\\rho$ أو $\\mu$)، ودرجة الحرارة، واستقلاليتها عن وسع التشويه.",
            "استعمال والتحقق البعدي من علاقة سرعة موجة على طول حبل مشدود $v = \\sqrt{\\frac{F}{\\mu}}$."
          ]
        },
        {
          "id": "p01-ax3",
          "num": "المحور 03",
          "titleAr": "مفهوم التأخر الزمني $\\tau = \\frac{SM}{v}$ والعلاقة الاستطالية $y_M(t) = y_S(t - \\tau)$",
          "titleFr": "Retard temporel et relation d’élongation",
          "status": "completed",
          "requirements": [
            "تعريف وحساب التأخر الزمني $\\tau = \\frac{SM}{v}$ بين منبع $S$ ونقطة $M$ أو بين نقطتين $M_1$ و $M_2$.",
            "إثبات واستغلال العلاقة الاستطالية $y_M(t) = y_S(t - \\tau)$ لحساب الاستطالات وتحديد لحظتي بداية وسكون نقطة.",
            "استنتاج المنحنى الزمني $y_M(t)$ انطلاقاً من مظهر الحبل $y(x)$ للتشويهات المتماثلة وغير المتماثلة مع مراعاة انعكاس الجبهة."
          ]
        }
      ]
    },
    {
      "id": "phys-02",
      "num": "02",
      "unit": "الجزء 1: الموجات (Ondes)",
      "status": "active",
      "progressText": "جميع المحاور الـ 3 مكتملة + معجم ثنائي (15 مصطلحاً) + مختبر تفاعلي (4 أنماط) + الفرض المحروس N°2 (100%)",
      "titleAr": "الموجات الميكانيكية المتوالية الدورية",
      "titleFr": "Ondes mécaniques progressives périodiques",
      "summary": "الدورية الزمانية $T$ والدورية المكانية $\\lambda$، العلاقة $\\lambda = v \\cdot T = v/N$، توافق وتعاكس الطور، حيود الموجات، والوسط المبدد.",
      "hasLexique": true,
      "hasExam": true,
      "examNavLabel": "📝 الفرض المحروس N°2 (20/20)",
      "simulator": {
        "navLabel": "🌊 مختبر الموجات الدورية (4 أنماط)",
        "script": "./simulators/phys-02.js"
      },
      "axes": [
        {
          "id": "p02-ax1",
          "num": "المحور 01",
          "titleAr": "الدورية الزمانية $T$ وطول الموجة $\\lambda$ والعلاقة الأساسية $\\lambda = v / N$",
          "titleFr": "Périodicité temporelle et spatiale",
          "status": "completed",
          "requirements": [
            "تعريف الموجة الميكانيكية المتوالية الدورية والجيبية، والتمييز بين الدور $T$ والتردد $N = 1/T$.",
            "التعبير عن طول الموجة $\\lambda$ بطريقتين ($\\lambda = v \\cdot T = v/N$ وأصغر مسافة بين نقطتين على توافق في الطور).",
            "استغلال المظهر المكاني $y(x)$ وشاشة راسم التذبذب $y_M(t)$ والوماض الكهربائي لتحديد $T, N, \\lambda, v$ واختبار تبديد الوسط."
          ]
        },
        {
          "id": "p02-ax2",
          "num": "المحور 02",
          "titleAr": "مقارنة الحركة الاهتزازية لنقطتين من وسط الانتشار (على توافق في الطور $d = k\\lambda$ أو تعاكس في الطور $d = (2k+1)\\frac{\\lambda}{2}$)",
          "titleFr": "Comparaison de l’état vibratoire de deux points",
          "status": "completed",
          "requirements": [
            "معرفة شرط التوافق في الطور ($d = k\\lambda$ أو $\\tau = kT$) وشرط التعاكس في الطور ($d = (2k+1)\\frac{\\lambda}{2}$ أو $\\tau = (k+\\frac{1}{2})T$).",
            "التمييز في التطبيق بين الانتشار أحادي البعد ($d = M_1 M_2$) والانتشار الدائري 2D ($d = |SM_2 - SM_1|$) مع التحقق من وصول الجبهة ($t \\ge SM/v$).",
            "تحديد عدد النقط المهتزة على توافق أو تعاكس على قطعة، واستثمار إزاحة مستقبل صوتي لحساب $\\lambda$ و $v$."
          ]
        },
        {
          "id": "p02-ax3",
          "num": "المحور 03",
          "titleAr": "ظاهرة الحيود (شرط $a \\le \\lambda$) ومفهوم الوسط المبدد",
          "titleFr": "Phénomène de diffraction et milieu dispersif",
          "status": "completed",
          "requirements": [
            "تعريف ظاهرة حيود موجة ميكانيكية متوالية جيبية وتطبيق شرط وضوحها $a \\le \\lambda$.",
            "التحقق من ثبات التردد $N$ والسرعة $v$ وطول الموجة $\\lambda$ للموجة المحيدة مع تناقص وسعها فقط.",
            "تعريف الوسط المبدد (تعلق $v$ بالتردد $N$) والتمييز بين تأثير تغيير التردد وتأثير تغيير عمق الماء على الحيود."
          ]
        }
      ]
    },
    {
      "id": "phys-03",
      "num": "03",
      "unit": "الجزء 1: الموجات (Ondes)",
      "status": "active",
      "progressText": "مكتمل (100% — المعجم والمختبر البصري والفرض 20/20)",
      "titleAr": "انتشار موجة ضوئية",
      "titleFr": "Propagation d’une onde lumineuse",
      "summary": "الطبيعة الموجية للضوء، حيود الضوء الأحادي اللون ($\\theta = \\lambda/a$ و $L = 2\\lambda D/a$)، حدود الطيف المرئي، معامل الانكسار $n = c/v$، والإبراز التجريبي والتفسير النوعي لتبدد الضوء الأبيض بالموشور.",
      "hasLexique": true,
      "hasExam": true,
      "examNavLabel": "📝 الفرض المحروس N°3 (20/20)",
      "simulator": {
        "navLabel": "🔬 المختبر البصري للضوء (4 أنماط)",
        "script": "./simulators/phys-03.js"
      },
      "axes": [
        {
          "id": "p03-ax1",
          "num": "المحور 01",
          "titleAr": "حيود الضوء الأحادي اللون، الفرق الزاوي $\\theta = \\frac{\\lambda}{a}$، وعرض البقعة المركزية $L = \\frac{2\\lambda D}{a}$",
          "titleFr": "Diffraction de la lumière monochromatique",
          "status": "completed",
          "requirements": [
            "الربط بين ظاهرة حيود الضوء بشق أو خيط رفيع والطبيعة الموجية للضوء، وتقديم تبيانة التركيب التجريبي وتحديد اتجاه بقع الحيود (التعامد).",
            "معرفة وتطبيق العلاقتين $\\theta = \\frac{\\lambda}{a}$ و $\\tan\\theta \\approx \\theta = \\frac{L}{2D}$ لاستنتاج $L = \\frac{2\\lambda D}{a}$ في تقريب الزوايا الصغيرة.",
            "استغلال المنحنيات التجريبية $\\theta = f(1/a)$ أو $L = f(1/a)$ لتحديد طول الموجة $\\lambda$ أو قياس قطر خيط رفيع $d$."
          ]
        },
        {
          "id": "p03-ax2",
          "num": "المحور 02",
          "titleAr": "معامل انكسار وسط شفاف $n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda}$، حدود الطيف المرئي ($400\\text{ nm} \\le \\lambda_0 \\le 800\\text{ nm}$)، والإبراز التجريبي والتفسير النوعي لتبدد الضوء الأبيض بالموشور",
          "titleFr": "Indice de réfraction, spectre visible et dispersion qualitative par un prisme",
          "status": "completed",
          "requirements": [
            "التمييز بين الضوء الأحادي اللون (تردد ثابت لا يتبدد) والمتعدد الألوان، وتحديد حدود الطيف المرئي في الفراغ ($400\\text{ nm} \\le \\lambda_0 \\le 800\\text{ nm}$).",
            "تعريف وحساب معامل الانكسار $n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda} \\ge 1$ وإبراز ثبات التردد $\\nu$ وتناقص $v$ و $\\lambda$ داخل الوسط الشفاف.",
            "التفسير النوعي لتبدد الضوء الأبيض بالموشور بتعلق معامل الانكسار والسرعة بالتردد، مع حصر علاقات الموشور الحسابية خارج مقرر 2BAC PC."
          ]
        }
      ]
    },
    {
      "id": "phys-04",
      "num": "04",
      "unit": "الجزء 2: التحولات النووية (Nucléaire)",
      "status": "active",
      "progressText": "مكتمل (100% — المعجم والمختبر النووي والفرض 20/20)",
      "titleAr": "التناقص الإشعاعي",
      "titleFr": "Décroissance radioactive",
      "summary": "استقرار وعدم استقرار النوى، مخطط سيغري $(N,Z)$، قوانين صودي للانحفاظ، النشاط الإشعاعي $\\alpha, \\beta^-, \\beta^+, \\gamma$، وقانون التناقص $N(t) = N_0 e^{-\\lambda t}$.",
      "hasLexique": true,
      "hasExam": true,
      "examNavLabel": "📝 الفرض المحروس N°4 (20/20)",
      "simulator": {
        "navLabel": "☢️ المختبر النووي للتناقص الإشعاعي (4 أنماط)",
        "script": "./simulators/phys-04.js"
      },
      "axes": [
        {
          "id": "p04-ax1",
          "num": "المحور 01",
          "titleAr": "مخطط سيغري $(N,Z)$، قوانين صودي للانحفاظ، ومعادلات التفتتات الإشعاعية $\\alpha, \\beta^-, \\beta^+, \\gamma$",
          "titleFr": "Diagramme de Segrè et lois de conservation de Soddy",
          "status": "completed",
          "requirements": [
            "تحديد تركيب النواة $ {}_{Z}^{A}X$ والنظائر، وضبط خصائص التفتت الإشعاعي (تلقائي، عشوائي، حتمي، ومستقل عن العوامل الفيزيوكيميائية).",
            "استغلال مخطط سيغري $(N,Z)$ وتحديد مناطق عدم الاستقرار ($\\alpha, \\beta^-, \\beta^+$) مقارنة بمنطقة الاستقرار والمستقيم $N=Z$.",
            "تطبيق قانوني صودي للانحفاظ لكتابة معادلات $\\alpha, \\beta^-, \\beta^+, \\gamma$ وحساب عدد التفتتات المتتالية وتفسير نشأة $\\beta^-$ و $\\beta^+$."
          ]
        },
        {
          "id": "p04-ax2",
          "num": "المحور 02",
          "titleAr": "قانون التناقص الإشعاعي $N(t) = N_0 e^{-\\lambda t}$، ثابتة الزمن $\\tau$، عمر النصف $t_{1/2} = \\frac{\\ln 2}{\\lambda}$، والتأريخ بالنشاط $a(t)$",
          "titleFr": "Loi de décroissance radioactive, demi-vie et datation",
          "status": "completed",
          "requirements": [
            "صياغة وتطبيق قانون التناقص الإشعاعي للأنوية المتبقية والمتفتتة وللكتلة $m(t)$ وكمية المادة $n(t)$.",
            "تحديد ثابتة الزمن $\\tau = \\frac{1}{\\lambda}$ وعمر النصف $t_{1/2} = \\frac{\\ln 2}{\\lambda}$ مبيانياً وتحليلياً مع معادلة الأبعاد لوحدتيهما.",
            "توظيف النشاط الإشعاعي $a(t) = \\lambda N(t)$ بوحدة البكريل ($\\text{Bq}$ بتحويل $\\lambda$ إلى $\\text{s}^{-1}$) وتقنية التأريخ واختيار النويدة الملائمة."
          ]
        }
      ]
    },
    {
      "id": "phys-05",
      "num": "05",
      "unit": "الجزء 2: التحولات النووية (Nucléaire)",
      "status": "upcoming",
      "titleAr": "النوى والكتلة والطاقة",
      "titleFr": "Noyaux, masse et énergie",
      "summary": "علاقة تكافؤ الكتلة-الطاقة لأينشتاين $E = \\Delta m \\cdot c^2$، النقص الكتلي، طاقة الربط للنويدة $\\xi = E_l/A$، منحنى أستون، والانشطار والاندماج النووي.",
      "axes": [
        {
          "id": "p05-ax1",
          "num": "المحور 01",
          "titleAr": "النقص الكتلي $\\Delta m$، طاقة الربط للنواة $E_l = \\Delta m \\cdot c^2$، وطاقة الربط بالنسبة لنويدة $\\xi = E_l/A$ ومنحنى أستون",
          "titleFr": "Défaut de masse, énergie de liaison et courbe d’Aston"
        },
        {
          "id": "p05-ax2",
          "num": "المحور 02",
          "titleAr": "الحصيلة الطاقية لتحول نووي $\\Delta E$ وتفاعلا الانشطار والاندماج النوويين",
          "titleFr": "Bilan énergétique, fission et fusion nucléaires"
        }
      ]
    },
    {
      "id": "phys-06",
      "num": "06",
      "unit": "الجزء 3: الكهرباء (Électricité)",
      "status": "upcoming",
      "titleAr": "ثنائي القطب RC",
      "titleFr": "Dipôle RC",
      "summary": "المكثف، العلاقة $i = C \\frac{du_C}{dt}$، المعادلة التفاضلية لشحن وتفريغ مكثف، ثابتة الزمن $\\tau = RC$، والطاقة الكهربائية المخزونة $E_e = \\frac{1}{2}Cu_C^2$.",
      "axes": [
        {
          "id": "p06-ax1",
          "num": "المحور 01",
          "titleAr": "المكثف، العلاقة بين الشحنة والتوتر $q = C \\cdot u_C$، وتجميع المكثفات على التوالي والتوازي",
          "titleFr": "Le condensateur et associations de condensateurs"
        },
        {
          "id": "p06-ax2",
          "num": "المحور 02",
          "titleAr": "استجابة ثنائي القطب RC لرتبة توتر صاعدة ونازلة (المعادلة التفاضلية، الحل، وثابتة الزمن $\\tau = RC$)",
          "titleFr": "Réponse d’un dipôle RC à un échelon de tension"
        },
        {
          "id": "p06-ax3",
          "num": "المحور 03",
          "titleAr": "الطاقة الكهربائية المخزونة في المكثف $E_e = \\frac{1}{2}Cu_C^2 = \\frac{1}{2}\\frac{q^2}{C}$",
          "titleFr": "Énergie électrique emmagasinée dans un condensateur"
        }
      ]
    },
    {
      "id": "phys-07",
      "num": "07",
      "unit": "الجزء 3: الكهرباء (Électricité)",
      "status": "upcoming",
      "titleAr": "ثنائي القطب RL",
      "titleFr": "Dipôle RL",
      "summary": "الوشيعة، التوتر $u_L = r i + L \\frac{di}{dt}$، استجابة ثنائي القطب RL لرتبة توتر، ثابتة الزمن $\\tau = \\frac{L}{R_T}$، والطاقة المغنطيسية $E_m = \\frac{1}{2}Li^2$.",
      "axes": [
        {
          "id": "p07-ax1",
          "num": "المحور 01",
          "titleAr": "الوشيعة وتعبير التوتر بين مربطيها $u_L = r \\cdot i + L \\frac{di}{dt}$ وتأثيرها على التيار",
          "titleFr": "La bobine et tension à ses bornes"
        },
        {
          "id": "p07-ax2",
          "num": "المحور 02",
          "titleAr": "المعادلة التفاضلية لإقامة وانقطاع التيار، الحل، ثابتة الزمن $\\tau = \\frac{L}{R+r}$، والطاقة المغنطيسية $E_m = \\frac{1}{2}Li^2$",
          "titleFr": "Établissement et rupture du courant dans un dipôle RL"
        }
      ]
    },
    {
      "id": "phys-08",
      "num": "08",
      "unit": "الجزء 3: الكهرباء (Électricité)",
      "status": "upcoming",
      "titleAr": "الذبذبات الحرة في دارة RLC متوالية",
      "titleFr": "Oscillations libres dans un circuit RLC série",
      "summary": "أنظمة التذبذب الثلاثة، المعادلة التفاضلية للدارة المثالية LC وللدارة RLC، الدور الخاص $T_0 = 2\\pi\\sqrt{LC}$، الدراسات الطاقية، وصيانة الذبذبات.",
      "axes": [
        {
          "id": "p08-ax1",
          "num": "المحور 01",
          "titleAr": "التفريغ التذبذبي وأنظمة التذبذب الثلاثة (شبه الدوري، اللادوري، والحرج) وتأثير المقاومة الكلية",
          "titleFr": "Régimes d’oscillations libres dans un circuit RLC série"
        },
        {
          "id": "p08-ax2",
          "num": "المحور 02",
          "titleAr": "الدراسة التحليلية والطاقية للدارة المثالية LC والدور الخاص $T_0 = 2\\pi\\sqrt{LC}$",
          "titleFr": "Étude analytique et énergétique du circuit LC idéal"
        },
        {
          "id": "p08-ax3",
          "num": "المحور 03",
          "titleAr": "تبدد الطاقة بمفعول جول في دارة RLC متوالية وصيانة الذبذبات بواسطة مولد يزود الدارة بتوتر $u_G = k \\cdot i$",
          "titleFr": "Bilan énergétique et entretien des oscillations"
        }
      ]
    },
    {
      "id": "phys-09",
      "num": "09",
      "unit": "الجزء 3: الكهرباء (Électricité)",
      "status": "upcoming",
      "titleAr": "الموجات الكهرمغنطيسية وتضمين الوسع",
      "titleFr": "Ondes électromagnétiques et modulation d’amplitude",
      "summary": "نقل المعلومات بالموجات الكهرمغنطيسية، تضمين الوسع، نسبة التضمين $m = U_m/U_0$، شروط التضمين الجيد، ومراحل إزالة التضمين.",
      "axes": [
        {
          "id": "p09-ax1",
          "num": "المحور 01",
          "titleAr": "تضمين الوسع، تعبير التوتر المضمَّن، ونسبة التضمين $m$ وشروط التضمين الجيد ($m < 1$ و $F_P \\gg f_s$)",
          "titleFr": "Modulation d’amplitude et conditions d’une bonne modulation"
        },
        {
          "id": "p09-ax2",
          "num": "المحور 02",
          "titleAr": "مراحل إزالة التضمين وشرط كشف الغلاف الجيد $T_P \\ll \\tau < T_s$ ودور دارة الانتقاء LC",
          "titleFr": "Démodulation d’amplitude et détection d’enveloppe"
        }
      ]
    },
    {
      "id": "phys-10",
      "num": "10",
      "unit": "الجزء 4: الميكانيك (Mécanique)",
      "status": "upcoming",
      "titleAr": "قوانين نيوتن",
      "titleFr": "Les lois de Newton",
      "summary": "متجهة الموضع والسرعة والتسارع في معلم ديكارتي وأساس فريني، القانون الثاني لنيوتن $\\sum \\vec{F}_{ext} = m \\vec{a}_G$، والحركة المستقيمية على مستوى أفقي ومائل.",
      "axes": [
        {
          "id": "p10-ax1",
          "num": "المحور 01",
          "titleAr": "متجهة السرعة اللحظية ومتجهة التسارع في معلم ديكارتي وفي أساس فريني $(\\vec{u}, \\vec{n})$",
          "titleFr": "Vecteurs vitesse et accélération (Repère cartésien et base de Frenet)"
        },
        {
          "id": "p10-ax2",
          "num": "المحور 02",
          "titleAr": "القانون الثاني لنيوتن وتطبيقه على حركة مركز قصور جسم صلب على مستوى أفقي أو مائل مع أو بدون احتكاك",
          "titleFr": "Deuxième loi de Newton et mouvements rectilignes"
        }
      ]
    },
    {
      "id": "phys-11",
      "num": "11",
      "unit": "الجزء 4: الميكانيك (Mécanique)",
      "status": "upcoming",
      "titleAr": "تطبيقات: السقوط الرأسي لجسم صلب",
      "titleFr": "Applications : Chute verticale d’un solide",
      "summary": "السقوط الرأسي باحتكاك في مائع (دافعة أرخميدس وقوة الاحتكاك $f = kv^n$)، المعادلة التفاضلية، السرعة الحدية $v_{lim}$، طريقة أويلر، والسقوط الرأسي الحر.",
      "axes": [
        {
          "id": "p11-ax1",
          "num": "المحور 01",
          "titleAr": "السقوط الرأسي باحتكاك في مائع: المعادلة التفاضلية، التسارع البدئي $a_0$، السرعة الحدية $v_{lim}$، الزمن المميز $\\tau$، وطريقة أويلر",
          "titleFr": "Chute verticale avec frottement fluide et méthode d’Euler"
        },
        {
          "id": "p11-ax2",
          "num": "المحور 02",
          "titleAr": "السقوط الرأسي الحر والمعادلات الزمنية للحركة $v_z(t)$ و $z(t)$",
          "titleFr": "Chute verticale libre d’un solide"
        }
      ]
    },
    {
      "id": "phys-12",
      "num": "12",
      "unit": "الجزء 4: الميكانيك (Mécanique)",
      "status": "upcoming",
      "titleAr": "تطبيقات: الحركات المستوية (القذيفة، المجال المغناطيسي $\\vec{B}$، والأقمار الاصطناعية)",
      "titleFr": "Applications : Mouvements plans (Projectile, champ B et satellites)",
      "summary": "حركة قذيفة في مجال الثقالة المنتظم (المعادلات الزمنية، المسار، القمة $S$، المدى $P$)، حركة دقيقة مشحونة في مجال مغناطيسي منتظم $\\vec{B}$ والانحراف المغناطيسي $D_m$، وحركة الكواكب والأقمار الاصطناعية وقوانين كيبلر.",
      "axes": [
        {
          "id": "p12-ax1",
          "num": "المحور 01",
          "titleAr": "حركة قذيفة في مجال الثقالة المنتظم: المعادلات الزمنية، معادلة المسار $y(x)$، إحداثيات قمة المسار $S$، والمدى $P$",
          "titleFr": "Mouvement d’un projectile dans un champ de pesanteur uniforme"
        },
        {
          "id": "p12-ax2",
          "num": "المحور 02",
          "titleAr": "قوانين كيبلر الثلاثة وتطبيق القانون الثاني لنيوتن على الحركة الدائرية المنتظمة لكوكب أو قمر اصطناعي ($v$, $T$, والمدار الجيوساكن)",
          "titleFr": "Mouvement des planètes et des satellites artificiels"
        },
        {
          "id": "p12-ax3",
          "num": "المحور 03",
          "titleAr": "حركة دقيقة مشحونة في مجال مغناطيسي منتظم $\\vec{B}$: قوة لورنتز، المسار الدائري ($R = \\frac{mv_0}{|q|B}$)، والانحراف المغناطيسي $D_m$",
          "titleFr": "Particule chargée dans un champ magnétique uniforme B et déflexion magnétique"
        }
      ]
    },
    {
      "id": "phys-13",
      "num": "13",
      "unit": "الجزء 4: الميكانيك (Mécanique)",
      "status": "upcoming",
      "titleAr": "دوران جسم صلب حول محور ثابت",
      "titleFr": "Rotation d’un solide autour d’un axe fixe",
      "summary": "الأفصول الزاوي $\\theta$، السرعة الزاوية $\\omega = \\dot{\\theta}$، التسارع الزاوي $\\ddot{\\theta}$، والعلاقة الأساسية للديناميك في حالة الدوران $\\sum \\mathcal{M}_{\\Delta}(\\vec{F}_{ext}) = J_{\\Delta} \\cdot \\ddot{\\theta}$.",
      "axes": [
        {
          "id": "p13-ax1",
          "num": "المحور 01",
          "titleAr": "معادلات الحركة الدورانية والعلاقة بين المقادير الخطية والمقادير الزاوية ($s = r\\theta$, $v = r\\dot{\\theta}$, $a_T = r\\ddot{\\theta}$)",
          "titleFr": "Repérage angulaire et cinématique de rotation"
        },
        {
          "id": "p13-ax2",
          "num": "المحور 02",
          "titleAr": "العلاقة الأساسية للديناميك في حالة الدوران $\\sum \\mathcal{M}_{\\Delta} = J_{\\Delta} \\cdot \\ddot{\\theta}$ وتطبيقها على مجموعة ميكانيكية (بكرة + جسم معلق)",
          "titleFr": "Relation fondamentale de la dynamique en rotation"
        }
      ]
    },
    {
      "id": "phys-14",
      "num": "14",
      "unit": "الجزء 4: الميكانيك (Mécanique)",
      "status": "upcoming",
      "titleAr": "المجموعات الميكانيكية المتذبذبة",
      "titleFr": "Systèmes mécaniques oscillants",
      "summary": "النواس المرن، نواس اللي، النواس الوازن، والنواس البسيط، المعادلات التفاضلية، الدور الخاص $T_0$، وظاهرة الخمود والرنين الميكانيكي.",
      "axes": [
        {
          "id": "p14-ax1",
          "num": "المحور 01",
          "titleAr": "النواس المرن (الأفقي، المائل، والرأسي): قوة الارتداد $\\vec{T} = -kx\\vec{i}$، المعادلة التفاضلية، الحل الجيبي، والدور الخاص $T_0 = 2\\pi\\sqrt{\\frac{m}{k}}$",
          "titleFr": "Le pendule élastique"
        },
        {
          "id": "p14-ax2",
          "num": "المحور 02",
          "titleAr": "نواس اللي ($T_0 = 2\\pi\\sqrt{\\frac{J_{\\Delta}}{C}}$)، النواس الوازن ($T_0 = 2\\pi\\sqrt{\\frac{J_{\\Delta}}{m \\cdot g \\cdot d}}$)، والنواس البسيط في حالة الذبذبات الصغيرة",
          "titleFr": "Pendule de torsion, pendule pesant et pendule simple"
        },
        {
          "id": "p14-ax3",
          "num": "المحور 03",
          "titleAr": "خمود التذبذبات الميكانيكية وظاهرة الرنين الميكانيكي",
          "titleFr": "Amortissement et phénomène de résonance mécanique"
        }
      ]
    },
    {
      "id": "phys-15",
      "num": "15",
      "unit": "الجزء 4: الميكانيك (Mécanique)",
      "status": "upcoming",
      "titleAr": "المظاهر الطاقية للتذبذبات الميكانيكية",
      "titleFr": "Aspects énergétiques des oscillations mécaniques",
      "summary": "شغل قوة، طاقة الوضع المرنة $E_{pe} = \\frac{1}{2}kx^2$، طاقة الوضع اللي $E_{pt} = \\frac{1}{2}C\\theta^2$، طاقة الوضع الثقالية، والطاقة الميكانيكية للنواس المرن والوازن ولي.",
      "axes": [
        {
          "id": "p15-ax1",
          "num": "المحور 01",
          "titleAr": "شغل قوة الارتداد وطاقة الوضع المرنة $E_{pe} = \\frac{1}{2}kx^2 + Cte$ والدراسة الطاقية للنواس المرن",
          "titleFr": "Étude énergétique du pendule élastique"
        },
        {
          "id": "p15-ax2",
          "num": "المحور 02",
          "titleAr": "الدراسة الطاقية لنواس اللي ($E_{pt} = \\frac{1}{2}C\\theta^2$) وللنواس الوازن وانحفاظ أو عدم انحفاظ الطاقة الميكانيكية $E_m$",
          "titleFr": "Étude énergétique du pendule de torsion et du pendule pesant"
        }
      ]
    }
  ]
});
