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

import {DecorateRequestOptions, Service, ServiceConfig, util} from '@google-cloud/common';
import {PromisifyAllOptions} from '@google-cloud/promisify';
import * as arrify from 'arrify';
import * as assert from 'assert';
import * as proxyquire from 'proxyquire';
import * as r from 'request';

import {Bucket} from '../src';
import {GetFilesOptions} from '../src/bucket';

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
      assert.deepStrictEqual(methods, ['getBuckets']);
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
    assert.deepStrictEqual(options.exclude, ['bucket', 'channel']);
  },
};

describe('Storage', () => {
  const PROJECT_ID = 'project-id';
  // tslint:disable-next-line:variable-name no-any
  let Storage: any;
  // tslint:disable-next-line: no-any
  let storage: any;
  // tslint:disable-next-line:variable-name no-any
  let Bucket: any;

  before(() => {
    Storage = proxyquire('../src/storage', {
                '@google-cloud/promisify': fakePromisify,
                '@google-cloud/paginator': fakePaginator,
                '@google-cloud/common': {
                  Service: FakeService,
                },
                './channel.js': {Channel: FakeChannel},
              }).Storage;
    Bucket = Storage.Bucket;
  });

  beforeEach(() => {
    storage = new Storage({projectId: PROJECT_ID});
  });

  describe('instantiation', () => {
    it('should extend the correct methods', () => {
      assert(extended);  // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', () => {
      assert.strictEqual(storage.getBucketsStream, 'getBuckets');
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should inherit from Service', () => {
      assert(storage instanceof Service);

      const calledWith = storage.calledWith_[0];

      const baseUrl = 'https://www.googleapis.com/storage/v1';
      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.strictEqual(calledWith.projectIdRequired, false);
      assert.deepStrictEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/iam',
        'https://www.googleapis.com/auth/cloud-platform',
        'https://www.googleapis.com/auth/devstorage.full_control',
      ]);
      assert.deepStrictEqual(
          calledWith.packageJson, require('../../package.json'));
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

  describe('createBucket', () => {
    const BUCKET_NAME = 'new-bucket-name';
    const METADATA = {a: 'b', c: {d: 'e'}};
    const BUCKET = {name: BUCKET_NAME};

    it('should make correct API request', done => {
      storage.request =
          (reqOpts: DecorateRequestOptions, callback: Function) => {
            assert.strictEqual(reqOpts.method, 'POST');
            assert.strictEqual(reqOpts.uri, '/b');
            assert.strictEqual(reqOpts.qs.project, storage.projectId);
            assert.strictEqual(reqOpts.json.name, BUCKET_NAME);

            callback();
          };

      storage.createBucket(BUCKET_NAME, done);
    });

    it('should accept a name, metadata, and callback', done => {
      storage.request =
          (reqOpts: DecorateRequestOptions, callback: Function) => {
            assert.deepStrictEqual(
                reqOpts.json, Object.assign(METADATA, {name: BUCKET_NAME}));
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
      storage.request =
          (reqOpts: DecorateRequestOptions, callback: Function) => {
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
      storage.request =
          (reqOpts: DecorateRequestOptions, callback: Function) => {
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
      storage.request =
          (reqOpts: DecorateRequestOptions, callback: Function) => {
            callback(error);
          };
      storage.createBucket(BUCKET_NAME, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should execute callback with apiResponse', done => {
      const resp = {success: true};
      storage.request =
          (reqOpts: DecorateRequestOptions, callback: Function) => {
            callback(null, resp);
          };
      storage.createBucket(
          BUCKET_NAME,
          (err: Error, bucket: Bucket, apiResponse: r.Response) => {
            assert.strictEqual(resp, apiResponse);
            done();
          });
    });

    describe('storage classes', () => {
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
            BUCKET_NAME, {
              multiRegional: true,
            },
            assert.ifError);
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

      storage.request =
          (reqOpts: DecorateRequestOptions, callback: Function) => {
            callback(error, apiResponse);
          };

      storage.getBuckets(
          {},
          (err: Error, buckets: Bucket[], nextQuery: {}, resp: r.Response) => {
            assert.strictEqual(err, error);
            assert.strictEqual(buckets, null);
            assert.strictEqual(nextQuery, null);
            assert.strictEqual(resp, apiResponse);
            done();
          });
    });

    it('should return nextQuery if more results exist', () => {
      const token = 'next-page-token';
      storage.request =
          (reqOpts: DecorateRequestOptions, callback: Function) => {
            callback(null, {nextPageToken: token, items: []});
          };
      storage.getBuckets(
          {maxResults: 5},
          (err: Error, results: {}, nextQuery: GetFilesOptions) => {
            assert.strictEqual(nextQuery.pageToken, token);
            assert.strictEqual(nextQuery.maxResults, 5);
          });
    });

    it('should return null nextQuery if there are no more results', () => {
      storage.request =
          (reqOpts: DecorateRequestOptions, callback: Function) => {
            callback(null, {items: []});
          };
      storage.getBuckets(
          {maxResults: 5}, (err: Error, results: {}, nextQuery: {}) => {
            assert.strictEqual(nextQuery, null);
          });
    });

    it('should return Bucket objects', done => {
      storage.request =
          (reqOpts: DecorateRequestOptions, callback: Function) => {
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
      storage.request =
          (reqOpts: DecorateRequestOptions, callback: Function) => {
            callback(null, resp);
          };
      storage.getBuckets(
          (err: Error, buckets: Bucket[], nextQuery: {}, apiResponse: {}) => {
            assert.deepStrictEqual(resp, apiResponse);
            done();
          });
    });

    it('should populate returned Bucket object with metadata', done => {
      const bucketMetadata = {
        id: 'bucketname',
        contentType: 'x-zebra',
        metadata: {
          my: 'custom metadata',
        },
      };
      storage.request =
          (reqOpts: DecorateRequestOptions, callback: Function) => {
            callback(null, {items: [bucketMetadata]});
          };
      storage.getBuckets((err: Error, buckets: Bucket[]) => {
        assert.ifError(err);
        assert.deepStrictEqual(buckets[0].metadata, bucketMetadata);
        done();
      });
    });
  });

  describe('getServiceAccount', () => {
    it('should make the correct request', done => {
      storage.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(
            reqOpts.uri, `/projects/${storage.projectId}/serviceAccount`);
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
        storage.request =
            (reqOpts: DecorateRequestOptions, callback: Function) => {
              callback(ERROR, API_RESPONSE);
            };
      });

      it('should return the error and apiResponse', done => {
        storage.getServiceAccount(
            (err: Error, serviceAccount: {}, apiResponse: r.Response) => {
              assert.strictEqual(err, ERROR);
              assert.strictEqual(serviceAccount, null);
              assert.strictEqual(apiResponse, API_RESPONSE);
              done();
            });
      });
    });

    describe('success', () => {
      const API_RESPONSE = {};

      beforeEach(() => {
        storage.request =
            (reqOpts: DecorateRequestOptions, callback: Function) => {
              callback(null, API_RESPONSE);
            };
      });

      it('should convert snake_case response to camelCase', done => {
        const apiResponse = {
          snake_case: true,
        };

        storage.request =
            (reqOpts: DecorateRequestOptions, callback: Function) => {
              callback(null, apiResponse);
            };

        storage.getServiceAccount(
            (err: Error,
             serviceAccount: {[index: string]: string|undefined}) => {
              assert.ifError(err);
              assert.strictEqual(
                  serviceAccount.snakeCase, apiResponse.snake_case);
              assert.strictEqual(serviceAccount.snake_case, undefined);
              done();
            });
      });

      it('should return the serviceAccount and apiResponse', done => {
        storage.getServiceAccount(
            (err: Error, serviceAccount: {}, apiResponse: {}) => {
              assert.ifError(err);
              assert.deepStrictEqual(serviceAccount, {});
              assert.strictEqual(apiResponse, API_RESPONSE);
              done();
            });
      });
    });
  });
});
