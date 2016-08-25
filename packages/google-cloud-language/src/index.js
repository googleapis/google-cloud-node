/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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
 * @module language
 */

'use strict';

var common = require('@google-cloud/common');
var extend = require('extend');
var googleProtoFiles = require('google-proto-files');
var is = require('is');
var util = require('util');

/**
 * @type {module:language/document}
 * @private
 */
var Document = require('./document.js');

var PKG = require('../package.json');

/**
 * <p class="notice">
 *   **This is a Beta release of Google Cloud Natural Language.** This API is
 *   not covered by any SLA or deprecation policy and may be subject to
 *   backward-incompatible changes.
 * </p>
 *
 * The [Google Cloud Natural Language](https://cloud.google.com/natural-language/docs)
 * API provides natural language understanding technologies to developers,
 * including sentiment analysis, entity recognition, and syntax analysis. This
 * API is part of the larger Cloud Machine Learning API.
 *
 * The Cloud Natural Language API currently supports English for
 * [sentiment analysis](https://cloud.google.com/natural-language/docs/reference/rest/v1beta1/documents/analyzeSentiment)
 * and English, Spanish, and Japanese for
 * [entity analysis](https://cloud.google.com/natural-language/docs/reference/rest/v1beta1/documents/analyzeEntities)
 * and
 * [syntax analysis](https://cloud.google.com/natural-language/docs/reference/rest/v1beta1/documents/annotateText).
 *
 * @constructor
 * @alias module:language
 *
 * @resource [Google Cloud Natural Language API Documentation]{@link https://cloud.google.com/natural-language/docs}
 *
 * @param {object} options - [Configuration object](#/docs).
 */
function Language(options) {
  if (!(this instanceof Language)) {
    options = common.util.normalizeArguments(this, options);
    return new Language(options);
  }

  var config = {
    baseUrl: 'language.googleapis.com',
    service: 'language',
    apiVersion: 'v1beta1',
    protoServices: {
      LanguageService: {
        path: googleProtoFiles.language.v1beta1,
        service: 'cloud.language'
      }
    },
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform'
    ],
    userAgent: PKG.name + '/' + PKG.version
  };

  common.GrpcService.call(this, config, options);
}

util.inherits(Language, common.GrpcService);

/**
 * Run an annotation of a block of text.
 *
 * NOTE: This is a convenience method which doesn't require creating a
 * {module:language/document} object. If you are only running a single
 * detection, this may be more convenient. However, if you plan to run multiple
 * detections, it's easier to create a {module:language/document} object.
 *
 * @resource [documents.annotate API Documentation]{@link https://cloud.google.com/natural-language/reference/rest/v1beta1/documents/annotate}
 *
 * @param {string|module:storage/file} content - Inline content or a Storage
 *     File object.
 * @param {object=} options - Configuration object.
 * @param {string} options.encoding - `UTF8`, `UTF16`, or `UTF32`. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1beta1/EncodingType).
 * @param {string} options.language - The language of the text.
 * @param {string} options.type - The type of document, either `html` or `text`.
 * @param {boolean} options.verbose - Enable verbose mode for more detailed
 *     results. Default: `false`
 * @param {function} callback - See {module:language/document#annotate}.
 *
 * @example
 * //-
 * // See {module:language/document#annotate} for a detailed breakdown of
 * // the arguments your callback will be executed with.
 * //-
 * function callback(err, entities, apiResponse) {}
 *
 * language.annotate('Hello!', callback);
 *
 * //-
 * // Or, provide a reference to a file hosted on Google Cloud Storage.
 * //-
 * var gcs = require('@google-cloud/storage')({
 *   projectId: 'grape-spaceship-123'
 * });
 * var bucket = gcs.bucket('my-bucket');
 * var file = bucket.file('my-file');
 *
 * language.annotate(file, callback);
 *
 * //-
 * // Specify HTML content.
 * //-
 * var options = {
 *   type: 'html'
 * };
 *
 * language.annotate('Hello!', options, callback);
 *
 * //-
 * // Verbose mode may also be enabled for more detailed results.
 * //-
 * var options = {
 *   verbose: true
 * };
 *
 * language.annotate('Hello!', options, callback);
 */
