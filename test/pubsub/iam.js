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
var IAM = require('../../lib/pubsub/iam');
var noop = function() {};

describe('IAM', function() {
  var RESOURCE = 'projects/test-project/topics/test-topic';
  var pubsubMock = {
    makeReq_: noop
  };
  var iam;

  beforeEach(function() {
    iam = new IAM(pubsubMock, RESOURCE);
  });

  describe('initialization', function() {
    it('should localize the resource', function() {
      assert.strictEqual(iam.resource, RESOURCE);
    });
  });

  describe('getPolicy', function() {
    it('should make the correct API request', function(done) {
      iam.makeReq_ = function(method, path, q, body) {
        assert.strictEqual(method, 'GET');

        var expectedPath = RESOURCE + ':getIamPolicy';
        assert.strictEqual(path, expectedPath);

        assert.strictEqual(q, null);
        assert.strictEqual(body, null);

        done();
      };

      iam.getPolicy(assert.ifError);
    });

    it('should pass the callback the expected params', function(done) {
      var _policy = {
        bindings: [{ yo: 'yo' }]
      };

      iam.makeReq_ = function(method, path, q, body, callback) {
        callback(null, _policy, _policy);
      };

      iam.getPolicy(function(err, policy, apiResponse) {
        assert.ifError(err);
        assert.deepEqual(policy, _policy);
        assert.deepEqual(apiResponse, _policy);
        done();
      });
    });

    it('should handle errors properly', function(done) {
      var fakeResponse = {
        error: 'Ohnoes'
      };
      var error = new Error(fakeResponse.error);

      iam.makeReq_ = function(method, path, q, body, callback) {
        callback(error, fakeResponse);
      };

      iam.getPolicy(function(err, policy, apiResponse) {
        assert.strictEqual(err, error);
        assert.strictEqual(policy, null);
        assert.strictEqual(apiResponse, fakeResponse);
        done();
      });
    });
  });

  describe('setPolicy', function() {
    it('should throw an error if a policy is not supplied', function() {
      assert.throws(function() {
        iam.setPolicy(noop);
      }, /A policy is required/);
    });

    it('should make the correct API request', function(done) {
      var policy = { etag: 'ACAB' };

      iam.makeReq_ = function(method, path, q, body) {
        assert.strictEqual(method, 'POST');

        var expectedPath = RESOURCE + ':setIamPolicy';
        assert.strictEqual(path, expectedPath);

        assert.strictEqual(q, null);

        var expectedBody = { policy: policy };
        assert.deepEqual(body, expectedBody);

        done();
      };

      iam.setPolicy(policy, assert.ifError);
    });

    it('should pass the callback the expected params', function(done) {
      var _policy = {
        bindings: [{ yo: 'yo' }]
      };

      iam.makeReq_ = function(method, path, q, body, callback) {
        callback(null, body.policy, body.policy);
      };

      iam.setPolicy(_policy, function(err, policy, apiResponse) {
        assert.ifError(err);
        assert.deepEqual(_policy, policy);
        assert.deepEqual(_policy, apiResponse);
        done();
      });
    });

    it('should handle errors properly', function(done) {
      var fakeResponse = {
        error: 'Ohnoes'
      };
      var error = new Error(fakeResponse.error);

      iam.makeReq_ = function(method, path, q, body, callback) {
        callback(error, fakeResponse);
      };

      iam.setPolicy({}, function(err, policy, apiResponse) {
        assert.strictEqual(err, error);
        assert.strictEqual(policy, null);
        assert.strictEqual(apiResponse, fakeResponse);
        done();
      });
    });
  });

  describe('testPermissions', function() {
    it('should throw an error if permissions are missing', function() {
      assert.throws(function() {
        iam.testPermissions(noop);
      }, /Permissions are required/);
    });

    it('should make the correct API request', function(done) {
      var permissions = 'storage.bucket.list';

      iam.makeReq_ = function(method, path, q, body) {
        assert.strictEqual(method, 'POST');

        var expectedPath = RESOURCE + ':testIamPermissions';
        assert.strictEqual(path, expectedPath);

        assert.strictEqual(q, null);

        var expectedBody = { permissions: [permissions] };
        assert.deepEqual(body, expectedBody);

        done();
      };

      iam.testPermissions(permissions, assert.ifError);
    });

    it('should send an error back if the request fails', function(done) {
      var permissions = ['storage.bucket.list'];
      var error = new Error('Error.');
      var fakeResponse = {};

      iam.makeReq_ = function(method, path, q, body, callback) {
        callback(error, fakeResponse);
      };

      iam.testPermissions(permissions, function(err, perms, resp) {
        assert.strictEqual(err, error);
        assert.strictEqual(perms, null);
        assert.strictEqual(resp, fakeResponse);
        done();
      });
    });

    it('should pass back a hash of permissions the user has', function(done) {
      var permissions = [
        'storage.bucket.list',
        'storage.bucket.consume'
      ];
      var fakeResponse = {
        permissions: ['storage.bucket.consume']
      };

      iam.makeReq_ = function(method, path, q, body, callback) {
        callback(null, fakeResponse);
      };

      iam.testPermissions(permissions, function(err, perms, resp) {
        assert.ifError(err);
        assert.deepEqual(perms, {
          'storage.bucket.list': false,
          'storage.bucket.consume': true
        });
        assert.strictEqual(resp, fakeResponse);
        done();
      });
    });
  });
});
