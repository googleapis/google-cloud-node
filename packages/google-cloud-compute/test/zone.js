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

const arrify = require('arrify');
const assert = require('assert');
const {GCEImages} = require('gce-images');
const proxyquire = require('proxyquire');
const {ServiceObject, util} = require('@google-cloud/common');
const promisify = require('@google-cloud/promisify');

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  promisifyAll: function (Class, options) {
    if (Class.name !== 'Zone') {
      return;
    }

    promisified = true;
    assert.deepStrictEqual(options.exclude, [
      'autoscaler',
      'disk',
      'instanceGroup',
      'instanceGroupManager',
      'machineType',
      'operation',
      'vm',
    ]);
  },
});

function FakeAutoscaler() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeDisk() {
  this.calledWith_ = [].slice.call(arguments);
}

let formatPortsOverride;
FakeInstanceGroup.formatPorts_ = function () {
  return (formatPortsOverride || util.noop).apply(null, arguments);
};

function FakeInstanceGroup() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeInstanceGroupManager() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeMachineType() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeOperation() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeVM() {
  this.calledWith_ = [].slice.call(arguments);
}

class FakeServiceObject extends ServiceObject {
  constructor(config) {
    super(config);
    this.calledWith_ = arguments;
  }
}

let extended = false;
const fakePaginator = {
  paginator: {
    extend: function (Class, methods) {
      if (Class.name !== 'Zone') {
        return;
      }

      extended = true;
      methods = arrify(methods);
      assert.strictEqual(Class.name, 'Zone');
      assert.deepStrictEqual(methods, [
        'getAutoscalers',
        'getDisks',
        'getInstanceGroups',
        'getInstanceGroupManagers',
        'getMachineTypes',
        'getOperations',
        'getVMs',
      ]);
    },
    streamify: function (methodName) {
      return methodName;
    },
  },
};

