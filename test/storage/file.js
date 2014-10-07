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
var Bucket = require('../../lib/storage/bucket.js');
var events = require('events');
var extend = require('extend');
var File = require('../../lib/storage/file.js');
var nodeutil = require('util');
var url = require('url');
var util = require('../../lib/common/util');

var credentials = require('../testdata/privateKeyFile.json');

describe('File', function() {
  var FILE_NAME = 'file-name.png';
  var bucket = new Bucket({
    bucketName: 'bucket-name',
    connection_: {
      getCredentials: function(callback) {
        callback(null, credentials);
      }
    }
  });
  var file;

  function FakeStream() {
    events.EventEmitter.call(this);
  }
  nodeutil.inherits(FakeStream, events.EventEmitter);

  beforeEach(function() {
    file = new File(bucket, FILE_NAME);
    file.makeReq_ = util.noop;
  });

  describe('initialization', function() {
    it('should throw if no name is provided', function() {
      assert.throws(function() {
        new File(bucket);
      }, /A file name must be specified/);
    });

    it('should assign file name', function() {
      assert.equal(file.name, FILE_NAME);
    });

    it('should assign metadata if provided', function() {
      var metadata = { a: 'b', c: 'd' };
      var newFile = new File(bucket, FILE_NAME, metadata);
      assert.deepEqual(newFile.metadata, metadata);
    });

    it('should bind events', function(done) {
      var bindEvents_ = File.prototype.bindEvents_;
      File.prototype.bindEvents_ = function() {
        File.prototype.bindEvents_ = bindEvents_;
        done();
      };
      new File(bucket, FILE_NAME);
    });

    it('should cache events', function() {
      assert.equal(typeof file.events_, 'object');
      assert.equal(typeof file.events_._read, 'function');
      assert.equal(typeof file.events_._write, 'function');
    });
  });

  describe('copy', function() {
    it('should throw if no destination is provided', function() {
      assert.throws(function() {
        file.copy();
      }, /should have a name/);
    });

    describe('destination types', function() {
      function assertPathEquals(file, expectedPath, callback) {
        file.makeReq_ = function(method, path) {
          assert.equal(path, expectedPath);
          callback();
        };
      }

      it('should allow a string', function(done) {
        var newFileName = 'new-file-name.png';
        var expectedPath =
          util.format('/o/{srcName}/copyTo/b/{destBucket}/o/{destName}', {
            srcName: file.name,
            destBucket: file.bucket.name,
            destName: newFileName
          });
        assertPathEquals(file, expectedPath, done);
        file.copy(newFileName);
      });

      it('should allow a Bucket', function(done) {
        var newBucket = new Bucket({ name: 'new-bucket' });
        var expectedPath =
          util.format('/o/{srcName}/copyTo/b/{destBucket}/o/{destName}', {
            srcName: file.name,
            destBucket: newBucket.name,
            destName: file.name
          });
        assertPathEquals(file, expectedPath, done);
        file.copy(newBucket);
      });

      it('should allow a File', function(done) {
        var newBucket = new Bucket({ name: 'new-bucket' });
        var newFile = new File(newBucket, 'new-file');
        var expectedPath =
          util.format('/o/{srcName}/copyTo/b/{destBucket}/o/{destName}', {
            srcName: file.name,
            destBucket: newBucket.name,
            destName: newFile.name
          });
        assertPathEquals(file, expectedPath, done);
        file.copy(newFile);
      });
    });

    describe('returned File object', function() {
      beforeEach(function() {
        file.makeReq_ = function(method, path, qs, body, callback) {
          callback();
        };
      });

      it('should re-use file object if one is provided', function(done) {
        var newBucket = new Bucket({ name: 'new-bucket' });
        var newFile = new File(newBucket, 'new-file');
        file.copy(newFile, function(err, copiedFile) {
          assert.ifError(err);
          assert.deepEqual(copiedFile, newFile);
          done();
        });
      });

      it('should create new file on the same bucket', function(done) {
        var newFilename = 'new-filename';
        file.copy(newFilename, function(err, copiedFile) {
          assert.ifError(err);
          assert.equal(copiedFile.bucket.name, bucket.name);
          assert.equal(copiedFile.name, newFilename);
          done();
        });
      });

      it('should create new file on the destination bucket', function(done) {
        var newBucket = new Bucket({ name: 'new-bucket' });
        file.copy(newBucket, function(err, copiedFile) {
          assert.ifError(err);
          assert.equal(copiedFile.bucket.name, newBucket.name);
          assert.equal(copiedFile.name, file.name);
          done();
        });
      });
    });
  });

  describe('delete', function() {
    it('should delete the file', function(done) {
      file.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'DELETE');
        assert.equal(path, '/o/' + FILE_NAME);
        assert.strictEqual(query, null);
        assert.strictEqual(body, true);
        done();
      };
      file.delete();
    });

    it('should execute callback', function(done) {
      file.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      file.delete(done);
    });

    it('should remove all listeners', function(done) {
      file.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      file.removeAllListeners = function() {
        done();
      };
      file.delete();
    });
  });

  describe('getMetadata', function() {
    var metadata = { a: 'b', c: 'd' };

    it('should get the metadata of a file', function(done) {
      file.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '/o/' + FILE_NAME);
        assert.strictEqual(query, null);
        assert.strictEqual(body, true);
        done();
      };
      file.getMetadata();
    });

    it('should execute callback', function(done) {
      file.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      file.getMetadata(done);
    });

    it('should update metadata property on object', function() {
      file.makeReq_ = function(method, path, query, body, callback) {
        callback(null, metadata);
      };
      assert.deepEqual(file.metadata, {});
      file.getMetadata(function(err, newMetadata) {
        assert.deepEqual(newMetadata, metadata);
      });
      assert.deepEqual(file.metadata, metadata);
    });

    it('should pass metadata to callback', function(done) {
      file.makeReq_ = function(method, path, query, body, callback) {
        callback(null, metadata);
      };
      file.getMetadata(function(err, fileMetadata) {
        assert.deepEqual(fileMetadata, metadata);
        done();
      });
    });
  });

  describe('getSignedUrl', function() {
    it('should create a signed url', function(done) {
      file.getSignedUrl({
        action: 'read',
        expires: Math.round(Date.now() / 1000) + 5
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
        file.getSignedUrl({
          action: 'read',
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
          file.getSignedUrl({
            action: 'read',
            expires: expirationTimestamp
          }, function() {});
        }, /cannot be in the past/);
      });
    });
  });

  describe('setMetadata', function() {
    var metadata = { fake: 'metadata' };

    it('should set metadata', function(done) {
      file.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'PATCH');
        assert.equal(path, '/o/' + file.name);
        assert.deepEqual(body, metadata);
        done();
      };
      file.setMetadata(metadata);
    });

    it('should execute callback', function(done) {
      file.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      file.setMetadata(metadata, done);
    });

    it('should update internal metadata property', function() {
      file.makeReq_ = function(method, path, query, body, callback) {
        callback(null, metadata);
      };
      file.setMetadata(metadata, function() {
        assert.deepEqual(file.metadata, metadata);
      });
    });
  });

  describe('bindEvents_', function() {
    it('should overwrite, then re-assign cached _write', function() {
      var setWritableStream = false;
      file.setWritableStream_ = function() {
        setWritableStream = true;
      };
      var _write = file._write.toString();
      file._write();
      assert(setWritableStream);
      assert.notEqual(_write, file._write.toString());
    });

    it('should overwrite, then re-assign cached _read', function() {
      var setReadableStream = false;
      file.setReadableStream_ = function() {
        setReadableStream = true;
      };
      var _read = file._read.toString();
      file._read();
      assert(setReadableStream);
      assert.notEqual(_read, file._read.toString());
    });

    it('set writable stream on first write', function(done) {
      file.setWritableStream_ = function() {
        done();
      };
      file.write(' ');
    });

    it('set readable stream on first read', function(done) {
      file.setReadableStream_ = function() {
        done();
      };
      file.read();
    });

    describe('destroy, remove listeners, & re-bind events', function() {
      function overwriteExpectedMethodCalls(callback) {
        var called = 0;
        function continueIfDone() {
          if (++called === 3) {
            callback();
          }
        }
        file.bindEvents_ = continueIfDone;
        file.destroy = continueIfDone;
        file.removeAllListeners = continueIfDone;
      }

      it('should clean up on end', function(done) {
        overwriteExpectedMethodCalls(done);
        file.emit('end');
      });

      it('should clean up on error', function(done) {
        overwriteExpectedMethodCalls(done);
        file.emit('error');
      });

      it('should clean up on complete', function(done) {
        overwriteExpectedMethodCalls(done);
        file.emit('complete');
      });
    });
  });

  describe('getWritableStream_', function() {
    var query;
    var written;
    var fakeStream = {
      write: function(chunk) {
        written.push(chunk);
      }
    };

    beforeEach(function() {
      query = {};
      written = [];
      file.bucket.connection_.requester = function() {
        return fakeStream;
      };
      file.bucket.connection_.createAuthorizedReq = function(q, callback) {
        query = q;
        callback(null, fakeStream);
      };
    });

    function find(term) {
      return written.some(function(chunk) {
        return chunk.indexOf(term) > -1;
      });
    }

    it('should set correct method', function() {
      file.getWritableStream_(util.noop);
      assert.equal(query.method, 'POST');
    });

    it('should send to correct uri', function() {
      file.getWritableStream_(util.noop);
      var expected =
        'https://www.googleapis.com/upload/storage/v1/b/' + file.bucket.name +
        '/o';
      assert.equal(query.uri, expected);
    });

    it('should set name on query string', function() {
      file.getWritableStream_(util.noop);
      assert.equal(query.qs.name, file.name);
    });

    it('should set multipart upload type', function() {
      file.getWritableStream_(util.noop);
      assert.equal(query.qs.uploadType, 'multipart');
    });

    it('should set multipart content type in header', function() {
      file.getWritableStream_(util.noop);
      assert(query.headers['Content-Type'].indexOf('multipart/related;') === 0);
    });

    it('should set default contentType', function() {
      file.getWritableStream_(util.noop);
      assert(find('Content-Type: text/plain'));
    });

    it('should allow overwriting contentType', function() {
      file.metadata = {
        contentType: 'something/custom'
      };
      file.getWritableStream_(util.noop);
      assert(find('Content-Type: something/custom'));
    });

    it('should send metadata from the instance', function() {
      file.metadata = {
        hi: 'there',
        good: 'sir',
        metadata: {
          properties: 'have values, often times'
        }
      };
      file.getWritableStream_(util.noop);
      var expectedMetadata = extend(
          {}, { contentType: 'text/plain' }, file.metadata);
      assert(find(JSON.stringify(expectedMetadata)));
    });

    it('should execute callback with remote stream', function(done) {
      file.getWritableStream_(function(err, stream) {
        assert.equal(stream, fakeStream);
        done();
      });
    });
  });

  describe('setReadableStream_', function() {
    var metadata = { mediaLink: 'filelink' };

    it('should confirm file exists before reading', function(done) {
      file.getMetadata = function() {
        done();
      };
      file.setReadableStream_();
    });

    it('should emit error if stat returns error', function(done) {
      var error = new Error('Error.');
      file.getMetadata = function(callback) {
        callback(error);
      };
      file.once('error', function(err) {
        assert.equal(err, error);
        done();
      });
      file.setReadableStream_();
    });

    it('should create an authorized request', function(done) {
      file.bucket.connection_.createAuthorizedReq = function(opts) {
        assert.equal(opts.uri, metadata.mediaLink);
        done();
      };
      file.getMetadata = function(callback) {
        callback(null, metadata);
      };
      file.setReadableStream_();
    });

    it('should emit an error from authorizing', function(done) {
      var error = new Error('Error.');
      file.bucket.connection_.createAuthorizedReq = function(opts, callback) {
        callback(error);
      };
      file.getMetadata = function(callback) {
        callback(null, metadata);
      };
      file.once('error', function(err) {
        assert.equal(err, error);
        done();
      });
      file.setReadableStream_();
    });

    it('should get readable stream from request', function(done) {
      var fakeRequest = { fake: 'request' };
      file.getMetadata = function(callback) {
        callback(null, metadata);
      };
      file.bucket.connection_.requester = function(req) {
        assert.deepEqual(req, fakeRequest);
        done();
      };
      file.bucket.connection_.createAuthorizedReq = function(opts, callback) {
        callback(null, fakeRequest);
      };
      file.setReadable = function() {};
      file.setReadableStream_();
    });

    it('should set readable stream', function(done) {
      file.getMetadata = function(callback) {
        callback(null, metadata);
      };
      file.bucket.connection_.requester = function() {
        return new FakeStream();
      };
      file.bucket.connection_.createAuthorizedReq = function(opts, callback) {
        callback();
      };
      file.setReadable = function(stream) {
        assert(stream instanceof FakeStream);
        done();
      };
      file.setReadableStream_();
    });
  });

  describe('setWritableStream_', function() {
    it('should get a writable stream', function(done) {
      file.getWritableStream_ = function() {
        done();
      };
      file.setWritableStream_();
    });

    it('should emit an error if one is returned', function(done) {
      var error = new Error('Error.');
      file.getWritableStream_ = function(callback) {
        callback(error);
      };
      file.once('error', function(err) {
        assert.equal(err, error);
        done();
      });
      file.setWritableStream_();
    });

    it('should set writable stream from the response', function(done) {
      file.getWritableStream_ = function(callback) {
        callback(null, new FakeStream());
      };
      file.setWritable = function(stream) {
        assert(stream instanceof FakeStream);
        done();
      };
      file.setWritableStream_();
    });

    it('should emit complete event when writable is complete', function(done) {
      var fakeStream = new FakeStream();
      var fakeResponse = { body: { fake: 'data' } };
      file.getWritableStream_ = function(callback) {
        callback(null, fakeStream);
      };
      file.setWritableStream_();
      file.on('complete', function(data) {
        assert.deepEqual(data, fakeResponse.body);
        done();
      });
      fakeStream.emit('complete', fakeResponse);
    });
  });
});
