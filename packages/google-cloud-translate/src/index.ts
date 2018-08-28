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

'use strict';

import * as arrify from 'arrify';
import {Service, util} from '@google-cloud/common';
import {promisifyAll} from '@google-cloud/promisify';
import {GoogleAuthOptions} from 'google-auth-library';
import * as extend from 'extend';
import * as is from 'is';
const isHtml = require('is-html');
import {DecorateRequestOptions, BodyResponseCallback} from '@google-cloud/common/build/src/util';
import * as r from 'request';
import {teenyRequest} from 'teeny-request';

const PKG = require('../../package.json');

/**
 * Translate request options.
 *
 * @typedef {object} TranslateRequest
 * @property {string} [format] Set the text's format as `html` or `text`.
 *     If not provided, we will try to auto-detect if the text given is HTML.
 * If not, we set the format as `text`.
 * @property {string} [from] The ISO 639-1 language code the source input
 *     is written in.
 * @property {string} [model] Set the model type requested for this
 *     translation. Please refer to the upstream documentation for possible
 *     values.
 * @property {string} to The ISO 639-1 language code to translate the
 *     input to.
 */
export interface TranslateRequest {
  format?: string;
  from?: string;
  model?: string;
  to?: string;
}

/**
 * @callback TranslateCallback
 * @param {?Error} err Request error, if any.
 * @param {object|object[]} translations If a single string input was given, a
 *     single translation is given. Otherwise, it is an array of translations.
 * @param {object} apiResponse The full API response.
 */
export interface TranslateCallback<T extends string|string[]> {
  (err: Error|null, translations?: T|null, apiResponse?: r.Response): void;
}

/**
 * @typedef {object} DetectResult
 * @property {string} 0.language The language code matched from the input.
 * @property {number} [0.confidence] A float 0 - 1. The higher the number, the
 *     higher the confidence in language detection. Note, this is not always
 *     returned from the API.
 * @property {object} 1 The full API response.
 */
export interface DetectResult {
  language: string;
  confidence: number;
  input: string;
}

/**
 * @callback DetectCallback
 * @param {?Error} err Request error, if any.
 * @param {object|object[]} results The detection results.
 * @param {string} results.language The language code matched from the input.
 * @param {number} [results.confidence] A float 0 - 1. The higher the number, the
 *     higher the confidence in language detection. Note, this is not always
 *     returned from the API.
 * @param {object} apiResponse The full API response.
 */
export interface DetectCallback<T extends DetectResult|DetectResult[]> {
  (err: Error|null, results?: T|null, apiResponse?: r.Response): void;
}

/**
 * @typedef {object} LanguageResult
 * @property {string} code The [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)
 *     language code.
 * @property {string} name The language name. This can be translated into your
 *     preferred language with the `target` option.
 */
export interface LanguageResult {
  code: string;
  name: string;
}

/**
 * @callback GetLanguagesCallback
 * @param {?Error} err Request error, if any.
 * @param {object[]} results The languages supported by the API.
 * @param {string} results.code The [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)
 *     language code.
 * @param {string} results.name The language name. This can be translated into your
 *     preferred language with the `target` option.
 * @param {object} apiResponse The full API response.
 */
export interface GetLanguagesCallback {
  (err: Error|null, results?: LanguageResult[]|null,
   apiResponse?: r.Response): void;
}

/**
 * @typedef {object} ClientConfig
 * @property {string} [projectId] The project ID from the Google Developer's
 *     Console, e.g. 'grape-spaceship-123'. We will also check the environment
 *     variable `GCLOUD_PROJECT` for your project ID. If your app is running in
 *     an environment which supports {@link
 * https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application
 * Application Default Credentials}, your project ID will be detected
 * automatically.
 * @property {string} [key] An API key. You should prefer using a Service
 *     Account key file instead of an API key.
 * @property {string} [keyFilename] Full path to the a .json, .pem, or .p12 key
 *     downloaded from the Google Developers Console. If you provide a path to a
 *     JSON file, the `projectId` option above is not necessary. NOTE: .pem and
 *     .p12 require you to specify the `email` option as well.
 * @property {string} [email] Account email address. Required when using a .pem
 *     or .p12 keyFilename.
 * @property {object} [credentials] Credentials object.
 * @property {string} [credentials.client_email]
 * @property {string} [credentials.private_key]
 * @property {boolean} [autoRetry=true] Automatically retry requests if the
 *     response is related to rate limits or certain intermittent server errors.
 *     We will exponentially backoff subsequent requests by default.
 * @property {number} [maxRetries=3] Maximum number of automatic retries
 *     attempted before returning the error.
 * @property {Constructor} [promise] Custom promise module to use instead of
 *     native Promises.
 */
