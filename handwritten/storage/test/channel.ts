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

/*!
 * @module storage/channel
 */

import assert from 'assert';
import {describe, it, before, beforeEach} from 'mocha';
import {Channel} from '../src/channel.js';
import {Storage} from '../src/storage.js';
import * as sinon from 'sinon';
import {GaxiosError} from 'gaxios';
import {StorageTransport} from '../src/storage-transport.js';

describe('Channel', () => {
  let STORAGE: Storage;
  const ID = 'channel-id';
  const RESOURCE_ID = 'resource-id';
  let channel: Channel;
  let sandbox: sinon.SinonSandbox;
  let storageTransport: StorageTransport;

  before(() => {
    sandbox = sinon.createSandbox();
    storageTransport = sandbox.createStubInstance(StorageTransport);
    STORAGE = sandbox.createStubInstance(Storage);
    STORAGE.storageTransport = storageTransport;
  });

  beforeEach(() => {
    channel = new Channel(STORAGE, ID, RESOURCE_ID);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('initialization', () => {
    it('should set the default metadata', () => {
      assert.deepStrictEqual(channel.metadata, {
        id: ID,
        resourceId: RESOURCE_ID,
      });
    });
  });

  describe('stop', () => {
    it('should make the correct request', () => {
      channel.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake(reqOpts => {
          assert.strictEqual(reqOpts.method, 'POST');
          assert.strictEqual(reqOpts.url, '/channels/stop');
          assert.deepStrictEqual(JSON.parse(reqOpts.body), channel.metadata);

          return Promise.resolve();
        });

      channel.stop(assert.ifError);
    });

    it('should execute callback with an error & API response', () => {
      const error = {};
      const apiResponse = {};

      channel.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          callback(error as GaxiosError, null, apiResponse);
          return Promise.resolve();
        });

      channel.stop((err, apiResponse_) => {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
      });
    });

    it('should not require a callback', async () => {
      channel.storageTransport.makeRequest = sandbox
        .stub()
        .callsFake((reqOpts, callback) => {
          assert.doesNotThrow(() => callback());
          return Promise.resolve();
        });

      await channel.stop();
    });

    it('should call the callback with an error if the promise rejects', () => {
      const error = new Error('Promise rejection');
      channel.storageTransport.makeRequest = sandbox
        .stub()
        .returns(Promise.reject(error));

      channel.stop(err => {
        assert.strictEqual(err, error);
      });
    });
  });
});
