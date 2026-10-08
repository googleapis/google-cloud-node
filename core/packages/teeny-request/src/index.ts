/**
 * @license
 * Copyright 2018 Google LLC
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

import * as https from 'https';
import {Agent, AgentOptions as HttpsAgentOptions} from 'https';
import * as http from 'http';
import {AgentOptions as HttpAgentOptions} from 'http';
import type * as f from 'node-fetch' with {'resolution-mode': 'import'};
import {PassThrough, Readable, pipeline} from 'stream';
import * as zlib from 'zlib';
import {getAgent} from './agents';
import {TeenyStatistics} from './TeenyStatistics';
import {randomUUID} from 'crypto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const streamEvents = require('stream-events');

import type nodeFetch from 'node-fetch' with {'resolution-mode': 'import'};

function bunFetch(
  url: URL | f.RequestInfo,
  init: f.RequestInit & {timeout?: number} = {},
): Promise<f.Response> {
  const urlStr = String(url);
  const parsedUrl = new URL(urlStr);
  const isHttps = parsedUrl.protocol === 'https:';
  const transport = isHttps ? https : http;

  const headers: Record<string, string> = {};
  if (init.headers) {
    if (
      typeof globalThis.Headers !== 'undefined' &&
      init.headers instanceof globalThis.Headers
    ) {
      for (const [k, v] of init.headers.entries()) {
        headers[k] = v;
      }
    } else if (Array.isArray(init.headers)) {
      for (const [k, v] of init.headers) {
        headers[k] = v;
      }
    } else if (
      typeof (init.headers as {entries?: () => Iterable<[string, string]>})
        .entries === 'function'
    ) {
      for (const [k, v] of (
        init.headers as {entries: () => Iterable<[string, string]>}
      ).entries()) {
        headers[k] = v;
      }
    } else {
      for (const [k, v] of Object.entries(init.headers)) {
        if (v !== undefined) {
          headers[k] = String(v);
        }
      }
    }
  }

  if (init.compress !== false) {
    const hasAcceptEncoding = Object.keys(headers).some(
      k => k.toLowerCase() === 'accept-encoding',
    );
    if (!hasAcceptEncoding) {
      headers['Accept-Encoding'] = 'gzip,deflate';
    }
  }

  const reqOptions: https.RequestOptions & {proto?: string} = {
    protocol: parsedUrl.protocol,
    proto: isHttps ? 'https' : 'http',
    method: init.method || 'GET',
    hostname: parsedUrl.hostname,
    port: parsedUrl.port || (isHttps ? 443 : 80),
    path: (parsedUrl.pathname || '/') + parsedUrl.search,
    headers,
    agent: init.agent as Agent | http.Agent | boolean | undefined,
  };

  return new Promise<f.Response>((resolve, reject) => {
    let activeResponseStream: PassThrough | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const clearReqTimeout = () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
        timeoutId = undefined;
      }
    };
    const req = transport.request(reqOptions, incoming => {
      incoming.on('end', clearReqTimeout);
      incoming.on('close', clearReqTimeout);
      const responseStream = new PassThrough();
      activeResponseStream = responseStream;
      incoming.on('error', err => responseStream.destroy(err));
      const status = incoming.statusCode || 200;
      const encoding = (
        incoming.headers['content-encoding'] || ''
      ).toLowerCase();
      if (
        init.compress !== false &&
        status !== 204 &&
        status !== 304 &&
        (reqOptions.method || 'GET').toUpperCase() !== 'HEAD' &&
        (encoding === 'gzip' ||
          encoding === 'x-gzip' ||
          encoding === 'deflate' ||
          encoding === 'br')
      ) {
        const decompressor =
          encoding === 'br'
            ? zlib.createBrotliDecompress()
            : zlib.createUnzip();
        incoming.on('error', err => decompressor.destroy(err));
        decompressor.on('error', err => responseStream.destroy(err));
        incoming.pipe(decompressor).pipe(responseStream);
      } else {
        incoming.pipe(responseStream);
      }

      const fetchHeaders = new globalThis.Headers();
      for (const [k, v] of Object.entries(incoming.headers)) {
        if (Array.isArray(v)) {
          v.forEach(val => fetchHeaders.append(k, val));
        } else if (v !== undefined) {
          fetchHeaders.set(k, v);
        }
      }

      const readText = async () => {
        const chunks: Buffer[] = [];
        for await (const chunk of responseStream) {
          chunks.push(
            Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk as Uint8Array),
          );
        }
        return Buffer.concat(chunks).toString('utf8');
      };

      const res = {
        url: urlStr,
        status,
        statusText: incoming.statusMessage || '',
        headers: fetchHeaders,
        body: responseStream,
        text: readText,
        json: async () => {
          const text = await readText();
          try {
            return JSON.parse(text);
          } catch (err) {
            throw new Error(
              `invalid json response body at ${urlStr} reason: ${(err as Error).message}`,
            );
          }
        },
      } as unknown as f.Response;

      resolve(res);
    });

    if (init.timeout) {
      const onTimeout = () => {
        clearReqTimeout();
        const timeoutErr = Object.assign(
          new Error(`network timeout at: ${urlStr}`),
          {
            name: 'AbortError',
            type: 'request-timeout',
            code: 'ETIMEDOUT',
          },
        );
        activeResponseStream?.destroy(timeoutErr);
        req.destroy();
        reject(timeoutErr);
      };
      req.setTimeout(init.timeout, onTimeout);
      timeoutId = setTimeout(onTimeout, init.timeout);
    }

    req.on('error', err => {
      clearReqTimeout();
      activeResponseStream?.destroy(err);
      reject(err);
    });

    if (init.body) {
      if (
        typeof init.body === 'object' &&
        typeof (init.body as Readable).pipe === 'function'
      ) {
        (init.body as Readable).on('error', err => {
          clearReqTimeout();
          activeResponseStream?.destroy(err);
          req.destroy();
          reject(err);
        });
        (init.body as Readable).pipe(req);
      } else if (
        typeof init.body === 'string' ||
        Buffer.isBuffer(init.body) ||
        init.body instanceof Uint8Array
      ) {
        req.write(init.body);
        req.end();
      } else {
        req.end();
      }
    } else {
      req.end();
    }
  });
}

const fetch = (...args: Parameters<typeof nodeFetch>) =>
  'Bun' in globalThis
    ? bunFetch(args[0], args[1])
    : import('node-fetch').then(({default: fetch}) => fetch(...args));

export interface CoreOptions {
  method?: string;
  timeout?: number;
  gzip?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  json?: any;
  headers?: Headers;
  body?: string | {};
  useQuerystring?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  qs?: any;
  proxy?: string;
  multipart?: RequestPart[];
  forever?: boolean;
  pool?: HttpsAgentOptions | HttpAgentOptions;
}

export interface OptionsWithUri extends CoreOptions {
  uri: string;
}

export interface OptionsWithUrl extends CoreOptions {
  url: string;
}

export type Options = OptionsWithUri | OptionsWithUrl;

export interface Request extends PassThrough {
  agent: Agent | false;
  headers: Headers;
  href?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Response<T = any> {
  statusCode: number;
  headers: Headers;
  body: T;
  request: Request;
  statusMessage?: string;
}

export interface RequestPart {
  body: string | Readable;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface RequestCallback<T = any> {
  (err: Error | null, response: Response, body?: T): void;
}

export class RequestError extends Error {
  code?: number;
}

interface Headers {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

/**
 * Convert options from Request to Fetch format
 * @private
 * @param reqOpts Request options
 */
