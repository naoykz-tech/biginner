import Link from 'next/link';

import { NumberBadge } from '@/components/ui/NumberBadge';
import type { LearningIssue } from '@/types/learning';

type LearningPathCardProps = Readonly<{
  issues: ReadonlyArray<LearningIssue>;
  totalIssueCount: number;
}>;

export function LearningPathCard({ issues, totalIssueCount }: LearningPathCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <p className="text-sm font-bold text-slate-500">Learning Path</p>
          <h2 className="text-xl font-black text-slate-950">今日の進め方</h2>
        </div>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">{totalIssueCount} issues</span>
      </div>
      <ol className="mt-5 space-y-4">
        {issues.map((issue) => (
          <li key={issue.number} className="flex gap-4">
            <NumberBadge>{issue.number}</NumberBadge>
            <div>
              <Link href={`/tutorials/issue-${issue.number}`} className="font-bold text-slate-950 hover:text-emerald-700">
                {issue.title}
              </Link>
              <p className="mt-1 text-sm leading-6 text-slate-600">{issue.purpose}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
