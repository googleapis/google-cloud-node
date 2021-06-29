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
const extend = require('extend');
const proxyquire = require('proxyquire');
const {ServiceObject, util} = require('@google-cloud/common');
const promisify = require('@google-cloud/promisify');
const {replaceProjectIdToken} = require('@google-cloud/projectify');

let promisified = false;
const fakePromisify = Object.assign({}, promisify, {
  promisifyAll: function (Class) {
    if (Class.name === 'VM') {
      promisified = true;
    }
  },
});

let replaceProjectIdTokenOverride;
function fakeReplaceProjectIdToken() {
  return (replaceProjectIdTokenOverride || replaceProjectIdToken).apply(
    null,
    arguments
  );
}

class FakeServiceObject extends ServiceObject {
  constructor(config) {
    super(config);
    this.calledWith_ = arguments;
  }
}

describe('VM', () => {
  let VM;
  let vm;

  let Disk;
  let DISK;

  const COMPUTE = {
    authClient: {
      projectId: 'project-id',
      getProjectId: callback => {
        callback(null, 'project-id');
      },
    },
    projectId: 'project-id',
    apiEndpoint: 'compute.googleapis.com',
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

  before(() => {
    Disk = require('../src/disk.js');
    VM = proxyquire('../src/vm.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/promisify': fakePromisify,
      '@google-cloud/projectify': {
        replaceProjectIdToken: fakeReplaceProjectIdToken,
      },
    });
  });

  beforeEach(() => {
    replaceProjectIdTokenOverride = null;
    vm = new VM(ZONE, VM_NAME);
    DISK = new Disk(ZONE, 'disk-name');
  });

  describe('instantiation', () => {
    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should localize the zone', () => {
      assert.strictEqual(vm.zone, ZONE);
    });

    it('should localize the name', () => {
      assert.strictEqual(vm.name, VM_NAME);
    });

    it('should strip a qualified name to just the instance name', () => {
      const vm = new VM(ZONE, FULLY_QUALIFIED_NAME);
      assert.strictEqual(vm.name, VM_NAME);
    });

    it('should initialize hasActiveWaiters to false', () => {
      assert.strictEqual(vm.hasActiveWaiters, false);
    });

    it('should initialize an empty waiter array', () => {
      assert.deepStrictEqual(vm.waiters, []);
    });

    it('should localize the URL of the VM', () => {
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

    it('should inherit from ServiceObject', done => {
      const zoneInstance = Object.assign({}, ZONE, {
        createVM: {
          bind: function (context) {
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

  describe('attachDisk', () => {
    let EXPECTED_BODY;

    beforeEach(() => {
      EXPECTED_BODY = {
        deviceName: DISK.name,
        source: DISK.formattedName,
      };
    });

    it('should throw if a Disk object is not provided', () => {
      assert.throws(() => {
        vm.attachDisk('disk-3', {}, assert.ifError);
      }, /A Disk object must be provided/);

      assert.doesNotThrow(() => {
        vm.request = util.noop;
        vm.attachDisk(DISK, {}, assert.ifError);
      });
    });

    it('should not require an options object', done => {
      vm.request = function (reqOpts) {
        assert.deepStrictEqual(reqOpts.json, EXPECTED_BODY);
        done();
      };

      vm.attachDisk(DISK, assert.ifError);
    });

    describe('options.readOnly', () => {
      const CONFIG = {readOnly: true};

      it('should set the correct mode', done => {
        const expectedBody = Object.assign({}, EXPECTED_BODY, {
          mode: 'READ_ONLY',
        });

        vm.request = function (reqOpts) {
          assert.deepStrictEqual(reqOpts.json, expectedBody);
          done();
        };

        vm.attachDisk(DISK, CONFIG, assert.ifError);
      });

      it('should delete the readOnly property', done => {
        vm.request = function (reqOpts) {
          assert.strictEqual(typeof reqOpts.json.readOnly, 'undefined');
          done();
        };

        vm.attachDisk(DISK, CONFIG, assert.ifError);
      });
    });

    it('should make the correct API request', done => {
      vm.request = function (reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/attachDisk');
        assert.deepStrictEqual(reqOpts.json, EXPECTED_BODY);

        callback();
      };

      vm.attachDisk(DISK, {}, done);
    });
  });

  describe('delete', () => {
    it('should make the correct API request', done => {
      vm.request = function (reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'DELETE');
        assert.strictEqual(reqOpts.uri, '');

        callback();
      };

      vm.delete(done);
    });

    it('should not require a callback', done => {
      vm.request = function (reqOpts, callback) {
        assert.doesNotThrow(() => {
          callback();
          done();
        });
      };

      vm.delete();
    });
  });

  describe('detachDisk', () => {
    let DEVICE_NAME;
    let METADATA;

    beforeEach(() => {
      DEVICE_NAME = DISK.formattedName;

      METADATA = {
        disks: [
          {
            source: DEVICE_NAME,
            deviceName: DEVICE_NAME,
          },
        ],
      };

      vm.getMetadata = function (callback) {
        callback(null, METADATA, METADATA);
      };
    });

    it('should throw if a Disk is not provided', () => {
      assert.throws(() => {
        vm.detachDisk('disk-name');
      }, /A Disk object must be provided/);

      assert.doesNotThrow(() => {
        vm.getMetadata = util.noop;
        vm.detachDisk(DISK);
      });
    });

    it('should replace projectId token in disk name', done => {
      const REPLACED_DEVICE_NAME = 'replaced-device-name';

      replaceProjectIdTokenOverride = function (value, projectId) {
        assert.strictEqual(value, DISK.formattedName);
        assert.strictEqual(projectId, COMPUTE.authClient.projectId);
        return REPLACED_DEVICE_NAME;
      };

      vm.getMetadata = function (callback) {
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

      vm.request = function (reqOpts) {
        assert.strictEqual(reqOpts.qs.deviceName, REPLACED_DEVICE_NAME);
        done();
      };

      vm.detachDisk(DISK, assert.ifError);
    });

    it('should return an error if device name not found', done => {
      const metadata = {
        disks: [
          {
            source: 'a',
            deviceName: 'b',
          },
        ],
      };

      vm.getMetadata = function (callback) {
        callback(null, metadata, metadata);
      };

      vm.detachDisk(DISK, err => {
        assert.strictEqual(err.name, 'DetachDiskError');

        const errorMessage = 'Device name for this disk was not found.';
        assert.strictEqual(err.message, errorMessage);

        done();
      });
    });

    it('should make the correct API request', done => {
      vm.request = function (reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/detachDisk');
        assert.deepStrictEqual(reqOpts.qs, {deviceName: DEVICE_NAME});

        callback();
      };

      vm.detachDisk(DISK, done);
    });

    it('should not require a callback', done => {
      vm.request = function (reqOpts, callback) {
        assert.doesNotThrow(() => {
          callback();
          done();
        });
      };

      vm.detachDisk(DISK);
    });

    describe('refreshing metadata', () => {
      describe('error', () => {
        const ERROR = new Error('Error.');

        beforeEach(() => {
          vm.getMetadata = function (callback) {
            callback(ERROR);
          };
        });

        it('should return DetachDisk error', done => {
          vm.detachDisk(DISK, err => {
            assert.strictEqual(err.name, 'DetachDiskError');
            assert.strictEqual(err.message, ERROR.message);
            done();
          });
        });
      });
    });
  });

  describe('getLabels', () => {
    it('should get metadata', done => {
      vm.getMetadata = function () {
        done();
      };

      vm.getTags(assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        vm.getMetadata = function (callback) {
          callback(error, null, apiResponse);
        };
      });

      it('should execute callback with error', done => {
        vm.getLabels((err, labels, fingerprint, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(labels, null);
          assert.strictEqual(fingerprint, null);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const metadata = {
        labels: {},
        labelFingerprint: 'fingerprint',
      };

      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        vm.getMetadata = function (callback) {
          callback(null, metadata, apiResponse);
        };
      });

      it('should execute callback with tags and fingerprint', done => {
        vm.getLabels((err, labels, fingerprint, apiResponse_) => {
          assert.ifError(err);

          assert.strictEqual(labels, metadata.labels);
          assert.strictEqual(fingerprint, metadata.labelFingerprint);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });
  });

  describe('getSerialPortOutput', () => {
    const EXPECTED_QUERY = {port: 1, start: 0};

    it('should default to port 1', done => {
      FakeServiceObject.prototype.request = function (reqOpts) {
        assert.strictEqual(reqOpts.qs.port, 1);
        done();
      };

      vm.getSerialPortOutput(assert.ifError);
    });

    it('should override the default port', done => {
      const port = 8001;

      FakeServiceObject.prototype.request = function (reqOpts) {
        assert.strictEqual(reqOpts.qs.port, port);
        done();
      };

      vm.getSerialPortOutput(port, assert.ifError);
    });

    it('should override the start', done => {
      const start = 10;

      FakeServiceObject.prototype.request = function (reqOpts) {
        assert.strictEqual(reqOpts.qs.start, start);
        done();
      };

      vm.getSerialPortOutput({start}, assert.ifError);
    });

    it('should make the correct API request', done => {
      FakeServiceObject.prototype.request = function (reqOpts) {
        assert.strictEqual(reqOpts.uri, '/serialPort');
        assert.deepStrictEqual(reqOpts.qs, EXPECTED_QUERY);

        done();
      };

      vm.getSerialPortOutput(assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        FakeServiceObject.prototype.request = function (reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        vm.getSerialPortOutput((err, output, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(output, null);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {contents: 'contents'};

      beforeEach(() => {
        FakeServiceObject.prototype.request = function (reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should exec callback with contents & API response', done => {
        vm.getSerialPortOutput((err, output, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(output, apiResponse.contents);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });
  });

  describe('getTags', () => {
    it('should get metadata', done => {
      vm.getMetadata = function () {
        done();
      };

      vm.getTags(assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        vm.getMetadata = function (callback) {
          callback(error, null, apiResponse);
        };
      });

      it('should execute callback with error', done => {
        vm.getTags((err, tags, fingerprint, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(tags, null);
          assert.strictEqual(fingerprint, null);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });

    describe('success', () => {
      const metadata = {
        tags: {
          items: [],
          fingerprint: 'fingerprint',
        },
      };

      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        vm.getMetadata = function (callback) {
          callback(null, metadata, apiResponse);
        };
      });

      it('should execute callback with tags and fingerprint', done => {
        vm.getTags((err, tags, fingerprint, apiResponse_) => {
          assert.ifError(err);

          assert.strictEqual(tags, metadata.tags.items);
          assert.strictEqual(fingerprint, metadata.tags.fingerprint);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });
      });
    });
  });

  describe('reset', () => {
    it('should make the correct API request', done => {
      vm.request = function (reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/reset');

        callback();
      };

      vm.reset(done);
    });

    it('should not require a callback', done => {
      vm.request = function (reqOpts, callback) {
        assert.doesNotThrow(() => {
          callback();
          done();
        });
      };

      vm.reset();
    });
  });

  describe('resize', () => {
    const MACHINE_TYPE = 'zones/' + ZONE.name + '/machineTypes/machineType';

    beforeEach(() => {
      vm.request = util.noop;

      vm.zone.parent = {
        execAfterOperation_: util.noop,
      };
    });

    it('should try to set the machine type', done => {
      vm.request = function (reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/setMachineType');
        assert.deepStrictEqual(reqOpts.json, {
          machineType: MACHINE_TYPE,
        });
        done();
      };

      vm.resize(MACHINE_TYPE, assert.ifError);
    });

    it('should allow a partial machine type', done => {
      const partialMachineType = MACHINE_TYPE.split('/').pop();

      vm.request = function (reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/setMachineType');
        assert.deepStrictEqual(reqOpts.json, {
          machineType: MACHINE_TYPE,
        });
        done();
      };

      vm.resize(partialMachineType, assert.ifError);
    });

    describe('error', () => {
      describe('instance is running', () => {
        const error = new Error('Instance is starting or running.');

        beforeEach(() => {
          vm.zone.parent.execAfterOperation_ = function (callback) {
            vm.zone.parent.execAfterOperation_ = util.noop;
            callback(error);
          };
        });

        it('should stop the VM', done => {
          vm.stop = function () {
            done();
          };

          vm.resize(MACHINE_TYPE, assert.ifError);
        });

        describe('stopping failed', () => {
          const vmStopError = new Error('Error.');
          const apiResponse = {};

          beforeEach(() => {
            // First: vm.request()
            vm.zone.parent.execAfterOperation_ = function (callback) {
              // Second: vm.stop()
              vm.zone.parent.execAfterOperation_ = function (callback) {
                return function onVmStop() {
                  callback(vmStopError, apiResponse);
                };
              };

              callback(error);
            };

            vm.stop = function (onVmStop) {
              onVmStop();
            };
          });

          it('should return the error and API response', done => {
            vm.resize(MACHINE_TYPE, (err, apiResponse_) => {
              assert.strictEqual(err, vmStopError);
              assert.strictEqual(apiResponse_, apiResponse);
              done();
            });
          });
        });

        describe('stopping succeeded', () => {
          beforeEach(() => {
            // First: vm.request()
            vm.zone.parent.execAfterOperation_ = function (callback) {
              // Second: vm.stop()
              vm.zone.parent.execAfterOperation_ = function (callback) {
                return function onVmStop() {
                  callback();
                };
              };

              callback(error);
            };

            vm.stop = function (onVmStop) {
              // `setImmediate` to allow the `resize` reassignment to register.
              setImmediate(onVmStop);
            };
          });

          it('should try to resize the VM again', done => {
            vm.resize(MACHINE_TYPE, assert.ifError);

            vm.resize = function () {
              done();
            };
          });
        });
      });

      describe('instance is stopped', () => {
        const error = new Error('Error');
        const apiResponse = {};

        beforeEach(() => {
          vm.zone.parent.execAfterOperation_ = function (callback) {
            vm.zone.parent.execAfterOperation_ = util.noop;

            callback(error, apiResponse);
          };
        });

        it('should return the error & API response', done => {
          vm.resize(MACHINE_TYPE, (err, apiResponse_) => {
            assert.strictEqual(err, error);
            assert.strictEqual(apiResponse_, apiResponse);
            done();
          });
        });
      });
    });

    describe('success', () => {
      it('should start the VM by default', done => {
        function userCallback() {}
        function onVmStart() {}

        vm.zone.parent.execAfterOperation_ = function (callback) {
          vm.zone.parent.execAfterOperation_ = function (callback) {
            assert.strictEqual(callback, userCallback);
            return onVmStart;
          };

          callback();
        };

        vm.start = function (callback) {
          assert.strictEqual(callback, onVmStart);
          done();
        };

        vm.resize(MACHINE_TYPE, userCallback);
      });
    });

    it('should not start the VM by request', done => {
      const apiResponse = {};

      vm.zone.parent.execAfterOperation_ = function (callback) {
        callback(null, apiResponse);
      };

      vm.start = function () {
        done(); // Test will fail if called.
      };

      vm.resize(MACHINE_TYPE, {start: false}, (err, apiResponse_) => {
        assert.ifError(err);
        assert.strictEqual(apiResponse_, apiResponse);
        done();
      });
    });
  });

  describe('setLabels', () => {
    const LABELS = [];
    const FINGERPRINT = '';

    it('should make the correct request', done => {
      vm.request = function (reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/setLabels');
        assert.strictEqual(reqOpts.json.labels, LABELS);
        assert.strictEqual(reqOpts.json.labelFingerprint, FINGERPRINT);

        callback(); // done()
      };

      vm.setLabels(LABELS, FINGERPRINT, done);
    });

    it('should not require a callback', done => {
      vm.request = function (reqOpts, callback) {
        assert.doesNotThrow(callback);
        done();
      };

      vm.setLabels(LABELS, FINGERPRINT);
    });
  });

  describe('setMetadata', () => {
    const METADATA = {
      newKey: 'newValue',
    };

    describe('getting the current fingerprint', () => {
      describe('error', () => {
        const error = new Error('Error.');
        const apiResponse = {};

        beforeEach(() => {
          vm.getMetadata = function (callback) {
            callback(error, null, apiResponse);
          };
        });

        it('should exec the callback with error & API resp', done => {
          vm.setMetadata(METADATA, (err, operation, apiResponse_) => {
            assert.strictEqual(err, error);
            assert.strictEqual(operation, null);
            assert.strictEqual(apiResponse_, apiResponse);

            done();
          });
        });

        describe('success', () => {
          const metadata = {
            metadata: {
              fingerprint: '===',
            },
          };

          const apiResponse = {};

          beforeEach(() => {
            vm.getMetadata = function (callback) {
              callback(null, metadata, apiResponse);
            };
          });

          it('should make the correct request', done => {
            const expectedNewMetadata = extend(true, {}, metadata.metadata, {
              items: [
                {
                  key: 'newKey',
                  value: 'newValue',
                },
              ],
            });

            vm.request = function (reqOpts, callback) {
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

  describe('setTags', () => {
    const TAGS = [];
    const FINGERPRINT = '';

    it('should make the correct request', done => {
      vm.request = function (reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/setTags');
        assert.strictEqual(reqOpts.json.items, TAGS);
        assert.strictEqual(reqOpts.json.fingerprint, FINGERPRINT);

        callback(); // done()
      };

      vm.setTags(TAGS, FINGERPRINT, done);
    });

    it('should not require a callback', done => {
      vm.request = function (reqOpts, callback) {
        assert.doesNotThrow(callback);
        done();
      };

      vm.setTags(TAGS, FINGERPRINT);
    });
  });

  describe('start', () => {
    it('should make the correct API request', done => {
      vm.request = function (reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/start');

        callback();
      };

      vm.start(done);
    });

    it('should not require a callback', done => {
      vm.request = function (reqOpts, callback) {
        assert.doesNotThrow(() => {
          callback();
          done();
        });
      };

      vm.start();
    });
  });

  describe('startWithEncryptionKey', () => {
    const DISKS = [];

    it('should make the correct API request', done => {
      vm.request = function (reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/startWithEncryptionKey');
        assert.strictEqual(reqOpts.json.disks, DISKS);

        callback();
      };

      vm.startWithEncryptionKey(DISKS, done);
    });

    it('should not require a callback', done => {
      vm.request = function (reqOpts, callback) {
        assert.doesNotThrow(() => {
          callback();
          done();
        });
      };

      vm.start();
    });
  });

  describe('stop', () => {
    it('should make the correct API request', done => {
      vm.request = function (reqOpts, callback) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/stop');

        callback();
      };

      vm.stop(done);
    });

    it('should not require a callback', done => {
      vm.request = function (reqOpts, callback) {
        assert.doesNotThrow(() => {
          callback();
          done();
        });
      };

      vm.stop();
    });
  });

  describe('update', () => {
    const CURRENT_METADATA = {currentProperty: true};
    const METADATA = {newProperty: true};

    beforeEach(() => {
      vm.getMetadata = callback => {
        callback(null, CURRENT_METADATA);
      };
      vm.request = () => {};
    });

    it('should pull the latest metadata', done => {
      vm.getMetadata = () => {
        done();
      };

      vm.update(METADATA, assert.ifError);
    });

    it('should return an error if the metadata call failed', done => {
      const error = new Error('Error.');

      vm.getMetadata = callback => {
        callback(error);
      };

      vm.update(METADATA, err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should send the correct request', done => {
      vm.request = reqOpts => {
        assert.deepStrictEqual(reqOpts, {
          method: 'PUT',
          uri: '',
          json: extend(true, CURRENT_METADATA, METADATA),
        });
        done();
      };

      vm.update(METADATA, assert.ifError);
    });

    it('should deep merge the current metadata with new metadata', done => {
      const currentMetadata = {
        a: {
          b: {
            c: true,
            d: true,
          },
        },
      };
      const newMetadata = {
        a: {
          b: {
            c: false,
          },
        },
      };
      const expectedMetadata = {
        a: {
          b: {
            c: false,
            d: true,
          },
        },
      };

      vm.getMetadata = callback => {
        callback(null, currentMetadata);
      };

      vm.request = reqOpts => {
        assert.deepStrictEqual(reqOpts.json, expectedMetadata);
        done();
      };

      vm.update(newMetadata, assert.ifError);
    });

    it('should not require a callback', () => {
      assert.doesNotThrow(() => {
        vm.update(METADATA);
      });
    });
  });

  describe('waitFor', () => {
    const VALID_STATUSES = [
      'PROVISIONING',
      'STAGING',
      'RUNNING',
      'STOPPING',
      'SUSPENDING',
      'SUSPENDED',
      'TERMINATED',
    ];

    beforeEach(() => {
      vm.startPolling_ = util.noop;
    });

    it('should throw if an invalid status is passed', () => {
      assert.throws(() => {
        vm.waitFor('It', assert.ifError);
      }, new RegExp('Status passed to waitFor is invalid.'));
    });

    it('should accept valid statuses', () => {
      assert.doesNotThrow(() => {
        VALID_STATUSES.forEach(status => {
          vm.waitFor(status, assert.ifError);
        });
      });
    });

    it('should accept lowercase status', () => {
      assert.doesNotThrow(() => {
        vm.waitFor('ProVisioning', assert.ifError);
        assert.strictEqual(vm.waiters.pop().status, 'PROVISIONING');
      });
    });

    it('should not allow an out of bounds timeout', () => {
      vm.waitFor(VALID_STATUSES[0], {timeout: -1}, assert.ifError);
      assert.strictEqual(vm.waiters.pop().timeout, 0);

      vm.waitFor(VALID_STATUSES[0], {timeout: 601}, assert.ifError);
      assert.strictEqual(vm.waiters.pop().timeout, 600);
    });

    it('should create a waiter', done => {
      const now = new Date() / 1000;
      vm.waitFor(VALID_STATUSES[0], done);

      const createdWaiter = vm.waiters.pop();

      assert.strictEqual(createdWaiter.status, VALID_STATUSES[0]);
      assert.strictEqual(createdWaiter.timeout, 300);

      assert(createdWaiter.startTime > now - 1000);
      assert(createdWaiter.startTime < now + 1000);

      createdWaiter.callback(); // done()
    });

    it('should flip hasActiveWaiters to true', () => {
      assert.strictEqual(vm.hasActiveWaiters, false);
      vm.waitFor(VALID_STATUSES[0], assert.ifError);
      assert.strictEqual(vm.hasActiveWaiters, true);
    });

    it('should start polling', done => {
      vm.startPolling_ = done;

      vm.waitFor(VALID_STATUSES[0], assert.ifError);
    });

    it('should not start polling if already polling', done => {
      vm.hasActiveWaiters = true;

      vm.startPolling_ = function () {
        done(new Error('Should not have called startPolling_.'));
      };

      vm.waitFor(VALID_STATUSES[0], assert.ifError);
      done();
    });
  });

  describe('startPolling_', () => {
    const METADATA = {};

    beforeEach(() => {
      vm.hasActiveWaiters = true;

      vm.getMetadata = function (callback) {
        callback(null, METADATA);
      };
    });

    it('should only poll if there are active waiters', done => {
      vm.hasActiveWaiters = false;

      vm.getMetadata = function () {
        done(new Error('Should not have refreshed metadata.'));
      };

      vm.startPolling_();
      done();
    });

    it('should refresh metadata', done => {
      vm.getMetadata = function () {
        done();
      };

      vm.startPolling_();
    });

    describe('metadata refresh error', () => {
      const ERROR = new Error('Error.');

      beforeEach(() => {
        vm.getMetadata = function (callback) {
          callback(ERROR);
        };

        vm.waiters.push({
          callback: util.noop,
        });
      });

      it('should execute waiter with error', done => {
        vm.waiters[0].callback = function (err) {
          assert.strictEqual(err, ERROR);
          done();
        };

        vm.startPolling_();
      });

      it('should remove waiter', () => {
        assert.strictEqual(vm.waiters.length, 1);
        vm.startPolling_();
        assert.strictEqual(vm.waiters.length, 0);
      });

      it('should flip hasActiveWaiters to false', () => {
        assert.strictEqual(vm.hasActiveWaiters, true);
        vm.startPolling_();
        assert.strictEqual(vm.hasActiveWaiters, false);
      });
    });

    describe('desired status reached', () => {
      const STATUS = 'status';
      const METADATA = {
        status: STATUS,
      };

      beforeEach(() => {
        vm.getMetadata = function (callback) {
          callback(null, METADATA);
        };

        vm.waiters.push({
          status: STATUS,
          callback: util.noop,
        });
      });

      it('should execute callback with metadata', done => {
        vm.waiters[0].callback = function (err, metadata) {
          assert.ifError(err);
          assert.strictEqual(metadata, METADATA);
          done();
        };

        vm.startPolling_();
      });

      it('should remove waiter', () => {
        assert.strictEqual(vm.waiters.length, 1);
        vm.startPolling_();
        assert.strictEqual(vm.waiters.length, 0);
      });

      it('should flip hasActiveWaiters to false', () => {
        assert.strictEqual(vm.hasActiveWaiters, true);
        vm.startPolling_();
        assert.strictEqual(vm.hasActiveWaiters, false);
      });
    });

    describe('timeout exceeded', () => {
      const STATUS = 'status';

      beforeEach(() => {
        vm.waiters.push({
          status: STATUS,
          startTime: Date.now() / 1000 - 20,
          timeout: 10,
          callback: util.noop,
        });
      });

      it('should execute callback with WaitForTimeoutError', done => {
        vm.waiters[0].callback = function (err) {
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

      it('should remove waiter', () => {
        assert.strictEqual(vm.waiters.length, 1);
        vm.startPolling_();
        assert.strictEqual(vm.waiters.length, 0);
      });

      it('should flip hasActiveWaiters to false', () => {
        assert.strictEqual(vm.hasActiveWaiters, true);
        vm.startPolling_();
        assert.strictEqual(vm.hasActiveWaiters, false);
      });
    });

    describe('desired status not reached yet', () => {
      const STATUS = 'status';
      const setTimeout = global.setTimeout;

      beforeEach(() => {
        vm.waiters.push({
          status: STATUS,
          startTime: Date.now() / 1000,
          timeout: 500,
        });
      });

      after(() => {
        global.setTimeout = setTimeout;
      });

      it('should check for the status again after interval', done => {
        global.setTimeout = function (fn, interval) {
          assert.strictEqual(interval, 2000);

          vm.getMetadata = function () {
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

  describe('request', () => {
    it('should make the correct request to Compute', done => {
      const reqOpts = {};

      FakeServiceObject.prototype.request = function (reqOpts_) {
        assert.strictEqual(this, vm);
        assert.strictEqual(reqOpts_, reqOpts);

        done();
      };

      vm.request(reqOpts, assert.ifError);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        FakeServiceObject.prototype.request = function (reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error & API response', done => {
        vm.request({}, (err, operation, resp) => {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });

    describe('success', () => {
      const apiResponse = {name: 'operation-name'};

      beforeEach(() => {
        FakeServiceObject.prototype.request = function (reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Zone object & API resp', done => {
        const operation = {};

        vm.zone.operation = function (name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        vm.request({}, (err, operation_, resp) => {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });
});
