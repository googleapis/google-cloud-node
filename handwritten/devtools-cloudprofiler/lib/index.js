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
var util = require('util');
var profiler = require('bindings')('cpu_profiler');
var zlib = require('zlib');
var fs = require('fs');
var stream = require('stream');

var builder = require('./builder.js');

function timeToNanos(tuple) { return tuple[0] * 1e9 + tuple[1]; }

var durationMillis = 10 * 1000;
var intervalMillis = 60 * 1000;
var isActive = false;

function profileInterval() {
  assert(durationMillis <= intervalMillis);
  var startDelay = Math.random(0, intervalMillis - durationMillis);
  setTimeout(function() {
    var startTime = Date.now();
    var runName = 'cloud-profile-' + startTime;
    profiler.startProfiling(runName, true);
    isActive = true;
    setTimeout(function() {
      isActive = false;
      var result = profiler.stopProfiling(runName);
      var processed =
          builder.serialize(result, startTime * 1e6).encode().toBuffer();
      var outp = fs.createWriteStream(runName + '.pb.gz');
      var inp = new stream.PassThrough();
      inp.end(processed);
      inp.pipe(zlib.createGzip()).pipe(outp).on('close', function() {
        setTimeout(profileInterval,
                   intervalMillis - startDelay - durationMillis)
            .unref();
      });
    }, durationMillis).unref();
  }, startDelay).unref();
}

process.on('exit', function() {
  if (isActive) {
    profiler.stopProfiling();
  }
});
process.on('uncaughtException', function() {
  if (isActive) {
    profiler.stopProfiling();
  }
});

profileInterval();

/*function printNode(node, indent) {
  indent = indent || 0;
  var s = sprintf('%5u %s %d #%d %d %s %d', node.hitCount,
                  Array(indent).join(' '), indent / 2, node.id, node.callUID,
                  node.functionName, node.scriptId);
  if (node.url !== '') {
    s += ' ' + node.url + ':' + node.lineNumber;
  }
  if (node.lineTicks)
    s += ' lineTicks ' + util.inspect(node.lineTicks);

  // TODO: deopt infos
  // TODO: bailout reason
  console.log(s);
  node.children.forEach(function(child) { printNode(child, indent + 2); });
}*/
