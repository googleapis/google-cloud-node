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

/**
 * An Address object allows you to interact with a Google Compute Engine
 * address.
 *
 * @see [Instances and Networks]{@link https://cloud.google.com/compute/docs/instances-and-network}
 * @see [Address Resource]{@link https://cloud.google.com/compute/docs/reference/v1/addresses} *
 *
 * @class
 * @param {Region} region
 * @param {string} name
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const region = compute.region('region-name');
 * const address = region.address('address1');
 */
function Address(region, name) {
  var methods = {
    /**
     * Create an address.
     *
     * @method Address#create
     * @param {object=} options - See {Region#createAddress}.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const region = compute.region('region-name');
     * const address = region.address('address1');
     *
     * address.create(function(err, address, operation, apiResponse) {
     *   // `address` is an Address object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // of the request.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * address.create().then(function(data) {
     *   const address = data[0];
     *   const operation = data[1];
     *   const apiResponse = data[2];
     * });
     */
    create: true,

    /**
     * Check if the address exists.
     *
     * @method Address#exists
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the address exists or not.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const region = compute.region('region-name');
     * const address = region.address('address1');
     *
     * address.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * address.exists().then(function(data) {
     *   const exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get an address if it exists.
     *
     * You may optionally use this to "get or create" an object by providing an
     * object with `autoCreate` set to `true`. Any extra configuration that is
     * normally required for the `create` method must be contained within this
     * object as well.
     *
     * @method Address#get
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const region = compute.region('region-name');
     * const address = region.address('address1');
     *
     * address.get(function(err, address, apiResponse) {
     *   // `address` is an Address object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * address.get().then(function(data) {
     *   const address = data[0];
     *   const apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the metadata of this address.
     *
     * @see [Address Resource]{@link https://cloud.google.com/compute/docs/reference/v1/addresses}
     * @see [Addresses: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/addresses/get}
     *
     * @method Address#getMetadata
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The address's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const region = compute.region('region-name');
     * const address = region.address('address1');
     *
     * address.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * address.getMetadata().then(function(data) {
     *   const metadata = data[0];
     *   const apiResponse = data[1];
     * });
     */
    getMetadata: true,
  };

  common.ServiceObject.call(this, {
    parent: region,
    baseUrl: '/addresses',
    id: name,
    createMethod: region.createAddress.bind(region),
    methods: methods,
  });

  /**
   * @name Address#name
   * @type {string}
   */
  this.name = name;

  /**
   * The parent {@link Region} instance of this {@link Address} instance.
   * @name Address#region
   * @type {Region}
   */
  this.region = region;
}

util.inherits(Address, common.ServiceObject);

/**
 * Delete the address.
 *
 * @see [Addresses: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/addresses/delete}
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
 * const region = compute.region('region-name');
 * const address = region.address('address1');
 *
 * address.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * address.delete().then(function(data) {
 *   const operation = data[0];
 *   const apiResponse = data[1];
 * });
 */
Address.prototype.delete = function(callback) {
  callback = callback || common.util.noop;

  var region = this.region;

  this.request(
    {
      method: 'DELETE',
      uri: '',
    },
    function(err, resp) {
      if (err) {
        callback(err, null, resp);
        return;
      }

      var operation = region.operation(resp.name);
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
common.util.promisifyAll(Address);

module.exports = Address;
