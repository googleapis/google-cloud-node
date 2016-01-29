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

var profiler = require('bindings')('sampling_heap_profiler');
var stats = require('bindings')('statistics');
var zlib = require('zlib');
var fs = require('fs');
var stream = require('stream');

var builder = require('./heap_builder.js');

var startTime = Date.now();
// console.log('V8 statistics', require('v8').getHeapStatistics());
// console.log('V8 heap statistics', stats.getHeapSpaceStatistics());

profiler.startSamplingHeapProfiler();

var intervalMillis = 5 * 1000;

function profileInterval() {
  setTimeout(function() {
    var endTime = Date.now();
    var runName = 'cloud-profile-' + endTime;
    // console.log('V8 statistics', require('v8').getHeapStatistics());
    // console.log('V8 heap statistics', stats.getHeapSpaceStatistics());
    var result = profiler.getAllocationProfile();
    // console.log('sample count * sample rate', result.length * 1024);
    var processed = builder.serialize(result, startTime * 1e6, endTime * 1e6)
                        .encode()
                        .toBuffer();
    var outp = fs.createWriteStream(runName + '.pb.gz');
    var inp = new stream.PassThrough();
    inp.end(processed);
    inp.pipe(zlib.createGzip()).pipe(outp).on('close', profileInterval);
  }, intervalMillis).unref();
}

process.on('exit', function() { profiler.stopSamplingHeapProfiler(); });

process.on('uncaughtException',
           function(e) { profiler.stopSamplingHeapProfiler(); throw e; });

profileInterval();
