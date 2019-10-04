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
 * A representation of a text snippet.
 *
 * @property {string} content
 *   Required. The content of the text snippet as a string. Up to 250000
 *   characters long.
 *
 * @property {string} mimeType
 *   Optional. The format of content. Currently the only two allowed
 *   values are "text/html" and "text/plain". If left blank, the format is
 *   automatically determined from the type of the uploaded content.
 *
 * @property {string} contentUri
 *   Output only. HTTP URI where you can download the content.
 *
 * @typedef TextSnippet
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.TextSnippet definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/data_items.proto}
 */
const TextSnippet = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Example data used for training or prediction.
 *
 * @property {Object} textSnippet
 *   Example text.
 *
 *   This object should have the same structure as [TextSnippet]{@link google.cloud.automl.v1.TextSnippet}
 *
 * @typedef ExamplePayload
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.ExamplePayload definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/data_items.proto}
 */
const ExamplePayload = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};