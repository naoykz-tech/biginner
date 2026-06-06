import { LinkButton } from '@/components/ui/LinkButton';

/**
 * 初学者向け学習サイトの目的と最初の導線を伝える導入領域です。
 *
 * @remarks
 * トップページのファーストビューで使う固定コンテンツです。
 * データ依存を持たせず、学習開始と課題一覧へのリンクだけを提供します。
 */
export function HomeHero() {
  return (
    <div>
      <p className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-200">
        GitHub issueで進める初心者チュートリアル
      </p>
      <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
        Next.js、React、TypeScriptを小さな課題で学ぶ。
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        Biginnerは、どのファイルを開き、どこに何を書き、どのURLで確認するかまで案内する学習サイトです。
        トップページの編集からフォーム、バリデーション、型定義までをissue単位で進めます。
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <LinkButton href="/tutorials/issue-5" className="px-5">
          最初の課題を始める
        </LinkButton>
        <LinkButton href="/tutorials" variant="secondary" className="px-5">
          課題一覧を見る
        </LinkButton>
      </div>
    </div>
  );
}
