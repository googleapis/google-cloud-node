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

var arrify = require('arrify');
var assert = require('assert');
var extend = require('extend');
var mockery = require('mockery');
var util = require('../../lib/common/util.js');

var parseOverride;
var fakeDnsZonefile = {
  parse: function() {
    return (parseOverride || util.noop).apply(null, arguments);
  }
};

var writeFileOverride;
var readFileOverride;
var fakeFs = {
  readFile: function() {
    return (readFileOverride || util.noop).apply(null, arguments);
  },
  writeFile: function() {
    return (writeFileOverride || util.noop).apply(null, arguments);
  }
};

var extended = false;
var fakeStreamRouter = {
  extend: function(Class, methods) {
    if (Class.name !== 'Zone') {
      return;
    }

    extended = true;
    methods = arrify(methods);
    assert.equal(Class.name, 'Zone');
    assert.deepEqual(methods, ['getChanges', 'getRecords']);
  }
};

function FakeChange() {
  this.calledWith_ = arguments;
}

function FakeRecord() {
  this.calledWith_ = arguments;
}
FakeRecord.fromZoneRecord_ = function() {
  var record = new FakeRecord();
  record.calledWith_ = arguments;
  return record;
};

describe('Zone', function() {
  var Zone;
  var zone;

  var DNS = {
    makeReq_: function() {}
  };
  var ZONE_NAME = 'zone-name';

  before(function() {
    mockery.registerMock('dns-zonefile', fakeDnsZonefile);
    mockery.registerMock('fs', fakeFs);
    mockery.registerMock('../common/stream-router.js', fakeStreamRouter);
    mockery.registerMock('./change.js', FakeChange);
    mockery.registerMock('./record.js', FakeRecord);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Zone = require('../../lib/dns/zone.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    parseOverride = null;
    readFileOverride = null;
    writeFileOverride = null;
    zone = new Zone(DNS, ZONE_NAME);
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakeStreamRouter.extend`
    });

    it('should localize the DNS instance', function() {
      assert.strictEqual(zone.dns, DNS);
    });

    it('should localize the name', function() {
      assert.strictEqual(zone.name, ZONE_NAME);
    });

    it('should create a makeReq_ function', function(done) {
      var dns = {
        makeReq_: function() {
          assert.strictEqual(this, dns);
          done();
        }
      };

      var zone = new Zone(dns, ZONE_NAME);
      zone.makeReq_();
    });
  });

  describe('addRecords', function() {
    it('should create a change with additions', function(done) {
      var records = ['a', 'b', 'c'];

      zone.createChange = function(options, callback) {
        assert.strictEqual(options.add, records);
        callback();
      };

      zone.addRecords(records, done);
    });
  });

  describe('change', function() {
    it('should throw if an ID is not provided', function() {
      assert.throws(function() {
        zone.change();
      }, /A change id is required/);
    });

    it('should return a Change object', function() {
      var changeId = 'change-id';

      var change = zone.change(changeId);

      assert(change instanceof FakeChange);
      assert.strictEqual(change.calledWith_[0], zone);
      assert.strictEqual(change.calledWith_[1], changeId);
    });
  });

  describe('createChange', function() {
    it('should throw error if add or delete is not provided', function() {
      assert.throws(function() {
        zone.createChange({}, util.noop);
      }, /Cannot create a change with no additions or deletions/);
    });

    it('should parse and rename add to additions', function(done) {
      var recordsToAdd = [
        { toJSON: function() { return 'a'; } },
        { toJSON: function() { return 'a'; } }
      ];
      var expectedAdditions = ['a', 'a'];

      zone.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(body.add, undefined);
        assert.deepEqual(body.additions, expectedAdditions);
        done();
      };

      zone.createChange({ add: recordsToAdd }, assert.ifError);
    });

    it('should parse and rename delete to deletions', function(done) {
      var recordsToDelete = [
        { toJSON: function() { return 'a'; } },
        { toJSON: function() { return 'a'; } }
      ];
      var expectedDeletions = ['a', 'a'];

      zone.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(body.delete, undefined);
        assert.deepEqual(body.deletions, expectedDeletions);
        done();
      };

      zone.createChange({ delete: recordsToDelete }, assert.ifError);
    });

    it('should make correct API request', function(done) {
      zone.makeReq_ = function(method, path, query) {
        assert.strictEqual(method, 'POST');
        assert.strictEqual(path, '/managedZones/' + ZONE_NAME + '/changes');
        assert.strictEqual(query, null);
        done();
      };

      zone.createChange({ add: [] }, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        zone.createChange({ add: [] }, function(err, change, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { id: 1, a: 'b', c: 'd' };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Change & API response', function(done) {
        var change = {};

        zone.change = function(id) {
          assert.strictEqual(id, apiResponse.id);
          return change;
        };

        zone.createChange({ add: [] }, function(err, change_, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(change_, change);
          assert.strictEqual(change_.metadata, apiResponse);

          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });
  });

  describe('delete', function() {
    describe('force', function() {
      it('should empty the zone', function(done) {
        zone.empty = function() {
          done();
        };

        zone.delete({ force: true }, assert.ifError);
      });

      it('should try to delete again after emptying', function(done) {
        zone.makeReq_ = function() {
          done();
        };

        zone.empty = function(callback) {
          callback();
        };

        zone.delete({ force: true }, assert.ifError);
      });
    });

    it('should make the correct API request', function(done) {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };
      var ignoreThisArgument = { e: 'f', g: 'h' };

      zone.makeReq_ = function(method, path, query, body, callback) {
        assert.strictEqual(method, 'DELETE');
        assert.strictEqual(path, '/managedZones/' + ZONE_NAME);
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);
        callback(error, apiResponse, ignoreThisArgument);
      };

      zone.delete(function(err, apiResponse_) {
        assert.strictEqual(arguments.length, 2);
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });
  });

  describe('deleteRecords', function() {
    it('should delete records by type if a string is given', function(done) {
      var recordsToDelete = 'ns';

      zone.deleteRecordsByType_ = function(types, callback) {
        assert.deepEqual(types, [recordsToDelete]);
        callback();
      };

      zone.deleteRecords(recordsToDelete, done);
    });

    it('should create a change if record objects given', function(done) {
      var recordsToDelete = { a: 'b', c: 'd' };

      zone.createChange = function(options, callback) {
        assert.deepEqual(options.delete, [recordsToDelete]);
        callback();
      };

      zone.deleteRecords(recordsToDelete, done);
    });
  });

  describe('empty', function() {
    it('should get all records', function(done) {
      zone.getRecords = function() {
        done();
      };

      zone.empty(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');

      beforeEach(function() {
        zone.getRecords = function(callback) {
          callback(error);
        };
      });

      it('should execute callback with error', function(done) {
        zone.empty(function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('success', function() {
      var records = [
        { type: 'A' },
        { type: 'AAAA' },
        { type: 'CNAME' },
        { type: 'MX' },
        { type: 'NAPTR' },
        { type: 'NS' },
        { type: 'PTR' },
        { type: 'SOA' },
        { type: 'SPF' },
        { type: 'SRV' },
        { type: 'TXT' }
      ];

      var expectedRecordsToDelete = records.filter(function(record) {
        return record.type !== 'NS' && record.type !== 'SOA';
      });

      beforeEach(function() {
        zone.getRecords = function(callback) {
          callback(null, records);
        };
      });

      it('should execute callback if no records matched', function(done) {
        zone.getRecords = function(callback) {
          callback(null, []);
        };

        zone.empty(done);
      });

      it('should delete non-NS and non-SOA records', function(done) {
        zone.deleteRecords = function(recordsToDelete, callback) {
          assert.deepEqual(recordsToDelete, expectedRecordsToDelete);
          callback();
        };

        zone.empty(done);
      });
    });
  });

  describe('export', function() {
    var path = './zonefile';

    var records = [
      { toString: function() { return 'a'; } },
      { toString: function() { return 'a'; } },
      { toString: function() { return 'a'; } },
      { toString: function() { return 'a'; } },
    ];

    var expectedZonefileContents = 'a\na\na\na';

    beforeEach(function() {
      zone.getRecords = function(callback) {
        callback(null, records);
      };
    });

    describe('get records', function() {
      describe('error', function() {
        var error = new Error('Error.');

        it('should execute callback with error', function(done) {
          zone.getRecords = function(callback) {
            callback(error);
          };

          zone.export(path, function(err) {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('success', function() {
        it('should get all records', function(done) {
          zone.getRecords = function() {
            done();
          };

          zone.export(path, assert.ifError);
        });
      });
    });

    describe('write file', function() {
      it('should write correct zone file', function(done) {
        writeFileOverride = function(path_, content, encoding) {
          assert.strictEqual(path_, path);
          assert.strictEqual(content, expectedZonefileContents);
          assert.strictEqual(encoding, 'utf-8');

          done();
        };

        zone.export(path, assert.ifError);
      });

      describe('error', function() {
        var error = new Error('Error.');

        beforeEach(function() {
          writeFileOverride = function(path, content, encoding, callback) {
            callback(error);
          };
        });

        it('should execute the callback with an error', function(done) {
          zone.export(path, function(err) {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('success', function() {
        beforeEach(function() {
          writeFileOverride = function(path, content, encoding, callback) {
            callback();
          };
        });

        it('should execute the callback', function(done) {
          zone.export(path, function(err) {
            assert.ifError(err);
            done();
          });
        });
      });
    });
  });

  describe('getChanges', function() {
    it('should accept only a callback', function(done) {
      zone.makeReq_ = function(method, path, query) {
        assert.strictEqual(Object.keys(query).length, 0);
        done();
      };

      zone.getChanges(assert.ifError);
    });

    it('should accept a sort', function(done) {
      var query = { sort: 'desc' };

      zone.makeReq_ = function(method, path, query) {
        assert.strictEqual(query.sortOrder, 'descending');
        assert.strictEqual(query.sort, undefined);

        done();
      };

      zone.getChanges(query, assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var query = { a: 'b', c: 'd' };

      zone.makeReq_ = function(method, path, query_, body) {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(path, '/managedZones/' + ZONE_NAME + '/changes');
        assert.strictEqual(query_, query);
        assert.strictEqual(body, null);

        done();
      };

      zone.getChanges(query, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        zone.getChanges({}, function(err, changes, nextQuery, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        changes: [{ id: 1 }]
      };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken
        });
        var expectedNextQuery = {
          pageToken: nextPageToken
        };

        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getChanges({}, function(err, changes, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Changes & API response', function(done) {
        var change = {};

        zone.change = function(id) {
          assert.strictEqual(id, apiResponse.changes[0].id);
          return change;
        };

        zone.getChanges({}, function(err, changes, nextQuery, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(changes[0], change);
          assert.strictEqual(changes[0].metadata, apiResponse.changes[0]);

          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });
  });

  describe('getMetadata', function() {
    it('should make the correct API request', function(done) {
      zone.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(path, '/managedZones/' + ZONE_NAME);
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        done();
      };

      zone.getMetadata(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error and API response', function(done) {
        zone.getMetadata(function(err, metadata, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should update the metadata to the API response', function(done) {
        zone.getMetadata(function(err) {
          assert.ifError(err);
          assert.strictEqual(zone.metadata, apiResponse);
          done();
        });
      });

      it('should exec callback with metadata and API response', function(done) {
        zone.getMetadata(function(err, metadata, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('getRecords', function() {
    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        zone.getRecords({}, function(err, changes, nextQuery, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        rrsets: [{ type: 'NS' }]
      };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken
        });
        var expectedNextQuery = { pageToken: nextPageToken };

        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getRecords({}, function(err, records, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Records & API response', function(done) {
        var record = {};

        zone.record = function(type, recordObject) {
          assert.strictEqual(type, apiResponse.rrsets[0].type);
          assert.strictEqual(recordObject, apiResponse.rrsets[0]);
          return record;
        };

        zone.getRecords({}, function(err, records, nextQuery, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(records[0], record);

          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });

      describe('filtering', function() {
        it('should accept a string type', function(done) {
          var types = ['MX', 'CNAME'];

          zone.getRecords(types, function(err, records) {
            assert.ifError(err);

            assert.strictEqual(records.length, 0);

            done();
          });
        });

        it('should accept an array of types', function(done) {
          var type = 'MX';

          zone.getRecords(type, function(err, records) {
            assert.ifError(err);

            assert.strictEqual(records.length, 0);

            done();
          });
        });

        it('should not send filterByTypes_ in API request', function(done) {
          zone.makeReq_ = function(method, path, query) {
            assert.strictEqual(query.filterByTypes_, undefined);
            done();
          };

          zone.getRecords('NS', assert.ifError);
        });
      });
    });
  });

  describe('import', function() {
    var path = './zonefile';

    it('should read from the file', function(done) {
      readFileOverride = function(path_, encoding) {
        assert.strictEqual(path, path);
        assert.strictEqual(encoding, 'utf-8');
        done();
      };

      zone.import(path, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');

      beforeEach(function() {
        readFileOverride = function(path, encoding, callback) {
          callback(error);
        };
      });

      it('should execute the callback', function(done) {
        zone.import(path, function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('success', function() {
      var recordType = 'ns';
      var parsedZonefile = {};
      parsedZonefile[recordType] = { a: 'b', c: 'd' };

      beforeEach(function() {
        parseOverride = function() {
          return parsedZonefile;
        };

        readFileOverride = function(path, encoding, callback) {
          callback();
        };
      });

      it('should add records', function(done) {
        zone.addRecords = function(recordsToCreate, callback) {
          assert.strictEqual(recordsToCreate.length, 1);

          var recordToCreate = recordsToCreate[0];

          assert(recordToCreate instanceof FakeRecord);

          var args = recordToCreate.calledWith_;
          assert.strictEqual(args[0], zone);
          assert.strictEqual(args[1], recordType);
          assert.strictEqual(args[2], parsedZonefile[recordType]);

          callback();
        };

        zone.import(path, done);
      });
    });
  });

  describe('record', function() {
    it('should return a Record object', function() {
      var type = 'a';
      var metadata = { a: 'b', c: 'd' };

      var record = zone.record(type, metadata);

      assert(record instanceof FakeRecord);

      var args = record.calledWith_;
      assert.strictEqual(args[0], zone);
      assert.strictEqual(args[1], type);
      assert.strictEqual(args[2], metadata);
    });
  });

  describe('replaceRecords', function() {
    it('should get records', function(done) {
      var recordType = 'ns';

      zone.getRecords = function(recordType_) {
        assert.strictEqual(recordType_, recordType);
        done();
      };

      zone.replaceRecords(recordType, [], assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');

      beforeEach(function() {
        zone.getRecords = function(recordType, callback) {
          callback(error);
        };
      });

      it('should execute callback with error', function(done) {
        zone.replaceRecords('a', [], function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('success', function() {
      var recordsToCreate = [
        { a: 'b', c: 'd' },
        { a: 'b', c: 'd' },
        { a: 'b', c: 'd' }
      ];

      var recordsToDelete = [
        { a: 'b', c: 'd' },
        { a: 'b', c: 'd' },
        { a: 'b', c: 'd' }
      ];

      beforeEach(function() {
        zone.getRecords = function(recordType, callback) {
          callback(null, recordsToDelete);
        };
      });

      it('should create a change', function(done) {
        zone.createChange = function(options, callback) {
          assert.strictEqual(options.add, recordsToCreate);
          assert.strictEqual(options.delete, recordsToDelete);

          callback();
        };

        zone.replaceRecords('a', recordsToCreate, done);
      });
    });
  });

  describe('deleteRecordsByType_', function() {
    it('should get records', function(done) {
      var recordType = 'ns';

      zone.getRecords = function(recordType_) {
        assert.strictEqual(recordType_, recordType);
        done();
      };

      zone.deleteRecordsByType_(recordType, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');

      beforeEach(function() {
        zone.getRecords = function(recordType, callback) {
          callback(error);
        };
      });

      it('should execute callback with error', function(done) {
        zone.deleteRecordsByType_('a', function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('success', function() {
      var recordsToDelete = [
        { a: 'b', c: 'd' },
        { a: 'b', c: 'd' },
        { a: 'b', c: 'd' }
      ];

      beforeEach(function() {
        zone.getRecords = function(recordType, callback) {
          callback(null, recordsToDelete);
        };
      });

      it('should execute callback if no records matched', function(done) {
        zone.getRecords = function(recordType, callback) {
          callback(null, []);
        };

        zone.deleteRecordsByType_('a', done);
      });

      it('should delete records', function(done) {
        zone.deleteRecords = function(records, callback) {
          assert.strictEqual(records, recordsToDelete);

          callback();
        };

        zone.deleteRecordsByType_('a', done);
      });
    });
  });
});
