window.EulerAcademy.registerAxis('chem-04', 'c04-ax1', `

              <div class="space-y-6">
                <!-- 1. Reaction Quotient Qr & Equilibrium Constant K(T) -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">1. تعبير خارج التفاعل $Q_r$ وثابتة التوازن $K$ التي تتعلق فقط بدرجة الحرارة</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">🧪 أ) تعبير خارج التفاعل $Q_r$ وقواعد كتابته:</b>
                      لمجموعة كيميائية مقرونة بالتحول:
                      $$\\alpha\\,\\text{A}(\\text{aq}) + \\beta\\,\\text{B}(\\text{aq}) \\rightleftharpoons \\gamma\\,\\text{C}(\\text{aq}) + \\delta\\,\\text{D}(\\text{aq})$$
                      يُعرّف <b>خارج التفاعل $Q_r$ (Quotient de réaction)</b> — مقدار <b>بدون وحدة</b> — بنسبة جداء تراكيز النواتج على جداء تراكيز المتفاعلات، مرفوعة إلى معاملاتها التناسبية:
                      $$Q_r = \\frac{[\\text{C}]^{\\gamma} \\cdot [\\text{D}]^{\\delta}}{[\\text{A}]^{\\alpha} \\cdot [\\text{B}]^{\\beta}}$$
                      • <b>القاعدة الذهبية الإلزامية للأنواع والأطوار:</b><br/>
                      1) تدخل في التعبير <b>المواد المذابة فقط</b> ($\\text{aq}$) بتراكيزها المولية الفعلية بوحدة <b>$\\text{mol}\\cdot\\text{L}^{-1}$</b>.<br/>
                      2) <b>الأجسام الصلبة ($\\text{s}$)، السوائل الخالصة، والماء كمذيب $\\text{H}_2\\text{O}(\\ell)$ لا تدخل أبداً في تعبير $Q_r$</b> (يُعوّض كل منها اصطلاحياً بالعدد $1$).
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 text-sm block mb-1.5">⚖️ ب) ثابتة التوازن $K = Q_{r,\\text{éq}}$ ولا تعلقها بالتراكيز البدئية:</b>
                      • عند بلوغ حالة التوازن الكيميائي لمجموعة مقرونة بمعادلة تفاعل معينة عند درجة حرارة ثابتة $T$، يؤول خارج التفاعل نحو قيمة حدّية ثابتة تسمى <b>ثابتة التوازن $K$</b>:
                      $$Q_{r,\\text{éq}} = K$$
                      • <b>ثبات $K$ بالنسبة للحالة البدئية:</b> لا تتعلق $K$ بالتراكيز البدئية للمتفاعلات ولا بالكميات البدئية الممزوجة (ولا بوجود حفاز أو تخفيف)!<br/>
                      • <b>متى تتغير $K$؟</b> تتعلق فقط <b>بمعادلة التفاعل (الكتابة والمنحى)</b> وبـ <b>درجة الحرارة $T$</b>.<br/>
                      • لتفاعل حمض ضعيف $\\text{HA}$ (تركيزه البدئي $C$) مع الماء $\\text{HA} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{A}^- + \\text{H}_3\\text{O}^+$:
                      $$K = \\frac{[\\text{A}^-]_{\\text{éq}}[\\text{H}_3\\text{O}^+]_{\\text{éq}}}{[\\text{HA}]_{\\text{éq}}} = \\frac{C\\,\\tau^2}{1 - \\tau} = \\frac{10^{-2pH}}{C - 10^{-pH}}$$
                    </div>
                  </div>

                  <!-- SVG Diagram: Convergence of Qr(t) from different C1, C2 toward same K(T) + Inclusion Rules -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardQuotientAndK">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📈 تقارب خارج التفاعل $Q_r(t)$ من تراكيز بدئية مختلفة ($C_1, C_2$) نحو نفس ثابتة التوازن $K(T)$</span>
                      <span class="text-[11px] font-mono text-emerald-400">Qr,eq = K (independante de C)</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 235" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <marker id="arrC4Q" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                          </marker>
                        </defs>

                        <!-- Left Panel: Qr(t) -> K -->
                        <rect x="12" y="14" width="388" height="206" rx="10" fill="rgba(15,23,42,0.72)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="206" y="34" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Invariance de K = Qr,eq a T fixe</text>

                        <line x1="56" y1="194" x2="380" y2="194" stroke="#475569" stroke-width="1.6" marker-end="url(#arrC4Q)"/>
                        <line x1="66" y1="204" x2="66" y2="48" stroke="#475569" stroke-width="1.6" marker-end="url(#arrC4Q)"/>
                        <text x="380" y="210" fill="#94a3b8" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">t</text>
                        <text x="58" y="54" fill="#cbd5e1" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">Qr</text>

                        <!-- Horizontal Ceiling K(T) -->
                        <line x1="66" y1="86" x2="368" y2="86" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,4"/>
                        <text x="58" y="90" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="end">K(T)</text>

                        <!-- Curve 1: from C1 (Qr starts 0) -->
                        <path d="M 66 194 C 110 116, 175 90, 275 86 L 368 86" fill="none" stroke="#22d3ee" stroke-width="2.6"/>
                        <text x="166" y="106" fill="#67e8f9" font-size="10" font-weight="bold" font-family="monospace" text-anchor="end">Essai C1</text>

                        <!-- Curve 2: from C2 (slower initial ramp, same limit K) -->
                        <path d="M 66 194 C 132 152, 200 100, 305 86 L 368 86" fill="none" stroke="#34d399" stroke-width="2.4" stroke-dasharray="4,2"/>
                        <text x="234" y="142" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="start">Essai C2</text>

                        <text x="220" y="182" fill="#cbd5e1" font-size="9.5" font-family="monospace" text-anchor="middle">Meme limite K malgre C1 != C2</text>

                        <!-- Right Panel: Rules & Equation Transformation -->
                        <rect x="414" y="14" width="254" height="206" rx="10" fill="rgba(15,23,42,0.85)" stroke="#334155" stroke-width="1.3"/>
                        <text x="541" y="38" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Regles d'ecriture</text>
                        <line x1="428" y1="50" x2="654" y2="50" stroke="#334155" stroke-width="1"/>
                        <text x="541" y="74" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Aqueux (aq) : IN [mol/L]</text>
                        <text x="541" y="96" fill="#fda4af" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Solide (s), Solvant H2O : 1</text>
                        <line x1="428" y1="112" x2="654" y2="112" stroke="#334155" stroke-width="1"/>
                        <text x="541" y="136" fill="#67e8f9" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">Sens inverse : K' = 1 / K</text>
                        <text x="541" y="158" fill="#d8b4fe" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">Eq x n : K'' = K^n</text>
                        <text x="541" y="196" fill="#94a3b8" font-size="9.5" font-family="monospace" text-anchor="middle">K sans unite (depend de T)</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">دقة المذيب والأجسام الصلبة والوحدات</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «إدخال الماء المذيب $\\text{H}_2\\text{O}(\\ell)$ أو الجسم الصلب في $Q_r$!»</b>
                      في المحاليل المائية المخففة يكون الماء هو <b>المذيب الوفير</b> لذا لا يُكتب $[\\text{H}_2\\text{O}]$ أبداً في المقام! وكذلك كل فلز صلب مثل $\\text{Cu}(s)$ أو $\\text{Ag}(s)$ أو راسب صلب يعوض بـ $1$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «نسيان الأس التناسبي في تفاعل معاملاته غير $1$»</b>
                      في تفاعل $\\text{Cu}(s) + 2\\text{Ag}^+(\\text{aq}) \\rightleftharpoons \\text{Cu}^{2+}(\\text{aq}) + 2\\text{Ag}(s)$، خارج التفاعل هو <b>$Q_r = \\frac{[\\text{Cu}^{2+}]}{[\\text{Ag}^+]^2}$</b>! نسيان التربيع على $[\\text{Ag}^+]$ يفسد قيمة $K$ كلياً!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «تعويض تراكيز الموصلية ($\\text{mol}\\cdot\\text{m}^{-3}$) في $K$!»</b>
                      رغم أن $K$ مقدار بدون وحدة، فاصطلاح الكيمياء يفرض حسابه بتراكيز بوحدة <b>$\\text{mol}\\cdot\\text{L}^{-1}$</b> حصراً! إذا حسبت التركيز بالموصلية $\\text{mol}\\cdot\\text{m}^{-3}$ ولم تضرب في $10^{-3}$ فستحصل على $K$ خاطئة بعامل $10^3$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «الاعتقاد بأن التخفيف أو تغيير $C$ يغيّر ثابتة التوازن $K$»</b>
                      التخفيف (إضافة الماء المقطر) يرفع نسبة التقدم النهائي $\\tau$ ويغيّر التراكيز البدئية والنهائية عند التوازن، <b>لكن ثابتة التوازن $K$ تظل ثابتة تماماً</b> ما دامت درجة الحرارة $T$ ثابتة!
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1 (كلاسيكي وطني): إثبات ثبات $K$ لحمض البنزويك عند تركيزين واستنتاج $\\tau$ و $K$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نحضّر عند $25^\\circ\\text{C}$ محلولين مائيين لحمض البنزويك $\\text{C}_6\\text{H}_5\\text{COOH}$:<br/>
                      – المحلول $(S_1)$: تركيزه $C_1 = 1.00 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$، قيمة الـ $pH$ له $pH_1 = 3.12$.<br/>
                      – المحلول $(S_2)$: تركيزه $C_2 = 2.00 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}$، قيمة الـ $pH$ له $pH_2 = 3.49$.<br/>
                      <b>1.</b> اكتب معادلة تفاعل حمض البنزويك مع الماء وعبّر عن خارج التفاعل عند التوازن $Q_{r,\\text{éq}}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> بالاعتماد على جدول التقدم، أثبت العلاقة: $K = \\frac{C\\,\\tau^2}{1 - \\tau} = \\frac{10^{-2pH}}{C - 10^{-pH}}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>3.</b> احسب $(\\tau_1, K_1)$ للمحلول $(S_1)$ و $(\\tau_2, K_2)$ للمحلول $(S_2)$، ثم استنتج الخاصيتين الأساسيتين لـ $K$ و $\\tau$. <span class="text-emerald-400 font-mono">(0.75 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. المعادلة وتعبير $Q_{r,\\text{éq}}$ (0.50 ن):</b>
                      $$\\text{C}_6\\text{H}_5\\text{COOH}(\\text{aq}) + \\text{H}_2\\text{O}(\\ell) \\rightleftharpoons \\text{C}_6\\text{H}_5\\text{COO}^-(\\text{aq}) + \\text{H}_3\\text{O}^+(\\text{aq})$$
                      لأن الماء مذيب وفير: $Q_{r,\\text{éq}} = K = \\frac{[\\text{C}_6\\text{H}_5\\text{COO}^-]_{\\text{éq}}[\\text{H}_3\\text{O}^+]_{\\text{éq}}}{[\\text{C}_6\\text{H}_5\\text{COOH}]_{\\text{éq}}}$.</p>
                      <p><b>2. إثبات العلاقة بدلالة $C$ و $\\tau$ (0.75 ن):</b> من جدول التقدم على حجم $V$: $x_{\\max} = C\\,V$ و $x_{\\text{éq}} = \\tau\\,C\\,V$. ومنه عند التوازن:<br/>
                      $[\\text{H}_3\\text{O}^+]_{\\text{éq}} = [\\text{C}_6\\text{H}_5\\text{COO}^-]_{\\text{éq}} = \\frac{x_{\\text{éq}}}{V} = C\\,\\tau = 10^{-pH}$، و $[\\text{C}_6\\text{H}_5\\text{COOH}]_{\\text{éq}} = C(1 - \\tau) = C - 10^{-pH}$. بالتعويض في $K$:
                      $$K = \\frac{(C\\,\\tau)^2}{C(1 - \\tau)} = \\frac{C\\,\\tau^2}{1 - \\tau} = \\frac{10^{-2pH}}{C - 10^{-pH}}$$
                      </p>
                      <p><b>3. الحساب العددي والاستنتاج (0.75 ن):</b><br/>
                      • $(S_1)$: $\\tau_1 = \\frac{10^{-3.12}}{1.00\\times 10^{-2}} \\approx 7.59\\%$؛ و $K_1 = \\frac{1.00\\times 10^{-2} \\times (0.0759)^2}{1 - 0.0759} \\approx 6.23 \\times 10^{-5}$.<br/>
                      • $(S_2)$: $\\tau_2 = \\frac{10^{-3.49}}{2.00\\times 10^{-3}} \\approx 16.2\\%$؛ و $K_2 = \\frac{2.00\\times 10^{-3} \\times (0.162)^2}{1 - 0.162} \\approx 6.26 \\times 10^{-5}$.<br/>
                      نلاحظ أن $K_1 \\approx K_2 \\approx 6.2 \\times 10^{-5}$: <b>ثابتة التوازن $K$ مستقلة عن التركيز البدئي $C$</b>، بينما <b>$\\tau$ تزداد عند التخفيف ($C_2 \\lt C_1 \\implies \\tau_2 \\gt \\tau_1$)</b>.</p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: كتابة $Q_r$ مع الأجسام الصلبة وتغيير معاملات المعادلة أو قلب المنحى</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نعتبر عند درجة حرارة ثابتة التحول الكيميائي التالي في محلول مائي، ثابتة توازنه هي $K_1 = 2.5 \\times 10^{15}$:<br/>
                      $$\\text{Cu}(\\text{s}) + 2\\,\\text{Ag}^+(\\text{aq}) \\rightleftharpoons \\text{Cu}^{2+}(\\text{aq}) + 2\\,\\text{Ag}(\\text{s}) \\qquad (1)$$
                      <b>1.</b> اكتب تعبير خارج التفاعل $Q_{r1}$ المقرون بالمعادلة $(1)$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> استنتج ثابتة التوازن $K_2$ للمعادلة المعكوسة $(2)$ وثابتة التوازن $K_3$ للمعادلة $(3)$:
                      $$(2):\\; \\text{Cu}^{2+}(\\text{aq}) + 2\\,\\text{Ag}(\\text{s}) \\rightleftharpoons \\text{Cu}(\\text{s}) + 2\\,\\text{Ag}^+(\\text{aq}), \\qquad (3):\\; \\frac{1}{2}\\text{Cu}(\\text{s}) + \\text{Ag}^+(\\text{aq}) \\rightleftharpoons \\frac{1}{2}\\text{Cu}^{2+}(\\text{aq}) + \\text{Ag}(\\text{s})$$
                      <span class="text-emerald-400 font-mono">(1.00 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. تعبير $Q_{r1}$ (0.50 ن):</b> نحذف الفلزين الصلبين $\\text{Cu}(\\text{s})$ و $\\text{Ag}(\\text{s})$ مع حفظ الأس التناسبي $2$:
                      $$Q_{r1} = \\frac{[\\text{Cu}^{2+}]}{[\\text{Ag}^+]^2}$$
                      </p>
                      <p><b>2. ثوابت التوازن $K_2$ و $K_3$ (1.00 ن):</b><br/>
                      • المعادلة $(2)$ عكس $(1)$: $K_2 = \\frac{[\\text{Ag}^+]_{\\text{éq}}^2}{[\\text{Cu}^{2+}]_{\\text{éq}}} = \\frac{1}{K_1} = \\frac{1}{2.5 \\times 10^{15}} = 4.0 \\times 10^{-16}$.<br/>
                      • المعادلة $(3)$ هي $(1)$ مضروبة في $\\frac{1}{2}$: $K_3 = \\frac{[\\text{Cu}^{2+}]_{\\text{éq}}^{1/2}}{[\\text{Ag}^+]_{\\text{éq}}} = \\sqrt{K_1} = \\sqrt{25 \\times 10^{14}} = 5.0 \\times 10^7$.</p>
                    </div>
                  </div>
                </div>

                <!-- 4. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">استعمال ثبات $K$ لتحديد التركيز المخفف المطلوب</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    نقيس عند $25^\\circ\\text{C}$ محلولاً لحمض الميثانويك $\\text{HCOOH}$ تركيزه $C = 5.00 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$ فنجد $pH = 2.52$.<br/>
                    1) احسب نسبة التقدم النهائي $\\tau$ وثابتة التوازن $K$ المقرونة بتفاعله مع الماء.<br/>
                    2) نريد تخفيف هذا المحلول عند نفس درجة الحرارة إلى تركيز جديد $C'$ بحيث ترتفع نسبة التقدم النهائي إلى $\\tau' = 25.0\\%$. احسب التركيز $C'$ المطلوب!
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. حساب $\\tau$ و $K$:</b><br/>
                      • $[\\text{H}_3\\text{O}^+]_{\\text{éq}} = 10^{-2.52} \\approx 3.02 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}$.<br/>
                      • $\\tau = \\frac{3.02 \\times 10^{-3}}{5.00 \\times 10^{-2}} = 6.04\\%$؛ و $K = \\frac{5.00\\times 10^{-2} \\times (0.0604)^2}{1 - 0.0604} \\approx 1.94 \\times 10^{-4}$.</p>
                      <p><b>2. تحديد التركيز $C'$ عند ثبات $K$:</b><br/>
                      بما أن درجة الحرارة ثابتة تبقى $K$ ثابتة: $K = \\frac{C'\\,\\tau'^2}{1 - \\tau'} \\implies C' = \\frac{K(1 - \\tau')}{\\tau'^2}$:<br/>
                      $$C' = \\frac{1.94 \\times 10^{-4} \\times (1 - 0.250)}{(0.250)^2} = \\frac{1.94 \\times 10^{-4} \\times 0.750}{0.0625} \\approx 2.33 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1}$$
                      </p>
                    </div>
                  </details>
                </div>
              </div>

`);
