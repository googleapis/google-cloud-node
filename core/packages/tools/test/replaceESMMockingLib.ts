// Copyright 2023 Google LLC
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

import {describe, it} from 'mocha';
import * as babel from '@babel/core';
import replaceESMMockingLib from '../src/replaceESMMockingLib';
import * as assert from 'assert';

describe('replace ESM mocking lib', () => {
  describe('replace imports', () => {
    it('replaces an import with default (proxyquire) replacement', async () => {
      const program = "import esmock from 'esmock';";
      const expected = 'import proxyquire from "proxyquire";';
      const result = await babel.transformAsync(program, {
        plugins: [replaceESMMockingLib],
      });

      assert.strictEqual(result?.code, expected);
    });

    it('replaces an import as with default (proxyquire) replacement', async () => {
      const program = "import * as foobar from 'esmock';";
      const expected = 'import * as foobar from "proxyquire";';
      const result = await babel.transformAsync(program, {
        plugins: [replaceESMMockingLib],
      });

      assert.strictEqual(result?.code, expected);
    });

    it('does not replace imports outside of the default (esmock)', async () => {
      const program = "import * as foobar from 'foobar';";
      const result = await babel.transformAsync(program, {
        plugins: [replaceESMMockingLib],
      });

      assert.strictEqual(result?.code, program);
    });

    it('replaces user specified import with default (proxyquire) replacement', async () => {
      const program = "import foobar from 'foobar';";
      const expected = 'import proxyquire from "proxyquire";';
      const result = await babel.transformAsync(program, {
        plugins: [[replaceESMMockingLib, {fromLibName: 'foobar'}]],
      });

      assert.strictEqual(result?.code, expected);
    });

    it('replaces default import (esmock) with user specified replacement', async () => {
      const program = "import esmock from 'esmock';";
      const expected = 'import foobar from "foobar";';
      const result = await babel.transformAsync(program, {
        plugins: [[replaceESMMockingLib, {toLibName: 'foobar'}]],
      });

      assert.strictEqual(result?.code, expected);
    });

    it('replaces user specified import with user specified replacement', async () => {
      const program = "import foobar from 'foobar';";
      const expected = 'import barfoo from "barfoo";';
      const result = await babel.transformAsync(program, {
        plugins: [
          [replaceESMMockingLib, {fromLibName: 'foobar', toLibName: 'barfoo'}],
        ],
      });

      assert.strictEqual(result?.code, expected);
    });
  });

  describe('replace usages', () => {
    it('replaces a usage of default (esmock) with default replacement (proxyquire)', async () => {
      const program = 'const foo = await esmock();';
      const expected = 'const foo = proxyquire();';
      const result = await babel.transformAsync(program, {
        plugins: [replaceESMMockingLib],
      });

      assert.strictEqual(result?.code, expected);
    });

    it('replaces a usage of default (esmock) with default replacement (proxyquire) without modifying params', async () => {
      const program = 'const foo = await esmock({foo: bar});';
      const expected = 'const foo = proxyquire({foo: bar});';
      const result = await babel.transformAsync(program, {
        plugins: [replaceESMMockingLib],
      });

      assert.strictEqual(
        result?.code?.replace(/(\r\n|\n|\r)/gm, '').replace('  ', ''),
        expected,
      );
    });

    it('does not replace a usage of a library not the default', async () => {
      const program = 'const foo = await foobar();';
      const result = await babel.transformAsync(program, {
        plugins: [replaceESMMockingLib],
      });

      assert.strictEqual(result?.code, program);
    });

    it('replaces a usage of the user specified lib with the default replacement (proxyquire)', async () => {
      const program = 'const foo = await foobar();';
      const expected = 'const foo = proxyquire();';
      const result = await babel.transformAsync(program, {
        plugins: [[replaceESMMockingLib, {fromLibName: 'foobar'}]],
      });

      assert.strictEqual(result?.code, expected);
    });

    it('replaces a usage of the default lib (esmock) with a user specified replacement', async () => {
      const program = 'const foo = await esmock();';
      const expected = 'const foo = foobar();';
      const result = await babel.transformAsync(program, {
        plugins: [[replaceESMMockingLib, {toLibName: 'foobar'}]],
      });

      assert.strictEqual(result?.code, expected);
    });

    it('replaces usage of the user specified library with a user specified replacement', async () => {
      const program = 'const foo = await foobar();';
      const expected = 'const foo = barfoo();';
      const result = await babel.transformAsync(program, {
        plugins: [
          [replaceESMMockingLib, {fromLibName: 'foobar', toLibName: 'barfoo'}],
        ],
      });

      assert.strictEqual(result?.code, expected);
    });
  });
});
