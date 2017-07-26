/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Note: this file is purely for documentation. Any contents are not expected
 * to be loaded as the JS file.
 */

/**
 * Relevant information for the image from the Internet.
 *
 * @property {Object[]} webEntities
 *   Deduced entities from similar images on the Internet.
 *
 *   This object should have the same structure as [WebEntity]{@link WebEntity}
 *
 * @property {Object[]} fullMatchingImages
 *   Fully matching images from the Internet.
 *   They're definite neardups and most often a copy of the query image with
 *   merely a size change.
 *
 *   This object should have the same structure as [WebImage]{@link WebImage}
 *
 * @property {Object[]} partialMatchingImages
 *   Partial matching images from the Internet.
 *   Those images are similar enough to share some key-point features. For
 *   example an original image will likely have partial matching for its crops.
 *
 *   This object should have the same structure as [WebImage]{@link WebImage}
 *
 * @property {Object[]} pagesWithMatchingImages
 *   Web pages containing the matching images from the Internet.
 *
 *   This object should have the same structure as [WebPage]{@link WebPage}
 *
 * @class
 * @see [google.cloud.vision.v1.WebDetection definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/web_detection.proto}
 */
var WebDetection = {
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
   * @class
   * @see [google.cloud.vision.v1.WebDetection.WebEntity definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/web_detection.proto}
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
   *   Overall relevancy score for the image.
   *   Not normalized and not comparable across different image queries.
   *
   * @class
   * @see [google.cloud.vision.v1.WebDetection.WebImage definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/web_detection.proto}
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
   *   Overall relevancy score for the web page.
   *   Not normalized and not comparable across different image queries.
   *
   * @class
   * @see [google.cloud.vision.v1.WebDetection.WebPage definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1/web_detection.proto}
   */
  WebPage: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};