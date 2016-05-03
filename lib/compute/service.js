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
var format = require('string-format-obj');
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
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var gce = gcloud.compute();
 *
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
     * service.create({
     *   backends: [
     *     {
     *       group: 'URL of an Instance Group resource'
     *     }
     *   ],
     *   healthChecks: [
     *     'URL of an HTTP/HTTPS health check resource'
     *   ]
     * }, function(err, service, operation, apiResponse) {
     *   // `service` is a Service object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // of the request.
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
     */
    getMetadata: true
  };

  ServiceObject.call(this, {
    parent: compute,
    baseUrl: '/global/backendServices',
    id: name,
    createMethod: compute.createService.bind(compute),
    methods: methods
  });

  this.compute = compute;
  this.name = name;
}

nodeutil.inherits(Service, ServiceObject);

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
 */
Service.prototype.delete = function(callback) {
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
 * service.getHealth({
 *   name: 'instance-group-name',
 *   zone: 'us-central1-a'
 * }, function(err, status, apiResponse) {
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
 */
Service.prototype.getHealth = function(group, callback) {
  if (!is.string(group)) {
    group = format('{baseUrl}/projects/{p}/zones/{z}/instanceGroups/{n}', {
      baseUrl: 'https://www.googleapis.com/compute/v1',
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
 */
Service.prototype.setMetadata = function(metadata, callback) {
  var compute = this.compute;

  callback = callback || util.noop;

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

module.exports = Service;
