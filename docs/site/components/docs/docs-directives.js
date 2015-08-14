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
  })

  .directive('docsCodeLink', function() {
    'use strict';

    var GITHUB_BASE = 'https://github.com/GoogleCloudPlatform/gcloud-node/blob';

    function getFilenameFromConstructor(constructor) {
      switch (constructor) {
        case 'DatastoreRequest':
          return 'request.js';
        default:
          return 'index.js';
      }
    }

    return {
      template: '<a href="{{link}}">Source Code</a>',

      link: function($scope) {
        var method = $scope.method;
        var module = $scope.module;
        var version = $scope.version;

        var lineNumLink = method.lineNumLink;
        var fileName = $scope.class + '.js';

        if (method.data.ctx.hasOwnProperty('constructor')) {
          fileName = getFilenameFromConstructor(method.data.ctx.constructor);
        }

        fileName = fileName.toLowerCase();

        $scope.link =
          GITHUB_BASE +
          '/' + version +
          '/lib' +
          (module ? '/' + module : '') +
          '/' + fileName + lineNumLink;
      }
    };
  });
