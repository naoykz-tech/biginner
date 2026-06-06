import type { BeginnerTutorial, LearningIssue, TutorialIssueNumber, TutorialNavigation } from '@/types/learning';

/**
 * ロードマップ全体の元データです。
 *
 * @remarks
 * GitHub issue由来の学習課題を、学習者に見せる順番で保持します。
 * トップページ、ロードマップ、チュートリアル一覧はいずれもこの配列を基準に課題を選びます。
 */
export const learningIssues: ReadonlyArray<LearningIssue> = [
  {
    number: 3,
    originalIssue: '#3 Pull Requestを作成する',
    title: 'Pull Requestを作成する',
    category: 'GitHub',
    purpose: 'GitHubを利用したレビュー依頼の流れを学ぶ。',
    tasks: ['Pull Requestを作成する', '変更内容を説明する', 'レビュー依頼を行う'],
    done: 'Pull Requestが作成されている。',
    learningPoints: ['Pull Request', 'レビュー', 'チーム開発'],
  },
  {
    number: 4,
    originalIssue: '#4 プロジェクト構成を調査してREADMEへまとめる',
    title: 'プロジェクト構成を調査する',
    category: 'Next.js',
    purpose: 'Next.jsプロジェクトのフォルダ構成を理解する。',
    tasks: ['src、app、components、public の役割を調べる', 'READMEへ調査結果を追記する'],
    done: '第三者がREADMEを読んで構成を理解できる。',
    learningPoints: ['Next.js構成', 'ディレクトリ設計', 'README'],
  },
  {
    number: 5,
    originalIssue: '#5 トップページのテキストを変更する',
    title: 'トップページのテキストを変更する',
    category: 'Next.js',
    purpose: 'コード変更から画面反映までの流れを体験する。',
    tasks: ['トップページの文章を変更する', 'ブラウザで確認する', 'Pull Requestを作成する'],
    done: '変更内容が画面に反映されている。',
    learningPoints: ['React', 'JSX', 'Hot Reload'],
  },
  {
    number: 6,
    originalIssue: '#6 自己紹介セクションを追加する',
    title: '自己紹介セクションを追加する',
    category: 'UI',
    purpose: '画面へ新しい要素を追加できるようになる。',
    tasks: ['名前を表示する', '学習中の技術を表示する', '将来の目標を表示する'],
    done: '自己紹介セクションが表示されている。',
    learningPoints: ['HTML', 'JSX', 'レイアウト'],
  },
  {
    number: 7,
    originalIssue: '#7 CSSを変更して見た目を改善する',
    title: 'Tailwindで見た目を改善する',
    category: 'UI',
    purpose: 'スタイル変更の基本を学ぶ。',
    tasks: ['余白を調整する', 'フォントサイズを変える', 'ボタンやカードを整える'],
    done: 'デザイン変更が画面で確認できる。',
    learningPoints: ['Tailwind CSS', '余白', 'レスポンシブデザイン'],
  },
  {
    number: 8,
    originalIssue: '#8 コンポーネントを新規作成する',
    title: 'コンポーネントを新規作成する',
    category: 'React',
    purpose: 'コンポーネント分割を理解する。',
    tasks: ['Profile.tsx を作成する', 'ページから呼び出す', '表示を確認する'],
    done: 'ページとコンポーネントが分離されている。',
    learningPoints: ['コンポーネント設計', '再利用', 'import/export'],
  },
  {
    number: 9,
    originalIssue: '#9 propsを使ってデータを表示する',
    title: 'propsを使ってデータを表示する',
    category: 'React',
    purpose: 'コンポーネント間でデータを受け渡しできるようになる。',
    tasks: ['親コンポーネントから名前を渡す', '年齢を渡す', '趣味を渡す'],
    done: 'propsを利用して画面にデータが表示されている。',
    learningPoints: ['props', '型定義', '親子コンポーネント'],
  },
  {
    number: 10,
    originalIssue: '#10 フォームを作成する',
    title: 'フォームを作成する',
    category: 'React',
    purpose: 'ユーザー入力を扱えるようになる。',
    tasks: ['名前の入力欄を作る', 'メールアドレスの入力欄を作る', 'メッセージの入力欄を作る'],
    done: '入力できるお問い合わせフォームが表示されている。',
    learningPoints: ['useState', 'イベント処理', 'フォーム'],
  },
  {
    number: 11,
    originalIssue: '#11 バリデーションを実装する',
    title: 'バリデーションを実装する',
    category: 'React',
    purpose: '入力チェックの考え方を学ぶ。',
    tasks: ['未入力チェックを実装する', 'メールアドレス形式チェックを実装する', 'エラーメッセージを表示する'],
    done: '不正な入力に対してエラーメッセージが表示される。',
    learningPoints: ['バリデーション', '条件分岐', 'エラー表示'],
  },
  {
    number: 12,
    originalIssue: '#12 レスポンシブ対応を行う',
    title: 'レスポンシブ対応を行う',
    category: 'UI',
    purpose: 'スマホ対応を学ぶ。',
    tasks: ['スマホ表示でレイアウトを確認する', '崩れている箇所を修正する'],
    done: 'スマホサイズで正常に表示される。',
    learningPoints: ['Tailwind CSS', 'レスポンシブデザイン', '表示確認'],
  },
  {
    number: 13,
    originalIssue: '#13 ESLintエラーを解消する',
    title: 'ESLintエラーを解消する',
    category: 'Quality',
    purpose: 'コード品質管理を学ぶ。',
    tasks: ['npm run lint を実行する', '発生したエラーを読む', 'コードを修正する'],
    done: 'lintが成功する。',
    learningPoints: ['ESLint', 'コード品質', '静的解析'],
  },
  {
    number: 14,
    originalIssue: '#14 TypeScriptの型を理解する',
    title: 'TypeScriptの型を理解する',
    category: 'Quality',
    purpose: 'TypeScriptの基本を学ぶ。',
    tasks: ['interfaceを作成する', 'propsへ型を付ける', 'anyを使わず実装する'],
    done: '必要な型定義が行われている。',
    learningPoints: ['interface', 'type', '型安全性'],
  },
  {
    number: 15,
    originalIssue: '#15 READMEをポートフォリオ仕様へ更新する',
    title: 'READMEをポートフォリオ仕様へ更新する',
    category: 'Portfolio',
    purpose: '成果物として第三者に説明できる状態を作る。',
    tasks: ['学習目的を書く', '使用技術を書く', '学んだこと、詰まったこと、今後の課題を書く'],
    done: '第三者が見ても学習内容が理解できる。',
    learningPoints: ['成果物作成', 'README', '言語化'],
  },
  {
    number: 16,
    originalIssue: '#16 ポートフォリオとして公開する',
    title: 'ポートフォリオとして公開する',
    category: 'Portfolio',
    purpose: '転職活動で提出できる成果物を完成させる。',
    tasks: ['READMEを整備する', '不要コードを削除する', 'スクリーンショットを追加する', 'GitHubで公開する'],
    done: '採用担当者へ提出できる状態になっている。',
    learningPoints: ['ポートフォリオ', 'エンジニア転職準備', '公開'],
  },
];

