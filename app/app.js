'use strict'

var app = angular.module('MyApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/main', {
			templateUrl: 'app/main.html', 
			controller: 'mainController'
		})
		.otherwise({  redirectTo: '/main' });
});