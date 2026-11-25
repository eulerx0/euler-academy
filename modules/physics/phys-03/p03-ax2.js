window.EulerAcademy.registerAxis('phys-03', 'p03-ax2', `

              <div class="space-y-6">
                <!-- 1. Monochromatic vs Polychromatic, Visible Spectrum & Refractive Index -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">1. معامل الانكسار $n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda}$ والطيف المرئي وتبدد الضوء بالموشور</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">🌈 أ) الضوء الأحادي اللون مقابل المتعدد الألوان:</b>
                      • <b>الضوء أحادي اللون (Monochromatique):</b> إشعاع ضوئي بسيط ذو لون وحيد <b>لا يتبدد عند اجتياز الموشور</b>، ويتميز بتردد ثابت $\\nu$ يفرضه المنبع ولا يتغير عند انتقاله من وسط إلى آخر.<br/>
                      • <b>الضوء متعدد الألوان (Polychromatique):</b> ضوء مكون من تراكب عدة إشعاعات أحادية اللون (مثل الضوء الأبيض الذي يتبدد بالموشور إلى طيف مستمر).<br/>
                      • <b>حدود الطيف المرئي في الفراغ (Spectre visible):</b> تمتد أطوال موجته $\\lambda_0$ بين:
                      $$400\\text{ nm} \\le \\lambda_0 \\le 800\\text{ nm}$$
                      <div class=\"text-[11px] text-slate-400 text-center -mt-1 mb-1\">من البنفسجي (Violet — $400\\text{ nm}$) إلى الأحمر (Rouge — $800\\text{ nm}$)</div>
                      <span class="text-slate-400 block mt-1">(أصغر من $400\\text{ nm}$: فوق بنفسجي $\\text{UV}$ | أكبر من $800\\text{ nm}$: تحت أحمر $\\text{IR}$).</span>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 text-sm block mb-1.5">⚡ ب) سرعة الانتشار ومعامل الانكسار $n$:</b>
                      • في الفراغ (أو الهواء تقريباً $n_{\\text{air}} \\approx 1$)، ينتشر الضوء بسرعة $c \\approx 3.00 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$:
                      $$\\lambda_0 = c \\cdot T = \\frac{c}{\\nu}$$
                      • في وسط شفاف مادي متجانس (ماء، زجاج...) ينتشر بسرعة أصغر $v \\lt c$ بنفس التردد $\\nu$:
                      $$\\lambda = v \\cdot T = \\frac{v}{\\nu}$$
                      • <b>تعريف معامل الانكسار (Indice de réfraction):</b> مقدار بدون وحدة يميّز الوسط لإشعاع معيّن:
                      $$n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda} \\ge 1$$
                      <span class="text-emerald-300 block mt-1">• ومنه تتقلص السرعة وطول الموجة داخل الوسط: $v = \\frac{c}{n}$ و $\\lambda = \\frac{\\lambda_0}{n}$.</span>
                    </div>
                  </div>

                  <!-- Qualitative Dispersion Explanation + SM Boundary Note -->
                  <div class="bg-slate-950/90 border border-purple-500/30 rounded-xl p-4 text-xs text-slate-200 leading-relaxed mb-4 space-y-2">
                    <b class="text-purple-300 text-sm block">🔺 الإبراز التجريبي والتفسير النوعي لتبدد الضوء الأبيض بالموشور:</b>
                    <p>
                      عند سقوط حزمة ضوء أبيض على موشور زجاجي، نلاحظ على الشاشة انحرافها وتحولها إلى <b>طيف مستمر</b> ألوانه من <b>الأحمر (الأقل انحرافاً)</b> إلى <b>البنفسجي (الأكثر انحرافاً)</b>:<br/>
                      • <b>التفسير الفيزيائي الموجي:</b> الزجاج وسط <b>مبدد للضوء (Milieu dispersif)</b> لأن سرعة انتشار الضوء فيه $v$ ومعامل انكساره $n = \\frac{c}{v}$ يتعلقان بتردد الإشعاع $\\nu$ (أي بطول موجته في الفراغ $\\lambda_0$). وبما أن $n_{\\text{Violet}} \\gt n_{\\text{Rouge}}$ (فإن $v_{\\text{Violet}} \\lt v_{\\text{Rouge}}$ داخل الزجاج)، ينحرف الإشعاع البنفسجي بزاوية أكبر من الإشعاع الأحمر!
                    </p>
                    <p class="text-[11px] text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg p-2.5">
                      <b>📌 تنبيه حدود المقرر الرسمي (2BAC PC):</b> المطلوب في مسلك العلوم الفيزيائية هو الإبراز التجريبي والتفسير النوعي للتبدد مع علاقة معامل الانكسار $n = \\frac{c}{v} = \\frac{\\lambda_0}{\\lambda}$ (وللاستئناس فقط: نموذج كوشي التجريبي $n = A + \\frac{B}{\\lambda_0^2}$ يفسّر تناقص $n$ عند ازدياد $\\lambda_0$). أما <b>علاقات الموشور الحسابية للانحراف ($A = r+r'$, $D = i+i'-A$, قانون ديكارت التفصيلي للموشور)</b> فهي خاصة بمسلك العلوم الرياضية <b>(SM)</b> وخارج الإطار المرجعي لـ 2BAC PC.
                    </p>
                  </div>

                  <!-- Vector SVG Diagram 2: Visible Spectrum + White Light Dispersion by Prism -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardOpticalDispersion">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>🌈 التمثيل البصري لحدود الطيف المرئي ($400\\text{ nm} - 800\\text{ nm}$) وتبدد الضوء الأبيض عبر موشور زجاجي</span>
                      <span class="text-[11px] font-mono text-purple-400">n_V &gt; n_R  |  v_V &lt; v_R  |  nu = constante</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 250" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="visSpecGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#7c3aed"/>
                            <stop offset="18%" stop-color="#2563eb"/>
                            <stop offset="36%" stop-color="#06b6d4"/>
                            <stop offset="52%" stop-color="#22c55e"/>
                            <stop offset="70%" stop-color="#eab308"/>
                            <stop offset="85%" stop-color="#f97316"/>
                            <stop offset="100%" stop-color="#ef4444"/>
                          </linearGradient>
                        </defs>

                        <!-- Left Panel: Visible Spectrum -->
                        <rect x="14" y="14" width="312" height="222" rx="10" fill="rgba(15,23,42,0.75)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="170" y="36" fill="#67e8f9" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">1) Spectre Visible (Vide)</text>
                        <text x="30" y="72" fill="#a78bfa" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">UV</text>
                        <text x="308" y="72" fill="#fb7185" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">IR</text>

                        <!-- Gradient bar -->
                        <rect x="44" y="82" width="252" height="44" rx="6" fill="url(#visSpecGrad)" stroke="#cbd5e1" stroke-width="1"/>
                        <!-- Tick lines -->
                        <line x1="44" y1="76" x2="44" y2="134" stroke="#a78bfa" stroke-width="1.5"/>
                        <line x1="170" y1="126" x2="170" y2="134" stroke="#94a3b8" stroke-width="1.2"/>
                        <line x1="296" y1="76" x2="296" y2="134" stroke="#fb7185" stroke-width="1.5"/>

                        <text x="48" y="150" fill="#c4b5fd" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">400 nm</text>
                        <text x="170" y="150" fill="#cbd5e1" font-size="10.5" font-family="monospace" text-anchor="middle">600 nm</text>
                        <text x="292" y="150" fill="#fca5a5" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">800 nm</text>

                        <!-- Bottom laws in Left Panel -->
                        <text x="170" y="182" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">lambda_0 = c / nu</text>
                        <text x="170" y="206" fill="#6ee7b7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">n = c / v = lambda_0 / lambda</text>

                        <!-- Right Panel: Prism Dispersion -->
                        <rect x="342" y="14" width="324" height="222" rx="10" fill="rgba(15,23,42,0.75)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="504" y="36" fill="#fde68a" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">2) Dispersion par Prisme</text>

                        <!-- Prism Triangle -->
                        <polygon points="468,62 418,176 518,176" fill="rgba(56,189,248,0.14)" stroke="#38bdf8" stroke-width="2"/>
                        <text x="468" y="168" fill="#7dd3fc" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">Verre (n)</text>

                        <!-- White light incident beam -->
                        <line x1="354" y1="138" x2="443" y2="119" stroke="#f8fafc" stroke-width="3.2"/>
                        <text x="394" y="106" fill="#f1f5f9" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Blanc</text>

                        <!-- Refracted fan rays inside prism + emerging -->
                        <line x1="443" y1="119" x2="493" y2="120" stroke="#f87171" stroke-width="1.8"/>
                        <line x1="493" y1="120" x2="578" y2="128" stroke="#ef4444" stroke-width="2.4"/>

                        <line x1="443" y1="119" x2="498" y2="131" stroke="#4ade80" stroke-width="1.6"/>
                        <line x1="498" y1="131" x2="578" y2="154" stroke="#22c55e" stroke-width="2"/>

                        <line x1="443" y1="119" x2="504" y2="144" stroke="#a78bfa" stroke-width="1.8"/>
                        <line x1="504" y1="144" x2="578" y2="184" stroke="#8b5cf6" stroke-width="2.4"/>

                        <!-- Screen bar -->
                        <line x1="578" y1="106" x2="578" y2="196" stroke="#94a3b8" stroke-width="2.6"/>

                        <text x="586" y="131" fill="#fca5a5" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="start">Rouge (min)</text>
                        <text x="586" y="187" fill="#c4b5fd" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="start">Violet (max)</text>

                        <text x="504" y="218" fill="#cbd5e1" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">n(Violet) &gt; n(Rouge) =&gt; v_V &lt; v_R</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">تثبيت المفاهيم الفيزيائية بدقة</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «تغيّر طول الموجة في الماء لا يغيّر اللون!»</b>
                      عند انتقال إشعاع أحمر ($\\lambda_0 = 650\\text{ nm}$) من الهواء إلى الماء ($n = 1.33$) يتقلص طول موجته إلى $\\lambda = \\frac{650}{1.33} = 489\\text{ nm}$ (قريب رقمياً من الأزرق في الفراغ!). <b>انتبه:</b> لون الإشعاع مرتبط <b>بالتردد $\\nu$ الثابت</b> لا بطول الموجة في الماء، لذا يبقى الإشعاع <b>أحمر اللون</b>!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «قيمة معامل الانكسار $n$ دائماً أكبر من أو تساوي $1$»</b>
                      لأن الفراغ يُسجل أقصى سرعة ممكنة $c$ للضوء ($v \\le c$ دائماً في أي وسط مادي)، فإن $n = \\frac{c}{v} \\ge 1$ و $\\lambda = \\frac{\\lambda_0}{n} \\le \\lambda_0$. إن وجدت في حسابك $n \\lt 1$ فراجع البسط والمقام فوراً!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «سرعة الأحمر مقابل البنفسجي داخل الزجاج والهواء»</b>
                      في الفراغ والهواء لهما <b>نفس السرعة $c$</b>. أما داخل الزجاج، فالبنفسجي ينحرف أكثر لأن معامل انكساره أكبر ($n_V \\gt n_R$)، وبالتالي تكون سرعته <b>أبطأ</b> ($v_V = \\frac{c}{n_V} \\lt v_R = \\frac{c}{n_R}$)!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «التمييز بين التبدد بالموشور وضوء الليزر»</b>
                      إذا مررنا ضوء ليزر أحادي اللون عبر موشور زجاجي فإنه <b>ينحرف فقط ولا يتبدد</b> (يعطي بقعة واحدة وحيدة اللون)، بخلاف الضوء الأبيض الذي يتبدد لأنه متعدد الألوان!
                    </div>
                  </div>
                </div>

                <!-- 3. Worked National-Grade Applications -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">2. تطبيقان نموذجيان محرران بسلم التنقيط (معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400 font-mono">الدمج المرجعي بين المحورين</span>
                  </div>

                  <!-- Application 1 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800 mb-5">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: انتشار ضوء ليزر في الزجاج، تغيّر $\\lambda$، وتفسير تبدد الضوء الأبيض</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      يرسل ليزر هيليوم-نيون ضوءاً أحادي اللون طول موجته في الهواء (المعتبر مكافئاً للفراغ) $\\lambda_0 = 632.8\\text{ nm}$ نحو قطعة زجاجية معامل انكسارها لهذا الإشعاع $n_R = 1.50$. (نعطي $c = 3.00 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$).<br/>
                      <b>1.</b> هل ينتمي هذا الإشعاع إلى المجال المرئي؟ احسب تردده $\\nu$ في الهواء، وما قيمته داخل الزجاج؟ <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> احسب سرعة انتشار هذا الضوء $v_R$ وطول موجته $\\lambda_R$ داخل الزجاج. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>3.</b> نعوّض الليزر بحزمة ضوء أبيض فتتبدد عبر موشور من نفس الزجاج، علماً أن معامل انكسار الزجاج للإشعاع البنفسجي ($\\lambda_{0,V} = 400\\text{ nm}$) هو $n_V = 1.54$. قارن $v_V$ و $v_R$ داخل الزجاج وحدّد أي اللونين أكثر انحرافاً. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. الطيف المرئي والتردد $\\nu$:</b><br/>
                      • نعم، لأن $\\lambda_0 = 632.8\\text{ nm} \\in [400\\text{ nm}, 800\\text{ nm}]$ (ضوء أحمر مرئي).<br/>
                      • التردد في الهواء: $\\nu = \\frac{c}{\\lambda_0} = \\frac{3.00 \\times 10^8}{632.8 \\times 10^{-9}} \\approx 4.74 \\times 10^{14}\\text{ Hz}$.<br/>
                      • التردد خاصية للمنبع، لذا يحتفظ الإشعاع بنفس التردد $\\nu = 4.74 \\times 10^{14}\\text{ Hz}$ داخل الزجاج! <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>2. السرعة $v_R$ وطول الموجة $\\lambda_R$ داخل الزجاج:</b><br/>
                      • $v_R = \\frac{c}{n_R} = \\frac{3.00 \\times 10^8}{1.50} = 2.00 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$.<br/>
                      • $\\lambda_R = \\frac{\\lambda_0}{n_R} = \\frac{632.8}{1.50} \\approx 421.9\\text{ nm}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>3. مقارنة التبدد داخل الزجاج:</b><br/>
                      بما أن $n_V = 1.54 \\gt n_R = 1.50$، فإن $v_V = \\frac{c}{n_V} \\approx 1.95 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1} \\lt v_R$؛ وبالتالي فإن <b>الإشعاع البنفسجي ينحرف أكثر من الإشعاع الأحمر</b> (الزجاج وسط مبدد). <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2: Classic National Integration (Diffraction in Air vs Liquid) -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2 (توليفي وطني): تعيين معامل انكسار سائل انطلاقاً من تقلص بقعة الحيود!</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نُنجز تجربة حيود ضوء ليزر ($\\lambda_0 = 600\\text{ nm}$) في الهواء ($n_{\\text{air}} \\approx 1$) باستعمال شق عرضه $a$ وشاشة على مسافة $D$، فنقيس عرض البقعة المركزية $L_0 = 2.40\\text{ cm}$. نغمر الآن المنبع والشق والشاشة بالكامل (دون تغيير $a$ أو $D$) داخل حوض مملوء بسائل شفاف، فينخفض عرض البقعة المركزية ليصبح $L = 1.80\\text{ cm}$.<br/>
                      <b>1.</b> فسّر سبب تقلص عرض البقعة المركزية عند الغمر في السائل، ثم أثبت العلاقة التي تربط $n$ بـ $L_0$ و $L$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> احسب معامل انكسار السائل $n$، ثم استنتج طول الموجة $\\lambda$ والسرعة $v$ داخل هذا السائل. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. التفسير وإثبات علاقة $n$:</b><br/>
                      في الهواء $L_0 = \\frac{2\\lambda_0 D}{a}$، وفي السائل يتقلص طول الموجة إلى $\\lambda = \\frac{\\lambda_0}{n}$ مع بقاء $a$ و $D$ ثابتين، فيصبح عرض البقعة $L = \\frac{2\\lambda D}{a} = \\frac{2\\lambda_0 D}{n a} = \\frac{L_0}{n}$؛ أي:
                      $$n = \\frac{L_0}{L}$$
                      <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>2. الحساب العددي:</b><br/>
                      • $n = \\frac{2.40}{1.80} = \\frac{4}{3} \\approx 1.33$.<br/>
                      • $\\lambda = \\frac{\\lambda_0}{n} = \\frac{600}{4/3} = 450\\text{ nm}$، و $v = \\frac{c}{n} = \\frac{3.00 \\times 10^8}{4/3} = 2.25 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 4. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">تشتت النبضات الضوئية عبر ليف بصري مبدد</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    نرسل في اللحظة نفسها $t=0$ إشعاعين أحاديي اللون أزرق ($\\lambda_{01} = 450\\text{ nm}$) وأحمر ($\\lambda_{02} = 750\\text{ nm}$) عبر ليف بصري طوله $\\ell = 15\\text{ km}$. يملك قلب الليف معامل انكسار $n_1 = 1.48$ للإشعاع الأول و $n_2 = 1.45$ للإشعاع الثاني ($c = 3.00 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$).<br/>
                    1) أي الإشعاعين يصل أولاً إلى الطرف الآخر لليف؟ علّل.<br/>
                    2) احسب التأخر الزمني $\\Delta t = t_1 - t_2$ بين لحظتي وصول الإشعاعين بالميكروثانية ($\\mu\\text{s}$).
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. أي الإشعاعين يصل أولاً:</b><br/>
                      بما أن $n_2 = 1.45 \\lt n_1 = 1.48$، فإن سرعة الإشعاع الأحمر $v_2 = \\frac{c}{n_2}$ <b>أكبر</b> من سرعة الإشعاع الأزرق $v_1 = \\frac{c}{n_1}$، لذا <b>يصل الإشعاع الأحمر أولاً</b>.</p>
                      <p><b>2. حساب التأخر الزمني $\\Delta t$:</b><br/>
                      $$\\Delta t = t_1 - t_2 = \\frac{\\ell}{v_1} - \\frac{\\ell}{v_2} = \\frac{\\ell (n_1 - n_2)}{c} = \\frac{15 \\times 10^3 \\times (1.48 - 1.45)}{3.00 \\times 10^8} = 1.5 \\times 10^{-6}\\text{ s} = 1.5\\;\\mu\\text{s}$$
                      </p>
                    </div>
                  </details>
                </div>
              </div>

`);
