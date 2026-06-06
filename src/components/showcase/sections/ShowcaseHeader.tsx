/**
 * 完成見本ホームページ専用のページ内ナビゲーションです。
 *
 * @remarks
 * Biginner共通ヘッダーではなく、成果物としてのホームページらしさを見せるための見本ヘッダーです。
 */
export function ShowcaseHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="text-2xl font-black tracking-tight text-slate-950">
          花子のWebサイト
        </a>
        <nav className="flex flex-wrap gap-3 text-sm font-bold text-slate-600">
          <a href="#about" className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-950">
            自己紹介
          </a>
          <a href="#skills" className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-950">
            できること
          </a>
          <a href="#works" className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-950">
            作ったもの
          </a>
          <a href="#contact" className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-950">
            お問い合わせ
          </a>
        </nav>
      </div>
    </header>
  );
}
