import { PageShell } from '@/components/layout/PageShell';
import { ShowcasePageContent } from '@/components/showcase/ShowcasePageContent';
import { getShowcaseLearningLinks, getShowcaseNewsItems, getShowcaseProjects, getShowcaseReasons, getShowcaseServices } from '@/data/showcase';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '完成見本 | Biginner',
  description: 'Biginnerのチュートリアルを進めた先に作れる、企業サイト風ホームページの完成見本です。',
};

export default function ShowcasePage() {
  return (
    <PageShell>
      <ShowcasePageContent
        services={getShowcaseServices()}
        reasons={getShowcaseReasons()}
        projects={getShowcaseProjects()}
        newsItems={getShowcaseNewsItems()}
        learningLinks={getShowcaseLearningLinks()}
      />
    </PageShell>
  );
}
