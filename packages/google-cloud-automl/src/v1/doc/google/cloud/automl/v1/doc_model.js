// Copyright 2020 Google LLC
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
 * API proto representing a trained machine learning model.
 *
 * @property {Object} translationModelMetadata
 *   Metadata for translation models.
 *
 *   This object should have the same structure as [TranslationModelMetadata]{@link google.cloud.automl.v1.TranslationModelMetadata}
 *
 * @property {Object} imageClassificationModelMetadata
 *   Metadata for image classification models.
 *
 *   This object should have the same structure as [ImageClassificationModelMetadata]{@link google.cloud.automl.v1.ImageClassificationModelMetadata}
 *
 * @property {Object} textClassificationModelMetadata
 *   Metadata for text classification models.
 *
 *   This object should have the same structure as [TextClassificationModelMetadata]{@link google.cloud.automl.v1.TextClassificationModelMetadata}
 *
 * @property {Object} imageObjectDetectionModelMetadata
 *   Metadata for image object detection models.
 *
 *   This object should have the same structure as [ImageObjectDetectionModelMetadata]{@link google.cloud.automl.v1.ImageObjectDetectionModelMetadata}
 *
 * @property {Object} textExtractionModelMetadata
 *   Metadata for text extraction models.
 *
 *   This object should have the same structure as [TextExtractionModelMetadata]{@link google.cloud.automl.v1.TextExtractionModelMetadata}
 *
 * @property {Object} textSentimentModelMetadata
 *   Metadata for text sentiment models.
 *
 *   This object should have the same structure as [TextSentimentModelMetadata]{@link google.cloud.automl.v1.TextSentimentModelMetadata}
 *
 * @property {string} name
 *   Output only. Resource name of the model.
 *   Format: `projects/{project_id}/locations/{location_id}/models/{model_id}`
 *
 * @property {string} displayName
 *   Required. The name of the model to show in the interface. The name can be
 *   up to 32 characters long and can consist only of ASCII Latin letters A-Z
 *   and a-z, underscores
 *   (_), and ASCII digits 0-9. It must start with a letter.
 *
 * @property {string} datasetId
 *   Required. The resource ID of the dataset used to create the model. The dataset must
 *   come from the same ancestor project and location.
 *
 * @property {Object} createTime
 *   Output only. Timestamp when the model training finished  and can be used for prediction.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   Output only. Timestamp when this model was last updated.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} deploymentState
 *   Output only. Deployment state of the model. A model can only serve
 *   prediction requests after it gets deployed.
 *
 *   The number should be among the values of [DeploymentState]{@link google.cloud.automl.v1.DeploymentState}
 *
 * @property {string} etag
 *   Used to perform a consistent read-modify-write updates. If not set, a blind
 *   "overwrite" update happens.
 *
 * @property {Object.<string, string>} labels
 *   Optional. The labels with user-defined metadata to organize your model.
 *
 *   Label keys and values can be no longer than 64 characters
 *   (Unicode codepoints), can only contain lowercase letters, numeric
 *   characters, underscores and dashes. International characters are allowed.
 *   Label values are optional. Label keys must start with a letter.
 *
 *   See https://goo.gl/xmQnxf for more information on and examples of labels.
 *
 * @typedef Model
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.Model definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/model.proto}
 */
const Model = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Deployment state of the model.
   *
   * @enum {number}
   * @memberof google.cloud.automl.v1
   */
  DeploymentState: {

    /**
     * Should not be used, an un-set enum has this value by default.
     */
    DEPLOYMENT_STATE_UNSPECIFIED: 0,

    /**
     * Model is deployed.
     */
    DEPLOYED: 1,

    /**
     * Model is not deployed.
     */
    UNDEPLOYED: 2
  }
};