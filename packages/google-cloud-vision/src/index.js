/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
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
 * @module vision
 */

'use strict';

var arrify = require('arrify');
var async = require('async');
var common = require('@google-cloud/common');
var commonGrpc = require('@google-cloud/common-grpc');
var extend = require('extend');
var format = require('string-format-obj');
var fs = require('fs');
var is = require('is');
var prop = require('propprop');
var propAssign = require('prop-assign');
var rgbHex = require('rgb-hex');

var v1 = require('./v1');

var VERY_UNLIKELY = 0;
var UNLIKELY = 1;
var POSSIBLE = 2;
var LIKELY = 3;
var VERY_LIKELY = 4;

/**
 * The [Cloud Vision API](https://cloud.google.com/vision/docs) allows easy
 * integration of vision detection features, including image labeling, face and
 * landmark detection, optical character recognition (OCR), and tagging of
 * explicit content.
 *
 * @constructor
 * @alias module:vision
 *
 * @resource [Getting Started]{@link https://cloud.google.com/vision/docs/getting-started}
 * @resource [Image Best Practices]{@link https://cloud.google.com/vision/docs/image-best-practices}
 *
 * @param {object} options - [Configuration object](#/docs).
 */
function Vision(options) {
  if (!(this instanceof Vision)) {
    options = common.util.normalizeArguments(this, options);
    return new Vision(options);
  }

  this.api = {
    Vision: v1(options).imageAnnotatorClient(options)
  };
}

Vision.likelihood = {
  VERY_UNLIKELY: VERY_UNLIKELY,
  UNLIKELY: UNLIKELY,
  POSSIBLE: POSSIBLE,
  LIKELY: LIKELY,
  VERY_LIKELY: VERY_LIKELY
};

/**
 * Run image detection and annotation for an image or batch of images.
 *
 * This is an advanced API method that requires raw
 * [`AnnotateImageRequest`](https://cloud.google.com/vision/reference/rest/v1/images/annotate#AnnotateImageRequest)
 * objects to be provided. If that doesn't sound like what you're looking for,
 * you'll probably appreciate {module:vision#detect}.
 *
 * @resource [images.annotate API Reference]{@link https://cloud.google.com/vision/reference/rest/v1/images/annotate}
 *
 * @param {object|object[]} requests - An `AnnotateImageRequest` or array of
 *     `AnnotateImageRequest`s. See an
 *     [`AnnotateImageRequest`](https://cloud.google.com/vision/reference/rest/v1/images/annotate#AnnotateImageRequest).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.annotations - See an
 *     [`AnnotateImageResponse`](https://cloud.google.com/vision/reference/rest/v1/images/annotate#AnnotateImageResponse).
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * var annotateImageReq = {
 *   // See the link in the parameters for `AnnotateImageRequest`.
 * };
 *
 * vision.annotate(annotateImageReq, function(err, annotations, apiResponse) {
 *   // annotations = apiResponse.responses
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * vision.annotate(annotateImageReq).then(function(data) {
 *   var annotations = data[0];
 *   var apiResponse = data[1];
 * });
 */
Vision.prototype.annotate = function(requests, callback) {
  this.api.Vision.batchAnnotateImages({
    requests: arrify(requests)
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    callback(null, resp.responses, resp);
  });
};

// jscs:disable maximumLineLength
/**
 * Detect properties from an image (or images) of one or more types.
 *
 * <h4>API simplifications</h4>
 *
 * The raw API response will return some values in a range from `VERY_UNLIKELY`
 * to `VERY_LIKELY`. For simplification, any value less than `LIKELY` is
 * converted to `false`.
 *
 *   - **False**
 *   - `VERY_UNLIKELY`
 *   - `UNLIKELY`
 *   - `POSSIBLE`
 *   - **True**
 *   - `LIKELY`
 *   - `VERY_LIKELY`
 *
 * The API will also return many values represented in a `[0,1]` range. We
 * convert these to a `[0,100]` value. E.g, `0.4` is represented as `40`.
 *
 * For the response in the original format, review the `apiResponse` argument
 * your callback receives.
 *
 * @param {string|string[]|buffer|buffer[]|module:storage/file|module:storage/file[]} images - The
 *     source image(s) to run the detection on. It can be either a local image
 *     path, a remote image URL, a Buffer, or a @google-cloud/storage File
 *     object.
 * @param {string[]|object=} options - An array of types or a configuration
 *     object.
 * @param {object=} options.imageContext - See an
 *     [`ImageContext`](https://cloud.google.com/vision/reference/rest/v1/images/annotate#ImageContext)
 *     resource.
 * @param {number} options.maxResults - The maximum number of results, per type,
 *     to return in the response.
 * @param {string[]} options.types - An array of feature types to detect from
 *     the provided images. Acceptable values: `crops`, `document`, `faces`,
 *     `landmarks`, `labels`, `logos`, `properties`, `safeSearch`, `similar`,
 *     `text`.
 * @param {boolean=} options.verbose - Use verbose mode, which returns a less-
 *     simplistic representation of the annotation (default: `false`).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object[]} callback.err.errors - If present, these represent partial
 *     failures. It's possible for part of your request to be completed
 *     successfully, while a single feature request was not successful.
 * @param {object|object[]} callback.detections - If a single detection type was
 *     asked for, it will be returned in its raw form; either an object or array
 *     of objects. If multiple detection types were requested, you will receive
 *     an object with keys for each detection type (listed above in
 *     `config.types`). Additionally, if multiple images were provided, you will
 *     receive an array of detection objects, each representing an image. See
 *     the examples below for more information.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * var types = [
 *   'face',
 *   'label'
 * ];
 *
 * vision.detect('image.jpg', types, function(err, detections, apiResponse) {
 *   // detections = {
 *   //   faces: [...],
 *   //   labels: [...]
 *   // }
 * });
 *
 * //-
 * // Run feature detection over a remote image.
 * //-
 * var img = 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png';
 *
 * vision.detect(img, types, function(err, detection, apiResponse) {});
 *
 * //-
 * // Run feature detection over a Buffer.
 * //-
 * var level = require('level');
 * var db = level('./users-database');
 *
 * db.get('user-image', { encoding: 'binary' }, function(err, image) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   vision.detect(image, types, function(err, detection, apiResponse) {});
 * });
 *
 * //-
 * // If you have a base64 string, provide it in a Buffer.
 * //-
 * var myBase64ImageRepresentation = '...';
 *
 * var image = new Buffer(myBase64ImageRepresentation, 'base64');
 *
 * vision.detect(image, types, function(err, detection, apiResponse) {});
 *
 * //-
 * // Supply multiple images for feature detection.
 * //-
 * var images = [
 *   'image.jpg',
 *   'image-two.jpg'
 * ];
 *
 * var types = [
 *   'face',
 *   'label'
 * ];
 *
 * vision.detect(images, types, function(err, detections, apiResponse) {
 *   // detections = [
 *   //   // Detections for image.jpg:
 *   //   {
 *   //     faces: [...],
 *   //     labels: [...]
 *   //   },
 *   //
 *   //   // Detections for image-two.jpg:
 *   //   {
 *   //     faces: [...],
 *   //     labels: [...]
 *   //   }
 *   // ]
 * });
 *
 * //-
 * // It's possible for part of your request to be completed successfully, while
 * // a single feature request was not successful.
 * //-
 * vision.detect('malformed-image.jpg', types, function(err, detections) {
 *   if (err) {
 *     // An API error or partial failure occurred.
 *
 *     if (err.name === 'PartialFailureError') {
 *       // err.errors = [
 *       //   {
 *       //     image: 'malformed-image.jpg',
 *       //     errors: [
 *       //       {
 *       //         code: 400,
 *       //         message: 'Bad image data',
 *       //         type: 'faces'
 *       //       },
 *       //       {
 *       //         code: 400,
 *       //         message: 'Bad image data',
 *       //         type: 'labels'
 *       //       }
 *       //     ]
 *       //   }
 *       // ]
 *     }
 *   }
 *
 *   // `detections` will still be populated with all of the results that could
 *   // be annotated.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * vision.detect('image.jpg', types).then(function(data) {
 *   var detections = data[0];
 *   var apiResponse = data[1];
 * });
 */
