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

require('shelljs/global');

var coveralls = require('coveralls');
var helpers = require('./helpers');

var Module = helpers.Module;
var run = helpers.run;
var git = helpers.git;

var TRAVIS_BRANCH = process.env.TRAVIS_BRANCH;
var IS_PULL_REQUEST = process.env.TRAVIS_PULL_REQUEST === 'true';
var TEST_ONLY = process.env.TEST_ONLY === 'true';

var modules = Module.getUpdated();

if (!modules.length) {
  echo('No code changes found, exiting early.');
  exit();
}

modules.forEach(function(mod) {
  mod.install();
  mod.runUnitTests();
});

var coverage = Module.getCoverage(modules);

coveralls.handleInput(coverage, function(err) {
  if (err) {
    echo('Coveralls error!');
    echo(err.message || err);
  }
});

if (TRAVIS_BRANCH !== 'master' || IS_PULL_REQUEST) {
  echo('Skipping system tests.');
  exit();
}

modules.forEach(function(mod) {
  mod.runSystemTests();
  mod.link();
});

var dependents = Module.getDependents(modules);

dependents.forEach(function(dep) {
  dep.install();

  modules.forEach(function(mod) {
    dep.link(mod);
  });

  dep.runSystemTests();
});

if (TEST_ONLY) {
  echo('Skipping doc updates.');
  exit();
}

git.submodule('gh-pages', 'ghpages');

// generate all the latest json
run('npm run docs');

// copy all the json/common things
cp('-R', 'docs/json/*', 'ghpages/json');
cp('docs/home.html', 'ghpages/json');
cp('docs/manifest.json', 'ghpages');

// generate the latest umbrella docs
run('npm run bundle');

cd('ghpages');

if (!git.hasUpdates()) {
  echo('Nothing to commit. Exiting without pushing changes.');
  exit();
}

git.setUser('travis-ci', 'travis@travis-ci.org');
git.add('manifest.json', 'json');
git.commit('Update docs after merge to master [ci skip]');
git.push('HEAD:gh-pages');
