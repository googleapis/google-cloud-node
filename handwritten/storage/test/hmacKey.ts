/**
 * Copyright 2019 Google LLC
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

import * as sinon from 'sinon';
import * as proxyquire from 'proxyquire';
import * as assert from 'assert';
import {util, ServiceObject} from '@google-cloud/common';

// tslint:disable-next-line: no-any
let sandbox: sinon.SinonSandbox;
// tslint:disable-next-line: no-any
let STORAGE: any;
// tslint:disable-next-line: no-any
let hmacKey: any;

const ACCESS_ID = 'fake-access-id';

describe('HmacKey', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('initialization', () => {
    // tslint:disable-next-line: no-any
    let serviceObjectSpy: sinon.SinonSpy;
    // tslint:disable-next-line: no-any
    let commonModule: any;
    // tslint:disable-next-line: no-any variable-name
    let HmacKey: any;

    beforeEach(() => {
      commonModule = {ServiceObject};
      serviceObjectSpy = sandbox.spy(commonModule, 'ServiceObject');

      HmacKey = proxyquire('../src/hmacKey', {
        '@google-cloud/common': commonModule,
      }).HmacKey;

      STORAGE = {
        request: util.noop,
        projectId: 'my-project',
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
  });
});
