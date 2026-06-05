import { SimplePageHeader } from '@/components/layout/SimplePageHeader';
import { StartHereCard } from '@/components/tutorials/StartHereCard';
import { TutorialCard } from '@/components/tutorials/TutorialCard';
import { LinkButton } from '@/components/ui/LinkButton';
import type { BeginnerTutorial, LearningIssue } from '@/types/learning';

type TutorialListItem = Readonly<{
  issue: LearningIssue;
  tutorial: BeginnerTutorial;
}>;

type TutorialsPageContentProps = Readonly<{
  items: ReadonlyArray<TutorialListItem>;
}>;

export function TutorialsPageContent({ items }: TutorialsPageContentProps) {
  return (
    <>
      <SimplePageHeader
        eyebrowLabel="Biginner"
        title="チュートリアル課題"
        description="何も触ったことがない人でも進められるように、各課題で「開くファイル」「作るファイル」「確認するURL」まで案内します。"
        action={
          <LinkButton href="/roadmap" variant="secondary">
            全ロードマップを見る
          </LinkButton>
        }
      />

      <section className="mx-auto max-w-6xl px-5 py-10">
        <StartHereCard />
        <div className="grid gap-5 md:grid-cols-2">
          {items.map(({ issue, tutorial }) => (
            <TutorialCard key={issue.number} issue={issue} tutorial={tutorial} />
          ))}
        </div>
      </section>
    </>
  );
}
