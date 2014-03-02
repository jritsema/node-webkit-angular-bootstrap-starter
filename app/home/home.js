'use strict'

app.controller('homeController', function ($scope, $q) {

	var fs = require('fs');
	fs.readdir('c:\\', function (err, files) {
		if (err) throw err;
		$scope.$apply(function() { 
			$scope.files = files;
		});
	});

});