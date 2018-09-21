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

const arrify = require('arrify');
const common = require('@google-cloud/common');
const extend = require('extend');
const format = require('string-format-obj');
const is = require('is');
const util = require('util');

const Firewall = require('./firewall.js');
const HealthCheck = require('./health-check.js');
const Network = require('./network.js');
const Operation = require('./operation.js');
const Project = require('./project.js');
const Region = require('./region.js');
const Rule = require('./rule.js');
const Service = require('./service.js');
const Snapshot = require('./snapshot.js');
const Zone = require('./zone.js');
const Image = require('./image.js');

/**
 * @typedef {object} ClientConfig
 * @property {string} [projectId] The project ID from the Google Developer's
 *     Console, e.g. 'grape-spaceship-123'. We will also check the environment
 *     variable `GCLOUD_PROJECT` for your project ID. If your app is running in
 *     an environment which supports {@link https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application Application Default Credentials},
 *     your project ID will be detected automatically.
 * @property {string} [keyFilename] Full path to the a .json, .pem, or .p12 key
 *     downloaded from the Google Developers Console. If you provide a path to a
 *     JSON file, the `projectId` option above is not necessary. NOTE: .pem and
 *     .p12 require you to specify the `email` option as well.
 * @property {string} [email] Account email address. Required when using a .pem
 *     or .p12 keyFilename.
 * @property {object} [credentials] Credentials object.
 * @property {string} [credentials.client_email]
 * @property {string} [credentials.private_key]
 * @property {boolean} [autoRetry=true] Automatically retry requests if the
 *     response is related to rate limits or certain intermittent server errors.
 *     We will exponentially backoff subsequent requests by default.
 * @property {number} [maxRetries=3] Maximum number of automatic retries
 *     attempted before returning the error.
 * @property {Constructor} [promise] Custom promise module to use instead of
 *     native Promises.
 */

/**
 * @see [What is Google Compute Engine?]{@link https://cloud.google.com/compute/docs}
 *
 * @class
 *
 * @param {ClientConfig} [options] Configuration options.
 *
 * @example <caption>Create a client that uses Application Default Credentials (ADC)</caption>
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 *
 * @example <caption>Create a client with explicit credentials</caption>
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 */
function Compute(options) {
  options = common.util.normalizeArguments(this, options);

  const config = {
    baseUrl: 'https://www.googleapis.com/compute/v1',
    scopes: ['https://www.googleapis.com/auth/compute'],
    packageJson: require('../package.json'),
  };

  common.Service.call(this, config, options);
}

util.inherits(Compute, common.Service);

