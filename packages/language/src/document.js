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
 * @module language/document
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var extend = require('extend');
var format = require('string-format-obj');
var is = require('is');
var prop = require('propprop');

/*! Developer Documentation
 *
 * @param {module:language} language - The parent Language object.
 */
/*
 * Create a Natural Language Document object. From this object, you will be able
 * to run multiple detections.
 *
 * @constructor
 * @alias module:language/document
 *
 * @param {object|string|module:storage/file} config - Configuration object, the
 *     inline content of the document, or a Storage File object.
 * @param {string|module:storage/file} options.content - If using `config` as an
 *     object to specify the encoding and/or language of the document, use this
 *     property to pass the inline content of the document or a Storage File
 *     object.
 * @param {string} options.language - The language of the text.
 * @return {module:language/document}
 *
 * @example
 * var textToAnalyze = [
 *   'Google is an American multinational technology company specializing in',
 *   'Internet-related services and products.'
 * ].join(' ');
 *
 * var document = language.document(textToAnalyze);
 *
 * //-
 * // Create a Document object with pre-defined configuration, such as its
 * // language.
 * //-
 * var spanishDocument = language.document('¿Dónde está la sede de Google?', {
 *   language: 'es'
 * });
 */
function Document(language, config) {
  var content = config.content || config;

  this.api = language.api;
  this.encodingType = this.detectEncodingType_(config);

  this.document = {};

  if (config.language) {
    this.document.language = config.language;
  }

  if (config.type) {
    this.document.type = config.type.toUpperCase();

    if (this.document.type === 'TEXT') {
      this.document.type = 'PLAIN_TEXT';
    }
  } else {
    // Default to plain text.
    this.document.type = 'PLAIN_TEXT';
  }

  if (common.util.isCustomType(content, 'storage/file')) {
    this.document.gcsContentUri = format('gs://{bucket}/{file}', {
      bucket: encodeURIComponent(content.bucket.id),
      file: encodeURIComponent(content.id)
    });
  } else {
    this.document.content = content;

    if (Buffer.isBuffer(content)) {
      this.encodingType = 'UTF8';
    }
  }
}

/**
 * Labels that can be used to represent a token.
 *
 * @private
 * @type {object}
 */
Document.LABEL_DESCRIPTIONS = {
  UNKNOWN: 'Unknown',
  ABBREV: 'Abbreviation modifier',
  ACOMP: 'Adjectival complement',
  ADVCL: 'Adverbial clause modifier',
  ADVMOD: 'Adverbial modifier',
  AMOD: 'Adjectival modifier of an NP',
  APPOS: 'Appositional modifier of an NP',
  ATTR: 'Attribute dependent of a copular verb',
  AUX: 'Auxiliary (non-main) verb',
  AUXPASS: 'Passive auxiliary',
  CC: 'Coordinating conjunction',
  CCOMP: 'Clausal complement of a verb or adjective',
  CONJ: 'Conjunct',
  CSUBJ: 'Clausal subject',
  CSUBJPASS: 'Clausal passive subject',
  DEP: 'Dependency (unable to determine)',
  DET: 'Determiner',
  DISCOURSE: 'Discourse',
  DOBJ: 'Direct object',
  EXPL: 'Expletive',
  GOESWITH: ' Goes with (part of a word in a text not well edited)',
  IOBJ: 'Indirect object',
  MARK: 'Marker (word introducing a subordinate clause)',
  MWE: 'Multi-word expression',
  MWV: 'Multi-word verbal expression',
  NEG: 'Negation modifier',
  NN: 'Noun compound modifier',
  NPADVMOD: 'Noun phrase used as an adverbial modifier',
  NSUBJ: 'Nominal subject',
  NSUBJPASS: 'Passive nominal subject',
  NUM: 'Numeric modifier of a noun',
  NUMBER: 'Element of compound number',
  P: 'Punctuation mark',
  PARATAXIS: 'Parataxis relation',
  PARTMOD: 'Participial modifier',
  PCOMP: 'The complement of a preposition is a clause',
  POBJ: 'Object of a preposition',
  POSS: 'Possession modifier',
  POSTNEG: 'Postverbal negative particle',
  PRECOMP: 'Predicate complement',
  PRECONJ: 'Preconjunt',
  PREDET: 'Predeterminer',
  PREF: 'Prefix',
  PREP: 'Prepositional modifier',
  PRONL: 'The relationship between a verb and verbal morpheme',
  PRT: 'Particle',
  PS: 'Associative or possessive marker',
  QUANTMOD: 'Quantifier phrase modifier',
  RCMOD: 'Relative clause modifier',
  RCMODREL: 'Complementizer in relative clause',
  RDROP: 'Ellipsis without a preceding predicate',
  REF: 'Referent',
  REMNANT: 'Remnant',
  REPARANDUM: 'Reparandum',
  ROOT: 'Root',
  SNUM: 'Suffix specifying a unit of number',
  SUFF: 'Suffix',
  TMOD: 'Temporal modifier',
  TOPIC: 'Topic marker',
  VMOD: 'Clause headed by an infinite form of the verb that modifies a noun',
  VOCATIVE: 'Vocative',
  XCOMP: 'Open clausal complement',
  SUFFIX: 'Name suffix',
  TITLE: 'Name title',
  ADVPHMOD: 'Adverbial phrase modifier',
  AUXCAUS: 'Causative auxiliary',
  AUXVV: 'Helper auxiliary',
  DTMOD: 'Rentaishi (Prenominal modifier)',
  FOREIGN: 'Foreign words',
  KW: 'Keyword',
  LIST: 'List for chains of comparable items',
  NOMC: 'Nominalized clause',
  NOMCSUBJ: 'Nominalized clausal subject',
  NOMCSUBJPASS: 'Nominalized clausal passive',
  NUMC: 'Compound of numeric modifier',
  COP: 'Copula',
  DISLOCATED: 'Dislocated relation (for fronted/topicalized elements)'
};

