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
 * @module compute
 */

'use strict';

var arrify = require('arrify');
var extend = require('extend');
var is = require('is');
var nodeutil = require('util');

/**
 * @type {module:compute/firewall}
 * @private
 */
var Firewall = require('./firewall.js');

/**
 * @type {module:compute/network}
 * @private
 */
var Network = require('./network.js');

/**
 * @type {module:compute/operation}
 * @private
 */
var Operation = require('./operation.js');

/**
 * @type {module:compute/region}
 * @private
 */
var Region = require('./region.js');

/**
 * @type {module:common/service}
 * @private
 */
var Service = require('../common/service.js');

/**
 * @type {module:compute/snapshot}
 * @private
 */
var Snapshot = require('./snapshot.js');

/**
 * @type {module:common/streamrouter}
 * @private
 */
var streamRouter = require('../common/stream-router.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * @type {module:compute/zone}
 * @private
 */
var Zone = require('./zone.js');

/**
 * A Compute object allows you to interact with the Google Compute Engine API.
 * Using this object, you can access your instances with {module:compute/vm},
 * disks with {module:compute/disk}, and firewalls with
 * {module:compute/firewall}.
 *
 * @alias module:compute
 * @constructor
 *
 * @classdesc
 * The object returned from `gcloud.compute` gives you complete control of your
 * Compute Engine virtual machines, disks, networks, snapshots, addresses,
 * firewalls, and more.
 *
 * To learn more about Compute Engine, see
 * [What is Google Compute Engine?](https://cloud.google.com/compute/docs)
 *
 * @param {object} options - [Configuration object](#/docs).
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var gce = gcloud.compute();
 */
function Compute(options) {
  if (!(this instanceof Compute)) {
    options = util.normalizeArguments(this, options);
    return new Compute(options);
  }

  var config = {
    baseUrl: 'https://www.googleapis.com/compute/v1',
    scopes: ['https://www.googleapis.com/auth/compute']
  };

  Service.call(this, config, options);
}

nodeutil.inherits(Compute, Service);

/**
 * Create a firewall.
 *
 * @resource [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 * @resource [Firewalls: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/insert}
 *
 * @throws {Error} if a name is not provided.
 * @throws {Error} if a config object is not provided.
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
 * function callback(err, firewall, operation, apiResponse) {
 *   // `firewall` is a Firewall object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * }
 *
 * gce.createFirewall('new-firewall-name', config, callback);
 */
Compute.prototype.createFirewall = function(name, config, callback) {
  var self = this;

  if (!is.string(name)) {
    throw new Error('A firewall name must be provided.');
  }

  if (!is.object(config)) {
    throw new Error('A firewall configuration object must be provided.');
  }

  var body = extend({}, config, {
    name: name
  });

  if (body.protocols) {
    body.allowed = arrify(body.allowed);

    for (var protocol in body.protocols) {
      var allowedConfig = {
        IPProtocol: protocol
      };

      var ports = arrify(body.protocols[protocol]);
      if (ports.length > 0) {
        allowedConfig.ports = ports;
      }

      body.allowed.push(allowedConfig);
    }

    delete body.protocols;
  }

  if (body.ranges) {
    body.sourceRanges = arrify(body.ranges);
    delete body.ranges;
  }

  if (body.tags) {
    body.sourceTags = arrify(body.tags);
    delete body.tags;
  }

  this.request({
    method: 'POST',
    uri: '/global/firewalls',
    json: body
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var firewall = self.firewall(name);

    var operation = self.operation(resp.name);
    operation.metadata = resp;

    callback(null, firewall, operation, resp);
  });
};

/**
 * Create a network.
 *
 * @resource [Networks Overview]{@link https://cloud.google.com/compute/docs/networking#networks}
 * @resource [Networks: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/networks/insert}
 *
 * @param {string} name - Name of the network.
 * @param {object} config - See a
 *     [Network resource](https://cloud.google.com/compute/docs/reference/v1/networks#resource).
 * @param {string} config.gateway - A gateway address for default routing to
 *     other networks. (Alias for `config.gatewayIPv4`)
 * @param {string} config.range -
 *     [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) range
 *     of addresses that are legal on this network. (Alias for
 *     `config.IPv4Range`)
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/network} callback.network - The created Network
 *     object.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var config = {
 *   range: '10.240.0.0/16'
 * };
 *
 * function callback(err, network, operation, apiResponse) {
 *   // `network` is a Network object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of network creation.
 * }
 *
 * gce.createNetwork('new-network', config, callback);
 */
Compute.prototype.createNetwork = function(name, config, callback) {
  var self = this;

  var body = extend({}, config, {
    name: name
  });

  if (body.range) {
    body.IPv4Range = body.range;
    delete body.range;
  }

  if (body.gateway) {
    body.gatewayIPv4 = body.gateway;
    delete body.gateway;
  }

  this.request({
    method: 'POST',
    uri: '/global/networks',
    json: body
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var network = self.network(name);

    var operation = self.operation(resp.name);
    operation.metadata = resp;

    callback(null, network, operation, resp);
  });
};

/**
 * Get a reference to a Google Compute Engine firewall.
 *
 * See {module:compute/network#firewall} to get a Firewall object for a specific
 * network.
 *
 * @resource [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 *
 * @param {string} name - Name of the firewall.
 * @return {module:compute/firewall}
 *
 * @example
 * var firewall = gce.firewall('firewall-name');
 */
Compute.prototype.firewall = function(name) {
  return new Firewall(this, name);
};

/**
 * Get a list of addresses. For a detailed description of method's options see
 * [API reference](https://goo.gl/r9XmXJ).
 *
 * @resource [Instances and Networks]{@link https://cloud.google.com/compute/docs/instances-and-network}
 * @resource [Addresses: aggregatedList API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/addresses/aggregatedList}
 *
 * @param {object=} options - Address search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {number} options.maxResults - Maximum number of addresses to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/address} callback.addresses - Address objects from
 *     your project.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getAddresses(function(err, addresses) {
 *   // addresses is an array of `Address` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, addresses, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getAddresses(nextQuery, callback);
 *   }
 * }
 *
 * gce.getAddresses({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the addresses from your project as a readable object stream.
 * //-
 * gce.getAddresses()
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
 * gce.getAddresses()
 *   .on('data', function(address) {
 *     this.end();
 *   });
 */
Compute.prototype.getAddresses = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/aggregated/addresses',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var regions = resp.items || {};

    var addresses = Object.keys(regions).reduce(function(acc, regionName) {
      var region = self.region(regionName.replace('regions/', ''));
      var regionAddresses = regions[regionName].addresses || [];

      regionAddresses.forEach(function(address) {
        var addressInstance = region.address(address.name);
        addressInstance.metadata = address;
        acc.push(addressInstance);
      });

      return acc;
    }, []);

    callback(null, addresses, nextQuery, resp);
  });
};

