window.EulerAcademy.registerAxis('math-02', 'm02-ax3', `

              <div class="space-y-6">
                <!-- 1. Monotonicity & Extremums from f'(x) -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. رتابة دالة ومطارفها من إشارة المشتقة الأولى $f'(x)$</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">📈 أ) مبرهنة رتابة دالة قابلة للاشتقاق على مجال $I$:</b>
                      لتكن $f$ قابلة للاشتقاق على مجال $I$:<br/>
                      • $\\forall x \\in I,\\; f'(x) \\ge 0 \\iff f$ <b>تزايدية</b> على $I$. (وإذا كان $f'(x) &gt; 0$ على $I$ باستثناء نقط معزولة $\\implies$ <b>تزايدية قطعاً</b>).<br/>
                      • $\\forall x \\in I,\\; f'(x) \\le 0 \\iff f$ <b>تناقصية</b> على $I$. (وإذا كان $f'(x) &lt; 0$ باستثناء نقط معزولة $\\implies$ <b>تناقصية قطعاً</b>).<br/>
                      • $\\forall x \\in I,\\; f'(x) = 0 \\iff f$ <b>ثابتة</b> على $I$.<br/>
                      <span class="text-emerald-300 block mt-1.5">💡 <b>استثمار ذهبي للوطني:</b> إذا بلغت $f$ قيمة دنيا $m \\ge 0$ على $I$ فإن $\\forall x \\in I,\\; f(x) \\ge m \\ge 0$ (استنتاج الإشارة من جدول التغيرات!).</span>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 text-sm block mb-1.5">⛰️ ب) مبرهنة المطارف (Extremums locaux):</b>
                      لتكن $f$ قابلة للاشتقاق على مجال مفتوح $I$ و $x_0 \\in I$:<br/>
                      • <b>شرط لازم (غير كافٍ):</b> إذا قبلت $f$ مطرافاً في $x_0$ فإن $f'(x_0) = 0$.<br/>
                      • <b>شرط كافٍ (تغيير الإشارة):</b> إذا انعدمت $f'$ في $x_0$ <b>وغيّرت إشارتها</b> بجوار $x_0$ فإن $f$ تقبل مطرافاً محلياً في $x_0$:<br/>
                      &nbsp;&nbsp;- من $(+)$ إلى $(-)$ $\\implies$ $f(x_0)$ <b>قيمة قصوى محلية (Maximum)</b>.<br/>
                      &nbsp;&nbsp;- من $(-)$ إلى $(+)$ $\\implies$ $f(x_0)$ <b>قيمة دنيا محلية (Minimum)</b>.<br/>
                      <span class="text-rose-300 block mt-1">⚠️ إذا انعدمت $f'(x_0)=0$ <b>دون تغيير الإشارة</b> ($+ \\to +$ أو $- \\to -$) فلا مطراف! بل نقطة انعطاف بمماس أفقي.</span>
                    </div>
                  </div>
                </div>

                <!-- 2. Concavity & Inflection Points from f''(x) -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">2. تقعر المنحنى $(C_f)$ ونقط الانعطاف من إشارة المشتقة الثانية $f''(x)$</span>
                    <span class="text-xs text-emerald-400 font-mono">Concavité &amp; Points d'inflexion</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 block mb-1.5">∪ تقعر موجّه نحو الأراتيب الموجبة ($f'' \\ge 0$):</b>
                      إذا كان $\\forall x \\in I,\\; f''(x) \\ge 0$ فإن $(C_f)$ يوجّه تقعره نحو الأراتيب الموجبة (دالة محدبة <i>Convexe</i>)، ويقع المنحنى <b>فوق جميع مماساته</b> على $I$.
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/30">
                      <b class="text-rose-400 block mb-1.5">∩ تقعر موجّه نحو الأراتيب السالبة ($f'' \\le 0$):</b>
                      إذا كان $\\forall x \\in I,\\; f''(x) \\le 0$ فإن $(C_f)$ يوجّه تقعره نحو الأراتيب السالبة (دالة مقعرة <i>Concave</i>)، ويقع المنحنى <b>تحت جميع مماساته</b> على $I$.
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-purple-500/30">
                      <b class="text-purple-400 block mb-1.5">🔀 نقطة الانعطاف (Point d'inflexion):</b>
                      تكون $I(x_0, f(x_0))$ نقطة انعطاف لـ $(C_f)$ (حيث يخترق المنحنى مماسه) في حالتين:<br/>
                      1) إذا <b>انعدمت $f''$ في $x_0$ وغيّرت إشارتها</b> بجوار $x_0$.<br/>
                      2) أو إذا <b>انعدمت $f'$ في $x_0$ دون أن تغيّر إشارتها</b>!
                    </div>
                  </div>

                  <!-- SVG Diagram 1: Extremums vs Concavity & Inflection Point -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardConcavityInflexion">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📊 الربط الهندسي بين إشارتي $f'$ و $f''$ (المطارف مقابل نقط الانعطاف)</span>
                      <span class="text-[11px] font-mono text-emerald-400">Sign Flip Rules for f' and f''</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
                        <div class="flex flex-wrap items-center gap-4">
                          <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-3 h-3 rounded-full bg-cyan-500/40 border border-cyan-400"></span> مطراف: $f'$ تنعدم وتغيّر الإشارة</span>
                          <span class="flex items-center gap-1.5 text-emerald-300"><span class="inline-block w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-400"></span> $f'' &gt; 0$ (فوق المماسات $\\cup$)</span>
                          <span class="flex items-center gap-1.5 text-rose-300"><span class="inline-block w-3 h-3 rounded-full bg-rose-500/40 border border-rose-400"></span> $f'' &lt; 0$ (تحت المماسات $\\cap$)</span>
                          <span class="flex items-center gap-1.5 text-purple-300"><span class="inline-block w-3 h-3 rounded-full bg-purple-500/40 border border-purple-400"></span> انعطاف: تغيّر تقعر واختراق المماس</span>
                        </div>
                        <span class="text-slate-400 font-mono">No Sign Flip =&gt; No Extremum / No Inflexion</span>
                      </div>
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 220" class="w-full h-auto">
                        <!-- Left Panel: Local Max & Min -->
                        <rect x="16" y="16" width="314" height="188" rx="12" fill="rgba(34,211,238,0.04)" stroke="#1e293b" stroke-width="1.3"/>
                        <text x="173" y="36" fill="#67e8f9" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">1. Extremums (Changement de signe de f')</text>
                        <path d="M 38 152 C 74 56, 128 56, 173 114 C 218 172, 272 172, 308 76" fill="none" stroke="#22d3ee" stroke-width="2.6"/>
                        <!-- Horizontal tangents at max and min -->
                        <line x1="72" y1="71" x2="132" y2="71" stroke="#fbbf24" stroke-width="1.8"/>
                        <circle cx="102" cy="71" r="4.5" fill="#fbbf24"/>
                        <text x="102" y="57" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Max (+ -&gt; -)</text>
                        <line x1="214" y1="158" x2="274" y2="158" stroke="#34d399" stroke-width="1.8"/>
                        <circle cx="244" cy="158" r="4.5" fill="#34d399"/>
                        <text x="244" y="182" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Min (- -&gt; +)</text>

                        <!-- Right Panel: Inflection point & tangent crossing -->
                        <rect x="350" y="16" width="314" height="188" rx="12" fill="rgba(168,85,247,0.05)" stroke="#1e293b" stroke-width="1.3"/>
                        <text x="507" y="36" fill="#d8b4fe" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">2. Inflexion (Changement de signe de f'')</text>
                        <!-- Left concave down (f'' < 0, curve below tangent) -->
                        <path d="M 378 164 C 410 72, 468 78, 507 110" fill="none" stroke="#fb7185" stroke-width="2.6"/>
                        <!-- Right concave up (f'' > 0, curve above tangent) -->
                        <path d="M 507 110 C 546 142, 604 148, 636 56" fill="none" stroke="#34d399" stroke-width="2.6"/>
                        <!-- Crossing oblique tangent at inflection -->
                        <line x1="418" y1="88" x2="596" y2="132" stroke="#c084fc" stroke-width="1.9" stroke-dasharray="5,3"/>
                        <circle cx="507" cy="110" r="5" fill="#c084fc" stroke="#ffffff" stroke-width="1.5"/>
                        <text x="424" y="152" fill="#fda4af" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">f'' &lt; 0 (Sous T)</text>
                        <text x="590" y="166" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">f'' &gt; 0 (Sur T)</text>
                        <text x="507" y="74" fill="#e9d5ff" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Point I(x0, f(x0))</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 3. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">تجنب خسارة النقط المجانية</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «الاكتفاء بانعدام $f'(x_0) = 0$ أو $f''(x_0) = 0$»:</b>
                      انعدام المشتقة الأولى <b>لا يكفي أبداً</b> لإثبات وجود مطراف (مثل $x^3$ عند $0$)، وانعدام $f''(x_0)=0$ <b>لا يكفي</b> لإثبات نقطة انعطاف (مثل $x^4$ عند $0$ حيث $f''(x)=12x^2 \\ge 0$ لا تغيّر الإشارة)! اذكر دوماً عبارة <b>«وتغيّر إشارتها»</b>!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «ظن القيمة القصوى المحلية أكبر من القيمة الدنيا المحلية دائماً»:</b>
                      في الدوال غير المعرفة عند مقارب عمودي (مثل $x = -2$)، قد تكون القيمة القصوى المحلية على اليسار <b>أصغر عددياً</b> من القيمة الدنيا المحلية على اليمين ($-6 &lt; -2$)! فالمقارنة في المطارف هي مقارنة <b>محلية</b> فقط!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «نسيان إغلاق المجال في الرتابة بعد الاشتقاق على المجال المفتوح»:</b>
                      إذا كانت $f$ متصلة على $[a, b]$ وقابلة للاشتقاق على $]a, b[$ (مثلاً وجود $\\sqrt{x-a}$) و $f'(x) &gt; 0$ على $]a, b[$، فإن <b>الرتابة تمتد إلى المجال المغلق $[a, b]$</b> بفضل الاتصال!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «تجاهل حالة اختراق المماس عندما تنعدم $f'$ ولا تغير الإشارة»:</b>
                      إذا طلب منك الوطني نقطة انعطاف ولم تعطِك صيغة $f''$ عاملاً بسيطاً أو صعبَ حساب $f''$، تفحّص جدول تغيرات $f'$: إن انعدمت $f'$ في $x_0$ وحافظت على نفس الإشارة ($+\\to+$ أو $-\\to-$) فـ $(x_0, f(x_0))$ نقطة انعطاف حتمية!
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: دراسة رتابة ومطارف وتقعر دالة جذرية متقطعة مع مفاجأة المطارف المحلية</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نعتبر الدالة العددية $f$ المعرفة على $D_f = \\mathbb{R} \\setminus \\{-2\\}$ بما يلي: $f(x) = \\frac{x^2 - 3}{x + 2}$.<br/>
                      <b>1.</b> احسب $f'(x)$ ثم ادرس إشارتها وضع جدول تغيرات $f$ (مع النهايات عند المحدات) محدداً مطارفها المحلية. <span class="text-emerald-400 font-mono">(1.25 ن)</span><br/>
                      <b>2.</b> تحقّق من أن $f(x) = x - 2 + \\frac{1}{x + 2}$ لكل $x \\in D_f$، ثم احسب $f''(x)$ وادرس تقعر المنحنى $(C_f)$ وهل يقبل نقط انعطاف؟ <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. المشتقة الأولى، الرتابة، والمطارف المحلية:</b><br/>
                      • الدالة $f$ جذرية، فهي قابلة للاشتقاق على كل مجال مضمّن في $D_f = \\mathbb{R}\\setminus\\{-2\\}$:<br/>
                      $$f'(x) = \\frac{2x(x + 2) - (x^2 - 3)(1)}{(x + 2)^2} = \\frac{x^2 + 4x + 3}{(x + 2)^2} = \\frac{(x + 1)(x + 3)}{(x + 2)^2}$$
                      • بما أن $(x+2)^2 &gt; 0$ على $D_f$، فإن إشارة $f'(x)$ هي إشارة ثلاثية الحدود $(x+1)(x+3)$:<br/>
                      &nbsp;&nbsp;- على $]-\\infty, -3]$ و $[-1, +\\infty[$: $f'(x) \\ge 0 \\implies$ $f$ تزايدية على هذين المجالين.<br/>
                      &nbsp;&nbsp;- على $[-3, -2[$ و $]-2, -1]$: $f'(x) \\le 0 \\implies$ $f$ تناقصية على هذين المجالين.<br/>
                      • <b>المطارف المحلية:</b><br/>
                      &nbsp;&nbsp;- تنعدم $f'$ في $-3$ وتغيّر إشارتها من $+$ إلى $-$ $\\implies$ $f(-3) = \\frac{9-3}{-1} = -6$ <b>قيمة قصوى محلية</b>!<br/>
                      &nbsp;&nbsp;- تنعدم $f'$ في $-1$ وتغيّر إشارتها من $-$ إلى $+$ $\\implies$ $f(-1) = \\frac{1-3}{1} = -2$ <b>قيمة دنيا محلية</b>!<br/>
                      &nbsp;&nbsp;(لاحظ أن النهايات عند $-2^-$ هي $-\\infty$ وعند $-2^+$ هي $+\\infty$، مما يفسر كون القيمة القصوى المحلية $-6$ أصغر من الدنيا المحلية $-2$). <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                      <p><b>2. المشتقة الثانية وتقعر $(C_f)$:</b><br/>
                      • $(x - 2)(x + 2) + 1 = x^2 - 4 + 1 = x^2 - 3 \\implies f(x) = x - 2 + \\frac{1}{x + 2}$.<br/>
                      • ومنه $f'(x) = 1 - \\frac{1}{(x+2)^2}$ ثم بالاشتقاق مرة ثانية على $D_f$:
                      $$f''(x) = \\frac{2(x + 2)}{(x + 2)^4} = \\frac{2}{(x + 2)^3}$$
                      • بما أن $2 &gt; 0$، فإشارة $f''(x)$ من إشارة $(x+2)$: على $]-\\infty, -2[$ لدينا $f''(x) &lt; 0$ (مقعر نحو الأراتيب السالبة / تحت مماساته)، وعلى $]-2, +\\infty[$ لدينا $f''(x) &gt; 0$ (مقعر نحو الأراتيب الموجبة / فوق مماساته). ولا تنعدم $f''(x)$ في أي نقطة من $D_f$ إذن <b>لا يقبل المنحنى $(C_f)$ أي نقطة انعطاف</b> ($x=-2 \\notin D_f$). <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: تحديد نقط الانعطاف ومعادلة مماس الاختراق لدالة حدودية من الدرجة 4</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.75 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      لتكن الدالة $h$ المعرفة على $\\mathbb{R}$ بـ $h(x) = x^4 - 6x^2 + 4x + 1$.<br/>
                      <b>1.</b> احسب $h'(x)$ ثم $h''(x)$، وادرس تقعر المنحنى $(C_h)$ محدداً إحداثيتي نقطتي الانعطاف $I_1$ و $I_2$. <span class="text-emerald-400 font-mono">(1.25 ن)</span><br/>
                      <b>2.</b> اكتب معادلة المماس $(T)$ للمنحنى $(C_h)$ في نقطة الانعطاف ذات الأفصول الموجب، موضحاً كيف يخترق $(C_h)$ هذا المماس. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. حساب $h'$ و $h''$ والتقعر ونقطتا الانعطاف:</b><br/>
                      • $h$ حدودية فهي قابلة للاشتقاق مرتين على $\\mathbb{R}$:<br/>
                      $h'(x) = 4x^3 - 12x + 4 \\quad \\implies \\quad h''(x) = 12x^2 - 12 = 12(x - 1)(x + 1)$.<br/>
                      • تنعدم $h''(x)$ في $x_1 = -1$ و $x_2 = 1$ مع تغيير الإشارة:<br/>
                      &nbsp;&nbsp;- على $]-\\infty, -1]$ و $[1, +\\infty[$: $h''(x) \\ge 0$ (تقعر نحو الأراتيب الموجبة $\\cup$، المنحنى فوق مماساته).<br/>
                      &nbsp;&nbsp;- على $[-1, 1]$: $h''(x) \\le 0$ (تقعر نحو الأراتيب السالبة $\\cap$، المنحنى تحت مماساته).<br/>
                      • إحداثيتا نقطتي الانعطاف: $h(-1) = 1 - 6 - 4 + 1 = -8 \\implies I_1(-1, -8)$، و $h(1) = 1 - 6 + 4 + 1 = 0 \\implies I_2(1, 0)$. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                      <p><b>2. معادلة المماس عند $I_2(1, 0)$ والاختراق:</b><br/>
                      • $h'(1) = 4(1)^3 - 12(1) + 4 = -4$، إذن معادلة المماس $(T)$ هي:
                      $$y = h'(1)(x - 1) + h(1) = -4(x - 1) + 0 = -4x + 4$$
                      • على يسار $1$ (في $[ -1, 1[$) لدينا $h'' \\le 0$ فيكون $(C_h)$ <b>تحت</b> $(T)$، وعلى يمين $1$ ($]1, +\\infty[$) لدينا $h'' \\ge 0$ فيصبح $(C_h)$ <b>فوق</b> $(T)$: أي أن المنحنى يخترق مماسه في $I_2(1,0)$. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 5. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">مقارنة $(x-1)^3+2$ و $(x-1)^4+2$</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    نعتبر الدالتين $u(x) = (x - 1)^3 + 2$ و $v(x) = (x - 1)^4 + 2$ المعرفتين على $\\mathbb{R}$.<br/>
                    تحقق أن $u'(1) = v'(1) = 0$ و $u''(1) = v''(1) = 0$؛ ثم حدّد بدقة في النقطة $A(1, 2)$ أيّ الدالتين تقبل <b>مطرافاً</b> وأيّهما تقبل <b>نقطة انعطاف بمماس أفقي</b>!
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. بالنسبة للدالة $u(x) = (x - 1)^3 + 2$:</b><br/>
                      • $u'(x) = 3(x - 1)^2 \\ge 0$ (تنعدم في $1$ <b>ولا تغيّر إشارتها</b>) $\\implies u$ تزايدية قطعاً على $\\mathbb{R}$ ولا تقبل أي مطراف في $1$.<br/>
                      • $u''(x) = 6(x - 1)$ تنعدم في $1$ <b>وتغيّر إشارتها</b> ($-$ على $]-\\infty, 1[$ و $+$ على $]1, +\\infty[$) $\\implies$ النقطة $A(1, 2)$ هي <b>نقطة انعطاف بمماس أفقي</b> $y = 2$!</p>
                      <p><b>2. بالنسبة للدالة $v(x) = (x - 1)^4 + 2$:</b><br/>
                      • $v'(x) = 4(x - 1)^3$ تنعدم في $1$ <b>وتغيّر إشارتها</b> من $-$ إلى $+$ $\\implies$ النقطة $A(1, 2)$ توافق <b>قيمة دنيا مطلقة</b> $v(1) = 2$.<br/>
                      • $v''(x) = 12(x - 1)^2 \\ge 0$ تنعدم في $1$ لكنها <b>لا تغيّر إشارتها</b> أبداً $\\implies$ المنحنى $(C_v)$ يقع فوق مماسه دوماً، و <b>لا توجد نقطة انعطاف</b> في $A(1, 2)$!</p>
                    </div>
                  </details>
                </div>
              </div>

`);
