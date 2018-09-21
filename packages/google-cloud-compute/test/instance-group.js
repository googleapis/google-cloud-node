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

const arrify = require('arrify');
const assert = require('assert');
const extend = require('extend');
const nodeutil = require('util');
const proxyquire = require('proxyquire');

const ServiceObject = require('@google-cloud/common').ServiceObject;
const util = require('@google-cloud/common').util;

let promisified = false;
const fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'InstanceGroup') {
      promisified = true;
    }
  },
});

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

let extended = false;
const fakePaginator = {
  extend: function(Class, methods) {
    if (Class.name !== 'InstanceGroup') {
      return;
    }

    extended = true;
    methods = arrify(methods);
    assert.strictEqual(Class.name, 'InstanceGroup');
    assert.deepStrictEqual(methods, ['getVMs']);
  },
  streamify: function(methodName) {
    return methodName;
  },
};

describe('InstanceGroup', function() {
  let InstanceGroup;
  let instanceGroup;

  const staticMethods = {};

  const ZONE = {
    createInstanceGroup: util.noop,
    vm: util.noop,
  };
  const NAME = 'instance-group-name';

  before(function() {
    InstanceGroup = proxyquire('../src/instance-group.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        paginator: fakePaginator,
        util: fakeUtil,
      },
    });
    staticMethods.formatPorts_ = InstanceGroup.formatPorts_;
  });

  beforeEach(function() {
    extend(InstanceGroup, staticMethods);
    instanceGroup = new InstanceGroup(ZONE, NAME);
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', function() {
      assert.strictEqual(instanceGroup.getVMsStream, 'getVMs');
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the zone instance', function() {
      assert.strictEqual(instanceGroup.zone, ZONE);
    });

    it('should localize the name', function() {
      assert.strictEqual(instanceGroup.name, NAME);
    });

    it('should inherit from ServiceObject', function(done) {
      const zoneInstance = extend({}, ZONE, {
        createInstanceGroup: {
          bind: function(context) {
            assert.strictEqual(context, zoneInstance);

            setImmediate(function() {
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

  describe('formatPorts_', function() {
    const PORTS = {
      http: 80,
      https: 443,
    };

    it('should format an object of named ports', function() {
      assert.deepStrictEqual(InstanceGroup.formatPorts_(PORTS), [
        {name: 'http', port: 80},
        {name: 'https', port: 443},
      ]);
    });
  });

  describe('add', function() {
    const VMS = [{url: 'vm-url'}, {url: 'vm-url-2'}];

    it('should make the correct API request', function(done) {
      instanceGroup.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/addInstances');
        assert.deepStrictEqual(reqOpts.json, {
          instances: VMS.map(function(vm) {
            return {
              instance: vm.url,
            };
          }),
        });

        done();
      };

      instanceGroup.add(VMS, assert.ifError);
    });

    describe('error', function() {
      const apiResponse = {};
      const error = new Error('Error.');

      beforeEach(function() {
        instanceGroup.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error and API response', function(done) {
        instanceGroup.add(VMS, function(err, operation, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {name: 'op-name'};

      beforeEach(function() {
        instanceGroup.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should return an Operation and API response', function(done) {
        const operation = {};

        instanceGroup.zone.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        instanceGroup.add(VMS, function(err, operation_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('delete', function() {
    it('should call ServiceObject.delete', function(done) {
      FakeServiceObject.prototype.delete = function() {
        assert.strictEqual(this, instanceGroup);
        done();
      };

      instanceGroup.delete();
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        instanceGroup.delete(function(err, operation, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          instanceGroup.delete();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', function(done) {
        const operation = {};

        instanceGroup.zone.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        instanceGroup.delete(function(err, operation_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          instanceGroup.delete();
        });
      });
    });
  });

  describe('getVMs', function() {
    beforeEach(function() {
      instanceGroup.zone.vm = function() {
        return {};
      };
    });

    it('should accept only a callback', function(done) {
      instanceGroup.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      instanceGroup.getVMs(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const query = {a: 'b', c: 'd'};

      instanceGroup.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/listInstances');
        assert.strictEqual(reqOpts.qs, query);
        assert.strictEqual(reqOpts.json, undefined);

        done();
      };

      instanceGroup.getVMs(query, assert.ifError);
    });

    describe('options.running', function() {
      const OPTIONS = {
        running: true,
      };

      it('should set the instanceState filter', function(done) {
        instanceGroup.request = function(reqOpts) {
          assert.deepStrictEqual(reqOpts.json, {
            instanceState: 'RUNNING',
          });
          done();
        };

        instanceGroup.getVMs(OPTIONS, assert.ifError);
      });
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        instanceGroup.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        instanceGroup.getVMs({}, function(err, vms, nextQuery, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(vms, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        items: [{instance: 'vm-name'}],
      };

      beforeEach(function() {
        instanceGroup.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        const expectedNextQuery = {
          pageToken: nextPageToken,
        };

        instanceGroup.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        instanceGroup.getVMs({}, function(err, vms, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with VMs & API response', function(done) {
        const vm = {};

        instanceGroup.zone.vm = function(name) {
          assert.strictEqual(name, apiResponse.items[0].instance);
          return vm;
        };

        instanceGroup.getVMs({}, function(err, vms, nextQuery, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(vms[0], vm);
          assert.strictEqual(vms[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });
  });

  describe('remove', function() {
    const VMS = [{url: 'vm-url'}, {url: 'vm-url-2'}];

    it('should make the correct API request', function(done) {
      instanceGroup.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/removeInstances');
        assert.deepStrictEqual(reqOpts.json, {
          instances: VMS.map(function(vm) {
            return {
              instance: vm.url,
            };
          }),
        });

        done();
      };

      instanceGroup.remove(VMS, assert.ifError);
    });

    describe('error', function() {
      const apiResponse = {};
      const error = new Error('Error.');

      beforeEach(function() {
        instanceGroup.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error and API response', function(done) {
        instanceGroup.remove(VMS, function(err, operation, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {name: 'op-name'};

      beforeEach(function() {
        instanceGroup.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should return an Operation and API response', function(done) {
        const operation = {};

        instanceGroup.zone.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        instanceGroup.remove(VMS, function(err, operation_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('setPorts', function() {
    const PORTS = {
      http: 80,
      https: 443,
    };

    it('should format the named ports', function(done) {
      const expectedNamedPorts = [];

      InstanceGroup.formatPorts_ = function(ports) {
        assert.strictEqual(ports, PORTS);
        return expectedNamedPorts;
      };

      instanceGroup.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/setNamedPorts');
        assert.strictEqual(reqOpts.json.namedPorts, expectedNamedPorts);
        done();
      };

      instanceGroup.setPorts(PORTS, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        instanceGroup.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        instanceGroup.setPorts(PORTS, function(err, operation, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          instanceGroup.setPorts(PORTS);
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        instanceGroup.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', function(done) {
        const operation = {};

        instanceGroup.zone.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        instanceGroup.setPorts(PORTS, function(err, operation_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          instanceGroup.setPorts(PORTS);
        });
      });
    });
  });
});
