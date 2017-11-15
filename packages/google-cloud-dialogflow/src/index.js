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
 * @namespace google.cloud.dialogflow
 */
/**
 * @namespace google.cloud.dialogflow.v2beta1
 */

'use strict';

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v2beta1: require('./v2beta1'),
});

/**
 * The `dialogflow` package has the following named exports:
 *
 * - `AgentsClient` - Reference to
 *   {@link v2beta1.AgentsClient}
 * - `ContextsClient` - Reference to
 *   {@link v2beta1.ContextsClient}
 * - `EntityTypesClient` - Reference to
 *   {@link v2beta1.EntityTypesClient}
 * - `IntentsClient` - Reference to
 *   {@link v2beta1.IntentsClient}
 * - `SessionEntityTypesClient` - Reference to
 *   {@link v2beta1.SessionEntityTypesClient}
 * - `SessionsClient` - Reference to
 *   {@link v2beta1.SessionsClient}
 * - `v2beta1` - This is used for selecting or pinning a
 *   particular backend service version. It exports:
 *     - `AgentsClient` - Reference to
 *       {@link v2beta1.AgentsClient}
 *     - `ContextsClient` - Reference to
 *       {@link v2beta1.ContextsClient}
 *     - `EntityTypesClient` - Reference to
 *       {@link v2beta1.EntityTypesClient}
 *     - `IntentsClient` - Reference to
 *       {@link v2beta1.IntentsClient}
 *     - `SessionEntityTypesClient` - Reference to
 *       {@link v2beta1.SessionEntityTypesClient}
 *     - `SessionsClient` - Reference to
 *       {@link v2beta1.SessionsClient}
 *
 * @module {object} dialogflow
 * @alias nodejs-dialogflow
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save dialogflow
 *
 * @example <caption>Import the client library:</caption>
 * const dialogflow = require('dialogflow');
 *
 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>
 * const client = new dialogflow.AgentsClient();
 *
 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * const client = new dialogflow.AgentsClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 */

/**
 * @type {object}
 * @property {constructor} AgentsClient
 *   Reference to {@link v2beta1.AgentsClient}
 * @property {constructor} ContextsClient
 *   Reference to {@link v2beta1.ContextsClient}
 * @property {constructor} EntityTypesClient
 *   Reference to {@link v2beta1.EntityTypesClient}
 * @property {constructor} IntentsClient
 *   Reference to {@link v2beta1.IntentsClient}
 * @property {constructor} SessionEntityTypesClient
 *   Reference to {@link v2beta1.SessionEntityTypesClient}
 * @property {constructor} SessionsClient
 *   Reference to {@link v2beta1.SessionsClient}
 */
module.exports = gapic.v2beta1;

/**
 * @type {object}
 * @property {constructor} AgentsClient
 *   Reference to {@link v2beta1.AgentsClient}
 * @property {constructor} ContextsClient
 *   Reference to {@link v2beta1.ContextsClient}
 * @property {constructor} EntityTypesClient
 *   Reference to {@link v2beta1.EntityTypesClient}
 * @property {constructor} IntentsClient
 *   Reference to {@link v2beta1.IntentsClient}
 * @property {constructor} SessionEntityTypesClient
 *   Reference to {@link v2beta1.SessionEntityTypesClient}
 * @property {constructor} SessionsClient
 *   Reference to {@link v2beta1.SessionsClient}
 */
module.exports.v2beta1 = gapic.v2beta1;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
