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
import toggleESMFlagVariable from '../src/toggleESMFlagVariable';
import * as assert from 'assert';

describe('toggle ESM flag variable', () => {
  it('does not replace a non-boolean variable named isEsm', async () => {
    const program = 'const isEsm = 100;';
    const result = await babel.transformAsync(program, {
      plugins: [toggleESMFlagVariable],
    });

    assert.strictEqual(result?.code, program);
  });

  it('replaces isEsm with the default value of false when no argument provided', async () => {
    const program = 'const isEsm = true;';
    const expected = 'const isEsm = false;';
    const result = await babel.transformAsync(program, {
      plugins: [toggleESMFlagVariable],
    });

    assert.strictEqual(result?.code, expected);
  });

  it('does not replace the user defined variable name when it is non-boolean', async () => {
    const program = 'const foo = 100;';
    const result = await babel.transformAsync(program, {
      plugins: [[toggleESMFlagVariable, {variableIdentifier: 'foo'}]],
    });

    assert.strictEqual(result?.code, program);
  });

  it('replaces the user defined variable name with the default value of false', async () => {
    const program = 'const foo = true;';
    const expected = 'const foo = false;';
    const result = await babel.transformAsync(program, {
      plugins: [[toggleESMFlagVariable, {variableIdentifier: 'foo'}]],
    });

    assert.strictEqual(result?.code, expected);
  });

  it('replaces the user defined variable name with the user defined value', async () => {
    const program = 'const foo = false;';
    const expected = 'const foo = true;';
    const result = await babel.transformAsync(program, {
      plugins: [
        [
          toggleESMFlagVariable,
          {variableIdentifier: 'foo', replacementValue: true},
        ],
      ],
    });

    assert.strictEqual(result?.code, expected);
  });
});
