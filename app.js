'use strict';

angular.module('madLibs', ['ngAnimate'])
	.controller('mainCtrl', function($scope){
		$scope.resultsActive = false;

		// Default gender input to male
		$scope.gender = 'M';

		$scope.$watch('gender', function(gender){
			if (gender == 'M') {
				$scope.sPronoun = 'he';
				$scope.pPronoun = 'his';
				$scope.oPronoun = 'him';
			}
			else if (gender == 'F') {
				$scope.sPronoun = 'she';
				$scope.pPronoun = 'her';
				$scope.oPronoun = 'her';
			}
		});

		$scope.genLib = function() {
			if ($scope.wordInput.$invalid) {
				if ($scope.wordInput.huge_number.$invalid) {
					alert('"Huge number" must be digits, like 99999');
					return;
				}
				alert('Fill out the red blanks to continue.');
			}
			else {
				$scope.resultsActive = true;
			}
		}

		$scope.resetLib = function() {
			$scope.person_name = $scope.job_title = $scope.tedious_task = $scope.dirty_task = $scope.celebrity = $scope.useless_skill = $scope.adjective = $scope.obnoxious_celebrity = $scope.huge_number = '';
			$scope.wordInput.$setPristine();
			$scope.resultsActive = false;
		}
	});