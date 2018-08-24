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

class FakeOperation {
  calledWith_;
  constructor() {
    this.calledWith_ = arguments;
  }
}

class FakeProject {
  calledWith_;
  constructor() {
    this.calledWith_ = arguments;
  }
}

class FakeService {
  calledWith_;
  constructor() {
    this.calledWith_ = arguments;
  }
}

let extended = false;
const fakePaginator = {
  paginator: {
    // tslint:disable-next-line variable-name
    extend(Class, methods) {
      if (Class.name !== 'Resource') {
        return;
      }
      methods = arrify(methods);
      assert.strictEqual(Class.name, 'Resource');
      assert.deepStrictEqual(methods, ['getProjects']);
      extended = true;
    },
    streamify(methodName) {
      return methodName;
    },
  }
};

let promisified = true;
const fakePromisify = {
  // tslint:disable-next-line variable-name
  promisifyAll(Class, options) {
    if (Class.name !== 'Resource') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, ['operation', 'project']);
  },
};

let makeAuthenticatedRequestFactoryOverride;
const fakeUtil = extend({}, util, {
  makeAuthenticatedRequestFactory() {
    if (makeAuthenticatedRequestFactoryOverride) {
      return makeAuthenticatedRequestFactoryOverride.apply(null, arguments);
    }
    return util.makeAuthenticatedRequestFactory.apply(null, arguments);
  },
});
const originalFakeUtil = extend(true, {}, fakeUtil);

describe('Resource', () => {
  const PROJECT_ID = 'test-project-id';

  // tslint:disable-next-line variable-name
  let Resource;
  let resource;

  before(() => {
    Resource = proxyquire('../src', {
                 '@google-cloud/common': {
                   Operation: FakeOperation,
                   Service: FakeService,
                 },
                 '@google-cloud/promisify': fakePromisify,
                 '@google-cloud/paginator': fakePaginator,
                 './project': {
                   Project: FakeProject,
                 }
               }).Resource;
  });

  beforeEach(() => {
    extend(fakeUtil, originalFakeUtil);
    makeAuthenticatedRequestFactoryOverride = null;

    resource = new Resource({
      projectId: PROJECT_ID,
    });
  });

  describe('instantiation', () => {
    it('should extend the correct methods', () => {
      assert(extended);  // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', () => {
      assert.strictEqual(resource.getProjectsStream, 'getProjects');
    });

    it('should promisify all tlhe things', () => {
      assert(promisified);
    });

    it('should inherit from Service', () => {
      assert(resource instanceof FakeService);

      const calledWith = resource.calledWith_[0];

      const baseUrl = 'https://cloudresourcemanager.googleapis.com/v1';
      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.deepStrictEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/cloud-platform',
      ]);
      assert.strictEqual(calledWith.projectIdRequired, false);
      assert.deepStrictEqual(
          calledWith.packageJson, require('../../package.json'));
    });
  });

  describe('createProject', () => {
    const NEW_PROJECT_ID = 'new-project-id';
    const OPTIONS = {a: 'b', c: 'd'};
    const EXPECTED_BODY = extend({}, OPTIONS, {projectId: NEW_PROJECT_ID});

    it('should not require any options', done => {
      const expectedBody = {projectId: NEW_PROJECT_ID};

      resource.request = reqOpts => {
        assert.deepStrictEqual(reqOpts.json, expectedBody);
        done();
      };

      resource.createProject(NEW_PROJECT_ID, assert.ifError);
    });

    it('should make the correct API request', done => {
      resource.request = reqOpts => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/projects');
        assert.deepStrictEqual(reqOpts.json, EXPECTED_BODY);

        done();
      };

      resource.createProject(NEW_PROJECT_ID, OPTIONS, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        resource.request = (reqOpts, callback) => {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        resource.createProject(NEW_PROJECT_ID, OPTIONS, (err, p, res) => {
          assert.strictEqual(err, error);
          assert.strictEqual(p, null);
          assert.strictEqual(res, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {name: 'operation-name', projectId: undefined};

      beforeEach(() => {
        resource.request = (reqOpts, callback) => {
          callback(null, apiResponse);
        };
      });

      it('should exec callback with Project & API response', done => {
        const project = {};
        const fakeOperation = {};

        resource.project = (id) => {
          assert.strictEqual(id, apiResponse.projectId);
          return project;
        };

        resource.operation = (name) => {
          assert.strictEqual(name, apiResponse.name);
          return fakeOperation;
        };

        resource.createProject(NEW_PROJECT_ID, OPTIONS, (e, p, o, res) => {
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

  describe('getProjects', () => {
    it('should accept only a callback', done => {
      resource.request = reqOpts => {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };
      resource.getProjects(assert.ifError);
    });

    it('should make the correct API request', done => {
      const query = {a: 'b', c: 'd'};
      resource.request = reqOpts => {
        assert.strictEqual(reqOpts.uri, '/projects');
        assert.strictEqual(reqOpts.qs, query);
        done();
      };
      resource.getProjects(query, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        resource.request = (reqOpts, callback) => {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        resource.getProjects({}, (err, projects, nextQuery, apiResp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(projects, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        projects: [{projectId: PROJECT_ID}],
      };

      beforeEach(() => {
        resource.request = (reqOpts, callback) => {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', done => {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken,
        });
        const expectedNextQuery = {
          pageToken: nextPageToken,
        };

        resource.request = (reqOpts, callback) => {
          callback(null, apiResponseWithNextPageToken);
        };

        resource.getProjects({}, (err, projects, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Projects & API resp', done => {
        const project = {};

        resource.project = (name) => {
          assert.strictEqual(name, apiResponse.projects[0].projectId);
          return project;
        };

        resource.getProjects({}, (err, projects, nextQuery, apiResp) => {
          assert.ifError(err);
          assert.strictEqual(projects[0], project);
          assert.strictEqual(projects[0].metadata, apiResponse.projects[0]);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });
  });

  describe('operation', () => {
    const NAME = 'operation-name';

    it('should throw if a name is not provided', () => {
      assert.throws(() => {
        resource.operation();
      }, /A name must be specified for an operation\./);
    });

    it('should return a common/operation', () => {
      const operation = resource.operation(NAME);

      assert(operation instanceof FakeOperation);

      assert.deepStrictEqual(operation.calledWith_[0], {
        parent: resource,
        id: NAME,
      });
    });
  });

  describe('project', () => {
    it('should return a Project object', () => {
      const project = resource.project(PROJECT_ID);
      assert(project instanceof FakeProject);
      assert.strictEqual(project.calledWith_[0], resource);
      assert.strictEqual(project.calledWith_[1], PROJECT_ID);
    });

    it('should use the project ID from the resource', () => {
      resource.projectId = PROJECT_ID;
      const project = resource.project();
      assert(project instanceof FakeProject);
      assert.strictEqual(project.calledWith_[1], PROJECT_ID);
    });

    it('should throw if no project ID was given or found', () => {
      const resourceWithoutProjectId = new Resource({});

      assert.throws(() => {
        resourceWithoutProjectId.project();
      }, /A project ID is required\./);
    });
  });
});
