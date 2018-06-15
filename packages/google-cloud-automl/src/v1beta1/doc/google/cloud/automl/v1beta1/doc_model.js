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
 * API proto representing a trained machine learning model.
 *
 * @property {Object} imageClassificationModelMetadata
 *   Metadata for image classification models.
 *
 *   This object should have the same structure as [ImageClassificationModelMetadata]{@link google.cloud.automl.v1beta1.ImageClassificationModelMetadata}
 *
 * @property {Object} textClassificationModelMetadata
 *   Metadata for text classification models.
 *
 *   This object should have the same structure as [TextClassificationModelMetadata]{@link google.cloud.automl.v1beta1.TextClassificationModelMetadata}
 *
 * @property {Object} translationModelMetadata
 *   Metadata for translation models.
 *
 *   This object should have the same structure as [TranslationModelMetadata]{@link google.cloud.automl.v1beta1.TranslationModelMetadata}
 *
 * @property {string} name
 *   Output only.
 *   Resource name of the model.
 *   Format: `projects/{project_id}/locations/{location_id}/models/{model_id}`
 *
 * @property {string} displayName
 *   Required. The name of the model to show in the interface. The name can be
 *   up to 32 characters
 *   long and can consist only of ASCII Latin letters A-Z and a-z, underscores
 *   (_), and ASCII digits 0-9.
 *
 * @property {string} datasetId
 *   Required.
 *   The resource ID of the dataset used to create the model. The dataset must
 *   come from the
 *   same ancestor project and location.
 *
 * @property {Object} createTime
 *   Output only.
 *   Timestamp when this model was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   Output only.
 *   Timestamp when this model was last updated.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} deploymentState
 *   Output only. Deployment state of the model.
 *
 *   The number should be among the values of [DeploymentState]{@link google.cloud.automl.v1beta1.DeploymentState}
 *
 * @typedef Model
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.Model definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/model.proto}
 */
var Model = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Deployment state of the model.
   *
   * @enum {number}
   * @memberof google.cloud.automl.v1beta1
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