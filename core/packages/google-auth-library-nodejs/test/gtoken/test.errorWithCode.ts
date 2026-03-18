// Copyright 2025 Google LLC
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

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {ErrorWithCode} from '../../src/gtoken/errorWithCode';

describe('GToken ErrorWithCode', () => {
  it('should correctly instantiate with message and code', () => {
    const errorMessage = 'Test error message';
    const errorCode = 'TEST_ERROR';
    const error = new ErrorWithCode(errorMessage, errorCode);
    assert.strictEqual(error.message, errorMessage);
    assert.strictEqual(error.code, errorCode);
    assert.ok(error instanceof Error);
    assert.strictEqual(error.name, 'Error');
  });

  it('should have a stack trace', () => {
    const error = new ErrorWithCode('message', 'CODE');
    assert.ok(error.stack);
    assert.ok(typeof error.stack === 'string');
  });

  it('should work with empty strings for message and code', () => {
    const error = new ErrorWithCode('', '');
    assert.strictEqual(error.message, '');
    assert.strictEqual(error.code, '');
  });

  it('should be throwable', () => {
    const errorMessage = 'This is a throwable error';
    assert.throws(
      () => {
        throw new ErrorWithCode(errorMessage, 'THROWABLE');
      },
      (err: ErrorWithCode) =>
        err.message === errorMessage && err.code === 'THROWABLE',
    );
  });
});
