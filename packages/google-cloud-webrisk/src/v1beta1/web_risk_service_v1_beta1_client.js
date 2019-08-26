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

const gapicConfig = require('./web_risk_service_v1_beta1_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Web Risk v1beta1 API defines an interface to detect malicious URLs on your
 * website and in client applications.
 *
 * @class
 * @memberof v1beta1
 */
class WebRiskServiceV1Beta1Client {
  /**
   * Construct an instance of WebRiskServiceV1Beta1Client.
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

    const servicePath =
      opts.servicePath || opts.apiEndpoint || this.constructor.servicePath;

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
    const gaxGrpc = new gax.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    const clientHeader = [
      `gl-node/${process.versions.node}`,
      `grpc/${gaxGrpc.grpcVersion}`,
      `gax/${gax.version}`,
      `gapic/${VERSION}`,
    ];
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    const protos = gaxGrpc.loadProto(
      path.join(__dirname, '..', '..', 'protos'),
      ['google/cloud/webrisk/v1beta1/webrisk.proto']
    );

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1.
    const webRiskServiceV1Beta1Stub = gaxGrpc.createStub(
      protos.google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const webRiskServiceV1Beta1StubMethods = [
      'computeThreatListDiff',
      'searchUris',
      'searchHashes',
    ];
    for (const methodName of webRiskServiceV1Beta1StubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        webRiskServiceV1Beta1Stub.then(
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
        null
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'webrisk.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'webrisk.googleapis.com';
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
   * Gets the most recent threat list diffs.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {number} request.threatType
   *   Required. The ThreatList to update.
   *
   *   The number should be among the values of [ThreatType]{@link google.cloud.webrisk.v1beta1.ThreatType}
   * @param {Object} request.constraints
   *   The constraints associated with this request.
   *
   *   This object should have the same structure as [Constraints]{@link google.cloud.webrisk.v1beta1.Constraints}
   * @param {Buffer} [request.versionToken]
   *   The current version token of the client for the requested list (the
   *   client version that was received from the last successful diff).
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ComputeThreatListDiffResponse]{@link google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ComputeThreatListDiffResponse]{@link google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const webRisk = require('@google-cloud/web-risk');
   *
   * const client = new webRisk.v1beta1.WebRiskServiceV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const threatType = 'THREAT_TYPE_UNSPECIFIED';
   * const constraints = {};
   * const request = {
   *   threatType: threatType,
   *   constraints: constraints,
   * };
   * client.computeThreatListDiff(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  computeThreatListDiff(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.computeThreatListDiff(
      request,
      options,
      callback
    );
  }

  /**
   * This method is used to check whether a URI is on a given threatList.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.uri
   *   The URI to be checked for matches.
   * @param {number[]} request.threatTypes
   *   Required. The ThreatLists to search in.
   *
   *   The number should be among the values of [ThreatType]{@link google.cloud.webrisk.v1beta1.ThreatType}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [SearchUrisResponse]{@link google.cloud.webrisk.v1beta1.SearchUrisResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [SearchUrisResponse]{@link google.cloud.webrisk.v1beta1.SearchUrisResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const webRisk = require('@google-cloud/web-risk');
   *
   * const client = new webRisk.v1beta1.WebRiskServiceV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   * const uri = '';
   * const threatTypes = [];
   * const request = {
   *   uri: uri,
   *   threatTypes: threatTypes,
   * };
   * client.searchUris(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  searchUris(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.searchUris(request, options, callback);
  }

  /**
   * Gets the full hashes that match the requested hash prefix.
   * This is used after a hash prefix is looked up in a threatList
   * and there is a match. The client side threatList only holds partial hashes
   * so the client must query this method to determine if there is a full
   * hash match of a threat.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Buffer} [request.hashPrefix]
   *   A hash prefix, consisting of the most significant 4-32 bytes of a SHA256
   *   hash. For JSON requests, this field is base64-encoded.
   * @param {number[]} [request.threatTypes]
   *   Required. The ThreatLists to search in.
   *
   *   The number should be among the values of [ThreatType]{@link google.cloud.webrisk.v1beta1.ThreatType}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [SearchHashesResponse]{@link google.cloud.webrisk.v1beta1.SearchHashesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [SearchHashesResponse]{@link google.cloud.webrisk.v1beta1.SearchHashesResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const webRisk = require('@google-cloud/web-risk');
   *
   * const client = new webRisk.v1beta1.WebRiskServiceV1Beta1Client({
   *   // optional auth parameters.
   * });
   *
   *
   * client.searchHashes({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  searchHashes(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};

    return this._innerApiCalls.searchHashes(request, options, callback);
  }
}

module.exports = WebRiskServiceV1Beta1Client;
