/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var async = require('async');
var david = require('david');
var glob = require('globby');
var is = require('is');
var packageJson = require('package-json');
var path = require('path');
var prop = require('propprop');
var semver = require('semver');

require('shelljs/global');

var MIN_SUPPORTED_NODE_VERSION =
  require('../package.json').engines.node.replace(/^\D*/, '');

function updatePackage(pkg, callback) {
  console.log(pkg.depsToUpdate)

  if (!is.empty(pkg.depsToUpdate)) {
    exec('npm install --save ' + pkg.depsToUpdate.map(prop('name')).join(' '), {
      cwd: pkg.cwd
    });
  }

  callback();
}

function shouldUpdateDependency(dependency, callback) {
  packageJson(dependency.name, dependency.stable).then(function(json) {
    var minCompatibleNodeVersion = json.engines && json.engines.node;

    if (!minCompatibleNodeVersion) {
      callback(true);
      return;
    }

    var isCompatible = semver.satisfies(
      MIN_SUPPORTED_NODE_VERSION,
      minCompatibleNodeVersion
    );

    callback(isCompatible);
  });
}

function populateDepsToUpdate(pkg, callback) {
  david.getUpdatedDependencies(pkg.json, function(err, updatedDeps) {
    if (err) {
      callback(err);
      return;
    }

    if (is.empty(updatedDeps)) {
      callback();
      return;
    }

    for (var updatedDep in updatedDeps) {
      updatedDeps[updatedDep].name = updatedDep;
    }

    async.filter(updatedDeps, shouldUpdateDependency, function(deps) {
      if (err) {
        callback(err);
        return;
      }

      pkg.depsToUpdate = deps;

      callback();
    });
  });
}

var pkgs = glob.sync('packages/*/package.json')
  .map(function(packageJsonPath) {
    return {
      cwd: path.dirname(packageJsonPath),
      json: require(path.join('..', packageJsonPath)),
      depsToUpdate: []
    };
  });

async.eachLimit(pkgs, 5, populateDepsToUpdate, function(err) {
  if (err) {
    console.error('Could not update dependencies', err);
    return;
  }

  async.eachLimit(pkgs, 5, updatePackage, function(err) {
    if (err) {
      console.error('Could not update dependencies', err);
      return;
    }

    console.log('Dependencies updated!');
  });
});
