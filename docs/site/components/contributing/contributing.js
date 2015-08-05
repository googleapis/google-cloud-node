angular
  .module('gcloud.contributing', ['ngRoute', 'gcloud.subpage', 'gcloud.markdown'])
  .config(function($routeProvider) {
    'use strict';

    $routeProvider.when('/contributing', {
      controller: 'ContributingCtrl',
      templateUrl: 'site/components/contributing/contributing.html',
      reloadOnSearch: false
    });
  })

  .controller('ContributingCtrl', function($scope) {
    'use strict';

  });
