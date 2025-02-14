# PingCRM on Rails

A demo application built with Ruby on Rails and Vue.js to illustrate how **[Inertia.js](https://inertiajs.com/)** works.

![Screenshot](screenshot.jpg)

This is a port of the [original PingCRM written in Laravel/PHP](https://github.com/inertiajs/pingcrm) to Ruby on Rails. Now it's possible to dive into the beautiful world of **Inertia.js** without having to install PHP ;-)

There is a hosted installation of this demo available at https://pingcrm.ledermann.dev. Login with:

- **Username:** johndoe@example.com
- **Password:** secret

Or, you can deploy your own installation to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Again you login with:

- **Username:** johndoe@example.com
- **Password:** secret

## Installation

Clone the repo locally:

```
git clone https://github.com/ledermann/pingcrm.git
```

Setup (install dependencies, create and seed database):

```
cd pingcrm
bin/setup
```

Start it:

```
foreman start
```

You're ready to go! Visit PingCRM in your browser (http://localhost:3000), and login with:

- **Username:** johndoe@example.com
- **Password:** secret

## Running tests

To run the PingCRM tests, run:

```
rails test:system
```

## Requirements

- Ruby 2.6
- PostgreSQL

## Credits

- Original work by Jonathan Reinink (@reinink) and contributors
- Port to Ruby on Rails by Georg Ledermann (@ledermann)
