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

const gapicConfig = require('./workflow_template_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');
const protobuf = require('protobufjs');

const VERSION = require('../../package.json').version;

/**
 * The API interface for managing Workflow Templates in the
 * Cloud Dataproc API.
 *
 * @class
 * @memberof v1beta2
 */
class WorkflowTemplateServiceClient {
  /**
   * Construct an instance of WorkflowTemplateServiceClient.
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
        'google/cloud/dataproc/v1beta2/workflow_templates.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      regionPathTemplate: new gax.PathTemplate(
        'projects/{project}/regions/{region}'
      ),
      workflowTemplatePathTemplate: new gax.PathTemplate(
        'projects/{project}/regions/{region}/workflowTemplates/{workflow_template}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listWorkflowTemplates: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'templates'
      ),
    };
    let protoFilesRoot = new gax.GoogleProtoFilesRoot();
    protoFilesRoot = protobuf.loadSync(
      path.join(
        __dirname,
        '..',
        '..',
        'protos',
        'google/cloud/dataproc/v1beta2/workflow_templates.proto'
      ),
      protoFilesRoot
    );

    // This API contains "long-running operations", which return a
    // an Operation object that allows for tracking of the operation,
    // rather than holding a request open.
    this.operationsClient = new gax.lro({
      auth: gaxGrpc.auth,
      grpc: gaxGrpc.grpc,
    }).operationsClient(opts);

    const instantiateWorkflowTemplateResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    const instantiateWorkflowTemplateMetadata = protoFilesRoot.lookup(
      'google.cloud.dataproc.v1beta2.WorkflowMetadata'
    );
    const instantiateInlineWorkflowTemplateResponse = protoFilesRoot.lookup(
      'google.protobuf.Empty'
    );
    const instantiateInlineWorkflowTemplateMetadata = protoFilesRoot.lookup(
      'google.cloud.dataproc.v1beta2.WorkflowMetadata'
    );

    this._descriptors.longrunning = {
      instantiateWorkflowTemplate: new gax.LongrunningDescriptor(
        this.operationsClient,
        instantiateWorkflowTemplateResponse.decode.bind(
          instantiateWorkflowTemplateResponse
        ),
        instantiateWorkflowTemplateMetadata.decode.bind(
          instantiateWorkflowTemplateMetadata
        )
      ),
      instantiateInlineWorkflowTemplate: new gax.LongrunningDescriptor(
        this.operationsClient,
        instantiateInlineWorkflowTemplateResponse.decode.bind(
          instantiateInlineWorkflowTemplateResponse
        ),
        instantiateInlineWorkflowTemplateMetadata.decode.bind(
          instantiateInlineWorkflowTemplateMetadata
        )
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.dataproc.v1beta2.WorkflowTemplateService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.dataproc.v1beta2.WorkflowTemplateService.
    const workflowTemplateServiceStub = gaxGrpc.createStub(
      protos.google.cloud.dataproc.v1beta2.WorkflowTemplateService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const workflowTemplateServiceStubMethods = [
      'createWorkflowTemplate',
      'getWorkflowTemplate',
      'instantiateWorkflowTemplate',
      'instantiateInlineWorkflowTemplate',
      'updateWorkflowTemplate',
      'listWorkflowTemplates',
      'deleteWorkflowTemplate',
    ];
    for (const methodName of workflowTemplateServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        workflowTemplateServiceStub.then(
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
        this._descriptors.page[methodName] ||
          this._descriptors.longrunning[methodName]
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
   * Creates new workflow template.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The "resource name" of the region, as described
   *   in https://cloud.google.com/apis/design/resource_names of the form
   *   `projects/{project_id}/regions/{region}`
   * @param {Object} request.template
   *   Required. The Dataproc workflow template to create.
   *
   *   This object should have the same structure as [WorkflowTemplate]{@link google.cloud.dataproc.v1beta2.WorkflowTemplate}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [WorkflowTemplate]{@link google.cloud.dataproc.v1beta2.WorkflowTemplate}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [WorkflowTemplate]{@link google.cloud.dataproc.v1beta2.WorkflowTemplate}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.WorkflowTemplateServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
   * const template = {};
   * const request = {
   *   parent: formattedParent,
   *   template: template,
   * };
   * client.createWorkflowTemplate(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createWorkflowTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createWorkflowTemplate(
      request,
      options,
      callback
    );
  }

  /**
   * Retrieves the latest workflow template.
   *
   * Can retrieve previously instantiated template by specifying optional
   * version parameter.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The "resource name" of the workflow template, as described
   *   in https://cloud.google.com/apis/design/resource_names of the form
   *   `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}`
   * @param {number} [request.version]
   *   Optional. The version of workflow template to retrieve. Only previously
   *   instatiated versions can be retrieved.
   *
   *   If unspecified, retrieves the current version.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [WorkflowTemplate]{@link google.cloud.dataproc.v1beta2.WorkflowTemplate}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [WorkflowTemplate]{@link google.cloud.dataproc.v1beta2.WorkflowTemplate}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.WorkflowTemplateServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.workflowTemplatePath('[PROJECT]', '[REGION]', '[WORKFLOW_TEMPLATE]');
   * client.getWorkflowTemplate({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getWorkflowTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getWorkflowTemplate(request, options, callback);
  }

  /**
   * Instantiates a template and begins execution.
   *
   * The returned Operation can be used to track execution of
   * workflow by polling
   * operations.get.
   * The Operation will complete when entire workflow is finished.
   *
   * The running workflow can be aborted via
   * operations.cancel.
   * This will cause any inflight jobs to be cancelled and workflow-owned
   * clusters to be deleted.
   *
   * The Operation.metadata will be
   * WorkflowMetadata.
   *
   * On successful completion,
   * Operation.response will be
   * Empty.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The "resource name" of the workflow template, as described
   *   in https://cloud.google.com/apis/design/resource_names of the form
   *   `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}`
   * @param {number} [request.version]
   *   Optional. The version of workflow template to instantiate. If specified,
   *   the workflow will be instantiated only if the current version of
   *   the workflow template has the supplied version.
   *
   *   This option cannot be used to instantiate a previous version of
   *   workflow template.
   * @param {string} [request.instanceId]
   *   Deprecated. Please use `request_id` field instead.
   * @param {string} [request.requestId]
   *   Optional. A tag that prevents multiple concurrent workflow
   *   instances with the same tag from running. This mitigates risk of
   *   concurrent instances started due to retries.
   *
   *   It is recommended to always set this value to a
   *   [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).
   *
   *   The tag must contain only letters (a-z, A-Z), numbers (0-9),
   *   underscores (_), and hyphens (-). The maximum length is 40 characters.
   * @param {Object.<string, string>} [request.parameters]
   *   Optional. Map from parameter names to values that should be used for those
   *   parameters. Values may not exceed 100 characters.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.WorkflowTemplateServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.workflowTemplatePath('[PROJECT]', '[REGION]', '[WORKFLOW_TEMPLATE]');
   *
   * // Handle the operation using the promise pattern.
   * client.instantiateWorkflowTemplate({name: formattedName})
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
   * const formattedName = client.workflowTemplatePath('[PROJECT]', '[REGION]', '[WORKFLOW_TEMPLATE]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.instantiateWorkflowTemplate({name: formattedName})
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
   */
  instantiateWorkflowTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.instantiateWorkflowTemplate(
      request,
      options,
      callback
    );
  }

  /**
   * Instantiates a template and begins execution.
   *
   * This method is equivalent to executing the sequence
   * CreateWorkflowTemplate, InstantiateWorkflowTemplate,
   * DeleteWorkflowTemplate.
   *
   * The returned Operation can be used to track execution of
   * workflow by polling
   * operations.get.
   * The Operation will complete when entire workflow is finished.
   *
   * The running workflow can be aborted via
   * operations.cancel.
   * This will cause any inflight jobs to be cancelled and workflow-owned
   * clusters to be deleted.
   *
   * The Operation.metadata will be
   * WorkflowMetadata.
   *
   * On successful completion,
   * Operation.response will be
   * Empty.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The "resource name" of the workflow template region, as described
   *   in https://cloud.google.com/apis/design/resource_names of the form
   *   `projects/{project_id}/regions/{region}`
   * @param {Object} request.template
   *   Required. The workflow template to instantiate.
   *
   *   This object should have the same structure as [WorkflowTemplate]{@link google.cloud.dataproc.v1beta2.WorkflowTemplate}
   * @param {string} [request.instanceId]
   *   Deprecated. Please use `request_id` field instead.
   * @param {string} [request.requestId]
   *   Optional. A tag that prevents multiple concurrent workflow
   *   instances with the same tag from running. This mitigates risk of
   *   concurrent instances started due to retries.
   *
   *   It is recommended to always set this value to a
   *   [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).
   *
   *   The tag must contain only letters (a-z, A-Z), numbers (0-9),
   *   underscores (_), and hyphens (-). The maximum length is 40 characters.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.WorkflowTemplateServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
   * const template = {};
   * const request = {
   *   parent: formattedParent,
   *   template: template,
   * };
   *
   * // Handle the operation using the promise pattern.
   * client.instantiateInlineWorkflowTemplate(request)
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
   * const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
   * const template = {};
   * const request = {
   *   parent: formattedParent,
   *   template: template,
   * };
   *
   * // Handle the operation using the event emitter pattern.
   * client.instantiateInlineWorkflowTemplate(request)
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
   */
  instantiateInlineWorkflowTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.instantiateInlineWorkflowTemplate(
      request,
      options,
      callback
    );
  }

  /**
   * Updates (replaces) workflow template. The updated template
   * must contain version that matches the current server version.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.template
   *   Required. The updated workflow template.
   *
   *   The `template.version` field must match the current version.
   *
   *   This object should have the same structure as [WorkflowTemplate]{@link google.cloud.dataproc.v1beta2.WorkflowTemplate}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [WorkflowTemplate]{@link google.cloud.dataproc.v1beta2.WorkflowTemplate}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [WorkflowTemplate]{@link google.cloud.dataproc.v1beta2.WorkflowTemplate}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.WorkflowTemplateServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const template = {};
   * client.updateWorkflowTemplate({template: template})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateWorkflowTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateWorkflowTemplate(
      request,
      options,
      callback
    );
  }

  /**
   * Lists workflows that match the specified filter in the request.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The "resource name" of the region, as described
   *   in https://cloud.google.com/apis/design/resource_names of the form
   *   `projects/{project_id}/regions/{region}`
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
   *   The second parameter to the callback is Array of [WorkflowTemplate]{@link google.cloud.dataproc.v1beta2.WorkflowTemplate}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListWorkflowTemplatesResponse]{@link google.cloud.dataproc.v1beta2.ListWorkflowTemplatesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [WorkflowTemplate]{@link google.cloud.dataproc.v1beta2.WorkflowTemplate}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [WorkflowTemplate]{@link google.cloud.dataproc.v1beta2.WorkflowTemplate} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListWorkflowTemplatesResponse]{@link google.cloud.dataproc.v1beta2.ListWorkflowTemplatesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.WorkflowTemplateServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
   *
   * client.listWorkflowTemplates({parent: formattedParent})
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
   * const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
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
   *     return client.listWorkflowTemplates(nextRequest, options).then(callback);
   *   }
   * }
   * client.listWorkflowTemplates({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listWorkflowTemplates(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listWorkflowTemplates(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to {@link listWorkflowTemplates}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listWorkflowTemplates} continuously
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
   *   Required. The "resource name" of the region, as described
   *   in https://cloud.google.com/apis/design/resource_names of the form
   *   `projects/{project_id}/regions/{region}`
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
   *   An object stream which emits an object representing [WorkflowTemplate]{@link google.cloud.dataproc.v1beta2.WorkflowTemplate} on 'data' event.
   *
   * @example
   *
   * const dataproc = require('@google-cloud/dataproc');
   *
   * const client = new dataproc.v1beta2.WorkflowTemplateServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.regionPath('[PROJECT]', '[REGION]');
   * client.listWorkflowTemplatesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listWorkflowTemplatesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listWorkflowTemplates.createStream(
      this._innerApiCalls.listWorkflowTemplates,
      request,
      options
    );
  }

  /**
   * Deletes a workflow template. It does not cancel in-progress workflows.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The "resource name" of the workflow template, as described
   *   in https://cloud.google.com/apis/design/resource_names of the form
   *   `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}`
   * @param {number} [request.version]
   *   Optional. The version of workflow template to delete. If specified,
   *   will only delete the template if the current server version matches
   *   specified version.
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
   * const client = new dataproc.v1beta2.WorkflowTemplateServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.workflowTemplatePath('[PROJECT]', '[REGION]', '[WORKFLOW_TEMPLATE]');
   * client.deleteWorkflowTemplate({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteWorkflowTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteWorkflowTemplate(
      request,
      options,
      callback
    );
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified region resource name string.
   *
   * @param {String} project
   * @param {String} region
   * @returns {String}
   */
  regionPath(project, region) {
    return this._pathTemplates.regionPathTemplate.render({
      project: project,
      region: region,
    });
  }

  /**
   * Return a fully-qualified workflow_template resource name string.
   *
   * @param {String} project
   * @param {String} region
   * @param {String} workflowTemplate
   * @returns {String}
   */
  workflowTemplatePath(project, region, workflowTemplate) {
    return this._pathTemplates.workflowTemplatePathTemplate.render({
      project: project,
      region: region,
      workflow_template: workflowTemplate,
    });
  }

  /**
   * Parse the regionName from a region resource.
   *
   * @param {String} regionName
   *   A fully-qualified path representing a region resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromRegionName(regionName) {
    return this._pathTemplates.regionPathTemplate.match(regionName).project;
  }

  /**
   * Parse the regionName from a region resource.
   *
   * @param {String} regionName
   *   A fully-qualified path representing a region resources.
   * @returns {String} - A string representing the region.
   */
  matchRegionFromRegionName(regionName) {
    return this._pathTemplates.regionPathTemplate.match(regionName).region;
  }

  /**
   * Parse the workflowTemplateName from a workflow_template resource.
   *
   * @param {String} workflowTemplateName
   *   A fully-qualified path representing a workflow_template resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromWorkflowTemplateName(workflowTemplateName) {
    return this._pathTemplates.workflowTemplatePathTemplate.match(
      workflowTemplateName
    ).project;
  }

  /**
   * Parse the workflowTemplateName from a workflow_template resource.
   *
   * @param {String} workflowTemplateName
   *   A fully-qualified path representing a workflow_template resources.
   * @returns {String} - A string representing the region.
   */
  matchRegionFromWorkflowTemplateName(workflowTemplateName) {
    return this._pathTemplates.workflowTemplatePathTemplate.match(
      workflowTemplateName
    ).region;
  }

  /**
   * Parse the workflowTemplateName from a workflow_template resource.
   *
   * @param {String} workflowTemplateName
   *   A fully-qualified path representing a workflow_template resources.
   * @returns {String} - A string representing the workflow_template.
   */
  matchWorkflowTemplateFromWorkflowTemplateName(workflowTemplateName) {
    return this._pathTemplates.workflowTemplatePathTemplate.match(
      workflowTemplateName
    ).workflow_template;
  }
}

module.exports = WorkflowTemplateServiceClient;
