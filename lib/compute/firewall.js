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
 * @module compute/firewall
 */

'use strict';

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * Create a Firewall object to interact with a Google Compute Engine firewall.
 *
 * @constructor
 * @alias module:compute/firewall
 *
 * @throws {Error} if a firewall name isn't provided.
 *
 * @param {module:compute} compute - The Compute module instance this firewall
 *     belongs to.
 * @param {string} name - Name of the firewall.
 * @param {object} options - Firewall options.
 * @param {string=} options.description - Description of the firewall.
 * @param {string=} options.network - Network to which the firewall applies.
 *     Default value is 'global/networks/default'.
 * @param {object[]=} options.allowed - List of allowed protocols and ports.
 * @param {string[]=} options.sourceRanges - IP address blocks to which this
 *     rule applies (in CIDR format).
 * @param {string[]=} options.sourceRanges - IP address blocks to which this
 *     rule applies (in CIDR format).
 * @param {string[]=} options.sourceTags - List of instance tags to which
 *     this rule applies.
 * @param {string[]=} options.targetTags - List of instance tags indicating
 *     instances that may process connections according to this rule.
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var firewall = compute.firewall('tcp-3000');
 */
function Firewall(compute, name, options) {
  this.compute = compute;
  this.name = name;
  this.metadata = options || {};
  this.metadata.network = this.metadata.network || 'global/networks/default';

  if (!this.name) {
    throw new Error('A name is needed to use a Compute Engine Firewall.');
  }
}

/**
 * Delete the firewall rule.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * firewall.delete(function(err, operation) {
 *   // `operation` is an Operation object and can be used to check the status
 *   // of firewall rule deletion.
 * });
 */
Firewall.prototype.delete = function(callback) {
  callback = callback || util.noop;
  var compute = this.compute;
  this.makeReq_('DELETE', '', null, true, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var operation = compute.operation(resp.name);
    operation.metadata = resp;
    callback(null, operation);
  });
};

/**
 * Get the firewalls's metadata.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * firewall.getMetadata(function(err, metadata, apiResponse) {});
 */
Firewall.prototype.getMetadata = function(callback) {
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
 * Set the firewall's metadata.
 *
 * @throws {Error} if firewall options are not provided.
 *
 * @param {module:compute} compute - The Google Compute Engine instance this
 *     this firewall belongs to.
 * @param {object} metadata - Firewall metadata. See a
 *     [Firewall resource](https://goo.gl/7FpjXA) for detailed information.
 * @param {string=} metadata.network - Network to which the firewall applies.
 *     Default value is 'global/networks/default'.
 * @param {object[]=} metadata.allowed - List of allowed protocols and ports.
 * @param {string[]=} metadata.sourceRanges - IP address blocks to which this
 *     rule applies (in CIDR format).
 * @param {string[]=} metadata.sourceRanges - IP address blocks to which this
 *     rule applies (in CIDR format).
 * @param {string[]=} metadata.sourceTags - List of instance tags to which
 *     this rule applies.
 * @param {string[]=} metadata.targetTags - List of instance tags indicating
 *     instances that may process connections according to this rule.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, operation) {
 *   // `operation` is an Operation object and can be used to check the status
 *   // of firewall rule update.
 * };
 *
 * firewall.setMetadata(
 *   {
 *     description: 'Brand new description',
 *   }, callback);
 */
Firewall.prototype.setMetadata = function(metadata, callback) {
  callback = callback || util.noop;
  if (!util.is(metadata, 'object')) {
    throw new Error('Firewall rule options must be provided.');
  }

  metadata.name = this.name;
  metadata.network = this.metadata.network;

  var self = this;
  this.makeReq_('PATCH', '', null, metadata, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    self.metadata = metadata;
    var operation = self.compute.operation(resp.name);
    operation.metadata = resp;
    callback(null, operation);
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
Firewall.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/global/firewalls/' + this.name + path;
  this.compute.makeReq_(method, path, query, body, callback);
};

module.exports = Firewall;