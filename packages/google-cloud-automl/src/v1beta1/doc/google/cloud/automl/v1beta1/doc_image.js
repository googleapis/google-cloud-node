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
 * Dataset metadata that is specific to image classification.
 *
 * @property {number} classificationType
 *   Required. Type of the classification problem.
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
 * Dataset metadata specific to image object detection.
 * @typedef ImageObjectDetectionDatasetMetadata
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ImageObjectDetectionDatasetMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/image.proto}
 */
const ImageObjectDetectionDatasetMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Model metadata for image classification.
 *
 * @property {string} baseModelId
 *   Optional. The ID of the `base` model. If it is specified, the new model
 *   will be created based on the `base` model. Otherwise, the new model will be
 *   created from scratch. The `base` model must be in the same
 *   `project` and `location` as the new model to create, and have the same
 *   `model_type`.
 *
 * @property {number} trainBudget
 *   Required. The train budget of creating this model, expressed in hours. The
 *   actual `train_cost` will be equal or less than this value.
 *
 * @property {number} trainCost
 *   Output only. The actual train cost of creating this model, expressed in
 *   hours. If this model is created from a `base` model, the train cost used
 *   to create the `base` model are not included.
 *
 * @property {string} stopReason
 *   Output only. The reason that this create model operation stopped,
 *   e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`.
 *
 * @property {string} modelType
 *   Optional. Type of the model. The available values are:
 *   *   `cloud` - Model to be used via prediction calls to AutoML API.
 *                 This is the default value.
 *   *   `mobile-low-latency-1` - A model that, in addition to providing
 *                 prediction via AutoML API, can also be exported (see
 *                 AutoMl.ExportModel) and used on a mobile or edge device
 *                 with TensorFlow afterwards. Expected to have low latency, but
 *                 may have lower prediction quality than other models.
 *   *   `mobile-versatile-1` - A model that, in addition to providing
 *                 prediction via AutoML API, can also be exported (see
 *                 AutoMl.ExportModel) and used on a mobile or edge device
 *                 with TensorFlow afterwards.
 *   *   `mobile-high-accuracy-1` - A model that, in addition to providing
 *                 prediction via AutoML API, can also be exported (see
 *                 AutoMl.ExportModel) and used on a mobile or edge device
 *                 with TensorFlow afterwards.  Expected to have a higher
 *                 latency, but should also have a higher prediction quality
 *                 than other models.
 *   *   `mobile-core-ml-low-latency-1` - A model that, in addition to providing
 *                 prediction via AutoML API, can also be exported (see
 *                 AutoMl.ExportModel) and used on a mobile device with Core
 *                 ML afterwards. Expected to have low latency, but may have
 *                 lower prediction quality than other models.
 *   *   `mobile-core-ml-versatile-1` - A model that, in addition to providing
 *                 prediction via AutoML API, can also be exported (see
 *                 AutoMl.ExportModel) and used on a mobile device with Core
 *                 ML afterwards.
 *   *   `mobile-core-ml-high-accuracy-1` - A model that, in addition to
 *                 providing prediction via AutoML API, can also be exported
 *                 (see AutoMl.ExportModel) and used on a mobile device with
 *                 Core ML afterwards.  Expected to have a higher latency, but
 *                 should also have a higher prediction quality than other
 *                 models.
 *
 * @typedef ImageClassificationModelMetadata
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ImageClassificationModelMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/image.proto}
 */
const ImageClassificationModelMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Model metadata specific to image object detection.
 *
 * @property {string} modelType
 *   Optional. Type of the model. The available values are:
 *   *   `cloud-high-accuracy-1` - (default) A model to be used via prediction
 *                 calls to AutoML API. Expected to have a higher latency, but
 *                 should also have a higher prediction quality than other
 *                 models.
 *   *   `cloud-low-latency-1` -  A model to be used via prediction
 *                 calls to AutoML API. Expected to have low latency, but may
 *                 have lower prediction quality than other models.
 *
 * @property {number} nodeCount
 *   Output only. The number of nodes this model is deployed on. A node is an
 *   abstraction of a machine resource, which can handle online prediction QPS
 *   as given in the qps_per_node field.
 *
 * @property {number} nodeQps
 *   Output only. An approximate number of online prediction QPS that can
 *   be supported by this model per each node on which it is deployed.
 *
 * @property {string} stopReason
 *   Output only. The reason that this create model operation stopped,
 *   e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`.
 *
 * @property {number} trainBudgetMilliNodeHours
 *   The train budget of creating this model, expressed in milli node
 *   hours i.e. 1,000 value in this field means 1 node hour. The actual
 *   `train_cost` will be equal or less than this value. If further model
 *   training ceases to provide any improvements, it will stop without using
 *   full budget and the stop_reason will be `MODEL_CONVERGED`.
 *   Note, node_hour  = actual_hour * number_of_nodes_invovled. The train budget
 *   must be between 20,000 and 2,000,000 milli node hours, inclusive. The
 *   default value is 216, 000 which represents one day in wall time.
 *
 * @property {number} trainCostMilliNodeHours
 *   Output only. The actual train cost of creating this model, expressed in
 *   milli node hours, i.e. 1,000 value in this field means 1 node hour.
 *   Guaranteed to not exceed the train budget.
 *
 * @typedef ImageObjectDetectionModelMetadata
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ImageObjectDetectionModelMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/image.proto}
 */
const ImageObjectDetectionModelMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Model deployment metadata specific to Image Object Detection.
 *
 * @property {number} nodeCount
 *   Input only. The number of nodes to deploy the model on. A node is an
 *   abstraction of a machine resource, which can handle online prediction QPS
 *   as given in the model's
 *
 *   qps_per_node.
 *   Must be between 1 and 100, inclusive on both ends.
 *
 * @typedef ImageObjectDetectionModelDeploymentMetadata
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ImageObjectDetectionModelDeploymentMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/image.proto}
 */
const ImageObjectDetectionModelDeploymentMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};