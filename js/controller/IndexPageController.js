/*jslint browser: true*/
/*global console, Chapters*/

Chapters.angular.controller('IndexPageController', ['$scope', '$http', 'InitService', 'DataService',
	function ($scope, $http, InitService, DataService) {
		'use strict';
		
		$scope.onItemClicked = function (form) {
			DataService.movieClicked(form);
		};

		InitService.addEventListener('ready', function () {
			DataService.getXections().then(function (result) {
				console.log(result);
				$scope.xections = result.data.xections;
			}, function (err) {
				console.error("Xections data: ", err.statusText)
			});
		});
	}
]);