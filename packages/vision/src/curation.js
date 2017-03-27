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
 * @module vision/curation
 *
 * A module containing stand-alone functions for curating responses that
 * come back from the Vision API.
 */

'use strict';

var arrify = require('arrify');


/**
 * Swap the keys and values of a dictionary like object.
 * If there are duplicate values, use the `resolve` callback to choose one.
 */
var swap = function(dict, resolve) {
  var answer = {};
  for (var key in dict) {
    var value = dict[key];
    if (typeof answer[value] === 'undefined') {
      answer[value] = key;
    }
    else {
      answer[value] = resolve(value, key, answer[value]);
    }
  }
  return answer;
}

// A mapping between the short names used within the client library,
// and the long names used in the API.
var TYPE_SHORT_NAME_TO_RESPONSE_NAME = {
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

// A reverse-mapping of the above.
// When resolving duplicate short names, we consistently use the longer
// candidate (e.g. "document", not "doc"; "logos", not "logo").
var TYPE_RESPONSE_NAME_TO_SHORT_NAME = swap(
  TYPE_SHORT_NAME_TO_RESPONSE_NAME,
  function(key, a, b) {
    if (a.length > b.length) {
      return a;
    }
    return b;
  }
);

/**
 * Return the "preferred" short name (the one returned from the
 * TYPE_RESPONSE_NAME_TO_SHORT_NAME mapping).
 *
 * @private
 *
 * @param {string} shortName - The short name.
 *
 * @return {string} - The preferred short name.
 *
 * @example
 * preferredShortName('label')   // 'labels'
 * preferredShortName('labels')  // 'labels'
 */
var preferredShortName = function(shortName) {
  return TYPE_RESPONSE_NAME_TO_SHORT_NAME[
    TYPE_SHORT_NAME_TO_RESPONSE_NAME[shortName]
  ];
}


module.exports = {
  /**
   * Denote the expected type of each annotation.
   *
   * The arrays for annotations and types are expected to be the same
   * length, and this function essentially "zips" them together by applying
   * the type onto the annotation object itself.
   *
   * @private
   *
   * @param {array} annotations - A list of annotations to have their
         type denoted.
   * @param {array} types - A list of types.
   *
   * @return {array} A list of modified annotations with their types added.
   */
  applyTypeToAnnotations: function(annotations, types) {
    return annotations.map(function(ann, index) {
      return Object.assign({}, ann, {_type: types[index]});
    });
  },


  /**
   * Remove detections that contain errors.
   *
   * @private
   *
   * @param {array} annotations - A list of typed annotations to map.
   *
   * @example
   * Vision.curations.removeDetectionsWithErrors([
   *   {
   *     faceAnnotations: [],
   *   },
   *   {
   *     error: {...},
   *     labelAnnotations: {}
   *   }
   * ]);
   * // [{ faceAnnotations: []}, undefined]
   */
  removeDetectionsWithErrors: function(annotations) {
    var errors = [];

    // Iterate over each annotation, looking for errata.
    annotations.forEach(function(annotation) {
      if (!is.empty(annotation.error)) {
        annotation.error.type = preferredShortName(annotation._type);
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


  /**
   * Remove annotation objects for features that were not requested.
   *
   * @private
   *
   * @param {array} annotations - A list of typed annotations to map.
   *
   * @example
   * Vision.curation.removeExtraneousAnnotations([{
   *   faceAnnotations: [],
   *   labelAnnotations: {}
   *   _type: 'face',
   * }]);
   * // [{ faceAnnotations: [], _type: 'face'}]
   */
  removeExtraneousAnnotations: function(annotations) {
    // Return a clone of the annotation with only the annotation types that
    // were asked for.
    return annotations.map(function(annotation) {
      annotation = Object.assign({}, annotation);

      // Declare the list of keys on this annotation that are retained.
      var whitelist = [
        '_type',
        'error',
        TYPE_SHORT_NAME_TO_RESPONSE_NAME[annotation._type]
      ];

      // Remove any properties that are not on our requested types whitelist.
      for (var prop in annotation) {
        if (whitelist.indexOf(prop) === -1) {
          delete annotation[prop];
        }
      }

      // Return the stripped down annotation.
      return annotation;
    });
  }
};
