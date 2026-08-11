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
  encodePgValue,
  parseBool,
  parseBytea,
  parseFloatVal,
  parseInteger,
  parsePgArray,
  parseString,
  parseTimestamp,
  types,
} from '../../src/lib/pg/types.js';
import {FieldDef, getDefaultTypeOverrides} from '../../src/lib/types.js';
import {decodeRow, encodeParameters} from '../../src/lib/utilities.js';

describe('Type System & Codecs', () => {
  describe('Boolean (BOOL)', () => {
    it('should parse boolean string variants correctly', () => {
      assert.strictEqual(parseBool('t'), true);
      assert.strictEqual(parseBool('true'), true);
      assert.strictEqual(parseBool('True'), true);
      assert.strictEqual(parseBool('1'), true);
      assert.strictEqual(parseBool('y'), true);
      assert.strictEqual(parseBool('yes'), true);
      assert.strictEqual(parseBool('  t  '), true);
      assert.strictEqual(parseBool('  true \n'), true);

      assert.strictEqual(parseBool('f'), false);
      assert.strictEqual(parseBool('false'), false);
      assert.strictEqual(parseBool('0'), false);
      assert.strictEqual(parseBool('n'), false);
      assert.strictEqual(parseBool('no'), false);
      assert.strictEqual(parseBool('  false  '), false);
      assert.strictEqual(parseBool(''), false);
    });

    it('should decode BOOL OID 16 using default parser', () => {
      assert.strictEqual(types.decodeValue('t', BuiltinOids.BOOL), true);
      assert.strictEqual(types.decodeValue('f', BuiltinOids.BOOL), false);
      assert.strictEqual(types.decodeValue(null, BuiltinOids.BOOL), null);
      assert.strictEqual(types.decodeValue(undefined, BuiltinOids.BOOL), null);
    });
  });

  describe('Integers (INT2, INT4, INT8, OID)', () => {
    it('should decode small and standard integers (INT2, INT4, OID)', () => {
      assert.strictEqual(types.decodeValue('42', BuiltinOids.INT2), 42);
      assert.strictEqual(types.decodeValue('123456', BuiltinOids.INT4), 123456);
      assert.strictEqual(types.decodeValue('999', BuiltinOids.OID), 999);
      assert.strictEqual(types.decodeValue('-50', BuiltinOids.INT4), -50);
    });

    it('should decode INT8 as string by default to prevent precision loss', () => {
      const largeInt = '9223372036854775807';
      assert.strictEqual(
        types.decodeValue(largeInt, BuiltinOids.INT8),
        largeInt,
      );
    });
  });

  describe('Floating Point (FLOAT4, FLOAT8)', () => {
    it('should decode floating point numbers (FLOAT4, FLOAT8)', () => {
      assert.strictEqual(
        types.decodeValue('3.14159', BuiltinOids.FLOAT8),
        3.14159,
      );
      assert.strictEqual(types.decodeValue('2.5', BuiltinOids.FLOAT4), 2.5);
      assert.strictEqual(
        types.decodeValue('-0.001', BuiltinOids.FLOAT8),
        -0.001,
      );
    });
  });

  describe('Strings & Text (TEXT, VARCHAR, BPCHAR, UUID)', () => {
    it('should decode text strings (TEXT, VARCHAR, BPCHAR, UUID)', () => {
      assert.strictEqual(
        types.decodeValue('hello world', BuiltinOids.TEXT),
        'hello world',
      );
      assert.strictEqual(
        types.decodeValue('varchar text', BuiltinOids.VARCHAR),
        'varchar text',
      );
      assert.strictEqual(
        types.decodeValue(
          'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
          BuiltinOids.UUID,
        ),
        'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      );
    });
  });

  describe('Numeric & Decimal (NUMERIC)', () => {
    it('should decode NUMERIC as exact decimal string by default', () => {
      const numStr = '12345678901234567890.123456789';
      assert.strictEqual(
        types.decodeValue(numStr, BuiltinOids.NUMERIC),
        numStr,
      );
    });
  });

  describe('Date & Timestamp (DATE, TIMESTAMP, TIMESTAMPTZ)', () => {
    it('should decode DATE as YYYY-MM-DD string by default', () => {
      assert.strictEqual(
        types.decodeValue('2026-08-07', BuiltinOids.DATE),
        '2026-08-07',
      );
    });

    it('should decode TIMESTAMP and TIMESTAMPTZ into JavaScript Date objects', () => {
      const ts = '2026-08-07 14:30:00.000000+00';
      const parsed = types.decodeValue(ts, BuiltinOids.TIMESTAMPTZ) as Date;
      assert.ok(parsed instanceof Date);
      assert.strictEqual(parsed.toISOString(), '2026-08-07T14:30:00.000Z');

      const isoTs = '2026-08-07T12:00:00Z';
      const parsedIso = parseTimestamp(isoTs);
      assert.strictEqual(parsedIso.toISOString(), '2026-08-07T12:00:00.000Z');

      // Date-only string like '2026-08-11' should not have :00 incorrectly appended
      const dateOnly = '2026-08-11';
      const parsedDateOnly = parseTimestamp(dateOnly);
      assert.ok(!Number.isNaN(parsedDateOnly.getTime()));
      assert.strictEqual(
        parsedDateOnly.toISOString(),
        '2026-08-11T00:00:00.000Z',
      );
    });
  });

  describe('JSON & JSONB', () => {
    it('should decode JSON and JSONB into parsed JavaScript objects', () => {
      const jsonStr = '{"key":"value","count":10,"active":true}';
      const parsed = types.decodeValue(jsonStr, BuiltinOids.JSONB);
      assert.deepStrictEqual(parsed, {key: 'value', count: 10, active: true});

      const jsonArrayStr = '[1, "two", {"three": 3}]';
      const parsedArr = types.decodeValue(jsonArrayStr, BuiltinOids.JSON);
      assert.deepStrictEqual(parsedArr, [1, 'two', {three: 3}]);
    });
  });

  describe('Binary (BYTEA)', () => {
    it('should decode BYTEA hex format into Node.js Buffer', () => {
      const hexStr = '\\x6465616462656566'; // 'deadbeef' in hex
      const buf = types.decodeValue(hexStr, BuiltinOids.BYTEA) as Buffer;
      assert.ok(Buffer.isBuffer(buf));
      assert.strictEqual(buf.toString('hex'), '6465616462656566');
    });

    it('should decode legacy BYTEA escape format into Node.js Buffer', () => {
      const escapeStr = '\\\\101'; // '\\' followed by '101'
      const buf = parseBytea(escapeStr);
      assert.ok(Buffer.isBuffer(buf));
    });
  });

  describe('PostgreSQL Array Parser', () => {
    it('should parse 1D integer arrays', () => {
      const parsed = types.decodeValue('{1,2,3,4}', BuiltinOids._INT4);
      assert.deepStrictEqual(parsed, [1, 2, 3, 4]);
    });

    it('should parse 1D boolean arrays', () => {
      const parsed = types.decodeValue('{t,f,true,false}', BuiltinOids._BOOL);
      assert.deepStrictEqual(parsed, [true, false, true, false]);
    });

    it('should parse arrays containing NULL elements (case-insensitive)', () => {
      const parsed = types.decodeValue(
        '{1,NULL,3,null,5,Null}',
        BuiltinOids._INT4,
      );
      assert.deepStrictEqual(parsed, [1, null, 3, null, 5, null]);
    });

    it('should parse quoted text arrays with commas and braces', () => {
      const source = '{"hello, world","foo {bar} baz","plain",NULL}';
      const parsed = types.decodeValue(source, BuiltinOids._TEXT);
      assert.deepStrictEqual(parsed, [
        'hello, world',
        'foo {bar} baz',
        'plain',
        null,
      ]);
    });

    it('should parse escaped quotes inside array strings', () => {
      const source = '{"quoted \\"text\\" inside"}';
      const parsed = types.decodeValue(source, BuiltinOids._TEXT);
      assert.deepStrictEqual(parsed, ['quoted "text" inside']);
    });

    it('should parse multidimensional 2D and 3D arrays', () => {
      const source2D = '{{1,2},{3,4}}';
      const parsed2D = types.decodeValue(source2D, BuiltinOids._INT4);
      assert.deepStrictEqual(parsed2D, [
        [1, 2],
        [3, 4],
      ]);

      const source3D = '{{{1,2},{3,4}},{{5,6},{7,8}}}';
      const parsed3D = parsePgArray(source3D, val => parseInt(val, 10));
      assert.deepStrictEqual(parsed3D, [
        [
          [1, 2],
          [3, 4],
        ],
        [
          [5, 6],
          [7, 8],
        ],
      ]);
    });

    it('should handle empty arrays and non-array strings gracefully', () => {
      assert.deepStrictEqual(types.decodeValue('{}', BuiltinOids._INT4), []);
      assert.deepStrictEqual(parsePgArray(''), []);
      assert.deepStrictEqual(parsePgArray('invalid'), []);
    });

    it('should safely handle malformed array strings with trailing backslash without appending undefined', () => {
      const parsed = parsePgArray('{"abc\\');
      assert.deepStrictEqual(parsed, ['abc']);
    });

    it('should parse arrays with whitespace, escaped commas, and space-only arrays', () => {
      assert.deepStrictEqual(parsePgArray('{"hello", "world"}'), [
        'hello',
        'world',
      ]);
      assert.deepStrictEqual(parsePgArray('{a\\,b,c}'), ['a,b', 'c']);
      assert.deepStrictEqual(parsePgArray('{ }'), []);
      assert.deepStrictEqual(
        parsePgArray('   {1, 2, 3}   ', val => parseInt(val, 10)),
        [1, 2, 3],
      );
    });

    it('should decode _INT8 (1016) arrays using BIGINT element parser', () => {
      const parsed = types.decodeValue('{10,20}', BuiltinOids._INT8);
      assert.deepStrictEqual(parsed, ['10', '20']);
    });
  });

  describe('Parameter Value Serializer (encodeValue / encodePgValue)', () => {
    it('should serialize null and undefined to null', () => {
      assert.strictEqual(encodePgValue(null), null);
      assert.strictEqual(encodePgValue(undefined), null);
    });

    it('should serialize Date objects to ISO string format and handle invalid dates safely', () => {
      const date = new Date('2026-08-07T14:20:00.000Z');
      assert.strictEqual(encodePgValue(date), '2026-08-07T14:20:00.000Z');

      const invalidDate = new Date('invalid');
      assert.strictEqual(encodePgValue(invalidDate), null);
    });

    it('should support custom objects with toPostgres method for ORM/Knex compatibility', () => {
      const customParam = {
        toPostgres: () => 'custom_serialized_value',
      };
      assert.strictEqual(encodePgValue(customParam), 'custom_serialized_value');

      const nestedParam = {
        toPostgres: () => new Date('2026-08-07T14:20:00.000Z'),
      };
      assert.strictEqual(
        encodePgValue(nestedParam),
        '2026-08-07T14:20:00.000Z',
      );
    });

    it('should serialize Buffer and Uint8Array instances to PostgreSQL hex format', () => {
      const buf = Buffer.from('deadbeef', 'hex');
      assert.strictEqual(encodePgValue(buf), '\\xdeadbeef');

      const uint8 = new Uint8Array([0xca, 0xfe]);
      assert.strictEqual(encodePgValue(uint8), '\\xcafe');
    });

    it('should serialize BigInt values to string', () => {
      const big = BigInt('9223372036854775807');
      assert.strictEqual(encodePgValue(big), '9223372036854775807');
    });

    it('should serialize JavaScript arrays to PostgreSQL array literals including Buffers, Uint8Arrays, and toPostgres', () => {
      const arr = [1, 'two', true, null];
      const encoded = encodePgValue(arr);
      assert.strictEqual(encoded, '{"1","two","true",NULL}');

      const nestedArr = [
        [1, 2],
        [3, 4],
      ];
      assert.strictEqual(encodePgValue(nestedArr), '{{"1","2"},{"3","4"}}');

      const bufArr = [Buffer.from('dead', 'hex'), new Uint8Array([0xbe, 0xef])];
      assert.strictEqual(encodePgValue(bufArr), '{"\\\\xdead","\\\\xbeef"}');

      const customObjArr = [{toPostgres: () => 'custom_nested'}, 42];
      assert.strictEqual(encodePgValue(customObjArr), '{"custom_nested","42"}');
    });

    it('should serialize plain objects to JSON strings', () => {
      const obj = {name: 'Spanner', version: 1};
      assert.strictEqual(encodePgValue(obj), JSON.stringify(obj));
    });

    it('should pass through primitive numbers and booleans and strings', () => {
      assert.strictEqual(encodePgValue(42), 42);
      assert.strictEqual(encodePgValue(true), true);
      assert.strictEqual(encodePgValue('sample text'), 'sample text');
    });
  });

  describe('TypeOverrides Scoping & Hierarchy', () => {
    it('should allow custom parser registration on TypeOverrides instance', () => {
      const customOverrides = new TypeOverrides();
      customOverrides.setTypeParser(BuiltinOids.INT8, val => BigInt(val));

      const decoded = customOverrides.decodeValue(
        '9223372036854775807',
        BuiltinOids.INT8,
      );
      assert.strictEqual(typeof decoded, 'bigint');
      assert.strictEqual(decoded, BigInt('9223372036854775807'));

      // Global types should remain unaffected (returns string)
      const globalDecoded = types.decodeValue(
        '9223372036854775807',
        BuiltinOids.INT8,
      );
      assert.strictEqual(typeof globalDecoded, 'string');
    });

    it('should support format parameter overload in setTypeParser', () => {
      const customOverrides = new TypeOverrides();
      customOverrides.setTypeParser(BuiltinOids.INT8, 'text', val =>
        Number(val),
      );

      assert.strictEqual(
        customOverrides.decodeValue('500', BuiltinOids.INT8),
        500,
      );
    });

    it('should throw TypeError if parser passed to setTypeParser is not a function', () => {
      const customOverrides = new TypeOverrides();
      assert.throws(() => {
        customOverrides.setTypeParser(
          BuiltinOids.INT8,
          'invalid' as unknown as (val: string) => unknown,
        );
      }, /Type parser must be a function/);
    });

    it('should dynamically apply custom element parser to array OID lookup and cache parsers with invalidation', () => {
      const customOverrides = new TypeOverrides();
      customOverrides.setTypeParser(
        BuiltinOids.INT4,
        val => parseInt(val, 10) * 2,
      );

      const parsedArray1 = customOverrides.decodeValue(
        '{1,2,3}',
        BuiltinOids._INT4,
      );
      assert.deepStrictEqual(parsedArray1, [2, 4, 6]);

      // Array parser should be cached across multiple lookups
      const parserA = customOverrides.getTypeParser(BuiltinOids._INT4);
      const parserB = customOverrides.getTypeParser(BuiltinOids._INT4);
      assert.strictEqual(parserA, parserB);

      // Later updating the element parser should invalidate cache and take immediate effect
      customOverrides.setTypeParser(
        BuiltinOids.INT4,
        val => parseInt(val, 10) * 10,
      );
      const parsedArray2 = customOverrides.decodeValue(
        '{1,2,3}',
        BuiltinOids._INT4,
      );
      assert.deepStrictEqual(parsedArray2, [10, 20, 30]);

      // New parser should be cached
      const parserC = customOverrides.getTypeParser(BuiltinOids._INT4);
      const parserD = customOverrides.getTypeParser(BuiltinOids._INT4);
      assert.strictEqual(parserC, parserD);
      assert.notStrictEqual(parserA, parserC);
    });

    it('should support hierarchical parent fallback in TypeOverrides and inherit child array element parsers', () => {
      const parentOverrides = new TypeOverrides();
      parentOverrides.setTypeParser(BuiltinOids.NUMERIC, val =>
        parseFloat(val),
      );

      const childOverrides = new TypeOverrides(parentOverrides);
      childOverrides.setTypeParser(BuiltinOids.INT8, val => BigInt(val));
      childOverrides.setTypeParser(
        BuiltinOids.INT4,
        val => parseInt(val, 10) * 5,
      );

      // Child uses its own override for INT8
      assert.strictEqual(
        typeof childOverrides.decodeValue('100', BuiltinOids.INT8),
        'bigint',
      );
      // Child falls back to parent override for NUMERIC
      assert.strictEqual(
        typeof childOverrides.decodeValue('12.34', BuiltinOids.NUMERIC),
        'number',
      );
      // Child array query uses child's INT4 element parser override
      assert.deepStrictEqual(
        childOverrides.decodeValue('{1,2}', BuiltinOids._INT4),
        [5, 10],
      );
      // Child falls back to global default for BOOL
      assert.strictEqual(
        childOverrides.decodeValue('t', BuiltinOids.BOOL),
        true,
      );
    });

    it('should inherit parent custom array parser when child has no element override', () => {
      const parentOverrides = new TypeOverrides();
      parentOverrides.setTypeParser(BuiltinOids._INT4, () => [
        'parent_custom_array',
      ]);

      const childOverrides = new TypeOverrides(parentOverrides);
      // Child did not override INT4 or _INT4, so it should inherit parent's custom _INT4 parser
      assert.deepStrictEqual(
        childOverrides.decodeValue('{1,2}', BuiltinOids._INT4),
        ['parent_custom_array'],
      );
    });

    it('should provide arrayParser helper method supporting string and pre-parsed arrays on TypeOverrides instance', () => {
      const customOverrides = new TypeOverrides();
      const res1 = customOverrides.arrayParser(
        '{10,20}',
        val => parseInt(val as string, 10) + 1,
      );
      assert.deepStrictEqual(res1, [11, 21]);

      const res2 = customOverrides.arrayParser(
        ['10', '20'],
        val => parseInt(val as string, 10) * 2,
      );
      assert.deepStrictEqual(res2, [20, 40]);
    });
  });

  describe('Row Decoding & Parameter Encoding Integration', () => {
    it('should encode parameters using active type overrides', () => {
      const date = new Date('2026-08-11T12:00:00.000Z');
      const buf = Buffer.from('cafe', 'hex');
      const big = BigInt(42);
      const values = [date, buf, big, 100, 'hello'];

      const encoded = encodeParameters(values, types);
      assert.deepStrictEqual(encoded, [
        '2026-08-11T12:00:00.000Z',
        '\\xcafe',
        '42',
        100,
        'hello',
      ]);

      assert.strictEqual(encodeParameters(undefined, types), undefined);
    });

    it('should decode result set rows in object mode using decodeRow', () => {
      const fields: FieldDef[] = [
        {name: 'id', dataTypeID: BuiltinOids.INT4},
        {name: 'name', dataTypeID: BuiltinOids.TEXT},
        {name: 'is_active', dataTypeID: BuiltinOids.BOOL},
        {name: 'tags', dataTypeID: BuiltinOids._TEXT},
        {name: 'meta', dataTypeID: BuiltinOids.JSONB},
        {name: 'created_at', dataTypeID: BuiltinOids.TIMESTAMPTZ},
      ];

      const rawRow = [
        '101',
        'Spanner',
        't',
        '{"cloud","database"}',
        '{"version":1}',
        '2026-08-11 10:00:00+00',
      ];

      const decoded = decodeRow<Record<string, unknown>>(
        rawRow,
        fields,
        types,
        'object',
      );

      assert.strictEqual(decoded.id, 101);
      assert.strictEqual(decoded.name, 'Spanner');
      assert.strictEqual(decoded.is_active, true);
      assert.deepStrictEqual(decoded.tags, ['cloud', 'database']);
      assert.deepStrictEqual(decoded.meta, {version: 1});
      assert.ok(decoded.created_at instanceof Date);
      assert.strictEqual(
        (decoded.created_at as Date).toISOString(),
        '2026-08-11T10:00:00.000Z',
      );
    });

    it('should decode result set rows in array mode using decodeRow', () => {
      const fields: FieldDef[] = [
        {name: 'id', dataTypeID: BuiltinOids.INT4},
        {name: 'active', dataTypeID: BuiltinOids.BOOL},
      ];

      const rawRow = ['42', 'f'];
      const decoded = decodeRow<unknown[]>(rawRow, fields, types, 'array');

      assert.deepStrictEqual(decoded, [42, false]);
    });

    it('should decode rows using decodeRow with client and query overrides', () => {
      const clientOverrides = new TypeOverrides();
      clientOverrides.setTypeParser(BuiltinOids.INT8, val => BigInt(val));

      const fields: FieldDef[] = [
        {name: 'id', dataTypeID: BuiltinOids.INT8},
        {name: 'val', dataTypeID: BuiltinOids.INT4},
      ];

      // Uses Client-level override for INT8 (returns BigInt)
      const row1 = decodeRow<{id: bigint; val: number}>(
        ['9223372036854775807', '50'],
        fields,
        clientOverrides,
      );
      assert.strictEqual(typeof row1.id, 'bigint');
      assert.strictEqual(row1.id, BigInt('9223372036854775807'));
      assert.strictEqual(row1.val, 50);

      // Query-level override with parent fallback to client-level override
      const queryOverrides = new TypeOverrides(clientOverrides);
      queryOverrides.setTypeParser(BuiltinOids.INT8, val => Number(val));

      const row2 = decodeRow<{id: number; val: number}>(
        ['123', '50'],
        fields,
        queryOverrides,
        'object',
      );
      assert.strictEqual(typeof row2.id, 'number');
      assert.strictEqual(row2.id, 123);
    });

    it('should decode result set rows using pre-resolved TypeParser array in decodeRow', () => {
      const fields: FieldDef[] = [
        {name: 'id', dataTypeID: BuiltinOids.INT4},
        {name: 'name', dataTypeID: BuiltinOids.TEXT},
        {name: 'active', dataTypeID: BuiltinOids.BOOL},
      ];
      // Pre-resolve parsers once for the result set
      const preResolvedParsers = fields.map(f =>
        types.getTypeParser(f.dataTypeID),
      );

      const rawRow = ['42', 'Spanner', 't'];
      const decodedObj = decodeRow<{
        id: number;
        name: string;
        active: boolean;
      }>(rawRow, fields, preResolvedParsers, 'object');
      assert.deepStrictEqual(decodedObj, {
        id: 42,
        name: 'Spanner',
        active: true,
      });

      const decodedArr = decodeRow<unknown[]>(
        rawRow,
        fields,
        preResolvedParsers,
        'array',
      );
      assert.deepStrictEqual(decodedArr, [42, 'Spanner', true]);

      // Extra column in rawRow beyond fields metadata should pass through safely
      const extraRawRow = ['42', 'Spanner', 't', 'extra_value'];
      const decodedExtraArr = decodeRow<unknown[]>(
        extraRawRow,
        fields,
        preResolvedParsers,
        'array',
      );
      assert.deepStrictEqual(decodedExtraArr, [
        42,
        'Spanner',
        true,
        'extra_value',
      ]);
    });

    it('should return default PG type overrides via getDefaultTypeOverrides', () => {
      const defaultTypes = getDefaultTypeOverrides('pg');
      assert.strictEqual(defaultTypes.decodeValue('t', BuiltinOids.BOOL), true);
      assert.strictEqual(defaultTypes.decodeValue('42', BuiltinOids.INT4), 42);
    });

    it('should throw TypeError when non-numeric OID is passed to getTypeParser or setTypeParser', () => {
      const typeOverrides = new TypeOverrides();
      assert.throws(() => {
        typeOverrides.getTypeParser('INT64');
      }, /Invalid PostgreSQL OID/);

      assert.throws(() => {
        typeOverrides.setTypeParser('STRING', val => val);
      }, /Invalid PostgreSQL OID/);
    });

    it('should handle non-string or pre-parsed values gracefully in parsers', () => {
      const date = new Date('2026-08-11T10:00:00.000Z');
      assert.strictEqual(parseTimestamp(date), date);
      assert.strictEqual(parseBool(true), true);
      assert.strictEqual(parseBool(false), false);
      assert.strictEqual(parseInteger(42), 42);
      assert.strictEqual(parseFloatVal(3.14), 3.14);
      assert.strictEqual(parseString(100), '100');

      const buf = Buffer.from('hello');
      assert.strictEqual(parseBytea(buf), buf);

      const arr = [1, null, 3, undefined];
      assert.deepStrictEqual(parsePgArray(arr), ['1', null, '3', null]);
      assert.deepStrictEqual(
        parsePgArray(arr, val => parseInt(val, 10)),
        [1, null, 3, null],
      );

      // Object mode decodeRow with missing parser index
      const fields: FieldDef[] = [
        {name: 'id', dataTypeID: BuiltinOids.INT4},
        {name: 'extra', dataTypeID: BuiltinOids.TEXT},
      ];
      const partialParsers = [types.getTypeParser(BuiltinOids.INT4)];
      const decodedObj = decodeRow<{id: number; extra: string}>(
        ['42', 'raw_value'],
        fields,
        partialParsers,
        'object',
      );
      assert.deepStrictEqual(decodedObj, {id: 42, extra: 'raw_value'});
    });
  });
});
