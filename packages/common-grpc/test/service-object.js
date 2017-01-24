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
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'GrpcServiceObject') {
      promisified = true;
    }
  }
});

function FakeServiceObject() {
  this.calledWith_ = arguments;
}

describe('GrpcServiceObject', function() {
  var GrpcServiceObject;
  var grpcServiceObject;

  var CONFIG = {};
  var PROTO_OPTS = {};
  var REQ_OPTS = {};

  before(function() {
    GrpcServiceObject = proxyquire('../src/service-object.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil
      }
    });
  });

  beforeEach(function() {
    grpcServiceObject = new GrpcServiceObject(CONFIG);

    grpcServiceObject.methods = {
      delete: {
        protoOpts: PROTO_OPTS,
        reqOpts: REQ_OPTS
      },
      getMetadata: {
        protoOpts: PROTO_OPTS,
        reqOpts: REQ_OPTS
      },
      setMetadata: {
        protoOpts: PROTO_OPTS,
        reqOpts: REQ_OPTS
      }
    };
  });

  describe('instantiation', function() {
    it('should inherit from ServiceObject', function() {
      assert(grpcServiceObject instanceof FakeServiceObject);

      var calledWith = grpcServiceObject.calledWith_;
      assert.strictEqual(calledWith[0], CONFIG);
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });
  });

  describe('delete', function() {
    it('should make the correct request', function(done) {
      grpcServiceObject.request = function(protoOpts, reqOpts, callback) {
        var deleteMethod = grpcServiceObject.methods.delete;
        assert.strictEqual(protoOpts, deleteMethod.protoOpts);
        assert.strictEqual(reqOpts, deleteMethod.reqOpts);
        callback(); // done()
      };

      grpcServiceObject.delete(done);
    });

    it('should not require a callback', function(done) {
      grpcServiceObject.request = function(protoOpts, reqOpts, callback) {
        assert.doesNotThrow(callback);
        done();
      };

      grpcServiceObject.delete();
    });
  });

  describe('getMetadata', function() {
    it('should make the correct request', function(done) {
      grpcServiceObject.request = function(protoOpts, reqOpts, callback) {
        var getMetadataMethod = grpcServiceObject.methods.getMetadata;
        assert.strictEqual(protoOpts, getMetadataMethod.protoOpts);
        assert.strictEqual(reqOpts, getMetadataMethod.reqOpts);
        callback(); // done()
      };

      grpcServiceObject.getMetadata(done);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

      beforeEach(function() {
        grpcServiceObject.request = function(protoOpts, reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        grpcServiceObject.getMetadata(function(err, metadata, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(metadata, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {};

      beforeEach(function() {
        grpcServiceObject.request = function(protoOpts, reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec callback with metadata & API response', function(done) {
        grpcServiceObject.getMetadata(function(err, metadata, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should update the metadata on the instance', function(done) {
        grpcServiceObject.getMetadata(function(err) {
          assert.ifError(err);
          assert.strictEqual(grpcServiceObject.metadata, apiResponse);
          done();
        });
      });
    });
  });

  describe('setMetadata', function() {
    var DEFAULT_REQ_OPTS = { a: 'b' };
    var METADATA = { a: 'c' };

    it('should make the correct request', function(done) {
      var setMetadataMethod = grpcServiceObject.methods.setMetadata;
      var expectedReqOpts = extend(true, {}, DEFAULT_REQ_OPTS, METADATA);

      grpcServiceObject.methods.setMetadata.reqOpts = DEFAULT_REQ_OPTS;

      grpcServiceObject.request = function(protoOpts, reqOpts, callback) {
        assert.strictEqual(protoOpts, setMetadataMethod.protoOpts);
        assert.deepEqual(reqOpts, expectedReqOpts);
        callback(); // done()
      };

      grpcServiceObject.setMetadata(METADATA, done);
    });

    it('should not require a callback', function(done) {
      grpcServiceObject.request = function(protoOpts, reqOpts, callback) {
        assert.doesNotThrow(callback);
        done();
      };

      grpcServiceObject.setMetadata(METADATA);
    });
  });

  describe('request', function() {
    it('should call the parent instance request method', function() {
      var args = [1, 2, 3];
      var expectedReturnValue = {};

      grpcServiceObject.parent = {
        request: function() {
          assert.strictEqual(this, grpcServiceObject.parent);
          assert.deepEqual([].slice.call(arguments), args);
          return expectedReturnValue;
        }
      };

      var ret = grpcServiceObject.request.apply(grpcServiceObject, args);
      assert.strictEqual(ret, expectedReturnValue);
    });
  });

  describe('requestStream', function() {
    it('should call the parent instance requestStream method', function() {
      var args = [1, 2, 3];
      var expectedReturnValue = {};

      grpcServiceObject.parent = {
        requestStream: function() {
          assert.strictEqual(this, grpcServiceObject.parent);
          assert.deepEqual([].slice.call(arguments), args);
          return expectedReturnValue;
        }
      };

      var ret = grpcServiceObject.requestStream.apply(grpcServiceObject, args);
      assert.strictEqual(ret, expectedReturnValue);
    });
  });

  describe('requestWritableStream', function() {
    it('should call the parent requestWritableStream method', function() {
      var args = [1, 2, 3];
      var expectedReturnValue = {};

      grpcServiceObject.parent = {
        requestWritableStream: function() {
          assert.strictEqual(this, grpcServiceObject.parent);
          assert.deepEqual([].slice.call(arguments), args);
          return expectedReturnValue;
        }
      };

      var ret = grpcServiceObject.requestWritableStream.apply(
        grpcServiceObject,
        args
      );
      assert.strictEqual(ret, expectedReturnValue);
    });
  });
});
