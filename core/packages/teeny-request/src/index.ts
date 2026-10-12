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

import {Agent, AgentOptions as HttpsAgentOptions} from 'https';
import {AgentOptions as HttpAgentOptions, STATUS_CODES} from 'http';
import {PassThrough, Readable, pipeline} from 'stream';
import {promisify} from 'util';
import * as zlib from 'zlib';
import {Dispatcher, request as undiciRequest} from 'undici';
import {getDispatcher} from './agents';
import {TeenyStatistics} from './TeenyStatistics';
import {randomUUID} from 'crypto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const streamEvents = require('stream-events');

const gunzip = promisify(zlib.gunzip);
const inflate = promisify(zlib.inflate);
const inflateRaw = promisify(zlib.inflateRaw);
const brotliDecompress = promisify(zlib.brotliDecompress);

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

interface UndiciRequestOptions {
  method: string;
  headers: Headers;
  body?: string | Buffer | Readable;
  dispatcher: Dispatcher;
  headersTimeout?: number;
  bodyTimeout?: number;
}

/**
 * Set a header, replacing any casing variant of it.
 * @private
 */
function setHeader(headers: Headers, name: string, value: string) {
  for (const key of Object.keys(headers)) {
    if (key.toLowerCase() === name.toLowerCase()) {
      delete headers[key];
    }
  }
  headers[name] = value;
}

/**
 * Check whether a header is set, in any casing.
 * @private
 */
function hasHeader(headers: Headers, name: string) {
  return Object.keys(headers).some(
    key => key.toLowerCase() === name.toLowerCase()
  );
}

/**
 * Convert options from Request to undici format
 * @private
 * @param reqOpts Request options
 */
