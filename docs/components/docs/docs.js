angular
  .module('gcloud.docs', ['ngRoute', 'hljs', 'config'])
  .config(function($routeProvider, versions) {
    'use strict';

    function filterDocJson($sce, version) {
      // Transform JSON response to remove extraneous objects.
      function formatHtml(str) {
        return str
            .replace(/\s+/g, ' ')
            .replace(/<br *\/*>/g, ' ')
            .replace(/`([^`]*)`/g, '<code>$1</code>');
      }
      function formatComments(str) {
        var matched = 0;
        var paragraphComments = /\/\/-+((\n|\r|.)*?(\/\/-))/g;

        if (!paragraphComments.test(str)) {
          return '<div hljs language="javascript">\n' + str + '</div>';
        }

        str = str.replace(paragraphComments, function(match, block) {
          return '' +
              (++matched > 1 ? '</div>' : '') +
              '<p>' +
              formatHtml(detectLinks(detectModules(
                block.trim()
                  .replace(/\/\/-*\s*/g, '\n')
                  .replace(/\n\n/g, '\n')
                  .replace(/(\w)\n(\w)/g, '$1 $2')
                  .replace(/\n\n/g, '</p><p>')
              ))) +
              '</p>' +
              '<div hljs language="javascript">';
        });

        str = str.replace(/(<div[^>]*>)\n+/g, '$1\n');
        str = str.replace(/\n<\/div>/g, '</div>');

        return str;
      }
      function detectLinks(str) {
        var regex = {
          withCode: /{@linkcode <a href="([^\"]*)">([^<]*)<\/a>/g,
          withTitle: /\[([^\]]*)]{@link <a href="([^}]*)}">[^}]*}<\/a>/g,
          withoutTitle: /{@link <a href="([^}]*)}">[^}]*}<\/a>/g
        };
        var a = document.createElement('a');
        return str
          .replace(regex.withTitle, function(match, title, link) {
            a.href = link;
            a.innerText = title;
            return a.outerHTML;
          })
          .replace(regex.withoutTitle, function(match, link) {
            a.href = link;
            a.innerText = link.replace(/^http\s*:\/\//, '');
            return a.outerHTML;
          })
          .replace(regex.withCode, function(match, link, text) {
            a.href = link;
            a.innerText = text;
            return '<code>' + a.outerHTML + '</code>';
          });
      }
      function detectModules(str) {
        var regex = {
          see: /{*module:([^}]*)}*/g
        };
        var a = document.createElement('a');
        return str.replace(regex.see, function(match, module) {
          var path = module;
          if (path.indexOf('#') > -1) {
            path = path.split('#').map(function(part, index, parts) {
              if (index < parts.length - 1) {
                return part + '/';
              } else {
                return '?method=' + part;
              }
            }).join('');
          }
          a.href = '#/docs/' + version + '/' + path;
          a.innerText = module;
          return a.outerHTML;
        });
      }
      function reduceModules(acc, type, index, types) {
        var CUSTOM_TYPES = ['query', 'dataset', 'transaction'];
        if (CUSTOM_TYPES.indexOf(type.toLowerCase()) > -1) {
          if (types[index - 1]) {
            type = types[index - 1] + '/' + type;
            delete types[index - 1];
          }
        }
        acc.push(detectModules(type));
        return acc;
      }
      return function(data) {
        return data.data
          .filter(function(obj) {
            return obj.isPrivate === false && obj.ignore === false;
          })
          .map(function(obj) {
            return {
              data: obj,
              name: obj.ctx.name,
              constructor: obj.tags.some(function(tag) {
                  return tag.type === 'constructor';
                }),
              mixes: obj.tags.filter(function(tag) {
                  return tag.type === 'mixes';
                }),
              description: $sce.trustAsHtml(
                  formatHtml(detectLinks(detectModules(obj.description.full)))),
              params: obj.tags.filter(function(tag) {
                  return tag.type === 'param';
                })
                .map(function(tag) {
                  tag.description = $sce.trustAsHtml(
                      formatHtml(tag.description.replace(/^- /, '')));
                  tag.types = $sce.trustAsHtml(tag.types.reduceRight(
                      reduceModules, []).join(', '));
                  tag.optional = tag.types.toString().substr(-1) === '=';
                  return tag;
                }),
              returns: obj.tags.filter(function(tag) {
                  return tag.type === 'return';
                })
                .map(function(tag) {
                  return $sce.trustAsHtml(
                      tag.types.reduceRight(reduceModules, [])[0]);
                })[0],
              example: obj.tags.filter(function(tag) {
                  return tag.type === 'example';
                })
                .map(function(tag) {
                  return $sce.trustAsHtml(formatComments(tag.string));
                })[0]
            };
          })
          .sort(function(a, b) {
            return a.constructor ? -1: a.name > b.name;
          });
      };
    }

    function getMixIns($sce, $q, $http, version, baseUrl) {
      return function(data) {
        var methodWithMixIns = data.filter(function(method) {
          return method.mixes;
        })[0];
        if (!methodWithMixIns) {
          return data;
        }
        return $q
          .all(getMixInMethods(methodWithMixIns))
          .then(combineMixInMethods(data));
      };
      function getMixInMethods(method) {
        return method.mixes.map(function (module) {
          module = module.string.trim().replace('module:', '');
          return $http.get(baseUrl + '/' + module + '.json')
              .then(filterDocJson($sce, version))
              .then(function(mixInData) {
                return mixInData.filter(function(method) {
                  return !method.constructor;
                });
              });
        });
      }
      function combineMixInMethods(data) {
        return function(mixInData) {
          return mixInData
            .reduce(function(acc, mixInMethods) {
              return acc = acc.concat(mixInMethods);
            }, data)
            .sort(function(a, b) {
              return a.name > b.name;
            });
        };
      }
    }

    function setSingleMethod(method) {
      return function(methods) {
        if (method && methods.some(function(methodObj) {
          return methodObj.name === method;
        })) {
          methods.singleMethod = method;
        }
        return methods;
      };
    }

    function getMethods($http, $route, $sce, $q, $location) {
      var version = $route.current.params.version;
      var module = $route.current.params.module;
      var cl = $route.current.params.class;
      var path = ['json', version];
      if (!module && !cl) {
        path.push('index.json');
      } else if (module && !cl) {
        path.push(module);
        path.push('index.json');
      } else if (module && cl) {
        path.push(module);
        path.push(cl + '.json');
      }
      return $http.get(path.join('/'))
          .then(filterDocJson($sce, version))
          .then(getMixIns($sce, $q, $http, version, 'json/' + version))
          .then(setSingleMethod($location.search().method));
    }

    function getLinks($route, getLinks) {
      return getLinks($route.current.params.version);
    }

    $routeProvider
      .when('/docs', {
        redirectTo: '/docs/' + versions[0]
      })
      .when('/docs/history', {
        controller: 'HistoryCtrl',
        templateUrl: 'components/docs/docs.html'
      })
      .when('/docs/:version', {
        controller: 'DocsCtrl',
        templateUrl: 'components/docs/docs.html',
        resolve: { methods: getMethods, links: getLinks }
      })
      .when('/docs/:version/:module', {
        controller: 'DocsCtrl',
        templateUrl: 'components/docs/docs.html',
        resolve: { methods: getMethods, links: getLinks }
      })
      .when('/docs/:version/:module/:class', {
        controller: 'DocsCtrl',
        templateUrl: 'components/docs/docs.html',
        resolve: { methods: getMethods, links: getLinks }
      });
  })

  .run(function($location, $route, $rootScope, versions) {
    'use strict';

    $rootScope.$on('$routeChangeStart', function(event, route) {
      var url = $location.path();
      if (url.indexOf('/docs/') === -1 || (!route.params || !route.params.version)) {
        // This isn't a `docs` route or it's not one that expects a version.
        // No need to re-direct request.
        return;
      }
      if (versions.indexOf(route.params.version) === -1) {
        // No version specified where one was expected.
        // Route to same url with latest version prepended.
        event.preventDefault();
        $route.reload();
        $location.path(url.replace('docs/', 'docs/' + versions[0] + '/'));
      }
    });
  })

  .controller('DocsCtrl', function($location, $scope, $routeParams, methods, $http, links, versions) {
    'use strict';

    $scope.isActiveUrl = function(url) {
      var active = $location.path()
          .replace('/' + methods.singleMethod, '')
          .replace('/' + $scope.version, '');
      url = url.replace('#', '').replace('/' + $scope.version, '');
      return active === url;
    };

    $scope.isActiveDoc = function(doc) {
      return doc.toLowerCase() === $routeParams.module;
    };

    $scope.pageTitle = 'Node.js';
    $scope.showReference = true;
    $scope.activeUrl = '#' + $location.path();
    $scope.singleMethod = methods.singleMethod;
    $scope.module = $routeParams.module;
    $scope.methods = methods;
    $scope.version = $routeParams.version;
    $scope.isLatestVersion = $scope.version == versions[0];
    $scope.versions = versions;
    $scope.links = links;
  })

  .controller('HistoryCtrl', function($scope, versions) {
    'use strict';

    $scope.pageTitle = 'Node.js Docs Versions';
    $scope.showHistory = true;
    $scope.versions = versions;
  });
