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

var fs = require('fs');
var path = require('path');
var multiline = require('multiline');

var helpers = require('../helpers');
var git = helpers.git;
var Module = helpers.Module;
var run = helpers.run;

var args = process.argv.splice(1);
var moduleName = args[1];
var version = args[2];

var tagName = getTagName(moduleName, version);
var isUmbrella = moduleName === Module.UMBRELLA;

git.checkout(tagName);

var ghpages = git.submodule('gh-pages');
var RELEASE_DIR = path.join(ghpages.cwd, 'json', moduleName, version);
var MASTER_JSON = path.join(
  isUmbrella ? 'gh-pages' : 'docs',
  'json',
  moduleName,
  'master/*'
);

Module.buildDocs();

if (isUmbrella) {
  run('npm run bundle');
}

mkdir('-p', RELEASE_DIR);
cp('-rf', MASTER_JSON, RELEASE_DIR);

var tocPath = path.join(RELEASE_DIR, 'toc.json');
var toc = require(tocPath);

toc.tagName = tagName;
fs.writeFileSync(tocPath, JSON.stringify(toc));

var manifestPath = path.join(ghpages.cwd, 'manifest.json');
var manifest = require(manifestPath);
var modConfig = findWhere(manifest.modules, { id: moduleName });

if (!modConfig) {
  modConfig = {
    id: moduleName,
    name: '@google-cloud/' + moduleName,
    defaultService: moduleName,
    versions: ['master']
  };

  manifest.modules.push(modConfig);
  manifest.modules.sort(sortByModName);
}

modConfig.versions.unshift(version);
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

if (!isUmbrella) {
  run('npm run bundle');
}

git.checkout('-');

console.log(multiline(function() {/*

To delete the gh-pages submodule, run the following commands:

git submodule deinit -f gh-pages
git rm -rf gh-pages
git rm -rf .gitmodules
rm -rf .git/modules/gh-pages
*/}));

function getTagName(moduleName, version) {
  if (moduleName === Module.UMBRELLA) {
    return 'v' + version;
  }

  return [moduleName, version].join('-');
}

function findWhere(collection, props) {
  var i, key, obj;

  collLoop: for (i = 0; i < collection.length; i++) {
    obj = collection[i];

    for (key in props) {
      if (obj[key] !== props[key]) {
        continue collLoop;
      }
    }

    return obj;
  }

  return null;
}

function sortByModName(a, b) {
  if (a.id === Module.UMBRELLA) {
    return -1;
  }

  if (b.id === Module.UMBRELLA) {
    return 1;
  }

  return +(a.id > b.id) || +(a.id === b.id) - 1;
}
