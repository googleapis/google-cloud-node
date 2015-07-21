angular
  .module('gcloud.troubleshooting', [
    'gcloud.markdown',
    'ngRoute',
    'gcloud.how-to-get-help',
    'gcloud.subpage'
  ])
  .config(function($routeProvider) {
    'use strict';

    $routeProvider.when('/troubleshooting', {
      controller: 'TroubleshootingCtrl',
      templateUrl: 'site/components/troubleshooting/troubleshooting.html',
      reloadOnSearch: false
    });
  })

  .controller('TroubleshootingCtrl', function($scope) {
    'use strict';

  });
