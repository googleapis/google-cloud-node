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

var semver = require('semver');

require('shelljs/global');

var cwd = pwd().toString();

var args = process.argv.splice(1);
var moduleName = args[1];
var newVersion = args[2].replace(/^v*/, '');
var tagName = [moduleName, newVersion].join('-');

var npmModuleName = moduleName === 'google-cloud' ? '' : '@google-cloud/';
npmModuleName += moduleName;

var distTags = exec('npm show ' + npmModuleName + ' dist-tags --json', {
  cwd: cwd,
  silent: true
}).stdout || '{}';

var latestVersion = JSON.parse(distTags).latest;

if (latestVersion && semver.lte(newVersion, latestVersion)) {
  throw new Error([
    'A newer version of `' + npmModuleName +'` is on npm: ' + latestVersion
  ].join(''));
}

if (moduleName === 'google-cloud') {
  tagName = 'v' + newVersion;
}

// Increment the version
exec('npm --no-git-tag-version version ' + newVersion, {
  cwd: cwd
});

exec('git commit -am "' + moduleName + ' @ ' + newVersion + ' tagged."');

// Create a git tag
exec('git tag -a ' + tagName + ' -m "' + moduleName + ' release for ' + newVersion + '"', {
  cwd: cwd
});

exec('git fetch origin', {
  cwd: cwd
});

exec('git rebase origin/master', {
  cwd: cwd
});

exec('git push origin master --follow-tags', {
  cwd: cwd
});
