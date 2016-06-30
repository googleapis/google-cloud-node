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
var extend = require('extend');
var nodeutil = require('util');
var sinon = require('sinon');
var proxyquire = require('proxyquire');

var GrpcService = require('@google-cloud/common').GrpcService;
var util = require('@google-cloud/common').util;

var fakeUtil = extend({}, util);

function FakeGrpcService() {
  this.calledWith_ = arguments;
  GrpcService.apply(this, arguments);
}

nodeutil.inherits(FakeGrpcService, GrpcService);

function FakeFile() {
  this.calledWith_ = arguments;
}

var requestOverride = null;
var fakeRequest = function() {
  return (requestOverride || util.noop).apply(this, arguments);
};

describe('Speech.Operation', function() {
  var PROJECT_ID = 'project-id';

  var Speech;
  var speech;

  before(function() {
    Speech = proxyquire('../', {
      request: fakeRequest,
      '@google-cloud/storage': {
        File: FakeFile
      },
      '@google-cloud/common': {
        Service: FakeGrpcService,
        util: fakeUtil
      }
    });
  });

  beforeEach(function() {
    requestOverride = null;

    speech = new Speech({
      projectId: PROJECT_ID
    });
  });

  describe('get', function() {
    var REQ = {
      name: '1234'
    };

    it('should decode response', function(done) {
      speech.request = function(protoOpts, reqOpts, callback) {
        callback(null, {
          name: '1234',
          response: {
            typeUrl: 'foo',
            value: 'EicKJQoeaG93IG9sZCBpcyB0aGUgQnJvb2tseW4gQnJpZGdlFdmQez8='
          }
        });
      };
      var operation = speech.operation({
        name: '1234'
      });
      operation.get(function(err, _operation, apiResponse) {
        assert.ifError(err);
        assert.strictEqual(_operation, operation);
        assert(operation.response);
        assert(operation.response.results);
        assert(operation.response.results.length);
        assert(operation.response.results[0].alternatives);
        assert.equal(apiResponse.name, '1234');
        assert(apiResponse.response);
        assert(apiResponse.response.value);
        done();
      });
    });

    it('should handle error', function(done) {
      var error = new Error('error');
      speech.request = function(protoOpts, reqOpts, callback) {
        callback(error, REQ);
      };
      var operation = speech.operation({
        name: '1234'
      });
      operation.get(function(err, operation, apiResponse) {
        assert.equal(err.message, 'error');
        assert.equal(operation, null);
        assert.strictEqual(apiResponse, REQ);
        done();
      });
    });

    it('should emit complete event', function(done) {
      sinon.stub(speech, 'request');
      speech.request.onFirstCall().callsArgWith(2, null, {
        name: '1234',
        done: false
      });
      speech.request.onSecondCall().callsArgWith(2, null, {
        name: '1234',
        response: {
          typeUrl: 'foo',
          value: 'EicKJQoeaG93IG9sZCBpcyB0aGUgQnJvb2tseW4gQnJpZGdlFdmQez8='
        },
        done: true
      });
      var operation = speech.operation({
        name: '1234'
      });
      operation
        .on('error', done)
        .on('complete', function(_operation, apiResponse) {
          assert.strictEqual(_operation, operation);
          assert(_operation.response);
          assert(_operation.response.results);
          assert(_operation.response.results.length);
          assert(_operation.response.results[0].alternatives);
          assert.equal(apiResponse.name, '1234');
          assert(apiResponse.response);
          assert(apiResponse.response.value);
          speech.request.restore();
          operation.removeAllListeners();
          done();
        });
    });

    it('should emit error event', function(done) {
      var error = new Error('error');
      speech.request = function(protoOpts, reqOpts, callback) {
        callback(error, REQ);
      };
      var operation = speech.operation({
        name: '1234'
      });

      operation
        .on('error', function(err) {
          assert.equal(err.message, 'error');
          done();
        })
        .on('complete', function() {
          done('should have failed');
        });
    });

    it('should stop polling', function(done) {
      sinon.stub(speech, 'request');
      speech.request.callsArgWith(2, null, {
        name: '1234',
        done: false
      });
      var operation = speech.operation({
        name: '1234'
      });

      operation
        .on('error', done)
        .on('complete', function() {
          done('should have failed');
        });

      setTimeout(function() {
        operation.removeAllListeners();
        assert.equal(speech.request.callCount, 1, 'only one call');
        setTimeout(function() {
          assert.equal(speech.request.callCount, 1, 'still only one call');
          speech.request.restore();
          done();
        }, 750);
      }, 250);
    });
  });

  describe('pick_', function() {
    it('should pick the right values', function() {
      var values = {};
      var operation = {};

      Speech.Operation.prototype.pick_.call(operation, values);
      assert.deepEqual(operation, {
        done: undefined,
        error: undefined,
        metadata: undefined,
        name: undefined,
        response: undefined
      });

      values = {
        done: 1,
        error: 2,
        metadata: 3,
        name: 4,
        response: {},
        foo: 'bar'
      };

      Speech.Operation.prototype.pick_.call(operation, values);
      assert.deepEqual(operation, {
        done: 1,
        error: 2,
        metadata: 3,
        name: 4,
        response: {}
      });
      assert.strictEqual(operation.response, values.response);
    });
  });
});
