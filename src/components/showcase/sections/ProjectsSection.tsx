import { ProjectCard } from '@/components/showcase/parts/ProjectCard';
import type { ShowcaseProject } from '@/types/showcase';

type ProjectsSectionProps = Readonly<{
  projects: ReadonlyArray<ShowcaseProject>;
}>;

/**
 * 架空工務店サイトの施工事例セクションです。
 *
 * @remarks
 * 完成見本が企業サイトとして見えるよう、暮らしの場面が想像できる事例を並べます。
 */
export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-sm font-black tracking-wider text-emerald-700">施工事例</p>
        <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-3xl font-black tracking-tight text-slate-950">家族の時間が変わる、森町ホームズの住まい。</h2>
          <a href="#contact" className="inline-flex w-fit items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-950 hover:bg-slate-100">
            似た事例を相談する
          </a>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
