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
 * @module compute/vm
 */

'use strict';

var createErrorClass = require('create-error-class');
var extend = require('extend');
var format = require('string-format-obj');
var is = require('is');
var nodeutil = require('util');

/**
 * @type {module:compute/disk}
 * @private
 */
var Disk = require('./disk.js');

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

/**
 * Custom error type for errors related to detaching a disk.
 *
 * @private
 *
 * @param {string} message - Custom error message.
 * @return {Error}
 */
var DetachDiskError = createErrorClass('DetachDiskError', function(message) {
  this.message = message;
});

/*! Developer Documentation
 *
 * @param {module:zone} zone - Zone object this instance belongs to.
 * @param {string} name - Name of the instance.
 */
/**
 * An Instance object allows you to interact with a Google Compute Engine
 * instance.
 *
 * @resource [Instances and Networks]{@link https://cloud.google.com/compute/docs/instances-and-network}
 * @resource [Instance Resource]{@link https://cloud.google.com/compute/docs/reference/v1/instances}
 *
 * @constructor
 * @alias module:compute/vm
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var gce = gcloud.compute();
 *
 * var zone = gce.zone('zone-name');
 *
 * var vm = zone.vm('vm-name');
 */
function VM(zone, name) {
  this.name = name.replace(/.*\/([^/]+)$/, '$1'); // Just the instance name.
  this.zone = zone;

  this.url = format('{base}/{project}/zones/{zone}/instances/{name}', {
    base: 'https://www.googleapis.com/compute/v1/projects',
    project: zone.compute.projectId,
    zone: zone.name,
    name: this.name
  });

  var methods = {
    /**
     * Create a virtual machine.
     *
     * @param {object} config - See {module:compute/zone#createVM}.
     *
     * @example
     * var config = {
     *   // ...
     * };
     *
     * vm.create(config, function(err, vm, operation, apiResponse) {
     *   // `vm` is a VM object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // status of the request.
     * });
     */
    create: true,

    /**
     * Check if the vm exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the vm exists or not.
     *
     * @example
     * vm.exists(function(err, exists) {});
     */
    exists: true,

    /**
     * Get a virtual machine if it exists.
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
     * vm.get(function(err, vm, apiResponse) {
     *   // `vm` is a VM object.
     * });
     */
    get: true,

    /**
     * Get the instance's metadata.
     *
     * @resource [Instance Resource]{@link https://cloud.google.com/compute/docs/reference/v1/instances}
     * @resource [Instance: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/get}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The instance's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * vm.getMetadata(function(err, metadata, apiResponse) {});
     */
    getMetadata: true
  };

  ServiceObject.call(this, {
    parent: zone,
    baseUrl: '/instances',
    id: this.name,
    createMethod: zone.createVM.bind(zone),
    methods: methods
  });
}

nodeutil.inherits(VM, ServiceObject);

/**
 * Attach a disk to the instance.
 *
 * @resource [Disks Overview]{@link https://cloud.google.com/compute/docs/disks}
 * @resource [Disk Resource]{@link https://cloud.google.com/compute/docs/reference/v1/disks}
 * @resource [Instance: attachDisk API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/attachDisk}
 *
 * @throws {Error} if a {module:compute/disk} is not provided.
 *
 * @param {module:compute/disk} disk - The disk to attach.
 * @param {object=} options - See the
 *     [Instances: attachDisk](https://cloud.google.com/compute/docs/reference/v1/instances/attachDisk)
 *     request body.
 * @param {boolean} options.readOnly - Attach the disk in read-only mode. (Alias
 *     for `options.mode = READ_ONLY`)
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var disk = zone.disk('my-disk');
 *
 * function callback(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * }
 *
 * vm.attachDisk(disk, callback);
 *
 * //-
 * // Provide an options object to customize the request.
 * //-
 * var options = {
 *   autoDelete: true,
 *   readOnly: true
 * };
 *
 * vm.attachDisk(disk, options, callback);
 */
VM.prototype.attachDisk = function(disk, options, callback) {
  if (!(disk instanceof Disk)) {
    throw new Error('A Disk object must be provided.');
  }

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var body = extend({
    // Default the deviceName to the name of the disk, like the Console does.
    deviceName: disk.name
  }, options, {
    source: disk.formattedName
  });

  if (body.readOnly) {
    body.mode = 'READ_ONLY';
    delete body.readOnly;
  }

  this.request({
    method: 'POST',
    uri: '/attachDisk',
    json: body
  }, callback);
};