Vision.prototype.detect = function(images, options, callback) {
  var self = this;
  var isSingleImage = !is.array(images) || images.length === 1;

  if (!is.object(options)) {
    options = {
      types: options
    };
  }

  var types = arrify(options.types);

  var typeShortNameToFullName = {
    crop: 'CROP_HINTS',
    crops: 'CROP_HINTS',

    doc: 'DOCUMENT_TEXT_DETECTION',
    document: 'DOCUMENT_TEXT_DETECTION',

    face: 'FACE_DETECTION',
    faces: 'FACE_DETECTION',

    label: 'LABEL_DETECTION',
    labels: 'LABEL_DETECTION',

    landmark: 'LANDMARK_DETECTION',
    landmarks: 'LANDMARK_DETECTION',

    logo: 'LOGO_DETECTION',
    logos: 'LOGO_DETECTION',

    properties: 'IMAGE_PROPERTIES',

    safeSearch: 'SAFE_SEARCH_DETECTION',

    similar: 'WEB_DETECTION',

    text: 'TEXT_DETECTION'
  };

  var typeShortNameToRespName = {
    crop: 'cropHintsAnnotation',
    crops: 'cropHintsAnnotation',

    doc: 'fullTextAnnotation',
    document: 'fullTextAnnotation',

    face: 'faceAnnotations',
    faces: 'faceAnnotations',

    label: 'labelAnnotations',
    labels: 'labelAnnotations',

    landmark: 'landmarkAnnotations',
    landmarks: 'landmarkAnnotations',

    logo: 'logoAnnotations',
    logos: 'logoAnnotations',

    properties: 'imagePropertiesAnnotation',

    safeSearch: 'safeSearchAnnotation',

    similar: 'webDetection',

    text: 'textAnnotations'
  };

  var typeRespNameToShortName = {
    cropHintsAnnotation: 'crops',
    faceAnnotations: 'faces',
    fullTextAnnotation: 'document',
    imagePropertiesAnnotation: 'properties',
    labelAnnotations: 'labels',
    landmarkAnnotations: 'landmarks',
    logoAnnotations: 'logos',
    safeSearchAnnotation: 'safeSearch',
    textAnnotations: 'text',
    webDetection: 'similar'
  };

  Vision.findImages_(images, function(err, foundImages) {
    if (err) {
      callback(err);
      return;
    }

    var config = [];

    foundImages.forEach(function(image) {
      types.forEach(function(type) {
        var typeName = typeShortNameToFullName[type];

        if (!typeName) {
          throw new Error('Requested detection feature not found: ' + type);
        }

        var cfg = {
          image: image,
          features: [
            {
              type: typeName
            }
          ]
        };

        if (is.object(options.imageContext)) {
          cfg.imageContext = options.imageContext;
        }

        if (is.number(options.maxResults)) {
          cfg.features.map(propAssign('maxResults', options.maxResults));
        }

        config.push(cfg);
      });
    });

    self.annotate(config, function(err, annotations, resp) {
      if (err) {
        callback(err, null, resp);
        return;
      }

      var originalResp = extend(true, {}, resp);
      var partialFailureErrors = [];

      var detections = foundImages
        .map(groupDetectionsByImage)
        .map(removeExtraneousAnnotationObjects)
        .map(assignTypeToEmptyAnnotations)
        .map(removeDetectionsWithErrors)
        .map(flattenAnnotations)
        .map(decorateAnnotations);

      if (partialFailureErrors.length > 0) {
        err = new common.util.PartialFailureError({
          errors: partialFailureErrors,
          response: originalResp
        });
      }

      if (isSingleImage && detections.length > 0) {
        // If only a single image was given, expose it from the array.
        detections = detections[0];
      }

      callback(err, detections, originalResp);

      function groupDetectionsByImage() {
        // detections = [
        //   // Image one:
        //   [
        //     {
        //       faceAnnotations: {},
        //       labelAnnotations: {},
        //       ...
        //     }
        //   ],
        //
        //   // Image two:
        //   [
        //     {
        //       faceAnnotations: {},
        //       labelAnnotations: {},
        //       ...
        //     }
        //   ]
        // ]
        return annotations.splice(0, types.length);
      }

      function removeExtraneousAnnotationObjects(annotations) {
        // The API response includes empty annotations for features that weren't
        // requested.
        //
        // Before:
        //   [
        //     {
        //       faceAnnotations: {},
        //       labelAnnotations: {}
        //     }
        //   ]
        //
        // After:
        //   [
        //     {
        //       faceAnnotations: {}
        //     }
        //   ]
        return annotations.map(function(annotation, index) {
          var requestedAnnotationType = typeShortNameToRespName[types[index]];

          for (var prop in annotation) {
            if (prop !== requestedAnnotationType && prop !== 'error') {
              /* istanbul ignore next */
              delete annotation[prop];
            }
          }

          return annotation;
        });
      }

      function assignTypeToEmptyAnnotations(annotations) {
        // Before:
        //   [
        //     {}, // What annotation type was attempted?
        //     { labelAnnotations: {...} }
        //   ]
        //
        // After:
        //   [
        //     { faceAnnotations: [] },
        //     { labelAnnotations: {...} }
        //   ]
        return annotations.map(function(annotation, index) {
          var detectionType = types[index];
          var typeName = typeShortNameToRespName[detectionType];

          if (is.empty(annotation) || annotation.error) {
            var isPlural = typeName.charAt(typeName.length - 1) === 's';
            annotation[typeName] = isPlural ? [] : {};
          }

          return annotation;
        });
      }

      function removeDetectionsWithErrors(annotations, index) {
        // Before:
        //   [
        //     {
        //       faceAnnotations: []
        //     },
        //     {
        //       error: {...},
        //       imagePropertiesAnnotation: {}
        //     }
        //   ]

        // After:
        //   [
        //     {
        //       faceAnnotations: []
        //     },
        //     undefined
        //   ]
        var errors = [];

        annotations.forEach(function(annotation, index) {
          if (!is.empty(annotation.error)) {
            var userInputType = types[index];
            var respNameType = typeShortNameToRespName[userInputType];
            annotation.error.type = typeRespNameToShortName[respNameType];
            errors.push(Vision.formatError_(annotation.error));
          }
        });

        if (errors.length > 0) {
          partialFailureErrors.push({
            image: isSingleImage ? images : images[index],
            errors: errors
          });

          return;
        }

        return annotations;
      }

      function flattenAnnotations(annotations) {
        return extend.apply(null, annotations);
      }

      function formatAnnotationBuilder(type) {
        return function(annotation) {
          if (is.empty(annotation)) {
            return annotation;
          }

          var formatMethodMap = {
            cropHintsAnnotation: Vision.formatCropHintsAnnotation_,
            error: Vision.formatError_,
            faceAnnotations: Vision.formatFaceAnnotation_,
            fullTextAnnotation: Vision.formatFullTextAnnotation_,
            imagePropertiesAnnotation: Vision.formatImagePropertiesAnnotation_,
            labelAnnotations: Vision.formatEntityAnnotation_,
            landmarkAnnotations: Vision.formatEntityAnnotation_,
            logoAnnotations: Vision.formatEntityAnnotation_,
            safeSearchAnnotation: Vision.formatSafeSearchAnnotation_,
            textAnnotations: Vision.formatEntityAnnotation_,
            webDetection: Vision.formatWebDetection_
          };

          var formatMethod = formatMethodMap[type] || function(annotation) {
            return annotation;
          };

          return formatMethod(annotation, options);
        };
      }

      function decorateAnnotations(annotations) {
        for (var annotationType in annotations) {
          if (annotations.hasOwnProperty(annotationType)) {
            var annotationGroup = arrify(annotations[annotationType]);

            var formattedAnnotationGroup = annotationGroup
              .map(formatAnnotationBuilder(annotationType));

            // An annotation can be singular, e.g. SafeSearch. It is either
            // violent or not. Unlike face detection, where there can be
            // multiple results.
            //
            // Be sure the original type (object or array) is preserved and
            // not wrapped in an array if it wasn't originally.
            if (!is.array(annotations[annotationType])) {
              formattedAnnotationGroup = formattedAnnotationGroup[0];
            }

            delete annotations[annotationType];
            var typeShortName = typeRespNameToShortName[annotationType];
            annotations[typeShortName] = formattedAnnotationGroup;
          }
        }

        if (types.length === 1) {
          // Only a single detection type was asked for, so no need to box in
          // the results. Make them accessible without using a key.
          var key = typeRespNameToShortName[typeShortNameToRespName[types[0]]];
          annotations = annotations[key];
        }

        return annotations;
      }
    });
  });
};

