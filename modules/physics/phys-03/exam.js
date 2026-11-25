window.EulerAcademy.registerExam('phys-03', `

        <!-- Master Exam Bank: Devoir Surveillé Blanc N°3 Physique (20/20) -->
        <div id="masterExam" class="scroll-mt-28 glass rounded-3xl p-5 sm:p-8 border border-amber-500/40 bg-slate-900/90 shadow-2xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div class="flex items-center gap-2 mb-1.5">
                <span class="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  الفرض المحروس التجريبي الشامل N°3 • الفيزياء 2BAC PC
                </span>
                <span class="text-xs text-slate-400 font-mono">Devoir Surveillé N°3 Blanc (20/20)</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white">
                امتحان توليفي شامل في انتشار الموجات الضوئية (الحيود بالليزر، المعايرة، معامل الانكسار، وتبدد الموشور)
              </h3>
            </div>
            <div class="flex items-center gap-3">
              <span class="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400 font-bold">
                المدة: ساعتان (2h00)
              </span>
              <span class="px-3.5 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold">
                النقطة: 20 / 20
              </span>
            </div>
          </div>

          <p class="text-xs text-slate-300 leading-relaxed">
            هذا الفرض التجريبي التوليفي مصمم لدرس <b>انتشار موجة ضوئية (2BAC PC)</b> وفق صرامة الإطار المرجعي الوطني (دون علاقات الموشور الحسابية الخاصة بـ SM): قياس $\\lambda$ وقطر شعرة، حيود الضوء في الأوساط السائلة، ثبات التردد عند الانكسار، وتشتت النبضات في الألياف البصرية. ($c = 3.00 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$).
          </p>

          <!-- Exam Paper: 4 Exercises = 20.00 pts -->
          <div class="space-y-5">
            <!-- Exercice 1 (5.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-cyan-400">التمرين الأول (5.00 نقط): تجربة حيود الليزر ومنحنى المعايرة $L = f(1/a)$ وتحديد قطر شعرة</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                <div class="lg:col-span-7 text-xs text-slate-300 space-y-2 leading-relaxed">
                  <p>
                    نضيء شقاً رأسياً عرضه $a$ قابل للضبط بحزمة ضوء ليزر أحادي اللون، ونضع شاشة الملاحظة على مسافة $D = 2.00\\text{ m}$ خلف الشق. يسمح قياس عرض البقعة المركزية $L$ بدلالة $\\frac{1}{a}$ برسم المنحنى المبياني المجاور (الشكل 1).
                  </p>
                </div>

                <!-- SVG Chart Ex 1 -->
                <div class="lg:col-span-5 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 flex justify-center">
                  <svg id="svgCardExamPhys3Curve" viewBox="0 0 420 225" direction="ltr" style="direction: ltr;" class="w-full max-w-[360px] h-auto" xmlns="http://www.w3.org/2000/svg">
                    <rect width="420" height="225" rx="12" fill="#020617"/>
                    <g stroke="#0f172a" stroke-width="1">
                      <line x1="65" y1="48" x2="380" y2="48"/>
                      <line x1="65" y1="87" x2="380" y2="87"/>
                      <line x1="65" y1="126" x2="380" y2="126"/>
                      <line x1="165" y1="24" x2="165" y2="174"/>
                      <line x1="265" y1="24" x2="265" y2="174"/>
                      <line x1="315" y1="24" x2="315" y2="174"/>
                    </g>
                    <line x1="50" y1="174" x2="388" y2="174" stroke="#475569" stroke-width="1.8"/>
                    <polygon points="386,170 396,174 386,178" fill="#475569"/>
                    <line x1="65" y1="188" x2="65" y2="20" stroke="#475569" stroke-width="1.8"/>
                    <polygon points="61,22 65,12 69,22" fill="#475569"/>

                    <line x1="65" y1="174" x2="345" y2="32.4" stroke="#22d3ee" stroke-width="2.8"/>
                    <line x1="315" y1="48" x2="315" y2="174" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/>
                    <line x1="65" y1="48" x2="315" y2="48" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="4,3"/>
                    <circle cx="315" cy="48" r="4.5" fill="#fbbf24" stroke="#020617" stroke-width="1.5"/>

                    <line x1="165" y1="124" x2="165" y2="174" stroke="#34d399" stroke-width="1.2" stroke-dasharray="4,3"/>
                    <line x1="65" y1="124" x2="165" y2="124" stroke="#34d399" stroke-width="1.2" stroke-dasharray="4,3"/>
                    <circle cx="165" cy="124" r="4" fill="#34d399"/>

                    <text x="54" y="188" fill="#64748b" font-size="10" font-family="monospace">0</text>
                    <text x="165" y="191" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">1.0</text>
                    <text x="315" y="191" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">2.5</text>
                    <text x="54" y="128" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="end">2.60</text>
                    <text x="54" y="52" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="end">6.50</text>
                    <text x="34" y="24" fill="#cbd5e1" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">L (cm)</text>
                    <text x="240" y="214" fill="#cbd5e1" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">1/a (10^4 m^-1)</text>
                  </svg>
                </div>
              </div>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>أنجز تبيانة التركيب التجريبي لظاهرة الحيود (مُظهرة الشق $a$، المسافة $D$، الفرق الزاوي $\\theta$، وعرض البقعة المركزية $L$)، وحدّد اتجاه انتشار بقع الحيود على الشاشة ثم استنتج طبيعة الضوء. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>أثبت العلاقة $L = \\frac{2\\lambda D}{a}$ باستعمال تقريب الزوايا الصغيرة $\\tan\\theta \\approx \\theta$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>استغل المبيان لحساب طول الموجة $\\lambda$ لليزر (بالـ $\\text{nm}$)، تحقّق من انتمائه للمجال المرئي، واحسب تردده $\\nu$. <span class="font-mono text-cyan-400 text-[11px]">(1.75 ن)</span></li>
                <li>نعوّض الشق بشعرة إنسان قطرها $d$ (دون تغيير الليزر ولا $D$) فنقيس على الشاشة $L' = 2.60\\text{ cm}$. احسب القطر $d$ بالميكرومتر ($\\mu\\text{m}$) وتحقق من صلوحية تقريب الزوايا الصغيرة $\\theta' \\ll 0.1\\text{ rad}$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 2 (5.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-emerald-400">التمرين الثاني (5.00 نقط): قياس معامل الانكسار بتجربة حيود مغمورة في سائل وفخ تغير اللون</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                ننجز في الهواء ($n_{\\text{air}} = 1.00$) حيود حزمة ليزر طول موجتها في الفراغ $\\lambda_0 = 600\\text{ nm}$ باستعمال شق عرضه $a = 0.080\\text{ mm}$ وشاشة على مسافة $D = 2.00\\text{ m}$.
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>احسب الفرق الزاوي $\\theta_0$ وعرض البقعة المركزية $L_0$ في الهواء. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>نغمر الآن المنبع والشق والشاشة بالكامل داخل حوض سائل شفاف (بنفس $a$ و $D$) فنقيس عرضاً جديداً $L = 2.00\\text{ cm}$:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) فسّر فيزيائياً سبب تقلّص عرض البقعة المركزية داخل السائل. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                    <p>ب) استنتج معامل انكسار السائل $n$، سرعة الضوء $v$، وطول الموجة $\\lambda$ داخل السائل؛ وهل يتغير لون الضوء داخل السائل (علِّل)؟ <span class="font-mono text-cyan-400 text-[11px]">(1.75 ن)</span></p>
                  </div>
                </li>
                <li>نعود للهواء ونُعوّض الليزر الأول بليزر ثانٍ فنقيس بُقعة مركزية عرضها $L'_0 = 2.25\\text{ cm}$. احسب طول الموجة $\\lambda'_0$ للّيزر الثاني، وما هو عرض البقعة الثانوية الأولى $L_{\\text{sec}}$؟ <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 3 (5.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-purple-400">التمرين الثالث (5.00 نقط): الطيف المرئي، وتبدد الضوء الأبيض بموشور الفلينت (تفسير نوعي 2BAC PC)</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                <div class="lg:col-span-7 text-xs text-slate-300 space-y-2 leading-relaxed">
                  <p>
                    نرسل حزمة من الضوء الأبيض نحو موشور من زجاج الفلينت، فينبثق منه طيف مستمر على الشاشة يتضمن الإشعاع الأحمر ($\\lambda_{0R} = 750\\text{ nm}$) حيث $n_R = 1.60$ والإشعاع البنفسجي ($\\lambda_{0V} = 400\\text{ nm}$) حيث $n_V = 1.66$.
                  </p>
                </div>

                <!-- SVG Prism Dispersion -->
                <div class="lg:col-span-5 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 flex justify-center">
                  <svg id="svgCardExamPhys3Prism" viewBox="0 0 420 210" direction="ltr" style="direction: ltr;" class="w-full max-w-[360px] h-auto" xmlns="http://www.w3.org/2000/svg">
                    <rect width="420" height="210" rx="12" fill="#020617"/>
                    <polygon points="165,34 105,164 225,164" fill="rgba(56,189,248,0.14)" stroke="#38bdf8" stroke-width="2"/>
                    <text x="165" y="152" fill="#7dd3fc" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">Flint</text>
                    <line x1="26" y1="118" x2="136" y2="98" stroke="#f8fafc" stroke-width="3"/>
                    <text x="78" y="86" fill="#f8fafc" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">Blanc</text>
                    <line x1="136" y1="98" x2="195" y2="101" stroke="#f87171" stroke-width="2"/>
                    <line x1="195" y1="101" x2="298" y2="112" stroke="#ef4444" stroke-width="2.4"/>
                    <line x1="136" y1="98" x2="208" y2="128" stroke="#a78bfa" stroke-width="2"/>
                    <line x1="208" y1="128" x2="298" y2="174" stroke="#8b5cf6" stroke-width="2.4"/>
                    <line x1="298" y1="92" x2="298" y2="188" stroke="#94a3b8" stroke-width="2.5"/>
                    <text x="306" y="116" fill="#fca5a5" font-size="9.5" font-weight="bold" font-family="monospace" text-anchor="start">Rouge (n=1.60)</text>
                    <text x="306" y="178" fill="#c4b5fd" font-size="9.5" font-weight="bold" font-family="monospace" text-anchor="start">Violet (n=1.66)</text>
                  </svg>
                </div>
              </div>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>اذكر حدود أطوال الموجة في الفراغ للطيف المرئي، وميّز بين الضوء أحادي اللون ومتعدد الألوان، ثم صف ما نلاحظه على الشاشة لو عوّضنا الضوء الأبيض بليزر أخضر ($532\\text{ nm}$). <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>لإشعاعي الضوء الأبيض الأحمر والبنفسجي في الفلينت:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) احسب تردد وسرعة انتشار كل من الإشعاع الأحمر ($v_R, \\nu_R$) والبنفسجي ($v_V, \\nu_V$) داخل الموشور. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></p>
                    <p>ب) بيّن لماذا يُعد زجاج الفلينت وسطاً مبدداً للضوء وفسّر لماذا ينحرف البنفسجي أكثر من الأحمر. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></p>
                  </div>
                </li>
                <li>يرسل المنبع أيضاً إشعاعاً تردده $\\nu_x = 1.00 \\times 10^{15}\\text{ Hz}$ ينتشر في الفلينت بسرعة $v_x = 1.75 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$: حدّد $\\lambda_{0,x}$ ومجاله الطيفي، ثم احسب معامل انكسار الزجاج له. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 4: Synthesis Problem (5.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-emerald-500/30 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-amber-400">المسألة التوليفية الرابعة (5.00 نقط): معايرة منبعين بالحيود وتشتت نبضتين عبر ليف بصري طويل</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                لربط الاتصالات السريعة، نستعمل منبعين أحاديي اللون $S_1$ و $S_2$ نمررهما أولاً في الهواء عبر شق معاير عرضه $a = 0.060\\text{ mm}$ وشاشة على مسافة $D = 1.60\\text{ m}$: يعطي المنبع $S_1$ بقعة مركزية عرضها $L_1 = 3.20\\text{ cm}$، بينما يعطي المنبع $S_2$ فرقاً زاوياً $\\theta_2 = 7.50\\text{ mrad}$.<br/>
                بعد ذلك نحقن نبضتين متزامنتين ($t=0$) من $S_1$ و $S_2$ في ليف بصري طوله $\\ell = 12.0\\text{ km}$ حيث معامل انكسار قلبه $n_1 = 1.460$ لإشعاع $S_1$ و $n_2 = 1.485$ لإشعاع $S_2$.
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>احسب طول الموجة $\\lambda_{01}$ والتردد $\\nu_1$ للمنبع $S_1$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>استنتج طول الموجة $\\lambda_{02}$ والتردد $\\nu_2$ للمنبع $S_2$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>احسب سرعة الانتشار $v_1$ و $v_2$ داخل قلب الليف، واستنتج طبيعة زجاج الليف بالنسبة للتبدد. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>أثبت تعبير الفارق الزمني $\\Delta t = t_2 - t_1 = \\frac{\\ell(n_2 - n_1)}{c}$ بين لحظتي وصول النبضتين إلى نهاية الليف، واحسب قيمته بـ ($\\mu\\text{s}$). <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
              </ol>
            </div>
          </div>

          <!-- Collapsible Master Solution & Marking Scheme -->
          <div class="border border-amber-500/30 rounded-2xl overflow-hidden bg-slate-950/90 mt-6">
            <button type="button" aria-expanded="false" onclick="window.EulerAcademy.toggleCollapsible('phys3-master-solution', this);" class="w-full text-right p-4 sm:p-5 bg-gradient-to-r from-amber-500/20 via-slate-900 to-cyan-500/20 hover:from-amber-500/30 text-xs sm:text-sm font-bold text-amber-300 flex items-center justify-between transition">
              <span class="flex items-center gap-2">
                <span>🏆</span>
                <span>إظهار / إخفاء عناصر الإجابة النموذجية وسلم التنقيط الرسمي المفصل (20 / 20 نقطة)</span>
              </span>
              <span class="font-mono text-xs px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center gap-1.5"><span>Corrigé Officiel</span><span class="sol-chevron inline-block transition-transform">▼</span></span>
            </button>

            <div id="phys3-master-solution" class="hidden p-4 sm:p-6 border-t border-slate-800 space-y-6 text-xs text-slate-300 leading-relaxed">
              <!-- Solution Ex 1 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-cyan-400">حل التمرين الأول (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. التبيانة التجريبية، الاتجاه، وطبيعة الضوء (1.00 ن):</strong><br/>
                  تتضمن التبيانة منبع الليزر متبوعاً بشق رأسي عرضه $a$ وشاشة على مسافة $D$؛ ترسم على الشاشة بقعة مركزية عرضها $L$ تتوسطها زاوية نصف عرض $\\theta$. بما أن الشق رأسي فتنتشر البقع <b>أفقياً</b>؛ وتُبرز ظاهرة الحيود <b>الطبيعة الموجية للضوء</b>. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">2. إثبات العلاقة (1.00 ن):</strong> لدينا $\\theta = \\frac{\\lambda}{a}$ و $\\tan\\theta = \\frac{L/2}{D} = \\frac{L}{2D}$. وبما أن $\\theta$ صغيرة بالراديان فإن $\\tan\\theta \\approx \\theta$:
                  $$\\frac{L}{2D} = \\frac{\\lambda}{a} \\qquad \\Longrightarrow \\qquad L = \\frac{2\\lambda D}{a}$$
                  <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">3. طول الموجة $\\lambda$ والتردد $\\nu$ (1.75 ن):</strong><br/>
                  • المنحنى $L = f(1/a)$ خطي يمر من الأصل، معامله الموجه $k = \\frac{6.50 \\times 10^{-2} - 0}{2.5 \\times 10^4 - 0} = 2.60 \\times 10^{-6}\\text{ m}^2$.<br/>
                  • بمطابقة $k = 2\\lambda D$: $\\lambda = \\frac{2.60 \\times 10^{-6}}{2 \\times 2.00} = 6.50 \\times 10^{-7}\\text{ m} = 650\\text{ nm}$.<br/>
                  • نعم ينتمي للمجال المرئي ($400\\text{ nm} \\le 650\\text{ nm} \\le 800\\text{ nm}$)، وتردده $\\nu = \\frac{c}{\\lambda} = \\frac{3.00 \\times 10^8}{6.50 \\times 10^{-7}} \\approx 4.62 \\times 10^{14}\\text{ Hz}$. <span class="text-emerald-400 font-mono">(1.75 ن)</span></p>
                  <p><strong class="text-white">4. قطر الشعرة $d$ والتحقق من التقريب (1.25 ن):</strong><br/>
                  • $d = \\frac{2\\lambda D}{L'} = \\frac{2 \\times 650 \\times 10^{-9} \\times 2.00}{2.60 \\times 10^{-2}} = 1.00 \\times 10^{-4}\\text{ m} = 100\\;\\mu\\text{m}$.<br/>
                  • الفرق الزاوي $\\theta' = \\frac{L'}{2D} = \\frac{2.60 \\times 10^{-2}}{4.00} = 6.50 \\times 10^{-3}\\text{ rad} \\ll 0.1\\text{ rad}$، إذن التقريب $\\tan\\theta' \\approx \\theta'$ محقق بدقة تامة. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 2 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-emerald-400">حل التمرين الثاني (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. الحساب في الهواء (1.25 ن):</strong><br/>
                  • $\\theta_0 = \\frac{\\lambda_0}{a} = \\frac{600 \\times 10^{-9}}{8.0 \\times 10^{-5}} = 7.50 \\times 10^{-3}\\text{ rad}$.<br/>
                  • $L_0 = 2 \\theta_0 D = 2 \\times 7.50 \\times 10^{-3} \\times 2.00 = 3.00 \\times 10^{-2}\\text{ m} = 3.00\\text{ cm}$. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">2. أ) تفسير تقلّص البقعة داخل السائل (1.00 ن):</strong><br/>
                  عند الانتقال من الهواء إلى السائل ذي المعامل $n &gt; 1$ تقل سرعة الضوء ($v = c/n$) ومع ثبات التردد $\\nu$ يتقلص طول الموجة إلى $\\lambda = \\frac{\\lambda_0}{n}$، وبما أن $L = \\frac{2\\lambda D}{a}$ و $a, D$ ثابتان، يتقلص عرض البقعة بنسبة $\\frac{1}{n}$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">2. ب) حساب $n, v, \\lambda$ واللون (1.75 ن):</strong><br/>
                  • $\\frac{L_0}{L} = \\frac{\\lambda_0}{\\lambda} = n \\implies n = \\frac{3.00}{2.00} = 1.50$.<br/>
                  • $v = \\frac{c}{n} = \\frac{3.00 \\times 10^8}{1.50} = 2.00 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$، و $\\lambda = \\frac{600}{1.50} = 400\\text{ nm}$.<br/>
                  • <b>لا يتغير لون الضوء!</b> لأن اللون مرتبط حصراً بالتردد $\\nu = \\frac{c}{\\lambda_0} = 5.00 \\times 10^{14}\\text{ Hz}$ وهو خاصية للمنبع لا تتغير بتغيير الوسط. <span class="text-emerald-400 font-mono">(1.75 ن)</span></p>
                  <p><strong class="text-white">3. الليزر الثاني والبقع الثانوية (1.00 ن):</strong><br/>
                  • $\\lambda'_0 = \\lambda_0 \\cdot \\frac{L'_0}{L_0} = 600 \\times \\frac{2.25}{3.00} = 450\\text{ nm}$.<br/>
                  • عرض البقعة الثانوية الأولى هو نصف البقعة المركزية: $L_{\\text{sec}} = \\frac{L'_0}{2} = 1.125\\text{ cm}$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 3 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-purple-400">حل التمرين الثالث (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. الطيف المرئي والتمييز والليزر بالموشور (1.25 ن):</strong><br/>
                  • حدود الطيف المرئي في الفراغ: $400\\text{ nm} \\le \\lambda_0 \\le 800\\text{ nm}$.<br/>
                  • أحادي اللون يتكوّن من إشعاع وحيد التردد $\\nu$ لا يتبدد بالموشور، بينما متعدد الألوان يضم عدة إشعاعات ويتبدد بالموشور.<br/>
                  • عند إرسال ليزر أخضر ($532\\text{ nm}$) عبر الموشور: <b>ينحرف الشعاع فقط دون تبدد</b> (بقعة خضراء وحيدة). <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">2. أ) التردد والسرعة في الفلينت (1.50 ن):</strong><br/>
                  • للأحمر: $\\nu_R = \\frac{c}{\\lambda_{0R}} = \\frac{3.00 \\times 10^8}{750 \\times 10^{-9}} = 4.00 \\times 10^{14}\\text{ Hz}$، و $v_R = \\frac{c}{n_R} = \\frac{3.00 \\times 10^8}{1.60} = 1.875 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$.<br/>
                  • للبنفسجي: $\\nu_V = \\frac{3.00 \\times 10^8}{400 \\times 10^{-9}} = 7.50 \\times 10^{14}\\text{ Hz}$، و $v_V = \\frac{3.00 \\times 10^8}{1.66} \\approx 1.807 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><strong class="text-white">2. ب) التبدد وشدة الانحراف (1.25 ن):</strong><br/>
                  بما أن سرعة الضوء $v$ ومعامل انكسار الفلينت $n = c/v$ يتغيران بتغير التردد $\\nu$، فإن <b>زجاج الفلينت وسط مبدد</b>. ولأن $n_V \\gt n_R$ ($v_V \\lt v_R$)، ينحرف الإشعاع البنفسجي بزاوية أكبر من الأحمر. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">3. الإشعاع خارج المرئي (1.00 ن):</strong><br/>
                  • $\\lambda_{0,x} = \\frac{c}{\\nu_x} = \\frac{3.00 \\times 10^8}{1.00 \\times 10^{15}} = 3.00 \\times 10^{-7}\\text{ m} = 300\\text{ nm} \\lt 400\\text{ nm} \\implies$ ينتمي إلى مجال الأشعة <b>فوق البنفسجية (UV)</b> غير المرئية.<br/>
                  • $n_x = \\frac{c}{v_x} = \\frac{3.00 \\times 10^8}{1.75 \\times 10^8} \\approx 1.71$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 4 -->
              <div class="space-y-2">
                <h5 class="text-sm font-extrabold text-amber-400">حل المسألة التوليفية الرابعة (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. معايرة المنبع $S_1$ (1.50 ن):</strong><br/>
                  $$\\lambda_{01} = \\frac{a \\cdot L_1}{2D} = \\frac{6.0 \\times 10^{-5} \\times 3.20 \\times 10^{-2}}{2 \\times 1.60} = 6.00 \\times 10^{-7}\\text{ m} = 600\\text{ nm}$$
                  $$\\nu_1 = \\frac{c}{\\lambda_{01}} = \\frac{3.00 \\times 10^8}{600 \\times 10^{-9}} = 5.00 \\times 10^{14}\\text{ Hz}$$
                  <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><strong class="text-white">2. معايرة المنبع $S_2$ (1.25 ن):</strong><br/>
                  $$\\lambda_{02} = a \\cdot \\theta_2 = 6.0 \\times 10^{-5} \\times 7.50 \\times 10^{-3} = 4.50 \\times 10^{-7}\\text{ m} = 450\\text{ nm}$$
                  $$\\nu_2 = \\frac{3.00 \\times 10^8}{450 \\times 10^{-9}} \\approx 6.67 \\times 10^{14}\\text{ Hz}$$
                  <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">3. السرعتان وتبدد الليف البصري (1.00 ن):</strong><br/>
                  • $v_1 = \\frac{3.00 \\times 10^8}{1.460} \\approx 2.055 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$، و $v_2 = \\frac{3.00 \\times 10^8}{1.485} \\approx 2.020 \\times 10^8\\text{ m}\\cdot\\text{s}^{-1}$.<br/>
                  • بما أن $v_1 \\neq v_2$ باختلاف التردد في نفس الزجاج، فقلب الليف <b>وسط مبدد</b>. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">4. التأخر الزمني $\\Delta t$ (1.25 ن):</strong><br/>
                  $$t_1 = \\frac{\\ell}{v_1} = \\frac{\\ell n_1}{c},\\quad t_2 = \\frac{\\ell}{v_2} = \\frac{\\ell n_2}{c} \\implies \\Delta t = t_2 - t_1 = \\frac{\\ell(n_2 - n_1)}{c}$$
                  $$\\Delta t = \\frac{12.0 \\times 10^3 \\times (1.485 - 1.460)}{3.00 \\times 10^8} = \\frac{300}{3.00 \\times 10^8} = 1.00 \\times 10^{-6}\\text{ s} = 1.00\\;\\mu\\text{s}$$
                  <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

`);
