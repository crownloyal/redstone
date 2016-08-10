# Ember Redstone Project

_Once upon a time..._
_Redmine is a ugly mostrum from ancient times. A king seeked out for brave code warriors who who bring piece to the land and the people. The knights forged a sword made from purest red stone._

Redstone provides real-time analytical models for Mozy Redmine activity. Based on Redmine's current reporting and analysis capabilities stakeholders can not *easily* track activity patterns and based on external variables.

Therefore we developed a user-facing web app which pulls Redmine's data and manages it by dates. You are able to look for certain tags and combine them to create custom graphs.

## Prerequisites

You will need the following things properly installed on your computer to collaborate to this project.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

### Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`


## Workflow ##

Use the dashboard to search for projects, error messages, subjects or ticket numbers.

The tickets matching your search query will influence the dashboard graph. Select save to push the found information into the store and combine your current findings with other queries.

The authentication is needed so we can store your favourite queries on the server side.

## What is Ember.js? ##

Ember.js or simply Ember is a Javascript MVC framework, delivering a "Convention over configuration" approach for what they call "ambitious web apps".

Sure when you start up a new app, you need to consider a few things; basically you need to architect from the ground up - how do you manage your models, how will the data routing work out? Lot's of questions!
Ember jumps in right here and already solves you all those problems people have seen already hundereds of times. Instead it gives you certain patterns which, once learned, turn out to be powerful so you can focus on what your app needs to deliver.

If you want to read an ingenious sales pitch - have a look on [http://brewhouse.io/blog/2015/05/13/emberjs-an-antidote-to-your-hype-fatigue.html"](Brewhouse's blog) which gives you an in-depth look into the problems we face on a day-to-day basis as a Javascript engineer.

### Where does the data come from? ###
The data is coming from the only source of truth - the production REDMINE database itself. It exposes a REST API which we can use to get *live* data, yes you are seeing this right, the data is live.

## Changelog ###

##### March 10 2016 #####
_EOD commit : c302fb7_
- deprecated embers-select; reverted to native HTML
- changed graph to only hold ticket_start information for now
- updated mirage
- models are now slightly more explicit
- increased Google font loading times
- about actually talks about itself now

##### March 09 2016 #####
_EOD commit : 3323081_
- added embers-select for dropdown selections
- added drop-downs to projects
- updated read
- updated about with current changelog
- fiddled around with the day array calculator
- added custom fonts

##### March 08 2016 #####
_EOD commit : 1c3072f_
- added ember-simple-auth to manage user authentication
- injecting session into application controller
- added jsonp callback to adapter
- using moments to render date array
- sacrificed card text overflow for pretty animations

##### March 07 2016 #####
_EOD commit : 2a0a1c9_
- added readme.md
- figured model enumerables to parse through model data

##### March 04 2016 #####
_EOD commit : dffcdcf_
- updated to ember 2.4.0
- added journal as it's own model
- linking based on last commit works flawless
- introduced bug as I am looking for nested properties with @each to get my journals [test only pass as 55/61]
- started implementing project graph

##### March 03 2016 #####
_EOD commit : 4df0e4f_
- fixed dependencies
- fixed controller model setups
- updated today's tickets in mirage
- masonry layout for cards implemented
- dashboard and project pages transferred to masonry
- card template adapted to masonry
- adjusted masonry for Firefox
- journals have their own model

##### March 02 2016 #####
_EOD commit : c095f93_
- function now returning model results

##### March 01 2016 #####
_EOD commit : e3a9099_
- unused packages removed
- search-box component added
- search working and only dependent on controller now
- search-box pretty, needs a little fix
- updated some transition styles
- updated dashboard filter

##### February 29 2016 #####
_EOD commit : c155f46_
- found jsonp documentation
https://redmine.mozy.lab.emc.com//issues.json?limit=100&key=3b99b481e065d2de907ed09a1ec98b3826a05575&callback=redstone will do it // needs to be enabled by Tyler Peters

- overflow:hidden for cards
- added custom fields to issue model
- added custom field serializer

##### February 28 2016 #####
_EOD commit : f5a8bo5_
- added project serializer for parent relationship
- added parent attribute to project model
- projects template show parent project if it exists

- index controller knows about search
- changed issue controller to look for content instead of model to avoid confusion

##### February 27 2016 #####
_EOD commit : e3dde24_
- added card-component
- added card styles
- added font-awesome
- changed RedStone title to 'Redstone'
- did something about parsing the journals
- added some more animations for the cards
- did some change in 'about' template
- added card view to projects
- modified the really simple looking project view
- experiment further with search

- model manager for graph implemented
- navigation now looking pristine

##### February 25 2016 #####
_EOD commit : 3e3e0a9_
Dependencies added:
- ember-cli-filter-component
- ember-google-charts

- added journal support for issues

##### February 24 2016 #####
_EOD commit : b78b8dc_
- models adjusted to hold more object properties
- model relationship tests successful
- implemented REST Adapter
- using mirage for fixture data now
- ! Redmine API limitation - only returns 100 items; need to think about that another time
- ! Redmine doesn't support CORS header; yay - thanks Redmine!

- injected Skeleton CSS framework for grid bliss
- footer section now slightly less ugly
- header is pretty
- templating changed
- index route is now called dashboard
- issue & project requests are now returning a single promise
- dashboard performance doubled (rough estimate)

##### February 23 2016 #####
_EOD commit : ae60154_
- using fixture data to simulate REST response
- index.hbs now lists all items returned
- has header
- has footer
- added serializer as documented in https://guides.emberjs.com/v2.3.0/models/customizing-serializers/ to parse through nested objects
- relations ship between issues & projects established
- routing full implemented

##### February 19 2016 #####
- Ember.js framework set
- First model blue prints


## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

The Ember project relies heavily on testing (see section 'Running Tests').
Make use of the many generators for code, try `ember help generate` for more details.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

