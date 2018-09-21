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

const assert = require('assert');
const extend = require('extend');
const nodeutil = require('util');
const proxyquire = require('proxyquire');
const ServiceObject = require('@google-cloud/common').ServiceObject;
const util = require('@google-cloud/common').util;

let promisified = false;
const fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Service') {
      promisified = true;
    }
  },
});

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Service', function() {
  let Service;
  let service;

  const SERVICE_NAME = 'service-name';

  const COMPUTE = {
    projectId: 'project-id',
    createService: util.noop,
  };

  before(function() {
    Service = proxyquire('../src/service.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
    });
  });

  beforeEach(function() {
    service = new Service(COMPUTE, SERVICE_NAME);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the Compute instance', function() {
      assert.strictEqual(service.compute, COMPUTE);
    });

    it('should localize the name', function() {
      assert.strictEqual(service.name, SERVICE_NAME);
    });

    it('should inherit from ServiceObject', function() {
      const createMethod = util.noop;

      const computeInstance = extend({}, COMPUTE, {
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

  describe('delete', function() {
    it('should call ServiceObject.delete', function(done) {
      FakeServiceObject.prototype.delete = function() {
        assert.strictEqual(this, service);
        done();
      };

      service.delete();
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
        service.delete(function(err, operation, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          service.delete();
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

        service.compute.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        service.delete(function(err, operation_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          service.delete();
        });
      });
    });
  });

  describe('getHealth', function() {
    const GROUP = 'http://group-url';

    it('should make the correct request', function(done) {
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

    describe('group object', function() {
      it('should compose the right URL', function(done) {
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

      it('should compose the right URL', function(done) {
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

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        service.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        service.getHealth(GROUP, function(err, status, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(status, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        healthStatus: {},
      };

      beforeEach(function() {
        service.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with status & API response', function(done) {
        service.getHealth(GROUP, function(err, status, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(status[0], apiResponse.healthStatus);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('setMetadata', function() {
    it('should make the correct API request', function(done) {
      const metadata = {};

      service.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'PATCH');
        assert.strictEqual(reqOpts.uri, '');
        assert.strictEqual(reqOpts.json, metadata);

        done();
      };

      service.setMetadata(metadata, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        service.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        service.setMetadata({e: 'f'}, function(err, op, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(op, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        service.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with operation & response', function(done) {
        const operation = {};
        const metadata = {a: 'b'};

        service.compute.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        service.setMetadata(metadata, function(err, op, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          service.setMetadata({a: 'b'});
        });
      });
    });
  });
});
