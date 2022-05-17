/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
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

/*!
 * @module common/util
 */

import {replaceProjectIdToken} from '@google-cloud/projectify';
import * as ent from 'ent';
import * as extend from 'extend';
import {AuthClient, GoogleAuth, GoogleAuthOptions} from 'google-auth-library';
import {CredentialBody} from 'google-auth-library';
import * as r from 'teeny-request';
import * as retryRequest from 'retry-request';
import {Duplex, DuplexOptions, Readable, Transform, Writable} from 'stream';
import {teenyRequest} from 'teeny-request';
import {Interceptor} from './service-object';
import * as uuid from 'uuid';
import {getPackageJSON} from '../util';
const packageJson = getPackageJSON();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const duplexify: DuplexifyConstructor = require('duplexify');

const requestDefaults: r.CoreOptions = {
  timeout: 60000,
  gzip: true,
  forever: true,
  pool: {
    maxSockets: Infinity,
  },
};

/**
 * Default behavior: Automatically retry retriable server errors.
 *
 * @const {boolean}
 * @private
 */
const AUTO_RETRY_DEFAULT = true;

/**
 * Default behavior: Only attempt to retry retriable errors 3 times.
 *
 * @const {number}
 * @private
 */
const MAX_RETRY_DEFAULT = 3;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ResponseBody = any;

// Directly copy over Duplexify interfaces
export interface DuplexifyOptions extends DuplexOptions {
  autoDestroy?: boolean;
  end?: boolean;
}

export interface Duplexify extends Duplex {
  readonly destroyed: boolean;
  setWritable(writable: Writable | false | null): void;
  setReadable(readable: Readable | false | null): void;
}

export interface DuplexifyConstructor {
  obj(
    writable?: Writable | false | null,
    readable?: Readable | false | null,
    options?: DuplexifyOptions
  ): Duplexify;
  new (
    writable?: Writable | false | null,
    readable?: Readable | false | null,
    options?: DuplexifyOptions
  ): Duplexify;
  (
    writable?: Writable | false | null,
    readable?: Readable | false | null,
    options?: DuplexifyOptions
  ): Duplexify;
}

export interface ParsedHttpRespMessage {
  resp: r.Response;
  err?: ApiError;
}

export interface MakeAuthenticatedRequest {
  (reqOpts: DecorateRequestOptions): Duplexify;
  (
    reqOpts: DecorateRequestOptions,
    options?: MakeAuthenticatedRequestOptions
  ): void | Abortable;
  (
    reqOpts: DecorateRequestOptions,
    callback?: BodyResponseCallback
  ): void | Abortable;
  (
    reqOpts: DecorateRequestOptions,
    optionsOrCallback?: MakeAuthenticatedRequestOptions | BodyResponseCallback
  ): void | Abortable | Duplexify;
  getCredentials: (
    callback: (err?: Error | null, credentials?: CredentialBody) => void
  ) => void;
  authClient: GoogleAuth<AuthClient>;
}

export interface Abortable {
  abort(): void;
}
export type AbortableDuplex = Duplexify & Abortable;

export interface PackageJson {
  name: string;
  version: string;
}

export interface MakeAuthenticatedRequestFactoryConfig
  extends Omit<GoogleAuthOptions, 'authClient'> {
  /**
   * Automatically retry requests if the response is related to rate limits or
   * certain intermittent server errors. We will exponentially backoff
   * subsequent requests by default. (default: true)
   */
  autoRetry?: boolean;

  /**
   * If true, just return the provided request options. Default: false.
   */
  customEndpoint?: boolean;

  /**
   * If true, will authenticate when using a custom endpoint. Default: false.
   */
  useAuthWithCustomEndpoint?: boolean;

  /**
   * Account email address, required for PEM/P12 usage.
   */
  email?: string;

  /**
   * Maximum number of automatic retries attempted before returning the error.
   * (default: 3)
   */
  maxRetries?: number;

  stream?: Duplexify;

  /**
   * A pre-instantiated `AuthClient` or `GoogleAuth` client that should be used.
   * A new will be created if this is not set.
   */
  authClient?: AuthClient | GoogleAuth;
}

