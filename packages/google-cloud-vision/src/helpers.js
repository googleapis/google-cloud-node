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
const {promisify} = require('@google-cloud/promisify');
const protobuf = require('protobufjs');

const gax = require('google-gax');

/*!
 * Convert non-object request forms into a correctly-formatted object.
 *
 * @param {object|string|Buffer} request An object representing an
 *   AnnotateImageRequest. May also be a string representing the path
 *   (filename or URL) to the image, or a buffer representing the image itself.
 *
 * @returns An object representing an AnnotateImageRequest.
 */
const _requestToObject = request => {
  if (is.string(request)) {
    // Is this a URL or a local file?
    // Guess based on what the string looks like, and build the full
    // request object in the correct format.
    if (request.indexOf('://') === -1 || request.indexOf('file://') === 0) {
      request = {image: {source: {filename: request}}};
    } else {
      request = {image: {source: {imageUri: request}}};
    }
  } else if (Buffer.isBuffer(request)) {
    // Drop the buffer one level lower; it will get dealt with later
    // in the function. This allows sending <Buffer> and {image: <Buffer>} to
    // both work identically.
    request = {image: request};
  }
  return request;
};

/*!
 * Coerce several nicer iterations of "how to specify an image" to the
 * full sturcture expected by the Vision API.
 *
 * @param {object} request An object representing an AnnotateImageRequest.
 *   It may include `image.source.filename` or a buffer passed to
 *   `image.content`, which are coerced into their canonical forms by this
 *   function.
 * @param {function} callback The callback to run.
 */
