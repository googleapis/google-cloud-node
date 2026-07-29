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

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {enrichPgError} from '../../src/lib/errors.js';

describe('enrichPgError SQLSTATE Mapping', () => {
  it('should extract 42P01 when enriched with [SQLSTATE 42P01] by Go driver', () => {
    const err = enrichPgError(
      new Error(
        '[SQLSTATE 42P01] rpc error: code = NotFound desc = relation "foo" does not exist',
      ),
    );
    assert.strictEqual(err.code, '42P01');
    assert.strictEqual(err.severity, 'ERROR');
  });

  it('should extract 42703 when enriched with [SQLSTATE 42703] by Go driver', () => {
    const err = enrichPgError(
      new Error(
        '[SQLSTATE 42703] rpc error: code = InvalidArgument desc = column "bar" does not exist',
      ),
    );
    assert.strictEqual(err.code, '42703');
    assert.strictEqual(err.severity, 'ERROR');
  });

  it('should extract 23505 when enriched with [SQLSTATE 23505] by Go driver', () => {
    const err = enrichPgError(
      new Error(
        '[SQLSTATE 23505] duplicate key value violates unique constraint',
      ),
    );
    assert.strictEqual(err.code, '23505');
    assert.strictEqual(err.severity, 'ERROR');
  });

  it('should extract 42601 when enriched with [SQLSTATE 42601] by Go driver', () => {
    const err = enrichPgError(
      new Error('[SQLSTATE 42601] syntax error at or near SELECT'),
    );
    assert.strictEqual(err.code, '42601');
    assert.strictEqual(err.severity, 'ERROR');
  });

  it('should preserve existing 5-character SQLSTATE string codes', () => {
    const orig = new Error('custom error') as Error & {code?: string};
    orig.code = '12345';
    const err = enrichPgError(orig);
    assert.strictEqual(err.code, '12345');
  });

  it('should fallback to XX000 for unknown errors without SQLSTATE prefix', () => {
    const err = enrichPgError(new Error('random unknown error message'));
    assert.strictEqual(err.code, 'XX000');
    assert.strictEqual(err.severity, 'ERROR');
  });

  it('should preserve stack traces when wrapping Error objects', () => {
    const orig = new Error('test stack preservation');
    const err = enrichPgError(orig);
    assert.strictEqual(err.stack, orig.stack);
  });

  it('should overwrite non-SQLSTATE code properties with XX000', () => {
    const orig = new Error('file not found error') as Error & {code?: string};
    orig.code = 'ENOENT';
    const err = enrichPgError(orig);
    assert.strictEqual(err.code, 'XX000');
  });
});
