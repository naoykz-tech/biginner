import type { ShowcaseReason } from '@/types/showcase';

type ReasonListProps = Readonly<{
  reasons: ReadonlyArray<ShowcaseReason>;
}>;

/**
 * 架空工務店サイトで選ばれる理由を縦に並べます。
 *
 * @remarks
 * 施工事例へ進む前に、地域密着・伴走・安心という判断材料を補足します。
 */
export function ReasonList({ reasons }: ReasonListProps) {
  return (
    <div className="grid gap-4">
      {reasons.map((reason) => (
        <article key={reason.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <p className="w-fit rounded-full bg-slate-950 px-3 py-1 text-sm font-black text-white">{reason.label}</p>
            <div>
              <h3 className="text-xl font-black text-slate-950">{reason.title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{reason.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
