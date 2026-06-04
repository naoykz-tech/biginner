import Link from 'next/link';
import { beginnerTutorials, learningIssues, tutorialIssueNumbers } from '@/data/learningIssues';

export default function TutorialsPage() {
  const tutorialIssues = learningIssues.filter((issue) => tutorialIssueNumbers.includes(issue.number));

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <Link href="/" className="text-sm font-bold text-emerald-700 hover:text-emerald-900">
            Biginner
          </Link>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">チュートリアル課題</h1>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                何も触ったことがない人でも進められるように、各課題で「開くファイル」「作るファイル」「確認するURL」まで案内します。
              </p>
            </div>
            <Link href="/roadmap" className="rounded-md border border-slate-300 px-4 py-3 text-sm font-bold hover:bg-slate-100">
              全ロードマップを見る
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <article className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
          <p className="text-sm font-black uppercase tracking-wider text-emerald-700">Start Here</p>
          <h2 className="mt-2 text-2xl font-black text-emerald-950">最初は issue #5 から始める</h2>
          <p className="mt-3 leading-7 text-emerald-900">
            まず `src/app/page.tsx` を開いて、トップページの文章を1つ変えます。コードと画面がつながっている感覚を掴んでから次へ進みます。
          </p>
          <Link
            href="/tutorials/issue-5"
            className="mt-5 inline-flex rounded-md bg-emerald-800 px-4 py-3 text-sm font-bold text-white hover:bg-emerald-900"
          >
            issue #5 の手順を見る
          </Link>
        </article>

        <div className="grid gap-5 md:grid-cols-2">
          {tutorialIssues.map((issue) => (
            <article key={issue.number} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-slate-950 px-3 py-2 text-sm font-black text-white">#{issue.number}</span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">
                  {issue.category}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-black tracking-tight">{issue.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{issue.purpose}</p>

              <div className="mt-6 rounded-md bg-slate-50 p-4">
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-500">まず開くファイル</h3>
                <ul className="mt-3 space-y-2">
                  {beginnerTutorials[issue.number].files.map((file) => (
                    <li key={file} className="font-mono text-sm leading-6 text-slate-800">
                      {file}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {issue.learningPoints.map((point) => (
                  <span key={point} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                    {point}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/tutorials/issue-${issue.number}`}
                  className="mt-6 inline-flex rounded-md bg-slate-950 px-4 py-3 text-sm font-bold text-white hover:bg-slate-800"
                >
                  詳細手順を見る
                </Link>
                {issue.number === 10 || issue.number === 11 ? (
                  <Link
                    href="/tutorials/contact-form"
                    className="inline-flex rounded-md border border-slate-300 px-4 py-3 text-sm font-bold text-slate-950 hover:bg-slate-100"
                  >
                    統合フォーム練習へ
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
