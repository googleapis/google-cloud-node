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

var common = require('@google-cloud/common');
var extend = require('extend');
var is = require('is');
var util = require('util');

/**
 * @type {module:resource/project}
 * @private
 */
var Project = require('./project.js');

/** *
 * The [Cloud Resource Manager](https://cloud.google.com/resource-manager/)
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
 * The apiEndpoint from options will set the host. If not set, the
 * `GOOGLE_CLOUD_RESOURCE_ENDPOINT` environment variable is honored,
 * otherwise the actual API endpoint will be used.
 *
 * @resource [What is the Cloud Resource Manager?]{@link https://cloud.google.com/resource-manager}
 *
 * @param {object} options - [Configuration object](#/docs).
 * @param {string=} options.apiEndpoint - Override the default API endpoint used
 *     to reach the Resource API.
 */
function Resource(options) {
  if (!(this instanceof Resource)) {
    options = common.util.normalizeArguments(this, options, {
      projectIdRequired: false
    });
    return new Resource(options);
  }

  var config = {
    defaultApiEndpoint: 'https://cloudresourcemanager.googleapis.com/v1',
    environmentVariables: [ 'GOOGLE_CLOUD_RESOURCE_ENDPOINT' ],
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    projectIdRequired: false,
    packageJson: require('../package.json')
  };

  common.Service.call(this, config, options);
}

util.inherits(Resource, common.Service);

/**
 * Create a project.
 *
 * **This method only works if you are authenticated as yourself, e.g. using the
 * gcloud SDK.**
 *
 * @resource [Projects Overview]{@link https://cloud.google.com/compute/docs/networking#networks}
 * @resource [projects: create API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects/create}
 *
 * @param {string} id - ID of the project.
 * @param {object=} options - See a
 *     [Project resource](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project).
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:resource/project} callback.project - The created Project
 *     object.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var id = 'new-project-id';
 *
 * resource.createProject(id, function(err, project, operation, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // `project` is a new Project instance.
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
 * resource.createProject(id)
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

    var operation = self.operation(resp.name);
    operation.metadata = resp;

    callback(null, project, operation, resp);
  });
};

/**
 * Get a list of projects.
 *
 * @resource [Projects Overview]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects}
 * @resource [projects: list API Documentation]{@link https://cloud.google.com/resource-manager/reference/rest/v1/projects/list}
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
 * @param {module:resource/project[]} callback.operations - Project objects from
 *     your account.
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * resource.getProjects().then(function(data) {
 *   var projects = data[0];
 * });
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
      var projectInstance = self.project(project.projectId);
      projectInstance.metadata = project;
      return projectInstance;
    });

    callback(null, projects, nextQuery, resp);
  });
};

/**
 * Get a list of {module:resource/project} objects as a readable object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:resource#getProjects} for a complete list of options.
 * @return {stream}
 *
 * @example
 * resource.getProjectsStream()
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
 * resource.getProjectsStream()
 *   .on('data', function(project) {
 *     this.end();
 *   });
 */
Resource.prototype.getProjectsStream =
  common.paginator.streamify('getProjects');

/*! Developer Documentation
 *
 * @returns {module:common/operation}
 */
/**
 * Get a reference to an existing operation.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the operation.
 *
 * @example
 * var operation = resource.operation('68850831366825');
 */
Resource.prototype.operation = function(name) {
  if (!name) {
    throw new Error('A name must be specified for an operation.');
  }

  return new common.Operation({
    parent: this,
    id: name
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
  id = id || this.projectId;

  if (!id) {
    throw new Error('A project ID is required.');
  }

  return new Project(this, id);
};

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
common.paginator.extend(Resource, ['getProjects']);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Resource, {
  exclude: [
    'operation',
    'project'
  ]
});

Resource.Project = Project;

module.exports = Resource;
