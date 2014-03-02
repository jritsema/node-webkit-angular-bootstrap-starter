'use strict'

app.controller('mainController', function ($scope, $q) {

	$scope.nodeVersion = process.version;

	var fs = require('fs');
	fs.readdir('.', function (err, files) {
		if (err) throw err;
		$scope.$apply(function() { 
			$scope.files = files;
		});
	});

});