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
 * Relevant information for the image from the Internet.
 *
 * @property {Object[]} webEntities
 *   Deduced entities from similar images on the Internet.
 *
 *   This object should have the same structure as [WebEntity]{@link google.cloud.vision.v1p3beta1.WebEntity}
 *
 * @property {Object[]} fullMatchingImages
 *   Fully matching images from the Internet.
 *   Can include resized copies of the query image.
 *
 *   This object should have the same structure as [WebImage]{@link google.cloud.vision.v1p3beta1.WebImage}
 *
 * @property {Object[]} partialMatchingImages
 *   Partial matching images from the Internet.
 *   Those images are similar enough to share some key-point features. For
 *   example an original image will likely have partial matching for its crops.
 *
 *   This object should have the same structure as [WebImage]{@link google.cloud.vision.v1p3beta1.WebImage}
 *
 * @property {Object[]} pagesWithMatchingImages
 *   Web pages containing the matching images from the Internet.
 *
 *   This object should have the same structure as [WebPage]{@link google.cloud.vision.v1p3beta1.WebPage}
 *
 * @property {Object[]} visuallySimilarImages
 *   The visually similar image results.
 *
 *   This object should have the same structure as [WebImage]{@link google.cloud.vision.v1p3beta1.WebImage}
 *
 * @property {Object[]} bestGuessLabels
 *   Best guess text labels for the request image.
 *
 *   This object should have the same structure as [WebLabel]{@link google.cloud.vision.v1p3beta1.WebLabel}
 *
 * @typedef WebDetection
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.WebDetection definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/web_detection.proto}
 */
const WebDetection = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Entity deduced from similar images on the Internet.
   *
   * @property {string} entityId
   *   Opaque entity ID.
   *
   * @property {number} score
   *   Overall relevancy score for the entity.
   *   Not normalized and not comparable across different image queries.
   *
   * @property {string} description
   *   Canonical description of the entity, in English.
   *
   * @typedef WebEntity
   * @memberof google.cloud.vision.v1p3beta1
   * @see [google.cloud.vision.v1p3beta1.WebDetection.WebEntity definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/web_detection.proto}
   */
  WebEntity: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Metadata for online images.
   *
   * @property {string} url
   *   The result image URL.
   *
   * @property {number} score
   *   (Deprecated) Overall relevancy score for the image.
   *
   * @typedef WebImage
   * @memberof google.cloud.vision.v1p3beta1
   * @see [google.cloud.vision.v1p3beta1.WebDetection.WebImage definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/web_detection.proto}
   */
  WebImage: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Metadata for web pages.
   *
   * @property {string} url
   *   The result web page URL.
   *
   * @property {number} score
   *   (Deprecated) Overall relevancy score for the web page.
   *
   * @property {string} pageTitle
   *   Title for the web page, may contain HTML markups.
   *
   * @property {Object[]} fullMatchingImages
   *   Fully matching images on the page.
   *   Can include resized copies of the query image.
   *
   *   This object should have the same structure as [WebImage]{@link google.cloud.vision.v1p3beta1.WebImage}
   *
   * @property {Object[]} partialMatchingImages
   *   Partial matching images on the page.
   *   Those images are similar enough to share some key-point features. For
   *   example an original image will likely have partial matching for its
   *   crops.
   *
   *   This object should have the same structure as [WebImage]{@link google.cloud.vision.v1p3beta1.WebImage}
   *
   * @typedef WebPage
   * @memberof google.cloud.vision.v1p3beta1
   * @see [google.cloud.vision.v1p3beta1.WebDetection.WebPage definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/web_detection.proto}
   */
  WebPage: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Label to provide extra metadata for the web detection.
   *
   * @property {string} label
   *   Label for extra metadata.
   *
   * @property {string} languageCode
   *   The BCP-47 language code for `label`, such as "en-US" or "sr-Latn".
   *   For more information, see
   *   http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
   *
   * @typedef WebLabel
   * @memberof google.cloud.vision.v1p3beta1
   * @see [google.cloud.vision.v1p3beta1.WebDetection.WebLabel definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/web_detection.proto}
   */
  WebLabel: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};