/**
 * 架空工務店サイトの無料相談フォーム領域です。
 *
 * @remarks
 * 送信処理は持たず、企業サイトの問い合わせUIの完成イメージとして読み取り専用で表示します。
 */
export function ContactPreview() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
        <div>
          <p className="text-sm font-black tracking-wider text-emerald-300">無料相談</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">住まいのこと、まずは気軽に話しませんか。</h2>
          <p className="mt-4 leading-8 text-slate-300">
            新築、リノベーション、小さな修繕まで。まだ具体的に決まっていない段階でも、暮らしの希望や不安を整理するところからお手伝いします。
          </p>
          <div className="mt-8 rounded-lg border border-white/10 bg-white/10 p-5">
            <p className="text-sm font-bold text-emerald-200">電話での相談</p>
            <p className="mt-2 text-3xl font-black">0120-000-318</p>
            <p className="mt-2 text-sm text-slate-300">受付時間 9:00-18:00 / 水曜定休</p>
          </div>
        </div>
        <form className="rounded-lg bg-white p-6 text-slate-950 shadow-xl">
          <label className="block text-sm font-black text-slate-700" htmlFor="showcase-name">
            お名前
          </label>
          <input id="showcase-name" className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3" placeholder="山田 花子" readOnly />
          <label className="mt-4 block text-sm font-black text-slate-700" htmlFor="showcase-email">
            メール
          </label>
          <input id="showcase-email" className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3" placeholder="hanako@example.com" readOnly />
          <label className="mt-4 block text-sm font-black text-slate-700" htmlFor="showcase-plan">
            相談したい内容
          </label>
          <input id="showcase-plan" className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3" placeholder="リノベーションの相談" readOnly />
          <label className="mt-4 block text-sm font-black text-slate-700" htmlFor="showcase-message">
            メッセージ
          </label>
          <textarea
            id="showcase-message"
            className="mt-2 min-h-32 w-full rounded-md border border-slate-300 bg-white px-4 py-3"
            placeholder="築年数や家族構成、困っていることを教えてください。"
            readOnly
          />
          <button className="mt-5 w-full rounded-md bg-slate-950 px-4 py-3 text-sm font-bold text-white" type="button">
            相談内容を送信する
          </button>
        </form>
      </div>
    </section>
  );
}
