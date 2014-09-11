(function () {
  'use strict';

  app.controller('homeController', function ($scope) {

    var gui = require('nw.gui');
    var os = require('os'); 

    $scope.description = gui.App.manifest.description;
    $scope.settings = [];

    Object.getOwnPropertyNames(os).forEach(function(val, idx, array) { 
      if (typeof os[val] === 'function')
        $scope.settings.push({ name: val, value: os[val]() });  
    });
  });

})();