/**
 * Delete the instance.
 *
 * @resource [Instance: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * vm.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
VM.prototype.delete = function(callback) {
  this.request({
    method: 'DELETE',
    uri: ''
  }, callback || util.noop);
};

/**
 * Detach a disk from the instance.
 *
 * @resource [Instance: detachDisk API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/detachDisk}
 *
 * @param {module:compute/disk|string} deviceName - The device name of the disk
 *     to detach. If a Disk object is provided, we try to find the device name
 *     automatically by searching through the attached disks on the instance.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var disk = zone.disk('my-disk');
 *
 * vm.detachDisk(disk, function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
VM.prototype.detachDisk = function(disk, callback) {
  var self = this;

  if (!(disk instanceof Disk)) {
    throw new Error('A Disk object must be provided.');
  }

  this.getMetadata(function(err, metadata) {
    if (err) {
      callback(new DetachDiskError(err.message));
      return;
    }

    var deviceName;
    var baseUrl = 'https://www.googleapis.com/compute/v1/';
    var disks = metadata.disks || [];

    // Try to find the deviceName by matching the source of the attached disks
    // to the name of the disk provided by the user.
    for (var i = 0; !deviceName && i < disks.length; i++) {
      var attachedDisk = disks[i];
      var source = attachedDisk.source.replace(baseUrl, '');

      if (source === disk.formattedName) {
        deviceName = attachedDisk.deviceName;
      }
    }

    if (!deviceName) {
      callback(new DetachDiskError('Device name for this disk was not found.'));
      return;
    }

    self.request({
      method: 'POST',
      uri: '/detachDisk',
      qs: {
        deviceName: deviceName
      }
    }, callback || util.noop);
  });
};

/**
 * Returns the serial port output for the instance.
 *
 * @resource [Instances: getSerialPortOutput API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/getSerialPortOutput}
 *
 * @param {number=} port - The port from which the output is retrieved (1-4).
 *    Default: `1`.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.output - The output from the port.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * vm.getSerialPortOutput(function(err, output, apiResponse) {});
 */
VM.prototype.getSerialPortOutput = function(port, callback) {
  if (is.fn(port)) {
    callback = port;
    port = 1;
  }

  var reqOpts = {
    uri: '/serialPort',
    qs: {
      port: port
    }
  };

  ServiceObject.prototype.request.call(this, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    callback(null, resp.contents, resp);
  });
};

/**
 * Get the instance's tags and their fingerprint.
 *
 * This method wraps {module:compute/vm#getMetadata}, returning only the `tags`
 * property.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object[]} callback.tags - Tag objects from this VM.
 * @param {string} callback.fingerprint - The current tag fingerprint.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * vm.getTags(function(err, tags, fingerprint, apiResponse) {});
 */
VM.prototype.getTags = function(callback) {
  this.getMetadata(function(err, metadata, apiResponse) {
    if (err) {
      callback(err, null, null, apiResponse);
      return;
    }

    callback(null, metadata.tags.items, metadata.tags.fingerprint, apiResponse);
  });
};

/**
 * Reset the instance.
 *
 * @resource [Instances: reset API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/reset}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * vm.reset(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
VM.prototype.reset = function(callback) {
  this.request({
    method: 'POST',
    uri: '/reset'
  }, callback || util.noop);
};

/**
 * Set the metadata for this instance.
 *
 * @resource [Instances: setMetadata API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/setMetadata}
 *
 * @param {object} metadata - New metadata.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * vm.setMetadata({
 *   'startup-script': '...'
 * }, function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
VM.prototype.setMetadata = function(metadata, callback) {
  var self = this;

  callback = callback || util.noop;

  this.getMetadata(function(err, currentMetadata, apiResponse) {
    if (err) {
      callback(err, null, apiResponse);
      return;
    }

    var newMetadata = {
      fingerprint: currentMetadata.metadata.fingerprint,
      items: []
    };

    for (var prop in metadata) {
      if (metadata.hasOwnProperty(prop)) {
        newMetadata.items.push({
          key: prop,
          value: metadata[prop]
        });
      }
    }

    self.request({
      method: 'POST',
      uri: '/setMetadata',
      json: newMetadata
    }, callback);
  });
};

/**
 * Set the instance's tags.
 *
 * @resource [Instances: setTags API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/setTags}
 *
 * @param {string[]} tags - The new tags for the instance.
 * @param {string} fingerprint - The current tags fingerprint. An up-to-date
 *     fingerprint must be provided.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * vm.getTags(function(err, tags, fingerprint) {
 *   tags.push('new-tag');
 *
 *  vm.setTags(tags, fingerprint, function(err, operation, apiResponse) {
 *     // `operation` is an Operation object that can be used to check the
 *     //  status of the request.
 *   });
 * });
 */
VM.prototype.setTags = function(tags, fingerprint, callback) {
  var body = {
    items: tags,
    fingerprint: fingerprint
  };

  this.request({
    method: 'POST',
    uri: '/setTags',
    json: body
  }, callback || util.noop);
};

/**
 * Start the instance.
 *
 * @resource [Instances: start API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/start}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * vm.start(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
VM.prototype.start = function(callback) {
  this.request({
    method: 'POST',
    uri: '/start'
  }, callback || util.noop);
};

/**
 * Stop the instance.
 *
 * @resource [Instances: stop API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/stop}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * vm.stop(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
VM.prototype.stop = function(callback) {
  this.request({
    method: 'POST',
    uri: '/stop'
  }, callback || util.noop);
};

/**
 * Make a new request object from the provided arguments and wrap the callback
 * to intercept non-successful responses.
 *
 * Most operations on a VM are long-running. This method handles building an
 * operation and returning it to the user's provided callback. In methods that
 * don't require an operation, we simply don't do anything with the `Operation`
 * object.
 *
 * @private
 *
 * @param {string} method - Action.
 * @param {string} path - Request path.
 * @param {*} query - Request query object.
 * @param {*} body - Request body contents.
 * @param {function} callback - The callback function.
 */
VM.prototype.request = function(reqOpts, callback) {
  var zone = this.zone;

  ServiceObject.prototype.request.call(this, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = zone.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

module.exports = VM;
