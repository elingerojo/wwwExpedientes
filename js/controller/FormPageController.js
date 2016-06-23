/*jslint browser: true*/
/*global console, ScoreApp*/

ScoreApp.angular.controller('FormPageController', ['$scope', '$http', 'InitService', 'DataService', 'radialIndicatorInstance',
    function ($scope, $http, InitService, DataService, radialIndicatorInstance) {
        'use strict';

        DataService.addEventListener('fieldChanged', function (form, parentBranchLabel ) {
            var fields = form.fields,
                fieldsCount = fields.length,
                requiredCount = 0,
                requiredWithValue = 0,
                localgagevalue;
            $scope.indicatorParentBranchLabel = parentBranchLabel;

            for (var i = 0; i<fieldsCount; i++) {
                var field = fields[i];
                if (field.hasOwnProperty('required') && field.required) {
                    requiredCount++;
                    if (field.hasOwnProperty('value') && field.value != "") requiredWithValue++;
                }
            }
            localgagevalue = (requiredWithValue/requiredCount) * 100;
//            console.log('localgagevalue = ', localgagevalue);
//            $scope.gagevalue = localgagevalue;
//            console.log('id = ', 'indicator_' + parentBranchLabel + '_0');
            console.log('radialIndicatorInstance = ', radialIndicatorInstance);
//            console.log('radialIndicatorInstance[id] = ', radialIndicatorInstance['indicator_' + parentBranchLabel + '_0']);
            if (radialIndicatorInstance['indicator_' + parentBranchLabel + '_0']) {
                radialIndicatorInstance['indicator_' + parentBranchLabel + '_0'].animate(localgagevalue);
                radialIndicatorInstance['indicator_' + parentBranchLabel].animate(localgagevalue);
//                console.log('radialIndicatorInstance[indicator_' + parentBranchLabel + '].current_value = ', radialIndicatorInstance['indicator_' + parentBranchLabel].current_value);

                var grandFatherBranchLabel = parentBranchLabel.split('_')[0],
                    fatherBranchLabel = parentBranchLabel.split('_')[1],
                    indicatorsCount = 1,
                    indicatorsSum = localgagevalue;
//                console.log('grandFatherBranchLabel = ', grandFatherBranchLabel);

                for (var key in radialIndicatorInstance) {
                    var subKeyCandidates = key.split('_'),
                        candidatesCount = subKeyCandidates.length;
//                    console.log('key = ', key);
//                    console.log('subKeyCandidates = ', subKeyCandidates);
//                    console.log('candidatesCount = ', candidatesCount);
                    if (candidatesCount === 3 &&
                        subKeyCandidates[0] === 'indicator' &&
                        subKeyCandidates[1] === grandFatherBranchLabel &&
                        subKeyCandidates[2] != fatherBranchLabel) {
                        indicatorsSum += radialIndicatorInstance[key].current_value;
                        indicatorsCount++
//                        console.log('radialIndicatorInstance[key].current_value = ', radialIndicatorInstance[key].current_value);
//                        console.log('indicatorsSum = ', indicatorsSum);
//                        console.log('indicatorsCount = ', indicatorsCount);
                    }
                }
                radialIndicatorInstance['indicator_' + grandFatherBranchLabel].animate(indicatorsSum/indicatorsCount);
            }
        });


        DataService.addEventListener('formClicked', function (form, parentBranchLabel) {
            $scope.form = form;
            $scope.indicatorParentBranchLabel = parentBranchLabel;
            DataService.fieldChanged(form, parentBranchLabel);
        });

        // Concatenate the text parts that construct the radialIndicator ID
        $scope.getIndicatorId = function(parentBranchLabel, idx) {
            return 'indicator_' + parentBranchLabel + '_' + idx;
        };

        // Bring to this scope the fieldChanged function
        $scope.fieldChanged = function(form, parentBranchLabel) {
            DataService.fieldChanged(form, parentBranchLabel);
        };

    }
]).directive('showErrors', function() {
    return {
        restrict: 'A',
        link: function(scope, el) {
            el.bind('blur', function() {
                var isInvalid = el[0].value.length < 3;
                el.toggleClass('has-error', isInvalid);
            });
        }
    }
});