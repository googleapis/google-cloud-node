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

var Disk = require('../../lib/compute/disk.js');
var util = require('../../lib/common/util.js');
var VM = require('../../lib/compute/vm.js');

describe('VM', function() {
  var vm;

  var COMPUTE = { projectId: 'project-id' };
  var ZONE = { compute: COMPUTE, name: 'us-central1-a' };
  var VM_NAME = 'vm-name';

  var DISK = new Disk(ZONE, 'disk-name');

  beforeEach(function() {
    vm = new VM(ZONE, VM_NAME);
  });

  describe('instantiation', function() {
    it('should localize the zone', function() {
      assert.strictEqual(vm.zone, ZONE);
    });

    it('should localize the name', function() {
      assert.strictEqual(vm.name, VM_NAME);
    });
  });

  describe('attachDisk', function() {
    var CONFIG = {};
    var EXPECTED_BODY = { source: DISK.formattedName };

    it('should throw if a Disk object is not provided', function() {
      assert.throws(function() {
        vm.attachDisk('disk-3', CONFIG, assert.ifError);
      }, /A Disk object must be provided/);

      assert.doesNotThrow(function() {
        vm.makeReq_ = util.noop;
        vm.attachDisk(DISK, CONFIG, assert.ifError);
      });
    });

    it('should not require an options object', function(done) {
      vm.makeReq_ = function(method, path, query, body) {
        assert.deepEqual(body, EXPECTED_BODY);
        done();
      };

      vm.attachDisk(DISK, assert.ifError);
    });

    describe('options.readOnly', function() {
      var CONFIG = extend({}, CONFIG, { readOnly: true });

      it('should set the correct mode', function(done) {
        var expectedBody = extend({}, EXPECTED_BODY, { mode: 'READ_ONLY' });

        vm.makeReq_ = function(method, path, query, body) {
          assert.deepEqual(body, expectedBody);
          done();
        };

        vm.attachDisk(DISK, CONFIG, assert.ifError);
      });

      it('should delete the readOnly property', function(done) {
        vm.makeReq_ = function(method, path, query, body) {
          assert.strictEqual(typeof body.readOnly, 'undefined');
          done();
        };

        vm.attachDisk(DISK, CONFIG, assert.ifError);
      });
    });

    it('should make the correct API request', function(done) {
      vm.makeReq_ = function(method, path, query, body, callback) {
        assert.strictEqual(method, 'POST');
        assert.strictEqual(path, '/attachDisk');
        assert.strictEqual(query, null);
        assert.deepEqual(body, EXPECTED_BODY);

        callback();
      };

      vm.attachDisk(DISK, CONFIG, done);
    });
  });

  describe('delete', function() {
    it('should make the correct API request', function(done) {
      vm.makeReq_ = function(method, path, query, body, callback) {
        assert.strictEqual(method, 'DELETE');
        assert.strictEqual(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        callback();
      };

      vm.delete(done);
    });

    it('should not require a callback', function(done) {
      vm.makeReq_ = function(method, path, query, body, callback) {
        assert.doesNotThrow(function() {
          callback();
          done();
        });
      };

      vm.delete();
    });
  });

  describe('detachDisk', function() {
    it('should throw if a Disk is not provided', function() {
      assert.throws(function() {
        vm.detachDisk('disk-name');
      }, /A Disk object must be provided/);

      assert.doesNotThrow(function() {
        vm.makeReq_ = util.noop;
        vm.detachDisk(DISK);
      });
    });

    it('should make the correct API request', function(done) {
      vm.makeReq_ = function(method, path, query, body, callback) {
        assert.strictEqual(method, 'POST');
        assert.strictEqual(path, '/detachDisk');
        assert.deepEqual(query, { deviceName: DISK.name });
        assert.strictEqual(body, null);

        callback();
      };

      vm.detachDisk(DISK, done);
    });

    it('should not require a callback', function(done) {
      vm.makeReq_ = function(method, path, query, body, callback) {
        assert.doesNotThrow(function() {
          callback();
          done();
        });
      };

      vm.detachDisk(DISK);
    });
  });

  describe('getMetadata', function() {
    it('should make the correct API request', function(done) {
      vm.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(path, '');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        done();
      };

      vm.getMetadata(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        vm.makeReq_ = function(method, path, query, body, callback) {
          callback(error, null/*usually an operation*/, apiResponse);
        };
      });

      it('should execute callback with error and API response', function(done) {
        vm.getMetadata(function(err, metadata, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(metadata, null);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          vm.getMetadata();
        });
      });
    });

    describe('success', function() {
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        vm.makeReq_ = function(method, path, query, body, callback) {
          callback(null, null/*usually an operation*/, apiResponse);
        };
      });

      it('should update the metadata to the API response', function(done) {
        vm.getMetadata(function(err) {
          assert.ifError(err);
          assert.strictEqual(vm.metadata, apiResponse);
          done();
        });
      });

      it('should exec callback with metadata and API response', function(done) {
        vm.getMetadata(function(err, metadata, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(metadata, apiResponse);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });

      it('should not require a callback', function() {
        assert.doesNotThrow(function() {
          vm.getMetadata();
        });
      });
    });
  });

  describe('getSerialPortOutput', function() {
    var EXPECTED_QUERY = { port: 1 };

    it('should default to port 1', function(done) {
      vm.makeReq_ = function(method, path, query) {
        assert.strictEqual(query.port, 1);
        done();
      };

      vm.getSerialPortOutput(assert.ifError);
    });

    it('should override the default port', function(done) {
      var port = 8001;

      vm.makeReq_ = function(method, path, query) {
        assert.strictEqual(query.port, port);
        done();
      };

      vm.getSerialPortOutput(port, assert.ifError);
    });

    it('should make the correct API request', function(done) {
      vm.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'GET');
        assert.strictEqual(path, '/serialPort');
        assert.deepEqual(query, EXPECTED_QUERY);
        assert.strictEqual(body, null);

        done();
      };

      vm.getSerialPortOutput(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        vm.makeReq_ = function(method, path, query, body, callback) {
          callback(error, null/*usually an operation*/, apiResponse);
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
        vm.makeReq_ = function(method, path, query, body, callback) {
          callback(null, null/*usually an operation*/, apiResponse);
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
      vm.makeReq_ = function(method, path, query, body, callback) {
        assert.strictEqual(method, 'POST');
        assert.strictEqual(path, '/reset');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        callback();
      };

      vm.reset(done);
    });

    it('should not require a callback', function(done) {
      vm.makeReq_ = function(method, path, query, body, callback) {
        assert.doesNotThrow(function() {
          callback();
          done();
        });
      };

      vm.reset();
    });
  });

  describe('start', function() {
    it('should make the correct API request', function(done) {
      vm.makeReq_ = function(method, path, query, body, callback) {
        assert.strictEqual(method, 'POST');
        assert.strictEqual(path, '/start');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        callback();
      };

      vm.start(done);
    });

    it('should not require a callback', function(done) {
      vm.makeReq_ = function(method, path, query, body, callback) {
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
      vm.makeReq_ = function(method, path, query, body, callback) {
        assert.strictEqual(method, 'POST');
        assert.strictEqual(path, '/stop');
        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        callback();
      };

      vm.stop(done);
    });

    it('should not require a callback', function(done) {
      vm.makeReq_ = function(method, path, query, body, callback) {
        assert.doesNotThrow(function() {
          callback();
          done();
        });
      };

      vm.stop();
    });
  });

  describe('makeReq_', function() {
    it('should make the correct request to Compute', function(done) {
      var expectedPathPrefix = '/instances/' + vm.name;

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

      vm.zone.makeReq_ = function(method_, path_, query_, body_) {
        assert.strictEqual(method_, method);
        assert.strictEqual(path_, expectedPathPrefix + path);
        assert.strictEqual(query_, query);
        assert.strictEqual(body_, body);

        done();
      };

      vm.makeReq_(method, path, query, body, assert.ifError);
    });
  });

  describe('error', function() {
    var error = new Error('Error.');
    var apiResponse = { a: 'b', c: 'd' };

    beforeEach(function() {
      vm.zone.makeReq_ = function(method, path, query, body, callback) {
        callback(error, apiResponse);
      };
    });

    it('should execute callback with error & API response', function(done) {
      vm.makeReq_('POST', '/', {}, {}, function(err, operation, resp) {
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
      vm.zone.makeReq_ = function(method, path, query, body, callback) {
        callback(null, apiResponse);
      };
    });

    it('should execute callback with a Zone object & API resp', function(done) {
      var operation = {};

      vm.zone.operation = function(name) {
        assert.strictEqual(name, apiResponse.name);
        return operation;
      };

      vm.makeReq_('POST', '/', {}, {}, function(err, operation_, resp) {
        assert.ifError(err);
        assert.strictEqual(operation_, operation);
        assert.strictEqual(resp, apiResponse);
        done();
      });
    });
  });
});
