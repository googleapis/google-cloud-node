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
import {Codec} from '../../src/lib/codec.js';
import {BuiltinOids} from '../../src/lib/pg/types.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pkg from '@google-cloud/spanner/build/protos/protos.js';
import type {google as GoogleProto} from '@google-cloud/spanner/build/protos/protos.js';

const {google} = pkg as {google: typeof GoogleProto};

describe('Codec Utilities', () => {
  describe('mapMetadataToFieldDefs', () => {
    it('should return empty array for null/undefined metadata', () => {
      assert.deepStrictEqual(Codec.mapMetadataToFieldDefs(null), []);
      assert.deepStrictEqual(Codec.mapMetadataToFieldDefs(undefined), []);
      assert.deepStrictEqual(Codec.mapMetadataToFieldDefs({}), []);
    });

    it('should map Spanner scalar and array TypeCodes to PostgreSQL OIDs', () => {
      const metadata: GoogleProto.spanner.v1.IResultSetMetadata = {
        rowType: {
          fields: [
            {name: 'b', type: {code: google.spanner.v1.TypeCode.BOOL}},
            {name: 'i', type: {code: google.spanner.v1.TypeCode.INT64}},
            {name: 'f', type: {code: google.spanner.v1.TypeCode.FLOAT64}},
            {name: 'ts', type: {code: google.spanner.v1.TypeCode.TIMESTAMP}},
            {name: 'd', type: {code: google.spanner.v1.TypeCode.DATE}},
            {name: 's', type: {code: google.spanner.v1.TypeCode.STRING}},
            {name: 'by', type: {code: google.spanner.v1.TypeCode.BYTES}},
            {name: 'n', type: {code: google.spanner.v1.TypeCode.NUMERIC}},
            {name: 'j', type: {code: google.spanner.v1.TypeCode.JSON}},
            {
              name: 'arr_i',
              type: {
                code: google.spanner.v1.TypeCode.ARRAY,
                arrayElementType: {code: google.spanner.v1.TypeCode.INT64},
              },
            },
            {
              name: 'arr_s',
              type: {
                code: google.spanner.v1.TypeCode.ARRAY,
                arrayElementType: {code: google.spanner.v1.TypeCode.STRING},
              },
            },
          ],
        },
      };

      const fields = Codec.mapMetadataToFieldDefs(metadata, 'pg');
      assert.strictEqual(fields.length, 11);
      assert.strictEqual(fields[0].dataTypeID, BuiltinOids.BOOL);
      assert.strictEqual(fields[1].dataTypeID, BuiltinOids.INT8);
      assert.strictEqual(fields[2].dataTypeID, BuiltinOids.FLOAT8);
      assert.strictEqual(fields[3].dataTypeID, BuiltinOids.TIMESTAMPTZ);
      assert.strictEqual(fields[4].dataTypeID, BuiltinOids.DATE);
      assert.strictEqual(fields[5].dataTypeID, BuiltinOids.TEXT);
      assert.strictEqual(fields[6].dataTypeID, BuiltinOids.BYTEA);
      assert.strictEqual(fields[7].dataTypeID, BuiltinOids.NUMERIC);
      assert.strictEqual(fields[9].dataTypeID, 1016); // int8[]
      assert.strictEqual(fields[10].dataTypeID, 1009); // text[]
    });

    it('should map GoogleSQL dialect types directly as strings', () => {
      const metadata: GoogleProto.spanner.v1.IResultSetMetadata = {
        rowType: {
          fields: [{name: 'i', type: {code: google.spanner.v1.TypeCode.INT64}}],
        },
      };
      const fields = Codec.mapMetadataToFieldDefs(metadata, 'googlesql');
      assert.strictEqual(fields.length, 1);
      assert.strictEqual(
        fields[0].dataTypeID,
        String(google.spanner.v1.TypeCode.INT64),
      );
    });
  });

  describe('extractRawRow', () => {
    it('should return empty array for null/undefined ListValue', () => {
      assert.deepStrictEqual(Codec.extractRawRow(null), []);
      assert.deepStrictEqual(Codec.extractRawRow(undefined), []);
      assert.deepStrictEqual(Codec.extractRawRow({}), []);
    });

    it('should extract values directly without unnecessary string conversions', () => {
      const listValue: GoogleProto.protobuf.IListValue = {
        values: [
          {stringValue: 'hello'},
          {stringValue: '123'},
          {boolValue: true},
          {boolValue: false},
          {numberValue: 45.6},
          {nullValue: google.protobuf.NullValue.NULL_VALUE},
          {structValue: {fields: {k: {stringValue: 'v'}}}},
        ],
      };

      const raw = Codec.extractRawRow(listValue);
      assert.strictEqual(raw[0], 'hello');
      assert.strictEqual(raw[1], '123');
      assert.strictEqual(raw[2], true);
      assert.strictEqual(raw[3], false);
      assert.strictEqual(raw[4], 45.6);
      assert.strictEqual(raw[5], null);
      assert.deepStrictEqual(raw[6], {k: 'v'});
    });
  });

  describe('encodeValue & encodeParams', () => {
    it('should encode JavaScript primitives and complex objects into Spanner protobuf format', () => {
      // Booleans
      assert.deepStrictEqual(Codec.encodeValue(true), {
        valueProto: {boolValue: true},
        typeProto: {code: google.spanner.v1.TypeCode.BOOL},
      });

      // Integers
      assert.deepStrictEqual(Codec.encodeValue(42), {
        valueProto: {stringValue: '42'},
        typeProto: {code: google.spanner.v1.TypeCode.INT64},
      });

      // Floats
      assert.deepStrictEqual(Codec.encodeValue(3.14), {
        valueProto: {numberValue: 3.14},
        typeProto: {code: google.spanner.v1.TypeCode.FLOAT64},
      });

      // BigInt
      assert.deepStrictEqual(Codec.encodeValue(BigInt(9007199254740991)), {
        valueProto: {stringValue: '9007199254740991'},
        typeProto: {code: google.spanner.v1.TypeCode.INT64},
      });

      // Buffer
      const buf = Buffer.from('hello');
      assert.deepStrictEqual(Codec.encodeValue(buf), {
        valueProto: {stringValue: buf.toString('base64')},
        typeProto: {code: google.spanner.v1.TypeCode.BYTES},
      });

      // Dates
      const d = new Date('2023-01-01T00:00:00.000Z');
      assert.deepStrictEqual(Codec.encodeValue(d), {
        valueProto: {stringValue: d.toISOString()},
        typeProto: {code: google.spanner.v1.TypeCode.TIMESTAMP},
      });

      // Invalid Date object -> nullValue
      const invalidDate = new Date('invalid');
      assert.deepStrictEqual(Codec.encodeValue(invalidDate), {
        valueProto: {nullValue: google.protobuf.NullValue.NULL_VALUE},
        typeProto: {code: google.spanner.v1.TypeCode.TIMESTAMP},
      });

      // Objects / JSON
      const obj = {genre: 'rock'};
      assert.deepStrictEqual(Codec.encodeValue(obj), {
        valueProto: {stringValue: JSON.stringify(obj)},
        typeProto: {code: google.spanner.v1.TypeCode.STRING},
      });

      // Null / Undefined
      assert.deepStrictEqual(Codec.encodeValue(null), {
        valueProto: {nullValue: google.protobuf.NullValue.NULL_VALUE},
        typeProto: {code: google.spanner.v1.TypeCode.TYPE_CODE_UNSPECIFIED},
      });
    });

    it('should encode arrays correctly', () => {
      // Empty array
      const emptyArr = Codec.encodeValue([]);
      assert.deepStrictEqual(emptyArr.valueProto, {listValue: {values: []}});
      assert.deepStrictEqual(emptyArr.typeProto, {
        code: google.spanner.v1.TypeCode.ARRAY,
        arrayElementType: {
          code: google.spanner.v1.TypeCode.TYPE_CODE_UNSPECIFIED,
        },
      });

      // Integer array
      const intArr = Codec.encodeValue([1, 2, 3]);
      assert.deepStrictEqual(intArr.valueProto, {
        listValue: {
          values: [{stringValue: '1'}, {stringValue: '2'}, {stringValue: '3'}],
        },
      });
      assert.deepStrictEqual(intArr.typeProto, {
        code: google.spanner.v1.TypeCode.ARRAY,
        arrayElementType: {code: google.spanner.v1.TypeCode.INT64},
      });
    });

    it('should encode parameters via Codec.encodeParams supporting toPostgres custom objects', () => {
      const customParam = {toPostgres: () => 'custom_val'};
      const {fields} = Codec.encodeParams(['test', 123, true, customParam]);
      assert.deepStrictEqual(fields.p1, {stringValue: 'test'});
      assert.deepStrictEqual(fields.p2, {stringValue: '123'});
      assert.deepStrictEqual(fields.p3, {boolValue: true});
      assert.deepStrictEqual(fields.p4, {stringValue: 'custom_val'});
    });

    it('should unwrap custom objects with .toPostgres() inside array parameters', () => {
      // Custom ORM / domain model wrappers
      const customId1 = {toPostgres: () => 101};
      const customId2 = {toPostgres: () => 102};
      // Pass array of custom objects to parameter $1
      const {fields} = Codec.encodeParams([[customId1, customId2]], 'pg');
      assert.deepStrictEqual(fields.p1, {
        listValue: {
          values: [{stringValue: '101'}, {stringValue: '102'}],
        },
      });
    });
  });
});
