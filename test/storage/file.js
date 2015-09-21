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
var Bucket = require('../../lib/storage/bucket.js');
var duplexify = require('duplexify');
var extend = require('extend');
var format = require('string-format-obj');
var fs = require('fs');
var mockery = require('mockery');
var nodeutil = require('util');
var request = require('request');
var stream = require('stream');
var through = require('through2');
var tmp = require('tmp');
var url = require('url');
var util = require('../../lib/common/util');

var makeWritableStreamOverride;
var handleRespOverride;
var fakeUtil = extend({}, util, {
  handleResp: function() {
    (handleRespOverride || util.handleResp).apply(null, arguments);
  },

  makeWritableStream: function() {
    var args = arguments;
    (makeWritableStreamOverride || util.makeWritableStream).apply(null, args);
  }
});

var REQUEST_DEFAULT_CONF;
var requestCached = request;
var requestOverride;
function fakeRequest() {
  return (requestOverride || requestCached).apply(null, arguments);
}
fakeRequest.defaults = function(defaultConfiguration) {
  // Ignore the default values, so we don't have to test for them in every API
  // call.
  REQUEST_DEFAULT_CONF = defaultConfiguration;
  return fakeRequest;
};

var resumableUploadOverride;
var resumableUpload = require('gcs-resumable-upload');
function fakeResumableUpload() {
  return (resumableUploadOverride || resumableUpload).apply(null, arguments);
}
fakeResumableUpload.createURI = function() {
  var createURI = resumableUpload.createURI;

  if (resumableUploadOverride && resumableUploadOverride.createURI) {
    createURI = resumableUploadOverride.createURI;
  }

  return createURI.apply(null, arguments);
};

