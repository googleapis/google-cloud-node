// Copyright 2026 Google LLC
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

import * as assert from 'node:assert';
import {
  READONLY_PROPERTY_ERROR_REGEX,
  assertArraySubclassStrictEqual,
  getNodeMajorVersion,
  getRuntime,
  isBun,
  isDeno,
  isNode,
  isNullOrUndefinedPropertyError,
  isReadOnlyPropertyError,
  requiresStrictArrayPrototypeEquality,
} from '../src';

describe('runtime utilities (unit)', () => {
  describe('runtime detection', () => {
    it('detects Node.js runtime', () => {
      const versions = {node: '22.14.0'};
      expect(isNode(versions)).toBe(true);
      expect(isBun(versions)).toBe(false);
      expect(isDeno(versions)).toBe(false);
      expect(getRuntime(versions)).toBe('node');
      expect(getNodeMajorVersion(versions)).toBe(22);
    });

    it('detects Bun runtime (even when process.versions.node is present)', () => {
      const versions = {node: '22.6.0', bun: '1.2.4'};
      expect(isBun(versions)).toBe(true);
      expect(isNode(versions)).toBe(false);
      expect(isDeno(versions)).toBe(false);
      expect(getRuntime(versions)).toBe('bun');
    });

    it('detects Deno runtime (even when process.versions.node is present)', () => {
      const versions = {node: '20.11.1', deno: '2.1.0'};
      expect(isDeno(versions)).toBe(true);
      expect(isNode(versions)).toBe(false);
      expect(isBun(versions)).toBe(false);
      expect(getRuntime(versions)).toBe('deno');
    });

    it('returns unknown when no runtime versions are present', () => {
      const versions = {};
      expect(isNode(versions)).toBe(false);
      expect(isBun(versions)).toBe(false);
      expect(isDeno(versions)).toBe(false);
      expect(getRuntime(versions)).toBe('unknown');
      expect(getNodeMajorVersion(versions)).toBeUndefined();
    });

    it('returns undefined for unparseable Node version', () => {
      expect(getNodeMajorVersion({node: 'invalid'})).toBeUndefined();
    });

    it('resolves default process.versions when called without arguments', () => {
      const runtime = getRuntime();
      expect(['node', 'bun', 'deno']).toContain(runtime);
      expect(getNodeMajorVersion()).toBeGreaterThanOrEqual(18);
    });

    it('detects globalThis.Deno.version.deno when process.versions.deno is absent', () => {
      const globalAny = globalThis as Record<string, unknown>;
      const prevDeno = globalAny.Deno;
      const origDenoVer = process.versions.deno;
      try {
        delete (process.versions as Record<string, string | undefined>).deno;
        globalAny.Deno = {version: {deno: '2.2.0'}};
        expect(isDeno()).toBe(true);
        expect(getRuntime()).toBe('deno');
      } finally {
        if (prevDeno === undefined) {
          delete globalAny.Deno;
        } else {
          globalAny.Deno = prevDeno;
        }
        if (origDenoVer !== undefined) {
          (process.versions as Record<string, string | undefined>).deno =
            origDenoVer;
        }
      }
    });
  });

  describe('requiresStrictArrayPrototypeEquality & assertArraySubclassStrictEqual', () => {
    class CustomRow extends Array<string> {
      toJSON() {
        return [...this];
      }
    }
    Object.defineProperty(CustomRow.prototype, 'constructor', {
      value: Array,
      writable: true,
      configurable: true,
      enumerable: false,
    });

    it('identifies runtimes requiring strict array prototype equality', () => {
      expect(requiresStrictArrayPrototypeEquality({node: '18.20.0'})).toBe(
        true,
      );
      expect(
        requiresStrictArrayPrototypeEquality({node: '22.6.0', bun: '1.2.4'}),
      ).toBe(true);
      expect(requiresStrictArrayPrototypeEquality({node: '20.11.0'})).toBe(
        false,
      );
      expect(requiresStrictArrayPrototypeEquality({node: '22.14.0'})).toBe(
        false,
      );
      expect(
        requiresStrictArrayPrototypeEquality({node: '20.11.0', deno: '2.1.0'}),
      ).toBe(false);
    });

    it('compares Array subclass instances across runtimes using assertArraySubclassStrictEqual', () => {
      const row = new CustomRow('a', 'b');
      expect(() =>
        assertArraySubclassStrictEqual(row, ['a', 'b'], undefined, {
          node: '18.20.0',
        }),
      ).not.toThrow();
      expect(() =>
        assertArraySubclassStrictEqual(row, ['a', 'b'], undefined, {
          node: '22.14.0',
        }),
      ).not.toThrow();
      expect(() =>
        assertArraySubclassStrictEqual(row, ['a', 'c'], undefined, {
          node: '22.6.0',
          bun: '1.2.4',
        }),
      ).toThrow(assert.AssertionError);
    });
  });

  describe('isReadOnlyPropertyError & READONLY_PROPERTY_ERROR_REGEX', () => {
    it('matches real frozen object mutation TypeError via assert.throws', () => {
      const frozen = Object.freeze({name: 'projects/{{projectId}}'});
      assert.throws(
        () => {
          (frozen as {name: string}).name = 'projects/my-project';
        },
        err => isReadOnlyPropertyError(err, 'name'),
      );
      assert.throws(() => {
        (frozen as {name: string}).name = 'projects/my-project';
      }, READONLY_PROPERTY_ERROR_REGEX);
    });

    it('matches both V8 and JavaScriptCore read-only TypeError messages', () => {
      const v8Err = new TypeError(
        "Cannot assign to read only property 'name' of object '#<Object>'",
      );
      const jscErr = new TypeError('Attempted to assign to readonly property.');

      expect(isReadOnlyPropertyError(v8Err)).toBe(true);
      expect(isReadOnlyPropertyError(v8Err, 'name')).toBe(true);
      expect(isReadOnlyPropertyError(v8Err, 'other')).toBe(false);

      expect(isReadOnlyPropertyError(jscErr)).toBe(true);
      expect(isReadOnlyPropertyError(jscErr, 'name')).toBe(true);
    });

    it('rejects non-TypeError or unrelated TypeError values', () => {
      expect(isReadOnlyPropertyError(new Error('some error'))).toBe(false);
      expect(
        isReadOnlyPropertyError(new TypeError('unrelated type error')),
      ).toBe(false);
      expect(
        isReadOnlyPropertyError('Cannot assign to read only property'),
      ).toBe(false);
    });
  });

  describe('isNullOrUndefinedPropertyError', () => {
    it('matches V8 modern, V8 legacy, and JavaScriptCore null/undefined property access errors', () => {
      const v8Modern = new TypeError(
        "Cannot read properties of null (reading 'proto')",
      );
      const v8Legacy = new TypeError("Cannot read property 'proto' of null");
      const jscNull = new TypeError(
        "null is not an object (evaluating 'data.proto')",
      );
      const jscUndefined = new TypeError(
        "undefined is not an object (evaluating 'data.proto')",
      );

      expect(isNullOrUndefinedPropertyError(v8Modern, 'proto')).toBe(true);
      expect(isNullOrUndefinedPropertyError(v8Legacy, 'proto')).toBe(true);
      expect(isNullOrUndefinedPropertyError(jscNull, 'proto')).toBe(true);
      expect(isNullOrUndefinedPropertyError(jscUndefined, 'proto')).toBe(true);
      expect(isNullOrUndefinedPropertyError(jscNull)).toBe(true);
      expect(isNullOrUndefinedPropertyError(jscNull.message, 'proto')).toBe(
        true,
      );
      expect(isNullOrUndefinedPropertyError(v8Modern, 'other')).toBe(false);
    });

    it('rejects non-matching errors and non-error values', () => {
      expect(isNullOrUndefinedPropertyError(new Error('generic error'))).toBe(
        false,
      );
      expect(
        isNullOrUndefinedPropertyError(new TypeError('something else')),
      ).toBe(false);
      expect(isNullOrUndefinedPropertyError(123)).toBe(false);
    });
  });
});
