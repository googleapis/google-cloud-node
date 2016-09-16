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
 * This script should be ran anytime a release/tag is made. Its primary focus
 * is generating the release documentation.
 *
 * - First we install the released packages dependency and run the system tests.
 *
 * - If the tests fail or if the module is `common`, we exit early.
 *
 * - We then submodule the official "master" branch and update the
 *   `manifest.json` file to include the latest release version.
 *
 * - Then we submodule the official "gh-pages" branch and create a folder
 *   for the releases JSON to live in.
 *
 * - We also re-bundle google-cloud "master" docs in case this was a dependency
 *   that recieved a patch release.
 */

'use strict';

require('shelljs/global');

var semver = require('semver');
var path = require('path');
var fs = require('fs');
var helpers = require('./helpers');

var Module = helpers.Module;
var run = helpers.run;
var git = helpers.git;

var TRAVIS_TAG = process.env.TRAVIS_TAG;
var MODULE_NAME;
var MODULE_VERSION;

// If the tag name is a valid semver version, then it's the umbrella package
// otherwise it's @google-cloud/${module} package
if (semver.valid(TRAVIS_TAG)) {
  MODULE_NAME = Module.UMBRELLA;
  MODULE_VERSION = TRAVIS_TAG;
} else {
  var parts = TRAVIS_TAG.split('-');

  MODULE_VERSION = parts.pop();
  MODULE_NAME = parts.pop();
}

var mod = new Module(MODULE_NAME);

// install module dependencies
mod.install();

// run module unit tests
mod.runUnitTests();

// run module system tests
mod.runSystemTests();

// we don't show docs for @google-cloud/common
// so testing is good enough!
if (MODULE_NAME === 'common') {
  echo('Skipping doc updates for ' + mod.packageName);
  exit();
}

// update the manifest.json in master
git.submodule('master');

var manifestPath = path.resolve('./master', 'docs', 'manifest.json');
var manifest = require(manifestPath);
var CONTENT_DIR = manifest.content;

// update manifest to include latest version of whatever module got a release
for (var i = 0, docs; i < manifest.modules.length; i++) {
  docs = manifest.modules[i];

  if (docs.id === MODULE_NAME) {
    if (docs.versions.indexOf(MODULE_VERSION) === -1) {
      docs.versions.unshift(MODULE_VERSION);
    }

    break;
  }
}

// save the latest manifest
manifest = JSON.stringify(manifest, null, 2) + '\n';
fs.writeFileSync(manifestPath, manifest);

cd('master');

// commit it if the version is actually new (how else did we get here?!)
if (git.hasUpdates()) {
  git.add('docs/manifest.json');
  git.commit('Update docs/manifest.json for ' + TRAVIS_TAG + ' [ci skip]');
  git.push('master');
} else {
  echo('docs/manifest.json already includes the new version. Skipping commit.');
}

cd(helpers.ROOT_DIR);

// create a submodule for gh-pages in a folder called "ghpages"
git.submodule('gh-pages', 'ghpages');

// store the output folder in a variable
var VERSION_FOLDER = path.join(
  helpers.ROOT_DIR, 'ghpages', CONTENT_DIR, MODULE_NAME, MODULE_VERSION);

// if the output folder already exists, then we'll exit early
// otherwise we'll create it!
try {
  fs.accessSync(VERSION_FOLDER, fs.F_OK); // will throw if it doesn't exist
  echo('Docs already exist, exiting early.');
  exit();
} catch (e) {
  mkdir('-p', VERSION_FOLDER);
}

// copy common files
cp('docs/*.md', VERSION_FOLDER);
cp('docs/home.html', path.join('ghpages', CONTENT_DIR));
cp(manifestPath, 'ghpages');

var JSON_PATH = path.join(
  helpers.ROOT_DIR, 'docs', CONTENT_DIR, MODULE_NAME, 'master', '*');

// generate latest json and copy it to gh-pages
run('npm run docs');
cp('-R', JSON_PATH, VERSION_FOLDER);

// update master umbrella docs
run('npm run bundle');

// if the release was the umbrella module, then we need to copy
// the bundled files to the output folder
if (MODULE_NAME === Module.UMBRELLA) {
  var BUNDLE_JSON_PATH = path.join(
    'ghpages', CONTENT_DIR, Module.UMBRELLA, 'master', '*');

  cp('-rf', BUNDLE_JSON_PATH, VERSION_FOLDER);
}

cd('ghpages');

// check to see if there is anything to commit
if (!git.hasUpdates()) {
  echo('Nothing to commit. Exiting without pushing changes.');
  exit();
}

// set user to travis and commit/push!
git.setUser('travis-ci', 'travis@travis-ci.org');
git.add('manifest.json', CONTENT_DIR);
git.commit('Update docs for ' + TRAVIS_TAG + ' [ci skip]');
git.push('HEAD:gh-pages');
