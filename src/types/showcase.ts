/**
 * 架空工務店サイトで紹介する事業領域です。
 */
export interface ShowcaseService {
  readonly title: string;
  readonly description: string;
  readonly tag: string;
}

/**
 * 架空工務店サイトで信頼感を伝える強みです。
 */
export interface ShowcaseReason {
  readonly title: string;
  readonly description: string;
  readonly label: string;
}

/**
 * 架空工務店サイトで紹介する施工事例です。
 *
 * @remarks
 * `tone` は画像素材を使わずに事例写真の雰囲気を作るための背景テーマです。
 */
export interface ShowcaseProject {
  readonly title: string;
  readonly location: string;
  readonly description: string;
  readonly tone: 'forest' | 'sunset' | 'stone';
}

/**
 * 架空工務店サイトで掲載するお知らせです。
 */
export interface ShowcaseNewsItem {
  readonly date: string;
  readonly category: string;
  readonly title: string;
}

/**
 * 成果物とチュートリアル課題をつなぐ学習導線です。
 *
 * @remarks
 * 完成形を見た学習者が、必要な課題へ戻れるようにURLと短い説明を持ちます。
 */
export interface ShowcaseLearningLink {
  readonly issueNumber: number;
  readonly title: string;
  readonly href: string;
  readonly summary: string;
}
