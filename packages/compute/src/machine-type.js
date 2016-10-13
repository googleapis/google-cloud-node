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
 * @module compute/machine-type
 */

'use strict';

var common = require('@google-cloud/common');
var util = require('util');

/*! Developer Documentation
 *
 * @param {module:zone} zone - Zone object this machine type belongs to.
 * @param {string} name - Name of the machine type.
 */
/**
 * A MachineType object allows you to interact with a Google Compute Engine
 * machine type.
 *
 * @resource [Machine Types Overview]{@link https://cloud.google.com/compute/docs/machine-types}
 * @resource [MachineType Resource]{@link https://cloud.google.com/compute/docs/reference/v1/machineTypes}
 *
 * @constructor
 * @alias module:compute/machine-type
 *
 * @example
 * var zone = gce.zone('us-central1-b');
 *
 * var machineType = zone.machineType('g1-small');
 */
function MachineType(zone, name) {
  var methods = {
    /**
     * Check if the machine type exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the machine type exists or
     *     not.
     *
     * @example
     * machineType.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * machineType.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get a machine type if it exists.
     *
     * @example
     * machineType.get(function(err, machineType, apiResponse) {
     *   // `machineType` is a MachineType object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * machineType.get().then(function(data) {
     *   var machineType = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the machine type's metadata.
     *
     * @resource [MachineTypes: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/machineTypes/get}
     * @resource [MachineType Resource]{@link https://cloud.google.com/compute/docs/reference/v1/machineTypes}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The machine type's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * machineType.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * machineType.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: true
  };

  common.ServiceObject.call(this, {
    parent: zone,
    baseUrl: '/machineTypes',
    id: name,
    methods: methods
  });

  this.zone = zone;
  this.name = name;
}

util.inherits(MachineType, common.ServiceObject);

module.exports = MachineType;
