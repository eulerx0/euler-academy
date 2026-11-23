window.EulerAcademy.registerAxis('phys-02', 'p02-ax2', `

              <div class="space-y-6">
                <!-- 1. Official Criteria: In Phase vs Out of Phase -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">1. مقارنة الحالة الاهتزازية لنقطتين من وسط الانتشار (التوافق والتعاكس في الطور)</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <p class="text-xs text-slate-300 leading-relaxed mb-4">
                    بعد وصول الموجة المتوالية الدورية إلى نقطتين $M_1$ و $M_2$ من وسط الانتشار (أي $t \\ge t_{\\text{arrivée}}$ لكليهما)، تكرر كل نقطة نفس حركة المنبع بالتأخر الزمني الخاص بها. لمقارنة حركتيهما نستعمل فرق المسافة $d$ المحسوب وفق بُعد الانتشار:<br/>
                    • <b>في انتشار أحادي البعد (حبل) أو نقطتين على نفس نصف المستقيم المار من $S$:</b> $d = M_1 M_2$.<br/>
                    • <b>في انتشار ثنائي أو ثلاثي الأبعاد (حوض موجات أو هواء لنقطتين ليستا على استقامة مع $S$):</b> $d = |SM_2 - SM_1|$ (فرق المسير عن المنبع $S$).
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-emerald-500/30">
                      <b class="text-emerald-400 text-sm block mb-1.5">✅ أ) الاهتزاز على توافق في الطور (En phase):</b>
                      تهتز النقطتان $M_1$ و $M_2$ على توافق في الطور إذا بلغتا القيمتين القصويين والدنيا في اللحظات نفسها ($\\forall t,\\; y_{M_2}(t) = y_{M_1}(t)$). ويتحقق ذلك إذا وفقط إذا كان:<br/>
                      $$d = k \\cdot \\lambda \\quad (k \\in \\mathbb{N}^*) \\qquad \\Longleftrightarrow \\qquad \\tau = k \\cdot T$$
                      <span class="text-emerald-300 font-semibold block mt-1.5">المعيار العملي: $\\dfrac{d}{\\lambda} = k$ عدد صحيح طبيعي غير منعدم ($1, 2, 3, \\dots$).</span>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/30">
                      <b class="text-rose-400 text-sm block mb-1.5">🔁 ب) الاهتزاز على تعاكس في الطور (En opposition de phase):</b>
                      تهتز النقطتان على تعاكس في الطور إذا مرت إحداهما بقمة لحظة مرور الأخرى بقعر ($\\forall t,\\; y_{M_2}(t) = -y_{M_1}(t)$). ويتحقق ذلك إذا وفقط إذا كان:<br/>
                      $$d = (2k + 1)\\frac{\\lambda}{2} = \\left(k + \\frac{1}{2}\\right)\\lambda \\quad (k \\in \\mathbb{N}) \\qquad \\Longleftrightarrow \\qquad \\tau = \\left(k + \\frac{1}{2}\\right)T$$
                      <span class="text-rose-300 font-semibold block mt-1.5">المعيار العملي: $\\dfrac{d}{\\lambda} = 0.5, \\; 1.5, \\; 2.5, \\dots$ (نصف صحيح).</span>
                    </div>
                  </div>
                </div>

                <!-- 2. SVG Diagram: Spatial & Temporal Phase Comparison -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-purple-500/15 text-purple-300 text-xs font-bold">2. المقارنة البيانية (مكانياً وزمانياً) بين التوافق والتعاكس في الطور</span>
                    <span class="text-xs text-purple-400 font-mono">y(x) &amp; Oscillogrammes</span>
                  </div>

                  <!-- SVG Diagram 2 -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardPhaseComparison">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>⚖️ موقع النقطتين $M_2$ ($d = \\lambda$) و $M_3$ ($d = \\frac{\\lambda}{2}$) بالنسبة للنقطة $M_1$</span>
                      <span class="text-[11px] font-mono text-cyan-400">En phase (k*lambda) vs Opposition ((2k+1)*lambda/2)</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
                        <div class="flex flex-wrap items-center gap-4">
                          <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-3 h-3 rounded-full bg-cyan-500/40 border border-cyan-400"></span> $M_1$: مرجع القياس</span>
                          <span class="flex items-center gap-1.5 text-emerald-300"><span class="inline-block w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-400"></span> $M_2$: توافق مع $M_1$ ($d=\\lambda$)</span>
                          <span class="flex items-center gap-1.5 text-rose-300"><span class="inline-block w-3 h-3 rounded-full bg-rose-500/40 border border-rose-400"></span> $M_3$: تعاكس مع $M_1$ ($d=\\lambda/2$)</span>
                        </div>
                        <span class="text-slate-400 font-mono">tau = d / v</span>
                      </div>
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 250" class="w-full h-auto">
                        <!-- Top: Spatial Snapshot y(x) -->
                        <text x="20" y="18" fill="#cbd5e1" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="start">A) Sur la corde y(x) a l'instant t1 :</text>
                        <line x1="40" y1="94" x2="640" y2="94" stroke="#334155" stroke-width="1.3"/>
                        <!-- Cosine wave: lambda = 220px. Peak1 at x=120, Trough1 at x=230, Peak2 at x=340, Trough2 at x=450, Peak3 at x=560 -->
                        <path d="M 65 94 C 85 60, 102 60, 120 60 C 156 60, 194 128, 230 128 C 266 128, 304 60, 340 60 C 376 60, 414 128, 450 128 C 486 128, 524 60, 560 60 C 578 60, 594 76, 615 94" fill="none" stroke="#94a3b8" stroke-width="2.2"/>
                        <!-- Points M1, M3, M2 -->
                        <circle cx="120" cy="60" r="5" fill="#22d3ee"/>
                        <text x="120" y="48" fill="#22d3ee" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">M1</text>

                        <circle cx="230" cy="128" r="5" fill="#fb7185"/>
                        <text x="230" y="144" fill="#fb7185" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">M3 (d=lambda/2)</text>

                        <circle cx="340" cy="60" r="5" fill="#34d399"/>
                        <text x="340" y="48" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">M2 (d=lambda)</text>

                        <!-- Bottom: Dual Temporal Oscilloscope traces -->
                        <rect x="20" y="158" width="308" height="82" rx="10" fill="rgba(52,211,153,0.06)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="174" y="176" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Oscilloscope (M1 &amp; M2 En phase)</text>
                        <line x1="36" y1="208" x2="310" y2="208" stroke="#334155" stroke-width="1"/>
                        <path d="M 48 208 C 68 184, 88 184, 108 208 C 128 232, 148 232, 168 208 C 188 184, 208 184, 228 208 C 248 232, 268 232, 288 208" fill="none" stroke="#22d3ee" stroke-width="2.6"/>
                        <path d="M 48 208 C 68 184, 88 184, 108 208 C 128 232, 148 232, 168 208 C 188 184, 208 184, 228 208 C 248 232, 268 232, 288 208" fill="none" stroke="#34d399" stroke-width="1.6" stroke-dasharray="4,4"/>

                        <rect x="352" y="158" width="308" height="82" rx="10" fill="rgba(251,113,133,0.06)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="506" y="176" fill="#fda4af" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Oscilloscope (M1 &amp; M3 Opposition)</text>
                        <line x1="368" y1="208" x2="642" y2="208" stroke="#334155" stroke-width="1"/>
                        <path d="M 380 208 C 400 184, 420 184, 440 208 C 460 232, 480 232, 500 208 C 520 184, 540 184, 560 208 C 580 232, 600 232, 620 208" fill="none" stroke="#22d3ee" stroke-width="2.2"/>
                        <path d="M 380 208 C 400 232, 420 232, 440 208 C 460 184, 480 184, 500 208 C 520 232, 540 232, 560 208 C 580 184, 600 184, 620 208" fill="none" stroke="#fb7185" stroke-width="2.2" stroke-dasharray="4,3"/>
                      </svg>
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
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «حوض الموجات (2D): استعمل $|SM_2 - SM_1|$ لا $M_1 M_2$!»:</b>
                      عندما تنتشر موجة دائرية انطلاقاً من منبع $S$ في كل الاتجاهات، إذا لم تكن النقطتان $M_1$ و $M_2$ على نفس نصف المستقيم المار من $S$، فلا يجوز مقارنة $M_1 M_2$ مع $\\lambda$! بل نقارن <b>فرق المسير $\\Delta d = |SM_2 - SM_1|$</b> مع $\\lambda$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «هل وصلت الموجة أصلاً إلى $M_2$ عند اللحظة $t$؟»:</b>
                      أحياناً يُعطي الامتحان طول $SM_2 = 1.2\\text{ m}$ عند لحظة مبكرة حيث الجبهة بلغت $0.90\\text{ m}$ فقط! في هذه اللحظة النقطة $M_2$ <b>ساكنة</b> ولا تهتز مع $M_1$! تحقّق دوماً من الشرط $t \\ge \\frac{SM_2}{v}$.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «قيمة $k$ الصغرى في قانوني التوافق والتعاكس»:</b>
                      بالنسبة لنقطتين متميزتين ($d &gt; 0$): في حالة <b>التوافق</b> يبدأ $k$ من <b>$1$</b> ($d \\in \\{\\lambda, 2\\lambda, 3\\lambda, \\dots\\}$)، أما في حالة <b>التعاكس</b> $(2k+1)\\frac{\\lambda}{2}$ فيبدأ $k$ من <b>$0$</b> ($d \\in \\{\\frac{\\lambda}{2}, \\frac{3\\lambda}{2}, \\dots\\}$)!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «حساب عدد النقط المهتزة بتأطير مفتوح مقابل مغلق»:</b>
                      انتبه هل المطلوب عدد النقط <b>على القطعة المفتوحة $]A, B[$</b> أم المغلقة $[A, B]$؟ استعمل التأطير الصارم ($&lt;$) للمفتوحة و ($\\le$) للمغلقة لتفادي زيادة أو نقصان نقطة طرفية!
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: مقارنة نقطة على حبل مهتز وحساب عدد النقط المتعاكسة في الطور</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      تنتشر موجة متوالية جيبية ترددها $N = 50\\text{ Hz}$ على طول حبل مشدود بسرعة $v = 8.0\\text{ m}\\cdot\\text{s}^{-1}$. نعتبر ثلاث نقط من الحبل تبعد عن المنبع $S$ بالأفاصيل: $x_A = 12\\text{ cm}$ و $x_B = 52\\text{ cm}$ و $x_C = 60\\text{ cm}$. ندرس الحالة الاهتزازية عند اللحظة $t_1 = 0.10\\text{ s}$.<br/>
                      <b>1.</b> احسب طول الموجة $\\lambda$، وتحقّق أن الموجة قد تجاوزت جميع النقط $A, B, C$ عند اللحظة $t_1$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> قارن الحالة الاهتزازية للنقطتين $A$ و $B$، ثم للنقطتين $A$ و $C$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>3.</b> حدّد عدد النقط التي تنتمي إلى القطعة المفتوحة $]A, C[$ وتهتز على تعاكس في الطور مع النقطة $A$. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. حساب $\\lambda$ والتحقق من الجبهة عند $t_1$:</b><br/>
                      • $\\lambda = \\frac{v}{N} = \\frac{8.0}{50} = 0.16\\text{ m} = 16\\text{ cm}$.<br/>
                      • المسافة المقطوعة عند $t_1 = 0.10\\text{ s}$ هي $x_F = v \\cdot t_1 = 8.0 \\times 0.10 = 0.80\\text{ m} = 80\\text{ cm}$. بما أن $80\\text{ cm} &gt; 60\\text{ cm}$، فقد وصلت الموجة إلى $A$ و $B$ و $C$ وتهتز جميعها عند $t_1$. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>2. مقارنة الحالة الاهتزازية لـ $(A,B)$ و $(A,C)$:</b><br/>
                      • بين $A$ و $B$: $AB = x_B - x_A = 52 - 12 = 40\\text{ cm}$. نحسب النسبة $\\frac{AB}{\\lambda} = \\frac{40}{16} = 2.5 = 2 + \\frac{1}{2} \\implies AB = 5\\frac{\\lambda}{2}$. إذن <b>$A$ و $B$ تهتزان على تعاكس في الطور</b>.<br/>
                      • بين $A$ و $C$: $AC = x_C - x_A = 60 - 12 = 48\\text{ cm}$. نحسب النسبة $\\frac{AC}{\\lambda} = \\frac{48}{16} = 3 \\in \\mathbb{N}^* \\implies AC = 3\\lambda$. إذن <b>$A$ و $C$ تهتزان على توافق في الطور</b>. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>3. عدد النقط المتعاكسة في الطور مع $A$ داخل $]A, C[$:</b><br/>
                      تكون نقطة $M$ تنتمي لـ $]A, C[$ على تعاكس مع $A$ إذا كان $AM = (k + 0.5)\\lambda$ و $0 &lt; AM &lt; AC$:<br/>
                      $$0 &lt; (k + 0.5)(16) &lt; 48 \\implies 0 &lt; k + 0.5 &lt; 3 \\implies -0.5 &lt; k &lt; 2.5$$
                      بما أن $k \\in \\mathbb{N}$، فإن القيم الممكنة هي $k \\in \\{0, 1, 2\\}$؛ أي توجد بالضبط <b>$3$ نقط</b> (عند $x = 20\\text{ cm}, 36\\text{ cm}, 52\\text{ cm}$). <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: إزاحة مستقبل صوتي ومرتبة التعاكس في الطور براسم التذبذب</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      يُصدر مكبر صوت موجة صوتية جيبية ترددها $N = 1.70\\text{ kHz}$ في الهواء. نضع مستقبلين $R_1$ (ثابت عند $d_0 = 20.0\\text{ cm}$) و $R_2$ متصلين بمدخلي راسم التذبذب، فنلاحظ عند الموضع البدئي أن المنحنيين <b>على توافق في الطور</b>. نُزيح $R_2$ مبتعداً تدريجياً حتى يبلغ المسافة $d_1 = 70.0\\text{ cm}$ فنرصد حينها <b>حالة التعاكس في الطور الثالثة</b> بعد موضع التوافق الأول.<br/>
                      استنتج طول الموجة $\\lambda$ ثم احسب سرعة انتشار الصوت $v$ في الهواء.
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p>• المسافة المقطوعة بالإزاحة من موضع التوافق الأول هي: $\\Delta d = d_1 - d_0 = 70.0 - 20.0 = 50.0\\text{ cm} = 0.500\\text{ m}$.<br/>
                      • التعاكس الأول عند $k=0$ يوافق $\\frac{\\lambda}{2}$، والثاني ($k=1$) يوافق $\\frac{3\\lambda}{2}$، و<b>التعاكس الثالث</b> ($k=2$) يوافق إزاحة قدرها $\\frac{5\\lambda}{2} = 2.5\\,\\lambda$:<br/>
                      $$\\Delta d = 2.5\\,\\lambda \\implies \\lambda = \\frac{50.0}{2.5} = 20.0\\text{ cm} = 0.200\\text{ m}$$
                      <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      • سرعة انتشار الصوت في الهواء ($N = 1.70\\text{ kHz} = 1700\\text{ Hz}$):
                      $$v = \\lambda \\cdot N = 0.200 \\times 1700 = 340\\text{ m}\\cdot\\text{s}^{-1}$$
                      <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 5. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">فخ 2D في حوض الموجات ($|SM_2 - SM_1|$)</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    يُحدث هزاز نقطي $S$ على سطح ماء حوض الموجات موجة دائرية جيبية ترددها $N = 25\\text{ Hz}$ وطول موجتها $\\lambda = 2.0\\text{ cm}$. نعتبر نقطتين $M_1$ و $M_2$ من سطح الماء ليستا على استقامة مع $S$ بحيث: $SM_1 = 5.0\\text{ cm}$، $SM_2 = 8.0\\text{ cm}$، والمسافة المستقيمة بينهما $M_1 M_2 = 6.0\\text{ cm}$.<br/>
                    عند اللحظة $t = 0.20\\text{ s}$ بعد بداية اهتزاز $S$: هل النقطتان $M_1$ و $M_2$ على توافق أم على تعاكس في الطور؟ احذر الفخ الهندسي!
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. التحقق من وصول الموجة:</b> $v = \\lambda \\cdot N = 2.0 \\times 25 = 50\\text{ cm}\\cdot\\text{s}^{-1}$. تصل الجبهة إلى أبعد نقطة $M_2$ عند $t_2 = \\frac{8.0}{50} = 0.16\\text{ s} &lt; 0.20\\text{ s}$؛ إذن كلاهما تهتزان عند $t = 0.20\\text{ s}$.</p>
                      <p><b>2. تحطيم الفخ الثنائي البعد (2D):</b> لأن الموجات الدائرية تنتشر على دوائر متحدة المركز مع $S$، فإن المسافة المستقيمة $M_1 M_2 = 6.0\\text{ cm}$ (= $3\\lambda$ الخادعة!) <b>لا تصلح هنا</b>! بل نعتمد على فرق المسافة عن المنبع:<br/>
                      $$\\Delta d = |SM_2 - SM_1| = |8.0 - 5.0| = 3.0\\text{ cm} \\implies \\frac{\\Delta d}{\\lambda} = \\frac{3.0}{2.0} = 1.5 = \\left(1 + \\frac{1}{2}\\right)$$
                      بما أن $\\Delta d = 3\\frac{\\lambda}{2}$، فإن النقطتين $M_1$ و $M_2$ تهتزان <b>على تعاكس في الطور</b> (رغم أن $M_1 M_2$ مضاعف لـ $\\lambda$)!</p>
                    </div>
                  </details>
                </div>
              </div>

`);
