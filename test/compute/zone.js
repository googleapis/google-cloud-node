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
var gceImages = require('gce-images');
var mockery = require('mockery');

var util = require('../../lib/common/util.js');

var gceImagesOverride = null;
function fakeGceImages() {
  return (gceImagesOverride || gceImages).apply(null, arguments);
}

function FakeDisk() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeOperation() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeVM() {
  this.calledWith_ = [].slice.call(arguments);
}

var extended = false;
var fakeStreamRouter = {
  extend: function(Class, methods) {
    if (Class.name !== 'Zone') {
      return;
    }

    extended = true;
    methods = arrify(methods);
    assert.equal(Class.name, 'Zone');
    assert.deepEqual(methods, ['getDisks', 'getOperations', 'getVMs']);
  }
};

describe('Zone', function() {
  var Zone;
  var zone;

  var COMPUTE = {
    makeAuthenticatedRequest_: {
      authClient: {
        a: 'b',
        c: 'd'
      }
    }
  };
  var ZONE_NAME = 'us-central1-a';

  before(function() {
    mockery.registerMock('gce-images', fakeGceImages);
    mockery.registerMock('../common/stream-router.js', fakeStreamRouter);
    mockery.registerMock('./disk.js', FakeDisk);
    mockery.registerMock('./operation.js', FakeOperation);
    mockery.registerMock('./vm.js', FakeVM);

    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Zone = require('../../lib/compute/zone.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    gceImagesOverride = null;
    zone = new Zone(COMPUTE, ZONE_NAME);
  });

  describe('instantiation', function() {
    it('should extend the correct methods', function() {
      assert(extended); // See `fakeStreamRouter.extend`
    });

    it('should localize the compute instance', function() {
      assert.strictEqual(zone.compute, COMPUTE);
    });

    it('should localize the name', function() {
      assert.strictEqual(zone.name, ZONE_NAME);
    });

    it('should default metadata to an empty object', function() {
      assert.strictEqual(typeof zone.metadata, 'object');
      assert.strictEqual(Object.keys(zone.metadata).length, 0);
    });

    it('should create a gceImages instance', function() {
      var gceVal = 'ok';

      gceImagesOverride = function(authConfig) {
        var expectedAuthClient = COMPUTE.makeAuthenticatedRequest_.authClient;
        assert.strictEqual(authConfig.authClient, expectedAuthClient);
        return gceVal;
      };

      var newZone = new Zone(COMPUTE, ZONE_NAME);
      assert.strictEqual(newZone.gceImages, gceVal);
    });
  });

  describe('createDisk', function() {
    var NAME = 'disk-name';

    beforeEach(function() {
      zone.makeReq_ = util.noop;
    });

    it('should use the image property as qs.sourceImages', function(done) {
      var config = {
        image: 'abc'
      };

      zone.makeReq_ = function(method, path, query) {
        assert.strictEqual(query.sourceImage, config.image);
        done();
      };

      zone.createDisk(NAME, config, assert.ifError);
    });

    describe('config.os', function() {
      var CONFIG = {
        os: 'os-name'
      };

      it('should get the latest image', function(done) {
        zone.gceImages.getLatest = function(os) {
          assert.strictEqual(os, CONFIG.os);
          done();
        };

        zone.createDisk(NAME, CONFIG, assert.ifError);
      });

      describe('error', function() {
        var error = new Error('Error.');

        beforeEach(function() {
          zone.gceImages.getLatest = function(os, callback) {
            callback(error);
          };
        });

        it('should execute callback with error', function(done) {
          zone.createDisk(NAME, CONFIG, function(err) {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('success', function() {
        var gceImagesResp = {
          selfLink: 'http://selflink'
        };

        var expectedConfig = {
          name: NAME,
          sourceImage: gceImagesResp.selfLink
        };

        it('should call createDisk with the correct config', function(done) {
          zone.gceImages.getLatest = function(os, callback) {
            zone.createDisk = function(name, config, callback) {
              assert.strictEqual(name, NAME);
              assert.deepEqual(config, expectedConfig);
              callback();
            };

            callback(null, gceImagesResp);
          };

          zone.createDisk(NAME, CONFIG, done);
        });
      });
    });

    describe('API request', function() {
      var CONFIG = {
        a: 'b',
        c: 'd'
      };

      var expectedBody = {
        name: NAME,
        a: 'b',
        c: 'd'
      };

      it('should make the correct API request', function(done) {
        zone.makeReq_ = function(method, path, query, body) {
          assert.strictEqual(method, 'POST');
          assert.strictEqual(path, '/disks');
          assert.deepEqual(query, {});
          assert.deepEqual(body, expectedBody);

          done();
        };

        zone.createDisk(NAME, CONFIG, assert.ifError);
      });

      describe('error', function() {
        var error = new Error('Error.');
        var apiResponse = { a: 'b', c: 'd' };

        beforeEach(function() {
          zone.makeReq_ = function(method, path, query, body, callback) {
            callback(error, apiResponse);
          };
        });

        it('should execute callback with error & API response', function(done) {
          zone.createDisk(NAME, CONFIG, function(err, disk, op, apiResp) {
            assert.strictEqual(err, error);
            assert.strictEqual(disk, null);
            assert.strictEqual(op, null);
            assert.strictEqual(apiResp, apiResponse);
            done();
          });
        });
      });

      describe('success', function() {
        var apiResponse = { name: 'operation-name' };

        beforeEach(function() {
          zone.makeReq_ = function(method, path, query, body, callback) {
            callback(null, apiResponse);
          };
        });

        it('should exec callback with Disk, Op & apiResponse', function(done) {
          var disk = {};
          var operation = {};

          zone.disk = function(name) {
            assert.strictEqual(name, NAME);
            return disk;
          };

          zone.operation = function(name) {
            assert.strictEqual(name, apiResponse.name);
            return operation;
          };

          zone.createDisk(NAME, CONFIG, function(err, disk_, op, apiResp) {
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

  describe('createVM', function() {
    var NAME = 'new-vm';

    var CONFIG = {};

    var EXPECTED_CONFIG = {
      name: NAME,
      machineType: 'zones/' + ZONE_NAME + '/machineTypes/n1-standard-1',
      networkInterfaces: [
        {
          network: 'global/networks/default'
        }
      ]
    };

    describe('config.machineType', function() {
      var CONFIG = {
        machineType: 'f1-micro'
      };

      it('should format a given machine type', function(done) {
        zone.makeReq_ = function(method, path, query, body) {
          assert.strictEqual(
            body.machineType,
            'zones/' + ZONE_NAME + '/machineTypes/' + CONFIG.machineType
          );
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });
    });

    describe('config.tags', function() {
      var CONFIG = {
        tags: ['a', 'b']
      };

      it('should accept an array of tags', function(done) {
        zone.makeReq_ = function(method, path, query, body) {
          assert.deepEqual(body.tags.items, CONFIG.tags);
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });
    });

    describe('config.http', function() {
      var CONFIG = {
        http: true
      };

      beforeEach(function() {
        zone.createHttpServerFirewall_ = function(callback) {
          callback();
        };
      });

      it('should create a firewall rule', function(done) {
        zone.createHttpServerFirewall_ = function() {
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      it('should add a network interface accessConfig', function(done) {
        zone.makeReq_ = function(method, path, query, body) {
          assert.deepEqual(body.networkInterfaces[0].accessConfigs[0], {
            type: 'ONE_TO_ONE_NAT'
          });
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      it('should add an http tag', function(done) {
        zone.makeReq_ = function(method, path, query, body) {
          assert(body.tags.items.indexOf('http-server') > -1);
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      it('should not overwrite existing tags', function(done) {
        var config = {
          http: true,
          tags: {
            items: ['a', 'b']
          }
        };

        var expectedTags = ['a', 'b', 'http-server'];

        zone.makeReq_ = function(method, path, query, body) {
          assert.deepEqual(body.tags.items, expectedTags);
          done();
        };

        zone.createVM(NAME, config, assert.ifError);
      });

      it('should delete the https property', function(done) {
        zone.makeReq_ = function(method, path, query, body) {
          assert.strictEqual(body.https, undefined);
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });
    });

    describe('config.https', function() {
      var CONFIG = {
        https: true
      };

      beforeEach(function() {
        zone.createHttpsServerFirewall_ = function(callback) {
          callback();
        };
      });

      it('should create a firewall rule', function(done) {
        zone.createHttpsServerFirewall_ = function() {
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      it('should add a network interface accessConfig', function(done) {
        zone.makeReq_ = function(method, path, query, body) {
          assert.deepEqual(body.networkInterfaces[0].accessConfigs[0], {
            type: 'ONE_TO_ONE_NAT'
          });
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      it('should add an https tag', function(done) {
        zone.makeReq_ = function(method, path, query, body) {
          assert(body.tags.items.indexOf('https-server') > -1);
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      it('should not overwrite existing tags', function(done) {
        var config = {
          https: true,
          tags: {
            items: ['a', 'b']
          }
        };

        var expectedTags = ['a', 'b', 'https-server'];

        zone.makeReq_ = function(method, path, query, body) {
          assert.deepEqual(body.tags.items, expectedTags);
          done();
        };

        zone.createVM(NAME, config, assert.ifError);
      });

      it('should delete the https property', function(done) {
        zone.makeReq_ = function(method, path, query, body) {
          assert.strictEqual(body.https, undefined);
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });
    });

    describe('config.os', function() {
      var CONFIG = {
        os: 'os-name'
      };

      it('should get the latest image', function(done) {
        zone.gceImages.getLatest = function(os) {
          assert.strictEqual(os, CONFIG.os);
          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      describe('error', function() {
        var error = new Error('Error.');

        beforeEach(function() {
          zone.gceImages.getLatest = function(os, callback) {
            callback(error);
          };
        });

        it('should execute callback with error', function(done) {
          zone.createVM(NAME, CONFIG, function(err) {
            assert.strictEqual(err, error);
            done();
          });
        });
      });

      describe('success', function() {
        var gceImagesResp = {
          selfLink: 'http://selflink'
        };

        var expectedConfig = extend({}, EXPECTED_CONFIG, {
          disks: [
            {
              boot: true,
              initializeParams: {
                sourceImage: gceImagesResp.selfLink
              }
            }
          ]
        });

        it('should call createVM with the correct config', function(done) {
          zone.gceImages.getLatest = function(os, callback) {
            zone.createVM = function(name, config, callback) {
              assert.strictEqual(name, NAME);
              assert.deepEqual(config, expectedConfig);
              callback();
            };

            callback(null, gceImagesResp);
          };

          zone.createVM(NAME, CONFIG, done);
        });
      });
    });

    describe('API request', function() {
      it('should make the correct API request', function(done) {
        zone.makeReq_ = function(method, path, query, body) {
          assert.strictEqual(method, 'POST');
          assert.strictEqual(path, '/instances');
          assert.deepEqual(query, null);
          assert.deepEqual(body, EXPECTED_CONFIG);

          done();
        };

        zone.createVM(NAME, CONFIG, assert.ifError);
      });

      describe('error', function() {
        var error = new Error('Error.');
        var apiResponse = { a: 'b', c: 'd' };

        beforeEach(function() {
          zone.makeReq_ = function(method, path, query, body, callback) {
            callback(error, apiResponse);
          };
        });

        it('should execute callback with error & API response', function(done) {
          zone.createVM(NAME, CONFIG, function(err, vm, op, apiResp) {
            assert.strictEqual(err, error);
            assert.strictEqual(vm, null);
            assert.strictEqual(op, null);
            assert.strictEqual(apiResp, apiResponse);
            done();
          });
        });
      });

      describe('success', function() {
        var apiResponse = { name: 'operation-name' };

        beforeEach(function() {
          zone.makeReq_ = function(method, path, query, body, callback) {
            callback(null, apiResponse);
          };
        });

        it('should exec callback with Disk, Op & apiResponse', function(done) {
          var vm = {};
          var operation = {};

          zone.vm = function(name) {
            assert.strictEqual(name, NAME);
            return vm;
          };

          zone.operation = function(name) {
            assert.strictEqual(name, apiResponse.name);
            return operation;
          };

          zone.createVM(NAME, CONFIG, function(err, vm_, op, apiResp) {
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

  describe('disk', function() {
    var NAME = 'disk-name';

    it('should return a Disk object', function() {
      var disk = zone.disk(NAME);
      assert(disk instanceof FakeDisk);
      assert.strictEqual(disk.calledWith_[0], zone);
      assert.strictEqual(disk.calledWith_[1], NAME);
    });
  });

  describe('getDisks', function() {
    it('should accept only a callback', function(done) {
      zone.makeReq_ = function(method, path, query) {
        assert.deepEqual(query, {});
        done();
      };

      zone.getDisks(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var query = { a: 'b', c: 'd' };

      zone.makeReq_ = function(method, path, query_, body) {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(path, '/disks');
        assert.strictEqual(query_, query);
        assert.strictEqual(body, null);

        done();
      };

      zone.getDisks(query, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        zone.getDisks({}, function(err, disks, nextQuery, apiResp) {
          assert.strictEqual(err, error);
          assert.strictEqual(disks, null);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        items: [
          { name: 'disk-name' }
        ]
      };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken
        });
        var expectedNextQuery = {
          pageToken: nextPageToken
        };

        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getDisks({}, function(err, disks, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Disks & API resp', function(done) {
        var disk = {};

        zone.disk = function(name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return disk;
        };

        zone.getDisks({}, function(err, disks, nextQuery, apiResp) {
          assert.ifError(err);

          assert.strictEqual(disks[0], disk);
          assert.strictEqual(disks[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResp, apiResponse);

          done();
        });
      });
    });
  });

  describe('getMetadata', function() {
    it('should make the correct API request', function(done) {
      zone.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        done();
      };

      zone.getMetadata(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error and API response', function(done) {
        zone.getMetadata(function(err, metadata, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(metadata, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should update the metadata to the API response', function(done) {
        zone.getMetadata(function(err) {
          assert.ifError(err);
          assert.strictEqual(zone.metadata, apiResponse);
          done();
        });
      });

      it('should exec callback with metadata and API response', function(done) {
        zone.getMetadata(function(err, metadata, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });
  });

  describe('getOperations', function() {
    it('should accept only a callback', function(done) {
      zone.makeReq_ = function(method, path, query) {
        assert.deepEqual(query, {});
        done();
      };

      zone.getOperations(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var query = { a: 'b', c: 'd' };

      zone.makeReq_ = function(method, path, query_, body) {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(path, '/operations');
        assert.strictEqual(query_, query);
        assert.strictEqual(body, null);

        done();
      };

      zone.getOperations(query, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        zone.getOperations({}, function(err, operations, nextQuery, apiResp) {
          assert.strictEqual(err, error);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        items: [
          { name: 'operation-name' }
        ]
      };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken
        });
        var expectedNextQuery = {
          pageToken: nextPageToken
        };

        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getOperations({}, function(err, operations, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with Operations & API resp', function(done) {
        var operation = {};

        zone.operation = function(name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return operation;
        };

        zone.getOperations({}, function(err, operations, nextQuery, apiResp) {
          assert.ifError(err);

          assert.strictEqual(operations[0], operation);
          assert.strictEqual(operations[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResp, apiResponse);

          done();
        });
      });
    });
  });

  describe('getVMs', function() {
    it('should accept only a callback', function(done) {
      zone.makeReq_ = function(method, path, query) {
        assert.deepEqual(query, {});
        done();
      };

      zone.getVMs(assert.ifError);
    });

    it('should make the correct API request', function(done) {
      var query = { a: 'b', c: 'd' };

      zone.makeReq_ = function(method, path, query_, body) {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(path, '/instances');
        assert.strictEqual(query_, query);
        assert.strictEqual(body, null);

        done();
      };

      zone.getVMs(query, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        zone.getVMs({}, function(err, vms, nextQuery, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(nextQuery, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = {
        items: [
          { name: 'vm-name' }
        ]
      };

      beforeEach(function() {
        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should build a nextQuery if necessary', function(done) {
        var nextPageToken = 'next-page-token';
        var apiResponseWithNextPageToken = extend({}, apiResponse, {
          nextPageToken: nextPageToken
        });
        var expectedNextQuery = {
          pageToken: nextPageToken
        };

        zone.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponseWithNextPageToken);
        };

        zone.getVMs({}, function(err, vms, nextQuery) {
          assert.ifError(err);

          assert.deepEqual(nextQuery, expectedNextQuery);

          done();
        });
      });

      it('should execute callback with VMs & API response', function(done) {
        var vm = {};

        zone.vm = function(name) {
          assert.strictEqual(name, apiResponse.items[0].name);
          return vm;
        };

        zone.getVMs({}, function(err, vms, nextQuery, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(vms[0], vm);
          assert.strictEqual(vms[0].metadata, apiResponse.items[0]);

          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });
  });

  describe('operation', function() {
    var NAME = 'operation-name';

    it('should return an Operation object', function() {
      var operation = zone.operation(NAME);
      assert(operation instanceof FakeOperation);
      assert.strictEqual(operation.calledWith_[0], zone);
      assert.strictEqual(operation.calledWith_[1], NAME);
    });
  });

  describe('vm', function() {
    var NAME = 'vm-name';

    it('should return a VM object', function() {
      var vm = zone.vm(NAME);
      assert(vm instanceof FakeVM);
      assert.strictEqual(vm.calledWith_[0], zone);
      assert.strictEqual(vm.calledWith_[1], NAME);
    });
  });

  describe('createHttpServerFirewall_', function() {
    it('should create a firewall rule', function(done) {
      zone.compute.createFirewall = function(name, config) {
        assert.strictEqual(name, 'default-allow-http');
        assert.deepEqual(config, {
          protocols: {
            tcp: [80]
          },
          ranges: ['0.0.0.0/0'],
          tags: ['http-server']
        });

        done();
      };

      zone.createHttpServerFirewall_(assert.ifError);
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');

      zone.compute.createFirewall = function(name, config, callback) {
        callback(error);
      };

      zone.createHttpServerFirewall_(function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should not execute callback with error if 409', function(done) {
      var error = new Error('Error.');
      error.code = 409;

      var apiResponse = {};

      zone.compute.createFirewall = function(name, config, callback) {
        callback(error, null, apiResponse);
      };

      zone.createHttpServerFirewall_(function(err) {
        assert.strictEqual(err, null);
        done();
      });
    });
  });

  describe('createHttpsServerFirewall_', function() {
    it('should create a firewall rule', function(done) {
      zone.compute.createFirewall = function(name, config) {
        assert.strictEqual(name, 'default-allow-https');
        assert.deepEqual(config, {
          protocols: {
            tcp: [443]
          },
          ranges: ['0.0.0.0/0'],
          tags: ['https-server']
        });

        done();
      };

      zone.createHttpsServerFirewall_(assert.ifError);
    });

    it('should execute callback with error & API response', function(done) {
      var error = new Error('Error.');

      zone.compute.createFirewall = function(name, config, callback) {
        callback(error);
      };

      zone.createHttpsServerFirewall_(function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should not execute callback with error if 409', function(done) {
      var error = new Error('Error.');
      error.code = 409;

      zone.compute.createFirewall = function(name, config, callback) {
        callback(error);
      };

      zone.createHttpsServerFirewall_(function(err) {
        assert.strictEqual(err, null);
        done();
      });
    });
  });

  describe('makeReq_', function() {
    it('should make the correct request to Compute', function(done) {
      var expectedPathPrefix = '/zones/' + zone.name;

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

      zone.compute.makeReq_ = function(method_, path_, query_, body_, cb) {
        assert.strictEqual(method_, method);
        assert.strictEqual(path_, expectedPathPrefix + path);
        assert.strictEqual(query_, query);
        assert.strictEqual(body_, body);
        cb();
      };

      zone.makeReq_(method, path, query, body, done);
    });
  });
});
