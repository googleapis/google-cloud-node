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
var Debug = require('..');
var Debuglet = require('../src/agent/debuglet.js');
var nock = require('nock');

nock.disableNetConnect();

describe('Debug module', function() {
  var debug;

  before(function(done) {
    debug = require('..')({ projectId: '0' });
    debug.startAgent({ forceNewAgent_: true });

    debug.private_.on('started', function() {
      debug.private_.stop();
      done();
    });
  });

  it('should return an instance on invocation', function() {
    assert(debug instanceof Debug);
  });

  it('should throw on attempt to start a new agent', function() {
    assert.throws(function() { debug.startAgent(); });
    var debug2 = require('..')();
    assert.throws(function() { debug2.startAgent(); });
  });

  // Some tests depend on this private property.
  it('should have a debuglet as the private property', function() {
    assert(debug.private_);

    // The private_ property needs to be a debuglet.
    assert(debug.private_ instanceof Debuglet);

    // Debuglet needs to be an EventEmitter.
    assert(debug.private_ instanceof require('events'));
  });

});

