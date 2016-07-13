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

var GrpcService = require('@google-cloud/common').GrpcService;

function FakeGrpcService() {}

describe('Entry', function() {
  var Entry;
  var entry;

  var RESOURCE = {};
  var DATA = {};

  before(function() {
    Entry = proxyquire('../src/entry.js', {
      '@google-cloud/common': {
        GrpcService: FakeGrpcService
      }
    });
  });

  beforeEach(function() {
    extend(FakeGrpcService, GrpcService);
    entry = new Entry(RESOURCE, DATA);
  });

  describe('instantiation', function() {
    it('should treat resource as data if data is not provided', function() {
      var entry = new Entry(DATA);
      assert.strictEqual(entry.data, DATA);
      assert.strictEqual(entry.resource, undefined);
    });

    it('should localize resource and data', function() {
      assert.strictEqual(entry.resource, RESOURCE);
      assert.strictEqual(entry.data, DATA);
    });
  });

  describe('fromApiResponse_', function() {
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
      assert.strictEqual(entry.resource, RESOURCE);
      assert.strictEqual(entry.data, DATA);
      assert.strictEqual(entry.extraProperty, true);
      assert.deepEqual(entry.timestamp, date);
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
    it('should not modify the original instance', function() {
      var entryBefore = extend(true, {}, entry);
      entry.toJSON();
      var entryAfter = extend(true, {}, entry);
      assert.deepEqual(entryBefore, entryAfter);
    });

    it('should only include correct properties', function() {
      var propertiesToInclude = [
        'logName',
        'resource',
        'timestamp',
        'severity',
        'insertId',
        'httpRequest',
        'labels',
        'operation'
      ];

      var value = 'value';

      propertiesToInclude.forEach(function(property) {
        entry[property] = value;
      });

      entry.extraProperty = true;

      var json = entry.toJSON();

      assert(propertiesToInclude.every(function(property) {
        if (property === 'resource') {
          return json[property].type === value;
        }

        return json[property] === value;
      }));

      // Was removed for JSON representation...
      assert.strictEqual(json.extraProperty, undefined);
      // ...but still exists on the Entry.
      assert.strictEqual(entry.extraProperty, true);
    });

    it('should convert a string resource to an object', function() {
      entry.resource = 'resource-name';

      var json = entry.toJSON();

      assert.deepEqual(json.resource, {
        type: entry.resource
      });
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

    it('should assign string data as textPayload', function() {
      entry.data = 'string';
      var json = entry.toJSON();
      assert.strictEqual(json.textPayload, entry.data);
    });

    it('should convert a date', function() {
      var date = new Date();
      entry.timestamp = date;

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
