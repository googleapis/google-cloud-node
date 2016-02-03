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
 * @type {module:datastore/entity}
 * @private
 */
var entity = require('./entity');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * @type {module:datastore/dataset}
 * @private
 */
var Dataset = require('./dataset');

/*! Developer Documentation
 *
 * Invoking the Datastore class allows you to provide configuration up-front.
 * This configuration will be used for future invocations of the returned
 * `dataset` method.
 *
 * @example
 * var datastore = gcloud.datastore;
 *
 * // datastore.dataset();
 * //
 * //   is equal to...
 * //
 * // datastore.dataset({
 * //   projectId: 'grape-spaceship-123',
 * //   keyFilename: '/path/to/keyfile.json'
 * // });
 */
/**
 * The example below will demonstrate the different usage patterns your app may
 * need to support to retrieve a datastore object.
 *
 * @alias module:datastore
 * @constructor
 *
 * @classdesc
 * The `gcloud.datastore` object gives you some convenience methods, as well as
 * exposes a `dataset` function. This will allow you to create a `dataset`,
 * which is the object from which you will interact with the Google Cloud
 * Datastore.
 *
 * To learn more about Datastore, read the
 * [Google Cloud Datastore Concepts Overview](https://cloud.google.com/datastore/docs/concepts/overview)
 *
 * @param {object} options - [Configuration object](#/docs).
 *
 * @example
 * var gcloud = require('gcloud')({
 *   projectId: 'grape-spaceship-123',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var datastore = gcloud.datastore;
 */
function Datastore(options) {
  this.config = options || {};
}

/*! Developer Documentation
 *
 * Use this static method to create a dataset without any pre-configured
 * options.
 *
 * @example
 * var datastore = gcloud.datastore;
 *
 * // Create a Dataset object.
 * var dataset = datastore.dataset({
 *   projectId: 'grape-spaceship-123',
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
/**
 * Create a Dataset object to reference an existing dataset.
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {string=} options.apiEndpoint - Override the default API endpoint used
 *     to reach Datastore. This is useful for connecting to your local Datastore
 *     server (usually "http://localhost:8080").
 * @param {string} options.namespace - Namespace to isolate transactions to.
 * @return {module:datastore/dataset}
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'my-project'
 * });
 *
 * var datastore = gcloud.datastore;
 * var dataset = datastore.dataset();
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
