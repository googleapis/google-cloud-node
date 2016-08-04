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
var proxyquire = require('proxyquire');
var nodeutil = require('util');

var util = require('@google-cloud/common').util;
var ServiceObject = require('@google-cloud/common').ServiceObject;

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('VM', function() {
  var VM;
  var vm;

  var Disk;
  var DISK;

  var COMPUTE = { projectId: 'project-id' };
  var ZONE = {
    compute: COMPUTE,
    name: 'us-central1-a',
    createDisk: util.noop,
    createVM: util.noop
  };
  var VM_NAME = 'vm-name';
  var FULLY_QUALIFIED_NAME = [
    'project/project-id/zones/zone-name/instances/',
    VM_NAME
  ].join('');

  before(function() {
    Disk = require('../src/disk.js');
    VM = proxyquire('../src/vm.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject
      }
    });
  });

  beforeEach(function() {
    vm = new VM(ZONE, VM_NAME);
    DISK = new Disk(ZONE, 'disk-name');
  });

  describe('instantiation', function() {
    it('should localize the zone', function() {
      assert.strictEqual(vm.zone, ZONE);
    });

    it('should localize the name', function() {
      assert.strictEqual(vm.name, VM_NAME);
    });

    it('should strip a qualified name to just the instance name', function() {
      var vm = new VM(ZONE, FULLY_QUALIFIED_NAME);
      assert.strictEqual(vm.name, VM_NAME);
    });

    it('should localize the URL of the VM', function() {
      assert.strictEqual(vm.url, [
        'https://www.googleapis.com/compute/v1/projects',
        COMPUTE.projectId,
        'zones',
        ZONE.name,
        'instances',
        VM_NAME
      ].join('/'));
    });

    it('should inherit from ServiceObject', function(done) {
      var zoneInstance = extend({}, ZONE, {
        createVM: {
          bind: function(context) {
            assert.strictEqual(context, zoneInstance);
            done();
          }
        }
      });

      var vm = new VM(zoneInstance, VM_NAME);
      assert(vm instanceof ServiceObject);

      var calledWith = vm.calledWith_[0];

      assert.strictEqual(calledWith.parent, zoneInstance);
      assert.strictEqual(calledWith.baseUrl, '/instances');
      assert.strictEqual(calledWith.id, VM_NAME);
      assert.deepEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true,
        getMetadata: true
      });
    });
  });

  describe('attachDisk', function() {
    var CONFIG = {};
    var EXPECTED_BODY;

    beforeEach(function() {
      EXPECTED_BODY = {
        deviceName: DISK.name,
        source: DISK.formattedName
      };
    });

    it('should throw if a Disk object is not provided', function() {
      assert.throws(function() {
        vm.attachDisk('disk-3', CONFIG, assert.ifError);
      }, /A Disk object must be provided/);

      assert.doesNotThrow(function() {
        vm.request = util.noop;
        vm.attachDisk(DISK, CONFIG, assert.ifError);
      });
    });

    it('should not require an options object', function(done) {
      vm.request = function(reqOpts) {
        assert.deepEqual(reqOpts.json, EXPECTED_BODY);
        done();
      };

      vm.attachDisk(DISK, assert.ifError);
    });

    describe('options.readOnly', function() {
      var CONFIG = extend({}, CONFIG, { readOnly: true });

      it('should set the correct mode', function(done) {
        var expectedBody = extend({}, EXPECTED_BODY, { mode: 'READ_ONLY' });

        vm.request = function(reqOpts) {
          assert.deepEqual(reqOpts.json, expectedBody);
          done();
        };

        vm.attachDisk(DISK, CONFIG, assert.ifError);
      });

      it('should delete the readOnly property', function(done) {
        vm.request = function(reqOpts) {
          assert.strictEqual(typeof reqOpts.json.readOnly, 'undefined');
          done();
        };

        vm.attachDisk(DISK, CONFIG, assert.ifError);
      });
    });

    it('should make the correct API request', function(done) {
      vm.request = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/attachDisk');
        assert.deepEqual(reqOpts.json, EXPECTED_BODY);

        callback();
      };

      vm.attachDisk(DISK, CONFIG, done);
    });
  });

  describe('delete', function() {
    it('should make the correct API request', function(done) {
      vm.request = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'DELETE');
        assert.strictEqual(reqOpts.uri, '');

        callback();
      };

      vm.delete(done);
    });

    it('should not require a callback', function(done) {
      vm.request = function(reqOpts, callback) {
        assert.doesNotThrow(function() {
          callback();
          done();
        });
      };

      vm.delete();
    });
  });

  describe('detachDisk', function() {
    var DEVICE_NAME;
    var METADATA;

    beforeEach(function() {
      DEVICE_NAME = DISK.formattedName;

      METADATA = METADATA = {
        disks: [
          {
            source: DEVICE_NAME,
            deviceName: DEVICE_NAME
          }
        ]
      };

      vm.getMetadata = function(callback) {
        callback(null, METADATA, METADATA);
      };
    });

    it('should throw if a Disk is not provided', function() {
      assert.throws(function() {
        vm.detachDisk('disk-name');
      }, /A Disk object must be provided/);

      assert.doesNotThrow(function() {
        vm.getMetadata = util.noop;
        vm.detachDisk(DISK);
      });
    });

    it('should return an error if device name not found', function(done) {
      var metadata = {
        disks: [
          {
            source: 'a',
            deviceName: 'b'
          }
        ]
      };

      vm.getMetadata = function(callback) {
        callback(null, metadata, metadata);
      };

      vm.detachDisk(DISK, function(err) {
        assert.strictEqual(err.name, 'DetachDiskError');

        var errorMessage = 'Device name for this disk was not found.';
        assert.strictEqual(err.message, errorMessage);

        done();
      });
    });

    it('should make the correct API request', function(done) {
      vm.request = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/detachDisk');
        assert.deepEqual(reqOpts.qs, { deviceName: DEVICE_NAME });

        callback();
      };

      vm.detachDisk(DISK, done);
    });

    it('should not require a callback', function(done) {
      vm.request = function(reqOpts, callback) {
        assert.doesNotThrow(function() {
          callback();
          done();
        });
      };

      vm.detachDisk(DISK);
    });

    describe('refreshing metadata', function() {
      describe('error', function() {
        var ERROR = new Error('Error.');

        beforeEach(function() {
          vm.getMetadata = function(callback) {
            callback(ERROR);
          };
        });

        it('should return DetachDisk error', function(done) {
          vm.detachDisk(DISK, function(err) {
            assert.strictEqual(err.name, 'DetachDiskError');
            assert.strictEqual(err.message, ERROR.message);
            done();
          });
        });
      });
    });
  });

  describe('getSerialPortOutput', function() {
    var EXPECTED_QUERY = { port: 1 };

    it('should default to port 1', function(done) {
      FakeServiceObject.prototype.request = function(reqOpts) {
        assert.strictEqual(reqOpts.qs.port, 1);
        done();
      };

      vm.getSerialPortOutput(assert.ifError);
    });

    it('should override the default port', function(done) {
      var port = 8001;

      FakeServiceObject.prototype.request = function(reqOpts) {
        assert.strictEqual(reqOpts.qs.port, port);
        done();
      };

      vm.getSerialPortOutput(port, assert.ifError);
    });

    it('should make the correct API request', function(done) {
      FakeServiceObject.prototype.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/serialPort');
        assert.deepEqual(reqOpts.qs, EXPECTED_QUERY);

        done();
      };

      vm.getSerialPortOutput(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        FakeServiceObject.prototype.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        vm.getSerialPortOutput(function(err, output, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(output, null);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { contents: 'contents' };

      beforeEach(function() {
        FakeServiceObject.prototype.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec callback with contents & API response', function(done) {
        vm.getSerialPortOutput(function(err, output, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(output, apiResponse.contents);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });
  });

  describe('getTags', function() {
    it('should get metadata', function(done) {
      vm.getMetadata = function() {
        done();
      };

      vm.getTags(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        vm.getMetadata = function(callback) {
          callback(error, null, apiResponse);
        };
      });

      it('should execute callback with error', function(done) {
        vm.getTags(function(err, tags, fingerprint, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(tags, null);
          assert.strictEqual(fingerprint, null);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });

    describe('success', function() {
      var metadata = {
        tags: {
          items: [],
          fingerprint: 'fingerprint'
        }
      };

      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        vm.getMetadata = function(callback) {
          callback(null, metadata, apiResponse);
        };
      });

      it('should execute callback with tags and fingerprint', function(done) {
        vm.getTags(function(err, tags, fingerprint, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(tags, metadata.tags.items);
          assert.strictEqual(fingerprint, metadata.tags.fingerprint);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });
  });

  describe('reset', function() {
    it('should make the correct API request', function(done) {
      vm.request = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/reset');

        callback();
      };

      vm.reset(done);
    });

    it('should not require a callback', function(done) {
      vm.request = function(reqOpts, callback) {
        assert.doesNotThrow(function() {
          callback();
          done();
        });
      };

      vm.reset();
    });
  });

  describe('setMetadata', function() {
    var METADATA = {
      newKey: 'newValue'
    };

    describe('getting the current fingerprint', function() {
      describe('error', function() {
        var error = new Error('Error.');
        var apiResponse = {};

        beforeEach(function() {
          vm.getMetadata = function(callback) {
            callback(error, null, apiResponse);
          };
        });

        it('should exec the callback with error & API resp', function(done) {
          vm.setMetadata(METADATA, function(err, operation, apiResponse_) {
            assert.strictEqual(err, error);
            assert.strictEqual(operation, null);
            assert.strictEqual(apiResponse_, apiResponse);

            done();
          });
        });

        describe('success', function() {
          var metadata = {
            metadata: {
              fingerprint: '==='
            }
          };

          var apiResponse = {};

          beforeEach(function() {
            vm.getMetadata = function(callback) {
              callback(null, metadata, apiResponse);
            };
          });

          it('should make the correct request', function(done) {
            var expectedNewMetadata = extend(true, {}, metadata.metadata, {
              items: [
                {
                  key: 'newKey',
                  value: 'newValue'
                }
              ]
            });

            vm.request = function(reqOpts, callback) {
              assert.strictEqual(reqOpts.method, 'POST');
              assert.strictEqual(reqOpts.uri, '/setMetadata');
              assert.deepEqual(reqOpts.json, expectedNewMetadata);

              callback(); // done()
            };

            vm.setMetadata(METADATA, done);
          });
        });
      });
    });
  });

  describe('setTags', function() {
    var TAGS = [];
    var FINGERPRINT = '';

    it('should make the correct request', function(done) {
      vm.request = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/setTags');
        assert.strictEqual(reqOpts.json.items, TAGS);
        assert.strictEqual(reqOpts.json.fingerprint, FINGERPRINT);

        callback(); // done()
      };

      vm.setTags(TAGS, FINGERPRINT, done);
    });

    it('should not require a callback', function(done) {
      vm.request = function(reqOpts, callback) {
        assert.doesNotThrow(callback);
        done();
      };

      vm.setTags(TAGS, FINGERPRINT);
    });
  });

  describe('start', function() {
    it('should make the correct API request', function(done) {
      vm.request = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/start');

        callback();
      };

      vm.start(done);
    });

    it('should not require a callback', function(done) {
      vm.request = function(reqOpts, callback) {
        assert.doesNotThrow(function() {
          callback();
          done();
        });
      };

      vm.start();
    });
  });

  describe('stop', function() {
    it('should make the correct API request', function(done) {
      vm.request = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/stop');

        callback();
      };

      vm.stop(done);
    });

    it('should not require a callback', function(done) {
      vm.request = function(reqOpts, callback) {
        assert.doesNotThrow(function() {
          callback();
          done();
        });
      };

      vm.stop();
    });
  });

  describe('request', function() {
    it('should make the correct request to Compute', function(done) {
      var reqOpts = {};

      FakeServiceObject.prototype.request = function(reqOpts_) {
        assert.strictEqual(this, vm);
        assert.strictEqual(reqOpts_, reqOpts);

        done();
      };

      vm.request(reqOpts, assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        FakeServiceObject.prototype.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', function(done) {
        vm.request({}, function(err, operation, resp) {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { name: 'operation-name' };

      beforeEach(function() {
        FakeServiceObject.prototype.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Zone object & API resp', function(done) {
        var operation = {};

        vm.zone.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        vm.request({}, function(err, operation_, resp) {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });
});
