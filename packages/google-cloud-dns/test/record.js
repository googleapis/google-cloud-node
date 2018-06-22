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

const assert = require('assert');
const extend = require('extend');
const proxyquire = require('proxyquire');
const util = require('@google-cloud/common').util;

let promisified = false;
const fakeUtil = extend({}, util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Record') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['toJSON', 'toString']);
  },
});

describe('Record', function() {
  let Record;
  let record;

  const ZONE = {
    deleteRecords: util.noop,
  };
  const TYPE = 'A';
  const METADATA = {
    name: 'name',
    data: [],
    ttl: 86400,
  };

  before(function() {
    Record = proxyquire('../src/record.js', {
      '@google-cloud/common': {
        util: fakeUtil,
      },
    });
  });

  beforeEach(function() {
    record = new Record(ZONE, TYPE, METADATA);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the zone instance', function() {
      assert.strictEqual(record.zone_, ZONE);
    });

    it('should localize the type', function() {
      assert.strictEqual(record.type, TYPE);
    });

    it('should localize the metadata', function() {
      assert.strictEqual(record.metadata, METADATA);
    });

    it('should assign the parsed metadata', function() {
      const parsedMetadata = record.toJSON();
      delete parsedMetadata.rrdatas;

      for (const prop in parsedMetadata) {
        assert.strictEqual(record[prop], parsedMetadata[prop]);
      }
    });

    it('should re-assign rrdatas to data', function() {
      const originalRrdatas = [];

      const recordThatHadRrdatas = new Record(ZONE, TYPE, {
        rrdatas: originalRrdatas,
      });

      assert.strictEqual(recordThatHadRrdatas.rrdatas, undefined);
      assert.strictEqual(recordThatHadRrdatas.data, originalRrdatas);
    });
  });

  describe('fromZoneRecord_', function() {
    describe('a', function() {
      const aRecord = {
        ip: '0.0.0.0',
        name: 'name',
        ttl: 86400,
      };

      const expectedData = aRecord.ip;

      it('should parse an A record', function() {
        const record = Record.fromZoneRecord_(ZONE, 'a', aRecord);

        assert.strictEqual(record.type, 'A');
        assert.deepEqual(record.metadata.data, expectedData);
        assert.strictEqual(record.metadata.name, aRecord.name);
        assert.strictEqual(record.metadata.ttl, aRecord.ttl);
      });
    });

    describe('aaaa', function() {
      const aaaaRecord = {
        ip: '2607:f8b0:400a:801::1005',
        name: 'name',
        ttl: 86400,
      };

      const expectedData = aaaaRecord.ip;

      it('should parse an AAAA record', function() {
        const record = Record.fromZoneRecord_(ZONE, 'aaaa', aaaaRecord);

        assert.strictEqual(record.type, 'AAAA');
        assert.strictEqual(record.metadata.data, expectedData);
        assert.strictEqual(record.metadata.name, aaaaRecord.name);
        assert.strictEqual(record.metadata.ttl, aaaaRecord.ttl);
      });
    });

    describe('cname', function() {
      const cnameRecord = {
        alias: 'example.com.',
        name: 'name',
        ttl: 86400,
      };

      const expectedData = cnameRecord.alias;

      it('should parse a CNAME record', function() {
        const record = Record.fromZoneRecord_(ZONE, 'cname', cnameRecord);

        assert.strictEqual(record.type, 'CNAME');
        assert.strictEqual(record.metadata.data, expectedData);
        assert.strictEqual(record.metadata.name, cnameRecord.name);
        assert.strictEqual(record.metadata.ttl, cnameRecord.ttl);
      });
    });

    describe('mx', function() {
      const mxRecord = {
        preference: 0,
        host: 'mail',
        name: 'name',
        ttl: 86400,
      };

      const expectedData = mxRecord.preference + ' ' + mxRecord.host;

      it('should parse an MX record', function() {
        const record = Record.fromZoneRecord_(ZONE, 'mx', mxRecord);

        assert.strictEqual(record.type, 'MX');
        assert.strictEqual(record.metadata.data, expectedData);
        assert.strictEqual(record.metadata.name, mxRecord.name);
        assert.strictEqual(record.metadata.ttl, mxRecord.ttl);
      });
    });

    describe('ns', function() {
      const nsRecord = {
        host: 'example.com',
        name: 'name',
        ttl: 86400,
      };

      const expectedData = nsRecord.host;

      it('should parse an NS record', function() {
        const record = Record.fromZoneRecord_(ZONE, 'ns', nsRecord);

        assert.strictEqual(record.type, 'NS');
        assert.strictEqual(record.metadata.data, expectedData);
        assert.strictEqual(record.metadata.name, nsRecord.name);
        assert.strictEqual(record.metadata.ttl, nsRecord.ttl);
      });
    });

    describe('soa', function() {
      const soaRecord = {
        mname: 'ns1.nameserver.net.',
        rname: 'hostmaster.mydomain.com.',
        serial: 86400,
        retry: 600,
        refresh: 3600,
        expire: 604800,
        minimum: 86400,
        name: 'name',
        ttl: 86400,
      };

      const expectedData = [
        soaRecord.mname,
        soaRecord.rname,
        soaRecord.serial,
        soaRecord.retry,
        soaRecord.refresh,
        soaRecord.expire,
        soaRecord.minimum,
      ].join(' ');

      it('should parse an SOA record', function() {
        const record = Record.fromZoneRecord_(ZONE, 'soa', soaRecord);

        assert.strictEqual(record.type, 'SOA');
        assert.strictEqual(record.metadata.data, expectedData);
        assert.strictEqual(record.metadata.name, soaRecord.name);
        assert.strictEqual(record.metadata.ttl, soaRecord.ttl);
      });
    });

    describe('spf', function() {
      const spfRecord = {
        data: '"v=spf1" "mx:example.com"',
        name: 'name',
        ttl: 86400,
      };

      const expectedData = spfRecord.data;

      it('should parse an SPF record', function() {
        const record = Record.fromZoneRecord_(ZONE, 'spf', spfRecord);

        assert.strictEqual(record.type, 'SPF');
        assert.strictEqual(record.metadata.data, expectedData);
        assert.strictEqual(record.metadata.name, spfRecord.name);
        assert.strictEqual(record.metadata.ttl, spfRecord.ttl);
      });
    });

    describe('srv', function() {
      const srvRecord = {
        priority: 10,
        weight: 0,
        port: 5222,
        target: 'jabber',
        name: 'name',
        ttl: 86400,
      };

      const expectedData = [
        srvRecord.priority,
        srvRecord.weight,
        srvRecord.port,
        srvRecord.target,
      ].join(' ');

      it('should parse an SRV record', function() {
        const record = Record.fromZoneRecord_(ZONE, 'srv', srvRecord);

        assert.strictEqual(record.type, 'SRV');
        assert.strictEqual(record.metadata.data, expectedData);
        assert.strictEqual(record.metadata.name, srvRecord.name);
        assert.strictEqual(record.metadata.ttl, srvRecord.ttl);
      });
    });

    describe('txt', function() {
      const txtRecord = {
        txt: 'txt-record-txt',
        name: 'name',
        ttl: 86400,
      };

      const expectedData = txtRecord.txt;

      it('should parse a TXT record', function() {
        const record = Record.fromZoneRecord_(ZONE, 'txt', txtRecord);

        assert.strictEqual(record.type, 'TXT');
        assert.strictEqual(record.metadata.data, expectedData);
        assert.strictEqual(record.metadata.name, txtRecord.name);
        assert.strictEqual(record.metadata.ttl, txtRecord.ttl);
      });
    });
  });

  describe('delete', function() {
    it('should call zone.deleteRecords', function(done) {
      record.zone_.deleteRecords = function(records, callback) {
        assert.strictEqual(records, record);
        callback();
      };

      record.delete(done);
    });
  });

  describe('toJSON', function() {
    it('should format the data for the API', function() {
      const expectedRecord = extend({}, METADATA, {
        type: 'A',
        rrdatas: METADATA.data,
      });
      delete expectedRecord.data;

      assert.deepEqual(record.toJSON(), expectedRecord);
    });
  });

  describe('toString', function() {
    it('should format the data for a zonefile', function() {
      const jsonRecord = extend({}, METADATA, {
        type: TYPE,
        rrdatas: ['example.com.', 'example2.com.'],
      });

      record.toJSON = function() {
        return jsonRecord;
      };

      const expectedRecordString = [
        [
          jsonRecord.name,
          jsonRecord.ttl,
          'IN',
          TYPE,
          jsonRecord.rrdatas[0],
        ].join(' '),

        [
          jsonRecord.name,
          jsonRecord.ttl,
          'IN',
          TYPE,
          jsonRecord.rrdatas[1],
        ].join(' '),
      ].join('\n');

      // That's a bunch of silliness, but it generates simply:
      // name 86400 IN A example.com.
      // name 86400 IN A example2.com.

      assert.strictEqual(record.toString(), expectedRecordString);
    });
  });
});
