# Biginner リポジトリ指示

このリポジトリで作業するときは、応答、説明、レビューコメント、TSDoc、コードコメント、UI表示文言を日本語で書いてください。Next.js、React、TypeScript、Tailwind CSS、API 名、パッケージ名、識別子など、技術名や固有名詞だけ英語表記を許容します。

リポジトリ直下の `AGENTS.md` を主要なプロジェクトガイドとして従ってください。設計、TypeScript、フロントエンド、ドキュメント、検証コマンドのルールが定義されています。

このプロジェクトは Next.js、React、TypeScript、Tailwind CSS の学習サイトです。`src/app/**/page.tsx` の route ファイルは薄く保ち、再利用できる UI は `src/components/**`、ドメインデータと query/helper 関数は `src/data/**`、共有型は `src/types/**` に置いてください。

小さく責務が明確なコンポーネントを優先してください。レイアウト、データ選択、繰り返し表示が混ざり始めたら分割してください。

strict TypeScript を前提にしてください。`any` は使わないでください。props、ドメインデータ、派生コレクションには `ReadonlyArray<T>` を優先してください。型だけの import には `import type` を使ってください。

タスクで明示的に UX 変更を求められていない限り、既存の route、日本語の表示文言、表示内容を維持してください。

意味のあるコード変更後は、可能な限り完了前に次のチェックを実行してください。

```bash
npm run type-check
npm run lint
npm run build
npx -y react-doctor@latest . --verbose
```

チェックを実行できない場合は、理由と残るリスクを日本語で説明してください。
