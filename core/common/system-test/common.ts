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

import * as http from 'http';

import * as common from '../src';

describe('Common', () => {
  const MOCK_HOST_PORT = 8118;
  const MOCK_HOST = `http://localhost:${MOCK_HOST_PORT}`;

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
      const mockServer = new http.Server((req, res) => {
        res.end(mockResponse);
      });

      mockServer.listen(MOCK_HOST_PORT);

      service.request(
        {
          uri: '/mock-endpoint',
        },
        (err, resp) => {
          expect(err).toBeNull();
          expect(resp).toBe(mockResponse);
          mockServer.close(done);
        },
      );
    });

    it('should retry a request', done => {
      let numRequestAttempts = 0;

      const mockServer = new http.Server((req, res) => {
        numRequestAttempts++;
        res.statusCode = 408;
        res.end();
      });

      mockServer.listen(MOCK_HOST_PORT);

      service.request(
        {
          uri: '/mock-endpoint-retry',
        },
        err => {
          expect((err! as common.ApiError).code).toBe(408);
          expect(numRequestAttempts).toBe(4);
          mockServer.close(done);
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

      const timeRequest = Date.now();

      service.request(
        {
          uri: '/mock-endpoint-no-response',
        },
        err => {
          expect(err?.message).toContain('ECONNREFUSED');
          const timeResponse = Date.now();
          expect(timeResponse - timeRequest).toBeGreaterThan(minExpectedResponseTime);
          done();
        },
      );
    }, 60000);
  });
});
