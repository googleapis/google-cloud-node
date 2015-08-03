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
var format = require('string-format-obj');

var Change = require('../../lib/dns/change.js');
var util = require('../../lib/common/util.js');

describe('Change', function() {
  var ZONE = {
    name: 'zone-name',
    dns: {
      makeReq_: util.noop
    }
  };

  var CHANGE_ID = 'change-id';

  var change;

  beforeEach(function() {
    change = new Change(ZONE, CHANGE_ID);
  });

  describe('instantiation', function() {
    it('should localize the zone name', function() {
      assert.strictEqual(change.zoneName, ZONE.name);
    });

    it('should localize the id', function() {
      assert.strictEqual(change.id, CHANGE_ID);
    });

    it('should create a makeReq_ function from the Zone', function(done) {
      var zone = extend({}, ZONE, {
        dns: {
          makeReq_: function() {
            assert.strictEqual(this, zone.dns);
            done();
          }
        }
      });

      new Change(zone, CHANGE_ID).makeReq_();
    });
  });

  describe('getMetadata', function() {
    it('should make the correct API request', function(done) {
      change.makeReq_ = function(method, path, query, body) {
        assert.strictEqual(method, 'GET');

        var expectedPath = format('/managedZones/{z}/changes/{c}', {
          z: ZONE.name,
          c: CHANGE_ID
        });
        assert.strictEqual(path, expectedPath);

        assert.strictEqual(query, null);
        assert.strictEqual(body, null);

        done();
      };

      change.getMetadata(assert.ifError);
    });

    describe('error', function() {
      var error = new Error('Error.');
      var apiResponse = { a: 'b', c: 'd' };

      beforeEach(function() {
        change.makeReq_ = function(method, path, query, body, callback) {
          callback(error, apiResponse);
        };
      });

      it('should execute callback with error and API response', function(done) {
        change.getMetadata(function(err, metadata, apiResponse_) {
          assert.strictEqual(err, error);
          assert.strictEqual(apiResponse_, apiResponse);
          done();
        });
      });
    });

    describe('success', function() {
      var metadata = { e: 'f', g: 'h' };

      beforeEach(function() {
        change.makeReq_ = function(method, path, query, body, callback) {
          callback(null, metadata, metadata);
        };
      });

      it('should update the metadata', function(done) {
        change.getMetadata(function(err) {
          assert.ifError(err);
          assert.strictEqual(change.metadata, metadata);
          done();
        });
      });

      it('should execute callback with metadata & API resp', function(done) {
        change.getMetadata(function(err, metadata_, apiResponse_) {
          assert.ifError(err);
          assert.strictEqual(metadata_, metadata);
          assert.strictEqual(apiResponse_, metadata);
          done();
        });
      });
    });
  });
});
