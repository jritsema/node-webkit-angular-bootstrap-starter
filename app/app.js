'use strict'

var app = angular.module('MyApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/view1', {
			templateUrl: 'app/view1.html', 
			controller: 'view1Controller'
		})
		.otherwise({  redirectTo: '/view1' });
});