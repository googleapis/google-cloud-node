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

import type {ITypeOverrides, TypeParser} from '../types.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pkg from '@google-cloud/spanner/build/protos/protos.js';
import type {google as GoogleProto} from '@google-cloud/spanner/build/protos/protos.js';

const {google} = pkg as {google: typeof GoogleProto};
const TypeCode = google.spanner.v1.TypeCode;
const TypeAnnotationCode = google.spanner.v1.TypeAnnotationCode;

export type {TypeParser};

/**
 * Standard PostgreSQL Object Identifier (OID) type numbers supported by Cloud Spanner.
 * Aligned with the official Cloud Spanner PostgreSQL dialect data types specification:
 * https://cloud.google.com/spanner/docs/reference/postgresql/data-types
 */
export enum BuiltinOids {
  BOOL = 16,
  BYTEA = 17,
  INT8 = 20,
  TEXT = 25,
  JSON = 114,
  FLOAT4 = 700,
  FLOAT8 = 701,
  VARCHAR = 1043,
  DATE = 1082,
  TIMESTAMP = 1114,
  TIMESTAMPTZ = 1184,
  INTERVAL = 1186,
  NUMERIC = 1700,
  UUID = 2950,
  JSONB = 3802,
}

// -----------------------------------------------------------------------------
// Text Format Parsers (matches pg-types/lib/textParsers.js)
// -----------------------------------------------------------------------------

/**
 * Parses PostgreSQL boolean text wire strings into boolean.
 */
export function parseBool(val: unknown): boolean {
  if (val === null || val === undefined) return false;
  if (typeof val === 'boolean') return val;
  if (typeof val !== 'string') return Boolean(val);
  const trimmed = val.trim().toLowerCase();
  if (!trimmed) return false;
  return (
    trimmed === '1' ||
    trimmed === 'on' ||
    'true'.startsWith(trimmed) ||
    'yes'.startsWith(trimmed)
  );
}

/**
 * Parses floating point text wire strings into number.
 */
export function parseFloatVal(val: unknown): number {
  if (typeof val === 'number') return val;
  if (typeof val !== 'string') return Number(val);
  return parseFloat(val);
}

/**
 * Default pass-through string parser (used for TEXT, VARCHAR, UUID, INT8, NUMERIC, DATE).
 */
export function parseString(val: unknown): string {
  if (typeof val === 'string') return val;
  return String(val);
}

/**
 * Parses JSON and JSONB text wire strings into JavaScript objects.
 */
export function parseJson(val: unknown): unknown {
  if (val === null || val === undefined) return null;
  if (typeof val === 'object') return val;
  if (typeof val !== 'string') return val;
  try {
    return JSON.parse(val);
  } catch {
    return val;
  }
}

/**
 * Parses Spanner BYTEA / BYTES base64 or hex wire strings into Node.js Buffer.
 */
export function parseBytea(val: unknown): Buffer {
  if (Buffer.isBuffer(val)) return val;
  if (val instanceof Uint8Array) return Buffer.from(val);
  if (typeof val !== 'string') return Buffer.from(String(val));
  const trimmed = val.trim();
  if (trimmed.startsWith('\\x')) {
    return Buffer.from(trimmed.slice(2), 'hex');
  }
  return Buffer.from(trimmed, 'base64');
}

/**
 * Parses PostgreSQL timestamp and timestamptz text wire strings into JavaScript Date objects.
 */
export function parseTimestamp(val: unknown): Date {
  if (val instanceof Date) return val;
  if (val === null || val === undefined) return null as unknown as Date;
  if (typeof val !== 'string') return new Date(val as string | number);
  let iso = val.trim();
  if (iso.includes(' ')) {
    iso = iso.replace(' ', 'T');
  }
  // If timezone offset is +HH or -HH (without minutes), append :00
  if (iso.includes(':') && /[+-]\d{2}$/.test(iso)) {
    iso += ':00';
  } else if (!iso.endsWith('Z') && !/[+-]\d{2}(?::?\d{2})?$/.test(iso)) {
    iso += 'Z';
  }
  return new Date(iso);
}

/**
 * Maps array elements using the specified element parser.
 */
export function parsePgArray(
  source: unknown,
  elementParser: TypeParser = parseString,
): unknown[] {
  if (Array.isArray(source)) {
    return source.map(item => {
      if (item === null || item === undefined) return null;
      return Array.isArray(item)
        ? parsePgArray(item, elementParser)
        : elementParser(item);
    });
  }
  return [];
}

