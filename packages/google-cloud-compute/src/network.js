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

'use strict';

var common = require('@google-cloud/common');
var extend = require('extend');
var format = require('string-format-obj');
var is = require('is');
var util = require('util');

/**
 * A Network object allows you to interact with a Google Compute Engine network.
 *
 * @see [Networks Overview]{@link https://cloud.google.com/compute/docs/networking#networks}
 * @see [Network Resource]{@link https://cloud.google.com/compute/docs/reference/v1/networks}
 *
 * @class
 * @param {Compute} compute
 * @param {strign} name
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const network = compute.network('network-name');
 */
function Network(compute, name) {
  var methods = {
    /**
     * Create a network.
     *
     * @method Network#create
     * @param {object} config - See {@link Compute#createNetwork}.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const network = compute.network('network-name');
     *
     * const config = {
     *   // ...
     * };
     *
     * network.create(config, function(err, network, operation, apiResponse) {
     *   // `network` is a Network object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // status of network creation.
     * });
     *
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * network.create(config).then(function(data) {
     *   const network = data[0];
     *   const operation = data[1];
     *   const apiResponse = data[2];
     * });
     */
    create: true,

    /**
     * Check if the network exists.
     *
     * @method Network#exists
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the network exists or not.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const network = compute.network('network-name');
     *
     * network.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * network.exists().then(function(data) {
     *   const exists = data[0];
     * });
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
     * @method Network#get
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const network = compute.network('network-name');
     *
     * network.get(function(err, network, apiResponse) {
     *   // `network` is a Network object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * network.get().then(function(data) {
     *   const network = data[0];
     *   const apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the network's metadata.
     *
     * @see [Network Resource]{@link https://cloud.google.com/compute/docs/reference/v1/networks}
     * @see [Networks: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/networks/delete}
     *
     * @method Network#getMetadata
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The network's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const network = compute.network('network-name');
     *
     * network.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * network.getMetadata().then(function(data) {
     *   const metadata = data[0];
     *   const apiResponse = data[1];
     * });
     */
    getMetadata: true,
  };

  common.ServiceObject.call(this, {
    parent: compute,
    baseUrl: '/global/networks',
    /**
     * @name Network#id
     * @type {string}
     */
    id: name,
    createMethod: compute.createNetwork.bind(compute),
    methods: methods,
  });

  /**
   * The parent {@link Compute} instance of this {@link Network} instance.
   * @name Network#compute
   * @type {Compute}
   */
  this.compute = compute;
  /**
   * @name Network#formattedName
   * @type {string}
   */
  this.formattedName = Network.formatName_(compute, name);
  /**
   * @name Network#name
   * @type {string}
   */
  this.name = name;
}

util.inherits(Network, common.ServiceObject);

/**
 * Format a network's name how the API expects.
 *
 * @private
 *
 * @param {Compute} compute - The Compute object this network belongs to.
 * @param {string} name - The name of the network.
 * @returns {string} - The formatted name.
 */
Network.formatName_ = function(compute, name) {
  return format('projects/{projectId}/global/networks/{name}', {
    projectId: compute.projectId,
    name: name,
  });
};

/**
 * Create a firewall for this network.
 *
 * @see [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 * @see [Firewalls: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/insert}
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
 * @param {Firewall} callback.firewall - The created Firewall
 *     object.
 * @param {Operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const network = compute.network('network-name');
 *
 * const config = {
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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * network.createFirewall('new-firewall-name', config).then(function(data) {
 *   const firewall = data[0];
 *   const operation = data[1];
 *   const apiResponse = data[2];
 * });
 */
Network.prototype.createFirewall = function(name, config, callback) {
  config = extend({}, config, {
    network: this.formattedName,
  });

  this.compute.createFirewall(name, config, callback);
};

/**
 * Create a subnetwork in this network.
 *
 * @see [Subnetwork Resource]{@link https://cloud.google.com/compute/docs/reference/v1/subnetworks#resource}
 * @see [Subnetwork: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/subnetworks/insert}
 *
 * @param {string} name - Name of the subnetwork.
 * @param {object} config - See a
 *     [Subnetwork resource](https://cloud.google.com/compute/docs/reference/v1/subnetworks#resource).
 * @param {Region|string} config.region - The region where the
 *    Subnetwork resides.
 * @param {string} config.range - The range of internal addresses that
 *    are owned by this subnetwork.
 *    [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) range
 *    of addresses that are legal on this network. (Alias for
 *    `config.ipCidrRange`)
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {Subnetwork} callback.subnetwork - The created
 *     Subnetwork object.
 * @param {Operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const network = compute.network('network-name');
 * const region = compute.region('us-east1');
 *
 * const config = {
 *   region: region,
 *   range: '10.0.1.0/24'
 * };
 *
 * function callback(err, subnetwork, operation, apiResponse) {
 *   // `subnetwork` is a Subnetwork object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * }
 *
 * network.createSubnetwork('new-subnetwork-name', config, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * network.createSubnetwork('new-subnetwork-name', config).then(function(data) {
 *   const subnetwork = data[0];
 *   const operation = data[1];
 *   const apiResponse = data[2];
 * });
 */
