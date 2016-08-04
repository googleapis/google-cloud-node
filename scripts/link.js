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

// Doesn't depend on any other google-cloud* packages
link('common');

// These only depend on @google-cloud/common
[
  'bigtable',
  'compute',
  'datastore',
  'dns',
  'pubsub',
  'resource',
  'storage',
  'translate'
].forEach(function(packageName) {
  link(packageName, '@google-cloud/common');
  link(packageName);
});

// Depends on @google-cloud/common, @google-cloud/storage
[
  'bigquery',
  'prediction',
  'vision'
].forEach(function(packageName) {
  link(packageName, '@google-cloud/common');
  link(packageName, '@google-cloud/storage');
  link(packageName);
});

// Depends on @google-cloud/bigquery, @google-cloud/common, @google-cloud/pubsub, @google-cloud/storage
[
  'bigquery',
  'common',
  'pubsub',
  'storage'
].forEach(function(packageName) {
  link('logging', '@google-cloud/' + packageName);
});
link('logging');

// Finally, link sub-packages into main package
[
  'bigquery',
  'bigtable',
  'compute',
  'datastore',
  'dns',
  'logging',
  'prediction',
  'pubsub',
  'resource',
  'storage',
  'translate',
  'vision'
].forEach(function(packageName) {
  link('google-cloud', '@google-cloud/' + packageName);
});

function link(directory, target) {
  exec(target ? 'npm link ' + target : 'npm link', {
    cwd: path.join('packages', directory)
  });
}
