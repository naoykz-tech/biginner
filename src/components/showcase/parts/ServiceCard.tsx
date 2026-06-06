import type { ShowcaseService } from '@/types/showcase';

type ServiceCardProps = Readonly<{
  service: ShowcaseService;
}>;

/**
 * 架空工務店サイトの事業内容を表示するカードです。
 *
 * @remarks
 * 企業サイトのサービス紹介として、短い分類ラベルと説明をセットで見せます。
 */
export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-black text-emerald-700">{service.tag}</p>
      <h3 className="mt-5 text-2xl font-black text-slate-950">{service.title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
    </article>
  );
}
