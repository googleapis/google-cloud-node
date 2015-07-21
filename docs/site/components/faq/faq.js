angular
  .module('gcloud.faq', [
    'gcloud.markdown',
    'ngRoute',
    'gcloud.how-to-get-help',
    'gcloud.subpage'
  ])
  .config(function($routeProvider) {
    'use strict';

    $routeProvider.when('/faq', {
      controller: 'FaqCtrl',
      templateUrl: 'site/components/faq/faq.html',
      reloadOnSearch: false
    });
  })

  .controller('FaqCtrl', function($scope) {
    'use strict';

  });
