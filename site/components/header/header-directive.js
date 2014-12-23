angular
  .module('gcloud.header', [])
  .directive('header', function() {
    'use strict';

    return {
      replace: true,
      transclude: true,
      templateUrl: 'site/components/header/header.html',
      link: function($scope, elem, attrs) {
        $scope.title = attrs.title;
      }
    };
  });
