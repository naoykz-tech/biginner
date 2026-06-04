import Link from 'next/link';

type LinkButtonProps = Readonly<{
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'emerald';
  className?: string;
}>;

const variantClasses: Readonly<Record<NonNullable<LinkButtonProps['variant']>, string>> = {
  primary: 'bg-slate-950 text-white hover:bg-slate-800',
  secondary: 'border border-slate-300 bg-white text-slate-950 hover:bg-slate-100',
  ghost: 'text-emerald-700 hover:text-emerald-900',
  emerald: 'bg-emerald-800 text-white hover:bg-emerald-900',
};

export function LinkButton({ children, href, variant = 'primary', className = '' }: LinkButtonProps) {
  const baseClassName = 'inline-flex items-center justify-center rounded-md px-4 py-3 text-sm font-bold';

  return (
    <Link href={href} className={`${baseClassName} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
}
