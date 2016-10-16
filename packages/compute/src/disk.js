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
 * @module compute/disk
 */

'use strict';

var common = require('@google-cloud/common');
var extend = require('extend');
var format = require('string-format-obj');
var is = require('is');
var util = require('util');

/**
 * @type {module:compute/snapshot}
 * @private
 */
var Snapshot = require('./snapshot.js');

/*! Developer Documentation
 *
 * @param {module:zone} zone - Zone this disk belongs to.
 * @param {string} name - The name of the disk.
 */
/**
 * A Disk object allows you to interact with a Google Compute Engine disk.
 *
 * @resource [Disks Overview]{@link https://cloud.google.com/compute/docs/disks}
 * @resource [Disk Resource]{@link https://cloud.google.com/compute/docs/reference/v1/disks}
 *
 * @constructor
 * @alias module:compute/disk
 *
 * @example
 * var zone = gce.zone('zone-name');
 *
 * var disk = zone.disk('disk1');
 */
function Disk(zone, name) {
  var methods = {
    /**
     * Create a persistent disk.
     *
     * @param {object} config - See {module:compute/zone#createDisk}.
     *
     * @example
     * var config = {
     *   // ...
     * };
     *
     * disk.create(config, function(err, disk, operation, apiResponse) {
     *   // `disk` is a Disk object.
     *
     *   // `operation` is an Operation object that can be used to check the
     *   // status of the request.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * disk.create(config).then(function(data) {
     *   var disk = data[0];
     *   var operation = data[1];
     *   var apiResponse = data[2];
     * });
     */
    create: true,

    /**
     * Check if the disk exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the disk exists or not.
     *
     * @example
     * disk.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * disk.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get a disk if it exists.
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
     * disk.get(function(err, disk, apiResponse) {
     *   // `disk` is a Disk object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * disk.get().then(function(data) {
     *   var disk = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the disk's metadata.
     *
     * @resource [Disk Resource]{@link https://cloud.google.com/compute/docs/reference/v1/disks}
     * @resource [Disks: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/disks/get}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The disk's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * disk.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * disk.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: true
  };

  common.ServiceObject.call(this, {
    parent: zone,
    baseUrl: '/disks',
    id: name,
    createMethod: zone.createDisk.bind(zone),
    methods: methods
  });

  this.name = name;
  this.zone = zone;

  this.formattedName = Disk.formatName_(zone, name);
}

util.inherits(Disk, common.ServiceObject);

/**
 * Format a disk's name how the API expects.
 *
 * @private
 *
 * @param {module:compute/zone} zone - The Zone this disk belongs to.
 * @param {string} name - The name of the disk.
 * @return {string} - The formatted name.
 */
Disk.formatName_ = function(zone, name) {
  return format('projects/{pId}/zones/{zoneName}/disks/{diskName}', {
    pId: zone.compute.projectId,
    zoneName: zone.name,
    diskName: name
  });
};

/**
 * Create a snapshot of a disk.
 *
 * @resource [Snapshots Overview]{@link https://cloud.google.com/compute/docs/disks/persistent-disks#snapshots}
 * @resource [Disks: createSnapshot API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/disks/createSnapshot}
 *
 * @param {string} name - Name of the snapshot.
 * @param {object=} options - See the
 *     [Disks: createSnapshot](https://cloud.google.com/compute/docs/reference/v1/disks/createSnapshot)
 *     request body.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/snapshot} callback.snapshot - The created Snapshot
 *     object.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * function callback(err, snapshot, operation, apiResponse) {
 *   // `snapshot` is a Snapshot object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * }
 *
 * disk.createSnapshot('new-snapshot-name', callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * disk.createSnapshot('new-snapshot-name').then(function(data) {
 *   var snapshot = data[0];
 *   var operation = data[1];
 *   var apiResponse = data[2];
 * });
 */
Disk.prototype.createSnapshot = function(name, options, callback) {
  var self = this;
  var zone = this.zone;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.request({
    method: 'POST',
    uri: '/createSnapshot',
    json: extend({}, options, {
      name: name
    })
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var snapshot = self.snapshot(name);

    var operation = zone.operation(resp.name);
    operation.metadata = resp;

    callback(null, snapshot, operation, resp);
  });
};

/**
 * Delete the disk.
 *
 * @resource [Disks: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/disks/delete}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * disk.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * disk.delete().then(function(data) {
 *   var operation = data[0];
 *   var apiResponse = data[1];
 * });
 */
Disk.prototype.delete = function(callback) {
  var zone = this.zone;

  callback = callback || common.util.noop;

  common.ServiceObject.prototype.delete.call(this, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var operation = zone.operation(resp.name);
    operation.metadata = resp;

    callback(null, operation, resp);
  });
};

/**
 * Get a reference to a snapshot from this disk.
 *
 * @resource [Snapshots Overview]{@link https://cloud.google.com/compute/docs/disks/persistent-disks#snapshots}
 *
 * @param {string} name - Name of the snapshot.
 * @return {module:compute/snapshot}
 *
 * @example
 * var snapshot = disk.snapshot('snapshot-name');
 */
Disk.prototype.snapshot = function(name) {
  return new Snapshot(this, name);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Disk, {
  exclude: ['snapshot']
});

module.exports = Disk;
