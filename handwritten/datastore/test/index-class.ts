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

import * as promisify from '@google-cloud/promisify';
import * as assert from 'assert';
import {before, beforeEach, describe, it} from 'mocha';
import * as proxyquire from 'proxyquire';

import * as ds from '../src';

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  promisifyAll(klass: Function) {
    if (klass.name === 'Index') {
      promisified = true;
    }
  },
});

describe('Index', () => {
  const INDEX_ID = 'my-index';
  let DATASTORE: ds.Datastore;

  let Index: typeof ds.Index;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let index: any;

  before(() => {
    Index = proxyquire('../src/index-class.js', {
      '@google-cloud/promisify': fakePromisify,
    }).Index;
  });

  beforeEach(() => {
    DATASTORE = {} as ds.Datastore;
    index = new Index(DATASTORE, INDEX_ID);
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize datastore instance', () => {
      assert.strictEqual(index.datastore, DATASTORE);
    });

    it('should localize id from name', () => {
      const name = 'long/formatted/name';
      const index = new Index(DATASTORE, name);
      assert.strictEqual(index.id, name.split('/').pop());
    });

    it('should localize id from id', () => {
      assert.strictEqual(index.id, INDEX_ID);
    });
  });

  describe('get', () => {
    it('should call getMetadata', done => {
      const gaxOptions = {};
      index.getMetadata = (options: {}) => {
        assert.strictEqual(options, gaxOptions);
        done();
      };
      index.get(gaxOptions, assert.ifError);
    });

    it('should not require an options object', done => {
      index.getMetadata = (options: {}) => {
        assert.deepStrictEqual(options, {});
        done();
      };
      index.get(assert.ifError);
    });

    it('should return an error from getMetadata', done => {
      const error = new Error('Error.');
      index.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(error);
      };
      index.get((err: Error | null) => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return self and API response', done => {
      const apiResponse = {};
      index.getMetadata = (gaxOptions: {}, callback: Function) => {
        callback(null, apiResponse);
      };
      index.get((err: Error | null, _index: {}, _apiResponse: {}) => {
        assert.ifError(err);
        assert.strictEqual(_index, index);
        assert.strictEqual(_apiResponse, apiResponse);
        done();
      });
    });
  });

  describe('getMetadata', () => {
    it('should make the correct request', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      index.datastore.request_ = (config: any) => {
        assert.strictEqual(config.client, 'DatastoreAdminClient');
        assert.strictEqual(config.method, 'getIndex');
        assert.deepStrictEqual(config.reqOpts, {
          indexId: index.id,
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        done();
      };

      index.getMetadata(assert.ifError);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};

      index.datastore.request_ = (config: {gaxOpts: {}}) => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      };

      index.getMetadata(gaxOptions, assert.ifError);
    });

    it('should update the metadata', done => {
      const response = {};
      index.datastore.request_ = (config: {}, callback: Function) => {
        callback(null, response);
      };
      index.getMetadata((err: Error | null, metadata: {}) => {
        assert.ifError(err);
        assert.strictEqual(metadata, response);
        assert.strictEqual(index.metadata, response);
        done();
      });
    });
  });
});
