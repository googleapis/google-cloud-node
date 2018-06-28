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

const gapicConfig = require('./os_login_service_client_config');
const gax = require('google-gax');
const merge = require('lodash.merge');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Cloud OS Login API
 *
 * The Cloud OS Login API allows you to manage users and their associated SSH
 * public keys for logging into virtual machines on Google Cloud Platform.
 *
 * @class
 * @memberof v1beta
 */
class OsLoginServiceClient {
  /**
   * Construct an instance of OsLoginServiceClient.
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
    var gaxGrpc = new gax.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    var clientHeader = [
      `gl-node/${process.version}`,
      `grpc/${gaxGrpc.grpcVersion}`,
      `gax/${gax.version}`,
      `gapic/${VERSION}`,
    ];
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    var protos = merge(
      {},
      gaxGrpc.loadProto(
        path.join(__dirname, '..', '..', 'protos'),
        'google/cloud/oslogin/v1beta/oslogin.proto'
      )
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      userPathTemplate: new gax.PathTemplate('users/{user}'),
      projectPathTemplate: new gax.PathTemplate(
        'users/{user}/projects/{project}'
      ),
      fingerprintPathTemplate: new gax.PathTemplate(
        'users/{user}/sshPublicKeys/{fingerprint}'
      ),
    };

    // Put together the default options sent with requests.
    var defaults = gaxGrpc.constructSettings(
      'google.cloud.oslogin.v1beta.OsLoginService',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.oslogin.v1beta.OsLoginService.
    var osLoginServiceStub = gaxGrpc.createStub(
      protos.google.cloud.oslogin.v1beta.OsLoginService,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    var osLoginServiceStubMethods = [
      'deletePosixAccount',
      'deleteSshPublicKey',
      'getLoginProfile',
      'getSshPublicKey',
      'importSshPublicKey',
      'updateSshPublicKey',
    ];
    for (let methodName of osLoginServiceStubMethods) {
      this._innerApiCalls[methodName] = gax.createApiCall(
        osLoginServiceStub.then(
          stub =>
            function() {
              var args = Array.prototype.slice.call(arguments, 0);
              return stub[methodName].apply(stub, args);
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
    return 'oslogin.googleapis.com';
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
      'https://www.googleapis.com/auth/cloud-platform.read-only',
      'https://www.googleapis.com/auth/compute',
      'https://www.googleapis.com/auth/compute.readonly',
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
   * Deletes a POSIX account.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   A reference to the POSIX account to update. POSIX accounts are identified
   *   by the project ID they are associated with. A reference to the POSIX
   *   account is in format `users/{user}/projects/{project}`.
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
   * const osLogin = require('@google-cloud/os-login');
   *
   * var client = new osLogin.v1beta.OsLoginServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.projectPath('[USER]', '[PROJECT]');
   * client.deletePosixAccount({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deletePosixAccount(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deletePosixAccount(request, options, callback);
  }

  /**
   * Deletes an SSH public key.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The fingerprint of the public key to update. Public keys are identified by
   *   their SHA-256 fingerprint. The fingerprint of the public key is in format
   *   `users/{user}/sshPublicKeys/{fingerprint}`.
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
   * const osLogin = require('@google-cloud/os-login');
   *
   * var client = new osLogin.v1beta.OsLoginServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.fingerprintPath('[USER]', '[FINGERPRINT]');
   * client.deleteSshPublicKey({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteSshPublicKey(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.deleteSshPublicKey(request, options, callback);
  }

  /**
   * Retrieves the profile information used for logging in to a virtual machine
   * on Google Compute Engine.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The unique ID for the user in format `users/{user}`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [LoginProfile]{@link google.cloud.oslogin.v1beta.LoginProfile}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [LoginProfile]{@link google.cloud.oslogin.v1beta.LoginProfile}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const osLogin = require('@google-cloud/os-login');
   *
   * var client = new osLogin.v1beta.OsLoginServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.userPath('[USER]');
   * client.getLoginProfile({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getLoginProfile(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getLoginProfile(request, options, callback);
  }

  /**
   * Retrieves an SSH public key.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The fingerprint of the public key to retrieve. Public keys are identified
   *   by their SHA-256 fingerprint. The fingerprint of the public key is in
   *   format `users/{user}/sshPublicKeys/{fingerprint}`.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [SshPublicKey]{@link google.cloud.oslogin.common.SshPublicKey}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [SshPublicKey]{@link google.cloud.oslogin.common.SshPublicKey}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const osLogin = require('@google-cloud/os-login');
   *
   * var client = new osLogin.v1beta.OsLoginServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.fingerprintPath('[USER]', '[FINGERPRINT]');
   * client.getSshPublicKey({name: formattedName})
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getSshPublicKey(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.getSshPublicKey(request, options, callback);
  }

  /**
   * Adds an SSH public key and returns the profile information. Default POSIX
   * account information is set when no username and UID exist as part of the
   * login profile.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   The unique ID for the user in format `users/{user}`.
   * @param {Object} request.sshPublicKey
   *   The SSH public key and expiration time.
   *
   *   This object should have the same structure as [SshPublicKey]{@link google.cloud.oslogin.common.SshPublicKey}
   * @param {string} [request.projectId]
   *   The project ID of the Google Cloud Platform project.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ImportSshPublicKeyResponse]{@link google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ImportSshPublicKeyResponse]{@link google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const osLogin = require('@google-cloud/os-login');
   *
   * var client = new osLogin.v1beta.OsLoginServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedParent = client.userPath('[USER]');
   * var sshPublicKey = {};
   * var request = {
   *   parent: formattedParent,
   *   sshPublicKey: sshPublicKey,
   * };
   * client.importSshPublicKey(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  importSshPublicKey(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.importSshPublicKey(request, options, callback);
  }

  /**
   * Updates an SSH public key and returns the profile information. This method
   * supports patch semantics.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   The fingerprint of the public key to update. Public keys are identified by
   *   their SHA-256 fingerprint. The fingerprint of the public key is in format
   *   `users/{user}/sshPublicKeys/{fingerprint}`.
   * @param {Object} request.sshPublicKey
   *   The SSH public key and expiration time.
   *
   *   This object should have the same structure as [SshPublicKey]{@link google.cloud.oslogin.common.SshPublicKey}
   * @param {Object} [request.updateMask]
   *   Mask to control which fields get updated. Updates all if not present.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [SshPublicKey]{@link google.cloud.oslogin.common.SshPublicKey}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [SshPublicKey]{@link google.cloud.oslogin.common.SshPublicKey}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const osLogin = require('@google-cloud/os-login');
   *
   * var client = new osLogin.v1beta.OsLoginServiceClient({
   *   // optional auth parameters.
   * });
   *
   * var formattedName = client.fingerprintPath('[USER]', '[FINGERPRINT]');
   * var sshPublicKey = {};
   * var request = {
   *   name: formattedName,
   *   sshPublicKey: sshPublicKey,
   * };
   * client.updateSshPublicKey(request)
   *   .then(responses => {
   *     var response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateSshPublicKey(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    options = options || {};

    return this._innerApiCalls.updateSshPublicKey(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified user resource name string.
   *
   * @param {String} user
   * @returns {String}
   */
  userPath(user) {
    return this._pathTemplates.userPathTemplate.render({
      user: user,
    });
  }

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {String} user
   * @param {String} project
   * @returns {String}
   */
  projectPath(user, project) {
    return this._pathTemplates.projectPathTemplate.render({
      user: user,
      project: project,
    });
  }