// jscs:enable maximumLineLength

/**
 * Detect the crop hints within an image.
 *
 * <h4>Parameters</h4>
 *
 * See {module:vision#detect}.
 *
 * @resource [CropHintsAnnotation JSON respresentation]{@link https://cloud.google.com/vision/reference/rest/v1/images/annotate#CropHintsAnnotation}
 *
 * @example
 * vision.detectCrops('image.jpg', function(err, crops, apiResponse) {
 *   // crops = [
 *   //   [
 *   //     {
 *   //       x: 1
 *   //     },
 *   //     {
 *   //       x: 295
 *   //     },
 *   //     {
 *   //       x: 295,
 *   //       y: 301
 *   //     },
 *   //     {
 *   //       x: 1,
 *   //       y: 301
 *   //     }
 *   //   ],
 *   //   // ...
 *   // ]
 * });
 *
 * //-
 * // Activate `verbose` mode for a more detailed response.
 * //-
 * var options = {
 *   verbose: true
 * };
 *
 * vision.detectCrops('image.jpg', options, function(err, crops, apiResponse) {
 *   // crops = [
 *   //   {
 *   //     bounds: [
 *   //       {
 *   //         x: 1
 *   //       },
 *   //       {
 *   //         x: 295
 *   //       },
 *   //       {
 *   //         x: 295,
 *   //         y: 301
 *   //       },
 *   //       {
 *   //         x: 1,
 *   //         y: 301
 *   //       }
 *   //     ],
 *   //     confidence: 0.799999995
 *   //   },
 *   //   // ...
 *   // ]
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * vision.detectCrops('image.jpg').then(function(data) {
 *   var crops = data[0];
 *   var apiResponse = data[1];
 * });
 */
Vision.prototype.detectCrops = function(images, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    types: ['crops']
  });

  this.detect(images, options, callback);
};