describe('Zone', () => {
  let Zone;
  let zone;

  const COMPUTE = {
    authClient: {},
    projectId: 'project-id',
  };
  const ZONE_NAME = 'us-central1-a';

  before(() => {
    Zone = proxyquire('../src/zone.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/paginator': fakePaginator,
      '@google-cloud/promisify': fakePromisify,
      './autoscaler.js': FakeAutoscaler,
      './disk.js': FakeDisk,
      './instance-group.js': FakeInstanceGroup,
      './instance-group-manager.js': FakeInstanceGroupManager,
      './machine-type.js': FakeMachineType,
      './operation.js': FakeOperation,
      './vm.js': FakeVM,
    });
  });

  beforeEach(() => {
    formatPortsOverride = null;
    zone = new Zone(COMPUTE, ZONE_NAME);
  });

  describe('instantiation', () => {
    it('should extend the correct methods', () => {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should streamify the correct methods', () => {
      assert.strictEqual(zone.getAutoscalersStream, 'getAutoscalers');
      assert.strictEqual(zone.getDisksStream, 'getDisks');
      assert.strictEqual(zone.getInstanceGroupsStream, 'getInstanceGroups');
      assert.strictEqual(zone.getMachineTypesStream, 'getMachineTypes');
      assert.strictEqual(zone.getOperationsStream, 'getOperations');
      assert.strictEqual(zone.getVMsStream, 'getVMs');
    });

    it('should localize the compute instance', () => {
      assert.strictEqual(zone.compute, COMPUTE);
    });

    it('should localize the name', () => {
      assert.strictEqual(zone.name, ZONE_NAME);
    });

    it('should create a gceImages instance', () => {
      const newZone = new Zone(COMPUTE, ZONE_NAME);
      assert(newZone.gceImages instanceof GCEImages);
      assert.strictEqual(newZone.gceImages._auth, COMPUTE.authClient);
    });

    it('should inherit from ServiceObject', () => {
      assert(zone instanceof ServiceObject);

      const calledWith = zone.calledWith_[0];

      assert.strictEqual(calledWith.parent, COMPUTE);
      assert.strictEqual(calledWith.baseUrl, '/zones');
      assert.strictEqual(calledWith.id, ZONE_NAME);
      assert.deepStrictEqual(calledWith.methods, {
        exists: true,
        get: true,
        getMetadata: true,
      });
    });
  });

  describe('autoscaler', () => {
    const NAME = 'autoscaler-name';

    it('should return an Autoscaler object', () => {
      const autoscaler = zone.autoscaler(NAME);
      assert(autoscaler instanceof FakeAutoscaler);
      assert.strictEqual(autoscaler.calledWith_[0], zone);
      assert.strictEqual(autoscaler.calledWith_[1], NAME);
    });
  });

  describe('createAutoscaler', () => {
    const NAME = 'autoscaler-name';
    const TARGET = 'target';

    beforeEach(() => {
      zone.request = util.noop;
    });

    it('should throw if a target is not provided', () => {
      assert.throws(() => {
        zone.createAutoscaler(NAME, {}, assert.ifError);
      }, /Cannot create an autoscaler without a target\./);
    });

    it('should make the correct request', done => {
      const config = {
        target: TARGET,
      };

      zone.request = function (reqOpts) {
        assert.strictEqual(reqOpts.json.name, NAME);
        done();
      };

      zone.createAutoscaler(NAME, config, assert.ifError);
    });

    it('should use a provided autoscalingPolicy', done => {
      const config = {
        autoscalingPolicy: {
          a: 'b',
          c: 'd',
        },
        target: TARGET,
      };

      zone.request = function (reqOpts) {
        const policy = reqOpts.json.autoscalingPolicy;
        assert.deepStrictEqual(policy, config.autoscalingPolicy);
        done();
      };

      zone.createAutoscaler(NAME, config, assert.ifError);
    });

    describe('config.target', () => {
      it('should use a provided http target', done => {
        const config = {
          target: 'http://my-target',
        };

        zone.request = function (reqOpts) {
          assert.strictEqual(reqOpts.json.target, config.target);
          done();
        };

        zone.createAutoscaler(NAME, config, assert.ifError);
      });

      it('should use a provided https target', done => {
        const config = {
          target: 'https://my-target',
        };

        zone.request = function (reqOpts) {
          assert.strictEqual(reqOpts.json.target, config.target);
          done();
        };

        zone.createAutoscaler(NAME, config, assert.ifError);
      });

      it('should create a full target URL', done => {
        const config = {
          target: 'my-target',
        };

        zone.request = function (reqOpts) {
          const expectedTarget = [
            'https://content.googleapis.com/compute/v1/projects/',
            COMPUTE.projectId,
            '/zones/',
            zone.name,
            '/instanceGroupManagers/',
            config.target,
          ].join('');

          assert.strictEqual(reqOpts.json.target, expectedTarget);

          done();
        };

        zone.createAutoscaler(NAME, config, assert.ifError);
      });
    });

    describe('config.coolDown', () => {
      it('should set coolDownPeriodSec', done => {
        const config = {
          coolDown: 80,
          target: TARGET,
        };

        zone.request = function (reqOpts) {
          const policy = reqOpts.json.autoscalingPolicy;
          assert.strictEqual(policy.coolDownPeriodSec, config.coolDown);
          assert.strictEqual(reqOpts.coolDown, undefined);
          done();
        };

        zone.createAutoscaler(NAME, config, assert.ifError);
      });
    });

    describe('config.cpu', () => {
      it('should set cpuUtilization', done => {
        const config = {
          cpu: 80,
          target: TARGET,
        };

        zone.request = function (reqOpts) {
          const policy = reqOpts.json.autoscalingPolicy;
          const cpu = policy.cpuUtilization;
          assert.strictEqual(cpu.utilizationTarget, config.cpu / 100);
          assert.strictEqual(reqOpts.cpu, undefined);
          done();
        };

        zone.createAutoscaler(NAME, config, assert.ifError);
      });
    });

    describe('config.loadBalance', () => {
      it('should set loadBalancingUtilization', done => {
        const config = {
          loadBalance: 80,
          target: TARGET,
        };

        zone.request = function (reqOpts) {
          const policy = reqOpts.json.autoscalingPolicy;
          const lb = policy.loadBalancingUtilization;
          assert.strictEqual(lb.utilizationTarget, config.loadBalance / 100);
          assert.strictEqual(reqOpts.loadBalance, undefined);
          done();
        };

        zone.createAutoscaler(NAME, config, assert.ifError);
      });
    });

    describe('config.maxReplicas', () => {
      it('should set maxNumReplicas', done => {
        const config = {
          maxReplicas: 10,
          target: TARGET,
        };

        zone.request = function (reqOpts) {
          const policy = reqOpts.json.autoscalingPolicy;
          assert.strictEqual(policy.maxNumReplicas, config.maxReplicas);
          assert.strictEqual(reqOpts.maxReplicas, undefined);
          done();
        };

        zone.createAutoscaler(NAME, config, assert.ifError);
      });
    });

    describe('config.minReplicas', () => {
      it('should set minNumReplicas', done => {
        const config = {
          minReplicas: 10,
          target: TARGET,
        };

        zone.request = function (reqOpts) {
          const policy = reqOpts.json.autoscalingPolicy;
          assert.strictEqual(policy.minNumReplicas, config.minReplicas);
          assert.strictEqual(reqOpts.minReplicas, undefined);
          done();
        };

        zone.createAutoscaler(NAME, config, assert.ifError);
      });
    });

    describe('API request', () => {
      const CONFIG = {
        a: 'b',
        c: 'd',
        target: 'http://target',
      };

      const expectedBody = {
        name: NAME,
        target: 'http://target',
        autoscalingPolicy: {},
        a: 'b',
        c: 'd',
      };

      it('should make the correct API request', done => {
        zone.request = function (reqOpts) {
          assert.strictEqual(reqOpts.method, 'POST');
          assert.strictEqual(reqOpts.uri, '/autoscalers');
          assert.deepStrictEqual(reqOpts.json, expectedBody);

          done();
        };

        zone.createAutoscaler(NAME, CONFIG, assert.ifError);
      });

      describe('error', () => {
        const error = new Error('Error.');
        const apiResponse = {a: 'b', c: 'd'};

        beforeEach(() => {
          zone.request = function (reqOpts, callback) {
            callback(error, apiResponse);
          };
        });

        it('should execute callback with error & API response', done => {
          zone.createAutoscaler(NAME, CONFIG, (err, as, op, apiResp) => {
            assert.strictEqual(err, error);
            assert.strictEqual(as, null);
            assert.strictEqual(op, null);
            assert.strictEqual(apiResp, apiResponse);
            done();
          });
        });
      });

      describe('success', () => {
        const apiResponse = {name: 'operation-name'};

        beforeEach(() => {
          zone.request = function (reqOpts, callback) {
            callback(null, apiResponse);
          };
        });

        it('should exec callback with AutoS, Op & apiResponse', done => {
          const autoscaler = {};
          const operation = {};

          zone.autoscaler = function (name) {
            assert.strictEqual(name, NAME);
            return autoscaler;
          };

          zone.operation = function (name) {
            assert.strictEqual(name, apiResponse.name);
            return operation;
          };

          zone.createAutoscaler(NAME, CONFIG, (err, as, op, apiResp) => {
            assert.ifError(err);

            assert.strictEqual(as, autoscaler);

            assert.strictEqual(op, operation);
            assert.strictEqual(op.metadata, apiResp);

            assert.strictEqual(apiResp, apiResponse);
            done();
          });
        });
      });
    });
  });

  describe('createDisk', () => {
    const NAME = 'disk-name';

    beforeEach(() => {
      zone.request = util.noop;
    });

    it('should use the image property as qs.sourceImages', done => {
      const config = {
        image: 'abc',
      };

      zone.request = function (reqOpts) {
        assert.strictEqual(reqOpts.qs.sourceImage, config.image);
        done();
      };

      zone.createDisk(NAME, config, assert.ifError);
    });

    describe('config.os', () => {
      const CONFIG = {
        os: 'os-name',
      };

      it('should get the latest image', done => {
        zone.gceImages.getLatest = function (os) {
          assert.strictEqual(os, CONFIG.os);
          done();
        };

        zone.createDisk(NAME, CONFIG, assert.ifError);
      });

      describe('error', () => {
        const error = new Error('Error.');

        beforeEach(() => {
          zone.gceImages.getLatest = function (os, callback) {
            callback(error);
          };
        });

        it('should execute callback with error', done => {
          zone.createDisk(NAME, CONFIG, err => {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('success', () => {
        const gceImagesResp = {
          selfLink: 'http://selflink',
        };

        const expectedConfig = {
          name: NAME,
          sourceImage: gceImagesResp.selfLink,
        };

        it('should call createDisk with the correct config', done => {
          zone.gceImages.getLatest = function (os, callback) {
            zone.createDisk = function (name, config, callback) {
              assert.strictEqual(name, NAME);
              assert.deepStrictEqual(config, expectedConfig);
              callback();
            };

            callback(null, gceImagesResp);
          };

          zone.createDisk(NAME, CONFIG, done);
        });
      });
    });

    describe('API request', () => {
      const CONFIG = {
        a: 'b',
        c: 'd',
      };

      const expectedBody = {
        name: NAME,
        a: 'b',
        c: 'd',
      };

      it('should make the correct API request', done => {
        zone.request = function (reqOpts) {
          assert.strictEqual(reqOpts.method, 'POST');
          assert.strictEqual(reqOpts.uri, '/disks');
          assert.deepStrictEqual(reqOpts.qs, {});
          assert.deepStrictEqual(reqOpts.json, expectedBody);

          done();
        };

        zone.createDisk(NAME, CONFIG, assert.ifError);
      });

      describe('error', () => {
        const error = new Error('Error.');
        const apiResponse = {a: 'b', c: 'd'};

        beforeEach(() => {
          zone.request = function (reqOpts, callback) {
            callback(error, apiResponse);
          };
        });

        it('should execute callback with error & API response', done => {
          zone.createDisk(NAME, CONFIG, (err, disk, op, apiResp) => {
            assert.strictEqual(err, error);
            assert.strictEqual(disk, null);
            assert.strictEqual(op, null);
            assert.strictEqual(apiResp, apiResponse);
            done();
          });
        });
      });

      describe('success', () => {
        const apiResponse = {name: 'operation-name'};

        beforeEach(() => {
          zone.request = function (reqOpts, callback) {
            callback(null, apiResponse);
          };
        });

        it('should exec callback with Disk, Op & apiResponse', done => {
          const disk = {};
          const operation = {};

          zone.disk = function (name) {
            assert.strictEqual(name, NAME);
            return disk;
          };

          zone.operation = function (name) {
            assert.strictEqual(name, apiResponse.name);
            return operation;
          };

          zone.createDisk(NAME, CONFIG, (err, disk_, op, apiResp) => {
            assert.ifError(err);

            assert.strictEqual(disk_, disk);

            assert.strictEqual(op, operation);
            assert.strictEqual(op.metadata, apiResp);

            assert.strictEqual(apiResp, apiResponse);
            done();
          });
        });
      });
    });
  });

  describe('createInstanceGroup', () => {
    const NAME = 'instance-group';

    beforeEach(() => {
      zone.request = util.noop;
    });

    describe('options.ports', () => {
      const PORTS = {
        http: 80,
        https: 443,
      };

      it('should format named ports', done => {
        const expectedNamedPorts = [];

        formatPortsOverride = function (ports) {
          assert.strictEqual(ports, PORTS);
          return expectedNamedPorts;
        };

        zone.request = function (reqOpts) {
          assert.strictEqual(reqOpts.json.namedPorts, expectedNamedPorts);
          assert.strictEqual(reqOpts.json.ports, undefined);
          done();
        };

        zone.createInstanceGroup(NAME, {ports: PORTS}, assert.ifError);
      });
    });

    describe('API request', () => {
      const OPTIONS = {
        a: 'b',
        c: 'd',
      };

      const expectedBody = {
        name: NAME,
        a: 'b',
        c: 'd',
      };

      it('should make the correct API request', done => {
        zone.request = function (reqOpts) {
          assert.strictEqual(reqOpts.method, 'POST');
          assert.strictEqual(reqOpts.uri, '/instanceGroups');
          assert.deepStrictEqual(reqOpts.json, expectedBody);

          done();
        };

        zone.createInstanceGroup(NAME, OPTIONS, assert.ifError);
      });

      it('should not require options', done => {
        zone.request = function (reqOpts) {
          assert.deepStrictEqual(reqOpts.json, {name: NAME});
          done();
        };

        zone.createInstanceGroup(NAME, assert.ifError);
      });

      describe('error', () => {
        const error = new Error('Error.');
        const apiResponse = {a: 'b', c: 'd'};

        beforeEach(() => {
          zone.request = function (reqOpts, callback) {
            callback(error, apiResponse);
          };
        });

        it('should execute callback with error & API response', done => {
          zone.createInstanceGroup(NAME, OPTIONS, (err, ig, op, resp) => {
            assert.strictEqual(err, error);
            assert.strictEqual(ig, null);
            assert.strictEqual(op, null);
            assert.strictEqual(resp, apiResponse);
            done();
          });
        });
      });

      describe('success', () => {
        const apiResponse = {name: 'operation-name'};

        beforeEach(() => {
          zone.request = function (reqOpts, callback) {
            callback(null, apiResponse);
          };
        });

        it('should exec callback with Group, Op & apiResponse', done => {
          const instanceGroup = {};
          const operation = {};

          zone.instanceGroup = function (name) {
            assert.strictEqual(name, NAME);
            return instanceGroup;
          };

          zone.operation = function (name) {
            assert.strictEqual(name, apiResponse.name);
            return operation;
          };

          zone.createInstanceGroup(NAME, OPTIONS, (err, ig, op, resp) => {
            assert.ifError(err);

            assert.strictEqual(ig, instanceGroup);

            assert.strictEqual(op, operation);
            assert.strictEqual(op.metadata, resp);

            assert.strictEqual(resp, apiResponse);
            done();
          });
        });
      });
    });
  });

  describe('createVM', () => {
    const NAME = 'new-vm';

    const CONFIG = {};

    const EXPECTED_CONFIG = {
      name: NAME,
      machineType: 'zones/' + ZONE_NAME + '/machineTypes/n1-standard-1',
      networkInterfaces: [
        {
          network: 'global/networks/default',
        },
      ],
    };

    describe('config.template', () => {
      const CONFIG = {
        template: '/path/to/template',
      };

      it('should define sourceInstanceTemplate', done => {
        zone.request = function (reqOpts) {
          assert.strictEqual(
            reqOpts.qs.sourceInstanceTemplate,
            CONFIG.template
          );
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });
    });

    describe('config.machineType', () => {
      const CONFIG = {
        machineType: 'f1-micro',
      };

      it('should format a given machine type', done => {
        zone.request = function (reqOpts) {
          assert.strictEqual(
            reqOpts.json.machineType,
            'zones/' + ZONE_NAME + '/machineTypes/' + CONFIG.machineType
          );
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });
    });

    describe('config.tags', () => {
      const CONFIG = {
        tags: ['a', 'b'],
      };

      it('should accept an array of tags', done => {
        zone.request = function (reqOpts) {
          assert.deepStrictEqual(reqOpts.json.tags.items, CONFIG.tags);
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });
    });

    describe('config.http', () => {
      const CONFIG = {
        http: true,
      };

      beforeEach(() => {
        zone.createHttpServerFirewall_ = function (callback) {
          callback();
        };
      });

      it('should execute cb with error from creating firewall', done => {
        const error = new Error('Error.');

        zone.createHttpServerFirewall_ = function (callback) {
          callback(error);
        };

        zone.createVM(NAME, CONFIG, err => {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should create a firewall rule', done => {
        zone.createHttpServerFirewall_ = function () {
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      it('should add a network interface accessConfig', done => {
        zone.request = function (reqOpts) {
          assert.deepStrictEqual(
            reqOpts.json.networkInterfaces[0].accessConfigs[0],
            {
              type: 'ONE_TO_ONE_NAT',
            }
          );
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      it('should add an http tag', done => {
        zone.request = function (reqOpts) {
          assert(reqOpts.json.tags.items.indexOf('http-server') > -1);
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      it('should not overwrite existing tags', done => {
        const config = {
          http: true,
          tags: {
            items: ['a', 'b'],
          },
        };

        const expectedTags = ['a', 'b', 'http-server'];

        zone.request = function (reqOpts) {
          assert.deepStrictEqual(reqOpts.json.tags.items, expectedTags);
          done();
        };

        zone.createVM(NAME, config, assert.ifError);
      });

      it('should delete the https property', done => {
        zone.request = function (reqOpts) {
          assert.strictEqual(reqOpts.json.https, undefined);
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });
    });

    describe('config.https', () => {
      const CONFIG = {
        https: true,
      };

      beforeEach(() => {
        zone.createHttpsServerFirewall_ = function (callback) {
          callback();
        };
      });

      it('should execute cb with error from creating firewall', done => {
        const error = new Error('Error.');

        zone.createHttpsServerFirewall_ = function (callback) {
          callback(error);
        };

        zone.createVM(NAME, CONFIG, err => {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should create a firewall rule', done => {
        zone.createHttpsServerFirewall_ = function () {
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      it('should add a network interface accessConfig', done => {
        zone.request = function (reqOpts) {
          assert.deepStrictEqual(
            reqOpts.json.networkInterfaces[0].accessConfigs[0],
            {
              type: 'ONE_TO_ONE_NAT',
            }
          );
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      it('should add an https tag', done => {
        zone.request = function (reqOpts) {
          assert(reqOpts.json.tags.items.indexOf('https-server') > -1);
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      it('should not overwrite existing tags', done => {
        const config = {
          https: true,
          tags: {
            items: ['a', 'b'],
          },
        };

        const expectedTags = ['a', 'b', 'https-server'];

        zone.request = function (reqOpts) {
          assert.deepStrictEqual(reqOpts.json.tags.items, expectedTags);
          done();
        };

        zone.createVM(NAME, config, assert.ifError);
      });

      it('should delete the https property', done => {
        zone.request = function (reqOpts) {
          assert.strictEqual(reqOpts.json.https, undefined);
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });
    });

    describe('config.os', () => {
      const CONFIG = {
        os: 'os-name',
      };

      it('should get the latest image', done => {
        zone.gceImages.getLatest = function (os) {
          assert.strictEqual(os, CONFIG.os);
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      describe('error', () => {
        const error = new Error('Error.');

        beforeEach(() => {
          zone.gceImages.getLatest = function (os, callback) {
            callback(error);
          };
        });

        it('should execute callback with error', done => {
          zone.createVM(NAME, CONFIG, err => {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('success', () => {
        const gceImagesResp = {
          selfLink: 'http://selflink',
        };

        const expectedConfig = Object.assign({}, EXPECTED_CONFIG, {
          disks: [
            {
              autoDelete: true,
              boot: true,
              initializeParams: {
                sourceImage: gceImagesResp.selfLink,
              },
            },
          ],
        });

        it('should call createVM with the correct config', done => {
          zone.gceImages.getLatest = function (os, callback) {
            zone.createVM = function (name, config, callback) {
              assert.strictEqual(name, NAME);
              assert.deepStrictEqual(config, expectedConfig);
              callback();
            };

            callback(null, gceImagesResp);
          };

          zone.createVM(NAME, CONFIG, done);
        });
      });
    });

    describe('API request', () => {
      it('should make the correct API request', done => {
        zone.request = function (reqOpts) {
          assert.strictEqual(reqOpts.method, 'POST');
          assert.strictEqual(reqOpts.uri, '/instances');
          assert.deepStrictEqual(reqOpts.json, EXPECTED_CONFIG);

          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      describe('error', () => {
        const error = new Error('Error.');
        const apiResponse = {a: 'b', c: 'd'};

        beforeEach(() => {
          zone.request = function (reqOpts, callback) {
            callback(error, apiResponse);
          };
        });

        it('should execute callback with error & API response', done => {
          zone.createVM(NAME, CONFIG, (err, vm, op, apiResp) => {
            assert.strictEqual(err, error);
            assert.strictEqual(vm, null);
            assert.strictEqual(op, null);
            assert.strictEqual(apiResp, apiResponse);
            done();
          });
        });
      });

      describe('success', () => {
        const apiResponse = {name: 'operation-name'};

        beforeEach(() => {
          zone.request = function (reqOpts, callback) {
            callback(null, apiResponse);
          };
        });

        it('should exec callback with Disk, Op & apiResponse', done => {
          const vm = {};
          const operation = {};

          zone.vm = function (name) {
            assert.strictEqual(name, NAME);
            return vm;
          };

          zone.operation = function (name) {
            assert.strictEqual(name, apiResponse.name);
            return operation;
          };

          zone.createVM(NAME, CONFIG, (err, vm_, op, apiResp) => {
            assert.ifError(err);

            assert.strictEqual(vm_, vm);

            assert.strictEqual(op, operation);
            assert.strictEqual(op.metadata, apiResp);

            assert.strictEqual(apiResp, apiResponse);
            done();
          });
        });
      });
    });
  });

  describe('disk', () => {
    const NAME = 'disk-name';

    it('should return a Disk object', () => {
      const disk = zone.disk(NAME);
      assert(disk instanceof FakeDisk);
      assert.strictEqual(disk.calledWith_[0], zone);
      assert.strictEqual(disk.calledWith_[1], NAME);
    });
  });

  describe('getAutoscalers', () => {
    it('should accept only a callback', done => {
      zone.request = function (reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      zone.getAutoscalers(assert.ifError);
    });

    it('should make the correct API request', done => {
      const query = {a: 'b', c: 'd'};

      zone.request = function (reqOpts) {
        assert.strictEqual(reqOpts.uri, '/autoscalers');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      zone.getAutoscalers(query, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        zone.request = function (reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        zone.getAutoscalers({}, (err, autoscalers, nextQuery, apiResp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(autoscalers, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        items: [{name: 'autoscaler-name'}],
      };

      beforeEach(() => {
        zone.request = function (reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', done => {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        const expectedNextQuery = {
          pageToken: nextPageToken,
        };

        zone.request = function (reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getAutoscalers({}, (err, disks, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Autoscalers & API resp', done => {
        const autoscaler = {};

        zone.autoscaler = function (name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return autoscaler;
        };

        zone.getAutoscalers({}, (err, autoscalers, nextQuery, apiResp) => {
          assert.ifError(err);

          assert.strictEqual(autoscalers[0], autoscaler);
          assert.strictEqual(autoscalers[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResp, apiResponse);

          done();
        });
      });
    });
  });

  describe('getDisks', () => {
    it('should accept only a callback', done => {
      zone.request = function (reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      zone.getDisks(assert.ifError);
    });

    it('should make the correct API request', done => {
      const query = {a: 'b', c: 'd'};

      zone.request = function (reqOpts) {
        assert.strictEqual(reqOpts.uri, '/disks');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      zone.getDisks(query, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        zone.request = function (reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        zone.getDisks({}, (err, disks, nextQuery, apiResp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(disks, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        items: [{name: 'disk-name'}],
      };

      beforeEach(() => {
        zone.request = function (reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', done => {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        const expectedNextQuery = {
          pageToken: nextPageToken,
        };

        zone.request = function (reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getDisks({}, (err, disks, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Disks & API resp', done => {
        const disk = {};

        zone.disk = function (name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return disk;
        };

        zone.getDisks({}, (err, disks, nextQuery, apiResp) => {
          assert.ifError(err);

          assert.strictEqual(disks[0], disk);
          assert.strictEqual(disks[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResp, apiResponse);

          done();
        });
      });
    });
  });

  describe('getInstanceGroups', () => {
    it('should accept only a callback', done => {
      zone.request = function (reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      zone.getInstanceGroups(assert.ifError);
    });

    it('should make the correct API request', done => {
      const query = {a: 'b', c: 'd'};

      zone.request = function (reqOpts) {
        assert.strictEqual(reqOpts.uri, '/instanceGroups');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      zone.getInstanceGroups(query, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        zone.request = function (reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        zone.getInstanceGroups({}, (err, groups, nextQuery, apiResp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(groups, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        items: [{name: 'operation-name'}],
      };

      beforeEach(() => {
        zone.request = function (reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', done => {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        const expectedNextQuery = {
          pageToken: nextPageToken,
        };

        zone.request = function (reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getInstanceGroups({}, (err, groups, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Groups & API resp', done => {
        const group = {};

        zone.instanceGroup = function (name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return group;
        };

        zone.getInstanceGroups({}, (err, groups, nextQuery, apiResp) => {
          assert.ifError(err);

          assert.strictEqual(groups[0], group);
          assert.strictEqual(groups[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResp, apiResponse);

          done();
        });
      });
    });
  });

  describe('getInstanceGroupManagers', () => {
    it('should accept only a callback', done => {
      zone.request = function (reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      zone.getInstanceGroupManagers(assert.ifError);
    });

    it('should make the correct API request', done => {
      const query = {a: 'b', c: 'd'};

      zone.request = function (reqOpts) {
        assert.strictEqual(reqOpts.uri, '/instanceGroupManagers');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      zone.getInstanceGroupManagers(query, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        zone.request = function (reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        zone.getInstanceGroupManagers({}, (err, groups, nextQuery, apiResp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(groups, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        items: [{name: 'operation-name'}],
      };

      beforeEach(() => {
        zone.request = function (reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', done => {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        const expectedNextQuery = {
          pageToken: nextPageToken,
        };

        zone.request = function (reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getInstanceGroupManagers({}, (err, groups, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Groups & API resp', done => {
        const group = {};

        zone.instanceGroupManager = function (name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return group;
        };

        zone.getInstanceGroupManagers({}, (err, groups, nextQuery, apiResp) => {
          assert.ifError(err);

          assert.strictEqual(groups[0], group);
          assert.strictEqual(groups[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResp, apiResponse);

          done();
        });
      });
    });
  });

  describe('getMachineTypes', () => {
    it('should make the correct call to Compute', done => {
      const options = {a: 'b', c: 'd'};
      const expectedOptions = Object.assign({}, options, {
        filter: 'zone eq .*' + zone.name,
      });

      zone.compute.getMachineTypes = function (options, callback) {
        assert.deepStrictEqual(options, expectedOptions);
        callback();
      };

      zone.getMachineTypes(options, done);
    });

    it('should not require options', done => {
      zone.compute.getMachineTypes = function (options, callback) {
        callback();
      };

      zone.getMachineTypes(done);
    });

    it('should not require any arguments', done => {
      zone.compute.getMachineTypes = function (options, callback) {
        assert.deepStrictEqual(options, {
          filter: 'zone eq .*' + zone.name,
        });
        assert.strictEqual(typeof callback, 'undefined');
        done();
      };

      zone.getMachineTypes();
    });

    it('should return the result of compute.getMachineTypes', () => {
      const resultOfGetMachineTypes = {};

      zone.compute.getMachineTypes = function () {
        return resultOfGetMachineTypes;
      };

      assert.strictEqual(zone.getMachineTypes(), resultOfGetMachineTypes);
    });
  });

  describe('getOperations', () => {
    it('should accept only a callback', done => {
      zone.request = function (reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      zone.getOperations(assert.ifError);
    });

    it('should make the correct API request', done => {
      const query = {a: 'b', c: 'd'};

      zone.request = function (reqOpts) {
        assert.strictEqual(reqOpts.uri, '/operations');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      zone.getOperations(query, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        zone.request = function (reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        zone.getOperations({}, (err, operations, nextQuery, apiResp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        items: [{name: 'operation-name'}],
      };

      beforeEach(() => {
        zone.request = function (reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', done => {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        const expectedNextQuery = {
          pageToken: nextPageToken,
        };

        zone.request = function (reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getOperations({}, (err, operations, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Operations & API resp', done => {
        const operation = {};

        zone.operation = function (name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return operation;
        };

        zone.getOperations({}, (err, operations, nextQuery, apiResp) => {
          assert.ifError(err);

          assert.strictEqual(operations[0], operation);
          assert.strictEqual(operations[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResp, apiResponse);

          done();
        });
      });
    });
  });

  describe('getVMs', () => {
    it('should accept only a callback', done => {
      zone.request = function (reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      zone.getVMs(assert.ifError);
    });

    it('should make the correct API request', done => {
      const query = {a: 'b', c: 'd'};

      zone.request = function (reqOpts) {
        assert.strictEqual(reqOpts.uri, '/instances');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      zone.getVMs(query, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        zone.request = function (reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        zone.getVMs({}, (err, vms, nextQuery, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        items: [{name: 'vm-name'}],
      };

      beforeEach(() => {
        zone.request = function (reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', done => {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        const expectedNextQuery = {
          pageToken: nextPageToken,
        };

        zone.request = function (reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getVMs({}, (err, vms, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with VMs & API response', done => {
        const vm = {};

        zone.vm = function (name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return vm;
        };

        zone.getVMs({}, (err, vms, nextQuery, apiResponse_) => {
          assert.ifError(err);

          assert.strictEqual(vms[0], vm);
          assert.strictEqual(vms[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });
  });

  describe('instanceGroup', () => {
    const NAME = 'instance-group';

    it('should return an InstanceGroup object', () => {
      const instanceGroup = zone.instanceGroup(NAME);
      assert(instanceGroup instanceof FakeInstanceGroup);
      assert.strictEqual(instanceGroup.calledWith_[0], zone);
      assert.strictEqual(instanceGroup.calledWith_[1], NAME);
    });
  });

  describe('instanceGroupManager', () => {
    const NAME = 'instance-group-manager';

    it('should return an InstanceGroupManager object', () => {
      const instanceGroupManager = zone.instanceGroupManager(NAME);
      assert(instanceGroupManager instanceof FakeInstanceGroupManager);
      assert.strictEqual(instanceGroupManager.calledWith_[0], zone);
      assert.strictEqual(instanceGroupManager.calledWith_[1], NAME);
    });
  });

  describe('machineType', () => {
    const NAME = 'machine-name';

    it('should return a MachineType object', () => {
      const machineType = zone.machineType(NAME);

      assert(machineType instanceof FakeMachineType);
      assert.strictEqual(machineType.calledWith_[0], zone);
      assert.strictEqual(machineType.calledWith_[1], NAME);
    });
  });

  describe('operation', () => {
    const NAME = 'operation-name';

    it('should return an Operation object', () => {
      const operation = zone.operation(NAME);
      assert(operation instanceof FakeOperation);
      assert.strictEqual(operation.calledWith_[0], zone);
      assert.strictEqual(operation.calledWith_[1], NAME);
    });
  });

  describe('vm', () => {
    const NAME = 'vm-name';

    it('should return a VM object', () => {
      const vm = zone.vm(NAME);
      assert(vm instanceof FakeVM);
      assert.strictEqual(vm.calledWith_[0], zone);
      assert.strictEqual(vm.calledWith_[1], NAME);
    });
  });

  describe('createHttpServerFirewall_', () => {
    it('should create a firewall rule', done => {
      zone.compute.createFirewall = function (name, config) {
        assert.strictEqual(name, 'default-allow-http');
        assert.deepStrictEqual(config, {
          protocols: {
            tcp: [80],
          },
          ranges: ['0.0.0.0/0'],
          tags: ['http-server'],
        });

        done();
      };

      zone.createHttpServerFirewall_(assert.ifError);
    });

    it('should execute callback with error & API response', done => {
      const error = new Error('Error.');

      zone.compute.createFirewall = function (name, config, callback) {
        callback(error);
      };

      zone.createHttpServerFirewall_(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should not execute callback with error if 409', done => {
      const error = new Error('Error.');
      error.code = 409;

      const apiResponse = {};

      zone.compute.createFirewall = function (name, config, callback) {
        callback(error, null, apiResponse);
      };

      zone.createHttpServerFirewall_(err => {
        assert.strictEqual(err, null);
        done();
      });
    });
  });

  describe('createHttpsServerFirewall_', () => {
    it('should create a firewall rule', done => {
      zone.compute.createFirewall = function (name, config) {
        assert.strictEqual(name, 'default-allow-https');
        assert.deepStrictEqual(config, {
          protocols: {
            tcp: [443],
          },
          ranges: ['0.0.0.0/0'],
          tags: ['https-server'],
        });

        done();
      };

      zone.createHttpsServerFirewall_(assert.ifError);
    });

    it('should execute callback with error & API response', done => {
      const error = new Error('Error.');

      zone.compute.createFirewall = function (name, config, callback) {
        callback(error);
      };

      zone.createHttpsServerFirewall_(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should not execute callback with error if 409', done => {
      const error = new Error('Error.');
      error.code = 409;

      zone.compute.createFirewall = function (name, config, callback) {
        callback(error);
      };

      zone.createHttpsServerFirewall_(err => {
        assert.strictEqual(err, null);
        done();
      });
    });
  });
});