const _coerceRequest = (request, callback) => {
  // At this point, request must be an object with an `image` key; if not,
  // it is an error. If there is no image, throw an exception.
  if (!is.object(request) || is.undefined(request.image)) {
    return callback(new Error('No image present.'));
  }

  // If this is a buffer, read it and send the object
  // that the Vision API expects.
  if (Buffer.isBuffer(request.image)) {
    request.image = {content: request.image.toString('base64')};
  }

  // If the file is specified as a filename and exists on disk, read it
  // and coerce it into the base64 content.
  if (request.image.source && request.image.source.filename) {
    fs.readFile(request.image.source.filename, (err, blob) => {
      if (err) {
        callback(err);
        return;
      }
      request.image.content = blob.toString('base64');
      delete request.image.source;
      return callback(null, request);
    });
  } else {
    return callback(null, request);
  }
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
const _createSingleFeatureMethod = featureValue => {
  return function(annotateImageRequest, callOptions, callback) {
    // Sanity check: If we got a string or buffer, we need this to be
    // in object form now, so we can tack on the features list.
    //
    // Do the minimum required conversion, which can also be guaranteed to
    // be synchronous (e.g. no file loading yet; that is handled by
    // annotateImage later.
    annotateImageRequest = _requestToObject(annotateImageRequest);

    // If a callback was provided and options were skipped, normalize
    // the argument names.
    if (is.undefined(callback) && is.function(callOptions)) {
      callback = callOptions;
      callOptions = undefined;
    }

    // Add the feature to the request.
    annotateImageRequest.features = annotateImageRequest.features || [
      {
        type: featureValue,
      },
    ];

    // If the user submitted explicit features that do not line up with
    // the precise method called, throw an exception.
    for (const feature of annotateImageRequest.features) {
      if (feature.type !== featureValue) {
        throw new Error(
          'Setting explicit features is not supported on this method. ' +
            'Use the #annotateImage method instead.'
        );
      }
    }

    // Call the underlying #annotateImage method.
    return this.annotateImage(annotateImageRequest, callOptions, callback);
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
  const methods = {};

  /**
   * Annotate a single image with the requested features.
   *
   * @see v1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1.AnnotateImageRequest
   *
   * @method v1.ImageAnnotatorClient#annotateImage
   * @param {object|string|Buffer} request A representation of the request
   *     being sent to the Vision API. This is an
   *     {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   *     For simple cases, you may also send a string (the URL or filename of
   *     the image) or a buffer (the image itself).
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

    // If we got a filename for the image, open the file and transform
    // it to content.
    return _coerceRequest(request, (err, req) => {
      if (err) {
        return callback(err);
      }

      // Call the GAPIC batch annotation function.
      const requests = {requests: [req]};
      return this.batchAnnotateImages(requests, callOptions, (err, r) => {
        // If there is an error, handle it.
        if (err) {
          return callback(err);
        }

        // We are guaranteed to only have one response element, since we
        // only sent one image.
        const response = r.responses[0];

        // Fire the callback if applicable.
        return callback(undefined, response);
      });
    });
  });

  let protoFilesRoot = new gax.GoogleProtoFilesRoot();
  protoFilesRoot = protobuf.loadSync(
    path.join(
      __dirname,
      '..',
      'protos',
      `google/cloud/vision/${apiVersion}/image_annotator.proto`
    ),
    protoFilesRoot
  );
  const features = protoFilesRoot.lookup(
    `google.cloud.vision.${apiVersion}.Feature.Type`
  ).values;

  /**
   * Annotate a single image with face detection.
   *
   * @see v1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1.AnnotateImageRequest
   *
   * @method v1.ImageAnnotatorClient#faceDetection
   * @param {object|string|Buffer} request A representation of the request
   *     being sent to the Vision API. This is an
   *     {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   *     For simple cases, you may also send a string (the URL or filename of
   *     the image) or a buffer (the image itself).
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
   * @param {object|string|Buffer} request A representation of the request
   *     being sent to the Vision API. This is an
   *     {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   *     For simple cases, you may also send a string (the URL or filename of
   *     the image) or a buffer (the image itself).
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
   * @param {object|string|Buffer} request A representation of the request
   *     being sent to the Vision API. This is an
   *     {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   *     For simple cases, you may also send a string (the URL or filename of
   *     the image) or a buffer (the image itself).
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
   *   .logoDetection(request)
   *   .then(response => {
   *     // doThingsWith(response);
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
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
   * @param {object|string|Buffer} request A representation of the request
   *     being sent to the Vision API. This is an
   *     {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   *     For simple cases, you may also send a string (the URL or filename of
   *     the image) or a buffer (the image itself).
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
   *   .labelDetection(request)
   *   .then(response => {
   *     // doThingsWith(response);
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
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
   * @param {object|string|Buffer} request A representation of the request
   *     being sent to the Vision API. This is an
   *     {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   *     For simple cases, you may also send a string (the URL or filename of
   *     the image) or a buffer (the image itself).
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
   *   .textDetection(request)
   *   .then(response => {
   *     // doThingsWith(response);
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
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
   * @param {object|string|Buffer} request A representation of the request
   *     being sent to the Vision API. This is an
   *     {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   *     For simple cases, you may also send a string (the URL or filename of
   *     the image) or a buffer (the image itself).
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
   *   .documentTextDetection(request)
   *   .then(response => {
   *     // doThingsWith(response);
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
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
   * @param {object|string|Buffer} request A representation of the request
   *     being sent to the Vision API. This is an
   *     {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   *     For simple cases, you may also send a string (the URL or filename of
   *     the image) or a buffer (the image itself).
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
   *   .safeSearchDetection(request)
   *   .then(response => {
   *     // doThingsWith(response);
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
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
   * @param {object|string|Buffer} request A representation of the request
   *     being sent to the Vision API. This is an
   *     {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   *     For simple cases, you may also send a string (the URL or filename of
   *     the image) or a buffer (the image itself).
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
   *   .imageProperties(request)
   *   .then(response => {
   *     // doThingsWith(response);
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
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
   * @param {object|string|Buffer} request A representation of the request
   *     being sent to the Vision API. This is an
   *     {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   *     For simple cases, you may also send a string (the URL or filename of
   *     the image) or a buffer (the image itself).
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
   *   .cropHints(request)
   *   .then(response => {
   *     // doThingsWith(response);
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
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
   * @param {object|string|Buffer} request A representation of the request
   *     being sent to the Vision API. This is an
   *     {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   *     For simple cases, you may also send a string (the URL or filename of
   *     the image) or a buffer (the image itself).
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
   *   .webDetection(request)
   *   .then(response => {
   *     // doThingsWith(response);
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  methods.webDetection = promisify(
    _createSingleFeatureMethod(features.WEB_DETECTION)
  );

  /**
   * Annotate a single image with the result from Product Search.
   *
   * @see v1p3beta1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1p3beta1.AnnotateImageRequest
   *
   * @method v1p3beta1.ImageAnnotatorClient#productSearch
   * @param {object|string|Buffer} request A representation of the request
   *     being sent to the Vision API. This is an
   *     {@link google.cloud.vision.v1p3beta1.AnnotateImageRequest AnnotateImageRequest}.
   *     For simple cases, you may also send a string (the URL or filename of
   *     the image) or a buffer (the image itself).
   * @param {object} request.image A dictionary-like object representing the
   *     image. This should have a single key (`source`, `content`).
   *
   *     If the key is `source`, the value should be another object containing
   *     `imageUri` or `filename` as a key and a string as a value.
   *
   *     If the key is `content`, the value should be a Buffer.
   * @param {object} [callOptions] Optional parameters. You can override the
   *     default settings for this call, e.g, timeout, retries, paginations,
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
   * const vision = require('@google-cloud/vision').v1p3beta1;
   * const client = new vision.ImageAnnotatorClient();
   *
   * const request = {
   *   image: {
   *     source: {imageUri: 'gs://path/to/image.jpg'}
   *   }
   * };
   *
   * client
   *   .productSearch(request)
   *   .then(response => {
   *     // doThingsWith(response);
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  if (features.PRODUCT_SEARCH !== undefined) {
    methods.productSearch = promisify(
      _createSingleFeatureMethod(features.PRODUCT_SEARCH)
    );
  }

  /**
   * Annotate a single image with localization vectors.
   *
   * @see v1p3beta1.ImageAnnotatorClient#batchAnnotateImages
   * @see google.cloud.vision.v1p3beta1.AnnotateImageRequest
   *
   * @method v1p3beta1.ImageAnnotatorClient#objectLocalization
   * @param {object|string|Buffer} request A representation of the request
   *     being sent to the Vision API. This is an
   *     {@link google.cloud.vision.v1.AnnotateImageRequest AnnotateImageRequest}.
   *     For simple cases, you may also send a string (the URL or filename of
   *     the image) or a buffer (the image itself).
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
   * // Object localization is only available in v1p3beta1.
   * const vision = require('@google-cloud/vision').v1p3beta1;
   * const client = new vision.ImageAnnotatorClient();
   *
   * const request = {
   *   image: {
   *     source: {imageUri: 'gs://path/to/image.jpg'}
   *   }
   * };
   *
   * client
   *   .objectLocalization(request)
   *   .then(response => {
   *     // doThingsWith(response);
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  if (features.OBJECT_LOCALIZATION !== undefined) {
    methods.objectLocalization = promisify(
      _createSingleFeatureMethod(features.OBJECT_LOCALIZATION)
    );
  }

  return methods;
};
