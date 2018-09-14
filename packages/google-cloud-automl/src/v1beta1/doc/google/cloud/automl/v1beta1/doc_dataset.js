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
 * A workspace for solving a single, particular machine learning (ML) problem.
 * A workspace contains examples that may be annotated.
 *
 * @property {Object} translationDatasetMetadata
 *   Metadata for a dataset used for translation.
 *
 *   This object should have the same structure as [TranslationDatasetMetadata]{@link google.cloud.automl.v1beta1.TranslationDatasetMetadata}
 *
 * @property {Object} imageClassificationDatasetMetadata
 *   Metadata for a dataset used for image classification.
 *
 *   This object should have the same structure as [ImageClassificationDatasetMetadata]{@link google.cloud.automl.v1beta1.ImageClassificationDatasetMetadata}
 *
 * @property {Object} textClassificationDatasetMetadata
 *   Metadata for a dataset used for text classification.
 *
 *   This object should have the same structure as [TextClassificationDatasetMetadata]{@link google.cloud.automl.v1beta1.TextClassificationDatasetMetadata}
 *
 * @property {string} name
 *   Output only. The resource name of the dataset.
 *   Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`
 *
 * @property {string} displayName
 *   Required. The name of the dataset to show in the interface. The name can be
 *   up to 32 characters
 *   long and can consist only of ASCII Latin letters A-Z and a-z, underscores
 *   (_), and ASCII digits 0-9.
 *
 * @property {number} exampleCount
 *   Output only. The number of examples in the dataset.
 *
 * @property {Object} createTime
 *   Output only. Timestamp when this dataset was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef Dataset
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.Dataset definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/dataset.proto}
 */
const Dataset = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};