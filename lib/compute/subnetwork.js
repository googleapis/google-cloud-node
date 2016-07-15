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
 * @module compute/vm
 */

'use strict';

var format = require('string-format-obj');
var nodeutil = require('util');

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
 * @param {module:region} region - Region this address belongs to.
 * @param {string} name - Name of the subnetwork.
 */
/**
 * An Instance object allows you to interact with a Google Compute Engine
 * subnetwork.
 *
 * @resource [Instances and Networks]{@link https://cloud.google.com/compute/docs/instances-and-network}
 * @resource [Instance Resource]{@link https://cloud.google.com/compute/docs/reference/v1/subnetworks}
 *
 * @constructor
 * @alias module:compute/subnetwork
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var gce = gcloud.compute();
 *
 * var region = gce.region('region-name');
 *
 * var subnetwork = region.subnetwork('subnetwork1');
 */
function Subnetwork(region, name) {
  this.name = name.replace(/.*\/([^/]+)$/, '$1'); // Just the instance name.
  this.region = region;

  // this.url = format('{base}/{project}/regions/{regions}/subnetwork/{name}', {
  //   base: 'https://www.googleapis.com/compute/v1/projects',
  //   //project: region.projectId,
  //   zone: region.name,
  //   name: this.name
  // });

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
     * subnetwork.create(config,
     * function(err, subnetwork, operation, apiResponse) {
     *   // `subnetwork` is a Subnetwork object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // status of the request.
     * });
     */
    create: true,

    /**
     * Check if the subnetwork exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the address exists or not.
     *
     * @example
     * subnetwork.exists(function(err, exists) {});
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
     * subnetwork.get(function(err, vm, apiResponse) {
     *   // `subnetwork` is a Subnetwork object.
     * });
     */
    get: true,

    /**
     * Get the metadata of this subnetwork.
     *
     * @resource [Address Resource]{@link https://cloud.google.com/compute/docs/reference/v1/subnetwork}
     * @resource [Addresses: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/subnetwork/get}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The address's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * subnetwork.getMetadata(function(err, metadata, apiResponse) {});
     */
    getMetadata: true

  };

  ServiceObject.call(this, {
    parent: region,
    baseUrl: '/subnetworks',
    id: this.name,
    createMethod: region.createSubnetwork.bind(region),
    methods: methods
  });

  this.formattedName = Subnetwork.formatName_(region, name);
}

nodeutil.inherits(Subnetwork, ServiceObject);

/**
 * Format a subnetwork's name how the API expects.
 *
 * @private
 *
 * @param {module:compute} compute - The Compute object this network belongs to.
 * @param {string} name - The name of the network.
 * @return {string} - The formatted name.
 */
Subnetwork.formatName_ = function(region, name) {
  return format('regions/{region}/subnetworks/{name}', {
    region: region.name,
    name: name
  });
};

/**
 * Delete the subnetwork.
 *
 * @resource [Subnetworks: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/latest/addresses/delete}
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
 */
Subnetwork.prototype.delete = function(callback) {
  callback = callback || util.noop;

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

module.exports = Subnetwork;
