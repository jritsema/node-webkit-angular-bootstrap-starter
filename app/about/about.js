(function () {
  'use strict';

  app.controller('aboutController', function ($scope) {

    var gui = require('nw.gui');
    var manifest = gui.App.manifest;
    $scope.name = manifest.name;
    $scope.description = manifest.description;
    $scope.appVersion = manifest.version;
    $scope.nodeVersion = process.version;
    $scope.nodeWebkitVersion = process.versions['node-webkit'];
  });

})();