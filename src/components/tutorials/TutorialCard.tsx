import { Badge, CategoryBadge } from '@/components/ui/Badge';
import { LinkButton } from '@/components/ui/LinkButton';
import type { BeginnerTutorial, LearningIssue } from '@/types/learning';

type TutorialCardProps = Readonly<{
  issue: LearningIssue;
  tutorial: BeginnerTutorial;
}>;

export function TutorialCard({ issue, tutorial }: TutorialCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-md bg-slate-950 px-3 py-2 text-sm font-black text-white">#{issue.number}</span>
        <CategoryBadge category={issue.category} />
      </div>
      <h2 className="mt-5 text-2xl font-black tracking-tight">{issue.title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{issue.purpose}</p>

      <div className="mt-6 rounded-md bg-slate-50 p-4">
        <h3 className="text-sm font-black uppercase tracking-wider text-slate-500">まず開くファイル</h3>
        <ul className="mt-3 space-y-2">
          {tutorial.files.map((file) => (
            <li key={file} className="font-mono text-sm leading-6 text-slate-800">
              {file}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {issue.learningPoints.map((point) => (
          <Badge key={point}>{point}</Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <LinkButton href={`/tutorials/issue-${issue.number}`} className="mt-6">
          詳細手順を見る
        </LinkButton>
        {issue.number === 10 || issue.number === 11 ? (
          <LinkButton href="/tutorials/contact-form" variant="secondary">
            統合フォーム練習へ
          </LinkButton>
        ) : null}
      </div>
    </article>
  );
}
