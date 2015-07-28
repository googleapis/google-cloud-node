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

var extend = require('extend');

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
 * @type {module:common/streamrouter}
 * @private
 */
var streamRouter = require('../common/stream-router.js');

/**
 * Create a Region object to interact with a Google Compute Engine region.
 *
 * @constructor
 * @alias module:compute/region
 *
 * @throws {Error} if a region name is not provided.
 *
 * @param {module:compute} compute - The Google Compute Engine object this
 *     region belongs to.
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
 * Create an address in this region. For a detailed description of method's
 * options see [API reference](https://goo.gl/lY8Y3u).
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
 * Get a list of addresses in this region. For a detailed description of
 * method's options see [API reference](https://goo.gl/By1Az6).
 *
 * @param {object} options - Address search options.
 * @param {boolean=} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number=} options.maxResults - Maximum number of addresses to return.
 * @param {string=} options.filter - Search filter. The filter must contain:
 *     `FIELD_NAME COMPARISON_STRING LITERAL_STRING`. `FIELD_NAME` is the name
 *     of the field to compare. `COMPARISON` is the comparison operator that can
 *     be either `eq` or `ne`. `LITERAL_STRING` is the string to filter to.
 *     For string fields `LITERAL_STRING` can be a regular expression.
 * @param {string=} pageToken - Page identifier used in paginated search.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, addresses) {
 *   // `addresses` is an array of `Address` objects.
 * };
 *
 * var myRegion = compute.region('region-name');
 *
 * myRegion.getAddresses(
 *   {
 *     filter: 'name eq address-[0-9]'
 *   }, callback);
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, addresses, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     myRegion.getAddresses(nextQuery, callback);
 *   }
 * };
 *
 * myRegion.getAddresses({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the addresses from your project as a readable object stream.
 * //-
 * myRegion.getAddresses()
 *   .on('error', console.error)
 *   .on('data', function(address) {
 *     // `address` is an `Address` object.
 *   })
 *   .on('end', function() {
 *     // All addresses retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * myRegion.getAddresses()
 *   .on('data', function(address) {
 *     this.end();
 *   });
 */
Region.prototype.getAddresses = function(options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  options = options || {};

  var self = this;
  this.makeReq_('GET', '/addresses', options, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var addresses = (resp.items || []).map(function(addressObject) {
      var address = self.address(addressObject.name);
      address.metadata = addressObject;
      return address;
    });
    callback(null, addresses, nextQuery, resp);
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

/*! Developer Documentation
 *
 * These methods can be used with either a callback or as a readable object
 * stream. `streamRouter` is used to add this dual behavior.
 */
streamRouter.extend(Region, ['getAddresses']);

module.exports = Region;
