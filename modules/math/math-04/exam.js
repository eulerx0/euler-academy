window.EulerAcademy.registerExam('math-04', `

        <!-- Master Exam Bank: Devoir Surveillé Blanc N°4 (20/20) -->
        <div id="masterExam" class="scroll-mt-28 glass rounded-3xl p-5 sm:p-8 border border-amber-500/40 bg-slate-900/90 shadow-2xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div class="flex items-center gap-2 mb-1.5">
                <span class="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  الفرض المحروس التجريبي الشامل N°4 • معيار د. الرياح
                </span>
                <span class="text-xs text-slate-400 font-mono">Devoir Surveillé N°4 Blanc (20/20)</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white">
                امتحان توليفي شامل في قابلية الاشتقاق، فخ اتحاد المجالات، حساب الدوال الأصلية المركبة، ودراسة $F$ انطلاقاً من $f$
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
            هذا الفرض المحروس التوليفي مصمم خصيصاً لدرس <b>الدوال الأصلية (2BAC PC)</b> وفق صرامة التصحيح الوطني: تعليل الاتصال قبل الوجود، إثبات قابلية اشتقاق $F$ قبل حساب $F'$، التحقق من إشارة $u(x) \\gt 0$ للقوى الكسرية، والتمييز بين مجال واحد واتحاد مجالات.
          </p>

          <!-- Exam Paper: 4 Exercises = 20.00 pts -->
          <div class="space-y-5">
            <!-- Exercice 1 (5.50 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-cyan-400">التمرين الأول (5.50 نقط): تعيين البارامترات، الشرط البدئي، وفخ اتحاد المجالات $D = \\mathbb{R}\\setminus\\{1\\}$</span>
                <span class="font-mono text-xs text-slate-400">5.50 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                <b>الجزء الأول (3.00 نقط):</b> نعتبر الدالة العددية $f$ المعرفة على المجال $I = \\left]-\\frac{1}{2}, +\\infty\\right[$ بما يلي:
                $$f(x) = \\frac{10x^2 + x + 4}{\\sqrt{2x + 1}}$$
                ونضع على نفس المجال $I$: $F(x) = (ax^2 + bx + c)\\sqrt{2x + 1}$ حيث $a, b, c \\in \\mathbb{R}$.
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>علّل لماذا تقبل الدالة $f$ دوال أصلية على المجال $I$. <span class="font-mono text-cyan-400 text-[11px]">(0.50 ن)</span></li>
                <li>برّر قابلية اشتقاق $F$ على $I$، ثم حدّد الأعداد الحقيقية $a$ و $b$ و $c$ لكي تكون $F$ دالة أصلية لـ $f$ على $I$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>استنتج الدالة الأصلية الوحيدة $G$ لـ $f$ على $I$ التي تحقق الشرط البدئي $G(0) = -2$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
              </ol>
              <p class="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800/70">
                <b>الجزء الثاني (2.50 نقط):</b> نعتبر الدالة $g$ المعرفة على $D = \\mathbb{R}\\setminus\\{1\\} = ]-\\infty, 1[ \\cup ]1, +\\infty[$ بما يلي:
                $$g(x) = \\frac{2x - 4}{(x - 1)^3} + 1$$
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed" start="4">
                <li>فكّك البسط عبر $2x - 4 = 2(x - 1) - 2$ ثم حدّد الدالة الأصلية $H_1$ لـ $g$ على $]1, +\\infty[$ التي تنعدم في $x_0 = 2$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>حدّد الدالة الأصلية $H_2$ لـ $g$ على $]-\\infty, 1[$ التي تحقق $H_2(0) = 7$. <span class="font-mono text-cyan-400 text-[11px]">(0.75 ن)</span></li>
                <li>تُعرَّف الدالة $H$ على $D$ بـ $H(x) = H_2(x)$ لـ $x \\lt 1$ و $H(x) = H_1(x)$ لـ $x \\gt 1$. هل $H$ دالة أصلية لـ $g$ على $D$ رغم اختلاف الثابتتين؟ علّل جوابك. <span class="font-mono text-cyan-400 text-[11px]">(0.50 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 2 (5.50 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-purple-400">التمرين الثاني (5.50 نقط): التمكن من جدول الدوال الأصلية المركبة ($u'u^r$، تفكيك الكسور، والمثلثية)</span>
                <span class="font-mono text-xs text-slate-400">5.50 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                حدّد دالة أصلية $F_i$ لكل دالة من الدوال التالية على المجال المحدد مع التعليل التام للشروط:
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>$f_1(x) = \\frac{x + 1}{\\sqrt[3]{(x^2 + 2x + 9)^2}}$ على $I_1 = \\mathbb{R}$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>$f_2(x) = \\frac{2x - 1}{(x - 2)^3}$ على $I_2 = ]2, +\\infty[$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>$f_3(x) = \\frac{1 + \\tan x}{\\cos^2 x}$ على $I_3 = \\left]-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right[$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>$f_4(x) = \\cos^3(2x) + \\sin^2 x$ على $I_4 = \\mathbb{R}$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>$f_5(x) = \\frac{1}{\\sqrt{2x + 1}}\\left(1 + \\frac{1}{(2x + 1)^2}\\right)$ على $I_5 = \\left]-\\frac{1}{2}, +\\infty\\right[$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 3 (4.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-amber-400">التمرين الثالث (4.00 نقط): مقاربة مزدوجة لدالة مثلثية والشرط البدئي غير الصفري</span>
                <span class="font-mono text-xs text-slate-400">4.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                نعتبر الدالة $h$ المعرفة على المجال $I = \\left]-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right[$ بما يلي:
                $$h(x) = \\frac{\\sin x}{\\cos^3 x} - \\sin x \\cos x$$
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>باستعمال $u(x) = \\cos x$ ثم بطريقة ثانية عبر $\\frac{\\sin x}{\\cos^3 x} = \\tan x (1 + \\tan^2 x)$، استخرج دالتين أصليتين للجزء $\\frac{\\sin x}{\\cos^3 x}$ على $I$ وتحقّق أن فرقهما ثابت حقيقي. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>استنتج مجموعة جميع الدوال الأصلية $H$ للدالة $h$ على المجال $I$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>حدّد الدالة الأصلية الوحيدة $H_0$ لـ $h$ على $I$ التي يمر منحناها $(C_{H_0})$ من النقطة $A\\!\\left(\\frac{\\pi}{3}, 3\\right)$، ثم استنتج رتابة $H_0$ على $I$ وقيمتها الدنيا. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 4: Synthesis Problem (5.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-emerald-500/30 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-emerald-400">المسألة التوليفية الرابعة (5.00 نقط): دراسة تغيرات وتقعر دالة أصلية $K$ وتبرير إشارتها دون حساب صيغتها!</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                <div class="lg:col-span-7 text-xs text-slate-300 space-y-2 leading-relaxed">
                  <p>نعتبر الدالة العددية $k$ المعرفة على $\\mathbb{R}$ بما يلي (منحناها $(C_k)$ ممثل في الشكل جانبه):</p>
                  <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-center font-mono text-emerald-300 text-xs">
                    $$k(x) = \\frac{2(x - 1)}{x^2 + 3}$$
                  </div>
                  <p>لتكن $K$ الدالة الأصلية الوحيدة للدالة $k$ على $\\mathbb{R}$ والتي تحقق الشرط البدئي $K(1) = -1$ (لا يُطلب بتاتاً تحديد صيغة $K(x)$).</p>
                </div>

                <!-- Vector SVG Diagram for Ex 4 -->
                <div class="lg:col-span-5 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 flex justify-center">
                  <svg id="svgCardExamMath4Graph" viewBox="0 0 420 250" direction="ltr" style="direction: ltr;" class="w-full max-w-[360px] h-auto" xmlns="http://www.w3.org/2000/svg">
                    <rect width="420" height="250" rx="12" fill="#020617" />
                    <g stroke="#0f172a" stroke-width="1">
                      <line x1="30" y1="60" x2="395" y2="60" />
                      <line x1="30" y1="100" x2="395" y2="100" />
                      <line x1="30" y1="140" x2="395" y2="140" />
                      <line x1="30" y1="180" x2="395" y2="180" />
                      <line x1="120" y1="20" x2="120" y2="225" />
                      <line x1="200" y1="20" x2="200" y2="225" />
                      <line x1="280" y1="20" x2="280" y2="225" />
                    </g>
                    <!-- Axes: x in [-4, 5], origin at x=160, y=100, scaleX=40, scaleY=80 -->
                    <line x1="20" y1="100" x2="392" y2="100" stroke="#475569" stroke-width="1.8" />
                    <polygon points="392,96 402,100 392,104" fill="#475569" />
                    <line x1="160" y1="230" x2="160" y2="20" stroke="#475569" stroke-width="1.8" />
                    <polygon points="156,22 160,12 164,22" fill="#475569" />
                    <text x="404" y="104" fill="#94a3b8" font-size="11" font-family="monospace">x</text>
                    <text x="168" y="20" fill="#94a3b8" font-size="11" font-family="monospace">y</text>

                    <!-- Curve (Ck): y = 2*(x-1)/(x^2+3); x_px = 160 + 40*x, y_px = 100 - 80*y -->
                    <!-- Points: x=-3.5(-0.59, 147), x=-3(-0.67, 153), x=-2(-0.86, 169), x=-1(-1.0, 180), x=0(-0.67, 153), x=1(0, 100), x=2(0.286, 77), x=3(0.333, 73.3), x=4(0.316, 74.7), x=5(0.286, 77.1) -->
                    <path d="M 20 147 L 40 153 L 80 169 L 120 180 L 160 153 L 200 100 L 240 77 L 280 73.3 L 320 74.7 L 360 77.1" fill="none" stroke="#22d3ee" stroke-width="2.8" stroke-linecap="round" />
                    <text x="364" y="72" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace">(Ck)</text>

                    <!-- Vertical Guides for extrema of k (inflections of K) at x=-1 (px=120, y=-1->180) and x=3 (px=280, y=1/3->73.3), root x=1 (px=200) -->
                    <line x1="120" y1="100" x2="120" y2="180" stroke="#f43f5e" stroke-width="1.2" stroke-dasharray="3 3" />
                    <line x1="280" y1="73.3" x2="280" y2="100" stroke="#34d399" stroke-width="1.2" stroke-dasharray="3 3" />

                    <circle cx="120" cy="180" r="4.5" fill="#f43f5e" stroke="#020617" stroke-width="1.5" />
                    <circle cx="200" cy="100" r="4.5" fill="#fbbf24" stroke="#020617" stroke-width="1.5" />
                    <circle cx="280" cy="73.3" r="4.5" fill="#34d399" stroke="#020617" stroke-width="1.5" />

                    <text x="120" y="92" fill="#fda4af" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">-1</text>
                    <text x="200" y="114" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>
                    <text x="280" y="114" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">3</text>
                    <text x="120" y="198" fill="#fda4af" font-size="9.5" font-family="monospace" text-anchor="middle">min k(-1)=-1</text>
                    <text x="280" y="62" fill="#6ee7b7" font-size="9.5" font-family="monospace" text-anchor="middle">max k(3)=1/3</text>
                  </svg>
                </div>
              </div>

              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>ادرس إشارة $k(x)$ على $\\mathbb{R}$، واستنتج جدول تغيرات الدالة $K$ ومطرافها الوحيد (مع تعيين القيمة الدنيا المطلقة لـ $K$). <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>بيّن أن الدالة $K$ قابلة للاشتقاق مرتين على $\\mathbb{R}$، وأن لكل $x \\in \\mathbb{R}$: $K''(x) = \\frac{-2(x + 1)(x - 3)}{(x^2 + 3)^2}$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>استنتج مجالات تقعّر وتحدّب المنحنى $(C_K)$ وحدّد أفصولي نقطتي الانعطاف. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>أعطِ معادلة المماس $(T)$ للمنحنى $(C_K)$ في النقطة ذات الأفصول $x_0 = 1$، ثم برّر وجود دوال أصلية $M$ لـ $k$ على $\\mathbb{R}$ تحقق $\\forall x \\in \\mathbb{R},\\; M(x) \\ge 5$ محدداً الشرط على ثابتة الإزاحة $c = M - K$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
              </ol>
            </div>
          </div>

          <!-- Collapsible Master Solution & Marking Scheme -->
          <div class="border border-amber-500/30 rounded-2xl overflow-hidden bg-slate-950/90 mt-6">
            <button type="button" aria-expanded="false" onclick="window.EulerAcademy.toggleCollapsible('math4-master-solution', this);" class="w-full text-right p-4 sm:p-5 bg-gradient-to-r from-amber-500/20 via-slate-900 to-cyan-500/20 hover:from-amber-500/30 text-xs sm:text-sm font-bold text-amber-300 flex items-center justify-between transition">
              <span class="flex items-center gap-2">
                <span>🏆</span>
                <span>إظهار / إخفاء عناصر الإجابة النموذجية وسلم التنقيط الرسمي المفصل (20 / 20 نقطة)</span>
              </span>
              <span class="font-mono text-xs px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center gap-1.5"><span>Corrigé Officiel</span><span class="sol-chevron inline-block transition-transform">▼</span></span>
            </button>

            <div id="math4-master-solution" class="hidden p-4 sm:p-6 border-t border-slate-800 space-y-6 text-xs text-slate-300 leading-relaxed">
              <!-- Solution Ex 1 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-cyan-400">حل التمرين الأول (5.50 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><b>الجزء الأول — 1. تعليل الوجود (0.50 ن):</b> الدالة $x \\mapsto 10x^2 + x + 4$ حدودية متصلة على $I$، و $x \\mapsto 2x + 1$ متصلة وموجبة قطعاً على $I = \\left]-\\frac{1}{2}, +\\infty\\right[$. إذن $x \\mapsto \\sqrt{2x + 1}$ متصلة ولا تنعدم على $I$، فخارجها $f$ <b>متصلة على المجال $I$</b> ومنه تقبل دوال أصلية عليه. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                  <p><b>2. قابلية اشتقاق $F$ وتحديد $a, b, c$ (1.50 ن):</b> $x \\mapsto ax^2+bx+c$ قابلة للاشتقاق على $I$، و $x \\mapsto \\sqrt{2x+1}$ قابلة للاشتقاق على $I$ لأن $2x+1 \\gt 0$، فجداءهما $F$ قابل للاشتقاق على $I$. ولكل $x \\in I$:
                  $$F'(x) = (2ax + b)\\sqrt{2x + 1} + \\frac{ax^2 + bx + c}{\\sqrt{2x + 1}} = \\frac{(2ax + b)(2x + 1) + ax^2 + bx + c}{\\sqrt{2x + 1}} = \\frac{5ax^2 + (2a + 3b)x + (b + c)}{\\sqrt{2x + 1}}$$
                  بالمطابقة مع بسط $f(x)$ على $I$: $5a = 10 \\implies a = 2$؛ و $2(2) + 3b = 1 \\implies b = -1$؛ و $-1 + c = 4 \\implies c = 5$.<br/>
                  ومنه $F(x) = (2x^2 - x + 5)\\sqrt{2x + 1}$. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><b>3. الدالة الوحيدة $G$ (1.00 ن):</b> تكتب $G(x) = (2x^2 - x + 5)\\sqrt{2x + 1} + k$. ومن الشرط $G(0) = -2$:
                  $$(0 - 0 + 5)\\sqrt{1} + k = -2 \\implies 5 + k = -2 \\implies k = -7 \\implies G(x) = (2x^2 - x + 5)\\sqrt{2x + 1} - 7$$
                  <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>الجزء الثاني — 4 و 5 و 6. فخ اتحاد المجالات على $D$ (2.50 ن):</b><br/>
                  • لكل $x \\in D$: $g(x) = \\frac{2(x - 1) - 2}{(x - 1)^3} + 1 = \\frac{2}{(x - 1)^2} - \\frac{2}{(x - 1)^3} + 1$.<br/>
                  • على المجال $]1, +\\infty[$: الدوال الأصلية هي $H_1(x) = -\\frac{2}{x - 1} + \\frac{1}{(x - 1)^2} + x + k_1$. الشرط $H_1(2) = 0$ يعطي $-2 + 1 + 2 + k_1 = 0 \\implies k_1 = -1$. إذن $H_1(x) = -\\frac{2}{x - 1} + \\frac{1}{(x - 1)^2} + x - 1$. <span class="text-emerald-400 font-mono">(1.25 ن)</span><br/>
                  • على المجال $]-\\infty, 1[$: نكتب $H_2(x) = -\\frac{2}{x - 1} + \\frac{1}{(x - 1)^2} + x + k_2$. الشرط $H_2(0) = 7$ يعطي $\\frac{-2}{-1} + \\frac{1}{1} + 0 + k_2 = 3 + k_2 = 7 \\implies k_2 = 4$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                  • <b>نعم!</b> الدالة $H$ دالة أصلية لـ $g$ على $D$ رغم أن $k_2 = 4 \\neq -1 = k_1$، لأن $H$ قابلة للاشتقاق على $]-\\infty, 1[$ و $]1, +\\infty[$ ومشتقة الثابتة تساوي $0$ في كل فرع. الفرق في الثابتتين لا يناقض النظرية لأن $D$ اتحاد مجالين منفصلين وليس مجالاً واحداً! <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 2 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-purple-400">حل التمرين الثاني (5.50 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><b>1. $f_1$ على $\\mathbb{R}$ (1.00 ن):</b> $u(x) = x^2 + 2x + 9 = (x + 1)^2 + 8 \\ge 8 \\gt 0$، و $u'(x) = 2(x + 1)$. إذن:
                  $$f_1(x) = \\frac{1}{2}\\,u'(x)\\,[u(x)]^{-2/3} \\implies F_1(x) = \\frac{1}{2} \\cdot \\frac{[u(x)]^{1/3}}{1/3} = \\frac{3}{2}\\sqrt[3]{x^2 + 2x + 9}$$
                  <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>2. $f_2$ على $]2, +\\infty[$ (1.00 ن):</b> نكتب $2x - 1 = 2(x - 2) + 3$:
                  $$f_2(x) = \\frac{2}{(x - 2)^2} + \\frac{3}{(x - 2)^3} \\implies F_2(x) = -\\frac{2}{x - 2} - \\frac{3}{2(x - 2)^2}$$
                  <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>3. $f_3$ على $]-\\frac{\\pi}{2}, \\frac{\\pi}{2}[$ (1.00 ن):</b> نضع $u(x) = 1 + \\tan x$ القابلة للاشتقاق على $I_3$ بمشتقة $u'(x) = 1 + \\tan^2 x = \\frac{1}{\\cos^2 x}$:
                  $$f_3(x) = u'(x)\\,u(x) \\implies F_3(x) = \\frac{1}{2}(1 + \\tan x)^2$$
                  <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>4. $f_4$ على $\\mathbb{R}$ (1.25 ن):</b> نجزئ القوة الفردية ونخطط الزوجية:
                  $$\\cos^3(2x) = \\cos(2x)\\,(1 - \\sin^2(2x)) = \\cos(2x) - \\frac{1}{2}(2\\cos(2x))\\sin^2(2x), \\qquad \\sin^2 x = \\frac{1 - \\cos(2x)}{2}$$
                  الأصلية: $\\frac{1}{2}\\sin(2x) - \\frac{1}{6}\\sin^3(2x) + \\frac{1}{2}x - \\frac{1}{4}\\sin(2x) = \\frac{1}{2}x + \\frac{1}{4}\\sin(2x) - \\frac{1}{6}\\sin^3(2x)$. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><b>5. $f_5$ على $]-\\frac{1}{2}, +\\infty[$ (1.25 ن):</b> نضع $u(x) = 2x + 1 \\gt 0$، حيث $u'(x) = 2$:
                  $$f_5(x) = \\frac{1}{2}\\left(u'(x)[u(x)]^{-1/2} + u'(x)[u(x)]^{-5/2}\\right) \\implies F_5(x) = \\frac{1}{2}\\left(\\frac{u^{1/2}}{1/2} + \\frac{u^{-3/2}}{-3/2}\\right) = \\sqrt{2x + 1} - \\frac{1}{3(2x + 1)\\sqrt{2x + 1}}$$
                  <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 3 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-amber-400">حل التمرين الثالث (4.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><b>1. المقاربتان (1.50 ن):</b> على $I = \\left]-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right[$ لدينا $\\cos x \\gt 0$:<br/>
                  • الطريقة 1 ($u = \\cos x$, $u' = -\\sin x$): $\\frac{\\sin x}{\\cos^3 x} = -u'(x)\\,[u(x)]^{-3}$ فأصلية أولى هي $A_1(x) = -\\frac{u^{-2}}{-2} = \\frac{1}{2\\cos^2 x}$.<br/>
                  • الطريقة 2 ($v = \\tan x$, $v' = 1 + \\tan^2 x$): $\\frac{\\sin x}{\\cos^3 x} = \\tan x\\,(1 + \\tan^2 x) = v'(x)\\,v(x)$ فأصلية ثانية هي $A_2(x) = \\frac{1}{2}\\tan^2 x$.<br/>
                  • الفرق: $A_1(x) - A_2(x) = \\frac{1}{2\\cos^2 x} - \\frac{\\sin^2 x}{2\\cos^2 x} = \\frac{1 - \\sin^2 x}{2\\cos^2 x} = \\frac{1}{2}$ (ثابت على المجال $I$). <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><b>2. عائلة الأصلية $H$ (1.25 ن):</b> نلاحظ أن $(-\\sin x)\\cos x = \\frac{1}{2}\\left(\\cos^2 x\\right)'$؛ إذن جميع الدوال الأصلية لـ $h$ على $I$ هي:
                  $$H(x) = \\frac{1}{2\\cos^2 x} + \\frac{1}{2}\\cos^2 x + k \\qquad (k \\in \\mathbb{R})$$
                  <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><b>3. $H_0$ ورتابتها وقيمتها الدنيا (1.25 ن):</b> بما أن $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$:
                  $$H_0\\!\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2(1/4)} + \\frac{1}{2}\\left(\\frac{1}{4}\\right) + k = 2 + \\frac{1}{8} + k = 3 \\implies k = \\frac{7}{8}$$
                  وبالتالي $H_0(x) = \\frac{1}{2\\cos^2 x} + \\frac{1}{2}\\cos^2 x + \\frac{7}{8}$.<br/>
                  • للرتابة: $H'_0(x) = h(x) = \\frac{\\sin x(1 - \\cos^4 x)}{\\cos^3 x}$. وبما أن $\\cos^3 x \\gt 0$ و $1 - \\cos^4 x \\ge 0$ على $I$ (ولا ينعدم سوى في $0$)، فإن إشارة $H'_0(x)$ هي إشارة $\\sin x$: $H_0$ تناقصية على $]-\\frac{\\pi}{2}, 0]$ وتزايدية على $[0, \\frac{\\pi}{2}[$، وقيمتها الدنيا المطلقة هي $H_0(0) = \\frac{1}{2} + \\frac{1}{2} + \\frac{7}{8} = \\frac{15}{8}$. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 4 -->
              <div class="space-y-2">
                <h5 class="text-sm font-extrabold text-emerald-400">حل المسألة التوليفية الرابعة (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><b>1. إشارة $k$ وتغيرات $K$ (1.00 ن):</b> لكل $x \\in \\mathbb{R}$، المقام $x^2 + 3 \\ge 3 \\gt 0$، إذن إشارة $K'(x) = k(x)$ هي إشارة $2(x - 1)$:<br/>
                  • $k(x) \\le 0$ على $]-\\infty, 1]$ ومنه $K$ <b>تناقصية قطعا</b> على $]-\\infty, 1]$.<br/>
                  • $k(x) \\ge 0$ على $[1, +\\infty[$ ومنه $K$ <b>تزايدية قطعا</b> على $[1, +\\infty[$.<br/>
                  • إذن تقبل $K$ <b>قيمة دنيا مطلقة</b> على $\\mathbb{R}$ عند $x = 1$ تساوي $K(1) = -1$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>2. الاشتقاق الثاني $K''(x) = k'(x)$ (1.25 ن):</b> بما أن $K' = k$ و $k$ دالة جذرية مقامها $x^2 + 3 \\neq 0$ فهي قابلة للاشتقاق على $\\mathbb{R}$، ومنه $K$ قابلة للاشتقاق مرتين على $\\mathbb{R}$:
                  $$K''(x) = k'(x) = 2 \\cdot \\frac{1 \\cdot (x^2 + 3) - (x - 1)(2x)}{(x^2 + 3)^2} = \\frac{2(-x^2 + 2x + 3)}{(x^2 + 3)^2} = \\frac{-2(x + 1)(x - 3)}{(x^2 + 3)^2}$$
                  <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><b>3. التقعر ونقطتا الانعطاف (1.50 ن):</b> المقام $(x^2+3)^2 \\gt 0$، إذن إشارة $K''(x)$ هي عكس إشارة $(x+1)(x-3)$:<br/>
                  • $K''(x) \\le 0$ على $]-\\infty, -1]$ وعلى $[3, +\\infty[$ $\\implies (C_K)$ <b>مقعّر نحو الأسفل ($\\cap$)</b>.<br/>
                  • $K''(x) \\ge 0$ على $[-1, 3]$ $\\implies (C_K)$ <b>محدّب نحو الأعلى ($\\cup$)</b>.<br/>
                  • تنعدم $K''$ وتغيّر إشارتها عند $x = -1$ و $x = 3$، فهما أفصولا <b>نقطتي الانعطاف</b>. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><b>4. المماس الأفقي والإزاحة العمودية (1.25 ن):</b><br/>
                  • معادلة $(T)$ عند $x_0 = 1$: $y = K'(1)(x - 1) + K(1) = k(1)(x - 1) - 1 = 0 \\cdot (x - 1) - 1 \\implies (T): y = -1$ (مماس أفقي).<br/>
                  • كل دالة أصلية $M$ لـ $k$ على $\\mathbb{R}$ تكتب $M(x) = K(x) + c$. بما أن $\\forall x \\in \\mathbb{R},\\; K(x) \\ge -1$، فإن $\\forall x \\in \\mathbb{R},\\; M(x) \\ge -1 + c$.<br/>
                  يكفي إذن اختيار $-1 + c \\ge 5$ أي <b>$c \\ge 6$</b> لتكون $M(x) \\ge 5$ على كل $\\mathbb{R}$! <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

`);
