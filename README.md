# What's Going On in the FE/BE?

## Setup

Clone this repo.

The rest of this setup assumes you have Homebrew, Node, and npm installed.

### Install Ruby

The Backend repo uses Ruby 2.7.2, so if you haven't already you will need to install a Ruby version manager and install Ruby 2.7.2. Follow the steps under "Install rbenv" in [these instructions](https://mod0.turing.edu/computer-setup#install-rbenv-back-end-students-only). This will guide you through installing rbenv as well as Ruby 2.7.2.

### Get the BE running on localhost:3001

* Navigate to the be directory: `cd be`
* Install dependencies: `bundle install`
    * If you get an error that Bundler is not installed, install it with `gem install bundler`
* Set up the database: `rails db:{drop,create,migrate,seed}`
* run the server with `rails server -p 3001`

After you run the server you should see that it is waiting for requests. Open a new Terminal window to continue with setup.

### Get the FE running on localhost:3000

* Navigate to the fe directory: `cd fe`
* Install dependencies: `npm install`
* Run the app: `npm start`
* visit `localhost:3000` in your browser

If everything is set up properly you should see a welcome message.
