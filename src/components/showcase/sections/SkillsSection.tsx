import { FeatureGrid } from '@/components/showcase/parts/FeatureGrid';
import type { ShowcaseFeature } from '@/types/showcase';

type SkillsSectionProps = Readonly<{
  features: ReadonlyArray<ShowcaseFeature>;
}>;

/**
 * 完成ホームページで学習済みの機能を見せるセクションです。
 *
 * @remarks
 * Biginnerの各課題で身につく実装を、成果物のスキル表示としてまとめます。
 */
export function SkillsSection({ features }: SkillsSectionProps) {
  return (
    <section id="skills" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <p className="text-sm font-black tracking-wider text-emerald-700">できること</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">作れるようになったこと</h2>
        <FeatureGrid features={features} />
      </div>
    </section>
  );
}
