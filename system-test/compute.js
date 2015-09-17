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

var assert = require('assert');
var async = require('async');
var exec = require('methmeth');

var env = require('./env.js');
var Compute = require('../lib/compute/index.js');

describe('Compute', function() {
  // Since the Compute Engine API is rather large and involves long-running
  // tasks for nearly every request, our system tests follow a pattern designed
  // to create a minimal amount of resources.
  //
  // Each `describe` block tests one object type. Before the tests run, the
  // object is created.
  //
  // The created object is then used and expected to exist for the rest of the
  // tests in that `describe` block.
  //
  // After all describe blocks have run, all of the created objects are
  // deleted.* This will also pick up any previously-created objects that were
  // unable to be removed if a prior test run had unexpectedly quit.
  //
  // * What we really send are delete requests. If we were to wait on all of the
  // delete operations to complete, it could be several minutes.

  var TESTS_PREFIX = 'gcloud-tests-';
  var REGION_NAME = 'us-central1';
  var ZONE_NAME = 'us-central1-a';

  var compute = new Compute(env);
  var region = compute.region(REGION_NAME);
  var zone = compute.zone(ZONE_NAME);

  after(function(done) {
    deleteAllTestObjects(done);
  });

  describe('addresses', function() {
    var ADDRESS_NAME;
    var address;

    before(function(done) {
      ADDRESS_NAME = generateName();

      region.createAddress(ADDRESS_NAME, function(err, address_, operation) {
        assert.ifError(err);
        address = address_;
        operation.onComplete(done);
      });
    });

    it('should have created the address', function(done) {
      address.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata.name, ADDRESS_NAME);
        done();
      });
    });

    it('should get a list of addresses', function(done) {
      compute.getAddresses(function(err, addresses) {
        assert.ifError(err);
        assert(addresses.length > 0);
        done();
      });
    });

    it('should get a list of addresses in stream mode', function(done) {
      var resultsMatched = 0;

      compute.getAddresses()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should access an address through a Region', function(done) {
      region.address(ADDRESS_NAME).getMetadata(done);
    });
  });

  describe('disks', function() {
    var DISK_NAME;
    var disk;

    before(function(done) {
      DISK_NAME = generateName();

      var config = {
        os: 'ubuntu'
      };

      zone.createDisk(DISK_NAME, config, function(err, disk_, operation) {
        assert.ifError(err);
        disk = disk_;
        operation.onComplete(done);
      });
    });

    it('should have created the disk', function(done) {
      disk.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata.name, DISK_NAME);
        done();
      });
    });

    it('should get a list of disks', function(done) {
      compute.getDisks(function(err, disks) {
        assert.ifError(err);
        assert(disks.length > 0);
        done();
      });
    });

    it('should get a list of disks in stream mode', function(done) {
      var resultsMatched = 0;

      compute.getDisks()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should access a disk through a Zone', function(done) {
      zone.disk(DISK_NAME).getMetadata(done);
    });

    it('should take a snapshot', function(done) {
      disk.createSnapshot(generateName(), done);
    });
  });

  describe('firewalls', function() {
    var FIREWALL_NAME;

    var CONFIG = {
      protocols: {
        tcp: [3000],
        udp: []
      },

      ranges: ['0.0.0.0/0']
    };

    var expectedMetadata = {
      allowed: [
        {
          IPProtocol: 'tcp',
          ports: ['3000']
        },
        {
          IPProtocol: 'udp'
        }
      ],

      sourceRanges: CONFIG.ranges
    };

    var firewall;

    before(function(done) {
      FIREWALL_NAME = generateName();

      compute.createFirewall(
        FIREWALL_NAME, CONFIG, function(err, firewall_, operation) {
          assert.ifError(err);
          firewall = firewall_;
          operation.onComplete(done);
        });
    });

    it('should have opened the correct connections', function(done) {
      firewall.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.deepEqual(metadata.allowed, expectedMetadata.allowed);
        assert.deepEqual(metadata.sourceRanges, expectedMetadata.sourceRanges);
        done();
      });
    });

    it('should get a list of firewalls', function(done) {
      compute.getFirewalls(function(err, firewalls) {
        assert.ifError(err);
        assert(firewalls.length > 0);
        done();
      });
    });

    it('should get a list of firewalls in stream mode', function(done) {
      var resultsMatched = 0;

      compute.getFirewalls()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('networks', function() {
    var NETWORK_NAME;

    var CONFIG = {
      range: '10.240.0.0/16'
    };

    var network;

    before(function(done) {
      NETWORK_NAME = generateName();

      compute.createNetwork(
        NETWORK_NAME, CONFIG, function(err, network_, operation) {
          assert.ifError(err);
          network = network_;
          operation.onComplete(done);
        });
    });

    it('should have opened the correct range', function(done) {
      network.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata.IPv4Range, CONFIG.range);
        done();
      });
    });

    it('should get a list of networks', function(done) {
      compute.getNetworks(function(err, networks) {
        assert.ifError(err);
        assert(networks.length > 0);
        done();
      });
    });

    it('should get a list of networks in stream mode', function(done) {
      var resultsMatched = 0;

      compute.getNetworks()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('operations', function() {
    it('should get a list of operations', function(done) {
      compute.getOperations(function(err, operations) {
        assert.ifError(err);
        assert(operations.length > 0);
        done();
      });
    });

    it('should get a list of operations in stream mode', function(done) {
      var resultsMatched = 0;

      compute.getOperations()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('regions', function() {
    it('should get a list of regions', function(done) {
      compute.getRegions(function(err, regions) {
        assert.ifError(err);
        assert(regions.length > 0);
        done();
      });
    });

    it('should get a list of regions in stream mode', function(done) {
      var resultsMatched = 0;

      compute.getRegions()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get a list of addresses', function(done) {
      region.getOperations(function(err, addresses) {
        assert.ifError(err);
        assert(addresses.length > 0);
        done();
      });
    });

    it('should get a list of addresses in stream mode', function(done) {
      var resultsMatched = 0;

      region.getOperations()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get a list of operations', function(done) {
      region.getOperations(function(err, operations) {
        assert.ifError(err);
        assert(operations.length > 0);
        done();
      });
    });

    it('should get a list of operations in stream mode', function(done) {
      var resultsMatched = 0;

      region.getOperations()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('snapshots', function() {
    it('should get a list of snapshots', function(done) {
      compute.getSnapshots(function(err, snapshots) {
        assert.ifError(err);
        assert(snapshots.length > 0);
        done();
      });
    });

    it('should get a list of snapshots in stream mode', function(done) {
      var resultsMatched = 0;

      compute.getSnapshots()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('vms', function() {
    var VM_NAME;
    var vm;

    before(function(done) {
      VM_NAME = generateName();

      var config = {
        os: 'ubuntu',
        http: true
      };

      zone.createVM(VM_NAME, config, function(err, vm_, operation) {
        assert.ifError(err);
        vm = vm_;
        operation.onComplete(done);
      });
    });

    after(function(done) {
      // 90s is the minimum time for this operation to complete as per:
      // https://cloud.google.com/compute/docs/instances/#deleting_an_instance
      //
      // In practice, it seems to take around 1.5x that, so we allow 2x.
      var MAX_TIME_ALLOWED = 90000 * 2;
      this.timeout(MAX_TIME_ALLOWED);

      vm.delete(function(err, operation) {
        if (err) {
          done(err);
          return;
        }

        operation.onComplete({
          maxAttempts: MAX_TIME_ALLOWED / 10000,
          interval: 10000
        }, done);
      });
    });

    it('should have enabled HTTP connections', function(done) {
      vm.getTags(function(err, tags) {
        assert.ifError(err);
        assert.deepEqual(tags, ['http-server']);
        done();
      });
    });

    it('should get a list of vms', function(done) {
      compute.getVMs(function(err, vms) {
        assert.ifError(err);
        assert(vms.length > 0);
        done();
      });
    });

    it('should get a list of vms in stream mode', function(done) {
      var resultsMatched = 0;

      compute.getVMs()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should access a VM through a Zone', function(done) {
      zone.vm(VM_NAME).getMetadata(done);
    });

    it('should attach and detach a disk', function(done) {
      compute.getDisks()
        .on('error', done)
        .once('data', function(disk) {
          this.end();

          vm.attachDisk(disk, function(err) {
            assert.ifError(err);

            vm.detachDisk(disk, function(err, operation) {
              assert.ifError(err);
              operation.onComplete(done);
            });
          });
        });
    });

    it('should get serial port output', function(done) {
      vm.getSerialPortOutput(done);
    });

    it('should set tags', function(done) {
      var newTagName = 'new-tag';

      vm.getTags(function(err, tags, fingerprint) {
        assert.ifError(err);

        tags.push(newTagName);

        vm.setTags(tags, fingerprint, function(err, operation) {
          assert.ifError(err);

          operation.onComplete(function(err) {
            assert.ifError(err);

            vm.getTags(function(err, tags) {
              assert.ifError(err);
              assert(tags.indexOf(newTagName) > -1);
              done();
            });
          });
        });
      });
    });

    it('should reset', function(done) {
      vm.reset(done);
    });

    it('should start', function(done) {
      vm.start(done);
    });

    it('should stop', function(done) {
      vm.stop(done);
    });
  });

  describe('zones', function() {
    it('should get a list of zones', function(done) {
      compute.getZones(function(err, zones) {
        assert.ifError(err);
        assert(zones.length > 0);
        done();
      });
    });

    it('should get a list of zones in stream mode', function(done) {
      var resultsMatched = 0;

      compute.getZones()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get a list of disks', function(done) {
      zone.getDisks(function(err, disks) {
        assert.ifError(err);
        assert(disks.length > 0);
        done();
      });
    });

    it('should get a list of disks in stream mode', function(done) {
      var resultsMatched = 0;

      zone.getDisks()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get a list of operations', function(done) {
      zone.getOperations(function(err, operations) {
        assert.ifError(err);
        assert(operations.length > 0);
        done();
      });
    });

    it('should get a list of operations in stream mode', function(done) {
      var resultsMatched = 0;

      zone.getOperations()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  function generateName() {
    return TESTS_PREFIX + Date.now();
  }

  function deleteAllTestObjects(callback) {
    async.each([
      'getAddresses',
      'getDisks',
      'getFirewalls',
      'getNetworks',
      'getSnapshots',
      'getVMs'
    ], callAndDelete, callback);
  }

  function callAndDelete(methodName, callback) {
    compute[methodName]({
      filter: 'name eq ' + TESTS_PREFIX + '.*'
    }, function(err, objects) {
      if (err) {
        callback(err);
        return;
      }

      async.each(objects, exec('delete'), callback);
    });
  }
});
