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

var ProtoBuf = require('protobufjs');
// TODO: use the async version of the following.
var builder = ProtoBuf.loadProtoFile('third_party/proto/profile.proto');
var perftools = builder.build('perftools');

// TODO: CpuProfiler::sample_interval_ can be customized.. should query that
const SAMPLE_INTERVAL = 1000;

var Profile = perftools.profiles.Profile;
var ValueType = perftools.profiles.ValueType;
var Sample = perftools.profiles.Sample;
var Location = perftools.profiles.Location;
var Mapping = perftools.profiles.Mapping;
var Function = perftools.profiles.Function;
var Line = perftools.profiles.Line;

var strings = [ '' ];
var samples = [];

var locations = [];
var locationMap = {};

var functions = [];
var functionMap = {};

function getStringIndex(str) {
  var index = strings.indexOf(str);
  if (index !== -1) {
    return index;
  }
  index = strings.push(str);
  return index - 1;
}

function getFunction(node) {
  var id = node.callUid;
  if (functionMap[id]) {
    return functionMap[id];
  }
  var f = new Function({
    id : id,
    name : getStringIndex(node.functionName || '(anonymous)'),
    system_name : getStringIndex('callUID-' + id),
    filename : getStringIndex(node.scriptResourceName)
    // start_line
  });
  functions.push(f);
  functionMap[id] = f;
  return f;
}

function getLine(node) {
  return new Line({function_id : getFunction(node).id, line : node.lineNumber});
}

// var mappings = [];
// var mappingMap = {};
// function getMapping(node) {
//   // mapping id must be non-zero while script id can be zero
//   var id = node.scriptId + 1;
//   if (mappingMap[id]) {
//     return mappingMap[id];
//   }
//   var mapping = new Mapping({
//     // FIXME: id needs to be non-zero
//     id : id,
//     filename : getStringIndex(node.url),
//     has_functions : true,
//     has_line_numbers : true
//   });
//   mappings.push(mapping);
//   mappingMap[id] = mapping;
//   return mapping;
// }

function getLocation(node) {
  var id = node.callUid;
  if (locationMap[id]) {
    return locationMap[id];
  }
  var location = new Location({
    id : id,
    // mapping_id: getMapping(node).id,
    line : [ getLine(node) ]
  });
  locations.push(location);
  locationMap[id] = location;
  return location;
}

var sampleValue =
    new ValueType(getStringIndex('samples'), getStringIndex('count'));
var timeValue = new ValueType(getStringIndex('time'), getStringIndex('µs'));

function serializeNode(node, stack) {
  var location = getLocation(node);
  stack.unshift(location.id); // leaf is first in the stack
  if (node.hitCount > 0) {
    var sample = new Sample({
      location_id : stack,
      value : [ node.hitCount * SAMPLE_INTERVAL, node.hitCount ]
      // label?
    });
    samples.push(sample);
  }
  node.children.forEach(function(child) { serializeNode(child, stack); });
  stack.shift();
}

function serialize(prof, startTimeNanos) {
  samples = [];
  locations = [];
  functions = [];
  locationMap = {};
  functionMap = {};
  strings = strings.slice(0, 5);
  serializeNode(prof.topDownRoot, []);
  var profile = new Profile({
    sample_type : [ timeValue, sampleValue ],
    sample : samples,
    // mapping: mappings,
    location : locations, "function" : functions,
    string_table : strings,
    // opt drop_frames
    // opt keep_frames
    time_nanos : startTimeNanos,                    // Nanos
    duration_nanos : prof.endTime - prof.startTime, // Nanos

    period_type : timeValue,
    period : SAMPLE_INTERVAL
  });
  return profile;
}

module.exports.serialize = serialize;
