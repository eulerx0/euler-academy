window.EulerAcademy.registerExam('phys-02', `

        <!-- Master Exam Bank: Devoir Surveillé Blanc N°2 Physique (20/20) -->
        <div id="masterExam" class="scroll-mt-28 glass rounded-3xl p-5 sm:p-8 border border-amber-500/40 bg-slate-900/90 shadow-2xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div class="flex items-center gap-2 mb-1.5">
                <span class="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  الفرض المحروس التجريبي الشامل N°2 • الفيزياء 2BAC PC
                </span>
                <span class="text-xs text-slate-400 font-mono">Devoir Surveillé Blanc (20/20)</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white">
                امتحان توليفي شامل في الموجات المتوالية الدورية ($T, \\lambda$، مقارنة الطور، الوماض، الحيود، والتبدد)
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
            يغطي هذا الفرض جميع الكفايات المرجعية للدرس الثاني في الفيزياء (<b>الموجات الميكانيكية المتوالية الدورية — 2BAC PC</b>) وفق معيار الامتحان الوطني وفروض التميز لدكتور الرياح، بما في ذلك فخاخ العدّ الطبوغرافي، شرط الوصول الثنائي البعد $t \\ge SM/v$، وإبراز حيود الموجات فوق الصوتية، مع بطاقة عناصر الإجابة وسلم التنقيط الرسمي.
          </p>

          <!-- Exam Paper: 4 Exercises -->
          <div class="space-y-5">
            <!-- Exercice 1 -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-cyan-400">التمرين الأول (4.50 نقط): حبل مهتز، الوماض الكهربائي، فخ الجبهة، وعدد نقط التعاكس</span>
                <span class="font-mono text-xs text-slate-400">4.50 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                يُحدث هزاز طرفي متصل بـ $S(x=0)$ موجة متوالية دورية جيبية على طول حبل مرن مشدود نحو اليمين بسرعة ثابتة $v$. نضيء الحبل بوماض كهربائي تردده $N_e$ قابل للضبط، فنلاحظ توقفاً ظاهرياً واضحاً وبسيطاً من أجل القيمتين $12.5\\text{ Hz}$ و $25.0\\text{ Hz}$ (ولا نلاحظ أي توقف بسيط لأي تردد $N_e &gt; 25.0\\text{ Hz}$)، بينما يظهر الحبل متحركاً ببطء نحو اليسار عند $N_e = 26.0\\text{ Hz}$.<br/>
                يمثل الشكل (1) مظهر الحبل عند اللحظة $t_1 = 0.24\\text{ s}$ حيث تبلغ جبهة الموجة الأفصول $x_F = 2.40\\text{ m}$، وتقع القمة الأولى المشار إليها بالرمز $C_1$ عند الأفصول $x_{C_1} = 0.70\\text{ m}$ والقمة الرابعة $C_4$ عند $x_{C_4} = 1.90\\text{ m}$.
              </p>

              <div class="my-3 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardExamPhys2Rope">
                <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span>〰️ الشكل (1): مظهر الحبل $y(x)$ عند اللحظة $t_1 = 0.24\\text{ s}$</span>
                  <span class="text-[11px] font-mono text-cyan-400">x_C1 = 0.70 m  •  x_C4 = 1.90 m  •  x_F = 2.40 m</span>
                </div>
                <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                  <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 155" class="w-full h-auto">
                    <defs>
                      <marker id="arrEx2Ax" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
                      </marker>
                    </defs>
                    <line x1="45" y1="95" x2="635" y2="95" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEx2Ax)"/>
                    <line x1="55" y1="138" x2="55" y2="26" stroke="#475569" stroke-width="1.5" marker-end="url(#arrEx2Ax)"/>
                    <text x="642" y="99" fill="#94a3b8" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="start">x(m)</text>
                    <text x="34" y="30" fill="#94a3b8" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">y</text>

                    <!-- Scale: x=0 at 55, 1m=220px -> lambda=0.40m=88px. Peaks at x=0.3, 0.7(C1=209), 1.1, 1.5, 1.9(C4=473), 2.3. Front at 2.40 (x=583) -->
                    <path d="M 55 95 C 68 131, 86 131, 99 95 C 112 59, 130 59, 143 95 C 156 131, 174 131, 187 95 C 200 59, 218 59, 231 95 C 244 131, 262 131, 275 95 C 288 59, 306 59, 319 95 C 332 131, 350 131, 363 95 C 376 59, 394 59, 407 95 C 420 131, 438 131, 451 95 C 464 59, 482 59, 495 95 C 508 131, 526 131, 539 95 C 552 59, 570 59, 583 95 L 622 95" fill="none" stroke="#22d3ee" stroke-width="2.4"/>

                    <!-- Markers S, C1, C4, F -->
                    <circle cx="55" cy="95" r="3.5" fill="#e2e8f0"/>
                    <text x="55" y="148" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">S(0)</text>

                    <circle cx="209" cy="68" r="4" fill="#fbbf24"/>
                    <line x1="209" y1="36" x2="209" y2="68" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="3,2"/>
                    <text x="209" y="148" fill="#fbbf24" font-size="10" font-family="monospace" text-anchor="middle">C1(0.70)</text>

                    <circle cx="473" cy="68" r="4" fill="#fbbf24"/>
                    <line x1="473" y1="36" x2="473" y2="68" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="3,2"/>
                    <text x="473" y="148" fill="#fbbf24" font-size="10" font-family="monospace" text-anchor="middle">C4(1.90)</text>

                    <line x1="209" y1="36" x2="473" y2="36" stroke="#fbbf24" stroke-width="1.4"/>
                    <text x="341" y="24" fill="#fde68a" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">3 * lambda = 1.20 m</text>

                    <circle cx="583" cy="95" r="4" fill="#34d399"/>
                    <text x="583" y="148" fill="#34d399" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">F(2.40)</text>
                  </svg>
                </div>
              </div>

              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>استنتج التردد الحقيقي $N$ للموجة ثم الدور $T$، وفسّر فيزيائياً سبب رؤية الحركة نحو اليسار عندما $N_e = 26.0\\text{ Hz}$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>احسب طول الموجة $\\lambda$ انطلاقاً من $C_1$ و $C_4$، ثم حدّد سرعة الانتشار $v$ بطريقتين (من مظهر الحبل $t_1$ ومن العلاقة الأساسية). <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>نعتبر نقطتين $A(x_A = 0.90\\text{ m})$ و $B(x_B = 2.50\\text{ m})$:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) هل النقطتان $A$ و $B$ في حالة توافق أم تعاكس عند اللحظة $t_1 = 0.24\\text{ s}$؟ ثم ما هي حالتهما الاهتزازية عند اللحظة $t_2 = 0.30\\text{ s}$؟ <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></p>
                    <p>ب) حدّد عدد النقط التي تنتمي إلى القطعة المفتوحة $]S, M[$ (حيث $x_M = 1.10\\text{ m}$) وتهتز على تعاكس في الطور مع المنبع $S$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                  </div>
                </li>
              </ol>
            </div>

            <!-- Exercice 2 -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-emerald-400">التمرين الثاني (5.00 نقط): حوض الموجات الدائرية (2D)، الحيود، وفخ عمق الماء مقابل التبدد</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                تُحدث إبرة مهتزة ترددها $N_1 = 20\\text{ Hz}$ في نقطة $S$ من سطح ماء حوض الموجات (عمق ثابت $h_1$) موجات دائرية متوالية جيبية. عند لحظة معينة، نقيس المسافة بين الخط الدائري (الذروة) الأول $r_1 = 1.50\\text{ cm}$ والخط الدائري السادس $r_6 = 9.00\\text{ cm}$.
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>احسب طول الموجة $\\lambda_1$، ثم استنتج سرعة انتشار الموجات $v_1$ على سطح الماء. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>نعتبر نقطتين $M_1$ و $M_2$ من سطح الماء ليستا على استقامة واحدة مع $S$، حيث $SM_1 = 4.50\\text{ cm}$ و $SM_2 = 8.25\\text{ cm}$، والمسافة المستقيمة بينهما $M_1 M_2 = 6.00\\text{ cm}$. عند اللحظة $t = 0.40\\text{ s}$، بيّن هل النقطتان $M_1$ و $M_2$ على توافق أم على تعاكس في الطور! <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>نعترض الموجات المستقيمة في تجربة مرافقة بحاجز به شق عرضه $a = 1.20\\text{ cm}$:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) هل يحدث الحيود بوضوح عند $N_1 = 20\\text{ Hz}$؟ أُعط قيم خصائص الموجة المحيدة ($N_1', v_1', \\lambda_1'$). <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                    <p>ب) نضبط التردد على $N_2 = 50\\text{ Hz}$ (بنفس العمق $h_1$) فتصبح $\\lambda_2 = 0.90\\text{ cm}$. احسب $v_2$، بيّن هل الماء وسط مبدد، وهل يبقى الحيود واضحاً عبر نفس الفتحة $a$؟ <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                  </div>
                </li>
                <li>إذا أعدنا التجربة بتردد $N_1 = 20\\text{ Hz}$ مع وضع لوح زجاجي في قعر الحوض يُنقص السرعة إلى $v_3 = 0.22\\text{ m}\\cdot\\text{s}^{-1}$، فهل يُثبت تغير السرعة أن الماء مبدد؟ علّل! <span class="font-mono text-cyan-400 text-[11px]">(0.50 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 3 -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-purple-400">التمرين الثالث (5.50 نقط): الموجات فوق الصوتية، راسم التذبذب، وإبراز حيودها بالرسم التخطيطي</span>
                <span class="font-mono text-xs text-slate-400">5.50 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                لقياس سرعة انتشار الموجات فوق الصوتية في الهواء، نربط مستقبلين $R_1$ (ثابت عند $d_0 = 15.0\\text{ cm}$ من الباعث $E$) و $R_2$ (قابل للإزاحة) بمدخلي راسم تذبذب مضبوط على الحساسية الأفقية $S_h = 5.0\\;\\mu\\text{s}/\\text{div}$. عند الموضع $R_2 = d_0$، يظهر الرسم التذبذبي (الشكل 2) توافقاً في الطور حيث يمتد دوران كاملان بالضبط على $10.0\\text{ div}$. بعد ذلك نُزيح $R_2$ ببطء حتى نبلغ المسافة $d_1 = 23.5\\text{ cm}$ الموافقة <b>لحالة التوافق العاشرة</b> بعد الموضع البدئي.
              </p>

              <div class="my-3 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardExamPhys2Oscillo">
                <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span>📺 الشكل (2): شاشة راسم التذبذب لإشارتي $R_1$ و $R_2$ عند التوافق البدئي</span>
                  <span class="text-[11px] font-mono text-purple-300">S_h = 5.0 μs/div  •  2 دور = 10.0 div</span>
                </div>
                <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                  <svg direction="ltr" style="direction: ltr;" viewBox="0 0 600 175" class="w-full h-auto">
                    <!-- Scope Grid: x=60..540 (480px = 10 div, 48px/div), y=24..144 (120px = 4 div, center y=84) -->
                    <rect x="60" y="24" width="480" height="120" rx="4" fill="#030712" stroke="#334155" stroke-width="1.6"/>
                    <line x1="60" y1="84" x2="540" y2="84" stroke="#334155" stroke-width="1"/>
                    <line x1="60" y1="54" x2="540" y2="54" stroke="#1e293b" stroke-width="0.8"/>
                    <line x1="60" y1="114" x2="540" y2="114" stroke="#1e293b" stroke-width="0.8"/>
                    <line x1="180" y1="24" x2="180" y2="144" stroke="#1e293b" stroke-width="0.8"/>
                    <line x1="300" y1="24" x2="300" y2="144" stroke="#334155" stroke-width="1"/>
                    <line x1="420" y1="24" x2="420" y2="144" stroke="#1e293b" stroke-width="0.8"/>

                    <text x="300" y="16" fill="#d8b4fe" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">R1 (bleu) &amp; R2 (jaune) en phase | S_h = 5.0 us/div</text>
                    <!-- 2 exact periods across 480px (1 period = 240px: crest 120, zero 180, trough 240, zero 300, crest 360, zero 420, trough 480, zero 540) -->
                    <path d="M 60 84 C 80 38, 100 38, 120 38 C 140 38, 160 61, 180 84 C 200 107, 220 130, 240 130 C 260 130, 280 107, 300 84 C 320 61, 340 38, 360 38 C 380 38, 400 61, 420 84 C 440 107, 460 130, 480 130 C 500 130, 520 107, 540 84" fill="none" stroke="#22d3ee" stroke-width="2.6"/>
                    <path d="M 60 84 C 80 52, 100 52, 120 52 C 140 52, 160 68, 180 84 C 200 100, 220 116, 240 116 C 260 116, 280 100, 300 84 C 320 68, 340 52, 360 52 C 380 52, 400 68, 420 84 C 440 100, 460 116, 480 116 C 500 116, 520 100, 540 84" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,4"/>
                    <text x="300" y="164" fill="#cbd5e1" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">10.0 divisions horizontales = 2 T</text>
                  </svg>
                </div>
              </div>

              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>حدّد الدور $T$ والتردد $N$ للموجة فوق الصوتية بالكيلوهرتز ($\\text{kHz}$). <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>احسب طول الموجة $\\lambda_{\\text{air}}$ ثم استنتج سرعة انتشار الموجات فوق الصوتية في الهواء $v_{\\text{air}}$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>نغمر نفس التركيب في غاز ثنائي أكسيد الكربون ($\text{CO}_2$) حيث تبلغ سرعة انتشار الصوت $v_{\\text{gaz}} = 272\\text{ m}\\cdot\\text{s}^{-1}$. ما قيمتا تردد الموجة $N_{\\text{gaz}}$ وطول موجتها $\\lambda_{\\text{gaz}}$ في هذا الغاز؟ <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>اقترح تبيانة لتركيب تجريبي مُمَيَّز بالرموز يُمكّن من إبراز ظاهرة حيود هذه الموجات فوق الصوتية. نضع شقاً عرضه $a = 8.0\\text{ mm}$: قارن وضوح الحيود بين الهواء وغاز $\\text{CO}_2$! <span class="font-mono text-cyan-400 text-[11px]">(1.75 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 4 (Problème de Synthèse) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-amber-400">المسألة التوليفية (5.00 نقط): اختبار عدم تبدد الهواء للموجات الصوتية وحيودها عبر باب القسم</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                نختبر انتشار الصوت في الهواء الجاف ($20^\\circ\\text{C}$) باستعمال مكبر صوت موصول بمولد الترددات المنخفضة $GBF$ ومستقبلين صوتيين $M_1$ و $M_2$:
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li><b>التجربة الأولى ($N_a = 850\\text{ Hz}$):</b> نزيح المستقبل $M_2$ بدءاً من موضع أول تعاكس في الطور إلى موضع التعاكس الرابع، فنقيس إزاحة قدرها $\\Delta d_a = 1.20\\text{ m}$. احسب طول الموجة $\\lambda_a$ وسرعة انتشار الصوت $v_a$ في الهواء. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li><b>التجربة الثانية ($N_b = 1700\\text{ Hz}$):</b> نضع $M_2$ أولاً في موضع توافق في الطور مع $M_1$ ($d_0 = 10.0\\text{ cm}$)، ثم نزيحه مبتعداً حتى نرصد <b>التعاكس في الطور السادس</b> بعد $d_0$ عند المسافة $d_1 = 120.0\\text{ cm}$. احسب $\\lambda_b$ ثم $v_b$. <span class="font-mono text-cyan-400 text-[11px]">(1.75 ن)</span></li>
                <li>استنتج مما سبق هل الهواء وسط مبدد أم غير مبدد للموجات الصوتية، مبرزاً كيف تتغير $\\lambda$ بدلالة $N$؟ <span class="font-mono text-cyan-400 text-[11px]">(0.75 ن)</span></li>
                <li>ينفذ صوتُ أستاذٍ (تردده الأساسي $N_c = 340\\text{ Hz}$) وصوتُ موجةٍ فوق صوتية ($N_d = 40\\text{ kHz}$) عبر باب قاعة الدرس المفتوح جزئياً بعرض $a = 0.80\\text{ m}$: فسّر بالحساب لماذا يُسمع صوت الأستاذ في كامل الممر خارج الباب بينما لا تحيد الموجة فوق الصوتية عبر الباب نفسه! <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
              </ol>
            </div>
          </div>

          <!-- Collapsible Master Solution & Marking Scheme -->
          <div class="border border-amber-500/30 rounded-2xl overflow-hidden bg-slate-950/90 mt-6">
            <button type="button" aria-expanded="false" onclick="window.EulerAcademy.toggleCollapsible('phys2-master-solution', this);" class="w-full text-right p-4 sm:p-5 bg-gradient-to-r from-amber-500/20 via-slate-900 to-cyan-500/20 hover:from-amber-500/30 text-xs sm:text-sm font-bold text-amber-300 flex items-center justify-between transition">
              <span class="flex items-center gap-2">
                <span>🏆</span>
                <span>إظهار / إخفاء عناصر الإجابة النموذجية وسلم التنقيط الرسمي المفصل (20 / 20 نقطة)</span>
              </span>
              <span class="font-mono text-xs px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center gap-1.5"><span>Corrigé Officiel</span><span class="sol-chevron inline-block transition-transform">▼</span></span>
            </button>

            <div id="phys2-master-solution" class="hidden p-4 sm:p-6 border-t border-slate-800 space-y-6 text-xs text-slate-300 leading-relaxed">
              <!-- Solution Ex 1 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-cyan-400">حل التمرين الأول (4.50 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. التردد $N$ والدور $T$ وتعليل الحركة العكسية (1.00 ن):</strong><br/>
                  • التردد الحقيقي للموجة يساوي أكبر تردد للوماض يعطي توقفاً ظاهرياً بسيطاً: $N = N_{e,\\max} = 25.0\\text{ Hz}$، ومنه الدور $T = \\frac{1}{N} = \\frac{1}{25.0} = 0.040\\text{ s} = 40\\text{ ms}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                  • عند $N_e = 26.0\\text{ Hz} &gt; N$ يكون $T_e &lt; T$: يلتقط الوميض كل نقطة من الحبل قبل إتمام دورة كاملة فتبدو الموجة متراجعة ببطء نحو اليسار (المنحى المعاكس للانتشار الحقيقي). <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                  <p><strong class="text-white">2. حساب $\\lambda$ والسرعة $v$ بطريقتين (1.25 ن):</strong><br/>
                  • بين القمة $C_1$ والقمة $C_4$ توجد $(4 - 1) = 3$ أطوال موجية: $3\\lambda = 1.90 - 0.70 = 1.20\\text{ m} \\implies \\lambda = 0.40\\text{ m}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                  • الطريقة 1 (من المظهر المكاني): $v = \\frac{x_F}{t_1} = \\frac{2.40}{0.24} = 10.0\\text{ m}\\cdot\\text{s}^{-1}$.<br/>
                  • الطريقة 2 (العلاقة الأساسية): $v = \\lambda \\cdot N = 0.40 \\times 25.0 = 10.0\\text{ m}\\cdot\\text{s}^{-1}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                  <p><strong class="text-white">3. أ) الحالة الاهتزازية لـ $A$ و $B$ عند $t_1$ ثم عند $t_2$ (1.25 ن):</strong><br/>
                  • عند $t_1 = 0.24\\text{ s}$، الجبهة عند $x_F = 2.40\\text{ m} &lt; x_B = 2.50\\text{ m}$! لم تصل الموجة بعد إلى $B$، لذا <b>$B$ ساكنة</b> ولا يمكن مقارنتها مع $A$ عند $t_1$! <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                  • عند $t_2 = 0.30\\text{ s}$ تبلغ الجبهة $x_F' = 10.0 \\times 0.30 = 3.00\\text{ m} &gt; 2.50\\text{ m}$، وتهتز النقطتان معاً: $AB = 2.50 - 0.90 = 1.60\\text{ m} = 4\\lambda$ ($k=4 \\in \\mathbb{N}^*$) $\\implies$ <b>توافق في الطور</b>. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                  <p><strong class="text-white">3. ب) عدد نقط التعاكس مع $S$ داخل $]S, M[$ ($x_M = 1.10\\text{ m}$) (1.00 ن):</strong><br/>
                  نحصر $0 &lt; (k + 0.5)\\lambda &lt; 1.10 \\implies 0 &lt; k + 0.5 &lt; \\frac{1.10}{0.40} = 2.75 \\implies -0.5 &lt; k &lt; 2.25$.<br/>
                  بما أن $k \\in \\mathbb{N}$، فإن $k \\in \\{0, 1, 2\\}$؛ أي توجد بالضبط <b>$3$ نقط</b> عند الأفاصيل $0.20\\text{ m}, 0.60\\text{ m}, 1.00\\text{ m}$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 2 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-emerald-400">حل التمرين الثاني (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. حساب $\\lambda_1$ و $v_1$ (1.00 ن):</strong><br/>
                  • بين الذروة $1$ والذروة $6$ توجد $(6 - 1) = 5$ أطوال موجية: $5\\lambda_1 = 9.00 - 1.50 = 7.50\\text{ cm} \\implies \\lambda_1 = 1.50\\text{ cm} = 0.015\\text{ m}$.<br/>
                  • $v_1 = \\lambda_1 \\cdot N_1 = 0.015 \\times 20 = 0.30\\text{ m}\\cdot\\text{s}^{-1}$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">2. مقارنة حالة $M_1$ و $M_2$ في الانتشار 2D عند $t = 0.40\\text{ s}$ (1.50 ن):</strong><br/>
                  • التحقق من الوصول: $r_F(0.40) = v_1 \\cdot t = 30 \\times 0.40 = 12.0\\text{ cm} &gt; 8.25\\text{ cm}$ (أو $t_2 = 8.25/30 = 0.275\\text{ s} &lt; 0.40\\text{ s}$)، فكلاهما تهتزان. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                  • لأن الانتشار دائري 2D ($M_1$ و $M_2$ ليستا على نفس نصف المستقيم)، نعتمد على <b>فرق المسير $\\Delta d = |SM_2 - SM_1|$</b> وليس $M_1 M_2$:
                  $$\\Delta d = 8.25 - 4.50 = 3.75\\text{ cm} \\implies \\frac{\\Delta d}{\\lambda_1} = \\frac{3.75}{1.50} = 2.5 = 2 + \\frac{1}{2}$$
                  بما أن $\\Delta d = \\frac{5\\lambda_1}{2}$، فإن $M_1$ و $M_2$ تهتزان <b>على تعاكس في الطور</b>. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">3. أ) الحيود عند $N_1 = 20\\text{ Hz}$ (1.00 ن):</strong><br/>
                  • بما أن $a = 1.20\\text{ cm} \\le \\lambda_1 = 1.50\\text{ cm}$، يحدث الحيود بوضوح وتتحول الموجة خلف الشق إلى دائرية.<br/>
                  • خصائص الموجة المحيدة مصونة: $N_1' = 20\\text{ Hz}$، $v_1' = 0.30\\text{ m}\\cdot\\text{s}^{-1}$، $\\lambda_1' = 1.50\\text{ cm}$ (مع تناقص الوسع فقط). <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">3. ب) دراسة الحالة $N_2 = 50\\text{ Hz}$ (1.00 ن):</strong><br/>
                  • $v_2 = \\lambda_2 \\cdot N_2 = (0.90 \\times 10^{-2}) \\times 50 = 0.45\\text{ m}\\cdot\\text{s}^{-1} \\neq v_1$.<br/>
                  • لأن سرعة الانتشار تغيرت بتغير التردد في نفس الوسط، فإن <b>الماء وسط مبدد</b>.<br/>
                  • صار لدينا $a = 1.20\\text{ cm} &gt; \\lambda_2 = 0.90\\text{ cm}$، لذا <b>يزول الحيود الواضح</b>! <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><strong class="text-white">4. فخ تغيير العمق باللوح الزجاجي (0.50 ن):</strong><br/>
                  <b>لا</b>؛ لأن التردد بقي ثابتاً ($N_1 = 20\\text{ Hz}$) بينما تغيّرت البنية الفيزيائية للوسط (عمق الماء). اختبار التبدد يتم حصراً بتغيير التردد في وسط ثابت! <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 3 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-purple-400">حل التمرين الثالث (5.50 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-white">1. الدور $T$ والتردد $N$ (1.25 ن):</strong><br/>
                  $2T = 10.0 \\times S_h = 10.0 \\times 5.0\\;\\mu\\text{s} = 50\\;\\mu\\text{s} \\implies T = 25\\;\\mu\\text{s} = 2.5 \\times 10^{-5}\\text{ s}$.<br/>
                  التردد: $N = \\frac{1}{T} = \\frac{1}{2.5 \\times 10^{-5}} = 4.0 \\times 10^4\\text{ Hz} = 40\\text{ kHz}$. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">2. طول الموجة $\\lambda_{\\text{air}}$ والسرعة $v_{\\text{air}}$ (1.25 ن):</strong><br/>
                  من الموضع البدئي ($R_2 = 15.0\\text{ cm}$) إلى التوافق العاشر بعده أُزيح المستقبل بـ $10\\lambda_{\\text{air}}$:<br/>
                  $$10\\lambda_{\\text{air}} = d_1 - d_0 = 23.5 - 15.0 = 8.5\\text{ cm} \\implies \\lambda_{\\text{air}} = 0.85\\text{ cm} = 8.5 \\times 10^{-3}\\text{ m}$$
                  $$v_{\\text{air}} = \\lambda_{\\text{air}} \\cdot N = 8.5 \\times 10^{-3} \\times 4.0 \\times 10^4 = 340\\text{ m}\\cdot\\text{s}^{-1}$$
                  <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">3. الانتشار في غاز $\\text{CO}_2$ (1.25 ن):</strong><br/>
                  • التردد خاصية للمنبع وحده ولا يتغير بتغير الوسط: $N_{\\text{gaz}} = N = 40\\text{ kHz}$.<br/>
                  • $\\lambda_{\\text{gaz}} = \\frac{v_{\\text{gaz}}}{N} = \\frac{272}{40000} = 6.8 \\times 10^{-3}\\text{ m} = 6.8\\text{ mm}$. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><strong class="text-white">4. التبيانة التجريبية للحيود ومقارنة الشق $a = 8.0\\text{ mm}$ (1.75 ن):</strong><br/>
                  • <b>التبيانة التجريبية:</b> باعث $E$ موجّه نحو حاجز به فتحة عرضها $a$، وخلف الفتحة مستقبل $R$ متصل براسم التذبذب يتحرك وفق قوس دائري بزاوية $\\theta &gt; 0$ بالنسبة للمحور المستقيم للفتحة (نعاين توتراً غير منعدم عند $\\theta &gt; 0$ عند تحقق $a \\le \\lambda$). <span class="text-emerald-400 font-mono">(1.00 ن)</span><br/>
                  • <b>المقارنة عبر $a = 8.0\\text{ mm}$:</b> في الهواء $a = 8.0\\text{ mm} \\le \\lambda_{\\text{air}} = 8.5\\text{ mm}$ (الحيود محقق بوضوح)، أما في غاز $\\text{CO}_2$ فـ $a = 8.0\\text{ mm} &gt; \\lambda_{\\text{gaz}} = 6.8\\text{ mm}$ فلا يتحقق الشرط الصارم $a \\le \\lambda$ ويتراجع الحيود بشكل حاد. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 4 -->
              <div class="space-y-2">
                <h5 class="text-sm font-extrabold text-amber-400">حل المسألة التوليفية (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><strong class="text-cyan-300">1. التجربة الأولى ($N_a = 850\\text{ Hz}$) (1.50 ن):</strong><br/>
                  • المسافة بين أول تعاكس ($0.5\\lambda_a$) ورابع تعاكس ($3.5\\lambda_a$) هي $(4 - 1)\\lambda_a = 3\\lambda_a = 1.20\\text{ m}$:<br/>
                  $$\\lambda_a = \\frac{1.20}{3} = 0.40\\text{ m} \\qquad \\implies \\qquad v_a = \\lambda_a \\cdot N_a = 0.40 \\times 850 = 340\\text{ m}\\cdot\\text{s}^{-1}$$
                  <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><strong class="text-amber-300">2. التجربة الثانية ($N_b = 1700\\text{ Hz}$) (1.75 ن):</strong><br/>
                  • التعاكس السادس بعد موضع التوافق البدئي يوافق $k = 5$ في $\\Delta d_b = (k + \\frac{1}{2})\\lambda_b = 5.5\\lambda_b$:
                  $$\\Delta d_b = 120.0 - 10.0 = 110.0\\text{ cm} = 1.10\\text{ m} \\implies \\lambda_b = \\frac{1.10}{5.5} = 0.20\\text{ m}$$
                  $$v_b = \\lambda_b \\cdot N_b = 0.20 \\times 1700 = 340\\text{ m}\\cdot\\text{s}^{-1}$$
                  <span class="text-emerald-400 font-mono">(1.75 ن)</span></p>
                  <p><strong class="text-emerald-300">3. اختبار التبدد والعلاقة بين $\\lambda$ و $N$ (0.75 ن):</strong><br/>
                  بما أن $v_a = v_b = 340\\text{ m}\\cdot\\text{s}^{-1}$ مستقلة عن التردد $N$، فإن <b>الهواء وسط غير مبدد</b> للموجات الصوتية، وتصبح $\\lambda = \\frac{340}{N}$ متناسبة عكسياً مع التردد. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                  <p><strong class="text-rose-300">4. حيود الصوت البشري عبر الباب المفتوح ($a = 0.80\\text{ m}$) (1.00 ن):</strong><br/>
                  • لصوت الأستاذ ($N_c = 340\\text{ Hz}$): $\\lambda_c = \\frac{340}{340} = 1.00\\text{ m} \\ge a = 0.80\\text{ m}$، فالشرط $a \\le \\lambda_c$ محقق، فتخضع الموجة الصوتية <b>للحيود الواضح</b> وتنتشر في كامل الممر خلف الباب.<br/>
                  • للموجات فوق الصوتية ($N_d = 40\\text{ kHz}$): $\\lambda_d = 8.5\\text{ mm} \\ll a = 0.80\\text{ m}$، لذا لا يحدث حيود وتنتشر في اتجاه مستقيم ضيق. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
`);
