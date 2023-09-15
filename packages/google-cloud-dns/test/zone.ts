// Copyright 2015 Google LLC
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

import {ServiceObject, ServiceObjectConfig} from '@google-cloud/common';
import * as promisify from '@google-cloud/promisify';
import arrify = require('arrify');
import * as assert from 'assert';
import {describe, it, before, beforeEach} from 'mocha';
import * as proxyquire from 'proxyquire';
import {CoreOptions, OptionsWithUri, Response} from 'request';
import * as uuid from 'uuid';

import {Change, CreateChangeRequest} from '../src/change';
import {Record, RecordObject, RecordMetadata} from '../src/record';

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  promisifyAll(esClass: Function, options: promisify.PromisifyAllOptions) {
    if (esClass.name !== 'Zone') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, ['change', 'record']);
  },
});

let parseOverride: Function | null;
const fakeDnsZonefile = {
  parse() {
    // eslint-disable-next-line prefer-spread, prefer-rest-params
    return (parseOverride || (() => {})).apply(null, arguments);
  },
};

let writeFileOverride: Function | null;
let readFileOverride: Function | null;
const fakeFs = {
  readFile() {
    // eslint-disable-next-line prefer-spread, prefer-rest-params
    return (readFileOverride || (() => {})).apply(null, arguments);
  },
  writeFile() {
    // eslint-disable-next-line prefer-spread, prefer-rest-params
    return (writeFileOverride || (() => {})).apply(null, arguments);
  },
};

class FakeChange {
  calledWith_: Array<{}>;
  constructor(...args: Array<{}>) {
    this.calledWith_ = args;
  }
}

class FakeRecord {
  calledWith_: Array<{}>;
  constructor(...args: Array<{}>) {
    this.calledWith_ = args;
  }
  static fromZoneRecord_(...args: Array<{}>) {
    const record = new FakeRecord();
    record.calledWith_ = args;
    return record;
  }
}

class FakeServiceObject extends ServiceObject {
  calledWith_: Array<{}>;
  constructor(config: ServiceObjectConfig, ...args: Array<{}>) {
    super(config);
    this.calledWith_ = args;
  }
}

let extended = false;
const fakePaginator = {
  paginator: {
    extend(esClass: Function, methods: string[]) {
      if (esClass.name !== 'Zone') {
        return;
      }
      extended = true;
      methods = arrify(methods);
      assert.strictEqual(esClass.name, 'Zone');
      assert.deepStrictEqual(methods, ['getChanges', 'getRecords']);
    },
    streamify(methodName: string) {
      return methodName;
    },
  },
};

