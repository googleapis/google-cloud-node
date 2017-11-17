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

'use strict';

const fs = require('fs');
const is = require('is');
const path = require('path');
const promisify = require('@google-cloud/common').util.promisify;

const gax = require('google-gax');

/*!
 * Find a given image and fire a callback with the appropriate image structure.
 *
 * @param {object} image An object representing what is known about the
 *   image.
 * @param {function} callback The callback to run.
 */
var coerceImage = (image, callback) => {
  // If this is a buffer, read it and send the object
  // that the Vision API expects.
  if (Buffer.isBuffer(image)) {
    callback(null, {
      content: image.toString('base64'),
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
 * @param {number} featureValue The feature being requested. This is taken
 *   from the Feature.Type enum, and will be an integer.
 *
 * @returns {function} The function that, when called, will call annotateImage
 *   asking for the single feature annotation.
 */
var _createSingleFeatureMethod = featureValue => {
  return function(annotateImageRequest, callOptions) {
    annotateImageRequest.features = annotateImageRequest.features || [
      {
        type: featureValue,
      },
    ];
    // If the user submitted explicit features that do not line up with
    // the precise method called, throw an exception.
    for (let feature of annotateImageRequest.features) {
      if (feature.type !== featureValue) {
        throw new Error(
          'Setting explicit features is not supported on this method. ' +
            'Use the #annotateImage method instead.'
        );
      }
    }
    // Call the underlying #annotateImage method.
    return this.annotateImage(annotateImageRequest, callOptions);
  };
};

/*!
 * Return a dictionary-like object with helpers to augment the Vision
 * GAPIC.
 *
 * @param {string} apiVersion The API version (e.g. "v1")
 *
 * @returns {object} An object with keys and functions which are placed
 *   onto the pure GAPIC.
 */
module.exports = apiVersion => {
  var methods = {};

  /**
   * Annotate a single image with the requested features.
   *
   * @see v1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1.AnnotateImageRequest
   *
   * @method v1.ImageAnnotatorClient#annotateImage
   * @param {object} request A representation of the request being sent to the
   *     Vision API. This is an {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   * @param {object} request.image A dictionary-like object representing the
   *     image. This should have a single key (`source`, `content`).
   *
   *     If the key is `source`, the value should be another object containing
   *     `imageUri` or `filename` as a key and a string as a value.
   *
   *     If the key is `content`, the value should be a Buffer.
   * @param {object[]} request.features An array of the specific annotation
   *     features being requested. This should take a form such as:
   *
   *         [{type: vision.types.Feature.Type.FACE_DETECTION},
   *         {type: vision.types.Feature.Type.WEB_DETECTION}]
   *
   * @param {object} [callOptions] Optional parameters. You can override the
   *     default settings for this call, e.g, timeout, retries, paginations,
   *     etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
   *     for the details.
   * @param {function(?Error, ?object)} [callback] The function which will be
   *     called with the result of the API call.
   *
   *     The second parameter to the callback is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   * @returns {Promise} The promise which resolves to an array. The first
   *     element of the array is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   *     The promise has a method named "cancel" which cancels the ongoing API
   *     call.
   *
   * @example
   * const vision = require('@google-cloud/vision');
   * const client = new vision.ImageAnnotatorClient();
   *
   * const request = {
   *   image: {source: {imageUri: 'gs://path/to/image.jpg'}},
   *   features: [],
   * };
   * client
   *   .annotateImage(request)
   *   .then(response => {
   *     // doThingsWith(response);
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  methods.annotateImage = promisify(function(request, callOptions, callback) {
    // If a callback was provided and options were skipped, normalize
    // the argument names.
    if (is.undefined(callback) && is.function(callOptions)) {
      callback = callOptions;
      callOptions = undefined;
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
      let requests = {requests: [request]};
      return this.batchAnnotateImages(requests, callOptions, (err, r) => {
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
  const features = gax
    .grpc()
    .loadProto(
      path.join(__dirname, '..', 'protos'),
      `google/cloud/vision/${apiVersion}/image_annotator.proto`
    ).google.cloud.vision[apiVersion].Feature.Type.values;

  /**
   * Annotate a single image with face detection.
   *
   * @see v1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1.AnnotateImageRequest
   *
   * @method v1.ImageAnnotatorClient#faceDetection
   * @param {object} request A representation of the request being sent to the
   *     Vision API. This is an {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   * @param {object} request.image A dictionary-like object representing the
   *     image. This should have a single key (`source`, `content`).
   *
   *     If the key is `source`, the value should be another object containing
   *     `imageUri` or `filename` as a key and a string as a value.
   *
   *     If the key is `content`, the value should be a Buffer.
   * @param {object} [callOptions] Optional parameters. You can override the
   *     default settings for this call, e.g, timeout, retries, paginations,
   *     etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
   *     for the details.
   * @param {function(?Error, ?object)} [callback] The function which will be
   *     called with the result of the API call.
   *
   *     The second parameter to the callback is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   * @returns {Promise} The promise which resolves to an array. The first
   *     element of the array is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   *     The promise has a method named "cancel" which cancels the ongoing API
   *     call.
   *
   * @example
   * const vision = require('@google-cloud/vision');
   * const client = new vision.ImageAnnotatorClient();
   *
   * const request = {
   *   image: {
   *     source: {imageUri: 'gs://path/to/image.jpg'}
   *   }
   * };
   *
   * client
   *   .faceDetection(request)
   *   .then(response => {
   *     // doThingsWith(response);
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  methods.faceDetection = promisify(
    _createSingleFeatureMethod(features.FACE_DETECTION)
  );

  /**
   * Annotate a single image with landmark detection.
   *
   * @see v1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1.AnnotateImageRequest
   *
   * @method v1.ImageAnnotatorClient#landmarkDetection
   * @param {object} request A representation of the request being sent to the
   *     Vision API. This is an {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   * @param {object} request.image A dictionary-like object representing the
   *     image. This should have a single key (`source`, `content`).
   *
   *     If the key is `source`, the value should be another object containing
   *     `imageUri` or `filename` as a key and a string as a value.
   *
   *     If the key is `content`, the value should be a Buffer.
   * @param {object} [callOptions] Optional parameters. You can override the
   *     default settings for this call, e.g, timeout, retries, paginations,
   *     etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
   *     for the details.
   * @param {function(?Error, ?object)} [callback] The function which will be
   *     called with the result of the API call.
   *
   *     The second parameter to the callback is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   * @returns {Promise} The promise which resolves to an array. The first
   *     element of the array is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   *     The promise has a method named "cancel" which cancels the ongoing API
   *     call.
   *
   * @example
   * const vision = require('@google-cloud/vision');
   * const client = new vision.ImageAnnotatorClient();
   *
   * const request = {
   *   image: {
   *     source: {imageUri: 'gs://path/to/image.jpg'}
   *   }
   * };
   *
   * client
   *   .landmarkDetection(request)
   *   .then(response => {
   *     // doThingsWith(response);
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  methods.landmarkDetection = promisify(
    _createSingleFeatureMethod(features.LANDMARK_DETECTION)
  );

  /**
   * Annotate a single image with logo detection.
   *
   * @see v1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1.AnnotateImageRequest
   *
   * @method v1.ImageAnnotatorClient#logoDetection
   * @param {object} request A representation of the request being sent to the
   *     Vision API. This is an {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   * @param {object} request.image A dictionary-like object representing the
   *     image. This should have a single key (`source`, `content`).
   *
   *     If the key is `source`, the value should be another object containing
   *     `imageUri` or `filename` as a key and a string as a value.
   *
   *     If the key is `content`, the value should be a Buffer.
   * @param {object} [callOptions] Optional parameters. You can override the
   *     default settings for this call, e.g, timeout, retries, paginations,
   *     etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
   *     for the details.
   * @param {function(?Error, ?object)} [callback] The function which will be
   *     called with the result of the API call.
   *
   *     The second parameter to the callback is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   * @returns {Promise} The promise which resolves to an array. The first
   *     element of the array is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   *     The promise has a method named "cancel" which cancels the ongoing API
   *     call.
   *
   * @example
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.logoDetection(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.logoDetection = promisify(
    _createSingleFeatureMethod(features.LOGO_DETECTION)
  );

  /**
   * Annotate a single image with label detection.
   *
   * @see v1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1.AnnotateImageRequest
   *
   * @method v1.ImageAnnotatorClient#labelDetection
   * @param {object} request A representation of the request being sent to the
   *     Vision API. This is an {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   * @param {object} request.image A dictionary-like object representing the
   *     image. This should have a single key (`source`, `content`).
   *
   *     If the key is `source`, the value should be another object containing
   *     `imageUri` or `filename` as a key and a string as a value.
   *
   *     If the key is `content`, the value should be a Buffer.
   * @param {object} [callOptions] Optional parameters. You can override the
   *     default settings for this call, e.g, timeout, retries, paginations,
   *     etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
   *     for the details.
   * @param {function(?Error, ?object)} [callback] The function which will be
   *     called with the result of the API call.
   *
   *     The second parameter to the callback is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   * @returns {Promise} The promise which resolves to an array. The first
   *     element of the array is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   *     The promise has a method named "cancel" which cancels the ongoing API
   *     call.
   *
   * @example
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.labelDetection(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.labelDetection = promisify(
    _createSingleFeatureMethod(features.LABEL_DETECTION)
  );

  /**
   * Annotate a single image with text detection.
   *
   * @see v1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1.AnnotateImageRequest
   *
   * @method v1.ImageAnnotatorClient#textDetection
   * @param {object} request A representation of the request being sent to the
   *     Vision API. This is an {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   * @param {object} request.image A dictionary-like object representing the
   *     image. This should have a single key (`source`, `content`).
   *
   *     If the key is `source`, the value should be another object containing
   *     `imageUri` or `filename` as a key and a string as a value.
   *
   *     If the key is `content`, the value should be a Buffer.
   * @param {object} [callOptions] Optional parameters. You can override the
   *     default settings for this call, e.g, timeout, retries, paginations,
   *     etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
   *     for the details.
   * @param {function(?Error, ?object)} [callback] The function which will be
   *     called with the result of the API call.
   *
   *     The second parameter to the callback is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   * @returns {Promise} The promise which resolves to an array. The first
   *     element of the array is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   *     The promise has a method named "cancel" which cancels the ongoing API
   *     call.
   *
   * @example
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.textDetection(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.textDetection = promisify(
    _createSingleFeatureMethod(features.TEXT_DETECTION)
  );

  /**
   * Annotate a single image with document text detection.
   *
   * @see v1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1.AnnotateImageRequest
   *
   * @method v1.ImageAnnotatorClient#documentTextDetection
   * @param {object} request A representation of the request being sent to the
   *     Vision API. This is an {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   * @param {object} request.image A dictionary-like object representing the
   *     image. This should have a single key (`source`, `content`).
   *
   *     If the key is `source`, the value should be another object containing
   *     `imageUri` or `filename` as a key and a string as a value.
   *
   *     If the key is `content`, the value should be a Buffer.
   * @param {object} [callOptions] Optional parameters. You can override the
   *     default settings for this call, e.g, timeout, retries, paginations,
   *     etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
   *     for the details.
   * @param {function(?Error, ?object)} [callback] The function which will be
   *     called with the result of the API call.
   *
   *     The second parameter to the callback is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   * @returns {Promise} The promise which resolves to an array. The first
   *     element of the array is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   *     The promise has a method named "cancel" which cancels the ongoing API
   *     call.
   *
   * @example
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.documentTextDetection(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.documentTextDetection = promisify(
    _createSingleFeatureMethod(features.DOCUMENT_TEXT_DETECTION)
  );

  /**
   * Annotate a single image with safe search detection.
   *
   * @see v1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1.AnnotateImageRequest
   *
   * @method v1.ImageAnnotatorClient#safeSearchDetection
   * @param {object} request A representation of the request being sent to the
   *     Vision API. This is an {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   * @param {object} request.image A dictionary-like object representing the
   *     image. This should have a single key (`source`, `content`).
   *
   *     If the key is `source`, the value should be another object containing
   *     `imageUri` or `filename` as a key and a string as a value.
   *
   *     If the key is `content`, the value should be a Buffer.
   * @param {object} [callOptions] Optional parameters. You can override the
   *     default settings for this call, e.g, timeout, retries, paginations,
   *     etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
   *     for the details.
   * @param {function(?Error, ?object)} [callback] The function which will be
   *     called with the result of the API call.
   *
   *     The second parameter to the callback is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   * @returns {Promise} The promise which resolves to an array. The first
   *     element of the array is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   *     The promise has a method named "cancel" which cancels the ongoing API
   *     call.
   *
   * @example
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.safeSearchDetection(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.safeSearchDetection = promisify(
    _createSingleFeatureMethod(features.SAFE_SEARCH_DETECTION)
  );

  /**
   * Annotate a single image with image properties.
   *
   * @see v1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1.AnnotateImageRequest
   *
   * @method v1.ImageAnnotatorClient#imageProperties
   * @param {object} request A representation of the request being sent to the
   *     Vision API. This is an {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   * @param {object} request.image A dictionary-like object representing the
   *     image. This should have a single key (`source`, `content`).
   *
   *     If the key is `source`, the value should be another object containing
   *     `imageUri` or `filename` as a key and a string as a value.
   *
   *     If the key is `content`, the value should be a Buffer.
   * @param {object} [callOptions] Optional parameters. You can override the
   *     default settings for this call, e.g, timeout, retries, paginations,
   *     etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
   *     for the details.
   * @param {function(?Error, ?object)} [callback] The function which will be
   *     called with the result of the API call.
   *
   *     The second parameter to the callback is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   * @returns {Promise} The promise which resolves to an array. The first
   *     element of the array is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   *     The promise has a method named "cancel" which cancels the ongoing API
   *     call.
   *
   * @example
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.imageProperties(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.imageProperties = promisify(
    _createSingleFeatureMethod(features.IMAGE_PROPERTIES)
  );

  /**
   * Annotate a single image with crop hints.
   *
   * @see v1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1.AnnotateImageRequest
   *
   * @method v1.ImageAnnotatorClient#cropHints
   * @param {object} request A representation of the request being sent to the
   *     Vision API. This is an {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   * @param {object} request.image A dictionary-like object representing the
   *     image. This should have a single key (`source`, `content`).
   *
   *     If the key is `source`, the value should be another object containing
   *     `imageUri` or `filename` as a key and a string as a value.
   *
   *     If the key is `content`, the value should be a Buffer.
   * @param {object} [callOptions] Optional parameters. You can override the
   *     default settings for this call, e.g, timeout, retries, paginations,
   *     etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
   *     for the details.
   * @param {function(?Error, ?object)} [callback] The function which will be
   *     called with the result of the API call.
   *
   *     The second parameter to the callback is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   * @returns {Promise} The promise which resolves to an array. The first
   *     element of the array is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   *     The promise has a method named "cancel" which cancels the ongoing API
   *     call.
   *
   * @example
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.cropHints(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.cropHints = promisify(
    _createSingleFeatureMethod(features.CROP_HINTS)
  );

  /**
   * Annotate a single image with web detection.
   *
   * @see v1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1.AnnotateImageRequest
   *
   * @method v1.ImageAnnotatorClient#webDetection
   * @param {object} request A representation of the request being sent to the
   *     Vision API. This is an {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   * @param {object} request.image A dictionary-like object representing the
   *     image. This should have a single key (`source`, `content`).
   *
   *     If the key is `source`, the value should be another object containing
   *     `imageUri` or `filename` as a key and a string as a value.
   *
   *     If the key is `content`, the value should be a Buffer.
   * @param {object} [callOptions] Optional parameters. You can override the
   *     default settings for this call, e.g, timeout, retries, paginations,
   *     etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions}
   *     for the details.
   * @param {function(?Error, ?object)} [callback] The function which will be
   *     called with the result of the API call.
   *
   *     The second parameter to the callback is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   * @returns {Promise} The promise which resolves to an array. The first
   *     element of the array is an object representing
   *     [BatchAnnotateImagesResponse]{@link BatchAnnotateImagesResponse}.
   *     The promise has a method named "cancel" which cancels the ongoing API
   *     call.
   *
   * @example
   * var image = {
   *   source: {imageUri: 'gs://path/to/image.jpg'}
   * };
   * vision.webDetection(image).then(response => {
   *   // doThingsWith(response);
   * }).catch(err => {
   *   console.error(err);
   * });
   */
  methods.webDetection = promisify(
    _createSingleFeatureMethod(features.WEB_DETECTION)
  );

  return methods;
};
