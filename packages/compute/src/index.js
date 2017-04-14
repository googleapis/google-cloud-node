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
var common = require('@google-cloud/common');
var extend = require('extend');
var is = require('is');
var util = require('util');

/**
 * @type {module:compute/firewall}
 * @private
 */
var Firewall = require('./firewall.js');

/**
 * @type {module:compute/health-check}
 * @private
 */
var HealthCheck = require('./health-check.js');

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
 * @type {module:compute/rule}
 * @private
 */
var Rule = require('./rule.js');

/**
 * @type {module:compute/service}
 * @private
 */
var Service = require('./service.js');

/**
 * @type {module:compute/snapshot}
 * @private
 */
var Snapshot = require('./snapshot.js');

/**
 * @type {module:compute/zone}
 * @private
 */
var Zone = require('./zone.js');

/**
 * @alias module:compute
 * @constructor
 *
 * @resource [What is Google Compute Engine?]{@link https://cloud.google.com/compute/docs}
 *
 * @param {object} options - [Configuration object](#/docs).
 */
function Compute(options) {
  if (!(this instanceof Compute)) {
    options = common.util.normalizeArguments(this, options);
    return new Compute(options);
  }

  var config = {
    baseUrl: 'https://www.googleapis.com./compute/v1',
    scopes: ['https://www.googleapis.com/auth/compute'],
    packageJson: require('../package.json')
  };

  common.Service.call(this, config, options);
}

