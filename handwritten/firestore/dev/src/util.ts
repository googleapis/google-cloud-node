/*!
 * Copyright 2018 Google Inc. All Rights Reserved.
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

import {DocumentData} from '@google-cloud/firestore';

import {randomBytes} from 'crypto';
import type {CallSettings, ClientConfig, GoogleError} from 'google-gax';
import type {BackoffSettings} from 'google-gax/build/src/gax';
import * as gapicConfig from './v1/firestore_client_config.json';
import Dict = NodeJS.Dict;

/**
 * A Promise implementation that supports deferred resolution.
 * @private
 * @internal
 */
export class Deferred<R> {
  promise: Promise<R>;
  resolve: (value: R | Promise<R>) => void = () => {};
  reject: (reason: Error) => void = () => {};

  constructor() {
    this.promise = new Promise<R>(
      (
        resolve: (value: R | Promise<R>) => void,
        reject: (reason: Error) => void,
      ) => {
        this.resolve = resolve;
        this.reject = reject;
      },
    );
  }
}

/**
 * Generate a unique client-side identifier.
 *
 * Used for the creation of new documents.
 *
 * @private
 * @internal
 * @returns {string} A unique 20-character wide identifier.
 */
export function autoId(): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let autoId = '';
  while (autoId.length < 20) {
    const bytes = randomBytes(40);
    bytes.forEach(b => {
      // Length of `chars` is 62. We only take bytes between 0 and 62*4-1
      // (both inclusive). The value is then evenly mapped to indices of `char`
      // via a modulo operation.
      const maxValue = 62 * 4 - 1;
      if (autoId.length < 20 && b <= maxValue) {
        autoId += chars.charAt(b % 62);
      }
    });
  }
  return autoId;
}

/**
 * Generate a short and semi-random client-side identifier.
 *
 * Used for the creation of request tags.
 *
 * @private
 * @internal
 * @returns {string} A random 5-character wide identifier.
 */
export function requestTag(): string {
  return autoId().substr(0, 5);
}

/**
 * Determines whether `value` is a JavaScript object.
 *
 * @private
 * @internal
 */
export function isObject(value: unknown): value is {[k: string]: unknown} {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * Verifies that 'obj' is a plain JavaScript object that can be encoded as a
 * 'Map' in Firestore.
 *
 * @private
 * @internal
 * @param input The argument to verify.
 * @returns 'true' if the input can be a treated as a plain object.
 */
export function isPlainObject(input: unknown): input is DocumentData {
  return (
    isObject(input) &&
    (Object.getPrototypeOf(input) === Object.prototype ||
      Object.getPrototypeOf(input) === null ||
      input.constructor.name === 'Object')
  );
}

/**
 * Returns whether `value` has no custom properties.
 *
 * @private
 * @internal
 */
export function isEmpty(value: {}): boolean {
  return Object.keys(value).length === 0;
}

/**
 * Determines whether `value` is a JavaScript function.
 *
 * @private
 * @internal
 */
export function isFunction(value: unknown): boolean {
  return typeof value === 'function';
}

/**
 * Determines whether the provided error is considered permanent for the given
 * RPC.
 *
 * @private
 * @internal
 */
export function isPermanentRpcError(
  err: GoogleError,
  methodName: string,
): boolean {
  if (err.code !== undefined) {
    const retryCodes = getRetryCodes(methodName);
    return retryCodes.indexOf(err.code) === -1;
  } else {
    return false;
  }
}

let serviceConfig: Record<string, CallSettings> | undefined;

/**
 * Lazy-loads the service config when first accessed.
 * @private
 * @internal
 **/
function getServiceConfig(methodName: string): CallSettings | undefined {
  if (!serviceConfig) {
    serviceConfig = require('google-gax/fallback').constructSettings(
      'google.firestore.v1.Firestore',
      gapicConfig as ClientConfig,
      {},
      require('google-gax').Status,
    ) as {[k: string]: CallSettings};
  }
  return serviceConfig[methodName];
}

/**
 * Returns the list of retryable error codes specified in the service
 * configuration.
 * @private
 * @internal
 */
export function getRetryCodes(methodName: string): number[] {
  return getServiceConfig(methodName)?.retry?.retryCodes ?? [];
}

/**
 * Gets the total timeout in milliseconds from the retry settings in
 * the service config for the given RPC. If the total timeout is not
 * set, then `0` is returned.
 *
 * @private
 * @internal
 */
export function getTotalTimeout(methodName: string): number {
  return (
    getServiceConfig(methodName)?.retry?.backoffSettings?.totalTimeoutMillis ??
    0
  );
}

/**
 * Returns the backoff setting from the service configuration.
 * @private
 * @internal
 */
export function getRetryParams(methodName: string): BackoffSettings {
  return (
    getServiceConfig(methodName)?.retry?.backoffSettings ??
    require('google-gax/fallback').createDefaultBackoffSettings()
  );
}

/**
 * Returns a promise with a void return type. The returned promise swallows all
 * errors and never throws.
 *
 * This is primarily used to wait for a promise to complete when the result of
 * the promise will be discarded.
 *
 * @private
 * @internal
 */
export function silencePromise(promise: Promise<unknown>): Promise<void> {
  return promise.then(
    () => {},
    () => {},
  );
}

/**
 * Wraps the provided error in a new error that includes the provided stack.
 *
 * Used to preserve stack traces across async calls.
 * @private
 * @internal
 */
export function wrapError(err: Error, stack: string): Error {
  err.stack += '\nCaused by: ' + stack;
  return err;
}

/**
 * Parses the value of the environment variable FIRESTORE_PREFER_REST, and
 * returns a value indicating if the environment variable enables or disables
 * preferRest.
 *
 * This function will warn to the console if the environment variable is set
 * to an unsupported value.
 *
 * @returns `true` if the environment variable enables `preferRest`,
 * `false` if the environment variable disables `preferRest`, or `undefined`
 * if the environment variable is not set or is set to an unsupported value.
 *
 * @internal
 * @private
 */
export function tryGetPreferRestEnvironmentVariable(): boolean | undefined {
  const rawValue = process.env.FIRESTORE_PREFER_REST?.trim().toLowerCase();
  if (rawValue === undefined) {
    return undefined;
  } else if (rawValue === '1' || rawValue === 'true') {
    return true;
  } else if (rawValue === '0' || rawValue === 'false') {
    return false;
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      `An unsupported value was specified for the environment variable FIRESTORE_PREFER_REST. Value ${rawValue} is unsupported.`,
    );
    return undefined;
  }
}

