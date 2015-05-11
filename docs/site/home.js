angular
  .module('gcloud', [
    'ngRoute',
    'gcloud.authorization',
    'gcloud.docs',
    'gcloud.faq',
    'gcloud.language-switcher',
    'gcloud.troubleshooting',
    'config',
    'hljs'
  ])
  .config(function($routeProvider) {
    'use strict';

    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $routeProvider.when('/', {
      templateUrl: 'site/home.html',
      controller: 'HomeCtrl'
    });
  })
  .controller('HomeCtrl', function() {
    'use strict';
  })
  .run(function($rootScope, $location, versions) {
    'use strict';

    $rootScope.latestVersion = versions[0];

    $rootScope.$on('$routeChangeStart', function(event) {
      var hash = $location.hash();
      if (hash) {
        event.preventDefault();
        $location.hash('');
        $location.replace().path($location.path() + '/' + hash);
      }
    });
  });
