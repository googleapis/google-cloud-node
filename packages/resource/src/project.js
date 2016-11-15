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

var common = require('@google-cloud/common');
var util = require('util');

/*! Developer Documentation
 *
 * @param {module:resource} resource - Resource object this project belongs to.
 * @param {string} id - The project's ID.
 */
/**
 * A Project object allows you to interact with a Google Cloud Platform project.
 *
 * @resource [Projects Overview]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects}
 * @resource [Project Resource]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project}
 *
 * @constructor
 * @alias module:resource/project
 *
 * @example
 * var project = resource.project('grape-spaceship-123');
 */
function Project(resource, id) {
  var methods = {
    /**
     * Create a project.
     *
     * @param {object=} config - See {module:resource#createProject}.
     *
     * @example
     * project.create(function(err, project, operation, apiResponse) {
     *   if (err) {
     *     // Error handling omitted.
     *   }
     *
     *   // `operation` will emit `error` or `complete` when the status updates.
     *
     *   operation
     *     .on('error', function(err) {})
     *     .on('complete', function() {
     *       // Project was created successfully!
     *     });
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * project.create()
     *   .then(function(data) {
     *     var project = data[0];
     *     var operation = data[1];
     *     var apiResponse = data[2];
     *
     *     return operation.promise();
     *   })
     *   .then(function(data) {
     *     var operationMetadata = data[0];
     *
     *     // Project created successfully!
     *   });
     */
    create: true,

    /**
     * Delete the project.
     *
     * **This method only works if you are authenticated as yourself, e.g. using
     * the gcloud SDK.**
     *
     * @resource [projects: delete API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects/delete}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * project.delete(function(err, apiResponse) {
     *   if (!err) {
     *     // The project was deleted!
     *   }
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * project.delete().then(function(data) {
     *   var apiResponse = data[0];
     * });
     */
    delete: true,

    /**
     * Check if the project exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the project exists or not.
     *
     * @example
     * project.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * project.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get a project if it exists.
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
     * project.get(function(err, project, apiResponse) {
     *   // `project.metadata` has been populated.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * project.get().then(function(data) {
     *   var project = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the metadata for the project.
     *
     * @resource [projects: get API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects/get}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {?object} callback.metadata - Metadata of the project from the
     *     API.
     * @param {object} callback.apiResponse - Raw API response.
     *
     * @example
     * project.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * project.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: true,

    /**
     * Set the project's metadata.
     *
     * **This method only works if you are authenticated as yourself, e.g. using
     * the gcloud SDK.**
     *
     * @resource [projects: update API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects/update}
     * @resource [Project Resource]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project}
     *
     * @param {object} metadata - See a
     *     [Project resource](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project).
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
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
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * project.setMetadata(metadata).then(function(data) {
     *   var apiResponse = data[0];
     * });
     */
    setMetadata: {
      reqOpts: {
        method: 'PUT'
      }
    }
  };

  common.ServiceObject.call(this, {
    parent: resource,
    baseUrl: '/projects',
    id: id,
    createMethod: resource.createProject.bind(resource),
    methods: methods
  });
}

util.inherits(Project, common.ServiceObject);

/**
 * Restore a project.
 *
 * **This method only works if you are authenticated as yourself, e.g. using the
 * gcloud SDK.**
 *
 * @resource [projects: undelete API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects/undelete}
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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * project.restore().then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Project.prototype.restore = function(callback) {
  callback = callback || common.util.noop;

  this.request({
    method: 'POST',
    uri: ':undelete'
  }, function(err, resp) {
    callback(err, resp);
  });
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Project);

module.exports = Project;
