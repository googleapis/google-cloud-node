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

var arrify = require('arrify');
var assert = require('assert');
var events = require('events');
var extend = require('extend');
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var Service = require('@google-cloud/common').Service;
var util = require('@google-cloud/common').util;

var slice = Array.prototype.slice;

var promisified = false;
var fakeUtil = extend({}, util, {
  makeAuthenticatedRequestFactory: util.noop,
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Compute') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, [
      'address',
      'autoscaler',
      'disk',
      'firewall',
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
      'zone'
    ]);
  }
});

var extended = false;
var fakePaginator = {
  extend: function(Class, methods) {
    if (Class.name !== 'Compute') {
      return;
    }

    extended = true;
    methods = arrify(methods);
    assert.deepEqual(methods, [
      'getAddresses',
      'getAutoscalers',
      'getDisks',
      'getFirewalls',
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
      'getZones'
    ]);
  },
  streamify: function(methodName) {
    return methodName;
  }
};

function FakeFirewall() {
  this.calledWith_ = slice.call(arguments);
}

function FakeHealthCheck() {
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
  this.address = function() { return {}; };
  this.subnetwork = function() { return {}; };
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
  this.disk = function() { return {}; };
  this.vm = function() { return {}; };
  this.machineType = function() { return {}; };
}

function FakeService() {
  this.calledWith_ = arguments;
  Service.apply(this, arguments);
}

nodeutil.inherits(FakeService, Service);

