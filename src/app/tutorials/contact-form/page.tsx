import { PageShell } from '@/components/layout/PageShell';
import { ContactFormTutorialContent } from '@/components/tutorials/ContactFormTutorialContent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'フォーム作成とバリデーション | Biginner',
  description: 'ReactのuseState、入力フォーム、未入力チェック、メール形式チェックをまとめて学ぶチュートリアルです。',
};

export default function ContactFormTutorialPage() {
  return (
    <PageShell>
      <ContactFormTutorialContent />
    </PageShell>
  );
}
