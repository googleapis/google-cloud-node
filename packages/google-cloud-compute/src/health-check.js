/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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
var is = require('is');
var util = require('util');

/**
 * Health checks ensure that Compute Engine forwards new connections only to
 * instances that are up and ready to receive them. Compute Engine sends health
 * check requests to each instance at the specified frequency; once an instance
 * exceeds its allowed number of health check failures, it is no longer
 * considered an eligible instance for receiving new traffic.
 *
 * @see [Health Checks Overview]{@link https://cloud.google.com/compute/docs/load-balancing/health-checks}
 *
 * @class
 * @param {Compute} compute - Compute object this health check belongs
 *     to.
 * @param {string} name - Name of the health check.
 * @param {object=} options - Optional configuration.
 * @param {boolean} options.https - Specify if this is an HTTPS health check
 *     resource. Default: `false`
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const healthCheck = gce.healthCheck('health-check-name');
 */
function HealthCheck(compute, name, options) {
  var methods = {
    /**
     * Create an HTTP or HTTPS health check.
     *
     * @method HealthCheck#create
     * @param {object} options - See {@link Compute#createHealthCheck}.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const healthCheck = gce.healthCheck('health-check-name');
     *
     * healthCheck.create(function(err, healthCheck, operation, apiResponse) {
     *   // `healthCheck` is a HealthCheck object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // status of the request.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * healthCheck.create().then(function(data) {
     *   const healthCheck = data[0];
     *   const operation = data[1];
     *   const apiResponse = data[2];
     * });
     */
    create: true,

    /**
     * Check if the health check exists.
     *
     * @method HealthCheck#exists
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the health check exists or
     *     not.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const healthCheck = gce.healthCheck('health-check-name');
     *
     * healthCheck.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * healthCheck.exists().then(function(data) {
     *   const exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get the health check if it exists.
     *
     * You may optionally use this to "get or create" an object by providing an
     * object with `autoCreate` set to `true`. Any extra configuration that is
     * normally required for the `create` method must be contained within this
     * object as well.
     *
     * @method HealthCheck#get
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const healthCheck = gce.healthCheck('health-check-name');
     *
     * healthCheck.get(function(err, healthCheck, apiResponse) {
     *   // `healthCheck` is a HealthCheck object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * healthCheck.get().then(function(data) {
     *   const healthCheck = data[0];
     *   const apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the health check's metadata.
     *
     * @see [HttpHealthChecks: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks/get}
     * @see [HttpHealthCheck resource](https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks#resource)
     * @see [HttpsHealthChecks: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks/get}
     * @see [HttpsHealthCheck resource](https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks#resource)
     *
     * @method HealthCheck#getMetadata
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The health check's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const healthCheck = gce.healthCheck('health-check-name');
     *
     * healthCheck.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * healthCheck.getMetadata().then(function(data) {
     *   const metadata = data[0];
     *   const apiResponse = data[1];
     * });
     */
    getMetadata: true,
  };

  options = options || {};

  var https = options.https;

  /**
   * The parent {@link Compute} instance of this {@link HealthCheck} instance.
   * @name HealthCheck#compute
   * @type {Compute}
   */
  this.compute = compute;

  common.ServiceObject.call(this, {
    parent: compute,
    baseUrl: '/global/' + (https ? 'httpsHealthChecks' : 'httpHealthChecks'),
    /**
     * @name HealthCheck#id
     * @type {string}
     */
    id: name,
    createMethod: function(name, options, callback) {
      if (is.fn(options)) {
        callback = options;
        options = {};
      }

      options = extend({}, options, {https: https});

      compute.createHealthCheck(name, options, callback);
    },
    methods: methods,
  });
}

util.inherits(HealthCheck, common.ServiceObject);

/**
 * Delete the health check.
 *
 * @see [HttpHealthCheck: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks/delete}
 * @see [HttpsHealthCheck: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks/delete}
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
 * const healthCheck = gce.healthCheck('health-check-name');
 *
 * healthCheck.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * healthCheck.delete().then(function(data) {
 *   const operation = data[0];
 *   const apiResponse = data[1];
 * });
 */
HealthCheck.prototype.delete = function(callback) {
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
 * Set the health check's metadata.
 *
 * @see [HttpHealthCheck: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks/insert}
 * @see [HttpsHealthCheck: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks/insert}
 *
 * @param {object} metadata - See a
 *     [HttpHealthCheck resource](https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks#resource)
 *     and [HttpsHealthCheck resource](https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks#resource).
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {Operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const healthCheck = gce.healthCheck('health-check-name');
 *
 * const metadata = {
 *   description: 'New description'
 * };
 *
 * healthCheck.setMetadata(metadata, function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * healthCheck.setMetadata(metadata).then(function(data) {
 *   const operation = data[0];
 *   const apiResponse = data[1];
 * });
 */
HealthCheck.prototype.setMetadata = function(metadata, callback) {
  var compute = this.compute;

  callback = callback || common.util.noop;

  var setMetadata = common.ServiceObject.prototype.setMetadata;

  setMetadata.call(this, metadata, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = compute.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(HealthCheck);

/**
 * Reference to the {@link HealthCheck} class.
 * @name module:@google-cloud/compute.HealthCheck
 * @see HealthCheck
 */
module.exports = HealthCheck;
