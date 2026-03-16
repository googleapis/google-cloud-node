// Copyright 2014 Google LLC
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

import * as assert from 'assert';
import {describe, it, before, beforeEach} from 'mocha';
import * as proxyquire from 'proxyquire';

import * as iamTypes from '../src/iam';
import {PubSub, RequestConfig} from '../src/pubsub';
import * as util from '../src/util';

let promisified = false;
const fakeUtil = Object.assign({}, util, {
  promisifySome(
    class_: Function,
    classProtos: object,
    methods: string[],
  ): void {
    if (class_.name === 'IAM') {
      promisified = true;
      assert.deepStrictEqual(methods, [
        'getPolicy',
        'setPolicy',
        'testPermissions',
      ]);
    }
    // Defeats the method name type check.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    util.promisifySome(class_, classProtos, methods as any);
  },
});

describe('IAM', () => {
  let IAM: typeof iamTypes.IAM;
  let iam: iamTypes.IAM;

  const PUBSUB = {
    options: {},
    request: util.noop,
  } as {} as PubSub;
  const ID = 'id';

  before(() => {
    IAM = proxyquire('../src/iam.js', {
      './util': fakeUtil,
    }).IAM;
  });

  beforeEach(() => {
    iam = new IAM(PUBSUB, ID);
  });

  describe('initialization', () => {
    it('should localize pubsub', () => {
      assert.strictEqual(iam.pubsub, PUBSUB);
    });

    it('should localize pubsub#request', () => {
      const fakeRequest = () => {};
      const fakePubsub = {
        request: {
          bind(context: PubSub) {
            assert.strictEqual(context, fakePubsub);
            return fakeRequest;
          },
        },
      } as {} as PubSub;
      const iam = new IAM(fakePubsub, ID);

      assert.strictEqual(iam.request, fakeRequest);
    });

    it('should localize the ID string', () => {
      assert.strictEqual(iam.id, ID);
    });

    it('should localize the ID getter', () => {
      iam = new IAM(PUBSUB, {
        get name() {
          return 'test';
        },
      });
      assert.strictEqual(iam.id, 'test');
    });

    it('should promisify some of the things', () => {
      assert(promisified);
    });
  });

  describe('getPolicy', () => {
    it('should make the correct API request', done => {
      iam.request = config => {
        const reqOpts = {resource: iam.id};
        assert.strictEqual(config.client, 'SubscriberClient');
        assert.strictEqual(config.method, 'getIamPolicy');
        assert.deepStrictEqual(config.reqOpts, reqOpts);

        done();
      };

      iam.getPolicy(assert.ifError);
    });

    it('should accept gax options', done => {
      const gaxOpts = {};

      iam.request = config => {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        done();
      };

      iam.getPolicy(gaxOpts, assert.ifError);
    });
  });

  describe('setPolicy', () => {
    const policy: iamTypes.Policy = {etag: 'ACAB', bindings: []};

    it('should throw an error if a policy is not supplied', () => {
      assert.throws(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (iam as any).setPolicy(util.noop);
      }, /A policy object is required\./);
    });

    it('should make the correct API request', done => {
      iam.request = config => {
        const reqOpts = {resource: iam.id, policy};
        assert.strictEqual(config.client, 'SubscriberClient');
        assert.strictEqual(config.method, 'setIamPolicy');
        assert.deepStrictEqual(config.reqOpts, reqOpts);

        done();
      };

      iam.setPolicy(policy, assert.ifError);
    });

    it('should accept gax options', done => {
      const gaxOpts = {};

      iam.request = (config: RequestConfig) => {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        done();
      };

      iam.setPolicy(policy, gaxOpts, assert.ifError);
    });
  });

  describe('testPermissions', () => {
    it('should throw an error if permissions are missing', () => {
      assert.throws(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (iam as any).testPermissions(util.noop);
      }, /Permissions are required\./);
    });

    it('should make the correct API request', done => {
      const permissions = 'storage.bucket.list';
      const reqOpts = {resource: iam.id, permissions: [permissions]};

      iam.request = config => {
        assert.strictEqual(config.client, 'SubscriberClient');
        assert.strictEqual(config.method, 'testIamPermissions');
        assert.deepStrictEqual(config.reqOpts, reqOpts);

        done();
      };

      iam.testPermissions(permissions, assert.ifError);
    });

    it('should accept gax options', done => {
      const permissions = 'storage.bucket.list';
      const gaxOpts = {};

      iam.request = config => {
        assert.strictEqual(config.gaxOpts, gaxOpts);
        done();
      };

      iam.testPermissions(permissions, gaxOpts, assert.ifError);
    });

    it('should send an error back if the request fails', done => {
      const permissions = ['storage.bucket.list'];
      const error = new Error('Error.');
      const apiResponse = {};

      iam.request = (config, callback: Function) => {
        callback(error, apiResponse);
      };

      iam.testPermissions(permissions, (err, permissions, apiResp) => {
        assert.strictEqual(err, error);
        assert.strictEqual(permissions, null);
        assert.strictEqual(apiResp, apiResponse);
        done();
      });
    });

    it('should pass back a hash of permissions the user has', done => {
      const permissions = ['storage.bucket.list', 'storage.bucket.consume'];
      const apiResponse = {
        permissions: ['storage.bucket.consume'],
      };

      iam.request = (config, callback: Function) => {
        callback(null, apiResponse);
      };

      iam.testPermissions(permissions, (err, permissions, apiResp) => {
        assert.ifError(err);
        assert.deepStrictEqual(permissions, {
          'storage.bucket.list': false,
          'storage.bucket.consume': true,
        });
        assert.strictEqual(apiResp, apiResponse);

        done();
      });
    });
  });
});
