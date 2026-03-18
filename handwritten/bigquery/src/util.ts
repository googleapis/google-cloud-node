// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Convert a value to an array. Replacement to arrify
 * @internal
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
 * Check if value is an object.
 * @internal
 */
export function isObject(value: any) {
  return value && [undefined, Object].includes(value.constructor);
}

/**
 * Check if value is an object.
 * @internal
 */
export function isString(value: any) {
  return Object.prototype.toString.call(value) === '[object String]';
}

/**
 * Check if value is an array.
 * @internal
 */
export function isArray(value: any) {
  return Array.isArray(value);
}

/**
 * Check if value is an instance of Date.
 * @internal
 */
export function isDate(value: any) {
  return value instanceof Date;
}

/**
 * Check if value is a boolean.
 * @internal
 */
export function isBoolean(value: any) {
  return Object.prototype.toString.call(value) === '[object Boolean]';
}

/**
 * Check if value is a number.
 * @internal
 */
export function isNumber(value: any) {
  return Object.prototype.toString.call(value) === '[object Number]';
}
