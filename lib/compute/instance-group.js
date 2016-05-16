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
 * @module compute/instance-group
 */

'use strict';

var arrify = require('arrify');
var extend = require('extend');
var is = require('is');
var nodeutil = require('util');

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

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/*! Developer Documentation
 *
 */
/**
 * An instance group is...
 *
 * @resource [Title]{@link https://...}
 *
 * @constructor
 * @alias module:compute/instance-group
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var gce = gcloud.compute();
 *
 * var zone = gce.zone('us-central1-a');
 *
 * var instanceGroup = zone.instanceGroup('web-servers');
 */
function InstanceGroup(zone, name) {
  var methods = {
    /**
     * Create an instance group.
     *
     * @param {object=} options - See {module:zone#createInstanceGroup}.
     *
     * @example
     * function onCreated(err, instanceGroup, operation, apiResponse) {
     *   // `instanceGroup` is an InstanceGroup object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // status of the request.
     * }
     *
     * instanceGroup.create(onCreated);
     */
    create: true,

    /**
     * Check if the instance group exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the instance group exists or
     *     not.
     *
     * @example
     * instanceGroup.exists(function(err, exists) {});
     */
    exists: true,

    /**
     * Get an instance group if it exists.
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
     * instanceGroup.get(function(err, instanceGroup, apiResponse) {
     *   // `instanceGroup` is an InstanceGroup object.
     * });
     */
    get: true,

    /**
     * Get the instance group's metadata.
     *
     * @resource [InstanceGroups: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups/get}
     * @resource [InstanceGroups Resource]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The instance group's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * instanceGroup.getMetadata(function(err, metadata, apiResponse) {});
     */
    getMetadata: true
  };

  ServiceObject.call(this, {
    parent: zone,
    baseUrl: '/instanceGroups',
    id: name,
    createMethod: zone.createInstanceGroup.bind(zone),
    methods: methods
  });

  this.zone = zone;
  this.name = name;
}

nodeutil.inherits(InstanceGroup, ServiceObject);

InstanceGroup.prototype.add = function(vms, callback) {
  var self = this;

  this.request({
    method: 'POST',
    uri: '/addInstances',
    json: {
      instances: arrify(vms).map(function(vm) {
        return {
          instance: vm.url
        };
      })
    }
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = self.zone.operation(resp.name);
    operation.metadata = resp;

    callback(err, operation, resp);
  });
};

/**
 * Delete the instance group.
 *
 * @resource [InstanceGroups: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * group.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
InstanceGroup.prototype.delete = function(callback) {
  var self = this;

  callback = callback || util.noop;

  ServiceObject.prototype.delete.call(this, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = self.zone.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

InstanceGroup.prototype.getVMs = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    method: 'POST',
    uri: '/listInstances',
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

    var vms = arrify(resp.items).map(function(vm) {
      var vmInstance = self.zone.vm(vm.instance);
      vmInstance.metadata = vm;
      return vmInstance;
    });

    callback(null, vms, nextQuery, resp);
  });
};

InstanceGroup.prototype.remove = function(vms, callback) {
  var self = this;

  this.request({
    method: 'POST',
    uri: '/removeInstances',
    json: {
      instances: arrify(vms).map(function(vm) {
        return {
          instance: vm.url
        };
      })
    }
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = self.zone.operation(resp.name);
    operation.metadata = resp;

    callback(err, operation, resp);
  });
};

InstanceGroup.prototype.setPorts = function(ports, callback) {
  var self = this;
  var namedPorts = [];

  for (var namedPort in ports) {
    namedPorts.push({
      name: namedPort,
      port: ports[namedPort]
    });
  }

  this.request({
    method: 'POST',
    uri: '/setNamedPorts',
    json: {
      namedPorts: namedPorts
    }
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = self.zone.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/*! Developer Documentation
 *
 * These methods can be used with either a callback or as a readable object
 * stream. `streamRouter` is used to add this dual behavior.
 */
streamRouter.extend(InstanceGroup, ['getVMs']);

module.exports = InstanceGroup;
