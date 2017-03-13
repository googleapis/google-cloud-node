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
var GrpcService = require('@google-cloud/common').GrpcService;
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

function FakeGrpcService() {}

var fakeEventIdNewOverride;

function FakeEventId() {}
FakeEventId.prototype.new = function() {
  return (fakeEventIdNewOverride || util.noop).apply(null, arguments);
};

describe('Entry', function() {
  var Entry;
  var entry;

  var METADATA = {};
  var DATA = {};

  before(function() {
    Entry = proxyquire('../src/entry.js', {
      '@google-cloud/common-grpc': {
        Service: FakeGrpcService
      },
      'eventid': FakeEventId
    });
  });

  beforeEach(function() {
    fakeEventIdNewOverride = null;
    extend(FakeGrpcService, GrpcService);
    entry = new Entry(METADATA, DATA);
  });

  describe('instantiation', function() {
    it('should assign timestamp to metadata', function() {
      var now = new Date();

      var expectedTimestampBoundaries = {
        start: new Date(now.getTime() - 1000),
        end: new Date(now.getTime() + 1000)
      };

      assert(entry.metadata.timestamp >= expectedTimestampBoundaries.start);
      assert(entry.metadata.timestamp <= expectedTimestampBoundaries.end);
    });

    it('should not assign timestamp if one is already set', function() {
      var timestamp = new Date('2012');

      var entry = new Entry({
        timestamp: timestamp
      });

      assert.strictEqual(entry.metadata.timestamp, timestamp);
    });

    it('should assign insertId to metadata', function() {
      var eventId = 'event-id';

      fakeEventIdNewOverride = function() {
        return eventId;
      };

      var entry = new Entry();

      assert.strictEqual(entry.metadata.insertId, eventId);
    });

    it('should not assign insertId if one is already set', function() {
      var eventId = 'event-id';

      fakeEventIdNewOverride = function() {
        return eventId;
      };

      var userDefinedInsertId = 'user-defined-insert-id';

      var entry = new Entry({
        insertId: userDefinedInsertId
      });

      assert.strictEqual(entry.metadata.insertId, userDefinedInsertId);
    });

    it('should localize data', function() {
      assert.strictEqual(entry.data, DATA);
    });
  });

  describe('fromApiResponse_', function() {
    var RESOURCE = {};
    var entry;
    var date = new Date();

    beforeEach(function() {
      var seconds = date.getTime() / 1000;
      var secondsRounded = Math.floor(seconds);

      FakeGrpcService.structToObj_ = function(data) {
        return data;
      };

      entry = Entry.fromApiResponse_({
        resource: RESOURCE,
        payload: 'jsonPayload',
        jsonPayload: DATA,
        extraProperty: true,
        timestamp: {
          seconds: secondsRounded,
          nanos: Math.floor((seconds - secondsRounded) * 1e9)
        }
      });
    });

    it('should create an Entry', function() {
      assert(entry instanceof Entry);
      assert.strictEqual(entry.metadata.resource, RESOURCE);
      assert.strictEqual(entry.data, DATA);
      assert.strictEqual(entry.metadata.extraProperty, true);
      assert.deepEqual(entry.metadata.timestamp, date);
    });

    it('should extend the entry with proto data', function() {
      var entry = Entry.fromApiResponse_({
        resource: RESOURCE,
        payload: 'protoPayload',
        protoPayload: DATA,
        extraProperty: true
      });

      assert.strictEqual(entry.data, DATA);
    });

    it('should extend the entry with json data', function() {
      assert.strictEqual(entry.data, DATA);
    });

    it('should extend the entry with text data', function() {
      var entry = Entry.fromApiResponse_({
        resource: RESOURCE,
        payload: 'textPayload',
        textPayload: DATA,
        extraProperty: true
      });

      assert.strictEqual(entry.data, DATA);
    });
  });

  describe('toJSON', function() {
    beforeEach(function() {
      FakeGrpcService.objToStruct_ = util.noop;
    });

    it('should not modify the original instance', function() {
      var entryBefore = extend(true, {}, entry);
      entry.toJSON();
      var entryAfter = extend(true, {}, entry);
      assert.deepEqual(entryBefore, entryAfter);
    });

    it('should convert data as a struct and assign to jsonPayload', function() {
      var input = {};
      var converted = {};

      FakeGrpcService.objToStruct_ = function(obj, options) {
        assert.strictEqual(obj, input);
        assert.deepEqual(options, {
          stringify: true
        });
        return converted;
      };

      entry.data = input;
      var json = entry.toJSON();
      assert.strictEqual(json.jsonPayload, converted);
    });

    it('should throw with a struct with a circular reference', function() {
      entry.data = { val: true };
      entry.data.data = entry.data;

      assert.throws(function() {
        entry.toJSON();
      }, /The JSON data for this entry has a circular reference\./);
    });

    it('should assign string data as textPayload', function() {
      entry.data = 'string';
      var json = entry.toJSON();
      assert.strictEqual(json.textPayload, entry.data);
    });

    it('should convert a date', function() {
      var date = new Date();
      entry.metadata.timestamp = date;

      var json = entry.toJSON();

      var seconds = date.getTime() / 1000;
      var secondsRounded = Math.floor(seconds);

      assert.deepEqual(json.timestamp, {
        seconds: secondsRounded,
        nanos: Math.floor((seconds - secondsRounded) * 1e9)
      });
    });
  });
});
