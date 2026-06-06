import type { ShowcaseLearningLink, ShowcaseNewsItem, ShowcaseProject, ShowcaseReason, ShowcaseService } from '@/types/showcase';

const showcaseServices: ReadonlyArray<ShowcaseService> = [
  {
    title: '注文住宅',
    description: '家族構成や働き方に合わせて、土地探しから間取り、素材選びまで一緒に考えます。',
    tag: '新築',
  },
  {
    title: 'リノベーション',
    description: '古い住まいの良さを活かしながら、断熱・収納・動線を今の暮らしに整えます。',
    tag: '改修',
  },
  {
    title: '暮らしのメンテナンス',
    description: '小さな修繕から定期点検まで、建てた後も地域の相談先として支えます。',
    tag: '保守',
  },
];

const showcaseReasons: ReadonlyArray<ShowcaseReason> = [
  {
    title: '地域の気候を知る設計',
    description: '夏の湿気、冬の冷え込み、風の通り道をふまえて、長く快適に住める家を提案します。',
    label: '地域密着',
  },
  {
    title: '相談しやすい進行',
    description: '専門用語をかみ砕き、予算や工期の不安をひとつずつ確認しながら進めます。',
    label: '伴走',
  },
  {
    title: '施工後も続く関係',
    description: '引き渡し後の点検や修繕相談まで、暮らしの変化に合わせて寄り添います。',
    label: '安心',
  },
];

const showcaseProjects: ReadonlyArray<ShowcaseProject> = [
  {
    title: '緑を取り込む平屋の住まい',
    location: '森町・注文住宅',
    description: '庭とリビングをゆるやかにつなぎ、家族が自然に集まる回遊動線を作りました。',
    tone: 'forest',
  },
  {
    title: '夕景が似合う二世帯住宅',
    location: '西丘・建て替え',
    description: '世帯ごとの距離感を保ちながら、共有の土間で会話が生まれる住まいです。',
    tone: 'sunset',
  },
  {
    title: '築32年の断熱リノベーション',
    location: '川辺町・改修',
    description: '既存の梁を活かし、冬も過ごしやすい明るいLDKへ生まれ変わりました。',
    tone: 'stone',
  },
];

const showcaseNewsItems: ReadonlyArray<ShowcaseNewsItem> = [
  {
    date: '2026.06.01',
    category: '見学会',
    title: '森町で完成見学会を開催します',
  },
  {
    date: '2026.05.18',
    category: 'お知らせ',
    title: '夏の断熱リフォーム相談を受け付けています',
  },
  {
    date: '2026.04.26',
    category: '施工事例',
    title: '庭とつながる平屋の事例を公開しました',
  },
];

const showcaseLearningLinks: ReadonlyArray<ShowcaseLearningLink> = [
  {
    issueNumber: 5,
    title: 'トップページの文章を変える',
    href: '/tutorials/issue-5',
    summary: '会社名やキャッチコピーを変更して、画面に反映される流れを掴みます。',
  },
  {
    issueNumber: 6,
    title: '会社紹介セクションを追加する',
    href: '/tutorials/issue-6',
    summary: '企業サイトの信頼感につながる紹介文と見出しを作ります。',
  },
  {
    issueNumber: 8,
    title: 'カード部品を作成する',
    href: '/tutorials/issue-8',
    summary: '事業内容や施工事例を、再利用できるコンポーネントに分けます。',
  },
  {
    issueNumber: 10,
    title: 'フォームを作成する',
    href: '/tutorials/issue-10',
    summary: '無料相談フォームの入力体験を作り、問い合わせ導線を完成させます。',
  },
];

/**
 * 架空工務店サイトに表示する事業内容を取得します。
 *
 * @returns 表示順を保った事業内容一覧です。該当データがない場合は空配列です。
 */
export function getShowcaseServices(): ReadonlyArray<ShowcaseService> {
  return showcaseServices;
}

/**
 * 架空工務店サイトに表示する選ばれる理由を取得します。
 *
 * @returns 表示順を保った強み一覧です。該当データがない場合は空配列です。
 */
export function getShowcaseReasons(): ReadonlyArray<ShowcaseReason> {
  return showcaseReasons;
}

/**
 * 架空工務店サイトに表示する施工事例を取得します。
 *
 * @returns 表示順を保った施工事例一覧です。該当データがない場合は空配列です。
 */
export function getShowcaseProjects(): ReadonlyArray<ShowcaseProject> {
  return showcaseProjects;
}

/**
 * 架空工務店サイトに表示するお知らせを取得します。
 *
 * @returns 表示順を保ったお知らせ一覧です。該当データがない場合は空配列です。
 */
export function getShowcaseNewsItems(): ReadonlyArray<ShowcaseNewsItem> {
  return showcaseNewsItems;
}

/**
 * 完成見本からチュートリアルへ戻る学習導線を取得します。
 *
 * @returns 対応issueへのリンクを含む学習導線一覧です。該当データがない場合は空配列です。
 */
export function getShowcaseLearningLinks(): ReadonlyArray<ShowcaseLearningLink> {
  return showcaseLearningLinks;
}
