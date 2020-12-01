// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  ApiError,
  DecorateRequestOptions,
  ServiceObject,
  ServiceObjectConfig,
  util,
} from '@google-cloud/common';
import {PromisifyAllOptions} from '@google-cloud/promisify';
import * as assert from 'assert';
import {describe, it, before, beforeEach, afterEach} from 'mocha';
import * as crypto from 'crypto';
import * as dateFormat from 'date-and-time';
import * as duplexify from 'duplexify';
import * as extend from 'extend';
import * as fs from 'fs';
import * as resumableUpload from 'gcs-resumable-upload';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import {Readable, PassThrough, Stream, Duplex, Transform} from 'stream';
import * as tmp from 'tmp';
import * as zlib from 'zlib';
import * as gaxios from 'gaxios';

import {
  Bucket,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  File,
  FileOptions,
  GetFileMetadataOptions,
  PolicyDocument,
  SetFileMetadataOptions,
  GetSignedUrlConfig,
  GenerateSignedPostPolicyV2Options,
  GenerateSignedPostPolicyV2Callback,
} from '../src';
import {
  SignedPostPolicyV4Output,
  GenerateSignedPostPolicyV4Options,
  STORAGE_POST_POLICY_BASE_URL,
  MoveOptions,
} from '../src/file';

let promisified = false;
let makeWritableStreamOverride: Function | null;
let handleRespOverride: Function | null;
const fakeUtil = Object.assign({}, util, {
  handleResp(...args: Array<{}>) {
    (handleRespOverride || util.handleResp)(...args);
  },
  makeWritableStream(...args: Array<{}>) {
    (makeWritableStreamOverride || util.makeWritableStream)(...args);
  },
});

const fakePromisify = {
  // tslint:disable-next-line:variable-name
  promisifyAll(Class: Function, options: PromisifyAllOptions) {
    if (Class.name !== 'File') {
      return;
    }

    promisified = true;
    assert.deepStrictEqual(options.exclude, [
      'publicUrl',
      'request',
      'setEncryptionKey',
    ]);
  },
};

const fsCached = extend(true, {}, fs);
const fakeFs = extend(true, {}, fsCached);

const zlibCached = extend(true, {}, zlib);
let createGunzipOverride: Function | null;
const fakeZlib = extend(true, {}, zlib, {
  createGunzip(...args: Array<{}>) {
    return (createGunzipOverride || zlibCached.createGunzip)(...args);
  },
});

