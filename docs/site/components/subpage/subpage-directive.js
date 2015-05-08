angular
  .module('gcloud.subpage', ['gcloud.header'])
  .directive('subpage', function($location, getLinks) {
    'use strict';

    return {
      transclude: true,
      templateUrl: 'site/components/subpage/subpage.html',
      link: function($scope, elem, attrs) {
        $scope.title = attrs.title;
        $scope.links = getLinks('master');
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
