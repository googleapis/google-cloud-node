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
 * @module speech/operation
 */

'use strict';

var common = require('@google-cloud/common');
var events = require('events');
var modelo = require('modelo');

var OPERATION_FIELDS = [
  'name',
  'metadata',
  'done',
  'error',
  'response'
];

/**
 * @type {module:common/grpc-service-object}
 * @private
 */
var GrpcServiceObject = common.GrpcServiceObject;

/*! Developer Documentation
 *
 * @param {module:speech} service - Speech service instance.
 * @param {string} name - Name of the operation.
 */
/**
 * An Operation object allows you to interact with a Google Cloud Speech
 * operation.
 *
 * @constructor
 * @alias module:speech/operation
 *
 * @example
 * var gcloud = require('google-cloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 * var speech = gcloud.speech();
 *
 * var operation = speech.operation('6885083136681374325');
 */
function Operation(service, values) {
  this.service = service;
  this.pick_(values);

  GrpcServiceObject.call(this, {
    parent: service,
    id: this.name,
    methods: {}
  });

  events.EventEmitter.call(this);

  this.completeListeners = 0;
  this.hasActiveListeners = false;

  this.listenForEvents_();
}

modelo.inherits(Operation, GrpcServiceObject, events.EventEmitter);

/**
 * Gets the latest state of a long-running operation. Clients can use this
 * method to poll the operation result at intervals as recommended by the
 * API service.
 *
 * @resource [Operations: GetOperation API Documentation]{@link https://cloud.google.com/speech/reference/rpc/google.longrunning#operations}
 * @resource [Operations: Operation API Documentation]{@link https://cloud.google.com/speech/reference/rpc/google.longrunning#operation}
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.operation - The Operation object with its fields
 *     populated.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * var operation = speech.operation('6885083136681374325');
 * operation.get(function(err, operation, apiResponse) {
 *   console.log(operation);
 * });
 */
Operation.prototype.get = function(callback) {
  var self = this;
  var protoOpts = {
    service: 'Operations',
    method: 'getOperation'
  };
  var reqOpts = {
    name: this.name
  };

  this.service.request(protoOpts, reqOpts, function(err, apiResponse) {
    if (err) {
      callback(err, null, apiResponse);
      return;
    }
    var operation = self.service.operation(apiResponse);
    self.pick_(operation);
    callback(null, self, apiResponse);
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

  this.get(function(err, operation, apiResponse) {
    if (err || operation.error) {
      self.emit('error', err || operation.error);
      return;
    }

    if (!operation.done) {
      setTimeout(self.startPolling_.bind(self), 500);
      return;
    }

    self.emit('complete', operation, apiResponse);
  });
};

/**
 * Shallow copy the "name", "metadata", "done", "error", and "response" fields
 * from the provided object onto this operation instance.
 *
 * @param {object} values - The callback function.
 * @private
 */
Operation.prototype.pick_ = function(values) {
  var self = this;
  OPERATION_FIELDS.forEach(function(field) {
    self[field] = values[field];
  });
};

module.exports = Operation;
