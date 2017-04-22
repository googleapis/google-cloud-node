/*1* KEEP THIS CODE AT THE TOP TO AVOID LINE NUMBER CHANGES */
/*2*/'use strict';
/*3*/function foo(a) {
/*4*/  process.nextTick(function() {
/*5*/    a = 0;
/*6*/  });
/*7*/}
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

var breakpointInFoo = {
  id: 'fake-id-123',
  location: { path: 'test-duplicate-expressions.js', line: 4 }
};

var assert = require('assert');
var extend = require('extend');
var v8debugapi = require('../src/agent/v8debugapi.js');
var common = require('@google-cloud/common');
var defaultConfig = require('../src/agent/config.js');
var SourceMapper = require('../src/agent/sourcemapper.js');
var scanner = require('../src/agent/scanner.js');
var path = require('path');

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

  it('should not duplicate expressions', function(done) {
    api.set(breakpointInFoo, function(err) {
      assert.ifError(err);
      api.wait(breakpointInFoo, function(err) {
        assert.ifError(err);
        var frames = breakpointInFoo.stackFrames[0];
        var exprs = frames.arguments.concat(frames.locals);
        var varTableIndicesSeen = [];
        exprs.forEach(function(expr) {
          assert.equal(varTableIndicesSeen.indexOf(expr.varTableIndex), -1);
          varTableIndicesSeen.push(expr.varTableIndex);
        });
        api.clear(breakpointInFoo);
        done();
      });
      process.nextTick(foo);
    });
  });
});