/**
 * The parts of speech that will be recognized by the Natural Language API.
 *
 * @private
 * @type {object}
 */
Document.PART_OF_SPEECH = {
  UNKNOWN: 'Unknown',
  ADJ: 'Adjective',
  ADP: 'Adposition (preposition and postposition)',
  ADV: 'Adverb',
  CONJ: 'Conjunction',
  DET: 'Determiner',
  NOUN: 'Noun (common and proper)',
  NUM: 'Cardinal number',
  PRON: 'Pronoun',
  PRT: 'Particle or other function word',
  PUNCT: 'Punctuation',
  VERB: 'Verb (all tenses and modes)',
  X: 'Other: foreign words, typos, abbreviations',
  AFFIX: 'Affix'
};

/**
 * Run an annotation of the text from the document.
 *
 * By default, all annotation types are requested:
 *
 *   - The sentiment of the document (positive or negative)
 *   - The entities of the document (people, places, things, etc.)
 *   - The syntax of the document (adjectives, nouns, verbs, etc.)
 *
 * See the examples below for how to request a subset of those types.
 *
 * If you only need one type of annotation, you may appreciate one of these
 * other methods from our API:
 *
 *   - {module:language#detectEntities}
 *   - {module:language#detectSentiment}
 *   - {module:language#detectSyntax}
 *
 * @resource [documents.annotateText API Documentation]{@link https://cloud.google.com/natural-language/reference/rest/v1/documents/annotateText}
 *
 * @param {object=} options - Configuration object. See
 *     [documents.annotateText](https://cloud.google.com/natural-language/docs/reference/rest/v1/documents/annotateText#features).
 * @param {string} options.encoding - `UTF8` (also, `buffer`), `UTF16` (also
 *     `string`), or `UTF32`. (Alias for `options.encodingType`). Default:
 *     'UTF8' if a Buffer, otherwise 'UTF16'. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1/EncodingType)
 * @param {boolean} options.entities - Detect the entities from this document.
 *     By default, all features (`entities`, `sentiment`, and `syntax`) are
 *     enabled. By overriding any of these values, all defaults are switched to
 *     `false`. (Alias for `options.extractEntities`)
 * @param {number} options.sentiment - Detect the sentiment from this document.
 *     By default, all features (`entities`, `sentiment`, and `syntax`) are
 *     enabled. By overriding any of these values, all defaults are switched to
 *     `false`. (Alias for `options.extractSentiment`)
 * @param {boolean} options.syntax - Detect the syntax from this document. By
 *     default, all features (`entities`, `sentiment`, and `syntax`) are
 *     enabled. By overriding any of these values, all defaults are switched to
 *     `false`. (Alias for `options.extractDocumentSyntax`)
 * @param {boolean} options.verbose - Enable verbose mode for more detailed
 *     results. Default: `false`
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error occurred while making this request.
 * @param {object} callback.annotation - The formatted API response.
 * @param {string} callback.annotation.language - The language detected from the
 *     text.
 * @param {number} callback.annotation.sentiment - A value in the range of
 *     `-1` (negative) to `1` (positive).
 * @param {object} callback.annotation.entities - The recognized entities from
 *     the text, grouped by the type of entity.
 * @param {string[]} callback.annotation.entities.art - Art entities detected
 *     from the text. This is only present if detections of this type were
 *     found.
 * @param {string[]} callback.annotation.entities.events - Event entities
 *     detected from the text. This is only present if detections of this type
 *     were found.
 * @param {string[]} callback.annotation.entities.goods - Consumer good entities
 *     detected from the text. This is only present if detections of this type
 *     were found.
 * @param {string[]} callback.annotation.entities.organizations - Organization
 *     entities detected from the text. This is only present if detections of
 *     this type were found.
 * @param {string[]} callback.annotation.entities.other - Other entities
 *     detected from the text. This is only present if detections of this type
 *     were found.
 * @param {string[]} callback.annotation.entities.people - People entities
 *     detected from the text. This is only present if detections of this type
 *     were found.
 * @param {string[]} callback.annotation.entities.places - Place entities
 *     detected from the text. This is only present if detections of this type
 *     were found.
 * @param {string[]} callback.annotation.entities.unknown - Unknown entities
 *     detected from the text. This is only present if detections of this type
 *     were found.
 * @param {string[]} callback.annotation.sentences - Sentences detected from the
 *     text.
 * @param {object[]} callback.annotation.tokens - Parts of speech that were
 *     detected from the text.
 * @param {string} callback.annotation.tokens[].text - The piece of text
 *     analyzed.
 * @param {string} callback.annotation.tokens[].partOfSpeech - A description of
 *     the part of speech (`Noun (common and propert)`,
 *     `Verb (all tenses and modes)`, etc.).
 * @param {string} callback.annotation.tokens[].tag - A short code
 *     for the type of speech (`NOUN`, `VERB`, etc.).
 * @param {string} callback.annotations.tokens[].aspect - The characteristic of
 *     a verb that expresses time flow during an event.
 * @param {string} callback.annotations.tokens[].case - The grammatical function
 *     performed by a noun or pronoun in a phrase, clause, or sentence.
 * @param {string} callback.annotations.tokens[].form - Form categorizes
 *     different forms of verbs, adjectives, adverbs, etc.
 * @param {string} callback.annotations.tokens[].gender - Gender classes of
 *     nouns reflected in the behaviour of associated words
 * @param {string} callback.annotations.tokens[].mood - The grammatical feature
 *     of verbs, used for showing modality and attitude.
 * @param {string} callback.annotations.tokens[].number - Count distinctions.
 * @param {string} callback.annotations.tokens[].person - The distinction
 *     between the speaker, second person, third person, etc.
 * @param {string} callback.annotations.tokens[].proper - This category shows if
 *     the token is part of a proper name.
 * @param {string} callback.annotations.tokens[].reciprocity - Reciprocal
 *     features of a pronoun
 * @param {string} callback.annotations.tokens[].tense - Time reference.
 * @param {string} callback.annotations.tokens[].voice - The relationship
 *     between the action that a verb expresses and the participants identified
 *     by its arguments.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * document.annotate(function(err, annotation) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // annotation = {
 *   //   language: 'en',
 *   //   sentiment: 1,
 *   //   entities: {
 *   //     organizations: [
 *   //       'Google'
 *   //     ],
 *   //     places: [
 *   //       'American'
 *   //     ]
 *   //   },
 *   //   sentences: [
 *   //     'Google is an American multinational technology company ' +
 *   //     'specializing in Internet-related services and products.'
 *   //   ],
 *   //   tokens: [
 *   //     {
 *   //       text: 'Google',
 *   //       partOfSpeech: 'Noun (common and proper)',
 *   //       tag: 'NOUN',
 *   //       aspect: 'PERFECTIVE',
 *   //       case: 'ADVERBIAL',
 *   //       form: 'ADNOMIAL',
 *   //       gender: 'FEMININE',
 *   //       mood: 'IMPERATIVE',
 *   //       number: 'SINGULAR',
 *   //       person: 'FIRST',
 *   //       proper: 'PROPER',
 *   //       reciprocity: 'RECIPROCAL',
 *   //       tense: 'PAST',
 *   //       voice: 'PASSIVE'
 *   //     },
 *   //     {
 *   //       text: 'is',
 *   //       partOfSpeech: 'Verb (all tenses and modes)',
 *   //       tag: 'VERB',
 *   //       aspect: 'PERFECTIVE',
 *   //       case: 'ADVERBIAL',
 *   //       form: 'ADNOMIAL',
 *   //       gender: 'FEMININE',
 *   //       mood: 'IMPERATIVE',
 *   //       number: 'SINGULAR',
 *   //       person: 'FIRST',
 *   //       proper: 'PROPER',
 *   //       reciprocity: 'RECIPROCAL',
 *   //       tense: 'PAST',
 *   //       voice: 'PASSIVE'
 *   //     },
 *   //     ...
 *   //   ]
 *   // }
 * });
 *
 * //-
 * // To request only certain annotation types, provide an options object.
 * //-
 * var options = {
 *   entities: true,
 *   sentiment: true
 * };
 *
 * document.annotate(options, function(err, annotation) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // annotation = {
 *   //   language: 'en',
 *   //   sentiment: 1,
 *   //   entities: {
 *   //     organizations: [
 *   //       'Google'
 *   //     ],
 *   //     places: [
 *   //       'American'
 *   //     ]
 *   //   }
 *   // }
 * });
 *
 * //-
 * // Verbose mode may also be enabled for more detailed results.
 * //-
 * var options = {
 *   verbose: true
 * };
 *
 * document.annotate(options, function(err, annotation) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // annotation = {
 *   //   language: 'en',
 *   //   sentiment: {
 *   //     score: 1,
 *   //     magnitude: 4
 *   //   },
 *   //   entities: {
 *   //     organizations: [
 *   //       {
 *   //         name: 'Google',
 *   //         type: 'ORGANIZATION',
 *   //         metadata: {
 *   //           wikipedia_url: 'http://en.wikipedia.org/wiki/Google'
 *   //         },
 *   //         salience: 0.65137446,
 *   //         mentions: [
 *   //           {
 *   //             text: {
 *   //               content: 'Google',
 *   //               beginOffset: -1
 *   //             },
 *   //             type: 'PROPER'
 *   //           }
 *   //         ]
 *   //       }
 *   //     ],
 *   //     places: [
 *   //       {
 *   //         name: 'American',
 *   //         type: 'LOCATION',
 *   //         metadata: {
 *   //           wikipedia_url: 'http://en.wikipedia.org/wiki/United_States'
 *   //         },
 *   //         salience: 0.13947370648384094,
 *   //         mentions: [
 *   //           {
 *   //             text: [
 *   //               {
 *   //                 content: 'American',
 *   //                 beginOffset: -1
 *   //               },
 *   //               type: 'PROPER'
 *   //             ]
 *   //           }
 *   //         ]
 *   //       }
 *   //     ]
 *   //   },
 *   //   sentences: [
 *   //     {
 *   //       text: {
 *   //         content:
 *   //           'Google is an American multinational technology company' +
 *   //           'specializing in Internet-related services and products.',
 *   //         beginOffset: -1
 *   //       }
 *   //     }
 *   //   ],
 *   //   tokens: [
 *   //     {
 *   //       text: {
 *   //         content: 'Google',
 *   //         beginOffset: -1
 *   //       },
 *   //       partOfSpeech: {
 *   //         tag: 'NOUN',
 *   //         aspect: 'PERFECTIVE',
 *   //         case: 'ADVERBIAL',
 *   //         form: 'ADNOMIAL',
 *   //         gender: 'FEMININE',
 *   //         mood: 'IMPERATIVE',
 *   //         number: 'SINGULAR',
 *   //         person: 'FIRST',
 *   //         proper: 'PROPER',
 *   //         reciprocity: 'RECIPROCAL',
 *   //         tense: 'PAST',
 *   //         voice: 'PASSIVE'
 *   //       },
 *   //       dependencyEdge: {
 *   //         headTokenIndex: 1,
 *   //         label: 'NSUBJ',
 *   //         description: 'Nominal subject'
 *   //       },
 *   //       lemma: 'Google'
 *   //     },
 *   //     ...
 *   //   ]
 *   // }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * document.annotate().then(function(data) {
 *   var annotation = data[0];
 *   var apiResponse = data[1];
 * });
 */
