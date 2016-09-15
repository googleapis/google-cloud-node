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

var ROOT_DIR = path.join(__dirname, '..');

module.exports.ROOT_DIR = ROOT_DIR;

function Module(name) {
  if (!(this instanceof Module)) {
    return new Module(name);
  }

  this.name = name;
  this.directory = path.join(ROOT_DIR, 'packages', name);

  var pkgJson = require(path.join(this.directory, 'package.json'));

  this.packageName = pkgJson.name;
  this.dependencies = Object.keys(pkgJson.dependencies || {})
    .concat(Object.keys(pkgJson.devDependencies || {}));
}

Module.UMBRELLA = 'google-cloud';

Module.getUpdated = function() {
  var repo = 'https://github.com/GoogleCloudPlatform/google-cloud-node.git';

  cd(ROOT_DIR);

  run([
    'git remote add temp',
    'https://github.com/GoogleCloudPlatform/google-cloud-node.git'
  ]);

  run('git fetch temp');

  var output = run('git diff HEAD temp/master --name-only', {
    stdio: null
  });

  var files = output.trim().split('\n');
  var modules = files.filter(function(file) {
    return /^packages\/.+\.js/.test(file);
  }).map(function(file) {
    return file.split('/')[1];
  });

  return uniq(modules).map(Module);
};

Module.getDependents = function(modules) {
  cd(ROOT_DIR);

  return globby
    .sync('*', {
      cwd: 'packages',
      ignore: Module.UMBRELLA
    })
    .map(Module)
    .filter(function(mod) {
      return mod.hasDeps(modules)
    });
};

Module.getCoverage = function(modules) {
  var tests = modules.map(function(mod) {
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
    tests.join(' '),
    '-R spec'
  ]);

  var lcovPath = path.join(ROOT_DIR, 'coverage', 'lcov.info');
  var lcov = fs.readFileSync(lcovPath, 'utf8');

  rm('-rf', path.dirname(lcovPath));

  return lcov;
};

Module.prototype.install = function() {
  run('npm install', { cwd: this.directory });
};

Module.prototype.link = function(mod) {
  run(['npm link', mod && mod.packageName || ''], {
    cwd: this.directory
  });
};

Module.prototype.runUnitTests = function() {
  run('npm run test', { cwd: this.directory });
};

Module.prototype.runSystemTests = function() {
  run('npm run system-test', { cwd: this.directory });
};

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

var REPO = 'https://${GH_OAUTH_TOKEN}@github.com/${GH_OWNER}/${GH_PROJECT_NAME}';

function submodule(branch, alias) {
  alias = alias || branch;

  run(['git submodule add -q -b', branch, REPO, alias]);
}

function hasUpdates() {
  var output = run('git status --porcelain', {
    stdio: null
  });

  return !!output && output.trim().length > 0;
}

function setUser(name, email) {
  run(['git config user.name', name]);
  run(['git config user.email', email]);
}

function add() {
  var files = [].slice.call(argument);
  var command = ['git add'].concat(files);

  run(command);
}

function commit(message) {
  run(['git commit -m', '"' + message + '"']);
}

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
