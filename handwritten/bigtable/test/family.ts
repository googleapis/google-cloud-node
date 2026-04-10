// Copyright 2016 Google LLC
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
import {before, beforeEach, afterEach, describe, it} from 'mocha';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import {google} from '../protos/protos';
import * as fm from '../src/family';
import {Table} from '../src/table';

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  promisifyAll(klass: Function) {
    if (klass.name === 'Family') {
      promisified = true;
    }
  },
});

const sandbox = sinon.createSandbox();

describe('Bigtable/Family', () => {
  const FAMILY_ID = 'family-test';
  const TABLE = {
    bigtable: {
      request: () => {},
    },
    id: 'my-table',
    name: 'projects/my-project/instances/my-inststance/tables/my-table',
    getFamilies: () => {},
    createFamily: () => {},
  } as {} as Table;

  const FAMILY_NAME = `${TABLE.name}/columnFamilies/${FAMILY_ID}`;
  let Family: typeof fm.Family;
  let family: fm.Family;
  let FamilyError: typeof fm.FamilyError;

  before(() => {
    const Fake = proxyquire('../src/family.js', {
      '@google-cloud/promisify': fakePromisify,
    });
    Family = Fake.Family;
    FamilyError = Fake.FamilyError;
  });

  beforeEach(() => {
    family = new Family(TABLE, FAMILY_NAME);
  });

  afterEach(() => sandbox.restore());

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize the Bigtable instance', () => {
      assert.strictEqual(family.bigtable, TABLE.bigtable);
    });

    it('should localize the Table instance', () => {
      assert.strictEqual(family.table, TABLE);
    });

    it('should localize the full resource path', () => {
      assert.strictEqual(family.id, FAMILY_ID);
    });

    it('should extract the family name', () => {
      const family = new Family(TABLE, FAMILY_ID);
      assert.strictEqual(family.name, FAMILY_NAME);
    });

    it('should leave full family names unaltered and localize the id from the name', () => {
      const family = new Family(TABLE, FAMILY_NAME);
      assert.strictEqual(family.name, FAMILY_NAME);
      assert.strictEqual(family.id, FAMILY_ID);
    });

    it('should throw if family id in wrong format', () => {
      const id = `/project/bad-project/instances/bad-instance/columnFamiles/${FAMILY_ID}`;
      assert.throws(() => {
        new Family(TABLE, id);
      }, Error);
    });
  });

  describe('formatRule_', () => {
    it('should capture the max age option', () => {
      const originalRule = {
        age: 10,
      };
      const rule = Family.formatRule_(originalRule);
      assert.deepStrictEqual(rule, {
        maxAge: originalRule.age,
      });
    });

    it('should capture the max number of versions option', () => {
      const originalRule = {
        versions: 10,
      };
      const rule = Family.formatRule_(originalRule);
      assert.deepStrictEqual(rule, {
        maxNumVersions: originalRule.versions,
      });
    });

    it('should create a union rule', () => {
      const originalRule = {
        age: 10,
        versions: 2,
        union: true,
      };
      const rule = Family.formatRule_(originalRule);
      assert.deepStrictEqual(rule, {
        union: {
          rules: [
            {
              maxAge: originalRule.age,
            },
            {
              maxNumVersions: originalRule.versions,
            },
          ],
        },
      });
    });

    it('should create an intersecting rule', () => {
      const originalRule = {
        age: 10,
        versions: 2,
      };
      const rule = Family.formatRule_(originalRule);
      assert.deepStrictEqual(rule, {
        intersection: {
          rules: [
            {
              maxAge: originalRule.age,
            },
            {
              maxNumVersions: originalRule.versions,
            },
          ],
        },
      });
    });

    it('should allow nested rules', () => {
      const originalRule = {
        age: 10,
        rule: {age: 30, versions: 2},
        union: true,
      };
      const rule = Family.formatRule_(originalRule);
      assert.deepStrictEqual(rule, {
        union: {
          rules: [
            {maxAge: originalRule.age},
            {
              intersection: {
                rules: [
                  {maxAge: originalRule.rule.age},
                  {maxNumVersions: originalRule.rule.versions},
                ],
              },
            },
          ],
        },
      });
    });

    it('should throw if union only has one rule', () => {
      assert.throws(() => {
        Family.formatRule_({age: 10, union: true});
      }, /A union must have more than one garbage collection rule\./);
    });

    it('should throw if no rules are provided', () => {
      assert.throws(() => {
        Family.formatRule_({});
      }, /No garbage collection rules were specified\./);
    });
  });

  describe('create', () => {
    it('should call createFamily from table', done => {
      const options = {};
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (family as any).table.createFamily = (
        id: string,
        options_: {},
        callback: Function,
      ) => {
        assert.strictEqual(id, family.id);
        assert.strictEqual(options_, options);
        callback(); // done()
      };
      family.create(options, done);
    });

    it('should not require options', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (family as any).table.createFamily = (
        name: string,
        options: {},
        callback: Function,
      ) => {
        assert.deepStrictEqual(options, {});
        callback(); // done()
      };
      family.create(done);
    });
  });

  describe('delete', () => {
    it('should make the correct request', done => {
      sandbox.stub(family.bigtable, 'request').callsFake((config, callback) => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'modifyColumnFamilies');
        assert.deepStrictEqual(config.reqOpts, {
          name: family.table.name,
          modifications: [
            {
              id: family.id,
              drop: true,
            },
          ],
        });
        assert.deepStrictEqual(config.gaxOpts, {});
        callback!(null); // done()
      });
      family.delete(done);
    });

    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      sandbox.stub(family.bigtable, 'request').callsFake(config => {
        assert.strictEqual(config.gaxOpts, gaxOptions);
        done();
      });
      family.delete(gaxOptions, assert.ifError);
    });
  });

  describe('exists', () => {
    it('should not require gaxOptions', done => {
      sandbox.stub(family, 'getMetadata').callsFake(gaxOptions => {
        assert.deepStrictEqual(gaxOptions, {});
        done();
      });
      family.exists(assert.ifError);
    });

    it('should pass gaxOptions to getMetadata', done => {
      const gaxOptions = {};
      sandbox.stub(family, 'getMetadata').callsFake(gaxOptions_ => {
        assert.strictEqual(gaxOptions_, gaxOptions);
        done();
      });
      family.exists(gaxOptions, assert.ifError);
    });

    it('should return false if FamilyError', done => {
      const error = new FamilyError('Error.');
      sandbox.stub(family, 'getMetadata').callsArgWith(1, error);
      family.exists((err, exists) => {
        assert.ifError(err);
        assert.strictEqual(exists, false);
        done();
      });
    });

    it('should return error if not FamilyError', done => {
      const error = new Error('Error.');
      sandbox.stub(family, 'getMetadata').callsArgWith(1, error);
      family.exists(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return true if no error', done => {
      sandbox.stub(family, 'getMetadata').callsArgWith(1, null, {});
      family.exists((err, exists) => {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });
  });

  describe('get', () => {
    it('should call getMetadata', done => {
      const options = {
        gaxOptions: {},
      };
      sandbox.stub(family, 'getMetadata').callsFake(gaxOptions => {
        assert.strictEqual(gaxOptions, options.gaxOptions);
        done();
      });
      family.get(options, assert.ifError);
    });

    it('should not require an options object', done => {
      sandbox.stub(family, 'getMetadata').callsFake(gaxOptions => {
        assert.deepStrictEqual(gaxOptions, undefined);
        done();
      });
      family.get(assert.ifError);
    });

    it('should auto create with a FamilyError error', done => {
      const error = new FamilyError(TABLE.id);
      const options = {
        autoCreate: true,
        gaxOptions: {},
      };
      sandbox.stub(family, 'getMetadata').callsArgOnWith(1, error);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (family as any).create = (options_: any, callback: Function) => {
        assert.strictEqual(options_.gaxOptions, options.gaxOptions);
        callback();
      };
      family.get(options, done);
    });

    it('should pass the rules when auto creating', done => {
      const error = new FamilyError(TABLE.id);
      const options = {
        autoCreate: true,
        rule: {
          versions: 1,
        },
      };
      sandbox.stub(family, 'getMetadata').callsArgWith(1, error);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (family as any).create = (options_: {}, callback: Function) => {
        assert.deepStrictEqual(options.rule, {versions: 1});
        callback();
      };
      family.get(options, done);
    });

    it('should not auto create without a FamilyError error', done => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const error: any = new Error('Error.');
      error.code = 'NOT-5';
      const options = {
        autoCreate: true,
      };
      sandbox.stub(family, 'getMetadata').callsArgWith(1, error);
      family.create = () => {
        throw new Error('Should not create.');
      };
      family.get(options, err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should not auto create unless requested', done => {
      const error = new FamilyError(TABLE.id);
      sandbox.stub(family, 'getMetadata').callsArgWith(1, error);
      family.create = () => {
        throw new Error('Should not create.');
      };
      family.get(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return an error from getMetadata', done => {
      const error = new Error('Error.');
      sandbox.stub(family, 'getMetadata').callsArgWith(1, error);
      family.get(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should return self and API response', done => {
      const apiResponse = {};
      sandbox.stub(family, 'getMetadata').callsArgWith(1, null, apiResponse);
      family.get((err, family_, apiResponse_) => {
        assert.ifError(err);
        assert.strictEqual(family_, family);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });
  });

  describe('getMetadata', () => {
    it('should accept gaxOptions', done => {
      const gaxOptions = {};
      sandbox.stub(family.table, 'getFamilies').callsFake(gaxOptions_ => {
        assert.strictEqual(gaxOptions_, gaxOptions);
        done();
      });
      family.getMetadata(gaxOptions, assert.ifError);
    });

    it('should return an error to the callback', done => {
      const err = new Error('err');
      const response = {};
      sandbox
        .stub(family.table, 'getFamilies')
        .callsArgWith(1, err, null, response);
      family.getMetadata(err_ => {
        assert.strictEqual(err, err_);
        done();
      });
    });

    it('should update the metadata', done => {
      const family = new Family(TABLE, FAMILY_NAME);
      family.metadata = {
        a: 'a',
        b: 'b',
      } as google.bigtable.admin.v2.IColumnFamily;
      sandbox.stub(family.table, 'getFamilies').callsArgWith(1, null, [family]);
      family.getMetadata((err, metadata) => {
        assert.ifError(err);
        assert.strictEqual(metadata, family.metadata);
        done();
      });
    });

    it('should return a custom error if no results', done => {
      sandbox.stub(family.table, 'getFamilies').callsArgWith(1, null, []);
      family.getMetadata(err => {
        assert(err instanceof FamilyError);
        done();
      });
    });
  });

  describe('setMetadata', () => {
    it('should provide the proper request options', done => {
      sandbox.stub(family.bigtable, 'request').callsFake(config => {
        assert.strictEqual(config.client, 'BigtableTableAdminClient');
        assert.strictEqual(config.method, 'modifyColumnFamilies');
        assert.strictEqual(config.reqOpts.name, TABLE.name);
        assert.deepStrictEqual(config.reqOpts.modifications, [
          {
            id: FAMILY_ID,
            update: {},
          },
        ]);
        done();
      });
      family.setMetadata({}, assert.ifError);
    });

    it('should respect the gc rule option', done => {
      const formatRule = Family.formatRule_;

      const formattedRule = {
        a: 'a',
        b: 'b',
      } as fm.IGcRule;

      const metadata = {
        rule: {
          c: 'c',
          d: 'd',
        },
      } as fm.SetFamilyMetadataOptions;
      sandbox.stub(Family, 'formatRule_').callsFake(rule => {
        assert.strictEqual(rule, metadata.rule);
        return formattedRule;
      });
      sandbox.stub(family.bigtable, 'request').callsFake(config => {
        assert.deepStrictEqual(config.reqOpts, {
          name: TABLE.name,
          modifications: [
            {
              id: family.id,
              update: {
                gcRule: formattedRule,
              },
            },
          ],
        });
        Family.formatRule_ = formatRule;
        done();
      });
      family.setMetadata(metadata, assert.ifError);
    });

    it('should return an error to the callback', done => {
      const error = new Error('err');
      sandbox.stub(family.bigtable, 'request').callsArgWith(1, error);
      family.setMetadata({}, err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should update the metadata property', done => {
      const fakeMetadata = {};
      const response = {
        columnFamilies: {
          'family-test': fakeMetadata,
        },
      };
      sandbox.stub(family.bigtable, 'request').callsArgWith(1, null, response);
      family.setMetadata({}, (err, metadata, apiResponse) => {
        assert.ifError(err);
        assert.strictEqual(metadata, fakeMetadata);
        assert.strictEqual(family.metadata, fakeMetadata);
        assert.strictEqual(apiResponse, response);
        done();
      });
    });
  });

  describe('FamilyError', () => {
    it('should set the code and message', () => {
      const err = new FamilyError(FAMILY_NAME);

      assert.strictEqual(err.code, 404);
      assert.strictEqual(
        err.message,
        'Column family not found: ' + FAMILY_NAME + '.',
      );
    });
  });
});