util.inherits(Compute, common.Service);

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
 *     If a `true` value, that means all ports on that protocol will be opened.
 *     If `false`, all traffic on that protocol will be blocked.
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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.createFirewall('new-firewall-name', config).then(function(data) {
 *   var firewall = data[0];
 *   var operation = data[1];
 *   var apiResponse = data[2];
 * });
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

      var ports = body.protocols[protocol];

      if (ports === false || ports.length === 0) {
        continue;
      }

      // If the port is `true`, open up all ports on this protocol.
      allowedConfig.ports = ports === true ? [] : arrify(ports);

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
 * Create an HTTP or HTTPS health check.
 *
 * @resource [Health Checks Overview]{@link https://cloud.google.com/compute/docs/load-balancing/health-checks}
 * @resource [HttpHealthCheck: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks/insert}
 * @resource [HttpsHealthCheck: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks/insert}
 *
 * @param {string} name - Name of the HTTP or HTTPS health check to create.
 * @param {object=} options - See a
 *     [HttpHealthCheck resource](https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks#resource)
 *     and [HttpsHealthCheck resource](https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks#resource).
 * @param {boolean} options.https - Create an HTTPs health check. Default:
 *     `false`.
 * @param {number} options.interval - How often (in seconds) to send a health
 *     check. The default value is 5 seconds. (Alias for
 *     `options.checkIntervalSec`)
 * @param {number} options.timeout - How long (in seconds) to wait before
 *     claiming failure. The default value is 5 seconds. It is invalid for
 *     this value to be greater than checkIntervalSec. (Alias for
 *     `options.timeoutSec`)
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/health-check} callback.healthCheck - The created
 *     HealthCheck object.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * function callback(err, healthCheck, operation, apiResponse) {
 *   // `healthCheck` is a HealthCheck object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of network creation.
 * }
 *
 * gce.createHealthCheck('new-health-check-name', callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.createHealthCheck('new-health-check-name').then(function(data) {
 *   var healthCheck = data[0];
 *   var operation = data[1];
 *   var apiResponse = data[2];
 * });
 */
Compute.prototype.createHealthCheck = function(name, options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  if (!is.string(name)) {
    throw new Error('A health check name must be provided.');
  }

  var body = extend({}, options, {
    name: name
  });

  var https = options.https;
  delete body.https;

  if (body.interval) {
    body.checkIntervalSec = body.interval;
    delete body.interval;
  }

  if (body.timeout) {
    body.timeoutSec = body.timeout;
    delete body.timeout;
  }

  this.request({
    method: 'POST',
    uri: '/global/' + (https ? 'httpsHealthChecks' : 'httpHealthChecks'),
    json: body
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var healthCheck = self.healthCheck(name, {
      https: https
    });

    var operation = self.operation(resp.name);
    operation.metadata = resp;

    callback(null, healthCheck, operation, resp);
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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.createNetwork('new-network', config).then(function(data) {
 *   var network = data[0];
 *   var operation = data[1];
 *   var apiResponse = data[2];
 * });
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
 * Create a global forwarding rule.
 *
 * @resource [GlobalForwardingRule Resource]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules#resource}
 * @resource [GlobalForwardingRules: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules/insert}
 *
 * @param {string} name - Name of the rule.
 * @param {object} config - See a
 *     [GlobalForwardingRule resource](https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules#resource).
 * @param {string=} config.ip - The single IP address this forwarding rule will
 *     match against. All traffic that matches the IP address, protocol, and
 *     ports of this forwarding rule will be handled by this rule. If specified,
 *     the IP address must be a static external IP address. To create a new
 *     ephemeral external IP address for the forwarding rule, leave this field
 *     empty. (Alias for `config.IPAddress`)
 * @param {string=} config.protocol - The type of protocol that this forwarding
 *     rule matches. Valid values are `AH`, `ESP`, `SCTP`, `TCP`, `UDP`.
 *     Default: `TCP`. (Alias for `config.IPProtocol`)
 * @param {string=} config.range - A single port or single contiguous port
 *     range, ranging from low to high for which this forwarding rule matches.
 *     Packets of the specified protocol sent to these ports will be forwarded
 *     on to the appropriate target pool or target instance. If this field is
 *     left empty, then the forwarding matches traffic for all ports for the
 *     specified protocol. (Alias for `config.portRange`)
 * @param {string} config.target - The full or valid partial URL of the target
 *     resource to receive the matched traffic. This target must be a global
 *     [`TargetHttpProxy` or `TargetHttpsProxy` resource](https://cloud.google.com/compute/docs/load-balancing/http/target-proxies).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/rule} callback.rule - The created Rule object.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var name = 'new-rule-name';
 *
 * var config = {
 *   target: 'global/targetHttpProxies/my-proxy',
 *   range: '8080-8089'
 * };
 *
 * gce.createRule(name, config, function (err, rule, operation, apiResponse) {
 *   // `rule` is a Rule object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.createRule(name, config).then(function(data) {
 *   var rule = data[0];
 *   var operation = data[1];
 *   var apiResponse = data[2];
 * });
 */
Compute.prototype.createRule = function(name, config, callback) {
  var self = this;

  var body = extend({}, config, {
    name: name
  });

  if (body.ip) {
    body.IPAddress = body.ip;
    delete body.ip;
  }

  if (body.protocol) {
    body.IPProtocol = body.protocol;
    delete body.protocol;
  }

  if (body.range) {
    body.portRange = body.range;
    delete body.range;
  }

  this.request({
    method: 'POST',
    uri: '/global/forwardingRules',
    json: body
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var rule = self.rule(name);

    var operation = self.operation(resp.name);
    operation.metadata = resp;

    callback(null, rule, operation, resp);
  });
};

/**
 * Create a backend service.
 *
 * @resource [Backend Services Overview]{@link https://cloud.google.com/compute/docs/load-balancing/http/backend-service}
 * @resource [BackendServices: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/backendServices/insert}
 *
 * @param {string} name - Name of the backend service.
 * @param {object} config - See a
 *     [BackendService resource](https://cloud.google.com/compute/docs/reference/v1/backendServices#resource).
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/service} callback.service - The created Service
 *     object.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var config = {
 *   backends: [
 *     {
 *       group: 'URL of an Instance Group resource'
 *     }
 *   ],
 *   healthChecks: [
 *     'URL of an HTTP/HTTPS health check resource'
 *   ]
 * };
 *
 * function callback(err, service, operation, apiResponse) {
 *   // `service` is a Service object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of network creation.
 * }
 *
 * gce.createService('new-service', config, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.createService('new-service', config).then(function(data) {
 *   var service = data[0];
 *   var operation = data[1];
 *   var apiResponse = data[2];
 * });
 */
Compute.prototype.createService = function(name, config, callback) {
  var self = this;

  var body = extend({}, config, {
    name: name
  });

  this.request({
    method: 'POST',
    uri: '/global/backendServices',
    json: body
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var service = self.service(name);

    var operation = self.operation(resp.name);
    operation.metadata = resp;

    callback(null, service, operation, resp);
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
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of addresses to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/address[]} callback.addresses - Address objects from
 *     your project.
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.getAddresses().then(function(data) {
 *   var addresses = data[0];
 * });
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
 * Get a list of {module:compute/address} objects as a readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute#getAddresses} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getAddressesStream()
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
 * gce.getAddressesStream()
 *   .on('data', function(address) {
 *     this.end();
 *   });
 */
Compute.prototype.getAddressesStream =
  common.paginator.streamify('getAddresses');

/**
 * Get a list of autoscalers. For a detailed description of this method's
 * options, see the [API reference](https://cloud.google.com/compute/docs/reference/v1/autoscalers/aggregatedList).
 *
 * @resource [Managing Autoscalers]{@link https://cloud.google.com/compute/docs/autoscaler/managing-autoscalers}
 * @resource [Understanding Autoscaler Decisions]{@link https://cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions}
 * @resource [Autoscalers: aggregatedList API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/autoscalers/aggregatedList}
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
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of addresses to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/autoscaler[]} callback.autoscalers - Autoscaler
 *     objects from your project.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getAutoscalers(function(err, autoscalers) {
 *   // autoscalers is an array of `Autoscaler` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, autoscalers, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getAutoscalers(nextQuery, callback);
 *   }
 * }
 *
 * gce.getAutoscalers({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.getAutoscalers().then(function(data) {
 *   var autoscalers = data[0];
 * });
 */
Compute.prototype.getAutoscalers = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/aggregated/autoscalers',
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

    var autoscalers = Object.keys(zones).reduce(function(acc, zoneName) {
      if (zoneName.indexOf('zones/') !== 0) {
        return acc;
      }

      var zone = self.zone(zoneName.replace('zones/', ''));
      var zoneAutoscalers = zones[zoneName].autoscalers || [];

      zoneAutoscalers.forEach(function(autoscaler) {
        var autoscalerInstance = zone.autoscaler(autoscaler.name);
        autoscalerInstance.metadata = autoscaler;
        acc.push(autoscalerInstance);
      });

      return acc;
    }, []);

    callback(null, autoscalers, nextQuery, resp);
  });
};

/**
 * Get a list of {module:compute/autoscaler} objects as a readable object
 * stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:compute#getAutoscalers} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getAutoscalersStream()
 *   .on('error', console.error)
 *   .on('data', function(autoscaler) {
 *     // `autoscaler` is an `Autoscaler` object.
 *   })
 *   .on('end', function() {
 *     // All addresses retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gce.getAutoscalersStream()
 *   .on('data', function(address) {
 *     this.end();
 *   });
 */
Compute.prototype.getAutoscalersStream =
  common.paginator.streamify('getAutoscalers');

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
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of disks to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/disk[]} callback.disks - Disk objects from your
 *     project.
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.getDisks().then(function(data) {
 *   var disks = data[0];
 * });
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
 * Get a list of {module:compute/disk} objects as a readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute#getDisks} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getDisksStream()
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
 * gce.getDisksStream()
 *   .on('data', function(disk) {
 *     this.end();
 *   });
 */

Compute.prototype.getDisksStream = common.paginator.streamify('getDisks');

/**
 * Get a list of instance groups.
 *
 * @resource [InstanceGroups Overview]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups}
 * @resource [InstanceGroups: aggregatedList API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups/aggregatedList}
 *
 * @param {object=} options - Instance group search options.
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
 * @param {number} options.maxResults - Maximum number of instance groups to
 *     return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/instance-group[]} callback.instanceGroups -
 *     InstanceGroup objects from your project.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getInstanceGroups(function(err, instanceGroups) {
 *   // `instanceGroups` is an array of `InstanceGroup` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, instanceGroups, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getInstanceGroups(nextQuery, callback);
 *   }
 * }
 *
 * gce.getInstanceGroups({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.getInstanceGroups().then(function(data) {
 *   var instanceGroups = data[0];
 * });
 */
Compute.prototype.getInstanceGroups = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/aggregated/instanceGroups',
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

    var instanceGroups = Object.keys(zones).reduce(function(acc, zoneName) {
      var zone = self.zone(zoneName.replace('zones/', ''));
      var instanceGroups = zones[zoneName].instanceGroups || [];

      instanceGroups.forEach(function(group) {
        var instanceGroupInstance = zone.instanceGroup(group.name);
        instanceGroupInstance.metadata = group;
        acc.push(instanceGroupInstance);
      });

      return acc;
    }, []);

    callback(null, instanceGroups, nextQuery, resp);
  });
};

/**
 * Get a list of {module:compute/instanceGroup} objects as a readable object
 * stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute#getInstanceGroups} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getInstanceGroupsStream()
 *   .on('error', console.error)
 *   .on('data', function(instanceGroup) {
 *     // `instanceGroup` is an `InstanceGroup` object.
 *   })
 *   .on('end', function() {
 *     // All instance groups retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gce.getInstanceGroupsStream()
 *   .on('data', function(instanceGroup) {
 *     this.end();
 *   });
 */

Compute.prototype.getInstanceGroupsStream =
  common.paginator.streamify('getInstanceGroups');

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
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of firewalls to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/firewall[]} callback.firewalls - Firewall objects from
 *     your project.
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
 * gce.getFirewalls().then(function(data) {
 *   var firewalls = data[0];
 * });
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
 * Get a list of {module:compute/firewall} objects as a readable object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:compute#getFirewalls} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getFirewallsStream()
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
 * gce.getFirewallsStream()
 *   .on('data', function(firewall) {
 *     this.end();
 *   });
 */

Compute.prototype.getFirewallsStream =
  common.paginator.streamify('getFirewalls');

/**
 * Get a list of health checks.
 *
 * @resource [Health Checks Overview]{@link https://cloud.google.com/compute/docs/load-balancing/health-checks}
 * @resource [HttpHealthCheck: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks/list}
 * @resource [HttpsHealthCheck: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks/list}
 *
 * @param {object=} options - Health check search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {boolean} options.https - List only HTTPs health checks. Default:
 *     `false`.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of networks to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/health-check[]} callback.healthChecks - HealthCheck
 *     objects from your project.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getHealthChecks(function(err, healthChecks) {
 *   // `healthChecks` is an array of `HealthCheck` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, healthChecks, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getHealthChecks(nextQuery, callback);
 *   }
 * }
 *
 * gce.getHealthChecks({
 *   autoPaginate: false
 * }, callback);
 *
 * gce.getHealthChecks().then(function(data) {
 *   var healthChecks = data[0];
 * });
 */
Compute.prototype.getHealthChecks = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options);

  var https = options.https;
  delete options.https;

  this.request({
    uri: '/global/' + (https ? 'httpsHealthChecks' : 'httpHealthChecks'),
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

    var healthChecks = (resp.items || []).map(function(healthCheck) {
      var healthCheckInstance = self.healthCheck(healthCheck.name, {
        https: https
      });
      healthCheckInstance.metadata = healthCheck;
      return healthCheckInstance;
    });

    callback(null, healthChecks, nextQuery, resp);
  });
};

