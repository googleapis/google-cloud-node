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
 * @module compute/service
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var format = require('string-format-obj');
var is = require('is');
var util = require('util');

/*! Developer Documentation
 *
 * @param {module:compute} compute - The Compute instance this service inherits
 *     from.
 * @param {string} name - Name of the service.
 */
/**
 * An HTTP(S) load balancing backend service is a centralized service for
 * managing backends, which in turn manage instances that handle user requests.
 * You configure your load balancing service to route requests to your backend
 * service. The backend service in turn knows which instances it can use, how
 * much traffic they can handle, and how much traffic they are currently
 * handling. In addition, the backend service monitors health checking and does
 * not send traffic to unhealthy instances.
 *
 * @resource [Backend Services Overview]{@link https://cloud.google.com/compute/docs/load-balancing/http/backend-service}
 *
 * @constructor
 * @alias module:compute/service
 *
 * @example
 * var service = gce.service('service-name');
 */
function Service(compute, name) {
  var methods = {
    /**
     * Create a backend service.
     *
     * @param {object} config - See {module:compute#createService}.
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
     * service.create(config, function(err, service, operation, apiResponse) {
     *   // `service` is a Service object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // of the request.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * service.create(config).then(function(data) {
     *   var service = data[0];
     *   var operation = data[1];
     *   var apiResponse = data[2];
     * });
     */
    create: true,

    /**
     * Check if the backend service exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the backend service exists or
     *     not.
     *
     * @example
     * service.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * service.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get a Service object if it exists.
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
     * service.get(function(err, service, apiResponse) {
     *   // `service` is a Service object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * service.get().then(function(data) {
     *   var service = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the metadata of this backend service.
     *
     * @resource [BackendService Resource]{@link https://cloud.google.com/compute/docs/reference/v1/backendServices#resource}
     * @resource [BackendService: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/backendServices/get}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The service's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * service.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * service.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: true
  };

  common.ServiceObject.call(this, {
    parent: compute,
    baseUrl: '/global/backendServices',
    id: name,
    createMethod: compute.createService.bind(compute),
    methods: methods
  });

  this.compute = compute;
  this.name = name;
}

util.inherits(Service, common.ServiceObject);

/**
 * Delete the backend service.
 *
 * @resource [BackendServices: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/backendServices/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * service.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * service.delete().then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
Service.prototype.delete = function(callback) {
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
 * Get the most recent health check results.
 *
 * @resource [BackendServices: getHealth API Documentation]{@link https://cloud.google.com/compute/docs/reference/latest/backendServices/getHealth}
 *
 * @param {string|object} group - The fully-qualified URL of an Instance Group
 *     resource.
 * @param {string} group.name - The name of the Instance Group resource.
 * @param {module:compute/zone|string} group.zone - The name of the zone or a
 *     Zone object.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object[]} callback.status - A list of health checks and their
 *     corresponding status.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var group = {
 *   name: 'instance-group-name',
 *   zone: 'us-central1-a'
 * };
 *
 * service.getHealth(group, function(err, status, apiResponse) {
 *   if (!err) {
 *     // status = [
 *     //   {
 *     //      ipAddress: '...',
 *     //      instance: '...',
 *     //      healthState: '...',
 *     //      port: '...'
 *     //   }
 *     // ]
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * service.getHealth(group).then(function(data) {
 *   var status = data[0];
 *   var apiResponse = data[1];
 * });
 */
Service.prototype.getHealth = function(group, callback) {
  if (!is.string(group)) {
    group = format('{baseUrl}/projects/{p}/zones/{z}/instanceGroups/{n}', {
      baseUrl: 'https://www.googleapis.com./compute/v1',
      p: this.parent.projectId,
      z: group.zone.name || group.zone,
      n: group.name
    });
  }

  this.request({
    method: 'POST',
    uri: '/getHealth',
    json: {
      group: group
    }
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    callback(null, arrify(resp.healthStatus), resp);
  });
};

/**
 * Set the backend service's metadata.
 *
 * @resource [BackendService Resource]{@link https://cloud.google.com/compute/docs/reference/v1/backendServices#resource}
 *
 * @param {object} metadata - See a
 *     [BackendService resource](https://cloud.google.com/compute/docs/reference/v1/backendServices#resource).
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
 * service.setMetadata(metadata, function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * service.setMetadata(metadata).then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
Service.prototype.setMetadata = function(metadata, callback) {
  var compute = this.compute;

  callback = callback || common.util.noop;

  this.request({
    method: 'PATCH',
    uri: '',
    json: metadata
  }, function(err, resp) {
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
common.util.promisifyAll(Service);

module.exports = Service;
