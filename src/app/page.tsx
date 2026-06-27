import { HomePageContent } from '@/components/home/HomePageContent';
import { PageShell } from '@/components/layout/PageShell';
import { getFeaturedIssues, learningIssues } from '@/data/learningIssues';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biginner - Next.js学習ロードマップ',
  description: 'GitHub issueを進めながらNext.js、React、TypeScriptを小さな課題で学ぶ初心者向けサイトです。',
};

import Link from "next/link";

export default function Home() {
  return (
    <PageShell>
      <HomePageContent
        featuredIssues={getFeaturedIssues()}
        nextIssues={learningIssues.slice(2, 7)}
        totalIssueCount={learningIssues.length}
      />

      <div className="mt-0 text-center">
        <Link href="/contact">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            お問い合わせへ
          </button>
        </Link>
      </div>
    </PageShell>
  );
}