export interface MakeAuthenticatedRequestOptions {
  onAuthenticated: OnAuthenticatedCallback;
}

export interface OnAuthenticatedCallback {
  (err: Error | null, reqOpts?: DecorateRequestOptions): void;
}

export interface GoogleErrorBody {
  code: number;
  errors?: GoogleInnerError[];
  response: r.Response;
  message?: string;
}

export interface GoogleInnerError {
  reason?: string;
  message?: string;
}

export interface MakeWritableStreamOptions {
  /**
   * A connection instance used to get a token with and send the request
   * through.
   */
  connection?: {};

  /**
   * Metadata to send at the head of the request.
   */
  metadata?: {contentType?: string};

  /**
   * Request object, in the format of a standard Node.js http.request() object.
   */
  request?: r.Options;

  makeAuthenticatedRequest(
    reqOpts: r.OptionsWithUri,
    fnobj: {
      onAuthenticated(
        err: Error | null,
        authenticatedReqOpts?: r.Options
      ): void;
    }
  ): void;
}

export interface DecorateRequestOptions extends r.CoreOptions {
  autoPaginate?: boolean;
  autoPaginateVal?: boolean;
  objectMode?: boolean;
  maxRetries?: number;
  uri: string;
  interceptors_?: Interceptor[];
  shouldReturnStream?: boolean;
  projectId?: string;
}

export interface ParsedHttpResponseBody {
  body: ResponseBody;
  err?: Error;
}

/**
 * Custom error type for API errors.
 *
 * @param {object} errorBody - Error object.
 */
export class ApiError extends Error {
  code?: number;
  errors?: GoogleInnerError[];
  response?: r.Response;
  constructor(errorMessage: string);
  constructor(errorBody: GoogleErrorBody);
  constructor(errorBodyOrMessage?: GoogleErrorBody | string) {
    super();
    if (typeof errorBodyOrMessage !== 'object') {
      this.message = errorBodyOrMessage || '';
      return;
    }
    const errorBody = errorBodyOrMessage;

    this.code = errorBody.code;
    this.errors = errorBody.errors;
    this.response = errorBody.response;

    try {
      this.errors = JSON.parse(this.response.body).error.errors;
    } catch (e) {
      this.errors = errorBody.errors;
    }

    this.message = ApiError.createMultiErrorMessage(errorBody, this.errors);
    Error.captureStackTrace(this);
  }
  /**
   * Pieces together an error message by combining all unique error messages
   * returned from a single GoogleError
   *
   * @private
   *
   * @param {GoogleErrorBody} err The original error.
   * @param {GoogleInnerError[]} [errors] Inner errors, if any.
   * @returns {string}
   */
  static createMultiErrorMessage(
    err: GoogleErrorBody,
    errors?: GoogleInnerError[]
  ): string {
    const messages: Set<string> = new Set();

    if (err.message) {
      messages.add(err.message);
    }

    if (errors && errors.length) {
      errors.forEach(({message}) => messages.add(message!));
    } else if (err.response && err.response.body) {
      messages.add(ent.decode(err.response.body.toString()));
    } else if (!err.message) {
      messages.add('A failure occurred during this request.');
    }

    let messageArr: string[] = Array.from(messages);

    if (messageArr.length > 1) {
      messageArr = messageArr.map((message, i) => `    ${i + 1}. ${message}`);
      messageArr.unshift(
        'Multiple errors occurred during the request. Please see the `errors` array for complete details.\n'
      );
      messageArr.push('\n');
    }

    return messageArr.join('\n');
  }
}

/**
 * Custom error type for partial errors returned from the API.
 *
 * @param {object} b - Error object.
 */
export class PartialFailureError extends Error {
  errors?: GoogleInnerError[];
  response?: r.Response;
  constructor(b: GoogleErrorBody) {
    super();
    const errorObject = b;

    this.errors = errorObject.errors;
    this.name = 'PartialFailureError';
    this.response = errorObject.response;

    this.message = ApiError.createMultiErrorMessage(errorObject, this.errors);
  }
}

export interface BodyResponseCallback {
  (err: Error | ApiError | null, body?: ResponseBody, res?: r.Response): void;
}

