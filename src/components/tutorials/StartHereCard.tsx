import { LinkButton } from '@/components/ui/LinkButton';

/**
 * 初めて訪れた学習者に最初の課題を案内するカードです。
 *
 * @remarks
 * チュートリアル一覧の冒頭で使う固定導線です。
 * 開始課題を変える場合は、リンク先と本文の両方を同時に更新してください。
 */
export function StartHereCard() {
  return (
    <article className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
      <p className="text-sm font-black uppercase tracking-wider text-emerald-700">Start Here</p>
      <h2 className="mt-2 text-2xl font-black text-emerald-950">最初は issue #5 から始める</h2>
      <p className="mt-3 leading-7 text-emerald-900">
        まず `src/app/page.tsx` を開いて、トップページの文章を1つ変えます。コードと画面がつながっている感覚を掴んでから次へ進みます。
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <LinkButton href="/tutorials/issue-5" variant="emerald">
          issue #5 の手順を見る
        </LinkButton>
        <LinkButton href="/showcase" variant="secondary">
          完成見本を見る
        </LinkButton>
      </div>
    </article>
  );
}
