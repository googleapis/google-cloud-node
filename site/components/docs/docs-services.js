angular.module('gcloud.docs')
  .factory('getLinks', function(versions, pages) {
    'use strict';

    // `version` is the current version being browsed.
    return function(version) {
      var baseUrl = '#/docs/' + version;
      var VERSIONS = pages.VERSIONS;

      if (version === 'master') {
        // Set an insanely high version. This is because for master we need
        // all the modules from the latest version, but when executed locally,
        // we don't know which one is the latest unless we manually add to
        // versions.txt
        version = '1000.0.0';
      }

      // Use semver matching to put all matching modules together.
      return Object.keys(VERSIONS)
        .reduce(function(acc, potentialVersion) {
          if (semver.satisfies(version, potentialVersion)) {
            acc = acc.concat(VERSIONS[potentialVersion].map(function(module) {
              if (pages[module]._url) {
                pages[module].url = pages[module]._url.replace('{baseUrl}', baseUrl);
              }
              return pages[module];
            }));
          }
          return acc;
        }, [])
        .sort(function(moduleA, moduleB) {
          // A title matching `gcloud` will come first in the list.
          return moduleA.title === 'gcloud' ? -1 : moduleA.title > moduleB.title;
        });
    };
  });
