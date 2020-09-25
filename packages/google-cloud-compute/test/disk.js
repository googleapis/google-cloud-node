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
    if (Class.name !== 'Disk') {
      return;
    }

    promisified = true;
    assert.deepStrictEqual(options.exclude, ['snapshot']);
  },
});

function FakeSnapshot() {
  this.calledWith_ = [].slice.call(arguments);
}

class FakeServiceObject extends ServiceObject {
  constructor(config) {
    super(config);
    this.calledWith_ = arguments;
  }
}

describe('Disk', () => {
  let Disk;
  let disk;

  const COMPUTE = {
    projectId: 'project-id',
  };

  const ZONE = {
    compute: COMPUTE,
    name: 'us-central1-a',
    createDisk: util.noop,
  };

  const DISK_NAME = 'disk-name';
  const DISK_FULL_NAME = format('projects/{pId}/zones/{zName}/disks/{dName}', {
    pId: COMPUTE.projectId,
    zName: ZONE.name,
    dName: DISK_NAME,
  });

  before(() => {
    Disk = proxyquire('../src/disk.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
      },
      '@google-cloud/promisify': fakePromisify,
      './snapshot.js': FakeSnapshot,
    });
  });

  beforeEach(() => {
    disk = new Disk(ZONE, DISK_NAME);
  });

  describe('instantiation', () => {
    it('should localize the zone', () => {
      assert.strictEqual(disk.zone, ZONE);
    });

    it('should localize the name', () => {
      assert.strictEqual(disk.name, DISK_NAME);
    });

    it('should promisify all the things', () => {
      assert(promisified);
    });

    it('should format the disk name', () => {
      const formatName_ = Disk.formatName_;
      const formattedName = 'projects/a/zones/b/disks/c';

      Disk.formatName_ = function (zone, name) {
        Disk.formatName_ = formatName_;

        assert.strictEqual(zone, ZONE);
        assert.strictEqual(name, DISK_NAME);

        return formattedName;
      };

      const disk = new Disk(ZONE, DISK_NAME);
      assert(disk.formattedName, formattedName);
    });

    it('should inherit from ServiceObject', done => {
      const zoneInstance = Object.assign({}, ZONE, {
        createDisk: {
          bind: function (context) {
            assert.strictEqual(context, zoneInstance);
            done();
          },
        },
      });

      const disk = new Disk(zoneInstance, DISK_NAME);
      assert(disk instanceof ServiceObject);

      const calledWith = disk.calledWith_[0];

      assert.strictEqual(calledWith.parent, zoneInstance);
      assert.strictEqual(calledWith.baseUrl, '/disks');
      assert.strictEqual(calledWith.id, DISK_NAME);
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
      const formattedName_ = Disk.formatName_(ZONE, DISK_NAME);
      assert.strictEqual(formattedName_, DISK_FULL_NAME);
    });
  });

  describe('createSnapshot', () => {
    it('should make the correct API request', done => {
      disk.request = function (reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/createSnapshot');
        assert.deepStrictEqual(reqOpts.json, {name: 'test', a: 'b'});
        done();
      };

      disk.createSnapshot('test', {a: 'b'}, util.noop);
    });

    describe('error', () => {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(() => {
        disk.request = function (reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', done => {
        disk.createSnapshot('test', {}, (err, snap, op, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(snap, null);
          assert.strictEqual(op, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require options', () => {
        assert.doesNotThrow(() => {
          disk.createSnapshot('test', util.noop);
        });
      });
    });

    describe('success', () => {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(() => {
        disk.request = function (reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Snapshot & Operation', done => {
        const snapshot = {};
        const operation = {};

        disk.snapshot = function (name) {
          assert.strictEqual(name, 'test');
          return snapshot;
        };

        disk.zone.operation = function (name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        disk.createSnapshot('test', {}, (err, snap, op, apiResponse_) => {
          assert.ifError(err);

          assert.strictEqual(snap, snapshot);
          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });

        it('should not require options', () => {
          assert.doesNotThrow(() => {
            disk.createSnapshot('test', util.noop);
          });
        });
      });
    });
  });

  describe('delete', () => {
    it('should call ServiceObject.delete', done => {
      FakeServiceObject.prototype.delete = function () {
        assert.strictEqual(this, disk);
        done();
      };

      disk.delete();
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
        disk.delete((err, operation, apiResponse_) => {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          disk.delete();
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

        disk.zone.operation = function (name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        disk.delete((err, operation_, apiResponse_) => {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', () => {
        assert.doesNotThrow(() => {
          disk.delete();
        });
      });
    });
  });

  describe('snapshot', () => {
    const NAME = 'snapshot-name';

    it('should return a Snapshot object', () => {
      const snapshot = disk.snapshot(NAME);
      assert(snapshot instanceof FakeSnapshot);
      assert.strictEqual(snapshot.calledWith_[0], disk);
      assert.strictEqual(snapshot.calledWith_[1], NAME);
    });
  });
});