Language.prototype.annotate = function(content, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    content: content
  });

  var document = this.document(options);
  document.annotate(options, callback);
};

/**
 * Detect the entities from a block of text.
 *
 * NOTE: This is a convenience method which doesn't require creating a
 * {module:language/document} object. If you are only running a single
 * detection, this may be more convenient. However, if you plan to run multiple
 * detections, it's easier to create a {module:language/document} object.
 *
 * @resource [documents.analyzeEntities API Documentation]{@link https://cloud.google.com/natural-language/reference/rest/v1beta1/documents/analyzeEntities}
 *
 * @param {string|module:storage/file} content - Inline content or a Storage
 *     File object.
 * @param {object=} options - Configuration object.
 * @param {string} options.encoding - `UTF8`, `UTF16`, or `UTF32`. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1beta1/EncodingType).
 * @param {string} options.language - The language of the text.
 * @param {string} options.type - The type of document, either `html` or `text`.
 * @param {boolean} options.verbose - Enable verbose mode for more detailed
 *     results. Default: `false`
 * @param {function} callback - See {module:language/document#detectEntities}.
 *
 * @example
 * //-
 * // See {module:language/document#detectEntities} for a detailed breakdown of
 * // the arguments your callback will be executed with.
 * //-
 * function callback(err, entities, apiResponse) {}
 *
 * language.detectEntities('Axel Foley is from Detroit', callback);
 *
 * //-
 * // Or, provide a reference to a file hosted on Google Cloud Storage.
 * //-
 * var gcs = require('@google-cloud/storage')({
 *   projectId: 'grape-spaceship-123'
 * });
 * var bucket = gcs.bucket('my-bucket');
 * var file = bucket.file('my-file');
 *
 * language.detectEntities(file, callback);
 *
 * //-
 * // Specify HTML content.
 * //-
 * var options = {
 *   type: 'html'
 * };
 *
 * language.detectEntities('Axel Foley is from Detroit', options, callback);
 *
 * //-
 * // Verbose mode may also be enabled for more detailed results.
 * //-
 * var options = {
 *   verbose: true
 * };
 *
 * language.detectEntities('Axel Foley is from Detroit', options, callback);
 */
Language.prototype.detectEntities = function(content, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    content: content
  });

  var document = this.document(options);
  document.detectEntities(options, callback);
};

/**
 * Detect the sentiment of a block of text.
 *
 * NOTE: This is a convenience method which doesn't require creating a
 * {module:language/document} object. If you are only running a single
 * detection, this may be more convenient. However, if you plan to run multiple
 * detections, it's easier to create a {module:language/document} object.
 *
 * @resource [documents.analyzeSentiment API Documentation]{@link https://cloud.google.com/natural-language/reference/rest/v1beta1/documents/analyzeSentiment}
 *
 * @param {string|module:storage/file} content - Inline content or a Storage
 *     File object.
 * @param {object=} options - Configuration object.
 * @param {string} options.encoding - `UTF8`, `UTF16`, or `UTF32`. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1beta1/EncodingType).
 * @param {string} options.language - The language of the text.
 * @param {string} options.type - The type of document, either `html` or `text`.
 * @param {boolean} options.verbose - Enable verbose mode for more detailed
 *     results. Default: `false`
 * @param {function} callback - See {module:language/document#detectSentiment}.
 *
 * @example
 * //-
 * // See {module:language/document#detectSentiment} for a detailed breakdown of
 * // the arguments your callback will be executed with.
 * //-
 * function callback(err, sentiment, apiResponse) {}
 *
 * language.detectSentiment('Hello!', callback);
 *
 * //-
 * // Or, provide a reference to a file hosted on Google Cloud Storage.
 * //-
 * var gcs = require('@google-cloud/storage')({
 *   projectId: 'grape-spaceship-123'
 * });
 * var bucket = gcs.bucket('my-bucket');
 * var file = bucket.file('my-file');
 *
 * language.detectSentiment(file, callback);
 *
 * //-
 * // Specify HTML content.
 * //-
 * var options = {
 *   type: 'html'
 * };
 *
 * language.detectSentiment('&lt;h1>Document Title&lt;/h1>', options, callback);
 *
 * //-
 * // Verbose mode may also be enabled for more detailed results.
 * //-
 * var options = {
 *   verbose: true
 * };
 *
 * language.detectSentiment('Hello!', options, callback);
 */