export interface RetryOptions {
  retryDelayMultiplier?: number;
  totalTimeout?: number;
  maxRetryDelay?: number;
  autoRetry?: boolean;
  maxRetries?: number;
  retryableErrorFn?: (err: ApiError) => boolean;
}

export interface MakeRequestConfig {
  /**
   * Automatically retry requests if the response is related to rate limits or
   * certain intermittent server errors. We will exponentially backoff
   * subsequent requests by default. (default: true)
   */
  autoRetry?: boolean;

  /**
   * Maximum number of automatic retries attempted before returning the error.
   * (default: 3)
   */
  maxRetries?: number;

  retries?: number;

  retryOptions?: RetryOptions;

  stream?: Duplexify;

  shouldRetryFn?: (response?: r.Response) => boolean;
}

export class Util {
  ApiError = ApiError;
  PartialFailureError = PartialFailureError;

  /**
   * No op.
   *
   * @example
   * function doSomething(callback) {
   *   callback = callback || noop;
   * }
   */
  noop() {}

  /**
   * Uniformly process an API response.
   *
   * @param {*} err - Error value.
   * @param {*} resp - Response value.
   * @param {*} body - Body value.
   * @param {function} callback - The callback function.
   */
  handleResp(
    err: Error | null,
    resp?: r.Response | null,
    body?: ResponseBody,
    callback?: BodyResponseCallback
  ) {
    callback = callback || util.noop;

    const parsedResp = extend(
      true,
      {err: err || null},
      resp && util.parseHttpRespMessage(resp),
      body && util.parseHttpRespBody(body)
    );
    // Assign the parsed body to resp.body, even if { json: false } was passed
    // as a request option.
    // We assume that nobody uses the previously unparsed value of resp.body.
    if (!parsedResp.err && resp && typeof parsedResp.body === 'object') {
      parsedResp.resp.body = parsedResp.body;
    }

    if (parsedResp.err && resp) {
      parsedResp.err.response = resp;
    }

    callback(parsedResp.err, parsedResp.body, parsedResp.resp);
  }

  /**
   * Sniff an incoming HTTP response message for errors.
   *
   * @param {object} httpRespMessage - An incoming HTTP response message from `request`.
   * @return {object} parsedHttpRespMessage - The parsed response.
   * @param {?error} parsedHttpRespMessage.err - An error detected.
   * @param {object} parsedHttpRespMessage.resp - The original response object.
   */
  parseHttpRespMessage(httpRespMessage: r.Response) {
    const parsedHttpRespMessage = {
      resp: httpRespMessage,
    } as ParsedHttpRespMessage;

    if (httpRespMessage.statusCode < 200 || httpRespMessage.statusCode > 299) {
      // Unknown error. Format according to ApiError standard.
      parsedHttpRespMessage.err = new ApiError({
        errors: new Array<GoogleInnerError>(),
        code: httpRespMessage.statusCode,
        message: httpRespMessage.statusMessage,
        response: httpRespMessage,
      });
    }

    return parsedHttpRespMessage;
  }

  /**
   * Parse the response body from an HTTP request.
   *
   * @param {object} body - The response body.
   * @return {object} parsedHttpRespMessage - The parsed response.
   * @param {?error} parsedHttpRespMessage.err - An error detected.
   * @param {object} parsedHttpRespMessage.body - The original body value provided
   *     will try to be JSON.parse'd. If it's successful, the parsed value will
   * be returned here, otherwise the original value and an error will be returned.
   */
  parseHttpRespBody(body: ResponseBody) {
    const parsedHttpRespBody: ParsedHttpResponseBody = {
      body,
    };

    if (typeof body === 'string') {
      try {
        parsedHttpRespBody.body = JSON.parse(body);
      } catch (err) {
        parsedHttpRespBody.body = body;
      }
    }

    if (parsedHttpRespBody.body && parsedHttpRespBody.body.error) {
      // Error from JSON API.
      parsedHttpRespBody.err = new ApiError(parsedHttpRespBody.body.error);
    }

    return parsedHttpRespBody;
  }

