/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Iam') {
      promisified = true;
    }
  }
});

describe('storage/iam', function() {
  var Iam;
  var iam;

  var BUCKET_INSTANCE;

  before(function() {
    BUCKET_INSTANCE = {
      id: 'bucket-id',
      request: util.noop
    };

    Iam = proxyquire('../src/iam.js', {
      '@google-cloud/common': {
        util: fakeUtil
      }
    });
  });

  beforeEach(function() {
    iam = new Iam(BUCKET_INSTANCE);
  });

  describe('initialization', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the request function', function(done) {
      BUCKET_INSTANCE.request = {
        bind: function(context) {
          assert.strictEqual(context, BUCKET_INSTANCE);
          done();
        }
      };

      var iam = new Iam(BUCKET_INSTANCE);
      iam.request_();
    });

    it('should localize the resource ID', function() {
      assert.strictEqual(iam.resourceId_, 'buckets/' + BUCKET_INSTANCE.id);
    });
  });

  describe('getPolicy', function() {
    it('should make the correct api request', function(done) {
      iam.request_ = function(reqOpts, callback) {
        assert.deepEqual(reqOpts, {
          uri: '/iam'
        });

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
      var policy = {
        a: 'b'
      };

      iam.request_ = function(reqOpts, callback) {
        assert.deepEqual(reqOpts, {
          method: 'PUT',
          uri: '/iam',
          json: extend({
            resourceId: iam.resourceId_
          }, policy)
        });

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

      iam.request_ = function(reqOpts) {
        assert.deepEqual(reqOpts, {
          uri: '/iam/testPermissions',
          qs: {
            permissions: [
              permissions
            ]
          },
          useQuerystring: true
        });

        done();
      };

      iam.testPermissions(permissions, assert.ifError);
    });

    it('should send an error back if the request fails', function(done) {
      var permissions = ['storage.bucket.list'];
      var error = new Error('Error.');
      var apiResponse = {};

      iam.request_ = function(reqOpts, callback) {
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

      iam.request_ = function(reqOpts, callback) {
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
