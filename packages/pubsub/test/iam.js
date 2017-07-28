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
var extend = require('extend');
var GrpcService = require('@google-cloud/common-grpc').Service;
var nodeutil = require('util');
var path = require('path');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'IAM') {
      promisified = true;
    }
  }
});

function FakeGrpcService() {
  this.calledWith_ = arguments;
  GrpcService.apply(this, arguments);
}

nodeutil.inherits(FakeGrpcService, GrpcService);

describe('IAM', function() {
  var IAM;
  var iam;

  var PUBSUB = {
    defaultBaseUrl_: 'base-url',
    options: {}
  };
  var ID = 'id';

  before(function() {
    IAM = proxyquire('../src/iam.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      '@google-cloud/common-grpc': {
        Service: FakeGrpcService
      }
    });
  });

  beforeEach(function() {
    iam = new IAM(PUBSUB, ID);
  });

  describe('initialization', function() {
    it('should inherit from GrpcService', function() {
      assert(iam instanceof GrpcService);

      var config = iam.calledWith_[0];
      var options = iam.calledWith_[1];

      assert.strictEqual(config.baseUrl, 'pubsub.googleapis.com');

      var protosDir = path.resolve(__dirname, '../protos');
      assert.strictEqual(config.protosDir, protosDir);

      assert.deepStrictEqual(config.protoServices, {
        IAMPolicy: {
          path: 'google/iam/v1/iam_policy.proto',
          service: 'iam.v1'
        }
      });

      assert.deepEqual(config.scopes, [
        'https://www.googleapis.com/auth/pubsub',
        'https://www.googleapis.com/auth/cloud-platform'
      ]);
      assert.deepEqual(config.packageJson, require('../package.json'));

      assert.strictEqual(options, PUBSUB.options);
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the ID', function() {
      assert.strictEqual(iam.id, ID);
    });
  });

  describe('getPolicy', function() {
    it('should make the correct API request', function(done) {
      iam.request = function(protoOpts, reqOpts, callback) {
        assert.strictEqual(protoOpts.service, 'IAMPolicy');
        assert.strictEqual(protoOpts.method, 'getIamPolicy');

        assert.strictEqual(reqOpts.resource, iam.id);

        callback(); // done()
      };

      iam.getPolicy(done);
    });
  });

  describe('setPolicy', function() {
    it('should throw an error if a policy is not supplied', function() {
      assert.throws(function() {
        iam.setPolicy(util.noop);
      }, /A policy object is required\./);
    });

    it('should make the correct API request', function(done) {
      var policy = { etag: 'ACAB' };

      iam.request = function(protoOpts, reqOpts, callback) {
        assert.strictEqual(protoOpts.service, 'IAMPolicy');
        assert.strictEqual(protoOpts.method, 'setIamPolicy');

        assert.strictEqual(reqOpts.resource, iam.id);
        assert.strictEqual(reqOpts.policy, policy);

        callback(); // done()
      };

      iam.setPolicy(policy, done);
    });
  });

  describe('testPermissions', function() {
    it('should throw an error if permissions are missing', function() {
      assert.throws(function() {
        iam.testPermissions(util.noop);
      }, /Permissions are required\./);
    });

    it('should make the correct API request', function(done) {
      var permissions = 'storage.bucket.list';

      iam.request = function(protoOpts, reqOpts) {
        assert.strictEqual(protoOpts.service, 'IAMPolicy');
        assert.strictEqual(protoOpts.method, 'testIamPermissions');

        assert.strictEqual(reqOpts.resource, iam.id);
        assert.deepEqual(reqOpts.permissions, [permissions]);

        done();
      };

      iam.testPermissions(permissions, assert.ifError);
    });

    it('should send an error back if the request fails', function(done) {
      var permissions = ['storage.bucket.list'];
      var error = new Error('Error.');
      var apiResponse = {};

      iam.request = function(protoOpts, reqOpts, callback) {
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

      iam.request = function(protoOpts, reqOpts, callback) {
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
