import { SimplePageHeader } from '@/components/layout/SimplePageHeader';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { LinkButton } from '@/components/ui/LinkButton';
import { NumberBadge } from '@/components/ui/NumberBadge';

const buildSteps: ReadonlyArray<string> = [
  "ファイルの1行目に 'use client'; を書く",
  "その下で import { useState } from 'react'; を書く",
  'name、email、message の3つのstateを作る',
  'input と textarea に value をつなぐ',
  'onChange で setName、setEmail、setMessage を呼ぶ',
];

const validationSteps: ReadonlyArray<string> = [
  'error というstateを追加する',
  '送信ボタン用に handleSubmit 関数を作る',
  '最初に未入力チェックを書く',
  "次に email.includes('@') でメール形式を確認する",
  'error があるときだけ画面に表示する',
];

const fileChecks: ReadonlyArray<string> = [
  '編集する候補: src/app/tutorials/contact-form/page.tsx',
  'トップページに作る場合: src/app/page.tsx',
  '別部品にする場合: src/components/ContactForm.tsx を作成する',
];

const confirmationItems: ReadonlyArray<string> = [
  '空欄で送信したら未入力エラーが出る。',
  '@ がないメールなら形式エラーが出る。',
  '正しい入力にしたらエラーが消える。',
  '入力欄に文字を打っても消えない。',
];

const stateHintCode = `'use client';

import { useState } from 'react';

const [name, setName] = useState('');

<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>`;

const validationHintCode = `const [error, setError] = useState('');

function handleSubmit() {
  if (!name || !email || !message) {
    setError('すべて入力してください');
    return;
  }

  if (!email.includes('@')) {
    setError('メールアドレスの形式を確認してください');
    return;
  }

  setError('');
}`;

type StepSectionProps = Readonly<{
  eyebrow: string;
  title: string;
  steps: ReadonlyArray<string>;
}>;

function StepSection({ eyebrow, title, steps }: StepSectionProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-black uppercase tracking-wider text-emerald-700">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-black">{title}</h2>
      <ol className="mt-5 space-y-3">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3 rounded-md bg-slate-50 p-4 leading-7 text-slate-700">
            <NumberBadge size="sm" tone="dark">
              {index + 1}
            </NumberBadge>
            {step}
          </li>
        ))}
      </ol>
    </article>
  );
}

function FileDecisionCard() {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-black uppercase tracking-wider text-emerald-700">Step 0</p>
      <h2 className="mt-2 text-2xl font-black">まず触るファイルを決める</h2>
      <p className="mt-3 leading-7 text-slate-600">
        練習だけならこのページを編集してもよいです。トップページに表示したい場合は `src/app/page.tsx`、
        部品として分けたい場合は `src/components/ContactForm.tsx` を作ります。
      </p>
      <ul className="mt-5 space-y-3">
        {fileChecks.map((item) => (
          <li key={item} className="rounded-md bg-slate-100 px-4 py-3 font-mono text-sm text-slate-800">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function HintCard({ title, description, code }: Readonly<{ title: string; description: string; code: string }>) {
  return (
    <article className="rounded-lg bg-slate-950 p-6 text-white shadow-sm">
      <h2 className="text-xl font-black">{title}</h2>
      <p className="mt-2 text-sm font-semibold text-emerald-300">{description}</p>
      <CodeBlock code={code} />
    </article>
  );
}

function PreviewForm() {
  return (
    <form className="mt-6 space-y-4">
      <label className="block">
        <span className="text-sm font-bold text-slate-700">名前</span>
        <input className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none ring-emerald-500 focus:ring-2" placeholder="山田 太郎" type="text" />
      </label>
      <label className="block">
        <span className="text-sm font-bold text-slate-700">メールアドレス</span>
        <input className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none ring-emerald-500 focus:ring-2" placeholder="sample@example.com" type="email" />
      </label>
      <label className="block">
        <span className="text-sm font-bold text-slate-700">メッセージ</span>
        <textarea className="mt-2 min-h-32 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none ring-emerald-500 focus:ring-2" placeholder="学習で試したいことを書く" />
      </label>
      <p className="rounded-md bg-rose-50 px-4 py-3 text-sm font-bold text-rose-700 ring-1 ring-rose-200">例: メールアドレスの形式を確認してください</p>
      <button className="w-full rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800" type="button">
        送信する
      </button>
    </form>
  );
}

function PreviewCard() {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-wider text-slate-500">Preview</p>
          <h2 className="mt-2 text-2xl font-black">完成イメージ</h2>
        </div>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">demo</span>
      </div>
      <PreviewForm />
    </article>
  );
}

function ConfirmationCard() {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-black">確認すること</h2>
      <ul className="mt-4 space-y-3 text-sm font-semibold leading-6 text-slate-700">
        {confirmationItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

/**
 * フォーム作成とバリデーション練習をまとめたチュートリアルページ本体です。
 *
 * @remarks
 * issue #10 と #11 を横断する固定教材として、作業手順、ヒントコード、確認用プレビューを同じページにまとめます。
 * 個別issueの詳細ページとは異なり、本文データを外から受け取らない自己完結型の教材です。
 */
export function ContactFormTutorialContent() {
  return (
    <>
      <SimplePageHeader
        eyebrowHref="/tutorials"
        eyebrowLabel="チュートリアル一覧へ戻る"
        title="フォーム作成とバリデーション"
        description="issue #10 と #11 をまとめて練習します。ここでは完成品を見るだけでなく、どのファイルの何行目付近に何を書くかを順番に確認します。"
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-10 lg:grid-cols-[0.62fr_0.38fr]">
        <div className="space-y-6">
          <FileDecisionCard />
          <StepSection eyebrow="Issue #10" title="入力できるフォームを作る" steps={buildSteps} />
          <HintCard title="useState と onChange のヒント" description="1行目、import、state、inputのつながりを見る" code={stateHintCode} />
          <StepSection eyebrow="Issue #11" title="入力チェックを追加する" steps={validationSteps} />
          <HintCard title="バリデーションのヒント" description="未入力を先に確認し、その後メール形式を見る" code={validationHintCode} />
        </div>

        <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
          <PreviewCard />
          <ConfirmationCard />
          <div className="grid gap-3">
            <LinkButton href="/tutorials/issue-10" variant="secondary">
              issue #10 の詳細へ
            </LinkButton>
            <LinkButton href="/tutorials/issue-11">issue #11 の詳細へ</LinkButton>
          </div>
        </aside>
      </section>
    </>
  );
}