const featuredIssueNumbers: ReadonlyArray<number> = [5, 6, 7, 8, 9, 10, 11, 14];

const featuredIssues: ReadonlyArray<LearningIssue> = learningIssues.filter((issue) =>
  featuredIssueNumbers.includes(issue.number),
);

const beginnerTutorials: Readonly<Record<number, BeginnerTutorial | undefined>> = {
  5: {
    goal: 'トップページに表示されている文章を自分の言葉に変えて、保存するとブラウザ表示が変わることを体験する。',
    files: ['src/app/page.tsx'],
    createFiles: [],
    beforeStart: [
      'ターミナルで npm run dev を実行し、http://localhost:3000 を開く。',
      'VS Codeなどのエディタで src/app/page.tsx を開く。',
      '画面に表示されている文と、page.tsx の中の日本語がつながっていることを探す。',
    ],
    steps: [
      'src/app/page.tsx の h1 または p タグに書かれている文章を1つ選ぶ。',
      '選んだ文章を、自分の学習目的が伝わる短い文に変える。',
      'ファイルを保存する。',
      'ブラウザに戻り、ページが自動で更新されるか確認する。',
      '変わらない場合はブラウザを再読み込みする。',
    ],
    hintCode: `<h1 className="...">
  Next.jsを学ぶための練習サイト
</h1>

<p className="...">
  まずは文章を変えて、コードと画面のつながりを確認します。
</p>`,
    checkInBrowser: [
      'http://localhost:3000 を開く。',
      '変更した文章がトップページに表示されているか見る。',
      'エラー画面になった場合は、閉じタグや引用符が消えていないか page.tsx を確認する。',
    ],
    commonMistakes: [
      '日本語だけを変えるつもりで、<h1> や </h1> を消してしまう。',
      'className の引用符を消してしまい、画面がエラーになる。',
      '保存していないため、ブラウザに変更が反映されない。',
    ],
    completionChecklist: [
      'src/app/page.tsx を開けた。',
      '表示されている文章を1つ変更できた。',
      '保存後にブラウザで変更を確認できた。',
    ],
  },
  6: {
    goal: 'トップページに自己紹介セクションを追加し、JSXで新しい表示を増やす流れを覚える。',
    files: ['src/app/page.tsx'],
    createFiles: [],
    beforeStart: [
      'src/app/page.tsx を開く。',
      'return の中に <main> があり、その中に複数の <section> が並んでいることを確認する。',
      '追加する場所は、既存の section と section の間にする。',
    ],
    steps: [
      'どの section の下に自己紹介を入れるか決める。',
      '<section> を新しく追加する。',
      '中に h2、p、ul/li を使って名前、学習中の技術、将来の目標を書く。',
      'Tailwindの className で余白と背景色を付ける。',
      '保存してトップページで表示を確認する。',
    ],
    hintCode: `<section className="mx-auto max-w-6xl px-5 py-12">
  <h2 className="text-2xl font-black">自己紹介</h2>
  <p className="mt-3 text-slate-600">名前: ここに名前を書く</p>
  <ul className="mt-4 space-y-2">
    <li>学習中: Next.js</li>
    <li>目標: 自分でWebページを作れるようになる</li>
  </ul>
</section>`,
    checkInBrowser: [
      'http://localhost:3000 を開く。',
      '自己紹介という見出しが表示されているか確認する。',
      'スマホ幅でも文字が横にはみ出していないか確認する。',
    ],
    commonMistakes: [
      '<section> を return の外に書いてしまう。',
      '<li> を <ul> の外に置いてしまう。',
      'class ではなく、Reactでは className と書く必要がある。',
    ],
    completionChecklist: [
      '自己紹介セクションを追加できた。',
      '名前、学習中の技術、将来の目標を表示できた。',
      'ブラウザで表示を確認できた。',
    ],
  },
  7: {
    goal: 'Tailwind CSSのクラスを少し変えて、余白・文字サイズ・ボタンの見た目がどう変わるか体験する。',
    files: ['src/app/page.tsx'],
    createFiles: [],
    beforeStart: [
      'src/app/page.tsx を開く。',
      'className="..." と書かれている場所を探す。',
      'Tailwindは className の中に bg-white、px-5、text-lg のような短い指定を書くことを理解する。',
    ],
    steps: [
      'まず1つのボタンまたはカードを選ぶ。',
      'px-5 や py-3 の数字を変えて余白の違いを見る。',
      'text-sm、text-lg、text-2xl のような文字サイズを変える。',
      'bg-slate-950 や bg-emerald-50 のような背景色を変える。',
      '1回変えるたびに保存し、ブラウザで確認する。',
    ],
    hintCode: `className="rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white"

// 試す例
className="rounded-md bg-emerald-700 px-6 py-4 text-base font-bold text-white"`,
    checkInBrowser: [
      'http://localhost:3000 を開く。',
      '変えたボタンやカードの見た目が変化しているか確認する。',
      '変化が分からない場合は、別の className を変更していないか確認する。',
    ],
    commonMistakes: [
      'className 全体を消してしまい、見た目が大きく崩れる。',
      '存在しないクラス名を書いても見た目は変わらない。',
      '色を変えたつもりで text の色だけを変え、背景色は変わっていない。',
    ],
    completionChecklist: [
      'Tailwindのクラスを1つ以上変更できた。',
      '余白、文字サイズ、色のどれかの変化を確認できた。',
      '変更前後で何が変わったか説明できる。',
    ],
  },
  8: {
    goal: 'Profileコンポーネントを新しく作り、トップページから呼び出して表示する。',
    files: ['src/app/page.tsx'],
    createFiles: ['src/components/Profile.tsx'],
    beforeStart: [
      'src フォルダの中に components フォルダがなければ作る。',
      'components フォルダの中に Profile.tsx を作る。',
      'Reactではファイルを分けたら export と import が必要になることを覚える。',
    ],
    steps: [
      'src/components/Profile.tsx を作る。',
      'Profile という関数を作り、自己紹介のJSXを return する。',
      'Profile.tsx の最後で export default Profile または関数宣言に export default を付ける。',
      'src/app/page.tsx の一番上で Profile を import する。',
      'page.tsx の表示したい場所に <Profile /> を書く。',
    ],
    hintCode: `// src/components/Profile.tsx
export default function Profile() {
  return (
    <section className="rounded-lg bg-white p-6">
      <h2 className="text-xl font-black">プロフィール</h2>
      <p className="mt-2 text-slate-600">ここに自己紹介を書く</p>
    </section>
  );
}

// src/app/page.tsx の先頭付近
import Profile from '@/components/Profile';

// page.tsx の return の中
<Profile />`,
    checkInBrowser: [
      'http://localhost:3000 を開く。',
      'Profile.tsx に書いたプロフィールが表示されているか確認する。',
      '表示されない場合は import のパスと <Profile /> の場所を確認する。',
    ],
    commonMistakes: [
      'components フォルダを src の外に作ってしまう。',
      'export default を忘れて import できない。',
      '<Profile /> を return の外に書いてしまう。',
    ],
    completionChecklist: [
      'src/components/Profile.tsx を作成できた。',
      'page.tsx から Profile を import できた。',
      'ブラウザにプロフィールが表示された。',
    ],
  },
  9: {
    goal: '親ページからProfileコンポーネントへpropsを渡し、部品を再利用しやすくする。',
    files: ['src/components/Profile.tsx', 'src/app/page.tsx'],
    createFiles: [],
    beforeStart: [
      'issue #8 の Profile.tsx がある状態にする。',
      'propsは「親から子へ渡すデータ」だと理解する。',
      'まずは name、age、hobby の3つだけを渡す。',
    ],
    steps: [
      'Profile.tsx に props の型を作る。',
      'Profile関数の引数で name、age、hobby を受け取る。',
      'JSXの中で {name} のように表示する。',
      'page.tsx の <Profile /> に name、age、hobby を書いて渡す。',
      '値を変えて、画面も変わるか確認する。',
    ],
    hintCode: `interface ProfileProps {
  name: string;
  age: number;
  hobby: string;
}

export default function Profile({ name, age, hobby }: ProfileProps) {
  return <p>{name} / {age}歳 / 趣味: {hobby}</p>;
}

<Profile name="山田" age={25} hobby="Web制作" />`,
    checkInBrowser: [
      'http://localhost:3000 を開く。',
      'page.tsx で渡した名前、年齢、趣味が表示されているか確認する。',
      'age は文字列ではなく {25} のように波括弧で渡す。',
    ],
    commonMistakes: [
      'age="25" と書いて文字列として渡してしまう。',
      'props名を name と書いたのに、受け取る側で userName にしてしまう。',
      'interface を作ったが、関数の引数に型を付け忘れる。',
    ],
    completionChecklist: [
      'ProfileProps を作成できた。',
      'page.tsx からpropsを渡せた。',
      '渡した値が画面に表示された。',
    ],
  },
  10: {
    goal: 'お問い合わせフォーム用のページまたはコンポーネントを作り、入力内容をstateで管理する。',
    files: ['src/app/tutorials/contact-form/page.tsx または src/app/page.tsx'],
    createFiles: [],
    beforeStart: [
      '入力内容を画面側で覚えるには useState を使う。',
      'useState や onChange を使うページの先頭には \'use client\' が必要。',
      'まずはバリデーションを入れず、入力できる状態を作る。',
    ],
    steps: [
      'ファイルの1行目に \'use client\'; を書く。',
      'react から useState を import する。',
      'name、email、message のstateを作る。',
      'input と textarea を用意する。',
      'value と onChange をそれぞれのstateにつなぐ。',
    ],
    hintCode: `'use client';

import { useState } from 'react';

const [name, setName] = useState('');

<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>`,
    checkInBrowser: [
      'http://localhost:3000/tutorials/contact-form を開く。',
      '名前、メールアドレス、メッセージを入力できるか確認する。',
      '入力中にエラーが出る場合は \'use client\' と useState の import を確認する。',
    ],
    commonMistakes: [
      '\'use client\' を書かずに useState を使ってしまう。',
      'onChange の中で setName ではなく name を直接変えようとする。',
      'textarea に value と onChange を付け忘れる。',
    ],
    completionChecklist: [
      'useStateをimportできた。',
      '3つの入力欄を作成できた。',
      '入力した文字が消えずに表示される。',
    ],
  },
  11: {
    goal: 'フォーム送信時に未入力とメール形式を確認し、エラー文を画面に表示する。',
    files: ['src/app/tutorials/contact-form/page.tsx または フォームを作ったファイル'],
    createFiles: [],
    beforeStart: [
      'issue #10 のフォームが入力できる状態になっている。',
      'エラー文を表示するために error というstateを追加する。',
      'チェックは送信ボタンを押したときに行う。',
    ],
    steps: [
      'error 用の useState を追加する。',
      'handleSubmit 関数を作る。',
      '名前、メール、メッセージのどれかが空なら error に文を入れる。',
      'メールに @ が含まれていなければ error に文を入れる。',
      'エラーがなければ error を空にする。',
      'error があるときだけ画面に表示する。',
    ],
    hintCode: `const [error, setError] = useState('');

function handleSubmit() {
  if (!name || !email || !message) {
    setError('すべて入力してください');
    return;
  }

  if (!email.includes('@')) {
    setError('メールアドレスの形式を確認してください');
    return;
  }

  setError('');
}

{error && <p className="text-rose-700">{error}</p>}`,
    checkInBrowser: [
      '空欄のまま送信し、未入力エラーが出るか確認する。',
      '@ がないメールアドレスで送信し、形式エラーが出るか確認する。',
      '正しい入力にして送信し、エラーが消えるか確認する。',
    ],
    commonMistakes: [
      'return を書き忘れて、複数のチェックが続けて実行される。',
      'error を表示するJSXを書いていないため、stateは変わっても画面に出ない。',
      'email.includes("@") の @ を引用符で囲み忘れる。',
    ],
    completionChecklist: [
      '未入力チェックが動く。',
      'メール形式チェックが動く。',
      'エラー文が画面に表示される。',
    ],
  },
  12: {
    goal: 'Tailwindのレスポンシブ指定を使い、スマホとPCの両方で読みやすいレイアウトにする。',
    files: ['src/app/page.tsx', 'src/app/tutorials/page.tsx'],
    createFiles: [],
    beforeStart: [
      'ブラウザの開発者ツールでスマホ幅表示に切り替える。',
      'Tailwindでは sm:、md:、lg: を付けると画面幅ごとに指定を変えられる。',
      'まずは横並びになっている部分を探す。',
    ],
    steps: [
      'grid や flex が使われている className を探す。',
      'スマホでは1列、PCでは2列以上になるように md:grid-cols-2 などを使う。',
      '文字が詰まっている場所に leading-7 や gap-4 を足す。',
      'ボタンが横にはみ出す場合は flex-col sm:flex-row を使う。',
      'スマホ幅とPC幅の両方で確認する。',
    ],
    hintCode: `className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"

className="flex flex-col gap-3 sm:flex-row"

className="text-3xl sm:text-4xl"`,
    checkInBrowser: [
      'http://localhost:3000 を開く。',
      '幅を狭くして、カードやボタンがはみ出していないか確認する。',
      '幅を広くして、PCでは余白が不自然に大きすぎないか確認する。',
    ],
    commonMistakes: [
      '最初から grid-cols-4 と書いてスマホでも4列になってしまう。',
      '長い文字があるのに横幅を固定しすぎる。',
      'sm: と md: の意味を混同し、思った幅で切り替わらない。',
    ],
    completionChecklist: [
      'スマホ幅で1列表示になっている。',
      'PC幅では複数列で見やすい。',
      'テキストやボタンが横にはみ出していない。',
    ],
  },
  13: {
    goal: 'lintを実行し、エラー文を読んでコード品質を直す流れを覚える。',
    files: ['エラーに表示されたファイル'],
    createFiles: [],
    beforeStart: [
      'ターミナルを開く。',
      'プロジェクトのルートで npm run lint を実行する。',
      'エラーが出たら、ファイル名と行番号を読む。',
    ],
    steps: [
      'npm run lint を実行する。',
      '表示されたファイルパスを開く。',
      '行番号付近を見て、未使用の変数や書き方の問題を探す。',
      '1つ修正したらもう一度 npm run lint を実行する。',
      'エラーが0になるまで繰り返す。',
    ],
    hintCode: `// よくある例: 使っていない変数は消す
const unusedText = '使っていない';

// JSXでは class ではなく className
<div className="p-4">内容</div>`,
    checkInBrowser: [
      'lint修正後も npm run dev の画面が表示されるか確認する。',
      '見た目が変わる修正をした場合は、対象ページをブラウザで確認する。',
    ],
    commonMistakes: [
      'エラー文の最初だけ見て、ファイルパスを見落とす。',
      '自動修正できないエラーを npm run lint だけで直そうとする。',
      '使っているつもりの変数が実際には画面で使われていない。',
    ],
    completionChecklist: [
      'npm run lint を実行できた。',
      'エラーのファイルパスと行番号を読めた。',
      'lintが成功する状態にできた。',
    ],
  },
  14: {
    goal: 'propsやデータにTypeScriptの型を付け、何を渡せるかをコードで分かるようにする。',
    files: ['src/components/Profile.tsx', 'src/data/learningIssues.ts'],
    createFiles: [],
    beforeStart: [
      '型は「このデータには何が入るか」を説明するもの。',
      'まずは props の型から始める。',
      'any は何でも入るため、初心者の練習では使わない。',
    ],
    steps: [
      'Profile.tsx に interface ProfileProps を作る。',
      'name、age、hobby の型を書く。',
      'Profile関数の引数に ProfileProps を付ける。',
      'page.tsx から違う型を渡すとエラーになることを確認する。',
      'npm run type-check で型チェックを実行する。',
    ],
    hintCode: `interface ProfileProps {
  name: string;
  age: number;
  hobby: string;
}

export default function Profile({ name, age, hobby }: ProfileProps) {
  return <p>{name} / {age} / {hobby}</p>;
}`,
    checkInBrowser: [
      'http://localhost:3000 を開き、表示が壊れていないか確認する。',
      'ターミナルで npm run type-check を実行し、型エラーがないか確認する。',
    ],
    commonMistakes: [
      'number の値を "25" のような文字列で渡してしまう。',
      'interface は作ったが、関数に型を付けていない。',
      'エラーを消すために any を使ってしまう。',
    ],
    completionChecklist: [
      'interfaceを作成できた。',
      'propsへ型を付けられた。',
      'npm run type-check が成功する。',
    ],
  },
};

