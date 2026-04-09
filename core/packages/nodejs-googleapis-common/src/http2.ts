// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as http2 from 'http2';
import * as zlib from 'zlib';
import {URL} from 'url';
import * as qs from 'qs';
import * as extend from 'extend';
import {Stream, Readable} from 'stream';
import * as util from 'util';
import * as process from 'process';
import {GaxiosResponse, GaxiosOptions} from 'gaxios';
import {headersToClassicHeaders} from './util';

const {
  HTTP2_HEADER_CONTENT_ENCODING,
  HTTP2_HEADER_CONTENT_TYPE,
  HTTP2_HEADER_METHOD,
  HTTP2_HEADER_PATH,
  HTTP2_HEADER_STATUS,
} = http2.constants;

const DEBUG = !!process.env.HTTP2_DEBUG;

/**
 * Reference to the ClientHttp2Session and a timeout handler.
 * @private
 */
export interface SessionData {
  session: http2.ClientHttp2Session;
  timeoutHandle?: NodeJS.Timeout;
}

/**
 * List of sessions current in use.
 * @private
 */
export const sessions: {[index: string]: SessionData} = {};

/**
 * @experimental
 */
export interface GaxiosResponseWithHTTP2<T = ReturnType<JSON['parse']>>
  extends Omit<GaxiosResponse<T>, 'headers'> {
  request?: http2.ClientHttp2Stream;
  headers: http2.IncomingHttpHeaders & http2.IncomingHttpStatusHeader; // {}
}

/**
 * Public method to make an http2 request.
 * @param config - Request options.
 */
