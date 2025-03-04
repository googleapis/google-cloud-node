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
import {describe, it, beforeEach} from 'mocha';
import {Iam} from '../src/iam.js';
import {Bucket} from '../src/bucket.js';
import * as sinon from 'sinon';
import {GaxiosError} from 'gaxios';
import {StorageTransport} from '../src/storage-transport.js';

describe('storage/iam', () => {
  let iam: Iam;
  let sandbox: sinon.SinonSandbox;
  let BUCKET_INSTANCE: Bucket;
  let storageTransport: StorageTransport;
  const id = 'bucket-id';

  before(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    storageTransport = sandbox.createStubInstance(StorageTransport);
    BUCKET_INSTANCE = sandbox.createStubInstance(Bucket, {
      getId: id,
    });
    BUCKET_INSTANCE.id = id;
    BUCKET_INSTANCE.storageTransport = storageTransport;
    iam = new Iam(BUCKET_INSTANCE);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('getPolicy', () => {
    it('should make the correct api request', done => {
      BUCKET_INSTANCE.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          assert.deepStrictEqual(reqOpts, {
            url: '/iam',
            queryParameters: {},
          });
          callback(null);
          return Promise.resolve();
        });

      iam.getPolicy(done);
    });

    it('should accept an options object', () => {
      const options = {
        userProject: 'grape-spaceship-123',
      };

      BUCKET_INSTANCE.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.deepStrictEqual(reqOpts.queryParameters, options);
          return Promise.resolve({data: {}, resp: {}});
        });

      iam.getPolicy(options, assert.ifError);
    });

    it('should map requestedPolicyVersion option to optionsRequestedPolicyVersion', () => {
      const VERSION = 3;
      const options = {
        requestedPolicyVersion: VERSION,
      };

      BUCKET_INSTANCE.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.deepStrictEqual(reqOpts.queryParameters, {
            optionsRequestedPolicyVersion: VERSION,
          });
          return Promise.resolve({data: {}, resp: {}});
        });

      iam.getPolicy(options, assert.ifError);
    });
  });

  describe('setPolicy', () => {
    it('should make the correct API request', done => {
      const policy = {
        bindings: [{role: 'role', members: ['member']}],
      };

      BUCKET_INSTANCE.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          assert.deepStrictEqual(reqOpts, {
            method: 'PUT',
            url: '/iam',
            maxRetries: 0,
            body: Object.assign(policy, {resourceId: `buckets/${id}`}),
            queryParameters: {},
          });
          callback(null);
          return Promise.resolve({data: {}, resp: {}});
        });

      iam.setPolicy(policy, done);
    });

    it('should accept an options object', () => {
      const policy = {
        bindings: [{role: 'role', members: ['member']}],
      };

      const options = {
        userProject: 'grape-spaceship-123',
      };

      BUCKET_INSTANCE.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.queryParameters, options);
          return Promise.resolve();
        });

      iam.setPolicy(policy, options, assert.ifError);
    });
  });

  describe('testPermissions', () => {
    it('should make the correct API request', () => {
      const permissions = 'storage.bucket.list';

      BUCKET_INSTANCE.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.deepStrictEqual(reqOpts, {
            url: '/iam/testPermissions',
            queryParameters: {
              permissions: [permissions],
            },
          });
          return Promise.resolve();
        });

      iam.testPermissions(permissions, assert.ifError);
    });

    it('should send an error back if the request fails', () => {
      const permissions = ['storage.bucket.list'];
      const error = new GaxiosError('Error.', {});

      BUCKET_INSTANCE.storageTransport.makeRequest = sandbox
        .stub()
        .rejects(error);

      iam.testPermissions(permissions, err => {
        assert.strictEqual(err, error);
      });
    });

    it('should pass back a hash of permissions the user has', () => {
      const permissions = ['storage.bucket.list', 'storage.bucket.consume'];
      const apiResponse = {
        permissions: ['storage.bucket.consume'],
      };

      BUCKET_INSTANCE.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(null, apiResponse, apiResponse);
          return Promise.resolve();
        });

      iam.testPermissions(permissions, (err, permissionsResult, apiResp) => {
        assert.ifError(err);
        assert.deepStrictEqual(permissionsResult, {
          'storage.bucket.list': false,
          'storage.bucket.consume': true,
        });
        assert.strictEqual(apiResp, apiResponse);
      });
    });

    it('should return false for supplied permissions if user has no permissions', done => {
      const permissions = ['storage.bucket.list', 'storage.bucket.consume'];
      const apiResponse = {permissions: undefined};

      BUCKET_INSTANCE.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(null, apiResponse, apiResponse);
          return Promise.resolve();
        });

      iam.testPermissions(permissions, (err, permissionsResult, apiResp) => {
        assert.ifError(err);
        assert.deepStrictEqual(permissionsResult, {
          'storage.bucket.list': false,
          'storage.bucket.consume': false,
        });
        assert.strictEqual(apiResp, apiResponse);

        done();
      });
    });

    it('should accept an options object', () => {
      const permissions = ['storage.bucket.list'];
      const options = {
        userProject: 'grape-spaceship-123',
      };

      const expectedQuery = Object.assign(
        {
          permissions,
        },
        options,
      );

      BUCKET_INSTANCE.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.deepStrictEqual(reqOpts.queryParameters, expectedQuery);
          return Promise.resolve();
        });

      iam.testPermissions(permissions, options, assert.ifError);
    });
  });
});
