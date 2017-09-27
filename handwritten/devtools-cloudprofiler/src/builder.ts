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
import {perftools} from './profile';
import {getIndexOrAdd} from './util';
import {CpuProfile, CpuProfileNode} from './v8-types';

// TODO: CpuProfiler::sample_interval_ can be customized.. should query that
const SAMPLE_INTERVAL = 1000;

// A stack of function UIDs.
type Stack = Array<number>;

let strings = [''];
let samples: Array<perftools.profiles.Sample> = [];

let locations: Array<perftools.profiles.Location> = [];
let locationMap: Map<number, perftools.profiles.Location>;

let functions: Array<perftools.profiles.Function> = [];
let functionMap: Map<number, perftools.profiles.Function>;

function getFunction(node: CpuProfileNode) {
  const id = node.callUid;
  if (functionMap.has(id)) {
    // Map.get returns possibly undefined, but we know it is defined.
    // TODO: figure out how to avoid the cast.
    return functionMap.get(id) as perftools.profiles.Function;
  }
  const f = new perftools.profiles.Function({
    id: id,
    name: getIndexOrAdd(node.functionName || '(anonymous)', strings),
    systemName: getIndexOrAdd('callUID-' + id, strings),
    filename: getIndexOrAdd(node.scriptResourceName || '(unknown)', strings)
    // start_line
  });
  functions.push(f);
  functionMap.set(id, f);
  return f;
}

function getLine(node: CpuProfileNode) {
  return new perftools.profiles.Line(
      {functionId: getFunction(node).id, line: node.lineNumber});
}

function getLocation(node: CpuProfileNode): perftools.profiles.Location {
  const id = node.callUid;
  if (locationMap.has(id)) {
    return locationMap.get(id) as perftools.profiles.Location;
  }
  const location = new perftools.profiles.Location({
    id: id,
    // mapping_id: getMapping(node).id,
    line: [getLine(node)]
  });
  locations.push(location);
  locationMap.set(id, location);
  return location;
}

const sampleValue = new perftools.profiles.ValueType({
  type: getIndexOrAdd('samples', strings),
  unit: getIndexOrAdd('count', strings)
});
const timeValue = new perftools.profiles.ValueType(
    {type: getIndexOrAdd('time', strings), unit: getIndexOrAdd('µs', strings)});

function serializeNode(node: CpuProfileNode, stack: Stack) {
  const location = getLocation(node);
  // TODO: deal with location.id being a Long.
  stack.unshift(location.id as number);  // leaf is first in the stack
  if (node.hitCount > 0) {
    const sample = new perftools.profiles.Sample({
      locationId: stack,
      value: [node.hitCount * SAMPLE_INTERVAL, node.hitCount]
      // label?
    });
    samples.push(sample);
  }
  node.children.forEach(function(child) {
    serializeNode(child, stack);
  });
  stack.shift();
}

export function serialize(
    prof: CpuProfile, startTimeNanos: number): perftools.profiles.IProfile {
  samples = [];
  locations = [];
  functions = [];
  locationMap = new Map();
  functionMap = new Map();
  strings = strings.slice(0, 5);
  serializeNode(prof.topDownRoot, []);
  return {
    sampleType: [timeValue, sampleValue],
    sample: samples,
    // mapping: mappings,
    location: locations,
    'function': functions,
    stringTable: strings,
    // opt drop_frames
    // opt keep_frames
    timeNanos: startTimeNanos,                     // Nanos
    durationNanos: prof.endTime - prof.startTime,  // Nanos

    periodType: timeValue,
    period: SAMPLE_INTERVAL
  };
}
