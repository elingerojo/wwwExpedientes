/*jslint browser: true*/
/*global console, ScoreApp, angular, Framework7*/

// Init angular
var ScoreApp = {};

ScoreApp.config = {
};

//ScoreApp.angular = angular.module('ScoreApp', []);
ScoreApp.angular = angular.module('ScoreApp', ['radialIndicator']);

ScoreApp.fw7 = {
  app : new Framework7({
    animateNavBackIcon: true
  }),
  options : {
    dynamicNavbar: true,
    domCache: true
  },
  views : []
};