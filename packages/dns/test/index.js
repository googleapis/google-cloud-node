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
var extend = require('extend');
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var Service = require('@google-cloud/common').Service;
var util = require('@google-cloud/common').util;

var extended = false;
var fakePaginator = {
  extend: function(Class, methods) {
    if (Class.name !== 'DNS') {
      return;
    }

    extended = true;
    methods = arrify(methods);
    assert.equal(Class.name, 'DNS');
    assert.deepEqual(methods, ['getZones']);
  },
  streamify: function(methodName) {
    return methodName;
  }
};

function FakeService() {
  this.calledWith_ = arguments;
  Service.apply(this, arguments);
}

nodeutil.inherits(FakeService, Service);

var promisified = false;
var fakeUtil = extend({}, util, {
  makeAuthenticatedRequestFactory: util.noop,
  promisifyAll: function(Class, options) {
    if (Class.name !== 'DNS') {
      return;
    }

    promisified = true;
    assert.deepEqual(options.exclude, ['zone']);
  }
});

function FakeZone() {
  this.calledWith_ = arguments;
}

describe('DNS', function() {
  var DNS;
  var dns;

  var PROJECT_ID = 'project-id';

  before(function() {
    DNS = proxyquire('../', {
      '@google-cloud/common': {
        Service: FakeService,
        paginator: fakePaginator,
        util: fakeUtil
      },
      './zone.js': FakeZone
    });
  });

  beforeEach(function() {
    dns = new DNS({
      projectId: PROJECT_ID
    });
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakePaginator.extend`
    });

    it('should streamify the correct methods', function() {
      assert.strictEqual(dns.getZonesStream, 'getZones');
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should normalize the arguments', function() {
      var normalizeArguments = fakeUtil.normalizeArguments;
      var normalizeArgumentsCalled = false;
      var fakeOptions = { projectId: PROJECT_ID };
      var fakeContext = {};

      fakeUtil.normalizeArguments = function(context, options) {
        normalizeArgumentsCalled = true;
        assert.strictEqual(context, fakeContext);
        assert.strictEqual(options, fakeOptions);
        return options;
      };

      DNS.call(fakeContext, fakeOptions);
      assert(normalizeArgumentsCalled);

      fakeUtil.normalizeArguments = normalizeArguments;
    });

    it('should inherit from Service', function() {
      assert(dns instanceof Service);

      var calledWith = dns.calledWith_[0];

      var baseUrl = 'https://www.googleapis.com/dns/v1';

      assert.strictEqual(calledWith.defaultApiEndpoint, baseUrl);
      assert.deepEqual(calledWith.environmentVariables, [
        'GOOGLE_CLOUD_DNS_ENDPOINT'
      ]);
      assert.deepEqual(calledWith.scopes, [
        'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
        'https://www.googleapis.com/auth/cloud-platform'
      ]);
      assert.deepEqual(calledWith.packageJson, require('../package.json'));
    });
  });

  describe('createZone', function() {
    var zoneName = 'zone-name';
    var config = { dnsName: 'dns-name' };

    it('should throw if a zone name is not provided', function() {
      assert.throws(function() {
        dns.createZone();
      }, /A zone name is required/);
    });

    it('should throw if a zone dnsname is not provided', function() {
      assert.throws(function() {
        dns.createZone(zoneName);
      }, /A zone dnsName is required/);

      assert.throws(function() {
        dns.createZone(zoneName, {});
      }, /A zone dnsName is required/);
    });

    it('should use a provided description', function(done) {
      var cfg = extend({}, config, { description: 'description' });

      dns.request = function(reqOpts) {
        assert.strictEqual(reqOpts.json.description, cfg.description);
        done();
      };

      dns.createZone(zoneName, cfg, assert.ifError);
    });

    it('should default a description to ""', function(done) {
      dns.request = function(reqOpts) {
        assert.strictEqual(reqOpts.json.description, '');
        done();
      };

      dns.createZone(zoneName, config, assert.ifError);
    });

    it('should make the correct API request', function(done) {
      dns.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/managedZones');

        var expectedBody = extend({}, config, {
          name: zoneName,
          description: ''
        });
        assert.deepEqual(reqOpts.json, expectedBody);

        done();
      };

      dns.createZone(zoneName, config, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        dns.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error and API response', function(done) {
        dns.createZone(zoneName, config, function(err, zone, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(zone, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { name: zoneName };
      var zone = {};

      beforeEach(function() {
        dns.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };

        dns.zone = function() {
          return zone;
        };
      });

      it('should create a zone from the response', function(done) {
        dns.zone = function(name) {
          assert.strictEqual(name, apiResponse.name);
          setImmediate(done);
          return zone;
        };

        dns.createZone(zoneName, config, assert.ifError);
      });

      it('should execute callback with zone and API response', function(done) {
        dns.createZone(zoneName, config, function(err, zone_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(zone_, zone);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });

      it('should set the metadata to the response', function(done) {
        dns.createZone(zoneName, config, function(err, zone) {
          assert.strictEqual(zone.metadata, apiResponse);
          done();
        });
      });
    });
  });

  describe('getZones', function() {
    it('should make the correct request', function(done) {
      var query = { a: 'b', c: 'd' };

      dns.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/managedZones');
        assert.strictEqual(reqOpts.qs, query);

        done();
      };

      dns.getZones(query, assert.ifError);
    });

    it('should use an empty query if one was not provided', function(done) {
      dns.request = function(reqOpts) {
        assert.equal(Object.keys(reqOpts.qs).length, 0);
        done();
      };

      dns.getZones(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        dns.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error and API response', function(done) {
        dns.getZones({}, function(err, zones, nextQuery, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(zones, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      var zone = { name: 'zone-1', a: 'b', c: 'd' };
      var apiResponse = { managedZones: [zone] };

      beforeEach(function() {
        dns.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };

        dns.zone = function() {
          return zone;
        };
      });

      it('should create zones from the response', function(done) {
        dns.zone = function(zoneName) {
          assert.strictEqual(zoneName, zone.name);
          setImmediate(done);
          return zone;
        };

        dns.getZones({}, assert.ifError);
      });

      it('should set a nextQuery if necessary', function(done) {
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: 'next-page-token'
        });

        var query = { a: 'b', c: 'd' };
        var originalQuery = extend({}, query);

        dns.request = function(reqOpts, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        dns.getZones(query, function(err, zones, nextQuery) {
          assert.ifError(err);

          // Check the original query wasn't modified.
          assert.deepEqual(query, originalQuery);

          assert.deepEqual(nextQuery, extend({}, query, {
            pageToken: apiResponseWithNextPageToken.nextPageToken
          }));

          done();
        });
      });

      it('should execute callback with zones and API response', function(done) {
        dns.getZones({}, function(err, zones, nextQuery, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(zones[0], zone);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });

      it('should assign metadata to zones', function(done) {
        dns.getZones({}, function(err, zones) {
          assert.ifError(err);
          assert.strictEqual(zones[0].metadata, zone);
          done();
        });
      });
    });
  });

  describe('zone', function() {
    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        dns.zone();
      }, /A zone name is required/);
    });

    it('should return a Zone', function() {
      var newZoneName = 'new-zone-name';
      var newZone = dns.zone(newZoneName);

      assert(newZone instanceof FakeZone);
      assert.strictEqual(newZone.calledWith_[0], dns);
      assert.strictEqual(newZone.calledWith_[1], newZoneName);
    });
  });
});
