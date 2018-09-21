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

const assert = require('assert');
const extend = require('extend');
const nodeutil = require('util');
const proxyquire = require('proxyquire');
const ServiceObject = require('@google-cloud/common').ServiceObject;
const util = require('@google-cloud/common').util;

const utilCached = extend({}, util);

let promisified = false;
const fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'VM') {
      promisified = true;
    }
  },
});

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('VM', function() {
  let VM;
  let vm;

  let Disk;
  let DISK;

  const COMPUTE = {
    authClient: {
      projectId: 'project-id',
    },
    projectId: 'project-id',
  };
  const ZONE = {
    compute: COMPUTE,
    name: 'us-central1-a',
    createDisk: util.noop,
    createVM: util.noop,
  };
  const VM_NAME = 'vm-name';
  const FULLY_QUALIFIED_NAME = [
    'project/project-id/zones/zone-name/instances/',
    VM_NAME,
  ].join('');

  before(function() {
    Disk = require('../src/disk.js');
    VM = proxyquire('../src/vm.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
    });
  });

  beforeEach(function() {
    extend(fakeUtil, utilCached);
    vm = new VM(ZONE, VM_NAME);
    DISK = new Disk(ZONE, 'disk-name');
  });

  describe('instantiation', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should localize the zone', function() {
      assert.strictEqual(vm.zone, ZONE);
    });

    it('should localize the name', function() {
      assert.strictEqual(vm.name, VM_NAME);
    });

    it('should strip a qualified name to just the instance name', function() {
      const vm = new VM(ZONE, FULLY_QUALIFIED_NAME);
      assert.strictEqual(vm.name, VM_NAME);
    });

    it('should initialize hasActiveWaiters to false', function() {
      assert.strictEqual(vm.hasActiveWaiters, false);
    });

    it('should initialize an empty waiter array', function() {
      assert.deepStrictEqual(vm.waiters, []);
    });

    it('should localize the URL of the VM', function() {
      assert.strictEqual(
        vm.url,
        [
          'https://www.googleapis.com/compute/v1/projects',
          COMPUTE.projectId,
          'zones',
          ZONE.name,
          'instances',
          VM_NAME,
        ].join('/')
      );
    });

    it('should inherit from ServiceObject', function(done) {
      const zoneInstance = extend({}, ZONE, {
        createVM: {
          bind: function(context) {
            assert.strictEqual(context, zoneInstance);
            done();
          },
        },
      });

      const vm = new VM(zoneInstance, VM_NAME);
      assert(vm instanceof ServiceObject);

      const calledWith = vm.calledWith_[0];

      assert.strictEqual(calledWith.parent, zoneInstance);
      assert.strictEqual(calledWith.baseUrl, '/instances');
      assert.strictEqual(calledWith.id, VM_NAME);
      assert.deepStrictEqual(calledWith.methods, {
        create: true,
        exists: true,
        get: true,
        getMetadata: true,
      });
    });
  });

  describe('attachDisk', function() {
    let EXPECTED_BODY;

    beforeEach(function() {
      EXPECTED_BODY = {
        deviceName: DISK.name,
        source: DISK.formattedName,
      };
    });

    it('should throw if a Disk object is not provided', function() {
      assert.throws(function() {
        vm.attachDisk('disk-3', {}, assert.ifError);
      }, /A Disk object must be provided/);

      assert.doesNotThrow(function() {
        vm.request = util.noop;
        vm.attachDisk(DISK, {}, assert.ifError);
      });
    });

    it('should not require an options object', function(done) {
      vm.request = function(reqOpts) {
        assert.deepStrictEqual(reqOpts.json, EXPECTED_BODY);
        done();
      };

      vm.attachDisk(DISK, assert.ifError);
    });

    describe('options.readOnly', function() {
      const CONFIG = {readOnly: true};

      it('should set the correct mode', function(done) {
        const expectedBody = extend({}, EXPECTED_BODY, {mode: 'READ_ONLY'});

        vm.request = function(reqOpts) {
          assert.deepStrictEqual(reqOpts.json, expectedBody);
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
        assert.deepStrictEqual(reqOpts.json, EXPECTED_BODY);

        callback();
      };

      vm.attachDisk(DISK, {}, done);
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
    let DEVICE_NAME;
    let METADATA;

    beforeEach(function() {
      DEVICE_NAME = DISK.formattedName;

      METADATA = {
        disks: [
          {
            source: DEVICE_NAME,
            deviceName: DEVICE_NAME,
          },
        ],
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

    it('should replace projectId token in disk name', function(done) {
      const REPLACED_DEVICE_NAME = 'replaced-device-name';

      fakeUtil.replaceProjectIdToken = function(value, projectId) {
        assert.strictEqual(value, DISK.formattedName);
        assert.strictEqual(projectId, COMPUTE.authClient.projectId);
        return REPLACED_DEVICE_NAME;
      };

      vm.getMetadata = function(callback) {
        const metadata = {
          disks: [
            {
              source: REPLACED_DEVICE_NAME,
              deviceName: REPLACED_DEVICE_NAME,
            },
          ],
        };

        callback(null, metadata, metadata);
      };

      vm.request = function(reqOpts) {
        assert.strictEqual(reqOpts.qs.deviceName, REPLACED_DEVICE_NAME);
        done();
      };

      vm.detachDisk(DISK, assert.ifError);
    });

    it('should return an error if device name not found', function(done) {
      const metadata = {
        disks: [
          {
            source: 'a',
            deviceName: 'b',
          },
        ],
      };

      vm.getMetadata = function(callback) {
        callback(null, metadata, metadata);
      };

      vm.detachDisk(DISK, function(err) {
        assert.strictEqual(err.name, 'DetachDiskError');

        const errorMessage = 'Device name for this disk was not found.';
        assert.strictEqual(err.message, errorMessage);

        done();
      });
    });

    it('should make the correct API request', function(done) {
      vm.request = function(reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/detachDisk');
        assert.deepStrictEqual(reqOpts.qs, {deviceName: DEVICE_NAME});

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
        const ERROR = new Error('Error.');

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
    const EXPECTED_QUERY = {port: 1};

    it('should default to port 1', function(done) {
      FakeServiceObject.prototype.request = function(reqOpts) {
        assert.strictEqual(reqOpts.qs.port, 1);
        done();
      };

      vm.getSerialPortOutput(assert.ifError);
    });

    it('should override the default port', function(done) {
      const port = 8001;

      FakeServiceObject.prototype.request = function(reqOpts) {
        assert.strictEqual(reqOpts.qs.port, port);
        done();
      };

      vm.getSerialPortOutput(port, assert.ifError);
    });

    it('should make the correct API request', function(done) {
      FakeServiceObject.prototype.request = function(reqOpts) {
        assert.strictEqual(reqOpts.uri, '/serialPort');
        assert.deepStrictEqual(reqOpts.qs, EXPECTED_QUERY);

        done();
      };

      vm.getSerialPortOutput(assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

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
      const apiResponse = {contents: 'contents'};

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
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

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
      const metadata = {
        tags: {
          items: [],
          fingerprint: 'fingerprint',
        },
      };

      const apiResponse = {a: 'b', c: 'd'};

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

  describe('resize', function() {
    const MACHINE_TYPE = 'zones/' + ZONE.name + '/machineTypes/machineType';

    beforeEach(function() {
      vm.request = util.noop;

      vm.zone.parent = {
        execAfterOperation_: util.noop,
      };
    });

    it('should try to set the machine type', function(done) {
      vm.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/setMachineType');
        assert.deepStrictEqual(reqOpts.json, {
          machineType: MACHINE_TYPE,
        });
        done();
      };

      vm.resize(MACHINE_TYPE, assert.ifError);
    });

    it('should allow a partial machine type', function(done) {
      const partialMachineType = MACHINE_TYPE.split('/').pop();

      vm.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/setMachineType');
        assert.deepStrictEqual(reqOpts.json, {
          machineType: MACHINE_TYPE,
        });
        done();
      };

      vm.resize(partialMachineType, assert.ifError);
    });

    describe('error', function() {
      describe('instance is running', function() {
        const error = new Error('Instance is starting or running.');

        beforeEach(function() {
          vm.zone.parent.execAfterOperation_ = function(callback) {
            vm.zone.parent.execAfterOperation_ = util.noop;
            callback(error);
          };
        });

        it('should stop the VM', function(done) {
          vm.stop = function() {
            done();
          };

          vm.resize(MACHINE_TYPE, assert.ifError);
        });

        describe('stopping failed', function() {
          const vmStopError = new Error('Error.');
          const apiResponse = {};

          beforeEach(function() {
            // First: vm.request()
            vm.zone.parent.execAfterOperation_ = function(callback) {
              // Second: vm.stop()
              vm.zone.parent.execAfterOperation_ = function(callback) {
                return function onVmStop() {
                  callback(vmStopError, apiResponse);
                };
              };

              callback(error);
            };

            vm.stop = function(onVmStop) {
              onVmStop();
            };
          });

          it('should return the error and API response', function(done) {
            vm.resize(MACHINE_TYPE, function(err, apiResponse_) {
              assert.strictEqual(err, vmStopError);
              assert.strictEqual(apiResponse_, apiResponse);
              done();
            });
          });
        });

        describe('stopping succeeded', function() {
          beforeEach(function() {
            // First: vm.request()
            vm.zone.parent.execAfterOperation_ = function(callback) {
              // Second: vm.stop()
              vm.zone.parent.execAfterOperation_ = function(callback) {
                return function onVmStop() {
                  callback();
                };
              };

              callback(error);
            };

            vm.stop = function(onVmStop) {
              // `setImmediate` to allow the `resize` reassignment to register.
              setImmediate(onVmStop);
            };
          });

          it('should try to resize the VM again', function(done) {
            vm.resize(MACHINE_TYPE, assert.ifError);

            vm.resize = function() {
              done();
            };
          });
        });
      });

      describe('instance is stopped', function() {
        const error = new Error('Error');
        const apiResponse = {};

        beforeEach(function() {
          vm.zone.parent.execAfterOperation_ = function(callback) {
            vm.zone.parent.execAfterOperation_ = util.noop;

            callback(error, apiResponse);
          };
        });

        it('should return the error & API response', function(done) {
          vm.resize(MACHINE_TYPE, function(err, apiResponse_) {
            assert.strictEqual(err, error);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          });
        });
      });
    });

    describe('success', function() {
      it('should start the VM by default', function(done) {
        function userCallback() {}
        function onVmStart() {}

        vm.zone.parent.execAfterOperation_ = function(callback) {
          vm.zone.parent.execAfterOperation_ = function(callback) {
            assert.strictEqual(callback, userCallback);
            return onVmStart;
          };

          callback();
        };

        vm.start = function(callback) {
          assert.strictEqual(callback, onVmStart);
          done();
        };

        vm.resize(MACHINE_TYPE, userCallback);
      });
    });

    it('should not start the VM by request', function(done) {
      const apiResponse = {};

      vm.zone.parent.execAfterOperation_ = function(callback) {
        callback(null, apiResponse);
      };

      vm.start = function() {
        done(); // Test will fail if called.
      };

      vm.resize(MACHINE_TYPE, {start: false}, function(err, apiResponse_) {
        assert.ifError(err);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });
  });

  describe('setMetadata', function() {
    const METADATA = {
      newKey: 'newValue',
    };

    describe('getting the current fingerprint', function() {
      describe('error', function() {
        const error = new Error('Error.');
        const apiResponse = {};

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
          const metadata = {
            metadata: {
              fingerprint: '===',
            },
          };

          const apiResponse = {};

          beforeEach(function() {
            vm.getMetadata = function(callback) {
              callback(null, metadata, apiResponse);
            };
          });

          it('should make the correct request', function(done) {
            const expectedNewMetadata = extend(true, {}, metadata.metadata, {
              items: [
                {
                  key: 'newKey',
                  value: 'newValue',
                },
              ],
            });

            vm.request = function(reqOpts, callback) {
              assert.strictEqual(reqOpts.method, 'POST');
              assert.strictEqual(reqOpts.uri, '/setMetadata');
              assert.deepStrictEqual(reqOpts.json, expectedNewMetadata);

              callback(); // done()
            };

            vm.setMetadata(METADATA, done);
          });
        });
      });
    });
  });

  describe('setTags', function() {
    const TAGS = [];
    const FINGERPRINT = '';

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

  describe('waitFor', function() {
    const VALID_STATUSES = [
      'PROVISIONING',
      'STAGING',
      'RUNNING',
      'STOPPING',
      'SUSPENDING',
      'SUSPENDED',
      'TERMINATED',
    ];

    beforeEach(function() {
      vm.startPolling_ = util.noop;
    });

    it('should throw if an invalid status is passed', function() {
      assert.throws(function() {
        vm.waitFor('It', assert.ifError);
      }, new RegExp('Status passed to waitFor is invalid.'));
    });

    it('should accept valid statuses', function() {
      assert.doesNotThrow(function() {
        VALID_STATUSES.forEach(function(status) {
          vm.waitFor(status, assert.ifError);
        });
      });
    });

    it('should accept lowercase status', function() {
      assert.doesNotThrow(function() {
        vm.waitFor('ProVisioning', assert.ifError);
        assert.strictEqual(vm.waiters.pop().status, 'PROVISIONING');
      });
    });

    it('should not allow an out of bounds timeout', function() {
      vm.waitFor(VALID_STATUSES[0], {timeout: -1}, assert.ifError);
      assert.strictEqual(vm.waiters.pop().timeout, 0);

      vm.waitFor(VALID_STATUSES[0], {timeout: 601}, assert.ifError);
      assert.strictEqual(vm.waiters.pop().timeout, 600);
    });

    it('should create a waiter', function(done) {
      const now = new Date() / 1000;
      vm.waitFor(VALID_STATUSES[0], done);

      const createdWaiter = vm.waiters.pop();

      assert.strictEqual(createdWaiter.status, VALID_STATUSES[0]);
      assert.strictEqual(createdWaiter.timeout, 300);

      assert(createdWaiter.startTime > now - 1000);
      assert(createdWaiter.startTime < now + 1000);

      createdWaiter.callback(); // done()
    });

    it('should flip hasActiveWaiters to true', function() {
      assert.strictEqual(vm.hasActiveWaiters, false);
      vm.waitFor(VALID_STATUSES[0], assert.ifError);
      assert.strictEqual(vm.hasActiveWaiters, true);
    });

    it('should start polling', function(done) {
      vm.startPolling_ = done;

      vm.waitFor(VALID_STATUSES[0], assert.ifError);
    });

    it('should not start polling if already polling', function(done) {
      vm.hasActiveWaiters = true;

      vm.startPolling_ = function() {
        done(new Error('Should not have called startPolling_.'));
      };

      vm.waitFor(VALID_STATUSES[0], assert.ifError);
      done();
    });
  });

  describe('startPolling_', function() {
    const METADATA = {};

    beforeEach(function() {
      vm.hasActiveWaiters = true;

      vm.getMetadata = function(callback) {
        callback(null, METADATA);
      };
    });

    it('should only poll if there are active waiters', function(done) {
      vm.hasActiveWaiters = false;

      vm.getMetadata = function() {
        done(new Error('Should not have refreshed metadata.'));
      };

      vm.startPolling_();
      done();
    });

    it('should refresh metadata', function(done) {
      vm.getMetadata = function() {
        done();
      };

      vm.startPolling_();
    });

    describe('metadata refresh error', function() {
      const ERROR = new Error('Error.');

      beforeEach(function() {
        vm.getMetadata = function(callback) {
          callback(ERROR);
        };

        vm.waiters.push({
          callback: util.noop,
        });
      });

      it('should execute waiter with error', function(done) {
        vm.waiters[0].callback = function(err) {
          assert.strictEqual(err, ERROR);
          done();
        };

        vm.startPolling_();
      });

      it('should remove waiter', function() {
        assert.strictEqual(vm.waiters.length, 1);
        vm.startPolling_();
        assert.strictEqual(vm.waiters.length, 0);
      });

      it('should flip hasActiveWaiters to false', function() {
        assert.strictEqual(vm.hasActiveWaiters, true);
        vm.startPolling_();
        assert.strictEqual(vm.hasActiveWaiters, false);
      });
    });

    describe('desired status reached', function() {
      const STATUS = 'status';
      const METADATA = {
        status: STATUS,
      };

      beforeEach(function() {
        vm.getMetadata = function(callback) {
          callback(null, METADATA);
        };

        vm.waiters.push({
          status: STATUS,
          callback: util.noop,
        });
      });

      it('should execute callback with metadata', function(done) {
        vm.waiters[0].callback = function(err, metadata) {
          assert.ifError(err);
          assert.strictEqual(metadata, METADATA);
          done();
        };

        vm.startPolling_();
      });

      it('should remove waiter', function() {
        assert.strictEqual(vm.waiters.length, 1);
        vm.startPolling_();
        assert.strictEqual(vm.waiters.length, 0);
      });

      it('should flip hasActiveWaiters to false', function() {
        assert.strictEqual(vm.hasActiveWaiters, true);
        vm.startPolling_();
        assert.strictEqual(vm.hasActiveWaiters, false);
      });
    });

    describe('timeout exceeded', function() {
      const STATUS = 'status';

      beforeEach(function() {
        vm.waiters.push({
          status: STATUS,
          startTime: Date.now() / 1000 - 20,
          timeout: 10,
          callback: util.noop,
        });
      });

      it('should execute callback with WaitForTimeoutError', function(done) {
        vm.waiters[0].callback = function(err) {
          assert.strictEqual(err.name, 'WaitForTimeoutError');
          assert.strictEqual(
            err.message,
            [
              'waitFor timed out waiting for VM ' + vm.name,
              'to be in status: ' + STATUS,
            ].join(' ')
          );

          done();
        };

        vm.startPolling_();
      });

      it('should remove waiter', function() {
        assert.strictEqual(vm.waiters.length, 1);
        vm.startPolling_();
        assert.strictEqual(vm.waiters.length, 0);
      });

      it('should flip hasActiveWaiters to false', function() {
        assert.strictEqual(vm.hasActiveWaiters, true);
        vm.startPolling_();
        assert.strictEqual(vm.hasActiveWaiters, false);
      });
    });

    describe('desired status not reached yet', function() {
      const STATUS = 'status';
      const setTimeout = global.setTimeout;

      beforeEach(function() {
        vm.waiters.push({
          status: STATUS,
          startTime: Date.now() / 1000,
          timeout: 500,
        });
      });

      after(function() {
        global.setTimeout = setTimeout;
      });

      it('should check for the status again after interval', function(done) {
        global.setTimeout = function(fn, interval) {
          assert.strictEqual(interval, 2000);

          vm.getMetadata = function() {
            // Confirms startPolling_() was called again.
            done();
          };

          fn(); // startPolling_()
        };

        assert.strictEqual(vm.waiters.length, 1);
        vm.startPolling_();
        assert.strictEqual(vm.waiters.length, 1);
      });
    });
  });

  describe('request', function() {
    it('should make the correct request to Compute', function(done) {
      const reqOpts = {};

      FakeServiceObject.prototype.request = function(reqOpts_) {
        assert.strictEqual(this, vm);
        assert.strictEqual(reqOpts_, reqOpts);

        done();
      };

      vm.request(reqOpts, assert.ifError);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

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
      const apiResponse = {name: 'operation-name'};

      beforeEach(function() {
        FakeServiceObject.prototype.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Zone object & API resp', function(done) {
        const operation = {};

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
