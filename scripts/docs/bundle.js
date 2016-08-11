/**
 * Copyright 2014 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var path = require('path');
var globby = require('globby');
var semver = require('semver');
var mkdirp = require('mkdirp');
var fs = require('fs');
var async = require('async');
var flatten = require('lodash.flatten');
var parser = require('./parser');
var config = require('./config');

var JSON_DIR = './ghpages/json';

var pkgJson = require('../../packages/google-cloud/package.json');
var dependencies = pkgJson.dependencies;

var deps = Object.keys(dependencies).reduce(function(deps, dep) {
  if (/^\@google\-cloud/.test(dep)) {
    deps.push({
      packageName: dep.replace('@google-cloud/', ''),
      semver: dependencies[dep]
    });
  }

  return deps;
}, []);

function getPackageVersion(dep, callback) {
  var globOptions = {
    cwd: path.join(JSON_DIR, dep.packageName)
  };

  globby('*', globOptions)
    .then(function(versions) {
      var validVersions = versions.filter(function(version) {
        return semver.valid(version);
      });

      var version = semver.maxSatisfying(validVersions, dep.semver);

      if (!version) {
        throw new Error(
          'Unable to find suitable version for package: ' + dep.packageName);
      }

      callback(null, version);
    })
    .then(null, callback);
}

function getDocsFiles(packageName, version, callback) {
  var globOptions = {
    cwd: path.join(JSON_DIR, packageName),
    ignore: [
      path.join(version, config.TYPES_DICT),
      path.join(version, config.TOC)
    ]
  };

  globby(path.join(version, '*.json'), globOptions)
    .then(callback.bind(null, null), callback);
}

function copyFile(dep, file, callback) {
  var outputDir = path.join(
    JSON_DIR,
    config.UMBRELLA_PACKAGE,
    config.DEFAULT_VERSION,
    dep.packageName
  );

  mkdirp(outputDir, function(err) {
    if (err) {
      callback(err);
      return;
    }

    var inputFile = path.join(
      JSON_DIR,
      dep.packageName,
      file
    );

    var outputFile = path.join(
      outputDir,
      path.basename(file)
    );

    fs.readFile(inputFile, 'utf8', function(err, contents) {
      if (err) {
        callback(err);
        return;
      }

      var fileJson = JSON.parse(contents);
      var service = fileJson.parent || fileJson.id;

      fileJson.overview = parser.createOverview(service, true);
      fs.writeFile(outputFile, JSON.stringify(fileJson), callback);
    });
  });
}

function getTypes(dep, callback) {
  var inputFile = path.join(
    JSON_DIR,
    dep.packageName,
    dep.version,
    config.TYPES_DICT
  );

  fs.readFile(inputFile, 'utf8', function(err, contents) {
    var types = JSON.parse(contents);

    types.forEach(function(type) {
      type.contents = path.join(dep.packageName, type.contents);
    });

    callback(null, types);
  });
}

function createUmbrellaTypes(types, callback) {
  var inputFile = path.join(
    './docs/json',
    config.UMBRELLA_PACKAGE,
    config.DEFAULT_VERSION,
    config.TYPES_DICT
  );

  fs.readFile(inputFile, 'utf8', function(err, contents) {
    if (err) {
      callback(err);
      return;
    }

    var umbrellaTypes = JSON.parse(contents);
    var allTypes = umbrellaTypes.concat(types);

    var outputFile = path.join(
      JSON_DIR,
      config.UMBRELLA_PACKAGE,
      config.DEFAULT_VERSION,
      config.TYPES_DICT
    );

    fs.writeFile(outputFile, JSON.stringify(allTypes), function(err) {
      callback(err, allTypes);
    });
  });
}

function createUmbrellaToc(types, callback) {
  var outputFile = path.join(
    JSON_DIR,
    config.UMBRELLA_PACKAGE,
    config.DEFAULT_VERSION,
    config.TOC
  );

  var toc = parser.createToc(types, true);

  fs.writeFile(outputFile, JSON.stringify(toc), callback);
}

async.map(deps, function(dep, callback) {
  async.waterfall([
    function(callback) {
      getPackageVersion(dep, callback);
    },
    function(version, callback) {
      dep.version = version;
      getDocsFiles(dep.packageName, version, callback);
    },
    function(files, callback) {
      async.each(files, copyFile.bind(null, dep), callback);
    }
  ], function(err) {
    if (err) {
      callback(err);
      return;
    }

    getTypes(dep, callback);
  });
}, function(err, types) {
  if (err) {
    throw err;
  }

  async.waterfall([
    function(callback) {
      createUmbrellaTypes(flatten(types), callback);
    },
    function(types, callback) {
      createUmbrellaToc(types, callback);
    }
  ], function(err) {
    if (err) {
      throw err;
    }
  });
});
