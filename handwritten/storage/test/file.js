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

const assert = require('assert');
const Buffer = require('safe-buffer').Buffer;
const crypto = require('crypto');
let duplexify;
const extend = require('extend');
const fs = require('fs');
const nodeutil = require('util');
const proxyquire = require('proxyquire');
const request = require('request');
const ServiceObject = require('@google-cloud/common').ServiceObject;
const stream = require('stream');
const through = require('through2');
const tmp = require('tmp');
const url = require('url');
const util = require('@google-cloud/common').util;
const zlib = require('zlib');

const Bucket = require('../src/bucket.js');

let promisified = false;
let makeWritableStreamOverride;
let handleRespOverride;
const fakeUtil = extend({}, util, {
  handleResp: function() {
    (handleRespOverride || util.handleResp).apply(null, arguments);
  },

  makeWritableStream: function() {
    const args = arguments;
    (makeWritableStreamOverride || util.makeWritableStream).apply(null, args);
  },

  promisifyAll: function(Class, options) {
    if (Class.name !== 'File') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['setEncryptionKey']);
  },
});

const fsCached = extend(true, {}, fs);
const fakeFs = extend(true, {}, fsCached);

let REQUEST_DEFAULT_CONF; // eslint-disable-line no-unused-vars
const requestCached = request;
let requestOverride;
function fakeRequest() {
  return (requestOverride || requestCached).apply(null, arguments);
}
fakeRequest.defaults = function(defaultConfiguration) {
  // Ignore the default values, so we don't have to test for them in every API
  // call.
  REQUEST_DEFAULT_CONF = defaultConfiguration;
  return fakeRequest;
};

let hashStreamValidationOverride;
const hashStreamValidation = require('hash-stream-validation');
function fakeHashStreamValidation() {
  return (hashStreamValidationOverride || hashStreamValidation).apply(
    null,
    arguments
  );
}

const osCached = extend(true, {}, require('os'));
const fakeOs = extend(true, {}, osCached);

