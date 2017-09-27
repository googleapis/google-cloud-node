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
import * as assert from 'assert';
import * as fs from 'fs';
import * as stream from 'stream';
import * as util from 'util';
import * as zlib from 'zlib';

import {serialize} from './builder';
import {perftools} from './profile';

type HrTimeTuple = [number, number];

const profiler = require('bindings')('cpu_profiler');

function timeToNanos(tuple: HrTimeTuple) {
  return tuple[0] * 1e9 + tuple[1];
}

const durationMillis = 10 * 1000;
const intervalMillis = 60 * 1000;
let isActive = false;

function profileInterval() {
  assert(durationMillis <= intervalMillis);
  const startDelay = (intervalMillis - durationMillis) * Math.random();
  setTimeout(function() {
    const startTime = Date.now();
    const runName = 'cloud-profile-' + startTime;
    profiler.startProfiling(runName, true);
    isActive = true;
    setTimeout(function() {
      isActive = false;
      const result = profiler.stopProfiling(runName);
      const serialized = serialize(result, startTime * 1e6);
      const writer = perftools.profiles.Profile.encode(serialized);
      const buffer = writer.finish();

      const outp = fs.createWriteStream(runName + '.pb.gz');
      const inp = new stream.PassThrough();
      inp.end(buffer);
      inp.pipe(zlib.createGzip()).pipe(outp).on('close', function() {
        setTimeout(
            profileInterval, intervalMillis - startDelay - durationMillis)
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
