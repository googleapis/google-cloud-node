/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
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
 * @module compute/operation
 */

'use strict';

var events = require('events');
var modelo = require('modelo');

/**
 * @type {module:common/service-object}
 * @private
 */
var ServiceObject = require('../common/service-object.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/*! Developer Documentation
 *
 * @param {module:compute} scope - The scope of the operation: a `Compute`,
 *     `Zone`, or `Region` object.
 * @param {string} name - Operation name.
 */
/**
 * An Operation object allows you to interact with a Google Compute Engine
 * operation.
 *
 * An operation can be a
 * [GlobalOperation](https://cloud.google.com/compute/docs/reference/v1/globalOperations),
 * [RegionOperation](https://cloud.google.com/compute/docs/reference/v1/regionOperations),
 * or
 * [ZoneOperation](https://cloud.google.com/compute/docs/reference/v1/zoneOperations).
 *
 * @constructor
 * @alias module:compute/operation
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var gce = gcloud.compute();
 *
 * //-
 * // Reference a global operation.
 * //-
 * var operation = gce.operation('operation-id');
 *
 * //-
 * // Reference a region operation.
 * //-
 * var region = gce.region('us-central1');
 * var operation = region.operation('operation-id');
 *
 * //-
 * // Reference a zone operation.
 * //-
 * var zone = gce.zone('us-central1-a');
 * var operation = zone.operation('operation-id');
 *
 * //-
 * // All operations are event emitters. The status of each operation is polled
 * // continuously, starting only after you register a "complete" listener.
 * //-
 * operation.on('complete', function(metadata) {
 *   // The operation is complete.
 * });
 *
 * //-
 * // You can register a listener to monitor when the operation begins running.
 * //-
 * operation.on('running', function(metadata) {
 *   // The operation is running.
 * });
 *
 * //-
 * // Be sure to register an error handler as well to catch any issues which
 * // impeded the operation.
 * //-
 * operation.on('error', function(err) {
 *   // An error occurred during the operation.
 * });
 *
 * //-
 * // To force the Operation object to stop polling for updates, simply remove
 * // any "complete" listeners you've registered.
 * //
 * // The easiest way to do this is with `removeAllListeners()`.
 * //-
 * operation.removeAllListeners();
 */
function Operation(scope, name) {
  var isCompute = scope.constructor.name === 'Compute';

  var methods = {
    /**
     * Delete the operation.
     *
     * @resource [GlobalOperations: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/globalOperations/delete}
     * @resource [RegionOperations: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/regionOperations/delete}
     * @resource [ZoneOperations: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/zoneOperations/delete}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * operation.delete(function(err, apiResponse) {});
     */
    delete: true,

    /**
     * Check if the operation exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the operation exists or not.
     *
     * @example
     * operation.exists(function(err, exists) {});
     */
    exists: true,

    /**
     * Get an operation if it exists.
     *
     * @example
     * operation.get(function(err, operation, apiResponse) {
     *   // `operation` is an Operation object.
     * });
     */
    get: true
  };

  ServiceObject.call(this, {
    parent: scope,
    baseUrl: isCompute ? '/global/operations' : '/operations',
    id: name,
    methods: methods
  });

  events.EventEmitter.call(this);

  this.completeListeners = 0;
  this.hasActiveListeners = false;
  this.name = name;

  this.listenForEvents_();
}

modelo.inherits(Operation, ServiceObject, events.EventEmitter);

/**
 * Get the operation's metadata. For a detailed description of metadata see
 * [Operation resource](https://goo.gl/sWm1rt).
 *
 * @resource [GlobalOperations: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/globalOperations/get}
 * @resource [RegionOperations: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/regionOperations/get}
 * @resource [ZoneOperations: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/zoneOperations/get}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object} callback.metadata - The disk's metadata.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * operation.getMetadata(function(err, metadata, apiResponse) {
 *   // `metadata.error`: Contains errors if the operation failed.
 *   // `metadata.warnings`: Contains warnings.
 * });
 */
Operation.prototype.getMetadata = function(callback) {
  var self = this;

  callback = callback || util.noop;

  ServiceObject.prototype.getMetadata.call(this, function(err, apiResponse) {
    // An Operation entity contains a property named `error`. This makes
    // `request` think the operation failed, and will return an ApiError to
    // this callback. We have to make sure this isn't a false error by seeing if
    // the response body contains a property that wouldn't exist on a failed API
    // request (`name`).
    var requestFailed = err && (!apiResponse || apiResponse.name !== self.name);

    if (requestFailed) {
      callback(err, null, apiResponse);
      return;
    }

    self.metadata = apiResponse;

    callback(null, self.metadata, apiResponse);
  });
};

/**
 * Begin listening for events on the operation. This method keeps track of how
 * many "complete" listeners are registered and removed, making sure polling is
 * handled automatically.
 *
 * As long as there is one active "complete" listener, the connection is open.
 * When there are no more listeners, the polling stops.
 *
 * @private
 */
Operation.prototype.listenForEvents_ = function() {
  var self = this;

  this.on('newListener', function(event) {
    if (event === 'complete') {
      self.completeListeners++;

      if (!self.hasActiveListeners) {
        self.hasActiveListeners = true;
        self.startPolling_();
      }
    }
  });

  this.on('removeListener', function(event) {
    if (event === 'complete' && --self.completeListeners === 0) {
      self.hasActiveListeners = false;
    }
  });
};

/**
 * Poll `getMetadata` to check the operation's status. This runs a loop to ping
 * the API on an interval.
 *
 * Note: This method is automatically called once a "complete" event handler is
 * registered on the operation.
 *
 * @private
 */
Operation.prototype.startPolling_ = function() {
  var self = this;

  if (!this.hasActiveListeners) {
    return;
  }

  this.getMetadata(function(err, metadata, apiResponse) {
    // Parsing the response body will automatically create an ApiError object if
    // the operation failed.
    var parsedHttpRespBody = util.parseHttpRespBody(apiResponse);
    err = err || parsedHttpRespBody.err;

    if (err) {
      self.emit('error', err);
      return;
    }

    if (metadata.status === 'RUNNING' && !self.status) {
      self.status = metadata.status;
      self.emit('running', metadata);
    }

    if (metadata.status !== 'DONE') {
      setTimeout(self.startPolling_.bind(self), 500);
      return;
    }

    self.status = metadata.status;
    self.emit('complete', metadata);
  });
};

module.exports = Operation;
