/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var assert = require('assert');
var async = require('async');
var exec = require('methmeth');
var format = require('string-format-obj');
var fs = require('fs');
var tmp = require('tmp');
var uuid = require('node-uuid');

var env = require('./env.js');
var DNS = require('../lib/dns');

var dns = new DNS(env);
var DNS_DOMAIN = process.env.GCLOUD_TESTS_DNS_DOMAIN;

// Only run the tests if there is a domain to test with.
(DNS_DOMAIN ? describe : describe.skip)('dns', function() {
  var ZONE;
  var ZONENAME = 'test-zone-' + uuid.v4().substr(0, 18);

  var records = {};

  function createRecords() {
    records.a = ZONE.record('a', {
      ttl: 86400,
      name: DNS_DOMAIN,
      data: '1.2.3.4'
    });

    records.aaaa = ZONE.record('aaaa', {
      ttl: 86400,
      name: DNS_DOMAIN,
      data: '2607:f8b0:400a:801::1005'
    });

    records.cname = ZONE.record('cname', {
      ttl: 86400,
      name: 'mail.' + DNS_DOMAIN,
      data: 'example.com.'
    });

    records.mx = ZONE.record('mx', {
      ttl: 86400,
      name: DNS_DOMAIN,
      data: [
        '10 mail.' + DNS_DOMAIN,
        '20 mail2.' + DNS_DOMAIN
      ]
    });

    records.naptr = ZONE.record('naptr', {
      ttl: 300,
      name: '2.1.2.1.5.5.5.0.7.7.1.e164.arpa.',
      data: [
        '100 10 \"u\" \"sip+E2U\" \"!^.*$!sip:information@foo.se!i\" .',
        '102 10 \"u\" \"smtp+E2U\" \"!^.*$!mailto:information@foo.se!i\" .'
      ]
    });

    records.ns = ZONE.record('ns', {
      ttl: 86400,
      name: DNS_DOMAIN,
      data: 'ns-cloud1.googledomains.com.'
    });

    records.ptr = ZONE.record('ptr', {
      ttl: 60,
      name: '2.1.0.10.in-addr.arpa.',
      data: 'server.' + DNS_DOMAIN
    });

    records.soa = ZONE.record('soa', {
      ttl: 21600,
      name: DNS_DOMAIN,
      data: [
        'ns-cloud1.googledomains.com.',
        'dns-admin.google.com.',
        '1 21600 3600 1209600 300'
      ].join(' ')
    });

    records.spf = ZONE.record('spf', {
      ttl: 21600,
      name: DNS_DOMAIN,
      data: 'v=spf1 mx:' + DNS_DOMAIN.replace(/.$/, '') + ' -all'
    });

    records.srv = ZONE.record('srv', {
      ttl: 21600,
      name: 'sip.' + DNS_DOMAIN,
      data: '0 5 5060 sip.' + DNS_DOMAIN
    });

    records.txt = ZONE.record('txt', {
      ttl: 21600,
      name: DNS_DOMAIN,
      data: 'google-site-verification=xxxxxxxxxxxxYYYYYYXXX'
    });
  }

  before(function(done) {
    dns.getZones(function(err, zones) {
      if (err) {
        done(err);
        return;
      }

      async.each(zones, exec('delete', { force: true }), function(err) {
        if (err) {
          done(err);
          return;
        }

        dns.createZone(ZONENAME, { dnsName: DNS_DOMAIN }, function(err, zone) {
          assert.ifError(err);
          ZONE = zone;
          createRecords();
          done();
        });
      });
    });
  });

  after(function(done) {
    ZONE.delete({ force: true }, done);
  });

  it('should create a zone', function(done) {
    var tempName = 'test-zone-' + uuid.v4().substr(0, 18);

    dns.createZone(tempName, { dnsName: DNS_DOMAIN }, function(err, zone) {
      assert.ifError(err);
      assert.equal(zone.name, tempName);
      zone.delete(done);
    });
  });

  it('should return 0 or more zones', function(done) {
    dns.getZones(function(err, zones) {
      assert.ifError(err);
      assert(zones.length >= 0);
      done();
    });
  });

  describe('Zones', function() {
    it('should get the metadata for a zone', function(done) {
      ZONE.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.equal(metadata.name, ZONENAME);
        done();
      });
    });

    it('should delete a zone', function(done) {
      var name = 'test-zone-' + uuid.v4().substr(0, 18);

      dns.createZone(name, { dnsName: DNS_DOMAIN }, function(err, zone) {
        assert.ifError(err);
        zone.delete(done);
      });
    });

    it('should support all types of records', function(done) {
      var recordsToCreate = [
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
        records.txt
      ];

      ZONE.replaceRecords(['ns', 'soa'], recordsToCreate, done);
    });

    it('should import records from a zone file', function(done) {
      var zoneFilename = require.resolve('./data/zonefile.zone');
      var zoneFileTemplate = fs.readFileSync(zoneFilename, 'utf-8');
      zoneFileTemplate = format(zoneFileTemplate, {
        DNS_DOMAIN: DNS_DOMAIN
      });

      tmp.setGracefulCleanup();
      tmp.file(function _tempFileCreated(err, tmpFilePath) {
        assert.ifError(err);

        fs.writeFileSync(tmpFilePath, zoneFileTemplate, 'utf-8');

        ZONE.empty(function(err) {
          assert.ifError(err);

          ZONE.import(tmpFilePath, function(err) {
            assert.ifError(err);

            ZONE.getRecords(['spf', 'txt'], function(err, records) {
              assert.ifError(err);

              var spfRecord = records.filter(function(record) {
                return record.type === 'SPF';
              })[0];

              assert.strictEqual(
                spfRecord.toJSON().rrdatas[0],
                '"v=spf1" "mx:' + DNS_DOMAIN + '" "-all"'
              );

              var txtRecord = records.filter(function(record) {
                return record.type === 'TXT';
              })[0];

              assert.strictEqual(
                txtRecord.toJSON().rrdatas[0],
                '"google-site-verification=xxxxxxxxxxxxYYYYYYXXX"'
              );

              done();
            });
          });
        });
      });
    });

    it('should export records to a zone file', function(done) {
      tmp.setGracefulCleanup();
      tmp.file(function tempFileCreated(err, tmpFilename) {
        assert.ifError(err);

        async.series([
            function(next) {
              ZONE.empty(next);
            },

            function(next) {
              var recordsToCreate = [
                records.spf,
                records.srv
              ];

              ZONE.addRecords(recordsToCreate, next);
            },

            function(next) {
              ZONE.export(tmpFilename, next);
            }
          ], done);
      });
    });

    describe('changes', function() {
      it('should create a change', function(done) {
        var record = ZONE.record('srv', {
          ttl: 3600,
          name: DNS_DOMAIN,
          data: '10 0 5222 127.0.0.1.'
        });

        ZONE.createChange({ add: record }, function(err, change) {
          assert.ifError(err);

          var addition = change.metadata.additions[0];
          delete addition.kind;
          assert.deepEqual(addition, record.toJSON());

          done();
        });
      });

      it('should get a list of changes', function(done) {
        ZONE.getChanges(function(err, changes) {
          assert.ifError(err);
          assert(changes.length >= 0);
          done();
        });
      });

      it('should get metadata', function(done) {
        ZONE.getChanges(function(err, changes) {
          assert.ifError(err);

          var change = changes[0];
          var expectedMetadata = change.metadata;

          change.getMetadata(function(err, metadata) {
            assert.ifError(err);

            delete metadata.status;
            delete expectedMetadata.status;
            assert.deepEqual(metadata, expectedMetadata);

            done();
          });
        });
      });
    });
  });

  describe('Records', function() {
    it('should return 0 or more records', function(done) {
      ZONE.getRecords(function(err, records) {
        assert.ifError(err);
        assert(records.length >= 0);
        done();
      });
    });

    it('should cursor through records by type', function(done) {
      var newRecords = [
        ZONE.record('cname', {
          ttl: 86400,
          name: '1.' + DNS_DOMAIN,
          data: DNS_DOMAIN
        }),
        ZONE.record('cname', {
          ttl: 86400,
          name: '2.' + DNS_DOMAIN,
          data: DNS_DOMAIN
        })
      ];

      ZONE.replaceRecords('cname', newRecords, function(err) {
        assert.ifError(err);

        var callback = function(err, records, nextQuery) {
          if (nextQuery) {
            ZONE.getRecords(nextQuery, callback);
            return;
          }

          ZONE.deleteRecords(newRecords, done);
        };

        ZONE.getRecords({
          types: 'cname',
          maxResults: 2
        }, callback);
      });
    });

    it('should replace records', function(done) {
      var name = 'test-zone-' + uuid.v4().substr(0, 18);

      dns.createZone(name, { dnsName: DNS_DOMAIN }, function(err, zone) {
        assert.ifError(err);

        zone.getRecords('ns', function(err, originalRecords) {
          assert.ifError(err);

          var originalData = originalRecords[0].data;

          var newRecord = zone.record('ns', {
            ttl: 3600,
            name: DNS_DOMAIN,
            data: ['ns1.nameserver.net.', 'ns2.nameserver.net.']
          });

          zone.replaceRecords('ns', newRecord, function(err, change) {
            assert.ifError(err);

            var deleted = change.metadata.deletions[0].rrdatas;
            var added = change.metadata.additions[0].rrdatas;

            assert.deepEqual(deleted, originalData);
            assert.deepEqual(added, newRecord.data);

            done();
          });
        });
      });
    });
  });
});
