'use strict'

var app = angular.module('MyApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home/home.html', 
			controller: 'homeController'
		})
		.when('/about', {
			templateUrl: 'about/about.html', 
			controller: 'aboutController'
		})		
		.otherwise({  redirectTo: '/home' });
});