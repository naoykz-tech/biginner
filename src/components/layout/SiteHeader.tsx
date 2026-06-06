import Link from 'next/link';

type NavItem = Readonly<{
  href: string;
  label: string;
}>;

const navItems: ReadonlyArray<NavItem> = [
  { href: '/roadmap', label: 'ロードマップ' },
  { href: '/tutorials', label: 'チュートリアル' },
  { href: '/portfolio', label: '公開準備' },
];

/**
 * サイト全体で使う共通ヘッダーです。
 *
 * @remarks
 * 主要ページへの固定ナビゲーションを提供します。
 * ナビゲーション項目は静的に管理し、ページ固有の状態やデータ取得は持ちません。
 */
export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-slate-950">
          Biginner
        </Link>
        <nav className="flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
          {navItems.map((item) => (
            <Link key={item.href} className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-950" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
