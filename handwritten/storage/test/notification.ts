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
import {describe, it, before, beforeEach} from 'mocha';
import {
  Bucket,
  GaxiosError,
  GaxiosOptionsPrepared,
  GaxiosResponse,
} from '../src/index.js';
import {Notification, Storage} from '../src/index.js';
import * as sinon from 'sinon';
import {StorageTransport} from '../src/storage-transport.js';

describe('Notification', () => {
  let notification: Notification;
  let BUCKET: Bucket;
  let storageTransport: StorageTransport;
  let storage: Storage;
  let sandbox: sinon.SinonSandbox;
  const ID = '123';

  before(() => {
    sandbox = sinon.createSandbox();
    storage = sandbox.createStubInstance(Storage);
    BUCKET = sandbox.createStubInstance(Bucket);
    storageTransport = sandbox.createStubInstance(StorageTransport);
    BUCKET.baseUrl = '';
    BUCKET.storage = storage;
    BUCKET.id = 'test-bucket';
    BUCKET.storage.storageTransport = storageTransport;
    BUCKET.storageTransport = storageTransport;
  });

  beforeEach(() => {
    notification = new Notification(BUCKET, ID);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('delete', () => {
    it('should make the correct request', done => {
      const options = {};

      BUCKET.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.method, 'DELETE');
          assert.strictEqual(
            reqOpts.url,
            '/test-bucket/notificationConfigs/123',
          );
          assert.deepStrictEqual(reqOpts.queryParameters, options);
          done();
          return Promise.resolve();
        });

      notification.delete(options, done);
    });

    it('should optionally accept options', done => {
      BUCKET.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.deepStrictEqual(reqOpts.queryParameters, {});
          done();
          return Promise.resolve();
        });

      notification.delete(done);
    });
  });

  describe('get', () => {
    it('should get the metadata', done => {
      sandbox.stub(notification, 'getMetadata').callsFake(() => {
        done();
      });

      notification.get(assert.ifError);
    });

    it('should accept an options object', done => {
      const options = {};

      sandbox.stub(notification, 'getMetadata').callsFake(options_ => {
        assert.deepStrictEqual(options_, options);
        done();
      });

      notification.get(options, assert.ifError);
    });

    it('should execute callback with error & metadata', done => {
      const error = new GaxiosError('Error.', {} as GaxiosOptionsPrepared);
      const metadata = {};

      notification.getMetadata = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback!(error, metadata);
          done();
        });

      notification.get((err, instance, metadata_) => {
        assert.strictEqual(err, error);
        assert.strictEqual(instance, null);
        assert.strictEqual(metadata_, metadata);
        done();
      });
    });

    it('should execute callback with instance & metadata', done => {
      const metadata = {};

      notification.getMetadata = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback!(null, metadata);
          done();
        });

      notification.get((err, instance, metadata_) => {
        assert.ifError(err);
        assert.strictEqual(instance, notification);
        assert.strictEqual(metadata_, metadata);
        done();
      });
    });

    describe('autoCreate', () => {
      let AUTO_CREATE_CONFIG: {};

      const ERROR = new GaxiosError('404', {} as GaxiosOptionsPrepared);
      ERROR.status = 404;
      const METADATA = {};

      beforeEach(() => {
        AUTO_CREATE_CONFIG = {
          autoCreate: true,
        };

        sandbox.stub(notification, 'getMetadata').callsFake(callback => {
          callback(ERROR, METADATA);
        });
      });

      it('should pass config to create if it was provided', async done => {
        const config = Object.assign(
          {},
          {
            maxResults: 5,
          },
        );

        sandbox.stub(notification, 'get').callsFake(config_ => {
          assert.deepStrictEqual(config_, config);
          done();
        });

        await notification.get(config);
      });

      describe('error', () => {
        it('should execute callback with error & APT response', done => {
          const error = new GaxiosError('Error.', {} as GaxiosOptionsPrepared);
          const apiResponse = {};
          sandbox.stub(notification, 'get').callsFake((config, callback) => {
            callback(error, null, apiResponse as GaxiosResponse);
          });
          sandbox.stub(notification, 'create').callsFake(callback => {
            callback(error, null, apiResponse);
            done();
          });

          notification.get(AUTO_CREATE_CONFIG, (err, instance, resp) => {
            assert.strictEqual(err, error);
            assert.strictEqual(instance, null);
            assert.strictEqual(resp, apiResponse);
            done();
          });
        });
      });
    });
  });

  describe('getMetadata', () => {
    it('should make the correct request', done => {
      const options = {};

      BUCKET.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(
            reqOpts.url,
            '/test-bucket/notificationConfigs/123',
          );
          assert.deepStrictEqual(reqOpts.queryParameters, options);
          done();
          return Promise.resolve();
        });

      notification.getMetadata(options, assert.ifError);
    });

    it('should optionally accept options', async done => {
      BUCKET.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.deepStrictEqual(reqOpts.queryParameters, {});
          done();
          return Promise.resolve();
        });

      await notification.getMetadata(assert.ifError);
    });

    it('should return any error to the callback', async () => {
      const error = new GaxiosError('err', {} as GaxiosOptionsPrepared);

      BUCKET.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(error);
          return Promise.resolve();
        });

      await notification.getMetadata((err: GaxiosError | null) => {
        assert.strictEqual(err, error);
      });
    });

    it('should set and return the metadata', async () => {
      const response = {};

      BUCKET.storageTransport.makeRequest = sandbox.stub().resolves();

      await notification.getMetadata((err: Error, metadata: {}, resp: {}) => {
        assert.ifError(err);
        assert.strictEqual(metadata, response);
        assert.strictEqual(notification.metadata, response);
        assert.strictEqual(resp, response);
      });
    });
  });
});
