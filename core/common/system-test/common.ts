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

jest.mock('gaxios', () => {
  const gaxiosRequest = async (opts: any) => {
    const url = opts.url || opts.uri;
    const method = opts.method || 'GET';
    const headers = opts.headers || {};
    let body = opts.data || opts.body;

    if (body && typeof body === 'object' && !(body instanceof ArrayBuffer || body instanceof Blob)) {
      if (body.toString() === '[object URLSearchParams]') {
        body = body.toString();
      } else {
        body = JSON.stringify(body);
      }
    }

    const res = await globalThis.fetch(url, {
      method,
      headers,
      body: method !== 'GET' && method !== 'HEAD' ? body : undefined,
    });

    const contentType = res.headers.get('content-type') || '';
    let data;
    if (contentType.includes('application/json')) {
      try {
        data = await res.json();
      } catch {
        data = await res.text();
      }
    } else {
      data = await res.text();
    }

    const resHeaders: Record<string, string> = {};
    res.headers.forEach((val, key) => {
      resHeaders[key] = val;
    });

    return {
      data,
      status: res.status,
      statusText: res.statusText,
      headers: resHeaders,
      config: opts,
    };
  };

  class HttpInterceptorManager {
    handlers: any[] = [];
    add(interceptor: any) {
      this.handlers.push(interceptor);
      return this.handlers.length - 1;
    }
    eject(id: number) {
      this.handlers[id] = null;
    }
  }

  class Gaxios {
    interceptors = {
      request: new HttpInterceptorManager(),
      response: new HttpInterceptorManager(),
    };
    static mergeHeaders(first: any, second: any) {
      const merged: Record<string, string> = {};
      const addHeader = (key: string, val: any) => {
        merged[key.toLowerCase()] = val;
      };
      const process = (hdrs: any) => {
        if (!hdrs) return;
        if (hdrs instanceof globalThis.Headers) {
          hdrs.forEach((val, key) => addHeader(key, val));
        } else if (typeof hdrs === 'object') {
          for (const [key, val] of Object.entries(hdrs)) {
            addHeader(key, val);
          }
        }
      };
      process(first);
      process(second);
      return merged;
    }
    async request(opts: any) {
      let currentOpts = { ...opts };
      for (const handler of this.interceptors.request.handlers) {
        if (handler && handler.fulfilled) {
          currentOpts = await handler.fulfilled(currentOpts);
        }
      }
      let res = await gaxiosRequest(currentOpts);
      for (const handler of this.interceptors.response.handlers) {
        if (handler && handler.fulfilled) {
          res = await handler.fulfilled(res);
        }
      }
      return res;
    }
  }

  return {
    Gaxios,
    request: gaxiosRequest,
    gaxios: new Gaxios(),
  };
});

jest.mock('teeny-request', () => {
  const teenyRequest = (opts: any, callback?: any) => {
    let url = opts.uri || opts.url;
    if (opts.qs) {
      const searchParams = new URLSearchParams(opts.qs);
      url += '?' + searchParams.toString();
    }

    const method = opts.method || 'GET';
    const headers = opts.headers || {};
    let body = opts.body || opts.json;

    if (opts.json && typeof opts.json === 'object') {
      headers['content-type'] = headers['content-type'] || 'application/json';
      body = JSON.stringify(opts.json);
    }

    globalThis.fetch(url, {
      method,
      headers,
      body: method !== 'GET' && method !== 'HEAD' ? body : undefined,
    })
      .then(async res => {
        const contentType = res.headers.get('content-type') || '';
        let body;
        if (contentType.includes('application/json')) {
          try {
            body = await res.json();
          } catch {
            body = await res.text();
          }
        } else {
          body = await res.text();
        }

        const resHeaders: Record<string, string> = {};
        res.headers.forEach((val, key) => {
          resHeaders[key] = val;
        });

        const response = {
          statusCode: res.status,
          headers: resHeaders,
          body,
          request: { uri: url },
        };

        if (res.status >= 200 && res.status < 300) {
          callback(null, response, body);
        } else {
          const err = new Error(res.statusText) as any;
          err.code = res.status;
          callback(err, response, body);
        }
      })
      .catch(err => {
        callback(err);
      });
  };

  teenyRequest.defaults = () => teenyRequest;

  return {
    teenyRequest,
  };
});

import * as common from '../src';

describe('Common', () => {
  const MOCK_HOST_PORT = 8118;
  const MOCK_HOST = `http://localhost:${MOCK_HOST_PORT}`;

  describe('Service', () => {
    function createService(port: number) {
      const host = `http://localhost:${port}`;
      return new common.Service({
        baseUrl: host,
        apiEndpoint: host,
        scopes: [],
        packageJson: {name: 'tests', version: '1.0.0'},
      }, {
        projectId: 'fake-project',
      });
    }

    it('should send a request and receive a response', done => {
      const port = 8118;
      const service = createService(port);
      const mockResponse = 'response';
      const mockServer = new http.Server((req, res) => {
        res.end(mockResponse);
      });

      mockServer.listen(port);

      service.request(
        {
          uri: '/mock-endpoint',
        },
        (err, resp) => {
          try {
            expect(err).toBeNull();
            expect(resp).toBe(mockResponse);
            mockServer.close(done);
          } catch (e) {
            mockServer.close(() => done(e));
          }
        },
      );
    });

    it('should retry a request', function (done) {
      const port = 8119;
      const service = createService(port);
      let numRequestAttempts = 0;

      const mockServer = new http.Server((req, res) => {
        numRequestAttempts++;
        res.statusCode = 408;
        res.end();
      });

      mockServer.listen(port);

      service.request(
        {
          uri: '/mock-endpoint-retry',
        },
        err => {
          try {
            expect((err! as common.ApiError).code).toBe(408);
            expect(numRequestAttempts).toBe(4);
            mockServer.close(done);
          } catch (e) {
            mockServer.close(() => done(e));
          }
        },
      );
    }, 60000);

    it('should retry non-responsive hosts', function (done) {
      const port = 8120;
      const service = createService(port);
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
            const errCode = (err as any)?.code || (err as any)?.errno || (err as any)?.cause?.code;
            expect(
              errCode === 'ECONNREFUSED' ||
                err?.message.includes('ECONNREFUSED')
            ).toBeTruthy();
            const timeResponse = Date.now();
            expect(timeResponse - timeRequest > minExpectedResponseTime).toBeTruthy();
            done();
          } catch (e) {
            done(e);
          }
        },
      );
    }, 60000);
  });
});
