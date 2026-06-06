import { NewsList } from '@/components/showcase/parts/NewsList';
import type { ShowcaseNewsItem } from '@/types/showcase';

type NewsSectionProps = Readonly<{
  newsItems: ReadonlyArray<ShowcaseNewsItem>;
}>;

/**
 * 架空工務店サイトのお知らせセクションです。
 *
 * @remarks
 * 企業サイトらしい更新感を出し、見学会や相談受付への導線を補います。
 */
export function NewsSection({ newsItems }: NewsSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-sm font-black tracking-wider text-emerald-700">お知らせ</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">見学会と住まいの相談</h2>
        <NewsList newsItems={newsItems} />
      </div>
    </section>
  );
}
