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

const gapicConfig = require('./cloud_scheduler_client_config.json');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * The Cloud Scheduler API allows external entities to reliably
 * schedule asynchronous jobs.
 *
 * @class
 * @memberof v1beta1
 */
class CloudSchedulerClient {
  /**
   * Construct an instance of CloudSchedulerClient.
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
        'google/cloud/scheduler/v1beta1/cloudscheduler.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
      locationPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}'
      ),
      jobPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/jobs/{job}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listJobs: new gax.PageDescriptor('pageToken', 'nextPageToken', 'jobs'),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.scheduler.v1beta1.CloudScheduler',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.scheduler.v1beta1.CloudScheduler.
    const cloudSchedulerStub = gaxGrpc.createStub(
      protos.google.cloud.scheduler.v1beta1.CloudScheduler,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const cloudSchedulerStubMethods = [
      'listJobs',
      'getJob',
      'createJob',
      'updateJob',
      'deleteJob',
      'pauseJob',
      'resumeJob',
      'runJob',
    ];
    for (const methodName of cloudSchedulerStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        cloudSchedulerStub.then(
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
    return 'cloudscheduler.googleapis.com';
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
   * Lists jobs.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The location name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Job]{@link google.cloud.scheduler.v1beta1.Job}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListJobsResponse]{@link google.cloud.scheduler.v1beta1.ListJobsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Job]{@link google.cloud.scheduler.v1beta1.Job}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Job]{@link google.cloud.scheduler.v1beta1.Job} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListJobsResponse]{@link google.cloud.scheduler.v1beta1.ListJobsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const scheduler = require('@google-cloud/scheduler');
   *
   * const client = new scheduler.v1beta1.CloudSchedulerClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listJobs({parent: formattedParent})
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
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
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
   * client.listJobs({parent: formattedParent}, options)
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
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

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
   *   The location name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Job]{@link google.cloud.scheduler.v1beta1.Job} on 'data' event.
   *
   * @example
   *
   * const scheduler = require('@google-cloud/scheduler');
   *
   * const client = new scheduler.v1beta1.CloudSchedulerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * client.listJobsStream({parent: formattedParent})
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
   * Gets a job.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The job name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Job]{@link google.cloud.scheduler.v1beta1.Job}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Job]{@link google.cloud.scheduler.v1beta1.Job}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const scheduler = require('@google-cloud/scheduler');
   *
   * const client = new scheduler.v1beta1.CloudSchedulerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
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
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.getJob(request, options, callback);
  }

  /**
   * Creates a job.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *
   *   The location name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID`.
   * @param {Object} request.job
   *   Required.
   *
   *   The job to add. The user can optionally specify a name for the
   *   job in name.
   *   name cannot be the same as an
   *   existing job. If a name is not specified then the system will
   *   generate a random unique name that will be returned
   *   (name) in the response.
   *
   *   This object should have the same structure as [Job]{@link google.cloud.scheduler.v1beta1.Job}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Job]{@link google.cloud.scheduler.v1beta1.Job}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Job]{@link google.cloud.scheduler.v1beta1.Job}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const scheduler = require('@google-cloud/scheduler');
   *
   * const client = new scheduler.v1beta1.CloudSchedulerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
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
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.createJob(request, options, callback);
  }

  /**
   * Updates a job.
   *
   * If successful, the updated Job is
   * returned. If the job does not exist, `NOT_FOUND` is returned.
   *
   * If UpdateJob does not successfully return, it is possible for the
   * job to be in an
   * Job.State.UPDATE_FAILED
   * state. A job in this state may not be executed. If this happens, retry the
   * UpdateJob request until a successful response is received.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.job
   *   Required.
   *
   *   The new job properties. name
   *   must be specified.
   *
   *   Output only fields cannot be modified using UpdateJob.
   *   Any value specified for an output only field will be ignored.
   *
   *   This object should have the same structure as [Job]{@link google.cloud.scheduler.v1beta1.Job}
   * @param {Object} [request.updateMask]
   *   A  mask used to specify which fields of the job are being updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Job]{@link google.cloud.scheduler.v1beta1.Job}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Job]{@link google.cloud.scheduler.v1beta1.Job}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const scheduler = require('@google-cloud/scheduler');
   *
   * const client = new scheduler.v1beta1.CloudSchedulerClient({
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
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'job.name': request.job.name,
    });

    return this._innerApiCalls.updateJob(request, options, callback);
  }

  /**
   * Deletes a job.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The job name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
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
   * const scheduler = require('@google-cloud/scheduler');
   *
   * const client = new scheduler.v1beta1.CloudSchedulerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
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
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.deleteJob(request, options, callback);
  }

  /**
   * Pauses a job.
   *
   * If a job is paused then the system will stop executing the job
   * until it is re-enabled via
   * ResumeJob. The
   * state of the job is stored in
   * state; if paused it will be set
   * to Job.State.PAUSED. A
   * job must be in
   * Job.State.ENABLED to be
   * paused.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The job name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Job]{@link google.cloud.scheduler.v1beta1.Job}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Job]{@link google.cloud.scheduler.v1beta1.Job}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const scheduler = require('@google-cloud/scheduler');
   *
   * const client = new scheduler.v1beta1.CloudSchedulerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
   * client.pauseJob({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  pauseJob(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.pauseJob(request, options, callback);
  }

  /**
   * Resume a job.
   *
   * This method reenables a job after it has been
   * Job.State.PAUSED. The
   * state of a job is stored in
   * Job.state; after calling this
   * method it will be set to
   * Job.State.ENABLED. A
   * job must be in
   * Job.State.PAUSED to be
   * resumed.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The job name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Job]{@link google.cloud.scheduler.v1beta1.Job}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Job]{@link google.cloud.scheduler.v1beta1.Job}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const scheduler = require('@google-cloud/scheduler');
   *
   * const client = new scheduler.v1beta1.CloudSchedulerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
   * client.resumeJob({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  resumeJob(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.resumeJob(request, options, callback);
  }

  /**
   * Forces a job to run now.
   *
   * When this method is called, Cloud Scheduler will dispatch the job, even
   * if the job is already running.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required.
   *
   *   The job name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Job]{@link google.cloud.scheduler.v1beta1.Job}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Job]{@link google.cloud.scheduler.v1beta1.Job}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const scheduler = require('@google-cloud/scheduler');
   *
   * const client = new scheduler.v1beta1.CloudSchedulerClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.jobPath('[PROJECT]', '[LOCATION]', '[JOB]');
   * client.runJob({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  runJob(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.runJob(request, options, callback);
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
   * Return a fully-qualified location resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @returns {String}
   */
  locationPath(project, location) {
    return this._pathTemplates.locationPathTemplate.render({
      project: project,
      location: location,
    });
  }

  /**
   * Return a fully-qualified job resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} job
   * @returns {String}
   */
  jobPath(project, location, job) {
    return this._pathTemplates.jobPathTemplate.render({
      project: project,
      location: location,
      job: job,
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
   * Parse the locationName from a location resource.
   *
   * @param {String} locationName
   *   A fully-qualified path representing a location resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromLocationName(locationName) {
    return this._pathTemplates.locationPathTemplate.match(locationName).project;
  }

  /**
   * Parse the locationName from a location resource.
   *
   * @param {String} locationName
   *   A fully-qualified path representing a location resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromLocationName(locationName) {
    return this._pathTemplates.locationPathTemplate.match(locationName)
      .location;
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
   * @returns {String} - A string representing the location.
   */
  matchLocationFromJobName(jobName) {
    return this._pathTemplates.jobPathTemplate.match(jobName).location;
  }

  /**
   * Parse the jobName from a job resource.
   *
   * @param {String} jobName
   *   A fully-qualified path representing a job resources.
   * @returns {String} - A string representing the job.
   */
  matchJobFromJobName(jobName) {
    return this._pathTemplates.jobPathTemplate.match(jobName).job;
  }
}

module.exports = CloudSchedulerClient;
