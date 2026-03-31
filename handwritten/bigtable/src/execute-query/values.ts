// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Duplex, Readable} from 'stream';
import * as SqlTypes from './types';
import {PreciseDate} from '@google-cloud/precise-date';
import {NamedList} from './namedlist';

// fast-crc32c will segfault on import on non-x64 architectures, due to a
// lack of SSE instructions.
const CRC32C =
  process.arch === 'x64'
    ? require('fast-crc32c')
    : require('fast-crc32c/impls/js_crc32c');

export type BigtableMap = EncodedKeyMap;

export type ExecuteQueryParameterValue =
  | Uint8Array
  | string
  | bigint
  | number
  | boolean
  | PreciseDate
  | BigtableDate
  | Array<ExecuteQueryParameterValue>
  | null;

export type SqlValue =
  | ExecuteQueryParameterValue
  | Struct
  | Array<SqlValue>
  | BigtableMap;

/**
 * A custom class created to allow setting year, month and date to 0.
 */
export class BigtableDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    if (year < 0) {
      throw new Error('Invalid year.');
    }
    this.year = year;

    if (month < 0 || month > 12) {
      throw new Error('Invalid month.');
    }
    this.month = month;

    if (day < 0 || day > 31) {
      throw new Error('Invalid month.');
    }
    this.day = day;
  }
}

export class QueryResultRow extends NamedList<SqlValue> {}

export class Struct extends NamedList<SqlValue> {
  static fromTuples(tuples: [string | null, SqlValue][]): Struct {
    return NamedList._fromTuples(Struct, tuples);
  }
}

export interface ExecuteQueryStreamWithMetadata extends Duplex {
  getMetadata: () => SqlTypes.ResultSetMetadata | null;
  end: () => this;
}

export function checksumValid(
  buffer: Buffer,
  expectedChecksum: number,
): boolean {
  return CRC32C.calculate(buffer) === expectedChecksum;
}

export function ensureUint8Array(
  bytes: Uint8Array | string,
  encoding?: BufferEncoding,
): Uint8Array {
  return bytes instanceof Uint8Array
    ? bytes
    : Buffer.from(bytes, encoding || 'base64');
}

function _parseBufferToMapKey(
  key: bigint | string | Uint8Array | null,
): bigint | string | null {
  // Uint8Array is always an instance of Buffer,
  // but we keep it in the if condition for TS linter's sake
  if (key instanceof Buffer || key instanceof Uint8Array) {
    const base64Key = key.toString('base64');
    return base64Key;
  } else if (key === null) {
    return null;
  } else {
    return key;
  }
}

type MapKey = bigint | string | Uint8Array | null;
// internal representation of the map contains the original key and value tuple
type _MapValue = [MapKey, SqlValue];

export class EncodedKeyMap
  implements Map<bigint | string | Uint8Array | null, SqlValue>
{
  private map_impl: Map<bigint | string | null, _MapValue>;
  /**
   * Class representing a Map Value returned by ExecuteQuery. Native JS Map
   * does not support Buffer comparison - it compares object id and not
   * buffer values. This class solves this by encoding Buffer keys as
   * base64 strings.
   * Please note that an empty string and an empty buffer have the same
   * representation, however, we do not ever use mixed key types (all keys are
   * always all buffers or all strings) so we don't need to handle this.
   */
  constructor(
    entries?: ReadonlyArray<
      [bigint | string | Uint8Array | null, SqlValue]
    > | null,
  ) {
    if (entries) {
      // Process entries to encode Buffer keys as base64
      const processedEntries = entries.map(([key, value]) => {
        return [_parseBufferToMapKey(key), [key, value]];
      }) as ReadonlyArray<[bigint | string, _MapValue]>;
      this.map_impl = new Map<bigint | string | null, _MapValue>(
        processedEntries,
      );
    } else {
      this.map_impl = new Map<bigint | string | null, _MapValue>();
    }
  }

  clear(): void {
    this.map_impl.clear();
  }

  delete(key: string | bigint | Uint8Array | null): boolean {
    return this.map_impl.delete(_parseBufferToMapKey(key));
  }

  forEach(
    callbackfn: (
      value: SqlValue,
      key: string | bigint | Uint8Array | null,
      map: Map<string | bigint | Uint8Array | null, SqlValue>,
    ) => void,
    thisArg?: any,
  ): void {
    this.map_impl.forEach((value, key) => {
      callbackfn.call(thisArg, value[1], value[0], this.map_impl);
    });
  }

  has(key: string | bigint | Uint8Array | null): boolean {
    return this.map_impl.has(_parseBufferToMapKey(key));
  }

  get size(): number {
    return this.map_impl.size;
  }

  entries(): MapIterator<[string | bigint | Uint8Array | null, SqlValue]> {
    return this.map_impl.values();
  }

  keys(): MapIterator<string | bigint | Uint8Array | null> {
    const iterator = this.map_impl.values();
    return {
      next: () => {
        const result = iterator.next();
        if (result.done) return result;
        return {value: result.value[0], done: false};
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  }

  values(): MapIterator<SqlValue> {
    const iterator = this.map_impl.values();
    return {
      next: () => {
        const result = iterator.next();
        if (result.done) return result;
        return {value: result.value[1], done: false};
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  }

  [Symbol.iterator](): MapIterator<
    [string | bigint | Uint8Array | null, SqlValue]
  > {
    return this.entries();
  }

  get [Symbol.toStringTag](): string {
    return 'EncodedKeyMap';
  }

  get(key: string | bigint | Uint8Array | null): SqlValue | undefined {
    return this.map_impl.get(_parseBufferToMapKey(key))?.[1];
  }

  set(key: string | bigint | Uint8Array | null, value: SqlValue): this {
    this.map_impl.set(_parseBufferToMapKey(key), [key, value]);
    return this;
  }
}
