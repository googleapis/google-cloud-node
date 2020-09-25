// Copyright 2016 Google LLC
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
const proxyquire = require('proxyquire');
const {ServiceObject, util} = require('@google-cloud/common');
const promisify = require('@google-cloud/promisify');

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  promisifyAll: function (Class) {
    if (Class.name === 'Subnetwork') {
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

describe('Subnetwork', () => {
  let Subnetwork;
  let subnetwork;

  const SUBNETWORK_NAME = 'subnetwork_name';
  const REGION_NAME = 'region-1';
  const REGION = {
    createSubnetwork: util.noop,
    name: REGION_NAME,
    compute: {},
  };

  before(() => {
    Subnetwork = proxyquire('../src/subnetwork.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/promisify': fakePromisify,
    });
  });

  beforeEach(() => {
    subnetwork = new Subnetwork(REGION, SUBNETWORK_NAME);
  });

  describe('instantiation', () => {
    it('should localize the name', () => {
      assert.strictEqual(subnetwork.name, SUBNETWORK_NAME);
    });

    it('should localize the region', () => {
      assert.strictEqual(subnetwork.region, REGION);
    });

    it('should inherit from ServiceObject', () => {
      const createSubnetworkBound = {};

      const regionInstance = Object.assign({}, REGION, {
        createSubnetwork: {
          bind: function (context) {
            assert.strictEqual(context, regionInstance);
            return createSubnetworkBound;
          },
        },
      });

      const subnetwork = new Subnetwork(regionInstance, SUBNETWORK_NAME);
      assert(subnetwork instanceof ServiceObject);

      const calledWith = subnetwork.calledWith_[0];

      assert.strictEqual(calledWith.parent, regionInstance);
      assert.strictEqual(calledWith.baseUrl, '/subnetworks');
      assert.strictEqual(calledWith.id, SUBNETWORK_NAME);
      assert.strictEqual(calledWith.createMethod, createSubnetworkBound);
      assert.deepStrictEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true,
        getMetadata: true,
      });
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });
  });

  describe('delete', () => {
    it('should make the correct API request', done => {
      subnetwork.request = function (reqOpts) {
        assert.strictEqual(reqOpts.method, 'DELETE');
        assert.strictEqual(reqOpts.uri, '');
        done();
      };

      subnetwork.delete(assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        subnetwork.request = function (reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', done => {
        subnetwork.delete((err, operation, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          subnetwork.delete();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(() => {
        subnetwork.request = function (reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', done => {
        const operation = {};

        subnetwork.region.operation = function (name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        subnetwork.delete((err, operation_, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          subnetwork.delete();
        });
      });
    });
  });
});
