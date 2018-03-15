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
 * @namespace google.cloud.text-to-speech
 */
/**
 * @namespace google.cloud.text-to-speech.v1beta1
 */

'use strict';

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v1beta1: require('./v1beta1'),
});

/**
 * The `text-to-speech` package has the following named exports:
 *
 * - `TextToSpeechClient` - Reference to
 *   {@link v1beta1.TextToSpeechClient}
 * - `v1beta1` - This is used for selecting or pinning a
 *   particular backend service version. It exports:
 *     - `TextToSpeechClient` - Reference to
 *       {@link v1beta1.TextToSpeechClient}
 *
 * @module {object} text-to-speech
 * @alias nodejs-text-to-speech
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save text-to-speech
 *
 * @example <caption>Import the client library:</caption>
 * const text-to-speech = require('text-to-speech');
 *
 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>
 * const client = new text-to-speech.TextToSpeechClient();
 *
 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * const client = new text-to-speech.TextToSpeechClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 */

/**
 * @type {object}
 * @property {constructor} TextToSpeechClient
 *   Reference to {@link v1beta1.TextToSpeechClient}
 */
module.exports = gapic.v1beta1;

/**
 * @type {object}
 * @property {constructor} TextToSpeechClient
 *   Reference to {@link v1beta1.TextToSpeechClient}
 */
module.exports.v1beta1 = gapic.v1beta1;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
