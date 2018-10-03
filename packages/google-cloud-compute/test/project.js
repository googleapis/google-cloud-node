/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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

const assert = require('assert');
const extend = require('extend');
const proxyquire = require('proxyquire');
const promisify = require('@google-cloud/promisify');

let promisified = false;
const fakePromisify = extend({}, promisify, {
  promisifyAll: function(Class) {
    if (Class.name === 'Project') {
      promisified = true;
    }
  },
});

function FakeServiceObject() {
  this.calledWith_ = arguments;
}

describe('Project', function() {
  let Project;
  let project;

  const PROJECT_ID = 'project-1';
  const COMPUTE = {
    projectId: PROJECT_ID,
    authConfig: {a: 'b', c: 'd'},
  };

  before(function() {
    Project = proxyquire('../src/project.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/promisify': fakePromisify,
    });
  });

  beforeEach(function() {
    project = new Project(COMPUTE);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the ID', function() {
      assert.strictEqual(project.id, PROJECT_ID);
    });

    it('should inherit from ServiceObject', function() {
      assert(project instanceof FakeServiceObject);

      const calledWith = project.calledWith_[0];

      assert.strictEqual(calledWith.parent, COMPUTE);
      assert.strictEqual(calledWith.baseUrl, '');
      assert.strictEqual(calledWith.id, '');
      assert.deepStrictEqual(calledWith.methods, {
        get: true,
        getMetadata: true,
      });
    });
  });
});
