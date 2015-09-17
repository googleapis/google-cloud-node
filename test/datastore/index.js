/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

var entity = {
  Int: function(val) {
    entity.intCalledWith = val;
  },
  Double: function(val) {
    entity.doubleCalledWith = val;
  },
  intCalledWith: null,
  doubleCalledWith: null
};

var assert = require('assert');
var mockery = require('mockery');

describe('Datastore', function() {
  var datastore;

  before(function() {
    mockery.registerMock('./entity', entity);
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });
    datastore = require('../../lib/datastore/index.js');
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  it('should expose Dataset class', function() {
    assert.equal(typeof datastore.dataset, 'function');
  });

  it('should expose Int builder', function() {
    var anInt = 7;
    datastore.int(anInt);
    assert.equal(entity.intCalledWith, anInt);
  });

  it('should expose Double builder', function() {
    var aDouble = 7.0;
    datastore.double(aDouble);
    assert.equal(entity.doubleCalledWith, aDouble);
  });
});
