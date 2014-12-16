angular
  .module('gcloud.troubleshooting', ['ngRoute', 'gcloud.subpage', 'btford.markdown'])
  .config(function($routeProvider) {
    'use strict';

    $routeProvider.when('/troubleshooting', {
      controller: 'TroubleshootingCtrl',
      templateUrl: 'site/components/troubleshooting/troubleshooting.html'
    });
  })

  .controller('TroubleshootingCtrl', function($scope) {
    'use strict';

  });
