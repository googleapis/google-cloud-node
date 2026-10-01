// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'node:assert';

/**
 * Subset of `process.versions` used for runtime detection.
 */
export interface RuntimeVersions {
  node?: string;
  bun?: string;
  [key: string]: string | undefined;
}

/**
 * Returns the active runtime versions dictionary, falling back to `process.versions`
 * when available.
 */
function resolveVersions(versions?: RuntimeVersions): RuntimeVersions {
  if (versions) {
    return versions;
  }
  return typeof process !== 'undefined' && process?.versions
    ? {...process.versions}
    : {};
}

/**
 * Returns true if the current (or provided) runtime environment is Bun.
 */
export function isBun(versions?: RuntimeVersions): boolean {
  const resolved = resolveVersions(versions);
  return typeof resolved.bun === 'string' && resolved.bun.length > 0;
}

/**
 * Returns true if the current (or provided) runtime environment is Node.js
 * (and not Bun running under a Node compatibility layer).
 */
export function isNode(versions?: RuntimeVersions): boolean {
  const resolved = resolveVersions(versions);
  return (
    !isBun(resolved) &&
    typeof resolved.node === 'string' &&
    resolved.node.length > 0
  );
}

/**
 * Parses and returns the major Node.js version number (from `process.versions.node`),
 * or `undefined` if unavailable or invalid.
 */
export function getNodeMajorVersion(
  versions?: RuntimeVersions,
): number | undefined {
  const resolved = resolveVersions(versions);
  if (typeof resolved.node !== 'string' || resolved.node.length === 0) {
    return undefined;
  }
  const major = Number.parseInt(resolved.node.split('.')[0], 10);
  return Number.isNaN(major) ? undefined : major;
}

/**
 * Returns true if `assert.deepStrictEqual` in the current (or provided) runtime
 * requires strict prototype identity when comparing an `Array` subclass (even with
 * `constructor === Array`) against a plain `Array` literal.
 *
 * Node.js 18 and Bun enforce strict prototype equality on `Array` subclasses,
 * whereas Node.js 20+ allows comparing `Array` subclasses whose constructor is
 * `Array` against plain arrays.
 */
export function requiresStrictArrayPrototypeEquality(
  versions?: RuntimeVersions,
): boolean {
  const resolved = resolveVersions(versions);
  if (isBun(resolved)) {
    return true;
  }
  const nodeMajor = getNodeMajorVersion(resolved);
  if (nodeMajor !== undefined && nodeMajor < 20) {
    return true;
  }
  return false;
}

function toPlainArray(val: unknown): unknown {
  return Array.isArray(val) ? Array.from(val, toPlainArray) : val;
}

/**
 * Asserts `deepStrictEqual` between an `Array` (or `Array` subclass instance such as
 * Spanner's `RowImpl`) and an expected array, recursively normalizing any `Array`
 * subclasses to plain arrays only on runtimes that enforce strict prototype equality.
 */
export function assertArraySubclassStrictEqual<T>(
  actual: ReadonlyArray<T>,
  expected: ReadonlyArray<T>,
  message?: string | Error,
  versions?: RuntimeVersions,
): void {
  const normalizedActual = requiresStrictArrayPrototypeEquality(versions)
    ? toPlainArray(actual)
    : actual;
  const normalizedExpected = requiresStrictArrayPrototypeEquality(versions)
    ? toPlainArray(expected)
    : expected;

  if (message !== undefined) {
    assert.deepStrictEqual(normalizedActual, normalizedExpected, message);
  } else {
    assert.deepStrictEqual(normalizedActual, normalizedExpected);
  }
}

/**
 * Regular expression matching read-only / frozen property assignment `TypeError`
 * messages across V8 (Node.js) and JavaScriptCore (Bun).
 */
export const READONLY_PROPERTY_ERROR_REGEX =
  /Cannot assign to read only property|Attempted to assign to readonly property/;

/**
 * Predicate suitable for `assert.throws(fn, isReadOnlyPropertyError)` that checks
 * whether an error is a `TypeError` caused by mutating a read-only or frozen property
 * across V8 (Node.js) and JavaScriptCore (Bun).
 *
 * @param err The thrown value to inspect.
 * @param propertyName Optional property name expected to be mentioned in the error message
 *   when the engine includes property names in read-only errors (V8).
 */
export function isReadOnlyPropertyError(
  err: unknown,
  propertyName?: string,
): boolean {
  if (!(err instanceof TypeError)) {
    return false;
  }
  if (!READONLY_PROPERTY_ERROR_REGEX.test(err.message)) {
    return false;
  }
  if (
    propertyName !== undefined &&
    err.message.includes('Cannot assign to read only property')
  ) {
    return err.message.includes(`'${propertyName}'`);
  }
  return true;
}