/**
 * Get a list of {module:compute/healthCheck} objects as a readable object
 * stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute#getHealthChecks} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getHealthChecksStream()
 *   .on('error', console.error)
 *   .on('data', function(healthCheck) {
 *     // `healthCheck` is a `HealthCheck` object.
 *   })
 *   .on('end', function() {
 *     // All health checks retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gce.getHealthChecksStream()
 *   .on('data', function(healthCheck) {
 *     this.end();
 *   });
 */

Compute.prototype.getHealthChecksStream =
  common.paginator.streamify('getHealthChecks');

/**
 * Get a list of machine types in this project.
 *
 * @resource [MachineTypes: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/machineTypes/aggregatedList}
 * @resource [Machine Types Overview]{@link https://cloud.google.com/compute/docs/machine-types}
 * @resource [MachineType Resource]{@link https://cloud.google.com/compute/docs/reference/v1/machineTypes}
 *
 * @param {object=} options - Machine type search options.
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
 * @param {number} options.maxResults - Maximum number of machineTypes to
 *     return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/machine-type[]} callback.machineTypes - MachineType
 *     objects from your project.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getMachineTypes(function(err, machineTypes) {
 *   // `machineTypes` is an array of `MachineType` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, machineTypes, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getMachineTypes(nextQuery, callback);
 *   }
 * }
 *
 * gce.getMachineTypes({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.getMachineTypes().then(function(data) {
 *   var machineTypes = data[0];
 * });
 */
