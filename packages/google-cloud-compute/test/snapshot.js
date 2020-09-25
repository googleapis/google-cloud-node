// Copyright 2015 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const assert = require('assert');
const {ServiceObject} = require('@google-cloud/common');
const proxyquire = require('proxyquire');
const promisify = require('@google-cloud/promisify');

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  promisifyAll: function (Class) {
    if (Class.name === 'Snapshot') {
      promisified = true;
    }
  },
});

class FakeServiceObject extends ServiceObject {
  constructor(config) {
    super(config);
    this.calledWith_ = arguments;
  }
}

describe('Snapshot', () => {
  let Snapshot;
  let snapshot;

  const COMPUTE = {
    apiEndpoint: 'compute.googleapis.com',
  };
  const SNAPSHOT_NAME = 'snapshot-name';

  before(() => {
    Snapshot = proxyquire('../src/snapshot.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/promisify': fakePromisify,
    });
  });

  beforeEach(() => {
    snapshot = new Snapshot(COMPUTE, SNAPSHOT_NAME);
  });

  describe('instantiation', () => {
    it('should localize the compute instance', () => {
      assert.strictEqual(snapshot.compute, COMPUTE);
    });

    it('should localize the name', () => {
      assert.strictEqual(snapshot.name, SNAPSHOT_NAME);
    });

    it('should inherit from ServiceObject', () => {
      const calledWith = snapshot.calledWith_[0];

      assert.strictEqual(calledWith.parent, COMPUTE);
      assert.strictEqual(
        calledWith.baseUrl,
        'https://compute.googleapis.com/compute/v1/projects/{{projectId}}/global/snapshots'
      );
      assert.strictEqual(calledWith.id, SNAPSHOT_NAME);
      assert.deepStrictEqual(calledWith.methods, {
        exists: true,
        get: true,
        getMetadata: true,
      });
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should allow creating for a Disk object snapshot', done => {
      const scope = {
        constructor: {
          name: 'Disk',
        },
        createSnapshot: function () {
          assert.strictEqual(this, scope);
          done();
        },
        zone: {
          compute: COMPUTE,
        },
      };

      const snapshot = new Snapshot(scope, SNAPSHOT_NAME);
      assert(snapshot instanceof ServiceObject);

      assert.strictEqual(snapshot.compute, scope.zone.compute);

      const calledWith = snapshot.calledWith_[0];
      assert.strictEqual(calledWith.methods.create, true);

      calledWith.createMethod(); // (scope.createSnapshot)
    });
  });

  describe('delete', () => {
    it('should call ServiceObject.delete', done => {
      FakeServiceObject.prototype.delete = function () {
        assert.strictEqual(this, snapshot);
        done();
      };

      snapshot.delete();
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        FakeServiceObject.prototype.delete = function (callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec the callback with error & API response', done => {
        snapshot.delete((err, operation, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          snapshot.delete();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {name: 'operation-name'};

      beforeEach(() => {
        FakeServiceObject.prototype.delete = function (callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec callback with Operation & API response', done => {
        const operation = {};

        snapshot.compute.operation = function (name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        snapshot.delete((err, operation_, apiResponse_) => {
          assert.ifError(err);

          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);

          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          snapshot.delete();
        });
      });
    });
  });
});
