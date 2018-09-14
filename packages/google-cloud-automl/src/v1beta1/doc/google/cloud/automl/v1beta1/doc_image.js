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
 * Dataset metadata that is specific to image classification.
 *
 * @property {number} classificationType
 *   Required.
 *   Type of the classification problem.
 *
 *   The number should be among the values of [ClassificationType]{@link google.cloud.automl.v1beta1.ClassificationType}
 *
 * @typedef ImageClassificationDatasetMetadata
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ImageClassificationDatasetMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/image.proto}
 */
const ImageClassificationDatasetMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Model metadata for image classification.
 *
 * @property {string} baseModelId
 *   Optional. The ID of the `base` model. If it is specified, the new model
 *   will be created based on the `base` model. Otherwise, the new model will be
 *   created from scratch. The `base` model is expected to be in the same
 *   `project` and `location` as the new model to create.
 *
 * @property {number} trainBudget
 *   Required. The train budget of creating this model. The actual
 *   `train_cost` will be equal or less than this value.
 *
 * @property {number} trainCost
 *   Output only. The actual train cost of creating this model. If this
 *   model is created from a `base` model, the train cost used to create the
 *   `base` model are not included.
 *
 * @property {string} stopReason
 *   Output only. The reason that this create model operation stopped,
 *   e.g. BUDGET_REACHED, CONVERGED.
 *
 * @typedef ImageClassificationModelMetadata
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ImageClassificationModelMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/image.proto}
 */
const ImageClassificationModelMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};