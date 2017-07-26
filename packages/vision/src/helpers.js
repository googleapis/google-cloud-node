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

/*!
 * @module vision/helpers
 */

'use strict';

var fs = require('fs');
var is = require('is');

var promisify = require('@google-cloud/common').util.promisify;
var gax = require('google-gax');
var protoFiles = require('google-proto-files');


/*!
 * Find a given image and fire a callback with the appropriate image structure.
 *
 * @param {Object} image - An object representing what is known about the
 *   image.
 * @param {Function} callback - The callback to run.
 */
var coerceImage = (image, callback) => {
  // If this is a buffer, read it and send the object
  // that the Vision API expects.
  if (Buffer.isBuffer(image)) {
    callback(null, {
      content: image.toString('base64')
    });
    return;
  }

  // File exists on disk.
  if (image.source && image.source.filename) {
    fs.readFile(image.source.filename, {encoding: 'base64'}, (err, blob) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, {content: blob.toString('base64')});
    });
    return;
  }

  // No other options were relevant; return the image with no modification.
  callback(null, image);
  return;
};


/*!
 *
 * Return a method that calls annotateImage asking for a single feature.
 *
 * @param {Number} featureValue - The feature being requested. This is taken
 *   from the Feature.Type enum, and will be an integer.
 *
 * @return {Function} - The function that, when called, will call annotateImage
 *   asking for the single feature annotation.
 */
var _createSingleFeatureMethod = featureValue => {
  return function(image, options) {
    return this.annotateImage({
      image: image,
      features: [{type: featureValue}],
    }, options);
  };
};


/*!
 * Return a dictionary-like object with helpers to augment the Vision
 * GAPIC.
 *
 * @param {string} apiVersion - The API version (e.g. "v1")
 *
 * @return {Object} - An object with keys and functions which are placed
 *   onto the pure GAPIC.
 */
