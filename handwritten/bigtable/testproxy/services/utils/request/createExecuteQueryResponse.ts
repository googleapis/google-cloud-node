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

import * as protos from '../../../protos/protos';
import {SqlTypes} from '../../../../src';
import {MetadataConsumer} from '../../../../src/execute-query/metadataconsumer';
import {
  convertJsValueToValue,
  executeQueryTypeToPBType,
} from '../../../../src/execute-query/parameterparsing';
import {PreparedStatement} from '../../../../src/execute-query/preparedstatement';
import {ExecuteQueryStreamTransformWithMetadata} from '../../../../src/execute-query/queryresultrowtransformer';
import {
  QueryResultRow,
  SqlValue,
  EncodedKeyMap,
  Struct,
  BigtableMap,
  ExecuteQueryParameterValue,
} from '../../../../src/execute-query/values';
import * as is from 'is';

async function getMetadataFromPreparedStatement(
  preparedStatement: PreparedStatement,
): Promise<SqlTypes.ResultSetMetadata> {
  return await new Promise((resolve, reject) => {
    preparedStatement.getData(
      (
        err?: Error,
        preparedQueryBytes?: Uint8Array | string,
        metadata?: SqlTypes.ResultSetMetadata,
      ) => {
        if (err) {
          reject(err);
        } else {
          resolve(metadata!);
        }
      },
      100,
    );
  });
}

export async function parseMetadata(preparedStatement: PreparedStatement) {
  const metadata = await getMetadataFromPreparedStatement(preparedStatement);
  const values = metadata.columns.map((v, i) => {
    return [metadata.getFieldNameAtIndex(i), executeQueryTypeToPBType(v)];
  });
  return values.map(v =>
    protos.google.bigtable.v2.ColumnMetadata.create({
      name: v[0] as string,
      type: v[1] as protos.google.bigtable.v2.IType,
    }),
  );
}

function convertToArray(
  value: SqlValue,
  type: SqlTypes.ArrayType,
): protos.google.bigtable.v2.IValue {
  if (!is.array(value)) {
    throw new Error(`Value ${value} cannot be converted to an array.`);
  }
  const arrayValue = value as Array<SqlValue>;
  return {
    arrayValue: {
      values: arrayValue.map((element, index) => {
        try {
          return convertAnyValueToPb(element, type.elementType);
          // eslint-disable-next-line
        } catch (conversionError: any) {
          if (conversionError instanceof Error) {
            throw new Error(
              `Error while converting element ${index} of an array: ${conversionError.message}`,
            );
          } else {
            throw conversionError;
          }
        }
      }),
    },
  };
}

function convertToStruct(
  value: SqlValue,
  type: SqlTypes.StructType,
): protos.google.bigtable.v2.IValue {
  if (!(typeof value === 'object' && value instanceof Struct)) {
    throw new Error(`Value ${value} cannot be converted to an array.`);
  }
  const arrayValue = value as Struct;
  return {
    arrayValue: {
      values: arrayValue.values.map((element, index) => {
        try {
          return convertAnyValueToPb(element, type.get(index));
          // eslint-disable-next-line
        } catch (convertionError: any) {
          if (convertionError instanceof Error) {
            throw new Error(
              `Error while converting element ${index} of a Struct to field of type ${
                type.get(index).type
              }: ${convertionError.message}`,
            );
          } else {
            throw convertionError;
          }
        }
      }),
    },
  };
}

function convertToMap(
  value: SqlValue,
  type: SqlTypes.MapType,
): protos.google.bigtable.v2.IValue {
  if (!(value instanceof EncodedKeyMap)) {
    throw new Error(`Value ${value} cannot be converted to a map.`);
  }
  const arrayValue = value as BigtableMap;
  return {
    arrayValue: {
      values: Array.from(arrayValue.entries()).flatMap(([key, value]) => {
        return {
          arrayValue: {
            values: [
              convertMapEntry(key, type.keyType, key, 'key'),
              convertMapEntry(value, type.valueType, key, 'value'),
            ],
          },
        };
      }),
    },
  };
}

function convertMapEntry(
  value: SqlValue,
  type: SqlTypes.Type,
  keyName: string | bigint | Uint8Array | null,
  keyOrValue: 'key' | 'value',
): protos.google.bigtable.v2.IValue {
  try {
    return convertAnyValueToPb(value, type);
    // eslint-disable-next-line
  } catch (convertionError: any) {
    if (convertionError instanceof Error) {
      throw new Error(
        `Error while converting element ${keyName} of a Map to map ${keyOrValue} of type ${type.type}: ${convertionError.message}`,
      );
    } else {
      throw convertionError;
    }
  }
}

function convertAnyValueToPb(
  value: SqlValue,
  type: SqlTypes.Type,
): protos.google.bigtable.v2.IValue {
  if (value === null || value === undefined) {
    return protos.google.bigtable.v2.Value.create({});
  }
  if (type.type === 'array') {
    return convertToArray(value, type);
  } else if (type.type === 'struct') {
    return convertToStruct(value, type);
  } else if (type.type === 'map') {
    return convertToMap(value, type);
  } else {
    return convertJsValueToValue(value as ExecuteQueryParameterValue, type);
  }
}

export async function parseRows(
  preparedStatement: PreparedStatement,
  rows: QueryResultRow[],
) {
  const metadata = await getMetadataFromPreparedStatement(preparedStatement);
  const parsedRows = rows.map(row => {
    const rowValues = metadata.columns.map((type, i) => {
      const value = row.get(i);
      return convertAnyValueToPb(value, type);
    });
    return {values: rowValues};
  });
  return parsedRows;
}

export async function parseParameters(params: {
  [param: string]: protos.google.bigtable.v2.Value;
}) {
  const parameters: {[param: string]: SqlValue} = {};
  const parameterTypes: {[param: string]: SqlTypes.Type} = {};
  const transfomer = new ExecuteQueryStreamTransformWithMetadata(
    null as any,
    () => false,
    'utf-8',
    {},
  );
  for (const [paramName, pbValue] of Object.entries(params)) {
    const type = MetadataConsumer.parsePBType(
      pbValue.type as protos.google.bigtable.v2.Type,
    );
    const value = transfomer.valueToJsType(pbValue, type);
    parameters[paramName] = value;
    parameterTypes[paramName] = type;
  }
  return [parameters, parameterTypes] as [
    {[param: string]: SqlValue},
    {[param: string]: SqlTypes.Type},
  ];
}
