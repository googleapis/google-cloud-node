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
var extend = require('extend');
var format = require('string-format-obj');

var Network = require('../../lib/compute/network.js');

describe('Network', function() {
  var network;

  var COMPUTE = { projectId: 'project-id' };
  var NETWORK_NAME = 'network-name';
  var NETWORK_FULL_NAME = format('projects/{pId}/global/networks/{name}', {
    pId: COMPUTE.projectId,
    name: NETWORK_NAME
  });

  beforeEach(function() {
    network = new Network(COMPUTE, NETWORK_NAME);
  });

  describe('instantiation', function() {
    it('should localize the compute instance', function() {
      assert.strictEqual(network.compute, COMPUTE);
    });

    it('should localize the name', function() {
      assert.strictEqual(network.name, NETWORK_NAME);
    });

    it('should default metadata to an empty object', function() {
      assert.strictEqual(typeof network.metadata, 'object');
      assert.strictEqual(Object.keys(network.metadata).length, 0);
    });

    it('should format the network name', function() {
      var formatName_ = Network.formatName_;
      var formattedName = 'projects/a/global/networks/b';

      Network.formatName_ = function(compute, name) {
        Network.formatName_ = formatName_;

        assert.strictEqual(compute, COMPUTE);
        assert.strictEqual(name, NETWORK_NAME);

        return formattedName;
      };

      var network = new Network(COMPUTE, NETWORK_NAME);
      assert(network.formattedName, formattedName);
    });
  });

  describe('formatName_', function() {
    it('should format the name', function() {
      var formattedName_ = Network.formatName_(COMPUTE, NETWORK_NAME);
      assert.strictEqual(formattedName_, NETWORK_FULL_NAME);
    });
  });

  describe('createFirewall', function() {
    it('should make the correct call to Compute', function(done) {
      var name = 'firewall-name';
      var config = { a: 'b', c: 'd' };
      var expectedConfig = extend({}, config, {
        network: network.formattedName
      });

      network.compute.createFirewall = function(name_, config_, callback) {
        assert.strictEqual(name_, name);
        assert.deepEqual(config_, expectedConfig);
        callback();
      };

      network.createFirewall(name, config, done);
    });
  });

  describe('delete', function() {
    it('should make the correct API request', function(done) {
      network.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'DELETE');
        assert.strictEqual(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);
        done();
      };

      network.delete(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        network.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        network.delete(function(err, operation, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          network.delete();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        name: 'op-name'
      };

      beforeEach(function() {
        network.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', function(done) {
        var operation = {};

        network.compute.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        network.delete(function(err, operation_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          network.delete();
        });
      });
    });
  });

  describe('firewall', function() {
    it('should return a Firewall with the correct metadata', function() {
      var name = 'firewall-name';
      var firewall = {};

      network.compute.firewall = function(name_) {
        assert.strictEqual(name_, name);
        return firewall;
      };

      var firewallInstance = network.firewall(name);
      assert.deepEqual(firewallInstance.metadata, {
        network: network.formattedName
      });
    });
  });

  describe('getFirewalls', function() {
    it('should make the correct call to Compute', function(done) {
      var options = { a: 'b', c: 'd' };
      var expectedOptions = extend({}, options, {
        filter: 'network eq .*' + network.formattedName
      });

      network.compute.getFirewalls = function(options, callback) {
        assert.deepEqual(options, expectedOptions);
        callback();
      };

      network.getFirewalls(options, done);
    });

    it('should not require options', function(done) {
      network.compute.getFirewalls = function(options, callback) {
        callback();
      };

      network.getFirewalls(done);
    });

    it('should not require any arguments', function(done) {
      network.compute.getFirewalls = function(options, callback) {
        assert.deepEqual(options, {
          filter: 'network eq .*' + network.formattedName
        });
        assert.strictEqual(typeof callback, 'undefined');
        done();
      };

      network.getFirewalls();
    });

    it('should return the result of calling Compute', function() {
      var resultOfGetFirewalls = {};

      network.compute.getFirewalls = function() {
        return resultOfGetFirewalls;
      };

      assert.strictEqual(network.getFirewalls(), resultOfGetFirewalls);
    });
  });

  describe('getMetadata', function() {
    it('should make the correct API request', function(done) {
      network.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        done();
      };

      network.getMetadata(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        network.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error and API response', function(done) {
        network.getMetadata(function(err, metadata, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(metadata, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          network.getMetadata();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        network.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should update the metadata to the API response', function(done) {
        network.getMetadata(function(err) {
          assert.ifError(err);
          assert.strictEqual(network.metadata, apiResponse);
          done();
        });
      });

      it('should exec callback with metadata and API response', function(done) {
        network.getMetadata(function(err, metadata, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          network.getMetadata();
        });
      });
    });
  });

  describe('makeReq_', function() {
    it('should make the correct request to Compute', function(done) {
      var expectedPathPrefix = '/global/networks/' + network.name;

      var method = 'POST';
      var path = '/test';
      var query = {
        a: 'b',
        c: 'd'
      };
      var body = {
        a: 'b',
        c: 'd'
      };

      network.compute.makeReq_ = function(method_, path_, query_, body_, cb) {
        assert.strictEqual(method_, method);
        assert.strictEqual(path_, expectedPathPrefix + path);
        assert.strictEqual(query_, query);
        assert.strictEqual(body_, body);
        cb();
      };

      network.makeReq_(method, path, query, body, done);
    });
  });
});
