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

export type {TypeParser};

/**
 * Standard PostgreSQL Object Identifier (OID) type numbers.
 * Matches standard PostgreSQL pg_type catalog OIDs and `pg-types.builtins`.
 */
export enum BuiltinOids {
  BOOL = 16,
  BYTEA = 17,
  CHAR = 18,
  NAME = 19,
  INT8 = 20,
  INT2 = 21,
  INT2_VECTOR = 22,
  INT4 = 23,
  REGPROC = 24,
  TEXT = 25,
  OID = 26,
  TID = 27,
  XID = 28,
  CID = 29,
  OID_VECTOR = 30,
  JSON = 114,
  XML = 142,
  POINT = 600,
  LSEG = 601,
  PATH = 602,
  BOX = 603,
  POLYGON = 604,
  LINE = 628,
  FLOAT4 = 700,
  FLOAT8 = 701,
  UNKNOWN = 705,
  CIRCLE = 718,
  MONEY = 790,
  MACADDR = 829,
  INET = 869,
  CIDR = 650,
  MACADDR8 = 774,
  ACLITEM = 1033,
  BPCHAR = 1042,
  VARCHAR = 1043,
  DATE = 1082,
  TIME = 1083,
  /**
   * PostgreSQL TIMESTAMP WITHOUT TIME ZONE (OID 1114).
   * Note: Cloud Spanner requires TIMESTAMPTZ (1184) for table schema columns,
   * but OID 1114 is retained in the client catalog for full node-postgres / ORM compatibility.
   */
  TIMESTAMP = 1114,
  /** PostgreSQL TIMESTAMP WITH TIME ZONE (OID 1184). Standard Spanner timestamp type. */
  TIMESTAMPTZ = 1184,
  INTERVAL = 1186,
  TIMETZ = 1266,
  BIT = 1560,
  VARBIT = 1562,
  NUMERIC = 1700,
  REFCURSOR = 1790,
  RECORD = 2249,
  UUID = 2950,
  JSONB = 3802,

  // Array OIDs
  _BOOL = 1000,
  _BYTEA = 1001,
  _CHAR = 1002,
  _NAME = 1003,
  _INT2 = 1005,
  _INT2_VECTOR = 1006,
  _INT4 = 1007,
  _REGPROC = 1008,
  _TEXT = 1009,
  _OID = 1028,
  _TID = 1010,
  _XID = 1011,
  _CID = 1012,
  _OID_VECTOR = 1013,
  _INT8 = 1016,
  _JSON = 199,
  _XML = 143,
  _POINT = 1017,
  _LSEG = 1018,
  _PATH = 1019,
  _BOX = 1020,
  _POLYGON = 1027,
  _LINE = 629,
  _FLOAT4 = 1021,
  _FLOAT8 = 1022,
  _CIRCLE = 719,
  _MONEY = 791,
  _MACADDR = 1040,
  _INET = 1041,
  _CIDR = 651,
  _MACADDR8 = 775,
  _ACLITEM = 1034,
  _BPCHAR = 1014,
  _VARCHAR = 1015,
  _DATE = 1182,
  _TIME = 1183,
  _TIMESTAMP = 1115,
  _TIMESTAMPTZ = 1185,
  _INTERVAL = 1187,
  _TIMETZ = 1270,
  _BIT = 1561,
  _VARBIT = 1563,
  _NUMERIC = 1231,
  _REFCURSOR = 2201,
  _RECORD = 2287,
  _UUID = 2951,
  _JSONB = 3807,
}