// -----------------------------------------------------------------------------
// Parser Registries (matches pg-types textParsers)
// -----------------------------------------------------------------------------

const textParsers: Record<number, TypeParser> = {
  [BuiltinOids.BOOL]: parseBool,
  [BuiltinOids.BYTEA]: parseBytea,
  [BuiltinOids.INT8]: parseString,
  [BuiltinOids.TEXT]: parseString,
  [BuiltinOids.JSON]: parseJson,
  [BuiltinOids.FLOAT4]: parseFloatVal,
  [BuiltinOids.FLOAT8]: parseFloatVal,
  [BuiltinOids.VARCHAR]: parseString,
  [BuiltinOids.DATE]: parseString,
  [BuiltinOids.TIMESTAMP]: parseTimestamp,
  [BuiltinOids.TIMESTAMPTZ]: parseTimestamp,
  [BuiltinOids.INTERVAL]: parseString,
  [BuiltinOids.NUMERIC]: parseString,
  [BuiltinOids.UUID]: parseString,
  [BuiltinOids.JSONB]: parseJson,

  // Standard Array OIDs supported by Cloud Spanner
  1000: (val: unknown) => parsePgArray(val, parseBool),
  1001: (val: unknown) => parsePgArray(val, parseBytea),
  1009: (val: unknown) => parsePgArray(val, parseString),
  1016: (val: unknown) => parsePgArray(val, parseString),
  1021: (val: unknown) => parsePgArray(val, parseFloatVal),
  1022: (val: unknown) => parsePgArray(val, parseFloatVal),
  1182: (val: unknown) => parsePgArray(val, parseString),
  1185: (val: unknown) => parsePgArray(val, parseTimestamp),
  1187: (val: unknown) => parsePgArray(val, parseString),
  1231: (val: unknown) => parsePgArray(val, parseString),
  2951: (val: unknown) => parsePgArray(val, parseString),
  3807: (val: unknown) => parsePgArray(val, parseJson),
};

/**
 * TypeOverrides provides a scoped type parser and encoder registry.
 * Matches `pg-types.TypeOverrides` and allows overriding type parsers per query, client, or globally.
 */
export class TypeOverrides implements ITypeOverrides {
  private readonly _types: Map<number, TypeParser> = new Map();
  private readonly _parent?: ITypeOverrides;

  /** Standard PostgreSQL catalog OID constants matching `pg-types.builtins`. */
  public readonly builtins = BuiltinOids;

  constructor(parent?: ITypeOverrides) {
    this._parent = parent;
  }

  /**
   * Retrieves the type parser registered for a specific PostgreSQL OID.
   *
   * @param oid - PostgreSQL Object Identifier number (e.g. 20 for INT8, 1184 for TIMESTAMPTZ).
   * @param format - Formatting mode ('text'). Defaults to 'text'.
   * @returns Parsing function converting wire string or buffer into JavaScript value.
   */
  public getTypeParser(oid: number | string, format = 'text'): TypeParser {
    if (format === 'binary') {
      throw new Error(
        'Binary wire format is not supported in @google-cloud/spanner-driver because rows are transported via Spanner Protobuf.',
      );
    }
    const numOid = typeof oid === 'string' ? Number(oid) : oid;
    if (typeof numOid !== 'number' || Number.isNaN(numOid)) {
      throw new TypeError(
        `Invalid PostgreSQL OID: "${oid}". OID must be numeric.`,
      );
    }
    // 1. Explicitly registered parser in local overrides
    const local = this._types.get(numOid);
    if (local) {
      return local;
    }
    // 2. Fallback to parent TypeOverrides instance if defined
    if (this._parent) {
      return this._parent.getTypeParser(numOid, format);
    }
    // 3. Fallback to global built-in defaults
    return textParsers[numOid] || parseString;
  }

  /**
   * Registers a custom type parser function for a specific PostgreSQL OID.
   *
   * @param oid - PostgreSQL Object Identifier number.
   * @param formatOrFn - 'text' format string, or parser function.
   * @param fn - Parser function if format string was passed as second argument.
   */
  public setTypeParser(
    oid: number | string,
    formatOrFn: string | TypeParser,
    fn?: TypeParser,
  ): void {
    let format = 'text';
    let parser: TypeParser;
    if (typeof formatOrFn === 'function') {
      parser = formatOrFn;
    } else {
      format = formatOrFn || 'text';
      parser = fn!;
    }
    if (format === 'binary') {
      throw new Error(
        'Binary wire format is not supported in @google-cloud/spanner-driver because rows are transported via Spanner Protobuf.',
      );
    }
    const numOid = typeof oid === 'string' ? Number(oid) : oid;
    if (typeof numOid !== 'number' || Number.isNaN(numOid)) {
      throw new TypeError(
        `Invalid PostgreSQL OID: "${oid}". OID must be numeric.`,
      );
    }
    if (typeof parser !== 'function') {
      throw new TypeError('Type parser must be a function');
    }
    this._types.set(numOid, parser);
  }

