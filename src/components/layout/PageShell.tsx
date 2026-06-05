type PageShellProps = Readonly<{
  children: React.ReactNode;
}>;

export function PageShell({ children }: PageShellProps) {
  return <main className="min-h-screen bg-slate-50 text-slate-950">{children}</main>;
}
