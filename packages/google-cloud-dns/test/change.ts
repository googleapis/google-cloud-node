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

import * as assert from 'assert';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';
import {ServiceObject, ServiceObjectConfig} from '@google-cloud/common';
import * as promisify from '@google-cloud/promisify';
import {Response} from 'request';
import {Change} from '../src/change';

let promisified = false;
const fakePromisify = extend({}, promisify, {
  promisifyAll(esClass: Function) {
    if (esClass.name === 'Change') {
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

describe('Change', () => {
  // tslint:disable-next-line:variable-name no-any
  let Change: any;
  // tslint:disable-next-line: no-any
  let change: any;

  const ZONE = {
    name: 'zone-name',
    createChange() {},
  };

  const CHANGE_ID = 'change-id';

  before(() => {
    Change = proxyquire('../src/change', {
               '@google-cloud/common': {
                 ServiceObject: FakeServiceObject,
               },
               '@google-cloud/promisify': fakePromisify,
             }).Change;
  });

  beforeEach(() => {
    change = new Change(ZONE, CHANGE_ID);
  });

  describe('instantiation', () => {
    it('should inherit from ServiceObject', () => {
      assert(change instanceof ServiceObject);

      const calledWith = change.calledWith_[0];

      assert.strictEqual(calledWith.parent, ZONE);
      assert.strictEqual(calledWith.baseUrl, '/changes');
      assert.strictEqual(calledWith.id, CHANGE_ID);
      assert.deepStrictEqual(calledWith.methods, {
        exists: true,
        get: true,
        getMetadata: true,
      });
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });
  });

  describe('change', () => {
    it('should call the parent change method', done => {
      const config = {};

      change.parent.createChange = (config_: {}) => {
        assert.strictEqual(config, config_);
        done();
      };

      change.create(config, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {};

      beforeEach(() => {
        change.parent.createChange = (config: {}, callback: Function) => {
          callback(error, null, apiResponse);
        };
      });

      it('should execute callback with error & apiResponse', done => {
        change.create(
            {}, (err: Error, change: Change, apiResponse_: Response) => {
              assert.strictEqual(err, error);
              assert.strictEqual(change, null);
              assert.strictEqual(apiResponse_, apiResponse);
              done();
            });
      });
    });

    describe('success', () => {
      const changeInstance = {
        id: 'id',
        metadata: {},
      };
      const apiResponse = {};

      beforeEach(() => {
        change.parent.createChange = (config: {}, callback: Function) => {
          callback(null, changeInstance, apiResponse);
        };
      });

      it('should execute callback with self & API response', done => {
        change.create(
            {}, (err: Error, change_: Change, apiResponse_: Response) => {
              assert.ifError(err);
              assert.strictEqual(change_, change);
              assert.strictEqual(apiResponse_, apiResponse);
              done();
            });
      });

      it('should assign the ID and metadata from the change', done => {
        change.create({}, (err: Error, change_: Change) => {
          assert.ifError(err);
          assert.strictEqual(change_.id, changeInstance.id);
          assert.strictEqual(change_.metadata, changeInstance.metadata);
          done();
        });
      });
    });
  });
});
