import { PageShell } from '@/components/layout/PageShell';
import { ShowcasePageContent } from '@/components/showcase/ShowcasePageContent';
import { getShowcaseFeatures, getShowcaseLearningLinks, getShowcaseSections } from '@/data/showcase';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '完成見本 | Biginner',
  description: 'Biginnerのチュートリアルを進めた先に作れる、自己紹介・学習記録・フォーム付きサイトの完成見本です。',
};

export default function ShowcasePage() {
  return (
    <PageShell>
      <ShowcasePageContent sections={getShowcaseSections()} features={getShowcaseFeatures()} learningLinks={getShowcaseLearningLinks()} />
    </PageShell>
  );
}
