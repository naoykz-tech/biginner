import Link from 'next/link';

import type { LearningIssue } from '@/types/learning';

type FeaturedTutorialsProps = Readonly<{
  issues: ReadonlyArray<LearningIssue>;
}>;

/**
 * トップページで強調するチュートリアル課題の一覧です。
 *
 * @remarks
 * 親から渡された課題だけを表示し、どの課題を注目扱いにするかの選定はデータ層に委ねます。
 */
export function FeaturedTutorials({ issues }: FeaturedTutorialsProps) {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">Tutorials</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">ファイルを開くところから始める課題</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {issues.map((issue) => (
            <article key={issue.number} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <span className="text-sm font-black text-slate-500">Issue #{issue.number}</span>
              <h3 className="mt-2 text-lg font-black leading-6 text-slate-950">{issue.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{issue.learningPoints.join(' / ')}</p>
              <Link href={`/tutorials/issue-${issue.number}`} className="mt-4 inline-flex text-sm font-bold text-emerald-700 hover:text-emerald-900">
                手順を見る
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