/**
 * Create a firewall.
 *
 * @see [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 * @see [Firewalls: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/insert}
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
 * @param {Firewall} callback.firewall - The created Firewall
 *     object.
 * @param {Operation} callback.operation - An operation object
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
  const self = this;

  if (!is.string(name)) {
    throw new Error('A firewall name must be provided.');
  }

  if (!is.object(config)) {
    throw new Error('A firewall configuration object must be provided.');
  }

  const body = extend({}, config, {
    name: name,
  });

  if (body.protocols) {
    body.allowed = arrify(body.allowed);

    for (const protocol in body.protocols) {
      const allowedConfig = {
        IPProtocol: protocol,
      };

      const ports = body.protocols[protocol];

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

  this.request(
    {
      method: 'POST',
      uri: '/global/firewalls',
      json: body,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      const firewall = self.firewall(name);

      const operation = self.operation(resp.name);
      operation.metadata = resp;

      callback(null, firewall, operation, resp);
    }
  );
};

/**
 * Create an HTTP or HTTPS health check.
 *
 * @see [Health Checks Overview]{@link https://cloud.google.com/compute/docs/load-balancing/health-checks}
 * @see [HttpHealthCheck: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks/insert}
 * @see [HttpsHealthCheck: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks/insert}
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
 * @param {HealthCheck} callback.healthCheck - The created
 *     HealthCheck object.
 * @param {Operation} callback.operation - An operation object
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  if (!is.string(name)) {
    throw new Error('A health check name must be provided.');
  }

  const body = extend({}, options, {
    name: name,
  });

  const https = options.https;
  delete body.https;

  if (body.interval) {
    body.checkIntervalSec = body.interval;
    delete body.interval;
  }

  if (body.timeout) {
    body.timeoutSec = body.timeout;
    delete body.timeout;
  }

  this.request(
    {
      method: 'POST',
      uri: '/global/' + (https ? 'httpsHealthChecks' : 'httpHealthChecks'),
      json: body,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      const healthCheck = self.healthCheck(name, {
        https: https,
      });

      const operation = self.operation(resp.name);
      operation.metadata = resp;

      callback(null, healthCheck, operation, resp);
    }
  );
};

/**
 * Create an image from a disk.
 *
 * @see [Images: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/images/insert}
 *
 * @param {string} name - The name of the target image.
 * @param {Disk} disk - The source disk to create the image from.
 * @param {object} [options] - See the
 *     [Images: insert API documentation](https://cloud.google.com/compute/docs/reference/v1/images/insert).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {Operation} callback.operation - An operation object that can be used
 *     to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const zone = compute.zone('us-central1-a');
 * const disk = zone.disk('disk1');
 *
 * compute.createImage('new-image', disk, function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of network creation.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * compute.createImage('new-image', disk).then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
Compute.prototype.createImage = function(name, disk, options, callback) {
  const self = this;

  if (!common.util.isCustomType(disk, 'Disk')) {
    throw new Error('A Disk object is required.');
  }

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  const body = extend(
    {
      name: name,
      sourceDisk: format('zones/{zoneName}/disks/{diskName}', {
        zoneName: disk.zone.name,
        diskName: disk.name,
      }),
    },
    options
  );

  this.request(
    {
      method: 'POST',
      uri: '/global/images',
      json: body,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, resp);
        return;
      }
      const image = self.image(name);

      const operation = self.operation(resp.name);
      operation.metadata = resp;

      callback(null, image, operation, resp);
    }
  );
};

/**
 * Create a network.
 *
 * @see [Networks Overview]{@link https://cloud.google.com/compute/docs/networking#networks}
 * @see [Networks: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/networks/insert}
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
 * @param {Network} callback.network - The created Network
 *     object.
 * @param {Operation} callback.operation - An operation object
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
  const self = this;

  const body = extend({}, config, {
    name: name,
  });

  if (body.range) {
    body.IPv4Range = body.range;
    delete body.range;
  }

  if (body.gateway) {
    body.gatewayIPv4 = body.gateway;
    delete body.gateway;
  }

  this.request(
    {
      method: 'POST',
      uri: '/global/networks',
      json: body,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      const network = self.network(name);

      const operation = self.operation(resp.name);
      operation.metadata = resp;

      callback(null, network, operation, resp);
    }
  );
};

/**
 * Create a global forwarding rule.
 *
 * @see [GlobalForwardingRule Resource]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules#resource}
 * @see [GlobalForwardingRules: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules/insert}
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
 * @param {Rule} callback.rule - The created Rule object.
 * @param {Operation} callback.operation - An operation object
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
  const self = this;

  const body = extend({}, config, {
    name: name,
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

  this.request(
    {
      method: 'POST',
      uri: '/global/forwardingRules',
      json: body,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      const rule = self.rule(name);

      const operation = self.operation(resp.name);
      operation.metadata = resp;

      callback(null, rule, operation, resp);
    }
  );
};

/**
 * Create a backend service.
 *
 * @see [Backend Services Overview]{@link https://cloud.google.com/compute/docs/load-balancing/http/backend-service}
 * @see [BackendServices: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/backendServices/insert}
 *
 * @param {string} name - Name of the backend service.
 * @param {object} config - See a
 *     [BackendService resource](https://cloud.google.com/compute/docs/reference/v1/backendServices#resource).
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {Service} callback.service - The created Service
 *     object.
 * @param {Operation} callback.operation - An operation object
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
  const self = this;

  const body = extend({}, config, {
    name: name,
  });

  this.request(
    {
      method: 'POST',
      uri: '/global/backendServices',
      json: body,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      const service = self.service(name);

      const operation = self.operation(resp.name);
      operation.metadata = resp;

      callback(null, service, operation, resp);
    }
  );
};

/**
 * Get a reference to a Google Compute Engine firewall.
 *
 * See {@link Network#firewall} to get a Firewall object for a specific
 * network.
 *
 * @see [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 *
 * @param {string} name - Name of the firewall.
 * @returns {Firewall}
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
 * @see [Instances and Networks]{@link https://cloud.google.com/compute/docs/instances-and-network}
 * @see [Addresses: aggregatedList API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/addresses/aggregatedList}
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
 * @param {Address[]} callback.addresses - Address objects from
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request(
    {
      uri: '/aggregated/addresses',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const regions = resp.items || {};

      const addresses = Object.keys(regions).reduce(function(acc, regionName) {
        const region = self.region(regionName.replace('regions/', ''));
        const regionAddresses = regions[regionName].addresses || [];

        regionAddresses.forEach(function(address) {
          const addressInstance = region.address(address.name);
          addressInstance.metadata = address;
          acc.push(addressInstance);
        });

        return acc;
      }, []);

      callback(null, addresses, nextQuery, resp);
    }
  );
};

/**
 * Get a list of {@link Address} objects as a readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {@link Compute#getAddresses} for a complete list of options.
 * @returns {stream}
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
Compute.prototype.getAddressesStream = common.paginator.streamify(
  'getAddresses'
);

/**
 * Get a list of autoscalers. For a detailed description of this method's
 * options, see the [API reference](https://cloud.google.com/compute/docs/reference/v1/autoscalers/aggregatedList).
 *
 * @see [Managing Autoscalers]{@link https://cloud.google.com/compute/docs/autoscaler/managing-autoscalers}
 * @see [Understanding Autoscaler Decisions]{@link https://cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions}
 * @see [Autoscalers: aggregatedList API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/autoscalers/aggregatedList}
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
 * @param {Autoscaler[]} callback.autoscalers - Autoscaler
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request(
    {
      uri: '/aggregated/autoscalers',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const zones = resp.items || {};

      const autoscalers = Object.keys(zones).reduce(function(acc, zoneName) {
        if (zoneName.indexOf('zones/') !== 0) {
          return acc;
        }

        const zone = self.zone(zoneName.replace('zones/', ''));
        const zoneAutoscalers = zones[zoneName].autoscalers || [];

        zoneAutoscalers.forEach(function(autoscaler) {
          const autoscalerInstance = zone.autoscaler(autoscaler.name);
          autoscalerInstance.metadata = autoscaler;
          acc.push(autoscalerInstance);
        });

        return acc;
      }, []);

      callback(null, autoscalers, nextQuery, resp);
    }
  );
};

/**
 * Get a list of {@link Autoscaler} objects as a readable object
 * stream.
 *
 * @param {object=} query - Configuration object. See
 *     {@link Compute#getAutoscalers} for a complete list of options.
 * @returns {stream}
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
Compute.prototype.getAutoscalersStream = common.paginator.streamify(
  'getAutoscalers'
);

/**
 * Get a list of disks.
 *
 * @see [Disks Overview]{@link https://cloud.google.com/compute/docs/disks}
 * @see [Disks: aggregatedList API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/disks/aggregatedList}
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
 * @param {Disk[]} callback.disks - Disk objects from your
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request(
    {
      uri: '/aggregated/disks',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const zones = resp.items || {};

      const disks = Object.keys(zones).reduce(function(acc, zoneName) {
        const zone = self.zone(zoneName.replace('zones/', ''));
        const disks = zones[zoneName].disks || [];

        disks.forEach(function(disk) {
          const diskInstance = zone.disk(disk.name);
          diskInstance.metadata = disk;
          acc.push(diskInstance);
        });

        return acc;
      }, []);

      callback(null, disks, nextQuery, resp);
    }
  );
};

/**
 * Get a list of {@link Disk} objects as a readable object stream.
 *
 * @method Compute#getDisksStream
 * @param {object=} options - Configuration object. See
 *     {@link Compute#getDisks} for a complete list of options.
 * @returns {stream}
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
 * @see [InstanceGroups Overview]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups}
 * @see [InstanceGroups: aggregatedList API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups/aggregatedList}
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
 * @param {InstanceGroup[]} callback.instanceGroups -
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request(
    {
      uri: '/aggregated/instanceGroups',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const zones = resp.items || {};

      const instanceGroups = Object.keys(zones).reduce(function(acc, zoneName) {
        const zone = self.zone(zoneName.replace('zones/', ''));
        const instanceGroups = zones[zoneName].instanceGroups || [];

        instanceGroups.forEach(function(group) {
          const instanceGroupInstance = zone.instanceGroup(group.name);
          instanceGroupInstance.metadata = group;
          acc.push(instanceGroupInstance);
        });

        return acc;
      }, []);

      callback(null, instanceGroups, nextQuery, resp);
    }
  );
};

/**
 * Get a list of {@link InstanceGroup} objects as a readable object
 * stream.
 *
 * @method Compute#getInstanceGroupsStream
 * @param {object=} options - Configuration object. See
 *     {@link Compute#getInstanceGroups} for a complete list of options.
 * @returns {stream}
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

Compute.prototype.getInstanceGroupsStream = common.paginator.streamify(
  'getInstanceGroups'
);

/**
 * Get a list of firewalls.
 *
 * @see [Firewalls Overview]{@link https://cloud.google.com/compute/docs/networking#firewalls}
 * @see [Firewalls: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/firewalls/list}
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
 * @param {Firewall[]} callback.firewalls - Firewall objects from
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request(
    {
      uri: '/global/firewalls',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const firewalls = (resp.items || []).map(function(firewall) {
        const firewallInstance = self.firewall(firewall.name);
        firewallInstance.metadata = firewall;
        return firewallInstance;
      });

      callback(null, firewalls, nextQuery, resp);
    }
  );
};

/**
 * Get a list of {@link Firewall} objects as a readable object stream.
 *
 * @method Compute#getFirewallsStream
 * @param {object=} query - Configuration object. See
 *     {@link Compute#getFirewalls} for a complete list of options.
 * @returns {stream}
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
Compute.prototype.getFirewallsStream = common.paginator.streamify(
  'getFirewalls'
);

/**
 * Get a list of health checks.
 *
 * @see [Health Checks Overview]{@link https://cloud.google.com/compute/docs/load-balancing/health-checks}
 * @see [HttpHealthCheck: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks/list}
 * @see [HttpsHealthCheck: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks/list}
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
 * @param {HealthCheck[]} callback.healthChecks - HealthCheck
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options);

  const https = options.https;
  delete options.https;

  this.request(
    {
      uri: '/global/' + (https ? 'httpsHealthChecks' : 'httpHealthChecks'),
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const healthChecks = (resp.items || []).map(function(healthCheck) {
        const healthCheckInstance = self.healthCheck(healthCheck.name, {
          https: https,
        });
        healthCheckInstance.metadata = healthCheck;
        return healthCheckInstance;
      });

      callback(null, healthChecks, nextQuery, resp);
    }
  );
};

/**
 * Get a list of {@link HealthCheck} objects as a readable object
 * stream.
 *
 * @method Compute#getHealthChecksStream
 * @param {object=} options - Configuration object. See
 *     {@link Compute#getHealthChecks} for a complete list of options.
 * @returns {stream}
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
Compute.prototype.getHealthChecksStream = common.paginator.streamify(
  'getHealthChecks'
);

/**
 * Get a list of images.
 *
 * @see [Images Overview]{@link https://cloud.google.com/compute/docs/images}
 * @see [Images: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/images}
 *
 * @param {object=} options - Image search options.
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
 * @param {number} options.maxResults - Maximum number of images to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {Image[]} callback.images - Image objects from your project.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * gce.getImages(function(err, images) {
 *   // `images` is an array of `Image` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, images, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     gce.getImages(nextQuery, callback);
 *   }
 * }
 *
 * gce.getImages({
 *   autoPaginate: false
 * }, callback);
 *
 * gce.getImages().then(function(data) {
 *   var images = data[0];
 * });
 */