export interface TranslateConfig extends GoogleAuthOptions {
  key?: string;
  autoRetry?: boolean;
  maxRetries?: number;
  requestModule?: typeof teenyRequest;
}

/**
 * With [Google Translate](https://cloud.google.com/translate), you can
 * dynamically translate text between thousands of language pairs.
 *
 * The Google Translate API lets websites and programs integrate with Google
 * Translate programmatically.
 *
 * @class
 *
 * @see [Getting Started]{@link https://cloud.google.com/translate/v2/getting_started}
 * @see [Identifying your application to Google]{@link https://cloud.google.com/translate/v2/using_rest#auth}
 *
 * @param {ClientConfig} [options] Configuration options.
 *
 * @example
 * //-
 * // <h3>Custom Translate API</h3>
 * //
 * // The environment variable, `GOOGLE_CLOUD_TRANSLATE_ENDPOINT`, is honored as
 * // a custom backend which our library will send requests to.
 * //-
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:translate_quickstart
 * Full quickstart example:
 */
export class Translate extends Service {
  options: TranslateConfig;
  key?: string;
  constructor(options?: TranslateConfig) {
    let baseUrl = 'https://translation.googleapis.com/language/translate/v2';

    if (process.env.GOOGLE_CLOUD_TRANSLATE_ENDPOINT) {
      baseUrl = process.env.GOOGLE_CLOUD_TRANSLATE_ENDPOINT.replace(/\/+$/, '');
    }

    const config = {
      baseUrl,
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
      packageJson: require('../../package.json'),
      projectIdRequired: false,
      requestModule: teenyRequest as typeof r,
    };

    super(config, options);
    this.options = options || {};
    this.options.requestModule = config.requestModule;
    if (this.options.key) {
      this.key = this.options.key;
    }
  }

  /**
   * Detect the language used in a string or multiple strings.
   *
   * @see [Detect Language]{@link https://cloud.google.com/translate/v2/using_rest#detect-language}
   *
   * @param {string|string[]} input - The source string input.
   * @param {DetectCallback} [callback] Callback function.
   * @returns {Promise<DetectResponse>}
   *
   * @example
   * const {Translate} = require('@google-cloud/translate');
   *
   * const translate = new Translate();
   *
   * //-
   * // Detect the language from a single string input.
   * //-
   * translate.detect('Hello', (err, results) => {
   *   if (!err) {
   *     // results = {
   *     //   language: 'en',
   *     //   confidence: 1,
   *     //   input: 'Hello'
   *     // }
   *   }
   * });
   *
   * //-
   * // Detect the languages used in multiple strings. Note that the results are
   * // now provided as an array.
   * //-
   * translate.detect([
   *   'Hello',
   *   'Hola'
   * ], (err, results) => {
   *   if (!err) {
   *     // results = [
   *     //   {
   *     //     language: 'en',
   *     //     confidence: 1,
   *     //     input: 'Hello'
   *     //   },
   *     //   {
   *     //     language: 'es',
   *     //     confidence: 1,
   *     //     input: 'Hola'
   *     //   }
   *     // ]
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * translate.detect('Hello').then((data) => {
   *   const results = data[0];
   *   const apiResponse = data[2];
   * });
   *
   * @example <caption>include:samples/translate.js</caption>
   * region_tag:translate_detect_language
   * Here's a full example:
   */
  detect(input: string, callback: DetectCallback<DetectResult>): void;
  detect(input: string[], callback: DetectCallback<DetectResult[]>): void;
  detect(
      input: string|string[],
      callback: DetectCallback<DetectResult>|
      DetectCallback<DetectResult[]>): void {
    const inputIsArray = Array.isArray(input);
    input = arrify(input);
    this.request(
        {
          method: 'POST',
          uri: '/detect',
          json: {
            q: input,
          },
        },
        (err, resp) => {
          if (err) {
            (callback as Function)(err, null, resp);
            return;
          }

          let results = resp.data.detections.map(
              (detection: Array<{}>, index: number) => {
                const result = extend({}, detection[0], {
                  input: input[index],
                });

                // Deprecated.
                // tslint:disable-next-line no-any
                delete (result as any).isReliable;

                return result;
              });

          if (input.length === 1 && !inputIsArray) {
            results = results[0];
          }

          (callback as Function)(null, results, resp);
        });
  }

