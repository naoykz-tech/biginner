import { LinkButton } from '@/components/ui/LinkButton';
import type { ShowcaseLearningLink } from '@/types/showcase';

type LearningLinkListProps = Readonly<{
  learningLinks: ReadonlyArray<ShowcaseLearningLink>;
}>;

/**
 * 完成見本から対応するチュートリアル課題へ戻るリンク一覧です。
 *
 * @remarks
 * 完成サイトの下部で、学習者が「この部分をどう作るか」へ戻れる導線として使います。
 */
export function LearningLinkList({ learningLinks }: LearningLinkListProps) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {learningLinks.map((link) => (
        <article key={link.issueNumber} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-black tracking-wider text-slate-500">課題 #{link.issueNumber}</p>
          <h3 className="mt-2 text-xl font-black text-slate-950">{link.title}</h3>
          <p className="mt-3 leading-7 text-slate-600">{link.summary}</p>
          <LinkButton href={link.href} variant="ghost" className="mt-4 justify-start p-0">
            手順を見る
          </LinkButton>
        </article>
      ))}
    </div>
  );
}
