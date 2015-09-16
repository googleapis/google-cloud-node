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

var arrify = require('arrify');
var assert = require('assert');
var extend = require('extend');
var mockery = require('mockery');
var util = require('../../lib/common/util.js');

function FakeProject() {
  this.calledWith_ = [].slice.call(arguments);
}

var extended = false;
var fakeStreamRouter = {
  extend: function(Class, methods) {
    if (Class.name !== 'Resource') {
      return;
    }

    methods = arrify(methods);
    assert.equal(Class.name, 'Resource');
    assert.deepEqual(methods, ['getProjects']);
    extended = true;
  }
};

var makeAuthenticatedRequestFactoryOverride;
var fakeUtil = extend({}, util, {
  makeAuthenticatedRequestFactory: function() {
    if (makeAuthenticatedRequestFactoryOverride) {
      return makeAuthenticatedRequestFactoryOverride.apply(null, arguments);
    } else {
      return util.makeAuthenticatedRequestFactory.apply(null, arguments);
    }
  }
});

describe('Resource', function() {
  var PROJECT_ID = 'test-project-id';

  var Resource;
  var resource;

  before(function() {
    mockery.registerMock('../common/stream-router.js', fakeStreamRouter);
    mockery.registerMock('../common/util.js', fakeUtil);
    mockery.registerMock('./project.js', FakeProject);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Resource = require('../../lib/resource/index.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    makeAuthenticatedRequestFactoryOverride = null;

    resource = new Resource({
      projectId: PROJECT_ID
    });
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakeStreamRouter.extend`
    });

    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeOptions = { projectId: PROJECT_ID };
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(options, fakeOptions);
        return options;
      };

      Resource.call(fakeContext, fakeOptions);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should create an authenticated request function', function(done) {
      var options = {
        projectId: 'projectId',
        credentials: 'credentials',
        email: 'email',
        keyFilename: 'keyFile'
      };

      makeAuthenticatedRequestFactoryOverride = function(options_) {
        assert.deepEqual(options_, {
          credentials: options.credentials,
          email: options.email,
          keyFile: options.keyFilename,
          scopes: [
            'https://www.googleapis.com/auth/cloud-platform'
          ]
        });
        return done;
      };

      var resource = new Resource(options);
      resource.makeAuthenticatedRequest_();
    });

    it('should localize the projectId', function() {
      assert.equal(resource.defaultProjectId_, PROJECT_ID);
    });
  });

  describe('createProject', function() {
    var NEW_PROJECT_ID = 'new-project-id';
    var OPTIONS = { a: 'b', c: 'd' };
    var EXPECTED_BODY = extend({}, OPTIONS, { projectId: NEW_PROJECT_ID });

    it('should not require any options', function(done) {
      var expectedBody = { projectId: NEW_PROJECT_ID };

      resource.makeReq_ = function(method, path, query, body) {
        assert.deepEqual(body, expectedBody);
        done();
      };

      resource.createProject(NEW_PROJECT_ID, assert.ifError);
    });

    it('should make the correct API request', function(done) {
      resource.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'POST');
        assert.strictEqual(path, '/');
        assert.strictEqual(query, null);
        assert.deepEqual(body, EXPECTED_BODY);

        done();
      };

      resource.createProject(NEW_PROJECT_ID, OPTIONS, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        resource.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        resource.createProject(NEW_PROJECT_ID, OPTIONS, function(err, p, res) {
          assert.strictEqual(err, error);
          assert.strictEqual(p, null);
          assert.strictEqual(res, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { projectId: NEW_PROJECT_ID };

      beforeEach(function() {
        resource.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec callback with Project & API response', function(done) {
        var project = {};

        resource.project = function(id) {
          assert.strictEqual(id, NEW_PROJECT_ID);
          return project;
        };

        resource.createProject(NEW_PROJECT_ID, OPTIONS, function(err, p, res) {
          assert.ifError(err);

          assert.strictEqual(p, project);

          assert.strictEqual(res, apiResponse);
          done();
        });
      });
    });
  });

  describe('getProjects', function() {
    it('should accept only a callback', function(done) {
      resource.makeReq_ = function(method, path, query) {
        assert.deepEqual(query, {});
        done();
      };

      resource.getProjects(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var query = { a: 'b', c: 'd' };

      resource.makeReq_ = function(method, path, query_, body) {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(path, '/');
        assert.strictEqual(query_, query);
        assert.strictEqual(body, null);

        done();
      };

      resource.getProjects(query, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        resource.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        resource.getProjects({}, function(err, projects, nextQuery, apiResp) {
          assert.strictEqual(err, error);
          assert.strictEqual(projects, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        projects: [
          { projectId: PROJECT_ID }
        ]
      };

      beforeEach(function() {
        resource.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken
        });
        var expectedNextQuery = {
          pageToken: nextPageToken
        };

        resource.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        resource.getProjects({}, function(err, projects, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Projects & API resp', function(done) {
        var project = {};

        resource.project = function(name) {
          assert.strictEqual(name, apiResponse.projects[0].name);
          return project;
        };

        resource.getProjects({}, function(err, projects, nextQuery, apiResp) {
          assert.ifError(err);

          assert.strictEqual(projects[0], project);
          assert.strictEqual(projects[0].metadata, apiResponse.projects[0]);

          assert.strictEqual(apiResp, apiResponse);

          done();
        });
      });
    });
  });

  describe('project', function() {
    it('should return a Project object', function() {
      var project = resource.project(PROJECT_ID);
      assert(project instanceof FakeProject);
      assert.strictEqual(project.calledWith_[0], resource);
      assert.strictEqual(project.calledWith_[1], PROJECT_ID);
    });

    it('should use the project ID from the resource', function() {
      var project = resource.project();
      assert(project instanceof FakeProject);
      assert.strictEqual(project.calledWith_[1], PROJECT_ID);
    });

    it('should throw if no project ID was given or found', function() {
      var resourceWithoutProjectId = new Resource({});

      assert.throws(function() {
        resourceWithoutProjectId.project();
      }, /A project ID is required/);
    });
  });

  describe('makeReq_', function() {
    it('should make the correct request', function(done) {
      var base = 'https://cloudresourcemanager.googleapis.com/v1beta1/projects';

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

      resource.makeAuthenticatedRequest_ = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.method, method);

        assert.strictEqual(reqOpts.uri, base + path);
        assert.strictEqual(reqOpts.qs, query);
        assert.strictEqual(reqOpts.json, body);
        callback();
      };

      resource.makeReq_(method, path, query, body, done);
    });
  });
});
