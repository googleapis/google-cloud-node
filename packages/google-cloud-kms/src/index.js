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

/**
 * @namespace google
 */
/**
 * @namespace google.cloud
 */
/**
 * @namespace google.cloud.kms
 */
/**
 * @namespace google.cloud.kms.v1
 */

'use strict';

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v1: require('./v1'),
});

/**
 * The `@google-cloud/kms` package has the following named exports:
 *
 * - `KeyManagementServiceClient` - Reference to
 *   {@link v1.KeyManagementServiceClient}
 * - `v1` - This is used for selecting or pinning a
 *   particular backend service version. It exports:
 *     - `KeyManagementServiceClient` - Reference to
 *       {@link v1.KeyManagementServiceClient}
 *
 * @module {object} @google-cloud/kms
 * @alias nodejs-kms
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/kms
 *
 * @example <caption>Import the client library:</caption>
 * const kms = require('@google-cloud/kms');
 *
 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>
 * const client = new kms.KeyManagementServiceClient();
 *
 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * const client = new kms.KeyManagementServiceClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 */

/**
 * @type {object}
 * @property {constructor} KeyManagementServiceClient
 *   Reference to {@link v1.KeyManagementServiceClient}
 */
module.exports = gapic.v1;

/**
 * @type {object}
 * @property {constructor} KeyManagementServiceClient
 *   Reference to {@link v1.KeyManagementServiceClient}
 */
module.exports.v1 = gapic.v1;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
