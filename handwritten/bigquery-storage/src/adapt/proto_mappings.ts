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

type TableFieldSchema =
  protos.google.cloud.bigquery.storage.v1.ITableFieldSchema;
type FieldDescriptorProto = protos.google.protobuf.IFieldDescriptorProto;
type FieldDescriptorProtoType =
  protos.google.protobuf.FieldDescriptorProto['type'];
type TableFieldSchemaType =
  protos.google.cloud.bigquery.storage.v1.TableFieldSchema['type'];
type TableFieldSchemaMode =
  protos.google.cloud.bigquery.storage.v1.TableFieldSchema['mode'];
type FieldDescriptorProtoLabel =
  protos.google.protobuf.FieldDescriptorProto.Label;

const TableFieldSchema =
  protos.google.cloud.bigquery.storage.v1.TableFieldSchema;
const FieldDescriptorProto = protos.google.protobuf.FieldDescriptorProto;

// Reference https://cloud.google.com/bigquery/docs/write-api#data_type_conversions
export const bqTypeToFieldTypeMap: Record<
  TableFieldSchemaType,
  FieldDescriptorProtoType | null
> = {
  [TableFieldSchema.Type.BIGNUMERIC]: FieldDescriptorProto.Type.TYPE_STRING,
  BIGNUMERIC: FieldDescriptorProto.Type.TYPE_STRING,
  [TableFieldSchema.Type.BOOL]: FieldDescriptorProto.Type.TYPE_BOOL,
  BOOL: FieldDescriptorProto.Type.TYPE_BOOL,
  [TableFieldSchema.Type.BYTES]: FieldDescriptorProto.Type.TYPE_BYTES,
  BYTES: FieldDescriptorProto.Type.TYPE_BYTES,
  [TableFieldSchema.Type.DATE]: FieldDescriptorProto.Type.TYPE_INT32,
  DATE: FieldDescriptorProto.Type.TYPE_INT32,
  [TableFieldSchema.Type.DATETIME]: FieldDescriptorProto.Type.TYPE_STRING,
  DATETIME: FieldDescriptorProto.Type.TYPE_STRING,
  [TableFieldSchema.Type.DOUBLE]: FieldDescriptorProto.Type.TYPE_DOUBLE,
  DOUBLE: FieldDescriptorProto.Type.TYPE_DOUBLE,
  [TableFieldSchema.Type.GEOGRAPHY]: FieldDescriptorProto.Type.TYPE_STRING,
  GEOGRAPHY: FieldDescriptorProto.Type.TYPE_STRING,
  [TableFieldSchema.Type.INT64]: FieldDescriptorProto.Type.TYPE_INT64,
  INT64: FieldDescriptorProto.Type.TYPE_INT64,
  [TableFieldSchema.Type.NUMERIC]: FieldDescriptorProto.Type.TYPE_STRING,
  NUMERIC: FieldDescriptorProto.Type.TYPE_STRING,
  [TableFieldSchema.Type.STRING]: FieldDescriptorProto.Type.TYPE_STRING,
  STRING: FieldDescriptorProto.Type.TYPE_STRING,
  [TableFieldSchema.Type.STRUCT]: FieldDescriptorProto.Type.TYPE_MESSAGE,
  STRUCT: FieldDescriptorProto.Type.TYPE_MESSAGE,
  [TableFieldSchema.Type.TIME]: FieldDescriptorProto.Type.TYPE_STRING,
  TIME: FieldDescriptorProto.Type.TYPE_STRING,
  [TableFieldSchema.Type.TIMESTAMP]: FieldDescriptorProto.Type.TYPE_INT64,
  TIMESTAMP: FieldDescriptorProto.Type.TYPE_INT64,
  [TableFieldSchema.Type.JSON]: FieldDescriptorProto.Type.TYPE_STRING,
  JSON: protos.google.protobuf.FieldDescriptorProto.Type.TYPE_STRING,
  [TableFieldSchema.Type.TYPE_UNSPECIFIED]: null,
  TYPE_UNSPECIFIED: null,
  [TableFieldSchema.Type.INTERVAL]: null,
  INTERVAL: null,
  [TableFieldSchema.Type.RANGE]: FieldDescriptorProto.Type.TYPE_MESSAGE,
  RANGE: FieldDescriptorProto.Type.TYPE_MESSAGE,
};

export const bqModeToFieldLabelMapProto2: Record<
  TableFieldSchemaMode,
  FieldDescriptorProtoLabel | null
> = {
  [TableFieldSchema.Mode.NULLABLE]: FieldDescriptorProto.Label.LABEL_OPTIONAL,
  NULLABLE: FieldDescriptorProto.Label.LABEL_OPTIONAL,
  [TableFieldSchema.Mode.REPEATED]: FieldDescriptorProto.Label.LABEL_REPEATED,
  REPEATED: FieldDescriptorProto.Label.LABEL_REPEATED,
  [TableFieldSchema.Mode.REQUIRED]: FieldDescriptorProto.Label.LABEL_REQUIRED,
  REQUIRED: FieldDescriptorProto.Label.LABEL_REQUIRED,
  [TableFieldSchema.Mode.MODE_UNSPECIFIED]: null,
  MODE_UNSPECIFIED: null,
};

export const bqModeToFieldLabelMapProto3: Record<
  TableFieldSchemaMode,
  FieldDescriptorProtoLabel | null
> = {
  [TableFieldSchema.Mode.NULLABLE]: FieldDescriptorProto.Label.LABEL_OPTIONAL,
  NULLABLE: FieldDescriptorProto.Label.LABEL_OPTIONAL,
  [protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Mode.REPEATED]:
    FieldDescriptorProto.Label.LABEL_REPEATED,
  REPEATED: FieldDescriptorProto.Label.LABEL_REPEATED,
  [protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Mode.REQUIRED]:
    FieldDescriptorProto.Label.LABEL_OPTIONAL,
  REQUIRED: FieldDescriptorProto.Label.LABEL_REQUIRED,
  [protos.google.cloud.bigquery.storage.v1.TableFieldSchema.Mode
    .MODE_UNSPECIFIED]: null,
  MODE_UNSPECIFIED: null,
};

export function convertModeToLabel(
  mode: TableFieldSchema['mode'],
  defaultValueExpression: TableFieldSchema['defaultValueExpression'],
  useProto3: Boolean,
): FieldDescriptorProtoLabel | null {
  if (!mode) {
    return null;
  }
  const label = useProto3
    ? bqModeToFieldLabelMapProto3[mode]
    : bqModeToFieldLabelMapProto2[mode];
  if (
    label === FieldDescriptorProto.Label.LABEL_REQUIRED &&
    defaultValueExpression &&
    !useProto3
  ) {
    // override LABEL_REQUIRED when there is a default value expression
    // so the backend can fill the data for the user
    return FieldDescriptorProto.Label.LABEL_OPTIONAL;
  }
  return label;
}
