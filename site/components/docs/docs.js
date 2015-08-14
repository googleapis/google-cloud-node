angular
  .module('gcloud.docs', ['ngRoute', 'gcloud.header', 'gcloud.subpage', 'hljs', 'config'])
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
        var paragraphComments = /\/\/-+((\n|\r|.)*?(\/\/-))/g;
        if (!paragraphComments.test(str)) {
          return wrapCode(str);
        }
        var matches = [];
        var lastIndex = 0;
        str.replace(paragraphComments, function(match, block, inner, close, offset) {
          if (lastIndex !== offset) {
            // Push the code missed between text blocks.
            matches.push(wrapCode(str.substr(lastIndex, offset - lastIndex)));
          }
          lastIndex = offset + match.length;
          matches.push('<p>');
          matches.push(formatHtml(detectLinks(detectModules(
            block.trim()
              .replace(/\/\/-*\s*/g, '\n')
              .replace(/(https*:)\W*/g, '$1//')
              .replace(/\n\n/g, '\n')
              .replace(/(\w)\n(\w)/g, '$1 $2')
              .replace(/\n\n/g, '</p><p>')
          ))));
          matches.push('</p>');
        });
        if (lastIndex < str.length) {
          matches.push(wrapCode(str.substr(lastIndex)));
        }
        return matches.join('')
          .replace(/(<div[^>]*>)\n+/g, '$1\n')
          .replace(/\n<\/div>/g, '</div>');
        function wrapCode(code) {
          return '<div hljs no-escape language="javascript">\n' + code + '</div>';
        }
      }
      function detectLinks(str) {
        var regex = {
          normal: /{@link ([^}]*)}/g,
          normalWithTitle: /\[([^\]]*)]{@link ([^}]*)}/g,
          withCode: /{@linkcode <a href="([^\"]*)">([^<]*)<\/a>/g,
          withTitle: /\[([^\]]*)]{@link <a href="([^}]*)}">[^}]*}<\/a>/g,
          withoutTitle: /{@link <a href="([^}]*)}">[^}]*}<\/a>/g
        };
        var a = document.createElement('a');
        return str
          .replace(regex.normalWithTitle, function(match, title, link) {
            a.href = link;
            a.innerText = title;
            return a.outerHTML;
          })
          .replace(regex.normal, function(match, link) {
            a.href = link;
            a.innerText = link;
            return a.outerHTML;
          })
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
        var CUSTOM_TYPES = [
          'query',
          'dataset',
          'transaction',
          'bucket',
          'file',
          'job',
          'table',
          'index',
          'document',
          'field',
          'topic',
          'subscription'
        ];

        var arrayRegex = /Array\.<([^>]+)>/g;
        type = type.replace('=', '')
          .replace('?', '')
          .replace(arrayRegex, '$1[]');

        if (CUSTOM_TYPES.indexOf(type.toLowerCase()) > -1) {
          if (types[index - 1]) {
            type = types[index - 1] + '/' + type;
            delete types[index - 1];
          }
        }
        acc.push(detectModules(type).replace('[]', ''));
        return acc;
      }
      return function(data) {
        return data.data
          .filter(function(obj) {
            return obj.ctx && obj.isPrivate === false && obj.ignore === false;
          })
          .map(function(obj) {
            var alias = obj.tags.filter(function(tag) {
              return tag.type === 'alias';
            })[0];

            if (alias && alias.string.indexOf('module:') !== 0) {
              alias = alias.string;
            } else {
              alias = false;
            }

            return {
              data: obj,
              name: (alias || obj.ctx.name).trim(),
              constructor: obj.tags.some(function(tag) {
                  return tag.type === 'constructor';
                }),
              mixes: obj.tags.filter(function(tag) {
                  return tag.type === 'mixes';
                }),
              description: $sce.trustAsHtml(
                  formatHtml(detectLinks(detectModules(obj.description.full)))),
              lineNum: obj.codeStart,
              lineNumLink: obj.codeStart ? '#L' + obj.codeStart : '',
              params: obj.tags.filter(function(tag) {
                  return tag.type === 'param';
                })
                .map(function(tag) {
                  tag.description = $sce.trustAsHtml(
                      formatHtml(detectLinks(detectModules(tag.description.replace(/^- /, '')))));
                  tag.types = $sce.trustAsHtml(tag.types.reduceRight(
                      reduceModules, []).join(', '));
                  tag.subparam = tag.name.indexOf('.') > -1;
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
                })[0],
              docs: obj.tags.filter(function(tag) {
                  return tag.type === 'resource'
                })
                .map(function(tag) {
                  return $sce.trustAsHtml(formatHtml(detectLinks(tag.string)));
                })
            };
          })
          .sort(compareMethods);
      };
    }

    function getMixIns($sce, $q, $http, version, baseUrl) {
      return function(data) {
        var classMethodNames = data.map(function(method) {
          return method.name;
        });
        var methodWithMixIns = data.filter(function(method) {
          return method.mixes.length > 0;
        })[0];
        if (!methodWithMixIns) {
          return data;
        }
        return $q
          .all(getMixInMethods(classMethodNames, methodWithMixIns))
          .then(combineMixInMethods(data));
      };
      function getMixInMethods(classMethodNames, method) {
        return method.mixes.map(function (module) {
          module = module.string.trim().replace('module:', '');
          return $http.get(baseUrl + '/' + module + '.json')
              .then(filterDocJson($sce, version))
              .then(function(mixInData) {
                return mixInData.filter(function(method) {
                  return !method.constructor &&
                    classMethodNames.indexOf(method.name) === -1;
                });
              });
        });
      }
      function combineMixInMethods(data) {
        return function(mixInData) {
          return mixInData
            .reduce(function(acc, mixInMethods) {
              acc = acc.concat(mixInMethods);
              return acc;
            }, data)
            .sort(compareMethods);
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
        if (cl === 'index') {
          cl = 'index-class';
        }
        path.push(cl + '.json');
      }
      return $http.get(path.join('/'))
          .then(filterDocJson($sce, version))
          .then(getMixIns($sce, $q, $http, version, 'json/' + version))
          .then(setSingleMethod($location.search().method));
    }

    function compareMethods(a, b) {
      if (a.constructor) {
        return -1;
      }

      if (b.constructor) {
        return 1;
      }

      return a.name > b.name ? 1 : -1;
    }

    $routeProvider
      .when('/docs', {
        redirectTo: '/docs/' + versions[0]
      })
      .when('/docs/:version', {
        controller: 'DocsCtrl',
        templateUrl: 'site/components/docs/docs.html',
        resolve: { methods: getMethods }
      })
      .when('/docs/:version/:module', {
        controller: 'DocsCtrl',
        templateUrl: 'site/components/docs/docs.html',
        resolve: { methods: getMethods }
      })
      .when('/docs/:version/:module/:class', {
        controller: 'DocsCtrl',
        templateUrl: 'site/components/docs/docs.html',
        resolve: { methods: getMethods }
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
        return;
      }

      $rootScope.ACTIVE_VERSION = route.params.version;
    });
  })

  .controller('DocsCtrl', function($location, $scope, $routeParams, methods, $http, versions, getModule) {
    'use strict';

    $scope.isActiveUrl = function(url) {
      if (url === '/docs') {
        return true;
      }

      var active = $location.path()
          .replace('/' + methods.singleMethod, '')
          .replace('/' + $scope.version, '');
      url = url.replace('#', '').replace('/' + $scope.version, '');
      return active === url;
    };

    $scope.isActiveDoc = function(doc) {
      return !$routeParams.class && doc.toLowerCase() === $routeParams.module;
    };

    // Set the page title (used in the header).
    var pageTitle = [];

    var moduleName = $routeParams.module;
    if (moduleName) {
      pageTitle.push(getModule($routeParams.module).title);
    }

    var className = $routeParams.class;
    if (className) {
      pageTitle.push(className[0].toUpperCase() + className.substr(1));
    }

    if (pageTitle.length > 0) {
      $scope.pageTitle = pageTitle.join(' » ');
    } else {
      $scope.pageTitle = 'Node.js';
    }

    $scope.showReference = true;
    $scope.activeUrl = '#' + $location.path();
    $scope.singleMethod = methods.singleMethod;
    $scope.module = $routeParams.module;
    $scope.class = $routeParams.class || 'index';
    $scope.methods = methods;
    $scope.version = $routeParams.version;
    $scope.versions = versions;
  });
