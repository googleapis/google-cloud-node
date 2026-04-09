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

// eslint-disable-next-line @typescript-eslint/no-var-requires
import {google} from '../../protos/protos';
import Long = require('long');

import {
  EncodedKeyMap,
  BigtableDate,
  ExecuteQueryStreamWithMetadata,
  SqlValue,
  QueryResultRow,
  Struct,
  ensureUint8Array,
} from './values';
import {ResultSetMetadata, Type} from './types';
import {PreciseDate} from '@google-cloud/precise-date';
import assert = require('assert');
import {Transform, TransformCallback, TransformOptions} from 'stream';
import {MetadataConsumer} from './metadataconsumer';
import {FieldMapping} from './namedlist';

/**
 * Class representing a readable stream with ExecuteQuery results
 * which also lets the caller get metadata.
 */
export class ExecuteQueryStreamTransformWithMetadata
  extends Transform
  implements ExecuteQueryStreamWithMetadata
{
  metadataConsumer: MetadataConsumer;
  fieldMapping: FieldMapping | null;
  hasCallerCancelled: () => boolean;
  protoBytesEncoding?: BufferEncoding;

  constructor(
    metadataConsumer: MetadataConsumer,
    hasCallerCancelled: () => boolean,
    protoBytesEncoding?: BufferEncoding,
    opts?: TransformOptions,
  ) {
    super({...opts, objectMode: true, highWaterMark: 0});
    this.fieldMapping = null;
    this.metadataConsumer = metadataConsumer;
    this.hasCallerCancelled = hasCallerCancelled;
    this.protoBytesEncoding = protoBytesEncoding;
  }

  valueToJsType(value: google.bigtable.v2.Value, metadata: Type): SqlValue {
    if (!value.kind) {
      return null;
    }
    switch (metadata.type) {
      case 'bytes':
        if (value.kind === 'bytesValue') {
          return ensureUint8Array(value.bytesValue!, this.protoBytesEncoding);
        }
        break;
      case 'string':
        if (value.kind === 'stringValue') {
          return value.stringValue!;
        }
        break;
      case 'int64':
        if (value.kind === 'intValue') {
          return intValueToBigInt(value.intValue!);
        }
        break;
      case 'bool':
        if (value.kind === 'boolValue') {
          return value.boolValue!;
        }
        break;
      case 'float32':
      case 'float64':
        if (value.kind === 'floatValue') {
          return value.floatValue!;
        }
        break;
      case 'timestamp':
        if (value.kind === 'timestampValue') {
          return new PreciseDate({
            seconds: value.timestampValue!.seconds ?? undefined,
            nanos: value.timestampValue!.nanos ?? undefined,
          });
        }
        break;
      case 'date':
        if (value.kind === 'dateValue') {
          return new BigtableDate(
            value.dateValue!.year || 0,
            value.dateValue!.month || 0,
            value.dateValue!.day || 0,
          );
        }
        break;
      case 'array':
        return this.valueToJsArray(value, metadata);
      case 'struct':
        return this.valueToJsStruct(value, metadata);
      case 'map':
        return this.valueToJsMap(value, metadata);
      default:
        throw new Error(
          `Unexpected type to parse: ${JSON.stringify(metadata)}`,
        );
    }
    throw new Error(`Metadata and Value not matching.
    Metadata:${metadata}
    Value:${value}`);
  }

  valueToJsArray(value: google.bigtable.v2.Value, metadata: Type): SqlValue {
    assert(metadata.type === 'array');
    if (
      value.arrayValue === null ||
      value.arrayValue === undefined ||
      value.arrayValue.values === null ||
      value.arrayValue.values === undefined
    ) {
      return null;
    }
    return value.arrayValue.values.map(value =>
      this.valueToJsType(
        value as google.bigtable.v2.Value,
        metadata.elementType,
      ),
    );
  }

  valueToJsStruct(value: google.bigtable.v2.Value, metadata: Type): SqlValue {
    assert(metadata.type === 'struct');
    if (
      value.arrayValue === null ||
      value.arrayValue === undefined ||
      value.arrayValue.values === null ||
      value.arrayValue.values === undefined
    ) {
      return null;
    }
    if (value.arrayValue.values.length !== metadata.values.length) {
      throw new Error(
        `Internal error - received Struct with ${value.arrayValue.values.length} values, but metadata has ${metadata.values.length} fields.`,
      );
    }
    return new Struct(
      value.arrayValue.values.map((value, index) =>
        this.valueToJsType(
          value as google.bigtable.v2.Value,
          metadata.get(index),
        ),
      ),
      metadata.fieldMapping,
    );
  }

  valueToJsMap(value: google.bigtable.v2.Value, metadata: Type): SqlValue {
    assert(metadata.type === 'map');
    if (
      value.arrayValue === null ||
      value.arrayValue === undefined ||
      value.arrayValue.values === null ||
      value.arrayValue.values === undefined
    ) {
      return null;
    }
    if (
      metadata.keyType.type !== 'int64' &&
      metadata.keyType.type !== 'string' &&
      metadata.keyType.type !== 'bytes'
    ) {
      throw new Error(
        `Internal error - unsupported type of key received: ${metadata.keyType.type}`,
      );
    }
    const values: google.bigtable.v2.Value[] = value.arrayValue
      .values as google.bigtable.v2.Value[];
    return new EncodedKeyMap(
      values.map(value => {
        // Types are ensured by checking metadata.keyType.type earlier.
        const pair = value?.arrayValue?.values as google.bigtable.v2.Value[];
        const keyValue = this.valueToJsType(pair[0], metadata.keyType) as
          | bigint
          | string
          | Uint8Array
          | null;
        return [keyValue, this.valueToJsType(pair[1], metadata.valueType)];
      }),
    );
  }

  getFieldMapping(): FieldMapping {
    if (this.fieldMapping === null) {
      const metadata = this.getMetadata();
      if (metadata === null) {
        throw new Error('Metadata was not sent by the server.');
      }
      this.fieldMapping = metadata.fieldMapping;
    }
    return this.fieldMapping;
  }

  _transform(
    chunk: Array<google.bigtable.v2.Value>,
    _encoding: BufferEncoding,
    callback: TransformCallback,
  ) {
    let error: Error | null = null;
    try {
      if (!this.hasCallerCancelled()) {
        const maybeMetadata = this.metadataConsumer.getMetadata();
        if (maybeMetadata) {
          this.push(
            new QueryResultRow(
              chunk.map((value, index) =>
                this.valueToJsType(value, maybeMetadata.get(index)),
              ),
              this.getFieldMapping(),
            ),
          );
        } else {
          throw new Error(
            'Server error - expected to receive metadata by now.',
          );
        }
      }
    } catch (e) {
      error = e as Error;
    }
    callback(error);
  }

  getMetadata(): ResultSetMetadata | null {
    return this.metadataConsumer.getMetadata();
  }
}

function intValueToBigInt(intValue: string | number | Long): bigint {
  if (intValue instanceof Long) {
    return BigInt(intValue.toString());
  }
  return BigInt(intValue);
}
