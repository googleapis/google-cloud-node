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

require('shelljs/global');

var fs = require('fs');
var globby = require('globby');
var flatten = require('lodash.flatten');
var path = require('path');
var semver = require('semver');

var config = require('./config');
var parser = require('./parser');
var pkgJson = require('../../packages/google-cloud/package.json');

// since we version the JSON in ghpages and we don't create tags for
// individual modules, we'll look for the appropriate semver version in
// the ghpages submodule
var JSON_DIR = './gh-pages/json';
var UMBRELLA_DIR = path.join(
  JSON_DIR,
  config.UMBRELLA_PACKAGE,
  config.DEFAULT_VERSION
);

// get a list of the latest dep versions
var deps = Object
  .keys(pkgJson.dependencies)
  .filter(function(dep) {
    return /^\@google\-cloud/.test(dep);
  })
  .map(function(dep) {
    return {
      packageName: dep.replace('@google-cloud/', ''),
      semver: pkgJson.dependencies[dep]
    };
  });

// create a master list of available "types" (e.g. bigquery/job, etc.)
var allTypes = deps.map(function(dep) {
  var outputDir = path.join(UMBRELLA_DIR, dep.packageName);
  var version = getPackageVersion(dep);
  var files = getPackageFiles(dep, version);

  mkdir('-p', outputDir);

  files.forEach(function(file) {
    fs.writeFileSync(path.join(outputDir, file.basename), file.json);
  });

  return getPackageTypes(dep, version);
});

cp('./docs/json/google-cloud/master/*', UMBRELLA_DIR);

// update the master list of types
var umbrellaTypesPath = path.resolve(UMBRELLA_DIR, config.TYPES_DICT);
var umbrellaTypes = require(umbrellaTypesPath);

umbrellaTypes.push.apply(umbrellaTypes, flatten(allTypes));
fs.writeFileSync(umbrellaTypesPath, JSON.stringify(umbrellaTypes));

// create a new table of contents based on the master types list
var umbrellaTocPath = path.resolve(UMBRELLA_DIR, config.TOC);
var umbrellaToc = parser.createToc(umbrellaTypes, true);

fs.writeFileSync(umbrellaTocPath, JSON.stringify(umbrellaToc));

function getPackageVersion(dep) {
  var versions = globby.sync('*', {
    cwd: path.join(JSON_DIR, dep.packageName)
  });

  var validVersions = versions.filter(function(version) {
    return semver.valid(version);
  });

  return semver.maxSatisfying(validVersions, dep.semver);
}

function getPackageFiles(dep, version) {
  var packageDir = path.resolve(JSON_DIR, dep.packageName, version);
  var files = globby.sync(path.join(packageDir, '*.json'), {
    ignore: [config.TYPES_DICT, config.TOC].map(function(file) {
      return path.join(packageDir, file);
    })
  });

  return files.map(function(file) {
    var json = require(file);
    var service = json.parent || json.id;

    json.overview = parser.createOverview(service, true);

    return {
      basename: path.basename(file),
      json: JSON.stringify(json)
    };
  });
}

function getPackageTypes(dep, version) {
  var typesPath = path.resolve(
    JSON_DIR, dep.packageName, version, config.TYPES_DICT);

  return require(typesPath).map(function(type) {
    type.contents = path.join(dep.packageName, type.contents);
    return type;
  });
}
