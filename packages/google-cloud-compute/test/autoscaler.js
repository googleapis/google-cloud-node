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

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Autoscaler') {
      promisified = true;
    }
  },
});

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Autoscaler', function() {
  var Autoscaler;
  var autoscaler;

  var AUTOSCALER_NAME = 'autoscaler-name';

  var COMPUTE = {projectId: 'project-id'};
  var ZONE = {
    compute: COMPUTE,
    name: 'us-central1-a',
    createAutoscaler: util.noop,
  };

  before(function() {
    Autoscaler = proxyquire('../src/autoscaler.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
    });
  });

  beforeEach(function() {
    autoscaler = new Autoscaler(ZONE, AUTOSCALER_NAME);
  });

  describe('instantiation', function() {
    it('should localize the zone', function() {
      assert.strictEqual(autoscaler.zone, ZONE);
    });

    it('should localize the name', function() {
      assert.strictEqual(autoscaler.name, AUTOSCALER_NAME);
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should inherit from ServiceObject', function() {
      var createMethod = util.noop;

      var zoneInstance = extend({}, ZONE, {
        createAutoscaler: {
          bind: function(context) {
            assert.strictEqual(context, zoneInstance);
            return createMethod;
          },
        },
      });

      var autoscaler = new Autoscaler(zoneInstance, AUTOSCALER_NAME);
      assert(autoscaler instanceof ServiceObject);

      var calledWith = autoscaler.calledWith_[0];

      assert.strictEqual(calledWith.parent, zoneInstance);
      assert.strictEqual(calledWith.baseUrl, '/autoscalers');
      assert.strictEqual(calledWith.id, AUTOSCALER_NAME);
      assert.strictEqual(calledWith.createMethod, createMethod);
      assert.deepEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true,
        getMetadata: true,
      });
    });
  });

  describe('delete', function() {
    it('should call ServiceObject.delete', function(done) {
      FakeServiceObject.prototype.delete = function() {
        assert.strictEqual(this, autoscaler);
        done();
      };

      autoscaler.delete();
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        autoscaler.delete(function(err, operation, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          autoscaler.delete();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', function(done) {
        var operation = {};

        autoscaler.zone.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        autoscaler.delete(function(err, operation_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          autoscaler.delete();
        });
      });
    });
  });

  describe('setMetadata', function() {
    it('should make the correct API request', function(done) {
      var metadata = {};

      autoscaler.zone.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'PATCH');
        assert.strictEqual(reqOpts.uri, '/autoscalers');
        assert.strictEqual(reqOpts.json, metadata);
        assert.deepEqual(metadata, {
          name: autoscaler.name,
          zone: ZONE.name,
        });

        done();
      };

      autoscaler.setMetadata(metadata, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        autoscaler.zone.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        autoscaler.setMetadata({e: 'f'}, function(err, op, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(op, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        autoscaler.zone.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with operation & response', function(done) {
        var operation = {};
        var metadata = {a: 'b'};

        autoscaler.zone.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        autoscaler.setMetadata(metadata, function(err, op, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          autoscaler.setMetadata({a: 'b'});
        });
      });
    });
  });
});
