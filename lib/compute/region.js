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
 * @module compute/region
 */

'use strict';

var extend = require('extend');
var is = require('is');
var nodeutil = require('util');

/**
 * @type {module:compute/address}
 * @private
 */
var Address = require('./address.js');

/**
 * @type {module:compute/operation}
 * @private
 */
var Operation = require('./operation.js');

/**
 * @type {module:compute/rule}
 * @private
 */
var Rule = require('./rule.js');

/**
 * @type {module:common/service-object}
 * @private
 */
var ServiceObject = require('../common/service-object.js');

/**
 * @type {module:common/stream-router}
 * @private
 */
var streamRouter = require('../common/stream-router.js');

/*! Developer Documentation
 *
 * @param {module:compute} compute - Compute object this region belongs to.
 * @param {string} name - Name of the region.
 */
/**
 * A Region object allows you to interact with a Google Compute Engine region.
 *
 * @resource [Regions & Zones Overview]{@link https://cloud.google.com/compute/docs/zones}
 * @resource [Region Resource]{@link https://cloud.google.com/compute/docs/reference/v1/regions}
 *
 * @constructor
 * @alias module:compute/region
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var gce = gcloud.compute();
 *
 * var region = gce.region('us-central1');
 */
function Region(compute, name) {
  var methods = {
    /**
     * Check if the region exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the region exists or not.
     *
     * @example
     * region.exists(function(err, exists) {});
     */
    exists: true,

    /**
     * Get a region.
     *
     * @example
     * region.get(function(err, region, apiResponse) {
     *   // `region` is a Region object.
     * });
     */
    get: true,

    /**
     * Get the region's metadata.
     *
     * @resource [Region Resource]{@link https://cloud.google.com/compute/docs/reference/v1/regions}
     * @resource [Regions: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/regions/get}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The region's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * region.getMetadata(function(err, metadata, apiResponse) {});
     */
    getMetadata: true
  };

  ServiceObject.call(this, {
    parent: compute,
    baseUrl: '/regions',
    id: name,
    methods: methods
  });

  this.name = name;

  this.interceptors.push({
    request: function(reqOpts) {
      if (reqOpts.uri.indexOf('/global/forwardingRules') > -1) {
        reqOpts.uri = reqOpts.uri.replace('/global', '');
      }
      return reqOpts;
    }
  });
}

nodeutil.inherits(Region, ServiceObject);

/**
 * Get a reference to a Google Compute Engine address in this region.
 *
 * @resource [Instances and Networks]{@link https://cloud.google.com/compute/docs/instances-and-network}
 *
 * @param {string} name - Name of the address.
 * @return {module:compute/address}
 *
 * @example
 * var address = region.address('address-name');
 */
Region.prototype.address = function(name) {
  return new Address(this, name);
};

/**
 * Create an address in this region.
 *
 * @resource [Instances and Networks]{@link https://cloud.google.com/compute/docs/instances-and-network}
 * @resource [Address Resource]{@link https://cloud.google.com/compute/docs/reference/v1/addresses}
 * @resource [Addresses: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/addresses/insert}
 *
 * @param {string} name - Name of the address.
 * @param {object=} options - See an
 *     [Address resource](https://cloud.google.com/compute/docs/reference/v1/addresses).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/address} callback.address - The created Address
 *     object.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * function callback(err, address, operation, apiResponse) {
 *   // `address` is an Address object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * }
 *
 * region.createAddress('new-address', callback);
 */
Region.prototype.createAddress = function(name, options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.request({
    method: 'POST',
    uri: '/addresses',
    json: extend({}, options, {
      name: name
    })
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var address = self.address(name);

    var operation = self.operation(resp.name);
    operation.metadata = resp;

    callback(null, address, operation, resp);
  });
};

