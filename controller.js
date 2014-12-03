'use strict';

angular.module('madLibs', [])
	.controller('mainCtrl', function($scope){
		$scope.female_name = 'Female name';
		$scope.job_title = 'Job title';
		$scope.tedious_task = 'Tedious task';
		$scope.dirty_task = 'Dirty task';
		$scope.celebrity = 'Celebrity';
		$scope.useless_skill = 'Useless skill';
		$scope.adjective = 'Adjective';
		$scope.obnoxious_celebrity = 'Obnoxious celebrity';
		$scope.huge_number = 'Huge number';
	});