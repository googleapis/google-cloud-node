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

var async = require('async');
var fs = require('fs');
var path = require('path');
var prop = require('propprop');

require('shelljs/global');

var directories = require('../docs/manifest.json').modules.map(prop('id'));
var PARALLEL_LIMIT = 10;

// This is a helper method which will install each module's dependencies.

function installModule(moduleName, callback) {
  console.log('Installing dependencies for ' + moduleName);

  exec('npm install', {
    async: true,
    cwd: path.join(__dirname, '../packages', moduleName)
  }, function(err) {
    if (err) {
      // Retry installing to circumvent locked npm cache file conflicts on
      // AppVeyor. (RE: https://github.com/npm/npm/issues/9696)
      setTimeout(function() {
        installModule(moduleName, callback);
      }, 250);
      return;
    }

    callback();
  });
}

async.eachLimit(directories, PARALLEL_LIMIT, installModule, function(err) {
  if (err) {
    console.error('All dependencies could not be installed');
    return;
  }

  console.log('All dependencies installed');
});
