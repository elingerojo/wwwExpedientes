/*jslint browser: true*/
/*global console, Framework7, Chapters, $document*/

Chapters.angular.factory('DataService', ['$document', '$http', function ($document, $http) {
	'use strict';

	var pub = {},
		eventListeners = {
			'movieClicked' : []
		};

	pub.addEventListener = function (eventName, callback) {
		eventListeners[eventName].push(callback);
	};
	
	pub.movieClicked = function(form) {
		for (var i = 0; i<eventListeners.movieClicked.length; i++) {
			eventListeners.movieClicked[i](form);
		}
	};

	pub.getXections = function () {
		return $http.get(location.href + 'data/skelet.json');
	};

	return pub;

}]);