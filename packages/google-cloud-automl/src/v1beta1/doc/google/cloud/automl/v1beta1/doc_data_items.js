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
 * A representation of an image.
 *
 * @property {string} imageBytes
 *   Image content represented as a stream of bytes.
 *   Note: As with all `bytes` fields, protobuffers use a pure binary
 *   representation, whereas JSON representations use base64.
 *
 * @property {Object} inputConfig
 *   An input config specifying the content of the image.
 *
 *   This object should have the same structure as [InputConfig]{@link google.cloud.automl.v1beta1.InputConfig}
 *
 * @property {string} thumbnailUri
 *   Output only. HTTP URI to the thumbnail image.
 *
 * @typedef Image
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.Image definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_items.proto}
 */
var Image = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A representation of a text snippet.
 *
 * @property {string} content
 *   Required. The content of the text snippet as a string. Up to 250000
 *   characters long.
 *
 * @property {string} mimeType
 *   The format of the source text. For example, "text/html" or
 *   "text/plain". If left blank the format is automatically determined from
 *   the type of the uploaded content. The default is "text/html". Up to 25000
 *   characters long.
 *
 * @property {string} contentUri
 *   Output only. HTTP URI where you can download the content.
 *
 * @typedef TextSnippet
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TextSnippet definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_items.proto}
 */
var TextSnippet = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Example data used for training or prediction.
 *
 * @property {Object} image
 *   An example image.
 *
 *   This object should have the same structure as [Image]{@link google.cloud.automl.v1beta1.Image}
 *
 * @property {Object} textSnippet
 *   Example text.
 *
 *   This object should have the same structure as [TextSnippet]{@link google.cloud.automl.v1beta1.TextSnippet}
 *
 * @typedef ExamplePayload
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ExamplePayload definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_items.proto}
 */
var ExamplePayload = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};