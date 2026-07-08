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

import * as pkg from '@google-cloud/spanner/build/protos/protos.js';
const google = pkg.google || (pkg as any).default?.google;
const TypeCode = google.spanner.v1.TypeCode;

export interface EncodedParam {
  valueProto: any;
  typeProto: any;
}

/**
 * Standard PostgreSQL Type OIDs.
 */
export const PgOid = {
  BOOL: 16,
  BYTEA: 17,
  INT8: 20,
  INT2: 21,
  INT4: 23,
  TEXT: 25,
  JSON: 114,
  FLOAT4: 700,
  FLOAT8: 701,
  VARCHAR: 1043,
  DATE: 1082,
  TIMESTAMP: 1114,
  TIMESTAMPTZ: 1184,
  NUMERIC: 1700,
  UUID: 2950,
  JSONB: 3802,

  // Array OIDs
  BOOL_ARRAY: 1000,
  BYTEA_ARRAY: 1001,
  INT2_ARRAY: 1005,
  INT4_ARRAY: 1007,
  TEXT_ARRAY: 1009,
  VARCHAR_ARRAY: 1015,
  INT8_ARRAY: 1016,
  FLOAT4_ARRAY: 1021,
  FLOAT8_ARRAY: 1022,
  TIMESTAMP_ARRAY: 1115,
  DATE_ARRAY: 1182,
  TIMESTAMPTZ_ARRAY: 1185,
  NUMERIC_ARRAY: 1231,
  JSONB_ARRAY: 3807,
};

const PgOidToSpannerTypeMapping = new Map<number, any>([
  [PgOid.BOOL, {code: TypeCode.BOOL}],
  [PgOid.BYTEA, {code: TypeCode.BYTES}],
  [PgOid.INT2, {code: TypeCode.INT64}],
  [PgOid.INT4, {code: TypeCode.INT64}],
  [PgOid.INT8, {code: TypeCode.INT64}],
  [PgOid.TEXT, {code: TypeCode.STRING}],
  [PgOid.VARCHAR, {code: TypeCode.STRING}],
  [PgOid.JSON, {code: TypeCode.JSON}],
  [PgOid.JSONB, {code: TypeCode.JSON}],
  [PgOid.FLOAT4, {code: TypeCode.FLOAT64}],
  [PgOid.FLOAT8, {code: TypeCode.FLOAT64}],
  [PgOid.DATE, {code: TypeCode.DATE}],
  [PgOid.TIMESTAMP, {code: TypeCode.TIMESTAMP}],
  [PgOid.TIMESTAMPTZ, {code: TypeCode.TIMESTAMP}],
  [PgOid.NUMERIC, {code: TypeCode.STRING}],
  [PgOid.UUID, {code: TypeCode.STRING}],

  // Arrays
  [
    PgOid.BOOL_ARRAY,
    {code: TypeCode.ARRAY, arrayElementType: {code: TypeCode.BOOL}},
  ],
  [
    PgOid.BYTEA_ARRAY,
    {code: TypeCode.ARRAY, arrayElementType: {code: TypeCode.BYTES}},
  ],
  [
    PgOid.INT2_ARRAY,
    {code: TypeCode.ARRAY, arrayElementType: {code: TypeCode.INT64}},
  ],
  [
    PgOid.INT4_ARRAY,
    {code: TypeCode.ARRAY, arrayElementType: {code: TypeCode.INT64}},
  ],
  [
    PgOid.INT8_ARRAY,
    {code: TypeCode.ARRAY, arrayElementType: {code: TypeCode.INT64}},
  ],
  [
    PgOid.TEXT_ARRAY,
    {code: TypeCode.ARRAY, arrayElementType: {code: TypeCode.STRING}},
  ],
  [
    PgOid.VARCHAR_ARRAY,
    {code: TypeCode.ARRAY, arrayElementType: {code: TypeCode.STRING}},
  ],
  [
    PgOid.FLOAT4_ARRAY,
    {code: TypeCode.ARRAY, arrayElementType: {code: TypeCode.FLOAT64}},
  ],
  [
    PgOid.FLOAT8_ARRAY,
    {code: TypeCode.ARRAY, arrayElementType: {code: TypeCode.FLOAT64}},
  ],
  [
    PgOid.TIMESTAMP_ARRAY,
    {code: TypeCode.ARRAY, arrayElementType: {code: TypeCode.TIMESTAMP}},
  ],
  [
    PgOid.DATE_ARRAY,
    {code: TypeCode.ARRAY, arrayElementType: {code: TypeCode.DATE}},
  ],
  [
    PgOid.TIMESTAMPTZ_ARRAY,
    {code: TypeCode.ARRAY, arrayElementType: {code: TypeCode.TIMESTAMP}},
  ],
  [
    PgOid.NUMERIC_ARRAY,
    {code: TypeCode.ARRAY, arrayElementType: {code: TypeCode.STRING}},
  ],
  [
    PgOid.JSONB_ARRAY,
    {code: TypeCode.ARRAY, arrayElementType: {code: TypeCode.JSON}},
  ],
]);

