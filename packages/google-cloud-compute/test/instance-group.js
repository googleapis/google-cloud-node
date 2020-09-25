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

const arrify = require('arrify');
const assert = require('assert');
const proxyquire = require('proxyquire');
const {ServiceObject, util} = require('@google-cloud/common');
const promisify = require('@google-cloud/promisify');

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  promisifyAll: function (Class) {
    if (Class.name === 'InstanceGroup') {
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

let extended = false;
const fakePaginator = {
  paginator: {
    extend: function (Class, methods) {
      if (Class.name !== 'InstanceGroup') {
        return;
      }

      extended = true;
      methods = arrify(methods);
      assert.strictEqual(Class.name, 'InstanceGroup');
      assert.deepStrictEqual(methods, ['getVMs']);
    },
    streamify: function (methodName) {
      return methodName;
    },
  },
};

describe('InstanceGroup', () => {
  let InstanceGroup;
  let instanceGroup;

  const staticMethods = {};

  const ZONE = {
    createInstanceGroup: util.noop,
    vm: util.noop,
    compute: {},
  };
  const NAME = 'instance-group-name';

  before(() => {
    InstanceGroup = proxyquire('../src/instance-group.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/paginator': fakePaginator,
      '@google-cloud/promisify': fakePromisify,
    });
    staticMethods.formatPorts_ = InstanceGroup.formatPorts_;
  });

  beforeEach(() => {
    Object.assign(InstanceGroup, staticMethods);
    instanceGroup = new InstanceGroup(ZONE, NAME);
  });

  describe('instantiation', () => {
    it('should extend the correct methods', () => {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', () => {
      assert.strictEqual(instanceGroup.getVMsStream, 'getVMs');
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize the zone instance', () => {
      assert.strictEqual(instanceGroup.zone, ZONE);
    });

    it('should localize the name', () => {
      assert.strictEqual(instanceGroup.name, NAME);
    });

    it('should inherit from ServiceObject', done => {
      const zoneInstance = Object.assign({}, ZONE, {
        createInstanceGroup: {
          bind: function (context) {
            assert.strictEqual(context, zoneInstance);

            setImmediate(() => {
              assert(instanceGroup instanceof ServiceObject);

              const calledWith = instanceGroup.calledWith_[0];

              assert.strictEqual(calledWith.parent, zoneInstance);
              assert.strictEqual(calledWith.baseUrl, '/instanceGroups');
              assert.strictEqual(calledWith.id, NAME);
              assert.deepStrictEqual(calledWith.methods, {
                create: true,
                exists: true,
                get: true,
                getMetadata: true,
              });

              done();
            });
          },
        },
      });

      const instanceGroup = new InstanceGroup(zoneInstance, NAME);
    });
  });

  describe('formatPorts_', () => {
    const PORTS = {
      http: 80,
      https: 443,
    };

    it('should format an object of named ports', () => {
      assert.deepStrictEqual(InstanceGroup.formatPorts_(PORTS), [
        {name: 'http', port: 80},
        {name: 'https', port: 443},
      ]);
    });
  });

  describe('add', () => {
    const VMS = [{url: 'vm-url'}, {url: 'vm-url-2'}];

    it('should make the correct API request', done => {
      instanceGroup.request = function (reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/addInstances');
        assert.deepStrictEqual(reqOpts.json, {
          instances: VMS.map(vm => {
            return {
              instance: vm.url,
            };
          }),
        });

        done();
      };

      instanceGroup.add(VMS, assert.ifError);
    });

    describe('error', () => {
      const apiResponse = {};
      const error = new Error('Error.');

      beforeEach(() => {
        instanceGroup.request = function (reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error and API response', done => {
        instanceGroup.add(VMS, (err, operation, apiResponse_) => {
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
        instanceGroup.request = function (reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should return an Operation and API response', done => {
        const operation = {};

        instanceGroup.zone.operation = function (name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        instanceGroup.add(VMS, (err, operation_, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('delete', () => {
    it('should call ServiceObject.delete', done => {
      FakeServiceObject.prototype.delete = function () {
        assert.strictEqual(this, instanceGroup);
        done();
      };

      instanceGroup.delete();
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        FakeServiceObject.prototype.delete = function (callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', done => {
        instanceGroup.delete((err, operation, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          instanceGroup.delete();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(() => {
        FakeServiceObject.prototype.delete = function (callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', done => {
        const operation = {};

        instanceGroup.zone.operation = function (name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        instanceGroup.delete((err, operation_, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          instanceGroup.delete();
        });
      });
    });
  });

  describe('getVMs', () => {
    beforeEach(() => {
      instanceGroup.zone.vm = function () {
        return {};
      };
    });

    it('should accept only a callback', done => {
      instanceGroup.request = function (reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      instanceGroup.getVMs(assert.ifError);
    });

    it('should make the correct API request', done => {
      const query = {a: 'b', c: 'd'};

      instanceGroup.request = function (reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/listInstances');
        assert.strictEqual(reqOpts.qs, query);
        assert.strictEqual(reqOpts.json, undefined);

        done();
      };

      instanceGroup.getVMs(query, assert.ifError);
    });

    describe('options.running', () => {
      const OPTIONS = {
        running: true,
      };

      it('should set the instanceState filter', done => {
        instanceGroup.request = function (reqOpts) {
          assert.deepStrictEqual(reqOpts.json, {
            instanceState: 'RUNNING',
          });
          done();
        };

        instanceGroup.getVMs(OPTIONS, assert.ifError);
      });
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        instanceGroup.request = function (reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        instanceGroup.getVMs({}, (err, vms, nextQuery, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(vms, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        items: [{instance: 'vm-name'}],
      };

      beforeEach(() => {
        instanceGroup.request = function (reqOpts, callback) {
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

        instanceGroup.request = function (reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        instanceGroup.getVMs({}, (err, vms, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with VMs & API response', done => {
        const vm = {};

        instanceGroup.zone.vm = function (name) {
          assert.strictEqual(name, apiResponse.items[0].instance);
          return vm;
        };

        instanceGroup.getVMs({}, (err, vms, nextQuery, apiResponse_) => {
          assert.ifError(err);

          assert.strictEqual(vms[0], vm);
          assert.strictEqual(vms[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });
  });

  describe('remove', () => {
    const VMS = [{url: 'vm-url'}, {url: 'vm-url-2'}];

    it('should make the correct API request', done => {
      instanceGroup.request = function (reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/removeInstances');
        assert.deepStrictEqual(reqOpts.json, {
          instances: VMS.map(vm => {
            return {
              instance: vm.url,
            };
          }),
        });

        done();
      };

      instanceGroup.remove(VMS, assert.ifError);
    });

    describe('error', () => {
      const apiResponse = {};
      const error = new Error('Error.');

      beforeEach(() => {
        instanceGroup.request = function (reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error and API response', done => {
        instanceGroup.remove(VMS, (err, operation, apiResponse_) => {
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
        instanceGroup.request = function (reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should return an Operation and API response', done => {
        const operation = {};

        instanceGroup.zone.operation = function (name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        instanceGroup.remove(VMS, (err, operation_, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('setPorts', () => {
    const PORTS = {
      http: 80,
      https: 443,
    };

    it('should format the named ports', done => {
      const expectedNamedPorts = [];

      InstanceGroup.formatPorts_ = function (ports) {
        assert.strictEqual(ports, PORTS);
        return expectedNamedPorts;
      };

      instanceGroup.request = function (reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/setNamedPorts');
        assert.strictEqual(reqOpts.json.namedPorts, expectedNamedPorts);
        done();
      };

      instanceGroup.setPorts(PORTS, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        instanceGroup.request = function (reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', done => {
        instanceGroup.setPorts(PORTS, (err, operation, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          instanceGroup.setPorts(PORTS);
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(() => {
        instanceGroup.request = function (reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', done => {
        const operation = {};

        instanceGroup.zone.operation = function (name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        instanceGroup.setPorts(PORTS, (err, operation_, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          instanceGroup.setPorts(PORTS);
        });
      });
    });
  });
});
