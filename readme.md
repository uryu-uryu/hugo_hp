Hugo を使用した。
テーマ: Blowfish (https://blowfish.page/ja/)

## 記事の追加方法

このサイトでは **Page Bundles** 形式で記事を管理しています。

### 1. 新規記事の作成
以下のコマンドを実行すると、新しい記事のディレクトリと本文ファイル（`index.md`）が作成されます。

```bash
hugo new content/posts/記事のディレクトリ名/index.md
```

### 2. 記事の編集
作成された `content/posts/記事のディレクトリ名/index.md` を編集します。
上部の設定（Front Matter）は以下を参考にしてください。

```yaml
---
title: "記事のタイトル"
date: 2025-01-01T00:00:00+09:00
draft: false
categories: ["お知らせ"]
description: "記事の概要"
featured: "featured.png"
---
```

### 3. 画像の配置
サムネイル画像（`featured.png`）や記事内で使う画像は、その記事のディレクトリ内に直接配置してください。

### 4. プレビュー
以下のコマンドでローカルプレビューを実行できます。

```bash
hugo server -D
```