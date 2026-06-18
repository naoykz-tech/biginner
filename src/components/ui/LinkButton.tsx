import Link from 'next/link';

type LinkButtonProps = Readonly<{
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'emerald' | 'metal';
  className?: string;
}>;

const variantClasses: Readonly<Record<NonNullable<LinkButtonProps['variant']>, string>> = {
  primary: 'bg-slate-950 text-white hover:bg-slate-800',
  secondary: 'border border-slate-300 bg-white text-slate-950 hover:bg-slate-100',
  ghost: 'text-emerald-700 hover:text-emerald-900',
  emerald: 'bg-emerald-800 text-white hover:bg-emerald-900',

  metal: `
    text-white font-semibold
    bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700
    shadow-md
    hover:from-blue-400 hover:via-blue-600 hover:to-blue-800
    active:scale-95
    transition-all duration-200
  `,
};

/**
 * ページ間導線をボタン風に表示するリンクコンポーネントです。
 */
export function LinkButton({ children, href, variant = 'primary', className = '' }: LinkButtonProps) {
  const baseClassName = 'inline-flex items-center justify-center rounded-md px-4 py-3 text-sm font-bold';

  return (
    <Link href={href} className={`${baseClassName} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
}
