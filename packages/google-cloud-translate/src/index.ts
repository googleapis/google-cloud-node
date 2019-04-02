/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @namespace v2
 */
/**
 * @namespace google.cloud.translation.v3beta1
 */
/**
 * @namespace google.longrunning
 */
/**
 * @namespace google.rpc
 */
/**
 * @namespace google.protobuf
 */
const v3beta1 = require('./v3beta1');

/**
 * The `@google-cloud/translate` package has the following named exports:
 *
 * - `{@link Translate}` class - constructor for v2 of the Translation API.
 * See {@link Translate} and {@link ClientConfig} for client methods and
 * configuration options. Provides TypeScript types out-of-the-box.
 * - `v3beta1` - client for the v3beta1 backend service version. It exports:
 *    - `TranslationServiceClient` - Reference to {@link
 * v3beta1.TranslationServiceClient}
 *
 *
 * @module {constructor} @google-cloud/translate
 * @alias nodejs-translate
 *
 * @example <caption>Install the v2 client library with <a
 * href="https://www.npmjs.com/">npm</a>:</caption> npm install --save
 * @google-cloud/translate
 *
 * @example <caption>Import the v2 client library:</caption>
 * const {Translate} = require('@google-cloud/translate');
 *
 * @example <caption>Create a v2 client that uses <a
 * href="https://goo.gl/64dyYX">Application Default Credentials
 * (ADC)</a>:</caption> const client = new Translate();
 *
 * @example <caption>Create a v2 client with <a
 * href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption> const client
 * = new Translate({ projectId: 'your-project-id', keyFilename:
 * '/path/to/keyfile.json',
 * });
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:translate_quickstart
 * Full quickstart example:
 *
 * @example <caption>Install the v3beta1 client library:</caption>
 * npm install --save @google-cloud/translate
 *
 * @example <caption>Import the v3beta1 client library:</caption>
 * const {TranslationServiceClient} =
 * require('@google-cloud/translate').v3beta1;
 */
export * from './v2';

/**
 * @type {object}
 * @property {constructor} TranslationServiceClient
 *   Reference to {@link v3beta1.TranslationServiceClient}
 */
export {v3beta1};
