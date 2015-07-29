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
 * @module compute/network
 */

'use strict';

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * Create a Network object to interact with a Google Compute Engine network.
 *
 * @constructor
 * @alias module:compute/network
 *
 * @throws {Error} if a network name is not provided.
 *
 * @param {module:compute} compute - The Compute module this network belongs to.
 * @param {string} name - Network name.
 * @param {object=} metadata - Network metadata.
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var compute = gcloud.compute();
 *
 * var network = compute.network('network-name');
 */
function Network(compute, name, metadata) {
  this.compute = compute;
  this.name = name;
  this.metadata = metadata;

  if (!util.is(this.name, 'string')) {
    throw new Error('A name is needed to use a Compute Engine Network.');
  }
}

/**
 * Delete the network.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * network.delete(function(err) {});
 */
Network.prototype.delete = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('DELETE', '', null, true, callback);
};

/**
 * Get the network's metadata.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * network.getMetadata(function(err, metadata, apiResponse) {});
 */
Network.prototype.getMetadata = function(callback) {
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
 * Create a firewall rule for this network. For a detailed description of
 *     method's options see [API reference](https://goo.gl/kTMHep).
 *
 * @throws {Error} if a firewall name is not provided. If allowed ports,
 *     source tags or source ranges are not provided.
 *
 * @param {string} name - Name of the firewall.
 * @param {object} options - Firewall options.
 * @param {string=} options.description - Description of the firewall.
 * @param {object[]=} options.allowed - List of allowed protocols and ports.
 * @param {string[]=} options.sourceRanges - IP address blocks to which this
 *     rule applies (in CIDR format).
 * @param {string[]=} options.sourceRanges - IP address blocks to which this
 *     rule applies (in CIDR format).
 * @param {string[]=} options.sourceTags - List of instance tags to which
 *     this rule applies.
 * @param {string[]=} options.targetTags - List of instance tags indicating
 *     instances that may process connections according to this rule.
 * @param {function} callback - The callback function.
 *
 * @example
 * var network = compute.network('network-name');
 *
 * var firewall = network.createFirewall('tcp-3000',
 *   {
 *     description: 'yada yada',
 *     allowed: [{
 *       IPProtocol: 'tcp',
 *       ports: ['3000']
 *     }],
 *     sourceRanges: ['0.0.0.0/0'],
 *     targetTags: ['tcp-3000-tag']
 *   }, callback);
 */
Network.prototype.createFirewall = function(name, options, callback) {
  options = options || {};
  options.network =
    'projects/' +
    this.compute.projectId +
    '/global/networks/' +
    this.name;
  this.compute.createFirewall(name, options, callback);
};

/**
 * Get a list of firewall rules for this network.
 *
 * @param {object} options - Firewall search options.
 * @param {boolean=} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number=} options.maxResults - Maximum number of firewalls to return.
 * @param {string=} pageToken - Page identifier used in paginated search.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, firewalls) {
 *   // `firewalls` is an array of `Firewall` objects.
 * };
 *
 * compute.getFirewalls(callback);
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, firewalls, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     compute.getFirewalls(nextQuery, callback);
 *   }
 * };
 *
 * compute.getFirewalls({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the firewalls from your project as a readable object stream.
 * //-
 * compute.getFirewalls()
 *   .on('error', console.error)
 *   .on('data', function(firewall) {
 *     // `firewall` is an `Firewall` object.
 *   })
 *   .on('end', function() {
 *     // All firewalls retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * compute.getFirewalls()
 *   .on('data', function(firewall) {
 *     this.end();
 *   });
 */
Network.prototype.getFirewalls = function(options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  options = options || {};
  options.filter =
    'network eq ' +
    '.*projects/' +
    this.compute.projectId +
    '/global/networks/' +
    this.name;

  if (callback) {
    this.compute.getFirewalls(options, callback);
  } else {
    return this.compute.getFirewalls(options);
  }
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
Network.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/global/networks/' + this.name + path;
  this.compute.makeReq_(method, path, query, body, callback);
};

module.exports = Network;