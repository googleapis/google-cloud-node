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

// If we don't stub see4_crc32 and use mockery, we get "Module did not self-
// register".
var crc = require('sse4_crc32');

var arrify = require('arrify');
var assert = require('assert');
var extend = require('extend');
var mockery = require('mockery');

var util = require('../../lib/common/util.js');

var extended = false;
var fakeStreamRouter = {
  extend: function(Class, methods) {
    if (Class.name !== 'Storage') {
      return;
    }

    methods = arrify(methods);
    assert.equal(Class.name, 'Storage');
    assert.deepEqual(methods, ['getBuckets']);
    extended = true;
  }
};

describe('Storage', function() {
  var Storage;
  var storage;
  var Bucket;

  before(function() {
    mockery.registerMock('sse4_crc32', crc);
    mockery.registerMock('../common/stream-router.js', fakeStreamRouter);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Bucket = require('../../lib/storage/bucket.js');
    Storage = require('../../lib/storage');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    storage = new Storage({ projectId: 'project-id' });
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakeStreamRouter.extend`
    });

    it('should throw if a projectId is not specified', function() {
      assert.throws(function() {
        new Storage();
      }, /Sorry, we cannot connect/);
    });

    it('should set the project id', function() {
      assert.equal(storage.projectId, 'project-id');
    });
  });

  describe('bucket', function() {
    it('should accept a string for a name', function() {
      var newBucketName = 'new-bucket-name';
      var bucket = storage.bucket(newBucketName);
      assert(bucket instanceof Bucket);
      assert.equal(bucket.name, newBucketName);
    });
  });

  describe('createBucket', function() {
    var BUCKET_NAME = 'new-bucket-name';
    var METADATA = { a: 'b', c: { d: 'e' } };
    var BUCKET = { name: BUCKET_NAME };

    it('should make correct API request', function(done) {
      storage.makeReq_ = function(method, path, query, body, callback) {
        assert.equal(method, 'POST');
        assert.equal(path, '');
        assert.equal(query.project, storage.projectId);
        assert.equal(body.name, BUCKET_NAME);
        callback();
      };

      storage.createBucket(BUCKET_NAME, done);
    });

    it('should accept a name, metadata, and callback', function(done) {
      storage.makeReq_ = function(method, path, query, body, callback) {
        assert.deepEqual(body, extend(METADATA, { name: BUCKET_NAME }));
        callback(null, METADATA);
      };
      storage.bucket = function(name) {
        assert.equal(name, BUCKET_NAME);
        return BUCKET;
      };
      storage.createBucket(BUCKET_NAME, METADATA, function(err) {
        assert.ifError(err);
        done();
      });
    });

    it('should accept a name and callback only', function(done) {
      storage.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      storage.createBucket(BUCKET_NAME, done);
    });

    it('should throw if no name is provided', function() {
      assert.throws(function() {
        storage.createBucket();
      }, /A name is required/);
    });

    it('should execute callback with bucket', function(done) {
      storage.bucket = function() {
        return BUCKET;
      };
      storage.makeReq_ = function(method, path, query, body, callback) {
        callback(null, METADATA);
      };
      storage.createBucket(BUCKET_NAME, function(err, bucket) {
        assert.ifError(err);
        assert.deepEqual(bucket, BUCKET);
        assert.deepEqual(bucket.metadata, METADATA);
        done();
      });
    });

    it('should execute callback on error', function(done) {
      var error = new Error('Error.');
      storage.makeReq_ = function(method, path, query, body, callback) {
        callback(error);
      };
      storage.createBucket(BUCKET_NAME, function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should execute callback with apiResponse', function(done) {
      var resp = { success: true };
      storage.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };
      storage.createBucket(BUCKET_NAME, function(err, bucket, apiResponse) {
        assert.equal(resp, apiResponse);
        done();
      });
    });

    it('should expand the Nearline option', function(done) {
      storage.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(body.storageClass, 'NEARLINE');
        done();
      };
      storage.createBucket(BUCKET_NAME, { nearline: true }, function() {});
    });

    it('should expand the Durable Reduced Availability option', function(done) {
      storage.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(body.storageClass, 'DURABLE_REDUCED_AVAILABILITY');
        done();
      };
      storage.createBucket(BUCKET_NAME, { dra: true }, function() {});
    });

  });

  describe('getBuckets', function() {
    it('should get buckets without a query', function(done) {
      storage.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '');
        assert.deepEqual(query, { project: storage.projectId });
        assert.strictEqual(body, null);
        done();
      };
      storage.getBuckets(util.noop);
    });

    it('should get buckets with a query', function(done) {
      var token = 'next-page-token';
      storage.makeReq_ = function(method, path, query) {
        assert.deepEqual(query, {
          project: storage.projectId,
          maxResults: 5,
          pageToken: token
        });
        done();
      };
      storage.getBuckets({ maxResults: 5, pageToken: token }, util.noop);
    });

    it('should return nextQuery if more results exist', function() {
      var token = 'next-page-token';
      storage.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { nextPageToken: token, items: [] });
      };
      storage.getBuckets({ maxResults: 5 }, function(err, results, nextQuery) {
        assert.equal(nextQuery.pageToken, token);
        assert.strictEqual(nextQuery.maxResults, 5);
      });
    });

    it('should return null nextQuery if there are no more results', function() {
      storage.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { items: [] });
      };
      storage.getBuckets({ maxResults: 5 }, function(err, results, nextQuery) {
        assert.strictEqual(nextQuery, null);
      });
    });

    it('should return Bucket objects', function(done) {
      storage.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { items: [{ id: 'fake-bucket-name' }] });
      };
      storage.getBuckets(function(err, buckets) {
        assert.ifError(err);
        assert(buckets[0] instanceof Bucket);
        done();
      });
    });

    it('should return apiResponse', function(done) {
      var resp = { items: [{ id: 'fake-bucket-name' }] };
      storage.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };
      storage.getBuckets(function(err, buckets, nextQuery, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });

    it('should populate returned Bucket object with metadata', function(done) {
      var bucketMetadata = {
        id: 'bucketname',
        contentType: 'x-zebra',
        metadata: {
          my: 'custom metadata'
        }
      };
      storage.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { items: [bucketMetadata] });
      };
      storage.getBuckets(function(err, buckets) {
        assert.ifError(err);
        assert.deepEqual(buckets[0].metadata, bucketMetadata);
        done();
      });
    });
  });
});
