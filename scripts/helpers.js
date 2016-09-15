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

var path = require('path');
var fs = require('fs');
var uniq = require('array-uniq');
var globby = require('globby');
var execSync = require('child_process').execSync;
var extend = require('extend');

require('shelljs/global');

/**
 * google-cloud-node root directory.. useful in case we need to cd
 */
var ROOT_DIR = path.join(__dirname, '..');

module.exports.ROOT_DIR = ROOT_DIR;

/**
 * Helper class to make install dependencies + running tests easier to read
 * and less error prone.
 *
 * @class Module
 * @param {string} name - The module name (e.g. common, bigquery, etc.)
 */
function Module(name) {
  if (!(this instanceof Module)) {
    return new Module(name);
  }

  this.name = name;
  this.directory = path.join(ROOT_DIR, 'packages', name);

  var pkgJson = require(path.join(this.directory, 'package.json'));

  this.packageName = pkgJson.name;
  this.dependencies = Object.keys(pkgJson.devDependencies || {});
}

/**
 * Umbrella module name.
 *
 * @static
 */
Module.UMBRELLA = 'google-cloud';

/**
 * Retrieves a list of modules that are ahead of origin/master. We do this by
 * creating a temporary remote branch that points official master branch.
 * We then do a git diff against the two to get a list of files. From there we
 * only care about either JS or JSON files being changed.
 *
 * @static
 * @return {Module[]} modules - The updated modules.
 */
Module.getUpdated = function() {
  cd(ROOT_DIR);

  run([
    'git remote add temp',
    'https://github.com/GoogleCloudPlatform/google-cloud-node.git'
  ]);

  run('git fetch -q temp');

  var output = run('git diff HEAD temp/master --name-only', {
    stdio: null // prevents piping to the console
  });

  var files = output.trim().split('\n');
  var modules = files.filter(function(file) {
    return /^packages\/.+\.js/.test(file);
  }).map(function(file) {
    return file.split('/')[1];
  });

  return uniq(modules).map(Module);
};

/**
 * Returns a list containing ALL the modules.
 *
 * @static
 * @return {Module[]} modules - All of em'!
 */
Module.getAll = function() {
  cd(ROOT_DIR);

  return globby
    .sync('*', {
      cwd: 'packages',
      ignore: Module.UMBRELLA
    })
    .map(Module)
};

/**
 * Returns a list of modules that are dependent on one or more of the modules
 * specified.
 *
 * @static
 * @param {Module[]} modules - The dependency modules.
 * @return {Module[]} modules - The dependent modules.
 */
Module.getDependents = function(modules) {
  return Module.getAll().filter(function(mod) {
    return mod.hasDeps(modules)
  });
};

/**
 * Generates an lcov coverage report for the specified modules.
 *
 * @static
 * @return {string} lcov
 */
Module.getCoverage = function() {
  var tests = Module.getAll().map(function(mod) {
    return path.join(mod.directory, 'test', '*.js');
  });

  cd(ROOT_DIR);

  run([
    'istanbul',
    'cover _mocha',
    '--report lcovonly',
    '-x "packages/*/src/v*/*.js"',
    '--',
    '--no-timeout',
    '--bail',
    'packages/*/test/*.js',
    '-R spec'
  ]);

  var lcovPath = path.join(ROOT_DIR, 'coverage', 'lcov.info');

  run(['cat', lcovPath, '|', './coveralls.js'], {
    cwd: path.join(ROOT_DIR, 'node_modules', 'coveralls', 'bin')
  });

  rm('-rf', path.dirname(lcovPath));
};

/**
 * Installs dependencies for all the modules!
 */
Module.installAll = function() {
  run('npm run install-modules', { cwd: ROOT_DIR });
};

/**
 * Installs this modules dependencies via `npm install`
 */
Module.prototype.install = function() {
  run('npm install', { cwd: this.directory });
};

/**
 * Creates/uses symlink for a module (depending on if module was provided)
 * via `npm link`
 *
 * @param {Module=} mod - The module to use with `npm link ${mod.packageName}`
 */
Module.prototype.link = function(mod) {
  run(['npm link', mod && mod.packageName || ''], {
    cwd: this.directory
  });
};

/**
 * Runs unit tests for this module via `npm run test`
 */
Module.prototype.runUnitTests = function() {
  run('npm run test', { cwd: this.directory });
};

/**
 * Runs system tests for this module via `npm run system-test`
 */
Module.prototype.runSystemTests = function() {
  run('npm run system-test', { cwd: this.directory });
};

/**
 * Checks to see if this module has one or more of the supplied modules
 * as a dev dependency.
 *
 * @param {Module[]} modules - The modules to check for.
 * @return {boolean}
 */
Module.prototype.hasDeps = function(modules) {
  var packageName;

  for (var i = 0; i < modules.length; i++) {
    packageName = modules[i].packageName;

    if (this.dependencies.indexOf(packageName) > -1) {
      return true;
    }
  }

  return false;
};

module.exports.Module = Module;

/**
 * Exec's command via child_process.execSync.
 * By default all output will be piped to the console unless `stdio`
 * is overridden.
 *
 * @param {string|string[]} command - The command to run.
 * @param {object=} options - Options to pass to `execSync`.
 * @return {string|null} -
 */
function run(command, options) {
  var response;

  options = extend({
    stdio: [0, 1, 2]
  }, options);

  if (Array.isArray(command)) {
    command = command.join(' ');
  }

  echo(command);

  try {
    response = execSync(command, options);
  } catch (e) {
    console.error(e.message);
    exit(1);
  }

  if (response instanceof Buffer) {
    return response.toString();
  }
}

module.exports.run = run;

// We'll use this for cloning/submoduling/pushing purposes on CI
var REPO = 'https://${GH_OAUTH_TOKEN}@github.com/${GH_OWNER}/${GH_PROJECT_NAME}';

/**
 * Creates a submodule in the root directory in quiet mode.
 *
 * @alias git.submodule
 * @param {string} branch - The branch to use.
 * @param {string=} alias - Name of the folder that contains submodule.
 */
function submodule(branch, alias) {
  alias = alias || branch;

  run(['git submodule add -q -b', branch, REPO, alias], {
    cwd: ROOT_DIR
  });
}

/**
 * Check to see if git has any files it can commit.
 *
 * @alias git.hasUpdates
 * @return {boolean}
 */
function hasUpdates() {
  var output = run('git status --porcelain', {
    stdio: null
  });

  return !!output && output.trim().length > 0;
}

/**
 * Sets git user
 *
 * @alias git.setUser
 * @param {string} name - User name
 * @param {string} email - User email
 */
function setUser(name, email) {
  run(['git config user.name', name]);
  run(['git config user.email', email]);
}

/**
 * Adds all files passed in via git add
 *
 * @alias git.add
 * @param {...string} file - File to add
 */
function add() {
  var files = [].slice.call(argument);
  var command = ['git add'].concat(files);

  run(command);
}

/**
 * Commits to git via commit message.
 *
 * @alias git.commit
 * @param {string} message - The commit message.
 */
function commit(message) {
  run(['git commit -m', '"' + message + '"']);
}

/**
 * Runs git status and pushes changes in quiet mode.
 *
 * @alias git.push
 * @param {string} branch - The branch to push to.
 */
function push(branch) {
  run('git status');
  run(['git push -q', REPO, branch]);
}

module.exports.git = {
  submodule: submodule,
  hasUpdates: hasUpdates,
  setUser: setUser,
  add: add,
  commit: commit,
  push: push
};
