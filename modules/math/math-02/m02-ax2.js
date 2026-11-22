window.EulerAcademy.registerAxis('math-02', 'm02-ax2', `

              <div class="space-y-6">
                <!-- 1. Differentiability on an interval & Standard Rules -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. الاشتقاق على مجال والعمليات على الدوال المشتقة والمركبة</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <p class="text-xs text-slate-300 leading-relaxed mb-4">
                    تكون $f$ قابلة للاشتقاق على مجال مفتوح $]a, b[$ إذا كانت قابلة للاشتقاق في كل نقطة منه؛ وتكون قابلة للاشتقاق على $[a, b]$ إذا كانت قابلة للاشتقاق على $]a, b[$ وعلى يمين $a$ وعلى يسار $b$. الدوال الحدودية والجذرية والاعتيادية $\\cos, \\sin, \\tan$ قابلة للاشتقاق على كل مجال مضمّن في حيز تعريفها، بينما $x \\mapsto \\sqrt[n]{x}$ ($n \\ge 2$) قابلة للاشتقاق على <b>$]0, +\\infty[$ فقط</b>.
                  </p>

                  <!-- Operations & Composite Table -->
                  <div class="overflow-x-auto mb-4">
                    <table class="w-full text-xs text-right border-collapse border border-slate-800 rounded-xl overflow-hidden">
                      <thead class="bg-slate-950 text-slate-300">
                        <tr>
                          <th class="p-2.5 border border-slate-800">الدالة أو العملية</th>
                          <th class="p-2.5 border border-slate-800">شروط الاشتقاق على مجال $I$</th>
                          <th class="p-2.5 border border-slate-800">الصيغة الدقيقة للدالة المشتقة</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-800/80 text-slate-200">
                        <tr>
                          <td class="p-2.5 font-mono text-cyan-300 border border-slate-800" dir="ltr">$u \\cdot v$</td>
                          <td class="p-2.5 border border-slate-800">$u$ و $v$ قابلتان للاشتقاق على $I$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$(u\\cdot v)' = u'v + u v'$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-cyan-300 border border-slate-800" dir="ltr">$\\dfrac{u}{v}$</td>
                          <td class="p-2.5 border border-slate-800">$u$ و $v$ قابلتان للاشتقاق و $\\forall x \\in I,\\; v(x) \\neq 0$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - u v'}{v^2}$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-emerald-300 border border-slate-800" dir="ltr">$u^p \\; (p \\in \\mathbb{Z}^*)$</td>
                          <td class="p-2.5 border border-slate-800">$u$ قابلة للاشتقاق (و $u(x) \\neq 0$ إذا $p &lt; 0$)</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$(u^p)' = p \\cdot u' \\cdot u^{p-1}$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-amber-300 border border-slate-800" dir="ltr">$\\sqrt{u(x)}$</td>
                          <td class="p-2.5 border border-slate-800">$u$ قابلة للاشتقاق و <b>$u(x) &gt; 0$ قطعاً</b> على $I$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$(\\sqrt{u})' = \\dfrac{u'}{2\\sqrt{u}}$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-amber-300 border border-slate-800" dir="ltr">$\\sqrt[n]{u(x)} \\; (n \\ge 2)$</td>
                          <td class="p-2.5 border border-slate-800">$u$ قابلة للاشتقاق و <b>$u(x) &gt; 0$ قطعاً</b> على $I$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$(\\sqrt[n]{u})' = \\dfrac{u'}{n\\sqrt[n]{u^{n-1}}} = \\dfrac{u'}{n\\,u^{(n-1)/n}}$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-purple-300 border border-slate-800" dir="ltr">$u^r \\; (r \\in \\mathbb{Q}^*)$</td>
                          <td class="p-2.5 border border-slate-800">$u$ قابلة للاشتقاق و <b>$u(x) &gt; 0$ قطعاً</b> على $I$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$(u^r)' = r \\cdot u' \\cdot u^{r-1}$</td>
                        </tr>
                        <tr>
                          <td class="p-2.5 font-mono text-sky-300 border border-slate-800" dir="ltr">$\\cos u, \\; \\sin u$</td>
                          <td class="p-2.5 border border-slate-800">$u$ قابلة للاشتقاق على $I$</td>
                          <td class="p-2.5 font-mono border border-slate-800" dir="ltr">$(\\cos u)' = -u'\\sin u \\; , \\; (\\sin u)' = u'\\cos u$</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- 2. Chain Rule g o f & Inverse Function Derivative Theorem -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">2. اشتقاق المركب $g \\circ f$ ومشتقة الدالة العكسية $f^{-1}$</span>
                    <span class="text-xs text-emerald-400 font-mono">Dérivée de g∘f et f⁻¹</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">🔗 أ) مبرهنة اشتقاق مركب دالتين ($g \\circ f$):</b>
                      إذا كانت $f$ قابلة للاشتقاق في $x_0$ (أو على مجال $I$) وكانت $g$ قابلة للاشتقاق في $f(x_0)$ (أو على مجال $J$ بحيث <b>$f(I) \\subset J$</b>)، فإن $g \\circ f$ قابلة للاشتقاق في $x_0$ (أو على $I$) ولدينا:
                      $$(g \\circ f)'(x) = g'(f(x)) \\cdot f'(x)$$
                      <span class="text-slate-400 block mt-1">• مثال تطبيقي: $(\\tan(u))' = u'(1 + \\tan^2 u) = \\frac{u'}{\\cos^2 u}$ شريطة $u(x) \\neq \\frac{\\pi}{2} + k\\pi$.</span>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">🔄 ب) مبرهنة اشتقاق الدالة العكسية ($f^{-1}$):</b>
                      لتكن $f$ متصلة ورتيبة قطعاً على مجال $I$، فتقبل دالة عكسية $f^{-1}$ معرفة على $J = f(I)$. ليكن $y_0 = f(x_0) \\in J$ حيث $x_0 \\in I$:<br/>
                      • <b>الشرط المزدوج:</b> إذا كانت $f$ قابلة للاشتقاق في $x_0$ <b>وكان $f'(x_0) \\neq 0$</b>، فإن $f^{-1}$ قابلة للاشتقاق في $y_0$ ولدينا:
                      $$(f^{-1})'(y_0) = \\frac{1}{f'(x_0)} = \\frac{1}{f'(f^{-1}(y_0))}$$
                      • <b>على المجال $J$:</b> إذا كانت $f$ قابلة للاشتقاق على $I$ ولا تنعدم $f'$ على $I$، فإن $f^{-1}$ قابلة للاشتقاق على $J$ وتحافظ على نفس رتابة $f$.<br/>
                      • <b>حالة $f'(x_0) = 0$:</b> تصبح $f^{-1}$ <b>غير قابلة للاشتقاق في $y_0$</b> (مماس أفقي لـ $C_f$ يتحول لمماس عمودي لـ $C_{f^{-1}}$).
                    </div>
                  </div>

                  <!-- SVG Diagram 2: Symmetry & Inverse Slope 1/f'(x0) -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardReciprocalDeriv">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📈 التأويل الهندسي لصيغة $(f^{-1})'(y_0) = \\frac{1}{f'(x_0)}$ بالتناظر المحوري حول $y = x$</span>
                      <span class="text-[11px] font-mono text-emerald-400">Slope m &harr; Slope 1/m</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
                        <div class="flex flex-wrap items-center gap-4">
                          <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-3 h-3 rounded-full bg-cyan-500/40 border border-cyan-400"></span> منحنى $f$ ومماسه ميله $f'(x_0)$</span>
                          <span class="flex items-center gap-1.5 text-emerald-300"><span class="inline-block w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-400"></span> منحنى $f^{-1}$ ومماسه ميله $1/f'(x_0)$</span>
                          <span class="flex items-center gap-1.5 text-amber-300"><span class="inline-block w-3 h-3 rounded-full bg-amber-500/40 border border-amber-400"></span> المنصف الأول $\\Delta: y = x$</span>
                        </div>
                        <span class="text-slate-400 font-mono">A(x0, y0) &harr; A'(y0, x0)</span>
                      </div>
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 230" class="w-full h-auto">
                        <defs>
                          <marker id="arrRecipAx" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                        </defs>

                        <!-- Coordinate Axes -->
                        <line x1="75" y1="205" x2="75" y2="18" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrRecipAx)"/>
                        <line x1="55" y1="190" x2="355" y2="190" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrRecipAx)"/>
                        <text x="64" y="24" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="end">y</text>
                        <text x="364" y="194" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="start">x</text>

                        <!-- Bisector y = x -->
                        <line x1="65" y1="200" x2="255" y2="10" stroke="#fbbf24" stroke-width="1.4" stroke-dasharray="5,4"/>
                        <text x="262" y="24" fill="#fbbf24" font-size="11" font-weight="bold" font-family="monospace" text-anchor="start">y = x</text>

                        <!-- Curve f (upper-left convex climb) and point A(115, 112) -->
                        <path d="M 75 182 Q 105 110 165 44" fill="none" stroke="#22d3ee" stroke-width="2.5"/>
                        <line x1="88" y1="162" x2="152" y2="52" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3,2"/>
                        <circle cx="116" cy="112" r="4.5" fill="#22d3ee"/>
                        <text x="98" y="102" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="end">A(x0, y0)</text>

                        <!-- Symmetric Curve f^-1 and point A'(153, 149) -->
                        <path d="M 83 190 Q 155 160 221 100" fill="none" stroke="#34d399" stroke-width="2.5"/>
                        <line x1="103" y1="178" x2="213" y2="114" stroke="#6ee7b7" stroke-width="1.5" stroke-dasharray="3,2"/>
                        <circle cx="153" cy="149" r="4.5" fill="#34d399"/>
                        <text x="166" y="164" fill="#6ee7b7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="start">A'(y0, x0)</text>

                        <!-- Symmetry tie segment -->
                        <line x1="116" y1="112" x2="153" y2="149" stroke="#64748b" stroke-width="1" stroke-dasharray="2,3"/>

                        <!-- Right Summary Info Box -->
                        <rect x="392" y="28" width="268" height="170" rx="12" fill="rgba(15,23,42,0.85)" stroke="#334155" stroke-width="1.4"/>
                        <text x="526" y="54" fill="#f8fafc" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">Bilan Geometrique Crucial</text>
                        <line x1="412" y1="66" x2="640" y2="66" stroke="#334155" stroke-width="1"/>
                        <text x="526" y="92" fill="#67e8f9" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">T en A : pente m = f'(x0)</text>
                        <text x="526" y="118" fill="#6ee7b7" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">T' en A' : pente 1 / f'(x0)</text>
                        <line x1="412" y1="134" x2="640" y2="134" stroke="#334155" stroke-width="1"/>
                        <text x="526" y="158" fill="#fda4af" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Si f'(x0) = 0 (horizontale)</text>
                        <text x="526" y="178" fill="#fda4af" font-size="11" font-family="monospace" text-anchor="middle">-&gt; C_(f^-1) verticale en y0 !</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 3. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">تحرير كامل بدون ثغرات</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «تعويض $y_0$ في $f'$ بدل $x_0$ عند حساب $(f^{-1})'(y_0)$»:</b>
                      أفدح خطأ في الوطني هو كتابة $(f^{-1})'(y_0) = \\frac{1}{f'(y_0)}$! القاعدة هي <b>$(f^{-1})'(y_0) = \\frac{1}{f'(x_0)}$</b> حيث <b>$x_0 = f^{-1}(y_0)$ هو السابق</b> الذي يحقق $f(x_0) = y_0$.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «إغفال التبرير الصريح لـ $u(x) &gt; 0$ قبل اشتقاق $\\sqrt[n]{u(x)}$»:</b>
                      في معيار التصحيح الرسمي، لا تُمنح النقطة كاملة لاشتقاق $\\sqrt{u}$ أو $\\sqrt[n]{u}$ إلا بعد كتابة الجملة: «الدالة $u$ قابلة للاشتقاق على $I$ <b>وموجبة قطعاً ($u(x) &gt; 0$) على $I$</b>»، مع فتح المجال عند نقاط الانعدام!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «نسيان $u'(x)$ في البسط عند اشتقاق $\\sqrt[n]{u(x)}$»:</b>
                      تذكر دوماً: $(\\sqrt[3]{u})' = \\frac{u'}{3\\sqrt[3]{u^2}}$ وليس $\\frac{1}{3\\sqrt[3]{u^2}}$! وعند اشتقاق $(g \\circ f)(x)$ نضرب دائماً في المشتقة الداخلية $f'(x)$.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «تجاهل شرط $f'(x_0) \\neq 0$ في مبرهنة $(f^{-1})'$»:</b>
                      مجرد كون $f$ تقابلاً قابلاً للاشتقاق في $x_0$ <b>لا يكفي</b>! إذا كان $f'(x_0) = 0$ فالمقام ينعدم وتكون $f^{-1}$ غير قابلة للاشتقاق في $y_0 = f(x_0)$ (مثال: $x \\mapsto x^3$ عند $0$).
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: اشتقاق دالة جذرية من الرتبة $3$ ومركب دالتين مثلثيتين مع التعليل الكامل</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.75 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نعتبر الدالتين المعرفتين على $\\mathbb{R}$ بـ:
                      $$f(x) = \\sqrt[3]{(x^2 + 1)^2} \\qquad \\text{et} \\qquad g(x) = \\cos\\!\\left(\\sqrt{x^2 + 1}\\right)$$
                      علّل قابلية اشتقاق $f$ و $g$ على $\\mathbb{R}$، ثم احسب $f'(x)$ و $g'(x)$ لكل $x \\in \\mathbb{R}$.
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. تعليل وحساب $f'(x)$:</b><br/>
                      • الدالة $v(x) = (x^2 + 1)^2$ حدودية، فهي قابلة للاشتقاق على $\\mathbb{R}$، ولدينا $\\forall x \\in \\mathbb{R},\\; x^2 + 1 \\ge 1 \\implies v(x) = (x^2+1)^2 \\ge 1 &gt; 0$ قطعاً!<br/>
                      • إذن $f(x) = \\sqrt[3]{v(x)} = (x^2+1)^{2/3}$ قابلة للاشتقاق على $\\mathbb{R}$، ولكل $x \\in \\mathbb{R}$:
                      $$f'(x) = \\frac{2}{3} \\cdot (x^2 + 1)' \\cdot (x^2 + 1)^{\\frac{2}{3} - 1} = \\frac{2}{3} \\cdot 2x \\cdot (x^2 + 1)^{-1/3} = \\frac{4x}{3\\sqrt[3]{x^2 + 1}}$$
                      <span class="text-emerald-400 font-mono">(0.90 ن)</span></p>
                      <p><b>2. تعليل وحساب $g'(x)$ (اشتقاق المركب $h \\circ u$):</b><br/>
                      • نضع $u(x) = \\sqrt{x^2+1}$ و $h(t) = \\cos t$. بما أن $x^2+1 \\ge 1 &gt; 0$، فإن $u$ قابلة للاشتقاق على $\\mathbb{R}$ و $u'(x) = \\frac{2x}{2\\sqrt{x^2+1}} = \\frac{x}{\\sqrt{x^2+1}}$.<br/>
                      • وبما أن $h: t \\mapsto \\cos t$ قابلة للاشتقاق على $\\mathbb{R}$ (ومنه $u(\\mathbb{R}) \\subset \\mathbb{R}$)، فإن $g = h \\circ u$ قابلة للاشتقاق على $\\mathbb{R}$ ولدينا:
                      $$g'(x) = u'(x) \\cdot h'(u(x)) = -\\frac{x}{\\sqrt{x^2 + 1}} \\cdot \\sin\\!\\left(\\sqrt{x^2 + 1}\\right)$$
                      <span class="text-emerald-400 font-mono">(0.85 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: حساب $(f^{-1})'(y_0)$ ومعادلة المماس لـ $(C_{f^{-1}})$ دون تحديد $f^{-1}(x)$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.75 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      لتكن $f$ الدالة العددية المعرفة على $\\mathbb{R}$ بما يلي: $f(x) = x^3 + 2x - 1$.<br/>
                      <b>1.</b> بيّن أن $f$ تقبل دالة عكسية $f^{-1}$ معرفة على مجال $J$ يتم تحديده بدقة. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> احسب $f(1)$، ثم بيّن أن $f^{-1}$ قابلة للاشتقاق في $y_0 = 2$ واحسب $(f^{-1})'(2)$، ثم استنتج معادلة المماس $(T')$ للمنحنى $(C_{f^{-1}})$ في النقطة ذات الأفصول $2$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>3.</b> بيّن أن $f^{-1}$ قابلة للاشتقاق على $\\mathbb{R}$ وعبّر عن $(f^{-1})'(y)$ بدلالة $f^{-1}(y)$ لكل $y \\in \\mathbb{R}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. إثبات التقابل وتحديد المجال $J$:</b><br/>
                      • $f$ دالة حدودية، إذن هي متصلة وقابلة للاشتقاق على $\\mathbb{R}$، ولكل $x \\in \\mathbb{R}$: $f'(x) = 3x^2 + 2 \\ge 2 &gt; 0$.<br/>
                      • ومنه $f$ متصلة وتزايدية قطعاً على $\\mathbb{R}$، فهي تقابل من $\\mathbb{R}$ نحو $J = f(\\mathbb{R}) = ]\\lim_{-\\infty} f, \\lim_{+\\infty} f[ = \\mathbb{R}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2. قابلية اشتقاق $f^{-1}$ في $y_0 = 2$ ومعادلة المماس:</b><br/>
                      • لدينا $f(1) = 1^3 + 2(1) - 1 = 2 \\iff f^{-1}(2) = 1$.<br/>
                      • الدالة $f$ قابلة للاشتقاق في $x_0 = 1$ و $f'(1) = 3(1)^2 + 2 = 5 \\neq 0$؛ إذن <b>$f^{-1}$ قابلة للاشتقاق في $y_0 = 2$</b> ولدينا:
                      $$(f^{-1})'(2) = \\frac{1}{f'(1)} = \\frac{1}{5}$$
                      • معادلة المماس $(T')$ للمنحنى $(C_{f^{-1}})$ في النقطة $(2, f^{-1}(2)) = (2, 1)$:
                      $$y = (f^{-1})'(2)(x - 2) + f^{-1}(2) = \\frac{1}{5}(x - 2) + 1 = \\frac{1}{5}x + \\frac{3}{5}$$
                      <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>3. الاشتقاق على $\\mathbb{R}$ وصيغة $(f^{-1})'(y)$:</b><br/>
                      بما أن $f$ قابلة للاشتقاق على $\\mathbb{R}$ ومشتقتها لا تنعدم ($\\forall x \\in \\mathbb{R},\\; f'(x) = 3x^2+2 &gt; 0$)، فإن $f^{-1}$ قابلة للاشتقاق على $\\mathbb{R}$، ولكل $y \\in \\mathbb{R}$:
                      $$(f^{-1})'(y) = \\frac{1}{f'(f^{-1}(y))} = \\frac{1}{3\\,[f^{-1}(y)]^2 + 2}$$
                      <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 5. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">حالة انعدام $f'(x_0) = 0$ على $f^{-1}$</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    لتكن $f(x) = x^3 - 3x^2 + 3x$ المعرفة على $\\mathbb{R}$.<br/>
                    1) بيّن أن $f$ متصلة وتزايدية قطعاً على $\\mathbb{R}$ وتقبل دالة عكسية $f^{-1}$ على $\\mathbb{R}$ رغم أن $f'(1) = 0$.<br/>
                    2) احسب $f(1)$ واستنتج هل $f^{-1}$ قابلة للاشتقاق في $y_0 = 1$، محدداً التأويل الهندسي لـ $(C_{f^{-1}})$ في $(1, 1)$ مع التحقق بالصيغة الصريحة لـ $f^{-1}(y)$.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. التقابل:</b> $f$ حدودية متصلة وقابلة للاشتقاق على $\\mathbb{R}$ و $f'(x) = 3x^2 - 6x + 3 = 3(x - 1)^2 \\ge 0$ وتنعدم فقط عند نقطة معزولة $x_0 = 1$. إذن $f$ <b>تزايدية قطعاً على $\\mathbb{R}$</b>، وتقبل دالة عكسية $f^{-1}$ معرفة على $f(\\mathbb{R}) = \\mathbb{R}$.</p>
                      <p><b>2. عدم قابلية اشتقاق $f^{-1}$ في $y_0 = 1$:</b> لدينا $f(1) = 1 - 3 + 3 = 1$ ولكن $f'(1) = 0$! بما أن $(C_f)$ يقبل مماساً أفقياً في $(1, 1)$، فإن $(C_{f^{-1}})$ يقبل بالتناظر حول $y=x$ <b>مماساً عمودياً معادلته $x = 1$</b>، وبالتالي $f^{-1}$ <b>غير قابلة للاشتقاق في $y_0 = 1$</b>!<br/>
                      • <b>التحقق بالصيغة الصريحة:</b> نلاحظ أن $f(x) = (x - 1)^3 + 1 = y \\iff x = 1 + \\sqrt[3]{y - 1}$! وبحساب نسبة التغير لـ $f^{-1}$ في $1$:
                      $$\\lim_{y \\to 1} \\frac{f^{-1}(y) - f^{-1}(1)}{y - 1} = \\lim_{y \\to 1} \\frac{\\sqrt[3]{y - 1}}{y - 1} = \\lim_{y \\to 1} \\frac{1}{\\sqrt[3]{(y - 1)^2}} = +\\infty$$
                      مما يؤكد كلياً عدم قابلية الاشتقاق ووجود المماس العمودي!</p>
                    </div>
                  </details>
                </div>
              </div>

`);
