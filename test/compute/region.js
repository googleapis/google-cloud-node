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

var arrify = require('arrify');
var assert = require('assert');
var extend = require('extend');
var mockery = require('mockery-next');
var nodeutil = require('util');

var ServiceObject = require('../../lib/common/service-object.js');

function FakeAddress() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeOperation() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

var extended = false;
var fakeStreamRouter = {
  extend: function(Class, methods) {
    if (Class.name !== 'Region') {
      return;
    }

    extended = true;
    methods = arrify(methods);
    assert.equal(Class.name, 'Region');
    assert.deepEqual(methods, ['getAddresses', 'getOperations']);
  }
};

describe('Region', function() {
  var Region;
  var region;

  var COMPUTE = {
    authConfig: { a: 'b', c: 'd' }
  };
  var REGION_NAME = 'us-central1';

  before(function() {
    mockery.registerMock(
      '../../lib/common/service-object.js',
      FakeServiceObject
    );
    mockery.registerMock('../../lib/common/stream-router.js', fakeStreamRouter);
    mockery.registerMock('../../lib/compute/address.js', FakeAddress);
    mockery.registerMock('../../lib/compute/operation.js', FakeOperation);

    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Region = require('../../lib/compute/region.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    region = new Region(COMPUTE, REGION_NAME);
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakeStreamRouter.extend`
    });

    it('should localize the name', function() {
      assert.strictEqual(region.name, REGION_NAME);
    });

    it('should inherit from ServiceObject', function() {
      assert(region instanceof ServiceObject);

      var calledWith = region.calledWith_[0];

      assert.strictEqual(calledWith.parent, COMPUTE);
      assert.strictEqual(calledWith.baseUrl, '/regions');
      assert.strictEqual(calledWith.id, REGION_NAME);
      assert.deepEqual(calledWith.methods, {
        exists: true,
        get: true,
        getMetadata: true
      });
    });
  });

  describe('address', function() {
    var NAME = 'address-name';

    it('should return an Address object', function() {
      var address = region.address(NAME);
      assert(address instanceof FakeAddress);
      assert.strictEqual(address.calledWith_[0], region);
      assert.strictEqual(address.calledWith_[1], NAME);
    });
  });

  describe('createAddress', function() {
    var NAME = 'address-name';
    var OPTIONS = { a: 'b', c: 'd' };
    var EXPECTED_BODY = extend({}, OPTIONS, { name: NAME });

    it('should not require any options', function(done) {
      var expectedBody = { name: NAME };

      region.request = function(reqOpts) {
        assert.deepEqual(reqOpts.json, expectedBody);
        done();
      };

      region.createAddress(NAME, assert.ifError);
    });

    it('should make the correct API request', function(done) {
      region.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/addresses');
        assert.deepEqual(reqOpts.json, EXPECTED_BODY);

        done();
      };

      region.createAddress(NAME, OPTIONS, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        region.createAddress(NAME, OPTIONS, function(err, address_, op, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(address_, null);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { name: 'operation-name' };

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec callback with Address, Op & apiResponse', function(done) {
        var address = {};
        var operation = {};

        region.address = function(name) {
          assert.strictEqual(name, NAME);
          return address;
        };

        region.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        region.createAddress(NAME, OPTIONS, function(err, address_, op, resp) {
          assert.ifError(err);

          assert.strictEqual(address_, address);

          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, resp);

          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });

  describe('getAddresses', function() {
    it('should accept only a callback', function(done) {
      region.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      region.getAddresses(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var query = { a: 'b', c: 'd' };

      region.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/addresses');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      region.getAddresses(query, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        region.getAddresses({}, function(err, addresses, nextQuery, apiResp) {
          assert.strictEqual(err, error);
          assert.strictEqual(addresses, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        items: [
          { name: 'operation-name' }
        ]
      };

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken
        });
        var expectedNextQuery = {
          pageToken: nextPageToken
        };

        region.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        region.getAddresses({}, function(err, addresses, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Operations & API resp', function(done) {
        var address = {};

        region.address = function(name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return address;
        };

        region.getAddresses({}, function(err, addresses, nextQuery, apiResp) {
          assert.ifError(err);

          assert.strictEqual(addresses[0], address);
          assert.strictEqual(addresses[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResp, apiResponse);

          done();
        });
      });
    });
  });

  describe('getOperations', function() {
    it('should accept only a callback', function(done) {
      region.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      region.getOperations(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var query = { a: 'b', c: 'd' };

      region.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/operations');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      region.getOperations(query, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        region.getOperations({}, function(err, operations, nextQuery, apiResp) {
          assert.strictEqual(err, error);
          assert.strictEqual(operations, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        items: [
          { name: 'operation-name' }
        ]
      };

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken
        });
        var expectedNextQuery = {
          pageToken: nextPageToken
        };

        region.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        region.getOperations({}, function(err, operations, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Operations & API resp', function(done) {
        var operation = {};

        region.operation = function(name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return operation;
        };

        region.getOperations({}, function(err, operations, nextQuery, apiResp) {
          assert.ifError(err);

          assert.strictEqual(operations[0], operation);
          assert.strictEqual(operations[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResp, apiResponse);

          done();
        });
      });
    });
  });

  describe('operation', function() {
    var NAME = 'operation-name';

    it('should return a Operation object', function() {
      var operation = region.operation(NAME);
      assert(operation instanceof FakeOperation);
      assert.strictEqual(operation.calledWith_[0], region);
      assert.strictEqual(operation.calledWith_[1], NAME);
    });
  });
});