Network.prototype.createSubnetwork = function(name, config, callback) {
  config = extend({}, config, {
    network: this.formattedName,
  });

  var region = config.region;

  if (is.string(region)) {
    region = this.compute.region(region);
  }

  delete config.region;

  region.createSubnetwork(name, config, callback);
};

/**
 * Get a list of subnetworks in this network.
 *
 * @see [Subnetworks Overview]{@link https://cloud.google.com/compute/docs/subnetworks}
 * @see [Subnetworks: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/subnetworks}
 *
 * @param {object=} options - Subnetwork search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of subnetworks to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {Subnetwork[]} callback.subnetworks - Subnetwork
 *     objects from this network.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const network = compute.network('network-name');
 *
 * network.getSubnetworks(function(err, subnetworks) {
 *   // `subnetworks` is an array of `Subnetworks` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, subnetworks, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     network.getSubnetworks(nextQuery, callback);
 *   }
 * }
 *
 * network.getSubnetworks({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * network.getSubnetworks().then(function(data) {
 *   const subnetworks = data[0];
 * });
 */
Network.prototype.getSubnetworks = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    filter: 'network eq .*' + this.formattedName,
  });

  this.compute.getSubnetworks(options, callback);
};

/**
 * Get a {@link Subnetwork} list within this network as a readable
 * object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {@link Network#getSubnetworks} for a complete list of options.
 * @returns {stream}
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const network = compute.network('network-name');
 *
 * network.getSubnetworksStream()
 *   .on('error', console.error)
 *   .on('data', function(subnetwork) {
 *     // `subnetwork` is a `Subnetwork` object.
 *   })
 *   .on('end', function() {
 *     // All subnetworks retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * network.getSubnetworksStream()
 *   .on('data', function(subnetwork) {
 *     this.end();
 *   });
 */
Network.prototype.getSubnetworksStream = function(options) {
  options = extend({}, options, {
    filter: 'network eq .*' + this.formattedName,
  });

  return this.compute.getSubnetworksStream(options);
};

/**
 * Delete the network.
 *
 * @see [Networks: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/networks/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {Operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const network = compute.network('network-name');
 *
 * network.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * network.delete().then(function(data) {
 *   const operation = data[0];
 *   const apiResponse = data[1];
 * });
 */
Network.prototype.delete = function(callback) {
  var compute = this.compute;

  callback = callback || common.util.noop;

  common.ServiceObject.prototype.delete.call(this, function(err, resp) {
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
 * @see [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 *
 * @param {string} name - Name of the firewall.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const network = compute.network('network-name');
 * const firewall = network.firewall('firewall-name');
 */
Network.prototype.firewall = function(name) {
  var firewall = this.compute.firewall(name);

  firewall.metadata = {
    network: this.formattedName,
  };

  return firewall;
};

/**
 * Get a list of firewalls for this network.
 *
 * @see [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 * @see [Firewalls: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/list}
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
 * @param {Firewall[]} callback.firewalls - Firewall objects from
 *     this network.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const network = compute.network('network-name');
 *
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * network.getFirewalls().then(function(data) {
 *   const firewalls = data[0];
 * });
 */
Network.prototype.getFirewalls = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    filter: 'network eq .*' + this.formattedName,
  });

  this.compute.getFirewalls(options, callback);
};

/**
 * Get a list of {@link Firewall} objects for this network as a
 * readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {@link Network#getFirewalls} for a complete list of options.
 * @returns {stream}
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const network = compute.network('network-name');
 *
 * network.getFirewallsStream()
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
 * network.getFirewallsStream()
 *   .on('data', function(firewall) {
 *     this.end();
 *   });
 */
Network.prototype.getFirewallsStream = function(options) {
  options = extend({}, options, {
    filter: 'network eq .*' + this.formattedName,
  });

  return this.compute.getFirewallsStream(options);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Network, {
  exclude: ['firewall'],
});

/**
 * Reference to the {@link Network} class.
 * @name module:@google-cloud/compute.Network
 * @see Network
 */
module.exports = Network;
