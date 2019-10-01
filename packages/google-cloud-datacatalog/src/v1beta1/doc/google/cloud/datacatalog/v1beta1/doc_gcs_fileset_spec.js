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
 * Describes a Cloud Storage fileset entry.
 *
 * @property {string[]} filePatterns
 *   Required. Patterns to identify a set of files in Google Cloud Storage.
 *
 *   Examples of valid file_patterns:
 *
 *    * `gs://bucket_name/*`: matches all files in `bucket_name`
 *    * `gs://bucket_name/file*`: matches files prefixed by `file` in
 *                                `bucket_name`
 *    * `gs://bucket_name/a/* /b`: matches all files in `bucket_name` that match
 *                                `a/* /b` pattern, such as `a/c/b`, `a/d/b`
 *    * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt`
 *
 * @property {Object[]} sampleGcsFileSpecs
 *   Output only. Sample files contained in this fileset, not all files contained in this
 *   fileset are represented here.
 *
 *   This object should have the same structure as [GcsFileSpec]{@link google.cloud.datacatalog.v1beta1.GcsFileSpec}
 *
 * @typedef GcsFilesetSpec
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.GcsFilesetSpec definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/gcs_fileset_spec.proto}
 */
const GcsFilesetSpec = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Specifications of a single file in GCS.
 *
 * @property {string} filePath
 *   Required. The full file path. Example: `gs://bucket_name/a/b.txt`.
 *
 * @property {Object} gcsTimestamps
 *   Output only. Timestamps about the GCS file.
 *
 *   This object should have the same structure as [SystemTimestamps]{@link google.cloud.datacatalog.v1beta1.SystemTimestamps}
 *
 * @property {number} sizeBytes
 *   Output only. The size of the file, in bytes.
 *
 * @typedef GcsFileSpec
 * @memberof google.cloud.datacatalog.v1beta1
 
 */
const GcsFileSpec = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};