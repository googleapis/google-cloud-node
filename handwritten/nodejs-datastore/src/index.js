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
var common = require('@google-cloud/common');
var commonGrpc = require('@google-cloud/common-grpc');
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
 * @type {module:datastore/transaction}
 * @private
 */
var Transaction = require('./transaction.js');

/**
 * @constructor
 * @alias module:datastore
 * @mixes module:datastore/request
 *
 * @resource [Cloud Datastore Concepts Overview]{@link https://cloud.google.com/datastore/docs/concepts/overview}
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {string=} options.apiEndpoint - Override the default API endpoint used
 *     to reach Datastore. This is useful for connecting to your local Datastore
 *     server (usually "http://localhost:8080").
 * @param {string} options.namespace - Namespace to isolate transactions to.
 *
 * @example
 * //-
 * // <h3>The Datastore Emulator</h3>
 * //
 * // Make sure you have the <a href="https://cloud.google.com/sdk/downloads">
 * // gcloud SDK installed</a>, then run:
 * //
 * // <pre>
 * //   $ gcloud beta emulators datastore start --no-legacy
 * // </pre>
 * //
 * // You will see the following printed:
 * //
 * // <pre>
 * //   [datastore] API endpoint: http://localhost:8005
 * //   [datastore] If you are using a library that supports the
 * //               DATASTORE_EMULATOR_HOST environment variable, run:
 * //   [datastore]
 * //   [datastore]   export DATASTORE_EMULATOR_HOST=localhost:8005
 * //   [datastore]
 * //   [datastore] Dev App Server is now running.
 * // </pre>
 * //
 * // Set that environment variable and your localhost Datastore will
 * // automatically be used. You can also pass this address in manually with
 * // `apiEndpoint`.
 * //
 * // Additionally, `DATASTORE_PROJECT_ID` is recognized. If you have this set,
 * // you don't need to provide a `projectId`.
 * //-
 *
 * //-
 * // <h3>Retrieving Records</h3>
 * //
 * // Records, called "entities" in Datastore, are retrieved by using a key. The
 * // key is more than a numeric identifier, it is a complex data structure that
 * // can be used to model relationships. The simplest key has a string `kind`
 * // value, and either a numeric `id` value, or a string `name` value.
 * //
 * // A single record can be retrieved with {module:datastore#key} and
 * // {module:datastore#get}.
 * //-
 * var key = datastore.key(['Company', 'Google']);
 *
 * datastore.get(key, function(err, entity) {
 *   // entity = The record.
 *   // entity[datastore.KEY] = The key for this entity.
 * });
 *
 * //-
 * // <h3>Querying Records</h3>
 * //
 * // Create a query with {module:datastore#createQuery}.
 * //-
 * var query = datastore.createQuery('Company');
 *
 * //-
 * // Multiple records can be found that match criteria with
 * // {module:datastore/query#filter}.
 * //-
 * query.filter('location', 'CA');
 *
 * //-
 * // Records can also be ordered with {module:datastore/query#order}.
 * //-
 * query.order('name');
 *
 * //-
 * // The number of records returned can be specified with
 * // {module:datastore/query#limit}.
 * //-
 * query.limit(5);
 *
 * //-
 * // Records' key structures can also be queried with
 * // {module:datastore/query#hasAncestor}.
 * //-
 * var ancestorKey = datastore.key(['ParentCompany', 'Alphabet']);
 *
 * query.hasAncestor(ancestorKey);
 *
 * //-
 * // Run the query with {module:datastore#runQuery}.
 * //-
 * datastore.runQuery(query, function(err, entities) {
 *   // entities = An array of records.
 *
 *   // Access the Key object for an entity.
 *   var firstEntityKey = entities[0][datastore.KEY];
 * });
 *
 * //-
 * // <h3>Paginating Records</h3>
 * //
 * // Imagine building a website that allows a user to sift through hundreds of
 * // their contacts. You'll likely want to only display a subset of these at
 * // once, so you set a limit.
 * //-
 * var express = require('express');
 * var app = express();
 *
 * var NUM_RESULTS_PER_PAGE = 15;
 *
 * app.get('/contacts', function(req, res) {
 *   var query = datastore.createQuery('Contacts')
 *     .limit(NUM_RESULTS_PER_PAGE);
 *
 *   if (req.query.nextPageCursor) {
 *     query.start(req.query.nextPageCursor);
 *   }
 *
 *   datastore.runQuery(query, function(err, entities, info) {
 *     if (err) {
 *       // Error handling omitted.
 *       return;
 *     }
 *
 *     // Respond to the front end with the contacts and the cursoring token
 *     // from the query we just ran.
 *     var frontEndResponse = {
 *       contacts: entities
 *     };
 *
 *     // Check if  more results may exist.
 *     if (info.moreResults !== datastore.NO_MORE_RESULTS) {
 *       frontEndResponse.nextPageCursor = info.endCursor;
 *     }
 *
 *     res.render('contacts', frontEndResponse);
 *   });
 * });
 *
 * //-
 * // <h3>Creating Records</h3>
 * //
 * // New entities can be created and persisted with {module:datastore#save}.
 * // The entitiy must have a key to be saved. If you don't specify an
 * // identifier for the key, one is generated for you.
 * //
 * // We will create a key with a `name` identifier, "Google".
 * //-
 * var key = datastore.key(['Company', 'Google']);
 *
 * var data = {
 *   name: 'Google',
 *   location: 'CA'
 * };
 *
 * datastore.save({
 *   key: key,
 *   data: data
 * }, function(err) {
 *   if (!err) {
 *     // Record saved successfully.
 *   }
 * });
 *
 * //-
 * // We can verify the data was saved by using {module:datastore#get}.
 * //-
 * datastore.get(key, function(err, entity) {
 *   // entity = {
 *   //   name: 'Google',
 *   //   location: 'CA'
 *   // }
 * });
 *
 * //-
 * // If we want to update this record, we can modify the data object and re-
 * // save it.
 * //-
 * data.symbol = 'GOOG';
 *
 * datastore.save({
 *   key: key, // defined above (datastore.key(['Company', 'Google']))
 *   data: data
 * }, function(err, entity) {
 *   if (!err) {
 *     // Record updated successfully.
 *   }
 * });
 *
 * //-
 * // <h3>Deleting Records</h3>
 * //
 * // Entities can be removed from Datastore by passing the entity's key object
 * // to {module:datastore#delete}.
 * //-
 * var key = datastore.key(['Company', 'Google']);
 *
 * datastore.delete(key, function(err) {
 *   if (!err) {
 *     // Record deleted successfully.
 *   }
 * });
 *
 * //-
 * // <h3>Transactions</h3>
 * //
 * // Complex logic can be wrapped in a transaction with
 * // {module:datastore#transaction}. All queries and updates run within
 * // the transaction will be applied when the `done` function is called.
 * //-
 * var transaction = datastore.transaction();
 *
 * transaction.run(function(err) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   var key = datastore.key(['Company', 'Google']);
 *
 *   transaction.get(key, function(err, entity) {
 *     if (err) {
 *       // Error handling omitted.
 *     }
 *
 *     entity.symbol = 'GOOG';
 *
 *     transaction.save(entity);
 *
 *     transaction.commit(function(err) {
 *       if (!err) {
 *         // Transaction committed successfully.
 *       }
 *     });
 *   });
 * });
 */
