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

require('shelljs/global');

var cwd = pwd().toString();

// Copy the legal files from the root of the repo so they are included in the
// release
cp(path.join(__dirname, '../AUTHORS'), cwd);
cp(path.join(__dirname, '../CONTRIBUTORS'), cwd);
cp(path.join(__dirname, '../COPYING'), cwd);

var args = process.argv.splice(1);
var moduleName = args[1];
var newVersion = args[2];
var tagName = [moduleName, newVersion].join('-');

if (moduleName === 'google-cloud') {
  tagName = ('v' + newVersion).replace(/^v+/, 'v');
}

// Create a git tag
exec('git tag -a ' + tagName + ' -m "' + moduleName + ' release for ' + newVersion + '"', {
  cwd: cwd
});

// Increment the version
exec('npm --no-git-tag-version version ' + newVersion, {
  cwd: cwd
});

console.log('Publishing package in 10 seconds. Exit process to abort');

setTimeout(function() {
  console.log('Publishing now');

  exec('rm -rf node_modules', {
    cwd: cwd
  });

  // Publish the module
  exec('npm publish', {
    cwd: cwd
  });

  console.log('echo "Now push to master: git push origin master --follow-tags"');

  // Remove the duplicated files
  rm([
    path.join(cwd, 'AUTHORS'),
    path.join(cwd, 'CONTRIBUTORS'),
    path.join(cwd, 'COPYING')
  ]);
}, 10000);