  /**
   * Return a fully-qualified fingerprint resource name string.
   *
   * @param {String} user
   * @param {String} fingerprint
   * @returns {String}
   */
  fingerprintPath(user, fingerprint) {
    return this._pathTemplates.fingerprintPathTemplate.render({
      user: user,
      fingerprint: fingerprint,
    });
  }

  /**
   * Parse the userName from a user resource.
   *
   * @param {String} userName
   *   A fully-qualified path representing a user resources.
   * @returns {String} - A string representing the user.
   */
  matchUserFromUserName(userName) {
    return this._pathTemplates.userPathTemplate.match(userName).user;
  }

  /**
   * Parse the projectName from a project resource.
   *
   * @param {String} projectName
   *   A fully-qualified path representing a project resources.
   * @returns {String} - A string representing the user.
   */
  matchUserFromProjectName(projectName) {
    return this._pathTemplates.projectPathTemplate.match(projectName).user;
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
   * Parse the fingerprintName from a fingerprint resource.
   *
   * @param {String} fingerprintName
   *   A fully-qualified path representing a fingerprint resources.
   * @returns {String} - A string representing the user.
   */
  matchUserFromFingerprintName(fingerprintName) {
    return this._pathTemplates.fingerprintPathTemplate.match(fingerprintName)
      .user;
  }

  /**
   * Parse the fingerprintName from a fingerprint resource.
   *
   * @param {String} fingerprintName
   *   A fully-qualified path representing a fingerprint resources.
   * @returns {String} - A string representing the fingerprint.
   */
  matchFingerprintFromFingerprintName(fingerprintName) {
    return this._pathTemplates.fingerprintPathTemplate.match(fingerprintName)
      .fingerprint;
  }
}

module.exports = OsLoginServiceClient;
