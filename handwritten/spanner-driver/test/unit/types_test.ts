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
import {
  BuiltinOids,
  TypeOverrides,
  parseBool,
  parseBytea,
  parseFloatVal,
  parsePgArray,
  parseString,
  parseTimestamp,
  types,
} from '../../src/lib/pg/types.js';
import {FieldDef, getDefaultTypeOverrides} from '../../src/lib/types.js';
import {Codec} from '../../src/lib/codec.js';

describe('Type System & Parsers', () => {
  describe('Scalar Type Parsers', () => {
    it('should parse boolean values and string variants', () => {
      assert.strictEqual(parseBool('true'), true);
      assert.strictEqual(parseBool('t'), true);
      assert.strictEqual(parseBool('1'), true);
      assert.strictEqual(parseBool('yes'), true);
      assert.strictEqual(parseBool('false'), false);
      assert.strictEqual(parseBool('f'), false);
      assert.strictEqual(parseBool('0'), false);
      assert.strictEqual(parseBool('no'), false);
      assert.strictEqual(parseBool(''), false);

      assert.strictEqual(types.getTypeParser(BuiltinOids.BOOL)('t'), true);
      assert.strictEqual(types.getTypeParser(BuiltinOids.BOOL)('f'), false);
    });

    it('should parse integers (INT8)', () => {
      // INT8 returns string by default to prevent 64-bit precision loss
      const largeInt = '9223372036854775807';
      assert.strictEqual(
        types.getTypeParser(BuiltinOids.INT8)(largeInt),
        largeInt,
      );
    });

    it('should parse floating point and decimal numbers (FLOAT4, FLOAT8, NUMERIC)', () => {
      assert.strictEqual(
        types.getTypeParser(BuiltinOids.FLOAT8)('3.14159'),
        3.14159,
      );
      assert.strictEqual(types.getTypeParser(BuiltinOids.FLOAT4)('2.5'), 2.5);
      // NUMERIC returns exact string by default
      const numStr = '12345678901234567890.123456789';
      assert.strictEqual(
        types.getTypeParser(BuiltinOids.NUMERIC)(numStr),
        numStr,
      );
    });

    it('should parse text and string types (TEXT, VARCHAR, UUID)', () => {
      assert.strictEqual(
        types.getTypeParser(BuiltinOids.TEXT)('hello world'),
        'hello world',
      );
      assert.strictEqual(
        types.getTypeParser(BuiltinOids.VARCHAR)('varchar text'),
        'varchar text',
      );
      assert.strictEqual(
        types.getTypeParser(BuiltinOids.UUID)(
          'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
        ),
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      );
    });

    it('should parse date and timestamp types (DATE, TIMESTAMP, TIMESTAMPTZ)', () => {
      assert.strictEqual(
        types.getTypeParser(BuiltinOids.DATE)('2026-08-07'),
        '2026-08-07',
      );
      const parsed = types.getTypeParser(BuiltinOids.TIMESTAMPTZ)(
        '2026-08-07 14:30:00.000000+00',
      ) as Date;
      assert.ok(parsed instanceof Date);
      assert.strictEqual(parsed.toISOString(), '2026-08-07T14:30:00.000Z');
    });

    it('should parse JSON and JSONB types into objects', () => {
      const parsed = types.getTypeParser(BuiltinOids.JSONB)(
        '{"key":"value","count":10}',
      );
      assert.deepStrictEqual(parsed, {key: 'value', count: 10});

      const parsedArr = types.getTypeParser(BuiltinOids.JSON)(
        '[1, 2, "three"]',
      );
      assert.deepStrictEqual(parsedArr, [1, 2, 'three']);
    });

    it('should parse BYTEA into Node.js Buffer', () => {
      const base64Str = Buffer.from('hello spanner').toString('base64');
      const buf1 = types.getTypeParser(BuiltinOids.BYTEA)(base64Str) as Buffer;
      assert.ok(Buffer.isBuffer(buf1));
      assert.strictEqual(buf1.toString('utf8'), 'hello spanner');

      const hexStr = '\\x6465616462656566'; // 'deadbeef'
      const buf2 = types.getTypeParser(BuiltinOids.BYTEA)(hexStr) as Buffer;
      assert.ok(Buffer.isBuffer(buf2));
      assert.strictEqual(buf2.toString('hex'), '6465616462656566');
    });
  });

  describe('PostgreSQL Array Parser', () => {
    it('should parse 1D and nested pre-parsed array elements', () => {
      assert.deepStrictEqual(
        types.getTypeParser(1022)([1.5, 2.5, 3.5]),
        [1.5, 2.5, 3.5],
      );
      assert.deepStrictEqual(types.getTypeParser(1016)(['10', '20']), [
        '10',
        '20',
      ]);
      assert.deepStrictEqual(
        types.getTypeParser(1000)([true, false, true, false]),
        [true, false, true, false],
      );
      assert.deepStrictEqual(
        types.getTypeParser(1009)([
          ['a', 'b'],
          ['c', 'd'],
        ]),
        [
          ['a', 'b'],
          ['c', 'd'],
        ],
      );
    });

    it('should parse arrays with NULL elements', () => {
      assert.deepStrictEqual(
        parsePgArray([1, null, 3, null], val => (val ? Number(val) : null)),
        [1, null, 3, null],
      );
      assert.deepStrictEqual(
        parsePgArray(['hello, world', 'foo, bar'], val => String(val)),
        ['hello, world', 'foo, bar'],
      );
      assert.deepStrictEqual(parsePgArray([]), []);
      assert.deepStrictEqual(parsePgArray(null), []);
    });
  });

  describe('TypeOverrides Scoping & Hierarchy', () => {
    it('should allow custom parser registration and support format parameter overload', () => {
      const overrides = new TypeOverrides();
      overrides.setTypeParser(BuiltinOids.INT8, 'text', val => BigInt(val));
      assert.strictEqual(
        overrides.getTypeParser(BuiltinOids.INT8)('100'),
        BigInt(100),
      );

      assert.throws(() => {
        overrides.setTypeParser(
          BuiltinOids.INT8,
          'not-a-function' as unknown as (val: unknown) => unknown,
        );
      }, /Type parser must be a function/);
    });

    it('should allow registering custom array parsers on array OIDs', () => {
      const overrides = new TypeOverrides();
      overrides.setTypeParser(1016, val =>
        overrides.arrayParser(val, x => Number(x) * 10),
      );
      assert.deepStrictEqual(overrides.getTypeParser(1016)([1, 2]), [10, 20]);
    });

    it('should support hierarchical parent fallback in TypeOverrides', () => {
      const parent = new TypeOverrides();
      parent.setTypeParser(BuiltinOids.INT8, val => BigInt(val));

      const child = new TypeOverrides(parent);
      // Child inherits parent's INT8 parser
      assert.strictEqual(
        child.getTypeParser(BuiltinOids.INT8)('42'),
        BigInt(42),
      );

      // Child override takes precedence
      child.setTypeParser(BuiltinOids.INT8, val => Number(val));
      assert.strictEqual(child.getTypeParser(BuiltinOids.INT8)('42'), 42);
      // Parent remains unchanged
      assert.strictEqual(
        parent.getTypeParser(BuiltinOids.INT8)('42'),
        BigInt(42),
      );
    });

    it('should provide arrayParser helper and throw on non-numeric OID', () => {
      const overrides = new TypeOverrides();
      assert.deepStrictEqual(
        overrides.arrayParser([10, 20], val => Number(val) + 1),
        [11, 21],
      );

      assert.throws(() => {
        overrides.getTypeParser('INVALID_OID');
      }, /Invalid PostgreSQL OID/);

      assert.throws(() => {
        overrides.getTypeParser(BuiltinOids.INT8, 'binary');
      }, /Binary wire format is not supported/);

      assert.throws(() => {
        overrides.setTypeParser(BuiltinOids.INT8, 'binary', val => val);
      }, /Binary wire format is not supported/);
    });
  });

  describe('Row Decoding (Codec.decodeRow)', () => {
    const fields: FieldDef[] = [
      {name: 'id', dataTypeID: BuiltinOids.FLOAT8},
      {name: 'name', dataTypeID: BuiltinOids.TEXT},
      {name: 'active', dataTypeID: BuiltinOids.BOOL},
      {name: 'tags', dataTypeID: 1009},
    ];
    const rawRow = ['101', 'Spanner', 't', ['cloud', 'db']];

    it('should decode row in object mode', () => {
      const parsers = fields.map(f => types.getTypeParser(f.dataTypeID));
      const decoded = Codec.decodeRow<Record<string, unknown>>(
        rawRow,
        fields,
        parsers,
        'object',
      );
      assert.deepStrictEqual(decoded, {
        id: 101,
        name: 'Spanner',
        active: true,
        tags: ['cloud', 'db'],
      });
    });

    it('should decode row in array mode', () => {
      const parsers = fields.map(f => types.getTypeParser(f.dataTypeID));
      const decoded = Codec.decodeRow<unknown[]>(
        rawRow,
        fields,
        parsers,
        'array',
      );
      assert.deepStrictEqual(decoded, [101, 'Spanner', true, ['cloud', 'db']]);
    });

    it('should decode rows with custom TypeOverrides and fallback', () => {
      const customOverrides = new TypeOverrides();
      customOverrides.setTypeParser(BuiltinOids.FLOAT8, val => `id_${val}`);

      const parsers = Codec.getTypeParsers(fields, customOverrides);
      const decoded = Codec.decodeRow<Record<string, unknown>>(
        rawRow,
        fields,
        parsers,
      );
      assert.strictEqual(decoded.id, 'id_101');
      assert.strictEqual(decoded.name, 'Spanner');
    });

    it('should return default PG type overrides via getDefaultTypeOverrides', () => {
      const defaultTypes = getDefaultTypeOverrides('pg');
      assert.strictEqual(
        defaultTypes.getTypeParser(BuiltinOids.BOOL)('t'),
        true,
      );
      assert.strictEqual(
        defaultTypes.getTypeParser(BuiltinOids.FLOAT8)('42'),
        42,
      );
    });

    it('should decode rows containing structValue and array of structValues', () => {
      const structFields: FieldDef[] = [
        {name: 'user', dataTypeID: BuiltinOids.JSON},
        {name: 'items', dataTypeID: 3807},
      ];
      const listValue = {
        values: [
          {
            structValue: {
              fields: {
                id: {stringValue: '100'},
                score: {numberValue: 98.5},
              },
            },
          },
          {
            listValue: {
              values: [
                {
                  structValue: {
                    fields: {
                      itemId: {stringValue: 'item_1'},
                      qty: {numberValue: 5},
                    },
                  },
                },
              ],
            },
          },
        ],
      };
      const raw = Codec.extractRawRow(
        listValue as Parameters<typeof Codec.extractRawRow>[0],
      );
      const parsers = structFields.map(f => types.getTypeParser(f.dataTypeID));
      const decoded = Codec.decodeRow<Record<string, unknown>>(
        raw,
        structFields,
        parsers,
      );
      assert.deepStrictEqual(decoded, {
        user: {id: '100', score: 98.5},
        items: [{itemId: 'item_1', qty: 5}],
      });
    });

    it('should handle pre-parsed values gracefully in parsers', () => {
      const date = new Date('2026-08-11T10:00:00.000Z');
      assert.strictEqual(parseTimestamp(date), date);
      assert.strictEqual(parseBool(true), true);
      assert.strictEqual(parseFloatVal(3.14), 3.14);
      assert.strictEqual(parseString(100), '100');
      assert.strictEqual(parseBytea(Buffer.from('hi')).toString(), 'hi');
    });
  });
});
