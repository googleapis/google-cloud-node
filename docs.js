'use strict';

var async = require('async');
var semver = require('semver');
var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

var MANIFEST = path.join(__dirname, 'docs', 'manifest.json');
var DEFAULT_PACKAGE = 'google-cloud';
var USER = '@' + DEFAULT_PACKAGE;
var MASTER = 'master';

var manifest = require(MANIFEST);
var modules = manifest.modules;
var undocumented = [];

var ignore = [
  'v0.1.1',
  'v0.2.0',
  'v0.3.0',
  'v0.4.0',
  'v0.13.0',
  'v0.24.1',
  'v0.38.0',
  'v0.38.1',
  'v0.38.2',
  'bigquery-0.1.0',
  'bigtable-0.1.0',
  'compute-0.1.0',
  'datastore-0.1.0',
  'dns-0.1.0',
  'language-0.1.0',
  'logging-0.1.0',
  'prediction-0.1.0',
  'pubsub-0.1.0',
  'resource-0.1.0',
  'storage-0.1.0',
  'translate-0.1.0',
  'vision-0.1.0',
  ''
];

exec('git tag', function(err, stdout) {
  if (err) {
    console.error(err);
    return;
  }

  sortTags(stdout.toString().split('\n'));
});

function sortTags(tags) {
  tags.forEach(function(tag) {
    tag = tag.trim();

    if (ignore.indexOf(tag) > -1) {
      return;
    }

    var parts = tag.split('-');

    if (parts.length === 1) {
      parts.unshift(DEFAULT_PACKAGE);
    }

    var id = parts[0];

    if (id === 'common') {
      return;
    }

    var version = parts[1].replace('v', '');
    var mod = getModule(id);

    if (mod.versions.indexOf(version) > -1) {
      return;
    }

    mod.versions.push(version);
    mod.versions.sort(function(a, b) {
      if (a === MASTER) {
        return 1;
      }

      if (b === MASTER) {
        return -1;
      }

      return semver.lt(a, b) ? 1 : -1;
    });

    if (id !== DEFAULT_PACKAGE) {
      undocumented.push([id, version]);
    }
  });

  manifest.modules = modules;
  var manifestContent = JSON.stringify(manifest, null, 2) + '\n';

  fs.writeFile(MANIFEST, manifestContent, function(err) {
    if (err) {
      console.error(err);
      return;
    }

    generateJson();
  });
}

function getModule(id) {
  for (var i = 0, l = modules.length; i < l; i++) {
    if (modules[i].id === id) {
      return modules[i];
    }
  }

  var mod = {
    id: id,
    name: getName(id),
    defaultService: id,
    versions: [MASTER]
  };

  modules.push(mod);

  modules.sort(function(a, b) {
    if (a.id === DEFAULT_PACKAGE) {
      return -1;
    }

    if (b.id === DEFAULT_PACKAGE) {
      return 1;
    }

    return +(a.id > b.id) || +(a.id === b.id) - 1;
  });

  return mod;
}

function getName(id) {
  if (id === DEFAULT_PACKAGE) {
    return id;
  }

  return [USER, id].join('/');
}

function generateJson() {
  async.eachLimit(undocumented, 1, function(tag, eachCallback) {
    async.series([
      function(seriesCallback) {
        exec('mkdir -p gh-pages/json/' + tag.join('/'), seriesCallback);
      },
      function(seriesCallback) {
        exec('git checkout ' + tag.join('-'), seriesCallback);
      },
      function(seriesCallback) {
        exec('npm run docs', seriesCallback);
      },
      function(seriesCallback) {
        exec('cp -rf docs/json/' + tag[0] + '/master/* gh-pages/json/' + tag.join('/'), seriesCallback);
      }
    ], eachCallback)
  }, function(err) {
    console.log(err);
  });
}