let resumableUploadOverride;
const resumableUpload = require('gcs-resumable-upload');
function fakeResumableUpload() {
  return (resumableUploadOverride || resumableUpload).apply(null, arguments);
}
fakeResumableUpload.createURI = function() {
  let createURI = resumableUpload.createURI;

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

let xdgConfigOverride;
const xdgBasedirCached = require('xdg-basedir');
const fakeXdgBasedir = extend(true, {}, xdgBasedirCached);
Object.defineProperty(fakeXdgBasedir, 'config', {
  get() {
    return xdgConfigOverride === false
      ? false
      : xdgConfigOverride || xdgBasedirCached.config;
  },
});

describe('File', function() {
  let File;
  let file;

  const FILE_NAME = 'file-name.png';
  let directoryFile;

  let STORAGE;
  let BUCKET;

  before(function() {
    File = proxyquire('../src/file.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
      fs: fakeFs,
      'gcs-resumable-upload': fakeResumableUpload,
      'hash-stream-validation': fakeHashStreamValidation,
      os: fakeOs,
      request: fakeRequest,
      'xdg-basedir': fakeXdgBasedir,
    });
    duplexify = require('duplexify');
  });

  beforeEach(function() {
    extend(true, fakeFs, fsCached);
    extend(true, fakeOs, osCached);
    xdgConfigOverride = null;
    FakeServiceObject.prototype.request = util.noop;

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
      },
    };

    BUCKET = new Bucket(STORAGE, 'bucket-name');
    file = new File(BUCKET, FILE_NAME);

    directoryFile = new File(BUCKET, 'directory/file.jpg');
    directoryFile.request = util.noop;

    handleRespOverride = null;
    hashStreamValidationOverride = null;
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
      const file = new File(BUCKET, '/name');
      assert.strictEqual(file.name, 'name');
    });

    it('should assign KMS key name', function() {
      const kmsKeyName = 'kms-key-name';
      const file = new File(BUCKET, '/name', {kmsKeyName});
      assert.strictEqual(file.kmsKeyName, kmsKeyName);
    });

    it('should accept specifying a generation', function() {
      const file = new File(BUCKET, 'name', {generation: 2});
      assert.equal(file.generation, 2);
    });

    it('should build a requestQueryObject from generation', function() {
      const file = new File(BUCKET, 'name', {generation: 2});
      assert.deepStrictEqual(file.requestQueryObject, {
        generation: 2,
      });
    });

    it('should inherit from ServiceObject', function() {
      assert(file instanceof ServiceObject);

      const calledWith = file.calledWith_[0];

      assert.strictEqual(calledWith.parent, BUCKET);
      assert.strictEqual(calledWith.baseUrl, '/o');
      assert.strictEqual(calledWith.id, encodeURIComponent(FILE_NAME));
    });

    it('should use stripped leading slash name in ServiceObject', function() {
      const file = new File(BUCKET, '/name');
      const calledWith = file.calledWith_[0];

      assert.strictEqual(calledWith.id, 'name');
    });

    it('should set a custom encryption key', function(done) {
      const key = 'key';

      const setEncryptionKey = File.prototype.setEncryptionKey;
      File.prototype.setEncryptionKey = function(key_) {
        File.prototype.setEncryptionKey = setEncryptionKey;
        assert.strictEqual(key_, key);
        done();
      };

      new File(BUCKET, FILE_NAME, {encryptionKey: key});
    });

    describe('userProject', function() {
      const USER_PROJECT = 'grapce-spaceship-123';

      it('should localize the Bucket#userProject', function() {
        const bucket = new Bucket(STORAGE, 'bucket-name', {
          userProject: USER_PROJECT,
        });

        const file = new File(bucket, '/name');
        assert.strictEqual(file.userProject, USER_PROJECT);
      });

      it('should accept a userProject option', function() {
        const file = new File(BUCKET, '/name', {
          userProject: USER_PROJECT,
        });

        assert.strictEqual(file.userProject, USER_PROJECT);
      });
    });
  });

  describe('copy', function() {
    it('should throw if no destination is provided', function() {
      assert.throws(function() {
        file.copy();
      }, /Destination file should have a name\./);
    });

    it('should URI encode file names', function(done) {
      const newFile = new File(BUCKET, 'nested/file.jpg');

      const expectedPath = `/rewriteTo/b/${
        file.bucket.name
      }/o/${encodeURIComponent(newFile.name)}`;

      directoryFile.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, expectedPath);
        done();
      };

      directoryFile.copy(newFile);
    });

    it('should execute callback with error & API response', function(done) {
      const error = new Error('Error.');
      const apiResponse = {};

      const newFile = new File(BUCKET, 'new-file');

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
      const versionedFile = new File(BUCKET, 'name', {generation: 1});
      const newFile = new File(BUCKET, 'new-file');

      versionedFile.request = function(reqOpts) {
        assert.strictEqual(reqOpts.qs.sourceGeneration, 1);
        done();
      };

      versionedFile.copy(newFile, assert.ifError);
    });

    it('should accept an options object', function(done) {
      const newFile = new File(BUCKET, 'name');
      const options = {
        option: true,
      };

      file.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.json, options);
        done();
      };

      file.copy(newFile, options, assert.ifError);
    });

    it('should pass through userProject', function(done) {
      const options = {
        userProject: 'user-project',
      };
      const originalOptions = extend({}, options);
      const newFile = new File(BUCKET, 'new-file');

      file.request = function(reqOpts) {
        assert.strictEqual(reqOpts.qs.userProject, options.userProject);
        assert.strictEqual(reqOpts.json.userProject, undefined);
        assert.deepStrictEqual(options, originalOptions);
        done();
      };

      file.copy(newFile, options, assert.ifError);
    });

    it('should set correct headers when file is encrypted', function(done) {
      file.encryptionKey = {};
      file.encryptionKeyBase64 = 'base64';
      file.encryptionKeyHash = 'hash';

      const newFile = new File(BUCKET, 'new-file');

      file.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.headers, {
          'x-goog-copy-source-encryption-algorithm': 'AES256',
          'x-goog-copy-source-encryption-key': file.encryptionKeyBase64,
          'x-goog-copy-source-encryption-key-sha256': file.encryptionKeyHash,
        });
        done();
      };

      file.copy(newFile, assert.ifError);
    });

    it('should set encryption key on the new File instance', function(done) {
      const newFile = new File(BUCKET, 'new-file');
      newFile.encryptionKey = 'encryptionKey';

      file.setEncryptionKey = function(encryptionKey) {
        assert.strictEqual(encryptionKey, newFile.encryptionKey);
        done();
      };

      file.copy(newFile, assert.ifError);
    });

    it('should set destination KMS key name', function(done) {
      const newFile = new File(BUCKET, 'new-file');
      newFile.kmsKeyName = 'kms-key-name';

      file.request = function(reqOpts) {
        assert.strictEqual(
          reqOpts.qs.destinationKmsKeyName,
          newFile.kmsKeyName
        );
        assert.strictEqual(file.kmsKeyName, newFile.kmsKeyName);
        done();
      };

      file.copy(newFile, assert.ifError);
    });

    it('should set destination KMS key name from option', function(done) {
      const newFile = new File(BUCKET, 'new-file');
      const destinationKmsKeyName = 'destination-kms-key-name';

      file.request = function(reqOpts) {
        assert.strictEqual(
          reqOpts.qs.destinationKmsKeyName,
          destinationKmsKeyName
        );
        assert.strictEqual(file.kmsKeyName, destinationKmsKeyName);
        done();
      };

      file.copy(newFile, {destinationKmsKeyName}, assert.ifError);
    });

    it('should favor the option over the File KMS name', function(done) {
      const newFile = new File(BUCKET, 'new-file');
      newFile.kmsKeyName = 'incorrect-kms-key-name';
      const destinationKmsKeyName = 'correct-kms-key-name';

      file.request = function(reqOpts) {
        assert.strictEqual(
          reqOpts.qs.destinationKmsKeyName,
          destinationKmsKeyName
        );
        assert.strictEqual(file.kmsKeyName, destinationKmsKeyName);
        done();
      };

      file.copy(newFile, {destinationKmsKeyName}, assert.ifError);
    });

    it('should remove custom encryption interceptor if rotating to KMS', function(done) {
      const newFile = new File(BUCKET, 'new-file');
      const destinationKmsKeyName = 'correct-kms-key-name';

      file.encryptionKeyInterceptor = {};
      file.interceptors = [{}, file.encryptionKeyInterceptor, {}];

      file.request = function() {
        assert.strictEqual(file.interceptors.length, 2);
        assert(file.interceptors.indexOf(file.encryptionKeyInterceptor) === -1);
        done();
      };

      file.copy(newFile, {destinationKmsKeyName}, assert.ifError);
    });

    describe('destination types', function() {
      function assertPathEquals(file, expectedPath, callback) {
        file.request = function(reqOpts) {
          assert.strictEqual(reqOpts.uri, expectedPath);
          callback();
        };
      }

      it('should allow a string', function(done) {
        const newFileName = 'new-file-name.png';
        const expectedPath = `/rewriteTo/b/${
          file.bucket.name
        }/o/${newFileName}`;
        assertPathEquals(file, expectedPath, done);
        file.copy(newFileName);
      });

      it('should allow a "gs://..." string', function(done) {
        const newFileName = 'gs://other-bucket/new-file-name.png';
        const expectedPath = `/rewriteTo/b/other-bucket/o/new-file-name.png`;
        assertPathEquals(file, expectedPath, done);
        file.copy(newFileName);
      });

      it('should allow a Bucket', function(done) {
        const expectedPath = `/rewriteTo/b/${BUCKET.name}/o/${file.name}`;
        assertPathEquals(file, expectedPath, done);
        file.copy(BUCKET);
      });

      it('should allow a File', function(done) {
        const newFile = new File(BUCKET, 'new-file');
        const expectedPath = `/rewriteTo/b/${BUCKET.name}/o/${newFile.name}`;
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
      const apiResponse = {
        rewriteToken: '...',
      };

      beforeEach(function() {
        file.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should continue attempting to copy', function(done) {
        const newFile = new File(BUCKET, 'new-file');

        file.request = function(reqOpts, callback) {
          file.copy = function(newFile_, options, callback) {
            assert.strictEqual(newFile_, newFile);
            assert.deepEqual(options, {token: apiResponse.rewriteToken});
            callback(); // done()
          };

          callback(null, apiResponse);
        };

        file.copy(newFile, done);
      });

      it('should pass the userProject in subsequent requests', function(done) {
        const newFile = new File(BUCKET, 'new-file');
        const fakeOptions = {
          userProject: 'grapce-spaceship-123',
        };

        file.request = function(reqOpts, callback) {
          file.copy = function(newFile_, options) {
            assert.notStrictEqual(options, fakeOptions);
            assert.strictEqual(options.userProject, fakeOptions.userProject);
            done();
          };

          callback(null, apiResponse);
        };

        file.copy(newFile, fakeOptions, assert.ifError);
      });

      it('should pass the KMS key name in subsequent requests', function(done) {
        const newFile = new File(BUCKET, 'new-file');
        const fakeOptions = {
          destinationKmsKeyName: 'kms-key-name',
        };

        file.request = function(reqOpts, callback) {
          file.copy = function(newFile_, options) {
            assert.strictEqual(
              options.destinationKmsKeyName,
              fakeOptions.destinationKmsKeyName
            );
            done();
          };

          callback(null, apiResponse);
        };

        file.copy(newFile, fakeOptions, assert.ifError);
      });

      it('should make the subsequent correct API request', function(done) {
        const newFile = new File(BUCKET, 'new-file');

        file.request = function(reqOpts) {
          assert.strictEqual(reqOpts.qs.rewriteToken, apiResponse.rewriteToken);
          done();
        };

        file.copy(newFile, {token: apiResponse.rewriteToken}, assert.ifError);
      });
    });

    describe('returned File object', function() {
      beforeEach(function() {
        const resp = {success: true};
        file.request = function(reqOpts, callback) {
          callback(null, resp);
        };
      });

      it('should re-use file object if one is provided', function(done) {
        const newFile = new File(BUCKET, 'new-file');
        file.copy(newFile, function(err, copiedFile) {
          assert.ifError(err);
          assert.deepEqual(copiedFile, newFile);
          done();
        });
      });

      it('should create new file on the same bucket', function(done) {
        const newFilename = 'new-filename';
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
          assert.deepEqual({success: true}, apiResponse);
          done();
        });
      });
    });
  });

  describe('createReadStream', function() {
    function getFakeRequest(data) {
      let requestOptions;

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
      }
      nodeutil.inherits(FakeRequest, stream.Readable);

      FakeRequest.getRequestOptions = function() {
        return requestOptions;
      };

      return FakeRequest;
    }

    function getFakeSuccessfulRequest(data) {
      const FakeRequest = getFakeRequest(data);

      function FakeSuccessfulRequest(req) {
        if (!(this instanceof FakeSuccessfulRequest)) {
          return new FakeSuccessfulRequest(req);
        }

        FakeRequest.apply(this, arguments);

        const self = this;

        setImmediate(function() {
          const stream = new FakeRequest();
          self.emit('response', stream);
        });
      }
      nodeutil.inherits(FakeSuccessfulRequest, FakeRequest);
      extend(FakeSuccessfulRequest, FakeRequest);

      return FakeSuccessfulRequest;
    }

    function getFakeFailedRequest(error) {
      const FakeRequest = getFakeRequest();

      function FakeFailedRequest() {
        if (!(this instanceof FakeFailedRequest)) {
          return new FakeFailedRequest();
        }

        FakeRequest.apply(this, arguments);

        const self = this;

        setImmediate(function() {
          self.emit('error', error);
        });
      }
      nodeutil.inherits(FakeFailedRequest, FakeRequest);
      extend(FakeFailedRequest, FakeRequest);

      return FakeFailedRequest;
    }

    beforeEach(function() {
      handleRespOverride = function(err, res, body, callback) {
        const rawResponseStream = through();
        rawResponseStream.toJSON = function() {
          return {headers: {}};
        };
        callback(null, null, rawResponseStream);
        setImmediate(function() {
          rawResponseStream.end();
        });
      };

      requestOverride = function() {
        return through();
      };
    });

    it('should throw if both a range and validation is given', function() {
      assert.throws(function() {
        file.createReadStream({
          validation: true,
          start: 3,
          end: 8,
        });
      }, /Cannot use validation with file ranges \(start\/end\)\./);

      assert.throws(function() {
        file.createReadStream({
          validation: true,
          start: 3,
        });
      }, /Cannot use validation with file ranges \(start\/end\)\./);

      assert.throws(function() {
        file.createReadStream({
          validation: true,
          end: 8,
        });
      }, /Cannot use validation with file ranges \(start\/end\)\./);

      assert.doesNotThrow(function() {
        file.createReadStream({
          start: 3,
          end: 8,
        });
      });
    });

    it('should send query.generation if File has one', function(done) {
      const versionedFile = new File(BUCKET, 'file.txt', {generation: 1});

      versionedFile.requestStream = function(rOpts) {
        assert.equal(rOpts.qs.generation, 1);
        setImmediate(done);
        return duplexify();
      };

      versionedFile.createReadStream().resume();
    });

    it('should send query.userProject if provided', function(done) {
      const options = {
        userProject: 'user-project-id',
      };

      file.requestStream = function(rOpts) {
        assert.strictEqual(rOpts.qs.userProject, options.userProject);
        setImmediate(done);
        return duplexify();
      };

      file.createReadStream(options).resume();
    });

    describe('authenticating', function() {
      it('should create an authenticated request', function(done) {
        file.requestStream = function(opts) {
          assert.deepEqual(opts, {
            forever: false,
            uri: '',
            headers: {
              'Accept-Encoding': 'gzip',
            },
            qs: {
              alt: 'media',
            },
          });
          setImmediate(function() {
            done();
          });
          return duplexify();
        };

        file.createReadStream().resume();
      });

      describe('errors', function() {
        const ERROR = new Error('Error.');

        beforeEach(function() {
          file.requestStream = function(opts) {
            const stream = requestOverride(opts);

            setImmediate(function() {
              stream.emit('error', ERROR);
            });

            return stream;
          };
        });

        it('should emit an error from authenticating', function(done) {
          file
            .createReadStream()
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
        const fakeRequest = {a: 'b', c: 'd'};

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

        file
          .createReadStream({validation: false})
          .on('response', function() {
            done();
          })
          .resume();
      });

      it('should let util.handleResp handle the response', function(done) {
        const response = {a: 'b', c: 'd'};

        handleRespOverride = function(err, response_, body) {
          assert.strictEqual(err, null);
          assert.strictEqual(response_, response);
          assert.strictEqual(body, null);
          done();
        };

        file.requestStream = function() {
          const stream = through();
          setImmediate(function() {
            stream.emit('response', response);
          });
          return stream;
        };

        file.createReadStream().resume();
      });

      describe('errors', function() {
        const ERROR = new Error('Error.');

        beforeEach(function() {
          file.requestStream = getFakeFailedRequest(ERROR);
        });

        it('should emit the error', function(done) {
          file
            .createReadStream()
            .once('error', function(err) {
              assert.deepEqual(err, ERROR);
              done();
            })
            .resume();
        });

        it('should parse a response stream for a better error', function(done) {
          const rawResponsePayload = 'error message from body';
          const rawResponseStream = through();
          const requestStream = through();

          handleRespOverride = function(err, res, body, callback) {
            callback(ERROR, null, res);

            setImmediate(function() {
              rawResponseStream.end(rawResponsePayload);
            });
          };

          file.requestStream = function() {
            setImmediate(function() {
              requestStream.emit('response', rawResponseStream);
            });
            return requestStream;
          };

          file
            .createReadStream()
            .once('error', function(err) {
              assert.strictEqual(err, ERROR);
              assert.strictEqual(err.message, rawResponsePayload);
              done();
            })
            .resume();
        });
      });
    });

    describe('compression', function() {
      const DATA = 'test data';
      const GZIPPED_DATA = zlib.gzipSync(DATA);

      beforeEach(function() {
        handleRespOverride = function(err, res, body, callback) {
          const rawResponseStream = through();
          rawResponseStream.toJSON = function() {
            return {
              headers: {
                'content-encoding': 'gzip',
              },
            };
          };

          callback(null, null, rawResponseStream);

          setImmediate(function() {
            rawResponseStream.end(GZIPPED_DATA);
          });
        };

        file.requestStream = getFakeSuccessfulRequest(GZIPPED_DATA);
      });

      it('should gunzip the response', function(done) {
        file
          .createReadStream()
          .once('error', done)
          .on('data', function(data) {
            assert.strictEqual(data.toString(), DATA);
            done();
          })
          .resume();
      });
    });

    describe('validation', function() {
      const data = 'test';
      let fakeValidationStream;

      beforeEach(function() {
        file.metadata.mediaLink = 'http://uri';

        file.getMetadata = function(options, callback) {
          file.metadata = {
            crc32c: '####wA==',
            md5Hash: 'CY9rzUYh03PK3k6DJie09g==',
          };
          callback();
        };

        fakeValidationStream = through();
        fakeValidationStream.test = function() {
          return true;
        };
        hashStreamValidationOverride = function() {
          return fakeValidationStream;
        };
      });

      it('should pass the userProject to getMetadata', function(done) {
        const fakeOptions = {
          userProject: 'grapce-spaceship-123',
        };

        file.getMetadata = function(options) {
          assert.strictEqual(options.userProject, fakeOptions.userProject);
          done();
        };

        file.requestStream = getFakeSuccessfulRequest(data);

        file
          .createReadStream(fakeOptions)
          .on('error', done)
          .resume();
      });

      it('should destroy stream from failed metadata fetch', function(done) {
        const error = new Error('Error.');
        file.getMetadata = function(options, callback) {
          callback(error);
        };

        file.requestStream = getFakeSuccessfulRequest('data');

        file
          .createReadStream()
          .on('error', function(err) {
            assert.strictEqual(err, error);
            done();
          })
          .resume();
      });

      it('should validate with crc32c', function(done) {
        file.requestStream = getFakeSuccessfulRequest(data);

        file
          .createReadStream({validation: 'crc32c'})
          .on('error', done)
          .on('end', done)
          .resume();
      });

      it('should emit an error if crc32c validation fails', function(done) {
        file.requestStream = getFakeSuccessfulRequest('bad-data');

        fakeValidationStream.test = function() {
          return false;
        };

        file
          .createReadStream({validation: 'crc32c'})
          .on('error', function(err) {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      it('should validate with md5', function(done) {
        file.requestStream = getFakeSuccessfulRequest(data);

        fakeValidationStream.test = function() {
          return true;
        };

        file
          .createReadStream({validation: 'md5'})
          .on('error', done)
          .on('end', done)
          .resume();
      });

      it('should emit an error if md5 validation fails', function(done) {
        file.requestStream = getFakeSuccessfulRequest('bad-data');

        fakeValidationStream.test = function() {
          return false;
        };

        file
          .createReadStream({validation: 'md5'})
          .on('error', function(err) {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      it('should default to crc32c validation', function(done) {
        file.getMetadata = function(options, callback) {
          file.metadata = {
            crc32c: file.metadata.crc32c,
          };
          callback();
        };

        file.requestStream = getFakeSuccessfulRequest(data);

        file
          .createReadStream()
          .on('error', function(err) {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      it('should ignore a data mismatch if validation: false', function(done) {
        file.requestStream = getFakeSuccessfulRequest(data);

        fakeValidationStream.test = function() {
          return false;
        };

        file
          .createReadStream({validation: false})
          .resume()
          .on('error', done)
          .on('end', done);
      });

      describe('destroying the through stream', function() {
        beforeEach(function() {
          fakeValidationStream.test = function() {
            return false;
          };
        });

        it('should destroy after failed validation', function(done) {
          file.requestStream = getFakeSuccessfulRequest('bad-data');

          const readStream = file.createReadStream({validation: 'md5'});
          readStream.destroy = function(err) {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          };
          readStream.resume();
        });

        it('should destroy if MD5 is requested but absent', function(done) {
          file.getMetadata = function(options, callback) {
            file.metadata = {
              crc32c: file.metadata.crc32c,
            };
            callback();
          };

          file.requestStream = getFakeSuccessfulRequest('bad-data');

          const readStream = file.createReadStream({validation: 'md5'});
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
        const startOffset = 100;

        file.requestStream = function(opts) {
          setImmediate(function() {
            assert.equal(opts.headers.Range, 'bytes=' + startOffset + '-');
            done();
          });
          return duplexify();
        };

        file.createReadStream({start: startOffset}).resume();
      });

      it('should accept an end range and set start to 0', function(done) {
        const endOffset = 100;

        file.requestStream = function(opts) {
          setImmediate(function() {
            assert.equal(opts.headers.Range, 'bytes=0-' + endOffset);
            done();
          });
          return duplexify();
        };

        file.createReadStream({end: endOffset}).resume();
      });

      it('should accept both a start and end range', function(done) {
        const startOffset = 100;
        const endOffset = 101;

        file.requestStream = function(opts) {
          setImmediate(function() {
            const expectedRange = 'bytes=' + startOffset + '-' + endOffset;
            assert.equal(opts.headers.Range, expectedRange);
            done();
          });
          return duplexify();
        };

        file.createReadStream({start: startOffset, end: endOffset}).resume();
      });

      it('should accept range start and end as 0', function(done) {
        const startOffset = 0;
        const endOffset = 0;

        file.requestStream = function(opts) {
          setImmediate(function() {
            const expectedRange = 'bytes=0-0';
            assert.equal(opts.headers.Range, expectedRange);
            done();
          });
          return duplexify();
        };

        file.createReadStream({start: startOffset, end: endOffset}).resume();
      });

      it('should end the through stream', function(done) {
        file.requestStream = getFakeSuccessfulRequest('body');

        const readStream = file.createReadStream({start: 100});
        readStream.end = done;
        readStream.resume();
      });
    });

    describe('tail requests', function() {
      it('should make a request for the tail bytes', function(done) {
        const endOffset = -10;

        file.requestStream = function(opts) {
          setImmediate(function() {
            assert.equal(opts.headers.Range, 'bytes=' + endOffset);
            done();
          });
          return duplexify();
        };

        file.createReadStream({end: endOffset}).resume();
      });
    });
  });

  describe('createResumableUpload', function() {
    it('should not require options', function(done) {
      resumableUploadOverride = {
        createURI: function(opts, callback) {
          assert.strictEqual(opts.metadata, undefined);
          callback();
        },
      };

      file.createResumableUpload(done);
    });

    it('should create a resumable upload URI', function(done) {
      const options = {
        metadata: {
          contentType: 'application/json',
        },
        origin: '*',
        predefinedAcl: 'predefined-acl',
        private: 'private',
        public: 'public',
        userProject: 'user-project-id',
      };

      file.generation = 3;
      file.encryptionKey = 'encryption-key';
      file.kmsKeyName = 'kms-key-name';

      resumableUploadOverride = {
        createURI: function(opts, callback) {
          const bucket = file.bucket;
          const storage = bucket.storage;

          assert.strictEqual(opts.authClient, storage.authClient);
          assert.strictEqual(opts.bucket, bucket.name);
          assert.strictEqual(opts.file, file.name);
          assert.strictEqual(opts.generation, file.generation);
          assert.strictEqual(opts.key, file.encryptionKey);
          assert.strictEqual(opts.kmsKeyName, file.kmsKeyName);
          assert.strictEqual(opts.metadata, options.metadata);
          assert.strictEqual(opts.origin, options.origin);
          assert.strictEqual(opts.predefinedAcl, options.predefinedAcl);
          assert.strictEqual(opts.private, options.private);
          assert.strictEqual(opts.public, options.public);
          assert.strictEqual(opts.userProject, options.userProject);

          callback();
        },
      };

      file.createResumableUpload(options, done);
    });
  });

  describe('createWriteStream', function() {
    const METADATA = {a: 'b', c: 'd'};

    beforeEach(function() {
      fakeFs.access = function(dir, check, callback) {
        // Assume that the required config directory is writable.
        callback();
      };
    });

    it('should return a stream', function() {
      assert(file.createWriteStream() instanceof stream);
    });

    it('should emit errors', function(done) {
      const error = new Error('Error.');
      const uploadStream = new stream.PassThrough();

      file.startResumableUpload_ = function(dup) {
        dup.setWritable(uploadStream);
        uploadStream.emit('error', error);
      };

      const writable = file.createWriteStream();

      writable.on('error', function(err) {
        assert.strictEqual(err, error);
        done();
      });

      writable.write('data');
    });

    it('should start a simple upload if specified', function(done) {
      const options = {
        metadata: METADATA,
        resumable: false,
        customValue: true,
      };
      const writable = file.createWriteStream(options);

      file.startSimpleUpload_ = function(stream, options_) {
        assert.deepEqual(options_, options);
        done();
      };

      writable.write('data');
    });

    it('should start a resumable upload if specified', function(done) {
      const options = {
        metadata: METADATA,
        resumable: true,
        customValue: true,
      };
      const writable = file.createWriteStream(options);

      file.startResumableUpload_ = function(stream, options_) {
        assert.deepEqual(options_, options);
        done();
      };

      writable.write('data');
    });

    it('should check if xdg-basedir is writable', function(done) {
      const fakeDir = 'fake-xdg-dir';

      xdgConfigOverride = fakeDir;

      fakeFs.access = function(dir) {
        assert.strictEqual(dir, fakeDir);
        done();
      };

      file.createWriteStream({resumable: true}).write('data');
    });

    it('should fall back to checking tmpdir', function(done) {
      const fakeDir = 'fake-tmp-dir';

      xdgConfigOverride = false;

      fakeOs.tmpdir = function() {
        return fakeDir;
      };

      fakeFs.access = function(dir) {
        assert.strictEqual(dir, fakeDir);
        done();
      };

      file.createWriteStream({resumable: true}).write('data');
    });

    it('should fail if resumable requested but not writable', function(done) {
      const error = new Error('Error.');

      fakeFs.access = function(dir, check, callback) {
        callback(error);
      };

      const writable = file.createWriteStream({resumable: true});

      writable.on('error', function(err) {
        assert.notStrictEqual(err, error);

        assert.strictEqual(err.name, 'ResumableUploadError');

        const configDir = xdgBasedirCached.config;

        assert.strictEqual(
          err.message,
          [
            'A resumable upload could not be performed. The directory,',
            `${configDir}, is not writable. You may try another upload,`,
            'this time setting `options.resumable` to `false`.',
          ].join(' ')
        );

        done();
      });

      writable.write('data');
    });

    it('should fall back to simple if not writable', function(done) {
      const options = {
        metadata: METADATA,
        customValue: true,
      };

      file.startSimpleUpload_ = function(stream, options_) {
        assert.deepEqual(options_, options);
        done();
      };

      fakeFs.access = function(dir, check, callback) {
        callback(new Error('Error.'));
      };

      file.createWriteStream(options).write('data');
    });

    it('should default to a resumable upload', function(done) {
      const writable = file.createWriteStream({
        metadata: METADATA,
      });

      file.startResumableUpload_ = function(stream, options) {
        assert.deepEqual(options.metadata, METADATA);
        done();
      };

      writable.write('data');
    });

    it('should alias contentType to metadata object', function(done) {
      const contentType = 'text/html';
      const writable = file.createWriteStream({contentType});

      file.startResumableUpload_ = function(stream, options) {
        assert.strictEqual(options.metadata.contentType, contentType);
        done();
      };

      writable.write('data');
    });

    it('should detect contentType with contentType:auto', function(done) {
      const writable = file.createWriteStream({contentType: 'auto'});

      file.startResumableUpload_ = function(stream, options) {
        assert.strictEqual(options.metadata.contentType, 'image/png');
        done();
      };

      writable.write('data');
    });

    it('should set encoding with gzip:true', function(done) {
      const writable = file.createWriteStream({gzip: true});

      file.startResumableUpload_ = function(stream, options) {
        assert.strictEqual(options.metadata.contentEncoding, 'gzip');
        done();
      };

      writable.write('data');
    });

    it('should set encoding with gzip:auto & compressible', function(done) {
      const writable = file.createWriteStream({
        gzip: 'auto',
        contentType: 'text/html', // (compressible)
      });

      file.startResumableUpload_ = function(stream, options) {
        assert.strictEqual(options.metadata.contentEncoding, 'gzip');
        done();
      };

      writable.write('data');
    });

    it('should not set encoding with gzip:auto & non-compressible', function(done) {
      const writable = file.createWriteStream({gzip: 'auto'});

      file.startResumableUpload_ = function(stream, options) {
        assert.strictEqual(options.metadata.contentEncoding, undefined);
        done();
      };

      writable.write('data');
    });

    it('should re-emit response event', function(done) {
      const writable = file.createWriteStream();
      const resp = {};

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
      const writable = file.createWriteStream({resumable: false});

      file.startSimpleUpload_ = function(stream) {
        assert.strictEqual(writable._corked, 0);
        stream.emit('prefinish');
        assert.strictEqual(writable._corked, 1);
        done();
      };

      writable.end('data');
    });

    describe('validation', function() {
      const data = 'test';

      const fakeMetadata = {
        crc32c: {crc32c: '####wA=='},
        md5: {md5Hash: 'CY9rzUYh03PK3k6DJie09g=='},
      };

      it('should uncork after successful write', function(done) {
        const writable = file.createWriteStream({validation: 'crc32c'});

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
        const writable = file.createWriteStream({validation: 'crc32c'});

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = fakeMetadata.crc32c;
            stream.emit('complete');
          });
        };

        writable.end(data);

        writable.on('error', done).on('finish', done);
      });

      it('should emit an error if crc32c validation fails', function(done) {
        const writable = file.createWriteStream({validation: 'crc32c'});

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
        const writable = file.createWriteStream({validation: 'md5'});

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = fakeMetadata.md5;
            stream.emit('complete');
          });
        };

        writable.write(data);
        writable.end();

        writable.on('error', done).on('finish', done);
      });

      it('should emit an error if md5 validation fails', function(done) {
        const writable = file.createWriteStream({validation: 'md5'});

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
        const writable = file.createWriteStream();

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = {md5Hash: 'bad-hash'};
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
        const writable = file.createWriteStream({validation: false});

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = {md5Hash: 'bad-hash'};
            stream.emit('complete');
          });
        };

        writable.write(data);
        writable.end();

        writable.on('error', done);
        writable.on('finish', done);
      });

      it('should delete the file if validation fails', function(done) {
        const writable = file.createWriteStream();

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = {md5Hash: 'bad-hash'};
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
        const writable = file.createWriteStream({validation: 'md5'});

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = {crc32c: 'not-md5'};
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
        const writable = file.createWriteStream();

        file.startResumableUpload_ = function(stream) {
          setImmediate(function() {
            file.metadata = {md5Hash: 'bad-hash'};
            stream.emit('complete');
          });
        };

        const deleteErrorMessage = 'Delete error message.';
        const deleteError = new Error(deleteErrorMessage);
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
      const options = {
        a: 'b',
        c: 'd',
      };

      file.parent.delete = function(options_) {
        assert.deepStrictEqual(options_, options);
        done();
      };

      file.delete(options, assert.ifError);
    });

    it('should use requestQueryObject', function(done) {
      const options = {
        a: 'b',
        c: 'd',
      };

      file.requestQueryObject = {
        generation: 2,
      };

      const expectedOptions = {
        a: 'b',
        c: 'd',
        generation: 2,
      };

      file.parent.delete = function(options) {
        assert.deepStrictEqual(options, expectedOptions);
        done();
      };

      file.delete(options, assert.ifError);
    });
  });

  describe('download', function() {
    let fileReadStream;

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
      const readOptions = {start: 100, end: 200};

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
        const fileContents = 'abcdefghijklmnopqrstuvwxyz';

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
        const error = new Error('Error.');

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

          const fileContents = 'abcdefghijklmnopqrstuvwxyz';

          fileReadStream._read = function() {
            this.push(fileContents);
            this.push(null);
          };

          file.download({destination: tmpFilePath}, function(err) {
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

          const error = new Error('Error.');

          fileReadStream._read = function() {
            this.emit('error', error);
          };

          file.download({destination: tmpFilePath}, function(err) {
            assert.equal(err, error);
            done();
          });
        });
      });
    });
  });

  describe('exists', function() {
    it('should call parent exists function', function(done) {
      const options = {};

      file.parent.exists = function(options_, callback) {
        assert.strictEqual(options_, options);
        callback(); // done()
      };

      file.exists(options, done);
    });
  });

  describe('get', function() {
    it('should call parent get function', function(done) {
      const options = {};

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
      const options = {
        a: 'b',
        c: 'd',
      };

      file.parent.getMetadata = function(options_) {
        assert.deepStrictEqual(options_, options);
        done();
      };

      file.getMetadata(options, assert.ifError);
    });

    it('should use requestQueryObject', function(done) {
      const options = {
        a: 'b',
        c: 'd',
      };

      file.requestQueryObject = {
        generation: 2,
      };

      const expectedOptions = {
        a: 'b',
        c: 'd',
        generation: 2,
      };

      file.parent.getMetadata = function(options) {
        assert.deepStrictEqual(options, expectedOptions);
        done();
      };

      file.getMetadata(options, assert.ifError);
    });
  });

  describe('getSignedPolicy', function() {
    const CONFIG = {
      expires: Date.now() + 2000,
    };

    beforeEach(function() {
      BUCKET.storage.authClient = {
        sign: function(blobToSign, callback) {
          callback(null, 'signature');
        },
      };
    });

    it('should create a signed policy', function(done) {
      BUCKET.storage.authClient.sign = function(blobToSign, callback) {
        const policy = Buffer.from(blobToSign, 'base64').toString();
        assert.strictEqual(typeof JSON.parse(policy), 'object');
        callback(null, 'signature');
      };

      file.getSignedPolicy(CONFIG, function(err, signedPolicy) {
        assert.ifError(err);
        assert.equal(typeof signedPolicy.string, 'string');
        assert.equal(typeof signedPolicy.base64, 'string');
        assert.equal(typeof signedPolicy.signature, 'string');
        done();
      });
    });

    it('should not modify the configuration object', function(done) {
      const originalConfig = extend({}, CONFIG);

      file.getSignedPolicy(CONFIG, function(err) {
        assert.ifError(err);
        assert.deepEqual(CONFIG, originalConfig);
        done();
      });
    });

    it('should return an error if signBlob errors', function(done) {
      const error = new Error('Error.');

      BUCKET.storage.authClient.sign = function(blobToSign, callback) {
        callback(error);
      };

      file.getSignedPolicy(CONFIG, function(err) {
        assert.strictEqual(err.name, 'SigningError');
        assert.strictEqual(err.message, error.message);
        done();
      });
    });

    it('should add key equality condition', function(done) {
      file.getSignedPolicy(CONFIG, function(err, signedPolicy) {
        const conditionString = '["eq","$key","' + file.name + '"]';
        assert.ifError(err);
        assert(signedPolicy.string.indexOf(conditionString) > -1);
        done();
      });
    });

    it('should add ACL condtion', function(done) {
      file.getSignedPolicy(
        {
          expires: Date.now() + 2000,
          acl: '<acl>',
        },
        function(err, signedPolicy) {
          const conditionString = '{"acl":"<acl>"}';
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(conditionString) > -1);
          done();
        }
      );
    });

    it('should add success redirect', function(done) {
      const redirectUrl = 'http://redirect';

      file.getSignedPolicy(
        {
          expires: Date.now() + 2000,
          successRedirect: redirectUrl,
        },
        function(err, signedPolicy) {
          assert.ifError(err);

          const policy = JSON.parse(signedPolicy.string);
          assert(
            policy.conditions.some(function(condition) {
              return condition.success_action_redirect === redirectUrl;
            })
          );

          done();
        }
      );
    });

    it('should add success status', function(done) {
      const successStatus = '200';

      file.getSignedPolicy(
        {
          expires: Date.now() + 2000,
          successStatus: successStatus,
        },
        function(err, signedPolicy) {
          assert.ifError(err);

          const policy = JSON.parse(signedPolicy.string);
          assert(
            policy.conditions.some(function(condition) {
              return condition.success_action_status === successStatus;
            })
          );

          done();
        }
      );
    });

    describe('expires', function() {
      it('should accept Date objects', function(done) {
        const expires = new Date(Date.now() + 1000 * 60);

        file.getSignedPolicy(
          {
            expires: expires,
          },
          function(err, policy) {
            assert.ifError(err);
            const expires_ = JSON.parse(policy.string).expiration;
            assert.strictEqual(expires_, expires.toISOString());
            done();
          }
        );
      });

      it('should accept numbers', function(done) {
        const expires = Date.now() + 1000 * 60;

        file.getSignedPolicy(
          {
            expires: expires,
          },
          function(err, policy) {
            assert.ifError(err);
            const expires_ = JSON.parse(policy.string).expiration;
            assert.strictEqual(expires_, new Date(expires).toISOString());
            done();
          }
        );
      });

      it('should accept strings', function(done) {
        const expires = '12-12-2099';

        file.getSignedPolicy(
          {
            expires: expires,
          },
          function(err, policy) {
            assert.ifError(err);
            const expires_ = JSON.parse(policy.string).expiration;
            assert.strictEqual(expires_, new Date(expires).toISOString());
            done();
          }
        );
      });

      it('should throw if a date from the past is given', function() {
        const expires = Date.now() - 5;

        assert.throws(function() {
          file.getSignedPolicy(
            {
              expires: expires,
            },
            function() {}
          );
        }, /An expiration date cannot be in the past\./);
      });
    });

    describe('equality condition', function() {
      it('should add equality conditions (array of arrays)', function(done) {
        file.getSignedPolicy(
          {
            expires: Date.now() + 2000,
            equals: [['$<field>', '<value>']],
          },
          function(err, signedPolicy) {
            const conditionString = '["eq","$<field>","<value>"]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          }
        );
      });

      it('should add equality condition (array)', function(done) {
        file.getSignedPolicy(
          {
            expires: Date.now() + 2000,
            equals: ['$<field>', '<value>'],
          },
          function(err, signedPolicy) {
            const conditionString = '["eq","$<field>","<value>"]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          }
        );
      });

      it('should throw if equal condition is not an array', function() {
        assert.throws(function() {
          file.getSignedPolicy(
            {
              expires: Date.now() + 2000,
              equals: [{}],
            },
            function() {}
          );
        }, /Equals condition must be an array of 2 elements\./);
      });

      it('should throw if equal condition length is not 2', function() {
        assert.throws(function() {
          file.getSignedPolicy(
            {
              expires: Date.now() + 2000,
              equals: [['1', '2', '3']],
            },
            function() {}
          );
        }, /Equals condition must be an array of 2 elements\./);
      });
    });

    describe('prefix conditions', function() {
      it('should add prefix conditions (array of arrays)', function(done) {
        file.getSignedPolicy(
          {
            expires: Date.now() + 2000,
            startsWith: [['$<field>', '<value>']],
          },
          function(err, signedPolicy) {
            const conditionString = '["starts-with","$<field>","<value>"]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          }
        );
      });

      it('should add prefix condition (array)', function(done) {
        file.getSignedPolicy(
          {
            expires: Date.now() + 2000,
            startsWith: ['$<field>', '<value>'],
          },
          function(err, signedPolicy) {
            const conditionString = '["starts-with","$<field>","<value>"]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          }
        );
      });

      it('should throw if prexif condition is not an array', function() {
        assert.throws(function() {
          file.getSignedPolicy(
            {
              expires: Date.now() + 2000,
              startsWith: [{}],
            },
            function() {}
          );
        }, /StartsWith condition must be an array of 2 elements\./);
      });

      it('should throw if prefix condition length is not 2', function() {
        assert.throws(function() {
          file.getSignedPolicy(
            {
              expires: Date.now() + 2000,
              startsWith: [['1', '2', '3']],
            },
            function() {}
          );
        }, /StartsWith condition must be an array of 2 elements\./);
      });
    });

    describe('content length', function() {
      it('should add content length condition', function(done) {
        file.getSignedPolicy(
          {
            expires: Date.now() + 2000,
            contentLengthRange: {min: 0, max: 1},
          },
          function(err, signedPolicy) {
            const conditionString = '["content-length-range",0,1]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          }
        );
      });

      it('should throw if content length has no min', function() {
        assert.throws(function() {
          file.getSignedPolicy(
            {
              expires: Date.now() + 2000,
              contentLengthRange: [{max: 1}],
            },
            function() {}
          );
        }, /ContentLengthRange must have numeric min & max fields\./);
      });

      it('should throw if content length has no max', function() {
        assert.throws(function() {
          file.getSignedPolicy(
            {
              expires: Date.now() + 2000,
              contentLengthRange: [{min: 0}],
            },
            function() {}
          );
        }, /ContentLengthRange must have numeric min & max fields\./);
      });
    });
  });

  describe('getSignedUrl', function() {
    const CONFIG = {
      action: 'read',
      expires: Date.now() + 2000,
    };

    beforeEach(function() {
      BUCKET.storage.authClient = {
        credentials: {
          client_email: 'client-email',
        },
        sign: function(blobToSign, callback) {
          callback(null, 'signature');
        },
      };
    });

    it('should create a signed url', function(done) {
      BUCKET.storage.authClient.sign = function(blobToSign, callback) {
        assert.deepStrictEqual(
          blobToSign,
          [
            'GET',
            '',
            '',
            Math.round(CONFIG.expires / 1000),
            `/${BUCKET.name}/${encodeURIComponent(file.name)}`,
          ].join('\n')
        );

        callback(null, 'signature');
      };

      file.getSignedUrl(CONFIG, function(err, signedUrl) {
        assert.ifError(err);
        assert.equal(typeof signedUrl, 'string');
        const expires = Math.round(CONFIG.expires / 1000);
        const expected =
          'https://storage.googleapis.com/bucket-name/file-name.png?' +
          'GoogleAccessId=client-email&Expires=' +
          expires +
          '&Signature=signature';
        assert.equal(signedUrl, expected);
        done();
      });
    });

    it('should not modify the configuration object', function(done) {
      const originalConfig = extend({}, CONFIG);

      file.getSignedUrl(CONFIG, function(err) {
        assert.ifError(err);
        assert.deepEqual(CONFIG, originalConfig);
        done();
      });
    });

    it('should set correct settings if resumable', function(done) {
      const config = extend({}, CONFIG, {
        action: 'resumable',
      });

      BUCKET.storage.authClient.sign = function(blobToSign) {
        assert.strictEqual(blobToSign.indexOf('POST'), 0);
        assert(blobToSign.indexOf('x-goog-resumable:start') > -1);
        done();
      };

      file.getSignedUrl(config, assert.ifError);
    });

    it('should return an error if signBlob errors', function(done) {
      const error = new Error('Error.');

      BUCKET.storage.authClient.sign = function(blobToSign, callback) {
        callback(error);
      };

      file.getSignedUrl(CONFIG, function(err) {
        assert.strictEqual(err.name, 'SigningError');
        assert.strictEqual(err.message, error.message);
        done();
      });
    });

    it('should URI encode file names', function(done) {
      directoryFile.getSignedUrl(CONFIG, function(err, signedUrl) {
        assert(signedUrl.indexOf(encodeURIComponent(directoryFile.name)) > -1);
        done();
      });
    });

    it('should add response-content-type parameter', function(done) {
      const type = 'application/json';

      directoryFile.getSignedUrl(
        {
          action: 'read',
          expires: Date.now() + 2000,
          responseType: type,
        },
        function(err, signedUrl) {
          assert(signedUrl.indexOf(encodeURIComponent(type)) > -1);
          done();
        }
      );
    });

    it('should add generation parameter', function(done) {
      const generation = 10003320000;
      const file = new File(BUCKET, 'name', {generation: generation});

      file.getSignedUrl(CONFIG, function(err, signedUrl) {
        assert(signedUrl.indexOf(encodeURIComponent(generation)) > -1);
        done();
      });
    });

    describe('cname', function() {
      it('should use a provided cname', function(done) {
        const host = 'http://www.example.com';

        file.getSignedUrl(
          {
            action: 'read',
            cname: host,
            expires: Date.now() + 2000,
          },
          function(err, signedUrl) {
            assert.ifError(err);
            assert.strictEqual(signedUrl.indexOf(host), 0);
            done();
          }
        );
      });

      it('should remove trailing slashes from cname', function(done) {
        const host = 'http://www.example.com//';

        file.getSignedUrl(
          {
            action: 'read',
            cname: host,
            expires: Date.now() + 2000,
          },
          function(err, signedUrl) {
            assert.ifError(err);
            assert.strictEqual(signedUrl.indexOf(host), -1);
            assert.strictEqual(signedUrl.indexOf(host.substr(0, -1)), 0);
            done();
          }
        );
      });
    });

    describe('promptSaveAs', function() {
      it('should add response-content-disposition', function(done) {
        const disposition = 'attachment; filename="fname.ext"';
        directoryFile.getSignedUrl(
          {
            action: 'read',
            expires: Date.now() + 2000,
            promptSaveAs: 'fname.ext',
          },
          function(err, signedUrl) {
            assert(signedUrl.indexOf(encodeURIComponent(disposition)) > -1);
            done();
          }
        );
      });
    });

    describe('responseDisposition', function() {
      it('should add response-content-disposition', function(done) {
        const disposition = 'attachment; filename="fname.ext"';
        directoryFile.getSignedUrl(
          {
            action: 'read',
            expires: Date.now() + 2000,
            responseDisposition: disposition,
          },
          function(err, signedUrl) {
            assert(signedUrl.indexOf(encodeURIComponent(disposition)) > -1);
            done();
          }
        );
      });

      it('should ignore promptSaveAs if set', function(done) {
        const disposition = 'attachment; filename="fname.ext"';
        const saveAs = 'fname2.ext';
        directoryFile.getSignedUrl(
          {
            action: 'read',
            expires: Date.now() + 2000,
            promptSaveAs: saveAs,
            responseDisposition: disposition,
          },
          function(err, signedUrl) {
            assert(signedUrl.indexOf(encodeURIComponent(disposition)) > -1);
            assert(signedUrl.indexOf(encodeURIComponent(saveAs)) === -1);
            done();
          }
        );
      });
    });

    describe('expires', function() {
      it('should accept Date objects', function(done) {
        const expires = new Date(Date.now() + 1000 * 60);
        const expectedExpires = Math.round(expires / 1000);

        file.getSignedUrl(
          {
            action: 'read',
            expires: expires,
          },
          function(err, signedUrl) {
            assert.ifError(err);
            const expires_ = url.parse(signedUrl, true).query.Expires;
            assert.equal(expires_, expectedExpires);
            done();
          }
        );
      });

      it('should accept numbers', function(done) {
        const expires = Date.now() + 1000 * 60;
        const expectedExpires = Math.round(new Date(expires) / 1000);

        file.getSignedUrl(
          {
            action: 'read',
            expires: expires,
          },
          function(err, signedUrl) {
            assert.ifError(err);
            const expires_ = url.parse(signedUrl, true).query.Expires;
            assert.equal(expires_, expectedExpires);
            done();
          }
        );
      });

      it('should accept strings', function(done) {
        const expires = '12-12-2099';
        const expectedExpires = Math.round(new Date(expires) / 1000);

        file.getSignedUrl(
          {
            action: 'read',
            expires: expires,
          },
          function(err, signedUrl) {
            assert.ifError(err);
            const expires_ = url.parse(signedUrl, true).query.Expires;
            assert.equal(expires_, expectedExpires);
            done();
          }
        );
      });

      it('should throw if a date from the past is given', function() {
        const expires = Date.now() - 5;

        assert.throws(function() {
          file.getSignedUrl(
            {
              action: 'read',
              expires: expires,
            },
            function() {}
          );
        }, /An expiration date cannot be in the past\./);
      });
    });

    describe('extensionHeaders', function() {
      it('should add headers to signature', function(done) {
        const extensionHeaders = {
          'x-goog-acl': 'public-read',
          'x-foo': 'bar',
        };

        BUCKET.storage.authClient.sign = function(blobToSign) {
          const headers = 'x-goog-acl:public-read\nx-foo:bar\n';
          assert(blobToSign.indexOf(headers) > -1);
          done();
        };

        directoryFile.getSignedUrl(
          {
            action: 'read',
            expires: Date.now() + 2000,
            extensionHeaders: extensionHeaders,
          },
          assert.ifError
        );
      });
    });
  });

  describe('makePrivate', function() {
    it('should execute callback with API response', function(done) {
      const apiResponse = {};

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
      const error = new Error('Error.');
      const apiResponse = {};

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
        assert.deepStrictEqual(metadata, {acl: null});
        assert.deepEqual(query, {predefinedAcl: 'projectPrivate'});
        done();
      };

      file.makePrivate(util.noop);
    });

    it('should make the file private to user if strict = true', function(done) {
      file.setMetadata = function(metadata, query) {
        assert.deepEqual(query, {predefinedAcl: 'private'});
        done();
      };

      file.makePrivate({strict: true}, util.noop);
    });

    it('should accept userProject', function(done) {
      const options = {
        userProject: 'user-project-id',
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
        assert.deepEqual(options, {entity: 'allUsers', role: 'READER'});
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
        const newFileName = 'new-file-name.png';
        assertCopyFile(file, newFileName, done);
        file.move(newFileName);
      });

      it('should call copy with Bucket', function(done) {
        assertCopyFile(file, BUCKET, done);
        file.move(BUCKET);
      });

      it('should call copy with File', function(done) {
        const newFile = new File(BUCKET, 'new-file');
        assertCopyFile(file, newFile, done);
        file.move(newFile);
      });

      it('should accept an options object', function(done) {
        const newFile = new File(BUCKET, 'name');
        const options = {};

        file.copy = function(destination, options_) {
          assert.strictEqual(options_, options);
          done();
        };

        file.move(newFile, options, assert.ifError);
      });

      it('should fail if copy fails', function(done) {
        const error = new Error('Error.');
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
        let deleteCalled = false;
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
        const options = {};

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
        const error = new Error('Error.');
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

  describe('request', function() {
    const USER_PROJECT = 'grape-spaceship-123';

    beforeEach(function() {
      file.userProject = USER_PROJECT;
    });

    it('should set the userProject if qs is undefined', function(done) {
      FakeServiceObject.prototype.request = function(reqOpts) {
        assert.strictEqual(reqOpts.qs.userProject, USER_PROJECT);
        done();
      };

      file.request({}, assert.ifError);
    });

    it('should set the userProject if field is undefined', function(done) {
      const options = {
        qs: {
          foo: 'bar',
        },
      };

      FakeServiceObject.prototype.request = function(reqOpts) {
        assert.strictEqual(reqOpts.qs, options.qs);
        assert.strictEqual(reqOpts.qs.userProject, USER_PROJECT);
        done();
      };

      file.request(options, assert.ifError);
    });

    it('should not overwrite the userProject', function(done) {
      const fakeUserProject = 'not-grape-spaceship-123';
      const options = {
        qs: {
          userProject: fakeUserProject,
        },
      };

      FakeServiceObject.prototype.request = function(reqOpts) {
        assert.strictEqual(reqOpts.qs.userProject, fakeUserProject);
        done();
      };

      file.request(options, assert.ifError);
    });

    it('should call ServiceObject#request correctly', function(done) {
      const options = {};

      FakeServiceObject.prototype.request = function(reqOpts, callback) {
        assert.strictEqual(this, file);
        assert.strictEqual(reqOpts, options);
        callback(); // done fn
      };

      file.request(options, done);
    });
  });

  describe('rotateEncryptionKey', function() {
    it('should create new File correctly', function(done) {
      const options = {};

      file.bucket.file = function(id, options_) {
        assert.strictEqual(id, file.id);
        assert.strictEqual(options_, options);
        done();
      };

      file.rotateEncryptionKey(options, assert.ifError);
    });

    it('should default to customer-supplied encryption key', function(done) {
      const encryptionKey = 'encryption-key';

      file.bucket.file = function(id, options) {
        assert.strictEqual(options.encryptionKey, encryptionKey);
        done();
      };

      file.rotateEncryptionKey(encryptionKey, assert.ifError);
    });

    it('should accept a Buffer for customer-supplied encryption key', function(done) {
      const encryptionKey = crypto.randomBytes(32);

      file.bucket.file = function(id, options) {
        assert.strictEqual(options.encryptionKey, encryptionKey);
        done();
      };

      file.rotateEncryptionKey(encryptionKey, assert.ifError);
    });

    it('should call copy correctly', function(done) {
      const newFile = {};

      file.bucket.file = function() {
        return newFile;
      };

      file.copy = function(destination, callback) {
        assert.strictEqual(destination, newFile);
        callback(); // done()
      };

      file.rotateEncryptionKey({}, done);
    });
  });

  describe('save', function() {
    const DATA = 'Data!';

    it('should accept an options object', function(done) {
      const options = {};

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
        const writeStream = new stream.PassThrough();
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
        const writeStream = new stream.PassThrough();
        writeStream.once('finish', done);
        return writeStream;
      };

      file.save(DATA, assert.ifError);
    });

    it('should write the data', function(done) {
      file.createWriteStream = function() {
        const writeStream = new stream.PassThrough();
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
      const metadata = {};

      file.parent.setMetadata = function(metadata, options, callback) {
        assert.strictEqual(this, file);
        assert.deepEqual(options, {});
        callback(); // done()
      };

      file.setMetadata(metadata, done);
    });

    it('should accept options', function(done) {
      const options = {
        a: 'b',
        c: 'd',
      };

      file.parent.setMetadata = function(metadata, options_) {
        assert.deepStrictEqual(options_, options);
        done();
      };

      file.setMetadata({}, options, assert.ifError);
    });

    it('should use requestQueryObject', function(done) {
      const options = {
        a: 'b',
        c: 'd',
      };

      file.requestQueryObject = {
        generation: 2,
      };

      const expectedOptions = {
        a: 'b',
        c: 'd',
        generation: 2,
      };

      file.parent.setMetadata = function(metadata, options) {
        assert.deepStrictEqual(options, expectedOptions);
        done();
      };

      file.setMetadata({}, options, assert.ifError);
    });
  });

  describe('setStorageClass', function() {
    const STORAGE_CLASS = 'new_storage_class';

    it('should make the correct copy request', function(done) {
      file.copy = function(newFile, options) {
        assert.strictEqual(newFile, file);
        assert.deepEqual(options, {
          storageClass: STORAGE_CLASS.toUpperCase(),
        });
        done();
      };

      file.setStorageClass(STORAGE_CLASS, assert.ifError);
    });

    it('should accept options', function(done) {
      const options = {
        a: 'b',
        c: 'd',
      };

      const expectedOptions = {
        a: 'b',
        c: 'd',
        storageClass: STORAGE_CLASS.toUpperCase(),
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
      const ERROR = new Error('Error.');
      const API_RESPONSE = {};

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
      const METADATA = {};

      const COPIED_FILE = {
        metadata: METADATA,
      };

      const API_RESPONSE = {};

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
    const KEY = crypto.randomBytes(32);
    const KEY_BASE64 = Buffer.from(KEY).toString('base64');
    const KEY_HASH = crypto
      .createHash('sha256')
      .update(KEY_BASE64, 'base64')
      .digest('base64');
    let _file;

    beforeEach(function() {
      _file = file.setEncryptionKey(KEY);
    });

    it('should localize the key', function() {
      assert.strictEqual(file.encryptionKey, KEY);
    });

    it('should localize the base64 key', function() {
      assert.strictEqual(file.encryptionKeyBase64, KEY_BASE64);
    });

    it('should localize the hash', function() {
      assert.strictEqual(file.encryptionKeyHash, KEY_HASH);
    });

    it('should return the file instance', function() {
      assert.strictEqual(_file, file);
    });

    it('should push the correct request interceptor', function(done) {
      const expectedInterceptor = {
        headers: {
          'x-goog-encryption-algorithm': 'AES256',
          'x-goog-encryption-key': KEY_BASE64,
          'x-goog-encryption-key-sha256': KEY_HASH,
        },
      };

      assert.deepStrictEqual(
        file.interceptors[0].request({}),
        expectedInterceptor
      );
      assert.deepStrictEqual(
        file.encryptionKeyInterceptor.request({}),
        expectedInterceptor
      );

      done();
    });
  });

  describe('startResumableUpload_', function() {
    describe('starting', function() {
      it('should start a resumable upload', function(done) {
        const options = {
          metadata: {},
          offset: 1234,
          public: true,
          private: false,
          predefinedAcl: 'allUsers',
          uri: 'http://resumable-uri',
          userProject: 'user-project-id',
        };

        file.generation = 3;
        file.encryptionKey = 'key';
        file.kmsKeyName = 'kms-key-name';

        resumableUploadOverride = function(opts) {
          const bucket = file.bucket;
          const storage = bucket.storage;

          assert.strictEqual(opts.authClient, storage.authClient);
          assert.strictEqual(opts.bucket, bucket.name);
          assert.strictEqual(opts.file, file.name);
          assert.strictEqual(opts.generation, file.generation);
          assert.strictEqual(opts.key, file.encryptionKey);
          assert.strictEqual(opts.kmsKeyName, file.kmsKeyName);
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
        const resp = {};
        const uploadStream = through();

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
        const metadata = {};
        const uploadStream = through();

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
        const dup = duplexify();

        dup.on('complete', done);

        resumableUploadOverride = function() {
          const uploadStream = new stream.Transform();
          setImmediate(function() {
            uploadStream.end();
          });
          return uploadStream;
        };

        file.startResumableUpload_(dup);
      });

      it('should set the writable stream', function(done) {
        const dup = duplexify();
        const uploadStream = through();

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
      const options = {
        metadata: {},
        predefinedAcl: 'allUsers',
        private: true,
        public: true,
      };

      makeWritableStreamOverride = function(stream, options_) {
        assert.strictEqual(options_.metadata, options.metadata);
        assert.deepEqual(options_.request, {
          qs: {
            name: file.name,
            predefinedAcl: options.predefinedAcl,
          },
          uri:
            'https://www.googleapis.com/upload/storage/v1/b/' +
            file.bucket.name +
            '/o',
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

      file.startSimpleUpload_(duplexify(), {public: true});
    });

    it('should set predefinedAcl when private: true', function(done) {
      makeWritableStreamOverride = function(stream, options_) {
        assert.strictEqual(options_.request.qs.predefinedAcl, 'private');
        done();
      };

      file.startSimpleUpload_(duplexify(), {private: true});
    });

    it('should send query.ifGenerationMatch if File has one', function(done) {
      const versionedFile = new File(BUCKET, 'new-file.txt', {generation: 1});

      makeWritableStreamOverride = function(stream, options) {
        assert.equal(options.request.qs.ifGenerationMatch, 1);
        done();
      };

      versionedFile.startSimpleUpload_(duplexify(), {});
    });

    it('should send query.kmsKeyName if File has one', function(done) {
      file.kmsKeyName = 'kms-key-name';

      makeWritableStreamOverride = function(stream, options) {
        assert.strictEqual(options.request.qs.kmsKeyName, file.kmsKeyName);
        done();
      };

      file.startSimpleUpload_(duplexify(), {});
    });

    it('should send userProject if set', function(done) {
      const options = {
        userProject: 'user-project-id',
      };

      makeWritableStreamOverride = function(stream, options_) {
        assert.equal(options_.request.qs.userProject, options.userProject);
        done();
      };

      file.startSimpleUpload_(duplexify(), options);
    });

    describe('request', function() {
      describe('error', function() {
        const error = new Error('Error.');

        beforeEach(function() {
          file.request = function(reqOpts, callback) {
            callback(error);
          };
        });

        it('should destroy the stream', function(done) {
          const stream = duplexify();

          file.startSimpleUpload_(stream);

          stream.on('error', function(err) {
            assert.strictEqual(stream.destroyed, true);
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('success', function() {
        const body = {};
        const resp = {};

        beforeEach(function() {
          file.request = function(reqOpts, callback) {
            callback(null, body, resp);
          };
        });

        it('should set the metadata', function() {
          const stream = duplexify();

          file.startSimpleUpload_(stream);

          assert.strictEqual(file.metadata, body);
        });

        it('should emit the response', function(done) {
          const stream = duplexify();

          stream.on('response', function(resp_) {
            assert.strictEqual(resp_, resp);
            done();
          });

          file.startSimpleUpload_(stream);
        });

        it('should emit complete', function(done) {
          const stream = duplexify();

          stream.on('complete', done);

          file.startSimpleUpload_(stream);
        });
      });
    });
  });

  describe('setUserProject', function() {
    it('should set the userProject property', function() {
      const userProject = 'grape-spaceship-123';

      file.setUserProject(userProject);
      assert.strictEqual(file.userProject, userProject);
    });
  });
});
