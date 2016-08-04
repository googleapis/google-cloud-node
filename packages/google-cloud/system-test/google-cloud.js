/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

var assert = require('assert');
var path = require('path');

var env = require('../../../system-test/env.js');
var gcloud = require('../');

// Test used to confirm we can perform a successful API operation.
function canConnect(config, callback) {
  gcloud.storage(config).getBuckets(callback);
}

describe('environment', function() {
  it('should connect with credentials object', canConnect.bind(null, {
    projectId: env.projectId,
    credentials: require(path.resolve(process.cwd(), env.keyFilename))
  }));

  it('should connect from a JSON keyFilename', canConnect.bind(null, {
    projectId: env.projectId,
    keyFilename: env.keyFilename
  }));

  it('should connect from environment variable', function(done) {
    var ENV_VAR = 'GOOGLE_APPLICATION_CREDENTIALS';

    process.env[ENV_VAR] = env.keyFilename;

    canConnect({ projectId: env.projectId }, function(err) {
      assert.ifError(err);
      delete process.env[ENV_VAR];
      done();
    });
  });
});
