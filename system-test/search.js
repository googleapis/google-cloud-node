/**
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

var assert = require('assert');
var async = require('async');
var uuid = require('node-uuid');

var env = require('./env.js');
var gcloud = require('../lib')(env);

var TEST_DOCUMENT_JSON = require('../test/testdata/search-document.json');

var MAX_PARALLEL = 10;

var search = gcloud.search();

function deleteDocument(document, callback) {
  document.delete(callback);
}

function deleteIndexContents(index, callback) {
  index.getDocuments({ view: 'ID_ONLY' }, function(err, documents) {
    if (err) {
      callback(err);
      return;
    }

    async.eachLimit(documents, MAX_PARALLEL, deleteDocument, callback);
  });
}

function generateIndexName() {
  return 'gcloud-test-index-' + uuid.v1();
}

function generateDocumentName() {
  return 'gcloud-test-document-' + uuid.v1();
}

describe('Search', function() {
  var INDEX_NAME = generateIndexName();
  var index = search.index(INDEX_NAME);

  after(function(done) {
    deleteIndexContents(index, done);
  });

  describe('creating an index', function() {
    it('should create a document in a new index', function(done) {
      var newIndexName = generateIndexName();
      var newIndex = search.index(newIndexName);

      newIndex.createDocument(TEST_DOCUMENT_JSON, function(err, document) {
        assert.ifError(err);
        document.delete(done);
      });
    });
  });

  describe('listing indexes', function() {
    before(function(done) {
      // Creating a new document in a new index will create the index at the
      // same time. Immediately delete the document, as we just need the index
      // to exist.
      var newIndexName = generateIndexName();
      var newIndex = search.index(newIndexName);

      newIndex.createDocument(TEST_DOCUMENT_JSON, function(err, document) {
        if (err) {
          done(err);
          return;
        }

        document.delete(done);
      });
    });

    it('should get all indexes', function(done) {
      search.getIndexes(function(err, indexes) {
        assert.ifError(err);
        assert(indexes.length > 0);
        done();
      });
    });

    it('should get all indexes in stream mode', function(done) {
      var resultsMatched = 0;

      search.getIndexes()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('listing documents', function() {
    var document;

    before(function(done) {
      index.createDocument(TEST_DOCUMENT_JSON, function(err, doc) {
        if (err) {
          done(err);
          return;
        }

        document = doc;
        done();
      });
    });

    after(function(done) {
      document.delete(done);
    });

    it('should get all documents', function(done) {
      index.getDocuments(function(err, documents) {
        assert.ifError(err);
        assert.strictEqual(documents.length, 1);
        done();
      });
    });

    it('should get all documents in stream mode', function(done) {
      var resultsMatched = 0;

      index.getDocuments()
        .on('error', done)
        .on('data', function() { resultsMatched++; })
        .on('end', function() {
          assert.strictEqual(resultsMatched, 1);
          done();
        });
    });
  });

  describe('creating documents', function() {
    it('should create a document from the doc builder', function(done) {
      // This recreates the test JSON file with the document builder.
      var newDocument = index.document(TEST_DOCUMENT_JSON.docId);

      newDocument.setRank(TEST_DOCUMENT_JSON.rank);

      Object.keys(TEST_DOCUMENT_JSON.fields).forEach(function(fieldName) {
        var field = newDocument.addField(fieldName);

        TEST_DOCUMENT_JSON.fields[fieldName].values.forEach(function(value) {
          if (value.geoValue) {
            field.addGeoValue(value.geoValue);
          }

          if (value.numberValue) {
            field.addNumberValue(value.numberValue);
          }

          if (value.stringValue) {
            var options = {};
            if (value.stringFormat) {
              options.format = value.stringFormat;
            }
            field.addTextValue(value.stringValue, options);
          }

          if (value.timestampValue) {
            field.addTimestampValue(value.timestampValue);
          }
        });
      });

      index.createDocument(newDocument, function(err, document) {
        assert.ifError(err);
        document.getMetadata(function(err) {
          assert.ifError(err);
          assert.deepEqual(document.toJSON(), TEST_DOCUMENT_JSON);

          document.delete(done);
        });
      });
    });

    it('should create a document from JSON', function(done) {
      index.createDocument(TEST_DOCUMENT_JSON, function(err, document) {
        assert.ifError(err);
        document.getMetadata(function(err) {
          assert.ifError(err);
          assert.deepEqual(document.toJSON(), TEST_DOCUMENT_JSON);

          document.delete(done);
        });
      });
    });
  });

  describe('search', function() {
    var query = 'ryan';
    var DOCUMENT_NAME = generateDocumentName();
    var document;

    before(function(done) {
      document = index.document(DOCUMENT_NAME);

      var questions = document.addField('question');
      questions.addTextValue('Where did Ryan go?');
      questions.addTextValue('Where did Silvano go?');

      index.createDocument(document, done);
    });

    after(function(done) {
      document.delete(done);
    });

    it('should search document', function(done) {
      index.search(query, function(err, results) {
        assert.ifError(err);
        assert.equal(results.length, 1);
        assert.equal(results[0].id, DOCUMENT_NAME);
        done();
      });
    });

    it('should search document in stream mode', function(done) {
      var results = [];

      index.search(query)
        .on('error', done)
        .on('data', function(result) {
          results.push(result);
        })
        .on('end', function() {
          assert.equal(results.length, 1);
          assert.equal(results[0].id, DOCUMENT_NAME);
          done();
        });
    });
  });
});