function Datastore(options) {
  if (!(this instanceof Datastore)) {
    options = common.util.normalizeArguments(this, options, {
      projectIdRequired: false
    });
    return new Datastore(options);
  }

  this.defaultBaseUrl_ = 'datastore.googleapis.com.';
  this.determineBaseUrl_(options.apiEndpoint);

  this.namespace = options.namespace;
  this.projectId = process.env.DATASTORE_PROJECT_ID || options.projectId;

  var config = {
    projectIdRequired: false,
    baseUrl: this.baseUrl_,
    customEndpoint: this.customEndpoint_,
    service: 'datastore',
    apiVersion: 'v1',
    scopes: ['https://www.googleapis.com/auth/datastore'],
    packageJson: require('../package.json'),
    grpcMetadata: {
      'google-cloud-resource-prefix': 'projects/' + this.projectId
    }
  };

  commonGrpc.Service.call(this, config, options);
}

modelo.inherits(Datastore, DatastoreRequest, commonGrpc.Service);

/**
 * Helper function to get a Datastore Double object.
 *
 * @param {number} value - The double value.
 * @return {object}
 *
 * @example
 * var threeDouble = datastore.double(3.0);
 */
Datastore.prototype.double = Datastore.double = function(value) {
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
 * var geoPoint = datastore.geoPoint(coordinates);
 */
Datastore.prototype.geoPoint = Datastore.geoPoint = function(coordindates) {
  return new entity.GeoPoint(coordindates);
};

/**
 * Helper function to get a Datastore Integer object.
 *
 * This is also useful when using an ID outside the bounds of a JavaScript
 * Number object.
 *
 * @param {number} value - The integer value.
 * @return {object}
 *
 * @example
 * var sevenInteger = datastore.int(7);
 *
 * //-
 * // Create an Int to support long Key IDs.
 * //-
 * var key = datastore.key([
 *   'Kind',
 *   datastore.int('100000000000001234')
 * ]);
 */
Datastore.prototype.int = Datastore.int = function(value) {
  return new entity.Int(value);
};

/**
 * Access the Key from an Entity object.
 *
 * @type {symbol}
 */
Datastore.prototype.KEY = Datastore.KEY = entity.KEY_SYMBOL;

/**
 * This is one of three values which may be returned from
 * {module:datastore#runQuery}, {module:transaction#runQuery}, and
 * {module:datastore/query#run} as `info.moreResults`.
 *
 * There *may* be more results after the specified end cursor.
 *
 * @type {string}
 */
Datastore.prototype.MORE_RESULTS_AFTER_CURSOR =
Datastore.MORE_RESULTS_AFTER_CURSOR = 'MORE_RESULTS_AFTER_CURSOR';

/**
 * This is one of three values which may be returned from
 * {module:datastore#runQuery}, {module:transaction#runQuery}, and
 * {module:datastore/query#run} as `info.moreResults`.
 *
 * There *may* be more results after the specified limit.
 *
 * @type {string}
 */
Datastore.prototype.MORE_RESULTS_AFTER_LIMIT =
Datastore.MORE_RESULTS_AFTER_LIMIT = 'MORE_RESULTS_AFTER_LIMIT';

/**
 * This is one of three values which may be returned from
 * {module:datastore#runQuery}, {module:transaction#runQuery}, and
 * {module:datastore/query#run} as `info.moreResults`.
 *
 * There are no more results left to query for.
 *
 * @type {string}
 */
Datastore.prototype.NO_MORE_RESULTS =
Datastore.NO_MORE_RESULTS = 'NO_MORE_RESULTS';

/**
 * Create a query for the specified kind. See {module:datastore/query} for all
 * of the available methods.
 *
 * @resource [Datastore Queries]{@link https://cloud.google.com/datastore/docs/concepts/queries}
 *
 * @see {module:datastore/query}
 *
 * @param {string=} namespace - Namespace.
 * @param {string} kind - The kind to query.
 * @return {module:datastore/query}
 *
 * @example
 * var query = datastore.createQuery('Company');
 */
Datastore.prototype.createQuery = function(namespace, kind) {
  if (arguments.length === 1) {
    kind = arrify(namespace);
    namespace = this.namespace;
  }

  return new Query(this, namespace, arrify(kind));
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
 * // If the ID integer is outside the bounds of a JavaScript Number object,
 * // create an Int.
 * //-
 * var key = datastore.key([
 *   'Company',
 *   datastore.int('100000000000001234')
 * ]);
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
 * Create a new Transaction object.
 *
 * @return {module:datastore/transaction}
 * @private
 */
Datastore.prototype.transaction = function() {
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

Datastore.DatastoreRequest = DatastoreRequest;
Datastore.Query = Query;
Datastore.Transaction = Transaction;

module.exports = Datastore;
module.exports.v1 = require('./v1');