Document.prototype.annotate = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var features = {
    extractDocumentSentiment: true,
    extractEntities: true,
    extractSyntax: true
  };

  var featuresRequested = {
    extractDocumentSentiment:
      (options.extractDocumentSentiment || options.sentiment) === true,
    extractEntities:
      (options.extractEntities || options.entities) === true,
    extractSyntax:
      (options.extractSyntax || options.syntax) === true
  };

  var numFeaturesRequested = 0;

  for (var featureRequested in featuresRequested) {
    if (featuresRequested[featureRequested]) {
      numFeaturesRequested++;
    }
  }

  if (numFeaturesRequested > 0) {
    features = featuresRequested;
  }

  var verbose = options.verbose === true;

  this.api.Language.annotateText({
    document: this.document,
    features: features,
    encodingType: this.detectEncodingType_(options)
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var originalResp = extend(true, {}, resp);

    var annotation = {
      language: resp.language
    };

    if (resp.documentSentiment && features.extractDocumentSentiment) {
      var sentiment = resp.documentSentiment;
      annotation.sentiment = Document.formatSentiment_(sentiment, verbose);
    }

    if (resp.entities) {
      annotation.entities = Document.formatEntities_(resp.entities, verbose);
    }

    // This prevents empty `sentences` and `tokens` arrays being returned to
    // users who never wanted sentences or tokens to begin with.
    if (numFeaturesRequested === 0 || featuresRequested.extractSyntax) {
      annotation.sentences = Document.formatSentences_(resp.sentences, verbose);
      annotation.tokens = Document.formatTokens_(resp.tokens, verbose);
    }

    callback(null, annotation, originalResp);
  });
};