/**
 * Run face detection against an image.
 *
 * <h4>Parameters</h4>
 *
 * See {module:vision#detect}.
 *
 * @resource [FaceAnnotation JSON respresentation]{@link https://cloud.google.com/vision/reference/rest/v1/images/annotate#FaceAnnotation}
 *
 * @example
 * vision.detectFaces('image.jpg', function(err, faces, apiResponse) {
 *   // faces = [
 *   //   {
 *   //     angles: {
 *   //       pan: -8.1090336,
 *   //       roll: -5.0002542,
 *   //       tilt: 18.012161
 *   //     },
 *   //     bounds: {
 *   //       head: [
 *   //         {
 *   //           x: 1
 *   //         },
 *   //         {
 *   //           x: 295
 *   //         },
 *   //         {
 *   //           x: 295,
 *   //           y: 301
 *   //         },
 *   //         {
 *   //           x: 1,
 *   //           y: 301
 *   //         }
 *   //       ],
 *   //       face: [
 *   //         {
 *   //           x: 28,
 *   //           y: 40
 *   //         },
 *   //         {
 *   //           x: 250,
 *   //           y: 40
 *   //         },
 *   //         {
 *   //           x: 250,
 *   //           y: 262
 *   //         },
 *   //         {
 *   //           x: 28,
 *   //           y: 262
 *   //         }
 *   //       ]
 *   //     },
 *   //     features: {
 *   //       confidence: 34.489909,
 *   //       chin: {
 *   //         center: {
 *   //           x: 143.34183,
 *   //           y: 262.22998,
 *   //           z: -57.388493
 *   //         },
 *   //         left: {
 *   //           x: 63.102425,
 *   //           y: 248.99081,
 *   //           z: 44.207638
 *   //         },
 *   //         right: {
 *   //           x: 241.72728,
 *   //           y: 225.53488,
 *   //           z: 19.758242
 *   //         }
 *   //       },
 *   //       ears: {
 *   //         left: {
 *   //           x: 54.872219,
 *   //           y: 207.23712,
 *   //           z: 97.030685
 *   //         },
 *   //         right: {
 *   //           x: 252.67567,
 *   //           y: 180.43124,
 *   //           z: 70.15992
 *   //         }
 *   //       },
 *   //       eyebrows: {
 *   //         left: {
 *   //           left: {
 *   //             x: 58.790176,
 *   //             y: 113.28249,
 *   //             z: 17.89735
 *   //           },
 *   //           right: {
 *   //             x: 106.14151,
 *   //             y: 98.593758,
 *   //             z: -13.116687
 *   //           },
 *   //           top: {
 *   //             x: 80.248711,
 *   //             y: 94.04303,
 *   //             z: 0.21131183
 *   //           }
 *   //         },
 *   //         right: {
 *   //           left: {
 *   //             x: 148.61565,
 *   //             y: 92.294594,
 *   //             z: -18.804882
 *   //           },
 *   //           right: {
 *   //             x: 204.40808,
 *   //             y: 94.300117,
 *   //             z: -2.0009689
 *   //           },
 *   //           top: {
 *   //             x: 174.70135,
 *   //             y: 81.580917,
 *   //             z: -12.702137
 *   //           }
 *   //         }
 *   //       },
 *   //       eyes: {
 *   //         left: {
 *   //           bottom: {
 *   //             x: 84.883934,
 *   //             y: 134.59479,
 *   //             z: -2.8677137
 *   //           },
 *   //           center: {
 *   //             x: 83.707092,
 *   //             y: 128.34,
 *   //             z: -0.00013388535
 *   //           },
 *   //           left: {
 *   //             x: 72.213913,
 *   //             y: 132.04138,
 *   //             z: 9.6985674
 *   //           },
 *   //           pupil: {
 *   //             x: 86.531624,
 *   //             y: 126.49807,
 *   //             z: -2.2496929
 *   //           },
 *   //           right: {
 *   //             x: 105.28892,
 *   //             y: 125.57655,
 *   //             z: -2.51554
 *   //           },
 *   //           top: {
 *   //             x: 86.706947,
 *   //             y: 119.47144,
 *   //             z: -4.1606765
 *   //           }
 *   //         },
 *   //         right: {
 *   //           bottom: {
 *   //             x: 179.30353,
 *   //             y: 121.03307,
 *   //             z: -14.843414
 *   //           },
 *   //           center: {
 *   //             x: 181.17694,
 *   //             y: 115.16437,
 *   //             z: -12.82961
 *   //           },
 *   //           left: {
 *   //             x: 158.2863,
 *   //             y: 118.491,
 *   //             z: -9.723031
 *   //           },
 *   //           pupil: {
 *   //             x: 175.99976,
 *   //             y: 114.64407,
 *   //             z: -14.53744
 *   //           },
 *   //           right: {
 *   //             x: 194.59413,
 *   //             y: 115.91954,
 *   //             z: -6.952745
 *   //           },
 *   //           top: {
 *   //             x: 173.99446,
 *   //             y: 107.94287,
 *   //             z: -16.050705
 *   //           }
 *   //         }
 *   //       },
 *   //       forehead: {
 *   //         x: 126.53813,
 *   //         y: 93.812057,
 *   //         z: -18.863352
 *   //       },
 *   //       lips: {
 *   //         bottom: {
 *   //           x: 137.28528,
 *   //           y: 219.23564,
 *   //           z: -56.663128
 *   //         },
 *   //         top: {
 *   //           x: 134.74164,
 *   //           y: 192.50438,
 *   //           z: -53.876408
 *   //         }
 *   //       },
 *   //       mouth: {
 *   //         center: {
 *   //           x: 136.43481,
 *   //           y: 204.37952,
 *   //           z: -51.620205
 *   //         },
 *   //         left: {
 *   //           x: 104.53558,
 *   //           y: 214.05037,
 *   //           z: -30.056231
 *   //         },
 *   //         right: {
 *   //           x: 173.79134,
 *   //           y: 204.99333,
 *   //           z: -39.725758
 *   //         }
 *   //       },
 *   //       nose: {
 *   //         bottom: {
 *   //           center: {
 *   //             x: 133.81947,
 *   //             y: 173.16437,
 *   //             z: -48.287724
 *   //           },
 *   //           left: {
 *   //             x: 110.98372,
 *   //             y: 173.61331,
 *   //             z: -29.7784
 *   //           },
 *   //           right: {
 *   //             x: 161.31354,
 *   //             y: 168.24527,
 *   //             z: -36.1628
 *   //           }
 *   //         },
 *   //         tip: {
 *   //           x: 128.14919,
 *   //           y: 153.68129,
 *   //           z: -63.198204
 *   //         },
 *   //         top: {
 *   //           x: 127.83745,
 *   //           y: 110.17557,
 *   //           z: -22.650913
 *   //         }
 *   //       }
 *   //     },
 *   //     confidence: 56.748849,
 *   //     anger: false,
 *   //     angerLikelihood: 1,
 *   //     blurred: false,
 *   //     blurredLikelihood: 1,
 *   //     headwear: false,
 *   //     headwearLikelihood: 1,
 *   //     joy: false,
 *   //     joyLikelihood: 1,
 *   //     sorrow: false,
 *   //     sorrowLikelihood: 1,
 *   //     surprise: false,
 *   //     surpriseLikelihood: 1,
 *   //     underExposed: false,
 *   //     underExposedLikelihood: 1
 *   //   }
 *   // ]
 * });
 *
 * //-
 * // Our library simplifies the response from the API. Use the map below to see
 * // each response name's original name.
 * //-
 * var shortNameToLongNameMap = {
 *   chin: {
 *     center: 'CHIN_GNATHION',
 *     left: 'CHIN_LEFT_GONION',
 *     right: 'CHIN_RIGHT_GONION'
 *   },
 *
 *   ears: {
 *     left: 'LEFT_EAR_TRAGION',
 *     right: 'RIGHT_EAR_TRAGION'
 *   },
 *
 *   eyebrows: {
 *     left: {
 *       left: 'LEFT_OF_LEFT_EYEBROW',
 *       right: 'RIGHT_OF_LEFT_EYEBROW',
 *       top: 'LEFT_EYEBROW_UPPER_MIDPOINT'
 *     },
 *     right: {
 *       left: 'LEFT_OF_RIGHT_EYEBROW',
 *       right: 'RIGHT_OF_RIGHT_EYEBROW',
 *       top: 'RIGHT_EYEBROW_UPPER_MIDPOINT'
 *     }
 *   },
 *
 *   eyes: {
 *     left: {
 *       bottom: 'LEFT_EYE_BOTTOM_BOUNDARY',
 *       center: 'LEFT_EYE',
 *       left: 'LEFT_EYE_LEFT_CORNER',
 *       pupil: 'LEFT_EYE_PUPIL',
 *       right: 'LEFT_EYE_RIGHT_CORNER',
 *       top: 'LEFT_EYE_TOP_BOUNDARY'
 *     },
 *     right: {
 *       bottom: 'RIGHT_EYE_BOTTOM_BOUNDARY',
 *       center: 'RIGHT_EYE',
 *       left: 'RIGHT_EYE_LEFT_CORNER',
 *       pupil: 'RIGHT_EYE_PUPIL',
 *       right: 'RIGHT_EYE_RIGHT_CORNER',
 *       top: 'RIGHT_EYE_TOP_BOUNDARY'
 *     }
 *   },
 *
 *   forehead: 'FOREHEAD_GLABELLA',
 *
 *   lips: {
 *     bottom: 'LOWER_LIP',
 *     top: 'UPPER_LIP'
 *   },
 *
 *   mouth: {
 *     center: 'MOUTH_CENTER',
 *     left: 'MOUTH_LEFT',
 *     right: 'MOUTH_RIGHT'
 *   },
 *
 *   nose: {
 *     bottom: {
 *       center: 'NOSE_BOTTOM_CENTER',
 *       left: 'NOSE_BOTTOM_LEFT',
 *       right: 'NOSE_BOTTOM_RIGHT'
 *     },
 *     tip: 'NOSE_TIP',
 *     top: 'MIDPOINT_BETWEEN_EYES'
 *   }
 * };
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * vision.detectFaces('image.jpg').then(function(data) {
 *   var faces = data[0];
 *   var apiResponse = data[1];
 * });
 */
