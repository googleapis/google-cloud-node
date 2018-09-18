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

let assert = require('assert');
let extend = require('extend');
let common = require('@google-cloud/common');
let nodeutil = require('util');
let proxyquire = require('proxyquire');
let ServiceObject = common.ServiceObject;

let promisified = false;
let fakeUtil = extend({}, common.util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Snapshot') {
      promisified = true;
    }
  },
});

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Snapshot', function() {
  let Snapshot;
  let snapshot;

  let COMPUTE = {};
  let SNAPSHOT_NAME = 'snapshot-name';

  before(function() {
    Snapshot = proxyquire('../src/snapshot.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
    });
  });

  beforeEach(function() {
    snapshot = new Snapshot(COMPUTE, SNAPSHOT_NAME);
  });

  describe('instantiation', function() {
    it('should localize the compute instance', function() {
      assert.strictEqual(snapshot.compute, COMPUTE);
    });

    it('should localize the name', function() {
      assert.strictEqual(snapshot.name, SNAPSHOT_NAME);
    });

    it('should inherit from ServiceObject', function() {
      let calledWith = snapshot.calledWith_[0];

      assert.strictEqual(calledWith.parent, COMPUTE);
      assert.strictEqual(
        calledWith.baseUrl,
        'https://www.googleapis.com/compute/v1/projects/{{projectId}}/global/snapshots'
      );
      assert.strictEqual(calledWith.id, SNAPSHOT_NAME);
      assert.deepStrictEqual(calledWith.methods, {
        exists: true,
        get: true,
        getMetadata: true,
      });
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should allow creating for a Disk object snapshot', function(done) {
      const scope = {
        constructor: {
          name: 'Disk',
        },
        createSnapshot: function() {
          assert.strictEqual(this, scope);
          done();
        },
      };

      let snapshot = new Snapshot(scope, SNAPSHOT_NAME);
      assert(snapshot instanceof ServiceObject);

      let calledWith = snapshot.calledWith_[0];
      assert.strictEqual(calledWith.methods.create, true);

      calledWith.createMethod(); // (scope.createSnapshot)
    });
  });

  describe('delete', function() {
    it('should call ServiceObject.delete', function(done) {
      FakeServiceObject.prototype.delete = function() {
        assert.strictEqual(this, snapshot);
        done();
      };

      snapshot.delete();
    });

    describe('error', function() {
      let error = new Error('Error.');
      let apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec the callback with error & API response', function(done) {
        snapshot.delete(function(err, operation, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          snapshot.delete();
        });
      });
    });

    describe('success', function() {
      let apiResponse = {name: 'operation-name'};

      beforeEach(function() {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec callback with Operation & API response', function(done) {
        let operation = {};

        snapshot.compute.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        snapshot.delete(function(err, operation_, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);

          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          snapshot.delete();
        });
      });
    });
  });
});
