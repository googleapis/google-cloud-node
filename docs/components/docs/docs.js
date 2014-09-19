angular
  .module('gcloud.docs', ['ngRoute', 'hljs', 'config'])
  .config(function($routeProvider, versions) {
    'use strict';

    function filterDocJson($sce, version) {
      // Transform JSON response to remove extraneous objects, such as copyright
      // notices & use strict directives.
      function formatHtml(str) {
        return str
            .replace(/\s+/g, ' ')
            .replace(/<br *\/*>/g, ' ')
            .replace(/`([^`]*)`/g, '<code>$1</code>');
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
          a.href = '#/docs/' + version + '/' + module;
          a.innerText = module;
          return a.outerHTML;
        });
      }
      function reduceModules(acc, type, index, types) {
        var CUSTOM_TYPES = ['query', 'dataset'];
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
                      tag.types.reduceRight(reduceModules, [])[0])
                })[0],
              example: obj.tags.filter(function(tag) {
                  return tag.type === 'example'
                })
                .map(function(tag) {
                  return tag.string;
                })[0]
            };
          })
          .sort(function(a, b) {
            return a.constructor ? -1: a.name > b.name;
          });
      };
    }

    function setMethod($location, methodName, version) {
      return function(methods) {
        var methodExists = methods.some(function(methodObj) {
          return methodName === methodObj.name;
        });
        if (methodExists) {
          methods.singleMethod = methodName;
          return methods;
        } else {
          $location.path('/docs/' + version + '/' + module + '/' + cl);
        }
      };
    }

    var MODULE_TO_CLASSES = {
      datastore: ['dataset', 'query'],
      storage: []
    };

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
        resolve: {
          methods: function($http, $route, $sce) {
            var version = $route.current.params.version;
            return $http.get('json/' + version + '/index.json')
                .then(filterDocJson($sce, version))
                .then(function(methods) {
                  // Prevent displaying permalinks.
                  // ** Can remove when PubSub api is documented **
                  methods.noPermalink = true;
                  return methods;
                });
          }
        }
      })
      .when('/docs/:version/:module', {
        controller: 'DocsCtrl',
        templateUrl: 'components/docs/docs.html',
        resolve: {
          methods: function($http, $route, $sce) {
            var version = $route.current.params.version;
            var module = $route.current.params.module;
            return $http.get('json/' + version + '/' + module + '/index.json')
                .then(filterDocJson($sce, version));
          }
        }
      })
      .when('/docs/:version/:module/:class', {
        controller: 'DocsCtrl',
        templateUrl: 'components/docs/docs.html',
        resolve: {
          methods: function($q, $http, $route, $sce, $location) {
            var version = $route.current.params.version;
            var module = $route.current.params.module;
            var cl = $route.current.params.class;
            if (MODULE_TO_CLASSES[module].length > 0) {
              return $http
                  .get('json/' + version + '/' + module + '/' + cl + '.json')
                  .then(filterDocJson($sce, version));
            } else {
              // This is not a class, this is the name of a method.
              var method = cl;
              return $http.get('json/' + version + '/' +module + '/index.json')
                  .then(filterDocJson($sce, version))
                  .then(setMethod($location, method, version));
            }
          }
        }
      })
      .when('/docs/:version/:module/:class/:method', {
        controller: 'DocsCtrl',
        templateUrl: 'components/docs/docs.html',
        resolve: {
          methods: function($q, $http, $route, $sce, $location) {
            var version = $route.current.params.version;
            var module = $route.current.params.module;
            var cl = $route.current.params.class;
            var method = $route.current.params.method;
            return $http.get('json/' + version + '/' + module + '/' + cl + '.json')
                .then(filterDocJson($sce, version))
                .then(setMethod($location, method, version));
          }
        }
      });
  })

  .controller('DocsCtrl', function($location, $scope, $routeParams, methods, $http, versions) {
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
    $scope.noPermalink = methods.singleMethod || methods.noPermalink;
    $scope.methods = methods;
    $scope.module = $routeParams.module;
    $scope.version = $routeParams.version;
    $scope.isLatestVersion = $scope.version == versions[0];
    $scope.versions = versions;
    var baseUrl = '#/docs/' + $scope.version;
    /*
    TODO(silvano): future versions will introduce new pages, so the list below will have
    to be generated according to the specific version
    */
    $scope.pages = [
      {
        title: 'gcloud',
        url: baseUrl
      },
      {
        title: 'Datastore',
        url: baseUrl + '/datastore',
        pages: [
          {
            title: 'Dataset',
            url: '/dataset'
          },
          {
            title: 'Query',
            url: '/query'
          }
        ]
      },
      {
        title: 'Storage',
        url: baseUrl + '/storage'
      }
    ];
  })

  .controller('HistoryCtrl', function($scope, versions) {
    $scope.pageTitle = 'Node.js Docs Versions';
    $scope.showHistory = true;
    $scope.versions = versions;
  });
