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

/*global describe, it, beforeEach */

'use strict';

var assert = require('assert');
var gcloud = require('../../lib');
var storage = require('../../lib/storage');
var url = require('url');

var credentials = require('../testdata/privateKeyFile.json');
var noop = function() {};

describe('Bucket', function() {
  var bucket;

  beforeEach(function() {
    bucket = storage.bucket({
      bucketName: 'bucket-name',
      credentials: credentials
    });
  });

  it('should not require connection details', function() {
    var project = gcloud({ credentials: credentials });
    var aBucket = project.storage.bucket({ bucketName: 'test' });
    assert.deepEqual(aBucket.connection.credentials, credentials);
  });

  it('should allow overriding connection details', function() {
    var uniqueCredentials = require('../testdata/privateKeyFile-2.json');
    var project = gcloud({ credentials: credentials });
    var aBucket = project.storage.bucket({
      bucketName: 'another-bucket',
      credentials: uniqueCredentials
    });
    assert.deepEqual(aBucket.connection.credentials, uniqueCredentials);
  });

  it('should throw if a bucket name is not passed', function() {
    assert.throws(storage.bucket, Error);
  });

  it('should list without a query', function(done) {
    bucket.makeReq_ = function(method, path, q, body) {
      assert.strictEqual(method, 'GET');
      assert.strictEqual(path, 'o');
      assert.deepEqual(q, {});
      assert.strictEqual(body, true);
      done();
    };
    bucket.list(noop);
  });

  it('should list with a query', function(done) {
    bucket.makeReq_ = function(method, path, q, body) {
      assert.strictEqual(method, 'GET');
      assert.strictEqual(path, 'o');
      assert.deepEqual(q, { maxResults: 5, pageToken: 'token' });
      assert.strictEqual(body, true);
      done();
    };
    bucket.list({ maxResults: 5, pageToken: 'token' }, noop);
  });

  it('should return nextQuery if more results', function() {
    bucket.makeReq_ = function(method, path, q, body, callback) {
      callback(null, { nextPageToken: 'next-page-token', items: [] });
    };
    bucket.list({ maxResults: 5}, function(err, results, nextQuery) {
      assert.strictEqual(nextQuery.pageToken, 'next-page-token');
      assert.strictEqual(nextQuery.maxResults, 5);
    });
  });

  it('should return no nextQuery if no more results', function() {
    bucket.makeReq_ = function(method, path, q, body, callback) {
      callback(null, { items: [] });
    };
    bucket.list({ maxResults: 5}, function(err, results, nextQuery) {
      assert.strictEqual(nextQuery, null);
    });
  });

  it('should stat a file', function(done) {
    bucket.makeReq_ = function(method, path, q, body) {
      assert.strictEqual(method, 'GET');
      assert.strictEqual(path, 'o/file-name');
      assert.strictEqual(q, null);
      assert.strictEqual(body, true);
      done();
    };
    bucket.stat('file-name');
  });

  it('should copy a file', function(done) {
    bucket.makeReq_ = function(method, path, q, body) {
      assert.strictEqual(method, 'POST');
      assert.strictEqual(path, 'o/file-name/copyTo/b/new-bucket/o/new-name');
      assert.strictEqual(q, null);
      assert.deepEqual(body, { metadata: 'hello' });
      done();
    };
    var copyObj = { name: 'new-name', bucket: 'new-bucket', metadata: 'hello' };
    bucket.copy('file-name', copyObj);
  });

  it('should use the same bucket if nothing else is provided', function(done) {
    bucket.makeReq_ = function(method, path, q, body) {
      assert.strictEqual(method, 'POST');
      assert.strictEqual(path, 'o/file-name/copyTo/b/bucket-name/o/new-name');
      assert.strictEqual(q, null);
      assert.deepEqual(body, { metadata: 'hello' });
      done();
    };
    var copyObj = { name: 'new-name', metadata: 'hello' };
    bucket.copy('file-name', copyObj);
  });

  it('should remove a file', function(done) {
    bucket.makeReq_ = function(method, path, q, body) {
      assert.strictEqual(method, 'DELETE');
      assert.strictEqual(path, 'o/file-name');
      assert.strictEqual(q, null);
      assert.strictEqual(body, true);
      done();
    };
    bucket.remove('file-name');
  });

  describe('getSignedUrl', function() {
    it('should create a signed url', function(done) {
      bucket.getSignedUrl({
        action: 'read',
        expires: Math.round(Date.now() / 1000) + 5,
        resource: 'filename'
      }, function(err, signedUrl) {
        assert.ifError(err);
        assert.equal(typeof signedUrl, 'string');
        done();
      });
    });

    describe('expires', function() {
      var nowInSeconds = Math.floor(Date.now() / 1000);

      it('should use the provided expiration date', function(done) {
        var expirationTimestamp = nowInSeconds + 60;
        bucket.getSignedUrl({
          action: 'read',
          resource: 'filename',
          expires: expirationTimestamp
        }, function(err, signedUrl) {
          assert.ifError(err);
          var expires = url.parse(signedUrl, true).query.Expires;
          assert.equal(expires, expirationTimestamp);
          done();
        });
      });

      it('should throw if a date from the past is given', function() {
        var expirationTimestamp = nowInSeconds - 1;
        assert.throws(function() {
          bucket.getSignedUrl({
            action: 'read',
            resource: 'filename',
            expires: expirationTimestamp
          }, function() {});
        }, /cannot be in the past/);
      });
    });
  });
});
