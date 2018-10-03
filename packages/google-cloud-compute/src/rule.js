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

const common = require('@google-cloud/common');
const util = require('util');
const {promisifyAll} = require('@google-cloud/promisify');

/**
 * Forwarding rules work in conjunction with target pools and target instances
 * to support load balancing and protocol forwarding features. To use load
 * balancing and protocol forwarding, you must create a forwarding rule that
 * directs traffic to specific target pools (for load balancing) or target
 * instances (for protocol forwarding).
 *
 * @see [Forwarding rules]{@link https://cloud.google.com/compute/docs/load-balancing/network/forwarding-rules}
 *
 * @class
 * @param {Compute|Region} scope - The parent scope this
 *     firewall rule belongs to.
 * @param {string} name - Rule name.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 *
 * //-
 * // Reference a global rule.
 * //-
 * const rule = compute.rule('rule-name');
 *
 * //-
 * // Reference a region rule.
 * //-
 * const region = compute.region('us-central1');
 * const rule = region.rule('rule-name');
 */
function Rule(scope, name) {
  const isGlobalRule = scope.constructor.name === 'Compute';

  const methods = {
    /**
     * Create a forwarding rule.
     *
     * @method Rule#create
     * @param {object} config - See {@link Compute#createRule} or
     *     {@link Region#createRule} if accessing this object through
     *     a Region.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const rule = region.rule('rule-name');
     *
     * const config = {
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
     *   const rule = data[0];
     *   const operation = data[1];
     *   const apiResponse = data[2];
     * });
     */
    create: true,

    /**
     * Check if the forwarding rule exists.
     *
     * @method Rule#exists
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the rule exists or not.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const rule = region.rule('rule-name');
     *
     * rule.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * rule.exists().then(function(data) {
     *   const exists = data[0];
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
     * @method Rule#get
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const rule = region.rule('rule-name');
     *
     * rule.get(function(err, rule, apiResponse) {
     *   // `rule` is a Rule object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * rule.get().then(function(data) {
     *   const rule = data[0];
     *   const apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the metadata of this rule.
     *
     * @see [GlobalForwardingRule Resource]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules#resource}
     * @see [ForwardingRule Resource]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules#resource}
     * @see [GlobalForwardingRules: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules/get}
     * @see [ForwardingRules: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/forwardingRules/get}
     *
     * @method Rule#getMetadata
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The rule's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const rule = region.rule('rule-name');
     *
     * rule.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * rule.getMetadata().then(function(data) {
     *   const metadata = data[0];
     *   const apiResponse = data[1];
     * });
     */
    getMetadata: true,
  };

  common.ServiceObject.call(this, {
    parent: scope,
    baseUrl: (isGlobalRule ? '/global' : '') + '/forwardingRules',
    /**
     * @name Rule#id
     * @type {string}
     */
    id: name,
    createMethod: scope.createRule.bind(scope),
    methods: methods,
  });

  /**
   * @name Rule#scope
   * @type {Compute|Region}
   */
  this.scope = scope;
}

util.inherits(Rule, common.ServiceObject);

/**
 * Delete the rule.
 *
 * @see [GlobalForwardingRules: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules/delete}
 * @see [ForwardingRules: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/forwardingRules/delete}
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
 * const rule = compute.rule('rule-name');
 *
 * rule.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * rule.delete().then(function(data) {
 *   const operation = data[0];
 *   const apiResponse = data[1];
 * });
 */
Rule.prototype.delete = function(callback) {
  callback = callback || common.util.noop;

  const scope = this.scope;

  common.ServiceObject.prototype.delete.call(this, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    const operation = scope.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/**
 * Set the target for this forwarding rule.
 *
 * @see [GlobalForwardingRules: setTarget API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/globalForwardingRules/setTarget}
 * @see [ForwardingRules: setTarget API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/forwardingRules/setTarget}
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
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const rule = compute.rule('rule-name');
 *
 * rule.setTarget('new-target', function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * rule.setTarget('new-target').then(function(data) {
 *   const operation = data[0];
 *   const apiResponse = data[1];
 * });
 */
Rule.prototype.setTarget = function(target, callback) {
  callback = callback || common.util.noop;

  const scope = this.scope;

  this.request(
    {
      method: 'POST',
      uri: '/setTarget',
      json: {
        target: target,
      },
    },
    function(err, resp) {
      if (err) {
        callback(err, null, resp);
        return;
      }

      const operation = scope.operation(resp.name);
      operation.metadata = resp;

      callback(null, operation, resp);
    }
  );
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Rule);

/**
 * Reference to the {@link Rule} class.
 * @name module:@google-cloud/compute.Rule
 * @see Rule
 */
module.exports = Rule;
