/*!
 * Copyright 2014 Google Inc. All Rights Reserved.
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
 * @module datastore
 */

'use strict';

/**
 * @type module:datastore/entity
 * @private
 */
var entity = require('./entity');

/*!
 * @alias module:datastore
 */
var datastore = {};

/**
 * @see {module:datastore/dataset}
 *
 * @example
 * var gcloud = require('gcloud');
 * var datastore = gcloud.datastore;
 *
 * // Create a Dataset object.
 * var dataset = new datastore.Dataset();
 */
datastore.Dataset = require('./dataset');

/**
 * Helper function to get a Datastore Integer object.
 *
 * @param {number} value - The integer value.
 * @return {object}
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * // Create an Integer.
 * var sevenInteger = gcloud.datastore.int(7);
 */
datastore.int = function(value) {
  return new entity.Int(value);
};

/**
 * Helper function to get a Datastore Double object.
 *
 * @param {number} value - The double value.
 * @return {object}
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * // Create a Double.
 * var threeDouble = gcloud.datastore.double(3.0);
 */
datastore.double = function(value) {
  return new entity.Double(value);
};

module.exports = datastore;
