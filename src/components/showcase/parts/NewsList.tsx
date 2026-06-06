import type { ShowcaseNewsItem } from '@/types/showcase';

type NewsListProps = Readonly<{
  newsItems: ReadonlyArray<ShowcaseNewsItem>;
}>;

/**
 * 架空工務店サイトのお知らせ一覧です。
 *
 * @remarks
 * 企業サイトの更新感を出すため、日付・分類・タイトルを揃えて表示します。
 */
export function NewsList({ newsItems }: NewsListProps) {
  return (
    <div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white shadow-sm">
      {newsItems.map((newsItem) => (
        <article key={`${newsItem.date}-${newsItem.title}`} className="grid gap-3 p-5 md:grid-cols-[8rem_7rem_1fr] md:items-center">
          <time className="text-sm font-bold text-slate-500">{newsItem.date}</time>
          <p className="w-fit rounded-full bg-amber-50 px-3 py-1 text-sm font-black text-amber-700">{newsItem.category}</p>
          <h3 className="font-black text-slate-950">{newsItem.title}</h3>
        </article>
      ))}
    </div>
  );
}
