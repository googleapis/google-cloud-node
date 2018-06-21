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

const arrify = require('arrify');
const assert = require('assert');
const extend = require('extend');
const nodeutil = require('util');
const proxyquire = require('proxyquire');
const Service = require('@google-cloud/common').Service;
const util = require('@google-cloud/common').util;

function FakeChannel() {
  this.calledWith_ = arguments;
}

function FakeService() {
  this.calledWith_ = arguments;
  Service.apply(this, arguments);
}

nodeutil.inherits(FakeService, Service);

let extended = false;
const fakePaginator = {
  extend: function(Class, methods) {
    if (Class.name !== 'Storage') {
      return;
    }

    methods = arrify(methods);
    assert.equal(Class.name, 'Storage');
    assert.deepEqual(methods, ['getBuckets']);
    extended = true;
  },
  streamify: function(methodName) {
    return methodName;
  },
};

let promisified = false;
const fakeUtil = extend({}, util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Storage') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['bucket', 'channel']);
  },
});
const originalFakeUtil = extend(true, {}, fakeUtil);

describe('Storage', function() {
  const PROJECT_ID = 'project-id';
  let Storage;
  let storage;
  let Bucket;

  before(function() {
    Storage = proxyquire('../', {
      '@google-cloud/common': {
        Service: FakeService,
        paginator: fakePaginator,
        util: fakeUtil,
      },
      './channel.js': FakeChannel,
    });
    Bucket = Storage.Bucket;
  });

  beforeEach(function() {
    extend(fakeUtil, originalFakeUtil);
    storage = new Storage({projectId: PROJECT_ID});
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', function() {
      assert.strictEqual(storage.getBucketsStream, 'getBuckets');
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should work without new', function() {
      assert.doesNotThrow(function() {
        Storage({projectId: PROJECT_ID});
      });
    });

    it('should inherit from Service', function() {
      assert(storage instanceof Service);

      const calledWith = storage.calledWith_[0];

      const baseUrl = 'https://www.googleapis.com/storage/v1';
      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.strictEqual(calledWith.projectIdRequired, false);
      assert.deepEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/iam',
        'https://www.googleapis.com/auth/cloud-platform',
        'https://www.googleapis.com/auth/devstorage.full_control',
      ]);
      assert.deepEqual(calledWith.packageJson, require('../package.json'));
    });
  });

  describe('bucket', function() {
    it('should throw if no name was provided', function() {
      assert.throws(function() {
        storage.bucket();
      }, /A bucket name is needed to use Cloud Storage\./);
    });

    it('should accept a string for a name', function() {
      const newBucketName = 'new-bucket-name';
      const bucket = storage.bucket(newBucketName);
      assert(bucket instanceof Bucket);
      assert.equal(bucket.name, newBucketName);
    });

    it('should optionally accept options', function() {
      const options = {
        userProject: 'grape-spaceship-123',
      };

      const bucket = storage.bucket('bucket-name', options);
      assert.strictEqual(bucket.userProject, options.userProject);
    });
  });

  describe('channel', function() {
    const ID = 'channel-id';
    const RESOURCE_ID = 'resource-id';

    it('should create a Channel object', function() {
      const channel = storage.channel(ID, RESOURCE_ID);

      assert(channel instanceof FakeChannel);

      assert.strictEqual(channel.calledWith_[0], storage);
      assert.strictEqual(channel.calledWith_[1], ID);
      assert.strictEqual(channel.calledWith_[2], RESOURCE_ID);
    });
  });

  describe('createBucket', function() {
    const BUCKET_NAME = 'new-bucket-name';
    const METADATA = {a: 'b', c: {d: 'e'}};
    const BUCKET = {name: BUCKET_NAME};

    it('should make correct API request', function(done) {
      storage.request = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/b');
        assert.strictEqual(reqOpts.qs.project, storage.projectId);
        assert.strictEqual(reqOpts.json.name, BUCKET_NAME);

        callback();
      };

      storage.createBucket(BUCKET_NAME, done);
    });

    it('should accept a name, metadata, and callback', function(done) {
      storage.request = function(reqOpts, callback) {
        assert.deepEqual(reqOpts.json, extend(METADATA, {name: BUCKET_NAME}));
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
      storage.request = function(reqOpts, callback) {
        callback();
      };
      storage.createBucket(BUCKET_NAME, done);
    });

    it('should throw if no name is provided', function() {
      assert.throws(function() {
        storage.createBucket();
      }, /A name is required to create a bucket\./);
    });

    it('should honor the userProject option', function(done) {
      const options = {
        userProject: 'grape-spaceship-123',
      };

      storage.request = function(reqOpts) {
        assert.strictEqual(reqOpts.qs.userProject, options.userProject);
        done();
      };

      storage.createBucket(BUCKET_NAME, options, assert.ifError);
    });

    it('should execute callback with bucket', function(done) {
      storage.bucket = function() {
        return BUCKET;
      };
      storage.request = function(reqOpts, callback) {
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
      const error = new Error('Error.');
      storage.request = function(reqOpts, callback) {
        callback(error);
      };
      storage.createBucket(BUCKET_NAME, function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should execute callback with apiResponse', function(done) {
      const resp = {success: true};
      storage.request = function(reqOpts, callback) {
        callback(null, resp);
      };
      storage.createBucket(BUCKET_NAME, function(err, bucket, apiResponse) {
        assert.equal(resp, apiResponse);
        done();
      });
    });

    describe('storage classes', function() {
      it('should expand metadata.coldline', function(done) {
        storage.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.storageClass, 'COLDLINE');
          done();
        };

        storage.createBucket(BUCKET_NAME, {coldline: true}, assert.ifError);
      });

      it('should expand metadata.dra', function(done) {
        storage.request = function(reqOpts) {
          const body = reqOpts.json;
          assert.strictEqual(body.storageClass, 'DURABLE_REDUCED_AVAILABILITY');
          done();
        };

        storage.createBucket(BUCKET_NAME, {dra: true}, assert.ifError);
      });

      it('should expand metadata.multiRegional', function(done) {
        storage.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.storageClass, 'MULTI_REGIONAL');
          done();
        };

        storage.createBucket(
          BUCKET_NAME,
          {
            multiRegional: true,
          },
          assert.ifError
        );
      });

      it('should expand metadata.nearline', function(done) {
        storage.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.storageClass, 'NEARLINE');
          done();
        };

        storage.createBucket(BUCKET_NAME, {nearline: true}, assert.ifError);
      });

      it('should expand metadata.regional', function(done) {
        storage.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.storageClass, 'REGIONAL');
          done();
        };

        storage.createBucket(BUCKET_NAME, {regional: true}, assert.ifError);
      });
    });

    describe('requesterPays', function() {
      it('should accept requesterPays setting', function(done) {
        const options = {
          requesterPays: true,
        };
        storage.request = function(reqOpts) {
          assert.deepStrictEqual(reqOpts.json.billing, options);
          assert.strictEqual(reqOpts.json.requesterPays, undefined);
          done();
        };
        storage.createBucket(BUCKET_NAME, options, assert.ifError);
      });
    });
  });

  describe('getBuckets', function() {
    it('should get buckets without a query', function(done) {
      storage.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/b');
        assert.deepEqual(reqOpts.qs, {project: storage.projectId});
        done();
      };
      storage.getBuckets(util.noop);
    });

    it('should get buckets with a query', function(done) {
      const token = 'next-page-token';
      storage.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {
          project: storage.projectId,
          maxResults: 5,
          pageToken: token,
        });
        done();
      };
      storage.getBuckets({maxResults: 5, pageToken: token}, util.noop);
    });

    it('should execute callback with error', function(done) {
      const error = new Error('Error.');
      const apiResponse = {};

      storage.request = function(reqOpts, callback) {
        callback(error, apiResponse);
      };

      storage.getBuckets({}, function(err, buckets, nextQuery, resp) {
        assert.strictEqual(err, error);
        assert.strictEqual(buckets, null);
        assert.strictEqual(nextQuery, null);
        assert.strictEqual(resp, apiResponse);
        done();
      });
    });

    it('should return nextQuery if more results exist', function() {
      const token = 'next-page-token';
      storage.request = function(reqOpts, callback) {
        callback(null, {nextPageToken: token, items: []});
      };
      storage.getBuckets({maxResults: 5}, function(err, results, nextQuery) {
        assert.equal(nextQuery.pageToken, token);
        assert.strictEqual(nextQuery.maxResults, 5);
      });
    });

    it('should return null nextQuery if there are no more results', function() {
      storage.request = function(reqOpts, callback) {
        callback(null, {items: []});
      };
      storage.getBuckets({maxResults: 5}, function(err, results, nextQuery) {
        assert.strictEqual(nextQuery, null);
      });
    });

    it('should return Bucket objects', function(done) {
      storage.request = function(reqOpts, callback) {
        callback(null, {items: [{id: 'fake-bucket-name'}]});
      };
      storage.getBuckets(function(err, buckets) {
        assert.ifError(err);
        assert(buckets[0] instanceof Bucket);
        done();
      });
    });

    it('should return apiResponse', function(done) {
      const resp = {items: [{id: 'fake-bucket-name'}]};
      storage.request = function(reqOpts, callback) {
        callback(null, resp);
      };
      storage.getBuckets(function(err, buckets, nextQuery, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });

    it('should populate returned Bucket object with metadata', function(done) {
      const bucketMetadata = {
        id: 'bucketname',
        contentType: 'x-zebra',
        metadata: {
          my: 'custom metadata',
        },
      };
      storage.request = function(reqOpts, callback) {
        callback(null, {items: [bucketMetadata]});
      };
      storage.getBuckets(function(err, buckets) {
        assert.ifError(err);
        assert.deepEqual(buckets[0].metadata, bucketMetadata);
        done();
      });
    });
  });
});
