import Link from 'next/link';

import { CategoryBadge } from '@/components/ui/Badge';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { LinkButton } from '@/components/ui/LinkButton';
import { NumberBadge } from '@/components/ui/NumberBadge';
import type { BeginnerTutorial, LearningIssue, TutorialNavigation } from '@/types/learning';

type TutorialDetailPageContentProps = Readonly<{
  issue: LearningIssue;
  navigation: TutorialNavigation;
  tutorial: BeginnerTutorial;
}>;

type TextListProps = Readonly<{
  items: ReadonlyArray<string>;
  marker: 'dot' | 'check';
}>;

type FileListProps = Readonly<{
  files: ReadonlyArray<string>;
  emptyText: string;
  tone: 'default' | 'new';
}>;

type StepListProps = Readonly<{
  steps: ReadonlyArray<string>;
}>;

function TextList({ items, marker }: TextListProps) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7 text-slate-700">
          {marker === 'dot' ? (
            <span className="mt-3 size-2 shrink-0 rounded-full bg-emerald-500" />
          ) : (
            <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-black text-emerald-800">✓</span>
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}

function FileList({ files, emptyText, tone }: FileListProps) {
  if (files.length === 0) {
    return <p className="mt-4 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">{emptyText}</p>;
  }

  const itemClassName =
    tone === 'new'
      ? 'rounded-md bg-amber-50 px-3 py-2 font-mono text-sm font-bold text-amber-900 ring-1 ring-amber-200'
      : 'rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800';

  return (
    <ul className="mt-4 space-y-3">
      {files.map((file) => (
        <li key={file} className={itemClassName}>
          {file}
        </li>
      ))}
    </ul>
  );
}

function StepList({ steps }: StepListProps) {
  return (
    <ol className="mt-5 space-y-4">
      {steps.map((step, index) => (
        <li key={step} className="flex gap-4 rounded-md bg-slate-50 p-4">
          <NumberBadge size="sm" tone="dark">
            {index + 1}
          </NumberBadge>
          <p className="leading-7 text-slate-700">{step}</p>
        </li>
      ))}
    </ol>
  );
}

export function TutorialDetailPageContent({ issue, navigation, tutorial }: TutorialDetailPageContentProps) {
  return (
    <>
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
            <CategoryBadge category={issue.category} />
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-10 lg:grid-cols-[0.72fr_0.28fr]">
        <div className="space-y-6">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-wider text-emerald-700">今回作るもの</p>
            <h2 className="mt-2 text-2xl font-black">{issue.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{issue.purpose}</p>
            <div className="mt-5 rounded-md bg-emerald-50 px-4 py-3 text-sm font-bold leading-6 text-emerald-800 ring-1 ring-emerald-200">完了条件: {issue.done}</div>
          </article>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black">触るファイル</h2>
              <FileList files={tutorial.files} emptyText="編集するファイルはありません。" tone="default" />
            </article>
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black">作るファイル</h2>
              <FileList files={tutorial.createFiles} emptyText="新しく作るファイルはありません。既存ファイルを編集します。" tone="new" />
            </article>
          </div>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">作業前に確認すること</h2>
            <TextList items={tutorial.beforeStart} marker="dot" />
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">手順</h2>
            <StepList steps={tutorial.steps} />
          </article>

          <article className="rounded-lg bg-slate-950 p-6 text-white shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-black">コードのヒント</h2>
              <span className="text-sm font-bold text-emerald-300">丸写しより、場所と形を確認する</span>
            </div>
            <CodeBlock code={tutorial.hintCode} />
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">ブラウザでの確認方法</h2>
            <TextList items={tutorial.checkInBrowser} marker="check" />
          </article>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">よくあるつまずき</h2>
            <ul className="mt-4 space-y-3">
              {tutorial.commonMistakes.map((mistake) => (
                <li key={mistake} className="rounded-md bg-rose-50 p-3 text-sm font-semibold leading-6 text-rose-800 ring-1 ring-rose-100">
                  {mistake}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">完了チェック</h2>
            <ul className="mt-4 space-y-3">
              {tutorial.completionChecklist.map((item) => (
                <li key={item} className="rounded-md bg-slate-100 p-3 text-sm font-bold leading-6 text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-3">
            {navigation.previousIssue ? (
              <LinkButton href={`/tutorials/issue-${navigation.previousIssue}`} variant="secondary">
                前の課題へ
              </LinkButton>
            ) : null}
            {navigation.nextIssue ? <LinkButton href={`/tutorials/issue-${navigation.nextIssue}`}>次の課題へ</LinkButton> : null}
          </div>
        </aside>
      </section>
    </>
  );
}
