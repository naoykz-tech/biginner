import { notFound } from 'next/navigation';

import { PageShell } from '@/components/layout/PageShell';
import { TutorialDetailPageContent } from '@/components/tutorials/TutorialDetailPageContent';
import {
  getIssueByNumber,
  getTutorialByIssueNumber,
  getTutorialNavigation,
  parseIssueSlug,
  tutorialIssueNumbers,
} from '@/data/learningIssues';

import type { Metadata } from 'next';

type TutorialDetailPageProps = Readonly<{
  params: Promise<{
    readonly issueSlug: string;
  }>;
}>;

export function generateStaticParams() {
  return tutorialIssueNumbers.map((issueNumber) => ({
    issueSlug: `issue-${issueNumber}`,
  }));
}

export async function generateMetadata({ params }: TutorialDetailPageProps): Promise<Metadata> {
  const { issueSlug } = await params;
  const issueNumber = parseIssueSlug(issueSlug);
  const issue = issueNumber === null ? undefined : getIssueByNumber(issueNumber);

  return {
    title: issue ? `${issue.title} | Biginner` : 'チュートリアル詳細 | Biginner',
    description: issue?.purpose ?? 'Biginnerの初心者向けチュートリアル詳細ページです。',
  };
}

export default async function TutorialDetailPage({ params }: TutorialDetailPageProps) {
  const { issueSlug } = await params;
  const issueNumber = parseIssueSlug(issueSlug);

  if (issueNumber === null) {
    notFound();
  }

  const issue = getIssueByNumber(issueNumber);
  const tutorial = getTutorialByIssueNumber(issueNumber);

  if (!issue || !tutorial) {
    notFound();
  }

  return (
    <PageShell>
      <TutorialDetailPageContent issue={issue} navigation={getTutorialNavigation(issueNumber)} tutorial={tutorial} />
    </PageShell>
  );
}
