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

describe('InstanceGroupManager', function() {
  let InstanceGroupManager;
  let instanceGroupManager;

  const staticMethods = {};

  const ZONE = {};
  const NAME = 'instance-group-manager-name';

  before(function() {
    InstanceGroupManager = proxyquire('../src/instance-group-manager.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/promisify': fakePromisify,
    });
  });

  beforeEach(function() {
    Object.assign(InstanceGroupManager, staticMethods);
    instanceGroupManager = new InstanceGroupManager(ZONE, NAME);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the zone instance', function() {
      assert.strictEqual(instanceGroupManager.zone, ZONE);
    });

    it('should localize the name', function() {
      assert.strictEqual(instanceGroupManager.name, NAME);
    });

    it('should inherit from ServiceObject', function(done) {
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

  describe('resize', function() {
    const query = {size: 1};

    it('should make the correct API request', function(done) {
      instanceGroupManager.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/resize');
        assert.deepStrictEqual(reqOpts.qs, query);
        assert.deepStrictEqual(reqOpts.json, undefined);

        done();
      };

      instanceGroupManager.resize(1, assert.ifError);
    });

    describe('error', function() {
      const apiResponse = {};
      const error = new Error('Error.');

      beforeEach(function() {
        instanceGroupManager.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error and API response', function(done) {
        instanceGroupManager.resize(query, function(
          err,
          operation,
          apiResponse_
        ) {
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
        instanceGroupManager.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should return an Operation and API response', function(done) {
        const operation = {};

        instanceGroupManager.zone.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        instanceGroupManager.resize(query, function(
          err,
          operation_,
          apiResponse_
        ) {
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
