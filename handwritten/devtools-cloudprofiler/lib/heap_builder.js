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
var builder = ProtoBuf.loadProtoFile('third_party/proto/profile.proto');
var perftools = builder.build('perftools');

// TODO: pass this value explicitly when starting the profiler
const SAMPLE_PERIOD = 512 * 1024;

var Profile = perftools.profiles.Profile;
var ValueType = perftools.profiles.ValueType;
var Sample = perftools.profiles.Sample;
var Location = perftools.profiles.Location;
var Mapping = perftools.profiles.Mapping;
var Function = perftools.profiles.Function;
var Line = perftools.profiles.Line;

var strings = [ '' ];
var samples = [];

var locationIds = [ 'dummy' ];
var locations = [];
var locationMap = {};

var functionIds = [ 'dummy' ];
var functions = [];
var functionMap = {};

function getIndexOrAdd(str, lst) {
  var index = lst.indexOf(str);
  if (index !== -1) {
    return index;
  }
  index = lst.push(str);
  return index - 1;
}

function getStringIndex(str) { return getIndexOrAdd(str, strings); }

function getFunction(stackNode) {
  var unique = JSON.stringify(stackNode);
  var id = getIndexOrAdd(unique, functionIds);
  if (functionMap[id]) {
    return functionMap[id];
  }
  var f = new Function({
    id : id,
    name : getStringIndex(stackNode.name || '(anonymous)'),
    system_name : getStringIndex('callUID-' + id),
    filename : getStringIndex(stackNode.scriptName)
    // start_line
  });
  functions.push(f);
  functionMap[id] = f;
  return f;
}

function getLine(stackNode) {
  return new Line(
      {function_id : getFunction(stackNode).id, line : stackNode.line});
}

function getLocation(stackNode) {
  var unique = JSON.stringify(stackNode);
  var id = getIndexOrAdd(unique, locationIds);
  if (locationMap[id]) {
    return locationMap[id];
  }
  var location = new Location({
    id : id,
    // mapping_id: getMapping(node).id,
    line : [ getLine(stackNode) ]
  });
  locations.push(location);
  locationMap[id] = location;
  return location;
}

var countValue =
    new ValueType(getStringIndex('objects'), getStringIndex('count'));
var bytesValue =
    new ValueType(getStringIndex('space'), getStringIndex('bytes'));

function serializeNode(node, stack) {
  var location = getLocation(node);
  stack.unshift(location.id); // leaf is first in the stack
  for (var i in node.allocations) {
    var alloc = node.allocations[i];
    var sample = new Sample({
      location_id : stack,
      value : [ alloc.count, alloc.count * alloc.size ]
      // label?
    });
    samples.push(sample);
  }
  node.children.forEach(function(child) { serializeNode(child, stack); });
  stack.shift();
}

function serialize(prof, startTimeNanos, endTimeNanos) {
  samples = [];
  locations = [];
  functions = [];
  locationMap = {};
  functionMap = {};
  strings = strings.slice(0, 5);
  locationIds = locationIds.slice(0, 1);
  functionIds = functionIds.slice(0, 1);
  serializeNode(prof, []);
  var profile = new Profile({
    sample_type : [ countValue, bytesValue ],
    sample : samples,
    // mapping: mappings,
    location : locations, "function" : functions,
    string_table : strings,
    // opt drop_frames
    // opt keep_frames
    time_nanos : startTimeNanos,                    // Nanos
    duration_nanos : endTimeNanos - startTimeNanos, // Nanos

    period_type : bytesValue,
    period : SAMPLE_PERIOD
  });
  return profile;
}

module.exports.serialize = serialize;