describe('File', function() {
  var File;
  var FILE_NAME = 'file-name.png';
  var file;
  var directoryFile;
  var bucket;

  before(function() {
    // If we don't stub see4_crc32 and use mockery, we get "Module did not self-
    // register".
    var crc32c = require('hash-stream-validation/node_modules/sse4_crc32');
    mockery.registerMock('sse4_crc32', crc32c);

    mockery.registerMock('request', fakeRequest);
    mockery.registerMock('gcs-resumable-upload', fakeResumableUpload);
    mockery.registerMock('../common/util.js', fakeUtil);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });
    File = require('../../lib/storage/file.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    var options = {
      makeAuthenticatedRequest_: function(req, callback) {
        if (callback) {
          (callback.onAuthenticated || callback)(null, req);
        } else {
          return (requestOverride || requestCached)(req);
        }
      }
    };
    bucket = new Bucket(options, 'bucket-name');

    file = new File(bucket, FILE_NAME);
    file.makeReq_ = util.noop;

    directoryFile = new File(bucket, 'directory/file.jpg');
    directoryFile.makeReq_ = util.noop;

    handleRespOverride = null;
    makeWritableStreamOverride = null;
    requestOverride = null;
    resumableUploadOverride = null;
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

    it('should accept specifying a generation', function() {
      var file = new File(bucket, 'name', { generation: 2 });
      assert.equal(file.generation, 2);
    });
  });

  describe('copy', function() {
    it('should throw if no destination is provided', function() {
      assert.throws(function() {
        file.copy();
      }, /should have a name/);
    });

    it('should URI encode file names', function(done) {
      var newFile = new File(bucket, 'nested/file.jpg');

      var expectedPath =
        format('/o/{srcName}/copyTo/b/{destBucket}/o/{destName}', {
          srcName: encodeURIComponent(directoryFile.name),
          destBucket: file.bucket.name,
          destName: encodeURIComponent(newFile.name)
        });

      directoryFile.makeReq_ = function(method, path) {
        assert.equal(path, expectedPath);
        done();
      };

      directoryFile.copy(newFile);
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      var newFile = new File(bucket, 'new-file');

      file.makeReq_ = function(method, path, query, body, callback) {
        callback(error, apiResponse);
      };

      file.copy(newFile, function(err, file, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(file, null);
        assert.strictEqual(apiResponse_, apiResponse);

        done();
      });
    });

    it('should send query.sourceGeneration if File has one', function(done) {
      var versionedFile = new File(bucket, 'name', { generation: 1 });
      var newFile = new File(bucket, 'new-file');

      versionedFile.makeReq_ = function(method, path, query) {
        assert.equal(query.sourceGeneration, 1);
        done();
      };

      versionedFile.copy(newFile, assert.ifError);
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
          format('/o/{srcName}/copyTo/b/{destBucket}/o/{destName}', {
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
          format('/o/{srcName}/copyTo/b/{destBucket}/o/{destName}', {
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
          format('/o/{srcName}/copyTo/b/{destBucket}/o/{destName}', {
            srcName: file.name,
            destBucket: newBucket.name,
            destName: newFile.name
          });
        assertPathEquals(file, expectedPath, done);
        file.copy(newFile);
      });

      it('should throw if a destination cannot be parsed', function() {
        assert.throws(function() {
          file.copy(function() {});
        }, /should have a name/);
      });
    });

    describe('returned File object', function() {
      beforeEach(function() {
        var resp = { success: true };
        file.makeReq_ = function(method, path, qs, body, callback) {
          callback(null, resp);
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

      it('should pass apiResponse into callback', function(done) {
        var newBucket = new Bucket({}, 'new-bucket');
        file.copy(newBucket, function(err, copiedFile, apiResponse) {
          assert.deepEqual({ success: true }, apiResponse);
          done();
        });
      });
    });
  });

  describe('move', function() {
    it('should throw if no destination is provided', function() {
      assert.throws(function() {
        file.move();
      }, /should have a name/);
    });

    describe('copy to destination', function() {
      function assertCopyFile(file, expectedDestination, callback) {
        file.copy = function(destination) {
          assert.equal(destination, expectedDestination);
          callback();
        };
      }

      it('should call copy with string', function(done) {
        var newFileName = 'new-file-name.png';
        assertCopyFile(file, newFileName, done);
        file.move(newFileName);
      });

      it('should call copy with Bucket', function(done) {
        var newBucket = new Bucket({}, 'new-bucket');
        assertCopyFile(file, newBucket, done);
        file.move(newBucket);
      });

      it('should call copy with File', function(done) {
        var newBucket = new Bucket({}, 'new-bucket');
        var newFile = new File(newBucket, 'new-file');
        assertCopyFile(file, newFile, done);
        file.move(newFile);
      });

      it('should fail if copy fails', function(done) {
        var error = new Error('Error.');
        file.copy = function(destination, callback) {
          callback(error);
        };
        file.move('new-filename', function(err) {
          assert.equal(err, error);
          done();
        });
      });
    });

    describe('delete original file', function() {
      it('should delete if copy is successful', function(done) {
        file.copy = function(destination, callback) {
          callback(null);
        };
        file.delete = function() {
          assert.equal(this, file);
          done();
        };
        file.move('new-filename');
      });

      it('should not delete if copy fails', function(done) {
        var deleteCalled = false;
        file.copy = function(destination, callback) {
          callback(new Error('Error.'));
        };
        file.delete = function() {
          deleteCalled = true;
        };
        file.move('new-filename', function() {
          assert.equal(deleteCalled, false);
          done();
        });
      });

      it('should fail if delete fails', function(done) {
        var error = new Error('Error.');
        file.copy = function(destination, callback) {
          callback();
        };
        file.delete = function(callback) {
          callback(error);
        };
        file.move('new-filename', function(err) {
          assert.equal(err, error);
          done();
        });
      });
    });
  });

  describe('createReadStream', function() {
    function getFakeRequest(data) {
      var aborted = false;
      var destroyed = false;
      var requestOptions;

      function FakeRequest(_requestOptions) {
        if (!(this instanceof FakeRequest)) {
          return new FakeRequest(_requestOptions);
        }

        requestOptions = _requestOptions;

        stream.Readable.call(this);
        this._read = function() {
          if (data) {
            this.push(data);
          }
          this.push(null);
        };

        this.abort = function() {
          aborted = true;
        };

        this.destroy = function() {
          destroyed = true;
        };
      }
      nodeutil.inherits(FakeRequest, stream.Readable);

      FakeRequest.getRequestOptions = function() { return requestOptions; };
      FakeRequest.wasRequestAborted = function() { return aborted; };
      FakeRequest.wasRequestDestroyed = function() { return destroyed; };

      return FakeRequest;
    }

    function getFakeSuccessfulRequest(data, fakeResponse) {
      var FakeRequest = getFakeRequest(data);

      function FakeSuccessfulRequest(req) {
        if (!(this instanceof FakeSuccessfulRequest)) {
          return new FakeSuccessfulRequest(req);
        }

        FakeRequest.apply(this, arguments);

        var self = this;

        setImmediate(function() {
          var stream = new FakeRequest();
          self.emit('response', stream);

          setImmediate(function() {
            self.emit('complete', fakeResponse);
          });
        });
      }
      nodeutil.inherits(FakeSuccessfulRequest, FakeRequest);
      extend(FakeSuccessfulRequest, FakeRequest);

      return FakeSuccessfulRequest;
    }

    function getFakeFailedRequest(error) {
      var FakeRequest = getFakeRequest();

      function FakeFailedRequest() {
        if (!(this instanceof FakeFailedRequest)) {
          return new FakeFailedRequest();
        }

        FakeRequest.apply(this, arguments);

        var self = this;

        setImmediate(function() {
          self.emit('error', error);
        });
      }
      nodeutil.inherits(FakeFailedRequest, FakeRequest);
      extend(FakeFailedRequest, FakeRequest);

      return FakeFailedRequest;
    }

    it('should throw if both a range and validation is given', function() {
      assert.throws(function() {
        file.createReadStream({
          validation: true,
          start: 3,
          end: 8
        });
      }, /Cannot use validation with file ranges/);

      assert.throws(function() {
        file.createReadStream({
          validation: true,
          start: 3
        });
      }, /Cannot use validation with file ranges/);

      assert.throws(function() {
        file.createReadStream({
          validation: true,
          end: 8
        });
      }, /Cannot use validation with file ranges/);

      assert.doesNotThrow(function() {
        file.createReadStream({
          start: 3,
          end: 8
        });
      });
    });

    it('should send query.generation if File has one', function(done) {
      var versionedFile = new File(bucket, 'file.txt', { generation: 1 });

      versionedFile.bucket.storage.makeAuthenticatedRequest_ = function(rOpts) {
        assert.equal(rOpts.qs.generation, 1);
        setImmediate(function() {
          done();
        });
        return duplexify();
      };

      versionedFile.createReadStream().resume();
    });

    it('should end request stream on error', function(done) {
      requestOverride = getFakeSuccessfulRequest('body', { body: null });

      var readStream = file.createReadStream();

      readStream.resume();

      // Let the error handler from createReadStream assign.
      setImmediate(function() {
        readStream.emit('error');
        assert(requestOverride.wasRequestAborted());
        assert(requestOverride.wasRequestDestroyed());
        done();
      });
    });

    it('should confirm the abort method exists', function(done) {
      var reqStream = through();

      file.bucket.storage.makeAuthenticatedRequest_ = function() {
        return reqStream;
      };

      var readStream = file.createReadStream();
      readStream.resume();

      setImmediate(function() {
        assert.doesNotThrow(function() {
          reqStream.emit('error', new Error('Error.'));
          setImmediate(done);
        });
      });
    });

    describe('authenticating', function() {
      it('should create an authenticated request', function(done) {
        var expectedPath = format('https://{host}/{b}/{o}', {
          host: 'storage.googleapis.com',
          b: file.bucket.name,
          o: encodeURIComponent(file.name)
        });

        file.bucket.storage.makeAuthenticatedRequest_ = function(opts) {
          assert.equal(opts.uri, expectedPath);
          setImmediate(function() {
            done();
          });
          return duplexify();
        };

        file.createReadStream().resume();
      });

      it('should accept gzip encoding', function(done) {
        file.bucket.storage.makeAuthenticatedRequest_ = function(opts) {
          assert.strictEqual(opts.gzip, true);
          setImmediate(function() {
            done();
          });
          return duplexify();
        };

        file.createReadStream().resume();
      });

      describe('errors', function() {
        var ERROR = new Error('Error.');

        beforeEach(function() {
          file.bucket.storage.makeAuthenticatedRequest_ = function(opts) {
            var stream = (requestOverride || request)(opts);

            setImmediate(function() {
              stream.emit('error', ERROR);
            });

            return stream;
          };
        });

        it('should emit an error from authenticating', function(done) {
          file.createReadStream()
            .once('error', function(err) {
              assert.equal(err, ERROR);
              done();
            })
            .resume();
        });
      });
    });

    describe('request', function() {
      it('should get readable stream from request', function(done) {
        var fakeRequest = { a: 'b', c: 'd' };

        requestOverride = getFakeRequest();

        file.bucket.storage.makeAuthenticatedRequest_ = function() {
          setImmediate(function() {
            assert.deepEqual(requestOverride.getRequestOptions(), fakeRequest);
            done();
          });

          return requestOverride(fakeRequest);
        };

        file.createReadStream().resume();
      });

      it('should emit response event from request', function(done) {
        requestOverride = getFakeSuccessfulRequest('body');

        file.createReadStream({ validation: false })
          .on('response', function() {
            done();
          })
          .resume();
      });

      it('should unpipe stream from an error on the response', function(done) {
        var requestStream = through();

        file.bucket.storage.makeAuthenticatedRequest_ = function() {
          setImmediate(function() {
            // Must be a stream. Doesn't matter for the tests, though.
            requestStream.emit('response', through());
          });

          return requestStream;
        };

        handleRespOverride = function(err, resp, body, callback) {
          assert.strictEqual(requestStream._readableState.pipesCount, 1);
          assert.strictEqual(requestStream._readableState.pipes, readStream);

          // Triggers the unpipe.
          callback(new Error());

          setImmediate(function() {
            assert.strictEqual(requestStream._readableState.pipesCount, 0);
            assert.strictEqual(requestStream._readableState.pipes, null);
            done();
          });
        };

        var readStream = file.createReadStream().resume();
      });

      it('should let util.handleResp handle the response', function(done) {
        var response = { a: 'b', c: 'd' };

        handleRespOverride = function(err, response_, body) {
          assert.strictEqual(err, null);
          assert.strictEqual(response_, response);
          assert.strictEqual(body, null);
          done();
        };

        file.bucket.storage.makeAuthenticatedRequest_ = function() {
          var stream = through();
          setImmediate(function() {
            stream.emit('complete', response);
          });
          return stream;
        };

        file.createReadStream().resume();
      });

      describe('errors', function() {
        var ERROR = new Error('Error.');

        beforeEach(function() {
          requestOverride = getFakeFailedRequest(ERROR);
        });

        it('should emit the error', function(done) {
          file.createReadStream()
            .once('error', function(err) {
              assert.deepEqual(err, ERROR);
              done();
            })
            .resume();
        });
      });
    });

    describe('validation', function() {
      var data = 'test';

      var fakeResponse = {
        crc32c: {
          headers: { 'x-goog-hash': 'crc32c=####wA==' }
        },
        md5: {
          headers: { 'x-goog-hash': 'md5=CY9rzUYh03PK3k6DJie09g==' }
        }
      };

      beforeEach(function() {
        file.metadata.mediaLink = 'http://uri';

        file.bucket.storage.makeAuthenticatedRequest_ = function(opts, cb) {
          if (cb) {
            (cb.onAuthenticated || cb)(null, {});
          } else {
            return (requestOverride || requestCached)(opts);
          }
        };
      });

      it('should validate with crc32c', function(done) {
        requestOverride = getFakeSuccessfulRequest(data, fakeResponse.crc32c);

        file.createReadStream({ validation: 'crc32c' })
          .on('error', done)
          .on('end', done)
          .resume();
      });

      it('should emit an error if crc32c validation fails', function(done) {
        requestOverride = getFakeSuccessfulRequest(
            'bad-data', fakeResponse.crc32c);

        file.createReadStream({ validation: 'crc32c' })
          .on('error', function(err) {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      it('should validate with md5', function(done) {
        requestOverride = getFakeSuccessfulRequest(data, fakeResponse.md5);

        file.createReadStream({ validation: 'md5' })
          .on('error', done)
          .on('end', done)
          .resume();
      });

      it('should emit an error if md5 validation fails', function(done) {
        requestOverride = getFakeSuccessfulRequest(
            'bad-data', fakeResponse.md5);

        file.createReadStream({ validation: 'md5' })
          .on('error', function(err) {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      it('should default to md5 validation', function(done) {
        requestOverride = getFakeSuccessfulRequest(data, {
          headers: { 'x-goog-hash': 'md5=fakefakefake' }
        });

        file.createReadStream()
          .on('error', function(err) {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      describe('destroying the through stream', function() {
        it('should destroy after failed validation', function(done) {
          requestOverride = getFakeSuccessfulRequest(
              'bad-data', fakeResponse.crc32c);

          var readStream = file.createReadStream({ validation: 'md5' });
          readStream.destroy = function(err) {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          };
          readStream.resume();
        });
      });
    });

    describe('range requests', function() {
      it('should accept a start range', function(done) {
        var startOffset = 100;

        requestOverride = function(opts) {
          setImmediate(function() {
            assert.equal(opts.headers.Range, 'bytes=' + startOffset + '-');
            done();
          });
          return duplexify();
        };

        file.createReadStream({ start: startOffset }).resume();
      });

      it('should accept an end range and set start to 0', function(done) {
        var endOffset = 100;

        requestOverride = function(opts) {
          setImmediate(function() {
            assert.equal(opts.headers.Range, 'bytes=0-' + endOffset);
            done();
          });
          return duplexify();
        };

        file.createReadStream({ end: endOffset }).resume();
      });

      it('should accept both a start and end range', function(done) {
        var startOffset = 100;
        var endOffset = 101;

        requestOverride = function(opts) {
          setImmediate(function() {
            var expectedRange = 'bytes=' + startOffset + '-' + endOffset;
            assert.equal(opts.headers.Range, expectedRange);
            done();
          });
          return duplexify();
        };

        file.createReadStream({ start: startOffset, end: endOffset }).resume();
      });

      it('should accept range start and end as 0', function(done) {
        var startOffset = 0;
        var endOffset = 0;

        requestOverride = function(opts) {
          setImmediate(function() {
            var expectedRange = 'bytes=0-0';
            assert.equal(opts.headers.Range, expectedRange);
            done();
          });
          return duplexify();
        };

        file.createReadStream({ start: startOffset, end: endOffset }).resume();
      });

      it('should end the through stream', function(done) {
        requestOverride = getFakeSuccessfulRequest('body', { body: null });

        var readStream = file.createReadStream({ start: 100 });
        readStream.end = done;
        readStream.resume();
      });
    });

    describe('tail requests', function() {
      it('should make a request for the tail bytes', function(done) {
        var endOffset = -10;

        requestOverride = function(opts) {
          setImmediate(function() {
            assert.equal(opts.headers.Range, 'bytes=' + endOffset);
            done();
          });
          return duplexify();
        };

        file.createReadStream({ end: endOffset }).resume();
      });
    });
  });

  describe('createResumableUpload', function() {
    it('should not require metadata', function(done) {
      resumableUploadOverride = {
        createURI: function(opts, callback) {
          assert.deepEqual(opts.metadata, {});
          callback();
        }
      };

      file.createResumableUpload(done);
    });

    it('should create a resumable upload URI', function(done) {
      var metadata = {
        contentType: 'application/json'
      };

      file.generation = 3;

      resumableUploadOverride = {
        createURI: function(opts, callback) {
          var bucket = file.bucket;
          var storage = bucket.storage;
          var authClient = storage.makeAuthenticatedRequest_.authClient;

          assert.strictEqual(opts.authClient, authClient);
          assert.strictEqual(opts.bucket, bucket.name);
          assert.strictEqual(opts.file, file.name);
          assert.strictEqual(opts.generation, file.generation);
          assert.strictEqual(opts.metadata, metadata);

          callback();
        }
      };

      file.createResumableUpload(metadata, done);
    });
  });

  describe('createWriteStream', function() {
    var METADATA = { a: 'b', c: 'd' };

    it('should return a stream', function() {
      assert(file.createWriteStream() instanceof stream);
    });

    it('should emit errors', function(done) {
      var error = new Error('Error.');
      var uploadStream = new stream.PassThrough();

      file.startResumableUpload_ = function(dup) {
        dup.setWritable(uploadStream);
        uploadStream.emit('error', error);
      };

      var writable = file.createWriteStream();

      writable.on('error', function(err) {
        assert.strictEqual(err, error);
        done();
      });

      writable.write('data');
    });

    it('should start a simple upload if specified', function(done) {
      var writable = file.createWriteStream({
        metadata: METADATA,
        resumable: false
      });

      file.startSimpleUpload_ = function(stream, metadata) {
        assert.deepEqual(metadata, METADATA);
        done();
      };

      writable.write('data');
    });

    it('should start a resumable upload if specified', function(done) {
      var writable = file.createWriteStream({
        metadata: METADATA,
        resumable: true
      });

      file.startResumableUpload_ = function(stream, metadata) {
        assert.deepEqual(metadata, METADATA);
        done();
      };

      writable.write('data');
    });

    it('should default to a resumable upload', function(done) {
      var writable = file.createWriteStream({
        metadata: METADATA
      });

      file.startResumableUpload_ = function(stream, metadata) {
        assert.deepEqual(metadata, METADATA);
        done();
      };

      writable.write('data');
    });

    it('should set metadata.contentEncoding with gzip', function(done) {
      var writable = file.createWriteStream({ gzip: true });

      file.startResumableUpload_ = function(stream, metadata) {
        assert.strictEqual(metadata.contentEncoding, 'gzip');
        done();
      };

      writable.write('data');
    });

    it('should cork data on prefinish', function(done) {
      var writable = file.createWriteStream();

      file.startResumableUpload_ = function(stream) {
        assert.strictEqual(writable._corked, 0);
        stream.emit('prefinish');
        assert.strictEqual(writable._corked, 1);
        done();
      };

      writable.end('data');
    });

    describe('validation', function() {
      var data = 'test';

      var fakeMetadata = {
        crc32c: { crc32c: '####wA==' },
        md5: { md5Hash: 'CY9rzUYh03PK3k6DJie09g==' }
      };

      it('should uncork after successful write', function(done) {
        var writable = file.createWriteStream({ validation: 'crc32c' });

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            assert.strictEqual(writable._corked, 1);

            file.metadata = fakeMetadata.crc32c;
            stream.emit('complete');

            assert.strictEqual(writable._corked, 0);
            done();
          });
        };

        writable.end(data);

        writable.on('error', done);
      });

      it('should validate with crc32c', function(done) {
        var writable = file.createWriteStream({ validation: 'crc32c' });

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = fakeMetadata.crc32c;
            stream.emit('complete');
          });
        };

        writable.end(data);

        writable
          .on('error', done)
          .on('finish', done);
      });

      it('should emit an error if crc32c validation fails', function(done) {
        var writable = file.createWriteStream({ validation: 'crc32c' });

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = fakeMetadata.crc32c;
            stream.emit('complete');
          });
        };

        file.delete = function(cb) {
          cb();
        };

        writable.write('bad-data');
        writable.end();

        writable.on('error', function(err) {
          assert.equal(err.code, 'FILE_NO_UPLOAD');
          done();
        });
      });

      it('should validate with md5', function(done) {
        var writable = file.createWriteStream({ validation: 'md5' });

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = fakeMetadata.md5;
            stream.emit('complete');
          });
        };

        writable.write(data);
        writable.end();

        writable
          .on('error', done)
          .on('finish', done);
      });

      it('should emit an error if md5 validation fails', function(done) {
        var writable = file.createWriteStream({ validation: 'md5' });

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = fakeMetadata.md5;
            stream.emit('complete');
          });
        };

        file.delete = function(cb) {
          cb();
        };

        writable.write('bad-data');
        writable.end();

        writable.on('error', function(err) {
          assert.equal(err.code, 'FILE_NO_UPLOAD');
          done();
        });
      });

      it('should default to md5 validation', function(done) {
        var writable = file.createWriteStream();

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = { md5Hash: 'bad-hash' };
            stream.emit('complete');
          });
        };

        file.delete = function(cb) {
          cb();
        };

        writable.write(data);
        writable.end();

        writable.on('error', function(err) {
          assert.equal(err.code, 'FILE_NO_UPLOAD');
          done();
        });
      });

      it('should delete the file if validation fails', function(done) {
        var writable = file.createWriteStream();

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = { md5Hash: 'bad-hash' };
            stream.emit('complete');
          });
        };

        file.delete = function() {
          done();
        };

        writable.write(data);
        writable.end();
      });

      it('should emit a different error if delete fails', function(done) {
        var writable = file.createWriteStream();

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = { md5Hash: 'bad-hash' };
            stream.emit('complete');
          });
        };

        var deleteErrorMessage = 'Delete error message.';
        var deleteError = new Error(deleteErrorMessage);
        file.delete = function(cb) {
          cb(deleteError);
        };

        writable.write(data);
        writable.end();

        writable.on('error', function(err) {
          assert.equal(err.code, 'FILE_NO_UPLOAD_DELETE');
          assert(err.message.indexOf(deleteErrorMessage > -1));
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
        assert.deepEqual(query, {});
        assert.strictEqual(body, null);
        done();
      };
      file.delete();
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      file.makeReq_ = function(method, path, query, body, callback) {
        callback(error, apiResponse);
      };

      file.delete(function(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);

        done();
      });
    });

    it('should URI encode file names', function(done) {
      directoryFile.makeReq_ = function(method, path) {
        assert.equal(path, '/o/' + encodeURIComponent(directoryFile.name));
        done();
      };

      directoryFile.delete();
    });

    it('should send query.generation if File has one', function(done) {
      var versionedFile = new File(bucket, 'new-file.txt', { generation: 1 });

      versionedFile.makeReq_ = function(method, path, query) {
        assert.equal(query.generation, 1);
        done();
      };

      versionedFile.delete();
    });

    it('should execute callback', function(done) {
      file.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      file.delete(done);
    });

    it('should execute callback with apiResponse', function(done) {
      var resp = { success: true };
      file.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };
      file.delete(function(err, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('download', function() {
    var fileReadStream;

    beforeEach(function() {
      fileReadStream = new stream.Readable();
      fileReadStream._read = util.noop;

      fileReadStream.on('end', function() {
        fileReadStream.emit('complete');
      });

      file.createReadStream = function() {
        return fileReadStream;
      };
    });

    it('should accept just a callback', function(done) {
      fileReadStream._read = function() {
        done();
      };

      file.download(assert.ifError);
    });

    it('should accept an options object and callback', function(done) {
      fileReadStream._read = function() {
        done();
      };

      file.download({}, assert.ifError);
    });

    it('should pass the provided options to createReadStream', function(done) {
      var readOptions = { start: 100, end: 200 };

      file.createReadStream = function(options) {
        assert.deepEqual(options, readOptions);
        done();
        return fileReadStream;
      };

      file.download(readOptions, assert.ifError);
    });

    it('should only execute callback once', function(done) {
      fileReadStream._read = function() {
        this.emit('error', new Error('Error.'));
        this.emit('error', new Error('Error.'));
      };

      file.download(function() {
        done();
      });
    });

    describe('into memory', function() {
      it('should buffer a file into memory if no destination', function(done) {
        var fileContents = 'abcdefghijklmnopqrstuvwxyz';

        fileReadStream._read = function() {
          this.push(fileContents);
          this.push(null);
        };

        file.download(function(err, remoteFileContents) {
          assert.ifError(err);

          assert.equal(fileContents, remoteFileContents);
          done();
        });
      });

      it('should execute callback with error', function(done) {
        var error = new Error('Error.');

        fileReadStream._read = function() {
          this.emit('error', error);
        };

        file.download(function(err) {
          assert.equal(err, error);
          done();
        });
      });
    });

    describe('with destination', function() {
      it('should write the file to a destination if provided', function(done) {
        tmp.setGracefulCleanup();
        tmp.file(function _tempFileCreated(err, tmpFilePath) {
          assert.ifError(err);

          var fileContents = 'abcdefghijklmnopqrstuvwxyz';

          fileReadStream._read = function() {
            this.push(fileContents);
            this.push(null);
          };

          file.download({ destination: tmpFilePath }, function(err) {
            assert.ifError(err);

            fs.readFile(tmpFilePath, function(err, tmpFileContents) {
              assert.ifError(err);

              assert.equal(fileContents, tmpFileContents);
              done();
            });
          });
        });
      });

      it('should execute callback with error', function(done) {
        tmp.setGracefulCleanup();
        tmp.file(function _tempFileCreated(err, tmpFilePath) {
          assert.ifError(err);

          var error = new Error('Error.');

          fileReadStream._read = function() {
            this.emit('error', error);
          };

          file.download({ destination: tmpFilePath }, function(err) {
            assert.equal(err, error);
            done();
          });
        });
      });
    });
  });

  describe('getMetadata', function() {
    var metadata = { a: 'b', c: 'd' };

    it('should get the metadata of a file', function(done) {
      file.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '/o/' + FILE_NAME);
        assert.deepEqual(query, {});
        assert.strictEqual(body, null);
        done();
      };
      file.getMetadata();
    });

    it('should URI encode file names', function(done) {
      directoryFile.makeReq_ = function(method, path) {
        assert.equal(path, '/o/' + encodeURIComponent(directoryFile.name));
        done();
      };

      directoryFile.getMetadata();
    });

    it('should send query.generation if File has one', function(done) {
      var versionedFile = new File(bucket, 'new-file.txt', { generation: 1 });

      versionedFile.makeReq_ = function(method, path, query) {
        assert.equal(query.generation, 1);
        done();
      };

      versionedFile.getMetadata();
    });

    it('should execute callback', function(done) {
      file.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      file.getMetadata(done);
    });

    it('should execute callback with apiResponse', function(done) {
      var resp = { success: true };
      file.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };
      file.getMetadata(function(err, metadata, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
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

  describe('getSignedPolicy', function() {
    var credentials = require('../testdata/privateKeyFile.json');

    beforeEach(function() {
      var storage = bucket.storage;
      storage.makeAuthenticatedRequest_.getCredentials = function(callback) {
        callback(null, credentials);
      };
    });

    it('should create a signed policy', function(done) {
      file.getSignedPolicy({
        expires: Date.now() + 5
      }, function(err, signedPolicy) {
        assert.ifError(err);
        assert.equal(typeof signedPolicy.string, 'string');
        assert.equal(typeof signedPolicy.base64, 'string');
        assert.equal(typeof signedPolicy.signature, 'string');
        done();
      });
    });

    it('should return an error if getCredentials errors', function(done) {
      var error = new Error('Error.');

      var storage = bucket.storage;
      storage.makeAuthenticatedRequest_.getCredentials = function(callback) {
        callback(error);
      };

      file.getSignedPolicy({
        expires: Date.now() + 5
      }, function(err) {
        var errorMessage = 'Signing failed. See `error` property.';
        assert.strictEqual(err.message, errorMessage);
        assert.strictEqual(err.error, error);
        done();
      });
    });

    it('should return an error if credentials are not present', function(done) {
      var storage = bucket.storage;
      storage.makeAuthenticatedRequest_.getCredentials = function(callback) {
        callback(null, {});
      };

      file.getSignedPolicy({
        expires: Date.now() + 5
      }, function(err) {
        var errorMessage = [
          'Signing failed. Could not find a `private_key`.',
          'Please verify you are authorized with this property available.'
        ].join(' ');

        assert.strictEqual(err.message, errorMessage);
        done();
      });
    });

    it('should add key equality condition', function(done) {
      file.getSignedPolicy({
        expires: Date.now() + 5
      }, function(err, signedPolicy) {
        var conditionString = '[\"eq\",\"$key\",\"' + file.name + '\"]';
        assert.ifError(err);
        assert(signedPolicy.string.indexOf(conditionString) > -1);
        done();
      });
    });

    it('should add ACL condtion', function(done) {
      file.getSignedPolicy({
        expires: Date.now() + 5,
        acl: '<acl>'
      }, function(err, signedPolicy) {
        var conditionString = '{\"acl\":\"<acl>\"}';
        assert.ifError(err);
        assert(signedPolicy.string.indexOf(conditionString) > -1);
        done();
      });
    });

    it('should add success redirect', function(done) {
      var redirectUrl = 'http://redirect';

      file.getSignedPolicy({
        expires: Date.now() + 5,
        successRedirect: redirectUrl
      }, function(err, signedPolicy) {
        assert.ifError(err);

        var policy = JSON.parse(signedPolicy.string);
        assert(policy.conditions.some(function(condition) {
          return condition.success_action_redirect === redirectUrl;
        }));

        done();
      });
    });

    it('should add success status', function(done) {
      var successStatus = '200';

      file.getSignedPolicy({
        expires: Date.now() + 5,
        successStatus: successStatus
      }, function(err, signedPolicy) {
        assert.ifError(err);

        var policy = JSON.parse(signedPolicy.string);
        assert(policy.conditions.some(function(condition) {
          return condition.success_action_status === successStatus;
        }));

        done();
      });
    });

    describe('expires', function() {
      it('should accept Date objects', function(done) {
        var expires = new Date(Date.now() + 1000 * 60);

        file.getSignedPolicy({
          expires: expires
        }, function(err, policy) {
          assert.ifError(err);
          var expires_ = JSON.parse(policy.string).expiration;
          assert.strictEqual(expires_, expires.toISOString());
          done();
        });
      });

      it('should accept numbers', function(done) {
        var expires = Date.now() + 1000 * 60;

        file.getSignedPolicy({
          expires: expires
        }, function(err, policy) {
          assert.ifError(err);
          var expires_ = JSON.parse(policy.string).expiration;
          assert.strictEqual(expires_, new Date(expires).toISOString());
          done();
        });
      });

      it('should accept strings', function(done) {
        var expires = '12-12-2099';

        file.getSignedPolicy({
          expires: expires
        }, function(err, policy) {
          assert.ifError(err);
          var expires_ = JSON.parse(policy.string).expiration;
          assert.strictEqual(expires_, new Date(expires).toISOString());
          done();
        });
      });

      it('should throw if a date from the past is given', function() {
        var expires = Date.now() - 5;

        assert.throws(function() {
          file.getSignedPolicy({
            expires: expires
          }, function() {});
        }, /cannot be in the past/);
      });
    });

    describe('equality condition', function() {
      it('should add equality conditions (array of arrays)', function(done) {
        file.getSignedPolicy({
          expires: Date.now() + 5,
          equals: [['$<field>', '<value>']]
        }, function(err, signedPolicy) {
          var conditionString = '[\"eq\",\"$<field>\",\"<value>\"]';
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(conditionString) > -1);
          done();
        });
      });

      it('should add equality condition (array)', function(done) {
        file.getSignedPolicy({
          expires: Date.now() + 5,
          equals: ['$<field>', '<value>']
        }, function(err, signedPolicy) {
          var conditionString = '[\"eq\",\"$<field>\",\"<value>\"]';
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(conditionString) > -1);
          done();
        });
      });

      it('should throw if equal condition is not an array', function() {
        assert.throws(function() {
          file.getSignedPolicy({
            expires: Date.now() + 5,
            equals: [{}]
          }, function() {});
        }, /Equals condition must be an array/);
      });

      it('should throw if equal condition length is not 2', function() {
        assert.throws(function() {
          file.getSignedPolicy({
            expires: Date.now() + 5,
            equals: [['1', '2', '3']]
          }, function() {});
        }, /Equals condition must be an array of 2 elements/);
      });
    });

    describe('prefix conditions', function() {
      it('should add prefix conditions (array of arrays)', function(done) {
        file.getSignedPolicy({
          expires: Date.now() + 5,
          startsWith: [['$<field>', '<value>']]
        }, function(err, signedPolicy) {
          var conditionString = '[\"starts-with\",\"$<field>\",\"<value>\"]';
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(conditionString) > -1);
          done();
        });
      });

      it('should add prefix condition (array)', function(done) {
        file.getSignedPolicy({
          expires: Date.now() + 5,
          startsWith: ['$<field>', '<value>']
        }, function(err, signedPolicy) {
          var conditionString = '[\"starts-with\",\"$<field>\",\"<value>\"]';
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(conditionString) > -1);
          done();
        });
      });

      it('should throw if prexif condition is not an array', function() {
        assert.throws(function() {
          file.getSignedPolicy({
            expires: Date.now() + 5,
            startsWith: [{}]
          }, function() {});
        }, /StartsWith condition must be an array/);
      });

      it('should throw if prefix condition length is not 2', function() {
        assert.throws(function() {
          file.getSignedPolicy({
            expires: Date.now() + 5,
            startsWith: [['1', '2', '3']]
          }, function() {});
        }, /StartsWith condition must be an array of 2 elements/);
      });
    });

    describe('content length', function() {
      it('should add content length condition', function(done) {
        file.getSignedPolicy({
          expires: Date.now() + 5,
          contentLengthRange: {min: 0, max: 1}
        }, function(err, signedPolicy) {
          var conditionString = '[\"content-length-range\",0,1]';
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(conditionString) > -1);
          done();
        });
      });

      it('should throw if content length has no min', function() {
        assert.throws(function() {
          file.getSignedPolicy({
            expires: Date.now() + 5,
            contentLengthRange: [{max: 1}]
          }, function() {});
        }, /ContentLengthRange must have numeric min & max fields/);
      });

      it('should throw if content length has no max', function() {
        assert.throws(function() {
          file.getSignedPolicy({
            expires: Date.now() + 5,
            contentLengthRange: [{min: 0}]
          }, function() {});
        }, /ContentLengthRange must have numeric min & max fields/);
      });
    });
  });

  describe('getSignedUrl', function() {
    var credentials = require('../testdata/privateKeyFile.json');

    beforeEach(function() {
      var storage = bucket.storage;
      storage.makeAuthenticatedRequest_.getCredentials = function(callback) {
        callback(null, credentials);
      };
    });

    it('should create a signed url', function(done) {
      file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 5
      }, function(err, signedUrl) {
        assert.ifError(err);
        assert.equal(typeof signedUrl, 'string');
        done();
      });
    });

    it('should return an error if getCredentials errors', function(done) {
      var error = new Error('Error.');

      var storage = bucket.storage;
      storage.makeAuthenticatedRequest_.getCredentials = function(callback) {
        callback(error);
      };

      file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 5
      }, function(err) {
        var errorMessage = 'Signing failed. See `error` property.';
        assert.strictEqual(err.message, errorMessage);
        assert.strictEqual(err.error, error);
        done();
      });
    });

    it('should return an error if credentials are not present', function(done) {
      var storage = bucket.storage;
      storage.makeAuthenticatedRequest_.getCredentials = function(callback) {
        callback(null, {});
      };

      file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 5
      }, function(err) {
        var errorMessage = [
          'Signing failed. Could not find a `private_key` or `client_email`.',
          'Please verify you are authorized with these credentials available.'
        ].join(' ');

        assert.strictEqual(err.message, errorMessage);
        done();
      });
    });

    it('should URI encode file names', function(done) {
      directoryFile.getSignedUrl({
        action: 'read',
        expires: Date.now() + 5,
      }, function(err, signedUrl) {
        assert(signedUrl.indexOf(encodeURIComponent(directoryFile.name)) > -1);
        done();
      });
    });

    it('should add response-content-type parameter', function(done) {
      var type = 'application/json';
      directoryFile.getSignedUrl({
        action: 'read',
        expires: Date.now() + 5,
        responseType: type
      }, function(err, signedUrl) {
        assert(signedUrl.indexOf(encodeURIComponent(type)) > -1);
        done();
      });
    });

    describe('promptSaveAs', function() {
      it('should add response-content-disposition', function(done) {
        var disposition = 'attachment; filename="fname.ext"';
        directoryFile.getSignedUrl({
          action: 'read',
          expires: Date.now() + 5,
          promptSaveAs: 'fname.ext'
        }, function(err, signedUrl) {
          assert(signedUrl.indexOf(disposition) > -1);
          done();
        });
      });
    });

    describe('responseDisposition', function() {
      it('should add response-content-disposition', function(done) {
        var disposition = 'attachment; filename="fname.ext"';
        directoryFile.getSignedUrl({
          action: 'read',
          expires: Date.now() + 5,
          responseDisposition: disposition
        }, function(err, signedUrl) {
          assert(signedUrl.indexOf(encodeURIComponent(disposition)) > -1);
          done();
        });
      });

      it('should ignore promptSaveAs if set', function(done) {
        var disposition = 'attachment; filename="fname.ext"';
        var saveAs = 'fname2.ext';
        directoryFile.getSignedUrl({
          action: 'read',
          expires: Date.now() + 5,
          promptSaveAs: saveAs,
          responseDisposition: disposition
        }, function(err, signedUrl) {
          assert(signedUrl.indexOf(encodeURIComponent(disposition)) > -1);
          assert(signedUrl.indexOf(encodeURIComponent(saveAs)) === -1);
          done();
        });
      });
    });

    describe('expires', function() {
      it('should accept Date objects', function(done) {
        var expires = new Date(Date.now() + 1000 * 60);
        var expectedExpires = Math.round(expires / 1000);

        file.getSignedUrl({
          action: 'read',
          expires: expires
        }, function(err, signedUrl) {
          assert.ifError(err);
          var expires_ = url.parse(signedUrl, true).query.Expires;
          assert.equal(expires_, expectedExpires);
          done();
        });
      });

      it('should accept numbers', function(done) {
        var expires = Date.now() + 1000 * 60;
        var expectedExpires = Math.round(new Date(expires) / 1000);

        file.getSignedUrl({
          action: 'read',
          expires: expires
        }, function(err, signedUrl) {
          assert.ifError(err);
          var expires_ = url.parse(signedUrl, true).query.Expires;
          assert.equal(expires_, expectedExpires);
          done();
        });
      });

      it('should accept strings', function(done) {
        var expires = '12-12-2099';
        var expectedExpires = Math.round(new Date(expires) / 1000);

        file.getSignedUrl({
          action: 'read',
          expires: expires
        }, function(err, signedUrl) {
          assert.ifError(err);
          var expires_ = url.parse(signedUrl, true).query.Expires;
          assert.equal(expires_, expectedExpires);
          done();
        });
      });

      it('should throw if a date from the past is given', function() {
        var expires = Date.now() - 5;

        assert.throws(function() {
          file.getSignedUrl({
            action: 'read',
            expires: expires
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

    it('should URI encode file names', function(done) {
      directoryFile.makeReq_ = function(method, path) {
        assert.equal(path, '/o/' + encodeURIComponent(directoryFile.name));
        done();
      };

      directoryFile.setMetadata(metadata);
    });

    it('should send query.generation if File has one', function(done) {
      var versionedFile = new File(bucket, 'new-file.txt', { generation: 1 });

      versionedFile.makeReq_ = function(method, path, query) {
        assert.equal(query.generation, 1);
        done();
      };

      versionedFile.setMetadata();
    });

    it('should execute callback', function(done) {
      file.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };
      file.setMetadata(metadata, done);
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      file.makeReq_ = function(method, path, query, body, callback) {
        callback(error, apiResponse);
      };

      file.setMetadata(metadata, function(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should execute callback with apiResponse', function(done) {
      var resp = { success: true };
      file.makeReq_ = function(method, path, query, body, callback) {
        callback(null, resp);
      };
      file.setMetadata(metadata, function(err, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
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

  describe('makePublic', function() {
    it('should execute callback', function(done) {
      file.acl.add = function(options, callback) {
        callback();
      };

      file.makePublic(done);
    });

    it('should make the file public', function(done) {
      file.acl.add = function(options) {
        assert.deepEqual(options, { entity: 'allUsers', role: 'READER' });
        done();
      };

      file.makePublic(util.noop);
    });
  });

  describe('makePrivate', function() {
    it('should execute callback with API response', function(done) {
      var apiResponse = {};

      file.makeReq_ = function(method, path, query, body, callback) {
        callback(null, apiResponse);
      };

      file.makePrivate(function(err, apiResponse_) {
        assert.ifError(err);
        assert.strictEqual(apiResponse_, apiResponse);

        done();
      });
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      file.makeReq_ = function(method, path, query, body, callback) {
        callback(error, apiResponse);
      };

      file.makePrivate(function(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);

        done();
      });
    });

    it('should make the file private to project by default', function(done) {
      file.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'PATCH');
        assert.equal(path, '/o/' + encodeURIComponent(file.name));
        assert.deepEqual(query, { predefinedAcl: 'projectPrivate' });
        assert.deepEqual(body, { acl: null });
        done();
      };

      file.makePrivate(util.noop);
    });

    it('should make the file private to user if strict = true', function(done) {
      file.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'PATCH');
        assert.equal(path, '/o/' + encodeURIComponent(file.name));
        assert.deepEqual(query, { predefinedAcl: 'private' });
        assert.deepEqual(body, { acl: null });
        done();
      };

      file.makePrivate({ strict: true }, util.noop);
    });
  });

  describe('startResumableUpload_', function() {
    describe('starting', function() {
      it('should start a resumable upload', function(done) {
        var metadata = {
          contentType: 'application/json'
        };

        file.generation = 3;

        resumableUploadOverride = function(opts) {
          var bucket = file.bucket;
          var storage = bucket.storage;
          var authClient = storage.makeAuthenticatedRequest_.authClient;

          assert.strictEqual(opts.authClient, authClient);
          assert.strictEqual(opts.bucket, bucket.name);
          assert.strictEqual(opts.file, file.name);
          assert.strictEqual(opts.generation, file.generation);
          assert.strictEqual(opts.metadata, metadata);

          setImmediate(done);
          return through();
        };

        file.startResumableUpload_(duplexify(), metadata);
      });

      it('should set the metadata from the response', function(done) {
        var metadata = {};
        var uploadStream = through();

        resumableUploadOverride = function() {
          setImmediate(function() {
            uploadStream.emit('response', null, metadata);

            setImmediate(function() {
              assert.strictEqual(file.metadata, metadata);
              done();
            });
          });
          return uploadStream;
        };


        file.startResumableUpload_(duplexify());
      });

      it('should emit complete after the stream finishes', function(done) {
        var dup = duplexify();

        dup.on('complete', done);

        resumableUploadOverride = function() {
          var uploadStream = through();
          setImmediate(function() {
            uploadStream.emit('finish');
          });
          return uploadStream;
        };

        file.startResumableUpload_(dup);
      });

      it('should set the writable stream', function(done) {
        var dup = duplexify();
        var uploadStream = through();

        dup.setWritable = function(stream) {
          assert.strictEqual(stream, uploadStream);
          done();
        };

        resumableUploadOverride = function() {
          return uploadStream;
        };

        file.startResumableUpload_(dup);
      });
    });
  });

  describe('startSimpleUpload_', function() {
    it('should get a writable stream', function(done) {
      makeWritableStreamOverride = function() {
        done();
      };

      file.startSimpleUpload_(duplexify());
    });

    it('should pass the required arguments', function(done) {
      var metadata = { a: 'b', c: 'd' };

      makeWritableStreamOverride = function(stream, options) {
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

      file.startSimpleUpload_(duplexify(), metadata);
    });

    it('should send query.ifGenerationMatch if File has one', function(done) {
      var versionedFile = new File(bucket, 'new-file.txt', { generation: 1 });

      makeWritableStreamOverride = function(stream, options) {
        assert.equal(options.request.qs.ifGenerationMatch, 1);
        done();
      };

      versionedFile.startSimpleUpload_(duplexify(), {});
    });

    it('should finish stream and set metadata', function(done) {
      var metadata = { a: 'b', c: 'd' };

      makeWritableStreamOverride = function(stream, options, callback) {
        callback(metadata);
      };

      var ws = new stream.Writable();

      ws
        .on('error', done)
        .on('complete', function() {
          assert.strictEqual(file.metadata, metadata);
          done();
        });

      file.startSimpleUpload_(ws, metadata);
    });
  });
});
