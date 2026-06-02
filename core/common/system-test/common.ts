// Copyright 2020 Google LLC
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

import * as nock from 'nock';

jest.mock('google-auth-library', () => {
  const actual = jest.requireActual('google-auth-library');
  return {
    AuthClient: actual.AuthClient,
    GoogleAuth: class {
      async getProjectId() {
        return 'fake-project-id';
      }
      async authorizeRequest(req: any) {
        return req;
      }
      getCredentials() {}
    },
  };
});

jest.mock('teeny-request', () => {
  const teenyRequest = (reqOpts: any, callback: any) => {
    const http = require('http');
    const urlModule = require('url');
    const parsed = urlModule.parse(reqOpts.uri || reqOpts.url);
    const req = http.request(
      {
        ...parsed,
        method: reqOpts.method || 'GET',
        headers: reqOpts.headers,
      },
      (res: any) => {
        let data = '';
        res.on('data', (chunk: any) => {
          data += chunk;
        });
        res.on('end', () => {
          const response = {
            statusCode: res.statusCode,
            statusMessage: res.statusMessage,
            headers: res.headers,
            body: data,
          };
          if (callback) {
            callback(null, response, data);
          }
        });
      }
    );
    req.on('error', (err: any) => {
      if (callback) {
        callback(err);
      }
    });
    if (reqOpts.body) {
      req.write(reqOpts.body);
    }
    req.end();

    return {
      abort() {
        req.destroy();
      },
    };
  };

  teenyRequest.defaults = (requestDefaults: any) => {
    return (reqOpts: any, callback: any) => {
      return teenyRequest(Object.assign({}, requestDefaults, reqOpts), callback);
    };
  };

  return {
    teenyRequest,
    __esModule: true,
  };
});

import * as common from '../src';

describe('Common', () => {
  const MOCK_HOST = 'http://localhost';

  describe('Service', () => {
    let service: common.Service;

    beforeAll(() => {
      service = new common.Service({
        baseUrl: MOCK_HOST,
        apiEndpoint: MOCK_HOST,
        scopes: [],
        packageJson: {name: 'tests', version: '1.0.0'},
      });
    });

    afterAll(() => {
      nock.cleanAll();
    });

    it('should send a request and receive a response', done => {
      const mockResponse = 'response';
      const scope = nock(MOCK_HOST)
        .get('/mock-endpoint')
        .reply(200, mockResponse);

      service.request(
        {
          uri: 'http://localhost/mock-endpoint',
        },
        (err, resp) => {
          try {
            expect(err).toBeNull();
            expect(resp).toBe(mockResponse);
            scope.done();
            done();
          } catch (e) {
            done(e);
          }
        },
      );
    });

    it('should retry a request', done => {
      let numRequestAttempts = 0;
      const scope = nock(MOCK_HOST)
        .get('/mock-endpoint-retry')
        .times(4)
        .reply(() => {
          numRequestAttempts++;
          return [408, ''];
        });

      service.request(
        {
          uri: 'http://localhost/mock-endpoint-retry',
        },
        err => {
          try {
            expect((err! as common.ApiError).code).toBe(408);
            expect(numRequestAttempts).toBe(4);
            scope.done();
            done();
          } catch (e) {
            done(e);
          }
        },
      );
    }, 60000);

    it('should retry non-responsive hosts', done => {
      function getMinimumRetryDelay(retryNumber: number) {
        return Math.pow(2, retryNumber) * 1000;
      }

      let minExpectedResponseTime = 0;
      let numExpectedRetries = 2;

      while (numExpectedRetries--) {
        minExpectedResponseTime += getMinimumRetryDelay(numExpectedRetries + 1);
      }

      const scope = nock(MOCK_HOST).persist();
      const connRefusedError = new Error('connect ECONNREFUSED 127.0.0.1:1');
      (connRefusedError as any).code = 'ECONNREFUSED';
      scope
        .get('/mock-endpoint-no-response')
        .replyWithError(connRefusedError);

      const timeRequest = Date.now();

      service.request(
        {
          uri: 'http://localhost/mock-endpoint-no-response',
        },
        err => {
          try {
            expect(err?.message).toContain('ECONNREFUSED');
            const timeResponse = Date.now();
            expect(timeResponse - timeRequest).toBeGreaterThan(minExpectedResponseTime);
            scope.done();
            done();
          } catch (e) {
            done(e);
          }
        },
      );
    }, 60000);
  });
});
