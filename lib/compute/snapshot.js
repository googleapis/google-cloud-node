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
 * Create a Snapshot object to interact with a Google Compute Engine snapshot.
 *
 * @constructor
 * @alias module:compute/snapshot
 *
 * @throws {Error} if a snapshot name is not provided.
 *
 * @param {module:compute} compute - The Compute module this snapshot belongs
 *     to.
 * @param {string} name - Snapshot name.
 * @param {object=} metadata - Snapshot metadata.
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var compute = gcloud.compute();
 *
 * var disk = compute.snapshot('snapshot-name');
 */
function Snapshot(compute, name, metadata) {
  this.compute = compute;
  this.name = name;
  this.metadata = metadata;

  if (!util.is(this.name, 'string')) {
    throw new Error('A name is needed to use a Compute Engine Snapshot.');
  }
}

/**
 * Delete the snapshot.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * snapshot.delete(function(err) {});
 */
Snapshot.prototype.delete = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('DELETE', '', null, true, callback);
};

/**
 * Get the snapshots's metadata.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * snapshots.getMetadata(function(err, metadata, apiResponse) {});
 */
Snapshot.prototype.getMetadata = function(callback) {
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
Snapshot.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/global/snapshots/' + this.name + path;
  this.compute.makeReq_(method, path, query, body, callback);
};

module.exports = Snapshot;