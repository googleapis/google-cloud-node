angular
  .module('gcloud.subpage', ['gcloud.header'])
  .directive('subpage', function($parse, $location) {
    'use strict';

    return {
      transclude: true,
      templateUrl: 'site/components/subpage/subpage.html',
      link: function($scope, elem, attrs) {
        $scope.title = attrs.title;
        $scope.links = $parse(attrs.links)();
        $scope.headerTemplateUrl = attrs.headerTemplateurl;

        if (attrs.isActiveUrl) {
          $scope.isActiveUrl = $parse(attrs.isActiveUrl)($scope);
        } else {
          $scope.isActiveUrl = function (url) {
            return $location.path() === url.replace('#', '');
          };
        }
      }
    };
  });
