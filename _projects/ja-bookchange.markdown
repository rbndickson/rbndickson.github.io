---
layout: project
lang: ja
title: Bookchange
slug: ja-bookchange
img: bookchange
demo: http://bookchange.herokuapp.com
repository: http://github.com/rbndickson/bookchange
date: 2016-01-01 10:10:10 +0100
summary: 図書交換のWebアプリケーション
technologies:
  - Ruby on Rails
platform: web
---
Ruby on Railsで作られた本の交換サイトです。

ユーザー同士の欲しい本がマッチしたら、お互いにお知らせが届きます。

そのあと、お互いが相手の本のリストの中から一冊だけ本を選びます。そして、お互いの欲しい本を送り合います。
本が手元に来たら、交換し合った本のステイタスのアップデートをして、相手にフィードバックを書きます。

[英語で詳しく説明](http://bookchange.herokuapp.com/learnmore)

## 機能

🔑 認証とパスワードリセット  
👤 ユーザープロファイル  
📚 ユーザーライブラリ  
➕ ISBN番号で本を検索（<a href="https://developers.google.com/books/docs/v1/using">Google Books</a>と<a href="http://xisbn.worldcat.org/xisbnadmin/doc/api.htm">Worldcat</a>のAPI）  
🔍 検索  
📗 ユーザーのほしい物リスト  
↔️ ユーザーのほしい物リストで本を交換するマッチ  
📦 本交換  
🗣 ユーザーフィードバック  
🔔 お知らせ  
📱 レスポンシブウェブデザイン  
📝 単体テストと受入試験  
🖥 プロダクション・ステージング・プロダクション環境  

---

## 利用技術

- Ruby on Rails
- PostgreSQL
- RSpec
- Capybara
- HAML
- SASS
- Bootstrap
- Elasticsearch
- Puma
- Sidekiq
- CircleCI
