# What's Going On in the FE/BE?

The goal of this activity is to leverage our collective FE and BE knowledge to explain how this application works. At the end of this activity you should have more understanding of how the other side of the stack functions as well as a diagram that illustrates how information flows between FE and BE.

## Learning Goals

* Understand how information flows between the FE and BE
* Get exposure to what the other program has been working on
* Understand common misconceptions and pain points experienced by FE and BE devs
* Meet students in the other program

## Setup

Clone this repo and `cd` into it.

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

## Activity

In small groups, designate one person to be the screen sharer.

1. FE students, explain to the group what happens when you visit `localhost:3000` in your browser. Start with `index.html` and move to `index.js`. From there, trace all the way through the code up to the point where a request to the BE is made.
1. BE, explain to the group what happens when the app receives the request. Trace all the way through the code up to the point that a response is sent back to the FE.
1. FE, explain what happens once the FE receives the response.
1. Once you are finished exploring the code, draw a diagram that illustrates the entire process.

**Extension**

If you have time, answer these questions

* Is there any technical vocab words that the developers in the other program use that you don't understand? If so, try to help each other understand the meaning of those words.
* How could you get the app to display one of the other messages found in `seeds.rb`?
* What’s the difference between a database and an api? Is there an analogy that can help describe this?
* What are frustrations that BE developers might experience when working with FE developers (for example, building an api/database based on specific requests from the FE team)?
* What are frustrations that FE developers might experience when using technology built by BE developers (for example, accessing an api)?
