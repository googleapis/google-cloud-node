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
  Service,
  ServiceConfig,
  util,
} from '@google-cloud/common';
import {PromisifyAllOptions} from '@google-cloud/promisify';
import arrify = require('arrify');
import * as assert from 'assert';
import {describe, it, before, beforeEach, after, afterEach} from 'mocha';
import * as proxyquire from 'proxyquire';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Bucket} from '../src';
import {GetFilesOptions} from '../src/bucket';
import sinon = require('sinon');
import {HmacKey} from '../src/hmacKey';
import {HmacKeyResourceResponse, PROTOCOL_REGEX} from '../src/storage';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const hmacKeyModule = require('../src/hmacKey');

class FakeChannel {
  calledWith_: Array<{}>;
  constructor(...args: Array<{}>) {
    this.calledWith_ = args;
  }
}

class FakeService extends Service {
  calledWith_: Array<{}>;
  constructor(...args: Array<{}>) {
    super(args[0] as ServiceConfig);
    this.calledWith_ = args;
  }
}

let extended = false;
const fakePaginator = {
  paginator: {
    // tslint:disable-next-line:variable-name
    extend(Class: Function, methods: string[]) {
      if (Class.name !== 'Storage') {
        return;
      }

      methods = arrify(methods);
      assert.strictEqual(Class.name, 'Storage');
      assert.deepStrictEqual(methods, ['getBuckets', 'getHmacKeys']);
      extended = true;
    },
    streamify(methodName: string) {
      return methodName;
    },
  },
};

let promisified = false;
const fakePromisify = {
  // tslint:disable-next-line:variable-name
  promisifyAll(Class: Function, options: PromisifyAllOptions) {
    if (Class.name !== 'Storage') {
      return;
    }

    promisified = true;
    assert.deepStrictEqual(options.exclude, ['bucket', 'channel', 'hmacKey']);
  },
};

