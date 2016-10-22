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

var globby = require('globby');
var path = require('path');

var build = require('./build');
var config = require('./config');
var run = require('../helpers').run;

var args = process.argv.splice(1);
var moduleName = args[1];
var version = args[2];

if (moduleName && version) {
  var releaseScript = path.join(__dirname, 'release.js');
  run(['node', releaseScript, moduleName, version]);
} else if (moduleName && !version) {
  build(moduleName);
} else {
  var modules = globby.sync('*', {
    cwd: './packages',
    ignore: config.IGNORE
  });

  modules.forEach(function(moduleName) {
    build(moduleName);
  });
}
