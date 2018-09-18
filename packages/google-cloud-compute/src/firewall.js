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

let common = require('@google-cloud/common');
let util = require('util');

/**
 * A Firewall object allows you to interact with a Google Compute Engine
 * firewall.
 *
 * @see [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 * @see [Firewall Resource]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls}
 *
 * @class
 * @param {Compute} compute
 * @param {string} name
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const firewall = compute.firewall('tcp-3000');
 */
function Firewall(compute, name) {
  let methods = {
    /**
     * Create a firewall.
     *
     * @method Firewall#create
     * @param {object} config - See {@link Compute#createFirewall}.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const firewall = compute.firewall('tcp-3000');
     *
     * const config = {
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
     *   const firewall = data[0];
     *   const operation = data[1];
     *   const apiResponse = data[2];
     * });
     */
    create: true,

    /**
     * Check if the firewall exists.
     *
     * @method Firewall#exists
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the firewall exists or not.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const firewall = compute.firewall('tcp-3000');
     *
     * firewall.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * firewall.exists().then(function(data) {
     *   const exists = data[0];
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
     * @method Firewall#get
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const firewall = compute.firewall('tcp-3000');
     *
     * firewall.get(function(err, firewall, apiResponse) {
     *   // `firewall` is a Firewall object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * firewall.get().then(function(data) {
     *   const firewall = data[0];
     *   const apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the firewall's metadata.
     *
     * @see [Firewalls: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/get}
     * @see [Firewall Resource]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls}
     *
     * @method Firewall#getMetadata
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The firewall's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const firewall = compute.firewall('tcp-3000');
     *
     * firewall.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * firewall.getMetadata().then(function(data) {
     *   const metadata = data[0];
     *   const apiResponse = data[1];
     * });
     */
    getMetadata: true,
  };

  common.ServiceObject.call(this, {
    parent: compute,
    baseUrl: '/global/firewalls',
    /**
     * @name Firewall#id
     * @type {string}
     */
    id: name,
    createMethod: compute.createFirewall.bind(compute),
    methods: methods,
  });

  /**
   * The parent {@link Compute} instance of this {@link Firewall} instance.
   * @name Firewall#compute
   * @type {Compute}
   */
  this.compute = compute;

  /**
   * @name Firewall#name
   * @type {string}
   */
  this.name = name;

  /**
   * @name Firewall#metadata
   * @type {object}
   */
  this.metadata.network = 'global/networks/default';
}

util.inherits(Firewall, common.ServiceObject);

/**
 * Delete the firewall.
 *
 * @see [Firewalls: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/delete}
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
 * const firewall = compute.firewall('tcp-3000');
 *
 * firewall.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * firewall.delete().then(function(data) {
 *   const operation = data[0];
 *   const apiResponse = data[1];
 * });
 */
Firewall.prototype.delete = function(callback) {
  let compute = this.compute;

  callback = callback || common.util.noop;

  common.ServiceObject.prototype.delete.call(this, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    let operation = compute.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/**
 * Set the firewall's metadata.
 *
 * @see [Firewall Resource]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls}
 *
 * @param {object} metadata - See a
 *     [Firewall resource](https://cloud.google.com/compute/docs/reference/v1/firewalls).
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {Operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const firewall = compute.firewall('tcp-3000');
 *
 * const metadata = {
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
 *   const operation = data[0];
 *   const apiResponse = data[1];
 * });
 */
Firewall.prototype.setMetadata = function(metadata, callback) {
  let compute = this.compute;

  callback = callback || common.util.noop;

  metadata = metadata || {};
  metadata.name = this.name;
  metadata.network = this.metadata.network;

  this.request(
    {
      method: 'PATCH',
      uri: '',
      json: metadata,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, resp);
        return;
      }

      let operation = compute.operation(resp.name);
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
common.util.promisifyAll(Firewall);

/**
 * Reference to the {@link Firewall} class.
 * @name module:@google-cloud/compute.Firewall
 * @see Firewall
 */
module.exports = Firewall;
