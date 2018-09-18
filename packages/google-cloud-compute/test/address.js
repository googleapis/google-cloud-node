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
let nodeutil = require('util');
let proxyquire = require('proxyquire');
let ServiceObject = require('@google-cloud/common').ServiceObject;
let util = require('@google-cloud/common').util;

let promisified = false;
let fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Address') {
      promisified = true;
    }
  },
});

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Address', function() {
  let Address;
  let address;

  let ADDRESS_NAME = 'us-central1';
  let REGION = {
    createAddress: util.noop,
  };

  before(function() {
    Address = proxyquire('../src/address.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
    });
  });

  beforeEach(function() {
    address = new Address(REGION, ADDRESS_NAME);
  });

  describe('instantiation', function() {
    it('should localize the region', function() {
      assert.strictEqual(address.region, REGION);
    });

    it('should localize the name', function() {
      assert.strictEqual(address.name, ADDRESS_NAME);
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should inherit from ServiceObject', function(done) {
      var regionInstance = extend({}, REGION, {
        createAddress: {
          bind: function(context) {
            assert.strictEqual(context, regionInstance);
            done();
          },
        },
      });

      let address = new Address(regionInstance, ADDRESS_NAME);
      assert(address instanceof ServiceObject);

      let calledWith = address.calledWith_[0];

      assert.strictEqual(calledWith.parent, regionInstance);
      assert.strictEqual(calledWith.baseUrl, '/addresses');
      assert.strictEqual(calledWith.id, ADDRESS_NAME);
      assert.deepStrictEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true,
        getMetadata: true,
      });
    });
  });

  describe('delete', function() {
    it('should make the correct API request', function(done) {
      address.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'DELETE');
        assert.strictEqual(reqOpts.uri, '');
        done();
      };

      address.delete(assert.ifError);
    });

    describe('error', function() {
      let error = new Error('Error.');
      let apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        address.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        address.delete(function(err, operation, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          address.delete();
        });
      });
    });

    describe('success', function() {
      let apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        address.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', function(done) {
        let operation = {};

        address.region.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        address.delete(function(err, operation_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          address.delete();
        });
      });
    });
  });
});
