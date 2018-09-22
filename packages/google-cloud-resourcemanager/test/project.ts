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

import * as assert from 'assert';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import {ServiceObject, util, ServiceObjectConfig, DecorateRequestOptions} from '@google-cloud/common';
import * as promisify from '@google-cloud/promisify';
import {RequestCallback, Response} from 'request';

let promisified = false;
const fakePromisify = extend({}, promisify, {
  // tslint:disable-next-line variable-name
  promisifyAll(Class: Function) {
    if (Class.name === 'Project') {
      promisified = true;
    }
  },
});

class FakeServiceObject extends ServiceObject {
  calledWith_: IArguments;
  constructor(config: ServiceObjectConfig) {
    super(config);
    this.calledWith_ = arguments;
  }
}

describe('Project', () => {
  // tslint:disable-next-line variable-name no-any
  let Project: any;
  // tslint:disable-next-line no-any
  let project: any;

  const RESOURCE = {
    createProject: util.noop,
  };
  const ID = 'project-id';

  before(() => {
    Project = proxyquire('../src/project.js', {
                '@google-cloud/common': {
                  ServiceObject: FakeServiceObject,
                },
                '@google-cloud/promisify': fakePromisify
              }).Project;
  });

  beforeEach(() => {
    project = new Project(RESOURCE, ID);
  });

  describe('instantiation', () => {
    it('should inherit from ServiceObject', done => {
      const resourceInstance = extend({}, RESOURCE, {
        createProject: {
          bind(context: {}) {
            assert.strictEqual(context, resourceInstance);
            done();
          },
        },
      });

      const project = new Project(resourceInstance, ID);
      assert(project instanceof ServiceObject);

      const calledWith = project.calledWith_[0];

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

    it('should promisify all tlhe things', () => {
      assert(promisified);
    });
  });

  describe('restore', () => {
    const error = new Error('Error.');
    const apiResponse = {a: 'b', c: 'd'};

    beforeEach(() => {
      project.request =
          (reqOpts: DecorateRequestOptions, callback: Function) => {
            callback(error, apiResponse);
          };
    });

    it('should make the correct API request', done => {
      project.request = (reqOpts: DecorateRequestOptions) => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, ':undelete');
        done();
      };
      project.restore(assert.ifError);
    });

    it('should execute the callback with error & API response', done => {
      project.restore((err: Error, apiResponse_: Response) => {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });

    it('should not require a callback', () => {
      assert.doesNotThrow(() => {
        project.restore();
      });
    });
  });
});
