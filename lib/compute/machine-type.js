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
 * @module compute/machineType
 */

'use strict';

var nodeutil = require('util');

/**
 * @type {module:common/service-object}
 * @private
 */
var ServiceObject = require('../common/service-object.js');

/*! Developer Documentation
 *
 * @param {module:zone} zone - Zone object this machineType belongs to.
 * @param {string} name - Name of the machineType.
 */
/**
 * A MachineType object allows you to interact with a Google Compute Engine
 * machine type.
 *
 * @resource [MachineType Overview]{@link https://cloud.google.com/compute/docs/reference/latest/machineTypes}
 * @resource [MachineType Resource]{@link https://cloud.google.com/compute/docs/reference/v1/machineTypes}
 *
 * @constructor
 * @alias module:compute/machineType
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var gce = gcloud.compute();
 *
 * var zone = gce.zone('us-central1-b');
 *
 * var machineType = zone.machineType('g1-small');
 */
function MachineType(zone, name) {
  var methods = {

    /**
     * Check if the machineType exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the machineType exists or not.
     *
     * @example
     * machineType.exists(function(err, exists) {});
     */
    exists: true,

    /**
     * Get a machineType if it exists.
     *
     * @example
     * machineType.get(function(err, machineType, apiResponse) {
     *   // `machineType` is a MachineType object.
     * });
     */
    get: true,

    /**
     * Get the machineType's metadata.
     *
     * @resource [MachineTypes: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/machineTypes/get}
     * @resource [MachineType Resource]{@link https://cloud.google.com/compute/docs/reference/v1/machineTypes}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The machineType's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * machineType.getMetadata(function(err, metadata, apiResponse) {});
     */
    getMetadata: true
  };

  ServiceObject.call(this, {
    parent: zone,
    baseUrl: '/machineTypes',
    id: name,
    methods: methods
  });
  this.zone = zone;
  this.name = name;
}

nodeutil.inherits(MachineType, ServiceObject);

module.exports = MachineType;
