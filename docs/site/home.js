angular
  .module('gcloud', [
    'ngRoute',
    'gcloud.docs',
    'gcloud.faq',
    'gcloud.troubleshooting',
    'config',
    'hljs'
  ])
  .config(function($routeProvider) {
    'use strict';

    $routeProvider.when('/', {
      templateUrl: 'site/home.html',
      controller: 'HomeCtrl'
    });
  })
  .controller('HomeCtrl', function($scope, versions) {
    'use strict';

    $scope.latestVersion = versions[0];
  })
  .run(function($rootScope, $location) {
    'use strict';

    $rootScope.$on('$routeChangeStart', function(event) {
      var hash = $location.hash();
      if (hash) {
        event.preventDefault();
        $location.hash('');
        $location.replace().path($location.path() + '/' + hash);
      }
    });
  });
