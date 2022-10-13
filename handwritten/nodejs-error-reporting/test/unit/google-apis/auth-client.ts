// Copyright 2017 Google LLC
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

import * as proxyquire from 'proxyquire';
import {describe, beforeEach, afterEach, it} from 'mocha';

import {
  Configuration,
  ConfigurationOptions,
  Logger,
} from '../../../src/configuration';
import {deepStrictEqual} from '../../util';

function verifyReportedMessage(
  config1: ConfigurationOptions,
  errToReturn: Error | null | undefined,
  expectedLogs: {error?: string; info?: string; warn?: string},
  done: () => void
) {
  class ServiceStub {
    authClient: {};
    request: {};
    constructor() {
      this.authClient = {
        async getAccessToken() {
          if (errToReturn) {
            throw errToReturn;
          }
          return 'some-token';
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

  const logs: {error?: string; info?: string; warn?: string} = {};
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
    warn(text: string) {
      if (!logs.warn) {
        logs.warn = '';
      }
      logs.warn += text;
    },
  } as {} as Logger;
  const config2 = new Configuration(config1, logger);
  // tslint:disable-next-line:no-unused-expression
  new RequestHandler(config2, logger);
  setImmediate(() => {
    deepStrictEqual(logs, expectedLogs);
    done();
  });
}
describe('RequestHandler', () => {
  let nodeEnv: string | undefined;
  beforeEach(() => {
    nodeEnv = process.env.NODE_ENV;
  });

  afterEach(() => {
    if (nodeEnv === undefined) {
      delete process.env.NODE_ENV;
    } else {
      process.env.NODE_ENV = nodeEnv;
    }
  });

  it('should not request OAuth2 token if key is provided', function (done) {
    this.timeout(8000);
    const config: ConfigurationOptions = {
      reportMode: 'always',
      key: 'key',
    };
    const message = 'Made OAuth2 Token Request';
    verifyReportedMessage(
      config,
      new Error(message),
      {
        info: 'API key provided; skipping OAuth2 token request.',
      },
      done
    );
  });

  it('should not request OAuth2 token if error reporting is disabled', done => {
    verifyReportedMessage(
      {reportMode: 'never'},
      null, // no access token error
      {
        info: 'Not configured to send errors to the API; skipping Google Cloud API Authentication.',
      },
      done
    );
  });

  it('should not issue a warning if disabled and can communicate with the API', done => {
    process.env.NODE_ENV = 'production';
    verifyReportedMessage(
      {reportMode: 'never'},
      null, // no access token error
      {
        info: 'Not configured to send errors to the API; skipping Google Cloud API Authentication.',
      },
      done
    );
  });

  it('should not issue a warning if disabled and cannot communicate with the API', done => {
    process.env.NODE_ENV = 'dev';
    verifyReportedMessage(
      {reportMode: 'never'},
      null, // no access token error
      {
        info: 'Not configured to send errors to the API; skipping Google Cloud API Authentication.',
      },
      done
    );
  });

  it('should not issue a warning if enabled and can communicate with the API', done => {
    process.env.NODE_ENV = 'production';
    verifyReportedMessage(
      {reportMode: 'production'},
      null, // no access token error
      {}, // no expected logs
      done
    );
  });

  it('should not issue a warning with a default config and can communicate with the API', done => {
    process.env.NODE_ENV = 'production';
    verifyReportedMessage(
      {},
      null, // no access token error
      {}, // no expected logs
      done
    );
  });

  it('should not issue a warning if it can communicate with the API', (done: () => void) => {
    const config = {ignoreEnvironmentCheck: true};
    const warn =
      'The "ignoreEnvironmentCheck" config option is deprecated.  ' +
      'Use the "reportMode" config option instead.';
    verifyReportedMessage(config, null, {warn}, () => {
      verifyReportedMessage(config, undefined, {warn}, done);
    });
  });

  it('should issue a warning if enabled and cannot communicate with the API', done => {
    process.env.NODE_ENV = 'dev';
    verifyReportedMessage(
      {reportMode: 'production'},
      null, // no access token error
      {
        info: 'Not configured to send errors to the API; skipping Google Cloud API Authentication.',
        warn:
          'The error reporting client is configured to report ' +
          'errors if and only if the NODE_ENV environment variable is set to ' +
          '"production". Errors will not be reported.  To have errors always ' +
          'reported, regardless of the value of NODE_ENV, set the reportMode ' +
          'configuration option to "always".',
      },
      done
    );
  });

  it('should issue a warning with a default config and cannot communicate with the API', done => {
    process.env.NODE_ENV = 'dev';
    verifyReportedMessage(
      {},
      null, // no access token error
      {
        info: 'Not configured to send errors to the API; skipping Google Cloud API Authentication.',
        warn:
          'The error reporting client is configured to report ' +
          'errors if and only if the NODE_ENV environment variable is set to ' +
          '"production". Errors will not be reported.  To have errors always ' +
          'reported, regardless of the value of NODE_ENV, set the reportMode ' +
          'configuration option to "always".',
      },
      done
    );
  });

  it('should issue a warning if it cannot communicate with the API', (done: () => void) => {
    const config = {ignoreEnvironmentCheck: true};
    const message = 'Test Error';
    verifyReportedMessage(
      config,
      new Error(message),
      {
        error:
          'Unable to find credential information on instance. This ' +
          'library will be unable to communicate with the Google Cloud API to ' +
          'save errors.  Message: ' +
          message,
        warn:
          'The "ignoreEnvironmentCheck" config option is deprecated.  ' +
          'Use the "reportMode" config option instead.',
      },
      done
    );
  });
});
