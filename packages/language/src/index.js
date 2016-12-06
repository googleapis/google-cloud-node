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
var is = require('is');
var v1 = require('./v1');

/**
 * @type {module:language/document}
 * @private
 */
var Document = require('./document.js');

/**
 * The [Google Cloud Natural Language](https://cloud.google.com/natural-language/docs)
 * API provides natural language understanding technologies to developers,
 * including sentiment analysis, entity recognition, and syntax analysis. This
 * API is part of the larger Cloud Machine Learning API.
 *
 * The Cloud Natural Language API currently supports English, Spanish, and
 * Japanese for
 * [sentiment analysis](https://cloud.google.com/natural-language/docs/reference/rest/v1/documents/analyzeSentiment),
 * [entity analysis](https://cloud.google.com/natural-language/docs/reference/rest/v1/documents/analyzeEntities)
 * and
 * [syntax analysis](https://cloud.google.com/natural-language/docs/reference/rest/v1/documents/annotateText).
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

  this.api = {
    Language: v1(options).languageServiceClient(options)
  };
}

/**
 * Run an annotation of a block of text.
 *
 * NOTE: This is a convenience method which doesn't require creating a
 * {module:language/document} object. If you are only running a single
 * detection, this may be more convenient. However, if you plan to run multiple
 * detections, it's easier to create a {module:language/document} object.
 *
 * @resource [documents.annotate API Documentation]{@link https://cloud.google.com/natural-language/reference/rest/v1/documents/annotateText}
 *
 * @param {string|module:storage/file} content - Inline content or a Storage
 *     File object.
 * @param {object=} options - Configuration object. See
 *     [documents.annotateText](https://cloud.google.com/natural-language/reference/rest/v1/documents/annotateText#request-body).
 * @param {string} options.encoding - `UTF8`, `UTF16`, or `UTF32`. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1/EncodingType).
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
 * // Specify the language the text is written in.
 * //-
 * var options = {
 *   language: 'es',
 *   entities: true
 * };
 *
 * language.annotate('¿Dónde está la sede de Google?', options, callback);
 *
 * //-
 * // Verbose mode may also be enabled for more detailed results.
 * //-
 * var options = {
 *   verbose: true
 * };
 *
 * language.annotate('Hello!', options, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * language.annotate('Hello!').then(function(data) {
 *   var entities = data[0];
 *   var apiResponse = data[1];
 * });
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
 * @resource [documents.analyzeEntities API Documentation]{@link https://cloud.google.com/natural-language/reference/rest/v1/documents/analyzeEntities}
 *
 * @param {string|module:storage/file} content - Inline content or a Storage
 *     File object.
 * @param {object=} options - Configuration object. See
 *     [documents.annotateText](https://cloud.google.com/natural-language/reference/rest/v1/documents/analyzeEntities#request-body).
 * @param {string} options.encoding - `UTF8`, `UTF16`, or `UTF32`. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1/EncodingType).
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
 * // Specify the language the text is written in.
 * //-
 * var options = {
 *   language: 'es'
 * };
 *
 * language.detectEntities('Axel Foley es de Detroit', options, callback);
 *
 * //-
 * // Verbose mode may also be enabled for more detailed results.
 * //-
 * var options = {
 *   verbose: true
 * };
 *
 * language.detectEntities('Axel Foley is from Detroit', options, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * language.detectEntities('Axel Foley is from Detroit').then(function(data) {
 *   var entities = data[0];
 *   var apiResponse = data[1];
 * });
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
 * @resource [documents.analyzeSentiment API Documentation]{@link https://cloud.google.com/natural-language/reference/rest/v1/documents/analyzeSentiment}
 *
 * @param {string|module:storage/file} content - Inline content or a Storage
 *     File object.
 * @param {object=} options - Configuration object. See
 *     [documents.annotateText](https://cloud.google.com/natural-language/reference/rest/v1/documents/analyzeSentiment#request-body).
 * @param {string} options.encoding - `UTF8`, `UTF16`, or `UTF32`. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1/EncodingType).
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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * language.detectSentiment('Hello!').then(function(data) {
 *   var sentiment = data[0];
 *   var apiResponse = data[1];
 * });
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
 * Detect the syntax of a block of text.
 *
 * NOTE: This is a convenience method which doesn't require creating a
 * {module:language/document} object. If you are only running a single
 * detection, this may be more convenient. However, if you plan to run multiple
 * detections, it's easier to create a {module:language/document} object.
 *
 * @resource [documents.analyzeSyntax API Documentation]{@link https://cloud.google.com/natural-language/reference/rest/v1/documents/analyzeSyntax}
 *
 * @param {string|module:storage/file} content - Inline content or a Storage
 *     File object.
 * @param {object=} options - Configuration object. See
 *     [documents.analyzeSyntax](https://cloud.google.com/natural-language/reference/rest/v1/documents/analyzeSyntax#request-body).
 * @param {string} options.encoding - `UTF8`, `UTF16`, or `UTF32`. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1/EncodingType).
 * @param {string} options.language - The language of the text.
 * @param {string} options.type - The type of document, either `html` or `text`.
 * @param {boolean} options.verbose - Enable verbose mode for more detailed
 *     results. Default: `false`
 * @param {function} callback - See {module:language/document#detectSyntax}.
 *
 * @example
 * //-
 * // See {module:language/document#detectSyntax} for a detailed breakdown of
 * // the arguments your callback will be executed with.
 * //-
 * function callback(err, syntax, apiResponse) {}
 *
 * language.detectSyntax('Axel Foley is from Detroit', callback);
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
 * language.detectSyntax(file, callback);
 *
 * //-
 * // Specify HTML content.
 * //-
 * var options = {
 *   type: 'html'
 * };
 *
 * language.detectSyntax('Axel Foley is from Detroit', options, callback);
 *
 * //-
 * // Specify the language the text is written in.
 * //-
 * var options = {
 *   language: 'es'
 * };
 *
 * language.detectSyntax('Axel Foley es de Detroit', options, callback);
 *
 * //-
 * // Verbose mode may also be enabled for more detailed results.
 * //-
 * var options = {
 *   verbose: true
 * };
 *
 * language.detectSyntax('Axel Foley is from Detroit', options, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * language.detectSyntax('Axel Foley is from Detroit').then(function(data) {
 *   var syntax = data[0];
 *   var apiResponse = data[1];
 * });
 */
Language.prototype.detectSyntax = function(content, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    content: content
  });

  var document = this.document(options);
  document.detectSyntax(options, callback);
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
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1/EncodingType).
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
 * // Create a Document object with pre-defined configuration, such as its
 * // language.
 * //-
 * var document = language.document('¿Dónde está la sede de Google?', {
 *   language: 'es'
 * });
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
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1/EncodingType).
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
 * // Create a Document object with pre-defined configuration, such as its
 * // language.
 * //-
 * var document = language.html('&lt;h1>Titulo del documento&lt;/h1>', {
 *   language: 'es'
 * });
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
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1/EncodingType).
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
 * // Create a Document object with pre-defined configuration, such as its
 * // language.
 * //-
 * var document = language.text('¿Dónde está la sede de Google?', {
 *   language: 'es'
 * });
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

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Language, {
  exclude: ['document', 'html', 'text']
});

module.exports = Language;
module.exports.v1 = v1;
