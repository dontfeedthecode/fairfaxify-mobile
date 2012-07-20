Fairfaxify Mobile
=============

## [Live demo](http://limelightdigitalusa.com/fairfaxify/mobile "Fairfaxify Mobile")

#### What is this?

Fairfaxify Mobile is a simple web-based mobile application built in Sencha Touch 2 that connects to Fairfaxify API to pull data in via JSONP.

#### Installation

This app will work from any folder location, simply open app.html in an appropriate browser (Safari, Chrome). By default the proxy will connect to a live version of Fairfaxify API however if you wish to install the API yourself you can change paths in the following two locations:

*app/store/ArticleStore.js*

 - `Line 14:` Change API location, e.g. url: 'yourserver.com/rest/articles',

*app/controller/MainController.js*

 - `Line 40:` Change API location, e.g. url: 'yourserver.com/rest/article/' + ArticleId,