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
 * Dataset metadata that is specific to translation.
 *
 * @property {string} sourceLanguageCode
 *   Required. The BCP-47 language code of the source language.
 *
 * @property {string} targetLanguageCode
 *   Required. The BCP-47 language code of the target language.
 *
 * @typedef TranslationDatasetMetadata
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TranslationDatasetMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/translation.proto}
 */
const TranslationDatasetMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Evaluation metrics for the dataset.
 *
 * @property {number} bleuScore
 *   Output only. BLEU score.
 *
 * @property {number} baseBleuScore
 *   Output only. BLEU score for base model.
 *
 * @typedef TranslationEvaluationMetrics
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TranslationEvaluationMetrics definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/translation.proto}
 */
const TranslationEvaluationMetrics = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Model metadata that is specific to translation.
 *
 * @property {string} baseModel
 *   The resource name of the model to use as a baseline to train the custom
 *   model. If unset, we use the default base model provided by Google
 *   Translate. Format:
 *   `projects/{project_id}/locations/{location_id}/models/{model_id}`
 *
 * @property {string} sourceLanguageCode
 *   Output only. Inferred from the dataset.
 *   The source languge (The BCP-47 language code) that is used for training.
 *
 * @property {string} targetLanguageCode
 *   Output only. The target languge (The BCP-47 language code) that is used for
 *   training.
 *
 * @typedef TranslationModelMetadata
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TranslationModelMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/translation.proto}
 */
const TranslationModelMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Annotation details specific to translation.
 *
 * @property {Object} translatedContent
 *   Output only . The translated content.
 *
 *   This object should have the same structure as [TextSnippet]{@link google.cloud.automl.v1beta1.TextSnippet}
 *
 * @typedef TranslationAnnotation
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TranslationAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/translation.proto}
 */
const TranslationAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};