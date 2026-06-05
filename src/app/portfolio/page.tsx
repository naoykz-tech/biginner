import { PageShell } from '@/components/layout/PageShell';
import { PortfolioPageContent } from '@/components/portfolio/PortfolioPageContent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ポートフォリオ公開準備 | Biginner',
  description: 'README、スクリーンショット、公開前チェックを整理し、学習用プロジェクトを説明できる成果物へ整えます。',
};

export default function PortfolioPage() {
  return (
    <PageShell>
      <PortfolioPageContent />
    </PageShell>
  );
}
