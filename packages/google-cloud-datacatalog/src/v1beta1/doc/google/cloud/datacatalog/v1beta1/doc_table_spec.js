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
 *   Output only. The table source type.
 *
 *   The number should be among the values of [TableSourceType]{@link google.cloud.datacatalog.v1beta1.TableSourceType}
 *
 * @property {Object} viewSpec
 *   Table view specification. This field should only be populated if
 *   `table_source_type` is `BIGQUERY_VIEW`.
 *
 *   This object should have the same structure as [ViewSpec]{@link google.cloud.datacatalog.v1beta1.ViewSpec}
 *
 * @property {Object} tableSpec
 *   Spec of a BigQuery table. This field should only be populated if
 *   `table_source_type` is `BIGQUERY_TABLE`.
 *
 *   This object should have the same structure as [TableSpec]{@link google.cloud.datacatalog.v1beta1.TableSpec}
 *
 * @typedef BigQueryTableSpec
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.BigQueryTableSpec definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/table_spec.proto}
 */
const BigQueryTableSpec = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Table view specification.
 *
 * @property {string} viewQuery
 *   Required. Output only. The query that defines the table view.
 *
 * @typedef ViewSpec
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.ViewSpec definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/table_spec.proto}
 */
const ViewSpec = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Normal BigQuery table spec.
 *
 * @property {string} groupedEntry
 *   Output only. If the table is a dated shard, i.e., with name pattern
 *   `[prefix]YYYYMMDD`, `grouped_entry` is the Data Catalog resource name of
 *   the date sharded grouped entry, for example,
 *   `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`.
 *   Otherwise, `grouped_entry` is empty.
 *
 * @typedef TableSpec
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.TableSpec definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/table_spec.proto}
 */
const TableSpec = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Spec for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`.
 * Context:
 * https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding
 *
 * @property {string} dataset
 *   Output only. The Data Catalog resource name of the dataset entry the
 *   current table belongs to, for example,
 *   `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`.
 *
 * @property {string} tablePrefix
 *   Output only. The table name prefix of the shards. The name of any given
 *   shard is `[table_prefix]YYYYMMDD`, for example, for shard
 *   `MyTable20180101`, the `table_prefix` is `MyTable`.
 *
 * @property {number} shardCount
 *   Output only. Total number of shards.
 *
 * @typedef BigQueryDateShardedSpec
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.BigQueryDateShardedSpec definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/table_spec.proto}
 */
const BigQueryDateShardedSpec = {
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