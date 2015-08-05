angular
  .module('gcloud.markdown')
  .directive('gcloudMarkdown', function (mdConverter, mdDeeplink, $http, $sce, $compile, $location, $window, $timeout) {
    return {
      retstrict: 'A',
      link: function (scope, element, attrs) {
        // could be cross domain, but that's ok!
        var markdown = $sce.trustAsResourceUrl(attrs.gcloudMarkdown);

        // fetch markdown
        $http.get(markdown).then(function (resp) {
          var html, blocks;

          // make it pretty!
          html = mdConverter.makeHtml(resp.data);
          element.html(html);
          blocks = element.find('pre').find('code');
          angular.forEach(blocks, hljs.highlightBlock);

          // this will trigger any directives inside the markdown
          // e.g. "hljs-class"
          $compile(element.contents())(scope);

          // wrapping in timeout to get around paint lag
          $timeout(function () {
            mdDeeplink($location.search().section)
          }, 50);
        });
      }
    };
  })
  .directive('gcloudScroll', function (mdDeeplink, $location) {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        elem.on('click', function (e) {
          mdDeeplink(attrs.gcloudScroll);
        });
      }
    }
  });
