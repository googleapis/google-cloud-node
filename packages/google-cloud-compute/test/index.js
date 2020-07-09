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
const events = require('events');
const extend = require('extend');
const format = require('string-format-obj');
const proxyquire = require('proxyquire');
const {Service, util} = require('@google-cloud/common');
const promisify = require('@google-cloud/promisify');

const slice = Array.prototype.slice;

const fakeUtil = Object.assign({}, util, {
  makeAuthenticatedRequestFactory: util.noop,
});

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Compute') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, [
      'address',
      'autoscaler',
      'disk',
      'firewall',
      'image',
      'healthCheck',
      'instanceGroup',
      'machineType',
      'network',
      'operation',
      'project',
      'region',
      'rule',
      'service',
      'snapshot',
      'subnetwork',
      'vm',
      'zone',
    ]);
  },
});
const originalFakeUtil = extend(true, {}, fakeUtil);

const fakePaginator = {
  paginator: {
    extend: function(Class, methods) {
      if (Class.name !== 'Compute') {
        return;
      }

      methods = arrify(methods);
      assert.deepStrictEqual(methods, [
        'getAddresses',
        'getAutoscalers',
        'getDisks',
        'getFirewalls',
        'getImages',
        'getHealthChecks',
        'getInstanceGroups',
        'getMachineTypes',
        'getNetworks',
        'getOperations',
        'getRegions',
        'getRules',
        'getServices',
        'getSnapshots',
        'getSubnetworks',
        'getVMs',
        'getZones',
      ]);
    },
    streamify: function(methodName) {
      return methodName;
    },
  },
};

function FakeFirewall() {
  this.calledWith_ = slice.call(arguments);
}

function FakeHealthCheck() {
  this.calledWith_ = slice.call(arguments);
}

function FakeImage() {
  this.calledWith_ = slice.call(arguments);
}

function FakeNetwork() {
  this.calledWith_ = slice.call(arguments);
}

function FakeOperation() {
  this.calledWith_ = slice.call(arguments);
}

function FakeProject() {
  this.calledWith_ = slice.call(arguments);
}

function FakeRegion() {
  this.calledWith_ = slice.call(arguments);
  this.address = function() {
    return {};
  };
  this.subnetwork = function() {
    return {};
  };
}

function FakeRule() {
  this.calledWith_ = slice.call(arguments);
}

class FakeServiceClass {
  constructor() {
    this.calledWith_ = slice.call(arguments);
  }
}

function FakeSnapshot() {
  this.calledWith_ = slice.call(arguments);
}

function FakeZone() {
  this.calledWith_ = slice.call(arguments);
  this.disk = function() {
    return {};
  };
  this.vm = function() {
    return {};
  };
  this.machineType = function() {
    return {};
  };
}

class FakeService extends Service {
  constructor(config, options) {
    super(config, options);
    this.calledWith_ = arguments;
  }
}