/** Map of array OID to its corresponding scalar element OID. */
const ARRAY_ELEMENT_OIDS: Record<number, number> = {
  [BuiltinOids._BOOL]: BuiltinOids.BOOL,
  [BuiltinOids._BYTEA]: BuiltinOids.BYTEA,
  [BuiltinOids._CHAR]: BuiltinOids.CHAR,
  [BuiltinOids._NAME]: BuiltinOids.NAME,
  [BuiltinOids._INT2]: BuiltinOids.INT2,
  [BuiltinOids._INT4]: BuiltinOids.INT4,
  [BuiltinOids._INT8]: BuiltinOids.INT8,
  [BuiltinOids._TEXT]: BuiltinOids.TEXT,
  [BuiltinOids._OID]: BuiltinOids.OID,
  [BuiltinOids._JSON]: BuiltinOids.JSON,
  [BuiltinOids._XML]: BuiltinOids.XML,
  [BuiltinOids._FLOAT4]: BuiltinOids.FLOAT4,
  [BuiltinOids._FLOAT8]: BuiltinOids.FLOAT8,
  [BuiltinOids._BPCHAR]: BuiltinOids.BPCHAR,
  [BuiltinOids._VARCHAR]: BuiltinOids.VARCHAR,
  [BuiltinOids._DATE]: BuiltinOids.DATE,
  [BuiltinOids._TIME]: BuiltinOids.TIME,
  [BuiltinOids._TIMESTAMP]: BuiltinOids.TIMESTAMP,
  [BuiltinOids._TIMESTAMPTZ]: BuiltinOids.TIMESTAMPTZ,
  [BuiltinOids._INTERVAL]: BuiltinOids.INTERVAL,
  [BuiltinOids._TIMETZ]: BuiltinOids.TIMETZ,
  [BuiltinOids._NUMERIC]: BuiltinOids.NUMERIC,
  [BuiltinOids._UUID]: BuiltinOids.UUID,
  [BuiltinOids._JSONB]: BuiltinOids.JSONB,
};

/**
 * Parses a PostgreSQL boolean wire string ('t', 'f', 'true', 'false', '1', '0') into boolean.
 */
export function parseBool(val: unknown): boolean {
  if (val === null || val === undefined) return false;
  if (typeof val === 'boolean') return val;
  if (typeof val !== 'string') return Boolean(val);
  const trimmed = val.trim().toLowerCase();
  if (!trimmed) return false;
  return (
    trimmed === 't' ||
    trimmed === 'true' ||
    trimmed === '1' ||
    trimmed === 'y' ||
    trimmed === 'yes'
  );
}

/**
 * Parses integer wire strings into number.
 */
export function parseInteger(val: unknown): number {
  if (typeof val === 'number') return Math.trunc(val);
  if (typeof val !== 'string') return Number(val);
  return parseInt(val, 10);
}

/**
 * Parses floating point wire strings into number.
 */
export function parseFloatVal(val: unknown): number {
  if (typeof val === 'number') return val;
  if (typeof val !== 'string') return Number(val);
  return parseFloat(val);
}

/**
 * Default pass-through string parser (used for TEXT, VARCHAR, UUID, INT8, NUMERIC).
 */
export function parseString(val: unknown): string {
  if (typeof val === 'string') return val;
  return String(val);
}

/**
 * Parses JSON and JSONB wire strings into JavaScript objects.
 */
export function parseJson(val: unknown): unknown {
  if (typeof val === 'object' && val !== null) return val;
  if (typeof val !== 'string') return val;
  return JSON.parse(val);
}

/**
 * Parses PostgreSQL bytea format ('\\x...' hex format or octal escape format) into Node.js Buffer.
 */
export function parseBytea(val: unknown): Buffer {
  if (Buffer.isBuffer(val)) return val;
  if (val instanceof Uint8Array) return Buffer.from(val);
  if (typeof val !== 'string') return Buffer.from(String(val));
  const trimmed = val.trim();
  if (trimmed.startsWith('\\x')) {
    return Buffer.from(trimmed.slice(2), 'hex');
  }
  // Legacy PostgreSQL escape format (\000 octal or \\)
  const bytes: number[] = [];
  let i = 0;
  while (i < val.length) {
    if (val[i] === '\\') {
      if (val[i + 1] === '\\') {
        bytes.push(92); // '\\'
        i += 2;
      } else if (
        /[0-7]/.test(val[i + 1]) &&
        /[0-7]/.test(val[i + 2]) &&
        /[0-7]/.test(val[i + 3])
      ) {
        const octalStr = val.slice(i + 1, i + 4);
        bytes.push(parseInt(octalStr, 8));
        i += 4;
      } else {
        bytes.push(val.charCodeAt(i));
        i++;
      }
    } else {
      bytes.push(val.charCodeAt(i));
      i++;
    }
  }
  return Buffer.from(bytes);
}

