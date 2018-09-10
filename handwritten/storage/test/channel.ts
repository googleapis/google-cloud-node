/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
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

/*!
 * @module storage/channel
 */

'use strict';

import * as assert from 'assert';
import * as proxyquire from 'proxyquire';
import {ServiceObject, ServiceObjectConfig} from '@google-cloud/common';

let promisified = false;
const fakePromisify = {
  // tslint:disable-next-line:variable-name
  promisifyAll(Class) {
    if (Class.name === 'Channel') {
      promisified = true;
    }
  },
};

class FakeServiceObject extends ServiceObject {
  calledWith_: IArguments;
  constructor(config: ServiceObjectConfig) {
    super(config);
    this.calledWith_ = arguments;
  }
}

describe('Channel', () => {
  const STORAGE = {};
  const ID = 'channel-id';
  const RESOURCE_ID = 'resource-id';

  // tslint:disable-next-line:variable-name
  let Channel;
  let channel;

  before(() => {
    Channel = proxyquire('../src/channel.js', {
                '@google-cloud/promisify': fakePromisify,
                '@google-cloud/common': {
                  ServiceObject: FakeServiceObject,
                },
              }).Channel;
  });

  beforeEach(() => {
    channel = new Channel(STORAGE, ID, RESOURCE_ID);
  });

  describe('initialization', () => {
    it('should inherit from ServiceObject', () => {
      assert(channel instanceof ServiceObject);

      const calledWith = channel.calledWith_[0];

      assert.strictEqual(calledWith.parent, STORAGE);
      assert.strictEqual(calledWith.baseUrl, '/channels');
      assert.strictEqual(calledWith.id, '');
      assert.deepStrictEqual(calledWith.methods, {});
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should set the default metadata', () => {
      assert.deepStrictEqual(channel.metadata, {
        id: ID,
        resourceId: RESOURCE_ID,
      });
    });
  });

  describe('stop', () => {
    it('should make the correct request', done => {
      channel.request = reqOpts => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/stop');
        assert.strictEqual(reqOpts.json, channel.metadata);

        done();
      };

      channel.stop(assert.ifError);
    });

    it('should execute callback with error & API response', done => {
      const error = {};
      const apiResponse = {};

      channel.request = (reqOpts, callback) => {
        callback(error, apiResponse);
      };

      channel.stop((err, apiResponse_) => {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should not require a callback', done => {
      channel.request = (reqOpts, callback) => {
        assert.doesNotThrow(callback);
        done();
      };

      channel.stop();
    });
  });
});
