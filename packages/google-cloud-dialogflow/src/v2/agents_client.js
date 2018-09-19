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

const gapicConfig = require('./agents_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');
const protobuf = require('protobufjs');

const VERSION = require('../../package.json').version;

/**
 * Agents are best described as Natural Language Understanding (NLU) modules
 * that transform user requests into actionable data. You can include agents
 * in your app, product, or service to determine user intent and respond to the
 * user in a natural way.
 *
 * After you create an agent, you can add Intents, Contexts,
 * Entity Types, Webhooks, and so on to
 * manage the flow of a conversation and match user input to predefined intents
 * and actions.
 *
 * You can create an agent using both Dialogflow Standard Edition and
 * Dialogflow Enterprise Edition. For details, see
 * [Dialogflow Editions](https://cloud.google.com/dialogflow-enterprise/docs/editions).
 *
 * You can save your agent for backup or versioning by exporting the agent by
 * using the ExportAgent method. You can import a saved
 * agent by using the ImportAgent method.
 *
 * Dialogflow provides several
 * [prebuilt agents](https://dialogflow.com/docs/prebuilt-agents) for common
 * conversation scenarios such as determining a date and time, converting
 * currency, and so on.
 *
 * For more information about agents, see the
 * [Dialogflow documentation](https://dialogflow.com/docs/agents).
 *
 * @class
 * @memberof v2
 */
