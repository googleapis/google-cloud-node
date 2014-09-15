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
 * @type {module:datastore}
 * @private
 */
var Datastore = require('./datastore');

/**
 * @type {module:pubsub}
 * @private
 */
var pubsub = require('./pubsub');

/**
 * @type {module:storage}
 * @private
 */
var Storage = require('./storage');

/**
 * There are two key ways to use the `gcloud` module.
 *
 * 1. Provide connection & configuration details up-front.
 *
 * 2. Provide them at the time of instantiation of sub-modules, e.g. a Datastore
 * dataset, a Cloud Storage bucket, etc.
 *
 * If you are using Google App Engine or Google Compute Engine, your connection
 * details are handled for you. You won't have to worry about specifying these,
 * however you may find it advantageous to provide a `projectId` at
 * instantiation.
 *
 * To specify the configuration details up-front, invoke the gcloud module,
 * passing in an object. The properties defined on this object will be persisted
 * to the instantiation of every sub-module. It's important to note that you can
 * override any of these defaults when you invoke a sub-module later.
 *
 * You can invoke this module as many times as your project warrants. Each time,
 * your provided configuration will remain isolated to the returned gcloud
 * module.
 *
 * @alias module:gcloud
 * @constructor
 *
 * @param {object} config - Connection configuration options.
 * @param {string=} config.keyFilename - Full path to the JSON key downloaded
 *     from the Google Developers Console. Alternatively, you may provide a
 *     `credentials` object.
 * @param {object=} config.credentials - Credentials object.
 * @param {string} config.credentials.client_email
 * @param {string} config.credentials.private_key
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
 * var bucket = gcloud.storage.bucket({
 *   bucketName: 'PhotosBucket',
 *   // properties may be overriden:
 *   keyFilename: '/path/to/other/keyfile.json'
 * });
 */
function gcloud(config) {
  return {
    datastore: new Datastore(config),
    storage: new Storage(config)
  };
}

/**
 * [Google Cloud Datastore]{@link https://developers.google.com/datastore/} is
 * a fully managed, schemaless database for storing non-relational data. Use
 * this object to create a Dataset to interact with your data, an "Int", and a
 * "Double" representation.
 *
 * @type {module:datastore}
 *
 * @return {module:datastore}
 *
 * @example
 * var gcloud = require('gcloud');
 * var datastore = gcloud.datastore;
 *
 * // datastore:
 * // {
 * //   Dataset: function() {},
 * //   double: function() {},
 * //   int: function() {}
 * // }
 */
gcloud.datastore = Datastore;

/**
 * **Experimental**
 *
 * [Google Cloud Pub/Sub]{@link https://developers.google.com/pubsub/overview}
 * is a reliable, many-to-many, asynchronous messaging service from Google
 * Cloud Platform.
 *
 * Note: Google Cloud Pub/Sub API is available as a Limited Preview and the
 * client library we provide is currently experimental. The API and/or the
 * client might be changed in backward-incompatible ways. This API is not
 * subject to any SLA or deprecation policy. Request to be whitelisted to use
 * it by filling the
 * [Limited Preview application form]{@link http://goo.gl/sO0wTu}.
 *
 * @type {module:pubsub}
 *
 * @return {object}
 *
 * @example
 * var gcloud = require('gcloud');
 * var pubsub = gcloud.pubsub;
 *
 * var conn = new pubsub.Connection({
 *   projectId: YOUR_PROJECT_ID,
 *   keyFilename: '/path/to/the/key.json'
 * });
 */
gcloud.pubsub = pubsub;

/**
 * Google Cloud Storage allows you to store data on Google infrastructure.
 * Read
 * [Google Cloud Storage API docs]{@link https://developers.google.com/storage/}
 * for more information.
 *
 * You need to create a Google Cloud Storage bucket to use this client
 * library.
 * Follow the steps on
 * [Google Cloud Storage docs]{@link https://developers.google.com/storage/}
 * to create a bucket.

 * @type {module:storage}
 *
 * @return {module:storage}
 *
 * @example
 * var gcloud = require('gcloud');
 * var storage = gcloud.storage;
 *
 * // storage:
 * // {
 * //   Bucket: function() {}
 * // }
 */
gcloud.storage = Storage;

module.exports = gcloud;
