import type { ShowcaseFeature } from '@/types/showcase';

type FeatureGridProps = Readonly<{
  features: ReadonlyArray<ShowcaseFeature>;
}>;

/**
 * 完成見本ホームページで、作れるようになった機能をカード表示します。
 *
 * @remarks
 * `features` は表示順に整えられている前提で、並び替えや選定は行いません。
 */
export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="mt-6 grid gap-4 lg:grid-cols-3">
      {features.map((feature) => (
        <article key={feature.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-xl font-black text-slate-950">{feature.title}</h3>
          <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {feature.skills.map((skill) => (
              <span key={skill} className="rounded-full bg-white px-3 py-1 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
                {skill}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
