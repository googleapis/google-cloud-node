/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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
 * @module compute/subnetwork
 */

'use strict';

var common = require('@google-cloud/common');
var util = require('util');

/*! Developer Documentation
 *
 * @param {module:region} region - Region this subnetwork belongs to.
 * @param {string} name - Name of the subnetwork.
 */
/**
 * An Subnetwork object allows you to interact with a Google Compute Engine
 * subnetwork.
 *
 * @resource [Subnetworks Overview]{@link https://cloud.google.com/compute/docs/subnetworks}
 * @resource [Subnetwork Resource]{@link https://cloud.google.com/compute/docs/reference/v1/subnetworks}
 *
 * @constructor
 * @alias module:compute/subnetwork
 *
 * @example
 * var region = gce.region('region-name');
 *
 * var subnetwork = region.subnetwork('subnetwork1');
 */
function Subnetwork(region, name) {
  this.name = name;
  this.region = region;

  var methods = {
    /**
     * Create a subnetwork.
     *
     * @param {object} config - See {module:compute/region#createSubnetwork}.
     *
     * @example
     * var config = {
     *   // ...
     * };
     *
     * function callback(err, subnetwork, operation, apiResponse) {
     *   // `subnetwork` is a Subnetwork object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // status of the request.
     * }
     *
     * subnetwork.create(config, callback);
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * subnetwork.create(config).then(function(data) {
     *   var subnetwork = data[0];
     *   var operation = data[1];
     *   var apiResponse = data[2];
     * });
     */
    create: true,

    /**
     * Check if the subnetwork exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the subnetwork exists or not.
     *
     * @example
     * subnetwork.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * subnetwork.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get a subnetwork if it exists.
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
     * subnetwork.get(function(err, subnetwork, apiResponse) {
     *   // `subnetwork` is a Subnetwork object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * subnetwork.get().then(function(data) {
     *   var subnetwork = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the metadata of this subnetwork.
     *
     * @resource [Subnetwork Resource]{@link https://cloud.google.com/compute/docs/reference/v1/subnetwork}
     * @resource [Subnetwork: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/subnetwork/get}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The subnetwork's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * subnetwork.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * subnetwork.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: true
  };

  common.ServiceObject.call(this, {
    parent: region,
    baseUrl: '/subnetworks',
    id: this.name,
    createMethod: region.createSubnetwork.bind(region),
    methods: methods
  });
}

util.inherits(Subnetwork, common.ServiceObject);

/**
 * Delete the subnetwork.
 *
 * @resource [Subnetworks: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/subnetworks/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * subnetwork.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * subnetwork.delete().then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
Subnetwork.prototype.delete = function(callback) {
  callback = callback || common.util.noop;

  var region = this.region;

  this.request({
    method: 'DELETE',
    uri: ''
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = region.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Subnetwork);

module.exports = Subnetwork;
