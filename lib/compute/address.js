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
 * @module compute/address
 */

'use strict';

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/*! Developer Documentation
 *
 * @param {module:region} region - Region this address belongs to.
 * @param {string} name - The name of the address.
 */
/**
 * An Address object allows you to interact with a Google Compute Engine
 * address.
 *
 * @resource [Instances and Networks]{@link https://cloud.google.com/compute/docs/instances-and-network}
 * @resource [Address Resource]{@link https://cloud.google.com/compute/docs/reference/v1/addresses} *
 *
 * @constructor
 * @alias module:compute/address
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
 * var address = region.address('address1');
 */
function Address(region, name) {
  this.region = region;
  this.name = name;
  this.metadata = {};
}

/**
 * Delete the address.
 *
 * @resource [Addresses: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/addresses/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * address.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
Address.prototype.delete = function(callback) {
  callback = callback || util.noop;

  var region = this.region;

  this.makeReq_('DELETE', '', null, null, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = region.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/**
 * Get the metadata of this address.
 *
 * @resource [Address Resource]{@link https://cloud.google.com/compute/docs/reference/v1/addresses}
 * @resource [Addresses: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/addresses/get}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object} callback.metadata - The address's metadata.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * address.getMetadata(function(err, metadata, apiResponse) {});
 */
Address.prototype.getMetadata = function(callback) {
  callback = callback || util.noop;

  var self = this;

  this.makeReq_('GET', '', null, null, function(err, resp) {
    if (err) {
      callback(err, null, resp);
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
Address.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/addresses/' + this.name + path;
  this.region.makeReq_(method, path, query, body, callback);
};

module.exports = Address;
