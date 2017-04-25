/**
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

var assert = require('assert');
var lodash = require('lodash');
var isObject = lodash.isObject;

var ErrorsApiTransport = require('../../utils/errors-api-transport.js');

var TIMEOUT = 20000;

function verifyPublishing(nodeEnv, ignoreEnvCheck, shouldSucceed, cb) {
  if (nodeEnv) {
    process.env.NODE_ENV = nodeEnv;
  }
  else {
    delete process.env.NODE_ENV;
  }

  var errors = require('../../src/index.js')({
    ignoreEnvironmentCheck: ignoreEnvCheck
  });
  var transport = new ErrorsApiTransport(errors._config, errors._logger);
  deleteAllEvents(transport, function() {
    publish(errors, transport, nodeEnv, ignoreEnvCheck, shouldSucceed, function() {
      deleteAllEvents(transport, cb);
    });
  });
}

function deleteAllEvents(transport, cb) {
  transport.deleteAllEvents(function(err) {
    assert.ifError(err);
    setTimeout(function() {
      transport.getAllGroups(function(err, groups) {
        assert.ifError(err);
        assert.ok(groups);
        assert.strictEqual(groups.length, 0);
        cb();
      });
    }, TIMEOUT);
  });
}

function publish(errors, transport, nodeEnv, ignoreEnvCheck, shouldSucceed, cb) {
  var errorId = [Date.now(), 'manual-interface-e2e-fixture'].join('_');
  errors.report(new Error(errorId), function(err, response, body) {
    if (shouldSucceed) {
      assert.ifError(err);
      assert(isObject(response));
      assert.deepEqual(body, {});
    }
    else {
      // The callback should have the error set in the situation where
      // errors should not be reported to the console.
      assert.ok(err);
      assert.equal(response, null);
      assert.equal(body, null);
    }

    setTimeout(function() {
      transport.getAllGroups(function(err, groups) {
        assert.ifError(err);
        assert.ok(groups);
        assert.strictEqual(groups.length, shouldSucceed ? 1 : 0);
        cb();
      });
    }, TIMEOUT);
  });
}

describe('End-to-end test of manual interface', function() {
  var originalNodeEnv;
  beforeEach(function() {
    originalNodeEnv = process.env.NODE_ENV;
  });

  afterEach(function() {
    if (originalNodeEnv) {
      process.env.NODE_ENV = originalNodeEnv;
    }
    else {
      delete process.env.NODE_ENV;
    }
  });

  it('should report errors with NODE_ENV=production and ignore env off', function(done) {
    var nodeEnv = 'production';
    var ignoreEnvCheck = false;
    var shouldSucceed = true;
    verifyPublishing(nodeEnv, ignoreEnvCheck, shouldSucceed, done);
  });

  it('should report errors with NODE_ENV=production and ignore env on', function(done) {
    var nodeEnv = 'production';
    var ignoreEnvCheck = true;
    var shouldSucceed = true;
    verifyPublishing(nodeEnv, ignoreEnvCheck, shouldSucceed, done);
  });

  it('should report errors with NODE_ENV=development and ignore env on', function(done) {
    var nodeEnv = 'development';
    var ignoreEnvCheck = true;
    var shouldSucceed = true;
    verifyPublishing(nodeEnv, ignoreEnvCheck, shouldSucceed, done);
  });

  it('should report errors without NODE_ENV set and ignore env on', function(done) {
    var nodeEnv = null;
    var ignoreEnvCheck = true;
    var shouldSucceed = true;
    verifyPublishing(nodeEnv, ignoreEnvCheck, shouldSucceed, done);
  });

  it('should not report errors with NODE_ENV=development and ignore env off', function(done) {
    var nodeEnv = 'development';
    var ignoreEnvCheck = false;
    var shouldSucceed = false;
    verifyPublishing(nodeEnv, ignoreEnvCheck, shouldSucceed, done);
  });

  it('should not report errors without NODE_ENV set and ignore env off', function(done) {
    var nodeEnv = null;
    var ignoreEnvCheck = false;
    var shouldSucceed = false;
    verifyPublishing(nodeEnv, ignoreEnvCheck, shouldSucceed, done);
  });

  it('should not report errors with NODE_ENV != production and ignore env off', function(done) {
    var nodeEnv = 'some-other-value';
    var ignoreEnvCheck = false;
    var shouldSucceed = false;
    verifyPublishing(nodeEnv, ignoreEnvCheck, shouldSucceed, done);
  });
}).timeout(6*TIMEOUT);
