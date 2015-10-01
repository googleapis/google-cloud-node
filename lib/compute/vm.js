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
var is = require('is');
var nodeutil = require('util');

/**
 * @type {module:compute/disk}
 * @private
 */
var Disk = require('./disk.js');

/**
 * @type {module:common/serviceObject}
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
  ServiceObject.call(this, {
    parent: zone,
    baseUrl: '/instances',
    id: name,
    createMethod: zone.createVM.bind(zone),
    exclude: ['setMetadata']
  });

  this.zone = zone;
}

nodeutil.inherits(VM, ServiceObject);

/**
 * Create a virtual machine.
 *
 * @resource [Instance Resource]{@link https://cloud.google.com/compute/docs/reference/v1/instances}
 * @resource [Instances: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/insert}
 *
 * @param {object} config - See an
 *     [Instance resource](https://cloud.google.com/compute/docs/reference/v1/instances).
 * @param {object[]=} config.disks - See a
 *     [Disk resource](https://cloud.google.com/compute/docs/reference/v1/disks).
 * @param {boolean=} config.http - Allow HTTP traffic. Default: `false`
 * @param {boolean=} config.https - Allow HTTPS traffic. Default: `false`
 * @param {object[]=} config.networkInterfaces - An array of configurations for
 *     this interface. This specifies how this interface should interact with
 *     other network services, such as connecting to the internet. Default:
 *     `[ { network: 'global/networks/default' } ]`
 * @param {string=} config.machineType - The machine type resource to use.
 *     Provide only the name of the machine, e.g. `n1-standard-16`. Refer to
 *     [Available Machine Types](https://goo.gl/jrHEbo). Default:
 *     `n1-standard-1`
 * @param {string=} config.os - Specify the name of an OS, and we will use the
 *     latest version as the source image of a new boot disk. See
 *     [this list of accepted OS names](https://github.com/stephenplusplus/gce-images#accepted-os-names).
 * @param {string[]=} config.tags - An array of tags.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/vm} callback.vm - The created VM object.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * //-
 * // Create a new instance using the latest Debian version as the source image
 * // for a new boot disk.
 * //-
 * var config = {
 *   os: 'debian',
 *   http: true,
 *   tags: ['debian-server']
 * };
 *
 * //-
 * // The above object will auto-expand behind the scenes to something like the
 * // following. The Debian version may be different when you run the command.
 * //-
 * var config = {
 *   machineType: 'n1-standard-1',
 *   disks: [
 *     {
 *       boot: true,
 *       initializeParams: {
 *         sourceImage:
 *           'https://www.googleapis.com/compute/v1/projects' +
 *           '/debian-cloud/global/images/debian-7-wheezy-v20150710'
 *       }
 *     }
 *   ],
 *   networkInterfaces: [
 *     {
 *       network: 'global/networks/default'
 *     }
 *   ],
 *   tags: [
 *     {
 *       items: [
 *         'debian-server',
 *         'http-server'
 *       ]
 *     }
 *   ]
 * };
 *
 * vm.create(config, function(err, vm, operation, apiResponse) {
 *   // `vm` is a VM object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
VM.prototype.create = function() {
  ServiceObject.prototype.create.apply(this, arguments);
};

/**
 * Get a virtual machine if it exists. Also see {module:compute/vm#getOrCreate}.
 *
 * @resource [Instance Resource]{@link https://cloud.google.com/compute/docs/reference/v1/instances}

 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/vm} callback.vm - The VM object.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * vm.get(function(err, vm, apiResponse) {
 *   // `vm` is a VM object.
 * });
 */
VM.prototype.get = function() {
  ServiceObject.prototype.get.apply(this, arguments);
};

