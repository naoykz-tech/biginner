export default function Profile({ name, learningTechnologies, futureGoals, hobbies }: ProfileProps) {
    return (
         <section className="mx-auto max-w-3xl px-5 py-8 mt-4 p-4 bg-white rounded-xl shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold text-slate-900">自己紹介</h2>

            <p className="mt-4 text-slate-700">
              <strong>名前：</strong> {name}
            </p>

            <p className="mt-2 text-slate-700">
              <strong>学習中の技術：</strong>{learningTechnologies.join('、')} 
            </p>

            <p className="mt-2 text-slate-700">
              <strong>将来の目標：</strong> {futureGoals}
            </p>

            <p className="mt-2 text-slate-700">
              <strong>趣味：</strong> {hobbies.join('、')}
            </p>

          </section>
    );
}

export interface ProfileProps {
    readonly name: string;
    readonly learningTechnologies: ReadonlyArray<string>;
    readonly futureGoals: string;
    readonly hobbies: ReadonlyArray<string>;
}

