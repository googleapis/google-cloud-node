// Copyright 2023 Google LLC
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

import * as protos from '../../protos/protos';
type StorageTableField =
  protos.google.cloud.bigquery.storage.v1.ITableFieldSchema;
type StorageTableFieldType =
  protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type;

const StorageTableField =
  protos.google.cloud.bigquery.storage.v1.TableFieldSchema;
const StorageTableFieldType =
  protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type;

export const fieldTypeMap: Record<string, StorageTableFieldType> = {
  STRING: protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.STRING,
  BYTES: protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.BYTES,
  INTEGER: protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.INT64,
  INT64: protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.INT64,
  FLOAT: protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.DOUBLE,
  FLOAT64: protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.DOUBLE,
  NUMERIC:
    protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.NUMERIC,
  BIGNUMERIC:
    protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.BIGNUMERIC,
  BOOLEAN: protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.BOOL,
  BOOL: protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.BOOL,
  TIMESTAMP:
    protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.TIMESTAMP,
  DATE: protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.DATE,
  TIME: protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.TIME,
  DATETIME:
    protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.DATETIME,
  INTERVAL:
    protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.INTERVAL,
  RANGE: protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.RANGE,
  RECORD: protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.STRUCT,
  STRUCT: protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.STRUCT,
  JSON: protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.JSON,
  GEOGRAPHY:
    protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Type.GEOGRAPHY,
};

export function normalizeFieldType(
  field: StorageTableField,
): StorageTableField['type'] {
  if (field.type) {
    const ftype = fieldTypeMap[field.type];
    if (!ftype) {
      return field.type;
    }
    return ftype;
  }
  return field.type;
}

export const modeMap: Record<string, StorageTableField['mode']> = {
  NULLABLE:
    protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Mode.NULLABLE,
  REPEATED:
    protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Mode.REPEATED,
  REQUIRED:
    protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Mode.REQUIRED,
  '': protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Mode
    .MODE_UNSPECIFIED,
};
