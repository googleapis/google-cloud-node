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
var common = require('@google-cloud/common');
var extend = require('extend');
var is = require('is');
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var ServiceObject = common.ServiceObject;

var promisified = false;
var fakeUtil = extend({}, common.util, {
  promisifyAll: function(Class, options) {
    if (Class.name !== 'Region') {
      return;
    }

    promisified = true;
    assert.deepStrictEqual(options.exclude, [
      'address',
      'operation',
      'rule',
      'subnetwork',
    ]);
  },
});

function FakeAddress() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeNetwork() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeOperation() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeRule() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

function FakeSubnetwork() {
  this.calledWith_ = [].slice.call(arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

var extended = false;
var fakePaginator = {
  extend: function(Class, methods) {
    if (Class.name !== 'Region') {
      return;
    }

    extended = true;
    methods = arrify(methods);
    assert.strictEqual(Class.name, 'Region');
    assert.deepStrictEqual(methods, [
      'getAddresses',
      'getOperations',
      'getRules',
      'getSubnetworks',
    ]);
  },
  streamify: function(methodName) {
    return methodName;
  },
};

describe('Region', function() {
  var Region;
  var region;

  var COMPUTE = {
    authConfig: {a: 'b', c: 'd'},
  };
  var REGION_NAME = 'us-central1';

  before(function() {
    Region = proxyquire('../src/region.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        paginator: fakePaginator,
        util: fakeUtil,
      },
      './address.js': FakeAddress,
      './network.js': FakeNetwork,
      './operation.js': FakeOperation,
      './rule.js': FakeRule,
      './subnetwork.js': FakeSubnetwork,
    });
  });

  beforeEach(function() {
    region = new Region(COMPUTE, REGION_NAME);
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should extend the correct methods', function() {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', function() {
      assert.strictEqual(region.getAddressesStream, 'getAddresses');
      assert.strictEqual(region.getOperationsStream, 'getOperations');
      assert.strictEqual(region.getRulesStream, 'getRules');
      assert.strictEqual(region.getSubnetworksStream, 'getSubnetworks');
    });

    it('should localize the name', function() {
      assert.strictEqual(region.name, REGION_NAME);
    });

    it('should inherit from ServiceObject', function() {
      assert(region instanceof ServiceObject);

      var calledWith = region.calledWith_[0];

      assert.strictEqual(calledWith.parent, COMPUTE);
      assert.strictEqual(calledWith.baseUrl, '/regions');
      assert.strictEqual(calledWith.id, REGION_NAME);
      assert.deepStrictEqual(calledWith.methods, {
        exists: true,
        get: true,
        getMetadata: true,
      });
    });

    describe('request interceptor', function() {
      it('should assign a request interceptor', function() {
        var requestInterceptor = region.interceptors.pop().request;
        assert(is.fn(requestInterceptor));
      });

      it('should strip `/global` from forwardingRules requests', function() {
        var reqOpts = {
          uri: '/compute/v1/projects/projectId/global/forwardingRules',
        };
        var expectedReqOpts = {
          uri: '/compute/v1/projects/projectId/forwardingRules',
        };

        var requestInterceptor = region.interceptors.pop().request;
        assert.deepStrictEqual(requestInterceptor(reqOpts), expectedReqOpts);
      });

      it('should not affect non-cancel requests', function() {
        var reqOpts = {
          uri: '/compute/v1/projects/projectId/other/request',
        };
        var expectedReqOpts = {
          uri: '/compute/v1/projects/projectId/other/request',
        };

        var requestInterceptor = region.interceptors.pop().request;
        assert.deepStrictEqual(requestInterceptor(reqOpts), expectedReqOpts);
      });
    });
  });

  describe('address', function() {
    var NAME = 'address-name';

    it('should return an Address object', function() {
      var address = region.address(NAME);
      assert(address instanceof FakeAddress);
      assert.strictEqual(address.calledWith_[0], region);
      assert.strictEqual(address.calledWith_[1], NAME);
    });
  });

  describe('createAddress', function() {
    var NAME = 'address-name';
    var OPTIONS = {a: 'b', c: 'd'};
    var EXPECTED_BODY = extend({}, OPTIONS, {name: NAME});

    it('should not require any options', function(done) {
      var expectedBody = {name: NAME};

      region.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.json, expectedBody);
        done();
      };

      region.createAddress(NAME, assert.ifError);
    });

    it('should make the correct API request', function(done) {
      region.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/addresses');
        assert.deepStrictEqual(reqOpts.json, EXPECTED_BODY);

        done();
      };

      region.createAddress(NAME, OPTIONS, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        region.createAddress(NAME, OPTIONS, function(err, address_, op, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(address_, null);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {name: 'operation-name'};

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec callback with Address, Op & apiResponse', function(done) {
        var address = {};
        var operation = {};

        region.address = function(name) {
          assert.strictEqual(name, NAME);
          return address;
        };

        region.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        region.createAddress(NAME, OPTIONS, function(err, address_, op, resp) {
          assert.ifError(err);

          assert.strictEqual(address_, address);

          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, resp);

          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });

  describe('createRule', function() {
    var NAME = 'rule-name';
    var CONFIG = {};

    it('should call compute#createRule', function(done) {
      region.parent.createRule = function(name, config, callback) {
        assert.strictEqual(this, region);
        assert.strictEqual(name, NAME);
        assert.strictEqual(config, CONFIG);
        callback(); // done()
      };

      region.createRule(NAME, CONFIG, done);
    });
  });

  describe('createSubnetwork', function() {
    var NAME = 'subnetwork-name';
    var CONFIG = {
      a: 'b',
      c: 'd',
      network: 'network-name',
    };
    var EXPECTED_BODY = extend({}, CONFIG, {name: NAME});

    it('should make the correct API request', function(done) {
      region.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/subnetworks');
        assert.deepStrictEqual(reqOpts.json, EXPECTED_BODY);

        done();
      };

      region.createSubnetwork(NAME, CONFIG, assert.ifError);
    });

    describe('config.network', function() {
      it('should accept a Network object', function(done) {
        var network = new FakeNetwork();
        network.formattedName = 'formatted-name';

        var config = extend({}, CONFIG, {
          network: network,
        });

        region.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.network, network.formattedName);
          done();
        };

        region.createSubnetwork(NAME, config, assert.ifError);
      });
    });

    describe('config.range', function() {
      it('should accept and delete a range property', function(done) {
        var config = extend({}, CONFIG, {
          range: '...',
        });

        region.request = function(reqOpts) {
          assert.strictEqual(reqOpts.json.ipCidrRange, config.range);
          assert.strictEqual(reqOpts.json.range, undefined);
          done();
        };

        region.createSubnetwork(NAME, config, assert.ifError);
      });
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        region.createSubnetwork(NAME, CONFIG, function(err, sub, op, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(sub, null);
          assert.strictEqual(op, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {name: 'operation-name'};

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Subnetwork, Op & apiResponse', function(done) {
        var subnetwork = {};
        var operation = {};

        region.subnetwork = function(name) {
          assert.strictEqual(name, NAME);
          return subnetwork;
        };

        region.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        region.createSubnetwork(NAME, CONFIG, function(err, sub, op, resp) {
          assert.ifError(err);

          assert.strictEqual(sub, subnetwork);

          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, resp);

          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });

  describe('getAddresses', function() {
    it('should accept only a callback', function(done) {
      region.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      region.getAddresses(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var query = {a: 'b', c: 'd'};

      region.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/addresses');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      region.getAddresses(query, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        region.getAddresses({}, function(err, addresses, nextQuery, apiResp) {
          assert.strictEqual(err, error);
          assert.strictEqual(addresses, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        items: [{name: 'operation-name'}],
      };

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        var expectedNextQuery = {
          pageToken: nextPageToken,
        };

        region.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        region.getAddresses({}, function(err, addresses, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Operations & API resp', function(done) {
        var address = {};

        region.address = function(name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return address;
        };

        region.getAddresses({}, function(err, addresses, nextQuery, apiResp) {
          assert.ifError(err);

          assert.strictEqual(addresses[0], address);
          assert.strictEqual(addresses[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResp, apiResponse);

          done();
        });
      });
    });
  });

  describe('getOperations', function() {
    it('should accept only a callback', function(done) {
      region.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      region.getOperations(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var query = {a: 'b', c: 'd'};

      region.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/operations');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      region.getOperations(query, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        region.getOperations({}, function(err, operations, nextQuery, apiResp) {
          assert.strictEqual(err, error);
          assert.strictEqual(operations, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        items: [{name: 'operation-name'}],
      };

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        var expectedNextQuery = {
          pageToken: nextPageToken,
        };

        region.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        region.getOperations({}, function(err, operations, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Operations & API resp', function(done) {
        var operation = {};

        region.operation = function(name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return operation;
        };

        region.getOperations({}, function(err, operations, nextQuery, apiResp) {
          assert.ifError(err);

          assert.strictEqual(operations[0], operation);
          assert.strictEqual(operations[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResp, apiResponse);

          done();
        });
      });
    });
  });

  describe('getRules', function() {
    it('should accept only a callback', function(done) {
      region.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      region.getRules(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var query = {a: 'b', c: 'd'};

      region.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/forwardingRules');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      region.getRules(query, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        region.getRules({}, function(err, rules, nextQuery, apiResp) {
          assert.strictEqual(err, error);
          assert.strictEqual(rules, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        items: [{name: 'operation-name'}],
      };

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        var expectedNextQuery = {
          pageToken: nextPageToken,
        };

        region.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        region.getRules({}, function(err, rules, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Operations & API resp', function(done) {
        var rule = {};

        region.rule = function(name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return rule;
        };

        region.getRules({}, function(err, rules, nextQuery, apiResp) {
          assert.ifError(err);

          assert.strictEqual(rules[0], rule);
          assert.strictEqual(rules[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResp, apiResponse);

          done();
        });
      });
    });
  });

  describe('getSubnetworks', function() {
    it('should accept only a callback', function(done) {
      region.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.qs, {});
        done();
      };

      region.getSubnetworks(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var query = {a: 'b', c: 'd'};

      region.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/subnetworks');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      region.getSubnetworks(query, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        region.getSubnetworks({}, function(err, subnetworks, nextQuery, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(subnetworks, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        items: [{name: 'subnetwork-name'}],
      };

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        var expectedNextQuery = {
          pageToken: nextPageToken,
        };

        region.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        region.getSubnetworks({}, function(err, subnetworks, nextQuery) {
          assert.ifError(err);

          assert.deepStrictEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Operations & API resp', function(done) {
        var subnetwork = {};

        region.subnetwork = function(name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return subnetwork;
        };

        region.getSubnetworks({}, function(err, subnetworks, nextQuery, resp) {
          assert.ifError(err);

          assert.strictEqual(subnetworks[0], subnetwork);
          assert.strictEqual(subnetworks[0].metadata, apiResponse.items[0]);

          assert.strictEqual(resp, apiResponse);

          done();
        });
      });
    });
  });

  describe('operation', function() {
    var NAME = 'operation-name';

    it('should return a Operation object', function() {
      var operation = region.operation(NAME);
      assert(operation instanceof FakeOperation);
      assert.strictEqual(operation.calledWith_[0], region);
      assert.strictEqual(operation.calledWith_[1], NAME);
    });
  });

  describe('rule', function() {
    var NAME = 'rule-name';

    it('should return a Operation object', function() {
      var rule = region.rule(NAME);
      assert(rule instanceof FakeRule);
      assert.strictEqual(rule.calledWith_[0], region);
      assert.strictEqual(rule.calledWith_[1], NAME);
    });
  });

  describe('subnetwork', function() {
    var NAME = 'subnetwork-name';

    it('should return a Subnetwork object', function() {
      var subnetwork = region.subnetwork(NAME);
      assert(subnetwork instanceof FakeSubnetwork);
      assert.strictEqual(subnetwork.calledWith_[0], region);
      assert.strictEqual(subnetwork.calledWith_[1], NAME);
    });
  });
});