  /**
   * Take a Duplexify stream, fetch an authenticated connection header, and
   * create an outgoing writable stream.
   *
   * @param {Duplexify} dup - Duplexify stream.
   * @param {object} options - Configuration object.
   * @param {module:common/connection} options.connection - A connection instance used to get a token with and send the request through.
   * @param {object} options.metadata - Metadata to send at the head of the request.
   * @param {object} options.request - Request object, in the format of a standard Node.js http.request() object.
   * @param {string=} options.request.method - Default: "POST".
   * @param {string=} options.request.qs.uploadType - Default: "multipart".
   * @param {string=} options.streamContentType - Default: "application/octet-stream".
   * @param {function} onComplete - Callback, executed after the writable Request stream has completed.
   */
  makeWritableStream(
    dup: Duplexify,
    options: MakeWritableStreamOptions,
    onComplete?: Function
  ) {
    onComplete = onComplete || util.noop;

    const writeStream = new ProgressStream();
    writeStream.on('progress', evt => dup.emit('progress', evt));
    dup.setWritable(writeStream);

    const defaultReqOpts = {
      method: 'POST',
      qs: {
        uploadType: 'multipart',
      },
      timeout: 0,
      maxRetries: 0,
    };

    const metadata = options.metadata || {};

    const reqOpts = extend(true, defaultReqOpts, options.request, {
      multipart: [
        {
          'Content-Type': 'application/json',
          body: JSON.stringify(metadata),
        },
        {
          'Content-Type': metadata.contentType || 'application/octet-stream',
          body: writeStream,
        },
      ],
    }) as r.OptionsWithUri;

    options.makeAuthenticatedRequest(reqOpts, {
      onAuthenticated(err, authenticatedReqOpts) {
        if (err) {
          dup.destroy(err);
          return;
        }

        requestDefaults.headers = util._getDefaultHeaders();
        const request = teenyRequest.defaults(requestDefaults);
        request(authenticatedReqOpts!, (err, resp, body) => {
          util.handleResp(err, resp, body, (err, data) => {
            if (err) {
              dup.destroy(err);
              return;
            }
            dup.emit('response', resp);
            onComplete!(data);
          });
        });
      },
    });
  }

  /**
   * Returns true if the API request should be retried, given the error that was
   * given the first time the request was attempted. This is used for rate limit
   * related errors as well as intermittent server errors.
   *
   * @param {error} err - The API error to check if it is appropriate to retry.
   * @return {boolean} True if the API request should be retried, false otherwise.
   */
  shouldRetryRequest(err?: ApiError) {
    if (err) {
      if ([408, 429, 500, 502, 503, 504].indexOf(err.code!) !== -1) {
        return true;
      }

      if (err.errors) {
        for (const e of err.errors) {
          const reason = e.reason;
          if (reason === 'rateLimitExceeded') {
            return true;
          }
          if (reason === 'userRateLimitExceeded') {
            return true;
          }
          if (reason && reason.includes('EAI_AGAIN')) {
            return true;
          }
        }
      }
    }

    return false;
  }

