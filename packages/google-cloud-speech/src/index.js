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

/*!
 * DO NOT REMOVE THE FOLLOWING NAMESPACE DEFINITIONS
 */
/**
 * @namespace google
 */
/**
 * @namespace google.cloud
 */
/**
 * @namespace google.cloud.speech
 */
/**
 * @namespace google.cloud.speech.v1
 */
/**
 * @namespace google.cloud.speech.v1p1beta1
 */
/**
 * @namespace google.protobuf
 */
/**
 * @namespace google.rpc
 */
/**
 * @namespace google.longrunning
 */

'use strict';

const helpers = require('./helpers');

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v1: require('./v1'),
  v1p1beta1: require('./v1p1beta1'),
});

// Augment the SpeechClient objects with the helpers.
for (const gapicVersion of Object.keys(gapic)) {
  const clientProto = gapic[gapicVersion].SpeechClient.prototype;
  Object.assign(clientProto, helpers());
}

/**
 * The `@google-cloud/speech` package has the following named exports:
 *
 * - `SpeechClient` - Reference to {@link v1.SpeechClient}
 * - `v1` - This is used for selecting or pinning a particular backend service
 *   version. It exports:
 *   - `SpeechClient` - Reference to {@link v1.SpeechClient}
 * - `v1p1beta1` - This is used for selecting or pinning a beta backend service
 *   version. It exports:
 *   - `SpeechClient` - Reference to {@link v1p1beta1.SpeechClient}
 *
 * @module {object} @google-cloud/speech
 * @alias nodejs-speech
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/speech
 *
 * @example <caption>Import the client library:</caption>
 * const speech = require('@google-cloud/speech');
 *
 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>
 * const client = new speech.SpeechClient();
 *
 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * const client = new speech.SpeechClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 */
module.exports = gapic.v1;

/**
 * @type {object}
 * @property {constructor} SpeechClient Reference to {@link v1.SpeechClient}.
 */
module.exports.v1 = gapic.v1;

/**
 * @type {object}
 * @property {constructor} SpeechClient Reference to {@link v1p1beta1.SpeechClient}.
 */
module.exports.v1p1beta1 = gapic.v1p1beta1;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
