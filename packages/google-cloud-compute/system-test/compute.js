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

let assert = require('assert');
let async = require('async');
let concat = require('concat-stream');
let is = require('is');
let prop = require('propprop');
let uuid = require('uuid');

let Compute = require('../');

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
  // deleted. This will also pick up any previously-created objects that were
  // unable to be removed if a prior test run had unexpectedly quit.

  let TESTS_PREFIX = 'gcloud-tests-';
  let REGION_NAME = 'us-central1';
  let ZONE_NAME = 'us-central1-a';

  let compute = new Compute();
  let region = compute.region(REGION_NAME);
  let zone = compute.zone(ZONE_NAME);

  before(deleteAllTestObjects);
  after(deleteAllTestObjects);

  describe('addresses', function() {
    let ADDRESS_NAME = generateName('address');
    let address = region.address(ADDRESS_NAME);

    before(create(address));

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
      let resultsMatched = 0;

      compute
        .getAddressesStream()
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
    let AUTOSCALER_NAME = generateName('autoscaler');
    let autoscaler = zone.autoscaler(AUTOSCALER_NAME);

    let NETWORK_NAME = generateName('network');
    let network = compute.network(NETWORK_NAME);

    let INSTANCE_TEMPLATE_NAME = generateName('instance-template');
    let INSTANCE_GROUP_MANAGER_NAME = generateName('instance-group-manager');

    before(function(done) {
      async.series(
        [
          create(network, {
            range: '10.240.0.0/16',
          }),

          function(callback) {
            createInstanceTemplate(
              INSTANCE_TEMPLATE_NAME,
              network.formattedName,
              callback
            );
          },

          function(callback) {
            createInstanceGroupManager(
              INSTANCE_GROUP_MANAGER_NAME,
              [
                'https://www.googleapis.com/compute/v1/projects',
                compute.projectId,
                'global/instanceTemplates',
                INSTANCE_TEMPLATE_NAME,
              ].join('/'),
              callback
            );
          },

          create(autoscaler, {
            coolDown: 30,
            cpu: 80,
            loadBalance: 40,
            maxReplicas: 5,
            minReplicas: 1,
            target: INSTANCE_GROUP_MANAGER_NAME,
          }),
        ],
        done
      );
    });

    it('should have created the autoscaler', function(done) {
      autoscaler.getMetadata(function(err, metadata) {
        assert.ifError(err);

        assert.strictEqual(metadata.name, AUTOSCALER_NAME);

        assert.deepStrictEqual(metadata.autoscalingPolicy, {
          coolDownPeriodSec: 30,
          cpuUtilization: {
            utilizationTarget: 0.8,
          },
          loadBalancingUtilization: {
            utilizationTarget: 0.4,
          },
          maxNumReplicas: 5,
          minNumReplicas: 1,
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
      let resultsMatched = 0;

      compute
        .getAutoscalersStream()
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
      let description = 'description';

      autoscaler.setMetadata(
        {
          description: description,
        },
        compute.execAfterOperation_(function(err) {
          assert.ifError(err);

          autoscaler.getMetadata(function(err, metadata) {
            assert.ifError(err);
            assert.strictEqual(metadata.description, description);
            done();
          });
        })
      );
    });
  });

  describe('disks', function() {
    let DISK_NAME = generateName('disk');
    let disk = zone.disk(DISK_NAME);

    before(create(disk, {os: 'ubuntu'}));

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
      let resultsMatched = 0;

      compute
        .getDisksStream()
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
      disk
        .snapshot(generateName('snapshot'))
        .create(function(err, snapshot, operation) {
          assert.ifError(err);

          operation.on('error', done).on('complete', function() {
            snapshot.getMetadata(done);
          });
        });
    });

    it('should run operation as a promise', function() {
      let snapshot = disk.snapshot(generateName('snapshot'));

      return snapshot.create().then(function(response) {
        let operation = response[1];
        return operation.promise();
      });
    });
  });

  describe('firewalls', function() {
    let FIREWALL_NAME = generateName('firewall');
    let firewall = compute.firewall(FIREWALL_NAME);

    let CONFIG = {
      protocols: {
        tcp: [3000],
        icmp: true, // This should open all ports on this protocol
        udp: [], // This should not open ports on this protocol at all
      },

      ranges: ['0.0.0.0/0'],
    };

    let expectedMetadata = {
      allowed: [
        {
          IPProtocol: 'tcp',
          ports: ['3000'],
        },
        {
          IPProtocol: 'icmp',
        },
      ],

      sourceRanges: CONFIG.ranges,
    };

    before(create(firewall, CONFIG));

    it('should have opened the correct connections', function(done) {
      firewall.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.deepStrictEqual(metadata.allowed, expectedMetadata.allowed);
        assert.deepStrictEqual(
          metadata.sourceRanges,
          expectedMetadata.sourceRanges
        );
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
      let resultsMatched = 0;

      compute
        .getFirewallsStream()
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

  describe('health checks', function() {
    let HEALTH_CHECK_NAME = generateName('health-check');
    let healthCheck = compute.healthCheck(HEALTH_CHECK_NAME);

    let OPTIONS = {
      description: 'A health check.',
      interval: 50,
      timeout: 25,
    };

    before(create(healthCheck, OPTIONS));

    it('should have created the correct health check', function(done) {
      healthCheck.getMetadata(function(err, metadata) {
        assert.ifError(err);

        assert.strictEqual(metadata.description, OPTIONS.description);
        assert.strictEqual(metadata.checkIntervalSec, OPTIONS.interval);
        assert.strictEqual(metadata.timeoutSec, OPTIONS.timeout);

        done();
      });
    });

    it('should set metadata', function(done) {
      let description = 'The best description. Possibly ever.';

      healthCheck.setMetadata(
        {
          description: description,
        },
        compute.execAfterOperation_(function(err) {
          if (err) {
            done(err);
            return;
          }

          healthCheck.getMetadata(function(err, metadata) {
            if (err) {
              done(err);
              return;
            }

            assert.strictEqual(metadata.description, description);

            done();
          });
        })
      );
    });

    it('should get a list of health checks', function(done) {
      compute.getHealthChecks(function(err, healthChecks) {
        assert.ifError(err);
        assert(healthChecks.length > 0);
        done();
      });
    });

    it('should get a list of health checks in stream mode', function(done) {
      let resultsMatched = 0;

      compute
        .getHealthChecksStream()
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

  describe('health checks (https)', function() {
    let HEALTH_CHECK_NAME = generateName('health-check');
    let healthCheck = compute.healthCheck(HEALTH_CHECK_NAME, {
      https: true,
    });

    let OPTIONS = {
      description: 'A health check.',
      interval: 50,
      timeout: 25,
    };

    before(create(healthCheck, OPTIONS));

    it('should have created the correct health check', function(done) {
      healthCheck.getMetadata(function(err, metadata) {
        assert.ifError(err);

        assert.strictEqual(metadata.description, OPTIONS.description);
        assert.strictEqual(metadata.checkIntervalSec, OPTIONS.interval);
        assert.strictEqual(metadata.timeoutSec, OPTIONS.timeout);

        done();
      });
    });

    it('should set metadata', function(done) {
      let description = 'The best description. Possibly ever.';

      healthCheck.setMetadata(
        {
          description: description,
        },
        compute.execAfterOperation_(function(err) {
          if (err) {
            done(err);
            return;
          }

          healthCheck.getMetadata(function(err, metadata) {
            if (err) {
              done(err);
              return;
            }

            assert.strictEqual(metadata.description, description);

            done();
          });
        })
      );
    });

    it('should get a list of health checks', function(done) {
      compute.getHealthChecks({https: true}, function(err, healthChecks) {
        assert.ifError(err);
        assert(healthChecks.length > 0);
        done();
      });
    });

    it('should get a list of health checks in stream mode', function(done) {
      let resultsMatched = 0;

      compute
        .getHealthChecksStream({https: true})
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

  describe('images', function() {
    let DISK = zone.disk(generateName('disk'));
    let IMAGE = compute.image(generateName('image'));

    before(create(DISK, {os: 'ubuntu'}));
    before(create(IMAGE, DISK));

    it('should create an image', function(done) {
      IMAGE.exists(function(err, exists) {
        assert.ifError(err);
        assert.strictEqual(exists, true);
        done();
      });
    });

    it('should list images', function(done) {
      compute.getImages(function(err, images) {
        assert.ifError(err);
        assert(images.length > 0);
        done();
      });
    });

    it('should list images in stream mode', function(done) {
      let resultsMatched = 0;

      compute
        .getImagesStream()
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

  describe('instance groups', function() {
    let INSTANCE_GROUP_NAME = generateName('instance-group');
    let instanceGroup = zone.instanceGroup(INSTANCE_GROUP_NAME);

    let OPTIONS = {
      description: 'new instance group',
      ports: {
        http: 80,
      },
    };

    before(create(instanceGroup, OPTIONS));

    it('should have created an instance group', function(done) {
      instanceGroup.getMetadata(function(err, metadata) {
        assert.ifError(err);

        assert.strictEqual(metadata.name, INSTANCE_GROUP_NAME);
        assert.strictEqual(metadata.description, OPTIONS.description);
        assert.deepStrictEqual(metadata.namedPorts, [
          {
            name: 'http',
            port: 80,
          },
        ]);

        done();
      });
    });

    it('should list project instance groups', function(done) {
      compute.getInstanceGroups(function(err, instanceGroups) {
        assert.ifError(err);
        assert(instanceGroups.length > 0);
        done();
      });
    });

    it('should list project instance groups in stream mode', function(done) {
      let resultsMatched = 0;

      compute
        .getInstanceGroupsStream()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should list zonal instance groups', function(done) {
      zone.getInstanceGroups(function(err, instanceGroups) {
        assert.ifError(err);
        assert(instanceGroups.length > 0);
        done();
      });
    });

    it('should list zonal instance groups in stream mode', function(done) {
      let resultsMatched = 0;

      zone
        .getInstanceGroupsStream()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should set named ports', function(done) {
      let ports = OPTIONS.ports;

      instanceGroup.setPorts(
        ports,
        compute.execAfterOperation_(function(err) {
          assert.ifError(err);

          instanceGroup.getMetadata(function(err, metadata) {
            assert.ifError(err);
            assert.deepStrictEqual(metadata.namedPorts, [
              {
                name: 'http',
                port: 80,
              },
            ]);
            done();
          });
        })
      );
    });

    describe('adding and removing VMs', function() {
      let vm = zone.vm(generateName('vm'));

      before(create(vm, {os: 'ubuntu'}));

      it('should add a VM to the instance group', function(done) {
        instanceGroup.add(vm, compute.execAfterOperation_(done));
      });

      it('should list the VMs', function(done) {
        instanceGroup.getVMs(function(err, vms) {
          assert.ifError(err);

          let vmNamesInGroup = vms.map(prop('name'));
          assert(vmNamesInGroup.indexOf(vm.name) > -1);

          done();
        });
      });

      it('should list the VMs in stream mode', function(done) {
        instanceGroup
          .getVMsStream()
          .on('error', done)
          .pipe(
            concat(function(vms) {
              let vmNamesInGroup = vms.map(prop('name'));
              assert(vmNamesInGroup.indexOf(vm.name) > -1);

              done();
            })
          );
      });

      it('should remove a VM from the instance group', function(done) {
        instanceGroup.remove(vm, compute.execAfterOperation_(done));
      });
    });
  });

  describe('machine types', function() {
    it('should get a list of machine types', function(done) {
      compute.getMachineTypes(function(err, machineTypes) {
        assert.ifError(err);
        assert(machineTypes.length > 0);
        done();
      });
    });

    it('should get a list of machine types in stream mode', function(done) {
      let resultsMatched = 0;

      compute
        .getMachineTypesStream()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get the metadata', function(done) {
      compute
        .getMachineTypesStream()
        .on('error', done)
        .once('data', function(machineType) {
          machineType.getMetadata(function(err, metadata) {
            assert.ifError(err);
            assert.strictEqual(metadata.kind, 'compute#machineType');
            done();
          });
        });
    });
  });

  describe('machine types (zonal)', function() {
    it('should get a list of machine types', function(done) {
      zone.getMachineTypes(function(err, machineTypes) {
        assert.ifError(err);
        assert(machineTypes.length > 0);
        done();
      });
    });

    it('should get a list of machine types in stream mode', function(done) {
      let resultsMatched = 0;

      zone
        .getMachineTypesStream()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get the metadata', function(done) {
      zone
        .getMachineTypesStream()
        .on('error', done)
        .once('data', function(machineType) {
          machineType.getMetadata(function(err, metadata) {
            assert.ifError(err);
            assert.strictEqual(metadata.kind, 'compute#machineType');
            done();
          });
        });
    });
  });

  describe('networks', function() {
    let NETWORK_NAME = generateName('network');
    let network = compute.network(NETWORK_NAME);

    let CONFIG = {
      range: '10.240.0.0/16',
    };

    before(create(network, CONFIG));

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
      let resultsMatched = 0;

      compute
        .getNetworksStream()
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
      let resultsMatched = 0;

      compute
        .getOperationsStream()
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

  describe('project', function() {
    let project;

    beforeEach(function() {
      project = compute.project();
    });

    it('should get the project', function(done) {
      project.get(function(err, project) {
        assert.ifError(err);
        assert(project.metadata);
        done();
      });
    });

    it('should get metadata about the project', function(done) {
      project.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert(metadata);
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
      let resultsMatched = 0;

      compute
        .getRegionsStream()
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
      let resultsMatched = 0;

      region
        .getOperationsStream()
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
      let resultsMatched = 0;

      region
        .getOperationsStream()
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
    let RULE_NAME = generateName('rule');
    let rule = compute.rule(RULE_NAME);

    let service = compute.service(generateName('service'));

    let INSTANCE_GROUP_NAME = generateName('instance-group');
    let HEALTH_CHECK_NAME = generateName('health-check');

    // To create a rule, we need to also create a TargetHttpProxy and UrlMap.
    // Until they are officially supported by google-cloud-node, we make manual
    // requests to create and delete them.
    let TARGET_PROXY_NAME = generateName('target-proxy');
    let URL_MAP_NAME = generateName('url-map');

    before(function(done) {
      async.series(
        [
          function(callback) {
            createService(
              service.name,
              INSTANCE_GROUP_NAME,
              HEALTH_CHECK_NAME,
              callback
            );
          },

          function(callback) {
            createUrlMap(
              {
                name: URL_MAP_NAME,
                defaultService: 'global/backendServices/' + service.name,
              },
              callback
            );
          },

          function(callback) {
            createTargetProxy(
              {
                name: TARGET_PROXY_NAME,
                urlMap: 'global/urlMaps/' + URL_MAP_NAME,
              },
              callback
            );
          },

          create(rule, {
            target: 'global/targetHttpProxies/' + TARGET_PROXY_NAME,
            portRange: '8080',
            IPProtocol: 'TCP',
          }),
        ],
        done
      );
    });

    it('should get a list of rules', function(done) {
      compute.getRules(function(err, rules) {
        assert.ifError(err);
        assert(rules.length > 0);
        done();
      });
    });

    it('should have created the right rule', function(done) {
      let target = [
        'https://www.googleapis.com/compute/v1/global/targetHttpProxies/',
        TARGET_PROXY_NAME,
      ].join('');

      rule.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata.name, RULE_NAME);
        assert.strictEqual(metadata.IPProtocol, 'TCP');
        assert.strictEqual(metadata.portRange, '8080-8080');

        // The projectId may have been replaced depending on how the system
        // tests are being run, so let's not care about that.
        metadata.target = metadata.target.replace(/projects\/[^/]*\//, '');
        assert.strictEqual(metadata.target, target);

        done();
      });
    });

    it('should set a new target', function(done) {
      let target = [
        'https://www.googleapis.com/compute/v1/projects/' + compute.projectId,
        '/global/targetHttpProxies/' + TARGET_PROXY_NAME,
      ].join('');

      rule.setTarget(
        target,
        compute.execAfterOperation_(function(err) {
          assert.ifError(err);

          rule.getMetadata(function(err, metadata) {
            assert.ifError(err);

            // The projectId may have been replaced depending on how the system
            // tests are being run, so let's not care about that.
            target = target.replace(/projects\/[^/]*\//, '');
            metadata.target = metadata.target.replace(/projects\/[^/]*\//, '');
            assert.strictEqual(metadata.target, target);

            done();
          });
        })
      );
    });
  });

  describe('rules (regional)', function() {
    let RULE_NAME = generateName('rule');
    let rule = region.rule(RULE_NAME);

    let TARGET_INSTANCE_NAME = generateName('target-instance');

    let VM_NAME = generateName('vm');
    let vm = zone.vm(VM_NAME);

    before(function(done) {
      async.series(
        [
          create(vm, {
            os: 'ubuntu',
            http: true,
          }),

          function(callback) {
            createTargetInstance(TARGET_INSTANCE_NAME, VM_NAME, callback);
          },

          create(rule, {
            target: [
              'zones/' + zone.name + '/targetInstances/' + TARGET_INSTANCE_NAME,
            ].join(''),
            range: '8000-9000',
          }),
        ],
        done
      );
    });

    it('should get a list of rules', function(done) {
      region.getRules(function(err, rules) {
        assert.ifError(err);
        assert(rules.length > 0);
        done();
      });
    });

    it('should have created the right rule', function(done) {
      let target = [
        'https://www.googleapis.com/compute/v1/projects/' + compute.projectId,
        '/zones/' + zone.name + '/targetInstances/' + TARGET_INSTANCE_NAME,
      ].join('');

      rule.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata.name, RULE_NAME);
        assert.strictEqual(metadata.IPProtocol, 'TCP');
        assert.strictEqual(metadata.portRange, '8000-9000');

        // The projectId may have been replaced depending on how the system
        // tests are being run, so let's not care about that.
        target = target.replace(/projects\/[^/]*\//, '');
        metadata.target = metadata.target.replace(/projects\/[^/]*\//, '');
        assert.strictEqual(metadata.target, target);
        done();
      });
    });
  });

  describe('services', function() {
    let service = compute.service(generateName('service'));

    let INSTANCE_GROUP_NAME = generateName('instance-group');
    let HEALTH_CHECK_NAME = generateName('health-check');

    before(function(done) {
      createService(service.name, INSTANCE_GROUP_NAME, HEALTH_CHECK_NAME, done);
    });

    it('should get a list of services', function(done) {
      compute.getServices(function(err, services) {
        assert.ifError(err);
        assert(services.length > 0);
        done();
      });
    });

    it('should get a list of services in stream mode', function(done) {
      let resultsMatched = 0;

      compute
        .getServicesStream()
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
      service.getHealth(
        {
          name: INSTANCE_GROUP_NAME,
          zone: zone,
        },
        function(err, status) {
          assert.ifError(err);
          assert.strictEqual(is.array(status), true);
          done();
        }
      );
    });

    it('should set metadata', function(done) {
      let description = 'The best description. Possibly ever.';

      service.setMetadata(
        {
          description: description,
        },
        compute.execAfterOperation_(function(err) {
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
        })
      );
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
      let resultsMatched = 0;

      compute
        .getSnapshotsStream()
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

  describe('subnetworks', function() {
    let NETWORK_NAME = generateName('network');
    let network = compute.network(NETWORK_NAME);

    let SUBNETWORK_NAME = generateName('subnetwork');
    let subnetwork = region.subnetwork(SUBNETWORK_NAME);

    let NETWORK_CONFIG = {
      autoCreateSubnetworks: false,
    };

    let SUBNETWORK_CONFIG = {
      network: 'global/networks/' + NETWORK_NAME,
      range: '10.0.1.0/24',
    };

    before(function(done) {
      async.series(
        [
          create(network, NETWORK_CONFIG),
          create(subnetwork, SUBNETWORK_CONFIG),
        ],
        done
      );
    });

    it('should have created the subnetwork', function(done) {
      subnetwork.getMetadata(function(err, metadata) {
        assert.ifError(err);
        assert.strictEqual(metadata.name, SUBNETWORK_NAME);
        done();
      });
    });

    it('should get a list of subnetworks', function(done) {
      compute.getSubnetworks(function(err, subnetworks) {
        assert.ifError(err);
        assert(subnetworks.length > 0);
        done();
      });
    });

    it('should get a list of subnetworks in stream mode', function(done) {
      let resultsMatched = 0;

      compute
        .getSubnetworksStream()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get a list of regional subnetworks', function(done) {
      region.getSubnetworks(function(err, subnetworks) {
        assert.ifError(err);
        assert(subnetworks.length > 0);
        done();
      });
    });

    it('should get a list of regional subnetworks in stream', function(done) {
      let resultsMatched = 0;

      region
        .getSubnetworksStream()
        .on('error', done)
        .on('data', function() {
          resultsMatched++;
        })
        .on('end', function() {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should access a subnetwork through a Region', function(done) {
      region.subnetwork(SUBNETWORK_NAME).getMetadata(done);
    });
  });

  describe('vms', function() {
    let VM_NAME = generateName('vm');
    let vm = zone.vm(VM_NAME);

    before(create(vm, {os: 'ubuntu', http: true}));

    it('should have enabled HTTP connections', function(done) {
      vm.getTags(function(err, tags) {
        assert.ifError(err);
        assert.deepStrictEqual(tags, ['http-server']);
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
      let resultsMatched = 0;

      compute
        .getVMsStream()
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
      let disk = zone.disk(generateName('disk'));

      async.series([createDisk, attachDisk, detachDisk], done);

      function createDisk(callback) {
        let config = {
          os: 'ubuntu',
        };

        disk.create(config, compute.execAfterOperation_(callback));
      }

      function attachDisk(callback) {
        vm.attachDisk(disk, compute.execAfterOperation_(callback));
      }

      function detachDisk(callback) {
        vm.detachDisk(disk, compute.execAfterOperation_(callback));
      }
    });

    it('should get serial port output', function(done) {
      vm.getSerialPortOutput(done);
    });

    it('should set tags', function(done) {
      let newTagName = 'new-tag';

      vm.getTags(function(err, tags, fingerprint) {
        assert.ifError(err);

        tags.push(newTagName);

        vm.setTags(
          tags,
          fingerprint,
          compute.execAfterOperation_(function(e) {
            assert.ifError(e);

            vm.getTags(function(err, tags) {
              assert.ifError(err);
              assert(tags.indexOf(newTagName) > -1);
              done();
            });
          })
        );
      });
    });

    it('should reset', function(done) {
      vm.reset(compute.execAfterOperation_(done));
    });

    it('should resize the machine', function(done) {
      let machineType = 'n1-standard-2';

      vm.resize(machineType, function(err) {
        assert.ifError(err);

        vm.getMetadata(function(err, metadata) {
          assert.ifError(err);

          let expectedMachineType = [
            'https://www.googleapis.com/compute/v1',
            'zones',
            zone.id,
            'machineTypes',
            machineType,
          ].join('/');

          // The projectId may have been replaced depending on how the system
          // tests are being run, so let's not care about that.
          metadata.machineType = metadata.machineType.replace(
            /projects\/[^/]*\//,
            ''
          );
          assert.strictEqual(metadata.machineType, expectedMachineType);

          done();
        });
      });
    });

    it('should set metadata', function(done) {
      let key = 'newKey';
      let value = 'newValue';

      let newMetadata = {};
      newMetadata[key] = value;

      vm.setMetadata(
        newMetadata,
        compute.execAfterOperation_(function(err) {
          assert.ifError(err);

          vm.getMetadata(function(err, metadata) {
            assert.ifError(err);

            assert.deepStrictEqual(metadata.metadata.items, [
              {
                key: key,
                value: value,
              },
            ]);

            done();
          });
        })
      );
    });

    it('should start', function(done) {
      vm.start(compute.execAfterOperation_(done));
    });

    it('should stop and trigger STOPPING `waitFor` event', function(done) {
      async.parallel(
        [
          function(callback) {
            vm.waitFor('STOPPING', {timeout: 600}, callback);
          },

          function(callback) {
            vm.stop(compute.execAfterOperation_(callback));
          },
        ],
        done
      );
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
      let resultsMatched = 0;

      compute
        .getZonesStream()
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
      let resultsMatched = 0;

      zone
        .getDisksStream()
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
      let resultsMatched = 0;

      zone
        .getOperationsStream()
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
    return [TESTS_PREFIX, customPrefix + '-', uuid.v4().replace('-', '')]
      .join('')
      .substr(0, 61);
  }

  function deleteAllTestObjects(callback) {
    async.series(
      [
        deleteGlobalRules,
        deleteRegionalRules,
        deleteTargetProxies,
        deleteUrlMaps,
        deleteServices,
        deleteHttpsHealthChecks,
        deleteInstanceGroupManagers,
        deleteInstanceTemplates,
        deleteTargetInstances,
        deleteAllGcloudTestObjects,
      ],
      callback
    );
  }

  function deleteAllGcloudTestObjects(callback) {
    async.eachSeries(
      [
        'getVMs',
        'getAddresses',
        'getAutoscalers',
        'getDisks',
        'getImages',
        'getInstanceGroups',
        'getFirewalls',
        'getSubnetworks',
        'getHealthChecks',
        'getNetworks',
        'getRules',
        'getSnapshots',
      ],
      callAndDeleteGcloudTestObject,
      callback
    );
  }

  function callAndDeleteGcloudTestObject(methodName, callback) {
    compute[methodName](
      {
        filter: 'name eq ' + TESTS_PREFIX + '.*',
      },
      function(err, objects) {
        if (err) {
          callback(err);
          return;
        }

        async.each(
          objects,
          function(object, callback) {
            object.delete(compute.execAfterOperation_(callback));
          },
          callback
        );
      }
    );
  }

  function create(object, cfg) {
    return function(callback) {
      object.create(cfg, compute.execAfterOperation_(callback));
    };
  }

  function deleteGlobalRules(callback) {
    compute.getRules(
      {
        filter: 'name eq ' + TESTS_PREFIX + '.*',
      },
      function(err, rules) {
        if (err) {
          callback(err);
          return;
        }

        async.each(
          rules,
          function(rule, callback) {
            rule.delete(compute.execAfterOperation_(callback));
          },
          callback
        );
      }
    );
  }

  function deleteRegionalRules(callback) {
    region.getRules(
      {
        filter: 'name eq ' + TESTS_PREFIX + '.*',
      },
      function(err, rules) {
        if (err) {
          callback(err);
          return;
        }

        async.each(
          rules,
          function(rule, callback) {
            rule.delete(compute.execAfterOperation_(callback));
          },
          callback
        );
      }
    );
  }

  function deleteServices(callback) {
    compute.getServices(
      {
        filter: 'name eq ' + TESTS_PREFIX + '.*',
      },
      function(err, services) {
        if (err) {
          callback(err);
          return;
        }

        async.each(
          services,
          function(service, callback) {
            service.delete(compute.execAfterOperation_(callback));
          },
          callback
        );
      }
    );
  }

  function createService(name, instanceGroupName, healthCheckName, callback) {
    let service = compute.service(name);
    let group = zone.instanceGroup(instanceGroupName);
    let healthCheck = compute.healthCheck(healthCheckName);
    let groupUrl;
    let healthCheckUrl;

    async.series(
      [
        create(group),

        function(callback) {
          group.getMetadata(function(err, metadata) {
            if (err) {
              callback(err);
              return;
            }

            groupUrl = metadata.selfLink;
            callback();
          });
        },

        create(healthCheck),

        function(callback) {
          healthCheck.getMetadata(function(err, metadata) {
            if (err) {
              callback(err);
              return;
            }

            healthCheckUrl = metadata.selfLink;
            callback();
          });
        },

        function(callback) {
          create(service, {
            backends: [
              {
                group: groupUrl,
              },
            ],
            healthChecks: [healthCheckUrl],
          })(callback);
        },
      ],
      callback
    );
  }

  function deleteHttpsHealthChecks(callback) {
    compute.getHealthChecks(
      {
        filter: 'name eq ' + TESTS_PREFIX + '.*',
        https: true,
      },
      function(err, healthChecks) {
        if (err) {
          callback(err);
          return;
        }

        async.each(
          healthChecks,
          function(healthCheck, callback) {
            healthCheck.delete(compute.execAfterOperation_(callback));
          },
          callback
        );
      }
    );
  }

  function getUrlMaps(callback) {
    compute.request(
      {
        uri: '/global/urlMaps',
        qs: {
          filter: 'name eq ' + TESTS_PREFIX + '.*',
        },
      },
      callback
    );
  }

  function deleteUrlMaps(callback) {
    getUrlMaps(function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      if (!resp.items) {
        callback();
        return;
      }

      async.each(resp.items.map(prop('name')), deleteUrlMap, callback);
    });
  }

  function createUrlMap(config, callback) {
    compute.request(
      {
        method: 'POST',
        uri: '/global/urlMaps',
        json: config,
      },
      function(err, resp) {
        if (err) {
          callback(err);
          return;
        }

        let operation = compute.operation(resp.name);
        operation.on('error', callback).on('complete', function() {
          callback();
        });
      }
    );
  }

  function deleteUrlMap(name, callback) {
    compute.request(
      {
        method: 'DELETE',
        uri: '/global/urlMaps/' + name,
      },
      function(err, resp) {
        if (err) {
          callback(err);
          return;
        }

        let operation = compute.operation(resp.name);
        operation.on('error', callback).on('complete', function() {
          callback();
        });
      }
    );
  }

  function getTargetProxies(callback) {
    compute.request(
      {
        uri: '/global/targetHttpProxies',
        qs: {
          filter: 'name eq ' + TESTS_PREFIX + '.*',
        },
      },
      callback
    );
  }

  function deleteTargetProxies(callback) {
    getTargetProxies(function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      if (!resp.items) {
        callback();
        return;
      }

      async.each(resp.items.map(prop('name')), deleteTargetProxy, callback);
    });
  }

  function createTargetProxy(config, callback) {
    compute.request(
      {
        method: 'POST',
        uri: '/global/targetHttpProxies',
        json: config,
      },
      function(err, resp) {
        if (err) {
          callback(err);
          return;
        }

        let operation = compute.operation(resp.name);
        operation.on('error', callback).on('complete', function() {
          callback();
        });
      }
    );
  }

  function deleteTargetProxy(name, callback) {
    compute.request(
      {
        method: 'DELETE',
        uri: '/global/targetHttpProxies/' + name,
      },
      function(err, resp) {
        if (err) {
          callback(err);
          return;
        }

        let operation = compute.operation(resp.name);
        operation.on('error', callback).on('complete', function() {
          callback();
        });
      }
    );
  }

  function getTargetInstances(callback) {
    zone.request(
      {
        uri: '/targetInstances',
        qs: {
          filter: 'name eq ' + TESTS_PREFIX + '.*',
        },
      },
      callback
    );
  }

  function deleteTargetInstances(callback) {
    getTargetInstances(function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      if (!resp.items) {
        callback();
        return;
      }

      async.each(resp.items.map(prop('name')), deleteTargetInstance, callback);
    });
  }

  function createTargetInstance(name, instanceName, callback) {
    zone.request(
      {
        method: 'POST',
        uri: '/targetInstances',
        json: {
          name: name,
          instance: 'zones/' + zone.name + '/instances/' + instanceName,
        },
      },
      function(err, resp) {
        if (err) {
          callback(err);
          return;
        }

        let operation = zone.operation(resp.name);
        operation.on('error', callback).on('complete', function() {
          callback();
        });
      }
    );
  }

  function deleteTargetInstance(name, callback) {
    zone.request(
      {
        method: 'DELETE',
        uri: '/targetInstances/' + name,
      },
      function(err, resp) {
        if (err) {
          callback(err);
          return;
        }

        let operation = zone.operation(resp.name);
        operation.on('error', callback).on('complete', function() {
          callback();
        });
      }
    );
  }

  function getInstanceTemplates(callback) {
    compute.request(
      {
        uri: '/global/instanceTemplates',
        qs: {
          filter: 'name eq ' + TESTS_PREFIX + '.*',
        },
      },
      callback
    );
  }

  function deleteInstanceTemplates(callback) {
    getInstanceTemplates(function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      if (!resp.items) {
        callback();
        return;
      }

      let names = resp.items.map(prop('name'));
      async.each(names, deleteInstanceTemplate, callback);
    });
  }

  function createInstanceTemplate(name, networkName, callback) {
    compute.request(
      {
        method: 'POST',
        uri: '/global/instanceTemplates',
        json: {
          name: name,
          properties: {
            disks: [
              {
                boot: true,
                mode: 'READ_ONLY',
                initializeParams: {
                  diskName: generateName('disk'),
                  diskSizeGb: 10,
                  diskType: 'pd-standard',
                  sourceImage: [
                    'projects/centos-cloud/global/images/centos-6-v20150710',
                  ].join(''),
                },
              },
            ],
            machineType: 'n1-standard-1',
            networkInterfaces: [
              {
                network: networkName,
                accessConfigs: [
                  {
                    name: generateName('access_config'),
                    type: 'ONE_TO_ONE_NAT',
                  },
                ],
              },
            ],
          },
        },
      },
      function(err, resp) {
        if (err) {
          callback(err);
          return;
        }

        let operation = compute.operation(resp.name);
        operation.on('error', callback).on('complete', function() {
          callback();
        });
      }
    );
  }

  function deleteInstanceTemplate(name, callback) {
    compute.request(
      {
        method: 'DELETE',
        uri: '/global/instanceTemplates/' + name,
      },
      function(err, resp) {
        if (err) {
          callback(err);
          return;
        }

        let operation = compute.operation(resp.name);
        operation.on('error', callback).on('complete', function() {
          callback();
        });
      }
    );
  }

  function getInstanceGroupManagers(callback) {
    zone.request(
      {
        uri: '/instanceGroupManagers',
        qs: {
          filter: 'name eq ' + TESTS_PREFIX + '.*',
        },
      },
      callback
    );
  }

  function deleteInstanceGroupManagers(callback) {
    getInstanceGroupManagers(function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      if (!resp.items) {
        callback();
        return;
      }

      let names = resp.items.map(prop('name'));
      async.each(names, deleteInstanceGroupManager, callback);
    });
  }

  function createInstanceGroupManager(name, instanceTemplateName, callback) {
    zone.request(
      {
        method: 'POST',
        uri: '/instanceGroupManagers',
        json: {
          baseInstanceName: name.replace(/\W/g, ''),
          name: name,
          targetSize: 1,
          instanceTemplate: instanceTemplateName,
        },
      },
      function(err, resp) {
        if (err) {
          callback(err);
          return;
        }

        let operation = zone.operation(resp.name);
        operation.on('error', callback).on('complete', function() {
          callback();
        });
      }
    );
  }

  function deleteInstanceGroupManager(name, callback) {
    zone.request(
      {
        method: 'DELETE',
        uri: '/instanceGroupManagers/' + name,
      },
      function(err, resp) {
        if (err) {
          callback(err);
          return;
        }

        let operation = zone.operation(resp.name);
        operation.on('error', callback).on('complete', function() {
          callback();
        });
      }
    );
  }
});
