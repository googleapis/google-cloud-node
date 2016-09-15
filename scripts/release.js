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

if (semver.valid(TRAVIS_TAG)) {
  MODULE_NAME = Module.UMBRELLA;
  MODULE_VERSION = TRAVIS_TAG;
} else {
  var parts = TRAVIS_TAG.split('-');

  MODULE_VERSION = parts.pop();
  MODULE_NAME = parts.pop();
}

var mod = new Module(MODULE_NAME);

mod.install();
mod.runSystemTests();

// we don't show docs for @google-cloud/common
// so testing is good enough!
if (MODULE_NAME === 'common') {
  echo('Skipping doc updates for ' + mod.packageName);
  exit();
}

git.submodule('master');

var manifestPath = path.join('master', 'docs', 'manifest.json');
var manifest = require(manifestPath);
var CONTENT_DIR = manifest.content;

// update manifest to include latest version of module
for (var i = 0, docs; i < manifest.modules.length; i++) {
  docs = manifest.modules[i];

  if (docs.id === MODULE_NAME) {
    if (docs.versions.indexOf(MODULE_VERSION) === -1) {
      docs.versions.push(MODULE_VERSION);
    }

    break;
  }
}

manifest = JSON.stringify(manifest, null, 2) + '\n';
fs.writeFileSync(manifestPath, manifest);

cd('master');

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

var VERSION_FOLDER = path.join(
  helpers.ROOT_DIR, 'ghpages', CONTENT_DIR, MODULE_NAME, MODULE_VERSION);

try {
  fs.accessSync(VERSION_FOLDER, fs.F_OK);
  echo('Docs already exist, exiting early.');
  exit();
} catch (e) {
  mkdir('-p', VERSION_FOLDER);
}

var JSON_PATH = path.join(
  helpers.ROOT_DIR, 'docs', CONTENT_DIR, MODULE_NAME, 'master', '*');

// copy common files
cp('docs/*.md', VERSION_FOLDER);
cp('docs/home.html', path.join('ghpages', CONTENT_DIR));
cp(manifestPath, 'ghpages');

// generate latest json
run('npm run docs');
cp('-R', JSON_PATH, VERSION_FOLDER);

// update umbrella
run('npm run bundle');

if (MODULE_NAME === Module.UMBRELLA) {
  var BUNDLE_JSON_PATH = path.join(
    'ghpages', CONTENT_DIR, Module.UMBRELLA, 'master', '*');

  cp('-rf', BUNDLE_JSON_PATH, VERSION_FOLDER);
}

cd('ghpages');

git.add('manifest.json', CONTENT_DIR);
git.commit('Update docs for ' + TRAVIS_TAG);
git.push('HEAD:gh-pages');
