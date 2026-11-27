window.EulerAcademy.registerAxis('phys-04', 'p04-ax2', `

              <div class="space-y-6">
                <!-- 1. Radioactive Decay Law, Time Constant tau, Half-life t1/2 & Activity -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">1. قانون التناقص الإشعاعي $N(t)=N_0 e^{-\\lambda t}$، ثابتة الزمن $\\tau$، عمر النصف $t_{1/2}$، والتأريخ بالنشاط $a(t)$</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">📉 أ) قانون التناقص الإشعاعي وتناقص الكتلة وكمية المادة:</b>
                      • يتناسب عدد النوى المتفتتة $-dN$ خلال مدة زمنية وجيزة $dt$ طردياً مع عدد النوى المتبقية $N(t)$ و $dt$: $\\frac{dN}{dt} + \\lambda N(t) = 0$. بحل المعادلة التفاضلية نحصل على <b>قانون التناقص الإشعاعي</b>:
                      $$N(t) = N_0 e^{-\\lambda t}$$
                      • <b>الصيغ المكافئة (التناسب مع الكتلة $m$ وكمية المادة $n$):</b> بما أن $N(t) = n(t) N_A = \\frac{m(t)}{M} N_A$:
                      <div class=\"text-center my-1\">$m(t) = m_0 e^{-\\lambda t}$ &nbsp;و&nbsp; $n(t) = n_0 e^{-\\lambda t}$</div>
                      • <b>عدد النوى المتفتتة (أو المتولدة $N_{\\text{fils}}$):</b>
                      $$N_d(t) = N_0 - N(t) = N_0\\left(1 - e^{-\\lambda t}\\right)$$
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">⏳ ب) ثابتة الزمن $\\tau$، عمر النصف $t_{1/2}$، والنشاط $a(t)$:</b>
                      • <b>ثابتة الإشعاع $\\lambda$ وثابتة الزمن $\\tau$:</b> $\\tau = \\frac{1}{\\lambda}$. من معادلة الأبعاد $\\left[\\lambda\\right] = \\text{T}^{-1}$ ($\\text{s}^{-1}$) و $\\left[\\tau\\right] = \\text{T}$ ($\\text{s}$). مبيانياً: تقاطع مماس المنحنى $N(t)$ عند $t=0$ مع محور الزمن، أو $N(\\tau) = N_0 e^{-1} \\approx 0.37\\,N_0$.<br/>
                      • <b>عمر النصف $t_{1/2}$ (Demi-vie):</b> المدة اللازمة لتفتت نصف نوى العينة البدئية ($N(t_{1/2}) = \\frac{N_0}{2}$):
                      <div class=\"text-center my-1\">$t_{1/2} = \\frac{\\ln 2}{\\lambda} = \\tau\\ln 2$ &nbsp;و&nbsp; $N(k\\cdot t_{1/2}) = \\frac{N_0}{2^k}$</div>
                      • <b>النشاط الإشعاعي $a(t)$:</b> عدد التفتتات في الثانية الواحدة بوحدة البكريل ($1\\text{ Bq} = 1\\text{ s}^{-1}$):
                      $$a(t) = -\\frac{dN}{dt} = \\lambda N(t) = a_0 e^{-\\lambda t} = \\lambda \\frac{m(t)}{M} N_A$$
                    </div>
                  </div>

                  <!-- Radiometric Dating Box -->
                  <div class="bg-slate-950/90 border border-purple-500/30 rounded-xl p-4 text-xs text-slate-200 leading-relaxed mb-4 space-y-1.5">
                    <b class="text-purple-300 text-sm block">🏺 ج) التأريخ بالنشاط الإشعاعي (Datation) واختيار النويدة الملائمة:</b>
                    <p>
                      • انطلاقاً من قياس النشاط الحالي $a(t)$ ومقارنته بنشاط مرجعي بدئي $a_0$ لعينة حية مماثلة، نُطبق الدالة العكسية للأس:
                      $$\\frac{a(t)}{a_0} = e^{-\\lambda t} \\implies \\ln\\!\\left(\\frac{a_0}{a(t)}\\right) = \\lambda t \\implies t = \\frac{1}{\\lambda}\\ln\\!\\left(\\frac{a_0}{a(t)}\\right) = \\frac{t_{1/2}}{\\ln 2}\\ln\\!\\left(\\frac{a_0}{a(t)}\\right)$$
                      • <b>شروط اختيار النظير المشع المناسب للتأريخ:</b> يجب أن يكون عمر النصف $t_{1/2}$ من <b>نفس رتبة قدر</b> العمر المتوقع للعينة (إذا كان $t_{1/2} \\ll t$ يضمحل النشاط ويصعب قياسه بدقة؛ وإذا كان $t_{1/2} \\gg t$ يبقى $a(t) \\approx a_0$ دون تغير قابل للرصد).
                    </p>
                  </div>

                  <!-- Vector SVG Diagram: N(t) & N_d(t) Decay Curves + Linearized Dating Line -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardDecayCurvesAndDating">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📊 تمثيل التناقص $N(t)$ وتزايد النوى المتفتتة $N_d(t)$، تحديد $\\tau$ و $t_{1/2}$، والتمثيل الخطي للتأريخ $\\ln(a_0/a)=\\lambda t$</span>
                      <span class="text-[11px] font-mono text-cyan-400">N(tau) = 0.37 N0 | N(t1/2) = N_d(t1/2) = N0/2</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 265" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <marker id="arrP4Dec" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                        </defs>

                        <!-- Left Panel: N(t) and Nd(t) -->
                        <rect x="12" y="14" width="388" height="238" rx="10" fill="rgba(15,23,42,0.72)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="206" y="34" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">1) Courbes N(t) et N_d(t)</text>

                        <!-- Grid Left -->
                        <g stroke="#111827" stroke-width="1">
                          <line x1="60" y1="54" x2="380" y2="54"/>
                          <line x1="60" y1="138" x2="380" y2="138"/>
                          <line x1="60" y1="180" x2="380" y2="180"/>
                        </g>

                        <!-- Axes Left: origin=(60, 222), N0 at y=54 (h=168), t: tau=146 (dx=86), t1/2=120 (0.693*86=60) -->
                        <line x1="48" y1="222" x2="380" y2="222" stroke="#64748b" stroke-width="1.6" marker-end="url(#arrP4Dec)"/>
                        <line x1="60" y1="234" x2="60" y2="42" stroke="#64748b" stroke-width="1.6" marker-end="url(#arrP4Dec)"/>
                        <text x="382" y="226" fill="#cbd5e1" font-size="10.5" font-weight="bold" font-family="monospace">t</text>
                        <text x="52" y="58" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="end">N0</text>
                        <text x="52" y="142" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="end">N0/2</text>
                        <text x="52" y="164" fill="#f9a8d4" font-size="9.5" font-weight="bold" font-family="monospace" text-anchor="end">0.37N0</text>

                        <!-- N0 dashed top ceiling -->
                        <line x1="60" y1="54" x2="372" y2="54" stroke="#475569" stroke-width="1" stroke-dasharray="4,3"/>

                        <!-- Tangent at t=0 passing (60,54) -> (146, 222) -->
                        <line x1="60" y1="54" x2="146" y2="222" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="5,3"/>
                        <circle cx="146" cy="222" r="3.5" fill="#fbbf24"/>
                        <text x="150" y="238" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">tau</text>

                        <!-- N(t) exponential curve: x = 60 + u*86, y = 222 - 168*exp(-u) -->
                        <!-- u=0:(60,54), u=0.35:(90,104), u=0.693:(120,138), u=1:(146,160), u=1.386:(179,180), u=2:(232,199), u=3:(318,214), u=3.6:(370,217) -->
                        <path d="M 60 54 L 90 104 L 120 138 L 146 160 L 179 180 L 232 199 L 318 214 L 370 217" fill="none" stroke="#22d3ee" stroke-width="2.8" stroke-linecap="round"/>
                        <text x="348" y="206" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace">N(t)</text>

                        <!-- Nd(t) = N0(1-exp(-u)): y = 222 - 168*(1-exp(-u)) -->
                        <!-- u=0:(60,222), u=0.35:(90,172), u=0.693:(120,138), u=1:(146,116), u=1.386:(179,96), u=2:(232,77), u=3:(318,62), u=3.6:(370,59) -->
                        <path d="M 60 222 L 90 172 L 120 138 L 146 116 L 179 96 L 232 77 L 318 62 L 370 59" fill="none" stroke="#f43f5e" stroke-width="2.3" stroke-dasharray="4,3"/>
                        <text x="336" y="75" fill="#fda4af" font-size="10.5" font-weight="bold" font-family="monospace">N_d(t)</text>

                        <!-- Projections for t1/2 (x=120, y=138) and tau (x=146, y=160) -->
                        <line x1="120" y1="138" x2="120" y2="222" stroke="#34d399" stroke-width="1.3" stroke-dasharray="3,3"/>
                        <line x1="60" y1="138" x2="120" y2="138" stroke="#34d399" stroke-width="1.3" stroke-dasharray="3,3"/>
                        <circle cx="120" cy="138" r="4.5" fill="#34d399" stroke="#020617" stroke-width="1.3"/>
                        <text x="112" y="238" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">t1/2</text>

                        <line x1="146" y1="160" x2="146" y2="222" stroke="#f472b6" stroke-width="1.1" stroke-dasharray="3,3"/>
                        <line x1="60" y1="160" x2="146" y2="160" stroke="#f472b6" stroke-width="1.1" stroke-dasharray="3,3"/>
                        <circle cx="146" cy="160" r="3.8" fill="#f472b6"/>

                        <!-- Right Panel: Linearized Plot ln(a0/a) = lambda * t -->
                        <rect x="414" y="14" width="254" height="238" rx="10" fill="rgba(15,23,42,0.72)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="541" y="34" fill="#d8b4fe" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">2) Linearisation Datation</text>

                        <line x1="444" y1="196" x2="646" y2="196" stroke="#64748b" stroke-width="1.6" marker-end="url(#arrP4Dec)"/>
                        <line x1="454" y1="208" x2="454" y2="60" stroke="#64748b" stroke-width="1.6" marker-end="url(#arrP4Dec)"/>
                        <text x="646" y="212" fill="#94a3b8" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">t</text>
                        <text x="454" y="53" fill="#d8b4fe" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">ln(a0/a)</text>

                        <line x1="454" y1="196" x2="626" y2="78" stroke="#c084fc" stroke-width="2.6"/>
                        <line x1="510" y1="158" x2="590" y2="158" stroke="#fbbf24" stroke-width="1.3" stroke-dasharray="3,3"/>
                        <line x1="590" y1="158" x2="590" y2="103" stroke="#fbbf24" stroke-width="1.3" stroke-dasharray="3,3"/>
                        <text x="550" y="176" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">pente = lambda</text>

                        <text x="541" y="236" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">lambda = ln(2) / t1/2</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">صرامة الوحدات والتمييز بين N و N_d</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «وحدة $\\lambda$ بالثانية ($\\text{s}^{-1}$) لحساب البكريل ($\\text{Bq}$)!»</b>
                      في قانون التأريخ $t = \\frac{t_{1/2}}{\\ln 2}\\ln\\frac{a_0}{a}$ يمكنك ترك $t_{1/2}$ بالسنة أو اليوم فتخرج $t$ بنفس الوحدة. <b>أما عند حساب النشاط $a = \\lambda N$ بالبكريل ($\\text{Bq} = \\text{s}^{-1}$) أو $N_0 = \\frac{a_0}{\\lambda}$، فإلزامي تحويل $t_{1/2}$ إلى الثواني</b> ($1\\text{ j}=86400\\text{ s}$، $1\\text{ an}=365.25\\times 86400\\text{ s}$)!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «قراءة النسبة المئوية المتفتتة $N_d$ مقابل المتبقية $N$!»</b>
                      عبارة «فقدت العينة $93.75\\%$ من نوياتها» تعني أن <b>النسبة المتبقية</b> هي $100\\% - 93.75\\% = 6.25\\%$ (أي $N(t) = \\frac{N_0}{16}$)! وفي تأريخ الصخور بنسبة $\\frac{N_{\\text{fils}}}{N_{\\text{père}}}$ تذكّر:
                      $$N_{\\text{fils}} = N_0 - N(t) = N(t)\\left(e^{\\lambda t} - 1\\right) \\implies e^{\\lambda t} = 1 + \\frac{N_{\\text{fils}}}{N_{\\text{père}}}$$
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «رسم المماس في تبيانة $\\tau$ مقابل منحنى $a(t)$ أو $\\ln(a)$»</b>
                      في المبيان $\\ln\\frac{a(t)}{a_0} = -\\lambda t$ يكون المعامل الموجه <b>سالباً ($-\\lambda$)</b>؛ أما في $\\ln\\frac{a_0}{a(t)} = +\\lambda t$ فالمعامل الموجه <b>موجب ($+\\lambda$)</b>؛ وفي منحنى $\\ln a(t) = -\\lambda t + \\ln a_0$ يمثل الأرتوب عند الأصل $\\ln a_0$ وليس $a_0$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «تفسير التناقص الإشعاعي للكتلة مع ثبات $N_A$ و $M$»</b>
                      تتناقص الكتلة المتبقية من النويدة المشعة $m(t) = m_0 e^{-\\lambda t}$ لأن عدد النوى المتبقية يتناقص، <b>لكن الكتلة الإجمالية للصخرة أو الخشبة لا تنعدم</b> لأن النوى المتفتتة تتحول إلى نوى متولدة (ابنة) تبقى في العينة!
                    </div>
                  </div>
                </div>

                <!-- 3. Worked National-Grade Applications -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">2. تطبيقان نموذجيان محرران بسلم التنقيط (معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400 font-mono">المنهجية الكاملة 20/20</span>
                  </div>

                  <!-- Application 1 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800 mb-5">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1 (كلاسيكي وطني): التأريخ بالكربون $14$ مع حساب $N_0$ بالتحويل الإلزامي إلى الثواني</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      لتحديد عمر قطعة خشبية أثرية، نقيس نشاط عينة منها في اللحظة $t$ فنحصل على $a(t) = 0.160\\text{ Bq}$، بينما يساوي نشاط عينة خشبية حية مطابقة لها في الكتلة والنوع $a_0 = 0.250\\text{ Bq}$. نعطي: عمر نصف الكربون $ {}_{6}^{14}\\text{C}$ هو $t_{1/2} = 5730\\text{ ans}$، و $1\\text{ an} = 365.25 \\times 86400\\text{ s} = 3.15576 \\times 10^7\\text{ s}$.<br/>
                      <b>1.</b> استخرج عبارة عمر النصف $t_{1/2}$ بدلالة $\\lambda$ انطلاقاً من قانون التناقص الإشعاعي، ثم حدّد بعد $\\lambda$ في النظام العالمي للوحدات. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> احسب ثابتة النشاط الإشعاعي $\\lambda$ بـ $\\text{an}^{-1}$ وبـ $\\text{s}^{-1}$، ثم استنتج عدد نوى $ {}^{14}\\text{C}$ البدئية $N_0$ في العينة. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>3.</b> احسب عمر القطعة الخشبية $t$ بالسنوات، وفسّر لماذا لا يصلح اليود $131$ ($t_{1/2} = 8\\text{ jours}$) لتأريخ هذه القطعة. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. إثبات $t_{1/2}$ ومعادلة الأبعاد (0.50 ن):</b> عند $t = t_{1/2}$ يكون $N(t_{1/2}) = \\frac{N_0}{2} = N_0 e^{-\\lambda t_{1/2}} \\implies e^{\\lambda t_{1/2}} = 2 \\implies t_{1/2} = \\frac{\\ln 2}{\\lambda}$.<br/>
                      • معادلة الأبعاد: بما أن $\\lambda t$ بدون بعد فإن $[\\lambda][\\text{T}] = 1 \\implies [\\lambda] = \\text{T}^{-1}$، فوحدة $\\lambda$ في النظام العالمي هي $\\text{s}^{-1}$.</p>
                      <p><b>2. حساب $\\lambda$ و $N_0$ بالبكريل (0.75 ن):</b><br/>
                      • $\\lambda = \\frac{\\ln 2}{5730} \\approx 1.210 \\times 10^{-4}\\text{ an}^{-1}$.<br/>
                      • بالتحويل الإلزامي إلى الثواني: $\\lambda = \\frac{1.2097 \\times 10^{-4}}{3.15576 \\times 10^7} \\approx 3.833 \\times 10^{-12}\\text{ s}^{-1}$.<br/>
                      • وبما أن $a_0 = \\lambda N_0$:
                      $$N_0 = \\frac{a_0}{\\lambda} = \\frac{0.250}{3.833 \\times 10^{-12}} \\approx 6.52 \\times 10^{10}\\text{ noyaux}$$
                      </p>
                      <p><b>3. عمر العينة $t$ واختيار النويدة (0.75 ن):</b><br/>
                      $$t = \\frac{t_{1/2}}{\\ln 2}\\ln\\!\\left(\\frac{a_0}{a(t)}\\right) = \\frac{5730}{\\ln 2}\\ln\\!\\left(\\frac{0.250}{0.160}\\right) \\approx 3689\\text{ ans}$$
                      • لا يصلح اليود $131$ لأن $t_{1/2} = 8\\text{ jours} \\ll t$، إذ تنفد نواه كلياً بعد بضعة أشهر ولا يبقى أي نشاط قابل للقياس بعد آلاف السنين!</p>
                    </div>
                  </div>

                  <!-- Application 2: Geological Dating Trap (Daughter/Parent Ratio) -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2 (تأريخ الصخور): تحديد عمر صخرة باستغلال نسبة النواة الابنة $ {}_{82}^{206}\\text{Pb}$ إلى النواة الأب $ {}_{92}^{238}\\text{U}$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      بفرض أن صخرة معدنية تكونت عند $t=0$ خالية تماماً من الرصاص $ {}^{206}\\text{Pb}$، بيّن التحليل في اللحظة $t$ أن عدد نوى الرصاص المتكونة يحقق $N({}^{206}\\text{Pb}) = 0.20\\;N({}^{238}\\text{U})$. نعطي: $t_{1/2}({}^{238}\\text{U}) = 4.47 \\times 10^9\\text{ ans}$.<br/>
                      <b>1.</b> أثبت أن عمر الصخرة يكتب: $t = \\frac{t_{1/2}}{\\ln 2}\\ln\\!\\left(1 + \\frac{N({}^{206}\\text{Pb})}{N({}^{238}\\text{U})}\\right)$. <span class="text-emerald-400 font-mono">(0.90 ن)</span><br/>
                      <b>2.</b> احسب عمر الصخرة $t$ بالسنوات، ثم عبّر عن ثابتة الزمن $\\tau$ لهذه النويدة. <span class="text-emerald-400 font-mono">(0.60 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. إثبات علاقة التأريخ الجيولوجي (0.90 ن):</b> كل نواة $ {}^{238}\\text{U}$ متفتتة تعطي نواة $ {}^{206}\\text{Pb}$ واحدة في النهاية، إذن:
                      $$N_0 = N({}^{238}\\text{U}) + N({}^{206}\\text{Pb})$$
                      وبما أن $N({}^{238}\\text{U}) = N_0 e^{-\\lambda t} \\implies N_0 = N({}^{238}\\text{U}) e^{\\lambda t}$، نساوي التعبيرين ونقسم على $N({}^{238}\\text{U})$:
                      $$e^{\\lambda t} = 1 + \\frac{N({}^{206}\\text{Pb})}{N({}^{238}\\text{U})} \\implies t = \\frac{1}{\\lambda}\\ln\\!\\left(1 + \\frac{N({}^{206}\\text{Pb})}{N({}^{238}\\text{U})}\\right) = \\frac{t_{1/2}}{\\ln 2}\\ln\\!\\left(1 + \\frac{N({}^{206}\\text{Pb})}{N({}^{238}\\text{U})}\\right)$$</p>
                      <p><b>2. الحساب العددي وثابتة الزمن (0.60 ن):</b><br/>
                      • $t = \\frac{4.47 \\times 10^9}{\\ln 2}\\ln(1 + 0.20) = \\frac{4.47 \\times 10^9}{0.69315}\\ln(1.20) \\approx 1.18 \\times 10^9\\text{ ans}$.<br/>
                      • ثابتة الزمن: $\\tau = \\frac{t_{1/2}}{\\ln 2} = \\frac{4.47 \\times 10^9}{\\ln 2} \\approx 6.45 \\times 10^9\\text{ ans}$.</p>
                    </div>
                  </div>
                </div>

                <!-- 4. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">اليود $131$: النسبة المتفتتة مقابل الكتلة البدئية</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    نحقن مريضاً بجرعة من اليود المشع $ {}_{53}^{131}\\text{I}$ ($t_{1/2} = 8.0\\text{ jours}$، $M = 131\\text{ g}\\cdot\\text{mol}^{-1}$) نشاطها البدئي $a_0 = 3.70 \\times 10^8\\text{ Bq}$. نعطي: $N_A = 6.02 \\times 10^{23}\\text{ mol}^{-1}$ و $1\\text{ j} = 86400\\text{ s}$.<br/>
                    1) بعد كم يوم تصبح نسبة النوى <b>المتفتتة</b> مساوية لـ $93.75\\%$ من العينة البدئية؟<br/>
                    2) احسب الكتلة البدئية $m_0$ لليود $131$ التي يجب حقنها لإنتاج النشاط $a_0$.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. حساب المدة دون اللوغاريتم (أو معه):</b><br/>
                      تفتت $93.75\\%$ يعني أن نسبة النوى المتبقية هي $100\\% - 93.75\\% = 6.25\\% = \\frac{1}{16} = \\frac{1}{2^4}$؛ إذن تمر <b>$4$ أعمار نصف</b> بالضبط: $t = 4 \\cdot t_{1/2} = 4 \\times 8.0 = 32\\text{ jours}$!</p>
                      <p><b>2. الكتلة البدئية $m_0$ بتحويل $\\lambda$ إلى $\\text{s}^{-1}$:</b><br/>
                      • $t_{1/2} = 8.0 \\times 86400 = 6.912 \\times 10^5\\text{ s} \\implies \\lambda = \\frac{\\ln 2}{6.912 \\times 10^5} \\approx 1.003 \\times 10^{-6}\\text{ s}^{-1}$.<br/>
                      • من $a_0 = \\lambda N_0 = \\lambda \\frac{m_0}{M} N_A$:
                      $$m_0 = \\frac{a_0 \\cdot M}{\\lambda \\cdot N_A} = \\frac{3.70 \\times 10^8 \\times 131}{1.003 \\times 10^{-6} \\times 6.02 \\times 10^{23}} \\approx 8.03 \\times 10^{-8}\\text{ g} \\; (0.080\\;\\mu\\text{g})$$
                      </p>
                    </div>
                  </details>
                </div>
              </div>

`);
