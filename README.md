# Biginner

Biginner は、GitHub issue を小さな学習課題として進めながら Next.js、React、TypeScript、GitHub の基本を学ぶためのサイトです。

トップページ、ロードマップ、チュートリアル一覧、個別チュートリアル、ポートフォリオ向けページを持つ Next.js アプリとして構成されています。

## 技術スタック

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Node.js 22
- Docker / Docker Compose

## 主なページ

| パス | 内容 |
| --- | --- |
| `/` | 学習ロードマップの概要と注目チュートリアル |
| `/roadmap` | 学習課題の流れ |
| `/tutorials` | チュートリアル一覧 |
| `/tutorials/issue-{number}` | issue 番号に対応した個別チュートリアル |
| `/tutorials/contact-form` | フォーム学習用ページ |
| `/portfolio` | 成果物として見せるためのページ |

## ローカルで起動する

Node.js 22 系を使います。`nvm` を使っている場合は、リポジトリのルートで次のように実行します。

```bash
nvm use
npm ci
npm run dev
```

`.nvmrc` と `.node-version` に Node.js 22 を指定しています。違うバージョンで `npm ci` すると失敗する場合があります。

ブラウザで http://localhost:3000 を開きます。

本番ビルドを確認する場合:

```bash
npm run build
npm run start
```

## Docker Compose で起動する

```bash
docker compose build
docker compose up
```

ブラウザで http://localhost:3000 を開きます。

依存関係をコンテナ内で入れ直す場合:

```bash
docker compose exec app npm ci
```

キャッシュやボリュームを含めて作り直す場合:

```bash
docker compose down -v
docker compose build --no-cache
```

## Dev Containers で開発する

VS Code の Dev Containers を使う場合は、リポジトリを開いて「Reopen in Container」を実行します。コンテナ内では Node.js 22 と npm の依存関係がセットアップされ、`node` ユーザーで作業します。

## プロジェクト構成

```text
biginner/
├── src/
│   ├── app/             # Next.js App Router のルート
│   ├── components/      # 再利用する UI コンポーネント
│   ├── data/            # 学習課題データと取得関数
│   ├── styles/          # グローバル CSS
│   └── types/           # 共有型定義
├── Dockerfile
├── docker-compose.yml
├── .devcontainer/       # VS Code Dev Containers 用設定
├── .editorconfig        # エディタ共通の整形設定
├── .gitattributes       # 改行コードとバイナリ扱いの設定
├── .nvmrc               # Node.js バージョン指定
├── package.json
├── tsconfig.json
└── README.md
```

## 開発ルールのメモ

- `src/app/**/page.tsx` は薄く保ち、ルート固有の処理だけを書く。
- 表示用の部品は `src/components/**` に分ける。
- 学習課題のデータや検索関数は `src/data/**` に置く。
- 共有する型は `src/types/**` に置く。
- TypeScript では `any` を使わず、props やドメインデータは readonly を基本にする。

詳しいルールは `AGENTS.md` を参照してください。

## よく使うコマンド

```bash
npm run dev
npm run type-check
npm run lint
npm run build
npm run check
npx -y react-doctor@latest . --verbose
```

## WSL で権限エラーが出る場合

`sudo git clone`、`sudo npm install`、Docker 実行後の生成物などが原因で、リポジトリ内のファイルが `root` 所有になることがあります。

通常ユーザーで編集や `npm ci` ができない場合は、リポジトリのルートで所有者を現在のユーザーに戻してください。

```bash
sudo chown -R "$USER:$USER" .
```

確認:

```bash
ls -la
```

Git はファイル所有者を管理しないため、この権限問題は push / pull では共有されません。別の環境で同じ症状が出た場合は、その環境の作業ディレクトリの所有者を確認してください。

## トラブルシューティング

### ポート 3000 がすでに使われている

`docker-compose.yml` のポート設定を変更します。

```yaml
ports:
  - "3001:3000"
```

この場合は http://localhost:3001 を開きます。

### 依存関係を入れ直したい

ローカル環境では以下を実行します。

```bash
rm -rf node_modules
npm ci
```

Docker 環境では以下を実行します。

```bash
docker compose down -v
docker compose build --no-cache
```

## 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 学習メモ

- 0603 なんとなくの流れだけは理解できた 今後は用語や仕組みを追いかけないと応用が一切できないことになる。
- 0606 プルリクエストを作成しただけ

## ライセンス

MIT License
