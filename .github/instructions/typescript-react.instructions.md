---
applyTo: "src/**/*.ts,src/**/*.tsx"
---

# TypeScript / React 指示

このファイルの対象範囲で作業するときは、応答、説明、レビューコメント、TSDoc、コードコメントを日本語で書いてください。TypeScript の型名、コンポーネント名、関数名、技術名などの識別子や固有名詞だけ英語表記を許容します。

export される public surface は明示的に型付けしてください。対象はドメインデータ、コンポーネント props、route params、共有型、public helper 関数です。

変更しない前提のオブジェクトプロパティには `readonly` を使ってください。特に共有ドメイン interface とコンポーネント props で優先してください。

データの lookup、filter、sort、変換は JSX に直接書かず、名前付き関数に移して JSX を読みやすく保ってください。

繰り返し要素の `key` には、ドメインデータ由来の安定した値を使ってください。静的リストで他に識別子がない場合を除き、配列 index を key に使わないでください。

`src/types/**`、`src/data/**`、`src/components/**` の再利用コンポーネントで export される共有 surface には TSDoc を書いてください。コメントでは意図、ドメイン上の意味、制約、分かりにくい挙動を説明し、シンボル名や型の言い換えだけにしないでください。

Tailwind class は短く読みやすく保ってください。`h-8 w-8` と同等に表せる場合は `size-8` のような utility を優先してください。