/**
 * Detect entities from the document.
 *
 * @resource [documents.analyzeEntities API Documentation]{@link https://cloud.google.com/natural-language/reference/rest/v1/documents/analyzeEntities}
 *
 * @param {object=} options - Configuration object. See
 *     [documents.annotateText](https://cloud.google.com/natural-language/reference/rest/v1/documents/analyzeEntities#request-body).
 * @param {string} options.encoding - `UTF8` (also, `buffer`), `UTF16` (also
 *     `string`), or `UTF32`. (Alias for `options.encodingType`). Default:
 *     'UTF8' if a Buffer, otherwise 'UTF16'. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1/EncodingType)
 * @param {boolean} options.verbose - Enable verbose mode for more detailed
 *     results. Default: `false`
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error occurred while making this request.
 * @param {object} callback.entities - The recognized entities from the text,
 *     grouped by the type of entity.
 * @param {string[]} callback.entities.art - Art entities detected from the
 *     text. This is only present if detections of this type were found.
 * @param {string[]} callback.entities.events - Event entities detected from the
 *     text. This is only present if detections of this type were found.
 * @param {string[]} callback.entities.goods - Consumer good entities detected
 *     from the text. This is only present if detections of this type were
 *     found.
 * @param {string[]} callback.entities.organizations - Organization entities
 *     detected from the text. This is only present if detections of this type
 *     were found.
 * @param {string[]} callback.entities.other - Other entities detected from the
 *     text. This is only present if detections of this type were found.
 * @param {string[]} callback.entities.people - People entities detected from
 *     the text. This is only present if detections of this type were found.
 * @param {string[]} callback.entities.places - Place entities detected from the
 *     text. This is only present if detections of this type were found.
 * @param {string[]} callback.entities.unknown - Unknown entities detected from
 *     the text. This is only present if detections of this type were found.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * document.detectEntities(function(err, entities) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // entities = {
 *   //   organizations: [
 *   //     'Google'
 *   //   ],
 *   //   places: [
 *   //     'American'
 *   //   ]
 *   // }
 * });
 *
 * //-
 * // Verbose mode may also be enabled for more detailed results.
 * //-
 * var options = {
 *   verbose: true
 * };
 *
 * document.detectEntities(options, function(err, entities) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // entities = {
 *   //   organizations: [
 *   //     {
 *   //       name: 'Google',
 *   //       type: 'ORGANIZATION',
 *   //       metadata: {
 *   //         wikipedia_url: 'http: *   //en.wikipedia.org/wiki/Google'
 *   //       },
 *   //       salience: 0.65137446,
 *   //       mentions: [
 *   //         {
 *   //           text: {
 *   //             content: 'Google',
 *   //             beginOffset: -1
 *   //           }
 *   //         }
 *   //       ]
 *   //     }
 *   //   ],
 *   //   places: [
 *   //     {
 *   //       name: 'American',
 *   //       type: 'LOCATION',
 *   //       metadata: {
 *   //         wikipedia_url: 'http: *   //en.wikipedia.org/wiki/United_States'
 *   //       },
 *   //       salience: 0.13947371,
 *   //       mentions: [
 *   //         {
 *   //           text: {
 *   //             content: 'American',
 *   //             beginOffset: -1
 *   //           }
 *   //         }
 *   //       ]
 *   //     }
 *   //   ]
 *   // }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * document.detectEntities().then(function(data) {
 *   var entities = data[0];
 *   var apiResponse = data[1];
 * });
 */
