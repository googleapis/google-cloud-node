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

'use strict';

const assert = require('assert');
const concat = require('concat-stream');
const uuid = require('uuid');
const {promisify} = require('util');
let testFlag = true;

const Compute = require('../');

describe('Compute', () => {
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

  const TESTS_PREFIX = 'gcloud';
  const TEST_ID = uuid.v4().split('-')[0];
  const FULL_PREFIX = `${TESTS_PREFIX}-${TEST_ID}`;
  const REGION_NAME = 'us-central1';
  const ZONE_NAME = 'us-central1-a';

  const compute = new Compute();
  const region = compute.region(REGION_NAME);
  const zone = compute.zone(ZONE_NAME);

  const computeRequest = promisify(compute.request).bind(compute);
  const zoneRequest = promisify(zone.request).bind(zone);

  before(() => deleteAllTestObjects({expiredOnly: true}));
  after(() => deleteAllTestObjects({expiredOnly: false}));

  describe('addresses', () => {
    const ADDRESS_NAME = generateName('address');
    const address = region.address(ADDRESS_NAME);

    before(() => create(address));

    it('should have created the address', async () => {
      const [metadata] = await address.getMetadata();
      assert.strictEqual(metadata.name, ADDRESS_NAME);
    });

    it('should get a list of addresses', async () => {
      const [addresses] = await compute.getAddresses();
      assert(addresses.length > 0);
    });

    it('should get a list of addresses in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getAddressesStream()
        .on('error', done)
        .on('data', () => {
          resultsMatched++;
        })
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should access an address through a Region', async () => {
      return region.address(ADDRESS_NAME).getMetadata();
    });
  });

  describe('autoscalers', () => {
    const AUTOSCALER_NAME = generateName('autoscaler');
    const autoscaler = zone.autoscaler(AUTOSCALER_NAME);

    const NETWORK_NAME = generateName('network');
    const network = compute.network(NETWORK_NAME);

    const INSTANCE_TEMPLATE_NAME = generateName('instance-template');
    const INSTANCE_GROUP_MANAGER_NAME = generateName('instance-group-manager');

    before(async () => {
      await create(network, {range: '10.240.0.0/16'});
      await createInstanceTemplate(
        INSTANCE_TEMPLATE_NAME,
        network.formattedName
      );
      await createInstanceGroupManager(
        INSTANCE_GROUP_MANAGER_NAME,
        [
          'https://www.googleapis.com/compute/v1/projects',
          compute.projectId,
          'global/instanceTemplates',
          INSTANCE_TEMPLATE_NAME,
        ].join('/')
      );
      await create(autoscaler, {
        coolDown: 30,
        cpu: 80,
        loadBalance: 40,
        maxReplicas: 5,
        minReplicas: 1,
        target: INSTANCE_GROUP_MANAGER_NAME,
      });
    });

    it('should have created the autoscaler', async () => {
      const [metadata] = await autoscaler.getMetadata();
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
        mode: 'ON',
      });
    });

    it('should get a list of autoscalers', async () => {
      const [autoscalers] = await compute.getAutoscalers();
      assert(autoscalers.length > 0);
    });

    it('should get a list of autoscalers in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getAutoscalersStream()
        .on('error', done)
        .on('data', () => {
          resultsMatched++;
        })
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should set & get metadata', async () => {
      const description = 'description';
      await awaitResult(
        autoscaler.setMetadata({
          description: description,
        })
      );
      const [metadata] = await autoscaler.getMetadata();
      assert.strictEqual(metadata.description, description);
    });
  });

  describe('disks', () => {
    const DISK_NAME = generateName('disk');
    const disk = zone.disk(DISK_NAME);

    before(() => create(disk, {os: 'ubuntu'}));

    it('should have created the disk', async () => {
      const [metadata] = await disk.getMetadata();
      assert.strictEqual(metadata.name, DISK_NAME);
    });

    it('should get a list of disks', async () => {
      const [disks] = await compute.getDisks();
      assert(disks.length > 0);
    });

    it('should get a list of disks in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getDisksStream()
        .on('error', done)
        .on('data', () => {
          resultsMatched++;
        })
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should access a disk through a Zone', async () => {
      return zone.disk(DISK_NAME).getMetadata();
    });

    it('should take and delete a snapshot', async () => {
      const [snapshot, operation] = await disk
        .snapshot(generateName('snapshot'))
        .create();
      await operation.promise();
      await snapshot.getMetadata();
      await snapshot.delete();
    });

    it('should run operation as a promise', async () => {
      const snapshot = disk.snapshot(generateName('snapshot'));
      const [, operation] = await snapshot.create();
      return operation.promise();
    });
  });

  describe('firewalls', () => {
    const FIREWALL_NAME = generateName('firewall');
    const firewall = compute.firewall(FIREWALL_NAME);

    const CONFIG = {
      protocols: {
        tcp: [3000],
        icmp: true, // This should open all ports on this protocol
        udp: [], // This should not open ports on this protocol at all
      },

      ranges: ['0.0.0.0/0'],
    };

    const expectedMetadata = {
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

    before(() => create(firewall, CONFIG));

    it('should have opened the correct connections', async () => {
      const [metadata] = await firewall.getMetadata();
      assert.deepStrictEqual(metadata.allowed, expectedMetadata.allowed);
      assert.deepStrictEqual(
        metadata.sourceRanges,
        expectedMetadata.sourceRanges
      );
    });

    it('should get a list of firewalls', async () => {
      const [firewalls] = await compute.getFirewalls();
      assert(firewalls.length > 0);
    });

    it('should get a list of firewalls in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getFirewallsStream()
        .on('error', done)
        .on('data', () => {
          resultsMatched++;
        })
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('health checks', () => {
    const HEALTH_CHECK_NAME = generateName('health-check');
    const healthCheck = compute.healthCheck(HEALTH_CHECK_NAME);

    const OPTIONS = {
      description: 'A health check.',
      interval: 50,
      timeout: 25,
    };

    before(() => create(healthCheck, OPTIONS));

    it('should have created the correct health check', async () => {
      const [metadata] = await healthCheck.getMetadata();
      assert.strictEqual(metadata.description, OPTIONS.description);
      assert.strictEqual(metadata.checkIntervalSec, OPTIONS.interval);
      assert.strictEqual(metadata.timeoutSec, OPTIONS.timeout);
    });

    it('should set metadata', async () => {
      const description = 'The best description. Possibly ever.';
      await awaitResult(healthCheck.setMetadata({description}));
      const [metadata] = await healthCheck.getMetadata();
      assert.strictEqual(metadata.description, description);
    });

    it('should get a list of health checks', async () => {
      const [healthChecks] = await compute.getHealthChecks();
      assert(healthChecks.length > 0);
    });

    it('should get a list of health checks in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getHealthChecksStream()
        .on('error', done)
        .on('data', () => {
          resultsMatched++;
        })
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('health checks (https)', () => {
    const HEALTH_CHECK_NAME = generateName('health-check');
    const healthCheck = compute.healthCheck(HEALTH_CHECK_NAME, {
      https: true,
    });

    const OPTIONS = {
      description: 'A health check.',
      interval: 50,
      timeout: 25,
    };

    before(() => create(healthCheck, OPTIONS));

    it('should have created the correct health check', async () => {
      const [metadata] = await healthCheck.getMetadata();
      assert.strictEqual(metadata.description, OPTIONS.description);
      assert.strictEqual(metadata.checkIntervalSec, OPTIONS.interval);
      assert.strictEqual(metadata.timeoutSec, OPTIONS.timeout);
    });

    it('should set metadata', async () => {
      const description = 'The best description. Possibly ever.';
      await awaitResult(healthCheck.setMetadata({description}));
      const [metadata] = await healthCheck.getMetadata();
      assert.strictEqual(metadata.description, description);
    });

    it('should get a list of health checks', async () => {
      const [healthChecks] = await compute.getHealthChecks({https: true});
      assert(healthChecks.length > 0);
    });

    it('should get a list of health checks in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getHealthChecksStream({https: true})
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('images', () => {
    const DISK = zone.disk(generateName('disk'));
    const IMAGE = compute.image(generateName('image'));

    before(() => create(DISK, {os: 'ubuntu'}));
    before(() => create(IMAGE, DISK));

    it('should create an image', async () => {
      const [exists] = await IMAGE.exists();
      assert.strictEqual(exists, true);
    });

    it('should create an image from an image object', async () => {
      const image = compute.image(generateName('image'));
      const [, operation] = await image.create(DISK, {labels: {a: 'b'}});
      await operation.promise();
    });

    it('should list images', async () => {
      const [images] = await compute.getImages();
      assert(images.length > 0);
    });

    it('should list images in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getImagesStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('instance groups', () => {
    const INSTANCE_GROUP_NAME = generateName('instance-group');
    const instanceGroup = zone.instanceGroup(INSTANCE_GROUP_NAME);

    const OPTIONS = {
      description: 'new instance group',
      ports: {
        http: 80,
      },
    };

    before(() => create(instanceGroup, OPTIONS));

    it('should have created an instance group', async () => {
      const [metadata] = await instanceGroup.getMetadata();
      assert.strictEqual(metadata.name, INSTANCE_GROUP_NAME);
      assert.strictEqual(metadata.description, OPTIONS.description);
      assert.deepStrictEqual(metadata.namedPorts, [
        {
          name: 'http',
          port: 80,
        },
      ]);
    });

    it('should list project instance groups', async () => {
      const [instanceGroups] = await compute.getInstanceGroups();
      assert(instanceGroups.length > 0);
    });

    it('should list project instance groups in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getInstanceGroupsStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should list zonal instance groups', async () => {
      const [instanceGroups] = await zone.getInstanceGroups();
      assert(instanceGroups.length > 0);
    });

    it('should list zonal instance groups in stream mode', done => {
      let resultsMatched = 0;
      zone
        .getInstanceGroupsStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should set named ports', async () => {
      const ports = OPTIONS.ports;
      await awaitResult(instanceGroup.setPorts(ports));
      const [metadata] = await instanceGroup.getMetadata();
      assert.deepStrictEqual(metadata.namedPorts, [
        {
          name: 'http',
          port: 80,
        },
      ]);
    });

    describe('adding and removing VMs', () => {
      const vm = zone.vm(generateName('vm'));

      before(() => create(vm, {os: 'ubuntu'}));

      it('should add a VM to the instance group', async () => {
        return awaitResult(instanceGroup.add(vm));
      });

      it('should list the VMs', async () => {
        const [vms] = await instanceGroup.getVMs();
        const vmNamesInGroup = vms.map(x => x.name);
        assert(vmNamesInGroup.indexOf(vm.name) > -1);
      });

      it('should list the VMs in stream mode', done => {
        instanceGroup
          .getVMsStream()
          .on('error', done)
          .pipe(
            concat(vms => {
              const vmNamesInGroup = vms.map(x => x.name);
              assert(vmNamesInGroup.indexOf(vm.name) > -1);
              done();
            })
          );
      });

      it('should remove a VM from the instance group', async () => {
        return awaitResult(instanceGroup.remove(vm));
      });
    });
  });

  describe('machine types', () => {
    it('should get a list of machine types', async () => {
      const [machineTypes] = await compute.getMachineTypes();
      assert(machineTypes.length > 0);
    });

    it('should get a list of machine types in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getMachineTypesStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get the metadata', done => {
      compute
        .getMachineTypesStream()
        .on('error', done)
        .once('data', machineType => {
          machineType.getMetadata((err, metadata) => {
            assert.strictEqual(metadata.kind, 'compute#machineType');
            done();
          });
        });
    });
  });

  describe('machine types (zonal)', () => {
    it('should get a list of machine types', async () => {
      const [machineTypes] = await zone.getMachineTypes();
      assert(machineTypes.length > 0);
    });

    it('should get a list of machine types in stream mode', done => {
      let resultsMatched = 0;
      zone
        .getMachineTypesStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get the metadata', done => {
      zone
        .getMachineTypesStream()
        .on('error', done)
        .once('data', machineType => {
          machineType.getMetadata((err, metadata) => {
            assert.strictEqual(metadata.kind, 'compute#machineType');
            done();
          });
        });
    });
  });

  describe('networks', () => {
    const NETWORK_NAME = generateName('network');
    const network = compute.network(NETWORK_NAME);

    const CONFIG = {
      range: '10.240.0.0/16',
    };

    before(() => create(network, CONFIG));

    it('should have opened the correct range', async () => {
      const [metadata] = await network.getMetadata();
      assert.strictEqual(metadata.IPv4Range, CONFIG.range);
    });

    it('should get a list of networks', async () => {
      const [networks] = await compute.getNetworks();
      assert(networks.length > 0);
    });

    it('should get a list of networks in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getNetworksStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('operations', () => {
    it('should get a list of operations', async () => {
      const [operations] = await compute.getOperations();
      assert(operations.length > 0);
    });

    it('should get a list of operations in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getOperationsStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('project', () => {
    let project;
    beforeEach(() => {
      project = compute.project();
    });

    it('should get the project', async () => {
      const [p] = await project.get();
      assert.ok(p.metadata);
    });

    it('should get metadata about the project', async () => {
      const [metadata] = await project.getMetadata();
      assert.ok(metadata);
    });
  });

  describe('regions', () => {
    it('should get a list of regions', async () => {
      const [regions] = await compute.getRegions();
      assert(regions.length > 0);
    });

    it('should get a list of regions in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getRegionsStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get a list of addresses', async () => {
      const [addresses] = await region.getOperations();
      assert(addresses.length > 0);
    });

    it('should get a list of addresses in stream mode', done => {
      let resultsMatched = 0;
      region
        .getOperationsStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get a list of operations', async () => {
      const [operations] = await region.getOperations();
      assert(operations.length > 0);
    });

    it('should get a list of operations in stream mode', done => {
      let resultsMatched = 0;
      region
        .getOperationsStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('rules', () => {
    const RULE_NAME = generateName('rule');
    const NETWORK_NAME = generateName('network');
    const SUBNETWORK_NAME = generateName('subnetwork');
    const BACKEND_SERVICE_NAME = generateName('backend-service');
    let RULE;
    let SUBNETWORK;

    before(async () => {
      const projectId = await compute.authClient.getProjectId();
      const resourceUrlPrefix = `https://www.googleapis.com/compute/v1/projects/${projectId}`;
      const [network, networkOperation] = await compute.createNetwork(
        NETWORK_NAME,
        {
          autoCreateSubnetworks: false,
        }
      );
      await networkOperation.promise();

      const [subnetwork, subnetworkOperation] = await network.createSubnetwork(
        SUBNETWORK_NAME,
        {
          region: 'us-central1',
          range: '10.0.1.0/24',
        }
      );
      SUBNETWORK = subnetwork;
      await subnetworkOperation.promise();

      const region = compute.region('us-central1');

      const resp = await computeRequest({
        method: 'POST',
        uri: '/regions/us-central1/backendServices',
        json: {
          name: BACKEND_SERVICE_NAME,
          loadBalancingScheme: 'INTERNAL',
        },
      });
      await region.operation(resp.name).promise();

      const [rule, ruleOperation] = await region.createRule(RULE_NAME, {
        loadBalancingScheme: 'INTERNAL',
        backendService: `${resourceUrlPrefix}/regions/us-central1/backendServices/${BACKEND_SERVICE_NAME}`,
        subnetwork: `${resourceUrlPrefix}/regions/us-central1/subnetworks/${SUBNETWORK_NAME}`,
        network: `${resourceUrlPrefix}/global/networks/${NETWORK_NAME}`,
        ports: ['80', '81', '82'],
      });

      RULE = rule;
      try {
        const timeOutPromise = new Promise((resolve, reject) => {
          setTimeout(() => reject('Timed out!'), 1100000);
        });
        await Promise.race([timeOutPromise, await ruleOperation.promise()]);
      } catch (err) {
        testFlag = false;
      }
    });

    after(async () => {
      const [firewalls] = await compute.getFirewalls();
      const firewallsToDelete = firewalls.filter(x =>
        x.name.startsWith(TESTS_PREFIX)
      );
      for (const firewall of firewallsToDelete) {
        await firewall.delete();
      }
      if (testFlag) {
        const [ruleOperation] = await RULE.delete();
        await ruleOperation.promise();
        await computeRequest({
          method: 'DELETE',
          uri: 'regions/us-central1/backendServices/' + BACKEND_SERVICE_NAME,
        });
      }

      const [subnetworkOperation] = await SUBNETWORK.delete();
      await subnetworkOperation.promise();
    });

    it('should have created the right rule', async () => {
      if (testFlag) {
        const [metadata] = await RULE.getMetadata();
        assert.strictEqual(metadata.name, RULE_NAME);
        assert.strictEqual(metadata.IPProtocol, 'TCP');
        assert.deepStrictEqual(metadata.ports, ['80', '81', '82']);
        assert.strictEqual(metadata.loadBalancingScheme, 'INTERNAL');
      }
    });
  });

  describe('rules (regional)', () => {
    const RULE_NAME = generateName('rule');
    const rule = region.rule(RULE_NAME);
    const TARGET_INSTANCE_NAME = generateName('target-instance');
    const VM_NAME = generateName('vm');
    const vm = zone.vm(VM_NAME);

    before(async () => {
      await create(vm, {
        os: 'ubuntu',
        http: true,
      });
      await createTargetInstance(TARGET_INSTANCE_NAME, VM_NAME);
      await create(rule, {
        target: [
          'zones/' + zone.name + '/targetInstances/' + TARGET_INSTANCE_NAME,
        ].join(''),
        range: '8000-9000',
      });
    });

    it('should get a list of rules', async () => {
      const [rules] = await region.getRules();
      assert(rules.length > 0);
    });

    it('should have created the right rule', async () => {
      let target = [
        'https://www.googleapis.com/compute/v1/projects/' + compute.projectId,
        '/zones/' + zone.name + '/targetInstances/' + TARGET_INSTANCE_NAME,
      ].join('');

      const [metadata] = await rule.getMetadata();
      assert.strictEqual(metadata.name, RULE_NAME);
      assert.strictEqual(metadata.IPProtocol, 'TCP');
      assert.strictEqual(metadata.portRange, '8000-9000');

      // The projectId may have been replaced depending on how the system
      // tests are being run, so let's not care about that.
      target = target.replace(/projects\/[^/]*\//, '');
      metadata.target = metadata.target.replace(/projects\/[^/]*\//, '');
      assert.strictEqual(metadata.target, target);
    });
  });

  describe('services', () => {
    const service = compute.service(generateName('service'));

    const INSTANCE_GROUP_NAME = generateName('instance-group');
    const HEALTH_CHECK_NAME = generateName('health-check');

    before(
      async () =>
        await createService(
          service.name,
          INSTANCE_GROUP_NAME,
          HEALTH_CHECK_NAME
        )
    );

    it('should get a list of services', async () => {
      const [services] = await compute.getServices();
      assert(services.length > 0);
    });

    it('should get a list of services in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getServicesStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get the results of a health check', async () => {
      const [status] = await service.getHealth({
        name: INSTANCE_GROUP_NAME,
        zone: zone,
      });
      assert.strictEqual(Array.isArray(status), true);
    });

    it('should set metadata', async () => {
      const description = 'The best description. Possibly ever.';
      await awaitResult(service.setMetadata({description}));
      const [metadata] = await service.getMetadata();
      assert.strictEqual(metadata.description, description);
    });
  });

  describe('snapshots', () => {
    it('should get a list of snapshots', async () => {
      const [snapshots] = await compute.getSnapshots();
      assert(snapshots.length > 0);
    });

    it('should get a list of snapshots in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getSnapshotsStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  describe('subnetworks', () => {
    const NETWORK_NAME = generateName('network');
    const network = compute.network(NETWORK_NAME);
    const SUBNETWORK_NAME = generateName('subnetwork');
    const subnetwork = region.subnetwork(SUBNETWORK_NAME);
    const NETWORK_CONFIG = {
      autoCreateSubnetworks: false,
    };
    const SUBNETWORK_CONFIG = {
      network: 'global/networks/' + NETWORK_NAME,
      range: '10.0.1.0/24',
    };

    before(async () => {
      await create(network, NETWORK_CONFIG);
      await create(subnetwork, SUBNETWORK_CONFIG);
    });

    it('should have created the subnetwork', async () => {
      const [metadata] = await subnetwork.getMetadata();
      assert.strictEqual(metadata.name, SUBNETWORK_NAME);
    });

    it('should get a list of subnetworks', async () => {
      const [subnetworks] = await compute.getSubnetworks();
      assert(subnetworks.length > 0);
    });

    it('should get a list of subnetworks in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getSubnetworksStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get a list of regional subnetworks', async () => {
      const [subnetworks] = await region.getSubnetworks();
      assert(subnetworks.length > 0);
    });

    it('should get a list of regional subnetworks in stream', done => {
      let resultsMatched = 0;
      region
        .getSubnetworksStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should access a subnetwork through a Region', async () => {
      return region.subnetwork(SUBNETWORK_NAME).getMetadata();
    });
  });

  describe('vms', () => {
    const VM_NAME = generateName('vm');
    const vm = zone.vm(VM_NAME);

    before(async () => {
      await create(vm, {os: 'ubuntu', http: true});
    });

    it('should have enabled HTTP connections', async () => {
      const [tags] = await vm.getTags();
      assert.deepStrictEqual(tags, ['http-server']);
    });

    it('should get a list of vms', async () => {
      const [vms] = await compute.getVMs();
      assert(vms.length > 0);
    });

    it('should get a list of vms in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getVMsStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should access a VM through a Zone', async () => {
      await zone.vm(VM_NAME).getMetadata();
    });

    it('should attach and detach a disk', async () => {
      const disk = zone.disk(generateName('disk'));
      await awaitResult(disk.create({os: 'ubuntu'}));
      await awaitResult(vm.attachDisk(disk));
      await awaitResult(vm.detachDisk(disk));
    });

    it('should get serial port output', async () => {
      return vm.getSerialPortOutput();
    });

    it('should set labels', async () => {
      let [labels, fingerprint] = await vm.getLabels();
      await awaitResult(vm.setLabels({foo: 'bar'}, fingerprint));
      [labels, fingerprint] = await vm.getLabels();
      assert.strictEqual(labels.foo, 'bar');
    });

    it('should set tags', async () => {
      const newTagName = 'new-tag';
      const [tags, fingerprint] = await vm.getTags();
      tags.push(newTagName);
      await awaitResult(vm.setTags(tags, fingerprint));
      const [t2] = await vm.getTags();
      assert(t2.indexOf(newTagName) > -1);
    });

    it('should reset', async () => {
      return awaitResult(vm.reset());
    });

    it('should resize the machine', async () => {
      const machineType = 'n1-standard-2';
      await vm.resize(machineType);
      const [metadata] = await vm.getMetadata();
      const expectedMachineType = [
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
    });

    it('should set metadata', async () => {
      const key = 'newKey';
      const value = 'newValue';
      await awaitResult(vm.setMetadata({[key]: value}));
      await vm.getMetadata();
      assert.deepStrictEqual(vm.metadata.metadata.items, [{key, value}]);
    });

    it('should update the VM', async () => {
      await awaitResult(vm.update({deletionProtection: false}));
      const [metadata] = await vm.getMetadata();
      assert.strictEqual(metadata.deletionProtection, false);
    });

    it('should allow updating old metadata', async () => {
      const key = 'newKey';
      const value = 'newValue';
      const overriddenValue = `${value}${value}`;
      await awaitResult(vm.setMetadata({[key]: value}));
      await awaitResult(vm.setMetadata({[key]: overriddenValue}));
      await vm.getMetadata();
      assert.deepStrictEqual(vm.metadata.metadata.items, [
        {key, value: overriddenValue},
      ]);
    });

    it('should allow removing old metadata', async () => {
      const key = 'newKey';
      const value = 'newValue';
      await awaitResult(vm.setMetadata({[key]: value}));
      await awaitResult(vm.setMetadata({[key]: null}));
      await vm.getMetadata();
      assert.strictEqual(vm.metadata.metadata.items, undefined);
    });

    it('should start', async () => {
      return awaitResult(vm.start());
    });

    it('should stop and trigger STOPPING `waitFor` event', async () => {
      await Promise.all([
        vm.waitFor('STOPPING', {timeout: 600}),
        awaitResult(vm.stop()),
      ]);
    });
  });

  describe('zones', () => {
    it('should get a list of zones', async () => {
      const [zones] = await compute.getZones();
      assert(zones.length > 0);
    });

    it('should get a list of zones in stream mode', done => {
      let resultsMatched = 0;
      compute
        .getZonesStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get a list of disks', async () => {
      const [disks] = await zone.getDisks();
      assert(disks.length > 0);
    });

    it('should get a list of disks in stream mode', done => {
      let resultsMatched = 0;
      zone
        .getDisksStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });

    it('should get a list of operations', async () => {
      const [operations] = await zone.getOperations();
      assert(operations.length > 0);
    });

    it('should get a list of operations in stream mode', done => {
      let resultsMatched = 0;
      zone
        .getOperationsStream()
        .on('error', done)
        .on('data', () => resultsMatched++)
        .on('end', () => {
          assert(resultsMatched > 0);
          done();
        });
    });
  });

  function generateName(customPrefix) {
    const resourceId = uuid.v4().split('-')[0];
    return `${TESTS_PREFIX}-${TEST_ID}-${customPrefix}-${resourceId}`;
  }

  async function deleteAllTestObjects(opts) {
    opts.name = opts.expiredOnly ? TESTS_PREFIX : FULL_PREFIX;
    try {
      await deleteRegionalRules(opts);
      await callAndDeleteGcloudTestObject('Rules', opts);
      await deleteTargetProxies(opts);
      await deleteUrlMaps(opts);
      await callAndDeleteGcloudTestObject('Services', opts);
      await deleteHttpsHealthChecks(opts);
      await deleteInstanceGroupManagers(opts);
      await deleteInstanceTemplates(opts);
      await deleteTargetInstances(opts);
      await deleteAllGcloudTestObjects(opts);
    } catch (err) {
      console.warn(err);
    }
  }

  async function deleteAllGcloudTestObjects(opts) {
    const objectTypes = [
      'VMs',
      'Addresses',
      'Autoscalers',
      'Disks',
      'Images',
      'InstanceGroups',
      'Firewalls',
      'Subnetworks',
      'HealthChecks',
      'Networks',
      'Snapshots',
    ];
    for (const type of objectTypes) {
      await callAndDeleteGcloudTestObject(type, opts);
    }
  }

  async function callAndDeleteGcloudTestObject(type, opts) {
    let [objects] = await compute[`get${type}`]({
      filter: `name eq ${opts.name}.*`,
    });
    objects = filterExpired(objects, opts);
    if (objects.length === 0) {
      return Promise.resolve();
    }
    console.log(`deleting ${objects.length} ${type}...`);
    await Promise.all(
      objects.map(async o => {
        console.log(`Deleting ${type} '${o.name}'...`);
        await awaitResult(o.delete());
        console.log(`${type} '${o.name}' deleted!`);
      })
    );
  }

  async function create(object, cfg) {
    return awaitResult(object.create(cfg));
  }

  async function deleteRegionalRules(opts) {
    const [rules] = await region.getRules({
      filter: `name eq ${opts.name}.*`,
    });
    return Promise.all(
      filterExpired(rules, opts).map(rule => awaitResult(rule.delete()))
    );
  }

  async function createService(name, instanceGroupName, healthCheckName) {
    const service = compute.service(name);
    const group = zone.instanceGroup(instanceGroupName);
    const healthCheck = compute.healthCheck(healthCheckName);
    await create(group);
    const [metadata] = await group.getMetadata();
    const groupUrl = metadata.selfLink;
    await create(healthCheck);
    const [metadata2] = await healthCheck.getMetadata();
    const healthCheckUrl = metadata2.selfLink;
    await create(service, {
      backends: [
        {
          group: groupUrl,
        },
      ],
      healthChecks: [healthCheckUrl],
    });
  }

  async function deleteHttpsHealthChecks(opts) {
    const [healthChecks] = await compute.getHealthChecks({
      filter: `name eq ${opts.name}.*`,
      https: true,
    });
    return Promise.all(
      filterExpired(healthChecks, opts).map(healthCheck =>
        awaitResult(healthCheck.delete())
      )
    );
  }

  async function deleteUrlMaps(opts) {
    const resp = await computeRequest({
      uri: '/global/urlMaps',
      qs: {
        filter: `name eq ${opts.name}.*`,
      },
    });
    return Promise.all(
      filterExpired(resp.items, opts)
        .map(x => x.name)
        .map(deleteUrlMap)
    );
  }

  async function deleteUrlMap(name) {
    const resp = await computeRequest({
      method: 'DELETE',
      uri: '/global/urlMaps/' + name,
    });
    const operation = compute.operation(resp.name);
    await operation.promise();
  }

  async function deleteTargetProxies(opts) {
    const resp = await computeRequest({
      uri: '/global/targetHttpProxies',
      qs: {
        filter: `name eq ${opts.name}.*`,
      },
    });
    return Promise.all(
      filterExpired(resp.items, opts)
        .map(x => x.name)
        .map(deleteTargetProxy)
    );
  }

  async function deleteTargetProxy(name) {
    const resp = await computeRequest({
      method: 'DELETE',
      uri: '/global/targetHttpProxies/' + name,
    });
    const operation = compute.operation(resp.name);
    await operation.promise();
  }

  async function deleteTargetInstances(opts) {
    const resp = await zoneRequest({
      uri: '/targetInstances',
      qs: {
        filter: `name eq ${opts.name}.*`,
      },
    });
    return Promise.all(
      filterExpired(resp.items, opts)
        .map(x => x.name)
        .map(x => deleteTargetInstance(x))
    );
  }

  async function createTargetInstance(name, instanceName) {
    const resp = await zoneRequest({
      method: 'POST',
      uri: '/targetInstances',
      json: {
        name: name,
        instance: 'zones/' + zone.name + '/instances/' + instanceName,
      },
    });
    const operation = zone.operation(resp.name);
    await operation.promise();
  }

  async function deleteTargetInstance(name) {
    const resp = await zoneRequest({
      method: 'DELETE',
      uri: '/targetInstances/' + name,
    });
    const operation = zone.operation(resp.name);
    await operation.promise();
  }

  async function deleteInstanceTemplates(opts) {
    const resp = await computeRequest({
      uri: '/global/instanceTemplates',
      qs: {
        filter: `name eq ${opts.name}.*`,
      },
    });
    const names = filterExpired(resp.items, opts).map(x => x.name);
    return Promise.all(names.map(x => deleteInstanceTemplate(x)));
  }

  async function createInstanceTemplate(name, networkName) {
    const resp = await computeRequest({
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
    });
    const operation = compute.operation(resp.name);
    await operation.promise();
  }

  async function deleteInstanceTemplate(name) {
    const resp = await computeRequest({
      method: 'DELETE',
      uri: '/global/instanceTemplates/' + name,
    });
    const operation = compute.operation(resp.name);
    await operation.promise();
  }

  async function deleteInstanceGroupManagers(opts) {
    const resp = await zoneRequest({
      uri: '/instanceGroupManagers',
      qs: {
        filter: `name eq ${opts.name}.*`,
      },
    });
    const names = filterExpired(resp.items, opts).map(x => x.name);
    await Promise.all(names.map(name => deleteInstanceGroupManager(name)));
  }

  async function createInstanceGroupManager(name, instanceTemplateName) {
    const resp = await zoneRequest({
      method: 'POST',
      uri: '/instanceGroupManagers',
      json: {
        baseInstanceName: name.replace(/\W/g, ''),
        name: name,
        targetSize: 1,
        instanceTemplate: instanceTemplateName,
      },
    });
    const operation = zone.operation(resp.name);
    await operation.promise();
  }

  async function deleteInstanceGroupManager(name) {
    const resp = await zoneRequest({
      method: 'DELETE',
      uri: '/instanceGroupManagers/' + name,
    });
    const operation = zone.operation(resp.name);
    await operation.promise();
  }
});

async function awaitResult(promise) {
  const result = await promise;
  const operation = result[result.length - 2];
  await operation.promise();
}

function filterExpired(resources, opts) {
  resources = resources || [];
  if (opts.expiredOnly) {
    return resources.filter(isExpired);
  } else {
    return resources;
  }
}

function isExpired(resource) {
  if (
    resource &&
    (resource.creationTimestamp ||
      (resource.metadata && resource.metadata.creationTimestamp))
  ) {
    const created = new Date(
      resource.creationTimestamp || resource.metadata.creationTimestamp
    );
    const age = Date.now() - created.getTime();
    return age > 1000 * 60 * 60;
  } else {
    console.log(resource);
    throw new Error('No Creation Timestamp found!');
  }
}
