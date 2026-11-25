window.EulerAcademy.registerExam('math-03', `

        <!-- Master Exam Bank: Devoir Surveillé Blanc N°3 (20/20) -->
        <div id="masterExam" class="scroll-mt-28 glass rounded-3xl p-5 sm:p-8 border border-amber-500/40 bg-slate-900/90 shadow-2xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div class="flex items-center gap-2 mb-1.5">
                <span class="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  الفرض المحروس التجريبي الشامل N°3 • معيار د. الرياح
                </span>
                <span class="text-xs text-slate-400 font-mono">Devoir Surveillé N°3 Blanc (20/20)</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white">
                امتحان توليفي شامل في الترجع والرتابة، نهاية المتتاليات، الحصر، والمتتالية الترجعية $u_{n+1}=f(u_n)$
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
            هذا الفرض المحروس التوليفي مصمم خصيصاً لدرس <b>المتتاليات العددية (2BAC PC)</b> وفق صرامة التصحيح الوطني: تبرير الوجود قبل كل حساب، إثبات التقارب قبل حساب النهاية، والتحقق الكامل من شروط مصاديق التقارب.
          </p>

          <!-- Exam Paper: 4 Exercises = 20.00 pts -->
          <div class="space-y-5">
            <!-- Exercice 1 (5.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-cyan-400">التمرين الأول (5.00 نقط): المتتالية التخطية $u_{n+1} = \\frac{5u_n - 4}{u_n + 1}$ والمتتالية المساعدة الحسابية</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                نعتبر المتتالية العددية $(u_n)$ المعرفة بـ $u_0 = 3$ ولكل $n \\in \\mathbb{N}$:
                $$u_{n+1} = \\frac{5u_n - 4}{u_n + 1}$$
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>تحقّق أن لكل $n \\in \\mathbb{N}$: $u_{n+1} - 2 = \\frac{3(u_n - 2)}{u_n + 1}$ (بشرط $u_n \\neq -1$)، ثم بيّن بالترجع أن $\\forall n \\in \\mathbb{N},\\; u_n \\gt 2$ واستنتج أن $(u_n)$ معرفة جيداً لجميع الرتب. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>ادرس رتابة المتتالية $(u_n)$، ثم استنتج أنها <b>متقاربة</b> (دون حساب نهايتها بعد). <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li>لكل $n \\in \\mathbb{N}$، نضع: $v_n = \\frac{1}{u_n - 2}$. بيّن أن $(v_n)$ متتالية حسابية أساسها $r = \\frac{1}{3}$، ثم اكتب $v_n$ و $u_n$ بدلالة $n$ واستنتج $\\lim_{n\\to+\\infty} u_n$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>احسب بدلالة $n$ المجموع: $S_n = \\sum_{k=0}^{n} \\frac{1}{u_k - 2} = \\frac{1}{u_0 - 2} + \\frac{1}{u_1 - 2} + \\dots + \\frac{1}{u_n - 2}$. <span class="font-mono text-cyan-400 text-[11px]">(0.75 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 2 (4.50 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-purple-400">التمرين الثاني (4.50 نقط): نهاية القوى $(q^n)$، مصداق الدركيين للمجموع، ومركب الدالة المتصلة</span>
                <span class="font-mono text-xs text-slate-400">4.50 نقط</span>
              </div>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>احسب مع كامل التبرير النهايتين التاليتين:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) $L_1 = \\lim_{n\\to+\\infty} \\frac{5^n - 3^{n+1}}{5^{n+1} + 2^n}$ <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                    <p>ب) $L_2 = \\lim_{n\\to+\\infty} \\left(\\sqrt{4n^2 + 5n} - 2n\\right)$ <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                  </div>
                </li>
                <li>نعتبر لكل $n \\in \\mathbb{N}^*$ المتتالية $(w_n)$ المعرفة بالمجموع: $w_n = \\sum_{k=1}^{n} \\frac{n}{n^2 + k} = \\frac{n}{n^2 + 1} + \\frac{n}{n^2 + 2} + \\dots + \\frac{n}{n^2 + n}$.
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) بيّن أن لكل $n \\in \\mathbb{N}^*$: $\\frac{n^2}{n^2 + n} \\le w_n \\le \\frac{n^2}{n^2 + 1}$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                    <p>ب) استنتج $\\lim_{n\\to+\\infty} w_n$، ثم حدّد نهاية المتتالية $z_n = \\cos\\!\\left(\\frac{\\pi}{3} w_n + \\frac{2(-1)^n}{n^2}\\right)$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></p>
                  </div>
                </li>
              </ol>
            </div>

            <!-- Exercice 3 (3.50 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-amber-400">التمرين الثالث (3.50 نقط): المتتالية الجذرية ومتراجحة التقارب الأسي $|a_{n+1} - 3| \\le k|a_n - 3|$</span>
                <span class="font-mono text-xs text-slate-400">3.50 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                نعتبر المتتالية $(a_n)$ المعرفة بـ $a_0 = 1$ ولكل $n \\in \\mathbb{N}$: $a_{n+1} = \\sqrt{2a_n + 3}$.
              </p>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>بيّن بالترجع أن لكل $n \\in \\mathbb{N}$: $1 \\le a_n \\lt 3$. <span class="font-mono text-cyan-400 text-[11px]">(0.75 ن)</span></li>
                <li>ادرس رتابة المتتالية $(a_n)$، واستنتج أنها متقاربة. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>بيّن باستعمال المرافق أن لكل $n \\in \\mathbb{N}$: $0 \\lt 3 - a_{n+1} \\le \\frac{2}{5}(3 - a_n)$ (ملاحظة: $\\sqrt{5} \\gt 2$). <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>استنتج بالترجع أن $\\forall n \\in \\mathbb{N},\\; 0 \\lt 3 - a_n \\le 2\\left(\\frac{2}{5}\\right)^n$، ثم احسب $\\lim_{n\\to+\\infty} a_n$. <span class="font-mono text-cyan-400 text-[11px]">(0.75 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 4: Synthesis Problem (7.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-emerald-500/30 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-emerald-400">المسألة التوليفية الرابعة (7.00 نقط): دراسة دالة على $I = [2, +\\infty[$ وربطها بمتتالية $u_{n+1} = f(u_n)$</span>
                <span class="font-mono text-xs text-slate-400">7.00 نقط</span>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                <div class="lg:col-span-7 text-xs text-slate-300 space-y-2 leading-relaxed">
                  <p><b>الجزء الأول (3.25 نقط):</b> نعتبر الدالة العددية $f$ المعرفة على المجال $I = [2, +\\infty[$ بما يلي:</p>
                  <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-center font-mono text-emerald-300 text-xs">
                    $$f(x) = \\frac{1}{2}\\left(x + \\frac{4}{x}\\right) = \\frac{x^2 + 4}{2x}$$
                  </div>
                  <p>ليكن $(C_f)$ منحناها الممثل في معلم متعامد ممنظم $(O, \\vec{i}, \\vec{j})$ كما يبيّن الرسم المرافق.</p>
                </div>

                <!-- Vector SVG Diagram for Ex 4 -->
                <div class="lg:col-span-5 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 flex justify-center">
                  <svg id="svgCardExamMath3Cobweb" viewBox="0 0 420 260" direction="ltr" style="direction: ltr;" class="w-full max-w-[360px] h-auto" xmlns="http://www.w3.org/2000/svg">
                    <rect width="420" height="260" rx="12" fill="#020617" />
                    <g stroke="#0f172a" stroke-width="1">
                      <line x1="45" y1="65" x2="405" y2="65" />
                      <line x1="45" y1="105" x2="405" y2="105" />
                      <line x1="45" y1="145" x2="405" y2="145" />
                      <line x1="45" y1="185" x2="405" y2="185" />
                      <line x1="115" y1="20" x2="115" y2="225" />
                      <line x1="185" y1="20" x2="185" y2="225" />
                      <line x1="255" y1="20" x2="255" y2="225" />
                      <line x1="325" y1="20" x2="325" y2="225" />
                    </g>
                    <!-- Axes -->
                    <line x1="30" y1="225" x2="402" y2="225" stroke="#475569" stroke-width="1.8" />
                    <polygon points="402,221 412,225 402,229" fill="#475569" />
                    <line x1="45" y1="242" x2="45" y2="20" stroke="#475569" stroke-width="1.8" />
                    <polygon points="41,22 45,12 49,22" fill="#475569" />
                    <text x="410" y="216" fill="#94a3b8" font-size="11" font-family="monospace">x</text>
                    <text x="53" y="22" fill="#94a3b8" font-size="11" font-family="monospace">y</text>
                    <text x="34" y="238" fill="#64748b" font-size="10" font-family="monospace">0</text>
                    <!-- Oblique asymptote y = 0.5 x -->
                    <line x1="45" y1="225" x2="388" y2="127" stroke="#c084fc" stroke-width="1.5" stroke-dasharray="4 4" />
                    <text x="342" y="160" fill="#d8b4fe" font-size="10" font-weight="bold" font-family="monospace">(D): y=½x</text>
                    <!-- Bisector y = x -->
                    <line x1="45" y1="225" x2="367" y2="41" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5 3" />
                    <text x="328" y="34" fill="#fde68a" font-size="11" font-weight="bold" font-family="monospace">Δ : y = x</text>
                    <!-- Curve (Cf): 0.5*(x + 4/x) -->
                    <path d="M 94 97 L 115 125 L 143 140 L 164 144 L 185 145 L 206 144.2 L 220 143 L 255 138.3 L 290 132.1 L 325 125 L 367 115.6" fill="none" stroke="#22d3ee" stroke-width="2.8" stroke-linecap="round" />
                    <text x="372" y="114" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace">(Cf)</text>
                    <!-- Cobweb steps from u0 = 4 -->
                    <polyline points="325,225 325,125 220,125 220,143 189,143" fill="none" stroke="#34d399" stroke-width="2" />
                    <line x1="220" y1="143" x2="220" y2="225" stroke="#34d399" stroke-width="1.2" stroke-dasharray="3 3" />
                    <line x1="185" y1="145" x2="185" y2="225" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="3 3" />
                    <line x1="45" y1="145" x2="185" y2="145" stroke="#475569" stroke-width="1.2" stroke-dasharray="3 3" />
                    <!-- Key points & axis ticks -->
                    <circle cx="185" cy="145" r="4.5" fill="#fbbf24" stroke="#020617" stroke-width="1.5" />
                    <circle cx="325" cy="225" r="4" fill="#34d399" />
                    <circle cx="220" cy="225" r="3.8" fill="#34d399" />
                    <circle cx="185" cy="225" r="3.8" fill="#fbbf24" />
                    <text x="160" y="166" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">A(2, 2)</text>
                    <text x="32" y="149" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="end">2</text>
                    <text x="176" y="244" fill="#fde68a" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">ℓ=2</text>
                    <text x="230" y="244" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">u₁=2.5</text>
                    <text x="325" y="244" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">u₀=4</text>
                  </svg>
                </div>
              </div>

              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>احسب $\\lim_{x \\to +\\infty} f(x)$ وبيّن أن المستقيم $(D): y = \\frac{1}{2}x$ مقارب مائل للمنحنى $(C_f)$ بجوار $+\\infty$. ثم احسب $f'(x)$ على $I = [2, +\\infty[$ وضع جدول تغيرات $f$ محدداً صورة المجال $f(I)$. <span class="font-mono text-cyan-400 text-[11px]">(2.00 ن)</span></li>
                <li>ادرس إشارة $f(x) - x$ على $I = [2, +\\infty[$ وحدّد الوضع النسبي لـ $(C_f)$ والمستقيم $(\\Delta): y = x$، ثم استنتج الحل الوحيد للمعادلة $f(x) = x$ على $I$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></li>
                <li><b>الجزء الثاني (3.75 نقط):</b> نعتبر المتتالية $(u_n)$ المعرفة بـ $u_0 = 4$ ولكل $n \\in \\mathbb{N}$: $u_{n+1} = f(u_n)$.
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) بيّن بالترجع أن لكل $n \\in \\mathbb{N}$: $u_n \\in [2, +\\infty[$ (استعمل خاصية ثبات المجال $f(I) \\subset I$). <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                    <p>ب) باستعمال الوضع النسبي من السؤال 2، بيّن أن $(u_n)$ متتالية تناقصية ثم استنتج أنها متقاربة. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></p>
                    <p>ج) اذكر الشروط الأربعة الكاملة لمبرهنة النقطة الصامدة لتحديد نهاية $(u_n)$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <!-- Collapsible Master Solution & Marking Scheme -->
          <div class="border border-amber-500/30 rounded-2xl overflow-hidden bg-slate-950/90 mt-6">
            <button type="button" aria-expanded="false" onclick="window.EulerAcademy.toggleCollapsible('math3-master-solution', this);" class="w-full text-right p-4 sm:p-5 bg-gradient-to-r from-amber-500/20 via-slate-900 to-cyan-500/20 hover:from-amber-500/30 text-xs sm:text-sm font-bold text-amber-300 flex items-center justify-between transition">
              <span class="flex items-center gap-2">
                <span>🏆</span>
                <span>إظهار / إخفاء عناصر الإجابة النموذجية وسلم التنقيط الرسمي المفصل (20 / 20 نقطة)</span>
              </span>
              <span class="font-mono text-xs px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center gap-1.5"><span>Corrigé Officiel</span><span class="sol-chevron inline-block transition-transform">▼</span></span>
            </button>

            <div id="math3-master-solution" class="hidden p-4 sm:p-6 border-t border-slate-800 space-y-6 text-xs text-slate-300 leading-relaxed">
              <!-- Solution Ex 1 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-cyan-400">حل التمرين الأول (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><b>1. الفرق والتأطير بالترجع (1.50 ن):</b> لكل $u_n \\neq -1$:
                  $$u_{n+1} - 2 = \\frac{5u_n - 4 - 2(u_n + 1)}{u_n + 1} = \\frac{3u_n - 6}{u_n + 1} = \\frac{3(u_n - 2)}{u_n + 1}$$
                  • الترجع للخاصية $P(n): u_n \\gt 2$:<br/>
                  – من أجل $n = 0$: $u_0 = 3 \\gt 2$، إذن $P(0)$ صحيحة.<br/>
                  – نفترض $u_n \\gt 2$ (ومنه $u_n + 1 \\gt 3 \\gt 0$ فالمقام لا ينعدم و $u_{n+1}$ معرف). بما أن $u_n - 2 \\gt 0$ و $u_n + 1 \\gt 0$، فإن $\\frac{3(u_n - 2)}{u_n + 1} \\gt 0 \\implies u_{n+1} \\gt 2$.<br/>
                  إذن بالترجع $\\forall n \\in \\mathbb{N},\\; u_n \\gt 2$ و $(u_n)$ معرفة جيداً. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><b>2. الرتابة والتقارب (1.25 ن):</b> لكل $n \\in \\mathbb{N}$:
                  $$u_{n+1} - u_n = \\frac{5u_n - 4}{u_n + 1} - u_n = \\frac{-u_n^2 + 4u_n - 4}{u_n + 1} = \\frac{-(u_n - 2)^2}{u_n + 1} \\lt 0$$
                  لأن $u_n \\gt 2 \\implies (u_n - 2)^2 \\gt 0$ والمقام $u_n + 1 \\gt 0$. إذن $(u_n)$ <b>تناقصية قطعا</b>، وبما أنها <b>مصغورة بالعدد $2$</b> فهي <b>متقاربة</b> (حسب مبرهنة التقارب الرتيب). <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><b>3. المتتالية الحسابية $v_n$ والنهاية (1.50 ن):</b> لكل $n \\in \\mathbb{N}$ لدينا $u_n - 2 \\neq 0$ (لأن $u_n \\gt 2$):
                  $$v_{n+1} - v_n = \\frac{u_n + 1}{3(u_n - 2)} - \\frac{1}{u_n - 2} = \\frac{u_n + 1 - 3}{3(u_n - 2)} = \\frac{u_n - 2}{3(u_n - 2)} = \\frac{1}{3}$$
                  إذن $(v_n)$ متتالية حسابية أساسها $r = \\frac{1}{3}$ وحدها الأول $v_0 = \\frac{1}{3 - 2} = 1$. ومنه:<br/>
                  $$v_n = 1 + \\frac{n}{3} = \\frac{n + 3}{3} \\implies u_n = 2 + \\frac{1}{v_n} = 2 + \\frac{3}{n + 3}$$
                  وبما أن $\\lim_{n\\to+\\infty} \\frac{3}{n+3} = 0$، فإن <b>$\\lim_{n\\to+\\infty} u_n = 2$</b>. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><b>4. حساب المجموع $S_n$ (0.75 ن):</b> المجموع $S_n = \\sum_{k=0}^n v_k$ يتكون من $n + 1$ حداً متتابعاً من متتالية حسابية:
                  $$S_n = (n + 1)\\frac{v_0 + v_n}{2} = \\frac{(n + 1)}{2}\\left(1 + \\frac{n + 3}{3}\\right) = \\frac{(n + 1)(n + 6)}{6}$$
                  <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 2 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-purple-400">حل التمرين الثاني (4.50 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><b>1. أ) حساب $L_1$ (1.00 ن):</b> نعمل بالأساس الأكبر $5^n$:
                  $$L_1 = \\lim_{n\\to+\\infty} \\frac{5^n\\left(1 - 3\\left(\\frac{3}{5}\\right)^n\\right)}{5^n\\left(5 + \\left(\\frac{2}{5}\\right)^n\\right)} = \\frac{1 - 0}{5 + 0} = \\frac{1}{5}$$
                  لأن $-1 \\lt \\frac{3}{5} \\lt 1$ و $-1 \\lt \\frac{2}{5} \\lt 1$ فيؤولان إلى $0$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>1. ب) حساب $L_2$ (1.00 ن):</b> ش.غ.م ($+\\infty - \\infty$)؛ نضرب في المرافق ونعمل بـ $\\sqrt{n^2} = n$ (لأن $n \\gt 0$):
                  $$L_2 = \\lim_{n\\to+\\infty} \\frac{(4n^2 + 5n) - 4n^2}{\\sqrt{4n^2 + 5n} + 2n} = \\lim_{n\\to+\\infty} \\frac{5n}{n\\left(\\sqrt{4 + \\frac{5}{n}} + 2\\right)} = \\frac{5}{2 + 2} = \\frac{5}{4}$$
                  <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>2. أ) تأطير المجموع $w_n$ (1.00 ن):</b> لكل $k \\in \\{1, 2, \\dots, n\\}$ لدينا $1 \\le k \\le n \\implies n^2 + 1 \\le n^2 + k \\le n^2 + n$، وبقلب الأطراف الموجبة قطعا:
                  $$\\frac{n}{n^2 + n} \\le \\frac{n}{n^2 + k} \\le \\frac{n}{n^2 + 1}$$
                  بجمع هذه المتفاوتات $n$ مرة من $k = 1$ إلى $k = n$ نحصل على:
                  $$n \\cdot \\frac{n}{n^2 + n} \\le w_n \\le n \\cdot \\frac{n}{n^2 + 1} \\iff \\frac{n^2}{n^2 + n} \\le w_n \\le \\frac{n^2}{n^2 + 1}$$
                  <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>2. ب) نهاية $w_n$ و $z_n$ (1.50 ن):</b> لدينا $\\lim_{n\\to+\\infty} \\frac{n^2}{n^2+n} = \\lim_{n\\to+\\infty} \\frac{1}{1+\\frac{1}{n}} = 1$ و $\\lim_{n\\to+\\infty} \\frac{n^2}{n^2+1} = 1$، إذن حسب <b>مصداق الدركيين</b> $\\lim_{n\\to+\\infty} w_n = 1$.<br/>
                  ثانياً، لكل $n \\in \\mathbb{N}^*$ لدينا $|\\frac{2(-1)^n}{n^2}| = \\frac{2}{n^2} \\to 0$، ومنه نهاية ما داخل الجيب التمام تؤول إلى $\\frac{\\pi}{3} \\cdot 1 + 0 = \\frac{\\pi}{3}$. وبما أن الدالة $x \\mapsto \\cos x$ <b>متصلة في $\\frac{\\pi}{3}$</b>، فإن:
                  $$\\lim_{n\\to+\\infty} z_n = \\cos\\!\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$$
                  <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 3 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-amber-400">حل التمرين الثالث (3.50 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><b>1. التأطير بالترجع (0.75 ن):</b> $a_0 = 1 \\in [1, 3[$. نفترض $1 \\le a_n \\lt 3 \\implies 5 \\le 2a_n + 3 \\lt 9 \\implies \\sqrt{5} \\le a_{n+1} \\lt 3$. وبما أن $1 \\lt \\sqrt{5}$، فإن $1 \\le a_{n+1} \\lt 3$. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                  <p><b>2. الرتابة والتقارب (1.00 ن):</b> لكل $n \\in \\mathbb{N}$:
                  $$a_{n+1} - a_n = \\sqrt{2a_n + 3} - a_n = \\frac{2a_n + 3 - a_n^2}{\\sqrt{2a_n + 3} + a_n} = \\frac{(3 - a_n)(a_n + 1)}{\\sqrt{2a_n + 3} + a_n} \\gt 0$$
                  لأن $a_n \\lt 3$ و $a_n \\ge 1$. إذن $(a_n)$ <b>تزايدية قطعا</b>، وبما أنها مكبورة بـ $3$ فهي متقاربة. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>3. متراجحة الانكماش (1.00 ن):</b> لكل $n \\in \\mathbb{N}$:
                  $$3 - a_{n+1} = 3 - \\sqrt{2a_n + 3} = \\frac{9 - (2a_n + 3)}{3 + \\sqrt{2a_n + 3}} = \\frac{2(3 - a_n)}{3 + \\sqrt{2a_n + 3}}$$
                  بما أن $a_n \\ge 1$ فإن $2a_n + 3 \\ge 5 \\implies \\sqrt{2a_n + 3} \\ge \\sqrt{5} \\gt 2$، وبالتالي $3 + \\sqrt{2a_n + 3} \\gt 3 + 2 = 5$.<br/>
                  ومع $3 - a_n \\gt 0$، نجد $\\frac{1}{3 + \\sqrt{2a_n + 3}} \\lt \\frac{1}{5} \\implies 0 \\lt 3 - a_{n+1} \\le \\frac{2}{5}(3 - a_n)$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>4. الاستنتاج بالترجع والنهاية (0.75 ن):</b> لـ $n=0$: $3 - a_0 = 2 \\le 2(\\frac{2}{5})^0$. بالافتراض والضرب في $\\frac{2}{5}$: $3 - a_{n+1} \\le \\frac{2}{5}(3 - a_n) \\le 2(\\frac{2}{5})^{n+1}$. وبما أن $-1 \\lt \\frac{2}{5} \\lt 1$ فإن $\\lim_{n\\to+\\infty} 2(\\frac{2}{5})^n = 0$، وبمصداق الدركيين <b>$\\lim_{n\\to+\\infty} a_n = 3$</b>. <span class="text-emerald-400 font-mono">(0.75 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 4 -->
              <div class="space-y-2">
                <h5 class="text-sm font-extrabold text-emerald-400">حل المسألة التوليفية الرابعة (7.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><b>الجزء 1 — الدراسة والتغيرات وصورة المجال (2.00 ن):</b><br/>
                  • $\\lim_{x\\to+\\infty} f(x) = \\lim_{x\\to+\\infty} \\frac{1}{2}(x + \\frac{4}{x}) = +\\infty$.<br/>
                  • $\\lim_{x\\to+\\infty} \\left(f(x) - \\frac{1}{2}x\\right) = \\lim_{x\\to+\\infty} \\frac{2}{x} = 0 \\implies (D): y = \\frac{1}{2}x$ مقارب مائل بجوار $+\\infty$.<br/>
                  • الدالة الجذرية الكسرية $f$ قابلة للاشتقاق على $I = [2, +\\infty[$ ومشتقتها:
                  $$f'(x) = \\frac{1}{2}\\left(1 - \\frac{4}{x^2}\\right) = \\frac{x^2 - 4}{2x^2} \\ge 0 \\quad (\\forall x \\ge 2)$$
                  إذن $f$ متصلة وتزايدية قطعا على $I = [2, +\\infty[$، ومنه $f([2, +\\infty[) = [f(2), \\lim_{+\\infty} f[ = [2, +\\infty[$. <span class="text-emerald-400 font-mono">(2.00 ن)</span></p>
                  <p><b>الجزء 1 — الوضع النسبي مع $y = x$ والنقطة الصامدة (1.25 ن):</b> لكل $x \\in [2, +\\infty[$:
                  $$f(x) - x = \\frac{1}{2}\\left(x + \\frac{4}{x}\\right) - x = \\frac{4 - x^2}{2x} = \\frac{(2 - x)(2 + x)}{2x} \\le 0$$
                  ينعدم عند $x = 2$ فقط! إذن $(C_f)$ يوجد <b>تحت المستقيم $(\\Delta): y = x$</b> على $[2, +\\infty[$ ويتقاطع معه في النقطة الوحيدة $A(2, 2)$؛ الحل الوحيد للمعادلة $f(x) = x$ على $I$ هو $x = 2$. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><b>الجزء 2 — أ) ثبات المجال (1.00 ن):</b><br/>
                  • $u_0 = 4 \\in [2, +\\infty[$.<br/>
                  • نفترض $u_n \\in [2, +\\infty[$؛ بما أن $f([2, +\\infty[) = [2, +\\infty[ \\subset [2, +\\infty[$، فإن $u_{n+1} = f(u_n) \\in [2, +\\infty[$. إذن $\\forall n \\in \\mathbb{N},\\; u_n \\ge 2$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>الجزء 2 — ب) الرتابة والتقارب (1.25 ن):</b> لكل $n \\in \\mathbb{N}$، بما أن $u_n \\in [2, +\\infty[$ فإن $u_{n+1} - u_n = f(u_n) - u_n \\le 0$ (من إشارة $f(x)-x$). إذن $(u_n)$ <b>تناقصية</b>، وبما أنها مصغورة بـ $2$ فهي <b>متقاربة</b> نحو نهاية $\\ell \\in \\mathbb{R}$. <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                  <p><b>الجزء 2 — ج) تطبيق مبرهنة النقطة الصامدة (1.50 ن):</b> تتحقق الشروط الأربعة التالية:<br/>
                  1) الدالة $f$ <b>متصلة</b> على المجال المغلق $I = [2, +\\infty[$.<br/>
                  2) المجال $I$ مستقر بـ $f$: $f(I) \\subset I$.<br/>
                  3) الحد البدئي $u_0 = 4 \\in I$.<br/>
                  4) المتتالية $(u_n)$ متقاربة نحو $\\ell$، وبما أن $\\forall n,\\; u_n \\ge 2$ و $I = [2, +\\infty[$ مغلق فإن $\\ell \\in I$.<br/>
                  بالتالي $\\ell$ تحقق $f(\\ell) = \\ell$ على $I$، ومن السؤال 2 نستنتج أن <b>$\\lim_{n\\to+\\infty} u_n = 2$</b>. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

`);