describe('Storage', () => {
  const PROJECT_ID = 'project-id';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Storage: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let storage: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Bucket: any;

  before(() => {
    Storage = proxyquire('../src/storage', {
      '@google-cloud/promisify': fakePromisify,
      '@google-cloud/paginator': fakePaginator,
      '@google-cloud/common': {
        Service: FakeService,
      },
      './channel.js': {Channel: FakeChannel},
      './hmacKey': hmacKeyModule,
    }).Storage;
    Bucket = Storage.Bucket;
  });

  beforeEach(() => {
    storage = new Storage({projectId: PROJECT_ID});
  });

  describe('instantiation', () => {
    it('should extend the correct methods', () => {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', () => {
      assert.strictEqual(storage.getBucketsStream, 'getBuckets');
      assert.strictEqual(storage.getHmacKeysStream, 'getHmacKeys');
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should inherit from Service', () => {
      // Using assert.strictEqual instead of assert to prevent
      // coercing of types.
      assert.strictEqual(storage instanceof Service, true);

      const calledWith = storage.calledWith_[0];

      const baseUrl = 'https://storage.googleapis.com/storage/v1';
      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.strictEqual(calledWith.projectIdRequired, false);
      assert.deepStrictEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/iam',
        'https://www.googleapis.com/auth/cloud-platform',
        'https://www.googleapis.com/auth/devstorage.full_control',
      ]);
      assert.deepStrictEqual(
        calledWith.packageJson,
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('../../package.json')
      );
    });

    it('should not modify options argument', () => {
      const options = {
        projectId: PROJECT_ID,
      };
      const expectedCalledWith = Object.assign({}, options, {
        apiEndpoint: 'https://storage.googleapis.com',
      });
      const storage = new Storage(options);
      const calledWith = storage.calledWith_[1];
      assert.notStrictEqual(calledWith, options);
      assert.notDeepStrictEqual(calledWith, options);
      assert.deepStrictEqual(calledWith, expectedCalledWith);
    });

    it('should propagate the apiEndpoint option', () => {
      const apiEndpoint = 'https://some.fake.endpoint';
      const storage = new Storage({
        projectId: PROJECT_ID,
        apiEndpoint,
      });
      const calledWith = storage.calledWith_[0];
      assert.strictEqual(calledWith.baseUrl, `${apiEndpoint}/storage/v1`);
      assert.strictEqual(calledWith.apiEndpoint, `${apiEndpoint}`);
    });

    it('should set customEndpoint to true when using apiEndpoint', () => {
      const storage = new Storage({
        projectId: PROJECT_ID,
        apiEndpoint: 'https://apiendpoint',
      });

      const calledWith = storage.calledWith_[0];
      assert.strictEqual(calledWith.customEndpoint, true);
    });

    it('should prepend apiEndpoint with default protocol', () => {
      const protocollessApiEndpoint = 'some.fake.endpoint';
      const storage = new Storage({
        projectId: PROJECT_ID,
        apiEndpoint: protocollessApiEndpoint,
      });
      const calledWith = storage.calledWith_[0];
      assert.strictEqual(
        calledWith.baseUrl,
        `https://${protocollessApiEndpoint}/storage/v1`
      );
      assert.strictEqual(
        calledWith.apiEndpoint,
        `https://${protocollessApiEndpoint}`
      );
    });

    it('should strip trailing slash from apiEndpoint', () => {
      const apiEndpoint = 'https://some.fake.endpoint/';
      const storage = new Storage({
        projectId: PROJECT_ID,
        apiEndpoint,
      });
      const calledWith = storage.calledWith_[0];
      assert.strictEqual(calledWith.baseUrl, `${apiEndpoint}storage/v1`);
      assert.strictEqual(calledWith.apiEndpoint, 'https://some.fake.endpoint');
    });

    describe('STORAGE_EMULATOR_HOST', () => {
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

        const calledWith = storage.calledWith_[0];
        assert.strictEqual(calledWith.baseUrl, EMULATOR_HOST);
        assert.strictEqual(
          calledWith.apiEndpoint,
          'https://internal.benchmark.com/path'
        );
      });

      it('should be overriden by apiEndpoint', () => {
        const storage = new Storage({
          projectId: PROJECT_ID,
          apiEndpoint: 'https://some.api.com',
        });

        const calledWith = storage.calledWith_[0];
        assert.strictEqual(calledWith.baseUrl, EMULATOR_HOST);
        assert.strictEqual(calledWith.apiEndpoint, 'https://some.api.com');
      });

      it('should prepend default protocol and strip trailing slash', () => {
        const EMULATOR_HOST = 'internal.benchmark.com/path/';
        process.env.STORAGE_EMULATOR_HOST = EMULATOR_HOST;

        const storage = new Storage({
          projectId: PROJECT_ID,
        });

        const calledWith = storage.calledWith_[0];
        assert.strictEqual(calledWith.baseUrl, EMULATOR_HOST);
        assert.strictEqual(
          calledWith.apiEndpoint,
          'https://internal.benchmark.com/path'
        );
      });

      it('should set customEndpoint to true', () => {
        const storage = new Storage({
          projectId: PROJECT_ID,
        });

        const calledWith = storage.calledWith_[0];
        assert.strictEqual(calledWith.customEndpoint, true);
      });
    });
  });

  describe('bucket', () => {
    it('should throw if no name was provided', () => {
      assert.throws(() => {
        storage.bucket();
      }, /A bucket name is needed to use Cloud Storage\./);
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

      assert(channel instanceof FakeChannel);

      assert.strictEqual(channel.calledWith_[0], storage);
      assert.strictEqual(channel.calledWith_[1], ID);
      assert.strictEqual(channel.calledWith_[2], RESOURCE_ID);
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
        storage.hmacKey();
      }, /An access ID is needed to create an HmacKey object./);
    });

    it('should pass options object to HmacKey constructor', () => {
      const options = {myOpts: 'a'};
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
    const OPTIONS = {
      some: 'value',
    };

    let hmacKeyCtor: sinon.SinonSpy;
    beforeEach(() => {
      hmacKeyCtor = sinon.spy(hmacKeyModule, 'HmacKey');
    });

    afterEach(() => {
      hmacKeyCtor.restore();
    });

    it('should make correct API request', done => {
      storage.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(
          reqOpts.uri,
          `/projects/${storage.projectId}/hmacKeys`
        );
        assert.strictEqual(
          reqOpts.qs.serviceAccountEmail,
          SERVICE_ACCOUNT_EMAIL
        );

        callback(null, response);
      };

      storage.createHmacKey(SERVICE_ACCOUNT_EMAIL, done);
    });

    it('should throw without a serviceAccountEmail', () => {
      assert.throws(
        () => storage.createHmacKey(),
        /The first argument must be a service account email to create an HMAC key\./
      );
    });

    it('should throw when first argument is not a string', () => {
      assert.throws(
        () =>
          storage.createHmacKey({
            userProject: 'my-project',
          }),
        /The first argument must be a service account email to create an HMAC key\./
      );
    });

    it('should make request with method options as query parameter', async () => {
      storage.request = sinon
        .stub()
        .returns((_reqOpts: {}, callback: Function) => callback());

      await storage.createHmacKey(SERVICE_ACCOUNT_EMAIL, OPTIONS);
      const reqArg = storage.request.firstCall.args[0];
      assert.deepStrictEqual(reqArg.qs, {
        serviceAccountEmail: SERVICE_ACCOUNT_EMAIL,
        ...OPTIONS,
      });
    });

    it('should not modify the options object', done => {
      storage.request = (_reqOpts: {}, callback: Function) => {
        callback(null, response);
      };
      const originalOptions = Object.assign({}, OPTIONS);

      storage.createHmacKey(SERVICE_ACCOUNT_EMAIL, OPTIONS, (err: Error) => {
        assert.ifError(err);
        assert.deepStrictEqual(OPTIONS, originalOptions);
        done();
      });
    });

    it('should invoke callback with a secret and an HmacKey instance', done => {
      storage.request = (_reqOpts: {}, callback: Function) => {
        callback(null, response);
      };

      storage.createHmacKey(
        SERVICE_ACCOUNT_EMAIL,
        (err: Error, hmacKey: HmacKey, secret: string) => {
          assert.ifError(err);
          assert.strictEqual(secret, response.secret);
          assert.deepStrictEqual(hmacKeyCtor.getCall(0).args, [
            storage,
            response.metadata.accessId,
            {projectId: response.metadata.projectId},
          ]);
          assert.strictEqual(hmacKey.metadata, metadataResponse);
          done();
        }
      );
    });

    it('should invoke callback with raw apiResponse', done => {
      storage.request = (_reqOpts: {}, callback: Function) => {
        callback(null, response);
      };

      storage.createHmacKey(
        SERVICE_ACCOUNT_EMAIL,
        (
          err: Error,
          _hmacKey: HmacKey,
          _secret: string,
          apiResponse: HmacKeyResourceResponse
        ) => {
          assert.ifError(err);
          assert.strictEqual(apiResponse, response);
          done();
        }
      );
    });

    it('should execute callback with request error', done => {
      const error = new Error('Request error');
      const response = {success: false};
      storage.request = (_reqOpts: {}, callback: Function) => {
        callback(error, response);
      };

      storage.createHmacKey(
        SERVICE_ACCOUNT_EMAIL,
        (err: Error, _hmacKey: HmacKey, _secret: string, apiResponse: {}) => {
          assert.strictEqual(err, error);
          assert.strictEqual(apiResponse, response);
          done();
        }
      );
    });
  });

  describe('createBucket', () => {
    const BUCKET_NAME = 'new-bucket-name';
    const METADATA = {a: 'b', c: {d: 'e'}};
    const BUCKET = {name: BUCKET_NAME};

    it('should make correct API request', done => {
      storage.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/b');
        assert.strictEqual(reqOpts.qs.project, storage.projectId);
        assert.strictEqual(reqOpts.json.name, BUCKET_NAME);

        callback();
      };

      storage.createBucket(BUCKET_NAME, done);
    });

    it('should accept a name, metadata, and callback', done => {
      storage.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        assert.deepStrictEqual(
          reqOpts.json,
          Object.assign(METADATA, {name: BUCKET_NAME})
        );
        callback(null, METADATA);
      };
      storage.bucket = (name: string) => {
        assert.strictEqual(name, BUCKET_NAME);
        return BUCKET;
      };
      storage.createBucket(BUCKET_NAME, METADATA, (err: Error) => {
        assert.ifError(err);
        done();
      });
    });

    it('should accept a name and callback only', done => {
      storage.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback();
      };
      storage.createBucket(BUCKET_NAME, done);
    });

    it('should throw if no name is provided', () => {
      assert.throws(() => {
        storage.createBucket();
      }, /A name is required to create a bucket\./);
    });

    it('should honor the userProject option', done => {
      const options = {
        userProject: 'grape-spaceship-123',
      };

      storage.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs.userProject, options.userProject);
        done();
      };

      storage.createBucket(BUCKET_NAME, options, assert.ifError);
    });

    it('should execute callback with bucket', done => {
      storage.bucket = () => {
        return BUCKET;
      };
      storage.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, METADATA);
      };
      storage.createBucket(BUCKET_NAME, (err: Error, bucket: Bucket) => {
        assert.ifError(err);
        assert.deepStrictEqual(bucket, BUCKET);
        assert.deepStrictEqual(bucket.metadata, METADATA);
        done();
      });
    });

    it('should execute callback on error', done => {
      const error = new Error('Error.');
      storage.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(error);
      };
      storage.createBucket(BUCKET_NAME, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should execute callback with apiResponse', done => {
      const resp = {success: true};
      storage.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, resp);
      };
      storage.createBucket(
        BUCKET_NAME,
        (err: Error, bucket: Bucket, apiResponse: Metadata) => {
          assert.strictEqual(resp, apiResponse);
          done();
        }
      );
    });

    it('should allow a user-specified storageClass', done => {
      const storageClass = 'nearline';
      storage.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        assert.strictEqual(reqOpts.json.storageClass, storageClass);
        callback(); // done
      };
      storage.createBucket(BUCKET_NAME, {storageClass}, done);
    });

    it('should throw when both `storageClass` and storageClass name are provided', () => {
      assert.throws(() => {
        storage.createBucket(
          BUCKET_NAME,
          {
            storageClass: 'nearline',
            coldline: true,
          },
          assert.ifError
        );
      }, /Both `coldline` and `storageClass` were provided./);
    });

    describe('storage classes', () => {
      it('should expand metadata.archive', done => {
        storage.request = (reqOpts: DecorateRequestOptions) => {
          assert.strictEqual(reqOpts.json.storageClass, 'ARCHIVE');
          done();
        };

        storage.createBucket(BUCKET_NAME, {archive: true}, assert.ifError);
      });

      it('should expand metadata.coldline', done => {
        storage.request = (reqOpts: DecorateRequestOptions) => {
          assert.strictEqual(reqOpts.json.storageClass, 'COLDLINE');
          done();
        };

        storage.createBucket(BUCKET_NAME, {coldline: true}, assert.ifError);
      });

      it('should expand metadata.dra', done => {
        storage.request = (reqOpts: DecorateRequestOptions) => {
          const body = reqOpts.json;
          assert.strictEqual(body.storageClass, 'DURABLE_REDUCED_AVAILABILITY');
          done();
        };

        storage.createBucket(BUCKET_NAME, {dra: true}, assert.ifError);
      });

      it('should expand metadata.multiRegional', done => {
        storage.request = (reqOpts: DecorateRequestOptions) => {
          assert.strictEqual(reqOpts.json.storageClass, 'MULTI_REGIONAL');
          done();
        };

        storage.createBucket(
          BUCKET_NAME,
          {
            multiRegional: true,
          },
          assert.ifError
        );
      });

      it('should expand metadata.nearline', done => {
        storage.request = (reqOpts: DecorateRequestOptions) => {
          assert.strictEqual(reqOpts.json.storageClass, 'NEARLINE');
          done();
        };

        storage.createBucket(BUCKET_NAME, {nearline: true}, assert.ifError);
      });

      it('should expand metadata.regional', done => {
        storage.request = (reqOpts: DecorateRequestOptions) => {
          assert.strictEqual(reqOpts.json.storageClass, 'REGIONAL');
          done();
        };

        storage.createBucket(BUCKET_NAME, {regional: true}, assert.ifError);
      });

      it('should expand metadata.standard', done => {
        storage.request = (reqOpts: DecorateRequestOptions) => {
          assert.strictEqual(reqOpts.json.storageClass, 'STANDARD');
          done();
        };

        storage.createBucket(BUCKET_NAME, {standard: true}, assert.ifError);
      });
    });

    describe('requesterPays', () => {
      it('should accept requesterPays setting', done => {
        const options = {
          requesterPays: true,
        };
        storage.request = (reqOpts: DecorateRequestOptions) => {
          assert.deepStrictEqual(reqOpts.json.billing, options);
          assert.strictEqual(reqOpts.json.requesterPays, undefined);
          done();
        };
        storage.createBucket(BUCKET_NAME, options, assert.ifError);
      });
    });
  });

  describe('getBuckets', () => {
    it('should get buckets without a query', done => {
      storage.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.uri, '/b');
        assert.deepStrictEqual(reqOpts.qs, {project: storage.projectId});
        done();
      };
      storage.getBuckets(util.noop);
    });

    it('should get buckets with a query', done => {
      const token = 'next-page-token';
      storage.request = (reqOpts: DecorateRequestOptions) => {
        assert.deepStrictEqual(reqOpts.qs, {
          project: storage.projectId,
          maxResults: 5,
          pageToken: token,
        });
        done();
      };
      storage.getBuckets({maxResults: 5, pageToken: token}, util.noop);
    });

    it('should execute callback with error', done => {
      const error = new Error('Error.');
      const apiResponse = {};

      storage.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(error, apiResponse);
      };

      storage.getBuckets(
        {},
        (err: Error, buckets: Bucket[], nextQuery: {}, resp: Metadata) => {
          assert.strictEqual(err, error);
          assert.strictEqual(buckets, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);
          done();
        }
      );
    });

    it('should return nextQuery if more results exist', () => {
      const token = 'next-page-token';
      storage.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, {nextPageToken: token, items: []});
      };
      storage.getBuckets(
        {maxResults: 5},
        (err: Error, results: {}, nextQuery: GetFilesOptions) => {
          assert.strictEqual(nextQuery.pageToken, token);
          assert.strictEqual(nextQuery.maxResults, 5);
        }
      );
    });

    it('should return null nextQuery if there are no more results', () => {
      storage.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, {items: []});
      };
      storage.getBuckets(
        {maxResults: 5},
        (err: Error, results: {}, nextQuery: {}) => {
          assert.strictEqual(nextQuery, null);
        }
      );
    });

    it('should return Bucket objects', done => {
      storage.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, {items: [{id: 'fake-bucket-name'}]});
      };
      storage.getBuckets((err: Error, buckets: Bucket[]) => {
        assert.ifError(err);
        assert(buckets[0] instanceof Bucket);
        done();
      });
    });

    it('should return apiResponse', done => {
      const resp = {items: [{id: 'fake-bucket-name'}]};
      storage.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, resp);
      };
      storage.getBuckets(
        (err: Error, buckets: Bucket[], nextQuery: {}, apiResponse: {}) => {
          assert.deepStrictEqual(resp, apiResponse);
          done();
        }
      );
    });

    it('should populate returned Bucket object with metadata', done => {
      const bucketMetadata = {
        id: 'bucketname',
        contentType: 'x-zebra',
        metadata: {
          my: 'custom metadata',
        },
      };
      storage.request = (
        reqOpts: DecorateRequestOptions,
        callback: Function
      ) => {
        callback(null, {items: [bucketMetadata]});
      };
      storage.getBuckets((err: Error, buckets: Bucket[]) => {
        assert.ifError(err);
        assert.deepStrictEqual(buckets[0].metadata, bucketMetadata);
        done();
      });
    });
  });

  describe('getHmacKeys', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let storageRequestStub: sinon.SinonStub<any, any>;
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
      storageRequestStub = sinon.stub(storage, 'request');
      storageRequestStub.callsFake((_opts: {}, callback: Function) => {
        callback(null, {});
      });
    });

    let hmacKeyCtor: sinon.SinonSpy;
    beforeEach(() => {
      hmacKeyCtor = sinon.spy(hmacKeyModule, 'HmacKey');
    });

    afterEach(() => {
      hmacKeyCtor.restore();
    });

    it('should get HmacKeys without a query', done => {
      storage.getHmacKeys(() => {
        const firstArg = storage.request.firstCall.args[0];
        assert.strictEqual(
          firstArg.uri,
          `/projects/${storage.projectId}/hmacKeys`
        );
        assert.deepStrictEqual(firstArg.qs, {});
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

      storage.getHmacKeys(query, () => {
        const firstArg = storage.request.firstCall.args[0];
        assert.strictEqual(
          firstArg.uri,
          `/projects/${storage.projectId}/hmacKeys`
        );
        assert.deepStrictEqual(firstArg.qs, query);
        done();
      });
    });

    it('should execute callback with error', done => {
      const error = new Error('Error.');
      const apiResponse = {};

      storageRequestStub.callsFake((_opts: {}, callback: Function) => {
        callback(error, apiResponse);
      });

      storage.getHmacKeys(
        {},
        (err: Error, hmacKeys: HmacKey[], nextQuery: {}, resp: Metadata) => {
          assert.strictEqual(err, error);
          assert.strictEqual(hmacKeys, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);
          done();
        }
      );
    });

    it('should return nextQuery if more results exist', done => {
      const token = 'next-page-token';
      const query = {
        param1: 'a',
        param2: 'b',
      };
      const expectedNextQuery = Object.assign({}, query, {pageToken: token});
      storageRequestStub.callsFake((_opts: {}, callback: Function) => {
        callback(null, {nextPageToken: token, items: []});
      });

      storage.getHmacKeys(
        query,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err: Error, _hmacKeys: [], nextQuery: any) => {
          assert.ifError(err);
          assert.deepStrictEqual(nextQuery, expectedNextQuery);
          done();
        }
      );
    });

    it('should return null nextQuery if there are no more results', done => {
      storageRequestStub.callsFake((_opts: {}, callback: Function) => {
        callback(null, {items: []});
      });

      storage.getHmacKeys({}, (err: Error, _hmacKeys: [], nextQuery: {}) => {
        assert.ifError(err);
        assert.strictEqual(nextQuery, null);
        done();
      });
    });

    it('should return apiResponse', done => {
      const resp = {items: [metadataResponse]};
      storageRequestStub.callsFake((_opts: {}, callback: Function) => {
        callback(null, resp);
      });

      storage.getHmacKeys(
        (err: Error, _hmacKeys: [], _nextQuery: {}, apiResponse: Metadata) => {
          assert.ifError(err);
          assert.deepStrictEqual(resp, apiResponse);
          done();
        }
      );
    });

    it('should populate returned HmacKey object with accessId and metadata', done => {
      storageRequestStub.callsFake((_opts: {}, callback: Function) => {
        callback(null, {items: [metadataResponse]});
      });

      storage.getHmacKeys((err: Error, hmacKeys: HmacKey[]) => {
        assert.ifError(err);
        assert.deepStrictEqual(hmacKeyCtor.getCall(0).args, [
          storage,
          metadataResponse.accessId,
          {projectId: metadataResponse.projectId},
        ]);
        assert.deepStrictEqual(hmacKeys[0].metadata, metadataResponse);
        done();
      });
    });
  });

  describe('getServiceAccount', () => {
    it('should make the correct request', done => {
      storage.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(
          reqOpts.uri,
          `/projects/${storage.projectId}/serviceAccount`
        );
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      storage.getServiceAccount(assert.ifError);
    });

    it('should allow user options', done => {
      const options = {};

      storage.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      storage.getServiceAccount(options, assert.ifError);
    });

    describe('error', () => {
      const ERROR = new Error('Error.');
      const API_RESPONSE = {};

      beforeEach(() => {
        storage.request = (
          reqOpts: DecorateRequestOptions,
          callback: Function
        ) => {
          callback(ERROR, API_RESPONSE);
        };
      });

      it('should return the error and apiResponse', done => {
        storage.getServiceAccount(
          (err: Error, serviceAccount: {}, apiResponse: Metadata) => {
            assert.strictEqual(err, ERROR);
            assert.strictEqual(serviceAccount, null);
            assert.strictEqual(apiResponse, API_RESPONSE);
            done();
          }
        );
      });
    });

    describe('success', () => {
      const API_RESPONSE = {};

      beforeEach(() => {
        storage.request = (
          reqOpts: DecorateRequestOptions,
          callback: Function
        ) => {
          callback(null, API_RESPONSE);
        };
      });

      it('should convert snake_case response to camelCase', done => {
        const apiResponse = {
          snake_case: true,
        };

        storage.request = (
          reqOpts: DecorateRequestOptions,
          callback: Function
        ) => {
          callback(null, apiResponse);
        };

        storage.getServiceAccount(
          (
            err: Error,
            serviceAccount: {[index: string]: string | undefined}
          ) => {
            assert.ifError(err);
            assert.strictEqual(
              serviceAccount.snakeCase,
              apiResponse.snake_case
            );
            assert.strictEqual(serviceAccount.snake_case, undefined);
            done();
          }
        );
      });

      it('should return the serviceAccount and apiResponse', done => {
        storage.getServiceAccount(
          (err: Error, serviceAccount: {}, apiResponse: {}) => {
            assert.ifError(err);
            assert.deepStrictEqual(serviceAccount, {});
            assert.strictEqual(apiResponse, API_RESPONSE);
            done();
          }
        );
      });
    });
  });

  describe('#sanitizeEndpoint', () => {
    const USER_DEFINED_SHORT_API_ENDPOINT = 'myapi.com:8080';
    const USER_DEFINED_PROTOCOL = 'myproto';
    const USER_DEFINED_FULL_API_ENDPOINT = `${USER_DEFINED_PROTOCOL}://myapi.com:8080`;

    it('should default protocol to https', () => {
      const endpoint = Storage.sanitizeEndpoint(
        USER_DEFINED_SHORT_API_ENDPOINT
      );
      assert.strictEqual(endpoint.match(PROTOCOL_REGEX)![1], 'https');
    });

    it('should not override protocol', () => {
      const endpoint = Storage.sanitizeEndpoint(USER_DEFINED_FULL_API_ENDPOINT);
      assert.strictEqual(
        endpoint.match(PROTOCOL_REGEX)![1],
        USER_DEFINED_PROTOCOL
      );
    });

    it('should remove trailing slashes from URL', () => {
      const endpointsWithTrailingSlashes = [
        `${USER_DEFINED_FULL_API_ENDPOINT}/`,
        `${USER_DEFINED_FULL_API_ENDPOINT}//`,
      ];
      for (const endpointWithTrailingSlashes of endpointsWithTrailingSlashes) {
        const endpoint = Storage.sanitizeEndpoint(endpointWithTrailingSlashes);
        assert.strictEqual(endpoint.endsWith('/'), false);
      }
    });
  });
});
