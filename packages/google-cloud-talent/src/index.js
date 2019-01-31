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
 * @namespace google.cloud.talent
 */
/**
 * @namespace google.cloud.talent.v4beta1
 */
/**
 * @namespace google.protobuf
 */
/**
 * @namespace google.type
 */

'use strict';

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v4beta1: require('./v4beta1'),
});

/**
 * The `@google-cloud/talent` package has the following named exports:
 *
 * - `CompanyServiceClient` - Reference to
 *   {@link v4beta1.CompanyServiceClient}
 * - `CompletionClient` - Reference to
 *   {@link v4beta1.CompletionClient}
 * - `EventServiceClient` - Reference to
 *   {@link v4beta1.EventServiceClient}
 * - `JobServiceClient` - Reference to
 *   {@link v4beta1.JobServiceClient}
 * - `ProfileServiceClient` - Reference to
 *   {@link v4beta1.ProfileServiceClient}
 * - `ResumeServiceClient` - Reference to
 *   {@link v4beta1.ResumeServiceClient}
 * - `v4beta1` - This is used for selecting or pinning a
 *   particular backend service version. It exports:
 *     - `CompanyServiceClient` - Reference to
 *       {@link v4beta1.CompanyServiceClient}
 *     - `CompletionClient` - Reference to
 *       {@link v4beta1.CompletionClient}
 *     - `EventServiceClient` - Reference to
 *       {@link v4beta1.EventServiceClient}
 *     - `JobServiceClient` - Reference to
 *       {@link v4beta1.JobServiceClient}
 *     - `ProfileServiceClient` - Reference to
 *       {@link v4beta1.ProfileServiceClient}
 *     - `ResumeServiceClient` - Reference to
 *       {@link v4beta1.ResumeServiceClient}
 *
 * @module {object} @google-cloud/talent
 * @alias nodejs-talent
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/talent
 *
 * @example <caption>Import the client library:</caption>
 * const talent = require('@google-cloud/talent');
 *
 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>
 * const client = new talent.CompanyServiceClient();
 *
 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * const client = new talent.CompanyServiceClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 */

/**
 * @type {object}
 * @property {constructor} CompanyServiceClient
 *   Reference to {@link v4beta1.CompanyServiceClient}
 * @property {constructor} CompletionClient
 *   Reference to {@link v4beta1.CompletionClient}
 * @property {constructor} EventServiceClient
 *   Reference to {@link v4beta1.EventServiceClient}
 * @property {constructor} JobServiceClient
 *   Reference to {@link v4beta1.JobServiceClient}
 * @property {constructor} ProfileServiceClient
 *   Reference to {@link v4beta1.ProfileServiceClient}
 * @property {constructor} ResumeServiceClient
 *   Reference to {@link v4beta1.ResumeServiceClient}
 */
module.exports = gapic.v4beta1;

/**
 * @type {object}
 * @property {constructor} CompanyServiceClient
 *   Reference to {@link v4beta1.CompanyServiceClient}
 * @property {constructor} CompletionClient
 *   Reference to {@link v4beta1.CompletionClient}
 * @property {constructor} EventServiceClient
 *   Reference to {@link v4beta1.EventServiceClient}
 * @property {constructor} JobServiceClient
 *   Reference to {@link v4beta1.JobServiceClient}
 * @property {constructor} ProfileServiceClient
 *   Reference to {@link v4beta1.ProfileServiceClient}
 * @property {constructor} ResumeServiceClient
 *   Reference to {@link v4beta1.ResumeServiceClient}
 */
module.exports.v4beta1 = gapic.v4beta1;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
