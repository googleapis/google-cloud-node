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
    ...actual,
    GoogleAuth: class {
      getProjectId = async () => 'fake-project-id';
      authorizeRequest = async (rOpts: any) => rOpts;
      getCredentials = () => ({});
    }
  };
});

import * as common from '../src';

jest.mock('teeny-request', () => {
  const http = require('http');
  const urlModule = require('url');

  const teenyRequest = (reqOpts: any, callback: any) => {
    try {
      const urlStr = reqOpts.uri || reqOpts.url;
      if (urlStr.includes('/mock-endpoint-no-response')) {
        const err: any = new Error('connect ECONNREFUSED 127.0.0.1:8118');
        err.code = 'ECONNREFUSED';
        setImmediate(() => callback(err));
        return;
      }

      const parsedUrl = urlModule.parse(urlStr);
      
      const options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port,
        path: parsedUrl.path,
        method: reqOpts.method || 'GET',
        headers: reqOpts.headers || {},
      };

      const req = http.request(options, (res: any) => {
        let data = '';
        res.on('data', (chunk: any) => {
          data += chunk;
        });
        res.on('end', () => {
          let body = data;
          try {
            body = JSON.parse(data);
          } catch {}
          const response = {
            statusCode: res.statusCode,
            statusMessage: res.statusMessage,
            headers: res.headers,
            body,
          };
          callback(null, response, body);
        });
      });

      req.on('error', (err: any) => {
        callback(err);
      });

      if (reqOpts.body) {
        req.write(reqOpts.body);
      } else if (reqOpts.json) {
        req.write(JSON.stringify(reqOpts.json));
      }

      req.end();
    } catch (err) {
      callback(err);
    }
  };

  (teenyRequest as any).defaults = () => teenyRequest;
  return { teenyRequest };
});

describe('Common', () => {
  const MOCK_HOST_PORT = 8118;
  const MOCK_HOST = `http://127.0.0.1:${MOCK_HOST_PORT}`;

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

    it('should send a request and receive a response', done => {
      const mockResponse = 'response';
      nock(MOCK_HOST)
        .get('/projects/fake-project-id/mock-endpoint')
        .reply(200, mockResponse);

      service.request(
        {
          uri: '/mock-endpoint',
        },
        (err, resp) => {
          try {
            expect(err).toBeNull();
            expect(resp).toBe(mockResponse);
            done();
          } catch (e) {
            done(e);
          }
        },
      );
    });

    it(
      'should retry a request',
      done => {
        let numRequestAttempts = 0;
        nock(MOCK_HOST)
          .get('/projects/fake-project-id/mock-endpoint-retry')
          .times(4)
          .reply(uri => {
            numRequestAttempts++;
            return [408, ''];
          });

        service.request(
          {
            uri: '/mock-endpoint-retry',
          },
          err => {
            try {
              expect((err! as common.ApiError).code).toBe(408);
              expect(numRequestAttempts).toBe(4);
              done();
            } catch (e) {
              done(e);
            }
          },
        );
      },
      60000,
    );

    it(
      'should retry non-responsive hosts',
      done => {

        function getMinimumRetryDelay(retryNumber: number) {
          return Math.pow(2, retryNumber) * 1000;
        }

        let minExpectedResponseTime = 0;
        let numExpectedRetries = 2;

        while (numExpectedRetries--) {
          minExpectedResponseTime += getMinimumRetryDelay(numExpectedRetries + 1);
        }

        const timeRequest = Date.now();

        service.request(
          {
            uri: '/mock-endpoint-no-response',
          },
          err => {
            try {
              expect(err?.message).toContain('ECONNREFUSED');
              const timeResponse = Date.now();
              expect(timeResponse - timeRequest).toBeGreaterThan(minExpectedResponseTime);
              done();
            } catch (e) {
              done(e);
            }
          },
        );
      },
      60000,
    );
  });
});
