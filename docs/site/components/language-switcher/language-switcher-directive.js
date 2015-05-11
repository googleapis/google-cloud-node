angular
  .module('gcloud.language-switcher', [])
  .directive('languageSwitcher', function() {
    'use strict';

    return {
      templateUrl: 'site/components/language-switcher/language-switcher.html',
      transclude: true,

      controller: function($scope) {
        $scope.showNavDropdown = false;
      }
    };
  });
