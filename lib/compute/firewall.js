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
 * @module compute/firewall
 */

'use strict';

var nodeutil = require('util');

/**
 * @type {module:common/serviceObject}
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
 * @param {module:compute} compute - Compute object this firewall belongs to.
 * @param {string} name - Name of the firewall.
 */
/**
 * A Firewall object allows you to interact with a Google Compute Engine
 * firewall.
 *
 * @resource [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 * @resource [Firewall Resource]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls}
 *
 * @constructor
 * @alias module:compute/firewall
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var gce = gcloud.compute();
 *
 * var firewall = gce.firewall('tcp-3000');
 */
function Firewall(compute, name) {
  ServiceObject.call(this, {
    parent: compute,
    baseUrl: '/global/firewalls',
    id: name,
    createMethod: compute.createFirewall.bind(compute)
  });

  this.compute = compute;
  this.name = name;
  this.metadata.network = 'global/networks/default';
}

nodeutil.inherits(Firewall, ServiceObject);

/**
 * Create a firewall.
 *
 * @resource [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 * @resource [Firewalls: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/insert}
 *
 * @param {object} config - See a
 *     [Firewall resource](https://cloud.google.com/compute/docs/reference/v1/firewalls#resource).
 * @param {object} config.protocols - A map of protocol to port range. The keys
 *     of the object refer to a protocol (e.g. `tcp`, `udp`) and the value for
 *     the key are the ports/port-ranges that are allowed to make a connection.
 * @param {string[]} config.ranges - The IP address blocks that this rule
 *     applies to, expressed in
 *     [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
 *     format.
 * @param {string[]} config.tags - Instance tags which this rule applies to.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/firewall} callback.firewall - The created Firewall
 *     object.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var config = {
 *   protocols: {
 *     tcp: [3000],
 *     udp: [] // An empty array means all ports are allowed.
 *   },
 *
 *   ranges: ['0.0.0.0/0']
 * };
 *
 * firewall.create(config, function(err, firewall, operation, apiResponse) {
 *   // `firewall` is a Firewall object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
Firewall.prototype.create = function() {
  ServiceObject.prototype.create.apply(this, arguments);
};

/**
 * Get a firewall if it exists. Also see {module:compute/firewall#getOrCreate}.
 *
 * @resource [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/firewall} callback.firewall - The Firewall object.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * firewall.get(function(err, firewall, apiResponse) {
 *   // `firewall` is a Firewall object.
 * });
 */
Firewall.prototype.get = function() {
  ServiceObject.prototype.get.apply(this, arguments);
};

/**
 * Get a firewall if it exists, otherwise create one.
 *
 * @resource [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 * @resource [Firewalls: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/insert}
 *
 * @param {object} config - See a
 *     [Firewall resource](https://cloud.google.com/compute/docs/reference/v1/firewalls#resource).
 * @param {object} config.protocols - A map of protocol to port range. The keys
 *     of the object refer to a protocol (e.g. `tcp`, `udp`) and the value for
 *     the key are the ports/port-ranges that are allowed to make a connection.
 * @param {string[]} config.ranges - The IP address blocks that this rule
 *     applies to, expressed in
 *     [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
 *     format.
 * @param {string[]} config.tags - Instance tags which this rule applies to.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/firewall} callback.firewall - The Firewall object.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var config = {
 *   protocols: {
 *     tcp: [3000],
 *     udp: [] // An empty array means all ports are allowed.
 *   },
 *
 *   ranges: ['0.0.0.0/0']
 * };
 *
 * function callback(err, firewall, operation, apiResponse) {
 *   // `firewall` is a Firewall object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * }
 *
 * firewall.getOrCreate(config, callback);
 */
Firewall.prototype.getOrCreate = function() {
  ServiceObject.prototype.getOrCreate.apply(this, arguments);
};

/**
 * Delete the firewall.
 *
 * @resource [Firewalls: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * firewall.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
Firewall.prototype.delete = function(callback) {
  var compute = this.compute;

  callback = callback || util.noop;

  ServiceObject.prototype.delete.call(this, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = compute.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/**
 * Get the firewall's metadata.
 *
 * @resource [Firewalls: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/get}
 * @resource [Firewall Resource]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object} callback.metadata - The firewall's metadata.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * firewall.getMetadata(function(err, metadata, apiResponse) {});
 */
Firewall.prototype.getMetadata = function() {
  ServiceObject.prototype.getMetadata.apply(this, arguments);
};

/**
 * Set the firewall's metadata.
 *
 * @resource [Firewall Resource]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls}
 *
 * @param {object} metadata - See a
 *     [Firewall resource](https://cloud.google.com/compute/docs/reference/v1/firewalls).
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var metadata = {
 *   description: 'New description'
 * };
 *
 * firewall.setMetadata(metadata, function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
Firewall.prototype.setMetadata = function(metadata, callback) {
  var compute = this.compute;

  callback = callback || util.noop;

  metadata = metadata || {};
  metadata.name = this.name;
  metadata.network = this.metadata.network;

  this.request({
    method: 'PATCH',
    uri: '',
    json: metadata
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = compute.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

module.exports = Firewall;