  /**
   * Get an array of all supported languages.
   *
   * @see [Discovering Supported Languages]{@link https://cloud.google.com/translate/v2/discovering-supported-languages-with-rest}
   *
   * @param {string} [target] Get the language names in a language other than
   *     English.
   * @param {GetLanguagesCallback} [callback] Callback function.
   * @returns {Promise<GetLanguagesResponse>}
   *
   * @example <caption>include:samples/translate.js</caption>
   * region_tag:translate_list_codes
   * Gets the language names in English:
   *
   * @example <caption>include:samples/translate.js</caption>
   * region_tag:translate_list_language_names
   * Gets the language names in a language other than English:
   */
  getLanguages(callback: GetLanguagesCallback): void;
  getLanguages(target: string, callback: GetLanguagesCallback): void;
  getLanguages(
      targetOrCallback?: string|GetLanguagesCallback,
      callback?: GetLanguagesCallback) {
    let target: string;
    if (is.fn(targetOrCallback)) {
      callback = targetOrCallback as GetLanguagesCallback;
      target = 'en';
    } else {
      target = targetOrCallback as string;
    }

    const reqOpts = {
      uri: '/languages',
      useQuerystring: true,
      qs: {},
    } as DecorateRequestOptions;

    if (target && is.string(target)) {
      reqOpts.qs.target = target;
    }

    this.request(reqOpts, (err, resp) => {
      if (err) {
        callback!(err, null, resp);
        return;
      }

      const languages = resp.data.languages.map(
          (language: {language: string, name: string}) => {
            return {
              code: language.language,
              name: language.name,
            };
          });

      callback!(null, languages, resp);
    });
  }


