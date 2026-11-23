window.EulerAcademy.registerAxis('math-02', 'm02-ax4', `

              <div class="space-y-6">
                <!-- 1. Official Classification of Infinite Branches & Asymptotes -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. الفروع اللانهائية والمقاربات الأفقية والعمودية والمائلة والفروع الشلجمية</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <p class="text-xs text-slate-300 leading-relaxed mb-4">
                    تُدرس الفروع اللانهائية عندما تؤول إحدى إحداثيتي نقطة من المنحنى ($x$ أو $f(x)$) إلى اللانهاية ($\\pm\\infty$). يتبع التلميذ المخطط المنهجي الرسمي للتمييز بين <b>المقاربات</b> و<b>الفروع الشلجمية</b> دون أي قفز في المراحل:
                  </p>

                  <div class="overflow-x-auto mb-4">
                    <table class="w-full text-xs text-right border-collapse border border-slate-800 rounded-xl overflow-hidden">
                      <thead class="bg-slate-950 text-slate-300">
                        <tr>
                          <th class="p-2.5 border border-slate-800">الشرط / النهاية المحسوبة</th>
                          <th class="p-2.5 border border-slate-800">النتيجة</th>
                          <th class="p-2.5 border border-slate-800">التأويل الهندسي الدقيق للمنحنى $(C_f)$</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-800/80 text-slate-200">
                        <tr>
                          <td class="p-2.5 font-mono text-rose-300 border border-slate-800" dir="ltr">$\\lim_{x \\to a^+} f(x) = \\pm\\infty$ أو $x \\to a^-$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\pm\\infty$</td>
                          <td class="p-2.5 border border-slate-800">المستقيم ذو المعادلة <b>$x = a$ مقارب عمودي</b> (Asymptote verticale)</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-cyan-300 border border-slate-800" dir="ltr">$\\lim_{x \\to \\pm\\infty} f(x) = b$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$b \\in \\mathbb{R}$</td>
                          <td class="p-2.5 border border-slate-800">المستقيم ذو المعادلة <b>$y = b$ مقارب أفقي</b> (Asymptote horizontale) بجوار $\\pm\\infty$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-amber-300 border border-slate-800" dir="ltr">$\\lim_{x \\to \\pm\\infty} f(x) = \\pm\\infty$ ثم $\\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$0$</td>
                          <td class="p-2.5 border border-slate-800"><b>فرع شلجمي اتجاهه محور الأفاصيل</b> $(Ox)$ بجوار $\\pm\\infty$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-amber-300 border border-slate-800" dir="ltr">$\\lim_{x \\to \\pm\\infty} f(x) = \\pm\\infty$ ثم $\\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\pm\\infty$</td>
                          <td class="p-2.5 border border-slate-800"><b>فرع شلجمي اتجاهه محور الأراتيب</b> $(Oy)$ بجوار $\\pm\\infty$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-purple-300 border border-slate-800" dir="ltr">$\\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x} = a \\in \\mathbb{R}^*$ ثم $\\lim_{x \\to \\pm\\infty} (f(x) - ax)$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\pm\\infty$</td>
                          <td class="p-2.5 border border-slate-800"><b>فرع شلجمي اتجاهه المستقيم ذو المعادلة $y = ax$</b> بجوار $\\pm\\infty$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-emerald-300 border border-slate-800" dir="ltr">$\\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x} = a \\in \\mathbb{R}^*$ ثم $\\lim_{x \\to \\pm\\infty} (f(x) - ax)$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$b \\in \\mathbb{R}$</td>
                          <td class="p-2.5 border border-slate-800">المستقيم <b>$(D): y = ax + b$ مقارب مائل</b> (Asymptote oblique) بجوار $\\pm\\infty$</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="bg-slate-950/90 border border-emerald-500/30 rounded-xl p-3.5 text-xs text-slate-200 leading-relaxed mb-4">
                    <b class="text-emerald-400">📐 الصيغة المباشرة للمقارب المائل والوضع النسبي:</b> إذا أُعطي لك المقارب $(D): y = ax+b$ في نص التمرين، يكفي التحقق من <b>$\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$</b>. ولدراسة <b>الوضع النسبي</b> لـ $(C_f)$ و $(D)$ ندرس إشارة الفرق $f(x) - (ax + b)$: موجب $\\implies (C_f)$ فوق $(D)$، وسالب $\\implies (C_f)$ تحت $(D)$.
                  </div>

                  <!-- SVG Diagram 2: Decision Tree for Infinite Branches -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardBranchesInfinies">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>🌳 الشجرة التقريرية الشاملة للفروع اللانهائية عند $\\pm\\infty$</span>
                      <span class="text-[11px] font-mono text-cyan-400">f(x) -&gt; +/- inf &rArr; f(x)/x &rArr; f(x) - ax</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
                        <div class="flex flex-wrap items-center gap-4">
                          <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-3 h-3 rounded-full bg-cyan-500/40 border border-cyan-400"></span> مقاربات (أفقي / مائل)</span>
                          <span class="flex items-center gap-1.5 text-amber-300"><span class="inline-block w-3 h-3 rounded-full bg-amber-500/40 border border-amber-400"></span> فروع شلجمية ($Ox$, $Oy$, $y=ax$)</span>
                        </div>
                        <span class="text-slate-400 font-mono">Ne jamais sauter l'etape f(x) - ax</span>
                      </div>
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 235" class="w-full h-auto">
                        <defs>
                          <marker id="arrBranch" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                        </defs>

                        <!-- Root node -->
                        <rect x="20" y="92" width="136" height="52" rx="10" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" stroke-width="1.5"/>
                        <text x="88" y="114" fill="#67e8f9" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">lim f(x) = ?</text>
                        <text x="88" y="132" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">(x -&gt; +/- inf)</text>

                        <!-- Top Branch: = b in R -> Asymptote horizontale -->
                        <line x1="156" y1="104" x2="212" y2="42" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrBranch)"/>
                        <rect x="216" y="18" width="212" height="44" rx="10" fill="rgba(52,211,153,0.10)" stroke="#34d399" stroke-width="1.5"/>
                        <text x="322" y="37" fill="#6ee7b7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">= b in R  ==&gt;  y = b</text>
                        <text x="322" y="53" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">Asymptote horizontale</text>

                        <!-- Bottom Branch: = +/- inf -> Compute f(x)/x -->
                        <line x1="156" y1="130" x2="212" y2="156" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrBranch)"/>
                        <rect x="216" y="132" width="144" height="50" rx="10" fill="rgba(251,191,36,0.08)" stroke="#fbbf24" stroke-width="1.5"/>
                        <text x="288" y="153" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">= +/- inf</text>
                        <text x="288" y="170" fill="#cbd5e1" font-size="10.5" font-family="monospace" text-anchor="middle">Calcul: lim f(x)/x</text>

                        <!-- 3 Outputs of f(x)/x -->
                        <!-- 0 -> BP Ox -->
                        <line x1="360" y1="142" x2="428" y2="96" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#arrBranch)"/>
                        <rect x="432" y="76" width="232" height="36" rx="8" fill="rgba(251,191,36,0.06)" stroke="#f59e0b" stroke-width="1.3"/>
                        <text x="548" y="98" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">= 0 ==&gt; B.P. direction (Ox)</text>

                        <!-- +/- inf -> BP Oy -->
                        <line x1="360" y1="156" x2="428" y2="142" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#arrBranch)"/>
                        <rect x="432" y="122" width="232" height="36" rx="8" fill="rgba(251,191,36,0.06)" stroke="#f59e0b" stroke-width="1.3"/>
                        <text x="548" y="144" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">= +/-inf ==&gt; B.P. direction (Oy)</text>

                        <!-- a != 0 -> f(x)-ax split -->
                        <line x1="360" y1="172" x2="428" y2="194" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#arrBranch)"/>
                        <rect x="432" y="168" width="232" height="54" rx="8" fill="rgba(168,85,247,0.10)" stroke="#c084fc" stroke-width="1.4"/>
                        <text x="548" y="186" fill="#e9d5ff" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">= a != 0 ==&gt; lim(f(x) - ax)</text>
                        <text x="548" y="202" fill="#6ee7b7" font-size="10" font-family="monospace" text-anchor="middle">-&gt; b in R: Asymp. obliq. y=ax+b</text>
                        <text x="548" y="216" fill="#fda4af" font-size="10" font-family="monospace" text-anchor="middle">-&gt; +/-inf: B.P. dir. y = ax</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Elements of Symmetry (Axis & Center) + Parity -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-purple-500/15 text-purple-300 text-xs font-bold">2. عناصر تماثل المنحنى $(C_f)$ والشفعية (Axes &amp; Centres de symétrie)</span>
                    <span class="text-xs text-purple-400 font-mono">شرطان إلزاميان</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">🪞 أ) محور التماثل $(D): x = a$ (والدالة الزوجية $a=0$):</b>
                      يكون المستقيم ذو المعادلة $x = a$ <b>محور تماثل</b> للمنحنى $(C_f)$ إذا وفقط إذا تحقق الشرطان معاً:
                      $$\\forall x \\in D_f, \\quad 2a - x \\in D_f \\qquad \\text{et} \\qquad f(2a - x) = f(x)$$
                      • <b>حالة خاصة ($a=0$):</b> إذا كان $-x \\in D_f$ و $f(-x) = f(x)$ فالدالة <b>زوجية</b>، ومحور الأراتيب ($x=0$) محور تماثل.
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">🎯 ب) مركز التماثل $\\Omega(a, b)$ (والدالة الفردية $\\Omega(0,0)$):</b>
                      تكون النقطة $\\Omega(a, b)$ <b>مركز تماثل</b> للمنحنى $(C_f)$ إذا وفقط إذا تحقق الشرطان معاً:
                      $$\\forall x \\in D_f, \\quad 2a - x \\in D_f \\qquad \\text{et} \\qquad f(2a - x) + f(x) = 2b$$
                      • <b>حالة خاصة ($a=0, b=0$):</b> إذا كان $-x \\in D_f$ و $f(-x) = -f(x)$ فالدالة <b>فردية</b>، وأصل المعلم $O(0,0)$ مركز تماثل.
                    </div>
                  </div>
                </div>

                <!-- 3. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">احذر ضياع النقط المضمونة</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «التسرع بإعلان مقارب مائل عند إيجاد $\\lim \\frac{f(x)}{x} = a \\neq 0$»:</b>
                      إياك! قد يساوي $\\lim_{x\\to+\\infty}(f(x)-ax)$ اللانهاية ($\\pm\\infty$)، وعندئذ يكون للمنحنى <b>فرع شلجمي اتجاهه $y = ax$</b> وليس مقارباً مائلاً أبداً!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «نسيان الشرط الأول $\\forall x \\in D_f, \\; 2a - x \\in D_f$»:</b>
                      في الامتحان الوطني تُخصص نصف النقطة للتحقق الصريح من تماثل حيز التعريف ($x \\in D_f \\implies 2a - x \\in D_f$)! اختزاله بالحساب الجبري فقط يُفقدك نصف النقطة.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «إهمال إشارة $x$ عند $-\\infty$ في الدوال اللاجذرية»:</b>
                      عند حساب $\\lim_{x \\to -\\infty} \\frac{\\sqrt{x^2+3}}{x}$، تذكّر أن $x &lt; 0 \\implies \\sqrt{x^2} = |x| = -x$! هذه الإشارة السالبة قد تقلب تماماً معادلة المقارب المائل بين $+\\infty$ و $-\\infty$.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «نسيان المعامل $2$ في مركز التماثل $f(2a-x) + f(x) = 2b$»:</b>
                      قيمة $b$ هي منتصف المجموع $\\frac{f(2a-x)+f(x)}{2} = b$؛ فإذا نسيت ضرب $b$ في $2$ لن يتطابق البسط أبداً!
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: مقارنة المقاربين المائلين لدالة لاجذرية بجوار $+\\infty$ وبجوار $-\\infty$ مع الوضع النسبي</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نعتبر الدالة $f$ المعرفة على $\\mathbb{R}$ بـ $f(x) = 2x - 1 - \\sqrt{x^2 + 3}$.<br/>
                      <b>1.</b> احسب $\\lim_{x\\to+\\infty} f(x)$، ثم استنتج معادلة المقارب المائل $(D_1)$ لـ $(C_f)$ بجوار $+\\infty$ وادرس الوضع النسبي لـ $(C_f)$ و $(D_1)$ على $\\mathbb{R}$. <span class="text-emerald-400 font-mono">(1.25 ن)</span><br/>
                      <b>2.</b> ادرس الفرع اللانهائي للمنحنى $(C_f)$ بجوار $-\\infty$ محدداً معادلة المقارب المائل $(D_2)$. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. الفرع اللانهائي بجوار $+\\infty$ والوضع النسبي:</b><br/>
                      • بالتعميل بـ $x &gt; 0$ ($\\sqrt{x^2}=x$):
                      $$\\lim_{x\\to+\\infty} f(x) = \\lim_{x\\to+\\infty} x\\left(2 - \\frac{1}{x} - \\sqrt{1 + \\frac{3}{x^2}}\\right) = (+\\infty)(2 - 0 - 1) = +\\infty$$
                      • نحسب $\\lim_{x\\to+\\infty} \\frac{f(x)}{x} = 2 - 1 = 1 = a$. ثم نحسب $\\lim_{x\\to+\\infty} (f(x) - x)$ باستعمال المرافق:
                      $$\\lim_{x\\to+\\infty} (x - \\sqrt{x^2+3} - 1) = \\lim_{x\\to+\\infty} \\left(\\frac{x^2 - (x^2+3)}{x + \\sqrt{x^2+3}} - 1\\right) = \\lim_{x\\to+\\infty} \\left(\\frac{-3}{x + \\sqrt{x^2+3}} - 1\\right) = 0 - 1 = -1$$
                      إذن يقبل $(C_f)$ <b>مقارباً مائلاً $(D_1)$ معادلته $y = x - 1$</b> بجوار $+\\infty$.<br/>
                      • <b>الوضع النسبي:</b> لكل $x \\in \\mathbb{R}$، لدينا $f(x) - (x - 1) = x - \\sqrt{x^2 + 3} = \\frac{-3}{x + \\sqrt{x^2+3}}$ أو لأن $\\sqrt{x^2+3} &gt; |x| \\ge x \\implies f(x) - (x-1) &lt; 0$. ومنه المنحنى <b>$(C_f)$ يوجد دائماً تحت المستقيم $(D_1)$</b>. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                      <p><b>2. الفرع اللانهائي بجوار $-\\infty$ (انتبه لإشارة $x &lt; 0$!):</b><br/>
                      • عند $x &lt; 0$، $\\sqrt{x^2+3} = -x\\sqrt{1 + \\frac{3}{x^2}}$، ومنه $f(x) = x\\left(2 - \\frac{1}{x} + \\sqrt{1 + \\frac{3}{x^2}}\\right) \\xrightarrow[x\\to-\\infty]{} (-\\infty)(3) = -\\infty$.<br/>
                      • نحسب $\\lim_{x\\to-\\infty} \\frac{f(x)}{x} = 2 + 1 = 3$، ثم نحسب:
                      $$\\lim_{x\\to-\\infty} (f(x) - 3x) = \\lim_{x\\to-\\infty} (-x - \\sqrt{x^2+3} - 1) = \\lim_{x\\to-\\infty} \\left(\\frac{x^2 - (x^2+3)}{-x + \\sqrt{x^2+3}} - 1\\right) = 0 - 1 = -1$$
                      (لأن $-x &gt; 0$ عند $x \\to -\\infty$ فالمقام يؤول إلى $+\\infty$). إذن يقبل $(C_f)$ <b>مقارباً مائلاً مختلفاً $(D_2)$ معادلته $y = 3x - 1$</b> بجوار $-\\infty$. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: إثبات مركز تماثل $(a, b)$ لدالة جذرية وفق الشرطين الإجباريين</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      لتكن الدالة $g$ المعرفة على $D_g = \\mathbb{R} \\setminus \\{1\\}$ بما يلي: $g(x) = \\frac{2x^2 - 5x + 4}{x - 1}$.<br/>
                      بيّن أن النقطة $\\Omega(1, -1)$ <b>مركز تماثل</b> للمنحنى $(C_g)$.
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>• الشرط الأول (تماثل حيز التعريف حول $a = 1$):</b><br/>
                      ليكن $x \\in D_g \\iff x \\neq 1 \\iff -x \\neq -1 \\iff 2 - x \\neq 1 \\iff 2(1) - x \\in D_g$. الشرط الأول محقق. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>• الشرط الثاني ($g(2a - x) + g(x) = 2b$ مع $2b = -2$):</b><br/>
                      نكتب أولاً $g(x)$ بشكل مبسط بالقسمة الإقليدية:
                      $$g(x) = \\frac{2x(x-1) - 3(x-1) + 1}{x - 1} = 2x - 3 + \\frac{1}{x - 1}$$
                      نعوّض $x$ بـ $(2 - x)$ لكل $x \\in D_g$:
                      $$g(2 - x) = 2(2 - x) - 3 + \\frac{1}{(2 - x) - 1} = 1 - 2x + \\frac{1}{1 - x} = 1 - 2x - \\frac{1}{x - 1}$$
                      ومنه بالجمع نجد مباشرة:
                      $$g(2 - x) + g(x) = \\left(1 - 2x - \\frac{1}{x - 1}\\right) + \\left(2x - 3 + \\frac{1}{x - 1}\\right) = -2 = 2(-1)$$
                      إذن النقطة <b>$\\Omega(1, -1)$ مركز تماثل</b> للمنحنى $(C_g)$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 5. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">فخ الفرع الشلجمي المائل مقابل المقارب المائل</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    لتكن $k(x) = x - 2\\sqrt{x} + 3$ المعرفة على $[0, +\\infty[$.<br/>
                    احسب $\\lim_{x\\to+\\infty} \\frac{k(x)}{x}$ ثم $\\lim_{x\\to+\\infty} (k(x) - x)$، واستنتج هل للمنحنى $(C_k)$ مقارب مائل أم فرع شلجمي بجوار $+\\infty$؟
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. نهاية $\\frac{k(x)}{x}$ عند $+\\infty$:</b><br/>
                      $$\\lim_{x\\to+\\infty} \\frac{k(x)}{x} = \\lim_{x\\to+\\infty} \\left(1 - \\frac{2}{\\sqrt{x}} + \\frac{3}{x}\\right) = 1 \\in \\mathbb{R}^*$$</p>
                      <p><b>2. نهاية $(k(x) - 1 \\cdot x)$ والاستنتاج الحاسم:</b><br/>
                      $$\\lim_{x\\to+\\infty} (k(x) - x) = \\lim_{x\\to+\\infty} (-2\\sqrt{x} + 3) = -\\infty$$
                      <b>التأويل الهندسي:</b> بما أن هذه النهاية ليست عدداً حقيقياً بل $-\\infty$، فالمستقيم $y=x$ <b>ليس مقارباً مائلاً</b>! بل يقبل $(C_k)$ <b>فرعاً شلجمياً اتجاهه المستقيم ذو المعادلة $y = x$</b> بجوار $+\\infty$.</p>
                    </div>
                  </details>
                </div>
              </div>

`);
