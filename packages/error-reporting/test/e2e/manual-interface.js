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

var TIMEOUT = 30000;

function deleteAllEvents(transport, cb) {
  transport.deleteAllEvents(function(err) {
    assert.ifError(err);
    setTimeout(function() {
      transport.getAllGroups(function(err, groups) {
        assert.ifError(err);
        assert.ok(groups);
        assert.strictEqual(groups.length, 0);
        setTimeout(cb, TIMEOUT);
      });
    }, TIMEOUT);
  });
}

function verifyPublish(errors, transport, cb) {
  var errorId = [Date.now(), 'manual-interface-e2e-fixture'].join('_');
  errors.report(new Error(errorId), function(err, response, body) {
    assert.ifError(err);
    assert(isObject(response));
    assert.deepEqual(body, {});

    setTimeout(function() {
      transport.getAllGroups(function(err, groups) {
        assert.ifError(err);
        assert.ok(groups);
        assert.strictEqual(groups.length, 1);
        setTimeout(cb, TIMEOUT);
      });
    }, TIMEOUT);
  });
}

describe('End-to-end test of manual interface', function() {
  var errors;
  var transport;
  before(function(done) {
    errors = require('../../src/index.js')({
      ignoreEnvironmentCheck: true
    });
    transport = new ErrorsApiTransport(errors._config, errors._logger);
    deleteAllEvents(transport, done);
  });

  after(function(done) {
    deleteAllEvents(transport, done);
  });

  it('should report errors', function(done) {
    verifyPublish(errors, transport, done);
  });
}).timeout(5*TIMEOUT);
