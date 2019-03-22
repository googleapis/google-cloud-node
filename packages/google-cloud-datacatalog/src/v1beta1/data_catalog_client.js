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

const gapicConfig = require('./data_catalog_client_config.json');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Cloud Data Catalog is a service that allows clients to discover,
 * manage, and understand their Google Cloud data resources.
 *
 * To learn more about concepts and find how-to guides see
 * https://cloud.google.com/data-catalog/docs/.
 *
 * @class
 * @memberof v1beta1
 */
class DataCatalogClient {
  /**
   * Construct an instance of DataCatalogClient.
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
        'google/cloud/datacatalog/v1beta1/datacatalog.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      projectPathTemplate: new gax.PathTemplate(
        'projects/{project}'
      ),
      locationPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}'
      ),
      entryGroupPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/entryGroups/{entry_group}'
      ),
      entryPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}'
      ),
      tagPathTemplate: new gax.PathTemplate(
        'projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}/tags/{tag}'
      ),
      tagTemplatePathTemplate: new gax.PathTemplate(
        'projects/{project}/tagTemplates/{tag_template}'
      ),
      fieldPathTemplate: new gax.PathTemplate(
        'projects/{project}/tagTemplates/{tag_template}/fields/{field}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this._descriptors.page = {
      searchCatalog: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'results'
      ),
      listTags: new gax.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'tags'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.datacatalog.v1beta1.DataCatalog',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.datacatalog.v1beta1.DataCatalog.
    const dataCatalogStub = gaxGrpc.createStub(
      protos.google.cloud.datacatalog.v1beta1.DataCatalog,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const dataCatalogStubMethods = [
      'searchCatalog',
      'createEntryGroup',
      'getEntryGroup',
      'deleteEntryGroup',
      'createEntry',
      'updateEntry',
      'deleteEntry',
      'getEntry',
      'lookupEntry',
      'createTagTemplate',
      'getTagTemplate',
      'updateTagTemplate',
      'deleteTagTemplate',
      'createTagTemplateField',
      'updateTagTemplateField',
      'renameTagTemplateField',
      'deleteTagTemplateField',
      'createTag',
      'updateTag',
      'deleteTag',
      'listTags',
      'setIamPolicy',
      'getIamPolicy',
      'testIamPermissions',
    ];
    for (const methodName of dataCatalogStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        dataCatalogStub.then(
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
    return 'datacatalog.googleapis.com';
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
   * Searches Cloud Data Catalog for multiple resources like entries, tags that
   * match a query.
   *
   * This is a custom method
   * (https://cloud.google.com/apis/design/custom_methods) and does not return
   * the complete resource, only the resource identifier and high level
   * fields. Clients can subsequentally call Get methods.
   *
   * See [Cloud Data Catalog Search
   * Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference)
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.query
   *   Required. The query string in search query syntax. The query must be
   *   non-empty.
   *
   *   Query strings can be simple as "x" or more qualified as:
   *
   *   * name:x
   *   * column:x
   *   * desc:x OR description:y
   *   * column_desc:x OR column_description:x
   *
   *   Note: Query tokens need to have a minimum of 3 characters for substring
   *   matching to work correctly. See [Cloud Data Catalog Search
   *   Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.
   * @param {string[]} [request.scopeOrgIds]
   *   List of organizations to search within.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.orderBy]
   *   Specifies the ordering of results following syntax at
   *   https://cloud.google.com/apis/design/design_patterns#sorting_order. We only
   *   support ordering by a single metrics field and currently supported choices
   *   are:
   *
   *    * 'relevance'
   *    * 'last_access_timestamp'
   *    * 'last_modified_timestamp' and
   *    * 'title'.
   * @param {boolean} [request.excludeGcpPublicDatasets]
   *   To exclude/include content from Google Cloud Platform public datasets in
   *   the search results. Google Cloud Platform public datasets are
   *   https://cloud.google.com/public-datasets/. By default, content from Google
   *   Cloud Platform public datasets are included.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Array, ?Object, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [SearchCatalogResult]{@link google.cloud.datacatalog.v1beta1.SearchCatalogResult}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [SearchCatalogResponse]{@link google.cloud.datacatalog.v1beta1.SearchCatalogResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [SearchCatalogResult]{@link google.cloud.datacatalog.v1beta1.SearchCatalogResult}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [SearchCatalogResult]{@link google.cloud.datacatalog.v1beta1.SearchCatalogResult} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [SearchCatalogResponse]{@link google.cloud.datacatalog.v1beta1.SearchCatalogResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const query = '';
   *
   * client.searchCatalog({query: query})
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
   * const query = '';
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
   *     return client.searchCatalog(nextRequest, options).then(callback);
   *   }
   * }
   * client.searchCatalog({query: query}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  searchCatalog(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.searchCatalog(request, options, callback);
  }

  /**
   * Equivalent to {@link searchCatalog}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link searchCatalog} continuously
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
   * @param {string} request.query
   *   Required. The query string in search query syntax. The query must be
   *   non-empty.
   *
   *   Query strings can be simple as "x" or more qualified as:
   *
   *   * name:x
   *   * column:x
   *   * desc:x OR description:y
   *   * column_desc:x OR column_description:x
   *
   *   Note: Query tokens need to have a minimum of 3 characters for substring
   *   matching to work correctly. See [Cloud Data Catalog Search
   *   Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.
   * @param {string[]} [request.scopeOrgIds]
   *   List of organizations to search within.
   * @param {number} [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param {string} [request.orderBy]
   *   Specifies the ordering of results following syntax at
   *   https://cloud.google.com/apis/design/design_patterns#sorting_order. We only
   *   support ordering by a single metrics field and currently supported choices
   *   are:
   *
   *    * 'relevance'
   *    * 'last_access_timestamp'
   *    * 'last_modified_timestamp' and
   *    * 'title'.
   * @param {boolean} [request.excludeGcpPublicDatasets]
   *   To exclude/include content from Google Cloud Platform public datasets in
   *   the search results. Google Cloud Platform public datasets are
   *   https://cloud.google.com/public-datasets/. By default, content from Google
   *   Cloud Platform public datasets are included.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @returns {Stream}
   *   An object stream which emits an object representing [SearchCatalogResult]{@link google.cloud.datacatalog.v1beta1.SearchCatalogResult} on 'data' event.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const query = '';
   * client.searchCatalogStream({query: query})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  searchCatalogStream(request, options) {
    options = options || {};

    return this._descriptors.page.searchCatalog.createStream(
      this._innerApiCalls.searchCatalog,
      request,
      options
    );
  };

  /**
   * Creates an EntryGroup.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the project this entry group is in. Example:
   *   "projects/{project_id}/locations/{location}".
   * @param {string} request.entryGroupId
   *   Required. The id of the entry group to create.
   * @param {Object} request.entryGroup
   *   The group to create.
   *
   *   This object should have the same structure as [EntryGroup]{@link google.cloud.datacatalog.v1beta1.EntryGroup}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [EntryGroup]{@link google.cloud.datacatalog.v1beta1.EntryGroup}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [EntryGroup]{@link google.cloud.datacatalog.v1beta1.EntryGroup}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const entryGroupId = '';
   * const entryGroup = {};
   * const request = {
   *   parent: formattedParent,
   *   entryGroupId: entryGroupId,
   *   entryGroup: entryGroup,
   * };
   * client.createEntryGroup(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createEntryGroup(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'parent': request.parent
      });

    return this._innerApiCalls.createEntryGroup(request, options, callback);
  }

  /**
   * Gets an EntryGroup.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the entry group. For example,
   *   "projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}".
   * @param {Object} [request.readMask]
   *   If the FieldMask is not set, all entry contents are returned.
   *   If the FieldMask is set, only fields specified by the mask are returned.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [EntryGroup]{@link google.cloud.datacatalog.v1beta1.EntryGroup}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [EntryGroup]{@link google.cloud.datacatalog.v1beta1.EntryGroup}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.entryGroupPath('[PROJECT]', '[LOCATION]', '[ENTRY_GROUP]');
   * client.getEntryGroup({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getEntryGroup(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'name': request.name
      });

    return this._innerApiCalls.getEntryGroup(request, options, callback);
  }

  /**
   * Deletes an EntryGroup. Only entry groups that do not contain entries can be
   * deleted.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the entry group. For example,
   *   "projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}".
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
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.entryGroupPath('[PROJECT]', '[LOCATION]', '[ENTRY_GROUP]');
   * client.deleteEntryGroup({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteEntryGroup(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'name': request.name
      });

    return this._innerApiCalls.deleteEntryGroup(request, options, callback);
  }

  /**
   * Creates an entry. Currently only entries of FILESET type can be created.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the entry group this entry is in. Example:
   *   "projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}".
   * @param {string} request.entryId
   *   Required. The id of the entry to create.
   * @param {Object} request.entry
   *   The entry to create.
   *
   *   This object should have the same structure as [Entry]{@link google.cloud.datacatalog.v1beta1.Entry}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Entry]{@link google.cloud.datacatalog.v1beta1.Entry}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Entry]{@link google.cloud.datacatalog.v1beta1.Entry}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.entryGroupPath('[PROJECT]', '[LOCATION]', '[ENTRY_GROUP]');
   * const entryId = '';
   * const entry = {};
   * const request = {
   *   parent: formattedParent,
   *   entryId: entryId,
   *   entry: entry,
   * };
   * client.createEntry(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createEntry(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'parent': request.parent
      });

    return this._innerApiCalls.createEntry(request, options, callback);
  }

  /**
   * Updates an existing entry.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.entry
   *   The updated Entry.
   *
   *   This object should have the same structure as [Entry]{@link google.cloud.datacatalog.v1beta1.Entry}
   * @param {Object} [request.updateMask]
   *   The fields to update on the entry.  If absent or empty, all modifiable
   *   fields are updated.
   *
   *   Modifiable fields in synced entries:
   *
   *   1. schema (Pub/Sub topics only)
   *
   *   Modifiable fields in native entries:
   *
   *   1. display_name
   *   2. description
   *   3. schema
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Entry]{@link google.cloud.datacatalog.v1beta1.Entry}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Entry]{@link google.cloud.datacatalog.v1beta1.Entry}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const entry = {};
   * client.updateEntry({entry: entry})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateEntry(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'entry.name': request.entry.name
      });

    return this._innerApiCalls.updateEntry(request, options, callback);
  }

  /**
   * Deletes an existing entry.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the entry. For example,
   *   "projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}".
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
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.entryPath('[PROJECT]', '[LOCATION]', '[ENTRY_GROUP]', '[ENTRY]');
   * client.deleteEntry({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteEntry(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'name': request.name
      });

    return this._innerApiCalls.deleteEntry(request, options, callback);
  }

  /**
   * Gets an entry.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the entry. For example,
   *   "projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Entry]{@link google.cloud.datacatalog.v1beta1.Entry}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Entry]{@link google.cloud.datacatalog.v1beta1.Entry}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.entryPath('[PROJECT]', '[LOCATION]', '[ENTRY_GROUP]', '[ENTRY]');
   * client.getEntry({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getEntry(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'name': request.name
      });

    return this._innerApiCalls.getEntry(request, options, callback);
  }

  /**
   * Get an entry by target resource name. This method allows clients to use
   * the resource name from the source Google Cloud Platform service to get the
   * Cloud Data Catalog Entry.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.linkedResource]
   *   The full name of the Google Cloud Platform resource the Data Catalog
   *   entry represents. See:
   *   https://cloud.google.com/apis/design/resource_names#full_resource_name
   *   Example:
   *   "//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId".
   * @param {string} [request.sqlResource]
   *   The SQL name of the entry. Example:
   *
   *   1. cloud_pubsub.project_id.topic_id
   *   2. bigquery.project_id.dataset_id.table_id
   *   3. datacatalog.project_id.location_id.entry_group_id.entry_id
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Entry]{@link google.cloud.datacatalog.v1beta1.Entry}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Entry]{@link google.cloud.datacatalog.v1beta1.Entry}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.lookupEntry({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  lookupEntry(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.lookupEntry(request, options, callback);
  }

  /**
   * Creates a tag template.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the project this template is in. Example:
   *   "projects/{project_id}".
   * @param {string} request.tagTemplateId
   *   Required. The id of the tag template to create.
   * @param {Object} request.tagTemplate
   *   The tag template to create.
   *
   *   This object should have the same structure as [TagTemplate]{@link google.cloud.datacatalog.v1beta1.TagTemplate}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TagTemplate]{@link google.cloud.datacatalog.v1beta1.TagTemplate}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TagTemplate]{@link google.cloud.datacatalog.v1beta1.TagTemplate}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.projectPath('[PROJECT]');
   * const tagTemplateId = '';
   * const tagTemplate = {};
   * const request = {
   *   parent: formattedParent,
   *   tagTemplateId: tagTemplateId,
   *   tagTemplate: tagTemplate,
   * };
   * client.createTagTemplate(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createTagTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'parent': request.parent
      });

    return this._innerApiCalls.createTagTemplate(request, options, callback);
  }

  /**
   * Gets a tag template.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the tag template. For example,
   *   "projects/{project_id}/tagTemplates/{tag_template_id}".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TagTemplate]{@link google.cloud.datacatalog.v1beta1.TagTemplate}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TagTemplate]{@link google.cloud.datacatalog.v1beta1.TagTemplate}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.tagTemplatePath('[PROJECT]', '[TAG_TEMPLATE]');
   * client.getTagTemplate({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getTagTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'name': request.name
      });

    return this._innerApiCalls.getTagTemplate(request, options, callback);
  }

  /**
   * Updates a tag template. This method cannot be used to update the fields of
   * a template. The tag template fields are represented as separate resources
   * and should be updated using their own create/update/delete methods.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.tagTemplate
   *   The template to update.
   *
   *   This object should have the same structure as [TagTemplate]{@link google.cloud.datacatalog.v1beta1.TagTemplate}
   * @param {Object} [request.updateMask]
   *   The field mask specifies the parts of the template to overwrite.
   *
   *   Allowed fields:
   *
   *     * display_name
   *
   *   If the field mask is omitted, all of the allowed fields above will be
   *   updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TagTemplate]{@link google.cloud.datacatalog.v1beta1.TagTemplate}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TagTemplate]{@link google.cloud.datacatalog.v1beta1.TagTemplate}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const tagTemplate = {};
   * client.updateTagTemplate({tagTemplate: tagTemplate})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateTagTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'tag_template.name': request.tagTemplate.name
      });

    return this._innerApiCalls.updateTagTemplate(request, options, callback);
  }

  /**
   * Deletes a tag template and all tags using the template.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the tag template to delete. For example,
   *   "projects/{project_id}/tagTemplates/{tag_template_id}".
   * @param {boolean} [request.force]
   *   Set this field to true to force the deletion of all tags using this
   *   template. If this field is set to false (the default value) and the tag
   *   template is already in use, then this RPC will return a Precondition Failed
   *   error.
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
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.tagTemplatePath('[PROJECT]', '[TAG_TEMPLATE]');
   * client.deleteTagTemplate({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteTagTemplate(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'name': request.name
      });

    return this._innerApiCalls.deleteTagTemplate(request, options, callback);
  }

  /**
   * Creates a field in a tag template.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the project this template is in. Example:
   *   "projects/{project_id}/tagTemplates/{tag_template_id}".
   * @param {string} request.tagTemplateFieldId
   *   Required. The id of the tag template field to create.
   *   Field ids can contain letters (both uppercase and lowercase), numbers
   *   (0-9), underscores (_) and dashes (-). Field ids must be at least 1
   *   character long and at most 128 characters long. Field ids must also be
   *   unique to their template.
   * @param {Object} request.tagTemplateField
   *   Required. The tag template field to create.
   *
   *   This object should have the same structure as [TagTemplateField]{@link google.cloud.datacatalog.v1beta1.TagTemplateField}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TagTemplateField]{@link google.cloud.datacatalog.v1beta1.TagTemplateField}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TagTemplateField]{@link google.cloud.datacatalog.v1beta1.TagTemplateField}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.tagTemplatePath('[PROJECT]', '[TAG_TEMPLATE]');
   * const tagTemplateFieldId = '';
   * const tagTemplateField = {};
   * const request = {
   *   parent: formattedParent,
   *   tagTemplateFieldId: tagTemplateFieldId,
   *   tagTemplateField: tagTemplateField,
   * };
   * client.createTagTemplateField(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createTagTemplateField(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'parent': request.parent
      });

    return this._innerApiCalls.createTagTemplateField(request, options, callback);
  }

  /**
   * Updates a field in a tag template. This method cannot be used to update the
   * field type.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the tag template field. For example,
   *   "projects/{project_id}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}".
   * @param {Object} request.tagTemplateField
   *   Required. The template to update.
   *
   *   This object should have the same structure as [TagTemplateField]{@link google.cloud.datacatalog.v1beta1.TagTemplateField}
   * @param {Object} [request.updateMask]
   *   The field mask specifies the parts of the template to overwrite.
   *   Allowed fields:
   *
   *     * display_name
   *     * type.enum_type
   *
   *   If the field mask is omitted, all of the allowed fields above will be
   *   updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TagTemplateField]{@link google.cloud.datacatalog.v1beta1.TagTemplateField}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TagTemplateField]{@link google.cloud.datacatalog.v1beta1.TagTemplateField}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.fieldPath('[PROJECT]', '[TAG_TEMPLATE]', '[FIELD]');
   * const tagTemplateField = {};
   * const request = {
   *   name: formattedName,
   *   tagTemplateField: tagTemplateField,
   * };
   * client.updateTagTemplateField(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateTagTemplateField(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'name': request.name
      });

    return this._innerApiCalls.updateTagTemplateField(request, options, callback);
  }

  /**
   * Renames a field in a tag template.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the tag template. For example,
   *   "projects/{project_id}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}".
   * @param {string} request.newTagTemplateFieldId
   *   Required. The new id of this tag template field. For example,
   *   "my_new_field".
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TagTemplateField]{@link google.cloud.datacatalog.v1beta1.TagTemplateField}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TagTemplateField]{@link google.cloud.datacatalog.v1beta1.TagTemplateField}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.fieldPath('[PROJECT]', '[TAG_TEMPLATE]', '[FIELD]');
   * const newTagTemplateFieldId = '';
   * const request = {
   *   name: formattedName,
   *   newTagTemplateFieldId: newTagTemplateFieldId,
   * };
   * client.renameTagTemplateField(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  renameTagTemplateField(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'name': request.name
      });

    return this._innerApiCalls.renameTagTemplateField(request, options, callback);
  }

  /**
   * Deletes a field in a tag template and all uses of that field.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the tag template field to delete. For example,
   *   "projects/{project_id}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}".
   * @param {boolean} [request.force]
   *   Set this field to true to force the deletion of all usages of this tag
   *   field. If this field is set to false (the default value) and the tag
   *   template field is already in use, then this RPC will return a Precondition
   *   Failed error.
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
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.fieldPath('[PROJECT]', '[TAG_TEMPLATE]', '[FIELD]');
   * client.deleteTagTemplateField({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteTagTemplateField(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'name': request.name
      });

    return this._innerApiCalls.deleteTagTemplateField(request, options, callback);
  }

  /**
   * Creates a tag on an Entry.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *   The name of the resource to attach this tag to. Tags can be attached to
   *   Entries. (example:
   *   "projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}").
   * @param {Object} request.tag
   *   The tag to create.
   *
   *   This object should have the same structure as [Tag]{@link google.cloud.datacatalog.v1beta1.Tag}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Tag]{@link google.cloud.datacatalog.v1beta1.Tag}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Tag]{@link google.cloud.datacatalog.v1beta1.Tag}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.entryPath('[PROJECT]', '[LOCATION]', '[ENTRY_GROUP]', '[ENTRY]');
   * const tag = {};
   * const request = {
   *   parent: formattedParent,
   *   tag: tag,
   * };
   * client.createTag(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createTag(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'parent': request.parent
      });

    return this._innerApiCalls.createTag(request, options, callback);
  }

  /**
   * Updates an existing tag.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} request.tag
   *   The updated tag.
   *
   *   This object should have the same structure as [Tag]{@link google.cloud.datacatalog.v1beta1.Tag}
   * @param {Object} [request.updateMask]
   *   The fields to update on the Tag.  If absent or empty, all modifiable fields
   *   are updated. Currently the only modifiable field is the field `fields`.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Tag]{@link google.cloud.datacatalog.v1beta1.Tag}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Tag]{@link google.cloud.datacatalog.v1beta1.Tag}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const tag = {};
   * client.updateTag({tag: tag})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateTag(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'tag.name': request.tag.name
      });

    return this._innerApiCalls.updateTag(request, options, callback);
  }

  /**
   * Deletes a tag.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The name of the tag to delete. For example,
   *   "projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id}".
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
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.tagPath('[PROJECT]', '[LOCATION]', '[ENTRY_GROUP]', '[ENTRY]', '[TAG]');
   * client.deleteTag({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteTag(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'name': request.name
      });

    return this._innerApiCalls.deleteTag(request, options, callback);
  }

  /**
   * Lists tags on an entry.
   * This method can be used to fetch all tags for an
   * Entry or
   * EntryGroup. It can also be
   * limited to a TagTemplate
   * within an Entry or EntryGroup.
   *
   * Clients can specify filters to limit the results.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required.
   *   The name of the Data Catalog resource to list the tags of. The
   *   resource could be an Entry or a
   *   Dataset.
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
   *   The second parameter to the callback is Array of [Tag]{@link google.cloud.datacatalog.v1beta1.Tag}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListTagsResponse]{@link google.cloud.datacatalog.v1beta1.ListTagsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of [Tag]{@link google.cloud.datacatalog.v1beta1.Tag}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Tag]{@link google.cloud.datacatalog.v1beta1.Tag} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListTagsResponse]{@link google.cloud.datacatalog.v1beta1.ListTagsResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.entryPath('[PROJECT]', '[LOCATION]', '[ENTRY_GROUP]', '[ENTRY]');
   *
   * client.listTags({parent: formattedParent})
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
   * const formattedParent = client.entryPath('[PROJECT]', '[LOCATION]', '[ENTRY_GROUP]', '[ENTRY]');
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
   *     return client.listTags(nextRequest, options).then(callback);
   *   }
   * }
   * client.listTags({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listTags(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'parent': request.parent
      });

    return this._innerApiCalls.listTags(request, options, callback);
  }

  /**
   * Equivalent to {@link listTags}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listTags} continuously
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
   *   The name of the Data Catalog resource to list the tags of. The
   *   resource could be an Entry or a
   *   Dataset.
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
   *   An object stream which emits an object representing [Tag]{@link google.cloud.datacatalog.v1beta1.Tag} on 'data' event.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.entryPath('[PROJECT]', '[LOCATION]', '[ENTRY_GROUP]', '[ENTRY]');
   * client.listTagsStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listTagsStream(request, options) {
    options = options || {};

    return this._descriptors.page.listTags.createStream(
      this._innerApiCalls.listTags,
      request,
      options
    );
  };

  /**
   * Sets the access control policy for a resource. Replaces any existing
   * policy.
   * Supported resources are:
   *   - tag templates.
   * Note, this method cannot be used to manage policies for BigQuery, Cloud
   * Pub/Sub and any external Google Cloud Platform resources synced to Cloud
   * Data Catalog.
   *
   * Callers must have Google IAM permission
   * `datacatalog.tagTemplates.setIamPolicy` to set policies on tag templates.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.resource
   *   REQUIRED: The resource for which the policy is being specified.
   *   `resource` is usually specified as a path. For example, a Project
   *   resource is specified as `projects/{project}`.
   * @param {Object} request.policy
   *   REQUIRED: The complete policy to be applied to the `resource`. The size of
   *   the policy is limited to a few 10s of KB. An empty policy is a
   *   valid policy but certain Cloud Platform services (such as Projects)
   *   might reject them.
   *
   *   This object should have the same structure as [Policy]{@link google.iam.v1.Policy}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Policy]{@link google.iam.v1.Policy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Policy]{@link google.iam.v1.Policy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.tagTemplatePath('[PROJECT]', '[TAG_TEMPLATE]');
   * const policy = {};
   * const request = {
   *   resource: formattedResource,
   *   policy: policy,
   * };
   * client.setIamPolicy(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setIamPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'resource': request.resource
      });

    return this._innerApiCalls.setIamPolicy(request, options, callback);
  }

  /**
   * Gets the access control policy for a resource. A `NOT_FOUND` error
   * is returned if the resource does not exist. An empty policy is returned
   * if the resource exists but does not have a policy set on it.
   *
   * Supported resource are:
   *   - tag templates.
   * Note, this method cannot be used to manage policies for BigQuery, Cloud
   * Pub/Sub and any external Google Cloud Platform resources synced to Cloud
   * Data Catalog.
   *
   * Caller must have Google IAM `datacatalog.tagTemplates.getIamPolicy`
   * permission on the tag template resource.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.resource
   *   REQUIRED: The resource for which the policy is being requested.
   *   `resource` is usually specified as a path. For example, a Project
   *   resource is specified as `projects/{project}`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Policy]{@link google.iam.v1.Policy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Policy]{@link google.iam.v1.Policy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.tagTemplatePath('[PROJECT]', '[TAG_TEMPLATE]');
   * client.getIamPolicy({resource: formattedResource})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getIamPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'resource': request.resource
      });

    return this._innerApiCalls.getIamPolicy(request, options, callback);
  }

  /**
   * Returns the caller's permissions on a resource.
   * If the resource does not exist, an empty set of permissions is returned
   * (a `NOT_FOUND` error is not returned).
   *
   * Supported resource are:
   *   - tag templates.
   * Note, this method cannot be used to manage policies for BigQuery, Cloud
   * Pub/Sub and any external Google Cloud Platform resources synced to Cloud
   * Data Catalog.
   *
   * A caller is not required to have Google IAM permission to make this
   * request.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.resource
   *   REQUIRED: The resource for which the policy detail is being requested.
   *   `resource` is usually specified as a path. For example, a Project
   *   resource is specified as `projects/{project}`.
   * @param {string[]} request.permissions
   *   The set of permissions to check for the `resource`. Permissions with
   *   wildcards (such as '*' or 'storage.*') are not allowed. For more
   *   information see
   *   [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TestIamPermissionsResponse]{@link google.iam.v1.TestIamPermissionsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TestIamPermissionsResponse]{@link google.iam.v1.TestIamPermissionsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('datacatalog.v1beta1');
   *
   * const client = new datacatalog.v1beta1.DataCatalogClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.tagTemplatePath('[PROJECT]', '[TAG_TEMPLATE]');
   * const permissions = [];
   * const request = {
   *   resource: formattedResource,
   *   permissions: permissions,
   * };
   * client.testIamPermissions(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  testIamPermissions(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      gax.routingHeader.fromParams({
        'resource': request.resource
      });

    return this._innerApiCalls.testIamPermissions(request, options, callback);
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
   * Return a fully-qualified entry_group resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} entryGroup
   * @returns {String}
   */
  entryGroupPath(project, location, entryGroup) {
    return this._pathTemplates.entryGroupPathTemplate.render({
      project: project,
      location: location,
      entry_group: entryGroup,
    });
  }

