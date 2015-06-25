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
      }
    };
  });