Document.prototype.detectEntities = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var verbose = options.verbose === true;

  this.api.Language.analyzeEntities({
    document: this.document,
    encodingType: this.detectEncodingType_(options)
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var originalResp = extend(true, {}, resp);
    var groupedEntities = Document.formatEntities_(resp.entities, verbose);

    callback(null, groupedEntities, originalResp);
  });
};

/**
 * Detect the sentiment of the text in this document.
 *
 * @resource [documents.analyzeSentiment API Documentation]{@link https://cloud.google.com/natural-language/reference/rest/v1/documents/analyzeSentiment}
 *
 * @param {object=} options - Configuration object. See
 *     [documents.annotateText](https://cloud.google.com/natural-language/reference/rest/v1/documents/analyzeSentiment#request-body).
 * @param {string} options.encoding - `UTF8` (also, `buffer`), `UTF16` (also
 *     `string`), or `UTF32`. (Alias for `options.encodingType`). Default:
 *     'UTF8' if a Buffer, otherwise 'UTF16'. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1/EncodingType)
 * @param {boolean} options.verbose - Enable verbose mode for more detailed
 *     results. Default: `false`
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error occurred while making this request.
 * @param {number} callback.sentiment - A value in the range of `-1` (negative)
 *     to `1` (positive).
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * document.detectSentiment(function(err, sentiment) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // sentiment = 1
 * });
 *
 * //-
 * // Verbose mode may also be enabled for more detailed results.
 * //-
 * var options = {
 *   verbose: true
 * };
 *
 * document.detectSentiment(options, function(err, sentiment) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // sentiment = {
 *   //   score: 1,
 *   //   magnitude: 4,
 *   //   sentences: [
 *   //     {
 *   //       text: {
 *   //         content:
 *   //           'Google is an American multinational technology company' +
 *   //           'specializing in Internet-related services and products.',
 *   //         beginOffset: -1
 *   //       }
 *   //     }
 *   //   ],
 *   //   language: 'en'
 *   // }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * document.detectSentiment().then(function(data) {
 *   var sentiment = data[0];
 *   var apiResponse = data[1];
 * });
 */
