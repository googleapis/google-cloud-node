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

'use strict';

var common = require('@google-cloud/common');
var util = require('util');

/*! Developer Documentation
 *
 * @param {Zone} zone - Zone object this autoscaler belongs to.
 * @param {string} name - Name of the autoscaler.
 */
/**
 * Autoscalers allow you to automatically scale virtual machine instances in
 * managed instance groups according to an autoscaling policy that you define.
 *
 * @see [Autoscaling Groups of Instances]{@link https://cloud.google.com/compute/docs/autoscaler}
 *
 * @class
 * @param {Zone} zone
 * @param {string} name
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const zone = compute.zone('us-central1-a');
 * const autoscaler = zone.autoscaler('autoscaler-name');
 */
function Autoscaler(zone, name) {
  var methods = {
    /**
     * Create an autoscaler.
     *
     * @method Autoscaler#create
     * @param {object} config - See {Zone#createAutoscaler}.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const zone = compute.zone('us-central1-a');
     * const autoscaler = zone.autoscaler('autoscaler-name');
     *
     * const config = {
     *   coolDown: 30,
     *   cpu: 80,
     *   loadBalance: 40,
     *   maxReplicas: 5,
     *   minReplicas: 0,
     *   target: 'instance-group-manager-1'
     * };
     *
     * const callback = function(err, autoscaler, operation, apiResponse) {
     *   // `autoscaler` is an Autoscaler object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // of the request.
     * };
     *
     * autoscaler.create(config, callback);
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * autoscaler.create(config).then(function(data) {
     *   const autoscaler = data[0];
     *   const operation = data[1];
     *   const apiResponse = data[2];
     * });
     */
    create: true,

    /**
     * Check if the autoscaler exists.
     *
     * @method Autoscaler#exists
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the autoscaler exists or not.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const zone = compute.zone('us-central1-a');
     * const autoscaler = zone.autoscaler('autoscaler-name');
     *
     * autoscaler.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * autoscaler.exists().then(function(data) {
     *   const exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get an autoscaler if it exists.
     *
     * You may optionally use this to "get or create" an object by providing an
     * object with `autoCreate` set to `true`. Any extra configuration that is
     * normally required for the `create` method must be contained within this
     * object as well.
     *
     * @method Autoscaler#get
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const zone = compute.zone('us-central1-a');
     * const autoscaler = zone.autoscaler('autoscaler-name');
     *
     * autoscaler.get(function(err, autoscaler, apiResponse) {
     *   // `autoscaler` is an Autoscaler object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * autoscaler.get().then(function(data) {
     *   const autoscaler = data[0];
     *   const apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the metadata of this autoscaler.
     *
     * @method Autoscaler#getMetadata
     * @see [Autoscaler Resource]{@link https://cloud.google.com/compute/docs/reference/v1/autoscalers}
     * @see [Autoscalers: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/autoscalers/get}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The autoscaler's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const zone = compute.zone('us-central1-a');
     * const autoscaler = zone.autoscaler('autoscaler-name');
     *
     * autoscaler.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * autoscaler.getMetadata().then(function(data) {
     *   const metadata = data[0];
     *   const apiResponse = data[1];
     * });
     */
    getMetadata: true,
  };

  common.ServiceObject.call(this, {
    parent: zone,
    baseUrl: '/autoscalers',
    id: name,
    createMethod: zone.createAutoscaler.bind(zone),
    methods: methods,
  });

  /**
   * @name Autoscaler#name
   * @type {string}
   */
  this.name = name;

  /**
   * Parent {@link Zone} instance of this {@link Autoscaler} instance.
   * @name Autoscaler#zone
   * @type {Zone}
   */
  this.zone = zone;
}

util.inherits(Autoscaler, common.ServiceObject);

/**
 * Delete the autoscaler.
 *
 * @see [Autoscalers: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/autoscalers/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {Operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const zone = compute.zone('us-central1-a');
 * const autoscaler = zone.autoscaler('autoscaler-name');
 *
 * autoscaler.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * autoscaler.delete().then(function(data) {
 *   const operation = data[0];
 *   const apiResponse = data[1];
 * });
 */
Autoscaler.prototype.delete = function(callback) {
  callback = callback || common.util.noop;

  var zone = this.zone;

  common.ServiceObject.prototype.delete.call(this, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = zone.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/**
 * Set the autoscaler's metadata.
 *
 * @see [Autoscaler Resource]{@link https://cloud.google.com/compute/docs/reference/v1/autoscalers}
 *
 * @param {object} metadata - See a
 *     [Firewall resource](https://cloud.google.com/compute/docs/reference/v1/autoscalers).
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {Operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const zone = compute.zone('us-central1-a');
 * const autoscaler = zone.autoscaler('autoscaler-name');
 *
 * const metadata = {
 *   description: 'New description'
 * };
 *
 * autoscaler.setMetadata(metadata, function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * autoscaler.setMetadata(metadata).then(function(data) {
 *   const operation = data[0];
 *   const apiResponse = data[1];
 * });
 */
Autoscaler.prototype.setMetadata = function(metadata, callback) {
  var zone = this.zone;

  callback = callback || common.util.noop;

  metadata = metadata || {};
  metadata.name = this.name;
  metadata.zone = this.zone.name;

  zone.request(
    {
      method: 'PATCH',
      uri: '/autoscalers',
      qs: {
        autoscaler: this.name,
      },
      json: metadata,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, resp);
        return;
      }

      var operation = zone.operation(resp.name);
      operation.metadata = resp;

      callback(null, operation, resp);
    }
  );
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Autoscaler);

module.exports = Autoscaler;
