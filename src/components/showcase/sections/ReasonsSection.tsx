import { ReasonList } from '@/components/showcase/parts/ReasonList';
import type { ShowcaseReason } from '@/types/showcase';

type ReasonsSectionProps = Readonly<{
  reasons: ReadonlyArray<ShowcaseReason>;
}>;

/**
 * 架空工務店サイトの選ばれる理由セクションです。
 *
 * @remarks
 * 実績数だけでは伝わりにくい、相談しやすさや施工後の安心を補足します。
 */
export function ReasonsSection({ reasons }: ReasonsSectionProps) {
  return (
    <section id="reasons" className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
        <div>
          <p className="text-sm font-black tracking-wider text-emerald-700">選ばれる理由</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">小さな工務店だから、近くで見続けられる。</h2>
          <p className="mt-4 leading-8 text-slate-600">相談のしやすさ、現場での説明、引き渡し後の点検まで。地域の会社として、長く頼れる関係を大切にしています。</p>
        </div>
        <ReasonList reasons={reasons} />
      </div>
    </section>
  );
}