/**
 * Maps a PostgreSQL Type OID to a Spanner Protobuf Type descriptor.
 */
export function getSpannerType(oid?: number): any | null {
  if (oid === undefined || oid === null) return null;
  return PgOidToSpannerTypeMapping.get(oid) || null;
}

/**
 * Maps a Spanner Protobuf Type descriptor to a PostgreSQL Type OID.
 */
export function getPgOid(typeProto: any): number {
  if (!typeProto) return PgOid.TEXT;
  let code = typeProto.code;
  if (typeof code === 'string') {
    code = (TypeCode as any)[code];
  }
  switch (code) {
    case TypeCode.BOOL:
      return PgOid.BOOL;
    case TypeCode.INT64:
      return PgOid.INT8;
    case TypeCode.FLOAT64:
      return PgOid.FLOAT8;
    case TypeCode.STRING:
      return PgOid.TEXT;
    case TypeCode.DATE:
      return PgOid.DATE;
    case TypeCode.TIMESTAMP:
      return PgOid.TIMESTAMPTZ;
    case TypeCode.BYTES:
      return PgOid.BYTEA;
    case TypeCode.JSON:
      return PgOid.JSONB;
    case TypeCode.ARRAY: {
      let elemCode = typeProto.arrayElementType?.code;
      if (typeof elemCode === 'string') {
        elemCode = (TypeCode as any)[elemCode];
      }
      switch (elemCode) {
        case TypeCode.BOOL:
          return PgOid.BOOL_ARRAY;
        case TypeCode.INT64:
          return PgOid.INT8_ARRAY;
        case TypeCode.FLOAT64:
          return PgOid.FLOAT8_ARRAY;
        case TypeCode.STRING:
          return PgOid.TEXT_ARRAY;
        case TypeCode.DATE:
          return PgOid.DATE_ARRAY;
        case TypeCode.TIMESTAMP:
          return PgOid.TIMESTAMPTZ_ARRAY;
        case TypeCode.BYTES:
          return PgOid.BYTEA_ARRAY;
        case TypeCode.JSON:
          return PgOid.JSONB_ARRAY;
        default:
          return PgOid.TEXT_ARRAY;
      }
    }
    default:
      return PgOid.TEXT;
  }
}

export function getSpannerTypeCodeFromOid(oid: number): string {
  switch (oid) {
    case PgOid.BOOL:
      return 'BOOL';
    case PgOid.INT8:
    case PgOid.INT4:
    case PgOid.INT2:
      return 'INT64';
    case PgOid.FLOAT8:
    case PgOid.FLOAT4:
      return 'FLOAT64';
    case PgOid.DATE:
      return 'DATE';
    case PgOid.TIMESTAMPTZ:
    case PgOid.TIMESTAMP:
      return 'TIMESTAMP';
    case PgOid.BYTEA:
      return 'BYTES';
    case PgOid.JSONB:
    case PgOid.JSON:
      return 'JSON';
    default:
      return 'STRING';
  }
}

/**
 * Encodes a JavaScript value to Spanner Protobuf value and type format.
 */
