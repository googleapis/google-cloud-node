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
 * A representation of an image.
 * Only images up to 30MB in size are supported.
 *
 * @property {Buffer} imageBytes
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
const Image = {
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
 *   The format of the source text. Currently the only two allowed values are
 *   "text/html" and "text/plain". If left blank the format is automatically
 *   determined from the type of the uploaded content.
 *
 * @property {string} contentUri
 *   Output only. HTTP URI where you can download the content.
 *
 * @typedef TextSnippet
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TextSnippet definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_items.proto}
 */
const TextSnippet = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A structured text document e.g. a PDF.
 *
 * @property {Object} inputConfig
 *   An input config specifying the content of the document.
 *
 *   This object should have the same structure as [DocumentInputConfig]{@link google.cloud.automl.v1beta1.DocumentInputConfig}
 *
 * @typedef Document
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.Document definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_items.proto}
 */
const Document = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A representation of a row in a relational table.
 *
 * @property {string[]} columnSpecIds
 *   Input Only.
 *   The resource IDs of the column specs describing the columns of the row.
 *   If set must contain, but possibly in a different order, all input feature
 *
 *   column_spec_ids
 *   of the Model this row is being passed to.
 *   Note: The below `values` field must match order of this field, if this
 *   field is set.
 *
 * @property {Object[]} values
 *   Input Only.
 *   The values of the row cells, given in the same order as the
 *   column_spec_ids, or, if not set, then in the same order as input feature
 *
 *   column_specs
 *   of the Model this row is being passed to.
 *
 *   This object should have the same structure as [Value]{@link google.protobuf.Value}
 *
 * @typedef Row
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.Row definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_items.proto}
 */
const Row = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Example data used for training or prediction.
 *
 * @property {Object} image
 *   Example image.
 *
 *   This object should have the same structure as [Image]{@link google.cloud.automl.v1beta1.Image}
 *
 * @property {Object} textSnippet
 *   Example text.
 *
 *   This object should have the same structure as [TextSnippet]{@link google.cloud.automl.v1beta1.TextSnippet}
 *
 * @property {Object} document
 *   Example document.
 *
 *   This object should have the same structure as [Document]{@link google.cloud.automl.v1beta1.Document}
 *
 * @property {Object} row
 *   Example relational table row.
 *
 *   This object should have the same structure as [Row]{@link google.cloud.automl.v1beta1.Row}
 *
 * @typedef ExamplePayload
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ExamplePayload definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/data_items.proto}
 */
const ExamplePayload = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};