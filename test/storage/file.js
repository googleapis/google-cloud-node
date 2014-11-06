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
var duplexify = require('duplexify');
var extend = require('extend');
var nodeutil = require('util');
var request = require('request');
var url = require('url');
var util = require('../../lib/common/util');

var readableStream;
var writableStream;
function FakeDuplexify() {
  if (!(this instanceof FakeDuplexify)) {
    return new FakeDuplexify();
  }
  duplexify.call(this);
  this.setReadable = function(setReadableStream) {
    readableStream = setReadableStream;
  };
  this.setWritable = function(setWritableStream) {
    writableStream = setWritableStream;
  };
}
nodeutil.inherits(FakeDuplexify, duplexify);

var makeWritableStream_Override;
var fakeUtil = extend({}, util, {
  makeWritableStream: function() {
    var args = [].slice.call(arguments);
    (makeWritableStream_Override || util.makeWritableStream).apply(null, args);
    makeWritableStream_Override = null;
  }
});

var request_Cached = request;
var request_Override;

function fakeRequest() {
  var args = [].slice.apply(arguments);
  var results = (request_Override || request_Cached).apply(null, args);
  request_Override = null;
  return results;
}

var File = require('sandboxed-module')
  .require('../../lib/storage/file.js', {
    requires: {
      duplexify: FakeDuplexify,
      request: fakeRequest,
      '../common/util': fakeUtil
    }
  });

describe('File', function() {
  var FILE_NAME = 'file-name.png';
  var options = {
    makeAuthorizedRequest_: function(req, callback) {
      (callback.onAuthorized || callback)(null, req);
    }
  };
  var bucket = new Bucket(options, 'bucket-name');
  var file;

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
        var newBucket = new Bucket({}, 'new-bucket');
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
        var newBucket = new Bucket({}, 'new-bucket');
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
        var newBucket = new Bucket({}, 'new-bucket');
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
        var newBucket = new Bucket({}, 'new-bucket');
        file.copy(newBucket, function(err, copiedFile) {
          assert.ifError(err);
          assert.equal(copiedFile.bucket.name, newBucket.name);
          assert.equal(copiedFile.name, file.name);
          done();
        });
      });
    });
  });

  describe('createReadStream', function() {
    var metadata = { mediaLink: 'filelink' };

    it('should confirm file exists before reading', function(done) {
      file.getMetadata = function() {
        done();
      };
      file.createReadStream();
    });

    it('should emit error if stat returns error', function(done) {
      var error = new Error('Error.');
      file.getMetadata = function(callback) {
        setImmediate(function() {
          callback(error);
        });
      };
      file.createReadStream()
        .once('error', function(err) {
          assert.equal(err, error);
          done();
        });
    });

    it('should create an authorized request', function(done) {
      request_Override = function(opts) {
        assert.equal(opts.uri, metadata.mediaLink);
        done();
      };
      file.getMetadata = function(callback) {
        callback(null, metadata);
      };
      file.createReadStream();
    });

    it('should emit an error from authorizing', function(done) {
      var error = new Error('Error.');
      file.bucket.storage.makeAuthorizedRequest_ = function(opts, callback) {
        (callback.onAuthorized || callback)(error);
      };
      file.getMetadata = function(callback) {
        setImmediate(function() {
          callback(null, metadata);
        });
      };
      file.createReadStream()
        .once('error', function(err) {
          assert.equal(err, error);
          done();
        });
    });

    it('should get readable stream from request', function(done) {
      var fakeRequest = { a: 'b', c: 'd' };
      file.getMetadata = function(callback) {
        callback(null, metadata);
      };
      request_Override = function(req) {
        assert.deepEqual(req, fakeRequest);
        done();
      };
      file.bucket.storage.makeAuthorizedRequest_ = function(opts, callback) {
        (callback.onAuthorized || callback)(null, fakeRequest);
      };
      file.createReadStream();
    });

    it('should set readable stream', function() {
      var dup = duplexify();
      file.getMetadata = function(callback) {
        callback(null, metadata);
      };
      request_Override = function() {
        return dup;
      };
      file.bucket.storage.makeAuthorizedRequest_ = function(opts, callback) {
        (callback.onAuthorized || callback)();
      };
      file.createReadStream();
      assert.deepEqual(readableStream, dup);
      readableStream = null;
    });
  });

  describe('createWriteStream', function() {
    it('should get a writable stream', function(done) {
      makeWritableStream_Override = function() {
        done();
      };
      file.createWriteStream().emit('writing');
    });

    it('should emit complete event when writing is complete', function(done) {
      var fakeResponse = { fake: 'data' };

      makeWritableStream_Override = function(stream, options, callback) {
        callback(fakeResponse);
      };

      file.createWriteStream()
        .on('complete', function(data) {
          assert.deepEqual(data, fakeResponse);
          assert.deepEqual(file.metadata, data);
          done();
        })
        .emit('writing');
    });

    it('should pass the required arguments', function(done) {
      var metadata = { a: 'b', c: 'd' };

      makeWritableStream_Override = function(stream, options) {
        assert.deepEqual(options.metadata, metadata);
        assert.deepEqual(options.request, {
          qs: {
            name: file.name
          },
          uri: 'https://www.googleapis.com/upload/storage/v1/b/' +
            file.bucket.name + '/o'
        });
        done();
      };

      file.createWriteStream(metadata).emit('writing');
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
    var credentials = require('../testdata/privateKeyFile.json');

    beforeEach(function() {
      var storage = bucket.storage;
      storage.makeAuthorizedRequest_.getCredentials = function(callback) {
        callback(null, credentials);
      };
    });

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
});