/**
 * Get a list of disks.
 *
 * @resource [Disks Overview]{@link https://cloud.google.com/compute/docs/disks}
 * @resource [Disks: aggregatedList API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/disks/aggregatedList}
 *
 * @param {object=} options - Disk search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {number} options.maxResults - Maximum number of disks to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/disk} callback.disks - Disk objects from your project.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getDisks(function(err, disks) {
 *   // `disks` is an array of `Disk` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, disks, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getDisks(nextQuery, callback);
 *   }
 * }
 *
 * gce.getDisks({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the disks from your project as a readable object stream.
 * //-
 * gce.getDisks()
 *   .on('error', console.error)
 *   .on('data', function(disk) {
 *     // `disk` is a `Disk` object.
 *   })
 *   .on('end', function() {
 *     // All disks retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gce.getDisks()
 *   .on('data', function(disk) {
 *     this.end();
 *   });
 */
Compute.prototype.getDisks = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/aggregated/disks',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var zones = resp.items || {};

    var disks = Object.keys(zones).reduce(function(acc, zoneName) {
      var zone = self.zone(zoneName.replace('zones/', ''));
      var disks = zones[zoneName].disks || [];

      disks.forEach(function(disk) {
        var diskInstance = zone.disk(disk.name);
        diskInstance.metadata = disk;
        acc.push(diskInstance);
      });

      return acc;
    }, []);

    callback(null, disks, nextQuery, resp);
  });
};

