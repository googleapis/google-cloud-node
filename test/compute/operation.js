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
var mockery = require('mockery');
var nodeutil = require('util');

var ServiceObject = require('../../lib/common/service-object.js');
var util = require('../../lib/common/util.js');

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Operation', function() {
  var Operation;
  var operation;

  var SCOPE = {};
  var OPERATION_NAME = 'operation-name';

  before(function() {
    mockery.registerMock('../common/service-object.js', FakeServiceObject);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Operation = require('../../lib/compute/operation.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    operation = new Operation(SCOPE, OPERATION_NAME);
  });

  describe('instantiation', function() {
    it('should localize the name', function() {
      assert.strictEqual(operation.name, OPERATION_NAME);
    });

    it('should inherit from ServiceObject', function() {
      var operation = new Operation(SCOPE, OPERATION_NAME);
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

    it('should give the right baseUrl for a global Operation', function() {
      var operation = new Operation({
        constructor: {
          name: 'Compute'
        }
      }, OPERATION_NAME);

      var calledWith = operation.calledWith_[0];
      assert.strictEqual(calledWith.baseUrl, '/global/operations');
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

  describe('onComplete', function() {
    // Set interval to 0 so our tests don't waste time.
    var OPTIONS = { interval: 0 };

    var error = new Error('Error.');
    var apiResponse = { a: 'b', c: 'd' };
    var apiResponseWithIncompleteStatus = { status: 'INCOMPLETE' };
    var apiResponseWithCompleteStatus = { status: 'DONE' };

    function getMetadataRespondsWithError(callback) {
      callback(error, apiResponse);
    }

    function getMetadataRespondsWithIncompleteStatus(callback) {
      callback(null, apiResponseWithIncompleteStatus);
    }

    function getMetadataRespondsWithCompleteStatus(callback) {
      callback(null, apiResponseWithCompleteStatus);
    }

    describe('options.maxAttempts', function() {
      it('should default to 10', function(done) {
        var numAttemptsMade = 0;

        operation.getMetadata = function(callback) {
          numAttemptsMade++;
          getMetadataRespondsWithIncompleteStatus(callback);
        };

        operation.onComplete(OPTIONS, function() {
          assert.strictEqual(numAttemptsMade, 10);
          done();
        });
      });

      it('should allow overriding', function(done) {
        var options = { maxAttempts: 3, interval: 0 };
        var numAttemptsMade = 0;

        operation.getMetadata = function(callback) {
          numAttemptsMade++;
          getMetadataRespondsWithIncompleteStatus(callback);
        };

        operation.onComplete(options, function() {
          assert.strictEqual(numAttemptsMade, options.maxAttempts);
          done();
        });
      });
    });

    describe('options.interval', function() {
      it('should default to 3000ms', function(done) {
        this.timeout(3100);

        operation.getMetadata = getMetadataRespondsWithIncompleteStatus;

        var started = Date.now();
        operation.onComplete({ maxAttempts: 1 }, function() {
          var ended = Date.now();

          assert(ended - started > 2900 && ended - started < 3100);
          done();
        });
      });

      it('should allow overriding', function(done) {
        operation.getMetadata = getMetadataRespondsWithIncompleteStatus;

        var started = Date.now();
        operation.onComplete({ maxAttempts: 1, interval: 1000 }, function() {
          var ended = Date.now();

          assert(ended - started > 900 && ended - started < 1100);
          done();
        });
      });
    });

    it('should put the interval on the leading side', function(done) {
      // (It should wait interval before making first request)
      var started = Date.now();
      operation.getMetadata = function() {
        var ended = Date.now();

        assert(ended - started > 900 && ended - started < 1100);
        done();
      };

      operation.onComplete({ maxAttempts: 1, interval: 1000 }, util.noop);
    });

    it('should return an error if maxAttempts is exceeded', function(done) {
      var options = { maxAttempts: 1, interval: 0 };

      operation.getMetadata = getMetadataRespondsWithIncompleteStatus;

      operation.onComplete(options, function(err, metadata) {
        assert.strictEqual(err.code, 'OPERATION_INCOMPLETE');
        assert.strictEqual(err.message, 'Operation did not complete.');

        assert.strictEqual(metadata, operation.metadata);
        done();
      });
    });

    describe('getMetadata', function() {
      describe('error', function() {
        it('should execute callback with error & API response', function(done) {
          operation.getMetadata = getMetadataRespondsWithError;

          operation.onComplete(OPTIONS, function(err, metadata) {
            assert.strictEqual(err, error);
            assert.strictEqual(metadata, apiResponse);
            done();
          });
        });
      });

      describe('success', function() {
        it('should exec callback with metadata when done', function(done) {
          operation.getMetadata = getMetadataRespondsWithCompleteStatus;

          operation.onComplete(OPTIONS, function(err, metadata) {
            assert.ifError(err);
            assert.strictEqual(metadata, apiResponseWithCompleteStatus);
            done();
          });
        });
      });
    });
  });
});
