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

const gapicConfig = require('./dlp_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * The Cloud Data Loss Prevention (DLP) API is a service that allows clients
 * to detect the presence of Personally Identifiable Information (PII) and other
 * privacy-sensitive data in user-supplied, unstructured data streams, like text
 * blocks or images.
 * The service also includes methods for sensitive data redaction and
 * scheduling of data scans on Google Cloud Platform based data sets.
 *
 * To learn more about concepts and find how-to guides see
 * https://cloud.google.com/dlp/docs/.
 *
 * @class
 * @memberof v2
 */
class DlpServiceClient {
  /**
   * Construct an instance of DlpServiceClient.
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
        'google/privacy/dlp/v2/dlp.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      organizationPathTemplate: new gax.PathTemplate(
        'organizations/{organization}'
      ),
      organizationDeidentifyTemplatePathTemplate: new gax.PathTemplate(
        'organizations/{organization}/deidentifyTemplates/{deidentify_template}'
      ),
      projectDeidentifyTemplatePathTemplate: new gax.PathTemplate(
        'projects/{project}/deidentifyTemplates/{deidentify_template}'
      ),
      organizationInspectTemplatePathTemplate: new gax.PathTemplate(
        'organizations/{organization}/inspectTemplates/{inspect_template}'
      ),
      projectInspectTemplatePathTemplate: new gax.PathTemplate(
        'projects/{project}/inspectTemplates/{inspect_template}'
      ),
      projectJobTriggerPathTemplate: new gax.PathTemplate(
        'projects/{project}/jobTriggers/{job_trigger}'
      ),
      projectPathTemplate: new gax.PathTemplate('projects/{project}'),
      dlpJobPathTemplate: new gax.PathTemplate(
        'projects/{project}/dlpJobs/{dlp_job}'
      ),
      organizationStoredInfoTypePathTemplate: new gax.PathTemplate(
        'organizations/{organization}/storedInfoTypes/{stored_info_type}'
      ),
      projectStoredInfoTypePathTemplate: new gax.PathTemplate(
        'projects/{project}/storedInfoTypes/{stored_info_type}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      listInspectTemplates: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'inspectTemplates'
      ),
      listDeidentifyTemplates: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'deidentifyTemplates'
      ),
      listDlpJobs: new gax.PageDescriptor('pageToken', 'nextPageToken', 'jobs'),
      listJobTriggers: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'jobTriggers'
      ),
      listStoredInfoTypes: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'storedInfoTypes'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.privacy.dlp.v2.DlpService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.privacy.dlp.v2.DlpService.
    const dlpServiceStub = gaxGrpc.createStub(
      protos.google.privacy.dlp.v2.DlpService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const dlpServiceStubMethods = [
      'inspectContent',
      'redactImage',
      'deidentifyContent',
      'reidentifyContent',
      'listInfoTypes',
      'createInspectTemplate',
      'updateInspectTemplate',
      'getInspectTemplate',
      'listInspectTemplates',
      'deleteInspectTemplate',
      'createDeidentifyTemplate',
      'updateDeidentifyTemplate',
      'getDeidentifyTemplate',
      'listDeidentifyTemplates',
      'deleteDeidentifyTemplate',
      'createDlpJob',
      'listDlpJobs',
      'getDlpJob',
      'deleteDlpJob',
      'cancelDlpJob',
      'listJobTriggers',
      'getJobTrigger',
      'deleteJobTrigger',
      'updateJobTrigger',
      'createJobTrigger',
      'createStoredInfoType',
      'updateStoredInfoType',
      'getStoredInfoType',
      'listStoredInfoTypes',
      'deleteStoredInfoType',
    ];
    for (const methodName of dlpServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        dlpServiceStub.then(
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
    return 'dlp.googleapis.com';
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
   * Finds potentially sensitive info in content.
   * This method has limits on input size, processing time, and output size.
   *
   * When no InfoTypes or CustomInfoTypes are specified in this request, the
   * system will automatically choose what detectors to run. By default this may
   * be all types, but may change over time as detectors are updated.
   *
   * For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images
   * and https://cloud.google.com/dlp/docs/inspecting-text,
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The parent resource name, for example projects/my-project-id.
   * @param {Object} [request.inspectConfig]
   *   Configuration for the inspector. What specified here will override
   *   the template referenced by the inspect_template_name argument.
   *
   *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2.InspectConfig}
   * @param {Object} [request.item]
   *   The item to inspect.
   *
   *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2.ContentItem}
   * @param {string} [request.inspectTemplateName]
   *   Optional template to use. Any configuration directly specified in
   *   inspect_config will override those set in the template. Singular fields
   *   that are set in this request will replace their corresponding fields in the
   *   template. Repeated fields are appended. Singular sub-messages and groups
   *   are recursively merged.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [InspectContentResponse]{@link google.privacy.dlp.v2.InspectContentResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [InspectContentResponse]{@link google.privacy.dlp.v2.InspectContentResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.inspectContent({parent: formattedParent})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  inspectContent(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.inspectContent(request, options, callback);
  }

  /**
   * Redacts potentially sensitive info from an image.
   * This method has limits on input size, processing time, and output size.
   * See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to
   * learn more.
   *
   * When no InfoTypes or CustomInfoTypes are specified in this request, the
   * system will automatically choose what detectors to run. By default this may
   * be all types, but may change over time as detectors are updated.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The parent resource name, for example projects/my-project-id.
   * @param {Object} [request.inspectConfig]
   *   Configuration for the inspector.
   *
   *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2.InspectConfig}
   * @param {Object[]} [request.imageRedactionConfigs]
   *   The configuration for specifying what content to redact from images.
   *
   *   This object should have the same structure as [ImageRedactionConfig]{@link google.privacy.dlp.v2.ImageRedactionConfig}
   * @param {boolean} [request.includeFindings]
   *   Whether the response should include findings along with the redacted
   *   image.
   * @param {Object} [request.byteItem]
   *   The content must be PNG, JPEG, SVG or BMP.
   *
   *   This object should have the same structure as [ByteContentItem]{@link google.privacy.dlp.v2.ByteContentItem}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [RedactImageResponse]{@link google.privacy.dlp.v2.RedactImageResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [RedactImageResponse]{@link google.privacy.dlp.v2.RedactImageResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.redactImage({parent: formattedParent})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  redactImage(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.redactImage(request, options, callback);
  }

  /**
   * De-identifies potentially sensitive info from a ContentItem.
   * This method has limits on input size and output size.
   * See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to
   * learn more.
   *
   * When no InfoTypes or CustomInfoTypes are specified in this request, the
   * system will automatically choose what detectors to run. By default this may
   * be all types, but may change over time as detectors are updated.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The parent resource name, for example projects/my-project-id.
   * @param {Object} [request.deidentifyConfig]
   *   Configuration for the de-identification of the content item.
   *   Items specified here will override the template referenced by the
   *   deidentify_template_name argument.
   *
   *   This object should have the same structure as [DeidentifyConfig]{@link google.privacy.dlp.v2.DeidentifyConfig}
   * @param {Object} [request.inspectConfig]
   *   Configuration for the inspector.
   *   Items specified here will override the template referenced by the
   *   inspect_template_name argument.
   *
   *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2.InspectConfig}
   * @param {Object} [request.item]
   *   The item to de-identify. Will be treated as text.
   *
   *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2.ContentItem}
   * @param {string} [request.inspectTemplateName]
   *   Optional template to use. Any configuration directly specified in
   *   inspect_config will override those set in the template. Singular fields
   *   that are set in this request will replace their corresponding fields in the
   *   template. Repeated fields are appended. Singular sub-messages and groups
   *   are recursively merged.
   * @param {string} [request.deidentifyTemplateName]
   *   Optional template to use. Any configuration directly specified in
   *   deidentify_config will override those set in the template. Singular fields
   *   that are set in this request will replace their corresponding fields in the
   *   template. Repeated fields are appended. Singular sub-messages and groups
   *   are recursively merged.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DeidentifyContentResponse]{@link google.privacy.dlp.v2.DeidentifyContentResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DeidentifyContentResponse]{@link google.privacy.dlp.v2.DeidentifyContentResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.deidentifyContent({parent: formattedParent})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  deidentifyContent(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deidentifyContent(request, options, callback);
  }

  /**
   * Re-identifies content that has been de-identified.
   * See
   * https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example
   * to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The parent resource name.
   * @param {Object} [request.reidentifyConfig]
   *   Configuration for the re-identification of the content item.
   *   This field shares the same proto message type that is used for
   *   de-identification, however its usage here is for the reversal of the
   *   previous de-identification. Re-identification is performed by examining
   *   the transformations used to de-identify the items and executing the
   *   reverse. This requires that only reversible transformations
   *   be provided here. The reversible transformations are:
   *
   *    - `CryptoReplaceFfxFpeConfig`
   *
   *   This object should have the same structure as [DeidentifyConfig]{@link google.privacy.dlp.v2.DeidentifyConfig}
   * @param {Object} [request.inspectConfig]
   *   Configuration for the inspector.
   *
   *   This object should have the same structure as [InspectConfig]{@link google.privacy.dlp.v2.InspectConfig}
   * @param {Object} [request.item]
   *   The item to re-identify. Will be treated as text.
   *
   *   This object should have the same structure as [ContentItem]{@link google.privacy.dlp.v2.ContentItem}
   * @param {string} [request.inspectTemplateName]
   *   Optional template to use. Any configuration directly specified in
   *   `inspect_config` will override those set in the template. Singular fields
   *   that are set in this request will replace their corresponding fields in the
   *   template. Repeated fields are appended. Singular sub-messages and groups
   *   are recursively merged.
   * @param {string} [request.reidentifyTemplateName]
   *   Optional template to use. References an instance of `DeidentifyTemplate`.
   *   Any configuration directly specified in `reidentify_config` or
   *   `inspect_config` will override those set in the template. Singular fields
   *   that are set in this request will replace their corresponding fields in the
   *   template. Repeated fields are appended. Singular sub-messages and groups
   *   are recursively merged.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ReidentifyContentResponse]{@link google.privacy.dlp.v2.ReidentifyContentResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ReidentifyContentResponse]{@link google.privacy.dlp.v2.ReidentifyContentResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.reidentifyContent({parent: formattedParent})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  reidentifyContent(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.reidentifyContent(request, options, callback);
  }

  /**
   * Returns a list of the sensitive information types that the DLP API
   * supports. See https://cloud.google.com/dlp/docs/infotypes-reference to
   * learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.languageCode]
   *   Optional BCP-47 language code for localized infoType friendly
   *   names. If omitted, or if localized strings are not available,
   *   en-US strings will be returned.
   * @param {string} [request.filter]
   *   Optional filter to only return infoTypes supported by certain parts of the
   *   API. Defaults to supported_by=INSPECT.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ListInfoTypesResponse]{@link google.privacy.dlp.v2.ListInfoTypesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ListInfoTypesResponse]{@link google.privacy.dlp.v2.ListInfoTypesResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.listInfoTypes({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listInfoTypes(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listInfoTypes(request, options, callback);
  }

  /**
   * Creates an InspectTemplate for re-using frequently used configuration
   * for inspecting content, images, and storage.
   * See https://cloud.google.com/dlp/docs/creating-templates to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The parent resource name, for example projects/my-project-id or
   *   organizations/my-org-id.
   * @param {Object} [request.inspectTemplate]
   *   The InspectTemplate to create.
   *
   *   This object should have the same structure as [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate}
   * @param {string} [request.templateId]
   *   The template id can contain uppercase and lowercase letters,
   *   numbers, and hyphens; that is, it must match the regular
   *   expression: `[a-zA-Z\\d-]+`. The maximum length is 100
   *   characters. Can be empty to allow the system to generate one.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   * client.createInspectTemplate({parent: formattedParent})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createInspectTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createInspectTemplate(
      request,
      options,
      callback
    );
  }

  /**
   * Updates the InspectTemplate.
   * See https://cloud.google.com/dlp/docs/creating-templates to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of organization and inspectTemplate to be updated, for
   *   example `organizations/433245324/inspectTemplates/432452342` or
   *   projects/project-id/inspectTemplates/432452342.
   * @param {Object} [request.inspectTemplate]
   *   New InspectTemplate value.
   *
   *   This object should have the same structure as [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate}
   * @param {Object} [request.updateMask]
   *   Mask to control which fields get updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.organizationInspectTemplatePath('[ORGANIZATION]', '[INSPECT_TEMPLATE]');
   * client.updateInspectTemplate({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateInspectTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateInspectTemplate(
      request,
      options,
      callback
    );
  }

  /**
   * Gets an InspectTemplate.
   * See https://cloud.google.com/dlp/docs/creating-templates to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.name]
   *   Resource name of the organization and inspectTemplate to be read, for
   *   example `organizations/433245324/inspectTemplates/432452342` or
   *   projects/project-id/inspectTemplates/432452342.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.getInspectTemplate({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getInspectTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getInspectTemplate(request, options, callback);
  }

  /**
   * Lists InspectTemplates.
   * See https://cloud.google.com/dlp/docs/creating-templates to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The parent resource name, for example projects/my-project-id or
   *   organizations/my-org-id.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.orderBy]
   *   Optional comma separated list of fields to order by,
   *   followed by `asc` or `desc` postfix. This list is case-insensitive,
   *   default sorting order is ascending, redundant space characters are
   *   insignificant.
   *
   *   Example: `name asc,update_time, create_time desc`
   *
   *   Supported fields are:
   *
   *   - `create_time`: corresponds to time the template was created.
   *   - `update_time`: corresponds to time the template was last updated.
   *   - `name`: corresponds to template's name.
   *   - `display_name`: corresponds to template's display name.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListInspectTemplatesResponse]{@link google.privacy.dlp.v2.ListInspectTemplatesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListInspectTemplatesResponse]{@link google.privacy.dlp.v2.ListInspectTemplatesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   *
   * client.listInspectTemplates({parent: formattedParent})
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
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
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
   *     return client.listInspectTemplates(nextRequest, options).then(callback);
   *   }
   * }
   * client.listInspectTemplates({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listInspectTemplates(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listInspectTemplates(request, options, callback);
  }

  /**
   * Equivalent to {@link listInspectTemplates}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listInspectTemplates} continuously
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
   *   The parent resource name, for example projects/my-project-id or
   *   organizations/my-org-id.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.orderBy]
   *   Optional comma separated list of fields to order by,
   *   followed by `asc` or `desc` postfix. This list is case-insensitive,
   *   default sorting order is ascending, redundant space characters are
   *   insignificant.
   *
   *   Example: `name asc,update_time, create_time desc`
   *
   *   Supported fields are:
   *
   *   - `create_time`: corresponds to time the template was created.
   *   - `update_time`: corresponds to time the template was last updated.
   *   - `name`: corresponds to template's name.
   *   - `display_name`: corresponds to template's display name.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [InspectTemplate]{@link google.privacy.dlp.v2.InspectTemplate} on 'data' event.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   * client.listInspectTemplatesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listInspectTemplatesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listInspectTemplates.createStream(
      this._innerApiCalls.listInspectTemplates,
      request,
      options
    );
  }

  /**
   * Deletes an InspectTemplate.
   * See https://cloud.google.com/dlp/docs/creating-templates to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the organization and inspectTemplate to be deleted, for
   *   example `organizations/433245324/inspectTemplates/432452342` or
   *   projects/project-id/inspectTemplates/432452342.
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
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.organizationInspectTemplatePath('[ORGANIZATION]', '[INSPECT_TEMPLATE]');
   * client.deleteInspectTemplate({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteInspectTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteInspectTemplate(
      request,
      options,
      callback
    );
  }

  /**
   * Creates a DeidentifyTemplate for re-using frequently used configuration
   * for de-identifying content, images, and storage.
   * See https://cloud.google.com/dlp/docs/creating-templates-deid to learn
   * more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The parent resource name, for example projects/my-project-id or
   *   organizations/my-org-id.
   * @param {Object} [request.deidentifyTemplate]
   *   The DeidentifyTemplate to create.
   *
   *   This object should have the same structure as [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate}
   * @param {string} [request.templateId]
   *   The template id can contain uppercase and lowercase letters,
   *   numbers, and hyphens; that is, it must match the regular
   *   expression: `[a-zA-Z\\d-]+`. The maximum length is 100
   *   characters. Can be empty to allow the system to generate one.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   * client.createDeidentifyTemplate({parent: formattedParent})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createDeidentifyTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createDeidentifyTemplate(
      request,
      options,
      callback
    );
  }

  /**
   * Updates the DeidentifyTemplate.
   * See https://cloud.google.com/dlp/docs/creating-templates-deid to learn
   * more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of organization and deidentify template to be updated, for
   *   example `organizations/433245324/deidentifyTemplates/432452342` or
   *   projects/project-id/deidentifyTemplates/432452342.
   * @param {Object} [request.deidentifyTemplate]
   *   New DeidentifyTemplate value.
   *
   *   This object should have the same structure as [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate}
   * @param {Object} [request.updateMask]
   *   Mask to control which fields get updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.organizationDeidentifyTemplatePath('[ORGANIZATION]', '[DEIDENTIFY_TEMPLATE]');
   * client.updateDeidentifyTemplate({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateDeidentifyTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateDeidentifyTemplate(
      request,
      options,
      callback
    );
  }

  /**
   * Gets a DeidentifyTemplate.
   * See https://cloud.google.com/dlp/docs/creating-templates-deid to learn
   * more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the organization and deidentify template to be read, for
   *   example `organizations/433245324/deidentifyTemplates/432452342` or
   *   projects/project-id/deidentifyTemplates/432452342.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.organizationDeidentifyTemplatePath('[ORGANIZATION]', '[DEIDENTIFY_TEMPLATE]');
   * client.getDeidentifyTemplate({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getDeidentifyTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getDeidentifyTemplate(
      request,
      options,
      callback
    );
  }

  /**
   * Lists DeidentifyTemplates.
   * See https://cloud.google.com/dlp/docs/creating-templates-deid to learn
   * more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The parent resource name, for example projects/my-project-id or
   *   organizations/my-org-id.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.orderBy]
   *   Optional comma separated list of fields to order by,
   *   followed by `asc` or `desc` postfix. This list is case-insensitive,
   *   default sorting order is ascending, redundant space characters are
   *   insignificant.
   *
   *   Example: `name asc,update_time, create_time desc`
   *
   *   Supported fields are:
   *
   *   - `create_time`: corresponds to time the template was created.
   *   - `update_time`: corresponds to time the template was last updated.
   *   - `name`: corresponds to template's name.
   *   - `display_name`: corresponds to template's display name.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListDeidentifyTemplatesResponse]{@link google.privacy.dlp.v2.ListDeidentifyTemplatesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListDeidentifyTemplatesResponse]{@link google.privacy.dlp.v2.ListDeidentifyTemplatesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   *
   * client.listDeidentifyTemplates({parent: formattedParent})
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
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
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
   *     return client.listDeidentifyTemplates(nextRequest, options).then(callback);
   *   }
   * }
   * client.listDeidentifyTemplates({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listDeidentifyTemplates(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listDeidentifyTemplates(
      request,
      options,
      callback
    );
  }

  /**
   * Equivalent to {@link listDeidentifyTemplates}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listDeidentifyTemplates} continuously
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
   *   The parent resource name, for example projects/my-project-id or
   *   organizations/my-org-id.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.orderBy]
   *   Optional comma separated list of fields to order by,
   *   followed by `asc` or `desc` postfix. This list is case-insensitive,
   *   default sorting order is ascending, redundant space characters are
   *   insignificant.
   *
   *   Example: `name asc,update_time, create_time desc`
   *
   *   Supported fields are:
   *
   *   - `create_time`: corresponds to time the template was created.
   *   - `update_time`: corresponds to time the template was last updated.
   *   - `name`: corresponds to template's name.
   *   - `display_name`: corresponds to template's display name.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [DeidentifyTemplate]{@link google.privacy.dlp.v2.DeidentifyTemplate} on 'data' event.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   * client.listDeidentifyTemplatesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listDeidentifyTemplatesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listDeidentifyTemplates.createStream(
      this._innerApiCalls.listDeidentifyTemplates,
      request,
      options
    );
  }

  /**
   * Deletes a DeidentifyTemplate.
   * See https://cloud.google.com/dlp/docs/creating-templates-deid to learn
   * more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the organization and deidentify template to be deleted,
   *   for example `organizations/433245324/deidentifyTemplates/432452342` or
   *   projects/project-id/deidentifyTemplates/432452342.
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
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.organizationDeidentifyTemplatePath('[ORGANIZATION]', '[DEIDENTIFY_TEMPLATE]');
   * client.deleteDeidentifyTemplate({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteDeidentifyTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteDeidentifyTemplate(
      request,
      options,
      callback
    );
  }

  /**
   * Creates a new job to inspect storage or calculate risk metrics.
   * See https://cloud.google.com/dlp/docs/inspecting-storage and
   * https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
   *
   * When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the
   * system will automatically choose what detectors to run. By default this may
   * be all types, but may change over time as detectors are updated.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The parent resource name, for example projects/my-project-id.
   * @param {Object} [request.inspectJob]
   *   This object should have the same structure as [InspectJobConfig]{@link google.privacy.dlp.v2.InspectJobConfig}
   * @param {Object} [request.riskJob]
   *   This object should have the same structure as [RiskAnalysisJobConfig]{@link google.privacy.dlp.v2.RiskAnalysisJobConfig}
   * @param {string} [request.jobId]
   *   The job id can contain uppercase and lowercase letters,
   *   numbers, and hyphens; that is, it must match the regular
   *   expression: `[a-zA-Z\\d-]+`. The maximum length is 100
   *   characters. Can be empty to allow the system to generate one.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DlpJob]{@link google.privacy.dlp.v2.DlpJob}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DlpJob]{@link google.privacy.dlp.v2.DlpJob}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.createDlpJob({parent: formattedParent})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createDlpJob(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createDlpJob(request, options, callback);
  }

  /**
   * Lists DlpJobs that match the specified filter in the request.
   * See https://cloud.google.com/dlp/docs/inspecting-storage and
   * https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The parent resource name, for example projects/my-project-id.
   * @param {string} [request.filter]
   *   Optional. Allows filtering.
   *
   *   Supported syntax:
   *
   *   * Filter expressions are made up of one or more restrictions.
   *   * Restrictions can be combined by `AND` or `OR` logical operators. A
   *   sequence of restrictions implicitly uses `AND`.
   *   * A restriction has the form of `<field> <operator> <value>`.
   *   * Supported fields/values for inspect jobs:
   *       - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED
   *       - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY
   *       - `trigger_name` - The resource name of the trigger that created job.
   *   * Supported fields for risk analysis jobs:
   *       - `state` - RUNNING|CANCELED|FINISHED|FAILED
   *   * The operator must be `=` or `!=`.
   *
   *   Examples:
   *
   *   * inspected_storage = cloud_storage AND state = done
   *   * inspected_storage = cloud_storage OR inspected_storage = bigquery
   *   * inspected_storage = cloud_storage AND (state = done OR state = canceled)
   *
   *   The length of this field should be no more than 500 characters.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number} [request.type]
   *   The type of job. Defaults to `DlpJobType.INSPECT`
   *
   *   The number should be among the values of [DlpJobType]{@link google.privacy.dlp.v2.DlpJobType}
   * @param {string} [request.orderBy]
   *   Optional comma separated list of fields to order by,
   *   followed by `asc` or `desc` postfix. This list is case-insensitive,
   *   default sorting order is ascending, redundant space characters are
   *   insignificant.
   *
   *   Example: `name asc, end_time asc, create_time desc`
   *
   *   Supported fields are:
   *
   *   - `create_time`: corresponds to time the job was created.
   *   - `end_time`: corresponds to time the job ended.
   *   - `name`: corresponds to job's name.
   *   - `state`: corresponds to `state`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [DlpJob]{@link google.privacy.dlp.v2.DlpJob}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListDlpJobsResponse]{@link google.privacy.dlp.v2.ListDlpJobsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [DlpJob]{@link google.privacy.dlp.v2.DlpJob}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [DlpJob]{@link google.privacy.dlp.v2.DlpJob} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListDlpJobsResponse]{@link google.privacy.dlp.v2.ListDlpJobsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * client.listDlpJobs({parent: formattedParent})
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
   *     return client.listDlpJobs(nextRequest, options).then(callback);
   *   }
   * }
   * client.listDlpJobs({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listDlpJobs(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listDlpJobs(request, options, callback);
  }

  /**
   * Equivalent to {@link listDlpJobs}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listDlpJobs} continuously
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
   *   The parent resource name, for example projects/my-project-id.
   * @param {string} [request.filter]
   *   Optional. Allows filtering.
   *
   *   Supported syntax:
   *
   *   * Filter expressions are made up of one or more restrictions.
   *   * Restrictions can be combined by `AND` or `OR` logical operators. A
   *   sequence of restrictions implicitly uses `AND`.
   *   * A restriction has the form of `<field> <operator> <value>`.
   *   * Supported fields/values for inspect jobs:
   *       - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED
   *       - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY
   *       - `trigger_name` - The resource name of the trigger that created job.
   *   * Supported fields for risk analysis jobs:
   *       - `state` - RUNNING|CANCELED|FINISHED|FAILED
   *   * The operator must be `=` or `!=`.
   *
   *   Examples:
   *
   *   * inspected_storage = cloud_storage AND state = done
   *   * inspected_storage = cloud_storage OR inspected_storage = bigquery
   *   * inspected_storage = cloud_storage AND (state = done OR state = canceled)
   *
   *   The length of this field should be no more than 500 characters.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {number} [request.type]
   *   The type of job. Defaults to `DlpJobType.INSPECT`
   *
   *   The number should be among the values of [DlpJobType]{@link google.privacy.dlp.v2.DlpJobType}
   * @param {string} [request.orderBy]
   *   Optional comma separated list of fields to order by,
   *   followed by `asc` or `desc` postfix. This list is case-insensitive,
   *   default sorting order is ascending, redundant space characters are
   *   insignificant.
   *
   *   Example: `name asc, end_time asc, create_time desc`
   *
   *   Supported fields are:
   *
   *   - `create_time`: corresponds to time the job was created.
   *   - `end_time`: corresponds to time the job ended.
   *   - `name`: corresponds to job's name.
   *   - `state`: corresponds to `state`
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [DlpJob]{@link google.privacy.dlp.v2.DlpJob} on 'data' event.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.listDlpJobsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listDlpJobsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listDlpJobs.createStream(
      this._innerApiCalls.listDlpJobs,
      request,
      options
    );
  }

  /**
   * Gets the latest state of a long-running DlpJob.
   * See https://cloud.google.com/dlp/docs/inspecting-storage and
   * https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the DlpJob resource.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [DlpJob]{@link google.privacy.dlp.v2.DlpJob}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [DlpJob]{@link google.privacy.dlp.v2.DlpJob}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.dlpJobPath('[PROJECT]', '[DLP_JOB]');
   * client.getDlpJob({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getDlpJob(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getDlpJob(request, options, callback);
  }

  /**
   * Deletes a long-running DlpJob. This method indicates that the client is
   * no longer interested in the DlpJob result. The job will be cancelled if
   * possible.
   * See https://cloud.google.com/dlp/docs/inspecting-storage and
   * https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the DlpJob resource to be deleted.
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
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.dlpJobPath('[PROJECT]', '[DLP_JOB]');
   * client.deleteDlpJob({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteDlpJob(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteDlpJob(request, options, callback);
  }

  /**
   * Starts asynchronous cancellation on a long-running DlpJob. The server
   * makes a best effort to cancel the DlpJob, but success is not
   * guaranteed.
   * See https://cloud.google.com/dlp/docs/inspecting-storage and
   * https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the DlpJob resource to be cancelled.
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
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.dlpJobPath('[PROJECT]', '[DLP_JOB]');
   * client.cancelDlpJob({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  cancelDlpJob(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.cancelDlpJob(request, options, callback);
  }

  /**
   * Lists job triggers.
   * See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The parent resource name, for example `projects/my-project-id`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.orderBy]
   *   Optional comma separated list of triggeredJob fields to order by,
   *   followed by `asc` or `desc` postfix. This list is case-insensitive,
   *   default sorting order is ascending, redundant space characters are
   *   insignificant.
   *
   *   Example: `name asc,update_time, create_time desc`
   *
   *   Supported fields are:
   *
   *   - `create_time`: corresponds to time the JobTrigger was created.
   *   - `update_time`: corresponds to time the JobTrigger was last updated.
   *   - `name`: corresponds to JobTrigger's name.
   *   - `display_name`: corresponds to JobTrigger's display name.
   *   - `status`: corresponds to JobTrigger's status.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListJobTriggersResponse]{@link google.privacy.dlp.v2.ListJobTriggersResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListJobTriggersResponse]{@link google.privacy.dlp.v2.ListJobTriggersResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.projectPath('[PROJECT]');
   *
   * client.listJobTriggers({parent: formattedParent})
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
   *     return client.listJobTriggers(nextRequest, options).then(callback);
   *   }
   * }
   * client.listJobTriggers({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listJobTriggers(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listJobTriggers(request, options, callback);
  }

  /**
   * Equivalent to {@link listJobTriggers}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listJobTriggers} continuously
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
   *   The parent resource name, for example `projects/my-project-id`.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.orderBy]
   *   Optional comma separated list of triggeredJob fields to order by,
   *   followed by `asc` or `desc` postfix. This list is case-insensitive,
   *   default sorting order is ascending, redundant space characters are
   *   insignificant.
   *
   *   Example: `name asc,update_time, create_time desc`
   *
   *   Supported fields are:
   *
   *   - `create_time`: corresponds to time the JobTrigger was created.
   *   - `update_time`: corresponds to time the JobTrigger was last updated.
   *   - `name`: corresponds to JobTrigger's name.
   *   - `display_name`: corresponds to JobTrigger's display name.
   *   - `status`: corresponds to JobTrigger's status.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger} on 'data' event.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.listJobTriggersStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listJobTriggersStream(request, options) {
    options = options || {};

    return this._descriptors.page.listJobTriggers.createStream(
      this._innerApiCalls.listJobTriggers,
      request,
      options
    );
  }

  /**
   * Gets a job trigger.
   * See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the project and the triggeredJob, for example
   *   `projects/dlp-test-project/jobTriggers/53234423`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.projectJobTriggerPath('[PROJECT]', '[JOB_TRIGGER]');
   * client.getJobTrigger({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getJobTrigger(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getJobTrigger(request, options, callback);
  }

  /**
   * Deletes a job trigger.
   * See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the project and the triggeredJob, for example
   *   `projects/dlp-test-project/jobTriggers/53234423`.
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
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const name = '';
   * client.deleteJobTrigger({name: name}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteJobTrigger(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteJobTrigger(request, options, callback);
  }

  /**
   * Updates a job trigger.
   * See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the project and the triggeredJob, for example
   *   `projects/dlp-test-project/jobTriggers/53234423`.
   * @param {Object} [request.jobTrigger]
   *   New JobTrigger value.
   *
   *   This object should have the same structure as [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger}
   * @param {Object} [request.updateMask]
   *   Mask to control which fields get updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.projectJobTriggerPath('[PROJECT]', '[JOB_TRIGGER]');
   * client.updateJobTrigger({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateJobTrigger(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateJobTrigger(request, options, callback);
  }

  /**
   * Creates a job trigger to run DLP actions such as scanning storage for
   * sensitive information on a set schedule.
   * See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The parent resource name, for example projects/my-project-id.
   * @param {Object} [request.jobTrigger]
   *   The JobTrigger to create.
   *
   *   This object should have the same structure as [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger}
   * @param {string} [request.triggerId]
   *   The trigger id can contain uppercase and lowercase letters,
   *   numbers, and hyphens; that is, it must match the regular
   *   expression: `[a-zA-Z\\d-]+`. The maximum length is 100
   *   characters. Can be empty to allow the system to generate one.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [JobTrigger]{@link google.privacy.dlp.v2.JobTrigger}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * client.createJobTrigger({parent: formattedParent})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createJobTrigger(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createJobTrigger(request, options, callback);
  }

  /**
   * Creates a pre-built stored infoType to be used for inspection.
   * See https://cloud.google.com/dlp/docs/creating-stored-infotypes to
   * learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The parent resource name, for example projects/my-project-id or
   *   organizations/my-org-id.
   * @param {Object} [request.config]
   *   Configuration of the storedInfoType to create.
   *
   *   This object should have the same structure as [StoredInfoTypeConfig]{@link google.privacy.dlp.v2.StoredInfoTypeConfig}
   * @param {string} [request.storedInfoTypeId]
   *   The storedInfoType ID can contain uppercase and lowercase letters,
   *   numbers, and hyphens; that is, it must match the regular
   *   expression: `[a-zA-Z\\d-]+`. The maximum length is 100
   *   characters. Can be empty to allow the system to generate one.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [StoredInfoType]{@link google.privacy.dlp.v2.StoredInfoType}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [StoredInfoType]{@link google.privacy.dlp.v2.StoredInfoType}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   * client.createStoredInfoType({parent: formattedParent})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createStoredInfoType(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.createStoredInfoType(request, options, callback);
  }

  /**
   * Updates the stored infoType by creating a new version. The existing version
   * will continue to be used until the new version is ready.
   * See https://cloud.google.com/dlp/docs/creating-stored-infotypes to
   * learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of organization and storedInfoType to be updated, for
   *   example `organizations/433245324/storedInfoTypes/432452342` or
   *   projects/project-id/storedInfoTypes/432452342.
   * @param {Object} [request.config]
   *   Updated configuration for the storedInfoType. If not provided, a new
   *   version of the storedInfoType will be created with the existing
   *   configuration.
   *
   *   This object should have the same structure as [StoredInfoTypeConfig]{@link google.privacy.dlp.v2.StoredInfoTypeConfig}
   * @param {Object} [request.updateMask]
   *   Mask to control which fields get updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [StoredInfoType]{@link google.privacy.dlp.v2.StoredInfoType}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [StoredInfoType]{@link google.privacy.dlp.v2.StoredInfoType}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.organizationStoredInfoTypePath('[ORGANIZATION]', '[STORED_INFO_TYPE]');
   * client.updateStoredInfoType({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateStoredInfoType(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateStoredInfoType(request, options, callback);
  }

  /**
   * Gets a stored infoType.
   * See https://cloud.google.com/dlp/docs/creating-stored-infotypes to
   * learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the organization and storedInfoType to be read, for
   *   example `organizations/433245324/storedInfoTypes/432452342` or
   *   projects/project-id/storedInfoTypes/432452342.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [StoredInfoType]{@link google.privacy.dlp.v2.StoredInfoType}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [StoredInfoType]{@link google.privacy.dlp.v2.StoredInfoType}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.organizationStoredInfoTypePath('[ORGANIZATION]', '[STORED_INFO_TYPE]');
   * client.getStoredInfoType({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getStoredInfoType(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getStoredInfoType(request, options, callback);
  }

  /**
   * Lists stored infoTypes.
   * See https://cloud.google.com/dlp/docs/creating-stored-infotypes to
   * learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The parent resource name, for example projects/my-project-id or
   *   organizations/my-org-id.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.orderBy]
   *   Optional comma separated list of fields to order by,
   *   followed by `asc` or `desc` postfix. This list is case-insensitive,
   *   default sorting order is ascending, redundant space characters are
   *   insignificant.
   *
   *   Example: `name asc, display_name, create_time desc`
   *
   *   Supported fields are:
   *
   *   - `create_time`: corresponds to time the most recent version of the
   *   resource was created.
   *   - `state`: corresponds to the state of the resource.
   *   - `name`: corresponds to resource name.
   *   - `display_name`: corresponds to info type's display name.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [StoredInfoType]{@link google.privacy.dlp.v2.StoredInfoType}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListStoredInfoTypesResponse]{@link google.privacy.dlp.v2.ListStoredInfoTypesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [StoredInfoType]{@link google.privacy.dlp.v2.StoredInfoType}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [StoredInfoType]{@link google.privacy.dlp.v2.StoredInfoType} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListStoredInfoTypesResponse]{@link google.privacy.dlp.v2.ListStoredInfoTypesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   *
   * client.listStoredInfoTypes({parent: formattedParent})
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
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
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
   *     return client.listStoredInfoTypes(nextRequest, options).then(callback);
   *   }
   * }
   * client.listStoredInfoTypes({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listStoredInfoTypes(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.listStoredInfoTypes(request, options, callback);
  }

  /**
   * Equivalent to {@link listStoredInfoTypes}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listStoredInfoTypes} continuously
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
   *   The parent resource name, for example projects/my-project-id or
   *   organizations/my-org-id.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.orderBy]
   *   Optional comma separated list of fields to order by,
   *   followed by `asc` or `desc` postfix. This list is case-insensitive,
   *   default sorting order is ascending, redundant space characters are
   *   insignificant.
   *
   *   Example: `name asc, display_name, create_time desc`
   *
   *   Supported fields are:
   *
   *   - `create_time`: corresponds to time the most recent version of the
   *   resource was created.
   *   - `state`: corresponds to the state of the resource.
   *   - `name`: corresponds to resource name.
   *   - `display_name`: corresponds to info type's display name.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [StoredInfoType]{@link google.privacy.dlp.v2.StoredInfoType} on 'data' event.
   *
   * @example
   *
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.organizationPath('[ORGANIZATION]');
   * client.listStoredInfoTypesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listStoredInfoTypesStream(request, options) {
    options = options || {};

    return this._descriptors.page.listStoredInfoTypes.createStream(
      this._innerApiCalls.listStoredInfoTypes,
      request,
      options
    );
  }

  /**
   * Deletes a stored infoType.
   * See https://cloud.google.com/dlp/docs/creating-stored-infotypes to
   * learn more.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Resource name of the organization and storedInfoType to be deleted, for
   *   example `organizations/433245324/storedInfoTypes/432452342` or
   *   projects/project-id/storedInfoTypes/432452342.
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
   * const dlp = require('@google-cloud/dlp');
   *
   * const client = new dlp.v2.DlpServiceClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.organizationStoredInfoTypePath('[ORGANIZATION]', '[STORED_INFO_TYPE]');
   * client.deleteStoredInfoType({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteStoredInfoType(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteStoredInfoType(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified organization resource name string.
   *
   * @param {String} organization
   * @returns {String}
   */
  organizationPath(organization) {
    return this._pathTemplates.organizationPathTemplate.render({
      organization: organization,
    });
  }

  /**
   * Return a fully-qualified organization_deidentify_template resource name string.
   *
   * @param {String} organization
   * @param {String} deidentifyTemplate
   * @returns {String}
   */
  organizationDeidentifyTemplatePath(organization, deidentifyTemplate) {
    return this._pathTemplates.organizationDeidentifyTemplatePathTemplate.render(
      {
        organization: organization,
        deidentify_template: deidentifyTemplate,
      }
    );
  }

  /**
   * Return a fully-qualified project_deidentify_template resource name string.
   *
   * @param {String} project
   * @param {String} deidentifyTemplate
   * @returns {String}
   */
  projectDeidentifyTemplatePath(project, deidentifyTemplate) {
    return this._pathTemplates.projectDeidentifyTemplatePathTemplate.render({
      project: project,
      deidentify_template: deidentifyTemplate,
    });
  }

  /**
   * Return a fully-qualified organization_inspect_template resource name string.
   *
   * @param {String} organization
   * @param {String} inspectTemplate
   * @returns {String}
   */
  organizationInspectTemplatePath(organization, inspectTemplate) {
    return this._pathTemplates.organizationInspectTemplatePathTemplate.render({
      organization: organization,
      inspect_template: inspectTemplate,
    });
  }

  /**
   * Return a fully-qualified project_inspect_template resource name string.
   *
   * @param {String} project
   * @param {String} inspectTemplate
   * @returns {String}
   */
  projectInspectTemplatePath(project, inspectTemplate) {
    return this._pathTemplates.projectInspectTemplatePathTemplate.render({
      project: project,
      inspect_template: inspectTemplate,
    });
  }

  /**
   * Return a fully-qualified project_job_trigger resource name string.
   *
   * @param {String} project
   * @param {String} jobTrigger
   * @returns {String}
   */
  projectJobTriggerPath(project, jobTrigger) {
    return this._pathTemplates.projectJobTriggerPathTemplate.render({
      project: project,
      job_trigger: jobTrigger,
    });
  }

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
   * Return a fully-qualified dlp_job resource name string.
   *
   * @param {String} project
   * @param {String} dlpJob
   * @returns {String}
   */
  dlpJobPath(project, dlpJob) {
    return this._pathTemplates.dlpJobPathTemplate.render({
      project: project,
      dlp_job: dlpJob,
    });
  }

  /**
   * Return a fully-qualified organization_stored_info_type resource name string.
   *
   * @param {String} organization
   * @param {String} storedInfoType
   * @returns {String}
   */
  organizationStoredInfoTypePath(organization, storedInfoType) {
    return this._pathTemplates.organizationStoredInfoTypePathTemplate.render({
      organization: organization,
      stored_info_type: storedInfoType,
    });
  }

  /**
   * Return a fully-qualified project_stored_info_type resource name string.
   *
   * @param {String} project
   * @param {String} storedInfoType
   * @returns {String}
   */
  projectStoredInfoTypePath(project, storedInfoType) {
    return this._pathTemplates.projectStoredInfoTypePathTemplate.render({
      project: project,
      stored_info_type: storedInfoType,
    });
  }

  /**
   * Parse the organizationName from a organization resource.
   *
   * @param {String} organizationName
   *   A fully-qualified path representing a organization resources.
   * @returns {String} - A string representing the organization.
   */
  matchOrganizationFromOrganizationName(organizationName) {
    return this._pathTemplates.organizationPathTemplate.match(organizationName)
      .organization;
  }

  /**
   * Parse the organizationDeidentifyTemplateName from a organization_deidentify_template resource.
   *
   * @param {String} organizationDeidentifyTemplateName
   *   A fully-qualified path representing a organization_deidentify_template resources.
   * @returns {String} - A string representing the organization.
   */
  matchOrganizationFromOrganizationDeidentifyTemplateName(
    organizationDeidentifyTemplateName
  ) {
    return this._pathTemplates.organizationDeidentifyTemplatePathTemplate.match(
      organizationDeidentifyTemplateName
    ).organization;
  }

  /**
   * Parse the organizationDeidentifyTemplateName from a organization_deidentify_template resource.
   *
   * @param {String} organizationDeidentifyTemplateName
   *   A fully-qualified path representing a organization_deidentify_template resources.
   * @returns {String} - A string representing the deidentify_template.
   */
  matchDeidentifyTemplateFromOrganizationDeidentifyTemplateName(
    organizationDeidentifyTemplateName
  ) {
    return this._pathTemplates.organizationDeidentifyTemplatePathTemplate.match(
      organizationDeidentifyTemplateName
    ).deidentify_template;
  }

  /**
   * Parse the projectDeidentifyTemplateName from a project_deidentify_template resource.
   *
   * @param {String} projectDeidentifyTemplateName
   *   A fully-qualified path representing a project_deidentify_template resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromProjectDeidentifyTemplateName(projectDeidentifyTemplateName) {
    return this._pathTemplates.projectDeidentifyTemplatePathTemplate.match(
      projectDeidentifyTemplateName
    ).project;
  }

  /**
   * Parse the projectDeidentifyTemplateName from a project_deidentify_template resource.
   *
   * @param {String} projectDeidentifyTemplateName
   *   A fully-qualified path representing a project_deidentify_template resources.
   * @returns {String} - A string representing the deidentify_template.
   */
  matchDeidentifyTemplateFromProjectDeidentifyTemplateName(
    projectDeidentifyTemplateName
  ) {
    return this._pathTemplates.projectDeidentifyTemplatePathTemplate.match(
      projectDeidentifyTemplateName
    ).deidentify_template;
  }

  /**
   * Parse the organizationInspectTemplateName from a organization_inspect_template resource.
   *
   * @param {String} organizationInspectTemplateName
   *   A fully-qualified path representing a organization_inspect_template resources.
   * @returns {String} - A string representing the organization.
   */
  matchOrganizationFromOrganizationInspectTemplateName(
    organizationInspectTemplateName
  ) {
    return this._pathTemplates.organizationInspectTemplatePathTemplate.match(
      organizationInspectTemplateName
    ).organization;
  }

  /**
   * Parse the organizationInspectTemplateName from a organization_inspect_template resource.
   *
   * @param {String} organizationInspectTemplateName
   *   A fully-qualified path representing a organization_inspect_template resources.
   * @returns {String} - A string representing the inspect_template.
   */
  matchInspectTemplateFromOrganizationInspectTemplateName(
    organizationInspectTemplateName
  ) {
    return this._pathTemplates.organizationInspectTemplatePathTemplate.match(
      organizationInspectTemplateName
    ).inspect_template;
  }

  /**
   * Parse the projectInspectTemplateName from a project_inspect_template resource.
   *
   * @param {String} projectInspectTemplateName
   *   A fully-qualified path representing a project_inspect_template resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromProjectInspectTemplateName(projectInspectTemplateName) {
    return this._pathTemplates.projectInspectTemplatePathTemplate.match(
      projectInspectTemplateName
    ).project;
  }

  /**
   * Parse the projectInspectTemplateName from a project_inspect_template resource.
   *
   * @param {String} projectInspectTemplateName
   *   A fully-qualified path representing a project_inspect_template resources.
   * @returns {String} - A string representing the inspect_template.
   */
  matchInspectTemplateFromProjectInspectTemplateName(
    projectInspectTemplateName
  ) {
    return this._pathTemplates.projectInspectTemplatePathTemplate.match(
      projectInspectTemplateName
    ).inspect_template;
  }

  /**
   * Parse the projectJobTriggerName from a project_job_trigger resource.
   *
   * @param {String} projectJobTriggerName
   *   A fully-qualified path representing a project_job_trigger resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromProjectJobTriggerName(projectJobTriggerName) {
    return this._pathTemplates.projectJobTriggerPathTemplate.match(
      projectJobTriggerName
    ).project;
  }

  /**
   * Parse the projectJobTriggerName from a project_job_trigger resource.
   *
   * @param {String} projectJobTriggerName
   *   A fully-qualified path representing a project_job_trigger resources.
   * @returns {String} - A string representing the job_trigger.
   */
  matchJobTriggerFromProjectJobTriggerName(projectJobTriggerName) {
    return this._pathTemplates.projectJobTriggerPathTemplate.match(
      projectJobTriggerName
    ).job_trigger;
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
   * Parse the dlpJobName from a dlp_job resource.
   *
   * @param {String} dlpJobName
   *   A fully-qualified path representing a dlp_job resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromDlpJobName(dlpJobName) {
    return this._pathTemplates.dlpJobPathTemplate.match(dlpJobName).project;
  }

  /**
   * Parse the dlpJobName from a dlp_job resource.
   *
   * @param {String} dlpJobName
   *   A fully-qualified path representing a dlp_job resources.
   * @returns {String} - A string representing the dlp_job.
   */
  matchDlpJobFromDlpJobName(dlpJobName) {
    return this._pathTemplates.dlpJobPathTemplate.match(dlpJobName).dlp_job;
  }

  /**
   * Parse the organizationStoredInfoTypeName from a organization_stored_info_type resource.
   *
   * @param {String} organizationStoredInfoTypeName
   *   A fully-qualified path representing a organization_stored_info_type resources.
   * @returns {String} - A string representing the organization.
   */
  matchOrganizationFromOrganizationStoredInfoTypeName(
    organizationStoredInfoTypeName
  ) {
    return this._pathTemplates.organizationStoredInfoTypePathTemplate.match(
      organizationStoredInfoTypeName
    ).organization;
  }

  /**
   * Parse the organizationStoredInfoTypeName from a organization_stored_info_type resource.
   *
   * @param {String} organizationStoredInfoTypeName
   *   A fully-qualified path representing a organization_stored_info_type resources.
   * @returns {String} - A string representing the stored_info_type.
   */
  matchStoredInfoTypeFromOrganizationStoredInfoTypeName(
    organizationStoredInfoTypeName
  ) {
    return this._pathTemplates.organizationStoredInfoTypePathTemplate.match(
      organizationStoredInfoTypeName
    ).stored_info_type;
  }

  /**
   * Parse the projectStoredInfoTypeName from a project_stored_info_type resource.
   *
   * @param {String} projectStoredInfoTypeName
   *   A fully-qualified path representing a project_stored_info_type resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromProjectStoredInfoTypeName(projectStoredInfoTypeName) {
    return this._pathTemplates.projectStoredInfoTypePathTemplate.match(
      projectStoredInfoTypeName
    ).project;
  }

  /**
   * Parse the projectStoredInfoTypeName from a project_stored_info_type resource.
   *
   * @param {String} projectStoredInfoTypeName
   *   A fully-qualified path representing a project_stored_info_type resources.
   * @returns {String} - A string representing the stored_info_type.
   */
  matchStoredInfoTypeFromProjectStoredInfoTypeName(projectStoredInfoTypeName) {
    return this._pathTemplates.projectStoredInfoTypePathTemplate.match(
      projectStoredInfoTypeName
    ).stored_info_type;
  }
}

module.exports = DlpServiceClient;