/**
 * Parses PostgreSQL timestamp and timestamptz wire strings into JavaScript Date objects.
 * Expects standardized ISO-8601 strings returned by Spanner / PostgreSQL over the wire.
 *
 * @param val - Raw timestamp string (e.g. '2026-08-11 12:30:00+00') or Date instance.
 * @returns Parsed JavaScript Date instance.
 */
export function parseTimestamp(val: unknown): Date {
  if (val instanceof Date) return val;
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
 * Recursive parser for PostgreSQL array wire text.
 * Handles both 1D array column values (e.g. '{1,2,3}', '{"foo",NULL}') and
 * multidimensional nested SQL expression arrays (e.g. '{{a,b},{c,d}}').
 *
 * @param source - Raw PostgreSQL array wire string or pre-parsed array.
 * @param elementParser - Element parser function for scalar array items.
 * @returns Parsed JavaScript array with converted elements.
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
        : elementParser(item as string);
    });
  }
  if (typeof source !== 'string' || !source) {
    return [];
  }
  const src = source.trim();
  if (src[0] !== '{') {
    return [];
  }
  let position = 0;

  function parseEntries(): unknown[] {
    const entries: unknown[] = [];
    position++; // skip '{'

    while (position < src.length) {
      // Skip any leading whitespace before token
      while (position < src.length && /\s/.test(src[position])) {
        position++;
      }

      if (position >= src.length) break;
      const char = src[position];

      if (char === '}') {
        position++;
        break;
      }

      if (char === ',') {
        position++;
        continue;
      }

      if (char === '{') {
        entries.push(parseEntries());
        continue;
      }

      if (char === '"') {
        // Quoted string
        position++; // skip opening '"'
        let value = '';
        while (position < src.length) {
          const c = src[position];
          if (c === '\\') {
            value += src[position + 1] ?? '';
            position += 2;
          } else if (c === '"') {
            position++; // skip closing '"'
            break;
          } else {
            value += c;
            position++;
          }
        }
        entries.push(elementParser(value));
      } else {
        // Unquoted value
        let value = '';
        while (position < src.length) {
          const c = src[position];
          if (c === '\\') {
            value += src[position + 1] ?? '';
            position += 2;
          } else if (c === ',' || c === '}') {
            break;
          } else {
            value += c;
            position++;
          }
        }
        const trimmed = value.trim();
        if (trimmed.toUpperCase() === 'NULL') {
          entries.push(null);
        } else if (trimmed.length > 0) {
          entries.push(elementParser(trimmed));
        }
      }
    }

    return entries;
  }

  return parseEntries();
}

/**
 * Formats a JavaScript array into PostgreSQL array string literal syntax ('{1,2,3}').
 */
