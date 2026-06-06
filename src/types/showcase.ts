/**
 * 成果物ページ内で見せる完成サイトの主要セクションです。
 *
 * @remarks
 * `issueNumber` は、学習者がどの課題を終えるとそのセクションを作れるかを示す対応番号です。
 */
export interface ShowcaseSection {
  /** セクションの表示名です。完成見本ページの見出しとして使います。 */
  readonly title: string;
  /** 初心者が作る画面として、そのセクションが担う役割を説明します。 */
  readonly description: string;
  /** 対応するチュートリアル課題のissue番号です。 */
  readonly issueNumber: number;
}

/**
 * 完成サイトに含まれる機能と、そこで身につく技術を結びつける表示データです。
 */
export interface ShowcaseFeature {
  readonly title: string;
  readonly description: string;
  readonly skills: ReadonlyArray<string>;
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
