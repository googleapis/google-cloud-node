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
var nodeutil = require('util');
var stream = require('stream');
var util = require('../../lib/common/util.js');

function FakeFile(bucket, name, metadata) {
  stream.Writable.call(this);
  this.bucket = bucket;
  this.name = name;
  this.metadata = metadata;
  this._write = function() {
    this.emit('complete');
  }.bind(this);
}
nodeutil.inherits(FakeFile, stream.Writable);

var Bucket = require('sandboxed-module')
  .require('../../lib/storage/bucket.js', {
    requires: {
      './file.js': FakeFile
    }
  });

describe('Bucket', function() {
  var BUCKET_NAME = 'test-bucket';
  var bucket;
  var options = {
    connection_: {},
    name: BUCKET_NAME
  };

  beforeEach(function() {
    bucket = new Bucket(options);
  });

  describe('initialization', function() {
    it('should re-use provided connection', function() {
      assert.deepEqual(bucket.connection_, options.connection_);
    });

    it('should default metadata to an empty object', function() {
      assert.deepEqual(bucket.metadata, {});
    });

    it('should use name or bucketName', function() {
      var newBucket = new Bucket({ name: BUCKET_NAME });
      assert.equal(newBucket.name, BUCKET_NAME);
      var newerBucket = new Bucket({ bucketName: BUCKET_NAME });
      assert.equal(newerBucket.name, BUCKET_NAME);
    });

    it('should throw if no name was provided', function() {
      assert.throws(function() {
        new Bucket({});
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

    it('should pass provided metadata to File object', function() {
      assert.deepEqual(file.metadata, metadata);
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
        assert.equal(path, '/b/' + bucket.name);
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
    var metadata = { a: 'b', c: 'd' };

    beforeEach(function() {
      bucket.file = function(name, metadata) {
        return new FakeFile(bucket, name, metadata);
      };
    });

    describe('variable arity', function() {
      it('should accept a path & cb', function(done) {
        bucket.upload(filepath, function(err, file) {
          assert.ifError(err);
          assert.equal(file.bucket.name, bucket.name);
          assert.equal(file.name, basename);
          done();
        });
      });

      it('should accept a path, metadata, & cb', function(done) {
        bucket.upload(filepath, metadata, function(err, file) {
          assert.ifError(err);
          assert.equal(file.bucket.name, bucket.name);
          assert.deepEqual(file.metadata, metadata);
          done();
        });
      });

      it('should accept a path, a string dest, & cb', function(done) {
        var newFileName = 'new-file-name.png';
        bucket.upload(filepath, newFileName, function(err, file) {
          assert.ifError(err);
          assert.equal(file.bucket.name, bucket.name);
          assert.equal(file.name, newFileName);
          done();
        });
      });

      it('should accept a path, a string dest, metadata, & cb', function(done) {
        var newFileName = 'new-file-name.png';
        bucket.upload(filepath, newFileName, metadata, function(err, file) {
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
          done();
        };
        bucket.upload(filepath, fakeFile, function(err, file) {
          assert.ifError(err);
          file.isSameFile();
        });
      });

      it('should accept a path, a File dest, metadata, & cb', function(done) {
        var fakeFile = new FakeFile(bucket, 'file-name');
        fakeFile.isSameFile = function() {
          done();
        };
        bucket.upload(filepath, fakeFile, metadata, function(err, file) {
          assert.ifError(err);
          file.isSameFile();
        });
      });
    });

    it('should execute callback on error', function(done) {
      var error = new Error('Error.');
      var fakeFile = new FakeFile(bucket, 'file-name');
      fakeFile._write = function() {
        this.emit('error', error);
      };
      bucket.upload(filepath, fakeFile, function(err) {
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
      bucket.connection_.req = function(request) {
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
      bucket.connection_.req = function(request, callback) {
        callback();
      };
      bucket.makeReq_(method, path, query, body, done);
    });
  });
});
