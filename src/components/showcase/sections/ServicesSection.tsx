import { ServiceCard } from '@/components/showcase/parts/ServiceCard';
import type { ShowcaseService } from '@/types/showcase';

type ServicesSectionProps = Readonly<{
  services: ReadonlyArray<ShowcaseService>;
}>;

/**
 * 架空工務店サイトの事業内容セクションです。
 *
 * @remarks
 * 完成した企業サイトとして、問い合わせ前に何を頼める会社かを伝えます。
 */
export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-sm font-black tracking-wider text-emerald-700">事業内容</p>
        <div className="mt-2 grid gap-5 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <h2 className="text-3xl font-black tracking-tight text-slate-950">住まいの相談を、ひとつの窓口で。</h2>
          <p className="leading-8 text-slate-600">
            新築、リノベーション、日々のメンテナンスまで。暮らしの変化に合わせて、必要な工事を分かりやすく提案します。
          </p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
