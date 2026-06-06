type PageShellProps = Readonly<{
  children: React.ReactNode;
}>;

/**
 * ページ全体の基礎となるメイン領域です。
 *
 * @remarks
 * 背景色と文字色をページ間で揃えるための薄いラッパーです。
 * レイアウト構造やデータ取得は持たせず、各ページの本体を `children` として受け取ります。
 */
export function PageShell({ children }: PageShellProps) {
  return <main className="min-h-screen bg-slate-50 text-slate-950">{children}</main>;
}
