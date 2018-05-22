/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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

import {Logger} from '@google-cloud/common';
import assert from 'assert';
import proxyquire from 'proxyquire';

import {Configuration, ConfigurationOptions} from '../../../src/configuration';

function verifyReportedMessage(
    config1: ConfigurationOptions, errToReturn: Error|null|undefined,
    expectedLogs: {error?: string; info?: string;}) {
  class ServiceStub {
    authClient: {};
    request: {};
    constructor() {
      this.authClient = {
        async getAccessToken() {
          throw errToReturn;
        },
      };
      this.request = () => {};
    }
  }

  const RequestHandler = proxyquire('../../../src/google-apis/auth-client', {
                           '@google-cloud/common': {
                             Service: ServiceStub,
                           },
                         }).RequestHandler;

  const logs: {error?: string; info?: string;} = {};
  const logger = {
    error(text: string) {
      if (!logs.error) {
        logs.error = '';
      }
      logs.error += text;
    },
    info(text: string) {
      if (!logs.info) {
        logs.info = '';
      }
      logs.info += text;
    },
  } as {} as Logger;
  const config2 = new Configuration(config1, logger);
  // tslint:disable-next-line:no-unused-expression
  new RequestHandler(config2, logger);
  setImmediate(() => {
    assert.deepStrictEqual(logs, expectedLogs);
  });
}
describe('RequestHandler', () => {
  it('should not request OAuth2 token if key is provided', () => {
    const config = {
      ignoreEnvironmentCheck: true,
      key: 'key',
    };
    const message = 'Made OAuth2 Token Request';
    verifyReportedMessage(config, new Error(message), {
      info: 'API key provided; skipping OAuth2 token request.',
    });
  });

  it('should issue a warning if it cannot communicate with the API', () => {
    const config = {ignoreEnvironmentCheck: true};
    const message = 'Test Error';
    verifyReportedMessage(config, new Error(message), {
      error: 'Unable to find credential information on instance. This ' +
          'library will be unable to communicate with the Stackdriver API to ' +
          'save errors.  Message: ' + message,
    });
  });

  it('should not issue a warning if it can communicate with the API', () => {
    const config = {ignoreEnvironmentCheck: true};
    verifyReportedMessage(config, null, {});
    verifyReportedMessage(config, undefined, {});
  });
});
