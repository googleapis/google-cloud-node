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
 * This script should be ran anytime new code is introduced (PRs, merges, tags)
 * Here's a breakdown of what happens (and when)
 *
 * - First we check to see if there is either a code change OR a release. If
 *   neither is happening (could be a markdown update), we'll exit early.
 *
 * - If this is the first job being ran on circleci, we'll install dependencies
 *   for everything and run coveralls.
 *
 * - For each module that has code changes, we'll then install its dependencies
 *   and run unit tests.
 *
 * - If this is a push to master (not a pr) then we'll also run system-tests
 *   and test integration between modules that list the updated modules
 *   as dev dependencies.
 *
 * - Alternatively if this push to master is the result of a tag, then we'll
 *   install the tagged modules dependencies and run both unit and system tests.
 */

'use strict';

require('shelljs/global');

var helpers = require('./helpers');

var ci = helpers.ci;
var Module = helpers.Module;

// Get a list of the modules that have code changes.
var modules = Module.getUpdated();

if (!modules.length && !ci.isReleaseBuild()) {
  echo('No code changes found, exiting early.');
  exit();
}

// If this is the first pass (Circle only), let's get the code coverage
if (ci.isFirstPass()) {
  Module.installAll();
  Module.runCoveralls();
}

Module.buildDocs();

modules.forEach(function(mod) {
  mod.install();
  mod.runUnitTests();
  mod.runSnippetTests();
});

// If this is a push to master, let's run system tests
if (ci.isPushToMaster() && modules.length) {
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
}

// If this is a release, then let's run tests for tag
if (ci.isReleaseBuild()) {
  var release = ci.getRelease();
  var mod = new Module(release.name);

  mod.install();
  mod.runUnitTests();
  mod.runSystemTests();
}
