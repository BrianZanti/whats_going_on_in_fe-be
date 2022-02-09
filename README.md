# README

## Setup

This setup assumes you have homebrew, node, rails, and npm installed

* Clone this repo

### Get the BE running on localhost:3001

* cd into `be`
* run `rails db:{create,migrate,seed}`
* run the server with `rails server -p 3001`

### Get the FE running on localhost:3000

* cd into `fe`
* run `npm i`
* run `npm start`
* visit `localhost:3000` in your browser
