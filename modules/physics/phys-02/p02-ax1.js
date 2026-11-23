window.EulerAcademy.registerAxis('phys-02', 'p02-ax1', `

              <div class="space-y-6">
                <!-- 1. Official Definitions & Double Periodicity -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">1. الموجة الميكانيكية المتوالية الدورية والدورية المزدوجة ($T$ و $\\lambda$)</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <p class="text-xs text-slate-300 leading-relaxed mb-4">
                    <b>الموجة الميكانيكية المتوالية الدورية (Onde mécanique progressive périodique)</b> هي موجة ناتجة عن اضطراب مستمر ودوري لمنبع، يتكرر بانتظام خلال فترات زمنية متساوية تسمى <b>الدور $T$</b>. وإذا كان التطور الزمني للمنبع دالة جيبية، سُمّيت الموجة <b>متوالية دورية جيبية</b>. تتميز هذه الموجة بدوريتين متلازمتين:
                  </p>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">⏱️ أ) الدورية الزمانية ($T$ و $N$ — Périodicité temporelle):</b>
                      • <b>الدور $T$ (بوحدة $\\text{s}$):</b> أصغر مدة زمنية تستعيد بعدها نقطة واحدة $M$ من الوسط نفس حالة اهتزازها.<br/>
                      • <b>التردد $N$ (بوحدة $\\text{Hz}$):</b> عدد الأدوار المنجزة في الثانية الواحدة، ويرتبط بالدور بالعلاقة:
                      $$N = \\frac{1}{T} \\qquad \\Longleftrightarrow \\qquad T = \\frac{1}{N}$$
                      • <b>القياس براسم التذبذب:</b> انطلاقاً من المنحنى الزمني $y_M(t)$، نقيس عدد التدريجات الأفقية $X_{\\text{div}}$ الموافقة لدور واحد (أو لـ $k$ أدوار ثم نقسم على $k$) مع الحساسية الأفقية $S_h$:
                      $$T = \\frac{X_{\\text{div}}}{k} \\cdot S_h$$
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 text-sm block mb-1.5">📏 ب) الدورية المكانية — طول الموجة $\\lambda$ (Longueur d'onde):</b>
                      • <b>التعريف الفيزيائي الأول:</b> المسافة التي تقطعها الموجة خلال مدة زمنية تساوي دوراً واحداً $T$:
                      $$\\lambda = v \\cdot T = \\frac{v}{N}$$
                      • <b>التعريف الفيزيائي الثاني (المكافئ):</b> <b>أصغر مسافة</b> تفصل بين نقطتين متتاليتين من وسط الانتشار تهتزان <b>على توافق في الطور</b> في اللحظة نفسها (مثل ذروتين متتاليتين).<br/>
                      • <b>توحيد الوحدات العالمية:</b> $\\lambda$ بـ ($\\text{m}$)، $v$ بـ ($\\text{m}\\cdot\\text{s}^{-1}$)، $T$ بـ ($\\text{s}$)، و $N$ بـ ($\\text{Hz}$).
                    </div>
                  </div>
                </div>

                <!-- 2. SVG Diagram & Experimental Stroboscope Method -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">2. مقارنة الدورية الزمانية $T$ والدورية المكانية $\\lambda$ وتقنية الوماض</span>
                    <span class="text-xs text-cyan-400 font-mono">Aspect temporel vs Aspect spatial</span>
                  </div>

                  <div class="bg-slate-950/90 border border-purple-500/30 rounded-xl p-3.5 text-xs text-slate-200 leading-relaxed mb-4">
                    <b class="text-purple-300">🔦 قاعدة الوماض الكهربائي (Stroboscopie — حوض الموجات أو الحبل المهتز):</b><br/>
                    عند إضاءة موجة ترددها $N$ بوميض تردده $N_e$:<br/>
                    • <b>التوقف الظاهري الوحيد المطابق للواقع:</b> يتحقق عند <b>أكبر تردد للوماض</b> يعطي توقفاً ظاهرياً، وعندها <b>$N = N_{e,\\max}$</b> (وبصفة عامة يتحقق التوقف الظاهري لكل $N_e = \\frac{N}{k}$ حيث $k \\in \\mathbb{N}^*$).<br/>
                    • <b>حركة بطيئة ظاهرية:</b> في <b>المنحى الحقيقي</b> إذا كان $N_e$ أصغر قليلاً من $N$، وفي <b>المنحى المعاكس</b> إذا كان $N_e$ أكبر قليلاً من $N$.
                  </div>

                  <!-- SVG Diagram 1: y_M(t) giving T vs y(x) giving lambda -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardDoublePeriodicity">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>〰️ التمييز المنهجي القاطع بين قراءة الدور $T$ (على محور الزمن) وطول الموجة $\\lambda$ (على محور المسافة)</span>
                      <span class="text-[11px] font-mono text-amber-400">lambda = v * T = v / N</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
                        <div class="flex flex-wrap items-center gap-4">
                          <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-3 h-3 rounded-full bg-cyan-500/40 border border-cyan-400"></span> المنحنى الزمني $y_M(t)$ $\\implies$ يعطي $T$</span>
                          <span class="flex items-center gap-1.5 text-amber-300"><span class="inline-block w-3 h-3 rounded-full bg-amber-500/40 border border-amber-400"></span> المظهر المكاني $y(x)$ $\\implies$ يعطي $\\lambda$</span>
                        </div>
                        <span class="text-emerald-300 font-mono">Attention a l'axe horizontal !</span>
                      </div>
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 265" class="w-full h-auto">
                        <defs>
                          <marker id="arrP2Ax" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                          <marker id="arrCyan2Head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#22d3ee"/>
                          </marker>
                          <marker id="arrAmber2Head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24"/>
                          </marker>
                        </defs>

                        <!-- Top panel: Temporal curve y_M(t) -->
                        <text x="20" y="18" fill="#67e8f9" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="start">1) Oscillogramme y_M(t) -&gt; Mesure de T</text>
                        <line x1="65" y1="92" x2="455" y2="92" stroke="#475569" stroke-width="1.3" marker-end="url(#arrP2Ax)"/>
                        <line x1="65" y1="126" x2="65" y2="52" stroke="#475569" stroke-width="1.3" marker-end="url(#arrP2Ax)"/>
                        <text x="466" y="96" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="start">t (ms)</text>
                        <!-- Sine wave period = 120px, peaks at 95, 215, 335 -->
                        <path d="M 65 92 C 75 60, 85 60, 95 60 C 115 60, 135 124, 155 124 C 175 124, 195 60, 215 60 C 235 60, 255 124, 275 124 C 295 124, 315 60, 335 60 C 355 60, 375 124, 395 124 C 410 124, 420 100, 430 92" fill="none" stroke="#22d3ee" stroke-width="2.4"/>
                        <!-- Period T bracket -->
                        <line x1="95" y1="50" x2="95" y2="62" stroke="#22d3ee" stroke-width="1.2"/>
                        <line x1="215" y1="50" x2="215" y2="62" stroke="#22d3ee" stroke-width="1.2"/>
                        <line x1="100" y1="53" x2="210" y2="53" stroke="#22d3ee" stroke-width="1.6" marker-end="url(#arrCyan2Head)"/>
                        <text x="155" y="45" fill="#22d3ee" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">T</text>

                        <!-- Bottom panel: Spatial curve y(x) -->
                        <text x="20" y="146" fill="#fde68a" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="start">2) Aspect spatial y(x) -&gt; Mesure de lambda</text>
                        <line x1="65" y1="216" x2="455" y2="216" stroke="#475569" stroke-width="1.3" marker-end="url(#arrP2Ax)"/>
                        <line x1="65" y1="252" x2="65" y2="176" stroke="#475569" stroke-width="1.3" marker-end="url(#arrP2Ax)"/>
                        <text x="466" y="220" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="start">x (m)</text>
                        <path d="M 65 216 C 75 184, 85 184, 95 184 C 115 184, 135 248, 155 248 C 175 248, 195 184, 215 184 C 235 184, 255 248, 275 248 C 295 248, 315 184, 335 184 C 355 184, 375 248, 395 248 C 410 248, 420 224, 430 216" fill="none" stroke="#fbbf24" stroke-width="2.4"/>
                        <!-- 2*lambda precision bracket -->
                        <line x1="95" y1="175" x2="95" y2="186" stroke="#fbbf24" stroke-width="1.2"/>
                        <line x1="335" y1="175" x2="335" y2="186" stroke="#fbbf24" stroke-width="1.2"/>
                        <line x1="100" y1="178" x2="330" y2="178" stroke="#fbbf24" stroke-width="1.6" marker-end="url(#arrAmber2Head)"/>
                        <text x="215" y="170" fill="#fbbf24" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">d = 2 * lambda (3 cretes)</text>

                        <!-- Right Summary Box -->
                        <rect x="520" y="42" width="144" height="190" rx="10" fill="rgba(15,23,42,0.85)" stroke="#334155" stroke-width="1.3"/>
                        <text x="592" y="70" fill="#34d399" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">Loi Fondamentale</text>
                        <line x1="534" y1="84" x2="650" y2="84" stroke="#334155" stroke-width="1"/>
                        <text x="592" y="112" fill="#fde68a" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">lambda = v * T</text>
                        <text x="592" y="138" fill="#67e8f9" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">lambda = v / N</text>
                        <line x1="534" y1="158" x2="650" y2="158" stroke="#334155" stroke-width="1"/>
                        <text x="592" y="182" fill="#cbd5e1" font-size="10.5" font-family="monospace" text-anchor="middle">k cretes =&gt; (k-1)*lam</text>
                        <text x="592" y="206" fill="#cbd5e1" font-size="10.5" font-family="monospace" text-anchor="middle">f = 1/T [Hz]</text>
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
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «عدّ خطوط الموجة ($n$ قمم تعني $(n-1)\\lambda$ وليس $n\\lambda$)»:</b>
                      إذا قيست المسافة $d$ من القمة رقم $1$ إلى القمة رقم $5$، فإن عدد أطوال الموجة المحصورة بينهما هو <b>$5 - 1 = 4$</b> ($d = 4\\lambda$) وليس $5$! نفس الخطأ يحدث عند عدّ التوافقات المتتالية بالميكروفون!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «الخلط بين $y_M(t)$ ($T$) و $y(x)$ ($\\lambda$)»:</b>
                      انظر دائماً أولاً لوحدة المحور الأفقي في البيان: إذا كان بالثانية أو الميلي ثانية ($t$) فالمسافة بين قمتين هي <b>الدور $T$</b>؛ وإذا كان بالمتر أو السنتيمتر ($x$) فهي <b>طول الموجة $\\lambda$</b>!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «تحديد التردد الحقيقي $N$ من سلسلة ترددات الوماض»:</b>
                      عند وجود عدة ترددات توقف ظاهري مثل $25\\text{ Hz}$ و $12.5\\text{ Hz}$ و $50\\text{ Hz}$ (دون مضاعفة الشكل)، فتردد الموجة $N$ هو <b>أكبر تردد $N_{e,\\max}$</b> يعطي توقفاً ظاهرياً بسيطاً، لأن كل $N_e = N/k$ ($k \\ge 1$) يعطي توقفاً كذلك.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «التردد خاصية للمنبع فقط والسرعة للوسط (في الوسط غير المبدد)»:</b>
                      عندما تعبر موجة صوتية من الهواء إلى الماء، يتغير وسط الانتشار فتتغير السرعة $v$ ويتغير تبعاً لذلك طول الموجة $\\lambda = v/N$، أما <b>التردد $N$ والدور $T$ فلا يتغيران أبداً</b> لأنهما مفروضان من طرف المنبع!
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: حوض الموجات، الوماض، واختبار تبديد الوسط عند تغيير التردد</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نُحدث في حوض الموجات موجات ميكانيكية متوالية جيبية بواسطة هزاز عمودي تردده $N$. نضيء سطح الماء بوماض، فنلاحظ توقفاً ظاهرياً واضحاً للموجات من أجل ترددات للوماض أقصاها $N_{e,\\max} = 20\\text{ Hz}$ (كما نلاحظ توقفاً عند $10\\text{ Hz}$). نقيس المسافة بين الخط الموجي الدائري (الذروة) رقم $1$ والخط الموجي رقم $5$ فنجد $d = 6.0\\text{ cm}$.<br/>
                      <b>1.</b> حدّد قيمة تردد الموجة $N$، ثم احسب الدور $T$ وطول الموجة $\\lambda$ بالمتر ($\\text{m}$). <span class="text-emerald-400 font-mono">(1.00 ن)</span><br/>
                      <b>2.</b> استنتج سرعة انتشار الموجات $v$ على سطح الماء. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>3.</b> نضبط تردد الهزاز على القيمة $N' = 40\\text{ Hz}$ فنجد طول الموجة الجديد $\\lambda' = 0.90\\text{ cm}$. احسب السرعة $v'$ واستنتج هل الماء وسط مبدد أم لا؟ <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. التردد $N$ والدور $T$ وطول الموجة $\\lambda$:</b><br/>
                      • يساوي تردد الموجة أكبر تردد للوماض يعطي توقفاً ظاهرياً بسيطاً: $N = N_{e,\\max} = 20\\text{ Hz}$.<br/>
                      • الدور: $T = \\frac{1}{N} = \\frac{1}{20} = 0.050\\text{ s} = 50\\text{ ms}$.<br/>
                      • بين القمة رقم $1$ والقمة رقم $5$ توجد $(5 - 1) = 4$ أطوال موجية متتالية: $d = 4\\lambda \\implies \\lambda = \\frac{6.0}{4} = 1.5\\text{ cm} = 1.5 \\times 10^{-2}\\text{ m}$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                      <p><b>2. سرعة الانتشار $v$:</b><br/>
                      $$v = \\lambda \\cdot N = 1.5 \\times 10^{-2} \\times 20 = 0.30\\text{ m}\\cdot\\text{s}^{-1}$$
                      <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>3. حساب $v'$ وطبيعة الوسط:</b><br/>
                      • $v' = \\lambda' \\cdot N' = (0.90 \\times 10^{-2}) \\times 40 = 0.36\\text{ m}\\cdot\\text{s}^{-1}$.<br/>
                      • بما أن سرعة الانتشار تغيّرت عندما تغيّر تردد الموجة ($v' \\neq v$)، فإن <b>سطح الماء وسط مبدد للموجات</b> (في حالة العمق الصغير). <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: راسم التذبذب، الحساسية الأفقية $S_h$، والموجات فوق الصوتية</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      لقياس سرعة الموجات فوق الصوتية في الهواء، نعاين الإشارة المستقبلة عبر ميكروفون على شاشة راسم التذبذب مضبوط على الحساسية الأفقية $S_h = 5.0\\;\\mu\\text{s}/\\text{div}$، فنلاحظ أن $3$ أدوار كاملة تمتد بالضبط على $X = 6.0\\text{ div}$. بعد ذلك نزيح المستقبل انطلاقاً من أول موضع توافق في الطور نحو موضع التوافق رقم $16$ فنقيس المسافة المقطوعة $d = 5.10\\text{ cm}$.<br/>
                      <b>1.</b> احسب الدور $T$ والتردد $N$ للموجة فوق الصوتية. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> استنتج طول الموجة $\\lambda$ ثم سرعة انتشار الصوت $v$ في الهواء. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. الدور $T$ والتردد $N$:</b><br/>
                      • $3T = X \\cdot S_h = 6.0 \\times 5.0\\;\\mu\\text{s} = 30\\;\\mu\\text{s} \\implies T = 10\\;\\mu\\text{s} = 1.0 \\times 10^{-5}\\text{ s}$.<br/>
                      • التردد: $N = \\frac{1}{T} = \\frac{1}{1.0 \\times 10^{-5}} = 1.0 \\times 10^5\\text{ Hz} = 100\\text{ kHz}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                      <p><b>2. طول الموجة $\\lambda$ والسرعة $v$:</b><br/>
                      • من موضع التوافق رقم $1$ إلى الموضع رقم $16$ أزحنا المستقبل بـ $(16 - 1) = 15$ طول موجة:
                      $$15\\lambda = 5.10\\text{ cm} \\implies \\lambda = \\frac{5.10}{15} = 0.34\\text{ cm} = 3.4 \\times 10^{-3}\\text{ m}$$
                      • سرعة الانتشار:
                      $$v = \\frac{\\lambda}{T} = \\frac{3.4 \\times 10^{-3}}{1.0 \\times 10^{-5}} = 340\\text{ m}\\cdot\\text{s}^{-1}$$
                      <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 5. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">مظهر حبل مهتز وعدد الأدوار المنجزة</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    تنتشر موجة دورية جيبية على طول حبل متجانس طوله الكلي $L = 6.0\\text{ m}$ بسرعة ثابتة $v = 12.0\\text{ m}\\cdot\\text{s}^{-1}$. يُظهر مظهر الحبل في لحظة معينة $4$ قمم متتالية بحيث تبلغ المسافة بين القمة الأولى والقمة الرابعة بالضبط $2.40\\text{ m}$.<br/>
                    1) حدّد طول الموجة $\\lambda$، الدور $T$، والتردد $N$ للمنبع.<br/>
                    2) احسب عدد الأدوار (الدورات الاهتزازية) التي ينجزها المنبع $S$ خلال المدة اللازمة لوصول جبهة الموجة إلى الطرف الآخر للحبل.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. حساب $\\lambda$ و $T$ و $N$:</b><br/>
                      • بين $4$ قمم متتالية توجد $(4 - 1) = 3$ أطوال موجية: $3\\lambda = 2.40\\text{ m} \\implies \\lambda = 0.80\\text{ m}$.<br/>
                      • الدور: $T = \\frac{\\lambda}{v} = \\frac{0.80}{12.0} = \\frac{1}{15}\\text{ s} \\approx 6.67 \\times 10^{-2}\\text{ s}$، والتردد $N = \\frac{v}{\\lambda} = \\frac{12.0}{0.80} = 15\\text{ Hz}$.</p>
                      <p><b>2. عدد الأدوار المنجزة خلال وصول الجبهة للنهاية ($L = 6.0\\text{ m}$):</b><br/>
                      • الزمن المستغرق: $\\Delta t = \\frac{L}{v} = \\frac{6.0}{12.0} = 0.50\\text{ s}$.<br/>
                      • عدد الأدوار: $k = \\frac{\\Delta t}{T} = \\Delta t \\cdot N = 0.50 \\times 15 = 7.5$ دور (لاحظ أنه يساوي مباشرة $\\frac{L}{\\lambda} = \\frac{6.0}{0.80} = 7.5$!).</p>
                    </div>
                  </details>
                </div>
              </div>

`);
