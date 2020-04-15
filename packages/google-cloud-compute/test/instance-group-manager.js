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
const proxyquire = require('proxyquire');
const {ServiceObject} = require('@google-cloud/common');
const promisify = require('@google-cloud/promisify');

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  promisifyAll: function(Class) {
    if (Class.name === 'InstanceGroupManager') {
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

describe('InstanceGroupManager', () => {
  let InstanceGroupManager;
  let instanceGroupManager;

  const staticMethods = {};

  const ZONE = {
    compute: {},
  };
  const NAME = 'instance-group-manager-name';

  before(() => {
    InstanceGroupManager = proxyquire('../src/instance-group-manager.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/promisify': fakePromisify,
    });
  });

  beforeEach(() => {
    Object.assign(InstanceGroupManager, staticMethods);
    instanceGroupManager = new InstanceGroupManager(ZONE, NAME);
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize the zone instance', () => {
      assert.strictEqual(instanceGroupManager.zone, ZONE);
    });

    it('should localize the name', () => {
      assert.strictEqual(instanceGroupManager.name, NAME);
    });

    it('should inherit from ServiceObject', done => {
      const zoneInstance = Object.assign({}, ZONE);
      const instanceGroupManager = new InstanceGroupManager(zoneInstance, NAME);
      assert(instanceGroupManager instanceof ServiceObject);

      const calledWith = instanceGroupManager.calledWith_[0];

      assert.strictEqual(calledWith.parent, zoneInstance);
      assert.strictEqual(calledWith.baseUrl, '/instanceGroupManagers');
      assert.strictEqual(calledWith.id, NAME);
      assert.deepStrictEqual(calledWith.methods, {
        exists: true,
        get: true,
        getMetadata: true,
      });

      done();
    });
  });

  describe('abandonInstances', () => {
    const VMS = [{url: 'vm-url'}, {url: 'vm-url-2'}];

    it('should make the correct API request', done => {
      instanceGroupManager.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/abandonInstances');
        assert.deepStrictEqual(reqOpts.json, {
          instances: VMS.map(vm => {
            return vm.url;
          }),
        });

        done();
      };

      instanceGroupManager.abandonInstances(VMS, assert.ifError);
    });

    describe('error', () => {
      const apiResponse = {};
      const error = new Error('Error.');

      beforeEach(() => {
        instanceGroupManager.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error and API response', done => {
        instanceGroupManager.abandonInstances(
          VMS,
          (err, operation, apiResponse_) => {
            assert.strictEqual(err, error);
            assert.strictEqual(operation, null);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          }
        );
      });
    });

    describe('success', () => {
      const apiResponse = {name: 'op-name'};

      beforeEach(() => {
        instanceGroupManager.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should return an Operation and API response', done => {
        const operation = {};

        instanceGroupManager.zone.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        instanceGroupManager.abandonInstances(
          VMS,
          (err, operation_, apiResponse_) => {
            assert.ifError(err);
            assert.strictEqual(operation_, operation);
            assert.strictEqual(operation.metadata, apiResponse);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          }
        );
      });
    });
  });

  describe('deleteInstances', () => {
    const VMS = [{url: 'vm-url'}, {url: 'vm-url-2'}];

    it('should make the correct API request', done => {
      instanceGroupManager.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/deleteInstances');
        assert.deepStrictEqual(reqOpts.json, {
          instances: VMS.map(vm => {
            return vm.url;
          }),
        });

        done();
      };

      instanceGroupManager.deleteInstances(VMS, assert.ifError);
    });

    describe('error', () => {
      const apiResponse = {};
      const error = new Error('Error.');

      beforeEach(() => {
        instanceGroupManager.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error and API response', done => {
        instanceGroupManager.deleteInstances(
          VMS,
          (err, operation, apiResponse_) => {
            assert.strictEqual(err, error);
            assert.strictEqual(operation, null);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          }
        );
      });
    });

    describe('success', () => {
      const apiResponse = {name: 'op-name'};

      beforeEach(() => {
        instanceGroupManager.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should return an Operation and API response', done => {
        const operation = {};

        instanceGroupManager.zone.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        instanceGroupManager.deleteInstances(
          VMS,
          (err, operation_, apiResponse_) => {
            assert.ifError(err);
            assert.strictEqual(operation_, operation);
            assert.strictEqual(operation.metadata, apiResponse);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          }
        );
      });
    });
  });

  describe('getManagedInstances', () => {
    beforeEach(() => {
      instanceGroupManager.zone.vm = function() {
        return {};
      };
    });

    it('should accept only a callback', done => {
      instanceGroupManager.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      instanceGroupManager.getManagedInstances(assert.ifError);
    });

    it('should make the correct API request', done => {
      const query = {a: 'b', c: 'd'};

      instanceGroupManager.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/listManagedInstances');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      instanceGroupManager.getManagedInstances(query, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        instanceGroupManager.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        instanceGroupManager.getManagedInstances(
          {},
          (err, vms, nextQuery, apiResponse_) => {
            assert.strictEqual(err, error);
            assert.strictEqual(nextQuery, null);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          }
        );
      });
    });

    describe('success', () => {
      const apiResponse = {
        managedInstances: [{instance: 'vm-name'}],
      };

      beforeEach(() => {
        instanceGroupManager.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', done => {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        const expectedNextQuery = {
          pageToken: nextPageToken,
        };

        instanceGroupManager.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        instanceGroupManager.getManagedInstances({}, (err, vms, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with VMs & API response', done => {
        const vm = {};

        instanceGroupManager.zone.vm = function(name) {
          assert.strictEqual(name, apiResponse.managedInstances[0].instance);
          return vm;
        };

        instanceGroupManager.getManagedInstances(
          {},
          (err, vms, nextQuery, apiResponse_) => {
            assert.ifError(err);

            assert.strictEqual(vms[0], vm);
            assert.strictEqual(
              vms[0].metadata,
              apiResponse.managedInstances[0]
            );

            assert.strictEqual(apiResponse_, apiResponse);

            done();
          }
        );
      });
    });
  });

  describe('resize', () => {
    const query = {size: 1};

    it('should make the correct API request', done => {
      instanceGroupManager.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/resize');
        assert.deepStrictEqual(reqOpts.qs, query);
        assert.deepStrictEqual(reqOpts.json, undefined);

        done();
      };

      instanceGroupManager.resize(1, assert.ifError);
    });

    describe('error', () => {
      const apiResponse = {};
      const error = new Error('Error.');

      beforeEach(() => {
        instanceGroupManager.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error and API response', done => {
        instanceGroupManager.resize(query, (err, operation, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {name: 'op-name'};

      beforeEach(() => {
        instanceGroupManager.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should return an Operation and API response', done => {
        const operation = {};

        instanceGroupManager.zone.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        instanceGroupManager.resize(query, (err, operation_, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });
});