/**
 * Get a list of firewalls.
 *
 * @resource [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 * @resource [Firewalls: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/list}
 *
 * @param {object=} options - Firewall search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {number} options.maxResults - Maximum number of firewalls to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/firewall} callback.firewalls - Firewall objects from
 *     your project.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getFirewalls(function(err, firewalls) {
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
 *     gce.getFirewalls(nextQuery, callback);
 *   }
 * }
 *
 * gce.getFirewalls({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the firewalls from your project as a readable object stream.
 * //-
 * gce.getFirewalls()
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
 * gce.getFirewalls()
 *   .on('data', function(firewall) {
 *     this.end();
 *   });
 */
Compute.prototype.getFirewalls = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/global/firewalls',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var firewalls = (resp.items || []).map(function(firewall) {
      var firewallInstance = self.firewall(firewall.name);
      firewallInstance.metadata = firewall;
      return firewallInstance;
    });

    callback(null, firewalls, nextQuery, resp);
  });
};

/**
 * Get a list of networks.
 *
 * @resource [Networks Overview]{@link https://cloud.google.com/compute/docs/networking#networks}
 * @resource [Networks: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/networks/list}
 *
 * @param {object=} options - Network search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {number} options.maxResults - Maximum number of networks to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/network} callback.networks - Network objects from your
 *     project.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getNetworks(function(err, networks) {
 *   // `networks` is an array of `Network` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, networks, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getNetworks(nextQuery, callback);
 *   }
 * }
 *
 * gce.getNetworks({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the networks from your project as a readable object stream.
 * //-
 * gce.getNetworks()
 *   .on('error', console.error)
 *   .on('data', function(network) {
 *     // `network` is a `Network` object.
 *   })
 *   .on('end', function() {
 *     // All networks retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gce.getNetworks()
 *   .on('data', function(network) {
 *     this.end();
 *   });
 */
Compute.prototype.getNetworks = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/global/networks',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var networks = (resp.items || []).map(function(network) {
      var networkInstance = self.network(network.name);
      networkInstance.metadata = network;
      return networkInstance;
    });

    callback(null, networks, nextQuery, resp);
  });
};

/**
 * Get a list of global operations.
 *
 * @resource [Global Operation Overview]{@link https://cloud.google.com/compute/docs/reference/v1/globalOperations}
 * @resource [GlobalOperations: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/globalOperations/list}
 *
 * @param {object=} options - Operation search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {number} options.maxResults - Maximum number of operations to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operations - Operation objects
 *     from your project.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getOperations(function(err, operations) {
 *   // `operations` is an array of `Operation` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, operations, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getOperations(nextQuery, callback);
 *   }
 * }
 *
 * gce.getOperations({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the operations from your project as a readable object stream.
 * //-
 * gce.getOperations()
 *   .on('error', console.error)
 *   .on('data', function(operation) {
 *     // `operation` is a `Operation` object.
 *   })
 *   .on('end', function() {
 *     // All operations retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gce.getOperations()
 *   .on('data', function(operation) {
 *     this.end();
 *   });
 */
Compute.prototype.getOperations = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/global/operations',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var operations = (resp.items || []).map(function(operation) {
      var operationInstance = self.operation(operation.name);
      operationInstance.metadata = operation;
      return operationInstance;
    });

    callback(null, operations, nextQuery, resp);
  });
};

