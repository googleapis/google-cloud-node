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
  deno?: string;
  [key: string]: string | undefined;
}

/**
 * Supported JavaScript runtime identifiers.
 */
export type RuntimeEnvironment = 'node' | 'bun' | 'deno' | 'unknown';

interface GlobalWithDeno {
  Deno?: {
    version?: {
      deno?: string;
    };
  };
}

/**
 * Returns the active runtime versions dictionary, falling back to `process.versions`
 * and `globalThis.Deno.version` when available.
 */
function resolveVersions(versions?: RuntimeVersions): RuntimeVersions {
  if (versions) {
    return versions;
  }
  const procVersions: RuntimeVersions =
    typeof process !== 'undefined' && process?.versions
      ? {...process.versions}
      : {};
  const denoVersion = (globalThis as unknown as GlobalWithDeno).Deno?.version
    ?.deno;
  if (denoVersion && !procVersions.deno) {
    procVersions.deno = denoVersion;
  }
  return procVersions;
}

/**
 * Returns true if the current (or provided) runtime environment is Bun.
 */
export function isBun(versions?: RuntimeVersions): boolean {
  const resolved = resolveVersions(versions);
  return typeof resolved.bun === 'string' && resolved.bun.length > 0;
}

/**
 * Returns true if the current (or provided) runtime environment is Deno.
 */
export function isDeno(versions?: RuntimeVersions): boolean {
  const resolved = resolveVersions(versions);
  return typeof resolved.deno === 'string' && resolved.deno.length > 0;
}

/**
 * Returns true if the current (or provided) runtime environment is Node.js
 * (and not Bun or Deno running under a Node compatibility layer).
 */
export function isNode(versions?: RuntimeVersions): boolean {
  const resolved = resolveVersions(versions);
  return (
    !isBun(resolved) &&
    !isDeno(resolved) &&
    typeof resolved.node === 'string' &&
    resolved.node.length > 0
  );
}

/**
 * Identifies the active JavaScript runtime (`'node'`, `'bun'`, `'deno'`, or `'unknown'`).
 */
export function getRuntime(versions?: RuntimeVersions): RuntimeEnvironment {
  const resolved = resolveVersions(versions);
  if (isBun(resolved)) {
    return 'bun';
  }
  if (isDeno(resolved)) {
    return 'deno';
  }
  if (isNode(resolved)) {
    return 'node';
  }
  return 'unknown';
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
 * whereas Node.js 20+ and Deno (with Node 20+ compatibility) allow comparing
 * `Array` subclasses whose constructor is `Array` against plain arrays.
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

/**
 * Asserts `deepStrictEqual` between an `Array` (or `Array` subclass instance such as
 * Spanner's `RowImpl`) and an expected array, normalizing the `actual` array via
 * spread (`[...actual]`) only on runtimes that enforce strict prototype equality
 * for `Array` subclasses.
 */
export function assertArraySubclassStrictEqual<T>(
  actual: ReadonlyArray<T>,
  expected: ReadonlyArray<T>,
  message?: string | Error,
  versions?: RuntimeVersions,
): void {
  if (requiresStrictArrayPrototypeEquality(versions)) {
    assert.deepStrictEqual([...actual], expected, message);
  } else {
    assert.deepStrictEqual(actual, expected, message);
  }
}

/**
 * Regular expression matching read-only / frozen property assignment `TypeError`
 * messages across V8 (Node.js, Deno) and JavaScriptCore (Bun).
 */
export const READONLY_PROPERTY_ERROR_REGEX =
  /Cannot assign to read only property|Attempted to assign to readonly property/;

/**
 * Predicate suitable for `assert.throws(fn, isReadOnlyPropertyError)` that checks
 * whether an error is a `TypeError` caused by mutating a read-only or frozen property
 * across V8 (Node.js, Deno) and JavaScriptCore (Bun).
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

/**
 * Predicate suitable for `assert.throws` or callback error assertions that checks
 * whether an error is a `TypeError` caused by accessing a property on `null` or
 * `undefined` across V8 (Node.js, Deno) and JavaScriptCore (Bun).
 *
 * Matches:
 * - V8 (modern Node.js / Deno): `Cannot read properties of null (reading 'prop')`
 * - V8 (legacy Node.js): `Cannot read property 'prop' of null`
 * - JavaScriptCore (Bun): `null is not an object (evaluating 'obj.prop')` /
 *   `undefined is not an object (evaluating 'obj.prop')`
 *
 * @param err The thrown error or error message string to inspect.
 * @param propertyName Optional property name expected to be accessed.
 */
export function isNullOrUndefinedPropertyError(
  err: unknown,
  propertyName?: string,
): boolean {
  const message =
    typeof err === 'string'
      ? err
      : err instanceof TypeError
        ? err.message
        : undefined;
  if (message === undefined) {
    return false;
  }

  const isV8Modern =
    message.includes('Cannot read properties of null') ||
    message.includes('Cannot read properties of undefined');
  const isV8Legacy =
    message.includes('Cannot read property ') &&
    (message.includes(' of null') || message.includes(' of undefined'));
  const isJsc =
    message.includes('null is not an object') ||
    message.includes('undefined is not an object');

  if (!isV8Modern && !isV8Legacy && !isJsc) {
    return false;
  }

  if (propertyName !== undefined) {
    return message.includes(propertyName);
  }
  return true;
}
