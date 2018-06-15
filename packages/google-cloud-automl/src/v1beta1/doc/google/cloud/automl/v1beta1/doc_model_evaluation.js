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
 * Evaluation results of a model.
 *
 * @property {Object} classificationEvaluationMetrics
 *   Evaluation metrics for models on classification problems models.
 *
 *   This object should have the same structure as [ClassificationEvaluationMetrics]{@link google.cloud.automl.v1beta1.ClassificationEvaluationMetrics}
 *
 * @property {Object} translationEvaluationMetrics
 *   Evaluation metrics for models on translation models.
 *
 *   This object should have the same structure as [TranslationEvaluationMetrics]{@link google.cloud.automl.v1beta1.TranslationEvaluationMetrics}
 *
 * @property {string} name
 *   Output only.
 *   Resource name of the model evaluation.
 *   Format:
 *
 *   `projects/{project_id}/locations/{location_id}/models/{model_id}/modelEvaluations/{model_evaluation_id}`
 *
 * @property {string} annotationSpecId
 *   Output only.
 *   Evaluated annotation spec id. Only non empty if the `ModelEvaluation` is
 *   for a single annotation spec.
 *
 * @property {Object} createTime
 *   Output only.
 *   Timestamp when this model evaluation was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} evaluatedExampleCount
 *   Output only. The number of examples used for model evaluation.
 *
 * @typedef ModelEvaluation
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ModelEvaluation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/model_evaluation.proto}
 */
var ModelEvaluation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};