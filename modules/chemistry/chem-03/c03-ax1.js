window.EulerAcademy.registerAxis('chem-03', 'c03-ax1', `

              <div class="space-y-6">
                <!-- 1. Brönsted-Lowry Definitions & pH Scale -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">1. الحمض والقاعدة حسب برونشتد، المزدوجات المتدخلة، وقياس الـ $pH$</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-1.5">⚗️ أ) تعريف برونشتد ونقل البروتون $\\text{H}^+$:</b>
                      • <b>الحمض حسب برونشتد (Acide):</b> كل نوع كيميائي (جزيء أو أيون) قادر على <b>فقدان</b> بروتون $\\text{H}^+$ أو أكثر خلال تحول كيميائي:
                      $$\\text{HA} \\rightleftharpoons \\text{A}^- + \\text{H}^+$$
                      • <b>القاعدة حسب برونشتد (Base):</b> كل نوع كيميائي قادر على <b>اكتساب</b> بروتون $\\text{H}^+$ أو أكثر:
                      $$\\text{B} + \\text{H}^+ \\rightleftharpoons \\text{BH}^+$$
                      • <b>التفاعل حمض-قاعدة:</b> انتقال بروتون $\\text{H}^+$ من حمض مزدوجة $\\text{A}_1/\\text{B}_1$ إلى قاعدة مزدوجة أخرى $\\text{A}_2/\\text{B}_2$:
                      $$\\text{A}_1 + \\text{B}_2 \\rightleftharpoons \\text{B}_1 + \\text{A}_2$$
                      <span class="text-slate-400 block mt-1">• يُسمى النوع القادر على لعب دور الحمض ودور القاعدة <b>أمفوليت (Ampholyte)</b> مثل الماء $\\text{H}_2\\text{O}$ وأيون $\\text{HCO}_3^-$.</span>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 text-sm block mb-1.5">📏 ب) تعريف الـ $pH$ لمحلول مائي مخفف وقياسه:</b>
                      بالنسبة للمحاليل المائية المخففة ($[\\text{H}_3\\text{O}^+] \\le 5.0 \\times 10^{-2}\\text{ mol}\\cdot\\text{L}^{-1}$)، يرتبط $pH$ المحلول بالتركيز المولي الفعلي لأيونات الأوكسونيوم $\\text{H}_3\\text{O}^+$ (بوحدة <b>$\\text{mol}\\cdot\\text{L}^{-1}$</b>):
                      $$pH = -\\log[\\text{H}_3\\text{O}^+] \\qquad \\Longleftrightarrow \\qquad [\\text{H}_3\\text{O}^+] = 10^{-pH}\\;(\\text{mol}\\cdot\\text{L}^{-1})$$
                      • <b>وسائل القياس:</b><br/>
                      1) <b>ورق الـ $pH$:</b> يعطي قيمة تقريبية صحيحة (دقة $\\approx \\pm 1$).<br/>
                      2) <b>جهاز الـ $pH$-متر:</b> يعاير بمحلولين عياريين ($pH=7$ ثم $pH=4$ أو $9$) ويعطي قيمة دقيقة برقمين بعد الفاصلة (ارتياب تجريبي $\\Delta pH \\approx \\pm 0.05$).
                    </div>
                  </div>

                  <!-- SVG Diagram: Brönsted Proton Transfer + Logarithmic pH Scale -->
                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardBronstedPh">
                    <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span>🔬 تبادل البروتون $\\text{H}^+$ بين مزدوجتين والسلم اللوغاريتمي للـ $pH$ وتركيز $[\\text{H}_3\\text{O}^+]$</span>
                      <span class="text-[11px] font-mono text-emerald-400">[H3O+] = 10^-pH (mol/L)</span>
                    </div>
                    <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
                      <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 230" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="phScaleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#ef4444"/>
                            <stop offset="30%" stop-color="#f59e0b"/>
                            <stop offset="50%" stop-color="#22c55e"/>
                            <stop offset="75%" stop-color="#06b6d4"/>
                            <stop offset="100%" stop-color="#6366f1"/>
                          </linearGradient>
                          <marker id="arrBrH" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
                          </marker>
                        </defs>

                        <!-- Left Panel: Bronsted Transfer -->
                        <rect x="14" y="14" width="318" height="202" rx="10" fill="rgba(15,23,42,0.75)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="173" y="34" fill="#67e8f9" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">Transfert de proton H+</text>

                        <rect x="28" y="48" width="116" height="34" rx="8" fill="rgba(244,63,94,0.16)" stroke="#fb7185" stroke-width="1.5"/>
                        <text x="86" y="69" fill="#fecdd3" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Acide 1 (HA)</text>

                        <rect x="200" y="48" width="116" height="34" rx="8" fill="rgba(56,189,248,0.16)" stroke="#38bdf8" stroke-width="1.5"/>
                        <text x="258" y="69" fill="#bae6fd" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Base 2 (B)</text>

                        <!-- Proton curved arc -->
                        <path d="M 110 84 Q 173 116 234 84" fill="none" stroke="#34d399" stroke-width="2" marker-end="url(#arrBrH)"/>
                        <text x="173" y="114" fill="#6ee7b7" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">don de H+</text>

                        <text x="173" y="142" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">&lt;===&gt;</text>

                        <rect x="28" y="156" width="116" height="34" rx="8" fill="rgba(56,189,248,0.12)" stroke="#0ea5e9" stroke-width="1.4"/>
                        <text x="86" y="177" fill="#7dd3fc" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Base 1 (A-)</text>

                        <rect x="200" y="156" width="116" height="34" rx="8" fill="rgba(244,63,94,0.12)" stroke="#f43f5e" stroke-width="1.4"/>
                        <text x="258" y="177" fill="#fda4af" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">Acide 2 (BH+)</text>

                        <!-- Right Panel: pH Scale -->
                        <rect x="348" y="14" width="318" height="202" rx="10" fill="rgba(15,23,42,0.75)" stroke="#1e293b" stroke-width="1.2"/>
                        <text x="507" y="34" fill="#fde68a" font-size="11.5" font-weight="bold" font-family="monospace" text-anchor="middle">Echelle pH = -log[H3O+]</text>

                        <text x="380" y="70" fill="#fca5a5" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">pH=0</text>
                        <text x="507" y="70" fill="#86efac" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">pH=7</text>
                        <text x="634" y="70" fill="#a5b4fc" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">pH=14</text>

                        <rect x="370" y="80" width="274" height="28" rx="6" fill="url(#phScaleGrad)" stroke="#cbd5e1" stroke-width="1"/>
                        <line x1="507" y1="75" x2="507" y2="114" stroke="#ffffff" stroke-width="1.8"/>

                        <text x="382" y="132" fill="#fecaca" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">10^0</text>
                        <text x="507" y="132" fill="#bbf7d0" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">10^-7</text>
                        <text x="632" y="132" fill="#c7d2fe" font-size="10" font-weight="bold" font-family="monospace" text-anchor="middle">10^-14</text>

                        <text x="507" y="164" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">[H3O+] en mol/L diminue x10 par unite</text>
                        <text x="507" y="192" fill="#34d399" font-size="10.5" font-weight="bold" font-family="monospace" text-anchor="middle">Neutre (25 C) : [H3O+] = [HO-]</text>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- 2. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الوطني (Pièges Classiques — معيار د. الرياح)</span>
                    <span class="text-xs text-rose-400 font-mono">دقة المزدوجات والوحدات</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">1️⃣ فخ «قلب كتابة المزدوجة (قاعدة/حمض بدل حمض/قاعدة)»</b>
                      تُكتب المزدوجة دائماً بالصيغة المعيارية <b>$\\text{Acide}/\\text{Base}$</b>: الحمض يساراً (الأغنى ببروتون $\\text{H}^+$) والقاعدة يميناً! نكتب $\\text{H}_3\\text{O}^+/\\text{H}_2\\text{O}$ و $\\text{NH}_4^+/\\text{NH}_3$ و $\\text{H}_2\\text{O}/\\text{HO}^-$، وقلب الترتيب يفقدك نقطة المزدوجات بالكامل!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">2️⃣ فخ «تضارب وحدة التركيز بين $pH$ ($\\text{mol}\\cdot\\text{L}^{-1}$) والموصلية $\\sigma$ ($\\text{mol}\\cdot\\text{m}^{-3}$)»</b>
                      يُعطي قانون $[\\text{H}_3\\text{O}^+] = 10^{-pH}$ التركيز بـ <b>$\\text{mol}\\cdot\\text{L}^{-1}$</b>؛ وعند استعماله في قانون كولروش $\\sigma = \\sum \\lambda_i [X_i]$ <b>يجب ضربه في $10^3$</b> لتحويله إلى $\\text{mol}\\cdot\\text{m}^{-3}$!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">3️⃣ فخ «تفسير التغيّر بمقدار وحدة $pH$ وتأثير الارتياب $\\Delta pH$»</b>
                      إنقاص الـ $pH$ بمقدار وحدة واحدة يعني ضرب تركيز $[\\text{H}_3\\text{O}^+]$ في <b>$10$</b>، وخطأ ضئيل $\\Delta pH = \\pm 0.05$ يؤدي عبر $10^{-pH}$ إلى خطأ نسبي يتجاوز $11\\%$ في التركيز!
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-rose-500/20">
                      <b class="text-rose-300 block mb-1">4️⃣ فخ «الأحماض الكربوكسيلية والأمفوليت $\\text{H}_2\\text{O}$ أو $\\text{HCO}_3^-$»</b>
                      في الحمض الكربوكسيلي $\\text{R}-\\text{COOH}$ البروتون الحَمضي المفقود هو هيدروجين المجموعة الكربوكسيلية فقط وليس هيدروجينات الجذر $\\text{R}$! مثلاً: $\\text{CH}_3\\text{COOH}/\\text{CH}_3\\text{COO}^-$.
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
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: كتابة معادلات التفاعل حمض-قاعدة وتحديد المزدوجات المتدخلة (بما فيها الأمفوليت)</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      <b>1.</b> اكتب المعادلة الكيميائية لتفاعل كل زوج من المتفاعلات التالية مع إبراز المزدوجتين حمض/قاعدة المتدخلتين:<br/>
                      • أ) حمض البنزويك $\\text{C}_6\\text{H}_5\\text{COOH}$ مع الماء $\\text{H}_2\\text{O}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      • ب) أيون الإيثيل أمونيوم $\\text{C}_2\\text{H}_5\\text{NH}_3^+$ مع قاعدة الأمونياك $\\text{NH}_3$. <span class="text-emerald-400 font-mono">(0.50 ن)</span><br/>
                      <b>2.</b> بيّن بالمعادلات أن أيون هيدروجينوكربونات $\\text{HCO}_3^-$ نوع أمفوليتي (مزدوج الدور) من خلال المزدوجتين $(\\text{CO}_2,\\text{H}_2\\text{O}/\\text{HCO}_3^-)$ و $(\\text{HCO}_3^-/\\text{CO}_3^{2-})$ عند تفاعله مع $\\text{H}_3\\text{O}^+$ ثم مع $\\text{HO}^-$. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. أ) حمض البنزويك مع الماء (0.50 ن):</b><br/>
                      $$\\text{C}_6\\text{H}_5\\text{COOH}(\\text{aq}) + \\text{H}_2\\text{O}(\\ell) \\rightleftharpoons \\text{C}_6\\text{H}_5\\text{COO}^-(\\text{aq}) + \\text{H}_3\\text{O}^+(\\text{aq})$$
                      المزدوجتان المتدخلتان: $(\\text{C}_6\\text{H}_5\\text{COOH}/\\text{C}_6\\text{H}_5\\text{COO}^-)$ و $(\\text{H}_3\\text{O}^+/\\text{H}_2\\text{O})$.</p>
                      <p><b>1. ب) أيون الإيثيل أمونيوم مع الأمونياك (0.50 ن):</b><br/>
                      $$\\text{C}_2\\text{H}_5\\text{NH}_3^+(\\text{aq}) + \\text{NH}_3(\\text{aq}) \\rightleftharpoons \\text{C}_2\\text{H}_5\\text{NH}_2(\\text{aq}) + \\text{NH}_4^+(\\text{aq})$$
                      المزدوجتان المتدخلتان: $(\\text{C}_2\\text{H}_5\\text{NH}_3^+/\\text{C}_2\\text{H}_5\\text{NH}_2)$ و $(\\text{NH}_4^+/\\text{NH}_3)$.</p>
                      <p><b>2. السلوك الأمفوليتي لـ $\\text{HCO}_3^-$ (0.50 ن):</b><br/>
                      • كقاعدة (يكتسب $\\text{H}^+$ من $\\text{H}_3\\text{O}^+$): $\\text{HCO}_3^-(\\text{aq}) + \\text{H}_3\\text{O}^+(\\text{aq}) \\rightleftharpoons \\text{CO}_2,\\text{H}_2\\text{O}(\\text{aq}) + \\text{H}_2\\text{O}(\\ell)$.<br/>
                      • كحمض (يفقد $\\text{H}^+$ نحو $\\text{HO}^-$): $\\text{HCO}_3^-(\\text{aq}) + \\text{HO}^-(\\text{aq}) \\rightleftharpoons \\text{CO}_3^{2-}(\\text{aq}) + \\text{H}_2\\text{O}(\\ell)$.</p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-3 sm:p-5 rounded-2xl border border-slate-800">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: الربط بين قياس الـ $pH$، التركيز $[\\text{H}_3\\text{O}^+]$، الموصلية $\\sigma$، وأثر الارتياب $\\Delta pH$</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نقيس بجهاز $pH$-متر محلولاً مخففاً لحمض الميثانويك $\\text{HCOOH}$ (أحادي الحموضة) فنجد $pH = 2.40$ عند $25^\\circ\\text{C}$ (بإهمال أيونات $\\text{HO}^-$ أمام $\\text{H}_3\\text{O}^+$ وبحكم تعادل المحلول كهربائياً $[\\text{HCOO}^-] = [\\text{H}_3\\text{O}^+]$). تُعطى: $\\lambda_{\\text{H}_3\\text{O}^+} = 35.0\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$ و $\\lambda_{\\text{HCOO}^-} = 5.46\\text{ mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$.<br/>
                      <b>1.</b> احسب تركيز أيونات الأوكسونيوم $[\\text{H}_3\\text{O}^+]$ بوحدة $\\text{mol}\\cdot\\text{L}^{-1}$ ثم بوحدة $\\text{mol}\\cdot\\text{m}^{-3}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>2.</b> استنتج قيمة الموصلية الكهربائية $\\sigma$ لهذا المحلول بالوحدة $\\text{S}\\cdot\\text{m}^{-1}$. <span class="text-emerald-400 font-mono">(0.75 ن)</span><br/>
                      <b>3.</b> إذا علمت أن $pH$-متر يرتكب ارتياباً $\\Delta pH = \\pm 0.05$، حدّد المجال المحصور للتركيز الحقيقي $[\\text{H}_3\\text{O}^+]$ بوحدة $\\text{mmol}\\cdot\\text{L}^{-1}$. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. تركيز $[\\text{H}_3\\text{O}^+]$ (0.75 ن):</b><br/>
                      $$[\\text{H}_3\\text{O}^+] = 10^{-pH} = 10^{-2.40} \\approx 3.98 \\times 10^{-3}\\text{ mol}\\cdot\\text{L}^{-1} = 3.98\\text{ mol}\\cdot\\text{m}^{-3}$$</p>
                      <p><b>2. حساب الموصلية $\\sigma$ (0.75 ن):</b><br/>
                      $$\\sigma = (\\lambda_{\\text{H}_3\\text{O}^+} + \\lambda_{\\text{HCOO}^-})[\\text{H}_3\\text{O}^+] = (35.0 + 5.46) \\times 10^{-3} \\times 3.98 = 0.161\\text{ S}\\cdot\\text{m}^{-1}$$</p>
                      <p><b>3. مجال التركيز في ظل الارتياب $\\Delta pH = \\pm 0.05$ (0.50 ن):</b><br/>
                      يتراوح الـ $pH$ الحقيقي بين $2.35$ و $2.45$، إذن $10^{-2.45} \\le [\\text{H}_3\\text{O}^+] \\le 10^{-2.35}$ أي:
                      $$3.55\\text{ mmol}\\cdot\\text{L}^{-1} \\le [\\text{H}_3\\text{O}^+] \\le 4.47\\text{ mmol}\\cdot\\text{L}^{-1}$$
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 4. Interactive Auto-Test -->
                <div class="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">تخفيف حمض كلوريدريك ($\\text{H}_3\\text{O}^+ + \\text{Cl}^-$) وتعديل قيمة الـ $pH$</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    نتوفر على حجم $V_1 = 50.0\\text{ mL}$ من محلول مخفف لحمض الكلوريدريك ($\\text{H}_3\\text{O}^+ + \\text{Cl}^-$، تفاعله كلي مع الماء) قيمة الـ $pH$ له هي $pH_1 = 2.70$. نضيف إليه حجماً $V_e = 450.0\\text{ mL}$ من الماء المقطر.<br/>
                    1) احسب معامل التخفيف $F = \\frac{V_2}{V_1}$ ثم التركيز الجديد $[\\text{H}_3\\text{O}^+]_2$.<br/>
                    2) استنتج قيمة $pH_2$ للمحلول المخفف الجديد.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-emerald-300 hover:text-emerald-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل البرهاني المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1. معامل التخفيف والتركيز الجديد:</b><br/>
                      • الحجم الكلي: $V_2 = V_1 + V_e = 50.0 + 450.0 = 500.0\\text{ mL} \\implies F = \\frac{V_2}{V_1} = 10$.<br/>
                      • بانحفاظ كمية مادة $\\text{H}_3\\text{O}^+$ (تفاعل كلي): $[\\text{H}_3\\text{O}^+]_2 = \\frac{[\\text{H}_3\\text{O}^+]_1}{10} = 10^{-1} \\times 10^{-2.70} = 10^{-3.70}\\text{ mol}\\cdot\\text{L}^{-1} \\approx 2.00 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}$.</p>
                      <p><b>2. حساب $pH_2$:</b><br/>
                      $$pH_2 = -\\log\\!\\left(10^{-3.70}\\right) = 3.70 = pH_1 + 1$$
                      (قاعدة ذهبية للتحقق: تخفيف محلول حمض قوي 10 مرات يرفع الـ $pH$ بمقدار وحدة واحدة بالضبط ما دام الـ $pH$ بعيداً عن $7$!).</p>
                    </div>
                  </details>
                </div>
              </div>

`);
