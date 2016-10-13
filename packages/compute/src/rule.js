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
 * @module compute/rule
 */

'use strict';

var common = require('@google-cloud/common');
var util = require('util');

/*! Developer Documentation
 *
 * @param {module:compute|module:compute/region} scope - The parent scope this
 *     firewall rule belongs to.
 * @param {string} name - Rule name.
 */
/**
 * Forwarding rules work in conjunction with target pools and target instances
 * to support load balancing and protocol forwarding features. To use load
 * balancing and protocol forwarding, you must create a forwarding rule that
 * directs traffic to specific target pools (for load balancing) or target
 * instances (for protocol forwarding).
 *
 * @resource [Forwarding rules]{@link https://cloud.google.com/compute/docs/load-balancing/network/forwarding-rules}
 *
 * @constructor
 * @alias module:compute/rule
 *
 * @example
 * //-
 * // Reference a global rule.
 * //-
 * var rule = gce.rule('rule-name');
 *
 * //-
 * // Reference a region rule.
 * //-
 * var region = gce.region('us-central1');
 * var rule = region.rule('rule-name');
 */
function Rule(scope, name) {
  var isGlobalRule = scope.constructor.name === 'Compute';

  var methods = {
    /**
     * Create a forwarding rule.
     *
     * @param {object} config - See {module:compute#createRule} or
     *     {module:compute/region#createRule} if accessing this object through
     *     a Region.
     *
     * @example
     * var config = {
     *   // `target` will be different depending of this is a Regional or Global
     *   // forwarding rule
     *   target: 'global/targetHttpProxies/my-proxy',
     *   portRange: '8080-8089'
     * };
     *
     * rule.create(config, function(err, rule, operation, apiResponse) {
     *   // `rule` is a Rule object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // of the request.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * rule.create(config).then(function(data) {
     *   var rule = data[0];
     *   var operation = data[1];
     *   var apiResponse = data[2];
     * });
     */
    create: true,

    /**
     * Check if the forwarding rule exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the rule exists or not.
     *
     * @example
     * rule.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * rule.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get a forwarding rule if it exists.
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
     * rule.get(function(err, rule, apiResponse) {
     *   // `rule` is a Rule object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * rule.get().then(function(data) {
     *   var rule = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the metadata of this rule.
     *
     * @resource [GlobalForwardingRule Resource]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules#resource}
     * @resource [ForwardingRule Resource]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules#resource}
     * @resource [GlobalForwardingRules: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules/get}
     * @resource [ForwardingRules: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/forwardingRules/get}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The rule's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * rule.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * rule.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: true
  };

  common.ServiceObject.call(this, {
    parent: scope,
    baseUrl: (isGlobalRule ? '/global' : '') + '/forwardingRules',
    id: name,
    createMethod: scope.createRule.bind(scope),
    methods: methods
  });

  this.scope = scope;
}

util.inherits(Rule, common.ServiceObject);

/**
 * Delete the rule.
 *
 * @resource [GlobalForwardingRules: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules/delete}
 * @resource [ForwardingRules: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/forwardingRules/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * rule.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * rule.delete().then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
Rule.prototype.delete = function(callback) {
  callback = callback || common.util.noop;

  var scope = this.scope;

  common.ServiceObject.prototype.delete.call(this, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = scope.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/**
 * Set the target for this forwarding rule.
 *
 * @resource [GlobalForwardingRules: setTarget API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules/setTarget}
 * @resource [ForwardingRules: setTarget API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/forwardingRules/setTarget}
 *
 * @param {string} target - The full or valid partial URL of the target resource
 *     to receive the matched traffic. For regional forwarding rules, this
 *     target must live in the same region as the forwarding rule. For global
 *     forwarding rules, this target must be a global `TargetHttpProxy`
 *     resource.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * rule.setTarget('new-target', function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * rule.setTarget('new-target').then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
Rule.prototype.setTarget = function(target, callback) {
  callback = callback || common.util.noop;

  var scope = this.scope;

  this.request({
    method: 'POST',
    uri: '/setTarget',
    json: {
      target: target
    }
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = scope.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Rule);

module.exports = Rule;