/**
 * Get a virtual machine if it exists, otherwise create one.
 *
 * @resource [Instance Resource]{@link https://cloud.google.com/compute/docs/reference/v1/instances}
 * @resource [Instances: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/insert}
 *
 * @param {object} config - See an
 *     [Instance resource](https://cloud.google.com/compute/docs/reference/v1/instances).
 * @param {object[]=} config.disks - See a
 *     [Disk resource](https://cloud.google.com/compute/docs/reference/v1/disks).
 * @param {boolean=} config.http - Allow HTTP traffic. Default: `false`
 * @param {boolean=} config.https - Allow HTTPS traffic. Default: `false`
 * @param {object[]=} config.networkInterfaces - An array of configurations for
 *     this interface. This specifies how this interface should interact with
 *     other network services, such as connecting to the internet. Default:
 *     `[ { network: 'global/networks/default' } ]`
 * @param {string=} config.machineType - The machine type resource to use.
 *     Provide only the name of the machine, e.g. `n1-standard-16`. Refer to
 *     [Available Machine Types](https://goo.gl/jrHEbo). Default:
 *     `n1-standard-1`
 * @param {string=} config.os - Specify the name of an OS, and we will use the
 *     latest version as the source image of a new boot disk. See
 *     [this list of accepted OS names](https://github.com/stephenplusplus/gce-images#accepted-os-names).
 * @param {string[]=} config.tags - An array of tags.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/vm} callback.vm - The created VM object.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * //-
 * // Create a new instance using the latest Debian version as the source image
 * // for a new boot disk.
 * //-
 * var config = {
 *   os: 'debian',
 *   http: true,
 *   tags: ['debian-server']
 * };
 *
 * //-
 * // The above object will auto-expand behind the scenes to something like the
 * // following. The Debian version may be different when you run the command.
 * //-
 * var config = {
 *   machineType: 'n1-standard-1',
 *   disks: [
 *     {
 *       boot: true,
 *       initializeParams: {
 *         sourceImage:
 *           'https://www.googleapis.com/compute/v1/projects' +
 *           '/debian-cloud/global/images/debian-7-wheezy-v20150710'
 *       }
 *     }
 *   ],
 *   networkInterfaces: [
 *     {
 *       network: 'global/networks/default'
 *     }
 *   ],
 *   tags: [
 *     {
 *       items: [
 *         'debian-server',
 *         'http-server'
 *       ]
 *     }
 *   ]
 * };
 *
 * vm.getOrCreate(config, function(err, vm, operation, apiResponse) {
 *   // `vm` is a VM object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 */
VM.prototype.getOrCreate = function() {
  ServiceObject.prototype.getOrCreate.apply(this, arguments);
};

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
VM.prototype.detachDisk = function(deviceName, callback) {
  var self = this;

  if (deviceName instanceof Disk) {
    var disk = deviceName;

    if (disk.metadata.deviceName) {
      self.detachDisk(disk.metadata.deviceName, callback);
      return;
    }

    this.getMetadata(function(err, metadata) {
      if (err) {
        callback(new DetachDiskError(err.message));
        return;
      }

      var deviceName;
      var baseUrl = 'https://www.googleapis.com/compute/v1/';

      // Try to find the deviceName by matching the source of the attached disks
      // to the name of the disk provided by the user.
      for (var i = 0; !deviceName && i < metadata.disks.length; i++) {
        var attachedDisk = metadata.disks[i];
        var source = attachedDisk.source.replace(baseUrl, '');

        if (source === disk.formattedName) {
          deviceName = attachedDisk.deviceName;
        }
      }

      if (deviceName) {
        self.detachDisk(deviceName, callback);
      } else {
        callback(new DetachDiskError('Could not find a deviceName for disk.'));
      }
    });
    return;
  }

  this.request({
    method: 'POST',
    uri: '/detachDisk',
    qs: {
      deviceName: deviceName
    }
  }, callback || util.noop);
};

/**
 * Get the instances's metadata.
 *
 * @resource [Instance Resource]{@link https://cloud.google.com/compute/docs/reference/v1/instances}
 * @resource [Instance: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/get}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {object} callback.metadata - The instance's metadata.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * vm.getMetadata(function(err, metadata, apiResponse) {});
 */
VM.prototype.getMetadata = function() {
  ServiceObject.prototype.getMetadata.apply(this, arguments);
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