Document.prototype.detectSentiment = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var verbose = options.verbose === true;

  this.api.Language.analyzeSentiment({
    document: this.document,
    encodingType: this.detectEncodingType_(options)
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var originalResp = extend(true, {}, resp);
    var sentiment = Document.formatSentiment_(resp.documentSentiment, verbose);

    if (verbose) {
      sentiment = extend(sentiment, {
        sentences: Document.formatSentences_(resp.sentences, verbose),
        language: resp.language
      });
    }

    callback(null, sentiment, originalResp);
  });
};

/**
 * Detect syntax from the document.
 *
 * @resource [documents.analyzeSyntax API Documentation]{@link https://cloud.google.com/natural-language/reference/rest/v1/documents/analyzeSyntax}
 *
 * @param {object=} options - Configuration object. See
 *     [documents.annotateSyntax](https://cloud.google.com/natural-language/reference/rest/v1/documents/analyzeSyntax#request-body).
 * @param {string} options.encoding - `UTF8` (also, `buffer`), `UTF16` (also
 *     `string`), or `UTF32`. (Alias for `options.encodingType`). Default:
 *     'UTF8' if a Buffer, otherwise 'UTF16'. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1/EncodingType)
 * @param {boolean} options.verbose - Enable verbose mode for more detailed
 *     results. Default: `false`
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error occurred while making this request.
 * @param {object} callback.syntax - The syntax recognized from the text.
 * @param {string} callback.syntax.language - The language detected from the
 *     text.
 * @param {string[]} callback.syntax.sentences - Sentences detected from the
 *     text.
 * @param {object[]} callback.syntax.tokens - Parts of speech that were
 *     detected from the text.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * document.detectSyntax(function(err, syntax) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // syntax = {
 *   //   sentences: [
 *   //     'Google is an American multinational technology company ' +
 *   //     'specializing in Internet-related services and products.'
 *   //   ],
 *   //   tokens: [
 *   //     {
 *   //       text: 'Google',
 *   //       partOfSpeech: 'Noun (common and proper)',
 *   //       tag: 'NOUN',
 *   //       aspect: 'PERFECTIVE',
 *   //       case: 'ADVERBIAL',
 *   //       form: 'ADNOMIAL',
 *   //       gender: 'FEMININE',
 *   //       mood: 'IMPERATIVE',
 *   //       number: 'SINGULAR',
 *   //       person: 'FIRST',
 *   //       proper: 'PROPER',
 *   //       reciprocity: 'RECIPROCAL',
 *   //       tense: 'PAST',
 *   //       voice: 'PASSIVE'
 *   //     },
 *   //     {
 *   //       text: 'is',
 *   //       partOfSpeech: 'Verb (all tenses and modes)',
 *   //       tag: 'VERB',
 *   //       aspect: 'PERFECTIVE',
 *   //       case: 'ADVERBIAL',
 *   //       form: 'ADNOMIAL',
 *   //       gender: 'FEMININE',
 *   //       mood: 'IMPERATIVE',
 *   //       number: 'SINGULAR',
 *   //       person: 'FIRST',
 *   //       proper: 'PROPER',
 *   //       reciprocity: 'RECIPROCAL',
 *   //       tense: 'PAST',
 *   //       voice: 'PASSIVE'
 *   //     },
 *   //     ...
 *   //   ],
 *   //   language: 'en'
 *   // }
 * });
 *
 * //-
 * // Verbose mode may also be enabled for more detailed results.
 * //-
 * var options = {
 *   verbose: true
 * };
 *
 * document.detectSyntax(options, function(err, syntax) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // syntax = {
 *   //   sentences: [
 *   //     {
 *   //       text: {
 *   //         content:
 *   //           'Google is an American multinational technology company' +
 *   //           'specializing in Internet-related services and products.',
 *   //         beginOffset: -1
 *   //       },
 *   //       sentiment: {
 *   //         score: 1
 *   //         magnitude: 4
 *   //       }
 *   //     }
 *   //   ],
 *   //   tokens: [
 *   //     {
 *   //       text: {
 *   //         content: 'Google',
 *   //         beginOffset: -1
 *   //       },
 *   //       partOfSpeech: {
 *   //         tag: 'NOUN',
 *   //         aspect: 'PERFECTIVE',
 *   //         case: 'ADVERBIAL',
 *   //         form: 'ADNOMIAL',
 *   //         gender: 'FEMININE',
 *   //         mood: 'IMPERATIVE',
 *   //         number: 'SINGULAR',
 *   //         person: 'FIRST',
 *   //         proper: 'PROPER',
 *   //         reciprocity: 'RECIPROCAL',
 *   //         tense: 'PAST',
 *   //         voice: 'PASSIVE'
 *   //       },
 *   //       dependencyEdge: {
 *   //         headTokenIndex: 1,
 *   //         label: 'NSUBJ',
 *   //         description: 'Nominal subject'
 *   //       },
 *   //       lemme: 'Google'
 *   //     }
 *   //   ],
 *   //   language: 'en'
 *   // }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * document.detectSyntax().then(function(data) {
 *   var syntax = data[0];
 *   var apiResponse = data[1];
 * });
 */
