/**
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

'use strict';

var assert = require('assert');
var extend = require('extend');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var isCustomTypeOverride;
var promisified = false;
var fakeUtil = extend(true, {}, util, {
  isCustomType: function() {
    if (isCustomTypeOverride) {
      return isCustomTypeOverride.apply(null, arguments);
    }

    return false;
  },
  promisifyAll: function(Class) {
    if (Class.name === 'Document') {
      promisified = true;
    }
  }
});

describe('Document', function() {
  var DocumentCache;
  var Document;
  var document;

  var LANGUAGE = {
    api: {}
  };
  var CONFIG = 'inline content';

  before(function() {
    Document = proxyquire('../src/document.js', {
      '@google-cloud/common': {
        util: fakeUtil
      }
    });

    DocumentCache = extend(true, {}, Document);
    DocumentCache.prototype = extend(true, {}, Document.prototype);
  });

  beforeEach(function() {
    isCustomTypeOverride = null;

    extend(Document, DocumentCache);
    Document.prototype = extend({}, DocumentCache.prototype);

    document = new Document(LANGUAGE, CONFIG);
  });

  describe('instantiation', function() {
    it('should expose the gax API', function() {
      assert.strictEqual(document.api, LANGUAGE.api);
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should set the correct encodingType', function() {
      var detectedEncodingType = 'detected-encoding-type';
      var config = {
        content: CONFIG
      };

      Document.prototype.detectEncodingType_ = function(options) {
        assert.strictEqual(options, config);
        return detectedEncodingType;
      };

      var document = new Document(LANGUAGE, config);

      assert.strictEqual(document.encodingType, detectedEncodingType);
    });

    it('should set the correct document for inline content', function() {
      assert.deepEqual(document.document, {
        content: CONFIG,
        type: 'PLAIN_TEXT'
      });
    });

    it('should set the correct document for content with language', function() {
      var document = new Document(LANGUAGE, {
        content: CONFIG,
        language: 'EN'
      });

      assert.strictEqual(document.document.language, 'EN');
    });

    it('should set the correct document for content with type', function() {
      var document = new Document(LANGUAGE, {
        content: CONFIG,
        type: 'html'
      });

      assert.strictEqual(document.document.type, 'HTML');
    });

    it('should set the correct document for text', function() {
      var document = new Document(LANGUAGE, {
        content: CONFIG,
        type: 'text'
      });

      assert.deepEqual(document.document, {
        content: CONFIG,
        type: 'PLAIN_TEXT'
      });
    });

    it('should set the GCS content URI from a File', function() {
      var file = {
        // Leave spaces in to check that it is URI-encoded:
        id: 'file name',
        bucket: {
          id: 'bucket name'
        }
      };

      isCustomTypeOverride = function(content, type) {
        assert.strictEqual(content, file);
        assert.strictEqual(type, 'storage/file');
        return true;
      };

      var document = new Document(LANGUAGE, {
        content: file
      });

      assert.deepEqual(document.document.gcsContentUri, [
        'gs://',
        encodeURIComponent(file.bucket.id),
        '/',
        encodeURIComponent(file.id),
      ].join(''));
    });

    it('should default the encodingType to UTF8 if a Buffer', function() {
      var document = new Document(LANGUAGE, {
        content: new Buffer([])
      });

      assert.strictEqual(document.encodingType, 'UTF8');
    });
  });

  describe('LABEL_DESCRIPTIONS', function() {
    var expectedDescriptions = {
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
      VMOD:
        'Clause headed by an infinite form of the verb that modifies a noun',
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

    it('should contain the correct list of label descriptions', function() {
      assert.deepEqual(Document.LABEL_DESCRIPTIONS, expectedDescriptions);
    });
  });

  describe('PART_OF_SPEECH', function() {
    var expectedPartOfSpeech = {
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

    it('should define the correct parts of speech', function() {
      assert.deepEqual(Document.PART_OF_SPEECH, expectedPartOfSpeech);
    });
  });

  describe('annotate', function() {
    it('should make the correct API request', function(done) {
      var detectedEncodingType = 'detected-encoding-type';

      document.detectEncodingType_ = function(options) {
        assert.deepEqual(options, {});
        return detectedEncodingType;
      };

      document.api.Language = {
        annotateText: function(reqOpts) {
          assert.strictEqual(reqOpts.document, document.document);

          assert.deepEqual(reqOpts.features, {
            extractDocumentSentiment: true,
            extractEntities: true,
            extractSyntax: true
          });

          assert.strictEqual(reqOpts.encodingType, detectedEncodingType);

          done();
        }
      };

      document.annotate(assert.ifError);
    });

    it('should allow specifying individual features', function(done) {
      document.api.Language = {
        annotateText: function(reqOpts) {
          assert.deepEqual(reqOpts.features, {
            extractDocumentSentiment: false,
            extractEntities: true,
            extractSyntax: true
          });

          done();
        }
      };

      document.annotate({
        entities: true,
        syntax: true
      }, assert.ifError);
    });

    it('should honor raw API terminology', function(done) {
      document.api.Language = {
        annotateText: function(reqOpts) {
          assert.deepEqual(reqOpts.features, {
            extractDocumentSentiment: true,
            extractEntities: true,
            extractSyntax: true
          });

          done();
        }
      };

      document.annotate({
        extractDocumentSentiment: true,
        extractEntities: true,
        extractSyntax: true
      }, assert.ifError);
    });

    describe('error', function() {
      var apiResponse = {};
      var error = new Error('Error.');

      beforeEach(function() {
        document.api.Language = {
          annotateText: function(options, callback) {
            callback(error, apiResponse);
          }
        };
      });

      it('should exec callback with error and API response', function(done) {
        document.annotate(function(err, annotation, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(annotation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponses = {
        default: {
          language: 'EN',
          sentences: [],
          tokens: []
        },

        withSentiment: {
          documentSentiment: {}
        },

        withEntities: {
          entities: []
        },

        withSyntax: {
          sentences: {},
          tokens: {}
        }
      };

      apiResponses.withAll = extend(
        {},
        apiResponses.default,
        apiResponses.withSentiment,
        apiResponses.withEntities,
        apiResponses.withSyntax
      );

      function createAnnotateTextWithResponse(apiResponse) {
        return function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      }

      it('should always return the language', function(done) {
        var apiResponse = apiResponses.default;

        document.api.Language = {
          annotateText: createAnnotateTextWithResponse(apiResponse)
        };

        document.annotate(function(err, annotation, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(annotation.language, apiResponse.language);
          assert.deepEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should return syntax when no features are requested', function(done) {
        var apiResponse = apiResponses.default;

        document.api.Language = {
          annotateText: createAnnotateTextWithResponse(apiResponse)
        };

        document.annotate(function(err, annotation, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(annotation.sentences, apiResponse.sentences);
          assert.strictEqual(annotation.tokens, apiResponse.tokens);
          assert.deepEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should return the sentiment if available', function(done) {
        var apiResponse = apiResponses.withSentiment;

        document.api.Language = {
          annotateText: createAnnotateTextWithResponse(apiResponse)
        };

        document.annotate(function(err, annotation, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(annotation.language, apiResponse.language);
          assert
            .strictEqual(annotation.sentiment, apiResponse.documentSentiment);

          assert.deepEqual(apiResponse_, apiResponse);

          done();
        });
      });

      it('should return the entities if available', function(done) {
        var apiResponse = apiResponses.withEntities;

        document.api.Language = {
          annotateText: createAnnotateTextWithResponse(apiResponse)
        };

        document.annotate(function(err, annotation, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(annotation.language, apiResponse.language);
          assert.strictEqual(annotation.entities, apiResponse.entities);

          assert.deepEqual(apiResponse_, apiResponse);

          done();
        });
      });

      it('should not return syntax analyses when not wanted', function(done) {
        var apiResponse = apiResponses.default;

        document.api.Language = {
          annotateText: createAnnotateTextWithResponse(apiResponse)
        };

        document.annotate({
          entities: true,
          sentiment: true
        }, function(err, annotation) {
          assert.ifError(err);

          assert.strictEqual(annotation.sentences, undefined);
          assert.strictEqual(annotation.tokens, undefined);

          done();
        });
      });
    });
  });

  describe('detectEntities', function() {
    it('should make the correct API request', function(done) {
      var detectedEncodingType = 'detected-encoding-type';

      document.detectEncodingType_ = function(options) {
        assert.deepEqual(options, {});
        return detectedEncodingType;
      };

      document.api.Language = {
        analyzeEntities: function(reqOpts) {
          assert.strictEqual(reqOpts.document, document.document);
          assert.strictEqual(reqOpts.encodingType, detectedEncodingType);
          done();
        }
      };

      document.detectEntities(assert.ifError);
    });

    describe('error', function() {
      var apiResponse = {};
      var error = new Error('Error.');

      beforeEach(function() {
        document.api.Language = {
          analyzeEntities: function(reqOpts, callback) {
            callback(error, apiResponse);
          }
        };
      });

      it('should exec callback with error and API response', function(done) {
        document.detectEntities(function(err, entities, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(entities, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        entities: []
      };

      beforeEach(function() {
        document.api.Language = {
          analyzeEntities: function(reqOpts, callback) {
            callback(null, apiResponse);
          }
        };
      });

      it('should return the entities', function(done) {
        document.detectEntities(function(err, entities, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(entities, apiResponse.entities);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('detectSentiment', function() {
    it('should make the correct API request', function(done) {
      var detectedEncodingType = 'detected-encoding-type';

      document.detectEncodingType_ = function(options) {
        assert.deepEqual(options, {});
        return detectedEncodingType;
      };

      document.api.Language = {
        analyzeSentiment: function(reqOpts) {
          assert.strictEqual(reqOpts.document, document.document);
          assert.strictEqual(reqOpts.encodingType, detectedEncodingType);
          done();
        }
      };

      document.encodingType = 'encoding-type';
      document.detectSentiment(assert.ifError);
    });

    describe('error', function() {
      var apiResponse = {};
      var error = new Error('Error.');

      beforeEach(function() {
        document.api.Language = {
          analyzeSentiment: function(reqOpts, callback) {
            callback(error, apiResponse);
          }
        };
      });

      it('should exec callback with error and API response', function(done) {
        document.detectSentiment(function(err, sentiment, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(sentiment, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        documentSentiment: {},
        sentences: [],
        language: 'en'
      };

      beforeEach(function() {
        document.api.Language = {
          analyzeSentiment: function(reqOpts, callback) {
            callback(null, apiResponse);
          }
        };
      });

      it('should return the sentiment object', function(done) {
        document.detectSentiment(function(err, sentiment, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(sentiment, apiResponse.documentSentiment);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('detectSyntax', function() {
    it('should make the correct API request', function(done) {
      var detectedEncodingType = 'detected-encoding-type';

      document.detectEncodingType_ = function(options) {
        assert.deepEqual(options, {});
        return detectedEncodingType;
      };

      document.api.Language = {
        analyzeSyntax: function(reqOpts) {
          assert.strictEqual(reqOpts.document, document.document);
          assert.strictEqual(reqOpts.encodingType, detectedEncodingType);
          done();
        }
      };

      document.encodingType = 'encoding-type';
      document.detectSyntax(assert.ifError);
    });

    describe('error', function() {
      var apiResponse = {};
      var error = new Error('Error.');

      beforeEach(function() {
        document.api.Language = {
          analyzeSyntax: function(reqOpts, callback) {
            callback(error, apiResponse);
          }
        };
      });

      it('should exec callback with error and API response', function(done) {
        document.detectSyntax(function(err, syntax, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(syntax, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        sentences: [{}],
        tokens: [{}],
        language: 'en'
      };

      beforeEach(function() {
        document.api.Language = {
          analyzeSyntax: function(reqOpts, callback) {
            callback(null, apiResponse);
          }
        };
      });

      it('should return the token list', function(done) {
        document.detectSyntax(function(err, syntax, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(syntax, apiResponse.tokens);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('detectEncodingType_', function() {
    it('should return if no encoding type is set', function() {
      assert.strictEqual(document.detectEncodingType_({
        encoding: ''
      }), undefined);

      assert.strictEqual(document.detectEncodingType_({
        encodingType: ''
      }), undefined);

      document.encodingType = '';
      assert.strictEqual(document.detectEncodingType_({}), undefined);
    });

    it('should return UTF8 for BUFFER input', function() {
      assert.strictEqual(document.detectEncodingType_({
        encodingType: 'buffer'
      }), 'UTF8');
    });

    it('should return UTF16 for STRING input', function() {
      assert.strictEqual(document.detectEncodingType_({
        encodingType: 'string'
      }), 'UTF16');
    });

    it('should return original value', function() {
      assert.strictEqual(document.detectEncodingType_({
        encodingType: 'UTF32'
      }), 'UTF32');
    });

    it('should capitilize and remove whitespace and hyphens', function() {
      assert.strictEqual(document.detectEncodingType_({
        encodingType: 'utf32'
      }), 'UTF32');

      assert.strictEqual(document.detectEncodingType_({
        encodingType: 'UTF 32'
      }), 'UTF32');

      assert.strictEqual(document.detectEncodingType_({
        encodingType: 'UTF-32'
      }), 'UTF32');
    });

    it('should accept options.encoding', function() {
      assert.strictEqual(document.detectEncodingType_({
        encoding: 'UTF32'
      }), 'UTF32');
    });

    it('should accept options.encodingType', function() {
      assert.strictEqual(document.detectEncodingType_({
        encodingType: 'UTF32'
      }), 'UTF32');
    });

    it('should default to encodingType instance property', function() {
      document.encodingType = 'utf-32';

      assert.strictEqual(document.detectEncodingType_({}), 'UTF32');
    });
  });
});
