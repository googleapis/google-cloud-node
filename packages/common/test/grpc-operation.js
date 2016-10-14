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
var proxyquire = require('proxyquire');
var modelo = require('modelo');
var EventEmitter = require('events').EventEmitter;
var util = require('../src/util.js');
var nodeutil = require('util');

var GrpcServiceObject = require('../src/grpc-service-object.js');
var GrpcService = require('../src/grpc-service.js');

function createFake(Class) {
  function Fake() {
    this.calledWith_ = arguments;
    Class.apply(this, arguments);
  }

  nodeutil.inherits(Fake, Class);
  return Fake;
}

var fakeModelo = {
  inherits: function() {
    this.calledWith_ = arguments;
    modelo.inherits.apply(modelo, arguments);
  }
};

var FakeGrpcServiceObject = createFake(GrpcServiceObject);
var FakeGrpcService = createFake(GrpcService);

describe('GrpcOperation', function() {
  var FAKE_SERVICE = {
    Promise: Promise
  };
  var OPERATION_ID = '/a/b/c/d';

  var GrpcOperation;
  var grpcOperation;

  before(function() {
    GrpcOperation = proxyquire('../src/grpc-operation.js', {
      modelo: fakeModelo,
      './grpc-service-object.js': FakeGrpcServiceObject,
      './grpc-service.js': FakeGrpcService,
      './util.js': util
    });
  });

  beforeEach(function() {
    grpcOperation = new GrpcOperation(FAKE_SERVICE, OPERATION_ID);
  });

  describe('instantiation', function() {
    it('should extend GrpcServiceObject and EventEmitter', function() {
      var args = fakeModelo.calledWith_;

      assert.strictEqual(args[0], GrpcOperation);
      assert.strictEqual(args[1], FakeGrpcServiceObject);
      assert.strictEqual(args[2], EventEmitter);
    });

    it('should pass GrpcServiceObject the correct config', function() {
      var config = grpcOperation.calledWith_[0];

      assert.strictEqual(config.parent, FAKE_SERVICE);
      assert.strictEqual(config.id, OPERATION_ID);

      assert.deepEqual(config.methods, {
        delete: {
          protoOpts: {
            service: 'Operations',
            method: 'deleteOperation'
          },
          reqOpts: {
            name: OPERATION_ID
          }
        },
        exists: true,
        get: true,
        getMetadata: {
          protoOpts: {
            service: 'Operations',
            method: 'getOperation'
          },
          reqOpts: {
            name: OPERATION_ID
          }
        }
      });
    });

    it('should localize listener variables', function() {
      assert.strictEqual(grpcOperation.completeListeners, 0);
      assert.strictEqual(grpcOperation.hasActiveListeners, false);
    });

    it('should call listenForEvents_', function() {
      var listenForEvents = GrpcOperation.prototype.listenForEvents_;
      var called = false;

      GrpcOperation.prototype.listenForEvents_ = function() {
        called = true;
      };

      new GrpcOperation(FAKE_SERVICE, OPERATION_ID);
      assert.strictEqual(called, true);
      GrpcOperation.prototype.listenForEvents_ = listenForEvents;
    });
  });

  describe('cancel', function() {
    it('should provide the proper request options', function(done) {
      grpcOperation.request = function(protoOpts, reqOpts, callback) {
        assert.deepEqual(protoOpts, {
          service: 'Operations',
          method: 'cancelOperation'
        });

        assert.strictEqual(reqOpts.name, OPERATION_ID);
        callback();
      };

      grpcOperation.cancel(done);
    });

    it('should use util.noop if callback is omitted', function(done) {
      grpcOperation.request = function(protoOpts, reqOpts, callback) {
        assert.strictEqual(callback, util.noop);
        done();
      };

      grpcOperation.cancel();
    });
  });

  describe('promise', function() {
    beforeEach(function() {
      grpcOperation.startPolling_ = util.noop;
    });

    it('should return an instance of the localized Promise', function() {
      var FakePromise = grpcOperation.Promise = function() {};
      var promise = grpcOperation.promise();

      assert(promise instanceof FakePromise);
    });

    it('should reject the promise if an error occurs', function() {
      var error = new Error('err');

      setImmediate(function() {
        grpcOperation.emit('error', error);
      });

      return grpcOperation.promise().then(function() {
        throw new Error('Promise should have been rejected.');
      }, function(err) {
        assert.strictEqual(err, error);
      });
    });

    it('should resolve the promise on complete', function() {
      var metadata = {};

      setImmediate(function() {
        grpcOperation.emit('complete', metadata);
      });

      return grpcOperation.promise().then(function(data) {
        assert.deepEqual(data, [metadata]);
      });
    });
  });

  describe('listenForEvents_', function() {
    beforeEach(function() {
      grpcOperation.startPolling_ = util.noop;
    });

    it('should start polling when complete listener is bound', function(done) {
      grpcOperation.startPolling_ = function() {
        done();
      };

      grpcOperation.on('complete', util.noop);
    });

    it('should track the number of listeners', function() {
      assert.strictEqual(grpcOperation.completeListeners, 0);

      grpcOperation.on('complete', util.noop);
      assert.strictEqual(grpcOperation.completeListeners, 1);

      grpcOperation.removeListener('complete', util.noop);
      assert.strictEqual(grpcOperation.completeListeners, 0);
    });

    it('should only run a single pulling loop', function() {
      var startPollingCallCount = 0;

      grpcOperation.startPolling_ = function() {
        startPollingCallCount++;
      };

      grpcOperation.on('complete', util.noop);
      grpcOperation.on('complete', util.noop);

      assert.strictEqual(startPollingCallCount, 1);
    });

    it('should close when no more message listeners are bound', function() {
      grpcOperation.on('complete', util.noop);
      grpcOperation.on('complete', util.noop);
      assert.strictEqual(grpcOperation.hasActiveListeners, true);

      grpcOperation.removeListener('complete', util.noop);
      assert.strictEqual(grpcOperation.hasActiveListeners, true);

      grpcOperation.removeListener('complete', util.noop);
      assert.strictEqual(grpcOperation.hasActiveListeners, false);
    });
  });

  describe('startPolling_', function() {
    var listenForEvents_;

    before(function() {
      listenForEvents_ = GrpcOperation.prototype.listenForEvents_;
    });

    after(function() {
      GrpcOperation.prototype.listenForEvents_ = listenForEvents_;
    });

    beforeEach(function() {
      GrpcOperation.prototype.listenForEvents_ = util.noop;
      grpcOperation.hasActiveListeners = true;
    });

    afterEach(function() {
      grpcOperation.hasActiveListeners = false;
    });

    it('should not call getMetadata if no listeners', function(done) {
      grpcOperation.hasActiveListeners = false;

      grpcOperation.getMetadata = done; // if called, test will fail.

      grpcOperation.startPolling_();
      done();
    });

    it('should call getMetadata if listeners are registered', function(done) {
      grpcOperation.hasActiveListeners = true;

      grpcOperation.getMetadata = function() {
        done();
      };

      grpcOperation.startPolling_();
    });

    describe('API error', function() {
      var error = new Error('Error.');

      beforeEach(function() {
        grpcOperation.getMetadata = function(callback) {
          callback(error);
        };
      });

      it('should emit the error', function(done) {
        grpcOperation.on('error', function(err) {
          assert.strictEqual(err, error);
          done();
        });

        grpcOperation.startPolling_();
      });
    });

    describe('operation failure', function() {
      var formattedError = { status: 'a' };

      var apiResponse = {
        error: true,
        result: 'b'
      };

      beforeEach(function() {
        grpcOperation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      it('should emit the operation error', function(done) {
        FakeGrpcService.decorateStatus_ = function(status) {
          assert.strictEqual(status, apiResponse.result);
          return formattedError;
        };

        grpcOperation.on('error', function(err) {
          assert.strictEqual(err, formattedError);
          done();
        });

        grpcOperation.startPolling_();
      });
    });

    describe('operation pending', function() {
      var apiResponse = { done: false };
      var setTimeoutCached = global.setTimeout;

      beforeEach(function() {
        grpcOperation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      after(function() {
        global.setTimeout = setTimeoutCached;
      });

      it('should call startPolling_ after 500 ms', function(done) {
        var startPolling_ = grpcOperation.startPolling_;
        var startPollingCalled = false;

        global.setTimeout = function(fn, timeoutMs) {
          fn(); // should call startPolling_
          assert.strictEqual(timeoutMs, 500);
        };

        grpcOperation.startPolling_ = function() {
          if (!startPollingCalled) {
            // Call #1.
            startPollingCalled = true;
            startPolling_.apply(this, arguments);
            return;
          }

          // This is from the setTimeout call.
          assert.strictEqual(this, grpcOperation);
          done();
        };

        grpcOperation.startPolling_();
      });
    });

    describe('operation complete', function() {
      var apiResponse = { done: true };

      beforeEach(function() {
        grpcOperation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      it('should emit complete with metadata', function(done) {
        grpcOperation.on('complete', function(metadata) {
          assert.strictEqual(metadata, apiResponse);
          done();
        });

        grpcOperation.startPolling_();
      });
    });
  });
});
