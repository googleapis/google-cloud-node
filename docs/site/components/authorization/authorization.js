angular
  .module('gcloud.authorization', ['ngRoute', 'gcloud.subpage', 'btford.markdown'])
  .config(function($routeProvider) {
    'use strict';

    $routeProvider.when('/authorization', {
      controller: 'AuthorizationCtrl',
      templateUrl: 'site/components/authorization/authorization.html'
    });
  })

  .controller('AuthorizationCtrl', function($scope) {
    'use strict';

  });
