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
 * @param {object=} config - Configuration object.
 */
/*
 * Create a Natural Language Document object. From this object, you will be able
 * to run multiple detections.
 *
 * @constructor
 * @alias module:language/document
 *
 * @example
 * var textToAnalyze = [
 *   'Google is an American multinational technology company specializing in',
 *   'Internet-related services and products.'
 * ].join(' ');
 *
 * var document = language.document(textToAnalyze);
 */
function Document(language, config) {
  var content = config.content || config;

  // `reqOpts` is the payload passed to each `request()`. This object is used as
  // the default for all API requests made with this Document.
  this.reqOpts = {
    document: {}
  };

  if (config.encoding) {
    var encodingType = config.encoding.toUpperCase().replace(/[ -]/g, '');
    this.reqOpts.encodingType = encodingType;
  }

  if (config.language) {
    this.reqOpts.document.language = config.language;
  }

  if (config.type) {
    this.reqOpts.document.type = config.type.toUpperCase();

    if (this.reqOpts.document.type === 'TEXT') {
      this.reqOpts.document.type = 'PLAIN_TEXT';
    }
  } else {
    // Default to plain text.
    this.reqOpts.document.type = 'PLAIN_TEXT';
  }

  if (common.util.isCustomType(content, 'storage/file')) {
    this.reqOpts.document.gcsContentUri = format('gs://{bucket}/{file}', {
      bucket: encodeURIComponent(content.bucket.id),
      file: encodeURIComponent(content.id)
    });
  } else {
    this.reqOpts.document.content = content;
  }

  this.request = language.request.bind(language);
}

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
 *
 * @resource [documents.annotateText API Documentation]{@link https://cloud.google.com/natural-language/reference/rest/v1beta1/documents/annotateText}
 *
 * @param {object=} options - Configuration object.
 * @param {boolean} options.entities - Detect the entities from this document.
 *     By default, all features (`entities`, `sentiment`, and `syntax`) are
 *     enabled. By overriding any of these values, all defaults are switched to
 *     `false`.
 * @param {number} options.sentiment - Detect the sentiment from this document.
 *     By default, all features (`entities`, `sentiment`, and `syntax`) are
 *     enabled. By overriding any of these values, all defaults are switched to
 *     `false`.
 * @param {boolean} options.syntax - Detect the syntax from this document. By
 *     default, all features (`entities`, `sentiment`, and `syntax`) are
 *     enabled. By overriding any of these values, all defaults are switched to
 *     `false`.
 * @param {boolean} options.verbose - Enable verbose mode for more detailed
 *     results. Default: `false`
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error occurred while making this request.
 * @param {object} callback.annotation - The formatted API response.
 * @param {string} callback.annotation.language - The language detected from the
 *     text.
 * @param {number} callback.annotation.sentiment - A value in the range of
 *     `-100` to `100`. Large numbers represent more positive sentiments.
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
 * @param {object[]} callback.annotation.tokens.text - The piece of text
 *     analyzed.
 * @param {object[]} callback.annotation.tokens.partOfSpeech - A description of
 *     the part of speech (`Noun (common and propert)`,
 *     `Verb (all tenses and modes)`, etc.).
 * @param {object[]} callback.annotation.tokens.partOfSpeechTag - A short code
 *     for the type of speech (`NOUN`, `VERB`, etc.).
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
 *   //   sentiment: 100,
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
 *   //       partOfSpeechTag: 'NOUN'
 *   //     },
 *   //     {
 *   //       text: 'is',
 *   //       partOfSpeech: 'Verb (all tenses and modes)',
 *   //       partOfSpeechTag: 'VERB'
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
 *   //   sentiment: 100,
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
 *   //     polarity: 100,
 *   //     magnitude: 40
 *   //   },
 *   //   entities: {
 *   //     organizations: [
 *   //       {
 *   //         name: 'Google',
 *   //         type: 'ORGANIZATION',
 *   //         metadata: {
 *   //           wikipedia_url: 'http://en.wikipedia.org/wiki/Google'
 *   //         },
 *   //         salience: 65.137446,
 *   //         mentions: [
 *   //           {
 *   //             text: {
 *   //               content: 'Google',
 *   //               beginOffset: -1
 *   //             }
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
 *   //         salience: 13.947370648384094,
 *   //         mentions: [
 *   //           {
 *   //             text: [
 *   //               {
 *   //                 content: 'American',
 *   //                 beginOffset: -1
 *   //               }
 *   //             ]
 *   //           }
 *   //         ]
 *   //       }
 *   //     ]
 *   //   },
 *   //   sentences: [
 *   //     {
 *   //       content:
 *   //         'Google is an American multinational technology company' +
 *   //         'specializing in Internet-related services and products.'
 *   //       beginOffset: -1
 *   //     }
 *   //   ],
 *   //   tokens: [
 *   //     {
 *   //       text: {
 *   //         content: 'Google',
 *   //         beginOffset: -1
 *   //       },
 *   //       partOfSpeech: {
 *   //         tag: 'NOUN'
 *   //       },
 *   //       dependencyEdge: {
 *   //         headTokenIndex: 1,
 *   //         label: 'NSUBJ'
 *   //       },
 *   //       lemma: 'Google'
 *   //     },
 *   //     ...
 *   //   ]
 *   // }
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
    extractDocumentSentiment: options.sentiment === true,
    extractEntities: options.entities === true,
    extractSyntax: options.syntax === true
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

  var grpcOpts = {
    service: 'LanguageService',
    method: 'annotateText'
  };

  var reqOpts = extend({
    features: features
  }, this.reqOpts);

  this.request(grpcOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var originalResp = extend(true, {}, resp);

    var annotation = {
      language: resp.language
    };

    if (resp.documentSentiment) {
      var sentiment = resp.documentSentiment;
      annotation.sentiment = Document.formatSentiment_(sentiment, verbose);
    }

    if (resp.entities) {
      annotation.entities = Document.formatEntities_(resp.entities, verbose);
    }

    // This prevents empty `sentences` and `tokens` arrays being returned to
    // users who never wanted sentences or tokens to begin with.
    if (numFeaturesRequested === 0 || featuresRequested.syntax) {
      annotation.sentences = Document.formatSentences_(resp.sentences, verbose);
      annotation.tokens = Document.formatTokens_(resp.tokens, verbose);
    }

    callback(null, annotation, originalResp);
  });
};

