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

/*!
 * @alias module:gcloud
 */
var gcloud = {};

/**
 * [Google Cloud Datastore]{@link https://developers.google.com/datastore/} is a
 * fully managed, schemaless database for storing non-relational data. Use this
 * object to create a Dataset to interact with your data, an "Int", and a
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
gcloud.datastore = require('./datastore');

/**
 * **Experimental**
 *
 * [Google Cloud Pub/Sub]{@link https://developers.google.com/pubsub/overview}
 * is a reliable, many-to-many, asynchronous messaging service from Google Cloud
 * Platform.
 *
 * Note: Google Cloud Pub/Sub API is available as a Limited Preview and the
 * client library we provide is currently experimental. The API and/or the
 * client might be changed in backward-incompatible ways. This API is not
 * subject to any SLA or deprecation policy. Request to be whitelisted to use it
 * by filling the
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
gcloud.pubsub = require('./pubsub');

/**
 * Google Cloud Storage allows you to store data on Google infrastructure. Read
 * [Google Cloud Storage API docs]{@link https://developers.google.com/storage/}
 * for more information.
 *
 * You need to create a Google Cloud Storage bucket to use this client library.
 * Follow the steps on
 * [Google Cloud Storage docs]{@link https://developers.google.com/storage/} to
 * create a bucket.

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
gcloud.storage = require('./storage');

module.exports = gcloud;
