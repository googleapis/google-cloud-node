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
var proxyquire = require('proxyquire').noPreserveCache();
var util = require('@google-cloud/common').util;

function FakeOperation() {
  this.calledWith_ = arguments;
}

function FakeServiceObject() {
  this.calledWith_ = arguments;
}

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
  },
});

describe('Operation', function() {
  var Operation;
  var operation;

  var SCOPE = {
    Promise: Promise,
  };
  var OPERATION_NAME = 'operation-name';

  before(function() {
    Operation = proxyquire('../src/operation.js', {
      '@google-cloud/common': {
        Operation: FakeOperation,
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
    });
  });

  beforeEach(function() {
    parseHttpRespBodyOverride = null;
    operation = new Operation(SCOPE, OPERATION_NAME);
  });

  describe('instantiation', function() {
    it('should localize the name', function() {
      assert.strictEqual(operation.name, OPERATION_NAME);
    });

    it('should inherit from Operation', function() {
      assert(operation instanceof FakeOperation);

      var calledWith = operation.calledWith_[0];

      assert.strictEqual(calledWith.parent, SCOPE);
      assert.strictEqual(calledWith.baseUrl, '/operations');
      assert.strictEqual(calledWith.id, OPERATION_NAME);
      assert.deepEqual(calledWith.methods, {
        delete: true,
        exists: true,
        get: true,
      });
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should give the right baseUrl for a global Operation', function() {
      var operation = new Operation(
        {
          constructor: {
            name: 'Compute',
          },
        },
        OPERATION_NAME
      );

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
      var apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        FakeServiceObject.prototype.getMetadata = function(callback) {
          callback(error, apiResponse);
        };
      });

      it('should ignore false errors', function(done) {
        var apiResponse = {
          name: operation.name,
          error: {
            errors: [],
          },
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
      var apiResponse = {a: 'b', c: 'd'};

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

  describe('poll_', function() {
    beforeEach(function() {
      operation.emit = util.noop;
    });

    it('should call getMetadata', function(done) {
      operation.getMetadata = function() {
        done();
      };

      operation.poll_(assert.ifError);
    });

    describe('API error', function() {
      var error = new Error('Error.');

      beforeEach(function() {
        operation.getMetadata = function(callback) {
          callback(error);
        };
      });

      it('should emit the error', function(done) {
        operation.poll_(function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('operation failure', function() {
      var error = new Error('Error.');
      var apiResponse = {error: error};

      beforeEach(function() {
        operation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      it('should parse and return the response body', function(done) {
        var parsedHttpRespBody = {err: {}};

        parseHttpRespBodyOverride = function(body) {
          assert.strictEqual(body, apiResponse);
          return parsedHttpRespBody;
        };

        operation.poll_(function(err) {
          assert.strictEqual(err, parsedHttpRespBody.err);
          done();
        });
      });
    });

    describe('operation running', function() {
      var apiResponse = {status: 'RUNNING'};

      beforeEach(function() {
        operation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      it('should update status', function(done) {
        delete operation.status;

        operation.poll_(function(err) {
          assert.ifError(err);
          assert.strictEqual(operation.status, apiResponse.status);
          done();
        });
      });

      it('should emit the running event', function(done) {
        operation.emit = function(eventName, metadata) {
          assert.strictEqual(eventName, 'running');
          assert.strictEqual(metadata, apiResponse);
          done();
        };

        operation.poll_(assert.ifError);
      });

      it('should not emit running if already running', function(done) {
        operation.emit = function(eventName) {
          assert.strictEqual(eventName, 'running');

          operation.emit = done; // will fail test if called
          operation.poll_(done);
        };

        operation.poll_(assert.ifError);
      });
    });

    describe('operation complete', function() {
      var apiResponse = {status: 'DONE'};

      beforeEach(function() {
        operation.getMetadata = function(callback) {
          callback(null, apiResponse, apiResponse);
        };
      });

      it('should update status', function(done) {
        operation.status = 'PENDING';

        operation.poll_(function(err) {
          assert.ifError(err);
          assert.strictEqual(operation.status, apiResponse.status);
          done();
        });
      });

      it('should execute callback with metadata', function(done) {
        operation.poll_(function(err, metadata) {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          done();
        });
      });
    });
  });
});
