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
var is = require('is');

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
    var ADDRESS_NAME = generateName('address');
    var address = region.address(ADDRESS_NAME);

    before(function(done) {
      address.create(function(err, disk, operation) {
        assert.ifError(err);

        operation
          .on('error', done)
          .on('complete', function() {
            done();
          });
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

  describe('autoscalers', function() {
    var AUTOSCALER_NAME = generateName('autoscaler');
    var autoscaler = zone.autoscaler(AUTOSCALER_NAME);

    // Some of the services we support require an instance group to be created.
    // Util `instanceGroups` are officially supported by gcloud-node, we make
    // manual requests to create and delete them.
    var INSTANCE_GROUP_NAME = generateName('instance-group');

    before(function(done) {
      async.series([
        function(callback) {
          createInstanceGroup(INSTANCE_GROUP_NAME, callback);
        },

        function(callback) {
          autoscaler.create({
            coolDown: 30,
            cpu: 80,
            loadBalance: 40,
            maxReplicas: 5,
            minReplicas: 0,
            target: INSTANCE_GROUP_NAME
          }, execAfterOperationComplete(callback));
        }
      ], done);
    });

    after(function(done) {
      deleteInstanceGroup(INSTANCE_GROUP_NAME, done);
    });

    it('should have created the autoscaler', function(done) {
      autoscaler.getMetadata(function(err, metadata) {
        assert.ifError(err);

        assert.strictEqual(metadata.name, AUTOSCALER_NAME);

        assert.deepEqual(metadata.autoscalingPolicy, {
          coolDownPeriodSec: 30,
          cpuUtilization: {
            utilizationTarget: 0.8
          },
          loadBalancingUtilization: {
            utilizationTarget: 0.4
          },
          maxNumReplicas: 5,
          minNumReplicas: 0
        });

        done();
      });
    });

    it('should get a list of autoscalers', function(done) {
      compute.getAutoscalers(function(err, autoscalers) {
        assert.ifError(err);
        assert(autoscalers.length > 0);
        done();
      });
    });

    it('should get a list of autoscalers in stream mode', function(done) {
      var resultsMatched = 0;

      compute.getAutoscalers()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should set & get metadata', function(done) {
      var description = 'description';

      autoscaler.setMetadata({
        description: description
      }, function(err) {
        assert.ifError(err);

        autoscaler.getMetadata(function(err, metadata) {
          assert.ifError(err);
          assert.strictEqual(metadata.description, description);
          done();
        });
      });
    });
  });

  describe('disks', function() {
    var DISK_NAME = generateName('disk');
    var disk = zone.disk(DISK_NAME);

    before(function(done) {
      var config = {
        os: 'ubuntu'
      };

      disk.create(config, function(err, disk, operation) {
        assert.ifError(err);

        operation
          .on('error', done)
          .on('complete', function() {
            done();
          });
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
      disk.snapshot(generateName('snapshot'))
        .create(function(err, snapshot, operation) {
          assert.ifError(err);

          operation
            .on('error', done)
            .on('complete', function() {
              done();
            });
        });
    });
  });

  describe('firewalls', function() {
    var FIREWALL_NAME = generateName('firewall');
    var firewall = compute.firewall(FIREWALL_NAME);

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

    before(function(done) {
      firewall.create(CONFIG, function(err, firewall, operation) {
        assert.ifError(err);

        operation
          .on('error', done)
          .on('complete', function() {
            done();
          });
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
    var NETWORK_NAME = generateName('network');
    var network = compute.network(NETWORK_NAME);

    var CONFIG = {
      range: '10.240.0.0/16'
    };

    before(function(done) {
      network.create(CONFIG, function(err, network, operation) {
        assert.ifError(err);

        operation
          .on('error', done)
          .on('complete', function() {
            done();
          });
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

  describe('rules', function() {
    var RULE_NAME = generateName('rule');
    var rule = compute.rule(RULE_NAME);

    var service = compute.service(generateName('service'));

    var INSTANCE_GROUP_NAME = generateName('instance-group');
    var HEALTH_CHECK_NAME = generateName('health-check');

    // To create a rule, we need to also create a TargetHttpProxy and UrlMap.
    // Until they are officially supported by gcloud-node, we make manual
    // requests to create and delete them.
    var TARGET_PROXY_NAME = generateName('target-proxy');
    var URL_MAP_NAME = generateName('url-map');

    before(function(done) {
      async.series([
        function(callback) {
          createService(
            service.name,
            INSTANCE_GROUP_NAME,
            HEALTH_CHECK_NAME,
            callback
          );
        },

        function(callback) {
          createUrlMap({
            name: URL_MAP_NAME,
            defaultService: 'global/backendServices/' + service.name
          }, callback);
        },

        function(callback) {
          createTargetProxy({
            name: TARGET_PROXY_NAME,
            urlMap: 'global/urlMaps/' + URL_MAP_NAME
          }, callback);
        },

        function(callback) {
          rule.create({
            target: 'global/targetHttpProxies/' + TARGET_PROXY_NAME,
            portRange: '8080',
            IPProtocol: 'TCP'
          }, execAfterOperationComplete(callback));
        }
      ], done);
    });

    after(function(done) {
      async.series([
        function(callback) {
          rule.delete(execAfterOperationComplete(callback));
        },

        function(callback) {
          deleteTargetProxy(TARGET_PROXY_NAME, callback);
        },

        function(callback) {
          deleteUrlMap(URL_MAP_NAME, callback);
        },

        function(callback) {
          deleteService(
            service.name,
            INSTANCE_GROUP_NAME,
            HEALTH_CHECK_NAME,
            callback
          );
        }
      ], done);
    });

    it('should get a list of rules', function(done) {
      compute.getRules(function(err, rules) {
        assert.ifError(err);
        assert(rules.length > 0);
        done();
      });
    });

    it('should have created the right rule', function(done) {
      var target = [
        'https://www.googleapis.com/compute/v1/projects/' + compute.projectId,
        '/global/targetHttpProxies/' + TARGET_PROXY_NAME
      ].join('');

      rule.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata.name, RULE_NAME);
        assert.strictEqual(metadata.IPProtocol, 'TCP');
        assert.strictEqual(metadata.portRange, '8080-8080');
        assert.strictEqual(metadata.target, target);
        done();
      });
    });

    it('should set a new target', function(done) {
      var target = [
        'https://www.googleapis.com/compute/v1/projects/' + compute.projectId,
        '/global/targetHttpProxies/' + TARGET_PROXY_NAME
      ].join('');

      rule.setTarget(target, execAfterOperationComplete(function(err) {
        assert.ifError(err);

        rule.getMetadata(function(err, metadata) {
          assert.ifError(err);
          assert.strictEqual(metadata.target, target);
          done();
        });
      }));
    });
  });

  describe('rules (regional)', function() {
    var RULE_NAME = generateName('rule');
    var rule = region.rule(RULE_NAME);

    var TARGET_INSTANCE_NAME = generateName('target-instance');

    var VM_NAME = generateName('vm');
    var vm = zone.vm(VM_NAME);

    before(function(done) {
      async.series([
        function(callback) {
          vm.create({
            os: 'ubuntu',
            http: true
          }, execAfterOperationComplete(callback));
        },

        function(callback) {
          createTargetInstance(TARGET_INSTANCE_NAME, VM_NAME, callback);
        },

        function(callback) {
          rule.create({
            target: [
              'zones/' + zone.name + '/targetInstances/' + TARGET_INSTANCE_NAME
            ].join(''),
            range: '8000-9000'
          }, execAfterOperationComplete(callback));
        }
      ], done);
    });

    after(function(done) {
      async.series([
        function(callback) {
          rule.delete(execAfterOperationComplete(callback));
        },

        function(callback) {
          vm.delete(execAfterOperationComplete(callback));
        }
      ], done);
    });

    it('should get a list of rules', function(done) {
      region.getRules(function(err, rules) {
        assert.ifError(err);
        assert(rules.length > 0);
        done();
      });
    });

    it('should have created the right rule', function(done) {
      var target = [
        'https://www.googleapis.com/compute/v1/projects/' + compute.projectId,
        '/zones/' + zone.name + '/targetInstances/' + TARGET_INSTANCE_NAME
      ].join('');

      rule.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata.name, RULE_NAME);
        assert.strictEqual(metadata.IPProtocol, 'TCP');
        assert.strictEqual(metadata.portRange, '8000-9000');
        assert.strictEqual(metadata.target, target);
        done();
      });
    });
  });

  describe('services', function() {
    var service = compute.service(generateName('service'));

    var INSTANCE_GROUP_NAME = generateName('instance-group');
    var HEALTH_CHECK_NAME = generateName('health-check');

    before(function(done) {
      createService(service.name, INSTANCE_GROUP_NAME, HEALTH_CHECK_NAME, done);
    });

    after(function(done) {
      deleteService(service.name, INSTANCE_GROUP_NAME, HEALTH_CHECK_NAME, done);
    });

    it('should get a list of services', function(done) {
      compute.getServices(function(err, services) {
        assert.ifError(err);
        assert(services.length > 0);
        done();
      });
    });

    it('should get a list of services in stream mode', function(done) {
      var resultsMatched = 0;

      compute.getServices()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get the results of a health check', function(done) {
      service.getHealth({
        name: INSTANCE_GROUP_NAME,
        zone: zone
      }, function(err, status) {
        assert.ifError(err);
        assert.strictEqual(is.array(status), true);
        done();
      });
    });

    it('should set metadata', function(done) {
      var description = 'The best description. Possibly ever.';

      service.setMetadata({
        description: description
      }, execAfterOperationComplete(function(err) {
        if (err) {
          done(err);
          return;
        }

        service.getMetadata(function(err, metadata) {
          if (err) {
            done(err);
            return;
          }

          assert.strictEqual(metadata.description, description);

          done();
        });
      }));
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
    var VM_NAME = generateName('vm');
    var vm = zone.vm(VM_NAME);

    before(function(done) {
      var config = {
        os: 'ubuntu',
        http: true
      };

      vm.create(config, function(err, vm, operation) {
        assert.ifError(err);

        operation
          .on('error', done)
          .on('complete', function() {
            done();
          });
      });
    });

    after(function(done) {
      vm.delete(function(err, operation) {
        if (err) {
          done(err);
          return;
        }

        operation
          .on('error', done)
          .on('complete', function() {
            done();
          });
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
      var name = generateName('disk');
      var disk = zone.disk(name);

      async.series([
        createDisk,
        attachDisk,
        detachDisk
      ], function(err) {
        if (err) {
          done(err);
          return;
        }

        disk.delete(execAfterOperationComplete(done));
      });

      function createDisk(callback) {
        var config = {
          os: 'ubuntu'
        };

        disk.create(config, execAfterOperationComplete(callback));
      }

      function attachDisk(callback) {
        vm.attachDisk(disk, execAfterOperationComplete(callback));
      }

      function detachDisk(callback) {
        vm.detachDisk(disk, execAfterOperationComplete(callback));
      }
    });

    it('should get serial port output', function(done) {
      vm.getSerialPortOutput(done);
    });

    it('should set tags', function(done) {
      var newTagName = 'new-tag';

      vm.getTags(function(err, tags, fingerprint) {
        assert.ifError(err);

        tags.push(newTagName);

        vm.setTags(tags, fingerprint, execAfterOperationComplete(function(err) {
          assert.ifError(err);

          vm.getTags(function(err, tags) {
            assert.ifError(err);
            assert(tags.indexOf(newTagName) > -1);
            done();
          });
        }));
      });
    });

    it('should reset', function(done) {
      vm.reset(execAfterOperationComplete(done));
    });

    it('should set metadata', function(done) {
      var key = 'newKey';
      var value = 'newValue';

      var newMetadata = {};
      newMetadata[key] = value;

      vm.setMetadata(newMetadata, execAfterOperationComplete(function(err) {
        assert.ifError(err);

        vm.getMetadata(function(err, metadata) {
          assert.ifError(err);

          assert.deepEqual(metadata.metadata.items, [
            {
              key: key,
              value: value
            }
          ]);

          done();
        });
      }));
    });

    it('should start', function(done) {
      vm.start(execAfterOperationComplete(done));
    });

    it('should stop', function(done) {
      vm.stop(execAfterOperationComplete(done));
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

  function generateName(customPrefix) {
    return TESTS_PREFIX + customPrefix + '-' + Date.now();
  }

  function deleteAllTestObjects(callback) {
    async.each([
      'getAddresses',
      'getAutoscalers',
      'getDisks',
      'getFirewalls',
      'getNetworks',
      'getRules',
      'getServices',
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

  function execAfterOperationComplete(callback) {
    return function(err) {
      if (err) {
        callback(err);
        return;
      }

      var operation = arguments[arguments.length - 2]; // [..., op, apiResponse]

      operation
        .on('error', callback)
        .on('complete', function() {
          callback();
        });
    };
  }

  function createService(name, instanceGroupName, healthCheckName, callback) {
    var service = compute.service(name);
    var groupUrl;
    var healthCheckUrl;

    async.series([
      function(callback) {
        createInstanceGroup(instanceGroupName, function(err, metadata) {
          if (err) {
            callback(err);
            return;
          }

          groupUrl = metadata.selfLink;

          callback();
        });
      },

      function(callback) {
        createHttpHealthCheck(healthCheckName, function(err, metadata) {
          if (err) {
            callback(err);
            return;
          }

          healthCheckUrl = metadata.selfLink;

          callback();
        });
      },

      function(callback) {
        service.create({
          backends: [
            {
              group: groupUrl
            }
          ],
          healthChecks: [
            healthCheckUrl
          ]
        }, execAfterOperationComplete(callback));
      }
    ], callback);
  }

  function deleteService(name, instanceGroupName, healthCheckName, callback) {
    var service = compute.service(name);

    async.series([
      function(callback) {
        service.delete(execAfterOperationComplete(callback));
      },

      function(callback) {
        deleteHttpHealthCheck(healthCheckName, callback);
      },

      function(callback) {
        deleteInstanceGroup(instanceGroupName, callback);
      }
    ], callback);
  }

  function createInstanceGroup(name, callback) {
    zone.request({
      method: 'POST',
      uri: '/instanceGroups',
      json: {
        name: name
      }
    }, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      var operation = zone.operation(resp.name);
      operation
        .on('error', callback)
        .on('complete', function() {
          zone.request({
            uri: '/instanceGroups/' + name
          }, function(err, resp) {
            callback(null, resp);
          });
        });
    });
  }

  function deleteInstanceGroup(name, callback) {
    zone.request({
      method: 'DELETE',
      uri: '/instanceGroups/' + name
    }, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      var operation = zone.operation(resp.name);
      operation
        .on('error', callback)
        .on('complete', function() {
          callback();
        });
    });
  }

  function createHttpHealthCheck(name, callback) {
    compute.request({
      method: 'POST',
      uri: '/global/httpHealthChecks',
      json: {
        name: name
      }
    }, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      var operation = compute.operation(resp.name);
      operation
        .on('error', callback)
        .on('complete', function() {
          compute.request({
            uri: '/global/httpHealthChecks/' + name
          }, function(err, resp) {
            callback(null, resp);
          });
        });
    });
  }

  function deleteHttpHealthCheck(name, callback) {
    compute.request({
      method: 'DELETE',
      uri: '/global/httpHealthChecks/' + name
    }, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      var operation = compute.operation(resp.name);
      operation
        .on('error', callback)
        .on('complete', function() {
          callback();
        });
    });
  }

  function createUrlMap(config, callback) {
    compute.request({
      method: 'POST',
      uri: '/global/urlMaps',
      json: config
    }, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      var operation = compute.operation(resp.name);
      operation
        .on('error', callback)
        .on('complete', function() {
          callback();
        });
    });
  }

  function deleteUrlMap(name, callback) {
    compute.request({
      method: 'DELETE',
      uri: '/global/urlMaps/' + name
    }, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      var operation = compute.operation(resp.name);
      operation
        .on('error', callback)
        .on('complete', function() {
          callback();
        });
    });
  }

  function createTargetProxy(config, callback) {
    compute.request({
      method: 'POST',
      uri: '/global/targetHttpProxies',
      json: config
    }, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      var operation = compute.operation(resp.name);
      operation
        .on('error', callback)
        .on('complete', function() {
          callback();
        });
    });
  }

  function deleteTargetProxy(name, callback) {
    compute.request({
      method: 'DELETE',
      uri: '/global/targetHttpProxies/' + name
    }, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      var operation = compute.operation(resp.name);
      operation
        .on('error', callback)
        .on('complete', function() {
          callback();
        });
    });
  }

  function createTargetInstance(name, instanceName, callback) {
    zone.request({
      method: 'POST',
      uri: '/targetInstances',
      json: {
        name: name,
        instance: 'zones/' + zone.name + '/instances/' + instanceName
      }
    }, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      var operation = zone.operation(resp.name);
      operation
        .on('error', callback)
        .on('complete', function() {
          callback();
        });
    });
  }
});
