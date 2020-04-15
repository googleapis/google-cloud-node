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
  promisifyAll: function(Class) {
    if (Class.name === 'Service') {
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

describe('Service', () => {
  let Service;
  let service;

  const SERVICE_NAME = 'service-name';

  const COMPUTE = {
    projectId: 'project-id',
    createService: util.noop,
    apiEndpoint: 'compute.googleapis.com',
  };

  before(() => {
    Service = proxyquire('../src/service.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/promisify': fakePromisify,
    });
  });

  beforeEach(() => {
    service = new Service(COMPUTE, SERVICE_NAME);
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize the Compute instance', () => {
      assert.strictEqual(service.compute, COMPUTE);
    });

    it('should localize the name', () => {
      assert.strictEqual(service.name, SERVICE_NAME);
    });

    it('should inherit from ServiceObject', () => {
      const createMethod = util.noop;

      const computeInstance = Object.assign({}, COMPUTE, {
        createService: {
          bind: function(context) {
            assert.strictEqual(context, computeInstance);
            return createMethod;
          },
        },
      });

      const service = new Service(computeInstance, SERVICE_NAME);
      assert(service instanceof ServiceObject);

      const calledWith = service.calledWith_[0];

      assert.strictEqual(calledWith.parent, computeInstance);
      assert.strictEqual(calledWith.baseUrl, '/global/backendServices');
      assert.strictEqual(calledWith.id, SERVICE_NAME);
      assert.strictEqual(calledWith.createMethod, createMethod);
      assert.deepStrictEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true,
        getMetadata: true,
      });
    });
  });

  describe('delete', () => {
    it('should call ServiceObject.delete', done => {
      FakeServiceObject.prototype.delete = function() {
        assert.strictEqual(this, service);
        done();
      };

      service.delete();
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', done => {
        service.delete((err, operation, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          service.delete();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(() => {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', done => {
        const operation = {};

        service.compute.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        service.delete((err, operation_, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          service.delete();
        });
      });
    });
  });

  describe('getHealth', () => {
    const GROUP = 'http://group-url';

    it('should make the correct request', done => {
      service.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/getHealth');
        assert.deepStrictEqual(reqOpts.json, {
          group: GROUP,
        });

        done();
      };

      service.getHealth(GROUP, assert.ifError);
    });

    describe('group object', () => {
      it('should compose the right URL', done => {
        const group = {
          name: 'instance-group-name',
          zone: 'zone-name',
        };

        service.request = function(reqOpts) {
          assert.deepStrictEqual(reqOpts.json, {
            group: [
              'https://www.googleapis.com/compute/v1/projects/',
              COMPUTE.projectId,
              '/zones/',
              group.zone,
              '/instanceGroups/',
              group.name,
            ].join(''),
          });

          done();
        };

        service.getHealth(group, assert.ifError);
      });

      it('should compose the right URL', done => {
        const group = {
          name: 'instance-group-name',
          // Simulating a {module:compute/zone}:
          zone: {
            name: 'zone-name',
          },
        };

        service.request = function(reqOpts) {
          assert.deepStrictEqual(reqOpts.json, {
            group: [
              'https://www.googleapis.com/compute/v1/projects/',
              COMPUTE.projectId,
              '/zones/',
              group.zone.name,
              '/instanceGroups/',
              group.name,
            ].join(''),
          });

          done();
        };

        service.getHealth(group, assert.ifError);
      });
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        service.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', done => {
        service.getHealth(GROUP, (err, status, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(status, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        healthStatus: {},
      };

      beforeEach(() => {
        service.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with status & API response', done => {
        service.getHealth(GROUP, (err, status, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(status[0], apiResponse.healthStatus);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('setMetadata', () => {
    it('should make the correct API request', done => {
      const metadata = {};

      service.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'PATCH');
        assert.strictEqual(reqOpts.uri, '');
        assert.strictEqual(reqOpts.json, metadata);

        done();
      };

      service.setMetadata(metadata, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        service.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', done => {
        service.setMetadata({e: 'f'}, (err, op, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(op, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(() => {
        service.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with operation & response', done => {
        const operation = {};
        const metadata = {a: 'b'};

        service.compute.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        service.setMetadata(metadata, (err, op, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          service.setMetadata({a: 'b'});
        });
      });
    });
  });
});
