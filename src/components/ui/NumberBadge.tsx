type NumberBadgeProps = Readonly<{
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'dark' | 'light';
}>;

const sizeClasses: Readonly<Record<NonNullable<NumberBadgeProps['size']>, string>> = {
  sm: 'size-8',
  md: 'size-9',
  lg: 'size-10',
};

const toneClasses: Readonly<Record<NonNullable<NumberBadgeProps['tone']>, string>> = {
  dark: 'bg-slate-950 text-white',
  light: 'bg-white text-slate-950 ring-1 ring-slate-200',
};

export function NumberBadge({ children, size = 'md', tone = 'light' }: NumberBadgeProps) {
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-md text-sm font-black ${sizeClasses[size]} ${toneClasses[tone]}`}>
      {children}
    </span>
  );
}
