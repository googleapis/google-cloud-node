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
const {ServiceObject} = require('@google-cloud/common');
const extend = require('extend');
const is = require('is');
const nodeutil = require('util');
const proxyquire = require('proxyquire');
const promisify = require('@google-cloud/promisify');

let promisified = false;
const fakePromisify = extend({}, promisify, {
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

let extended = false;
const fakePaginator = {
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
  let Region;
  let region;

  const COMPUTE = {
    authConfig: {a: 'b', c: 'd'},
  };
  const REGION_NAME = 'us-central1';

  before(function() {
    Region = proxyquire('../src/region.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        paginator: fakePaginator,
      },
      '@google-cloud/promisify': fakePromisify,
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

      const calledWith = region.calledWith_[0];

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
        const requestInterceptor = region.interceptors.pop().request;
        assert(is.fn(requestInterceptor));
      });

      it('should strip `/global` from forwardingRules requests', function() {
        const reqOpts = {
          uri: '/compute/v1/projects/projectId/global/forwardingRules',
        };
        const expectedReqOpts = {
          uri: '/compute/v1/projects/projectId/forwardingRules',
        };

        const requestInterceptor = region.interceptors.pop().request;
        assert.deepStrictEqual(requestInterceptor(reqOpts), expectedReqOpts);
      });

      it('should not affect non-cancel requests', function() {
        const reqOpts = {
          uri: '/compute/v1/projects/projectId/other/request',
        };
        const expectedReqOpts = {
          uri: '/compute/v1/projects/projectId/other/request',
        };

        const requestInterceptor = region.interceptors.pop().request;
        assert.deepStrictEqual(requestInterceptor(reqOpts), expectedReqOpts);
      });
    });
  });

  describe('address', function() {
    const NAME = 'address-name';

    it('should return an Address object', function() {
      const address = region.address(NAME);
      assert(address instanceof FakeAddress);
      assert.strictEqual(address.calledWith_[0], region);
      assert.strictEqual(address.calledWith_[1], NAME);
    });
  });

  describe('createAddress', function() {
    const NAME = 'address-name';
    const OPTIONS = {a: 'b', c: 'd'};
    const EXPECTED_BODY = extend({}, OPTIONS, {name: NAME});

    it('should not require any options', function(done) {
      const expectedBody = {name: NAME};

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
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

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
      const apiResponse = {name: 'operation-name'};

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec callback with Address, Op & apiResponse', function(done) {
        const address = {};
        const operation = {};

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
    const NAME = 'rule-name';
    const CONFIG = {};

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
    const NAME = 'subnetwork-name';
    const CONFIG = {
      a: 'b',
      c: 'd',
      network: 'network-name',
    };
    const EXPECTED_BODY = extend({}, CONFIG, {name: NAME});

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
        const network = new FakeNetwork();
        network.formattedName = 'formatted-name';

        const config = extend({}, CONFIG, {
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
        const config = extend({}, CONFIG, {
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
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

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
      const apiResponse = {name: 'operation-name'};

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec cb with Subnetwork, Op & apiResponse', function(done) {
        const subnetwork = {};
        const operation = {};

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
      const query = {a: 'b', c: 'd'};

      region.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/addresses');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      region.getAddresses(query, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

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
      const apiResponse = {
        items: [{name: 'operation-name'}],
      };

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        const expectedNextQuery = {
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
        const address = {};

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
      const query = {a: 'b', c: 'd'};

      region.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/operations');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      region.getOperations(query, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

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
      const apiResponse = {
        items: [{name: 'operation-name'}],
      };

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        const expectedNextQuery = {
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
        const operation = {};

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
      const query = {a: 'b', c: 'd'};

      region.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/forwardingRules');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      region.getRules(query, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

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
      const apiResponse = {
        items: [{name: 'operation-name'}],
      };

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        const expectedNextQuery = {
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
        const rule = {};

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
      const query = {a: 'b', c: 'd'};

      region.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/subnetworks');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      region.getSubnetworks(query, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

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
      const apiResponse = {
        items: [{name: 'subnetwork-name'}],
      };

      beforeEach(function() {
        region.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        const nextPageToken = 'next-page-token';
        const apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken,
        });
        const expectedNextQuery = {
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
        const subnetwork = {};

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
    const NAME = 'operation-name';

    it('should return a Operation object', function() {
      const operation = region.operation(NAME);
      assert(operation instanceof FakeOperation);
      assert.strictEqual(operation.calledWith_[0], region);
      assert.strictEqual(operation.calledWith_[1], NAME);
    });
  });

  describe('rule', function() {
    const NAME = 'rule-name';

    it('should return a Operation object', function() {
      const rule = region.rule(NAME);
      assert(rule instanceof FakeRule);
      assert.strictEqual(rule.calledWith_[0], region);
      assert.strictEqual(rule.calledWith_[1], NAME);
    });
  });

  describe('subnetwork', function() {
    const NAME = 'subnetwork-name';

    it('should return a Subnetwork object', function() {
      const subnetwork = region.subnetwork(NAME);
      assert(subnetwork instanceof FakeSubnetwork);
      assert.strictEqual(subnetwork.calledWith_[0], region);
      assert.strictEqual(subnetwork.calledWith_[1], NAME);
    });
  });
});
