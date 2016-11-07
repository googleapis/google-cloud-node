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
var common = require('@google-cloud/common');
var extend = require('extend');
var is = require('is');
var util = require('util');

/*! Developer Documentation
 *
 * @param {module:compute/zone} zone - Zone object this instance group belongs
 *     to.
 * @param {string} name - Name of the instance group.
 */
/**
 * You can create and manage groups of virtual machine instances so that you
 * don't have to individually control each instance in your project.
 *
 * @resource [Creating Groups of Instances]{@link https://cloud.google.com/compute/docs/instance-groups}
 * @resource [Unmanaged Instance Groups]{@link https://cloud.google.com/compute/docs/instance-groups/unmanaged-groups}
 *
 * @constructor
 * @alias module:compute/instance-group
 *
 * @example
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
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * instanceGroup.create().then(function(data) {
     *   var instanceGroup = data[0];
     *   var operation = data[1];
     *   var apiResponse = data[2];
     * });
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
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * instanceGroup.exists().then(function(data) {
     *   var exists = data[0];
     * });
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
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * instanceGroup.get().then(function(data) {
     *   var instanceGroup = data[0];
     *   var apiResponse = data[1];
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
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * instanceGroup.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: true
  };

  common.ServiceObject.call(this, {
    parent: zone,
    baseUrl: '/instanceGroups',
    id: name,
    createMethod: zone.createInstanceGroup.bind(zone),
    methods: methods
  });

  this.zone = zone;
  this.name = name;
}

util.inherits(InstanceGroup, common.ServiceObject);

/**
 * Format a map of named ports in the way the API expects.
 *
 * @private
 *
 * @param {object} ports - A map of names to ports. The key should be the name,
 *     and the value the port number.
 * @return {object[]} - The formatted array of named ports.
 */
InstanceGroup.formatPorts_ = function(ports) {
  return Object.keys(ports).map(function(port) {
    return {
      name: port,
      port: ports[port]
    };
  });
};

/**
 * Add one or more VMs to this instance group.
 *
 * @resource [InstanceGroups: addInstances API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups/addInstances}
 *
 * @param {module:compute/vm|module:compute/vm[]} vms - VM instances to add to
 *     this instance group.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var vms = [
 *   gce.zone('us-central1-a').vm('http-server'),
 *   gce.zone('us-central1-a').vm('https-server')
 * ];
 *
 * instanceGroup.add(vms, function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * instanceGroup.add(vms).then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
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

    callback(null, operation, resp);
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
 * instanceGroup.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * instanceGroup.delete().then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
InstanceGroup.prototype.delete = function(callback) {
  var self = this;

  callback = callback || common.util.noop;

  common.ServiceObject.prototype.delete.call(this, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = self.zone.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/**
 * Get a list of VM instances in this instance group.
 *
 * @resource [InstaceGroups: listInstances API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups/listInstances}
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
 * @param {number} options.maxResults - Maximum number of VMs to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {boolean} options.running - Only return instances which are running.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/vm[]} callback.vms - VM objects from this isntance
 *     group.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * instanceGroup.getVMs(function(err, vms) {
 *   // `vms` is an array of `VM` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, vms, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     instanceGroup.getVMs(nextQuery, callback);
 *   }
 * }
 *
 * instanceGroup.getVMs({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * instanceGroup.getVMs().then(function(data) {
 *   var vms = data[0];
 * });
 */
InstanceGroup.prototype.getVMs = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  var body;

  if (options.running) {
    body = {
      instanceState: 'RUNNING'
    };
  }

  this.request({
    method: 'POST',
    uri: '/listInstances',
    qs: options,
    json: body
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

/**
 * Get a list of {module:compute/vm} instances in this instance group as a
 * readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute/instanceGroup#getVMs} for a complete list of options.
 * @return {stream}
 *
 * @example
 * instanceGroup.getVMsStream()
 *   .on('error', console.error)
 *   .on('data', function(vm) {
 *     // `vm` is a `VM` object.
 *   })
 *   .on('end', function() {
 *     // All instances retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * instanceGroup.getVMsStream()
 *   .on('data', function(vm) {
 *     this.end();
 *   });
 */
InstanceGroup.prototype.getVMsStream = common.paginator.streamify('getVMs');

/**
 * Remove one or more VMs from this instance group.
 *
 * @resource [InstanceGroups: removeInstances API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups/removeInstances}
 *
 * @param {module:compute/vm|module:compute/vm[]} vms - VM instances to remove
 *     from this instance group.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var vms = [
 *   gce.zone('us-central1-a').vm('http-server'),
 *   gce.zone('us-central1-a').vm('https-server')
 * ];
 *
 * instanceGroup.remove(vms, function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * instanceGroup.remove(vms).then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
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

/**
 * Set the named ports for this instance group.
 *
 * @resource [InstanceGroups: setNamedPorts API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups/setNamedPorts}
 *
 * @param {object} ports - A map of names to ports. The key should be the name,
 *     and the value the port number.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var ports = {
 *   http: 80,
 *   https: 443
 * };
 *
 * instanceGroup.setPorts(ports, function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * instanceGroup.setPorts(ports).then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
InstanceGroup.prototype.setPorts = function(ports, callback) {
  var self = this;

  callback = callback || common.util.noop;

  this.request({
    method: 'POST',
    uri: '/setNamedPorts',
    json: {
      namedPorts: InstanceGroup.formatPorts_(ports)
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
 * These methods can be auto-paginated.
 */
common.paginator.extend(InstanceGroup, ['getVMs']);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(InstanceGroup);

module.exports = InstanceGroup;
