// Copyright 2017, Google LLC All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @namespace google
 */
/**
 * @namespace google.cloud
 */
/**
 * @namespace google.cloud.oslogin
 */
/**
 * @namespace google.cloud.oslogin.v1beta
 */

'use strict';

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v1beta: require('./v1beta'),
});

/**
 * The `@google-cloud/oslogin` package has the following named exports:
 *
 * - `OsLoginServiceClient` - Reference to
 *   {@link v1beta.OsLoginServiceClient}
 * - `v1beta` - This is used for selecting or pinning a
 *   particular backend service version. It exports:
 *     - `OsLoginServiceClient` - Reference to
 *       {@link v1beta.OsLoginServiceClient}
 *
 * @module {object} @google-cloud/oslogin
 * @alias nodejs-oslogin
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/oslogin
 *
 * @example <caption>Import the client library:</caption>
 * const oslogin = require('@google-cloud/oslogin');
 *
 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>
 * const client = new oslogin.OsLoginServiceClient();
 *
 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * const client = new oslogin.OsLoginServiceClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 */

/**
 * @type {object}
 * @property {constructor} OsLoginServiceClient
 *   Reference to {@link v1beta.OsLoginServiceClient}
 */
module.exports = gapic.v1beta;

/**
 * @type {object}
 * @property {constructor} OsLoginServiceClient
 *   Reference to {@link v1beta.OsLoginServiceClient}
 */
module.exports.v1beta = gapic.v1beta;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
