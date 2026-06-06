import { SiteSectionList } from '@/components/showcase/parts/SiteSectionList';
import type { ShowcaseSection } from '@/types/showcase';

type WorksSectionProps = Readonly<{
  sections: ReadonlyArray<ShowcaseSection>;
}>;

/**
 * 完成ホームページを構成する要素を見せる「作ったもの」セクションです。
 *
 * @remarks
 * 作ったものの内訳と対応issueを並べ、成果物が学習ステップの積み上げだと分かるようにします。
 */
export function WorksSection({ sections }: WorksSectionProps) {
  return (
    <section id="works" className="mx-auto max-w-6xl px-5 py-12">
      <p className="text-sm font-black tracking-wider text-emerald-700">作ったもの</p>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">このホームページを構成する要素</h2>
      <SiteSectionList sections={sections} />
    </section>
  );
}
