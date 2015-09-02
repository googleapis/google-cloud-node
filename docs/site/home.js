angular
  .module('gcloud', [
    'ngRoute',
    'gcloud.authentication',
    'gcloud.docs',
    'gcloud.faq',
    'gcloud.contributing',
    'gcloud.language-switcher',
    'gcloud.troubleshooting',
    'gcloud.markdown',
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
  .controller('HomeCtrl', function($scope, $http) {
    'use strict';

    $http.get('https://api.github.com/repos/GoogleCloudPlatform/gcloud-node/releases')
      .then(function(releases) {
        var latestRelease = releases.data[0];

        $scope.latestRelease = {
          name: latestRelease.tag_name,
          date: new Date(latestRelease.published_at),
          link: latestRelease.html_url
        };
      });
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