/**
 * Detect entities from the document.
 *
 * @resource [documents.analyzeEntities API Documentation]{@link https://cloud.google.com/natural-language/reference/rest/v1beta1/documents/analyzeEntities}
 *
 * @param {object=} options - Configuration object.
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
 *   //       salience: 65.137446,
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
 *   //       salience: 13.947371,
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
 */
Document.prototype.detectEntities = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var verbose = options.verbose === true;

  var grpcOpts = {
    service: 'LanguageService',
    method: 'analyzeEntities'
  };

  this.request(grpcOpts, this.reqOpts, function(err, resp) {
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
 * @resource [documents.analyzeSentiment API Documentation]{@link https://cloud.google.com/natural-language/reference/rest/v1beta1/documents/analyzeSentiment}
 *
 * @param {object=} options - Configuration object.
 * @param {boolean} options.verbose - Enable verbose mode for more detailed
 *     results. Default: `false`
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error occurred while making this request.
 * @param {number} callback.sentiment - A value in the range of `-100` to `100`.
 *     Large numbers represent more positive sentiments.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * document.detectSentiment(function(err, sentiment) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // sentiment = 100
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
 *   //   polarity: 100,
 *   //   magnitude: 40
 *   // }
 * });
 */
Document.prototype.detectSentiment = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var verbose = options.verbose === true;

  var grpcOpts = {
    service: 'LanguageService',
    method: 'analyzeSentiment'
  };

  this.request(grpcOpts, this.reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var originalResp = extend(true, {}, resp);
    var sentiment = Document.formatSentiment_(resp.documentSentiment, verbose);

    callback(null, sentiment, originalResp);
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

    entity.salience *= 100;

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
  sentences = sentences.map(prop('text'));

  if (!verbose) {
    sentences = sentences.map(prop('content'));
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
 *     of `-100` to `100` or an object containing `polarity` and `magnitude`
 *     measurements in verbose mode.
 */
Document.formatSentiment_ = function(sentiment, verbose) {
  sentiment = {
    polarity: sentiment.polarity *= 100,
    magnitude: sentiment.magnitude *= 100
  };

  if (!verbose) {
    sentiment = sentiment.polarity;
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
    tokens = tokens.map(function(token) {
      return {
        text: token.text.content,
        partOfSpeech: Document.PART_OF_SPEECH[token.partOfSpeech.tag],
        partOfSpeechTag: token.partOfSpeech.tag
      };
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

module.exports = Document;

