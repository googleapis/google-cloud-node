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

/**
 * @namespace google
 */
/**
 * @namespace google.cloud
 */
/**
 * @namespace google.cloud.workflows
 */
/**
 * @namespace google.cloud.workflows.v1alpha1
 */

'use strict';

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v1alpha1: require('./v1alpha1'),
});

/**
 * The `@google-cloud/workflows` package has the following named exports:
 *
 * - `WorkflowsClient` - Reference to
 *   {@link v1alpha1.WorkflowsClient}
 * - `v1alpha1` - This is used for selecting or pinning a
 *   particular backend service version. It exports:
 *     - `WorkflowsClient` - Reference to
 *       {@link v1alpha1.WorkflowsClient}
 *
 * @module {object} @google-cloud/workflows
 * @alias nodejs-workflows
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/workflows
 *
 * @example <caption>Import the client library:</caption>
 * const workflows = require('@google-cloud/workflows');
 *
 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>
 * const client = new workflows.WorkflowsClient();
 *
 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * const client = new workflows.WorkflowsClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 */

/**
 * @type {object}
 * @property {constructor} WorkflowsClient
 *   Reference to {@link v1alpha1.WorkflowsClient}
 */
module.exports = gapic.v1alpha1;

/**
 * @type {object}
 * @property {constructor} WorkflowsClient
 *   Reference to {@link v1alpha1.WorkflowsClient}
 */
module.exports.v1alpha1 = gapic.v1alpha1;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