Vision.prototype.detectFaces = function(images, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    types: ['faces']
  });

  this.detect(images, options, callback);
};

/**
 * Annotate an image with descriptive labels.
 *
 * <h4>Parameters</h4>
 *
 * See {module:vision#detect}.
 *
 * @resource [EntityAnnotation JSON representation]{@link https://cloud.google.com/vision/reference/rest/v1/images/annotate#EntityAnnotation}
 *
 * @example
 * vision.detectLabels('image.jpg', function(err, labels, apiResponse) {
 *   // labels = [
 *   //   'classical sculpture',
 *   //   'statue',
 *   //   'landmark',
 *   //   'ancient history',
 *   //   'artwork'
 *   // ]
 * });
 *
 * //-
 * // Activate `verbose` mode for a more detailed response.
 * //-
 * var opts = {
 *   verbose: true
 * };
 *
 * vision.detectLabels('image.jpg', opts, function(err, labels, apiResponse) {
 *   // labels = [
 *   //   {
 *   //     desc: 'classical sculpture',
 *   //     id: '/m/095yjj',
 *   //     score: 98.092282
 *   //   },
 *   //   {
 *   //     desc: 'statue',
 *   //     id: '/m/013_1c',
 *   //     score: 90.66112
 *   //   },
 *   //   // ...
 *   // ]
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * vision.detectLabels('image.jpg').then(function(data) {
 *   var labels = data[0];
 *   var apiResponse = data[1];
 * });
 */
Vision.prototype.detectLabels = function(images, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    types: ['labels']
  });

  this.detect(images, options, callback);
};

/**
 * Detect the landmarks from an image.
 *
 * <h4>Parameters</h4>
 *
 * See {module:vision#detect}.
 *
 * @resource [EntityAnnotation JSON representation]{@link https://cloud.google.com/vision/reference/rest/v1/images/annotate#EntityAnnotation}
 *
 * @example
 * vision.detectLandmarks('image.jpg', function(err, landmarks, apiResponse) {
 *   // landmarks = [
 *   //   'Mount Rushmore'
 *   // ]
 * });
 *
 * //-
 * // Activate `verbose` mode for a more detailed response.
 * //-
 * var image = 'image.jpg';
 *
 * var opts = {
 *   verbose: true
 * };
 *
 * vision.detectLandmarks(image, opts, function(err, landmarks, apiResponse) {
 *   // landmarks = [
 *   //   {
 *   //     desc: 'Mount Rushmore',
 *   //     id: '/m/019dvv',
 *   //     score: 28.651705,
 *   //     bounds: [
 *   //       {
 *   //         x: 79,
 *   //         y: 130
 *   //       },
 *   //       {
 *   //         x: 284,
 *   //         y: 130
 *   //       },
 *   //       {
 *   //         x: 284,
 *   //         y: 226
 *   //       },
 *   //       {
 *   //         x: 79,
 *   //         y: 226
 *   //       }
 *   //     ],
 *   //     locations: [
 *   //       {
 *   //         latitude: 43.878264,
 *   //         longitude: -103.45700740814209
 *   //       }
 *   //     ]
 *   //   }
 *   // ]
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * vision.detectLandmarks('image.jpg').then(function(data) {
 *   var landmarks = data[0];
 *   var apiResponse = data[1];
 * });
 */
Vision.prototype.detectLandmarks = function(images, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    types: ['landmarks']
  });

  this.detect(images, options, callback);
};

/**
 * Detect the logos from an image.
 *
 * <h4>Parameters</h4>
 *
 * See {module:vision#detect}.
 *
 * @resource [EntityAnnotation JSON representation]{@link https://cloud.google.com/vision/reference/rest/v1/images/annotate#EntityAnnotation}
 *
 * @example
 * vision.detectLogos('image.jpg', function(err, logos, apiResponse) {
 *   // logos = [
 *   //   'Google'
 *   // ]
 * });
 *
 * //-
 * // Activate `verbose` mode for a more detailed response.
 * //-
 * var options = {
 *   verbose: true
 * };
 *
 * vision.detectLogos('image.jpg', options, function(err, logos, apiResponse) {
 *   // logos = [
 *   //   {
 *   //     desc: 'Google',
 *   //     id: '/m/045c7b',
 *   //     score: 64.35439,
 *   //     bounds: [
 *   //       {
 *   //         x: 11,
 *   //         y: 11
 *   //       },
 *   //       {
 *   //         x: 330,
 *   //         y: 11
 *   //       },
 *   //       {
 *   //         x: 330,
 *   //         y: 72
 *   //       },
 *   //       {
 *   //         x: 11,
 *   //         y: 72
 *   //       }
 *   //     ]
 *   //   }
 *   // ]
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * vision.detectLogos('image.jpg').then(function(data) {
 *   var logos = data[0];
 *   var apiResponse = data[1];
 * });
 */
