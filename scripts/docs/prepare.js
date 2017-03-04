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

var multiline = require('multiline');

var helpers = require('../helpers');
var git = helpers.git;
var run = helpers.run;

var args = process.argv.splice(1);
var moduleName = args[1] || '';
var version = args[2] || '';
var tagName = getTagName(moduleName, version);

var ghpages = git.submodule('gh-pages');

rm('-rf', 'docs/json');
run(['npm run docs', moduleName, version]);
cp('-rf', 'docs/json/*', 'gh-pages/json');
cp('docs/manifest.json', 'gh-pages');

git.add('docs/manifest.json');
git.commit('Update manifest for ' + tagName);

ghpages.add('manifest.json', 'json');
ghpages.commit('Update docs for ' + tagName);

console.log(multiline(function() {/*

Now you just need to push to gh-pages: cd gh-pages && git push origin gh-pages

To clean up the gh-pages submodule: npm run remove-ghpages
*/}));

function getTagName(moduleName, version) {
  if (!version) {
    return 'master';
  }

  if (moduleName === 'google-cloud') {
    return 'v' + version;
  }

  return [moduleName, version].join('-');
}
