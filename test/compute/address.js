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

var assert = require('assert');
var Address = require('../../lib/compute/address');

describe('Address', function() {
  var address;

  var ADDRESS_NAME = 'us-central1';
  var REGION = {};

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

    it('should default metadata to an empty object', function() {
      assert.strictEqual(typeof address.metadata, 'object');
      assert.strictEqual(Object.keys(address.metadata).length, 0);
    });
  });

  describe('delete', function() {
    it('should make the correct API request', function(done) {
      address.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'DELETE');
        assert.strictEqual(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);
        done();
      };

      address.delete(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        address.makeReq_ = function(method, path, query, body, callback) {
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
      var apiResponse = {
        name: 'op-name'
      };

      beforeEach(function() {
        address.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', function(done) {
        var operation = {};

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

  describe('getMetadata', function() {
    it('should make the correct API request', function(done) {
      address.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        done();
      };

      address.getMetadata(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        address.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error and API response', function(done) {
        address.getMetadata(function(err, metadata, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(metadata, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          address.getMetadata();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        address.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should update the metadata to the API response', function(done) {
        address.getMetadata(function(err) {
          assert.ifError(err);
          assert.strictEqual(address.metadata, apiResponse);
          done();
        });
      });

      it('should exec callback with metadata and API response', function(done) {
        address.getMetadata(function(err, metadata, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          address.getMetadata();
        });
      });
    });
  });

  describe('makeReq_', function() {
    it('should make the correct request to Compute', function(done) {
      var expectedPathPrefix = '/addresses/' + address.name;

      var method = 'POST';
      var path = '/test';
      var query = {
        a: 'b',
        c: 'd'
      };
      var body = {
        a: 'b',
        c: 'd'
      };

      address.region.makeReq_ = function(method_, path_, query_, body_, cb) {
        assert.strictEqual(method_, method);
        assert.strictEqual(path_, expectedPathPrefix + path);
        assert.strictEqual(query_, query);
        assert.strictEqual(body_, body);
        cb();
      };

      address.makeReq_(method, path, query, body, done);
    });
  });
});
