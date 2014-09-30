angular.module('gcloud.docs')
  .directive('docsExample', function($compile) {
    'use strict';

    return {
      link: function(scope, element, attr) {
        scope.$watch(attr.ngBindHtml, function() {
          $compile(element.contents())(scope);
        }, true);
      }
    };
  });