  /**
   * Get a function for making authenticated requests.
   *
   * @param {object} config - Configuration object.
   * @param {boolean=} config.autoRetry - Automatically retry requests if the
   *     response is related to rate limits or certain intermittent server
   * errors. We will exponentially backoff subsequent requests by default.
   * (default: true)
   * @param {object=} config.credentials - Credentials object.
   * @param {boolean=} config.customEndpoint - If true, just return the provided request options. Default: false.
   * @param {boolean=} config.useAuthWithCustomEndpoint - If true, will authenticate when using a custom endpoint. Default: false.
   * @param {string=} config.email - Account email address, required for PEM/P12 usage.
   * @param {number=} config.maxRetries - Maximum number of automatic retries attempted before returning the error. (default: 3)
   * @param {string=} config.keyFile - Path to a .json, .pem, or .p12 keyfile.
   * @param {array} config.scopes - Array of scopes required for the API.
   */
  makeAuthenticatedRequestFactory(
    config: MakeAuthenticatedRequestFactoryConfig
  ) {
    const googleAutoAuthConfig = extend({}, config);
    if (googleAutoAuthConfig.projectId === '{{projectId}}') {
      delete googleAutoAuthConfig.projectId;
    }

    let authClient: GoogleAuth<AuthClient>;

    if (googleAutoAuthConfig.authClient instanceof GoogleAuth) {
      // Use an existing `GoogleAuth`
      authClient = googleAutoAuthConfig.authClient;
    } else {
      // Pass an `AuthClient` to `GoogleAuth`, if available
      const config = {
        ...googleAutoAuthConfig,
        authClient: googleAutoAuthConfig.authClient,
      };

      authClient = new GoogleAuth(config);
    }

    /**
     * The returned function that will make an authenticated request.
     *
     * @param {type} reqOpts - Request options in the format `request` expects.
     * @param {object|function} options - Configuration object or callback function.
     * @param {function=} options.onAuthenticated - If provided, a request will
     *     not be made. Instead, this function is passed the error &
     * authenticated request options.
     */
    function makeAuthenticatedRequest(
      reqOpts: DecorateRequestOptions
    ): Duplexify;
    function makeAuthenticatedRequest(
      reqOpts: DecorateRequestOptions,
      options?: MakeAuthenticatedRequestOptions
    ): void | Abortable;
    function makeAuthenticatedRequest(
      reqOpts: DecorateRequestOptions,
      callback?: BodyResponseCallback
    ): void | Abortable;
    function makeAuthenticatedRequest(
      reqOpts: DecorateRequestOptions,
      optionsOrCallback?: MakeAuthenticatedRequestOptions | BodyResponseCallback
    ): void | Abortable | Duplexify {
      let stream: Duplexify;
      let projectId: string;
      const reqConfig = extend({}, config);
      let activeRequest_: void | Abortable | null;

      if (!optionsOrCallback) {
        stream = duplexify();
        reqConfig.stream = stream;
      }

      const options =
        typeof optionsOrCallback === 'object' ? optionsOrCallback : undefined;
      const callback =
        typeof optionsOrCallback === 'function' ? optionsOrCallback : undefined;

      const onAuthenticated = (
        err: Error | null,
        authenticatedReqOpts?: DecorateRequestOptions
      ) => {
        const authLibraryError = err;
        const autoAuthFailed =
          err &&
          err.message.indexOf('Could not load the default credentials') > -1;

        if (autoAuthFailed) {
          // Even though authentication failed, the API might not actually
          // care.
          authenticatedReqOpts = reqOpts;
        }

        if (!err || autoAuthFailed) {
          try {
            authenticatedReqOpts = util.decorateRequest(
              authenticatedReqOpts!,
              projectId
            );
            err = null;
          } catch (e) {
            // A projectId was required, but we don't have one.
            // Re-use the "Could not load the default credentials error" if
            // auto auth failed.
            err = err || (e as Error);
          }
        }

        if (err) {
          if (stream) {
            stream.destroy(err);
          } else {
            const fn =
              options && options.onAuthenticated
                ? options.onAuthenticated
                : callback;
            (fn as Function)(err);
          }
          return;
        }

        if (options && options.onAuthenticated) {
          options.onAuthenticated(null, authenticatedReqOpts);
        } else {
          activeRequest_ = util.makeRequest(
            authenticatedReqOpts!,
            reqConfig,
            (apiResponseError, ...params) => {
              if (
                apiResponseError &&
                (apiResponseError as ApiError).code === 401 &&
                authLibraryError
              ) {
                // Re-use the "Could not load the default credentials error" if
                // the API request failed due to missing credentials.
                apiResponseError = authLibraryError;
              }
              callback!(apiResponseError, ...params);
            }
          );
        }
      };

      Promise.all([
        config.projectId && config.projectId !== '{{projectId}}'
          ? // The user provided a project ID. We don't need to check with the
            // auth client, it could be incorrect.
            new Promise(resolve => resolve(config.projectId))
          : authClient.getProjectId(),
        reqConfig.customEndpoint && reqConfig.useAuthWithCustomEndpoint !== true
          ? // Using a custom API override. Do not use `google-auth-library` for
            // authentication. (ex: connecting to a local Datastore server)
            new Promise(resolve => resolve(reqOpts))
          : authClient.authorizeRequest(reqOpts),
      ])
        .then(([_projectId, authorizedReqOpts]) => {
          projectId = _projectId as string;
          onAuthenticated(null, authorizedReqOpts as DecorateRequestOptions);
        })
        .catch(onAuthenticated);

      if (stream!) {
        return stream!;
      }

      return {
        abort() {
          setImmediate(() => {
            if (activeRequest_) {
              activeRequest_.abort();
              activeRequest_ = null;
            }
          });
        },
      };
    }
    const mar = makeAuthenticatedRequest as MakeAuthenticatedRequest;
    mar.getCredentials = authClient.getCredentials.bind(authClient);
    mar.authClient = authClient;
    return mar;
  }