  /**
   * Translate a string or multiple strings into another language.
   *
   * @see [Translate Text](https://cloud.google.com/translate/v2/using_rest#Translate)
   *
   * @throws {Error} If `options` is provided as an object without a `to`
   *     property.
   *
   * @param {string|string[]} input The source string input.
   * @param {string|TranslateRequest} [options] If a string, it is interpreted as the
   *     target ISO 639-1 language code to translate the source input to. (e.g.
   *     `en` for English). If an object, you may also specify the source
   *     language.
   * @param {TranslateCallback} [callback] Callback function.
   * @returns {Promise<TranslateResponse>}
   *
   * @example
   * //-
   * // Pass a string and a language code to get the translation.
   * //-
   * translate.translate('Hello', 'es', (err, translation) => {
   *   if (!err) {
   *     // translation = 'Hola'
   *   }
   * });
   *
   * //-
   * // The source language is auto-detected by default. To manually set it,
   * // provide an object.
   * //-
   * const options = {
   *   from: 'en',
   *   to: 'es'
   * };
   *
   * translate.translate('Hello', options, (err, translation) => {
   *   if (!err) {
   *     // translation = 'Hola'
   *   }
   * });
   *
   * //-
   * // Translate multiple strings of input. Note that the results are
   * // now provided as an array.
   * //-
   * const input = [
   *   'Hello',
   *   'How are you today?'
   * ];
   *
   * translate.translate(input, 'es', (err, translations) => {
   *   if (!err) {
   *     // translations = [
   *     //   'Hola',
   *     //   'Como estas hoy?'
   *     // ]
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * translate.translate('Hello', 'es').then((data) => {
   *   const translation = data[0];
   *   const apiResponse = data[1];
   * });
   *
   * @example <caption>include:samples/translate.js</caption>
   * region_tag:translate_translate_text
   * Full translation example:
   *
   * @example <caption>include:samples/translate.js</caption>
   * region_tag:translate_text_with_model
   * Translation using the premium model:
   */
  translate(
      input: string, options: TranslateRequest,
      callback: TranslateCallback<string>): void;
  translate(input: string, to: string, callback: TranslateCallback<string>):
      void;
  translate(
      input: string[], options: TranslateRequest,
      callback: TranslateCallback<string[]>): void;
  translate(input: string[], to: string, callback: TranslateCallback<string[]>):
      void;
  translate(
      inputs: string|string[], optionsOrTo: string|TranslateRequest,
      callback: TranslateCallback<string>|TranslateCallback<string[]>) {
    const inputIsArray = Array.isArray(inputs);
    const input = arrify(inputs);
    let options: TranslateRequest = {};
    if (typeof optionsOrTo === 'object') {
      options = optionsOrTo as TranslateRequest;
    } else if (typeof optionsOrTo === 'string') {
      options = {to: optionsOrTo};
    }

    // tslint:disable-next-line no-any
    const body: any = {
      q: input,
      format: options.format || (isHtml(input[0]) ? 'html' : 'text'),
    };

    if (is.string(options)) {
      body.target = options;
    } else {
      if (options.from) {
        body.source = options.from;
      }

      if (options.to) {
        body.target = options.to;
      }

      if (options.model) {
        body.model = options.model;
      }
    }

    if (!body.target) {
      throw new Error(
          'A target language is required to perform a translation.');
    }

    this.request(
        {
          method: 'POST',
          uri: '',
          json: body,
        },
        (err, resp) => {
          if (err) {
            (callback as Function)(err, null, resp);
            return;
          }

          let translations = resp.data.translations.map(
              (x: {translatedText: string}) => x.translatedText);

          if (body.q.length === 1 && !inputIsArray) {
            translations = translations[0];
          }

          (callback as Function)(err, translations, resp);
        });
  }

  /**
   * A custom request implementation. Requests to this API may optionally use an
   * API key for an application, not a bearer token from a service account. This
   * means it is possible to skip the `makeAuthenticatedRequest` portion of the
   * typical request lifecycle, and manually authenticate the request here.
   *
   * @private
   *
   * @param {object} reqOpts - Request options that are passed to `request`.
   * @param {function} callback - The callback function passed to `request`.
   */
  request(reqOpts: DecorateRequestOptions): Promise<r.Response>;
  request(reqOpts: DecorateRequestOptions, callback: BodyResponseCallback):
      void;
  request(reqOpts: DecorateRequestOptions, callback?: BodyResponseCallback):
      void|Promise<r.Response> {
    if (!this.key) {
      super.request(reqOpts, callback!);
      return;
    }

    reqOpts.uri = this.baseUrl + reqOpts.uri;
    reqOpts = extend(true, {}, reqOpts, {
      qs: {
        key: this.key,
      },
      headers: {
        'User-Agent': util.getUserAgentFromPackageJson(PKG),
      },
    });

    util.makeRequest(reqOpts, this.options, callback!);
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Translate, {exclude: ['request']});

/**
 * The `@google-cloud/translate` package has a single default export, the
 * {@link Translate} class.
 *
 * See {@link Translate} and {@link ClientConfig} for client methods and
 * configuration options.
 *
 * @module {constructor} @google-cloud/translate
 * @alias nodejs-translate
 *
 * @example <caption>Install the client library with <a
 * href="https://www.npmjs.com/">npm</a>:</caption> npm install --save
 * @google-cloud/translate
 *
 * @example <caption>Import the client library:</caption>
 * const {Translate} = require('@google-cloud/translate');
 *
 * @example <caption>Create a client that uses <a
 * href="https://goo.gl/64dyYX">Application Default Credentials
 * (ADC)</a>:</caption> const client = new Translate();
 *
 * @example <caption>Create a client with <a
 * href="https://goo.gl/RXp6VL">explicit credentials</a>:</caption> const client
 * = new Translate({ projectId: 'your-project-id', keyFilename:
 * '/path/to/keyfile.json',
 * });
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:translate_quickstart
 * Full quickstart example:
 */
