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
 * @module compute/region
 */

'use strict';

/**
 * Create a Region object to interact with a Google Compute Engine region.
 *
 * @constructor
 * @alias module:compute/region
 *
 * @throws {Error} if a region name is not provided.
 *
 * @param {module:compute} compute - The Google Compute Engine instance this
 *     disk belongs to.
 * @param {string} name - Name of the region.
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var myRegion = compute.region('region-name');
 */
function Region(compute, name) {
  this.name = name;
  this.compute = compute;

  if (!this.name) {
    throw new Error('A name is needed to use a Compute Engine Region.');
  }
}

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
Region.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/regions/' + this.name + path;
  this.compute.makeReq_(method, path, query, body, callback);
};

module.exports = Region;