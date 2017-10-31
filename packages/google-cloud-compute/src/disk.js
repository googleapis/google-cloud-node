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

var common = require('@google-cloud/common');
var extend = require('extend');
var format = require('string-format-obj');
var is = require('is');
var util = require('util');

var Snapshot = require('./snapshot.js');

/**
 * A Disk object allows you to interact with a Google Compute Engine disk.
 *
 * @see [Disks Overview]{@link https://cloud.google.com/compute/docs/disks}
 * @see [Disk Resource]{@link https://cloud.google.com/compute/docs/reference/v1/disks}
 *
 * @class
 * @param {Zone} zone
 * @param {string} name
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const zone = compute.zone('us-central1-a');
 * const disk = zone.disk('disk1');
 */
function Disk(zone, name) {
  var methods = {
    /**
     * Create a persistent disk.
     *
     * @method Disk#create
     * @param {object} config - See {Zone#createDisk}.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const zone = compute.zone('us-central1-a');
     * const disk = zone.disk('disk1');
     *
     * const config = {
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
     *   const disk = data[0];
     *   const operation = data[1];
     *   const apiResponse = data[2];
     * });
     */
    create: true,

    /**
     * Check if the disk exists.
     *
     * @method Disk#exists
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the disk exists or not.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const zone = compute.zone('us-central1-a');
     * const disk = zone.disk('disk1');
     *
     * disk.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * disk.exists().then(function(data) {
     *   const exists = data[0];
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
     * @method Disk#get
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const zone = compute.zone('us-central1-a');
     * const disk = zone.disk('disk1');
     *
     * disk.get(function(err, disk, apiResponse) {
     *   // `disk` is a Disk object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * disk.get().then(function(data) {
     *   const disk = data[0];
     *   const apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the disk's metadata.
     *
     * @method Disk#getMetadata
     * @see [Disk Resource]{@link https://cloud.google.com/compute/docs/reference/v1/disks}
     * @see [Disks: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/disks/get}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The disk's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * const Compute = require('@google-cloud/compute');
     * const compute = new Compute();
     * const zone = compute.zone('us-central1-a');
     * const disk = zone.disk('disk1');
     *
     * disk.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * disk.getMetadata().then(function(data) {
     *   const metadata = data[0];
     *   const apiResponse = data[1];
     * });
     */
    getMetadata: true,
  };

  common.ServiceObject.call(this, {
    parent: zone,
    baseUrl: '/disks',
    /**
     * @name Disk#id
     * @type {string}
     */
    id: name,
    createMethod: zone.createDisk.bind(zone),
    methods: methods,
  });

  /**
   * @name Disk#name
   * @type {string}
   */
  this.name = name;

  /**
   * The parent {@link Zone} instance of this {@link Disk} instance.
   * @name Disk#zone
   * @type {Zone}
   */
  this.zone = zone;

  /**
   * @name Disk#formattedName
   * @type {string}
   */
  this.formattedName = Disk.formatName_(zone, name);
}

util.inherits(Disk, common.ServiceObject);

/**
 * Format a disk's name how the API expects.
 *
 * @private
 *
 * @param {Zone} zone - The Zone this disk belongs to.
 * @param {string} name - The name of the disk.
 * @returns {string} - The formatted name.
 */
Disk.formatName_ = function(zone, name) {
  return format('projects/{pId}/zones/{zoneName}/disks/{diskName}', {
    pId: zone.compute.projectId,
    zoneName: zone.name,
    diskName: name,
  });
};

/**
 * Create a snapshot of a disk.
 *
 * @see [Snapshots Overview]{@link https://cloud.google.com/compute/docs/disks/persistent-disks#snapshots}
 * @see [Disks: createSnapshot API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/disks/createSnapshot}
 *
 * @param {string} name - Name of the snapshot.
 * @param {object=} options - See the
 *     [Disks: createSnapshot](https://cloud.google.com/compute/docs/reference/v1/disks/createSnapshot)
 *     request body.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {Snapshot} callback.snapshot - The created Snapshot
 *     object.
 * @param {Operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const zone = compute.zone('us-central1-a');
 * const disk = zone.disk('disk1');
 *
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
 *   const snapshot = data[0];
 *   const operation = data[1];
 *   const apiResponse = data[2];
 * });
 */
Disk.prototype.createSnapshot = function(name, options, callback) {
  var self = this;
  var zone = this.zone;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.request(
    {
      method: 'POST',
      uri: '/createSnapshot',
      json: extend({}, options, {
        name: name,
      }),
    },
    function(err, resp) {
      if (err) {
        callback(err, null, null, resp);
        return;
      }

      var snapshot = self.snapshot(name);

      var operation = zone.operation(resp.name);
      operation.metadata = resp;

      callback(null, snapshot, operation, resp);
    }
  );
};

/**
 * Delete the disk.
 *
 * @see [Disks: delete API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/disks/delete}
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
 * const zone = compute.zone('us-central1-a');
 * const disk = zone.disk('disk1');
 *
 * disk.delete(function(err, operation, apiResponse) {
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * disk.delete().then(function(data) {
 *   const operation = data[0];
 *   const apiResponse = data[1];
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
 * @see [Snapshots Overview]{@link https://cloud.google.com/compute/docs/disks/persistent-disks#snapshots}
 *
 * @param {string} name - Name of the snapshot.
 * @returns {Snapshot}
 *
 * @example
 * const Compute = require('@google-cloud/compute');
 * const compute = new Compute();
 * const zone = compute.zone('us-central1-a');
 * const disk = zone.disk('disk1');
 * const snapshot = disk.snapshot('snapshot-name');
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
  exclude: ['snapshot'],
});

module.exports = Disk;
