const heroStats: ReadonlyArray<Readonly<{ label: string; value: string }>> = [
  { label: '地域での家づくり', value: '18年' },
  { label: '施工・相談実績', value: '120件' },
  { label: '無料相談', value: '受付中' },
];

/**
 * 架空工務店サイトのファーストビューです。
 *
 * @remarks
 * 地域工務店らしい信頼感と、施工事例へ進む導線を最初に伝えます。
 */
export function ShowcaseHero() {
  return (
    <section id="top" className="overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
        <div>
          <p className="text-sm font-black tracking-wider text-emerald-700">森町の注文住宅・リノベーション</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
            暮らしの景色まで設計する、地域密着の家づくり。
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            森町ホームズは、土地の風、家族の時間、将来の変化まで見据えて住まいを提案する小さな工務店です。相談から施工後の点検まで、顔の見える距離で伴走します。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">
              施工事例を見る
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-slate-100"
            >
              無料相談を予約
            </a>
          </div>
          <dl className="mt-10 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-emerald-500 pl-4">
                <dt className="text-xs font-bold text-slate-500">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-black text-slate-950">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[420px] rounded-lg bg-slate-950 p-4 shadow-xl">
          <div className="absolute inset-4 rounded-lg bg-[linear-gradient(135deg,#134e4a_0%,#0f172a_48%,#f59e0b_100%)] opacity-90" />
          <div className="absolute left-8 top-8 h-40 w-52 rounded-md bg-white/20 shadow-2xl ring-1 ring-white/30" />
          <div className="absolute bottom-8 right-8 h-56 w-72 rounded-md bg-white/90 p-5 shadow-2xl">
            <p className="text-sm font-black text-emerald-700">施工事例</p>
            <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950">緑を取り込む平屋の住まい</h2>
            <p className="mt-4 leading-7 text-slate-600">庭とリビングをつなげ、家族が自然に集まる明るい住まいへ。</p>
          </div>
          <div className="absolute right-12 top-12 h-24 w-24 rounded-full bg-amber-300/90 blur-sm" />
        </div>
      </div>
    </section>
  );
}
