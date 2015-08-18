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
var crc = require('sse4_crc32');
var crypto = require('crypto');
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

var readableStream;
var writableStream;
function FakeDuplexify() {
  if (!(this instanceof FakeDuplexify)) {
    return new FakeDuplexify();
  }
  stream.Duplex.call(this);
  this._read = util.noop;
  this._write = util.noop;
  this.setReadable = function(setReadableStream) {
    readableStream = setReadableStream;
  };
  this.setWritable = function(setWritableStream) {
    writableStream = setWritableStream;
  };
  this.destroy = function(err) {
    if (err) {
      this.emit('error', err);
    } else {
      this.end();
    }
  };
}
nodeutil.inherits(FakeDuplexify, stream.Duplex);

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

var configStoreData = {};
function FakeConfigStore() {
  this.del = function(key) {
    delete configStoreData[key];
  };

  this.get = function(key) {
    return configStoreData[key];
  };

  this.set = function(key, value) {
    configStoreData[key] = value;
  };
}

describe('File', function() {
  var File;
  var FILE_NAME = 'file-name.png';
  var file;
  var directoryFile;
  var bucket;

  before(function() {
    mockery.registerMock('sse4_crc32', crc);
    mockery.registerMock('configstore', FakeConfigStore);
    mockery.registerMock('duplexify', FakeDuplexify);
    mockery.registerMock('request', fakeRequest);
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
      makeAuthorizedRequest_: function(req, callback) {
        if (callback) {
          (callback.onAuthorized || callback)(null, req);
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
  });

  it('should have set correct defaults on Request', function() {
    assert.deepEqual(REQUEST_DEFAULT_CONF, { pool: { maxSockets: Infinity } });
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
          var responseStream = through();
          self.emit('response', responseStream);
          responseStream.push(data);
          responseStream.push(null);

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

    it('should send query.generation if File has one', function(done) {
      var versionedFile = new File(bucket, 'file.txt', { generation: 1 });

      versionedFile.bucket.storage.makeAuthorizedRequest_ = function(reqOpts) {
        assert.equal(reqOpts.qs.generation, 1);
        setImmediate(function() {
          done();
        });
        return new FakeDuplexify();
      };

      versionedFile.createReadStream();
    });

    it('should end request stream on error', function(done) {
      requestOverride = getFakeSuccessfulRequest('body', { body: null });

      var readStream = file.createReadStream();

      readStream.once('error', function() {
        assert(requestOverride.wasRequestAborted());
        assert(requestOverride.wasRequestDestroyed());
        done();
      });

      readStream.emit('error');
    });

    describe('authorizing', function() {
      it('should create an authorized request', function(done) {
        var expectedPath = format('https://{host}/{b}/{o}', {
          host: 'storage.googleapis.com',
          b: file.bucket.name,
          o: encodeURIComponent(file.name)
        });

        file.bucket.storage.makeAuthorizedRequest_ = function(opts) {
          assert.equal(opts.uri, expectedPath);
          setImmediate(function() {
            done();
          });
          return new FakeDuplexify();
        };

        file.createReadStream();
      });

      it('should accept gzip encoding', function(done) {
        file.bucket.storage.makeAuthorizedRequest_ = function(opts) {
          assert.strictEqual(opts.gzip, true);
          setImmediate(function() {
            done();
          });
          return new FakeDuplexify();
        };

        file.createReadStream();
      });

      describe('errors', function() {
        var ERROR = new Error('Error.');

        beforeEach(function() {
          file.bucket.storage.makeAuthorizedRequest_ = function(opts) {
            var stream = (requestOverride || request)(opts);

            setImmediate(function() {
              stream.emit('error', ERROR);
            });

            return stream;
          };
        });

        it('should emit an error from authorizing', function(done) {
          file.createReadStream()
            .once('error', function(err) {
              assert.equal(err, ERROR);
              done();
            });
        });
      });
    });

    describe('request', function() {
      it('should get readable stream from request', function(done) {
        var fakeRequest = { a: 'b', c: 'd' };

        requestOverride = getFakeRequest();

        file.bucket.storage.makeAuthorizedRequest_ = function() {
          setImmediate(function() {
            assert.deepEqual(requestOverride.getRequestOptions(), fakeRequest);
            done();
          });

          return requestOverride(fakeRequest);
        };

        file.createReadStream();
      });

      it('should emit response event from request', function(done) {
        requestOverride = getFakeSuccessfulRequest('body');

        file.createReadStream({ validation: false })
          .on('response', function() {
            done();
          });
      });

      it('should unpipe stream from an error on the response', function(done) {
        var requestStream = through();

        file.bucket.storage.makeAuthorizedRequest_ = function() {
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

        var readStream = file.createReadStream();
      });

      it('should let util.handleResp handle the response', function(done) {
        var response = { a: 'b', c: 'd' };

        handleRespOverride = function(err, response_, body) {
          assert.strictEqual(err, null);
          assert.strictEqual(response_, response);
          assert.strictEqual(body, null);
          done();
        };

        file.bucket.storage.makeAuthorizedRequest_ = function() {
          var stream = through();
          setImmediate(function() {
            stream.emit('complete', response);
          });
          return stream;
        };

        file.createReadStream();
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
            });
        });
      });
    });

    describe('validation', function() {
      var data = 'test';

      var crc32cBase64 = new Buffer([crc.calculate(data)]).toString('base64');

      var md5HashBase64 = crypto.createHash('md5');
      md5HashBase64.update(data);
      md5HashBase64 = md5HashBase64.digest('base64');

      var fakeResponse = {
        crc32c: {
          headers: { 'x-goog-hash': 'crc32c=####' + crc32cBase64 }
        },
        md5: {
          headers: { 'x-goog-hash': 'md5=' + md5HashBase64 }
        }
      };

      beforeEach(function() {
        file.metadata.mediaLink = 'http://uri';

        file.bucket.storage.makeAuthorizedRequest_ = function(opts, callback) {
          if (callback) {
            (callback.onAuthorized || callback)(null, {});
          } else {
            return (requestOverride || requestCached)(opts);
          }
        };
      });

      it('should validate with crc32c', function(done) {
        requestOverride = getFakeSuccessfulRequest(data, fakeResponse.crc32c);

        file.createReadStream({ validation: 'crc32c' })
          .on('error', done)
          .on('complete', function() {
            done();
          });
      });

      it('should emit an error if crc32c validation fails', function(done) {
        requestOverride = getFakeSuccessfulRequest(
            'bad-data', fakeResponse.crc32c);

        file.createReadStream({ validation: 'crc32c' })
          .on('error', function(err) {
            assert.equal(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          });
      });

      it('should validate with md5', function(done) {
        requestOverride = getFakeSuccessfulRequest(data, fakeResponse.md5);

        file.createReadStream({ validation: 'md5' })
          .on('error', done)
          .on('complete', function() {
            done();
          });
      });

      it('should emit an error if md5 validation fails', function(done) {
        requestOverride = getFakeSuccessfulRequest(
            'bad-data', fakeResponse.crc32c);

        file.createReadStream({ validation: 'md5' })
          .on('error', function(err) {
            assert.equal(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          });
      });

      it('should default to md5 validation', function(done) {
        requestOverride = getFakeSuccessfulRequest(data, {
          headers: { 'x-goog-hash': 'md5=fakefakefake' }
        });

        file.createReadStream()
          .on('error', function(err) {
            assert.equal(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          });
      });

      describe('destroying the through stream', function() {
        it('should destroy after failed validation', function(done) {
          requestOverride = getFakeSuccessfulRequest(
              'bad-data', fakeResponse.crc32c);

          var readStream = file.createReadStream({ validation: 'md5' });
          readStream.end = done;
        });

        it('should destroy after successful validation', function(done) {
          requestOverride = getFakeSuccessfulRequest(data, fakeResponse.crc32c);

          var readStream = file.createReadStream({ validation: 'crc32c' });
          readStream.end = done;
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

        file.createReadStream({ start: startOffset });
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

        file.createReadStream({ end: endOffset });
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

        file.createReadStream({ start: startOffset, end: endOffset });
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

        file.createReadStream({ start: startOffset, end: endOffset });
      });

      it('should end the through stream', function(done) {
        requestOverride = getFakeSuccessfulRequest('body', { body: null });

        var readStream = file.createReadStream({ start: 100 });
        readStream.end = done;
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

        file.createReadStream({ end: endOffset });
      });
    });
  });

  describe('createWriteStream', function() {
    var METADATA = { a: 'b', c: 'd' };

    it('should return a stream', function() {
      assert(file.createWriteStream() instanceof stream);
    });

    it('should emit errors', function(done) {
      var error = new Error('Error.');

      file.bucket.storage.makeAuthorizedRequest_ = function(reqOpts, cb) {
        cb(error);
      };

      var writable = file.createWriteStream();

      writable.on('error', function(err) {
        assert.equal(err, error);
        done();
      });

      writable.write('data');
    });

    it('should re-emit errors', function(done) {
      var error = new Error('Error.');
      var requestCount = 0;
      file.bucket.storage.makeAuthorizedRequest_ = function(reqOpts, cb) {
        requestCount++;

        // respond to creation POST.
        if (requestCount === 1) {
          cb(null, null, { headers: { location: 'http://resume' }});
          return;
        }

        // create an authorized request for the first PUT.
        if (requestCount === 2) {
          cb.onAuthorized(null, { headers: {} });
        }
      };

      // respond to first upload PUT request.
      requestOverride = function() {
        var stream = through();
        setImmediate(function() {
          stream.emit('error', error);
        });
        return stream;
      };

      var stream = duplexify();

      stream
        .on('error', function(err) {
          assert.equal(err, error);
          done();
        });

      file.startResumableUpload_(stream);
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

    describe('validation', function() {
      var data = 'test';

      var crc32cBase64 = new Buffer([crc.calculate(data)]).toString('base64');

      var md5HashBase64 = crypto.createHash('md5');
      md5HashBase64.update(data);
      md5HashBase64 = md5HashBase64.digest('base64');

      var fakeMetadata = {
        crc32c: { crc32c: '####' + crc32cBase64 },
        md5: { md5Hash: md5HashBase64 }
      };

      it('should validate with crc32c', function(done) {
        var writable = file.createWriteStream({ validation: 'crc32c' });

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            stream.emit('complete', fakeMetadata.crc32c);
          });
        };

        writable.write(data);
        writable.end();

        writable
          .on('error', done)
          .on('complete', function() {
            done();
          });
      });

      it('should emit an error if crc32c validation fails', function(done) {
        var writable = file.createWriteStream({ validation: 'crc32c' });

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            stream.emit('complete', fakeMetadata.crc32c);
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
            stream.emit('complete', fakeMetadata.md5);
          });
        };

        writable.write(data);
        writable.end();

        writable
          .on('error', done)
          .on('complete', function() {
            done();
          });
      });

      it('should emit an error if md5 validation fails', function(done) {
        var writable = file.createWriteStream({ validation: 'md5' });

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            stream.emit('complete', fakeMetadata.md5);
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
            stream.emit('complete', { md5Hash: 'bad-hash' });
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
            stream.emit('complete', { md5Hash: 'bad-hash' });
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
            stream.emit('complete', { md5Hash: 'bad-hash' });
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
      storage.makeAuthorizedRequest_.getCredentials = function(callback) {
        callback(null, credentials);
      };
    });

    it('should create a signed policy', function(done) {
      file.getSignedPolicy({
        expiration: Math.round(Date.now() / 1000) + 5
      }, function(err, signedPolicy) {
        assert.ifError(err);
        assert.equal(typeof signedPolicy.string, 'string');
        assert.equal(typeof signedPolicy.base64, 'string');
        assert.equal(typeof signedPolicy.signature, 'string');
        done();
      });
    });

    it('should add key equality condition', function(done) {
      file.getSignedPolicy({
        expiration: Math.round(Date.now() / 1000) + 5
      }, function(err, signedPolicy) {
        var conditionString = '[\"eq\",\"$key\",\"' + file.name + '\"]';
        assert.ifError(err);
        assert(signedPolicy.string.indexOf(conditionString) > -1);
        done();
      });
    });

    it('should add ACL condtion', function(done) {
      file.getSignedPolicy({
        expiration: Math.round(Date.now() / 1000) + 5,
        acl: '<acl>'
      }, function(err, signedPolicy) {
        var conditionString = '{\"acl\":\"<acl>\"}';
        assert.ifError(err);
        assert(signedPolicy.string.indexOf(conditionString) > -1);
        done();
      });
    });

    describe('expiration', function() {
      it('should ISO encode expiration', function(done) {
        var expiration = Math.round(Date.now() / 1000) + 5;
        var expireDate = new Date(expiration);
        file.getSignedPolicy({
          expiration: expiration
        }, function(err, signedPolicy) {
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(expireDate.toISOString()) > -1);
          done();
        });
      });

      it('should throw if a date from the past is given', function() {
        var expirationTimestamp = Math.floor(Date.now() / 1000) - 1;
        assert.throws(function() {
          file.getSignedPolicy({
            expiration: expirationTimestamp
          }, function() {});
        }, /cannot be in the past/);
      });
    });

    describe('equality condition', function() {
      it('should add equality conditions (array of arrays)', function(done) {
        var expiration = Math.round(Date.now() / 1000) + 5;
        file.getSignedPolicy({
          expiration: expiration,
          equals: [['$<field>', '<value>']]
        }, function(err, signedPolicy) {
          var conditionString = '[\"eq\",\"$<field>\",\"<value>\"]';
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(conditionString) > -1);
          done();
        });
      });

      it('should add equality condition (array)', function(done) {
        var expiration = Math.round(Date.now() / 1000) + 5;
        file.getSignedPolicy({
          expiration: expiration,
          equals: ['$<field>', '<value>']
        }, function(err, signedPolicy) {
          var conditionString = '[\"eq\",\"$<field>\",\"<value>\"]';
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(conditionString) > -1);
          done();
        });
      });

      it('should throw if equal condition is not an array', function() {
        var expiration = Math.round(Date.now() / 1000) + 5;
        assert.throws(function() {
          file.getSignedPolicy({
            expiration: expiration,
            equals: [{}]
          }, function() {});
        }, /Equals condition must be an array/);
      });

      it('should throw if equal condition length is not 2', function() {
        var expiration = Math.round(Date.now() / 1000) + 5;
        assert.throws(function() {
          file.getSignedPolicy({
            expiration: expiration,
            equals: [['1', '2', '3']]
          }, function() {});
        }, /Equals condition must be an array of 2 elements/);
      });
    });

    describe('prefix conditions', function() {
      it('should add prefix conditions (array of arrays)', function(done) {
        var expiration = Math.round(Date.now() / 1000) + 5;
        file.getSignedPolicy({
          expiration: expiration,
          startsWith: [['$<field>', '<value>']]
        }, function(err, signedPolicy) {
          var conditionString = '[\"starts-with\",\"$<field>\",\"<value>\"]';
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(conditionString) > -1);
          done();
        });
      });

      it('should add prefix condition (array)', function(done) {
        var expiration = Math.round(Date.now() / 1000) + 5;
        file.getSignedPolicy({
          expiration: expiration,
          startsWith: ['$<field>', '<value>']
        }, function(err, signedPolicy) {
          var conditionString = '[\"starts-with\",\"$<field>\",\"<value>\"]';
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(conditionString) > -1);
          done();
        });
      });

      it('should throw if prexif condition is not an array', function() {
        var expiration = Math.round(Date.now() / 1000) + 5;
        assert.throws(function() {
          file.getSignedPolicy({
            expiration: expiration,
            startsWith: [{}]
          }, function() {});
        }, /StartsWith condition must be an array/);
      });

      it('should throw if prefix condition length is not 2', function() {
        var expiration = Math.round(Date.now() / 1000) + 5;
        assert.throws(function() {
          file.getSignedPolicy({
            expiration: expiration,
            startsWith: [['1', '2', '3']]
          }, function() {});
        }, /StartsWith condition must be an array of 2 elements/);
      });
    });

    describe('content length', function() {
      it('should add content length condition', function(done) {
        var expiration = Math.round(Date.now() / 1000) + 5;
        file.getSignedPolicy({
          expiration: expiration,
          contentLengthRange: {min: 0, max: 1}
        }, function(err, signedPolicy) {
          var conditionString = '[\"content-length-range\",0,1]';
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(conditionString) > -1);
          done();
        });
      });

      it('should throw if content length has no min', function() {
        var expiration = Math.round(Date.now() / 1000) + 5;
        assert.throws(function() {
          file.getSignedPolicy({
            expiration: expiration,
            contentLengthRange: [{max: 1}]
          }, function() {});
        }, /ContentLengthRange must have numeric min & max fields/);
      });

      it('should throw if content length has no max', function() {
        var expiration = Math.round(Date.now() / 1000) + 5;
        assert.throws(function() {
          file.getSignedPolicy({
            expiration: expiration,
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

    it('should URI encode file names', function(done) {
      directoryFile.getSignedUrl({
        action: 'read',
        expires: Math.round(Date.now() / 1000) + 5
      }, function(err, signedUrl) {
        assert(signedUrl.indexOf(encodeURIComponent(directoryFile.name)) > -1);
        done();
      });
    });

    it('should add response-content-type parameter', function(done) {
      var type = 'application/json';
      directoryFile.getSignedUrl({
        action: 'read',
        expires: Math.round(Date.now() / 1000) + 5,
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
          expires: Math.round(Date.now() / 1000) + 5,
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
          expires: Math.round(Date.now() / 1000) + 5,
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
          expires: Math.round(Date.now() / 1000) + 5,
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
    it('should execute callback', function(done) {
      file.makeReq_ = function(method, path, query, body, callback) {
        callback();
      };

      file.makePrivate(done);
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
    var RESUMABLE_URI = 'http://resume';

    beforeEach(function() {
      configStoreData = {};
    });

    describe('starting', function() {
      it('should start a resumable upload', function(done) {
        file.bucket.storage.makeAuthorizedRequest_ = function(reqOpts) {
          var uri = 'https://www.googleapis.com/upload/storage/v1/b/' +
            file.bucket.name + '/o';

          assert.equal(reqOpts.method, 'POST');
          assert.equal(reqOpts.uri, uri);
          assert.equal(reqOpts.qs.name, file.name);
          assert.equal(reqOpts.qs.uploadType, 'resumable');

          assert.deepEqual(reqOpts.headers, {
            'X-Upload-Content-Type': 'custom'
          });
          assert.deepEqual(reqOpts.json, { contentType: 'custom' });

          done();
        };

        file.startResumableUpload_(duplexify(), { contentType: 'custom' });
      });

      it('should send query.ifGenerationMatch if File has one', function(done) {
        var versionedFile = new File(bucket, 'new-file.txt', { generation: 1 });

        versionedFile.bucket.storage.makeAuthorizedRequest_ = function(rOpts) {
          assert.equal(rOpts.qs.ifGenerationMatch, 1);
          done();
        };

        versionedFile.startResumableUpload_(duplexify(), {});
      });

      it('should upload file', function(done) {
        var requestCount = 0;
        file.bucket.storage.makeAuthorizedRequest_ = function(reqOpts, cb) {
          requestCount++;

          // respond to creation POST.
          if (requestCount === 1) {
            cb(null, null, { headers: { location: RESUMABLE_URI }});
            assert.deepEqual(configStoreData[file.name].uri, RESUMABLE_URI);
            return;
          }

          // create an authorized request for the first PUT.
          if (requestCount === 2) {
            assert.equal(reqOpts.method, 'PUT');
            assert.equal(reqOpts.uri, RESUMABLE_URI);
            cb.onAuthorized(null, { headers: {} });
          }
        };

        // respond to first upload PUT request.
        var metadata = { a: 'b', c: 'd' };
        requestOverride = function(reqOpts) {
          assert.equal(reqOpts.headers['Content-Range'], 'bytes 0-*/*');

          var stream = through();
          setImmediate(function() {
            stream.emit('complete', { body: metadata });
          });
          return stream;
        };

        var stream = duplexify();

        stream
          .on('error', done)
          .on('complete', function(data) {
            assert.deepEqual(data, metadata);

            setImmediate(function() {
              // cache deleted.
              assert(!configStoreData[file.name]);
              done();
            });
          });

        file.startResumableUpload_(stream);
      });
    });

    describe('resuming', function() {
      beforeEach(function() {
        configStoreData[file.name] = {
          uri: RESUMABLE_URI
        };
      });

      it('should resume uploading from last sent byte', function(done) {
        var lastByte = 135;

        var requestCount = 0;
        file.bucket.storage.makeAuthorizedRequest_ = function(reqOpts, cb) {
          requestCount++;

          if (requestCount === 1) {
            assert.equal(reqOpts.method, 'PUT');
            assert.equal(reqOpts.uri, RESUMABLE_URI);
            assert.deepEqual(reqOpts.headers, {
              'Content-Length': 0,
              'Content-Range': 'bytes */*'
            });

            cb({
              code: 308, // resumable upload status code
              response: { headers: { range: '0-' + lastByte } }
            });

            return;
          }

          if (requestCount === 2) {
            assert.equal(reqOpts.method, 'PUT');
            assert.equal(reqOpts.uri, RESUMABLE_URI);

            cb.onAuthorized(null, { headers: {} });
          }
        };

        var metadata = { a: 'b', c: 'd' };
        requestOverride = function(reqOpts) {
          var startByte = lastByte + 1;
          assert.equal(
            reqOpts.headers['Content-Range'], 'bytes ' + startByte + '-*/*');

          var stream = through();
          setImmediate(function() {
            stream.emit('complete', { body: metadata });
          });
          return stream;
        };

        var stream = duplexify();

        stream
          .on('error', done)
          .on('complete', function(data) {
            assert.deepEqual(data, metadata);

            setImmediate(function() {
              // cache deleted.
              assert(!configStoreData[file.name]);
              done();
            });
          });

        file.startResumableUpload_(stream);
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
        .on('complete', function(meta) {
          assert.deepEqual(meta, metadata);
          assert.deepEqual(file.metadata, metadata);
          done();
        });

      file.startSimpleUpload_(ws, metadata);
    });
  });
});
