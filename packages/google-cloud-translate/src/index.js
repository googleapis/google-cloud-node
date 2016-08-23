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

/*!
 * @module translate
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var extend = require('extend');
var is = require('is');
var prop = require('propprop');

var PKG = require('../package.json');

/**
 * With [Google Translate](https://cloud.google.com/translate), you can
 * dynamically translate text between thousands of language pairs.
 *
 * The Google Translate API lets websites and programs integrate with Google
 * Translate programmatically.
 *
 * Google Translate API is available as a paid service. See the
 * [Pricing](https://cloud.google.com/translate/v2/pricing.html) and
 * [FAQ](https://cloud.google.com/translate/v2/faq.html) pages for details.
 *
 * **An API key is required for Translate.** See
 * [Identifying your application to Google](https://cloud.google.com/translate/v2/using_rest#auth).
 *
 * @constructor
 * @alias module:translate
 *
 * @resource [Getting Started]{@link https://cloud.google.com/translate/v2/getting_started}
 * @resource [Identifying your application to Google]{@link https://cloud.google.com/translate/v2/using_rest#auth}
 *
 * @throws {Error} If an API key is not provided.
 *
 * @param {object} options - [Configuration object](#/docs).
 * @param {string} options.key - An API key.
 */
function Translate(options) {
  if (!(this instanceof Translate)) {
    options = common.util.normalizeArguments(this, options, {
      projectIdRequired: false
    });
    return new Translate(options);
  }

  if (!options.key) {
    throw new Error('An API key is required to use the Translate API.');
  }

  this.options = options;
  this.key = options.key;
}

/**
 * Detect the language used in a string or multiple strings.
 *
 * @resource [Detect Language]{@link https://cloud.google.com/translate/v2/using_rest#detect-language}
 *
 * @param {string|string[]} input - The source string input.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object|object[]} callback.results - If a single string input was
 *     given, a single result object is given. Otherwise, it is an array of
 *     result objects.
 * @param {string} callback.results[].language - The language code matched from
 *     the input.
 * @param {number=} callback.results[].confidence - A float 0 - 1. The higher
 *     the number, the higher the confidence in language detection. Note, this
 *     is not always returned from the API.
 * @param {string} callback.input - The original input that this was result was
 *     based on.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * //-
 * // Detect the language from a single string input.
 * //-
 * translate.detect('Hello', function(err, results) {
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
 * // now provied as an array.
 * //-
 * translate.detect([
 *   'Hello',
 *   'Hola'
 * ], function(err, results) {
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
 */
Translate.prototype.detect = function(input, callback) {
  input = arrify(input);

  this.request({
    uri: '/detect',
    useQuerystring: true,
    qs: {
      q: input
    }
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var results = resp.data.detections.map(function(detection, index) {
      var result = extend({}, detection[0], {
        input: input[index]
      });

      // Deprecated.
      delete result.isReliable;

      return result;
    });

    if (input.length === 1) {
      results = results[0];
    }

    callback(null, results, resp);
  });
};

/**
 * Get an array of all supported languages.
 *
 * @resource [Discovering Supported Languages]{@link https://cloud.google.com/translate/v2/discovering-supported-languages-with-rest}
 *
 * @param {string=} target - Get the language names in a language other than
 *     English.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object[]} callback.languages - The languages supported by the API.
 * @param {string} callback.languages[].code - The [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)
 *     language code.
 * @param {string} callback.languages[].name - The language name. This can be
 *     translated into your preferred language with the `target` option
 *     described above.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * translate.getLanguages(function(err, languages) {
 *   if (!err) {
 *     // languages = [
 *     //   {
 *     //     code: 'af',
 *     //     name: 'Afrikaans'
 *     //   },
 *     //   {
 *     //     code: 'ar',
 *     //     name: 'Arabic'
 *     //   },
 *     //   {
 *     //     code: 'az',
 *     //     name: 'Azerbaijani'
 *     //   },
 *     //   ...
 *     // ]
 *   }
 * });
 *
 * //-
 * // Get the language names in a language other than English.
 * //-
 * translate.getLanguages('es', function(err, languages) {
 *   if (!err) {
 *     // languages = [
 *     //   {
 *     //     code: 'af',
 *     //     name: 'afrikáans'
 *     //   },
 *     //   {
 *     //     code: 'ar',
 *     //     name: 'árabe'
 *     //   },
 *     //   {
 *     //     code: 'az',
 *     //     name: 'azerí'
 *     //   },
 *     //   ...
 *     // ]
 *   }
 * });
 */
