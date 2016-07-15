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
var extend = require('extend');
var format = require('string-format-obj');
var mockery = require('mockery-next');
var nodeutil = require('util');

var ServiceObject = require('../../lib/common/service-object.js');
var util = require('../../lib/common/util.js');

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Subnetwork', function() {
  var Subnetwork;
  var subnetwork;

  var SUBNETWORK_NAME = 'subnetwork_name';
  var REGION_NAME = 'region-1';
  var REGION = {
    createSubnetwork: util.noop,
    name: REGION_NAME
  };
  var SUBNETWORK_FULL_NAME = format('regions/{region}/subnetworks/{name}', {
    region: REGION_NAME,
    name: SUBNETWORK_NAME
  });

  before(function() {
    mockery.registerMock(
      '../../lib/common/service-object.js',
      FakeServiceObject
    );
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Subnetwork = require('../../lib/compute/subnetwork.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    subnetwork = new Subnetwork(REGION, SUBNETWORK_NAME);
  });

  describe('instantiation', function() {
    it('should localize the region', function() {
      assert.strictEqual(subnetwork.region, REGION);
    });

    it('should localize the name', function() {
      assert.strictEqual(subnetwork.name, SUBNETWORK_NAME);
    });

    it('should inherit from ServiceObject', function(done) {
      var regionInstance = extend({}, REGION, {
        createSubnetwork: {
          bind: function(context) {
            assert.strictEqual(context, regionInstance);
            done();
          }
        }
      });

      var subnetwork = new Subnetwork(regionInstance, SUBNETWORK_NAME);
      assert(subnetwork instanceof ServiceObject);

      var calledWith = subnetwork.calledWith_[0];

      assert.strictEqual(calledWith.parent, regionInstance);
      assert.strictEqual(calledWith.baseUrl, '/subnetworks');
      assert.strictEqual(calledWith.id, SUBNETWORK_NAME);
      assert.deepEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true,
        getMetadata: true
      });
    });
  });

  describe('formatName_', function() {
    it('should format the name', function() {
      var formattedName_ = Subnetwork.formatName_(REGION, SUBNETWORK_NAME);
      assert.strictEqual(formattedName_, SUBNETWORK_FULL_NAME);
    });
  });

  describe('delete', function() {
    it('should make the correct API request', function(done) {
      subnetwork.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'DELETE');
        assert.strictEqual(reqOpts.uri, '');
        done();
      };

      subnetwork.delete(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        subnetwork.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        subnetwork.delete(function(err, operation, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          subnetwork.delete();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        name: 'op-name'
      };

      beforeEach(function() {
        subnetwork.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', function(done) {
        var operation = {};

        subnetwork.region.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        subnetwork.delete(function(err, operation_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          subnetwork.delete();
        });
      });
    });
  });
});
