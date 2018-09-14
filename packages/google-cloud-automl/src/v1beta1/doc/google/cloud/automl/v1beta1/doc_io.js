// Copyright 2018 Google LLC
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
 * Input configuration.
 *
 * @property {Object} gcsSource
 *   The GCS location for the input content.
 *
 *   This object should have the same structure as [GcsSource]{@link google.cloud.automl.v1beta1.GcsSource}
 *
 * @typedef InputConfig
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.InputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/io.proto}
 */
const InputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Output configuration.
 *
 * @property {Object} gcsDestination
 *   The GCS location where the output must be written to.
 *
 *   This object should have the same structure as [GcsDestination]{@link google.cloud.automl.v1beta1.GcsDestination}
 *
 * @typedef OutputConfig
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.OutputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/io.proto}
 */
const OutputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The GCS location for the input content.
 *
 * @property {string[]} inputUris
 *   Required. Google Cloud Storage URIs to input files, up to 2000 characters
 *   long. Accepted forms:
 *   * Full object path: gs://bucket/directory/object.csv
 *
 * @typedef GcsSource
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.GcsSource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/io.proto}
 */
const GcsSource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The GCS location where the output must be written to
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
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.GcsDestination definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/io.proto}
 */
const GcsDestination = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};