  /**
   * Return a fully-qualified entry resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} entryGroup
   * @param {String} entry
   * @returns {String}
   */
  entryPath(project, location, entryGroup, entry) {
    return this._pathTemplates.entryPathTemplate.render({
      project: project,
      location: location,
      entry_group: entryGroup,
      entry: entry,
    });
  }

  /**
   * Return a fully-qualified tag resource name string.
   *
   * @param {String} project
   * @param {String} location
   * @param {String} entryGroup
   * @param {String} entry
   * @param {String} tag
   * @returns {String}
   */
  tagPath(project, location, entryGroup, entry, tag) {
    return this._pathTemplates.tagPathTemplate.render({
      project: project,
      location: location,
      entry_group: entryGroup,
      entry: entry,
      tag: tag,
    });
  }

  /**
   * Return a fully-qualified tag_template resource name string.
   *
   * @param {String} project
   * @param {String} tagTemplate
   * @returns {String}
   */
  tagTemplatePath(project, tagTemplate) {
    return this._pathTemplates.tagTemplatePathTemplate.render({
      project: project,
      tag_template: tagTemplate,
    });
  }

  /**
   * Return a fully-qualified field resource name string.
   *
   * @param {String} project
   * @param {String} tagTemplate
   * @param {String} field
   * @returns {String}
   */
  fieldPath(project, tagTemplate, field) {
    return this._pathTemplates.fieldPathTemplate.render({
      project: project,
      tag_template: tagTemplate,
      field: field,
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
    return this._pathTemplates.projectPathTemplate
      .match(projectName)
      .project;
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
   * Parse the entryGroupName from a entry_group resource.
   *
   * @param {String} entryGroupName
   *   A fully-qualified path representing a entry_group resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromEntryGroupName(entryGroupName) {
    return this._pathTemplates.entryGroupPathTemplate
      .match(entryGroupName)
      .project;
  }

  /**
   * Parse the entryGroupName from a entry_group resource.
   *
   * @param {String} entryGroupName
   *   A fully-qualified path representing a entry_group resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromEntryGroupName(entryGroupName) {
    return this._pathTemplates.entryGroupPathTemplate
      .match(entryGroupName)
      .location;
  }

  /**
   * Parse the entryGroupName from a entry_group resource.
   *
   * @param {String} entryGroupName
   *   A fully-qualified path representing a entry_group resources.
   * @returns {String} - A string representing the entry_group.
   */
  matchEntryGroupFromEntryGroupName(entryGroupName) {
    return this._pathTemplates.entryGroupPathTemplate
      .match(entryGroupName)
      .entry_group;
  }

  /**
   * Parse the entryName from a entry resource.
   *
   * @param {String} entryName
   *   A fully-qualified path representing a entry resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromEntryName(entryName) {
    return this._pathTemplates.entryPathTemplate
      .match(entryName)
      .project;
  }

  /**
   * Parse the entryName from a entry resource.
   *
   * @param {String} entryName
   *   A fully-qualified path representing a entry resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromEntryName(entryName) {
    return this._pathTemplates.entryPathTemplate
      .match(entryName)
      .location;
  }

  /**
   * Parse the entryName from a entry resource.
   *
   * @param {String} entryName
   *   A fully-qualified path representing a entry resources.
   * @returns {String} - A string representing the entry_group.
   */
  matchEntryGroupFromEntryName(entryName) {
    return this._pathTemplates.entryPathTemplate
      .match(entryName)
      .entry_group;
  }

  /**
   * Parse the entryName from a entry resource.
   *
   * @param {String} entryName
   *   A fully-qualified path representing a entry resources.
   * @returns {String} - A string representing the entry.
   */
  matchEntryFromEntryName(entryName) {
    return this._pathTemplates.entryPathTemplate
      .match(entryName)
      .entry;
  }

  /**
   * Parse the tagName from a tag resource.
   *
   * @param {String} tagName
   *   A fully-qualified path representing a tag resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromTagName(tagName) {
    return this._pathTemplates.tagPathTemplate
      .match(tagName)
      .project;
  }

  /**
   * Parse the tagName from a tag resource.
   *
   * @param {String} tagName
   *   A fully-qualified path representing a tag resources.
   * @returns {String} - A string representing the location.
   */
  matchLocationFromTagName(tagName) {
    return this._pathTemplates.tagPathTemplate
      .match(tagName)
      .location;
  }

  /**
   * Parse the tagName from a tag resource.
   *
   * @param {String} tagName
   *   A fully-qualified path representing a tag resources.
   * @returns {String} - A string representing the entry_group.
   */
  matchEntryGroupFromTagName(tagName) {
    return this._pathTemplates.tagPathTemplate
      .match(tagName)
      .entry_group;
  }

  /**
   * Parse the tagName from a tag resource.
   *
   * @param {String} tagName
   *   A fully-qualified path representing a tag resources.
   * @returns {String} - A string representing the entry.
   */
  matchEntryFromTagName(tagName) {
    return this._pathTemplates.tagPathTemplate
      .match(tagName)
      .entry;
  }

  /**
   * Parse the tagName from a tag resource.
   *
   * @param {String} tagName
   *   A fully-qualified path representing a tag resources.
   * @returns {String} - A string representing the tag.
   */
  matchTagFromTagName(tagName) {
    return this._pathTemplates.tagPathTemplate
      .match(tagName)
      .tag;
  }

  /**
   * Parse the tagTemplateName from a tag_template resource.
   *
   * @param {String} tagTemplateName
   *   A fully-qualified path representing a tag_template resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromTagTemplateName(tagTemplateName) {
    return this._pathTemplates.tagTemplatePathTemplate
      .match(tagTemplateName)
      .project;
  }

  /**
   * Parse the tagTemplateName from a tag_template resource.
   *
   * @param {String} tagTemplateName
   *   A fully-qualified path representing a tag_template resources.
   * @returns {String} - A string representing the tag_template.
   */
  matchTagTemplateFromTagTemplateName(tagTemplateName) {
    return this._pathTemplates.tagTemplatePathTemplate
      .match(tagTemplateName)
      .tag_template;
  }

  /**
   * Parse the fieldName from a field resource.
   *
   * @param {String} fieldName
   *   A fully-qualified path representing a field resources.
   * @returns {String} - A string representing the project.
   */
  matchProjectFromFieldName(fieldName) {
    return this._pathTemplates.fieldPathTemplate
      .match(fieldName)
      .project;
  }

  /**
   * Parse the fieldName from a field resource.
   *
   * @param {String} fieldName
   *   A fully-qualified path representing a field resources.
   * @returns {String} - A string representing the tag_template.
   */
  matchTagTemplateFromFieldName(fieldName) {
    return this._pathTemplates.fieldPathTemplate
      .match(fieldName)
      .tag_template;
  }

  /**
   * Parse the fieldName from a field resource.
   *
   * @param {String} fieldName
   *   A fully-qualified path representing a field resources.
   * @returns {String} - A string representing the field.
   */
  matchFieldFromFieldName(fieldName) {
    return this._pathTemplates.fieldPathTemplate
      .match(fieldName)
      .field;
  }
}


module.exports = DataCatalogClient;
