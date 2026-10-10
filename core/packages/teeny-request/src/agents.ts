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

import {Agent as HTTPAgent} from 'http';
import {Agent as HTTPSAgent} from 'https';
import {Options} from './';

export const pool = new Map<string, HTTPAgent>();

export type HttpAnyAgent = HTTPAgent | HTTPSAgent;

/**
 * The subset of `pool` options that is safe to hand to a cached agent.
 *
 * `pool` is given per request, but the agent built from it is shared by every
 * later request in the process. Anything that decides where a connection goes
 * or how the peer is verified (host, port, ca, cert, key, rejectUnauthorized,
 * checkServerIdentity, servername, headers, createConnection, ...) therefore
 * has to be dropped here, otherwise a single request can downgrade or redirect
 * the traffic of unrelated requests.
 */
const SAFE_POOL_OPTIONS = [
  'keepAlive',
  'keepAliveMsecs',
  'maxSockets',
  'maxFreeSockets',
  'maxTotalSockets',
  'scheduling',
  'timeout',
];

function safePoolOptions(reqOpts: Options) {
  const requested = reqOpts.pool as {[key: string]: unknown} | undefined;
  const safe: {[key: string]: unknown} = {};
  if (!requested) {
    return safe;
  }
  for (const key of SAFE_POOL_OPTIONS) {
    if (requested[key] !== undefined) {
      safe[key] = requested[key];
    }
  }
  return safe;
}

// Pool entries are kept per target, so a request to one host can never hand its
// agent to a request for another host.
function poolKey(uri: string): string {
  try {
    return new URL(uri).host;
  } catch (err) {
    return 'unknown';
  }
}

/**
 * Determines if a proxy should be considered based on the environment.
 *
 * @param uri The request uri
 * @returns {boolean}
 */
function shouldUseProxyForURI(uri: string): boolean {
  const noProxyEnv = process.env.NO_PROXY || process.env.no_proxy;
  if (!noProxyEnv) {
    return true;
  }

  const givenURI = new URL(uri);

  for (const noProxyRaw of noProxyEnv.split(',')) {
    const noProxy = noProxyRaw.trim();

    if (noProxy === givenURI.origin || noProxy === givenURI.hostname) {
      return false;
    } else if (noProxy.startsWith('*.') || noProxy.startsWith('.')) {
      const noProxyWildcard = noProxy.replace(/^\*\./, '.');

      if (givenURI.hostname.endsWith(noProxyWildcard)) {
        return false;
      }
    }
  }

  return true;
}

/**
 * Returns a custom request Agent if one is found, otherwise returns undefined
 * which will result in the global http(s) Agent being used.
 * @private
 * @param {string} uri The request uri
 * @param {Options} reqOpts The request options
 * @returns {HttpAnyAgent|undefined}
 */
export function getAgent(
  uri: string,
  reqOpts: Options,
): HttpAnyAgent | undefined {
  const isHttp = uri.startsWith('http://');
  const proxy =
    reqOpts.proxy ||
    process.env.HTTP_PROXY ||
    process.env.http_proxy ||
    process.env.HTTPS_PROXY ||
    process.env.https_proxy;

  const poolOptions = safePoolOptions(reqOpts);

  const manuallyProvidedProxy = !!reqOpts.proxy;
  const shouldUseProxy = manuallyProvidedProxy || shouldUseProxyForURI(uri);

  if (proxy && shouldUseProxy) {
    // tslint:disable-next-line variable-name
    const {HttpProxyAgent} = require('http-proxy-agent');
    const {HttpsProxyAgent} = require('https-proxy-agent');

    const Agent = isHttp ? HttpProxyAgent : HttpsProxyAgent;
    return new Agent(proxy, poolOptions);
  }

  let key = isHttp ? 'http' : 'https';

  if (reqOpts.forever) {
    key += `:forever:${poolKey(uri)}`;

    if (!pool.has(key)) {
      // tslint:disable-next-line variable-name
      const Agent = isHttp ? HTTPAgent : HTTPSAgent;
      pool.set(key, new Agent({...poolOptions, keepAlive: true}));
    }
  }

  return pool.get(key);
}
