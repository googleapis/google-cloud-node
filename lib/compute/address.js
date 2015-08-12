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
 * @module compute/address
 */

'use strict';

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * Create an Address object to interact with a Google Compute Engine address.
 *
 * @constructor
 * @alias module:region/address
 *
 * @throws {Error} if an address name or a region are not provided.
 *
 * @param {module:region} region - The Google Compute Engine region this
 *     address belongs to.
 * @param {string} name - The name of the address.
 * @param {object=} metadata - Address metadata.
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var compute = gcloud.compute();
 *
 * var myRegion = compute.region('region-name');
 *
 * var address = myRegion.address('address1');
 */
function Address(region, name, metadata) {
  this.region = region;
  this.name = name;
  this.metadata = metadata;

  if (!util.is(this.name, 'string')) {
    throw new Error('A name is needed to use a Compute Engine Address.');
  }
  if (!this.region) {
    throw new Error('A region is needed to use a Compute Engine Address.');
  }
}

/**
 * Delete the address.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * address.delete(function(err, operation) {
 *   // `operation` is an Operation object and can be used to check the status
 *   // of address deletion.
 * });
 */
Address.prototype.delete = function(callback) {
  callback = callback || util.noop;
  var region = this.region;
  this.makeReq_('DELETE', '', null, true, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var operation = region.operation(resp.name);
    operation.metadata = resp;
    callback(null, operation);
  });
};

/**
 * Get the address' metadata.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * address.getMetadata(function(err, metadata, apiResponse) {});
 */
Address.prototype.getMetadata = function(callback) {
  callback = callback || util.noop;
  var self = this;
  this.makeReq_('GET', '', null, null, function(err, resp) {
    if (err) {
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
Address.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/addresses/' + this.name + path;
  this.region.makeReq_(method, path, query, body, callback);
};

module.exports = Address;