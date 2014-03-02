'use strict'

app.controller('homeController', function ($scope) {

	var os = require('os');

	$scope.settings = [];
	
	Object.getOwnPropertyNames(os).forEach(function(val, idx, array) { 
		if (typeof os[val] === 'function')
			$scope.settings.push({ name: val, value: os[val]() });	
	});

});