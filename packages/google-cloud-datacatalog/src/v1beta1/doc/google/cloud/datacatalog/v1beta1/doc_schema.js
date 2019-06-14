// Copyright 2019 Google LLC
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

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema).
 *
 * @property {Object[]} columns
 *   Required. Schema of columns. A maximum of 10,000 columns and sub-columns
 *   can be specified.
 *
 *   This object should have the same structure as [ColumnSchema]{@link google.cloud.datacatalog.v1beta1.ColumnSchema}
 *
 * @typedef Schema
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.Schema definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/schema.proto}
 */
const Schema = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Representation of a column within a schema. Columns could be nested inside
 * other columns.
 *
 * @property {string} column
 *   Required. Name of the column.
 *
 * @property {string} type
 *   Required. Type of the column.
 *
 * @property {string} description
 *   Optional. Description of the column. Default value is an empty string.
 *
 * @property {string} mode
 *   Optional. A column's mode indicates whether the values in this column are
 *   required, nullable, etc. Only 'NULLABLE', 'REQUIRED' and 'REPEATED' are
 *   supported. Default mode is 'NULLABLE'.
 *
 * @property {Object[]} subcolumns
 *   Optional. Schema of sub-columns. A column can have zero or more
 *   sub-columns.
 *
 *   This object should have the same structure as [ColumnSchema]{@link google.cloud.datacatalog.v1beta1.ColumnSchema}
 *
 * @typedef ColumnSchema
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.ColumnSchema definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/schema.proto}
 */
const ColumnSchema = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};