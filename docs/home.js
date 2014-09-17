angular
  .module('gcloud', ['ngRoute', 'hljs', 'gcloud.docs', 'config'])
  .config(function($routeProvider) {
    'use strict';

    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
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
