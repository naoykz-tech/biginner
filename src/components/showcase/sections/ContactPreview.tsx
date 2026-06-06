/**
 * 完成見本ホームページのお問い合わせフォーム領域です。
 *
 * @remarks
 * 送信処理は持たず、フォーム課題で作るUIの完成イメージとして読み取り専用で表示します。
 */
export function ContactPreview() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
        <div>
          <p className="text-sm font-black tracking-wider text-emerald-700">お問い合わせ</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">お問い合わせ</h2>
          <p className="mt-4 leading-8 text-slate-600">フォームの入力、state管理、バリデーションを学んだ成果として、問い合わせ欄を用意します。</p>
        </div>
        <form className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <label className="block text-sm font-black text-slate-700" htmlFor="showcase-name">
            お名前
          </label>
          <input id="showcase-name" className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3" placeholder="山田 花子" readOnly />
          <label className="mt-4 block text-sm font-black text-slate-700" htmlFor="showcase-email">
            メール
          </label>
          <input id="showcase-email" className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3" placeholder="hanako@example.com" readOnly />
          <label className="mt-4 block text-sm font-black text-slate-700" htmlFor="showcase-message">
            メッセージ
          </label>
          <textarea
            id="showcase-message"
            className="mt-2 min-h-32 w-full rounded-md border border-slate-300 bg-white px-4 py-3"
            placeholder="制作の相談をしたいです。"
            readOnly
          />
          <button className="mt-5 w-full rounded-md bg-slate-950 px-4 py-3 text-sm font-bold text-white" type="button">
            送信する
          </button>
        </form>
      </div>
    </section>
  );
}
