import Link from 'next/link';
import { notFound } from 'next/navigation';
import { beginnerTutorials, learningIssues, tutorialIssueNumbers } from '@/data/learningIssues';

interface TutorialDetailPageProps {
  params: Promise<{
    issueSlug: string;
  }>;
}

function getIssueNumber(issueSlug: string) {
  const match = /^issue-(\d+)$/.exec(issueSlug);
  return match ? Number(match[1]) : null;
}

export function generateStaticParams() {
  return tutorialIssueNumbers.map((number) => ({
    issueSlug: `issue-${number}`,
  }));
}

export default async function TutorialDetailPage({ params }: TutorialDetailPageProps) {
  const { issueSlug } = await params;
  const issueNumber = getIssueNumber(issueSlug);

  if (issueNumber === null) {
    notFound();
  }

  const issue = learningIssues.find((item) => item.number === issueNumber);
  const tutorial = beginnerTutorials[issueNumber];

  if (!issue || !tutorial) {
    notFound();
  }

  const currentIndex = tutorialIssueNumbers.indexOf(issueNumber);
  const previousIssue = currentIndex > 0 ? tutorialIssueNumbers[currentIndex - 1] : null;
  const nextIssue = currentIndex < tutorialIssueNumbers.length - 1 ? tutorialIssueNumbers[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <Link href="/tutorials" className="text-sm font-bold text-emerald-700 hover:text-emerald-900">
            チュートリアル一覧へ戻る
          </Link>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-wider text-slate-500">Issue #{issue.number}</p>
              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{issue.title}</h1>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">{tutorial.goal}</p>
            </div>
            <span className="w-fit rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">
              {issue.category}
            </span>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-10 lg:grid-cols-[0.72fr_0.28fr]">
        <div className="space-y-6">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-wider text-emerald-700">今回作るもの</p>
            <h2 className="mt-2 text-2xl font-black">{issue.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{issue.purpose}</p>
            <div className="mt-5 rounded-md bg-emerald-50 px-4 py-3 text-sm font-bold leading-6 text-emerald-800 ring-1 ring-emerald-200">
              完了条件: {issue.done}
            </div>
          </article>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black">触るファイル</h2>
              <ul className="mt-4 space-y-3">
                {tutorial.files.map((file) => (
                  <li key={file} className="rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800">
                    {file}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black">作るファイル</h2>
              {tutorial.createFiles.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {tutorial.createFiles.map((file) => (
                    <li key={file} className="rounded-md bg-amber-50 px-3 py-2 font-mono text-sm font-bold text-amber-900 ring-1 ring-amber-200">
                      {file}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                  新しく作るファイルはありません。既存ファイルを編集します。
                </p>
              )}
            </article>
          </div>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">作業前に確認すること</h2>
            <ul className="mt-4 space-y-3">
              {tutorial.beforeStart.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-slate-700">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">手順</h2>
            <ol className="mt-5 space-y-4">
              {tutorial.steps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-md bg-slate-50 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-950 text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-lg bg-slate-950 p-6 text-white shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-black">コードのヒント</h2>
              <span className="text-sm font-bold text-emerald-300">丸写しより、場所と形を確認する</span>
            </div>
            <pre className="mt-5 overflow-x-auto rounded-md bg-slate-900 p-4 text-sm leading-6 text-slate-100 ring-1 ring-slate-700">
              <code>{tutorial.hintCode}</code>
            </pre>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">ブラウザでの確認方法</h2>
            <ul className="mt-4 space-y-3">
              {tutorial.checkInBrowser.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-slate-700">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-black text-emerald-800">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">よくあるつまずき</h2>
            <ul className="mt-4 space-y-3">
              {tutorial.commonMistakes.map((mistake) => (
                <li key={mistake} className="rounded-md bg-rose-50 px-3 py-3 text-sm font-semibold leading-6 text-rose-800 ring-1 ring-rose-100">
                  {mistake}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">完了チェック</h2>
            <ul className="mt-4 space-y-3">
              {tutorial.completionChecklist.map((item) => (
                <li key={item} className="rounded-md bg-slate-100 px-3 py-3 text-sm font-bold leading-6 text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-3">
            {previousIssue ? (
              <Link
                href={`/tutorials/issue-${previousIssue}`}
                className="rounded-md border border-slate-300 bg-white px-4 py-3 text-center text-sm font-bold hover:bg-slate-100"
              >
                前の課題へ
              </Link>
            ) : null}
            {nextIssue ? (
              <Link href={`/tutorials/issue-${nextIssue}`} className="rounded-md bg-slate-950 px-4 py-3 text-center text-sm font-bold text-white hover:bg-slate-800">
                次の課題へ
              </Link>
            ) : null}
          </div>
        </aside>
      </section>
    </main>
  );
}
