import { LearningLinkList } from '@/components/showcase/parts/LearningLinkList';
import { LinkButton } from '@/components/ui/LinkButton';
import type { ShowcaseLearningLink } from '@/types/showcase';

type LearningStepsSectionProps = Readonly<{
  learningLinks: ReadonlyArray<ShowcaseLearningLink>;
}>;

/**
 * 企業サイト完成見本から学習ステップへ戻る下部セクションです。
 *
 * @remarks
 * 完成した企業サイトの体験を壊さないよう、ページ下部だけでチュートリアル導線をまとめます。
 */
export function LearningStepsSection({ learningLinks }: LearningStepsSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6">
        <p className="text-sm font-black tracking-wider text-emerald-700">学習ステップ</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-emerald-950">この企業サイトを作るステップ</h2>
        <p className="mt-3 leading-7 text-emerald-900">完成見本を確認したあと、事業紹介、カード表示、問い合わせフォームなどの作り方へ戻れます。</p>
        <LearningLinkList learningLinks={learningLinks} />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/tutorials">チュートリアル一覧へ</LinkButton>
          <LinkButton href="/portfolio" variant="secondary">
            公開準備へ
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
