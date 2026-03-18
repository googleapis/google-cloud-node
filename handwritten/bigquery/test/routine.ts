// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {ServiceObject, ServiceObjectConfig, util} from '@google-cloud/common';
import * as pfy from '@google-cloud/promisify';
import * as assert from 'assert';
import {describe, it, before, beforeEach} from 'mocha';
import * as extend from 'extend';
import * as proxyquire from 'proxyquire';

import * as _root from '../src';

interface CalledWithRoutine extends ServiceObject {
  calledWith_: Array<{
    parent: {};
    baseUrl: string;
    id: string;
    methods: string[];
    createMethod: Function;
  }>;
}

let promisified = false;
const fakePfy = Object.assign({}, pfy, {
  promisifyAll: (c: Function, options: pfy.PromisifyAllOptions) => {
    if (c.name === 'Routine') {
      assert.strictEqual(typeof options, 'undefined');
      promisified = true;
    }
  },
});

class FakeServiceObject extends ServiceObject {
  calledWith_: IArguments;
  constructor(config: ServiceObjectConfig) {
    super(config);
    // eslint-disable-next-line prefer-rest-params
    this.calledWith_ = arguments;
  }
}

describe('BigQuery/Routine', () => {
  const DATASET = {
    id: 'kittens',
    parent: {},
    createRoutine: util.noop,
  } as {} as _root.Dataset;
  const ROUTINE_ID = 'my_routine';

  // tslint:disable-next-line variable-name
  let Routine: typeof _root.Routine;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let routine: any;

  before(() => {
    Routine = proxyquire('../src/routine', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/promisify': fakePfy,
    }).Routine;
  });

  beforeEach(() => {
    routine = new Routine(DATASET, ROUTINE_ID);
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should inherit from ServiceObject', () => {
      assert(routine instanceof ServiceObject);

      const calledWith = (routine as CalledWithRoutine).calledWith_[0];

      assert.strictEqual(calledWith.parent, DATASET);
      assert.strictEqual(calledWith.baseUrl, '/routines');
      assert.strictEqual(calledWith.id, ROUTINE_ID);
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

    it('should configure create method', done => {
      const config = {a: 'b'};

      const dataset = extend(true, {}, DATASET, {
        createRoutine: function (config_: {}, callback: Function) {
          assert.strictEqual(this, dataset);
          assert.deepStrictEqual(config_, config);
          callback(); // done()
        },
      });

      const routine = new Routine(dataset, ROUTINE_ID);
      const calledWith = (routine as CalledWithRoutine).calledWith_[0];

      calledWith.createMethod(config, done);
    });
  });

  describe('setMetadata', () => {
    it('should update the metadata', done => {
      const currentMetadata = {a: 'b'};
      const newMetadata = {c: 'd'};
      const expectedMetadata = Object.assign({}, currentMetadata, newMetadata);

      routine.getMetadata = (callback: Function) => {
        callback(null, currentMetadata);
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (FakeServiceObject.prototype as any).setMetadata = function (
        metadata: {},
        callback: Function,
      ) {
        assert.strictEqual(this, routine);
        assert.deepStrictEqual(metadata, expectedMetadata);
        callback!(); // done()
      };

      routine.setMetadata(newMetadata, done);
    });

    it('should return an error if getting metadata fails', done => {
      const error = new Error('Error.');
      routine.getMetadata = (callback: Function) => {
        callback(error);
      };

      routine.setMetadata({}, (err: Error) => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });
});