function requestToFetchOptions(reqOpts: Options) {
  const options: f.RequestInit = {
    method: reqOpts.method || 'GET',
    ...(reqOpts.timeout && {timeout: reqOpts.timeout}),
    ...(typeof reqOpts.gzip === 'boolean' && {compress: reqOpts.gzip}),
  };

  if (typeof reqOpts.json === 'object') {
    // Add Content-type: application/json header
    reqOpts.headers = reqOpts.headers || {};
    if (reqOpts.headers instanceof globalThis.Headers) {
      reqOpts.headers.set('Content-Type', 'application/json');
    } else {
      reqOpts.headers['Content-Type'] = 'application/json';
    }

    // Set body to JSON representation of value
    options.body = JSON.stringify(reqOpts.json);
  } else {
    if (Buffer.isBuffer(reqOpts.body)) {
      options.body = reqOpts.body;
    } else if (typeof reqOpts.body !== 'string') {
      options.body = JSON.stringify(reqOpts.body);
    } else {
      options.body = reqOpts.body;
    }
  }

  if (reqOpts.headers instanceof globalThis.Headers) {
    options.headers = {};
    for (const pair of reqOpts.headers.entries()) {
      options.headers[pair[0]] = pair[1];
    }
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options.headers = reqOpts.headers as any;
  }

  let uri = ((reqOpts as OptionsWithUri).uri ||
    (reqOpts as OptionsWithUrl).url) as string;

  if (!uri) {
    throw new Error('Missing uri or url in reqOpts.');
  }

  if (reqOpts.useQuerystring === true || typeof reqOpts.qs === 'object') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const qs = require('querystring');
    const params = qs.stringify(reqOpts.qs);
    uri = uri + '?' + params;
  }

  options.agent = getAgent(uri, reqOpts);

  return {uri, options};
}

/**
 * Convert a response from `fetch` to `request` format.
 * @private
 * @param opts The `request` options used to create the request.
 * @param res The Fetch response
 * @returns A `request` response object
 */
function fetchToRequestResponse(opts: f.RequestInit, res: f.Response) {
  const request = {} as Request;
  request.agent = (opts.agent as Agent) || false;
  request.headers = (opts.headers || {}) as Headers;
  request.href = res.url;
  // headers need to be converted from a map to an obj
  const resHeaders = {} as Headers;
  res.headers.forEach((value, key) => (resHeaders[key] = value));

  const response = Object.assign(res.body as {}, {
    statusCode: res.status,
    statusMessage: res.statusText,
    request,
    body: res.body,
    headers: resHeaders,
    toJSON: () => ({headers: resHeaders}),
  });

  return response as Response;
}

