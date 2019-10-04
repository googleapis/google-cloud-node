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
 * Input configuration for ImportData Action.
 *
 * The format of input depends on dataset_metadata the Dataset into which
 * the import is happening has. As input source the
 * gcs_source
 * is expected, unless specified otherwise. Additionally any input .CSV file
 * by itself must be 100MB or smaller, unless specified otherwise.
 * If an "example" file (that is, image, video etc.) with identical content
 * (even if it had different GCS_FILE_PATH) is mentioned multiple times, then
 * its label, bounding boxes etc. are appended. The same file should be always
 * provided with the same ML_USE and GCS_FILE_PATH, if it is not, then
 * these values are nondeterministically selected from the given ones.
 *
 *  Errors:
 *  If any of the provided CSV files can't be parsed or if more than certain
 *  percent of CSV rows cannot be processed then the operation fails and
 *  nothing is imported. Regardless of overall success or failure the per-row
 *  failures, up to a certain count cap, is listed in
 *  Operation.metadata.partial_failures.
 *
 * @property {Object} gcsSource
 *   The Google Cloud Storage location for the input content.
 *   In ImportData, the gcs_source points to a csv with structure described in
 *   the comment.
 *
 *   This object should have the same structure as [GcsSource]{@link google.cloud.automl.v1.GcsSource}
 *
 * @property {Object.<string, string>} params
 *   Additional domain-specific parameters describing the semantic of the
 *   imported data, any string must be up to 25000
 *   characters long.
 *
 * @typedef InputConfig
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.InputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/io.proto}
 */
const InputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * *  For Translation:
 *         CSV file `translation.csv`, with each line in format:
 *         ML_USE,GCS_FILE_PATH
 *         GCS_FILE_PATH leads to a .TSV file which describes examples that have
 *         given ML_USE, using the following row format per line:
 *         TEXT_SNIPPET (in source language) \t TEXT_SNIPPET (in target
 *         language)
 *
 * `export_data_<automl-dataset-display-name>_<timestamp-of-export-call>`
 *           where <automl-dataset-display-name> will be made
 *           BigQuery-dataset-name compatible (e.g. most special characters will
 *           become underscores), and timestamp will be in
 *           YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In that
 *           dataset a new table called `primary_table` will be created, and
 *           filled with precisely the same data as this obtained on import.
 *
 * @property {Object} gcsDestination
 *   The Google Cloud Storage location where the output is to be written to.
 *   For Image Object Detection, Text Extraction, Video Classification and
 *   Tables, in the given directory a new directory will be created with name:
 *   export_data-<dataset-display-name>-<timestamp-of-export-call> where
 *   timestamp is in YYYY-MM-DDThh:mm:ss.sssZ ISO-8601 format. All export
 *   output will be written into that directory.
 *
 *   This object should have the same structure as [GcsDestination]{@link google.cloud.automl.v1.GcsDestination}
 *
 * @typedef OutputConfig
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.OutputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/io.proto}
 */
const OutputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The Google Cloud Storage location for the input content.
 *
 * @property {string[]} inputUris
 *   Required. Google Cloud Storage URIs to input files, up to 2000 characters
 *   long. Accepted forms:
 *   * Full object path, e.g. gs://bucket/directory/object.csv
 *
 * @typedef GcsSource
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.GcsSource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/io.proto}
 */
const GcsSource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The Google Cloud Storage location where the output is to be written to.
 *
 * @property {string} outputUriPrefix
 *   Required. Google Cloud Storage URI to output directory, up to 2000
 *   characters long.
 *   Accepted forms:
 *   * Prefix path: gs://bucket/directory
 *   The requesting user must have write permission to the bucket.
 *   The directory is created if it doesn't exist.
 *
 * @typedef GcsDestination
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.GcsDestination definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/io.proto}
 */
const GcsDestination = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};