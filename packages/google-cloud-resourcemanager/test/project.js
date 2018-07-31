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
var extend = require('extend');
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var ServiceObject = require('@google-cloud/common').ServiceObject;
var util = require('@google-cloud/common').util;

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Project') {
      promisified = true;
    }
  },
});

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Project', function() {
  var Project;
  var project;

  var RESOURCE = {
    createProject: util.noop,
  };
  var ID = 'project-id';

  before(function() {
    Project = proxyquire('../src/project.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
    });
  });

  beforeEach(function() {
    project = new Project(RESOURCE, ID);
  });

  describe('instantiation', function() {
    it('should inherit from ServiceObject', function(done) {
      var resourceInstance = extend({}, RESOURCE, {
        createProject: {
          bind: function(context) {
            assert.strictEqual(context, resourceInstance);
            done();
          },
        },
      });

      var project = new Project(resourceInstance, ID);
      assert(project instanceof ServiceObject);

      var calledWith = project.calledWith_[0];

      assert.strictEqual(calledWith.parent, resourceInstance);
      assert.strictEqual(calledWith.baseUrl, '/projects');
      assert.strictEqual(calledWith.id, ID);
      assert.deepStrictEqual(calledWith.methods, {
        create: true,
        delete: true,
        exists: true,
        get: true,
        getMetadata: true,
        setMetadata: {
          reqOpts: {
            method: 'PUT',
          },
        },
      });
    });

    it('should promisify all tlhe things', function() {
      assert(promisified);
    });
  });

  describe('restore', function() {
    var error = new Error('Error.');
    var apiResponse = {a: 'b', c: 'd'};

    beforeEach(function() {
      project.request = function(reqOpts, callback) {
        callback(error, apiResponse);
      };
    });

    it('should make the correct API request', function(done) {
      project.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, ':undelete');

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
});