Compute.prototype.getImages = function(options, callback) {
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request(
    {
      uri: '/global/images',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const images = (resp.items || []).map(function(image) {
        const imageInstance = self.image(image.name);
        imageInstance.metadata = image;
        return imageInstance;
      });

      callback(null, images, nextQuery, resp);
    }
  );
};

/**
 * Get a list of {@link Image} objects as a readable object stream.
 *
 * @method Compute#getImagesStream
 * @param {object=} query - Configuration object. See {@link Compute#getImages}
 *     for a complete list of options.
 * @returns {stream}
 *
 * @example
 * gce.getImagesStream()
 *   .on('error', console.error)
 *   .on('data', function(image) {
 *     // `image` is an `Image` object.
 *   })
 *   .on('end', function() {
 *     // All images retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * gce.getImagesStream()
 *   .on('data', function(image) {
 *     this.end();
 *   });
 */
Compute.prototype.getImagesStream = common.paginator.streamify('getImages');

/**
 * Get a list of machine types in this project.
 *
 * @see [MachineTypes: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/machineTypes/aggregatedList}
 * @see [Machine Types Overview]{@link https://cloud.google.com/compute/docs/machine-types}
 * @see [MachineType Resource]{@link https://cloud.google.com/compute/docs/reference/v1/machineTypes}
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
 * @param {MachineType[]} callback.machineTypes - MachineType
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request(
    {
      uri: '/aggregated/machineTypes',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const zones = resp.items || {};

      const machineTypes = Object.keys(zones).reduce(function(acc, zoneName) {
        const zone = self.zone(zoneName.replace('zones/', ''));
        const machineTypesByZone = zones[zoneName].machineTypes || [];

        machineTypesByZone.forEach(function(machineType) {
          const machineTypeInstance = zone.machineType(machineType.name);
          machineTypeInstance.metadata = machineType;
          acc.push(machineTypeInstance);
        });

        return acc;
      }, []);

      callback(null, machineTypes, nextQuery, resp);
    }
  );
};

/**
 * Get a list of {@link MachineType} objects in this project as a
 * readable object stream.
 *
 * @method Compute#getMachineTypesStream
 * @param {object=} options - Configuration object. See
 *     {@link Compute#getMachineTypes} for a complete list of options.
 * @returns {stream}
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
Compute.prototype.getMachineTypesStream = common.paginator.streamify(
  'getMachineTypes'
);

/**
 * Get a list of networks.
 *
 * @see [Networks Overview]{@link https://cloud.google.com/compute/docs/networking#networks}
 * @see [Networks: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/networks/list}
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
 * @param {Network[]} callback.networks - Network objects from
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request(
    {
      uri: '/global/networks',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const networks = (resp.items || []).map(function(network) {
        const networkInstance = self.network(network.name);
        networkInstance.metadata = network;
        return networkInstance;
      });

      callback(null, networks, nextQuery, resp);
    }
  );
};

/**
 * Get a list of {@link Network} objects as a readable object stream.
 *
 * @method Compute#getNetworksStream
 * @param {object=} options - Configuration object. See
 *     {@link Compute#getNetworks} for a complete list of options.
 * @returns {stream}
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
 * @see [Global Operation Overview]{@link https://cloud.google.com/compute/docs/reference/v1/globalOperations}
 * @see [GlobalOperations: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/globalOperations/list}
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
 * @param {Operation[]} callback.operations - Operation objects
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request(
    {
      uri: '/global/operations',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const operations = (resp.items || []).map(function(operation) {
        const operationInstance = self.operation(operation.name);
        operationInstance.metadata = operation;
        return operationInstance;
      });

      callback(null, operations, nextQuery, resp);
    }
  );
};

/**
 * Get a list of global {@link Operation} objects as a readable object
 * stream.
 *
 * @method Compute#getOperationsStream
 * @param {object=} options - Configuration object. See
 *     {@link Compute#getOperations} for a complete list of options.
 * @returns {stream}
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
Compute.prototype.getOperationsStream = common.paginator.streamify(
  'getOperations'
);

/**
 * Return the regions available to your project.
 *
 * @see [Regions & Zones Overview]{@link https://cloud.google.com/compute/docs/zones}
 * @see [Regions: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/regions/list}
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
 * @param {Region[]} callback.regions - Region objects that are
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.request(
    {
      uri: '/regions',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const regions = resp.items.map(function(region) {
        const regionInstance = self.region(region.name);
        regionInstance.metadata = region;
        return regionInstance;
      });

      callback(null, regions, nextQuery, resp);
    }
  );
};

/**
 * Return the {@link Region} objects available to your project as a
 * readable object stream.
 *
 * @method Compute#getRegionsStream
 * @param {object=} options - Configuration object. See
 *     {@link Compute#getRegions} for a complete list of options.
 * @returns {stream}
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
 * @see [GlobalForwardingRules: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules/list}
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
 * @param {Rule[]} callback.rules - Rule objects from your
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request(
    {
      uri: '/global/forwardingRules',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const rules = (resp.items || []).map(function(rule) {
        const ruleInstance = self.rule(rule.name);
        ruleInstance.metadata = rule;
        return ruleInstance;
      });

      callback(null, rules, nextQuery, resp);
    }
  );
};

/**
 * Get a list of {@link Rule} objects as a readable object stream.
 *
 * @method Compute#getRulesStream
 * @param {object=} options - Configuration object. See
 *     {@link Compute#getRules} for a complete list of options.
 * @returns {stream}
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
 * @see [Backend Services Overview]{@link https://cloud.google.com/compute/docs/load-balancing/http/backend-service}
 * @see [BackendServices: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/backendServices/list}
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
 * @param {Service[]} callback.services - Service objects from
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request(
    {
      uri: '/global/backendServices',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const services = (resp.items || []).map(function(service) {
        const serviceInstance = self.service(service.name);
        serviceInstance.metadata = service;
        return serviceInstance;
      });

      callback(null, services, nextQuery, resp);
    }
  );
};

/**
 * Get a list of {@link Service} objects as a readable object stream.
 *
 * @method Compute#getServicesStream
 * @param {object=} options - Configuration object. See
 *     {@link Compute#getServices} for a complete list of options.
 * @returns {stream}
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
 * @see [Snapshots Overview]{@link https://cloud.google.com/compute/docs/disks/persistent-disks#snapshots}
 * @see [Snapshots: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/snapshots/list}
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
 * @param {Snapshot[]} callback.snapshots - Snapshot objects from
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request(
    {
      uri: '/global/snapshots',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const snapshots = (resp.items || []).map(function(snapshot) {
        const snapshotInstance = self.snapshot(snapshot.name);
        snapshotInstance.metadata = snapshot;
        return snapshotInstance;
      });

      callback(null, snapshots, nextQuery, resp);
    }
  );
};

/**
 * Get a list of {@link Snapshot} objects as a readable object stream.
 *
 * @method Compute#getSnapshotsStream
 * @param {object=} options - Configuration object. See
 *     {@link Compute#getSnapshots} for a complete list of options.
 * @returns {stream}
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
Compute.prototype.getSnapshotsStream = common.paginator.streamify(
  'getSnapshots'
);

/**
 * Get a list of subnetworks in this project.
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request(
    {
      uri: '/aggregated/subnetworks',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const regions = resp.items || {};

      const subnetworks = Object.keys(regions).reduce(function(
        acc,
        regionName
      ) {
        const region = self.region(regionName.replace('regions/', ''));
        const subnetworks = regions[regionName].subnetworks || [];

        subnetworks.forEach(function(subnetwork) {
          const subnetworkInstance = region.subnetwork(subnetwork.name);
          subnetworkInstance.metadata = subnetwork;
          acc.push(subnetworkInstance);
        });

        return acc;
      },
      []);

      callback(null, subnetworks, nextQuery, resp);
    }
  );
};

/**
 * Get a list of {@link Subnetwork} objects in this project as a
 * readable object stream.
 *
 * @method Compute#getSubnetworksStream
 * @param {object=} options - Configuration object. See
 *     {@link Compute#getSubnetworks} for a complete list of options.
 * @returns {stream}
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
Compute.prototype.getSubnetworksStream = common.paginator.streamify(
  'getSubnetworks'
);

/**
 * Get a list of virtual machine instances.
 *
 * @see [Instances and Networks]{@link https://cloud.google.com/compute/docs/instances-and-network}
 * @see [Instances: aggregatedList API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/aggregatedList}
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
 * @param {VM[]} callback.vms - VM objects from your project.
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request(
    {
      uri: '/aggregated/instances',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const zones = resp.items || {};

      const vms = Object.keys(zones).reduce(function(acc, zoneName) {
        const zone = self.zone(zoneName.replace('zones/', ''));
        const instances = zones[zoneName].instances || [];

        instances.forEach(function(instance) {
          const vmInstance = zone.vm(instance.name);
          vmInstance.metadata = instance;
          acc.push(vmInstance);
        });

        return acc;
      }, []);

      callback(null, vms, nextQuery, resp);
    }
  );
};

/**
 * Get a list of {@link VM} instances as a readable object stream.
 *
 * @method Compute#getVMsStream
 * @param {object=} options - Configuration object. See
 *     {@link Compute#getVMs} for a complete list of options.
 * @returns {stream}
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
 * @see [Regions & Zones Overview]{@link https://cloud.google.com/compute/docs/zones}
 * @see [Zones: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/zones/list}
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
 * @param {Zone[]} callback.zones - Zone objects that are
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
  const self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.request(
    {
      uri: '/zones',
      qs: options,
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      let nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken,
        });
      }

      const zones = resp.items.map(function(zone) {
        const zoneInstance = self.zone(zone.name);
        zoneInstance.metadata = zone;
        return zoneInstance;
      });

      callback(null, zones, nextQuery, resp);
    }
  );
};

/**
 * Return the {@link Zone} objects available to your project as a
 * readable object stream.
 *
 * @method Compute#getZonesStream
 * @param {object=} options - Configuration object. See
 *     {@link Compute#getZones} for a complete list of options.
 * @returns {stream}
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
 * @see [Health Checks Overview]{@link https://cloud.google.com/compute/docs/load-balancing/health-checks}
 *
 * @param {string} name - Name of the health check.
 * @param {object=} options - Configuration object.
 * @param {boolean} options.https - Specify if this is an HTTPS health check
 *     resource. Default: `false`
 * @returns {HealthCheck}
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
 * Get a reference to a Google Compute Engine image.
 *
 * @see [Images Overview]{@link https://cloud.google.com/compute/docs/images}
 *
 * @param {string} name - Name of the image.
 * @returns {Image}
 *
 * @example
 * var image = gce.image('image-name');
 */
