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
  }
});

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Project', function() {
  var Project;
  var project;

  var PROJECT_ID = 'project-1';
  var COMPUTE = {
    projectId: PROJECT_ID,
    authConfig: { a: 'b', c: 'd' }
  };

  before(function() {
    Project = proxyquire('../src/project.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil
      }
    });
  });

  beforeEach(function() {
    project = new Project(COMPUTE);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the name', function() {
      assert.strictEqual(project.name, PROJECT_ID);
    });

    it('should inherit from ServiceObject', function() {
      assert(project instanceof ServiceObject);

      var calledWith = project.calledWith_[0];

      assert.strictEqual(calledWith.parent, COMPUTE);
      assert.strictEqual(calledWith.baseUrl, '/');
      assert.strictEqual(calledWith.id, PROJECT_ID);
    });
  });
});
