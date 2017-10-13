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
 * @namespace google.cloud.language
 */
/**
 * @namespace google.cloud.language.v1
 */
/**
 * @namespace google.cloud.language.v1beta2
 */

'use strict';

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v1: require('./v1'),
  v1beta2: require('./v1beta2'),
});

/**
 * The `@google-cloud/language` package has the following named exports:
 *
 * - `LanguageServiceClient` - Reference to
 *   {@link v1.LanguageServiceClient}
 * - `v1` - This is used for selecting or pinning a
 *   particular backend service version. It exports:
 *     - `LanguageServiceClient` - Reference to
 *       {@link v1.LanguageServiceClient}
 * - `v1beta2` - This is used for selecting or pinning a
 *   particular backend service version. It exports:
 *     - `LanguageServiceClient` - Reference to
 *       {@link v1beta2.LanguageServiceClient}
 *
 * @module {object} @google-cloud/language
 * @alias nodejs-language
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/language
 *
 * @example <caption>Import the client library:</caption>
 * const language = require('@google-cloud/language');
 *
 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>
 * const client = new language.LanguageServiceClient();
 *
 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * const client = new language.LanguageServiceClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:language_quickstart
 * Full quickstart example:
 */

/**
 * @type {object}
 * @property {constructor} LanguageServiceClient
 *   Reference to {@link v1.LanguageServiceClient}
 */
module.exports = gapic.v1;

/**
 * @type {object}
 * @property {constructor} LanguageServiceClient
 *   Reference to {@link v1.LanguageServiceClient}
 */
module.exports.v1 = gapic.v1;

/**
 * @type {object}
 * @property {constructor} LanguageServiceClient
 *   Reference to {@link v1beta2.LanguageServiceClient}
 */
module.exports.v1beta2 = gapic.v1beta2;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
