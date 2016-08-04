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
 * @resource [Projects Overview]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects}
 * @resource [Project Resource]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects#Project}
 *
 * @constructor
 * @alias module:resource/project
 *
 * @example
 * var gcloud = require('google-cloud')({
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
  var methods = {
    /**
     * Create a project.
     *
     * @param {object=} config - See {module:resource#createProject}.
     *
     * @example
     * project.create(function(err, zone, apiResponse) {
     *   if (!err) {
     *     // The zone was created successfully.
     *   }
     * });
     */
    create: true,

    /**
     * Delete the project.
     *
     * **This method only works if you are authenticated as yourself, e.g. using
     * the gcloud SDK.**
     *
     * @resource [projects: delete API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/delete}
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
     */
    get: true,

    /**
     * Get the metadata for the project.
     *
     * @resource [projects: get API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/get}
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
     */
    getMetadata: true,

    /**
     * Set the project's metadata.
     *
     * **This method only works if you are authenticated as yourself, e.g. using
     * the gcloud SDK.**
     *
     * @resource [projects: update API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/update}
     * @resource [Project Resource]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects#Project}
     *
     * @param {object} metadata - See a
     *     [Project resource](https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects#Project).
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
 * @resource [projects: undelete API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/undelete}
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
  callback = callback || common.util.noop;

  this.request({
    method: 'POST',
    uri: ':undelete'
  }, function(err, resp) {
    callback(err, resp);
  });
};

module.exports = Project;
