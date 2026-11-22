window.EulerAcademy.registerExam('phys-01', `

        <!-- Master Exam Bank: Devoir Surveillé Blanc N°1 Physique (20/20) -->
        <div id="masterExam" class="scroll-mt-28 glass rounded-3xl p-5 sm:p-8 border border-amber-500/40 bg-slate-900/90 shadow-2xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div class="flex items-center gap-2 mb-1.5">
                <span class="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  الفرض المحروس التجريبي الشامل N°1 • الفيزياء 2BAC PC
                </span>
                <span class="text-xs text-slate-400 font-mono">Devoir Surveillé Blanc (20/20)</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white">
                امتحان توليفي شامل في الموجات الميكانيكية المتوالية، عوامل السرعة، والتأخر الزمني $\\tau$
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
            يغطي هذا الفرض التجريبي التوليفي جميع الكفايات والمهارات المرجعية للدرس الأول في الفيزياء (<b>الموجات الميكانيكية المتوالية — 2BAC PC</b>) وفق معيار الامتحان الوطني وفروض التميز لدكتور الرياح، مع بطاقة عناصر الإجابة وسلم التنقيط الرسمي المفصل.
          </p>

          <!-- Exam Paper: 4 Exercises -->
          <div class="space-y-5">
            <!-- Exercice 1 -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-cyan-400">التمرين الأول (4.50 نقط): انتشار موجة مستعرضة، تقنية الإزاحة الزمنية، ومنحنى $x_F(t)$</span>
                <span class="font-mono text-xs text-slate-400">4.50 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                نُحدث عند اللحظة $t_0 = 0$ تشويهاً ميكانيكياً عند الطرف $S(x=0)$ لحبل طويل أفقي ومشدود، فينتشر على طول الحبل نحو اليمين دون خمود. عند اللحظة $t_1 = 0.25\\text{ s}$، نلتقط صورة للحبل فنجد أن منطقة التشويه تمتد من مؤخرة الموجة $x_Q = 1.20\\text{ m}$ إلى جبهة الموجة $x_F = 2.00\\text{ m}$ بوسع موجب $+3.0\\text{ cm}$ وذروة وحيدة $C$ في المنتصف $x_C = 1.60\\text{ m}$. نعتبر النقطتين $A(x_A = 1.80\\text{ m})$ و $B(x_B = 1.40\\text{ m})$.
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>عرّف الموجة الميكانيكية المتوالية، وحدّد مع التعليل هل الموجة المنتشرة على الحبل مستعرضة أم طولية؟ وما هو بُعد انتشارها؟ <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>باستعمال تقنية الإزاحة الزمنية ($t_1 \\to t_1 + \\delta t$)، حدّد عند اللحظة $t_1$ منحى حركة كل من النقطتين $A$ و $B$، ثم استنتج في أي منحى تحرك المنبع $S$ عند اللحظة $t_0 = 0$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>أعطت الدراسة التجريبية لتقدم الجبهة $F$ بدلالة الزمن مستقيماً يمر من أصل المعلم معادلته $x_F(t) = v \\cdot t$:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) احسب سرعة انتشار الموجة $v$، ثم استنتج طول التشويه $L$ ومدة اهتزاز كل نقطة من الحبل $\\Delta t_{\\text{pert}}$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></p>
                    <p>ب) في أية لحظة $t_2$ تغادر مؤخرة الموجة $Q$ النقطةَ $N$ ذات الأفصول $x_N = 3.60\\text{ m}$ وتعود النقطة $N$ إلى سكونها النهائي؟ <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                  </div>
                </li>
              </ol>
            </div>

            <!-- Exercice 2 -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-emerald-400">التمرين الثاني (5.00 نقط): العوامل المؤثرة في السرعة ($F$ و $\\mu$)، التحليل البعدي، والتراكب</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                ندرس انتشار موجة ميكانيكية على طول حبل مرن متجانس طوله الكلي $L_c = 6.0\\text{ m}$ وكتلته $m$ خاضع لتوتر $F$. تُعطى سرعة الانتشار بالعلاقة $v = \\sqrt{\\frac{F}{\\mu}}$ حيث $\\mu = \\frac{m}{L_c}$ الكتلة الطولية للحبل.
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>تحقّق باستعمال معادلة الأبعاد (<i>Analyse dimensionnelle</i>) من تجانس العلاقة $v = \\sqrt{\\frac{F}{\\mu}}$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>مكّن قياس سرعة الانتشار $v$ من أجل قيم مختلفة لتوتر الحبل $F$ من خط المنحنى البياني $v^2 = f(F)$، فحصلنا على مستقيم يمر من أصل المعلم ويمر من النقطة $(F_1 = 2.5\\text{ N} \\,;\\, v_1^2 = 100\\text{ m}^2\\cdot\\text{s}^{-2})$:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) احسب المعامل الموجه $k'$ لهذا المستقيم وحدّد مدلوله الفيزيائي، ثم استنتج قيمة الكتلة الطولية $\\mu$ وكتلة الحبل $m$ بالغرام ($\\text{g}$). <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></p>
                    <p>ب) نضبط التوتر على القيمة $F_1 = 2.5\\text{ N}$ (أي $v_1 = 10\\text{ m}\\cdot\\text{s}^{-1}$). ما قيمة التوتر الجديد $F_2$ الواجب تطبيقه لكي يتقلص التأخر الزمني بين المنبع وأي نقطة من الحبل إلى النصف ($\\tau_2 = \\frac{\\tau_1}{2}$)؟ <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                  </div>
                </li>
                <li>عند ضبط التوتر على $F_1 = 2.5\\text{ N}$ ($v_1 = 10\\text{ m}\\cdot\\text{s}^{-1}$)، نُحدث في اللحظة نفسها $t_0 = 0$ تشويهين متطابقين في الشكل ومختلفي الإشارة من طرفي الحبل $S_1(x=0)$ (وسعه $y_1 = +2.5\\text{ cm}$) و $S_2(x = 6.0\\text{ m})$ (وسعه $y_2 = -2.5\\text{ cm}$): حدّد لحظة وموضع التطابق التام لمركزي التشويهين، وصِف مظهر الحبل في تلك اللحظة وما يحدث للموجتين بعد الالتقاء مباشرة مع ذكر الخاصية الفيزيائية المسؤولة. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 3 -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-purple-400">التمرين الثالث (5.50 نقط): التأخر الزمني $\\tau$، العلاقة الاستطالية، والمظهر غير المتماثل</span>
                <span class="font-mono text-xs text-slate-400">5.50 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                ينطلق تشويه مثلثي <b>غير متماثل</b> من المنبع $S(x=0)$ عند اللحظة $t_0 = 0$ وينتشر على طول حبل نحو اليمين. يمثل الرسم أسفله مظهر الحبل عند اللحظة $t_1 = 0.40\\text{ s}$، حيث تقع جبهة الموجة (الواجهة العمودية الحادة بوسع $+2.4\\text{ cm}$) عند الأفصول $x_F = 1.60\\text{ m}$ ومؤخرة الموجة (نهاية الجزء المائل) عند $x_Q = 1.00\\text{ m}$.
              </p>

              <div class="my-3 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardExamPhysRope">
                <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span>📐 الشكل (1): مظهر الحبل $y(x)$ عند اللحظة $t_1 = 0.40\\text{ s}$</span>
                  <span class="text-[11px] font-mono text-cyan-400">x_Q = 1.00 m • x_F = 1.60 m</span>
                </div>
                <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                  <svg direction="ltr" style="direction: ltr;" viewBox="0 0 600 135" class="w-full h-auto">
                    <defs>
                      <marker id="arrExAx" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
                      </marker>
                      <marker id="arrExV" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
                      </marker>
                    </defs>
                    <line x1="45" y1="98" x2="555" y2="98" stroke="#475569" stroke-width="1.8" marker-end="url(#arrExAx)"/>
                    <line x1="55" y1="108" x2="55" y2="18" stroke="#475569" stroke-width="1.8" marker-end="url(#arrExAx)"/>
                    <text x="575" y="102" fill="#94a3b8" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">x(m)</text>
                    <text x="30" y="24" fill="#94a3b8" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">y(cm)</text>

                    <!-- Scale: x=0 at 55, 1m = 110px -> x_Q=1.00 at 165, x_F=1.60 at 231, x_M1=2.40 at 319, x_M2=3.80 at 473 -->
                    <path d="M 55,98 L 165,98 L 231,34 L 231,98 L 535,98" fill="none" stroke="#22d3ee" stroke-width="3" stroke-linejoin="round"/>
                    <polygon points="165,98 231,34 231,98" fill="rgba(34,211,238,0.14)"/>

                    <line x1="245" y1="44" x2="305" y2="44" stroke="#34d399" stroke-width="2" marker-end="url(#arrExV)"/>
                    <text x="275" y="34" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">v →</text>

                    <circle cx="55" cy="98" r="3.5" fill="#e2e8f0"/>
                    <text x="55" y="118" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">S(0)</text>

                    <circle cx="165" cy="98" r="3.5" fill="#fbbf24"/>
                    <text x="165" y="118" fill="#fbbf24" font-size="10" font-family="monospace" text-anchor="middle">Q(1.00)</text>

                    <circle cx="231" cy="98" r="4" fill="#34d399"/>
                    <text x="231" y="118" fill="#34d399" font-size="10" font-family="monospace" text-anchor="middle">F(1.60)</text>
                    <text x="231" y="25" fill="#22d3ee" font-size="10" font-family="monospace" text-anchor="middle">+2.4cm</text>

                    <circle cx="319" cy="98" r="4" fill="#c084fc"/>
                    <text x="319" y="118" fill="#c084fc" font-size="10" font-family="monospace" text-anchor="middle">M₁(2.40)</text>

                    <circle cx="473" cy="98" r="4" fill="#fb7185"/>
                    <text x="473" y="118" fill="#fb7185" font-size="10" font-family="monospace" text-anchor="middle">M₂(3.80)</text>
                  </svg>
                </div>
              </div>

              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>انطلاقاً من مظهر الحبل في اللحظة $t_1 = 0.40\\text{ s}$، احسب سرعة انتشار الموجة $v$، وطول التشويه $L$، ومدة اهتزاز المنبع $\\Delta t_S$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>نعتبر نقطتين من الحبل: $M_1(x_1 = 2.40\\text{ m})$ و $M_2(x_2 = 3.80\\text{ m})$:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) احسب التأخر الزمني $\\tau_1$ للنقطة $M_1$ بالنسبة للمنبع $S$، والتأخر الزمني $\\tau_{2/1}$ للنقطة $M_2$ بالنسبة للنقطة $M_1$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                    <p>ب) اكتب العلاقة الاستطالية التي تربط $y_{M_1}(t)$ بـ $y_S(t)$، والعلاقة التي تربط $y_{M_2}(t)$ بـ $y_{M_1}(t)$، وحدّد المجال الزمني الذي تهتز خلاله النقطة $M_1$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></p>
                  </div>
                </li>
                <li>مثّل مع التعليل منحنى تغيرات استطالة النقطة $M_1$ بدلالة الزمن $y_{M_1}(t)$، ثم احسب قيمة استطالة النقطة $M_2$ عند اللحظة $t^* = 0.95\\text{ s}$ (لحظة وصول الجبهة) وعند اللحظة $t^{**} = 1.05\\text{ s}$. <span class="font-mono text-cyan-400 text-[11px]">(1.75 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 4 (Problème de Synthèse) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-amber-400">المسألة التوليفية (5.00 نقط): الموجات فوق الصوتية (راسم التذبذب والسونار) + رصد الزلازل ($P$ و $S$)</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300 font-bold text-cyan-300">الجزء الأول (2.50 نقط): الموجات فوق الصوتية وراسم التذبذب والسونار البحري</p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>نضع في الهواء باعثاً $E$ ومستقبلين للموجات فوق الصوتية $R_1$ و $R_2$ على استقامة واحدة تفصلهما المسافة $d = 51\\text{ cm}$. نضبط الحساسية الأفقية لراسم التذبذب على $S_h = 0.25\\text{ ms/div}$ فنقرأ تأخراً أفقياً بين الإشارتين الملتقطتين قدره $n = 6.0\\text{ div}$. احسب التأخر الزمني $\\tau_{\\text{air}}$ واستنتج سرعة انتشار الموجات فوق الصوتية في الهواء $v_{\\text{air}}$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>نعيد التجربة نفسها في حوض مملوء بماء البحر ($d = 51\\text{ cm}$)، فيتقلص التأخر الزمني إلى $\\tau_{\\text{eau}} = 0.34\\text{ ms}$. احسب سرعة الموجات فوق الصوتية في الماء $v_{\\text{eau}}$ وفسّر فيزيائياً سبب اختلاف السرعتين. <span class="font-mono text-cyan-400 text-[11px]">(0.75 ن)</span></li>
                <li>يُرسل مسبار سفينة (Sonar) إشارة فوق صوتية عمودياً نحو قاع البحر، فيلتقط صدى الإشارة المنعكسة عن القاع بعد مرور $\\Delta t_{\\text{écho}} = 0.80\\text{ s}$ من لحظة الإرسال. احسب عمق البحر $H$ في هذا الموضع. <span class="font-mono text-cyan-400 text-[11px]">(0.75 ن)</span></li>
              </ol>

              <p class="text-xs text-slate-300 font-bold text-amber-300 pt-2">الجزء الثاني (2.50 نقط): تحديد مسافة ولحظة حدوث زلزال عبر الموجتين $P$ و $S$</p>
              <p class="text-xs text-slate-300 leading-relaxed">
                عند حدوث هزة أرضية في بؤرة $F$ على مسافة $D$ من محطة الرصد $M$ عند لحظة مجهولة $t_0$، تنطلق في الآن نفسه الموجات الزلزالية الأولية الطولية $P$ بسرعة $v_P = 6.0\\text{ km}\\cdot\\text{s}^{-1}$ والموجات الثانوية المستعرضة $S$ بسرعة $v_S = 3.6\\text{ km}\\cdot\\text{s}^{-1}$.
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed" start="4">
                <li>لماذا تنتشر الموجات الزلزالية $P$ في كل من الأوساط الصلبة والسائلة بينما لا تنتشر الموجات $S$ في النواة الخارجية السائلة للأرض؟ <span class="font-mono text-cyan-400 text-[11px]">(0.50 ن)</span></li>
                <li>سجّل جهاز السيزموغراف في المحطة $M$ وصول الموجة $P$ عند الساعة $08\\text{h }15\\text{min }20\\text{s}$، ووصول الموجة $S$ عند الساعة $08\\text{h }15\\text{min }36\\text{s}$:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) أثبت أن المسافة $D$ الفاصلة بين البؤرة $F$ والمحطة $M$ تُكتب على الشكل $D = \\frac{v_P \\cdot v_S}{v_P - v_S} \\cdot \\Delta t$ حيث $\\Delta t = t_S - t_P$، ثم احسب قيمة $D$ بالكيلومتر ($\\text{km}$). <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></p>
                    <p>ب) استنتج اللحظة الدقيقة $t_0$ (بالساعة والدقيقة والثانية) التي وقع فيها الزلزال في البؤرة $F$. <span class="font-mono text-cyan-400 text-[11px]">(0.75 ن)</span></p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <!-- Collapsible Master Solution & Marking Scheme -->
          <div class="border border-amber-500/30 rounded-2xl overflow-hidden bg-slate-950/90 mt-6">
            <button type="button" aria-expanded="false" onclick="window.EulerAcademy.toggleCollapsible('phys1-master-solution', this);" class="w-full text-right p-4 sm:p-5 bg-gradient-to-r from-amber-500/20 via-slate-900 to-cyan-500/20 hover:from-amber-500/30 text-xs sm:text-sm font-bold text-amber-300 flex items-center justify-between transition">
              <span class="flex items-center gap-2">
                <span>🏆</span>
                <span>إظهار / إخفاء عناصر الإجابة النموذجية وسلم التنقيط الرسمي المفصل (20 / 20 نقطة)</span>
              </span>
              <span class="font-mono text-xs px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center gap-1.5"><span>Corrigé Officiel</span><span class="sol-chevron inline-block transition-transform">▼</span></span>
            </button>

            <div id="phys1-master-solution" class="hidden p-4 sm:p-6 border-t border-slate-800 space-y-6 text-xs text-slate-300 leading-relaxed">
              <!-- Solution Ex 1 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-cyan-400">حل التمرين الأول (4.50 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. التعريف، التصنيف، وبُعد الانتشار (1.00 ن):</strong><br/>
                  • <b>تعريف الموجة الميكانيكية المتوالية:</b> تتابع مستمر لإشارات ميكانيكية ناتجة عن اضطراب مصان ومستمر لمنبع، تنتشر في وسط مادي مرن <b>دون انتقال للمادة</b> ومع انتقال للطاقة. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                  • الموجة على الحبل <b>مستعرضة</b> لأن اتجاه تشويه نقط الحبل (عمودي) متعامد ($\\perp$) مع اتجاه انتشار الموجة (أفقي)، وانتشارها <b>أحادي البعد (1D)</b> لأنها تنتشر وفق محور واحد. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                  <p><strong class="text-white">2. تحديد منحى حركة $A$ و $B$ والمنبع $S$ (1.00 ن):</strong><br/>
                  بإزاحة مظهر الحبل قليلاً نحو اليمين في اللحظة $t_1 + \\delta t$:<br/>
                  • النقطة $A(1.80\\text{ m})$ تنتمي للجزء الأمامي من التشويه $[x_C, x_F]$ $\\implies$ أرتوبها يزداد، إذن <b>تتحرك $A$ نحو الأعلى ($\\uparrow$)</b>. <span class="text-emerald-400 font-mono">(0.35 ن)</span><br/>
                  • النقطة $B(1.40\\text{ m})$ تنتمي للجزء الخلفي من التشويه $[x_Q, x_C]$ $\\implies$ أرتوبها يتناقص، إذن <b>تتحرك $B$ نحو الأسفل ($\\downarrow$)</b> عائدة إلى موضع التوازن. <span class="text-emerald-400 font-mono">(0.35 ن)</span><br/>
                  • بما أن جبهة الموجة تتحرك نحو الأعلى، فإن المنبع $S$ <b>حُرّك عند $t_0=0$ نحو الأعلى</b>. <span class="text-emerald-400 font-mono">(0.30 ن)</span></p>
                  <p><strong class="text-white">3. أ) السرعة $v$ وطول التشويه $L$ ومدة الاهتزاز $\\Delta t_{\\text{pert}}$ (1.50 ن):</strong><br/>
                  • سرعة الانتشار: قطعت الجبهة المسافة $x_F = 2.00\\text{ m}$ خلال $t_1 = 0.25\\text{ s}$، إذن:
                  $$v = \\frac{x_F}{t_1} = \\frac{2.00}{0.25} = 8.0\\text{ m}\\cdot\\text{s}^{-1}$$
                  <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                  • طول التشويه على الحبل: $L = x_F - x_Q = 2.00 - 1.20 = 0.80\\text{ m}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                  • مدة اهتزاز كل نقطة: $\\Delta t_{\\text{pert}} = \\frac{L}{v} = \\frac{0.80}{8.0} = 0.10\\text{ s}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                  <p><strong class="text-white">3. ب) لحظة سكون النقطة $N(x_N = 3.60\\text{ m})$ (1.00 ن):</strong><br/>
                  تصل جبهة الموجة إلى $N$ بعد تأخر زمني $\\tau_N = \\frac{x_N}{v} = \\frac{3.60}{8.0} = 0.45\\text{ s}$، وتغادرها المؤخرة $Q$ بعد انقضاء مدة التشويه $\\Delta t_{\\text{pert}} = 0.10\\text{ s}$:
                  $$t_2 = \\tau_N + \\Delta t_{\\text{pert}} = 0.45 + 0.10 = 0.55\\text{ s}$$
                  <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 2 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-emerald-400">حل التمرين الثاني (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. التحليل البعدي لعلاقة السرعة (1.00 ن):</strong><br/>
                  بُعد القوة هو $[F] = M \\cdot L \\cdot T^{-2}$، وبُعد الكتلة الطولية هو $[\\mu] = \\frac{[m]}{[L_c]} = M \\cdot L^{-1}$. ومنه:
                  $$\\left[\\sqrt{\\frac{F}{\\mu}}\\right] = \\left(\\frac{M \\cdot L \\cdot T^{-2}}{M \\cdot L^{-1}}\\right)^{1/2} = (L^2 \\cdot T^{-2})^{1/2} = L \\cdot T^{-1} = [v]$$
                  إذن العلاقة متجانسة بعدياً. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">2. أ) استغلال منحنى $v^2 = f(F)$ وحساب $\\mu$ و $m$ (1.50 ن):</strong><br/>
                  • المعامل الموجه للمستقيم المار من الأصل هو:
                  $$k' = \\frac{v_1^2}{F_1} = \\frac{100}{2.5} = 40\\text{ m}\\cdot\\text{kg}^{-1}$$
                  • من العلاقة النظريّة $v^2 = \\left(\\frac{1}{\\mu}\\right) F$، يمثل المعامل الموجه <b>مقلوب الكتلة الطولية</b> ($k' = \\frac{1}{\\mu}$). <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                  • الكتلة الطولية: $\\mu = \\frac{1}{k'} = \\frac{1}{40} = 0.025\\text{ kg}\\cdot\\text{m}^{-1} = 25\\text{ g}\\cdot\\text{m}^{-1}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                  • كتلة الحبل: $m = \\mu \\cdot L_c = 0.025 \\times 6.0 = 0.150\\text{ kg} = 150\\text{ g}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                  <p><strong class="text-white">2. ب) حساب التوتر الجديد $F_2$ لتقليص التأخر الزمني إلى النصف (1.00 ن):</strong><br/>
                  لدينا $\\tau = \\frac{SM}{v}$؛ لكي يصبح $\\tau_2 = \\frac{\\tau_1}{2}$ لنفس المسافة $SM$ يجب مضاعفة السرعة: $v_2 = 2 v_1 = 20\\text{ m}\\cdot\\text{s}^{-1}$. وبما أن $F = \\mu \\cdot v^2$:
                  $$F_2 = \\mu \\cdot (2v_1)^2 = 4 (\\mu \\cdot v_1^2) = 4 F_1 = 4 \\times 2.5 = 10.0\\text{ N}$$
                  <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">3. تلاقي التشويهين المتعاكسين وخاصية التراكب (1.50 ن):</strong><br/>
                  • ينطلق التشويهان بنفس السرعة $v_1 = 10\\text{ m}\\cdot\\text{s}^{-1}$ من طرفي الحبل، فيلتقيان في <b>منتصف الحبل</b> $x_c = \\frac{L_c}{2} = 3.0\\text{ m}$ عند اللحظة:
                  $$t_c = \\frac{x_c}{v_1} = \\frac{3.0}{10} = 0.30\\text{ s}$$
                  <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                  • <b>عند لحظة التطابق التام $t_c$:</b> تكون الاستطالة المحصلة مساوية للمجموع الجبري $y = y_1 + y_2 = (+2.5) + (-2.5) = 0\\text{ cm}$، فيبدو الحبل أفقياً مسطحاً لحظياً. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                  • <b>بعد الالتقاء مباشرة:</b> تواصل كل موجة انتشارها بنفس شكلها ووسعها وسرعتها دون أن تتأثر بالأخرى، وذلك بفضل <b>خاصية تراكب الموجات الميكانيكية</b> (<i>Principe de superposition</i>). <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 3 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-purple-400">حل التمرين الثالث (5.50 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. حساب السرعة $v$ وطول التشويه $L$ ومدة اهتزاز المنبع $\\Delta t_S$ (1.50 ن):</strong><br/>
                  • $v = \\frac{x_F}{t_1} = \\frac{1.60}{0.40} = 4.0\\text{ m}\\cdot\\text{s}^{-1}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                  • $L = x_F - x_Q = 1.60 - 1.00 = 0.60\\text{ m}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                  • $\\Delta t_S = \\frac{L}{v} = \\frac{0.60}{4.0} = 0.15\\text{ s}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                  <p><strong class="text-white">2. أ) حساب التأخرين $\\tau_1$ و $\\tau_{2/1}$ (1.00 ن):</strong><br/>
                  • تأخر $M_1$ بالنسبة لـ $S$: $\\tau_1 = \\frac{x_1}{v} = \\frac{2.40}{4.0} = 0.60\\text{ s}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                  • تأخر $M_2$ بالنسبة لـ $M_1$: $\\tau_{2/1} = \\frac{x_2 - x_1}{v} = \\frac{3.80 - 2.40}{4.0} = \\frac{1.40}{4.0} = 0.35\\text{ s}$ (ومنه تأخر $M_2$ بالنسبة لـ $S$ هو $\\tau_2 = \\tau_1 + \\tau_{2/1} = 0.95\\text{ s}$). <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                  <p><strong class="text-white">2. ب) العلاقتان الاستطاليتان ومجال اهتزاز $M_1$ (1.25 ن):</strong><br/>
                  • $y_{M_1}(t) = y_S(t - \\tau_1) = y_S(t - 0.60)$، و $y_{M_2}(t) = y_{M_1}(t - \\tau_{2/1}) = y_{M_1}(t - 0.35)$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                  • تهتز النقطة $M_1$ خلال المجال الزمني $[\\tau_1 \\,;\\, \\tau_1 + \\Delta t_S] = [0.60\\text{ s} \\,;\\, 0.75\\text{ s}]$، وتكون $y_{M_1}(t) = 0$ خارج هذا المجال. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                  <p><strong class="text-white">3. تمثيل $y_{M_1}(t)$ وحساب استطالة $M_2$ (1.75 ن):</strong><br/>
                  • <b>تعليل الشكل المعكوس:</b> في مظهر الحبل $y(x)$، الواجهة الحادة العمودية هي جبهة الموجة $F$ فتصل إلى $M_1$ <b>أولاً</b> عند اللحظة $t = \\tau_1 = 0.60\\text{ s}$ فترتفع الاستطالة عمودياً إلى $+2.4\\text{ cm}$، ثم تتناقص خطياً لتنعدم عند مغادرة المؤخرة $Q$ في اللحظة $t = 0.75\\text{ s}$: <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>

                  <div class="my-3 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardExamPhysTime">
                    <div class="text-xs font-bold text-amber-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>📈 الشكل (2): المنحنى الزمني $y_{M_1}(t)$ للنقطة $M_1(x_1 = 2.40\\text{ m})$</span>
                      <span class="text-[11px] font-mono text-purple-300">الواجهة الحادة أولاً عند τ₁ = 0.60 s</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 600 135" class="w-full h-auto">
                        <defs>
                          <marker id="arrExTAx" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
                          </marker>
                        </defs>
                        <line x1="45" y1="98" x2="555" y2="98" stroke="#475569" stroke-width="1.8" marker-end="url(#arrExTAx)"/>
                        <line x1="55" y1="108" x2="55" y2="18" stroke="#475569" stroke-width="1.8" marker-end="url(#arrExTAx)"/>
                        <text x="575" y="102" fill="#94a3b8" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">t(s)</text>
                        <text x="30" y="24" fill="#94a3b8" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">y_M1</text>

                        <!-- Scale: t=0 at 55, 0.60s at 315, 0.75s at 380 -->
                        <path d="M 55,98 L 315,98 L 315,34 L 380,98 L 530,98" fill="none" stroke="#fbbf24" stroke-width="3" stroke-linejoin="round"/>
                        <polygon points="315,98 315,34 380,98" fill="rgba(251,191,36,0.15)"/>

                        <line x1="58" y1="68" x2="312" y2="68" stroke="#c084fc" stroke-width="1.6" stroke-dasharray="4,3"/>
                        <text x="185" y="58" fill="#c084fc" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">τ₁ = 0.60 s</text>

                        <text x="55" y="118" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">0</text>
                        <circle cx="315" cy="98" r="3.5" fill="#34d399"/>
                        <text x="308" y="118" fill="#34d399" font-size="10" font-family="monospace" text-anchor="middle">0.60</text>
                        <circle cx="380" cy="98" r="3.5" fill="#fbbf24"/>
                        <text x="388" y="118" fill="#fbbf24" font-size="10" font-family="monospace" text-anchor="middle">0.75</text>
                        <text x="315" y="25" fill="#fbbf24" font-size="10" font-family="monospace" text-anchor="middle">+2.4cm</text>
                      </svg>
                    </div>
                  </div>

                  <p>• <b>استطالة $M_2$ عند اللحظتين:</b><br/>
                  - عند $t^* = 0.95\\text{ s}$: $y_{M_2}(0.95) = y_{M_1}(0.95 - 0.35) = y_{M_1}(0.60\\text{ s}) = +2.4\\text{ cm}$ (وصول الذروة الأمامية الحادة). <span class="text-emerald-400 font-mono">(0.35 ن)</span><br/>
                  - عند $t^{**} = 1.05\\text{ s}$: $y_{M_2}(1.05) = y_{M_1}(1.05 - 0.35) = y_{M_1}(0.70\\text{ s})$. وبما أن الاستطالة تتناقص خطياً من $+2.4\\text{ cm}$ في $0.60\\text{ s}$ إلى $0$ في $0.75\\text{ s}$:
                  $$y_{M_2}(1.05) = 2.4 \\times \\frac{0.75 - 0.70}{0.75 - 0.60} = 2.4 \\times \\frac{0.05}{0.15} = +0.80\\text{ cm}$$
                  <span class="text-emerald-400 font-mono">(0.40 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 4 -->
              <div class="space-y-2">
                <h5 class="text-sm font-extrabold text-amber-400">حل المسألة التوليفية (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-cyan-300">الجزء الأول: الموجات فوق الصوتية وراسم التذبذب والسونار (2.50 ن)</strong><br/>
                  <b>1. في الهواء:</b> $\\tau_{\\text{air}} = n \\times S_h = 6.0 \\times 0.25\\text{ ms} = 1.50\\text{ ms} = 1.50 \\times 10^{-3}\\text{ s}$.<br/>
                  وسرعة الانتشار: $v_{\\text{air}} = \\frac{d}{\\tau_{\\text{air}}} = \\frac{0.51}{1.50 \\times 10^{-3}} = 340\\text{ m}\\cdot\\text{s}^{-1}$. <span class="text-emerald-400 font-mono">(1.00 ن)</span><br/>
                  <b>2. في ماء البحر:</b> $v_{\\text{eau}} = \\frac{d}{\\tau_{\\text{eau}}} = \\frac{0.51}{0.34 \\times 10^{-3}} = 1500\\text{ m}\\cdot\\text{s}^{-1}$.<br/>
                  • <b>التفسير الفيزيائي:</b> الماء وسط أكثر تماسكاً وأقل قابلية للانضغاط (معامل مرونته وصلابته أكبر بكثير) من الهواء، فترتفع سرعة انتشار الموجات الصوتية فيه. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                  <b>3. عمق البحر بالسونار:</b> تقطع الموجة المسافة $2H$ ذهاباً وإياباً، إذن:
                  $$H = \\frac{v_{\\text{eau}} \\cdot \\Delta t_{\\text{écho}}}{2} = \\frac{1500 \\times 0.80}{2} = 600\\text{ m}$$
                  <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>

                  <p class="pt-2"><strong class="text-amber-300">الجزء الثاني: رصد الزلزال عبر الموجتين $P$ و $S$ (2.50 ن)</strong><br/>
                  <b>4.</b> الموجات $P$ <b>طولية</b> (انضغاط وتمدد) فتنتشر في الأوساط الصلبة والسائلة والغازية، بينما الموجات $S$ <b>مستعرضة</b> تتطلب قوى قص مرنة لا توجد في الموائع، لذلك لا تخترق النواة الخارجية السائلة للأرض. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                  <b>5. أ) إثبات صيغة المسافة $D$ وحسابها:</b><br/>
                  تصل الموجة $P$ في اللحظة $t_P = t_0 + \\frac{D}{v_P}$ وتصل الموجة $S$ في اللحظة $t_S = t_0 + \\frac{D}{v_S}$. بطرح اللحظتين:
                  $$\\Delta t = t_S - t_P = \\frac{D}{v_S} - \\frac{D}{v_P} = D \\left(\\frac{v_P - v_S}{v_P \\cdot v_S}\\right) \\implies D = \\frac{v_P \\cdot v_S}{v_P - v_S} \\cdot \\Delta t$$
                  • لدينا $\\Delta t = 36\\text{ s} - 20\\text{ s} = 16\\text{ s}$، ومنه:
                  $$D = \\frac{6.0 \\times 3.6}{6.0 - 3.6} \\times 16 = \\frac{21.6}{2.4} \\times 16 = 9.0 \\times 16 = 144\\text{ km}$$
                  <span class="text-emerald-400 font-mono">(1.25 ن)</span><br/>
                  <b>5. ب) استنتاج لحظة حدوث الزلزال $t_0$:</b><br/>
                  المدة التي استغرقتها الموجة $P$ للوصول من البؤرة $F$ إلى المحطة $M$ هي:
                  $$\\tau_P = \\frac{D}{v_P} = \\frac{144}{6.0} = 24\\text{ s}$$
                  وبما أن $t_P = 08\\text{h }15\\text{min }20\\text{s}$، فإن لحظة وقوع الزلزال في البؤرة هي:
                  $$t_0 = t_P - \\tau_P = 08\\text{h }15\\text{min }20\\text{s} - 24\\text{s} = 08\\text{h }14\\text{min }56\\text{s}$$
                  <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
`);
