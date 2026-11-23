window.EulerAcademy.registerExam('math-02', `

        <!-- Master Exam Bank: Devoir Surveillé Blanc N°2 (20/20) -->
        <div id="masterExam" class="scroll-mt-28 glass rounded-3xl p-5 sm:p-8 border border-amber-500/40 bg-slate-900/90 shadow-2xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div class="flex items-center gap-2 mb-1.5">
                <span class="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  الفرض المحروس التجريبي الشامل N°2 • معيار د. الرياح
                </span>
                <span class="text-xs text-slate-400 font-mono">Devoir Surveillé N°2 Blanc (20/20)</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white">
                امتحان توليفي شامل في الاشتقاق، التقعر والانعطاف، الفروع اللانهائية، ودراسة دالة عكسية
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
            هذا الفرض التجريبي التوليفي مصمم خصيصاً لدرس <b>الاشتقاق ودراسة الدوال العددية (2BAC PC)</b> بأعلى معايير الدقة البرهانية وسلم التنقيط الصارم دون أي ثغرات.
          </p>

          <!-- Exam Paper: 4 Exercises = 20.00 pts -->
          <div class="space-y-5">
            <!-- Exercice 1 (4.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-cyan-400">التمرين الأول (4.00 نقط): الاشتقاق على اليمين واليسار، التأويلات الهندسية، والعدد المشتق</span>
                <span class="font-mono text-xs text-slate-400">4.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                نعتبر الدالة $f$ المعرفة على $\\mathbb{R}$ بما يلي:
              </p>
              <div class="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-center font-mono text-cyan-300 text-xs">
                $$f(x) = \\begin{cases} \\sqrt{x^2 + 3x} + 1 &amp; \\text{si } x \\ge 0 \\\\ \\dfrac{x^3 + 2x + 1}{x^2 + 1} &amp; \\text{si } x &lt; 0 \\end{cases}$$
              </div>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>ادرس قابلية اشتقاق الدالة $f$ على يمين $0$ ثم أعط التأويل الهندسي الدقيق عند النقطة $A(0, 1)$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>ادرس قابلية اشتقاق $f$ على يسار $0$ وأعط معادلة نصف المماس الموافق، وهل $f$ قابلة للاشتقاق في $0$؟ <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>احسب باستعمال العدد المشتق النهاية: $L = \\lim_{x \\to \\frac{\\pi}{4}} \\frac{\\tan x - 1}{x - \\frac{\\pi}{4}}$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 2 (5.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-purple-400">التمرين الثاني (5.00 نقط): اشتقاق الجذور النونية والمركبات، والمطارف مقابل الانعطاف الأفقي</span>
                <span class="font-mono text-xs text-slate-400">5.00 نقط</span>
              </div>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>علّل قابلية الاشتقاق واحسب المشتقة الأولى لكل من الدالتين التاليتين:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) $u(x) = \\sqrt[3]{2x^3 + 1}$ على المجال $]0, +\\infty[$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                    <p>ب) $v(x) = \\sin\\!\\left(\\sqrt{x^2 + 4}\\right)$ على $\\mathbb{R}$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                  </div>
                </li>
                <li>نعتبر الدالة الحدودية $k(x) = x^4 - 6x^2 + 8x$ على $\\mathbb{R}$:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) احسب $k'(x)$ وتحقّق من أن $k'(x) = 4(x - 1)^2(x + 2)$، ثم استنتج رتابة $k$ ومطارفها المحلية مبيّناً لماذا لا تقبل مطرافاً في $x_0 = 1$. <span class="font-mono text-cyan-400 text-[11px]">(1.75 ن)</span></p>
                    <p>ب) احسب $k''(x)$ وحدّد تقعر المنحنى $(C_k)$ وإحداثيتي نقطتي الانعطاف $I_1$ و $I_2$. <span class="font-mono text-cyan-400 text-[11px]">(1.25 ن)</span></p>
                  </div>
                </li>
              </ol>
            </div>

            <!-- Exercice 3 (4.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-amber-400">التمرين الثالث (4.00 نقط): مقارنة المقارب الأفقي والمائل، ومركز التماثل</span>
                <span class="font-mono text-xs text-slate-400">4.00 نقط</span>
              </div>
              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>لتكن $p(x) = x + 1 - \\sqrt{x^2 - 2x + 2}$ المعرفة على $\\mathbb{R}$:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) احسب $\\lim_{x \\to +\\infty} p(x)$ وأعط التأويل الهندسي للمنحنى $(C_p)$ بجوار $+\\infty$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                    <p>ب) بيّن أن المستقيم $(D): y = 2x$ مقارب مائل للمنحنى $(C_p)$ بجوار $-\\infty$، وحدّد الوضع النسبي لـ $(C_p)$ و $(D)$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></p>
                  </div>
                </li>
                <li>لتكن $q(x) = \\frac{3x^2 - 5x + 1}{x - 2}$ على $D_q = \\mathbb{R} \\setminus \\{2\\}$. بيّن باستعمال الشرطين الرسميين أن النقطة $\\Omega(2, 7)$ مركز تماثل للمنحنى $(C_q)$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
              </ol>
            </div>

            <!-- Exercice 4: Synthesis Problem (7.00 pts) -->
            <div class="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-emerald-500/30 space-y-3">
              <div class="flex justify-between items-center border-b border-slate-800/80 pb-2">
                <span class="text-sm font-bold text-emerald-400">المسألة التوليفية الرابعة (7.00 نقط): دراسة دالة لاجذرية شاملة والتقابل ومشتقة $g^{-1}$</span>
                <span class="font-mono text-xs text-slate-400">7.00 نقط</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                نعتبر الدالة العددية $f$ المعرفة على $D_f = [0, +\\infty[$ بما يلي: $f(x) = x + 1 - 2\\sqrt{x}$.
              </p>

              <!-- SVG Curves of Cf and Inverse Cg^-1 -->
              <div class="my-3 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardExamMath2Curves">
                <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span>📈 المنحنى $(C_f)$ ومنحنى الدالة العكسية $(C_{g^{-1}})$ بالتناظر حول $y = x$</span>
                  <span class="text-[11px] font-mono text-emerald-400">Vertical at (0,1) &amp; Symmetry y=x</span>
                </div>
                <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                  <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 240" class="w-full h-auto">
                    <defs>
                      <marker id="arrExamMath2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                      </marker>
                      <marker id="arrExamM2Rose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#fb7185"/>
                      </marker>
                      <marker id="arrExamM2Em" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
                      </marker>
                    </defs>

                    <!-- Axes -->
                    <line x1="180" y1="215" x2="180" y2="22" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrExamMath2)"/>
                    <line x1="140" y1="180" x2="540" y2="180" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrExamMath2)"/>
                    <text x="170" y="28" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="end">y</text>
                    <text x="548" y="184" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="start">x</text>
                    <text x="172" y="194" fill="#64748b" font-size="10.5" font-family="monospace" text-anchor="end">0</text>

                    <!-- Scale 1 unit = 45px => (1,0)=(225,180), (0,1)=(180,135), (4,1)=(360,135), (1,4)=(225,0? scale=34: (0,1)=(180,146), (1,0)=(214,180), (4,1)=(316,146), (1,4)=(214,44) -->
                    <!-- Bisector y = x -->
                    <line x1="156" y1="204" x2="364" y2="-4" stroke="#fbbf24" stroke-width="1.3" stroke-dasharray="5,4"/>
                    <text x="352" y="26" fill="#fbbf24" font-size="11" font-weight="bold" font-family="monospace" text-anchor="start">y = x</text>

                    <!-- Cf curve: from (0,1)->(180,146) vertical down to Min(1,0)->(214,180), then rising through (4,1)->(316,146) to (6,2.10)->(384,108) -->
                    <path d="M 180 146 C 180 174, 198 180, 214 180 C 254 180, 290 162, 316 146 C 344 128, 368 106, 396 76" fill="none" stroke="#22d3ee" stroke-width="2.6"/>
                    <line x1="180" y1="146" x2="180" y2="174" stroke="#fb7185" stroke-width="2" marker-end="url(#arrExamM2Rose)"/>
                    <circle cx="180" cy="146" r="4" fill="#fb7185"/>
                    <text x="168" y="148" fill="#fda4af" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="end">A(0, 1)</text>
                    <circle cx="214" cy="180" r="4" fill="#22d3ee"/>
                    <text x="214" y="196" fill="#67e8f9" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">1</text>

                    <!-- Tangent at (4,1) with slope 1/2 -->
                    <line x1="264" y1="172" x2="366" y2="121" stroke="#c084fc" stroke-width="1.5" stroke-dasharray="3,2"/>
                    <circle cx="316" cy="146" r="4" fill="#c084fc"/>
                    <text x="328" y="156" fill="#e9d5ff" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="start">B(4, 1)</text>

                    <!-- Inverse Curve Cg^-1: vertical up at (0,1)->(180,146) through (1,4)->(214,44) -->
                    <path d="M 180 146 C 180 118, 194 78, 214 44 L 222 30" fill="none" stroke="#34d399" stroke-width="2.6"/>
                    <line x1="180" y1="146" x2="180" y2="112" stroke="#34d399" stroke-width="2" marker-end="url(#arrExamM2Em)"/>
                    <circle cx="214" cy="44" r="4" fill="#34d399"/>
                    <text x="224" y="48" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="start">B'(1, 4)</text>

                    <!-- Curve Legend on right -->
                    <rect x="424" y="28" width="232" height="120" rx="10" fill="rgba(15,23,42,0.85)" stroke="#334155" stroke-width="1.2"/>
                    <text x="540" y="52" fill="#67e8f9" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Cf : f(x) = x + 1 - 2 sqrt(x)</text>
                    <text x="540" y="76" fill="#6ee7b7" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Cg^-1 : (sqrt(x) + 1)^2</text>
                    <text x="540" y="102" fill="#e9d5ff" font-size="10.5" font-family="monospace" text-anchor="middle">B(4,1) &lt;-&gt; B'(1,4) : 2 = 1/0.5</text>
                    <text x="540" y="126" fill="#fda4af" font-size="10.5" font-family="monospace" text-anchor="middle">f'(1) = 0 =&gt; (Cg^-1) vert. x=0</text>
                  </svg>
                </div>
              </div>

              <ol class="list-decimal list-inside text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>احسب $\\lim_{x \\to +\\infty} f(x)$ وحدّد الفرع اللانهائي للمنحنى $(C_f)$ بجوار $+\\infty$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>ادرس قابلية اشتقاق $f$ على يمين $0$ وأعط التأويل الهندسي في النقطة $A(0, 1)$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></li>
                <li>بيّن أن $f$ قابلة للاشتقاق على $]0, +\\infty[$ واحسب $f'(x)$، ثم ضع جدول تغيرات $f$ واستنتج أن $f(x) \\ge 0$ لكل $x \\ge 0$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>احسب $f''(x)$ على $]0, +\\infty[$ وحدّد تقعر $(C_f)$، ثم اكتب معادلة المماس $(T)$ للمنحنى $(C_f)$ في النقطة $B(4, 1)$. <span class="font-mono text-cyan-400 text-[11px]">(1.50 ن)</span></li>
                <li>لتكن $g$ قصور الدالة $f$ على المجال $I = [1, +\\infty[$:
                  <div class="mr-4 space-y-1 mt-1">
                    <p>أ) بيّن أن $g$ تقابل من $I$ نحو مجال $J$ يتم تحديده بدقة، واحسب $(g^{-1})'(1)$ دون تحديد صيغة $g^{-1}(x)$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                    <p>ب) حدّد الصيغة الصريحة للدالة العكسية $g^{-1}(x)$ لكل $x \\in J$ وفسّر هندسياً عدم قابلية اشتقاق $g^{-1}$ على يمين $0$. <span class="font-mono text-cyan-400 text-[11px]">(1.00 ن)</span></p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <!-- Collapsible Master Solution & Marking Scheme -->
          <div class="border border-amber-500/30 rounded-2xl overflow-hidden bg-slate-950/90 mt-6">
            <button type="button" aria-expanded="false" onclick="window.EulerAcademy.toggleCollapsible('math2-master-solution', this);" class="w-full text-right p-4 sm:p-5 bg-gradient-to-r from-amber-500/20 via-slate-900 to-cyan-500/20 hover:from-amber-500/30 text-xs sm:text-sm font-bold text-amber-300 flex items-center justify-between transition">
              <span class="flex items-center gap-2">
                <span>🏆</span>
                <span>إظهار / إخفاء عناصر الإجابة النموذجية وسلم التنقيط الرسمي المفصل (20 / 20 نقطة)</span>
              </span>
              <span class="font-mono text-xs px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center gap-1.5"><span>Corrigé Officiel</span><span class="sol-chevron inline-block transition-transform">▼</span></span>
            </button>

            <div id="math2-master-solution" class="hidden p-4 sm:p-6 border-t border-slate-800 space-y-6 text-xs text-slate-300 leading-relaxed">
              <!-- Solution Ex 1 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-cyan-400">حل التمرين الأول (4.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><b>1. الاشتقاق على يمين $0$ (1.50 ن):</b> لدينا $f(0) = 1$. لكل $x &gt; 0$:
                  $$\\lim_{x \\to 0^+} \\frac{f(x) - f(0)}{x - 0} = \\lim_{x \\to 0^+} \\frac{\\sqrt{x(x+3)}}{x} = \\lim_{x \\to 0^+} \\sqrt{\\frac{x+3}{x}} = \\sqrt{\\frac{3}{0^+}} = +\\infty$$
                  إذن $f$ <b>غير قابلة للاشتقاق على يمين $0$</b>؛ ويقبل $(C_f)$ في $A(0,1)$ <b>نصف مماس عمودياً</b> معادلته $x=0$ <b>موجهاً نحو الأعلى ($\\uparrow$)</b>. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><b>2. الاشتقاق على يسار $0$ والقرار العام (1.50 ن):</b> لكل $x &lt; 0$:
                  $$\\lim_{x \\to 0^-} \\frac{f(x) - 1}{x} = \\lim_{x \\to 0^-} \\frac{x^3 + 2x + 1 - (x^2 + 1)}{x(x^2 + 1)} = \\lim_{x \\to 0^-} \\frac{x^2 - x + 2}{x^2 + 1} = 2 \\in \\mathbb{R}$$
                  إذن $f$ قابلة للاشتقاق على يسار $0$ و $f_g'(0) = 2$؛ معادلة نصف المماس المائل على اليسار هي $y = 2x + 1$ ($x \\le 0$). وبما أن $f$ غير قابلة للاشتقاق على اليمين، فهي <b>غير قابلة للاشتقاق في $0$</b>. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><b>3. النهاية بالعدد المشتق (1.00 ن):</b> نضع $t(x) = \\tan x$ القابلة للاشتقاق في $\\frac{\\pi}{4}$ مع $t(\\frac{\\pi}{4}) = 1$:
                  $$L = \\lim_{x \\to \\frac{\\pi}{4}} \\frac{\\tan x - \\tan(\\frac{\\pi}{4})}{x - \\frac{\\pi}{4}} = t'\\!\\left(\\frac{\\pi}{4}\\right) = 1 + \\tan^2\\!\\left(\\frac{\\pi}{4}\\right) = 1 + 1 = 2$$
                  <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 2 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-purple-400">حل التمرين الثاني (5.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><b>1. أ) مشتقة $u(x) = \\sqrt[3]{2x^3+1}$ (1.00 ن):</b> الدالة $w(x) = 2x^3+1$ حدودية قابلة للاشتقاق على $]0, +\\infty[$ و $w(x) &gt; 1 &gt; 0$ قطعاً! إذن $u$ قابلة للاشتقاق على $]0, +\\infty[$ و:
                  $$u'(x) = \\frac{w'(x)}{3\\sqrt[3]{w(x)^2}} = \\frac{6x^2}{3\\sqrt[3]{(2x^3+1)^2}} = \\frac{2x^2}{\\sqrt[3]{(2x^3+1)^2}}$$
                  <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>1. ب) مشتقة $v(x) = \\sin(\\sqrt{x^2+4})$ (1.00 ن):</b> بما أن $x^2+4 \\ge 4 &gt; 0$ فإن $\\varphi(x) = \\sqrt{x^2+4}$ قابلة للاشتقاق على $\\mathbb{R}$ بمشتقة $\\varphi'(x) = \\frac{x}{\\sqrt{x^2+4}}$، والمركب $v = \\sin \\circ \\varphi$ قابل للاشتقاق على $\\mathbb{R}$:
                  $$v'(x) = \\varphi'(x)\\cos(\\varphi(x)) = \\frac{x}{\\sqrt{x^2+4}}\\cos\\!\\left(\\sqrt{x^2+4}\\right)$$
                  <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>2. أ) $k'(x)$، الرتابة، وغياب المطراف في $1$ (1.75 ن):</b> $k'(x) = 4x^3 - 12x + 8 = 4(x^3 - 3x + 2)$. وبنشر $4(x-1)^2(x+2) = 4(x^2-2x+1)(x+2) = 4(x^3 - 3x + 2)$ نتحقق من التساوي.<br/>
                  • بما أن $(x-1)^2 \\ge 0$ دائماً، فإشارة $k'(x)$ هي إشارة $(x+2)$: تناقصية على $]-\\infty, -2]$ وتزايدية على $[-2, +\\infty[$.<br/>
                  • تقبل $k$ قيمة دنيا مطلقة في $x=-2$ هي $k(-2) = 16 - 24 - 16 = -24$. أما عند $x_0 = 1$ فرغم أن $k'(1) = 0$ إلا أن $k'$ <b>لا تغيّر إشارتها</b> ($+\\to+$)، لذا لا مطراف في $1$! <span class="text-emerald-400 font-mono">(1.75 ن)</span></p>
                  <p><b>2. ب) $k''(x)$ والتقعر ونقطتا الانعطاف (1.25 ن):</b> $k''(x) = 12x^2 - 12 = 12(x - 1)(x + 1)$؛ تنعدم وتغيّر إشارتها في $-1$ و $1$:<br/>
                  • مقعر نحو الموجب $\\cup$ على $]-\\infty, -1]$ و $[1, +\\infty[$، ومقعر نحو السالب $\\cap$ على $[-1, 1]$.<br/>
                  • نقطتا الانعطاف هما $I_1(-1, -13)$ و $I_2(1, 3)$ (انعطاف بمماس أفقي $y=3$). <span class="text-emerald-400 font-mono">(1.25 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 3 -->
              <div class="space-y-2 border-b border-slate-800 pb-5">
                <h5 class="text-sm font-extrabold text-amber-400">حل التمرين الثالث (4.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><b>1. أ) النهاية بجوار $+\\infty$ (1.00 ن):</b> بالمرافق:
                  $$\\lim_{x\\to+\\infty} p(x) = \\lim_{x\\to+\\infty} \\frac{(x+1)^2 - (x^2 - 2x + 2)}{x + 1 + \\sqrt{x^2 - 2x + 2}} = \\lim_{x\\to+\\infty} \\frac{4x - 1}{x\\left(1 + \\frac{1}{x} + \\sqrt{1 - \\frac{2}{x} + \\frac{2}{x^2}}\\right)} = \\frac{4}{1 + 1} = 2$$
                  التأويل: المستقيم $y = 2$ <b>مقارب أفقي</b> للمنحنى $(C_p)$ بجوار $+\\infty$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>1. ب) المقارب المائل بجوار $-\\infty$ والوضع النسبي (1.50 ن):</b> نحسب $p(x) - 2x = -x + 1 - \\sqrt{x^2 - 2x + 2}$. بجوار $-\\infty$ يكون $-x + 1 &gt; 0$، وبالمرافق:
                  $$p(x) - 2x = \\frac{(-x + 1)^2 - (x^2 - 2x + 2)}{(-x + 1) + \\sqrt{x^2 - 2x + 2}} = \\frac{-1}{(-x + 1) + \\sqrt{x^2 - 2x + 2}} \\xrightarrow[x\\to-\\infty]{} 0$$
                  إذن $(D): y = 2x$ مقارب مائل بجوار $-\\infty$. وعلى $]-\\infty, 1[$ نلاحظ أن $(-x+1)+\\sqrt{x^2-2x+2} &gt; 0$ والبسط $-1 &lt; 0$ (وبالعموم $\\sqrt{x^2-2x+2} = \\sqrt{(1-x)^2+1} &gt; |1-x| \\ge 1-x$)؛ إذن $p(x) - 2x &lt; 0$ والمنحنى <b>$(C_p)$ يوجد تحت $(D)$</b> على $\\mathbb{R}$. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><b>2. مركز التماثل $\\Omega(2, 7)$ (1.50 ن):</b><br/>
                  • الشرط 1: $\\forall x \\in D_q = \\mathbb{R}\\setminus\\{2\\},\\; x \\neq 2 \\iff 4 - x \\neq 2 \\iff 4 - x \\in D_q$.<br/>
                  • الشرط 2: بالقسمة الإقليدية $q(x) = 3x + 1 + \\frac{3}{x - 2}$، ومنه $q(4 - x) = 3(4 - x) + 1 + \\frac{3}{2 - x} = 13 - 3x - \\frac{3}{x - 2}$.<br/>
                  بالجمع: $q(4 - x) + q(x) = (13 - 3x) + (3x + 1) = 14 = 2(7)$، إذن $\\Omega(2, 7)$ مركز تماثل. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                </div>
              </div>

              <!-- Solution Ex 4 -->
              <div class="space-y-2">
                <h5 class="text-sm font-extrabold text-emerald-400">حل المسألة التوليفية الرابعة (7.00 نقط):</h5>
                <div class="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <p><b>1. النهاية والفرع اللانهائي عند $+\\infty$ (1.00 ن):</b> $\\lim_{x\\to+\\infty} x\\left(1 + \\frac{1}{x} - \\frac{2}{\\sqrt{x}}\\right) = +\\infty$، و $\\lim_{x\\to+\\infty} \\frac{f(x)}{x} = 1$، بينما $\\lim_{x\\to+\\infty}(f(x)-x) = \\lim(1 - 2\\sqrt{x}) = -\\infty$ $\\implies$ <b>فرع شلجمي اتجاهه المستقيم $y=x$</b>. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>2. الاشتقاق على يمين $0$ (1.00 ن):</b> $\\lim_{x\\to 0^+} \\frac{f(x) - 1}{x} = \\lim_{x\\to 0^+} \\left(1 - \\frac{2}{\\sqrt{x}}\\right) = -\\infty \\implies$ غير قابلة للاشتقاق على يمين $0$، نصف مماس عمودي في $A(0,1)$ <b>موجه نحو الأسفل ($\\downarrow$)</b>. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>3. الاشتقاق والرتابة وإشارة $f$ (1.50 ن):</b> على $]0, +\\infty[$: $f'(x) = 1 - \\frac{1}{\\sqrt{x}} = \\frac{\\sqrt{x} - 1}{\\sqrt{x}}$. تنعدم في $1$، سالبة على $]0, 1]$ وموجبة على $[1, +\\infty[$. تقبل قيمة دنيا مطلقة $f(1) = 0$ على $[0, +\\infty[$ ومنه <b>$\\forall x \\ge 0,\\; f(x) \\ge 0$</b>! <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><b>4. التقعر والمماس $(T)$ في $B(4, 1)$ (1.50 ن):</b> على $]0, +\\infty[$: $f''(x) = \\frac{1}{2x\\sqrt{x}} &gt; 0 \\implies$ المنحنى مقعر نحو الأراتيب الموجبة $\\cup$ (فوق مماساته). وعند $x_0 = 4$: $f(4)=1$ و $f'(4) = \\frac{1}{2} \\implies (T): y = \\frac{1}{2}(x-4)+1 = \\frac{1}{2}x - 1$. <span class="text-emerald-400 font-mono">(1.50 ن)</span></p>
                  <p><b>5. أ) التقابل و $(g^{-1})'(1)$ (1.00 ن):</b> الدالة $g$ متصلة وتزايدية قطعاً على $I = [1, +\\infty[$، فهي تقابل نحو $J = g([1, +\\infty[) = [0, +\\infty[$. وبما أن $g(4) = 1$ و $g'(4) = \\frac{1}{2} \\neq 0$، فإن $g^{-1}$ قابلة للاشتقاق في $1$ و <b>$(g^{-1})'(1) = \\frac{1}{g'(4)} = 2$</b>. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                  <p><b>5. ب) الصيغة الصريحة وتفسير $0^+$ (1.00 ن):</b> ليكن $x \\in [0, +\\infty[$ و $y \\in [1, +\\infty[$: $g(y)=x \\iff (\\sqrt{y}-1)^2 = x$. وبما أن $y \\ge 1 \\implies \\sqrt{y}-1 \\ge 0$، فإن $\\sqrt{y}-1 = \\sqrt{x} \\implies g^{-1}(x) = (\\sqrt{x} + 1)^2$.<br/>
                  وبما أن $(C_g)$ يقبل نصف مماس أفقياً في $(1, 0)$ لأن $g'(1) = 0$، فإن $(C_{g^{-1}})$ يقبل بالتناظر حول $y=x$ <b>نصف مماس عمودياً موجه للأعلى ($\\uparrow$)</b> في $(0, 1)$، لذا $g^{-1}$ غير قابلة للاشتقاق على يمين $0$. <span class="text-emerald-400 font-mono">(1.00 ن)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

`);