Compute.prototype.image = function(name) {
  return new Image(this, name);
};

/**
 * Get a reference to a Google Compute Engine network.
 *
 * @see [Networks Overview]{@link https://cloud.google.com/compute/docs/networking#networks}
 *
 * @param {string} name - Name of the network.
 * @returns {Network}
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
 * @see [Global Operation Overview]{@link https://cloud.google.com/compute/docs/reference/v1/globalOperations}
 *
 * @param {string} name - Name of the existing operation.
 * @returns {Operation}
 *
 * @example
 * var operation = gce.operation('operation-name');
 */
Compute.prototype.operation = function(name) {
  return new Operation(this, name);
};

/**
 * Get a reference to your Google Compute Engine project.
 *
 * @see [Projects Overview]{@link https://cloud.google.com/compute/docs/reference/v1/projects}
 *
 * @returns {Project}
 *
 * @example
 * var project = gce.project();
 */
Compute.prototype.project = function() {
  return new Project(this);
};

/**
 * Get a reference to a Google Compute Engine region.
 *
 * @see [Regions & Zones Overview]{@link https://cloud.google.com/compute/docs/zones}
 *
 * @param {string} name - Name of the region.
 * @returns {Region}
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
 * @returns {Rule}
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
 * @see [Backend Services Overview]{@link https://cloud.google.com/compute/docs/load-balancing/http/backend-service}
 *
 * @param {string} name - Name of the existing service.
 * @returns {Service}
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
 * @see [Snapshots Overview]{@link https://cloud.google.com/compute/docs/disks/persistent-disks#snapshots}
 *
 * @param {string} name - Name of the existing snapshot.
 * @returns {Snapshot}
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
 * @see [Regions & Zones Overview]{@link https://cloud.google.com/compute/docs/zones}
 *
 * @param {string} name - Name of the zone.
 * @returns {Zone}
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
 * @returns {function} callback - The callback function.
 * @returns {?error} callback.err - An error returned from the operation.
 * @returns {object} callback.apiResponse - The operation's final API response.
 */
