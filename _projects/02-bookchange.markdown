---
layout: project
title: Bookchange
slug: bookchange
img: bookchange
demo: http://bookchange.herokuapp.com
repository: http://github.com/rbndickson/bookchange
date: 2016-01-01 10:10:10 +0100
summary: A Book Exchange with a Double Opt-in System
technologies:
  - Ruby on Rails
platform: web
---
A book exchange built to solidify skills learned when studying Ruby on Rails, RSpec and using external APIs.

Books are exchanged using a double opt-in system. Users add unlimited books to their Wantlist. When users want one or more of each other's books the users are notified of the possible exchange (See [here](http://bookchange.herokuapp.com/learnmore) for further info).

The users then choose which book they would like to receive and add the address for it to be sent. When they receive the book they update the exchange status and provide feedback.

## Features:

🔑 Authentication & password reset  
👤 User profiles  
📚 User library  
➕ Add books using ISBN with <a href="https://developers.google.com/books/docs/v1/using">Google Books</a> & <a href="http://xisbn.worldcat.org/xisbnadmin/doc/api.htm">Worldcat</a> APIs  
🔍 Search  
📗 User Wantlist  
↔️ User Wantlist matching  
📦 Exchange processing  
🗣 User feedback  
🔔 Notifications  
📱 Responsive design  
📝 Unit and feature tests  
🖥 Development, Staging and Production Environments  

---

## Built With:

Ruby on Rails, PostgreSQL, RSpec, Capybara, HAML, SASS, Bootstrap, Elasticsearch, Puma, Sidekiq, CircleCI
