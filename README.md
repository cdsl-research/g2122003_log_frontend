# 書籍レビューサイト　フロントエンドのリポジトリ

バックエンド
https://github.com/cdsl-research/g2122003_log

Reactにより作成されており、Dockerfileでコンテナ化されます。

# ローカルでの実行方法

## npmを使用して実行
### 実行

0.npmをインストールしておく
1.githubからクローンする。

2.以下のコマンドを実行
```
cd g2122003_log_frontend 
npm install
npm start
```

### 終了
ctrl+C

## コンテナを使用して実行(ビルドまでして確認したい場合)
### 実行

0. dockerをインストールしておく
1.githubからクローンする。

2.以下のコマンドを実行
```
cd g2122003_log_frontend 
docker-compose up
```

3.ブラウザからlocalhostにアクセス

### 終了
```
docker-compose down
```

# Actionsによって作成されたコンテナ
https://hub.docker.com/r/tasyuminahito/g2122003_log_frontend