Vision.prototype.detectLogos = function(images, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    types: ['logos']
  });

  this.detect(images, options, callback);
};

/**
 * Get a set of properties about an image, such as its dominant colors.
 *
 * <h4>Parameters</h4>
 *
 * See {module:vision#detect}.
 *
 * @resource [ImageProperties JSON representation]{@link https://cloud.google.com/vision/reference/rest/v1/images/annotate#ImageProperties}
 *
 * @example
 * vision.detectProperties('image.jpg', function(err, props, apiResponse) {
 *   // props = {
 *   //   colors: [
 *   //     '3b3027',
 *   //     '727d81',
 *   //     '3f2f22',
 *   //     '838e92',
 *   //     '482a16',
 *   //     '5f4f3c',
 *   //     '261b14',
 *   //     'b39b7f',
 *   //     '51473f',
 *   //     '2c1e12'
 *   //   ]
 *   // }
 * });
 *
 * //-
 * // Activate `verbose` mode for a more detailed response.
 * //-
 * var image = 'image.jpg';
 *
 * var options = {
 *   verbose: true
 * };
 *
 * vision.detectProperties(image, options, function(err, props, apiResponse) {
 *   // props = {
 *   //   colors: [
 *   //     {
 *   //       red: 59,
 *   //       green: 48,
 *   //       blue: 39,
 *   //       score: 26.618013,
 *   //       coverage: 15.948276,
 *   //       hex: '3b3027'
 *   //     },
 *   //     {
 *   //       red: 114,
 *   //       green: 125,
 *   //       blue: 129,
 *   //       score: 10.319714,
 *   //       coverage: 8.3977409,
 *   //       hex: '727d81'
 *   //     },
 *   //     // ...
 *   //   ]
 *   // }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * vision.detectProperties('image.jpg').then(function(data) {
 *   var props = data[0];
 *   var apiResponse = data[1];
 * });
 */
Vision.prototype.detectProperties = function(images, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    types: ['properties']
  });

  this.detect(images, options, callback);
};

/**
 * Detect the SafeSearch flags from an image.
 *
 * <h4>Parameters</h4>
 *
 * See {module:vision#detect}.
 *
 * @resource [SafeSearch JSON representation]{@link https://cloud.google.com/vision/reference/rest/v1/images/annotate#SafeSearchAnnotation}
 *
 * @example
 * vision.detectSafeSearch('image.jpg', function(err, safeSearch, apiResponse) {
 *   // safeSearch = {
 *   //   adult: false,
 *   //   medical: false,
 *   //   spoof: false,
 *   //   violence: true
 *   // }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * vision.detectSafeSearch('image.jpg').then(function(data) {
 *   var safeSearch = data[0];
 *   var apiResponse = data[1];
 * });
 */
Vision.prototype.detectSafeSearch = function(images, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    types: ['safeSearch']
  });

  this.detect(images, options, callback);
};

/**
 * Detect similar images from the internet.
 *
 * <h4>Parameters</h4>
 *
 * See {module:vision#detect}.
 *
 * @resource [WebAnnotation JSON representation]{@link https://cloud.google.com/vision/docs/reference/rest/v1/images/annotate#WebAnnotation}
 *
 * @example
 * vision.detectSimilar('image.jpg', function(err, images, apiResponse) {
 *   // images = [
 *   //   'http://www.example.com/most-similar-image',
 *   //   // ...
 *   //   'http://www.example.com/least-similar-image'
 *   // ]
 * });
 *
 * //-
 * // Activate `verbose` mode for a more detailed response.
 * //-
 * var opts = {
 *   verbose: true
 * };
 *
 * vision.detectSimilar('image.jpg', opts, function(err, similar, apiResponse) {
 *   // similar = {
 *   //   entities: [
 *   //     'Logo',
 *   //     // ...
 *   //   ],
 *   //   fullMatches: [
 *   //     'http://www.example.com/most-similar-image',
 *   //     // ...
 *   //     'http://www.example.com/least-similar-image'
 *   //   ],
 *   //   partialMatches: [
 *   //     'http://www.example.com/most-similar-image',
 *   //     // ...
 *   //     'http://www.example.com/least-similar-image'
 *   //   ],
 *   //   pages: [
 *   //     'http://www.example.com/page-with-most-similar-image',
 *   //     // ...
 *   //     'http://www.example.com/page-with-least-similar-image'
 *   //   ]
 *   // }
  * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * vision.detectSimilar('image.jpg').then(function(data) {
 *   var images = data[0];
 *   var apiResponse = data[1];
 * });
 */
Vision.prototype.detectSimilar = function(images, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    types: ['similar']
  });

  this.detect(images, options, callback);
};

/**
 * Detect the text within an image.
 *
 * <h4>Parameters</h4>
 *
 * See {module:vision#detect}.
 *
 * @example
 * vision.detectText('image.jpg', function(err, text, apiResponse) {
 *   // text = [
 *   //   'This was text found in the image'
 *   // ]
 * });
 *
 * //-
 * // Activate `verbose` mode for a more detailed response.
 * //-
 * var options = {
 *   verbose: true
 * };
 *
 * vision.detectText('image.jpg', options, function(err, text, apiResponse) {
 *   // text = [
 *   //   {
 *   //     desc: 'This was text found in the image',
 *   //     bounds: [
 *   //       {
 *   //         x: 4,
 *   //         y: 5
 *   //       },
 *   //       {
 *   //         x: 493,
 *   //         y: 5
 *   //       },
 *   //       {
 *   //         x: 493,
 *   //         y: 89
 *   //       },
 *   //       {
 *   //         x: 4,
 *   //         y: 89
 *   //       }
 *   //     ]
 *   //   }
 *   // ]
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * vision.detectText('image.jpg').then(function(data) {
 *   var text = data[0];
 *   var apiResponse = data[1];
 * });
 */
Vision.prototype.detectText = function(images, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    types: ['text']
  });

  this.detect(images, options, callback);
};

