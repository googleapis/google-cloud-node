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
 * @const {string}
 * @private
 */
var COMPUTE_BASE_URL = 'https://www.googleapis.com/compute/v1/projects/';

/**
 * Create a Firewall object to interact with a Google Compute Engine firewall.
 *
 * @constructor
 * @alias module:compute/firewall
 *
 * @throws {Error} if a firewall name isn't provided.
 *
 * @param {module:compute} compute - The Google Compute Engine instance this 
 *     firewall belongs to.
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
  this.name = name;
  this.compute = compute;
  this.description = '';
  this.network = 'global/networks/default';
  this.allowed = [];
  this.sourceRanges = [];
  this.sourceTags = [];
  this.targetTags = [];

  if (!this.name) {
    throw new Error('A name is needed to use Google Cloud Compute Firewall.');
  }

  if (options) {
    if (util.is(options.description, 'string')) {
      this.description = options.description;
    }
    if (util.is(options.network, 'string')) {
      this.network = options.network;
    }
    if (util.is(options.allowed, 'array')) {
      this.allowed = options.allowed;
    } 
    if (util.is(options.sourceRanges, 'array')) {
      this.sourceRanges = options.sourceRanges;
    } 
    if (util.is(options.sourceTags, 'array')) {
      this.sourceTags = options.sourceTags;
    } 
    if (util.is(options.targetTags, 'array')) {
      this.targetTags = options.targetTags;
    } 
  }
}

/**
 * Delete the firewall rule.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * firewall.delete(function(err) {});
 */
Firewall.prototype.delete = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('DELETE', '', null, true, callback);
};

/**
 * Update the firewall rule.
 *
 * @throws {Error} if firewall options are not provided, if no allowed 
 *     protocols are specified or none of source ranges and source tags are 
 *     provided
 *
 * @param {module:compute} compute - The Google Compute Engine instance this 
 *     this firewall belongs to.
 * @param {string} name - Name of the firewall.
 * @param {object} options - Firewall options.
 * @param {boolean} options.patch - If true update is performed according to
 *     the patch semantics (default is false).
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
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, firewall, apiResponse) {
 *   // `firewall` is a Firewall object.
 * };
 *
 * firewall.update(
 *   {
 *     patch: true,
 *     description: 'Brand new description',
 *   }, callback);
 */
Firewall.prototype.update = function(options, callback) {
  if (!options) {
    throw new Error('Firewall rule options must be provided.');
  }

  var method = 'PUT';
  if (options.patch) {
    method = 'PATCH';
  } else {
    if(!util.is(options.allowed, 'array')) {
      throw new Error('Allowed protocols and ports must be provided.');
    }
    if (!util.is(options.sourceRanges, 'array') && 
      !util.is(options.sourceTags, 'array')) {
      throw new Error('Source ranges or source tags must be provided.');
    }
  }

  var body = {};
  if (util.is(options.name, 'string')) {
    body.name = options.name;
  } else {
    body.name = this.name;
  }
  var newFirewall = this.compute.firewall(body.name);
  if (util.is(options.description, 'string')) {
    body.description = options.description;
    newFirewall.description = body.description;
  } else {
    newFirewall.description = this.description;
  }
  if (util.is(options.network, 'string')) {
    body.network = options.network;
    newFirewall.network = body.network;
  } else {
    body.network = this.network;
    newFirewall.network = this.network;
  }
  if (util.is(options.allowed, 'array')) {
    body.allowed = options.allowed;
    newFirewall.allowed = body.allowed;
  } else {
    newFirewall.allowed = this.allowed;
  }
  if (util.is(options.sourceRanges, 'array')) {
    body.sourceRanges = options.sourceRanges;
    newFirewall.sourceRanges = body.sourceRanges;
  } else {
    newFirewall.sourceRanges = this.sourceRanges;
  }
  if (util.is(options.sourceTags, 'array')) {
    body.sourceTags = options.sourceTags;
    newFirewall.sourceTags = body.sourceTags;
  } else {
    newFirewall.sourceTags = this.sourceTags;
  }
  if (util.is(options.targetTags, 'array')) {
    body.targetTags = options.targetTags;
    newFirewall.targetTags = body.targetTags;
  } else {
    newFirewall.targetTags = this.targetTags;
  }

  this.makeReq_(
    method, 
    '', 
    null, 
    body, function(err, resp) {
      if (err) {
        callback(err);
        return; 
      }
      callback(null, newFirewall, resp);
    }.bind(this)); 
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
  var reqOpts = {
    method: method,
    qs: query,
    uri: COMPUTE_BASE_URL + this.compute.projectId + 
        '/global/firewalls/' + this.name
  };

  if (body) {
    reqOpts.json = body;
  }

  this.compute.makeAuthorizedRequest_(reqOpts, callback);
};

module.exports = Firewall;