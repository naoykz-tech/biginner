import { PageShell } from '@/components/layout/PageShell';
import { TutorialsPageContent } from '@/components/tutorials/TutorialsPageContent';
import { getTutorialByIssueNumber, getTutorialIssues } from '@/data/learningIssues';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'チュートリアル課題 | Biginner',
  description: '初心者向けに、開くファイル・作るファイル・確認するURLまで案内するNext.jsチュートリアル課題一覧です。',
};

export default function TutorialsPage() {
  const items = getTutorialIssues().flatMap((issue) => {
    const tutorial = getTutorialByIssueNumber(issue.number);

    return tutorial ? [{ issue, tutorial }] : [];
  });

  return (
    <PageShell>
      <TutorialsPageContent items={items} />
    </PageShell>
  );
}
