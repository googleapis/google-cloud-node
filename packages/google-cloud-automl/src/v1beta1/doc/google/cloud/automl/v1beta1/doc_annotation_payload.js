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
 * Contains annotation information that is relevant to AutoML.
 *
 * @property {Object} translation
 *   Annotation details for translation.
 *
 *   This object should have the same structure as [TranslationAnnotation]{@link google.cloud.automl.v1beta1.TranslationAnnotation}
 *
 * @property {Object} classification
 *   Annotation details for content or image classification.
 *
 *   This object should have the same structure as [ClassificationAnnotation]{@link google.cloud.automl.v1beta1.ClassificationAnnotation}
 *
 * @property {Object} imageObjectDetection
 *   Annotation details for image object detection.
 *
 *   This object should have the same structure as [ImageObjectDetectionAnnotation]{@link google.cloud.automl.v1beta1.ImageObjectDetectionAnnotation}
 *
 * @property {Object} videoClassification
 *   Annotation details for video classification.
 *   Returned for Video Classification predictions.
 *
 *   This object should have the same structure as [VideoClassificationAnnotation]{@link google.cloud.automl.v1beta1.VideoClassificationAnnotation}
 *
 * @property {Object} videoObjectTracking
 *   Annotation details for video object tracking.
 *
 *   This object should have the same structure as [VideoObjectTrackingAnnotation]{@link google.cloud.automl.v1beta1.VideoObjectTrackingAnnotation}
 *
 * @property {Object} textExtraction
 *   Annotation details for text extraction.
 *
 *   This object should have the same structure as [TextExtractionAnnotation]{@link google.cloud.automl.v1beta1.TextExtractionAnnotation}
 *
 * @property {Object} textSentiment
 *   Annotation details for text sentiment.
 *
 *   This object should have the same structure as [TextSentimentAnnotation]{@link google.cloud.automl.v1beta1.TextSentimentAnnotation}
 *
 * @property {Object} tables
 *   Annotation details for Tables.
 *
 *   This object should have the same structure as [TablesAnnotation]{@link google.cloud.automl.v1beta1.TablesAnnotation}
 *
 * @property {string} annotationSpecId
 *   Output only . The resource ID of the annotation spec that
 *   this annotation pertains to. The annotation spec comes from either an
 *   ancestor dataset, or the dataset that was used to train the model in use.
 *
 * @property {string} displayName
 *   Output only. The value of
 *   display_name
 *   when the model was trained. Because this field returns a value at model
 *   training time, for different models trained using the same dataset, the
 *   returned value could be different as model owner could update the
 *   `display_name` between any two model training.
 *
 * @typedef AnnotationPayload
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.AnnotationPayload definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/annotation_payload.proto}
 */
const AnnotationPayload = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};