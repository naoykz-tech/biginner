import { NumberBadge } from '@/components/ui/NumberBadge';
import type { ShowcaseSection } from '@/types/showcase';

type SiteSectionListProps = Readonly<{
  sections: ReadonlyArray<ShowcaseSection>;
}>;

/**
 * 完成ホームページを構成するセクションを対応issueつきで表示します。
 *
 * @remarks
 * セクション名、説明、対応issueをセットで見せることで、完成形と学習ステップを結びつけます。
 */
export function SiteSectionList({ sections }: SiteSectionListProps) {
  return (
    <ol className="mt-6 grid gap-4 md:grid-cols-2">
      {sections.map((section) => (
        <li key={section.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <NumberBadge>{section.issueNumber}</NumberBadge>
            <h3 className="text-xl font-black text-slate-950">{section.title}</h3>
          </div>
          <p className="mt-4 leading-7 text-slate-600">{section.description}</p>
        </li>
      ))}
    </ol>
  );
}