Compute.prototype.getMachineTypes = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/aggregated/machineTypes',
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

    var machineTypes = Object.keys(zones).reduce(function(acc, zoneName) {
      var zone = self.zone(zoneName.replace('zones/', ''));
      var machineTypesByZone = zones[zoneName].machineTypes || [];

      machineTypesByZone.forEach(function(machineType) {
        var machineTypeInstance = zone.machineType(machineType.name);
        machineTypeInstance.metadata = machineType;
        acc.push(machineTypeInstance);
      });

      return acc;
    }, []);

    callback(null, machineTypes, nextQuery, resp);
  });
};

/**
 * Get a list of {module:compute/machineType} objects in this project as a
 * readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute#getMachineTypes} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getMachineTypesStream()
 *   .on('error', console.error)
 *   .on('data', function(machineType) {
 *     // `machineType` is a `MachineType` object.
 *   })
 *   .on('end', function() {
 *     // All machine types retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gce.getMachineTypesStream()
 *   .on('data', function(machineType) {
 *     this.end();
 *   });
 */
Compute.prototype.getMachineTypesStream =
  common.paginator.streamify('getMachineTypes');

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
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of networks to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/network[]} callback.networks - Network objects from
 *     your project.
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.getNetworks().then(function(data) {
 *   var networks = data[0];
 * });
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
 * Get a list of {module:compute/network} objects as a readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute#getNetworks} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getNetworksStream()
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
 * gce.getNetworksStream()
 *   .on('data', function(network) {
 *     this.end();
 *   });
 */