Compute.prototype.execAfterOperation_ = function(callback) {
  return function(err) {
    // arguments = [..., op, apiResponse]
    const operation = arguments[arguments.length - 2];
    const apiResponse = arguments[arguments.length - 1];

    if (err) {
      callback(err, apiResponse);
      return;
    }

    operation.on('error', callback).on('complete', function(metadata) {
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
  'getImages',
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
  'getZones',
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
    'image',
    'healthCheck',
    'instanceGroup',
    'machineType',
    'network',
    'operation',
    'project',
    'region',
    'rule',
    'service',
    'snapshot',
    'subnetwork',
    'vm',
    'zone',
  ],
});

/**
 * {@link Firewall} class.
 *
 * @name Compute.Firewall
 * @see Firewall
 * @type {constructor}
 */
Compute.Firewall = Firewall;

/**
 * {@link HealthCheck} class.
 *
 * @name Compute.HealthCheck
 * @see HealthCheck
 * @type {constructor}
 */
Compute.HealthCheck = HealthCheck;

/**
 * {@link Image} class.
 *
 * @name Compute.Image
 * @see Image
 * @type {constructor}
 */
Compute.Image = Image;

/**
 * {@link Network} class.
 *
 * @name Compute.Network
 * @see Network
 * @type {constructor}
 */
Compute.Network = Network;

/**
 * {@link Operation} class.
 *
 * @name Compute.Operation
 * @see Operation
 * @type {constructor}
 */
Compute.Operation = Operation;

/**
 * {@link Project} class.
 *
 * @name Compute.Project
 * @see Project
 * @type {constructor}
 */
Compute.Project = Project;

/**
 * {@link Region} class.
 *
 * @name Compute.Region
 * @see Region
 * @type {constructor}
 */
Compute.Region = Region;

/**
 * {@link Rule} class.
 *
 * @name Compute.Rule
 * @see Rule
 * @type {constructor}
 */
Compute.Rule = Rule;

/**
 * {@link Service} class.
 *
 * @name Compute.Service
 * @see Service
 * @type {constructor}
 */
Compute.Service = Service;

/**
 * {@link Snapshot} class.
 *
 * @name Compute.Snapshot
 * @see Snapshot
 * @type {constructor}
 */
Compute.Snapshot = Snapshot;

/**
 * {@link Zone} class.
 *
 * @name Compute.Zone
 * @see Zone
 * @type {constructor}
 */
Compute.Zone = Zone;

/**
 * The default export of the `@google-cloud/compute` package is the
 * {@link Compute} class.
 *
 * See {@link Compute} and {@link ClientConfig} for client methods and
 * configuration options.
 *
 * @module {constructor} @google-cloud/compute
 * @alias nodejs-compute
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/compute
 *
 * @example <caption>Import the client library</caption>
 * const Compute = require('@google-cloud/compute');
 *
 * @example <caption>Create a client that uses <a href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application Default Credentials (ADC)</a>:</caption>
 * const compute = new Compute();
 *
 * @example <caption>Create a client with <a href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit credentials</a>:</caption>
 * const compute = new Compute({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:compute_engine_quickstart
 * Full quickstart example:
 */
module.exports = Compute;
