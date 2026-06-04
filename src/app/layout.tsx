import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Biginner - 初心者のためのNext.js学習ロードマップ',
  description: 'GitHub issueを進めながらNext.js、React、TypeScriptを学ぶ初心者向けチュートリアルサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
