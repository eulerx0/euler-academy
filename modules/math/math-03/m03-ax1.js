window.EulerAcademy.registerAxis('math-03', 'm03-ax1', `

              <div class="space-y-6">
                <!-- 1. Proof by Induction & Bounded Sequences -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. البرهان بالترجع والمتتاليات المكبورة والمصغورة والمحدودة</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">🔁 أ) منهجية البرهان بالترجع (Raisonnement par récurrence):</b>
                      لإثبات صحة عبارة $P(n)$ لجميع الأعداد الصحيحة الطبيعية $n \\ge n_0$، نلتزم بالبنية الثلاثية الصارمة:<br/>
                      1) <b>التحقق البدئي (Initialisation):</b> نتحقق صراحةً من صحة العبارة من أجل الرتبة الأولى $n = n_0$.<br/>
                      2) <b>افتراض الترجع (Hérédité):</b> نفترض «ليكن $n \\ge n_0$ بحيث $P(n)$ صحيحة» (احذر: لا تقل لجميع $n$!).<br/>
                      3) <b>البرهان لـ $n+1$ والاستنتاج:</b> نُظهر أن $P(n+1)$ صحيحة، ثم نختم: «وحسب مبدأ الترجع، $\\forall n \\ge n_0,\\; P(n)$ صحيحة».
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">🧱 ب) المتتالية المكبورة والمصغورة والمحدودة:</b>
                      لتكن $(u_n)_{n \\ge n_0}$ متتالية عددية:<br/>
                      • <b>مكبورة (Majorée):</b> $\\exists M \\in \\mathbb{R},\\; \\forall n \\ge n_0,\\; u_n \\le M$.<br/>
                      • <b>مصغورة (Minorée):</b> $\\exists m \\in \\mathbb{R},\\; \\forall n \\ge n_0,\\; u_n \\ge m$.<br/>
                      • <b>محدودة (Bornée):</b> مكبورة ومصغورة معاً، أي:
                      $$\\exists (m, M) \\in \\mathbb{R}^2,\\; \\forall n \\ge n_0,\\; m \\le u_n \\le M$$
                      <span class="text-slate-300">(أو بتعبير مكافئ: $\\exists A &gt; 0,\\; \\forall n \\ge n_0,\\; |u_n| \\le A$).</span>
                    </div>
                  </div>

                  <div class="bg-slate-950/90 border border-amber-500/30 rounded-xl p-4 text-xs text-slate-200 leading-relaxed">
                    <b class="text-amber-300 block mb-1">💡 كيف نُبرهن أن $u_{n+1} - \\alpha &gt; 0$ في الترجع بأقل جهد؟</b>
                    في المتتاليات الكسرية أو اللاجذرية، لا تحاول إثبات $u_{n+1} &gt; \\alpha$ بمتفاوتات منفصلة على البسط والمقام! بل احسب دائماً الفرق <b>$u_{n+1} - \\alpha$</b> أولاً، ووحّد المقام (أو استعمل المرافق) ليبقى <b>$(u_n - \\alpha)$ عاملاً ظاهراً</b>؛ وبذلك يتضح أن إشارته موجبة أو سالبة فورياً من افتراض الترجع!
                  </div>
                </div>

                <!-- 2. Monotonicity & Auxiliary Sequences (Arithmetic / Geometric / Homographic) -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-purple-500/15 text-purple-300 text-xs font-bold">2. رتابة متتالية والمتتاليات المساعدة (الحسابية والهندسية والمتخاطة)</span>
                    <span class="text-xs text-purple-400 font-mono">Monotonie &amp; Suites auxiliaires</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-purple-500/30">
                      <b class="text-purple-400 text-sm block mb-1.5">📈 أ) تقنيات دراسة رتابة متتالية $(u_n)$:</b>
                      1) <b>الطريقة المرجعية (الفرق):</b> نحسب إشارة $u_{n+1} - u_n$:<br/>
                      &nbsp;&nbsp;• $u_{n+1} - u_n \\ge 0$ $\\implies$ $(u_n)$ <b>تزايدية</b>.<br/>
                      &nbsp;&nbsp;• $u_{n+1} - u_n \\le 0$ $\\implies$ $(u_n)$ <b>تناقصية</b>.<br/>
                      2) <b>توظيف الدالة $f(x) - x$:</b> لـ $u_{n+1} = f(u_n)$، نكتب $u_{n+1} - u_n = f(u_n) - u_n$ ونستغل جدول إشارة $f(x) - x$ على المجال الذي ينتمي إليه $u_n$!<br/>
                      3) <b>النسبة (فقط إذا $u_n &gt; 0$):</b> نقارن $\\frac{u_{n+1}}{u_n}$ بالعدد $1$.
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">💎 ب) دستور المتتاليات الحسابية والهندسية والمساعدة:</b>
                      • <b>حسابية ($v_{n+1} - v_n = r$):</b> $v_n = v_p + (n - p)r$، والمجموع $S = \\frac{(n - p + 1)(v_p + v_n)}{2}$.<br/>
                      • <b>هندسية ($v_{n+1} = q \\cdot v_n$):</b> $v_n = v_p \\cdot q^{n - p}$، والمجموع لـ $q \\neq 1$: $S = v_p \\frac{1 - q^{n - p + 1}}{1 - q}$.<br/>
                      • <b>المتتالية التآلفية $u_{n+1} = a u_n + b$ ($a \\neq 1$):</b> نضع $v_n = u_n - \\alpha$ حيث $a\\alpha + b = \\alpha$.<br/>
                      • <b>المتتالية المتخاطة $u_{n+1} = \\frac{a u_n + b}{c u_n + d}$:</b> إذا كان لـ $f(x)=x$ حلان $\\alpha \\neq \\beta$ فالمساعدة $v_n = \\frac{u_n - \\alpha}{u_n - \\beta}$ هندسية؛ وإذا كان حل وحيد $\\alpha$ فـ $v_n = \\frac{1}{u_n - \\alpha}$ <b>حسابية</b>!
                    </div>
                  </div>

                  <!-- Auxiliary Sequences 3-Case Reference Matrix -->
                  <div class="overflow-x-auto mb-4">
                    <table class="w-full text-xs text-right border-collapse border border-slate-800 rounded-xl overflow-hidden">
                      <thead class="bg-slate-950 text-slate-300">
                        <tr>
                          <th class="p-2.5 border border-slate-800">صيغة الترجع $u_{n+1}$</th>
                          <th class="p-2.5 border border-slate-800">حالة المعادلة $f(x)=x$</th>
                          <th class="p-2.5 border border-slate-800">المتتالية المساعدة $v_n$</th>
                          <th class="p-2.5 border border-slate-800">النتيجة واستخراج $u_n$</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-800/80 text-slate-200">
                        <tr>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$u_{n+1} = a\\,u_n + b$ ($a \\neq 1$)</td>
                          <td class="p-2.5 border border-slate-800">حل وحيد $\\alpha = \\frac{b}{1 - a}$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$v_n = u_n - \\alpha$</td>
                          <td class="p-2.5 border border-slate-800">هندسية أساسها $q = a$؛ ومنه $u_n = \\alpha + v_0\\,a^n$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$u_{n+1} = \\frac{a\\,u_n + b}{c\\,u_n + d}$ ($c \\neq 0$)</td>
                          <td class="p-2.5 border border-slate-800">حلان متمايزان $\\alpha \\neq \\beta$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$v_n = \\frac{u_n - \\alpha}{u_n - \\beta}$</td>
                          <td class="p-2.5 border border-slate-800">هندسية أساسها $q$؛ ومنه $u_n = \\frac{\\alpha - \\beta\\,v_n}{1 - v_n}$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$u_{n+1} = \\frac{a\\,u_n + b}{c\\,u_n + d}$ ($c \\neq 0$)</td>
                          <td class="p-2.5 border border-slate-800">حل مزدوج وحيد $\\alpha$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$v_n = \\frac{1}{u_n - \\alpha}$</td>
                          <td class="p-2.5 border border-slate-800">حسابية أساسها $r$؛ ومنه $u_n = \\alpha + \\frac{1}{v_n}$</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <!-- SVG Diagram: Monotone Bounded vs Bounded Non-Monotone -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardSuiteBoundsMonotonicity">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📊 تمثيل مبياني متقطع $(n, u_n)$: رتيبة ومكبورة مقابل محدودة غير رتيبة</span>
                      <span class="text-[11px] font-mono text-cyan-400">Suite croissante majorée vs oscillante bornée</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 215" class="w-full h-auto">
                        <!-- Left Panel: Increasing bounded above -->
                        <rect x="16" y="16" width="314" height="184" rx="12" fill="rgba(52,211,153,0.04)" stroke="#1e293b" stroke-width="1.3"/>
                        <text x="173" y="36" fill="#6ee7b7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1) Croissante et Majoree par M</text>
                        <line x1="42" y1="168" x2="310" y2="168" stroke="#475569" stroke-width="1.4"/>
                        <line x1="48" y1="176" x2="48" y2="54" stroke="#475569" stroke-width="1.4"/>
                        <line x1="48" y1="68" x2="305" y2="68" stroke="#fb7185" stroke-width="1.4" stroke-dasharray="5,4"/>
                        <text x="42" y="72" fill="#fda4af" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">M</text>
                        <line x1="48" y1="84" x2="305" y2="84" stroke="#22d3ee" stroke-width="1.2" stroke-dasharray="3,3"/>
                        <text x="42" y="88" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">l</text>
                        <!-- Discrete points climbing to l (y=84) -->
                        <circle cx="65" cy="154" r="4" fill="#34d399"/>
                        <circle cx="95" cy="130" r="4" fill="#34d399"/>
                        <circle cx="125" cy="112" r="4" fill="#34d399"/>
                        <circle cx="155" cy="100" r="4" fill="#34d399"/>
                        <circle cx="185" cy="93" r="4" fill="#34d399"/>
                        <circle cx="215" cy="89" r="4" fill="#34d399"/>
                        <circle cx="245" cy="87" r="4" fill="#34d399"/>
                        <circle cx="275" cy="86" r="4" fill="#34d399"/>
                        <text x="178" y="186" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">u_n &lt;= l &lt;= M (converge vers l)</text>

                        <!-- Right Panel: Bounded oscillating non-monotone -->
                        <rect x="350" y="16" width="314" height="184" rx="12" fill="rgba(251,191,36,0.04)" stroke="#1e293b" stroke-width="1.3"/>
                        <text x="507" y="36" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">2) Bornee non monotone : (-1)^n</text>
                        <line x1="376" y1="118" x2="644" y2="118" stroke="#475569" stroke-width="1.4"/>
                        <line x1="382" y1="176" x2="382" y2="54" stroke="#475569" stroke-width="1.4"/>
                        <line x1="382" y1="74" x2="640" y2="74" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/>
                        <text x="376" y="78" fill="#fde68a" font-size="10.5" font-family="monospace" text-anchor="end">+1</text>
                        <line x1="382" y1="162" x2="640" y2="162" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/>
                        <text x="376" y="166" fill="#fde68a" font-size="10.5" font-family="monospace" text-anchor="end">-1</text>
                        <!-- Alternating dots +1 and -1 -->
                        <circle cx="404" cy="74" r="4" fill="#fbbf24"/>
                        <circle cx="436" cy="162" r="4" fill="#fb7185"/>
                        <circle cx="468" cy="74" r="4" fill="#fbbf24"/>
                        <circle cx="500" cy="162" r="4" fill="#fb7185"/>
                        <circle cx="532" cy="74" r="4" fill="#fbbf24"/>
                        <circle cx="564" cy="162" r="4" fill="#fb7185"/>
                        <circle cx="596" cy="74" r="4" fill="#fbbf24"/>
                        <circle cx="628" cy="162" r="4" fill="#fb7185"/>
                        <text x="512" y="186" fill="#fda4af" font-size="10" font-family="monospace" text-anchor="middle">-1 &lt;= u_n &lt;= 1 (mais divergente !)</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 3. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">أخطاء تحريرية قاتلة</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «افتراض صحة العبارة لجميع $n$ داخل الترجع»:</b>
                      إذا كتبت «نفترض أن $\\forall n \\in \\mathbb{N},\\; u_n &gt; 1$» فقد أفترضت النتيجة المطلوبة نفسها وضيّعت النقطة! الصياغة القانونية الوحيدة هي: <b>«ليكن $n \\in \\mathbb{N}$، نفترض أن $u_n &gt; 1$ ولنبيّن أن $u_{n+1} &gt; 1$»</b>!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «نسيان التحقق من عدم انعدام المقام في $v_n$ أو $u_{n+1}$»:</b>
                      قبل إدخال متتالية مساعدة كسرية مثل $v_n = \\frac{1}{u_n - 1}$ أو قبل القسمة على $u_n + 3$، يجب أولاً استحضار نتيجة الترجع (مثل $\\forall n,\\; u_n &gt; 1 \\implies u_n - 1 \\neq 0$ و $u_n + 3 &gt; 4 \\neq 0$) لتبرير وجود التعابير!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «استنتاج رتابة $(u_n)$ من تزايدية $f$ وحدها»:</b>
                      حتى لو كانت $f$ تزايدية قطعاً، قد تكون $(u_n)$ <b>تناقصية</b> (إذا كان $u_1 &lt; u_0$) أو <b>ثابتة</b> (إذا كان $u_1 = u_0$)! تزايدية $f$ تحافظ فقط على الترتيب الموجود بين $u_1$ و $u_0$ عبر الترجع!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «عدّ الحدود في مجموع المتتالية الحسابية أو الهندسية»:</b>
                      في المجموع $S_n = u_0 + u_1 + \\dots + u_n$ (حيث يبدأ من $p = 0$)، عدد الحدود هو <b>$n + 1$</b> وليس $n$! القاعدة العامة الدائمة هي: (دليل النهاية $-$ دليل البداية $+ 1$، أي $p_{\\text{fin}} - p_{\\text{init}} + 1$).
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: متتالية متخاطة بالجذر المزدوج (ترجع + رتابة + متتالية مساعدة حسابية)</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نعتبر المتتالية العددية $(u_n)_{n\\in\\mathbb{N}}$ المعرفة بـ $u_0 = 2$ ومن أجل كل $n \\in \\mathbb{N}$:
                      $$u_{n+1} = \\frac{5\\,u_n - 1}{u_n + 3}$$
                      <b>1.</b> بيّن بالترجع أن: $\\forall n \\in \\mathbb{N},\\; u_n &gt; 1$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> ادرس رتابة المتتالية $(u_n)$ وتحقق من أنها محدودة. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>3.</b> نضع من أجل كل $n \\in \\mathbb{N}$: $v_n = \\frac{1}{u_n - 1}$. بيّن أن $(v_n)$ متتالية حسابية محدّداً أساسها $r$ وحدها الأول $v_0$، ثم استنتج $u_n$ بدلالة $n$. <span class="text-emerald-400 font-mono">(1.00 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. البرهان بالترجع على $\\forall n \\in \\mathbb{N},\\; u_n &gt; 1$:</b><br/>
                      • <b>من أجل $n = 0$:</b> لدينا $u_0 = 2 &gt; 1$، إذن العبارة صحيحة من أجل $n = 0$.<br/>
                      • <b>الافتراض والبرهان لـ $n+1$:</b> ليكن $n \\in \\mathbb{N}$، نفترض أن $u_n &gt; 1$ ولنبيّن أن $u_{n+1} &gt; 1$. نحسب الفرق:
                      $$u_{n+1} - 1 = \\frac{5\\,u_n - 1}{u_n + 3} - 1 = \\frac{5\\,u_n - 1 - u_n - 3}{u_n + 3} = \\frac{4\\,(u_n - 1)}{u_n + 3}$$
                      بما أن $u_n &gt; 1$ فإن $u_n - 1 &gt; 0$ و $u_n + 3 &gt; 4 &gt; 0$، ومنه $u_{n+1} - 1 &gt; 0$ أي $u_{n+1} &gt; 1$.<br/>
                      • <b>الاستنتاج:</b> حسب مبدأ الترجع، $\\forall n \\in \\mathbb{N},\\; u_n &gt; 1$. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2. الرتابة والحدّية:</b><br/>
                      من أجل كل $n \\in \\mathbb{N}$:
                      $$u_{n+1} - u_n = \\frac{5\\,u_n - 1}{u_n + 3} - u_n = \\frac{5\\,u_n - 1 - u_n^2 - 3\\,u_n}{u_n + 3} = \\frac{-(u_n^2 - 2\\,u_n + 1)}{u_n + 3} = -\\frac{(u_n - 1)^2}{u_n + 3}$$
                      بما أن $(u_n - 1)^2 &gt; 0$ و $u_n + 3 &gt; 0$ فإن $u_{n+1} - u_n &lt; 0$؛ إذن $(u_n)$ <b>تناقصية قطعاً</b> على $\\mathbb{N}$. ومنه $\\forall n \\in \\mathbb{N},\\; 1 &lt; u_n \\le u_0 = 2$ (محدودة!). <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>3. طبيعة $(v_n)$ والتعبير عن $u_n$ بدلالة $n$:</b><br/>
                      بما أن $\\forall n \\in \\mathbb{N},\\; u_n &gt; 1$ فإن $u_n - 1 \\neq 0$، ومنه $v_n$ معرفة جيداً. نحسب $v_{n+1} - v_n$:
                      $$v_{n+1} - v_n = \\frac{1}{u_{n+1} - 1} - \\frac{1}{u_n - 1} = \\frac{u_n + 3}{4\\,(u_n - 1)} - \\frac{4}{4\\,(u_n - 1)} = \\frac{u_n - 1}{4\\,(u_n - 1)} = \\frac{1}{4}$$
                      إذن $(v_n)$ <b>متتالية حسابية</b> أساسها $r = \\frac{1}{4}$ وحدها الأول $v_0 = \\frac{1}{u_0 - 1} = \\frac{1}{2 - 1} = 1$.<br/>
                      الحد العام: $v_n = v_0 + n\\,r = 1 + \\frac{n}{4} = \\frac{n + 4}{4}$، وبما أن $u_n - 1 = \\frac{1}{v_n}$ نجد:
                      $$u_n = 1 + \\frac{4}{n + 4} = \\frac{n + 8}{n + 4}$$
                      <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: المتتالية التآلفية $u_{n+1} = \\frac{1}{3}u_n + 4$ وحساب مجموع حدودها</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      لتكن $(u_n)_{n\\in\\mathbb{N}}$ متتالية بحيث $u_0 = 3$ و $u_{n+1} = \\frac{1}{3}u_n + 4$. نضع $v_n = u_n - 6$.<br/>
                      <b>1.</b> بيّن أن $(v_n)$ هندسية أساسها $\\frac{1}{3}$، واستنتج $u_n$ بدلالة $n$ ثم ادرس رتابة $(u_n)$. <span class="text-emerald-400 font-mono">(0.90 ن)</span><br/>
                      <b>2.</b> احسب بدلالة $n$ المجموع $S_n = u_0 + u_1 + \\dots + u_n$. <span class="text-emerald-400 font-mono">(0.60 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. $(v_n)$ هندسية، $u_n$ بدلالة $n$، والرتابة:</b><br/>
                      • $v_{n+1} = u_{n+1} - 6 = \\frac{1}{3}u_n + 4 - 6 = \\frac{1}{3}(u_n - 6) = \\frac{1}{3}v_n$؛ إذن $(v_n)$ هندسية أساسها $q = \\frac{1}{3}$ وحدها الأول $v_0 = 3 - 6 = -3$.<br/>
                      • ومنه $v_n = -3\\left(\\frac{1}{3}\\right)^n$، وبالتالي: $u_n = 6 - 3\\left(\\frac{1}{3}\\right)^n$.<br/>
                      • $u_{n+1} - u_n = \\frac{1}{3}u_n + 4 - u_n = \\frac{2}{3}(6 - u_n) = 2\\left(\\frac{1}{3}\\right)^n &gt; 0$ $\\implies$ $(u_n)$ <b>تزايدية قطعاً</b>. <span class="text-emerald-400 font-mono">(0.90 ن)</span></p>
                      <p><b>2. حساب المجموع $S_n$ (احذر عدد الحدود $= n + 1$!):</b><br/>
                      بما أن $u_k = 6 + v_k$:
                      $$S_n = \\sum_{k=0}^{n} (6 + v_k) = 6(n + 1) + v_0 \\cdot \\frac{1 - (1/3)^{n+1}}{1 - 1/3} = 6(n + 1) - \\frac{9}{2}\\left(1 - \\left(\\frac{1}{3}\\right)^{n+1}\\right)$$
                      <span class="text-emerald-400 font-mono">(0.60 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 5. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">متتالية لاجذرية بتقنية الضرب في المرافق</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    نعتبر المتتالية $(u_n)_{n\\in\\mathbb{N}}$ المعرفة بـ $u_0 = 0$ ومن أجل كل $n \\in \\mathbb{N}$: $u_{n+1} = \\sqrt{2 + u_n}$.<br/>
                    1) بيّن بالترجع أن: $\\forall n \\in \\mathbb{N},\\; 0 \\le u_n &lt; 2$.<br/>
                    2) باستعمال الضرب في المرافق، ادرس رتابة المتتالية $(u_n)$.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. الترجع ($0 \\le u_n &lt; 2$):</b><br/>
                      • لـ $n=0$: $0 \\le u_0 = 0 &lt; 2$ صحيحة.<br/>
                      • نفترض $0 \\le u_n &lt; 2$: إذن $2 \\le 2 + u_n &lt; 4$، وبما أن دالة الجذر التربيعي متزايدة قطعاً على $[0, +\\infty[$ فإن $\\sqrt{2} \\le \\sqrt{2 + u_n} &lt; \\sqrt{4} = 2$، وبالتالي $0 &lt; u_{n+1} &lt; 2$ صحيحة لـ $n+1$.</p>
                      <p><b>2. دراسة الرتابة عبر المرافق:</b><br/>
                      من أجل كل $n \\in \\mathbb{N}$، لدينا $\\sqrt{2+u_n} + u_n &gt; 0$:
                      $$u_{n+1} - u_n = \\sqrt{2 + u_n} - u_n = \\frac{2 + u_n - u_n^2}{\\sqrt{2 + u_n} + u_n} = \\frac{(2 - u_n)(u_n + 1)}{\\sqrt{2 + u_n} + u_n}$$
                      بما أن $0 \\le u_n &lt; 2$ فإن $2 - u_n &gt; 0$ و $u_n + 1 &gt; 0$، ومنه $u_{n+1} - u_n &gt; 0$؛ إذن $(u_n)$ <b>تزايدية قطعاً</b> على $\\mathbb{N}$.</p>
                    </div>
                  </details>
                </div>
              </div>

`);
