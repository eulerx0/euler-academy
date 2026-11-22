window.EulerAcademy.registerAxis('math-02', 'm02-ax1', `

              <div class="space-y-6">
                <!-- 1. Official Definitions: Derivability at a point, left/right, continuity link -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. قابلية الاشتقاق في نقطة وعلى اليمين وعلى اليسار</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <p class="text-xs text-slate-300 leading-relaxed mb-4">
                    لتكن $f$ دالة عددية معرفة على مجال مفتوح يحتوي على $x_0$ (أو على مجال شكله $[x_0, x_0+r[$ للاشتقاق على اليمين أو $]x_0-r, x_0]$ للاشتقاق على اليسار). تُدرس قابلية الاشتقاق عبر حساب نهاية <b>نسبة التغير</b> (<i>Taux d'accroissement</i>):
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">أ) الاشتقاق في نقطة $x_0$:</b>
                      تكون $f$ <b>قابلة للاشتقاق في $x_0$</b> إذا وُجد عدد حقيقي <b>منتهٍ</b> $\\ell \\in \\mathbb{R}$ بحيث:
                      $$\\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} = \\ell = f'(x_0)$$
                      وبوضع $h = x - x_0$، يكافئ هذا التعريف:
                      $$\\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h} = f'(x_0)$$
                      ويسمى $f'(x_0)$ <b>العدد المشتق</b> للدالة $f$ في $x_0$.
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">ب) الاشتقاق على اليمين وعلى اليسار وربطه بالاتصال:</b>
                      • تكون $f$ قابلة للاشتقاق على يمين $x_0$ إذا كانت $\\lim_{x \\to x_0^+} \\frac{f(x) - f(x_0)}{x - x_0} = f_d'(x_0) \\in \\mathbb{R}$.<br/>
                      • وتكون قابلة للاشتقاق على يسار $x_0$ إذا كانت $\\lim_{x \\to x_0^-} \\frac{f(x) - f(x_0)}{x - x_0} = f_g'(x_0) \\in \\mathbb{R}$.<br/>
                      • <b>خاصية الربط الأساسية:</b>
                      $$f \\text{ dérivable en } x_0 \\iff f_d'(x_0) \\in \\mathbb{R}, \\; f_g'(x_0) \\in \\mathbb{R}, \\; \\text{et } f_d'(x_0) = f_g'(x_0)$$
                      • <b>علاقة الاشتقاق بالاتصال:</b> كل دالة قابلة للاشتقاق في $x_0$ هي <b>متصلة حتماً في $x_0$</b> (والعكس خاطئ؛ وإذا لم تكن متصلة في $x_0$ فهي غير قابلة للاشتقاق تلقائياً!).
                    </div>
                  </div>
                </div>

                <!-- 2. Complete Table of Geometric Interpretations & Affine Approximation -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">2. التأويلات الهندسية الشاملة (المماس وأنصاف المماسات)</span>
                    <span class="text-xs text-amber-400 font-mono">Interprétations Géométriques</span>
                  </div>

                  <div class="overflow-x-auto mb-4">
                    <table class="w-full text-xs text-right border-collapse border border-slate-800 rounded-xl overflow-hidden">
                      <thead class="bg-slate-950 text-slate-300">
                        <tr>
                          <th class="p-2.5 border border-slate-800">نهاية نسبة التغير في $x_0$</th>
                          <th class="p-2.5 border border-slate-800">القرار حول الاشتقاق</th>
                          <th class="p-2.5 border border-slate-800">التأويل الهندسي للمنحنى $(C_f)$ عند $A(x_0, f(x_0))$</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-800/80 text-slate-200">
                        <tr>
                          <td class="p-2.5 font-mono text-cyan-300 border border-slate-800" dir="ltr">$\\lim_{x \\to x_0} \\frac{f(x)-f(x_0)}{x-x_0} = \\ell \\neq 0$</td>
                          <td class="p-2.5 font-bold text-emerald-300 border border-slate-800">قابلة للاشتقاق ($f'(x_0)=\\ell$)</td>
                          <td class="p-2.5 border border-slate-800">مماس مائل معامله الموجه $f'(x_0)$ معادلته: $y = f'(x_0)(x - x_0) + f(x_0)$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-cyan-300 border border-slate-800" dir="ltr">$\\lim_{x \\to x_0} \\frac{f(x)-f(x_0)}{x-x_0} = 0$</td>
                          <td class="p-2.5 font-bold text-emerald-300 border border-slate-800">قابلة للاشتقاق ($f'(x_0)=0$)</td>
                          <td class="p-2.5 border border-slate-800">مماس أفقي (موازٍ لمحور الأفاصيل) معادلته: $y = f(x_0)$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-amber-300 border border-slate-800" dir="ltr">$f_d'(x_0) \\neq f_g'(x_0) \\in \\mathbb{R}$</td>
                          <td class="p-2.5 font-bold text-rose-300 border border-slate-800">غير قابلة للاشتقاق في $x_0$</td>
                          <td class="p-2.5 border border-slate-800"><b>نقطة مزواة (Point anguleux):</b> نصف مماس يميني معامله $f_d'(x_0)$ ونصف مماس يساري معامله $f_g'(x_0)$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-sky-300 border border-slate-800" dir="ltr">$x \\to x_0^+$ تعطي $+\\infty$ أو $x \\to x_0^-$ تعطي $-\\infty$</td>
                          <td class="p-2.5 font-bold text-rose-300 border border-slate-800">غير قابلة للاشتقاق (عمودي)</td>
                          <td class="p-2.5 border border-slate-800"><b>نصف مماس عمودي</b> معادلته $x = x_0$ <b>موجه نحو الأعلى ($\\uparrow$)</b> (جداء الإشارتين: $+ \\cdot + = +$ و $- \\cdot - = +$)</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-rose-300 border border-slate-800" dir="ltr">$x \\to x_0^+$ تعطي $-\\infty$ أو $x \\to x_0^-$ تعطي $+\\infty$</td>
                          <td class="p-2.5 font-bold text-rose-300 border border-slate-800">غير قابلة للاشتقاق (عمودي)</td>
                          <td class="p-2.5 border border-slate-800"><b>نصف مماس عمودي</b> معادلته $x = x_0$ <b>موجه نحو الأسفل ($\\downarrow$)</b> (جداء الإشارتين: $+ \\cdot - = -$ و $- \\cdot + = -$)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="bg-slate-950/90 border border-cyan-500/30 rounded-xl p-3.5 text-xs text-slate-200 leading-relaxed mb-4">
                    <b class="text-cyan-400">📐 التقريب التآلفي لدالة قابلة للاشتقاق (Approximation affine):</b> عندما تقبل $f$ الاشتقاق في $x_0$، فإن منحناها $(C_f)$ ينطبق محلياً على مماسه عند جوار $x_0$: لكل $h$ قريب من $0$:
                    $$f(x_0 + h) \\approx f(x_0) + f'(x_0)\\,h \\qquad \\text{ou bien} \\qquad f(x) \\approx f'(x_0)(x - x_0) + f(x_0)$$
                  </div>

                  <!-- SVG Diagram 1: 4 Geometric Tangent Configurations -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardHalfTangents">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>🖼️ خريطة التأويلات الهندسية الأربعة في النقطة $A(x_0, f(x_0))$</span>
                      <span class="text-[11px] font-mono text-cyan-400">Oblique &bull; Anguleux &bull; Vertical Up/Down</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
                        <div class="flex flex-wrap items-center gap-4">
                          <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-3 h-3 rounded-full bg-cyan-500/40 border border-cyan-400"></span> 1. مماس مائل</span>
                          <span class="flex items-center gap-1.5 text-amber-300"><span class="inline-block w-3 h-3 rounded-full bg-amber-500/40 border border-amber-400"></span> 2. نقطة مزواة</span>
                          <span class="flex items-center gap-1.5 text-emerald-300"><span class="inline-block w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-400"></span> 3. عمودي للأعلى $\\uparrow$</span>
                          <span class="flex items-center gap-1.5 text-rose-300"><span class="inline-block w-3 h-3 rounded-full bg-rose-500/40 border border-rose-400"></span> 4. عمودي للأسفل $\\downarrow$</span>
                        </div>
                        <span class="text-slate-400 font-mono">Sign Rule: (x - x0) * (+/- inf)</span>
                      </div>
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 210" class="w-full h-auto">
                        <defs>
                          <marker id="arrTangentCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#22d3ee"/>
                          </marker>
                          <marker id="arrTangentEm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
                          </marker>
                          <marker id="arrTangentRose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#fb7185"/>
                          </marker>
                        </defs>

                        <!-- Panel 1: Oblique Tangent -->
                        <rect x="14" y="16" width="152" height="178" rx="10" fill="rgba(34,211,238,0.05)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="90" y="36" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1. Tangente f'(x0)</text>
                        <path d="M 30 148 Q 90 128 148 56" fill="none" stroke="#94a3b8" stroke-width="2.2"/>
                        <line x1="38" y1="154" x2="142" y2="70" stroke="#22d3ee" stroke-width="2"/>
                        <circle cx="90" cy="112" r="4" fill="#22d3ee"/>
                        <text x="90" y="176" fill="#cbd5e1" font-size="10.5" font-family="monospace" text-anchor="middle">fd'(x0) = fg'(x0)</text>

                        <!-- Panel 2: Point anguleux -->
                        <rect x="180" y="16" width="152" height="178" rx="10" fill="rgba(251,191,36,0.05)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="256" y="36" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">2. Point Anguleux</text>
                        <path d="M 196 144 Q 226 124 256 84" fill="none" stroke="#94a3b8" stroke-width="2.2"/>
                        <path d="M 256 84 Q 288 106 316 146" fill="none" stroke="#94a3b8" stroke-width="2.2"/>
                        <line x1="256" y1="84" x2="212" y2="128" stroke="#fbbf24" stroke-width="2"/>
                        <line x1="256" y1="84" x2="300" y2="124" stroke="#f59e0b" stroke-width="2"/>
                        <circle cx="256" cy="84" r="4" fill="#fbbf24"/>
                        <text x="256" y="176" fill="#cbd5e1" font-size="10.5" font-family="monospace" text-anchor="middle">fd'(x0) != fg'(x0)</text>

                        <!-- Panel 3: Vertical Half-Tangent UP -->
                        <rect x="346" y="16" width="152" height="178" rx="10" fill="rgba(52,211,153,0.05)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="422" y="36" fill="#6ee7b7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">3. Verticale UP</text>
                        <line x1="386" y1="54" x2="386" y2="152" stroke="#334155" stroke-width="1" stroke-dasharray="3,3"/>
                        <path d="M 386 134 C 386 92, 424 72, 476 62" fill="none" stroke="#94a3b8" stroke-width="2.4"/>
                        <line x1="386" y1="134" x2="386" y2="66" stroke="#34d399" stroke-width="2.4" marker-end="url(#arrTangentEm)"/>
                        <circle cx="386" cy="134" r="4" fill="#34d399"/>
                        <text x="422" y="176" fill="#6ee7b7" font-size="10.5" font-family="monospace" text-anchor="middle">x0+ (+inf) / x0- (-inf)</text>

                        <!-- Panel 4: Vertical Half-Tangent DOWN -->
                        <rect x="512" y="16" width="154" height="178" rx="10" fill="rgba(251,113,133,0.05)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="589" y="36" fill="#fda4af" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">4. Verticale DOWN</text>
                        <line x1="552" y1="54" x2="552" y2="152" stroke="#334155" stroke-width="1" stroke-dasharray="3,3"/>
                        <path d="M 552 68 C 552 110, 594 128, 646 138" fill="none" stroke="#94a3b8" stroke-width="2.4"/>
                        <line x1="552" y1="68" x2="552" y2="136" stroke="#fb7185" stroke-width="2.4" marker-end="url(#arrTangentRose)"/>
                        <circle cx="552" cy="68" r="4" fill="#fb7185"/>
                        <text x="589" y="176" fill="#fda4af" font-size="10.5" font-family="monospace" text-anchor="middle">x0+ (-inf) / x0- (+inf)</text>
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
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «اتجاه نصف المماس العمودي على اليسار ($x \\to x_0^-$)»:</b>
                      عندما نجد $\\lim_{x \\to x_0^-} \\frac{f(x) - f(x_0)}{x - x_0} = +\\infty$، فالمقام $x - x_0 &lt; 0$، ومنه $f(x) &lt; f(x_0)$! إذن نصف المماس العمودي موجه <b>نحو الأسفل ($\\downarrow$)</b> وليس نحو الأعلى! وبالمثل $-\\infty$ على اليسار يُوجَّه <b>نحو الأعلى ($\\uparrow$)</b>!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «تطبيق صيغة $u'/2\\sqrt{u}$ عند حافة الجذر حيث $u(x_0) = 0$»:</b>
                      ممنوع نهائياً اشتقاق $\\sqrt{u(x)}$ بالصيغة المختصرة عند نقطة ينعدم فيها ما داخل الجذر ($u(x_0)=0$)! يجب <b>وجوباً</b> العودة إلى تعريف نسبة التغير $\\lim \\frac{f(x)-f(x_0)}{x-x_0}$ لمعرفة هل يقبل نصف مماس عمودياً أم مماساً أفقياً أو مائلاً!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «نسيان إشارة الجذر التربيعي عند الإدخال تحت الجذر»:</b>
                      عند حساب $\\lim_{x \\to 1^+} \\frac{\\sqrt{x^2-1}}{x-1}$، لدينا $x &gt; 1 \\implies x - 1 = +\\sqrt{(x-1)^2}$. أما إذا كانت الدراسة <b>على اليسار</b> ($x &lt; -1$ في $\\frac{\\sqrt{x^2-1}}{x+1}$)، فإن $x + 1 &lt; 0$ ولذلك نكتب <b>$x + 1 = -\\sqrt{(x+1)^2}$</b>!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «عكس معادلة المماس العمودي والأفقي»:</b>
                      معادلة المماس <b>الأفقي</b> هي <b>$y = f(x_0)$</b>، بينما معادلة نصف المماس <b>العمودي</b> هي <b>$x = x_0$</b> (وليس $y = x_0$)! وفي الدوال المعرفة بأجزاء، تأكد أولاً من <b>الاتصال</b> قبل نسبة التغير إذا لم تكن الدالة معلومة الاتصال.
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: الاشتقاق على اليمين واليسار لدالة معرفة بأجزاء وإثبات أنصاف المماسات</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نعتبر الدالة $f$ المعرفة على $\\mathbb{R}$ بما يلي:
                      $$f(x) = \\begin{cases} x - 1 + \\sqrt{x^2 - 1} &amp; \\text{si } x \\ge 1 \\\\ \\dfrac{x^3 - 1}{x^2 + 1} &amp; \\text{si } x &lt; 1 \\end{cases}$$
                      <b>1.</b> تحقّق من أن $f$ متصلة في $x_0 = 1$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> ادرس قابلية اشتقاق $f$ على يمين $1$ وعلى يسار $1$، مع إعطاء التأويل الهندسي الدقيق في كلتا الحالتين، وهل $f$ قابلة للاشتقاق في $1$؟ <span class="text-emerald-400 font-mono">(1.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. الاتصال في $x_0 = 1$:</b><br/>
                      • لدينا $f(1) = 1 - 1 + \\sqrt{0} = 0$.<br/>
                      • $\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^+} (x - 1 + \\sqrt{x^2-1}) = 0 = f(1)$، و $\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^-} \\frac{x^3-1}{x^2+1} = \\frac{0}{2} = 0 = f(1)$.<br/>
                      بما أن النهايتين يميناً ويساراً تساويان $f(1)$، فإن <b>$f$ متصلة في $1$</b>. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2. دراسة قابلية الاشتقاق على اليمين واليسار في $1$:</b><br/>
                      • <b>على يمين $1$ ($x &gt; 1 \\implies x - 1 &gt; 0$):</b>
                      $$\\lim_{x \\to 1^+} \\frac{f(x) - f(1)}{x - 1} = \\lim_{x \\to 1^+} \\left(1 + \\frac{\\sqrt{(x-1)(x+1)}}{x - 1}\\right) = \\lim_{x \\to 1^+} \\left(1 + \\sqrt{\\frac{x + 1}{x - 1}}\\right) = 1 + \\sqrt{\\frac{2}{0^+}} = +\\infty$$
                      إذن $f$ <b>غير قابلة للاشتقاق على يمين $1$</b>؛ التأويل الهندسي: يقبل $(C_f)$ على يمين النقطة $A(1,0)$ <b>نصف مماس عمودي</b> معادلته $x = 1$ <b>موجه نحو الأعلى ($\\uparrow$)</b>. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      • <b>على يسار $1$ ($x &lt; 1$):</b>
                      $$\\lim_{x \\to 1^-} \\frac{f(x) - f(1)}{x - 1} = \\lim_{x \\to 1^-} \\frac{x^3 - 1}{(x - 1)(x^2 + 1)} = \\lim_{x \\to 1^-} \\frac{x^2 + x + 1}{x^2 + 1} = \\frac{3}{2} \\in \\mathbb{R}$$
                      إذن $f$ <b>قابلة للاشتقاق على يسار $1$</b> و $f_g'(1) = \\frac{3}{2}$؛ التأويل الهندسي: يقبل $(C_f)$ على يسار $A(1,0)$ <b>نصف مماس مائل</b> معامله الموجه $\\frac{3}{2}$ ومعادلته $y = \\frac{3}{2}(x - 1)$ (لـ $x \\le 1$).<br/>
                      • <b>خلاصة:</b> بما أن $f$ غير قابلة للاشتقاق على يمين $1$، فإن $f$ <b>غير قابلة للاشتقاق في $1$</b>. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: توظيف العدد المشتق في النهايات، معادلة المماس، والتقريب التآلفي</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      <b>1.</b> احسب النهاية $\\lim_{x \\to 0} \\frac{\\sqrt{1 + \\sin x} - 1}{x}$ باستعمال تعريف العدد المشتق. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> نعتبر الدالة $g(x) = \\frac{2x - 1}{\\sqrt{x^2 + 3}}$ المعرفة على $\\mathbb{R}$. اكتب معادلة المماس $(T)$ للمنحنى $(C_g)$ في النقطة ذات الأفصول $x_0 = 1$، ثم استنتج قيمة تقريبية للعدد $g(1.02)$ باستعمال التقريب التآلفي. <span class="text-emerald-400 font-mono">(1.00 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. حساب النهاية بالعدد المشتق:</b><br/>
                      نضع $u(x) = \\sqrt{1 + \\sin x}$. بما أن $1 + \\sin x &gt; 0$ على جوار $0$، فإن $u$ قابلة للاشتقاق في $0$، و $u(0) = 1$، ومشتقتها $u'(x) = \\frac{\\cos x}{2\\sqrt{1 + \\sin x}}$؛ ومنه:
                      $$\\lim_{x \\to 0} \\frac{\\sqrt{1 + \\sin x} - 1}{x} = \\lim_{x \\to 0} \\frac{u(x) - u(0)}{x - 0} = u'(0) = \\frac{\\cos 0}{2\\sqrt{1 + \\sin 0}} = \\frac{1}{2}$$
                      <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2. معادلة المماس $(T)$ والتقريب التآلفي:</b><br/>
                      • بما أن $\\forall x \\in \\mathbb{R},\\; x^2+3 \\ge 3 &gt; 0$، فإن $g$ قابلة للاشتقاق على $\\mathbb{R}$، ولدينا $g(1) = \\frac{2(1)-1}{\\sqrt{4}} = \\frac{1}{2}$.<br/>
                      • حساب المشتقة:
                      $$g'(x) = \\frac{2\\sqrt{x^2+3} - (2x-1)\\cdot\\frac{x}{\\sqrt{x^2+3}}}{x^2+3} = \\frac{2(x^2+3) - (2x^2 - x)}{(x^2+3)\\sqrt{x^2+3}} = \\frac{x + 6}{(x^2+3)\\sqrt{x^2+3}}$$
                      إذن $g'(1) = \\frac{1 + 6}{4 \\times 2} = \\frac{7}{8}$.<br/>
                      • معادلة المماس $(T)$ عند $x_0 = 1$:
                      $$y = g'(1)(x - 1) + g(1) \\implies y = \\frac{7}{8}(x - 1) + \\frac{1}{2} = \\frac{7}{8}x - \\frac{3}{8}$$
                      • بالتقريب التآلفي بجوار $1$ ($h = 0.02$):
                      $$g(1.02) \\approx g(1) + g'(1) \\times 0.02 = 0.5 + \\frac{7}{8} \\times 0.02 = 0.5 + 0.0175 = 0.5175$$
                      <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 5. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">فخ انعدام الجذر $(x-2)\\sqrt{x^2-4}$</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    تُعرف الدالة $h$ على $[2, +\\infty[$ بـ $h(x) = (x - 2)\\sqrt{x^2 - 4}$.<br/>
                    هل $h$ قابلة للاشتقاق على يمين $2$ أم تقبل نصف مماس عمودياً في النقطة $(2, 0)$؟ علّل جوابك برهانياً بدقة وحدّد التأويل الهندسي في $(2, 0)$.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>تحطيم الفخ الكلاسيكي:</b> لا يكفي وجود $\\sqrt{x^2-4}$ التي تنعدم في $2$ لنحكم بسرعة بنصف مماس عمودي! نحسب نسبة التغير عند $x \\to 2^+$ حيث $h(2) = 0$:</p>
                      <div class="text-center font-mono text-cyan-300 my-1">
                        $$\\lim_{x \\to 2^+} \\frac{h(x) - h(2)}{x - 2} = \\lim_{x \\to 2^+} \\frac{(x - 2)\\sqrt{x^2 - 4}}{x - 2} = \\lim_{x \\to 2^+} \\sqrt{x^2 - 4} = 0 \\in \\mathbb{R}$$
                      </div>
                      <p><b>النتيجة والتأويل الهندسي:</b> النهاية منتهية وتساوي $0$! إذن الدالة $h$ <b>قابلة للاشتقاق على يمين $2$</b> و $h_d'(2) = 0$؛ ومنحناها $(C_h)$ يقبل في النقطة $(2, 0)$ <b>نصف مماس أفقياً</b> معادلته $y = 0$ موجهاً نحو اليمين (وليس عمودياً!). سبب ذلك أن العامل المضاعف $(x-2)$ أزال التباطؤ اللانهائي للجذر.</p>
                    </div>
                  </details>
                </div>
              </div>

`);
