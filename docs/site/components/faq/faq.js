angular
  .module('gcloud.faq', ['ngRoute', 'gcloud.subpage', 'btford.markdown'])
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
