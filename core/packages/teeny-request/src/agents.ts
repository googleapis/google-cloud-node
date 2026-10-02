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

import {
  Agent,
  Dispatcher,
  ProxyAgent,
  getGlobalDispatcher,
  interceptors,
} from 'undici';
import {Options} from './';

export const pool = new Map<string, Dispatcher>();

// undici only follows redirects through an interceptor; node-fetch
// followed up to 20, so preserve that
const redirect = interceptors.redirect({maxRedirections: 20});

const composed = new WeakMap<Dispatcher, Dispatcher>();

function withRedirects(dispatcher: Dispatcher): Dispatcher {
  let dispatcherWithRedirects = composed.get(dispatcher);
  if (!dispatcherWithRedirects) {
    dispatcherWithRedirects = dispatcher.compose(redirect);
    composed.set(dispatcher, dispatcherWithRedirects);
  }
  return dispatcherWithRedirects;
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
 * Returns a dispatcher for the given request. Proxied requests and requests
 * with a socket limit get a cached dedicated dispatcher; everything else
 * uses undici's global dispatcher, which pools and keeps connections alive
 * by default.
 * @private
 * @param {string} uri The request uri
 * @param {Options} reqOpts The request options
 * @returns {Dispatcher}
 */
export function getDispatcher(uri: string, reqOpts: Options): Dispatcher {
  const proxy =
    reqOpts.proxy ||
    process.env.HTTP_PROXY ||
    process.env.http_proxy ||
    process.env.HTTPS_PROXY ||
    process.env.https_proxy;

  const manuallyProvidedProxy = !!reqOpts.proxy;
  const shouldUseProxy = manuallyProvidedProxy || shouldUseProxyForURI(uri);

  // `pool.maxSockets` historically only took effect for proxied requests
  // and keep-alive (`forever`) agents; other agent options have no undici
  // equivalent and are ignored
  const maxSockets = reqOpts.pool?.maxSockets;
  const connections =
    typeof maxSockets === 'number' && Number.isFinite(maxSockets)
      ? maxSockets
      : null;

  if (proxy && shouldUseProxy) {
    const key = `proxy:${proxy}:${connections}`;
    if (!pool.has(key)) {
      pool.set(
        key,
        new ProxyAgent({uri: proxy, ...(connections !== null && {connections})})
      );
    }
    return withRedirects(pool.get(key)!);
  }

  if (reqOpts.forever && connections !== null) {
    const key = `agent:${connections}`;
    if (!pool.has(key)) {
      pool.set(key, new Agent({connections}));
    }
    return withRedirects(pool.get(key)!);
  }

  return withRedirects(getGlobalDispatcher());
}
