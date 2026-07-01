import { FeaturedTutorials } from '@/components/home/FeaturedTutorials';
import { HomeCtaSection } from '@/components/home/HomeCtaSection';
import { HomeHero } from '@/components/home/HomeHero';
import { LearningPathCard } from '@/components/home/LearningPathCard';
import { PhaseGrid } from '@/components/home/PhaseGrid';
import { SiteHeader } from '@/components/layout/SiteHeader';
import type { LearningIssue } from '@/types/learning';
import Profile from './Profile';

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
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-16">
          <HomeHero />
          <Profile
            name="Nao"
            learningTechnologies={['Next.js', 'React', 'TypeScript', 'Tailwind CSS']}
            futureGoals="Webアプリを自分で作れるようになること"
            hobbies={['読書', '映画鑑賞', '旅行']}
          />
          <LearningPathCard issues={nextIssues} totalIssueCount={totalIssueCount} />
        </div>
      </section>
      <PhaseGrid />
      <FeaturedTutorials issues={featuredIssues} />
      <HomeCtaSection />
    </>
  );
}
