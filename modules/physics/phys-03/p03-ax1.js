window.EulerAcademy.registerAxis('phys-03', 'p03-ax1', `

              <div class="space-y-6">
                <!-- 1. Wave Nature & Diffraction Experimental Setup -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">1. الطبيعة الموجية للضوء وظاهرة حيود الضوء أحادي اللون</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <p class="text-xs text-slate-300 leading-relaxed mb-4">
                    عندما يمر ضوء أحادي اللون (مثل أشعة الليزر) عبر شق رفيع جداً عرضه $a$ (أو يعترضه خيط رفيع قطره $a$)، لا نحصل على مجرد ظل هندسي بسيط بل تتكون على شاشة تبعد مسافة $D$ <b>سلسلة من البقع الضوئية المتناوبة</b> (بقعة مركزية عريضة وأشد إضاءة تحيط بها بقع ثانوية أضيق وخافتة)، ويكون اتجاه انتشار بقع الحيود دائماً <b>عمودياً على اتجاه الشق أو الخيط</b>. تُثبت هذه التجربة أن للضوء <b>طبيعة موجية</b> (موجة كهرمغنطيسية تنتشر في الفراغ والأوساط الشفافة بسرعة حدّية $c \\approx 3.00 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$).
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">📐 أ) الفرق الزاوي $\\theta$ والتقريب الهندسي الصغير:</b>
                      • <b>تعريف الفرق الزاوي $\\theta$ (Écart angulaire):</b> الزاوية المحصورة بين مركز البقعة المركزية وأول بقعة مظلمة (أي <b>نصف العرض الزاوي</b> للبقعة المركزية):
                      $$\\theta = \\frac{\\lambda}{a}$$
                      <div class=\"text-[11px] text-slate-400 text-center -mt-1 mb-1\">($\\theta$ بالـ $\\text{rad}$، و $\\lambda$ و $a$ بالـ $\\text{m}$)</div>
                      • <b>في المثلث القائم الزاوية (شق–شاشة على مسافة $D$):</b>
                      $$\\tan\\theta = \\frac{L/2}{D} = \\frac{L}{2D}$$
                      • <b>بتطبيق تقريب الزوايا الصغيرة</b> (لأن $\\theta \\lt 0.1\\text{ rad}$ عملياً، فيكون $\\tan\\theta \\approx \\theta$ بالراديان):
                      $$\\frac{L}{2D} = \\frac{\\lambda}{a} \\qquad \\Longrightarrow \\qquad L = \\frac{2\\lambda D}{a}$$
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">📊 ب) استغلال المنحنيات التجريبية ومعامل التوجيه:</b>
                      لإيجاد طول الموجة $\\lambda$ أو التحقق من العلاقة تجريبياً نغيّر عرض الشق $a$ (مع تثبيت $D$ والليزر) ونرسم:<br/>
                      • <b>المنحنى $\\theta = f\\!\\left(\\frac{1}{a}\\right)$:</b> دالة خطية يمر مستقيمها من الأصل ومعاملها الموجه هو طول الموجة مباشرة:
                      $$k = \\frac{\\Delta\\theta}{\\Delta(1/a)} = \\lambda$$
                      • <b>أو المنحنى $L = g\\!\\left(\\frac{1}{a}\\right)$:</b> دالة خطية معاملها الموجه هو $k' = 2\\lambda D \\implies \\lambda = \\frac{k'}{2D}$.<br/>
                      • <b>تحديد قطر سلك رفيع أو شعرة ($d$):</b> نضع الخيط مكان الشق فنقيس عرض البقعة المركزية $L'$ ونطبق العلاقة نفسها بتعويض $a$ بـ $d$: $d = \\frac{2\\lambda D}{L'}$.
                    </div>
                  </div>

                  <!-- Vector SVG Diagram: Laser Diffraction Setup + Calibration Curve -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardOpticalDiffraction">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>🔦 تبيانة التركيب التجريبي لحيود الضوء (ليزر + شق $a$ + شاشة على مسافة $D$) ومنحنى المعايرة $\\theta = f(1/a)$</span>
                      <span class="text-[11px] font-mono text-amber-400">theta = lambda / a = L / (2D)</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 260" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <marker id="arrP3Opt" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                          <marker id="arrP3Amb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24"/>
                          </marker>
                        </defs>

                        <!-- Laser Box -->
                        <rect x="20" y="96" width="84" height="48" rx="8" fill="rgba(244,63,94,0.16)" stroke="#fb7185" stroke-width="1.8"/>
                        <text x="62" y="124" fill="#fecdd3" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">Laser</text>
                        <text x="62" y="84" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">lambda</text>

                        <!-- Incident beam -->
                        <line x1="104" y1="120" x2="168" y2="120" stroke="#f43f5e" stroke-width="2.6"/>

                        <!-- Vertical slit of width a -->
                        <rect x="168" y="42" width="7" height="68" fill="#cbd5e1"/>
                        <rect x="168" y="130" width="7" height="68" fill="#cbd5e1"/>
                        <text x="171" y="31" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Fente (a)</text>
                        <text x="150" y="124" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">a</text>

                        <!-- Optical axis dashed -->
                        <line x1="175" y1="120" x2="405" y2="120" stroke="#64748b" stroke-width="1.4" stroke-dasharray="5,4"/>

                        <!-- Diffracted cone boundaries to first minima -->
                        <line x1="175" y1="120" x2="402" y2="76" stroke="#fb7185" stroke-width="2" stroke-dasharray="4,2"/>
                        <line x1="175" y1="120" x2="402" y2="164" stroke="#fb7185" stroke-width="2" stroke-dasharray="4,2"/>

                        <!-- Angular arc theta -->
                        <path d="M 248 120 A 73 73 0 0 0 246 106" fill="none" stroke="#fbbf24" stroke-width="1.8"/>
                        <text x="275" y="109" fill="#fde68a" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="start">theta</text>

                        <!-- Screen & spots -->
                        <line x1="405" y1="26" x2="405" y2="210" stroke="#94a3b8" stroke-width="3"/>
                        <text x="405" y="18" fill="#cbd5e1" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Ecran</text>

                        <!-- Central & side fringes -->
                        <rect x="400" y="76" width="10" height="88" rx="4" fill="#fb7185" opacity="0.95"/>
                        <rect x="402" y="45" width="7" height="22" rx="3" fill="#f43f5e" opacity="0.65"/>
                        <rect x="402" y="173" width="7" height="22" rx="3" fill="#f43f5e" opacity="0.65"/>

                        <!-- Bracket L and L/2 -->
                        <line x1="422" y1="76" x2="422" y2="164" stroke="#22d3ee" stroke-width="1.8"/>
                        <line x1="416" y1="76" x2="428" y2="76" stroke="#22d3ee" stroke-width="1.5"/>
                        <line x1="416" y1="164" x2="428" y2="164" stroke="#22d3ee" stroke-width="1.5"/>
                        <text x="435" y="124" fill="#67e8f9" font-size="12" font-weight="bold" font-family="monospace" text-anchor="start">L</text>
                        <line x1="422" y1="45" x2="422" y2="67" stroke="#94a3b8" stroke-width="1.4"/>
                        <text x="435" y="60" fill="#cbd5e1" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="start">L/2</text>

                        <!-- Distance D -->
                        <line x1="175" y1="224" x2="401" y2="224" stroke="#fbbf24" stroke-width="1.6" marker-end="url(#arrP3Amb)"/>
                        <line x1="171" y1="205" x2="171" y2="232" stroke="#475569" stroke-width="1.2"/>
                        <line x1="405" y1="214" x2="405" y2="232" stroke="#475569" stroke-width="1.2"/>
                        <text x="288" y="244" fill="#fde68a" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">Distance D</text>

                        <!-- Right Panel: Calibration line theta = f(1/a) -->
                        <rect x="492" y="28" width="172" height="206" rx="10" fill="rgba(15,23,42,0.85)" stroke="#334155" stroke-width="1.3"/>
                        <text x="578" y="48" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Etalonnage linearite</text>
                        <line x1="518" y1="184" x2="646" y2="184" stroke="#64748b" stroke-width="1.4" marker-end="url(#arrP3Opt)"/>
                        <line x1="518" y1="196" x2="518" y2="72" stroke="#64748b" stroke-width="1.4" marker-end="url(#arrP3Opt)"/>
                        <line x1="518" y1="184" x2="634" y2="82" stroke="#22d3ee" stroke-width="2.4"/>
                        <text x="518" y="66" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">theta (rad)</text>
                        <text x="644" y="202" fill="#94a3b8" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">1/a (m^-1)</text>
                        <text x="594" y="156" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">pente = lambda</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">تجنب أخطاء التنقيط الصارم</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «اتجاه سلسلة البقع متعامد دائماً مع اتجاه الشق!»</b>
                      إذا كان الشق (أو الخيط) <b>رأسياً/شاقولياً</b>، فبقع الحيود تنتشر على الشاشة <b>أفقياً</b>! وإذا كان الشق <b>أفقياً</b> فالبقع تنتشر <b>عمودياً</b>. يطرح د. الرياح هذا السؤال لتحديد وضع الشق انطلاقاً من صورة الشاشة!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «نصف العرض $L/2$ وليس $L$ في $\\tan\\theta$!»</b>
                      الفرق الزاوي $\\theta = \\frac{\\lambda}{a}$ يوافق <b>نصف</b> البقعة المركزية فقط: $\\tan\\theta \\approx \\theta = \\frac{L/2}{D} = \\frac{L}{2D}$. نسيان العامل $2$ في المقام خطأ مضاعف يُبطل قيمة $\\lambda$ و $a$ بنسبة 100%!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «وحدات محور $\\frac{1}{a}$ ($\\text{mm}^{-1}$ vs $\\text{m}^{-1}$) و $\\theta$ ($\\text{mrad}$)»</b>
                      في المبيانات الوطنية كثيراً ما يُدرج المحور الأفقي بوحدة $10^3\\text{ m}^{-1}$ (أو $\\text{mm}^{-1}$) والمحور العمودي بـ $10^{-3}\\text{ rad}$ ($\\text{mrad}$) أو بالـ $\\text{cm}$! حوّل كل إحداثيتين إلى النظام العالمي ($\\text{rad}, \\text{m}, \\text{m}^{-1}$) قبل حساب المعامل الموجه.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «تناسب عرض البقع الثانوية وتناقص $L$ عند تكبير $a$»</b>
                      تذكّر أن عرض البقعة المركزية $L$ يتناسب <b>عكسياً</b> مع عرض الشق $a$ (كلما ضاق الشق $a$ زادت البقعة اتساعاً) و<b>طردياً</b> مع $D$ و $\\lambda$؛ بينما عرض البقعة الثانوية الأولى يساوي نصف عرض البقعة المركزية ($L_{\\text{sec}} = L/2$).
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: استغلال منحنى $L = f(1/a)$ لتحديد $\\lambda$، التردد $\\nu$، وقطر شعرة الإنسان</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      ننجز تجربة حيود الضوء بواسطة منبع ليزر وشق رفيع رأسي عرضه $a$ قابل للضبط، ونعاين بقع الحيود على شاشة تبعد مسافة $D = 2.00\\text{ m}$ عن الشق. يمكّن استثمار النتائج التجريبية من الحصول على مستقيم يمر من الأصل $L = f\\!\\left(\\frac{1}{a}\\right)$، حيث نأخذ نقطتين منه: $O(0, 0)$ و $A\\!\\left(2.0 \\times 10^4\\text{ m}^{-1},\\; 5.20\\text{ cm}\\right)$. (نعطي $c = 3.00 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$).<br/>
                      <b>1.</b> هل تنتشر البقع الضوئية على الشاشة أفقياً أم عمودياً؟ وما الطبيعة التي تبرزها هذه الظاهرة؟ <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> عبّر عن $L$ بدلالة $\\lambda$ و $D$ و $\\frac{1}{a}$ (مع إثبات العلاقة من $\\theta$ و $\\tan\\theta \\approx \\theta$). <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>3.</b> حدّد طول الموجة $\\lambda$ لضوء الليزر (بالنانومتر $\\text{nm}$) ثم احسب تردده $\\nu$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>4.</b> نعوّض الشق بشعرة إنسان قطرها $d$ مع الحفاظ على نفس $D$ والليزر، فنقيس عرض البقعة المركزية $L' = 3.25\\text{ cm}$. احسب القطر $d$ بالميكرومتر ($\\mu\\text{m}$). <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. اتجاه التبدد والطبيعة الفيزيائية:</b> بما أن الشق <b>رأسي</b>، تنتشر بقع الحيود على الشاشة <b>أفقياً</b>؛ وتُثبت هذه الظاهرة <b>الطبيعة الموجية للضوء</b>. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2. إثبات العلاقة $L = f(1/a)$:</b> لدينا $\\theta = \\frac{\\lambda}{a}$ ومن المثلث القائم $\\tan\\theta = \\frac{L/2}{D} = \\frac{L}{2D}$. وضمن تقريب الزوايا الصغيرة ($\\tan\\theta \\approx \\theta$ بـ $\\text{rad}$):
                      $$\\frac{L}{2D} = \\frac{\\lambda}{a} \\qquad \\Longrightarrow \\qquad L = (2\\lambda D) \\cdot \\frac{1}{a}$$
                      <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>3. تحديد طول الموجة $\\lambda$ والتردد $\\nu$:</b><br/>
                      • المعامل الموجه للمنحنى $L = f(1/a)$ هو $k = \\frac{5.20 \\times 10^{-2} - 0}{2.0 \\times 10^4 - 0} = 2.60 \\times 10^{-6}\\text{ m}^2$.<br/>
                      • بمطابقة العلاقة النظرية $k = 2\\lambda D$:
                      $$\\lambda = \\frac{k}{2D} = \\frac{2.60 \\times 10^{-6}}{2 \\times 2.00} = 6.50 \\times 10^{-7}\\text{ m} = 650\\text{ nm}$$
                      • التردد: $\\nu = \\frac{c}{\\lambda} = \\frac{3.00 \\times 10^8}{6.50 \\times 10^{-7}} \\approx 4.62 \\times 10^{14}\\text{ Hz}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>4. حساب قطر الشعرة $d$:</b><br/>
                      $$d = \\frac{2\\lambda D}{L'} = \\frac{2 \\times 6.50 \\times 10^{-7} \\times 2.00}{3.25 \\times 10^{-2}} = 8.0 \\times 10^{-5}\\text{ m} = 80\\;\\mu\\text{m}$$
                      <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: التحقق من تقريب الزوايا الصغيرة واستنتاج عرض الشق من الفرق الزاوي</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نضيء شقاً عرضه $a = 0.080\\text{ mm}$ بواسطة ليزر أخضر طول موجته $\\lambda = 532\\text{ nm}$، ونلاحظ البقع على شاشة تبعد مسافة $D = 1.50\\text{ m}$.<br/>
                      <b>1.</b> احسب الفرق الزاوي $\\theta$ بالراديان ($\\text{rad}$) وبالميلي راديان ($\\text{mrad}$)، وتحقق من صلوحية التقريب $\\tan\\theta \\approx \\theta$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> استنتج عرض البقعة المركزية $L$ بالميليمتر ($\\text{mm}$)، ثم احسب المسافة التي تفصل بين مركزي البقعة المركزية والبقعة المظلمة الأولى. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. الفرق الزاوي $\\theta$ وصلاحية التقريب:</b><br/>
                      $$\\theta = \\frac{\\lambda}{a} = \\frac{532 \\times 10^{-9}}{8.0 \\times 10^{-5}} = 6.65 \\times 10^{-3}\\text{ rad} = 6.65\\text{ mrad}$$
                      بما أن $\\theta \\ll 0.1\\text{ rad}$، فإن التقريب $\\tan\\theta \\approx \\theta$ صحيح بدقة عالية. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>2. عرض البقعة المركزية $L$ وبعد أول انعدام للإضاءة:</b><br/>
                      • $L = 2 \\cdot \\theta \\cdot D = 2 \\times 6.65 \\times 10^{-3} \\times 1.50 = 1.995 \\times 10^{-2}\\text{ m} \\approx 20.0\\text{ mm}$.<br/>
                      • المسافة الفاصلة بين مركز البقعة المركزية وأول بقعة مظلمة هي نصف العرض: $\\frac{L}{2} = 10.0\\text{ mm}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 4. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">مقارنة ليزرين أحمر وأخضر عبر نفس الشق</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    نضيء شقاً عرضه $a$ ثابت على مسافة $D = 1.60\\text{ m}$ تارة بليزر أحمر ($\\lambda_R = 650\\text{ nm}$) فنقيس $L_R = 2.60\\text{ cm}$، وتارة أخرى بليزر بنفسجي طول موجته $\\lambda_V$ فنقيس على نفس المسافة $L_V = 1.60\\text{ cm}$.<br/>
                    1) استنتج دون حساب $a$ أولاً قيمة طول الموجة $\\lambda_V$ للّيزر الثاني، ثم حدّد $a$.<br/>
                    2) إلى أي مسافة جديدة $D'$ يجب إبعاد الشاشة باستعمال الليزر البنفسجي للحصول على نفس عرض البقعة المركزية $L_R = 2.60\\text{ cm}$؟
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. حساب $\\lambda_V$ و $a$:</b><br/>
                      • عند ثبات $a$ و $D$، يتناسب $L$ طردياً مع $\\lambda$: $\\frac{L_V}{L_R} = \\frac{\\lambda_V}{\\lambda_R} \\implies \\lambda_V = \\lambda_R \\cdot \\frac{L_V}{L_R} = 650 \\times \\frac{1.60}{2.60} = 400\\text{ nm}$!<br/>
                      • عرض الشق: $a = \\frac{2\\lambda_R D}{L_R} = \\frac{2 \\times 650 \\times 10^{-9} \\times 1.60}{2.60 \\times 10^{-2}} = 8.0 \\times 10^{-5}\\text{ m} = 0.080\\text{ mm}$.</p>
                      <p><b>2. المسافة الجديدة $D'$ لليزر البنفسجي:</b><br/>
                      نريد $\\frac{2\\lambda_V D'}{a} = L_R = \\frac{2\\lambda_R D}{a} \\implies D' = D \\cdot \\frac{\\lambda_R}{\\lambda_V} = 1.60 \\times \\frac{650}{400} = 2.60\\text{ m}$ (أي زيادة المسافة بمقدار $1.00\\text{ m}$).</p>
                    </div>
                  </details>
                </div>
              </div>

`);
