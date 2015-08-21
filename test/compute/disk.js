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
var format = require('string-format-obj');

var Disk = require('../../lib/compute/disk');
var util = require('../../lib/common/util');

describe('Disk', function() {
  var disk;

  var COMPUTE = { projectId: 'project-id' };
  var ZONE = { compute: COMPUTE, name: 'us-central1-a' };
  var DISK_NAME = 'disk-name';
  var DISK_FULL_NAME = format('projects/{pId}/zones/{zName}/disks/{dName}', {
    pId: COMPUTE.projectId,
    zName: ZONE.name,
    dName: DISK_NAME
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

    it('should default metadata to an empty object', function() {
      assert.strictEqual(typeof disk.metadata, 'object');
      assert.strictEqual(Object.keys(disk.metadata).length, 0);
    });

    it('should format the disk name', function() {
      var formatName_ = Disk.formatName_;
      var formattedName = 'projects/a/zones/b/disks/c';

      Disk.formatName_ = function(zone, name) {
        Disk.formatName_ = formatName_;

        assert.strictEqual(zone, ZONE);
        assert.strictEqual(name, DISK_NAME);

        return formattedName;
      };

      var disk = new Disk(ZONE, DISK_NAME);
      assert(disk.formattedName, formattedName);
    });
  });

  describe('formatName_', function() {
    it('should format the name', function() {
      var formattedName_ = Disk.formatName_(ZONE, DISK_NAME);
      assert.strictEqual(formattedName_, DISK_FULL_NAME);
    });
  });

  describe('createSnapshot', function() {
    it('should make the correct API request', function(done) {
      disk.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'POST');
        assert.strictEqual(path, '/createSnapshot');
        assert.strictEqual(query, null);
        assert.deepEqual(body, { name: 'test', a: 'b' });
        done();
      };

      disk.createSnapshot('test', { a: 'b' }, util.noop);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        disk.makeReq_ = function(method, path, query, body, callback) {
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
      var apiResponse = {
        name: 'op-name'
      };

      beforeEach(function() {
        disk.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Snapshot & Operation', function(done) {
        var snapshot = {};
        var operation = {};

        disk.zone.compute.snapshot = function(name) {
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
    it('should make the correct API request', function(done) {
      disk.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'DELETE');
        assert.strictEqual(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);
        done();
      };

      disk.delete(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        disk.makeReq_ = function(method, path, query, body, callback) {
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
      var apiResponse = {
        name: 'op-name'
      };

      beforeEach(function() {
        disk.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should execute callback with Operation & Response', function(done) {
        var operation = {};

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

  describe('getMetadata', function() {
    it('should make the correct API request', function(done) {
      disk.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        done();
      };

      disk.getMetadata(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        disk.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error and API response', function(done) {
        disk.getMetadata(function(err, metadata, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(metadata, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          disk.getMetadata();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        disk.makeReq_ = function(method, path, query, body, callback) {
          callback(null, apiResponse);
        };
      });

      it('should update the metadata to the API response', function(done) {
        disk.getMetadata(function(err) {
          assert.ifError(err);
          assert.strictEqual(disk.metadata, apiResponse);
          done();
        });
      });

      it('should exec callback with metadata and API response', function(done) {
        disk.getMetadata(function(err, metadata, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          disk.getMetadata();
        });
      });
    });
  });

  describe('makeReq_', function() {
    it('should make the correct request to Compute', function(done) {
      var expectedPathPrefix = '/disks/' + disk.name;

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

      disk.zone.makeReq_ = function(method_, path_, query_, body_, cb) {
        assert.strictEqual(method_, method);
        assert.strictEqual(path_, expectedPathPrefix + path);
        assert.strictEqual(query_, query);
        assert.strictEqual(body_, body);
        cb();
      };

      disk.makeReq_(method, path, query, body, done);
    });
  });
});
