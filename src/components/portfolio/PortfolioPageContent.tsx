import { SimplePageHeader } from '@/components/layout/SimplePageHeader';
import { NumberBadge } from '@/components/ui/NumberBadge';

const readmeItems: ReadonlyArray<string> = [
  'このサイトで何を学ぶために作ったか',
  'Next.js、React、TypeScript、Tailwind CSSを使ったこと',
  '実装したページと機能',
  '学んだこと、詰まったこと、解決したこと',
  '今後追加したい機能',
];

const releaseItems: ReadonlyArray<string> = [
  '不要なサンプルコードを削除する',
  'トップページと主要ページのスクリーンショットを撮る',
  'READMEにスクリーンショットを追加する',
  'npm run build が通ることを確認する',
  'GitHubで公開し、PRやissueの流れを説明できるようにする',
];

function ReadmeCard() {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
      <p className="text-sm font-black uppercase tracking-wider text-emerald-700">README</p>
      <h2 className="mt-2 text-2xl font-black">読んだ人が学習内容を理解できる状態にする</h2>
      <p className="mt-3 leading-7 text-slate-600">READMEはただの説明書ではなく、どんな目的で作り、何を学び、どこまで実装したかを伝える資料です。</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {readmeItems.map((item) => (
          <li key={item} className="rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-700">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function GoalAside() {
  return (
    <aside className="rounded-lg bg-slate-950 p-6 text-white shadow-sm">
      <p className="text-sm font-black uppercase tracking-wider text-emerald-300">Goal</p>
      <h2 className="mt-2 text-2xl font-black">提出できる状態</h2>
      <p className="mt-4 leading-7 text-slate-300">
        採用担当者やメンターが見たときに、何を考えて作ったか、どの技術を使ったか、次に何を改善するかが分かる状態を目指します。
      </p>
    </aside>
  );
}

function ReleaseChecklist() {
  return (
    <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-black uppercase tracking-wider text-emerald-700">Release Checklist</p>
      <h2 className="mt-2 text-2xl font-black">公開前チェックリスト</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-5">
        {releaseItems.map((item, index) => (
          <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <NumberBadge>{index + 1}</NumberBadge>
            <p className="mt-4 text-sm font-bold leading-6 text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PortfolioPageContent() {
  return (
    <>
      <SimplePageHeader
        eyebrowLabel="Biginner"
        title="ポートフォリオ公開準備"
        description="issue #15、#16、#20 を参考に、学習用プロジェクトを第三者へ説明できる成果物へ整えます。"
      />
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <ReadmeCard />
          <GoalAside />
        </div>
        <ReleaseChecklist />
        <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-black text-emerald-950">説明できるようにしておくこと</h2>
          <p className="mt-3 leading-7 text-emerald-900">
            「なぜこのページ構成にしたか」「Tailwindで何を改善したか」「Reactのpropsやstateをどこで使ったか」を
            自分の言葉で話せるようにすると、学習成果が伝わりやすくなります。
          </p>
        </div>
      </section>
    </>
  );
}
