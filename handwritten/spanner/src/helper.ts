/**
 * Copyright 2024 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {grpc} from 'google-gax';
import {Stream} from 'stream';
/**
 * Checks whether the given error is a 'Database not found' error.
 * @param {Error} error The error to check.
 * @return {boolean} True if the error is a 'Database not found' error, and otherwise false.
 */
export function isDatabaseNotFoundError(
  error: grpc.ServiceError | undefined,
): boolean {
  return (
    error !== undefined &&
    error.code === grpc.status.NOT_FOUND &&
    error.message.includes('Database not found')
  );
}

/**
 * Checks whether the given error is an 'Instance not found' error.
 * @param {Error} error The error to check.
 * @return {boolean} True if the error is an 'Instance not found' error, and otherwise false.
 */
export function isInstanceNotFoundError(
  error: grpc.ServiceError | undefined,
): boolean {
  return (
    error !== undefined &&
    error.code === grpc.status.NOT_FOUND &&
    error.message.includes('Instance not found')
  );
}

/**
 * Checks whether the given error is a 'Could not load the default credentials' error.
 * @param {Error} error The error to check.
 * @return {boolean} True if the error is a 'Could not load the default credentials' error, and otherwise false.
 */
export function isDefaultCredentialsNotSetError(
  error: grpc.ServiceError | undefined,
): boolean {
  return (
    error !== undefined &&
    error.message.includes('Could not load the default credentials')
  );
}

/**
 * Checks whether the given error is an 'Unable to detect a Project Id in the current environment' error.
 * @param {Error} error The error to check.
 * @return {boolean} True if the error is an 'Unable to detect a Project Id in the current environment' error, and otherwise false.
 */
export function isProjectIdNotSetInEnvironmentError(
  error: grpc.ServiceError | undefined,
): boolean {
  return (
    error !== undefined &&
    error.message.includes(
      'Unable to detect a Project Id in the current environment',
    )
  );
}

/**
 * Checks whether the given error is a 'Create session permission' error.
 * @param {Error} error The error to check.
 * @return {boolean} True if the error is a 'Create session permission' error, and otherwise false.
 */
export function isCreateSessionPermissionError(
  error: grpc.ServiceError | undefined,
): boolean {
  return (
    error !== undefined &&
    error.code === grpc.status.PERMISSION_DENIED &&
    error.message.includes('spanner.sessions.create')
  );
}

/**
 * Converts any value into an array. Acts as a replacement for `arrify`.
 * If the value is null or undefined, returns an empty array.
 * If the value is already an array, returns is unchanges.
 * Otherwise, wraps the value in a new array.
 * @param value The value to convert into an array.
 * @returns An array containing the value, or an empty array.
 */
export function toArray(value: any) {
  if (value === null || value === undefined) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === 'string') {
    return [value];
  }

  if (typeof value[Symbol.iterator] === 'function') {
    return [...value];
  }

  return [value];
}

/**
 * Checks if a value is defined.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is NOT `undefined`, otherwise `false`.
 */
export function isDefined(value: any): boolean {
  return typeof value !== 'undefined';
}

/**
 * Checks if a value is null.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is null, otherwise `false`.
 */
export function isNull(value: any): boolean {
  return value === null;
}

/**
 * Checks if a value is undefined.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is `undefined`, otherwise `false`.
 */
export function isUndefined(value: any): boolean {
  return typeof value === 'undefined';
}

/**
 * Checks if a value is empty.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is empty, otherwise `false`.
 */
export function isEmpty(value: any): boolean {
  const type = Object.prototype.toString.call(value);
  if (
    type === '[object Array]' ||
    type === '[object Arguments]' ||
    type === '[object String]'
  ) {
    return value.length === 0;
  }
  if (type === '[object Object]') {
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        return false;
      }
    }
    return true;
  }
  return !value;
}

/**
 * Checks if a value is a plain javascript object.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is an object, otherwise `false`.
 */
export function isObject(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * Checks if a value is a string.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is string, otherwise `false`.
 */
export function isString(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object String]';
}

/**
 * Checks if a value is an array.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is an array, otherwise `false`.
 */
