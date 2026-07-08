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
import * as pkg from '@google-cloud/spanner/build/protos/protos.js';
import {
  encodeValue,
  decodeValue,
  PgOid,
  getSpannerType,
  getPgOid,
} from '../src/lib/codec.js';

const google = pkg.google || (pkg as any).default?.google;
const TypeCode = google.spanner.v1.TypeCode;

describe('Codec Type Transformations', () => {
  describe('encodeValue', () => {
    it('should encode null / undefined', () => {
      const res = encodeValue(null);
      assert.deepStrictEqual(res.valueProto, {nullValue: 0});
      assert.strictEqual(res.typeProto.code, TypeCode.STRING);
    });

    it('should encode string', () => {
      const res = encodeValue('hello');
      assert.deepStrictEqual(res.valueProto, {stringValue: 'hello'});
      assert.strictEqual(res.typeProto.code, TypeCode.STRING);
    });

    it('should encode boolean', () => {
      const res = encodeValue(true);
      assert.deepStrictEqual(res.valueProto, {boolValue: true});
      assert.strictEqual(res.typeProto.code, TypeCode.BOOL);
    });

    it('should encode integer as INT64 string', () => {
      const res = encodeValue(42);
      assert.deepStrictEqual(res.valueProto, {stringValue: '42'});
      assert.strictEqual(res.typeProto.code, TypeCode.INT64);
    });

    it('should encode float as FLOAT64 number', () => {
      const res = encodeValue(3.14);
      assert.deepStrictEqual(res.valueProto, {numberValue: 3.14});
      assert.strictEqual(res.typeProto.code, TypeCode.FLOAT64);
    });

    it('should encode Date as TIMESTAMP string', () => {
      const date = new Date('2026-06-17T08:00:00Z');
      const res = encodeValue(date);
      assert.deepStrictEqual(res.valueProto, {stringValue: date.toISOString()});
      assert.strictEqual(res.typeProto.code, TypeCode.TIMESTAMP);
    });

    it('should encode Buffer as BYTES base64 string', () => {
      const buf = Buffer.from('hello');
      const res = encodeValue(buf);
      assert.deepStrictEqual(res.valueProto, {
        stringValue: buf.toString('base64'),
      });
      assert.strictEqual(res.typeProto.code, TypeCode.BYTES);
    });

    it('should encode array of strings', () => {
      const arr = ['a', 'b'];
      const res = encodeValue(arr);
      assert.deepStrictEqual(res.valueProto, {
        listValue: {
          values: [{stringValue: 'a'}, {stringValue: 'b'}],
        },
      });
      assert.strictEqual(res.typeProto.code, TypeCode.ARRAY);
      assert.strictEqual(res.typeProto.arrayElementType.code, TypeCode.STRING);
    });

    it('should encode generic object as JSON', () => {
      const obj = {foo: 'bar'};
      const res = encodeValue(obj);
      assert.deepStrictEqual(res.valueProto, {
        stringValue: JSON.stringify(obj),
      });
      assert.strictEqual(res.typeProto.code, TypeCode.JSON);
    });
  });

  describe('decodeValue', () => {
    it('should decode null', () => {
      const decoded = decodeValue(
        {nullValue: 0},
        {code: TypeCode.TYPE_CODE_UNSPECIFIED},
      );
      assert.strictEqual(decoded, null);
    });

    it('should decode bool', () => {
      const decoded = decodeValue({boolValue: true}, {code: TypeCode.BOOL});
      assert.strictEqual(decoded, true);
    });

    it('should decode INT64 to string', () => {
      const decoded = decodeValue(
        {stringValue: '9007199254740991'},
        {code: TypeCode.INT64},
      );
      assert.strictEqual(decoded, '9007199254740991');
    });

    it('should decode FLOAT64 to number', () => {
      const decoded = decodeValue(
        {numberValue: 3.14},
        {code: TypeCode.FLOAT64},
      );
      assert.strictEqual(decoded, 3.14);
    });

    it('should decode TIMESTAMP to Date', () => {
      const dateStr = '2026-06-17T08:00:00.000Z';
      const decoded = decodeValue(
        {stringValue: dateStr},
        {code: TypeCode.TIMESTAMP},
      );
      assert.ok(decoded instanceof Date);
      assert.strictEqual(decoded.toISOString(), dateStr);
    });

    it('should decode BYTES to Buffer', () => {
      const base64Str = Buffer.from('hello').toString('base64');
      const decoded = decodeValue(
        {stringValue: base64Str},
        {code: TypeCode.BYTES},
      );
      assert.ok(Buffer.isBuffer(decoded));
      assert.strictEqual(decoded.toString(), 'hello');
    });

    it('should decode array', () => {
      const listVal = {
        listValue: {
          values: [{stringValue: 'a'}, {stringValue: 'b'}],
        },
      };
      const type = {
        code: TypeCode.ARRAY,
        arrayElementType: {code: TypeCode.STRING},
      };
      const decoded = decodeValue(listVal, type);
      assert.deepStrictEqual(decoded, ['a', 'b']);
    });
  });

  describe('TypeConversion & PostgreSQL Array Literals', () => {
    it('should map PostgreSQL OID to Spanner TypeCode', () => {
      assert.deepStrictEqual(getSpannerType(PgOid.INT4), {
        code: TypeCode.INT64,
      });
      assert.deepStrictEqual(getSpannerType(PgOid.TEXT_ARRAY), {
        code: TypeCode.ARRAY,
        arrayElementType: {code: TypeCode.STRING},
      });
      assert.deepStrictEqual(getSpannerType(PgOid.INT8_ARRAY), {
        code: TypeCode.ARRAY,
        arrayElementType: {code: TypeCode.INT64},
      });
    });

    it('should map Spanner TypeCode to PostgreSQL OID', () => {
      assert.strictEqual(getPgOid({code: TypeCode.STRING}), PgOid.TEXT);
      assert.strictEqual(getPgOid({code: TypeCode.INT64}), PgOid.INT8);
      assert.strictEqual(
        getPgOid({
          code: TypeCode.ARRAY,
          arrayElementType: {code: TypeCode.STRING},
        }),
        PgOid.TEXT_ARRAY,
      );
      assert.strictEqual(
        getPgOid({
          code: TypeCode.ARRAY,
          arrayElementType: {code: TypeCode.INT64},
        }),
        PgOid.INT8_ARRAY,
      );
    });

    it('should encode array objects into Spanner ListValue', () => {
      const encoded = encodeValue([1, 2, 3], PgOid.INT8_ARRAY);
      assert.strictEqual(encoded.typeProto.code, TypeCode.ARRAY);
      assert.deepStrictEqual(encoded.valueProto, {
        listValue: {
          values: [{stringValue: '1'}, {stringValue: '2'}, {stringValue: '3'}],
        },
      });
    });
  });
});
