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

import {Dialect} from './constants.js';
import {BuiltinOids, mapSpannerTypeToPgOid} from './pg/types.js';
import {preparePgValue} from './pg/utilities.js';
import {
  FieldDef,
  getDefaultTypeOverrides,
  ITypeOverrides,
  TypeParser,
} from './types.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pkg from '@google-cloud/spanner/build/protos/protos.js';
import type {google as GoogleProto} from '@google-cloud/spanner/build/protos/protos.js';

const {google} = pkg as {google: typeof GoogleProto};
const TypeCode = google.spanner.v1.TypeCode;

export interface EncodedParam {
  valueProto: GoogleProto.protobuf.IValue;
  typeProto: GoogleProto.spanner.v1.IType;
}

/**
 * Encapsulates encoding and decoding logic between JavaScript values and
 * Cloud Spanner protobuf wire types.
 */
export class Codec {
  /**
   * Encodes a JavaScript value to Spanner Protobuf value and type format.
   *
   * @param val - JavaScript value.
   * @param dialect - Active SQL dialect ('pg' or 'googlesql'). Defaults to 'pg'.
   * @returns EncodedParam containing `valueProto` and `typeProto`.
   */
  static encodeValue(val: unknown, dialect: Dialect = 'pg'): EncodedParam {
    if (val === null || val === undefined) {
      return {
        valueProto: {nullValue: google.protobuf.NullValue.NULL_VALUE},
        typeProto: {
          code: google.spanner.v1.TypeCode.TYPE_CODE_UNSPECIFIED,
        },
      };
    }

    // Prepare dialect-specific values (e.g. unwrap .toPostgres() custom objects in 'pg' dialect)
    if (dialect === 'pg') {
      const prepared = preparePgValue(val);
      if (prepared !== val) {
        return Codec.encodeValue(prepared, dialect);
      }
    }

    if (typeof val === 'boolean') {
      return {
        valueProto: {boolValue: val},
        typeProto: {code: TypeCode.BOOL},
      };
    }

    if (typeof val === 'number') {
      // Cloud Spanner represents INT64 as decimal strings in protobuf to avoid 64-bit IEEE 754 precision loss
      if (Number.isInteger(val)) {
        return {
          valueProto: {stringValue: String(val)},
          typeProto: {code: TypeCode.INT64},
        };
      }
      return {
        valueProto: {numberValue: val},
        typeProto: {code: TypeCode.FLOAT64},
      };
    }

    if (typeof val === 'bigint') {
      return {
        valueProto: {stringValue: val.toString()},
        typeProto: {code: TypeCode.INT64},
      };
    }

    if (val instanceof Date) {
      if (Number.isNaN(val.getTime())) {
        return {
          valueProto: {nullValue: google.protobuf.NullValue.NULL_VALUE},
          typeProto: {code: TypeCode.TIMESTAMP},
        };
      }
      // Serialized as ISO-8601 UTC string for Spanner TIMESTAMPTZ
      return {
        valueProto: {stringValue: val.toISOString()},
        typeProto: {code: TypeCode.TIMESTAMP},
      };
    }

    if (Buffer.isBuffer(val) || val instanceof Uint8Array) {
      // Binary data is transported as base64-encoded strings over protobuf
      return {
        valueProto: {stringValue: Buffer.from(val).toString('base64')},
        typeProto: {code: TypeCode.BYTES},
      };
    }

    if (Array.isArray(val)) {
      if (val.length === 0) {
        return {
          valueProto: {listValue: {values: []}},
          typeProto: {
            code: TypeCode.ARRAY,
            arrayElementType: {
              code: google.spanner.v1.TypeCode.TYPE_CODE_UNSPECIFIED,
            },
          },
        };
      }
      const encodedElements = val.map(el => Codec.encodeValue(el, dialect));
      const firstNonUnspecified = encodedElements.find(
        el =>
          el.typeProto && el.typeProto.code !== TypeCode.TYPE_CODE_UNSPECIFIED,
      );
      const elementTypeProto = firstNonUnspecified?.typeProto || {
        code: google.spanner.v1.TypeCode.TYPE_CODE_UNSPECIFIED,
      };
      return {
        valueProto: {
          listValue: {values: encodedElements.map(el => el.valueProto)},
        },
        typeProto: {
          code: TypeCode.ARRAY,
          arrayElementType: elementTypeProto,
        },
      };
    }

    if (typeof val === 'object') {
      return {
        valueProto: {stringValue: JSON.stringify(val)},
        typeProto: {code: TypeCode.STRING},
      };
    }

    return {
      valueProto: {stringValue: String(val)},
      typeProto: {code: TypeCode.STRING},
    };
  }