function requestToUndiciOptions(reqOpts: Options) {
  let headers: Headers = {};
  if (reqOpts.headers instanceof globalThis.Headers) {
    for (const pair of reqOpts.headers.entries()) {
      headers[pair[0]] = pair[1];
    }
  } else if (reqOpts.headers) {
    headers = {...reqOpts.headers};
  }

  let body: string | Buffer | Readable | undefined;
  if (typeof reqOpts.json === 'object') {
    setHeader(headers, 'Content-Type', 'application/json');
    body = JSON.stringify(reqOpts.json);
  } else {
    if (Buffer.isBuffer(reqOpts.body)) {
      body = reqOpts.body;
    } else if (typeof reqOpts.body !== 'string') {
      body = JSON.stringify(reqOpts.body);
    } else {
      body = reqOpts.body;
    }
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

  const options: UndiciRequestOptions = {
    method: reqOpts.method || 'GET',
    // copied so that `userHeaders` stays as the caller provided them
    headers: {...headers},
    body,
    dispatcher: getDispatcher(uri, reqOpts),
    ...(reqOpts.timeout && {
      headersTimeout: reqOpts.timeout,
      bodyTimeout: reqOpts.timeout,
    }),
  };

  return {uri, options, userHeaders: headers};
}

/**
 * Surface the underlying system error code (e.g. ECONNRESET) that undici
 * wraps in its own error types, since downstream retry logic keys off
 * `err.code`.
 * @private
 */
function normalizeError(err: Error): Error {
  const error = err as Error & {code?: unknown; cause?: {code?: unknown}};
  const causeCode = error?.cause?.code;
  if (
    typeof causeCode === 'string' &&
    (error.code === undefined || String(error.code).startsWith('UND_'))
  ) {
    error.code = causeCode;
  }
  return error;
}

/**
 * Convert a response from `undici` to `request` format.
 * @private
 * @param uri The request uri.
 * @param userHeaders The request headers as provided by the caller.
 * @param res The undici response
 * @returns A `request` response object
 */
function undiciToRequestResponse(
  uri: string,
  userHeaders: Headers,
  res: Dispatcher.ResponseData
) {
  const request = {} as Request;
  // connection pooling is managed by undici dispatchers, so there is no
  // per-request http.Agent to expose
  request.agent = false;
  request.headers = userHeaders;
  const history = (res.context as {history?: URL[]} | undefined)?.history;
  request.href = history?.length ? String(history[history.length - 1]) : uri;
  const resHeaders = {...res.headers} as Headers;

  const response = Object.assign(res.body as {}, {
    statusCode: res.statusCode,
    statusMessage: STATUS_CODES[res.statusCode] || '',
    request,
    headers: resHeaders,
    toJSON: () => ({headers: resHeaders}),
  }) as unknown as Response;
  // undici's response body has a getter-only `body` property (the web
  // stream accessor), so it cannot be set through Object.assign
  Object.defineProperty(response, 'body', {
    value: res.body,
    writable: true,
    enumerable: true,
    configurable: true,
  });

  return response;
}

/**
 * Read the response body into a string, decompressing it if requested
 * (undici, unlike fetch, hands back the raw bytes).
 * @private
 */
async function readResponseBody(
  res: Dispatcher.ResponseData,
  decompress: boolean
): Promise<string> {
  const raw = Buffer.from(await res.body.arrayBuffer());
  if (!decompress || raw.length === 0) {
    return raw.toString();
  }
  const encoding = String(res.headers['content-encoding'] || '').toLowerCase();
  if (encoding === 'gzip' || encoding === 'x-gzip') {
    return (await gunzip(raw)).toString();
  }
  if (encoding === 'br') {
    return (await brotliDecompress(raw)).toString();
  }
  if (encoding === 'deflate') {
    try {
      return (await inflate(raw)).toString();
    } catch {
      // some servers send raw deflate data without the zlib wrapper
      return (await inflateRaw(raw)).toString();
    }
  }
  return raw.toString();
}

/**
 * Read a callback-mode response and invoke the callback with it.
 * @private
 */
function handleCallbackResponse(
  uri: string,
  userHeaders: Headers,
  res: Dispatcher.ResponseData,
  decompress: boolean,
  callback: RequestCallback
) {
  const header = String(res.headers['content-type'] || '');
  const response = undiciToRequestResponse(uri, userHeaders, res);
  readResponseBody(res, decompress).then(
    text => {
      if (
        (header === 'application/json' ||
          header === 'application/json; charset=utf-8') &&
        response.statusCode !== 204
      ) {
        try {
          const json = JSON.parse(text);
          response.body = json;
          callback(null, response, json);
        } catch (err) {
          callback(err as Error, response, text);
        }
        return;
      }

      response.body = text;
      callback(null, response, text);
    },
    err => {
      callback(normalizeError(err), response, undefined);
    }
  );
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
function teenyRequest(
  reqOpts: Options,
  callback?: RequestCallback
): Request | void {
  const {uri, options, userHeaders} = requestToUndiciOptions(reqOpts);

  // Callback mode transparently decompresses unless the caller opted out,
  // like node-fetch did. Stream mode never does: consumers rely on getting
  // the raw bytes (e.g. for integrity validation).
  const decompress = reqOpts.gzip !== false && callback !== undefined;
  if (decompress && !hasHeader(options.headers, 'Accept-Encoding')) {
    options.headers['Accept-Encoding'] = 'gzip, deflate, br';
  }

  const multipart = reqOpts.multipart as RequestPart[];
  if (reqOpts.multipart && multipart.length === 2) {
    if (!callback) {
      // TODO: add support for multipart uploads through streaming
      throw new Error('Multipart without callback is not implemented.');
    }
    const boundary: string = randomUUID();
    setHeader(
      options.headers,
      'Content-Type',
      `multipart/related; boundary=${boundary}`
    );
    options.body = createMultipartStream(boundary, multipart);

    // Multipart upload
    teenyRequest.stats.requestStarting();
    undiciRequest(uri, options).then(
      res => {
        teenyRequest.stats.requestFinished();
        handleCallbackResponse(uri, userHeaders, res, decompress, callback);
      },
      err => {
        teenyRequest.stats.requestFinished();
        callback(normalizeError(err), null!, null);
      }
    );
    return;
  }

  if (callback === undefined) {
    // Stream mode
    const requestStream = streamEvents(new PassThrough());
    let responseStream: Readable | undefined;
    let piped = false;
    const pipeResponse = () => {
      piped = true;
      pipeline(responseStream!, requestStream, () => {});
    };
    requestStream.once('reading', () => {
      if (responseStream) {
        pipeResponse();
      } else {
        requestStream.once('response', pipeResponse);
      }
    });
    // a consumer tearing the stream down without reading it must abort
    // the in-flight request, or the socket would be left occupied
    requestStream.once('close', () => {
      if (!piped && responseStream) {
        responseStream.destroy();
      }
    });

    teenyRequest.stats.requestStarting();
    undiciRequest(uri, options).then(
      res => {
        teenyRequest.stats.requestFinished();
        responseStream = res.body;

        responseStream.on('error', (err: Error) => {
          requestStream.emit('error', normalizeError(err));
        });

        const response = undiciToRequestResponse(uri, userHeaders, res);
        requestStream.emit('response', response);
      },
      err => {
        teenyRequest.stats.requestFinished();
        requestStream.emit('error', normalizeError(err));
      }
    );

    return requestStream as Request;
  }

  // GET or POST with callback
  teenyRequest.stats.requestStarting();
  undiciRequest(uri, options).then(
    res => {
      teenyRequest.stats.requestFinished();
      handleCallbackResponse(uri, userHeaders, res, decompress, callback);
    },
    err => {
      teenyRequest.stats.requestFinished();
      callback(normalizeError(err), null!, null);
    }
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
