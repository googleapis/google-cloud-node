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

const gapicConfig = require('./workflows_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Manages workflow programs.
 *
 * @class
 * @memberof v1alpha1
 */
class WorkflowsClient {
  /**
   * Construct an instance of WorkflowsClient.
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
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   */
  constructor(opts) {
    opts = opts || {};
    this._descriptors = {};

    if (global.isBrowser) {
      // If we're in browser, we use gRPC fallback.
      opts.fallback = true;
    }

    // If we are in browser, we are already using fallback because of the
    // "browser" field in package.json.
    // But if we were explicitly requested to use fallback, let's do it now.
    const gaxModule = !global.isBrowser && opts.fallback ? gax.fallback : gax;

    const servicePath =
      opts.servicePath ||
      opts.apiEndpoint ||
      this.constructor.servicePath;

    // Ensure that options include the service address and port.
    opts = Object.assign(
      {
        clientConfig: {},
        port: this.constructor.port,
        servicePath,
      },
      opts
    );

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = this.constructor.scopes;
    const gaxGrpc = new gaxModule.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    const clientHeader = [];

    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    }
    clientHeader.push(`gax/${gaxModule.version}`);
    if (opts.fallback) {
      clientHeader.push(`gl-web/${gaxModule.version}`);
    } else {
      clientHeader.push(`grpc/${gaxGrpc.grpcVersion}`);
    }
    clientHeader.push(`gapic/${VERSION}`);
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(__dirname, '..', '..', 'protos', 'protos.json');
    const protos = gaxGrpc.loadProto(
      opts.fallback ?
        require("../../protos/protos.json") :
        nodejsProtoPath
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      locationPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}'
      ),
      workflowPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/workflows/{workflow}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listWorkflows: new gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'workflows'
      ),
    };

    const protoFilesRoot = opts.fallback ?
      gaxModule.protobuf.Root.fromJSON(require("../../protos/protos.json")) :
      gaxModule.protobuf.loadSync(nodejsProtoPath);

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    this.operationsClient = new gaxModule.lro({
      auth: gaxGrpc.auth,
      grpc: gaxGrpc.grpc,
    }).operationsClient(opts);

    const createWorkflowResponse = protoFilesRoot.lookup(
      'google.cloud.workflows.v1alpha1.Workflow'
    );
    const createWorkflowMetadata = protoFilesRoot.lookup(
      'google.cloud.workflows.v1alpha1.OperationMetadata'
    );
    const deleteWorkflowResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    const deleteWorkflowMetadata = protoFilesRoot.lookup(
      'google.cloud.workflows.v1alpha1.OperationMetadata'
    );
    const updateWorkflowResponse = protoFilesRoot.lookup(
      'google.cloud.workflows.v1alpha1.Workflow'
    );
    const updateWorkflowMetadata = protoFilesRoot.lookup(
      'google.cloud.workflows.v1alpha1.OperationMetadata'
    );

    this._descriptors.longrunning = {
      createWorkflow: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        createWorkflowResponse.decode.bind(createWorkflowResponse),
        createWorkflowMetadata.decode.bind(createWorkflowMetadata)
      ),
      deleteWorkflow: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        deleteWorkflowResponse.decode.bind(deleteWorkflowResponse),
        deleteWorkflowMetadata.decode.bind(deleteWorkflowMetadata)
      ),
      updateWorkflow: new gaxModule.LongrunningDescriptor(
        this.operationsClient,
        updateWorkflowResponse.decode.bind(updateWorkflowResponse),
        updateWorkflowMetadata.decode.bind(updateWorkflowMetadata)
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.workflows.v1alpha1.Workflows',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.workflows.v1alpha1.Workflows.
    const workflowsStub = gaxGrpc.createStub(
      opts.fallback ?
        protos.lookupService('google.cloud.workflows.v1alpha1.Workflows') :
        protos.google.cloud.workflows.v1alpha1.Workflows,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const workflowsStubMethods = [
      'listWorkflows',
      'getWorkflow',
      'createWorkflow',
      'deleteWorkflow',
      'updateWorkflow',
    ];
    for (const methodName of workflowsStubMethods) {
      const innerCallPromise = workflowsStub.then(
        stub => (...args) => {
          return stub[methodName].apply(stub, args);
        },
        err => () => {
          throw err;
        }
      );
      this._innerApiCalls[methodName] = gaxModule.createApiCall(
        innerCallPromise,
        defaults[methodName],
        this._descriptors.page[methodName] || this._descriptors.longrunning[methodName]
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'workflows.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'workflows.googleapis.com';
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
   * Lists Workflows in a given project and location.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Project and location from which the workflows should be listed,
   *   for example, "projects/project1/locations/us-central1".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.filter]
   * @param {string} [request.orderBy]
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Workflow]{@link google.cloud.workflows.v1alpha1.Workflow}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListWorkflowsResponse]{@link google.cloud.workflows.v1alpha1.ListWorkflowsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Workflow]{@link google.cloud.workflows.v1alpha1.Workflow}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Workflow]{@link google.cloud.workflows.v1alpha1.Workflow} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListWorkflowsResponse]{@link google.cloud.workflows.v1alpha1.ListWorkflowsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const workflows = require('@google-cloud/workflows');
   *
   * const client = new workflows.v1alpha1.WorkflowsClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listWorkflows({parent: formattedParent})
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
   *     return client.listWorkflows(nextRequest, options).then(callback);
   *   }
   * }
   * client.listWorkflows({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listWorkflows(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'parent': request.parent
      });

    return this._innerApiCalls.listWorkflows(request, options, callback);
  }

  /**
   * Equivalent to {@link listWorkflows}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listWorkflows} continuously
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
   *   Required. Project and location from which the workflows should be listed,
   *   for example, "projects/project1/locations/us-central1".
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.filter]
   * @param {string} [request.orderBy]
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [Workflow]{@link google.cloud.workflows.v1alpha1.Workflow} on 'data' event.
   *
   * @example
   *
   * const workflows = require('@google-cloud/workflows');
   *
   * const client = new workflows.v1alpha1.WorkflowsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * client.listWorkflowsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listWorkflowsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listWorkflows.createStream(
      this._innerApiCalls.listWorkflows,
      request,
      options
    );
  };

  /**
   * Gets details of a single Workflow.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Name of the workflow which information should be
   *   retrieved, for example,
   *   "projects/project1/locations/us-central1/workflows/workflow1".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Workflow]{@link google.cloud.workflows.v1alpha1.Workflow}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Workflow]{@link google.cloud.workflows.v1alpha1.Workflow}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const workflows = require('@google-cloud/workflows');
   *
   * const client = new workflows.v1alpha1.WorkflowsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.workflowPath('[PROJECT]', '[LOCATION]', '[WORKFLOW]');
   * client.getWorkflow({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getWorkflow(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'name': request.name
      });

    return this._innerApiCalls.getWorkflow(request, options, callback);
  }

  /**
   * Creates a new workflow. If a workflow with the specified name already
   * exists in the specified project and location, the long running operation
   * will return `ALREADY_EXISTS` error.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Project and location in which the workflow should be created, for
   *   example "projects/project1/locations/us-central1".
   * @param {Object} request.workflow
   *   Required. Workflow to be created.
   *
   *   This object should have the same structure as [Workflow]{@link google.cloud.workflows.v1alpha1.Workflow}
   * @param {string} request.workflowId
   *   Required. The ID of the workflow to be created. It has to fulfil the
   *   following requirements:
   *
   *   * Must contain only lowercase letters, numbers, and hyphens.
   *   * Must start with a letter.
   *   * Must be between 1-64 characters.
   *   * Must end with a number or a letter.
   *   * Must be unique within the customer project / location.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const workflows = require('@google-cloud/workflows');
   *
   * const client = new workflows.v1alpha1.WorkflowsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const workflow = {};
   * const workflowId = '';
   * const request = {
   *   parent: formattedParent,
   *   workflow: workflow,
   *   workflowId: workflowId,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.createWorkflow(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     const result = responses[0];
   *     const metadata = responses[1];
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const workflow = {};
   * const workflowId = '';
   * const request = {
   *   parent: formattedParent,
   *   workflow: workflow,
   *   workflowId: workflowId,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.createWorkflow(request)
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Adding a listener for the "complete" event starts polling for the
   *     // completion of the operation.
   *     operation.on('complete', (result, metadata, finalApiResponse) => {
   *       // doSomethingWith(result);
   *     });
   *
   *     // Adding a listener for the "progress" event causes the callback to be
   *     // called on any change in metadata when the operation is polled.
   *     operation.on('progress', (metadata, apiResponse) => {
   *       // doSomethingWith(metadata)
   *     });
   *
   *     // Adding a listener for the "error" event handles any errors found during polling.
   *     operation.on('error', err => {
   *       // throw(err);
   *     });
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const workflow = {};
   * const workflowId = '';
   * const request = {
   *   parent: formattedParent,
   *   workflow: workflow,
   *   workflowId: workflowId,
   * };
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.createWorkflow(request);
   *
   * const [response] = await operation.promise();
   */
  createWorkflow(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'parent': request.parent
      });

    return this._innerApiCalls.createWorkflow(request, options, callback);
  }

  /**
   * Deletes a workflow with the specified name.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. Name of the workflow which should be deleted, for example,
   *   "projects/project1/locations/us-central1/workflows/workflow1".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const workflows = require('@google-cloud/workflows');
   *
   * const client = new workflows.v1alpha1.WorkflowsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.workflowPath('[PROJECT]', '[LOCATION]', '[WORKFLOW]');
   *
   * // Handle the operation using the promise pattern.
   * client.deleteWorkflow({name: formattedName})
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     const result = responses[0];
   *     const metadata = responses[1];
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedName = client.workflowPath('[PROJECT]', '[LOCATION]', '[WORKFLOW]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.deleteWorkflow({name: formattedName})
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Adding a listener for the "complete" event starts polling for the
   *     // completion of the operation.
   *     operation.on('complete', (result, metadata, finalApiResponse) => {
   *       // doSomethingWith(result);
   *     });
   *
   *     // Adding a listener for the "progress" event causes the callback to be
   *     // called on any change in metadata when the operation is polled.
   *     operation.on('progress', (metadata, apiResponse) => {
   *       // doSomethingWith(metadata)
   *     });
   *
   *     // Adding a listener for the "error" event handles any errors found during polling.
   *     operation.on('error', err => {
   *       // throw(err);
   *     });
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedName = client.workflowPath('[PROJECT]', '[LOCATION]', '[WORKFLOW]');
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.deleteWorkflow({name: formattedName});
   *
   * const [response] = await operation.promise();
   */
  deleteWorkflow(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'name': request.name
      });

    return this._innerApiCalls.deleteWorkflow(request, options, callback);
  }

  /**
   * Updates existing workflow and increases its
   * version_id.
   * Has no impact on any workflow execution.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.workflow
   *   Required. Workflow to be updated.
   *
   *   This object should have the same structure as [Workflow]{@link google.cloud.workflows.v1alpha1.Workflow}
   * @param {Object} [request.updateMask]
   *   List of the only fields to be updated. If not present, the entire workflow
   *   will be updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/classes/Operation.html} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const workflows = require('@google-cloud/workflows');
   *
   * const client = new workflows.v1alpha1.WorkflowsClient({
   *   // optional auth parameters.
   * });
   *
   * const workflow = {};
   *
   * // Handle the operation using the promise pattern.
   * client.updateWorkflow({workflow: workflow})
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     const result = responses[0];
   *     const metadata = responses[1];
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const workflow = {};
   *
   * // Handle the operation using the event emitter pattern.
   * client.updateWorkflow({workflow: workflow})
   *   .then(responses => {
   *     const [operation, initialApiResponse] = responses;
   *
   *     // Adding a listener for the "complete" event starts polling for the
   *     // completion of the operation.
   *     operation.on('complete', (result, metadata, finalApiResponse) => {
   *       // doSomethingWith(result);
   *     });
   *
   *     // Adding a listener for the "progress" event causes the callback to be
   *     // called on any change in metadata when the operation is polled.
   *     operation.on('progress', (metadata, apiResponse) => {
   *       // doSomethingWith(metadata)
   *     });
   *
   *     // Adding a listener for the "error" event handles any errors found during polling.
   *     operation.on('error', err => {
   *       // throw(err);
   *     });
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const workflow = {};
   *
   * // Handle the operation using the await pattern.
   * const [operation] = await client.updateWorkflow({workflow: workflow});
   *
   * const [response] = await operation.promise();
   */
  updateWorkflow(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'workflow.name': request.workflow.name
      });

    return this._innerApiCalls.updateWorkflow(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

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
   * Return a fully-qualified workflow resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} workflow
   * @returns {String}
   */
  workflowPath(project, location, workflow) {
    return this._pathTemplates.workflowPathTemplate.render({
      project: project,
      location: location,
      workflow: workflow,
    });
  }

  /**
   * Parse the locationName from a location resource.
   *
   * @param {String} locationName
   *   A fully-qualified path representing a location resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromLocationName(locationName) {
    return this._pathTemplates.locationPathTemplate
      .match(locationName)
      .project;
  }

  /**
   * Parse the locationName from a location resource.
   *
   * @param {String} locationName
   *   A fully-qualified path representing a location resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromLocationName(locationName) {
    return this._pathTemplates.locationPathTemplate
      .match(locationName)
      .location;
  }

  /**
   * Parse the workflowName from a workflow resource.
   *
   * @param {String} workflowName
   *   A fully-qualified path representing a workflow resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromWorkflowName(workflowName) {
    return this._pathTemplates.workflowPathTemplate
      .match(workflowName)
      .project;
  }

  /**
   * Parse the workflowName from a workflow resource.
   *
   * @param {String} workflowName
   *   A fully-qualified path representing a workflow resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromWorkflowName(workflowName) {
    return this._pathTemplates.workflowPathTemplate
      .match(workflowName)
      .location;
  }

  /**
   * Parse the workflowName from a workflow resource.
   *
   * @param {String} workflowName
   *   A fully-qualified path representing a workflow resources.
   * @returns {String} - A string representing the workflow.
   */
  matchWorkflowFromWorkflowName(workflowName) {
    return this._pathTemplates.workflowPathTemplate
      .match(workflowName)
      .workflow;
  }
}


module.exports = WorkflowsClient;
