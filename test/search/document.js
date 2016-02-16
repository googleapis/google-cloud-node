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
var mockery = require('mockery-next');
var nodeutil = require('util');

var ServiceObject = require('../../lib/common/service-object.js');

var DOCUMENT_JSON = require('../testdata/search-document.json');

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Document', function() {
  var Document;
  var document;

  var INDEX_INSTANCE = {};

  var ID = 'document-id';

  before(function() {
    mockery.registerMock(
      '../../lib/common/service-object.js',
      FakeServiceObject
    );

    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Document = require('../../lib/search/document.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    document = new Document(INDEX_INSTANCE, ID);
  });

  describe('instantiation', function() {
    it('should localize the id', function() {
      assert.equal(document.id, ID);
    });

    it('should create an empty fields object', function() {
      assert.deepEqual(document.fields, {});
    });

    it('should inherit from ServiceObject', function() {
      assert(document instanceof ServiceObject);

      var calledWith = document.calledWith_[0];

      assert.strictEqual(calledWith.parent, INDEX_INSTANCE);
      assert.strictEqual(calledWith.baseUrl, '/documents');
      assert.strictEqual(calledWith.id, ID);
      assert.deepEqual(calledWith.methods, {
        delete: true,
        exists: true,
        get: true
      });
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

      assert.strictEqual(field.constructor.name, 'Field');
    });

    it('should localize the Field instance', function() {
      var field = document.addField(FIELD_NAME);

      assert.deepEqual(document.fields[FIELD_NAME], field);
    });
  });

  describe('create', function() {
    it('should call Index.createDocument', function(done) {
      document.parent.createDocument = function(document_, callback) {
        assert.strictEqual(document_, document);
        callback();
      };

      document.create(done);
    });
  });

  describe('getMetadata', function() {
    it('should call ServiceObject.delete', function(done) {
      FakeServiceObject.prototype.getMetadata = function() {
        assert.strictEqual(this, document);
        done();
      };

      document.getMetadata(assert.ifError);
    });

    it('should execute the callback with an error', function(done) {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      FakeServiceObject.prototype.getMetadata = function(callback) {
        callback(error, apiResponse);
      };

      document.getMetadata(function(err, doc, apiResponse_) {
        assert.deepEqual(err, error);
        assert.deepEqual(apiResponse, apiResponse_);
        done();
      });
    });

    it('should reset the localized fields', function(done) {
      FakeServiceObject.prototype.getMetadata = function(callback) {
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
      FakeServiceObject.prototype.getMetadata = function(callback) {
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
      FakeServiceObject.prototype.getMetadata = function(callback) {
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
      FakeServiceObject.prototype.getMetadata = function(callback) {
        callback(null, DOCUMENT_JSON);
      };

      document.getMetadata(function(err) {
        assert.ifError(err);
        assert.strictEqual(document.rank, DOCUMENT_JSON.rank);
        done();
      });
    });

    it('should execute the callback with Document & api resp', function(done) {
      FakeServiceObject.prototype.getMetadata = function(callback) {
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
});
