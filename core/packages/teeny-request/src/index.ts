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
import {AgentOptions as HttpAgentOptions} from 'http';
import type * as f from 'node-fetch' with {'resolution-mode': 'import'};
import {PassThrough, Readable, pipeline} from 'stream';
import {getAgent} from './agents';
import {TeenyStatistics} from './TeenyStatistics';
import {randomUUID} from 'crypto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const streamEvents = require('stream-events');

import type nodeFetch from 'node-fetch' with {'resolution-mode': 'import'};

const fetch = (...args: Parameters<typeof nodeFetch>) =>
  import('node-fetch').then(({default: fetch}) => fetch(...args));

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