Compute.prototype.getNetworksStream = common.paginator.streamify('getNetworks');

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
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of operations to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation[]} callback.operations - Operation objects
 *     from your project.
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.getOperations().then(function(data) {
 *   var operations = data[0];
 * });
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
 * Get a list of global {module:compute/operation} objects as a readable object
 * stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute#getOperations} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getOperationsStream()
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
 * gce.getOperationsStream()
 *   .on('data', function(operation) {
 *     this.end();
 *   });
 */
Compute.prototype.getOperationsStream =
  common.paginator.streamify('getOperations');

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
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of instances to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/region[]} callback.regions - Region objects that are
 *     available to your project.
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.getRegions().then(function(data) {
 *   var regions = data[0];
 * });
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
 * Return the {module:compute/region} objects available to your project as a
 * readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute#getRegions} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getRegionsStream()
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
 * gce.getRegionsStream()
 *   .on('data', function(region) {
 *     this.end();
 *   });
 */
Compute.prototype.getRegionsStream = common.paginator.streamify('getRegions');

/**
 * Get a list of forwarding rules.
 *
 * @resource [GlobalForwardingRules: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules/list}
 *
 * @param {object=} options - Rules search options.
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
 * @param {number} options.maxResults - Maximum number of rules to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/rule[]} callback.rules - Rule objects from your
 *     project.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getRules(function(err, rules) {
 *   // `rules` is an array of `Rule` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, rules, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getRules(nextQuery, callback);
 *   }
 * }
 *
 * gce.getRules({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.getRules().then(function(data) {
 *   var rules = data[0];
 * });
 */
Compute.prototype.getRules = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/global/forwardingRules',
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

    var rules = (resp.items || []).map(function(rule) {
      var ruleInstance = self.rule(rule.name);
      ruleInstance.metadata = rule;
      return ruleInstance;
    });

    callback(null, rules, nextQuery, resp);
  });
};