/**
 * Return the regions available to your project.
 *
 * @resource [Regions & Zones Overview]{@link https://cloud.google.com/compute/docs/zones}
 * @resource [Regions: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/regions/list}
 *
 * @param {object=} options - Instance search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {number} options.maxResults - Maximum number of instances to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/region} callback.regions - Region objects that are
 *     available to your project.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getRegions(function(err, regions) {
 *   // `regions` is an array of `Region` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, regions, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getRegions(nextQuery, callback);
 *   }
 * }
 *
 * gce.getRegions({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the regions available to your project as a readable object stream.
 * //-
 * gce.getRegions()
 *   .on('error', console.error)
 *   .on('data', function(region) {
 *     // `region` is a `Region` object.
 *   })
 *   .on('end', function() {
 *     // All regions retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gce.getRegions()
 *   .on('data', function(region) {
 *     this.end();
 *   });
 */
Compute.prototype.getRegions = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.request({
    uri: '/regions',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var regions = resp.items.map(function(region) {
      var regionInstance = self.region(region.name);
      regionInstance.metadata = region;
      return regionInstance;
    });

    callback(null, regions, nextQuery, resp);
  });
};

/**
 * Get a list of snapshots.
 *
 * @resource [Snapshots Overview]{@link https://cloud.google.com/compute/docs/disks/persistent-disks#snapshots}
 * @resource [Snapshots: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/snapshots/list}
 *
 * @param {object=} options - Snapshot search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {number} options.maxResults - Maximum number of snapshots to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/snapshot} callback.snapshots - Snapshot objects from
 *     your project.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getSnapshots(function(err, snapshots) {
 *   // `snapshots` is an array of `Snapshot` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, snapshots, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getSnapshots(nextQuery, callback);
 *   }
 * }
 *
 * gce.getSnapshots({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the snapshots from your project as a readable object stream.
 * //-
 * gce.getSnapshots()
 *   .on('error', console.error)
 *   .on('data', function(snapshot) {
 *     // `snapshot` is a `Snapshot` object.
 *   })
 *   .on('end', function() {
 *     // All snapshots retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gce.getSnapshots()
 *   .on('data', function(snapshot) {
 *     this.end();
 *   });
 */
Compute.prototype.getSnapshots = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/global/snapshots',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var snapshots = (resp.items || []).map(function(snapshot) {
      var snapshotInstance = self.snapshot(snapshot.name);
      snapshotInstance.metadata = snapshot;
      return snapshotInstance;
    });

    callback(null, snapshots, nextQuery, resp);
  });
};

/**
 * Get a list of virtual machine instances.
 *
 * @resource [Instances and Networks]{@link https://cloud.google.com/compute/docs/instances-and-network}
 * @resource [Instances: aggregatedList API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/aggregatedList}
 *
 * @param {object=} options - Instance search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {number} options.maxResults - Maximum number of instances to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/vm} callback.vms - VM objects from your project.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getVMs(function(err, vms) {
 *   // `vms` is an array of `VM` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, vms, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getVMs(nextQuery, callback);
 *   }
 * }
 *
 * gce.getVMs({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the VM instances from your project as a readable object stream.
 * //-
 * gce.getVMs()
 *   .on('error', console.error)
 *   .on('data', function(vm) {
 *     // `vm` is a `VM` object.
 *   })
 *   .on('end', function() {
 *     // All vms retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gce.getVMs()
 *   .on('data', function(vm) {
 *     this.end();
 *   });
 */
Compute.prototype.getVMs = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/aggregated/instances',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var zones = resp.items || {};

    var vms = Object.keys(zones).reduce(function(acc, zoneName) {
      var zone = self.zone(zoneName.replace('zones/', ''));
      var instances = zones[zoneName].instances || [];

      instances.forEach(function(instance) {
        var vmInstance = zone.vm(instance.name);
        vmInstance.metadata = instance;
        acc.push(vmInstance);
      });

      return acc;
    }, []);

    callback(null, vms, nextQuery, resp);
  });
};

