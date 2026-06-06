/**
 * 学習課題の分類名です。
 *
 * @remarks
 * 一覧、ロードマップ、カテゴリバッジで同じ語彙を共有するための型です。
 * 表示色は `CategoryBadge` 側でこの値をキーにして決まるため、値を増やす場合はUIの対応も必要です。
 */
export type LearningIssueCategory = 'GitHub' | 'Next.js' | 'UI' | 'React' | 'Quality' | 'Portfolio';

/**
 * GitHub issue由来の学習課題を表すドメイン型です。
 *
 * @remarks
 * ロードマップ、トップページ、チュートリアル一覧で同じ課題情報を再利用します。
 * `number` はURLの `issue-{number}` とも対応するため、表示用の連番以上の意味を持ちます。
 */
export interface LearningIssue {
  /** GitHub issue番号であり、チュートリアル詳細ページのslugにも使います。 */
  readonly number: number;
  /** 元になったGitHub issueの見出しです。履歴を追えるように原文を保持します。 */
  readonly originalIssue: string;
  /** 画面上で主見出しとして表示する課題名です。 */
  readonly title: string;
  /** ロードマップ上の分類とカテゴリバッジの配色を決める値です。 */
  readonly category: LearningIssueCategory;
  /** 学習者がその課題で何を理解・体験するかを説明します。 */
  readonly purpose: string;
  /** 課題で実施する作業項目です。表示順がそのまま作業順になります。 */
  readonly tasks: ReadonlyArray<string>;
  /** 課題を完了と判断する条件です。 */
  readonly done: string;
  /** 課題から得られる技術トピックです。一覧カードの短い要約にも使います。 */
  readonly learningPoints: ReadonlyArray<string>;
}

/**
 * 初心者向けチュートリアル本文を構成する教材データです。
 *
 * @remarks
 * 詳細ページはこの型の配列や文字列をそのままセクションに展開します。
 * 配列の順序は学習者に見せる順序なので、データ作成時に意味のある並びにしてください。
 */
export interface BeginnerTutorial {
  /** チュートリアル完了時に到達してほしい状態です。 */
  readonly goal: string;
  /** 既存ファイルとして開く候補です。 */
  readonly files: ReadonlyArray<string>;
  /** 新規作成が必要なファイルです。空配列の場合は既存ファイル編集のみを意味します。 */
  readonly createFiles: ReadonlyArray<string>;
  /** 作業前に確認する前提条件です。 */
  readonly beforeStart: ReadonlyArray<string>;
  /** 実装手順です。表示順がそのまま作業順になります。 */
  readonly steps: ReadonlyArray<string>;
  /** 学習者が迷ったときに参照する短いサンプルコードです。 */
  readonly hintCode: string;
  /** ブラウザやコマンドで確認する観点です。 */
  readonly checkInBrowser: ReadonlyArray<string>;
  /** 初学者がつまずきやすい失敗例です。 */
  readonly commonMistakes: ReadonlyArray<string>;
  /** 作業完了前に自己確認するチェック項目です。 */
  readonly completionChecklist: ReadonlyArray<string>;
}

/**
 * チュートリアル機能で扱うissue番号です。
 *
 * @remarks
 * 実体は数値ですが、URL slug、静的ルート生成、前後ナビゲーションで使う番号だと分かるように別名化しています。
 */
export type TutorialIssueNumber = number;

/**
 * チュートリアル詳細ページの前後リンク情報です。
 *
 * @remarks
 * 前後の課題が存在しない端のページでは `null` を入れ、UI側でリンクを表示しない判断に使います。
 */
export interface TutorialNavigation {
  /** ひとつ前のチュートリアル課題番号です。先頭課題では `null` です。 */
  readonly previousIssue: TutorialIssueNumber | null;
  /** ひとつ次のチュートリアル課題番号です。末尾課題では `null` です。 */
  readonly nextIssue: TutorialIssueNumber | null;
}
