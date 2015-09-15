/*!
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

var Project = require('../../lib/resource/project.js');

describe('Project', function() {
  var RESOURCE = {};
  var ID = 'project-id';

  var project;

  beforeEach(function() {
    project = new Project(RESOURCE, ID);
  });

  describe('instantiation', function() {
    it('should localize the resource', function() {
      assert.strictEqual(project.resource, RESOURCE);
    });

    it('should localize the ID', function() {
      assert.strictEqual(project.id, ID);
    });

    it('should default metadata to an empty object', function() {
      assert.deepEqual(project.metadata, {});
    });
  });

  describe('delete', function() {
    it('should make the correct API request', function(done) {
      project.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'DELETE');
        assert.strictEqual(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);
        done();
      };

      project.delete(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        project.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        project.delete(function(err, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          project.delete();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        projectId: ID
      };

      beforeEach(function() {
        project.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with error and API response', function(done) {
        project.delete(function(err, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          project.delete();
        });
      });
    });
  });

  describe('getMetadata', function() {
    it('should make the correct API request', function(done) {
      project.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        done();
      };

      project.getMetadata(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        project.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error and API response', function(done) {
        project.getMetadata(function(err, metadata, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(metadata, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          project.getMetadata();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        project.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should update the metadata to the API response', function(done) {
        project.getMetadata(function(err) {
          assert.ifError(err);
          assert.strictEqual(project.metadata, apiResponse);
          done();
        });
      });

      it('should exec callback with metadata and API response', function(done) {
        project.getMetadata(function(err, metadata, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          project.getMetadata();
        });
      });
    });
  });

  describe('restore', function() {
    var error = new Error('Error.');
    var apiResponse = { a: 'b', c: 'd' };

    beforeEach(function() {
      project.makeReq_ = function(method, path, query, body, callback) {
        callback(error, apiResponse);
      };
    });

    it('should make the correct API request', function(done) {
      project.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'POST');
        assert.strictEqual(path, ':undelete');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        done();
      };

      project.restore(assert.ifError);
    });

    it('should execute the callback with error & API response', function(done) {
      project.restore(function(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should not require a callback', function() {
      assert.doesNotThrow(function() {
        project.restore();
      });
    });
  });

  describe('setMetadata', function() {
    var METADATA = { a: 'b', c: 'd' };

    it('should make the correct API request', function(done) {
      project.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'PUT');
        assert.strictEqual(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, METADATA);

        done();
      };

      project.setMetadata(METADATA, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        project.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        project.setMetadata(METADATA, function(err, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          project.setMetadata(METADATA);
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        projectId: ID
      };

      beforeEach(function() {
        project.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with API response', function(done) {
        project.setMetadata(METADATA, function(err, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          project.setMetadata(METADATA);
        });
      });
    });
  });

  describe('makeReq_', function() {
    it('should make the correct request to Resource', function(done) {
      var expectedPathPrefix = '/' + project.id;

      var method = 'POST';
      var path = '/test';
      var query = {
        a: 'b',
        c: 'd'
      };
      var body = {
        a: 'b',
        c: 'd'
      };

      project.resource.makeReq_ = function(method_, path_, query_, body_, cb) {
        assert.strictEqual(method_, method);
        assert.strictEqual(path_, expectedPathPrefix + path);
        assert.strictEqual(query_, query);
        assert.strictEqual(body_, body);
        cb();
      };

      project.makeReq_(method, path, query, body, done);
    });
  });
});
