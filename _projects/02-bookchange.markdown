---
layout: project
title: Bookchange
slug: bookchange
img: bookchange
demo: http://bookchange.herokuapp.com
repository: http://github.com/rbndickson/bookchange
date: 2016-01-01 10:10:10 +0100
categories: Rails Rspec APIs TDD
platform: web
features:
  - Authentication & password reset
  - User profiles
  - User library
  - Add books using ISBN with <a href="https://developers.google.com/books/docs/v1/using">Google Books</a> & <a href="http://xisbn.worldcat.org/xisbnadmin/doc/api.htm">Worldcat</a> APIs
  - Search
  - User Wantlist
  - User Wantlist matching
  - Exchange processing
  - User feedback
  - Notifications
  - Responsive design
  - Unit and feature tests
  - Development, Staging and Production Environments
technologies:
  - Rails
  - RSpec
  - Capybara
  - VCR
  - PostgreSQL
  - HAML
  - SASS
  - Bootstrap
  - Elasticsearch
  - Puma
  - Sidekiq
  - Mailgun
  - CircleCI
  - Heroku
---
A book exchange built to practice TDD, RSpec, using external APIs and Continuous Integration.
<br><br>
Books are exchanged using a double opt-in system. Users add unlimited books to their Wantlist. When 2 users want each other's books an exchange is suggested. This eliminates the need for users to request or decline exchanges.

See [here](http://bookchange.herokuapp.com/learnmore) for further explanation of the system.
