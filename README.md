# 🎓 أكاديمية أويلر للعلوم الدقيقة — Euler Academy (2BAC PC Maroc)

<div align="center">

[![Live Platform](https://img.shields.io/badge/Live%20Platform-GitHub%20Pages-06b6d4?style=for-the-badge&logo=github)](https://eulerx0.github.io/euler-academy/)
[![Track](https://img.shields.io/badge/2BAC%20PC-Sciences%20Physiques-10b981?style=for-the-badge)](https://eulerx0.github.io/euler-academy/)
[![KaTeX](https://img.shields.io/badge/Math%20Engine-KaTeX%200.16-3b82f6?style=for-the-badge)](https://katex.org/)
[![Canvas 60fps](https://img.shields.io/badge/Interactive%20Labs-HTML5%20Canvas%2060fps-f59e0b?style=for-the-badge)](https://eulerx0.github.io/euler-academy/)
[![Android APK](https://img.shields.io/badge/Android%20App-Download%20APK-10b981?style=for-the-badge&logo=android)](https://github.com/eulerx0/euler-academy-android/releases/latest)

**المنصة التفاعلية الشاملة للرياضيات والفيزياء والكيمياء — السنة الثانية باكالوريا مسلك العلوم الفيزيائية (المغرب)**  
*Interactive Moroccan 2BAC PC STEM Learning Hub — Rigorous Proofs, 60fps Simulations & National-Exam Assessments*

🌐 **[افتح المنصة مباشرة / Launch Live App](https://eulerx0.github.io/euler-academy/)**

</div>

---

## ✨ الرؤية والمعايير الأكاديمية

تُبنى **أكاديمية أويلر (Euler Academy)** كبيئة تعليمية وبصرية دقيقة لطلبة **الثانية باكالوريا — مسلك العلوم الفيزيائية (2BAC PC — Option Sciences Physiques)**، مع التزام صارم بحدود **البرنامج الرسمي لوزارة التربية الوطنية** و**الأطر المرجعية للامتحان الوطني الموحد (Cadre de Référence 2014)**.

- **🎯 التزام صارم بمسلك 2BAC PC فقط:** تغطية شاملة لكل القدرات المنتظرة والمهارات الرسمية، مع استبعاد تام للفقرات الخاصة بمسلك العلوم الرياضية (SM) أو مسلك SVT (مثل $\arcsin/\arccos/\arctan$، مبرهنة رول و TAF، علاقات الموشور الحسابية، التذبذبات القسرية، والمجال الكهرساكن $\vec{E}$).
- **📐 صرامة البرهان وانعدام الخصم:** كل محور يجمع بين التنظير المنهجي المضبوط بـ **KaTeX**، والرسوم المتجهية **SVG**، وركن **الفخاخ الكلاسيكية في الوطني**، وتطبيقات نموذجية بسلم التنقيط الرسمي، وتحدٍ ذاتي تفاعلي.
- **🔬 مختبرات بصرية بـ 60fps (`simulators/`):** محاكيات تفاعلية مبنية عبر **HTML5 Canvas** تتيح للتلميذ تجربة الدوال، الاتصال، التفرع الثنائي، المماسات والتقعر، الموجات الميكانيكية، التوافق في الطور، والسرعة الحجمية للتفاعلات لحظياً.
- **📖 معجم ثنائي اللغة (`lexique.js`) لكل درس:** مصطلحات علمية معيارية بالعربية والفرنسية لتسهيل الانتقال إلى التعليم العالي والامتحانات باللغتين.
- **📝 فروض محروسة بمقياس 20/20 (`exam.js`):** مواضيع شاملة بمعيار الامتحان الوطني مع حلول برهانية كاملة قابلة للطي والإظهار دفعة واحدة (`#btnToggleAllSolutions`).
- **📱 تصميم متجاوب ودعم الطباعة:** واجهة RTL عالية التباين بـ Tailwind CSS تعمل بسلاسة على الحاسوب (`1440px`) والهاتف (`375px`) مع تنسيق طباعة مخصص (`@media print`).

---

## 📚 هيكل المنهاج المغطى (37 درساً رسمياً — 91 محوراً)

| المادة | عدد الدروس | الوحدات / المجالات الرئيسية | المسار |
| :--- | :---: | :--- | :--- |
| **📐 الرياضيات (`Mathématiques`)** | **12 درساً** | التحليل (النهايات والاتصال، الاشتقاق، المتتاليات، الأصلية، اللوغاريتم، الأسية، المعادلات التفاضلية، التكامل) • الأعداد العقدية • الهندسة الفضائية • الاحتمالات | [math.js](./data/math.js) |
| **⚛️ الفيزياء (`Physique`)** | **15 درساً** | الموجات الميكانيكية والضوئية • التحولات النووية • الكهرباء (RC, RL, RLC، تضمين الوسع AM) • الميكانيك (نيوتن، السقوط، القذيفة، المجال B، الأقمار، الدوران، المتذبذبات والطاقة) | [physics.js](./data/physics.js) |
| **🧪 الكيمياء (`Chimie`)** | **10 دروس** | الحركية والتتبع الزمني • التفاعلات غير الكلية والتوازن والأحماض-قواعد • التطور التلقائي والأعمدة والتحليل الكهربائي • الأسترة والحلمأة والتحكم والتصبن | [chemistry.js](./data/chemistry.js) |

<!-- EULER_LIVE_PROGRESS_START -->
### الدروس المفعّلة والمكتملة حالياً

> 📊 **التقدم المباشر:** `22 / 91` محوراً مكتملة (**24%**) • **7 / 37** دروس مفتوحة • 🧪 **7** مختبرات تفاعلية • 📝 **7** فروض محروسة (20/20)

| المادة | الدرس | المحاور | المعجم | المختبر 60fps | الفرض 20/20 | رابط مباشر |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| 📐 الرياضيات | **01. الاتصال ونهايات دالة عددية** | `5 / 5` ✅ | ✅ | ✅ | ✅ | [فتح الدرس](https://eulerx0.github.io/euler-academy/#/lesson/math-01) |
| 📐 الرياضيات | **02. الاشتقاق ودراسة الدوال العددية** | `4 / 4` ✅ | ✅ | ✅ | ✅ | [فتح الدرس](https://eulerx0.github.io/euler-academy/#/lesson/math-02) |
| 📐 الرياضيات | **03. المتتاليات العددية** | `3 / 3` ✅ | ✅ | ✅ | ✅ | [فتح الدرس](https://eulerx0.github.io/euler-academy/#/lesson/math-03) |
| ⚛️ الفيزياء | **01. الموجات الميكانيكية المتوالية** | `3 / 3` ✅ | ✅ | ✅ | ✅ | [فتح الدرس](https://eulerx0.github.io/euler-academy/#/lesson/phys-01) |
| ⚛️ الفيزياء | **02. الموجات الميكانيكية المتوالية الدورية** | `3 / 3` ✅ | ✅ | ✅ | ✅ | [فتح الدرس](https://eulerx0.github.io/euler-academy/#/lesson/phys-02) |
| 🧪 الكيمياء | **01. التحولات السريعة والتحولات البطيئة** | `2 / 2` ✅ | ✅ | ✅ | ✅ | [فتح الدرس](https://eulerx0.github.io/euler-academy/#/lesson/chem-01) |
| 🧪 الكيمياء | **02. التتبع الزمني لتحول كيميائي — سرعة التفاعل** | `2 / 2` ✅ | ✅ | ✅ | ✅ | [فتح الدرس](https://eulerx0.github.io/euler-academy/#/lesson/chem-02) |
<!-- EULER_LIVE_PROGRESS_END -->

---

## 🏗️ البنية التقنية للمشروع

```text
euler-academy/
├── index.html                  # الواجهة الرئيسية (0 روابط CDN خارجية — 100% Offline)
├── icon.svg                    # الأيقونة المتجهية للمنصة والتطبيق
├── manifest.webmanifest        # إعدادات التثبيت كتطبيق (PWA)
├── sw.js                       # Service Worker باستراتيجية Network-First للعمل Offline
├── .nojekyll                   # تفعيل النشر المباشر للملفات الساكنة على GitHub Pages
├── css/
│   └── styles.css              # تنسيقات RTL، Glassmorphism، وأنماط الطباعة
├── vendor/
│   ├── tailwindcss.js          # محرك Tailwind CSS المحلي
│   ├── fonts/                  # خطوط Cairo و Inter محلياً (.woff2)
│   └── katex/                  # مكتبة KaTeX 0.16.9 مع خطوط الرياضيات كاملة
├── data/
│   ├── math.js                 # سجل دروس ومحاور الرياضيات (12 درساً)
│   ├── physics.js              # سجل دروس ومحاور الفيزياء (15 درساً)
│   └── chemistry.js            # سجل دروس ومحاور الكيمياء (10 دروس)
├── js/
│   ├── core.js                 # نواة التسجيل، التحميل الكسول (Lazy Loader)، ومحرك KaTeX
│   ├── canvasUtils.js          # محرك الرسم التفاعلي عالي الدقة على HTML5 Canvas
│   ├── catalog.js              # لوحة التقدم الشاملة، البحث، وتصفية الدروس
│   ├── lessonView.js           # فضاء الدرس، المعجم، شريط التنقل، والتحكم بالحلول
│   └── router.js               # موجه الروابط (#/math, #/lesson/<id>)
├── modules/
│   ├── math/<lessonId>/        # وحدات المحاور، المعجم (lexique.js)، والفرض (exam.js)
│   ├── physics/<lessonId>/     # وحدات محاور الفيزياء ومعاجمها وفروضها
│   └── chemistry/<lessonId>/   # وحدات محاور الكيمياء ومعاجمها وفروضها
├── simulators/                 # مختبرات HTML5 Canvas التفاعلية (60fps)
└── tools/
    ├── audit.js                # أداة التدقيق الشامل (فحص ساكن + Playwright + Offline)
    ├── build_offline.js        # مولّد الحزمة المستقلة (SingleFile.html + Offline.zip)
    └── sync_readme.js          # محدث جدول التقدم التلقائي في README
```

---

## 🛠️ التشغيل المحلي، العمل بدون إنترنت (Offline)، والتدقيق الجودة (QA)

يعمل المشروع بملفات ساكنة صافية (**Zero Build Step** و**Zero External CDN Dependencies**) — جميع مكتبات `Tailwind CSS` و`KaTeX 0.16.9` وخطوط `Cairo` و`Inter` مضمّنة محلياً داخل `vendor/` لضمان تطابق بصري ورياضي بنسبة **100%** حتى عند انقطاع الإنترنت:

### 📥 خيارات الدراسة بدون إنترنت (Offline)
1. **📱 ملف واحد فوري للهاتف والحاسوب (`Euler-Academy-SingleFile.html`):**  
   متاح دائماً في [أحدث إصدار (Releases)](https://github.com/eulerx0/euler-academy/releases/tag/offline-latest) — يُحدَّث تلقائياً مع كل درس جديد، ويفتح مباشرة في أي متصفح دون فك ضغط أو إنترنت.
2. **💻 الحزمة المضغوطة (`Euler-Academy-Offline.zip`):**  
   فك الضغط ثم افتح `index.html` مباشرة في متصفحك.
3. **📲 التثبيت كتطبيق (PWA):**  
   عند زيارة [الموقع الحي](https://eulerx0.github.io/euler-academy/) يمكنك تثبيته عبر المتصفح (*Install App / Add to Home Screen*) للعمل تلقائياً بلا إنترنت مع تحديث فوري عند عودة الاتصال (`Network-First Service Worker`).
4. **🤖 تطبيق أندرويد الأصلي (`Euler Academy APK`):**  
   متوفر كتطبيق أندرويد مخصص للهاتف يعمل **100% أوفلاين** مع تحديث تلقائي للدروس (`OTA`) في [euler-academy-android](https://github.com/eulerx0/euler-academy-android/releases/latest).

### 🧪 التشغيل والتدقيق للمطورين

```bash
# 1. تشغيل خادم محلي للمعاينة
python3 -m http.server 8080

# 2. تشغيل الفحص الساكن (سلامة JS، توازن صيغ KaTeX، وفحص المراجع)
node tools/audit.js

# 3. تشغيل فحص المتصفح الشامل (1440px + 375px + وضع Offline عبر file://)
node tools/audit.js --browser

# 4. بناء حزمتي العمل بدون إنترنت محلياً داخل dist/
node tools/build_offline.js
```

---

<div align="center">
  <sub>صُمم وطُوّر بعناية لطلبة البكالوريا المغربية (2BAC PC) • <a href="https://eulerx0.github.io/euler-academy/">eulerx0.github.io/euler-academy</a></sub>
</div>