/**
 * Create a forwarding rule in this region.
 *
 * @resource [ForwardingRule Resource]{@link https://cloud.google.com/compute/docs/reference/v1/forwardingRules#resource}
 * @resource [ForwardingRules: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/forwardingRules/insert}
 *
 * @param {string} name - Name of the rule.
 * @param {object} config - See a
 *     [ForwardingRule resource](https://cloud.google.com/compute/docs/reference/v1/forwardingRules#resource).
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
 *     resource to receive the matched traffic.
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
 * var cfg = {
 *   target: 'zones/us-central1-a/targetInstances/my-target-instance',
 *   range: '8080-8089'
 * };
 *
 * region.createRule(name, cfg, function (err, rule, operation, apiResponse) {
 *   // `rule` is a Rule object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
Region.prototype.createRule = function(name, config, callback) {
  this.parent.createRule.call(this, name, config, callback);
};

/**
 * Get a list of addresses in this region.
 *
 * @resource [Instances and Networks]{@link https://cloud.google.com/compute/docs/instances-and-network}
 * @resource [Addresses: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/addresses/list}
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
 * @param {module:compute/address} callback.addresses - Address objects from
 *     this region.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * region.getAddresses(function(err, addresses) {
 *   // `addresses` is an array of `Address` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, addresses, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     region.getAddresses(nextQuery, callback);
 *   }
 * }
 *
 * region.getAddresses({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the addresses from your project as a readable object stream.
 * //-
 * region.getAddresses()
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
 * region.getAddresses()
 *   .on('data', function(address) {
 *     this.end();
 *   });
 */
Region.prototype.getAddresses = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/addresses',
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

    var addresses = (resp.items || []).map(function(address) {
      var addressInstance = self.address(address.name);
      addressInstance.metadata = address;
      return addressInstance;
    });

    callback(null, addresses, nextQuery, resp);
  });
};

/**
 * Get a list of operations for this region.
 *
 * @resource [Region Operation Overview]{@link https://cloud.google.com/compute/docs/reference/v1/regionOperations}
 * @resource [RegionOperations: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/regionOperations/list}
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
 * @param {module:compute/operation} callback.operations - Operation objects
 *     from this region.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * region.getOperations(function(err, operations) {
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
 *     region.getOperations(nextQuery, callback);
 *   }
 * }
 *
 * region.getOperations({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the operations from your project as a readable object stream.
 * //-
 * region.getOperations()
 *   .on('error', console.error)
 *   .on('data', function(operation) {
 *     // `operation` is an `Operation` object.
 *   })
 *   .on('end', function() {
 *     // All operations retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * region.getOperations()
 *   .on('data', function(operation) {
 *     this.end();
 *   });
 */
Region.prototype.getOperations = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/operations',
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
 * Get a list of forwading rules in this region.
 *
 * @resource [ForwardingRules: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/forwardingRules/list}
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
 * @param {module:compute/rule} callback.rules - Rule objects from this region.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * region.getRules(function(err, rules) {
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
 *     region.getRules(nextQuery, callback);
 *   }
 * }
 *
 * region.getRules({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the rules from this region as a readable object stream.
 * //-
 * region.getRules()
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
 * region.getRules()
 *   .on('data', function(rule) {
 *     this.end();
 *   });
 */
Region.prototype.getRules = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/forwardingRules',
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
 * Get a reference to a Google Compute Engine region operation.
 *
 * @resource [Region Operation Overview]{@link https://cloud.google.com/compute/docs/reference/v1/regionOperations}
 *
 * @param {string} name - Name of the existing operation.
 * @return {module:compute/operation}
 *
 * @example
 * var operation = region.operation('operation-name');
 */
Region.prototype.operation = function(name) {
  return new Operation(this, name);
};

/**
 * Get a reference to a Google Compute Engine forwarding rule in this region.
 *
 * @param {string} name - Name of the rule.
 * @return {module:compute/rule}
 *
 * @example
 * var rule = region.rule('rule-name');
 */
Region.prototype.rule = function(name) {
  return new Rule(this, name);
};

/*! Developer Documentation
 *
 * These methods can be used with either a callback or as a readable object
 * stream. `streamRouter` is used to add this dual behavior.
 */
streamRouter.extend(Region, ['getAddresses', 'getOperations', 'getRules']);

module.exports = Region;