describe('Compute', () => {
  let Compute;
  let compute;

  const PROJECT_ID = 'project-id';

  before(function() {
    // Node v4 on Circle times out.
    this.timeout(0);

    Compute = proxyquire('../', {
      '@google-cloud/common': {
        Service: FakeService,
        util: fakeUtil,
      },
      '@google-cloud/paginator': fakePaginator,
      '@google-cloud/promisify': fakePromisify,
      './firewall.js': FakeFirewall,
      './health-check.js': FakeHealthCheck,
      './image.js': FakeImage,
      './network.js': FakeNetwork,
      './operation.js': FakeOperation,
      './project.js': FakeProject,
      './region.js': FakeRegion,
      './rule.js': FakeRule,
      './service.js': FakeServiceClass,
      './snapshot.js': FakeSnapshot,
      './zone.js': FakeZone,
    });
  });

  beforeEach(() => {
    Object.assign(fakeUtil, originalFakeUtil);
    compute = new Compute({
      projectId: PROJECT_ID,
    });
  });

  describe('instantiation', () => {
    it('should return a new instance of Compute', () => {
      const compute = new Compute({projectId: PROJECT_ID});
      assert(compute instanceof Compute);
    });

    it('should inherit from Service', () => {
      assert(compute instanceof Service);

      const calledWith = compute.calledWith_[0];

      const apiEndpoint = 'compute.googleapis.com';
      const baseUrl = `https://${apiEndpoint}/compute/v1`;
      assert.strictEqual(calledWith.apiEndpoint, apiEndpoint);
      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.deepStrictEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/compute',
      ]);
      assert.deepStrictEqual(
        calledWith.packageJson,
        require('../package.json')
      );
    });

    it('should streamify the correct methods', () => {
      assert.strictEqual(compute.getAddressesStream, 'getAddresses');
      assert.strictEqual(compute.getAutoscalersStream, 'getAutoscalers');
      assert.strictEqual(compute.getDisksStream, 'getDisks');
      assert.strictEqual(compute.getInstanceGroupsStream, 'getInstanceGroups');
      assert.strictEqual(compute.getImagesStream, 'getImages');
      assert.strictEqual(compute.getFirewallsStream, 'getFirewalls');
      assert.strictEqual(compute.getHealthChecksStream, 'getHealthChecks');
      assert.strictEqual(compute.getMachineTypesStream, 'getMachineTypes');
      assert.strictEqual(compute.getNetworksStream, 'getNetworks');
      assert.strictEqual(compute.getOperationsStream, 'getOperations');
      assert.strictEqual(compute.getRegionsStream, 'getRegions');
      assert.strictEqual(compute.getRulesStream, 'getRules');
      assert.strictEqual(compute.getServicesStream, 'getServices');
      assert.strictEqual(compute.getSnapshotsStream, 'getSnapshots');
      assert.strictEqual(compute.getSubnetworksStream, 'getSubnetworks');
      assert.strictEqual(compute.getVMsStream, 'getVMs');
      assert.strictEqual(compute.getZonesStream, 'getZones');
    });

    it('should allow overriding the API endpoint', () => {
      const apiEndpoint = 'custom.endpoint.com';
      const compute = new Compute({apiEndpoint});
      const calledWith = compute.calledWith_[0];

      assert.strictEqual(calledWith.apiEndpoint, apiEndpoint);
      assert.strictEqual(
        calledWith.baseUrl,
        `https://${apiEndpoint}/compute/v1`
      );
    });

    it('should localize the poll interval', () => {
      const pollIntervalMs = 9;
      const compute = new Compute({pollIntervalMs});
      assert.strictEqual(compute.pollIntervalMs, pollIntervalMs);
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });
  });

  describe('createFirewall', () => {
    it('should throw if a name is not provided', () => {
      assert.throws(() => {
        compute.createFirewall({}, assert.ifError);
      }, /A firewall name must be provided./);
    });

    it('should throw if config is not provided', () => {
      assert.throws(() => {
        compute.createFirewall('name', assert.ifError);
      }, /A firewall configuration object must be provided./);
    });

    describe('config.protocols', () => {
      it('should format protocols', done => {
        const options = {
          allowed: {
            IPProtocol: 'http',
            ports: [8000],
          },
          protocols: {
            https: [8080, 9000],
            ssh: 22,
            ftp: [],
            ah: false,
            icmp: true,
          },
        };

        compute.request = function(reqOpts) {
          assert.deepStrictEqual(reqOpts.json.allowed, [
            {IPProtocol: 'http', ports: [8000]},
            {IPProtocol: 'https', ports: [8080, 9000]},
            {IPProtocol: 'ssh', ports: [22]},
            {IPProtocol: 'icmp', ports: []},
          ]);
          assert.strictEqual(reqOpts.json.protocols, undefined);
          done();
        };

        compute.createFirewall('name', options, assert.ifError);
      });
    });

    describe('config.ranges', () => {
      it('should format ranges to sourceRanges', done => {
        const options = {
          ranges: '0.0.0.0/0', // non-array to test that it's arrified.
        };

        compute.request = function(reqOpts) {
          assert.deepStrictEqual(reqOpts.json.sourceRanges, [options.ranges]);
          assert.strictEqual(reqOpts.json.ranges, undefined);
          done();
        };

        compute.createFirewall('name', options, assert.ifError);
      });
    });

    describe('config.tags', () => {
      it('should format tags to sourceTags', done => {
        const options = {
          tags: 'tag', // non-array to test that it's arrified.
        };

        compute.request = function(reqOpts) {
          assert.deepStrictEqual(reqOpts.json.sourceTags, [options.tags]);
          assert.strictEqual(reqOpts.json.tags, undefined);
          done();
        };

        compute.createFirewall('name', options, assert.ifError);
      });
    });

    it('should make the correct API request', done => {
      const name = 'new-firewall-name';

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/firewalls');
        assert.deepStrictEqual(reqOpts.json, {name: name});
        done();
      };

      compute.createFirewall(name, {}, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec the callback with error & API response', done => {
        compute.createFirewall('name', {}, (err, firewall, op, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(firewall, null);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Firewall, Operation & apiResp', done => {
        const name = 'name';
        const firewall = {};
        const operation = {};

        compute.firewall = function(name_) {
          assert.strictEqual(name_, name);
          return firewall;
        };

        compute.operation = function(name_) {
          assert.strictEqual(name_, apiResponse.name);
          return operation;
        };

        compute.createFirewall('name', {}, (err, fw, op, resp) => {
          assert.strictEqual(err, null);
          assert.strictEqual(fw, firewall);
          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, apiResponse);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });

  describe('createHealthCheck', () => {
    it('should throw if a name is not provided', () => {
      assert.throws(() => {
        compute.createHealthCheck({}, assert.ifError);
      }, /A health check name must be provided./);
    });

    describe('options.interval', () => {
      it('should set checkIntervalSec', done => {
        const options = {interval: 50};

        compute.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.checkIntervalSec, options.interval);
          assert.strictEqual(reqOpts.json.interval, undefined);
          done();
        };

        compute.createHealthCheck('name', options, assert.ifError);
      });
    });

    describe('config.timeout', () => {
      it('should set timeoutSec', done => {
        const options = {timeout: 50};

        compute.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.timeoutSec, options.timeout);
          assert.strictEqual(reqOpts.json.timeout, undefined);
          done();
        };

        compute.createHealthCheck('name', options, assert.ifError);
      });
    });

    describe('options.https', () => {
      it('should make the correct API request', done => {
        const name = 'https-health-check-name';

        compute.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.https, undefined);
          assert.strictEqual(reqOpts.json.name, name);
          assert.strictEqual(reqOpts.uri, '/global/httpsHealthChecks');
          done();
        };

        compute.createHealthCheck(name, {https: true}, assert.ifError);
      });
    });

    it('should make the correct default API request', done => {
      const name = 'new-health-check-name';
      const options = {a: 'b'};
      const originalOptions = Object.assign({}, options);

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/httpHealthChecks');
        assert.deepStrictEqual(reqOpts.json, {a: 'b', name: name});
        assert.deepStrictEqual(options, originalOptions);
        done();
      };

      compute.createHealthCheck(name, options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec the callback with error & API response', done => {
        compute.createHealthCheck('name', {}, (err, hc, op, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(hc, null);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with HealthCheck, Op, & apiResp', done => {
        const name = 'name';
        const healthCheck = {};
        const operation = {};

        compute.healthCheck = function(name_, options) {
          assert.strictEqual(name_, name);
          assert.deepStrictEqual(options.https, undefined);
          return healthCheck;
        };

        compute.operation = function(name_) {
          assert.strictEqual(name_, apiResponse.name);
          return operation;
        };

        compute.createHealthCheck('name', {}, (err, hc, op, resp) => {
          assert.strictEqual(err, null);
          assert.strictEqual(hc, healthCheck);
          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, apiResponse);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });

      it('should create an HTTPS HealthCheck object', done => {
        const name = 'name';

        compute.healthCheck = function(name_, options) {
          assert.strictEqual(name_, name);
          assert.strictEqual(options.https, true);
          done();
        };

        compute.createHealthCheck('name', {https: true}, assert.ifError);
      });
    });
  });

  describe('createImage', () => {
    const NAME = 'image-name';

    const DISK = {
      name: 'disk-name',
      zone: {
        name: 'zone-name',
      },
    };

    beforeEach(() => {
      fakeUtil.isCustomType = function() {
        return true;
      };
    });

    it('should throw if Disk is not provided', () => {
      fakeUtil.isCustomType = function(unknown, type) {
        assert.strictEqual(unknown, DISK);
        assert.strictEqual(type, 'Disk');
        return false;
      };

      assert.throws(() => {
        compute.createImage(NAME, DISK);
      }, /A Disk object is required\./);
    });

    it('should make the correct API request', done => {
      const options = {
        a: 'b',
        c: 'd',
      };

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/images');
        assert.deepStrictEqual(reqOpts.json, {
          name: NAME,
          sourceDisk: format('zones/{zoneName}/disks/{diskName}', {
            zoneName: DISK.zone.name,
            diskName: DISK.name,
          }),
          a: 'b',
          c: 'd',
        });

        done();
      };

      compute.createImage(NAME, DISK, options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec the callback with error & API response', done => {
        compute.createImage(NAME, DISK, (err, op, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Operation & apiResp', done => {
        const network = {};
        const operation = {};

        compute.network = function(name) {
          assert.strictEqual(name, NAME);
          return network;
        };

        compute.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        compute.createImage(NAME, DISK, (err, image, op, resp) => {
          assert.strictEqual(err, null);
          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, apiResponse);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });

  describe('createNetwork', () => {
    describe('config.range', () => {
      it('should set the IPv4Range', done => {
        const options = {
          range: '10.240.0.0/16',
        };

        compute.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.IPv4Range, options.range);
          assert.strictEqual(reqOpts.json.range, undefined);
          done();
        };

        compute.createNetwork('name', options, assert.ifError);
      });
    });

    describe('config.gateway', () => {
      it('should set the gatewayIPv4', done => {
        const options = {
          gateway: '10.1.1.1',
        };

        compute.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.gatewayIPv4, options.gateway);
          assert.strictEqual(reqOpts.json.gateway, undefined);
          done();
        };

        compute.createNetwork('name', options, assert.ifError);
      });
    });

    it('should make the correct API request', done => {
      const name = 'new-network';

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/networks');
        assert.deepStrictEqual(reqOpts.json, {name: name});
        done();
      };

      compute.createNetwork(name, {}, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec the callback with error & API response', done => {
        compute.createNetwork('name', {}, (err, network, op, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(network, null);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const NAME = 'network-name';
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Network, Operation & apiResp', done => {
        const network = {};
        const operation = {};

        compute.network = function(name_) {
          assert.strictEqual(name_, NAME);
          return network;
        };

        compute.operation = function(name_) {
          assert.strictEqual(name_, apiResponse.name);
          return operation;
        };

        compute.createNetwork(NAME, {}, (err, network_, op, resp) => {
          assert.strictEqual(err, null);
          assert.strictEqual(network_, network);
          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, apiResponse);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });

  describe('createRule', () => {
    const NAME = 'new-rule';

    it('should make the correct API request', done => {
      const config = {a: 'b'};
      const originalConfig = Object.assign({}, config);
      const expectedConfig = Object.assign({}, config, {name: NAME});

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/forwardingRules');
        assert.deepStrictEqual(config, originalConfig);
        assert.deepStrictEqual(reqOpts.json, expectedConfig);
        done();
      };

      compute.createRule(NAME, config, assert.ifError);
    });

    describe('config.ip', () => {
      const CONFIG = {
        ip: '0.0.0.0',
      };

      it('should accept an array of tags', done => {
        compute.request = function(reqOpts) {
          assert.deepStrictEqual(reqOpts.json, {
            name: NAME,
            IPAddress: CONFIG.ip,
          });
          done();
        };

        compute.createRule(NAME, CONFIG, assert.ifError);
      });
    });

    describe('config.protocol', () => {
      const CONFIG = {
        protocol: 'TCP',
      };

      it('should accept an array of tags', done => {
        compute.request = function(reqOpts) {
          assert.deepStrictEqual(reqOpts.json, {
            name: NAME,
            IPProtocol: CONFIG.protocol,
          });
          done();
        };

        compute.createRule(NAME, CONFIG, assert.ifError);
      });
    });

    describe('config.range', () => {
      const CONFIG = {
        range: '200-300',
      };

      it('should accept an array of tags', done => {
        compute.request = function(reqOpts) {
          assert.deepStrictEqual(reqOpts.json, {
            name: NAME,
            portRange: CONFIG.range,
          });
          done();
        };

        compute.createRule(NAME, CONFIG, assert.ifError);
      });
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec the callback with error & API response', done => {
        compute.createRule(NAME, {}, (err, rule, op, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(rule, null);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Rule, Operation & apiResp', done => {
        const rule = {};
        const operation = {};

        compute.rule = function(name) {
          assert.strictEqual(name, NAME);
          return rule;
        };

        compute.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        compute.createRule(NAME, {}, (err, rule_, op, resp) => {
          assert.strictEqual(err, null);
          assert.strictEqual(rule_, rule);
          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, apiResponse);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });

  describe('createService', () => {
    const NAME = 'new-service';

    it('should make the correct API request', done => {
      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/backendServices');
        assert.deepStrictEqual(reqOpts.json, {name: NAME});
        done();
      };

      compute.createService(NAME, {}, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec the callback with error & API response', done => {
        compute.createService(NAME, {}, (err, service, op, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(service, null);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Service, Operation & apiResp', done => {
        const service = {};
        const operation = {};

        compute.service = function(name) {
          assert.strictEqual(name, NAME);
          return service;
        };

        compute.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        compute.createService(NAME, {}, (err, service_, op, resp) => {
          assert.strictEqual(err, null);
          assert.strictEqual(service_, service);
          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, apiResponse);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });

  describe('firewall', () => {
    const NAME = 'firewall-name';

    it('should return a Firewall object', () => {
      const firewall = compute.firewall(NAME);
      assert(firewall instanceof FakeFirewall);
      assert.strictEqual(firewall.calledWith_[0], compute);
      assert.strictEqual(firewall.calledWith_[1], NAME);
    });
  });

  describe('getAddresses', () => {
    it('should accept only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getAddresses(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/addresses');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getAddresses(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getAddresses({}, (err, addresses, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(addresses, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const REGION_NAME = 'region-1';
      const FULL_REGION_NAME = 'regions/' + REGION_NAME;

      const address = {name: 'address-1'};
      const apiResponse = {
        items: {},
      };

      apiResponse.items[FULL_REGION_NAME] = {
        addresses: [address],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Address objects from the response', done => {
        const region = {};

        compute.region = function(name) {
          assert.strictEqual(name, REGION_NAME);
          return region;
        };

        region.address = function(name) {
          assert.strictEqual(name, address.name);
          setImmediate(done);
          return address;
        };

        compute.getAddresses({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getAddresses(query, (err, addresses, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getAutoscalers', () => {
    it('should accept only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getAutoscalers(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/autoscalers');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getAutoscalers(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getAutoscalers({}, (err, autoscalers, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(autoscalers, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const ZONE_NAME = 'us-central1-a';
      const FULL_ZONE_NAME = 'zones/' + ZONE_NAME;

      const autoscaler = {name: 'autoscaler-1'};
      const apiResponse = {
        items: {},
      };

      apiResponse.items['not-zone-name'] = {
        autoscalers: [autoscaler],
      };

      apiResponse.items[FULL_ZONE_NAME] = {
        autoscalers: [autoscaler],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Autoscaler objects from the response', done => {
        const zone = {};

        compute.zone = function(name) {
          assert.strictEqual(name, ZONE_NAME);
          return zone;
        };

        zone.autoscaler = function(name) {
          assert.strictEqual(name, autoscaler.name);
          setImmediate(done);
          return autoscaler;
        };

        compute.getAutoscalers({}, assert.ifError);
      });

      it('should not create zone-less Autoscalers', done => {
        const zone = {};

        compute.zone = function() {
          return zone;
        };

        zone.autoscaler = function() {
          return autoscaler;
        };

        compute.getAutoscalers({}, (err, autoscalers) => {
          assert.ifError(err);
          assert(Object.keys(apiResponse.items).length > 1);
          assert.strictEqual(autoscalers.length, 1);
          done();
        });
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        delete apiResponseWithNextPageToken.items;

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getAutoscalers(query, (err, autoscalers, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getDisks', () => {
    it('should accept only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getDisks(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/disks');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getDisks(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getDisks({}, (err, disks, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(disks, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const ZONE_NAME = 'zone-1';
      const FULL_ZONE_NAME = 'zones/' + ZONE_NAME;

      const disk = {name: 'disk-1'};
      const apiResponse = {
        items: {},
      };

      apiResponse.items[FULL_ZONE_NAME] = {
        disks: [disk],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Disk objects from the response', done => {
        const zone = {};

        compute.zone = function(name) {
          assert.strictEqual(name, ZONE_NAME);
          return zone;
        };

        zone.disk = function(name) {
          assert.strictEqual(name, disk.name);
          setImmediate(done);
          return disk;
        };

        compute.getDisks({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getDisks(query, (err, disks, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getFirewalls', () => {
    it('should accept only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getFirewalls(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/firewalls');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getFirewalls(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getFirewalls({}, (err, firewalls, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(firewalls, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const firewall = {name: 'firewall-1'};
      const apiResponse = {
        items: [firewall],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Firewall objects from the response', done => {
        compute.firewall = function(name) {
          assert.strictEqual(name, firewall.name);
          setImmediate(done);
          return firewall;
        };

        compute.getFirewalls({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getFirewalls(query, (err, firewalls, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getHealthChecks', () => {
    it('should accept only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getHealthChecks(assert.ifError);
    });

    it('should make the correct default API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/httpHealthChecks');
        assert.deepStrictEqual(reqOpts.qs, options);
        done();
      };

      compute.getHealthChecks(options, assert.ifError);
    });

    describe('options.https', () => {
      it('should make the correct API request', done => {
        const options = {https: true};
        const originalOptions = Object.assign({}, options);

        compute.request = function(reqOpts) {
          assert.strictEqual(reqOpts.uri, '/global/httpsHealthChecks');
          assert.deepStrictEqual(reqOpts.qs, {});
          assert.deepStrictEqual(options, originalOptions);
          done();
        };

        compute.getHealthChecks(options, assert.ifError);
      });
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getHealthChecks({}, (err, hcs, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(hcs, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const healthCheck = {name: 'health-check-1'};
      const apiResponse = {items: [healthCheck]};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create HealthCheck objects from the response', done => {
        compute.healthCheck = function(name, options) {
          assert.strictEqual(name, healthCheck.name);
          assert.strictEqual(options.https, undefined);
          setImmediate(done);
          return healthCheck;
        };

        compute.getHealthChecks({}, assert.ifError);
      });

      it('should create HTTPS Health Check objects', done => {
        compute.healthCheck = function(name, options) {
          assert.strictEqual(name, healthCheck.name);
          assert.strictEqual(options.https, true);
          setImmediate(done);
          return healthCheck;
        };

        compute.getHealthChecks({https: true}, assert.ifError);
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getHealthChecks(query, (err, firewalls, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getImages', () => {
    it('should accept only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getImages(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/images');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getImages(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getImages({}, (err, images, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(images, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const image = {name: 'image-1'};
      const apiResponse = {
        items: [image],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Image objects from the response', done => {
        compute.image = function(name) {
          assert.strictEqual(name, image.name);
          setImmediate(done);
          return image;
        };

        compute.getImages({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getImages(query, (err, images, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getInstanceGroups', () => {
    it('should accept only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getInstanceGroups(assert.ifError);
    });

    it('should make the correct default API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/instanceGroups');
        assert.deepStrictEqual(reqOpts.qs, options);
        done();
      };

      compute.getInstanceGroups(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getInstanceGroups({}, (err, groups, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(groups, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const ZONE_NAME = 'zone-1';
      const FULL_ZONE_NAME = 'zones/' + ZONE_NAME;

      const instanceGroup = {name: 'instance-group-1'};
      const apiResponse = {
        items: {},
      };

      apiResponse.items[FULL_ZONE_NAME] = {
        instanceGroups: [instanceGroup],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create InstanceGroup objects from the resp', done => {
        const zone = {};

        compute.zone = function(name) {
          assert.strictEqual(name, ZONE_NAME);
          return zone;
        };

        zone.instanceGroup = function(name) {
          assert.strictEqual(name, instanceGroup.name);
          setImmediate(done);
          return instanceGroup;
        };

        compute.getInstanceGroups({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        delete apiResponseWithNextPageToken.items;

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getInstanceGroups(query, (err, groups, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getMachineTypes', () => {
    it('should accept only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getMachineTypes(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/machineTypes');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getMachineTypes(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getMachineTypes({}, (err, machTypes, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(machTypes, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const ZONE_NAME = 'zone-1';
      const FULL_ZONE_NAME = 'zones/' + ZONE_NAME;

      const machineType = {name: 'machineType-1'};
      const apiResponse = {
        items: {},
      };

      apiResponse.items[FULL_ZONE_NAME] = {
        machineTypes: [machineType],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create MachineType objects from the response', done => {
        const zone = {};
        const machineTypeInstance = {};

        compute.zone = function(name) {
          assert.strictEqual(name, ZONE_NAME);
          return zone;
        };

        zone.machineType = function(name) {
          assert.strictEqual(name, machineType.name);
          return machineTypeInstance;
        };

        compute.getMachineTypes({}, (err, machTypes, nextQuery, resp) => {
          assert.ifError(err);
          assert.strictEqual(machTypes[0], machineTypeInstance);
          assert.strictEqual(machTypes[0].metadata, machineType);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getMachineTypes(query, (err, machineTypes, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getNetworks', () => {
    it('should work with only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getNetworks(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/networks');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getNetworks(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getNetworks({}, (err, networks, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(networks, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const network = {name: 'network-1'};
      const apiResponse = {
        items: [network],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Network objects from the response', done => {
        compute.network = function(name) {
          assert.strictEqual(name, network.name);
          setImmediate(done);
          return network;
        };

        compute.getNetworks({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getNetworks(query, (err, networks, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getOperations', () => {
    it('should work with only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getOperations(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/operations');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getOperations(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getOperations({}, (err, ops, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(ops, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const operation = {name: 'op-1'};
      const apiResponse = {
        items: [operation],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Operation objects from the response', done => {
        compute.operation = function(name) {
          assert.strictEqual(name, operation.name);
          setImmediate(done);
          return operation;
        };

        compute.getOperations({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getOperations(query, (err, operations, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getRegions', () => {
    it('should work with only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getRegions(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/regions');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getRegions(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getRegions({}, (err, regions, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(regions, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const region = {name: 'region-1'};
      const apiResponse = {
        items: [region],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Region objects from the response', done => {
        compute.region = function(name) {
          assert.strictEqual(name, region.name);
          setImmediate(done);
          return region;
        };

        compute.getRegions({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getRegions(query, (err, regions, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getRules', () => {
    it('should work with only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getRules(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/forwardingRules');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getRules(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getRules({}, (err, rules, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(rules, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const rule = {
        name: 'rule-1',
      };
      const apiResponse = {
        items: [rule],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Rule objects from the response', done => {
        compute.rule = function(name) {
          assert.strictEqual(name, rule.name);
          return rule;
        };

        compute.getRules({}, (err, rules) => {
          assert.ifError(err);
          assert.deepStrictEqual(rules, [rule]);
          done();
        });
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {
          a: 'b',
          c: 'd',
        };
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getRules(query, (err, rules, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getServices', () => {
    it('should work with only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getServices(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/backendServices');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getServices(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getServices({}, (err, services, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(services, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const service = {
        name: 'service-1',
      };
      const apiResponse = {
        items: [service],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Service objects from the response', done => {
        compute.service = function(name) {
          assert.strictEqual(name, service.name);
          setImmediate(done);
          return service;
        };

        compute.getServices({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {
          a: 'b',
          c: 'd',
        };
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getServices(query, (err, services, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getSnapshots', () => {
    it('should work with only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getSnapshots(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/snapshots');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getSnapshots(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getSnapshots({}, (err, snapshots, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(snapshots, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const snapshot = {name: 'snapshot-1'};
      const apiResponse = {
        items: [snapshot],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Snapshot objects from the response', done => {
        compute.snapshot = function(name) {
          assert.strictEqual(name, snapshot.name);
          setImmediate(done);
          return snapshot;
        };

        compute.getSnapshots({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getSnapshots(query, (err, snapshots, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getSubnetworks', () => {
    it('should accept only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getSubnetworks(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/subnetworks');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getSubnetworks(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getSubnetworks({}, (err, subnetworks, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(subnetworks, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const REGION_NAME = 'region-1';
      const FULL_REGION_NAME = 'regions/' + REGION_NAME;

      const subnetwork = {name: 'subnetwork-1'};
      const apiResponse = {
        items: {},
      };

      apiResponse.items[FULL_REGION_NAME] = {
        subnetworks: [subnetwork],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Subnetwork objects from the response', done => {
        const region = {};
        const fakeSubnetwork = {};

        compute.region = function(name) {
          assert.strictEqual(name, REGION_NAME);
          return region;
        };

        region.subnetwork = function(name) {
          assert.strictEqual(name, subnetwork.name);
          return fakeSubnetwork;
        };

        compute.getSubnetworks({}, (err, subnetworks, nextQuery, resp) => {
          assert.ifError(err);

          assert.strictEqual(subnetworks[0], fakeSubnetwork);
          assert.strictEqual(subnetworks[0].metadata, subnetwork);

          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getSubnetworks(query, (err, subnetworks, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getVMs', () => {
    it('should work with only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getVMs(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/instances');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getVMs(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getVMs({}, (err, vms, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(vms, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const ZONE_NAME = 'zone-1';
      const FULL_ZONE_NAME = 'zones/' + ZONE_NAME;

      const vm = {name: 'vm-1'};
      const apiResponse = {
        items: {},
      };

      apiResponse.items[FULL_ZONE_NAME] = {
        instances: [vm],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create VM objects from the response', done => {
        const zone = {};

        compute.zone = function(name) {
          assert.strictEqual(name, ZONE_NAME);
          return zone;
        };

        zone.vm = function(name) {
          assert.strictEqual(name, vm.name);
          setImmediate(done);
          return vm;
        };

        compute.getVMs({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getVMs(query, (err, vms, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getZones', () => {
    it('should work with only a callback', done => {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getZones(assert.ifError);
    });

    it('should make the correct API request', done => {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/zones');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getZones(options, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        compute.getZones({}, (err, zones, nextQuery, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(zones, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const zone = {name: 'zone-1'};
      const apiResponse = {
        items: [zone],
      };

      beforeEach(() => {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Zone objects from the response', done => {
        compute.zone = function(name) {
          assert.strictEqual(name, zone.name);
          setImmediate(done);
          return zone;
        };

        compute.getZones({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', done => {
        const apiResponseWithNextPageToken = Object.assign({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = Object.assign({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getZones(query, (err, snapshots, nextQuery) => {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            Object.assign({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('healthCheck', () => {
    const NAME = 'health-check-name';
    const OPTIONS = {};

    it('should return a HealthCheck object', () => {
      const healthCheck = compute.healthCheck(NAME, OPTIONS);
      assert(healthCheck instanceof FakeHealthCheck);
      assert.strictEqual(healthCheck.calledWith_[0], compute);
      assert.strictEqual(healthCheck.calledWith_[1], NAME);
      assert.strictEqual(healthCheck.calledWith_[2], OPTIONS);
    });
  });

  describe('image', () => {
    const NAME = 'image-name';

    it('should return an Image object', () => {
      const image = compute.image(NAME);
      assert(image instanceof FakeImage);
      assert.strictEqual(image.calledWith_[0], compute);
      assert.strictEqual(image.calledWith_[1], NAME);
    });
  });

  describe('network', () => {
    const NAME = 'network-name';

    it('should return a Network object', () => {
      const network = compute.network(NAME);
      assert(network instanceof FakeNetwork);
      assert.strictEqual(network.calledWith_[0], compute);
      assert.strictEqual(network.calledWith_[1], NAME);
    });
  });

  describe('operation', () => {
    const NAME = 'op-name';

    it('should return an Operation object', () => {
      const op = compute.operation(NAME);
      assert(op instanceof FakeOperation);
      assert.strictEqual(op.calledWith_[0], compute);
      assert.strictEqual(op.calledWith_[1], NAME);
    });
  });

  describe('project', () => {
    it('should return a Project object', () => {
      const project = compute.project();
      assert(project instanceof FakeProject);
      assert.strictEqual(project.calledWith_[0], compute);
    });
  });

  describe('region', () => {
    const NAME = 'region-name';

    it('should return a Region object', () => {
      const region = compute.region(NAME);
      assert(region instanceof FakeRegion);
      assert.strictEqual(region.calledWith_[0], compute);
      assert.strictEqual(region.calledWith_[1], NAME);
    });
  });

  describe('rule', () => {
    const NAME = 'rule-name';

    it('should return a Rule object', () => {
      const rule = compute.rule(NAME);
      assert(rule instanceof FakeRule);
      assert.strictEqual(rule.calledWith_[0], compute);
      assert.strictEqual(rule.calledWith_[1], NAME);
    });
  });

  describe('service', () => {
    const NAME = 'service-name';

    it('should return a Service object', () => {
      const service = compute.service(NAME);
      assert(service instanceof FakeServiceClass);
      assert.strictEqual(service.calledWith_[0], compute);
      assert.strictEqual(service.calledWith_[1], NAME);
    });
  });

  describe('snapshot', () => {
    const NAME = 'snapshot-name';

    it('should return a Snapshot object', () => {
      const snapshot = compute.snapshot(NAME);
      assert(snapshot instanceof FakeSnapshot);
      assert.strictEqual(snapshot.calledWith_[0], compute);
      assert.strictEqual(snapshot.calledWith_[1], NAME);
    });
  });

  describe('zone', () => {
    const NAME = 'zone-name';

    it('should return a Zone object', () => {
      const zone = compute.zone(NAME);
      assert(zone instanceof FakeZone);
      assert.strictEqual(zone.calledWith_[0], compute);
      assert.strictEqual(zone.calledWith_[1], NAME);
    });
  });

  describe('execAfterOperation_', () => {
    const OPERATION = new events.EventEmitter();

    it('should execute callback with error & API response', done => {
      const error = new Error('Error.');
      const apiResponse = {};

      function onComplete(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      }

      const execWithOperation = compute.execAfterOperation_(onComplete);

      execWithOperation(error, OPERATION, apiResponse);
    });

    it('should support variable arity', done => {
      const error = new Error('Error.');
      const apiResponse = {};

      function onComplete(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      }

      const execWithOperation = compute.execAfterOperation_(onComplete);

      execWithOperation(error, null, null, OPERATION, apiResponse);
    });

    it('should register callback on operation error', done => {
      const apiResponse = {};

      function onComplete() {}

      OPERATION.once('newListener', (event, callback) => {
        assert.strictEqual(event, 'error');
        assert.strictEqual(callback, onComplete);
        done();
      });

      const execWithOperation = compute.execAfterOperation_(onComplete);
      execWithOperation(null, OPERATION, apiResponse);
    });

    it('should execute callback on operation complete', done => {
      const apiResponse = {};

      function onComplete(err, apiResponse_) {
        assert.strictEqual(err, null);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      }

      const execWithOperation = compute.execAfterOperation_(onComplete);
      execWithOperation(null, OPERATION, {});

      OPERATION.emit('complete', apiResponse);
    });
  });
});
