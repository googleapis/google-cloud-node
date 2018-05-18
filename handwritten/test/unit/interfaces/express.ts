/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import assert from 'assert';
import merge = require('lodash.merge');

import {ErrorMessage} from '../../../src/classes/error-message';
import {RequestHandler} from '../../../src/google-apis/auth-client';
import {makeExpressHandler as expressInterface} from '../../../src/interfaces/express';
import {createLogger} from '../../../src/logger';
import {Fuzzer} from '../../../utils/fuzzer';
import {FakeConfiguration as Configuration} from '../../fixtures/configuration';

describe('expressInterface', () => {
  describe('Exception handling', () => {
    describe('Given invalid input', () => {
      it('Should not throw errors', () => {
        const f = new Fuzzer();
        assert.doesNotThrow(() => {
          f.fuzzFunctionForTypes(expressInterface, ['object', 'object']);
          return;
        });
      });
    });
  });
  describe('Intended behaviour', () => {
    const stubbedConfig = new Configuration(
        {
          serviceContext: {
            service: 'a_test_service',
            version: 'a_version',
          },
        },
        createLogger({logLevel: 4}));
    (stubbedConfig as {} as {lacksCredentials: Function}).lacksCredentials =
        () => {
          return false;
        };
    const client = {
      sendError() {
        return;
      },
    };
    const testError = new Error('This is a test');
    const validBoundHandler =
        expressInterface(client as {} as RequestHandler, stubbedConfig);
    it('Should return the error message', () => {
      const res = validBoundHandler(testError, null!, null!, null!);
      assert.deepEqual(
          res,
          merge(
              new ErrorMessage()
                  .setMessage(testError.stack!)
                  .setServiceContext(
                      stubbedConfig._serviceContext.service,
                      stubbedConfig._serviceContext.version),
              {eventTime: res.eventTime}));
    });
    describe('Calling back to express builtins', () => {
      it('Should callback to next', done => {
        const nextCb = () => {
          done();
        };
        validBoundHandler(testError, null!, null!, nextCb);
      });
      it('Should callback to sendError', done => {
        const sendError = () => {
          done();
        };
        const client = {
          sendError,
        };
        const handler =
            expressInterface(client as {} as RequestHandler, stubbedConfig);
        handler(testError, null!, null!, () => {
          return;
        });
      });
    });
  });
});
