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
 * @module resource/project
 */

'use strict';

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/*! Developer Documentation
 *
 * @param {module:resource} resource - Resource object this project belongs to.
 * @param {string} id - The project's ID.
 */
/**
 * A Project object allows you to interact with a Google Cloud Platform project.
 *
 * @resource [Projects Overview]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects}
 * @resource [Project Resource]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects#Project}
 *
 * @constructor
 * @alias module:resource/project
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var resource = gcloud.resource();
 * var project = resource.project('grape-spaceship-123');
 *
 * //-
 * // If no ID is passed to `resource.project()`, the returned object will refer
 * // to the project originally specified during instantiation of `gcloud`.
 * //
 * // Thus, in this case, these are equivalent:
 * //-
 * var project = resource.project('grape-spaceship-123');
 * var project = resource.project();
 */
function Project(resource, id) {
  this.resource = resource;
  this.id = id;
  this.metadata = {};
}

/**
 * Delete the project.
 *
 * @resource [projects: delete API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/delete}
 *
 * @private
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * project.delete(function(err, apiResponse) {
 *   if (!err) {
 *     // The project was deleted!
 *   }
 * });
 */
Project.prototype.delete = function(callback) {
  callback = callback || util.noop;

  this.makeReq_('DELETE', '', null, null, function(err, resp) {
    callback(err, resp);
  });
};

/**
 * Get the metadata for the project.
 *
 * @resource [projects: get API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/get}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {?object} callback.metadata - Metadata of the project from the API.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * project.getMetadata(function(err, metadata, apiResponse) {});
 */
Project.prototype.getMetadata = function(callback) {
  var self = this;

  callback = callback || util.noop;

  this.makeReq_('GET', '', null, null, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    self.metadata = resp;

    callback(null, self.metadata, resp);
  });
};

/**
 * Restore a project.
 *
 * @resource [projects: undelete API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/undelete}
 *
 * @private
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * project.restore(function(err, apiResponse) {
 *   if (!err) {
 *     // Project restored.
 *   }
 * });
 */
Project.prototype.restore = function(callback) {
  callback = callback || util.noop;

  this.makeReq_('POST', ':undelete', null, null, function(err, resp) {
    callback(err, resp);
  });
};

/**
 * Set the project's metadata.
 *
 * @resource [projects: update API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/update}
 * @resource [Project Resource]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects#Project}
 *
 * @private
 *
 * @param {object} metadata - See a
 *     [Project resource](https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects#Project).
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var metadata = {
 *   name: 'New name'
 * };
 *
 * project.setMetadata(metadata, function(err, apiResponse) {
 *   if (!err) {
 *     // The project has been successfully updated.
 *   }
 * });
 */
Project.prototype.setMetadata = function(metadata, callback) {
  var self = this;

  callback = callback || util.noop;

  this.makeReq_('PUT', '', null, metadata, function(err, resp) {
    if (err) {
      callback(err, resp);
      return;
    }

    self.metadata = resp;

    callback(null, resp);
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
Project.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/' + this.id + path;
  this.resource.makeReq_(method, path, query, body, callback);
};

module.exports = Project;
