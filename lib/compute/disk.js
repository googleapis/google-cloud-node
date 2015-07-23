/*!
 * Copyright 2014 Google Inc. All Rights Reserved.
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

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * Create a Disk object to interact with a Google Compute Engine disk.
 *
 * @constructor
 * @alias module:zone/disk
 *
 * @throws {Error} if a disk name or a zone are not provided.
 *
 * @param {module:zone} zone - The Google Compute Engine zone this
 *     disk belongs to.
 * @param {string} name - Name of the disk.
 * @param {object=} metadata - Disk metadata.
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var compute = gcloud.compute();
 *
 * var myZone = compute.zone('zone-name');
 *
 * var disk = myZone.disk('disk1');
 */
function Disk(zone, name, metadata) {
  this.name = name;
  this.zone = zone;
  this.metadata = metadata;

  if (!util.is(this.name, 'string')) {
    throw new Error('A name is needed to use a Compute Engine Disk.');
  }
  if (!this.zone) {
    throw new Error('A zone is needed to use a Compute Engine Disk.');
  }
}

/**
 * Delete the disk.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * disk.delete(function(err) {});
 */
Disk.prototype.delete = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('DELETE', '', null, true, callback);
};

/**
 * Get the disk's metadata.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * disk.getMetadata(function(err, metadata, apiResponse) {});
 */
Disk.prototype.getMetadata = function(callback) {
  callback = callback || util.noop;
  var self = this;
  this.makeReq_('GET', '', null, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    self.metadata = resp;
    callback(null, self.metadata, resp);
  });
};

/**
 * Create a snapshot of a disk.
 *
 * @param {string|object} options - Snapshot options or snapshot name.
 * @param {string} options.name - Name of the snapshot.
 * @param {string=} options.description - Description of the snapshot.
 * @param {function} callback - The callback function.
 *
 * @example
 * disk.createSnapshot('my-snapshot', function(err, snapshot, apiResponse) {
 *   // `snapshot` is a Snapshot object.
 * });
 */
Disk.prototype.createSnapshot = function(options, callback) {
  if (util.is(options, 'string')) {
    options = {
      name: options
    };
  }
  if (!options.name) {
    throw new Error('A name is required to create a snapshot.');
  } else if (!/^(?:[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?)$/.test(options.name)) {
    throw new Error('Name must match [a-z]([-a-z0-9]{0,61}[a-z0-9])?');
  }

  var compute = this.zone.compute;
  this.makeReq_('POST', '/createSnapshot', null, options, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var snapshot = compute.snapshot(options.name);
    callback(null, snapshot, resp);
  });
};

/**
 * Make a new request object from the provided arguments and wrap the callback
 * to intercept non-successful responses.
 *
 * @private
 *
 * @param {string} method - Action.
 * @param {string} path - Request path.
 * @param {*} query - Request query object.
 * @param {*} body - Request body contents.
 * @param {function} callback - The callback function.
 */
Disk.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/disks/' + this.name + path;
  this.zone.makeReq_(method, path, query, body, callback);
};

module.exports = Disk;