/**
 * チュートリアル本文が存在する課題番号の一覧です。
 *
 * @remarks
 * 静的ルート生成、チュートリアル一覧、前後ナビゲーションで共有します。
 * `beginnerTutorials` のキーから生成するため、詳細ページを追加するときは本文データを増やすだけで反映されます。
 */
export const tutorialIssueNumbers: ReadonlyArray<TutorialIssueNumber> = Object.keys(beginnerTutorials).map(Number);

/**
 * トップページで最初に見せる代表的な課題を取得します。
 *
 * @returns トップページの注目チュートリアル枠に表示する課題一覧。
 */
export function getFeaturedIssues(): ReadonlyArray<LearningIssue> {
  return featuredIssues;
}

/**
 * チュートリアル本文が用意されている課題だけを取得します。
 *
 * @returns `learningIssues` の表示順を保った、詳細ページを開ける課題一覧。
 */
export function getTutorialIssues(): ReadonlyArray<LearningIssue> {
  return learningIssues.filter((issue) => tutorialIssueNumbers.includes(issue.number));
}

/**
 * issue番号からロードマップ上の課題データを取得します。
 *
 * @param issueNumber - 探したいGitHub issue番号。チュートリアル番号と同じ値を使います。
 * @returns 対応する課題が存在する場合は課題データ、存在しない場合は `undefined`。
 */
