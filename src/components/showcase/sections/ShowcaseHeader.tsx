/**
 * 架空工務店サイト専用のページ内ナビゲーションです。
 *
 * @remarks
 * Biginner共通ヘッダーではなく、完成した企業サイトらしさを見せるための見本ヘッダーです。
 */
export function ShowcaseHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
        <a href="#top" className="text-2xl font-black tracking-tight text-slate-950">
          森町ホームズ
        </a>
        <nav className="flex flex-wrap gap-2 text-sm font-bold text-slate-600">
          <a href="#services" className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-950">
            事業内容
          </a>
          <a href="#reasons" className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-950">
            選ばれる理由
          </a>
          <a href="#projects" className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-950">
            施工事例
          </a>
          <a href="#contact" className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-950">
            相談する
          </a>
        </nav>
      </div>
    </header>
  );
}
