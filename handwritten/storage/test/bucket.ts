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

import assert from 'assert';
import {describe, it, before, beforeEach, afterEach} from 'mocha';
import {
  File,
  Bucket,
  Storage,
  CRC32C,
  GaxiosError,
  Notification,
  IdempotencyStrategy,
  CreateWriteStreamOptions,
} from '../src/index.js';
import sinon from 'sinon';
import {StorageTransport} from '../src/storage-transport.js';
import {
  AvailableServiceObjectMethods,
  BucketExceptionMessages,
  EnableLoggingOptions,
  GetBucketSignedUrlConfig,
  LifecycleRule,
} from '../src/bucket.js';
import mime from 'mime';
import {convertObjKeysToSnakeCase, getDirName} from '../src/util.js';
import {util} from '../src/nodejs-common/index.js';
import path from 'path';
import * as stream from 'stream';
import {Transform} from 'stream';

class HTTPError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

describe('Bucket', () => {
  let bucket: Bucket;
  let STORAGE: Storage;
  let sandbox: sinon.SinonSandbox;
  let storageTransport: StorageTransport;
  const PROJECT_ID = 'project-id';
  const BUCKET_NAME = 'test-bucket';

  before(() => {
    sandbox = sinon.createSandbox();
    STORAGE = new Storage({projectId: PROJECT_ID});
    storageTransport = sandbox.createStubInstance(StorageTransport);
    STORAGE.storageTransport = storageTransport;
    STORAGE.retryOptions.autoRetry = true;
  });

  beforeEach(() => {
    bucket = new Bucket(STORAGE, BUCKET_NAME);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('instantiation', () => {
    it('should remove a leading gs://', () => {
      const bucket = new Bucket(STORAGE, 'gs://bucket-name');
      assert.strictEqual(bucket.name, 'bucket-name');
    });

    it('should remove a trailing /', () => {
      const bucket = new Bucket(STORAGE, 'bucket-name/');
      assert.strictEqual(bucket.name, 'bucket-name');
    });

    it('should localize the name', () => {
      assert.strictEqual(bucket.name, BUCKET_NAME);
    });

    it('should localize the storage instance', () => {
      assert.strictEqual(bucket.storage, STORAGE);
    });

    describe('create', () => {
      it('should make the correct request', async () => {
        const options = {userProject: 'user-project'};
        STORAGE.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake((reqOpts, callback) => {
            assert.strictEqual(reqOpts.method, 'POST');
            assert.strictEqual(reqOpts.url, '/b');
            assert.deepStrictEqual(
              reqOpts.queryParameters!.userProject,
              options.userProject,
            );
            callback(null, {data: {}});
            return Promise.resolve({data: {}});
          });
        await bucket.create(options);
      });

      it('should return an error if the request fails', async () => {
        const error = new GaxiosError('err', {});

        STORAGE.storageTransport.makeRequest = sandbox.stub().rejects(error);
        await bucket.create((err: GaxiosError | null) => {
          assert.strictEqual(err, error);
        });
      });
    });

    describe('delete', () => {
      it('should make the correct request', () => {
        const options = {userProject: 'user-project'};
        STORAGE.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            assert.strictEqual(reqOpts.method, 'DELETE');
            assert.strictEqual(reqOpts.url, '/b/test-bucket');
            assert.deepStrictEqual(
              reqOpts.queryParameters!.userProject,
              options.userProject,
            );
            return Promise.resolve();
          });
        bucket.delete(options, err => {
          assert.ifError(err);
        });
      });

      it('should return an error if the request fails', async () => {
        const error = new GaxiosError('err', {});

        STORAGE.storageTransport.makeRequest = sandbox.stub().rejects(error);
        await bucket.delete((err: GaxiosError | null) => {
          assert.strictEqual(err, error);
        });
      });
    });

    describe('exists', () => {
      it('should make the correct request', () => {
        const options = {userProject: 'user-project'};
        STORAGE.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            assert.strictEqual(reqOpts.method, 'GET');
            assert.strictEqual(reqOpts.url, '/b/test-bucket');
            assert.deepStrictEqual(
              reqOpts.queryParameters!.userProject,
              options.userProject,
            );
            return Promise.resolve();
          });
        bucket.exists(options, err => {
          assert.ifError(err);
        });
      });

      it('should return an error if the request fails', async () => {
        const error = new GaxiosError('err', {});

        STORAGE.storageTransport.makeRequest = sandbox.stub().rejects(error);
        await bucket.exists((err: GaxiosError | null) => {
          assert.strictEqual(err, error);
        });
      });
    });

    describe('get', () => {
      it('should make the correct request', () => {
        const options = {userProject: 'user-project'};
        STORAGE.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            assert.strictEqual(reqOpts.method, 'GET');
            assert.strictEqual(reqOpts.url, '/b/test-bucket');
            assert.deepStrictEqual(
              reqOpts.queryParameters!.userProject,
              options.userProject,
            );
            return Promise.resolve();
          });
        bucket.get(options, err => {
          assert.ifError(err);
        });
      });

      it('should return an error if the request fails', () => {
        const error = new GaxiosError('err', {});

        STORAGE.storageTransport.makeRequest = sandbox.stub().rejects(error);
        bucket.get((err: GaxiosError | null) => {
          assert.strictEqual(err, error);
        });
      });
    });

    describe('getMetadata', () => {
      it('should make the correct request', () => {
        const options = {userProject: 'user-project'};
        STORAGE.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            assert.strictEqual(reqOpts.method, 'GET');
            assert.strictEqual(reqOpts.url, '/b/test-bucket');
            assert.deepStrictEqual(
              reqOpts.queryParameters!.userProject,
              options.userProject,
            );
            return Promise.resolve();
          });
        bucket.getMetadata(options, err => {
          assert.ifError(err);
        });
      });

      it('should return an error if the request fails', async () => {
        const error = new GaxiosError('err', {});

        STORAGE.storageTransport.makeRequest = sandbox.stub().rejects(error);
        await bucket.getMetadata((err: GaxiosError | null) => {
          assert.strictEqual(err, error);
        });
      });
    });

    describe('setMetadata', () => {
      it('should make the correct request', async () => {
        const options = {
          versioning: {
            enabled: true,
          },
        };
        STORAGE.storageTransport.makeRequest = sandbox
          .stub()
          .callsFake(reqOpts => {
            assert.strictEqual(reqOpts.method, 'PATCH');
            assert.strictEqual(reqOpts.url, '/b/test-bucket');
            assert.deepStrictEqual(
              reqOpts.queryParameters!.versioning,
              options.versioning,
            );
            return Promise.resolve();
          });
        await bucket.setMetadata(options, assert.ifError);
      });
    });

    describe('ACL objects', () => {
      it('should create an ACL object', () => {
        assert.strictEqual(bucket.acl.pathPrefix, '/acl');
        assert.strictEqual(bucket.acl.parent, bucket);
        assert.strictEqual(bucket.acl.storageTransport, storageTransport);
      });

      it('should create a default ACL object', () => {
        assert.strictEqual(bucket.acl.default.pathPrefix, '/defaultObjectAcl');
        assert.strictEqual(bucket.acl.default.parent, bucket);
        assert.strictEqual(
          bucket.acl.default.storageTransport,
          storageTransport,
        );
      });
    });

    it('should accept a `crc32cGenerator`', () => {
      const crc32cGenerator = () => {
        return new CRC32C();
      };

      const bucket = new Bucket(STORAGE, 'bucket-name', {crc32cGenerator});
      assert.strictEqual(bucket.crc32cGenerator, crc32cGenerator);
    });

    it("should use storage's `crc32cGenerator` by default", () => {
      assert.strictEqual(bucket.crc32cGenerator, STORAGE.crc32cGenerator);
    });
  });

  describe('cloudStorageURI', () => {
    it('should return the appropriate `gs://` URI', () => {
      const bucket = new Bucket(STORAGE, BUCKET_NAME);

      assert(bucket.cloudStorageURI instanceof URL);
      assert.equal(bucket.cloudStorageURI.host, BUCKET_NAME);
    });
  });

  describe('addLifecycleRule', () => {
    beforeEach(() => {
      bucket.getMetadata = sandbox.stub().callsFake(callback => {
        callback(null, {}, {});
      });
    });

    it('should accept raw input', done => {
      const rule: LifecycleRule = {
        action: {
          type: 'Delete',
        },
        condition: {},
      };

      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata, options, callback) => {
          assert.deepStrictEqual(metadata.lifecycle!.rule, [rule]);
          callback(null);
          done();
        });

      bucket.addLifecycleRule(rule, assert.ifError);
    });

    it('should properly set condition', done => {
      const rule: LifecycleRule = {
        action: {
          type: 'Delete',
        },
        condition: {
          age: 30,
        },
      };

      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata, options, callback) => {
          assert.deepStrictEqual(metadata.lifecycle?.rule, [
            {
              action: {
                type: 'Delete',
              },
              condition: rule.condition,
            },
          ]);
          callback(null);
          done();
        });

      bucket.addLifecycleRule(rule, assert.ifError);
    });

    it('should convert Date object to date string for condition', done => {
      const date = new Date();

      const rule: LifecycleRule = {
        action: {
          type: 'Delete',
        },
        condition: {
          createdBefore: date,
        },
      };

      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata, options, callback) => {
          const expectedDateString = date.toISOString().replace(/T.+$/, '');

          const rule = metadata!.lifecycle!.rule![0];
          assert.strictEqual(rule.condition.createdBefore, expectedDateString);
          callback(null);
          done();
        });

      bucket.addLifecycleRule(rule, assert.ifError);
    });

    it('should optionally overwrite existing rules', done => {
      const rule: LifecycleRule = {
        action: {
          type: 'Delete',
        },
        condition: {},
      };

      const options = {
        append: false,
      };

      bucket.getMetadata = sandbox.stub().callsFake(() => {
        done(new GaxiosError('Metadata should not be refreshed.', {}));
      });

      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata, options, callback) => {
          assert.strictEqual(metadata!.lifecycle!.rule!.length, 1);
          assert.deepStrictEqual(metadata.lifecycle?.rule, [rule]);
          callback(null);
          done();
        });

      bucket.addLifecycleRule(rule, options, assert.ifError);
    });

    it('should combine rule with existing rules by default', done => {
      const existingRule: LifecycleRule = {
        action: {
          type: 'Delete',
        },
        condition: {},
      };

      const newRule: LifecycleRule = {
        action: {
          type: 'Delete',
        },
        condition: {},
      };

      bucket.getMetadata = sandbox.stub().callsFake(callback => {
        callback(null, {lifecycle: {rule: [existingRule]}});
      });

      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata, options, callback) => {
          assert.strictEqual(metadata!.lifecycle!.rule!.length, 2);
          assert.deepStrictEqual(metadata.lifecycle?.rule, [
            existingRule,
            newRule,
          ]);
          callback(null);
          done();
        });

      bucket.addLifecycleRule(newRule, assert.ifError);
    });

    it('should accept multiple rules', done => {
      const existingRule: LifecycleRule = {
        action: {
          type: 'Delete',
        },
        condition: {},
      };

      const newRules: LifecycleRule[] = [
        {
          action: {
            type: 'Delete',
          },
          condition: {},
        },
        {
          action: {
            type: 'Delete',
          },
          condition: {},
        },
      ];

      bucket.getMetadata = sandbox.stub().callsFake(callback => {
        callback(null, {lifecycle: {rule: [existingRule]}}, {});
      });

      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata, options, callback) => {
          assert.strictEqual(metadata!.lifecycle!.rule!.length, 3);
          assert.deepStrictEqual(metadata.lifecycle?.rule, [
            existingRule,
            newRules[0],
            newRules[1],
          ]);
          callback(null);
          done();
        });

      bucket.addLifecycleRule(newRules, assert.ifError);
    });

    it('should pass error from getMetadata to callback', done => {
      const error = new GaxiosError('from getMetadata', {});
      const rule: LifecycleRule = {
        action: {
          type: 'Delete',
        },
        condition: {},
      };

      bucket.getMetadata = sandbox.stub().callsFake(callback => {
        callback(error);
      });

      bucket.addLifecycleRule(rule, err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should pass error from setMetadata to callback', done => {
      const error = new GaxiosError('from setMetadata', {});
      const rule: LifecycleRule = {
        action: {
          type: 'Delete',
        },
        condition: {},
      };

      bucket.getMetadata = sandbox.stub().callsFake(callback => {
        callback(null, {lifecycle: {rule: []}});
      });

      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata, options, callback) => {
          callback(error);
        });

      bucket.addLifecycleRule(rule, err => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('combine', () => {
    it('should throw if invalid sources are provided', () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      assert.rejects(bucket.combine([], 'destination-file'), (err: Error) => {
        assert.strictEqual(
          err.message,
          BucketExceptionMessages.PROVIDE_SOURCE_FILE,
        );
      });
    });

    it('should throw if a destination is not provided', () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      assert.rejects(bucket.combine(['1', '2'], ''), (err: Error) => {
        assert.strictEqual(
          err.message,
          BucketExceptionMessages.DESTINATION_FILE_NOT_SPECIFIED,
        );
      });
    });

    it('should accept string or file input for sources', done => {
      const file1 = bucket.file('1.txt');
      const file2 = bucket.file('2.txt');
      const destinationFileName = bucket.file('destination.txt');

      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.method, 'POST');
          assert.strictEqual(reqOpts.url, '/compose');
          assert.strictEqual(reqOpts.body.sourceObjects[0].name, file1.name);
          assert.strictEqual(reqOpts.body.sourceObjects[1].name, file2.name);
          done();
        });

      bucket.combine([file1, file2], destinationFileName, done);
    });

    it('should use content type from the destination metadata', async () => {
      const destination = bucket.file('destination.txt');

      storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          assert.strictEqual(
            reqOpts.body.destination.contentType,
            mime.getType(destination.name),
          );
          callback(null, {});
          return Promise.resolve({});
        });

      await bucket.combine(['1', '2'], destination);
    });

    it('should use content type from the destination metadata', async () => {
      const destination = bucket.file('destination.txt');
      destination.metadata = {contentType: 'content-type'};

      storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          assert.strictEqual(
            reqOpts.body.destination.contentType,
            destination.metadata.contentType,
          );
          callback(null, {});
          return Promise.resolve({});
        });

      await bucket.combine(['1', '2'], destination);
    });

    it('should detect dest content type if not in metadata', async () => {
      const destination = bucket.file('destination.txt');

      storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          assert.strictEqual(
            reqOpts.body.destination.contentType,
            mime.getType(destination.name),
          );
          callback(null, {});
          return Promise.resolve({});
        });

      await bucket.combine(['1', '2'], destination);
    });

    it('should make correct API request', done => {
      const sources = [bucket.file('1.foo'), bucket.file('2.foo')];
      const destination = bucket.file('destination.foo');

      storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(reqOpts.url, '/compose');
        assert.deepStrictEqual(reqOpts.body, {
          destination: {
            contentType: mime.getType(destination.name) || undefined,
            contentEncoding: undefined,
          },
          sourceObjects: [{name: sources[0].name}, {name: sources[1].name}],
        });
        done();
      });

      bucket.combine(sources, destination, done);
    });

    it('should encode the destination file name', done => {
      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('needs encoding.jpg');

      storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(reqOpts.url.indexOf(destination), -1);
        done();
      });

      bucket.combine(sources, destination, done);
    });

    it('should send a source generation value if available', done => {
      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      sources[0].metadata = {generation: 1};
      sources[1].metadata = {generation: 2};

      const destination = bucket.file('destination.txt');

      storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.deepStrictEqual(reqOpts.body.sourceObjects, [
          {name: sources[0].name, generation: sources[0].metadata.generation},
          {name: sources[1].name, generation: sources[1].metadata.generation},
        ]);
        done();
      });

      bucket.combine(sources, destination, done);
    });

    it('should accept userProject option', () => {
      const options = {
        userProject: 'user-project-id',
      };

      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('destination.txt');

      storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(reqOpts.queryParameters, options);
        return Promise.resolve({});
      });

      bucket.combine(sources, destination, options, assert.ifError);
    });

    it('should accept precondition options', () => {
      const options = {
        ifGenerationMatch: 100,
        ifGenerationNotMatch: 101,
        ifMetagenerationMatch: 102,
        ifMetagenerationNotMatch: 103,
      };

      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('destination.txt');

      storageTransport.makeRequest = sandbox.stub().callsFake(reqOpts => {
        assert.strictEqual(
          reqOpts.queryParameters.ifGenerationMatch,
          options.ifGenerationMatch,
        );
        assert.strictEqual(
          reqOpts.queryParameters.ifGenerationNotMatch,
          options.ifGenerationNotMatch,
        );
        assert.strictEqual(
          reqOpts.queryParameters.ifMetagenerationMatch,
          options.ifMetagenerationMatch,
        );
        assert.strictEqual(
          reqOpts.queryParameters.ifMetagenerationNotMatch,
          options.ifMetagenerationNotMatch,
        );
        return Promise.resolve({});
      });

      bucket.combine(sources, destination, options, assert.ifError);
    });

    it('should execute the callback', async () => {
      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('destination.txt');

      storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(null);
          return Promise.resolve();
        });

      await bucket.combine(sources, destination);
    });

    it('should execute the callback with an error', () => {
      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('destination.txt');

      const error = new GaxiosError('Error.', {});

      storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(error);
          return Promise.resolve();
        });

      bucket.combine(sources, destination, err => {
        assert.strictEqual(err, error);
      });
    });

    it('should execute the callback with apiResponse', () => {
      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('destination.txt');
      const resp = {success: true};

      storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(null, resp);
          return Promise.resolve();
        });

      bucket.combine(sources, destination, (err, obj, apiResponse) => {
        assert.strictEqual(resp, apiResponse);
      });
    });

    it('should set maxRetries to 0 when ifGenerationMatch is undefined', done => {
      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('destination.txt');

      storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          assert.strictEqual(reqOpts.maxRetries, 0);
          callback(null);
          return Promise.resolve();
        });

      bucket.combine(sources, destination, done);
    });
  });

  describe('createChannel', () => {
    const ID = 'id';
    const CONFIG = {
      address: 'https://...',
    };

    it('should throw if an ID is not provided', () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      assert.rejects(
        bucket.createChannel(undefined as unknown as string, CONFIG),
        (err: Error) => {
          assert.strictEqual(
            err.message,
            BucketExceptionMessages.CHANNEL_ID_REQUIRED,
          );
        },
      );
    });

    it('should make the correct request', done => {
      const config = Object.assign({}, CONFIG, {
        a: 'b',
        c: 'd',
      });
      const originalConfig = Object.assign({}, config);

      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.method, 'POST');
          assert.strictEqual(reqOpts.url, '/b/o/watch');

          const expectedJson = Object.assign({}, config, {
            id: ID,
            type: 'web_hook',
          });
          assert.deepStrictEqual(reqOpts.body, expectedJson);
          assert.deepStrictEqual(config, originalConfig);

          done();
        });

      bucket.createChannel(ID, config, assert.ifError);
    });

    it('should accept userProject option', done => {
      const options = {
        userProject: 'user-project-id',
      };

      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.queryParameters, options);
          done();
        });

      bucket.createChannel(ID, CONFIG, options, assert.ifError);
    });

    describe('error', () => {
      const error = new GaxiosError('Error.', {});
      const apiResponse = {};

      beforeEach(() => {
        bucket.storageTransport.makeRequest = sandbox
          .stub()
          .rejects({error, apiResponse});
      });

      it('should execute callback with error & API response', () => {
        bucket.createChannel(ID, CONFIG, {}, (err, channel, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(channel, null);
          assert.strictEqual(apiResponse_, apiResponse);
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        resourceId: 'resource-id',
      };

      beforeEach(() => {
        bucket.storageTransport.makeRequest = sandbox
          .stub()
          .resolves(apiResponse);
      });

      it('should exec a callback with Channel & API response', () => {
        const channel = {};

        bucket.storage.channel = sandbox
          .stub()
          .callsFake((id: string, resourceId: string) => {
            assert.strictEqual(id, ID);
            assert.strictEqual(resourceId, apiResponse.resourceId);
            return channel;
          });

        bucket.createChannel(ID, CONFIG, {}, (err, channel_, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(channel_, channel);
          assert.strictEqual(channel_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
        });
      });
    });
  });

  describe('createNotification', () => {
    const PUBSUB_SERVICE_PATH = '//pubsub.googleapis.com/';
    const TOPIC = 'my-topic';
    const FULL_TOPIC_NAME =
      PUBSUB_SERVICE_PATH + `projects/${PROJECT_ID}/topics/` + TOPIC;

    it('should throw an error if a valid topic is not provided', () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      assert.rejects(
        bucket.createNotification(undefined as unknown as string),
        (err: Error) => {
          assert.strictEqual(
            err.message,
            BucketExceptionMessages.TOPIC_NAME_REQUIRED,
          );
        },
      );
    });

    it('should throw an error if topic is not a string', () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      assert.rejects(
        bucket.createNotification(123 as unknown as string),
        (err: Error) => {
          assert.strictEqual(
            err.message,
            BucketExceptionMessages.TOPIC_NAME_REQUIRED,
          );
        },
      );
    });

    it('should make the correct request', done => {
      const topic = 'projects/my-project/topics/my-topic';
      const options = {payloadFormat: 'NONE'};
      const expectedTopic = PUBSUB_SERVICE_PATH + topic;
      const expectedJson = Object.assign(
        {topic: expectedTopic},
        convertObjKeysToSnakeCase(options),
      );

      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.method, 'POST');
          assert.strictEqual(reqOpts.url, '/b/notificationConfigs');
          assert.deepStrictEqual(reqOpts.body, expectedJson);
          assert.notStrictEqual(reqOpts.body, options);
          done();
        });

      bucket.createNotification(topic, options, assert.ifError);
    });

    it('should accept incomplete topic names', done => {
      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.body.topic, FULL_TOPIC_NAME);
          done();
        });

      bucket.createNotification(TOPIC, {}, assert.ifError);
    });

    it('should set a default payload format', done => {
      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.body.payload_format, 'JSON_API_V1');
          done();
        });

      bucket.createNotification(TOPIC, {}, assert.ifError);
    });

    it('should optionally accept options', done => {
      const expectedJson = {
        topic: FULL_TOPIC_NAME,
        payload_format: 'JSON_API_V1',
      };

      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.deepStrictEqual(reqOpts.body, expectedJson);
          done();
        });

      bucket.createNotification(TOPIC, assert.ifError);
    });

    it('should accept a userProject', done => {
      const options = {
        userProject: 'grape-spaceship-123',
      };

      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(
            reqOpts.queryParameters.userProject,
            options.userProject,
          );
          done();
        });

      bucket.createNotification(TOPIC, options, assert.ifError);
    });

    it('should return errors to the callback', () => {
      const error = new GaxiosError('err', {});
      const response = {};

      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .rejects({error, response});

      bucket.createNotification(TOPIC, {}, (err, notification, resp) => {
        assert.strictEqual(err, error);
        assert.strictEqual(notification, null);
        assert.strictEqual(resp, response);
      });
    });

    it('should return a notification object', () => {
      const fakeId = '123';
      const response = {id: fakeId};
      const fakeNotification = {};

      bucket.storageTransport.makeRequest = sandbox.stub().resolves(response);

      bucket.notification = sandbox.stub().callsFake(id => {
        assert.strictEqual(id, fakeId);
        return fakeNotification;
      });

      bucket.createNotification(TOPIC, {}, (err, notification) => {
        assert.ifError(err);
        assert.strictEqual(notification, fakeNotification);
        assert.strictEqual(notification.metadata, response);
      });
    });
  });

  /* describe('deleteFiles', () => {
    let readCount: number;

    beforeEach(() => {
      readCount = 0;
    });

    it('should accept only a callback', done => {
      const files = [bucket.file('1'), bucket.file('2')].map(file => {
        file.delete = () => {
          return Promise.resolve();
        };
        return file;
      });

      const readable = new stream.Readable({
        objectMode: true,
        read() {
          if (readCount < 1) {
            this.push(files[readCount]);
            readCount++;
          } else {
            this.push(null);
          }
        },
      });

      bucket.getFilesStream = (query: {}) => {
        assert.deepStrictEqual(query, {});
        return readable;
      };

      bucket.deleteFiles(done);
    });

    it('should get files from the bucket', done => {
      const query = {a: 'b', c: 'd'};

      const files = [bucket.file('1'), bucket.file('2')].map(file => {
        file.delete = () => {
          return Promise.resolve();
        };
        return file;
      });

      const readable = new stream.Readable({
        objectMode: true,
        read() {
          if (readCount < 1) {
            this.push(files[readCount]);
            readCount++;
          } else {
            this.push(null);
          }
        },
      });

      bucket.getFilesStream = (query_: {}) => {
        assert.deepStrictEqual(query_, query);
        return readable;
      };

      bucket.deleteFiles(query, done);
    });

    it('should process 10 files at a time', done => {
      pLimitOverride = (limit: number) => {
        assert.strictEqual(limit, 10);
        setImmediate(done);
        return () => {};
      };

      const files = [bucket.file('1'), bucket.file('2')].map(file => {
        file.delete = () => {
          return Promise.resolve();
        };
        return file;
      });

      const readable = new stream.Readable({
        objectMode: true,
        read() {
          if (readCount < 1) {
            this.push(files[readCount]);
            readCount++;
          } else {
            this.push(null);
          }
        },
      });

      bucket.getFilesStream = () => readable;
      bucket.deleteFiles({}, assert.ifError);
    });

    it('should delete the files', done => {
      const query = {};
      let timesCalled = 0;

      const files = [bucket.file('1'), bucket.file('2')].map(file => {
        file.delete = (query_: {}) => {
          timesCalled++;
          assert.strictEqual(query_, query);
          return Promise.resolve();
        };
        return file;
      });

      const readable = new stream.Readable({
        objectMode: true,
        read() {
          if (readCount < files.length) {
            this.push(files[readCount]);
            readCount++;
          } else {
            this.push(null);
          }
        },
      });

      bucket.getFilesStream = (query_: {}) => {
        assert.strictEqual(query_, query);
        return readable;
      };

      bucket.deleteFiles(query, (err: Error) => {
        assert.ifError(err);
        assert.strictEqual(timesCalled, files.length);
        done();
      });
    });

    it('should execute callback with error from getting files', done => {
      const error = new Error('Error.');
      const readable = new stream.Readable({
        objectMode: true,
        read() {
          this.destroy(error);
        },
      });

      bucket.getFilesStream = () => {
        return readable;
      };

      bucket.deleteFiles({}, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should execute callback with error from deleting file', done => {
      const error = new Error('Error.');

      const files = [bucket.file('1'), bucket.file('2')].map(file => {
        file.delete = () => Promise.reject(error);
        return file;
      });

      const readable = new stream.Readable({
        objectMode: true,
        read() {
          if (readCount < files.length) {
            this.push(files[readCount]);
            readCount++;
          } else {
            this.push(null);
          }
        },
      });

      bucket.getFilesStream = () => {
        return readable;
      };

      bucket.deleteFiles({}, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should execute callback with queued errors', done => {
      const error = new Error('Error.');

      const files = [bucket.file('1'), bucket.file('2')].map(file => {
        file.delete = () => Promise.reject(error);
        return file;
      });

      const readable = new stream.Readable({
        objectMode: true,
        read() {
          if (readCount < files.length) {
            this.push(files[readCount]);
            readCount++;
          } else {
            this.push(null);
          }
        },
      });

      bucket.getFilesStream = () => {
        return readable;
      };

      bucket.deleteFiles({force: true}, (errs: Array<{}>) => {
        assert.strictEqual(errs[0], error);
        assert.strictEqual(errs[1], error);
        done();
      });
    });
  }); */

  describe('deleteLabels', () => {
    describe('all labels', () => {
      it('should get all of the label names', done => {
        sandbox.stub(bucket, 'getLabels').callsFake(() => {
          done();
        });

        bucket.deleteLabels(assert.ifError);
      });

      it('should return an error from getLabels()', () => {
        const error = new GaxiosError('Error.', {});

        bucket.getLabels = sandbox.stub().rejects(error);

        bucket.deleteLabels(err => {
          assert.strictEqual(err, error);
        });
      });

      it('should call setLabels with all label names', done => {
        const labels = {
          labelone: 'labelonevalue',
          labeltwo: 'labeltwovalue',
        };

        bucket.getLabels = sandbox.stub().callsFake(callback => {
          callback(null, labels);
        });

        bucket.setLabels = sandbox.stub().callsFake((labels, callback) => {
          assert.deepStrictEqual(labels, {
            labelone: null,
            labeltwo: null,
          });
          callback();
        });

        bucket.deleteLabels(done);
      });
    });

    describe('single label', () => {
      const LABEL = 'labelname';

      it('should call setLabels with a single label', done => {
        bucket.setLabels = sandbox.stub().callsFake((labels, callback) => {
          assert.deepStrictEqual(labels, {
            [LABEL]: null,
          });
          callback();
        });

        bucket.deleteLabels(LABEL, done);
      });
    });

    describe('multiple labels', () => {
      const LABELS = ['labelonename', 'labeltwoname'];

      it('should call setLabels with multiple labels', done => {
        bucket.setLabels = sandbox.stub().callsFake((labels, callback) => {
          assert.deepStrictEqual(labels, {
            labelonename: null,
            labeltwoname: null,
          });
          callback();
        });

        bucket.deleteLabels(LABELS, done);
      });
    });
  });

  describe('disableRequesterPays', () => {
    it('should call setMetadata correctly', done => {
      bucket.setMetadata = sandbox
        .stub()
        .callsFake(
          (metadata: {}, _optionsOrCallback: {}, callback: Function) => {
            assert.deepStrictEqual(metadata, {
              billing: {
                requesterPays: false,
              },
            });
            Promise.resolve([])
              .then(resp => callback(null, ...resp))
              .catch(() => {});
          },
        );

      bucket.disableRequesterPays(done);
    });

    it('should not require a callback', () => {
      bucket.setMetadata = sandbox
        .stub()
        .callsFake(
          (metadata: {}, optionsOrCallback: {}, callback: Function) => {
            assert.equal(callback, undefined);
          },
        );

      void bucket.disableRequesterPays();
    });

    it('should set autoRetry to false when ifMetagenerationMatch is undefined', async done => {
      bucket.setMetadata = sandbox.stub().callsFake(() => {
        assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
        done();
        return Promise.resolve();
      });
      await bucket.disableRequesterPays();
    });
  });

  describe('enableLogging', () => {
    const PREFIX = 'prefix';

    beforeEach(() => {
      sandbox.stub(bucket.iam, 'getPolicy').resolves([{bindings: []}]);
      sandbox.stub(bucket.iam, 'setPolicy').resolves();
      sandbox.stub(bucket, 'setMetadata').resolves([]);
    });

    it('should throw if a config object is not provided', () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      assert.rejects(
        bucket.enableLogging(undefined as unknown as EnableLoggingOptions),
        (err: Error) => {
          assert.strictEqual(
            err.message,
            BucketExceptionMessages.CONFIGURATION_OBJECT_PREFIX_REQUIRED,
          );
        },
      );
    });

    it('should throw if config is a function', () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises, @typescript-eslint/no-explicit-any
      assert.rejects(bucket.enableLogging({} as any), (err: Error) => {
        assert.strictEqual(
          err.message,
          BucketExceptionMessages.CONFIGURATION_OBJECT_PREFIX_REQUIRED,
        );
      });
    });

    it('should throw if a prefix is not provided', () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      assert.rejects(
        bucket.enableLogging({
          bucket: 'bucket-name',
        } as unknown as EnableLoggingOptions),
        (err: Error) => {
          assert.strictEqual(
            err.message,
            BucketExceptionMessages.CONFIGURATION_OBJECT_PREFIX_REQUIRED,
          );
        },
      );
    });

    it('should add IAM permissions', () => {
      const policy = {
        bindings: [{}],
      };
      bucket.iam.setPolicy = sandbox.stub().callsFake(policy_ => {
        assert.deepStrictEqual(policy, policy_);
        assert.deepStrictEqual(policy_.bindings, [
          policy.bindings[0],
          {
            members: ['group:cloud-storage-analytics@google.com'],
            role: 'roles/storage.objectCreator',
          },
        ]);
        return Promise.resolve();
      });

      bucket.enableLogging({prefix: PREFIX}, assert.ifError);
    });

    it('should return an error from getting the IAM policy', done => {
      const error = new GaxiosError('Error.', {});

      bucket.iam.getPolicy = sandbox.stub().callsFake(() => {
        throw error;
      });

      bucket.enableLogging({prefix: PREFIX}, err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return an error from setting the IAM policy', done => {
      const error = new GaxiosError('Error.', {});

      bucket.iam.setPolicy = sandbox.stub().callsFake(() => {
        throw error;
      });

      bucket.enableLogging({prefix: PREFIX}, err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should update the logging metadata configuration', done => {
      bucket.setMetadata = sandbox.stub().callsFake(metadata => {
        assert.deepStrictEqual(metadata.logging, {
          logBucket: bucket.id,
          logObjectPrefix: PREFIX,
        });
        setImmediate(done);
        return Promise.resolve([]);
      });

      bucket.enableLogging({prefix: PREFIX}, assert.ifError);
    });

    it('should allow a custom bucket to be provided', done => {
      const bucketName = 'bucket-name';

      bucket.setMetadata = sandbox.stub().callsFake(metadata => {
        assert.deepStrictEqual(metadata!.logging!.logBucket, bucketName);
        setImmediate(done);
        return Promise.resolve([]);
      });

      bucket.enableLogging(
        {
          prefix: PREFIX,
          bucket: bucketName,
        },
        assert.ifError,
      );
    });

    it('should accept a Bucket object', done => {
      const bucketForLogging = new Bucket(STORAGE, 'bucket-name');

      bucket.setMetadata = sandbox.stub().callsFake(metadata => {
        assert.deepStrictEqual(
          metadata!.logging!.logBucket,
          bucketForLogging.id,
        );
        setImmediate(done);
        return Promise.resolve([]);
      });

      bucket.enableLogging(
        {
          prefix: PREFIX,
          bucket: bucketForLogging,
        },
        assert.ifError,
      );
    });

    it('should execute the callback with the setMetadata response', done => {
      const setMetadataResponse = {};

      bucket.setMetadata = sandbox
        .stub()
        .callsFake(
          (metadata: {}, optionsOrCallback: {}, callback: Function) => {
            Promise.resolve([setMetadataResponse])
              .then(resp => callback(null, ...resp))
              .catch(() => {});
          },
        );

      bucket.enableLogging({prefix: PREFIX}, (err, response) => {
        assert.ifError(err);
        assert.strictEqual(response, setMetadataResponse);
        done();
      });
    });

    it('should return an error from the setMetadata call failing', done => {
      const error = new GaxiosError('Error.', {});

      bucket.setMetadata = sandbox.stub().callsFake(() => {
        throw error;
      });

      bucket.enableLogging({prefix: PREFIX}, err => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('enableRequesterPays', () => {
    it('should call setMetadata correctly', done => {
      bucket.setMetadata = sandbox
        .stub()
        .callsFake(
          (metadata: {}, optionsOrCallback: {}, callback: Function) => {
            assert.deepStrictEqual(metadata, {
              billing: {
                requesterPays: true,
              },
            });
            Promise.resolve([])
              .then(resp => callback(null, ...resp))
              .catch(() => {});
          },
        );

      bucket.enableRequesterPays(done);
    });

    it('should not require a callback', () => {
      bucket.setMetadata = sandbox
        .stub()
        .callsFake(
          (metadata: {}, optionsOrCallback: {}, callback: Function) => {
            assert.equal(callback, undefined);
          },
        );

      void bucket.enableRequesterPays();
    });
  });

  describe('file', () => {
    const FILE_NAME = 'remote-file-name.jpg';
    let file: File;
    const options = {generation: 123};

    beforeEach(() => {
      file = bucket.file(FILE_NAME, options);
    });

    it('should throw if no name is provided', () => {
      assert.throws(
        () => {
          bucket.file('');
        },
        (err: Error) => {
          assert.strictEqual(
            err.message,
            BucketExceptionMessages.SPECIFY_FILE_NAME,
          );
          return true;
        },
      );
    });

    it('should return a File object', () => {
      assert(file instanceof File);
    });

    it('should pass bucket to File object', () => {
      assert.deepStrictEqual(file.bucket, bucket);
    });

    it('should pass filename to File object', () => {
      assert.strictEqual(file.name, FILE_NAME);
    });

    it('should pass configuration object to File', () => {
      assert.deepStrictEqual(file.generation, options.generation);
    });
  });

  describe('getFiles', () => {
    it('should get files without a query', () => {
      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.url, '/b/o');
          assert.deepStrictEqual(reqOpts.queryParameters, {});
        });

      bucket.getFiles(util.noop);
    });

    it('should get files with a query', done => {
      const token = 'next-page-token';
      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.deepStrictEqual(reqOpts.queryParameters, {
            maxResults: 5,
            pageToken: token,
            includeFoldersAsPrefixes: true,
            delimiter: '/',
            autoPaginate: false,
          });
          done();
        });
      bucket.getFiles(
        {
          maxResults: 5,
          pageToken: token,
          includeFoldersAsPrefixes: true,
          delimiter: '/',
          autoPaginate: false,
        },
        util.noop,
      );
    });

    it('should return nextQuery if more results exist', () => {
      const token = 'next-page-token';
      const nextQuery_ = {maxResults: 5, pageToken: token};

      bucket.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
        return Promise.resolve({
          nextPageToken: token,
          items: [],
        });
      });

      bucket.getFiles(
        {maxResults: 5, pageToken: token},
        (err, results, nextQuery) => {
          assert.ifError(err);
          assert.deepStrictEqual(nextQuery, nextQuery_);
        },
      );
    });

    it('should return null nextQuery if there are no more results', () => {
      bucket.storageTransport.makeRequest = sandbox.stub().callsFake(() => {
        return Promise.resolve({
          items: [],
        });
      });
      bucket.getFiles({maxResults: 5}, (err, results, nextQuery) => {
        assert.strictEqual(nextQuery, null);
      });
    });

    it('should return File objects', () => {
      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .resolves({items: [{name: 'fake-file-name', generation: 1}]});
      bucket.getFiles((err, files) => {
        assert.ifError(err);
        assert(files instanceof File);
        assert.strictEqual(typeof files[0].generation, 'undefined');
      });
    });

    it('should return versioned Files if queried for versions', () => {
      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .resolves({items: [{name: 'fake-file-name', generation: 1}]});

      bucket.getFiles({versions: true}, (err, files) => {
        assert.ifError(err);
        assert(files instanceof File);
        assert.strictEqual(files[0].generation, 1);
      });
    });

    it('should return Files with specified values if queried for fields', () => {
      bucket.storageTransport.makeRequest = sandbox.stub().resolves({
        items: [{name: 'fake-file-name'}],
      });

      bucket.getFiles({fields: 'items(name)'}, (err, files) => {
        assert.ifError(err);
        assert(files instanceof File);
        assert.strictEqual(files[0].name, 'fake-file-name');
      });
    });

    /* it('should add nextPageToken to fields for autoPaginate', done => {
      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function,
      ) => {
        assert.strictEqual(reqOpts.qs.fields, 'items(name),nextPageToken');
        callback(null, {
          items: [{name: 'fake-file-name'}],
          nextPageToken: 'fake-page-token',
        });
      };

      bucket.getFiles(
        {fields: 'items(name)', autoPaginate: true},
        (err: Error, files: FakeFile[], nextQuery: {pageToken: string}) => {
          assert.ifError(err);
          assert.strictEqual(files[0].name, 'fake-file-name');
          assert.strictEqual(nextQuery.pageToken, 'fake-page-token');
          done();
        },
      );
    }); */

    it('should return soft-deleted Files if queried for softDeleted', () => {
      const softDeletedTime = new Date('1/1/2024').toISOString();
      bucket.storageTransport.makeRequest = sandbox.stub().resolves({
        items: [{name: 'fake-file-name', generation: 1, softDeletedTime}],
      });

      bucket.getFiles({softDeleted: true}, (err, files) => {
        assert.ifError(err);
        assert(files instanceof File);
        assert.strictEqual(files[0].metadata.softDeletedTime, softDeletedTime);
      });
    });

    it('should set kmsKeyName on file', () => {
      const kmsKeyName = 'kms-key-name';

      bucket.storageTransport.makeRequest = sandbox.stub().resolves({
        items: [{name: 'fake-file-name', kmsKeyName}],
      });

      bucket.getFiles({versions: true}, (err, files) => {
        assert.ifError(err);
        assert(files instanceof File);
        assert.strictEqual(files[0].kmsKeyName, kmsKeyName);
      });
    });

    it('should return apiResponse in callback', () => {
      const resp = {items: [{name: 'fake-file-name'}]};
      bucket.storageTransport.makeRequest = sandbox.stub().resolves(resp);
      bucket.getFiles((err, files, nextQuery, apiResponse) => {
        assert.deepStrictEqual(resp, apiResponse);
      });
    });

    it('should execute callback with error & API response', () => {
      const error = new GaxiosError('Error.', {});
      const apiResponse = {};

      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .rejects({error, apiResponse});

      bucket.getFiles((err, files, nextQuery, apiResponse_) => {
        assert.strictEqual(err, error);
        assert.strictEqual(files, null);
        assert.strictEqual(nextQuery, null);
        assert.strictEqual(apiResponse_, apiResponse);
      });
    });

    it('should populate returned File object with metadata', () => {
      const fileMetadata = {
        name: 'filename',
        contentType: 'x-zebra',
        metadata: {
          my: 'custom metadata',
        },
      };
      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .resolves({items: [fileMetadata]});
      bucket.getFiles((err, files) => {
        assert.ifError(err);
        assert(files instanceof File);
        assert.deepStrictEqual(files[0].metadata, fileMetadata);
      });
    });
  });

  describe('getLabels', () => {
    it('should refresh metadata', done => {
      bucket.getMetadata = sandbox.stub().callsFake(() => {
        done();
      });

      bucket.getLabels(assert.ifError);
    });

    it('should accept an options object', done => {
      const options = {};

      bucket.getMetadata = sandbox.stub().callsFake((options_: {}) => {
        assert.strictEqual(options_, options);
        done();
      });

      bucket.getLabels(options, assert.ifError);
    });

    it('should return error from getMetadata', done => {
      const error = new GaxiosError('Error.', {});

      bucket.getMetadata = sandbox
        .stub()
        .callsFake((options: {}, callback: Function) => {
          callback(error);
        });

      bucket.getLabels(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return labels metadata property', done => {
      const metadata = {
        labels: {
          label: 'labelvalue',
        },
      };

      bucket.getMetadata = sandbox
        .stub()
        .callsFake((options: {}, callback: Function) => {
          callback(null, metadata);
        });

      bucket.getLabels((err, labels) => {
        assert.ifError(err);
        assert.strictEqual(labels, metadata.labels);
        done();
      });
    });

    it('should return empty object if no labels exist', done => {
      const metadata = {};

      bucket.getMetadata = sandbox
        .stub()
        .callsFake((options: {}, callback: Function) => {
          callback(null, metadata);
        });

      bucket.getLabels((err, labels) => {
        assert.ifError(err);
        assert.deepStrictEqual(labels, {});
        done();
      });
    });
  });

  describe('getNotifications', () => {
    it('should make the correct request', done => {
      const options = {};

      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.url, '/b/notificationConfigs');
          assert.strictEqual(reqOpts.queryParameters, options);
          done();
        });

      bucket.getNotifications(options, assert.ifError);
    });

    it('should optionally accept options', done => {
      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.deepStrictEqual(reqOpts.queryParameters, {});
          done();
        });

      bucket.getNotifications(assert.ifError);
    });

    it('should return any errors to the callback', () => {
      const error = new GaxiosError('err', {});
      const response = {};

      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .rejects({error, response});

      bucket.getNotifications((err, notifications, resp) => {
        assert.strictEqual(err, error);
        assert.strictEqual(notifications, null);
        assert.strictEqual(resp, response);
      });
    });

    it('should return a list of notification objects', done => {
      const fakeItems = [{id: '1'}, {id: '2'}, {id: '3'}];
      const response = {items: fakeItems};

      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(null, response);
          return Promise.resolve();
        });

      let callCount = 0;
      const fakeNotifications = [{}, {}, {}];

      bucket.notification = sandbox.stub().callsFake(id => {
        const expectedId = fakeItems[callCount].id;
        assert.strictEqual(id, expectedId);
        return fakeNotifications[callCount++];
      });

      bucket.getNotifications((err, notifications) => {
        assert.ifError(err);
        if (notifications) {
          notifications.forEach((notification, i) => {
            assert.strictEqual(notification, fakeNotifications[i]);
            assert.strictEqual(notification.metadata, fakeItems[i]);
          });
        }
        done();
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
    let SIGNED_URL_CONFIG: GetBucketSignedUrlConfig;

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
        action: 'list',
        cname: CNAME,
      };
    });

    afterEach(() => sandbox.restore());

    it('should construct a URLSigner and call getSignedUrl', done => {
      assert.strictEqual(bucket.signer, undefined);

      bucket.getSignedUrl(SIGNED_URL_CONFIG, (err, signedUrl) => {
        assert.ifError(err);
        assert.strictEqual(bucket.signer, signer);
        assert.strictEqual(signedUrl, EXPECTED_SIGNED_URL);

        const ctorArgs = urlSignerStub.getCall(0).args;
        assert.strictEqual(
          ctorArgs[0],
          bucket.storage.storageTransport.authClient,
        );
        assert.strictEqual(ctorArgs[0], bucket);

        const getSignedUrlArgs = signerGetSignedUrlStub.getCall(0).args;
        assert.deepStrictEqual(getSignedUrlArgs[0], {
          method: 'GET',
          version: 'v4',
          expires: SIGNED_URL_CONFIG.expires,
          extensionHeaders: {},
          host: undefined,
          queryParams: {},
          cname: CNAME,
          signingEndpoint: undefined,
        });
      });
      done();
    });
  });

  describe('lock', () => {
    it('should throw if a metageneration is not provided', () => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      assert.rejects(bucket.lock({} as unknown as string), (err: Error) => {
        assert.strictEqual(
          err.message,
          BucketExceptionMessages.METAGENERATION_NOT_PROVIDED,
        );
      });
    });

    it('should make the correct request', done => {
      const metageneration = 8;

      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          assert.deepStrictEqual(reqOpts, {
            method: 'POST',
            url: '/b/lockRetentionPolicy',
            queryParameters: {
              ifMetagenerationMatch: metageneration,
            },
          });
          callback(null, {});
          return Promise.resolve({});
        });

      bucket.lock(metageneration, done);
    });
  });

  describe('makePrivate', () => {
    it('should set predefinedAcl & privatize files', done => {
      let didSetPredefinedAcl = false;
      let didMakeFilesPrivate = false;
      const opts = {
        includeFiles: true,
        force: true,
      };

      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata: {}, options: {}, callback) => {
          assert.deepStrictEqual(metadata, {acl: null});
          assert.deepStrictEqual(options, {predefinedAcl: 'projectPrivate'});

          didSetPredefinedAcl = true;
          bucket.makeAllFilesPublicPrivate_(opts, callback);
        });

      bucket.makeAllFilesPublicPrivate_ = sandbox
        .stub()
        .callsFake((opts, callback) => {
          assert.strictEqual(opts.private, true);
          assert.strictEqual(opts.force, true);
          didMakeFilesPrivate = true;
          callback();
        });

      bucket.makePrivate(opts, err => {
        assert.ifError(err);
        assert(didSetPredefinedAcl);
        assert(didMakeFilesPrivate);
        done();
      });
    });

    it('should accept metadata', done => {
      const options = {
        metadata: {a: 'b', c: 'd'},
      };
      bucket.setMetadata = sandbox.stub().callsFake(metadata => {
        assert.deepStrictEqual(metadata, {
          acl: null,
          ...options.metadata,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert.strictEqual(typeof (options.metadata as any).acl, 'undefined');
        done();
      });
      bucket.makePrivate(options, assert.ifError);
    });

    it('should accept userProject', done => {
      const options = {
        userProject: 'user-project-id',
      };
      bucket.setMetadata = sandbox.stub().callsFake((metadata, options_) => {
        assert.strictEqual(options_.userProject, options.userProject);
        done();
      });
      bucket.makePrivate(options, done);
    });

    it('should not make files private by default', done => {
      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata: {}, options: {}, callback) => {
          callback();
        });

      bucket.makeAllFilesPublicPrivate_ = () => {
        throw new Error('Please, no. I do not want to be called.');
      };

      bucket.makePrivate(done);
    });

    it('should execute callback with error', done => {
      const error = new GaxiosError('Error.', {});

      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata: {}, options: {}, callback) => {
          callback(error);
        });

      bucket.makePrivate(err => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('makePublic', () => {
    it('should set ACL, default ACL, and publicize files', done => {
      let didSetAcl = false;
      let didSetDefaultAcl = false;
      let didMakeFilesPublic = false;

      bucket.acl.add = sandbox.stub().callsFake(opts => {
        assert.strictEqual(opts.entity, 'allUsers');
        assert.strictEqual(opts.role, 'READER');
        didSetAcl = true;
        return Promise.resolve();
      });

      bucket.acl.default.add = sandbox.stub().callsFake(opts => {
        assert.strictEqual(opts.entity, 'allUsers');
        assert.strictEqual(opts.role, 'READER');
        didSetDefaultAcl = true;
        return Promise.resolve();
      });

      bucket.makeAllFilesPublicPrivate_ = sandbox
        .stub()
        .callsFake((opts, callback) => {
          assert.strictEqual(opts.public, true);
          assert.strictEqual(opts.force, true);
          didMakeFilesPublic = true;
          callback();
        });

      bucket.makePublic(
        {
          includeFiles: true,
          force: true,
        },
        err => {
          assert.ifError(err);
          assert(didSetAcl);
          assert(didSetDefaultAcl);
          assert(didMakeFilesPublic);
          done();
        },
      );
    });

    it('should not make files public by default', done => {
      bucket.acl.add = sandbox.stub().callsFake(() => Promise.resolve());
      bucket.acl.default.add = sandbox
        .stub()
        .callsFake(() => Promise.resolve());
      bucket.makeAllFilesPublicPrivate_ = () => {
        throw new Error('Please, no. I do not want to be called.');
      };
      bucket.makePublic(done);
    });

    it('should execute callback with error', done => {
      const error = new GaxiosError('Error.', {});
      bucket.acl.add = sandbox.stub().callsFake(() => Promise.reject(error));
      bucket.makePublic(err => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('notification', () => {
    it('should throw an error if an id is not provided', () => {
      assert.throws(
        () => {
          bucket.notification(undefined as unknown as string);
        },
        (err: Error) => {
          assert.strictEqual(
            err.message,
            BucketExceptionMessages.SUPPLY_NOTIFICATION_ID,
          );
          return true;
        },
      );
    });

    it('should return a Notification object', () => {
      const fakeId = '123';
      const notification = bucket.notification(fakeId);

      assert(notification instanceof Notification);
      assert.strictEqual(notification.id, fakeId);
    });
  });

  describe('removeRetentionPeriod', () => {
    it('should call setMetadata correctly', done => {
      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata, _optionsOrCallback, callback) => {
          assert.deepStrictEqual(metadata, {
            retentionPolicy: null,
          });

          Promise.resolve([])
            .then(resp => callback(null, ...resp))
            .catch(() => {});
        });

      bucket.removeRetentionPeriod(done);
    });
  });

  describe('restore', () => {
    it('should pass options to underlying request call', async () => {
      bucket.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.deepStrictEqual(reqOpts, {
            method: 'POST',
            url: '/b/restore',
            queryParameters: {generation: '123456789'},
          });
          return [];
        });

      await bucket.restore({generation: '123456789'});
    });
  });

  /* describe('request', () => {
    const USER_PROJECT = 'grape-spaceship-123';

    beforeEach(() => {
      bucket.userProject = USER_PROJECT;
    });

    it('should set the userProject if qs is undefined', done => {
      FakeServiceObject.prototype.request = ((
        reqOpts: DecorateRequestOptions,
      ) => {
        assert.strictEqual(reqOpts.qs.userProject, USER_PROJECT);
        done();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any;

      bucket.request({}, assert.ifError);
    });

    it('should set the userProject if field is undefined', done => {
      const options = {
        qs: {
          foo: 'bar',
        },
      };

      FakeServiceObject.prototype.request = ((
        reqOpts: DecorateRequestOptions,
      ) => {
        assert.strictEqual(reqOpts.qs.userProject, USER_PROJECT);
        assert.strictEqual(reqOpts.qs, options.qs);
        done();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any;

      bucket.request(options, assert.ifError);
    });

    it('should not overwrite the userProject', done => {
      const fakeUserProject = 'not-grape-spaceship-123';
      const options = {
        qs: {
          userProject: fakeUserProject,
        },
      };

      FakeServiceObject.prototype.request = ((
        reqOpts: DecorateRequestOptions,
      ) => {
        assert.strictEqual(reqOpts.qs.userProject, fakeUserProject);
        done();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any;

      bucket.request(options, assert.ifError);
    });

    it('should call ServiceObject#request correctly', done => {
      const options = {};

      Object.assign(FakeServiceObject.prototype, {
        request(reqOpts: DecorateRequestOptions, callback: Function) {
          assert.strictEqual(this, bucket);
          assert.strictEqual(reqOpts, options);
          callback(); // done fn
        },
      });

      bucket.request(options, done);
    });
  }); */

  describe('setLabels', () => {
    it('should correctly call setMetadata', done => {
      const labels = {};
      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata, _callbackOrOptions, callback) => {
          assert.strictEqual(metadata.labels, labels);
          Promise.resolve([])
            .then(resp => callback(null, ...resp))
            .catch(() => {});
        });
      bucket.setLabels(labels, done);
    });

    it('should accept an options object', done => {
      const labels = {};
      const options = {};
      bucket.setMetadata = sandbox.stub().callsFake((metadata, options_) => {
        assert.strictEqual(options_, options);
        done();
      });
      bucket.setLabels(labels, options, done);
    });
  });

  describe('setRetentionPeriod', () => {
    it('should call setMetadata correctly', done => {
      const duration = 90000;

      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata, _callbackOrOptions, callback) => {
          assert.deepStrictEqual(metadata, {
            retentionPolicy: {
              retentionPeriod: `${duration}`,
            },
          });

          Promise.resolve([])
            .then(resp => callback(null, ...resp))
            .catch(() => {});
        });

      bucket.setRetentionPeriod(duration, done);
    });
  });

  describe('setCorsConfiguration', () => {
    it('should call setMetadata correctly', done => {
      const corsConfiguration = [{maxAgeSeconds: 3600}];

      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata, _callbackOrOptions, callback) => {
          assert.deepStrictEqual(metadata, {
            cors: corsConfiguration,
          });

          return Promise.resolve([]).then(resp => callback(null, ...resp));
        });

      bucket.setCorsConfiguration(corsConfiguration, done);
    });
  });

  describe('setStorageClass', () => {
    const STORAGE_CLASS = 'NEW_STORAGE_CLASS';
    const OPTIONS = {};
    const CALLBACK = util.noop;

    it('should convert camelCase to snake_case', done => {
      bucket.setMetadata = sandbox.stub().callsFake(metadata => {
        assert.strictEqual(metadata.storageClass, 'CAMEL_CASE');
        done();
      });

      bucket.setStorageClass('camelCase', OPTIONS, CALLBACK);
    });

    it('should convert hyphenate to snake_case', done => {
      bucket.setMetadata = sandbox.stub().callsFake(metadata => {
        assert.strictEqual(metadata.storageClass, 'HYPHENATED_CLASS');
        done();
      });

      bucket.setStorageClass('hyphenated-class', OPTIONS, CALLBACK);
    });

    it('should call setMetdata correctly', () => {
      bucket.setMetadata = sandbox
        .stub()
        .callsFake((metadata, options, callback) => {
          assert.deepStrictEqual(metadata, {storageClass: STORAGE_CLASS});
          assert.strictEqual(options, OPTIONS);
          Promise.resolve([])
            .then(resp => callback(null, ...resp))
            .catch(() => {});
        });

      bucket.setStorageClass(STORAGE_CLASS, OPTIONS, CALLBACK);
    });
  });

  describe('setUserProject', () => {
    const USER_PROJECT = 'grape-spaceship-123';

    it('should set the userProject property', () => {
      bucket.setUserProject(USER_PROJECT);
      assert.strictEqual(bucket.userProject, USER_PROJECT);
    });
  });

  describe('upload', () => {
    const basename = 'testfile.json';
    const filepath = path.join(
      getDirName(),
      '../../../test/testdata/' + basename,
    );
    const nonExistentFilePath = path.join(
      getDirName(),
      '../../../test/testdata/',
      'non-existent-file',
    );
    const metadata = {
      metadata: {
        a: 'b',
        c: 'd',
      },
    };

    beforeEach(() => {
      sandbox.stub(bucket, 'file').returns(new File(bucket, basename));
    });

    it('should return early in snippet sandbox', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (global as any)['GCLOUD_SANDBOX_ENV'] = true;
      const returnValue = bucket.upload(filepath, assert.ifError);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (global as any)['GCLOUD_SANDBOX_ENV'];
      assert.strictEqual(returnValue, undefined);
    });

    it('should accept a path & cb', () => {
      bucket.upload(filepath, (err, file) => {
        assert.ifError(err);
        assert.strictEqual(file?.bucket.name, bucket.name);
        assert.strictEqual(file.name, basename);
      });
    });

    it('should accept a path, metadata, & cb', async () => {
      const options = {
        metadata,
        encryptionKey: 'key',
        kmsKeyName: 'kms-key-name',
      };
      await bucket.upload(filepath, options, (err, file) => {
        assert.ifError(err);
        assert.strictEqual(file?.bucket.name, bucket.name);
        assert.deepStrictEqual(file.metadata, metadata);
        assert.strictEqual(file.kmsKeyName, options.kmsKeyName);
      });
    });

    it('should accept a path, a string dest, & cb', async () => {
      const newFileName = 'new-file-name.png';
      const options = {
        destination: newFileName,
        encryptionKey: 'key',
        kmsKeyName: 'kms-key-name',
      };
      await bucket.upload(filepath, options, (err, file) => {
        assert.ifError(err);
        assert.strictEqual(file?.bucket.name, bucket.name);
        assert.strictEqual(file.name, newFileName);
        assert.strictEqual(file.kmsKeyName, options.kmsKeyName);
      });
    });

    it('should accept a path, a string dest, metadata, & cb', async () => {
      const newFileName = 'new-file-name.png';
      const options = {
        destination: newFileName,
        metadata,
        encryptionKey: 'key',
        kmsKeyName: 'kms-key-name',
      };
      await bucket.upload(filepath, options, (err, file) => {
        assert.ifError(err);
        assert.strictEqual(file?.bucket.name, bucket.name);
        assert.strictEqual(file.name, newFileName);
        assert.deepStrictEqual(file.metadata, metadata);
        assert.strictEqual(file.kmsKeyName, options.kmsKeyName);
      });
    });

    it('should accept a path, a File dest, & cb', async () => {
      const fakeFile = new File(bucket, 'file-name');
      const options = {destination: fakeFile};
      await bucket.upload(filepath, options, (err, file) => {
        assert.ifError(err);
        assert.strictEqual(file, fakeFile);
      });
    });

    it('should accept a path, a File dest, metadata, & cb', async () => {
      const fakeFile = new File(bucket, 'file-name');
      const options = {destination: fakeFile, metadata};
      await bucket.upload(filepath, options, (err, file) => {
        assert.ifError(err);
        assert.deepStrictEqual(file?.metadata, metadata);
      });
    });

    describe('resumable uploads', () => {
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

      beforeEach(() => {
        sandbox.stub().callsFake((path, callback) => {
          callback(null, {size: 1});
        });
      });

      it('should respect setting a resumable upload to false', done => {
        const fakeFile = new File(bucket, 'file-name');
        const options = {destination: fakeFile, resumable: false};
        fakeFile.createWriteStream = (options_: CreateWriteStreamOptions) => {
          const ws = new stream.Writable();
          ws.write = () => true;
          setImmediate(() => {
            assert.strictEqual(options_.resumable, options.resumable);
            done();
          });
          return ws;
        };
        bucket.upload(filepath, options, assert.ifError);
      });

      it('should not retry a nonretryable error code', done => {
        const fakeFile = new File(bucket, 'file-name');
        const options = {destination: fakeFile, resumable: true};
        let retryCount = 0;
        fakeFile.createWriteStream = (options_: CreateWriteStreamOptions) => {
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
          setImmediate(() => {
            assert.strictEqual(options_.resumable, true);
            retryCount++;
            done();
          });
          return new DelayedStream403Error();
        };

        bucket.upload(filepath, options, err => {
          assert.strictEqual(err?.message, 'first error');
          assert.ok(retryCount === 2);
          done();
        });
      });

      it('resumable upload should retry', done => {
        const fakeFile = new File(bucket, 'file-name');
        const options = {destination: fakeFile, resumable: true};
        let retryCount = 0;
        fakeFile.createWriteStream = (options_: CreateWriteStreamOptions) => {
          setImmediate(() => {
            assert.strictEqual(options_.resumable, true);
            retryCount++;
            done();
          });
          return new DelayedStream500Error(retryCount);
        };
        bucket.upload(filepath, options, err => {
          assert.strictEqual(err?.message, 'first error');
          assert.ok(retryCount === 1);
          done();
        });
      });
    });

    describe('multipart uploads', () => {
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

      beforeEach(() => {
        sandbox.stub().callsFake((path, callback) => {
          callback(null, {size: 1});
        });
      });

      it('should save with no errors', done => {
        const fakeFile = new File(bucket, 'file-name');
        const options = {destination: fakeFile, resumable: false};
        fakeFile.createWriteStream = (options_: CreateWriteStreamOptions) => {
          class DelayedStreamNoError extends Transform {
            _transform(
              chunk: string | Buffer,
              _encoding: string,
              done: Function,
            ) {
              this.push(chunk);
              setTimeout(() => {
                done();
              }, 5);
            }
          }
          assert.strictEqual(options_.resumable, false);
          return new DelayedStreamNoError();
        };
        bucket.upload(filepath, options, err => {
          assert.ifError(err);
          done();
        });
      });

      it('should retry on first failure', done => {
        const fakeFile = new File(bucket, 'file-name');
        const options = {destination: fakeFile, resumable: false};
        let retryCount = 0;
        fakeFile.createWriteStream = (options_: CreateWriteStreamOptions) => {
          setImmediate(() => {
            assert.strictEqual(options_.resumable, false);
            retryCount++;
            done();
          });
          return new DelayedStream500Error(retryCount);
        };
        bucket.upload(filepath, options, (err, file) => {
          assert.ifError(err);
          assert.deepStrictEqual(file?.metadata, metadata);
          assert.ok(retryCount === 2);
          done();
        });
      });

      it('should not retry if nonretryable error code', done => {
        const fakeFile = new File(bucket, 'file-name');
        const options = {destination: fakeFile, resumable: false};
        let retryCount = 0;
        fakeFile.createWriteStream = (options_: CreateWriteStreamOptions) => {
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
          setImmediate(() => {
            assert.strictEqual(options_.resumable, false);
            retryCount++;
            done();
          });
          return new DelayedStream403Error();
        };

        bucket.upload(filepath, options, err => {
          assert.strictEqual(err?.message, 'first error');
          assert.ok(retryCount === 2);
          done();
        });
      });

      it('non-multipart upload should not retry', done => {
        const fakeFile = new File(bucket, 'file-name');
        const options = {destination: fakeFile, resumable: true};
        let retryCount = 0;
        fakeFile.createWriteStream = (options_: CreateWriteStreamOptions) => {
          setImmediate(() => {
            assert.strictEqual(options_.resumable, true);
            retryCount++;
            done();
          });
          return new DelayedStream500Error(retryCount);
        };
        bucket.upload(filepath, options, err => {
          assert.strictEqual(err?.message, 'first error');
          assert.ok(retryCount === 1);
          done();
        });
      });
    });

    it('should allow overriding content type', done => {
      const fakeFile = new File(bucket, 'file-name');
      const metadata = {contentType: 'made-up-content-type'};
      const options = {destination: fakeFile, metadata};
      fakeFile.createWriteStream = (options: CreateWriteStreamOptions) => {
        const ws = new stream.Writable();
        ws.write = () => true;
        setImmediate(() => {
          assert.strictEqual(
            options!.metadata!.contentType,
            metadata.contentType,
          );
          done();
        });
        return ws;
      };
      bucket.upload(filepath, options, assert.ifError);
    });

    it('should execute callback on error', done => {
      const error = new GaxiosError('Error.', {});
      const fakeFile = new File(bucket, 'file-name');
      const options = {destination: fakeFile};
      fakeFile.createWriteStream = () => {
        const ws = new stream.PassThrough();
        setImmediate(() => {
          ws.destroy(error);
        });
        return ws;
      };
      bucket.upload(filepath, options, err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return file and metadata', done => {
      const fakeFile = new File(bucket, 'file-name');
      const options = {destination: fakeFile};
      const metadata = {};

      fakeFile.createWriteStream = () => {
        const ws = new stream.PassThrough();
        setImmediate(() => {
          fakeFile.metadata = metadata;
          ws.end();
        });
        return ws;
      };

      bucket.upload(filepath, options, (err, file, apiResponse) => {
        assert.ifError(err);
        assert.strictEqual(file, fakeFile);
        assert.strictEqual(apiResponse, metadata);
        done();
      });
    });

    it('should capture and throw on non-existent files', done => {
      bucket.upload(nonExistentFilePath, err => {
        assert(err);
        assert(err.message.includes('ENOENT'));
        done();
      });
    });
  });

  describe('makeAllFilesPublicPrivate_', () => {
    it('should get all files from the bucket', done => {
      const options = {};
      bucket.getFiles = sandbox.stub().callsFake(options_ => {
        assert.strictEqual(options_, options);
        return Promise.resolve([[]]);
      });
      bucket.makeAllFilesPublicPrivate_(options, done);
    });

    it('should process 10 files at a time', done => {
      sandbox.stub().callsFake(limit => {
        assert.strictEqual(limit, 10);
        setImmediate(done);
        return () => {};
      });

      bucket.getFiles = sandbox.stub().callsFake(() => Promise.resolve([[]]));
      bucket.makeAllFilesPublicPrivate_({}, done);
    });

    it('should make files public', done => {
      let timesCalled = 0;
      const files = [bucket.file('1'), bucket.file('2')].map(file => {
        file.makePublic = sandbox.stub().callsFake(() => {
          timesCalled++;
          return Promise.resolve();
        });
        return file;
      });
      bucket.getFiles = sandbox
        .stub()
        .callsFake(() => Promise.resolve([files]));
      bucket.makeAllFilesPublicPrivate_({public: true}, err => {
        assert.ifError(err);
        assert.strictEqual(timesCalled, files.length);
        done();
      });
    });

    it('should make files private', done => {
      const options = {
        private: true,
      };
      let timesCalled = 0;

      const files = [bucket.file('1'), bucket.file('2')].map(file => {
        file.makePrivate = sandbox.stub().callsFake(() => {
          timesCalled++;
          return Promise.resolve();
        });
        return file;
      });

      bucket.getFiles = sandbox
        .stub()
        .callsFake(() => Promise.resolve([files]));
      bucket.makeAllFilesPublicPrivate_(options, err => {
        assert.ifError(err);
        assert.strictEqual(timesCalled, files.length);
        done();
      });
    });

    it('should execute callback with error from getting files', done => {
      const error = new GaxiosError('Error.', {});
      bucket.getFiles = sandbox.stub().callsFake(() => Promise.reject(error));
      bucket.makeAllFilesPublicPrivate_({}, err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should execute callback with error from changing file', done => {
      const error = new Error('Error.');
      const files = [bucket.file('1'), bucket.file('2')].map(file => {
        file.makePublic = sandbox.stub().callsFake(() => Promise.reject(error));
        return file;
      });
      bucket.getFiles = sandbox
        .stub()
        .callsFake(() => Promise.resolve([files]));
      bucket.makeAllFilesPublicPrivate_({public: true}, err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should execute callback with queued errors', done => {
      const error = new Error('Error.');
      const files = [bucket.file('1'), bucket.file('2')].map(file => {
        file.makePublic = sandbox.stub().callsFake(() => Promise.reject(error));
        return file;
      });
      bucket.getFiles = sandbox
        .stub()
        .callsFake(() => Promise.resolve([files]));
      bucket.makeAllFilesPublicPrivate_(
        {
          public: true,
          force: true,
        },
        errs => {
          assert.deepStrictEqual(errs, [error, error]);
          done();
        },
      );
    });

    it('should execute callback with files changed', done => {
      const error = new Error('Error.');
      const successFiles = [bucket.file('1'), bucket.file('2')].map(file => {
        file.makePublic = sandbox.stub().callsFake(() => Promise.resolve());
        return file;
      });
      const errorFiles = [bucket.file('3'), bucket.file('4')].map(file => {
        file.makePublic = sandbox.stub().callsFake(() => Promise.reject(error));
        return file;
      });

      bucket.getFiles = sandbox.stub().callsFake(() => {
        const files = successFiles.concat(errorFiles);
        return Promise.resolve([files]);
      });

      bucket.makeAllFilesPublicPrivate_(
        {
          public: true,
          force: true,
        },
        (errs, files) => {
          assert.deepStrictEqual(errs, [error, error]);
          assert.deepStrictEqual(files, successFiles);
          done();
        },
      );
    });
  });

  describe('disableAutoRetryConditionallyIdempotent_', () => {
    beforeEach(() => {
      bucket.storage.retryOptions.autoRetry = true;
      STORAGE.retryOptions.idempotencyStrategy =
        IdempotencyStrategy.RetryConditional;
    });

    it('should set autoRetry to false when IdempotencyStrategy is set to RetryNever', done => {
      STORAGE.retryOptions.idempotencyStrategy = IdempotencyStrategy.RetryNever;
      bucket = new Bucket(STORAGE, BUCKET_NAME, {
        preconditionOpts: {
          ifMetagenerationMatch: 100,
        },
      });
      bucket.disableAutoRetryConditionallyIdempotent_(
        bucket.delete,
        AvailableServiceObjectMethods.delete,
      );
      assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
      done();
    });

    it('autoRetry should remain true when ifMetagenerationMatch is not undefined', done => {
      bucket = new Bucket(STORAGE, BUCKET_NAME, {
        preconditionOpts: {
          ifMetagenerationMatch: 100,
        },
      });
      bucket.disableAutoRetryConditionallyIdempotent_(
        bucket.delete,
        AvailableServiceObjectMethods.delete,
      );
      assert.strictEqual(bucket.storage.retryOptions.autoRetry, true);
      done();
    });
  });
});
