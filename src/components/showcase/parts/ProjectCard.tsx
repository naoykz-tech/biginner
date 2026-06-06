import type { ShowcaseProject } from '@/types/showcase';

type ProjectCardProps = Readonly<{
  project: ShowcaseProject;
}>;

const projectToneClassName: Record<ShowcaseProject['tone'], string> = {
  forest: 'from-emerald-900 via-teal-700 to-lime-200',
  sunset: 'from-slate-900 via-orange-700 to-amber-200',
  stone: 'from-slate-800 via-stone-500 to-slate-200',
};

/**
 * 架空工務店サイトの施工事例カードです。
 *
 * @remarks
 * 実画像を使わず、背景テーマで住宅写真のような印象を作る教材向けの表示部品です。
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className={`relative min-h-56 bg-gradient-to-br ${projectToneClassName[project.tone]}`}>
        <div className="absolute bottom-6 left-6 h-20 w-32 rounded-md bg-white/85 shadow-lg" />
        <div className="absolute bottom-14 left-16 h-12 w-20 rounded-t-md bg-slate-950/70" />
        <div className="absolute right-6 top-6 rounded-full bg-white/90 px-3 py-1 text-sm font-black text-slate-950">{project.location}</div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black text-slate-950">{project.title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
      </div>
    </article>
  );
}