/**
 * Annotate a document.
 *
 * <h4>Parameters</h4>
 *
 * See {module:vision#detect}.
 *
 * @resource [FullTextAnnotation JSON representation]{@link https://cloud.google.com/vision/reference/rest/v1/images/annotate#FullTextAnnotation}
 *
 * @example
 * vision.readDocument('image.jpg', function(err, text, apiResponse) {
 *   // text = 'This paragraph was extracted from image.jpg';
 * });
 *
 * //-
 * // Activate `verbose` mode for a more detailed response.
 * //-
 * var opts = {
 *   verbose: true
 * };
 *
 * vision.readDocument('image.jpg', opts, function(err, pages, apiResponse) {
 *   // pages = [
 *   //   {
 *   //     languages: [
 *   //       'en'
 *   //     ],
 *   //     width: 688,
 *   //     height: 1096,
 *   //     blocks: [
 *   //       {
 *   //         type: 'TEXT',
 *   //         bounds: [
 *   //           {
 *   //             x: 4,
 *   //             y: 5
 *   //           },
 *   //           {
 *   //             x: 493,
 *   //             y: 5
 *   //           },
 *   //           {
 *   //             x: 493,
 *   //             y: 89
 *   //           },
 *   //           {
 *   //             x: 4,
 *   //             y: 89
 *   //           }
 *   //         ],
 *   //         paragraphs: [
 *   //           {
 *   //             bounds: [
 *   //               {
 *   //                 x: 4,
 *   //                 y: 5
 *   //               },
 *   //               {
 *   //                 x: 493,
 *   //                 y: 5
 *   //               },
 *   //               {
 *   //                 x: 493,
 *   //                 y: 89
 *   //               },
 *   //               {
 *   //                 x: 4,
 *   //                 y: 89
 *   //               }
 *   //             ],
 *   //             words: [
 *   //               {
 *   //                 bounds: [
 *   //                   {
 *   //                     x: 4,
 *   //                     y: 5
 *   //                   },
 *   //                   {
 *   //                     x: 493,
 *   //                     y: 5
 *   //                   },
 *   //                   {
 *   //                     x: 493,
 *   //                     y: 89
 *   //                   },
 *   //                   {
 *   //                     x: 4,
 *   //                     y: 89
 *   //                   }
 *   //                 ],
 *   //                 symbols: [
 *   //                   {
 *   //                     bounds: [
 *   //                       {
 *   //                         x: 4,
 *   //                         y: 5
 *   //                       },
 *   //                       {
 *   //                         x: 493,
 *   //                         y: 5
 *   //                       },
 *   //                       {
 *   //                         x: 493,
 *   //                         y: 89
 *   //                       },
 *   //                       {
 *   //                         x: 4,
 *   //                         y: 89
 *   //                       }
 *   //                     ],
 *   //                     text: 'T'
 *   //                   },
 *   //                   // ...
 *   //                 ]
 *   //               },
 *   //               // ...
 *   //             ]
 *   //           },
 *   //           // ...
 *   //         ]
 *   //       },
 *   //       // ...
 *   //     ]
 *   //   }
 *   // ]
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * vision.readDocument('image.jpg').then(function(data) {
 *   var pages = data[0];
 *   var apiResponse = data[1];
 * });
 */
Vision.prototype.readDocument = function(images, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    types: ['document']
  });

  this.detect(images, options, callback);
};

/**
 * Determine the type of image the user is asking to be annotated. If a
 * {module:storage/file}, convert to its "gs://{bucket}/{file}" URL. If a remote
 * URL, format as the API expects. If a file path to a local file, convert to a
 * base64 string.
 *
 * @private
 */
Vision.findImages_ = function(images, callback) {
  var MAX_PARALLEL_LIMIT = 5;
  images = arrify(images);

  function findImage(image, callback) {
    if (Buffer.isBuffer(image)) {
      callback(null, {
        content: image.toString('base64')
      });
      return;
    }

    if (common.util.isCustomType(image, 'storage/file')) {
      callback(null, {
        source: {
          gcsImageUri: format('gs://{bucketName}/{fileName}', {
            bucketName: image.bucket.name,
            fileName: image.name
          })
        }
      });
      return;
    }

    // File is a URL.
    if (/^http/.test(image)) {
      callback(null, {
        source: {
          imageUri: image
        }
      });
      return;
    }

    // File exists on disk.
    fs.readFile(image, { encoding: 'base64' }, function(err, contents) {
      if (err) {
        callback(err);
        return;
      }

      callback(null, { content: contents });
    });
  }

  async.mapLimit(images, MAX_PARALLEL_LIMIT, findImage, callback);
};

/**
 * Format a raw crop hint annotation response from the API.
 *
 * @private
 */
Vision.formatCropHintsAnnotation_ = function(cropHintsAnnotation, options) {
  return cropHintsAnnotation.cropHints.map(function(cropHint) {
    cropHint = {
      bounds: cropHint.boundingPoly.vertices,
      confidence: cropHint.confidence
    };

    return options.verbose ? cropHint : cropHint.bounds;
  });
};

/**
 * Format a raw entity annotation response from the API.
 *
 * @private
 */
Vision.formatEntityAnnotation_ = function(entityAnnotation, options) {
  if (!options.verbose) {
    return entityAnnotation.description;
  }

  var formattedEntityAnnotation = {
    desc: entityAnnotation.description
  };

  if (entityAnnotation.mid) {
    formattedEntityAnnotation.mid = entityAnnotation.mid;
  }

  if (entityAnnotation.score) {
    formattedEntityAnnotation.score = entityAnnotation.score * 100;
  }

  if (entityAnnotation.boundingPoly) {
    formattedEntityAnnotation.bounds = entityAnnotation.boundingPoly.vertices;
  }

  if (is.defined(entityAnnotation.confidence)) {
    formattedEntityAnnotation.confidence = entityAnnotation.confidence * 100;
  }

  if (entityAnnotation.locations) {
    var locations = entityAnnotation.locations;
    formattedEntityAnnotation.locations = locations.map(prop('latLng'));
  }

  if (entityAnnotation.properties) {
    formattedEntityAnnotation.properties = entityAnnotation.properties;
  }

  return formattedEntityAnnotation;
};

/**
 * Format a raw error from the API.
 *
 * @private
 */
Vision.formatError_ = function(err) {
  var httpError = commonGrpc.Service.GRPC_ERROR_CODE_TO_HTTP[err.code];

  if (httpError) {
    err.code = httpError.code;
  }

  delete err.details;

  return err;
};

/**
 * Format a raw face annotation response from the API.
 *
 * @private
 */
