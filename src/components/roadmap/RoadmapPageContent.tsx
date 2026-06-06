import { SimplePageHeader } from '@/components/layout/SimplePageHeader';
import { CategoryBadge } from '@/components/ui/Badge';
import { LinkButton } from '@/components/ui/LinkButton';
import { NumberBadge } from '@/components/ui/NumberBadge';
import type { LearningIssue } from '@/types/learning';

type RoadmapPageContentProps = Readonly<{
  issues: ReadonlyArray<LearningIssue>;
}>;

type RoadmapItemProps = Readonly<{
  issue: LearningIssue;
}>;

function RoadmapItem({ issue }: RoadmapItemProps) {
  return (
    <li className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <NumberBadge size="lg" tone="dark">
              {issue.number}
            </NumberBadge>
            <CategoryBadge category={issue.category} />
            <span className="text-sm font-bold text-slate-500">{issue.originalIssue}</span>
          </div>
          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">{issue.title}</h2>
          <p className="mt-3 leading-7 text-slate-600">{issue.purpose}</p>
        </div>
        <div className="rounded-md bg-emerald-50 px-4 py-3 text-sm font-bold leading-6 text-emerald-800 ring-1 ring-emerald-200 lg:w-72">完了条件: {issue.done}</div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-500">やること</h3>
          <ul className="mt-3 space-y-2">
            {issue.tasks.map((task) => (
              <li key={task} className="flex gap-2 text-sm leading-6 text-slate-700">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                {task}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-500">学習ポイント</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {issue.learningPoints.map((point) => (
              <span key={point} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

/**
 * 全課題をロードマップとして表示するページ本体です。
 *
 * @remarks
 * 親から渡された課題一覧を表示順のまま展開し、目的、作業項目、完了条件、学習ポイントを確認できる形にします。
 * 課題の取得や並び替えはデータ層に任せます。
 */
export function RoadmapPageContent({ issues }: RoadmapPageContentProps) {
  return (
    <>
      <SimplePageHeader
        eyebrowLabel="Biginner"
        title="学習ロードマップ"
        action={<LinkButton href="/tutorials">課題一覧へ</LinkButton>}
      />
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-lg leading-8 text-slate-600">
            issueを上から順番に進めると、GitHubの基本、Next.jsの画面編集、Reactの状態管理、品質チェック、
            ポートフォリオ公開までを一通り体験できます。
          </p>
        </div>

        <ol className="space-y-5">
          {issues.map((issue) => (
            <RoadmapItem key={issue.number} issue={issue} />
          ))}
        </ol>
      </section>
    </>
  );
}