Document.prototype.detectSyntax = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var verbose = options.verbose === true;

  this.api.Language.analyzeSyntax({
    document: this.document,
    encodingType: this.detectEncodingType_(options)
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var originalResp = extend(true, {}, resp);
    var syntax = Document.formatTokens_(resp.tokens, verbose);

    if (verbose) {
      syntax = {
        tokens: syntax,
        sentences: Document.formatSentences_(resp.sentences, verbose),
        language: resp.language
      };
    }

    callback(null, syntax, originalResp);
  });
};

/**
 * Take a raw response from the API and make it more user-friendly.
 *
 * @private
 *
 * @param {object} entities - A group of entities returned from the API.
 * @param {boolean} verbose - Enable verbose mode for more detailed results.
 * @return {object} - The formatted entity object.
 */
Document.formatEntities_ = function(entities, verbose) {
  var GROUP_NAME_TO_TYPE = {
    UNKNOWN: 'unknown',
    PERSON: 'people',
    LOCATION: 'places',
    ORGANIZATION: 'organizations',
    EVENT: 'events',
    WORK_OF_ART: 'art',
    CONSUMER_GOOD: 'goods',
    OTHER: 'other'
  };

  var groupedEntities = entities.reduce(function(acc, entity) {
    entity = extend(true, {}, entity);

    var groupName = GROUP_NAME_TO_TYPE[entity.type];

    acc[groupName] = arrify(acc[groupName]);
    acc[groupName].push(entity);
    acc[groupName].sort(Document.sortByProperty_('salience'));

    return acc;
  }, {});

  if (!verbose) {
    // Simplify the response to only include an array of `name`s.
    for (var groupName in groupedEntities) {
      if (groupedEntities.hasOwnProperty(groupName)) {
        groupedEntities[groupName] =
          groupedEntities[groupName].map(prop('name'));
      }
    }
  }

  return groupedEntities;
};

