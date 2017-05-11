/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var is = require('is');

var promisify = require('@google-cloud/common').util.promisify;
var gax = require('google-gax');
var protoFiles = require('google-proto-files');


/**
 * Return a dictionary-like object with helpers to augment the Vision
 * GAPIC.
 *
 * @param {string} apiVersion - The API version (e.g. "v1")
 *
 * @return {Object} - An object with keys and functions which are placed
 *   onto the pure GAPIC.
 */
module.exports = apiVersion => {
  var methods = {}

  /**
   * Annotate a single image with the requested features.
   *
   * @param {Object=} request
   *   A representation of the request being sent to the Vision API.
   * @param {Object=} request.image
   *   A dictionary-like object representing the image. This should have a
   *   single key (`source`), which is another object containing `image_uri`
   *   or `content`.
   * @param {Array} request.features
   *   An array of the specific annotation features being requested.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this
   *   call, e.g, timeout, retries, paginations, etc. See [gax.CallOptions]
   *   {@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
   *   for the details.
   * @param {function(?Error, ?Object)=} callback
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing
   *   [AnnotateImagesResponse]{@link AnnotateImagesResponse}.
   * @return {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing
   *   [AnnotateImagesResponse]{@link AnnotateImagesResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing
   *   API call.
   *
   * @example
   * var vision = require('@google-cloud/vision').v1();
   * var request = {
   *   image: {source: {image_uri: 'gs://path/to/image.jpg'}},
   *   features: [],
   * };
   * client.annotateImage(request).then(response => {
   *   // doThingsWith(response);
   * }).catch(function(err) {
   *   console.error(err);
   * });
   */
  methods.annotateImage = promisify(function(request, options, callback) {
    // If a callback was provided and options were skipped, normalize
    // the argument names.
    if (is.undefined(callback) && is.function(options)) {
      callback = options;
      options = undefined;
    }

    // Call the GAPIC batch annotation function.
    return this.batchAnnotateImages([request], options, (err, r) => {
      // If there is an error, handle it.
      if (err) {
        return callback(err);
      }

      // We are guaranteed to only have one response element, since we
      // only sent one image.
      var response = r.responses[0];

      // Fire the callback if applicable.
      return callback(undefined, response);
    });
  });

  // Get a list of features available on the API, and iterate over them
  // and create single-feature methods for each.
  var features = gax.grpc().load([{
    root: protoFiles('..'),
    file: 'google/cloud/vision/v1/image_annotator.proto',
  }]).google.cloud.vision.v1.Feature.Type;
  for (let feature of Object.keys(features)) {
    // Determine the method name that should be used for the helper method,
    // based on the Feature.Type enum in the proto.
    //
    // The method name should be camelCased (e.g. "FACE_DETECTION" becomes
    // "faceDetection").
    let featureValue = features[feature];
    let methodName = feature.toLowerCase().replace(/_([\w])/, match => {
      return match[1].toUpperCase();
    });

    // Assign the single-feature method to the `methods` object.
    methods[methodName] = promisify(function(image, options) {
      return this.annotateImage({
        image: image,
        features: [{type: featureValue}],
      }, options);
    });
  }

  // Done; return the dictionary of methods.
  return methods;
}
