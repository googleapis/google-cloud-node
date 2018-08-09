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

import * as common from '@google-cloud/common';
import {promisifyAll} from '@google-cloud/promisify';
import * as util from 'util';

/**
 * A Project object allows you to interact with a Google Cloud Platform project.
 *
 * @see [Projects Overview]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects}
 * @see [Project Resource]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project}
 *
 * @class
 * @param {Resource} resource {@link Resource} object this project belongs to.
 * @param {string} id The project's ID.
 *
 * @example
 * const Resource = require('@google-cloud/resource');
 * const resource = new Resource();
 * const project = resource.project('grape-spaceship-123');
 */
function Project(resource, id) {
  var methods = {
    /**
     * Create a project.
     *
     * @method Project#create
     * @param {object} [config] See {@link Resource#createProject}.
     *
     * @example
     * const Resource = require('@google-cloud/resource');
     * const resource = new Resource();
     * const project = resource.project('grape-spaceship-123');
     *
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
     *     const project = data[0];
     *     const operation = data[1];
     *     const apiResponse = data[2];
     *
     *     return operation.promise();
     *   })
     *   .then(function(data) {
     *     const operationMetadata = data[0];
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
     * @see [projects: delete API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects/delete}
     *
     * @method Project#delete
     * @param {function} [callback] The callback function.
     * @param {?error} callback.err An error returned while making this
     *     request.
     * @param {object} callback.apiResponse The full API response.
     *
     * @example
     * const Resource = require('@google-cloud/resource');
     * const resource = new Resource();
     * const project = resource.project('grape-spaceship-123');
     *
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
     *   const apiResponse = data[0];
     * });
     */
    delete: true,

    /**
     * Check if the project exists.
     *
     * @param {function} callback The callback function.
     * @param {?error} callback.err An error returned while making this
     *     request.
     * @param {boolean} callback.exists Whether the project exists or not.
     *
     * @example
     * const Resource = require('@google-cloud/resource');
     * const resource = new Resource();
     * const project = resource.project('grape-spaceship-123');
     *
     * project.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * project.exists().then(function(data) {
     *   const exists = data[0];
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
     * @method Project#get
     * @param {options} [options] Configuration object.
     * @param {boolean} [options.autoCreate=false] Automatically create the
     *     object if it does not exist.
     *
     * @example
     * const Resource = require('@google-cloud/resource');
     * const resource = new Resource();
     * const project = resource.project('grape-spaceship-123');
     *
     * project.get(function(err, project, apiResponse) {
     *   // `project.metadata` has been populated.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * project.get().then(function(data) {
     *   const project = data[0];
     *   const apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the metadata for the project.
     *
     * @see [projects: get API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects/get}
     *
     * @method Project#getMetadata
     * @param {function} [callback] The callback function.
     * @param {?error} callback.err An error returned while making this
     *     request.
     * @param {?object} callback.metadata - Metadata of the project from the
     *     API.
     * @param {object} callback.apiResponse - Raw API response.
     *
     * @example
     * const Resource = require('@google-cloud/resource');
     * const resource = new Resource();
     * const project = resource.project('grape-spaceship-123');
     *
     * project.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * project.getMetadata().then(function(data) {
     *   const metadata = data[0];
     *   const apiResponse = data[1];
     * });
     */
    getMetadata: true,

    /**
     * Set the project's metadata.
     *
     * **This method only works if you are authenticated as yourself, e.g. using
     * the gcloud SDK.**
     *
     * @see [projects: update API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects/update}
     * @see [Project Resource]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project}
     *
     * @method Project#setMetadata
     * @param {object} metadata See a
     *     [Project resource](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project).
     * @param {function} [callback] The callback function.
     * @param {?error} callback.err An error returned while making this
     *     request.
     * @param {object} callback.apiResponse The full API response.
     *
     * @example
     * const Resource = require('@google-cloud/resource');
     * const resource = new Resource();
     * const project = resource.project('grape-spaceship-123');
     *
     * const metadata = {
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
     *   const apiResponse = data[0];
     * });
     */
    setMetadata: {
      reqOpts: {
        method: 'PUT',
      },
    },
  };

  common.ServiceObject.call(this, {
    parent: resource,
    baseUrl: '/projects',
    /**
     * @name Project#id
     * @type {string}
     */
    id: id,
    createMethod: resource.createProject.bind(resource),
    methods: methods,
  });
}

util.inherits(Project, common.ServiceObject);

/**
 * Restore a project.
 *
 * **This method only works if you are authenticated as yourself, e.g. using the
 * gcloud SDK.**
 *
 * @see [projects: undelete API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects/undelete}
 *
 * @param {function} [callback] The callback function.
 * @param {?error} callback.err An error returned while making this request.
 * @param {object} callback.apiResponse Raw API response.
 *
 * @example
 * const Resource = require('@google-cloud/resource');
 * const resource = new Resource();
 * const project = resource.project('grape-spaceship-123');
 *
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
 *   const apiResponse = data[0];
 * });
 */
Project.prototype.restore = function(callback) {
  callback = callback || common.util.noop;

  this.request(
    {
      method: 'POST',
      uri: ':undelete',
    },
    function(err, resp) {
      callback(err, resp);
    }
  );
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Project);

/**
 * Reference to the {@link Project} class.
 * @name module:@google-cloud/resource.Project
 * @see Project
 */
module.exports = Project;
