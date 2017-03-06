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
var semver = require('semver');

require('shelljs/global');

var CIRCLE_TAG = process.env.CIRCLE_TAG;

var moduleName = CIRCLE_TAG.replace(/-.*/, '');
var newVersion = CIRCLE_TAG.replace(/.*-/, '');
var tagName = [moduleName, newVersion].join('-');

var npmModuleName = moduleName === 'google-cloud' ? '' : '@google-cloud/';
npmModuleName += moduleName;

var cwd = path.join(__dirname, '..', 'packages', moduleName);

// Copy the legal files from the root of the repo so they are included in the
// release
cp(path.join(__dirname, '../AUTHORS'), cwd);
cp(path.join(__dirname, '../CONTRIBUTORS'), cwd);
cp(path.join(__dirname, '../COPYING'), cwd);

if (moduleName === 'google-cloud') {
  tagName = 'v' + newVersion;
  cp(path.join(__dirname, '../README.md'), cwd);
}

console.log('Publishing', npmModuleName, '@', newVersion);

if (moduleName === 'google-cloud') {
  exec('rm npm-shrinkwrap.json', {
    cwd: cwd
  });

  exec('rm -rf node_modules', {
    cwd: cwd
  });

  exec('npm install', {
    cwd: cwd
  });

  exec('npm dedupe', {
    cwd: cwd
  });

  exec('npm shrinkwrap', {
    cwd: cwd
  });
}

// To circumvent an npm bug which can publish empty node_modules
exec('rm -rf node_modules', {
  cwd: cwd
});

// Publish the module
exec('npm publish --access public', {
  cwd: cwd
});

exec('git fetch origin', {
  cwd: cwd
});

exec('git rebase origin/master', {
  cwd: cwd
});

exec('git push origin master [ci skip]', {
  cwd: cwd
});

console.log('Published', npmModuleName, '@', newVersion, 'successfully');