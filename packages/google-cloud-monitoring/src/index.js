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
 * - `AlertPolicyServiceClient` - Reference to
 *   {@link v3.AlertPolicyServiceClient}
 * - `GroupServiceClient` - Reference to
 *   {@link v3.GroupServiceClient}
 * - `MetricServiceClient` - Reference to
 *   {@link v3.MetricServiceClient}
 * - `NotificationChannelServiceClient` - Reference to
 *   {@link v3.NotificationChannelServiceClient}
 * - `UptimeCheckServiceClient` - Reference to
 *   {@link v3.UptimeCheckServiceClient}
 * - `v3` - This is used for selecting or pinning a
 *   particular backend service version. It exports:
 *     - `AlertPolicyServiceClient` - Reference to
 *       {@link v3.AlertPolicyServiceClient}
 *     - `GroupServiceClient` - Reference to
 *       {@link v3.GroupServiceClient}
 *     - `MetricServiceClient` - Reference to
 *       {@link v3.MetricServiceClient}
 *     - `NotificationChannelServiceClient` - Reference to
 *       {@link v3.NotificationChannelServiceClient}
 *     - `UptimeCheckServiceClient` - Reference to
 *       {@link v3.UptimeCheckServiceClient}
 *
 * @module {object} @google-cloud/monitoring
 * @alias nodejs-monitoring
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/monitoring
 *
 * @example <caption>Import the client library:</caption>
 * const monitoring = require('@google-cloud/monitoring');
 *
 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>
 * const client = new monitoring.AlertPolicyServiceClient();
 *
 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * const client = new monitoring.AlertPolicyServiceClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 */

/**
 * @type {object}
 * @property {constructor} AlertPolicyServiceClient
 *   Reference to {@link v3.AlertPolicyServiceClient}
 * @property {constructor} GroupServiceClient
 *   Reference to {@link v3.GroupServiceClient}
 * @property {constructor} MetricServiceClient
 *   Reference to {@link v3.MetricServiceClient}
 * @property {constructor} NotificationChannelServiceClient
 *   Reference to {@link v3.NotificationChannelServiceClient}
 * @property {constructor} UptimeCheckServiceClient
 *   Reference to {@link v3.UptimeCheckServiceClient}
 */
module.exports = gapic.v3;

/**
 * @type {object}
 * @property {constructor} AlertPolicyServiceClient
 *   Reference to {@link v3.AlertPolicyServiceClient}
 * @property {constructor} GroupServiceClient
 *   Reference to {@link v3.GroupServiceClient}
 * @property {constructor} MetricServiceClient
 *   Reference to {@link v3.MetricServiceClient}
 * @property {constructor} NotificationChannelServiceClient
 *   Reference to {@link v3.NotificationChannelServiceClient}
 * @property {constructor} UptimeCheckServiceClient
 *   Reference to {@link v3.UptimeCheckServiceClient}
 */
module.exports.v3 = gapic.v3;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
