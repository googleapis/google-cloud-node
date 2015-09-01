angular
  .module('gcloud.language-switcher', [])
  .directive('languageSwitcher', function($parse) {
    'use strict';

    return {
      templateUrl: 'site/components/language-switcher/language-switcher.html',
      transclude: true,
      link: function($scope, elem, attrs) {
        $scope.extraLinks = $parse(attrs.extraLinks)($scope);
        $scope.showNavDropdown = false;
      },
      controller: function($scope, $attrs) {
        this.useApiDocs = $parse($attrs.useApiDocs)($scope);
      }
    };
  })
  .directive('apiDocs', function() {
    'use strict';

    return {
      require: '^languageSwitcher',
      restrict: 'A',
      scope: {
        href: '@',
        apiDocs: '@'
      },
      link: function (scope, elem, attrs, switcher) {
        if (switcher.useApiDocs) {
          elem.attr('href', scope.href + scope.apiDocs);
        }
      }
    };
  });