  /**
   * Make a request through the `retryRequest` module with built-in error
   * handling and exponential back off.
   *
   * @param {object} reqOpts - Request options in the format `request` expects.
   * @param {object=} config - Configuration object.
   * @param {boolean=} config.autoRetry - Automatically retry requests if the
   *     response is related to rate limits or certain intermittent server
   * errors. We will exponentially backoff subsequent requests by default.
   * (default: true)
   * @param {number=} config.maxRetries - Maximum number of automatic retries
   *     attempted before returning the error. (default: 3)
   * @param {object=} config.request - HTTP module for request calls.
   * @param {function} callback - The callback function.
   */
  makeRequest(
    reqOpts: DecorateRequestOptions,
    config: MakeRequestConfig,
    callback: BodyResponseCallback
  ): void | Abortable {
    let autoRetryValue = AUTO_RETRY_DEFAULT;
    if (
      config.autoRetry !== undefined &&
      config.retryOptions?.autoRetry !== undefined
    ) {
      throw new ApiError(
        'autoRetry is deprecated. Use retryOptions.autoRetry instead.'
      );
    } else if (config.autoRetry !== undefined) {
      autoRetryValue = config.autoRetry;
    } else if (config.retryOptions?.autoRetry !== undefined) {
      autoRetryValue = config.retryOptions.autoRetry;
    }

    let maxRetryValue = MAX_RETRY_DEFAULT;
    if (config.maxRetries && config.retryOptions?.maxRetries) {
      throw new ApiError(
        'maxRetries is deprecated. Use retryOptions.maxRetries instead.'
      );
    } else if (config.maxRetries) {
      maxRetryValue = config.maxRetries;
    } else if (config.retryOptions?.maxRetries) {
      maxRetryValue = config.retryOptions.maxRetries;
    }

    requestDefaults.headers = this._getDefaultHeaders();
    const options = {
      request: teenyRequest.defaults(requestDefaults),
      retries: autoRetryValue !== false ? maxRetryValue : 0,
      noResponseRetries: autoRetryValue !== false ? maxRetryValue : 0,
      shouldRetryFn(httpRespMessage: r.Response) {
        const err = util.parseHttpRespMessage(httpRespMessage).err;
        if (config.retryOptions?.retryableErrorFn) {
          return err && config.retryOptions?.retryableErrorFn(err);
        }
        return err && util.shouldRetryRequest(err);
      },
      maxRetryDelay: config.retryOptions?.maxRetryDelay,
      retryDelayMultiplier: config.retryOptions?.retryDelayMultiplier,
      totalTimeout: config.retryOptions?.totalTimeout,
    } as {} as retryRequest.Options;

    if (typeof reqOpts.maxRetries === 'number') {
      options.retries = reqOpts.maxRetries;
    }

    if (!config.stream) {
      return retryRequest(
        reqOpts,
        options,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err: Error | null, response: {}, body: any) => {
          util.handleResp(err, response as {} as r.Response, body, callback!);
        }
      );
    }
    const dup = config.stream as AbortableDuplex;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let requestStream: any;
    const isGetRequest = (reqOpts.method || 'GET').toUpperCase() === 'GET';

    if (isGetRequest) {
      requestStream = retryRequest(reqOpts, options);
      dup.setReadable(requestStream);
    } else {
      // Streaming writable HTTP requests cannot be retried.
      requestStream = options.request!(reqOpts);
      dup.setWritable(requestStream);
    }

