import { LinkButton } from '@/components/ui/LinkButton';

type LearningPhase = Readonly<{
  label: string;
  text: string;
  count: number;
}>;

const phases: ReadonlyArray<LearningPhase> = [
  { label: 'GitHub', text: 'PRとレビューの基本を知る', count: 2 },
  { label: 'UI', text: 'JSXとTailwindで画面を作る', count: 3 },
  { label: 'React', text: 'コンポーネントと入力を扱う', count: 4 },
  { label: 'Quality', text: '型とlintで品質を上げる', count: 2 },
  { label: 'Portfolio', text: '成果物として公開する', count: 2 },
];

export function PhaseGrid() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-700">Roadmap</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">迷わず進める5つの学習フェーズ</h2>
        </div>
        <LinkButton href="/roadmap" variant="ghost" className="justify-start p-0">
          全体を見る
        </LinkButton>
      </div>
      <div className="grid gap-4 md:grid-cols-5">
        {phases.map((phase) => (
          <article key={phase.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-black text-emerald-700">{phase.label}</p>
            <h3 className="mt-3 min-h-12 text-lg font-black leading-6 text-slate-950">{phase.text}</h3>
            <p className="mt-4 text-sm font-semibold text-slate-500">{phase.count} tasks</p>
          </article>
        ))}
      </div>
    </section>
  );
}