Language.prototype.detectSentiment = function(content, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    content: content
  });

  var document = this.document(options);
  document.detectSentiment(options, callback);
};

/**
 * Create a Document object for an unknown type. If you know the type, use the
 * appropriate method below:
 *
 *   - {module:language#html} - For HTML documents.
 *   - {module:language#text} - For text documents.
 *
 * @param {object|string|module:storage/file} config - Configuration object, the
 *     inline content of the document, or a Storage File object.
 * @param {string|module:storage/file} options.content - If using `config` as an
 *     object to specify the encoding and/or language of the document, use this
 *     property to pass the inline content of the document or a Storage File
 *     object.
 * @param {string} options.encoding - `UTF8`, `UTF16`, or `UTF32`. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1beta1/EncodingType).
 * @param {string} options.language - The language of the text.
 * @return {module:language/document}
 *
 * @example
 * var document = language.document('Inline content of an unknown type.');
 *
 * //-
 * // Or, provide a reference to a file hosted on Google Cloud Storage.
 * //-
 * var gcs = require('@google-cloud/storage')({
 *   projectId: 'grape-spaceship-123'
 * });
 * var bucket = gcs.bucket('my-bucket');
 * var file = bucket.file('my-file');
 *
 * var document = language.document(file);
 *
 * //-
 * // You can now run detections on the document.
 * //
 * // See {module:language/document} for a complete list of methods available.
 * //-
 * document.detectEntities(function(err, entities) {});
 */
Language.prototype.document = function(config) {
  return new Document(this, config);
};

/**
 * Create a Document object from an HTML document. You may provide either inline
 * HTML content or a Storage File object (see {module:storage/file}).
 *
 * @param {string|module:storage/file} content - Inline HTML content or a
 *     Storage File object.
 * @param {object=} options - Configuration object.
 * @param {string} options.encoding - `UTF8`, `UTF16`, or `UTF32`. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1beta1/EncodingType).
 * @param {string} options.language - The language of the text.
 * @return {module:language/document}
 *
 * @example
 * var document = language.html('&lt;h1>Document Title&lt;/h1>');
 *
 * //-
 * // Or, provide a reference to a file hosted on Google Cloud Storage.
 * //-
 * var gcs = require('@google-cloud/storage')({
 *   projectId: 'grape-spaceship-123'
 * });
 * var bucket = gcs.bucket('my-bucket');
 * var file = bucket.file('my-file.html');
 *
 * var document = language.html(file);
 *
 * //-
 * // You can now run detections on the document.
 * //
 * // See {module:language/document} for a complete list of methods available.
 * //-
 * document.detectEntities(function(err, entities) {});
 */
Language.prototype.html = function(content, options) {
  options = extend({}, options, {
    type: 'HTML',
    content: content
  });

  return this.document(options);
};

/**
 * Create a Document object from a text-based document. You may provide either
 * inline text content or a Storage File object (see {module:storage/file}).
 *
 * @param {string|module:storage/file} content - Inline text content or a
 *     Storage File object.
 * @param {object=} options - Configuration object.
 * @param {string} options.encoding - `UTF8`, `UTF16`, or `UTF32`. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1beta1/EncodingType).
 * @param {string} options.language - The language of the text.
 * @return {module:language/document}
 *
 * @example
 * var document = language.text('This is using inline text content.');
 *
 * //-
 * // Or, provide a reference to a file hosted on Google Cloud Storage.
 * //-
 * var gcs = require('@google-cloud/storage')({
 *   projectId: 'grape-spaceship-123'
 * });
 * var bucket = gcs.bucket('my-bucket');
 * var file = bucket.file('my-file.txt');
 *
 * var document = language.text(file);
 *
 * //-
 * // You can now run detections on the document.
 * //
 * // See {module:language/document} for a complete list of methods available.
 * //-
 * document.detectEntities(function(err, entities) {});
 */
Language.prototype.text = function(content, options) {
  options = extend({}, options, {
    type: 'PLAIN_TEXT',
    content: content
  });

  return this.document(options);
};

module.exports = Language;
module.exports.v1beta1 = require('./v1beta1');
