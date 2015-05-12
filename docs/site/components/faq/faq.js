angular
  .module('gcloud.faq', [
    'btford.markdown',
    'ngRoute',
    'gcloud.how-to-get-help',
    'gcloud.subpage'
  ])
  .config(function($routeProvider) {
    'use strict';

    $routeProvider.when('/faq', {
      controller: 'FaqCtrl',
      templateUrl: 'site/components/faq/faq.html'
    });
  })

  .controller('FaqCtrl', function($scope) {
    'use strict';

  });
