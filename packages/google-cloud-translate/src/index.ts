// Copyright 2015 Google LLC
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

import * as v2 from './v2';

/**
 * The `@google-cloud/translate` package has the following named exports:
 *
 * - `{@link TranslationServiceClient}` class - constructor for v3 of the Translation API.
 * See {@link v3.TranslationServiceClient} for client methods.
 * - `v3` - client for the v3 backend service version. It exports:
 *    - `TranslationServiceClient` - Reference to {@link v3.TranslationServiceClient}
 * - `v3beta1` - client for the v3beta1 backend service version. It exports:
 *    - `TranslationServiceClient` - Reference to {@link v3beta1.TranslationServiceClient}
 * - `v2` - client for the v2 backend service version. It exports:
 *    - `Translate` - Reference to {@link v2.Translate}
 *
 * @module {constructor} @google-cloud/translate
 * @alias nodejs-translate
 *
 * @example Install the v3 client library with <a href="https://www.npmjs.com/">npm</a>:
 * ```
 * npm install --save @google-cloud/translate
 *
 * ```
 * @example Import the v3 client library:
 * ```
 * const {TranslationServiceClient} = require('@google-cloud/translate');
 *
 * ```
 * @example Create a v3 client that uses <a href="https://goo.gl/64dyYX">Application Default Credentials (ADC)</a>:
 * ```
 * const client = new TranslationServiceClient();
 *
 * ```
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:translate_quickstart
 * Full quickstart example:
 *
 * @example Install the v3beta1 client library:
 * ```
 * npm install --save @google-cloud/translate
 *
 * ```
 * @example Import the v3beta1 client library:
 * ```
 * const {TranslationServiceClient} =
 * require('@google-cloud/translate').v3beta1;
 * ```
 */
import * as v3beta1 from './v3beta1';
import * as v3 from './v3';
export * from './v3';

const TranslationServiceClient = v3.TranslationServiceClient;
type TranslationServiceClient = v3.TranslationServiceClient;
export {TranslationServiceClient, v2, v3beta1, v3};
// For compatibility with JavaScript libraries we need to provide this default export:
// tslint:disable-next-line no-default-export
export default {
  v2,
  v3beta1,
  v3,
  TranslationServiceClient,
};
import * as protos from '../protos/protos';
export {protos};
