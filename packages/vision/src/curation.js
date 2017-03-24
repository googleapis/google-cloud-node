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



module.exports = {
  /**
   * Remove annotation objects for features that were not requested.
   *
   * @private
   *
   * @param {array} annotations - A list of annotations to map.
   * @param {array} expectedTypes - A whitelist of annotation types that
   *      are retained.
   *
   * @example
   * Vision.removeExtraneousAnnotationObjects_([{
   *   faceAnnotations: {},
   *   labelAnnotations: {}
   * }], [types]);
   * // [{ faceAnnotations: {}}]
   */
  removeExtraneousAnnotations: function(annotations, expectedTypes) {
    expectedTypes = arrify(expectedTypes);

    // Sanity check: If there are no expected types, simply return
    // the unmodified annotations.
    if (expectedTypes.length === 0) {
      return annotations;
    }

    // Return only the annotation types that were asked for.
    return annotations.map(function(annotation, index) {
      // Convert the list of expected types to the list of types that
      // will be attached to the response annotations.
      var requestedTypes = expectedTypes.map(function(typeName) {
        return TYPE_SHORT_NAME_TO_RESPONSE_NAME[typeName];
      });

      // Additionally, we do not remove errors.
      requestedTypes.push('error');

      // Remove any properties that are not on our requested types whitelist.
      for (var prop in annotation) {
        if (requestedTypes.indexOf(prop) === -1) {
          delete annotation[prop];
        }
      }

      // Return the stripped down annotation.
      return annotation;
    });
  }
};
