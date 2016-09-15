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

/*!
 * Developer Documentation
 *
 * This script should be ran anytime new code is introduced (PRs, merges, etc.)
 * Here's a breakdown of what happens (and when)
 *
 * - First we check to see if any modules have had code updates. A code update
 *   is either a .js file update or a dependency update. In the event that a
 *   module did not receive a code update (could be a markdown update), we'll
 *   exit early.
 *
 * - For each module that has updates, we'll install their dependencies and run
 *   their unit tests.
 *
 * - Assuming all the unit tests pass, we'll then attempt to get code coverage
 *   for the changed files.
 *
 * - At this point, if this "build" was triggered by a PR or is a merge to a
 *   branch other than master, we'll exit early here. All steps after this point
 *   assume a merge to the master branch.
 *
 * - Next we'll run system tests for any and all modules that have recieved code
 *   updates.
 *
 * - Assuming all system tests pass, we'll create symlinks for each module
 *   via `npm link`. We'll then search for any modules that have the updated
 *   modules listed as dependencies or devDependencies. For each dependent
 *   module we find, we'll run it's system tests using the symlinks in place
 *   of the latest stable dependency version.
 *
 * - We'll then check to see if this build requires a documentation update.
 *   This is determined by the `TEST_ONLY` environment variable. This is set
 *   in the .travis.yml file. If this build does not require a documentation
 *   update then we'll exit early.
 *
 * - Finally the last step is to update documentation for the "master" version
 *   in the gh-pages branch. We'll use our npm scripts (docs & bundle) to
 *   generate all the necessary JSON and commit it to gh-pages.
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

// Get a list of the modules that have code changes.
var modules = Module.getUpdated();

// No code changes? Could be markdown, etc.. Nothing to do here!
if (!modules.length) {
  echo('No code changes found, exiting early.');
  exit();
}

// For each module, install dependencies and run unit tests.
modules.forEach(function(mod) {
  mod.install();
  mod.runUnitTests();
});

// Using istanbul, generate code coverage lcov.
var coverage = Module.getCoverage(modules);

// Pass lcov to coveralls.. if it fails oh well.
coveralls.handleInput(coverage, function(err) {
  if (err) {
    echo('Coveralls error!');
    echo(err.message || err);
  }
});

// If this is anything besides a merge to master, we can exit early.
if (TRAVIS_BRANCH !== 'master' || IS_PULL_REQUEST) {
  echo('Skipping system tests.');
  exit();
}

// Run system tests for each module
// If they pass then create a symlink via npm link
modules.forEach(function(mod) {
  mod.runSystemTests();
  mod.link();
});

// Get a list of modules that list the updated modules as either
// dependencies or devDependencies
var dependents = Module.getDependents(modules);

// Install dependencies for each "dependent"
// link the updated modules via `npm link @google-common/${module}`
// run system tests for dependent
dependents.forEach(function(dep) {
  dep.install();

  modules.forEach(function(mod) {
    dep.link(mod);
  });

  dep.runSystemTests();
});

// Check to see whether or not this build requires documentation updates
// If not, exit early
if (TEST_ONLY) {
  echo('Skipping doc updates.');
  exit();
}

// Create a submodule for the gh-pages branch
git.submodule('gh-pages', 'ghpages');

// generate json for version "master"
run('npm run docs');

// copy all json & common files
cp('-R', 'docs/json/*', 'ghpages/json');
cp('docs/home.html', 'ghpages/json');
cp('docs/manifest.json', 'ghpages');

// generate the "master" google-cloud docs
run('npm run bundle');

cd('ghpages');

// check to see if there is anything to commit
if (!git.hasUpdates()) {
  echo('Nothing to commit. Exiting without pushing changes.');
  exit();
}

// set user to travis and commit/push!
git.setUser('travis-ci', 'travis@travis-ci.org');
git.add('manifest.json', 'json');
git.commit('Update docs after merge to master [ci skip]');
git.push('HEAD:gh-pages');
