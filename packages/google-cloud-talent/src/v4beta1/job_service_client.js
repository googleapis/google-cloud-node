// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const gapicConfig = require('./job_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * A service handles job management, including job CRUD, enumeration and search.
 *
 * @class
 * @memberof v4beta1
 */
class JobServiceClient {
  /**
   * Construct an instance of JobServiceClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {function} [options.promise] - Custom promise module to use instead
   *     of native Promises.
   * @param {string} [options.servicePath] - The domain name of the
   *     API remote host.
   */
  constructor(opts) {
    this._descriptors = {};

    // Ensure that options include the service address and port.
    opts = Object.assign(
      {
        clientConfig: {},
        port: this.constructor.port,
        servicePath: this.constructor.servicePath,
      },
      opts
    );

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = this.constructor.scopes;
    const gaxGrpc = new gax.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    const clientHeader = [
      `gl-node/${process.version}`,
      `grpc/${gaxGrpc.grpcVersion}`,
      `gax/${gax.version}`,
      `gapic/${VERSION}`,
    ];
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    const protos = merge(
      {},
      gaxGrpc.loadProto(
        path.join(__dirname, '..', '..', 'protos'),
        'google/cloud/talent/v4beta1/job_service.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
      jobPathTemplate: new gax.PathTemplate('projects/{project}/jobs/{jobs}'),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listJobs: new gax.PageDescriptor('pageToken', 'nextPageToken', 'jobs'),
      searchJobs: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'matchingJobs'
      ),
      searchJobsForAlert: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'matchingJobs'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.talent.v4beta1.JobService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.talent.v4beta1.JobService.
    const jobServiceStub = gaxGrpc.createStub(
      protos.google.cloud.talent.v4beta1.JobService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const jobServiceStubMethods = [
      'createJob',
      'getJob',
      'updateJob',
      'deleteJob',
      'listJobs',
      'batchDeleteJobs',
      'searchJobs',
      'searchJobsForAlert',
    ];
    for (const methodName of jobServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        jobServiceStub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
            },
          err =>
            function() {
              throw err;
            }
        ),
        defaults[methodName],
        this._descriptors.page[methodName]
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'jobs.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/jobs',
    ];
  }

  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(callback) {
    return this.auth.getProjectId(callback);
  }

  // -------------------
  // -- Service calls --
  // -------------------

  /**
   * Creates a new job.
   *
   * Typically, the job becomes searchable within 10 seconds, but it may take
   * up to 5 minutes.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The resource name of the project under which the job is created.
   *
   *   The format is "projects/{project_id}", for example,
   *   "projects/api-test-project".
   * @param {Object} request.job
   *   Required.
   *
   *   The Job to be created.
   *
   *   This object should have the same structure as [Job]{@link google.cloud.talent.v4beta1.Job}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Job]{@link google.cloud.talent.v4beta1.Job}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Job]{@link google.cloud.talent.v4beta1.Job}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.JobServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const job = {};
   * const request = {
   *   parent: formattedParent,
   *   job: job,
   * };
   * client.createJob(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createJob(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createJob(request, options, callback);
  }

  /**
   * Retrieves the specified job, whose status is OPEN or recently EXPIRED
   * within the last 90 days.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The resource name of the job to retrieve.
   *
   *   The format is "projects/{project_id}/jobs/{job_id}",
   *   for example, "projects/api-test-project/jobs/1234".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Job]{@link google.cloud.talent.v4beta1.Job}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Job]{@link google.cloud.talent.v4beta1.Job}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.JobServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.jobPath('[PROJECT]', '[JOBS]');
   * client.getJob({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getJob(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getJob(request, options, callback);
  }

  /**
   * Updates specified job.
   *
   * Typically, updated contents become visible in search results within 10
   * seconds, but it may take up to 5 minutes.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.job
   *   Required.
   *
   *   The Job to be updated.
   *
   *   This object should have the same structure as [Job]{@link google.cloud.talent.v4beta1.Job}
   * @param {Object} [request.updateMask]
   *   Optional but strongly recommended to be provided for the best service
   *   experience.
   *
   *   If update_mask is provided, only the specified fields in
   *   job are updated. Otherwise all the fields are updated.
   *
   *   A field mask to restrict the fields that are updated. Only
   *   top level fields of Job are supported.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Job]{@link google.cloud.talent.v4beta1.Job}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Job]{@link google.cloud.talent.v4beta1.Job}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.JobServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const job = {};
   * client.updateJob({job: job})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateJob(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateJob(request, options, callback);
  }

  /**
   * Deletes the specified job.
   *
   * Typically, the job becomes unsearchable within 10 seconds, but it may take
   * up to 5 minutes.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The resource name of the job to be deleted.
   *
   *   The format is "projects/{project_id}/jobs/{job_id}",
   *   for example, "projects/api-test-project/jobs/1234".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.JobServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.jobPath('[PROJECT]', '[JOBS]');
   * client.deleteJob({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteJob(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteJob(request, options, callback);
  }

  /**
   * Lists jobs by filter.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The resource name of the project under which the job is created.
   *
   *   The format is "projects/{project_id}", for example,
   *   "projects/api-test-project".
   * @param {string} request.filter
   *   Required.
   *
   *   The filter string specifies the jobs to be enumerated.
   *
   *   Supported operator: =, AND
   *
   *   The fields eligible for filtering are:
   *
   *   * `companyName` (Required)
   *   * `requisitionId` (Optional)
   *   * `status` (Optional) Available values: OPEN, EXPIRED, ALL. Defaults to
   *   OPEN if no value is specified.
   *
   *   Sample Query:
   *
   *   * companyName = "projects/api-test-project/companies/123"
   *   * companyName = "projects/api-test-project/companies/123" AND requisitionId
   *   = "req-1"
   *   * companyName = "projects/api-test-project/companies/123" AND status =
   *   "EXPIRED"
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number} [request.jobView]
   *   Optional.
   *
   *   The desired job attributes returned for jobs in the
   *   search response. Defaults to JobView.JOB_VIEW_FULL if no value is
   *   specified.
   *
   *   The number should be among the values of [JobView]{@link google.cloud.talent.v4beta1.JobView}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Job]{@link google.cloud.talent.v4beta1.Job}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListJobsResponse]{@link google.cloud.talent.v4beta1.ListJobsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Job]{@link google.cloud.talent.v4beta1.Job}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Job]{@link google.cloud.talent.v4beta1.Job} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListJobsResponse]{@link google.cloud.talent.v4beta1.ListJobsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.JobServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   * const filter = '';
   * const request = {
   *   parent: formattedParent,
   *   filter: filter,
   * };
   *
   * client.listJobs(request)
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resource)
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.projectPath('[PROJECT]');
   * const filter = '';
   * const request = {
   *   parent: formattedParent,
   *   filter: filter,
   * };
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (const resource of resources) {
   *     // doThingsWith(resource);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listJobs(nextRequest, options).then(callback);
   *   }
   * }
   * client.listJobs(request, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listJobs(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listJobs(request, options, callback);
  }

  /**
   * Equivalent to {@link listJobs}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listJobs} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The resource name of the project under which the job is created.
   *
   *   The format is "projects/{project_id}", for example,
   *   "projects/api-test-project".
   * @param {string} request.filter
   *   Required.
   *
   *   The filter string specifies the jobs to be enumerated.
   *
   *   Supported operator: =, AND
   *
   *   The fields eligible for filtering are:
   *
   *   * `companyName` (Required)
   *   * `requisitionId` (Optional)
   *   * `status` (Optional) Available values: OPEN, EXPIRED, ALL. Defaults to
   *   OPEN if no value is specified.
   *
   *   Sample Query:
   *
   *   * companyName = "projects/api-test-project/companies/123"
   *   * companyName = "projects/api-test-project/companies/123" AND requisitionId
   *   = "req-1"
   *   * companyName = "projects/api-test-project/companies/123" AND status =
   *   "EXPIRED"
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number} [request.jobView]
   *   Optional.
   *
   *   The desired job attributes returned for jobs in the
   *   search response. Defaults to JobView.JOB_VIEW_FULL if no value is
   *   specified.
   *
   *   The number should be among the values of [JobView]{@link google.cloud.talent.v4beta1.JobView}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Job]{@link google.cloud.talent.v4beta1.Job} on 'data' event.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.JobServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const filter = '';
   * const request = {
   *   parent: formattedParent,
   *   filter: filter,
   * };
   * client.listJobsStream(request)
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listJobsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listJobs.createStream(
      this._innerApiCalls.listJobs,
      request,
      options
    );
  }

  /**
   * Deletes a list of Jobs by filter.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The resource name of the project under which the job is created.
   *
   *   The format is "projects/{project_id}", for example,
   *   "projects/api-test-project".
   * @param {string} request.filter
   *   Required.
   *
   *   The filter string specifies the jobs to be deleted.
   *
   *   Supported operator: =, AND
   *
   *   The fields eligible for filtering are:
   *
   *   * `companyName` (Required)
   *   * `requisitionId` (Required)
   *
   *   Sample Query: companyName = "projects/api-test-project/companies/123" AND
   *   requisitionId = "req-1"
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.JobServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const filter = '';
   * const request = {
   *   parent: formattedParent,
   *   filter: filter,
   * };
   * client.batchDeleteJobs(request).catch(err => {
   *   console.error(err);
   * });
   */
  batchDeleteJobs(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.batchDeleteJobs(request, options, callback);
  }

