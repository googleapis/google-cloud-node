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

'use strict';

var assert = require('assert');
var is = require('is');
var Storage = require('@google-cloud/storage');
var through = require('through2');
var uuid = require('uuid');

var env = require('../../../system-test/env.js');
var Language = require('../');

describe('Language', function() {
  var language;

  var TESTS_PREFIX = 'gcloud-tests-language-';

  var GCS;
  var BUCKET;

  var TEXT_CONTENT_SENTENCES = [
    'Hello from stephen and david!',
    'If you find yourself in michigan, come say hi!'
  ];

  var HTML_CONTENT = [
    '<html>',
    '  <head><title>' + TEXT_CONTENT_SENTENCES[0] + '</title></head>',
    '  <body>' + TEXT_CONTENT_SENTENCES[1] + '</body>',
    '</html>'
  ].join('\n');

  var TEXT_CONTENT = TEXT_CONTENT_SENTENCES.join(' ');

  before(function(done) {
    language = new Language(env);
    GCS = new Storage(env);
    BUCKET = GCS.bucket(generateName('bucket'));

    BUCKET.create(done);
  });

  after(function(done) {
    GCS.getBucketsStream({ prefix: TESTS_PREFIX })
      .on('error', done)
      .pipe(through.obj(function(bucket, _, next) {
        bucket.deleteFiles({ force: true }, function(err) {
          if (err) {
            next(err);
            return;
          }

          bucket.delete(next);
        });
      }))
      .on('error', done)
      .on('finish', done);
  });

  var DESCRIBES = [
    {
      name: 'HTML',

      vars: {
        content: HTML_CONTENT,
        type: 'html'
      },

      describes: [
        {
          name: 'inline',

          getDocument: function(callback) {
            callback(null, language.html(this.vars.content));
          }
        },

        {
          name: 'GCS file',

          getDocument: function(callback) {
            createFile(this.vars.content, function(err, file) {
              if (err) {
                callback(err);
                return;
              }

              callback(null, language.html(file));
            });
          }
        }
      ]
    },

    {
      name: 'Text',

      vars: {
        content: TEXT_CONTENT,
        type: 'text'
      },

      describes: [
        {
          name: 'inline',

          getDocument: function(callback) {
            callback(null, language.text(this.vars.content));
          }
        },

        {
          name: 'GCS file',

          getDocument: function(callback) {
            createFile(this.vars.content, function(err, file) {
              if (err) {
                callback(err);
                return;
              }

              callback(null, language.text(file));
            });
          }
        }
      ]
    },

    {
      name: 'Unknown',

      vars: {
        content: TEXT_CONTENT
      },

      describes: [
        {
          name: 'inline',

          getDocument: function(callback) {
            callback(null, language.document(this.vars.content));
          }
        },

        {
          name: 'GCS file',

          getDocument: function(callback) {
            createFile(this.vars.content, function(err, file) {
              if (err) {
                callback(err);
                return;
              }

              callback(null, language.document(file));
            });
          }
        }
      ]
    }
  ];

  DESCRIBES.forEach(function(describeObj) {
    var CONTENT = describeObj.vars.content;
    var CONTENT_TYPE = describeObj.vars.type;

    describe(describeObj.name, function() {
      var innerDescribes = describeObj.describes;

      innerDescribes.forEach(function(innerDescribeObj) {
        var DOC;

        describe(innerDescribeObj.name, function() {
          before(function(done) {
            var getDocument = innerDescribeObj.getDocument;

            getDocument.call(describeObj, function(err, doc) {
              if (err) {
                done(err);
                return;
              }

              DOC = doc;
              done();
            });
          });

          describe('annotation', function() {
            it('should work without creating a document', function(done) {
              if (!CONTENT_TYPE) {
                language.annotate(CONTENT, validateAnnotationSimple(done));
                return;
              }

              language.annotate(
                CONTENT,
                { type: CONTENT_TYPE },
                validateAnnotationSimple(done)
              );
            });

            it('should return the correct simplified response', function(done) {
              DOC.annotate(validateAnnotationSimple(done));
            });

            it('should support verbose mode', function(done) {
              DOC.annotate({ verbose: true }, validateAnnotationVerbose(done));
            });

            it('should return only a single feature', function(done) {
              DOC.annotate({
                extractEntities: true
              }, validateAnnotationSingleFeatureSimple(done));
            });

            it('should return a single feat in verbose mode', function(done) {
              DOC.annotate({
                extractEntities: true,
                verbose: true
              }, validateAnnotationSingleFeatureVerbose(done));
            });
          });

          describe('entities', function() {
            it('should work without creating a document', function(done) {
              if (!CONTENT_TYPE) {
                language.detectEntities(CONTENT, validateEntitiesSimple(done));
                return;
              }

              language.detectEntities(
                CONTENT,
                { type: CONTENT_TYPE },
                validateEntitiesSimple(done)
              );
            });

            it('should return the correct simplified response', function(done) {
              DOC.detectEntities(validateEntitiesSimple(done));
            });

            it('should support verbose mode', function(done) {
              DOC.detectEntities({
                verbose: true
              }, validateEntitiesVerbose(done));
            });
          });

          describe('sentiment', function() {
            it('should work without creating a document', function(done) {
              if (!CONTENT_TYPE) {
                language.detectSentiment(
                  CONTENT,
                  validateSentimentSimple(done)
                );
                return;
              }

              language.detectSentiment(
                CONTENT,
                { type: CONTENT_TYPE },
                validateSentimentSimple(done)
              );
            });

            it('should return the correct simplified response', function(done) {
              DOC.detectSentiment(validateSentimentSimple(done));
            });

            it('should support verbose mode', function(done) {
              DOC.detectSentiment({
                verbose: true
              }, validateSentimentVerbose(done));
            });
          });

          describe('syntax', function() {
            it('should work without creating a document', function(done) {
              if (!CONTENT_TYPE) {
                language.detectSyntax(
                  CONTENT,
                  validateSyntaxSimple(done)
                );
                return;
              }

              language.detectSyntax(
                CONTENT,
                { type: CONTENT_TYPE },
                validateSyntaxSimple(done)
              );
            });

            it('should return the correct simplified response', function(done) {
              DOC.detectSyntax(validateSyntaxSimple(done));
            });

            it('should support verbose mode', function(done) {
              DOC.detectSyntax({
                verbose: true
              }, validateSyntaxVerbose(done));
            });
          });
        });
      });
    });
  });

  function generateName(resourceType) {
    var id = uuid.v4().substr(0, 10);
    return TESTS_PREFIX + resourceType + '-' + id;
  }

  function createFile(content, callback) {
    var file = BUCKET.file(generateName('file'));

    file.save(content, function(err) {
      if (err) {
        callback(err);
        return;
      }

      callback(null, file);
    });
  }

  function validateAnnotationSimple(callback) {
    return function(err, annotation, apiResponse) {
      try {
        assert.ifError(err);

        assert.strictEqual(annotation.language, 'en');

        assert(is.number(annotation.sentiment));

        assert.deepEqual(annotation.entities, {
          people: ['stephen', 'david'],
          places: ['michigan']
        });

        assert.deepEqual(annotation.sentences, TEXT_CONTENT_SENTENCES);

        assert(is.array(annotation.tokens));
        assert.deepEqual(annotation.tokens[0], {
          text: 'Hello',
          partOfSpeech: 'Other: foreign words, typos, abbreviations',
          tag: 'X',
          aspect: undefined,
          case: undefined,
          form: undefined,
          gender: undefined,
          mood: undefined,
          number: undefined,
          person: undefined,
          proper: undefined,
          reciprocity: undefined,
          tense: undefined,
          voice: undefined,
          dependencyEdge: {
            description: 'Root',
            label: 'ROOT',
            headTokenIndex: 0
          }
        });

        assert(is.object(apiResponse));

        callback();
      } catch(e) {
        callback(e);
      }
    };
  }

  function validateAnnotationVerbose(callback) {
    return function(err, annotation, apiResponse) {
      try {
        assert.ifError(err);

        assert.strictEqual(annotation.language, 'en');

        assert(is.object(annotation.sentiment));

        assert(is.array(annotation.entities.people));
        assert.strictEqual(annotation.entities.people.length, 2);
        assert(is.object(annotation.entities.people[0]));

        assert(is.array(annotation.sentences));
        assert(is.object(annotation.sentences[0]));

        assert(is.array(annotation.tokens));
        assert(is.object(annotation.tokens[0]));
        assert.strictEqual(annotation.tokens[0].text.content, 'Hello');

        assert(is.object(apiResponse));

        callback();
      } catch(e) {
        callback(e);
      }
    };
  }

  function validateAnnotationSingleFeatureSimple(callback) {
    return function(err, annotation, apiResponse) {
      try {
        assert.ifError(err);

        assert.strictEqual(annotation.language, 'en');

        assert.deepEqual(annotation.entities, {
          people: ['stephen', 'david'],
          places: ['michigan']
        });

        assert.strictEqual(annotation.sentences, undefined);
        assert.strictEqual(annotation.sentiment, undefined);
        assert.strictEqual(annotation.tokens, undefined);

        assert(is.object(apiResponse));

        callback();
      } catch(e) {
        callback(e);
      }
    };
  }

  function validateAnnotationSingleFeatureVerbose(callback) {
    return function(err, annotation, apiResponse) {
      try {
        assert.ifError(err);

        assert.strictEqual(annotation.language, 'en');

        assert(is.array(annotation.entities.people));
        assert.strictEqual(annotation.entities.people.length, 2);
        assert(is.object(annotation.entities.people[0]));

        assert.strictEqual(annotation.sentences, undefined);
        assert.strictEqual(annotation.sentiment, undefined);
        assert.strictEqual(annotation.tokens, undefined);

        assert(is.object(apiResponse));

        callback();
      } catch(e) {
        callback(e);
      }
    };
  }

  function validateEntitiesSimple(callback) {
    return function(err, entities, apiResponse) {
      try {
        assert.ifError(err);

        assert.deepEqual(entities, {
          people: ['stephen', 'david'],
          places: ['michigan']
        });

        assert(is.object(apiResponse));

        callback();
      } catch(e) {
        callback(e);
      }
    };
  }

  function validateEntitiesVerbose(callback) {
    return function(err, entities, apiResponse) {
      try {
        assert.ifError(err);

        assert(is.array(entities.people));
        assert.strictEqual(entities.people.length, 2);
        assert(is.object(entities.people[0]));

        assert(is.object(apiResponse));

        callback();
      } catch(e) {
        callback(e);
      }
    };
  }

  function validateSentimentSimple(callback) {
    return function(err, sentiment, apiResponse) {
      try {
        assert.ifError(err);

        assert(is.number(sentiment));
        assert(is.object(apiResponse));

        callback();
      } catch(e) {
        callback(e);
      }
    };
  }

  function validateSentimentVerbose(callback) {
    return function(err, sentiment, apiResponse) {
      try {
        assert.ifError(err);

        assert(is.object(sentiment));
        assert(is.number(sentiment.score));
        assert(is.number(sentiment.magnitude));
        assert.strictEqual(sentiment.language, 'en');
        assert.strictEqual(sentiment.sentences.length, 2);

        assert(is.object(apiResponse));

        callback();
      } catch(e) {
        callback(e);
      }
    };
  }

  function validateSyntaxSimple(callback) {
    return function(err, tokens, apiResponse) {
      try {
        assert.ifError(err);
        assert.strictEqual(tokens.length, 17);
        assert.deepEqual(tokens[0], {
          aspect: undefined,
          case: undefined,
          form: undefined,
          gender: undefined,
          mood: undefined,
          number: undefined,
          partOfSpeech: 'Other: foreign words, typos, abbreviations',
          person: undefined,
          proper: undefined,
          reciprocity: undefined,
          tag: 'X',
          tense: undefined,
          text: 'Hello',
          voice: undefined,
          dependencyEdge: {
            description: 'Root',
            headTokenIndex: 0,
            label: 'ROOT'
          }
        });

        assert(is.object(apiResponse));

        callback();
      } catch (e) {
        callback(e);
      }
    };
  }

  function validateSyntaxVerbose(callback) {
    return function(err, syntax, apiResponse) {
      try {
        assert.ifError(err);
        assert.strictEqual(syntax.sentences.length, 2);
        assert(is.object(syntax.sentences[0]));
        assert.strictEqual(syntax.tokens.length, 17);
        assert(is.object(syntax.tokens[0]));
        assert.strictEqual(syntax.language, 'en');

        assert(is.object(apiResponse));

        callback();
      } catch (e) {
        callback(e);
      }
    };
  }
});

