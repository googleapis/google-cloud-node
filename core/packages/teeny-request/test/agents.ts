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
import {describe, it, afterEach} from 'mocha';
import * as http from 'http';
import * as https from 'https';
import * as sinon from 'sinon';
import {getAgent, pool} from '../src/agents';

// eslint-disable-next-line @typescript-eslint/no-var-requires
let HttpProxyAgent = require('http-proxy-agent');
// eslint-disable-next-line @typescript-eslint/no-var-requires
let HttpsProxyAgent = require('https-proxy-agent');

if (HttpProxyAgent.HttpProxyAgent) {
  HttpProxyAgent = HttpProxyAgent.HttpProxyAgent;
}
if (HttpsProxyAgent.HttpsProxyAgent) {
  HttpsProxyAgent = HttpsProxyAgent.HttpsProxyAgent;
}

describe('agents', () => {
  const httpUri = 'http://example.com';
  const httpsUri = 'https://example.com';
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
    pool.clear();
  });

  describe('getAgent', () => {
    const defaultOptions = {uri: httpUri};

    it('should return undefined by default', () => {
      const agent = getAgent(httpUri, defaultOptions);
      assert.strictEqual(agent, undefined);
    });

    describe('proxy', () => {
      const envVars = [
        'http_proxy',
        'https_proxy',
        'HTTP_PROXY',
        'HTTPS_PROXY',
      ];

      const noProxyEnvVars = ['no_proxy', 'NO_PROXY'];

      describe('http', () => {
        const uri = httpUri;
        const proxy = 'http://hello.there:8080';
        const proxyExpected = {
          hostname: 'hello.there',
          port: 8080,
          protocol: 'http:',
        };

        it('should respect the proxy option', () => {
          const options = Object.assign({proxy}, defaultOptions);
          const agent = getAgent(uri, options);
          assert(agent instanceof HttpProxyAgent);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const {proxy: proxyActual}: any = agent!;
          assert.strictEqual(proxyActual.protocol, proxyExpected.protocol);
          assert.strictEqual(proxyActual.hostname, proxyExpected.hostname);
          assert.strictEqual(proxyActual.port, proxyExpected.port);
        });

        envVars.forEach(envVar => {
          it(`should respect the ${envVar} env var`, () => {
            process.env[envVar] = proxy;
            const agent = getAgent(uri, defaultOptions);
            assert(agent instanceof HttpProxyAgent);
            delete process.env[envVar];
          });
        });
      });

      describe('https', () => {
        const uri = httpsUri;
        const proxy = 'https://hello.there:8080';
        const proxyExpected = {
          hostname: 'hello.there',
          port: '8080',
          protocol: 'https:',
        };

        it('should respect the proxy option', () => {
          const options = Object.assign({proxy}, defaultOptions);
          const agent = getAgent(uri, options);
          assert(agent instanceof HttpsProxyAgent);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const {proxy: proxyActual}: any = agent!;
          assert.strictEqual(proxyActual.protocol, proxyExpected.protocol);
          assert.strictEqual(proxyActual.hostname, proxyExpected.hostname);
          assert.strictEqual(proxyActual.port, proxyExpected.port);
        });

        envVars.forEach(envVar => {
          it(`should respect the ${envVar} env var`, () => {
            process.env[envVar] = proxy;
            const agent = getAgent(uri, defaultOptions);
            assert(agent instanceof HttpsProxyAgent);
            delete process.env[envVar];
          });
        });
      });

      describe('no_proxy', () => {
        const uri = httpsUri;
        const proxy = 'https://hello.there:8080';

        beforeEach(() => {
          sandbox.stub(process, 'env').value({});
        });

        noProxyEnvVars.forEach(noProxEnvVar => {
          it(`should respect the proxy option, even if is in ${noProxEnvVar} env var`, () => {
            process.env[noProxEnvVar] = new URL(uri).hostname;

            const options = Object.assign({proxy}, defaultOptions);
            const agent = getAgent(uri, options);
            assert(agent instanceof HttpsProxyAgent);
          });
        });

        noProxyEnvVars.forEach(noProxEnvVar => {
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
              it(`should respect the ${noProxEnvVar} env var > ${envVar}': ${name}`, () => {
                process.env[envVar] = proxy;

                process.env[noProxEnvVar] = value;
                const agent = getAgent(uri.toString(), defaultOptions);
                assert(!(agent instanceof HttpProxyAgent));
                assert(!(agent instanceof HttpsProxyAgent));
              });
            }
          });
        });
      });
    });

    describe('forever', () => {
      describe('http', () => {
        const uri = httpUri;
        const options = Object.assign({forever: true}, defaultOptions);

        it('should return an http Agent', () => {
          const agent = getAgent(uri, options)!;
          assert(agent instanceof http.Agent);
        });

        it('should cache the agent', () => {
          const agent1 = getAgent(uri, options);
          const agent2 = getAgent(uri, options);
          assert.strictEqual(agent1, agent2);
        });
      });

      describe('https', () => {
        const uri = httpsUri;
        const options = Object.assign({forever: true}, defaultOptions);

        it('should return an http Agent', () => {
          const agent = getAgent(uri, options)!;
          assert(agent instanceof https.Agent);
        });

        it('should cache the agent', () => {
          const agent1 = getAgent(uri, options);
          const agent2 = getAgent(uri, options);
          assert.strictEqual(agent1, agent2);
        });
      });
    });

    describe('pool', () => {
      describe('http', () => {
        const uri = httpUri;

        it('should pass AgentOptions from pool config when providing agent', () => {
          const options = Object.assign(
            {
              forever: true,
              pool: {
                maxSockets: 1000,
              },
            },
            defaultOptions,
          );
          const agent = getAgent(uri, options);
          assert.strictEqual(agent!.maxSockets, 1000);
        });

        it('should not set global AgentOptions from only pool config', () => {
          const options = Object.assign(
            {
              pool: {
                maxSockets: 1000,
              },
            },
            defaultOptions,
          );
          const agent = getAgent(uri, options);
          assert.strictEqual(agent, undefined);
          assert.notStrictEqual(http.globalAgent.maxSockets, 1000);
        });
      });

      describe('https', () => {
        const uri = httpsUri;

        it('should pass AgentOptions from pool config when providing agent', () => {
          const options = Object.assign(
            {
              forever: true,
              pool: {
                maxSockets: 1000,
              },
            },
            defaultOptions,
          );
          const agent = getAgent(uri, options);
          assert.strictEqual(agent!.maxSockets, 1000);
        });

        it('should not set global AgentOptions from only pool config', () => {
          const options = Object.assign(
            {
              pool: {
                maxSockets: 1000,
              },
            },
            defaultOptions,
          );
          const agent = getAgent(uri, options);
          assert.strictEqual(agent, undefined);
          assert.notStrictEqual(https.globalAgent.maxSockets, 1000);
        });
      });
    });
  });
});
