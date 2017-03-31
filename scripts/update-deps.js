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
var semver = require('semver');

require('shelljs/global');

/*! Developer Documentation
 *
 * This file will dig through all of the sub-module's package.json's, check for
 * any compatible updates, and run `npm install` to update them.
 */

/**
 * Dependencies not to update.
 *
 * @type {string[]}
 */
var BLACKLIST = [
  'dns-zonefile',
  'dot-prop'
];

/**
 * The minimum version of Node that we support. This is compared against each
 * depdendency's package.json.engines.node to confirm the newest version is
 * compatible.
 *
 * @const {string}
 */
var MIN_SUPPORTED_NODE_VERSION =
  require('../package.json').engines.node.replace(/^\D*/, '');

var pkgs = glob.sync('packages/*/package.json')
  .map(function(packageJsonPath) {
    return {
      cwd: path.dirname(packageJsonPath),
      json: require(path.join('..', packageJsonPath)),
      depsToUpdate: [] // Updated in `populateDepsToUpdate`
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

function updatePackage(pkg, callback) {
  if (!is.empty(pkg.depsToUpdate)) {
    var updatedDeps = pkg.depsToUpdate.map(function(depToUpdate) {
      return depToUpdate.name + '@^' + depToUpdate.stable;
    });

    exec('npm install --save ' + updatedDeps.join(' '), {
      cwd: pkg.cwd
    });
  }

  callback();
}

function shouldUpdateDep(dependency, callback) {
  if (BLACKLIST.indexOf(dependency.name) > -1) {
    setImmediate(function() {
      callback(null, false);
    });
    return;
  }

  packageJson(dependency.name, dependency.stable).then(function(json) {
    var minCompatibleNodeVersion = json.engines && json.engines.node;

    if (!minCompatibleNodeVersion) {
      callback(null, true);
      return;
    }

    var isCompatible = semver.satisfies(
      MIN_SUPPORTED_NODE_VERSION,
      minCompatibleNodeVersion
    );

    callback(null, isCompatible);
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

    async.filter(updatedDeps, shouldUpdateDep, function(err, depsToUpdate) {
      if (err) {
        callback(err);
        return;
      }

      pkg.depsToUpdate = depsToUpdate;

      callback();
    });
  });
}
