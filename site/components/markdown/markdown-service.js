angular
  .module('gcloud.markdown', [])
  .config(function ($anchorScrollProvider) {
    $anchorScrollProvider.disableAutoScrolling();
  })
  .factory('mdConverter', function ($location, $interpolate) {
    var template = '<a gcloud-scroll="{{id}}" href="#{{href}}">{{text}}</a>';
    var anchor = $interpolate(template);

    return new showdown.Converter({
      extensions: [function () {
        return [{
          type: 'lang',
          // unescaped version \[([^\]]+)\]\(([\/|\#][^)]+)\)
          regex: '\\[([^\\]]+)\\]\\(([\\/|\\#][^)]+)\\)',
          replace: function (match, text, href) {
            var isDeeplink = /^\#/.test(href);
            var data = { text: text };

            if (isDeeplink) {
              data.id = href.replace('#', '');
              data.href = $location.path() + '?section=' + data.id;
            } else {
              data.href = href.replace('readme.md', '');
            }

            return anchor(data);
          }
        }];
      }]
    });
  })
  .factory('mdDeeplink', function ($window, $location) {
    // retrieve amount to offset the scroll by (height of the page header)
    function offset () {
      if (!offset._value) {
        var el = document.getElementsByClassName('page-header')[0];
        offset._value = el ? el.offsetHeight : 0;
      }

      return offset._value;
    }

    return function deeplink (section) {
      if (!section) return;
      // showdown doesn't insert hyphens like ghfm does
      var id = section.split('-').join('');
      var el = document.getElementById(id);

      if (!el) return;

      $window.scrollTo(0, el.offsetTop - offset());
    };
  });

