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
 * @const {string}
 * @private
 */
var COMPUTE_BASE_URL = 'https://www.googleapis.com/compute/v1/projects/';

/**
 * Create a Disk object to interact with a Google Compute Engine disk.
 *
 * @constructor
 * @alias module:compute/disk
 *
 * @throws {Error} if a disk name or a zone are not provided.
 *
 * @param {module:compute} compute - The Google Compute Engine instance this 
 *     disk belongs to.
 * @param {string} name - Name of the disk.
 * @param {string} zone - Zone to which the disk belongs.
 * @param {number=} sizeGb - Size of the disk in GB.
 * @param {object=} metadata - Disk metadata.
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var disk = compute.disk('disk-1', 'europe-west1-b');
 */
function Disk(compute, name, zone, sizeGb, metadata) {
  this.name = name;
  this.zone = zone;

  if (!this.name) {
    throw new Error('A name is needed to use Google Cloud Compute Disk.');
  }
  if (!this.zone) {
    throw new Error('A zone is needed to use Google Cloud Compute Disk.');
  }

  this.sizeGb = sizeGb;
  this.compute = compute;
  this.metadata = metadata;
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
 * Create a snapshot of a disk.
 *
 * @param {string} name - Name of the snapshot.
 * @param {string=} description - Description of the snapshot.
 * @param {function} callback - The callback function.
 *
 * @example
 * disk.createSnapshot('my-snapshot', function(err, apiResponse) {
 *   // Handle error
 * });
 */
Disk.prototype.createSnapshot = function(name, description, callback) {
  if (!name) {
    throw new Error('A name is required to create a snapshot.');
  } else if (!/^(?:[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?)$/.test(name)) {
    throw new Error('Name must match [a-z]([-a-z0-9]{0,61}[a-z0-9])?');
  }
  if (!callback) {
    callback = description;
  }

  var body = {};
  body.name = name;
  if (description) {
    body.description = description;
  }

  this.makeReq_('POST', '/createSnapshot', null, body, callback);
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
  var reqOpts = {
    method: method,
    qs: query,
    uri: COMPUTE_BASE_URL + this.compute.projectId + 
        '/zones/' + this.zone +
        '/disks/' + this.name + path
  };

  if (body) {
    reqOpts.json = body;
  }

  this.compute.makeAuthorizedRequest_(reqOpts, callback);
};

module.exports = Disk;