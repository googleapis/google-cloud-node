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

import {describe, it, before, beforeEach, afterEach} from 'mocha';
import assert from 'assert';
import {Bucket, CRC32C, File, GaxiosError, Storage} from '../src/index.js';
import {
  StorageRequestOptions,
  StorageTransport,
} from '../src/storage-transport.js';
import sinon from 'sinon';
import {
  FileExceptionMessages,
  FileOptions,
  GenerateSignedPostPolicyV2Options,
  GenerateSignedPostPolicyV4Options,
  GetSignedUrlConfig,
  MoveOptions,
  RequestError,
  SetFileMetadataOptions,
  STORAGE_POST_POLICY_BASE_URL,
} from '../src/file.js';
import {Duplex, PassThrough, Readable, Stream, Transform} from 'stream';
import * as crypto from 'crypto';
import duplexify from 'duplexify';
import {GCCL_GCS_CMD_KEY} from '../src/nodejs-common/util.js';
import {ExceptionMessages, IdempotencyStrategy} from '../src/storage.js';
import * as fs from 'fs';
import * as path from 'path';
import * as tmp from 'tmp';
import {formatAsUTCISO} from '../src/util.js';
class HTTPError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

describe('File', () => {
  let STORAGE: Storage;
  let BUCKET: Bucket;
  let file: File;
  let sandbox: sinon.SinonSandbox;
  let storageTransport: StorageTransport;
  const PROJECT_ID = 'project-id';

  const FILE_NAME = 'file-name.png';
  let directoryFile: File;

  const DATA = 'test data';
  // crc32c hash of 'test data'
  const CRC32C_HASH = 'M3m0yg==';
  // md5 hash of 'test data'
  const MD5_HASH = '63M6AMDJ0zbmVpGjerVCkw==';

  before(() => {
    sandbox = sinon.createSandbox();
    STORAGE = new Storage({projectId: PROJECT_ID});
    storageTransport = sandbox.createStubInstance(StorageTransport);
    STORAGE.storageTransport = storageTransport;
  });

  beforeEach(() => {
    BUCKET = new Bucket(STORAGE, 'bucket-name');

    file = new File(BUCKET, FILE_NAME);

    directoryFile = new File(BUCKET, 'directory/file.jpg');
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('initialization', () => {
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

    it('should not strip leading slash name in ServiceObject', () => {
      const file = new File(BUCKET, '/name');

      assert.strictEqual(file.id, encodeURIComponent('/name'));
    });

    it('should accept a `crc32cGenerator`', () => {
      const crc32cGenerator = () => {
        return new CRC32C();
      };

      const file = new File(BUCKET, 'name', {crc32cGenerator});
      assert.strictEqual(file.crc32cGenerator, crc32cGenerator);
    });

    it("should use the bucket's `crc32cGenerator` by default", () => {
      assert.strictEqual(file.crc32cGenerator, BUCKET.crc32cGenerator);
    });

    describe('delete', () => {
      it('should set the correct query string with options', async done => {
        const options = {
          generation: 2,
          userProject: 'user-project',
          preconditionOpts: {
            ifGenerationMatch: 100,
            ifGenerationNotMatch: 100,
            ifMetagenerationMatch: 100,
            ifMetagenerationNotMatch: 100,
          },
        };

        STORAGE.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            assert.strictEqual(reqOpts.method, 'DELETE');
            assert.strictEqual(reqOpts.url, '/b/bucket-name//o/file-name.png');
            assert.deepStrictEqual(
              reqOpts.queryParameters.generation,
              options.generation,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.userProject,
              options.userProject,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifGenerationMatch,
              options.preconditionOpts.ifGenerationMatch,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifGenerationNotMatch,
              options.preconditionOpts.ifGenerationNotMatch,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifMetagenerationMatch,
              options.preconditionOpts.ifMetagenerationMatch,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifMetagenerationNotMatch,
              options.preconditionOpts.ifMetagenerationNotMatch,
            );
            done();
            return Promise.resolve({data: {}});
          });
        await file.delete(options);
      });

      it('should return an error if the request fails', async () => {
        const error = new GaxiosError('err', {});

        STORAGE.storageTransport.makeRequest = sandbox.stub().rejects(error);
        await file.delete((err: GaxiosError | null) => {
          assert.strictEqual(err, error);
        });
      });
    });

    describe('exists', () => {
      it('should set the correct query string with options', async () => {
        const options = {
          generation: 2,
          userProject: 'user-project',
          preconditionOpts: {
            ifGenerationMatch: 100,
            ifGenerationNotMatch: 100,
            ifMetagenerationMatch: 100,
            ifMetagenerationNotMatch: 100,
          },
        };

        STORAGE.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake((reqOpts, callback) => {
            assert.strictEqual(reqOpts.method, 'GET');
            assert.strictEqual(reqOpts.url, '/b/bucket-name//o/file-name.png');
            assert.deepStrictEqual(
              reqOpts.queryParameters.generation,
              options.generation,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.userProject,
              options.userProject,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifGenerationMatch,
              options.preconditionOpts.ifGenerationMatch,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifGenerationNotMatch,
              options.preconditionOpts.ifGenerationNotMatch,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifMetagenerationMatch,
              options.preconditionOpts.ifMetagenerationMatch,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifMetagenerationNotMatch,
              options.preconditionOpts.ifMetagenerationNotMatch,
            );
            callback(null);
            return Promise.resolve({data: {}});
          });
        await file.exists(options);
      });

      it('should return an error if the request fails', async () => {
        const error = new GaxiosError('err', {});

        STORAGE.storageTransport.makeRequest = sandbox.stub().rejects(error);
        await file.exists((err: GaxiosError | null) => {
          assert.strictEqual(err, error);
        });
      });
    });

    describe('get', () => {
      it('should set the correct query string with options', async () => {
        const options = {
          generation: 2,
          userProject: 'user-project',
          preconditionOpts: {
            ifGenerationMatch: 100,
            ifGenerationNotMatch: 100,
            ifMetagenerationMatch: 100,
            ifMetagenerationNotMatch: 100,
          },
        };

        STORAGE.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake((reqOpts, callback) => {
            assert.strictEqual(reqOpts.method, 'GET');
            assert.strictEqual(reqOpts.url, '/b/bucket-name//o/file-name.png');
            assert.deepStrictEqual(
              reqOpts.queryParameters.generation,
              options.generation,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.userProject,
              options.userProject,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifGenerationMatch,
              options.preconditionOpts.ifGenerationMatch,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifGenerationNotMatch,
              options.preconditionOpts.ifGenerationNotMatch,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifMetagenerationMatch,
              options.preconditionOpts.ifMetagenerationMatch,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifMetagenerationNotMatch,
              options.preconditionOpts.ifMetagenerationNotMatch,
            );
            callback(null);
            return Promise.resolve({data: {}});
          });
        await file.get(options);
      });

      it('should return an error if the request fails', async () => {
        const error = new GaxiosError('err', {});

        STORAGE.storageTransport.makeRequest = sandbox.stub().rejects(error);
        await file.get((err: GaxiosError | null) => {
          assert.strictEqual(err, error);
        });
      });
    });

    describe('getMetadata', () => {
      it('should set the correct query string with options', async () => {
        const options = {
          generation: 2,
          userProject: 'user-project',
          preconditionOpts: {
            ifGenerationMatch: 100,
            ifGenerationNotMatch: 100,
            ifMetagenerationMatch: 100,
            ifMetagenerationNotMatch: 100,
          },
        };

        STORAGE.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake((reqOpts, callback) => {
            assert.strictEqual(reqOpts.method, 'GET');
            assert.strictEqual(reqOpts.url, '/b/bucket-name//o/file-name.png');
            assert.deepStrictEqual(
              reqOpts.queryParameters.generation,
              options.generation,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.userProject,
              options.userProject,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifGenerationMatch,
              options.preconditionOpts.ifGenerationMatch,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifGenerationNotMatch,
              options.preconditionOpts.ifGenerationNotMatch,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifMetagenerationMatch,
              options.preconditionOpts.ifMetagenerationMatch,
            );
            assert.deepStrictEqual(
              reqOpts.queryParameters.preconditionOpts.ifMetagenerationNotMatch,
              options.preconditionOpts.ifMetagenerationNotMatch,
            );
            callback(null);
            return Promise.resolve({data: {}});
          });
        await file.getMetadata(options);
      });

      it('should return an error if the request fails', async () => {
        const error = new GaxiosError('err', {});

        STORAGE.storageTransport.makeRequest = sandbox.stub().rejects(error);
        await file.getMetadata((err: GaxiosError | null) => {
          assert.strictEqual(err, error);
        });
      });
    });

    describe('setMetadata', () => {
      it('should set the correct query string with options', async () => {
        const options = {
          temporaryHold: true,
        };

        STORAGE.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake((reqOpts, callback) => {
            const body = JSON.parse(reqOpts.body);
            assert.strictEqual(reqOpts.method, 'PATCH');
            assert.strictEqual(reqOpts.url, '/b/bucket-name//o/file-name.png');
            assert.deepStrictEqual(body.temporaryHold, options.temporaryHold);
            callback(null);
            return Promise.resolve();
          });
        await file.setMetadata(options);
      });

      it('should return an error if the request fails', async () => {
        const error = new GaxiosError('err', {});

        STORAGE.storageTransport.makeRequest = sandbox.stub().rejects(error);

        await file.setMetadata({}, (err: GaxiosError | null) => {
          assert.strictEqual(err, error);
        });
      });
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

  describe('cloudStorageURI', () => {
    it('should return the appropriate `gs://` URI', () => {
      assert(file.cloudStorageURI instanceof URL);
      assert.equal(file.cloudStorageURI.host, BUCKET.name);
      assert.equal(file.cloudStorageURI.pathname, `/${FILE_NAME}`);
    });
  });

  describe('copy', () => {
    it('should throw if no destination is provided', () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      assert.rejects(
        file.copy(undefined as unknown as string),
        (err: Error) => {
          assert.strictEqual(
            err.message,
            FileExceptionMessages.DESTINATION_NO_NAME,
          );
        },
      );
    });

    it('should URI encode file names', done => {
      const newFile = new File(BUCKET, 'nested/file.jpg');

      const expectedPath = `/o/rewriteTo/b/${
        file.bucket.name
      }/o/${encodeURIComponent(newFile.name)}`;

      directoryFile.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.url, expectedPath);
          done();
        });

      directoryFile.copy(newFile, done);
    });

    it('should execute callback with error & API response', () => {
      const error = new Error('Error.');
      const apiResponse = {};

      const newFile = new File(BUCKET, 'new-file');

      file.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(error, null, apiResponse);
          return Promise.resolve();
        });

      file.copy(newFile, (err, file, apiResponse_) => {
        assert.strictEqual(err, error);
        assert.strictEqual(file, null);
        assert.strictEqual(apiResponse_, apiResponse);
      });
    });

    it('should send query.sourceGeneration if File has one', done => {
      const versionedFile = new File(BUCKET, 'name', {generation: 1});
      const newFile = new File(BUCKET, 'new-file');

      versionedFile.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.queryParameters.sourceGeneration, 1);
          done();
        });

      versionedFile.copy(newFile, assert.ifError);
    });

    it('should accept an options object', done => {
      const newFile = new File(BUCKET, 'name');
      const METADATA = {
        metadataKey: 'metadataValue',
      };
      const options = {
        option: true,
        metadata: METADATA,
      };

      file.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.deepStrictEqual(reqOpts.body, options);
        assert.strictEqual(reqOpts.body.metadata, METADATA);
        done();
      });

      file.copy(newFile, options, assert.ifError);
    });

    it('should pass through userProject', done => {
      const options = {
        userProject: 'user-project',
      };
      const originalOptions = Object.assign({}, options);
      const newFile = new File(BUCKET, 'new-file');

      file.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(
          reqOpts.queryParameters.userProject,
          options.userProject,
        );
        assert.strictEqual(reqOpts.body.userProject, undefined);
        assert.deepStrictEqual(options, originalOptions);
        done();
      });

      file.copy(newFile, options, assert.ifError);
    });

    it('should set correct headers when file is encrypted', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let file: any;
      // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
      file = new (File as any)(BUCKET, FILE_NAME);

      file.encryptionKey = {};
      file.encryptionKeyBase64 = 'base64';
      file.encryptionKeyHash = 'hash';
      file.userProject = 'user-project';

      const newFile = new File(BUCKET, 'new-file');

      file.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.deepStrictEqual(reqOpts.headers, {
          'x-goog-copy-source-encryption-algorithm': 'AES256',
          'x-goog-copy-source-encryption-key': file.encryptionKeyBase64,
          'x-goog-copy-source-encryption-key-sha256': file.encryptionKeyHash,
        });
        done();
      });

      file.copy(newFile, assert.ifError);
    });

    it('should set encryption key on the new File instance', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let file: any;
      // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
      file = new (File as any)(BUCKET, FILE_NAME);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newFile = new (File as any)(BUCKET, 'new-file');
      newFile.encryptionKey = 'encryptionKey';

      file.setEncryptionKey = sandbox.stub().callsFake(encryptionKey => {
        assert.strictEqual(encryptionKey, newFile.encryptionKey);
        done();
      });

      file.copy(newFile, assert.ifError);
    });

    it('should set destination KMS key name', done => {
      const newFile = new File(BUCKET, 'new-file');
      newFile.kmsKeyName = 'kms-key-name';

      file.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(
          reqOpts.queryParameters.destinationKmsKeyName,
          newFile.kmsKeyName,
        );
        assert.strictEqual(file.kmsKeyName, newFile.kmsKeyName);
        done();
      });

      file.copy(newFile, assert.ifError);
    });

    it('should set destination KMS key name from option', done => {
      const newFile = new File(BUCKET, 'new-file');
      const destinationKmsKeyName = 'destination-kms-key-name';

      file.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(
          reqOpts.queryParameters.destinationKmsKeyName,
          destinationKmsKeyName,
        );
        assert.strictEqual(file.kmsKeyName, destinationKmsKeyName);
        done();
      });

      file.copy(newFile, {destinationKmsKeyName}, assert.ifError);
    });

    it('should accept predefined Acl', done => {
      const options = {
        predefinedAcl: 'authenticatedRead',
      };
      const newFile = new File(BUCKET, 'new-file');
      file.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(
          reqOpts.queryParameters.destinationPredefinedAcl,
          options.predefinedAcl,
        );
        done();
      });

      file.copy(newFile, options, assert.ifError);
    });

    it('should favor the option over the File KMS name', done => {
      const newFile = new File(BUCKET, 'new-file');
      newFile.kmsKeyName = 'incorrect-kms-key-name';
      const destinationKmsKeyName = 'correct-kms-key-name';

      file.storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(
          reqOpts.queryParameters.destinationKmsKeyName,
          destinationKmsKeyName,
        );
        assert.strictEqual(file.kmsKeyName, destinationKmsKeyName);
        done();
      });

      file.copy(newFile, {destinationKmsKeyName}, assert.ifError);
    });

    it('should remove custom encryption interceptor if rotating to KMS', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let file: any;
      // eslint-disable-next-line prefer-const, @typescript-eslint/no-explicit-any
      file = new (File as any)(BUCKET, FILE_NAME);
      const newFile = new File(BUCKET, 'new-file');
      const destinationKmsKeyName = 'correct-kms-key-name';

      file.encryptionKeyInterceptor = {};
      file.interceptors = [{}, file.encryptionKeyInterceptor, {}];

      file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
        assert.strictEqual(file.interceptors.length, 3);
        assert(file.interceptors.indexOf(file.encryptionKeyInterceptor) === 1);
        done();
      });

      file.copy(newFile, {destinationKmsKeyName}, assert.ifError);
    });

    describe('destination types', () => {
      function assertPathEquals(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        file: File,
        expectedPath: string,
        callback: Function,
      ) {
        file.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            assert.strictEqual(reqOpts.url, expectedPath);
            callback();
          });
      }

      it('should allow a string', done => {
        const newFileName = 'new-file-name.png';
        const newFile = new File(BUCKET, newFileName);
        const expectedPath = `/o/rewriteTo/b/${file.bucket.name}/o/${newFile.name}`;
        assertPathEquals(file, expectedPath, done);
        file.copy(newFileName, done);
      });

      it('should allow a string with leading slash.', done => {
        const newFileName = '/new-file-name.png';
        const newFile = new File(BUCKET, newFileName);
        // File uri encodes file name when calling this.request during copy
        const expectedPath = `/o/rewriteTo/b/${
          file.bucket.name
        }/o/${encodeURIComponent(newFile.name)}`;
        assertPathEquals(file, expectedPath, done);
        file.copy(newFileName, done);
      });

      it('should allow a "gs://..." string', done => {
        const newFileName = 'gs://other-bucket/new-file-name.png';
        const expectedPath = '/o/rewriteTo/b/other-bucket/o/new-file-name.png';
        assertPathEquals(file, expectedPath, done);
        file.copy(newFileName, done);
      });

      it('should allow a Bucket', done => {
        const expectedPath = `/o/rewriteTo/b/${BUCKET.name}/o/${file.name}`;
        assertPathEquals(file, expectedPath, done);
        file.copy(BUCKET, done);
      });

      it('should allow a File', done => {
        const newFile = new File(BUCKET, 'new-file');
        const expectedPath = `/o/rewriteTo/b/${BUCKET.name}/o/${newFile.name}`;
        assertPathEquals(file, expectedPath, done);
        file.copy(newFile, done);
      });

      it('should throw if a destination cannot be parsed', () => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        assert.rejects(
          file.copy(undefined as unknown as string),
          (err: Error) => {
            assert.strictEqual(
              err.message,
              FileExceptionMessages.DESTINATION_NO_NAME,
            );
          },
        );
      });
    });

    describe('not finished copying', () => {
      const apiResponse = {
        rewriteToken: '...',
      };

      it('should continue attempting to copy', () => {
        const newFile = new File(BUCKET, 'new-file');

        file.storageTransport.makeRequest = sandbox
          .stub()
          .resolves(apiResponse);

        file.copy(newFile, apiResponse_ => {
          assert.strictEqual(apiResponse, apiResponse_);
        });
      });

      it('should pass the userProject in subsequent requests', done => {
        const newFile = new File(BUCKET, 'new-file');
        const fakeOptions = {
          userProject: 'grapce-spaceship-123',
        };

        file.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            assert.notStrictEqual(reqOpts, fakeOptions);
            assert.strictEqual(
              reqOpts.queryParameters.userProject,
              fakeOptions.userProject,
            );
            done();
          });

        file.copy(newFile, fakeOptions, assert.ifError);
      });

      it('should pass the KMS key name in subsequent requests', done => {
        const newFile = new File(BUCKET, 'new-file');
        const fakeOptions = {
          destinationKmsKeyName: 'kms-key-name',
        };

        file.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            assert.strictEqual(
              reqOpts.queryParameters.destinationKmsKeyName,
              fakeOptions.destinationKmsKeyName,
            );
            done();
          });

        file.copy(newFile, fakeOptions, assert.ifError);
      });

      it('should make the subsequent correct API request', done => {
        const newFile = new File(BUCKET, 'new-file');

        file.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            assert.strictEqual(
              reqOpts.queryParameters.rewriteToken,
              apiResponse.rewriteToken,
            );
            done();
          });

        file.copy(newFile, {token: apiResponse.rewriteToken}, assert.ifError);
      });
    });

    describe('returned File object', () => {
      beforeEach(() => {
        const resp = {success: true};
        file.storageTransport.makeRequest = sandbox
          .stub()
          .resolves({file, resp});
      });

      it('should re-use file object if one is provided', () => {
        const newFile = new File(BUCKET, 'new-file');
        file.copy(newFile, (err, copiedFile) => {
          assert.ifError(err);
          assert.deepStrictEqual(copiedFile, newFile);
        });
      });

      it('should create new file on the same bucket', () => {
        const newFilename = 'new-filename';
        file.copy(newFilename, (err, copiedFile) => {
          assert.ifError(err);
          assert.strictEqual(copiedFile?.bucket.name, BUCKET.name);
          assert.strictEqual(copiedFile?.name, newFilename);
        });
      });

      it('should create new file on the destination bucket', () => {
        file.copy(BUCKET, (err, copiedFile) => {
          assert.ifError(err);
          assert.strictEqual(copiedFile?.bucket.name, BUCKET.name);
          assert.strictEqual(copiedFile?.name, file.name);
        });
      });

      it('should pass apiResponse into callback', () => {
        file.copy(BUCKET, (err, copiedFile, apiResponse) => {
          assert.ifError(err);
          assert.deepStrictEqual({success: true}, apiResponse);
        });
      });
    });
  });

  describe('createReadStream', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockGaxiosResponse = (headers: any, body: any, statusCode = 200) => {
      const stream = new PassThrough();
      stream.write(body);
      stream.end();
      return {
        headers,
        data: stream,
        status: statusCode,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;
    };

    beforeEach(() => {
      const rawResponseStream = new PassThrough();
      const headers = {};
      setImmediate(() => {
        rawResponseStream.emit('response', headers);
        rawResponseStream.write(DATA);
        rawResponseStream.end();
      });
      return rawResponseStream;
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

    it('should send query.generation if File has one', () => {
      const versionedFile = new File(BUCKET, 'file.txt', {generation: 1});

      // const compressedContent = zlib.gzipSync('test content');
      const mockResponse = mockGaxiosResponse(
        {'content-encoding': 'test content'},
        'test content',
        200,
      );

      versionedFile.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(rOpts => {
          assert.strictEqual(rOpts.queryParameters.generation, 1);
          return duplexify();
        })
        .resolves(mockResponse);

      versionedFile.createReadStream().resume();
    });

    it('should send query.userProject if provided', () => {
      const options = {
        userProject: 'user-project-id',
      };

      file.storageTransport.makeRequest = sandbox.stub().callsFake(rOpts => {
        assert.strictEqual(
          rOpts.queryParameters.userProject,
          options.userProject,
        );
        return Promise.resolve(duplexify());
      });

      file.createReadStream(options).resume();
    });

    it('should pass the `GCCL_GCS_CMD_KEY` to `requestStream`', () => {
      const expected = 'expected/value';

      file.storageTransport.makeRequest = sandbox.stub().callsFake(opts => {
        assert.equal(opts[GCCL_GCS_CMD_KEY], expected);

        return Promise.resolve(duplexify());
      });

      file
        .createReadStream({
          [GCCL_GCS_CMD_KEY]: expected,
        })
        .resume();
    });

    describe('authenticating', () => {
      it('should create an authenticated request', () => {
        file.storageTransport.makeRequest = sandbox.stub().callsFake(opts => {
          assert.deepStrictEqual(opts, {
            url: '/b/bucket-name/o/file-name.png',
            headers: {
              'Accept-Encoding': 'gzip',
              'Cache-Control': 'no-store',
            },
            responseType: 'stream',
            queryParameters: {
              alt: 'media',
            },
          });

          return Promise.resolve(duplexify());
        });

        file.createReadStream().resume();
      });
      describe('errors', () => {
        const ERROR = new GaxiosError('Error.', {});
        it('should emit an error from authenticating', done => {
          file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
            const requestStream = new PassThrough();

            setImmediate(() => {
              requestStream.emit('Error', ERROR);
            });
            done();
            return Promise.resolve(requestStream);
          });
          file
            .createReadStream()
            .once('error', err => {
              assert.strictEqual(err, ERROR);
              done();
            })
            .resume();
        });
      });
    });

    describe('requestStream', () => {
      it('should get readable stream from request', done => {
        file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
          setImmediate(() => {
            done();
          });

          return Promise.resolve(new PassThrough());
        });

        file.createReadStream().resume();
      });

      it('should emit response event from request', done => {
        file.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake((reqOpts, callback) => {
            callback(null, null, {headers: {}});
            done();
            return Promise.resolve();
          });

        file
          .createReadStream({validation: false})
          .on('response', () => {
            done();
          })
          .resume();
      });

      it('should let util.handleResp handle the response', done => {
        const response = {a: 'b', c: 'd'};

        file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
          const rowRequestStream = new PassThrough();
          setImmediate(() => {
            rowRequestStream.emit('response', response);
          });
          done();
          return Promise.resolve(rowRequestStream);
        });

        file
          .createReadStream()
          .on('responce', (err, response_, body) => {
            assert.strictEqual(err, null);
            assert.strictEqual(response_, response);
            assert.strictEqual(body, null);
            done();
          })
          .resume();
      });

      describe('errors', () => {
        const ERROR = new GaxiosError('Error.', {});
        it('should emit the error', () => {
          file.storageTransport.makeRequest = sandbox.stub().rejects(ERROR);

          file
            .createReadStream()
            .once('error', err => {
              assert.deepStrictEqual(err, ERROR);
            })
            .resume();
        });

        it('should parse a response stream for a better error', done => {
          const rawResponsePayload = 'error message from body';
          const rawResponseStream = new PassThrough();
          const requestStream = new PassThrough();

          file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
            setImmediate(() => {
              requestStream.emit('response', rawResponseStream);
            });
            done();
            return Promise.resolve(requestStream);
          });

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
          const requestStream = new PassThrough();
          const rawResponseStream = new PassThrough();

          file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
            setImmediate(() => {
              requestStream.emit('response', rawResponseStream);
            });
            done();
            return Promise.resolve(requestStream);
          });

          file
            .createReadStream()
            .on('error', err => {
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

          file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
            setImmediate(() => {
              requestStream.emit('response', rawResponseStream);
            });
            done();
            return Promise.resolve(requestStream);
          });

          file
            .createReadStream({validation: false})
            .on('error', err => {
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

    describe('validation', () => {
      const responseCRC32C = CRC32C_HASH;
      const responseMD5 = MD5_HASH;

      beforeEach(() => {
        const rawResponseStream = new PassThrough();
        const headers = {
          'x-goog-hash': `crc32c=${responseCRC32C},md5=${responseMD5}`,
          'x-google-stored-content-encoding': 'identity',
        };

        file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
          setImmediate(() => {
            rawResponseStream.emit('response', {headers});
            rawResponseStream.write(DATA);
            rawResponseStream.end();
          });
          return Promise.resolve(rawResponseStream);
        });
      });

      describe('server decompression', () => {
        it('should skip validation if file was stored compressed and served decompressed', done => {
          file.metadata.crc32c = '.invalid.';
          file.metadata.contentEncoding = 'gzip';
          const rawResponseStream = new PassThrough();
          const headers = {
            'x-goog-hash': `crc32c=${responseCRC32C},md5=${responseMD5}`,
            'x-goog-stored-content-encoding': 'gzip',
          };

          file.storageTransport.makeRequest = sandbox
            .stub()
            .callsFake((reqOpts, callback) => {
              setImmediate(() => {
                rawResponseStream.emit('response', {headers});
                rawResponseStream.write(DATA);
                rawResponseStream.end(DATA);
              });
              callback(null, null, rawResponseStream);
              done();
              return Promise.resolve(rawResponseStream);
            });

          file
            .createReadStream({validation: 'crc32c'})
            .on('end', done)
            .resume();
        });
      });

      it('should perform validation if file was stored compressed and served compressed', done => {
        file.metadata.crc32c = '.invalid.';
        file.metadata.contentEncoding = 'gzip';
        const rawResponseStream = new PassThrough();
        const expectedError = new Error('test error');
        const headers = {
          'x-goog-hash': `crc32c=${responseCRC32C},md5=${responseMD5}`,
          'x-goog-stored-content-encoding': 'gzip',
          'content-encoding': 'gzip',
        };

        file.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake((reqOpts, callback) => {
            setImmediate(() => {
              rawResponseStream.emit('response', {headers});
              rawResponseStream.write(DATA);
              rawResponseStream.end(DATA);
            });
            callback(null, null, rawResponseStream);
            done();
            return Promise.resolve(rawResponseStream);
          });

        file
          .createReadStream({validation: 'crc32c'})
          .on('error', (err: Error) => {
            assert(err === expectedError);
            done();
          })
          .resume();
      });

      it('should emit errors from the validation stream', done => {
        const expectedError = new Error('test error');
        const rawResponseStream = new PassThrough();
        const headers = {
          'x-goog-hash': `crc32c=dummy-hash,md5=${responseMD5}`,
          'x-google-stored-content-encoding': 'identity',
        };

        file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
          setImmediate(() => {
            rawResponseStream.emit('response', headers);
            rawResponseStream.write(DATA);
            rawResponseStream.end();
          });
          done();
          return Promise.resolve(rawResponseStream);
        });

        file
          .createReadStream()
          .on('error', (err: Error) => {
            assert(err === expectedError);

            done();
          })
          .resume();
      });

      it('should not handle both error and end events', done => {
        const expectedError = new Error('test error');
        const rawResponseStream = new PassThrough();
        const headers = {
          'x-goog-hash': `crc32c=dummy-hash,md5=${responseMD5}`,
          'x-google-stored-content-encoding': 'identity',
        };

        file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
          setImmediate(() => {
            rawResponseStream.emit('response', headers);
            rawResponseStream.write(DATA);
            rawResponseStream.end();
          });
          done();
          return Promise.resolve(rawResponseStream);
        });

        file
          .createReadStream()
          .on('error', (err: Error) => {
            assert(err === expectedError);

            setImmediate(done);
          })
          .on('end', () => {
            done(new Error('Should not have been called.'));
          })
          .resume();
      });

      it('should validate with crc32c', done => {
        const rawResponseStream = new PassThrough();
        const headers = {
          'x-goog-hash': `crc32c=${CRC32C_HASH}`,
          'x-google-stored-content-encoding': 'identity',
        };

        file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
          setImmediate(() => {
            rawResponseStream.emit('response', {headers});
            rawResponseStream.write(DATA);
            rawResponseStream.end();
          });
          done();
          return Promise.resolve(rawResponseStream);
        });

        file
          .createReadStream({validation: 'crc32c'})
          .on('error', done)
          .on('end', done)
          .resume();
      });

      it('should emit an error if crc32c validation fails', done => {
        const rawResponseStream = new PassThrough();
        const headers = {
          'x-goog-hash': 'crc32c=invalid-crc32c',
          'x-google-stored-content-encoding': 'identity',
        };

        file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
          setImmediate(() => {
            rawResponseStream.emit('response', {headers});
            rawResponseStream.write(DATA);
            rawResponseStream.end();
          });
          done();
          return Promise.resolve(rawResponseStream);
        });

        file
          .createReadStream({validation: 'crc32c'})
          .on('error', err => {
            assert.strictEqual(err.message, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      it('should validate with md5', done => {
        const rawResponseStream = new PassThrough();
        const headers = {
          'x-google-hash': `md5=${MD5_HASH}`,
          'x-google-stored-content-encoding': 'identity',
        };

        file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
          setImmediate(() => {
            rawResponseStream.emit('response', {headers});
            rawResponseStream.write(DATA);
            rawResponseStream.end();
          });
          done();
          return Promise.resolve(rawResponseStream);
        });

        file
          .createReadStream({validation: 'md5'})
          .on('error', done)
          .on('end', done)
          .resume();
      });

      it('should emit an error if md5 validation fails', done => {
        const rawResponseStream = new PassThrough();
        const headers = {
          'x-google-hash': 'md5=invalid-md5',
          'x-google-stored-content-encoding': 'identity',
        };

        file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
          setImmediate(() => {
            rawResponseStream.emit('response', {headers});
            rawResponseStream.write(DATA);
            rawResponseStream.end();
          });
          done();
          return Promise.resolve(rawResponseStream);
        });

        file
          .createReadStream({validation: 'md5'})
          .on('error', err => {
            assert.strictEqual(err.message, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      it('should default to crc32c validation', done => {
        const rawResponseStream = new PassThrough();
        const headers = {
          'x-goog-hash': `crc32c=${CRC32C_HASH}`,
          'x-google-stored-content-encoding': 'identity',
        };

        file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
          setImmediate(() => {
            rawResponseStream.emit('response', {headers});
            rawResponseStream.write(DATA);
            rawResponseStream.end();
          });
          done();
          return Promise.resolve(rawResponseStream);
        });

        file
          .createReadStream()
          .on('error', err => {
            assert.strictEqual(err.message, 'CONTENT_DOWNLOAD_MISMATCH');
            done();
          })
          .resume();
      });

      it('should ignore a data mismatch if validation: false', done => {
        const rawResponseStream = new PassThrough();

        file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
          setImmediate(() => {
            rawResponseStream.write(DATA);
            rawResponseStream.end();
          });
          done();
          return Promise.resolve(rawResponseStream);
        });

        file
          .createReadStream({validation: false})
          .resume()
          .on('error', done)
          .on('end', done);
      });

      it('should handle x-goog-hash with only crc32c', done => {
        const rawResponseStream = new PassThrough();
        const headers = {
          'x-goog-hash': `crc32c=${CRC32C_HASH}`,
        };

        file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
          setImmediate(() => {
            rawResponseStream.emit('response', {headers});
            rawResponseStream.end(DATA);
          });
          done();
          return Promise.resolve(rawResponseStream);
        });

        file.createReadStream().on('error', done).on('end', done).resume();
      });

      describe('destroying the through stream', () => {
        it('should destroy after failed validation', done => {
          const rawResponseStream = new PassThrough();
          const headers = {
            'x-google-hash': `md5=${MD5_HASH}`,
            'x-google-stored-content-encoding': 'identity',
          };

          file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
            setImmediate(() => {
              rawResponseStream.emit('response', {headers});
              rawResponseStream.write(DATA);
              rawResponseStream.end();
            });
            done();
            return Promise.resolve(rawResponseStream);
          });

          const readStream = file.createReadStream({validation: 'md5'});
          readStream
            .on('error', err => {
              assert.strictEqual(err.message, 'CONTENT_DOWNLOAD_MISMATCH');
              done();
            })
            .on('end', () => {
              done();
            });

          readStream.resume();
        });

        it('should destroy if MD5 is requested but absent', done => {
          const rawResponseStream = new PassThrough();
          const headers = {
            'x-google-stored-content-encoding': 'identity',
          };

          file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
            setImmediate(() => {
              rawResponseStream.emit('response', {headers});
              rawResponseStream.write(DATA);
              rawResponseStream.end();
            });
            done();
            return Promise.resolve(rawResponseStream);
          });

          const readStream = file.createReadStream({validation: 'md5'});

          readStream
            .on('error', err => {
              assert.strictEqual(err.message, 'MD5_NOT_AVAILABLE');
              done();
            })
            .on('end', () => {
              done();
            });

          readStream.resume();
        });
      });
    });

    describe('range requests', () => {
      it('should accept a start range', done => {
        const startOffset = 100;

        file.storageTransport.makeRequest = sandbox.stub().callsFake(opts => {
          setImmediate(() => {
            assert.strictEqual(
              opts.headers!.Range,
              'bytes=' + startOffset + '-',
            );
            done();
          });
          return Promise.resolve(duplexify());
        });

        file.createReadStream({start: startOffset}).resume();
      });

      it('should accept an end range and set start to 0', done => {
        const endOffset = 100;

        file.storageTransport.makeRequest = sandbox.stub().callsFake(opts => {
          setImmediate(() => {
            assert.strictEqual(opts.headers!.Range, 'bytes=0-' + endOffset);
            done();
          });
          return Promise.resolve(duplexify());
        });

        file.createReadStream({end: endOffset}).resume();
      });

      it('should accept both a start and end range', done => {
        const startOffset = 100;
        const endOffset = 101;

        file.storageTransport.makeRequest = sandbox.stub().callsFake(opts => {
          setImmediate(() => {
            const expectedRange = 'bytes=' + startOffset + '-' + endOffset;
            assert.strictEqual(opts.headers!.Range, expectedRange);
            done();
          });
          return Promise.resolve(duplexify());
        });

        file.createReadStream({start: startOffset, end: endOffset}).resume();
      });

      it('should accept range start and end as 0', done => {
        const startOffset = 0;
        const endOffset = 0;

        file.storageTransport.makeRequest = sandbox.stub().callsFake(opts => {
          setImmediate(() => {
            const expectedRange = 'bytes=0-0';
            assert.strictEqual(opts.headers!.Range, expectedRange);
            done();
          });
          return Promise.resolve(duplexify());
        });

        file.createReadStream({start: startOffset, end: endOffset}).resume();
      });

      it('should end the through stream', done => {
        const rawResponseStream = new PassThrough();
        const headers = {
          'x-google-hash': `md5=${MD5_HASH}`,
          'x-google-stored-content-encoding': 'identity',
        };

        file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
          setImmediate(() => {
            rawResponseStream.emit('response', {headers});
            rawResponseStream.write(DATA);
            rawResponseStream.end();
          });
          done();
          return Promise.resolve(rawResponseStream);
        });

        const readStream = file.createReadStream({start: 100});
        readStream.on('end', done);
        readStream.resume();
      });
    });

    describe('tail requests', () => {
      it('should make a request for the tail bytes', done => {
        const endOffset = -10;

        file.storageTransport.makeRequest = sandbox.stub().callsFake(opts => {
          setImmediate(() => {
            assert.strictEqual(opts.headers!.Range, 'bytes=' + endOffset);
            done();
          });
          return Promise.resolve(duplexify());
        });

        file.createReadStream({end: endOffset}).resume();
      });
    });
  });

  describe('createResumableUpload', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let file: any;
    let resumableUploadStub: sinon.SinonStub;

    beforeEach(() => {
      file = {
        name: FILE_NAME,
        bucket: {
          name: 'bucket-name',
          storage: {
            authClient: {},
            apiEndpoint: 'https://storage.googleapis.com',
            universeDomain: 'universe-domain',
            retryOptions: {
              autoRetry: true,
              idempotencyStrategy: IdempotencyStrategy.RetryConditional,
            },
          },
        },
        storage: {
          retryOptions: {
            autoRetry: true,
            idempotencyStrategy: IdempotencyStrategy.RetryConditional,
          },
        },
        getRequestInterceptors: sinon
          .stub()
          .returns([
            (reqOpts: object) => ({...reqOpts, customOption: 'custom-value'}),
          ]),
        generation: 123,
        encryptionKey: 'test-encryption-key',
        kmsKeyName: 'test-kms-key-name',
        userProject: 'test-user-project',
        instancePreconditionOpts: {ifGenerationMatch: 123},
        createResumableUpload: sinon.spy(),
      };

      resumableUploadStub = sinon.stub();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (global as any).resumableUpload = {createURI: resumableUploadStub};
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should not require options', () => {
      resumableUploadStub.callsFake((opts, callback) => {
        assert.strictEqual(opts.metadata, undefined);
        callback();
      });

      file.createResumableUpload();
    });

    it('should call resumableUpload.createURI with the correct parameters', () => {
      const options = {
        metadata: {contentType: 'text/plain'},
        offset: 1024,
        origin: 'https://example.com',
        predefinedAcl: 'publicRead',
        private: true,
        public: false,
        userProject: 'custom-user-project',
        preconditionOpts: {ifMetagenerationMatch: 123},
      };

      resumableUploadStub.callsFake((opts, callback) => {
        assert.strictEqual(opts.authClient, file.bucket.storage.authClient);
        assert.strictEqual(opts.apiEndpoint, file.bucket.storage.apiEndpoint);
        assert.strictEqual(opts.bucket, file.bucket.name);
        assert.strictEqual(opts.file, file.name);
        assert.strictEqual(opts.generation, file.generation);
        assert.strictEqual(opts.key, file.encryptionKey);
        assert.strictEqual(opts.kmsKeyName, file.kmsKeyName);
        assert.deepEqual(opts.metadata, options.metadata);
        assert.strictEqual(opts.offset, options.offset);
        assert.strictEqual(opts.origin, options.origin);
        assert.strictEqual(opts.predefinedAcl, options.predefinedAcl);
        assert.strictEqual(opts.private, options.private);
        assert.strictEqual(opts.public, options.public);
        assert.strictEqual(opts.userProject, options.userProject);
        assert.deepEqual(opts.params, options.preconditionOpts);
        assert.strictEqual(
          opts.universeDomain,
          file.bucket.storage.universeDomain,
        );
        assert.deepEqual(opts.customRequestOptions, {
          customOption: 'custom-value',
        });

        callback(null, 'https://example.com/resumable-upload-uri');
      });

      file.createResumableUpload(
        options,
        (err: Error | null, uri: string | undefined) => {
          assert.strictEqual(err, null);
          assert.strictEqual(uri, 'https://example.com/resumable-upload-uri');
          sinon.assert.calledOnce(resumableUploadStub);
        },
      );
    });

    it('should use default options if no options are provided', () => {
      resumableUploadStub.callsFake((opts, callback) => {
        assert.strictEqual(opts.userProject, file.userProject);
        assert.deepEqual(opts.params, file.instancePreconditionOpts);
        callback(null, 'https://example.com/resumable-upload-uri');
      });

      file.createResumableUpload(
        (err: Error | null, uri: string | undefined) => {
          assert.strictEqual(err, null);
          assert.strictEqual(uri, 'https://example.com/resumable-upload-uri');
          sinon.assert.calledOnce(resumableUploadStub);
        },
      );
    });

    it('should correctly apply precondition options', () => {
      const options = {preconditionOpts: {ifGenerationMatch: 123}};

      resumableUploadStub.callsFake((opts, callback) => {
        assert.deepEqual(opts.params, options.preconditionOpts);
        callback(null, 'https://example.com/resumable-upload-uri');
      });

      file.createResumableUpload(
        options,
        (err: Error | null, uri: string | undefined) => {
          assert.strictEqual(err, null);
          assert.strictEqual(file.storage.retryOptions.autoRetry, true);
          assert.strictEqual(uri, 'https://example.com/resumable-upload-uri');
          sinon.assert.calledOnce(resumableUploadStub);
        },
      );
    });

    it('should correctly apply precondition options', () => {
      const options = {preconditionOpts: {ifGenerationMatch: undefined}};

      resumableUploadStub.callsFake((opts, callback) => {
        assert.strictEqual(opts.retryOptions.autoRetry, false);
        assert.deepEqual(opts.params, options.preconditionOpts);
        callback(null, 'https://example.com/resumable-upload-uri');
      });

      file.createResumableUpload(
        options,
        (err: Error | null, uri: string | undefined) => {
          assert.strictEqual(err, null);
          assert.strictEqual(file.storage.retryOptions.autoRetry, false);
          assert.strictEqual(uri, 'https://example.com/resumable-upload-uri');
          sinon.assert.calledOnce(resumableUploadStub);
        },
      );
    });
  });

  describe('createWriteStream', () => {
    const METADATA = {a: 'b', c: 'd'};

    it('should return a stream', () => {
      assert(file.createWriteStream() instanceof Stream);
    });

    it('should start a simple upload if specified', done => {
      const options = {
        metadata: METADATA,
        resumable: false,
        customValue: true,
      };
      const writable = file.createWriteStream(options);

      file.startSimpleUpload_ = sandbox.stub().callsFake(() => {
        done();
      });

      writable.write('data');
    });

    it('should start a resumable upload if specified', done => {
      const options = {
        metadata: METADATA,
        resumable: true,
        customValue: true,
      };
      const writable = file.createWriteStream(options);

      file.startResumableUpload_ = sandbox.stub().callsFake(() => {
        done();
      });

      writable.write('data');
    });

    it('should default to a resumable upload', done => {
      const writable = file.createWriteStream({
        metadata: METADATA,
      });

      file.startResumableUpload_ = sandbox.stub().callsFake(() => {
        done();
      });

      writable.write('data');
    });

    it('should alias contentType to metadata object', done => {
      const contentType = 'text/html';
      const writable = file.createWriteStream({contentType});
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.startResumableUpload_ = sandbox
        .stub()
        .callsFake((stream, options) => {
          assert.strictEqual(options.metadata.contentType, contentType);
          done();
        });

      writable.write('data');
    });

    it('should detect contentType with contentType:auto', done => {
      const writable = file.createWriteStream({contentType: 'auto'});
      file.startResumableUpload_ = sandbox
        .stub()
        .callsFake((stream, options) => {
          assert.strictEqual(options.metadata.contentType, 'image/png');
          done();
        });

      writable.write('data');
    });

    it('should detect contentType if not defined', done => {
      const writable = file.createWriteStream();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.startResumableUpload_ = sandbox
        .stub()
        .callsFake((stream, options) => {
          assert.strictEqual(options.metadata.contentType, 'image/png');
          done();
        });

      writable.write('data');
    });

    it('should not set a contentType if mime lookup failed', done => {
      const file = new File(BUCKET, 'file-without-ext');
      const writable = file.createWriteStream();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.startResumableUpload_ = sandbox
        .stub()
        .callsFake((stream, options) => {
          assert.strictEqual(typeof options.metadata.contentType, 'undefined');
          done();
        });

      writable.write('data');
    });

    it('should set encoding with gzip:true', done => {
      const writable = file.createWriteStream({gzip: true});
      file.startResumableUpload_ = sandbox
        .stub()
        .callsFake((stream, options) => {
          assert.strictEqual(options.metadata.contentEncoding, 'gzip');
          done();
        });

      writable.write('data');
    });

    it('should set ifGenerationMatch with 100', done => {
      const writable = file.createWriteStream({
        preconditionOpts: {ifGenerationMatch: 100},
      });
      file.startResumableUpload_ = sandbox
        .stub()
        .callsFake((stream, options) => {
          assert.strictEqual(options.preconditionOpts.ifGenerationMatch, 100);
          done();
        });

      writable.write('data');
    });

    it('should set ifGenerationNotMatch with 100', done => {
      const writable = file.createWriteStream({
        preconditionOpts: {ifGenerationNotMatch: 100},
      });
      file.startResumableUpload_ = sandbox
        .stub()
        .callsFake((stream, options) => {
          assert.strictEqual(
            options.preconditionOpts.ifGenerationNotMatch,
            100,
          );
          done();
        });

      writable.write('data');
    });

    it('should set ifMetagenerationMatch with 100', done => {
      const writable = file.createWriteStream({
        preconditionOpts: {ifMetagenerationMatch: 100},
      });
      file.startResumableUpload_ = sandbox
        .stub()
        .callsFake((stream, options) => {
          assert.strictEqual(
            options.preconditionOpts.ifMetagenerationMatch,
            100,
          );
          done();
        });

      writable.write('data');
    });

    it('should set ifMetagenerationNotMatch with 100', done => {
      const writable = file.createWriteStream({
        preconditionOpts: {ifMetagenerationNotMatch: 100},
      });
      file.startResumableUpload_ = sandbox
        .stub()
        .callsFake((stream, options) => {
          assert.strictEqual(
            options.preconditionOpts.ifMetagenerationNotMatch,
            100,
          );
          done();
        });

      writable.write('data');
    });

    it('should set encoding with gzip:auto & compressible', done => {
      const writable = file.createWriteStream({
        gzip: 'auto',
        contentType: 'text/html', // (compressible)
      });

      file.startResumableUpload_ = sandbox
        .stub()
        .callsFake((stream, options) => {
          assert.strictEqual(options.metadata.contentEncoding, 'gzip');
          done();
        });

      writable.write('data');
    });

    it('should not set encoding with gzip:auto & non-compressible', done => {
      const writable = file.createWriteStream({gzip: 'auto'});
      file.startResumableUpload_ = sandbox
        .stub()
        .callsFake((stream, options) => {
          assert.strictEqual(options.metadata.contentEncoding, undefined);
          done();
        });
      writable.write('data');
    });

    it('should re-emit response event', done => {
      const writable = file.createWriteStream();
      const resp = {};

      file.startResumableUpload_ = sandbox
        .stub()
        .callsFake((stream: Duplex) => {
          stream.emit('response', resp);
        });

      writable.on('response', (resp_: {}) => {
        assert.strictEqual(resp_, resp);
        done();
      });

      writable.write('data');
    });

    it('should emit `finish` only after underlying pipeline is complete', done => {
      const writable = file.createWriteStream({
        resumable: false,
        validation: false,
      });

      let streamFinishedCalled = false;

      writable.on('finish', () => {
        try {
          assert(streamFinishedCalled);
          done();
        } catch (e) {
          done(e);
        }
      });

      file.startSimpleUpload_ = sandbox
        .stub()
        .callsFake((stream: duplexify.Duplexify) => {
          stream.setWritable(new PassThrough());
          stream.emit('metadata');

          stream.on('finish', () => {
            streamFinishedCalled = true;
          });
        });

      writable.end('data');
    });

    describe('validation', () => {
      const data = 'test';

      const fakeMetadata = {
        crc32c: {crc32c: 'hqBywA=='},
        md5: {md5Hash: 'CY9rzUYh03PK3k6DJie09g=='},
      };

      it('should validate with crc32c', done => {
        const writable = file.createWriteStream({validation: 'crc32c'});

        file.startResumableUpload_ = sandbox
          .stub()
          .callsFake((stream: duplexify.Duplexify) => {
            stream.setWritable(new PassThrough());
            stream.emit('metadata');

            stream.on('finish', () => {
              file.metadata = fakeMetadata.crc32c;
            });
          });

        writable.end(data);

        writable.on('error', done).on('finish', done);
      });

      it('should emit an error if crc32c validation fails', done => {
        const writable = file.createWriteStream({validation: 'crc32c'});

        file.startResumableUpload_ = sandbox
          .stub()
          .callsFake((stream: duplexify.Duplexify) => {
            stream.setWritable(new PassThrough());
            stream.emit('metadata');

            stream.on('finish', () => {
              file.metadata = fakeMetadata.crc32c;
            });
          });

        sandbox.stub(file, 'delete').callsFake(() => {});

        writable.write('bad-data');
        writable.end();

        writable.on('error', (err: RequestError) => {
          assert.strictEqual(err.code, 'FILE_NO_UPLOAD');
          done();
        });
      });

      it('should validate with md5', done => {
        const writable = file.createWriteStream({validation: 'md5'});

        file.startResumableUpload_ = sandbox
          .stub()
          .callsFake((stream: duplexify.Duplexify) => {
            stream.setWritable(new PassThrough());
            stream.emit('metadata');

            stream.on('finish', () => {
              file.metadata = fakeMetadata.md5;
            });
          });

        writable.write(data);
        writable.end();

        writable.on('error', done).on('finish', done);
      });

      it('should emit an error if md5 validation fails', done => {
        const writable = file.createWriteStream({validation: 'md5'});

        file.startResumableUpload_ = sandbox
          .stub()
          .callsFake((stream: duplexify.Duplexify) => {
            stream.setWritable(new PassThrough());
            stream.emit('metadata');

            stream.on('finish', () => {
              file.metadata = fakeMetadata.md5;
            });
          });

        sandbox.stub(file, 'delete').callsFake(() => {});

        writable.write('bad-data');
        writable.end();

        writable.on('error', (err: RequestError) => {
          assert.strictEqual(err.code, 'FILE_NO_UPLOAD');
          done();
        });
      });

      it('should default to md5 validation', done => {
        const writable = file.createWriteStream();

        file.startResumableUpload_ = sandbox
          .stub()
          .callsFake((stream: duplexify.Duplexify) => {
            stream.setWritable(new PassThrough());
            stream.emit('metadata');

            stream.on('finish', () => {
              file.metadata = {md5Hash: 'bad-hash'};
            });
          });

        sandbox.stub(file, 'delete').callsFake(() => {});

        writable.write(data);
        writable.end();

        writable.on('error', (err: RequestError) => {
          assert.strictEqual(err.code, 'FILE_NO_UPLOAD');
          done();
        });
      });

      it('should ignore a data mismatch if validation: false', done => {
        const writable = file.createWriteStream({validation: false});

        file.startResumableUpload_ = sandbox
          .stub()
          .callsFake((stream: duplexify.Duplexify) => {
            stream.setWritable(new PassThrough());
            stream.emit('metadata');

            stream.on('finish', () => {
              file.metadata = {md5Hash: 'bad-hash'};
            });
          });

        writable.write(data);
        writable.end();

        writable.on('error', done);
        writable.on('finish', done);
      });

      it('should delete the file if validation fails', done => {
        const writable = file.createWriteStream();

        file.startResumableUpload_ = sandbox
          .stub()
          .callsFake((stream: duplexify.Duplexify) => {
            stream.setWritable(new PassThrough());
            stream.emit('metadata');

            stream.on('finish', () => {
              file.metadata = {md5Hash: 'bad-hash'};
            });
          });

        sandbox.stub(file, 'delete').callsFake(() => {});

        writable.on('error', (err: RequestError) => {
          assert.equal(err.code, 'FILE_NO_UPLOAD');
          done();
        });

        writable.write(data);
        writable.end();
      });

      it('should emit an error if MD5 is requested but absent', done => {
        const writable = file.createWriteStream({validation: 'md5'});

        file.startResumableUpload_ = sandbox
          .stub()
          .callsFake((stream: duplexify.Duplexify) => {
            stream.setWritable(new PassThrough());
            stream.emit('metadata');

            stream.on('finish', () => {
              file.metadata = {crc32c: 'not-md5'};
            });
          });

        sandbox.stub(file, 'delete').callsFake(() => {});

        writable.write(data);
        writable.end();

        writable.on('error', (err: RequestError) => {
          assert.strictEqual(err.code, 'MD5_NOT_AVAILABLE');
          done();
        });
      });

      it('should emit a different error if delete fails', done => {
        const writable = file.createWriteStream();

        file.startResumableUpload_ = sandbox
          .stub()
          .callsFake((stream: duplexify.Duplexify) => {
            stream.setWritable(new PassThrough());
            stream.emit('metadata');

            stream.on('finish', () => {
              file.metadata = {md5Hash: 'bad-hash'};
            });
          });

        const deleteErrorMessage = 'Delete error message.';
        const deleteError = new Error(deleteErrorMessage);
        file.delete = async () => {
          throw deleteError;
        };

        writable.write(data);
        writable.end();

        writable.on('error', (err: RequestError) => {
          assert.strictEqual(err.code, 'FILE_NO_UPLOAD_DELETE');
          assert(err.message.indexOf(deleteErrorMessage) > -1);
          done();
        });
      });
    });
  });

  describe('download', () => {
    let fileReadStream: Readable;

    beforeEach(() => {
      fileReadStream = new Readable();
      sandbox.stub(fileReadStream, '_read').callsFake(() => {});

      fileReadStream.on('end', () => {
        fileReadStream.emit('complete');
      });

      file.createReadStream = () => {
        return fileReadStream;
      };
    });

    it('should accept just a callback', () => {
      file.download(assert.ifError);
    });

    it('should accept an options object and callback', () => {
      file.download({}, assert.ifError);
    });

    it('should pass the provided options to createReadStream', done => {
      const readOptions = {start: 100, end: 200};

      sandbox.stub(file, 'createReadStream').callsFake(options => {
        assert.deepStrictEqual(options, readOptions);
        done();
        return fileReadStream;
      });

      file.download(readOptions, assert.ifError);
    });

    it('should only execute callback once', done => {
      Object.assign(fileReadStream, {
        _read(this: Readable) {
          process.nextTick(() => {
            this.emit('error', new Error('Error.'));
            this.emit('error', new Error('Error.'));
          });
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

        file.download((err, remoteFileContents) => {
          assert.ifError(err);

          assert.strictEqual(fileContents, remoteFileContents.toString());
          done();
        });
      });

      it('should execute callback with error', done => {
        const error = new Error('Error.');

        Object.assign(fileReadStream, {
          _read(this: Readable) {
            process.nextTick(() => {
              this.emit('error', error);
            });
          },
        });

        file.download(err => {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('with destination', () => {
      const sandbox = sinon.createSandbox();

      afterEach(() => {
        sandbox.restore();
      });

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

          file.download({destination: tmpFilePath}, err => {
            assert.ifError(err);

            fs.readFile(tmpFilePath, (err, tmpFileContents) => {
              assert.ifError(err);

              assert.strictEqual(fileContents, tmpFileContents.toString());
              done();
            });
          });
        });
      });

      it('should process the entire stream', done => {
        tmp.setGracefulCleanup();
        tmp.file(async (err, tmpFilePath) => {
          assert.ifError(err);

          const fileContents = 'abcdefghijklmnopqrstuvwxyz';

          fileReadStream.on('resume', () => {
            fileReadStream.emit('data', fileContents);
            fileReadStream.emit('data', fileContents);
            setImmediate(() => {
              fileReadStream.emit('end');
            });
          });

          file.download({destination: tmpFilePath}, err => {
            assert.ifError(err);
            fs.readFile(tmpFilePath, (err, tmpFileContents) => {
              assert.ifError(err);
              assert.strictEqual(
                fileContents + fileContents,
                tmpFileContents.toString(),
              );
              done();
            });
          });
        });
      });

      it('empty file should be processed correctly', done => {
        tmp.setGracefulCleanup();
        tmp.file(async (err, tmpFilePath) => {
          assert.ifError(err);

          fileReadStream.on('resume', () => {
            setImmediate(() => {
              fileReadStream.emit('end');
            });
          });

          file.download({destination: tmpFilePath}, err => {
            assert.ifError(err);
            fs.readFile(tmpFilePath, (err, tmpFileContents) => {
              assert.ifError(err);
              assert.strictEqual('', tmpFileContents.toString());
              done();
            });
          });
        });
      });

      it('file contents should remain unchanged if file nonexistent', done => {
        tmp.setGracefulCleanup();
        tmp.file(async (err, tmpFilePath) => {
          assert.ifError(err);

          const fileContents = 'file contents that should remain unchanged';
          fs.writeFileSync(tmpFilePath, fileContents, 'utf-8');

          const error = new Error('Error.');
          fileReadStream.on('resume', () => {
            setImmediate(() => {
              fileReadStream.emit('error', error);
            });
          });

          file.download({destination: tmpFilePath}, err => {
            assert.strictEqual(err, error);
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

          file.download({destination: tmpFilePath}, err => {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      it('should fail if provided destination directory does not exist', done => {
        tmp.setGracefulCleanup();
        tmp.dir(async (err, tmpDirPath) => {
          assert.ifError(err);

          const fileContents = 'nested-abcdefghijklmnopqrstuvwxyz';

          Object.assign(fileReadStream, {
            _read(this: Readable) {
              this.push(fileContents);
              this.push(null);
            },
          });

          const nestedPath = path.join(tmpDirPath, 'a', 'b', 'c', 'file.txt');

          file.download({destination: nestedPath}, err => {
            assert.ok(err);
            done();
          });
        });
      });
    });
  });

  describe('getExpirationDate', () => {
    it('should refresh metadata', done => {
      file.getMetadata = sandbox.stub().callsFake(() => {
        done();
      });

      file.getExpirationDate(assert.ifError);
    });

    it('should return error from getMetadata', done => {
      const error = new Error('Error.');
      const apiResponse = {};

      file.getMetadata = sandbox.stub().callsFake(callback => {
        callback(error, null, apiResponse);
      });

      file.getExpirationDate((err, expirationDate, apiResponse_) => {
        assert.strictEqual(err, error);
        assert.strictEqual(expirationDate, null);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should return an error if there is no expiration time', done => {
      const apiResponse = {};

      file.getMetadata = sandbox.stub().callsFake(callback => {
        callback(null, {}, apiResponse);
      });

      file.getExpirationDate((err, expirationDate, apiResponse_) => {
        assert.strictEqual(
          err?.message,
          FileExceptionMessages.EXPIRATION_TIME_NA,
        );
        assert.strictEqual(expirationDate, null);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should return the expiration time as a Date object', done => {
      const expirationTime = new Date();

      const apiResponse = {
        retentionExpirationTime: expirationTime.toJSON(),
      };

      file.getMetadata = sandbox.stub().callsFake(callback => {
        callback(null, apiResponse, apiResponse);
      });

      file.getExpirationDate((err, expirationDate, apiResponse_) => {
        assert.ifError(err);
        assert.deepStrictEqual(expirationDate, expirationTime);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });
  });

  describe('generateSignedPostPolicyV2', () => {
    let CONFIG: GenerateSignedPostPolicyV2Options;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let sandbox: any;
    let bucket: Bucket;
    let file: File;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mockAuthClient: any;

    beforeEach(() => {
      sandbox = sinon.createSandbox();
      const storage = new Storage({projectId: PROJECT_ID});
      bucket = new Bucket(storage, 'bucket-name');
      file = new File(bucket, FILE_NAME);

      mockAuthClient = {sign: sandbox.stub().resolves('signature')};
      file.storage.storageTransport.authClient = mockAuthClient;

      CONFIG = {
        expires: Date.now() + 2000,
      };
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should create a signed policy', () => {
      file.storage.storageTransport.authClient.sign = (blobToSign: string) => {
        const policy = Buffer.from(blobToSign, 'base64').toString();
        assert.strictEqual(typeof JSON.parse(policy), 'object');
        return Promise.resolve('signature');
      };

      file.generateSignedPostPolicyV2(CONFIG, (err, signedPolicy) => {
        assert.ifError(err);
        assert.strictEqual(typeof signedPolicy?.string, 'string');
        assert.strictEqual(typeof signedPolicy?.base64, 'string');
        assert.strictEqual(typeof signedPolicy?.signature, 'string');
      });
    });

    it('should not modify the configuration object', done => {
      const originalConfig = Object.assign({}, CONFIG);

      file.generateSignedPostPolicyV2(CONFIG, err => {
        assert.ifError(err);
        assert.deepStrictEqual(CONFIG, originalConfig);
        done();
      });
    });

    it('should return an error if signBlob errors', done => {
      const error = new Error('Error.');

      file.storage.storageTransport.authClient.sign = () => {
        return Promise.reject(error);
      };

      file.generateSignedPostPolicyV2(CONFIG, err => {
        assert.strictEqual(err?.name, 'SigningError');
        assert.strictEqual(err?.message, error.message);
        done();
      });
    });

    it('should add key equality condition', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file.generateSignedPostPolicyV2(CONFIG, (err, signedPolicy: any) => {
        const conditionString = '["eq","$key","' + file.name + '"]';
        assert.ifError(err);
        assert(signedPolicy.string.indexOf(conditionString) > -1);
        done();
      });
    });

    it('should add ACL condtion', done => {
      file.generateSignedPostPolicyV2(
        {
          expires: Date.now() + 2000,
          acl: '<acl>',
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err, signedPolicy: any) => {
          const conditionString = '{"acl":"<acl>"}';
          assert.ifError(err);
          assert(signedPolicy.string.indexOf(conditionString) > -1);
          done();
        },
      );
    });

    it('should add success redirect', done => {
      const redirectUrl = 'http://redirect';

      file.generateSignedPostPolicyV2(
        {
          expires: Date.now() + 2000,
          successRedirect: redirectUrl,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err, signedPolicy: any) => {
          assert.ifError(err);

          const policy = JSON.parse(signedPolicy.string);

          assert(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            policy.conditions.some((condition: any) => {
              return condition.success_action_redirect === redirectUrl;
            }),
          );

          done();
        },
      );
    });

    it('should add success status', done => {
      const successStatus = '200';

      file.generateSignedPostPolicyV2(
        {
          expires: Date.now() + 2000,
          successStatus,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err, signedPolicy: any) => {
          assert.ifError(err);

          const policy = JSON.parse(signedPolicy.string);

          assert(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            policy.conditions.some((condition: any) => {
              return condition.success_action_status === successStatus;
            }),
          );

          done();
        },
      );
    });

    describe('expires', () => {
      it('should accept Date objects', done => {
        const expires = new Date(Date.now() + 1000 * 60);

        file.generateSignedPostPolicyV2(
          {
            expires,
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (err, policy: any) => {
            assert.ifError(err);
            const expires_ = JSON.parse(policy.string).expiration;
            assert.strictEqual(expires_, expires.toISOString());
            done();
          },
        );
      });

      it('should accept numbers', done => {
        const expires = Date.now() + 1000 * 60;

        file.generateSignedPostPolicyV2(
          {
            expires,
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (err, policy: any) => {
            assert.ifError(err);
            const expires_ = JSON.parse(policy.string).expiration;
            assert.strictEqual(expires_, new Date(expires).toISOString());
            done();
          },
        );
      });

      it('should accept strings', done => {
        const expires = '12-12-2099';

        file.generateSignedPostPolicyV2(
          {
            expires,
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (err, policy: any) => {
            assert.ifError(err);
            const expires_ = JSON.parse(policy.string).expiration;
            assert.strictEqual(expires_, new Date(expires).toISOString());
            done();
          },
        );
      });

      it('should throw if a date is invalid', () => {
        const expires = new Date('31-12-2019');

        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires,
            },
            () => {},
          ),
            ExceptionMessages.EXPIRATION_DATE_INVALID;
        });
      });

      it('should throw if a date from the past is given', () => {
        const expires = Date.now() - 5;

        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires,
            },
            () => {},
          ),
            ExceptionMessages.EXPIRATION_DATE_PAST;
        });
      });
    });

    describe('equality condition', () => {
      it('should add equality conditions (array of arrays)', done => {
        file.generateSignedPostPolicyV2(
          {
            expires: Date.now() + 2000,
            equals: [['$<field>', '<value>']],
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (err, signedPolicy: any) => {
            const conditionString = '["eq","$<field>","<value>"]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          },
        );
      });

      it('should add equality condition (array)', done => {
        file.generateSignedPostPolicyV2(
          {
            expires: Date.now() + 2000,
            equals: ['$<field>', '<value>'],
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (err, signedPolicy: any) => {
            const conditionString = '["eq","$<field>","<value>"]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          },
        );
      });

      it('should throw if equal condition is not an array', () => {
        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires: Date.now() + 2000,
              equals: [],
            },
            () => {},
          ),
            FileExceptionMessages.EQUALS_CONDITION_TWO_ELEMENTS;
        });
      });

      it('should throw if equal condition length is not 2', () => {
        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires: Date.now() + 2000,
              equals: [['1', '2', '3']],
            },
            () => {},
          ),
            FileExceptionMessages.EQUALS_CONDITION_TWO_ELEMENTS;
        });
      });
    });

    describe('prefix conditions', () => {
      it('should add prefix conditions (array of arrays)', done => {
        file.generateSignedPostPolicyV2(
          {
            expires: Date.now() + 2000,
            startsWith: [['$<field>', '<value>']],
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (err, signedPolicy: any) => {
            const conditionString = '["starts-with","$<field>","<value>"]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          },
        );
      });

      it('should add prefix condition (array)', done => {
        file.generateSignedPostPolicyV2(
          {
            expires: Date.now() + 2000,
            startsWith: ['$<field>', '<value>'],
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (err, signedPolicy: any) => {
            const conditionString = '["starts-with","$<field>","<value>"]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          },
        );
      });

      it('should throw if prexif condition is not an array', () => {
        assert.throws(() => {
          void (file.generateSignedPostPolicyV2(
            {
              expires: Date.now() + 2000,
              startsWith: [[]],
            },
            () => {},
          ),
          FileExceptionMessages.STARTS_WITH_TWO_ELEMENTS);
        });
      });

      it('should throw if prefix condition length is not 2', () => {
        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires: Date.now() + 2000,
              startsWith: [['1', '2', '3']],
            },
            () => {},
          ),
            FileExceptionMessages.STARTS_WITH_TWO_ELEMENTS;
        });
      });
    });

    describe('content length', () => {
      it('should add content length condition', done => {
        file.generateSignedPostPolicyV2(
          {
            expires: Date.now() + 2000,
            contentLengthRange: {min: 0, max: 1},
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (err, signedPolicy: any) => {
            const conditionString = '["content-length-range",0,1]';
            assert.ifError(err);
            assert(signedPolicy.string.indexOf(conditionString) > -1);
            done();
          },
        );
      });

      it('should throw if content length has no min', () => {
        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires: Date.now() + 2000,
              contentLengthRange: {max: 1},
            },
            () => {},
          ),
            FileExceptionMessages.CONTENT_LENGTH_RANGE_MIN_MAX;
        });
      });

      it('should throw if content length has no max', () => {
        assert.throws(() => {
          file.generateSignedPostPolicyV2(
            {
              expires: Date.now() + 2000,
              contentLengthRange: {min: 0},
            },
            () => {},
          ),
            FileExceptionMessages.CONTENT_LENGTH_RANGE_MIN_MAX;
        });
      });
    });
  });

  describe('generateSignedPostPolicyV4', () => {
    let CONFIG: GenerateSignedPostPolicyV4Options;

    const NOW = new Date('2020-01-01');
    const CLIENT_EMAIL = 'test@domain.com';
    const SIGNATURE = 'signature';

    let fakeTimer: sinon.SinonFakeTimers;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let BUCKET: any;

    beforeEach(() => {
      fakeTimer = sinon.useFakeTimers(NOW);
      CONFIG = {
        expires: NOW.valueOf() + 2000,
      };

      BUCKET = {
        name: BUCKET,
        storage: {
          storageTransport: {
            authClient: {
              sign: sandbox.stub().resolves(SIGNATURE),
              getCredentials: sandbox
                .stub()
                .resolves({client_email: CLIENT_EMAIL}),
            },
          },
        },
      };
    });

    afterEach(() => {
      fakeTimer.restore();
    });

    const fieldsToConditions = (fields: object) =>
      Object.entries(fields).map(([k, v]) => ({[k]: v}));

    it('should create a signed policy', () => {
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
        expiration: formatAsUTCISO(new Date(CONFIG.expires), true, '-', ':'),
      };

      const policyString = JSON.stringify(policy);
      const EXPECTED_POLICY = Buffer.from(policyString).toString('base64');
      const EXPECTED_SIGNATURE = Buffer.from(SIGNATURE, 'base64').toString(
        'hex',
      );
      const EXPECTED_FIELDS = {
        ...CONFIG.fields,
        ...requiredFields,
        'x-goog-signature': EXPECTED_SIGNATURE,
        policy: EXPECTED_POLICY,
      };

      //   eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-floating-promises
      file.generateSignedPostPolicyV4(CONFIG, (err, res) => {
        assert.ifError(err);
        assert(res?.url, `${STORAGE_POST_POLICY_BASE_URL}/${BUCKET.name}`);

        assert.deepStrictEqual(res?.fields, EXPECTED_FIELDS);

        const signStub = BUCKET.storage.storageTransport.authClient.sign;
        assert.deepStrictEqual(
          Buffer.from(signStub.getCall(0).args[0], 'base64').toString(),
          policyString,
        );
      });
    });

    it('should not modify the configuration object', () => {
      const originalConfig = Object.assign({}, CONFIG);

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      file.generateSignedPostPolicyV4(CONFIG, err => {
        assert.ifError(err);
        assert.deepStrictEqual(CONFIG, originalConfig);
      });
    });

    it('should return an error if signBlob errors', () => {
      const error = new Error('Error.');

      BUCKET.storage.storageTransport.authClient.sign.rejects(error);

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      file.generateSignedPostPolicyV4(CONFIG, err => {
        assert.strictEqual(err?.name, 'SigningError');
        assert.strictEqual(err?.message, error.message);
      });
    });

    it('should add key condition', () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      file.generateSignedPostPolicyV4(CONFIG, (err, res) => {
        assert.ifError(err);

        assert.strictEqual(res?.fields['key'], file.name);
        const EXPECTED_POLICY_ELEMENT = `{"key":"${file.name}"}`;
        assert(
          Buffer.from(res?.fields.policy, 'base64')
            .toString('utf-8')
            .includes(EXPECTED_POLICY_ELEMENT),
        );
      });
    });

    it('should include fields in conditions', () => {
      CONFIG = {
        fields: {
          'x-goog-meta-foo': 'bar',
        },
        ...CONFIG,
      };

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      file.generateSignedPostPolicyV4(CONFIG, (err, res) => {
        assert.ifError(err);

        const expectedConditionString = JSON.stringify(CONFIG.fields);
        assert.strictEqual(res?.fields['x-goog-meta-foo'], 'bar');
        const decodedPolicy = Buffer.from(res.fields.policy, 'base64').toString(
          'utf-8',
        );
        assert(decodedPolicy.includes(expectedConditionString));
      });
    });

    it('should encode special characters in policy', () => {
      CONFIG = {
        fields: {
          'x-goog-meta-foo': 'bår',
        },
        ...CONFIG,
      };

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      file.generateSignedPostPolicyV4(CONFIG, (err, res) => {
        assert.ifError(err);

        assert.strictEqual(res?.fields['x-goog-meta-foo'], 'bår');
        const decodedPolicy = Buffer.from(res.fields.policy, 'base64').toString(
          'utf-8',
        );
        assert(decodedPolicy.includes('"x-goog-meta-foo":"b\\u00e5r"'));
      });
    });

    it('should not include fields with x-ignore- prefix in conditions', () => {
      CONFIG = {
        fields: {
          'x-ignore-foo': 'bar',
        },
        ...CONFIG,
      };

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      file.generateSignedPostPolicyV4(CONFIG, (err, res) => {
        assert.ifError(err);

        const expectedConditionString = JSON.stringify(CONFIG.fields);
        assert.strictEqual(res?.fields['x-ignore-foo'], 'bar');
        const decodedPolicy = Buffer.from(res.fields.policy, 'base64').toString(
          'utf-8',
        );
        assert(!decodedPolicy.includes(expectedConditionString));

        const signStub = BUCKET.storage.storageTransport.authClient.sign;
        assert(!signStub.getCall(0).args[0].includes('x-ignore-foo'));
      });
    });

    it('should accept conditions', () => {
      CONFIG = {
        conditions: [['starts-with', '$key', 'prefix-']],
        ...CONFIG,
      };

      // eslint-disable-next-line @typescript-eslint/no-floating-promises, @typescript-eslint/no-explicit-any
      file.generateSignedPostPolicyV4(CONFIG, (err, res: any) => {
        assert.ifError(err);

        const expectedConditionString = JSON.stringify(CONFIG.conditions);
        const decodedPolicy = Buffer.from(res.fields.policy, 'base64').toString(
          'utf-8',
        );
        assert(decodedPolicy.includes(expectedConditionString));

        const signStub = BUCKET.storage.storageTransport.authClient.sign;
        assert(!signStub.getCall(0).args[0].includes(expectedConditionString));
      });
    });

    it('should output url with cname', () => {
      CONFIG.bucketBoundHostname = 'http://domain.tld';

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      file.generateSignedPostPolicyV4(CONFIG, (err, res) => {
        assert.ifError(err);
        assert(res?.url, CONFIG.bucketBoundHostname);
      });
    });

    it('should output a virtualHostedStyle url', () => {
      CONFIG.virtualHostedStyle = true;

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      file.generateSignedPostPolicyV4(CONFIG, (err, res) => {
        assert.ifError(err);
        assert(res?.url, `https://${BUCKET.name}.storage.googleapis.com/`);
      });
    });

    it('should prefer a customEndpoint > virtualHostedStyle, cname', () => {
      let STORAGE: Storage;
      // eslint-disable-next-line prefer-const
      STORAGE = new Storage({projectId: PROJECT_ID});
      const customEndpoint = 'https://my-custom-endpoint.com';

      STORAGE.apiEndpoint = customEndpoint;
      STORAGE.customEndpoint = true;

      CONFIG.virtualHostedStyle = true;
      CONFIG.bucketBoundHostname = 'http://domain.tld';

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      file.generateSignedPostPolicyV4(CONFIG, (err, res) => {
        assert.ifError(err);
        assert(res?.url, `https://${BUCKET.name}.storage.googleapis.com/`);
      });
    });

    describe('expires', () => {
      it('should accept Date objects', () => {
        const expires = new Date(Date.now() + 1000 * 60);

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        file.generateSignedPostPolicyV4(
          {
            expires,
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (err, response: any) => {
            assert.ifError(err);
            const policy = JSON.parse(
              Buffer.from(response.fields.policy, 'base64').toString(),
            );
            assert.strictEqual(
              policy.expiration,
              formatAsUTCISO(expires, true, '-', ':'),
            );
          },
        );
      });

      it('should accept numbers', () => {
        const expires = Date.now() + 1000 * 60;

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        file.generateSignedPostPolicyV4(
          {
            expires,
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (err, response: any) => {
            assert.ifError(err);
            const policy = JSON.parse(
              Buffer.from(response.fields.policy, 'base64').toString(),
            );
            assert.strictEqual(
              policy.expiration,
              formatAsUTCISO(new Date(expires), true, '-', ':'),
            );
          },
        );
      });

      it('should accept strings', () => {
        const expires = formatAsUTCISO(
          new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
          false,
          '-',
        );

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        file.generateSignedPostPolicyV4(
          {
            expires,
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (err, response: any) => {
            assert.ifError(err);
            const policy = JSON.parse(
              Buffer.from(response.fields.policy, 'base64').toString(),
            );
            assert.strictEqual(
              policy.expiration,
              formatAsUTCISO(new Date(expires), true, '-', ':'),
            );
          },
        );
      });

      it('should throw if a date is invalid', () => {
        const expires = new Date('31-12-2019');

        assert.throws(() => {
          file.generateSignedPostPolicyV4(
            {
              expires,
            },
            () => {},
          ),
            ExceptionMessages.EXPIRATION_DATE_INVALID;
        });
      });

      it('should throw if a date from the past is given', () => {
        const expires = Date.now() - 5;

        assert.throws(() => {
          file.generateSignedPostPolicyV4(
            {
              expires,
            },
            () => {},
          ),
            ExceptionMessages.EXPIRATION_DATE_PAST;
        });
      });

      it('should throw if a date beyond 7 days is given', () => {
        const expires = Date.now() + 7.1 * 24 * 60 * 60 * 1000;

        assert.throws(() => {
          file.generateSignedPostPolicyV4(
            {
              expires,
            },
            () => {},
          ),
            {message: 'Max allowed expiration is seven days (604800 seconds).'};
        });
      });
    });
  });

  describe('getSignedUrl', () => {
    const EXPECTED_SIGNED_URL = 'signed-url';
    const CNAME = 'https://www.example.com';
    const fakeSigner = {
      URLSigner: () => {},
    };

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
        signer,
      );

      SIGNED_URL_CONFIG = {
        version: 'v4',
        expires: new Date().valueOf() + 2000,
        action: 'read',
        cname: CNAME,
      };
    });

    afterEach(() => sandbox.restore());

    it('should construct a URLSigner and call getSignedUrl', () => {
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
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      file.getSignedUrl(config, (err: Error | null, signedUrl) => {
        assert.ifError(err);
        assert.strictEqual(file.signer, signer);
        assert.strictEqual(signedUrl, EXPECTED_SIGNED_URL);

        const ctorArgs = urlSignerStub.getCall(0).args;
        assert.strictEqual(
          ctorArgs[0],
          file.storage.storageTransport.authClient,
        );
        assert.strictEqual(ctorArgs[1], file.bucket);
        assert.strictEqual(ctorArgs[2], file);

        const getSignedUrlArgs = signerGetSignedUrlStub.getCall(0).args;
        assert.deepStrictEqual(getSignedUrlArgs[0], {
          method: 'GET',
          version: 'v4',
          expires: config.expires,
          accessibleAt: accessibleAtDate,
          extensionHeaders: {},
          host: undefined,
          queryParams: {},
          contentMd5: config.contentMd5,
          contentType: config.contentType,
          cname: CNAME,
          virtualHostedStyle: true,
        });
      });
    });

    it('should add "x-goog-resumable: start" header if action is resumable', () => {
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
      });
    });

    it('should add response-content-type query parameter', () => {
      SIGNED_URL_CONFIG.responseType = 'application/json';
      file.getSignedUrl(SIGNED_URL_CONFIG, (err: Error | null) => {
        assert.ifError(err);
        const getSignedUrlArgs = signerGetSignedUrlStub.getCall(0).args;
        assert.deepStrictEqual(getSignedUrlArgs[0]['queryParams'], {
          'response-content-type': 'application/json',
        });
      });
    });

    it('should respect promptSaveAs argument', () => {
      const filename = 'fname.txt';
      SIGNED_URL_CONFIG.promptSaveAs = filename;
      file.getSignedUrl(SIGNED_URL_CONFIG, (err: Error | null) => {
        assert.ifError(err);
        const getSignedUrlArgs = signerGetSignedUrlStub.getCall(0).args;
        assert.deepStrictEqual(getSignedUrlArgs[0]['queryParams'], {
          'response-content-disposition':
            'attachment; filename="' + filename + '"',
        });
      });
    });

    it('should add response-content-disposition query parameter', () => {
      const disposition = 'attachment; filename="fname.ext"';
      SIGNED_URL_CONFIG.responseDisposition = disposition;
      file.getSignedUrl(SIGNED_URL_CONFIG, (err: Error | null) => {
        assert.ifError(err);
        const getSignedUrlArgs = signerGetSignedUrlStub.getCall(0).args;
        assert.deepStrictEqual(getSignedUrlArgs[0]['queryParams'], {
          'response-content-disposition': disposition,
        });
      });
    });

    it('should ignore promptSaveAs if set', () => {
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
      });
    });

    it('should add generation to query parameter', () => {
      file.generation = 246680131;

      file.getSignedUrl(SIGNED_URL_CONFIG, (err: Error | null) => {
        assert.ifError(err);
        const getSignedUrlArgs = signerGetSignedUrlStub.getCall(0).args;
        assert.deepStrictEqual(getSignedUrlArgs[0]['queryParams'], {
          generation: file.generation,
        });
      });
    });
  });

  describe('makePrivate', () => {
    it('should execute callback with API response', done => {
      const apiResponse = {};

      sandbox
        .stub(file, 'setMetadata')
        .callsFake((metadata, optionsOrCallback, cb) => {
          Promise.resolve([apiResponse])
            .then(resp => cb(null, ...resp))
            .catch(() => {});
        });

      file.makePrivate((err, apiResponse_) => {
        assert.ifError(err);
        assert.strictEqual(apiResponse_, apiResponse);

        done();
      });
    });

    it('should make the file private to project by default', done => {
      sandbox.stub(file, 'setMetadata').callsFake((metadata: {}, query: {}) => {
        assert.deepStrictEqual(metadata, {acl: null});
        assert.deepStrictEqual(query, {predefinedAcl: 'projectPrivate'});
        done();
      });

      file.makePrivate(() => {});
    });

    it('should make the file private to user if strict = true', done => {
      sandbox.stub(file, 'setMetadata').callsFake((metadata: {}, query: {}) => {
        assert.deepStrictEqual(query, {predefinedAcl: 'private'});
        done();
      });

      file.makePrivate({strict: true}, () => {});
    });

    it('should accept metadata', done => {
      const options = {
        metadata: {a: 'b', c: 'd'},
      };
      sandbox.stub(file, 'setMetadata').callsFake((metadata: {}) => {
        assert.deepStrictEqual(metadata, {
          acl: null,
          ...options.metadata,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert.strictEqual(typeof (options.metadata as any).acl, 'undefined');
        done();
      });
      file.makePrivate(options, assert.ifError);
    });

    it('should accept userProject', done => {
      const options = {
        userProject: 'user-project-id',
      };

      sandbox
        .stub(file, 'setMetadata')
        .callsFake((metadata: {}, query: SetFileMetadataOptions) => {
          assert.strictEqual(query.userProject, options.userProject);
          done();
        });

      file.makePrivate(options, assert.ifError);
    });
  });

  describe('makePublic', () => {
    it('should execute callback', done => {
      sandbox
        .stub(file.acl, 'add')
        .callsFake((options: {}, callback: Function) => {
          callback();
        });

      file.makePublic(done);
    });

    it('should make the file public', done => {
      sandbox.stub(file.acl, 'add').callsFake((options: {}) => {
        assert.deepStrictEqual(options, {entity: 'allUsers', role: 'READER'});
        done();
      });

      file.makePublic(() => {});
    });
  });

  describe('publicUrl', () => {
    it('should return the public URL', done => {
      const NAME = 'file-name';
      const file = new File(BUCKET, NAME);
      assert.strictEqual(
        file.publicUrl(),
        `https://storage.googleapis.com/bucket-name/${encodeURIComponent(NAME)}`,
      );
      done();
    });

    it('with slash in the name', done => {
      const NAME = 'parent/child';
      const file = new File(BUCKET, NAME);
      assert.strictEqual(
        file.publicUrl(),
        `https://storage.googleapis.com/bucket-name/${encodeURIComponent(NAME)}`,
      );
      done();
    });

    it('with tilde in the name', done => {
      const NAME = 'foo~bar';
      const file = new File(BUCKET, NAME);
      assert.strictEqual(
        file.publicUrl(),
        `https://storage.googleapis.com/bucket-name/${encodeURIComponent(NAME)}`,
      );
      done();
    });

    it('with non ascii in the name', done => {
      const NAME = '\u2603';
      const file = new File(BUCKET, NAME);
      assert.strictEqual(
        file.publicUrl(),
        `https://storage.googleapis.com/bucket-name/${encodeURIComponent(NAME)}`,
      );
      done();
    });

    it('with an ampersand in the name', done => {
      const NAME = '&foo';
      const file = new File(BUCKET, NAME);
      assert.strictEqual(
        file.publicUrl(),
        `https://storage.googleapis.com/bucket-name/${encodeURIComponent(NAME)}`,
      );
      done();
    });
  });

  describe('isPublic', () => {
    it('should execute callback with `true` in response', () => {
      file.isPublic((err, resp) => {
        assert.ifError(err);
        assert.strictEqual(resp, true);
      });
    });

    it('should execute callback with `false` in response', () => {
      file.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, config, callback) => {
          const error = new GaxiosError('Permission Denied.', {});
          error.status = 403;
          callback(error);
        });
      file.isPublic((err, resp) => {
        assert.ifError(err);
        assert.strictEqual(resp, false);
      });
    });

    it('should propagate non-403 errors to user', () => {
      const error = new GaxiosError('400 Error.', {});
      error.status = 400;
      file.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, config, callback) => {
          callback(error);
        });
      file.isPublic(err => {
        assert.strictEqual(err, error);
      });
    });

    it('should correctly send a GET request', () => {
      file.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, config, callback) => {
          assert.strictEqual(reqOpts.method, 'GET');
          callback(null);
        });
      file.isPublic(err => {
        assert.ifError(err);
      });
    });

    it('should correctly format URL in the request', () => {
      file = new File(BUCKET, 'my#file$.png');
      const expectedURL = `https://storage.googleapis.com/${
        BUCKET.name
      }/${encodeURIComponent(file.name)}`;

      file.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, config, callback) => {
          assert.strictEqual(reqOpts.uri, expectedURL);
          callback(null);
        });
      file.isPublic(err => {
        assert.ifError(err);
      });
    });

    it('should not set any headers when there are no interceptors', () => {
      file.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, config, callback) => {
          assert.deepStrictEqual(reqOpts.headers, {});
          callback(null);
        });
      file.isPublic(err => {
        assert.ifError(err);
      });
    });
  });

  describe('move', () => {
    describe('copy to destination', () => {
      function assertCopyFile(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        file: any,
        expectedDestination: string | Bucket | File,
        callback: Function,
      ) {
        file.copy = (destination: string) => {
          assert.strictEqual(destination, expectedDestination);
          callback();
        };
      }

      it('should call copy with string', done => {
        const newFileName = 'new-file-name.png';
        assertCopyFile(file, newFileName, done);
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        file.move(newFileName);
      });

      it('should call copy with Bucket', done => {
        assertCopyFile(file, BUCKET, done);
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        file.move(BUCKET);
      });

      it('should call copy with File', done => {
        const newFile = new File(BUCKET, 'new-file');
        assertCopyFile(file, newFile, done);
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        file.move(newFile);
      });

      it('should accept an options object', done => {
        const newFile = new File(BUCKET, 'name');
        const options = {};

        sandbox
          .stub(file, 'copy')
          .callsFake((destination: {}, options_: {}) => {
            assert.strictEqual(options_, options);
            done();
          });

        file.move(newFile, options, assert.ifError);
      });

      it('should fail if copy fails', done => {
        const originalErrorMessage = 'Original error message.';
        const error = new Error(originalErrorMessage);
        sandbox
          .stub(file, 'copy')
          .callsFake((destination: {}, options: {}, callback: Function) => {
            callback(error);
          });
        file.move('new-filename', err => {
          assert.strictEqual(err, error);
          assert.strictEqual(
            err.message,
            `file#copy failed with an error - ${originalErrorMessage}`,
          );
          done();
        });
      });
    });

    describe('delete original file', () => {
      it('should call the callback with destinationFile and copyApiResponse', done => {
        const copyApiResponse = {};
        const newFile = new File(BUCKET, 'new-filename');
        sandbox
          .stub(file, 'copy')
          .callsFake((destination, options, callback) => {
            callback(null, newFile, copyApiResponse);
          });
        sandbox.stub(file, 'delete').callsFake(() => {
          done();
        });

        file.move('new-filename', (err, destinationFile, apiResponse) => {
          assert.ifError(err);
          assert.strictEqual(destinationFile, newFile);
          assert.strictEqual(apiResponse, copyApiResponse);
          done();
        });
      });

      it('should delete if copy is successful', done => {
        const destinationFile = {bucket: {}};
        sandbox
          .stub(file, 'copy')
          .callsFake((destination: {}, options: {}, callback: Function) => {
            callback(null, destinationFile);
          });
        Object.assign(file, {
          delete() {
            assert.strictEqual(this, file);
            done();
          },
        });
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        file.move('new-filename');
      });

      it('should not delete if copy fails', done => {
        let deleteCalled = false;
        sandbox
          .stub(file, 'copy')
          .callsFake((destination: {}, options: {}, callback: Function) => {
            callback(new Error('Error.'));
          });
        sandbox.stub(file, 'delete').callsFake(() => {
          deleteCalled = true;
        });
        file.move('new-filename', () => {
          assert.strictEqual(deleteCalled, false);
          done();
        });
      });

      it('should not delete the destination is same as origin', () => {
        file.storageTransport.makeRequest = sandbox.stub().resolves({});
        const stub = sinon.stub(file, 'delete');
        // destination is same bucket as object
        file.move(BUCKET, err => {
          assert.ifError(err);
          // destination is same file as object
          file.move(file, err => {
            assert.ifError(err);
            // destination is same file name as string
            file.move(file.name, err => {
              assert.ifError(err);
              assert.ok(stub.notCalled);
              stub.reset();
            });
          });
        });
      });

      it('should pass options to delete', done => {
        const options = {};
        const destinationFile = {bucket: {}};

        sandbox
          .stub(file, 'copy')
          .callsFake((destination: {}, options: {}, callback: Function) => {
            callback(null, destinationFile);
          });

        sandbox.stub(file, 'delete').callsFake(options_ => {
          assert.strictEqual(options_, options);
          done();
        });

        file.move('new-filename', options, assert.ifError);
      });

      it('should fail if delete fails', done => {
        const originalErrorMessage = 'Original error message.';
        const error = new Error(originalErrorMessage);
        const destinationFile = {bucket: {}};
        sandbox
          .stub(file, 'copy')
          .callsFake((destination: {}, options: {}, callback: Function) => {
            callback(null, destinationFile);
          });
        sandbox.stub(file, 'delete').callsFake(() => {
          done();
        });
        file.move('new-filename', err => {
          assert.strictEqual(err, error);
          assert.strictEqual(
            err.message,
            `file#delete failed with an error - ${originalErrorMessage}`,
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
      sandbox.stub(file, 'move').callsFake((dest, opts, cb) => {
        assert.strictEqual(dest, newFileName);
        assert.strictEqual(opts, options);
        assert.strictEqual(cb, done);
        cb();
      });
      file.rename(newFileName, options, done);
    });

    it('should accept File object', done => {
      const newFileObject = new File(BUCKET, 'renamed-file.txt');
      const options = {};
      sandbox.stub(file, 'move').callsFake((dest, opts, cb) => {
        assert.strictEqual(dest, newFileObject);
        assert.strictEqual(opts, options);
        assert.strictEqual(cb, done);
        cb();
      });
      file.rename(newFileObject, options, done);
    });

    it('should not require options', done => {
      file.move = sandbox
        .stub()
        .callsFake((dest: string, opts: MoveOptions, cb: Function) => {
          assert.deepStrictEqual(opts, {});
          cb();
        });
      file.rename('new-name', done);
    });
  });

  describe('restore', () => {
    it('should pass options to underlying request call', async () => {
      file.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback_) => {
          assert.deepStrictEqual(reqOpts, {
            method: 'POST',
            url: '/o/restore',
            queryParameters: {generation: 123},
          });
          assert.strictEqual(callback_, undefined);
          return [];
        });

      await file.restore({generation: 123});
    });
  });

  describe('rotateEncryptionKey', () => {
    it('should create new File correctly', done => {
      const options = {};

      file.bucket.file = sandbox.stub().callsFake((id: {}, options_: {}) => {
        assert.strictEqual(id, file.id);
        assert.strictEqual(options_, options);
        done();
      });

      file.rotateEncryptionKey(options, assert.ifError);
    });

    it('should default to customer-supplied encryption key', done => {
      const encryptionKey = 'encryption-key';

      file.bucket.file = sandbox
        .stub()
        .callsFake((id: {}, options: FileOptions) => {
          assert.strictEqual(options.encryptionKey, encryptionKey);
          done();
        });

      file.rotateEncryptionKey(encryptionKey, assert.ifError);
    });

    it('should accept a Buffer for customer-supplied encryption key', done => {
      const encryptionKey = crypto.randomBytes(32);

      file.bucket.file = sandbox
        .stub()
        .callsFake((id: {}, options: FileOptions) => {
          assert.strictEqual(options.encryptionKey, encryptionKey);
          done();
        });

      file.rotateEncryptionKey(encryptionKey, assert.ifError);
    });

    it('should call copy correctly', done => {
      const newFile = {};

      file.bucket.file = sandbox.stub().callsFake(() => {
        return newFile;
      });

      sandbox.stub(file, 'copy').callsFake((destination, options, callback) => {
        assert.strictEqual(destination, newFile);
        assert.deepStrictEqual(options, {});
        callback(null);
      });

      file.rotateEncryptionKey({}, done);
    });
  });

  describe('save', () => {
    const DATA = 'Data!';
    const BUFFER_DATA = Buffer.from(DATA, 'utf8');
    const UINT8_ARRAY_DATA = Uint8Array.from(
      Array.from(DATA).map(l => l.charCodeAt(0)),
    );

    class DelayedStreamNoError extends Transform {
      _transform(chunk: string | Buffer, _encoding: string, done: Function) {
        this.push(chunk);
        setTimeout(() => {
          done();
        }, 5);
      }
    }

    class DelayedStream500Error extends Transform {
      retryCount: number;
      constructor(retryCount: number) {
        super();
        this.retryCount = retryCount;
      }
      _transform(chunk: string | Buffer, _encoding: string, done: Function) {
        this.push(chunk);
        setTimeout(() => {
          if (this.retryCount === 1) {
            done(new HTTPError('first error', 500));
          } else {
            done();
          }
        }, 5);
      }
    }

    describe('retry mulipart upload', () => {
      it('should save a string with no errors', async () => {
        const options = {resumable: false};
        sandbox.stub(file, 'createWriteStream').callsFake(() => {
          return new DelayedStreamNoError();
        });
        await file.save(DATA, options, assert.ifError);
      });

      it('should save a buffer with no errors', async () => {
        const options = {resumable: false};
        sandbox.stub(file, 'createWriteStream').callsFake(() => {
          return new DelayedStreamNoError();
        });
        await file.save(BUFFER_DATA, options, assert.ifError);
      });

      it('should save a Uint8Array with no errors', async () => {
        const options = {resumable: false};
        sandbox.stub(file, 'createWriteStream').callsFake(() => {
          return new DelayedStreamNoError();
        });
        await file.save(UINT8_ARRAY_DATA, options, assert.ifError);
      });

      it('string upload should not retry if nonretryable error code', async () => {
        const options = {resumable: false};
        let retryCount = 0;
        sandbox.stub(file, 'createWriteStream').callsFake(() => {
          class DelayedStream403Error extends Transform {
            _transform(
              chunk: string | Buffer,
              _encoding: string,
              done: Function,
            ) {
              this.push(chunk);
              setTimeout(() => {
                retryCount++;
                if (retryCount === 1) {
                  done(new HTTPError('first error', 403));
                } else {
                  done();
                }
              }, 5);
            }
          }
          return new DelayedStream403Error();
        });
        try {
          await file.save(DATA, options);
          throw Error('unreachable');
        } catch (e) {
          assert.strictEqual((e as Error).message, 'first error');
        }
      });

      it('should save a Readable with no errors (String)', done => {
        const options = {resumable: false};
        sandbox.stub(file, 'createWriteStream').callsFake(() => {
          const writeStream = new PassThrough();
          writeStream.on('data', data => {
            assert.strictEqual(data.toString(), DATA);
          });
          writeStream.once('finish', done);
          return writeStream;
        });

        const readable = new Readable({
          read() {
            this.push(DATA);
            this.push(null);
          },
        });

        void file.save(readable, options);
      });

      it('should save a Readable with no errors (Buffer)', done => {
        const options = {resumable: false};
        sandbox.stub(file, 'createWriteStream').callsFake(() => {
          const writeStream = new PassThrough();
          writeStream.on('data', data => {
            assert.strictEqual(data.toString(), DATA);
          });
          writeStream.once('finish', done);
          return writeStream;
        });

        const readable = new Readable({
          read() {
            this.push(BUFFER_DATA);
            this.push(null);
          },
        });

        void file.save(readable, options);
      });

      it('should save a Readable with no errors (Uint8Array)', done => {
        const options = {resumable: false};
        sandbox.stub(file, 'createWriteStream').callsFake(() => {
          const writeStream = new PassThrough();
          writeStream.on('data', data => {
            assert.strictEqual(data.toString(), DATA);
          });
          writeStream.once('finish', done);
          return writeStream;
        });

        const readable = new Readable({
          read() {
            this.push(UINT8_ARRAY_DATA);
            this.push(null);
          },
        });

        void file.save(readable, options);
      });

      it('should propagate Readable errors', done => {
        const options = {resumable: false};
        sandbox.stub(file, 'createWriteStream').callsFake(() => {
          const writeStream = new PassThrough();
          let errorCalled = false;
          writeStream.on('data', data => {
            assert.strictEqual(data.toString(), DATA);
          });
          writeStream.on('error', err => {
            errorCalled = true;
            assert.strictEqual(err.message, 'Error!');
          });
          writeStream.on('finish', () => {
            assert.ok(errorCalled);
          });
          return writeStream;
        });

        const readable = new Readable({
          read() {
            setTimeout(() => {
              this.push(DATA);
              this.destroy(new Error('Error!'));
            }, 50);
          },
        });

        file.save(readable, options, err => {
          assert.strictEqual(err?.message, 'Error!');
          done();
        });
      });

      it('Readable upload should not retry', async () => {
        const options = {resumable: false};

        let retryCount = 0;

        sandbox.stub(file, 'createWriteStream').callsFake(() => {
          retryCount++;
          return new Transform({
            transform(
              chunk: string | Buffer,
              _encoding: string,
              done: Function,
            ) {
              this.push(chunk);
              setTimeout(() => {
                done(new HTTPError('retryable error', 408));
              }, 5);
            },
          });
        });
        try {
          const readable = new Readable({
            read() {
              this.push(DATA);
              this.push(null);
            },
          });

          await file.save(readable, options);
          throw Error('unreachable');
        } catch (e) {
          assert.strictEqual((e as Error).message, 'retryable error');
          assert.ok(retryCount === 1);
        }
      });

      it('should save a generator with no error', done => {
        const options = {resumable: false};
        sandbox.stub(file, 'createWriteStream').callsFake(() => {
          const writeStream = new PassThrough();
          writeStream.on('data', data => {
            assert.strictEqual(data.toString(), DATA);
            done();
          });
          return writeStream;
        });

        const generator = async function* (arg?: {signal?: AbortSignal}) {
          await new Promise(resolve => setTimeout(resolve, 5));
          if (arg?.signal?.aborted) return;
          yield DATA;
        };

        void file.save(generator, options);
      });

      it('should propagate async iterable errors', done => {
        const options = {resumable: false};
        sandbox.stub(file, 'createWriteStream').callsFake(() => {
          const writeStream = new PassThrough();
          let errorCalled = false;
          writeStream.on('data', data => {
            assert.strictEqual(data.toString(), DATA);
          });
          writeStream.on('error', err => {
            errorCalled = true;
            assert.strictEqual(err.message, 'Error!');
          });
          writeStream.on('finish', () => {
            assert.ok(errorCalled);
          });
          return writeStream;
        });

        const generator = async function* () {
          yield DATA;
          throw new Error('Error!');
        };

        file.save(generator(), options, err => {
          assert.strictEqual(err?.message, 'Error!');
          done();
        });
      });

      it('should not retry if ifMetagenerationMatch is undefined', async () => {
        const options = {
          resumable: true,
          preconditionOpts: {ifGenerationMatch: 100},
        };
        let retryCount = 0;
        sandbox.stub(file, 'createWriteStream').callsFake(() => {
          retryCount++;
          return new DelayedStream500Error(retryCount);
        });
        try {
          await file.save(BUFFER_DATA, options);
        } catch {
          assert.strictEqual(retryCount, 1);
        }
      });
    });

    it('should execute callback', async () => {
      const options = {resumable: true};
      let retryCount = 0;
      sandbox.stub(file, 'createWriteStream').callsFake(() => {
        retryCount++;
        return new DelayedStream500Error(retryCount);
      });

      file.save(DATA, options, err => {
        assert.strictEqual(err?.stack, 500);
      });
    });

    it('should accept an options object', done => {
      const options = {};

      sandbox.stub(file, 'createWriteStream').callsFake(options_ => {
        assert.strictEqual(options_, options);
        setImmediate(done);
        return new PassThrough();
      });

      file.save(DATA, options, assert.ifError);
    });

    it('should not require options', done => {
      sandbox.stub(file, 'createWriteStream').callsFake(options_ => {
        assert.deepStrictEqual(options_, {});
        setImmediate(done);
        return new PassThrough();
      });

      file.save(DATA, assert.ifError);
    });

    it('should register the error listener', done => {
      sandbox.stub(file, 'createWriteStream').callsFake(() => {
        const writeStream = new PassThrough();
        writeStream.on('error', done);
        setImmediate(() => {
          writeStream.emit('error');
        });
        return writeStream;
      });

      file.save(DATA, assert.ifError);
    });

    it('should register the finish listener', done => {
      sandbox.stub(file, 'createWriteStream').callsFake(() => {
        const writeStream = new PassThrough();
        writeStream.once('finish', done);
        return writeStream;
      });

      file.save(DATA, assert.ifError);
    });

    it('should register the progress listener if onUploadProgress is passed', done => {
      const onUploadProgress = () => {};
      sandbox.stub(file, 'createWriteStream').callsFake(() => {
        const writeStream = new PassThrough();
        setImmediate(() => {
          const [listener] = writeStream.listeners('progress');
          assert.strictEqual(listener, onUploadProgress);
          done();
        });
        return writeStream;
      });

      file.save(DATA, {onUploadProgress}, assert.ifError);
    });

    it('should write the data', done => {
      sandbox.stub(file, 'createWriteStream').callsFake(() => {
        const writeStream = new PassThrough();
        writeStream.on('data', data => {
          assert.strictEqual(data.toString(), DATA);
          done();
        });
        return writeStream;
      });

      file.save(DATA, assert.ifError);
    });
  });

  describe('setMetadata', () => {
    it('should accept overrideUnlockedRetention option and set query parameter', () => {
      const newFile = new File(BUCKET, 'new-file');

      newFile.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(
            reqOpts.queryParameters.overrideUnlockedRetention,
            true,
          );
        });

      newFile.setMetadata(
        {retention: null},
        {overrideUnlockedRetention: true},
        assert.ifError,
      );
    });
  });

  describe('setStorageClass', () => {
    const STORAGE_CLASS = 'new_storage_class';

    it('should make the correct copy request', done => {
      sandbox.stub(file, 'copy').callsFake((newFile: {}, options: {}) => {
        assert.strictEqual(newFile, file);
        assert.deepStrictEqual(options, {
          storageClass: STORAGE_CLASS.toUpperCase(),
        });
        done();
      });

      file.setStorageClass(STORAGE_CLASS, assert.ifError);
    });

    it('should accept options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const options: any = {
        a: 'b',
        c: 'd',
      };

      const expectedOptions = {
        a: 'b',
        c: 'd',
        storageClass: STORAGE_CLASS.toUpperCase(),
      };

      sandbox.stub(file, 'copy').callsFake((newFile: {}, options: {}) => {
        assert.deepStrictEqual(options, expectedOptions);
        done();
      });

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      file.setStorageClass(STORAGE_CLASS, options, assert.ifError);
    });

    it('should convert camelCase to snake_case', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sandbox.stub(file, 'copy').callsFake((newFile: {}, options: any) => {
        assert.strictEqual(options.storageClass, 'CAMEL_CASE');
        done();
      });

      file.setStorageClass('camelCase', assert.ifError);
    });

    it('should convert hyphenate to snake_case', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sandbox.stub(file, 'copy').callsFake((newFile: {}, options: any) => {
        assert.strictEqual(options.storageClass, 'HYPHENATED_CLASS');
        done();
      });

      file.setStorageClass('hyphenated-class', assert.ifError);
    });

    describe('error', () => {
      const ERROR = new Error('Error.');
      const API_RESPONSE = {};

      beforeEach(() => {
        sandbox
          .stub(file, 'copy')
          .callsFake((newFile: {}, options: {}, callback: Function) => {
            callback(ERROR, null, API_RESPONSE);
          });
      });

      it('should execute callback with error & API response', done => {
        file.setStorageClass(STORAGE_CLASS, (err, apiResponse) => {
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
        sandbox
          .stub(file, 'copy')
          .callsFake((newFile: {}, options: {}, callback: Function) => {
            callback(null, COPIED_FILE, API_RESPONSE);
          });
      });

      it('should update the metadata on the file', done => {
        file.setStorageClass(STORAGE_CLASS, err => {
          assert.ifError(err);
          assert.strictEqual(file.metadata, METADATA);
          done();
        });
      });

      it('should execute callback with api response', done => {
        file.setStorageClass(STORAGE_CLASS, (err, apiResponse) => {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let _file: any;

    beforeEach(() => {
      _file = file.setEncryptionKey(KEY);
    });

    it('should localize the key', () => {
      assert.strictEqual(_file.encryptionKey, KEY);
    });

    it('should localize the base64 key', () => {
      assert.strictEqual(_file.encryptionKeyBase64, KEY_BASE64);
    });

    it('should localize the hash', () => {
      assert.strictEqual(_file.encryptionKeyHash, KEY_HASH);
    });

    it('should return the file instance', () => {
      assert.strictEqual(_file, file);
    });

    it('should push the correct request interceptor', done => {
      const reqOpts = {headers: {}};
      const expectedInterceptor = {
        headers: {
          'x-goog-encryption-algorithm': 'AES256',
          'x-goog-encryption-key': KEY_BASE64,
          'x-goog-encryption-key-sha256': KEY_HASH,
        },
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      _file.interceptors[0].resolved(reqOpts).then((actualInterceptor: any) => {
        assert.deepStrictEqual(actualInterceptor, expectedInterceptor);
      });

      _file.encryptionKeyInterceptor
        .resolved(reqOpts)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((actualInterceptor: any) => {
          assert.deepStrictEqual(actualInterceptor, expectedInterceptor);
        });

      done();
    });
  });

  describe('startResumableUpload_', () => {
    describe('starting', () => {
      it('should start a resumable upload', done => {
        const options = {
          metadata: {},
          offset: 1234,
          public: true,
          private: false,
          predefinedAcl: undefined,
          uri: 'http://resumable-uri',
          userProject: 'user-project-id',
          chunkSize: 262144, // 256 KiB
        };

        const resumableUpload = {
          upload: sinon.stub().callsFake(opts => {
            const bucket = file.bucket;
            const storage = bucket.storage;
            const authClient = storage.storageTransport.authClient;

            assert.strictEqual(opts.authClient, authClient);
            assert.deepStrictEqual(opts.metadata, options.metadata);
            assert.strictEqual(opts.offset, options.offset);
            assert.strictEqual(opts.predefinedAcl, options.predefinedAcl);
            assert.strictEqual(opts.private, options.private);
            assert.strictEqual(opts.public, options.public);
            assert.strictEqual(opts.uri, options.uri);
            assert.strictEqual(opts.userProject, options.userProject);
            assert.strictEqual(opts.chunkSize, options.chunkSize);

            setImmediate(done);
            return new PassThrough();
          }),
        };

        resumableUpload.upload(options);
        file.startResumableUpload_(duplexify(), options);
      });

      it('should emit the response', done => {
        const resp = {};
        const uploadStream = new PassThrough();

        const resumableUpload = {
          upload: sinon.stub().callsFake(() => {
            uploadStream.emit('response', resp);
            done();
            return uploadStream;
          }),
        };

        resumableUpload.upload();

        uploadStream.on('response', resp_ => {
          assert.strictEqual(resp_, resp);
          done();
        });

        file.startResumableUpload_(duplexify());
      });

      it('should set the metadata from the metadata event', done => {
        const metadata = {};
        const uploadStream = new PassThrough();
        const resumableUpload = {
          upload: sinon.stub().callsFake(() => {
            uploadStream.emit('metadata', metadata);
            setImmediate(() => {
              assert.deepStrictEqual(file.metadata, metadata);
            });
            done();
            return uploadStream;
          }),
        };
        resumableUpload.upload();

        file.startResumableUpload_(duplexify());
      });

      it('should emit complete after the stream finishes', done => {
        const dup = duplexify();

        dup.on('complete', done);

        const resumableUpload = {
          upload: sinon.stub().callsFake(() => {
            const uploadStream = new Transform();
            setImmediate(() => {
              uploadStream.end();
            });
            done();
            return uploadStream;
          }),
        };
        resumableUpload.upload();

        file.startResumableUpload_(dup);
      });

      it('should set the writable stream', done => {
        const dup = duplexify();
        const uploadStream = new PassThrough();

        dup.setWritable = (stream: Duplex) => {
          assert.strictEqual(stream, uploadStream);
          done();
        };

        const resumableUpload = {
          upload: sinon.stub().callsFake(() => {
            done();
            return uploadStream;
          }),
        };
        resumableUpload.upload();

        file.startResumableUpload_(dup);
      });

      it('should emit progress event', done => {
        const progress = {};
        const dup = duplexify();
        dup.on('progress', evt => {
          assert.strictEqual(evt, progress);
          done();
        });

        const resumableUpload = {
          upload: sinon.stub().callsFake(() => {
            const uploadStream = new Transform();
            setImmediate(() => {
              uploadStream.emit('progress', progress);
            });
            done();
            return uploadStream;
          }),
        };
        resumableUpload.upload();

        file.startResumableUpload_(dup);
      });

      it('should set autoRetry to false when ifMetagenerationMatch is undefined', done => {
        const dup = duplexify();
        const uploadStream = new PassThrough();

        dup.setWritable = sandbox.stub().callsFake((stream: Duplex) => {
          assert.strictEqual(stream, uploadStream);
          done();
        });

        const resumableUpload = {
          upload: sinon.stub().callsFake(() => {
            done();
            return uploadStream;
          }),
        };
        resumableUpload.upload();

        file.startResumableUpload_(dup, {
          preconditionOpts: {ifGenerationMatch: undefined},
        });
        assert.strictEqual(file.storage.retryOptions.autoRetry, true);
      });
    });
  });

  describe('startSimpleUpload_', () => {
    it('should get a writable stream', async done => {
      file.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
        done();
      });

      await file.startSimpleUpload_(duplexify());
    });

    it('should pass the required arguments', async () => {
      const options = {
        metadata: {},
        predefinedAcl: undefined,
        private: true,
        public: true,
        timeout: 99,
      };

      file.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((options_: StorageRequestOptions) => {
          assert.deepStrictEqual(options_.queryParameters, {
            name: file.name,
            predefinedAcl: 'private',
            uploadType: 'multipart',
          });
          assert.strictEqual(options_.responseType, 'json');
          assert.strictEqual(options_.method, 'POST');
          assert.strictEqual(options_.timeout, options.timeout);
          assert.strictEqual(
            options_.url,
            'https://storage.googleapis.com/upload/storage/v1/b/' +
              file.bucket.name +
              '/o',
          );
          return Promise.resolve({});
        });

      await file.startSimpleUpload_(duplexify(), options);
    });

    it('should set predefinedAcl when public: true', async () => {
      file.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((options_: StorageRequestOptions) => {
          assert.strictEqual(
            options_.queryParameters?.predefinedAcl,
            'publicRead',
          );
          return Promise.resolve({});
        });

      await file.startSimpleUpload_(duplexify(), {public: true});
    });

    it('should set predefinedAcl when private: true', async () => {
      file.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((options_: StorageRequestOptions) => {
          assert.strictEqual(
            options_.queryParameters?.predefinedAcl,
            'private',
          );
          return Promise.resolve({});
        });

      await file.startSimpleUpload_(duplexify(), {private: true});
    });

    it('should send query.ifGenerationMatch if File has one', async () => {
      const versionedFile = new File(BUCKET, 'new-file.txt', {generation: 1});
      file.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((options: StorageRequestOptions) => {
          assert.strictEqual(options.queryParameters?.ifGenerationMatch, 1);
        })
        .resolves({});

      await versionedFile.startSimpleUpload_(duplexify(), {});
    });

    it('should send query.kmsKeyName if File has one', async () => {
      file.kmsKeyName = 'kms-key-name';
      file.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((options: StorageRequestOptions) => {
          assert.strictEqual(
            options.queryParameters?.kmsKeyName,
            file.kmsKeyName,
          );
        })
        .resolves({});

      await file.startSimpleUpload_(duplexify(), {});
    });

    it('should send userProject if set', async () => {
      const options = {
        userProject: 'user-project-id',
      };
      file.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((options_: StorageRequestOptions) => {
          assert.strictEqual(
            options_.queryParameters?.userProject,
            options.userProject,
          );
        })
        .resolves({});

      await file.startSimpleUpload_(duplexify(), options);
    });

    describe('request', () => {
      describe('error', () => {
        const error = new Error('Error.');

        beforeEach(() => {
          file.storageTransport.makeRequest = sandbox.stub().rejects(error);
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
          file.storageTransport.makeRequest = sandbox
            .stub()
            .resolves({data: body, resp});
        });

        it('should set the metadata', () => {
          const stream = duplexify();

          file.startSimpleUpload_(stream);

          assert.deepEqual(file.metadata, body);
        });

        it('should emit the response', () => {
          const stream = duplexify();

          stream.on('response', resp_ => {
            assert.strictEqual(resp_, resp);
          });

          file.startSimpleUpload_(stream);
        });

        it('should emit complete', async () => {
          const stream = duplexify();

          stream.on('complete', () => {});

          await file.startSimpleUpload_(stream);
          stream.end();
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

  describe('from', () => {
    it('should create a File object from a gs:// formatted URL', () => {
      const gsUrl = 'gs://mybucket/myfile';
      const result = File.from(gsUrl, STORAGE);

      assert(result);
      assert.strictEqual(result.bucket.name, 'mybucket');
      assert.strictEqual(result.name, 'myfile');
    });

    it('should create a File object from a gs:// formatted URL including a folder', () => {
      const gsUrl = 'gs://mybucket/myfolder/myfile';
      const result = File.from(gsUrl, STORAGE);

      assert(result);
      assert.strictEqual(result.bucket.name, 'mybucket');
      assert.strictEqual(result.name, 'myfolder/myfile');
    });

    it('should create a File object from a https:// formatted URL', () => {
      const httpsUrl = 'https://storage.googleapis.com/mybucket/myfile';
      const result = File.from(httpsUrl, STORAGE);

      assert(result);
      assert.strictEqual(result.bucket.name, 'mybucket');
      assert.strictEqual(result.name, 'myfile');
    });

    it('should create a File object from a https:// formatted URL including a folder', () => {
      const httpsUrl =
        'https://storage.googleapis.com/mybucket/myfolder/myfile';
      const result = File.from(httpsUrl, STORAGE);

      assert(result);
      assert.strictEqual(result.bucket.name, 'mybucket');
      assert.strictEqual(result.name, 'myfolder/myfile');
    });

    it('should throw an error when invoked with an incorrectly formatted URL', () => {
      const invalidUrl = 'https://storage.com/mybucket/myfile';

      assert.throws(() => File.from(invalidUrl, STORAGE));
    });
  });
});