Vision.formatFaceAnnotation_ = function(faceAnnotation) {
  function findLandmark(type) {
    var landmarks = faceAnnotation.landmarks;

    return landmarks.filter(function(landmark) {
      return landmark.type === type;
    })[0].position;
  }

  var formattedFaceAnnotation = {
    angles: {
      pan: faceAnnotation.panAngle,
      roll: faceAnnotation.rollAngle,
      tilt: faceAnnotation.tiltAngle
    },

    bounds: {
      head: faceAnnotation.boundingPoly.vertices,
      face: faceAnnotation.fdBoundingPoly.vertices
    },

    features: {
      confidence: faceAnnotation.landmarkingConfidence * 100,
      chin: {
        center: findLandmark('CHIN_GNATHION'),
        left: findLandmark('CHIN_LEFT_GONION'),
        right: findLandmark('CHIN_RIGHT_GONION')
      },
      ears: {
        left: findLandmark('LEFT_EAR_TRAGION'),
        right: findLandmark('RIGHT_EAR_TRAGION'),
      },
      eyebrows: {
        left: {
          left: findLandmark('LEFT_OF_LEFT_EYEBROW'),
          right: findLandmark('RIGHT_OF_LEFT_EYEBROW'),
          top: findLandmark('LEFT_EYEBROW_UPPER_MIDPOINT')
        },
        right: {
          left: findLandmark('LEFT_OF_RIGHT_EYEBROW'),
          right: findLandmark('RIGHT_OF_RIGHT_EYEBROW'),
          top: findLandmark('RIGHT_EYEBROW_UPPER_MIDPOINT')
        }
      },
      eyes: {
        left: {
          bottom: findLandmark('LEFT_EYE_BOTTOM_BOUNDARY'),
          center: findLandmark('LEFT_EYE'),
          left: findLandmark('LEFT_EYE_LEFT_CORNER'),
          pupil: findLandmark('LEFT_EYE_PUPIL'),
          right: findLandmark('LEFT_EYE_RIGHT_CORNER'),
          top: findLandmark('LEFT_EYE_TOP_BOUNDARY')
        },
        right: {
          bottom: findLandmark('RIGHT_EYE_BOTTOM_BOUNDARY'),
          center: findLandmark('RIGHT_EYE'),
          left: findLandmark('RIGHT_EYE_LEFT_CORNER'),
          pupil: findLandmark('RIGHT_EYE_PUPIL'),
          right: findLandmark('RIGHT_EYE_RIGHT_CORNER'),
          top: findLandmark('RIGHT_EYE_TOP_BOUNDARY')
        }
      },
      forehead: findLandmark('FOREHEAD_GLABELLA'),
      lips: {
        bottom: findLandmark('LOWER_LIP'),
        top: findLandmark('UPPER_LIP')
      },
      mouth: {
        center: findLandmark('MOUTH_CENTER'),
        left: findLandmark('MOUTH_LEFT'),
        right: findLandmark('MOUTH_RIGHT')
      },
      nose: {
        bottom: {
          center: findLandmark('NOSE_BOTTOM_CENTER'),
          left: findLandmark('NOSE_BOTTOM_LEFT'),
          right: findLandmark('NOSE_BOTTOM_RIGHT')
        },
        tip: findLandmark('NOSE_TIP'),
        top: findLandmark('MIDPOINT_BETWEEN_EYES')
      }
    },

    confidence: faceAnnotation.detectionConfidence * 100
  };

  // Remove the `Likelihood` part from a property name.
  // input: "joyLikelihood", output: "joy"
  for (var prop in faceAnnotation) {
    if (prop.indexOf('Likelihood') > -1) {
      var shortenedProp = prop.replace('Likelihood', '');

      formattedFaceAnnotation[shortenedProp] =
        Vision.gteLikelihood_(LIKELY, faceAnnotation[prop]);

      formattedFaceAnnotation[prop] = Vision.likelihood[faceAnnotation[prop]];
    }
  }

  return formattedFaceAnnotation;
};

/**
 * Format a raw full text annotation response from the API.
 *
 * @private
 */
Vision.formatFullTextAnnotation_ = function(fullTextAnnotation, options) {
  if (!options.verbose) {
    return fullTextAnnotation.text;
  }

  return fullTextAnnotation.pages
    .map(function(page) {
      return {
        languages: page.property.detectedLanguages.map(prop('languageCode')),
        width: page.width,
        height: page.height,
        blocks: page.blocks.map(function(block) {
          return {
            type: block.blockType,
            bounds: block.boundingBox && block.boundingBox.vertices || [],
            paragraphs: arrify(block.paragraphs)
              .map(function(paragraph) {
                return {
                  bounds: paragraph.boundingBox.vertices,
                  words: paragraph.words.map(function(word) {
                    return {
                      bounds: word.boundingBox.vertices,
                      symbols: word.symbols.map(function(symbol) {
                        return {
                          bounds: symbol.boundingBox.vertices,
                          text: symbol.text
                        };
                      })
                    };
                  })
                };
              })
          };
        })
      };
    });
};

/**
 * Format a raw image properties annotation response from the API.
 *
 * @private
 */
Vision.formatImagePropertiesAnnotation_ = function(imageAnnotation, options) {
  var formattedImageAnnotation = {
    colors: imageAnnotation.dominantColors.colors
      .map(function(colorObject) {
        var red = colorObject.color.red;
        var green = colorObject.color.green;
        var blue = colorObject.color.blue;

        var hex = rgbHex(red, green, blue);

        if (!options.verbose) {
          return hex;
        }

        colorObject.hex = hex;

        colorObject.red = red;
        colorObject.green = green;
        colorObject.blue = blue;
        delete colorObject.color;

        colorObject.coverage = colorObject.pixelFraction *= 100;
        delete colorObject.pixelFraction;

        colorObject.score *= 100;

        return colorObject;
      })
  };

  return formattedImageAnnotation;
};

/**
 * Format a raw SafeSearch annotation response from the API.
 *
 * @private
 */
Vision.formatSafeSearchAnnotation_ = function(ssAnnotation, options) {
  if (!options.verbose) {
    for (var prop in ssAnnotation) {
      var value = ssAnnotation[prop];
      ssAnnotation[prop] = Vision.gteLikelihood_(LIKELY, value);
    }
    return ssAnnotation;
  }

  return ssAnnotation;
};

/**
 * Format a raw web detection response from the API.
 *
 * @private
 */
Vision.formatWebDetection_ = function(webDetection, options) {
  function sortByScore(a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : 0;
  }

  var formattedWebDetection = {
    entities: arrify(webDetection.webEntities).map(prop('description')),

    fullMatches: arrify(webDetection.fullMatchingImages)
      .sort(sortByScore)
      .map(prop('url')),

    partialMatches: arrify(webDetection.partialMatchingImages)
      .sort(sortByScore)
      .map(prop('url')),

    pages: arrify(webDetection.pagesWithMatchingImages)
      .sort(sortByScore)
      .map(prop('url'))
  };

  if (!options.verbose) {
    // Combine all matches.
    formattedWebDetection = formattedWebDetection.fullMatches
      .concat(formattedWebDetection.partialMatches);
  }

  return formattedWebDetection;
};

/**
 * Convert a "likelihood" value to a boolean representation, based on the lowest
 * likelihood provided.
 *
 * @private
 *
 * @example
 * Vision.gteLikelihood_(Vision.likelihood.VERY_LIKELY, 'POSSIBLE');
 * // false
 *
 * Vision.gteLikelihood_(Vision.likelihood.UNLIKELY, 'POSSIBLE');
 * // true
 */
Vision.gteLikelihood_ = function(baseLikelihood, likelihood) {
  return Vision.likelihood[likelihood] >= baseLikelihood;
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Vision);

module.exports = Vision;
module.exports.v1 = v1;