  /**
   * Encodes a list of positional parameter values into protobuf `params.fields`
   * compatible with `ExecuteSqlRequest`.
   *
   * @param values - Positional parameter values.
   * @param dialect - Active SQL dialect ('pg' or 'googlesql').
   * @returns Object containing `fields` map.
   */
  static encodeParams(
    values?: unknown[],
    dialect: Dialect = 'pg',
  ): {
    fields: Record<string, GoogleProto.protobuf.IValue>;
  } {
    const fields: Record<string, GoogleProto.protobuf.IValue> = {};

    if (!values || !Array.isArray(values)) {
      return {fields};
    }

    for (let i = 0; i < values.length; i++) {
      const encoded = Codec.encodeValue(values[i], dialect);
      fields[`p${i + 1}`] = encoded.valueProto;
    }

    return {fields};
  }

  /**
   * Resolves an array of column type parsers for the given fields metadata.
   *
   * @param fields - Column metadata descriptors.
   * @param typeOverrides - Optional type overrides registry.
   * @param dialect - Active SQL dialect ('pg' or 'googlesql').
   * @returns Array of parser functions matching the fields in order.
   */
  static getTypeParsers(
    fields: FieldDef[],
    typeOverrides?: ITypeOverrides,
    dialect: Dialect = 'pg',
  ): TypeParser[] {
    const types = typeOverrides || getDefaultTypeOverrides(dialect);
    return fields.map(f => types.getTypeParser(f.dataTypeID));
  }

  /**
   * Decodes a raw database result row using pre-resolved parser functions.
   *
   * @template R - Result row type (object or array).
   * @param rawRow - Raw column values array from database driver.
   * @param fields - Column metadata descriptors (names and OIDs).
   * @param parsers - Pre-resolved parser functions array.
   * @param rowMode - Formatting mode ('object' or 'array').
   * @returns Formatted JavaScript row object or array.
   */
  static decodeRow<R = Record<string, unknown>>(
    rawRow: (unknown | null | undefined)[],
    fields: FieldDef[],
    parsers: TypeParser[],
    rowMode?: 'array' | 'object',
  ): R {
    if (rowMode === 'array') {
      return rawRow.map((val, idx) => {
        const parser = parsers[idx];
        return val === null || val === undefined
          ? null
          : parser
            ? parser(val)
            : val;
      }) as unknown as R;
    }

    const rowObj: Record<string, unknown> = {};
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      const val = rawRow[i];
      const parser = parsers[i];
      rowObj[field.name] =
        val === null || val === undefined ? null : parser ? parser(val) : val;
    }
    return rowObj as unknown as R;
  }

  /**
   * Maps Spanner `ResultSetMetadata` fields to standard `FieldDef` descriptors
   * containing column names and numeric PostgreSQL catalog OIDs.
   *
   * @param metadata - Spanner `ResultSetMetadata` protobuf object.
   * @param dialect - Active SQL dialect ('pg' or 'googlesql').
   * @returns Array of `FieldDef` column descriptors.
   */
  static mapMetadataToFieldDefs(
    metadata: GoogleProto.spanner.v1.IResultSetMetadata | null | undefined,
    dialect: Dialect = 'pg',
  ): FieldDef[] {
    if (!metadata?.rowType?.fields) {
      return [];
    }

    return metadata.rowType.fields.map(f => {
      const colName = f.name || '';
      let dataTypeID: number | string = BuiltinOids.TEXT;

      if (dialect === 'pg') {
        dataTypeID = mapSpannerTypeToPgOid(
          f.type?.code,
          f.type?.arrayElementType,
          f.type?.typeAnnotation,
        );
      } else {
        dataTypeID = String(f.type?.code ?? 'STRING');
      }

      return {
        name: colName,
        dataTypeID,
      };
    });
  }

  /**
   * Extracts raw JavaScript/string wire representation from a Spanner protobuf `Value` message.
   *
   * @param v - Protobuf `Value` object.
   * @returns Extracted string, array, or null value.
   */
  private static extractSingleValue(
    v: GoogleProto.protobuf.IValue | null | undefined,
  ): unknown {
    if (!v) {
      return null;
    }

    if (v.nullValue !== undefined && v.nullValue !== null) {
      return null;
    }
    if (v.stringValue !== undefined && v.stringValue !== null) {
      return v.stringValue;
    }
    if (v.numberValue !== undefined && v.numberValue !== null) {
      return v.numberValue;
    }
    if (v.boolValue !== undefined && v.boolValue !== null) {
      return v.boolValue;
    }
    if (v.structValue) {
      const obj: Record<string, unknown> = {};
      if (v.structValue.fields) {
        for (const [key, val] of Object.entries(v.structValue.fields)) {
          obj[key] = Codec.extractSingleValue(val);
        }
      }
      return obj;
    }
    if (v.listValue) {
      return v.listValue.values
        ? v.listValue.values.map(el => Codec.extractSingleValue(el))
        : [];
    }
    return null;
  }

  /**
   * Extracts raw string/array wire representation from a Spanner protobuf `ListValue` row.
   *
   * @param listValue - Protobuf `ListValue` returned by `nativeRows.next()`.
   * @returns Array of raw column values.
   */
  static extractRawRow(
    listValue: GoogleProto.protobuf.IListValue | null | undefined,
  ): (unknown | null | undefined)[] {
    if (!listValue?.values) {
      return [];
    }

    return listValue.values.map(v => Codec.extractSingleValue(v));
  }
}
