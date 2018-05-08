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
 * @namespace google.cloud.redis
 */
/**
 * @namespace google.cloud.redis.v1beta1
 */

'use strict';

// Import the clients for each version supported by this package.
const gapic = Object.freeze({
  v1beta1: require('./v1beta1'),
});

/**
 * The `redis` package has the following named exports:
 *
 * - `CloudRedisClient` - Reference to
 *   {@link v1beta1.CloudRedisClient}
 * - `v1beta1` - This is used for selecting or pinning a
 *   particular backend service version. It exports:
 *     - `CloudRedisClient` - Reference to
 *       {@link v1beta1.CloudRedisClient}
 *
 * @module {object} redis
 * @alias nodejs-redis
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save redis
 *
 * @example <caption>Import the client library:</caption>
 * const redis = require('redis');
 *
 * @example <caption>Create a client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:</caption>
 * const client = new redis.CloudRedisClient();
 *
 * @example <caption>Create a client with <a href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption>
 * const client = new redis.CloudRedisClient({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json',
 * });
 */

/**
 * @type {object}
 * @property {constructor} CloudRedisClient
 *   Reference to {@link v1beta1.CloudRedisClient}
 */
module.exports = gapic.v1beta1;

/**
 * @type {object}
 * @property {constructor} CloudRedisClient
 *   Reference to {@link v1beta1.CloudRedisClient}
 */
module.exports.v1beta1 = gapic.v1beta1;

// Alias `module.exports` as `module.exports.default`, for future-proofing.
module.exports.default = Object.assign({}, module.exports);
