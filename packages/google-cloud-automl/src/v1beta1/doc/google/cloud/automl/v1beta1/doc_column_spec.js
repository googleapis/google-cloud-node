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
 * A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were
 * given on import .
 * Used by:
 *   *   Tables
 *
 * @property {string} name
 *   Output only. The resource name of the column specs.
 *   Form:
 *
 *   `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}/columnSpecs/{column_spec_id}`
 *
 * @property {Object} dataType
 *   The data type of elements stored in the column.
 *
 *   This object should have the same structure as [DataType]{@link google.cloud.automl.v1beta1.DataType}
 *
 * @property {string} displayName
 *   Output only. The name of the column to show in the interface. The name can
 *   be up to 100 characters long and can consist only of ASCII Latin letters
 *   A-Z and a-z, ASCII digits 0-9, underscores(_), and forward slashes(/), and
 *   must start with a letter or a digit.
 *
 * @property {Object} dataStats
 *   Output only. Stats of the series of values in the column.
 *   This field may be stale, see the ancestor's
 *   Dataset.tables_dataset_metadata.stats_update_time field
 *   for the timestamp at which these stats were last updated.
 *
 *   This object should have the same structure as [DataStats]{@link google.cloud.automl.v1beta1.DataStats}
 *
 * @property {Object[]} topCorrelatedColumns
 *   Output only. Top 10 most correlated with this column columns of the table,
 *   ordered by
 *   cramers_v metric.
 *   This field may be stale, see the ancestor's
 *   Dataset.tables_dataset_metadata.stats_update_time field
 *   for the timestamp at which these stats were last updated.
 *
 *   This object should have the same structure as [CorrelatedColumn]{@link google.cloud.automl.v1beta1.CorrelatedColumn}
 *
 * @property {string} etag
 *   Used to perform consistent read-modify-write updates. If not set, a blind
 *   "overwrite" update happens.
 *
 * @typedef ColumnSpec
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ColumnSpec definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/column_spec.proto}
 */
const ColumnSpec = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Identifies the table's column, and its correlation with the column this
   * ColumnSpec describes.
   *
   * @property {string} columnSpecId
   *   The column_spec_id of the correlated column, which belongs to the same
   *   table as the in-context column.
   *
   * @property {Object} correlationStats
   *   Correlation between this and the in-context column.
   *
   *   This object should have the same structure as [CorrelationStats]{@link google.cloud.automl.v1beta1.CorrelationStats}
   *
   * @typedef CorrelatedColumn
   * @memberof google.cloud.automl.v1beta1
   * @see [google.cloud.automl.v1beta1.ColumnSpec.CorrelatedColumn definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/column_spec.proto}
   */
  CorrelatedColumn: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};