/*jslint browser: true*/
/*global console, Chapters, angular, Framework7*/

// Init angular
var Chapters = {};

Chapters.config = {
};

Chapters.angular = angular.module('Chapters', []);

Chapters.fw7 = {
  app : new Framework7({
    animateNavBackIcon: true
  }),
  options : {
    dynamicNavbar: true,
    domCache: true
  },
  views : []
};