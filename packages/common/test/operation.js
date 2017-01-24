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

var assert = require('assert');
var EventEmitter = require('events').EventEmitter;
var proxyquire = require('proxyquire');

var util = require('../src/util.js');

var fakeModelo = {
  inherits: function() {
    this.calledWith_ = arguments;
    return require('modelo').inherits.apply(this, arguments);
  }
};

function FakeServiceObject() {
  this.serviceObjectArguments_ = arguments;
}

describe('Operation', function() {
  var FAKE_SERVICE = {};
  var OPERATION_ID = '/a/b/c/d';

  var Operation;
  var operation;

  before(function() {
    Operation = proxyquire('../src/operation.js', {
      modelo: fakeModelo,
      './service-object.js': FakeServiceObject
    });
  });

  beforeEach(function() {
    operation = new Operation({
      parent: FAKE_SERVICE,
      id: OPERATION_ID
    });
    operation.Promise = Promise;
  });

  describe('instantiation', function() {
    it('should extend ServiceObject and EventEmitter', function() {
      var args = fakeModelo.calledWith_;

      assert.strictEqual(args[0], Operation);
      assert.strictEqual(args[1], FakeServiceObject);
      assert.strictEqual(args[2], EventEmitter);
    });

    it('should pass ServiceObject the correct config', function() {
      var config = operation.serviceObjectArguments_[0];

      assert.strictEqual(config.baseUrl, '');
      assert.strictEqual(config.parent, FAKE_SERVICE);
      assert.strictEqual(config.id, OPERATION_ID);

      assert.deepEqual(config.methods, {
        exists: true,
        get: true,
        getMetadata: {
          reqOpts: {
            name: OPERATION_ID
          }
        }
      });
    });

    it('should allow overriding baseUrl', function() {
      var baseUrl = 'baseUrl';

      var operation = new Operation({
        baseUrl: baseUrl
      });

      assert.strictEqual(operation.serviceObjectArguments_[0].baseUrl, baseUrl);
    });

    it('should localize listener variables', function() {
      assert.strictEqual(operation.completeListeners, 0);
      assert.strictEqual(operation.hasActiveListeners, false);
    });

    it('should call listenForEvents_', function() {
      var listenForEvents = Operation.prototype.listenForEvents_;
      var called = false;

      Operation.prototype.listenForEvents_ = function() {
        called = true;
      };

      new Operation(FAKE_SERVICE, OPERATION_ID);
      assert.strictEqual(called, true);
      Operation.prototype.listenForEvents_ = listenForEvents;
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

  describe('poll_', function() {
    it('should call getMetdata', function(done) {
      operation.getMetadata = function() {
        done();
      };

      operation.poll_(assert.ifError);
    });

    describe('could not get metadata', function() {
      it('should callback with an error', function(done) {
        var error = new Error('Error.');

        operation.getMetadata = function(callback) {
          callback(error);
        };

        operation.poll_(function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should callback with the operation error', function(done) {
        var apiResponse = {
          error: {}
        };

        operation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };

        operation.poll_(function(err) {
          assert.strictEqual(err, apiResponse.error);
          done();
        });
      });
    });

    describe('operation incomplete', function() {
      var apiResponse = { done: false };

      beforeEach(function() {
        operation.getMetadata = function(callback) {
          callback(null, apiResponse);
        };
      });

      it('should callback with no arguments', function(done) {
        operation.poll_(function(err, resp) {
          assert.strictEqual(err, undefined);
          assert.strictEqual(resp, undefined);
          done();
        });
      });
    });

    describe('operation complete', function() {
      var apiResponse = { done: true };

      beforeEach(function() {
        operation.getMetadata = function(callback) {
          callback(null, apiResponse);
        };
      });

      it('should emit complete with metadata', function(done) {
        operation.poll_(function(err, resp) {
          assert.ifError(err);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });

  describe('startPolling_', function() {
    var listenForEvents_;

    before(function() {
      listenForEvents_ = Operation.prototype.listenForEvents_;
    });

    after(function() {
      Operation.prototype.listenForEvents_ = listenForEvents_;
    });

    beforeEach(function() {
      Operation.prototype.listenForEvents_ = util.noop;
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

    describe('operation pending', function() {
      var apiResponse = { done: false };
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
      var apiResponse = { done: true };

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
  });
});
