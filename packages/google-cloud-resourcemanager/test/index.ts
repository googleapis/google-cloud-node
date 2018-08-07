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

import * as arrify from 'arrify';
import * as assert from 'assert';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import {util} from '@google-cloud/common';

function FakeOperation() {
  this.calledWith_ = arguments;
}

function FakeProject() {
  this.calledWith_ = arguments;
}

function FakeService() {
  this.calledWith_ = arguments;
}

var extended = false;
var fakePaginator = {
  extend: function(Class, methods) {
    if (Class.name !== 'Resource') {
      return;
    }

    methods = arrify(methods);
    assert.strictEqual(Class.name, 'Resource');
    assert.deepStrictEqual(methods, ['getProjects']);
    extended = true;
  },
  streamify: function(methodName) {
    return methodName;
  },
};

var promisified = true;
var makeAuthenticatedRequestFactoryOverride;
var fakeUtil = extend({}, util, {
  makeAuthenticatedRequestFactory: function() {
    if (makeAuthenticatedRequestFactoryOverride) {
      return makeAuthenticatedRequestFactoryOverride.apply(null, arguments);
    }

    return util.makeAuthenticatedRequestFactory.apply(null, arguments);
  },
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Resource') {
      return;
    }

    promisified = true;
    assert.deepStrictEqual(options.exclude, ['operation', 'project']);
  },
});
var originalFakeUtil = extend(true, {}, fakeUtil);

describe('Resource', function() {
  var PROJECT_ID = 'test-project-id';

  var Resource;
  var resource;

  before(function() {
    Resource = proxyquire('../src', {
      '@google-cloud/common': {
        Operation: FakeOperation,
        Service: FakeService,
        paginator: fakePaginator,
        util: fakeUtil,
      },
      './project.js': FakeProject,
    });
  });

  beforeEach(function() {
    extend(fakeUtil, originalFakeUtil);
    makeAuthenticatedRequestFactoryOverride = null;

    resource = new Resource({
      projectId: PROJECT_ID,
    });
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', function() {
      assert.strictEqual(resource.getProjectsStream, 'getProjects');
    });

    it('should promisify all tlhe things', function() {
      assert(promisified);
    });

    it('should inherit from Service', function() {
      assert(resource instanceof FakeService);

      var calledWith = resource.calledWith_[0];

      var baseUrl = 'https://cloudresourcemanager.googleapis.com/v1';
      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.deepStrictEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/cloud-platform',
      ]);
      assert.strictEqual(calledWith.projectIdRequired, false);
      assert.deepStrictEqual(
        calledWith.packageJson,
        require('../../package.json')
      );
    });
  });

  describe('createProject', function() {
    var NEW_PROJECT_ID = 'new-project-id';
    var OPTIONS = {a: 'b', c: 'd'};
    var EXPECTED_BODY = extend({}, OPTIONS, {projectId: NEW_PROJECT_ID});

    it('should not require any options', function(done) {
      var expectedBody = {projectId: NEW_PROJECT_ID};

      resource.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.json, expectedBody);
        done();
      };

      resource.createProject(NEW_PROJECT_ID, assert.ifError);
    });

    it('should make the correct API request', function(done) {
      resource.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/projects');
        assert.deepStrictEqual(reqOpts.json, EXPECTED_BODY);

        done();
      };

      resource.createProject(NEW_PROJECT_ID, OPTIONS, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        resource.request = function(reqOpts, callback) {
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
      var apiResponse: any = {
        name: 'operation-name',
      };

      beforeEach(function() {
        resource.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec callback with Project & API response', function(done) {
        var project = {};
        var fakeOperation = {};

        resource.project = function(id) {
          assert.strictEqual(id, apiResponse.projectId);
          return project;
        };

        resource.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return fakeOperation;
        };

        resource.createProject(NEW_PROJECT_ID, OPTIONS, function(e, p, o, res) {
          assert.ifError(e);

          assert.strictEqual(p, project);

          assert.strictEqual(o, fakeOperation);
          assert.strictEqual(o.metadata, apiResponse);

          assert.strictEqual(res, apiResponse);

          done();
        });
      });
    });
  });

  describe('getProjects', function() {
    it('should accept only a callback', function(done) {
      resource.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      resource.getProjects(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var query = {a: 'b', c: 'd'};

      resource.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/projects');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      resource.getProjects(query, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        resource.request = function(reqOpts, callback) {
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
        projects: [{projectId: PROJECT_ID}],
      };

      beforeEach(function() {
        resource.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        var expectedNextQuery = {
          pageToken: nextPageToken,
        };

        resource.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        resource.getProjects({}, function(err, projects, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Projects & API resp', function(done) {
        var project = {};

        resource.project = function(name) {
          assert.strictEqual(name, apiResponse.projects[0].projectId);
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

  describe('operation', function() {
    var NAME = 'operation-name';

    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        resource.operation();
      }, /A name must be specified for an operation\./);
    });

    it('should return a common/operation', function() {
      var operation = resource.operation(NAME);

      assert(operation instanceof FakeOperation);

      assert.deepStrictEqual(operation.calledWith_[0], {
        parent: resource,
        id: NAME,
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
      resource.projectId = PROJECT_ID;
      var project = resource.project();
      assert(project instanceof FakeProject);
      assert.strictEqual(project.calledWith_[1], PROJECT_ID);
    });

    it('should throw if no project ID was given or found', function() {
      var resourceWithoutProjectId = new Resource({});

      assert.throws(function() {
        resourceWithoutProjectId.project();
      }, /A project ID is required\./);
    });
  });
});
