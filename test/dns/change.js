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
var mockery = require('mockery');
var nodeutil = require('util');

var ServiceObject = require('../../lib/common/service-object.js');
var util = require('../../lib/common/util.js');

function FakeServiceObject() {
  this.calledWith_ = arguments;
  ServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeServiceObject, ServiceObject);

describe('Change', function() {
  var Change;
  var change;

  var ZONE = {
    name: 'zone-name',
    createChange: util.noop
  };

  var CHANGE_ID = 'change-id';

  before(function() {
    mockery.registerMock('../common/service-object.js', FakeServiceObject);

    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });

    Change = require('../../lib/dns/change.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    change = new Change(ZONE, CHANGE_ID);
  });

  describe('instantiation', function() {
    it('should inherit from ServiceObject', function(done) {
      var zoneInstance = extend({}, ZONE, {
        createChange: {
          bind: function(context) {
            assert.strictEqual(context, zoneInstance);
            done();
          }
        }
      });

      var change = new Change(zoneInstance, CHANGE_ID);
      assert(change instanceof ServiceObject);

      var calledWith = change.calledWith_[0];

      assert.strictEqual(calledWith.parent, zoneInstance);
      assert.strictEqual(calledWith.baseUrl, '/changes');
      assert.strictEqual(calledWith.id, CHANGE_ID);
      assert.deepEqual(calledWith.methods, {
        exists: true,
        get: true,
        getMetadata: true
      });
    });
  });
});
