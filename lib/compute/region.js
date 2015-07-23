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
 * @module compute/region
 */

'use strict';

/**
 * @type {module:compute/address}
 * @private
 */
var Address = require('./address.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * Create a Region object to interact with a Google Compute Engine region.
 *
 * @constructor
 * @alias module:compute/region
 *
 * @throws {Error} if a region name is not provided.
 *
 * @param {module:compute} compute - The Google Compute Engine instance this
 *     disk belongs to.
 * @param {string} name - Name of the region.
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var myRegion = compute.region('region-name');
 */
function Region(compute, name) {
  this.name = name;
  this.compute = compute;

  if (!this.name) {
    throw new Error('A name is needed to use a Compute Engine Region.');
  }
}

/**
 * Get a reference to a Google Compute Engine address in this region.
 *
 * @param {string} name - Name of the existing address.
 * @return {module:compute/address}
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
 * var address = myRegion.address('address-name');
 */
Region.prototype.address = function(name) {
  return new Address(this, name);
};

/**
 * Create an address in this region.
 *
 * @throws {Error} if an address name or a callback are not provided.
 *
 * @param {string} name - Name of the address.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, address, apiResponse) {
 *   // `address` is a Address object.
 * };
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var myRegion = compute.region('region-name');
 *
 * myRegion.createDisk('new-address', callback);
 */
Region.prototype.createAddress = function(name, callback) {
  if (!name) {
    throw new Error('A name is required to create an address.');
  } else if (!/^(?:[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?)$/.test(name)) {
    throw new Error('Name must match [a-z]([-a-z0-9]{0,61}[a-z0-9])?');
  }
  if (!callback) {
    throw new Error('A callback must be defined.');
  }

  var body = {
    name: name
  };

  var self = this;
  this.makeReq_('POST', '/addresses', null, body, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var address = self.address(name);
    callback(null, address, resp);
  });
};

/**
 * Get a list of addresses in this region.
 *
 * @throws {Error} if a malformed filter is provided.
 *
 * @param {object} options - Address search options.
 * @param {number=} options.maxResults - Maximum number of addresses to return.
 * @param {object=} options.filter - Search filter.
 * @param {string} options.filter.fieldName - Address field to consider in this
 *     filter.
 * @param {string} options.filter.operatorString - Filter operator, can be
 *     either 'eq' or 'ne'.
 * @param {string} options.filter.literalString - String to compare the address
 *     field to. Can be a regular expression.
 * @param {string=} pageToken - Page identifier used in paginated search.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, addresses) {
 *   // `addresses` is an array of `Address` objects.
 * };
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var myRegion = compute.region('region-name');
 *
 * myRegion.getAddresses(
 *   {
 *     filter: {
 *       fieldName : 'name',
 *       operatorString : 'eq',
 *       literalString : 'address-[0-9]'
 *     }],
 *   }, callback);
 */
Region.prototype.getAddresses = function(options, callback) {
  if (!callback) {
    callback = options;
  }

  var query = {};

  if (options) {
    if (util.is(options.maxResults, 'number')) {
      query.maxResults = options.maxResults;
    }
    if (options.filter) {
      if (!util.is(options.filter.fieldName, 'string') ||
          !util.is(options.filter.operatorString, 'string') ||
          !util.is(options.filter.literalString, 'string')) {
        throw new Error(
          'A filter must have name, comparisonString and literal fields.');
      }
      if (options.filter.operatorString !== 'eq' &&
        options.filter.operatorString !== 'ne') {
        throw new Error('Filter operator must be either eq or ne');
      }
      query.filter =
        options.filter.fieldName + ' ' +
        options.filter.operatorString + ' \'' +
        options.filter.literalString + '\'';
    }
    if (util.is(options.pageToken, 'string')) {
      query.pageToken = options.pageToken;
    }
  }

  var self = this;
  this.makeReq_('GET', '/addresses', query, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    if (resp.items) {
      var addresses = [];
      for (var i = 0; i < resp.items.length; i++) {
        var metadata = resp.items[i];
        var address = self.address(metadata.name);
        address.metadata = metadata;
        addresses.push(address);
      }
      callback(null, addresses);
    } else {
      callback(null, []);
    }
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
Region.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/regions/' + this.name + path;
  this.compute.makeReq_(method, path, query, body, callback);
};

module.exports = Region;
