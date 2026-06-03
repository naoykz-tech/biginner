# Biginner - Enterprise Website

TypeScript + Next.js で構築した企業サイトテンプレート

## 🚀 クイックスタート

### Docker Compose で起動

```bash
# コンテナのビルド
docker compose build

# 開発サーバーの起動
docker compose up
```

ブラウザで http://localhost:3000 にアクセスしてください。

### ローカルでの起動（Node.js インストール済みの場合）

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番環境での実行
npm run start
```

## 📁 プロジェクト構成

```
biginner/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # ルートレイアウト
│   │   └── page.tsx         # ホームページ
│   └── styles/
│       └── globals.css      # グローバルスタイル
├── Dockerfile               # Docker 設定
├── docker-compose.yml       # Docker Compose 設定
├── package.json             # 依存関係管理
├── tsconfig.json            # TypeScript 設定
├── next.config.js           # Next.js 設定
└── README.md               # このファイル
```

## 📝 スクリプトコマンド

```bash
# 開発サーバーを起動
npm run dev

# ビルド（本番用）
npm run build

# 本番サーバーを起動
npm run start

# ESLint でコード検査
npm run lint

# 型チェック
npm run type-check
```

## 🎨 カスタマイズ

### ホームページを編集
`src/app/page.tsx` でホームページのコンテンツを編集できます。

### スタイルを編集
`src/styles/globals.css` でグローバルスタイルを編集できます。

### メタデータを変更
`src/app/layout.tsx` でサイトタイトルなどのメタデータを編集できます。

## 🛠 技術スタック

- **Next.js 15** - React フレームワーク
- **TypeScript** - 型安全な開発
- **React 19** - UI ライブラリ
- **Node.js 22** - ランタイム環境
- **Docker** - コンテナ化

## 🔧 トラブルシューティング

### ポート 3000 が既に使用されている場合

```bash
# docker-compose.yml のポートマッピングを変更
# ports:
#   - "3001:3000"  # 3001 に変更
```

### 依存関係の再インストール

```bash
docker compose exec app npm install
```

### キャッシュをクリア

```bash
docker compose down -v
docker compose build --no-cache
```

## 📚 参考リンク

- [Next.js ドキュメント](https://nextjs.org/docs)
- [TypeScript ドキュメント](https://www.typescriptlang.org/docs/)
- [React ドキュメント](https://react.dev)

## 📄 ライセンス

MIT License
0603　なんとなくの流れだけは理解できた　今後は用語や仕組みを追いかけないと応用が一切できないことになる。