/* eslint-disable @typescript-eslint/no-explicit-any */
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

import {util} from '../src/nodejs-common/index.js';
import assert from 'assert';
import {describe, it, before, beforeEach, after, afterEach} from 'mocha';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  Bucket,
  Channel,
  CRC32C_DEFAULT_VALIDATOR_GENERATOR,
  CRC32CValidator,
  GaxiosError,
} from '../src/index.js';
import * as sinon from 'sinon';
import {HmacKeyOptions} from '../src/hmacKey.js';
import {
  CreateHmacKeyOptions,
  GetHmacKeysOptions,
  Storage,
  StorageExceptionMessages,
} from '../src/storage.js';
import {StorageTransport} from '../src/storage-transport.js';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const hmacKeyModule = require('../src/hmacKey');

describe('Storage', () => {
  const PROJECT_ID = 'project-id';
  const BUCKET_NAME = 'new-bucket-name';

  let storage: Storage;
  let sandbox: sinon.SinonSandbox;
  let storageTransport: StorageTransport;
  let bucket: Bucket;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    storageTransport = sandbox.createStubInstance(StorageTransport);
    storage = new Storage({projectId: PROJECT_ID});
    storage.storageTransport = storageTransport;
    bucket = new Bucket(storage, BUCKET_NAME);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('instantiation', () => {
    it('should set publicly accessible properties', () => {
      const baseUrl = 'https://storage.googleapis.com/storage/v1';
      assert.strictEqual(storage.baseUrl, baseUrl);
      assert.strictEqual(storage.projectId, PROJECT_ID);
      assert.strictEqual(storage.storageTransport, storageTransport);
      assert.strictEqual(storage.name, '');
    });

    it('should propagate the apiEndpoint option', () => {
      const apiEndpoint = 'https://some.fake.endpoint';
      const storage = new Storage({
        projectId: PROJECT_ID,
        apiEndpoint,
      });
      assert.strictEqual(storage.baseUrl, `${apiEndpoint}/storage/v1`);
      assert.strictEqual(storage.apiEndpoint, `${apiEndpoint}`);
    });

    it('should not set `customEndpoint` if `apiEndpoint` matches default', () => {
      const apiEndpoint = 'https://storage.googleapis.com';
      const storage = new Storage({
        apiEndpoint,
      });

      assert.strictEqual(storage.apiEndpoint, apiEndpoint);
      assert.strictEqual(storage.customEndpoint, false);
    });

    it('should not set `customEndpoint` if `apiEndpoint` matches default (w/ universe domain)', () => {
      const universeDomain = 'my.universe';
      const apiEndpoint = `https://storage.${universeDomain}`;
      const storage = new Storage({
        apiEndpoint,
        universeDomain,
      });

      assert.strictEqual(storage.apiEndpoint, apiEndpoint);
      assert.strictEqual(storage.customEndpoint, false);
    });

    it('should propagate autoRetry in retryOptions', () => {
      const autoRetry = false;
      const storage = new Storage({
        projectId: PROJECT_ID,
        retryOptions: {autoRetry},
      });
      assert.strictEqual(storage.retryOptions.autoRetry, autoRetry);
    });

    it('should propagate retryDelayMultiplier', () => {
      const retryDelayMultiplier = 4;
      const storage = new Storage({
        projectId: PROJECT_ID,
        retryOptions: {retryDelayMultiplier},
      });
      assert.strictEqual(
        storage.retryOptions.retryDelayMultiplier,
        retryDelayMultiplier,
      );
    });

    it('should propagate totalTimeout', () => {
      const totalTimeout = 60;
      const storage = new Storage({
        projectId: PROJECT_ID,
        retryOptions: {totalTimeout},
      });
      assert.strictEqual(storage.retryOptions.totalTimeout, totalTimeout);
    });

    it('should propagate maxRetryDelay', () => {
      const maxRetryDelay = 640;
      const storage = new Storage({
        projectId: PROJECT_ID,
        retryOptions: {maxRetryDelay},
      });
      assert.strictEqual(storage.retryOptions.maxRetryDelay, maxRetryDelay);
    });

    it('should set correct defaults for retry configs', () => {
      const autoRetryDefault = true;
      const maxRetryDefault = 3;
      const retryDelayMultiplierDefault = 2;
      const totalTimeoutDefault = 600;
      const maxRetryDelayDefault = 64;
      const storage = new Storage({
        projectId: PROJECT_ID,
      });
      assert.strictEqual(storage.retryOptions.autoRetry, autoRetryDefault);
      assert.strictEqual(storage.retryOptions.maxRetries, maxRetryDefault);
      assert.strictEqual(
        storage.retryOptions.retryDelayMultiplier,
        retryDelayMultiplierDefault,
      );
      assert.strictEqual(
        storage.retryOptions.totalTimeout,
        totalTimeoutDefault,
      );
      assert.strictEqual(
        storage.retryOptions.maxRetryDelay,
        maxRetryDelayDefault,
      );
    });

    it('should propagate maxRetries in retryOptions', () => {
      const maxRetries = 1;
      const storage = new Storage({
        projectId: PROJECT_ID,
        retryOptions: {maxRetries},
      });
      assert.strictEqual(storage.retryOptions.maxRetries, maxRetries);
    });

    it('should set retryFunction', () => {
      const storage = new Storage({
        projectId: PROJECT_ID,
      });
      assert(storage.retryOptions.retryableErrorFn);
    });

    it('should retry a 502 error', () => {
      const storage = new Storage({
        projectId: PROJECT_ID,
      });
      const error = new GaxiosError('502 Error', {});
      error.status = 502;
      assert.strictEqual(storage.retryOptions.retryableErrorFn!(error), true);
    });

    it('should not retry blank error', () => {
      const storage = new Storage({
        projectId: PROJECT_ID,
      });
      const error = new GaxiosError('', {});
      assert.strictEqual(storage.retryOptions.retryableErrorFn!(error), false);
    });

    it('should retry a reset connection error', () => {
      const storage = new Storage({
        projectId: PROJECT_ID,
      });
      const error = new GaxiosError('Connection Reset By Peer error', {});
      error.code = 'ECONNRESET';
      assert.strictEqual(storage.retryOptions.retryableErrorFn!(error), true);
    });

    it('should retry a broken pipe error', () => {
      const storage = new Storage({
        projectId: PROJECT_ID,
      });
      const error = new GaxiosError('Broken pipe', {});
      error.code = 'EPIPE';
      assert.strictEqual(storage.retryOptions.retryableErrorFn!(error), true);
    });

    it('should retry a socket connection timeout', () => {
      const storage = new Storage({
        projectId: PROJECT_ID,
      });
      const error = new GaxiosError('Broken pipe', {});
      error.code = 'Socket connection timeout';
      assert.strictEqual(storage.retryOptions.retryableErrorFn!(error), true);
    });

    it('should not retry a 999 error', () => {
      const storage = new Storage({
        projectId: PROJECT_ID,
      });
      const error = new GaxiosError('999 Error', {});
      error.status = 999;
      assert.strictEqual(storage.retryOptions.retryableErrorFn!(error), false);
    });

    it('should return false if reason and code are both undefined', () => {
      const storage = new Storage({
        projectId: PROJECT_ID,
      });
      const error = new GaxiosError('error without a code', {});
      error.code = 'some error message';

      assert.strictEqual(storage.retryOptions.retryableErrorFn!(error), false);
    });

    it('should retry a 999 error if dictated by custom function', () => {
      const customRetryFunc = function (err?: GaxiosError) {
        if (err) {
          if ([999].indexOf(err.status!) !== -1) {
            return true;
          }
        }
        return false;
      };
      const storage = new Storage({
        projectId: PROJECT_ID,
        retryOptions: {retryableErrorFn: customRetryFunc},
      });
      const error = new GaxiosError('999 Error', {});
      error.status = 999;
      assert.strictEqual(storage.retryOptions.retryableErrorFn!(error), true);
    });

    it('should set customEndpoint to true when using apiEndpoint', () => {
      const storage = new Storage({
        projectId: PROJECT_ID,
        apiEndpoint: 'https://apiendpoint',
      });

      assert.strictEqual(storage.customEndpoint, true);
    });

    it('should prepend apiEndpoint with default protocol', () => {
      const protocollessApiEndpoint = 'some.fake.endpoint';
      const storage = new Storage({
        projectId: PROJECT_ID,
        apiEndpoint: protocollessApiEndpoint,
      });
      assert.strictEqual(
        storage.baseUrl,
        `https://${protocollessApiEndpoint}/storage/v1`,
      );
      assert.strictEqual(
        storage.apiEndpoint,
        `https://${protocollessApiEndpoint}`,
      );
    });

    it('should strip trailing slash from apiEndpoint', () => {
      const apiEndpoint = 'https://some.fake.endpoint/';
      const storage = new Storage({
        projectId: PROJECT_ID,
        apiEndpoint,
      });
      assert.strictEqual(storage.baseUrl, `${apiEndpoint}storage/v1`);
      assert.strictEqual(storage.apiEndpoint, 'https://some.fake.endpoint');
    });

    it('should accept a `crc32cGenerator`', () => {
      const validator: CRC32CValidator = {
        validate: function (): boolean {
          throw new Error('Function not implemented.');
        },
        update: function (): void {
          throw new Error('Function not implemented.');
        },
      };
      const crc32cGenerator = () => {
        return validator;
      };

      const storage = new Storage({crc32cGenerator});
      assert.strictEqual(storage.crc32cGenerator, crc32cGenerator);
    });

    it('should use `CRC32C_DEFAULT_VALIDATOR_GENERATOR` by default', () => {
      assert.strictEqual(
        storage.crc32cGenerator,
        CRC32C_DEFAULT_VALIDATOR_GENERATOR,
      );
    });

    it('should accept and use a `universeDomain`', () => {
      const universeDomain = 'my-universe.com';

      const storage = new Storage({universeDomain});

      assert.equal(storage.apiEndpoint, `https://storage.${universeDomain}`);
    });

    describe('STORAGE_EMULATOR_HOST', () => {
      // Note: EMULATOR_HOST is an experimental configuration variable. Use apiEndpoint instead.
      const EMULATOR_HOST = 'https://internal.benchmark.com/path';
      before(() => {
        process.env.STORAGE_EMULATOR_HOST = EMULATOR_HOST;
      });

      after(() => {
        delete process.env.STORAGE_EMULATOR_HOST;
      });

      it('should set baseUrl to env var STORAGE_EMULATOR_HOST', () => {
        const storage = new Storage({
          projectId: PROJECT_ID,
        });

        assert.strictEqual(storage.baseUrl, EMULATOR_HOST);
        assert.strictEqual(
          storage.apiEndpoint,
          'https://internal.benchmark.com/path',
        );
      });

      it('should be overriden by apiEndpoint', () => {
        const storage = new Storage({
          projectId: PROJECT_ID,
          apiEndpoint: 'https://some.api.com',
        });

        assert.strictEqual(storage.baseUrl, EMULATOR_HOST);
        assert.strictEqual(storage.apiEndpoint, 'https://some.api.com');
      });

      it('should prepend default protocol and strip trailing slash', () => {
        const EMULATOR_HOST = 'internal.benchmark.com/path/';
        process.env.STORAGE_EMULATOR_HOST = EMULATOR_HOST;

        const storage = new Storage({
          projectId: PROJECT_ID,
        });

        assert.strictEqual(storage.baseUrl, EMULATOR_HOST);
        assert.strictEqual(
          storage.apiEndpoint,
          'https://internal.benchmark.com/path',
        );
      });

      it('should set customEndpoint to true', () => {
        const storage = new Storage({
          projectId: PROJECT_ID,
        });

        assert.strictEqual(storage.customEndpoint, true);
      });
    });
  });

  describe('bucket', () => {
    it('should throw if no name was provided', () => {
      assert.throws(() => {
        storage.bucket(''), StorageExceptionMessages.BUCKET_NAME_REQUIRED;
      });
    });

    it('should accept a string for a name', () => {
      const newBucketName = 'new-bucket-name';
      const bucket = storage.bucket(newBucketName);
      assert(bucket instanceof Bucket);
      assert.strictEqual(bucket.name, newBucketName);
    });

    it('should optionally accept options', () => {
      const options = {
        userProject: 'grape-spaceship-123',
      };

      const bucket = storage.bucket('bucket-name', options);
      assert.strictEqual(bucket.userProject, options.userProject);
    });
  });

  describe('channel', () => {
    const ID = 'channel-id';
    const RESOURCE_ID = 'resource-id';

    it('should create a Channel object', () => {
      const channel = storage.channel(ID, RESOURCE_ID);

      assert(channel instanceof Channel);
      assert.strictEqual(channel.storageTransport, storage.storageTransport);
      assert.strictEqual(channel.metadata.id, ID);
      assert.strictEqual(channel.metadata.resourceId, RESOURCE_ID);
    });
  });

  describe('hmacKey', () => {
    let hmacKeyCtor: sinon.SinonSpy;
    beforeEach(() => {
      hmacKeyCtor = sinon.spy(hmacKeyModule, 'HmacKey');
    });

    afterEach(() => {
      hmacKeyCtor.restore();
    });

    it('should throw if accessId is not provided', () => {
      assert.throws(() => {
        storage.hmacKey(''), StorageExceptionMessages.HMAC_ACCESS_ID;
      });
    });

    it('should pass options object to HmacKey constructor', () => {
      const options: HmacKeyOptions = {projectId: 'hello-world'};
      storage.hmacKey('access-id', options);
      assert.deepStrictEqual(hmacKeyCtor.getCall(0).args, [
        storage,
        'access-id',
        options,
      ]);
    });
  });

  describe('createHmacKey', () => {
    const SERVICE_ACCOUNT_EMAIL = 'service-account@gserviceaccount.com';
    const ACCESS_ID = 'some-access-id';
    const metadataResponse = {
      accessId: ACCESS_ID,
      etag: 'etag',
      id: ACCESS_ID,
      projectId: 'project-id',
      serviceAccountEmail: SERVICE_ACCOUNT_EMAIL,
      state: 'ACTIVE',
      timeCreated: '20190101T00:00:00Z',
      updated: '20190101T00:00:00Z',
    };
    const response = {
      secret: 'my-secret',
      metadata: metadataResponse,
    };
    const OPTIONS: CreateHmacKeyOptions = {
      userProject: 'some-project',
    };

    let hmacKeyCtor: sinon.SinonSpy;
    beforeEach(() => {
      hmacKeyCtor = sinon.spy(hmacKeyModule, 'HmacKey');
    });

    afterEach(() => {
      hmacKeyCtor.restore();
    });

    it('should make correct API request', async () => {
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          assert.strictEqual(reqOpts.method, 'POST');
          assert.strictEqual(
            reqOpts.url,
            `/projects/${storage.projectId}/hmacKeys`,
          );
          assert.strictEqual(
            reqOpts.queryParameters!.serviceAccountEmail,
            SERVICE_ACCOUNT_EMAIL,
          );
          callback(null, response);
          return Promise.resolve({data: response});
        });

      await storage.createHmacKey(SERVICE_ACCOUNT_EMAIL);
    });

    it('should throw without a serviceAccountEmail', async () => {
      await assert.rejects(
        storage.createHmacKey({} as unknown as string),
        (err: Error) => {
          assert.strictEqual(
            err.message,
            StorageExceptionMessages.HMAC_SERVICE_ACCOUNT,
          );
          return true;
        },
      );
    });

    it('should throw when first argument is not a string', async () => {
      await assert.rejects(
        storage.createHmacKey({
          userProject: 'my-project',
        } as unknown as string),
        (err: Error) => {
          assert.strictEqual(
            err.message,
            StorageExceptionMessages.HMAC_SERVICE_ACCOUNT,
          );
          return true;
        },
      );
    });

    it('should make request with method options as query parameter', async () => {
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((_reqOpts, callback) => {
          assert.deepStrictEqual(_reqOpts.queryParameters, {
            serviceAccountEmail: SERVICE_ACCOUNT_EMAIL,
            ...OPTIONS,
          });
          callback(null, response);
          return Promise.resolve({data: response});
        });

      await storage.createHmacKey(SERVICE_ACCOUNT_EMAIL, OPTIONS);
    });

    it('should not modify the options object', () => {
      storage.storageTransport.makeRequest = sandbox.stub().resolves(response);
      const originalOptions = Object.assign({}, OPTIONS);

      storage.createHmacKey(SERVICE_ACCOUNT_EMAIL, OPTIONS, err => {
        assert.ifError(err);
        assert.deepStrictEqual(OPTIONS, originalOptions);
      });
    });

    it('should invoke callback with a secret and an HmacKey instance', () => {
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(null, response);
          return Promise.resolve();
        });

      storage.createHmacKey(SERVICE_ACCOUNT_EMAIL, (err, hmacKey, secret) => {
        assert.ifError(err);
        assert.strictEqual(secret, response.secret);
        assert.deepStrictEqual(hmacKeyCtor.getCall(0).args, [
          storage,
          response.metadata.accessId,
          {projectId: response.metadata.projectId},
        ]);
        assert.strictEqual(hmacKey!.metadata, metadataResponse);
      });
    });

    it('should invoke callback with raw apiResponse', () => {
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(null, response, response);
          return Promise.reject();
        });

      storage.createHmacKey(
        SERVICE_ACCOUNT_EMAIL,
        (err, _hmacKey, _secret, apiResponse) => {
          assert.ifError(err);
          assert.strictEqual(apiResponse, response);
        },
      );
    });

    it('should execute callback with request error', () => {
      const error = new Error('Request error');
      const response = {success: false};
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(error, null, response);
          return Promise.resolve();
        });

      storage.createHmacKey(SERVICE_ACCOUNT_EMAIL, err => {
        assert.strictEqual(err, error);
      });
    });
  });

  describe('createBucket', () => {
    const METADATA = {a: 'b', c: {d: 'e'}};

    it('should make correct API request', done => {
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          const body = JSON.parse(reqOpts.body);
          assert.strictEqual(reqOpts.method, 'POST');
          assert.strictEqual(reqOpts.url, '/b');
          assert.strictEqual(
            reqOpts.queryParameters!.project,
            storage.projectId,
          );
          assert.strictEqual(body.name, BUCKET_NAME);
          callback(null);
          return Promise.resolve({});
        });

      storage.createBucket(BUCKET_NAME, done);
    });

    it('should accept a name, metadata and callback', done => {
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          const body = JSON.parse(reqOpts.body);
          assert.deepStrictEqual(
            body,
            Object.assign(METADATA, {name: BUCKET_NAME}),
          );
          callback(null, METADATA);
          return Promise.resolve(METADATA);
        });
      storage.bucket = (name: string) => {
        assert.strictEqual(name, BUCKET_NAME);
        return bucket;
      };
      storage.createBucket(BUCKET_NAME, METADATA, err => {
        assert.ifError(err);
        done();
      });
    });

    it('should accept a name and callback only', done => {
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(null);
          return Promise.resolve();
        });
      storage.createBucket(BUCKET_NAME, done);
    });

    it('should throw if no name is provided', async () => {
      await assert.rejects(storage.createBucket(''), (err: Error) => {
        assert.strictEqual(
          err.message,
          StorageExceptionMessages.BUCKET_NAME_REQUIRED_CREATE,
        );
        return true;
      });
    });

    it('should honor the userProject option', done => {
      const options = {
        userProject: 'grape-spaceship-123',
      };

      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(
            reqOpts.queryParameters!.userProject,
            options.userProject,
          );
          done();
        });

      storage.createBucket(BUCKET_NAME, options, assert.ifError);
    });

    it('should execute callback with bucket', () => {
      storage.bucket = () => {
        return bucket;
      };
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(null, METADATA);
          return Promise.resolve();
        });
      storage.createBucket(BUCKET_NAME, (err, buck) => {
        assert.ifError(err);
        assert.deepStrictEqual(buck, bucket);
        assert.deepStrictEqual(buck.metadata, METADATA);
      });
    });

    it('should execute callback on error', done => {
      const error = new Error('Error.');
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(error);
          return Promise.resolve();
        });
      storage.createBucket(BUCKET_NAME, err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should execute callback with apiResponse', () => {
      const resp = {success: true};
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(null, resp, resp);
          return Promise.resolve();
        });
      storage.createBucket(BUCKET_NAME, (err, bucket, apiResponse) => {
        assert.strictEqual(resp, apiResponse);
      });
    });

    it('should allow a user-specified storageClass', done => {
      const storageClass = 'nearline';
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          const body = JSON.parse(reqOpts.body);
          assert.strictEqual(body.storageClass, storageClass);
          done();
        });
      storage.createBucket(BUCKET_NAME, {storageClass}, done);
    });

    it('should allow settings `storageClass` to same value as provided storage class name', done => {
      const storageClass = 'coldline';
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          const body = JSON.parse(reqOpts.body);
          assert.strictEqual(body.storageClass, storageClass.toUpperCase());
          done();
        });

      assert.doesNotThrow(() => {
        storage.createBucket(
          BUCKET_NAME,
          {storageClass, [storageClass]: true},
          done,
        );
      });
    });

    it('should allow setting rpo', done => {
      const location = 'NAM4';
      const rpo = 'ASYNC_TURBO';
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          const body = JSON.parse(reqOpts.body);
          assert.strictEqual(body.location, location);
          assert.strictEqual(body.rpo, rpo);
          done();
        });
      storage.createBucket(BUCKET_NAME, {location, rpo}, done);
    });

    it('should throw when `storageClass` is set to different value than provided storageClass name', () => {
      assert.throws(() => {
        storage.createBucket(
          BUCKET_NAME,
          {
            storageClass: 'nearline',
            coldline: true,
          },
          assert.ifError,
        );
      }, /Both `coldline` and `storageClass` were provided./);
    });

    it('should allow enabling object retention', done => {
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(
            reqOpts.queryParameters!.enableObjectRetention,
            true,
          );
          done();
        });
      storage.createBucket(BUCKET_NAME, {enableObjectRetention: true}, done);
    });

    it('should allow enabling hierarchical namespace', done => {
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          const body = JSON.parse(reqOpts.body);
          assert.strictEqual(body.hierarchicalNamespace.enabled, true);
          done();
        });
      storage.createBucket(
        BUCKET_NAME,
        {hierarchicalNamespace: {enabled: true}},
        done,
      );
    });

    describe('storage classes', () => {
      it('should expand metadata.archive', done => {
        storage.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            const body = JSON.parse(reqOpts.body);
            assert.strictEqual(body.storageClass, 'ARCHIVE');
            done();
          });

        storage.createBucket(BUCKET_NAME, {archive: true}, assert.ifError);
      });

      it('should expand metadata.coldline', done => {
        storage.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            const body = JSON.parse(reqOpts.body);
            assert.strictEqual(body.storageClass, 'COLDLINE');
            done();
          });

        storage.createBucket(BUCKET_NAME, {coldline: true}, assert.ifError);
      });

      it('should expand metadata.dra', done => {
        storage.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            const body = JSON.parse(reqOpts.body);
            assert.strictEqual(
              body.storageClass,
              'DURABLE_REDUCED_AVAILABILITY',
            );
            done();
          });

        storage.createBucket(BUCKET_NAME, {dra: true}, assert.ifError);
      });

      it('should expand metadata.multiRegional', done => {
        storage.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            const body = JSON.parse(reqOpts.body);
            assert.strictEqual(body.storageClass, 'MULTI_REGIONAL');
            done();
          });

        storage.createBucket(
          BUCKET_NAME,
          {
            multiRegional: true,
          },
          assert.ifError,
        );
      });

      it('should expand metadata.nearline', done => {
        storage.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            const body = JSON.parse(reqOpts.body);
            assert.strictEqual(body.storageClass, 'NEARLINE');
            done();
          });

        storage.createBucket(BUCKET_NAME, {nearline: true}, assert.ifError);
      });

      it('should expand metadata.regional', done => {
        storage.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            const body = JSON.parse(reqOpts.body);
            assert.strictEqual(body.storageClass, 'REGIONAL');
            done();
          });

        storage.createBucket(BUCKET_NAME, {regional: true}, assert.ifError);
      });

      it('should expand metadata.standard', done => {
        storage.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            const body = JSON.parse(reqOpts.body);
            assert.strictEqual(body.storageClass, 'STANDARD');
            done();
          });

        storage.createBucket(BUCKET_NAME, {standard: true}, assert.ifError);
      });
    });

    describe('requesterPays', () => {
      it('should accept requesterPays setting', done => {
        const options = {
          requesterPays: true,
        };
        storage.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            const body = JSON.parse(reqOpts.body);
            assert.deepStrictEqual(body.billing, options);
            assert.strictEqual(body.requesterPays, undefined);
            done();
          });
        storage.createBucket(BUCKET_NAME, options, assert.ifError);
      });
    });
  });

  describe('getBuckets', () => {
    it('should get buckets without a query', done => {
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.url, '/b');
          assert.deepStrictEqual(reqOpts.queryParameters, {
            project: storage.projectId,
          });
          done();
        });
      storage.getBuckets(util.noop);
    });

    it('should get buckets with a query', done => {
      const token = 'next-page-token';
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.deepStrictEqual(reqOpts.queryParameters, {
            project: storage.projectId,
            maxResults: 5,
            pageToken: token,
          });
          done();
        });
      storage.getBuckets({maxResults: 5, pageToken: token}, util.noop);
    });

    it('should execute callback with error', () => {
      const error = new Error('Error.');
      const apiResponse = {};

      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(error, apiResponse);
          return Promise.resolve();
        });

      storage.getBuckets({}, err => {
        assert.strictEqual(err, error);
      });
    });

    it('should return nextQuery if more results exist', () => {
      const token = 'next-page-token';
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .resolves({data: {nextPageToken: token, items: []}});
      storage.getBuckets({maxResults: 5}, (err, results, nextQuery) => {
        assert.strictEqual((nextQuery as any).pageToken, token);
        assert.strictEqual((nextQuery as any).maxResults, 5);
      });
    });

    it('should return null nextQuery if there are no more results', () => {
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .resolves({data: {items: []}});
      storage.getBuckets({maxResults: 5}, (err, results, nextQuery) => {
        assert.strictEqual(nextQuery, null);
      });
    });

    it('should return Bucket objects', () => {
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .resolves({data: {items: [{id: 'fake-bucket-name'}]}});
      storage.getBuckets((err, buckets) => {
        assert.ifError(err);
        assert(buckets[0] instanceof Bucket);
      });
    });

    it('should return apiResponse', () => {
      const resp = {items: [{id: 'fake-bucket-name'}]};
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .resolves({data: resp, resp});
      storage.getBuckets((err, buckets, nextQuery, apiResponse) => {
        assert.deepStrictEqual(resp, apiResponse);
      });
    });

    it('should populate returned Bucket object with metadata', () => {
      const bucketMetadata = {
        id: 'bucketname',
        contentType: 'x-zebra',
        metadata: {
          my: 'custom metadata',
        },
      };
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .resolves({data: {item: [bucketMetadata]}});
      storage.getBuckets((err, buckets) => {
        assert.ifError(err);
        assert.deepStrictEqual(buckets[0].metadata, bucketMetadata);
      });
    });
  });

  describe('getHmacKeys', () => {
    const SERVICE_ACCOUNT_EMAIL = 'service-account@gserviceaccount.com';
    const ACCESS_ID = 'some-access-id';
    const metadataResponse = {
      accessId: ACCESS_ID,
      etag: 'etag',
      id: ACCESS_ID,
      projectId: 'project-id',
      serviceAccountEmail: SERVICE_ACCOUNT_EMAIL,
      state: 'ACTIVE',
      timeCreated: '20190101T00:00:00Z',
      updated: '20190101T00:00:00Z',
    };

    beforeEach(() => {
      storage.storageTransport.makeRequest = sandbox.stub().resolves({});
    });

    let hmacKeyCtor: sinon.SinonSpy;
    beforeEach(() => {
      hmacKeyCtor = sinon.spy(hmacKeyModule, 'HmacKey');
    });

    afterEach(() => {
      hmacKeyCtor.restore();
    });

    it('should get HmacKeys without a query', done => {
      storage.storageTransport.makeRequest = sandbox.stub().callsFake(opts => {
        assert.strictEqual(opts.uri, `/projects/${storage.projectId}/hmacKeys`);
        assert.deepStrictEqual(opts.queryParameters, {});
      });
      storage.getHmacKeys(() => {
        done();
      });
    });

    it('should get HmacKeys with a query', done => {
      const query = {
        maxResults: 5,
        pageToken: 'next-page-token',
        serviceAccountEmail: SERVICE_ACCOUNT_EMAIL,
        showDeletedKeys: false,
      };

      storage.storageTransport.makeRequest = sandbox.stub().callsFake(opts => {
        assert.strictEqual(opts.url, `/projects/${storage.projectId}/hmacKeys`);
        assert.deepStrictEqual(opts.queryParameters, query);
        done();
      });
      storage.getHmacKeys(query, () => {
        done();
      });
    });

    it('should execute callback with error', () => {
      const error = new Error('Error.');
      const apiResponse = {};

      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(error, apiResponse);
          return Promise.resolve();
        });

      storage.getHmacKeys({}, err => {
        assert.strictEqual(err, error);
      });
    });

    it('should return nextQuery if more results exist', () => {
      const token = 'next-page-token';
      const query: GetHmacKeysOptions = {
        serviceAccountEmail: 'fake-email',
        autoPaginate: false,
      };
      const expectedNextQuery = Object.assign({}, query, {pageToken: token});
      const resp = {nextPageToken: token, items: []};
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .resolves({data: resp});

      storage.getHmacKeys(query, (err, _hmacKeys, nextQuery) => {
        assert.ifError(err);
        assert.deepStrictEqual(nextQuery, expectedNextQuery);
      });
    });

    it('should return null nextQuery if there are no more results', () => {
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .resolves({data: {item: []}});

      storage.getHmacKeys(
        {autoPaginate: false},
        (err, _hmacKeys, nextQuery) => {
          assert.ifError(err);
          assert.strictEqual(nextQuery, null);
        },
      );
    });

    it('should return apiResponse', () => {
      const resp = {items: [metadataResponse]};
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .resolves({data: resp, resp});

      storage.getHmacKeys((err, _hmacKeys, _nextQuery, apiResponse) => {
        assert.ifError(err);
        assert.deepStrictEqual(resp, apiResponse);
      });
    });

    it('should populate returned HmacKey object with accessId and metadata', () => {
      const resp = {item: [metadataResponse]};
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .resolves({data: resp});

      storage.getHmacKeys((err, hmacKeys) => {
        assert.ifError(err);
        assert.deepStrictEqual(hmacKeyCtor.getCall(0).args, [
          storage,
          metadataResponse.accessId,
          {projectId: metadataResponse.projectId},
        ]);
        assert.deepStrictEqual(hmacKeys![0].metadata, metadataResponse);
      });
    });
  });

  describe('getServiceAccount', () => {
    it('should make the correct request', done => {
      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(
            reqOpts.url,
            `/projects/${storage.projectId}/serviceAccount`,
          );
          assert.deepStrictEqual(reqOpts.queryParameters, {});
          done();
        });

      storage.getServiceAccount(assert.ifError);
    });

    it('should allow user options', done => {
      const options = {
        projectIdentifier: 'test-identifier',
        userProject: 'test-user-project',
      };

      storage.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.queryParameters, options);
          done();
        });

      storage.getServiceAccount(options, assert.ifError);
    });

    describe('error', () => {
      const ERROR = new Error('Error.');
      const API_RESPONSE = {};

      beforeEach(() => {
        storage.storageTransport.makeRequest = sandbox
          .stub()
          .rejects({ERROR, data: API_RESPONSE, resp: API_RESPONSE});
      });

      it('should return the error and apiResponse', () => {
        storage.getServiceAccount((err, serviceAccount, apiResponse) => {
          assert.strictEqual(err, ERROR);
          assert.strictEqual(serviceAccount, null);
          assert.strictEqual(apiResponse, API_RESPONSE);
        });
      });
    });

    describe('success', () => {
      const API_RESPONSE = {};

      beforeEach(() => {
        storage.storageTransport.makeRequest = sandbox
          .stub()
          .resolves({data: API_RESPONSE, resp: API_RESPONSE});
      });

      it('should convert snake_case response to camelCase', () => {
        const apiResponse = {
          snake_case: true,
        };

        storage.storageTransport.makeRequest = sandbox
          .stub()
          .rejects({data: apiResponse, resp: apiResponse});

        storage.getServiceAccount((err, serviceAccount) => {
          assert.ifError(err);
          assert.strictEqual(serviceAccount!.snakeCase, apiResponse.snake_case);
          assert.strictEqual(serviceAccount!.snake_case, undefined);
        });
      });

      it('should return the serviceAccount and apiResponse', () => {
        storage.storageTransport.makeRequest = sandbox
          .stub()
          .resolves({data: API_RESPONSE, resp: API_RESPONSE});

        storage.getServiceAccount((err, serviceAccount, apiResponse) => {
          assert.ifError(err);
          assert.deepStrictEqual(serviceAccount, {});
          assert.strictEqual(apiResponse, API_RESPONSE);
        });
      });
    });
  });
});
