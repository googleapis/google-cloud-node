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
 * Evaluation results of a model.
 *
 * @property {Object} classificationEvaluationMetrics
 *   Model evaluation metrics for image, text, video and tables
 *   classification.
 *   Tables problem is considered a classification when the target column
 *   is CATEGORY DataType.
 *
 *   This object should have the same structure as [ClassificationEvaluationMetrics]{@link google.cloud.automl.v1beta1.ClassificationEvaluationMetrics}
 *
 * @property {Object} regressionEvaluationMetrics
 *   Model evaluation metrics for Tables regression.
 *   Tables problem is considered a regression when the target column
 *   has FLOAT64 DataType.
 *
 *   This object should have the same structure as [RegressionEvaluationMetrics]{@link google.cloud.automl.v1beta1.RegressionEvaluationMetrics}
 *
 * @property {Object} translationEvaluationMetrics
 *   Model evaluation metrics for translation.
 *
 *   This object should have the same structure as [TranslationEvaluationMetrics]{@link google.cloud.automl.v1beta1.TranslationEvaluationMetrics}
 *
 * @property {Object} imageObjectDetectionEvaluationMetrics
 *   Model evaluation metrics for image object detection.
 *
 *   This object should have the same structure as [ImageObjectDetectionEvaluationMetrics]{@link google.cloud.automl.v1beta1.ImageObjectDetectionEvaluationMetrics}
 *
 * @property {Object} videoObjectTrackingEvaluationMetrics
 *   Model evaluation metrics for video object tracking.
 *
 *   This object should have the same structure as [VideoObjectTrackingEvaluationMetrics]{@link google.cloud.automl.v1beta1.VideoObjectTrackingEvaluationMetrics}
 *
 * @property {Object} textSentimentEvaluationMetrics
 *   Evaluation metrics for text sentiment models.
 *
 *   This object should have the same structure as [TextSentimentEvaluationMetrics]{@link google.cloud.automl.v1beta1.TextSentimentEvaluationMetrics}
 *
 * @property {Object} textExtractionEvaluationMetrics
 *   Evaluation metrics for text extraction models.
 *
 *   This object should have the same structure as [TextExtractionEvaluationMetrics]{@link google.cloud.automl.v1beta1.TextExtractionEvaluationMetrics}
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
 *   The ID of the annotation spec that the model evaluation applies to. The
 *   The ID is empty for the overall model evaluation.
 *   For Tables annotation specs in the dataset do not exist and this ID is
 *   always not set, but for CLASSIFICATION
 *
 *   prediction_type-s
 *   the
 *   display_name
 *   field is used.
 *
 * @property {string} displayName
 *   Output only. The value of
 *   display_name at
 *   the moment when the model was trained. Because this field returns a value
 *   at model training time, for different models trained from the same dataset,
 *   the values may differ, since display names could had been changed between
 *   the two model's trainings.
 *   For Tables CLASSIFICATION
 *
 *   prediction_type-s
 *   distinct values of the target column at the moment of the model evaluation
 *   are populated here.
 *   The display_name is empty for the overall model evaluation.
 *
 * @property {Object} createTime
 *   Output only.
 *   Timestamp when this model evaluation was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} evaluatedExampleCount
 *   Output only.
 *   The number of examples used for model evaluation, i.e. for
 *   which ground truth from time of model creation is compared against the
 *   predicted annotations created by the model.
 *   For overall ModelEvaluation (i.e. with annotation_spec_id not set) this is
 *   the total number of all examples used for evaluation.
 *   Otherwise, this is the count of examples that according to the ground
 *   truth were annotated by the
 *
 *   annotation_spec_id.
 *
 * @typedef ModelEvaluation
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.ModelEvaluation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/model_evaluation.proto}
 */
const ModelEvaluation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};