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

var assert = require('assert'),
    storage = require('../lib').storage;

var noop = function() {};

function createBucket() {
  return new storage.Bucket({
    bucketName: 'bucket-name',
    email: 'xxx@email.com',
    pemFilePath: '/some/path'
  });
}

describe('Bucket', function() {

  it('should list without a query', function(done) {
    var bucket = createBucket();
    bucket.makeReq = function(method, path, q, body, callback) {
      assert.strictEqual(method, 'GET');
      assert.strictEqual(path, 'o');
      assert.deepEqual(q, {});
      assert.strictEqual(body, true);
      done();
    };
    bucket.list(noop);
  });

  it('should list with a query', function(done) {
    var bucket = createBucket();
    bucket.makeReq = function(method, path, q, body, callback) {
      assert.strictEqual(method, 'GET');
      assert.strictEqual(path, 'o');
      assert.deepEqual(q, { maxResults: 5, pageToken: 'token' });
      assert.strictEqual(body, true);
      done();
    };
    bucket.list({ maxResults: 5, pageToken: 'token' }, noop);
  });

  it('should return nextQuery if more results', function() {
    var bucket = createBucket();
    bucket.makeReq = function(method, path, q, body, callback) {
      callback(null, { nextPageToken: 'next-page-token', items: [] })
    };
    bucket.list({ maxResults: 5}, function(err, results, nextQuery) {
      assert.strictEqual(nextQuery.pageToken, 'next-page-token');
      assert.strictEqual(nextQuery.maxResults, 5);
    });
  });

  it('should return no nextQuery if no more results', function() {
    var bucket = createBucket();
    bucket.makeReq = function(method, path, q, body, callback) {
      callback(null, { items: [] })
    };
    bucket.list({ maxResults: 5}, function(err, results, nextQuery) {
      assert.strictEqual(nextQuery, null);
    });
  });

  it('should stat a file', function(done) {
    var bucket = createBucket();
    bucket.makeReq = function(method, path, q, body, callback) {
      assert.strictEqual(method, 'GET');
      assert.strictEqual(path, 'o/file-name');
      assert.strictEqual(q, null);
      assert.strictEqual(body, true);
      done();
    };
    bucket.stat('file-name');
  });

  it('should copy a file', function(done) {
    var bucket = createBucket();
    bucket.makeReq = function(method, path, q, body, callback) {
      assert.strictEqual(method, 'POST');
      assert.strictEqual(path, 'o/file-name/copyTo/b/new-bucket/o/new-name');
      assert.strictEqual(q, null);
      assert.deepEqual(body, { metadata: 'hello' });
      done();
    };
    bucket.copy('file-name', {
      name: 'new-name', bucket: 'new-bucket', metadata: 'hello' });
  });

  it('should use the same bucket if nothing else is provided', function(done) {
    var bucket = createBucket();
    bucket.makeReq = function(method, path, q, body, callback) {
      assert.strictEqual(method, 'POST');
      assert.strictEqual(path, 'o/file-name/copyTo/b/bucket-name/o/new-name');
      assert.strictEqual(q, null);
      assert.deepEqual(body, { metadata: 'hello' });
      done();
    };
    bucket.copy('file-name', {
      name: 'new-name', metadata: 'hello' });
  });

  it('should remove a file', function(done) {
    var bucket = createBucket();
    bucket.makeReq = function(method, path, q, body, callback) {
      assert.strictEqual(method, 'DELETE');
      assert.strictEqual(path, 'o/file-name');
      assert.strictEqual(q, null);
      assert.strictEqual(body, true);
      done();
    };
    bucket.remove('file-name');
  });

});