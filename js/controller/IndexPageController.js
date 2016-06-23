/*jslint browser: true*/
/*global console, ScoreApp*/

ScoreApp.angular.controller('IndexPageController', ['$scope', '$http', 'InitService', 'DataService',
	function ($scope, $http, InitService, DataService) {
		'use strict';
		
		$scope.onProfileClicked = function (profile) {
			DataService.profileClicked(profile);
		};

		// Register the DataService to getProfiles using $http to the ready event
		InitService.addEventListener('ready', function () {
			DataService.getProfiles().then(function (result) {
				console.log(result);
				$scope.profiles = result.data.profiles;
			}, function (err) {
				console.error("Profiles data: ", err.statusText)
			});
		});
	}
]);