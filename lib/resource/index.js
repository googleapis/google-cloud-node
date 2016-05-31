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
 * @module resource
 */

'use strict';

var extend = require('extend');
var is = require('is');
var nodeutil = require('util');

/**
 * @type {module:resource/project}
 * @private
 */
var Project = require('./project.js');

/**
 * @type {module:common/service}
 * @private
 */
var Service = require('../common/service.js');

/**
 * @type {module:common/stream-router}
 * @private
 */
var streamRouter = require('../common/stream-router.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * [The Cloud Resource Manager](https://cloud.google.com/resource-manager/)
 * provides methods that you can use to programmatically manage your projects
 * in the Google Cloud Platform. With this API, you can do the following:
 *
 *   - Get a list of all projects associated with an account.
 *   - Create new projects.
 *   - Update existing projects.
 *   - Delete projects.
 *   - Recover projects.
 *
 * @alias module:resource
 * @constructor
 *
 * @classdesc
 * <p class="notice">
 *   **This is a Beta release of Cloud Resource Manager.** This feature is not
 *   covered by any SLA or deprecation policy and may be subject to
 *   backward-incompatible changes.
 * </p>
 *
 * The object returned from <code>gcloud.resource</code> gives you complete
 * access to your projects.
 *
 * To learn more about Resource Manager, see
 * [What is the Google Cloud Resource Manager?](https://cloud.google.com/resource-manager)
 *
 * @param {object} options - [Configuration object](#/docs).
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var resource = gcloud.resource();
 */
function Resource(options) {
  if (!(this instanceof Resource)) {
    options = util.normalizeArguments(this, options, {
      projectIdRequired: false
    });
    return new Resource(options);
  }

  var config = {
    baseUrl: 'https://cloudresourcemanager.googleapis.com/v1beta1',
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    projectIdRequired: false
  };

  Service.call(this, config, options);

  this.defaultProjectId_ = options.projectId;
}

nodeutil.inherits(Resource, Service);

/**
 * Create a project.
 *
 * **This method only works if you are authenticated as yourself, e.g. using the
 * gcloud SDK.**
 *
 * @resource [Projects Overview]{@link https://cloud.google.com/compute/docs/networking#networks}
 * @resource [projects: create API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/create}
 *
 * @param {string} name - Name of the project.
 * @param {object=} options - See a
 *     [Project resource](https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects#Project).
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:resource/project} callback.project - The created Project
 *     object.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * resource.createProject('new project name', function(err, project) {
 *   if (!err) {
 *     // `project` is a new Project instance.
 *   }
 * });
 */
Resource.prototype.createProject = function(id, options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  this.request({
    method: 'POST',
    uri: '/projects',
    json: extend({}, options, {
      projectId: id
    })
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var project = self.project(resp.projectId);
    project.metadata = resp;

    callback(null, project, resp);
  });
};

/**
 * Get a list of projects.
 *
 * @resource [Projects Overview]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects}
 * @resource [projects: list API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/list}
 *
 * @param {object=} options - Operation search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - An expression for filtering the results.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of results to return.
 * @param {number} options.pageSize - Maximum number of projects to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:resource/project} callback.operations - Project objects from
 *     your account.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * resource.getProjects(function(err, projects) {
 *   // `projects` is an array of `Project` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, projects, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     resource.getProjects(nextQuery, callback);
 *   }
 * }
 *
 * resource.getProjects({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the projects from your account as a readable object stream.
 * //-
 * resource.getProjects()
 *   .on('error', console.error)
 *   .on('data', function(project) {
 *     // `project` is a `Project` object.
 *   })
 *   .on('end', function() {
 *     // All projects retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * resource.getProjects()
 *   .on('data', function(project) {
 *     this.end();
 *   });
 */
Resource.prototype.getProjects = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/projects',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var projects = (resp.projects || []).map(function(project) {
      var projectInstance = self.project(project.name);
      projectInstance.metadata = project;
      return projectInstance;
    });

    callback(null, projects, nextQuery, resp);
  });
};

/**
 * Create a Project object. See {module:resoucemanager/createProject} to create
 * a project.
 *
 * @throws {Error} If an ID is not provided.
 *
 * @param {string} id - The ID of the project (eg: `grape-spaceship-123`).
 * @return {module:resource/project}
 *
 * @example
 * var project = resource.project('grape-spaceship-123');
 */
Resource.prototype.project = function(id) {
  id = id || this.defaultProjectId_;

  if (!id) {
    throw new Error('A project ID is required.');
  }

  return new Project(this, id);
};

/*! Developer Documentation
 *
 * These methods can be used with either a callback or as a readable object
 * stream. `streamRouter` is used to add this dual behavior.
 */
streamRouter.extend(Resource, ['getProjects']);

module.exports = Resource;
