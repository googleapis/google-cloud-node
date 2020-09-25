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
const format = require('string-format-obj');
const proxyquire = require('proxyquire');
const {ServiceObject, util} = require('@google-cloud/common');
const promisify = require('@google-cloud/promisify');

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  promisifyAll: function (Class, options) {
    if (Class.name !== 'Network') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, ['firewall']);
  },
});

class FakeServiceObject extends ServiceObject {
  constructor(config) {
    super(config);
    this.calledWith_ = arguments;
  }
}

describe('Network', () => {
  let Network;
  let network;

  /* eslint-disable no-unused-vars */
  let REGION;
  let Region;

  const COMPUTE = {
    projectId: 'project-id',
    createNetwork: util.noop,
  };
  const NETWORK_NAME = 'network-name';
  const NETWORK_FULL_NAME = format('projects/{pId}/global/networks/{name}', {
    pId: COMPUTE.projectId,
    name: NETWORK_NAME,
  });
  const REGION_NAME = 'region-name';

  before(() => {
    Network = proxyquire('../src/network.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/promisify': fakePromisify,
    });

    Region = require('../src/region.js');
  });

  beforeEach(() => {
    network = new Network(COMPUTE, NETWORK_NAME);
    REGION = new Region(COMPUTE, REGION_NAME);
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize the compute instance', () => {
      assert.strictEqual(network.compute, COMPUTE);
    });

    it('should localize the name', () => {
      assert.strictEqual(network.name, NETWORK_NAME);
    });

    it('should format the network name', () => {
      const formatName_ = Network.formatName_;
      const formattedName = 'projects/a/global/networks/b';

      Network.formatName_ = function (compute, name) {
        Network.formatName_ = formatName_;

        assert.strictEqual(compute, COMPUTE);
        assert.strictEqual(name, NETWORK_NAME);

        return formattedName;
      };

      const network = new Network(COMPUTE, NETWORK_NAME);
      assert(network.formattedName, formattedName);
    });

    it('should inherit from ServiceObject', done => {
      const computeInstance = Object.assign({}, COMPUTE, {
        createNetwork: {
          bind: function (context) {
            assert.strictEqual(context, computeInstance);
            done();
          },
        },
      });

      const network = new Network(computeInstance, NETWORK_NAME);
      assert(network instanceof ServiceObject);

      const calledWith = network.calledWith_[0];

      assert.strictEqual(calledWith.parent, computeInstance);
      assert.strictEqual(calledWith.baseUrl, '/global/networks');
      assert.strictEqual(calledWith.id, NETWORK_NAME);
      assert.deepStrictEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true,
        getMetadata: true,
      });
    });
  });

  describe('formatName_', () => {
    it('should format the name', () => {
      const formattedName_ = Network.formatName_(COMPUTE, NETWORK_NAME);
      assert.strictEqual(formattedName_, NETWORK_FULL_NAME);
    });
  });

  describe('createFirewall', () => {
    it('should make the correct call to Compute', done => {
      const name = 'firewall-name';
      const config = {a: 'b', c: 'd'};
      const expectedConfig = Object.assign({}, config, {
        network: network.formattedName,
      });

      network.compute.createFirewall = function (name_, config_, callback) {
        assert.strictEqual(name_, name);
        assert.deepStrictEqual(config_, expectedConfig);
        callback();
      };

      network.createFirewall(name, config, done);
    });
  });

  describe('createSubnetwork', () => {
    it('should call region.createSubnetwork correctly', done => {
      const name = 'subnetwork-name';
      const region = {};
      const config = {
        a: 'b',
        c: 'd',
        region: REGION_NAME,
      };

      const expectedConfig = Object.assign({}, config, {
        network: network.formattedName,
      });
      delete expectedConfig.region;

      network.compute.region = function (name) {
        assert.strictEqual(name, REGION_NAME);
        return region;
      };

      region.createSubnetwork = function (name_, config, callback) {
        assert.strictEqual(name_, name);
        assert.deepStrictEqual(config, expectedConfig);

        callback(); // done();
      };

      network.createSubnetwork(name, config, done);
    });
  });

  describe('delete', () => {
    it('should call ServiceObject.delete', done => {
      FakeServiceObject.prototype.delete = function () {
        assert.strictEqual(this, network);
        done();
      };

      network.delete();
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        FakeServiceObject.prototype.delete = function (callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', done => {
        network.delete((err, operation, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          network.delete();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(() => {
        FakeServiceObject.prototype.delete = function (callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', done => {
        const operation = {};

        network.compute.operation = function (name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        network.delete((err, operation_, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          network.delete();
        });
      });
    });
  });

  describe('firewall', () => {
    it('should return a Firewall with the correct metadata', () => {
      const name = 'firewall-name';
      const firewall = {};

      network.compute.firewall = function (name_) {
        assert.strictEqual(name_, name);
        return firewall;
      };

      const firewallInstance = network.firewall(name);
      assert.deepStrictEqual(firewallInstance.metadata, {
        network: network.formattedName,
      });
    });
  });

  describe('getFirewalls', () => {
    it('should make the correct call to Compute', done => {
      const options = {a: 'b', c: 'd'};
      const expectedOptions = Object.assign({}, options, {
        filter: 'network eq .*' + network.formattedName,
      });

      network.compute.getFirewalls = function (options, callback) {
        assert.deepStrictEqual(options, expectedOptions);
        callback();
      };

      network.getFirewalls(options, done);
    });

    it('should not require options', done => {
      network.compute.getFirewalls = function (options, callback) {
        callback();
      };

      network.getFirewalls(done);
    });
  });

  describe('getFirewallsStream', () => {
    it('should call to getFirewallsStream correctly', done => {
      const options = {a: 'b', c: 'd'};
      const expectedOptions = Object.assign({}, options, {
        filter: 'network eq .*' + network.formattedName,
      });

      network.compute.getFirewallsStream = function (options) {
        assert.deepStrictEqual(options, expectedOptions);
        done();
      };

      network.getFirewallsStream(options);
    });

    it('should not require options', done => {
      network.compute.getFirewallsStream = function () {
        done();
      };

      network.getFirewallsStream();
    });

    it('should return a stream', done => {
      const fakeStream = {};

      network.compute.getFirewallsStream = function () {
        setImmediate(done);
        return fakeStream;
      };

      const stream = network.getFirewallsStream();
      assert.strictEqual(stream, fakeStream);
    });
  });

  describe('getSubnetworks', () => {
    it('should call to compute.getSubnetworks correctly', done => {
      const options = {a: 'b', c: 'd'};
      const expectedOptions = Object.assign({}, options, {
        filter: 'network eq .*' + network.formattedName,
      });

      network.compute.getSubnetworks = function (options, callback) {
        assert.deepStrictEqual(options, expectedOptions);
        callback();
      };

      network.getSubnetworks(options, done);
    });

    it('should not require options', done => {
      network.compute.getSubnetworks = function (options, callback) {
        callback();
      };

      network.getSubnetworks(done);
    });
  });

  describe('getSubnetworksStream', () => {
    it('should call to getSubnetworksStream correctly', done => {
      const options = {a: 'b', c: 'd'};
      const expectedOptions = Object.assign({}, options, {
        filter: 'network eq .*' + network.formattedName,
      });

      network.compute.getSubnetworksStream = function (options) {
        assert.deepStrictEqual(options, expectedOptions);
        done();
      };

      network.getSubnetworksStream(options);
    });

    it('should not require options', done => {
      network.compute.getSubnetworksStream = function () {
        done();
      };

      network.getSubnetworksStream();
    });

    it('should return a stream', done => {
      const fakeStream = {};

      network.compute.getSubnetworksStream = function () {
        setImmediate(done);
        return fakeStream;
      };

      const stream = network.getSubnetworksStream();
      assert.strictEqual(stream, fakeStream);
    });
  });
});