let hashStreamValidationOverride: Function | null;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const hashStreamValidation = require('hash-stream-validation');
function fakeHashStreamValidation(...args: Array<{}>) {
  return (hashStreamValidationOverride || hashStreamValidation)(...args);
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const osCached = extend(true, {}, require('os'));
const fakeOs = extend(true, {}, osCached);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let resumableUploadOverride: any;
function fakeResumableUpload() {
  return () => {
    return resumableUploadOverride || resumableUpload;
  };
}
Object.assign(fakeResumableUpload, {
  createURI(
    ...args: [resumableUpload.UploadConfig, resumableUpload.CreateUriCallback]
  ) {
    let createURI = resumableUpload.createURI;

    if (resumableUploadOverride && resumableUploadOverride.createURI) {
      createURI = resumableUploadOverride.createURI;
    }

    return createURI(...args);
  },
});
Object.assign(fakeResumableUpload, {
  upload(...args: [resumableUpload.UploadConfig]) {
    let upload = resumableUpload.upload;
    if (resumableUploadOverride && resumableUploadOverride.upload) {
      upload = resumableUploadOverride.upload;
    }
    return upload(...args);
  },
});

class FakeServiceObject extends ServiceObject {
  calledWith_: IArguments;
  constructor(config: ServiceObjectConfig) {
    super(config);
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let xdgConfigOverride: any;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const xdgBasedirCached = require('xdg-basedir');
const fakeXdgBasedir = extend(true, {}, xdgBasedirCached);
Object.defineProperty(fakeXdgBasedir, 'config', {
  get() {
    return xdgConfigOverride === false
      ? false
      : xdgConfigOverride || xdgBasedirCached.config;
  },
});

const fakeSigner = {
  URLSigner: () => {},
};

describe('File', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let File: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let file: any;

  const FILE_NAME = 'file-name.png';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let directoryFile: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let specialCharsFile: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let STORAGE: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let BUCKET: any;

  before(() => {
    File = proxyquire('../src/file.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
      '@google-cloud/promisify': fakePromisify,
      fs: fakeFs,
      'gcs-resumable-upload': fakeResumableUpload,
      'hash-stream-validation': fakeHashStreamValidation,
      os: fakeOs,
      './signer': fakeSigner,
      'xdg-basedir': fakeXdgBasedir,
      zlib: fakeZlib,
    }).File;
  });

  beforeEach(() => {
    extend(true, fakeFs, fsCached);
    extend(true, fakeOs, osCached);
    xdgConfigOverride = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    FakeServiceObject.prototype.request = util.noop as any;

    STORAGE = {
      createBucket: util.noop,
      request: util.noop,
      apiEndpoint: 'https://storage.googleapis.com',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      makeAuthenticatedRequest(req: {}, callback: any) {
        if (callback) {
          (callback.onAuthenticated || callback)(null, req);
        }
      },
      bucket(name: string) {
        return new Bucket(this, name);
      },
    };

    BUCKET = new Bucket(STORAGE, 'bucket-name');
    BUCKET.getRequestInterceptors = () => [];

    file = new File(BUCKET, FILE_NAME);

    directoryFile = new File(BUCKET, 'directory/file.jpg');
    directoryFile.request = util.noop;

    specialCharsFile = new File(BUCKET, "special/azAZ!*'()*%/file.jpg");
    specialCharsFile.request = util.noop;

    createGunzipOverride = null;
    handleRespOverride = null;
    hashStreamValidationOverride = null;
    makeWritableStreamOverride = null;
    resumableUploadOverride = null;
  });

  describe('initialization', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should assign file name', () => {
      assert.strictEqual(file.name, FILE_NAME);
    });

    it('should assign the bucket instance', () => {
      assert.strictEqual(file.bucket, BUCKET);
    });

    it('should assign the storage instance', () => {
      assert.strictEqual(file.storage, BUCKET.storage);
    });

    it('should not strip leading slashes', () => {
      const file = new File(BUCKET, '/name');
      assert.strictEqual(file.name, '/name');
    });

    it('should assign KMS key name', () => {
      const kmsKeyName = 'kms-key-name';
      const file = new File(BUCKET, '/name', {kmsKeyName});
      assert.strictEqual(file.kmsKeyName, kmsKeyName);
    });

    it('should accept specifying a generation', () => {
      const file = new File(BUCKET, 'name', {generation: 2});
      assert.strictEqual(file.generation, 2);
    });

    it('should inherit from ServiceObject', () => {
      // Using assert.strictEqual instead of assert to prevent
      // coercing of types.
      assert.strictEqual(file instanceof ServiceObject, true);

      const calledWith = file.calledWith_[0];

      assert.strictEqual(calledWith.parent, BUCKET);
      assert.strictEqual(calledWith.baseUrl, '/o');
      assert.strictEqual(calledWith.id, encodeURIComponent(FILE_NAME));
      assert.deepStrictEqual(calledWith.methods, {
        delete: {reqOpts: {qs: {}}},
        exists: {reqOpts: {qs: {}}},
        get: {reqOpts: {qs: {}}},
        getMetadata: {reqOpts: {qs: {}}},
        setMetadata: {reqOpts: {qs: {}}},
      });
    });

    it('should set the correct query string with a generation', () => {
      const options = {generation: 2};
      const file = new File(BUCKET, 'name', options);

      const calledWith = file.calledWith_[0];

      assert.deepStrictEqual(calledWith.methods, {
        delete: {reqOpts: {qs: options}},
        exists: {reqOpts: {qs: options}},
        get: {reqOpts: {qs: options}},
        getMetadata: {reqOpts: {qs: options}},
        setMetadata: {reqOpts: {qs: options}},
      });
    });

    it('should set the correct query string with a userProject', () => {
      const options = {userProject: 'user-project'};
      const file = new File(BUCKET, 'name', options);

      const calledWith = file.calledWith_[0];

      assert.deepStrictEqual(calledWith.methods, {
        delete: {reqOpts: {qs: options}},
        exists: {reqOpts: {qs: options}},
        get: {reqOpts: {qs: options}},
        getMetadata: {reqOpts: {qs: options}},
        setMetadata: {reqOpts: {qs: options}},
      });
    });

    it('should not strip leading slash name in ServiceObject', () => {
      const file = new File(BUCKET, '/name');
      const calledWith = file.calledWith_[0];

      assert.strictEqual(calledWith.id, encodeURIComponent('/name'));
    });

    it('should set a custom encryption key', done => {
      const key = 'key';
      const setEncryptionKey = File.prototype.setEncryptionKey;
      File.prototype.setEncryptionKey = (key_: {}) => {
        File.prototype.setEncryptionKey = setEncryptionKey;
        assert.strictEqual(key_, key);
        done();
      };
      new File(BUCKET, FILE_NAME, {encryptionKey: key});
    });

    describe('userProject', () => {
      const USER_PROJECT = 'grapce-spaceship-123';

      it('should localize the Bucket#userProject', () => {
        const bucket = new Bucket(STORAGE, 'bucket-name', {
          userProject: USER_PROJECT,
        });

        const file = new File(bucket, '/name');
        assert.strictEqual(file.userProject, USER_PROJECT);
      });

      it('should accept a userProject option', () => {
        const file = new File(BUCKET, '/name', {
          userProject: USER_PROJECT,
        });

        assert.strictEqual(file.userProject, USER_PROJECT);
      });
    });
  });

  describe('copy', () => {
    it('should throw if no destination is provided', () => {
      assert.throws(() => {
        file.copy();
      }, /Destination file should have a name\./);
    });

    it('should URI encode file names', done => {
      const newFile = new File(BUCKET, 'nested/file.jpg');

      const expectedPath = `/rewriteTo/b/${
        file.bucket.name
      }/o/${encodeURIComponent(newFile.name)}`;

      directoryFile.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.uri, expectedPath);
        done();
      };

      directoryFile.copy(newFile);
    });

    it('should execute callback with error & API response', done => {
      const error = new Error('Error.');
      const apiResponse = {};

      const newFile = new File(BUCKET, 'new-file');

      file.request = (reqOpts: DecorateRequestOptions, callback: Function) => {
        callback(error, apiResponse);
      };

      file.copy(newFile, (err: Error, file: {}, apiResponse_: {}) => {
        assert.strictEqual(err, error);
        assert.strictEqual(file, null);
        assert.strictEqual(apiResponse_, apiResponse);

        done();
      });
    });

    it('should send query.sourceGeneration if File has one', done => {
      const versionedFile = new File(BUCKET, 'name', {generation: 1});
      const newFile = new File(BUCKET, 'new-file');

      versionedFile.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs.sourceGeneration, 1);
        done();
      };

      versionedFile.copy(newFile, assert.ifError);
    });

    it('should accept an options object', done => {
      const newFile = new File(BUCKET, 'name');
      const options = {
        option: true,
      };

      file.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.json, options);
        done();
      };

      file.copy(newFile, options, assert.ifError);
    });

    it('should pass through userProject', done => {
      const options = {
        userProject: 'user-project',
      };
      const originalOptions = Object.assign({}, options);
      const newFile = new File(BUCKET, 'new-file');

      file.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs.userProject, options.userProject);
        assert.strictEqual(reqOpts.json.userProject, undefined);
        assert.deepStrictEqual(options, originalOptions);
        done();
      };

      file.copy(newFile, options, assert.ifError);
    });

    it('should set correct headers when file is encrypted', done => {
      file.encryptionKey = {};
      file.encryptionKeyBase64 = 'base64';
      file.encryptionKeyHash = 'hash';

      const newFile = new File(BUCKET, 'new-file');

      file.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.headers, {
          'x-goog-copy-source-encryption-algorithm': 'AES256',
          'x-goog-copy-source-encryption-key': file.encryptionKeyBase64,
          'x-goog-copy-source-encryption-key-sha256': file.encryptionKeyHash,
        });
        done();
      };

      file.copy(newFile, assert.ifError);
    });

    it('should set encryption key on the new File instance', done => {
      const newFile = new File(BUCKET, 'new-file');
      newFile.encryptionKey = 'encryptionKey';

      file.setEncryptionKey = (encryptionKey: {}) => {
        assert.strictEqual(encryptionKey, newFile.encryptionKey);
        done();
      };

      file.copy(newFile, assert.ifError);
    });

    it('should set destination KMS key name', done => {
      const newFile = new File(BUCKET, 'new-file');
      newFile.kmsKeyName = 'kms-key-name';

      file.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(
          reqOpts.qs.destinationKmsKeyName,
          newFile.kmsKeyName
        );
        assert.strictEqual(file.kmsKeyName, newFile.kmsKeyName);
        done();
      };

      file.copy(newFile, assert.ifError);
    });

    it('should set destination KMS key name from option', done => {
      const newFile = new File(BUCKET, 'new-file');
      const destinationKmsKeyName = 'destination-kms-key-name';

      file.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(
          reqOpts.qs.destinationKmsKeyName,
          destinationKmsKeyName
        );
        assert.strictEqual(file.kmsKeyName, destinationKmsKeyName);
        done();
      };

      file.copy(newFile, {destinationKmsKeyName}, assert.ifError);
    });

    it('should accept predefined Acl', done => {
      const options = {
        predefinedAcl: 'authenticatedRead',
      };
      const newFile = new File(BUCKET, 'new-file');
      file.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(
          reqOpts.qs.destinationPredefinedAcl,
          options.predefinedAcl
        );
        assert.strictEqual(reqOpts.json.destinationPredefinedAcl, undefined);
        done();
      };

      file.copy(newFile, options, assert.ifError);
    });

    it('should favor the option over the File KMS name', done => {
      const newFile = new File(BUCKET, 'new-file');
      newFile.kmsKeyName = 'incorrect-kms-key-name';
      const destinationKmsKeyName = 'correct-kms-key-name';

      file.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(
          reqOpts.qs.destinationKmsKeyName,
          destinationKmsKeyName
        );
        assert.strictEqual(file.kmsKeyName, destinationKmsKeyName);
        done();
      };

      file.copy(newFile, {destinationKmsKeyName}, assert.ifError);
    });

    it('should remove custom encryption interceptor if rotating to KMS', done => {
      const newFile = new File(BUCKET, 'new-file');
      const destinationKmsKeyName = 'correct-kms-key-name';

      file.encryptionKeyInterceptor = {};
      file.interceptors = [{}, file.encryptionKeyInterceptor, {}];

      file.request = () => {
        assert.strictEqual(file.interceptors.length, 2);
        assert(file.interceptors.indexOf(file.encryptionKeyInterceptor) === -1);
        done();
      };

      file.copy(newFile, {destinationKmsKeyName}, assert.ifError);
    });

    describe('destination types', () => {
      function assertPathEquals(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        file: any,
        expectedPath: string,
        callback: Function
      ) {
        file.request = (reqOpts: DecorateRequestOptions) => {
          assert.strictEqual(reqOpts.uri, expectedPath);
          callback();
        };
      }

      it('should allow a string', done => {
        const newFileName = 'new-file-name.png';
        const newFile = new File(BUCKET, newFileName);
        const expectedPath = `/rewriteTo/b/${file.bucket.name}/o/${newFile.name}`;
        assertPathEquals(file, expectedPath, done);
        file.copy(newFileName);
      });

      it('should allow a string with leading slash.', done => {
        const newFileName = '/new-file-name.png';
        const newFile = new File(BUCKET, newFileName);
        // File uri encodes file name when calling this.request during copy
        const expectedPath = `/rewriteTo/b/${
          file.bucket.name
        }/o/${encodeURIComponent(newFile.name)}`;
        assertPathEquals(file, expectedPath, done);
        file.copy(newFileName);
      });

      it('should allow a "gs://..." string', done => {
        const newFileName = 'gs://other-bucket/new-file-name.png';
        const expectedPath = '/rewriteTo/b/other-bucket/o/new-file-name.png';
        assertPathEquals(file, expectedPath, done);
        file.copy(newFileName);
      });

      it('should allow a Bucket', done => {
        const expectedPath = `/rewriteTo/b/${BUCKET.name}/o/${file.name}`;
        assertPathEquals(file, expectedPath, done);
        file.copy(BUCKET);
      });

      it('should allow a File', done => {
        const newFile = new File(BUCKET, 'new-file');
        const expectedPath = `/rewriteTo/b/${BUCKET.name}/o/${newFile.name}`;
        assertPathEquals(file, expectedPath, done);
        file.copy(newFile);
      });

      it('should throw if a destination cannot be parsed', () => {
        assert.throws(() => {
          file.copy(() => {});
        }, /Destination file should have a name\./);
      });
    });

    describe('not finished copying', () => {
      const apiResponse = {
        rewriteToken: '...',
      };

      beforeEach(() => {
        file.request = (
          reqOpts: DecorateRequestOptions,
          callback: Function
        ) => {
          callback(null, apiResponse);
        };
      });

      it('should continue attempting to copy', done => {
        const newFile = new File(BUCKET, 'new-file');

        file.request = (
          reqOpts: DecorateRequestOptions,
          callback: Function
        ) => {
          file.copy = (newFile_: {}, options: {}, callback: Function) => {
            assert.strictEqual(newFile_, newFile);
            assert.deepStrictEqual(options, {token: apiResponse.rewriteToken});
            callback(); // done()
          };

          callback(null, apiResponse);
        };

        file.copy(newFile, done);
      });

      it('should pass the userProject in subsequent requests', done => {
        const newFile = new File(BUCKET, 'new-file');
        const fakeOptions = {
          userProject: 'grapce-spaceship-123',
        };

        file.request = (
          reqOpts: DecorateRequestOptions,
          callback: Function
        ) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          file.copy = (newFile_: {}, options: any) => {
            assert.notStrictEqual(options, fakeOptions);
            assert.strictEqual(options.userProject, fakeOptions.userProject);
            done();
          };

          callback(null, apiResponse);
        };

        file.copy(newFile, fakeOptions, assert.ifError);
      });

      it('should pass the KMS key name in subsequent requests', done => {
        const newFile = new File(BUCKET, 'new-file');
        const fakeOptions = {
          destinationKmsKeyName: 'kms-key-name',
        };

        file.request = (
          reqOpts: DecorateRequestOptions,
          callback: Function
        ) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          file.copy = (newFile_: {}, options: any) => {
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

      it('should make the subsequent correct API request', done => {
        const newFile = new File(BUCKET, 'new-file');

        file.request = (reqOpts: DecorateRequestOptions) => {
          assert.strictEqual(reqOpts.qs.rewriteToken, apiResponse.rewriteToken);
          done();
        };

        file.copy(newFile, {token: apiResponse.rewriteToken}, assert.ifError);
      });
    });

    describe('returned File object', () => {
      beforeEach(() => {
        const resp = {success: true};
        file.request = (
          reqOpts: DecorateRequestOptions,
          callback: Function
        ) => {
          callback(null, resp);
        };
      });

      it('should re-use file object if one is provided', done => {
        const newFile = new File(BUCKET, 'new-file');
        file.copy(newFile, (err: Error, copiedFile: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual(copiedFile, newFile);
          done();
        });
      });

      it('should create new file on the same bucket', done => {
        const newFilename = 'new-filename';
        file.copy(newFilename, (err: Error, copiedFile: File) => {
          assert.ifError(err);
          assert.strictEqual(copiedFile.bucket.name, BUCKET.name);
          assert.strictEqual(copiedFile.name, newFilename);
          done();
        });
      });

      it('should create new file on the destination bucket', done => {
        file.copy(BUCKET, (err: Error, copiedFile: File) => {
          assert.ifError(err);
          assert.strictEqual(copiedFile.bucket.name, BUCKET.name);
          assert.strictEqual(copiedFile.name, file.name);
          done();
        });
      });

      it('should pass apiResponse into callback', done => {
        file.copy(BUCKET, (err: Error, copiedFile: File, apiResponse: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual({success: true}, apiResponse);
          done();
        });
      });
    });
  });

  describe('createReadStream', () => {
    function getFakeRequest(data?: {}) {
      let requestOptions: DecorateRequestOptions | undefined;

      class FakeRequest extends Readable {
        constructor(_requestOptions?: DecorateRequestOptions) {
          super();
          requestOptions = _requestOptions;
          this._read = () => {
            if (data) {
              this.push(data);
            }
            this.push(null);
          };
        }

        static getRequestOptions() {
          return requestOptions;
        }
      }

      // Return a Proxy of FakeRequest which can be instantiated
      // without new.
      return new Proxy(FakeRequest, {
        apply(target, _, argumentsList) {
          return new target(...argumentsList);
        },
      });
    }

    function getFakeSuccessfulRequest(data: {}) {
      // tslint:disable-next-line:variable-name
      const FakeRequest = getFakeRequest(data);

      class FakeSuccessfulRequest extends FakeRequest {
        constructor(req?: DecorateRequestOptions) {
          super(req);
          setImmediate(() => {
            const stream = new FakeRequest();
            this.emit('response', stream);
          });
        }
      }

      // Return a Proxy of FakeSuccessfulRequest which can be instantiated
      // without new.
      return new Proxy(FakeSuccessfulRequest, {
        apply(target, _, argumentsList) {
          return new target(...argumentsList);
        },
      });
    }

    function getFakeFailedRequest(error: Error) {
      // tslint:disable-next-line:variable-name
      const FakeRequest = getFakeRequest();

      class FakeFailedRequest extends FakeRequest {
        constructor(_req?: DecorateRequestOptions) {
          super(_req);
          setImmediate(() => {
            this.emit('error', error);
          });
        }
      }

      // Return a Proxy of FakeFailedRequest which can be instantiated
      // without new.
      return new Proxy(FakeFailedRequest, {
        apply(target, _, argumentsList) {
          return new target(...argumentsList);
        },
      });
    }

    beforeEach(() => {
      handleRespOverride = (
        err: Error,
        res: {},
        body: {},
        callback: Function
      ) => {
        const rawResponseStream = new PassThrough();
        Object.assign(rawResponseStream, {
          toJSON() {
            return {headers: {}};
          },
        });
        callback(null, null, rawResponseStream);
        setImmediate(() => {
          rawResponseStream.end();
        });
      };
    });

    it('should throw if both a range and validation is given', () => {
      assert.throws(() => {
        file.createReadStream({
          validation: true,
          start: 3,
          end: 8,
        });
      }, /Cannot use validation with file ranges \(start\/end\)\./);

      assert.throws(() => {
        file.createReadStream({
          validation: true,
          start: 3,
        });
      }, /Cannot use validation with file ranges \(start\/end\)\./);

      assert.throws(() => {
        file.createReadStream({
          validation: true,
          end: 8,
        });
      }, /Cannot use validation with file ranges \(start\/end\)\./);

      assert.doesNotThrow(() => {
        file.createReadStream({
          start: 3,
          end: 8,
        });
      });
    });

    it('should send query.generation if File has one', done => {
      const versionedFile = new File(BUCKET, 'file.txt', {generation: 1});

      versionedFile.requestStream = (rOpts: DecorateRequestOptions) => {
        assert.strictEqual(rOpts.qs.generation, 1);
        setImmediate(done);
        return duplexify();
      };

      versionedFile.createReadStream().resume();
    });

    it('should send query.userProject if provided', done => {
      const options = {
        userProject: 'user-project-id',
      };

      file.requestStream = (rOpts: DecorateRequestOptions) => {
        assert.strictEqual(rOpts.qs.userProject, options.userProject);
        setImmediate(done);
        return duplexify();
      };

      file.createReadStream(options).resume();
    });

    describe('authenticating', () => {
      it('should create an authenticated request', done => {
        file.requestStream = (opts: DecorateRequestOptions) => {
          assert.deepStrictEqual(opts, {
            forever: false,
            uri: '',
            headers: {
              'Accept-Encoding': 'gzip',
              'Cache-Control': 'no-store',
            },
            qs: {
              alt: 'media',
            },
          });
          setImmediate(() => {
            done();
          });
          return duplexify();
        };

        file.createReadStream().resume();
      });

      describe('errors', () => {
        const ERROR = new Error('Error.');

        beforeEach(() => {
          file.requestStream = () => {
            const requestStream = new PassThrough();

            setImmediate(() => {
              requestStream.emit('error', ERROR);
            });

            return requestStream;
          };
        });

        it('should emit an error from authenticating', done => {
          file
            .createReadStream()
            .once('error', (err: Error) => {
              assert.strictEqual(err, ERROR);
              done();
            })
            .resume();
        });
      });
    });

    describe('requestStream', () => {
      it('should get readable stream from request', done => {
        file.requestStream = () => {
          setImmediate(() => {
            done();
          });

          return new PassThrough();
        };

        file.createReadStream().resume();
      });

      it('should emit response event from request', done => {
        file.requestStream = getFakeSuccessfulRequest('body');

        file
          .createReadStream({validation: false})
          .on('response', () => {
            done();
          })
          .resume();
      });

      it('should let util.handleResp handle the response', done => {
        const response = {a: 'b', c: 'd'};

        handleRespOverride = (err: Error, response_: {}, body: {}) => {
          assert.strictEqual(err, null);
          assert.strictEqual(response_, response);
          assert.strictEqual(body, null);
          done();
        };

        file.requestStream = () => {
          const rowRequestStream = new PassThrough();
          setImmediate(() => {
            rowRequestStream.emit('response', response);
          });
          return rowRequestStream;
        };

        file.createReadStream().resume();
      });

      describe('errors', () => {
        const ERROR = new Error('Error.');

        beforeEach(() => {
          file.requestStream = getFakeFailedRequest(ERROR);
        });

        it('should emit the error', done => {
          file
            .createReadStream()
            .once('error', (err: Error) => {
              assert.deepStrictEqual(err, ERROR);
              done();
            })
            .resume();
        });

        it('should parse a response stream for a better error', done => {
          const rawResponsePayload = 'error message from body';
          const rawResponseStream = new PassThrough();
          const requestStream = new PassThrough();

          handleRespOverride = (
            err: Error,
            res: {},
            body: {},
            callback: Function
          ) => {
            callback(ERROR, null, res);
            setImmediate(() => {
              rawResponseStream.end(rawResponsePayload);
            });
          };

          file.requestStream = () => {
            setImmediate(() => {
              requestStream.emit('response', rawResponseStream);
            });
            return requestStream;
          };

          file
            .createReadStream()
            .once('error', (err: Error) => {
              assert.strictEqual(err, ERROR);
              assert.strictEqual(err.message, rawResponsePayload);
              done();
            })
            .resume();
        });

        it('should emit errors from the request stream', done => {
          const error = new Error('Error.');
          const rawResponseStream = new PassThrough();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (rawResponseStream as any).toJSON = () => {
            return {headers: {}};
          };
          const requestStream = new PassThrough();

          handleRespOverride = (
            err: Error,
            res: {},
            body: {},
            callback: Function
          ) => {
            callback(null, null, rawResponseStream);
            setImmediate(() => {
              rawResponseStream.emit('error', error);
            });
          };

          file.requestStream = () => {
            setImmediate(() => {
              requestStream.emit('response', rawResponseStream);
            });
            return requestStream;
          };

          file
            .createReadStream()
            .on('error', (err: Error) => {
              assert.strictEqual(err, error);
              done();
            })
            .resume();
        });

        it('should not handle both error and end events', done => {
          const error = new Error('Error.');
          const rawResponseStream = new PassThrough();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (rawResponseStream as any).toJSON = () => {
            return {headers: {}};
          };
          const requestStream = new PassThrough();

          handleRespOverride = (
            err: Error,
            res: {},
            body: {},
            callback: Function
          ) => {
            callback(null, null, rawResponseStream);
            setImmediate(() => {
              rawResponseStream.emit('error', error);
            });
          };

          file.requestStream = () => {
            setImmediate(() => {
              requestStream.emit('response', rawResponseStream);
            });
            return requestStream;
          };

          file.getMetadata = (options: object, callback: Function) => {
            callback();
          };

          file
            .createReadStream({validation: false})
            .on('error', (err: Error) => {
              assert.strictEqual(err, error);
              rawResponseStream.emit('end');
              setImmediate(done);
            })
            .on('end', () => {
              done(new Error('Should not have been called.'));
            })
            .resume();
        });
      });
    });

    describe('compression', () => {
      const DATA = 'test data';
      const GZIPPED_DATA = zlib.gzipSync(DATA);

      beforeEach(() => {
        handleRespOverride = (
          err: Error,
          res: {},
          body: {},
          callback: Function
        ) => {
          const rawResponseStream = new PassThrough();
          Object.assign(rawResponseStream, {
            toJSON() {
              return {
                headers: {
                  'content-encoding': 'gzip',
                },
              };
            },
          });
          callback(null, null, rawResponseStream);
          setImmediate(() => {
            rawResponseStream.end(GZIPPED_DATA);
          });
        };
        file.requestStream = getFakeSuccessfulRequest(GZIPPED_DATA);
      });

      it('should gunzip the response', done => {
        file
          .createReadStream()
          .once('error', done)
          .on('data', (data: {}) => {
            assert.strictEqual(data.toString(), DATA);
            done();
          })
          .resume();
      });

      it('should not gunzip the response if "decompress: false" is passed', done => {
        file
          .createReadStream({decompress: false})
          .once('error', done)
          .on('data', (data: {}) => {
            assert.strictEqual(data, GZIPPED_DATA);
            done();
          })
          .resume();
      });

      it('should emit errors from the gunzip stream', done => {
        const error = new Error('Error.');
        const createGunzipStream = new PassThrough();
        createGunzipOverride = () => {
          process.nextTick(() => {
            createGunzipStream.emit('error', error);
          });
          return createGunzipStream;
        };
        file
          .createReadStream()
          .on('error', (err: Error) => {
            assert.strictEqual(err, error);
            done();
          })
          .resume();
      });

      it('should not handle both error and end events', done => {
        const error = new Error('Error.');
        const createGunzipStream = new PassThrough();
        createGunzipOverride = () => {
          process.nextTick(() => {
            createGunzipStream.emit('error', error);
          });
          return createGunzipStream;
        };
        file.getMetadata = (options: object, callback: Function) => {
          callback();
        };
        file
          .createReadStream({validation: false})
          .on('error', (err: Error) => {
            assert.strictEqual(err, error);
            createGunzipStream.emit('end');
            setImmediate(done);
          })
          .on('end', () => {
            done(new Error('Should not have been called.'));
          })
          .resume();
      });
    });

    describe('validation', () => {
      const data = 'test';
      let fakeValidationStream: Stream & {test: Function};

      beforeEach(() => {
        file.metadata.mediaLink = 'http://uri';

        file.getMetadata = (options: {}, callback: Function) => {
          file.metadata = {
            crc32c: '####wA==',
            md5Hash: 'CY9rzUYh03PK3k6DJie09g==',
          };
          callback();
        };

        fakeValidationStream = Object.assign(new PassThrough(), {
          test: () => true,
        });
        hashStreamValidationOverride = () => {
          return fakeValidationStream;
        };
      });

      describe('server decompression', () => {
        beforeEach(() => {
          handleRespOverride = (
            err: Error,
            res: {},
            body: {},
            callback: Function
          ) => {
            const rawResponseStream = new PassThrough();
            Object.assign(rawResponseStream, {
              toJSON() {
                return {
                  headers: {},
                };
              },
            });
            callback(null, null, rawResponseStream);
            setImmediate(() => {
              rawResponseStream.end(data);
            });
          };
          file.requestStream = getFakeSuccessfulRequest(data);
        });

        it('should skip validation if file was stored compressed', done => {
          const validateStub = sinon.stub().returns(true);
          fakeValidationStream.test = validateStub;

          file.getMetadata = (options: {}, callback: Function) => {
            file.metadata = {
              crc32c: '####wA==',
              md5Hash: 'CY9rzUYh03PK3k6DJie09g==',
              contentEncoding: 'gzip',
            };
            callback();
          };

          file
            .createReadStream({validation: 'crc32c'})
            .on('error', done)
            .on('end', () => {
              assert(validateStub.notCalled);
              done();
            })
            .resume();
        });
      });

      it('should emit errors from the validation stream', done => {
        const error = new Error('Error.');

        hashStreamValidationOverride = () => {
          setImmediate(() => {
            fakeValidationStream.emit('error', error);
          });
          return fakeValidationStream;
        };

        file.requestStream = getFakeSuccessfulRequest(data);

        file
          .createReadStream()
          .on('error', (err: Error) => {
            assert.strictEqual(err, error);
            done();
          })
          .resume();
      });

      it('should not handle both error and end events', done => {
        const error = new Error('Error.');

        hashStreamValidationOverride = () => {
          setImmediate(() => {
            fakeValidationStream.emit('error', error);
          });
          return fakeValidationStream;
        };

        file.requestStream = getFakeSuccessfulRequest(data);

        file
          .createReadStream()
          .on('error', (err: Error) => {
            assert.strictEqual(err, error);
            fakeValidationStream.emit('end');
            setImmediate(done);
          })
          .on('end', () => {
            done(new Error('Should not have been called.'));
          })
          .resume();
      });

      it('should pass the userProject to getMetadata', done => {
        const fakeOptions = {
          userProject: 'grapce-spaceship-123',
        };

        file.getMetadata = (options: GetFileMetadataOptions) => {
          assert.strictEqual(options.userProject, fakeOptions.userProject);
          done();
        };

        file.requestStream = getFakeSuccessfulRequest(data);

        file.createReadStream(fakeOptions).on('error', done).resume();
      });

      it('should destroy stream from failed metadata fetch', done => {
        const error = new Error('Error.');
        file.getMetadata = (options: {}, callback: Function) => {
          callback(error);
        };

        file.requestStream = getFakeSuccessfulRequest('data');

        file
          .createReadStream()
          .on('error', (err: Error) => {
            assert.strictEqual(err, error);
            done();
          })
          .resume();
      });

      it('should validate with crc32c', done => {
        file.requestStream = getFakeSuccessfulRequest(data);

        file
          .createReadStream({validation: 'crc32c'})
          .on('error', done)
          .on('end', done)
          .resume();
      });

      it('should emit an error if crc32c validation fails', done => {
        file.requestStream = getFakeSuccessfulRequest('bad-data');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (fakeValidationStream as any).test = () => false;
        file
          .createReadStream({validation: 'crc32c'})
          .on('error', (err: ApiError) => {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      it('should validate with md5', done => {
        file.requestStream = getFakeSuccessfulRequest(data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (fakeValidationStream as any).test = () => true;
        file
          .createReadStream({validation: 'md5'})
          .on('error', done)
          .on('end', done)
          .resume();
      });

      it('should emit an error if md5 validation fails', done => {
        file.requestStream = getFakeSuccessfulRequest('bad-data');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (fakeValidationStream as any).test = () => false;
        file
          .createReadStream({validation: 'md5'})
          .on('error', (err: ApiError) => {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      it('should default to crc32c validation', done => {
        file.getMetadata = (options: {}, callback: Function) => {
          file.metadata = {
            crc32c: file.metadata.crc32c,
          };
          callback();
        };
        file.requestStream = getFakeSuccessfulRequest(data);
        file
          .createReadStream()
          .on('error', (err: ApiError) => {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      it('should ignore a data mismatch if validation: false', done => {
        file.requestStream = getFakeSuccessfulRequest(data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (fakeValidationStream as any).test = () => false;
        file
          .createReadStream({validation: false})
          .resume()
          .on('error', done)
          .on('end', done);
      });

      describe('destroying the through stream', () => {
        beforeEach(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (fakeValidationStream as any).test = () => false;
        });

        it('should destroy after failed validation', done => {
          file.requestStream = getFakeSuccessfulRequest('bad-data');

          const readStream = file.createReadStream({validation: 'md5'});
          readStream.destroy = (err: ApiError) => {
            assert.strictEqual(err.code, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          };
          readStream.resume();
        });

        it('should destroy if MD5 is requested but absent', done => {
          file.getMetadata = (options: {}, callback: Function) => {
            file.metadata = {
              crc32c: file.metadata.crc32c,
            };
            callback();
          };

          file.requestStream = getFakeSuccessfulRequest('bad-data');

          const readStream = file.createReadStream({validation: 'md5'});
          readStream.destroy = (err: ApiError) => {
            assert.strictEqual(err.code, 'MD5_NOT_AVAILABLE');
            done();
          };
          readStream.resume();
        });
      });
    });

    describe('range requests', () => {
      it('should accept a start range', done => {
        const startOffset = 100;

        file.requestStream = (opts: DecorateRequestOptions) => {
          setImmediate(() => {
            assert.strictEqual(
              opts.headers!.Range,
              'bytes=' + startOffset + '-'
            );
            done();
          });
          return duplexify();
        };

        file.createReadStream({start: startOffset}).resume();
      });

      it('should accept an end range and set start to 0', done => {
        const endOffset = 100;

        file.requestStream = (opts: DecorateRequestOptions) => {
          setImmediate(() => {
            assert.strictEqual(opts.headers!.Range, 'bytes=0-' + endOffset);
            done();
          });
          return duplexify();
        };

        file.createReadStream({end: endOffset}).resume();
      });

      it('should accept both a start and end range', done => {
        const startOffset = 100;
        const endOffset = 101;

        file.requestStream = (opts: DecorateRequestOptions) => {
          setImmediate(() => {
            const expectedRange = 'bytes=' + startOffset + '-' + endOffset;
            assert.strictEqual(opts.headers!.Range, expectedRange);
            done();
          });
          return duplexify();
        };

        file.createReadStream({start: startOffset, end: endOffset}).resume();
      });

      it('should accept range start and end as 0', done => {
        const startOffset = 0;
        const endOffset = 0;

        file.requestStream = (opts: DecorateRequestOptions) => {
          setImmediate(() => {
            const expectedRange = 'bytes=0-0';
            assert.strictEqual(opts.headers!.Range, expectedRange);
            done();
          });
          return duplexify();
        };

        file.createReadStream({start: startOffset, end: endOffset}).resume();
      });

      it('should end the through stream', done => {
        file.requestStream = getFakeSuccessfulRequest('body');

        const readStream = file.createReadStream({start: 100});
        readStream.end = done;
        readStream.resume();
      });
    });

    describe('tail requests', () => {
      it('should make a request for the tail bytes', done => {
        const endOffset = -10;

        file.requestStream = (opts: DecorateRequestOptions) => {
          setImmediate(() => {
            assert.strictEqual(opts.headers!.Range, 'bytes=' + endOffset);
            done();
          });
          return duplexify();
        };

        file.createReadStream({end: endOffset}).resume();
      });
    });
  });

  describe('createResumableUpload', () => {
    it('should not require options', done => {
      resumableUploadOverride = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        createURI(opts: any, callback: Function) {
          assert.strictEqual(opts.metadata, undefined);
          callback();
        },
      };

      file.createResumableUpload(done);
    });

    it('should create a resumable upload URI', done => {
      const options = {
        configPath: '/Users/user/.config/here',
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        createURI(opts: any, callback: Function) {
          const bucket = file.bucket;
          const storage = bucket.storage;

          assert.strictEqual(opts.authClient, storage.authClient);
          assert.strictEqual(opts.apiEndpoint, storage.apiEndpoint);
          assert.strictEqual(opts.bucket, bucket.name);
          assert.strictEqual(opts.configPath, options.configPath);
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

  describe('createWriteStream', () => {
    const METADATA = {a: 'b', c: 'd'};

    beforeEach(() => {
      Object.assign(fakeFs, {
        access(dir: string, check: {}, callback: Function) {
          // Assume that the required config directory is writable.
          callback();
        },
      });
    });

    it('should return a stream', () => {
      assert(file.createWriteStream() instanceof Stream);
    });

    it('should emit errors', done => {
      const error = new Error('Error.');
      const uploadStream = new PassThrough();

      file.startResumableUpload_ = (dup: duplexify.Duplexify) => {
        dup.setWritable(uploadStream);
        uploadStream.emit('error', error);
      };

      const writable = file.createWriteStream();

      writable.on('error', (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });

      writable.write('data');
    });

    it('should emit progress via resumable upload', done => {
      const progress = {};

      resumableUploadOverride = {
        upload() {
          const uploadStream = new PassThrough();
          setImmediate(() => {
            uploadStream.emit('progress', progress);
          });

          return uploadStream;
        },
      };

      const writable = file.createWriteStream();

      writable.on('progress', (evt: {}) => {
        assert.strictEqual(evt, progress);
        done();
      });

      writable.write('data');
    });

    it('should emit progress via simple upload', done => {
      const progress = {};

      makeWritableStreamOverride = (dup: duplexify.Duplexify) => {
        const uploadStream = new PassThrough();
        uploadStream.on('progress', evt => dup.emit('progress', evt));

        dup.setWritable(uploadStream);
        setImmediate(() => {
          uploadStream.emit('progress', progress);
        });
      };

      const writable = file.createWriteStream({resumable: false});

      writable.on('progress', (evt: {}) => {
        assert.strictEqual(evt, progress);
        done();
      });

      writable.write('data');
    });

    it('should start a simple upload if specified', done => {
      const options = {
        metadata: METADATA,
        resumable: false,
        customValue: true,
      };
      const writable = file.createWriteStream(options);

      file.startSimpleUpload_ = (stream: {}, options_: {}) => {
        assert.deepStrictEqual(options_, options);
        done();
      };

      writable.write('data');
    });

    it('should start a resumable upload if configPath is provided', done => {
      const options = {
        metadata: METADATA,
        configPath: '/config/path.json',
      };
      const writable = file.createWriteStream(options);

      file.startResumableUpload_ = (stream: {}, options_: {}) => {
        assert.deepStrictEqual(options_, options);
        done();
      };

      writable.write('data');
    });

    it('should start a resumable upload if specified', done => {
      const options = {
        metadata: METADATA,
        resumable: true,
        customValue: true,
      };
      const writable = file.createWriteStream(options);

      file.startResumableUpload_ = (stream: {}, options_: {}) => {
        assert.deepStrictEqual(options_, options);
        done();
      };

      writable.write('data');
    });

    it('should check if xdg-basedir is writable', done => {
      const fakeDir = 'fake-xdg-dir';

      xdgConfigOverride = fakeDir;

      Object.assign(fakeFs, {
        access(dir: {}) {
          assert.strictEqual(dir, fakeDir);
          done();
        },
      });

      file.createWriteStream({resumable: true}).write('data');
    });

    it('should fall back to checking tmpdir', done => {
      const fakeDir = 'fake-tmp-dir';

      xdgConfigOverride = false;

      fakeOs.tmpdir = () => {
        return fakeDir;
      };

      Object.assign(fakeFs, {
        access(dir: {}) {
          assert.strictEqual(dir, fakeDir);
          done();
        },
      });

      file.createWriteStream({resumable: true}).write('data');
    });

    it('should fail if resumable requested but not writable', done => {
      const error = new Error('Error.');

      Object.assign(fakeFs, {
        access(dir: {}, check: {}, callback: Function) {
          callback(error);
        },
      });

      const writable = file.createWriteStream({resumable: true});

      writable.on('error', (err: Error) => {
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

    it('should fall back to simple if not writable', done => {
      const options = {
        metadata: METADATA,
        customValue: true,
      };

      file.startSimpleUpload_ = (stream: {}, options_: {}) => {
        assert.deepStrictEqual(options_, options);
        done();
      };

      Object.assign(fakeFs, {
        access(dir: {}, check: {}, callback: Function) {
          callback(new Error('Error.'));
        },
      });

      file.createWriteStream(options).write('data');
    });

    it('should default to a resumable upload', done => {
      const writable = file.createWriteStream({
        metadata: METADATA,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.startResumableUpload_ = (stream: {}, options: any) => {
        assert.deepStrictEqual(options.metadata, METADATA);
        done();
      };

      writable.write('data');
    });

    it('should alias contentType to metadata object', done => {
      const contentType = 'text/html';
      const writable = file.createWriteStream({contentType});
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.startResumableUpload_ = (stream: {}, options: any) => {
        assert.strictEqual(options.metadata.contentType, contentType);
        done();
      };

      writable.write('data');
    });

    it('should detect contentType with contentType:auto', done => {
      const writable = file.createWriteStream({contentType: 'auto'});
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.startResumableUpload_ = (stream: {}, options: any) => {
        assert.strictEqual(options.metadata.contentType, 'image/png');
        done();
      };

      writable.write('data');
    });

    it('should detect contentType if not defined', done => {
      const writable = file.createWriteStream();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.startResumableUpload_ = (stream: {}, options: any) => {
        assert.strictEqual(options.metadata.contentType, 'image/png');
        done();
      };

      writable.write('data');
    });

    it('should not set a contentType if mime lookup failed', done => {
      const file = new File('file-without-ext');
      const writable = file.createWriteStream();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.startResumableUpload_ = (stream: {}, options: any) => {
        assert.strictEqual(typeof options.metadata.contentType, 'undefined');
        done();
      };

      writable.write('data');
    });

    it('should set encoding with gzip:true', done => {
      const writable = file.createWriteStream({gzip: true});
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.startResumableUpload_ = (stream: {}, options: any) => {
        assert.strictEqual(options.metadata.contentEncoding, 'gzip');
        done();
      };

      writable.write('data');
    });

    it('should set encoding with gzip:auto & compressible', done => {
      const writable = file.createWriteStream({
        gzip: 'auto',
        contentType: 'text/html', // (compressible)
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.startResumableUpload_ = (stream: {}, options: any) => {
        assert.strictEqual(options.metadata.contentEncoding, 'gzip');
        done();
      };

      writable.write('data');
    });

    it('should not set encoding with gzip:auto & non-compressible', done => {
      const writable = file.createWriteStream({gzip: 'auto'});
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.startResumableUpload_ = (stream: {}, options: any) => {
        assert.strictEqual(options.metadata.contentEncoding, undefined);
        done();
      };
      writable.write('data');
    });

    it('should re-emit response event', done => {
      const writable = file.createWriteStream();
      const resp = {};

      file.startResumableUpload_ = (stream: Duplex) => {
        stream.emit('response', resp);
      };

      writable.on('response', (resp_: {}) => {
        assert.strictEqual(resp_, resp);
        done();
      });

      writable.write('data');
    });

    it('should cork data on prefinish', done => {
      const writable = file.createWriteStream({resumable: false});

      file.startSimpleUpload_ = (stream: Duplex) => {
        assert.strictEqual(writable._corked, 0);
        stream.emit('prefinish');
        assert.strictEqual(writable._corked, 1);
        done();
      };

      writable.end('data');
    });

    describe('validation', () => {
      const data = 'test';

      const fakeMetadata = {
        crc32c: {crc32c: '####wA=='},
        md5: {md5Hash: 'CY9rzUYh03PK3k6DJie09g=='},
      };

      it('should uncork after successful write', done => {
        const writable = file.createWriteStream({validation: 'crc32c'});

        file.startResumableUpload_ = (stream: Duplex) => {
          setImmediate(() => {
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

      it('should validate with crc32c', done => {
        const writable = file.createWriteStream({validation: 'crc32c'});

        file.startResumableUpload_ = (stream: Duplex) => {
          setImmediate(() => {
            file.metadata = fakeMetadata.crc32c;
            stream.emit('complete');
          });
        };

        writable.end(data);

        writable.on('error', done).on('finish', done);
      });

      it('should emit an error if crc32c validation fails', done => {
        const writable = file.createWriteStream({validation: 'crc32c'});

        file.startResumableUpload_ = (stream: Duplex) => {
          setImmediate(() => {
            file.metadata = fakeMetadata.crc32c;
            stream.emit('complete');
          });
        };

        file.delete = (cb: Function) => {
          cb();
        };

        writable.write('bad-data');
        writable.end();

        writable.on('error', (err: ApiError) => {
          assert.strictEqual(err.code, 'FILE_NO_UPLOAD');
          done();
        });
      });

      it('should validate with md5', done => {
        const writable = file.createWriteStream({validation: 'md5'});

        file.startResumableUpload_ = (stream: Duplex) => {
          setImmediate(() => {
            file.metadata = fakeMetadata.md5;
            stream.emit('complete');
          });
        };

        writable.write(data);
        writable.end();

        writable.on('error', done).on('finish', done);
      });

      it('should emit an error if md5 validation fails', done => {
        const writable = file.createWriteStream({validation: 'md5'});

        file.startResumableUpload_ = (stream: Duplex) => {
          setImmediate(() => {
            file.metadata = fakeMetadata.md5;
            stream.emit('complete');
          });
        };

        file.delete = (cb: Function) => {
          cb();
        };

        writable.write('bad-data');
        writable.end();

        writable.on('error', (err: ApiError) => {
          assert.strictEqual(err.code, 'FILE_NO_UPLOAD');
          done();
        });
      });

      it('should default to md5 validation', done => {
        const writable = file.createWriteStream();

        file.startResumableUpload_ = (stream: Duplex) => {
          setImmediate(() => {
            file.metadata = {md5Hash: 'bad-hash'};
            stream.emit('complete');
          });
        };

        file.delete = (cb: Function) => {
          cb();
        };

        writable.write(data);
        writable.end();

        writable.on('error', (err: ApiError) => {
          assert.strictEqual(err.code, 'FILE_NO_UPLOAD');
          done();
        });
      });

      it('should ignore a data mismatch if validation: false', done => {
        const writable = file.createWriteStream({validation: false});

        file.startResumableUpload_ = (stream: Duplex) => {
          setImmediate(() => {
            file.metadata = {md5Hash: 'bad-hash'};
            stream.emit('complete');
          });
        };

        writable.write(data);
        writable.end();

        writable.on('error', done);
        writable.on('finish', done);
      });

      it('should delete the file if validation fails', done => {
        const writable = file.createWriteStream();

        file.startResumableUpload_ = (stream: Duplex) => {
          setImmediate(() => {
            file.metadata = {md5Hash: 'bad-hash'};
            stream.emit('complete');
          });
        };

        file.delete = () => {
          done();
        };

        writable.write(data);
        writable.end();
      });

      it('should emit an error if MD5 is requested but absent', done => {
        const writable = file.createWriteStream({validation: 'md5'});

        file.startResumableUpload_ = (stream: Duplex) => {
          setImmediate(() => {
            file.metadata = {crc32c: 'not-md5'};
            stream.emit('complete');
          });
        };

        file.delete = (cb: Function) => {
          cb();
        };

        writable.write(data);
        writable.end();

        writable.on('error', (err: ApiError) => {
          assert.strictEqual(err.code, 'MD5_NOT_AVAILABLE');
          done();
        });
      });

      it('should emit a different error if delete fails', done => {
        const writable = file.createWriteStream();

        file.startResumableUpload_ = (stream: Duplex) => {
          setImmediate(() => {
            file.metadata = {md5Hash: 'bad-hash'};
            stream.emit('complete');
          });
        };

        const deleteErrorMessage = 'Delete error message.';
        const deleteError = new Error(deleteErrorMessage);
        file.delete = (cb: Function) => {
          cb(deleteError);
        };

        writable.write(data);
        writable.end();

        writable.on('error', (err: ApiError) => {
          assert.strictEqual(err.code, 'FILE_NO_UPLOAD_DELETE');
          assert(err.message.indexOf(deleteErrorMessage) > -1);
          done();
        });
      });
    });
  });

  describe('deleteResumableCache', () => {
    it('should delete resumable file upload cache', done => {
      file.generation = 123;

      resumableUploadOverride = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        upload(opts: any) {
          assert.strictEqual(opts.bucket, file.bucket.name);
          assert.strictEqual(opts.file, file.name);
          assert.strictEqual(opts.generation, file.generation);

          return {
            deleteConfig: () => {
              done();
            },
          };
        },
      };
      file.deleteResumableCache();
    });
  });

  describe('download', () => {
    let fileReadStream: Readable;

    beforeEach(() => {
      fileReadStream = new Readable();
      fileReadStream._read = util.noop;

      fileReadStream.on('end', () => {
        fileReadStream.emit('complete');
      });

      file.createReadStream = () => {
        return fileReadStream;
      };
    });

    it('should accept just a callback', done => {
      fileReadStream._read = () => {
        done();
      };

      file.download(assert.ifError);
    });

    it('should accept an options object and callback', done => {
      fileReadStream._read = () => {
        done();
      };

      file.download({}, assert.ifError);
    });

    it('should pass the provided options to createReadStream', done => {
      const readOptions = {start: 100, end: 200};

      file.createReadStream = (options: {}) => {
        assert.deepStrictEqual(options, readOptions);
        done();
        return fileReadStream;
      };

      file.download(readOptions, assert.ifError);
    });

    it('should only execute callback once', done => {
      Object.assign(fileReadStream, {
        _read(this: Readable) {
          this.emit('error', new Error('Error.'));
          this.emit('error', new Error('Error.'));
        },
      });

      file.download(() => {
        done();
      });
    });

    describe('into memory', () => {
      it('should buffer a file into memory if no destination', done => {
        const fileContents = 'abcdefghijklmnopqrstuvwxyz';

        Object.assign(fileReadStream, {
          _read(this: Readable) {
            this.push(fileContents);
            this.push(null);
          },
        });

        file.download((err: Error, remoteFileContents: {}) => {
          assert.ifError(err);

          assert.strictEqual(fileContents, remoteFileContents.toString());
          done();
        });
      });

      it('should execute callback with error', done => {
        const error = new Error('Error.');

        Object.assign(fileReadStream, {
          _read(this: Readable) {
            this.emit('error', error);
          },
        });

        file.download((err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('with destination', () => {
      it('should write the file to a destination if provided', done => {
        tmp.setGracefulCleanup();
        tmp.file((err, tmpFilePath) => {
          assert.ifError(err);

          const fileContents = 'abcdefghijklmnopqrstuvwxyz';

          Object.assign(fileReadStream, {
            _read(this: Readable) {
              this.push(fileContents);
              this.push(null);
            },
          });

          file.download({destination: tmpFilePath}, (err: Error) => {
            assert.ifError(err);

            fs.readFile(tmpFilePath, (err, tmpFileContents) => {
              assert.ifError(err);

              assert.strictEqual(fileContents, tmpFileContents.toString());
              done();
            });
          });
        });
      });

      it('should execute callback with error', done => {
        tmp.setGracefulCleanup();
        tmp.file((err, tmpFilePath) => {
          assert.ifError(err);

          const error = new Error('Error.');

          Object.assign(fileReadStream, {
            _read(this: Readable) {
              this.emit('error', error);
            },
          });

          file.download({destination: tmpFilePath}, (err: Error) => {
            assert.strictEqual(err, error);
            done();
          });
        });
      });
    });
  });

  describe('getExpirationDate', () => {
    it('should refresh metadata', done => {
      file.getMetadata = () => {
        done();
      };

      file.getExpirationDate(assert.ifError);
    });

    it('should return error from getMetadata', done => {
      const error = new Error('Error.');
      const apiResponse = {};

      file.getMetadata = (callback: Function) => {
        callback(error, null, apiResponse);
      };

      file.getExpirationDate(
        (err: Error, expirationDate: {}, apiResponse_: {}) => {
          assert.strictEqual(err, error);
          assert.strictEqual(expirationDate, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        }
      );
    });

    it('should return an error if there is no expiration time', done => {
      const apiResponse = {};

      file.getMetadata = (callback: Function) => {
        callback(null, {}, apiResponse);
      };

      file.getExpirationDate(
        (err: Error, expirationDate: {}, apiResponse_: {}) => {
          assert.strictEqual(
            err.message,
            'An expiration time is not available.'
          );
          assert.strictEqual(expirationDate, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        }
      );
    });

    it('should return the expiration time as a Date object', done => {
      const expirationTime = new Date();

      const apiResponse = {
        retentionExpirationTime: expirationTime.toJSON(),
      };

      file.getMetadata = (callback: Function) => {
        callback(null, apiResponse, apiResponse);
      };

      file.getExpirationDate(
        (err: Error, expirationDate: {}, apiResponse_: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual(expirationDate, expirationTime);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        }
      );
    });
  });

  describe('getSignedPolicy', () => {
    it('should alias to generateSignedPostPolicyV2', done => {
      const options = {
        expires: Date.now() + 2000,
      };
      const callback = () => {};

      file.generateSignedPostPolicyV2 = (
        argOpts: GenerateSignedPostPolicyV2Options,
        argCb: GenerateSignedPostPolicyV2Callback
      ) => {
        assert.strictEqual(argOpts, options);
        assert.strictEqual(argCb, callback);
        done();
      };

      file.getSignedPolicy(options, callback);
    });
  });

  describe('generateSignedPostPolicyV2', () => {
    let CONFIG: GenerateSignedPostPolicyV2Options;

    beforeEach(() => {
      CONFIG = {
        expires: Date.now() + 2000,
      };

      BUCKET.storage.authClient = {
        sign: () => {
          return Promise.resolve('signature');
        },
      };
    });

    it('should create a signed policy', done => {
      BUCKET.storage.authClient.sign = (blobToSign: string) => {
        const policy = Buffer.from(blobToSign, 'base64').toString();
        assert.strictEqual(typeof JSON.parse(policy), 'object');
        return Promise.resolve('signature');
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.generateSignedPostPolicyV2(
        CONFIG,
        (err: Error, signedPolicy: PolicyDocument) => {
          assert.ifError(err);
          assert.strictEqual(typeof signedPolicy.string, 'string');
          assert.strictEqual(typeof signedPolicy.base64, 'string');
          assert.strictEqual(typeof signedPolicy.signature, 'string');
          done();
        }
      );
    });

    it('should not modify the configuration object', done => {
      const originalConfig = Object.assign({}, CONFIG);

      file.generateSignedPostPolicyV2(CONFIG, (err: Error) => {
        assert.ifError(err);
        assert.deepStrictEqual(CONFIG, originalConfig);
        done();
      });
    });

    it('should return an error if signBlob errors', done => {
      const error = new Error('Error.');

      BUCKET.storage.authClient.sign = () => {
        return Promise.reject(error);
      };

      file.generateSignedPostPolicyV2(CONFIG, (err: Error) => {
        assert.strictEqual(err.name, 'SigningError');
        assert.strictEqual(err.message, error.message);
        done();
      });
    });

    it('should add key equality condition', done => {
      file.generateSignedPostPolicyV2(
        CONFIG,
        (err: Error, signedPolicy: PolicyDocument) => {
          const conditionString = '["eq","$key","' + file.name + '"]';
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(conditionString) > -1);
          done();
        }
      );
    });

    it('should add ACL condtion', done => {
      file.generateSignedPostPolicyV2(
        {
          expires: Date.now() + 2000,
          acl: '<acl>',
        },
        (err: Error, signedPolicy: PolicyDocument) => {
          const conditionString = '{"acl":"<acl>"}';
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(conditionString) > -1);
          done();
        }
      );
    });

    it('should add success redirect', done => {
      const redirectUrl = 'http://redirect';

      file.generateSignedPostPolicyV2(
        {
          expires: Date.now() + 2000,
          successRedirect: redirectUrl,
        },
        (err: Error, signedPolicy: PolicyDocument) => {
          assert.ifError(err);

          const policy = JSON.parse(signedPolicy.string);

          assert(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            policy.conditions.some((condition: any) => {
              return condition.success_action_redirect === redirectUrl;
            })
          );

          done();
        }
      );
    });

    it('should add success status', done => {
      const successStatus = '200';

      file.generateSignedPostPolicyV2(
        {
          expires: Date.now() + 2000,
          successStatus,
        },
        (err: Error, signedPolicy: PolicyDocument) => {
          assert.ifError(err);

          const policy = JSON.parse(signedPolicy.string);

          assert(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            policy.conditions.some((condition: any) => {
              return condition.success_action_status === successStatus;
            })
          );

          done();
        }
      );
    });

    describe('expires', () => {
      it('should accept Date objects', done => {
        const expires = new Date(Date.now() + 1000 * 60);

        file.generateSignedPostPolicyV2(
          {
            expires,
          },
          (err: Error, policy: PolicyDocument) => {
            assert.ifError(err);
            const expires_ = JSON.parse(policy.string).expiration;
            assert.strictEqual(expires_, expires.toISOString());
            done();
          }
        );
      });

      it('should accept numbers', done => {
        const expires = Date.now() + 1000 * 60;

        file.generateSignedPostPolicyV2(
          {
            expires,
          },
          (err: Error, policy: PolicyDocument) => {
            assert.ifError(err);
            const expires_ = JSON.parse(policy.string).expiration;
            assert.strictEqual(expires_, new Date(expires).toISOString());
            done();
          }
        );
      });

      it('should accept strings', done => {
        const expires = '12-12-2099';

        file.generateSignedPostPolicyV2(
          {
            expires,
          },
          (err: Error, policy: PolicyDocument) => {
            assert.ifError(err);
            const expires_ = JSON.parse(policy.string).expiration;
            assert.strictEqual(expires_, new Date(expires).toISOString());
            done();
          }
        );
      });

      it('should throw if a date is invalid', () => {
        const expires = new Date('31-12-2019');

        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires,
            },
            () => {}
          );
        }, /The expiration date provided was invalid\./);
      });

      it('should throw if a date from the past is given', () => {
        const expires = Date.now() - 5;

        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires,
            },
            () => {}
          );
        }, /An expiration date cannot be in the past\./);
      });
    });

    describe('equality condition', () => {
      it('should add equality conditions (array of arrays)', done => {
        file.generateSignedPostPolicyV2(
          {
            expires: Date.now() + 2000,
            equals: [['$<field>', '<value>']],
          },
          (err: Error, signedPolicy: PolicyDocument) => {
            const conditionString = '["eq","$<field>","<value>"]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          }
        );
      });

      it('should add equality condition (array)', done => {
        file.generateSignedPostPolicyV2(
          {
            expires: Date.now() + 2000,
            equals: ['$<field>', '<value>'],
          },
          (err: Error, signedPolicy: PolicyDocument) => {
            const conditionString = '["eq","$<field>","<value>"]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          }
        );
      });

      it('should throw if equal condition is not an array', () => {
        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires: Date.now() + 2000,
              equals: [{}],
            },
            () => {}
          );
        }, /Equals condition must be an array of 2 elements\./);
      });

      it('should throw if equal condition length is not 2', () => {
        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires: Date.now() + 2000,
              equals: [['1', '2', '3']],
            },
            () => {}
          );
        }, /Equals condition must be an array of 2 elements\./);
      });
    });

    describe('prefix conditions', () => {
      it('should add prefix conditions (array of arrays)', done => {
        file.generateSignedPostPolicyV2(
          {
            expires: Date.now() + 2000,
            startsWith: [['$<field>', '<value>']],
          },
          (err: Error, signedPolicy: PolicyDocument) => {
            const conditionString = '["starts-with","$<field>","<value>"]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          }
        );
      });

      it('should add prefix condition (array)', done => {
        file.generateSignedPostPolicyV2(
          {
            expires: Date.now() + 2000,
            startsWith: ['$<field>', '<value>'],
          },
          (err: Error, signedPolicy: PolicyDocument) => {
            const conditionString = '["starts-with","$<field>","<value>"]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          }
        );
      });

      it('should throw if prexif condition is not an array', () => {
        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires: Date.now() + 2000,
              startsWith: [{}],
            },
            () => {}
          );
        }, /StartsWith condition must be an array of 2 elements\./);
      });

      it('should throw if prefix condition length is not 2', () => {
        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires: Date.now() + 2000,
              startsWith: [['1', '2', '3']],
            },
            () => {}
          );
        }, /StartsWith condition must be an array of 2 elements\./);
      });
    });

    describe('content length', () => {
      it('should add content length condition', done => {
        file.generateSignedPostPolicyV2(
          {
            expires: Date.now() + 2000,
            contentLengthRange: {min: 0, max: 1},
          },
          (err: Error, signedPolicy: PolicyDocument) => {
            const conditionString = '["content-length-range",0,1]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          }
        );
      });

      it('should throw if content length has no min', () => {
        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires: Date.now() + 2000,
              contentLengthRange: [{max: 1}],
            },
            () => {}
          );
        }, /ContentLengthRange must have numeric min & max fields\./);
      });

      it('should throw if content length has no max', () => {
        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires: Date.now() + 2000,
              contentLengthRange: [{min: 0}],
            },
            () => {}
          );
        }, /ContentLengthRange must have numeric min & max fields\./);
      });
    });
  });

  describe('generateSignedPostPolicyV4', () => {
    let CONFIG: GenerateSignedPostPolicyV4Options;

    const NOW = new Date('2020-01-01');
    const CLIENT_EMAIL = 'test@domain.com';
    const SIGNATURE = 'signature';

    let fakeTimer: sinon.SinonFakeTimers;
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      fakeTimer = sinon.useFakeTimers(NOW);
      CONFIG = {
        expires: NOW.valueOf() + 2000,
      };

      BUCKET.storage.authClient = {
        sign: sandbox.stub().resolves(SIGNATURE),
        getCredentials: sandbox.stub().resolves({client_email: CLIENT_EMAIL}),
      };
    });

    afterEach(() => {
      sandbox.restore();
      fakeTimer.restore();
    });

    const fieldsToConditions = (fields: object) =>
      Object.entries(fields).map(([k, v]) => ({[k]: v}));

    it('should create a signed policy', done => {
      CONFIG.fields = {
        'x-goog-meta-foo': 'bar',
      };

      const requiredFields = {
        key: file.name,
        'x-goog-date': '20200101T000000Z',
        'x-goog-credential': `${CLIENT_EMAIL}/20200101/auto/storage/goog4_request`,
        'x-goog-algorithm': 'GOOG4-RSA-SHA256',
      };

      const policy = {
        conditions: [
          ...fieldsToConditions(CONFIG.fields),
          {bucket: BUCKET.name},
          ...fieldsToConditions(requiredFields),
        ],
        expiration: dateFormat.format(
          new Date(CONFIG.expires),
          'YYYY-MM-DD[T]HH:mm:ss[Z]',
          true
        ),
      };

      const policyString = JSON.stringify(policy);
      const EXPECTED_POLICY = Buffer.from(policyString).toString('base64');
      const EXPECTED_SIGNATURE = Buffer.from(SIGNATURE, 'base64').toString(
        'hex'
      );
      const EXPECTED_FIELDS = {
        ...CONFIG.fields,
        ...requiredFields,
        'x-goog-signature': EXPECTED_SIGNATURE,
        policy: EXPECTED_POLICY,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.generateSignedPostPolicyV4(
        CONFIG,
        (err: Error, res: SignedPostPolicyV4Output) => {
          assert.ifError(err);
          assert(res.url, `${STORAGE_POST_POLICY_BASE_URL}/${BUCKET.name}`);

          assert.deepStrictEqual(res.fields, EXPECTED_FIELDS);

          const signStub = BUCKET.storage.authClient.sign;
          assert.deepStrictEqual(
            Buffer.from(signStub.getCall(0).args[0], 'base64').toString(),
            policyString
          );

          done();
        }
      );
    });

    it('should not modify the configuration object', done => {
      const originalConfig = Object.assign({}, CONFIG);

      file.generateSignedPostPolicyV4(CONFIG, (err: Error) => {
        assert.ifError(err);
        assert.deepStrictEqual(CONFIG, originalConfig);
        done();
      });
    });

    it('should return an error if signBlob errors', done => {
      const error = new Error('Error.');

      BUCKET.storage.authClient.sign.rejects(error);

      file.generateSignedPostPolicyV4(CONFIG, (err: Error) => {
        assert.strictEqual(err.name, 'SigningError');
        assert.strictEqual(err.message, error.message);
        done();
      });
    });

    it('should add key condition', done => {
      file.generateSignedPostPolicyV4(
        CONFIG,
        (err: Error, res: SignedPostPolicyV4Output) => {
          assert.ifError(err);

          assert.strictEqual(res.fields['key'], file.name);
          const EXPECTED_POLICY_ELEMENT = `{"key":"${file.name}"}`;
          assert(
            Buffer.from(res.fields.policy, 'base64')
              .toString('utf-8')
              .includes(EXPECTED_POLICY_ELEMENT)
          );
          done();
        }
      );
    });

    it('should include fields in conditions', done => {
      CONFIG = {
        fields: {
          'x-goog-meta-foo': 'bar',
        },
        ...CONFIG,
      };

      file.generateSignedPostPolicyV4(
        CONFIG,
        (err: Error, res: SignedPostPolicyV4Output) => {
          assert.ifError(err);

          const expectedConditionString = JSON.stringify(CONFIG.fields);
          assert.strictEqual(res.fields['x-goog-meta-foo'], 'bar');
          const decodedPolicy = Buffer.from(
            res.fields.policy,
            'base64'
          ).toString('utf-8');
          assert(decodedPolicy.includes(expectedConditionString));
          done();
        }
      );
    });

    it('should encode special characters in policy', done => {
      CONFIG = {
        fields: {
          'x-goog-meta-foo': 'bår',
        },
        ...CONFIG,
      };

      file.generateSignedPostPolicyV4(
        CONFIG,
        (err: Error, res: SignedPostPolicyV4Output) => {
          assert.ifError(err);

          assert.strictEqual(res.fields['x-goog-meta-foo'], 'bår');
          const decodedPolicy = Buffer.from(
            res.fields.policy,
            'base64'
          ).toString('utf-8');
          assert(decodedPolicy.includes('"x-goog-meta-foo":"b\\u00e5r"'));
          done();
        }
      );
    });

    it('should not include fields with x-ignore- prefix in conditions', done => {
      CONFIG = {
        fields: {
          'x-ignore-foo': 'bar',
        },
        ...CONFIG,
      };

      file.generateSignedPostPolicyV4(
        CONFIG,
        (err: Error, res: SignedPostPolicyV4Output) => {
          assert.ifError(err);

          const expectedConditionString = JSON.stringify(CONFIG.fields);
          assert.strictEqual(res.fields['x-ignore-foo'], 'bar');
          const decodedPolicy = Buffer.from(
            res.fields.policy,
            'base64'
          ).toString('utf-8');
          assert(!decodedPolicy.includes(expectedConditionString));

          const signStub = BUCKET.storage.authClient.sign;
          assert(!signStub.getCall(0).args[0].includes('x-ignore-foo'));
          done();
        }
      );
    });

    it('should accept conditions', done => {
      CONFIG = {
        conditions: [['starts-with', '$key', 'prefix-']],
        ...CONFIG,
      };

      file.generateSignedPostPolicyV4(
        CONFIG,
        (err: Error, res: SignedPostPolicyV4Output) => {
          assert.ifError(err);

          const expectedConditionString = JSON.stringify(CONFIG.conditions);
          const decodedPolicy = Buffer.from(
            res.fields.policy,
            'base64'
          ).toString('utf-8');
          assert(decodedPolicy.includes(expectedConditionString));

          const signStub = BUCKET.storage.authClient.sign;
          assert(
            !signStub.getCall(0).args[0].includes(expectedConditionString)
          );
          done();
        }
      );
    });

    it('should output url with cname', done => {
      CONFIG.bucketBoundHostname = 'http://domain.tld';

      file.generateSignedPostPolicyV4(
        CONFIG,
        (err: Error, res: SignedPostPolicyV4Output) => {
          assert.ifError(err);
          assert(res.url, CONFIG.bucketBoundHostname);
          done();
        }
      );
    });

    it('should output a virtualHostedStyle url', done => {
      CONFIG.virtualHostedStyle = true;

      file.generateSignedPostPolicyV4(
        CONFIG,
        (err: Error, res: SignedPostPolicyV4Output) => {
          assert.ifError(err);
          assert(res.url, `https://${BUCKET.name}.storage.googleapis.com/`);
          done();
        }
      );
    });

    describe('expires', () => {
      it('should accept Date objects', done => {
        const expires = new Date(Date.now() + 1000 * 60);

        file.generateSignedPostPolicyV4(
          {
            expires,
          },
          (err: Error, response: SignedPostPolicyV4Output) => {
            assert.ifError(err);
            const policy = JSON.parse(
              Buffer.from(response.fields.policy, 'base64').toString()
            );
            assert.strictEqual(
              policy.expiration,
              dateFormat.format(expires, 'YYYY-MM-DD[T]HH:mm:ss[Z]', true)
            );
            done();
          }
        );
      });

      it('should accept numbers', done => {
        const expires = Date.now() + 1000 * 60;

        file.generateSignedPostPolicyV4(
          {
            expires,
          },
          (err: Error, response: SignedPostPolicyV4Output) => {
            assert.ifError(err);
            const policy = JSON.parse(
              Buffer.from(response.fields.policy, 'base64').toString()
            );
            assert.strictEqual(
              policy.expiration,
              dateFormat.format(
                new Date(expires),
                'YYYY-MM-DD[T]HH:mm:ss[Z]',
                true
              )
            );
            done();
          }
        );
      });

      it('should accept strings', done => {
        const expires = dateFormat.format(
          new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
          'YYYY-MM-DD',
          true
        );

        file.generateSignedPostPolicyV4(
          {
            expires,
          },
          (err: Error, response: SignedPostPolicyV4Output) => {
            assert.ifError(err);
            const policy = JSON.parse(
              Buffer.from(response.fields.policy, 'base64').toString()
            );
            assert.strictEqual(
              policy.expiration,
              dateFormat.format(
                new Date(expires),
                'YYYY-MM-DD[T]HH:mm:ss[Z]',
                true
              )
            );
            done();
          }
        );
      });

      it('should throw if a date is invalid', () => {
        const expires = new Date('31-12-2019');

        assert.throws(() => {
          file.generateSignedPostPolicyV4(
            {
              expires,
            },
            () => {}
          );
        }, /The expiration date provided was invalid\./);
      });

      it('should throw if a date from the past is given', () => {
        const expires = Date.now() - 5;

        assert.throws(() => {
          file.generateSignedPostPolicyV4(
            {
              expires,
            },
            () => {}
          );
        }, /An expiration date cannot be in the past\./);
      });

      it('should throw if a date beyond 7 days is given', () => {
        const expires = Date.now() + 7.1 * 24 * 60 * 60 * 1000;

        assert.throws(
          () => {
            file.generateSignedPostPolicyV4(
              {
                expires,
              },
              () => {}
            );
          },
          {message: 'Max allowed expiration is seven days (604800 seconds).'}
        );
      });
    });
  });

  describe('getSignedUrl', () => {
    const EXPECTED_SIGNED_URL = 'signed-url';
    const CNAME = 'https://www.example.com';

    let sandbox: sinon.SinonSandbox;
    let signer: {getSignedUrl: Function};
    let signerGetSignedUrlStub: sinon.SinonStub;
    let urlSignerStub: sinon.SinonStub;
    let SIGNED_URL_CONFIG: GetSignedUrlConfig;

    beforeEach(() => {
      sandbox = sinon.createSandbox();

      signerGetSignedUrlStub = sandbox.stub().resolves(EXPECTED_SIGNED_URL);

      signer = {
        getSignedUrl: signerGetSignedUrlStub,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      urlSignerStub = (sandbox.stub as any)(fakeSigner, 'URLSigner').returns(
        signer
      );

      SIGNED_URL_CONFIG = {
        version: 'v4',
        expires: new Date(),
        action: 'read',
        cname: CNAME,
      };
    });

    afterEach(() => sandbox.restore());

    it('should construct a URLSigner and call getSignedUrl', done => {
      const accessibleAtDate = new Date();
      const config = {
        contentMd5: 'md5-hash',
        contentType: 'application/json',
        accessibleAt: accessibleAtDate,
        virtualHostedStyle: true,
        ...SIGNED_URL_CONFIG,
      };
      // assert signer is lazily-initialized.
      assert.strictEqual(file.signer, undefined);
      file.getSignedUrl(config, (err: Error | null, signedUrl: string) => {
        assert.ifError(err);
        assert.strictEqual(file.signer, signer);
        assert.strictEqual(signedUrl, EXPECTED_SIGNED_URL);

        const ctorArgs = urlSignerStub.getCall(0).args;
        assert.strictEqual(ctorArgs[0], file.storage.authClient);
        assert.strictEqual(ctorArgs[1], file.bucket);
        assert.strictEqual(ctorArgs[2], file);

        const getSignedUrlArgs = signerGetSignedUrlStub.getCall(0).args;
        assert.deepStrictEqual(getSignedUrlArgs[0], {
          method: 'GET',
          version: 'v4',
          expires: config.expires,
          accessibleAt: accessibleAtDate,
          extensionHeaders: {},
          queryParams: {},
          contentMd5: config.contentMd5,
          contentType: config.contentType,
          cname: CNAME,
          virtualHostedStyle: true,
        });
        done();
      });
    });

    it('should error if action is null', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      SIGNED_URL_CONFIG.action = null as any;

      assert.throws(() => {
        file.getSignedUrl(SIGNED_URL_CONFIG, () => {});
      }, /The action is not provided or invalid./);
    });

    it('should error if action is undefined', () => {
      delete SIGNED_URL_CONFIG.action;
      assert.throws(() => {
        file.getSignedUrl(SIGNED_URL_CONFIG, () => {});
      }, /The action is not provided or invalid./);
    });

    it('should error for an invalid action', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      SIGNED_URL_CONFIG.action = 'watch' as any;

      assert.throws(() => {
        file.getSignedUrl(SIGNED_URL_CONFIG, () => {});
      }, /The action is not provided or invalid./);
    });

    it('should add "x-goog-resumable: start" header if action is resumable', done => {
      SIGNED_URL_CONFIG.action = 'resumable';
      SIGNED_URL_CONFIG.extensionHeaders = {
        'another-header': 'value',
      };

      file.getSignedUrl(SIGNED_URL_CONFIG, (err: Error | null) => {
        assert.ifError(err);
        const getSignedUrlArgs = signerGetSignedUrlStub.getCall(0).args;
        assert.strictEqual(getSignedUrlArgs[0]['method'], 'POST');
        assert.deepStrictEqual(getSignedUrlArgs[0]['extensionHeaders'], {
          'another-header': 'value',
          'x-goog-resumable': 'start',
        });
        done();
      });
    });

    it('should add response-content-type query parameter', done => {
      SIGNED_URL_CONFIG.responseType = 'application/json';
      file.getSignedUrl(SIGNED_URL_CONFIG, (err: Error | null) => {
        assert.ifError(err);
        const getSignedUrlArgs = signerGetSignedUrlStub.getCall(0).args;
        assert.deepStrictEqual(getSignedUrlArgs[0]['queryParams'], {
          'response-content-type': 'application/json',
        });
        done();
      });
    });

    it('should respect promptSaveAs argument', done => {
      const filename = 'fname.txt';
      SIGNED_URL_CONFIG.promptSaveAs = filename;
      file.getSignedUrl(SIGNED_URL_CONFIG, (err: Error | null) => {
        assert.ifError(err);
        const getSignedUrlArgs = signerGetSignedUrlStub.getCall(0).args;
        assert.deepStrictEqual(getSignedUrlArgs[0]['queryParams'], {
          'response-content-disposition':
            'attachment; filename="' + filename + '"',
        });
        done();
      });
    });

    it('should add response-content-disposition query parameter', done => {
      const disposition = 'attachment; filename="fname.ext"';
      SIGNED_URL_CONFIG.responseDisposition = disposition;
      file.getSignedUrl(SIGNED_URL_CONFIG, (err: Error | null) => {
        assert.ifError(err);
        const getSignedUrlArgs = signerGetSignedUrlStub.getCall(0).args;
        assert.deepStrictEqual(getSignedUrlArgs[0]['queryParams'], {
          'response-content-disposition': disposition,
        });
        done();
      });
    });

    it('should ignore promptSaveAs if set', done => {
      const saveAs = 'fname2.ext';
      const disposition = 'attachment; filename="fname.ext"';
      SIGNED_URL_CONFIG.promptSaveAs = saveAs;
      SIGNED_URL_CONFIG.responseDisposition = disposition;

      file.getSignedUrl(SIGNED_URL_CONFIG, (err: Error | null) => {
        assert.ifError(err);
        const getSignedUrlArgs = signerGetSignedUrlStub.getCall(0).args;
        assert.deepStrictEqual(getSignedUrlArgs[0]['queryParams'], {
          'response-content-disposition': disposition,
        });
        done();
      });
    });

    it('should add generation to query parameter', done => {
      file.generation = '246680131';

      file.getSignedUrl(SIGNED_URL_CONFIG, (err: Error | null) => {
        assert.ifError(err);
        const getSignedUrlArgs = signerGetSignedUrlStub.getCall(0).args;
        assert.deepStrictEqual(getSignedUrlArgs[0]['queryParams'], {
          generation: file.generation,
        });
        done();
      });
    });
  });

  describe('makePrivate', () => {
    it('should execute callback with API response', done => {
      const apiResponse = {};

      file.setMetadata = (metadata: {}, query: {}, callback: Function) => {
        callback(null, apiResponse);
      };

      file.makePrivate((err: Error, apiResponse_: {}) => {
        assert.ifError(err);
        assert.strictEqual(apiResponse_, apiResponse);

        done();
      });
    });

    it('should execute callback with error & API response', done => {
      const error = new Error('Error.');
      const apiResponse = {};

      file.setMetadata = (metadata: {}, query: {}, callback: Function) => {
        callback(error, apiResponse);
      };

      file.makePrivate((err: Error, apiResponse_: {}) => {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);

        done();
      });
    });

    it('should make the file private to project by default', done => {
      file.setMetadata = (metadata: {}, query: {}) => {
        assert.deepStrictEqual(metadata, {acl: null});
        assert.deepStrictEqual(query, {predefinedAcl: 'projectPrivate'});
        done();
      };

      file.makePrivate(util.noop);
    });

    it('should make the file private to user if strict = true', done => {
      file.setMetadata = (metadata: {}, query: {}) => {
        assert.deepStrictEqual(query, {predefinedAcl: 'private'});
        done();
      };

      file.makePrivate({strict: true}, util.noop);
    });

    it('should accept userProject', done => {
      const options = {
        userProject: 'user-project-id',
      };

      file.setMetadata = (metadata: {}, query: SetFileMetadataOptions) => {
        assert.strictEqual(query.userProject, options.userProject);
        done();
      };

      file.makePrivate(options, assert.ifError);
    });
  });

  describe('makePublic', () => {
    it('should execute callback', done => {
      file.acl.add = (options: {}, callback: Function) => {
        callback();
      };

      file.makePublic(done);
    });

    it('should make the file public', done => {
      file.acl.add = (options: {}) => {
        assert.deepStrictEqual(options, {entity: 'allUsers', role: 'READER'});
        done();
      };

      file.makePublic(util.noop);
    });
  });

  describe('publicUrl', () => {
    it('should return the public URL', done => {
      const NAME = 'file-name';
      const file = new File(BUCKET, NAME);
      assert.strictEqual(
        file.publicUrl(),
        `https://storage.googleapis.com/bucket-name/${NAME}`
      );
      done();
    });

    it('with slash in the name', done => {
      const NAME = 'parent/child';
      const file = new File(BUCKET, NAME);
      assert.strictEqual(
        file.publicUrl(),
        `https://storage.googleapis.com/bucket-name/${NAME}`
      );
      done();
    });

    it('with tilde in the name', done => {
      const NAME = 'foo~bar';
      const file = new File(BUCKET, NAME);
      assert.strictEqual(
        file.publicUrl(),
        `https://storage.googleapis.com/bucket-name/${NAME}`
      );
      done();
    });

    it('with non ascii in the name', done => {
      const NAME = '\u2603';
      const file = new File(BUCKET, NAME);
      assert.strictEqual(
        file.publicUrl(),
        `https://storage.googleapis.com/bucket-name/${NAME}`
      );
      done();
    });
  });

  describe('isPublic', () => {
    const sandbox = sinon.createSandbox();

    afterEach(() => sandbox.restore());

    it('should execute callback with `true` in response', done => {
      sandbox.stub(gaxios, 'request').resolves();
      file.isPublic((err: gaxios.GaxiosError, resp: boolean) => {
        assert.ifError(err);
        assert.strictEqual(resp, true);
        done();
      });
    });

    it('should execute callback with `false` in response', done => {
      sandbox.stub(gaxios, 'request').rejects({code: '403'});
      file.isPublic((err: gaxios.GaxiosError, resp: boolean) => {
        assert.ifError(err);
        assert.strictEqual(resp, false);
        done();
      });
    });

    it('should propagate non-403 errors to user', done => {
      const error = {code: '400'};
      sandbox.stub(gaxios, 'request').rejects(error as gaxios.GaxiosError);
      file.isPublic((err: gaxios.GaxiosError) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should correctly send a HEAD request', done => {
      const spy = sandbox.spy(gaxios, 'request');
      file.isPublic((err: gaxios.GaxiosError) => {
        assert.ifError(err);
        assert.strictEqual(spy.calledWithMatch({method: 'HEAD'}), true);
        done();
      });
    });

    it('should correctly format URL in the request', done => {
      file = new File(BUCKET, 'my#file$.png');
      const expecterURL = `http://${
        BUCKET.name
      }.storage.googleapis.com/${encodeURIComponent(file.name)}`;
      const spy = sandbox.spy(gaxios, 'request');
      file.isPublic((err: gaxios.GaxiosError) => {
        assert.ifError(err);
        assert.strictEqual(spy.calledWithMatch({url: expecterURL}), true);
        done();
      });
    });
  });

  describe('move', () => {
    describe('copy to destination', () => {
      function assertCopyFile(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        file: any,
        expectedDestination: string,
        callback: Function
      ) {
        file.copy = (destination: string) => {
          assert.strictEqual(destination, expectedDestination);
          callback();
        };
      }

      it('should call copy with string', done => {
        const newFileName = 'new-file-name.png';
        assertCopyFile(file, newFileName, done);
        file.move(newFileName);
      });

      it('should call copy with Bucket', done => {
        assertCopyFile(file, BUCKET, done);
        file.move(BUCKET);
      });

      it('should call copy with File', done => {
        const newFile = new File(BUCKET, 'new-file');
        assertCopyFile(file, newFile, done);
        file.move(newFile);
      });

      it('should accept an options object', done => {
        const newFile = new File(BUCKET, 'name');
        const options = {};

        file.copy = (destination: {}, options_: {}) => {
          assert.strictEqual(options_, options);
          done();
        };

        file.move(newFile, options, assert.ifError);
      });

      it('should fail if copy fails', done => {
        const originalErrorMessage = 'Original error message.';
        const error = new Error(originalErrorMessage);
        file.copy = (destination: {}, options: {}, callback: Function) => {
          callback(error);
        };
        file.move('new-filename', (err: Error) => {
          assert.strictEqual(err, error);
          assert.strictEqual(
            err.message,
            `file#copy failed with an error - ${originalErrorMessage}`
          );
          done();
        });
      });
    });

    describe('delete original file', () => {
      it('should call the callback with destinationFile and copyApiResponse', done => {
        const copyApiResponse = {};
        const newFile = new File(BUCKET, 'new-filename');
        file.copy = (destination: {}, options: {}, callback: Function) => {
          callback(null, newFile, copyApiResponse);
        };
        file.delete = (_: {}, callback: Function) => {
          callback();
        };

        file.move(
          'new-filename',
          (err: Error, destinationFile: File, apiResponse: {}) => {
            assert.ifError(err);
            assert.strictEqual(destinationFile, newFile);
            assert.strictEqual(apiResponse, copyApiResponse);
            done();
          }
        );
      });

      it('should delete if copy is successful', done => {
        const destinationFile = {bucket: {}};
        file.copy = (destination: {}, options: {}, callback: Function) => {
          callback(null, destinationFile);
        };
        Object.assign(file, {
          delete() {
            assert.strictEqual(this, file);
            done();
          },
        });
        file.move('new-filename');
      });

      it('should not delete if copy fails', done => {
        let deleteCalled = false;
        file.copy = (destination: {}, options: {}, callback: Function) => {
          callback(new Error('Error.'));
        };
        file.delete = () => {
          deleteCalled = true;
        };
        file.move('new-filename', () => {
          assert.strictEqual(deleteCalled, false);
          done();
        });
      });

      it('should not delete the destination is same as origin', done => {
        file.request = (config: {}, callback: Function) => {
          callback(null, {});
        };
        const stub = sinon.stub(file, 'delete');
        // destination is same bucket as object
        file.move(BUCKET, (err: Error) => {
          assert.ifError(err);
          // destination is same file as object
          file.move(file, (err: Error) => {
            assert.ifError(err);
            // destination is same file name as string
            file.move(file.name, (err: Error) => {
              assert.ifError(err);
              assert.ok(stub.notCalled);
              stub.reset();
              done();
            });
          });
        });
      });

      it('should pass options to delete', done => {
        const options = {};
        const destinationFile = {bucket: {}};

        file.copy = (destination: {}, options: {}, callback: Function) => {
          callback(null, destinationFile);
        };

        file.delete = (options_: {}) => {
          assert.strictEqual(options_, options);
          done();
        };

        file.move('new-filename', options, assert.ifError);
      });

      it('should fail if delete fails', done => {
        const originalErrorMessage = 'Original error message.';
        const error = new Error(originalErrorMessage);
        const destinationFile = {bucket: {}};
        file.copy = (destination: {}, options: {}, callback: Function) => {
          callback(null, destinationFile);
        };
        file.delete = (options: {}, callback: Function) => {
          callback(error);
        };
        file.move('new-filename', (err: Error) => {
          assert.strictEqual(err, error);
          assert.strictEqual(
            err.message,
            `file#delete failed with an error - ${originalErrorMessage}`
          );
          done();
        });
      });
    });
  });

  describe('rename', () => {
    it('should correctly call File#move', done => {
      const newFileName = 'renamed-file.txt';
      const options = {};
      file.move = (dest: string, opts: MoveOptions, cb: Function) => {
        assert.strictEqual(dest, newFileName);
        assert.strictEqual(opts, options);
        assert.strictEqual(cb, done);
        cb();
      };
      file.rename(newFileName, options, done);
    });

    it('should accept File object', done => {
      const newFileObject = new File(BUCKET, 'renamed-file.txt');
      const options = {};
      file.move = (dest: string, opts: MoveOptions, cb: Function) => {
        assert.strictEqual(dest, newFileObject);
        assert.strictEqual(opts, options);
        assert.strictEqual(cb, done);
        cb();
      };
      file.rename(newFileObject, options, done);
    });

    it('should not require options', done => {
      file.move = (dest: string, opts: MoveOptions, cb: Function) => {
        assert.deepStrictEqual(opts, {});
        cb();
      };
      file.rename('new-name', done);
    });
  });

  describe('request', () => {
    it('should call the parent request function', () => {
      const options = {};
      const callback = () => {};
      const expectedReturnValue = {};

      file.parent.request = function (
        reqOpts: DecorateRequestOptions,
        callback_: Function
      ) {
        assert.strictEqual(this, file);
        assert.strictEqual(reqOpts, options);
        assert.strictEqual(callback_, callback);
        return expectedReturnValue;
      };

      const returnedValue = file.request(options, callback);
      assert.strictEqual(returnedValue, expectedReturnValue);
    });
  });

  describe('rotateEncryptionKey', () => {
    it('should create new File correctly', done => {
      const options = {};

      file.bucket.file = (id: {}, options_: {}) => {
        assert.strictEqual(id, file.id);
        assert.strictEqual(options_, options);
        done();
      };

      file.rotateEncryptionKey(options, assert.ifError);
    });

    it('should default to customer-supplied encryption key', done => {
      const encryptionKey = 'encryption-key';

      file.bucket.file = (id: {}, options: FileOptions) => {
        assert.strictEqual(options.encryptionKey, encryptionKey);
        done();
      };

      file.rotateEncryptionKey(encryptionKey, assert.ifError);
    });

    it('should accept a Buffer for customer-supplied encryption key', done => {
      const encryptionKey = crypto.randomBytes(32);

      file.bucket.file = (id: {}, options: FileOptions) => {
        assert.strictEqual(options.encryptionKey, encryptionKey);
        done();
      };

      file.rotateEncryptionKey(encryptionKey, assert.ifError);
    });

    it('should call copy correctly', done => {
      const newFile = {};

      file.bucket.file = () => {
        return newFile;
      };

      file.copy = (destination: string, callback: Function) => {
        assert.strictEqual(destination, newFile);
        callback(); // done()
      };

      file.rotateEncryptionKey({}, done);
    });
  });

  describe('save', () => {
    const DATA = 'Data!';

    it('should accept an options object', done => {
      const options = {};

      file.createWriteStream = (options_: {}) => {
        assert.strictEqual(options_, options);
        setImmediate(done);
        return new PassThrough();
      };

      file.save(DATA, options, assert.ifError);
    });

    it('should not require options', done => {
      file.createWriteStream = (options_: {}) => {
        assert.deepStrictEqual(options_, {});
        setImmediate(done);
        return new PassThrough();
      };

      file.save(DATA, assert.ifError);
    });

    it('should register the error listener', done => {
      file.createWriteStream = () => {
        const writeStream = new PassThrough();
        writeStream.on('error', done);
        setImmediate(() => {
          writeStream.emit('error');
        });
        return writeStream;
      };

      file.save(DATA, assert.ifError);
    });

    it('should register the finish listener', done => {
      file.createWriteStream = () => {
        const writeStream = new PassThrough();
        writeStream.once('finish', done);
        return writeStream;
      };

      file.save(DATA, assert.ifError);
    });

    it('should register the progress listener if onUploadProgress is passed', done => {
      const onUploadProgress = util.noop;
      file.createWriteStream = () => {
        const writeStream = new PassThrough();
        setImmediate(() => {
          const [listener] = writeStream.listeners('progress');
          assert.strictEqual(listener, onUploadProgress);
          done();
        });
        return writeStream;
      };

      file.save(DATA, {onUploadProgress}, assert.ifError);
    });

    it('should write the data', done => {
      file.createWriteStream = () => {
        const writeStream = new PassThrough();
        writeStream.on('data', data => {
          assert.strictEqual(data.toString(), DATA);
          done();
        });
        return writeStream;
      };

      file.save(DATA, assert.ifError);
    });
  });

  describe('setStorageClass', () => {
    const STORAGE_CLASS = 'new_storage_class';

    it('should make the correct copy request', done => {
      file.copy = (newFile: {}, options: {}) => {
        assert.strictEqual(newFile, file);
        assert.deepStrictEqual(options, {
          storageClass: STORAGE_CLASS.toUpperCase(),
        });
        done();
      };

      file.setStorageClass(STORAGE_CLASS, assert.ifError);
    });

    it('should accept options', done => {
      const options = {
        a: 'b',
        c: 'd',
      };

      const expectedOptions = {
        a: 'b',
        c: 'd',
        storageClass: STORAGE_CLASS.toUpperCase(),
      };

      file.copy = (newFile: {}, options: {}) => {
        assert.deepStrictEqual(options, expectedOptions);
        done();
      };

      file.setStorageClass(STORAGE_CLASS, options, assert.ifError);
    });

    it('should convert camelCase to snake_case', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.copy = (newFile: {}, options: any) => {
        assert.strictEqual(options.storageClass, 'CAMEL_CASE');
        done();
      };

      file.setStorageClass('camelCase', assert.ifError);
    });

    it('should convert hyphenate to snake_case', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.copy = (newFile: {}, options: any) => {
        assert.strictEqual(options.storageClass, 'HYPHENATED_CLASS');
        done();
      };

      file.setStorageClass('hyphenated-class', assert.ifError);
    });

    describe('error', () => {
      const ERROR = new Error('Error.');
      const API_RESPONSE = {};

      beforeEach(() => {
        file.copy = (newFile: {}, options: {}, callback: Function) => {
          callback(ERROR, null, API_RESPONSE);
        };
      });

      it('should execute callback with error & API response', done => {
        file.setStorageClass(STORAGE_CLASS, (err: Error, apiResponse: {}) => {
          assert.strictEqual(err, ERROR);
          assert.strictEqual(apiResponse, API_RESPONSE);
          done();
        });
      });
    });

    describe('success', () => {
      const METADATA = {};

      const COPIED_FILE = {
        metadata: METADATA,
      };

      const API_RESPONSE = {};

      beforeEach(() => {
        file.copy = (newFile: {}, options: {}, callback: Function) => {
          callback(null, COPIED_FILE, API_RESPONSE);
        };
      });

      it('should update the metadata on the file', done => {
        file.setStorageClass(STORAGE_CLASS, (err: Error) => {
          assert.ifError(err);
          assert.strictEqual(file.metadata, METADATA);
          done();
        });
      });

      it('should execute callback with api response', done => {
        file.setStorageClass(STORAGE_CLASS, (err: Error, apiResponse: {}) => {
          assert.ifError(err);
          assert.strictEqual(apiResponse, API_RESPONSE);
          done();
        });
      });
    });
  });

  describe('setEncryptionKey', () => {
    const KEY = crypto.randomBytes(32);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const KEY_BASE64 = Buffer.from(KEY as any).toString('base64');
    const KEY_HASH = crypto
      .createHash('sha256')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .update(KEY_BASE64, 'base64' as any)
      .digest('base64');
    let _file: {};

    beforeEach(() => {
      _file = file.setEncryptionKey(KEY);
    });

    it('should localize the key', () => {
      assert.strictEqual(file.encryptionKey, KEY);
    });

    it('should localize the base64 key', () => {
      assert.strictEqual(file.encryptionKeyBase64, KEY_BASE64);
    });

    it('should localize the hash', () => {
      assert.strictEqual(file.encryptionKeyHash, KEY_HASH);
    });

    it('should return the file instance', () => {
      assert.strictEqual(_file, file);
    });

    it('should push the correct request interceptor', done => {
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

  describe('startResumableUpload_', () => {
    beforeEach(() => {
      file.getRequestInterceptors = () => [];
    });

    describe('starting', () => {
      it('should start a resumable upload', done => {
        const options = {
          configPath: '/Users/user/.config/here',
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

        const customRequestInterceptors = [
          (reqOpts: gaxios.GaxiosOptions) => {
            reqOpts.headers = Object.assign({}, reqOpts.headers, {
              a: 'b',
            });
            return reqOpts;
          },
          (reqOpts: gaxios.GaxiosOptions) => {
            reqOpts.headers = Object.assign({}, reqOpts.headers, {
              c: 'd',
            });
            return reqOpts;
          },
        ];
        file.getRequestInterceptors = () => {
          return customRequestInterceptors;
        };

        resumableUploadOverride = {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          upload(opts: any) {
            const bucket = file.bucket;
            const storage = bucket.storage;
            const authClient = storage.makeAuthenticatedRequest.authClient;

            assert.strictEqual(opts.authClient, authClient);
            assert.strictEqual(opts.apiEndpoint, storage.apiEndpoint);
            assert.strictEqual(opts.bucket, bucket.name);
            assert.strictEqual(opts.configPath, options.configPath);
            assert.deepStrictEqual(opts.customRequestOptions, {
              headers: {
                a: 'b',
                c: 'd',
              },
            });
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
            return new PassThrough();
          },
        };

        file.startResumableUpload_(duplexify(), options);
      });

      it('should emit the response', done => {
        const resp = {};
        const uploadStream = new PassThrough();

        resumableUploadOverride = {
          upload() {
            setImmediate(() => {
              uploadStream.emit('response', resp);
            });
            return uploadStream;
          },
        };

        uploadStream.on('response', resp_ => {
          assert.strictEqual(resp_, resp);
          done();
        });

        file.startResumableUpload_(duplexify());
      });

      it('should set the metadata from the metadata event', done => {
        const metadata = {};
        const uploadStream = new PassThrough();

        resumableUploadOverride = {
          upload() {
            setImmediate(() => {
              uploadStream.emit('metadata', metadata);

              setImmediate(() => {
                assert.strictEqual(file.metadata, metadata);
                done();
              });
            });
            return uploadStream;
          },
        };

        file.startResumableUpload_(duplexify());
      });

      it('should emit complete after the stream finishes', done => {
        const dup = duplexify();

        dup.on('complete', done);

        resumableUploadOverride = {
          upload() {
            const uploadStream = new Transform();
            setImmediate(() => {
              uploadStream.end();
            });
            return uploadStream;
          },
        };

        file.startResumableUpload_(dup);
      });

      it('should set the writable stream', done => {
        const dup = duplexify();
        const uploadStream = new PassThrough();

        dup.setWritable = (stream: Duplex) => {
          assert.strictEqual(stream, uploadStream);
          done();
        };

        resumableUploadOverride = {
          upload() {
            return uploadStream;
          },
        };

        file.startResumableUpload_(dup);
      });

      it('should emit progress event', done => {
        const progress = {};
        const dup = duplexify();
        dup.on('progress', evt => {
          assert.strictEqual(evt, progress);
          done();
        });

        resumableUploadOverride = {
          upload() {
            const uploadStream = new Transform();
            setImmediate(() => {
              uploadStream.emit('progress', progress);
            });

            return uploadStream;
          },
        };

        file.startResumableUpload_(dup);
      });
    });
  });

  describe('startSimpleUpload_', () => {
    it('should get a writable stream', done => {
      makeWritableStreamOverride = () => {
        done();
      };

      file.startSimpleUpload_(duplexify());
    });

    it('should pass the required arguments', done => {
      const options = {
        metadata: {},
        predefinedAcl: 'allUsers',
        private: true,
        public: true,
        timeout: 99,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      makeWritableStreamOverride = (stream: {}, options_: any) => {
        assert.strictEqual(options_.metadata, options.metadata);
        assert.deepStrictEqual(options_.request, {
          qs: {
            name: file.name,
            predefinedAcl: options.predefinedAcl,
          },
          timeout: options.timeout,
          uri:
            'https://storage.googleapis.com/upload/storage/v1/b/' +
            file.bucket.name +
            '/o',
        });
        done();
      };

      file.startSimpleUpload_(duplexify(), options);
    });

    it('should set predefinedAcl when public: true', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      makeWritableStreamOverride = (stream: {}, options_: any) => {
        assert.strictEqual(options_.request.qs.predefinedAcl, 'publicRead');
        done();
      };

      file.startSimpleUpload_(duplexify(), {public: true});
    });

    it('should set predefinedAcl when private: true', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      makeWritableStreamOverride = (stream: {}, options_: any) => {
        assert.strictEqual(options_.request.qs.predefinedAcl, 'private');
        done();
      };

      file.startSimpleUpload_(duplexify(), {private: true});
    });

    it('should send query.ifGenerationMatch if File has one', done => {
      const versionedFile = new File(BUCKET, 'new-file.txt', {generation: 1});
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      makeWritableStreamOverride = (stream: {}, options: any) => {
        assert.strictEqual(options.request.qs.ifGenerationMatch, 1);
        done();
      };

      versionedFile.startSimpleUpload_(duplexify(), {});
    });

    it('should send query.kmsKeyName if File has one', done => {
      file.kmsKeyName = 'kms-key-name';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      makeWritableStreamOverride = (stream: {}, options: any) => {
        assert.strictEqual(options.request.qs.kmsKeyName, file.kmsKeyName);
        done();
      };

      file.startSimpleUpload_(duplexify(), {});
    });

    it('should send userProject if set', done => {
      const options = {
        userProject: 'user-project-id',
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      makeWritableStreamOverride = (stream: {}, options_: any) => {
        assert.strictEqual(
          options_.request.qs.userProject,
          options.userProject
        );
        done();
      };

      file.startSimpleUpload_(duplexify(), options);
    });

    describe('request', () => {
      describe('error', () => {
        const error = new Error('Error.');

        beforeEach(() => {
          file.request = (
            reqOpts: DecorateRequestOptions,
            callback: Function
          ) => {
            callback(error);
          };
        });

        it('should destroy the stream', done => {
          const stream = duplexify();

          file.startSimpleUpload_(stream);

          stream.on('error', (err: Error) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            assert.strictEqual((stream as any).destroyed, true);
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('success', () => {
        const body = {};
        const resp = {};

        beforeEach(() => {
          file.request = (
            reqOpts: DecorateRequestOptions,
            callback: Function
          ) => {
            callback(null, body, resp);
          };
        });

        it('should set the metadata', () => {
          const stream = duplexify();

          file.startSimpleUpload_(stream);

          assert.strictEqual(file.metadata, body);
        });

        it('should emit the response', done => {
          const stream = duplexify();

          stream.on('response', resp_ => {
            assert.strictEqual(resp_, resp);
            done();
          });

          file.startSimpleUpload_(stream);
        });

        it('should emit complete', done => {
          const stream = duplexify();

          stream.on('complete', done);

          file.startSimpleUpload_(stream);
        });
      });
    });
  });

  describe('setUserProject', () => {
    it('should call the parent setUserProject function', done => {
      const userProject = 'grape-spaceship-123';

      file.parent.setUserProject = function (userProject_: string) {
        assert.strictEqual(this, file);
        assert.strictEqual(userProject_, userProject);
        done();
      };

      file.setUserProject(userProject);
    });
  });
});
