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
var isHtml = require('is-html');
var prop = require('propprop');
var util = require('util');

var PKG = require('../package.json');

/**
 * With [Google Translate](https://cloud.google.com/translate), you can
 * dynamically translate text between thousands of language pairs.
 *
 * The Google Translate API lets websites and programs integrate with Google
 * Translate programmatically.
 *
 * @constructor
 * @alias module:translate
 *
 * @resource [Getting Started]{@link https://cloud.google.com/translate/v2/getting_started}
 * @resource [Identifying your application to Google]{@link https://cloud.google.com/translate/v2/using_rest#auth}
 *
 * @param {object} options - [Configuration object](#/docs).
 * @param {string=} options.key - An API key.
 *
 * @example
 * //-
 * // <h3>Custom Translate API</h3>
 * //
 * // The environment variable, `GOOGLE_CLOUD_TRANSLATE_ENDPOINT`, is honored as
 * // a custom backend which our library will send requests to.
 * //-
 */
function Translate(options) {
  if (!(this instanceof Translate)) {
    options = common.util.normalizeArguments(this, options, {
      projectIdRequired: false
    });
    return new Translate(options);
  }

  var baseUrl = 'https://translation.googleapis.com/language/translate/v2';

  if (process.env.GOOGLE_CLOUD_TRANSLATE_ENDPOINT) {
    baseUrl = process.env.GOOGLE_CLOUD_TRANSLATE_ENDPOINT
      .replace(/\/+$/, '');
  }

  if (options.key) {
    this.options = options;
    this.key = options.key;
  }

  var config = {
    baseUrl: baseUrl,
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    packageJson: require('../package.json'),
    projectIdRequired: false
  };

  common.Service.call(this, config, options);
}

util.inherits(Translate, common.Service);

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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * translate.detect('Hello').then(function(data) {
 *   var results = data[0];
 *   var apiResponse = data[2];
 * });
 */
Translate.prototype.detect = function(input, callback) {
  var inputIsArray = Array.isArray(input);
  input = arrify(input);

  this.request({
    method: 'POST',
    uri: '/detect',
    json: {
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

    if (input.length === 1 && !inputIsArray) {
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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * translate.getLanguages().then(function(data) {
 *   var languages = data[0];
 *   var apiResponse = data[1];
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
 * @param {string} options.format - Set the text's format as `html` or `text`.
 *     If not provided, we will try to auto-detect if the text given is HTML. If
 *     not, we set the format as `text`.
 * @param {string} options.from - The ISO 639-1 language code the source input
 *     is written in.
 * @param {string} options.model - Set the model type requested for this
 *     translation. Please refer to the upstream documentation for possible
 *     values.
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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * translate.translate('Hello', 'es').then(function(data) {
 *   var translation = data[0];
 *   var apiResponse = data[1];
 * });
 */
Translate.prototype.translate = function(input, options, callback) {
  var inputIsArray = Array.isArray(input);
  input = arrify(input);

  var body = {
    q: input,
    format: options.format || (isHtml(input[0]) ? 'html' : 'text')
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
    throw new Error('A target language is required to perform a translation.');
  }

  this.request({
    method: 'POST',
    uri: '',
    json: body
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var translations = resp.data.translations.map(prop('translatedText'));

    if (body.q.length === 1 && !inputIsArray) {
      translations = translations[0];
    }

    callback(err, translations, resp);
  });
};

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
Translate.prototype.request = function(reqOpts, callback) {
  if (!this.key) {
    common.Service.prototype.request.call(this, reqOpts, callback);
    return;
  }

  reqOpts.uri = this.baseUrl + reqOpts.uri;

  reqOpts = extend(true, {}, reqOpts, {
    qs: {
      key: this.key
    },
    headers: {
      'User-Agent': common.util.getUserAgentFromPackageJson(PKG)
    }
  });

  common.util.makeRequest(reqOpts, this.options, callback);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Translate);

module.exports = Translate;
