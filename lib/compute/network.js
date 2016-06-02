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
 * @module compute/network
 */

'use strict';

var extend = require('extend');
var format = require('string-format-obj');
var is = require('is');
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
 * @param {module:compute} compute - The Compute module this network belongs to.
 * @param {string} name - Network name.
 */
/**
 * A Network object allows you to interact with a Google Compute Engine network.
 *
 * @resource [Networks Overview]{@link https://cloud.google.com/compute/docs/networking#networks}
 * @resource [Network Resource]{@link https://cloud.google.com/compute/docs/reference/v1/networks}
 *
 * @constructor
 * @alias module:compute/network
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var gce = gcloud.compute();
 *
 * var network = gce.network('network-name');
 */
function Network(compute, name) {
  var methods = {
    /**
     * Create a network.
     *
     * @param {object} config - See {module:compute#createNetwork}.
     *
     * @example
     * var config = {
     *   // ...
     * };
     *
     * network.create(config, function(err, network, operation, apiResponse) {
     *   // `network` is a Network object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // status of network creation.
     * });
     */
    create: true,

    /**
     * Check if the network exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the network exists or not.
     *
     * @example
     * network.exists(function(err, exists) {});
     */
    exists: true,

    /**
     * Get a network if it exists.
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
     * network.get(function(err, network, apiResponse) {
     *   // `network` is a Network object.
     * });
     */
    get: true,

    /**
     * Get the network's metadata.
     *
     * @resource [Network Resource]{@link https://cloud.google.com/compute/docs/reference/v1/networks}
     * @resource [Networks: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/networks/delete}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The network's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * network.getMetadata(function(err, metadata, apiResponse) {});
     */
    getMetadata: true
  };

  ServiceObject.call(this, {
    parent: compute,
    baseUrl: '/global/networks',
    id: name,
    createMethod: compute.createNetwork.bind(compute),
    methods: methods,
  });

  this.compute = compute;
  this.formattedName = Network.formatName_(compute, name);
  this.name = name;
}

nodeutil.inherits(Network, ServiceObject);

/**
 * Format a network's name how the API expects.
 *
 * @private
 *
 * @param {module:compute} compute - The Compute object this network belongs to.
 * @param {string} name - The name of the network.
 * @return {string} - The formatted name.
 */
Network.formatName_ = function(compute, name) {
  return format('projects/{projectId}/global/networks/{name}', {
    projectId: compute.projectId,
    name: name
  });
};

/**
 * Create a firewall for this network.
 *
 * @resource [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 * @resource [Firewalls: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/insert}
 *
 * @param {string} name - Name of the firewall.
 * @param {object} config - See a
 *     [Firewall resource](https://cloud.google.com/compute/docs/reference/v1/firewalls#resource).
 * @param {object} config.protocols - A map of protocol to port range. The keys
 *     of the object refer to a protocol (e.g. `tcp`, `udp`) and the value for
 *     the key are the ports/port-ranges that are allowed to make a connection.
 * @param {string[]} config.ranges - The IP address blocks that this rule
 *     applies to, expressed in
 *     [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
 *     format.
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
 * function callback(err, firewall, operation, apiResponse) {
 *   // `firewall` is a Firewall object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * }
 *
 * network.createFirewall('new-firewall-name', config, callback);
 */
Network.prototype.createFirewall = function(name, config, callback) {
  config = extend({}, config, {
    network: this.formattedName
  });

  this.compute.createFirewall(name, config, callback);
};

/**
 * Delete the network.
 *
 * @resource [Networks: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/networks/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * network.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
Network.prototype.delete = function(callback) {
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
 * Get a reference to a Google Compute Engine firewall in this network.
 *
 * @resource [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 *
 * @param {string} name - Name of the firewall.
 *
 * @example
 * var firewall = network.firewall('firewall-name');
 */
Network.prototype.firewall = function(name) {
  var firewall = this.compute.firewall(name);

  firewall.metadata = {
    network: this.formattedName
  };

  return firewall;
};

/**
 * Get a list of firewalls for this network.
 *
 * @resource [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 * @resource [Firewalls: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/list}
 *
 * @param {object=} options - Firewall search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of firewalls to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/firewall} callback.firewalls - Firewall objects from
 *     this network.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * network.getFirewalls(function(err, firewalls) {
 *   // `firewalls` is an array of `Firewall` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, firewalls, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     network.getFirewalls(nextQuery, callback);
 *   }
 * }
 *
 * network.getFirewalls({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the firewalls from your project as a readable object stream.
 * //-
 * network.getFirewalls()
 *   .on('error', console.error)
 *   .on('data', function(firewall) {
 *     // `firewall` is a `Firewall` object.
 *   })
 *   .on('end', function() {
 *     // All firewalls retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * network.getFirewalls()
 *   .on('data', function(firewall) {
 *     this.end();
 *   });
 */
Network.prototype.getFirewalls = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    filter: 'network eq .*' + this.formattedName
  });

  return this.compute.getFirewalls(options, callback);
};

module.exports = Network;
