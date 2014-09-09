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
 * @module compute/instances
 */

'use strict';

/**
 * @type module:common/connection
 * @private
 */
var conn = require('../common/connection.js');

/**
 * @type module:common/util
 * @private
 */
var util = require('../common/util.js');

/**
 * Scopes for Google Compute Engine access.
 * @const {array} SCOPES
 * @private
 */
var SCOPES = [
  'https://www.googleapis.com/auth/compute',
  'https://www.googleapis.com/auth/compute.readonly'
];

/**
 * @const {string}
 * @private
 */
var COMPUTE_BASE_URL = 'https://www.googleapis.com/compute/v1/projects';

/**
 * Constructor for the Instances subcomponent of the Google Compute API.  See
 * {@link https://developers.google.com/compute/docs/reference/latest/} for the
 * latest documentation.
 *
 * @alias module:instances

 * @throws if a project or zone isn't specified.
 *
 * @param {object} options - Configuration options.
 * @param {string} options.project - Name of Google Cloud project.
 * @param {string=} options.zone - GCE zone for Instances commands.
 * @param {string=} options.keyFilename - Full path to the JSON key downloaded
 *     from the Google Developers Console. Alternatively, you may provide a
 *     `credentials` object.
 * @param {object=} options.credentials - Credentials object, used in place of
 *     a `keyFilename`.
 *
 * @example
 * var gcloud = require('gcloud');
 * var compute = gcloud.compute;
 * var instances;
 *
 * // From Google Compute Engine
 * instances = new compute.Instances({ project: 'myproject',
 *                                     zone: 'us-central1-a' });
 *
 * // From elsewhere
 * instances = new compute.Instances({ project: 'myproject',
 *                                     zone: 'us-central1-a',
 *                                     keyFilename: '/path/to/the/key.json' });
 */
function Instances(options) {
  if (!options.project) {
    throw Error('A project is needed to use Google Compute Instances');
  }
  if (!options.zone) {
    throw Error('A zone is needed to use Google Compute Instances');
  }
  this.connection = new conn.Connection({
    credentials: options.credentials,
    keyFilename: options.keyFilename,
    scopes: SCOPES
  });
  this.project = options.project;
  this.zone = options.zone;
}

/**
 * Deletes an instance.
 *
 * @param {string} instance - The instance name.
 */
Instances.prototype.delete = function(instance, callback) {
  var path = util.format('zones/{zone}/instances/{instance}',
			 { zone: this.zone, instance: instance });
  this.makeReq('DELETE', path, null, true, callback);
};

/**
 * Gets an instance.
 *
 * @param {string} instance - The instance name.
 */
Instances.prototype.get = function(instance, callback) {
  var path = util.format('zones/{zone}/instances/{instance}',
			 { zone: this.zone, instance: instance });
  this.makeReq('GET', path, null, true, callback);
};

/**
 * Inserts an instance.
 *
 * @param {object} params - an "Instances resource" to be inserted.  See
 *     {@link http://goo.gl/7pZc4E} for details.
 */
Instances.prototype.insert = function(params, callback) {
  var path = util.format('zones/{zone}/instances', { zone: this.zone });
  this.makeReq('POST', path, null, params, callback);
};

/**
 * Lists instances.
 *
 * @param {object=} query - Query object.
 * @param {string} query.filter - Filters results to objects whose names begin
 *     with this prefix.
 * @param {number} query.maxResults - Maximum number of items plus prefixes to
 *     return.
 * @param {string} query.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 *
 * @example
 * instances.list({ maxResults: 10 }, function(err, items, nextQuery) {
 *   if (nextQuery) {
 *     // nextQuery will be non-null if there are more results.
 *     instances.list(nextQuery, function(err, items, nextQuery) {});
 *   }
 * });
 *
 * // List without a query
 * instances.list(function(err, items, nextQuery) {});
 */
Instances.prototype.list = function(query, callback) {
  if (arguments.length === 1) {
    callback = query;
    query = {};
  }
  var path = util.format('zones/{zone}/instances', { zone: this.zone });
  this.makeReq('GET', path, query, true, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var nextQuery = null;
    if (resp.nextPageToken) {
      nextQuery = util.extend({}, query);
      nextQuery.pageToken = resp.nextPageToken;
    }
    callback(null, resp.items, nextQuery);
  });
};

/**
 * Resets an instance.
 *
 * @param {string} instance - The instance name.
 */
Instances.prototype.insert = function(instance, callback) {
  var path = util.format('zones/{zone}/instances/{instance}/reset',
			 { zone: this.zone, instance: instance });
  this.makeReq('POST', path, null, null, callback);
};

/**
 * Make a new request object from the provided arguments and wrap the callback
 * to intercept non-successful responses.
 *
 * @param {string} method - Action.
 * @param {string} path - Request path.
 * @param {*} query - Request query object.
 * @param {*} body - Request body contents.
 * @param {function} callback - The callback function.
 */
Instances.prototype.makeReq = function(method, path, query, body, callback) {
  var reqOpts = {
    method: method,
    qs: query,
    uri: util.format('{base}/{project}/{path}', {
      base: COMPUTE_BASE_URL,
      project: this.project,
      path: path
    })
  };
  if (body) {
    reqOpts.json = body;
  }
  this.connection.req(reqOpts, function(err, res, body) {
    util.handleResp(err, res, body, callback);
  });
};

module.exports = Instances;
