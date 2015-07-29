angular
  .module('gcloud.subpage', ['gcloud.header', 'hljs'])

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
          $http({
            method: 'get',
            url: 'https://api.github.com/repos/GoogleCloudPlatform/gcloud-node/commits?sha=gh-pages&per_page=1',
            cache: true
          }).then(function(resp) {
            $scope.lastBuiltDate = moment(resp.data[0].commit.committer.date);
          });
        }

        if (attrs.isActiveUrl) {
          $scope.isActiveUrl = $parse(attrs.isActiveUrl)($scope);
        } else {
          $scope.isActiveUrl = function (url) {
            return $location.path() === url.replace('#', '');
          };
        }

        $scope.isActiveClass = function(module) {
          return $location.path().indexOf(module.url.replace('#', '')) === 0;
        };
      }
    };
  })

  // A special class used in our MD files to tell the front end to syntax
  // highlight the code blocks.
  .directive('hljsClass', function() {
    'use strict';

    return {
      // Concept borrowed from:
      // http://www.bennadel.com/blog/2748-compiling-transcluded-content-in-angularjs-directives.htm
      //
      // <div class="hljs-class">
      //   var hi = 'there';        <!-- We want this!
      // </div>
      //
      // We want to replace that with:
      //
      // <div hljs language="javascript" source="var hi = 'there';"></div>
      //
      // To get the content we want, we have to use a higher priority than
      // another same-named directive that uses transclude. This is our only
      // chance to get it before it's clobbered.
      priority: 1500.1,
      restrict: 'C',
      compile: function(element, attrs) {
        attrs._contents = element.text();
      }
    };
  })

  .directive('hljsClass', function() {
    'use strict';

    return {
      priority: 1500,
      restrict: 'C',
      transclude: true,
      scope: {},
      template: '<div hljs language="javascript" source="contents"></div>',
      compile: function(element) {
        return function($scope, element, attrs) {
          $scope.contents = attrs._contents;
        };
      }
    }
  })

  // Re-compile the Markdown, this time having the "hljs-class" blocks picked
  // up.
  .directive('highlightMarkdown', function($compile) {
    'use strict';

    return {
      link: function(scope, element, attrs) {
        scope.$watch(attrs.ngInclude, function() {
          $compile(element.contents())(scope);
        }, true);
      }
    };
  });
