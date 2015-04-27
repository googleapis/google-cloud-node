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
 * @module gcloud
 */

'use strict';

/**
 * @type {module:bigquery}
 * @private
 */
var BigQuery = require('./bigquery');

/**
 * @type {module:datastore}
 * @private
 */
var Datastore = require('./datastore');

/**
 * @type {module:pubsub}
 * @private
 */
var PubSub = require('./pubsub');

/**
 * @type {module:storage}
 * @private
 */
var Storage = require('./storage');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('./common/util.js');

/**
 * There are two key ways to use the `gcloud` module.
 *
 * 1. Provide connection & configuration details up-front.
 *
 * 2. Provide them at the time of instantiation of sub-modules, e.g. a Datastore
 * dataset, a Cloud Storage bucket, etc.
 *
 * See our [Authorization Guide](#/authorization) for how to obtain the
 * necessary credentials for connecting to your project.
 *
 * @alias module:gcloud
 * @constructor
 *
 * @param {object} config - Connection configuration options.
 * @param {string=} config.keyFilename - Full path to the a .json, .pem, or .p12
 *     key downloaded from the Google Developers Console. NOTE: .pem and .p12
 *     require you to specify `config.email` as well.
 * @param {string=} config.email - Account email address. Required when using a
 *     .pem or .p12 keyFilename.
 * @param {object=} config.credentials - Credentials object.
 * @param {string} config.credentials.client_email
 * @param {string} config.credentials.private_key
 * @param {boolean=} config.autoRetry - Automatically retry requests if the
 *     response is related to rate limits or certain intermittent server errors.
 *     We will exponentially backoff subsequent requests by default. (default:
 *     true)
 * @param {number=} config.maxRetries - Maximum number of automatic retries
 *     attempted before returning the error. (default: 3)
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'my-project'
 * });
 *
 * var dataset = gcloud.datastore.dataset();
 * // equal to:
 * //   gcloud.datastore.dataset({
 * //     keyFilename: '/path/to/keyfile.json',
 * //     projectId: 'my-project'
 * //   });
 *
 * var storage = gcloud.storage();
 * var bucket = storage.bucket({
 *   name: 'PhotosBucket',
 *   // properties may be overridden:
 *   keyFilename: '/path/to/other/keyfile.json'
 * });
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'my-project',
 *   maxRetries: 5 // retry rate limited requests 5 times before giving up
 * });
 */
function gcloud(config) {
  return {
    bigquery: function(options) {
      options = options || {};
      return new BigQuery(util.extendGlobalConfig(config, options));
    },
    datastore: new Datastore(config),
    pubsub: function(options) {
      options = options || {};
      return new PubSub(util.extendGlobalConfig(config, options));
    },
    storage: function(options) {
      options = options || {};
      return new Storage(util.extendGlobalConfig(config, options));
    }
  };
}

/**
 * Analyze Big Data in the cloud with
 * [Google BigQuery](https://cloud.google.com/bigquery). Run fast, SQL-like
 * queries against multi-terabyte datasets in seconds. Scalable and easy to use,
 * BigQuery gives you real-time insights about your data.
 *
 * @type {module:bigquery}
 *
 * @return {module:bigquery}
 *
 * @example
 * var gcloud = require('gcloud');
 * var bigquery = gcloud.bigquery({
 *   projectId: 'project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 */
gcloud.bigquery = BigQuery;

/**
 * [Google Cloud Datastore](https://developers.google.com/datastore/) is a fully
 * managed, schemaless database for storing non-relational data. Use this object
 * to create a Dataset to interact with your data, an "Int", and a "Double"
 * representation.
 *
 * @type {module:datastore}
 *
 * @return {module:datastore}
 *
 * @example
 * var gcloud = require('gcloud');
 * var datastore = gcloud.datastore;
 * var dataset = datastore.dataset({
 *   projectId: 'project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 */
gcloud.datastore = Datastore;

/**
 * **Experimental**
 *
 * [Google Cloud Pub/Sub](https://developers.google.com/pubsub/overview) is a
 * reliable, many-to-many, asynchronous messaging service from Google Cloud
 * Platform.
 *
 * Note: Google Cloud Pub/Sub API is available as a Limited Preview and the
 * client library we provide is currently experimental. The API and/or the
 * client might be changed in backward-incompatible ways. This API is not
 * subject to any SLA or deprecation policy. Request to be whitelisted to use it
 * by filling the [Limited Preview application form](http://goo.gl/sO0wTu).
 *
 * @type {module:pubsub}
 *
 * @return {module:pubsub}
 *
 * @example
 * var gcloud = require('gcloud');
 * var pubsub = gcloud.pubsub({
 *   projectId: 'project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 */
gcloud.pubsub = function(config) {
  return new PubSub(config);
};

/**
 * Google Cloud Storage allows you to store data on Google infrastructure.
 * Read [Google Cloud Storage API docs](https://developers.google.com/storage/)
 * for more information.
 *
 * @type {module:storage}
 *
 * @return {module:storage}
 *
 * @example
 * var gcloud = require('gcloud');
 * var storage = gcloud.storage({
 *   projectId: 'project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 */
gcloud.storage = Storage;

module.exports = gcloud;
