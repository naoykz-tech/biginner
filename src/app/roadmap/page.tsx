import { PageShell } from '@/components/layout/PageShell';
import { RoadmapPageContent } from '@/components/roadmap/RoadmapPageContent';
import { learningIssues } from '@/data/learningIssues';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '学習ロードマップ | Biginner',
  description: 'GitHub、Next.js、React、TypeScript、ポートフォリオ公開まで順番に学ぶロードマップです。',
};

export default function RoadmapPage() {
  return (
    <PageShell>
      <RoadmapPageContent issues={learningIssues} />
    </PageShell>
  );
}