export function isArray(value: any): boolean {
  return Array.isArray(value);
}

/**
 * Checks if a value is a Date object.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is a `Date` object, otherwise `false`.
 */
export function isDate(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * Checks if a value is a boolean.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is boolean, otherwise `false`.
 */
export function isBoolean(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Boolean]';
}

/**
 * Checks if a value is a number.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is a number, otherwise `false`.
 */
export function isNumber(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Number]';
}

/**
 * Checks if a value is an integer.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is an integer, otherwise `false`.
 */
export function isInteger(value: any): boolean {
  return Number.isInteger(value);
}

/**
 * Checks if a value is `NaN`.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is `NaN`, otherwise `false`.
 */
export function isActualNaN(value: any): boolean {
  return value !== value;
}

/**
 * Checks if a value is a non-integer (decimal) number.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is a decimal number, otherwise `false`.
 */
export function isDecimal(value: any): boolean {
  // A number is a decimal if it's a number but not an integer.
  return (
    isNumber(value) &&
    !isInfinite(value) &&
    !isActualNaN(value) &&
    value % 1 !== 0
  );
}

/**
 * Checks if a value is `Infinity` or `-Infinity`.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is infinite, otherwise `false`.
 */
export function isInfinite(value: any): boolean {
  return value === Infinity || value === -Infinity;
}

/**
 * Checks if a value is an `Error` object.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is an `Error` object, otherwise `false`.
 */
export function isError(value: any): boolean {
  return (
    value instanceof Error ||
    Object.prototype.toString.call(value) === '[object Error]'
  );
}

const UUID_REGEX =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;

/**
 * Checks if a value is a UUID.
 * @param {*} value The value to check.
 * @returns {Boolean} `true` if the value is a UUID, otherwise `false`.
 */
export function isUuid(value: any): boolean {
  return typeof value === 'string' && UUID_REGEX.test(value);
}

const PROJECT_ID_TOKEN = '{{projectId}}';
const PROJECT_ID_TOKEN_REGEX = /{{projectId}}/g;

// Whitelisted request properties that contain, or lead to, resource name strings with project ID placeholders.
const KEYS_TO_SCAN = new Set([
  'database',
  'session',
  'name',
  'parent',
  'instance',
  'resource',
  'backup',
  'instanceConfig',
  'baseConfig',
  'kmsKeyName',
  // Intermediate object keys that must be traversed to reach the above leaves
  'config',
  'encryptionConfig',
]);

/**
 * Populate the `{{projectId}}` placeholder.
 *
 * @throws {Error} If a projectId is required, but one is not provided.
 *
 * @param {*} - Any input value that may contain a placeholder. Arrays and objects will be looped.
 * @param {string} projectId - A projectId. If not provided
 * @return {*} - The original argument with all placeholders populated.
 */
export function replaceProjectIdToken(value: any, projectId: string): any {
  if (typeof value === 'string') {
    if (value.includes(PROJECT_ID_TOKEN)) {
      if (!projectId || projectId === PROJECT_ID_TOKEN) {
        throw new MissingProjectIdError();
      }
      return value.replace(PROJECT_ID_TOKEN_REGEX, projectId);
    }
    return value;
  }

  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const original = value[i];
      const processed = replaceProjectIdToken(original, projectId);
      if (processed !== original) {
        value[i] = processed;
      }
    }
    return value;
  }

  if (value instanceof Buffer || value instanceof Stream || isDate(value)) {
    return value;
  }

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      if (!KEYS_TO_SCAN.has(key)) {
        continue;
      }
      const original = value[key];
      const processed = replaceProjectIdToken(original, projectId);
      if (processed !== original) {
        value[key] = processed;
      }
    }
  }

  return value;
}

/**
 * Custom error type for missing project ID errors.
 */
class MissingProjectIdError extends Error {
  constructor() {
    super(
      `Sorry, we cannot connect to Cloud Services without a project
    ID. You may specify one with an environment variable named
    "GOOGLE_CLOUD_PROJECT".`.replace(/ +/g, ' '),
    );
  }
}