export function encodeValue(val: any, oid?: number): EncodedParam {

  const explicitType = getSpannerType(oid);
  if (val === null || val === undefined) {
    return {
      valueProto: {nullValue: 0},
      typeProto: explicitType || {code: TypeCode.STRING},
    };
  }

  if (typeof val === 'string') {
    return {
      valueProto: {stringValue: val},
      typeProto: explicitType || {code: TypeCode.STRING},
    };
  }

  if (typeof val === 'boolean') {
    return {
      valueProto: {boolValue: val},
      typeProto: explicitType || {code: TypeCode.BOOL},
    };
  }

  if (typeof val === 'number') {
    if (Number.isInteger(val)) {
      return {
        valueProto: {stringValue: val.toString()},
        typeProto: {code: TypeCode.INT64},
      };
    } else {
      return {
        valueProto: {numberValue: val},
        typeProto: {code: TypeCode.FLOAT64},
      };
    }
  }

  if (val instanceof Date) {
    return {
      valueProto: {stringValue: val.toISOString()},
      typeProto: {code: TypeCode.TIMESTAMP},
    };
  }

  if (Buffer.isBuffer(val)) {
    return {
      valueProto: {stringValue: val.toString('base64')},
      typeProto: {code: TypeCode.BYTES},
    };
  }

  if (Array.isArray(val)) {
    if (val.length === 0) {
      return {
        valueProto: {listValue: {values: []}},
        typeProto: {
          code: TypeCode.ARRAY,
          arrayElementType: {code: TypeCode.TYPE_CODE_UNSPECIFIED},
        },
      };
    }
    const encodedElements = val.map(encodeValue);
    const elementTypeProto = encodedElements[0].typeProto;
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
      typeProto: {code: TypeCode.JSON},
    };
  }

  throw new Error(
    `Unsupported type for Spanner parameter encoding: ${typeof val}`,
  );
}

let customParserHook:
  | ((oid: number) => ((val: string) => any) | null)
  | null = null;

export function registerCustomParserHook(
  hook: (oid: number) => ((val: string) => any) | null
): void {
  customParserHook = hook;
}

/**
 * Decodes a Spanner Protobuf value to a JavaScript native value.
 */
export function decodeValue(
  valProto: any,
  typeProto: any,
  applyCustomParsers = true
): any {
  if (valProto === null || valProto === undefined) {
    return null;
  }

  const kind = valProto.kind;
  if (kind === 'nullValue') {
    return null;
  }

  // Extract raw value based on active oneof kind, with plain-object fallback
  let rawVal: any;
  if (kind !== undefined) {
    rawVal = valProto[kind];
  } else {
    if (valProto.stringValue !== undefined) rawVal = valProto.stringValue;
    else if (valProto.numberValue !== undefined) rawVal = valProto.numberValue;
    else if (valProto.boolValue !== undefined) rawVal = valProto.boolValue;
    else if (valProto.listValue !== undefined) rawVal = valProto.listValue;
    else if (valProto.nullValue !== undefined) return null;
    else rawVal = valProto; // fallback
  }

  if (applyCustomParsers && customParserHook) {
    const oid = getPgOid(typeProto);
    const customParser = customParserHook(oid);
    if (customParser && rawVal !== null && rawVal !== undefined) {
      return customParser(String(rawVal));
    }
  }

  let code = typeProto?.code;
  if (typeof code === 'string' && (TypeCode as any)[code] !== undefined) {
    code = (TypeCode as any)[code];
  }

  if (
    code === 'BOOL' ||
    code === TypeCode?.BOOL ||
    code === 1
  ) {
    if (typeof rawVal === 'string') {
      return rawVal === 't' || rawVal === 'true' || rawVal === '1';
    }
    return rawVal;
  }

  switch (code) {

    case TypeCode.INT64:
      return rawVal;

    case TypeCode.FLOAT64:
      return rawVal;

    case TypeCode.STRING:
    case TypeCode.NUMERIC:
      return rawVal;

    case TypeCode.DATE:
      return rawVal;

    case TypeCode.TIMESTAMP:
      return new Date(rawVal);

    case TypeCode.BYTES:
      return Buffer.from(rawVal, 'base64');

    case TypeCode.JSON:
      try {
        return JSON.parse(rawVal);
      } catch {
        return rawVal;
      }

    case TypeCode.ARRAY: {
      if (!rawVal || !rawVal.values) return [];
      const elemType = typeProto.arrayElementType || {
        code: TypeCode.TYPE_CODE_UNSPECIFIED,
      };
      return rawVal.values.map((v: any) => decodeValue(v, elemType));
    }

    default:
      return rawVal;
  }
}
