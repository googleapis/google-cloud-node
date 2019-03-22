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
 * Describes a BigQuery table.
 *
 * @property {number} tableSourceType
 *   The table source type.
 *
 *   The number should be among the values of [TableSourceType]{@link google.cloud.datacatalog.v1beta1.TableSourceType}
 *
 * @typedef BigQueryTableSpec
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.BigQueryTableSpec definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/table_spec.proto}
 */
const BigQueryTableSpec = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Table source type.
 *
 * @enum {number}
 * @memberof google.cloud.datacatalog.v1beta1
 */
const TableSourceType = {

  /**
   * Default unknown type.
   */
  TABLE_SOURCE_TYPE_UNSPECIFIED: 0,

  /**
   * Table view.
   */
  BIGQUERY_VIEW: 2,

  /**
   * BigQuery native table.
   */
  BIGQUERY_TABLE: 5
};