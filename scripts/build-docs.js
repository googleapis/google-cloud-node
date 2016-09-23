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
 * This script should be ran anytime after a successful build occurs on Travis.
 * This script is responsible for building the JSON docs after a push to master.
 * Here's a breakdown of what happens (and when)
 *
 * - First we check to see if this the first job to be ran on Travis and that
 *   it's a push to master (not a PR). If these conditions are not met, we
 *   exit early.
 *
 * - Then we'll submodule in the gh-pages branch and generate the latest
 *   master docs for ALL modules.
 *
 * - If this is CI job is the result of a release, we'll add the release version
 *   to the manifest and generate the JSON docs for said release.
 *
 * - After all this, if any doc changes have been made, we'll commit them to
 *   gh-pages.
 */

'use strict';

require('shelljs/global');

var fs = require('fs');
var globby = require('globby');
var path = require('path');

var helpers = require('./helpers');

var ci = helpers.ci;
var git = helpers.git;
var Module = helpers.git;
var run = helpers.run;

if (!ci.isFirstPass()) {
  echo('Skipping documentation updates.');
  exit();
}

// set user to travis
git.setUser('travis-ci', 'travis@travis-ci.org');

// Create a submodule for the gh-pages branch
var ghpages = git.submodule('gh-pages', 'ghpages');
var GHPAGES_JSON = path.join(ghpages.cwd, 'json');

// generate latest json docs
Module.buildDocs();

// copy docs to gh-pages
cp('-R', 'docs/json/*', GHPAGES_JSON);
cp('docs/home.html', GHPAGES_JSON);
cp('docs/manifest.json', ghpages.cwd);

globby
  .sync(path.join(GHPAGES_JSON, '*/master'))
  .forEach(function(dir) {
    cp('docs/*.md', dir);
  });

// create the latest bundled docs
run('npm run bundle');

var release = ci.getRelease();

// check to see if we have a release and it's not common..
if (release && release.name !== 'common') {
  // we need to add the new release to official docs..
  var master = git.submodule('master');

  var manifestPath = path.resolve(master.cwd, 'docs/manifest.json');
  var manifest = require(manifestPath);

  // update manifest to include latest version of whatever module got a release
  for (var i = 0, docs; i < manifest.modules.length; i++) {
    docs = manifest.modules[i];

    if (docs.id === release.name) {
      if (docs.versions.indexOf(release.version) === -1) {
        docs.versions.unshift(release.version);
      }

      break;
    }
  }

  // save the latest manifest in master
  manifest = JSON.stringify(manifest, null, 2) + '\n';
  fs.writeFileSync(manifestPath, manifest);

  // add updated manfiest to gh-pages
  cp(manifestPath, ghpages.cwd);

  // commit it if the version is actually new (how else did we get here?!)
  if (master.hasUpdates()) {
    master.add('docs/manifest.json');
    master.commit('Update docs/manifest.json for ' + ci.getTagName());
    master.push('master');
  } else {
    echo('manifest already includes the new version. Skipping commit.');
  }

  // store the output folder in a variable
  var RELEASE_DIR = path.resolve(GHPAGES_JSON, release.name, release.version);

  // if the output folder doesn't exist, then we create it!
  try {
    fs.accessSync(RELEASE_DIR, fs.F_OK);
  } catch (e) {
    mkdir('-p', RELEASE_DIR);
  }

  var JSON_DIR = path.join(
    release.name === Module.UMBRELLA ? ghpages.cwd : 'docs',
    'json',
    release.name,
    'master/*'
  );

  cp('-rf', JSON_DIR, RELEASE_DIR);

  var tocPath = path.join(RELEASE_DIR, 'toc.json');
  var toc = require(tocPath);

  toc.tagName = ci.getTagName();
  toc = JSON.stringify(toc);
  fs.writeFileSync(tocPath, toc);
}

if (ghpages.hasUpdates()) {
  ghpages.add('manifest.json', 'json');
  ghpages.commit('Update docs for ' + (ci.getTagName() || 'master'));
  ghpages.push('HEAD:gh-pages');
} else {
  echo('Nothing to commit. Exiting without pushing changes.');
}
