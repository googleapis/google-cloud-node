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

var Document = require('../../lib/search/document.js');
var Field = require('../../lib/search/field.js');

var DOCUMENT_JSON = require('../testdata/search-document.json');

describe('Document', function() {
  var document;

  var SEARCH_INSTANCE = {
    projectId: 'project-id'
  };

  var INDEX_INSTANCE = {
    search_: SEARCH_INSTANCE
  };

  var ID = 'document-id';

  beforeEach(function() {
    document = new Document(INDEX_INSTANCE, ID);
  });

  describe('instantiation', function() {
    it('should localize the Search instance', function() {
      assert.deepEqual(document.search_, SEARCH_INSTANCE);
    });

    it('should localize the Index instance', function() {
      assert.deepEqual(document.index_, INDEX_INSTANCE);
    });

    it('should localize the id', function() {
      assert.equal(document.id, ID);
    });
  });

  describe('addField', function() {
    var FIELD_NAME = 'field-name';

    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        document.addField();
      }, /A name is required/);
    });

    it('should return a Field instance', function() {
      var field = document.addField(FIELD_NAME);

      assert(field instanceof Field);
    });

    it('should localize the Field instance', function() {
      var field = document.addField(FIELD_NAME);

      assert.deepEqual(document.fields[FIELD_NAME], field);
    });
  });

  describe('delete', function() {
    it('should delete the document', function(done) {
      document.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'DELETE');
        assert.equal(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);
        done();
      };

      document.delete(assert.ifError);
    });

    it('should pass an error if one occurred', function(done) {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      document.makeReq_ = function(method, path, query, body, callback) {
        callback(error, apiResponse);
      };

      document.delete(function(err, apiResponse_) {
        assert.deepEqual(err, error);
        assert.deepEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should pass the API response to the callback', function(done) {
      var apiResponse = { a: 'b', c: 'd' };

      document.makeReq_ = function(method, path, query, body, callback) {
        callback(null, apiResponse);
      };

      document.delete(function(err, apiResponse_) {
        assert.ifError(err);
        assert.deepEqual(apiResponse_, apiResponse);
        done();
      });
    });
  });

  describe('getMetadata', function() {
    it('should get the document from the API', function(done) {
      document.makeReq_ = function(method, path, query, body) {
        assert.equal(method, 'GET');
        assert.equal(path, '/');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);
        done();
      };

      document.getMetadata(assert.ifError);
    });

    it('should execute the callback with an error', function(done) {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      document.makeReq_ = function(method, path, query, body, callback) {
        callback(error, apiResponse);
      };

      document.getMetadata(function(err, doc, apiResponse_) {
        assert.deepEqual(err, error);
        assert.deepEqual(apiResponse, apiResponse_);
        done();
      });
    });

    it('should reset the localized fields', function(done) {
      document.makeReq_ = function(method, path, query, body, callback) {
        callback(null, {});
      };

      document.fields = { a: 'b', c: 'd' };

      document.getMetadata(function(err) {
        assert.ifError(err);

        assert.strictEqual(Object.keys(document.fields).length, 0);

        done();
      });
    });

    it('should create and localize Field instances', function(done) {
      document.makeReq_ = function(method, path, query, body, callback) {
        callback(null, DOCUMENT_JSON);
      };

      document.addField = function(fieldName) {
        assert(DOCUMENT_JSON.fields[fieldName]);
        this.fields[fieldName] = {};
        return this.fields[fieldName];
      };

      document.getMetadata(function(err) {
        assert.ifError(err);

        var numOriginalFields = Object.keys(DOCUMENT_JSON.fields).length;
        var numNewFields = Object.keys(document.fields).length;

        assert.strictEqual(numOriginalFields, numNewFields);

        for (var fieldName in document.fields) {
          var originalField = DOCUMENT_JSON.fields[fieldName];
          var newField = document.fields[fieldName];

          assert.deepEqual(originalField, newField);
        }

        done();
      });
    });

    it('should reset the localized rank', function(done) {
      document.makeReq_ = function(method, path, query, body, callback) {
        callback(null, {});
      };

      document.rank = Date.now();

      document.getMetadata(function(err) {
        assert.ifError(err);
        assert.strictEqual(document.rank, undefined);
        done();
      });
    });

    it('should localize a new rank', function(done) {
      document.makeReq_ = function(method, path, query, body, callback) {
        callback(null, DOCUMENT_JSON);
      };

      document.getMetadata(function(err) {
        assert.ifError(err);
        assert.strictEqual(document.rank, DOCUMENT_JSON.rank);
        done();
      });
    });

    it('should execute the callback with Document & api resp', function(done) {
      document.makeReq_ = function(method, path, query, body, callback) {
        callback(null, DOCUMENT_JSON);
      };

      document.getMetadata(function(err, document_, apiResponse) {
        assert.ifError(err);

        assert.deepEqual(document_, document);
        assert.deepEqual(apiResponse, DOCUMENT_JSON);

        done();
      });
    });
  });

  describe('setRank', function() {
    it('should throw if the given rank is not a number', function() {
      assert.throws(function() {
        document.setRank();
      }, /rank should be a positive integer/);

      assert.throws(function() {
        document.setRank(true);
      }, /rank should be a positive integer/);

      assert.throws(function() {
        document.setRank(function() {});
      }, /rank should be a positive integer/);
    });

    it('should throw if the given rank is a negative number', function() {
      assert.throws(function() {
        document.setRank(-3);
      }, /rank should be a positive integer/);
    });

    it('should localize the new rank', function() {
      document.setRank(8);
      assert.equal(document.rank, 8);
    });
  });

  describe('toJSON', function() {
    it('should return an object with a fields property', function() {
      document.fields = DOCUMENT_JSON.fields;
      var documentJson = document.toJSON();
      assert.deepEqual(documentJson.fields, DOCUMENT_JSON.fields);
    });

    it('should return an object with a docId property', function() {
      var documentJson = document.toJSON();
      assert.equal(documentJson.docId, ID);
    });

    it('should return an object with a rank property', function() {
      document.rank = 8;
      var documentJson = document.toJSON();
      assert.equal(documentJson.rank, 8);
    });
  });

  describe('makeReq_', function() {
    it('should call index instance makeReq_', function(done) {
      var method = 'POST';
      var path = '/';
      var query = 'query';
      var body = 'body';
      var callback = 'callback';

      document.index_.makeReq_ = function(m, p, q, b, c) {
        assert.equal(m, method);
        assert.equal(p, '/documents/' + ID + path);
        assert.equal(q, query);
        assert.equal(b, body);
        assert.equal(c, callback);
        done();
      };

      document.makeReq_(method, path, query, body, callback);
    });
  });
});