/**
 * Returns an array of values that are calculated by performing the given `fn`
 * on all keys in the given `obj` dictionary.
 *
 * @private
 * @internal
 */
export function mapToArray<V, R>(
  obj: Dict<V>,
  fn: (element: V, key: string, obj: Dict<V>) => R,
): R[] {
  const result: R[] = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push(fn(obj[key]!, key, obj));
    }
  }
  return result;
}

/**
 * Verifies equality for an array of objects using the `isEqual` interface.
 *
 * @private
 * @internal
 * @param left Array of objects supporting `isEqual`.
 * @param right Array of objects supporting `isEqual`.
 * @returns True if arrays are equal.
 */
export function isArrayEqual<T extends {isEqual: (t: T) => boolean}>(
  left: T[],
  right: T[],
): boolean {
  if (left.length !== right.length) {
    return false;
  }

  for (let i = 0; i < left.length; ++i) {
    if (!left[i].isEqual(right[i])) {
      return false;
    }
  }

  return true;
}

/**
 * Verifies equality for an optional type using the `isEqual` interface.
 *
 * @private
 * @internal
 * @param left Optional object supporting `isEqual`.
 * @param right Optional object supporting `isEqual`.
 * @returns True if equal.
 */
export function isOptionalEqual<T extends {isEqual: (t: T) => boolean}>(
  left: T | undefined,
  right: T | undefined,
): boolean {
  if (left === undefined && right === undefined) {
    return true;
  }

  if (left === undefined || right === undefined) {
    return false;
  }

  return left.isEqual(right);
}

/**
 * Verifies equality for an array of primitives.
 *
 * @private
 * @internal
 * @param left Array of primitives.
 * @param right Array of primitives.
 * @returns True if arrays are equal.
 */
export function isPrimitiveArrayEqual<T extends number | string>(
  left: T[],
  right: T[],
): boolean {
  if (left.length !== right.length) {
    return false;
  }

  for (let i = 0; i < left.length; ++i) {
    if (left[i] !== right[i]) {
      return false;
    }
  }

  return true;
}

export function cast<T>(
  val: unknown,
  constructor?: {new (...args: unknown[]): T},
): T {
  if (!constructor) {
    return val as T;
  } else if (val instanceof constructor) {
    return val;
  }

  throw new Error(`${val} not instance of ${constructor}`);
}

export function forEach<V>(
  obj: Record<string, V> | undefined,
  fn: (key: string, val: V) => void,
): void {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      fn(key, obj[key]);
    }
  }
}