module.exports = apiVersion => {
  var methods = {};

  /**
   * Annotate a single image with the requested features.
   *
   * @param {Object=} request
   *   A representation of the request being sent to the Vision API.
   * @param {Object=} request.image
   *   A dictionary-like object representing the image. This should have a
   *   single key (`source`, `content`).
   *
   *   If the key is `source`, the value should be another object containing
   *   `imageUri` or `filename` as a key and a string as a value.
   *
   *   If the key is `content`, the value should be a Buffer.
   * @param {Array} request.features
   *   An array of the specific annotation features being requested.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this
   *   call, e.g, timeout, retries, paginations, etc. See
   *   [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
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
   * var vision = require('@google-cloud/vision')();
   * var request = {
   *   image: {source: {imageUri: 'gs://path/to/image.jpg'}},
   *   features: [],
   * };
   * vision.annotateImage(request).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
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

    // If there is no image, throw an exception.
    if (is.undefined(request.image)) {
      throw new Error('Attempted to call `annotateImage` with no image.');
    }

    // If we got a filename for the image, open the file and transform
    // it to content.
    return coerceImage(request.image, (err, image) => {
      if (err) {
        return callback(err);
      }
      request.image = image;

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
  });

  // Get a list of features available on the API. Although we could iterate over
  // them and create single-feature methods for each dynamically, for
  // documentation purpose, we manually list all the single-feature methods
  // below.
  const features = gax.grpc().load([{
    root: protoFiles('..'),
    file: `google/cloud/vision/${apiVersion}/image_annotator.proto`,
  }]).google.cloud.vision[apiVersion].Feature.Type;

  /**
   * Annotate a single image with face detection.
   *
   * @param {Object=} image
   *   A dictionary-like object representing the image. This should have a
   *   single key (`source`, `content`).
   *
   *   If the key is `source`, the value should be another object containing
   *   `imageUri` or `filename` as a key and a string as a value.
   *
   *   If the key is `content`, the value should be a Buffer.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this
   *   call, e.g, timeout, retries, paginations, etc. See
   *   [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
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
   * var vision = require('@google-cloud/vision')();
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.faceDetection(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.faceDetection =
    promisify(_createSingleFeatureMethod(features.FACE_DETECTION));

  /**
   * Annotate a single image with landmark detection.
   *
   * @param {Object=} image
   *   A dictionary-like object representing the image. This should have a
   *   single key (`source`, `content`).
   *
   *   If the key is `source`, the value should be another object containing
   *   `imagUri` or `filename` as a key and a string as a value.
   *
   *   If the key is `content`, the value should be a Buffer.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this
   *   call, e.g, timeout, retries, paginations, etc. See
   *   [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
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
   * var vision = require('@google-cloud/vision')();
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.landmarkDetection(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.landmarkDetection =
    promisify(_createSingleFeatureMethod(features.LANDMARK_DETECTION));

  /**
   * Annotate a single image with logo detection.
   *
   * @param {Object=} image
   *   A dictionary-like object representing the image. This should have a
   *   single key (`source`, `content`).
   *
   *   If the key is `source`, the value should be another object containing
   *   `imagUri` or `filename` as a key and a string as a value.
   *
   *   If the key is `content`, the value should be a Buffer.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this
   *   call, e.g, timeout, retries, paginations, etc. See
   *   [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
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
   * var vision = require('@google-cloud/vision')();
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.logoDetection(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.logoDetection =
    promisify(_createSingleFeatureMethod(features.LOGO_DETECTION));

  /**
   * Annotate a single image with label detection.
   *
   * @param {Object=} image
   *   A dictionary-like object representing the image. This should have a
   *   single key (`source`, `content`).
   *
   *   If the key is `source`, the value should be another object containing
   *   `imagUri` or `filename` as a key and a string as a value.
   *
   *   If the key is `content`, the value should be a Buffer.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this
   *   call, e.g, timeout, retries, paginations, etc. See
   *   [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
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
   * var vision = require('@google-cloud/vision')();
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.labelDetection(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.labelDetection =
    promisify(_createSingleFeatureMethod(features.LABEL_DETECTION));

  /**
   * Annotate a single image with text detection.
   *
   * @param {Object=} image
   *   A dictionary-like object representing the image. This should have a
   *   single key (`source`, `content`).
   *
   *   If the key is `source`, the value should be another object containing
   *   `imagUri` or `filename` as a key and a string as a value.
   *
   *   If the key is `content`, the value should be a Buffer.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this
   *   call, e.g, timeout, retries, paginations, etc. See
   *   [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
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
   * var vision = require('@google-cloud/vision')();
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.textDetection(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.textDetection =
    promisify(_createSingleFeatureMethod(features.TEXT_DETECTION));

  /**
   * Annotate a single image with document text detection.
   *
   * @param {Object=} image
   *   A dictionary-like object representing the image. This should have a
   *   single key (`source`, `content`).
   *
   *   If the key is `source`, the value should be another object containing
   *   `imagUri` or `filename` as a key and a string as a value.
   *
   *   If the key is `content`, the value should be a Buffer.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this
   *   call, e.g, timeout, retries, paginations, etc. See
   *   [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
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
   * var vision = require('@google-cloud/vision')();
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.documentTextDetection(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.documentTextDetection =
    promisify(_createSingleFeatureMethod(features.DOCUMENT_TEXT_DETECTION));

  /**
   * Annotate a single image with safe search detection.
   *
   * @param {Object=} image
   *   A dictionary-like object representing the image. This should have a
   *   single key (`source`, `content`).
   *
   *   If the key is `source`, the value should be another object containing
   *   `imagUri` or `filename` as a key and a string as a value.
   *
   *   If the key is `content`, the value should be a Buffer.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this
   *   call, e.g, timeout, retries, paginations, etc. See
   *   [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
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
   * var vision = require('@google-cloud/vision')();
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.safeSearchDetection(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.safeSearchDetection =
    promisify(_createSingleFeatureMethod(features.SAFE_SEARCH_DETECTION));

  /**
   * Annotate a single image with image properties.
   *
   * @param {Object=} image
   *   A dictionary-like object representing the image. This should have a
   *   single key (`source`, `content`).
   *
   *   If the key is `source`, the value should be another object containing
   *   `imagUri` or `filename` as a key and a string as a value.
   *
   *   If the key is `content`, the value should be a Buffer.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this
   *   call, e.g, timeout, retries, paginations, etc. See
   *   [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
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
   * var vision = require('@google-cloud/vision')();
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.imageProperties(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.imageProperties =
    promisify(_createSingleFeatureMethod(features.IMAGE_PROPERTIES));

  /**
   * Annotate a single image with crop hints.
   *
   * @param {Object=} image
   *   A dictionary-like object representing the image. This should have a
   *   single key (`source`, `content`).
   *
   *   If the key is `source`, the value should be another object containing
   *   `imagUri` or `filename` as a key and a string as a value.
   *
   *   If the key is `content`, the value should be a Buffer.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this
   *   call, e.g, timeout, retries, paginations, etc. See
   *   [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
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
   * var vision = require('@google-cloud/vision')();
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.cropHints(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.cropHints =
    promisify(_createSingleFeatureMethod(features.CROP_HINTS));

  /**
   * Annotate a single image with web detection.
   *
   * @param {Object=} image
   *   A dictionary-like object representing the image. This should have a
   *   single key (`source`, `content`).
   *
   *   If the key is `source`, the value should be another object containing
   *   `imagUri` or `filename` as a key and a string as a value.
   *
   *   If the key is `content`, the value should be a Buffer.
   * @param {Object=} options
   *   Optional parameters. You can override the default settings for this
   *   call, e.g, timeout, retries, paginations, etc. See
   *   [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
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
   * var vision = require('@google-cloud/vision')();
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.webDetection(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.webDetection =
    promisify(_createSingleFeatureMethod(features.WEB_DETECTION));

  return methods;
};