/**
 * Return the zones available to your project.
 *
 * @resource [Regions & Zones Overview]{@link https://cloud.google.com/compute/docs/zones}
 * @resource [Zones: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/zones/list}
 *
 * @param {object=} options - Instance search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {number} options.maxResults - Maximum number of instances to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/zone} callback.zones - Zone objects that are available
 *     to your project.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getZones(function(err, zones) {
 *   // `zones` is an array of `Zone` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, zones, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getZones(nextQuery, callback);
 *   }
 * }
 *
 * gce.getZones({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the zones available to your project as a readable object stream.
 * //-
 * gce.getZones()
 *   .on('error', console.error)
 *   .on('data', function(zone) {
 *     // `zone` is a `Zone` object.
 *   })
 *   .on('end', function() {
 *     // All zones retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gce.getZones()
 *   .on('data', function(zone) {
 *     this.end();
 *   });
 */
Compute.prototype.getZones = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.request({
    uri: '/zones',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var zones = resp.items.map(function(zone) {
      var zoneInstance = self.zone(zone.name);
      zoneInstance.metadata = zone;
      return zoneInstance;
    });

    callback(null, zones, nextQuery, resp);
  });
};

/**
 * Get a reference to a Google Compute Engine network.
 *
 * @resource [Networks Overview]{@link https://cloud.google.com/compute/docs/networking#networks}
 *
 * @param {string} name - Name of the network.
 * @return {module:compute/network}
 *
 * @example
 * var network = gce.network('network-name');
 */
Compute.prototype.network = function(name) {
  return new Network(this, name);
};

/**
 * Get a reference to a global Google Compute Engine operation.
 *
 * @resource [Global Operation Overview]{@link https://cloud.google.com/compute/docs/reference/v1/globalOperations}
 *
 * @param {string} name - Name of the existing operation.
 * @return {module:compute/operation}
 *
 * @example
 * var operation = gce.operation('operation-name');
 */
Compute.prototype.operation = function(name) {
  return new Operation(this, name);
};

/**
 * Get a reference to a Google Compute Engine region.
 *
 * @resource [Regions & Zones Overview]{@link https://cloud.google.com/compute/docs/zones}
 *
 * @param {string} name - Name of the region.
 * @return {module:compute/region}
 *
 * @example
 * var region = gce.region('region-name');
 */
Compute.prototype.region = function(name) {
  return new Region(this, name);
};

/**
 * Get a reference to a Google Compute Engine snapshot.
 *
 * @resource [Snapshots Overview]{@link https://cloud.google.com/compute/docs/disks/persistent-disks#snapshots}
 *
 * @param {string} name - Name of the existing snapshot.
 * @return {module:compute/snapshot}
 *
 * @example
 * var snapshot = gce.snapshot('snapshot-name');
 */
Compute.prototype.snapshot = function(name) {
  return new Snapshot(this, name);
};

/**
 * Get a reference to a Google Compute Engine zone.
 *
 * @resource [Regions & Zones Overview]{@link https://cloud.google.com/compute/docs/zones}
 *
 * @param {string} name - Name of the zone.
 * @return {module:compute/zone}
 *
 * @example
 * var zone = gce.zone('zone-name');
 */
Compute.prototype.zone = function(name) {
  return new Zone(this, name);
};

/*! Developer Documentation
 *
 * These methods can be used with either a callback or as a readable object
 * stream. `streamRouter` is used to add this dual behavior.
 */
streamRouter.extend(Compute, [
  'getAddresses',
  'getDisks',
  'getFirewalls',
  'getNetworks',
  'getOperations',
  'getRegions',
  'getSnapshots',
  'getVMs',
  'getZones'
]);

module.exports = Compute;