/**
 * Create POST body from two parts as multipart/related content-type
 * @private
 * @param boundary
 * @param multipart
 */
function createMultipartStream(boundary: string, multipart: RequestPart[]) {
  const finale = `--${boundary}--`;
  const stream: PassThrough = new PassThrough();

  for (const part of multipart) {
    const preamble = `--${boundary}\r\nContent-Type: ${
      (part as {['Content-Type']?: string})['Content-Type']
    }\r\n\r\n`;
    stream.write(preamble);
    if (typeof part.body === 'string') {
      stream.write(part.body);
      stream.write('\r\n');
    } else {
      part.body.pipe(stream, {end: false});
      part.body.on('end', () => {
        stream.write('\r\n');
        stream.write(finale);
        stream.end();
      });
    }
  }
  return stream;
}

function teenyRequest(reqOpts: Options): Request;
function teenyRequest(reqOpts: Options, callback: RequestCallback): void;
/* eslint-disable promise/catch-or-return, promise/always-return, promise/no-callback-in-promise */
function teenyRequest(
  reqOpts: Options,
  callback?: RequestCallback,
): Request | void {
  const {uri, options} = requestToFetchOptions(reqOpts);

  const multipart = reqOpts.multipart as RequestPart[];
  if (reqOpts.multipart && multipart.length === 2) {
    if (!callback) {
      // TODO: add support for multipart uploads through streaming
      throw new Error('Multipart without callback is not implemented.');
    }
    const boundary: string = randomUUID();
    (options.headers as Headers)['Content-Type'] =
      `multipart/related; boundary=${boundary}`;
    options.body = createMultipartStream(boundary, multipart);

    // Multipart upload
    teenyRequest.stats.requestStarting();
    fetch(uri, options).then(
      res => {
        teenyRequest.stats.requestFinished();
        const header = res.headers.get('content-type');
        const response = fetchToRequestResponse(options, res);
        const body = response.body;
        if (
          header === 'application/json' ||
          header === 'application/json; charset=utf-8'
        ) {
          res.json().then(
            json => {
              response.body = json;
              callback(null, response, json);
            },
            (err: Error) => {
              callback(err, response, body);
            },
          );
          return;
        }

        res.text().then(
          text => {
            response.body = text;
            callback(null, response, text);
          },
          err => {
            callback(err, response, body);
          },
        );
      },
      err => {
        teenyRequest.stats.requestFinished();
        callback(err, null!, null);
      },
    );
    return;
  }

  if (callback === undefined) {
    // Stream mode
    const requestStream = streamEvents(new PassThrough());
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let responseStream: any;
    requestStream.once('reading', () => {
      if (responseStream) {
        pipeline(responseStream, requestStream, () => {});
      } else {
        requestStream.once('response', () => {
          pipeline(responseStream, requestStream, () => {});
        });
      }
    });
    options.compress = false;

    teenyRequest.stats.requestStarting();
    fetch(uri, options).then(
      res => {
        teenyRequest.stats.requestFinished();
        responseStream = res.body;

        responseStream.on('error', (err: Error) => {
          requestStream.emit('error', err);
        });

        const response = fetchToRequestResponse(options, res);
        requestStream.emit('response', response);
      },
      err => {
        teenyRequest.stats.requestFinished();
        requestStream.emit('error', err);
      },
    );

    // fetch doesn't supply the raw HTTP stream, instead it
    // returns a PassThrough piped from the HTTP response
    // stream.
    return requestStream as Request;
  }

  // GET or POST with callback
  teenyRequest.stats.requestStarting();
  fetch(uri, options).then(
    res => {
      teenyRequest.stats.requestFinished();
      const header = res.headers.get('content-type');
      const response = fetchToRequestResponse(options, res);
      const body = response.body;
      if (
        header === 'application/json' ||
        header === 'application/json; charset=utf-8'
      ) {
        if (response.statusCode === 204) {
          // Probably a DELETE
          callback(null, response, body);
          return;
        }
        res.json().then(
          json => {
            response.body = json;
            callback(null, response, json);
          },
          err => {
            callback(err, response, body);
          },
        );
        return;
      }

      res.text().then(
        text => {
          const response = fetchToRequestResponse(options, res);
          response.body = text;
          callback(null, response, text);
        },
        err => {
          callback(err, response, body);
        },
      );
    },
    err => {
      teenyRequest.stats.requestFinished();
      callback(err, null!, null);
    },
  );
  return;
}

teenyRequest.defaults = (defaults: CoreOptions) => {
  return (reqOpts: Options, callback?: RequestCallback): Request | void => {
    const opts = {...defaults, ...reqOpts};
    if (callback === undefined) {
      return teenyRequest(opts);
    }
    teenyRequest(opts, callback);
  };
};

/**
 * Single instance of an interface for keeping track of things.
 */
teenyRequest.stats = new TeenyStatistics();

teenyRequest.resetStats = (): void => {
  teenyRequest.stats = new TeenyStatistics(teenyRequest.stats.getOptions());
};

export {teenyRequest};
