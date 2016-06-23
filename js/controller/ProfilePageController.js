/*jslint browser: true*/
/*global console, ScoreApp*/

ScoreApp.angular.controller('ProfilePageController', ['$scope', '$http', 'InitService', 'DataService', 'radialIndicatorInstance',
	function ($scope, $http, InitService, DataService, radialIndicatorInstance) {
		'use strict';

		DataService.addEventListener('profileClicked', function (profile) {
            $scope.profile = profile;

		});

        $scope.onXectionClicked = function (xection, parentBranchLabel) {
            DataService.xectionClicked(xection, parentBranchLabel);
        };

	}
]);