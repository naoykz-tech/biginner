import { FeaturedTutorials } from '@/components/home/FeaturedTutorials';
import { HomeCtaSection } from '@/components/home/HomeCtaSection';
import { HomeHero } from '@/components/home/HomeHero';
import { LearningPathCard } from '@/components/home/LearningPathCard';
import { PhaseGrid } from '@/components/home/PhaseGrid';
import { SiteHeader } from '@/components/layout/SiteHeader';
import type { LearningIssue } from '@/types/learning';

type HomePageContentProps = Readonly<{
  featuredIssues: ReadonlyArray<LearningIssue>;
  nextIssues: ReadonlyArray<LearningIssue>;
  totalIssueCount: number;
}>;

/**
 * トップページの主要セクションを組み立てるページ本体です。
 *
 * @remarks
 * ルートページから取得済みの課題データだけを受け取り、ヒーロー、学習導線、注目チュートリアル、CTAの順に合成します。
 * データ取得をここへ持ち込まず、表示構成だけを担当します。
 */
export function HomePageContent({ featuredIssues, nextIssues, totalIssueCount }: HomePageContentProps) {
  return (
    <>
      <SiteHeader />
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-16">
          <HomeHero />
          <section className="mx-auto max-w-3xl px-5 py-10">
  <h2 className="text-2xl font-bold text-slate-900">自己紹介</h2>

  <p className="mt-4 text-slate-700">
    <strong>名前：</strong> 修
  </p>

  <p className="mt-2 text-slate-700">
    <strong>学習中の技術：</strong> Next.js、React、TypeScript、Tailwind CSS
  </p>

  <p className="mt-2 text-slate-700">
    <strong>将来の目標：</strong> Webアプリを自分で作れるようになること
  </p>
</section>
          <LearningPathCard issues={nextIssues} totalIssueCount={totalIssueCount} />
        </div>
      </section>
      <PhaseGrid />
      <FeaturedTutorials issues={featuredIssues} />
      <HomeCtaSection />
    </>
  );
}
