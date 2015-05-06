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

  .directive('docsCodeLink', function($compile) {
    'use strict';

    var GITHUB_BASE = 'https://github.com/GoogleCloudPlatform/gcloud-node/blob/';

    return {
      template: '<a href="' + GITHUB_BASE + '{{version}}/lib/' +
                '{{module ? module + \'/\' : \'\'}}{{class}}.js' +
                '{{method.lineNumLink}}">' +
                '(code on GitHub)' +
                '</a>'
    };
  });
