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
import {fieldTypeMap, modeMap} from './schema_mappings';

type ITableSchema = {
  /**
   * Describes the fields in a table.
   */
  fields?: Array<ITableFieldSchema>;
};
type ITableFieldSchema = {
  /**
   * [Optional] The field description. The maximum length is 1,024 characters.
   */
  description?: string;
  /**
   * [Optional] Describes the nested schema fields if the type property is set to RECORD.
   */
  fields?: Array<ITableFieldSchema>;
  /**
   * [Optional] The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE.
   */
  mode?: string;
  /**
   * [Required] The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 300 characters.
   */
  name?: string;
  /**
   * Optional. A SQL expression to specify the [default value] (https://cloud.google.com/bigquery/docs/default-values) for this field.
   */
  defaultValueExpression?: string;
  /**
   * [Required] The field data type. Possible values include STRING, BYTES, INTEGER, INT64 (same as INTEGER), FLOAT, FLOAT64 (same as FLOAT), NUMERIC, BIGNUMERIC, BOOLEAN, BOOL (same as BOOLEAN), TIMESTAMP, DATE, TIME, DATETIME, INTERVAL, RECORD (where RECORD indicates that the field contains a nested schema) or STRUCT (same as RECORD).
   */
  type?: string;

  /**
   * [Optional] The precision for TIMESTAMP fields. 6 for microsecond, 12 for picosecond.
   */
  timestampPrecision?: number | string;

  /**
   * Represents the type of a field element.
   */
  rangeElementType?: {
    /**
     * Required. The type of a field element. For more information, see TableFieldSchema.type.
     */
    type?: string;
  };
};
type StorageTableSchema = protos.google.cloud.bigquery.storage.v1.ITableSchema;
type StorageTableField =
  protos.google.cloud.bigquery.storage.v1.ITableFieldSchema;

const StorageTableSchema = protos.google.cloud.bigquery.storage.v1.TableSchema;
const StorageTableField =
  protos.google.cloud.bigquery.storage.v1.TableFieldSchema;

/**
 * Converts a bigquery Schema into the protobuf-based TableSchema used
 * by the BigQuery Storage WriteClient.
 * @param schema - a BigQuery TableSchema
 * @return StorageTableSchema
 */
export function convertBigQuerySchemaToStorageTableSchema(
  schema: ITableSchema,
): StorageTableSchema {
  const out: StorageTableSchema = {};
  for (const field of schema.fields ?? []) {
    const converted = bqFieldToStorageField(field);
    if (!converted) {
      throw Error(`failed to convert field ${field.name}`);
    }
    if (!out.fields) {
      out.fields = [];
    }
    out.fields.push(converted);
  }
  return out;
}

function bqFieldToStorageField(field: ITableFieldSchema): StorageTableField {
  const out: StorageTableField = {
    name: field.name,
  };

  if (field.defaultValueExpression) {
    out.defaultValueExpression = field.defaultValueExpression;
  }

  if (field.description) {
    out.description = field.description;
  }

  if (field.timestampPrecision) {
    out.timestampPrecision = {
      value: field.timestampPrecision,
    };
  }

  if (!field.type) {
    throw Error(
      `could not convert field (${field.name}) due to unknown type value: ${field.type}`,
    );
  }

  const ftype = fieldTypeMap[field.type];
  if (!ftype) {
    throw Error(
      `could not convert field (${field.name}) due to unknown type value: ${field.type}`,
    );
  }
  out.type = ftype;

  out.mode = StorageTableField.Mode.NULLABLE;
  if (field.mode) {
    out.mode = modeMap[field.mode];
  }

  for (const subField of field.fields ?? []) {
    const converted = bqFieldToStorageField(subField);
    if (!out.fields) {
      out.fields = [];
    }
    out.fields.push(converted);
  }

  if (field.rangeElementType && field.rangeElementType.type) {
    const rtype = fieldTypeMap[field.rangeElementType.type];
    if (!rtype) {
      throw Error(
        `could not convert range field (${field.name}) due to unknown range element type: ${field.rangeElementType.type}`,
      );
    }
    out.rangeElementType = {
      type: rtype,
    };
  }

  return out;
}
