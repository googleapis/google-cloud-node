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
const format = require('string-format-obj');
const nodeutil = require('util');
const proxyquire = require('proxyquire');
const ServiceObject = require('@google-cloud/common').ServiceObject;
const util = require('@google-cloud/common').util;

let promisified = false;
const fakeUtil = extend({}, util, {
  promisifyAll: function(Class, options) {
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

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Disk', function() {
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

  before(function() {
    Disk = proxyquire('../src/disk.js', {
      '@google-cloud/common': {
        ServiceObject: FakeServiceObject,
        util: fakeUtil,
      },
      './snapshot.js': FakeSnapshot,
    });
  });

  beforeEach(function() {
    disk = new Disk(ZONE, DISK_NAME);
  });

  describe('instantiation', function() {
    it('should localize the zone', function() {
      assert.strictEqual(disk.zone, ZONE);
    });

    it('should localize the name', function() {
      assert.strictEqual(disk.name, DISK_NAME);
    });

    it('should promisify all the things', function() {
      assert(promisified);
    });

    it('should format the disk name', function() {
      const formatName_ = Disk.formatName_;
      const formattedName = 'projects/a/zones/b/disks/c';

      Disk.formatName_ = function(zone, name) {
        Disk.formatName_ = formatName_;

        assert.strictEqual(zone, ZONE);
        assert.strictEqual(name, DISK_NAME);

        return formattedName;
      };

      const disk = new Disk(ZONE, DISK_NAME);
      assert(disk.formattedName, formattedName);
    });

    it('should inherit from ServiceObject', function(done) {
      const zoneInstance = extend({}, ZONE, {
        createDisk: {
          bind: function(context) {
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

  describe('formatName_', function() {
    it('should format the name', function() {
      const formattedName_ = Disk.formatName_(ZONE, DISK_NAME);
      assert.strictEqual(formattedName_, DISK_FULL_NAME);
    });
  });

  describe('createSnapshot', function() {
    it('should make the correct API request', function(done) {
      disk.request = function(reqOpts) {
        assert.strictEqual(reqOpts.method, 'POST');
        assert.strictEqual(reqOpts.uri, '/createSnapshot');
        assert.deepStrictEqual(reqOpts.json, {name: 'test', a: 'b'});
        done();
      };

      disk.createSnapshot('test', {a: 'b'}, util.noop);
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        disk.request = function(reqOpts, callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        disk.createSnapshot('test', {}, function(err, snap, op, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(snap, null);
          assert.strictEqual(op, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require options', function() {
        assert.doesNotThrow(function() {
          disk.createSnapshot('test', util.noop);
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        disk.request = function(reqOpts, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Snapshot & Operation', function(done) {
        const snapshot = {};
        const operation = {};

        disk.snapshot = function(name) {
          assert.strictEqual(name, 'test');
          return snapshot;
        };

        disk.zone.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        disk.createSnapshot('test', {}, function(err, snap, op, apiResponse_) {
          assert.ifError(err);

          assert.strictEqual(snap, snapshot);
          assert.strictEqual(op, operation);
          assert.strictEqual(op.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);

          done();
        });

        it('should not require options', function() {
          assert.doesNotThrow(function() {
            disk.createSnapshot('test', util.noop);
          });
        });
      });
    });
  });

  describe('delete', function() {
    it('should call ServiceObject.delete', function(done) {
      FakeServiceObject.prototype.delete = function() {
        assert.strictEqual(this, disk);
        done();
      };

      disk.delete();
    });

    describe('error', function() {
      const error = new Error('Error.');
      const apiResponse = {a: 'b', c: 'd'};

      beforeEach(function() {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(error, apiResponse);
        };
      });

      it('should return an error if the request fails', function(done) {
        disk.delete(function(err, operation, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(operation, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          disk.delete();
        });
      });
    });

    describe('success', function() {
      const apiResponse = {
        name: 'op-name',
      };

      beforeEach(function() {
        FakeServiceObject.prototype.delete = function(callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', function(done) {
        const operation = {};

        disk.zone.operation = function(name) {
          assert.strictEqual(name, apiResponse.name);
          return operation;
        };

        disk.delete(function(err, operation_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(operation_, operation);
          assert.strictEqual(operation_.metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          disk.delete();
        });
      });
    });
  });

  describe('snapshot', function() {
    const NAME = 'snapshot-name';

    it('should return a Snapshot object', function() {
      const snapshot = disk.snapshot(NAME);
      assert(snapshot instanceof FakeSnapshot);
      assert.strictEqual(snapshot.calledWith_[0], disk);
      assert.strictEqual(snapshot.calledWith_[1], NAME);
    });
  });
});
