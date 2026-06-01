# Biginner

Docker環境を使用した開発環境のセットアップ

## セットアップ手順

### 前提条件
- Docker がインストールされていること
- Docker Compose がインストールされていること

### 環境構築

#### 方法1: Docker Compose を使う（推奨）

```bash
# コンテナのビルド
docker-compose build

# コンテナの起動
docker-compose up -d

# コンテナに入る
docker-compose exec app bash

# コンテナの停止
docker-compose down
```

#### 方法2: Docker コマンドで直接実行

```bash
# イメージのビルド
docker build -t biginner:latest .

# コンテナの起動
docker run -it -v $(pwd):/workspace --name biginner-dev biginner:latest
```

## よくあるコマンド

```bash
# コンテナ内に入る
docker-compose exec app bash

# コンテナのログを確認
docker-compose logs -f

# 実行中のコンテナを一覧表示
docker-compose ps

# コンテナを完全に削除
docker-compose down -v
```

## カスタマイズ

Docker環境をカスタマイズする場合:

1. **Dockerfile** - ベースイメージやインストールするツールを編集
2. **docker-compose.yml** - ポート、ボリューム、環境変数を編集
3. `.env` ファイルを作成して環境変数を設定

## トラブルシューティング

### ポートが既に使用されている場合
`docker-compose.yml` でポートマッピングを変更してください。

### パーミッションエラーが発生する場合
```bash
sudo chown -R $USER:$USER .
```
