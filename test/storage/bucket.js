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

/*global describe, it, beforeEach, before, after */

'use strict';

var assert = require('assert');
var mockery = require('mockery');
var request = require('request');
var stream = require('stream');
var util = require('../../lib/common/util.js');

function FakeFile(bucket, name, metadata) {
  this.bucket = bucket;
  this.name = name;
  this.metadata = metadata;
  this.createWriteStream = function(options) {
    this.metadata = options.metadata;
    var ws = new stream.Writable();
    ws.write = function() {
      ws.emit('complete');
      ws.end();
    };
    return ws;
  };
}

var request_Cached = request;
var request_Override;

function fakeRequest() {
  var args = [].slice.apply(arguments);
  return (request_Override || request_Cached).apply(null, args);
}

describe('Bucket', function() {
  var Bucket;
  var BUCKET_NAME = 'test-bucket';
  var bucket;
  var options = {
    makeAuthorizedRequest_: function(req, callback) {
      callback(null, req);
    }
  };

  before(function() {
    mockery.registerMock('./file.js', FakeFile);
    mockery.registerMock('request', fakeRequest);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });
    Bucket = require('../../lib/storage/bucket.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    request_Override = null;
    bucket = new Bucket(options, BUCKET_NAME);
  });

  describe('initialization', function() {
    it('should re-use provided connection', function() {
      assert.deepEqual(bucket.authorizeReq_, options.authorizeReq_);
    });

    it('should default metadata to an empty object', function() {
      assert.deepEqual(bucket.metadata, {});
    });

    it('should throw if no name was provided', function() {
      assert.throws(function() {
        new Bucket();
      }, /A bucket name is needed/);
    });
  });

  describe('delete', function() {
    it('should delete the bucket', function(done) {
      bucket.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'DELETE');
        assert.equal(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, true);
        done();
      };
      bucket.delete();
    });

    it('should execute callback', function(done) {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      bucket.delete(done);
    });
  });

  describe('file', function() {
    var FILE_NAME = 'remote-file-name.jpg';
    var file;
    var metadata = { a: 'b' };

    beforeEach(function() {
      file = bucket.file(FILE_NAME, metadata);
    });

    it('should return a File object', function() {
      assert(file instanceof FakeFile);
    });

    it('should pass filename to File object', function() {
      assert.equal(file.name, FILE_NAME);
    });
  });

  describe('getFiles', function() {
    it('should get files without a query', function(done) {
      bucket.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '/o');
        assert.deepEqual(query, {});
        assert.strictEqual(body, true);
        done();
      };
      bucket.getFiles(util.noop);
    });

    it('should get files with a query', function(done) {
      var token = 'next-page-token';
      bucket.makeReq_ = function(method, path, query) {
        assert.deepEqual(query, { maxResults: 5, pageToken: token });
        done();
      };
      bucket.getFiles({ maxResults: 5, pageToken: token }, util.noop);
    });

    it('should get files based on folder', function(done) {
      var folder = 'hello/world';
      bucket.makeReq_ = function(method, path, query, body, callback) {
        assert.deepEqual(query, { delimiter: '/', prefix: 'hello/world/' });
        callback(null, { items: [] });
      };
      bucket.getFiles({ folder: folder }, done);
    });

    it('should return prefixes value', function(done) {
      var prefixes = [ 'hello', 'world' ];
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { items: [], prefixes: prefixes });
      };
      bucket.getFiles({ delimiter: '/' }, function(err, files) {
        assert.deepEqual(files.prefixes, prefixes);
        done();
      });
    });

    it('should return nextQuery if more results exist', function() {
      var token = 'next-page-token';
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { nextPageToken: token, items: [] });
      };
      bucket.getFiles({ maxResults: 5 }, function(err, results, nextQuery) {
        assert.equal(nextQuery.pageToken, token);
        assert.strictEqual(nextQuery.maxResults, 5);
      });
    });

    it('should return null nextQuery if there are no more results', function() {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { items: [] });
      };
      bucket.getFiles({ maxResults: 5 }, function(err, results, nextQuery) {
        assert.strictEqual(nextQuery, null);
      });
    });

    it('should return File objects', function(done) {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { items: [{ name: 'fake-file-name' }] });
      };
      bucket.getFiles(function(err, files) {
        assert.ifError(err);
        assert(files[0] instanceof FakeFile);
        done();
      });
    });

    it('should populate returned File object with metadata', function(done) {
      var fileMetadata = {
        name: 'filename',
        contentType: 'x-zebra',
        metadata: {
          my: 'custom metadata'
        }
      };
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, { items: [fileMetadata] });
      };
      bucket.getFiles(function(err, files) {
        assert.ifError(err);
        assert.deepEqual(files[0].metadata, fileMetadata);
        done();
      });
    });
  });

  describe('getMetadata', function() {
    var metadata = { a: 'b', c: 'd' };

    it('should get the metadata of a bucket', function(done) {
      bucket.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, true);
        done();
      };
      bucket.getMetadata();
    });

    it('should execute callback', function(done) {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      bucket.getMetadata(done);
    });

    it('should update metadata property on object', function() {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, metadata);
      };
      assert.deepEqual(bucket.metadata, {});
      bucket.getMetadata(function(err, newMetadata) {
        assert.deepEqual(newMetadata, metadata);
      });
      assert.deepEqual(bucket.metadata, metadata);
    });

    it('should pass metadata to callback', function(done) {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, metadata);
      };
      bucket.getMetadata(function(err, fileMetadata) {
        assert.deepEqual(fileMetadata, metadata);
        done();
      });
    });
  });

  describe('setMetadata', function() {
    var metadata = { fake: 'metadata' };

    it('should set metadata', function(done) {
      bucket.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'PATCH');
        assert.equal(path, '');
        assert.deepEqual(body, metadata);
        done();
      };
      bucket.setMetadata(metadata);
    });

    it('should execute callback', function(done) {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      bucket.setMetadata(metadata, done);
    });

    it('should update internal metadata property', function() {
      bucket.makeReq_ = function(method, path, query, body, callback) {
        callback(null, metadata);
      };
      bucket.setMetadata(metadata, function() {
        assert.deepEqual(bucket.metadata, metadata);
      });
    });
  });

  describe('upload', function() {
    var basename = 'proto_query.json';
    var filepath = 'test/testdata/' + basename;
    var textFilepath = 'test/testdata/textfile.txt';
    var metadata = { a: 'b', c: 'd' };

    beforeEach(function() {
      bucket.file = function(name, metadata) {
        return new FakeFile(bucket, name, metadata);
      };
    });

    it('should accept a path & cb', function(done) {
      bucket.upload(filepath, function(err, file) {
        assert.ifError(err);
        assert.equal(file.bucket.name, bucket.name);
        assert.equal(file.name, basename);
        done();
      });
    });

    it('should accept a path, metadata, & cb', function(done) {
      var options = { metadata: metadata };
      bucket.upload(filepath, options, function(err, file) {
        assert.ifError(err);
        assert.equal(file.bucket.name, bucket.name);
        assert.deepEqual(file.metadata, metadata);
        done();
      });
    });

    it('should accept a path, a string dest, & cb', function(done) {
      var newFileName = 'new-file-name.png';
      var options = { destination: newFileName };
      bucket.upload(filepath, options, function(err, file) {
        assert.ifError(err);
        assert.equal(file.bucket.name, bucket.name);
        assert.equal(file.name, newFileName);
        done();
      });
    });

    it('should accept a path, a string dest, metadata, & cb', function(done) {
      var newFileName = 'new-file-name.png';
      var options = { destination: newFileName, metadata: metadata };
      bucket.upload(filepath, options, function(err, file) {
        assert.ifError(err);
        assert.equal(file.bucket.name, bucket.name);
        assert.equal(file.name, newFileName);
        assert.deepEqual(file.metadata, metadata);
        done();
      });
    });

    it('should accept a path, a File dest, & cb', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      fakeFile.isSameFile = function() {
        return true;
      };
      var options = { destination: fakeFile };
      bucket.upload(filepath, options, function(err, file) {
        assert.ifError(err);
        assert(file.isSameFile());
        done();
      });
    });

    it('should accept a path, a File dest, metadata, & cb', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      fakeFile.isSameFile = function() {
        return true;
      };
      var options = { destination: fakeFile, metadata: metadata };
      bucket.upload(filepath, options, function(err, file) {
        assert.ifError(err);
        assert(file.isSameFile());
        assert.deepEqual(file.metadata, metadata);
        done();
      });
    });

    it('should guess at the content type', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      var options = { destination: fakeFile };
      fakeFile.createWriteStream = function(options) {
        var ws = new stream.Writable();
        ws.write = util.noop;
        setImmediate(function() {
          var expectedContentType = 'application/json; charset=utf-8';
          assert.equal(options.metadata.contentType, expectedContentType);
          done();
        });
        return ws;
      };
      bucket.upload(filepath, options, assert.ifError);
    });

    it('should guess at the charset', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      var options = { destination: fakeFile };
      fakeFile.createWriteStream = function(options) {
        var ws = new stream.Writable();
        ws.write = util.noop;
        setImmediate(function() {
          var expectedContentType = 'text/plain; charset=utf-8';
          assert.equal(options.metadata.contentType, expectedContentType);
          done();
        });
        return ws;
      };
      bucket.upload(textFilepath, options, assert.ifError);
    });

    it('should allow overriding content type', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      var metadata = { contentType: 'made-up-content-type' };
      var options = { destination: fakeFile, metadata: metadata };
      fakeFile.createWriteStream = function(options) {
        var ws = new stream.Writable();
        ws.write = util.noop;
        setImmediate(function() {
          assert.equal(options.metadata.contentType,  metadata.contentType);
          done();
        });
        return ws;
      };
      bucket.upload(filepath, options, assert.ifError);
    });

    it('should allow specifying options.resumable', function(done) {
      var fakeFile = new FakeFile(bucket, 'file-name');
      var options = { destination: fakeFile, resumable: false };
      fakeFile.createWriteStream = function(options) {
        var ws = new stream.Writable();
        ws.write = util.noop;
        setImmediate(function() {
          assert.strictEqual(options.resumable, false);
          done();
        });
        return ws;
      };
      bucket.upload(filepath, options, assert.ifError);
    });

    it('should execute callback on error', function(done) {
      var error = new Error('Error.');
      var fakeFile = new FakeFile(bucket, 'file-name');
      var options = { destination: fakeFile };
      fakeFile.createWriteStream = function() {
        var ws = new stream.Writable();
        setImmediate(function() {
          ws.emit('error', error);
          ws.end();
        });
        return ws;
      };
      bucket.upload(filepath, options, function(err) {
        assert.equal(err, error);
        done();
      });
    });
  });

  describe('makeReq_', function() {
    var method = 'POST';
    var path = '/path';
    var query = { a: 'b', c: { d: 'e' } };
    var body = { hi: 'there' };

    it('should make correct request', function(done) {
      bucket.storage.makeAuthorizedRequest_ = function(request) {
        var basePath = 'https://www.googleapis.com/storage/v1/b';
        assert.equal(request.method, method);
        assert.equal(request.uri, basePath + '/' + bucket.name + path);
        assert.deepEqual(request.qs, query);
        assert.deepEqual(request.json, body);
        done();
      };
      bucket.makeReq_(method, path, query, body, util.noop);
    });

    it('should execute callback', function(done) {
      bucket.storage.makeAuthorizedRequest_ = function(request, callback) {
        callback();
      };
      bucket.makeReq_(method, path, query, body, done);
    });
  });
});
