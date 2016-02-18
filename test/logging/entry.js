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
var mockery = require('mockery-next');

var GrpcService = require('../../lib/common/grpc-service.js');

function FakeGrpcService() {}

describe('Entry', function() {
  var Entry;
  var entry;

  var RESOURCE = {};
  var DATA = {};

  before(function() {
    mockery.registerMock('../../lib/common/grpc-service.js', FakeGrpcService);

    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Entry = require('../../lib/logging/entry.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
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

    beforeEach(function() {
      entry = Entry.fromApiResponse_({
        resource: RESOURCE,
        jsonPayload: DATA,
        extraProperty: true
      });
    });

    it('should create an Entry', function() {
      assert(entry instanceof Entry);
      assert.strictEqual(entry.resource, RESOURCE);
      assert.strictEqual(entry.data, DATA);
      assert.strictEqual(entry.extraProperty, true);
    });

    it('should extend the entry with proto data', function() {
      var entry = Entry.fromApiResponse_({
        resource: RESOURCE,
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

      FakeGrpcService.objToStruct_ = function(obj) {
        assert.strictEqual(obj, input);
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
  });
});