export function getIssueByNumber(issueNumber: TutorialIssueNumber): LearningIssue | undefined {
  return learningIssues.find((issue) => issue.number === issueNumber);
}

/**
 * issue番号から詳細ページ用のチュートリアル本文を取得します。
 *
 * @param issueNumber - チュートリアル本文を探すissue番号。
 * @returns 本文データが存在する場合はチュートリアル、未対応の番号では `undefined`。
 */
export function getTutorialByIssueNumber(issueNumber: TutorialIssueNumber): BeginnerTutorial | undefined {
  return beginnerTutorials[issueNumber];
}

/**
 * URL slugからチュートリアル課題番号を取り出します。
 *
 * @param issueSlug - `issue-5` のような詳細ページ用slug。
 * @returns slugが期待形式なら課題番号、形式が違う場合は `null`。
 */
export function parseIssueSlug(issueSlug: string): TutorialIssueNumber | null {
  const match = /^issue-(\d+)$/.exec(issueSlug);
  const issueNumber = match?.[1];

  return issueNumber ? Number(issueNumber) : null;
}

/**
 * 現在の課題番号を基準に、チュートリアル間の前後リンクを計算します。
 *
 * @param issueNumber - 現在表示しているチュートリアル課題番号。
 * @returns 前後の課題番号。対象番号が一覧にない場合や端の課題では、該当方向に `null` を入れます。
 */
export function getTutorialNavigation(issueNumber: TutorialIssueNumber): TutorialNavigation {
  const currentIndex = tutorialIssueNumbers.indexOf(issueNumber);

  if (currentIndex === -1) {
    return {
      previousIssue: null,
      nextIssue: null,
    };
  }

  return {
    previousIssue: tutorialIssueNumbers[currentIndex - 1] ?? null,
    nextIssue: tutorialIssueNumbers[currentIndex + 1] ?? null,
  };
}
