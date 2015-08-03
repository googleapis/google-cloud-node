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
 * @module compute/operation
 */

'use strict';

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * Create an Operation object to interact with a Google Compute Engine
 *     operation.
 *
 * @constructor
 *
 * @throws {Error} if an operation name is not provided.
 *
 * @param {module:compute} scope - The scope of the operation, can be either a
 *     `Compute` object, a `Zone` object or a `Region` object.
 * @param {string} name - Operation name.
 * @param {object=} metadata - Operation metadata.
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var compute = gcloud.compute();
 * var myZone = compute.zone('example-zone');
 * var myRegion = compute.region('example-region');
 *
 * var globalOperation = compute.operation('global-operation');
 * var regionOperation = myRegion.operation('region-operation');
 * var zoneOperation = myZone.operation('zone-operation');
 */
function Operation(scope, name, metadata) {
  this.scope = scope;
  this.name = name;
  this.metadata = metadata;

  if (!util.is(this.name, 'string')) {
    throw new Error('A name is needed to use a Compute Engine Operation.');
  }
}

/**
 * Delete the operation.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * operation.delete(function(err) {});
 */
Operation.prototype.delete = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('DELETE', '', null, true, callback);
};

/**
 * Get the operation's metadata. For a detailed description of metadata see
 * [Operation resource](https://goo.gl/sWm1rt).
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * operation.getMetadata(function(err, metadata, apiResponse) {});
 *
 * //-
 * // To check the status of an operation and its progress `getMetadata` in
 * // combination with `setTimeout` can be used.
 * //-
 * var checkStatus = function() {
 *   operation.getMetadata(function(err, metadata, apiResponse) {
 *     if (err) {
 *       // An error occurred
 *     } else {
 *       if (metadata.status === 'DONE') {
 *         // the operation completed
 *         // `metadata.error` is set with errors if the operation failed
 *         // `metadata.warnings` possibly contains warnings
 *       } else {
 *         // `metadata.progress` is a progress indicator in [0,100]
 *         setTimeout(checkStatus, 10);
 *       }
 *     }
 *   });
 * };
 *
 * setTimeout(checkStatus, 10);
 */
Operation.prototype.getMetadata = function(callback) {
  callback = callback || util.noop;
  var self = this;
  this.makeReq_('GET', '', null, null, function(err, resp) {
    if (err && (!resp || resp.name !== self.name)) {
      callback(err);
      return;
    }
    self.metadata = resp;
    callback(null, self.metadata, resp);
  });
};

/**
 * Make a new request object from the provided arguments and wrap the callback
 * to intercept non-successful responses.
 *
 * @private
 *
 * @param {string} method - Action.
 * @param {string} path - Request path.
 * @param {*} query - Request query object.
 * @param {*} body - Request body contents.
 * @param {function} callback - The callback function.
 */
Operation.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/operations/' + this.name + path;
  if (this.scope.constructor && this.scope.constructor.name === 'Compute') {
    path = '/global' + path;
  }
  this.scope.makeReq_(method, path, query, body, callback);
};

module.exports = Operation;