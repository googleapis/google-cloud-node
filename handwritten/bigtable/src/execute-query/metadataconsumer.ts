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
import * as Types from './types';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import {google} from '../../protos/protos';

/**
 * This class keeps and parses the metadata.
 */
export class MetadataConsumer {
  private metadata: Types.ResultSetMetadata | null;

  constructor() {
    this.metadata = null;
  }

  getMetadata = (): Types.ResultSetMetadata | null => {
    return this.metadata;
  };

  consume = (new_metadata: Types.ResultSetMetadata) => {
    this.metadata = new_metadata;
  };

  static parsePBType(type: google.bigtable.v2.Type): Types.Type {
    switch (type.kind) {
      case 'bytesType':
        return Types.Bytes();
      case 'stringType':
        return Types.String();
      case 'int64Type':
        return Types.Int64();
      case 'float64Type':
        return Types.Float64();
      case 'float32Type':
        return Types.Float32();
      case 'boolType':
        return Types.Bool();
      case 'timestampType':
        return Types.Timestamp();
      case 'dateType':
        return Types.Date();
      case 'structType':
        return Types.Struct(
          ...type.structType!.fields!.map(field => ({
            name: field.fieldName as string | null,
            type: MetadataConsumer.parsePBType(
              field.type as google.bigtable.v2.Type,
            ),
          })),
        );
      case 'arrayType':
        return Types.Array(
          MetadataConsumer.parsePBType(
            type.arrayType!.elementType! as google.bigtable.v2.Type,
          ),
        );
      case 'mapType': {
        const keyType = MetadataConsumer.parsePBType(
          type.mapType!.keyType! as google.bigtable.v2.Type,
        );
        if (
          keyType.type !== 'int64' &&
          keyType.type !== 'string' &&
          keyType.type !== 'bytes'
        ) {
          throw new Error(
            `Unsupported type of map key received: ${keyType.type}`,
          );
        }
        return Types.Map(
          keyType,
          MetadataConsumer.parsePBType(
            type.mapType!.valueType! as google.bigtable.v2.Type,
          ),
        );
      }
      default:
        throw new Error(
          `Type ${type.kind} not supported by current client version`,
        );
    }
  }

  static parseMetadata(
    metadata: google.bigtable.v2.IResultSetMetadata,
  ): Types.ResultSetMetadata {
    if (!metadata.protoSchema) {
      throw new Error('Only protoSchemas are supported.');
    }
    const columns = metadata.protoSchema.columns!;
    if (columns.length === 0) {
      throw new Error('Invalid empty ResultSetMetadata received.');
    }

    return Types.ResultSetMetadata.fromTuples(
      columns.map(column => {
        if (column.name === null || column.name === '') {
          throw new Error(`Invalid column name "${column.name}"`);
        } else {
          return [
            column.name ?? null,
            MetadataConsumer.parsePBType(
              column.type! as google.bigtable.v2.Type,
            ),
          ];
        }
      }),
    );
  }
}