    // Replay the Request events back to the stream.
    requestStream
      .on('error', dup.destroy.bind(dup))
      .on('response', dup.emit.bind(dup, 'response'))
      .on('complete', dup.emit.bind(dup, 'complete'));

    dup.abort = requestStream.abort;
    return dup;
  }

  /**
   * Decorate the options about to be made in a request.
   *
   * @param {object} reqOpts - The options to be passed to `request`.
   * @param {string} projectId - The project ID.
   * @return {object} reqOpts - The decorated reqOpts.
   */
  decorateRequest(reqOpts: DecorateRequestOptions, projectId: string) {
    delete reqOpts.autoPaginate;
    delete reqOpts.autoPaginateVal;
    delete reqOpts.objectMode;

    if (reqOpts.qs !== null && typeof reqOpts.qs === 'object') {
      delete reqOpts.qs.autoPaginate;
      delete reqOpts.qs.autoPaginateVal;
      reqOpts.qs = replaceProjectIdToken(reqOpts.qs, projectId);
    }

    if (Array.isArray(reqOpts.multipart)) {
      reqOpts.multipart = (reqOpts.multipart as []).map(part => {
        return replaceProjectIdToken(part, projectId);
      });
    }

    if (reqOpts.json !== null && typeof reqOpts.json === 'object') {
      delete reqOpts.json.autoPaginate;
      delete reqOpts.json.autoPaginateVal;
      reqOpts.json = replaceProjectIdToken(reqOpts.json, projectId);
    }

    reqOpts.uri = replaceProjectIdToken(reqOpts.uri, projectId);

    return reqOpts;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isCustomType(unknown: any, module: string) {
    function getConstructorName(obj: Function) {
      return obj.constructor && obj.constructor.name.toLowerCase();
    }

    const moduleNameParts = module.split('/');

    const parentModuleName =
      moduleNameParts[0] && moduleNameParts[0].toLowerCase();
    const subModuleName =
      moduleNameParts[1] && moduleNameParts[1].toLowerCase();

    if (subModuleName && getConstructorName(unknown) !== subModuleName) {
      return false;
    }

    let walkingModule = unknown;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (getConstructorName(walkingModule) === parentModuleName) {
        return true;
      }
      walkingModule = walkingModule.parent;
      if (!walkingModule) {
        return false;
      }
    }
  }

  /**
   * Create a properly-formatted User-Agent string from a package.json file.
   *
   * @param {object} packageJson - A module's package.json file.
   * @return {string} userAgent - The formatted User-Agent string.
   */
  getUserAgentFromPackageJson(packageJson: PackageJson) {
    const hyphenatedPackageName = packageJson.name
      .replace('@google-cloud', 'gcloud-node') // For legacy purposes.
      .replace('/', '-'); // For UA spec-compliance purposes.

    return hyphenatedPackageName + '/' + packageJson.version;
  }

  /**
   * Given two parameters, figure out if this is either:
   *  - Just a callback function
   *  - An options object, and then a callback function
   * @param optionsOrCallback An options object or callback.
   * @param cb A potentially undefined callback.
   */
  maybeOptionsOrCallback<T = {}, C = (err?: Error) => void>(
    optionsOrCallback?: T | C,
    cb?: C
  ): [T, C] {
    return typeof optionsOrCallback === 'function'
      ? [{} as T, optionsOrCallback as C]
      : [optionsOrCallback as T, cb as C];
  }

  _getDefaultHeaders() {
    return {
      'User-Agent': util.getUserAgentFromPackageJson(packageJson),
      'x-goog-api-client': `gl-node/${process.versions.node} gccl/${
        packageJson.version
      } gccl-invocation-id/${uuid.v4()}`,
    };
  }
}

/**
 * Basic Passthrough Stream that records the number of bytes read
 * every time the cursor is moved.
 */
class ProgressStream extends Transform {
  bytesRead = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _transform(chunk: any, encoding: string, callback: Function) {
    this.bytesRead += chunk.length;
    this.emit('progress', {bytesWritten: this.bytesRead, contentLength: '*'});
    this.push(chunk);
    callback();
  }
}

const util = new Util();
export {util};
