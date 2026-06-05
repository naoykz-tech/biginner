import { HomePageContent } from '@/components/home/HomePageContent';
import { PageShell } from '@/components/layout/PageShell';
import { getFeaturedIssues, learningIssues } from '@/data/learningIssues';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biginner - Next.js学習ロードマップ',
  description: 'GitHub issueを進めながらNext.js、React、TypeScriptを小さな課題で学ぶ初心者向けサイトです。',
};

export default function Home() {
  return (
    <PageShell>
      <HomePageContent
        featuredIssues={getFeaturedIssues()}
        nextIssues={learningIssues.slice(2, 7)}
        totalIssueCount={learningIssues.length}
      />
    </PageShell>
  );
}
