# Guthub Lookup #

#### Code review application to practice JS with npm packages and bower components, October 2016

#### By April Peng

## Description ##

This application allows users to look up a github username and view a list of that user's public repositories as well as descriptions of their projects.

https://hey-ape.github.io/js-cr1

## User Setup/Installation Instructions ##

* Clone git repository
* Using the command line, navigate to the project's root directory
* Install dependencies by running npm install and bower install
* Initiate 'gulp serve' within the terminal to build the application and initiate the server to view it within a browser at the address http://localhost:3000

## Specifications ##
* Search input returns relevant information relating to a specific github user.
  * input: 'helloapro'
  * output: github account information from the github API

* Search input returns a list of public repositories and descriptions of those repositories relating to a specific github user.
  * input: 'helloapro'
  * output: 'introCodeReview2 - survey to determine vacation destination, php-w1d3-tamagotchi - Tamagotchi exercise!', etc...

## Known Bugs ##

No catch-all to replace 'null' results for user's real name, company, location, and website on individual user view.

## Languages/Technologies Used ##

* Node
* Bower
* Sass
* JavaScript

### License ###

*This application is licensed under the MIT license.*

Copyright (c) 2016 April Peng
