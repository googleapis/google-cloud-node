angular
  .module('gcloud.docs', ['ngRoute', 'hljs'])
  .config(function($routeProvider) {
    'use strict';

    function filterDocJson($sce) {
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
          a.href = '#/docs/' + module;
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
            return a.name > b.name;
          });
      };
    }

    function setMethod($location, methodName) {
      return function(methods) {
        var methodExists = methods.some(function(methodObj) {
          return methodName === methodObj.name;
        });
        if (methodExists) {
          methods.singleMethod = methodName;
          return methods;
        } else {
          $location.path('/docs/' + module + '/' + cl);
        }
      };
    }

    var MODULE_TO_CLASSES = {
      datastore: ['dataset', 'query'],
      storage: []
    };

    $routeProvider
      .when('/docs', {
        controller: 'DocsCtrl',
        templateUrl: 'components/docs/docs.html',
        resolve: {
          methods: function($http, $sce) {
            return $http.get('json/index.json')
                .then(filterDocJson($sce))
                .then(function(methods) {
                  // Prevent displaying permalinks.
                  // ** Can remove when PubSub api is documented **
                  methods.noPermalink = true;
                  return methods;
                });
          }
        }
      })
      .when('/docs/:module', {
        controller: 'DocsCtrl',
        templateUrl: 'components/docs/docs.html',
        resolve: {
          methods: function($http, $route, $sce) {
            var module = $route.current.params.module;
            return $http.get('json/' + module + '/index.json')
                .then(filterDocJson($sce));
          }
        }
      })
      .when('/docs/:module/:class', {
        controller: 'DocsCtrl',
        templateUrl: 'components/docs/docs.html',
        resolve: {
          methods: function($q, $http, $route, $sce, $location) {
            var module = $route.current.params.module;
            var cl = $route.current.params.class;
            if (MODULE_TO_CLASSES[module].length > 0) {
              return $http
                  .get('json/' + module + '/' + cl + '.json')
                  .then(filterDocJson($sce));
            } else {
              // This is not a class, this is the name of a method.
              var method = cl;
              return $http.get('json/' + module + '/index.json')
                  .then(filterDocJson($sce))
                  .then(setMethod($location, method));
            }
          }
        }
      })
      .when('/docs/:module/:class/:method', {
        controller: 'DocsCtrl',
        templateUrl: 'components/docs/docs.html',
        resolve: {
          methods: function($q, $http, $route, $sce, $location) {
            var module = $route.current.params.module;
            var cl = $route.current.params.class;
            var method = $route.current.params.method;
            return $http.get('json/' + module + '/' + cl + '.json')
                .then(filterDocJson($sce))
                .then(setMethod($location, method));
          }
        }
      });
  })
  .controller('DocsCtrl', function($location, $scope, $routeParams, methods) {
    'use strict';

    $scope.isActiveUrl = function(url) {
      var current = $location.path().replace('/' + methods.singleMethod, '');
      var link = url
          .replace(/^#/, '')
          .replace('/' + methods.singleMethod, '');
      return current === link;
    };

    $scope.isActiveDoc = function(doc) {
      return doc.toLowerCase() === $routeParams.module;
    };

    $scope.activeUrl = '#' + $location.path();
    $scope.singleMethod = methods.singleMethod;
    $scope.noPermalink = methods.singleMethod || methods.noPermalink;
    $scope.methods = methods;
    $scope.module = $routeParams.module;
    $scope.pages = [
      {
        title: 'gcloud',
        url: '#/docs'
      },
      {
        title: 'Datastore',
        url: '#/docs/datastore',
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
        url: '#/docs/storage'
      }
    ];
  });
