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
A book exchange built to solidify skills learned when studying Ruby on Rails, RSpec and using external APIs.

Books are exchanged using a double opt-in system. Users add unlimited books to their Wantlist. When users want one or more of each other's books the users are notified of the possible exchange (See [here](http://bookchange.herokuapp.com/learnmore) for further info).

The users then choose which book they would like to receive and add the address for it to be sent. When they receive the book they update the exchange status and provide feedback.

## 機能

🔑 認証とパスワードリセット  
👤 ユーザープロフィール  
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

Ruby on Rails, PostgreSQL, RSpec, Capybara, HAML, SASS, Bootstrap, Elasticsearch, Puma, Sidekiq, CircleCI
