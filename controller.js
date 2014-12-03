'use strict';

angular.module('madLibs', [])
	.controller('mainCtrl', function($scope){
		$scope.person_name = 'Person name';
		$scope.job_title = 'Job title';
		$scope.tedious_task = 'Tedious task';
		$scope.dirty_task = 'Dirty task';
		$scope.celebrity = 'Celebrity';
		$scope.useless_skill = 'Useless skill';
		$scope.adjective = 'Adjective';
		$scope.obnoxious_celebrity = 'Obnoxious celebrity';
		$scope.huge_number = 'Huge number';
		
		//Defaults gender to female
		$scope.gender = 'F';
		$scope.sPronoun = 'she';
		$scope.pPronoun = 'her';
		$scope.oPronoun = 'her';

		$scope.$watch('gender', function(newGender, oldGender){
			if (!newGender) return;
			if (newGender == oldGender) return;
			if (newGender == 'M') {
				$scope.sPronoun = 'he';
				$scope.pPronoun = 'his';
				$scope.oPronoun = 'him';
			}
			else if (newGender == 'F') {
				$scope.sPronoun = 'she';
				$scope.pPronoun = 'her';
				$scope.oPronoun = 'her';
			}
		});
	});