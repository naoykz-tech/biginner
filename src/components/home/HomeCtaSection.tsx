import { LinkButton } from '@/components/ui/LinkButton';

/**
 * 学習者に次の実践課題を提示するCTAセクションです。
 *
 * @remarks
 * フォーム練習とポートフォリオ準備という、ロードマップ後半の行き先を固定で案内します。
 */
export function HomeCtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-lg bg-slate-950 p-7 text-white">
          <p className="text-sm font-bold text-emerald-300">Showcase</p>
          <h2 className="mt-3 text-2xl font-black">最終的に作るサイトを見る</h2>
          <p className="mt-4 leading-7 text-slate-300">自己紹介、学習した技術、フォームまでを1つにまとめた完成見本から、各課題の意味を確認できます。</p>
          <LinkButton href="/showcase" variant="secondary" className="mt-6 px-5">
            完成見本へ
          </LinkButton>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-7">
          <p className="text-sm font-bold text-emerald-700">Portfolio</p>
          <h2 className="mt-3 text-2xl font-black">提出できる成果物に仕上げる</h2>
          <p className="mt-4 leading-7 text-slate-600">README、スクリーンショット、学習内容の言語化まで、転職活動で説明しやすい状態を目指します。</p>
          <LinkButton href="/portfolio" variant="secondary" className="mt-6 px-5">
            公開準備を見る
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