/**
 * Take a raw response from the API and make it more user-friendly.
 *
 * @private
 *
 * @param {object[]} sentences - A group of sentence detections returned from
 *     the API.
 * @param {boolean} verbose - Enable verbose mode for more detailed results.
 * @return {object[]|string[]} - The formatted sentences or sentence descriptor
 *     objects in verbose mode.
 */
Document.formatSentences_ = function(sentences, verbose) {
  if (!verbose) {
    sentences = sentences.map(prop('text')).map(prop('content'));
  }

  return sentences;
};

/**
 * Take a raw response from the API and make it more user-friendly.
 *
 * @private
 *
 * @param {object} sentiment - An analysis of the document's sentiment from the
 *     API.
 * @param {boolean} verbose - Enable verbose mode for more detailed results.
 * @return {number|object} - The sentiment represented as a number in the range
 *     of `-1` to `1` or an object containing `score` and `magnitude`
 *     measurements in verbose mode.
 */
Document.formatSentiment_ = function(sentiment, verbose) {
  sentiment = {
    score: sentiment.score,
    magnitude: sentiment.magnitude
  };

  if (!verbose) {
    sentiment = sentiment.score;
  }

  return sentiment;
};

/**
 * Take a raw response from the API and make it more user-friendly.
 *
 * @private
 *
 * @param {object[]} tokens - A group of syntax detections returned from the
 *     API.
 * @param {boolean} verbose - Enable verbose mode for more detailed results.
 * @return {number|object} - A slimmed down, simplified object or the original
 *     object in verbose mode.
 */
Document.formatTokens_ = function(tokens, verbose) {
  if (!verbose) {
    tokens = tokens.map(function(rawToken) {
      var token = extend({}, rawToken.partOfSpeech, {
        text: rawToken.text.content,
        partOfSpeech: Document.PART_OF_SPEECH[rawToken.partOfSpeech.tag]
      });

      if (rawToken.dependencyEdge) {
        var label = rawToken.dependencyEdge.label;

        token.dependencyEdge = extend({}, rawToken.dependencyEdge, {
          description: Document.LABEL_DESCRIPTIONS[label]
        });
      }

      for (var part in token) {
        if (token.hasOwnProperty(part) && /UNKNOWN/.test(token[part])) {
          token[part] = undefined;
        }
      }

      return token;
    });
  }

  return tokens;
};

/**
 * Comparator function to sort an array of objects by a property.
 *
 * @private
 *
 * @param {string} propertyName - The name of the property to sort by.
 * @return {function} - The comparator function.
 */
Document.sortByProperty_ = function(propertyName) {
  return function(entityA, entityB) {
    if (entityA[propertyName] < entityB[propertyName]) {
      return 1;
    }

    if (entityA[propertyName] > entityB[propertyName]) {
      return -1;
    }

    return 0;
  };
};

/**
 * Check if the user provided an encodingType, and map it to its API value.
 *
 * @param {object} options - Configuration object.
 * @param {string} options.encoding - `UTF8` (also, `buffer`), `UTF16` (also
 *     `string`), or `UTF32`. (Alias for `options.encodingType`). Default:
 *     'UTF8' if a Buffer, otherwise 'UTF16'. See
 *     [`EncodingType`](https://cloud.google.com/natural-language/reference/rest/v1/EncodingType)
 * @return {string} - The encodingType, as understood by the API.
 */
Document.prototype.detectEncodingType_ = function(options) {
  var encoding = options.encoding || options.encodingType || this.encodingType;

  if (!encoding) {
    return;
  }

  encoding = encoding.toUpperCase().replace(/[ -]/g, '');

  if (encoding === 'BUFFER') {
    encoding = 'UTF8';
  }

  if (encoding === 'STRING') {
    encoding = 'UTF16';
  }

  return encoding;
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Document);

module.exports = Document;

