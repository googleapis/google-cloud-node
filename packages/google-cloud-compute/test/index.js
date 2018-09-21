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

const arrify = require('arrify');
const assert = require('assert');
const events = require('events');
const extend = require('extend');
const format = require('string-format-obj');
const nodeutil = require('util');
const proxyquire = require('proxyquire');
const Service = require('@google-cloud/common').Service;
const util = require('@google-cloud/common').util;

const slice = Array.prototype.slice;

let promisified = false;
const fakeUtil = extend({}, util, {
  makeAuthenticatedRequestFactory: util.noop,
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

function FakeServiceClass() {
  this.calledWith_ = slice.call(arguments);
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

function FakeService() {
  this.calledWith_ = arguments;
  Service.apply(this, arguments);
}

nodeutil.inherits(FakeService, Service);

describe('Compute', function() {
  let Compute;
  let compute;

  const PROJECT_ID = 'project-id';

  before(function() {
    // Node v4 on Circle times out.
    this.timeout(0);

    Compute = proxyquire('../', {
      '@google-cloud/common': {
        Service: FakeService,
        paginator: fakePaginator,
        util: fakeUtil,
      },
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

  beforeEach(function() {
    extend(fakeUtil, originalFakeUtil);
    compute = new Compute({
      projectId: PROJECT_ID,
    });
  });

  describe('instantiation', function() {
    it('should return a new instance of Compute', function() {
      const compute = new Compute({projectId: PROJECT_ID});
      assert(compute instanceof Compute);
    });

    it('should normalize the arguments', function() {
      let normalizeArgumentsCalled = false;
      const options = {};

      fakeUtil.normalizeArguments = function(context, options_) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(options_, options);
        return options_;
      };

      new Compute(options);
      assert.strictEqual(normalizeArgumentsCalled, true);
    });

    it('should inherit from Service', function() {
      assert(compute instanceof Service);

      const calledWith = compute.calledWith_[0];

      const baseUrl = 'https://www.googleapis.com/compute/v1';
      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.deepStrictEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/compute',
      ]);
      assert.deepStrictEqual(
        calledWith.packageJson,
        require('../package.json')
      );
    });

    it('should streamify the correct methods', function() {
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

    it('should promisify all the things', function() {
      assert(promisified);
    });
  });

  describe('createFirewall', function() {
    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        compute.createFirewall({}, assert.ifError);
      }, /A firewall name must be provided./);
    });

    it('should throw if config is not provided', function() {
      assert.throws(function() {
        compute.createFirewall('name', assert.ifError);
      }, /A firewall configuration object must be provided./);
    });

    describe('config.protocols', function() {
      it('should format protocols', function(done) {
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

    describe('config.ranges', function() {
      it('should format ranges to sourceRanges', function(done) {
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

    describe('config.tags', function() {
      it('should format tags to sourceTags', function(done) {
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

    it('should make the correct API request', function(done) {
      const name = 'new-firewall-name';

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/firewalls');
        assert.deepStrictEqual(reqOpts.json, {name: name});
        done();
      };

      compute.createFirewall(name, {}, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec the callback with error & API response', function(done) {
        compute.createFirewall('name', {}, function(err, firewall, op, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(firewall, null);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Firewall, Operation & apiResp', function(done) {
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

        compute.createFirewall('name', {}, function(err, fw, op, resp) {
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

  describe('createHealthCheck', function() {
    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        compute.createHealthCheck({}, assert.ifError);
      }, /A health check name must be provided./);
    });

    describe('options.interval', function() {
      it('should set checkIntervalSec', function(done) {
        const options = {interval: 50};

        compute.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.checkIntervalSec, options.interval);
          assert.strictEqual(reqOpts.json.interval, undefined);
          done();
        };

        compute.createHealthCheck('name', options, assert.ifError);
      });
    });

    describe('config.timeout', function() {
      it('should set timeoutSec', function(done) {
        const options = {timeout: 50};

        compute.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.timeoutSec, options.timeout);
          assert.strictEqual(reqOpts.json.timeout, undefined);
          done();
        };

        compute.createHealthCheck('name', options, assert.ifError);
      });
    });

    describe('options.https', function() {
      it('should make the correct API request', function(done) {
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

    it('should make the correct default API request', function(done) {
      const name = 'new-health-check-name';
      const options = {a: 'b'};
      const originalOptions = extend({}, options);

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/httpHealthChecks');
        assert.deepStrictEqual(reqOpts.json, {a: 'b', name: name});
        assert.deepStrictEqual(options, originalOptions);
        done();
      };

      compute.createHealthCheck(name, options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec the callback with error & API response', function(done) {
        compute.createHealthCheck('name', {}, function(err, hc, op, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(hc, null);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with HealthCheck, Op, & apiResp', function(done) {
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

        compute.createHealthCheck('name', {}, function(err, hc, op, resp) {
          assert.strictEqual(err, null);
          assert.strictEqual(hc, healthCheck);
          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, apiResponse);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });

      it('should create an HTTPS HealthCheck object', function(done) {
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

  describe('createImage', function() {
    const NAME = 'image-name';

    const DISK = {
      name: 'disk-name',
      zone: {
        name: 'zone-name',
      },
    };

    beforeEach(function() {
      fakeUtil.isCustomType = function() {
        return true;
      };
    });

    it('should throw if Disk is not provided', function() {
      fakeUtil.isCustomType = function(unknown, type) {
        assert.strictEqual(unknown, DISK);
        assert.strictEqual(type, 'Disk');
        return false;
      };

      assert.throws(function() {
        compute.createImage(NAME, DISK);
      }, /A Disk object is required\./);
    });

    it('should make the correct API request', function(done) {
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

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec the callback with error & API response', function(done) {
        compute.createImage(NAME, DISK, function(err, op, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Operation & apiResp', function(done) {
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

        compute.createImage(NAME, DISK, function(err, image, op, resp) {
          assert.strictEqual(err, null);
          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, apiResponse);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });

  describe('createNetwork', function() {
    describe('config.range', function() {
      it('should set the IPv4Range', function(done) {
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

    describe('config.gateway', function() {
      it('should set the gatewayIPv4', function(done) {
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

    it('should make the correct API request', function(done) {
      const name = 'new-network';

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/networks');
        assert.deepStrictEqual(reqOpts.json, {name: name});
        done();
      };

      compute.createNetwork(name, {}, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec the callback with error & API response', function(done) {
        compute.createNetwork('name', {}, function(err, network, op, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(network, null);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      const NAME = 'network-name';
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Network, Operation & apiResp', function(done) {
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

        compute.createNetwork(NAME, {}, function(err, network_, op, resp) {
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

  describe('createRule', function() {
    const NAME = 'new-rule';

    it('should make the correct API request', function(done) {
      const config = {a: 'b'};
      const originalConfig = extend({}, config);
      const expectedConfig = extend({}, config, {name: NAME});

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/forwardingRules');
        assert.deepStrictEqual(config, originalConfig);
        assert.deepStrictEqual(reqOpts.json, expectedConfig);
        done();
      };

      compute.createRule(NAME, config, assert.ifError);
    });

    describe('config.ip', function() {
      const CONFIG = {
        ip: '0.0.0.0',
      };

      it('should accept an array of tags', function(done) {
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

    describe('config.protocol', function() {
      const CONFIG = {
        protocol: 'TCP',
      };

      it('should accept an array of tags', function(done) {
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

    describe('config.range', function() {
      const CONFIG = {
        range: '200-300',
      };

      it('should accept an array of tags', function(done) {
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

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec the callback with error & API response', function(done) {
        compute.createRule(NAME, {}, function(err, rule, op, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(rule, null);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Rule, Operation & apiResp', function(done) {
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

        compute.createRule(NAME, {}, function(err, rule_, op, resp) {
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

  describe('createService', function() {
    const NAME = 'new-service';

    it('should make the correct API request', function(done) {
      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/backendServices');
        assert.deepStrictEqual(reqOpts.json, {name: NAME});
        done();
      };

      compute.createService(NAME, {}, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should exec the callback with error & API response', function(done) {
        compute.createService(NAME, {}, function(err, service, op, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(service, null);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Service, Operation & apiResp', function(done) {
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

        compute.createService(NAME, {}, function(err, service_, op, resp) {
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

  describe('firewall', function() {
    const NAME = 'firewall-name';

    it('should return a Firewall object', function() {
      const firewall = compute.firewall(NAME);
      assert(firewall instanceof FakeFirewall);
      assert.strictEqual(firewall.calledWith_[0], compute);
      assert.strictEqual(firewall.calledWith_[1], NAME);
    });
  });

  describe('getAddresses', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getAddresses(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/addresses');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getAddresses(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getAddresses({}, function(err, addresses, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(addresses, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const REGION_NAME = 'region-1';
      const FULL_REGION_NAME = 'regions/' + REGION_NAME;

      const address = {name: 'address-1'};
      const apiResponse = {
        items: {},
      };

      apiResponse.items[FULL_REGION_NAME] = {
        addresses: [address],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Address objects from the response', function(done) {
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

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getAddresses(query, function(err, addresses, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getAutoscalers', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getAutoscalers(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/autoscalers');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getAutoscalers(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getAutoscalers({}, function(err, autoscalers, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(autoscalers, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
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

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Autoscaler objects from the response', function(done) {
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

      it('should not create zone-less Autoscalers', function(done) {
        const zone = {};

        compute.zone = function() {
          return zone;
        };

        zone.autoscaler = function() {
          return autoscaler;
        };

        compute.getAutoscalers({}, function(err, autoscalers) {
          assert.ifError(err);
          assert(Object.keys(apiResponse.items).length > 1);
          assert.strictEqual(autoscalers.length, 1);
          done();
        });
      });

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        delete apiResponseWithNextPageToken.items;

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getAutoscalers(query, function(err, autoscalers, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getDisks', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getDisks(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/disks');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getDisks(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getDisks({}, function(err, disks, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(disks, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const ZONE_NAME = 'zone-1';
      const FULL_ZONE_NAME = 'zones/' + ZONE_NAME;

      const disk = {name: 'disk-1'};
      const apiResponse = {
        items: {},
      };

      apiResponse.items[FULL_ZONE_NAME] = {
        disks: [disk],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Disk objects from the response', function(done) {
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

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getDisks(query, function(err, disks, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getFirewalls', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getFirewalls(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/firewalls');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getFirewalls(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getFirewalls({}, function(err, firewalls, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(firewalls, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const firewall = {name: 'firewall-1'};
      const apiResponse = {
        items: [firewall],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Firewall objects from the response', function(done) {
        compute.firewall = function(name) {
          assert.strictEqual(name, firewall.name);
          setImmediate(done);
          return firewall;
        };

        compute.getFirewalls({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getFirewalls(query, function(err, firewalls, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getHealthChecks', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getHealthChecks(assert.ifError);
    });

    it('should make the correct default API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/httpHealthChecks');
        assert.deepStrictEqual(reqOpts.qs, options);
        done();
      };

      compute.getHealthChecks(options, assert.ifError);
    });

    describe('options.https', function() {
      it('should make the correct API request', function(done) {
        const options = {https: true};
        const originalOptions = extend({}, options);

        compute.request = function(reqOpts) {
          assert.strictEqual(reqOpts.uri, '/global/httpsHealthChecks');
          assert.deepStrictEqual(reqOpts.qs, {});
          assert.deepStrictEqual(options, originalOptions);
          done();
        };

        compute.getHealthChecks(options, assert.ifError);
      });
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getHealthChecks({}, function(err, hcs, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(hcs, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const healthCheck = {name: 'health-check-1'};
      const apiResponse = {items: [healthCheck]};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create HealthCheck objects from the response', function(done) {
        compute.healthCheck = function(name, options) {
          assert.strictEqual(name, healthCheck.name);
          assert.strictEqual(options.https, undefined);
          setImmediate(done);
          return healthCheck;
        };

        compute.getHealthChecks({}, assert.ifError);
      });

      it('should create HTTPS Health Check objects', function(done) {
        compute.healthCheck = function(name, options) {
          assert.strictEqual(name, healthCheck.name);
          assert.strictEqual(options.https, true);
          setImmediate(done);
          return healthCheck;
        };

        compute.getHealthChecks({https: true}, assert.ifError);
      });

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getHealthChecks(query, function(err, firewalls, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getImages', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getImages(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/images');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getImages(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getImages({}, function(err, images, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(images, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const image = {name: 'image-1'};
      const apiResponse = {
        items: [image],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Image objects from the response', function(done) {
        compute.image = function(name) {
          assert.strictEqual(name, image.name);
          setImmediate(done);
          return image;
        };

        compute.getImages({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getImages(query, function(err, images, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getInstanceGroups', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getInstanceGroups(assert.ifError);
    });

    it('should make the correct default API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/instanceGroups');
        assert.deepStrictEqual(reqOpts.qs, options);
        done();
      };

      compute.getInstanceGroups(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getInstanceGroups({}, function(err, groups, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(groups, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const ZONE_NAME = 'zone-1';
      const FULL_ZONE_NAME = 'zones/' + ZONE_NAME;

      const instanceGroup = {name: 'instance-group-1'};
      const apiResponse = {
        items: {},
      };

      apiResponse.items[FULL_ZONE_NAME] = {
        instanceGroups: [instanceGroup],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create InstanceGroup objects from the resp', function(done) {
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

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        delete apiResponseWithNextPageToken.items;

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getInstanceGroups(query, function(err, groups, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getMachineTypes', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getMachineTypes(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/machineTypes');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getMachineTypes(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getMachineTypes({}, function(err, machTypes, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(machTypes, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      const ZONE_NAME = 'zone-1';
      const FULL_ZONE_NAME = 'zones/' + ZONE_NAME;

      const machineType = {name: 'machineType-1'};
      const apiResponse = {
        items: {},
      };

      apiResponse.items[FULL_ZONE_NAME] = {
        machineTypes: [machineType],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create MachineType objects from the response', function(done) {
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

        compute.getMachineTypes({}, function(err, machTypes, nextQuery, resp) {
          assert.ifError(err);
          assert.strictEqual(machTypes[0], machineTypeInstance);
          assert.strictEqual(machTypes[0].metadata, machineType);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getMachineTypes(query, function(err, machineTypes, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getNetworks', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getNetworks(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/networks');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getNetworks(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getNetworks({}, function(err, networks, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(networks, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const network = {name: 'network-1'};
      const apiResponse = {
        items: [network],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Network objects from the response', function(done) {
        compute.network = function(name) {
          assert.strictEqual(name, network.name);
          setImmediate(done);
          return network;
        };

        compute.getNetworks({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getNetworks(query, function(err, networks, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getOperations', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getOperations(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/operations');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getOperations(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getOperations({}, function(err, ops, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(ops, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const operation = {name: 'op-1'};
      const apiResponse = {
        items: [operation],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Operation objects from the response', function(done) {
        compute.operation = function(name) {
          assert.strictEqual(name, operation.name);
          setImmediate(done);
          return operation;
        };

        compute.getOperations({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getOperations(query, function(err, operations, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getRegions', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getRegions(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/regions');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getRegions(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getRegions({}, function(err, regions, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(regions, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const region = {name: 'region-1'};
      const apiResponse = {
        items: [region],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Region objects from the response', function(done) {
        compute.region = function(name) {
          assert.strictEqual(name, region.name);
          setImmediate(done);
          return region;
        };

        compute.getRegions({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getRegions(query, function(err, regions, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getRules', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getRules(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/forwardingRules');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getRules(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getRules({}, function(err, rules, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(rules, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const rule = {
        name: 'rule-1',
      };
      const apiResponse = {
        items: [rule],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Rule objects from the response', function(done) {
        compute.rule = function(name) {
          assert.strictEqual(name, rule.name);
          return rule;
        };

        compute.getRules({}, function(err, rules) {
          assert.ifError(err);
          assert.deepStrictEqual(rules, [rule]);
          done();
        });
      });

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {
          a: 'b',
          c: 'd',
        };
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getRules(query, function(err, rules, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getServices', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getServices(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/backendServices');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getServices(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getServices({}, function(err, services, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(services, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const service = {
        name: 'service-1',
      };
      const apiResponse = {
        items: [service],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Service objects from the response', function(done) {
        compute.service = function(name) {
          assert.strictEqual(name, service.name);
          setImmediate(done);
          return service;
        };

        compute.getServices({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {
          a: 'b',
          c: 'd',
        };
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getServices(query, function(err, services, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getSnapshots', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getSnapshots(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/snapshots');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getSnapshots(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getSnapshots({}, function(err, snapshots, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(snapshots, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const snapshot = {name: 'snapshot-1'};
      const apiResponse = {
        items: [snapshot],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Snapshot objects from the response', function(done) {
        compute.snapshot = function(name) {
          assert.strictEqual(name, snapshot.name);
          setImmediate(done);
          return snapshot;
        };

        compute.getSnapshots({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getSnapshots(query, function(err, snapshots, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getSubnetworks', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getSubnetworks(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/subnetworks');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getSubnetworks(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getSubnetworks({}, function(err, subnetworks, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(subnetworks, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const REGION_NAME = 'region-1';
      const FULL_REGION_NAME = 'regions/' + REGION_NAME;

      const subnetwork = {name: 'subnetwork-1'};
      const apiResponse = {
        items: {},
      };

      apiResponse.items[FULL_REGION_NAME] = {
        subnetworks: [subnetwork],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Subnetwork objects from the response', function(done) {
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

        compute.getSubnetworks({}, function(err, subnetworks, nextQuery, resp) {
          assert.ifError(err);

          assert.strictEqual(subnetworks[0], fakeSubnetwork);
          assert.strictEqual(subnetworks[0].metadata, subnetwork);

          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getSubnetworks(query, function(err, subnetworks, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getVMs', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getVMs(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/instances');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getVMs(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getVMs({}, function(err, vms, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(vms, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const ZONE_NAME = 'zone-1';
      const FULL_ZONE_NAME = 'zones/' + ZONE_NAME;

      const vm = {name: 'vm-1'};
      const apiResponse = {
        items: {},
      };

      apiResponse.items[FULL_ZONE_NAME] = {
        instances: [vm],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create VM objects from the response', function(done) {
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

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getVMs(query, function(err, vms, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('getZones', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      compute.getZones(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      const options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/zones');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getZones(options, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        compute.getZones({}, function(err, zones, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(zones, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      const zone = {name: 'zone-1'};
      const apiResponse = {
        items: [zone],
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Zone objects from the response', function(done) {
        compute.zone = function(name) {
          assert.strictEqual(name, zone.name);
          setImmediate(done);
          return zone;
        };

        compute.getZones({}, assert.ifError);
      });

      it('should build a nextQuery if necessary', function(done) {
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token',
        });

        const query = {a: 'b', c: 'd'};
        const originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getZones(query, function(err, snapshots, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(query, originalQuery);

          assert.deepStrictEqual(
            nextQuery,
            extend({}, query, {
              pageToken: apiResponseWithNextPageToken.nextPageToken,
            })
          );

          done();
        });
      });
    });
  });

  describe('healthCheck', function() {
    const NAME = 'health-check-name';
    const OPTIONS = {};

    it('should return a HealthCheck object', function() {
      const healthCheck = compute.healthCheck(NAME, OPTIONS);
      assert(healthCheck instanceof FakeHealthCheck);
      assert.strictEqual(healthCheck.calledWith_[0], compute);
      assert.strictEqual(healthCheck.calledWith_[1], NAME);
      assert.strictEqual(healthCheck.calledWith_[2], OPTIONS);
    });
  });

  describe('image', function() {
    const NAME = 'image-name';

    it('should return an Image object', function() {
      const image = compute.image(NAME);
      assert(image instanceof FakeImage);
      assert.strictEqual(image.calledWith_[0], compute);
      assert.strictEqual(image.calledWith_[1], NAME);
    });
  });

  describe('network', function() {
    const NAME = 'network-name';

    it('should return a Network object', function() {
      const network = compute.network(NAME);
      assert(network instanceof FakeNetwork);
      assert.strictEqual(network.calledWith_[0], compute);
      assert.strictEqual(network.calledWith_[1], NAME);
    });
  });

  describe('operation', function() {
    const NAME = 'op-name';

    it('should return an Operation object', function() {
      const op = compute.operation(NAME);
      assert(op instanceof FakeOperation);
      assert.strictEqual(op.calledWith_[0], compute);
      assert.strictEqual(op.calledWith_[1], NAME);
    });
  });

  describe('project', function() {
    it('should return a Project object', function() {
      const project = compute.project();
      assert(project instanceof FakeProject);
      assert.strictEqual(project.calledWith_[0], compute);
    });
  });

  describe('region', function() {
    const NAME = 'region-name';

    it('should return a Region object', function() {
      const region = compute.region(NAME);
      assert(region instanceof FakeRegion);
      assert.strictEqual(region.calledWith_[0], compute);
      assert.strictEqual(region.calledWith_[1], NAME);
    });
  });

  describe('rule', function() {
    const NAME = 'rule-name';

    it('should return a Rule object', function() {
      const rule = compute.rule(NAME);
      assert(rule instanceof FakeRule);
      assert.strictEqual(rule.calledWith_[0], compute);
      assert.strictEqual(rule.calledWith_[1], NAME);
    });
  });

  describe('service', function() {
    const NAME = 'service-name';

    it('should return a Service object', function() {
      const service = compute.service(NAME);
      assert(service instanceof FakeServiceClass);
      assert.strictEqual(service.calledWith_[0], compute);
      assert.strictEqual(service.calledWith_[1], NAME);
    });
  });

  describe('snapshot', function() {
    const NAME = 'snapshot-name';

    it('should return a Snapshot object', function() {
      const snapshot = compute.snapshot(NAME);
      assert(snapshot instanceof FakeSnapshot);
      assert.strictEqual(snapshot.calledWith_[0], compute);
      assert.strictEqual(snapshot.calledWith_[1], NAME);
    });
  });

  describe('zone', function() {
    const NAME = 'zone-name';

    it('should return a Zone object', function() {
      const zone = compute.zone(NAME);
      assert(zone instanceof FakeZone);
      assert.strictEqual(zone.calledWith_[0], compute);
      assert.strictEqual(zone.calledWith_[1], NAME);
    });
  });

  describe('execAfterOperation_', function() {
    const OPERATION = new events.EventEmitter();

    it('should execute callback with error & API response', function(done) {
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

    it('should support variable arity', function(done) {
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

    it('should register callback on operation error', function(done) {
      const apiResponse = {};

      function onComplete() {}

      OPERATION.once('newListener', function(event, callback) {
        assert.strictEqual(event, 'error');
        assert.strictEqual(callback, onComplete);
        done();
      });

      const execWithOperation = compute.execAfterOperation_(onComplete);
      execWithOperation(null, OPERATION, apiResponse);
    });

    it('should execute callback on operation complete', function(done) {
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
