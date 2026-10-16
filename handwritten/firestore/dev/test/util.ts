// Copyright 2020 Google LLC
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

import {
  isPlainObject,
  tryGetPreferRestEnvironmentVariable,
  wrapError,
} from '../src/util';

describe('isPlainObject()', () => {
  it('allows Object.create()', () => {
    expect(isPlainObject(Object.create({}))).toBe(true);
    expect(isPlainObject(Object.create(Object.prototype))).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  it(' allows plain types', () => {
    expect(isPlainObject({foo: 'bar'})).toBe(true);
    expect(isPlainObject({})).toBe(true);
  });

  it('rejects custom types', () => {
    class Foo {}
    expect(isPlainObject(new Foo())).toBe(false);
    expect(isPlainObject(Object.create(new Foo()))).toBe(false);
  });

  describe('tryGetPreferRestEnvironmentVariable', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let warnSpy: any;
    let originalValue: string | undefined;

    beforeEach(() => {
      warnSpy = vi.spyOn(console, 'warn');
      originalValue = process.env.FIRESTORE_PREFER_REST;
    });

    afterEach(() => {
      warnSpy.mockRestore();
      if (originalValue === undefined) {
        delete process.env.FIRESTORE_PREFER_REST;
      } else {
        process.env.FIRESTORE_PREFER_REST = originalValue;
      }
    });

    it('reads true', async () => {
      process.env.FIRESTORE_PREFER_REST = 'true';
      expect(tryGetPreferRestEnvironmentVariable()).toBe(true);
    });

    it('reads 1', async () => {
      process.env.FIRESTORE_PREFER_REST = '1';
      expect(tryGetPreferRestEnvironmentVariable()).toBe(true);
    });

    it('reads false', async () => {
      process.env.FIRESTORE_PREFER_REST = 'false';
      expect(tryGetPreferRestEnvironmentVariable()).toBe(false);
    });

    it('reads 0', async () => {
      process.env.FIRESTORE_PREFER_REST = '0';
      expect(tryGetPreferRestEnvironmentVariable()).toBe(false);
    });

    it('ignores case', async () => {
      process.env.FIRESTORE_PREFER_REST = 'True';
      expect(tryGetPreferRestEnvironmentVariable()).toBe(true);
    });

    it('trims whitespace', async () => {
      process.env.FIRESTORE_PREFER_REST = '  true  ';
      expect(tryGetPreferRestEnvironmentVariable()).toBe(true);
    });

    it('returns undefined when the environment variable is not set', async () => {
      delete process.env.FIRESTORE_PREFER_REST;
      expect(tryGetPreferRestEnvironmentVariable()).toBeUndefined();
      expect(warnSpy).toHaveBeenCalledTimes(0);
    });

    it('returns undefined and warns when the environment variable is set to an unsupported value', async () => {
      process.env.FIRESTORE_PREFER_REST = 'enable';
      expect(tryGetPreferRestEnvironmentVariable()).toBeUndefined();
      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy.mock.calls[0][0]).toMatch(
        /unsupported value.*FIRESTORE_PREFER_REST/,
      );
    });
  });
});

describe('wrapError()', () => {
  it('appends the callsite stack to the error stack', () => {
    const err = new Error('Expected error');
    const wrapped = wrapError(err, 'Error\n    at callsite');

    expect(wrapped).toBe(err);
    expect(wrapped.stack).toContain('Caused by: Error\n    at callsite');
  });

  it('appends the callsite stack when the error stack is not writable', () => {
    // This is the shape produced by google-auth-library, which copies `stack`
    // onto a new error with `writable: false` and leaves it configurable.
    const err = new Error('Expected error');
    Object.defineProperty(err, 'stack', {
      value: 'Error: Expected error\n    at origin',
      writable: false,
      enumerable: true,
    });

    const wrapped = wrapError(err, 'Error\n    at callsite');

    expect(wrapped).toBe(err);
    expect(wrapped.stack).toBe(
      'Error: Expected error\n    at origin\nCaused by: Error\n    at callsite',
    );
  });

  it('appends the callsite stack when the error stack is a getter with no setter', () => {
    const err = new Error('Expected error');
    // `set: undefined` is load bearing here. V8 installs `stack` as an accessor
    // with both a getter and a setter, and a partial descriptor only overrides
    // the attributes it names, so defining `get` alone would leave that setter
    // in place and the plain assignment would succeed.
    Object.defineProperty(err, 'stack', {
      get: () => 'Error: Expected error\n    at origin',
      set: undefined,
      configurable: true,
    });

    const wrapped = wrapError(err, 'Error\n    at callsite');

    expect(wrapped).toBe(err);
    expect(wrapped.stack).toBe(
      'Error: Expected error\n    at origin\nCaused by: Error\n    at callsite',
    );
  });

  it('returns the original error when its stack cannot be modified', () => {
    const err = new Error('Expected error');
    Object.defineProperty(err, 'stack', {
      value: 'Error: Expected error\n    at origin',
      writable: false,
      configurable: false,
      enumerable: true,
    });

    const wrapped = wrapError(err, 'Error\n    at callsite');

    expect(wrapped).toBe(err);
    expect(wrapped.message).toBe('Expected error');
    expect(wrapped.stack).toBe('Error: Expected error\n    at origin');
  });

  it('returns the original error when the error object is frozen', () => {
    const err = Object.freeze(new Error('Frozen error'));
    const wrapped = wrapError(err, 'Error\n    at callsite');

    expect(wrapped).toBe(err);
    expect(wrapped.message).toBe('Frozen error');
  });
});
