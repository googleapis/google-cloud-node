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
import {describe, it, beforeEach} from 'mocha';
import {types} from '../src/index.js';
import {PgOid} from '../src/lib/codec.js';

describe('types (getTypeParser & setTypeParser)', () => {
  beforeEach(() => {
    (types as any).reset();
  });

  it('should return default parser for JSON OID (114)', () => {
    const parser = types.getTypeParser(PgOid.JSON, 'text');
    assert.deepStrictEqual(parser('{"a":1}'), {a: 1});
  });

  it('should return default parser for BOOL OID (16)', () => {
    const parser = types.getTypeParser(PgOid.BOOL);
    assert.strictEqual(parser('t'), true);
    assert.strictEqual(parser('f'), false);
    assert.strictEqual(parser(true), true);
    assert.strictEqual(parser(false), false);
  });

  it('should allow overriding parser with setTypeParser(oid, fn)', () => {
    types.setTypeParser(PgOid.INT8, (val: string) => `big_${val}`);
    const parser = types.getTypeParser(PgOid.INT8);
    assert.strictEqual(parser('9999'), 'big_9999');
  });

  it('should allow overriding parser with setTypeParser(oid, format, fn)', () => {
    types.setTypeParser(20, 'text', (val: string) => BigInt(val));
    const parser = types.getTypeParser(20, 'text');
    assert.strictEqual(parser('12345'), BigInt(12345));
  });

  it('should automatically apply custom parser inside decodeValue', async () => {
    const {decodeValue} = await import('../src/lib/codec.js');
    types.setTypeParser(PgOid.INT8, (val: string) => `custom_int8_${val}`);
    const decoded = decodeValue('42', {code: 'INT64'});
    assert.strictEqual(decoded, 'custom_int8_42');
  });
});
