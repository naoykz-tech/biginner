const heroSkills: ReadonlyArray<string> = ['Next.js', 'React', 'TypeScript'];

/**
 * 完成見本ホームページのファーストビューです。
 *
 * @remarks
 * 学習者が最終的に作る「個人ホームページ」の印象を最初に伝える役割を持ちます。
 */
export function ShowcaseHero() {
  return (
    <section id="top" className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
        <div>
          <p className="text-sm font-black tracking-wider text-emerald-700">初心者ポートフォリオ</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Webサイト制作を学ぶ山田花子のホームページ
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Next.jsとReactを学びながら、見やすい自己紹介、学習した技術、作ったもの、問い合わせフォームを1つのホームページにまとめました。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#works" className="inline-flex items-center justify-center rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">
              作ったものを見る
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-slate-100"
            >
              相談してみる
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <p className="text-sm font-black text-emerald-700">プロフィール</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">山田 花子</h2>
            <p className="mt-4 leading-7 text-slate-600">
              未経験からWeb制作を学習中。小さな課題を積み重ねて、説明できる成果物を作ることを目標にしています。
            </p>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {heroSkills.map((skill) => (
              <div key={skill} className="rounded-md bg-white px-4 py-3 text-center text-sm font-black text-slate-700 shadow-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
