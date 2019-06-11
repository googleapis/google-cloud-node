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
 * Dataset metadata for classification.
 *
 * @property {number} classificationType
 *   Required.
 *   Type of the classification problem.
 *
 *   The number should be among the values of [ClassificationType]{@link google.cloud.automl.v1beta1.ClassificationType}
 *
 * @typedef TextClassificationDatasetMetadata
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TextClassificationDatasetMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/text.proto}
 */
const TextClassificationDatasetMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Model metadata that is specific to text classification.
 * @typedef TextClassificationModelMetadata
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TextClassificationModelMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/text.proto}
 */
const TextClassificationModelMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Dataset metadata that is specific to text extraction
 * @typedef TextExtractionDatasetMetadata
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TextExtractionDatasetMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/text.proto}
 */
const TextExtractionDatasetMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Model metadata that is specific to text extraction.
 * @typedef TextExtractionModelMetadata
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TextExtractionModelMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/text.proto}
 */
const TextExtractionModelMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Dataset metadata for text sentiment.
 *
 * @property {number} sentimentMax
 *   Required.
 *   A sentiment is expressed as an integer ordinal, where higher value
 *   means a more positive sentiment. The range of sentiments that will be used
 *   is between 0 and sentiment_max (inclusive on both ends), and all the values
 *   in the range must be represented in the dataset before a model can be
 *   created.
 *   sentiment_max value must be between 1 and 10 (inclusive).
 *
 * @typedef TextSentimentDatasetMetadata
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TextSentimentDatasetMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/text.proto}
 */
const TextSentimentDatasetMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Model metadata that is specific to text sentiment.
 * @typedef TextSentimentModelMetadata
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TextSentimentModelMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/text.proto}
 */
const TextSentimentModelMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};