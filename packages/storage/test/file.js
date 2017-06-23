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
var crypto = require('crypto');
var duplexify;
var extend = require('extend');
var format = require('string-format-obj');
var fs = require('fs');
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var request = require('request');
var ServiceObject = require('@google-cloud/common').ServiceObject;
var stream = require('stream');
var through = require('through2');
var tmp = require('tmp');
var url = require('url');
var util = require('@google-cloud/common').util;

var Bucket = require('../src/bucket.js');

var promisified = false;
var makeWritableStreamOverride;
var handleRespOverride;
var fakeUtil = extend({}, util, {
  handleResp: function() {
    (handleRespOverride || util.handleResp).apply(null, arguments);
  },

  makeWritableStream: function() {
    var args = arguments;
    (makeWritableStreamOverride || util.makeWritableStream).apply(null, args);
  },

  promisifyAll: function(Class, options) {
    if (Class.name !== 'File') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['setEncryptionKey']);
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

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('File', function() {
  var File;
  var file;

  var FILE_NAME = 'file-name.png';
  var directoryFile;

  var STORAGE;
  var BUCKET;

  before(function() {
    File = proxyquire('../src/file.js', {
      'gcs-resumable-upload': fakeResumableUpload,
      request: fakeRequest,
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil
      }
    });
    duplexify = require('duplexify');
  });

  beforeEach(function() {
    STORAGE = {
      createBucket: util.noop,
      request: util.noop,
      makeAuthenticatedRequest: function(req, callback) {
        if (callback) {
          (callback.onAuthenticated || callback)(null, req);
        } else {
          return (requestOverride || requestCached)(req);
        }
      },
      bucket: function(name) {
        return new Bucket(this, name);
      }
    };

    BUCKET = new Bucket(STORAGE, 'bucket-name');

    file = new File(BUCKET, FILE_NAME);
    file.request = util.noop;

    directoryFile = new File(BUCKET, 'directory/file.jpg');
    directoryFile.request = util.noop;

    handleRespOverride = null;
    makeWritableStreamOverride = null;
    requestOverride = null;
    resumableUploadOverride = null;
  });

  describe('initialization', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should assign file name', function() {
      assert.equal(file.name, FILE_NAME);
    });

    it('should assign the bucket instance', function() {
      assert.strictEqual(file.bucket, BUCKET);
    });

    it('should assign the storage instance', function() {
      assert.strictEqual(file.storage, BUCKET.storage);
    });

    it('should strip a single leading slash', function() {
      var file = new File(BUCKET, '/name');
      assert.strictEqual(file.name, 'name');
    });

    it('should accept specifying a generation', function() {
      var file = new File(BUCKET, 'name', { generation: 2 });
      assert.equal(file.generation, 2);
    });

    it('should build a requestQueryObject from generation', function() {
      var file = new File(BUCKET, 'name', { generation: 2 });
      assert.deepStrictEqual(file.requestQueryObject, {
        generation: 2
      });
    });

    it('should inherit from ServiceObject', function() {
      assert(file instanceof ServiceObject);

      var calledWith = file.calledWith_[0];

      assert.strictEqual(calledWith.parent, BUCKET);
      assert.strictEqual(calledWith.baseUrl, '/o');
      assert.strictEqual(calledWith.id, encodeURIComponent(FILE_NAME));
    });

    it('should set a custom encryption key', function(done) {
      var key = 'key';

      var setEncryptionKey = File.prototype.setEncryptionKey;
      File.prototype.setEncryptionKey = function(key_) {
        File.prototype.setEncryptionKey = setEncryptionKey;
        assert.strictEqual(key_, key);
        done();
      };

      new File(BUCKET, FILE_NAME, { encryptionKey: key });
    });
  });

  describe('copy', function() {
    it('should throw if no destination is provided', function() {
      assert.throws(function() {
        file.copy();
      }, /Destination file should have a name\./);
    });

    it('should URI encode file names', function(done) {
      var newFile = new File(BUCKET, 'nested/file.jpg');

      var expectedPath = format('/rewriteTo/b/{destBucket}/o/{destName}', {
        destBucket: file.bucket.name,
        destName: encodeURIComponent(newFile.name)
      });

      directoryFile.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, expectedPath);
        done();
      };

      directoryFile.copy(newFile);
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      var newFile = new File(BUCKET, 'new-file');

      file.request = function(reqOpts, callback) {
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
      var versionedFile = new File(BUCKET, 'name', { generation: 1 });
      var newFile = new File(BUCKET, 'new-file');

      versionedFile.request = function(reqOpts) {
        assert.strictEqual(reqOpts.qs.sourceGeneration, 1);
        done();
      };

      versionedFile.copy(newFile, assert.ifError);
    });

    it('should accept an options object', function(done) {
      var newFile = new File(BUCKET, 'name');
      var options = {
        option: true
      };

      file.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.json, options);
        done();
      };

      file.copy(newFile, options, assert.ifError);
    });

    it('should pass through userProject', function(done) {
      var options = {
        userProject: 'user-project'
      };
      var originalOptions = extend({}, options);
      var newFile = new File(BUCKET, 'new-file');

      file.request = function(reqOpts) {
        assert.strictEqual(reqOpts.qs.userProject, options.userProject);
        assert.strictEqual(reqOpts.json.userProject, undefined);
        assert.deepStrictEqual(options, originalOptions);
        done();
      };

      file.copy(newFile, options, assert.ifError);
    });

    describe('destination types', function() {
      function assertPathEquals(file, expectedPath, callback) {
        file.request = function(reqOpts) {
          assert.strictEqual(reqOpts.uri, expectedPath);
          callback();
        };
      }

      it('should allow a string', function(done) {
        var newFileName = 'new-file-name.png';
        var expectedPath = format('/rewriteTo/b/{destBucket}/o/{destName}', {
          destBucket: file.bucket.name,
          destName: newFileName
        });
        assertPathEquals(file, expectedPath, done);
        file.copy(newFileName);
      });

      it('should allow a "gs://..." string', function(done) {
        var newFileName = 'gs://other-bucket/new-file-name.png';
        var expectedPath = format('/rewriteTo/b/{destBucket}/o/{destName}', {
          destBucket: 'other-bucket',
          destName: 'new-file-name.png'
        });
        assertPathEquals(file, expectedPath, done);
        file.copy(newFileName);
      });

      it('should allow a Bucket', function(done) {
        var expectedPath = format('/rewriteTo/b/{destBucket}/o/{destName}', {
          destBucket: BUCKET.name,
          destName: file.name
        });
        assertPathEquals(file, expectedPath, done);
        file.copy(BUCKET);
      });

      it('should allow a File', function(done) {
        var newFile = new File(BUCKET, 'new-file');
        var expectedPath = format('/rewriteTo/b/{destBucket}/o/{destName}', {
          destBucket: BUCKET.name,
          destName: newFile.name
        });
        assertPathEquals(file, expectedPath, done);
        file.copy(newFile);
      });

      it('should throw if a destination cannot be parsed', function() {
        assert.throws(function() {
          file.copy(function() {});
        }, /Destination file should have a name\./);
      });
    });

    describe('not finished copying', function() {
      var apiResponse = {
        rewriteToken: '...'
      };

      beforeEach(function() {
        file.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should continue attempting to copy', function(done) {
        var newFile = new File(BUCKET, 'new-file');

        file.request = function(reqOpts, callback) {
          file.copy = function(newFile_, options, callback) {
            assert.strictEqual(newFile_, newFile);
            assert.deepEqual(options, { token: apiResponse.rewriteToken });
            callback(); // done()
          };

          callback(null, apiResponse);
        };

        file.copy(newFile, done);
      });

      it('should make the subsequent correct API request', function(done) {
        var newFile = new File(BUCKET, 'new-file');

        file.request = function(reqOpts) {
          assert.strictEqual(reqOpts.qs.rewriteToken, apiResponse.rewriteToken);
          done();
        };

        file.copy(newFile, { token: apiResponse.rewriteToken }, assert.ifError);
      });
    });

    describe('returned File object', function() {
      beforeEach(function() {
        var resp = { success: true };
        file.request = function(reqOpts, callback) {
          callback(null, resp);
        };
      });

      it('should re-use file object if one is provided', function(done) {
        var newFile = new File(BUCKET, 'new-file');
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
          assert.equal(copiedFile.bucket.name, BUCKET.name);
          assert.equal(copiedFile.name, newFilename);
          done();
        });
      });

      it('should create new file on the destination bucket', function(done) {
        file.copy(BUCKET, function(err, copiedFile) {
          assert.ifError(err);
          assert.equal(copiedFile.bucket.name, BUCKET.name);
          assert.equal(copiedFile.name, file.name);
          done();
        });
      });

      it('should pass apiResponse into callback', function(done) {
        file.copy(BUCKET, function(err, copiedFile, apiResponse) {
          assert.ifError(err);
          assert.deepEqual({ success: true }, apiResponse);
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
      }, /Cannot use validation with file ranges \(start\/end\)\./);

      assert.throws(function() {
        file.createReadStream({
          validation: true,
          start: 3
        });
      }, /Cannot use validation with file ranges \(start\/end\)\./);

      assert.throws(function() {
        file.createReadStream({
          validation: true,
          end: 8
        });
      }, /Cannot use validation with file ranges \(start\/end\)\./);

      assert.doesNotThrow(function() {
        file.createReadStream({
          start: 3,
          end: 8
        });
      });
    });

    it('should send query.generation if File has one', function(done) {
      var versionedFile = new File(BUCKET, 'file.txt', { generation: 1 });

      versionedFile.requestStream = function(rOpts) {
        assert.equal(rOpts.qs.generation, 1);
        setImmediate(done);
        return duplexify();
      };

      versionedFile.createReadStream().resume();
    });

    it('should send query.userProject if provided', function(done) {
      var options = {
        userProject: 'user-project-id'
      };

      file.requestStream = function(rOpts) {
        assert.strictEqual(rOpts.qs.userProject, options.userProject);
        setImmediate(done);
        return duplexify();
      };

      file.createReadStream(options).resume();
    });

    it('should end request stream on error', function(done) {
      file.requestStream = getFakeSuccessfulRequest('body', { body: null });

      var readStream = file.createReadStream();

      readStream.resume();

      // Let the error handler from createReadStream assign.
      setImmediate(function() {
        readStream.emit('error');
        assert(file.requestStream.wasRequestAborted());
        assert(file.requestStream.wasRequestDestroyed());
        done();
      });
    });

    it('should confirm the abort method exists', function(done) {
      var reqStream = through();

      file.requestStream = function() {
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

        file.requestStream = function(opts) {
          assert.equal(opts.uri, expectedPath);
          setImmediate(function() {
            done();
          });
          return duplexify();
        };

        file.createReadStream().resume();
      });

      it('should accept gzip encoding', function(done) {
        file.requestStream = function(opts) {
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
          file.requestStream = function(opts) {
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

    describe('requestStream', function() {
      it('should get readable stream from request', function(done) {
        var fakeRequest = { a: 'b', c: 'd' };

        requestOverride = getFakeRequest();

        file.requestStream = function() {
          setImmediate(function() {
            assert.deepEqual(requestOverride.getRequestOptions(), fakeRequest);
            done();
          });

          return requestOverride(fakeRequest);
        };

        file.createReadStream().resume();
      });

      it('should emit response event from request', function(done) {
        file.requestStream = getFakeSuccessfulRequest('body');

        file.createReadStream({ validation: false })
          .on('response', function() {
            done();
          })
          .resume();
      });

      it('should let util.handleResp handle the response', function(done) {
        var response = { a: 'b', c: 'd' };

        handleRespOverride = function(err, response_, body) {
          assert.strictEqual(err, null);
          assert.strictEqual(response_, response);
          assert.strictEqual(body, null);
          done();
        };

        file.requestStream = function() {
          var stream = through();
          setImmediate(function() {
            stream.emit('response', response);
          });
          return stream;
        };

        file.createReadStream().resume();
      });

      it('should unpipe stream from an error on the response', function(done) {
        var requestStream = through();
        var readStream = file.createReadStream();

        file.requestStream = function() {
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

        readStream.resume();
      });

      it('should let handleResp handle the completed request', function(done) {
        var response = { a: 'b', c: 'd' };

        handleRespOverride = function(err, response_, body) {
          assert.strictEqual(err, null);
          assert.strictEqual(response_, response);
          assert.strictEqual(body, null);
          done();
        };

        file.requestStream = function() {
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
          file.requestStream = getFakeFailedRequest(ERROR);
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

        file.request = function(opts, cb) {
          if (cb) {
            (cb.onAuthenticated || cb)(null, {});
          } else {
            return (requestOverride || requestCached)(opts);
          }
        };
      });

      it('should destroy the stream on error', function(done) {
        var error = new Error('Error.');

        file.requestStream = getFakeSuccessfulRequest('data');

        handleRespOverride = function(err, resp, body, callback) {
          callback(error);
        };

        file.createReadStream({ validation: 'crc32c' })
          .on('error', function(err) {
            assert.strictEqual(err, error);

            setImmediate(function() {
              assert
                .strictEqual(file.requestStream.wasRequestDestroyed(), true);
              done();
            });
          })
          .resume();
      });

      it('should validate with crc32c', function(done) {
        file.requestStream =
          getFakeSuccessfulRequest(data, fakeResponse.crc32c);

        file.createReadStream({ validation: 'crc32c' })
          .on('error', done)
          .on('end', done)
          .resume();
      });

      it('should emit an error if crc32c validation fails', function(done) {
        file.requestStream = getFakeSuccessfulRequest(
          'bad-data',
          fakeResponse.crc32c
        );

        file.createReadStream({ validation: 'crc32c' })
          .on('error', function(err) {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      it('should validate with md5', function(done) {
        file.requestStream = getFakeSuccessfulRequest(data, fakeResponse.md5);

        file.createReadStream({ validation: 'md5' })
          .on('error', done)
          .on('end', done)
          .resume();
      });

      it('should emit an error if md5 validation fails', function(done) {
        file.requestStream =
          getFakeSuccessfulRequest('bad-data', fakeResponse.md5);

        file.createReadStream({ validation: 'md5' })
          .on('error', function(err) {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      it('should default to crc32c validation', function(done) {
        file.requestStream = getFakeSuccessfulRequest(data, {
          headers: { 'x-goog-hash': 'crc32c=fakefakefake' }
        });

        file.createReadStream()
          .on('error', function(err) {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      it('should ignore a data mismatch if validation: false', function(done) {
        file.requestStream = getFakeSuccessfulRequest(data, {
          headers: { 'x-goog-hash': 'crc32c=fakefakefake' }
        });

        file.createReadStream({ validation: false })
          .resume()
          .on('error', done)
          .on('end', done);
      });

      describe('destroying the through stream', function() {
        it('should destroy after failed validation', function(done) {
          file.requestStream = getFakeSuccessfulRequest(
            'bad-data',
            fakeResponse.md5
          );

          var readStream = file.createReadStream({ validation: 'md5' });
          readStream.destroy = function(err) {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          };
          readStream.resume();
        });

        it('should destroy if MD5 is requested but absent', function(done) {
          file.requestStream = getFakeSuccessfulRequest(
            'bad-data',
            fakeResponse.crc32c
          );

          var readStream = file.createReadStream({ validation: 'md5' });
          readStream.destroy = function(err) {
            assert.strictEqual(err.code, 'MD5_NOT_AVAILABLE');
            done();
          };
          readStream.resume();
        });
      });
    });

    describe('range requests', function() {
      it('should accept a start range', function(done) {
        var startOffset = 100;

        file.requestStream = function(opts) {
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

        file.requestStream = function(opts) {
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

        file.requestStream = function(opts) {
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

        file.requestStream = function(opts) {
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
        file.requestStream = getFakeSuccessfulRequest('body', { body: null });

        var readStream = file.createReadStream({ start: 100 });
        readStream.end = done;
        readStream.resume();
      });
    });

    describe('tail requests', function() {
      it('should make a request for the tail bytes', function(done) {
        var endOffset = -10;

        file.requestStream = function(opts) {
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
    it('should not require options', function(done) {
      resumableUploadOverride = {
        createURI: function(opts, callback) {
          assert.strictEqual(opts.metadata, undefined);
          callback();
        }
      };

      file.createResumableUpload(done);
    });

    it('should create a resumable upload URI', function(done) {
      var options = {
        metadata: {
          contentType: 'application/json'
        },
        origin: '*',
        userProject: 'user-project-id'
      };

      file.generation = 3;

      resumableUploadOverride = {
        createURI: function(opts, callback) {
          var bucket = file.bucket;
          var storage = bucket.storage;
          var authClient = storage.makeAuthenticatedRequest.authClient;

          assert.strictEqual(opts.authClient, authClient);
          assert.strictEqual(opts.bucket, bucket.name);
          assert.strictEqual(opts.file, file.name);
          assert.strictEqual(opts.generation, file.generation);
          assert.strictEqual(opts.metadata, options.metadata);
          assert.strictEqual(opts.origin, options.origin);
          assert.strictEqual(opts.userProject, options.userProject);

          callback();
        }
      };

      file.createResumableUpload(options, done);
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
      var options = {
        metadata: METADATA,
        resumable: false,
        customValue: true
      };
      var writable = file.createWriteStream(options);

      file.startSimpleUpload_ = function(stream, options_) {
        assert.deepEqual(options_, options);
        done();
      };

      writable.write('data');
    });

    it('should start a resumable upload if specified', function(done) {
      var options = {
        metadata: METADATA,
        resumable: true,
        customValue: true
      };
      var writable = file.createWriteStream(options);

      file.startResumableUpload_ = function(stream, options_) {
        assert.deepEqual(options_, options);
        done();
      };

      writable.write('data');
    });

    it('should default to a resumable upload', function(done) {
      var writable = file.createWriteStream({
        metadata: METADATA
      });

      file.startResumableUpload_ = function(stream, options) {
        assert.deepEqual(options.metadata, METADATA);
        done();
      };

      writable.write('data');
    });

    it('should set metadata.contentEncoding with gzip', function(done) {
      var writable = file.createWriteStream({ gzip: true });

      file.startResumableUpload_ = function(stream, options) {
        assert.strictEqual(options.metadata.contentEncoding, 'gzip');
        done();
      };

      writable.write('data');
    });

    it('should re-emit response event', function(done) {
      var writable = file.createWriteStream();
      var resp = {};

      file.startResumableUpload_ = function(stream) {
        stream.emit('response', resp);
      };

      writable.on('response', function(resp_) {
        assert.strictEqual(resp_, resp);
        done();
      });

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

      it('should ignore a data mismatch if validation: false', function(done) {
        var writable = file.createWriteStream({ validation: false });

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = { md5Hash: 'bad-hash' };
            stream.emit('complete');
          });
        };

        writable.write(data);
        writable.end();

        writable.on('error', done);
        writable.on('finish', done);
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

      it('should emit an error if MD5 is requested but absent', function(done) {
        var writable = file.createWriteStream({validation: 'md5'});

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = { crc32c: 'not-md5' };
            stream.emit('complete');
          });
        };

        file.delete = function(cb) {
          cb();
        };

        writable.write(data);
        writable.end();

        writable.on('error', function(err) {
          assert.equal(err.code, 'MD5_NOT_AVAILABLE');
          done();
        });
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
    it('should make the correct request', function(done) {
      file.parent.delete = function(options, callback) {
        assert.strictEqual(this, file);
        assert.deepEqual(options, {});
        callback(); // done()
      };

      file.delete(done);
    });

    it('should accept options', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      file.parent.delete = function(options_) {
        assert.deepStrictEqual(options_, options);
        done();
      };

      file.delete(options, assert.ifError);
    });

    it('should use requestQueryObject', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      file.requestQueryObject = {
        generation: 2
      };

      var expectedOptions = {
        a: 'b',
        c: 'd',
        generation: 2
      };

      file.parent.delete = function(options) {
        assert.deepStrictEqual(options, expectedOptions);
        done();
      };

      file.delete(options, assert.ifError);
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

  describe('exists', function() {
    it('should call parent exists function', function(done) {
      var options = {};

      file.parent.exists = function(options_, callback) {
        assert.strictEqual(options_, options);
        callback(); // done()
      };

      file.exists(options, done);
    });
  });

  describe('get', function() {
    it('should call parent get function', function(done) {
      var options = {};

      file.parent.get = function(options_, callback) {
        assert.strictEqual(options_, options);
        callback(); // done()
      };

      file.get(options, done);
    });
  });

  describe('getMetadata', function() {
    it('should make the correct request', function(done) {
      file.parent.getMetadata = function(options, callback) {
        assert.strictEqual(this, file);
        assert.deepEqual(options, {});
        callback(); // done()
      };

      file.getMetadata(done);
    });

    it('should accept options', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      file.parent.getMetadata = function(options_) {
        assert.deepStrictEqual(options_, options);
        done();
      };

      file.getMetadata(options, assert.ifError);
    });

    it('should use requestQueryObject', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      file.requestQueryObject = {
        generation: 2
      };

      var expectedOptions = {
        a: 'b',
        c: 'd',
        generation: 2
      };

      file.parent.getMetadata = function(options) {
        assert.deepStrictEqual(options, expectedOptions);
        done();
      };

      file.getMetadata(options, assert.ifError);
    });
  });

  describe('getSignedPolicy', function() {
    var credentials = require('./testdata/privateKeyFile.json');

    beforeEach(function() {
      var storage = BUCKET.storage;
      storage.getCredentials = function(callback) {
        callback(null, credentials);
      };
    });

    it('should create a signed policy', function(done) {
      file.getSignedPolicy({
        expires: Date.now() + 2000
      }, function(err, signedPolicy) {
        assert.ifError(err);
        assert.equal(typeof signedPolicy.string, 'string');
        assert.equal(typeof signedPolicy.base64, 'string');
        assert.equal(typeof signedPolicy.signature, 'string');
        done();
      });
    });

    it('should not modify the configuration object', function(done) {
      var config = {
        expires: Date.now() + 2000
      };

      var originalConfig = extend({}, config);

      file.getSignedPolicy(config, function(err) {
        assert.ifError(err);
        assert.deepEqual(config, originalConfig);
        done();
      });
    });

    it('should return an error if getCredentials errors', function(done) {
      var error = new Error('Error.');

      var storage = BUCKET.storage;
      storage.getCredentials = function(callback) {
        callback(error);
      };

      file.getSignedPolicy({
        expires: Date.now() + 2000
      }, function(err) {
        assert.strictEqual(err.name, 'SigningError');
        assert.strictEqual(err.message, error.message);
        done();
      });
    });

    it('should return an error if credentials are not present', function(done) {
      var storage = BUCKET.storage;
      storage.getCredentials = function(callback) {
        callback(null, {});
      };

      file.getSignedPolicy({
        expires: Date.now() + 2000
      }, function(err) {
        var errorMessage = [
          'Could not find a `private_key`.',
          'Please verify you are authorized with this property available.'
        ].join(' ');

        assert.strictEqual(err.name, 'SigningError');
        assert.strictEqual(err.message, errorMessage);
        done();
      });
    });

    it('should add key equality condition', function(done) {
      file.getSignedPolicy({
        expires: Date.now() + 2000
      }, function(err, signedPolicy) {
        var conditionString = '[\"eq\",\"$key\",\"' + file.name + '\"]';
        assert.ifError(err);
        assert(signedPolicy.string.indexOf(conditionString) > -1);
        done();
      });
    });

    it('should add ACL condtion', function(done) {
      file.getSignedPolicy({
        expires: Date.now() + 2000,
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
        expires: Date.now() + 2000,
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
        expires: Date.now() + 2000,
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
        }, /An expiration date cannot be in the past\./);
      });
    });

    describe('equality condition', function() {
      it('should add equality conditions (array of arrays)', function(done) {
        file.getSignedPolicy({
          expires: Date.now() + 2000,
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
          expires: Date.now() + 2000,
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
            expires: Date.now() + 2000,
            equals: [{}]
          }, function() {});
        }, /Equals condition must be an array of 2 elements\./);
      });

      it('should throw if equal condition length is not 2', function() {
        assert.throws(function() {
          file.getSignedPolicy({
            expires: Date.now() + 2000,
            equals: [['1', '2', '3']]
          }, function() {});
        }, /Equals condition must be an array of 2 elements\./);
      });
    });

    describe('prefix conditions', function() {
      it('should add prefix conditions (array of arrays)', function(done) {
        file.getSignedPolicy({
          expires: Date.now() + 2000,
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
          expires: Date.now() + 2000,
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
            expires: Date.now() + 2000,
            startsWith: [{}]
          }, function() {});
        }, /StartsWith condition must be an array of 2 elements\./);
      });

      it('should throw if prefix condition length is not 2', function() {
        assert.throws(function() {
          file.getSignedPolicy({
            expires: Date.now() + 2000,
            startsWith: [['1', '2', '3']]
          }, function() {});
        }, /StartsWith condition must be an array of 2 elements\./);
      });
    });

    describe('content length', function() {
      it('should add content length condition', function(done) {
        file.getSignedPolicy({
          expires: Date.now() + 2000,
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
            expires: Date.now() + 2000,
            contentLengthRange: [{max: 1}]
          }, function() {});
        }, /ContentLengthRange must have numeric min & max fields\./);
      });

      it('should throw if content length has no max', function() {
        assert.throws(function() {
          file.getSignedPolicy({
            expires: Date.now() + 2000,
            contentLengthRange: [{min: 0}]
          }, function() {});
        }, /ContentLengthRange must have numeric min & max fields\./);
      });
    });
  });

  describe('getSignedUrl', function() {
    var credentials = require('./testdata/privateKeyFile.json');

    beforeEach(function() {
      var storage = BUCKET.storage;
      storage.getCredentials = function(callback) {
        callback(null, credentials);
      };
    });

    it('should create a signed url', function(done) {
      file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 2000
      }, function(err, signedUrl) {
        assert.ifError(err);
        assert.equal(typeof signedUrl, 'string');
        done();
      });
    });

    it('should not modify the configuration object', function(done) {
      var config = {
        action: 'read',
        expires: Date.now() + 2000
      };

      var originalConfig = extend({}, config);

      file.getSignedUrl(config, function(err) {
        assert.ifError(err);
        assert.deepEqual(config, originalConfig);
        done();
      });
    });

    it('should return an error if getCredentials errors', function(done) {
      var error = new Error('Error.');

      var storage = BUCKET.storage;
      storage.getCredentials = function(callback) {
        callback(error);
      };

      file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 2000
      }, function(err) {
        assert.strictEqual(err.name, 'SigningError');
        assert.strictEqual(err.message, error.message);
        done();
      });
    });

    it('should return an error if credentials are not present', function(done) {
      var storage = BUCKET.storage;
      storage.getCredentials = function(callback) {
        callback(null, {});
      };

      file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 2000
      }, function(err) {
        var errorMessage = [
          'Could not find a `private_key` or `client_email`.',
          'Please verify you are authorized with these credentials available.'
        ].join(' ');

        assert.strictEqual(err.name, 'SigningError');
        assert.strictEqual(err.message, errorMessage);
        done();
      });
    });

    it('should URI encode file names', function(done) {
      directoryFile.getSignedUrl({
        action: 'read',
        expires: Date.now() + 2000,
      }, function(err, signedUrl) {
        assert(signedUrl.indexOf(encodeURIComponent(directoryFile.name)) > -1);
        done();
      });
    });

    it('should add response-content-type parameter', function(done) {
      var type = 'application/json';
      directoryFile.getSignedUrl({
        action: 'read',
        expires: Date.now() + 2000,
        responseType: type
      }, function(err, signedUrl) {
        assert(signedUrl.indexOf(encodeURIComponent(type)) > -1);
        done();
      });
    });

    it('should add generation parameter', function(done) {
      var generation = 10003320000;
      var file = new File(BUCKET, 'name', { generation: generation });
      file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 2000,
      }, function(err, signedUrl) {
        assert(signedUrl.indexOf(encodeURIComponent(generation)) > -1);
        done();
      });
    });

    describe('cname', function() {
      it('should use a provided cname', function(done) {
        var host = 'http://www.example.com';

        file.getSignedUrl({
          action: 'read',
          cname: host,
          expires: Date.now() + 2000
        }, function(err, signedUrl) {
          assert.ifError(err);
          assert.strictEqual(signedUrl.indexOf(host), 0);
          done();
        });
      });

      it('should remove trailing slashes from cname', function(done) {
        var host = 'http://www.example.com//';

        file.getSignedUrl({
          action: 'read',
          cname: host,
          expires: Date.now() + 2000
        }, function(err, signedUrl) {
          assert.ifError(err);
          assert.strictEqual(signedUrl.indexOf(host), -1);
          assert.strictEqual(signedUrl.indexOf(host.substr(0, -1)), 0);
          done();
        });
      });
    });

    describe('promptSaveAs', function() {
      it('should add response-content-disposition', function(done) {
        var disposition = 'attachment; filename="fname.ext"';
        directoryFile.getSignedUrl({
          action: 'read',
          expires: Date.now() + 2000,
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
          expires: Date.now() + 2000,
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
          expires: Date.now() + 2000,
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
        }, /An expiration date cannot be in the past\./);
      });
    });

    describe('extensionHeaders', function() {
      it('should add headers to signature', function(done) {
        var extensionHeaders = {
          'x-goog-acl': 'public-read',
          'x-foo': 'bar'
        };

        var expires = Date.now() + 2000;
        var expiresInSeconds = Math.round(expires / 1000);
        var name = encodeURIComponent(directoryFile.name);
        var resource = '/' + directoryFile.bucket.name + '/' + name;

        var sign = crypto.createSign('RSA-SHA256');

        sign.update([
          'GET',
          '',
          '',
          expiresInSeconds,
          'x-goog-acl:public-read\nx-foo:bar\n' + resource
        ].join('\n'));

        var expSignature = sign.sign(credentials.private_key, 'base64');

        directoryFile.getSignedUrl({
          action: 'read',
          expires: expires,
          extensionHeaders: extensionHeaders
        }, function(err, signedUrl) {
          assert.ifError(err);
          assert(signedUrl.indexOf(encodeURIComponent(expSignature)) > -1);
          done();
        });
      });
    });
  });

  describe('makePrivate', function() {
    it('should execute callback with API response', function(done) {
      var apiResponse = {};

      file.setMetadata = function(metadata, query, callback) {
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

      file.setMetadata = function(metadata, query, callback) {
        callback(error, apiResponse);
      };

      file.makePrivate(function(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);

        done();
      });
    });

    it('should make the file private to project by default', function(done) {
      file.setMetadata = function(metadata, query) {
        assert.deepStrictEqual(metadata, { acl: null });
        assert.deepEqual(query, { predefinedAcl: 'projectPrivate' });
        done();
      };

      file.makePrivate(util.noop);
    });

    it('should make the file private to user if strict = true', function(done) {
      file.setMetadata = function(metadata, query) {
        assert.deepEqual(query, { predefinedAcl: 'private' });
        done();
      };

      file.makePrivate({ strict: true }, util.noop);
    });

    it('should accept userProject', function(done) {
      var options = {
        userProject: 'user-project-id'
      };

      file.setMetadata = function(metadata, query) {
        assert.strictEqual(query.userProject, options.userProject);
        done();
      };

      file.makePrivate(options, assert.ifError);
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

  describe('move', function() {
    describe('copy to destination', function() {
      function assertCopyFile(file, expectedDestination, callback) {
        file.copy = function(destination) {
          assert.strictEqual(destination, expectedDestination);
          callback();
        };
      }

      it('should call copy with string', function(done) {
        var newFileName = 'new-file-name.png';
        assertCopyFile(file, newFileName, done);
        file.move(newFileName);
      });

      it('should call copy with Bucket', function(done) {
        assertCopyFile(file, BUCKET, done);
        file.move(BUCKET);
      });

      it('should call copy with File', function(done) {
        var newFile = new File(BUCKET, 'new-file');
        assertCopyFile(file, newFile, done);
        file.move(newFile);
      });

      it('should accept an options object', function(done) {
        var newFile = new File(BUCKET, 'name');
        var options = {};

        file.copy = function(destination, options_) {
          assert.strictEqual(options_, options);
          done();
        };

        file.move(newFile, options, assert.ifError);
      });

      it('should fail if copy fails', function(done) {
        var error = new Error('Error.');
        file.copy = function(destination, options, callback) {
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
        file.copy = function(destination, options, callback) {
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
        file.copy = function(destination, options, callback) {
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

      it('should pass options to delete', function(done) {
        var options = {};

        file.copy = function(destination, options, callback) {
          callback();
        };

        file.delete = function(options_) {
          assert.strictEqual(options_, options);
          done();
        };

        file.move('new-filename', options, assert.ifError);
      });

      it('should fail if delete fails', function(done) {
        var error = new Error('Error.');
        file.copy = function(destination, options, callback) {
          callback();
        };
        file.delete = function(options, callback) {
          callback(error);
        };
        file.move('new-filename', function(err) {
          assert.equal(err, error);
          done();
        });
      });
    });
  });

  describe('save', function() {
    var DATA = 'Data!';

    it('should accept an options object', function(done) {
      var options = {};

      file.createWriteStream = function(options_) {
        assert.strictEqual(options_, options);
        setImmediate(done);
        return new stream.PassThrough();
      };

      file.save(DATA, options, assert.ifError);
    });

    it('should not require options', function(done) {
      file.createWriteStream = function(options_) {
        assert.deepEqual(options_, {});
        setImmediate(done);
        return new stream.PassThrough();
      };

      file.save(DATA, assert.ifError);
    });

    it('should register the error listener', function(done) {
      file.createWriteStream = function() {
        var writeStream = new stream.PassThrough();
        writeStream.on('error', done);
        setImmediate(function() {
          writeStream.emit('error');
        });
        return writeStream;
      };

      file.save(DATA, assert.ifError);
    });

    it('should register the finish listener', function(done) {
      file.createWriteStream = function() {
        var writeStream = new stream.PassThrough();
        writeStream.once('finish', done);
        return writeStream;
      };

      file.save(DATA, assert.ifError);
    });

    it('should write the data', function(done) {
      file.createWriteStream = function() {
        var writeStream = new stream.PassThrough();
        writeStream.on('data', function(data) {
          assert.strictEqual(data.toString(), DATA);
          done();
        });
        return writeStream;
      };

      file.save(DATA, assert.ifError);
    });
  });

  describe('setMetadata', function() {
    it('should make the correct request', function(done) {
      var metadata = {};

      file.parent.setMetadata = function(metadata, options, callback) {
        assert.strictEqual(this, file);
        assert.deepEqual(options, {});
        callback(); // done()
      };

      file.setMetadata(metadata, done);
    });

    it('should accept options', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      file.parent.setMetadata = function(metadata, options_) {
        assert.deepStrictEqual(options_, options);
        done();
      };

      file.setMetadata({}, options, assert.ifError);
    });

    it('should use requestQueryObject', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      file.requestQueryObject = {
        generation: 2
      };

      var expectedOptions = {
        a: 'b',
        c: 'd',
        generation: 2
      };

      file.parent.setMetadata = function(metadata, options) {
        assert.deepStrictEqual(options, expectedOptions);
        done();
      };

      file.setMetadata({}, options, assert.ifError);
    });
  });

  describe('setStorageClass', function() {
    var STORAGE_CLASS = 'new_storage_class';

    it('should make the correct copy request', function(done) {
      file.copy = function(newFile, options) {
        assert.strictEqual(newFile, file);
        assert.deepEqual(options, {
          storageClass: STORAGE_CLASS.toUpperCase()
        });
        done();
      };

      file.setStorageClass(STORAGE_CLASS, assert.ifError);
    });

    it('should accept options', function(done) {
      var options = {
        a: 'b',
        c: 'd'
      };

      var expectedOptions = {
        a: 'b',
        c: 'd',
        storageClass: STORAGE_CLASS.toUpperCase()
      };

      file.copy = function(newFile, options) {
        assert.deepStrictEqual(options, expectedOptions);
        done();
      };

      file.setStorageClass(STORAGE_CLASS, options, assert.ifError);
    });

    it('should convert camelCase to snake_case', function(done) {
      file.copy = function(newFile, options) {
        assert.strictEqual(options.storageClass, 'CAMEL_CASE');
        done();
      };

      file.setStorageClass('camelCase', assert.ifError);
    });

    it('should convert hyphenate to snake_case', function(done) {
      file.copy = function(newFile, options) {
        assert.strictEqual(options.storageClass, 'HYPHENATED_CLASS');
        done();
      };

      file.setStorageClass('hyphenated-class', assert.ifError);
    });

    describe('error', function() {
      var ERROR = new Error('Error.');
      var API_RESPONSE = {};

      beforeEach(function() {
        file.copy = function(newFile, options, callback) {
          callback(ERROR, null, API_RESPONSE);
        };
      });

      it('should execute callback with error & API response', function(done) {
        file.setStorageClass(STORAGE_CLASS, function(err, apiResponse) {
          assert.strictEqual(err, ERROR);
          assert.strictEqual(apiResponse, API_RESPONSE);
          done();
        });
      });
    });

    describe('success', function() {
      var METADATA = {};

      var COPIED_FILE = {
        metadata: METADATA
      };

      var API_RESPONSE = {};

      beforeEach(function() {
        file.copy = function(newFile, options, callback) {
          callback(null, COPIED_FILE, API_RESPONSE);
        };
      });

      it('should update the metadata on the file', function(done) {
        file.setStorageClass(STORAGE_CLASS, function(err) {
          assert.ifError(err);
          assert.strictEqual(file.metadata, METADATA);
          done();
        });
      });

      it('should execute callback with api response', function(done) {
        file.setStorageClass(STORAGE_CLASS, function(err, apiResponse) {
          assert.ifError(err);
          assert.strictEqual(apiResponse, API_RESPONSE);
          done();
        });
      });
    });
  });

  describe('setEncryptionKey', function() {
    var KEY = crypto.randomBytes(32);
    var _file;

    beforeEach(function() {
      _file = file.setEncryptionKey(KEY);
    });

    it('should localize the key', function() {
      assert.strictEqual(file.encryptionKey, KEY);
    });

    it('should return the file instance', function() {
      assert.strictEqual(_file, file);
    });

    it('should push the correct request interceptor', function(done) {
      var base64Key = new Buffer(KEY).toString('base64');
      var base64KeyHash = crypto.createHash('sha256');
      base64KeyHash.update(base64Key, 'base64');

      assert.deepEqual(file.interceptors[0].request({}), {
        headers: {
          'x-goog-encryption-algorithm': 'AES256',
          'x-goog-encryption-key': base64Key,
          'x-goog-encryption-key-sha256': base64KeyHash.digest('base64')
        }
      });

      done();
    });
  });

  describe('startResumableUpload_', function() {
    describe('starting', function() {
      it('should start a resumable upload', function(done) {
        var options = {
          metadata: {},
          offset: 1234,
          public: true,
          private: false,
          predefinedAcl: 'allUsers',
          uri: 'http://resumable-uri',
          userProject: 'user-project-id'
        };

        file.generation = 3;
        file.encryptionKey = 'key';

        resumableUploadOverride = function(opts) {
          var bucket = file.bucket;
          var storage = bucket.storage;
          var authClient = storage.makeAuthenticatedRequest.authClient;

          assert.strictEqual(opts.authClient, authClient);
          assert.strictEqual(opts.bucket, bucket.name);
          assert.strictEqual(opts.file, file.name);
          assert.strictEqual(opts.generation, file.generation);
          assert.strictEqual(opts.key, file.encryptionKey);
          assert.strictEqual(opts.metadata, options.metadata);
          assert.strictEqual(opts.offset, options.offset);
          assert.strictEqual(opts.predefinedAcl, options.predefinedAcl);
          assert.strictEqual(opts.private, options.private);
          assert.strictEqual(opts.public, options.public);
          assert.strictEqual(opts.uri, options.uri);
          assert.strictEqual(opts.userProject, options.userProject);

          setImmediate(done);
          return through();
        };

        file.startResumableUpload_(duplexify(), options);
      });

      it('should emit the response', function(done) {
        var resp = {};
        var uploadStream = through();

        resumableUploadOverride = function() {
          setImmediate(function() {
            uploadStream.emit('response', resp);
          });
          return uploadStream;
        };

        uploadStream.on('response', function(resp_) {
          assert.strictEqual(resp_, resp);
          done();
        });

        file.startResumableUpload_(duplexify());
      });

      it('should set the metadata from the metadata event', function(done) {
        var metadata = {};
        var uploadStream = through();

        resumableUploadOverride = function() {
          setImmediate(function() {
            uploadStream.emit('metadata', metadata);

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
          var uploadStream = new stream.Transform();
          setImmediate(function() {
            uploadStream.end();
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
      var options = {
        metadata: {},
        predefinedAcl: 'allUsers',
        private: true,
        public: true
      };

      makeWritableStreamOverride = function(stream, options_) {
        assert.strictEqual(options_.metadata, options.metadata);
        assert.deepEqual(options_.request, {
          qs: {
            name: file.name,
            predefinedAcl: options.predefinedAcl
          },
          uri: 'https://www.googleapis.com/upload/storage/v1/b/' +
            file.bucket.name + '/o'
        });
        done();
      };

      file.startSimpleUpload_(duplexify(), options);
    });

    it('should set predefinedAcl when public: true', function(done) {
      makeWritableStreamOverride = function(stream, options_) {
        assert.strictEqual(options_.request.qs.predefinedAcl, 'publicRead');
        done();
      };

      file.startSimpleUpload_(duplexify(), { public: true });
    });

    it('should set predefinedAcl when private: true', function(done) {
      makeWritableStreamOverride = function(stream, options_) {
        assert.strictEqual(options_.request.qs.predefinedAcl, 'private');
        done();
      };

      file.startSimpleUpload_(duplexify(), { private: true });
    });

    it('should send query.ifGenerationMatch if File has one', function(done) {
      var versionedFile = new File(BUCKET, 'new-file.txt', { generation: 1 });

      makeWritableStreamOverride = function(stream, options) {
        assert.equal(options.request.qs.ifGenerationMatch, 1);
        done();
      };

      versionedFile.startSimpleUpload_(duplexify(), {});
    });

    it('should send userProject if set', function(done) {
      var options = {
        userProject: 'user-project-id'
      };

      makeWritableStreamOverride = function(stream, options_) {
        assert.equal(options_.request.qs.userProject, options.userProject);
        done();
      };

      file.startSimpleUpload_(duplexify(), options);
    });

    describe('request', function() {
      describe('error', function() {
        var error = new Error('Error.');

        beforeEach(function() {
          file.request = function(reqOpts, callback) {
            callback(error);
          };
        });

        it('should destroy the stream', function(done) {
          var stream = duplexify();

          file.startSimpleUpload_(stream);

          stream.on('error', function(err) {
            assert.strictEqual(stream.destroyed, true);
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('success', function() {
        var body = {};
        var resp = {};

        beforeEach(function() {
          file.request = function(reqOpts, callback) {
            callback(null, body, resp);
          };
        });

        it('should set the metadata', function() {
          var stream = duplexify();

          file.startSimpleUpload_(stream);

          assert.strictEqual(file.metadata, body);
        });

        it('should emit the response', function(done) {
          var stream = duplexify();

          stream.on('response', function(resp_) {
            assert.strictEqual(resp_, resp);
            done();
          });

          file.startSimpleUpload_(stream);
        });

        it('should emit complete', function(done) {
          var stream = duplexify();

          stream.on('complete', done);

          file.startSimpleUpload_(stream);
        });
      });
    });
  });
});