export async function request<T>(
  config: GaxiosOptions,
): Promise<GaxiosResponseWithHTTP2<T>> {
  const opts = extend(true, {}, config);
  opts.validateStatus = opts.validateStatus || validateStatus;
  opts.responseType = opts.responseType || 'json';

  const url = new URL(opts.url!);

  // Check for an existing session to this host, or go create a new one.
  const sessionData = _getClient(url.host);

  // Since we're using this session, clear the timeout handle to ensure
  // it stays in memory and connected for a while further.
  if (sessionData.timeoutHandle !== undefined) {
    clearTimeout(sessionData.timeoutHandle);
  }

  // Assemble the querystring based on config.params.  We're using the
  // `qs` module to make life a little easier.
  let pathWithQs = url.pathname;
  if (config.params && Object.keys(config.params).length > 0) {
    const serializer = config.paramsSerializer || qs.stringify;
    const q = serializer(opts.params);
    pathWithQs += `?${q}`;
  }

  // Assemble the headers based on basic HTTP2 primitives (path, method) and
  // custom headers sent from the consumer. Note: the native `Headers` type does
  // not support HTTP2 header names (e.g. ':status')
  const headers = headersToClassicHeaders(opts.headers);
  headers[HTTP2_HEADER_PATH] = pathWithQs;
  headers[HTTP2_HEADER_METHOD] = config.method || 'GET';

  opts.headers = headers;

  // NOTE: This is working around an upstream bug in `apirequest.ts`. The
  // request path assumes that the `content-type` header is going to be set in
  // the underlying HTTP Client. This hack provides bug for bug compatability
  // with this bug in gaxios:
  // https://github.com/googleapis/gaxios/blob/main/src/gaxios.ts#L202
  if (!headers[HTTP2_HEADER_CONTENT_TYPE]) {
    if (opts.responseType !== 'text') {
      headers[HTTP2_HEADER_CONTENT_TYPE] = 'application/json';
    }
  }

  const res = {
    config,
    headers: {},
    status: 0,
    data: {} as T,
    statusText: '',
  } as GaxiosResponseWithHTTP2;

  const chunks: Buffer[] = [];
  const session = sessionData.session;
  let req: http2.ClientHttp2Stream;
  return new Promise((resolve, reject) => {
    try {
      req = session
        .request(headers)
        .on('response', responseHeaders => {
          Object.assign(res, {
            headers: responseHeaders,
            status: responseHeaders[HTTP2_HEADER_STATUS],
          });

          let stream: Readable = req;
          if (responseHeaders[HTTP2_HEADER_CONTENT_ENCODING] === 'gzip') {
            stream = req.pipe(zlib.createGunzip());
          }
          if (opts.responseType === 'stream') {
            res.data = stream;
            resolve(res);
            return;
          }

          stream
            .on('data', d => {
              chunks.push(d);
            })
            .on('error', err => {
              reject(err);
              return;
            })
            .on('end', () => {
              const buf = Buffer.concat(chunks);
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              let data: any = buf;
              if (buf) {
                if (opts.responseType === 'json') {
                  try {
                    data = JSON.parse(buf.toString('utf8'));
                  } catch {
                    data = buf.toString('utf8');
                  }
                } else if (opts.responseType === 'text') {
                  data = buf.toString('utf8');
                } else if (opts.responseType === 'arraybuffer') {
                  data = buf.buffer;
                }
                res.data = data as {} as T;
              }
              if (!opts.validateStatus!(res.status)) {
                let message = `Request failed with status code ${res.status}. `;
                if (res.data && typeof res.data === 'object') {
                  const body = util.inspect(res.data, {depth: 5});
                  message = `${message}\n'${body}`;
                }
                reject(new Error(message, {cause: res}));
              }
              resolve(res);
              return;
            });
        })
        .on('error', e => {
          reject(e);
          return;
        });
    } catch (e) {
      closeSession(url)
        .then(() => reject(e))
        .catch(reject);
      return;
    }

    res.request = req;

    // If data was provided, write it to the request in the form of
    // a stream, string data, or a basic object.
    if (config.data) {
      if (config.data instanceof Stream) {
        config.data.pipe(req);
      } else if (typeof config.data === 'string') {
        const data = Buffer.from(config.data);
        req.end(data);
      } else if (typeof config.data === 'object') {
        const data = JSON.stringify(config.data);
        req.end(data);
      }
    }

    // Create a timeout so the Http2Session will be cleaned up after
    // a period of non-use. 500 milliseconds was chosen because it's
    // a nice round number, and I don't know what would be a better
    // choice. Keeping this channel open will hold a file descriptor
    // which will prevent the process from exiting.
    sessionData.timeoutHandle = setTimeout(() => closeSession(url), 500);
  });
}

/**
 * By default, throw for any non-2xx status code
 * @param status - status code from the HTTP response
 */
function validateStatus(status: number) {
  return status >= 200 && status < 300;
}

/**
 * Obtain an existing h2 session or go create a new one.
 * @param host - The hostname to which the session belongs.
 */
function _getClient(host: string): SessionData {
  if (!sessions[host]) {
    if (DEBUG) {
      console.log(`Creating client for ${host}`);
    }
    const session = http2.connect(`https://${host}`);
    session
      .on('error', e => {
        console.error(`*ERROR*: ${e}`);
        delete sessions[host];
      })
      .on('goaway', (errorCode, lastStreamId) => {
        console.error(`*GOAWAY*: ${errorCode} : ${lastStreamId}`);
        delete sessions[host];
      });
    sessions[host] = {session};
  } else {
    if (DEBUG) {
      console.log(`Used cached client for ${host}`);
    }
  }
  return sessions[host];
}

export async function closeSession(url: URL) {
  const sessionData = sessions[url.host];
  if (!sessionData) {
    return;
  }
  const {session} = sessionData;
  delete sessions[url.host];
  if (DEBUG) {
    console.error(`Closing ${url.host}`);
  }
  session.close(() => {
    if (DEBUG) {
      console.error(`Closed ${url.host}`);
    }
  });
  setTimeout(() => {
    if (session && !session.destroyed) {
      if (DEBUG) {
        console.log(`Forcing close ${url.host}`);
      }
      if (session) {
        session.destroy();
      }
    }
  }, 1000);
}