Translate.prototype.getLanguages = function(target, callback) {
  if (is.fn(target)) {
    callback = target;
    target = 'en';
  }

  var reqOpts = {
    uri: '/languages',
    useQuerystring: true,
    qs: {}
  };

  if (target && is.string(target)) {
    reqOpts.qs.target = target;
  }

  this.request(reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var languages = resp.data.languages.map(function(language) {
      return {
        code: language.language,
        name: language.name
      };
    });

    callback(null, languages, resp);
  });
};

/**
 * Translate a string or multiple strings into another language.
 *
 * @resource [Translate Text](https://cloud.google.com/translate/v2/using_rest#Translate)
 *
 * @throws {Error} If `options` is provided as an object without a `to`
 *     property.
 *
 * @param {string|string[]} input - The source string input.
 * @param {string|object=} options - If a string, it is interpreted as the
 *     target ISO 639-1 language code to translate the source input to. (e.g.
 *     `en` for English). If an object, you may also specify the source
 *     language.
 * @param {string} options.from - The ISO 639-1 language code the source input
 *     is written in.
 * @param {string} options.to - The ISO 639-1 language code to translate the
 *     input to.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object|object[]} callback.translations - If a single string input was
 *     given, a single translation is given. Otherwise, it is an array of
 *     translations.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * //-
 * // Pass a string and a language code to get the translation.
 * //-
 * translate.translate('Hello', 'es', function(err, translation) {
 *   if (!err) {
 *     // translation = 'Hola'
 *   }
 * });
 *
 * //-
 * // The source language is auto-detected by default. To manually set it,
 * // provide an object.
 * //-
 * var options = {
 *   from: 'en',
 *   to: 'es'
 * };
 *
 * translate.translate('Hello', options, function(err, translation) {
 *   if (!err) {
 *     // translation = 'Hola'
 *   }
 * });
 *
 * //-
 * // Translate multiple strings of input. Note that the results are
 * // now provied as an array.
 * //-
 * var input = [
 *   'Hello',
 *   'How are you today?'
 * ];
 *
 * translate.translate(input, 'es', function(err, translations) {
 *   if (!err) {
 *     // translations = [
 *     //   'Hola',
 *     //   'Como estas hoy?'
 *     // ]
 *   }
 * });
 */
Translate.prototype.translate = function(input, options, callback) {
  var query = {
    q: arrify(input)
  };

  if (is.string(options)) {
    query.target = options;
  } else {
    if (options.from) {
      query.source = options.from;
    }

    if (options.to) {
      query.target = options.to;
    }
  }

  if (!query.target) {
    throw new Error('A target language is required to perform a translation.');
  }

  this.request({
    uri: '',
    useQuerystring: true,
    qs: query
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var translations = resp.data.translations.map(prop('translatedText'));

    if (query.q.length === 1) {
      translations = translations[0];
    }

    callback(err, translations, resp);
  });
};

/**
 * A custom request implementation. Requests to this API use an API key for an
 * application, not a bearer token from a service account. This means we skip
 * the `makeAuthenticatedRequest` portion of the typical request lifecycle, and
 * manually authenticate the request here.
 *
 * @private
 *
 * @param {object} reqOpts - Request options that are passed to `request`.
 * @param {function} callback - The callback function passed to `request`.
 */
Translate.prototype.request = function(reqOpts, callback) {
  var BASE_URL = 'https://www.googleapis.com/language/translate/v2';

  reqOpts.uri = BASE_URL + reqOpts.uri;

  reqOpts = extend(true, {}, reqOpts, {
    qs: {
      key: this.key
    },
    headers: {
      'User-Agent': PKG.name + '/' + PKG.version
    }
  });

  common.util.makeRequest(reqOpts, this.options, callback);
};

module.exports = Translate;
