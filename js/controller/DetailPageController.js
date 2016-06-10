/*jslint browser: true*/
/*global console, Chapters*/

Chapters.angular.controller('DetailPageController', ['$scope', '$http', 'InitService', 'DataService',
	function ($scope, $http, InitService, DataService) {
		'use strict';

		DataService.addEventListener('movieClicked', function (form) {
			$scope.form = form;
		});
		
	}
]);