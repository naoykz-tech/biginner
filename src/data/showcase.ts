import type { ShowcaseFeature, ShowcaseLearningLink, ShowcaseSection } from '@/types/showcase';

const showcaseSections: ReadonlyArray<ShowcaseSection> = [
  {
    title: '自己紹介',
    description: '名前、学習中の技術、これから作りたいものを1つの見出しエリアにまとめます。',
    issueNumber: 6,
  },
  {
    title: '学習した技術',
    description: 'Next.js、React、TypeScript、Tailwind CSSを、カード形式で読みやすく整理します。',
    issueNumber: 8,
  },
  {
    title: '作った機能',
    description: 'コンポーネント分割、props、フォーム入力、バリデーションを小さな実装例として見せます。',
    issueNumber: 10,
  },
  {
    title: '公開準備',
    description: 'README、スクリーンショット、説明できる学びをそろえて、成果物として提出できる形にします。',
    issueNumber: 15,
  },
];

const showcaseFeatures: ReadonlyArray<ShowcaseFeature> = [
  {
    title: 'プロフィール表示',
    description: '自分の情報をコンポーネントとして切り出し、ページから呼び出す練習になります。',
    skills: ['JSX', 'Component', 'Tailwind CSS'],
  },
  {
    title: '技術カード',
    description: '同じ形の情報を繰り返し表示し、propsと配列データの使い方を学びます。',
    skills: ['props', 'ReadonlyArray', 'map'],
  },
  {
    title: '問い合わせフォーム',
    description: '入力値をstateで管理し、未入力やメール形式のチェックまで体験します。',
    skills: ['useState', 'event', 'validation'],
  },
];

const showcaseLearningLinks: ReadonlyArray<ShowcaseLearningLink> = [
  {
    issueNumber: 5,
    title: 'トップページの文章を変える',
    href: '/tutorials/issue-5',
    summary: '最初にコードと画面がつながる感覚を掴みます。',
  },
  {
    issueNumber: 6,
    title: '自己紹介セクションを追加する',
    href: '/tutorials/issue-6',
    summary: '完成見本のプロフィール領域につながる課題です。',
  },
  {
    issueNumber: 8,
    title: 'コンポーネントを新規作成する',
    href: '/tutorials/issue-8',
    summary: '見た目のまとまりを再利用できる部品にします。',
  },
  {
    issueNumber: 10,
    title: 'フォームを作成する',
    href: '/tutorials/issue-10',
    summary: '問い合わせフォームの入力体験を作ります。',
  },
];

/**
 * 成果物ページに表示する完成サイトのセクション一覧を取得します。
 *
 * @returns 表示順を保った完成サイトの主要セクション一覧です。該当データがない場合は空配列です。
 */
export function getShowcaseSections(): ReadonlyArray<ShowcaseSection> {
  return showcaseSections;
}

/**
 * 成果物ページに表示する機能一覧を取得します。
 *
 * @returns 完成サイトに含める代表的な機能一覧です。該当データがない場合は空配列です。
 */
export function getShowcaseFeatures(): ReadonlyArray<ShowcaseFeature> {
  return showcaseFeatures;
}

/**
 * 完成見本からチュートリアルへ戻る学習導線を取得します。
 *
 * @returns 対応issueへのリンクを含む学習導線一覧です。該当データがない場合は空配列です。
 */
export function getShowcaseLearningLinks(): ReadonlyArray<ShowcaseLearningLink> {
  return showcaseLearningLinks;
}
