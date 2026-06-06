import { ContactPreview } from '@/components/showcase/sections/ContactPreview';
import { LearningStepsSection } from '@/components/showcase/sections/LearningStepsSection';
import { NewsSection } from '@/components/showcase/sections/NewsSection';
import { ProjectsSection } from '@/components/showcase/sections/ProjectsSection';
import { ReasonsSection } from '@/components/showcase/sections/ReasonsSection';
import { ServicesSection } from '@/components/showcase/sections/ServicesSection';
import { ShowcaseHeader } from '@/components/showcase/sections/ShowcaseHeader';
import { ShowcaseHero } from '@/components/showcase/sections/ShowcaseHero';
import type { ShowcaseLearningLink, ShowcaseNewsItem, ShowcaseProject, ShowcaseReason, ShowcaseService } from '@/types/showcase';

type ShowcasePageContentProps = Readonly<{
  services: ReadonlyArray<ShowcaseService>;
  reasons: ReadonlyArray<ShowcaseReason>;
  projects: ReadonlyArray<ShowcaseProject>;
  newsItems: ReadonlyArray<ShowcaseNewsItem>;
  learningLinks: ReadonlyArray<ShowcaseLearningLink>;
}>;

/**
 * 初心者が最終的に作る企業サイト完成見本を表示する成果物ページ本体です。
 *
 * @remarks
 * 架空工務店の企業サイトとして見える本文と、学習者が戻れる下部導線を合成します。
 */
export function ShowcasePageContent({ services, reasons, projects, newsItems, learningLinks }: ShowcasePageContentProps) {
  return (
    <>
      <ShowcaseHeader />
      <ShowcaseHero />
      <ServicesSection services={services} />
      <ReasonsSection reasons={reasons} />
      <ProjectsSection projects={projects} />
      <NewsSection newsItems={newsItems} />
      <ContactPreview />
      <LearningStepsSection learningLinks={learningLinks} />
    </>
  );
}
