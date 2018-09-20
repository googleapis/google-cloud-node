// Copyright 2018 Google LLC
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

const gapicConfig = require('./job_controller_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * The JobController provides methods to manage jobs.
 *
 * @class
 * @memberof v1
 */
class JobControllerClient {
  /**
   * Construct an instance of JobControllerClient.
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
        'google/cloud/dataproc/v1/jobs.proto'
      )
    );

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listJobs: new gax.PageDescriptor('pageToken', 'nextPageToken', 'jobs'),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.dataproc.v1.JobController',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.dataproc.v1.JobController.
    const jobControllerStub = gaxGrpc.createStub(
      protos.google.cloud.dataproc.v1.JobController,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const jobControllerStubMethods = [
      'submitJob',
      'getJob',
      'listJobs',
      'updateJob',
      'cancelJob',
      'deleteJob',
    ];
    for (const methodName of jobControllerStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        jobControllerStub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
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
    return 'dataproc.googleapis.com';
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
    return ['https://www.googleapis.com/auth/cloud-platform'];
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
   * Submits a job to a cluster.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the job
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {Object} request.job
   *   Required. The job resource.
   *
   *   This object should have the same structure as [Job]{@link google.cloud.dataproc.v1.Job}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Job]{@link google.cloud.dataproc.v1.Job}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Job]{@link google.cloud.dataproc.v1.Job}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1.JobControllerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const region = '';
   * const job = {};
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   job: job,
   * };
   * client.submitJob(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  submitJob(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.submitJob(request, options, callback);
  }

  /**
   * Gets the resource representation for a job in a project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the job
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} request.jobId
   *   Required. The job ID.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Job]{@link google.cloud.dataproc.v1.Job}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Job]{@link google.cloud.dataproc.v1.Job}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1.JobControllerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const region = '';
   * const jobId = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   jobId: jobId,
   * };
   * client.getJob(request)
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
   * Lists regions/{region}/jobs in a project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the job
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.clusterName]
   *   Optional. If set, the returned jobs list includes only jobs that were
   *   submitted to the named cluster.
   * @param {number} [request.jobStateMatcher]
   *   Optional. Specifies enumerated categories of jobs to list.
   *   (default = match ALL jobs).
   *
   *   If `filter` is provided, `jobStateMatcher` will be ignored.
   *
   *   The number should be among the values of [JobStateMatcher]{@link google.cloud.dataproc.v1.JobStateMatcher}
   * @param {string} [request.filter]
   *   Optional. A filter constraining the jobs to list. Filters are
   *   case-sensitive and have the following syntax:
   *
   *   [field = value] AND [field [= value]] ...
   *
   *   where **field** is `status.state` or `labels.[KEY]`, and `[KEY]` is a label
   *   key. **value** can be `*` to match all values.
   *   `status.state` can be either `ACTIVE` or `NON_ACTIVE`.
   *   Only the logical `AND` operator is supported; space-separated items are
   *   treated as having an implicit `AND` operator.
   *
   *   Example filter:
   *
   *   status.state = ACTIVE AND labels.env = staging AND labels.starred = *
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Job]{@link google.cloud.dataproc.v1.Job}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListJobsResponse]{@link google.cloud.dataproc.v1.ListJobsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Job]{@link google.cloud.dataproc.v1.Job}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Job]{@link google.cloud.dataproc.v1.Job} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListJobsResponse]{@link google.cloud.dataproc.v1.ListJobsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1.JobControllerClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const projectId = '';
   * const region = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
   * };
   *
   * client.listJobs(request)
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const projectId = '';
   * const region = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
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
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
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
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the job
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.clusterName]
   *   Optional. If set, the returned jobs list includes only jobs that were
   *   submitted to the named cluster.
   * @param {number} [request.jobStateMatcher]
   *   Optional. Specifies enumerated categories of jobs to list.
   *   (default = match ALL jobs).
   *
   *   If `filter` is provided, `jobStateMatcher` will be ignored.
   *
   *   The number should be among the values of [JobStateMatcher]{@link google.cloud.dataproc.v1.JobStateMatcher}
   * @param {string} [request.filter]
   *   Optional. A filter constraining the jobs to list. Filters are
   *   case-sensitive and have the following syntax:
   *
   *   [field = value] AND [field [= value]] ...
   *
   *   where **field** is `status.state` or `labels.[KEY]`, and `[KEY]` is a label
   *   key. **value** can be `*` to match all values.
   *   `status.state` can be either `ACTIVE` or `NON_ACTIVE`.
   *   Only the logical `AND` operator is supported; space-separated items are
   *   treated as having an implicit `AND` operator.
   *
   *   Example filter:
   *
   *   status.state = ACTIVE AND labels.env = staging AND labels.starred = *
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Job]{@link google.cloud.dataproc.v1.Job} on 'data' event.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1.JobControllerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const region = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
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
   * Updates a job in a project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the job
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} request.jobId
   *   Required. The job ID.
   * @param {Object} request.job
   *   Required. The changes to the job.
   *
   *   This object should have the same structure as [Job]{@link google.cloud.dataproc.v1.Job}
   * @param {Object} request.updateMask
   *   Required. Specifies the path, relative to <code>Job</code>, of
   *   the field to update. For example, to update the labels of a Job the
   *   <code>update_mask</code> parameter would be specified as
   *   <code>labels</code>, and the `PATCH` request body would specify the new
   *   value. <strong>Note:</strong> Currently, <code>labels</code> is the only
   *   field that can be updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Job]{@link google.cloud.dataproc.v1.Job}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Job]{@link google.cloud.dataproc.v1.Job}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1.JobControllerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const region = '';
   * const jobId = '';
   * const job = {};
   * const updateMask = {};
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   jobId: jobId,
   *   job: job,
   *   updateMask: updateMask,
   * };
   * client.updateJob(request)
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
   * Starts a job cancellation request. To access the job resource
   * after cancellation, call
   * [regions/{region}/jobs.list](https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or
   * [regions/{region}/jobs.get](https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the job
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} request.jobId
   *   Required. The job ID.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Job]{@link google.cloud.dataproc.v1.Job}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Job]{@link google.cloud.dataproc.v1.Job}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1.JobControllerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const region = '';
   * const jobId = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   jobId: jobId,
   * };
   * client.cancelJob(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  cancelJob(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.cancelJob(request, options, callback);
  }

  /**
   * Deletes the job from the project. If the job is active, the delete fails,
   * and the response returns `FAILED_PRECONDITION`.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.projectId
   *   Required. The ID of the Google Cloud Platform project that the job
   *   belongs to.
   * @param {string} request.region
   *   Required. The Cloud Dataproc region in which to handle the request.
   * @param {string} request.jobId
   *   Required. The job ID.
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
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1.JobControllerClient({
   *   // optional auth parameters.
   * });
   *
   * const projectId = '';
   * const region = '';
   * const jobId = '';
   * const request = {
   *   projectId: projectId,
   *   region: region,
   *   jobId: jobId,
   * };
   * client.deleteJob(request).catch(err => {
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
}

module.exports = JobControllerClient;
