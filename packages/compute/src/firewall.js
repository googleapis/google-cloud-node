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
 * @module compute/firewall
 */

'use strict';

var common = require('@google-cloud/common');
var util = require('util');

/*! Developer Documentation
 *
 * @param {module:compute} compute - Compute object this firewall belongs to.
 * @param {string} name - Name of the firewall.
 */
/**
 * A Firewall object allows you to interact with a Google Compute Engine
 * firewall.
 *
 * @resource [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 * @resource [Firewall Resource]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls}
 *
 * @constructor
 * @alias module:compute/firewall
 *
 * @example
 * var firewall = gce.firewall('tcp-3000');
 */
function Firewall(compute, name) {
  var methods = {
    /**
     * Create a firewall.
     *
     * @param {object} config - See {module:compute#createFirewall}.
     *
     * @example
     * var config = {
     *   // ...
     * };
     *
     * firewall.create(config, function(err, firewall, operation, apiResponse) {
     *   // `firewall` is a Firewall object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // status of the request.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * firewall.create(config).then(function(data) {
     *   var firewall = data[0];
     *   var operation = data[1];
     *   var apiResponse = data[2];
     * });
     */
    create: true,

    /**
     * Check if the firewall exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the firewall exists or not.
     *
     * @example
     * firewall.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * firewall.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get a firewall if it exists.
     *
     * You may optionally use this to "get or create" an object by providing an
     * object with `autoCreate` set to `true`. Any extra configuration that is
     * normally required for the `create` method must be contained within this
     * object as well.
     *
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * firewall.get(function(err, firewall, apiResponse) {
     *   // `firewall` is a Firewall object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * firewall.get().then(function(data) {
     *   var firewall = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the firewall's metadata.
     *
     * @resource [Firewalls: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/get}
     * @resource [Firewall Resource]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The firewall's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * firewall.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * firewall.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: true
  };

  common.ServiceObject.call(this, {
    parent: compute,
    baseUrl: '/global/firewalls',
    id: name,
    createMethod: compute.createFirewall.bind(compute),
    methods: methods
  });

  this.compute = compute;
  this.name = name;
  this.metadata.network = 'global/networks/default';
}

util.inherits(Firewall, common.ServiceObject);

/**
 * Delete the firewall.
 *
 * @resource [Firewalls: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * firewall.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * firewall.delete().then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
Firewall.prototype.delete = function(callback) {
  var compute = this.compute;

  callback = callback || common.util.noop;

  common.ServiceObject.prototype.delete.call(this, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = compute.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/**
 * Set the firewall's metadata.
 *
 * @resource [Firewall Resource]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls}
 *
 * @param {object} metadata - See a
 *     [Firewall resource](https://cloud.google.com/compute/docs/reference/v1/firewalls).
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var metadata = {
 *   description: 'New description'
 * };
 *
 * firewall.setMetadata(metadata, function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * firewall.setMetadata(metadata).then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
Firewall.prototype.setMetadata = function(metadata, callback) {
  var compute = this.compute;

  callback = callback || common.util.noop;

  metadata = metadata || {};
  metadata.name = this.name;
  metadata.network = this.metadata.network;

  this.request({
    method: 'PATCH',
    uri: '',
    json: metadata
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = compute.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Firewall);

module.exports = Firewall;
