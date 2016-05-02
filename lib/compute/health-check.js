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

/*!
 * @module compute/health-check
 */

'use strict';

var extend = require('extend');
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
 * @param {module:compute} compute - Compute object this health check belongs
 *     to.
 * @param {string} name - Name of the health check.
 * @param {object=} options - Optional configuration.
 * @param {boolean} options.https - Specify if this is an HTTPS health check
 *     resource. Default: `false`
 */
/**
 * Health checks ensure that Compute Engine forwards new connections only to
 * instances that are up and ready to receive them. Compute Engine sends health
 * check requests to each instance at the specified frequency; once an instance
 * exceeds its allowed number of health check failures, it is no longer
 * considered an eligible instance for receiving new traffic.
 *
 * @resource [Health Checks Overview]{@link https://cloud.google.com/compute/docs/load-balancing/health-checks}
 *
 * @constructor
 * @alias module:compute/health-check
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var gce = gcloud.compute();
 *
 * var healthCheck = gce.healthCheck('health-check-name');
 */
function HealthCheck(compute, name, options) {
  var methods = {
    /**
     * Create an HTTP or HTTPS health check.
     *
     * @param {object} options - See {module:compute#createHealthCheck}.
     *
     * @example
     * healthCheck.create(function(err, healthCheck, operation, apiResponse) {
     *   // `healthCheck` is a HealthCheck object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // status of the request.
     * });
     */
    create: true,

    /**
     * Check if the health check exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the health check exists or
     *     not.
     *
     * @example
     * healthCheck.exists(function(err, exists) {});
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
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * healthCheck.get(function(err, healthCheck, apiResponse) {
     *   // `healthCheck` is a HealthCheck object.
     * });
     */
    get: true,

    /**
     * Get the health check's metadata.
     *
     * @resource [HttpHealthChecks: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks/get}
     * @resource [HttpHealthCheck resource](https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks#resource)
     * @resource [HttpsHealthChecks: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks/get}
     * @resource [HttpsHealthCheck resource](https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks#resource)
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The health check's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * healthCheck.getMetadata(function(err, metadata, apiResponse) {});
     */
    getMetadata: true
  };

  options = options || {};

  var https = options.https;
  this.compute = compute;

  ServiceObject.call(this, {
    parent: compute,
    baseUrl: '/global/' + (https ? 'httpsHealthChecks' : 'httpHealthChecks'),
    id: name,
    createMethod: function(name, options, callback) {
      if (is.fn(options)) {
        callback = options;
        options = {};
      }

      options = extend({}, options, { https: https });

      compute.createHealthCheck(name, options, callback);
    },
    methods: methods
  });
}

nodeutil.inherits(HealthCheck, ServiceObject);

/**
 * Delete the health check.
 *
 * @resource [HttpHealthCheck: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks/delete}
 * @resource [HttpsHealthCheck: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * healthCheck.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
HealthCheck.prototype.delete = function(callback) {
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
 * Set the health check's metadata.
 *
 * @resource [HttpHealthCheck: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks/insert}
 * @resource [HttpsHealthCheck: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks/insert}
 *
 * @param {object} metadata - See a
 *     [HttpHealthCheck resource](https://cloud.google.com/compute/docs/reference/v1/httpHealthChecks#resource)
 *     and [HttpsHealthCheck resource](https://cloud.google.com/compute/docs/reference/v1/httpsHealthChecks#resource).
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
 * healthCheck.setMetadata(metadata, function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
HealthCheck.prototype.setMetadata = function(metadata, callback) {
  var compute = this.compute;

  callback = callback || util.noop;

  ServiceObject.prototype.setMetadata.call(this, metadata, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = compute.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

module.exports = HealthCheck;
