import type { LearningIssueCategory } from '@/types/learning';

const categoryStyles: Readonly<Record<LearningIssueCategory, string>> = {
  GitHub: 'bg-slate-100 text-slate-700 ring-slate-200',
  'Next.js': 'bg-sky-100 text-sky-700 ring-sky-200',
  UI: 'bg-emerald-100 text-emerald-700 ring-emerald-200',
  React: 'bg-indigo-100 text-indigo-700 ring-indigo-200',
  Quality: 'bg-amber-100 text-amber-800 ring-amber-200',
  Portfolio: 'bg-rose-100 text-rose-700 ring-rose-200',
};

type CategoryBadgeProps = Readonly<{
  category: LearningIssueCategory;
}>;

type BadgeProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

/**
 * 課題カテゴリを色付きラベルとして表示します。
 *
 * @remarks
 * `LearningIssueCategory` の値ごとに配色を固定し、ロードマップやカード間でカテゴリの見え方を揃えます。
 */
export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${categoryStyles[category]}`}>
      {category}
    </span>
  );
}

/**
 * 短いテキストを丸型バッジとして表示する汎用部品です。
 *
 * @remarks
 * 学習ポイントなどカテゴリ以外のラベルに使います。
 * カテゴリ表示には配色が固定された `CategoryBadge` を使ってください。
 */
export function Badge({ children, className = 'bg-slate-100 text-slate-700' }: BadgeProps) {
  return <span className={`rounded-full px-3 py-1 text-sm font-semibold ${className}`}>{children}</span>;
}
