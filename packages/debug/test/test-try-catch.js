/*1* KEEP THIS CODE AT THE TOP TO AVOID LINE NUMBER CHANGES */ /* jshint shadow:true */
/*2*/'use strict';
/*3*/function foo() {
/*4*/ try {
/*5*/   throw new Error('A test');
/*6*/ } catch (e) {
/*7*/   var e = 2;
/*8*/   return e;
/*9*/ }
/*10*/}
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

var assert = require('assert');
var extend = require('extend');
var v8debugapi = require('../src/agent/v8debugapi.js');
var common = require('@google-cloud/common');
var defaultConfig = require('../src/agent/config.js');
var SourceMapper = require('../src/agent/sourcemapper.js');
var scanner = require('../src/agent/scanner.js');
var path = require('path');
var semver = require('semver');

function stateIsClean(api) {
  assert.equal(api.numBreakpoints_(), 0,
    'there should be no breakpoints active');
  assert.equal(api.numListeners_(), 0,
    'there should be no listeners active');
  return true;
}

describe('v8debugapi', function() {
  var config = extend({}, defaultConfig, {
    workingDirectory: path.join(process.cwd(), 'test'),
    forceNewAgent_: true
  });
  var logger = common.logger({ logLevel: config.logLevel });
  var api = null;

  beforeEach(function(done) {
    if (!api) {
      scanner.scan(true, config.workingDirectory, /.js$/,
      function(err, fileStats, hash) {
        assert(!err);

        var jsStats = fileStats.selectStats(/.js$/);
        var mapFiles = fileStats.selectFiles(/.map$/, process.cwd());
        SourceMapper.create(mapFiles, function(err, mapper) {
          assert(!err);

          api = v8debugapi.create(logger, config, jsStats, mapper);
          assert.ok(api, 'should be able to create the api');
          done();
        });
      });
    } else {
      assert(stateIsClean(api));
      done();
    }
  });
  afterEach(function() { assert(stateIsClean(api)); });
  it('Should read e as the caught error', function(done) {
    var brk = {
      id: 'fake-id-123',
      location: { path: 'test-try-catch.js', line: 7 }
    };
    api.set(brk, function(err) {
      assert.ifError(err);
      api.wait(brk, function(err) {
        assert.ifError(err);
        var frame = brk.stackFrames[0];
        var args = frame.arguments;
        var locals = frame.locals;
        assert.equal(locals.length, 1, 'There should be one local');
        if (semver.satisfies(process.version, '<1.6')) {
          // Try/Catch scope-walking does not work on 0.12
          assert.deepEqual(
            locals[0],
            {name: 'e', value: 'undefined'}
          );
        } else {
          assert.equal(args.length, 0, 'There should be zero arguments');
          var e = locals[0];
          assert(e.name === 'e');
          assert(Number.isInteger(e.varTableIndex));
        }
        assert.equal(args.length, 0, 'There should be zero arguments');     
        api.clear(brk);
        done();
      });
      process.nextTick(foo.bind(null, 'test'));
    });
  });
  it('Should read e as the local error', function(done) {
    var brk = {
      id: 'fake-id-123',
      location: { path: 'test-try-catch.js', line: 8 }
    };
    api.set(brk, function(err) {
      assert.ifError(err);
      api.wait(brk, function(err) {
        assert.ifError(err);
        var frame = brk.stackFrames[0];
        var args = frame.arguments;
        var locals = frame.locals;
        if (semver.satisfies(process.version, '<1.6')) {
          // Try/Catch scope-walking does not work on 0.12
          assert.deepEqual(
            locals[0],
            {name: 'e', value: 'undefined'}
          );
        } else {
          assert.equal(args.length, 0, 'There should be zero arguments');
          assert.equal(locals.length, 1, 'There should be one local');
          assert.deepEqual(
            locals[0],
            {name: 'e', value: '2'}
          );
          assert.equal(args.length, 0, 'There should be zero arguments');
        }
        api.clear(brk);
        done();
      });
      process.nextTick(foo.bind(null, 'test'));
    });
  });
});
