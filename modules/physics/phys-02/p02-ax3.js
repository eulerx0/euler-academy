window.EulerAcademy.registerAxis('phys-02', 'p02-ax3', `

              <div class="space-y-6">
                <!-- 1. Phenomenon of Diffraction & Invariance Laws -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">1. ظاهرة حيود موجة ميكانيكية متوالية جيبية (Phénomène de diffraction)</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">🌊 أ) التعريف الرسمي وشرط حدوث الحيود:</b>
                      • <b>الحيود (Diffraction):</b> ظاهرة فيزيائية تتمثل في <b>تغيّر شكل وبنية الموجة</b> (تحوّل موجات مستقيمة متوازية إلى موجات دائرية تتمدد في عدة اتجاهات) عندما تجتاز فتحة (شقاً) أو تلتقي حاجزاً عرضه $a$.<br/>
                      • <b>الشرط التجريبي الإلزامي لوضوح الحيود:</b>
                      $$a \\le \\lambda$$
                      <span class="text-slate-300">(أو من الرتبة نفسه عملياً: $a \\approx \\lambda$)</span><br/>
                      وكلما كان عرض الفتحة $a$ <b>أصغر</b> مقارنة بطول الموجة $\\lambda$، كان الحيود <b>أكثر وضوحاً وتحدباً</b>.<br/>
                      • أما إذا كان $a \\gg \\lambda$، فتستمر الموجة في الانتشار مستقيماً ولا يُلاحظ الحيود بوضوح.
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">⚖️ ب) المقادير المصونة للموجة المحيدة (قانون الثبات):</b>
                      تنتشر الموجة المحيدة خلف الشق في <b>نفس الوسط</b> وبإيعاز من <b>نفس المنبع</b>؛ ولذلك تحتفظ بنفس الخصائص الأساسية للموجة الواردة:<br/>
                      • <b>نفس التردد والدور:</b> $N' = N$ و $T' = T$ (المصدر واحد).<br/>
                      • <b>نفس سرعة الانتشار:</b> $v' = v$ (نفس الوسط الفيزيائي).<br/>
                      • <b>نفس طول الموجة:</b> $\\lambda' = \\frac{v'}{N'} = \\frac{v}{N} = \\lambda$!<br/>
                      <span class="text-amber-300 font-semibold block mt-1">💡 فقط <b>وسع الموجة</b> هو الذي يتناقص بعد الشق لتوزع الطاقة على قوس دائري.</span>
                    </div>
                  </div>

                  <!-- SVG Diagram 1: Diffraction a <= lambda vs No Diffraction a >> lambda -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardDiffractionWater">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>🖼️ المقارنة البصرية بين تحقق شرط الحيود ($a \\le \\lambda$) وغيابه ($a \\gg \\lambda$) في حوض الموجات</span>
                      <span class="text-[11px] font-mono text-cyan-400">lambda' = lambda  |  v' = v  |  N' = N</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
                        <div class="flex flex-wrap items-center gap-4">
                          <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-3 h-3 rounded-full bg-cyan-500/40 border border-cyan-400"></span> 1. حيود واضح ($a \\le \\lambda \\implies$ موجات دائرية)</span>
                          <span class="flex items-center gap-1.5 text-amber-300"><span class="inline-block w-3 h-3 rounded-full bg-amber-500/40 border border-amber-400"></span> 2. دون حيود ($a \\gg \\lambda \\implies$ انتشار مستقيم)</span>
                        </div>
                        <span class="text-emerald-300 font-mono">Ecartement constant = lambda</span>
                      </div>
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 235" class="w-full h-auto">
                        <!-- Left Panel: Diffraction a <= lambda -->
                        <rect x="16" y="16" width="314" height="204" rx="10" fill="rgba(34,211,238,0.04)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="173" y="36" fill="#67e8f9" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">1) a &lt;= lambda : Diffraction nette</text>

                        <!-- Incident parallel lines spaced by 28px -->
                        <line x1="48" y1="62" x2="48" y2="178" stroke="#22d3ee" stroke-width="2.2"/>
                        <line x1="76" y1="62" x2="76" y2="178" stroke="#22d3ee" stroke-width="2.2"/>
                        <line x1="104" y1="62" x2="104" y2="178" stroke="#22d3ee" stroke-width="2.2"/>
                        <line x1="132" y1="62" x2="132" y2="178" stroke="#22d3ee" stroke-width="2.2"/>
                        <text x="90" y="196" fill="#67e8f9" font-size="10.5" font-family="monospace" text-anchor="middle">lambda</text>

                        <!-- Obstacle walls leaving small slit a (y=111..129, size 18px) -->
                        <rect x="154" y="54" width="7" height="57" fill="#94a3b8"/>
                        <rect x="154" y="129" width="7" height="57" fill="#94a3b8"/>
                        <text x="158" y="202" fill="#cbd5e1" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">a</text>

                        <!-- Diffracted concentric circular arcs centered at (161, 120) with R = 28, 56, 84, 112 -->
                        <path d="M 176 96 A 28 28 0 0 1 176 144" fill="none" stroke="#34d399" stroke-width="2.2"/>
                        <path d="M 192 73 A 56 56 0 0 1 192 167" fill="none" stroke="#34d399" stroke-width="2.2"/>
                        <path d="M 208 55 A 84 84 0 0 1 208 185" fill="none" stroke="#34d399" stroke-width="2.2"/>
                        <path d="M 225 48 A 112 112 0 0 1 225 192" fill="none" stroke="#34d399" stroke-width="2.2"/>
                        <text x="272" y="202" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">lambda' = lambda</text>

                        <!-- Right Panel: No Diffraction a >> lambda -->
                        <rect x="350" y="16" width="314" height="204" rx="10" fill="rgba(251,191,36,0.04)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="507" y="36" fill="#fde68a" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">2) a &gt;&gt; lambda : Pas de diffraction</text>

                        <!-- Incident lines spaced by 26px -->
                        <line x1="382" y1="62" x2="382" y2="178" stroke="#fbbf24" stroke-width="2.2"/>
                        <line x1="408" y1="62" x2="408" y2="178" stroke="#fbbf24" stroke-width="2.2"/>
                        <line x1="434" y1="62" x2="434" y2="178" stroke="#fbbf24" stroke-width="2.2"/>
                        <line x1="460" y1="62" x2="460" y2="178" stroke="#fbbf24" stroke-width="2.2"/>

                        <!-- Obstacle walls leaving wide slit a (y=72..168, size 96px) -->
                        <rect x="488" y="54" width="7" height="18" fill="#94a3b8"/>
                        <rect x="488" y="168" width="7" height="18" fill="#94a3b8"/>
                        <text x="492" y="202" fill="#cbd5e1" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">a (large)</text>

                        <!-- Straight transmitted wavefronts within slit height -->
                        <line x1="524" y1="74" x2="524" y2="166" stroke="#fbbf24" stroke-width="2.2"/>
                        <line x1="550" y1="74" x2="550" y2="166" stroke="#fbbf24" stroke-width="2.2"/>
                        <line x1="576" y1="74" x2="576" y2="166" stroke="#fbbf24" stroke-width="2.2"/>
                        <line x1="602" y1="74" x2="602" y2="166" stroke="#fbbf24" stroke-width="2.2"/>
                        <text x="582" y="202" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Direction conservee</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Dispersive vs Non-dispersive Medium -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-purple-500/15 text-purple-300 text-xs font-bold">2. مفهوم الوسط المبدد للموجات (Milieu dispersif vs non dispersif)</span>
                    <span class="text-xs text-purple-400 font-mono">تعلق السرعة بالتردد $N$</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-purple-500/30">
                      <b class="text-purple-400 text-sm block mb-1.5">🧪 أ) الوسط المبدد (Milieu dispersif):</b>
                      يُسمى وسط الانتشار <b>وسطاً مبدداً</b> إذا كانت <b>سرعة انتشار الموجة $v$ فيه تتعلق بترددها $N$</b> (أي إذا غيّرنا التردد $N_1 \\to N_2$ في نفس الوسط تغيّرت السرعة $v_1 \\neq v_2$).<br/>
                      <span class="text-purple-300 block mt-1.5">• مثال مرجعي:</span> سطح الماء في حوض الموجات (بعمق صغير ثابت) وسط مبدد بالنسبة للموجات المائية.
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">🌬️ ب) الوسط غير المبدد (Milieu non dispersif):</b>
                      يكون الوسط <b>غير مبدد</b> إذا كانت <b>سرعة الانتشار $v$ مستقلة عن التردد $N$</b> (تبقى $v$ ثابتة رغم تغيّر $N$).<br/>
                      <span class="text-cyan-300 block mt-1.5">• مثال مرجعي:</span> الهواء وسط غير مبدد للموجات الصوتية وفوق الصوتية ($v \\approx 340\\text{ m}\\cdot\\text{s}^{-1}$ لجميع الترددات). وفيه تصبح $\\lambda$ متناسبة عكسياً مع التردد: $\\lambda \\propto \\frac{1}{N}$.
                    </div>
                  </div>

                  <div class="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-3.5 text-xs text-emerald-100 leading-relaxed">
                    <b class="text-emerald-300">🔬 كيف تُحرر تعليل التبدد في الامتحان الوطني (0.50 ن مضمونة)؟</b> نحسب السرعة الأولى $v_1 = \\lambda_1 N_1$ والسرعة الثانية $v_2 = \\lambda_2 N_2$ (لنفس الوسط عند ترددين $N_1 \\neq N_2$): إذا وجدنا $v_1 \\neq v_2$ نكتب حرفياً: <b>«بما أن سرعة الانتشار تغيّرت بتغيّر التردد، فإن الوسط مبدد»</b>؛ وإن تساوتا نكتب <b>«الوسط غير مبدد لأن $v$ مستقلة عن التردد»</b>.
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
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «تغيّر $\\lambda$ عند تغيّر عمق الماء لا يُثبت التبدد!»</b>
                      إذا أُبقي التردد $N$ ثابتاً وتم تقليص عمق الماء $h$ (بوضع لوح زجاجي في الحوض)، فإن السرعة تنقص لأن <b>الوسط تغيّر فيزيائياً</b> وليس لأنه مبدد! يُختبر التبدد حصراً بتغيير <b>التردد $N$ فقط</b> مع إبقاء نفس العمق ونفس الوسط!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «انكماش $\\lambda$ بعد عبور الشق أثناء الحيود»</b>
                      يقع بعض التلاميذ في وهم تغيّر طول الموجة بعد الشق! تذكّر: بعد الشق يظل الوسط هو نفسه والمنبع هو نفسه $\\implies$ <b>$\\lambda' = \\lambda$</b> و <b>$v' = v$</b> و <b>$N' = N$</b> دون أي تغيير!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «أثر زيادة التردد $N$ أو تقليص العمق $h$ على حدوث الحيود»</b>
                      عندما نرفع التردد $N$ (أو نقلص عمق الماء فتقل $v$)، يتقلص طول الموجة $\\lambda = v/N$، وبالتالي قد تنقلب العلاقة من $a \\le \\lambda$ إلى $a &gt; \\lambda$ فتزول ظاهرة الحيود من الشق نفسه!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «اختلاف الوحدات بين $a$ و $\\lambda$ عند تطبيق الشرط»</b>
                      غالباً ما يُعطى عرض الفتحة $a$ بالميليمتر ($\\text{mm}$) بينما تُحسب $\\lambda$ بالمتر ($\\text{m}$) أو السنتيمتر ($\\text{cm}$)! وحّد دائماً الوحدة قبل كتابة المقارنة $a \\le \\lambda$.
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: الحيود في حوض الموجات وتبدد الماء عند رفع التردد</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      في حوض الموجات، تولّد مسطرة مهتزة بتردد $N_1 = 20\\text{ Hz}$ موجات مستقيمة متوالية جيبية طول موجتها $\\lambda_1 = 2.0\\text{ cm}$، فتصل إلى حاجز به فتحة عرضها $a = 1.6\\text{ cm}$.<br/>
                      <b>1.</b> احسب سرعة انتشار الموجات $v_1$، وعلّل لماذا تشاهد ظاهرة الحيود بوضوح خلف الفتحة مع تحديد خصائص الموجة المحيدة ($N_1', v_1', \\lambda_1'$). <span class="text-emerald-400 font-mono">(1.00 ن)</span><br/>
                      <b>2.</b> نُبقي نفس العمق ونضبط تردد المسطرة على $N_2 = 50\\text{ Hz}$ فنجد أن السرعة الجديدة تصبح $v_2 = 0.50\\text{ m}\\cdot\\text{s}^{-1}$. احسب $\\lambda_2$، بيّن هل الماء وسط مبدد، وهل يستمر الحيود بوضوح عبر نفس الفتحة $a = 1.6\\text{ cm}$؟ <span class="text-emerald-400 font-mono">(1.00 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. السرعة $v_1$، شرط الحيود، وخصائص الموجة المحيدة:</b><br/>
                      • $v_1 = \\lambda_1 \\cdot N_1 = (2.0 \\times 10^{-2}) \\times 20 = 0.40\\text{ m}\\cdot\\text{s}^{-1}$.<br/>
                      • لأن $a = 1.6\\text{ cm} \\le \\lambda_1 = 2.0\\text{ cm}$، فإن شرط الحيود محقق بوضوح فتتحول الموجات المستقيمة خلف الفتحة إلى موجات دائرية.<br/>
                      • تحتفظ الموجة المحيدة بنفس التردد $N_1' = 20\\text{ Hz}$، ونفس السرعة $v_1' = 0.40\\text{ m}\\cdot\\text{s}^{-1}$، ونفس طول الموجة $\\lambda_1' = 2.0\\text{ cm}$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                      <p><b>2. دراسة الحالة الثانية ($N_2 = 50\\text{ Hz}$):</b><br/>
                      • $\\lambda_2 = \\frac{v_2}{N_2} = \\frac{0.50}{50} = 1.0 \\times 10^{-2}\\text{ m} = 1.0\\text{ cm}$.<br/>
                      • بما أن $v_2 = 0.50\\text{ m}\\cdot\\text{s}^{-1} \\neq v_1 = 0.40\\text{ m}\\cdot\\text{s}^{-1}$ عند تغيير التردد، فإن <b>الماء وسط مبدد</b>.<br/>
                      • مقارنة $a$ و $\\lambda_2$: نجد $a = 1.6\\text{ cm} &gt; \\lambda_2 = 1.0\\text{ cm}$! لم يعد شرط الحيود $a \\le \\lambda_2$ محققاً، لذا <b>تزول ظاهرة الحيود الواضح</b> (تستمر الموجة في الانتشار مستقيماً). <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: اختبار عدم تبدد الهواء للموجات فوق الصوتية ومجال حيودها</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نرسل عبر الهواء مسافة $D = 1.70\\text{ m}$ موجتين فوق صوتيتين ترددهما $N_1 = 40\\text{ kHz}$ و $N_2 = 80\\text{ kHz}$ على التوالي، فتستغرق كلتاهما المدة الزمنية نفسها $\\Delta t = 5.0\\text{ ms}$.<br/>
                      <b>1.</b> احسب سرعتي الانتشار $v_1$ و $v_2$ واستنتج هل الهواء وسط مبدد أم غير مبدد. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> نعترض مسار الموجتين بشق عرضه $a = 6.0\\text{ mm}$: أي الموجتين تخضع لظاهرة الحيود بوضوح؟ علّل بالحساب. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. سرعة الانتشار وعدم التبدد:</b><br/>
                      • في الحالتين: $v_1 = v_2 = \\frac{D}{\\Delta t} = \\frac{1.70}{5.0 \\times 10^{-3}} = 340\\text{ m}\\cdot\\text{s}^{-1}$.<br/>
                      • بما أن السرعة مستقلة عن التردد ($v_1 = v_2$)، فإن <b>الهواء وسط غير مبدد للموجات فوق الصوتية</b>. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>2. شرط الحيود في الشق $a = 6.0\\text{ mm}$:</b><br/>
                      • للموجة الأولى ($N_1 = 40\\times 10^3\\text{ Hz}$): $\\lambda_1 = \\frac{v}{N_1} = \\frac{340}{40000} = 8.5 \\times 10^{-3}\\text{ m} = 8.5\\text{ mm}$.<br/>
                      • للموجة الثانية ($N_2 = 80\\times 10^3\\text{ Hz}$): $\\lambda_2 = \\frac{v}{N_2} = \\frac{340}{80000} = 4.25\\text{ mm}$.<br/>
                      • بما أن $a = 6.0\\text{ mm} \\le \\lambda_1 = 8.5\\text{ mm}$ بينما $a &gt; \\lambda_2 = 4.25\\text{ mm}$، فإن <b>الموجة ذات التردد $40\\text{ kHz}$</b> هي التي تخضع لظاهرة الحيود بوضوح! <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 5. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">فخ تغيير عمق الماء $h$ مقابل تبدد الوسط</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    في حوض موجات عمقه $h_1$، تنتشر موجة ترددها $N = 25\\text{ Hz}$ وطول موجتها $\\lambda_1 = 1.6\\text{ cm}$ نحو شق عرضه $a = 1.5\\text{ cm}$. نضع في قعر الحوض لوحاً زجاجياً يُقلص عمق الماء إلى $h_2 &lt; h_1$ مع إبقاء تردد الهزاز ثابتاً $N = 25\\text{ Hz}$، فتصبح السرعة فوق اللوح الزجاجي $v_2 = 0.30\\text{ m}\\cdot\\text{s}^{-1}$.<br/>
                    1) احسب $v_1$ في العمق $h_1$، وهل يسمح تغيّر السرعة من $v_1$ إلى $v_2$ بالقول إن الماء وسط مبدد؟ علّل!<br/>
                    2) قارن ظاهرة الحيود عبر الشق $a = 1.5\\text{ cm}$ قبل وضع اللوح الزجاجي وفوق اللوح الزجاجي.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. حساب $v_1$ وتحطيم فخ التبدد:</b><br/>
                      • $v_1 = \\lambda_1 \\cdot N = (1.6 \\times 10^{-2}) \\times 25 = 0.40\\text{ m}\\cdot\\text{s}^{-1} &gt; v_2 = 0.30\\text{ m}\\cdot\\text{s}^{-1}$.<br/>
                      • <b>لا يمكن استنتاج التبدد من هذه التجربة!</b> لأن التردد $N = 25\\text{ Hz}$ بقي <b>ثابتاً</b> وإنما تغيّرت خصائص الوسط نفسه (تغيّر عمق الماء $h_1 \\to h_2$). إثبات التبدد يتطلب تغيير $N$ في وسط واحد ثابت العمق.</p>
                      <p><b>2. أثر تقليص العمق على شرط الحيود:</b><br/>
                      • قبل اللوح الزجاجي: $a = 1.5\\text{ cm} \\le \\lambda_1 = 1.6\\text{ cm}$ $\\implies$ <b>يحدث الحيود بوضوح</b>.<br/>
                      • فوق اللوح الزجاجي: $\\lambda_2 = \\frac{v_2}{N} = \\frac{0.30}{25} = 1.2 \\times 10^{-2}\\text{ m} = 1.2\\text{ cm}$! بما أن $a = 1.5\\text{ cm} &gt; \\lambda_2 = 1.2\\text{ cm}$، <b>يزول الحيود الواضح</b> فوق اللوح الزجاجي لنفس الشق ونفس التردد!</p>
                    </div>
                  </details>
                </div>
              </div>

`);
