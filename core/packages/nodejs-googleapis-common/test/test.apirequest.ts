// Copyright 2018 Google LLC
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

import * as assert from 'assert';
import {describe, it, afterEach} from 'mocha';
import * as crypto from 'crypto';
import * as nock from 'nock';
import * as stream from 'stream';
import {URL} from 'url';
import * as sinon from 'sinon';

import {GlobalOptions, MethodOptions} from '../src/api';
import {createAPIRequest} from '../src/apirequest';
import {GoogleAuth} from 'google-auth-library';
import {GaxiosResponse} from 'gaxios';

interface MyWritableOptions {
  highWaterMark?: number;
}

class FakeReadable extends stream.Readable {
  _max = 100000;
  bytesSent = 0;
  _read() {
    if (this.bytesSent < this._max) {
      const str = crypto.randomBytes(500).toString('hex');
      this.bytesSent += str.length;
      this.emit('progress', this.bytesSent);
      this.push(str);
    } else {
      this.push(null);
    }
  }
}

class FakeWritable extends stream.Writable {
  boundary: string;
  startBoundaryFlag = 2;
  startParsed = false;

  constructor(boundary: string, options: MyWritableOptions) {
    super(options);
    this.boundary = boundary;
  }

  _write(
    chunk: Buffer | string,
    encoding: string,
    callback: (error?: Error | null) => void,
  ) {
    let chunkString = chunk.toString();
    if (!this.startParsed) {
      const startIndex = chunkString.lastIndexOf('\r\n\r\n');
      if (startIndex > -1) {
        this.startBoundaryFlag--;
      }
      if (this.startBoundaryFlag === 0) {
        this.startParsed = true;
        chunkString = chunkString.substring(startIndex + 4);
      } else {
        chunkString = '';
      }
    }
    if (chunkString === '\r\n' || chunkString === this.boundary) {
      chunkString = '';
    }
    this.emit('progress', chunkString.length);
    callback();
  }
}

nock.disableNetConnect();

const fakeContext = {
  _options: {},
};

const url = 'https://example.com';
const fakeResponse = '👻';