/**
 * Get a list of {module:compute/rule} objects as a readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute#getRules} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getRulesStream()
 *   .on('error', console.error)
 *   .on('data', function(rule) {
 *     // `rule` is a `Rule` object.
 *   })
 *   .on('end', function() {
 *     // All rules retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gce.getRulesStream()
 *   .on('data', function(rule) {
 *     this.end();
 *   });
 */
Compute.prototype.getRulesStream = common.paginator.streamify('getRules');

/**
 * Get a list of backend services.
 *
 * @resource [Backend Services Overview]{@link https://cloud.google.com/compute/docs/load-balancing/http/backend-service}
 * @resource [BackendServices: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/backendServices/list}
 *
 * @param {object=} options - BackendService search options.
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
 * @param {number} options.maxResults - Maximum number of snapshots to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/service[]} callback.services - Service objects from
 *     your project.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getServices(function(err, services) {
 *   // `services` is an array of `Service` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, services, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getServices(nextQuery, callback);
 *   }
 * }
 *
 * gce.getServices({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.getServices().then(function(data) {
 *   var services = data[0];
 * });
 */
Compute.prototype.getServices = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/global/backendServices',
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

    var services = (resp.items || []).map(function(service) {
      var serviceInstance = self.service(service.name);
      serviceInstance.metadata = service;
      return serviceInstance;
    });

    callback(null, services, nextQuery, resp);
  });
};

/**
 * Get a list of {module:compute/service} objects as a readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute#getServices} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getServicesStream()
 *   .on('error', console.error)
 *   .on('data', function(service) {
 *     // `service` is a `Service` object.
 *   })
 *   .on('end', function() {
 *     // All services retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gce.getServicesStream()
 *   .on('data', function(service) {
 *     this.end();
 *   });
 */
Compute.prototype.getServicesStream = common.paginator.streamify('getServices');

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
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of snapshots to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/snapshot[]} callback.snapshots - Snapshot objects from
 *     your project.
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.getSnapshots().then(function(data) {
 *   var snapshots = data[0];
 * });
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
 * Get a list of {module:compute/snapshot} objects as a readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute#getSnapshots} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getSnapshotsStream()
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
 * gce.getSnapshotsStream()
 *   .on('data', function(snapshot) {
 *     this.end();
 *   });
 */
Compute.prototype.getSnapshotsStream =
  common.paginator.streamify('getSnapshots');

/**
 * Get a list of subnetworks in this project.
 *
 * @resource [Subnetworks Overview]{@link https://cloud.google.com/compute/docs/subnetworks}
 * @resource [Subnetworks: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/subnetworks}
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
 * @param {module:compute/subnetwork[]} callback.subnetworks - Subnetwork
 *     objects from your project.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getSubnetworks(function(err, subnetworks) {
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
 *     gce.getSubnetworks(nextQuery, callback);
 *   }
 * }
 *
 * gce.getSubnetworks({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.getSubnetworks().then(function(data) {
 *   var subnetworks = data[0];
 * });
 */
Compute.prototype.getSubnetworks = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/aggregated/subnetworks',
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

    var subnetworks = Object.keys(regions).reduce(function(acc, regionName) {
      var region = self.region(regionName.replace('regions/', ''));
      var subnetworks = regions[regionName].subnetworks || [];

      subnetworks.forEach(function(subnetwork) {
        var subnetworkInstance = region.subnetwork(subnetwork.name);
        subnetworkInstance.metadata = subnetwork;
        acc.push(subnetworkInstance);
      });

      return acc;
    }, []);

    callback(null, subnetworks, nextQuery, resp);
  });
};

/**
 * Get a list of {module:compute/subnetwork} objects in this project as a
 * readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute#getSubnetworks} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getSubnetworksStream()
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
 * gce.getSubnetworksStream()
 *   .on('data', function(subnetwork) {
 *     this.end();
 *   });
 */
Compute.prototype.getSubnetworksStream =
  common.paginator.streamify('getSubnetworks');

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
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of instances to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/vm[]} callback.vms - VM objects from your project.
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.getVMs().then(function(data) {
 *   var vms = data[0];
 * });
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
 * Get a list of {module:compute/vm} instances as a readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute#getVMs} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getVMsStream()
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
 * gce.getVMsStream()
 *   .on('data', function(vm) {
 *     this.end();
 *   });
 */
