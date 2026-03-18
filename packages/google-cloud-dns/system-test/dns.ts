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

import * as assert from 'assert';
import {describe, it, before, after} from 'mocha';
import * as fs from 'fs';
import * as tmp from 'tmp';
import * as util from 'util';
import * as uuid from 'uuid';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const format = require('string-format-obj');

import {DNS, Record} from '../src';
import {Metadata} from '@google-cloud/common';

const dns = new DNS();
const DNS_DOMAIN = process.env.GCLOUD_TESTS_DNS_DOMAIN || 'gitnpm.com.';

const delayMs = async (ms = 1000) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

// Only run the tests if there is a domain to test with.
describe('dns', () => {
  const ZONE_NAME = 'test-zone-' + uuid.v4().substr(0, 18);
  const ZONE = dns.zone(ZONE_NAME);

  const records = {
    a: ZONE.record('a', {
      ttl: 86400,
      name: DNS_DOMAIN,
      data: '1.2.3.4',
    }),

    aaaa: ZONE.record('aaaa', {
      ttl: 86400,
      name: DNS_DOMAIN,
      data: '2607:f8b0:400a:801::1005',
    }),

    cname: ZONE.record('cname', {
      ttl: 86400,
      name: 'mail.' + DNS_DOMAIN,
      data: 'example.com.',
    }),

    mx: ZONE.record('mx', {
      ttl: 86400,
      name: DNS_DOMAIN,
      data: ['10 mail.' + DNS_DOMAIN, '20 mail2.' + DNS_DOMAIN],
    }),

    naptr: ZONE.record('naptr', {
      ttl: 300,
      name: '2.1.2.1.5.5.5.0.7.7.1.e164.arpa.',
      data: [
        '100 10 "u" "sip+E2U" "!^.*$!sip:information@foo.se!i" .',
        '102 10 "u" "smtp+E2U" "!^.*$!mailto:information@foo.se!i" .',
      ],
    }),

    ns: ZONE.record('ns', {
      ttl: 86400,
      name: DNS_DOMAIN,
      data: 'ns-cloud1.googledomains.com.',
    }),

    ptr: ZONE.record('ptr', {
      ttl: 60,
      name: '2.1.0.10.in-addr.arpa.',
      data: 'server.' + DNS_DOMAIN,
    }),

    soa: ZONE.record('soa', {
      ttl: 21600,
      name: DNS_DOMAIN,
      data: [
        'ns-cloud1.googledomains.com.',
        'dns-admin.google.com.',
        '1 21600 3600 1209600 300',
      ].join(' '),
    }),

    spf: ZONE.record('spf', {
      ttl: 21600,
      name: DNS_DOMAIN,
      data: 'v=spf1 mx:' + DNS_DOMAIN.replace(/.$/, '') + ' -all',
    }),

    srv: ZONE.record('srv', {
      ttl: 21600,
      name: 'sip.' + DNS_DOMAIN,
      data: '0 5 5060 sip.' + DNS_DOMAIN,
    }),

    txt: ZONE.record('txt', {
      ttl: 21600,
      name: DNS_DOMAIN,
      data: 'google-site-verification=xxxxxxxxxxxxYYYYYYXXX',
    }),
  };

  before(async () => {
    // Clean up any leaked resources
    const [zones] = await dns.getZones();
    await Promise.all(
      zones.map(async zone => {
        const hoursOld =
          (Date.now() - new Date(zone.metadata.creationTime).getTime()) /
          1000 /
          60 /
          60;
        if (hoursOld > 1) {
          await zone.delete({force: true});
        }
      })
    );
    await ZONE.create({
      dnsName: DNS_DOMAIN,
      dnssecConfig: {
        state: 'on',
      },
    });
  });

  after(done => {
    ZONE.delete({force: true}, done);
  });

  // deal with eventual consistency of ZONE.create():
  it('should return 0 or more zones', async function () {
    this.retries(3);
    await delayMs(1000);
    const zones = await dns.getZones();
    assert(zones!.length >= 0);
  });

  describe('Zones', () => {
    it('should get the metadata for a zone', done => {
      ZONE.getMetadata((err: Error, metadata: Metadata) => {
        assert.ifError(err);
        assert.strictEqual(metadata.name, ZONE_NAME);
        done();
      });
    });

    it('should support all types of records', done => {
      const recordsToCreate = [
        records.a,
        records.aaaa,
        records.cname,
        records.mx,
        // records.naptr,
        records.ns,
        // records.ptr,
        records.soa,
        records.spf,
        records.srv,
        records.txt,
      ];

      ZONE.replaceRecords(['ns', 'soa'], recordsToCreate, done);
    });

    it('should import records from a zone file', done => {
      const zoneFilename = require.resolve(
        '../../system-test/data/zonefile.zone'
      );
      let zoneFileTemplate = fs.readFileSync(zoneFilename, 'utf-8');
      zoneFileTemplate = format(zoneFileTemplate, {
        DNS_DOMAIN,
      });

      tmp.setGracefulCleanup();
      tmp.file((err, tmpFilePath) => {
        assert.ifError(err);
        fs.writeFileSync(tmpFilePath, zoneFileTemplate, 'utf-8');
        ZONE.empty(err => {
          assert.ifError(err);
          ZONE.import(tmpFilePath, err => {
            assert.ifError(err);

            ZONE.getRecords(['spf', 'txt'], (err, records) => {
              assert.ifError(err);

              const spfRecord = records!.filter(record => {
                return record.type === 'SPF';
              })[0];

              assert.strictEqual(
                spfRecord.toJSON().rrdatas![0],
                '"v=spf1" "mx:' + DNS_DOMAIN + '" "-all"'
              );

              const txtRecord = records!.filter(record => {
                return record.type === 'TXT';
              })[0];

              assert.strictEqual(
                txtRecord.toJSON().rrdatas![0],
                '"google-site-verification=xxxxxxxxxxxxYYYYYYXXX"'
              );

              done();
            });
          });
        });
      });
    });

    it('should export records to a zone file', async () => {
      tmp.setGracefulCleanup();
      const tmpFile: Function = util.promisify(tmp.file);
      const tmpFilename = await tmpFile();
      await ZONE.empty();
      await ZONE.addRecords([records.spf, records.srv]);
      await ZONE.export(tmpFilename);
    });

    describe('changes', () => {
      it('should create a change', done => {
        const record = ZONE.record('srv', {
          ttl: 3600,
          name: DNS_DOMAIN,
          data: '10 0 5222 127.0.0.1.',
          signatureRrdatas: [],
        });
        const change = ZONE.change();
        change.create({add: record}, err => {
          assert.ifError(err);
          const addition = change.metadata.additions[0];
          delete addition.kind;
          assert.deepStrictEqual(addition, record.toJSON());
          done();
        });
      });

      it('should get a list of changes', done => {
        ZONE.getChanges((err, changes) => {
          assert.ifError(err);
          assert(changes!.length >= 0);
          done();
        });
      });

      it('should get metadata', done => {
        ZONE.getChanges((err, changes) => {
          assert.ifError(err);
          const change = changes![0];
          const expectedMetadata = change.metadata;
          change.getMetadata((err: Error, metadata: Metadata) => {
            assert.ifError(err);
            delete metadata.status;
            delete expectedMetadata.status;
            assert.deepStrictEqual(metadata, expectedMetadata);
            done();
          });
        });
      });
    });
  });

  describe('Records', () => {
    it('should return 0 or more records', done => {
      ZONE.getRecords((err, records) => {
        assert.ifError(err);
        assert(records!.length >= 0);
        done();
      });
    });

    it('should cursor through records by type', done => {
      const newRecords = [
        ZONE.record('cname', {
          ttl: 86400,
          name: '1.' + DNS_DOMAIN,
          data: DNS_DOMAIN,
        }),
        ZONE.record('cname', {
          ttl: 86400,
          name: '2.' + DNS_DOMAIN,
          data: DNS_DOMAIN,
        }),
      ];

      ZONE.replaceRecords('cname', newRecords, err => {
        assert.ifError(err);
        const onRecordsReceived = (
          err?: Error | null,
          records?: Record[] | null,
          nextQuery?: {} | null
        ) => {
          if (nextQuery) {
            ZONE.getRecords(nextQuery, onRecordsReceived);
            return;
          }
          ZONE.deleteRecords(newRecords, done);
        };
        ZONE.getRecords(
          {
            type: 'cname',
            maxResults: 2,
          },
          onRecordsReceived
        );
      });
    });

    it('should replace records', async () => {
      const name = 'test-zone-' + uuid.v4().substr(0, 18);
      // Do this in a new zone so no existing records are affected.
      const [zone] = await dns.createZone(name, {
        dnsName: DNS_DOMAIN,
        dnssecConfig: {
          state: 'on',
        },
      });
      const [originalRecords] = await zone.getRecords('ns');
      const originalData = originalRecords[0].data;
      const newRecord = zone.record('ns', {
        ttl: 3600,
        name: DNS_DOMAIN,
        data: ['ns1.nameserver.net.', 'ns2.nameserver.net.'],
      });
      const [change] = await zone.replaceRecords('ns', newRecord);
      const deleted = change.metadata.deletions[0].rrdatas;
      const added = change.metadata.additions[0].rrdatas;
      assert.deepStrictEqual(deleted, originalData);
      assert.deepStrictEqual(added, newRecord.data);
      await zone.delete({force: true});
    });
  });
});
