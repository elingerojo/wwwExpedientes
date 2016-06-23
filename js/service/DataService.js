/*jslint browser: true*/
/*global console, Framework7, ScoreApp, $document*/

ScoreApp.angular.factory('DataService', ['$document', '$http', function ($document, $http) {
	'use strict';

	var pub = {},
		eventListeners = {
			"profileClicked" : [],
			"xectionClicked" : [],
			"formClicked" : [],
			"fieldChanged" : []
		};

	pub.addEventListener = function (eventName, callback) {
		eventListeners[eventName].push(callback);
	};

	pub.profileClicked = function(profile) {
		for (var i = 0; i<eventListeners.profileClicked.length; i++) {
			eventListeners.profileClicked[i](profile);
		}
	};

	pub.xectionClicked = function(xection, parentBranchLabel) {
		for (var i = 0; i<eventListeners.xectionClicked.length; i++) {
			eventListeners.xectionClicked[i](xection, parentBranchLabel);
		}
	};

	pub.formClicked = function(form, parentBranchLabel) {
		for (var i = 0; i<eventListeners.formClicked.length; i++) {
			eventListeners.formClicked[i](form, parentBranchLabel);
		}
	};

	pub.fieldChanged = function(form, parentBranchLabel) {
		for (var i = 0; i<eventListeners.fieldChanged.length; i++) {
			eventListeners.fieldChanged[i](form, parentBranchLabel);
		}
	};

	pub.getProfiles = function () {
		return $http.get(location.href + 'data/skelet.json');
	};

	return pub;

}]);