  /**
   * Helper parsing a PostgreSQL array string using the specified element parser.
   */
  public arrayParser(source: unknown, elementParser?: TypeParser): unknown[] {
    return parsePgArray(source, elementParser);
  }
}

/**
 * Global default TypeOverrides instance matching `pg.types`.
 */
export const types = new TypeOverrides();

// -----------------------------------------------------------------------------
// TypeCode & Annotation to PostgreSQL OID Lookup Tables
// -----------------------------------------------------------------------------

const SPANNER_TYPE_TO_PG_OID: Record<string, number> = {
  BOOL: BuiltinOids.BOOL, // 16
  INT64: BuiltinOids.INT8, // 20
  FLOAT32: BuiltinOids.FLOAT4, // 700
  FLOAT64: BuiltinOids.FLOAT8, // 701
  TIMESTAMP: BuiltinOids.TIMESTAMPTZ, // 1184
  DATE: BuiltinOids.DATE, // 1082
  STRING: BuiltinOids.TEXT, // 25
  BYTES: BuiltinOids.BYTEA, // 17
  NUMERIC: BuiltinOids.NUMERIC, // 1700
  JSON: BuiltinOids.JSONB, // 3802
  INTERVAL: BuiltinOids.INTERVAL, // 1186
  UUID: BuiltinOids.UUID, // 2950
};

const SPANNER_ARRAY_ELEM_TO_PG_ARRAY_OID: Record<string, number> = {
  BOOL: 1000, // bool[]
  INT64: 1016, // int8[]
  FLOAT32: 1021, // float4[]
  FLOAT64: 1022, // float8[]
  TIMESTAMP: 1185, // timestamptz[]
  DATE: 1182, // date[]
  STRING: 1009, // text[]
  BYTES: 1001, // bytea[]
  NUMERIC: 1231, // numeric[]
  JSON: 3807, // jsonb[]
  INTERVAL: 1187, // interval[]
  UUID: 2951, // uuid[]
};

const TYPE_ANNOTATION_TO_PG_OID: Record<string, number> = {
  PG_JSONB: BuiltinOids.JSONB, // 3802
  PG_NUMERIC: BuiltinOids.NUMERIC, // 1700
  PG_OID: 26, // PostgreSQL OID type
};

/**
 * Maps a Spanner `TypeCode` to its corresponding PostgreSQL catalog OID number.
 *
 * @param code - Spanner TypeCode numeric enum value or string name.
 * @param arrayElementType - Optional array element type descriptor when code is ARRAY.
 * @param typeAnnotation - Optional TypeAnnotationCode (e.g. PG_JSONB, PG_NUMERIC, PG_OID).
 * @returns Numeric PostgreSQL catalog OID (e.g. 20 for INT8, 25 for TEXT, 1184 for TIMESTAMPTZ).
 */
export function mapSpannerTypeToPgOid(
  code: number | string | undefined | null,
  arrayElementType?: {code?: number | string | null} | null,
  typeAnnotation?: number | string | null,
): number {
  if (typeAnnotation !== undefined && typeAnnotation !== null) {
    const annotName = (
      typeof typeAnnotation === 'number'
        ? TypeAnnotationCode[typeAnnotation]
        : String(typeAnnotation)
    )?.toUpperCase();

    const annotatedOid = TYPE_ANNOTATION_TO_PG_OID[annotName];
    if (annotatedOid) return annotatedOid;
  }

  if (code === undefined || code === null) {
    return BuiltinOids.TEXT;
  }

  const codeName = (
    typeof code === 'number' ? TypeCode[code] || String(code) : String(code)
  ).toUpperCase();

  if (codeName === 'ARRAY') {
    const elemCode = arrayElementType?.code;
    const elemName = (
      typeof elemCode === 'number'
        ? TypeCode[elemCode] || String(elemCode)
        : String(elemCode || 'STRING')
    ).toUpperCase();
    return SPANNER_ARRAY_ELEM_TO_PG_ARRAY_OID[elemName] ?? 1009;
  }

  return SPANNER_TYPE_TO_PG_OID[codeName] ?? BuiltinOids.TEXT;
}