Compute.prototype.getVMsStream = common.paginator.streamify('getVMs');

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
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of instances to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/zone[]} callback.zones - Zone objects that are
 *     available to your project.
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * gce.getZones().then(function(data) {
 *   var zones = data[0];
 * });
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
 * Return the {module:compute/zone} objects available to your project as a
 * readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute#getZones} for a complete list of options.
 * @return {stream}
 *
 * @example
 * gce.getZonesStream()
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
 * gce.getZonesStream()
 *   .on('data', function(zone) {
 *     this.end();
 *   });
 */
Compute.prototype.getZonesStream = common.paginator.streamify('getZones');

/**
 * Get a reference to a Google Compute Engine health check.
 *
 * @resource [Health Checks Overview]{@link https://cloud.google.com/compute/docs/load-balancing/health-checks}
 *
 * @param {string} name - Name of the health check.
 * @param {object=} options - Configuration object.
 * @param {boolean} options.https - Specify if this is an HTTPS health check
 *     resource. Default: `false`
 * @return {module:compute/health-check}
 *
 * @example
 * var healthCheck = gce.healthCheck('http-health-check-name');
 *
 * //-
 * // Access an HTTPS health check.
 * //-
 * var httpsHealthCheck = gce.healthCheck('https-health-check-name', {
 *   https: true
 * });
 */
Compute.prototype.healthCheck = function(name, options) {
  return new HealthCheck(this, name, options);
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
 * Get a reference to a Google Compute Engine forwading rule.
 *
 * @param {string} name - Name of the rule.
 * @return {module:compute/rule}
 *
 * @example
 * var rule = gce.rule('rule-name');
 */
Compute.prototype.rule = function(name) {
  return new Rule(this, name);
};

/**
 * Get a reference to a Google Compute Engine backend service.
 *
 * @resource [Backend Services Overview]{@link https://cloud.google.com/compute/docs/load-balancing/http/backend-service}
 *
 * @param {string} name - Name of the existing service.
 * @return {module:compute/service}
 *
 * @example
 * var service = gce.service('service-name');
 */
Compute.prototype.service = function(name) {
  return new Service(this, name);
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

/**
 * Register a single callback that will wait for an operation to finish before
 * being executed.
 *
 * @return {function} callback - The callback function.
 * @return {?error} callback.err - An error returned from the operation.
 * @return {object} callback.apiResponse - The operation's final API response.
 */
Compute.prototype.execAfterOperation_ = function(callback) {
  return function(err) {
    // arguments = [..., op, apiResponse]
    var operation = arguments[arguments.length - 2];
    var apiResponse = arguments[arguments.length - 1];

    if (err) {
      callback(err, apiResponse);
      return;
    }

    operation
      .on('error', callback)
      .on('complete', function(metadata) {
        callback(null, metadata);
      });
  };
};

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
common.paginator.extend(Compute, [
  'getAddresses',
  'getAutoscalers',
  'getDisks',
  'getFirewalls',
  'getHealthChecks',
  'getInstanceGroups',
  'getMachineTypes',
  'getNetworks',
  'getOperations',
  'getRegions',
  'getRules',
  'getServices',
  'getSnapshots',
  'getSubnetworks',
  'getVMs',
  'getZones'
]);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Compute, {
  exclude: [
    'address',
    'autoscaler',
    'disk',
    'firewall',
    'healthCheck',
    'instanceGroup',
    'machineType',
    'network',
    'operation',
    'region',
    'rule',
    'service',
    'snapshot',
    'subnetwork',
    'vm',
    'zone'
  ]
});

Compute.Firewall = Firewall;
Compute.HealthCheck = HealthCheck;
Compute.Network = Network;
Compute.Operation = Operation;
Compute.Region = Region;
Compute.Rule = Rule;
Compute.Service = Service;
Compute.Snapshot = Snapshot;
Compute.Zone = Zone;

module.exports = Compute;
