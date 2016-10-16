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
var extend = require('extend');
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var ServiceObject = require('@google-cloud/common').ServiceObject;
var util = require('@google-cloud/common').util;

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

var parseHttpRespBodyOverride = null;
var promisified = false;
var fakeUtil = extend({}, util, {
  parseHttpRespBody: function() {
    if (parseHttpRespBodyOverride) {
      return parseHttpRespBodyOverride.apply(null, arguments);
    }

    return util.parseHttpRespBody.apply(this, arguments);
  },
  promisifyAll: function(Class) {
    if (Class.name === 'Operation') {
      promisified = true;
    }
  }
});

describe('Operation', function() {
  var Operation;
  var operation;

  var SCOPE = {
    Promise: Promise
  };
  var OPERATION_NAME = 'operation-name';

  before(function() {
    Operation = proxyquire('../src/operation.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil
      }
    });
  });

  beforeEach(function() {
    parseHttpRespBodyOverride = null;
    operation = new Operation(SCOPE, OPERATION_NAME);
  });

  afterEach(function() {
    operation.removeAllListeners();
  });

  describe('instantiation', function() {
    it('should localize the name', function() {
      assert.strictEqual(operation.name, OPERATION_NAME);
    });

    it('should inherit from ServiceObject', function() {
      assert(operation instanceof ServiceObject);

      var calledWith = operation.calledWith_[0];

      assert.strictEqual(calledWith.parent, SCOPE);
      assert.strictEqual(calledWith.baseUrl, '/operations');
      assert.strictEqual(calledWith.id, OPERATION_NAME);
      assert.deepEqual(calledWith.methods, {
        delete: true,
        exists: true,
        get: true
      });
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should give the right baseUrl for a global Operation', function() {
      var operation = new Operation({
        constructor: {
          name: 'Compute'
        }
      }, OPERATION_NAME);

      var calledWith = operation.calledWith_[0];
      assert.strictEqual(calledWith.baseUrl, '/global/operations');
    });

    it('should correctly initialize variables', function() {
      assert.strictEqual(operation.completeListeners, 0);
      assert.strictEqual(operation.hasActiveListeners, false);
    });
  });

  describe('getMetadata', function() {
    it('should call ServiceObject.delete', function(done) {
      FakeServiceObject.prototype.getMetadata = function() {
        assert.strictEqual(this, operation);
        done();
      };

      operation.getMetadata();
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        FakeServiceObject.prototype.getMetadata = function(callback) {
          callback(error, apiResponse);
        };
      });

      it('should ignore false errors', function(done) {
        var apiResponse = {
          name: operation.name,
          error: {
            errors: []
          }
        };

        FakeServiceObject.prototype.getMetadata = function(callback) {
          callback(apiResponse.error, apiResponse);
        };

        operation.getMetadata(function(err, metadata, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should execute callback with error and API response', function(done) {
        operation.getMetadata(function(err, metadata, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(metadata, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          operation.getMetadata();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        FakeServiceObject.prototype.getMetadata = function(callback) {
          callback(null, apiResponse);
        };
      });

      it('should update the metadata to the API response', function(done) {
        operation.getMetadata(function(err) {
          assert.ifError(err);
          assert.strictEqual(operation.metadata, apiResponse);
          done();
        });
      });

      it('should exec callback with metadata and API response', function(done) {
        operation.getMetadata(function(err, metadata, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          operation.getMetadata();
        });
      });
    });
  });

  describe('promise', function() {
    beforeEach(function() {
      operation.startPolling_ = util.noop;
    });

    it('should return an instance of the localized Promise', function() {
      var FakePromise = operation.Promise = function() {};
      var promise = operation.promise();

      assert(promise instanceof FakePromise);
    });

    it('should reject the promise if an error occurs', function() {
      var error = new Error('err');

      setImmediate(function() {
        operation.emit('error', error);
      });

      return operation.promise().then(function() {
        throw new Error('Promise should have been rejected.');
      }, function(err) {
        assert.strictEqual(err, error);
      });
    });

    it('should resolve the promise on complete', function() {
      var metadata = {};

      setImmediate(function() {
        operation.emit('complete', metadata);
      });

      return operation.promise().then(function(data) {
        assert.deepEqual(data, [metadata]);
      });
    });
  });

  describe('listenForEvents_', function() {
    beforeEach(function() {
      operation.startPolling_ = util.noop;
    });

    it('should start polling when complete listener is bound', function(done) {
      operation.startPolling_ = function() {
        done();
      };

      operation.on('complete', util.noop);
    });

    it('should track the number of listeners', function() {
      assert.strictEqual(operation.completeListeners, 0);

      operation.on('complete', util.noop);
      assert.strictEqual(operation.completeListeners, 1);

      operation.removeListener('complete', util.noop);
      assert.strictEqual(operation.completeListeners, 0);
    });

    it('should only run a single pulling loop', function() {
      var startPollingCallCount = 0;

      operation.startPolling_ = function() {
        startPollingCallCount++;
      };

      operation.on('complete', util.noop);
      operation.on('complete', util.noop);

      assert.strictEqual(startPollingCallCount, 1);
    });

    it('should close when no more message listeners are bound', function() {
      operation.on('complete', util.noop);
      operation.on('complete', util.noop);
      assert.strictEqual(operation.hasActiveListeners, true);

      operation.removeListener('complete', util.noop);
      assert.strictEqual(operation.hasActiveListeners, true);

      operation.removeListener('complete', util.noop);
      assert.strictEqual(operation.hasActiveListeners, false);
    });
  });

  describe('startPolling_', function() {
    var listenForEvents_;
    var operation;

    before(function() {
      listenForEvents_ = Operation.prototype.listenForEvents_;
    });

    after(function() {
      Operation.prototype.listenForEvents_ = listenForEvents_;
    });

    beforeEach(function() {
      Operation.prototype.listenForEvents_ = util.noop;
      operation = new Operation(SCOPE, OPERATION_NAME);
      operation.hasActiveListeners = true;
    });

    afterEach(function() {
      operation.hasActiveListeners = false;
    });

    it('should not call getMetadata if no listeners', function(done) {
      operation.hasActiveListeners = false;

      operation.getMetadata = done; // if called, test will fail.

      operation.startPolling_();
      done();
    });

    it('should call getMetadata if listeners are registered', function(done) {
      operation.hasActiveListeners = true;

      operation.getMetadata = function() {
        done();
      };

      operation.startPolling_();
    });

    describe('API error', function() {
      var error = new Error('Error.');

      beforeEach(function() {
        operation.getMetadata = function(callback) {
          callback(error);
        };
      });

      it('should emit the error', function(done) {
        operation.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });

        operation.startPolling_();
      });
    });

    describe('operation failure', function() {
      var error = new Error('Error.');
      var apiResponse = { error: error };

      beforeEach(function() {
        operation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      it('should parse the response body', function(done) {
        parseHttpRespBodyOverride = function(body) {
          assert.strictEqual(body, apiResponse);
          setImmediate(done);
          return {};
        };

        operation.startPolling_();
      });

      it('should detect and emit the error', function(done) {
        parseHttpRespBodyOverride = function(body) {
          assert.strictEqual(body, apiResponse);

          return {
            err: error
          };
        };

        operation.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });

        operation.startPolling_();
      });
    });

    describe('operation pending', function() {
      var apiResponse = { status: 'PENDING' };
      var setTimeoutCached = global.setTimeout;

      beforeEach(function() {
        operation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      after(function() {
        global.setTimeout = setTimeoutCached;
      });

      it('should call startPolling_ after 500 ms', function(done) {
        var startPolling_ = operation.startPolling_;
        var startPollingCalled = false;

        global.setTimeout = function(fn, timeoutMs) {
          fn(); // should call startPolling_
          assert.strictEqual(timeoutMs, 500);
        };

        operation.startPolling_ = function() {
          if (!startPollingCalled) {
            // Call #1.
            startPollingCalled = true;
            startPolling_.apply(this, arguments);
            return;
          }

          // This is from the setTimeout call.
          assert.strictEqual(this, operation);
          done();
        };

        operation.startPolling_();
      });
    });

    describe('operation complete', function() {
      var apiResponse = { status: 'DONE' };

      beforeEach(function() {
        operation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      it('should emit complete with metadata', function(done) {
        operation.on('complete', function(metadata) {
          assert.strictEqual(metadata, apiResponse);
          done();
        });

        operation.startPolling_();
      });
    });

    describe('operation status', function() {
      var apiResponse;

      beforeEach(function() {
        apiResponse = { status: 'RUNNING' };

        operation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      it('should emit the running event when running', function(done) {
        operation.on('running', function(metadata) {
          assert.strictEqual(metadata, apiResponse);
          done();
        });

        operation.startPolling_();
      });

      it('should only emit the running event once', function(done) {
        var statusSteps = ['PENDING', 'RUNNING', 'RUNNING', 'DONE'];
        var metadataCallCount = 0;
        var runningCallCount = 0;

        this.timeout(2000);

        operation.getMetadata = function(callback) {
          apiResponse.status = statusSteps[metadataCallCount++];
          callback(null, apiResponse, apiResponse);
        };

        operation.on('running', function() {
          runningCallCount++;
        });

        operation.on('complete', function() {
          assert.strictEqual(runningCallCount, 1);
          done();
        });

        operation.startPolling_();
      });
    });
  });
});
