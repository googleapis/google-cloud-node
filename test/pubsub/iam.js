/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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
var mockery = require('mockery');
var nodeutil = require('util');

var ServiceObject = require('../../lib/common/service-object.js');
var util = require('../../lib/common/util.js');

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('IAM', function() {
  var IAM;
  var iam;

  var PUBSUB = {};
  var CONFIG = {
    baseUrl: '/baseurl',
    id: 'id'
  };

  before(function() {
    mockery.registerMock('../common/service-object.js', FakeServiceObject);

    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    IAM = require('../../lib/pubsub/iam.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    iam = new IAM(PUBSUB, CONFIG);
  });

  describe('initialization', function() {
    it('should inherit from ServiceObject', function() {
      assert(iam instanceof ServiceObject);

      var calledWith = iam.calledWith_[0];

      assert.strictEqual(calledWith.parent, PUBSUB);
      assert.strictEqual(calledWith.baseUrl, CONFIG.baseUrl);
      assert.strictEqual(calledWith.id, CONFIG.id);
      assert.deepEqual(calledWith.methods, {});
    });
  });

  describe('getPolicy', function() {
    it('should make the correct API request', function(done) {
      iam.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, ':getIamPolicy');

        done();
      };

      iam.getPolicy(assert.ifError);
    });

    it('should handle errors properly', function(done) {
      var apiResponse = {};
      var error = new Error('Error.');

      iam.request = function(reqOpts, callback) {
        callback(error, apiResponse);
      };

      iam.getPolicy(function(err, policy, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(policy, null);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should pass the callback the expected params', function(done) {
      var apiResponse = {
        bindings: [{ yo: 'yo' }]
      };

      iam.request = function(reqOpts, callback) {
        callback(null, apiResponse);
      };

      iam.getPolicy(function(err, policy, apiResponse_) {
        assert.ifError(err);
        assert.strictEqual(policy, apiResponse);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });
  });

  describe('setPolicy', function() {
    it('should throw an error if a policy is not supplied', function() {
      assert.throws(function() {
        iam.setPolicy(util.noop);
      }, /A policy object is required/);
    });

    it('should make the correct API request', function(done) {
      var policy = { etag: 'ACAB' };

      iam.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, ':setIamPolicy');
        assert.deepEqual(reqOpts.json, { policy: policy });

        done();
      };

      iam.setPolicy(policy, assert.ifError);
    });

    it('should handle errors properly', function(done) {
      var apiResponse = {};
      var error = new Error('Error.');

      iam.request = function(reqOpts, callback) {
        callback(error, apiResponse);
      };

      iam.setPolicy({}, function(err, policy, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(policy, null);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should pass the callback the expected params', function(done) {
      var apiResponse = {
        bindings: [{ yo: 'yo' }]
      };

      iam.request = function(reqOpts, callback) {
        callback(null, apiResponse);
      };

      iam.setPolicy({}, function(err, policy, apiResponse_) {
        assert.ifError(err);
        assert.strictEqual(policy, apiResponse);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });
  });

  describe('testPermissions', function() {
    it('should throw an error if permissions are missing', function() {
      assert.throws(function() {
        iam.testPermissions(util.noop);
      }, /Permissions are required/);
    });

    it('should make the correct API request', function(done) {
      var permissions = 'storage.bucket.list';

      iam.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, ':testIamPermissions');
        assert.deepEqual(reqOpts.json, { permissions: [permissions] });

        done();
      };

      iam.testPermissions(permissions, assert.ifError);
    });

    it('should send an error back if the request fails', function(done) {
      var permissions = ['storage.bucket.list'];
      var error = new Error('Error.');
      var apiResponse = {};

      iam.request = function(reqOpts, callback) {
        callback(error, apiResponse);
      };

      iam.testPermissions(permissions, function(err, permissions, apiResp) {
        assert.strictEqual(err, error);
        assert.strictEqual(permissions, null);
        assert.strictEqual(apiResp, apiResponse);
        done();
      });
    });

    it('should pass back a hash of permissions the user has', function(done) {
      var permissions = [
        'storage.bucket.list',
        'storage.bucket.consume'
      ];
      var apiResponse = {
        permissions: ['storage.bucket.consume']
      };

      iam.request = function(reqOpts, callback) {
        callback(null, apiResponse);
      };

      iam.testPermissions(permissions, function(err, permissions, apiResp) {
        assert.ifError(err);
        assert.deepEqual(permissions, {
          'storage.bucket.list': false,
          'storage.bucket.consume': true
        });
        assert.strictEqual(apiResp, apiResponse);

        done();
      });
    });
  });
});
