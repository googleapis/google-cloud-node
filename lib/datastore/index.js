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

/**
 * @type module:common/util
 * @private
 */
var util = require('../common/util.js');

/**
 * @type module:datastore/dataset
 * @private
 */
var Dataset = require('./dataset');

/*! Developer Documentation
 *
 * Invoking the Datastore class allows you to provide configuration up-front.
 * This configuration will be used for future invokations of the returned
 * `dataset` method.
 *
 * @example
 * var datastore = require('gcloud/lib/datastore')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var dataset = datastore.dataset();
 * // equal to:
 * //   datastore.dataset({
 * //     keyFilename: '/path/to/keyfile.json'
 * //   });
 */
/**
 * The example below will demonstrate the different usage patterns your app may
 * need to support to retrieve a datastore object.
 *
 * @alias module:datastore
 * @constructor
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * // Providing configuration details up-front.
 * var myProject = gcloud({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'my-project'
 * });
 *
 * var dataset = myProject.datastore.dataset();
 *
 *
 * // Overriding default configuration details.
 * var anotherDataset = myProject.datastore.dataset({
 *   keyFilename: '/path/to/another/keyfile.json'
 * });
 *
 *
 * // Not using a default configuration.
 * var myOtherProject = gcloud.datastore.dataset({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'my-project'
 * });
 */
function Datastore(config) {
  this.config = config || {};
}

/*! Developer Documentation
 *
 * Use this static method to create a dataset without any pre-configured
 * options.
 *
 * @example
 * var datastore = require('gcloud/lib/datastore');
 *
 * // Create a Dataset object.
 * var dataset = datastore.dataset({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 */
Datastore.dataset = Dataset;

/*! Developer Documentation
 *
 * Create a dataset using the instance method when you want to use your
 * pre-configured options from the Datastore instance.
 *
 * @param  {object=} options - Configuration object.
 * @return {module:datastore/dataset}
 */
Datastore.prototype.dataset = function(options) {
  options = options || {};
  // Mix in global config data to the provided options.
  return new Dataset(util.extendGlobalConfig(this.config, options));
};

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
Datastore.int = function(value) {
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
Datastore.double = function(value) {
  return new entity.Double(value);
};

module.exports = Datastore;