  /**
   * Searches for jobs using the provided SearchJobsRequest.
   *
   * This call constrains the visibility of jobs
   * present in the database, and only returns jobs that the caller has
   * permission to search against.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The resource name of the project to search within.
   *
   *   The format is "projects/{project_id}", for example,
   *   "projects/api-test-project".
   * @param {Object} request.requestMetadata
   *   Required.
   *
   *   The meta information collected about the job searcher, used to improve the
   *   search quality of the service.. The identifiers, (such as `user_id`) are
   *   provided by users, and must be unique and consistent.
   *
   *   This object should have the same structure as [RequestMetadata]{@link google.cloud.talent.v4beta1.RequestMetadata}
   * @param {number} [request.searchMode]
   *   Optional.
   *
   *   Mode of a search.
   *
   *   Defaults to SearchMode.JOB_SEARCH.
   *
   *   The number should be among the values of [SearchMode]{@link google.cloud.talent.v4beta1.SearchMode}
   * @param {Object} [request.jobQuery]
   *   Optional.
   *
   *   Query used to search against jobs, such as keyword, location filters, etc.
   *
   *   This object should have the same structure as [JobQuery]{@link google.cloud.talent.v4beta1.JobQuery}
   * @param {boolean} [request.enableBroadening]
   *   Optional.
   *
   *   Controls whether to broaden the search when it produces sparse results.
   *   Broadened queries append results to the end of the matching results
   *   list.
   *
   *   Defaults to false.
   * @param {boolean} [request.requirePreciseResultSize]
   *   Optional.
   *
   *   Controls if the search job request requires the return of a precise
   *   count of the first 300 results. Setting this to `true` ensures
   *   consistency in the number of results per page. Best practice is to set this
   *   value to true if a client allows users to jump directly to a
   *   non-sequential search results page.
   *
   *   Enabling this flag may adversely impact performance.
   *
   *   Defaults to false.
   * @param {Object[]} [request.histogramQueries]
   *   Optional.
   *
   *   An expression specifies a histogram request against matching jobs.
   *
   *   Expression syntax is an aggregation function call with histogram facets and
   *   other options.
   *
   *   Available aggregation function calls are:
   *   * `count(string_histogram_facet)`: Count the number of matching entities,
   *   for each distinct attribute value.
   *   * `count(numeric_histogram_facet, list of buckets)`: Count the number of
   *   matching entities within each bucket.
   *
   *   Data types:
   *
   *   * Histogram facet: facet names with format [a-zA-Z][a-zA-Z0-9_]+.
   *   * String: string like "any string with backslash escape for quote(\")."
   *   * Number: whole number and floating point number like 10, -1 and -0.01.
   *   * List: list of elements with comma(,) separator surrounded by square
   *   brackets, for example, [1, 2, 3] and ["one", "two", "three"].
   *
   *   Built-in constants:
   *
   *   * MIN (minimum number similar to java Double.MIN_VALUE)
   *   * MAX (maximum number similar to java Double.MAX_VALUE)
   *
   *   Built-in functions:
   *
   *   * bucket(start, end[, label]): bucket built-in function creates a bucket
   *   with range of start, end). Note that the end is exclusive, for example,
   *   bucket(1, MAX, "positive number") or bucket(1, 10).
   *
   *   Job histogram facets:
   *
   *   * company_id: histogram by [Job.distributor_company_id.
   *   * company_display_name: histogram by Job.company_display_name.
   *   * employment_type: histogram by Job.employment_types, for example,
   *   "FULL_TIME", "PART_TIME".
   *   * company_size: histogram by CompanySize, for example, "SMALL",
   *   "MEDIUM", "BIG".
   *   * publish_time_in_month: histogram by the Job.publish_time in months.
   *   Must specify list of numeric buckets in spec.
   *   * publish_time_in_year: histogram by the Job.publish_time in years.
   *   Must specify list of numeric buckets in spec.
   *   * degree_type: histogram by the Job.degree_type, for example,
   *   "Bachelors", "Masters".
   *   * job_level: histogram by the Job.job_level, for example, "Entry
   *   Level".
   *   * country: histogram by the country code of jobs, for example, "US", "FR".
   *   * admin1: histogram by the admin1 code of jobs, which is a global
   *   placeholder referring to the state, province, or the particular term a
   *   country uses to define the geographic structure below the country level,
   *   for example, "CA", "IL".
   *   * city: histogram by a combination of the "city name, admin1 code". For
   *   example,  "Mountain View, CA", "New York, NY".
   *   * admin1_country: histogram by a combination of the "admin1 code, country",
   *   for example, "CA, US", "IL, US".
   *   * city_coordinate: histogram by the city center's GPS coordinates (latitude
   *   and longitude), for example, 37.4038522,-122.0987765. Since the coordinates
   *   of a city center can change, customers may need to refresh them
   *   periodically.
   *   * locale: histogram by the Job.language_code, for example, "en-US",
   *   "fr-FR".
   *   * language: histogram by the language subtag of the Job.language_code,
   *   for example, "en", "fr".
   *   * category: histogram by the JobCategory, for example,
   *   "COMPUTER_AND_IT", "HEALTHCARE".
   *   * base_compensation_unit: histogram by the CompensationUnit of base
   *   salary, for example, "WEEKLY", "MONTHLY".
   *   * base_compensation: histogram by the base salary. Must specify list of
   *   numeric buckets to group results by.
   *   * annualized_base_compensation: histogram by the base annualized salary.
   *   Must specify list of numeric buckets to group results by.
   *   * annualized_total_compensation: histogram by the total annualized salary.
   *   Must specify list of numeric buckets to group results by.
   *   * string_custom_attribute: histogram by string Job.custom_attributes.
   *   Values can be accessed via square bracket notations like
   *   string_custom_attribute["key1"].
   *   * numeric_custom_attribute: histogram by numeric Job.custom_attributes.
   *   Values can be accessed via square bracket notations like
   *   numeric_custom_attribute["key1"]. Must specify list of numeric buckets to
   *   group results by.
   *
   *   Example expressions:
   *   * count(admin1)
   *   * count(base_compensation, [bucket(1000, 10000), bucket(10000, 100000),
   *   bucket(100000, MAX)])
   *   * count(string_custom_attribute["some-string-custom-attribute"])
   *   * count(numeric_custom_attribute["some-numeric-custom-attribute"],
   *   [bucket(MIN, 0, "negative"), bucket(0, MAX, "non-negative"])
   *
   *   This object should have the same structure as [HistogramQuery]{@link google.cloud.talent.v4beta1.HistogramQuery}
   * @param {number} [request.jobView]
   *   Optional.
   *
   *   The desired job attributes returned for jobs in the
   *   search response. Defaults to JobView.SMALL if no value is specified.
   *
   *   The number should be among the values of [JobView]{@link google.cloud.talent.v4beta1.JobView}
   * @param {number} [request.offset]
   *   Optional.
   *
   *   An integer that specifies the current offset (that is, starting result
   *   location, amongst the jobs deemed by the API as relevant) in search
   *   results. This field is only considered if page_token is unset.
   *
   *   For example, 0 means to  return results starting from the first matching
   *   job, and 10 means to return from the 11th job. This can be used for
   *   pagination, (for example, pageSize = 10 and offset = 10 means to return
   *   from the second page).
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.orderBy]
   *   Optional.
   *
   *   The criteria determining how search results are sorted. Default is
   *   "relevance desc".
   *
   *   Supported options are:
   *
   *   * "relevance desc": By relevance descending, as determined by the API
   *   algorithms. Relevance thresholding of query results is only available
   *   with this ordering.
   *   * "posting`_`publish`_`time desc": By Job.posting_publish_time
   *   descending.
   *   * "posting`_`update`_`time desc": By Job.posting_update_time
   *   descending.
   *   * "title": By Job.title ascending.
   *   * "title desc": By Job.title descending.
   *   * "annualized`_`base`_`compensation": By job's
   *   CompensationInfo.annualized_base_compensation_range ascending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "annualized`_`base`_`compensation desc": By job's
   *   CompensationInfo.annualized_base_compensation_range descending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "annualized`_`total`_`compensation": By job's
   *   CompensationInfo.annualized_total_compensation_range ascending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "annualized`_`total`_`compensation desc": By job's
   *   CompensationInfo.annualized_total_compensation_range descending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "custom`_`ranking desc": By the relevance score adjusted to the
   *   SearchJobsRequest.custom_ranking_info.ranking_expression with weight
   *   factor assigned by
   *   SearchJobsRequest.custom_ranking_info.importance_level in descending
   *   order.
   *   * "location`_`distance": By the distance between the location on jobs and
   *    locations specified in the
   *   SearchJobsRequest.job_query.location_filters.
   *   When this order is selected, the
   *   SearchJobsRequest.job_query.location_filters must not be empty. When
   *   a job has multiple locations, the location closest to one of the locations
   *   specified in the location filter will be used to calculate location
   *   distance. Distance is calculated by the distance between two lat/long
   *   coordinates, with a precision of 10e-4 degrees (11.3 meters).
   *   Jobs that don't have locations specified will be ranked below jobs having
   *   locations.
   *   Diversification strategy is still applied unless explicitly disabled in
   *   SearchJobsRequest.diversification_level.
   * @param {number} [request.diversificationLevel]
   *   Optional.
   *
   *   Controls whether highly similar jobs are returned next to each other in
   *   the search results. Jobs are identified as highly similar based on
   *   their titles, job categories, and locations. Highly similar results are
   *   clustered so that only one representative job of the cluster is
   *   displayed to the job seeker higher up in the results, with the other jobs
   *   being displayed lower down in the results.
   *
   *   Defaults to DiversificationLevel.SIMPLE if no value
   *   is specified.
   *
   *   The number should be among the values of [DiversificationLevel]{@link google.cloud.talent.v4beta1.DiversificationLevel}
   * @param {Object} [request.customRankingInfo]
   *   Optional.
   *
   *   Controls over how job documents get ranked on top of existing relevance
   *   score (determined by API algorithm).
   *
   *   This object should have the same structure as [CustomRankingInfo]{@link google.cloud.talent.v4beta1.CustomRankingInfo}
   * @param {boolean} [request.disableKeywordMatch]
   *   Optional.
   *
   *   Controls whether to disable exact keyword match on Job.job_title,
   *   Job.description, Job.company_display_name, [Job.locations][0],
   *   Job.qualifications. When disable keyword match is turned off, a
   *   keyword match returns jobs that do not match given category filters when
   *   there are matching keywords. For example, for the query "program manager,"
   *   a result is returned even if the job posting has the title "software
   *   developer," which doesn't fall into "program manager" ontology, but does
   *   have "program manager" appearing in its description.
   *
   *   For queries like "cloud" that don't contain title or
   *   location specific ontology, jobs with "cloud" keyword matches are returned
   *   regardless of this flag's value.
   *
   *   Please use Company.keyword_searchable_custom_fields or
   *   Company.keyword_searchable_custom_attributes if company specific
   *   globally matched custom field/attribute string values is needed. Enabling
   *   keyword match improves recall of subsequent search requests.
   *
   *   Defaults to false.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [MatchingJob]{@link google.cloud.talent.v4beta1.MatchingJob}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [SearchJobsResponse]{@link google.cloud.talent.v4beta1.SearchJobsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [MatchingJob]{@link google.cloud.talent.v4beta1.MatchingJob}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [MatchingJob]{@link google.cloud.talent.v4beta1.MatchingJob} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [SearchJobsResponse]{@link google.cloud.talent.v4beta1.SearchJobsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.JobServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   * const requestMetadata = {};
   * const request = {
   *   parent: formattedParent,
   *   requestMetadata: requestMetadata,
   * };
   *
   * client.searchJobs(request)
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resource)
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.projectPath('[PROJECT]');
   * const requestMetadata = {};
   * const request = {
   *   parent: formattedParent,
   *   requestMetadata: requestMetadata,
   * };
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (const resource of resources) {
   *     // doThingsWith(resource);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.searchJobs(nextRequest, options).then(callback);
   *   }
   * }
   * client.searchJobs(request, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  searchJobs(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.searchJobs(request, options, callback);
  }

  /**
   * Equivalent to {@link searchJobs}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link searchJobs} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The resource name of the project to search within.
   *
   *   The format is "projects/{project_id}", for example,
   *   "projects/api-test-project".
   * @param {Object} request.requestMetadata
   *   Required.
   *
   *   The meta information collected about the job searcher, used to improve the
   *   search quality of the service.. The identifiers, (such as `user_id`) are
   *   provided by users, and must be unique and consistent.
   *
   *   This object should have the same structure as [RequestMetadata]{@link google.cloud.talent.v4beta1.RequestMetadata}
   * @param {number} [request.searchMode]
   *   Optional.
   *
   *   Mode of a search.
   *
   *   Defaults to SearchMode.JOB_SEARCH.
   *
   *   The number should be among the values of [SearchMode]{@link google.cloud.talent.v4beta1.SearchMode}
   * @param {Object} [request.jobQuery]
   *   Optional.
   *
   *   Query used to search against jobs, such as keyword, location filters, etc.
   *
   *   This object should have the same structure as [JobQuery]{@link google.cloud.talent.v4beta1.JobQuery}
   * @param {boolean} [request.enableBroadening]
   *   Optional.
   *
   *   Controls whether to broaden the search when it produces sparse results.
   *   Broadened queries append results to the end of the matching results
   *   list.
   *
   *   Defaults to false.
   * @param {boolean} [request.requirePreciseResultSize]
   *   Optional.
   *
   *   Controls if the search job request requires the return of a precise
   *   count of the first 300 results. Setting this to `true` ensures
   *   consistency in the number of results per page. Best practice is to set this
   *   value to true if a client allows users to jump directly to a
   *   non-sequential search results page.
   *
   *   Enabling this flag may adversely impact performance.
   *
   *   Defaults to false.
   * @param {Object[]} [request.histogramQueries]
   *   Optional.
   *
   *   An expression specifies a histogram request against matching jobs.
   *
   *   Expression syntax is an aggregation function call with histogram facets and
   *   other options.
   *
   *   Available aggregation function calls are:
   *   * `count(string_histogram_facet)`: Count the number of matching entities,
   *   for each distinct attribute value.
   *   * `count(numeric_histogram_facet, list of buckets)`: Count the number of
   *   matching entities within each bucket.
   *
   *   Data types:
   *
   *   * Histogram facet: facet names with format [a-zA-Z][a-zA-Z0-9_]+.
   *   * String: string like "any string with backslash escape for quote(\")."
   *   * Number: whole number and floating point number like 10, -1 and -0.01.
   *   * List: list of elements with comma(,) separator surrounded by square
   *   brackets, for example, [1, 2, 3] and ["one", "two", "three"].
   *
   *   Built-in constants:
   *
   *   * MIN (minimum number similar to java Double.MIN_VALUE)
   *   * MAX (maximum number similar to java Double.MAX_VALUE)
   *
   *   Built-in functions:
   *
   *   * bucket(start, end[, label]): bucket built-in function creates a bucket
   *   with range of start, end). Note that the end is exclusive, for example,
   *   bucket(1, MAX, "positive number") or bucket(1, 10).
   *
   *   Job histogram facets:
   *
   *   * company_id: histogram by [Job.distributor_company_id.
   *   * company_display_name: histogram by Job.company_display_name.
   *   * employment_type: histogram by Job.employment_types, for example,
   *   "FULL_TIME", "PART_TIME".
   *   * company_size: histogram by CompanySize, for example, "SMALL",
   *   "MEDIUM", "BIG".
   *   * publish_time_in_month: histogram by the Job.publish_time in months.
   *   Must specify list of numeric buckets in spec.
   *   * publish_time_in_year: histogram by the Job.publish_time in years.
   *   Must specify list of numeric buckets in spec.
   *   * degree_type: histogram by the Job.degree_type, for example,
   *   "Bachelors", "Masters".
   *   * job_level: histogram by the Job.job_level, for example, "Entry
   *   Level".
   *   * country: histogram by the country code of jobs, for example, "US", "FR".
   *   * admin1: histogram by the admin1 code of jobs, which is a global
   *   placeholder referring to the state, province, or the particular term a
   *   country uses to define the geographic structure below the country level,
   *   for example, "CA", "IL".
   *   * city: histogram by a combination of the "city name, admin1 code". For
   *   example,  "Mountain View, CA", "New York, NY".
   *   * admin1_country: histogram by a combination of the "admin1 code, country",
   *   for example, "CA, US", "IL, US".
   *   * city_coordinate: histogram by the city center's GPS coordinates (latitude
   *   and longitude), for example, 37.4038522,-122.0987765. Since the coordinates
   *   of a city center can change, customers may need to refresh them
   *   periodically.
   *   * locale: histogram by the Job.language_code, for example, "en-US",
   *   "fr-FR".
   *   * language: histogram by the language subtag of the Job.language_code,
   *   for example, "en", "fr".
   *   * category: histogram by the JobCategory, for example,
   *   "COMPUTER_AND_IT", "HEALTHCARE".
   *   * base_compensation_unit: histogram by the CompensationUnit of base
   *   salary, for example, "WEEKLY", "MONTHLY".
   *   * base_compensation: histogram by the base salary. Must specify list of
   *   numeric buckets to group results by.
   *   * annualized_base_compensation: histogram by the base annualized salary.
   *   Must specify list of numeric buckets to group results by.
   *   * annualized_total_compensation: histogram by the total annualized salary.
   *   Must specify list of numeric buckets to group results by.
   *   * string_custom_attribute: histogram by string Job.custom_attributes.
   *   Values can be accessed via square bracket notations like
   *   string_custom_attribute["key1"].
   *   * numeric_custom_attribute: histogram by numeric Job.custom_attributes.
   *   Values can be accessed via square bracket notations like
   *   numeric_custom_attribute["key1"]. Must specify list of numeric buckets to
   *   group results by.
   *
   *   Example expressions:
   *   * count(admin1)
   *   * count(base_compensation, [bucket(1000, 10000), bucket(10000, 100000),
   *   bucket(100000, MAX)])
   *   * count(string_custom_attribute["some-string-custom-attribute"])
   *   * count(numeric_custom_attribute["some-numeric-custom-attribute"],
   *   [bucket(MIN, 0, "negative"), bucket(0, MAX, "non-negative"])
   *
   *   This object should have the same structure as [HistogramQuery]{@link google.cloud.talent.v4beta1.HistogramQuery}
   * @param {number} [request.jobView]
   *   Optional.
   *
   *   The desired job attributes returned for jobs in the
   *   search response. Defaults to JobView.SMALL if no value is specified.
   *
   *   The number should be among the values of [JobView]{@link google.cloud.talent.v4beta1.JobView}
   * @param {number} [request.offset]
   *   Optional.
   *
   *   An integer that specifies the current offset (that is, starting result
   *   location, amongst the jobs deemed by the API as relevant) in search
   *   results. This field is only considered if page_token is unset.
   *
   *   For example, 0 means to  return results starting from the first matching
   *   job, and 10 means to return from the 11th job. This can be used for
   *   pagination, (for example, pageSize = 10 and offset = 10 means to return
   *   from the second page).
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.orderBy]
   *   Optional.
   *
   *   The criteria determining how search results are sorted. Default is
   *   "relevance desc".
   *
   *   Supported options are:
   *
   *   * "relevance desc": By relevance descending, as determined by the API
   *   algorithms. Relevance thresholding of query results is only available
   *   with this ordering.
   *   * "posting`_`publish`_`time desc": By Job.posting_publish_time
   *   descending.
   *   * "posting`_`update`_`time desc": By Job.posting_update_time
   *   descending.
   *   * "title": By Job.title ascending.
   *   * "title desc": By Job.title descending.
   *   * "annualized`_`base`_`compensation": By job's
   *   CompensationInfo.annualized_base_compensation_range ascending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "annualized`_`base`_`compensation desc": By job's
   *   CompensationInfo.annualized_base_compensation_range descending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "annualized`_`total`_`compensation": By job's
   *   CompensationInfo.annualized_total_compensation_range ascending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "annualized`_`total`_`compensation desc": By job's
   *   CompensationInfo.annualized_total_compensation_range descending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "custom`_`ranking desc": By the relevance score adjusted to the
   *   SearchJobsRequest.custom_ranking_info.ranking_expression with weight
   *   factor assigned by
   *   SearchJobsRequest.custom_ranking_info.importance_level in descending
   *   order.
   *   * "location`_`distance": By the distance between the location on jobs and
   *    locations specified in the
   *   SearchJobsRequest.job_query.location_filters.
   *   When this order is selected, the
   *   SearchJobsRequest.job_query.location_filters must not be empty. When
   *   a job has multiple locations, the location closest to one of the locations
   *   specified in the location filter will be used to calculate location
   *   distance. Distance is calculated by the distance between two lat/long
   *   coordinates, with a precision of 10e-4 degrees (11.3 meters).
   *   Jobs that don't have locations specified will be ranked below jobs having
   *   locations.
   *   Diversification strategy is still applied unless explicitly disabled in
   *   SearchJobsRequest.diversification_level.
   * @param {number} [request.diversificationLevel]
   *   Optional.
   *
   *   Controls whether highly similar jobs are returned next to each other in
   *   the search results. Jobs are identified as highly similar based on
   *   their titles, job categories, and locations. Highly similar results are
   *   clustered so that only one representative job of the cluster is
   *   displayed to the job seeker higher up in the results, with the other jobs
   *   being displayed lower down in the results.
   *
   *   Defaults to DiversificationLevel.SIMPLE if no value
   *   is specified.
   *
   *   The number should be among the values of [DiversificationLevel]{@link google.cloud.talent.v4beta1.DiversificationLevel}
   * @param {Object} [request.customRankingInfo]
   *   Optional.
   *
   *   Controls over how job documents get ranked on top of existing relevance
   *   score (determined by API algorithm).
   *
   *   This object should have the same structure as [CustomRankingInfo]{@link google.cloud.talent.v4beta1.CustomRankingInfo}
   * @param {boolean} [request.disableKeywordMatch]
   *   Optional.
   *
   *   Controls whether to disable exact keyword match on Job.job_title,
   *   Job.description, Job.company_display_name, [Job.locations][0],
   *   Job.qualifications. When disable keyword match is turned off, a
   *   keyword match returns jobs that do not match given category filters when
   *   there are matching keywords. For example, for the query "program manager,"
   *   a result is returned even if the job posting has the title "software
   *   developer," which doesn't fall into "program manager" ontology, but does
   *   have "program manager" appearing in its description.
   *
   *   For queries like "cloud" that don't contain title or
   *   location specific ontology, jobs with "cloud" keyword matches are returned
   *   regardless of this flag's value.
   *
   *   Please use Company.keyword_searchable_custom_fields or
   *   Company.keyword_searchable_custom_attributes if company specific
   *   globally matched custom field/attribute string values is needed. Enabling
   *   keyword match improves recall of subsequent search requests.
   *
   *   Defaults to false.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [MatchingJob]{@link google.cloud.talent.v4beta1.MatchingJob} on 'data' event.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.JobServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const requestMetadata = {};
   * const request = {
   *   parent: formattedParent,
   *   requestMetadata: requestMetadata,
   * };
   * client.searchJobsStream(request)
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  searchJobsStream(request, options) {
    options = options || {};

    return this._descriptors.page.searchJobs.createStream(
      this._innerApiCalls.searchJobs,
      request,
      options
    );
  }

  /**
   * Searches for jobs using the provided SearchJobsRequest.
   *
   * This API call is intended for the use case of targeting passive job
   * seekers (for example, job seekers who have signed up to receive email
   * alerts about potential job opportunities), and has different algorithmic
   * adjustments that are targeted to passive job seekers.
   *
   * This call constrains the visibility of jobs
   * present in the database, and only returns jobs the caller has
   * permission to search against.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The resource name of the project to search within.
   *
   *   The format is "projects/{project_id}", for example,
   *   "projects/api-test-project".
   * @param {Object} request.requestMetadata
   *   Required.
   *
   *   The meta information collected about the job searcher, used to improve the
   *   search quality of the service.. The identifiers, (such as `user_id`) are
   *   provided by users, and must be unique and consistent.
   *
   *   This object should have the same structure as [RequestMetadata]{@link google.cloud.talent.v4beta1.RequestMetadata}
   * @param {number} [request.searchMode]
   *   Optional.
   *
   *   Mode of a search.
   *
   *   Defaults to SearchMode.JOB_SEARCH.
   *
   *   The number should be among the values of [SearchMode]{@link google.cloud.talent.v4beta1.SearchMode}
   * @param {Object} [request.jobQuery]
   *   Optional.
   *
   *   Query used to search against jobs, such as keyword, location filters, etc.
   *
   *   This object should have the same structure as [JobQuery]{@link google.cloud.talent.v4beta1.JobQuery}
   * @param {boolean} [request.enableBroadening]
   *   Optional.
   *
   *   Controls whether to broaden the search when it produces sparse results.
   *   Broadened queries append results to the end of the matching results
   *   list.
   *
   *   Defaults to false.
   * @param {boolean} [request.requirePreciseResultSize]
   *   Optional.
   *
   *   Controls if the search job request requires the return of a precise
   *   count of the first 300 results. Setting this to `true` ensures
   *   consistency in the number of results per page. Best practice is to set this
   *   value to true if a client allows users to jump directly to a
   *   non-sequential search results page.
   *
   *   Enabling this flag may adversely impact performance.
   *
   *   Defaults to false.
   * @param {Object[]} [request.histogramQueries]
   *   Optional.
   *
   *   An expression specifies a histogram request against matching jobs.
   *
   *   Expression syntax is an aggregation function call with histogram facets and
   *   other options.
   *
   *   Available aggregation function calls are:
   *   * `count(string_histogram_facet)`: Count the number of matching entities,
   *   for each distinct attribute value.
   *   * `count(numeric_histogram_facet, list of buckets)`: Count the number of
   *   matching entities within each bucket.
   *
   *   Data types:
   *
   *   * Histogram facet: facet names with format [a-zA-Z][a-zA-Z0-9_]+.
   *   * String: string like "any string with backslash escape for quote(\")."
   *   * Number: whole number and floating point number like 10, -1 and -0.01.
   *   * List: list of elements with comma(,) separator surrounded by square
   *   brackets, for example, [1, 2, 3] and ["one", "two", "three"].
   *
   *   Built-in constants:
   *
   *   * MIN (minimum number similar to java Double.MIN_VALUE)
   *   * MAX (maximum number similar to java Double.MAX_VALUE)
   *
   *   Built-in functions:
   *
   *   * bucket(start, end[, label]): bucket built-in function creates a bucket
   *   with range of start, end). Note that the end is exclusive, for example,
   *   bucket(1, MAX, "positive number") or bucket(1, 10).
   *
   *   Job histogram facets:
   *
   *   * company_id: histogram by [Job.distributor_company_id.
   *   * company_display_name: histogram by Job.company_display_name.
   *   * employment_type: histogram by Job.employment_types, for example,
   *   "FULL_TIME", "PART_TIME".
   *   * company_size: histogram by CompanySize, for example, "SMALL",
   *   "MEDIUM", "BIG".
   *   * publish_time_in_month: histogram by the Job.publish_time in months.
   *   Must specify list of numeric buckets in spec.
   *   * publish_time_in_year: histogram by the Job.publish_time in years.
   *   Must specify list of numeric buckets in spec.
   *   * degree_type: histogram by the Job.degree_type, for example,
   *   "Bachelors", "Masters".
   *   * job_level: histogram by the Job.job_level, for example, "Entry
   *   Level".
   *   * country: histogram by the country code of jobs, for example, "US", "FR".
   *   * admin1: histogram by the admin1 code of jobs, which is a global
   *   placeholder referring to the state, province, or the particular term a
   *   country uses to define the geographic structure below the country level,
   *   for example, "CA", "IL".
   *   * city: histogram by a combination of the "city name, admin1 code". For
   *   example,  "Mountain View, CA", "New York, NY".
   *   * admin1_country: histogram by a combination of the "admin1 code, country",
   *   for example, "CA, US", "IL, US".
   *   * city_coordinate: histogram by the city center's GPS coordinates (latitude
   *   and longitude), for example, 37.4038522,-122.0987765. Since the coordinates
   *   of a city center can change, customers may need to refresh them
   *   periodically.
   *   * locale: histogram by the Job.language_code, for example, "en-US",
   *   "fr-FR".
   *   * language: histogram by the language subtag of the Job.language_code,
   *   for example, "en", "fr".
   *   * category: histogram by the JobCategory, for example,
   *   "COMPUTER_AND_IT", "HEALTHCARE".
   *   * base_compensation_unit: histogram by the CompensationUnit of base
   *   salary, for example, "WEEKLY", "MONTHLY".
   *   * base_compensation: histogram by the base salary. Must specify list of
   *   numeric buckets to group results by.
   *   * annualized_base_compensation: histogram by the base annualized salary.
   *   Must specify list of numeric buckets to group results by.
   *   * annualized_total_compensation: histogram by the total annualized salary.
   *   Must specify list of numeric buckets to group results by.
   *   * string_custom_attribute: histogram by string Job.custom_attributes.
   *   Values can be accessed via square bracket notations like
   *   string_custom_attribute["key1"].
   *   * numeric_custom_attribute: histogram by numeric Job.custom_attributes.
   *   Values can be accessed via square bracket notations like
   *   numeric_custom_attribute["key1"]. Must specify list of numeric buckets to
   *   group results by.
   *
   *   Example expressions:
   *   * count(admin1)
   *   * count(base_compensation, [bucket(1000, 10000), bucket(10000, 100000),
   *   bucket(100000, MAX)])
   *   * count(string_custom_attribute["some-string-custom-attribute"])
   *   * count(numeric_custom_attribute["some-numeric-custom-attribute"],
   *   [bucket(MIN, 0, "negative"), bucket(0, MAX, "non-negative"])
   *
   *   This object should have the same structure as [HistogramQuery]{@link google.cloud.talent.v4beta1.HistogramQuery}
   * @param {number} [request.jobView]
   *   Optional.
   *
   *   The desired job attributes returned for jobs in the
   *   search response. Defaults to JobView.SMALL if no value is specified.
   *
   *   The number should be among the values of [JobView]{@link google.cloud.talent.v4beta1.JobView}
   * @param {number} [request.offset]
   *   Optional.
   *
   *   An integer that specifies the current offset (that is, starting result
   *   location, amongst the jobs deemed by the API as relevant) in search
   *   results. This field is only considered if page_token is unset.
   *
   *   For example, 0 means to  return results starting from the first matching
   *   job, and 10 means to return from the 11th job. This can be used for
   *   pagination, (for example, pageSize = 10 and offset = 10 means to return
   *   from the second page).
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.orderBy]
   *   Optional.
   *
   *   The criteria determining how search results are sorted. Default is
   *   "relevance desc".
   *
   *   Supported options are:
   *
   *   * "relevance desc": By relevance descending, as determined by the API
   *   algorithms. Relevance thresholding of query results is only available
   *   with this ordering.
   *   * "posting`_`publish`_`time desc": By Job.posting_publish_time
   *   descending.
   *   * "posting`_`update`_`time desc": By Job.posting_update_time
   *   descending.
   *   * "title": By Job.title ascending.
   *   * "title desc": By Job.title descending.
   *   * "annualized`_`base`_`compensation": By job's
   *   CompensationInfo.annualized_base_compensation_range ascending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "annualized`_`base`_`compensation desc": By job's
   *   CompensationInfo.annualized_base_compensation_range descending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "annualized`_`total`_`compensation": By job's
   *   CompensationInfo.annualized_total_compensation_range ascending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "annualized`_`total`_`compensation desc": By job's
   *   CompensationInfo.annualized_total_compensation_range descending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "custom`_`ranking desc": By the relevance score adjusted to the
   *   SearchJobsRequest.custom_ranking_info.ranking_expression with weight
   *   factor assigned by
   *   SearchJobsRequest.custom_ranking_info.importance_level in descending
   *   order.
   *   * "location`_`distance": By the distance between the location on jobs and
   *    locations specified in the
   *   SearchJobsRequest.job_query.location_filters.
   *   When this order is selected, the
   *   SearchJobsRequest.job_query.location_filters must not be empty. When
   *   a job has multiple locations, the location closest to one of the locations
   *   specified in the location filter will be used to calculate location
   *   distance. Distance is calculated by the distance between two lat/long
   *   coordinates, with a precision of 10e-4 degrees (11.3 meters).
   *   Jobs that don't have locations specified will be ranked below jobs having
   *   locations.
   *   Diversification strategy is still applied unless explicitly disabled in
   *   SearchJobsRequest.diversification_level.
   * @param {number} [request.diversificationLevel]
   *   Optional.
   *
   *   Controls whether highly similar jobs are returned next to each other in
   *   the search results. Jobs are identified as highly similar based on
   *   their titles, job categories, and locations. Highly similar results are
   *   clustered so that only one representative job of the cluster is
   *   displayed to the job seeker higher up in the results, with the other jobs
   *   being displayed lower down in the results.
   *
   *   Defaults to DiversificationLevel.SIMPLE if no value
   *   is specified.
   *
   *   The number should be among the values of [DiversificationLevel]{@link google.cloud.talent.v4beta1.DiversificationLevel}
   * @param {Object} [request.customRankingInfo]
   *   Optional.
   *
   *   Controls over how job documents get ranked on top of existing relevance
   *   score (determined by API algorithm).
   *
   *   This object should have the same structure as [CustomRankingInfo]{@link google.cloud.talent.v4beta1.CustomRankingInfo}
   * @param {boolean} [request.disableKeywordMatch]
   *   Optional.
   *
   *   Controls whether to disable exact keyword match on Job.job_title,
   *   Job.description, Job.company_display_name, [Job.locations][0],
   *   Job.qualifications. When disable keyword match is turned off, a
   *   keyword match returns jobs that do not match given category filters when
   *   there are matching keywords. For example, for the query "program manager,"
   *   a result is returned even if the job posting has the title "software
   *   developer," which doesn't fall into "program manager" ontology, but does
   *   have "program manager" appearing in its description.
   *
   *   For queries like "cloud" that don't contain title or
   *   location specific ontology, jobs with "cloud" keyword matches are returned
   *   regardless of this flag's value.
   *
   *   Please use Company.keyword_searchable_custom_fields or
   *   Company.keyword_searchable_custom_attributes if company specific
   *   globally matched custom field/attribute string values is needed. Enabling
   *   keyword match improves recall of subsequent search requests.
   *
   *   Defaults to false.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [MatchingJob]{@link google.cloud.talent.v4beta1.MatchingJob}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [SearchJobsResponse]{@link google.cloud.talent.v4beta1.SearchJobsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [MatchingJob]{@link google.cloud.talent.v4beta1.MatchingJob}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [MatchingJob]{@link google.cloud.talent.v4beta1.MatchingJob} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [SearchJobsResponse]{@link google.cloud.talent.v4beta1.SearchJobsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.JobServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   * const requestMetadata = {};
   * const request = {
   *   parent: formattedParent,
   *   requestMetadata: requestMetadata,
   * };
   *
   * client.searchJobsForAlert(request)
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (const resource of resources) {
   *       // doThingsWith(resource)
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.projectPath('[PROJECT]');
   * const requestMetadata = {};
   * const request = {
   *   parent: formattedParent,
   *   requestMetadata: requestMetadata,
   * };
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (const resource of resources) {
   *     // doThingsWith(resource);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.searchJobsForAlert(nextRequest, options).then(callback);
   *   }
   * }
   * client.searchJobsForAlert(request, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  searchJobsForAlert(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.searchJobsForAlert(request, options, callback);
  }

  /**
   * Equivalent to {@link searchJobsForAlert}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link searchJobsForAlert} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The resource name of the project to search within.
   *
   *   The format is "projects/{project_id}", for example,
   *   "projects/api-test-project".
   * @param {Object} request.requestMetadata
   *   Required.
   *
   *   The meta information collected about the job searcher, used to improve the
   *   search quality of the service.. The identifiers, (such as `user_id`) are
   *   provided by users, and must be unique and consistent.
   *
   *   This object should have the same structure as [RequestMetadata]{@link google.cloud.talent.v4beta1.RequestMetadata}
   * @param {number} [request.searchMode]
   *   Optional.
   *
   *   Mode of a search.
   *
   *   Defaults to SearchMode.JOB_SEARCH.
   *
   *   The number should be among the values of [SearchMode]{@link google.cloud.talent.v4beta1.SearchMode}
   * @param {Object} [request.jobQuery]
   *   Optional.
   *
   *   Query used to search against jobs, such as keyword, location filters, etc.
   *
   *   This object should have the same structure as [JobQuery]{@link google.cloud.talent.v4beta1.JobQuery}
   * @param {boolean} [request.enableBroadening]
   *   Optional.
   *
   *   Controls whether to broaden the search when it produces sparse results.
   *   Broadened queries append results to the end of the matching results
   *   list.
   *
   *   Defaults to false.
   * @param {boolean} [request.requirePreciseResultSize]
   *   Optional.
   *
   *   Controls if the search job request requires the return of a precise
   *   count of the first 300 results. Setting this to `true` ensures
   *   consistency in the number of results per page. Best practice is to set this
   *   value to true if a client allows users to jump directly to a
   *   non-sequential search results page.
   *
   *   Enabling this flag may adversely impact performance.
   *
   *   Defaults to false.
   * @param {Object[]} [request.histogramQueries]
   *   Optional.
   *
   *   An expression specifies a histogram request against matching jobs.
   *
   *   Expression syntax is an aggregation function call with histogram facets and
   *   other options.
   *
   *   Available aggregation function calls are:
   *   * `count(string_histogram_facet)`: Count the number of matching entities,
   *   for each distinct attribute value.
   *   * `count(numeric_histogram_facet, list of buckets)`: Count the number of
   *   matching entities within each bucket.
   *
   *   Data types:
   *
   *   * Histogram facet: facet names with format [a-zA-Z][a-zA-Z0-9_]+.
   *   * String: string like "any string with backslash escape for quote(\")."
   *   * Number: whole number and floating point number like 10, -1 and -0.01.
   *   * List: list of elements with comma(,) separator surrounded by square
   *   brackets, for example, [1, 2, 3] and ["one", "two", "three"].
   *
   *   Built-in constants:
   *
   *   * MIN (minimum number similar to java Double.MIN_VALUE)
   *   * MAX (maximum number similar to java Double.MAX_VALUE)
   *
   *   Built-in functions:
   *
   *   * bucket(start, end[, label]): bucket built-in function creates a bucket
   *   with range of start, end). Note that the end is exclusive, for example,
   *   bucket(1, MAX, "positive number") or bucket(1, 10).
   *
   *   Job histogram facets:
   *
   *   * company_id: histogram by [Job.distributor_company_id.
   *   * company_display_name: histogram by Job.company_display_name.
   *   * employment_type: histogram by Job.employment_types, for example,
   *   "FULL_TIME", "PART_TIME".
   *   * company_size: histogram by CompanySize, for example, "SMALL",
   *   "MEDIUM", "BIG".
   *   * publish_time_in_month: histogram by the Job.publish_time in months.
   *   Must specify list of numeric buckets in spec.
   *   * publish_time_in_year: histogram by the Job.publish_time in years.
   *   Must specify list of numeric buckets in spec.
   *   * degree_type: histogram by the Job.degree_type, for example,
   *   "Bachelors", "Masters".
   *   * job_level: histogram by the Job.job_level, for example, "Entry
   *   Level".
   *   * country: histogram by the country code of jobs, for example, "US", "FR".
   *   * admin1: histogram by the admin1 code of jobs, which is a global
   *   placeholder referring to the state, province, or the particular term a
   *   country uses to define the geographic structure below the country level,
   *   for example, "CA", "IL".
   *   * city: histogram by a combination of the "city name, admin1 code". For
   *   example,  "Mountain View, CA", "New York, NY".
   *   * admin1_country: histogram by a combination of the "admin1 code, country",
   *   for example, "CA, US", "IL, US".
   *   * city_coordinate: histogram by the city center's GPS coordinates (latitude
   *   and longitude), for example, 37.4038522,-122.0987765. Since the coordinates
   *   of a city center can change, customers may need to refresh them
   *   periodically.
   *   * locale: histogram by the Job.language_code, for example, "en-US",
   *   "fr-FR".
   *   * language: histogram by the language subtag of the Job.language_code,
   *   for example, "en", "fr".
   *   * category: histogram by the JobCategory, for example,
   *   "COMPUTER_AND_IT", "HEALTHCARE".
   *   * base_compensation_unit: histogram by the CompensationUnit of base
   *   salary, for example, "WEEKLY", "MONTHLY".
   *   * base_compensation: histogram by the base salary. Must specify list of
   *   numeric buckets to group results by.
   *   * annualized_base_compensation: histogram by the base annualized salary.
   *   Must specify list of numeric buckets to group results by.
   *   * annualized_total_compensation: histogram by the total annualized salary.
   *   Must specify list of numeric buckets to group results by.
   *   * string_custom_attribute: histogram by string Job.custom_attributes.
   *   Values can be accessed via square bracket notations like
   *   string_custom_attribute["key1"].
   *   * numeric_custom_attribute: histogram by numeric Job.custom_attributes.
   *   Values can be accessed via square bracket notations like
   *   numeric_custom_attribute["key1"]. Must specify list of numeric buckets to
   *   group results by.
   *
   *   Example expressions:
   *   * count(admin1)
   *   * count(base_compensation, [bucket(1000, 10000), bucket(10000, 100000),
   *   bucket(100000, MAX)])
   *   * count(string_custom_attribute["some-string-custom-attribute"])
   *   * count(numeric_custom_attribute["some-numeric-custom-attribute"],
   *   [bucket(MIN, 0, "negative"), bucket(0, MAX, "non-negative"])
   *
   *   This object should have the same structure as [HistogramQuery]{@link google.cloud.talent.v4beta1.HistogramQuery}
   * @param {number} [request.jobView]
   *   Optional.
   *
   *   The desired job attributes returned for jobs in the
   *   search response. Defaults to JobView.SMALL if no value is specified.
   *
   *   The number should be among the values of [JobView]{@link google.cloud.talent.v4beta1.JobView}
   * @param {number} [request.offset]
   *   Optional.
   *
   *   An integer that specifies the current offset (that is, starting result
   *   location, amongst the jobs deemed by the API as relevant) in search
   *   results. This field is only considered if page_token is unset.
   *
   *   For example, 0 means to  return results starting from the first matching
   *   job, and 10 means to return from the 11th job. This can be used for
   *   pagination, (for example, pageSize = 10 and offset = 10 means to return
   *   from the second page).
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.orderBy]
   *   Optional.
   *
   *   The criteria determining how search results are sorted. Default is
   *   "relevance desc".
   *
   *   Supported options are:
   *
   *   * "relevance desc": By relevance descending, as determined by the API
   *   algorithms. Relevance thresholding of query results is only available
   *   with this ordering.
   *   * "posting`_`publish`_`time desc": By Job.posting_publish_time
   *   descending.
   *   * "posting`_`update`_`time desc": By Job.posting_update_time
   *   descending.
   *   * "title": By Job.title ascending.
   *   * "title desc": By Job.title descending.
   *   * "annualized`_`base`_`compensation": By job's
   *   CompensationInfo.annualized_base_compensation_range ascending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "annualized`_`base`_`compensation desc": By job's
   *   CompensationInfo.annualized_base_compensation_range descending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "annualized`_`total`_`compensation": By job's
   *   CompensationInfo.annualized_total_compensation_range ascending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "annualized`_`total`_`compensation desc": By job's
   *   CompensationInfo.annualized_total_compensation_range descending. Jobs
   *   whose annualized base compensation is unspecified are put at the end of
   *   search results.
   *   * "custom`_`ranking desc": By the relevance score adjusted to the
   *   SearchJobsRequest.custom_ranking_info.ranking_expression with weight
   *   factor assigned by
   *   SearchJobsRequest.custom_ranking_info.importance_level in descending
   *   order.
   *   * "location`_`distance": By the distance between the location on jobs and
   *    locations specified in the
   *   SearchJobsRequest.job_query.location_filters.
   *   When this order is selected, the
   *   SearchJobsRequest.job_query.location_filters must not be empty. When
   *   a job has multiple locations, the location closest to one of the locations
   *   specified in the location filter will be used to calculate location
   *   distance. Distance is calculated by the distance between two lat/long
   *   coordinates, with a precision of 10e-4 degrees (11.3 meters).
   *   Jobs that don't have locations specified will be ranked below jobs having
   *   locations.
   *   Diversification strategy is still applied unless explicitly disabled in
   *   SearchJobsRequest.diversification_level.
   * @param {number} [request.diversificationLevel]
   *   Optional.
   *
   *   Controls whether highly similar jobs are returned next to each other in
   *   the search results. Jobs are identified as highly similar based on
   *   their titles, job categories, and locations. Highly similar results are
   *   clustered so that only one representative job of the cluster is
   *   displayed to the job seeker higher up in the results, with the other jobs
   *   being displayed lower down in the results.
   *
   *   Defaults to DiversificationLevel.SIMPLE if no value
   *   is specified.
   *
   *   The number should be among the values of [DiversificationLevel]{@link google.cloud.talent.v4beta1.DiversificationLevel}
   * @param {Object} [request.customRankingInfo]
   *   Optional.
   *
   *   Controls over how job documents get ranked on top of existing relevance
   *   score (determined by API algorithm).
   *
   *   This object should have the same structure as [CustomRankingInfo]{@link google.cloud.talent.v4beta1.CustomRankingInfo}
   * @param {boolean} [request.disableKeywordMatch]
   *   Optional.
   *
   *   Controls whether to disable exact keyword match on Job.job_title,
   *   Job.description, Job.company_display_name, [Job.locations][0],
   *   Job.qualifications. When disable keyword match is turned off, a
   *   keyword match returns jobs that do not match given category filters when
   *   there are matching keywords. For example, for the query "program manager,"
   *   a result is returned even if the job posting has the title "software
   *   developer," which doesn't fall into "program manager" ontology, but does
   *   have "program manager" appearing in its description.
   *
   *   For queries like "cloud" that don't contain title or
   *   location specific ontology, jobs with "cloud" keyword matches are returned
   *   regardless of this flag's value.
   *
   *   Please use Company.keyword_searchable_custom_fields or
   *   Company.keyword_searchable_custom_attributes if company specific
   *   globally matched custom field/attribute string values is needed. Enabling
   *   keyword match improves recall of subsequent search requests.
   *
   *   Defaults to false.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [MatchingJob]{@link google.cloud.talent.v4beta1.MatchingJob} on 'data' event.
   *
   * @example
   *
   * const talent = require('@google-cloud/talent');
   *
   * const client = new talent.v4beta1.JobServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const requestMetadata = {};
   * const request = {
   *   parent: formattedParent,
   *   requestMetadata: requestMetadata,
   * };
   * client.searchJobsForAlertStream(request)
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  searchJobsForAlertStream(request, options) {
    options = options || {};

    return this._descriptors.page.searchJobsForAlert.createStream(
      this._innerApiCalls.searchJobsForAlert,
      request,
      options
    );
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {String} project
   * @returns {String}
   */
  projectPath(project) {
    return this._pathTemplates.projectPathTemplate.render({
      project: project,
    });
  }

  /**
   * Return a fully-qualified job resource name string.
   *
   * @param {String} project
   * @param {String} jobs
   * @returns {String}
   */
  jobPath(project, jobs) {
    return this._pathTemplates.jobPathTemplate.render({
      project: project,
      jobs: jobs,
    });
  }

  /**
   * Parse the projectName from a project resource.
   *
   * @param {String} projectName
   *   A fully-qualified path representing a project resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromProjectName(projectName) {
    return this._pathTemplates.projectPathTemplate.match(projectName).project;
  }

  /**
   * Parse the jobName from a job resource.
   *
   * @param {String} jobName
   *   A fully-qualified path representing a job resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromJobName(jobName) {
    return this._pathTemplates.jobPathTemplate.match(jobName).project;
  }

  /**
   * Parse the jobName from a job resource.
   *
   * @param {String} jobName
   *   A fully-qualified path representing a job resources.
   * @returns {String} - A string representing the jobs.
   */
  matchJobsFromJobName(jobName) {
    return this._pathTemplates.jobPathTemplate.match(jobName).jobs;
  }
}

module.exports = JobServiceClient;
