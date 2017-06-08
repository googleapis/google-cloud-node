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

var cwd = pwd().toString();
var npmVersion = parseInt(exec('npm --version', { silent: true }), 10);

var args = process.argv.splice(1);
var moduleName = args[1];
var newVersion = args[2].replace(/^v*/, '');

// Copy the legal files from the root of the repo so they are included in the
// release
cp(path.join(__dirname, '../AUTHORS'), cwd);
cp(path.join(__dirname, '../CONTRIBUTORS'), cwd);
cp(path.join(__dirname, '../COPYING'), cwd);

var npmModuleName = moduleName === 'google-cloud' ? '' : '@google-cloud/';
npmModuleName += moduleName;

var distTags = exec('npm show ' + npmModuleName + ' dist-tags --json', {
  cwd: cwd,
  silent: true
}).stdout || '{}';

var latestVersion = JSON.parse(distTags).latest;

if (['major', 'minor', 'patch'].includes(newVersion)) {
  // De-alias the new version.
  newVersion = semver.inc(latestVersion, newVersion);
}

var tagName = [moduleName, newVersion].join('-');

if (latestVersion && semver.lte(newVersion, latestVersion)) {
  throw new Error([
    'A newer version of `' + npmModuleName +'` is on npm: ' + latestVersion
  ].join(''));
}

if (moduleName === 'google-cloud') {
  if (npmVersion < 3) {
    throw new Error([
      'Publishing google-cloud requires the latest npm.',
      'Please update by running `npm install -g npm` before publishing.'
    ].join(' '));
  }

  tagName = ('v' + newVersion);
  cp(path.join(__dirname, '../README.md'), cwd);
}

// Increment the version
exec('npm --no-git-tag-version version ' + newVersion, {
  cwd: cwd
});

console.log('Publishing package in 10 seconds. Exit process to abort');

setTimeout(function() {
  console.log('Publishing now');

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

  // Remove the duplicated files
  rm([
    path.join(cwd, 'AUTHORS'),
    path.join(cwd, 'CONTRIBUTORS'),
    path.join(cwd, 'COPYING')
  ]);

  exec('git commit -am "' + moduleName + ' @ ' + newVersion + ' tagged."');

  // Create a git tag
  exec('git tag -a ' + tagName + ' -m "' + moduleName + ' release for ' + newVersion + '"', {
    cwd: cwd
  });

  console.log('Now push to master: git push origin master --follow-tags"');
}, 0);
