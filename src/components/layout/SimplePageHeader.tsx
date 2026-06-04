import Link from 'next/link';

type SimplePageHeaderProps = Readonly<{
  eyebrowHref?: string;
  eyebrowLabel: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}>;

export function SimplePageHeader({ eyebrowHref = '/', eyebrowLabel, title, description, action }: SimplePageHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <Link href={eyebrowHref} className="text-sm font-bold text-emerald-700 hover:text-emerald-900">
          {eyebrowLabel}
        </Link>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
            {description ? <p className="mt-3 max-w-3xl leading-7 text-slate-600">{description}</p> : null}
          </div>
          {action}
        </div>
      </div>
    </header>
  );
}
