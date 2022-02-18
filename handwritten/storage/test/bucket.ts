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
  DecorateRequestOptions,
  Metadata,
  ServiceObject,
  ServiceObjectConfig,
  util,
} from '@google-cloud/common';
import arrify = require('arrify');
import * as assert from 'assert';
import * as extend from 'extend';
import * as fs from 'fs';
import {describe, it, before, beforeEach, after, afterEach} from 'mocha';
import * as mime from 'mime-types';
import pLimit = require('p-limit');
import * as path from 'path';
import * as proxyquire from 'proxyquire';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const snakeize = require('snakeize');
import * as stream from 'stream';
import {Bucket, Channel, Notification} from '../src';
import {
  CreateWriteStreamOptions,
  File,
  SetFileMetadataOptions,
  FileOptions,
} from '../src/file';
import {PromisifyAllOptions} from '@google-cloud/promisify';
import {
  GetBucketMetadataCallback,
  GetFilesOptions,
  MakeAllFilesPublicPrivateOptions,
  SetBucketMetadataCallback,
  SetBucketMetadataResponse,
  GetBucketSignedUrlConfig,
  AvailableServiceObjectMethods,
  BucketExceptionMessages,
} from '../src/bucket';
import {AddAclOptions} from '../src/acl';
import {Policy} from '../src/iam';
import sinon = require('sinon');
import {Transform} from 'stream';
import {ExceptionMessages, IdempotencyStrategy} from '../src/storage';

class FakeFile {
  calledWith_: IArguments;
  bucket: Bucket;
  name: string;
  options: FileOptions;
  metadata: {};
  createWriteStream: Function;
  isSameFile = () => false;
  constructor(bucket: Bucket, name: string, options?: FileOptions) {
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
    this.bucket = bucket;
    this.name = name;
    this.options = options || {};
    this.metadata = {};

    this.createWriteStream = (options: CreateWriteStreamOptions) => {
      this.metadata = options.metadata;
      const ws = new stream.Writable();
      ws.write = () => {
        ws.emit('complete');
        ws.end();
        return true;
      };
      return ws;
    };
  }
}

class FakeNotification {
  bucket: Bucket;
  id: string;
  constructor(bucket: Bucket, id: string) {
    this.bucket = bucket;
    this.id = id;
  }
}

let fsStatOverride: Function | null;
const fakeFs = extend(true, {}, fs, {
  stat: (filePath: string, callback: Function) => {
    return (fsStatOverride || fs.stat)(filePath, callback);
  },
});

let pLimitOverride: Function | null;
const fakePLimit = (limit: number) => (pLimitOverride || pLimit)(limit);

let promisified = false;
const fakePromisify = {
  // tslint:disable-next-line:variable-name
  promisifyAll(Class: Function, options: PromisifyAllOptions) {
    if (Class.name !== 'Bucket') {
      return;
    }

    promisified = true;
    assert.deepStrictEqual(options.exclude, [
      'request',
      'file',
      'notification',
    ]);
  },
};

const fakeUtil = Object.assign({}, util);
fakeUtil.noop = util.noop;

let extended = false;
const fakePaginator = {
  paginator: {
    // tslint:disable-next-line:variable-name
    extend(Class: Function, methods: string[]) {
      if (Class.name !== 'Bucket') {
        return;
      }

      methods = arrify(methods);
      assert.strictEqual(Class.name, 'Bucket');
      assert.deepStrictEqual(methods, ['getFiles']);
      extended = true;
    },
    streamify(methodName: string) {
      return methodName;
    },
  },
};

class FakeAcl {
  calledWith_: Array<{}>;
  constructor(...args: Array<{}>) {
    this.calledWith_ = args;
  }
}

class FakeIam {
  calledWith_: Array<{}>;
  constructor(...args: Array<{}>) {
    this.calledWith_ = args;
  }
}

class FakeServiceObject extends ServiceObject {
  calledWith_: IArguments;
  constructor(config: ServiceObjectConfig) {
    super(config);
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
  }
}

const fakeSigner = {
  URLSigner: () => {},
};

class HTTPError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

