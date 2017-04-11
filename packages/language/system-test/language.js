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
                language.annotate(CONTENT, validateAnnotation(done));
                return;
              }

              language.annotate(
                CONTENT,
                { type: CONTENT_TYPE },
                validateAnnotation(done)
              );
            });

            it('should return the correct simplified response', function(done) {
              DOC.annotate(validateAnnotation(done));
            });

            it('should return only a single feature', function(done) {
              DOC.annotate({
                entities: true
              }, validateAnnotationSingleFeature(done));
            });
          });

          describe('entities', function() {
            it('should work without creating a document', function(done) {
              if (!CONTENT_TYPE) {
                language.detectEntities(CONTENT, validateEntities(done));
                return;
              }

              language.detectEntities(
                CONTENT,
                { type: CONTENT_TYPE },
                validateEntities(done)
              );
            });

            it('should return the correct simplified response', function(done) {
              DOC.detectEntities(validateEntities(done));
            });
          });

          describe('entity sentiment', function() {
            it('should work without creating a document', function(done) {
              if (!CONTENT_TYPE) {
                language.detectEntitySentiment(CONTENT, validateEntities(done));
                return;
              }

              language.detectEntitySentiment(
                CONTENT,
                { type: CONTENT_TYPE },
                validateEntities(done)
              );
            });

            it('should return the correct simplified response', function(done) {
              DOC.detectEntitySentiment(validateEntities(done));
            });
          });

          describe('sentiment', function() {
            it('should work without creating a document', function(done) {
              if (!CONTENT_TYPE) {
                language.detectSentiment(
                  CONTENT,
                  validateSentiment(done)
                );
                return;
              }

              language.detectSentiment(
                CONTENT,
                { type: CONTENT_TYPE },
                validateSentiment(done)
              );
            });

            it('should return the correct simplified response', function(done) {
              DOC.detectSentiment(validateSentiment(done));
            });
          });

          describe('syntax', function() {
            it('should work without creating a document', function(done) {
              if (!CONTENT_TYPE) {
                language.detectSyntax(
                  CONTENT,
                  validateSyntax(done)
                );
                return;
              }

              language.detectSyntax(
                CONTENT,
                { type: CONTENT_TYPE },
                validateSyntax(done)
              );
            });

            it('should return the correct simplified response', function(done) {
              DOC.detectSyntax(validateSyntax(done));
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

  function validateAnnotation(callback) {
    return function(err, annotation, apiResponse) {
      try {
        assert.ifError(err);

        assert.strictEqual(annotation.language, apiResponse.language);
        assert.deepEqual(annotation.sentiment, apiResponse.documentSentiment);
        assert.deepEqual(annotation.entities, apiResponse.entities);
        assert.deepEqual(annotation.sentences, apiResponse.sentences);
        assert.deepEqual(annotation.tokens, apiResponse.tokens);

        callback();
      } catch(e) {
        callback(e);
      }
    };
  }

  function validateAnnotationSingleFeature(callback) {
    return function(err, annotation, apiResponse) {
      try {
        assert.ifError(err);

        assert.strictEqual(annotation.language, apiResponse.language);
        assert.deepEqual(annotation.entities, apiResponse.entities);

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

  function validateEntities(callback) {
    return function(err, entities, apiResponse) {
      try {
        assert.ifError(err);
        assert.strictEqual(entities, apiResponse.entities);

        callback();
      } catch(e) {
        callback(e);
      }
    };
  }

  function validateSentiment(callback) {
    return function(err, sentiment, apiResponse) {
      try {
        assert.ifError(err);
        assert.strictEqual(sentiment, apiResponse.documentSentiment);

        callback();
      } catch(e) {
        callback(e);
      }
    };
  }

  function validateSyntax(callback) {
    return function(err, syntax, apiResponse) {
      try {
        assert.ifError(err);
        assert.strictEqual(syntax, apiResponse.tokens);

        callback();
      } catch (e) {
        callback(e);
      }
    };
  }
});

