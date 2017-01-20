/*1* KEEP THIS CODE AT THE TOP TO AVOID LINE NUMBER CHANGES */
/*2*/'use strict';
/*3*/function fib(n) {
/*4*/  return n < 2 ? n : fib(n-2) + fib(n-1);
/*5*/}

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


var v8debugapi = require('../src/v8debugapi.js');
var Logger = require('../src/logger.js');
var config = require('../config.js');
var assert = require('assert');
var pretty = require('pretty-hrtime');
//var util = require('util');

var logger = new Logger(config.logLevel);
assert.ok(v8debugapi.init(logger, config));

function bench(message, f) {
  var t = process.hrtime();
  f();
  t = process.hrtime(t);
  console.log(message + ': ' + pretty(t));
}

bench('100x set', function() {
  for (var i = 0; i < 100; i++) {
    var bp = {
    id: 'fake-breakpoint',
    location: { path: __filename, line: 4}
    };
    v8debugapi.set(bp);
    v8debugapi.clear(bp);
  }
});

bench('100x set + validate', function() {
  for (var i = 0; i < 100; i++) {
    var bp = {
      id: 'breakpoint1',
      location: {path: __filename, line: 4},
      condition: 'x === 1, 2, {f: 2}, process.env, (this ? this : this)'
    };
    v8debugapi.set(bp);
    v8debugapi.clear(bp);
  }  
});

bench('fib(29)', function() {fib(29);});

// FIXME: the following test isn't really working because of a V8 bug.
(function() {
  var bp = {
    id: 'breakpoint1',
    location: {path: __filename, line: 4},
    condition: 'n > 50000' 
  };
  v8debugapi.set(bp); 
  bench('fib(29) with breakpoint: ', function() {
    fib(29);
  });
  v8debugapi.clear(bp);
})();


