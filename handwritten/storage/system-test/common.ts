/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
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

import {before, describe, it} from 'mocha';
import assert from 'assert';
import * as http from 'http';

import * as common from '../src/nodejs-common/index.js';

describe('Common', () => {
  const MOCK_HOST_PORT = 8118;
  const MOCK_HOST = `http://localhost:${MOCK_HOST_PORT}`;

  describe('Service', () => {
    let service: common.Service;

    before(() => {
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
          assert.ifError(err);
          assert.strictEqual(resp, mockResponse);
          mockServer.close(done);
        }
      );
    });

    it('should retry a request', function (done) {
      // We've increased the timeout to accommodate the retry backoff strategy.
      // The test's retry attempts and the delay between them can exceed the default timeout,
      // causing a false negative (test failure due to timeout instead of a logic error).
      this.timeout(90 * 1000);

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
          assert.strictEqual((err! as common.ApiError).code, 408);
          assert.strictEqual(numRequestAttempts, 4);
          mockServer.close(done);
        }
      );
    });

    it('should retry non-responsive hosts', function (done) {
      this.timeout(60 * 1000);

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
          assert(err?.message.includes('ECONNREFUSED'));
          const timeResponse = Date.now();
          assert(timeResponse - timeRequest > minExpectedResponseTime);
        }
      );
      done();
    });
  });
});