interface FakeParams {
  foo: string;
  bar: string;
}
describe('createAPIRequest', () => {
  const sandbox = sinon.createSandbox();
  afterEach(() => {
    nock.cleanAll();
    sandbox.restore();
  });

  describe('instantiation', () => {
    /**
     * As of today, most of the tests that cover this module live in
     * google-api-nodejs-client.  We need to slowly cover each scenario,
     * and bring this up to 100%.  This is just a simple starter.
     */

    it('should create a valid API request', async () => {
      const scope = nock(url).get('/').reply(200, fakeResponse);
      const result = await createAPIRequest<FakeParams>({
        options: {url},
        params: {},
        requiredParams: [],
        pathParams: [],
        context: fakeContext,
      });
      scope.done();
      assert.strictEqual(result.data, fakeResponse as {});
      assert(result);
    });

    it('should not populate resource parameter in URL, if not required parameter', async () => {
      const scope = nock(url).post('/').reply(200, fakeResponse);
      const result = await createAPIRequest<FakeParams>({
        options: {
          url,
          method: 'POST',
        },
        params: {
          resource: {
            foo: 'bar',
          },
        },
        requiredParams: [],
        pathParams: [],
        context: fakeContext,
      });
      scope.done();
      assert.strictEqual(result.data, fakeResponse as {});
      assert(result);
    });

    it('should not populate resource parameter in URL, if it is an object', async () => {
      return assert.rejects(async () => {
        await createAPIRequest<FakeParams>({
          options: {
            url,
            method: 'POST',
          },
          params: {
            resource: {
              foo: 'bar',
            },
          },
          requiredParams: ['resource'],
          pathParams: [],
          context: fakeContext,
        });
      }, /Missing required parameters: resource/);
    });

    it('should not populate resource parameter in URL, if it is an object', async () => {
      return assert.rejects(async () => {
        await createAPIRequest<FakeParams>({
          options: {
            url,
            method: 'POST',
          },
          params: {
            resource: {
              foo: 'bar',
            },
          },
          requiredParams: ['resource'],
          pathParams: [],
          context: fakeContext,
        });
      }, /Missing required parameters: resource/);
    });

    it('should populate resource parameter in URL, if it is required', async () => {
      const scope = nock(`${url}`)
        .get('/?resource=blerg')
        .reply(200, fakeResponse);
      const result = await createAPIRequest<FakeParams>({
        options: {url},
        params: {
          resource: 'blerg',
        },
        requiredParams: ['resource'],
        pathParams: [],
        context: fakeContext,
      });
      scope.done();
      assert.strictEqual(result.data, fakeResponse as {});
      assert(result);
    });

    it('should include directives in the user agent with local config', async () => {
      const scope = nock(url).get('/').reply(200);
      const res = await createAPIRequest<FakeParams>({
        options: {
          url,
          userAgentDirectives: [
            {product: 'frog', version: '1.0', comment: 'jumps'},
          ],
        },
        params: {},
        requiredParams: [],
        pathParams: [],
        context: fakeContext,
      });
      scope.done();
      // frog/1.0 (jumps) google-api-nodejs-client/0.6.0 (gzip)
      const userAgent = res.config.headers.get('User-Agent') || '';
      assert.ok(/frog\/1.0 \(jumps\)/.test(userAgent));
      assert.ok(/google-api-nodejs-client\/.* \(gzip\)/.test(userAgent));
    });

    it('should include directives in the user agent with per-service config', async () => {
      const scope = nock(url).get('/').reply(200);
      const res = await createAPIRequest<FakeParams>({
        options: {url},
        params: {},
        requiredParams: [],
        pathParams: [],
        context: {
          _options: {
            userAgentDirectives: [
              {product: 'frog', version: '1.0', comment: 'jumps'},
            ],
          },
        },
      });
      scope.done();
      // frog/1.0 (jumps) google-api-nodejs-client/0.6.0 (gzip)
      const userAgent = res.config.headers.get('User-Agent') || '';
      assert.ok(/frog\/1.0 \(jumps\)/.test(userAgent));
      assert.ok(/google-api-nodejs-client\/.* \(gzip\)/.test(userAgent));
    });

    it('should include directives in the user agent with global config', async () => {
      const scope = nock(url).get('/').reply(200);
      const res = await createAPIRequest<FakeParams>({
        options: {url},
        params: {},
        requiredParams: [],
        pathParams: [],
        context: {
          _options: {},
          google: {
            _options: {
              userAgentDirectives: [
                {product: 'frog', version: '1.0', comment: 'jumps'},
              ],
            },
          },
        },
      });
      scope.done();
      // frog/1.0 (jumps) google-api-nodejs-client/0.6.0 (gzip)
      const userAgent = res.config.headers.get('User-Agent') || '';
      assert.ok(/frog\/1.0 \(jumps\)/.test(userAgent));
      assert.ok(/google-api-nodejs-client\/.* \(gzip\)/.test(userAgent));
    });

    it('should populate x-goog-api-client', async () => {
      const scope = nock(url)
        .get('/')
        .reply(function () {
          assert.ok(
            /gdcl\/[\w.-]+ gl-node\//.test(
              this.req.headers['x-goog-api-client'],
            ),
          );
          return [200, ''];
        });
      await createAPIRequest<FakeParams>({
        options: {url},
        params: {},
        requiredParams: [],
        pathParams: [],
        context: fakeContext,
      });
      scope.done();
    });

    it('should populate x-goog-api-version', async () => {
      const scope = nock(url)
        .get('/')
        .reply(function () {
          assert.ok(/1234/.test(this.req.headers['x-goog-api-version']));
          return [200, ''];
        });
      await createAPIRequest<FakeParams>({
        options: {url, apiVersion: '1234'},
        params: {},
        requiredParams: [],
        pathParams: [],
        context: fakeContext,
      });
      scope.done();
    });

    it('should rewrite url to match default rootUrl', async () => {
      const rootUrl = 'http://www.googleapis.com/';
      const path = '/api/service';
      const url = new URL(path, 'https://www.googleapis.com');
      const scope = nock(rootUrl).get(path).reply(200);
      const res = await createAPIRequest<FakeParams>({
        options: {
          url: url.href,
        },
        params: {},
        requiredParams: [],
        pathParams: [],
        context: {
          _options: {
            rootUrl,
          },
        },
      });
      scope.done();
      const expectedUrl = 'http://www.googleapis.com/api/service';
      assert.deepStrictEqual(res.config.url.toString(), expectedUrl);
    });

    it('should rewrite url to match default rootUrl of different length', async () => {
      const rootUrl = 'https://my.domain.cc/';
      const path = '/api/service';
      const url = new URL(path, 'https://www.googleapis.com');
      const scope = nock(rootUrl).get(path).reply(200);
      const res = await createAPIRequest<FakeParams>({
        options: {
          url: url.href,
        },
        params: {},
        requiredParams: [],
        pathParams: [],
        context: {
          _options: {
            rootUrl,
          },
        },
      });
      scope.done();
      const expectedUrl = 'https://my.domain.cc/api/service';
      assert.deepStrictEqual(res.config.url.toString(), expectedUrl);
    });
  });

  describe('mock stream', () => {
    let totalBytesSent: number;
    let totalBytesReceived = 0;
    const fStream = new FakeReadable();
    fStream.on('progress', (currentBytesSent: number) => {
      totalBytesSent = currentBytesSent;
    });

    const requestBody = {};
    const media = {
      mimeType: 'application/octet-stream',
      body: fStream,
    };
    const auth = {
      request: (opts: GlobalOptions & MethodOptions) => {
        const contentType = new Headers(opts.headers).get('content-type') || '';
        const boundary = `--${contentType.substring(
          contentType.indexOf('boundary=') + 9,
        )}--`;
        const rStream = new FakeWritable(boundary, {highWaterMark: 400});
        rStream.on('progress', (currentBytesReceived: number) => {
          totalBytesReceived += currentBytesReceived;
        });
        (opts.data as stream.Stream).pipe(rStream);
      },
    };

    it('should pass all chunks', async () => {
      await createAPIRequest<FakeParams>({
        options: {url},
        params: {
          requestBody,
          media,
          auth,
        },
        requiredParams: [],
        pathParams: [],
        context: fakeContext,
        mediaUrl: 'https://example.com',
      });
      assert.strictEqual(totalBytesSent, totalBytesReceived);
    });
  });

  describe('options', () => {
    it('should retry GET requests by default', async () => {
      const scope = nock(url).get('/').reply(500).get('/').reply(200);
      await createAPIRequest<FakeParams>({
        options: {url},
        params: {},
        requiredParams: [],
        pathParams: [],
        context: fakeContext,
      });
      scope.done();
    });

    it('should merge headers from global and local config', async () => {
      const scope = nock(url).get('/').reply(200);
      const res = await createAPIRequest<FakeParams>({
        options: {
          url,
          headers: {
            'Local-Header': 'local',
          },
        },
        params: {},
        requiredParams: [],
        pathParams: [],
        context: {
          _options: {},
          google: {
            _options: {
              headers: {
                'Global-Header': 'global',
              },
            },
          },
        },
      });
      scope.done();
      assert.strictEqual(res.config.headers.get('Global-Header'), 'global');
      assert.strictEqual(res.config.headers.get('Local-Header'), 'local');
    });

    it('should remove path params from the querystring when set in API level options', async () => {
      const optUrl = `${url}/projects/{projectId}`;
      const projectId = 'not-a-project';
      const path = `/projects/${projectId}`;
      const scope = nock(url).get(path).reply(200);
      const res = await createAPIRequest<FakeParams>({
        options: {url: optUrl},
        params: {},
        requiredParams: [],
        pathParams: ['projectId'],
        context: {
          _options: {
            params: {
              projectId,
            },
          },
        },
      });
      scope.done();
      const expectedUrl = `${url}/projects/${projectId}`;
      assert.strictEqual(res.config.url.toString(), expectedUrl);
    });

    it('should persist path params set at the API level', async () => {
      const optUrl = `${url}/projects/{projectId}`;
      const projectId = 'not-a-project';
      const path = `/projects/${projectId}`;
      const scope = nock(url).get(path).twice().reply(200);
      const params = {
        options: {url: optUrl},
        params: {},
        requiredParams: [],
        pathParams: ['projectId'],
        context: {
          _options: {
            params: {
              projectId,
            },
          },
        },
      };
      const expectedUrl = `${url}/projects/${projectId}`;
      const res1 = await createAPIRequest<FakeParams>(params);
      assert.strictEqual(res1.config.url.toString(), expectedUrl);
      const res2 = await createAPIRequest<FakeParams>(params);
      assert.deepStrictEqual(res2.config.url.toString(), expectedUrl);
      scope.done();
    });

    it('should allow passing a GoogleAuth param for auth', async () => {
      const auth = new GoogleAuth();
      const stub = sandbox.stub(auth, 'request').resolves({} as GaxiosResponse);
      await createAPIRequest<FakeParams>({
        options: {url},
        params: {},
        requiredParams: [],
        pathParams: [],
        context: {
          _options: {
            auth,
          },
        },
      });
      assert.ok(stub.calledOnce);
    });
  });

  describe('TPC', () => {
    it('should allow setting universeDomain', async () => {
      const gduUrl = 'https://api.googleapis.com/path?param=value#extra';
      const expectedUniverseUrl =
        'https://api.universe.com/path?param=value#extra';
      const auth = new GoogleAuth();
      const getUniverseDomainStub = sandbox
        .stub(auth, 'getUniverseDomain')
        .resolves('universe.com');
      sandbox.stub(auth, 'getRequestHeaders').resolves(new Headers());
      const requestStub = sandbox
        .stub(auth, 'request')
        .resolves({data: fakeResponse} as GaxiosResponse);
      const result = await createAPIRequest<FakeParams>({
        options: {url: gduUrl},
        params: {},
        requiredParams: [],
        pathParams: [],
        context: {
          _options: {
            universeDomain: 'universe.com',
            auth,
          },
        },
      });
      assert.strictEqual(result.data, fakeResponse as {});
      assert.ok(getUniverseDomainStub.calledOnce);
      assert.ok(requestStub.calledOnce);
      assert.strictEqual(
        requestStub.getCall(0).args[0].url,
        expectedUniverseUrl,
      );
      assert(result);
    });

    it('should allow setting universe_domain', async () => {
      const gduUrl = 'https://api.googleapis.com/path?param=value#extra';
      const expectedUniverseUrl =
        'https://api.universe.com/path?param=value#extra';
      const auth = new GoogleAuth();
      const getUniverseDomainStub = sandbox
        .stub(auth, 'getUniverseDomain')
        .resolves('universe.com');
      sandbox.stub(auth, 'getRequestHeaders').resolves(new Headers());
      const requestStub = sandbox
        .stub(auth, 'request')
        .resolves({data: fakeResponse} as GaxiosResponse);
      const result = await createAPIRequest<FakeParams>({
        options: {url: gduUrl},
        params: {},
        requiredParams: [],
        pathParams: [],
        context: {
          _options: {
            universe_domain: 'universe.com',
            auth,
          },
        },
      });
      assert.strictEqual(result.data, fakeResponse as {});
      assert.ok(getUniverseDomainStub.calledOnce);
      assert.ok(requestStub.calledOnce);
      assert.strictEqual(
        requestStub.getCall(0).args[0].url,
        expectedUniverseUrl,
      );
      assert(result);
    });

    it('should disallow setting both universeDomain and universe_domain', async () => {
      const gduUrl = 'https://api.googleapis.com/path?param=value#extra';
      return assert.rejects(
        createAPIRequest<FakeParams>({
          options: {url: gduUrl},
          params: {},
          requiredParams: [],
          pathParams: [],
          context: {
            _options: {
              universe_domain: 'universe1.com',
              universeDomain: 'universe2.com',
            },
          },
        }),
        (err: Error) => {
          assert.ok(err.message.includes('but not both'));
          return true;
        },
      );
    });

    if (typeof process === 'object' && typeof process.env === 'object') {
      it('should allow setting GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable', async () => {
        const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'universe.com';
        const gduUrl = 'https://api.googleapis.com/path?param=value#extra';
        const expectedUniverseUrl =
          'https://api.universe.com/path?param=value#extra';
        const auth = new GoogleAuth();
        const getUniverseDomainStub = sandbox
          .stub(auth, 'getUniverseDomain')
          .resolves('universe.com');
        sandbox.stub(auth, 'getRequestHeaders').resolves(new Headers());
        const requestStub = sandbox
          .stub(auth, 'request')
          .resolves({data: fakeResponse} as GaxiosResponse);
        const result = await createAPIRequest<FakeParams>({
          options: {url: gduUrl},
          params: {},
          requiredParams: [],
          pathParams: [],
          context: {
            _options: {
              auth,
            },
          },
        });
        if (saved) {
          process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
        } else {
          delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
        }
        assert.strictEqual(result.data, fakeResponse as {});
        assert.ok(getUniverseDomainStub.calledOnce);
        assert.ok(requestStub.calledOnce);
        assert.strictEqual(
          requestStub.getCall(0).args[0].url,
          expectedUniverseUrl,
        );
        assert(result);
      });

      it('configuration in code has priority over GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable', async () => {
        const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'wrong-universe.com';
        const gduUrl = 'https://api.googleapis.com/path?param=value#extra';
        const expectedUniverseUrl =
          'https://api.universe.com/path?param=value#extra';
        const auth = new GoogleAuth();
        const getUniverseDomainStub = sandbox
          .stub(auth, 'getUniverseDomain')
          .resolves('universe.com');
        sandbox.stub(auth, 'getRequestHeaders').resolves(new Headers());
        const requestStub = sandbox
          .stub(auth, 'request')
          .resolves({data: fakeResponse} as GaxiosResponse);
        const result = await createAPIRequest<FakeParams>({
          options: {url: gduUrl},
          params: {},
          requiredParams: [],
          pathParams: [],
          context: {
            _options: {
              universeDomain: 'universe.com',
              auth,
            },
          },
        });
        if (saved) {
          process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
        } else {
          delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
        }
        assert.strictEqual(result.data, fakeResponse as {});
        assert.ok(getUniverseDomainStub.calledOnce);
        assert.ok(requestStub.calledOnce);
        assert.strictEqual(
          requestStub.getCall(0).args[0].url,
          expectedUniverseUrl,
        );
        assert(result);
      });
    }

    it('should validate universe domain received from auth library', async () => {
      const gduUrl = 'https://api.googleapis.com/path?param=value#extra';
      const auth = new GoogleAuth();
      sandbox.stub(auth, 'getUniverseDomain').resolves('wrong-universe.com');
      await assert.rejects(
        createAPIRequest<FakeParams>({
          options: {url: gduUrl},
          params: {},
          requiredParams: [],
          pathParams: [],
          context: {
            _options: {
              universeDomain: 'universe.com',
              auth,
            },
          },
        }),
        (err: Error) => {
          assert.ok(
            err.message.includes(
              'The configured universe domain (universe.com) does not match the universe domain ' +
                'found in the credentials (wrong-universe.com)',
            ),
          );
          return true;
        },
      );
    });

    it('should not leak TPC universe credentials to googleapis.com universe', async () => {
      const gduUrl = 'https://api.googleapis.com/path?param=value#extra';
      const auth = new GoogleAuth();
      sandbox.stub(auth, 'getUniverseDomain').resolves('wrong-universe.com');
      await assert.rejects(
        createAPIRequest<FakeParams>({
          options: {url: gduUrl},
          params: {},
          requiredParams: [],
          pathParams: [],
          context: {
            _options: {
              auth,
            },
          },
        }),
        (err: Error) => {
          assert.ok(
            err.message.includes(
              'The configured universe domain (googleapis.com) does not match the universe domain ' +
                'found in the credentials (wrong-universe.com)',
            ),
          );
          return true;
        },
      );
    });

    it('should not leak googleapis.com credentials to TPC universe', async () => {
      const gduUrl = 'https://api.googleapis.com/path?param=value#extra';
      const auth = new GoogleAuth();
      sandbox.stub(auth, 'getUniverseDomain').resolves('googleapis.com');
      await assert.rejects(
        createAPIRequest<FakeParams>({
          options: {url: gduUrl},
          params: {},
          requiredParams: [],
          pathParams: [],
          context: {
            _options: {
              universe_domain: 'wrong-universe.com',
              auth,
            },
          },
        }),
        (err: Error) => {
          assert.ok(
            err.message.includes(
              'The configured universe domain (wrong-universe.com) does not match the universe domain ' +
                'found in the credentials (googleapis.com)',
            ),
          );
          return true;
        },
      );
    });
  });
});
