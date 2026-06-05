export type LearningIssueCategory = 'GitHub' | 'Next.js' | 'UI' | 'React' | 'Quality' | 'Portfolio';

export interface LearningIssue {
  readonly number: number;
  readonly originalIssue: string;
  readonly title: string;
  readonly category: LearningIssueCategory;
  readonly purpose: string;
  readonly tasks: ReadonlyArray<string>;
  readonly done: string;
  readonly learningPoints: ReadonlyArray<string>;
}

export interface BeginnerTutorial {
  readonly goal: string;
  readonly files: ReadonlyArray<string>;
  readonly createFiles: ReadonlyArray<string>;
  readonly beforeStart: ReadonlyArray<string>;
  readonly steps: ReadonlyArray<string>;
  readonly hintCode: string;
  readonly checkInBrowser: ReadonlyArray<string>;
  readonly commonMistakes: ReadonlyArray<string>;
  readonly completionChecklist: ReadonlyArray<string>;
}

export type TutorialIssueNumber = number;

export interface TutorialNavigation {
  readonly previousIssue: TutorialIssueNumber | null;
  readonly nextIssue: TutorialIssueNumber | null;
}
