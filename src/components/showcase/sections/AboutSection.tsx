/**
 * 完成見本ホームページの自己紹介補足セクションです。
 *
 * @remarks
 * 学習者が成果物で伝えるべき「目的」と「見せられる状態」を短く提示します。
 */
export function AboutSection() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-6 px-5 py-12 lg:grid-cols-[0.7fr_0.3fr]">
      <div>
        <p className="text-sm font-black tracking-wider text-emerald-700">自己紹介</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">学習の目的</h2>
        <p className="mt-4 leading-8 text-slate-600">
          コードを書くだけではなく、なぜそのレイアウトにしたのか、どんな技術を使ったのか、次に何を改善したいのかを自分の言葉で説明できる状態を目指しています。
        </p>
      </div>
      <aside className="rounded-lg bg-slate-950 p-6 text-white shadow-sm">
        <p className="text-sm font-bold text-emerald-300">目標</p>
        <p className="mt-3 text-2xl font-black">採用担当者やメンターに見せられる1ページ</p>
      </aside>
    </section>
  );
}
