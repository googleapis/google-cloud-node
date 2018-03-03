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
 * @namespace google.cloud.vision
 */
/**
 * @namespace google.cloud.vision.v1
 */
/**
 * @namespace google.cloud.vision.v1p1beta1
 */
/**
 * @namespace google.protobuf
 */
/**
 * @namespace google.rpc
 */
/**
 * @namespace google.type
 */

'use strict';

const helpers = require('./helpers');

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v1: require('./v1'),
  v1p1beta1: require('./v1p1beta1'),
  v1p2beta1: require('./v1p2beta1'),
});

// Augment the SpeechClient objects with the helpers.
for (let gapicVersion of Object.keys(gapic)) {
  let clientProto = gapic[gapicVersion].ImageAnnotatorClient.prototype;
  Object.assign(clientProto, helpers(gapicVersion));
}

/**
 * The `@google-cloud/vision` package has the following named exports:
 *
 * - `ImageAnnotatorClient` - Reference to {@link v1.ImageAnnotatorClient}.
 * - `v1` - This is used for selecting or pinning a particular backend service
 *   version. It exports:
 *   - `ImageAnnotatorClient` - Reference to {@link v1.ImageAnnotatorClient}.
 *
 * @module {object} @google-cloud/vision
 * @alias nodejs-vision
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/vision
 *
 * @example <caption>Import the client library:</caption>
 * const vision = require('@google-cloud/vision');
 *
 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>
 * const client = new vision.ImageAnnotatorClient();
 *
 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * const client = new vision.ImageAnnotatorClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 */
module.exports = gapic.v1;

/**
 * @type {object}
 * @property {constructor} ImageAnnotatorClient
 *   Reference to {@link v1.ImageAnnotatorClient}
 */
module.exports.v1 = gapic.v1;

/**
 * @type {object}
 * @property {constructor} ImageAnnotatorClient
 *   Reference to {@link v1p1beta1.ImageAnnotatorClient}
 */
module.exports.v1p1beta1 = gapic.v1p1beta1;

/**
 * @type {object}
 * @property {constructor} ImageAnnotatorClient
 *   Reference to {@link v1p2beta1.ImageAnnotatorClient}
 */
module.exports.v1p2beta1 = gapic.v1p2beta1;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
