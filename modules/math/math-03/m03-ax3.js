window.EulerAcademy.registerAxis('math-03', 'm03-ax3', `

              <div class="space-y-6">
                <!-- 1. Official Theorems: v_n = f(u_n) and u_{n+1} = f(u_n) -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. المبرهنتان الأساسيتان: نهاية $v_n = f(u_n)$ والمتتالية الترجعية $u_{n+1} = f(u_n)$</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">🔗 أ) مبرهنة نهاية متتالية من الشكل $v_n = f(u_n)$:</b>
                      إذا كانت $(u_n)$ متتالية <b>متقاربة</b> ونهايتها $\\ell \\in \\mathbb{R}$، وكانت الدالة $f$ <b>متصلة في $\\ell$</b>، فإن المتتالية المعرفة بـ $v_n = f(u_n)$ تكون متقاربة ونهايتها هي:
                      $$\\lim_{n\\to+\\infty} v_n = f(\\ell)$$
                      <span class="text-cyan-300 block mt-1.5">💡 تمتد القاعدة كذلك عند $\\pm\\infty$: إذا كانت $\\lim u_n = +\\infty$ و $\\lim_{x\\to+\\infty} f(x) = L$ فإن $\\lim f(u_n) = L$.</span>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">🎯 ب) مبرهنة تحديد نهاية $u_{n+1} = f(u_n)$ (الشروط الأربعة):</b>
                      لتحديد نهاية المتتالية الترجعية $(u_n)$ المعرفة بـ $u_{n+1} = f(u_n)$، يجب التحقق من <b>أربعة شروط إلزامية</b>:<br/>
                      1) الدالة $f$ <b>متصلة</b> على مجال $I$.<br/>
                      2) المجال $I$ <b>مستقر بـ $f$</b>، أي $f(I) \\subset I$.<br/>
                      3) الحد الأول <b>$u_0 \\in I$</b>.<br/>
                      4) المتتالية $(u_n)$ <b>متقاربة</b> (ونهايتها $\\ell$ تنتمي إلى $I$ أو تكون $f$ متصلة عند $\\ell$).<br/>
                      $\\implies$ عندئذٍ، نهايتها $\\ell = \\lim_{n\\to+\\infty} u_n$ هي حل للمعادلة:
                      $$f(\\ell) = \\ell$$
                    </div>
                  </div>

                  <div class="bg-amber-950/25 border border-amber-500/30 rounded-xl p-3.5 text-xs text-amber-100 leading-relaxed">
                    <b class="text-amber-300">🛠️ الخوارزمية القياسية في مسائل الوطني (ربط الدالة بالمتتالية):</b>
                    <b>(1)</b> نُبيّن بالترجع أن $\\forall n,\\; u_n \\in I$ باستعمال رتابة $f$ وكون $f(I) \\subset I$. &nbsp;
                    <b>(2)</b> نحدد رتابة $(u_n)$ باستعمال إشارة $f(x) - x$ على $I$ (أي الوضع النسبي لـ $(C_f)$ والمستقيم $y = x$). &nbsp;
                    <b>(3)</b> نستنتج تقارب $(u_n)$ بالتقارب الرتيب. &nbsp;
                    <b>(4)</b> نحل $f(x) = x$ و<b>نُصفي الحلول الدخيلة</b> باستعمال التأطير والرتابة!
                  </div>
                </div>

                <!-- 2. SVG Diagram: Cobweb + Fixed-Point Root Filtering -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-purple-500/15 text-purple-300 text-xs font-bold">2. التأويل المبياني للرتابة وتصفية الحلول الدخيلة لـ $f(\\ell) = \\ell$</span>
                    <span class="text-xs text-purple-400 font-mono">Toile d'araignée &amp; Filtrage de $\\ell$</span>
                  </div>

                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardCobwebSuite">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📊 القراءة الهندسية لتقارب $u_{n+1} = f(u_n)$ عبر تقاطع $(C_f)$ والمستقيم $(\\Delta): y = x$</span>
                      <span class="text-[11px] font-mono text-emerald-400">Position relative Cf vs y = x</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 230" class="w-full h-auto">
                        <!-- Left Panel: Monotone Cobweb convergence -->
                        <rect x="16" y="16" width="314" height="198" rx="12" fill="rgba(34,211,238,0.04)" stroke="#1e293b" stroke-width="1.3"/>
                        <text x="173" y="36" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1. Escalier sur Cf &gt; y = x (Croissante)</text>
                        <line x1="42" y1="184" x2="306" y2="184" stroke="#475569" stroke-width="1.3"/>
                        <line x1="56" y1="194" x2="56" y2="50" stroke="#475569" stroke-width="1.3"/>
                        <!-- Line y = x: (56, 184) to (200, 40) -->
                        <line x1="56" y1="184" x2="290" y2="48" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,3"/>
                        <text x="275" y="66" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="end">y=x</text>
                        <!-- Curve Cf above y=x from x=56..230 intersecting y=x at (230, 83) -->
                        <path d="M 56 142 C 110 100, 175 88, 286 68" fill="none" stroke="#22d3ee" stroke-width="2.6"/>
                        <text x="292" y="84" fill="#67e8f9" font-size="10" font-weight="bold" font-family="monospace" text-anchor="end">Cf</text>
                        <!-- Cobweb staircase from u0=80: y_Cf(80)~126 -> y=x at x~155 -> y_Cf(155)~95 -> y=x at x~209 -> l=(230,83) -->
                        <polyline points="80,184 80,126 155,126 155,95 209,95 209,85" fill="none" stroke="#fbbf24" stroke-width="1.6"/>
                        <circle cx="230" cy="83" r="4.5" fill="#34d399"/>
                        <line x1="230" y1="83" x2="230" y2="184" stroke="#34d399" stroke-width="1.2" stroke-dasharray="3,3"/>
                        <text x="80" y="200" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">u0</text>
                        <text x="155" y="200" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">u1</text>
                        <text x="230" y="200" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">l</text>

                        <!-- Right Panel: Two fixed points & Filtering -->
                        <rect x="350" y="16" width="314" height="198" rx="12" fill="rgba(16,185,129,0.04)" stroke="#1e293b" stroke-width="1.3"/>
                        <text x="507" y="36" fill="#6ee7b7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">2. Filtrage : rejeter alpha2 hors de I</text>
                        <line x1="376" y1="184" x2="646" y2="184" stroke="#475569" stroke-width="1.3"/>
                        <line x1="390" y1="194" x2="390" y2="50" stroke="#475569" stroke-width="1.3"/>
                        <!-- Highlight stable interval [alpha1=430, u0=505] in emerald -->
                        <rect x="430" y="54" width="75" height="130" fill="rgba(16,185,129,0.10)"/>
                        <!-- y=x line -->
                        <line x1="390" y1="184" x2="630" y2="50" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,3"/>
                        <!-- Convex quadratic Cf crossing y=x at alpha1(430,162) and alpha2(590,72) -->
                        <path d="M 398 178 C 460 154, 540 120, 622 48" fill="none" stroke="#c084fc" stroke-width="2.6"/>
                        <circle cx="430" cy="162" r="4.5" fill="#34d399"/>
                        <circle cx="590" cy="72" r="4.5" fill="#fb7185"/>
                        <line x1="430" y1="162" x2="430" y2="184" stroke="#34d399" stroke-width="1.2" stroke-dasharray="3,2"/>
                        <line x1="590" y1="72" x2="590" y2="184" stroke="#fb7185" stroke-width="1.2" stroke-dasharray="3,2"/>
                        <text x="430" y="200" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">a1 (OK)</text>
                        <text x="505" y="200" fill="#cbd5e1" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">u0</text>
                        <text x="590" y="200" fill="#fda4af" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">a2 (Rejete)</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 3. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">شروط $f(\\ell)=\\ell$ لا تقبل التهاون</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «تطبيق $f(\\ell) = \\ell$ على متتالية لم يثبت تقاربها»:</b>
                      حل المعادلة $f(\\ell)=\\ell$ لا يبرهن على تقارب $(u_n)$! مثلاً $u_{n+1} = 2u_n - 1$ مع $u_0 = 2$ تعطينا $u_n = 2^n + 1 \\to +\\infty$، فالمتتالية متباعدة تماماً رغم وجود حل وحيد $\\ell = 1$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «ترك حلين مقبولين للمعادلة $f(\\ell) = \\ell$ دون حسم»:</b>
                      إذا وجدت حلين $\\alpha_1 &lt; \\alpha_2$، تفحّص أولاً <b>مجال التأطير</b> (هل $\\alpha_2 \\notin I$؟) ثم تفحّص <b>منحى الرتابة</b>: إذا كانت $(u_n)$ تناقصية فـ $\\ell \\le u_0$، وإذا كانت تزايدية فـ $\\ell \\ge u_0$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «الخلط بين تزايدية الدالة $f$ ورتابة المتتالية $(u_n)$»:</b>
                      تزايدية $f$ على $I$ تخدم فقط الترجع ($a \\le u_n \\le b \\implies f(a) \\le u_{n+1} \\le f(b)$)، لكنها <b>لا تعني أبداً أن $(u_n)$ تزايدية</b>! الرتابة تتبع <b>إشارة $f(x) - x$</b> فقط!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «عدم التحقق من انتماء النهاية في المجالات المفتوحة»:</b>
                      إذا برهنت فقط على $u_n \\in ]a, b[$ (مفتوح)، تذكّر أن تمرير المتفاوتة للنهاية يُغلق المجال: $\\ell \\in [a, b]$؛ ولذلك تأكّد أن $f$ متصلة عند الحدين $a$ و $b$ أيضاً!
                    </div>
                  </div>
                </div>

                <!-- 4. Worked National-Grade Applications -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">3. تطبيقان نموذجيان محرران بسلم التنقيط (معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400 font-mono">المنهجية الكاملة 20/20</span>
                  </div>

                  <!-- Application 1 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800 mb-5">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: متتالية مرتبطة بدالة $f(x) = \\frac{1}{4}(x^2 + 3)$ وتصفية الحل الدخيل</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نعتبر الدالة $f$ المعرفة على $\\mathbb{R}$ بـ $f(x) = \\frac{x^2 + 3}{4}$ والمتتالية $(u_n)_{n\\in\\mathbb{N}}$ المعرفة بـ $u_0 = 2$ و $u_{n+1} = f(u_n)$.<br/>
                      <b>1.</b> ادرس تغيرات $f$ على المجال $I = [1, 2]$ واستنتج أن $f(I) \\subset I$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> بيّن بالترجع أن: $\\forall n \\in \\mathbb{N},\\; 1 \\le u_n \\le 2$. <span class="text-emerald-400 font-mono">(0.40 ن)</span><br/>
                      <b>3.</b> ادرس إشارة $f(x) - x$ على $I$ واستنتج رتابة $(u_n)$ وتقاربها. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>4.</b> حدّد $\\lim_{n\\to+\\infty} u_n$ مع تبرير جميع الشروط وإقصاء الحل المرفوض. <span class="text-emerald-400 font-mono">(0.60 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. تغيرات $f$ واستقرار $I = [1, 2]$:</b><br/>
                      $f$ دالة حدودية، إذن متصلة وقابلة للاشتقاق على $I$ ولدينا $f'(x) = \\frac{x}{2} &gt; 0$ على $[1, 2]$. ومنه $f$ تزايدية قطعاً على $[1, 2]$، وبالتالي:
                      $$f([1, 2]) = [f(1), f(2)] = \\left[1, \\frac{7}{4}\\right] \\subset [1, 2]$$
                      <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2. البرهان بالترجع على $1 \\le u_n \\le 2$:</b><br/>
                      • من أجل $n = 0$: $u_0 = 2 \\in [1, 2]$.<br/>
                      • نفترض أن $1 \\le u_n \\le 2$. وبما أن $f$ تزايدية على $[1, 2]$ فإن $f(1) \\le f(u_n) \\le f(2)$ أي $1 \\le u_{n+1} \\le \\frac{7}{4} \\le 2$. حسب الترجع، $\\forall n \\in \\mathbb{N},\\; 1 \\le u_n \\le 2$. <span class="text-emerald-400 font-mono">(0.40 ن)</span></p>
                      <p><b>3. الرتابة والتقارب:</b><br/>
                      لكل $x \\in [1, 2]$: $f(x) - x = \\frac{x^2 - 4x + 3}{4} = \\frac{(x - 1)(x - 3)}{4} \\le 0$ (لأن $x - 1 \\ge 0$ و $x - 3 &lt; 0$).<br/>
                      بتعويض $x = u_n \\in [1, 2]$ نجد $u_{n+1} - u_n = f(u_n) - u_n \\le 0$، إذن $(u_n)$ <b>تناقصية</b>؛ وبما أنها مصغورة بـ $1$ فهي <b>متقاربة</b>. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>4. حساب النهاية $\\ell$ وتصفية الحلول:</b><br/>
                      بما أن: (أ) $f$ متصلة على $[1, 2]$، (ب) $f([1, 2]) \\subset [1, 2]$، (ج) $u_0 = 2 \\in [1, 2]$، (د) $(u_n)$ متقاربة؛ فإن نهايتها $\\ell \\in [1, 2]$ وتحقق:
                      $$f(\\ell) = \\ell \\iff \\frac{(\\ell - 1)(\\ell - 3)}{4} = 0$$
                      أي $\\ell = 1$ أو $\\ell = 3$.<br/>
                      وبما أن $\\ell \\in [1, 2]$ (أو لأنها تناقصية فـ $\\ell \\le u_0 = 2$)، فإن الحل $3$ مرفوض تماماً، ومنه <b>$\\lim_{n\\to+\\infty} u_n = 1$</b>! <span class="text-emerald-400 font-mono">(0.60 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: نهاية مركب متتالية ودالة متصلة $v_n = g(u_n)$ و $w_n = h(u_n)$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نعتبر المتتالية $u_n = \\frac{3^{n+1} - 1}{3^n + 2}$، ونعرف المتتاليتين: $v_n = \\sqrt[3]{u_n^2 - 1}$ و $w_n = \\cos\\left(\\frac{\\pi}{u_n}\\right)$ (لـ $n \\ge 1$).<br/>
                      <b>1.</b> احسب $\\lim_{n\\to+\\infty} u_n$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> استنتج نهايتي المتتاليتين $(v_n)$ و $(w_n)$ باستعمال مبرهنة نهاية مركب دالة متصلة ومتتالية متقاربة. <span class="text-emerald-400 font-mono">(1.00 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. حساب $\\lim_{n\\to+\\infty} u_n$:</b><br/>
                      نعمّل بـ $3^n$:
                      $$u_n = \\frac{3 - \\left(\\frac{1}{3}\\right)^n}{1 + 2\\left(\\frac{1}{3}\\right)^n} \\xrightarrow[n\\to+\\infty]{} \\frac{3 - 0}{1 + 0} = 3$$
                      <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2. نهايتا $(v_n)$ و $(w_n)$:</b><br/>
                      • الدالة $g(x) = \\sqrt[3]{x^2 - 1}$ متصلة على $]-\\infty, -1] \\cup [1, +\\infty[$ وبخاصة متصلة عند $\\ell = 3$ (لأن $3^2 - 1 = 8 \\ge 0$)؛ وبما أن $(u_n)$ متقاربة نحو $3$ فإن:
                      $$\\lim_{n\\to+\\infty} v_n = g(3) = \\sqrt[3]{3^2 - 1} = \\sqrt[3]{8} = 2$$
                      • الدالة $h(x) = \\cos\\left(\\frac{\\pi}{x}\\right)$ متصلة على $\\mathbb{R}^*$ وبخاصة عند $\\ell = 3$، ومنه:
                      $$\\lim_{n\\to+\\infty} w_n = h(3) = \\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$$
                      <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 5. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">توظيف المتتالية الترجعية لحساب $\\sqrt{2}$</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    لتكن $f(x) = \\frac{1}{2}\\left(x + \\frac{2}{x}\\right)$ على $I = [\\sqrt{2}, 2]$، ونعرف $(u_n)$ بـ $u_0 = 2$ و $u_{n+1} = f(u_n)$.<br/>
                    1) تحقّق أن $f$ متصلة وتزايدية على $I$ وأن $f(I) \\subset I$.<br/>
                    2) بيّن بالترجع أن $u_n \\in [\\sqrt{2}, 2]$، ثم أثبت أن $(u_n)$ تناقصية واستنتج نهايتها!
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. استقرار $I = [\\sqrt{2}, 2]$:</b><br/>
                      $f$ متصلة وقابلة للاشتقاق على $I$ ولدينا $f'(x) = \\frac{1}{2}\\left(1 - \\frac{2}{x^2}\\right) = \\frac{x^2 - 2}{2x^2} \\ge 0$ على $I$. إذن $f$ تزايدية و $f([\\sqrt{2}, 2]) = [f(\\sqrt{2}), f(2)] = [\\sqrt{2}, \\frac{3}{2}] \\subset [\\sqrt{2}, 2]$.</p>
                      <p><b>2. الترجع والرتابة والنهاية:</b><br/>
                      • بالترجع ($u_0 = 2 \\in I$ و $f(I) \\subset I$): $\\forall n \\in \\mathbb{N},\\; \\sqrt{2} \\le u_n \\le 2$.<br/>
                      • الرتابة: $u_{n+1} - u_n = \\frac{1}{2}\\left(u_n + \\frac{2}{u_n}\\right) - u_n = \\frac{2 - u_n^2}{2\\,u_n} \\le 0$ لأن $u_n \\ge \\sqrt{2} \\implies u_n^2 \\ge 2$. إذن $(u_n)$ تناقصية ومصغورة بـ $\\sqrt{2}$ فهي متقاربة نحو $\\ell \\in [\\sqrt{2}, 2]$.<br/>
                      • بحل $f(\\ell) = \\ell \\iff \\ell^2 = 2 \\iff \\ell = \\sqrt{2}$ أو $\\ell = -\\sqrt{2}$. ولأن $\\ell \\in [\\sqrt{2}, 2]$، فإن <b>$\\lim_{n\\to+\\infty} u_n = \\sqrt{2}$</b>.</p>
                    </div>
                  </details>
                </div>
              </div>

`);