class AgentsClient {
  /**
   * Construct an instance of AgentsClient.
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
        'google/cloud/dialogflow/v2/agent.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      searchAgents: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'agents'
      ),
    };
    let protoFilesRoot = new gax.GoogleProtoFilesRoot();
    protoFilesRoot = protobuf.loadSync(
      path.join(
        __dirname,
        '..',
        '..',
        'protos',
        'google/cloud/dialogflow/v2/agent.proto'
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

    const trainAgentResponse = protoFilesRoot.lookup('google.protobuf.Empty');
    const trainAgentMetadata = protoFilesRoot.lookup('google.protobuf.Struct');
    const exportAgentResponse = protoFilesRoot.lookup(
      'google.cloud.dialogflow.v2.ExportAgentResponse'
    );
    const exportAgentMetadata = protoFilesRoot.lookup('google.protobuf.Struct');
    const importAgentResponse = protoFilesRoot.lookup('google.protobuf.Empty');
    const importAgentMetadata = protoFilesRoot.lookup('google.protobuf.Struct');
    const restoreAgentResponse = protoFilesRoot.lookup('google.protobuf.Empty');
    const restoreAgentMetadata = protoFilesRoot.lookup(
      'google.protobuf.Struct'
    );

    this._descriptors.longrunning = {
      trainAgent: new gax.LongrunningDescriptor(
        this.operationsClient,
        trainAgentResponse.decode.bind(trainAgentResponse),
        trainAgentMetadata.decode.bind(trainAgentMetadata)
      ),
      exportAgent: new gax.LongrunningDescriptor(
        this.operationsClient,
        exportAgentResponse.decode.bind(exportAgentResponse),
        exportAgentMetadata.decode.bind(exportAgentMetadata)
      ),
      importAgent: new gax.LongrunningDescriptor(
        this.operationsClient,
        importAgentResponse.decode.bind(importAgentResponse),
        importAgentMetadata.decode.bind(importAgentMetadata)
      ),
      restoreAgent: new gax.LongrunningDescriptor(
        this.operationsClient,
        restoreAgentResponse.decode.bind(restoreAgentResponse),
        restoreAgentMetadata.decode.bind(restoreAgentMetadata)
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.dialogflow.v2.Agents',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.dialogflow.v2.Agents.
    const agentsStub = gaxGrpc.createStub(
      protos.google.cloud.dialogflow.v2.Agents,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const agentsStubMethods = [
      'getAgent',
      'searchAgents',
      'trainAgent',
      'exportAgent',
      'importAgent',
      'restoreAgent',
    ];
    for (let methodName of agentsStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        agentsStub.then(
          stub =>
            function() {
              const args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
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
    return 'dialogflow.googleapis.com';
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
   * Retrieves the specified agent.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The project that the agent to fetch is associated with.
   *   Format: `projects/<Project ID>`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Agent]{@link google.cloud.dialogflow.v2.Agent}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Agent]{@link google.cloud.dialogflow.v2.Agent}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2');
   *
   * const client = new dialogflow.v2.AgentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.getAgent({parent: formattedParent})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getAgent(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getAgent(request, options, callback);
  }

  /**
   * Returns the list of agents.
   *
   * Since there is at most one conversational agent per project, this method is
   * useful primarily for listing all agents across projects the caller has
   * access to. One can achieve that with a wildcard project collection id "-".
   * Refer to [List
   * Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The project to list agents from.
   *   Format: `projects/<Project ID or '-'>`.
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
   *   The second parameter to the callback is Array of [Agent]{@link google.cloud.dialogflow.v2.Agent}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [SearchAgentsResponse]{@link google.cloud.dialogflow.v2.SearchAgentsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Agent]{@link google.cloud.dialogflow.v2.Agent}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Agent]{@link google.cloud.dialogflow.v2.Agent} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [SearchAgentsResponse]{@link google.cloud.dialogflow.v2.SearchAgentsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2');
   *
   * const client = new dialogflow.v2.AgentsClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * client.searchAgents({parent: formattedParent})
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
   * const formattedParent = client.projectPath('[PROJECT]');
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
   *     return client.searchAgents(nextRequest, options).then(callback);
   *   }
   * }
   * client.searchAgents({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  searchAgents(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.searchAgents(request, options, callback);
  }

  /**
   * Equivalent to {@link searchAgents}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link searchAgents} continuously
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
   *   Required. The project to list agents from.
   *   Format: `projects/<Project ID or '-'>`.
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
   *   An object stream which emits an object representing [Agent]{@link google.cloud.dialogflow.v2.Agent} on 'data' event.
   *
   * @example
   *
   * const dialogflow = require('dialogflow.v2');
   *
   * const client = new dialogflow.v2.AgentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.searchAgentsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  searchAgentsStream(request, options) {
    options = options || {};

    return this._descriptors.page.searchAgents.createStream(
      this._innerApiCalls.searchAgents,
      request,
      options
    );
  }

  /**
   * Trains the specified agent.
   *
   * Operation <response: google.protobuf.Empty,
   *            metadata: google.protobuf.Struct>
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The project that the agent to train is associated with.
   *   Format: `projects/<Project ID>`.
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
   * const dialogflow = require('dialogflow.v2');
   *
   * const client = new dialogflow.v2.AgentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * // Handle the operation using the promise pattern.
   * client.trainAgent({parent: formattedParent})
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     const result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     const metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.trainAgent({parent: formattedParent})
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
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
  trainAgent(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.trainAgent(request, options, callback);
  }

  /**
   * Exports the specified agent to a ZIP file.
   *
   * Operation <response: ExportAgentResponse,
   *            metadata: google.protobuf.Struct>
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The project that the agent to export is associated with.
   *   Format: `projects/<Project ID>`.
   * @param {string} [request.agentUri]
   *   Optional. The Google Cloud Storage URI to export the agent to.
   *   Note: The URI must start with
   *   "gs://". If left unspecified, the serialized agent is returned inline.
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
   * const dialogflow = require('dialogflow.v2');
   *
   * const client = new dialogflow.v2.AgentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * // Handle the operation using the promise pattern.
   * client.exportAgent({parent: formattedParent})
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     const result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     const metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.exportAgent({parent: formattedParent})
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
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
  exportAgent(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.exportAgent(request, options, callback);
  }

  /**
   * Imports the specified agent from a ZIP file.
   *
   * Uploads new intents and entity types without deleting the existing ones.
   * Intents and entity types with the same name are replaced with the new
   * versions from ImportAgentRequest.
   *
   * Operation <response: google.protobuf.Empty,
   *            metadata: google.protobuf.Struct>
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The project that the agent to import is associated with.
   *   Format: `projects/<Project ID>`.
   * @param {string} [request.agentUri]
   *   The URI to a Google Cloud Storage file containing the agent to import.
   *   Note: The URI must start with "gs://".
   * @param {string} [request.agentContent]
   *   The agent to import.
   *
   *   Example for how to import an agent via the command line:
   *
   *   curl \
   *     'https://dialogflow.googleapis.com/v2/projects/<project_name>/agent:import\
   *      -X POST \
   *      -H 'Authorization: Bearer '$(gcloud auth print-access-token) \
   *      -H 'Accept: application/json' \
   *      -H 'Content-Type: application/json' \
   *      --compressed \
   *      --data-binary "{
   *         'agentContent': '$(cat <agent zip file> | base64 -w 0)'
   *      }"
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
   * const dialogflow = require('dialogflow.v2');
   *
   * const client = new dialogflow.v2.AgentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * // Handle the operation using the promise pattern.
   * client.importAgent({parent: formattedParent})
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     const result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     const metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.importAgent({parent: formattedParent})
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
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
  importAgent(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.importAgent(request, options, callback);
  }

  /**
   * Restores the specified agent from a ZIP file.
   *
   * Replaces the current agent version with a new one. All the intents and
   * entity types in the older version are deleted.
   *
   * Operation <response: google.protobuf.Empty,
   *            metadata: google.protobuf.Struct>
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The project that the agent to restore is associated with.
   *   Format: `projects/<Project ID>`.
   * @param {string} [request.agentUri]
   *   The URI to a Google Cloud Storage file containing the agent to restore.
   *   Note: The URI must start with "gs://".
   * @param {string} [request.agentContent]
   *   The agent to restore.
   *
   *   Example for how to restore an agent via the command line:
   *
   *   curl \
   *     'https://dialogflow.googleapis.com/v2/projects/<project_name>/agent:restore\
   *      -X POST \
   *      -H 'Authorization: Bearer '$(gcloud auth print-access-token) \
   *      -H 'Accept: application/json' \
   *      -H 'Content-Type: application/json' \
   *      --compressed \
   *      --data-binary "{
   *          'agentContent': '$(cat <agent zip file> | base64 -w 0)'
   *      }" \
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
   * const dialogflow = require('dialogflow.v2');
   *
   * const client = new dialogflow.v2.AgentsClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * // Handle the operation using the promise pattern.
   * client.restoreAgent({parent: formattedParent})
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
   *
   *     // Operation#promise starts polling for the completion of the LRO.
   *     return operation.promise();
   *   })
   *   .then(responses => {
   *     // The final result of the operation.
   *     const result = responses[0];
   *
   *     // The metadata value of the completed operation.
   *     const metadata = responses[1];
   *
   *     // The response of the api call returning the complete operation.
   *     const finalApiResponse = responses[2];
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * // Handle the operation using the event emitter pattern.
   * client.restoreAgent({parent: formattedParent})
   *   .then(responses => {
   *     const operation = responses[0];
   *     const initialApiResponse = responses[1];
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
  restoreAgent(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.restoreAgent(request, options, callback);
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
   * Parse the projectName from a project resource.
   *
   * @param {String} projectName
   *   A fully-qualified path representing a project resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromProjectName(projectName) {
    return this._pathTemplates.projectPathTemplate.match(projectName).project;
  }
}

module.exports = AgentsClient;