describe('Zone', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Zone: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let zone: any;

  const DNS = {
    createZone() {},
  };
  const ZONE_NAME = 'zone-name';

  before(() => {
    Zone = proxyquire('../src/zone.js', {
      'dns-zonefile': fakeDnsZonefile,
      fs: fakeFs,
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/promisify': fakePromisify,
      '@google-cloud/paginator': fakePaginator,
      './change': {
        Change: FakeChange,
      },
      './record': {Record: FakeRecord},
    }).Zone;
  });

  beforeEach(() => {
    parseOverride = null;
    readFileOverride = null;
    writeFileOverride = null;
    zone = new Zone(DNS, ZONE_NAME);
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should extend the correct methods', () => {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', () => {
      assert.strictEqual(zone.getChangesStream, 'getChanges');
      assert.strictEqual(zone.getRecordsStream, 'getRecords');
    });

    it('should localize the name', () => {
      assert.strictEqual(zone.name, ZONE_NAME);
    });

    it('should inherit from ServiceObject', done => {
      const dnsInstance = Object.assign({}, DNS, {
        createZone: {
          bind(context: {}) {
            assert.strictEqual(context, dnsInstance);
            done();
          },
        },
      });

      const zone = new Zone(dnsInstance, ZONE_NAME);
      assert(zone instanceof ServiceObject);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const calledWith = (zone as any).calledWith_[0];

      assert.strictEqual(calledWith.parent, dnsInstance);
      assert.strictEqual(calledWith.baseUrl, '/managedZones');
      assert.strictEqual(calledWith.id, ZONE_NAME);
      assert.deepStrictEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true,
        getMetadata: true,
      });
    });
  });

  describe('addRecords', () => {
    it('should create a change with additions', done => {
      const records = ['a', 'b', 'c'];

      zone.createChange = (
        options: CreateChangeRequest,
        callback: Function
      ) => {
        assert.strictEqual(options.add, records);
        callback();
      };

      zone.addRecords(records, done);
    });
  });

  describe('change', () => {
    it('should return a Change object', () => {
      const changeId = 'change-id';
      const change = zone.change(changeId);
      assert(change instanceof FakeChange);
      assert.strictEqual(change.calledWith_[0], zone);
      assert.strictEqual(change.calledWith_[1], changeId);
    });
  });

  describe('createChange', () => {
    function generateRecord(recordJson?: {}) {
      recordJson = Object.assign(
        {
          name: uuid.v1(),
          type: uuid.v1(),
          rrdatas: [uuid.v1(), uuid.v1()],
        },
        recordJson
      );

      return {
        toJSON() {
          return recordJson! as {rrdatas: Array<{}>};
        },
      };
    }

    it('should throw error if add or delete is not provided', () => {
      assert.throws(() => {
        zone.createChange({}, () => {});
      }, /Cannot create a change with no additions or deletions/);
    });

    it('should parse and rename add to additions', done => {
      const recordsToAdd = [generateRecord(), generateRecord()];

      const expectedAdditions = recordsToAdd.map(x => x.toJSON());

      zone.request = (reqOpts: CoreOptions) => {
        assert.strictEqual(reqOpts.json.add, undefined);
        assert.deepStrictEqual(reqOpts.json.additions, expectedAdditions);
        done();
      };

      zone.createChange({add: recordsToAdd}, assert.ifError);
    });

    it('should parse and rename delete to deletions', done => {
      const recordsToDelete = [generateRecord(), generateRecord()];

      const expectedDeletions = recordsToDelete.map(x => x.toJSON());

      zone.request = (reqOpts: CoreOptions) => {
        assert.strictEqual(reqOpts.json.delete, undefined);
        assert.deepStrictEqual(reqOpts.json.deletions, expectedDeletions);
        done();
      };

      zone.createChange({delete: recordsToDelete}, assert.ifError);
    });

    it('should group changes by name and type', done => {
      const recordsToAdd = [
        generateRecord({name: 'name.com.', type: 'mx'}),
        generateRecord({name: 'name.com.', type: 'mx'}),
      ];

      zone.request = (reqOpts: CoreOptions) => {
        const expectedRRDatas = recordsToAdd
          .map(x => x.toJSON().rrdatas)
          .reduce((acc, rrdata) => acc.concat(rrdata), []);

        assert.deepStrictEqual(reqOpts.json.additions, [
          {
            name: 'name.com.',
            type: 'mx',
            rrdatas: expectedRRDatas,
          },
        ]);

        done();
      };

      zone.createChange({add: recordsToAdd}, assert.ifError);
    });

    it('should make correct API request', done => {
      zone.request = (reqOpts: OptionsWithUri) => {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/changes');

        done();
      };

      zone.createChange({add: []}, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        zone.request = (reqOpts: {}, callback: Function) => {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        zone.createChange(
          {add: []},
          (err: Error, change: Change, apiResponse_: Response) => {
            assert.strictEqual(err, error);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          }
        );
      });
    });

    describe('success', () => {
      const apiResponse = {id: 1, a: 'b', c: 'd'};

      beforeEach(() => {
        zone.request = (reqOpts: {}, callback: Function) => {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Change & API response', done => {
        const change = {};

        zone.change = (id: string) => {
          assert.strictEqual(id, apiResponse.id);
          return change;
        };

        zone.createChange(
          {add: []},
          (err: Error, change_: Change, apiResponse_: Response) => {
            assert.ifError(err);
            assert.strictEqual(change_, change);
            assert.strictEqual(change_.metadata, apiResponse);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          }
        );
      });
    });
  });

  describe('delete', () => {
    describe('force', () => {
      it('should empty the zone', done => {
        zone.empty = () => {
          done();
        };

        zone.delete({force: true}, assert.ifError);
      });

      it('should try to delete again after emptying', done => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (FakeServiceObject.prototype as any).delete = () => {
          done();
        };

        zone.empty = (callback: Function) => {
          callback();
        };

        zone.delete({force: true}, assert.ifError);
      });
    });
  });

  describe('deleteRecords', () => {
    it('should delete records by type if a string is given', done => {
      const recordsToDelete = 'ns';

      zone.deleteRecordsByType_ = (types: string[], callback: Function) => {
        assert.deepStrictEqual(types, [recordsToDelete]);
        callback();
      };

      zone.deleteRecords(recordsToDelete, done);
    });

    it('should create a change if record objects given', done => {
      const recordsToDelete = {a: 'b', c: 'd'};

      zone.createChange = (
        options: CreateChangeRequest,
        callback: Function
      ) => {
        assert.deepStrictEqual(options.delete, [recordsToDelete]);
        callback();
      };

      zone.deleteRecords(recordsToDelete, done);
    });
  });

  describe('empty', () => {
    it('should get all records', done => {
      zone.getRecords = () => {
        done();
      };

      zone.empty(assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');

      beforeEach(() => {
        zone.getRecords = (callback: Function) => {
          callback(error);
        };
      });

      it('should execute callback with error', done => {
        zone.empty((err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('success', () => {
      const records = [
        {type: 'A'},
        {type: 'AAAA'},
        {type: 'CNAME'},
        {type: 'MX'},
        {type: 'NAPTR'},
        {type: 'NS'},
        {type: 'PTR'},
        {type: 'SOA'},
        {type: 'SPF'},
        {type: 'SRV'},
        {type: 'TXT'},
      ];

      const expectedRecordsToDelete = records.filter(record => {
        return record.type !== 'NS' && record.type !== 'SOA';
      });

      beforeEach(() => {
        zone.getRecords = (callback: Function) => {
          callback(null, records);
        };
      });

      it('should execute callback if no records matched', done => {
        zone.getRecords = (callback: Function) => {
          callback(null, []);
        };

        zone.empty(done);
      });

      it('should delete non-NS and non-SOA records', done => {
        zone.deleteRecords = (
          recordsToDelete: string[],
          callback: Function
        ) => {
          assert.deepStrictEqual(recordsToDelete, expectedRecordsToDelete);
          callback();
        };

        zone.empty(done);
      });
    });
  });

  describe('export', () => {
    const path = './zonefile';

    const records = [
      {
        toString() {
          return 'a';
        },
      },
      {
        toString() {
          return 'a';
        },
      },
      {
        toString() {
          return 'a';
        },
      },
      {
        toString() {
          return 'a';
        },
      },
    ];

    const expectedZonefileContents = 'a\na\na\na';

    beforeEach(() => {
      zone.getRecords = (callback: Function) => {
        callback(null, records);
      };
    });

    describe('get records', () => {
      describe('error', () => {
        const error = new Error('Error.');

        it('should execute callback with error', done => {
          zone.getRecords = (callback: Function) => {
            callback(error);
          };

          zone.export(path, (err: Error) => {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('success', () => {
        it('should get all records', done => {
          zone.getRecords = () => {
            done();
          };

          zone.export(path, assert.ifError);
        });
      });
    });

    describe('write file', () => {
      it('should write correct zone file', done => {
        writeFileOverride = (
          path_: string,
          content: string,
          encoding: string
        ) => {
          assert.strictEqual(path_, path);
          assert.strictEqual(content, expectedZonefileContents);
          assert.strictEqual(encoding, 'utf-8');

          done();
        };

        zone.export(path, assert.ifError);
      });

      describe('error', () => {
        const error = new Error('Error.');

        beforeEach(() => {
          writeFileOverride = (
            path: string,
            content: string,
            encoding: string,
            callback: Function
          ) => {
            callback(error);
          };
        });

        it('should execute the callback with an error', done => {
          zone.export(path, (err: Error) => {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('success', () => {
        beforeEach(() => {
          writeFileOverride = (
            path: string,
            content: string,
            encoding: string,
            callback: Function
          ) => {
            callback();
          };
        });

        it('should execute the callback', done => {
          zone.export(path, (err: Error) => {
            assert.ifError(err);
            done();
          });
        });
      });
    });
  });

  describe('getChanges', () => {
    it('should accept only a callback', done => {
      zone.request = (reqOpts: CoreOptions) => {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      zone.getChanges(assert.ifError);
    });

    it('should accept a sort', done => {
      const query = {sort: 'desc'};

      zone.request = (reqOpts: CoreOptions) => {
        assert.strictEqual(reqOpts.qs.sortOrder, 'descending');
        assert.strictEqual(reqOpts.qs.sort, undefined);

        done();
      };

      zone.getChanges(query, assert.ifError);
    });

    it('should make the correct API request', done => {
      const query = {a: 'b', c: 'd'};

      zone.request = (reqOpts: OptionsWithUri) => {
        assert.strictEqual(reqOpts.uri, '/changes');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      zone.getChanges(query, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        zone.request = (reqOpts: {}, callback: Function) => {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        zone.getChanges(
          {},
          (
            err: Error,
            changes: Change[],
            nextQuery: {},
            apiResponse_: Response
          ) => {
            assert.strictEqual(err, error);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          }
        );
      });
    });

    describe('success', () => {
      const apiResponse = {
        changes: [{id: 1}],
      };

      beforeEach(() => {
        zone.request = (reqOpts: {}, callback: Function) => {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', done => {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken,
        });
        const expectedNextQuery = {
          pageToken: nextPageToken,
        };

        zone.request = (reqOpts: {}, callback: Function) => {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getChanges({}, (err: Error, changes: Change[], nextQuery: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual(nextQuery, expectedNextQuery);
          done();
        });
      });

      it('should execute callback with Changes & API response', done => {
        const change = {};

        zone.change = (id: string) => {
          assert.strictEqual(id, apiResponse.changes[0].id);
          return change;
        };

        zone.getChanges(
          {},
          (
            err: Error,
            changes: Change[],
            nextQuery: {},
            apiResponse_: Response
          ) => {
            assert.ifError(err);
            assert.strictEqual(changes[0], change);
            assert.strictEqual(changes[0].metadata, apiResponse.changes[0]);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          }
        );
      });
    });
  });

  describe('getRecords', () => {
    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        zone.request = (reqOpts: {}, callback: Function) => {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        zone.getRecords(
          {},
          (
            err: Error,
            changes: Change[],
            nextQuery: {},
            apiResponse_: Response
          ) => {
            assert.strictEqual(err, error);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          }
        );
      });

      it('should not require a query', done => {
        zone.getRecords((err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        rrsets: [{type: 'NS'}],
      };

      beforeEach(() => {
        zone.request = (reqOpts: {}, callback: Function) => {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with nextQuery if necessary', done => {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken,
        });
        const expectedNextQuery = {pageToken: nextPageToken};

        zone.request = (reqOpts: {}, callback: Function) => {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getRecords({}, (err: Error, records: Record[], nextQuery: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual(nextQuery, expectedNextQuery);
          done();
        });
      });

      it('should execute callback with Records & API response', done => {
        const record = {};

        zone.record = (type: string, recordObject: RecordObject) => {
          assert.strictEqual(type, apiResponse.rrsets[0].type);
          assert.strictEqual(recordObject, apiResponse.rrsets[0]);
          return record;
        };

        zone.getRecords(
          {},
          (
            err: Error,
            records: Record[],
            nextQuery: {},
            apiResponse_: Response
          ) => {
            assert.ifError(err);
            assert.strictEqual(records[0], record);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          }
        );

        it('should not require a query', done => {
          zone.getRecords(done);
        });
      });

      describe('filtering', () => {
        it('should accept a string type', done => {
          const types = ['MX', 'CNAME'];

          zone.getRecords(types, (err: Error, records: Record[]) => {
            assert.ifError(err);

            assert.strictEqual(records.length, 0);

            done();
          });
        });

        it('should accept an array of types', done => {
          const type = 'MX';

          zone.getRecords(type, (err: Error, records: Record[]) => {
            assert.ifError(err);

            assert.strictEqual(records.length, 0);

            done();
          });
        });

        it('should not send filterByTypes_ in API request', done => {
          zone.request = (reqOpts: CoreOptions) => {
            assert.strictEqual(reqOpts.qs.filterByTypes_, undefined);
            done();
          };

          zone.getRecords('NS', assert.ifError);
        });
      });
    });
  });

  describe('import', () => {
    const path = './zonefile';

    it('should read from the file', done => {
      readFileOverride = (path_: string, encoding: string) => {
        assert.strictEqual(path, path);
        assert.strictEqual(encoding, 'utf-8');
        done();
      };

      zone.import(path, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');

      beforeEach(() => {
        readFileOverride = (
          path: string,
          encoding: string,
          callback: Function
        ) => {
          callback(error);
        };
      });

      it('should execute the callback', done => {
        zone.import(path, (err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('success', () => {
      const recordType = 'ns';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let parsedZonefile: any = {};

      beforeEach(() => {
        parsedZonefile = {
          [recordType]: {a: 'b', c: 'd'},
        };

        parseOverride = () => {
          return parsedZonefile;
        };

        readFileOverride = (
          path: string,
          encoding: string,
          callback: Function
        ) => {
          callback();
        };
      });

      it('should add records', done => {
        zone.addRecords = (
          recordsToCreate: FakeRecord[],
          callback: Function
        ) => {
          assert.strictEqual(recordsToCreate.length, 1);
          const recordToCreate = recordsToCreate[0];
          assert(recordToCreate instanceof FakeRecord);
          const args = recordToCreate.calledWith_;
          assert.strictEqual(args[0], zone);
          assert.strictEqual(args[1], recordType);
          assert.strictEqual(args[2], parsedZonefile[recordType]);
          callback();
        };
        zone.import(path, done);
      });

      it('should use the default ttl', done => {
        const defaultTTL = '90';
        parsedZonefile.$ttl = defaultTTL;
        parsedZonefile[recordType] = {};
        parsedZonefile.mx = {ttl: '180'};
        zone.addRecords = (recordsToCreate: FakeRecord[]) => {
          const record1 = recordsToCreate[0].calledWith_[2];
          assert.strictEqual((record1 as RecordMetadata).ttl, defaultTTL);
          const record2 = recordsToCreate[1].calledWith_[2];
          assert.strictEqual((record2 as RecordMetadata).ttl, '180');
          done();
        };
        zone.import(path, done);
      });
    });
  });

  describe('record', () => {
    it('should return a Record object', () => {
      const type = 'a';
      const metadata = {a: 'b', c: 'd'};
      const record = zone.record(type, metadata);
      assert(record instanceof FakeRecord);
      const args = record.calledWith_;
      assert.strictEqual(args[0], zone);
      assert.strictEqual(args[1], type);
      assert.strictEqual(args[2], metadata);
    });
  });

  describe('replaceRecords', () => {
    it('should get records', done => {
      const recordType = 'ns';
      zone.getRecords = (recordType_: string) => {
        assert.strictEqual(recordType_, recordType);
        done();
      };
      zone.replaceRecords(recordType, [], assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      beforeEach(() => {
        zone.getRecords = (recordType: string, callback: Function) => {
          callback(error);
        };
      });

      it('should execute callback with error', done => {
        zone.replaceRecords('a', [], (err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('success', () => {
      const recordsToCreate = [
        {a: 'b', c: 'd'},
        {a: 'b', c: 'd'},
        {a: 'b', c: 'd'},
      ];

      const recordsToDelete = [
        {a: 'b', c: 'd'},
        {a: 'b', c: 'd'},
        {a: 'b', c: 'd'},
      ];

      beforeEach(() => {
        zone.getRecords = (recordType: string, callback: Function) => {
          callback(null, recordsToDelete);
        };
      });

      it('should create a change', done => {
        zone.createChange = (
          options: CreateChangeRequest,
          callback: Function
        ) => {
          assert.strictEqual(options.add, recordsToCreate);
          assert.strictEqual(options.delete, recordsToDelete);
          callback();
        };
        zone.replaceRecords('a', recordsToCreate, done);
      });
    });
  });

  describe('deleteRecordsByType_', () => {
    it('should get records', done => {
      const recordType = 'ns';
      zone.getRecords = (recordType_: string) => {
        assert.strictEqual(recordType_, recordType);
        done();
      };
      zone.deleteRecordsByType_(recordType, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      beforeEach(() => {
        zone.getRecords = (recordType: string, callback: Function) => {
          callback(error);
        };
      });

      it('should execute callback with error', done => {
        zone.deleteRecordsByType_('a', (err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('success', () => {
      const recordsToDelete = [
        {a: 'b', c: 'd'},
        {a: 'b', c: 'd'},
        {a: 'b', c: 'd'},
      ];

      beforeEach(() => {
        zone.getRecords = (recordType: string, callback: Function) => {
          callback(null, recordsToDelete);
        };
      });

      it('should execute callback if no records matched', done => {
        zone.getRecords = (recordType: string, callback: Function) => {
          callback(null, []);
        };
        zone.deleteRecordsByType_('a', done);
      });

      it('should delete records', done => {
        zone.deleteRecords = (records: Record[], callback: Function) => {
          assert.strictEqual(records, recordsToDelete);
          callback();
        };
        zone.deleteRecordsByType_('a', done);
      });
    });
  });
});
