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

import * as arrify from 'arrify';
import * as assert from 'assert';
import * as extend from 'extend';
const flatten = require('lodash.flatten');
import * as proxyquire from 'proxyquire';
import {ServiceObject, ServiceObjectConfig} from '@google-cloud/common';
import * as promisify from '@google-cloud/promisify';
import * as uuid from 'uuid';

let promisified = false;
const fakePromisify = extend({}, promisify, {
  // tslint:disable-next-line:variable-name
  promisifyAll(Class, options) {
    if (Class.name !== 'Zone') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, ['change', 'record']);
  }
});

let parseOverride;
const fakeDnsZonefile = {
  parse() {
    return (parseOverride || (() => {})).apply(null, arguments);
  },
};

let writeFileOverride;
let readFileOverride;
const fakeFs = {
  readFile() {
    return (readFileOverride || (() => {})).apply(null, arguments);
  },
  writeFile() {
    return (writeFileOverride || (() => {})).apply(null, arguments);
  },
};

function FakeChange() {
  this.calledWith_ = arguments;
}

class FakeRecord {
  calledWith_;
  constructor() {
    this.calledWith_ = arguments;
  }
  static fromZoneRecord_() {
    const record = new FakeRecord();
    record.calledWith_ = arguments;
    return record;
  }
}

class FakeServiceObject extends ServiceObject {
  calledWith_;
  constructor(config: ServiceObjectConfig) {
    super(config);
    this.calledWith_ = arguments;
  }
}

let extended = false;
const fakePaginator = {
  paginator: {
    // tslint:disable-next-line:variable-name
    extend(Class, methods) {
      if (Class.name !== 'Zone') {
        return;
      }
      extended = true;
      methods = arrify(methods);
      assert.strictEqual(Class.name, 'Zone');
      assert.deepStrictEqual(methods, ['getChanges', 'getRecords']);
    },
    streamify(methodName) {
      return methodName;
    },
  },
};

