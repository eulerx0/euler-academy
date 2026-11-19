window.EulerAcademy.registerAxis('phys-01', 'p01-ax1', `

              <div class="space-y-6">
                <!-- 1. Official Definitions -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-bold">1. التعاريف الرسمية للموجة الميكانيكية المتوالية (Définitions officielles)</span>
                    <span class="text-xs text-slate-400 font-mono">الإطار المرجعي 2BAC PC</span>
                  </div>
                  <div class="space-y-4 text-sm text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">أ) التشويه الميكانيكي (Perturbation mécanique):</b>
                      تغير محلي ومؤقت لخاصية فيزيائية (الموضع، الشكل، الضغط، الكثافة، التوتر...) لوسط مادي مرن.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 block mb-1">ب) الموجة الميكانيكية (Onde mécanique) — التعريف الحرفي في الامتحان الوطني:</b>
                      هي <b>ظاهرة انتشار تشويه في وسط مادي مرن، دون انتقال للمادة المكونة لهذا الوسط</b> (ولكن مع انتقال للطاقة).
                      <div class="mt-2 text-xs text-amber-300/90 font-mono" dir="ltr">
                        Une onde mécanique est le phénomène de propagation d’une perturbation dans un milieu matériel élastique, sans transport de matière.
                      </div>
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-emerald-400 block mb-1">ج) الموجة الميكانيكية المتوالية (Onde mécanique progressive):</b>
                      تتابع مستمر ومُصان لإشارات ميكانيكية متتالية، ناتج عن اضطراب مستمر للمنبع $S$ ينتشر تدريجياً في الوسط المادي المرن دون توقف.
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300 mt-4">
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">🧱 معنى «الوسط المادي» (Milieu matériel):</b>
                      وسط يتكون من مادة (صلبة، سائلة، أو غازية). لذلك <b>لا تنتشر الموجة الميكانيكية أبداً في الفراغ (Le vide)</b>، بخلاف الموجة الكهرومغناطيسية كالضوء. <br/>
                      <i>(إثبات تجريبي: عدم سماع صوت جرس يرن داخل ناقوس زجاجي مُفرَّغ من الهواء).</i>
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
                      <b class="text-emerald-400 block mb-1">🔄 معنى «الوسط المرن» (Milieu élastique):</b>
                      وسط تسترجع جميع نقطه موضع توازنها وشكلها البدئي بمجرد عبور التشويه منه، بفضل قوى التماسك والارتداد بين جزيئات الوسط.
                    </div>
                  </div>
                </div>

                <!-- 2. Transverse vs Longitudinal Waves -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">2. أصناف الموجات الميكانيكية: المستعرضة والطولية (Transversales vs Longitudinales)</span>
                    <span class="text-xs text-slate-400 font-mono">Classification des ondes</span>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-200 leading-relaxed mb-4">
                    <div class="bg-slate-950 p-4 rounded-xl border border-cyan-500/30">
                      <b class="text-cyan-400 text-sm block mb-2">أ) الموجة المستعرضة (Onde transversale)</b>
                      <p class="mb-2">تكون الموجة <b>مستعرضة</b> إذا كان <b>اتجاه تشويه نقط الوسط عمودياً على اتجاه الانتشار</b>:</p>
                      <div class="bg-slate-900/90 border border-slate-800 rounded-lg p-2 text-center my-2">
                        $$\\vec{d}_{\\text{perturbation}} \\perp \\vec{d}_{\\text{propagation}}$$
                      </div>
                      <p class="text-slate-300"><b>الأمثلة المرجعية:</b> موجة على طول حبل مشدود؛ موجة على سطح الماء (حركة قطعة الفلين عمودياً بينما تنتشر الموجة أفقياً)؛ الموجات الزلزالية الثانوية $S$.</p>
                    </div>

                    <div class="bg-slate-950 p-4 rounded-xl border border-amber-500/30">
                      <b class="text-amber-400 text-sm block mb-2">ب) الموجة الطولية (Onde longitudinale)</b>
                      <p class="mb-2">تكون الموجة <b>طولية</b> إذا كان <b>اتجاه تشويه نقط الوسط على نفس استقامة (موازياً لـ) اتجاه الانتشار</b>:</p>
                      <div class="bg-slate-900/90 border border-slate-800 rounded-lg p-2 text-center my-2">
                        $$\\vec{d}_{\\text{perturbation}} \\parallel \\vec{d}_{\\text{propagation}}$$
                      </div>
                      <p class="text-slate-300"><b>الأمثلة المرجعية:</b> موجة انضغاط وتمدد على طول نابض ذي لفات غير متصلة؛ <b>الموجة الصوتية وفوق الصوتية في الهواء أو الماء</b>؛ الموجات الزلزالية الأولية $P$.</p>
                    </div>
                  </div>

                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardWaveTypes">
      <div class="text-xs font-bold text-slate-300 mb-3 flex flex-wrap items-center justify-between gap-2">
        <span>📐 رسم تخطيطي مقارنة: الموجة المستعرضة والموجة الطولية</span>
        <span class="text-[11px] font-mono text-amber-400">Ondes transversales vs longitudinales</span>
      </div>
      <div class="space-y-3">
        <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
          <div class="flex flex-wrap items-center justify-between text-[11px] font-bold mb-1 gap-2">
            <span class="text-cyan-400">1. موجة مستعرضة (حبل مشدود): اتجاه التشويه عمودي (⊥) على اتجاه الانتشار</span>
            <span class="text-emerald-400 font-mono">Transversale</span>
          </div>
          <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 102" class="w-full h-auto">
            <defs>
              <marker id="arrEmerald1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
              </marker>
              <marker id="arrAmber1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24"/>
              </marker>
              <marker id="arrAmberStart1" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 10 1 L 0 5 L 10 9 z" fill="#fbbf24"/>
              </marker>
            </defs>
            <line x1="50" y1="78" x2="625" y2="78" stroke="#334155" stroke-width="1.5" stroke-dasharray="5,5"/>
            <circle cx="50" cy="78" r="4" fill="#22d3ee"/>
            <text x="34" y="82" fill="#22d3ee" font-size="12" font-weight="bold" text-anchor="middle">S</text>
            <path d="M 50,78.0 L 53,78.0 L 56,78.0 L 59,78.0 L 62,78.0 L 65,78.0 L 68,78.0 L 71,78.0 L 74,78.0 L 77,78.0 L 80,78.0 L 83,78.0 L 86,78.0 L 89,78.0 L 92,78.0 L 95,78.0 L 98,78.0 L 101,78.0 L 104,78.0 L 107,78.0 L 110,78.0 L 113,78.0 L 116,78.0 L 119,78.0 L 122,78.0 L 125,78.0 L 128,78.0 L 131,78.0 L 134,78.0 L 137,78.0 L 140,78.0 L 143,78.0 L 146,78.0 L 149,78.0 L 152,78.0 L 155,78.0 L 158,78.0 L 161,78.0 L 164,78.0 L 167,78.0 L 170,78.0 L 173,78.0 L 176,78.0 L 179,78.0 L 182,78.0 L 185,78.0 L 188,78.0 L 191,78.0 L 194,78.0 L 197,78.0 L 200,78.0 L 203,78.0 L 206,78.0 L 209,78.0 L 212,78.0 L 215,78.0 L 218,78.0 L 221,78.0 L 224,78.0 L 227,78.0 L 230,78.0 L 233,78.0 L 236,78.0 L 239,78.0 L 242,78.0 L 245,78.0 L 248,78.0 L 251,78.0 L 254,77.9 L 257,77.9 L 260,77.8 L 263,77.7 L 266,77.6 L 269,77.4 L 272,77.2 L 275,76.9 L 278,76.4 L 281,75.8 L 284,75.1 L 287,74.1 L 290,72.9 L 293,71.5 L 296,69.8 L 299,67.7 L 302,65.4 L 305,62.8 L 308,59.9 L 311,56.7 L 314,53.5 L 317,50.2 L 320,46.9 L 323,43.7 L 326,40.9 L 329,38.4 L 332,36.4 L 335,34.9 L 338,34.2 L 341,34.0 L 344,34.6 L 347,35.8 L 350,37.6 L 353,40.0 L 356,42.7 L 359,45.8 L 362,49.1 L 365,52.4 L 368,55.7 L 371,58.8 L 374,61.8 L 377,64.5 L 380,67.0 L 383,69.1 L 386,70.9 L 389,72.5 L 392,73.8 L 395,74.8 L 398,75.6 L 401,76.2 L 404,76.7 L 407,77.1 L 410,77.4 L 413,77.6 L 416,77.7 L 419,77.8 L 422,77.9 L 425,77.9 L 428,77.9 L 431,78.0 L 434,78.0 L 437,78.0 L 440,78.0 L 443,78.0 L 446,78.0 L 449,78.0 L 452,78.0 L 455,78.0 L 458,78.0 L 461,78.0 L 464,78.0 L 467,78.0 L 470,78.0 L 473,78.0 L 476,78.0 L 479,78.0 L 482,78.0 L 485,78.0 L 488,78.0 L 491,78.0 L 494,78.0 L 497,78.0 L 500,78.0 L 503,78.0 L 506,78.0 L 509,78.0 L 512,78.0 L 515,78.0 L 518,78.0 L 521,78.0 L 524,78.0 L 527,78.0 L 530,78.0 L 533,78.0 L 536,78.0 L 539,78.0 L 542,78.0 L 545,78.0 L 548,78.0 L 551,78.0 L 554,78.0 L 557,78.0 L 560,78.0 L 563,78.0 L 566,78.0 L 569,78.0 L 572,78.0 L 575,78.0 L 578,78.0 L 581,78.0 L 584,78.0 L 587,78.0 L 590,78.0 L 593,78.0 L 596,78.0 L 599,78.0 L 602,78.0 L 605,78.0 L 608,78.0 L 611,78.0 L 614,78.0 L 617,78.0 L 620,78.0" fill="none" stroke="#22d3ee" stroke-width="3" stroke-linecap="round"/>

            <line x1="340" y1="78" x2="340" y2="32" stroke="#fbbf24" stroke-width="2" marker-start="url(#arrAmberStart1)" marker-end="url(#arrAmber1)"/>
            <rect x="332" y="70" width="8" height="8" fill="none" stroke="#94a3b8" stroke-width="1"/>
            <text x="276" y="45" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">اتجاه التشويه</text>

            <line x1="425" y1="40" x2="535" y2="40" stroke="#34d399" stroke-width="2.2" marker-end="url(#arrEmerald1)"/>
            <text x="480" y="28" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">اتجاه الانتشار</text>
          </svg>
        </div>

        <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
          <div class="flex flex-wrap items-center justify-between text-[11px] font-bold mb-1 gap-2">
            <span class="text-amber-400">2. موجة طولية (نابض بلفات غير متصلة): اتجاه التشويه موازٍ (//) لاتجاه الانتشار</span>
            <span class="text-emerald-400 font-mono">Longitudinale</span>
          </div>
          <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 112" class="w-full h-auto">
            <defs>
              <marker id="arrEmerald2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
              </marker>
              <marker id="arrAmber2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24"/>
              </marker>
              <marker id="arrAmberStart2" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 10 1 L 0 5 L 10 9 z" fill="#fbbf24"/>
              </marker>
            </defs>
            <rect x="305" y="41" width="70" height="46" rx="6" fill="rgba(251, 191, 36, 0.12)" stroke="rgba(251, 191, 36, 0.45)" stroke-dasharray="3,3"/>
            <text x="340" y="102" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">منطقة انضغاط (Compression)</text>

            <path d="M 59.5,64.0 L 60.2,69.5 L 60.4,74.3 L 60.2,77.9 L 59.7,79.8 L 59.1,79.8 L 58.6,77.9 L 58.4,74.3 L 58.5,69.5 L 59.3,64.0 L 60.5,58.5 L 62.2,53.7 L 64.4,50.1 L 66.9,48.2 L 69.4,48.2 L 71.8,50.1 L 74.0,53.7 L 75.8,58.5 L 77.0,64.0 L 77.7,69.5 L 77.9,74.3 L 77.7,77.9 L 77.2,79.8 L 76.6,79.8 L 76.1,77.9 L 75.9,74.3 L 76.0,69.5 L 76.8,64.0 L 78.0,58.5 L 79.7,53.7 L 81.9,50.1 L 84.4,48.2 L 86.9,48.2 L 89.3,50.1 L 91.5,53.7 L 93.3,58.5 L 94.5,64.0 L 95.2,69.5 L 95.4,74.3 L 95.2,77.9 L 94.7,79.8 L 94.1,79.8 L 93.6,77.9 L 93.4,74.3 L 93.5,69.5 L 94.3,64.0 L 95.5,58.5 L 97.2,53.7 L 99.4,50.1 L 101.9,48.2 L 104.4,48.2 L 106.8,50.1 L 109.0,53.7 L 110.8,58.5 L 112.0,64.0 L 112.7,69.5 L 112.9,74.3 L 112.7,77.9 L 112.2,79.8 L 111.6,79.8 L 111.1,77.9 L 110.9,74.3 L 111.0,69.5 L 111.8,64.0 L 113.0,58.5 L 114.7,53.7 L 116.9,50.1 L 119.4,48.2 L 121.9,48.2 L 124.3,50.1 L 126.5,53.7 L 128.3,58.5 L 129.5,64.0 L 130.2,69.5 L 130.4,74.3 L 130.2,77.9 L 129.7,79.8 L 129.1,79.8 L 128.6,77.9 L 128.4,74.3 L 128.5,69.5 L 129.3,64.0 L 130.5,58.5 L 132.2,53.7 L 134.4,50.1 L 136.9,48.2 L 139.4,48.2 L 141.8,50.1 L 144.0,53.7 L 145.8,58.5 L 147.0,64.0 L 147.7,69.5 L 147.9,74.3 L 147.7,77.9 L 147.2,79.8 L 146.6,79.8 L 146.1,77.9 L 145.9,74.3 L 146.1,69.5 L 146.8,64.0 L 148.0,58.5 L 149.7,53.7 L 151.9,50.1 L 154.4,48.2 L 156.9,48.2 L 159.3,50.1 L 161.5,53.7 L 163.3,58.5 L 164.5,64.0 L 165.2,69.5 L 165.4,74.3 L 165.2,77.9 L 164.7,79.8 L 164.1,79.8 L 163.6,77.9 L 163.4,74.3 L 163.6,69.5 L 164.3,64.0 L 165.5,58.5 L 167.3,53.7 L 169.4,50.1 L 171.9,48.2 L 174.4,48.2 L 176.9,50.1 L 179.0,53.7 L 180.8,58.5 L 182.0,64.0 L 182.7,69.5 L 182.9,74.3 L 182.7,77.9 L 182.2,79.8 L 181.6,79.8 L 181.1,77.9 L 180.9,74.3 L 181.1,69.5 L 181.8,64.0 L 183.1,58.5 L 184.8,53.7 L 187.0,50.1 L 189.4,48.2 L 192.0,48.2 L 194.4,50.1 L 196.6,53.7 L 198.4,58.5 L 199.6,64.0 L 200.3,69.5 L 200.5,74.3 L 200.3,77.9 L 199.8,79.8 L 199.3,79.8 L 198.8,77.9 L 198.6,74.3 L 198.8,69.5 L 199.5,64.0 L 200.8,58.5 L 202.5,53.7 L 204.7,50.1 L 207.2,48.2 L 209.7,48.2 L 212.2,50.1 L 214.4,53.7 L 216.2,58.5 L 217.5,64.0 L 218.2,69.5 L 218.4,74.3 L 218.3,77.9 L 217.8,79.8 L 217.3,79.8 L 216.8,77.9 L 216.6,74.3 L 216.9,69.5 L 217.6,64.0 L 218.9,58.5 L 220.8,53.7 L 223.0,50.1 L 225.5,48.2 L 228.1,48.2 L 230.6,50.1 L 232.9,53.7 L 234.7,58.5 L 236.0,64.0 L 236.8,69.5 L 237.1,74.3 L 237.0,77.9 L 236.6,79.8 L 236.1,79.8 L 235.8,77.9 L 235.7,74.3 L 236.0,69.5 L 236.8,64.0 L 238.2,58.5 L 240.1,53.7 L 242.4,50.1 L 245.0,48.2 L 247.7,48.2 L 250.3,50.1 L 252.7,53.7 L 254.6,58.5 L 256.0,64.0 L 256.9,69.5 L 257.3,74.3 L 257.3,77.9 L 257.0,79.8 L 256.6,79.8 L 256.4,77.9 L 256.4,74.3 L 256.8,69.5 L 257.7,64.0 L 259.2,58.5 L 261.2,53.7 L 263.6,50.1 L 266.3,48.2 L 269.1,48.2 L 271.8,50.1 L 274.3,53.7 L 276.3,58.5 L 277.8,64.0 L 278.8,69.5 L 279.3,74.3 L 279.3,77.9 L 279.1,79.8 L 278.8,79.8 L 278.6,77.9 L 278.7,74.3 L 279.2,69.5 L 280.1,64.0 L 281.7,58.5 L 283.7,53.7 L 286.2,50.1 L 288.9,48.2 L 291.7,48.2 L 294.4,50.1 L 296.8,53.7 L 298.9,58.5 L 300.4,64.0 L 301.3,69.5 L 301.7,74.3 L 301.7,77.9 L 301.5,79.8 L 301.1,79.8 L 300.8,77.9 L 300.8,74.3 L 301.1,69.5 L 302.0,64.0 L 303.4,58.5 L 305.3,53.7 L 307.6,50.1 L 310.1,48.2 L 312.7,48.2 L 315.2,50.1 L 317.5,53.7 L 319.2,58.5 L 320.5,64.0 L 321.2,69.5 L 321.4,74.3 L 321.1,77.9 L 320.6,79.8 L 319.9,79.8 L 319.3,77.9 L 318.9,74.3 L 319.0,69.5 L 319.5,64.0 L 320.6,58.5 L 322.1,53.7 L 324.0,50.1 L 326.2,48.2 L 328.5,48.2 L 330.6,50.1 L 332.5,53.7 L 333.9,58.5 L 334.8,64.0 L 335.1,69.5 L 334.9,74.3 L 334.2,77.9 L 333.3,79.8 L 332.2,79.8 L 331.3,77.9 L 330.5,74.3 L 330.2,69.5 L 330.4,64.0 L 331.1,58.5 L 332.3,53.7 L 333.9,50.1 L 335.7,48.2 L 337.7,48.2 L 339.5,50.1 L 341.1,53.7 L 342.2,58.5 L 342.8,64.0 L 342.9,69.5 L 342.4,74.3 L 341.6,77.9 L 340.4,79.8 L 339.2,79.8 L 338.0,77.9 L 337.2,74.3 L 336.7,69.5 L 336.8,64.0 L 337.4,58.5 L 338.5,53.7 L 340.0,50.1 L 341.9,48.2 L 343.8,48.2 L 345.6,50.1 L 347.2,53.7 L 348.4,58.5 L 349.1,64.0 L 349.2,69.5 L 348.9,74.3 L 348.1,77.9 L 347.1,79.8 L 346.1,79.8 L 345.1,77.9 L 344.4,74.3 L 344.2,69.5 L 344.5,64.0 L 345.3,58.5 L 346.7,53.7 L 348.5,50.1 L 350.7,48.2 L 352.9,48.2 L 355.0,50.1 L 357.0,53.7 L 358.5,58.5 L 359.5,64.0 L 360.0,69.5 L 360.0,74.3 L 359.6,77.9 L 359.0,79.8 L 358.3,79.8 L 357.7,77.9 L 357.4,74.3 L 357.6,69.5 L 358.2,64.0 L 359.5,58.5 L 361.2,53.7 L 363.4,50.1 L 365.9,48.2 L 368.5,48.2 L 371.1,50.1 L 373.3,53.7 L 375.2,58.5 L 376.6,64.0 L 377.4,69.5 L 377.8,74.3 L 377.7,77.9 L 377.4,79.8 L 377.0,79.8 L 376.7,77.9 L 376.7,74.3 L 377.1,69.5 L 378.1,64.0 L 379.6,58.5 L 381.6,53.7 L 384.0,50.1 L 386.7,48.2 L 389.5,48.2 L 392.2,50.1 L 394.7,53.7 L 396.7,58.5 L 398.2,64.0 L 399.2,69.5 L 399.7,74.3 L 399.8,77.9 L 399.6,79.8 L 399.3,79.8 L 399.0,77.9 L 399.1,74.3 L 399.6,69.5 L 400.6,64.0 L 402.1,58.5 L 404.1,53.7 L 406.6,50.1 L 409.3,48.2 L 412.1,48.2 L 414.8,50.1 L 417.2,53.7 L 419.2,58.5 L 420.7,64.0 L 421.7,69.5 L 422.1,74.3 L 422.1,77.9 L 421.8,79.8 L 421.5,79.8 L 421.2,77.9 L 421.2,74.3 L 421.6,69.5 L 422.5,64.0 L 423.9,58.5 L 425.9,53.7 L 428.2,50.1 L 430.8,48.2 L 433.5,48.2 L 436.1,50.1 L 438.5,53.7 L 440.4,58.5 L 441.8,64.0 L 442.6,69.5 L 442.9,74.3 L 442.8,77.9 L 442.5,79.8 L 442.0,79.8 L 441.6,77.9 L 441.5,74.3 L 441.8,69.5 L 442.6,64.0 L 443.9,58.5 L 445.8,53.7 L 448.0,50.1 L 450.5,48.2 L 453.2,48.2 L 455.7,50.1 L 457.9,53.7 L 459.7,58.5 L 461.0,64.0 L 461.8,69.5 L 462.0,74.3 L 461.9,77.9 L 461.4,79.8 L 460.9,79.8 L 460.4,77.9 L 460.3,74.3 L 460.5,69.5 L 461.2,64.0 L 462.5,58.5 L 464.3,53.7 L 466.5,50.1 L 469.0,48.2 L 471.5,48.2 L 474.0,50.1 L 476.2,53.7 L 478.0,58.5 L 479.2,64.0 L 480.0,69.5 L 480.2,74.3 L 480.0,77.9 L 479.5,79.8 L 478.9,79.8 L 478.4,77.9 L 478.2,74.3 L 478.4,69.5 L 479.1,64.0 L 480.4,58.5 L 482.1,53.7 L 484.3,50.1 L 486.8,48.2 L 489.3,48.2 L 491.8,50.1 L 493.9,53.7 L 495.7,58.5 L 496.9,64.0 L 497.6,69.5 L 497.8,74.3 L 497.6,77.9 L 497.1,79.8 L 496.5,79.8 L 496.0,77.9 L 495.8,74.3 L 496.0,69.5 L 496.7,64.0 L 498.0,58.5 L 499.7,53.7 L 501.9,50.1 L 504.3,48.2 L 506.9,48.2 L 509.3,50.1 L 511.5,53.7 L 513.2,58.5 L 514.5,64.0 L 515.2,69.5 L 515.4,74.3 L 515.2,77.9 L 514.7,79.8 L 514.1,79.8 L 513.6,77.9 L 513.4,74.3 L 513.5,69.5 L 514.2,64.0 L 515.5,58.5 L 517.2,53.7 L 519.4,50.1 L 521.9,48.2 L 524.4,48.2 L 526.8,50.1 L 529.0,53.7 L 530.8,58.5 L 532.0,64.0 L 532.7,69.5 L 532.9,74.3 L 532.7,77.9 L 532.2,79.8 L 531.6,79.8 L 531.1,77.9 L 530.9,74.3 L 531.0,69.5 L 531.7,64.0 L 533.0,58.5 L 534.7,53.7 L 536.9,50.1 L 539.4,48.2 L 541.9,48.2 L 544.3,50.1 L 546.5,53.7 L 548.3,58.5 L 549.5,64.0 L 550.2,69.5 L 550.4,74.3 L 550.2,77.9 L 549.7,79.8 L 549.1,79.8 L 548.6,77.9 L 548.4,74.3 L 548.5,69.5 L 549.2,64.0 L 550.5,58.5 L 552.2,53.7 L 554.4,50.1 L 556.9,48.2 L 559.4,48.2 L 561.8,50.1 L 564.0,53.7 L 565.8,58.5 L 567.0,64.0 L 567.7,69.5 L 567.9,74.3 L 567.7,77.9 L 567.2,79.8 L 566.6,79.8 L 566.1,77.9 L 565.9,74.3 L 566.0,69.5 L 566.7,64.0 L 568.0,58.5 L 569.7,53.7 L 571.9,50.1 L 574.4,48.2 L 576.9,48.2 L 579.3,50.1 L 581.5,53.7 L 583.3,58.5 L 584.5,64.0 L 585.2,69.5 L 585.4,74.3 L 585.2,77.9 L 584.7,79.8 L 584.1,79.8 L 583.6,77.9 L 583.4,74.3 L 583.5,69.5 L 584.2,64.0 L 585.5,58.5 L 587.2,53.7 L 589.4,50.1 L 591.9,48.2 L 594.4,48.2 L 596.8,50.1 L 599.0,53.7 L 600.8,58.5 L 602.0,64.0 L 602.7,69.5 L 602.9,74.3 L 602.7,77.9 L 602.2,79.8 L 601.6,79.8 L 601.1,77.9 L 600.9,74.3 L 601.0,69.5 L 601.7,64.0 L 603.0,58.5 L 604.7,53.7 L 606.9,50.1 L 609.4,48.2 L 611.9,48.2 L 614.3,50.1 L 616.5,53.7 L 618.3,58.5 L 619.5,64.0" fill="none" stroke="#94a3b8" stroke-width="1.8"/>
            <circle cx="55" cy="64" r="4" fill="#fbbf24"/>
            <text x="37" y="68" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">S</text>

            <line x1="295" y1="28" x2="385" y2="28" stroke="#fbbf24" stroke-width="2" marker-start="url(#arrAmberStart2)" marker-end="url(#arrAmber2)"/>
            <text x="340" y="17" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">اتجاه التشويه (//)</text>

            <line x1="435" y1="28" x2="545" y2="28" stroke="#34d399" stroke-width="2.2" marker-end="url(#arrEmerald2)"/>
            <text x="490" y="17" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">اتجاه الانتشار</text>
          </svg>
        </div>
      </div>
    </div>

                  <div class="bg-slate-950 border border-amber-500/30 rounded-xl p-4 mt-4 text-xs text-slate-200 leading-relaxed">
                    <b class="text-amber-300 block mb-1">🔊 الحالة الخاصة الحاسمة في الامتحانات الوطنية — الموجة الصوتية والزلزالية:</b>
                    • <b>الموجة الصوتية (Onde sonore):</b> موجة <b>ميكانيكية متوالية طولية ثلاثية الأبعاد</b> (تحتاج لوسط مادي ولا تنتشر في الفراغ). عندما يهتز غشاء مكبر صوت، تُحدث اهتزازاته <b>انضغاطاً (Compression)</b> متبوعاً بـ <b>تمدد (Dilatation)</b> لطبقات الهواء المجاورة، وتهتز جزيئات المائع على نفس استقامة اتجاه الانتشار.<br/>
                    • <b>تطبيق فيزيائي دقيق:</b> في الموائع (الغازات والسوائل)، لا توجد قوى قص مرنة تحافظ على الشكل، ولذلك تقتصر الموجات فيها على النمط الطولي فقط (لهذا السبب لا تخترق الموجات الزلزالية المستعرضة $S$ النواة الخارجية السائلة للأرض، بخلاف الموجات الطولية $P$).
                  </div>

                  <!-- Comparison Table -->
                  <div class="overflow-x-auto mt-4">
                    <table class="w-full text-xs text-right border-collapse border border-slate-800 rounded-xl overflow-hidden">
                      <thead class="bg-slate-950 text-cyan-300">
                        <tr>
                          <th class="p-3 border border-slate-800">المعيار</th>
                          <th class="p-3 border border-slate-800">الموجة المستعرضة (Transversale)</th>
                          <th class="p-3 border border-slate-800">الموجة الطولية (Longitudinale)</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-slate-800 bg-slate-900/50 text-slate-200">
                        <tr>
                          <td class="p-3 font-bold text-slate-300 border border-slate-800">الزاوية بين التشويه والانتشار</td>
                          <td class="p-3 border border-slate-800">متعامدان ($90^\\circ$) — $\\perp$</td>
                          <td class="p-3 border border-slate-800">على نفس الاستقامة ($0^\\circ$) — $\\parallel$</td>
                        </tr>
                        <tr>
                          <td class="p-3 font-bold text-slate-300 border border-slate-800">أوساط الانتشار الممكنة</td>
                          <td class="p-3 border border-slate-800">الأجسام الصلبة وسطوح السوائل فقط</td>
                          <td class="p-3 border border-slate-800">الأجسام الصلبة، السوائل، والغازات (الموائع)</td>
                        </tr>
                        <tr>
                          <td class="p-3 font-bold text-slate-300 border border-slate-800">الأمثلة النموذجية</td>
                          <td class="p-3 border border-slate-800">حبل مشدود، سطح الماء، موجات زلزالية $S$</td>
                          <td class="p-3 border border-slate-800">نابض، الصوت وفوق الصوت، موجات زلزالية $P$</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- 3. General Properties of Wave Propagation -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-bold">3. الخواص العامة لانتشار موجة ميكانيكية (Propriétés générales)</span>
                    <span class="text-xs text-slate-400 font-mono">طاقة، أبعاد، وتراكب</span>
                  </div>
                  <div class="space-y-4 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-emerald-400 block mb-1">1) انتقال الطاقة دون انتقال المادة (Transport d’énergie sans transport de matière):</b>
                      عند مرور الموجة عبر نقطة $M$ من الوسط، تكتسب هذه النقطة طاقة (حركية وطاقة وضع مرنة) تُزحزحها مؤقتاً عن موضع توازنها، ثم تستعيد سكونها الأصلي فور مرور التشويه.
                      <br/>• <b>الدليل التجريبي الكلاسيكي:</b> عند وضع قطعة فلين (Bouchon de liège) فوق سطح ماء ساكن وإحداث موجة، تصعد قطعة الفلين وتنزل عمودياً في مكانها دون أن ترحل مع الموجة نحو الحافة.
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-cyan-400 block mb-1">2) أبعاد واتجاهات الانتشار (Dimensions de propagation):</b>
                      في وسط <b>متجانس وموحد الخواص (Homogène et isotrope)</b>، تنتشر الموجة انطلاقاً من المنبع في جميع الاتجاهات المتاحة لها بنفس السرعة، وتصنَّف حسب بُعد الوسط إلى ثلاثة أصناف:
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 mt-2">
                        <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                          <b class="text-cyan-300 block">أحادي البعد (1D):</b>
                          ينتشر وفق محور مستقيمي واحد (حبل، نابض).
                        </div>
                        <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                          <b class="text-amber-300 block">ثنائي البعد (2D):</b>
                          ينتشر في مستوى وفق دوائر متمركزة (سطح الماء).
                        </div>
                        <div class="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                          <b class="text-violet-300 block">ثلاثي البعد (3D):</b>
                          ينتشر في الفضاء وفق كرات متمركزة (الصوت، الزلازل).
                        </div>
                      </div>
                      <p class="text-[11px] text-slate-400 mt-2">💡 في الانتشار ثنائي وثلاثي البعد (2D و 3D)، تتوزع الطاقة على جبهات متسعة تدريجياً، مما يفسر <b>تخامد الوسع (Atténuation)</b> كلما ابتعدنا عن المنبع.</p>
                    </div>
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <b class="text-violet-400 block mb-1">3) خاصية تراكب موجتين (Superposition de deux ondes):</b>
                      عند التقاء موجتين ميكانيكيتين (بشرط ألا يكون الوسع كبيراً جداً) في نفس النقطة من الوسط:
                      <br/>• أثناء لحظة التقائهما، تكون الاستطالة الكلية مساوية للمجموع الجبري للاستطالتين: $y = y_1 + y_2$.
                      <br/>• <b>بعد الالتقاء مباشرة:</b> تواصل كل موجة انتشارها بشكل مستقل تماماً دون أن تتأثر بالأخرى (لا يتغير شكلها ولا وسعها ولا سرعتها ولا منحاها).
                    </div>
                  </div>
                </div>

                <!-- 4. Snapshot Graph Reading & Motion Direction -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 sm:p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">4. القراءة البيانية لمظهر الوسط وحركة نقطة منه (Aspect & Cinématique)</span>
                    <span class="text-xs text-slate-400 font-mono">تقنية الإزاحة الزمنية</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-3">
                    يمثل <b>مظهر الحبل عند لحظة ثابتة $t_1$</b> صورةً فوتوغرافية لمنحنى الاستطالة بدلالة الفاصلة المكانية $x$ (أي $y = f(x)$). يجب التمييز دوماً بين <b>جبهة/مقدمة الموجة ($F$)</b> التي يبدأ عندها وصول التشويه، و<b>مؤخرة الموجة ($Q$)</b> التي ينتهي عندها التشويه.
                  </p>

                  <div class="my-4 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 sm:p-4" id="svgCardWaveShift">
      <div class="text-xs font-bold text-slate-300 mb-2 flex flex-wrap items-center justify-between gap-2">
        <span>📈 تقنية الإزاحة الزمنية لتحديد منحى حركة النقط على مظهر الحبل</span>
        <span class="text-[11px] font-mono text-cyan-400">Méthode du décalage temporel</span>
      </div>
      <div class="bg-[#050811] rounded-xl border border-slate-800/80 p-2 sm:p-3">
        <div class="flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold mb-2 pb-2 border-b border-slate-800/60">
          <div class="flex flex-wrap items-center gap-4">
            <span class="flex items-center gap-1.5 text-cyan-300"><span class="inline-block w-5 h-0.5 bg-cyan-400"></span> مظهر الحبل في t₁</span>
            <span class="flex items-center gap-1.5 text-amber-300"><span class="inline-block w-5 border-t-2 border-dashed border-amber-400"></span> المظهر المزاح في t₁ + δt</span>
          </div>
          <span class="text-emerald-400">منحى الانتشار نحو اليمين →</span>
        </div>
        <svg direction="ltr" style="direction: ltr;" viewBox="0 0 680 198" class="w-full h-auto">
          <defs>
            <marker id="arrCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
            </marker>
            <marker id="arrUp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
            </marker>
            <marker id="arrDown" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#fb7185"/>
            </marker>
          </defs>

          <line x1="45" y1="142" x2="105" y2="142" stroke="#475569" stroke-width="2"/>
          <path d="M 105 142 L 112 136 L 118 148 L 125 142" fill="none" stroke="#64748b" stroke-width="1.8"/>
          <line x1="125" y1="142" x2="615" y2="142" stroke="#475569" stroke-width="2" marker-end="url(#arrCyan)"/>
          <text x="646" y="146" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">x (m)</text>

          <circle cx="52" cy="142" r="4" fill="#e2e8f0"/>
          <text x="52" y="162" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">S(0)</text>

          <path d="M 140,142.0 L 142,142.0 L 144,142.0 L 146,142.0 L 148,142.0 L 150,142.0 L 152,142.0 L 154,142.0 L 156,142.0 L 158,142.0 L 160,142.0 L 162,142.0 L 164,142.0 L 166,142.0 L 168,142.0 L 170,142.0 L 172,142.0 L 174,142.0 L 176,142.0 L 178,142.0 L 180,142.0 L 182,142.0 L 184,142.0 L 186,142.0 L 188,142.0 L 190,142.0 L 192,142.0 L 194,142.0 L 196,142.0 L 198,142.0 L 200,142.0 L 202,142.0 L 204,142.0 L 206,142.0 L 208,142.0 L 210,142.0 L 212,142.0 L 214,142.0 L 216,142.0 L 218,142.0 L 220,142.0 L 222,142.0 L 224,142.0 L 226,142.0 L 228,142.0 L 230,142.0 L 232,142.0 L 234,142.0 L 236,142.0 L 238,142.0 L 240,142.0 L 242,142.0 L 244,142.0 L 246,141.9 L 248,141.7 L 250,141.4 L 252,141.0 L 254,140.4 L 256,139.7 L 258,138.8 L 260,137.9 L 262,136.8 L 264,135.6 L 266,134.3 L 268,132.9 L 270,131.4 L 272,129.8 L 274,128.1 L 276,126.3 L 278,124.4 L 280,122.4 L 282,120.4 L 284,118.2 L 286,116.1 L 288,113.8 L 290,111.5 L 292,109.2 L 294,106.8 L 296,104.4 L 298,101.9 L 300,99.5 L 302,97.0 L 304,94.5 L 306,92.0 L 308,89.5 L 310,87.1 L 312,84.6 L 314,82.2 L 316,79.8 L 318,77.5 L 320,75.2 L 322,72.9 L 324,70.8 L 326,68.6 L 328,66.6 L 330,64.6 L 332,62.7 L 334,60.9 L 336,59.2 L 338,57.6 L 340,56.1 L 342,54.7 L 344,53.4 L 346,52.2 L 348,51.1 L 350,50.2 L 352,49.3 L 354,48.6 L 356,48.0 L 358,47.6 L 360,47.3 L 362,47.1 L 364,47.0 L 366,47.1 L 368,47.3 L 370,47.6 L 372,48.0 L 374,48.6 L 376,49.3 L 378,50.2 L 380,51.1 L 382,52.2 L 384,53.4 L 386,54.7 L 388,56.1 L 390,57.6 L 392,59.2 L 394,60.9 L 396,62.7 L 398,64.6 L 400,66.6 L 402,68.6 L 404,70.8 L 406,72.9 L 408,75.2 L 410,77.5 L 412,79.8 L 414,82.2 L 416,84.6 L 418,87.1 L 420,89.5 L 422,92.0 L 424,94.5 L 426,97.0 L 428,99.5 L 430,101.9 L 432,104.4 L 434,106.8 L 436,109.2 L 438,111.5 L 440,113.8 L 442,116.1 L 444,118.2 L 446,120.4 L 448,122.4 L 450,124.4 L 452,126.3 L 454,128.1 L 456,129.8 L 458,131.4 L 460,132.9 L 462,134.3 L 464,135.6 L 466,136.8 L 468,137.9 L 470,138.8 L 472,139.7 L 474,140.4 L 476,141.0 L 478,141.4 L 480,141.7 L 482,141.9 L 484,142.0 L 486,142.0 L 488,142.0 L 490,142.0 L 492,142.0 L 494,142.0 L 496,142.0 L 498,142.0 L 500,142.0 L 502,142.0 L 504,142.0 L 506,142.0 L 508,142.0 L 510,142.0 L 512,142.0 L 514,142.0 L 516,142.0 L 518,142.0 L 520,142.0 L 522,142.0 L 524,142.0 L 526,142.0 L 528,142.0 L 530,142.0 L 532,142.0 L 534,142.0 L 536,142.0 L 538,142.0 L 540,142.0 L 542,142.0 L 544,142.0 L 546,142.0 L 548,142.0 L 550,142.0 L 552,142.0 L 554,142.0 L 556,142.0 L 558,142.0 L 560,142.0" fill="none" stroke="#fbbf24" stroke-width="2.2" stroke-dasharray="6,4"/>
          <path d="M 140,142.0 L 142,142.0 L 144,142.0 L 146,142.0 L 148,142.0 L 150,142.0 L 152,142.0 L 154,142.0 L 156,142.0 L 158,142.0 L 160,142.0 L 162,142.0 L 164,142.0 L 166,142.0 L 168,142.0 L 170,142.0 L 172,142.0 L 174,142.0 L 176,142.0 L 178,142.0 L 180,142.0 L 182,142.0 L 184,142.0 L 186,142.0 L 188,142.0 L 190,142.0 L 192,142.0 L 194,142.0 L 196,142.0 L 198,142.0 L 200,142.0 L 202,142.0 L 204,142.0 L 206,142.0 L 208,142.0 L 210,142.0 L 212,142.0 L 214,142.0 L 216,142.0 L 218,142.0 L 220,142.0 L 222,141.9 L 224,141.7 L 226,141.4 L 228,141.0 L 230,140.4 L 232,139.7 L 234,138.8 L 236,137.9 L 238,136.8 L 240,135.6 L 242,134.3 L 244,132.9 L 246,131.4 L 248,129.8 L 250,128.1 L 252,126.3 L 254,124.4 L 256,122.4 L 258,120.4 L 260,118.2 L 262,116.1 L 264,113.8 L 266,111.5 L 268,109.2 L 270,106.8 L 272,104.4 L 274,101.9 L 276,99.5 L 278,97.0 L 280,94.5 L 282,92.0 L 284,89.5 L 286,87.1 L 288,84.6 L 290,82.2 L 292,79.8 L 294,77.5 L 296,75.2 L 298,72.9 L 300,70.8 L 302,68.6 L 304,66.6 L 306,64.6 L 308,62.7 L 310,60.9 L 312,59.2 L 314,57.6 L 316,56.1 L 318,54.7 L 320,53.4 L 322,52.2 L 324,51.1 L 326,50.2 L 328,49.3 L 330,48.6 L 332,48.0 L 334,47.6 L 336,47.3 L 338,47.1 L 340,47.0 L 342,47.1 L 344,47.3 L 346,47.6 L 348,48.0 L 350,48.6 L 352,49.3 L 354,50.2 L 356,51.1 L 358,52.2 L 360,53.4 L 362,54.7 L 364,56.1 L 366,57.6 L 368,59.2 L 370,60.9 L 372,62.7 L 374,64.6 L 376,66.6 L 378,68.6 L 380,70.8 L 382,72.9 L 384,75.2 L 386,77.5 L 388,79.8 L 390,82.2 L 392,84.6 L 394,87.1 L 396,89.5 L 398,92.0 L 400,94.5 L 402,97.0 L 404,99.5 L 406,101.9 L 408,104.4 L 410,106.8 L 412,109.2 L 414,111.5 L 416,113.8 L 418,116.1 L 420,118.2 L 422,120.4 L 424,122.4 L 426,124.4 L 428,126.3 L 430,128.1 L 432,129.8 L 434,131.4 L 436,132.9 L 438,134.3 L 440,135.6 L 442,136.8 L 444,137.9 L 446,138.8 L 448,139.7 L 450,140.4 L 452,141.0 L 454,141.4 L 456,141.7 L 458,141.9 L 460,142.0 L 462,142.0 L 464,142.0 L 466,142.0 L 468,142.0 L 470,142.0 L 472,142.0 L 474,142.0 L 476,142.0 L 478,142.0 L 480,142.0 L 482,142.0 L 484,142.0 L 486,142.0 L 488,142.0 L 490,142.0 L 492,142.0 L 494,142.0 L 496,142.0 L 498,142.0 L 500,142.0 L 502,142.0 L 504,142.0 L 506,142.0 L 508,142.0 L 510,142.0 L 512,142.0 L 514,142.0 L 516,142.0 L 518,142.0 L 520,142.0 L 522,142.0 L 524,142.0 L 526,142.0 L 528,142.0 L 530,142.0 L 532,142.0 L 534,142.0 L 536,142.0 L 538,142.0 L 540,142.0 L 542,142.0 L 544,142.0 L 546,142.0 L 548,142.0 L 550,142.0 L 552,142.0 L 554,142.0 L 556,142.0 L 558,142.0 L 560,142.0" fill="none" stroke="#22d3ee" stroke-width="3.2"/>

          <line x1="280" y1="142" x2="280" y2="94.5" stroke="#475569" stroke-width="1.2" stroke-dasharray="3,3"/>
          <line x1="400" y1="142" x2="400" y2="66.6" stroke="#475569" stroke-width="1.2" stroke-dasharray="3,3"/>

          <circle cx="280" cy="94.5" r="4.5" fill="#22d3ee" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="280" cy="122.4" r="3.8" fill="#fb7185"/>
          <line x1="280" y1="99.5" x2="280" y2="118.4" stroke="#fb7185" stroke-width="2.5" marker-end="url(#arrDown)"/>
          <text x="218" y="90.5" fill="#fb7185" font-size="11" font-weight="bold" text-anchor="middle">B (تنزل للأسفل ↓)</text>

          <circle cx="400" cy="94.5" r="4.5" fill="#22d3ee" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="400" cy="66.6" r="3.8" fill="#34d399"/>
          <line x1="400" y1="89.5" x2="400" y2="71.6" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrUp)"/>
          <text x="462" y="68.6" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">A (تصعد للأعلى ↑)</text>

          <circle cx="220" cy="142" r="3.5" fill="#fbbf24"/>
          <circle cx="460" cy="142" r="4" fill="#34d399"/>
          <circle cx="340" cy="47" r="4" fill="#22d3ee"/>
          <text x="340" y="37" fill="#22d3ee" font-size="11" font-weight="bold" text-anchor="middle">M (قمة)</text>

          <text x="220" y="162" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">1.20</text>
          <text x="220" y="182" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">Q (مؤخرة)</text>

          <text x="280" y="162" fill="#fb7185" font-size="11" font-family="monospace" text-anchor="middle">1.35 (B)</text>
          <text x="340" y="162" fill="#22d3ee" font-size="11" font-family="monospace" text-anchor="middle">1.50 (M)</text>
          <text x="400" y="162" fill="#34d399" font-size="11" font-family="monospace" text-anchor="middle">1.65 (A)</text>

          <text x="460" y="162" fill="#cbd5e1" font-size="11" font-family="monospace" text-anchor="middle">1.80</text>
          <text x="460" y="182" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">F (جبهة)</text>
        </svg>
      </div>
    </div>

                  <div class="bg-slate-950 border border-cyan-500/30 rounded-xl p-4 text-xs text-slate-200 leading-relaxed space-y-2">
                    <b class="text-cyan-300 block">🎯 الخوارزمية المنهجية لتحديد منحى حركة نقطة $M$ في لحظة $t_1$:</b>
                    <p>1. نرسم ذهنياً (أو بقلم خفيف) مظهر الحبل في لحظة موالية مباشرة $t_1 + \\delta t$ وذلك بـ<b>إزاحة منحنى الموجة قليلاً نحو منحى الانتشار</b>.</p>
                    <p>2. نقرأ تغير أرتوب النقطة ذات الأفصول الثابت $x_M$ من المنحنى الأول إلى المنحنى المزاح:</p>
                    <ul class="list-disc pr-5 space-y-1">
                      <li><b class="text-emerald-400">جبهة التشويه (الجانب الأمامي):</b> نلاحظ أن النقطة $A$ تصعد من المنحنى الأزرق إلى المنحنى الأصفر $\\implies$ <b>تتحرك نحو الأعلى</b> (وهذا يكشف أيضاً أن المنبع $S$ بدأ حركته عند $t=0$ نحو الأعلى!).</li>
                      <li><b class="text-rose-400">مؤخرة التشويه (الجانب الخلفي):</b> نلاحظ أن النقطة $B$ تنزل نحو موضع التوازن $\\implies$ <b>تتحرك نحو الأسفل</b>.</li>
                    </ul>
                    <p class="text-[11px] text-amber-300/90 pt-1">💡 <b>تعميم هام:</b> إذا كانت الموجة تنتشر <b>نحو اليسار</b>، نُزحف المنحنى قليلاً نحو اليسار (بدل اليمين) في اللحظة $t_1 + \\delta t$ وتنقلب الجبهة والمؤخرة تبعاً لمنحى الانتشار!</p>
                  </div>
                </div>

                <!-- 5. Classic National Exam Traps -->
                <div class="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">⚠️ ركن الفخاخ الكلاسيكية في الامتحان الوطني (Pièges Classiques)</span>
                    <span class="text-xs text-rose-400 font-mono">تجنب خسارة النقط المجانية</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-200 leading-relaxed">
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">1. فخ «الصوت موجة مستعرضة أو ينتشر في الفراغ»:</b>
                      يقع الكثيرون في خطأ وصف الصوت كموجة مستعرضة أو قبول انتشاره في الفضاء الخارجي.
                      <br/>✓ <b>الصواب المرجعي:</b> الصوت موجة <b>ميكانيكية طولية</b> (في الموائع) و<b>ثلاثية الأبعاد</b>، ويستحيل انتشاره في الفراغ.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">2. فخ «منحى حركة نقطة من المظهر البياني»:</b>
                      القراءة من اليسار إلى اليمين توحي بأن المنحنى الصاعد على اليسار يصعد، والحقيقة عند الانتشار يميناً هي العكس تماماً!
                      <br/>✓ <b>الضمان التام:</b> طبّق دائماً قاعدة إزاحة المنحنى بمقدار $\\delta x$ في منحى الانتشار.
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">3. فخ «نسيان عبارة دون انتقال للمادة»:</b>
                      في سؤال تعريف الموجة الميكانيكية ($0.50\\text{ pt}$)، مجرد القول «هي انتشار تشويه في وسط» يفقدك نصف النقطة إذا لم تضف «<b>مادي مرن، دون انتقال للمادة</b>».
                    </div>
                    <div class="bg-slate-950/80 p-3.5 rounded-xl border border-rose-500/20">
                      <b class="text-rose-400 block mb-1">4. فخ «تراكب موجتين متقابلتين»:</b>
                      بعد تقاطع موجتين على حبل (حتى لو ألغت إحداهما الأخرى لحظة التلاقي لأن $y_1 = -y_2$)، يظن البعض أن الموجة اختفت!
                      <br/>✓ <b>الصواب:</b> التلاقي مؤقت، ثم تعود كل موجة للمرور بشكلها وسرعتها الأصليين دون تغيير.
                    </div>
                  </div>
                </div>

                <!-- 6. Worked Exam Applications -->
                <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 text-xs font-bold">📝 تطبيقات نموذجية محررة بصياغة الامتحان الوطني وسلالم التنقيط</span>
                    <span class="text-xs text-slate-400 font-mono">معيار الوطني 2BAC PC</span>
                  </div>

                  <!-- Application 1 -->
                  <div class="bg-slate-950 p-5 rounded-2xl border border-slate-800 mb-5">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 1: قراءة وتحليل مظهر حبل متحرك (انظر الرسم التوضيحي أعلاه)</h6>
                      <span class="text-[11px] text-slate-400 font-mono">2.00 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نحدث عند اللحظة $t_0 = 0$ تشويهاً ميكانيكياً عند الطرف $S$ لحبل طويل أفقي ومشدود، فينتشر التشويه على طول الحبل نحو اليمين. يمثل الرسم البياني السابق مظهر الحبل في لحظة $t_1$ حيث تمتد منطقة التشويه من الأفصول $x_Q = 1.20\\text{ m}$ إلى جبهة الموجة عند $x_F = 1.80\\text{ m}$ (بمقدمة $F$ ومؤخرة $Q$ وقمة $M$ عند $x_M = 1.50\\text{ m}$). نعتبر النقطتين $A(1.65\\text{ m})$ و $B(1.35\\text{ m})$.
                      <br/><b>1.</b> عرّف الموجة الميكانيكية المتوالية. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>2.</b> هل هذه الموجة مستعرضة أم طولية؟ وما هو بُعد انتشارها؟ علّل جوابك. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>3.</b> حدّد عند اللحظة $t_1$ منحى حركة كل من النقطة $A$ والنقطة $B$. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>4.</b> استنتج في أي منحى تم تحريك الطرف $S$ في البداية (نحو الأعلى أم نحو الأسفل)؟ وهل تنتقل مادة الحبل من $S$ إلى $F$؟ <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1. التعريف:</b> الموجة الميكانيكية المتوالية هي تتابع مستمر لإشارات ميكانيكية ناتجة عن اضطراب مستمر ومصان لمنبع، وتنتشر تدريجياً في وسط مادي مرن <b>دون انتقال للمادة</b> بل مع انتقال للطاقة فقط. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2. التصنيف والبُعد:</b><br/>
                      • الموجة <b>مستعرضة</b> لأن اتجاه تشويه نقط الحبل (عمودي) متعامد مع اتجاه انتشار الموجة على طول الحبل (أفقي). <span class="text-emerald-400 font-mono">(0.25 ن)</span><br/>
                      • انتشارها <b>أحادي البعد (1D)</b> لأن التشويه ينتشر وفق مستقيم واحد (طول الحبل). <span class="text-emerald-400 font-mono">(0.25 ن)</span></p>
                      <p><b>3. منحى حركة $A$ و $B$ عند $t_1$:</b><br/>
                      بإزاحة منحنى التشويه قليلاً نحو اليمين (مظهر الحبل عند $t_1 + \\delta t$):<br/>
                      • بالنسبة للنقطة $A$ (في مقدمة التشويه): أرتوبها يزداد $\\implies$ <b>تتحرك النقطة $A$ نحو الأعلى</b>. <span class="text-emerald-400 font-mono">(0.25 ن)</span><br/>
                      • بالنسبة للنقطة $B$ (في مؤخرة التشويه): أرتوبها يتناقص $\\implies$ <b>تتحرك النقطة $B$ نحو الأسفل</b> (عائدةً إلى موضع التوازن). <span class="text-emerald-400 font-mono">(0.25 ن)</span></p>
                      <p><b>4. حركة المنبع $S$ ومصير المادة:</b><br/>
                      • بما أن جبهة الموجة تبدأ بالانزياح نحو الأعلى (مثل $A$)، فإن المنبع $S$ <b>حُرّك في البداية نحو الأعلى</b> (ثم أُعيد إلى موضع توازنه). <span class="text-emerald-400 font-mono">(0.25 ن)</span><br/>
                      • <b>لا تنتقل مادة الحبل</b>؛ كل نقطة تهتز في مكانها عمودياً وتنتقل <b>الطاقة فقط</b> من $S$ إلى $F$. <span class="text-emerald-400 font-mono">(0.25 ن)</span></p>
                    </div>
                  </div>

                  <!-- Application 2 -->
                  <div class="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                    <div class="flex items-center justify-between mb-2">
                      <h6 class="text-xs font-bold text-amber-400">تطبيق 2: الصوت في الموائع وتجربة الناقوس المفرغ</h6>
                      <span class="text-[11px] text-slate-400 font-mono">1.50 نقطة</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3 leading-relaxed">
                      نضع جرساً كهربائياً مشتغلاً ومكشوفاً داخل ناقوس زجاجي شفاف موصول بمضخة تفريغ الهواء، ثم نشغل المضخة تدريجياً.
                      <br/><b>1.</b> ماذا نلاحظ بخصوص الصوت المسموع مع استمرار تفريغ الهواء؟ وماذا نستنتج حول طبيعة الموجة الصوتية؟ <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>2.</b> هل الصوت المنتشر في الهواء موجة مستعرضة أم طولية؟ علّل جوابك بدقة. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                      <br/><b>3.</b> قارن من حيث بُعد الانتشار بين: موجة الصوت في الهواء، وموجة سطح الماء، وموجة نابض. <span class="text-emerald-400 font-mono">(0.50 ن)</span>
                    </p>
                    <div class="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs text-slate-200 space-y-2.5 leading-relaxed">
                      <p class="font-bold text-cyan-300">💡 عناصر الإجابة النموذجية وسلم التنقيط:</p>
                      <p><b>1.</b> تتناقص شدة الصوت تدريجياً ثم <b>تنعدم تماماً</b> عند تحقق الفراغ التام رغم استمرار رؤية مطرقة الجرس تهتز؛ نستنتج أن الموجة الصوتية <b>موجة ميكانيكية تحتاج حتماً إلى وسط مادي مرن</b> ولا تنتشر في الفراغ. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>2.</b> الصوت في الهواء <b>موجة طولية</b> لأن انتشارها يتم عبر تتابع انضغاطات وتمددات لطبقات الهواء، بحيث يكون اتجاه اهتزاز جزيئات الهواء <b>موازياً (على نفس استقامة)</b> لاتجاه انتشار الموجة. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                      <p><b>3. تصنيف الأبعاد:</b><br/>
                      • موجة النابض: <b>أحادية البعد (1D)</b>.<br/>
                      • موجة سطح الماء: <b>ثنائية البعد (2D)</b>.<br/>
                      • الموجة الصوتية في الهواء: <b>ثلاثية الأبعاد (3D)</b>. <span class="text-emerald-400 font-mono">(0.50 ن)</span></p>
                    </div>
                  </div>
                </div>

                <!-- 7. Interactive Auto-Test -->
                <div class="bg-amber-950/20 border border-amber-500/30 rounded-2xl p-6">
                  <div class="flex items-center justify-between mb-3">
                    <span class="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold">🎯 التحدي الذاتي السريع (Auto-Évaluation — معيار د. الرياح)</span>
                    <span class="text-xs text-slate-400">اختبر دقة استيعابك المفاهيمي</span>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed mb-4">
                    نرسل من طرفي حبل مشدود في الآن نفسه تشويهين متطابقين في الشكل والسرعة: الأول استطالته موجبة نحو الأعلى ($y_1 = +2\\text{ cm}$) يتحرك يميناً، والثاني استطالته سالبة نحو الأسفل ($y_2 = -2\\text{ cm}$) يتحرك يساراً.
                    <br/>1) في اللحظة $t_c$ التي يتطابق فيها مركز التشويهين تماماً في منتصف الحبل، يبدو الحبل أفقياً تماماً ($y_{\\text{tot}} = 0$). هل يعني هذا أن الطاقة قد ضاعت وأن الموجتين أُخمدتا للأبد؟
                    <br/>2) علّل بدقة كيف تتحقق من بقاء المادة في موضعها لو وضعت علامة حبر ملون عند منتصف النابض أو الحبل.
                  </p>
                  <details class="group bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <summary class="cursor-pointer px-4 py-3 text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center justify-between select-none">
                      <span>👁️ إظهار / إخفاء الحل النموذجي المفصل</span>
                      <span class="transform transition group-open:rotate-180">▼</span>
                    </summary>
                    <div class="p-4 border-t border-slate-800 text-xs text-slate-300 space-y-2 leading-relaxed">
                      <p><b>1) تحليل لحظة التلاقي $t_c$:</b><br/>
                      • أثناء التراكب تكون الاستطالة المحصلة منعدمة مؤقتاً ($y = y_1 + y_2 = (+2) + (-2) = 0\\text{ cm}$) فيبدو الحبل وكأنه مسطح لحظياً، لكن نقط الحبل في ذلك الموضع تمتلك في تلك اللحظة <b>طاقة حركية غير منعدمة</b> (بسبب تقابل السرعتين وتراكبهما).<br/>
                      • <b>الاستنتاج وفق خاصية التراكب:</b> لا تضيع الطاقة ولا تتلف الموجتان؛ فبعد لحظة $t_c$ مباشرة، تعبر كل موجة الأخرى وتواصل انتشارها بنفس شكلها الأصلي ($+2\\text{ cm}$ يميناً و $-2\\text{ cm}$ يساراً) دون أي تشويه.</p>
                      <p><b>2) مصير علامة الحبر على الحبل أو النابض:</b><br/>
                      • على <b>الحبل (مستعرضة)</b>: تتحرك نقطة الحبر عمودياً صعوداً ثم نزولاً عند مرور الموجة، ثم تعود لتستقر في أفصولها الأصلي $x_0$ دون أن تنزاح أفقياً.<br/>
                      • على <b>النابض (طولية)</b>: تنضغط اللفة الحاملة للعلامة باتجاه الانتشار وتعود فوراً بمجرد مرور منطقة الانضغاط لتستقر في موضعها الأصلي نفسه، مما يبرهن على أن <b>الطاقة هي التي تنتقل وليس المادة</b>.</p>
                    </div>
                  </details>
                </div>
              </div>
`);