describe('Compute', function() {
  var Compute;
  var compute;

  var PROJECT_ID = 'project-id';

  before(function() {
    Compute = proxyquire('../', {
      '@google-cloud/common': {
        Service: FakeService,
        paginator: fakePaginator,
        util: fakeUtil
      },
      './firewall.js': FakeFirewall,
      './health-check.js': FakeHealthCheck,
      './network.js': FakeNetwork,
      './operation.js': FakeOperation,
      './project.js': FakeProject,
      './region.js': FakeRegion,
      './rule.js': FakeRule,
      './service.js': FakeServiceClass,
      './snapshot.js': FakeSnapshot,
      './zone.js': FakeZone
    });
  });

  beforeEach(function() {
    compute = new Compute({
      projectId: PROJECT_ID
    });
  });

  describe('instantiation', function() {
    var options = {
      projectId: PROJECT_ID,
      credentials: 'credentials',
      email: 'email',
      keyFilename: 'keyFile'
    };

    it('should return a new instance of Compute', function() {
      var compute = new Compute({ projectId: PROJECT_ID });
      assert(compute instanceof Compute);
    });

    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options_) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(options, options_);
        return options_;
      };

      Compute.call(fakeContext, options);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should inherit from Service', function() {
      assert(compute instanceof Service);

      var calledWith = compute.calledWith_[0];

      var baseUrl = 'https://www.googleapis.com/compute/v1';
      assert.strictEqual(calledWith.baseUrl, baseUrl);
      assert.deepEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/compute'
      ]);
      assert.deepEqual(calledWith.packageJson, require('../package.json'));
    });

    it('should streamify the correct methods', function() {
      assert.strictEqual(compute.getAddressesStream, 'getAddresses');
      assert.strictEqual(compute.getAutoscalersStream, 'getAutoscalers');
      assert.strictEqual(compute.getDisksStream, 'getDisks');
      assert.strictEqual(compute.getInstanceGroupsStream, 'getInstanceGroups');
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
        var options = {
          allowed: {
            IPProtocol: 'http',
            ports: [8000]
          },
          protocols: {
            https: [8080, 9000],
            ssh: 22,
            ftp: [],
            ah: false,
            icmp: true
          }
        };

        compute.request = function(reqOpts) {
          assert.deepEqual(reqOpts.json.allowed, [
            { IPProtocol: 'http', ports: [8000] },
            { IPProtocol: 'https', ports: [8080, 9000] },
            { IPProtocol: 'ssh', ports: [22] },
            { IPProtocol: 'icmp', ports: [] }
          ]);
          assert.strictEqual(reqOpts.json.protocols, undefined);
          done();
        };

        compute.createFirewall('name', options, assert.ifError);
      });
    });

    describe('config.ranges', function() {
      it('should format ranges to sourceRanges', function(done) {
        var options = {
          ranges: '0.0.0.0/0' // non-array to test that it's arrified.
        };

        compute.request = function(reqOpts) {
          assert.deepEqual(reqOpts.json.sourceRanges, [options.ranges]);
          assert.strictEqual(reqOpts.json.ranges, undefined);
          done();
        };

        compute.createFirewall('name', options, assert.ifError);
      });
    });

    describe('config.tags', function() {
      it('should format tags to sourceTags', function(done) {
        var options = {
          tags: 'tag' // non-array to test that it's arrified.
        };

        compute.request = function(reqOpts) {
          assert.deepEqual(reqOpts.json.sourceTags, [options.tags]);
          assert.strictEqual(reqOpts.json.tags, undefined);
          done();
        };

        compute.createFirewall('name', options, assert.ifError);
      });
    });

    it('should make the correct API request', function(done) {
      var name = 'new-firewall-name';

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/firewalls');
        assert.deepEqual(reqOpts.json, { name: name });
        done();
      };

      compute.createFirewall(name, {}, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var apiResponse = {
        name: 'op-name'
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Firewall, Operation & apiResp', function(done) {
        var name = 'name';
        var firewall = {};
        var operation = {};

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
        var options = { interval: 50 };

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
        var options = { timeout: 50 };

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
        var name = 'https-health-check-name';

        compute.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.https, undefined);
          assert.strictEqual(reqOpts.json.name, name);
          assert.strictEqual(reqOpts.uri, '/global/httpsHealthChecks');
          done();
        };

        compute.createHealthCheck(name, { https: true }, assert.ifError);
      });
    });

    it('should make the correct default API request', function(done) {
      var name = 'new-health-check-name';
      var options = { a: 'b' };
      var originalOptions = extend({}, options);

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/httpHealthChecks');
        assert.deepEqual(reqOpts.json, { a: 'b', name: name });
        assert.deepEqual(options, originalOptions);
        done();
      };

      compute.createHealthCheck(name, options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var apiResponse = {
        name: 'op-name'
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with HealthCheck, Op, & apiResp', function(done) {
        var name = 'name';
        var healthCheck = {};
        var operation = {};

        compute.healthCheck = function(name_, options) {
          assert.strictEqual(name_, name);
          assert.deepEqual(options.https, undefined);
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
        var name = 'name';

        compute.healthCheck = function(name_, options) {
          assert.strictEqual(name_, name);
          assert.strictEqual(options.https, true);
          done();
        };

        compute.createHealthCheck('name', { https: true }, assert.ifError);
      });
    });
  });

  describe('createNetwork', function() {
    describe('config.range', function() {
      it('should set the IPv4Range', function(done) {
        var options = {
          range: '10.240.0.0/16'
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
        var options = {
          gateway: '10.1.1.1'
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
      var name = 'new-network';

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/networks');
        assert.deepEqual(reqOpts.json, { name: name });
        done();
      };

      compute.createNetwork(name, {}, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var NAME = 'network-name';
      var apiResponse = {
        name: 'op-name'
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Network, Operation & apiResp', function(done) {
        var network = {};
        var operation = {};

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
    var NAME = 'new-rule';

    it('should make the correct API request', function(done) {
      var config = { a: 'b' };
      var originalConfig = extend({}, config);
      var expectedConfig = extend({}, config, { name: NAME });

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/forwardingRules');
        assert.deepEqual(config, originalConfig);
        assert.deepEqual(reqOpts.json, expectedConfig);
        done();
      };

      compute.createRule(NAME, config, assert.ifError);
    });

    describe('config.ip', function() {
      var CONFIG = {
        ip: '0.0.0.0'
      };

      it('should accept an array of tags', function(done) {
        compute.request = function(reqOpts) {
          assert.deepEqual(reqOpts.json, {
            name: NAME,
            IPAddress: CONFIG.ip
          });
          done();
        };

        compute.createRule(NAME, CONFIG, assert.ifError);
      });
    });

    describe('config.protocol', function() {
      var CONFIG = {
        protocol: 'TCP'
      };

      it('should accept an array of tags', function(done) {
        compute.request = function(reqOpts) {
          assert.deepEqual(reqOpts.json, {
            name: NAME,
            IPProtocol: CONFIG.protocol
          });
          done();
        };

        compute.createRule(NAME, CONFIG, assert.ifError);
      });
    });

    describe('config.range', function() {
      var CONFIG = {
        range: '200-300'
      };

      it('should accept an array of tags', function(done) {
        compute.request = function(reqOpts) {
          assert.deepEqual(reqOpts.json, {
            name: NAME,
            portRange: CONFIG.range
          });
          done();
        };

        compute.createRule(NAME, CONFIG, assert.ifError);
      });
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var apiResponse = {
        name: 'op-name'
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Rule, Operation & apiResp', function(done) {
        var rule = {};
        var operation = {};

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
    var NAME = 'new-service';

    it('should make the correct API request', function(done) {
      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/global/backendServices');
        assert.deepEqual(reqOpts.json, { name: NAME });
        done();
      };

      compute.createService(NAME, {}, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var apiResponse = {
        name: 'op-name'
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Service, Operation & apiResp', function(done) {
        var service = {};
        var operation = {};

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
    var NAME = 'firewall-name';

    it('should return a Firewall object', function() {
      var firewall = compute.firewall(NAME);
      assert(firewall instanceof FakeFirewall);
      assert.strictEqual(firewall.calledWith_[0], compute);
      assert.strictEqual(firewall.calledWith_[1], NAME);
    });
  });

  describe('getAddresses', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getAddresses(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/addresses');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getAddresses(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var REGION_NAME = 'region-1';
      var FULL_REGION_NAME = 'regions/' + REGION_NAME;

      var address = { name: 'address-1' };
      var apiResponse = {
        items: {}
      };

      apiResponse.items[FULL_REGION_NAME] = {
        addresses: [address]
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Address objects from the response', function(done) {
        var region = {};

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
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getAddresses(query, function(err, addresses, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getAutoscalers', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getAutoscalers(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/autoscalers');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getAutoscalers(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var ZONE_NAME = 'us-central1-a';
      var FULL_ZONE_NAME = 'zones/' + ZONE_NAME;

      var autoscaler = { name: 'autoscaler-1' };
      var apiResponse = {
        items: {}
      };

      apiResponse.items['not-zone-name'] = {
        autoscalers: [autoscaler]
      };

      apiResponse.items[FULL_ZONE_NAME] = {
        autoscalers: [autoscaler]
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Autoscaler objects from the response', function(done) {
        var zone = {};

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
        var zone = {};

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
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        delete apiResponseWithNextPageToken.items;

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getAutoscalers(query, function(err, autoscalers, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getDisks', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getDisks(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/disks');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getDisks(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var ZONE_NAME = 'zone-1';
      var FULL_ZONE_NAME = 'zones/' + ZONE_NAME;

      var disk = { name: 'disk-1' };
      var apiResponse = {
        items: {}
      };

      apiResponse.items[FULL_ZONE_NAME] = {
        disks: [disk]
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Disk objects from the response', function(done) {
        var zone = {};

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
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getDisks(query, function(err, disks, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getFirewalls', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getFirewalls(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/firewalls');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getFirewalls(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var firewall = { name: 'firewall-1' };
      var apiResponse = {
        items: [firewall]
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
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getFirewalls(query, function(err, firewalls, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getHealthChecks', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getHealthChecks(assert.ifError);
    });

    it('should make the correct default API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/httpHealthChecks');
        assert.deepEqual(reqOpts.qs, options);
        done();
      };

      compute.getHealthChecks(options, assert.ifError);
    });

    describe('options.https', function() {
      it('should make the correct API request', function(done) {
        var options = { https: true };
        var originalOptions = extend({}, options);

        compute.request = function(reqOpts) {
          assert.strictEqual(reqOpts.uri, '/global/httpsHealthChecks');
          assert.deepEqual(reqOpts.qs, {});
          assert.deepEqual(options, originalOptions);
          done();
        };

        compute.getHealthChecks(options, assert.ifError);
      });
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var healthCheck = { name: 'health-check-1' };
      var apiResponse = { items: [healthCheck] };

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

        compute.getHealthChecks({ https: true }, assert.ifError);
      });

      it('should build a nextQuery if necessary', function(done) {
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getHealthChecks(query, function(err, firewalls, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getInstanceGroups', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getInstanceGroups(assert.ifError);
    });

    it('should make the correct default API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/instanceGroups');
        assert.deepEqual(reqOpts.qs, options);
        done();
      };

      compute.getInstanceGroups(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var ZONE_NAME = 'zone-1';
      var FULL_ZONE_NAME = 'zones/' + ZONE_NAME;

      var instanceGroup = { name: 'isntance-group-1' };
      var apiResponse = {
        items: {}
      };

      apiResponse.items[FULL_ZONE_NAME] = {
        instanceGroups: [instanceGroup]
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create InstanceGroup objects from the resp', function(done) {
        var zone = {};

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
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        delete apiResponseWithNextPageToken.items;

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getInstanceGroups(query, function(err, groups, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getMachineTypes', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getMachineTypes(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/machineTypes');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getMachineTypes(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {};

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
      var ZONE_NAME = 'zone-1';
      var FULL_ZONE_NAME = 'zones/' + ZONE_NAME;

      var machineType = { name: 'machineType-1' };
      var apiResponse = {
        items: {}
      };

      apiResponse.items[FULL_ZONE_NAME] = {
        machineTypes: [machineType]
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create MachineType objects from the response', function(done) {
        var zone = {};
        var machineTypeInstance = {};

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
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getMachineTypes(query, function(err, machineTypes, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getNetworks', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getNetworks(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/networks');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getNetworks(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var network = { name: 'network-1' };
      var apiResponse = {
        items: [network]
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
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getNetworks(query, function(err, networks, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getOperations', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getOperations(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/operations');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getOperations(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var operation = { name: 'op-1' };
      var apiResponse = {
        items: [operation]
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
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getOperations(query, function(err, operations, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getRegions', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getRegions(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/regions');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getRegions(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var region = { name: 'region-1' };
      var apiResponse = {
        items: [region]
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
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getRegions(query, function(err, regions, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getRules', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getRules(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/forwardingRules');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getRules(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var rule = {
        name: 'rule-1'
      };
      var apiResponse = {
        items: [rule]
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
          assert.deepEqual(rules, [rule]);
          done();
        });
      });

      it('should build a nextQuery if necessary', function(done) {
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = {
          a: 'b',
          c: 'd'
        };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getRules(query, function(err, rules, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getServices', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getServices(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/backendServices');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getServices(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var service = {
        name: 'service-1'
      };
      var apiResponse = {
        items: [service]
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
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = {
          a: 'b',
          c: 'd'
        };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getServices(query, function(err, services, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getSnapshots', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getSnapshots(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/global/snapshots');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getSnapshots(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var snapshot = { name: 'snapshot-1' };
      var apiResponse = {
        items: [snapshot]
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
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getSnapshots(query, function(err, snapshots, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getSubnetworks', function() {
    it('should accept only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getSubnetworks(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/subnetworks');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getSubnetworks(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var REGION_NAME = 'region-1';
      var FULL_REGION_NAME = 'regions/' + REGION_NAME;

      var subnetwork = { name: 'subnetwork-1' };
      var apiResponse = {
        items: {}
      };

      apiResponse.items[FULL_REGION_NAME] = {
        subnetworks: [subnetwork]
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create Subnetwork objects from the response', function(done) {
        var region = {};
        var fakeSubnetwork = {};

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
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getSubnetworks(query, function(err, subnetworks, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getVMs', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getVMs(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/aggregated/instances');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getVMs(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var ZONE_NAME = 'zone-1';
      var FULL_ZONE_NAME = 'zones/' + ZONE_NAME;

      var vm = { name: 'vm-1' };
      var apiResponse = {
        items: {}
      };

      apiResponse.items[FULL_ZONE_NAME] = {
        instances: [vm]
      };

      beforeEach(function() {
        compute.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should create VM objects from the response', function(done) {
        var zone = {};

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
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getVMs(query, function(err, vms, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('getZones', function() {
    it('should work with only a callback', function(done) {
      compute.request = function(reqOpts) {
        assert.deepEqual(reqOpts.qs, {});
        done();
      };

      compute.getZones(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var options = {};

      compute.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/zones');
        assert.strictEqual(reqOpts.qs, options);
        done();
      };

      compute.getZones(options, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

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
      var zone = { name: 'zone-1' };
      var apiResponse = {
        items: [zone]
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
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        compute.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        compute.getZones(query, function(err, snapshots, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });
    });
  });

  describe('healthCheck', function() {
    var NAME = 'health-check-name';
    var OPTIONS = {};

    it('should return a HealthCheck object', function() {
      var healthCheck = compute.healthCheck(NAME, OPTIONS);
      assert(healthCheck instanceof FakeHealthCheck);
      assert.strictEqual(healthCheck.calledWith_[0], compute);
      assert.strictEqual(healthCheck.calledWith_[1], NAME);
      assert.strictEqual(healthCheck.calledWith_[2], OPTIONS);
    });
  });

  describe('network', function() {
    var NAME = 'network-name';

    it('should return a Network object', function() {
      var network = compute.network(NAME);
      assert(network instanceof FakeNetwork);
      assert.strictEqual(network.calledWith_[0], compute);
      assert.strictEqual(network.calledWith_[1], NAME);
    });
  });

  describe('operation', function() {
    var NAME = 'op-name';

    it('should return an Operation object', function() {
      var op = compute.operation(NAME);
      assert(op instanceof FakeOperation);
      assert.strictEqual(op.calledWith_[0], compute);
      assert.strictEqual(op.calledWith_[1], NAME);
    });
  });

  describe('project', function() {
    it('should return a Region object', function() {
      var project = compute.project();
      assert(project instanceof FakeProject);
      assert.strictEqual(project.calledWith_[0], compute);
    });
  });

  describe('region', function() {
    var NAME = 'region-name';

    it('should return a Region object', function() {
      var region = compute.region(NAME);
      assert(region instanceof FakeRegion);
      assert.strictEqual(region.calledWith_[0], compute);
      assert.strictEqual(region.calledWith_[1], NAME);
    });
  });

  describe('rule', function() {
    var NAME = 'rule-name';

    it('should return a Rule object', function() {
      var rule = compute.rule(NAME);
      assert(rule instanceof FakeRule);
      assert.strictEqual(rule.calledWith_[0], compute);
      assert.strictEqual(rule.calledWith_[1], NAME);
    });
  });

  describe('service', function() {
    var NAME = 'service-name';

    it('should return a Service object', function() {
      var service = compute.service(NAME);
      assert(service instanceof FakeServiceClass);
      assert.strictEqual(service.calledWith_[0], compute);
      assert.strictEqual(service.calledWith_[1], NAME);
    });
  });

  describe('snapshot', function() {
    var NAME = 'snapshot-name';

    it('should return a Snapshot object', function() {
      var snapshot = compute.snapshot(NAME);
      assert(snapshot instanceof FakeSnapshot);
      assert.strictEqual(snapshot.calledWith_[0], compute);
      assert.strictEqual(snapshot.calledWith_[1], NAME);
    });
  });

  describe('zone', function() {
    var NAME = 'zone-name';

    it('should return a Zone object', function() {
      var zone = compute.zone(NAME);
      assert(zone instanceof FakeZone);
      assert.strictEqual(zone.calledWith_[0], compute);
      assert.strictEqual(zone.calledWith_[1], NAME);
    });
  });

  describe('execAfterOperation_', function() {
    var OPERATION = new events.EventEmitter();

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      function onComplete(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      }

      var execWithOperation = compute.execAfterOperation_(onComplete);

      execWithOperation(error, OPERATION, apiResponse);
    });

    it('should support variable arity', function(done) {
      var error = new Error('Error.');
      var apiResponse = {};

      function onComplete(err, apiResponse_) {
        assert.strictEqual(err, error);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      }

      var execWithOperation = compute.execAfterOperation_(onComplete);

      execWithOperation(error, null, null, OPERATION, apiResponse);
    });

    it('should register callback on operation error', function(done) {
      var apiResponse = {};

      function onComplete() {}

      OPERATION.once('newListener', function(event, callback) {
        assert.strictEqual(event, 'error');
        assert.strictEqual(callback, onComplete);
        done();
      });

      var execWithOperation = compute.execAfterOperation_(onComplete);
      execWithOperation(null, OPERATION, apiResponse);
    });

    it('should execute callback on operation complete', function(done) {
      var apiResponse = {};

      function onComplete(err, apiResponse_) {
        assert.strictEqual(err, null);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      }

      var execWithOperation = compute.execAfterOperation_(onComplete);
      execWithOperation(null, OPERATION, {});

      OPERATION.emit('complete', apiResponse);
    });
  });
});
