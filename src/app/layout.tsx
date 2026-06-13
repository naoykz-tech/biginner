import type { Metadata } from 'next';
import './globals.css';

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
      <head />
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
