window.EulerAcademy.registerAxis('math-03', 'm03-ax2', `

              <div class="space-y-6">
                <!-- 1. Official Reference Limits & Geometric Sequences -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. النهايات المرجعية الرسمية ونهاية المتتالية الهندسية $(q^n)$</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">📐 أ) المتقاربة مقابل المتباعدة والنهايات المرجعية:</b>
                      • تكون المتتالية $(u_n)$ <b>متقاربة (Convergente)</b> إذا قبلت <b>نهاية منتهية</b> $\\lim_{n\\to+\\infty} u_n = \\ell \\in \\mathbb{R}$، وتكون <b>متباعدة (Divergente)</b> إذا كانت نهايتها $\\pm\\infty$ أو لم تكن لها نهاية.<br/>
                      • <b>النهايات المرجعية المعتمدة ($p \\in \\mathbb{N}^*$):</b>
                      $$\\lim_{n\\to+\\infty} n^p = +\\infty \\qquad \\lim_{n\\to+\\infty} \\sqrt{n} = +\\infty$$
                      $$\\lim_{n\\to+\\infty} \\frac{1}{n^p} = 0 \\qquad \\lim_{n\\to+\\infty} \\frac{1}{\\sqrt{n}} = 0$$
                      تُطبَّق جميع قواعد العمليات على النهايات وإزالة الأشكال غير المحددة ($+\\infty - \\infty$, $\\frac{\\infty}{\\infty}$, $0\\times\\infty$) تماماً كما في الدوال.
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 text-sm block mb-1.5">🚀 ب) النهاية الكاملة للمتتالية الهندسية $(q^n)$ ($q \\in \\mathbb{R}^*$):</b>
                      • إذا كان <b>$q &gt; 1$</b>: $\\lim_{n\\to+\\infty} q^n = +\\infty$ (متباعدة).<br/>
                      • إذا كان <b>$q = 1$</b>: $\\lim_{n\\to+\\infty} 1^n = 1$ (متقاربة وثابتة).<br/>
                      • إذا كان <b>$-1 &lt; q &lt; 1$</b> (أي $|q| &lt; 1$): $\\lim_{n\\to+\\infty} q^n = 0$ (متقاربة نحو $0$).<br/>
                      • إذا كان <b>$q \\le -1$</b>: ليس للمتتالية $(q^n)$ نهاية (متباعدة).<br/>
                      <span class="text-amber-300 block mt-1.5">💡 عند وجود كسر $\\frac{a^n + b^n}{c^n + d^n}$، نعمّل في البسط والمقام بـ <b>أكبر أساس</b> لتظهر حدود من الشكل $(r)^n$ حيث $|r| &lt; 1$ فتؤول إلى $0$!</span>
                    </div>
                  </div>
                </div>

                <!-- 2. Convergence Criteria: Monotone + Squeeze + Contraction -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">2. مصاديق التقارب الرسمية (التقارب الرتيب، الدركيين، والمتفاوتة $|u_{n+1}-\\ell|\\le k|u_n-\\ell|$)</span>
                    <span class="text-xs text-emerald-400 font-mono">Critères de convergence</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">⚖️ أ) مبرهنة التقارب الرتيب (Convergence monotone):</b>
                      • كل متتالية <b>تزايدية ومكبورة</b> هي متتالية <b>متقاربة</b>.<br/>
                      • كل متتالية <b>تناقصية ومصغورة</b> هي متتالية <b>متقاربة</b>.<br/>
                      <span class="text-rose-300 font-semibold block mt-1.5">⚠️ تنبيه صارم: إذا كانت $(u_n)$ تزايدية ومكبورة بـ $M$، تضمن المبرهنة تقاربها نحو نهاية $\\ell \\le M$ فقط (وليس حتماً $\\ell = M$!).</span>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-purple-500/30">
                      <b class="text-purple-400 text-sm block mb-1.5">🥪 ب) مصاديق الحصر والترتيب ($\\alpha &gt; 0$ ثابت):</b>
                      من أجل كل $n \\ge n_0$:<br/>
                      1) <b>مصداق الدركيين (Gendarmes):</b> $v_n \\le u_n \\le w_n$ و $\\lim v_n = \\lim w_n = \\ell \\implies \\lim u_n = \\ell$.<br/>
                      2) <b>القيمة المطلقة:</b> $|v_n - \\ell| \\le \\alpha\\,u_n$ و $\\lim u_n = 0 \\implies \\lim v_n = \\ell$.<br/>
                      3) <b>المقارنة للانهاية:</b> $v_n \\ge \\alpha\\,u_n$ و $\\lim u_n = +\\infty \\implies \\lim v_n = +\\infty$.<br/>
                      <span class="text-cyan-300 font-semibold block mt-1">🎯 <b>التقنية القياسية للوطني:</b> من $|u_{n+1}-\\ell| \\le k|u_n-\\ell|$ ($0&lt;k&lt;1$) نبرهن بالترجع $|u_n-\\ell| \\le k^n |u_0-\\ell|$ ثم $\\lim k^n=0 \\implies \\lim u_n = \\ell$!</span>
                    </div>
                  </div>

                  <!-- SVG Diagram: Monotone Convergence l <= M vs Squeeze Theorem -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardSqueezeAndMonotone">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>🖼️ المقارنة البصرية لمصداقي التقارب الرتيب والدركيين (Gendarmes)</span>
                      <span class="text-[11px] font-mono text-emerald-400">l &lt;= M vs v_n &lt;= u_n &lt;= w_n</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 220" class="w-full h-auto">
                        <!-- Left Panel: Monotone l <= M -->
                        <rect x="16" y="16" width="314" height="188" rx="12" fill="rgba(16,185,129,0.04)" stroke="#1e293b" stroke-width="1.3"/>
                        <text x="173" y="36" fill="#6ee7b7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1) Croissante &lt;= M : l pas forcement M</text>
                        <line x1="42" y1="172" x2="310" y2="172" stroke="#475569" stroke-width="1.3"/>
                        <line x1="48" y1="180" x2="48" y2="50" stroke="#475569" stroke-width="1.3"/>
                        <!-- Upper bound M higher than limit l -->
                        <line x1="48" y1="62" x2="306" y2="62" stroke="#fb7185" stroke-width="1.4" stroke-dasharray="5,4"/>
                        <text x="42" y="66" fill="#fda4af" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">M</text>
                        <line x1="48" y1="98" x2="306" y2="98" stroke="#22d3ee" stroke-width="1.4" stroke-dasharray="4,3"/>
                        <text x="42" y="102" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">l</text>
                        <!-- Points approaching l = 98 from below -->
                        <circle cx="70" cy="158" r="4" fill="#34d399"/>
                        <circle cx="105" cy="134" r="4" fill="#34d399"/>
                        <circle cx="140" cy="118" r="4" fill="#34d399"/>
                        <circle cx="175" cy="109" r="4" fill="#34d399"/>
                        <circle cx="210" cy="104" r="4" fill="#34d399"/>
                        <circle cx="245" cy="101" r="4" fill="#34d399"/>
                        <circle cx="280" cy="100" r="4" fill="#34d399"/>
                        <text x="180" y="190" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">Ex: u_n = 2 - 1/n &lt;= 5 -&gt; lim = 2</text>

                        <!-- Right Panel: Squeeze theorem v_n <= u_n <= w_n -->
                        <rect x="350" y="16" width="314" height="188" rx="12" fill="rgba(168,85,247,0.05)" stroke="#1e293b" stroke-width="1.3"/>
                        <text x="507" y="36" fill="#d8b4fe" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">2) Gendarmes : v_n &lt;= u_n &lt;= w_n</text>
                        <line x1="376" y1="172" x2="644" y2="172" stroke="#475569" stroke-width="1.3"/>
                        <line x1="382" y1="180" x2="382" y2="50" stroke="#475569" stroke-width="1.3"/>
                        <!-- Target limit l at y=112 -->
                        <line x1="382" y1="112" x2="642" y2="112" stroke="#22d3ee" stroke-width="1.3" stroke-dasharray="4,3"/>
                        <text x="376" y="116" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">l</text>
                        <!-- Upper envelope w_n and lower envelope v_n -->
                        <path d="M 392 58 C 445 78, 515 102, 640 109" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4,3"/>
                        <text x="414" y="64" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="start">w_n -&gt; l</text>
                        <path d="M 392 164 C 445 144, 515 122, 640 115" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="4,3"/>
                        <text x="414" y="158" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="start">v_n -&gt; l</text>
                        <!-- Oscillating u_n pinched between v_n and w_n -->
                        <circle cx="408" cy="70" r="3.8" fill="#c084fc"/>
                        <circle cx="442" cy="140" r="3.8" fill="#c084fc"/>
                        <circle cx="476" cy="92" r="3.8" fill="#c084fc"/>
                        <circle cx="510" cy="124" r="3.8" fill="#c084fc"/>
                        <circle cx="544" cy="105" r="3.8" fill="#c084fc"/>
                        <circle cx="578" cy="117" r="3.8" fill="#c084fc"/>
                        <circle cx="612" cy="111" r="3.8" fill="#c084fc"/>
                        <text x="514" y="190" fill="#e9d5ff" font-size="10" font-family="monospace" text-anchor="middle">u_n oscille mais lim u_n = l !</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 3. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">احذر استنتاجات النهايات المتسرعة</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «توزيع $\\lim$ على مجموع عدده $n$ يؤول إلى $+\\infty$»:</b>
                      في $S_n = \\frac{1}{n^2+1} + \\dots + \\frac{1}{n^2+n}$، كل حد يؤول إلى $0$ لكن عدد الحدود يساوي $n \\to +\\infty$! هذا <b>شكل غير محدد $0 \\times \\infty$</b>؛ فالحل الصحيح هو <b>الحصر بين الأصغر والأكبر</b> ثم تطبيق مصداق الدركيين!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «ظن أن $(-1)^n$ لها نهاية أو أن $q^n \\to 0$ إذا $q = -1.2$»:</b>
                      تنتهي $q^n$ إلى $0$ حصراً إذا كان <b>$-1 &lt; q &lt; 1$</b>! أما إذا كان $q \\le -1$ (مثل $(-2)^n$ أو $(-1)^n$) فالمتتالية <b>متباعدة وليس لها نهاية</b>!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «إغفال إثبات $|u_n - \\ell| \\le k^n |u_0 - \\ell|$ بالترجع»:</b>
                      بعد إثبات المتفاوتة الفردية $|u_{n+1} - \\ell| \\le k|u_n - \\ell|$، <b>يجب البرهان بالترجع</b> (أو الضرب طرفاً بطرف مع تعليل إيجاب الأطراف) على $|u_n - \\ell| \\le k^n |u_0 - \\ell|$ قبل المرور إلى النهاية!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «عدم التحقق من انتماء $M$ الحقيقي أم لا في التناقص»:</b>
                      تزايدية ومصغورة لا تضمن التقارب ($u_n = n$ تزايدية ومصغورة بـ $0$ لكن نهايتها $+\\infty$!)، وتناقصية ومكبورة لا تضمن التقارب ($u_n = -n$)! يلزم <b>الاقتران العكسي</b>: تزايدية+مكبورة أو تناقصية+مصغورة!
                    </div>
                  </div>
                </div>

                <!-- 4. Worked National-Grade Applications -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">3. تطبيقان نموذجيان محرران بسلم التنقيط (معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400 font-mono">صرامة كاملة 20/20</span>
                  </div>

                  <!-- Application 1 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800 mb-5">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: إثبات تقارب متتالية لاجذرية وحساب نهايتها بتقنية $|u_{n+1} - 2| \\le \\frac{1}{3}|u_n - 2|$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      لتكن $(u_n)_{n\\in\\mathbb{N}}$ متتالية معرفة بـ $u_0 = 1$ ومن أجل كل $n \\in \\mathbb{N}$: $u_{n+1} = \\sqrt{u_n + 2}$. نقبل أنها تزايدية وتحقق $\\forall n \\in \\mathbb{N},\\; 1 \\le u_n \\le 2$.<br/>
                      <b>1.</b> استنتج لماذا $(u_n)$ متقاربة دون حساب نهايتها أولاً. <span class="text-emerald-400 font-mono">(0.40 ن)</span><br/>
                      <b>2.</b> بيّن أنه لكل $n \\in \\mathbb{N}$: $|u_{n+1} - 2| \\le \\frac{1}{3}|u_n - 2|$. <span class="text-emerald-400 font-mono">(0.80 ن)</span><br/>
                      <b>3.</b> استنتج بالترجع تأطيراً لـ $|u_n - 2|$ بدلالة $n$، ثم حدّد $\\lim_{n\\to+\\infty} u_n$. <span class="text-emerald-400 font-mono">(0.80 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. تقارب المتتالية (0.40 ن):</b><br/>
                      بما أن $(u_n)$ <b>تزايدية ومكبورة</b> بالعدد $2$، فحسب مبرهنة التقارب الرتيب فهي <b>متقاربة</b>. <span class="text-emerald-400 font-mono">(0.40 ن)</span></p>
                      <p><b>2. برهان المتفاوتة $|u_{n+1} - 2| \\le \\frac{1}{3}|u_n - 2|$ (0.80 ن):</b><br/>
                      من أجل كل $n \\in \\mathbb{N}$، نستعمل المرافق:
                      $$|u_{n+1} - 2| = |\\sqrt{u_n + 2} - 2| = \\left|\\frac{u_n + 2 - 4}{\\sqrt{u_n + 2} + 2}\\right| = \\frac{|u_n - 2|}{\\sqrt{u_n + 2} + 2}$$
                      ولدينا $u_n \\ge 1 \\implies u_n + 2 \\ge 3 &gt; 1 \\implies \\sqrt{u_n + 2} &gt; 1 \\implies \\sqrt{u_n + 2} + 2 &gt; 3$.<br/>
                      بالمقلوب (الأعداد موجبة قطعا): $\\frac{1}{\\sqrt{u_n + 2} + 2} &lt; \\frac{1}{3}$، ومنه نضرب في $|u_n - 2| \\ge 0$:
                      $$|u_{n+1} - 2| \\le \\frac{1}{3}|u_n - 2|$$
                      <span class="text-emerald-400 font-mono">(0.80 ن)</span></p>
                      <p><b>3. الترجع وحساب النهاية (0.80 ن):</b><br/>
                      • <b>من أجل $n=0$:</b> $|u_0 - 2| = |1 - 2| = 1 \\le \\left(\\frac{1}{3}\\right)^0 = 1$ (صحيحة).<br/>
                      • نفترض أن $|u_n - 2| \\le \\left(\\frac{1}{3}\\right)^n$، إذن $|u_{n+1} - 2| \\le \\frac{1}{3}|u_n - 2| \\le \\frac{1}{3}\\left(\\frac{1}{3}\\right)^n = \\left(\\frac{1}{3}\\right)^{n+1}$.<br/>
                      • حسب مبدأ الترجع: $\\forall n \\in \\mathbb{N},\\; |u_n - 2| \\le \\left(\\frac{1}{3}\\right)^n$.<br/>
                      • وبما أن $-1 &lt; \\frac{1}{3} &lt; 1$ فإن $\\lim_{n\\to+\\infty}\\left(\\frac{1}{3}\\right)^n = 0$؛ وحسب مصداق التقارب بالقيمة المطلقة، <b>$\\lim_{n\\to+\\infty} u_n = 2$</b>. <span class="text-emerald-400 font-mono">(0.80 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: نهايات متتاليات بقوى متنافسة وحصر مجموع بمصداق الدركيين</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      <b>1.</b> احسب النهايتين: $A_n = \\frac{3^{n+1} - 2^n}{3^n + 5^n}$ و $B_n = \\sqrt{n^2 + n} - n$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> نضع لكل $n \\in \\mathbb{N}^*$: $S_n = \\sum_{k=1}^{n} \\frac{n}{n^2 + k} = \\frac{n}{n^2+1} + \\frac{n}{n^2+2} + \\dots + \\frac{n}{n^2+n}$. باستعمال مصداق الدركيين، احسب $\\lim_{n\\to+\\infty} S_n$. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. حساب النهايتين $A_n$ و $B_n$ (0.75 ن):</b><br/>
                      • نعمّل بأكبر أساس $5^n$ في البسط والمقام:
                      $$A_n = \\frac{5^n\\left[3\\left(\\frac{3}{5}\\right)^n - \\left(\\frac{2}{5}\\right)^n\\right]}{5^n\\left[\\left(\\frac{3}{5}\\right)^n + 1\\right]} = \\frac{3\\left(\\frac{3}{5}\\right)^n - \\left(\\frac{2}{5}\\right)^n}{\\left(\\frac{3}{5}\\right)^n + 1} \\xrightarrow[n\\to+\\infty]{} \\frac{0 - 0}{0 + 1} = 0$$
                      • لـ $B_n$ ($\\infty - \\infty$): نستعمل المرافق ثم نعمّل بـ $n$:
                      $$B_n = \\frac{n}{\\sqrt{n^2 + n} + n} = \\frac{n}{n\\left(\\sqrt{1 + \\frac{1}{n}} + 1\\right)} = \\frac{1}{\\sqrt{1 + \\frac{1}{n}} + 1} \\xrightarrow[n\\to+\\infty]{} \\frac{1}{2}$$
                      <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>2. حصر $S_n$ وتطبيق مصداق الدركيين (0.75 ن):</b><br/>
                      من أجل كل $k \\in \\{1, 2, \\dots, n\\}$: $n^2 + 1 \\le n^2 + k \\le n^2 + n$.<br/>
                      بأخذ المقلوب ثم الضرب في $n &gt; 0$:
                      $$\\frac{n}{n^2 + n} \\le \\frac{n}{n^2 + k} \\le \\frac{n}{n^2 + 1}$$
                      بجمع المتفاوتات من $k = 1$ إلى $k = n$ (توجد <b>$n$</b> حدود متساوية على الطرفين!):
                      $$\\frac{n^2}{n^2 + n} \\le S_n \\le \\frac{n^2}{n^2 + 1}$$
                      بما أن $\\lim_{n\\to+\\infty} \\frac{n^2}{n^2+n} = \\lim_{n\\to+\\infty} \\frac{n}{n+1} = 1$ و $\\lim_{n\\to+\\infty} \\frac{n^2}{n^2+1} = 1$، فحسب مصداق الدركيين: <b>$\\lim_{n\\to+\\infty} S_n = 1$</b>. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 5. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">تأطير الدوال المثلثية والمجموع الهندسي في النهايات</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    احسب النهايتين التاليتين مع التعليل الكامل (لـ $n \\in \\mathbb{N}^*$):<br/>
                    1) $\\lim_{n\\to+\\infty} \\dfrac{2\\,n\\cos(n) + (-1)^n}{n^2 + 1}$<br/>
                    2) $\\lim_{n\\to+\\infty} \\dfrac{3^n - 2n}{3^n + (-1)^n}$
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. حساب النهاية الأولى عبر تفاوت القيمة المطلقة (أو الدركيين):</b><br/>
                      من أجل كل $n \\ge 1$، لدينا $|\\cos(n)| \\le 1$ و $|(-1)^n| = 1$، ومنه بالمتفاوتة المثلثية:
                      $$\\left|\\frac{2\\,n\\cos(n) + (-1)^n}{n^2 + 1}\\right| \\le \\frac{2\\,n + 1}{n^2 + 1} \\le \\frac{3\\,n}{n^2} = \\frac{3}{n}$$
                      بما أن $\\lim_{n\\to+\\infty} \\frac{3}{n} = 0$، فالنهاية الأولى تساوي <b>$0$</b>.</p>
                      <p><b>2. حساب النهاية الثانية بالتعميل بـ $3^n$:</b><br/>
                      نكتب $\\dfrac{3^n - 2n}{3^n + (-1)^n} = \\dfrac{1 - \\frac{2n}{3^n}}{1 + \\frac{(-1)^n}{3^n}}$. وبما أن $\\left|\\frac{(-1)^n}{3^n}\\right| = \\left(\\frac{1}{3}\\right)^n \\to 0$، ونعلم أن $n \\le 2^n$ (بالترجع على $n \\ge 1$) $\\implies 0 &lt; \\frac{2n}{3^n} \\le 2\\left(\\frac{2}{3}\\right)^n \\to 0$، فإن البسط والمقام يؤولان إلى $1$، ومنه النهاية تساوي <b>$1$</b>.</p>
                    </div>
                  </details>
                </div>
              </div>

`);
