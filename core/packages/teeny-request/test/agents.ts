/**
 * @license
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

import assert from 'assert';
import {describe, it, afterEach, beforeEach} from 'mocha';
import * as sinon from 'sinon';
import {Agent, ProxyAgent} from 'undici';
import {getDispatcher, pool} from '../src/agents';

describe('agents', () => {
  const httpUri = 'http://example.com';
  const httpsUri = 'https://example.com';
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
    pool.clear();
  });

  function pooledProxyAgent(): ProxyAgent | undefined {
    return [...pool.values()].find(
      dispatcher => dispatcher instanceof ProxyAgent
    ) as ProxyAgent | undefined;
  }

  describe('getDispatcher', () => {
    const defaultOptions = {uri: httpUri};

    it('should use the global dispatcher by default', () => {
      const dispatcher = getDispatcher(httpUri, defaultOptions);
      assert.ok(dispatcher);
      assert.strictEqual(pool.size, 0);
    });

    it('should return the same dispatcher for repeated default requests', () => {
      const dispatcher1 = getDispatcher(httpUri, defaultOptions);
      const dispatcher2 = getDispatcher(httpsUri, defaultOptions);
      assert.strictEqual(dispatcher1, dispatcher2);
    });

    describe('proxy', () => {
      const envVars = ['http_proxy', 'https_proxy', 'HTTP_PROXY', 'HTTPS_PROXY'];

      const noProxyEnvVars = ['no_proxy', 'NO_PROXY'];
      const proxy = 'https://hello.there:8080';

      it('should respect the proxy option', () => {
        const options = Object.assign({proxy}, defaultOptions);
        const dispatcher = getDispatcher(httpsUri, options);
        assert.ok(dispatcher);
        assert.ok(pooledProxyAgent());
      });

      it('should cache the proxy dispatcher', () => {
        const options = Object.assign({proxy}, defaultOptions);
        const dispatcher1 = getDispatcher(httpsUri, options);
        const dispatcher2 = getDispatcher(httpsUri, options);
        assert.strictEqual(dispatcher1, dispatcher2);
        assert.strictEqual(pool.size, 1);
      });

      envVars.forEach(envVar => {
        it(`should respect the ${envVar} env var`, () => {
          sandbox.stub(process, 'env').value({[envVar]: proxy});
          getDispatcher(httpsUri, defaultOptions);
          assert.ok(pooledProxyAgent());
        });
      });

      describe('no_proxy', () => {
        beforeEach(() => {
          sandbox.stub(process, 'env').value({});
        });

        noProxyEnvVars.forEach(noProxyEnvVar => {
          it(`should respect the proxy option, even if in ${noProxyEnvVar} env var`, () => {
            process.env[noProxyEnvVar] = new URL(httpsUri).hostname;

            const options = Object.assign({proxy}, defaultOptions);
            getDispatcher(httpsUri, options);
            assert.ok(pooledProxyAgent());
          });
        });

        noProxyEnvVars.forEach(noProxyEnvVar => {
          envVars.forEach(envVar => {
            const root = 'example.com';
            const subDomain = 'abc.' + root;

            const uri = new URL(`https://${subDomain}`);

            const cases = [
              {name: '`.` support', value: `.${root}`},
              {name: '`*.` support', value: `*.${root}`},
              {name: 'list support', value: `a, b,${subDomain},.c,*.d`},
              {name: '`.` + list support', value: `a, b,.${root},.c,*.d`},
              {name: '`*.` + list support', value: `a, b,*.${root},.c,*.d`},
            ];

            for (const {name, value} of cases) {
              it(`should respect the ${noProxyEnvVar} env var > ${envVar}': ${name}`, () => {
                process.env[envVar] = proxy;

                process.env[noProxyEnvVar] = value;
                getDispatcher(uri.toString(), defaultOptions);
                assert.strictEqual(pooledProxyAgent(), undefined);
              });
            }
          });
        });
      });
    });

    describe('forever', () => {
      it('should use the global dispatcher, which keeps connections alive', () => {
        const options = Object.assign({forever: true}, defaultOptions);
        const dispatcher = getDispatcher(httpUri, options);
        assert.ok(dispatcher);
        assert.strictEqual(pool.size, 0);
      });
    });

    describe('pool', () => {
      it('should create a dedicated dispatcher for a socket limit', () => {
        const options = Object.assign(
          {
            forever: true,
            pool: {
              maxSockets: 1000,
            },
          },
          defaultOptions
        );
        getDispatcher(httpUri, options);
        assert.ok([...pool.values()].some(d => d instanceof Agent));
      });

      it('should cache the dispatcher for a socket limit', () => {
        const options = Object.assign(
          {
            forever: true,
            pool: {
              maxSockets: 1000,
            },
          },
          defaultOptions
        );
        const dispatcher1 = getDispatcher(httpUri, options);
        const dispatcher2 = getDispatcher(httpUri, options);
        assert.strictEqual(dispatcher1, dispatcher2);
        assert.strictEqual(pool.size, 1);
      });

      it('should ignore pool config without forever or proxy', () => {
        const options = Object.assign(
          {
            pool: {
              maxSockets: 1000,
            },
          },
          defaultOptions
        );
        getDispatcher(httpUri, options);
        assert.strictEqual(pool.size, 0);
      });

      it('should ignore an unlimited socket limit', () => {
        const options = Object.assign(
          {
            forever: true,
            pool: {
              maxSockets: Infinity,
            },
          },
          defaultOptions
        );
        getDispatcher(httpUri, options);
        assert.strictEqual(pool.size, 0);
      });
    });
  });
});
