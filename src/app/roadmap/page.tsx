import Link from 'next/link';
import { learningIssues } from '@/data/learningIssues';

const categoryStyles = {
  GitHub: 'bg-slate-100 text-slate-700 ring-slate-200',
  'Next.js': 'bg-sky-100 text-sky-700 ring-sky-200',
  UI: 'bg-emerald-100 text-emerald-700 ring-emerald-200',
  React: 'bg-indigo-100 text-indigo-700 ring-indigo-200',
  Quality: 'bg-amber-100 text-amber-800 ring-amber-200',
  Portfolio: 'bg-rose-100 text-rose-700 ring-rose-200',
} as const;

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="text-sm font-bold text-emerald-700 hover:text-emerald-900">
              Biginner
            </Link>
            <h1 className="mt-2 text-3xl font-black tracking-tight">学習ロードマップ</h1>
          </div>
          <Link href="/tutorials" className="rounded-md bg-slate-950 px-4 py-3 text-sm font-bold text-white hover:bg-slate-800">
            課題一覧へ
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-lg leading-8 text-slate-600">
            issueを上から順番に進めると、GitHubの基本、Next.jsの画面編集、Reactの状態管理、品質チェック、
            ポートフォリオ公開までを一通り体験できます。
          </p>
        </div>

        <ol className="space-y-5">
          {learningIssues.map((issue) => (
            <li key={issue.number} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 text-sm font-black text-white">
                      {issue.number}
                    </span>
                    <span className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${categoryStyles[issue.category]}`}>
                      {issue.category}
                    </span>
                    <span className="text-sm font-bold text-slate-500">{issue.originalIssue}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">{issue.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{issue.purpose}</p>
                </div>
                <div className="rounded-md bg-emerald-50 px-4 py-3 text-sm font-bold leading-6 text-emerald-800 ring-1 ring-emerald-200 lg:w-72">
                  完了条件: {issue.done}
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-slate-500">やること</h3>
                  <ul className="mt-3 space-y-2">
                    {issue.tasks.map((task) => (
                      <li key={task} className="flex gap-2 text-sm leading-6 text-slate-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
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
          ))}
        </ol>
      </section>
    </main>
  );
}
