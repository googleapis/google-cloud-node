angular
  .module('gcloud.subpage', ['gcloud.header'])
  .directive('subpage', function($rootScope, $location, $http, $parse, getLinks, versions) {
    'use strict';

    return {
      transclude: true,
      templateUrl: 'site/components/subpage/subpage.html',
      link: function($scope, elem, attrs) {
        $scope.title = attrs.title;
        $scope.links = getLinks();
        $scope.headerTemplateUrl = attrs.headerTemplateurl;

        $scope.versionSelected = $rootScope.ACTIVE_VERSION;
        $scope.versions = versions;

        $scope.loadDocsVersion = function(newVersion) {
          $location.path('docs/' + newVersion);
        };

        if ($scope.versionSelected === 'master') {
          $http.get('https://api.github.com/repos/GoogleCloudPlatform/gcloud-node/commits?sha=gh-pages&per_page=1')
            .then(function(resp) {
              $scope.lastBuiltDate = moment(resp.data[0].commit.committer.date).format('MMMM Do, YYYY');
            });
        }

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
