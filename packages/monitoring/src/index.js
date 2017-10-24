// Copyright 2017, Google Inc. All rights reserved.
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
 * @namespace google.cloud.monitoring
 */
/**
 * @namespace google.cloud.monitoring.v3
 */

'use strict';

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v3: require('./v3'),
});

/**
 * The `@google-cloud/monitoring` package has the following named exports:
 *
 * - `GroupServiceClient` - Reference to
 *   {@link v3.GroupServiceClient}
 * - `MetricServiceClient` - Reference to
 *   {@link v3.MetricServiceClient}
 * - `v3` - This is used for selecting or pinning a
 *   particular backend service version. It exports:
 *     - `GroupServiceClient` - Reference to
 *       {@link v3.GroupServiceClient}
 *     - `MetricServiceClient` - Reference to
 *       {@link v3.MetricServiceClient}
 *
 * @module {object} @google-cloud/monitoring
 * @alias nodejs-monitoring
 *
 * @example <caption>Install the client library with
 *   <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/monitoring
 *
 * @example <caption>Import the client library:</caption>
 * const monitoring = require('@google-cloud/monitoring');
 *
 * @example <caption>Create a client that uses
 *   <a href="https://goo.gl/64dyYX">Application Default Credentials
 *   (ADC)</a>:</caption>
 * let client = new monitoring.GroupServiceClient();
 *
 * @example <caption>Create a client with
 *   <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * let client = new monitoring.GroupServiceClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 */

/**
 * @type {object}
 * @property {constructor} GroupServiceClient
 *   Reference to {@link v3.GroupServiceClient}
 * @property {constructor} MetricServiceClient
 *   Reference to {@link v3.MetricServiceClient}
 */
module.exports = gapic.v3;

/**
 * @type {object}
 * @property {constructor} GroupServiceClient
 *   Reference to {@link v3.GroupServiceClient}
 * @property {constructor} MetricServiceClient
 *   Reference to {@link v3.MetricServiceClient}
 */
module.exports.v3 = gapic.v3;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
