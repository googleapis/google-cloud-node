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

import * as sinon from 'sinon';
import * as proxyquire from 'proxyquire';
import * as assert from 'assert';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {util, ServiceObject, Metadata} from '../src/nodejs-common';
import {IdempotencyStrategy} from '../src';

const sandbox = sinon.createSandbox();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let STORAGE: any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let hmacKey: any;

const ACCESS_ID = 'fake-access-id';

class HTTPError extends Error {
  code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
}

describe('HmacKey', () => {
  afterEach(() => sandbox.restore());

  describe('initialization', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let serviceObjectSpy: sinon.SinonSpy;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let commonModule: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let HmacKey: any;

    beforeEach(() => {
      commonModule = {ServiceObject};
      serviceObjectSpy = sandbox.spy(commonModule, 'ServiceObject');

      HmacKey = proxyquire('../src/hmacKey', {
        './nodejs-common': commonModule,
      }).HmacKey;

      STORAGE = {
        request: util.noop,
        projectId: 'my-project',
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

      hmacKey = new HmacKey(STORAGE, ACCESS_ID);
    });

    it('should inherit from ServiceObject', () => {
      assert(hmacKey instanceof ServiceObject);
      const ctorArg = serviceObjectSpy.firstCall.args[0];
      assert(ctorArg.parent, STORAGE);
      assert(ctorArg.id, ACCESS_ID);
      assert(ctorArg.baseUrl, '/projects/my-project/hmacKeys');
      assert.deepStrictEqual(ctorArg.methods, {
        delete: true,
        get: true,
        getMetadata: true,
        setMetadata: {
          reqOpts: {
            method: 'PUT',
          },
        },
      });
    });

    it('should form baseUrl using options.projectId if given', () => {
      hmacKey = new HmacKey(STORAGE, ACCESS_ID, {projectId: 'another-project'});
      const ctorArg = serviceObjectSpy.firstCall.args[0];
      assert(ctorArg.baseUrl, '/projects/another-project/hmacKeys');
    });

    it('should correctly call setMetadata', done => {
      hmacKey.setMetadata = (metadata: Metadata, callback: Function) => {
        assert.deepStrictEqual(metadata.accessId, ACCESS_ID);
        Promise.resolve([]).then(resp => callback(null, ...resp));
      };

      hmacKey.setMetadata({accessId: ACCESS_ID}, done);
    });
  });
});
