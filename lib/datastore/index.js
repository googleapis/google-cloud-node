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

var arrify = require('arrify');
var is = require('is');
var modelo = require('modelo');

/**
 * @type {module:datastore/request}
 * @private
 */
var DatastoreRequest = require('./request.js');

/**
 * @type {module:datastore/entity}
 * @private
 */
var entity = require('./entity.js');

/**
 * @type {module:datastore/query}
 * @private
 */
var Query = require('./query.js');

/**
 * @type {module:common/grpcService}
 * @private
 */
var GrpcService = require('../common/grpc-service.js');

/**
 * @type {module:datastore/transaction}
 * @private
 */
var Transaction = require('./transaction.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * Interact with the
 * [Google Cloud Datastore](https://developers.google.com/datastore/).
 *
 * @constructor
 * @alias module:datastore
 * @mixes module:datastore/request
 *
 * @classdesc
 * The `gcloud.datastore` object allows you to interact with Google Cloud
 * Datastore.
 *
 * To learn more about Datastore, read the
 * [Google Cloud Datastore Concepts Overview](https://cloud.google.com/datastore/docs/concepts/overview)
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {string=} options.apiEndpoint - Override the default API endpoint used
 *     to reach Datastore. This is useful for connecting to your local Datastore
 *     server (usually "http://localhost:8080").
 * @param {string} options.namespace - Namespace to isolate transactions to.
 *
 * @example
 * var gcloud = require('gcloud')({
 *   projectId: 'grape-spaceship-123',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var datastore = gcloud.datastore();
 *
 * //-
 * // Connect to your local Datastore server.
 * //-
 * var datastore = gcloud.datastore({
 *   apiEndpoint: 'http://localhost:8080'
 * });
 *
 * //-
 * // The `DATASTORE_EMULATOR_HOST` environment variable is also recognized. If
 * // set, you may omit the `apiEndpoint` option.
 * //
 * // Additionally, `DATASTORE_PROJECT_ID` is recognized. If you have this set,
 * // you don't need to provide a `projectId`.
 * //-
 */
function Datastore(options) {
  if (!(this instanceof Datastore)) {
    options = util.normalizeArguments(this, options, {
      projectIdRequired: false
    });
    return new Datastore(options);
  }

  this.defaultBaseUrl_ = 'datastore.googleapis.com';
  this.determineBaseUrl_(options.apiEndpoint);

  this.namespace = options.namespace;
  this.projectId = process.env.DATASTORE_PROJECT_ID || options.projectId;

  var config = {
    projectIdRequired: false,
    baseUrl: this.baseUrl_,
    customEndpoint: this.customEndpoint_,
    service: 'datastore',
    apiVersion: 'v1beta3',
    scopes: ['https://www.googleapis.com/auth/datastore']
  };

  GrpcService.call(this, config, options);
}

modelo.inherits(Datastore, DatastoreRequest, GrpcService);

/**
 * Helper function to get a Datastore Double object.
 *
 * @param {number} value - The double value.
 * @return {object}
 *
 * @example
 * var threeDouble = gcloud.datastore.double(3.0);
 */
Datastore.double = function(value) {
  return new entity.Double(value);
};

/**
 * Helper function to get a Datastore Geo Point object.
 *
 * @param {object} coordinates - Coordinate value.
 * @param {number} coordinates.latitude - Latitudinal value.
 * @param {number} coordinates.longitude - Longitudinal value.
 * @return {object}
 *
 * @example
 * var coordinates = {
 *   latitude: 40.6894,
 *   longitude: -74.0447
 * };
 *
 * var geoPoint = gcloud.datastore.geoPoint(coordinates);
 */
Datastore.geoPoint = function(coordindates) {
  return new entity.GeoPoint(coordindates);
};

/**
 * Helper function to get a Datastore Integer object.
 *
 * @param {number} value - The integer value.
 * @return {object}
 *
 * @example
 * var sevenInteger = gcloud.datastore.int(7);
 */
Datastore.int = function(value) {
  return new entity.Int(value);
};

/**
 * Create a query for the specified kind.
 *
 * @resource [Datastore Queries]{@link https://cloud.google.com/datastore/docs/concepts/queries}
 *
 * @see {module:datastore/query}
 *
 * @param {string=} namespace - Namespace.
 * @param {string} kind - The kind to query.
 * @return {module:datastore/query}
 */
Datastore.prototype.createQuery = function(namespace, kind) {
  if (arguments.length === 1) {
    kind = arrify(namespace);
    namespace = this.namespace;
  }

  return new Query(namespace, arrify(kind));
};

/**
 * Helper to create a Key object, scoped to the instance's namespace by default.
 *
 * You may also specify a configuration object to define a namespace and path.
 *
 * @param {...*=} options - Key path. To specify or override a namespace,
 *     you must use an object here to explicitly state it.
 * @param {object=} options - Configuration object.
 * @param {...*=} options.path - Key path.
 * @param {string=} options.namespace - Optional namespace.
 * @return {Key} A newly created Key from the options given.
 *
 * @example
 * //-
 * // Create an incomplete key with a kind value of `Company`.
 * //-
 * var key = datastore.key('Company');
 *
 * //-
 * // Create a complete key with a kind value of `Company` and id `123`.
 * //-
 * var key = datastore.key(['Company', 123]);
 *
 * //-
 * // Create a complete key with a kind value of `Company` and name `Google`.
 * // Note: `id` is used for numeric identifiers and `name` is used otherwise.
 * //-
 * var key = datastore.key(['Company', 'Google']);
 *
 * //-
 * // Create a complete key from a provided namespace and path.
 * //-
 * var key = datastore.key({
 *   namespace: 'My-NS',
 *   path: ['Company', 123]
 * });
 */
Datastore.prototype.key = function(options) {
  options = is.object(options) ? options : {
    namespace: this.namespace,
    path: arrify(options)
  };

  return new entity.Key(options);
};

/**
 * Run a function in the context of a new transaction. Transactions allow you to
 * perform multiple operations, committing your changes atomically. When you are
 * finished making your changes within the transaction, run the done() function
 * provided in the callback function to commit your changes. See an example
 * below for more information.
 *
 * @param {function} fn - The function to run in the context of a transaction.
 * @param {module:datastore/transaction} fn.transaction - The Transaction.
 * @param {function} fn.done - Function used to commit changes.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 *
 * @example
 * datastore.runInTransaction(function(transaction, done) {
 *   // From the `transaction` object, execute datastore methods as usual.
 *   transaction.get(datastore.key(['Company', 123]), function(err, entity) {
 *     if (err) {
 *       transaction.rollback(done);
 *       return;
 *     }
 *
 *     // Call `done` when you're ready to commit your changes.
 *     done();
 *   });
 * }, function(err, apiResponse) {});
 */
Datastore.prototype.runInTransaction = function(fn, callback) {
  var newTransaction = this.createTransaction_();

  newTransaction.begin_(function(err, resp) {
    if (err) {
      callback(err, resp);
      return;
    }

    fn(newTransaction, newTransaction.commit_.bind(newTransaction, callback));
  });
};

/**
 * Create a new Transaction object.
 *
 * @return {module:datastore/transaction}
 * @private
 */
Datastore.prototype.createTransaction_ = function() {
  return new Transaction(this);
};

/**
 * Determine the appropriate endpoint to use for API requests. If not explicitly
 * defined, check for the "DATASTORE_EMULATOR_HOST" environment variable, used
 * to connect to a local Datastore server.
 *
 * @private
 *
 * @param {string} customApiEndpoint - Custom API endpoint.
 */
Datastore.prototype.determineBaseUrl_ = function(customApiEndpoint) {
  var baseUrl = this.defaultBaseUrl_;
  var leadingProtocol = new RegExp('^https*://');
  var trailingSlashes = new RegExp('/*$');

  if (customApiEndpoint) {
    baseUrl = customApiEndpoint;
    this.customEndpoint_ = true;
  } else if (process.env.DATASTORE_EMULATOR_HOST) {
    baseUrl = process.env.DATASTORE_EMULATOR_HOST;
    this.customEndpoint_ = true;
  }

  this.baseUrl_ = baseUrl
    .replace(leadingProtocol, '')
    .replace(trailingSlashes, '');
};

module.exports = Datastore;
