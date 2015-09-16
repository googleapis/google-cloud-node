angular
  .module('gcloud.authentication', ['ngRoute', 'gcloud.subpage', 'gcloud.markdown'])
  .config(function($routeProvider) {
    'use strict';

    $routeProvider.when('/authentication', {
      controller: 'AuthenticationCtrl',
      templateUrl: 'site/components/authentication/authentication.html',
      reloadOnSearch: false
    });
  })

  .controller('AuthenticationCtrl', function($scope) {
    'use strict';

  });
