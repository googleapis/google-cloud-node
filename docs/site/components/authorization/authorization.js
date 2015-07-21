angular
  .module('gcloud.authorization', ['ngRoute', 'gcloud.subpage', 'gcloud.markdown'])
  .config(function($routeProvider) {
    'use strict';

    $routeProvider.when('/authorization', {
      controller: 'AuthorizationCtrl',
      templateUrl: 'site/components/authorization/authorization.html',
      reloadOnSearch: false
    });
  })

  .controller('AuthorizationCtrl', function($scope) {
    'use strict';

  });