describe('Bucket', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Bucket: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let bucket: any;

  const STORAGE = {
    createBucket: util.noop,
    retryOptions: {
      autoRetry: true,
      maxRetries: 3,
      retryDelayMultipier: 2,
      totalTimeout: 600,
      maxRetryDelay: 60,
      retryableErrorFn: (err: HTTPError) => {
        return err.code === 500;
      },
      idempotencyStrategy: IdempotencyStrategy.RetryConditional,
    },
  };
  const BUCKET_NAME = 'test-bucket';

  before(() => {
    Bucket = proxyquire('../src/bucket.js', {
      fs: fakeFs,
      'p-limit': fakePLimit,
      '@google-cloud/promisify': fakePromisify,
      '@google-cloud/paginator': fakePaginator,
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
      './acl.js': {Acl: FakeAcl},
      './file.js': {File: FakeFile},
      './iam.js': {Iam: FakeIam},
      './notification.js': {Notification: FakeNotification},
      './signer.js': fakeSigner,
    }).Bucket;
  });

  beforeEach(() => {
    fsStatOverride = null;
    pLimitOverride = null;
    bucket = new Bucket(STORAGE, BUCKET_NAME);
  });

  describe('instantiation', () => {
    it('should extend the correct methods', () => {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', () => {
      assert.strictEqual(bucket.getFilesStream, 'getFiles');
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });

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

    describe('ACL objects', () => {
      let _request: Function;

      before(() => {
        _request = Bucket.prototype.request;
      });

      beforeEach(() => {
        Bucket.prototype.request = {
          bind(ctx: {}) {
            return ctx;
          },
        };

        bucket = new Bucket(STORAGE, BUCKET_NAME);
      });

      after(() => {
        Bucket.prototype.request = _request;
      });

      it('should create an ACL object', () => {
        assert.deepStrictEqual(bucket.acl.calledWith_[0], {
          request: bucket,
          pathPrefix: '/acl',
        });
      });

      it('should create a default ACL object', () => {
        assert.deepStrictEqual(bucket.acl.default.calledWith_[0], {
          request: bucket,
          pathPrefix: '/defaultObjectAcl',
        });
      });
    });

    it('should inherit from ServiceObject', done => {
      const storageInstance = Object.assign({}, STORAGE, {
        createBucket: {
          bind(context: {}) {
            assert.strictEqual(context, storageInstance);
            done();
          },
        },
      });

      const bucket = new Bucket(storageInstance, BUCKET_NAME);
      // Using assert.strictEqual instead of assert to prevent
      // coercing of types.
      assert.strictEqual(bucket instanceof ServiceObject, true);

      const calledWith = bucket.calledWith_[0];

      assert.strictEqual(calledWith.parent, storageInstance);
      assert.strictEqual(calledWith.baseUrl, '/b');
      assert.strictEqual(calledWith.id, BUCKET_NAME);
      assert.deepStrictEqual(calledWith.methods, {
        create: {reqOpts: {qs: {}}},
        delete: {reqOpts: {qs: {}}},
        exists: {reqOpts: {qs: {}}},
        get: {reqOpts: {qs: {}}},
        getMetadata: {reqOpts: {qs: {}}},
        setMetadata: {reqOpts: {qs: {}}},
      });
    });

    it('should set the correct query string with a userProject', () => {
      const options = {userProject: 'user-project'};
      const bucket = new Bucket(STORAGE, BUCKET_NAME, options);
      const calledWith = bucket.calledWith_[0];

      assert.deepStrictEqual(calledWith.methods, {
        create: {reqOpts: {qs: options}},
        delete: {reqOpts: {qs: options}},
        exists: {reqOpts: {qs: options}},
        get: {reqOpts: {qs: options}},
        getMetadata: {reqOpts: {qs: options}},
        setMetadata: {reqOpts: {qs: options}},
      });
    });

    it('should set the correct query string with ifGenerationMatch', () => {
      const options = {preconditionOpts: {ifGenerationMatch: 100}};
      const bucket = new Bucket(STORAGE, BUCKET_NAME, options);

      const calledWith = bucket.calledWith_[0];

      assert.deepStrictEqual(calledWith.methods, {
        create: {reqOpts: {qs: options.preconditionOpts}},
        delete: {reqOpts: {qs: options.preconditionOpts}},
        exists: {reqOpts: {qs: options.preconditionOpts}},
        get: {reqOpts: {qs: options.preconditionOpts}},
        getMetadata: {reqOpts: {qs: options.preconditionOpts}},
        setMetadata: {reqOpts: {qs: options.preconditionOpts}},
      });
      assert.deepStrictEqual(
        bucket.instancePreconditionOpts,
        options.preconditionOpts
      );
    });

    it('should set the correct query string with ifGenerationNotMatch', () => {
      const options = {preconditionOpts: {ifGenerationNotMatch: 100}};
      const bucket = new Bucket(STORAGE, BUCKET_NAME, options);

      const calledWith = bucket.calledWith_[0];

      assert.deepStrictEqual(calledWith.methods, {
        create: {reqOpts: {qs: options.preconditionOpts}},
        delete: {reqOpts: {qs: options.preconditionOpts}},
        exists: {reqOpts: {qs: options.preconditionOpts}},
        get: {reqOpts: {qs: options.preconditionOpts}},
        getMetadata: {reqOpts: {qs: options.preconditionOpts}},
        setMetadata: {reqOpts: {qs: options.preconditionOpts}},
      });
      assert.deepStrictEqual(
        bucket.instancePreconditionOpts,
        options.preconditionOpts
      );
    });

    it('should set the correct query string with ifMetagenerationMatch', () => {
      const options = {preconditionOpts: {ifMetagenerationMatch: 100}};
      const bucket = new Bucket(STORAGE, BUCKET_NAME, options);

      const calledWith = bucket.calledWith_[0];

      assert.deepStrictEqual(calledWith.methods, {
        create: {reqOpts: {qs: options.preconditionOpts}},
        delete: {reqOpts: {qs: options.preconditionOpts}},
        exists: {reqOpts: {qs: options.preconditionOpts}},
        get: {reqOpts: {qs: options.preconditionOpts}},
        getMetadata: {reqOpts: {qs: options.preconditionOpts}},
        setMetadata: {reqOpts: {qs: options.preconditionOpts}},
      });
      assert.deepStrictEqual(
        bucket.instancePreconditionOpts,
        options.preconditionOpts
      );
    });

    it('should set the correct query string with ifMetagenerationNotMatch', () => {
      const options = {preconditionOpts: {ifMetagenerationNotMatch: 100}};
      const bucket = new Bucket(STORAGE, BUCKET_NAME, options);

      const calledWith = bucket.calledWith_[0];

      assert.deepStrictEqual(calledWith.methods, {
        create: {reqOpts: {qs: options.preconditionOpts}},
        delete: {reqOpts: {qs: options.preconditionOpts}},
        exists: {reqOpts: {qs: options.preconditionOpts}},
        get: {reqOpts: {qs: options.preconditionOpts}},
        getMetadata: {reqOpts: {qs: options.preconditionOpts}},
        setMetadata: {reqOpts: {qs: options.preconditionOpts}},
      });
      assert.deepStrictEqual(
        bucket.instancePreconditionOpts,
        options.preconditionOpts
      );
    });

    it('should localize an Iam instance', () => {
      assert(bucket.iam instanceof FakeIam);
      assert.deepStrictEqual(bucket.iam.calledWith_[0], bucket);
    });

    it('should localize userProject if provided', () => {
      const fakeUserProject = 'grape-spaceship-123';
      const bucket = new Bucket(STORAGE, BUCKET_NAME, {
        userProject: fakeUserProject,
      });

      assert.strictEqual(bucket.userProject, fakeUserProject);
    });
  });

  describe('addLifecycleRule', () => {
    beforeEach(() => {
      bucket.getMetadata = (callback: GetBucketMetadataCallback) => {
        callback(null, {}, {});
      };
    });

    it('should accept raw input', done => {
      const rule = {
        action: {
          type: 'type',
        },
        condition: {},
      };

      bucket.setMetadata = (metadata: Metadata) => {
        assert.deepStrictEqual(metadata.lifecycle.rule, [rule]);
        done();
      };

      bucket.addLifecycleRule(rule, assert.ifError);
    });

    it('should properly capitalize rule action', done => {
      const rule = {
        action: 'delete',
        condition: {},
      };

      bucket.setMetadata = (metadata: Metadata) => {
        assert.deepStrictEqual(metadata.lifecycle.rule, [
          {
            action: {
              type: rule.action.charAt(0).toUpperCase() + rule.action.slice(1),
            },
            condition: rule.condition,
          },
        ]);

        done();
      };

      bucket.addLifecycleRule(rule, assert.ifError);
    });

    it('should properly set the storage class', done => {
      const rule = {
        action: 'setStorageClass',
        storageClass: 'storage class',
        condition: {},
      };

      bucket.setMetadata = (metadata: Metadata) => {
        assert.deepStrictEqual(metadata.lifecycle.rule, [
          {
            action: {
              type: rule.action.charAt(0).toUpperCase() + rule.action.slice(1),
              storageClass: rule.storageClass,
            },
            condition: rule.condition,
          },
        ]);

        done();
      };

      bucket.addLifecycleRule(rule, assert.ifError);
    });

    it('should properly set condition', done => {
      const rule = {
        action: 'delete',
        condition: {
          age: 30,
        },
      };

      bucket.setMetadata = (metadata: Metadata) => {
        assert.deepStrictEqual(metadata.lifecycle.rule, [
          {
            action: {
              type: rule.action.charAt(0).toUpperCase() + rule.action.slice(1),
            },
            condition: rule.condition,
          },
        ]);
        done();
      };

      bucket.addLifecycleRule(rule, assert.ifError);
    });

    it('should convert Date object to date string for condition', done => {
      const date = new Date();

      const rule = {
        action: 'delete',
        condition: {
          createdBefore: date,
        },
      };

      bucket.setMetadata = (metadata: Metadata) => {
        const expectedDateString = date.toISOString().replace(/T.+$/, '');

        const rule = metadata.lifecycle.rule[0];
        assert.strictEqual(rule.condition.createdBefore, expectedDateString);

        done();
      };

      bucket.addLifecycleRule(rule, assert.ifError);
    });

    it('should optionally overwrite existing rules', done => {
      const rule = {
        action: {
          type: 'type',
        },
        condition: {},
      };

      const options = {
        append: false,
      };

      bucket.getMetadata = () => {
        done(new Error('Metadata should not be refreshed.'));
      };

      bucket.setMetadata = (metadata: Metadata) => {
        assert.strictEqual(metadata.lifecycle.rule.length, 1);
        assert.deepStrictEqual(metadata.lifecycle.rule, [rule]);
        done();
      };

      bucket.addLifecycleRule(rule, options, assert.ifError);
    });

    it('should combine rule with existing rules by default', done => {
      const existingRule = {
        action: {
          type: 'type',
        },
        condition: {},
      };

      const newRule = {
        action: {
          type: 'type',
        },
        condition: {},
      };

      bucket.getMetadata = (callback: GetBucketMetadataCallback) => {
        callback(null, {lifecycle: {rule: [existingRule]}}, {});
      };

      bucket.setMetadata = (metadata: Metadata) => {
        assert.strictEqual(metadata.lifecycle.rule.length, 2);
        assert.deepStrictEqual(metadata.lifecycle.rule, [
          existingRule,
          newRule,
        ]);
        done();
      };

      bucket.addLifecycleRule(newRule, assert.ifError);
    });

    it('should pass callback to setMetadata', done => {
      const rule = {
        action: {
          type: 'type',
        },
        condition: {},
      };

      bucket.setMetadata = (
        metadata: Metadata,
        callback: SetBucketMetadataCallback
      ) => {
        callback(); // done()
      };

      bucket.addLifecycleRule(rule, done);
    });

    it('should pass error from getMetadata to callback', done => {
      const error = new Error('from getMetadata');
      const rule = {
        action: 'delete',
        condition: {},
      };

      bucket.getMetadata = (callback: Function) => {
        callback(error);
      };

      bucket.setMetadata = () => {
        done(new Error('Metadata should not be set.'));
      };

      bucket.addLifecycleRule(rule, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should disable auto-retries when ifMetagenerationMatch is not set', done => {
      const rule = {
        action: {
          type: 'type',
        },
        condition: {},
      };

      bucket.setMetadata = () => {
        assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
      };

      bucket.addLifecycleRule(rule, assert.ifError);
      assert.strictEqual(bucket.storage.retryOptions.autoRetry, true);
      done();
    });
  });

  describe('combine', () => {
    it('should throw if invalid sources are provided', () => {
      assert.throws(() => {
        bucket.combine(), BucketExceptionMessages.PROVIDE_SOURCE_FILE;
      });

      assert.throws(() => {
        bucket.combine([]), BucketExceptionMessages.PROVIDE_SOURCE_FILE;
      });
    });

    it('should throw if a destination is not provided', () => {
      assert.throws(() => {
        bucket.combine(['1', '2']),
          BucketExceptionMessages.DESTINATION_FILE_NOT_SPECIFIED;
      });
    });

    it('should accept string or file input for sources', done => {
      const file1 = bucket.file('1.txt');
      const file2 = '2.txt';
      const destinationFileName = 'destination.txt';

      const originalFileMethod = bucket.file;
      bucket.file = (name: string) => {
        const file = originalFileMethod(name);

        if (name === '2.txt') {
          return file;
        }

        assert.strictEqual(name, destinationFileName);

        file.request = (reqOpts: DecorateRequestOptions) => {
          assert.strictEqual(reqOpts.method, 'POST');
          assert.strictEqual(reqOpts.uri, '/compose');
          assert.strictEqual(reqOpts.json.sourceObjects[0].name, file1.name);
          assert.strictEqual(reqOpts.json.sourceObjects[1].name, file2);

          done();
        };

        return file;
      };

      bucket.combine([file1, file2], destinationFileName);
    });

    it('should use content type from the destination metadata', done => {
      const destination = bucket.file('destination.txt');

      destination.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(
          reqOpts.json.destination.contentType,
          mime.contentType(destination.name)
        );

        done();
      };

      bucket.combine(['1', '2'], destination);
    });

    it('should use content type from the destination metadata', done => {
      const destination = bucket.file('destination.txt');
      destination.metadata = {contentType: 'content-type'};

      destination.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(
          reqOpts.json.destination.contentType,
          destination.metadata.contentType
        );

        done();
      };

      bucket.combine(['1', '2'], destination);
    });

    it('should detect dest content type if not in metadata', done => {
      const destination = bucket.file('destination.txt');

      destination.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(
          reqOpts.json.destination.contentType,
          mime.contentType(destination.name)
        );

        done();
      };

      bucket.combine(['1', '2'], destination);
    });

    it('should make correct API request', done => {
      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('destination.txt');

      destination.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.uri, '/compose');
        assert.deepStrictEqual(reqOpts.json, {
          destination: {contentType: mime.contentType(destination.name)},
          sourceObjects: [{name: sources[0].name}, {name: sources[1].name}],
        });

        done();
      };

      bucket.combine(sources, destination);
    });

    it('should encode the destination file name', done => {
      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('needs encoding.jpg');

      destination.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.uri.indexOf(destination), -1);
        done();
      };

      bucket.combine(sources, destination);
    });

    it('should send a source generation value if available', done => {
      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      sources[0].metadata = {generation: 1};
      sources[1].metadata = {generation: 2};

      const destination = bucket.file('destination.txt');

      destination.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.json.sourceObjects, [
          {name: sources[0].name, generation: sources[0].metadata.generation},
          {name: sources[1].name, generation: sources[1].metadata.generation},
        ]);

        done();
      };

      bucket.combine(sources, destination);
    });

    it('should accept userProject option', done => {
      const options = {
        userProject: 'user-project-id',
      };

      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('destination.txt');

      destination.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      bucket.combine(sources, destination, options, assert.ifError);
    });

    it('should accept precondition options', done => {
      const options = {
        ifGenerationMatch: 100,
        ifGenerationNotMatch: 101,
        ifMetagenerationMatch: 102,
        ifMetagenerationNotMatch: 103,
      };

      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('destination.txt');

      destination.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(
          reqOpts.qs.ifGenerationMatch,
          options.ifGenerationMatch
        );
        assert.strictEqual(
          reqOpts.qs.ifGenerationNotMatch,
          options.ifGenerationNotMatch
        );
        assert.strictEqual(
          reqOpts.qs.ifMetagenerationMatch,
          options.ifMetagenerationMatch
        );
        assert.strictEqual(
          reqOpts.qs.ifMetagenerationNotMatch,
          options.ifMetagenerationNotMatch
        );
        done();
      };

      bucket.combine(sources, destination, options, assert.ifError);
    });

    it('should respect constructor precondition options', done => {
      bucket = new Bucket(STORAGE, BUCKET_NAME, {
        preconditionOpts: {
          ifGenerationMatch: 301,
          ifGenerationNotMatch: 302,
          ifMetagenerationMatch: 303,
          ifMetagenerationNotMatch: 304,
        },
      });
      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('destination.txt');

      const options = {};
      destination.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(
          reqOpts.qs.ifGenerationMatch,
          bucket.instancePreconditionOpts.ifGenerationMatch
        );
        assert.strictEqual(
          reqOpts.qs.ifGenerationNotMatch,
          bucket.instancePreconditionOpts.ifGenerationNotMatch
        );
        assert.strictEqual(
          reqOpts.qs.ifMetagenerationMatch,
          bucket.instancePreconditionOpts.ifMetagenerationMatch
        );
        assert.strictEqual(
          reqOpts.qs.ifMetagenerationNotMatch,
          bucket.instancePreconditionOpts.ifMetagenerationNotMatch
        );
        done();
      };

      bucket.combine(sources, destination, options, assert.ifError);
    });

    it('should execute the callback', done => {
      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('destination.txt');

      destination.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback();
      };

      bucket.combine(sources, destination, done);
    });

    it('should execute the callback with an error', done => {
      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('destination.txt');

      const error = new Error('Error.');

      destination.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(error);
      };

      bucket.combine(sources, destination, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should execute the callback with apiResponse', done => {
      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('destination.txt');
      const resp = {success: true};

      destination.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, resp);
      };

      bucket.combine(
        sources,
        destination,
        (err: Error, obj: {}, apiResponse: {}) => {
          assert.strictEqual(resp, apiResponse);
          done();
        }
      );
    });

    it('should set maxRetries to 0 when ifGenerationMatch is undefined', done => {
      const sources = [bucket.file('1.txt'), bucket.file('2.txt')];
      const destination = bucket.file('destination.txt');

      destination.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        assert.strictEqual(reqOpts.maxRetries, 0);
        callback();
      };

      bucket.combine(sources, destination, done);
    });
  });

  describe('createChannel', () => {
    const ID = 'id';
    const CONFIG = {
      address: 'https://...',
    };

    it('should throw if an ID is not provided', () => {
      assert.throws(() => {
        bucket.createChannel(), BucketExceptionMessages.CHANNEL_ID_REQUIRED;
      });
    });

    it('should throw if an address is not provided', () => {
      assert.throws(() => {
        bucket.createChannel(ID, {});
      }, /An address is required to create a channel\./);
    });

    it('should make the correct request', done => {
      const config = Object.assign({}, CONFIG, {
        a: 'b',
        c: 'd',
      });
      const originalConfig = Object.assign({}, config);

      bucket.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/o/watch');

        const expectedJson = Object.assign({}, config, {
          id: ID,
          type: 'web_hook',
        });
        assert.deepStrictEqual(reqOpts.json, expectedJson);
        assert.deepStrictEqual(config, originalConfig);

        done();
      };

      bucket.createChannel(ID, config, assert.ifError);
    });

    it('should accept userProject option', done => {
      const options = {
        userProject: 'user-project-id',
      };

      bucket.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      bucket.createChannel(ID, CONFIG, options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {};

      beforeEach(() => {
        bucket.request = (
          reqOpts: DecorateRequestOptions,
          callback: Function
        ) => {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        bucket.createChannel(
          ID,
          CONFIG,
          (err: Error, channel: Channel, apiResponse_: {}) => {
            assert.strictEqual(err, error);
            assert.strictEqual(channel, null);
            assert.strictEqual(apiResponse_, apiResponse);

            done();
          }
        );
      });
    });

    describe('success', () => {
      const apiResponse = {
        resourceId: 'resource-id',
      };

      beforeEach(() => {
        bucket.request = (
          reqOpts: DecorateRequestOptions,
          callback: Function
        ) => {
          callback(null, apiResponse);
        };
      });

      it('should exec a callback with Channel & API response', done => {
        const channel = {};

        bucket.storage.channel = (id: string, resourceId: string) => {
          assert.strictEqual(id, ID);
          assert.strictEqual(resourceId, apiResponse.resourceId);
          return channel;
        };

        bucket.createChannel(
          ID,
          CONFIG,
          (err: Error, channel_: Channel, apiResponse_: {}) => {
            assert.ifError(err);
            assert.strictEqual(channel_, channel);
            assert.strictEqual(channel_.metadata, apiResponse);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          }
        );
      });
    });
  });

  describe('createNotification', () => {
    const PUBSUB_SERVICE_PATH = '//pubsub.googleapis.com/';
    const TOPIC = 'my-topic';
    const FULL_TOPIC_NAME =
      PUBSUB_SERVICE_PATH + 'projects/{{projectId}}/topics/' + TOPIC;

    class FakeTopic {
      name: string;
      constructor(name: string) {
        this.name = 'projects/grape-spaceship-123/topics/' + name;
      }
    }

    beforeEach(() => {
      fakeUtil.isCustomType = util.isCustomType;
    });

    it('should throw an error if a valid topic is not provided', () => {
      assert.throws(() => {
        bucket.createNotification(),
          BucketExceptionMessages.TOPIC_NAME_REQUIRED;
      });
    });

    it('should make the correct request', done => {
      const topic = 'projects/my-project/topics/my-topic';
      const options = {payloadFormat: 'NONE'};
      const expectedTopic = PUBSUB_SERVICE_PATH + topic;
      const expectedJson = Object.assign(
        {topic: expectedTopic},
        snakeize(options)
      );

      bucket.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/notificationConfigs');
        assert.deepStrictEqual(reqOpts.json, expectedJson);
        assert.notStrictEqual(reqOpts.json, options);
        done();
      };

      bucket.createNotification(topic, options, assert.ifError);
    });

    it('should accept incomplete topic names', done => {
      bucket.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.json.topic, FULL_TOPIC_NAME);
        done();
      };

      bucket.createNotification(TOPIC, {}, assert.ifError);
    });

    it('should accept a topic object', done => {
      const fakeTopic = new FakeTopic('my-topic');
      const expectedTopicName = PUBSUB_SERVICE_PATH + fakeTopic.name;

      fakeUtil.isCustomType = (topic, type) => {
        assert.strictEqual(topic, fakeTopic);
        assert.strictEqual(type, 'pubsub/topic');
        return true;
      };

      bucket.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.json.topic, expectedTopicName);
        done();
      };

      bucket.createNotification(fakeTopic, {}, assert.ifError);
    });

    it('should set a default payload format', done => {
      bucket.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.json.payload_format, 'JSON_API_V1');
        done();
      };

      bucket.createNotification(TOPIC, {}, assert.ifError);
    });

    it('should optionally accept options', done => {
      const expectedJson = {
        topic: FULL_TOPIC_NAME,
        payload_format: 'JSON_API_V1',
      };

      bucket.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.json, expectedJson);
        done();
      };

      bucket.createNotification(TOPIC, assert.ifError);
    });

    it('should accept a userProject', done => {
      const options = {
        userProject: 'grape-spaceship-123',
      };

      bucket.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs.userProject, options.userProject);
        done();
      };

      bucket.createNotification(TOPIC, options, assert.ifError);
    });

    it('should return errors to the callback', done => {
      const error = new Error('err');
      const response = {};

      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(error, response);
      };

      bucket.createNotification(
        TOPIC,
        (err: Error, notification: Notification, resp: {}) => {
          assert.strictEqual(err, error);
          assert.strictEqual(notification, null);
          assert.strictEqual(resp, response);
          done();
        }
      );
    });

    it('should return a notification object', done => {
      const fakeId = '123';
      const response = {id: fakeId};
      const fakeNotification = {};

      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, response);
      };

      bucket.notification = (id: string) => {
        assert.strictEqual(id, fakeId);
        return fakeNotification;
      };

      bucket.createNotification(
        TOPIC,
        (err: Error, notification: Notification, resp: {}) => {
          assert.ifError(err);
          assert.strictEqual(notification, fakeNotification);
          assert.strictEqual(notification.metadata, response);
          assert.strictEqual(resp, response);
          done();
        }
      );
    });
  });

  describe('deleteFiles', () => {
    it('should accept only a callback', done => {
      bucket.getFiles = (query: {}) => {
        assert.deepStrictEqual(query, {});
        return Promise.all([[]]);
      };

      bucket.deleteFiles(done);
    });

    it('should get files from the bucket', done => {
      const query = {a: 'b', c: 'd'};

      bucket.getFiles = (query_: {}) => {
        assert.deepStrictEqual(query_, query);
        return Promise.resolve([[]]);
      };

      bucket.deleteFiles(query, done);
    });

    it('should process 10 files at a time', done => {
      pLimitOverride = (limit: number) => {
        assert.strictEqual(limit, 10);
        setImmediate(done);
        return () => {};
      };

      bucket.getFiles = () => Promise.resolve([[]]);
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

      bucket.getFiles = (query_: {}) => {
        assert.strictEqual(query_, query);
        return Promise.resolve([files]);
      };

      bucket.deleteFiles(query, (err: Error) => {
        assert.ifError(err);
        assert.strictEqual(timesCalled, files.length);
        done();
      });
    });

    it('should execute callback with error from getting files', done => {
      const error = new Error('Error.');

      bucket.getFiles = () => {
        return Promise.reject(error);
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

      bucket.getFiles = () => {
        return Promise.resolve([files]);
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

      bucket.getFiles = () => {
        return Promise.resolve([files]);
      };

      bucket.deleteFiles({force: true}, (errs: Array<{}>) => {
        assert.strictEqual(errs[0], error);
        assert.strictEqual(errs[1], error);
        done();
      });
    });
  });

  describe('deleteLabels', () => {
    describe('all labels', () => {
      it('should get all of the label names', done => {
        bucket.getLabels = () => {
          done();
        };

        bucket.deleteLabels(assert.ifError);
      });

      it('should return an error from getLabels()', done => {
        const error = new Error('Error.');

        bucket.getLabels = (callback: Function) => {
          callback(error);
        };

        bucket.deleteLabels((err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should call setLabels with all label names', done => {
        const labels = {
          labelone: 'labelonevalue',
          labeltwo: 'labeltwovalue',
        };

        bucket.getLabels = (callback: Function) => {
          callback(null, labels);
        };

        bucket.setLabels = (labels: {}, callback: Function) => {
          assert.deepStrictEqual(labels, {
            labelone: null,
            labeltwo: null,
          });
          callback(); // done()
        };

        bucket.deleteLabels(done);
      });
    });

    describe('single label', () => {
      const LABEL = 'labelname';

      it('should call setLabels with a single label', done => {
        bucket.setLabels = (labels: {}, callback: Function) => {
          assert.deepStrictEqual(labels, {
            [LABEL]: null,
          });
          callback(); // done()
        };

        bucket.deleteLabels(LABEL, done);
      });
    });

    describe('multiple labels', () => {
      const LABELS = ['labelonename', 'labeltwoname'];

      it('should call setLabels with multiple labels', done => {
        bucket.setLabels = (labels: {}, callback: Function) => {
          assert.deepStrictEqual(labels, {
            labelonename: null,
            labeltwoname: null,
          });
          callback(); // done()
        };

        bucket.deleteLabels(LABELS, done);
      });
    });
  });

  describe('disableRequesterPays', () => {
    it('should call setMetadata correctly', done => {
      bucket.setMetadata = (metadata: {}, callback: Function) => {
        assert.deepStrictEqual(metadata, {
          billing: {
            requesterPays: false,
          },
        });
        callback(); // done()
      };

      bucket.disableRequesterPays(done);
    });

    it('should not require a callback', done => {
      bucket.setMetadata = (metadata: {}, callback: Function) => {
        assert.doesNotThrow(() => callback());
        done();
      };

      bucket.disableRequesterPays();
    });

    it('should set autoRetry to false when ifMetagenerationMatch is undefined', done => {
      bucket.setMetadata = () => {
        assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
        done();
      };
      bucket.disableRequesterPays();
    });
  });

  describe('enableLogging', () => {
    const PREFIX = 'prefix';

    beforeEach(() => {
      bucket.iam = {
        getPolicy: () => Promise.resolve([{bindings: []}]),
        setPolicy: () => Promise.resolve(),
      };
      bucket.setMetadata = () => Promise.resolve([]);
    });

    it('should throw if a config object is not provided', () => {
      assert.throws(() => {
        bucket.enableLogging(),
          BucketExceptionMessages.CONFIGURATION_OBJECT_PREFIX_REQUIRED;
      });
    });

    it('should throw if config is a function', () => {
      assert.throws(() => {
        bucket.enableLogging(assert.ifError),
          BucketExceptionMessages.CONFIGURATION_OBJECT_PREFIX_REQUIRED;
      });
    });

    it('should throw if a prefix is not provided', () => {
      assert.throws(() => {
        bucket.enableLogging(
          {
            bucket: 'bucket-name',
          },
          assert.ifError
        ),
          BucketExceptionMessages.CONFIGURATION_OBJECT_PREFIX_REQUIRED;
      });
    });

    it('should add IAM permissions', done => {
      const policy = {
        bindings: [{}],
      };
      bucket.iam = {
        getPolicy: () => Promise.resolve([policy]),
        setPolicy: (policy_: Policy) => {
          assert.deepStrictEqual(policy, policy_);
          assert.deepStrictEqual(policy_.bindings, [
            policy.bindings[0],
            {
              members: ['group:cloud-storage-analytics@google.com'],
              role: 'roles/storage.objectCreator',
            },
          ]);
          setImmediate(done);
          return Promise.resolve();
        },
      };

      bucket.enableLogging({prefix: PREFIX}, assert.ifError);
    });

    it('should return an error from getting the IAM policy', done => {
      const error = new Error('Error.');

      bucket.iam.getPolicy = () => {
        throw error;
      };

      bucket.enableLogging({prefix: PREFIX}, (err: Error | null) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return an error from setting the IAM policy', done => {
      const error = new Error('Error.');

      bucket.iam.setPolicy = () => {
        throw error;
      };

      bucket.enableLogging({prefix: PREFIX}, (err: Error | null) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should update the logging metadata configuration', done => {
      bucket.setMetadata = (metadata: Metadata) => {
        assert.deepStrictEqual(metadata.logging, {
          logBucket: bucket.id,
          logObjectPrefix: PREFIX,
        });
        setImmediate(done);
        return Promise.resolve([]);
      };

      bucket.enableLogging({prefix: PREFIX}, assert.ifError);
    });

    it('should allow a custom bucket to be provided', done => {
      const bucketName = 'bucket-name';

      bucket.setMetadata = (metadata: Metadata) => {
        assert.deepStrictEqual(metadata.logging.logBucket, bucketName);
        setImmediate(done);
        return Promise.resolve([]);
      };

      bucket.enableLogging(
        {
          prefix: PREFIX,
          bucket: bucketName,
        },
        assert.ifError
      );
    });

    it('should accept a Bucket object', done => {
      const bucketForLogging = new Bucket(STORAGE, 'bucket-name');

      bucket.setMetadata = (metadata: Metadata) => {
        assert.deepStrictEqual(metadata.logging.logBucket, bucketForLogging.id);
        setImmediate(done);
        return Promise.resolve([]);
      };

      bucket.enableLogging(
        {
          prefix: PREFIX,
          bucket: bucketForLogging,
        },
        assert.ifError
      );
    });

    it('should execute the callback with the setMetadata response', done => {
      const setMetadataResponse = {};

      bucket.setMetadata = () => Promise.resolve([setMetadataResponse]);

      bucket.enableLogging(
        {prefix: PREFIX},
        (err: Error | null, response: SetBucketMetadataResponse) => {
          assert.ifError(err);
          assert.strictEqual(response, setMetadataResponse);
          done();
        }
      );
    });

    it('should return an error from the setMetadata call failing', done => {
      const error = new Error('Error.');

      bucket.setMetadata = () => {
        throw error;
      };

      bucket.enableLogging({prefix: PREFIX}, (err: Error | null) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should disable autoRetry when ifMetagenerationMatch is undefined', done => {
      bucket.setMetadata = () => {
        assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
      };

      bucket.enableLogging({prefix: PREFIX}, () => {
        done();
      });
    });
  });

  describe('enableRequesterPays', () => {
    it('should call setMetadata correctly', done => {
      bucket.setMetadata = (metadata: {}, callback: Function) => {
        assert.deepStrictEqual(metadata, {
          billing: {
            requesterPays: true,
          },
        });
        callback(); // done()
      };

      bucket.enableRequesterPays(done);
    });

    it('should not require a callback', done => {
      bucket.setMetadata = (metadata: {}, callback: Function) => {
        assert.doesNotThrow(() => callback());
        done();
      };

      bucket.enableRequesterPays();
    });

    it('should disable autoRetry when ifMetagenerationMatch is undefined', done => {
      bucket.setMetadata = () => {
        assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
        done();
      };

      bucket.enableRequesterPays();
    });
  });

  describe('file', () => {
    const FILE_NAME = 'remote-file-name.jpg';
    let file: FakeFile;
    const options = {a: 'b', c: 'd'};

    beforeEach(() => {
      file = bucket.file(FILE_NAME, options);
    });

    it('should throw if no name is provided', () => {
      assert.throws(() => {
        bucket.file(), BucketExceptionMessages.SPECIFY_FILE_NAME;
      });
    });

    it('should return a File object', () => {
      assert(file instanceof FakeFile);
    });

    it('should pass bucket to File object', () => {
      assert.deepStrictEqual(file.calledWith_[0], bucket);
    });

    it('should pass filename to File object', () => {
      assert.strictEqual(file.calledWith_[1], FILE_NAME);
    });

    it('should pass configuration object to File', () => {
      assert.deepStrictEqual(file.calledWith_[2], options);
    });
  });

  describe('getFiles', () => {
    it('should get files without a query', done => {
      bucket.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.uri, '/o');
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      bucket.getFiles(util.noop);
    });

    it('should get files with a query', done => {
      const token = 'next-page-token';
      bucket.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.qs, {maxResults: 5, pageToken: token});
        done();
      };
      bucket.getFiles({maxResults: 5, pageToken: token}, util.noop);
    });

    it('should allow setting a directory', done => {
      //Note: Directory is deprecated.
      const directory = 'directory-name';
      bucket.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs.prefix, `${directory}/`);
        assert.strictEqual(reqOpts.qs.directory, undefined);
        done();
      };
      bucket.getFiles({directory}, assert.ifError);
    });

    it('should strip excess slashes from a directory', done => {
      //Note: Directory is deprecated.
      const directory = 'directory-name///';
      bucket.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs.prefix, 'directory-name/');
        done();
      };
      bucket.getFiles({directory}, assert.ifError);
    });

    it('should return nextQuery if more results exist', () => {
      const token = 'next-page-token';
      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, {nextPageToken: token, items: []});
      };
      bucket.getFiles(
        {maxResults: 5},
        (err: Error, results: {}, nextQuery: GetFilesOptions) => {
          assert.strictEqual(nextQuery.pageToken, token);
          assert.strictEqual(nextQuery.maxResults, 5);
        }
      );
    });

    it('should return null nextQuery if there are no more results', () => {
      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, {items: []});
      };
      bucket.getFiles(
        {maxResults: 5},
        (err: Error, results: {}, nextQuery: {}) => {
          assert.strictEqual(nextQuery, null);
        }
      );
    });

    it('should return File objects', done => {
      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, {
          items: [{name: 'fake-file-name', generation: 1}],
        });
      };
      bucket.getFiles((err: Error, files: FakeFile[]) => {
        assert.ifError(err);
        assert(files[0] instanceof FakeFile);
        assert.strictEqual(
          typeof files[0].calledWith_[2].generation,
          'undefined'
        );
        done();
      });
    });

    it('should return versioned Files if queried for versions', done => {
      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, {
          items: [{name: 'fake-file-name', generation: 1}],
        });
      };

      bucket.getFiles({versions: true}, (err: Error, files: FakeFile[]) => {
        assert.ifError(err);
        assert(files[0] instanceof FakeFile);
        assert.strictEqual(files[0].calledWith_[2].generation, 1);
        done();
      });
    });

    it('should set kmsKeyName on file', done => {
      const kmsKeyName = 'kms-key-name';

      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, {
          items: [{name: 'fake-file-name', kmsKeyName}],
        });
      };

      bucket.getFiles({versions: true}, (err: Error, files: FakeFile[]) => {
        assert.ifError(err);
        assert.strictEqual(files[0].calledWith_[2].kmsKeyName, kmsKeyName);
        done();
      });
    });

    it('should return apiResponse in callback', done => {
      const resp = {items: [{name: 'fake-file-name'}]};
      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, resp);
      };
      bucket.getFiles(
        (err: Error, files: Array<{}>, nextQuery: {}, apiResponse: {}) => {
          assert.deepStrictEqual(resp, apiResponse);
          done();
        }
      );
    });

    it('should execute callback with error & API response', done => {
      const error = new Error('Error.');
      const apiResponse = {};

      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(error, apiResponse);
      };

      bucket.getFiles(
        (err: Error, files: File[], nextQuery: {}, apiResponse_: {}) => {
          assert.strictEqual(err, error);
          assert.strictEqual(files, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        }
      );
    });

    it('should populate returned File object with metadata', done => {
      const fileMetadata = {
        name: 'filename',
        contentType: 'x-zebra',
        metadata: {
          my: 'custom metadata',
        },
      };
      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, {items: [fileMetadata]});
      };
      bucket.getFiles((err: Error, files: FakeFile[]) => {
        assert.ifError(err);
        assert.deepStrictEqual(files[0].metadata, fileMetadata);
        done();
      });
    });
  });

  describe('getLabels', () => {
    it('should refresh metadata', done => {
      bucket.getMetadata = () => {
        done();
      };

      bucket.getLabels(assert.ifError);
    });

    it('should accept an options object', done => {
      const options = {};

      bucket.getMetadata = (options_: {}) => {
        assert.strictEqual(options_, options);
        done();
      };

      bucket.getLabels(options, assert.ifError);
    });

    it('should return error from getMetadata', done => {
      const error = new Error('Error.');

      bucket.getMetadata = (options: {}, callback: Function) => {
        callback(error);
      };

      bucket.getLabels((err: Error) => {
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

      bucket.getMetadata = (options: {}, callback: Function) => {
        callback(null, metadata);
      };

      bucket.getLabels((err: Error, labels: {}) => {
        assert.ifError(err);
        assert.strictEqual(labels, metadata.labels);
        done();
      });
    });

    it('should return empty object if no labels exist', done => {
      const metadata = {};

      bucket.getMetadata = (options: {}, callback: Function) => {
        callback(null, metadata);
      };

      bucket.getLabels((err: Error, labels: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(labels, {});
        done();
      });
    });
  });

  describe('getNotifications', () => {
    it('should make the correct request', done => {
      const options = {};

      bucket.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.uri, '/notificationConfigs');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      bucket.getNotifications(options, assert.ifError);
    });

    it('should optionally accept options', done => {
      bucket.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      bucket.getNotifications(assert.ifError);
    });

    it('should return any errors to the callback', done => {
      const error = new Error('err');
      const response = {};

      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(error, response);
      };

      bucket.getNotifications(
        (err: Error, notifications: Notification[], resp: {}) => {
          assert.strictEqual(err, error);
          assert.strictEqual(notifications, null);
          assert.strictEqual(resp, response);
          done();
        }
      );
    });

    it('should return a list of notification objects', done => {
      const fakeItems = [{id: '1'}, {id: '2'}, {id: '3'}];
      const response = {items: fakeItems};

      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, response);
      };

      let callCount = 0;
      const fakeNotifications = [{}, {}, {}];

      bucket.notification = (id: string) => {
        const expectedId = fakeItems[callCount].id;
        assert.strictEqual(id, expectedId);
        return fakeNotifications[callCount++];
      };

      bucket.getNotifications(
        (err: Error, notifications: Notification[], resp: {}) => {
          assert.ifError(err);
          notifications.forEach((notification, i) => {
            assert.strictEqual(notification, fakeNotifications[i]);
            assert.strictEqual(notification.metadata, fakeItems[i]);
          });
          assert.strictEqual(resp, response);
          done();
        }
      );
    });
  });

  describe('getSignedUrl', () => {
    const EXPECTED_SIGNED_URL = 'signed-url';
    const CNAME = 'https://www.example.com';

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
        signer
      );

      SIGNED_URL_CONFIG = {
        version: 'v4',
        expires: new Date(),
        action: 'list',
        cname: CNAME,
      };
    });

    afterEach(() => sandbox.restore());

    it('should construct a URLSigner and call getSignedUrl', done => {
      // assert signer is lazily-initialized.
      assert.strictEqual(bucket.signer, undefined);
      bucket.getSignedUrl(
        SIGNED_URL_CONFIG,
        (err: Error | null, signedUrl: string) => {
          assert.ifError(err);
          assert.strictEqual(bucket.signer, signer);
          assert.strictEqual(signedUrl, EXPECTED_SIGNED_URL);

          const ctorArgs = urlSignerStub.getCall(0).args;
          assert.strictEqual(ctorArgs[0], bucket.storage.authClient);
          assert.strictEqual(ctorArgs[1], bucket);

          const getSignedUrlArgs = signerGetSignedUrlStub.getCall(0).args;
          assert.deepStrictEqual(getSignedUrlArgs[0], {
            method: 'GET',
            version: 'v4',
            expires: SIGNED_URL_CONFIG.expires,
            extensionHeaders: {},
            queryParams: {},
            cname: CNAME,
          });
          done();
        }
      );
    });

    it('should error if action is null', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      SIGNED_URL_CONFIG.action = null as any;

      assert.throws(() => {
        bucket.getSignedUrl(SIGNED_URL_CONFIG, () => {}),
          ExceptionMessages.INVALID_ACTION;
      });
    });

    it('should error if action is undefined', () => {
      delete SIGNED_URL_CONFIG.action;
      assert.throws(() => {
        bucket.getSignedUrl(SIGNED_URL_CONFIG, () => {}),
          ExceptionMessages.INVALID_ACTION;
      });
    });

    it('should error for an invalid action', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      SIGNED_URL_CONFIG.action = 'watch' as any;

      assert.throws(() => {
        bucket.getSignedUrl(SIGNED_URL_CONFIG, () => {}),
          ExceptionMessages.INVALID_ACTION;
      });
    });
  });

  describe('lock', () => {
    it('should throw if a metageneration is not provided', () => {
      assert.throws(() => {
        bucket.lock(assert.ifError),
          BucketExceptionMessages.METAGENERATION_NOT_PROVIDED;
      });
    });

    it('should make the correct request', done => {
      const metageneration = 8;

      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        assert.deepStrictEqual(reqOpts, {
          method: 'POST',
          uri: '/lockRetentionPolicy',
          qs: {
            ifMetagenerationMatch: metageneration,
          },
        });

        callback(); // done()
      };

      bucket.lock(metageneration, done);
    });
  });

  describe('makePrivate', () => {
    it('should set predefinedAcl & privatize files', done => {
      let didSetPredefinedAcl = false;
      let didMakeFilesPrivate = false;

      bucket.setMetadata = (metadata: {}, options: {}) => {
        assert.deepStrictEqual(metadata, {acl: null});
        assert.deepStrictEqual(options, {predefinedAcl: 'projectPrivate'});

        didSetPredefinedAcl = true;
        return Promise.resolve();
      };

      bucket.makeAllFilesPublicPrivate_ = (
        opts: MakeAllFilesPublicPrivateOptions,
        callback: Function
      ) => {
        assert.strictEqual(opts.private, true);
        assert.strictEqual(opts.force, true);
        didMakeFilesPrivate = true;
        callback();
      };

      bucket.makePrivate({includeFiles: true, force: true}, (err: Error) => {
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
      bucket.setMetadata = (metadata: {}) => {
        assert.deepStrictEqual(metadata, {
          acl: null,
          ...options.metadata,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert.strictEqual(typeof (options.metadata as any).acl, 'undefined');
        done();
      };
      bucket.makePrivate(options, assert.ifError);
    });

    it('should accept userProject', done => {
      const options = {
        userProject: 'user-project-id',
      };
      bucket.setMetadata = (metadata: {}, options_: SetFileMetadataOptions) => {
        assert.strictEqual(options_.userProject, options.userProject);
        return Promise.resolve();
      };
      bucket.makePrivate(options, done);
    });

    it('should not make files private by default', done => {
      bucket.parent.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback();
      };

      bucket.makeAllFilesPublicPrivate_ = () => {
        throw new Error('Please, no. I do not want to be called.');
      };

      bucket.makePrivate(done);
    });

    it('should execute callback with error', done => {
      const error = new Error('Error.');

      bucket.parent.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(error);
      };

      bucket.makePrivate((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should disable autoRetry when ifMetagenerationMatch is undefined', done => {
      bucket.setMetadata = () => {
        assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
        return Promise.resolve();
      };
      bucket.makePrivate({}, done);
    });
  });

  describe('makePublic', () => {
    beforeEach(() => {
      bucket.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback();
      };
    });

    it('should set ACL, default ACL, and publicize files', done => {
      let didSetAcl = false;
      let didSetDefaultAcl = false;
      let didMakeFilesPublic = false;

      bucket.acl.add = (opts: AddAclOptions) => {
        assert.strictEqual(opts.entity, 'allUsers');
        assert.strictEqual(opts.role, 'READER');
        didSetAcl = true;
        return Promise.resolve();
      };

      bucket.acl.default.add = (opts: AddAclOptions) => {
        assert.strictEqual(opts.entity, 'allUsers');
        assert.strictEqual(opts.role, 'READER');
        didSetDefaultAcl = true;
        return Promise.resolve();
      };

      bucket.makeAllFilesPublicPrivate_ = (
        opts: MakeAllFilesPublicPrivateOptions,
        callback: Function
      ) => {
        assert.strictEqual(opts.public, true);
        assert.strictEqual(opts.force, true);
        didMakeFilesPublic = true;
        callback();
      };

      bucket.makePublic(
        {
          includeFiles: true,
          force: true,
        },
        (err: Error) => {
          assert.ifError(err);
          assert(didSetAcl);
          assert(didSetDefaultAcl);
          assert(didMakeFilesPublic);
          done();
        }
      );
    });

    it('should not make files public by default', done => {
      bucket.acl.add = () => Promise.resolve();
      bucket.acl.default.add = () => Promise.resolve();
      bucket.makeAllFilesPublicPrivate_ = () => {
        throw new Error('Please, no. I do not want to be called.');
      };
      bucket.makePublic(done);
    });

    it('should execute callback with error', done => {
      const error = new Error('Error.');
      bucket.acl.add = () => Promise.reject(error);
      bucket.makePublic((err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('notification', () => {
    it('should throw an error if an id is not provided', () => {
      assert.throws(() => {
        bucket.notification(), BucketExceptionMessages.SUPPLY_NOTIFICATION_ID;
      });
    });

    it('should return a Notification object', () => {
      const fakeId = '123';
      const notification = bucket.notification(fakeId);

      assert(notification instanceof FakeNotification);
      assert.strictEqual(notification.bucket, bucket);
      assert.strictEqual(notification.id, fakeId);
    });
  });

  describe('removeRetentionPeriod', () => {
    it('should call setMetadata correctly', done => {
      bucket.setMetadata = (metadata: {}, callback: Function) => {
        assert.deepStrictEqual(metadata, {
          retentionPolicy: null,
        });

        callback(); // done()
      };

      bucket.removeRetentionPeriod(done);
    });

    it('should disable autoRetry when ifMetagenerationMatch is undefined', done => {
      bucket.setMetadata = (metadata: {}, callback: Function) => {
        assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
        callback();
      };

      bucket.removeRetentionPeriod(done);
    });
  });

  describe('request', () => {
    const USER_PROJECT = 'grape-spaceship-123';

    beforeEach(() => {
      bucket.userProject = USER_PROJECT;
    });

    it('should set the userProject if qs is undefined', done => {
      FakeServiceObject.prototype.request = ((
        reqOpts: DecorateRequestOptions
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
        reqOpts: DecorateRequestOptions
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
        reqOpts: DecorateRequestOptions
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
  });

  describe('setLabels', () => {
    it('should correctly call setMetadata', done => {
      const labels = {};
      bucket.setMetadata = (
        metadata: Metadata,
        options: {},
        callback: Function
      ) => {
        assert.strictEqual(metadata.labels, labels);
        callback(); // done()
      };
      bucket.setLabels(labels, done);
    });

    it('should accept an options object', done => {
      const labels = {};
      const options = {};
      bucket.setMetadata = (metadata: {}, options_: {}) => {
        assert.strictEqual(options_, options);
        done();
      };
      bucket.setLabels(labels, options, done);
    });

    it('should disable autoRetry when isMetagenerationMatch is undefined', done => {
      bucket.setMetadata = (metadata: {}, options: {}, callback: Function) => {
        assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
        callback();
      };
      bucket.setLabels({}, done);
    });
  });

  describe('setRetentionPeriod', () => {
    it('should call setMetadata correctly', done => {
      const duration = 90000;

      bucket.setMetadata = (metadata: {}, callback: Function) => {
        assert.deepStrictEqual(metadata, {
          retentionPolicy: {
            retentionPeriod: duration,
          },
        });

        callback(); // done()
      };

      bucket.setRetentionPeriod(duration, done);
    });

    it('should disable autoRetry when ifMetagenerationMatch is undefined', done => {
      const duration = 90000;

      bucket.setMetadata = (metadata: {}, callback: Function) => {
        assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
        callback();
      };

      bucket.setRetentionPeriod(duration, done);
    });
  });

  describe('setCorsConfiguration', () => {
    it('should call setMetadata correctly', done => {
      const corsConfiguration = [{maxAgeSeconds: 3600}];

      bucket.setMetadata = (metadata: {}, callback: Function) => {
        assert.deepStrictEqual(metadata, {
          cors: corsConfiguration,
        });

        callback(); // done()
      };

      bucket.setCorsConfiguration(corsConfiguration, done);
    });

    it('should disable autoRetry when ifMetagenerationMatch is undefined', done => {
      const corsConfiguration = [{maxAgeSeconds: 3600}];

      bucket.setMetadata = (metadata: {}, callback: Function) => {
        assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
        callback();
      };

      bucket.setCorsConfiguration(corsConfiguration, done);
    });
  });

  describe('setStorageClass', () => {
    const STORAGE_CLASS = 'NEW_STORAGE_CLASS';
    const OPTIONS = {};
    const CALLBACK = util.noop;

    it('should convert camelCase to snake_case', done => {
      bucket.setMetadata = (metadata: Metadata) => {
        assert.strictEqual(metadata.storageClass, 'CAMEL_CASE');
        done();
      };

      bucket.setStorageClass('camelCase', OPTIONS, CALLBACK);
    });

    it('should convert hyphenate to snake_case', done => {
      bucket.setMetadata = (metadata: Metadata) => {
        assert.strictEqual(metadata.storageClass, 'HYPHENATED_CLASS');
        done();
      };

      bucket.setStorageClass('hyphenated-class', OPTIONS, CALLBACK);
    });

    it('should call setMetdata correctly', done => {
      bucket.setMetadata = (
        metadata: Metadata,
        options: {},
        callback: Function
      ) => {
        assert.deepStrictEqual(metadata, {storageClass: STORAGE_CLASS});
        assert.strictEqual(options, OPTIONS);
        assert.strictEqual(callback, CALLBACK);
        done();
      };

      bucket.setStorageClass(STORAGE_CLASS, OPTIONS, CALLBACK);
    });

    it('should disable autoRetry when ifMetagenerationMatch is undefined', done => {
      bucket.setMetadata = (
        metadata: Metadata,
        options: {},
        callback: Function
      ) => {
        assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
        callback();
      };

      bucket.setStorageClass(STORAGE_CLASS, OPTIONS, done);
    });
  });

  describe('setUserProject', () => {
    const USER_PROJECT = 'grape-spaceship-123';

    it('should set the userProject property', () => {
      bucket.setUserProject(USER_PROJECT);
      assert.strictEqual(bucket.userProject, USER_PROJECT);
    });

    it('should set the userProject on the global request options', () => {
      const methods = [
        'create',
        'delete',
        'exists',
        'get',
        'getMetadata',
        'setMetadata',
      ];
      methods.forEach(method => {
        assert.strictEqual(
          bucket.methods[method].reqOpts.qs.userProject,
          undefined
        );
      });
      bucket.setUserProject(USER_PROJECT);
      methods.forEach(method => {
        assert.strictEqual(
          bucket.methods[method].reqOpts.qs.userProject,
          USER_PROJECT
        );
      });
    });
  });

  describe('upload', () => {
    const basename = 'testfile.json';
    const filepath = path.join(__dirname, '../../test/testdata/' + basename);
    const metadata = {
      metadata: {
        a: 'b',
        c: 'd',
      },
    };

    beforeEach(() => {
      bucket.file = (name: string, metadata: Metadata) => {
        return new FakeFile(bucket, name, metadata);
      };
    });

    it('should return early in snippet sandbox', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (global as any)['GCLOUD_SANDBOX_ENV'] = true;
      const returnValue = bucket.upload(filepath, assert.ifError);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (global as any)['GCLOUD_SANDBOX_ENV'];
      assert.strictEqual(returnValue, undefined);
    });

    it('should accept a path & cb', done => {
      bucket.upload(filepath, (err: Error, file: File) => {
        assert.ifError(err);
        assert.strictEqual(file.bucket.name, bucket.name);
        assert.strictEqual(file.name, basename);
        done();
      });
    });

    it('should accept a path, metadata, & cb', done => {
      const options = {
        metadata,
        encryptionKey: 'key',
        kmsKeyName: 'kms-key-name',
      };
      bucket.upload(filepath, options, (err: Error, file: FakeFile) => {
        assert.ifError(err);
        assert.strictEqual(file.bucket.name, bucket.name);
        assert.deepStrictEqual(file.metadata, metadata);
        assert.strictEqual(file.options.encryptionKey, options.encryptionKey);
        assert.strictEqual(file.options.kmsKeyName, options.kmsKeyName);
        done();
      });
    });

    it('should accept a path, a string dest, & cb', done => {
      const newFileName = 'new-file-name.png';
      const options = {
        destination: newFileName,
        encryptionKey: 'key',
        kmsKeyName: 'kms-key-name',
      };
      bucket.upload(filepath, options, (err: Error, file: FakeFile) => {
        assert.ifError(err);
        assert.strictEqual(file.bucket.name, bucket.name);
        assert.strictEqual(file.name, newFileName);
        assert.strictEqual(file.options.encryptionKey, options.encryptionKey);
        assert.strictEqual(file.options.kmsKeyName, options.kmsKeyName);
        done();
      });
    });

    it('should accept a path, a string dest, metadata, & cb', done => {
      const newFileName = 'new-file-name.png';
      const options = {
        destination: newFileName,
        metadata,
        encryptionKey: 'key',
        kmsKeyName: 'kms-key-name',
      };
      bucket.upload(filepath, options, (err: Error, file: FakeFile) => {
        assert.ifError(err);
        assert.strictEqual(file.bucket.name, bucket.name);
        assert.strictEqual(file.name, newFileName);
        assert.deepStrictEqual(file.metadata, metadata);
        assert.strictEqual(file.options.encryptionKey, options.encryptionKey);
        assert.strictEqual(file.options.kmsKeyName, options.kmsKeyName);
        done();
      });
    });

    it('should accept a path, a File dest, & cb', done => {
      const fakeFile = new FakeFile(bucket, 'file-name');
      fakeFile.isSameFile = () => {
        return true;
      };
      const options = {destination: fakeFile};
      bucket.upload(filepath, options, (err: Error, file: FakeFile) => {
        assert.ifError(err);
        assert(file.isSameFile());
        done();
      });
    });

    it('should accept a path, a File dest, metadata, & cb', done => {
      const fakeFile = new FakeFile(bucket, 'file-name');
      fakeFile.isSameFile = () => {
        return true;
      };
      const options = {destination: fakeFile, metadata};
      bucket.upload(filepath, options, (err: Error, file: FakeFile) => {
        assert.ifError(err);
        assert(file.isSameFile());
        assert.deepStrictEqual(file.metadata, metadata);
        done();
      });
    });

    it('should disable autoRetry when ifMetagenerationMatch is undefined', done => {
      const fakeFile = new FakeFile(bucket, 'file-name');
      fakeFile.isSameFile = () => {
        return true;
      };
      const options = {destination: fakeFile, metadata};
      bucket.upload(filepath, options, () => {
        assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
        done();
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
        fsStatOverride = (path: string, callback: Function) => {
          callback(null, {size: 1}); // Small size to guarantee simple upload
        };
      });

      it('should force a resumable upload', done => {
        const fakeFile = new FakeFile(bucket, 'file-name');
        const options = {destination: fakeFile, resumable: true};
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

      it('should not pass resumable option to createWriteStream when file size is greater than minimum resumable threshold', done => {
        const fakeFile = new FakeFile(bucket, 'file-name');
        const options = {destination: fakeFile};
        fsStatOverride = (path: string, callback: Function) => {
          // Set size greater than threshold
          callback(null, {size: 5000001});
        };
        fakeFile.createWriteStream = (options_: CreateWriteStreamOptions) => {
          const ws = new stream.Writable();
          ws.write = () => true;
          setImmediate(() => {
            assert.strictEqual(typeof options_.resumable, 'undefined');
            done();
          });
          return ws;
        };
        bucket.upload(filepath, options, assert.ifError);
      });

      it('should prevent resumable when file size is less than minimum resumable threshold', done => {
        const fakeFile = new FakeFile(bucket, 'file-name');
        const options = {destination: fakeFile};
        fakeFile.createWriteStream = (options_: CreateWriteStreamOptions) => {
          const ws = new stream.Writable();
          ws.write = () => true;
          setImmediate(() => {
            assert.strictEqual(options_.resumable, false);
            done();
          });
          return ws;
        };
        bucket.upload(filepath, options, assert.ifError);
      });

      it('should not retry a nonretryable error code', done => {
        const fakeFile = new FakeFile(bucket, 'file-name');
        const options = {destination: fakeFile, resumable: true};
        let retryCount = 0;
        fakeFile.createWriteStream = (options_: CreateWriteStreamOptions) => {
          class DelayedStream403Error extends Transform {
            _transform(
              chunk: string | Buffer,
              _encoding: string,
              done: Function
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

        bucket.upload(filepath, options, (err: Error) => {
          assert.strictEqual(err.message, 'first error');
          assert.ok(retryCount === 2);
          done();
        });
      });

      it('resumable upload should retry', done => {
        const fakeFile = new FakeFile(bucket, 'file-name');
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
        bucket.upload(filepath, options, (err: Error) => {
          assert.strictEqual(err.message, 'first error');
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
        fsStatOverride = (path: string, callback: Function) => {
          callback(null, {size: 1}); // Small size to guarantee simple upload
        };
      });

      it('should save with no errors', done => {
        const fakeFile = new FakeFile(bucket, 'file-name');
        const options = {destination: fakeFile, resumable: false};
        fakeFile.createWriteStream = (options_: CreateWriteStreamOptions) => {
          class DelayedStreamNoError extends Transform {
            _transform(
              chunk: string | Buffer,
              _encoding: string,
              done: Function
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
        bucket.upload(filepath, options, (err: Error) => {
          assert.ifError(err);
          done();
        });
      });

      it('should retry on first failure', done => {
        const fakeFile = new FakeFile(bucket, 'file-name');
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
        bucket.upload(filepath, options, (err: Error, file: FakeFile) => {
          assert.ifError(err);
          assert(file.isSameFile());
          assert.deepStrictEqual(file.metadata, metadata);
          assert.ok(retryCount === 2);
          done();
        });
      });

      it('should not retry if nonretryable error code', done => {
        const fakeFile = new FakeFile(bucket, 'file-name');
        const options = {destination: fakeFile, resumable: false};
        let retryCount = 0;
        fakeFile.createWriteStream = (options_: CreateWriteStreamOptions) => {
          class DelayedStream403Error extends Transform {
            _transform(
              chunk: string | Buffer,
              _encoding: string,
              done: Function
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

        bucket.upload(filepath, options, (err: Error) => {
          assert.strictEqual(err.message, 'first error');
          assert.ok(retryCount === 2);
          done();
        });
      });

      it('non-multipart upload should not retry', done => {
        const fakeFile = new FakeFile(bucket, 'file-name');
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
        bucket.upload(filepath, options, (err: Error) => {
          assert.strictEqual(err.message, 'first error');
          assert.ok(retryCount === 1);
          done();
        });
      });
    });

    it('should allow overriding content type', done => {
      const fakeFile = new FakeFile(bucket, 'file-name');
      const metadata = {contentType: 'made-up-content-type'};
      const options = {destination: fakeFile, metadata};
      fakeFile.createWriteStream = (options: CreateWriteStreamOptions) => {
        const ws = new stream.Writable();
        ws.write = () => true;
        setImmediate(() => {
          assert.strictEqual(
            options.metadata.contentType,
            metadata.contentType
          );
          done();
        });
        return ws;
      };
      bucket.upload(filepath, options, assert.ifError);
    });

    it('should pass provided options to createWriteStream', done => {
      const fakeFile = new FakeFile(bucket, 'file-name');
      const options = {
        destination: fakeFile,
        a: 'b',
        c: 'd',
      };
      fakeFile.createWriteStream = (options_: {a: {}; c: {}}) => {
        const ws = new stream.Writable();
        ws.write = () => true;
        setImmediate(() => {
          assert.strictEqual(options_.a, options.a);
          assert.strictEqual(options_.c, options.c);
          done();
        });
        return ws;
      };
      bucket.upload(filepath, options, assert.ifError);
    });

    it('should execute callback on error', done => {
      const error = new Error('Error.');
      const fakeFile = new FakeFile(bucket, 'file-name');
      const options = {destination: fakeFile};
      fakeFile.createWriteStream = () => {
        const ws = new stream.PassThrough();
        setImmediate(() => {
          ws.destroy(error);
        });
        return ws;
      };
      bucket.upload(filepath, options, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return file and metadata', done => {
      const fakeFile = new FakeFile(bucket, 'file-name');
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

      bucket.upload(
        filepath,
        options,
        (err: Error, file: File, apiResponse: {}) => {
          assert.ifError(err);
          assert.strictEqual(file, fakeFile);
          assert.strictEqual(apiResponse, metadata);
          done();
        }
      );
    });
  });

  describe('makeAllFilesPublicPrivate_', () => {
    it('should get all files from the bucket', done => {
      const options = {};
      bucket.getFiles = (options_: {}) => {
        assert.strictEqual(options_, options);
        return Promise.resolve([[]]);
      };
      bucket.makeAllFilesPublicPrivate_(options, done);
    });

    it('should process 10 files at a time', done => {
      pLimitOverride = (limit: number) => {
        assert.strictEqual(limit, 10);
        setImmediate(done);
        return () => {};
      };

      bucket.getFiles = () => Promise.resolve([[]]);
      bucket.makeAllFilesPublicPrivate_({}, assert.ifError);
    });

    it('should make files public', done => {
      let timesCalled = 0;
      const files = [bucket.file('1'), bucket.file('2')].map(file => {
        file.makePublic = () => {
          timesCalled++;
          return Promise.resolve();
        };
        return file;
      });
      bucket.getFiles = () => Promise.resolve([files]);
      bucket.makeAllFilesPublicPrivate_({public: true}, (err: Error) => {
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
        file.makePrivate = () => {
          timesCalled++;
          return Promise.resolve();
        };
        return file;
      });

      bucket.getFiles = () => Promise.resolve([files]);
      bucket.makeAllFilesPublicPrivate_(options, (err: Error) => {
        assert.ifError(err);
        assert.strictEqual(timesCalled, files.length);
        done();
      });
    });

    it('should execute callback with error from getting files', done => {
      const error = new Error('Error.');
      bucket.getFiles = () => Promise.reject(error);
      bucket.makeAllFilesPublicPrivate_({}, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should execute callback with error from changing file', done => {
      const error = new Error('Error.');
      const files = [bucket.file('1'), bucket.file('2')].map(file => {
        file.makePublic = () => Promise.reject(error);
        return file;
      });
      bucket.getFiles = () => Promise.resolve([files]);
      bucket.makeAllFilesPublicPrivate_({public: true}, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should execute callback with queued errors', done => {
      const error = new Error('Error.');
      const files = [bucket.file('1'), bucket.file('2')].map(file => {
        file.makePublic = () => Promise.reject(error);
        return file;
      });
      bucket.getFiles = () => Promise.resolve([files]);
      bucket.makeAllFilesPublicPrivate_(
        {
          public: true,
          force: true,
        },
        (errs: Error[]) => {
          assert.deepStrictEqual(errs, [error, error]);
          done();
        }
      );
    });

    it('should execute callback with files changed', done => {
      const error = new Error('Error.');
      const successFiles = [bucket.file('1'), bucket.file('2')].map(file => {
        file.makePublic = () => Promise.resolve();
        return file;
      });
      const errorFiles = [bucket.file('3'), bucket.file('4')].map(file => {
        file.makePublic = () => Promise.reject(error);
        return file;
      });

      bucket.getFiles = () => {
        const files = successFiles.concat(errorFiles);
        return Promise.resolve([files]);
      };

      bucket.makeAllFilesPublicPrivate_(
        {
          public: true,
          force: true,
        },
        (errs: Error[], files: File[]) => {
          assert.deepStrictEqual(errs, [error, error]);
          assert.deepStrictEqual(files, successFiles);
          done();
        }
      );
    });
  });
  describe('disableAutoRetryConditionallyIdempotent_', () => {
    beforeEach(() => {
      bucket.storage.retryOptions.autoRetry = true;
      STORAGE.retryOptions.idempotencyStrategy =
        IdempotencyStrategy.RetryConditional;
    });

    it('should set autoRetry to false when ifMetagenerationMatch is undefined (setMetadata)', done => {
      bucket.disableAutoRetryConditionallyIdempotent_(
        bucket.methods.setMetadata,
        AvailableServiceObjectMethods.setMetadata
      );
      assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
      done();
    });

    it('should set autoRetry to false when ifMetagenerationMatch is undefined (delete)', done => {
      bucket.disableAutoRetryConditionallyIdempotent_(
        bucket.methods.delete,
        AvailableServiceObjectMethods.delete
      );
      assert.strictEqual(bucket.storage.retryOptions.autoRetry, false);
      done();
    });

    it('should set autoRetry to false when IdempotencyStrategy is set to RetryNever', done => {
      STORAGE.retryOptions.idempotencyStrategy = IdempotencyStrategy.RetryNever;
      bucket = new Bucket(STORAGE, BUCKET_NAME, {
        preconditionOpts: {
          ifMetagenerationMatch: 100,
        },
      });
      bucket.disableAutoRetryConditionallyIdempotent_(
        bucket.methods.delete,
        AvailableServiceObjectMethods.delete
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
        bucket.methods.delete,
        AvailableServiceObjectMethods.delete
      );
      assert.strictEqual(bucket.storage.retryOptions.autoRetry, true);
      done();
    });
  });
});