describe('Zone', () => {
  // tslint:disable-next-line:variable-name
  let Zone;
  let zone;

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
             './record': {Record: FakeRecord}
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
      assert(extended);  // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', () => {
      assert.strictEqual(zone.getChangesStream, 'getChanges');
      assert.strictEqual(zone.getRecordsStream, 'getRecords');
    });

    it('should localize the name', () => {
      assert.strictEqual(zone.name, ZONE_NAME);
    });

    it('should inherit from ServiceObject', done => {
      const dnsInstance = extend({}, DNS, {
        createZone: {
          bind(context) {
            assert.strictEqual(context, dnsInstance);
            done();
          },
        },
      });

      const zone = new Zone(dnsInstance, ZONE_NAME);
      assert(zone instanceof ServiceObject);

      const calledWith = zone.calledWith_[0];

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

      zone.createChange = (options, callback) => {
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
    function generateRecord(recordJson?) {
      recordJson = extend(
          {
            name: uuid.v1(),
            type: uuid.v1(),
            rrdatas: [uuid.v1(), uuid.v1()],
          },
          recordJson);

      return {
        toJSON() {
          return recordJson;
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

      zone.request = reqOpts => {
        assert.strictEqual(reqOpts.json.add, undefined);
        assert.deepStrictEqual(reqOpts.json.additions, expectedAdditions);
        done();
      };

      zone.createChange({add: recordsToAdd}, assert.ifError);
    });

    it('should parse and rename delete to deletions', done => {
      const recordsToDelete = [generateRecord(), generateRecord()];

      const expectedDeletions = recordsToDelete.map(x => x.toJSON());

      zone.request = reqOpts => {
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

      zone.request = reqOpts => {
        const expectedRRDatas =
            flatten(recordsToAdd.map(x => x.toJSON()).map(x => x.rrdatas));

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
      zone.request = reqOpts => {
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
        zone.request = (reqOpts, callback) => {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        zone.createChange({add: []}, (err, change, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {id: 1, a: 'b', c: 'd'};

      beforeEach(() => {
        zone.request = (reqOpts, callback) => {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Change & API response', done => {
        const change = {};

        zone.change = id => {
          assert.strictEqual(id, apiResponse.id);
          return change;
        };

        zone.createChange({add: []}, (err, change_, apiResponse_) => {
          assert.ifError(err);

          assert.strictEqual(change_, change);
          assert.strictEqual(change_.metadata, apiResponse);

          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
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
        FakeServiceObject.prototype.delete = () => {
          done();
        };

        zone.empty = callback => {
          callback();
        };

        zone.delete({force: true}, assert.ifError);
      });
    });

    it.skip('should make the correct API request', done => {
      FakeServiceObject.prototype.delete = callback => {
        assert.strictEqual(this, zone);
        callback!(null);
      };
      zone.delete(done);
    });
  });

  describe('deleteRecords', () => {
    it('should delete records by type if a string is given', done => {
      const recordsToDelete = 'ns';

      zone.deleteRecordsByType_ = (types, callback) => {
        assert.deepStrictEqual(types, [recordsToDelete]);
        callback();
      };

      zone.deleteRecords(recordsToDelete, done);
    });

    it('should create a change if record objects given', done => {
      const recordsToDelete = {a: 'b', c: 'd'};

      zone.createChange = (options, callback) => {
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
        zone.getRecords = callback => {
          callback(error);
        };
      });

      it('should execute callback with error', done => {
        zone.empty(err => {
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
        zone.getRecords = callback => {
          callback(null, records);
        };
      });

      it('should execute callback if no records matched', done => {
        zone.getRecords = callback => {
          callback(null, []);
        };

        zone.empty(done);
      });

      it('should delete non-NS and non-SOA records', done => {
        zone.deleteRecords = (recordsToDelete, callback) => {
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
      zone.getRecords = callback => {
        callback(null, records);
      };
    });

    describe('get records', () => {
      describe('error', () => {
        const error = new Error('Error.');

        it('should execute callback with error', done => {
          zone.getRecords = callback => {
            callback(error);
          };

          zone.export(path, err => {
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
        writeFileOverride = (path_, content, encoding) => {
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
          writeFileOverride = (path, content, encoding, callback) => {
            callback(error);
          };
        });

        it('should execute the callback with an error', done => {
          zone.export(path, err => {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('success', () => {
        beforeEach(() => {
          writeFileOverride = (path, content, encoding, callback) => {
            callback();
          };
        });

        it('should execute the callback', done => {
          zone.export(path, err => {
            assert.ifError(err);
            done();
          });
        });
      });
    });
  });

  describe('getChanges', () => {
    it('should accept only a callback', done => {
      zone.request = reqOpts => {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      zone.getChanges(assert.ifError);
    });

    it('should accept a sort', done => {
      const query = {sort: 'desc'};

      zone.request = reqOpts => {
        assert.strictEqual(reqOpts.qs.sortOrder, 'descending');
        assert.strictEqual(reqOpts.qs.sort, undefined);

        done();
      };

      zone.getChanges(query, assert.ifError);
    });

    it('should make the correct API request', done => {
      const query = {a: 'b', c: 'd'};

      zone.request = reqOpts => {
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
        zone.request = (reqOpts, callback) => {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        zone.getChanges({}, (err, changes, nextQuery, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        changes: [{id: 1}],
      };

      beforeEach(() => {
        zone.request = (reqOpts, callback) => {
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

        zone.request = (reqOpts, callback) => {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getChanges({}, (err, changes, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Changes & API response', done => {
        const change = {};

        zone.change = id => {
          assert.strictEqual(id, apiResponse.changes[0].id);
          return change;
        };

        zone.getChanges({}, (err, changes, nextQuery, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(changes[0], change);
          assert.strictEqual(changes[0].metadata, apiResponse.changes[0]);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('getRecords', () => {
    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        zone.request = (reqOpts, callback) => {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        zone.getRecords({}, (err, changes, nextQuery, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a query', done => {
        zone.getRecords(err => {
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
        zone.request = (reqOpts, callback) => {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with nextQuery if necessary', done => {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken,
        });
        const expectedNextQuery = {pageToken: nextPageToken};

        zone.request = (reqOpts, callback) => {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getRecords({}, (err, records, nextQuery) => {
          assert.ifError(err);
          assert.deepStrictEqual(nextQuery, expectedNextQuery);
          done();
        });
      });

      it('should execute callback with Records & API response', done => {
        const record = {};

        zone.record = (type, recordObject) => {
          assert.strictEqual(type, apiResponse.rrsets[0].type);
          assert.strictEqual(recordObject, apiResponse.rrsets[0]);
          return record;
        };

        zone.getRecords({}, (err, records, nextQuery, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(records[0], record);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });

        it('should not require a query', done => {
          zone.getRecords(done);
        });
      });

      describe('filtering', () => {
        it('should accept a string type', done => {
          const types = ['MX', 'CNAME'];

          zone.getRecords(types, (err, records) => {
            assert.ifError(err);

            assert.strictEqual(records.length, 0);

            done();
          });
        });

        it('should accept an array of types', done => {
          const type = 'MX';

          zone.getRecords(type, (err, records) => {
            assert.ifError(err);

            assert.strictEqual(records.length, 0);

            done();
          });
        });

        it('should not send filterByTypes_ in API request', done => {
          zone.request = reqOpts => {
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
      readFileOverride = (path_, encoding) => {
        assert.strictEqual(path, path);
        assert.strictEqual(encoding, 'utf-8');
        done();
      };

      zone.import(path, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');

      beforeEach(() => {
        readFileOverride = (path, encoding, callback) => {
          callback(error);
        };
      });

      it('should execute the callback', done => {
        zone.import(path, err => {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('success', () => {
      const recordType = 'ns';
      // tslint:disable-next-line:no-any
      let parsedZonefile: any = {};

      beforeEach(() => {
        parsedZonefile = {
          [recordType]: {a: 'b', c: 'd'},
        };

        parseOverride = () => {
          return parsedZonefile;
        };

        readFileOverride = (path, encoding, callback) => {
          callback();
        };
      });

      it('should add records', done => {
        zone.addRecords = (recordsToCreate, callback) => {
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
        zone.addRecords = recordsToCreate => {
          const record1 = recordsToCreate[0].calledWith_[2];
          assert.strictEqual(record1.ttl, defaultTTL);
          const record2 = recordsToCreate[1].calledWith_[2];
          assert.strictEqual(record2.ttl, '180');
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
      zone.getRecords = recordType_ => {
        assert.strictEqual(recordType_, recordType);
        done();
      };
      zone.replaceRecords(recordType, [], assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      beforeEach(() => {
        zone.getRecords = (recordType, callback) => {
          callback(error);
        };
      });

      it('should execute callback with error', done => {
        zone.replaceRecords('a', [], err => {
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
        zone.getRecords = (recordType, callback) => {
          callback(null, recordsToDelete);
        };
      });

      it('should create a change', done => {
        zone.createChange = (options, callback) => {
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
      zone.getRecords = recordType_ => {
        assert.strictEqual(recordType_, recordType);
        done();
      };
      zone.deleteRecordsByType_(recordType, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      beforeEach(() => {
        zone.getRecords = (recordType, callback) => {
          callback(error);
        };
      });

      it('should execute callback with error', done => {
        zone.deleteRecordsByType_('a', err => {
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
        zone.getRecords = (recordType, callback) => {
          callback(null, recordsToDelete);
        };
      });

      it('should execute callback if no records matched', done => {
        zone.getRecords = (recordType, callback) => {
          callback(null, []);
        };

        zone.deleteRecordsByType_('a', done);
      });

      it('should delete records', done => {
        zone.deleteRecords = (records, callback) => {
          assert.strictEqual(records, recordsToDelete);
          callback();
        };
        zone.deleteRecordsByType_('a', done);
      });
    });
  });
});
