/*jslint browser: true*/
/*global console, ScoreApp*/

ScoreApp.angular.controller('XectionPageController', ['$scope', '$http', 'InitService', 'DataService', 'radialIndicatorInstance',
    function ($scope, $http, InitService, DataService, radialIndicatorInstance) {
        'use strict';

        DataService.addEventListener('xectionClicked', function (xection, parentBranchLabel) {
            $scope.xection = xection;
            $scope.indicatorParentBranchLabel = parentBranchLabel;
        });

        $scope.onFormClicked = function (form, parentBranchLabel) {
            DataService.formClicked(form, parentBranchLabel);
        };

    }
]);