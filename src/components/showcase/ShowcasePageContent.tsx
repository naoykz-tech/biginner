import { AboutSection } from '@/components/showcase/sections/AboutSection';
import { ContactPreview } from '@/components/showcase/sections/ContactPreview';
import { LearningStepsSection } from '@/components/showcase/sections/LearningStepsSection';
import { ShowcaseHeader } from '@/components/showcase/sections/ShowcaseHeader';
import { ShowcaseHero } from '@/components/showcase/sections/ShowcaseHero';
import { SkillsSection } from '@/components/showcase/sections/SkillsSection';
import { WorksSection } from '@/components/showcase/sections/WorksSection';
import type { ShowcaseFeature, ShowcaseLearningLink, ShowcaseSection } from '@/types/showcase';

type ShowcasePageContentProps = Readonly<{
  sections: ReadonlyArray<ShowcaseSection>;
  features: ReadonlyArray<ShowcaseFeature>;
  learningLinks: ReadonlyArray<ShowcaseLearningLink>;
}>;

/**
 * 初心者が最終的に作る完成見本を表示する成果物ページ本体です。
 *
 * @remarks
 * 完成サイトの見た目、含まれる機能、対応するチュートリアル課題を並べ、学習中のステップと最終成果を接続します。
 */
export function ShowcasePageContent({ sections, features, learningLinks }: ShowcasePageContentProps) {
  return (
    <>
      <ShowcaseHeader />
      <ShowcaseHero />
      <AboutSection />
      <SkillsSection features={features} />
      <WorksSection sections={sections} />
      <ContactPreview />
      <LearningStepsSection learningLinks={learningLinks} />
    </>
  );
}
