import Link from 'next/link';
import { featuredIssues, learningIssues } from '@/data/learningIssues';

const phases = [
  { label: 'GitHub', text: 'PRとレビューの基本を知る', count: 2 },
  { label: 'UI', text: 'JSXとTailwindで画面を作る', count: 3 },
  { label: 'React', text: 'コンポーネントと入力を扱う', count: 4 },
  { label: 'Quality', text: '型とlintで品質を上げる', count: 2 },
  { label: 'Portfolio', text: '成果物として公開する', count: 2 },
];

export default function Home() {
  const nextIssues = learningIssues.slice(2, 7);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-slate-950">
            Biginner
          </Link>
          <nav className="flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
            <Link className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-950" href="/roadmap">
              ロードマップ
            </Link>
            <Link className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-950" href="/tutorials">
              チュートリアル
            </Link>
            <Link className="rounded-full px-3 py-2 hover:bg-slate-100 hover:text-slate-950" href="/portfolio">
              公開準備
            </Link>
          </nav>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-16">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">
              GitHub issueで進める初心者チュートリアル
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Next.js、React、TypeScriptを小さな課題で学ぶ。
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Biginnerは、どのファイルを開き、どこに何を書き、どのURLで確認するかまで案内する学習サイトです。
              トップページの編集からフォーム、バリデーション、型定義までをissue単位で進めます。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tutorials/issue-5"
                className="inline-flex items-center justify-center rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-slate-800"
              >
                最初の課題を始める
              </Link>
              <Link
                href="/tutorials"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-slate-100"
              >
                課題一覧を見る
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-bold text-slate-500">Learning Path</p>
                <h2 className="text-xl font-black text-slate-950">今日の進め方</h2>
              </div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">
                {learningIssues.length} issues
              </span>
            </div>
            <ol className="mt-5 space-y-4">
              {nextIssues.map((issue) => (
                <li key={issue.number} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-sm font-black text-slate-950 ring-1 ring-slate-200">
                    {issue.number}
                  </span>
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">Roadmap</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">迷わず進める5つの学習フェーズ</h2>
          </div>
          <Link href="/roadmap" className="text-sm font-bold text-emerald-700 hover:text-emerald-900">
            全体を見る
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {phases.map((phase) => (
            <article key={phase.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-black text-emerald-700">{phase.label}</p>
              <h3 className="mt-3 min-h-12 text-lg font-black leading-6 text-slate-950">{phase.text}</h3>
              <p className="mt-4 text-sm font-semibold text-slate-500">{phase.count} tasks</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">Tutorials</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">ファイルを開くところから始める課題</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featuredIssues.map((issue) => (
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

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold text-emerald-300">Practice</p>
            <h2 className="mt-3 text-2xl font-black">フォームとバリデーションを重点練習</h2>
            <p className="mt-4 leading-7 text-slate-300">
              useState、イベント処理、未入力チェック、メール形式チェックをまとめて確認できます。
            </p>
            <Link
              href="/tutorials/contact-form"
              className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-slate-100"
            >
              フォーム課題へ
            </Link>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-7">
            <p className="text-sm font-bold text-emerald-700">Portfolio</p>
            <h2 className="mt-3 text-2xl font-black">提出できる成果物に仕上げる</h2>
            <p className="mt-4 leading-7 text-slate-600">
              README、スクリーンショット、学習内容の言語化まで、転職活動で説明しやすい状態を目指します。
            </p>
            <Link
              href="/portfolio"
              className="mt-6 inline-flex rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-slate-100"
            >
              公開準備を見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
