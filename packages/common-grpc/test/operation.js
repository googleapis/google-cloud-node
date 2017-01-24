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
var util = require('@google-cloud/common').util;

var fakeModelo = {
  inherits: function() {
    this.calledWith_ = arguments;
  }
};

var decorateGrpcStatusOverride_;
function FakeGrpcService() {}
FakeGrpcService.decorateGrpcStatus_ = function() {
  return (decorateGrpcStatusOverride_ || util.noop).apply(null, arguments);
};

function FakeGrpcServiceObject() {
  this.grpcServiceObjectArguments_ = arguments;
}
function FakeOperation() {
  this.operationArguments_ = arguments;
}

describe('GrpcOperation', function() {
  var FAKE_SERVICE = {
    Promise: Promise
  };
  var OPERATION_ID = '/a/b/c/d';

  var GrpcOperation;
  var grpcOperation;

  before(function() {
    GrpcOperation = proxyquire('../src/operation.js', {
      '@google-cloud/common': {
        Operation: FakeOperation
      },
      modelo: fakeModelo,
      './service-object.js': FakeGrpcServiceObject,
      './service.js': FakeGrpcService,
    });
  });

  beforeEach(function() {
    decorateGrpcStatusOverride_ = null;
    grpcOperation = new GrpcOperation(FAKE_SERVICE, OPERATION_ID);
  });

  describe('instantiation', function() {
    var EXPECTED_CONFIG = {
      parent: FAKE_SERVICE,
      id: OPERATION_ID,
      methods: {
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
      }
    };

    it('should extend GrpcServiceObject and Operation', function() {
      var args = fakeModelo.calledWith_;

      assert.strictEqual(args[0], GrpcOperation);
      assert.strictEqual(args[1], FakeGrpcServiceObject);
      assert.strictEqual(args[2], FakeOperation);
    });

    it('should pass Operation the correct config', function() {
      var config = grpcOperation.operationArguments_[0];
      assert.deepEqual(config, EXPECTED_CONFIG);
    });

    it('should pass GrpcServiceObject the correct config', function() {
      var config = grpcOperation.grpcServiceObjectArguments_[0];
      assert.deepEqual(config, EXPECTED_CONFIG);
    });
  });

  describe('cancel', function() {
    it('should provide the proper request options', function(done) {
      grpcOperation.id = OPERATION_ID;

      grpcOperation.request = function(protoOpts, reqOpts, callback) {
        assert.deepEqual(protoOpts, {
          service: 'Operations',
          method: 'cancelOperation'
        });

        assert.strictEqual(reqOpts.name, OPERATION_ID);
        callback(); // done()
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

  describe('poll_', function() {
    it('should call getMetdata', function(done) {
      grpcOperation.getMetadata = function() {
        done();
      };

      grpcOperation.poll_(assert.ifError);
    });

    describe('could not get metadata', function() {
      it('should callback with an error', function(done) {
        var error = new Error('Error.');

        grpcOperation.getMetadata = function(callback) {
          callback(error);
        };

        grpcOperation.poll_(function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should callback with the operation error', function(done) {
        var apiResponse = {
          error: {}
        };

        grpcOperation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };

        var decoratedGrpcStatus = {};

        decorateGrpcStatusOverride_ = function(status) {
          assert.strictEqual(status, apiResponse.error);
          return decoratedGrpcStatus;
        };

        grpcOperation.poll_(function(err) {
          assert.strictEqual(err, decoratedGrpcStatus);
          done();
        });
      });
    });
    describe('operation incomplete', function() {
      var apiResponse = { done: false };

      beforeEach(function() {
        grpcOperation.getMetadata = function(callback) {
          callback(null, apiResponse);
        };
      });

      it('should callback with no arguments', function(done) {
        grpcOperation.poll_(function(err, resp) {
          assert.strictEqual(err, undefined);
          assert.strictEqual(resp, undefined);
          done();
        });
      });
    });

    describe('operation complete', function() {
      var apiResponse = { done: true };

      beforeEach(function() {
        grpcOperation.getMetadata = function(callback) {
          callback(null, apiResponse);
        };
      });

      it('should emit complete with metadata', function(done) {
        grpcOperation.poll_(function(err, resp) {
          assert.ifError(err);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });
});
