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
import {AuthClient, GoogleAuth, GoogleAuthOptions} from 'google-auth-library';
import {Duplex, DuplexOptions, Readable, Transform, Writable} from 'stream';
import * as uuid from 'uuid';
import {
  getModuleFormat,
  getRuntimeTrackingString,
  getUserAgentString,
} from '../util.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {getPackageJSON} from '../package-json-helper.cjs';
import {GaxiosError, GaxiosResponse} from 'gaxios';

const packageJson = getPackageJSON();

/**
 * A unique symbol for providing a `gccl-gcs-cmd` value
 * for the `X-Goog-API-Client` header.
 *
 * E.g. the `V` in `X-Goog-API-Client: gccl-gcs-cmd/V`
 **/
export const GCCL_GCS_CMD_KEY = Symbol.for('GCCL_GCS_CMD');

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
    options?: DuplexifyOptions,
  ): Duplexify;
  new (
    writable?: Writable | false | null,
    readable?: Readable | false | null,
    options?: DuplexifyOptions,
  ): Duplexify;
  (
    writable?: Writable | false | null,
    readable?: Readable | false | null,
    options?: DuplexifyOptions,
  ): Duplexify;
}

export interface ParsedHttpRespMessage {
  resp: GaxiosResponse;
  err?: GaxiosError;
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
   * A new client will be created if this is not set.
   */
  authClient?: AuthClient | GoogleAuth;

  /**
   * Determines if a projectId is required for authenticated requests. Defaults to `true`.
   */
  projectIdRequired?: boolean;
}

export interface GoogleErrorBody {
  code: number;
  errors?: GoogleInnerError[];
  response: GaxiosResponse;
  message?: string;
}

export interface GoogleInnerError {
  reason?: string;
  message?: string;
}

export interface ParsedHttpResponseBody {
  body: ResponseBody;
  err?: Error;
}

export interface BodyResponseCallback {
  (err: GaxiosError | null, body?: ResponseBody, res?: GaxiosResponse): void;
}

export interface RetryOptions {
  retryDelayMultiplier?: number;
  totalTimeout?: number;
  maxRetryDelay?: number;
  autoRetry?: boolean;
  maxRetries?: number;
  retryableErrorFn?: (err: GaxiosError) => boolean;
}

export class Util {
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
   * Returns true if the API request should be retried, given the error that was
   * given the first time the request was attempted. This is used for rate limit
   * related errors as well as intermittent server errors.
   *
   * @param {error} err - The API error to check if it is appropriate to retry.
   * @return {boolean} True if the API request should be retried, false otherwise.
   */
  shouldRetryRequest(err?: GaxiosError) {
    if (err) {
      if ([408, 429, 500, 502, 503, 504].indexOf(err.status!) !== -1) {
        return true;
      }

      if (err.error || err.code) {
        const reason = err.code;
        if (reason === 'rateLimitExceeded') {
          return true;
        }
        if (reason === 'userRateLimitExceeded') {
          return true;
        }
        if (
          reason &&
          typeof reason === 'string' &&
          reason.includes('EAI_AGAIN')
        ) {
          return true;
        }
      }
    }

    return false;
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
   * Given two parameters, figure out if this is either:
   *  - Just a callback function
   *  - An options object, and then a callback function
   * @param optionsOrCallback An options object or callback.
   * @param cb A potentially undefined callback.
   */
  maybeOptionsOrCallback<T = {}, C = (err?: Error) => void>(
    optionsOrCallback?: T | C,
    cb?: C,
  ): [T, C] {
    return typeof optionsOrCallback === 'function'
      ? [{} as T, optionsOrCallback as C]
      : [optionsOrCallback as T, cb as C];
  }

  _getDefaultHeaders(gcclGcsCmd?: string) {
    const headers = {
      'User-Agent': getUserAgentString(),
      'x-goog-api-client': `${getRuntimeTrackingString()} gccl/${
        packageJson.version
      }-${getModuleFormat()} gccl-invocation-id/${uuid.v4()}`,
    };

    if (gcclGcsCmd) {
      headers['x-goog-api-client'] += ` gccl-gcs-cmd/${gcclGcsCmd}`;
    }

    return headers;
  }
}

/**
 * Basic Passthrough Stream that records the number of bytes read
 * every time the cursor is moved.
 */
export class ProgressStream extends Transform {
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