function formatPgArrayLiteral(arr: unknown[]): string {
  const elements = arr.map(rawItem => {
    let item = rawItem;
    if (
      typeof item === 'object' &&
      item !== null &&
      typeof (item as {toPostgres?: unknown}).toPostgres === 'function'
    ) {
      item = (
        item as {
          toPostgres: (encoder: typeof encodePgValue) => unknown;
        }
      ).toPostgres(encodePgValue);
    }
    if (item === null || item === undefined) {
      return 'NULL';
    }
    if (Array.isArray(item)) {
      return formatPgArrayLiteral(item);
    }
    if (Buffer.isBuffer(item) || item instanceof Uint8Array) {
      return `"\\\\x${Buffer.from(item).toString('hex')}"`;
    }
    if (item instanceof Date) {
      return Number.isNaN(item.getTime()) ? 'NULL' : `"${item.toISOString()}"`;
    }
    const str = typeof item === 'object' ? JSON.stringify(item) : String(item);
    // Escape quotes and backslashes for array literal
    return `"${str.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  });
  return `{${elements.join(',')}}`;
}

/**
 * Serializes a JavaScript value into a PostgreSQL-compatible query parameter wire value.
 */
export function encodePgValue(val: unknown): unknown {
  if (val === null || val === undefined) {
    return null;
  }
  if (
    typeof val === 'object' &&
    typeof (val as {toPostgres?: unknown}).toPostgres === 'function'
  ) {
    return encodePgValue(
      (
        val as {
          toPostgres: (encoder: typeof encodePgValue) => unknown;
        }
      ).toPostgres(encodePgValue),
    );
  }
  if (val instanceof Date) {
    return Number.isNaN(val.getTime()) ? null : val.toISOString();
  }
  if (Buffer.isBuffer(val) || val instanceof Uint8Array) {
    return `\\x${Buffer.from(val).toString('hex')}`;
  }
  if (typeof val === 'bigint') {
    return val.toString();
  }
  if (Array.isArray(val)) {
    return formatPgArrayLiteral(val);
  }
  if (typeof val === 'object') {
    return JSON.stringify(val);
  }
  return val;
}

/**
 * Default PostgreSQL built-in parser mappings by OID.
 */
const DEFAULT_PARSERS: Record<number, TypeParser> = {
  [BuiltinOids.BOOL]: parseBool,
  [BuiltinOids.BYTEA]: parseBytea,
  [BuiltinOids.CHAR]: parseString,
  [BuiltinOids.NAME]: parseString,
  [BuiltinOids.INT8]: parseString, // String by default to prevent > 53-bit precision loss
  [BuiltinOids.INT2]: parseInteger,
  [BuiltinOids.INT4]: parseInteger,
  [BuiltinOids.TEXT]: parseString,
  [BuiltinOids.OID]: parseInteger,
  [BuiltinOids.JSON]: parseJson,
  [BuiltinOids.FLOAT4]: parseFloatVal,
  [BuiltinOids.FLOAT8]: parseFloatVal,
  [BuiltinOids.VARCHAR]: parseString,
  [BuiltinOids.BPCHAR]: parseString,
  [BuiltinOids.DATE]: parseString, // Returns 'YYYY-MM-DD' by default
  [BuiltinOids.TIME]: parseString,
  [BuiltinOids.TIMESTAMP]: parseTimestamp,
  [BuiltinOids.TIMESTAMPTZ]: parseTimestamp,
  [BuiltinOids.NUMERIC]: parseString, // Exact decimal string by default
  [BuiltinOids.UUID]: parseString,
  [BuiltinOids.JSONB]: parseJson,
};

/**
 * Resolves the default built-in type parser for a given PostgreSQL OID.
 */
export function getDefaultTypeParser(oid: number): TypeParser {
  if (DEFAULT_PARSERS[oid]) {
    return DEFAULT_PARSERS[oid];
  }
  // Check if this is a known array OID
  const elementOid = ARRAY_ELEMENT_OIDS[oid];
  if (elementOid !== undefined) {
    const elemParser = getDefaultTypeParser(elementOid);
    return (val: string) => parsePgArray(val, elemParser);
  }
  // Fallback to pass-through string
  return parseString;
}

/**
 * TypeOverrides provides a scoped type parser and encoder registry.
 * Matches `pg-types.TypeOverrides` and allows overriding type parsers per query, client, or globally.
 */
export class TypeOverrides implements ITypeOverrides {
  private readonly _parsers: Map<number, TypeParser> = new Map();
  /**
   * Internal fast cache for dynamically synthesized array parsers.
   * Prevents recreating array parsing closures per column/row during query result decoding.
   * Automatically invalidated in setTypeParser whenever any parser is updated.
   */
  private readonly _arrayParserCache: Map<number, TypeParser> = new Map();
  private readonly _parent?: ITypeOverrides;

  /** Standard PostgreSQL catalog OID constants. */
  public readonly builtins = BuiltinOids;

  constructor(parent?: ITypeOverrides) {
    this._parent = parent;
  }

  /**
   * Retrieves the type parser registered for a specific PostgreSQL OID.
   *
   * @param oid - PostgreSQL Object Identifier number (e.g. 20 for INT8, 1184 for TIMESTAMPTZ).
   * @param format - Formatting mode ('text' or 'binary'). Defaults to 'text'.
   * @returns Parsing function converting wire string into JavaScript value.
   */
  public getTypeParser(oid: number | string, format = 'text'): TypeParser {
    const numOid = typeof oid === 'string' ? Number(oid) : oid;
    if (typeof numOid !== 'number' || Number.isNaN(numOid)) {
      throw new TypeError(
        `Invalid PostgreSQL OID: "${oid}". OID must be numeric.`,
      );
    }
    // 1. Explicitly registered parser takes top priority
    if (this._parsers.has(numOid)) {
      return this._parsers.get(numOid)!;
    }
    // 2. Fast cache hit for synthesized array parser
    if (this._arrayParserCache.has(numOid)) {
      return this._arrayParserCache.get(numOid)!;
    }
    // 3. Synthesize array parser ONLY if this instance has an explicit element parser override
    const elementOid = ARRAY_ELEMENT_OIDS[numOid];
    if (elementOid !== undefined && this._parsers.has(elementOid)) {
      const elemParser = this.getTypeParser(elementOid, format);
      const arrayParser = (val: unknown) => parsePgArray(val, elemParser);
      this._arrayParserCache.set(numOid, arrayParser);
      return arrayParser;
    }
    // 4. Fallback to parent TypeOverrides instance if defined
    if (this._parent) {
      return this._parent.getTypeParser(numOid, format);
    }
    // 5. Synthesize array parser using default element parser if no parent overrides exist
    if (elementOid !== undefined) {
      const elemParser = this.getTypeParser(elementOid, format);
      const arrayParser = (val: unknown) => parsePgArray(val, elemParser);
      this._arrayParserCache.set(numOid, arrayParser);
      return arrayParser;
    }
    // 6. Fallback to global built-in defaults
    return getDefaultTypeParser(numOid);
  }

  /**
   * Registers a custom type parser function for a specific PostgreSQL OID.
   *
   * @param oid - PostgreSQL Object Identifier number.
   * @param formatOrFn - 'text' format string or parser function.
   * @param fn - Parser function if format string was passed as second argument.
   */
  public setTypeParser(
    oid: number | string,
    formatOrFn: string | TypeParser,
    fn?: TypeParser,
  ): void {
    const numOid = typeof oid === 'string' ? Number(oid) : oid;
    if (typeof numOid !== 'number' || Number.isNaN(numOid)) {
      throw new TypeError(
        `Invalid PostgreSQL OID: "${oid}". OID must be numeric.`,
      );
    }
    const parser = typeof formatOrFn === 'function' ? formatOrFn : fn!;
    if (typeof parser !== 'function') {
      throw new TypeError('Type parser must be a function');
    }
    this._parsers.set(numOid, parser);
    // Invalidate synthesized array cache so any updated element parser is immediately picked up
    this._arrayParserCache.clear();
  }

  /**
   * Decodes a raw database wire value using the parser registered for the given OID.
   *
   * @param val - Raw string value from database or null/undefined.
   * @param dataTypeID - Column PostgreSQL OID.
   * @returns Parsed JavaScript value.
   */
  public decodeValue(
    val: string | null | undefined,
    dataTypeID: number | string,
  ): unknown {
    if (val === null || val === undefined) {
      return null;
    }
    const parser = this.getTypeParser(dataTypeID);
    return parser(val);
  }

  /**
   * Encodes a JavaScript parameter value into its database wire representation.
   *
   * @param val - JavaScript value (Date, Buffer, Array, BigInt, Object, etc.).
   * @returns Serialized parameter value.
   */
  public encodeValue(val: unknown): unknown {
    return encodePgValue(val);
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
